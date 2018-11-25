import {getRandomResourceByType, getResourceByIdAndType, getResourceByTypeAndId} from "../firebease/resource";

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


}

export default GeneralResourceService;