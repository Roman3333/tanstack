import { FC } from 'react';
import Modal from 'react-modal';

import styles from './modal.module.scss';

Modal.setAppElement('#root');

type ModalFormProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export const ModalForm: FC<ModalFormProps> = ({ isOpen, handleCloseModal }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Модальное окно"
        className={styles.content}>
        <h2>Заголовок модального окна</h2>
        <p>Текст модального окна.</p>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex officiis sit
          eaque minima neque molestias non provident qui, fugit, tempore repellendus adipisci
          excepturi in corrupti rerum veniam nihil? Ea? Vitae, vero molestias. Placeat a ut qui
          omnis necessitatibus quae ab maxime perspiciatis quo quisquam accusamus expedita, rerum,
          voluptatibus vero quas quasi accusantium hic velit cum architecto repudiandae doloremque
          quidem! Fugiat accusantium aliquam incidunt quas laboriosam voluptate beatae! Culpa minus
          blanditiis repellat, quidem repudiandae veritatis? Consectetur veritatis commodi
          laboriosam hic laborum harum, illo laudantium voluptates animi ducimus, maiores, sit
          similique!
        </div>
        <button onClick={handleCloseModal}>X</button>
      </Modal>
    </div>
  );
};
