import { useState, useEffect } from "react";
import { storage } from "../utils/firebase";
import {ref, listAll, getDownloadURL } from 'firebase/storage';

const ImageList = ({ folder }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const listRef = ref(storage, folder);
            try {
                const res = await listAll(listRef);
                const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
                setImages(urls);
            } catch (error) {
                console.error('Error al recuperar las imagenes:', error); 
            }
        };
        fetchImages();
    }, [folder]);

    return (
        <div className="image-list">
            {images.map((url, index) => (
                <img key={index} src={url} alt={`Uploaded ${index}`}/>
            ))}
        </div>
    );
};

export default ImageList;