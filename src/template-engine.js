
//html
//errors
//export

function generateMods(mod, value) {
    let result;

    if (typeof value === 'string') { 
        result = `_${mod}_${value}`;
    }
    // what if value === false ???
    if (typeof value === 'boolean') {
        result =  `_${mod}`;
    }
    
    return result;
}

function generateClassList(bemjson) {
    const classList = [];

    if (bemjson.elem) {
        classList.push(`${bemjson.block}__${bemjson.elem}`);
    } else {
        classList.push(`${bemjson.block}`);
    }

    if (bemjson.elem && bemjson.elemMods) {

        for (let [mod, value] of Object.entries(bemjson.elemMods)) {
            let stringMod = generateMods(mod, value);
            classList.push(`${bemjson.block}__${bemjson.elem}${stringMod}`);
        }

    } else {
        if (bemjson.mods) {
            for (let [mod, value] of Object.entries(bemjson.mods)) {
                let stringMod = generateMods(mod, value);
                classList.push(`${bemjson.block}${stringMod}`);
            }
        }
    }

    if (bemjson.mix) {
        bemjson.mix.forEach(item => {
            classList.push(...generateClassList(item));
        })
    }

    return classList;
}

function buildNode(parentNode, bemjson) {
    let newNode = document.createElement('div');
    const classList = generateClassList(bemjson);

    if (bemjson.content) {
        if (Array.isArray(bemjson.content)) {
            bemjson.content.forEach(item => {
                buildNode(newNode, item);
            });
        } else {
            buildNode(newNode, bemjson.content);
        }

    }

    classList.forEach(cls => newNode.classList.add(cls));

    if (parentNode) {
        parentNode.appendChild(newNode);
        return parentNode;
    } else {
        return newNode;
    }
}

function parse(bemjson) {
    let html = '';

    if (bemjson) {
        const node = buildNode(null, bemjson);
        html = node.outerHTML;
    }
    
    return html;
}

const json = {
    block: 'my-block',
    content: [
        {
        block: 'my-block',
        elem: 'my-block-element'
        },
        {block:'block2'},
        {block: 'block3', elem: 'elem3'}
    ]
}
// const value = parse(json);
// console.log(value)