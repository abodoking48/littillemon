import React from 'react';
import Header from '../components/Header'
import LoginForm from '../components/LoginForm';


const Login = () => {
  return (
    <div>
      <Header />
      <h1 style={{textAlign: "center", paddingTop: "15%"}}>Login</h1>
      <LoginForm  />
    </div>
  )
}

export default Login
