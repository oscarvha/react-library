import React, { Component } from 'react';

import {loadGeneralResource} from "../actions/generalResourcesActions";
import HeroView from "../components/visual/HeroView";

class HomeView extends React.Component{

  constructor(props) {
    super(props);

    this.state={
      resourceHeader: {}
    }

  }

  componentDidMount() {
    loadGeneralResource().then((response) => {
       this.setState({resourceHeader: response})
    }).catch((error) => {
      console.log(error);
    })
  }

  render(){
    const resourceData = this.state.resourceHeader;
    return(
      <HeroView
        name={resourceData.name}
        score={resourceData.score}
        type={resourceData.type}
      />
    )
  }

}

export default HomeView;