import React from 'react';
import {getResourceByTypeAndId} from "../actions/generalResourcesActions";
import HeroView from "../components/visual/HeroView";
import Redirect from "react-router/es/Redirect";

class ResourceView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:  [],
      error: false
    }
  }

  componentWillMount() {
    const {type, id} = this.props.match.params;
    getResourceByTypeAndId(type, id)
      .then(response =>{
        this.setState({data: response})
      })
      .catch(error =>{
        console.log(error);
        this.setState({error: true})
      });
  }

  render() {

    return(
      <div>
        {this.state.data.error
          && <Redirect to={`/`}/>
        }
        <HeroView
          name={this.state.data.name}
          score={this.state.data.score}
          type={this.state.data.type}
          id={this.state.data.id}
          image_cover={this.state.data.img_full}
          hidden_link={true}
        />
      </div>
    )
  }

}

export default ResourceView;