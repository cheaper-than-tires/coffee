import firestore from './firestore_config';
import { setDoc, collection, getDocs, doc, addDoc } from '@firebase/firestore';

export async function test() {
  // await setDoc(collection(firestore, 'feed'), {
  //   test: '김연석',
  // })
}

const firebaseService = {
  save: async (data : any) => {
    try {
      console.log('제발');
      const res = await addDoc(collection(firestore, 'feed'), data);
      console.log('됫니?');
      console.log(`됫다~~ ${res}`)


      return {
        success: true,
        data: 'dds',
      }
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        console.log(e.message);
        return {
          success: false,
          message: e.message,
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
