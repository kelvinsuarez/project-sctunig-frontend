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
import '../index.css'

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogin = () => {
    setIsAdmin(true);
  };
  return (
    <div className='App'>
      <div className='root'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/info" element={<InfoSection/>}/>
          <Route path= "/contacto" element={<Contact/>}/>
          <Route path= "/login" element={<Login onLogin={handleLogin} />}/>
        </Routes>
        {isAdmin && (
          <>
            <ImageUpload folder="catalog"/>
            <ImageUpload folder="gallery"/>
          </>
        )}
        <Footer/>
      </div>
    </div>
  )
}

export default App
