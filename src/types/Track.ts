export interface Track {
  id: number;
  number: number;
  title: string;
  artist: string;
  album: string;
  image: string;
  duration: number;
  addedDate: string;
  isLiked: boolean;
}

export interface TrackData {
  tracks: Track[];
}
