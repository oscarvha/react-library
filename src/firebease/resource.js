import {inicializeFireStore} from "../config/firebase_config";

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

export const getResourceByIdAndType = (idDocument, typeDocument) => {
  const db = inicializeFireStore();
  var documentReference = db.collection(typeDocument).doc(idDocument);
  return documentReference.get()
    .then(function(documentSnapshot) {
      if (documentSnapshot.exists) {
        let data = documentSnapshot.data();
        return {
          id: idDocument,
          name: data.name,
          score: data.score
        }
      } else {
        console.log('document not found');
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
      id: snap.docs[randomIndex].id
    }
  }).catch(error =>{
    console.log(error);
  });
}