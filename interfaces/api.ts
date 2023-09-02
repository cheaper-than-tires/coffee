import { firebaseService, sojutonService } from "./service";
import { uploadAudioFile } from "./upload_sample";

export const api = {
  saveFeed: async (feed: ReqFeed, file: Blob) => {
    console.log(feed)
    console.log(file)
    const address = sojutonService.getAddressFromLocation(feed.location);
    feed.address_nickname ??= address;

    const result = await firebaseService.save(feed);
    console.log(result)
    const result1 = await uploadAudioFile(file);
    console.log(result1)
  },

  getAllFeed: async () => {
    return await firebaseService.getAll();
  }
};
