import axios from 'axios';

const publicKey = 'public_dXg04EX0fNQw/rtbo/qw1xPaxlA=';
const privateKey = 'private_Xk+54FKnQdfiU7HRfQrN2tep4+4=';
const combinedKey = `${publicKey}:${privateKey}`;
const encodedKey = btoa(combinedKey);

const fetchImages = async (folder) => {
    try {
        const response = await axios.get('https://api.imagekit.io/v1/files',{
            headers: {
                Authorization: `Basic ${encodedKey}`
            },
            params: {
                path: folder
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener las imagenes:', error);
        throw error;
    }
};

export default fetchImages;