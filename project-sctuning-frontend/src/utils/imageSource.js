const IMAGEKIT_URL = "https://ik.imagekit.io/o63q7txss";

export function getImageUrl(filename, folder = "catalogo") {
    const imagekitUrl = `${IMAGEKIT_URL}/sctuning/${folder}/${filename}`;
    const publicUrl = `/${folder}/${filename}`;
    return {imagekitUrl,publicUrl};
}