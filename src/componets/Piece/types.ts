export enum Piece {
  Pawn = "PAWN",
  Knight = "KNIGHT",
  Rook = "ROOK",
  Bishop = "BISHOP",
  Queen = "QUEEN",
  King = "KING",
}

export type Pieces =
  | Piece.Pawn
  | Piece.Knight
  | Piece.Rook
  | Piece.Bishop
  | Piece.Queen
  | Piece.King;
