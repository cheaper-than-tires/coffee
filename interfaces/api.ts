import {firebaseService, sojutonService} from "./service";
import { uploadAudioFile } from "./upload_sample";

export const api = {
    saveFeed : async (feed : ReqFeed, file : Blob) => {
        const address = await sojutonService.getAddressFromLocation(feed.location);
        feed.address_nickname ??= address;

        await firebaseService.save(feed);
        await uploadAudioFile(file);
    },

    getAllFeed : async () => {
        return await firebaseService.getAll();
    }
};