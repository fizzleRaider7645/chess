import styled, { keyframes } from "styled-components";

const popAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const SVGImage = styled.img`
  &:hover {
    animation: ${popAnimation} 0.5s ease infinite;
  }
`;
