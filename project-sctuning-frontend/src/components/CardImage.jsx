// import { IKImage } from 'imagekitio-react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { getImageUrl } from "../utils/imageSource";

function CardImage ({ image, onClick }) {
    const { imagekitUrl, publicUrl } = getImageUrl(image.filePath, "catalogo");
    return(
        
        <div className="image__element" onClick={onClick}>
            <img src={imagekitUrl} alt={image.name} height={300} width={300} onError={(e) => {
          e.target.src = publicUrl; // fallback si ImageKit falla
        }}
/>
            {/* <IKImage
                className="image__element-pic"
                urlEndpoint="https://ik.imagekit.io/o63q7txss"
                path={image.filePath}
                transformation={[{ height: 300, width: 300 }]}
                alt={image.fileName}
            /> */}
        </div>
        
    );
};

export default CardImage;

CardImage.propTypes = {
    image: PropTypes.shape({
        filePath: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};