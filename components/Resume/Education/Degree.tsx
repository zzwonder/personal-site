import React from 'react';

interface Props {
  data: {
    degree: string,
    link: string,
    school: string,
    year: number,
  };
}

const Degree: React.FC<Props> = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>
        ,
        {' '}
        {data.year}
      </p>
    </header>
  </article>
);

export default Degree;
