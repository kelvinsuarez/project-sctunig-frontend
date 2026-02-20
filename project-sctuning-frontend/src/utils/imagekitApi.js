class ImagekitApi {
  constructor() {
    this._baseUrl = "/.netlify/functions";
  }

  async getCatalogImages() {
    const res = await fetch(`${this._baseUrl}/getCatalogImages`);
    return res.json();
  }

  async getGalleryImages() {
    const res = await fetch(`${this._baseUrl}/getGalleryImages`);
    return res.json();
  }

  async uploadImage(file, folder) {
    const res = await fetch(`${this._baseUrl}/uploadImage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file, fileName: file.name, folder }),
    });
    return res.json();
  }
}

const imageKitApi = new ImagekitApi();
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