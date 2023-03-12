import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {createUser, updateUserProfile, googleLogin} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
    .then(res => {
      const user = res.user
      console.log(user)
    })
    .catch(err => console.error(err))
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(res => {
      const user = res.user;
      form.reset()
      userProfile(name, photoURL)
      console.log(user)
    })
    .catch(err => console.error(err))
  }

  const userProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(err => console.log(err))
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                name="photoURL"
                type="text"
                placeholder="Photo - URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Already have an account? <Link to={'/login'}>Login here</Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-outline">Sign Up</button>
            </div>
            <div className="form-control mt-3">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">Sign Up with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
