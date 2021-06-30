import Logo from 'assets/logo.svg';
import { useForm } from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserWithEmailAndPassword } from 'redux/auth/auth.actions';
import './register.css';

function RegisterScreen() {
  const dispatch = useDispatch();

  const [values, setInputValues] = useForm({
    email: '',
    name: '',
    password: '',
  });

  function handleSubmit(e) {
    dispatch(registerUserWithEmailAndPassword(values));
    e.preventDefault();
  }

  return (
    <main className="main">
      <div className="form-content">
        <div className="login-logo">
          <img src={Logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={values.name}
            onChange={setInputValues}
            required
          />
          <input
            placeholder="example@gmail.com"
            type="email"
            name="email"
            value={values.email}
            onChange={setInputValues}
            required
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={values.password}
            onChange={setInputValues}
            required
          />
          <button className="btn-blue">Register</button>

          <p>
            Do you have account? <Link to="/auth/login">Sing In</Link>{' '}
          </p>
        </form>
      </div>
    </main>
  );
}

export default RegisterScreen;
