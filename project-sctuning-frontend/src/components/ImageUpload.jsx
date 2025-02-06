import {useState} from "react";

function ImageUpload({ folder, handleUploadImage }) {
    const [file, setFile] =  useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            try {
                await handleUploadImage(file, folder);
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