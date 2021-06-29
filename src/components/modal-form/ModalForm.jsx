import CalendarButton from 'components/buttons/calendar-button/CalendarButton';
import SubmitButton from 'components/buttons/submit-button/submitButton';
import TagTaskButton from 'components/buttons/tag-task-button/TagTaskButton';
import Modal from 'components/modal-wrapper/ModalWrapper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showModalAddTask } from 'redux/ui/ui.actions';
import './modal-form.css';

function ModalForm({ isShowModal }) {
  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);

  function handleSubmitForm() {
    dispatch(showModalAddTask(false));
  }
  return (
    <Modal isShowModal={isShowModal}>
      <form className="modalForm">
        <input
          placeholder="example., Read blog to Leonidas Esteban"
          type="text"
        />
      </form>
      <div className="modalForm-content">
        <CalendarButton />
        <TagTaskButton name={uiState.currentSection} />
        <SubmitButton submitForm={handleSubmitForm} />
      </div>
    </Modal>
  );
}

export default ModalForm;
