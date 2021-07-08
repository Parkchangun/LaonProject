import { css } from 'styled-components';

export const MainBlock = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  width: 25rem;
  height: 35rem;
  padding: 0 1.2rem;
  overflow-y: auto;
`;

export const Input = css`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const flexCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
