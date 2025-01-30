import {useState} from "react";
import { storage } from "../utils/firebase";
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ImageUpload = ({folder}) => {
    const [image, setImage] =  useState(null);
    const [url, setUrl] = useState('');

    const handleImageChange = (e) => {
        if  (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleUpload = () => {
        if (image) {
            const storageRef = ref(storage, `${folder}/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                'state_changed',
                (snapshot) => {

                },
                (error) => {
                    console.error('Error al subir la imagen:', error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUrl(downloadURL);
                        console.log ('URL de descarga:', downloadURL);
                    });
                }
            );
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange}/>
            <button onClick={handleUpload}>Subir Imagen</button>
            {url && <img src={url} alt="Uploaded"/>}
        </div>
    );
};

export default ImageUpload;