interface ResFeed{ 
    doc_id : string;
    audio_file_url : string;
    created_at : number;
    nickname : string;
    content : string;
    location : CustomLocation;  
    address_nickname : string;
    profile_image : string;
    bg_pattern : string;
};

type ReqFeed = { 
    nickname : string;
    content : string;
    location : CustomLocation;  
    address_nickname? : string;
    profile_image : string;
    bg_pattern : string;
    created_at? : number;
};

type CustomLocation = {
    lat : number;
    long : number;
}