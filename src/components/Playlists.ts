import { PlaylistsModalData } from '../types/Playlist';
import { createDOMElement } from '../utils/createDomElement';

class Playlists {
  private element: HTMLElement | null = null;

  constructor(private playlists: PlaylistsModalData) {}

  getTemplate(): string {
    const playlistsHTML = this.playlists.items.map(
      (playlist) => `
        <div class="playlists-modal__playlist">
            <img
            src="${playlist.image}"
            alt="${playlist.title}"
            class="playlists-modal__playlist__image"
            />
            <div class="playlists-modal__playlist__title">${playlist.title}</div>
            <div class="playlists-modal__playlist__info">${playlist.tracksCount}</div>
        </div>
    `
    );

    return `
        <div class="playlists-modal">
        <div class="playlists-modal__title">Добавить в плейлист</div>
        <div class="playlists-modal__playlist_content">
            ${playlistsHTML}
        </div>
        <div class="playlists-modal__footer">
        <div class="playlists-modal__close-btn">Отменить</div>
        </div>
    </div>
    `;
  }

  getElement(): HTMLElement {
    this.element ??= createDOMElement(this.getTemplate());
    return this.element;
  }

  removeElement(): void {
    this.element = null;
  }
}

export default Playlists;
