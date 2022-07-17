import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Login() {

    const [contact, setContact] = useState({
        Username: "",
        Password: "",
        
      });
    
      function handler(event) {
        const { value, name } = event.target;
    
        setContact(preValue => {
          if (name === "username") {
            return {
              username: value,
              password: preValue.password,
              
            };
          } else if (name === "password") {
            return {
              username: preValue.username,
              password: value,
              
            };
          } 
        });
      }
  return (
    <div>
        <div className="container">
      
      <h1>
        Login Page
      </h1>
      <br />
      <form>
        <input
          onChange={handler}
          value={contact.username}
          name="username"
          placeholder="Username"
          
        />
        <input
          onChange={handler}
          value={contact.password}
          name="password"
          placeholder="Password"
        />
        <p id="forgot">Forgot Password?</p>
        <input id="checkbox" type="checkbox" value="checkbox" />
        <br />
        <button>Login</button>
        <div>
        <Link to="/registration">Don't have a account ? Register</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;