import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("bhaviktembhare2@gmail.com");
  const [password, setPassword] = useState("BH@vik52");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const Login = async () => {
    const response = await axios.post(BASE_URL + "/login",{
      email,
      password
    },{ withCredentials:true });
    dispatch(addUser(response.data));
    Navigate('/');
  }

  return (
    <div className="flex justify-center ">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter a email Id</legend>
            <input type="text" className="input" placeholder="Type here" value={email} onChange={(e) => setEmail(e.target.value)} />

          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter a password</legend>
            <input type="text" className="input" placeholder="Type here" value={password} onChange={(e) => setPassword(e.target.value)} />

          </fieldset>

          <div className="card-actions">
            <button className="btn btn-primary" onClick={Login}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;