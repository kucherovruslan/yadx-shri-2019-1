
const generateHistoryItem = (brandName) => {
    const historyItem = {
        block: 'history',
        elem: 'transaction',
        mix: [
            {
                block: 'list',
                elem: 'item',
                elemMods: {
                    border: 'bottom',
                    'space-a': 'l'
                }
            }
        ],
        content: [
            {
                block: 'history',
                elem: 'show',
                mix: [
                    {
                        block: 'e-accordion',
                        elem: 'short'
                    },
                    {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                            'vertical-align': 'center'
                        }
                    }
                ],
                content: [
                    {
                        block: 'history',
                        elem: 'details',
                        content: [
                            {
                                block: 'history',
                                elem: 'time',
                                content: [
                                    {
                                        block: 'text',
                                        mods: {
                                            view: 'ghost',
                                            size: 's'
                                        },
                                        content: {
                                            block: 'text',
                                            elem: 'word',
                                            elemMods: {
                                                width: 'm'
                                            }
                                        }
                                    },
                                    {
                                        block: 'text',
                                        mods: {
                                            view: 'ghost',
                                            size: 's'
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
                                block: 'history',
                                elem: 'destination',
                                mix: [
                                    {
                                        block: 'icon-plus',
                                        mods: {
                                            'vertical-align': 'center'
                                        }
                                    }
                                ],
                                content: [
                                    {
                                        block: 'history',
                                        elem: 'pic',
                                        mix: [
                                            {
                                                block: 'icon-plus',
                                                elem: 'icon',
                                                elemMods: {
                                                    'indent-r': 's',
                                                    'indent-l': 'l'
                                                }
                                            }
                                        ],
                                        content: {
                                            block: 'brand-logo',
                                            mods: {
                                                name: brandName,
                                                size: 'm'
                                            }
                                        }
                                    },
                                    {
                                        block: 'history',
                                        elem: 'label',
                                        mix: [
                                            {
                                                block: 'icon-plus',
                                                elem: 'block'
                                            }
                                        ],
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'l'
                                                },
                                                content: {
                                                    block: 'text',
                                                    elem: 'word',
                                                    elemMods: {
                                                        width: 'l'
                                                    }
                                                }
                                            },
                                            {
                                                block: 'text',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'l'
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
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                block: 'history',
                elem: 'hide',
                mix: [
                    {
                        block: 'e-accordion',
                        elem: 'more',
                        elemMods: {
                            view: 'default'
                        }
                    },
                    {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                            'indent-t': 'm'
                        }
                    }
                ]
            }
        ]

    }

    return historyItem;
}


const brands = ['yota', 'mts', 'kcell', 'megafon'];
const history = {
    block: 'history',
    mix: [
        {
            block: 'list',
            mods: {
                view: 'default',
                border: 'all'
            }
        }
    ],
    content: brands.map(name => generateHistoryItem(name))
}

document.addEventListener('DOMContentLoaded', () => {
    const html = parse(history);
    const root = document.getElementById('root');
    root.innerHTML = html;
})