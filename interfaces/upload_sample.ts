import { getStorage, ref, uploadBytes } from "firebase/storage";
import cloudStorage from './cloud_storage'

export async function uploadAudioFile(blob: Blob) {
  try{
    const storageRef = ref(cloudStorage, 'audio');
    const res = await uploadBytes(storageRef, blob);

    return {
      success: true,
      data: `https://storage.googleapis.com/sojuton.appspot.com/${res.ref.fullPath}`,
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
