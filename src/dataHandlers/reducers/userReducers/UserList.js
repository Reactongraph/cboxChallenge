import * as ActionNames from 'src/common/metaData/ActionNames';
// @flow
export default function reducer(
  state: Object = {
    status: 'uninitiated',
    result: {},
  },
  action: Object,
) {
  switch (action.type) {
    case ActionNames.USER_LIST_STARTED: {
      return {...state, status: 'started'};
    }
    case ActionNames.USER_LIST_SUCCESS: {
      return {...state, status: 'success', result: action.payload};
    }
    case ActionNames.USER_LIST_FAILED: {
      return {...state, status: 'failed', result: action.payload};
    }
    default: {
      return state;
    }
  }
}
