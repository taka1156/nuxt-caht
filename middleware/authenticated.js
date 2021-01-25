import { auth } from '~/plugins/firebase';

export default function ({ route, store, redirect }) {
  auth.onAuthStateChanged(user => {
    if (user) {
      store.dispatch('auth/logIn', user);
    } else {
      if (['chatroom', 'chat-id', 'password-id'].indexOf(route.name) !== -1) {
        redirect('/account/');
      }
    }
  });
}
