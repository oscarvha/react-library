import React from 'react'
import Slider from "react-slick";
import ResourceBox from "../visual/ResourceBox";
import {LAST_RESOURCE_NUMBER} from "../../constants/variables";

class SliderLastResource extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.props.getLastResources("desc", LAST_RESOURCE_NUMBER)
      .then(response =>{
      this.setState({data:response})
    }).catch(error => {
      console.log(error);
    })


  }

  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
    return(
      <Slider {...settings} className={'slider-item'}>
        {this.state.data.map((resource, i) => {
          return ( <ResourceBox resource={resource} key={i}/>)
        })}
      </Slider>
    )
  }
}


export default SliderLastResource;