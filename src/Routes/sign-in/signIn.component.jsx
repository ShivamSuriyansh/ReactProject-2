import { signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn=()=>{
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
        </>
    );
}

export default SignIn;