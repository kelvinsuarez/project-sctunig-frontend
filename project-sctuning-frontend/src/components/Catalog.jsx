import { useEffect, useState } from "react";
import CardImage from "./CardImage";
import PopupCatalog from "./PopupCatalog";


function Catalog() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
  async function fetchCatalogImages() {
    try {
      const response = await fetch("/.netlify/functions/getCatalogImages");
      const data = await response.json();
      console.log("Catalog images:", data);

      if (Array.isArray(data)) {
        setImages(data);
      }else if (Array.isArray(data.data)) {
        setImages(data.data);
       }
       else {
        console.error("Error fetching catalog images:", data);
        setImages([]); // evita romper el map
      }

    } catch (error) {
      console.error("Error fetching catalog images:", error);
    }
  }
  fetchCatalogImages();
}, []);


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleMakeOrder = (name) => {
    window.location.href = `/contacto?marca=${name}`
  };
  
  const handleViewGallery = (name) => {
    const brandKeyword = name.replace(/\.[^/.]+$/, "").split("-")[0].toLowerCase();
    window.location.href =`/gallery?marca=${encodeURIComponent(brandKeyword)}`
  };

  if (!images || images.length === 0) {
    return <div>No hay imágenes disponibles</div>;
  }

  const formatTitle = (filename) => {
    return filename.replace(/\.[^/.]+$/, "");
  };

  return (
    <>
      <h2>Marcas disponibles</h2>
      <div className="catalog">
        {images.map((image) =>(
            <CardImage className="catalog__img"
                key={image.name}
                image={image}
                onClick={() => handleImageClick(image)}
                // urlEndpoint="https://ik.imagekit.io/o63q7txss"
                // path={image.filePath}
                // transformation={[{ height: 300, width: 300}]}
            />
          ))}
      </div>
      {selectedImage && (
        <PopupCatalog isOpen={!!selectedImage} onClose={handleCloseModal}>
          <h2 className="popup-catalog__title">{formatTitle(selectedImage.name)}</h2>
          <CardImage image={selectedImage} alt={selectedImage.name} className="popup-catalog__image" onClick={() => {}}/>
          <button className="popup-catalog__btn-buy" onClick={() => handleMakeOrder(selectedImage.name)}>Hacer Pedido</button>
          <button className="popup-catalog__btn-view" onClick={() => handleViewGallery(selectedImage.name)}>Ver Modelos en Galería</button>
        </PopupCatalog>
      )}
    </>
  );
}

export default Catalog;