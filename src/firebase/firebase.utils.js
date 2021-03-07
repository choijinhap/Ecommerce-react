import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createFactory } from 'react';

const config = {
	apiKey: 'AIzaSyD3cyVsvcNLZIsIFF6Jv3brpHzVy_d9bEs',
	authDomain: 'ecommerce-9e7be.firebaseapp.com',
	projectId: 'ecommerce-9e7be',
	storageBucket: 'ecommerce-9e7be.appspot.com',
	messagingSenderId: '330930561967',
	appId: '1:330930561967:web:bf04bc182327718bc4c55a',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creation user', error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
