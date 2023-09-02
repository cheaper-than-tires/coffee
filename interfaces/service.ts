import firestore from './firestore_config';
import { addDoc, collection, getDoc } from '@firebase/firestore';

const {DATABASE} = process.env;
export async function test(){
  await addDoc(collection(firestore, 'feed'), {
    test: '김연석',
  })
};

