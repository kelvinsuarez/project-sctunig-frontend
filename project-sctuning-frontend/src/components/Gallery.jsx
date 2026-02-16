
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";


function Gallery() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedBrand = params.get("marca");

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const trackRef = useRef(null);
    const sliderInterval = useRef(null);
    
    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch("/.netlify/functions/getGalleryImages");
                const data = await response.json();
                console.log("Images received in Gallery:", data);

                let filteredImages = data;

                if (selectedBrand) {
                    filteredImages = data.filter(image => 
                        image.name.toLowerCase().includes(selectedBrand.toLowerCase())
                    );
                }

                setImages(filteredImages);

                if (filteredImages.length > 0) {
                    setTimeout(() => {
                        setImages([
                            filteredImages[filteredImages.length - 1],
                            ...filteredImages,
                            filteredImages[0]
                        ]);
                    }, 3000);
                }
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        }
        fetchImages();
    }, [selectedBrand]);

    const handleTransitionEnd= () => {
        if (currentIndex === 0) {
            trackRef.current.style.transition = "none";
            setCurrentIndex(images.length - 2);
            trackRef.current.style.transform = `translateX(-${(images.length - 2) * 100}%)`;
        } else if (currentIndex === images.length - 1) {
            trackRef.current.style.transition = "none";
            setCurrentIndex(1);
            trackRef.current.style.transform = `translateX(-100%)`;
        }
    };

    const startSliding = (direction) => {
        stopSliding();
        sliderInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>{
                const newIndex = direction === "next" ? prevIndex + 1 : prevIndex -1;
                trackRef.current.style.transition = "transform 1.5s ease-in-out";
                trackRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
                return newIndex;
            });
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
                    {images.map((image, index) => {
                        return(
      <img
        key={index}
        src={image.url}
        alt={image.name || "Imagen"}
        className="gallery__carousel-image"
        loading="lazy"
        onError={(e) => {
          e.target.src = image.thumbnail; ;
        }}
      />
    );
  })}

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