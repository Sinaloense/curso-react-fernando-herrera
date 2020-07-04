const APIKey = 'FIiCMbGNlWZZ4IoBgpX3R0c0H7qG9nCH';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKey}`);

peticion
    .then(resp => resp.json()
        .then(({ data }) => {
            const { url } = data.images.original;

            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
    )
    .catch(err => console.warn(err));