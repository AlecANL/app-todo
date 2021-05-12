import React, { useState } from 'react';
import { FloatButton } from '../float-button/FloatButton';
import { ModalInput } from '../modal-input/ModalInput';

export function ModalWrapper() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      {showModal && <ModalInput setShowModal={setShowModal} />}
      <FloatButton setShowModal={setShowModal} showModal={showModal} />
    </section>
  );
}
