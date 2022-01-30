import "./login.css";
import loginimg from '../../Assets/images/login.png';
interface LoginProps {

}

const Login: React.FunctionComponent<LoginProps> = () => {

    return (
        <div className="LoginPage">
            <div className="greetingSection">
                <img src={loginimg} width="50%" alt="" />
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
                    <form>
                        <div className="form-group">
                            <input
                                className="form-control"
                                required={true}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        <button className="btn Login-btn center">Login</button>

                    </form>

                </div>
            </div>
        </div>

    );
}

export default Login;