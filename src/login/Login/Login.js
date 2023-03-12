import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(res => {
      const user = res.user;
      form.reset()
    })
    .catch(err => console.error(err))
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  New to this site? <Link to={'/register'}>Sign up here</Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
