const commercial = {
    block: 'commercial',
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
            block: 'commercial',
            elem: 'pic',
            mix: [
                {
                    block: 'card',
                    elem: 'content',
                    elemMods: {
                        'space-a': 'xxl'
                    }
                }
            ],
            content: {
                block: 'image'
            }
        },
        {
            block: 'commercial',
            elem: 'info',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'space-a': 'xxl'
                    }
                }
            ],
            content: [
                {
                    block: 'text',
                    mods: {
                        view: 'primary',
                        size: 's'
                    },
                    content: [
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'l'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                        {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'm'
                            }
                        },
                    ]
                },
                {
                    block: 'navigation',
                    content: [
                        {
                            block: 'page-button'
                        },
                        {
                            block: 'page-button'
                        },
                        {
                            block: 'page-button'
                        }
                    ]
                }
            ]
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const html = parse(commercial);
    const root = document.getElementById('root');
    root.innerHTML = html;
})