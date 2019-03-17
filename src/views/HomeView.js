import React from 'react';

import {loadGeneralResourceRandom} from "../actions/generalResourcesActions";
import HeroView from "../components/visual/HeroView";
import FilterTypeList from '../containers/FIlterTypeLisContainert'

class HomeView extends React.Component{

  constructor(props) {
    super(props);

    this.loadRandomResource = this.loadRandomResource.bind(this);

    this.state={
      resourceHeader: {}
    }
  }

  loadRandomResource(){
    loadGeneralResourceRandom().then((response) => {
      this.setState({resourceHeader: response})
      console.log(response);

    }).catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.loadRandomResource();
   // this.interval = setInterval(() => {this.loadRandomResource()}, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render(){
    const resourceData = this.state.resourceHeader;
    return(
      <React.Fragment>
        <HeroView
          name={resourceData.name}
          score={resourceData.score}
          type={resourceData.type}
          id={resourceData.id}
          image_cover={resourceData.img_full}
          loading={false}
        />
        <div className={`particles__container`}>
          <div className={`container section__last-resources`}>
            <div className={`last-resource__title-content`}>
              <h2 className={'app-title'}> Ultimos recursos </h2>
            </div>
            <FilterTypeList/>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default HomeView;