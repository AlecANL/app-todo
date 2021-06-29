import PlusIcon from 'assets/plus-icon.svg';
import './float-button.css';

function FloatButton({ isShowModal }) {
  function handleShow() {
    isShowModal();
    console.log('hello');
  }
  return (
    <button className="btn floatButton" onClick={handleShow}>
      <img src={PlusIcon} alt="plus icon" />
    </button>
  );
}

export default FloatButton;
