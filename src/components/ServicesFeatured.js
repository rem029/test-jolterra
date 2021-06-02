import React, { useState, useEffect } from 'react';
import '../styles/section.services.css';

const ServicesFeatured = ({ title, text, src, order }) => {
  const [winSize, setWinSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', onWinResize);

    return () => {
      window.removeEventListener('resize', onWinResize);
    };
  }, []);

  const onWinResize = (e) => {
    setWinSize(e.currentTarget.innerWidth);
  };

  return (
    <div className="section__services__feature">
      {order === 'leftToRight' ? (
        <React.Fragment>
          <div className="section__services__feature-text">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="section__services__feature-img">
            <img src={src} alt={title}></img>
          </div>
        </React.Fragment>
      ) : winSize <= 500 ? (
        <React.Fragment>
          <div className="section__services__feature-text">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="section__services__feature-img">
            <img src={src} alt={title}></img>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="section__services__feature-img">
            <img src={src} alt={title}></img>
          </div>
          <div className="section__services__feature-text">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ServicesFeatured;
