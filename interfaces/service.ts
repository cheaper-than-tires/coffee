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
    
    try {
      const docRef = await addDoc(collection(firestore, 'feed'), request);
      console.log(docRef.id);

      return {
        success : true,
        data : docRef.id
      }
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        return {
          success: false,
          message: e.message,
        }
      }
    }
   },

   getAll : async () => {
      try{
        const snapshot = await getDocs(collection(firestore, 'feed'));
        const feeds = snapshot.docs.map(doc=>doc.data());
        console.log(feeds);

        return {
          success : true,
          data : feeds
        }
      }catch (e) {
        console.error(e);
        if (e instanceof Error) {
          return {
            success: false,
            message: e.message,
          }
        }
      }
   }
};

const sojutonService = {
  getAddressFromLocation : (location : CustomLocation) => {
    return 'test address nickname';
  }
};

export {firebaseService, sojutonService};