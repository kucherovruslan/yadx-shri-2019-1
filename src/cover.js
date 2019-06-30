const cover = {
    block: 'cover',
    mix: [
        {
            block: 'card',
            mods: {
                view: 'default'
            }
        },
        {
            block: 'theme',
            mods: {
                color: 'project-brand'
            }
        }
    ],
    content: [
        {
            block: 'cover',
            elem: 'info',
            mix: [
                {
                    block: 'card',
                    elem: 'content',
                    elemMods: {
                        'space-a': 'xxl'
                    }
                }
            ],
            content: [
                {
                    block: 'image'
                },
                {
                    block: 'text',
                    mods: {
                        size: 'xxl',
                        view: 'primary'
                    },
                    content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    }
                },{
                    block: 'text',
                    mods: {
                        size: 'xxl',
                        view: 'primary'
                    },
                    content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'm'
                        }
                    }
                }
            ]
        },
        {
            block: 'cover',
            elem: 'preview',
            mix: [
                {
                    block: 'theme',
                    mods: {
                        color: 'project-brand'
                    }
                }
            ],
        },
        {
            block: 'cover',
            elem: 'footer',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'space-a': 'xxl'
                    }
                }
            ],
            content: {
                block: 'button',
                mods: {
                    size: 'l',
                    width: 'full'
                }
            }
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const html = parse(cover);
    const root = document.getElementById('root');
    root.innerHTML = html;
})