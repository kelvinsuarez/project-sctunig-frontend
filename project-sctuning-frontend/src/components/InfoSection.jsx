import { useEffect } from 'react';
import { youtubeIframe } from '../utils/embed';
import { cauchoFaceBoockIframe } from '../utils/embed';
import {pruebaResistenciaIframe} from '../utils/embed';
import { preguntasFrecuentesIframe } from '../utils/embed';


function InfoSection() {
  useEffect(() => {
    // Cargar el script de Instagram
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    return () => {
      // Eliminar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="info-section">
        <div className="info-section__container-instalacion">
            <h2 className="info-section__title">Tutorial instalacion</h2>
            <div className="info-section__embed" dangerouslySetInnerHTML={{ __html: youtubeIframe }}></div>
        </div>
        <div className="info-section__container-caucho">
            <h2 className="info-section__title">Kit de letras en caucho</h2>
            <div className='info-section__embed' dangerouslySetInnerHTML={{__html: cauchoFaceBoockIframe}}></div>
        </div>
        <div className="info-section__container-preguntas">
            <h2 className="info-section__title">preguntas frecuentes</h2>
            <div className='info-section__embed' dangerouslySetInnerHTML={{__html: preguntasFrecuentesIframe}}></div>
        </div>
        <div className="info-section__container-prueva">
            <h2 className="info-section__title">Prueva de resistencia</h2>
            <div className='info-section__embed' dangerouslySetInnerHTML={{__html: pruebaResistenciaIframe}}></div>
        </div>
    </div>
  );
}

export default InfoSection;