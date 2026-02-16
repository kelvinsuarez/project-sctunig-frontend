const IMAGEKIT_URL = "https://ik.imagekit.io/o63q7txss";

export function getImageUrl(filePath, folder = "catalogo") {
    const imagekitUrl = `${IMAGEKIT_URL}/${filePath}`;
    const filename = filePath.split("/").pop();
    const publicUrl = `/${folder}/${filename}`;
    return {imagekitUrl,publicUrl};
}