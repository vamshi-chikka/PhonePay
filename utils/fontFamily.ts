import {fontFamily} from '../Src/constants/fonts'

export const getFontFamily = (
  isLTR: boolean,
  weight: 'normal' | 'medium' | 'bold',
) => {
  const selectedFontFamily = isLTR
    ? fontFamily.POPPINS
    : fontFamily.POPPINS;
  return selectedFontFamily[weight];
};