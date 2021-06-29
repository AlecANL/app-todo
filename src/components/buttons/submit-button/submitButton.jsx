import './submit-button.css';

function SubmitButton({ submitForm }) {
  return (
    <button className="submitButton" onClick={submitForm}>
      <i className="icon-arrowUp"></i>
    </button>
  );
}

export default SubmitButton;
