// https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces

import { Pieces } from "../Piece/types";

export interface SquareProps {
  i: number;
  row: number;
  piece: Pieces;
}
