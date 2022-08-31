import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { closeModal, children } = props;

  return (
    <DivWrap onClick={closeModal}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={closeModal}>
          ✖
        </ModalCloseButton>
        {children}
      </ModalWrap>
    </DivWrap>
  );
};

const DivWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`

  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ModalCloseButton = styled.button`  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

