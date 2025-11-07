import Header from '../components/Header';
import Player from '../components/Player';
import Playlists from '../components/Playlists';
import Sidebar from '../components/Sidebar';
import { append, prepend } from '../core/render';
import {
  generateHeaderData,
  generatePlayerState,
  generatePlaylistsModal,
  generateSidebarData,
  generateTracks,
} from '../mocks';
import TrackListPresenter from './TrackListPresenter';

class AppPresenter {
  private playlist: Playlists;
  private header: Header;
  private sidebar: Sidebar;
  private trackListPresenter: TrackListPresenter;
  private player: Player;

  constructor() {
    const playlistsData = generatePlaylistsModal();
    const headerData = generateHeaderData();
    const sidebarData = generateSidebarData();
    const tracks = generateTracks;
    const playerState = generatePlayerState();
    this.playlist = new Playlists(playlistsData);
    this.header = new Header(headerData);
    this.sidebar = new Sidebar(sidebarData);
    this.trackListPresenter = new TrackListPresenter(tracks);
    this.player = new Player(playerState);
  }

  public init(): void {
    this.renderApp();
    this.trackListPresenter.initTracks();
    this.setGlobalEvents();
  }

  private renderApp(): void {
    const overWrapper = document.createElement('div');
    overWrapper.className = 'over-wrapper';
    overWrapper.style.position = 'relative';
    overWrapper.style.overflow = 'hidden';

    const contentWrap = document.createElement('div');
    contentWrap.className = 'content-wrap flex';

    append(contentWrap, this.sidebar);
    append(contentWrap, this.trackListPresenter.getComponent());

    append(overWrapper, this.header);
    append(overWrapper, contentWrap);
    append(overWrapper, this.player);

    prepend(document.body, this.playlist);
    prepend(document.body, overWrapper);
  }

  private setGlobalEvents(): void {}
}

export default AppPresenter;
