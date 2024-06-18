import PropTypes from 'prop-types';
import 'modal.css';

function Modal({ isOpen, onClose, title, messageBody, actions, modalRef }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose} ref={modalRef}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {title && (
                    <div className="modal-header">
                        <h3>{title}</h3>
                        <button className="button" onClick={onClose}>X</button>
                    </div>
                )}
                {messageBody && (
                    <div className="modal-body">
                        {messageBody}
                    </div>
                )}
                {actions && actions.length > 0 && (
                    <div className="modal-footer">
                        {actions.map((action, index) => {
                            return(<button className='button' key={index} onClick={action.actionFor}>
                                {action.label}
                            </button>)
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    messageBody: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            actionFor: PropTypes.func,
        })
    ),
    modalRef: PropTypes.object,
};

export default Modal;