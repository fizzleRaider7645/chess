import { ChessPieceSVG } from "../Board/types";

export interface PieceProps {
  svg: ChessPieceSVG;
}

export enum Color {
  white = "WHITE",
  black = "BLACK",
}

export enum Piece {
  pawn = "PAWN",
  knight = "KNIGHT",
  rook = "ROOK",
  bishop = "BISHOP",
  queen = "QUEEN",
  king = "KING",
}

export type PieceType =
  | Piece.pawn
  | Piece.knight
  | Piece.rook
  | Piece.bishop
  | Piece.queen
  | Piece.king;
