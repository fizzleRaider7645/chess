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

export interface DetermineIsSelectedProps {
  selectedPiece: Piece | null;
  rowIndex: number;
  columnIndex: number;
}
