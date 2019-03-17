import React from 'react'
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import ButtonLink from "../../buttons/ButtonLink";
import {VIEW_RESOURCE} from "../../../constants/translations";
import IconTypeResource from "../../icons/IconTypeResource";

const proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  image_cover: PropTypes.string,
  score: PropTypes.number,
  loading: PropTypes.bool
};

const defaultProps = {
    title: 'Resource 1',
    type_resource: 'Videojuego',
    description: 'Este es un Resource Tipo ',
    image_cover: 'https://images.alphacoders.com/633/633643.jpg',
    loading: true
};


class HeroView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }

    componentDidMount() {
      // the setTimeout just simulates an async action, after which the component will render the content
      setTimeout(() => this.setState({ loading: false }), 1000);
    }


    render(){
    return (
      <React.Fragment>
        {!this.state.loading
          &&
          <div
            className={`heroview__wrapper`}
            style={{
              background: `radial-gradient(circle, transparent 40%, black 80%),
        linear-gradient(to right, rgba(0, 4, 0, 0.6), gray), url(${this.props.image_cover})`,
              backgroundSize: `background-size: cover`
            }}
          >
            <div className={`heroview__content`}>
              <div className={`heroview__data`}>
            <span className={`heroview__item-type`}>
              <IconTypeResource typeResource={this.props.type} />
              {this.props.type}
              </span>
                <h2 className={`heroview__item-title`}>{this.props.name}</h2>
                <div className="hero__item-content">
                  <div style={{width: '70px'}}>
                    <CircularProgressbar
                      percentage={this.props.score}
                      text={`${this.props.score}%`}
                      strokeWidth={8}
                      styles={{
                        path: {stroke: `rgba(95, 212, 0, ${this.props.score / 100})`},
                        text: {fill: 'white', fontSize: '20px'},
                      }}
                    />
                  </div>
                  <div className={'hero-view__button-wrapper'}>
                    {!this.props.hidden_link
                    &&
                    <ButtonLink link={`/resource/${this.props.type}/${this.props.id}`} text={VIEW_RESOURCE}
                                className={`hero-view_button`}/>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>

  )
  }
}
HeroView.propTypes = proptypes;
HeroView.defaultProps = defaultProps;
export default HeroView;