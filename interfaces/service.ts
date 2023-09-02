import firestore from './firestore_config';
import { addDoc, collection, getDoc, getDocs } from '@firebase/firestore';

const {DATABASE} = process.env;

export async function test(){
  await addDoc(collection(firestore, 'feed'), {
    test: '김연석',
  })
};

const firebaseService = {
   save : async (feed : ReqFeed) => {
    const request = {
      ...feed,
      created_at : Date.now(),

    };
      
      const docRef = await addDoc(collection(firestore, 'feed'), request);
      console.log(docRef.id);
   },

   getAll : async () => {
      const snapshot = await getDocs(collection(firestore, 'feed'));
      const feeds = snapshot.docs.map(doc=>doc.data());
      console.log(feeds);

      return feeds;
   }
};

const sojutonService = {
  getAddressFromLocation : (location : CustomLocation) => {
    return 'asdf';
  }
};

export {firebaseService, sojutonService};