import { Component, useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

interface RoutLockProps {
    element: any,
    path : any,
    redirect: any
}

 
const RoutLock: React.FunctionComponent<RoutLockProps> = ({element, path, redirect}) => {
    const { user} = useContext(AuthContext);

    let isAccessGranted = false;
    if(user.role=='admin'){
        isAccessGranted= true;
    }
    return isAccessGranted? ( 
        <Route path={path} >{<Component/>}</Route>
     ) : (
         <Navigate to={{pathname : `${redirect}`}}/>
     )
}
 
export default RoutLock;