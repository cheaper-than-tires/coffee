import firestore from './firestore_config';
import app from './firebase_config';
import { setDoc, collection, getDocs, doc, addDoc } from '@firebase/firestore';

const firebaseService = {
  save: async (data : any) => {
    try {
      const value = await addDoc(collection(firestore, 'feed'), data);
  
      return {
        success: true,
        data: value.id,
      }
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        console.log(e.message);
        return {
          success: false,
          message: e.message,
        }
      } else {
        console.log(e);
        return {
          success: false,
          message: e,
        }
      }
    }
  },

  getAll: async () => {
    try {
      const snapshot = await getDocs(collection(firestore, 'feed'));
      const feeds = snapshot.docs.map(doc => doc.data());
      console.log(feeds);

      return {
        success: true,
        data: feeds
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
  }
};

const sojutonService = {
  getAddressFromLocation: (location: CustomLocation) => {
    return 'test address nickname';
  }
};

export { firebaseService, sojutonService };
