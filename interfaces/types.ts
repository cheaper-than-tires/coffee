interface ResFeed extends ReqFeed{ 
    doc_id : string;
    audio_file_url : string;
    created_at : number;
};

type ReqFeed = { 
    nickname : string;
    content : string;
    location : CustomLocation;  
    address_nickname? : string;
    profile_image? : string;
};

type CustomLocation = {
    lat : number;
    long : number;
}