import React, {  createContext, useContext, useReducer } from 'react';
import { Auth } from './Auth';
//import jwt_decode from 'jwt-decode';
import jwt_decode, { JwtPayload } from 'jwt-decode'
import Cookie from 'js-cookie';

export const AuthContext = createContext(Auth);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

interface AuthContextProviderProps {
  children:React.ReactNode
}


 
const AuthContextProvider = ({children,}:AuthContextProviderProps) => {

  const userReducer = (state : any, action : any) => {
    switch (action.type) {
      case 'GET_USER':
        const cookie = Cookie.get('regdata');
        const token = jwt_decode<JwtPayload>(cookie || '') || null
        console.log(token)
        return {
          //id: token.id,
          // role: token.role,
        }
      case 'REMOVE_USER':
        return action.user
      default:
        // return token;
    }
  }

  const [user, dispatch] = React.useReducer(userReducer, '', () => {
    let token = Cookie.get('regdata');
    if (token) {
      let user = jwt_decode<JwtPayload>(token || '') || null;
      console.log(user)
      return { 
        // id: user.id,
        // role: user.role,
      }
    } else
      return '';

  });

  return ( 
    <AuthContext.Provider value ={{user ,dispatch}} >
    {children}
  </AuthContext.Provider>

   );
}
 
export default AuthContextProvider;