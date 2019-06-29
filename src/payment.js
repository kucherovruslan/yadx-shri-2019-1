//.form .text

const payment = {
    block: 'payment',
    mix: [
        {
            block: 'form',
            mods: {
                border: 'all'
            },
        }
    ],
    content: [
        {
            block: 'payment',
            elem: 'header',
            mix: [
                {
                    block: 'form',
                    elem: 'item',
                    elemMods: {
                        'space-v': 'xxl',
                        'space-h': 'xl',
                        border: 'bottom'
                    }
                }
            ],
            content: {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'xxl'
                },
                // mix: [
                //     {
                //         block: 'form',
                //         elem: 'label',
                //         elemMods: {
                //             width: 'default'
                //         }
                //     }
                // ],
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
            block: 'payment',
            elem: 'content',
            mix: [
                {
                    block: 'form',
                    elem: 'item',
                    elemMods: {
                        'space-v': 'xxxl',
                        'space-h': 'xl',
                        border: 'bottom'
                    }
                }
            ],
            content: [
                {
                    block: 'form',
                    elem: 'item',
                    elemMods: {
                        'indent-b': 'xl',
                        'distribute': 'between',
                        'vertical-align': 'center'
                    },
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'l'
                            },
                            mix: [{
                                block: 'form',
                                elem: 'label',
                                elemMods: {
                                    width: 'default'
                                },
                            }],
                            content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'l'
                                }
                            }
                        },
                        {
                            block: 'form',
                            elem: 'control',
                            content: {
                                block: 'input',
                                mods: {
                                    size: 'l'
                                }
                            }
                        }
                    ]
                },
                {
                    block: 'form',
                    elem: 'item',
                    elemMods: {
                        'indent-b': 'xl',
                        'distribute': 'between',
                        'vertical-align': 'center'
                    },
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'l'
                            },
                            mix: [{
                                block: 'form',
                                elem: 'label',
                                elemMods: {
                                    width: 'default'
                                },
                            }],
                            content: {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                    width: 'l'
                                }
                            }
                        },
                        {
                            block: 'form',
                            elem: 'control',
                            content: {
                                block: 'input',
                                mods: {
                                    size: 'l'
                                }
                            }
                        }
                    ]
                }
            ]

        },
        {
            block: 'payment',
            elem: 'footer',
            mix: [
                {
                    block: 'form',
                    elem: 'item',
                    elemMods: {
                        distribute: 'between',
                        border: 'bottom',
                        'vertical-align': 'center',
                        'space-v': 'l',
                        'space-h': 'xl'
                    },
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
                    // mix: [
                    //     {
                    //         block: 'form',
                    //         elem: 'label',
                    //         elemMods: {
                    //             width: 'default'
                    //         }
                    //     }
                    // ]
                },
                {
                    block: 'button',
                    mods: {
                        size: 'l'
                    }
                }
            ]
        },
    ]

}

document.addEventListener('DOMContentLoaded', () => {
    const html = parse(payment);
    const root = document.getElementById('root');
    root.innerHTML = html;
})
