import styled, { css, keyframes } from "styled-components";

const popAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const SVGImage = styled.img<{ $isSelected: boolean }>`
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      outline: 2px solid lightblue;
    `}
  &:hover {
    cursor: pointer;
    animation: ${popAnimation} 0.5s ease infinite;
  }
`;
