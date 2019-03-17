import {
  getLastResources,
  getRandomResourceByType,
  getResourceByIdAndType,
  getResourcesByType
} from "../firebease/resource";


class GeneralResourceService {

  static getResource() {
    return new Promise((resolve, reject) => {
      resolve(getRandomResourceByType('games'));
    });
  }

  static getRandomResourceByType(resourceType) {

    return new Promise(resolve => {
      resolve(getRandomResourceByType(resourceType))
    });
  }

  static getResourceByIdAndType(resourceType, resourceId) {
    return new Promise(resolve => {
      resolve(getResourceByIdAndType(resourceType, resourceId))
    });
  }

  static getResourcesByType(type, order, typeOrder, limit){
    return new Promise(resolve => {
      resolve(getResourcesByType(type , order, typeOrder, limit))
    })
  }

  static getLastResources($typeOrder, limit) {
    return new Promise(resolve => {
      resolve(getLastResources($typeOrder, limit));
    })
  }

}

export default GeneralResourceService;