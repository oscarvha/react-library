

class GeneralResourceService {

  static getResource()
  {
    return new Promise((resolve, reject) => {
      let data = {
        name: 'Narcos',
        type: 'Juegos',
        score: 77
      };
      resolve(data);
    });
  }


}

export default GeneralResourceService;