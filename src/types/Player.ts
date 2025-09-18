export interface PlayerTrack {
    title: string;
    artist: string;
    image: string;
}

export interface PlayerState {
    current: PlayerTrack;
    liked: boolean;
    timeStartSec: string;
    timeEndSec: string;
} 