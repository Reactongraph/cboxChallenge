// @flow
import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import Styles from './Styles';
import {CHECK_BOX_ACTIVE, CHECK_BOX_NONE} from 'src/common/metaData/Images';

type IProps = {
  onBoxPress: Function,
  isChecked: boolean,
  name: string
};

const CheckBox = (props: IProps) => {
  const { name, isChecked, onBoxPress } = props;
  return (
    <TouchableOpacity style={Styles.boxWrapperBtn} onPress={onBoxPress}>
      <Image source={isChecked ? CHECK_BOX_ACTIVE : CHECK_BOX_NONE} />
      <Text style={Styles.checkBoxText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
