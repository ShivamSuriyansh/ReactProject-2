import { createContext , useState, useEffect} from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListner} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currUser:null,
    setCurrUser:()=>null,
});


export const UserProvider  = ({children})=> {
    const [currUser, setCurrUser] = useState(null);
    const value = {currUser, setCurrUser};
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListner((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrUser(user);
        });
        return unsubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}