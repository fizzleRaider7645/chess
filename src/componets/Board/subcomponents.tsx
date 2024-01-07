import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 700px;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

export const Square = styled.div<{ $isDark: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1; /* Keep the squares */
  background-color: ${({ $isDark }) => ($isDark ? "#444" : "#eee")};
`;
