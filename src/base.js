const generateWord = (width) => {
    const word = {
        block: 'text',
        elem: 'word',
        elemMods: {
            width: width
        }
    };
    return word;
}