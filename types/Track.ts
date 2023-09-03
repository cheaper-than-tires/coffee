export interface Track {
  nickname: string;
  content: string;
  audio_file_url: string;
  location: {
    lat: number;
    long: number;
  }
  address: string;
  address_nickname: string;
  created_at: number;
  profile_image?: string;
}
