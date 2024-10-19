import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p>{course.description}</p>
      <p>Data: {new Date(course.date).toLocaleDateString()}</p>
      <p>Local: {course.location}</p>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded">Inscrever-se</button>
    </div>
  );
};

export default CourseCard;