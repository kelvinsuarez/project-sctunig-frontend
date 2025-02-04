import { useState, useEffect } from "react";
import { IKImage } from 'imagekitio-react';
import fetchImages from "../utils/imagekitApi";

function Gallery({ folder }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const imagesData = await fetchImages(folder);
                setImages(imagesData);
            } catch (error) {
                console.error('Error al cargar las imágenes:', error);
            }
        };
        loadImages();
    }, [folder]);

  return (
    <div>
        {images.map((image) =>(
            <IKImage
                key={images.fileId}
                urlEndpoint="https://ik.imagekit.io/o63q7txss"
                path={image.filePath}
                transformation={[{ height: 300, width: 300}]}
            />
        ))}
    </div>
  );
}

export default Gallery;