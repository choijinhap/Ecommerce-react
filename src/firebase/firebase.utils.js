import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD3cyVsvcNLZIsIFF6Jv3brpHzVy_d9bEs',
	authDomain: 'ecommerce-9e7be.firebaseapp.com',
	projectId: 'ecommerce-9e7be',
	storageBucket: 'ecommerce-9e7be.appspot.com',
	messagingSenderId: '330930561967',
	appId: '1:330930561967:web:bf04bc182327718bc4c55a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
