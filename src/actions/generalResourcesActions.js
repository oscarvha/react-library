import GeneralResourceService from "../services/GeneralResourceService";
import {resourceTypes} from "../config/variables";

export const LOAD_GENERAL_RESOURCE = 'LOAD_GENERAL_RESOURCE';
export const LOADING_RESOURCE = 'LOADING_RESOURCES';

function loadingResources() {
  return {
    type: LOADING_RESOURCE
  }
}

export function getResourceByTypeAndId(resourceType, resourceId) {
  return GeneralResourceService.getResourceByIdAndType(resourceType,resourceId)
    .then(response =>{
      return Promise.resolve(response)
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(error);
    })
}

export function loadGeneralResource() {
  return GeneralResourceService.getResource()
    .then(response =>{
      return Promise.resolve(response)
    })
    .catch(error=>{
      console.log(error);
      return Promise.reject(error)
    });
}


export function loadGeneralResourceRandom() {
  let size = resourceTypes.length - 1;
  const randomIndex = Math.floor(Math.random() * size);
  return GeneralResourceService.getRandomResourceByType(resourceTypes[randomIndex])
    .then(response =>{
      return Promise.resolve(response)
    })
    .catch(error=>{
      console.log(error);
      return Promise.reject(error)
    });

}


export function getResourcesByType($type, order, typeOrder, limit) {
  return dispatch => {
    return GeneralResourceService.getResourcesByType($type, order, typeOrder, limit)
      .then(response => {
        dispatch(loadingResources());
      return Promise.resolve(response);
      })
      .catch(error => {
        console.error(error)
       return Promise.reject(error);
      })
  }
}

export function getLastResources(typeOrder, limit) {
  return dispatch => {
    return GeneralResourceService.getLastResources(typeOrder, limit)
      .then(response => {
        dispatch(loadingResources());
        return Promise.resolve(response);
      })
      .catch(error => {
        console.error(error)
        return Promise.reject(error);
      })
  }
}