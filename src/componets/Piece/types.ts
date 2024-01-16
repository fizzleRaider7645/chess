import { SquareProps } from "../Board/Square/types";

export enum PieceLabels {
  Pawn = "PAWN",
  Knight = "KNIGHT",
  Rook = "ROOK",
  Bishop = "BISHOP",
  Queen = "QUEEN",
  King = "KING",
}

export enum PieceColors {
  White = "white",
  Black = "black",
}

export interface Position {
  row: number;
  col: number;
}

export interface Piece {
  color: PieceColors;
  label: PieceLabels;
  position: Position;
}

export type PieceProps = Omit<Piece, "color" | "label">;

export interface DetermineIsSelectedProps {
  selectedSquare: SquareProps | null;
  rowIndex: number;
  columnIndex: number;
}
