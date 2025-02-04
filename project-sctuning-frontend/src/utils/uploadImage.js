import imagekit from './imagekitConfig'


async function uploadImage(file) {
    try {
        const result = await imagekit.upload({
            file: file,
            fileName: file.name,
            folder: 'folder'
        });
        console.log('Imagen subida con éxito:', result);
        return result;
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        throw error;
    }
}

export default uploadImage;