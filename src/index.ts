import './assets/css/style.css';
import Header from './components/Header';
import Player from './components/Player';
import Playlists from './components/Playlists';
import Sidebar from './components/Sidebar';
import TrackList from './components/Tracks/TrackList';
import { append, prepend } from './core/render';

import {
  generateHeaderData,
  generatePlayerState,
  generatePlaylistsModal,
  generateSidebarData,
  generateTracks,
} from './mocks';

const playlistsData = generatePlaylistsModal();
const headerData = generateHeaderData();
const sidebarData = generateSidebarData();
const tracks = generateTracks;
const playerState = generatePlayerState();

const initApp = () => {
  const playlist = new Playlists(playlistsData);
  const header = new Header(headerData);
  const sidebar = new Sidebar(sidebarData);
  const trackList = new TrackList(tracks);
  const player = new Player(playerState);

  const overWrapper = document.createElement('div');
  overWrapper.className = 'over-wrapper';
  overWrapper.style.position = 'relative';
  overWrapper.style.overflow = 'hidden';

  const contentWrap = document.createElement('div');
  contentWrap.className = 'content-wrap flex';
  append(contentWrap, sidebar);
  append(contentWrap, trackList);

  append(overWrapper, header);
  append(overWrapper, contentWrap);
  append(overWrapper, player);

  prepend(document.body, playlist);
  prepend(document.body, overWrapper);
};

initApp();
