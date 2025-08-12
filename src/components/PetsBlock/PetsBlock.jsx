import { useState } from 'react';
import AddPet from '../AddPet/AddPet';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import s from './PetsBlock.module.css';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';

const PetsBlock = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleConfirmLogout = () => {
    console.log('Logged out!');
    setModalOpen(false);
  };

  return (
    <>
      <AddPet />
      <LogOutBtn onClick={handleOpenModal} className={s.customBtn} />

      {isModalOpen && (
        <ModalApproveAction
          onClose={handleCloseModal}
          onConfirm={handleConfirmLogout}
        />
      )}
    </>
  );
};

export default PetsBlock;
