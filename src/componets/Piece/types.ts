export enum PieceLabels {
  Pawn = "PAWN",
  Knight = "KNIGHT",
  Rook = "ROOK",
  Bishop = "BISHOP",
  Queen = "QUEEN",
  King = "KING",
}

export type PieceColors = "white" | "black";

export interface PieceProps {
  color: PieceColors;
  label: PieceLabels;
}
