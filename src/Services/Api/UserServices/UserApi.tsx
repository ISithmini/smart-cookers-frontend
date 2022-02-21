import axios from "axios";

declare module 'axios' {
    export interface AxiosRequestConfig {
      id:number;
    }
  }


export const logIn = (email: string , password: string) => {
    axios.defaults.withCredentials = true;
    return axios.post('http://localhost:8000/user/login', {email, password})
};


export const getUserDetails = (id : number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/user/${id}`);
}

export const logOut = () => {
    return axios.get("http://localhost:8000/user/logout");
};

