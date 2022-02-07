import React, {  createContext, useContext, useReducer, useState } from 'react';
//import { Auth } from './Auth';
//import jwt_decode from 'jwt-decode';
import jwt_decode, { InvalidTokenError, JwtPayload } from 'jwt-decode'
import Cookie from 'js-cookie';

type userToken = {
  id: number,
  role : string
}

type actionType = {
  type : 'GET_USER' | 'REMOVE_USER',
  user : {
    id: number,
  role : string
    }
}


const userInitialState : userToken = { id: 0 , role:''};

export const AuthContext = createContext(userInitialState);

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// }

interface AuthContextProviderProps {
  children:React.ReactNode
}

// interface contextType {
//   dispatch: React.Dispatch<any>,
//     user: {
//       id: number,
//   role : string

//     }
  
// }

const AuthContextProvider = ({children,}:AuthContextProviderProps) => {


  //const [ auth, setAuth] = useState();
  

  const userReducer = (state : userToken, action : actionType) => {

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
        return token;
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

  const value = {user, dispatch};

  return ( 
    <AuthContext.Provider value ={value as contextType} >
    {children}
  </AuthContext.Provider>

   );
}
 
export default AuthContextProvider;