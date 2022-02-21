import { Component, useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

interface RoutLockProps {
    path : Element,
    redirect: string
}

 
const RoutLock: React.FunctionComponent<RoutLockProps> = ({path , redirect}) => {
    const { user} = useContext(AuthContext);

    let isAccessGranted = false;
    if(user.role=='admin'){
        isAccessGranted= true;
    }
    
    if(isAccessGranted) {
        return path;

    }else{
        return  <Navigate to={{pathname : `${redirect}`}}/>
    }
}
 
export default RoutLock;