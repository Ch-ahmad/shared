import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Home from "./modules/Home";
import { Navigate } from "react-router-dom";
import Routes from './routes';

function App() {
  return (
    <Routes/>
    //   <div className="App">
    //   <header className="App-header">
    //     <img src="lensflarelogo.png" className="App-logo" alt="logo" />
    //   <GoogleLogin
    //     onSuccess={credentialResponse => {
    //     //<Navigate to="./modules/Home/index.js" />;
    //     const decoded = jwtDecode(credentialResponse?.credential);
    //     console.log(decoded);
    // }}
    //     onError={() => {
    //     console.log('Login Failed');
    // }}
    // />
    //   </header>
    // </div>
  )
}

export default App;
