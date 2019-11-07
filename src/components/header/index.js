// @flow
import React from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';

type IProps = {
  headerText?: string,
};

const Header = (props: IProps) => {
  const { headerText } = props;
  return (
    <View style={Styles.headerWrapper}>
      <Text style={Styles.headerText}>{headerText || 'CBOX USERS'}</Text>
    </View>
  );
};

export default Header;
