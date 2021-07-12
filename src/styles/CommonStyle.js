import { css } from 'styled-components';

export const flexCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBlock = css`
  position: absolute;
  top: 48%;
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
  outline-color: rgba(93, 161, 228, 1);
  font-size: 1.3rem;
  box-sizing: border-box;
`;

export const Button = css`
  width: 100%;
  height: 4.5rem;
  font-size: 1.3rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 0;
  & a {
    color: inherit;
    text-decoration: none;
    display: block;
    line-height: 4.4rem;
  }
`;
export const Positive = css`
  background-color: rgba(93, 161, 228, 0.7);
  transition: 1s;
  &:hover {
    background-color: rgba(93, 161, 228, 1);
  }
`;
export const Negative = css`
  background-color: rgba(125, 228, 93, 0.5);
  transition: 1s;
  &:hover {
    background-color: rgba(125, 228, 93, 1);
  }
`;
