import "./login.css";
import { useEffect, useState } from "react";
import { logIn } from "../../Services/Api/UserServices/UserApi";
import { getUser } from "../../Services/Api/UserServices/UserApi";
import { useNavigate } from "react-router-dom";


interface LoginProps { }

const Login: React.FunctionComponent<LoginProps> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setloginStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        console.log(email);

        logIn(email, password)
            .then((res) => {
                //console.log(res.data.message);
                if (res.data.message) {
                    console.log(res.data.message);
                    setloginStatus(res.data.message)
                } else {
                    navigate('/');
                }

            })
    }

    useEffect(() => {
        getUser()
        .then((res) =>{
            console.log(res);
            if(res.data.loggedin == true){
                setloginStatus("You are already logged in")
            }   
    })
          
      
    }, []);
    
    
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