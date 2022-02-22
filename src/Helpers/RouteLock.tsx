import { Component, useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

interface RoutLockProps {
    path : JSX.Element,
    redirect: string
}

 
const RoutLock: React.FunctionComponent<RoutLockProps> = ({path , redirect}) => {
    const { user} = useContext(AuthContext);

    let isAccessGranted = false;
    if(user) {
        if(user.role=='admin' || user.role=='sales' || user.role=='inventory'){
            isAccessGranted= true;
        }else{
            isAccessGranted = false
        }

    }else{
        isAccessGranted = false

    }
    
    
    if(isAccessGranted) {
        return path;

    }else{
        return  <Navigate to={{pathname : `${redirect}`}}/>
    }
}
 
export default RoutLock;