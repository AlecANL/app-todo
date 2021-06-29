import ReactDOM from 'react-dom';
import './modal-wrapper.css';

function ModalWrapper({ children }) {
  return (
    <div className="modal is-active">
      <div className="modal-content ">{children}</div>
    </div>
  );
}

function Modal({ children }) {
  return ReactDOM.createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById('modal-root')
  );
}

export default Modal;
