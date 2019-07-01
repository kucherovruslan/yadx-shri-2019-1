const header = {
    block: 'header',
    content: {
        block: 'header',
        elem: 'content',
        content: [
            {
                block: 'header',
                elem: 'logo',
            },
            {
                block: 'onoffswitch',
                content: {
                    block: 'onoffswitch',
                    elem: 'button'
                }
            }
        ]
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const html = parse(header);
    const root = document.getElementById('root');
    root.innerHTML = html;

    document.body.addEventListener('click', (e) => {
        if (Array.from(e.target.classList).includes('onoffswitch__button')) {
            const theme = e.target.closest('.theme');
            // theme.style.setProperty('--foo-color', value);
            //change theme
        }
    })
})


