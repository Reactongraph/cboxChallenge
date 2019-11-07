// @flow
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import Styles from './Style';
import Header from 'src/components/header';
import CheckBox from 'src/components/checkBox';
import UserListCard from 'src/components/userListCard';
import {CBX_USER_TYPE, NO_RECORD_FOUND_MESSAGE} from 'src/common/metaData';
import * as ActionNames from 'src/common/metaData/ActionNames';

type IProps = {
  dispatch: Function,
  userList: Object,
};

type IState = {
  selectedType: [number],
  isLoading: boolean,
};

class Home extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: [0, 1, 2, 3, 4, 5],
      isLoading: true,
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type: ActionNames.USER_LIST});
  }

  shouldComponentUpdate(nextProps: Object, nextState: Object) {
    const {userList} = nextProps;
    const {props} = this;

    if (nextState !== this.state) {
      return true;
    }
    if (props.userList !== userList && userList) {
      const {items} = userList;
      if (Array.isArray(items) && items.length) {
        this.setState({isLoading: false});
      } else {
        this.setState({isLoading: false});
      }
      return true;
    }
    return false;
  }

  // Make filter keys array and remove key if filter already selected.
  handleBoxPress = (value: number) => {
    const {selectedType} = this.state;
    if (value === 5) {
      if (selectedType.includes(5)) {
        this.setState({selectedType: []});
      } else {
        this.setState({selectedType: [0, 1, 2, 3, 4, 5]});
      }
    } else {
      if (selectedType.includes(5)) {
        if (selectedType.includes(value)) {
          let indexofType = selectedType.indexOf(value);
          selectedType.splice(indexofType, 1);
          let indexofALl = selectedType.indexOf(5);
          selectedType.splice(indexofALl, 1);
          this.setState({selectedType});
        } else {
          selectedType.push(value);
          this.setState({selectedType});
        }
      } else {
        if (!selectedType.includes(value)) {
          if (selectedType.length >= 4) {
            this.setState({selectedType: [0, 1, 2, 3, 4, 5]});
          } else {
            selectedType.push(value);
            this.setState({selectedType});
          }
        } else {
          let indexOfValue = selectedType.indexOf(value);
          selectedType.splice(indexOfValue, 1);
          this.setState({selectedType});
        }
      }
    }
  };

  // render the list of user wallter cards
  renderUserList = item => {
    const {selectedType} = this.state;
    if (selectedType.length && selectedType.includes(item.type)) {
      return <UserListCard item={item} />;
    }
    if (!selectedType.length) {
      return <UserListCard item={item} />;
    }
  };

  render() {
    const {selectedType, isLoading} = this.state;
    const {userList} = this.props;
    const {items} = userList;
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header />
          {!isLoading ? (
            <View style={Styles.bodyWrapper}>
              <View style={Styles.typeWrapper}>
                {Array.isArray(items) && items.length
                  ? CBX_USER_TYPE.map(item => (
                      <CheckBox
                        name={item.name}
                        key={item.value}
                        onBoxPress={() => this.handleBoxPress(item.value)}
                        isChecked={
                          selectedType && selectedType.includes(item.value)
                            ? true
                            : false
                        }
                      />
                    ))
                  : null}
              </View>
              {Array.isArray(items) && items.length ? (
                <FlatList
                  data={items}
                  renderItem={({item}) => this.renderUserList(item)}
                  keyExtractor={(item, index) => index.toString()}
                  extraData={this.state}
                />
              ) : (
                <Text style={Styles.noRecordText}>
                  {NO_RECORD_FOUND_MESSAGE}
                </Text>
              )}
            </View>
          ) : (
            <Text style={Styles.noRecordText}>Loading...</Text>
          )}
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.userList.result,
});

export default connect(mapStateToProps)(Home);
