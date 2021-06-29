import CalendarButton from 'components/buttons/calendar-button/CalendarButton';
import SubmitButton from 'components/buttons/submit-button/submitButton';
import Modal from 'components/modal-wrapper/ModalWrapper';
import './modal-sub-task.css';

function ModalSubTask() {
  return (
    <Modal>
      <form className="modalSubTask">
        <input
          placeholder="example., Read blog to Leonidas Esteban"
          type="text"
        />
      </form>
      <div className="modalSubTask-content">
        <CalendarButton />
        <SubmitButton />
      </div>
    </Modal>
  );
}

export default ModalSubTask;
