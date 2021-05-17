import { useContext } from 'react';
import iconSetting from '../../assets/icon-setting.png';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import './icon-setting.css';

function IconSetting({ handleCurrentTask }) {
  function handleModalActions() {
    handleCurrentTask();
    setShowModalActions(true);
  }
  const { setShowModalActions } = useContext(TodoContext);
  return (
    <button className="buttonIcon" onClick={handleModalActions}>
      <img src={iconSetting} alt="icon setting" />
    </button>
  );
}

export default IconSetting;
