import {getLastResources, getResourcesByType} from "../actions/generalResourcesActions";
import connect from "react-redux/es/connect/connect";
import SliderLastResource from "../components/list/SliderLastResource";


const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['resourceReducer', 'loading']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadResourcesByType: (type , order, typeOrder, limit) => dispatch(getResourcesByType(type, order, typeOrder, limit)),
    getLastResources: (typeOrder, limit) => dispatch(getLastResources(typeOrder,limit))
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderLastResource)