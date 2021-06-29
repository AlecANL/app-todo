import CalendarButton from 'components/buttons/calendar-button/CalendarButton';
import SubmitButton from 'components/buttons/submit-button/submitButton';
import TagTaskButton from 'components/buttons/tag-task-button/TagTaskButton';
import Modal from 'components/modal-wrapper/ModalWrapper';
import './modal-form.css';

function ModalForm() {
  return (
    <Modal>
      <form className="modalForm">
        <input
          placeholder="example., Read blog to Leonidas Esteban"
          type="text"
        />
      </form>
      <div className="modalForm-content">
        <CalendarButton />
        <TagTaskButton />
        <SubmitButton />
      </div>
    </Modal>
  );
}

export default ModalForm;
