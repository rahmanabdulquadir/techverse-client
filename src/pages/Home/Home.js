import React from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import Testimony from "./Testimony";

const Home = () => {
  return (
    <div className="w-[1220px] mx-auto mt-3">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHx0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"><Link to={'/courses'}>Explore Courses</Link></h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Testimony></Testimony>
      <Stats></Stats>
    </div>
  );
};

export default Home;
