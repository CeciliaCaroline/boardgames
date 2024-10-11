import React, { createContext, useContext, useState } from 'react';


const ModalContext = createContext();

// Custom hook to access the modal context
export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const value = {
    modalOpen,
    setModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};