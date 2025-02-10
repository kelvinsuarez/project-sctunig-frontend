// import { IKImage } from 'imagekitio-react';
// import PropTypes from 'prop-types';

function CardImage ({ image }) {
    
    return(
        
        <div className="image__element">
            <img src={image.filePath} alt={image.name} height={300} width={300}/>
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

// CardImage.propTypes = {
//     image: PropTypes.shape({
//         fileId: PropTypes.string.isRequired,
//         filePath: PropTypes.string.isRequired,
//         fileName: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default CardImage;