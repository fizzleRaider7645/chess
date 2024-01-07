// https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces

type ChessPieceSVG = React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
> | null;

export interface SquareProps {
  i: number;
  row: number;
  piece?: ChessPieceSVG;
}
