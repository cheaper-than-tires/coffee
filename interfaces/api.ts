import { firebaseService, sojutonService } from "./service";
import { uploadAudioFile } from "./upload_sample";

export const api = {
  saveFeed: async (feed: ReqFeed, file: Blob) => {
    const address = sojutonService.getAddressFromLocation(feed.location);
    feed.address_nickname ??= address;
    const fileRes = await uploadAudioFile(file);
    if (fileRes.success) {
      console.log('음성 파일 업로드 성공');
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
      const result = await firebaseService.save(req);
      if (result.success) {
        console.log('도큐먼트 저장 성공')
      } else {
        console.log('도큐먼트 저장 실패')
      }
      return result;
      } else {
        return {
          succeess: false,
          message: '음성파일 저장 실패'
        }
    }
  },

  getAllFeed: async () => {
    return await firebaseService.getAll();
  }
};
