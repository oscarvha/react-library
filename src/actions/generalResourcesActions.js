import GeneralResourceService from "../services/GeneralResourceService";

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