class ImagekitApi {
    constructor({ encodedKey, urlEndpoint }) {
        this._encodedKey = encodedKey;
        this._urlEndpoint = urlEndpoint;
    }

    async _useFetch(url, method, body) {
        const headers = {
            "content-type": "application/json",
            "Authorization": `Basic ${this._encodedKey}`
        };

        const res = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        })

        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Error${res.status}`)
    }

    async getImage(folder) {
        try {
            const res = await this._useFetch(`${this._urlEndpoint}/v1/files?path=${folder}`, "GET");
            return res;
        } catch (err) {
            console.log('Error al obtener las imagenes:', err);
            return[];
        }
    }

    async uploadImage(file, folder) {
        try {
            const res = await this._useFetch(
                `${this._urlEndpoint}/v1/file/upload`,
                "POST",
                {
                    file,
                    fileName: file.name,
                    folder: folder
                }
            );
            return res;
        } catch (err) {
            console.log('Error al subir la imagen:', err);
        }
    }
}

const imageKitApi = new ImagekitApi({
    encodedKey:'cHJpdmF0ZV9Yays1NEZLblFkZmlVN0hSZlFyTjJ0ZXA0KzQ9OnB1YmxpY19kWGcwNEVYMGZOUXcvcnRiby9xdzF4UGF4bEE9',
    urlEndpoint: 'https://ik.imagekit.io/o63q7txss'
});

export default imageKitApi;

// const publicKey = 'public_dXg04EX0fNQw/rtbo/qw1xPaxlA=';
// const privateKey = 'private_Xk+54FKnQdfiU7HRfQrN2tep4+4=';
// const combinedKey = `${publicKey}:${privateKey}`;
// const encodedKey = btoa(combinedKey);

// const fetchImages = async (folder) => {
//     try {
//         const response = await axios.get('https://api.imagekit.io/v1/files',{
//             headers: {
//                 Authorization: `Basic ${encodedKey}`
//             },
//             params: {
//                 path: folder
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error al obtener las imagenes:', error);
//         throw error;
//     }
// };

// export default fetchImages;