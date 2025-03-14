
function PopupCatalog({isOpen, onClose, children}) {
    if (!isOpen) return null;

    return(
        <div className="popup-catalog" onClick={onClose}>
            <div className="popup-catalog__content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-catalog__close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default PopupCatalog;