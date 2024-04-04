import { React, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <div className="password">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
        />
        <button onClick={() => setShowPassword((p) => !p)} type="button">
          {showPassword ? <FaRegEye /> : <ImEyeBlocked />}
        </button>
      </div>
      <button>Login</button>
    </form>
  );
}

export default Login;
