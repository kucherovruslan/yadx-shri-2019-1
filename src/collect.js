const generateWord = (width) => {
    const word = {
        block: 'text',
        elem: 'word',
        elemMods: {
            width: width
        }
    };
    return word;
}


const collect = {
    block: 'collect',
    mix: [
        {
            block: 'card',
            mods: {
                view: 'default',
                border: 'all',
            }
        },
        {
            block: 'theme',
            mods: {
                color: 'project-inverse'
            }
        }
    ],
    content: [
        {
            block: 'collect',
            elem: 'image',
            mix: [
                {
                    block: 'card',
                    elem: 'content'
                }
            ],
            content: {
                block: 'image'
            }
        },
        {
            block: 'collect',
            elem: 'progress',
            content: {
                block: 'collect',
                elem: 'done',
                elemMods: {
                    size: 'two-third'
                }
            }
        },
        {
            block: 'collect',
            elem: 'footer',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'space-a': 'l'
                    }
                }
            ],
            content: [

                {
                    block: 'text',
                    mods: {
                        size: 'l',
                        view: 'primary'
                    },
                    content: [
                        generateWord('m'),
                        generateWord('m'),
                        generateWord('m'),
                    ]
                },
                {
                    block: 'text',
                    mods: {
                        size: 'm',
                        view: 'secondary'
                    },
                    content: [
                        generateWord('m'),
                        generateWord('m'),
                        generateWord('m'),
                        generateWord('s'),
                        generateWord('s'),

                        generateWord('m'),
                        generateWord('m'),
                        generateWord('m'),
                        generateWord('s'),

                        generateWord('m'),
                        generateWord('m'),
                        generateWord('m'),
                    ]
                },
                {
                    block: 'text',
                    mods: {
                        size: 'm',
                        view: 'secondary'
                    },
                    content: [
                        generateWord('m'),
                        generateWord('m'),
                        generateWord('s'),
                    ]
                }
            ]
        }
    ]
}




document.addEventListener('DOMContentLoaded', () => {
    const html = parse(collect);
    const root = document.getElementById('root');
    root.innerHTML = html;
})