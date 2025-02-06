// import { useState, useEffect } from "react";
// import { IKImage } from 'imagekitio-react';
import { useEffect } from "react";
import CardImage from "./CardImage";
// import fetchImages from "../utils/imagekitApi";

function Gallery({ folder, loadImages, images }) {
    useEffect(() => {
        if (folder){
            loadImages(folder);
        }
    }, [folder, loadImages]);

    if (!images || images.length === 0) {
        return <div>No hay imágenes disponibles</div>;
      }

  return (
    <div className="gallery">
        {images.map((image) =>(
            <CardImage
                key={image.fileId}
                image={image}
                // urlEndpoint="https://ik.imagekit.io/o63q7txss"
                // path={image.filePath}
                // transformation={[{ height: 300, width: 300}]}
            />
        ))}
    </div>
  );
}

export default Gallery;