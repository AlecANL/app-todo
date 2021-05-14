import React from 'react';
import { FloatButton } from '../float-button/FloatButton';
import './modal-wrapper.css';

function ModalWrapper({ handleModalTask }) {
  return (
    <div className="modalWrapper">
      <div className="wrapper">
        <div className="modalWrapper-content">
          <FloatButton handleModalTask={handleModalTask} />
        </div>
      </div>
    </div>
  );
}
export default ModalWrapper;
