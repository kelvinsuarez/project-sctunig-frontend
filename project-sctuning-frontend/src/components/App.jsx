import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Catalog from './Catalog';
import Gallery from './Gallery';
import InfoSection from './InfoSection';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import ImageUpload from './ImageUpload';
import imageKitApi from '../utils/imagekitApi';
import '../index.css'

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setIsAdmin(true);
  };
  
  const loadImages = async (folder) => {
    setError(null);
    try {
      const imagesData = await imageKitApi.getImage(folder);
      if (imagesData && !imagesData.error) {
        setImages(imagesData);
      } else {
        setError('Error al obtener las imagnes')
      }  
    } catch (error) {
      console.error('Error al cargar las imagenes:', error);
      setError('Error al cargar las imagenes');
    }
  };

  const handleUploadImage = async (file, folder) => {
    try {
      await imageKitApi.uploadImage(file, folder);
      console.log('Imagen subida con exito');
      loadImages(folder); //
    } catch (error) {
      console.error('Error al subir la imagenes:', error);
    }
  };
  
  return (
    <div className='App'>
      <div className='root'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/gallery" element={<Gallery folder="folder" loadImages={loadImages} images={images}/>}/>
          <Route path="/info" element={<InfoSection/>}/>
          <Route path= "/contacto" element={<Contact/>}/>
          <Route path= "/login" element={<Login onLogin={handleLogin} />}/>
        </Routes>
        {isAdmin && (
          <>
            <ImageUpload folder="catalog" handleUploadImage={handleUploadImage}/>
            <ImageUpload folder="gallery" handleUploadImage={handleUploadImage}/>
          </>
        )}
        <Footer/>
      </div>
    </div>
  )
}

export default App
