import React, { useContext } from "react";
// import signUpImg from '../../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

  const {createUser, googleSingIn} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .then(error => {
      console.log(error)
    })
    // Perform sign-up logic here
  };

  const handleGoogleSignIn = (auth, googleProvider) => {
    googleSingIn(auth, googleProvider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .then(error => {
      console.log(error)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200 bg-white">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left">
          {/* <img src={signUpImg} alt="" /> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-blue-300">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-blue-800">Sign UP!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="name"
                  className="input input-bordered bg-slate-300"
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
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
                  value="Sign Up"
                />
              </div>
              <button onClick={handleGoogleSignIn} className="bg-black px-20 py-2 rounded-xl mt-5 m-auto font-bold text-white">Google SignIn</button>
              <p className="mt-5 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-red-600 font-bold underline">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
