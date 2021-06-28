import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: 'AIzaSyBUZbyQAgAjhtF41ncL9542CVR24oyNqag',
	authDomain: 'chat-app-ba3f0.firebaseapp.com',
	projectId: 'chat-app-ba3f0',
	storageBucket: 'chat-app-ba3f0.appspot.com',
	messagingSenderId: '404954101638',
	appId: '1:404954101638:web:e03e29a17ce964a8f09e07',
	measurementId: 'G-EZ15VKMKMG',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
	<Context.Provider
		value={{
			firebase,
			auth,
			firestore,
		}}
	>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
