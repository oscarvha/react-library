import React from 'react'
import PropTypes from 'prop-types';

const proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  image_cover: PropTypes.string,
  score: PropTypes.number
};

const defaultProps = {
    title: 'Resource 1',
    type_resource: 'Videojuego',
    description: 'Este es un Resource Tipo ',
    image_cover: 'https://images.alphacoders.com/633/633643.jpg',
};


const HeroView = ({ name, description, type, image_cover, score }) => (

  <div
    className={`heroview__wrapper`}
    style={{ backgroundImage: `url(${image_cover})` }}
  >
    <div className={`heroview__content`}>
      <h2 className={`heroview__item-title`}>{name}</h2>
      <h3 className={`heroview__item-subtitle`}>Tipo de recurso {type}</h3>
      <p>{score}</p>
      <div className={'hero-view__button-wrapper'}>

      </div>
    </div>
  </div>
);

HeroView.PropTypes = proptypes;
HeroView.defaultProps = defaultProps;
export default HeroView;