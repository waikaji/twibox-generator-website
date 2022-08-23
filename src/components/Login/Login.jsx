import React, {useState} from "react";
import "../Create/Create.css";


function Login() {
  const [clickRegister, setClickRegister] = useState(false)

  return (
  <div className="create">
    {clickRegister?<h3>Register</h3>:<h3>Login</h3>}
    
    {clickRegister?<h4>Nama</h4>:""}
    {clickRegister?<input type="text" id="name" name="name"/>:""}

    <h4>Email</h4>
    <input type="text" id="title" name="title"/>

    <h4>Password</h4>
    <input type="password" id="password" name="password" />

    {clickRegister?<h4>Konfirmasi Password</h4>:""}
    {clickRegister?<input type="password" id="conf_password" name="conf_password" />:""}

    <br/>
    {clickRegister?<input className="button btn-submit" type="submit" value="Register"/>:<input className="button btn-submit" type="submit" value="Login"/>}
    

    <div className="register">
      {clickRegister? <span>Sudah punya akun? <button className="click-register" onClick={() => setClickRegister(() => !clickRegister)}>Masuk</button></span>: <span>Belum punya akun? <button className="click-register" onClick={() => setClickRegister(() => !clickRegister)}>Daftar</button></span>}
      
    </div>
  </div>

  );
}

export default Login;