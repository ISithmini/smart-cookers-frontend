import jwt_decode, { InvalidTokenError, JwtPayload } from 'jwt-decode'
import Cookie from 'js-cookie';


type userToken = {
    id: number,
    role : string
  }
  
 export  type actionType = {
    type : 'GET_USER' | 'REMOVE_USER',
    user : {
      id: number,
    role : string
      }
  }



export const AuthReducer = (state : userToken, action : actionType) => {

    switch (action.type) {
      case 'GET_USER':
        const cookie = Cookie.get('regdata');
        console.log(cookie)
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