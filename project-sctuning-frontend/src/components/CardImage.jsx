import PropTypes from 'prop-types';


function CardImage ({ image, onClick, alt }) {
    return(
        
        <div className="image__element" onClick={onClick}>
            <img src={image.url} alt={alt || image.name} height={300} width={300} onError={(e) => {
          e.target.src = "/fallback.jpg"; // fallback si ImageKit falla
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
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    alt: PropTypes.string,
};