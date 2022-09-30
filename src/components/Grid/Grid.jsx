import React from "react";
import './Grid.css'
import data from '../../constants/data.js';

const Grid = () => {
  return (
    <div className="section__padding grid__title" id="grid">
      <h1>Lorem</h1>
      <hr></hr>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        excepturi voluptates quasi provident? Totam repudiandae sapiente
        obcaecati, architecto vel id non corporis, eum natus repellat hic
        inventore rem minus cumque!
      </p>

      <div className="app__wrapper grid__container">
        {data.map(({ id, imgUrl, title, paragraph }) => {
          return (
            <article key={id} className="grid__item">
              <div className="grid__item-images">
                <img src={imgUrl} alt={title} />
              </div>
              <div className="grid__item-text">
                <h3>{title}</h3>

                <p>{paragraph}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
