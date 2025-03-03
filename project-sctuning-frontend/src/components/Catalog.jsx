import { useEffect, useState } from "react";
import CardImage from "./CardImage";
import imagesData from "../catalogo.json"

function Catalog() {
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
    <div className="catalog">
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
  );
}

export default Catalog;