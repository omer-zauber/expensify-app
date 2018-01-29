//import configureMockStore from 'redux-mock-store';
//import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

//onst createMockStore = configureMockStore([thunk]);

test('should setup login action object', () => {
  const action = login('123qwe');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '123qwe'
  });
});

test('should setup login action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});