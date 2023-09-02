import { firebaseService, sojutonService } from "./service";
import { uploadAudioFile } from "./upload_sample";

export const api = {
  saveFeed: async (feed: ReqFeed, file: Blob) => {
    const address = sojutonService.getAddressFromLocation(feed.location);
    feed.address_nickname ??= address;
    const fileRes = await uploadAudioFile(file);
    if (fileRes.success) {
      console.log('에엥?')
      const req = {
        audio_file_url : fileRes.data,
        created_at : Date.now(),
        nickname : feed.nickname,
        content : feed.content,
        location : feed.location,
        address_nickname : feed.address_nickname,
        profile_image : feed.profile_image,
        bg_pattern : feed.bg_pattern,
      }
      await firebaseService.save(req);
    }



  },

  getAllFeed: async () => {
    return await firebaseService.getAll();
  }
};
