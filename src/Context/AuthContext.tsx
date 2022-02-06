import React, {  createContext, useContext, useReducer } from 'react';
import { Auth } from './Auth';
import jwt_decode from 'jwt-decode';
import Cookie from 'js-cookie';

export const AuthContext = createContext(Auth);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

type AuthContextProps = {
        token : string
}

const AuthContextProvider = (AuthContextProps) => {

    

    const userReducer = (state, action) => {
        switch (action.type) {
          case 'GET_USER':
            let token = jwt_decode(Cookie.get('regdata'));
            return {
              id: token.id,
              email: token.email,
            }
          case 'REMOVE_USER':
            return action.user
          default:
            return token
        }
      }
    
      const [user, dispatch] = useReducer(userReducer, '', () => {
        let token = Cookie.get('regdata');
        if (token) {
          let user = jwt_decode(token);
          return {
            id: user.id,
            email: user.email
          }
        } else
          return '';
    
      });
      return (
        <AuthContext.Provider value={{ user, dispatch }} >
          {children}
        </AuthContext.Provider>
      )
}

export default AuthContextProvider;