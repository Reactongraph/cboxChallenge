// @flow
import React from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import * as Common from 'src/common';

type IProps = {
  item: Object,
};

const UserListCard = (props: IProps) => {
  const {item} = props;
  return (
    <View style={Styles.cardWrapper}>
      <View
        style={[
          Styles.verticalLine,
          {backgroundColor: Common.TYPE_COLORS[item.type]},
        ]}
      />
      <View style={Styles.userDetailWrapper}>
        <Text style={Styles.textNormal}>{item.fullName || 'N/A'}</Text>
        <Text style={Styles.textNormal}>{item.email || 'N/A'}</Text>
        <View style={Styles.walletWrapper}>
          <View style={Styles.circleAndTextWrapper}>
            <View
              style={[
                Styles.circleView,
                {backgroundColor: Common.TYPE_COLORS[2]},
              ]}>
              <Text style={Styles.walletAmount}>{item.wallet1}</Text>
            </View>
            <Text style={Styles.walletType}>Wallet 1</Text>
          </View>
          <View style={Styles.circleAndTextWrapper}>
            <View
              style={[
                Styles.circleView,
                {backgroundColor: Common.TYPE_COLORS[3]},
              ]}>
              <Text style={Styles.walletAmount}>{item.wallet2}</Text>
            </View>
            <Text style={Styles.walletType}>Wallet 2</Text>
          </View>
          <View style={Styles.circleAndTextWrapper}>
            <View
              style={[
                Styles.circleView,
                {backgroundColor: Common.TYPE_COLORS[4]},
              ]}>
              <Text style={Styles.walletAmount}>{item.wallet3}</Text>
            </View>
            <Text style={Styles.walletType}>Wallet 3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserListCard;
