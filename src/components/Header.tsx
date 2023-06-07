import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { ModalForm } from './modal/Modal';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container" style={{ display: 'flex' }}>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleOpenModal}>Open Modal</button>
        <ModalForm isOpen={isOpen} handleCloseModal={handleCloseModal} />
      </div>
    </>
  );
};
