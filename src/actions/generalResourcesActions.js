import GeneralResourceService from "../services/GeneralResourceService";
import {resourceTypes} from "../config/variables";

export const LOAD_GENERAL_RESOURCE = 'LOAD_GENERAL_RESOURCE';

function loadGenealResource(resource) {
    return {
      type: LOAD_GENERAL_RESOURCE,
      payload: resource
    }
}



export function loadGeneralResource(){
  return GeneralResourceService.getResource()
    .then(response =>{
      return Promise.resolve(response)
    })
    .catch(error=>{
      console.log(error);
      return Promise.reject(error)
    });
}


export function loadGeneralResourceRandom(){
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