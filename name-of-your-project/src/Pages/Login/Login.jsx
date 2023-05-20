import { useContext } from 'react';
// import logInImg from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {

  const {logInUser} = useContext(AuthContext)

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    logInUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .then(error => {
      console.log(error)
    })
    // Perform sign-up logic here
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-white">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left">
          {/* <img src={logInImg} alt="" /> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-blue-300">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-blue-800">Sign UP!</h1>
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered bg-slate-300"
                />
              </div>

              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered bg-slate-300"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Log In"
                />
              </div>
              <p className="mt-5 text-center">
                New to this account?
                <Link to="/signup" className="text-red-600 font-bold underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
