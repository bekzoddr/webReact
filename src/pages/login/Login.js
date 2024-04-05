import { React, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN__URL } from "../../static";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim) {
      return toast.warn("enter info");
    }
    let user = { username, password };
    console.log(user);
    axios
      .post(`${LOGIN__URL}/auth/login`, user)
      .then((res) => {
        console.log("response-----", res);
        toast.success("login successful");
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("error-----", err);
        toast.error("invalid username or password");
      });
  };
  return (
    <div className="loginPage">
      {/* <form onSubmit={handleSubmit}>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <div className="password">
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          {password && (
            <button onClick={() => setShowPassword((p) => !p)} type="button">
              {showPassword ? <FaRegEye /> : <ImEyeBlocked />}
            </button>
          )}
        </div>
        <button>Login</button>
      </form> */}
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
          <h1 className="opacity">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <div className="password">
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
              />
              {password && (
                <button
                  className="eye"
                  onClick={() => setShowPassword((p) => !p)}
                  type="button"
                >
                  {showPassword ? <FaRegEye /> : <ImEyeBlocked />}
                </button>
              )}
            </div>
            <button type="submit" className="opacity">
              SUBMIT
            </button>
          </form>
          <div className="register-forget opacity">
            <a href="">REGISTER</a>
            <a href="">FORGOT PASSWORD</a>
          </div>
        </div>
        <div className="circle circle-two"></div>
      </div>
    </div>
  );
}

export default Login;
