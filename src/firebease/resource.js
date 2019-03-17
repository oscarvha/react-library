import {inicializeFireStore} from "../config/firebase_config";
import {dateConvertToMouthAndYear} from "../utils/dateConvert";
import {arrayOrderByDateDesc} from "../utils/arrayTransform";

export const getAllByResourceType = (resourceType) => {
  const db = inicializeFireStore();
  db.collection(resourceType).get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
};

export const getResourceByIdAndType = (typeDocument, idDocument) => {
  const db = inicializeFireStore();
  var documentReference = db.collection(typeDocument).doc(idDocument);
  return documentReference.get()
    .then(function(documentSnapshot) {
      if (documentSnapshot.exists) {
        let data = documentSnapshot.data();
        return {
          id: idDocument,
          name: data.name,
          score: data.score,
          img_full: data.img_full,
          type: typeDocument,
          error: false
        }
      } else {
        console.log('document not found');
        return{
          error: true
        }
      }
    })
    .catch(function(error){
        console.log('error');
    });

}

export const getRandomResourceByType = (typeDocument) => {
  const db = inicializeFireStore();
  return db.collection(typeDocument).get().then(snap => {
    let size = snap.size;
    const randomIndex = Math.floor(Math.random() * size);
    return {
      name:snap.docs[randomIndex].data().name,
      score: snap.docs[randomIndex].data().score,
      type: typeDocument,
      img_full: snap.docs[randomIndex].data().img_full,
      id: snap.docs[randomIndex].id,
      date: snap.docs[randomIndex].data().date,
      date_text: dateConvertToMouthAndYear(snap.docs[randomIndex].data().date)
    }
  }).catch(error =>{
    console.log(error);
  });
};

export const getResourcesByType = (type , order, typeOrder = 'DESC',  limit = 10) => {
  const db = inicializeFireStore();
  let data = [];
  let collecion = db.collection(type);
 return collecion.orderBy(order , typeOrder).limit(limit).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let resource = {
            name:doc.data().name,
            score:doc.data().score,
            type: type,
            img_full: doc.data().img_full,
            id: doc.id,
            date: doc.data().date,
            date_text: dateConvertToMouthAndYear(doc.data().date)
        }
        data.push(resource);
      });
      return data;
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
}

export const getLastResources = (typeOrder, limit) => {
  let data = [];
      return getResourcesByType('movies','date','desc', limit).then(function(response){
        response.forEach(function(doc){
          data.push(doc);
        });
        return getResourcesByType('games', 'date', 'desc', limit).then(function(response){
          response.forEach(function(doc){
            data.push(doc);
          });
          return getResourcesByType('books', 'date', 'desc', limit).then(function(response){
            response.forEach(function(doc){
              data.push(doc);
            });
          data = arrayOrderByDateDesc(data);
          data = data.slice(0, limit);
          console.log(data);
          console.log('aqui');
          return data;

        }).catch(function(error){
          console.log(error);
        });
        });
      });
}
