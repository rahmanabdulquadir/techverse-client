import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({course}) => {
  const {id, category_name, image, details} = course
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1200" className="card w-72 bg-base-500 shadow-xl image-full">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <p>{details.slice(0,200)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error"><Link to={`/courses/${course.id}`}>Course Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
