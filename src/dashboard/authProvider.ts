import { AuthProvider } from 'ra-core';
import request from 'graphql-request';
import { LoginDocument } from 'generated';
import jwtDecode from 'jwt-decode';
import { print } from 'graphql/language/printer';
import firebase from 'lib/firebase/client';
const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const firebaseLogin = await firebase.auth().signInWithEmailAndPassword(username, password);
    const idToken = await firebaseLogin.user?.getIdToken();
    const result = await request(process.env.API_URL, print(LoginDocument), {
      idToken,
    });

    const decoded = jwtDecode(result.login.token);
    if (decoded && decoded.permissions) {
      localStorage.setItem('permissions', JSON.stringify(decoded.permissions));
    }
    localStorage.setItem('session', result.login.token);
    localStorage.setItem('user', JSON.stringify(result.login.user));
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('session');
    localStorage.removeItem('permissions');
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => (localStorage.getItem('session') ? Promise.resolve() : Promise.reject()),
  getPermissions: async () => {
    const permissions = localStorage.getItem('permissions');
    const session = localStorage.getItem('session');

    return session ? (permissions ? Promise.resolve(JSON.parse(permissions)) : Promise.resolve({})) : Promise.reject();
  },
};

export default authProvider;
