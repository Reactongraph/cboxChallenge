import {StyleSheet} from 'react-native';
import * as Common from 'src/common';

const STYLES = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    backgroundColor: Common.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  headerText: {
    fontSize: Common.fontMedium,
    color: Common.black,
    fontWeight: Common.bold
  },
});

export default STYLES;
