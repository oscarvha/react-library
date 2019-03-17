import {getLastResources} from "../actions/generalResourcesActions";
import HomeView from "../views/HomeView";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['resourceReducer', 'loading'])
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getLastResources:(typeOrder, limit) => dispatch(getLastResources(typeOrder, limit))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);