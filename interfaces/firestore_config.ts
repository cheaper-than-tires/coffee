import app from './firebase_config';
import {getFirestore} from '@firebase/firestore';

const firestore = getFirestore(app);
export default firestore;
