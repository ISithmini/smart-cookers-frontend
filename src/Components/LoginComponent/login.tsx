import "./login.css";
import { useContext, useEffect, useState } from "react";
import { logIn } from "../../Services/Api/UserServices/UserApi";
import { getUser } from "../../Services/Api/UserServices/UserApi";
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie';
import jwt_decode from "jwt-decode";
import { AuthContext } from "../../Context/AuthContext";


interface LoginProps { }


type userToken = {
    id: number,
    role : string
  }

const Login: React.FunctionComponent<LoginProps> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setloginStatus] = useState("");
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        logIn(email, password)
            .then((res) => {
                if (res.data.message) {
                setloginStatus(res.data.message)
                } else {
                    console.log(res.data.token)
                    // const cookie = Cookie.get('regdata');
                    // console.log(cookie)
                    // let token = jwt_decode<userToken>(cookie || '') || null;
                    // console.log(token)

                    dispatch({type:"GET_USER"})
                    navigate('/');
                }

            })
    }
    // useEffect(() => {
    //     getUser()
    //     .then((res) =>{
    //         console.log(res);
    //         if(res.data.loggedin == true){
    //             navigate('/');
    //         }   
    // })
          
      
    // }, []);
    
    
    return (
        <>
            <div className="LoginPage">

                <div className="greetingSection">
                    {/* <img src={loginimg} width="50%" alt="" /> */}
                    <div className="welcome">
                        Welcome....!
                    </div>
                    <div className="welcomeText">
                        <p>
                            Smart Cookers will expand your reach and allow
                            you to fulfil your needs in a better and faster way.
                        </p>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <div className="LoginForm">
                        <h3 className="text-white mb-4">Smart Cookers Login</h3>
                        <form onSubmit={(e) => {
                            handleSubmit(e);
                        }}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    required={true}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    autoComplete="on"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <button className="btn Login-btn center">Login</button>

                        </form>
                        <br/>
                        <h6 className="text-danger"> { loginStatus}</h6>

                    </div>

                </div>

            </div>

           

        </>


    );
}

export default Login;