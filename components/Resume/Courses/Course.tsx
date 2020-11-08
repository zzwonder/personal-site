import React from 'react';

interface Props {
  data: {
    link: string,
    number: string,
    title: string,
  },
  last: boolean,
}

const Course: React.FC<Props> = ({ data, last = false }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">
        {data.number}
        :
      </h4>
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

export default Course;
