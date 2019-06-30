const getAdvantage = (textWords) => {
    const advantage = {
        block: 'subscription',
        elem: 'advantage',
        mix: [
            {
                block: 'list',
                elem: 'item',
                elemMods: {
                    'space-b': 's'
                }
            }
        ],
        content: {
            block: 'text',
            mods: {
                view: 'primary',
                size: 'l'
            },
            content: textWords.map(word => generateWord(word))
        }
    }

    return advantage;
}


const subscription = {
    block: 'subscription',
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
            block: 'subscription',
            elem: 'info',
            mix: [
                {
                    block: 'card',
                    elem: 'content',
                    elemMods: {
                        'space-a': 'xl'
                    }
                }
            ],
            content: [
                {
                    block: 'subscription',
                    elem: 'title',
                    content: {
                        block: 'text',
                        mods: {
                            view: 'primary',
                            size: 'xxl'
                        },
                        content: {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                                width: 'l'
                            }
                        }
                    }
                },
                {
                    block: 'subscription',
                    elem: 'advantages',
                    mix: [
                        {
                            block: 'list'
                        }
                    ],
                    content: [
                        getAdvantage(['l', 'm', 's']),
                        getAdvantage(['l', 's', 's']),
                        getAdvantage(['m', 's', 's']),
                        getAdvantage(['l', 's', 's']),
                        getAdvantage(['m', 's', 's']),
                    ]
                }
            ]
        },
        {
            block: 'subscription',
            elem: 'footer',
            mix: [
                {
                    block: 'card',
                    elem: 'footer',
                    elemMods: {
                        'space-a': 'xl'
                    }
                },
                {
                    block: 'list'
                }
            ],
            content: [
                {
                    block: 'input',
                    mods: {
                        size: 'l'
                    }
                },
                {
                    block: 'button',
                    mods: {
                        size: 'l',
                        width: 'full'
                    }
                }
            ]
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const html = parse(subscription);
    const root = document.getElementById('root');
    root.innerHTML = html;
})