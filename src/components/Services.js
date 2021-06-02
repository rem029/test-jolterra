import React from 'react';
import featuredImg1 from '../assets/images/feature.svg';
import featuredImg2 from '../assets/images/feature2.svg';
import featuredImg3 from '../assets/images/feature3.svg';

import '../styles/section.services.css';

import ServicesFeatured from './ServicesFeatured';

const features = [
  {
    title: 'Best Practice',
    text: 'We use marketing best practices to maximize impact',
    src: featuredImg1,
    order: 'leftToRight',
  },
  {
    title: 'Viral Coefficient',
    text: 'We understand the viral coefficient and maximize your resources',
    order: 'rightToLeft',
    src: featuredImg2,
  },
  {
    title: 'Personalized Service',
    text: 'We custom fit the service to your needs ',
    src: featuredImg3,
    order: 'leftToRight',
  },
];

const Services = () => {
  const featuredList = features.map((featured, index) => (
    <ServicesFeatured
      key={index}
      title={featured.title}
      text={featured.text}
      src={featured.src}
      order={featured.order}
    />
  ));
  return (
    <React.Fragment>
      <div className="section__services__text">
        <h2>Don't worry</h2>
        <p>We can read minds about what your marketing requires</p>
      </div>
      {featuredList}
    </React.Fragment>
  );
};

export default Services;
