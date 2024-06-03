import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 7;
  const isButtonDisabled = !isEmailValid || !isPasswordValid;

  function handleSubmit(event: any) {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/meals');
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ (event) => { setEmail(event.target.value); } }
        />
      </label>
      <label>
        <input
          type="password"
          data-testid="password-input"
          placeholder="Password"
          onChange={ (event) => { setPassword(event.target.value); } }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        className="login-btn"
        disabled={ isButtonDisabled }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
