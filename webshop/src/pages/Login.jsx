
import { useContext } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDO3Ey_rMbQZ6J2NovfzfusJeHG_3i2RmQ";
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const login = () => {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
        fetch(url, { method: "POST", body: JSON.stringify(user) })
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    setMessage(json.error.message);
                } else {
                    navigate("/admin");
                    authCtx.setLoggedIn(true);
                    sessionStorage.setItem("token", json.idToken);
                }
            })
    }
    return (
        <div>
            <div>{message}</div>
            <label>E-mail</label> <br />
            <input ref={emailRef} type="text" /> <br />
            <label>Password</label> <br />
            <input ref={passwordRef} type="text" /> <br />
            <button onClick={login}>Login</button>
        </div>);
}
export default Login;