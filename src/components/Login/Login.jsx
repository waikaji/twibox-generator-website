import React, {useState} from "react";
import "../Create/Create.css";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login, register } from "../../actions/auth"

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function Login() {
  const [clickRegister, setClickRegister] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const history = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(clickRegister) {
      dispatch(register(formData, history))
    } else {
      dispatch(login(formData, history))
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
  <div className="create">
    {clickRegister?<h3>Register</h3>:<h3>Login</h3>}
    <form onSubmit={handleSubmit}>
      {clickRegister?<h4>Nama</h4>:""}
      {clickRegister?<input type="text" onChange={handleChange} id="name" name="name"/>:""}

      <h4>Email</h4>
      <input type="text" onChange={handleChange} id="email" name="email"/>

      <h4>Password</h4>
      <input type="password" onChange={handleChange} id="password" name="password" />

      {clickRegister?<h4>Konfirmasi Password</h4>:""}
      {clickRegister?<input type="password" onChange={handleChange} id="confirmPassword" name="confirmPassword" />:""}

      <br/>
      {clickRegister?<input className="button btn-submit" type="submit" value="Register"/>:<input className="button btn-submit" type="submit" value="Login"/>}
    </form>
    

    <div className="register">
      {clickRegister? <span>Sudah punya akun? <button className="click-register" onClick={() => setClickRegister((clickRegister) => !clickRegister)}>Masuk</button></span>: <span>Belum punya akun? <button className="click-register" onClick={() => setClickRegister(() => !clickRegister)}>Daftar</button></span>}
      
    </div>
  </div>

  );
}

export default Login;