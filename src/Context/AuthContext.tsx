import React, {  createContext, useContext, useReducer, useState, Dispatch } from 'react';
//import { Auth } from './Auth';
//import jwt_decode from 'jwt-decode';
import jwt_decode, { InvalidTokenError, JwtPayload } from 'jwt-decode'
import Cookie from 'js-cookie';
import {AuthReducer} from './AuthReducer';

type userToken = {
  id: number,
  role : string
}

// type actionType = {
//   type : 'GET_USER' | 'REMOVE_USER',
//   user : {
//     id: number,
//   role : string
//     }
// }

// type contextType = {
//   dispatch: React.Dispatch<any>,
//     user: {
//       id: number,
//   role : string

//     }  
// }

const userInitialState : userToken = { id: 0 , role:''};

// export const AuthContext = createContext({user : userInitialState; dispatch : Dispatch<AuthReducer>;});
export const AuthContext= createContext<{
  user: userToken;
  dispatch: Dispatch<any>;
}>({
  user: userInitialState,
  dispatch: () => null
});

export const useAuthContext = () => {
  return useContext(AuthContext);
}

interface AuthContextProviderProps {
  children:React.ReactNode
}



const AuthContextProvider = ({children,}:AuthContextProviderProps) => {

  //const [ auth, setAuth] = useState();
  
  const userReducer = (state : any, action : any) => {

    switch (action.type) {
      case 'GET_USER':
        const cookie = Cookie.get('regdata');
        let token = jwt_decode<userToken>(cookie || '') || null;
        console.log(token)
        return {
          id: token.id,
          role: token.role,
        }
      case 'REMOVE_USER':
        return action.user
      default:
        return "";
    }
  }

  const [user, dispatch] = useReducer(userReducer, '', () => {
    let token = Cookie.get('regdata');
    if (token) {
      let user = jwt_decode<userToken>(token || '') || null;
      return { 
          id: user.id,
          role: user.role,  
      }
    } else
      return '';

  });


  return ( 
    <AuthContext.Provider value ={ {user, dispatch}} >
    {children}
  </AuthContext.Provider>

   );
}
 
export default AuthContextProvider;