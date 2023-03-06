import { initializeApp } from "firebase/app";
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged // returns us back a listener
} from 'firebase/auth';

import {
    getFirestore,
    doc,//retrives documents inside of our firebase database
    getDoc, //getting the document data
    setDoc,//setting the document data
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk0v9DBIoNLk9Ycuy0DCYYZgTf7kfdSBk",
  authDomain: "crwn-clothing-db-7f670.firebaseapp.com",
  projectId: "crwn-clothing-db-7f670",
  storageBucket: "crwn-clothing-db-7f670.appspot.com",
  messagingSenderId: "299392799473",
  appId: "1:299392799473:web:e31fdf8bc97666638b0f50"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();// its a class

provider.setCustomParameters({
    prompt : "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, provider);

//firestore

export const db = getFirestore();
export const createUserDocumentFromAuth =async (userAuth,additionalInformation) => {
    const userDocRef = doc(db,'users',userAuth.uid);//It takes references of database, collection name and ID of a document as arguments.
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch(error){
            console.log('Error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password)return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password)return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);// callback is called everytime the auth state changes
