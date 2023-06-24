import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const {category_name} = useLoaderData()
  return (
    <div>
      <h2>{category_name}</h2>
    </div>
  );
};

export default CourseDetails;