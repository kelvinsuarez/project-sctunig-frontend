import {useState} from "react";
import instagram from "../images/social-network/Instagram.png";
import facebook from "../images/social-network/Facebook.png";
import whatsapp from "../images/social-network/Whatssap.png"

function Contact() {    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact">
            <div className="contact__info">
                <h2 className="contact__info-title">Vias de contacto</h2>
                <p className="contact__info-text">
                    Somos tienda virtual ofrecemos productos asequibles y de calidad, y un servicio 
                    personalizado para cada uno de nuestros clientes. Hacemos envios a domicilio en 
                    Santo Domingo, al interior por vimempack y tambien despachamos desde nuestro 
                    almacen luego del cliente haber elegido su producto para evitarles costo de envio.
                </p>
                <p className="contact__info-text">
                    Tambien, si no quieres instalar tú mismo el kit de letras,
                    puedes agendar cita previa para solicitar servicio de instalación con costo adicional. 
                    Contactanos y siguenos en nuestras redes sociales:
                </p>
                <div className="contact__info-social-buttons">
                    <a href="https://www.instagram.com/sctuning_rd/" target="_blank" rel="noopener noreferrer" ><img className="contact__btn" src={instagram}/></a>
                    <a href="https://www.facebook.com/share/15dprdEjzL/" target="_blank" rel="noopener noreferrer" className="contac__btn-faceboock"><img className="contact__btn" src={facebook}/></a>
                    <a href="https://wa.me/18299356559?text=Hola,+estoy+interesado+en+hacer+un+pedido" target="_blank" rel="noopener noreferrer" className="contac__btn-whatsapp"><img className="contact__btn" src={whatsapp}/></a>
                </div>
            </div>

            <div className="contact__form">
                <h2>Formulario de pedido</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contact__form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message">Datos del pedido:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required ></textarea>
                    </div>
                    <button type="submit" className="contact__btn-submit">Enviar</button>
                </form>
            </div>
            
        </div>
    )
};

export default Contact;