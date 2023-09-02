import {firebaseService, sojutonService} from "./service";

export const api = {
    saveFeed : async (feed : ReqFeed) => {
        const address = await sojutonService.getAddressFromLocation(feed.location);
        feed.address_nickname ??= address;

        await firebaseService.save(feed);
    },

    getAllFeed : async () => {
        return await firebaseService.getAll();
    }
};