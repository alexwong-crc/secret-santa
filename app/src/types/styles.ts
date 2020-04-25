export interface IPalette {
  primary: string;
  secondary: string;
  highlight: string;
  action: string;
  error: string;
  white: string;
  defaultHex: string;
  defaultRgb: string;
}

export type PaletteKeys = keyof IPalette;
