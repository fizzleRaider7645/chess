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
  timesMoved: number;
}

export type PieceProps = Omit<Piece, "color" | "label" | "timesMoved">;

export interface DetermineIsSelectedProps {
  selectedSquare: Position | null;
  rowIndex: number;
  columnIndex: number;
  turn: PieceColors;
  selectedPiece: Piece | null;
}
