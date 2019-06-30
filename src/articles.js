const genereteArticleItem = () => {
    const articleItem = {
        block: 'articles',
        elem: 'article',
        mix: [
            {
                block: 'list',
                elem: 'item',
                elemMods: {
                    'indent-b': 'xl'
                }
            }
        ],
        content: {
            block: 'articles',
            elem: 'unit',
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
                    block: 'articles',
                    elem: 'pic',
                    mix: [
                        {
                            block: 'theme',
                            mods: {
                                color: 'project-inverse',
                            }
                        },
                        {
                            block: 'icon-plus',
                            elem: 'icon',
                            elemMods: {
                                'indent-r': 'm'
                            }
                        }
                    ],
                    content: {
                        block: 'image'
                    }
                },
                {
                    block: 'articles',
                    elem: 'content',
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
                                view: 'secondary',
                                size: 'l'
                            },
                            content: [
                                generateWord('m'),
                                generateWord('m'),
                                generateWord('s'),
                                generateWord('s'),
                            ]
                        },
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'l'
                            },
                            content: [
                                generateWord('l'),
                                generateWord('m'),
                            ]
                        },
                        {
                            block: 'text',
                            mods: {
                                view: 'link',
                                size: 'm'
                            },
                            content: [
                                generateWord('m'),
                                generateWord('s'),
                            ]
                        }
                    ]
                }
            ]
        }
    }

    return articleItem;
}




const articles = {
    block: 'articles',
    mix: [
        {
            block: 'list',
            mods: {
                view: 'default'
            }
        }
    ],
    content: [
        genereteArticleItem(),
        genereteArticleItem(),
        genereteArticleItem(),
    ]
}
document.addEventListener('DOMContentLoaded', () => {
    const html = parse(articles);
    const root = document.getElementById('root');
    root.innerHTML = html;
})