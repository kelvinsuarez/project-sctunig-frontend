import {useState} from "react";
import instagram from "../images/social-network/Instagram.png";
import facebook from "../images/social-network/Facebook.png";
import whatsapp from "../images/social-network/Whatssap.png"

function Contact() {    
    const [formData, setFormData] = useState({
        name: '',
        marca: '',
        color: '',
        tamano: ''
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

        const {name, marca, color, tamano} = formData;
        const message = `Hola, soy ${name} y estoy ineresado en hacer un pedido. Marca: ${marca}, color: ${color}, para gomas: ${tamano}.`;
        const whatsappLink = `https://wa.me/18299356559?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, '_blank')
    }

    return (
        <div className="contact">
            <div className="contact__info">
                <h2 className="contact__info-title">Vias de contacto</h2>
                <p className="contact__info-text">
                    Somos tienda virtual ofrecemos productos asequibles y de calidad, además un servicio 
                    personalizado para cada uno de nuestros clientes. Hacemos envíos a domicilio en 
                    Santo Domingo, al interior a través de Vimempack y también despachamos desde nuestro 
                    almacén luego del cliente haber elegido su producto para evitarle costo de envío.
                </p>
                <p className="contact__info-text">
                    También, si no quieres instalar tú mismo el kit de letras,
                    puedes agendar cita previa para solicitar servicio de instalación con costo adicional. 
                    Contáctanos y síguenos en nuestras redes sociales:
                </p>
                <div className="contact__info-social-buttons">
                    <a href="https://www.instagram.com/sctuning_rd/" target="_blank" rel="noopener noreferrer" ><img className="contact__btn" src={instagram}/></a>
                    <a href="https://www.facebook.com/share/15dprdEjzL/" target="_blank" rel="noopener noreferrer" className="contac__btn-faceboock"><img className="contact__btn" src={facebook}/></a>
                    <a href="https://wa.me/18299356559?text=Hola,+estoy+interesado+en+hacer+un+pedido" target="_blank" rel="noopener noreferrer" className="contac__btn-whatsapp"><img className="contact__btn" src={whatsapp}/></a>
                </div>
            </div>

            <div className="contact__form">
                <h2 className="contact__form-title">Formulario de pedido</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contact__form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" value={formData.name} placeholder="Nombre de cliente" onChange={handleChange} required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="marca">Marca de kit a elegir:</label>
                        <select id="marca" name="marca" value={formData.marca} placeholder="Ej: Michelin, Dunlop, etc." onChange={handleChange} required >
                            <option value="" disabled>Selecciona una marca</option>
                            <option value="Goodyear">Goodyear</option>
                            <option value="Michelin">Michelin</option>
                            <option value="Bridgestone">Bridgestone</option>
                            <option value="Yokohama">Yokohama</option>
                            <option value="Dunlop">Dunlop</option>
                            <option value="Nitto">Nitto</option>
                            <option value="Kumho">Kumho</option>
                            <option value="Firehawk">Firehawk</option>
                            <option value="Toyotires">Toyotires</option>
                            <option value="Falken">Falken</option>
                            <option value="Personalizada">Personalizada</option>
                        </select>
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="color">Color(es):</label>
                        <input id="color" name="color" value={formData.color} onChange={handleChange} required ></input>
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="tamano">Tamaño de goma:</label>
                        <input id="tamno" name="tamano" value={formData.tamano} onChange={handleChange} required ></input>
                    </div>
                    <button type="submit" className="contact__btn-submit">Enviar</button>
                </form>
            </div>
            
        </div>
    )
};

export default Contact;