// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// getRedirectResult will get the auth
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn=()=>{

    // useEffect(async ()=> {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     // if(response){
    //     //     const userDocRef = createUserDocumentFromAuth(response.user);
    //     // }
    // },[]);


    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <>
        <h1>this is Sign-in page</h1>
        <button onClick={logGoogleUser}>
            Sign-In with Google Popup.
        </button>
        <SignUpForm />
        </>
    );
}

export default SignIn;