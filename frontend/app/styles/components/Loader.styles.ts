import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 4px solid #60a5fa;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
