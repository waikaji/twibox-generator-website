import React, {useState} from "react";
import "../Create/Create.css";
import "./Login.css";
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
  const [errorLogin, setErrorLogin] = useState("")
  const [errorRegister, setErrorRegister] = useState({
    email:"",
    password:""
  })
  const history = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(clickRegister) {
      let data = await dispatch(register(formData, history))
      setErrorRegister({...errorRegister, email:data.email, password:data.password})
    } else {
      let data = await dispatch(login(formData, history))
      setErrorLogin(data)
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
  <div className="create">
    {clickRegister?<h3>Register</h3>:<h3>Login</h3>}
    <form onSubmit={handleSubmit}>
      <label className="error-text" htmlFor="error">{errorLogin}</label>
      {clickRegister?<h4>Nama</h4>:""}
      {clickRegister?<input type="text" onChange={handleChange} id="name" name="name" required/>:""}

      <h4>Email</h4>
      <label className="error-text" htmlFor="error">{errorRegister.email}</label>
      <input type="email" onChange={handleChange} id="email" name="email" required/>

      <h4>Password</h4>
      <label className="error-text" htmlFor="error">{errorRegister.password}</label>
      <input type="password" onChange={handleChange} id="password" name="password" required/>

      {clickRegister?<h4>Konfirmasi Password</h4>:""}
      {clickRegister?<input type="password" onChange={handleChange} id="confirmPassword" name="confirmPassword" required/>:""}

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