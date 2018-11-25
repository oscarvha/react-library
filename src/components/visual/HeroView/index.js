import React from 'react'
import PropTypes from 'prop-types';
import {IoLogoGameControllerB} from "react-icons/io";


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
    style={{  background:`radial-gradient(circle, transparent 40%, black 80%),
    linear-gradient(to right, rgba(0, 4, 0, 0.6), gray), url(${image_cover})`,
      backgroundSize: `background-size: cover`
    }}
  >
    <div className={`heroview__content`}>
      <div className={`heroview__data`}>
        <span className={`heroview__item-type`}>
          <IoLogoGameControllerB className={`icon`}/>{type}</span>
        <h2 className={`heroview__item-title`}>{name}</h2>
        <p>{score}</p>
        <div className={'hero-view__button-wrapper'}>
      </div>

      </div>
    </div>
  </div>
);

HeroView.propTypes = proptypes;
HeroView.defaultProps = defaultProps;
export default HeroView;