const getImagen = async () => {
    try {
        const APIKey = 'FIiCMbGNlWZZ4IoBgpX3R0c0H7qG9nCH';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        console.error(err);
    }
}

getImagen();