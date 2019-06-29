//card, text
//высота изображения — 160px.

const product = {
    block: 'product',
    mix: [
        {
            block: 'card',
            mods: {
                view: 'default',
                border: 'all'
            }
        }
    ],
    content: [
        {
            block: 'product',
            elem: 'content',
            mix: [
                {
                    block: 'card',
                    elem: 'content',
                    elemMods: {
                        'space-a': 'm'
                    }
                }
            ],
            content: [
                {
                    block: 'image',
                }
            ]
        },
        {
            block: 'product',
            elem: 'footer',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'space-a': 'm'
                    }
                }
            ]

        }
    ]
}


document.addEventListener('DOMContentLoaded', () => {
    const html = parse(product);
    const root = document.getElementById('root');
    root.innerHTML = html;
})