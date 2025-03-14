// import { useState, useEffect } from "react";
// import { IKImage } from 'imagekitio-react';
import { useEffect, useState } from "react";
import CardImage from "./CardImage";
import imagesData from "../images.json"
// import fetchImages from "../utils/imagekitApi";

function Gallery() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(imagesData)
        // if (folder){
        //     loadImages(folder);
        // }
    }, []);

    if (!images || images.length === 0) {
        return <div>No hay imágenes disponibles</div>;
      }

  return (
    <>
        <h2>Vehiculos de nuestros clientes</h2>
        <div className="gallery">
            {images.map((image) =>(
                <CardImage
                    key={image.name}
                    image={image}
                    // urlEndpoint="https://ik.imagekit.io/o63q7txss"
                    // path={image.filePath}
                    // transformation={[{ height: 300, width: 300}]}
                />
            ))}
        </div>
    </>
  );
}

export default Gallery;