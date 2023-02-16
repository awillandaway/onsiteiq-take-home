import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: block;
  background: #1b1b1b;
  border: 2px solid #3a3a3a;
  width: 60%;
  height: 60%;
  border-radius: 4px;
  color: white;
  display: flex;
  flex-direction: column;
`;
