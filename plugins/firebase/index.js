import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { config } from './config.js';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  Github: firebase.auth.GithubAuthProvider.PROVIDER_ID,
};

export const auth = firebase.auth();

export const db = firebase.firestore();
