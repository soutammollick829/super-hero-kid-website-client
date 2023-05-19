import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerImg from "../../assets/images/login/sign-up-concept-illustration_114360-7875.avif";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset("");
      })
      .then((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mb-40 mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <img src={registerImg} alt="img" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSignUp} className="card-body">
              <h2 className="text-2xl font-bold">Sign up here</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-teal-600 border-0 hover:bg-teal-700">
                  Sign Up
                </button>
              </div>
            </form>
            <h2 className="text-center mb-5">
              Already have an account?
              <Link to="/login">
                <span className="font-bold text-teal-600">Please login</span>
              </Link>
            </h2>
            <div className="mx-auto mb-5">
              <h2 className="text-xl font-semibold">Sign Up</h2>
              <FaGoogle className="ml-8 text-2xl mt-5 text-teal-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
