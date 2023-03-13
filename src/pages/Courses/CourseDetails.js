import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const courseDetails = useLoaderData()
  console.log(courseDetails)
  return (
    <div>
      course detail page
    </div>
  );
};

export default CourseDetails;