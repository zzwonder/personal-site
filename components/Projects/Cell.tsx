import React from 'react';
import dayjs from 'dayjs';
import url from 'url';

const BASE_PATH = '';

interface Props {
  data: {
    title: string,
    link: string,
    image: string,
    date: string,
    desc: string,
  };
}

const Cell : React.FC<Props> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
