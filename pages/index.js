import {useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import style from "../styles/Login.module.scss";
import ErrorBox from "../components/ErrorBox";

export default function Home() {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {
  }
  return (
    <div className='GlobalCenterContainer'>
      <form onSubmit={handleSubmit} className={style.loginContainer}>
        <input type='text' placeholder="Username:"/><br/>
        <input type='password' placeholder="Password:"/><br/>
        <button type="submit">Login</button>
      {error ? <ErrorBox ErrorMessage="Invalid username or password"/> : null}
      </form>
    </div>
  );
}
