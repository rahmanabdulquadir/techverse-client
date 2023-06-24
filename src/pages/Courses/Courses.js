import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses)
  return (
    <div className="flex justify-center w-[1220px] mx-auto mt-10">
      <div>
        <h1 className="text-2xl text-red-500">Total available courses: {courses?.length}</h1>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Courses
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {courses?.map((course) => (
                <li>
                  <Link to={`/courses/${course?._id}`}>{course.category_name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid col-span-10 grid-cols-3 gap-5 ml-5">
        {courses?.map((course) => (
          <CoursesCard key={course?._id} course={course}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
