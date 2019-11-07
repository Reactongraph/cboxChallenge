import {StyleSheet} from 'react-native';
import * as Common from 'src/common';

const STYLES = StyleSheet.create({
  cardWrapper: {
    width: '90%',
    backgroundColor: Common.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  textNormal: {
    fontSize: Common.fontMedium,
    color: Common.black,
    fontWeight: Common.bold,
    paddingVertical: 3,
  },
  walletType: {
    fontSize: Common.fontMedium,
    color: Common.black,
    fontWeight: Common.medium,
    alignSelf: 'center',
    paddingTop: 3,
  },
  walletAmount: {
    fontSize: Common.fontNormal,
    color: 'white',
    fontWeight: Common.bold,
    alignSelf: 'center',
  },
  verticalLine: {
    width: 10,
    height: '100%',
  },
  userDetailWrapper: {
    paddingLeft: 20,
  },
  circleView: {
    width: 70,
    height: 70,
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleAndTextWrapper: {
    justifyContent: 'center',
    padding: 10,
  },
  walletWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 10,
    alignSelf: 'center',
  },
});

export default STYLES;
