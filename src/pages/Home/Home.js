import React from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import Testimony from "./Testimony";

const Home = () => {
  return (
    <div className="w-[1220px] mx-auto mt-3">
      <header>
        <div
          className="w-full bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`,
          }}
        >
          <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
              <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                Learn Your desirable  <span class="text-red-400">Technologies</span> <br />And Be Tech Star
              </h1>
              <Link to={'/courses'}>
                <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md lg:w-auto hover:bg-red-400 focus:outline-none focus:bg-red-400">
                  Start exploring courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Testimony></Testimony>
      <Stats></Stats>
    </div>
  );
};

export default Home;
