import { IPalette, PaletteKeys } from '@/types/styles';

const palette: IPalette = {
  primary: '052033',
  secondary: '00345C',
  action: '43D7B3',
  highlight: 'F0A432',
  error: 'FF002E',
  white: 'FFFFFF',
  defaultHex: 'FFFFFF',
  defaultRgb: 'rgb(255,255,255)',
};

class ColourTheme {
  colours: { [Key in PaletteKeys]: string };

  constructor() {
    this.colours = palette;
  }

  getHex(colour: PaletteKeys): string {
    return `#${this.colours[colour]}`;
  }

  getRgb(colour: PaletteKeys): string {
    const rgb = 'rgb(x, x, x)';
    const pairs = this.colours[colour].match(/.{1,2}/g);
    return pairs
      ? pairs.reduce((acc, pair) => acc.replace(/x/, parseInt(pair, 16).toString()), rgb)
      : palette.defaultRgb;
  }

  getRgba(colour: PaletteKeys, opacity: number): string {
    const rgb = this.getRgb(colour);
    return rgb.replace(/rgb/, 'rgba').replace(/\)/, `, ${opacity})`);
  }
}

export default ColourTheme;
