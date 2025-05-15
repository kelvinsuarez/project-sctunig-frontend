import rueda from "../images/home-image/rueda-tunning.png"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <div className="home__baner">
        <div className="home__baner-container-vertical">
          <h1 className="home__baner-title">Destaca en las calles</h1>
          <p className="home__baner-text">
            Dale a tu vehículo ese toque deportivo extra con nuestros kits de letras para llantas.
          </p>
          <p className="home__baner-text home__baner-text_plus">
            Puedes elegir entre una gran variedad de marcas estandarizadas en tus colores preferidos para que tus llantas luzcan
            originales y deportivas, o también puedes optar por un diseño personalizado de tu elección.
          </p>
        </div>
        <div className="home__baner-container-horizontal">
          <p className="home__baner-text">
            Siempre  nos complace formar parte de esos magníficos proyectos que son tan especiales para sus dueños,
            por eso, anímate y contáctanos para ayudarte a elegir ese diseño que sacará el mejor
            potencial visual de tu vehículo, ya sea carro, moto, etc. Así que si está finalizando tu proyecto o simplemente
            eres amante de andar en un auto que luzca bien, te esperamos.
          </p>
        </div>
      </div>
      <div className="home__section-service">
        <h2 className="home__section-service-title">Productos y servicios</h2>
        <ul>
          <li className="home__section-service-text">
            <h3>Kit de letras:</h3>
            <p>
              Incluye la cantidad de letras para 4 lados,
              en carros se distribuye en el lado visible de cada 
              neumático, y en moto, en los 2 lados de los
              2 neumáticos.
            </p>
            <p>
              También incluye la cantidad de pegamento necesario, y si es tu primera
              vez instalándolas te enviamos nuestro video tutorial con las recomendaciones
              para colocar perfectamente nuestras letras en tus llantas.
            </p>
          </li>
          <li className="home__section-service-text">
            <h3>Instalación:</h3>
            <p>
              Ofrecemos el servicio de instalación en caso de que no tengas el 
              tiempo para dedicarlo en eso, o simplemente estés cansado te las
              instalamos por un costo adicional. 
            </p>
          </li>
          <li className="home__section-service-text">
            <h3>Delivery y envíos nacionales:</h3>
            <p>
              Puedes pedir tu kit de letras a domicilio en Santo Domingo, por un costo 
              adicional a pagar dependiendo de la distancia y el pago se realiza 
              contra entrega. También hacemos envíos al interior pero en este modo se debe
              realizar el pago previo y suministrarnos sus datos para luego proceder con el envío. 
            </p>
          </li>
          <li className="home__section-service-text">
            <h3>Diseños personalizados</h3>
            <p>
              Además de la amplia gama de marcas deportivas famosas, también puedes optar por 
              un diseño personalizado, solo cuentanos tu idea o frase a colocar y procedemos a
              enviarte una imagen de tu diseño montado en la llanta, (nota: Para la elaboración 
              de tu diseño, debes realizar el pago del 50% por adelantado)
            </p>
          </li>
          <li className="home__section-service-text">
            <h3>Asesoría</h3>
            <p>
              Si tienes dudas y no sabes qué le quedaría mejor, contáctanos y, en
              base a los datos (vehículo, color, numeración de llantas) te recomendamos 
              la mejor opción basándonos en nuestra gran experiencia y te mostramos semejanzas
              obtenidas de nuestra galería con imágenes reales de los vehículos de nuestros 
              clientes.
            </p>
          </li>
          <button  className="home__section-service-button" onClick={() => navigate('/info')}>mas inf</button>
        </ul>
      </div>
      <div className="home__container-rueda">
        <div className="home__base-rueda">
          <img className="home__rueda rotacion" src={rueda}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home
