import app from './firebase_config';
import { getStorage } from "firebase/storage";

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export default storage;