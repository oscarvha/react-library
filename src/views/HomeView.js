import React, { Component } from 'react';

import {loadGeneralResourceRandom} from "../actions/generalResourcesActions";
import HeroView from "../components/visual/HeroView";

class HomeView extends React.Component{

  constructor(props) {
    super(props);

    this.state={
      resourceHeader: {}
    }

  }

  componentDidMount() {
    loadGeneralResourceRandom().then((response) => {
       this.setState({resourceHeader: response})
       console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  render(){
    const resourceData = this.state.resourceHeader;
    console.log(this.state);
    return(
      <HeroView
        name={resourceData.name}
        score={resourceData.score}
        type={resourceData.type}
        id={resourceData.id}
        image_cover={resourceData.img_full}
      />
    )
  }

}

export default HomeView;