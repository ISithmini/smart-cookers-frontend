import axios from "axios";
//export const baseURL = "http://localhost:8000/";

declare module 'axios' {
    export interface AxiosRequestConfig {
      id:number;
    }
  }


export const logIn = (email: string , password: string) => {
    axios.defaults.withCredentials = true;
    return axios.post('http://localhost:8000/user/login', {email, password})
};

export const getUser = () => {
    return axios.get('http://localhost:8000/user/info');
}

export const getUserDetails = (id : number) => {
    console.log(id);
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/user/details/${id}`);
}

export const logOut = () => {
    return axios.get("http://localhost:8000/user/logout");
};

