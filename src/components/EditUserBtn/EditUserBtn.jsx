import s from './EditUserBtn.module.css';
import sprite from '../../assets/icons.svg';
import { useState } from 'react';
import ModalEditUser from '../ModalEditUser/ModalEditUser';

const EditUserBtn = ({ onClick }) => {
  const [isModalOpen, setModalOpen] = useState();
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <button className={s.btn} onClick={handleOpenModal}>
        <svg clipPathUnits={s.svg}>
          <use href={`${sprite}#icon-pencil`} className={s.pencil} width={18} />
        </svg>
      </button>
      {isModalOpen && <ModalEditUser onClose={handleCloseModal} />}
    </>
  );
};

export default EditUserBtn;
