import {PixelRatio} from 'react-native';
import {width} from './dimensions';

const scale = width / 320;
const minus = 2;
export function normalize(size: number) {
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - minus;
}
