import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/bg-login.png";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
const {loggedUser,handelSignGoogle}= useContext(AuthContext);

const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || '/';

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      Swal.fire({
        title: 'Invalid Password',
        text: 'The password must be at least 6 characters long.',
        icon: 'error',
      });
      return false; 
    }
    console.log(email,password);

    loggedUser(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset('');
        if(user.email !== password){
          Swal.fire({
            title: 'Login Successful',
            text: 'You have successfully logged in.',
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'Login Failed',
            text: 'Invalid username or password.',
            icon: 'error',
          });
          return false; 
        }
        navigate(from, {replace: tr})
    })
    .then(error =>{
        console.log(error);
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-10 text-teal-600">
              Login now!
            </h1>
            <img src={loginImg} alt="img" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-teal-600 hover:bg-teal-700 border-0">
                  Login
                </button>
              </div>
            </form>
            <h2 className="text-center mb-5">
              New to here ?
              <Link to="/register">
                <span className="font-bold text-teal-600">Please sign up</span>
              </Link>
            </h2>
            <div className="mx-auto mb-5">
              <h2 className="text-xl font-semibold">Login with</h2>
              <FaGoogle onClick={handelSignGoogle} className="ml-8 text-2xl mt-5 text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
