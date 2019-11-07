import {StyleSheet} from 'react-native';
import * as Common from 'src/common';

const STYLES = StyleSheet.create({
  boxWrapperBtn: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    fontSize: Common.fontNormal,
    color: Common.black,
    fontWeight: Common.medium,
    paddingLeft: 5
  }
});

export default STYLES;
