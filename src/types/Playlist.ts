export interface PlaylistItem {
    id: number;
    title: string;
    image: string;
    tracksCount: number;
}

export interface PlaylistsModalData {
    items: PlaylistItem[];
} 