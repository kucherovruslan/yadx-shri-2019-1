const event = {
    block: 'event',
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
                color: 'project-inverse'
            }
        }
    ], 
    content: [
        {
            block: 'event',
            elem: 'content',
            mix: [
                {
                    block: 'card',
                    elem: 'content',
                    elemMods: {
                        'vertical-align': 'center',
                        distribute: 'center',
                        'space-a': 'xxl'
                    }
                }
            ],
            content: [
                {
                    block: 'event',
                    elem: 'preview',
                    content: [
                        {
                            block: 'event',
                            elem: 'speaker',
                            content: {
                                block: 'avatar',
                                mods: {
                                    size: 'm'
                                }
                            }
                        },
                        {
                            block: 'brand-logo',
                            mods: {
                                name: 'mts',
                                size: 'm'
                            }
                        }
                    ]

                },
                {
                    block: 'event',
                    elem: 'title',
                    content: {
                        block: 'text',
                        mods: {
                            view: 'primary',
                            size: 'xxl',
                            'align': 'center'
                        },
                        content: generateWord('l')
                    }
                },
                {
                    block: 'event',
                    elem: 'description',
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'l',
                                align: 'center'
                            },
                            content: [
                                generateWord('l'),
                                generateWord('l'),
                                generateWord('l'),
                            ]
                        },
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'l',
                                align: 'center'
                            },
                            content: [
                                generateWord('l'),
                                generateWord('l'),
                                generateWord('l'),
                            ]
                        },
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'l',
                                align: 'center'
                            },
                            content: [
                                generateWord('l'),
                                generateWord('l'),
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'event',
            elem: 'footer',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'vertical-align': 'center',
                        distribute: 'center',
                        'space-a': 'xxl'
                    },
                }
            ],
            content: {
                block: 'text',
                mods: {
                    view: 'link',
                    size: 'xl',
                    align: 'center'
                },
                content: {
                    block: 'text',
                    elem: 'word',
                    elemMods: {
                        width: 'm'
                    }
                }
            }
        }
    ]
}



document.addEventListener('DOMContentLoaded', () => {
    const html = parse(event);
    const root = document.getElementById('root');
    root.innerHTML = html;
})