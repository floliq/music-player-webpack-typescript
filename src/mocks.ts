import { PlaylistsModalData, PlaylistItem } from "./types/Playlist";
import { SidebarData } from "./types/Sidebar";
import { HeaderUser } from "./types/Header";
import { PlayerState } from "./types/Player";
import { getTrackDuration } from "./utils/trackFormatter";
import { TrackData } from "./types/Track";

const imageForPlaylist = (i: number): string => `img/tracks%20(${((i - 1) % 8) + 1}).jpg`;

export const generatePlaylistsModal = (count: number = 8): PlaylistsModalData => {
  const items: PlaylistItem[] = [];
  for (let i = 1; i <= count; i++) {
    items.push({
      id: i,
      title: `Плейлист #${i}`,
      image: imageForPlaylist(i),
      tracksCount: 0,
    });
  }
  return {
    items: items
  };
};

export const generateSidebarData = (): SidebarData => {
  return {
    lists: [
      { id: "pl1", label: "Плейлист #1" },
      { id: "pl2", label: "Плейлист #2" },
      { id: "pl3", label: "Плейлист #3" },
      { id: "pl4", label: "Плейлист #4" },
      { id: "pl5", label: "Плейлист #5" },
      { id: "pl6", label: "Плейлист #6" },
      { id: "pl7", label: "Плейлист #7" },
    ],
  };
};

export const generateHeaderData = (): HeaderUser => {
  return { name: "Tatiana L.", avatar: "img/user.jpg" }
};

export const generatePlayerState = (): PlayerState => {
  return {
    current: {
      title: "Histoire Sans Nom",
      artist: "Ludovico Einaudi, Czech National Symphony Orchestra",
      image: "img/tracks%20(1).jpg",
    },
    liked: true,
    timeStartSec: getTrackDuration(0),
    timeEndSec: getTrackDuration(26),
  };
}; 

export const generateTracks: TrackData = {
  "tracks": [
    {
      "id": 1,
      "number": 1,
      "title": "In Bloom",
      "artist": "Nirvana",
      "album": "Nirvana",
      "image": "img/tracks%20(1).jpg",
      "duration": 335,
      "addedDate": "2025-01-15T10:30:00Z",
      "isLiked": false
    },
    {
      "id": 2,
      "number": 2,
      "title": "Gangsta's Paradise",
      "artist": "Coolio, L.V.",
      "album": "Gangsta's Paradise",
      "image": "img/tracks%20(2).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T11:15:00Z",
      "isLiked": true
    },
    {
      "id": 3,
      "number": 3,
      "title": "Histoire Sans Nom",
      "artist": "Ludovico Einaudi, Czech National Symphony Orchestra",
      "album": "Cinema",
      "image": "img/tracks%20(3).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T12:45:00Z",
      "isLiked": true
    },
    {
      "id": 4,
      "number": 4,
      "title": "Animal I Have Become",
      "artist": "Three Days Grace",
      "album": "One-X",
      "image": "img/tracks%20(4).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T14:20:00Z",
      "isLiked": true
    },
    {
      "id": 5,
      "number": 5,
      "title": "When the Lights Come On",
      "artist": "IDLES",
      "album": "CRAWLER",
      "image": "img/tracks%20(5).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T16:05:00Z",
      "isLiked": true
    },
    {
      "id": 6,
      "number": 6,
      "title": "To The Skies From A Hillside",
      "artist": "Maybeshewill",
      "album": "To The Skies From A Hillside",
      "image": "img/tracks%20(6).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T17:30:00Z",
      "isLiked": true
    },
    {
      "id": 7,
      "number": 7,
      "title": "Co-Conspirators",
      "artist": "Maybeshewill",
      "album": "Sing The Word Hope In Four Part Harmony",
      "image": "img/tracks%20(7).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T18:45:00Z",
      "isLiked": true
    },
    {
      "id": 8,
      "number": 8,
      "title": "Surrounded By Spies",
      "artist": "Placebo",
      "album": "Surrounded By Spies",
      "image": "img/tracks%20(8).jpg",
      "duration": 335,
      "addedDate": "2024-01-15T20:10:00Z",
      "isLiked": true
    }
  ]
}