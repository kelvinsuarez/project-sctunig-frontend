import {useState} from "react";
import uploadImage from "../utils/uploadImage";

const ImageUpload = ({ folder }) => {
    const [file, setFile] =  useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            try {
                const result = await uploadImage(file, folder);
                console.log('URL de la imagen subida', result.url);
            } catch (error) {
                console.error('Error al subir la imagen:', error)
            }          
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Subir Imagen</button>
        </div>
    );
};

export default ImageUpload;