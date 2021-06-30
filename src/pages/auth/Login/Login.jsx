import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import LogoGoogle from 'assets/google.svg';
import './login.css';
import { useForm } from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from 'redux/auth/auth.actions';

function LoginScreen() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginWithEmailAndPassword(inputValues));
    console.log(inputValues);
  }

  function handleLoginWithGoogle() {
    dispatch(loginWithGoogle());
  }

  return (
    <main className="main">
      <div className="form-content">
        <div className="login-logo">
          <img src={Logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="example@gmail.com"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={setInputValues}
            required
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={setInputValues}
            required
          />
          <button className="btn-blue">Sing In</button>
        </form>
        <button className="btn-outline-blue" onClick={handleLoginWithGoogle}>
          <img src={LogoGoogle} alt="logo to google" width={14} height={14} />
          Sign In With Google
        </button>
        <p>
          Don't have a account <Link to="/auth/register">Register</Link>{' '}
        </p>
      </div>
    </main>
  );
}

export default LoginScreen;
