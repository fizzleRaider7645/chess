export enum PieceLabels {
  Pawn = "PAWN",
  Knight = "KNIGHT",
  Rook = "ROOK",
  Bishop = "BISHOP",
  Queen = "QUEEN",
  King = "KING",
}

export interface PieceProps {
  color: "white" | "black";
  label: PieceLabels;
}
