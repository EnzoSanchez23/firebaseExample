import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext
} from "react";
import Firebase from "firebase";
import {auth} from "../../config/configFirebase";

export type AuthContextDataProps = {
  user: Firebase.UserInfo;
  signIn: (email, senha) => Promise<void>;
  singOut: () => Promise<void>;
  isLoadingUserData: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode,
}

export const AuthContext = createContext({});

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({})
  const [isLoadingUserData, setIsLoadingUserData] = useState(false);
  
  async function signIn({ email, pass }) {
    console.log("signIn", { email, pass })
   
    setIsLoadingUserData(true)
    auth.signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userLogin",JSON.stringify(user, undefined, 2))
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage)
        // ..
      })
      .finally(()=>{
        setIsLoadingUserData(false)
      })
    
  }

  async function signOut() {
    try
    {
      console.log("sair")
      setUser({});
      await auth.signOut()
    }catch (error) {
      throw error;
    }
    
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      isLoadingUserData
    }}>
      {children}
    </AuthContext.Provider>
  )

}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}