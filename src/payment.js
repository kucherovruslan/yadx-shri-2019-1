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
                        'space-v': 'l',
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
                },
                {
                    block: 'button',
                    mods: {
                        size: 'm'
                    }
                }
            ]
        },
    ]
     
 }

 document.addEventListener('DOMContentLoaded', () => {
    const html = parse(payment)
    document.body.innerHTML = html;
 })
