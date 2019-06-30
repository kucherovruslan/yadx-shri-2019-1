const offer = {
    block: 'offer',
    mix: [
        {
            block: 'theme',
            mods: {
                color: 'megafon-brand'
            }
        },
        {
            block: 'card',
            mods: {
                view: 'default'
            }
        }
    ],
    content: [
        {
            block: 'offer',
            elem: 'partner',
            mix: [
                {
                    block: 'card',
                    elem: 'content',
                    elemMods: {
                        'space-a': 'xl'
                    }
                }
            ],
            content: {
                block: 'brand-logo',
                mods: {
                    name: 'megafon',
                    size: 'm'
                }
            }
        },
        {
            block: 'offer',
            elem: 'footer',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'space-a': 'xl'
                    }
                }
            ],
            content: [
                {
                    block: 'offer',
                    elem: 'name',
                    content: {
                        block: 'text',
                        mods: {
                            view: 'ghost',
                            size: 's',
                        },
                        content: generateWord('m')
                    }
                },
                {
                    block: 'offer',
                    elem: 'sale',
                    content: {
                        block: 'text',
                        mods: {
                            view: 'primary',
                            size: 'xxl',
                        },
                        content: generateWord('m')
                    }
                },
                {
                    block: 'text',
                    mods: {
                        view: 'secondary',
                        size: 'm'
                    },
                    content: [
                        generateWord('l'),
                        generateWord('m'),
                        generateWord('s'),

                        generateWord('l'),
                        generateWord('m'),
                        generateWord('s'),

                        generateWord('l'),
                        generateWord('s'),
                    ]
                }
            ]
        }
    ]
}



document.addEventListener('DOMContentLoaded', () => {
    const html = parse(offer);
    const root = document.getElementById('root');
    root.innerHTML = html;
})