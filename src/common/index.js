import {Dimensions, Platform} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isIosDevice = Platform.OS === 'ios';
const TYPE_COLORS = {
  0: '#48BEFF',
  1: '#3DFAFF',
  2: '#43C59E',
  3: '#3D7068',
  4: '#14453D',
};

module.exports = {
  // Device height and width
  deviceHeight,
  deviceWidth,
  isIosDevice,

  // Color
  TYPE_COLORS,
  lightGrey: '#eff0f4',
  black: '#363636',
  darkBlack: '#000000',
  mediumGrey: '#bcbcbc',

  // Font sizes
  fontSmall: 12,
  fontNormal: 13,
  fontMedium: 16,
  fontLarge: 18,
  fontXL: 20,
  fontXXL: 22,

  // Font weights

  small: '400',
  medium: '500',
  bold: '700',
};
