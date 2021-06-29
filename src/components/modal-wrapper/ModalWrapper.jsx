import ReactDOM from 'react-dom';
import './modal-wrapper.css';

function ModalWrapper({ children, isShowModal }) {
  const showModal = isShowModal ? 'is-active' : '';
  return (
    <div className={`modal ${showModal}`}>
      <div className="modal-layer"></div>
      <div className="modal-content ">{children}</div>
    </div>
  );
}

function Modal({ children, isShowModal }) {
  return ReactDOM.createPortal(
    <ModalWrapper isShowModal={isShowModal}>{children}</ModalWrapper>,
    document.getElementById('modal-root')
  );
}

export default Modal;
