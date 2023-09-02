import {firebaseService, sojutonService} from "./service";

export const api = {
    saveFeed : async (feed : FeedType) => {
        // const address = await sojutonService.getAddressFromLocation(feed.location);
        // console.log(address)
        await firebaseService.save(feed);
    },

    getAllFeed : async () => {
        return await firebaseService.getAll();
    }
};