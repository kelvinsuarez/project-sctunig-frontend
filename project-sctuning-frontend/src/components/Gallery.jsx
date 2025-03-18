
import { useEffect, useState, useRef } from "react";
import imagesData from "../images.json"


function Gallery() {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const trackRef = useRef(null);
    const sliderInterval = useRef(null);
    
    useEffect(() => {
        setImages([imagesData[imagesData.length - 1], ...imagesData, imagesData[0]]);
    }, []);

    const handleTransitionEnd= () => {
        if (currentIndex === 0) {
            trackRef.current.style.transition = "none";
            setCurrentIndex(imagesData.length);
            trackRef.current.style.transform = `translateX(-${imagesData.length * 100}%)`;
        } else if (currentIndex === images.length - 1) {
            trackRef.current.style.transition = "none";
            setCurrentIndex(1);
            trackRef.current.style.transform = `tranlateX(-100%)`;
        }
    };

    const startSliding = (direction) => {
        stopSliding();
        sliderInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                direction === "next"? prevIndex + 1 : prevIndex -1
            );
            trackRef.current.style.transition = "transform 1.5s ease-in-out";
            trackRef.current.style.transform = `translateX(-${(currentIndex + (direction === "next"? 1 : -1)) * 100}%)`;
        }, 2000);
    };

    const stopSliding = () => {
        clearInterval(sliderInterval.current);
    };

    if (!images || images.length === 0) {
        return <div>No hay imágenes disponibles</div>;
      }

  return (
    <div className="gallery">
        <h2 className="gallery__title">Vehiculos de nuestros clientes</h2>
        <div className="gallery__carousel">
            <button
                className="gallery__carousel-btn carousel__btn-prev"
                onMouseEnter={() => startSliding("prev")}
                onMouseLeave={stopSliding}
            >
                ❮
            </button>
            <div className="gallery__carousel-track-container">
                <div
                    ref={trackRef}
                    className="gallery__carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: "transform 1.5s ease-in-out",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {images.map((image, index) => (
                        <img
                            key = {index}
                            src={image.filePath}
                            alt={image.name}
                            className="gallery__carousel-image"
                        />
                    ))}
                </div>
            </div>
            <button
                className="gallery__carousel-btn carousel__btn-next"
                onMouseEnter={() => startSliding("next")}
                onMouseLeave={stopSliding}
            >
                ❯
            </button>
        </div>
    </div>
  );
}

export default Gallery;