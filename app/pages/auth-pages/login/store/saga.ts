import {AsyncStorage} from 'react-native';

export function loginUserService(username: string, password: string) {
  return new Promise((resolve, reject) => {
    let userToken = `${username}${password}`;
    AsyncStorage.setItem('userToken', userToken)
      .then(() => {
        resolve(userToken);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function logoutUserService() {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem('userToken')
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}
