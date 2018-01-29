import authReducer from '../../reducers/auth'

test('should set uid for log in', () => {
  const uid = '123qwe';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
}); 

test('should clear uid for log out', () => { 
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});