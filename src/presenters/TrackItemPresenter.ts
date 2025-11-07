import TrackItem from '../components/Tracks/TrackItem';
import { Track } from '../types/Track';

class TrackItemPresenter {
  private component: TrackItem;

  constructor(private track: Track) {
    this.component = new TrackItem(track);
    this.setEvents();
  }

  private setEvents(): void {
    const likeBtn = this.component
      .getElement()
      .querySelector('.track__like-btn');
    const dropDownBtn = this.component
      .getElement()
      .querySelector('.track__btn-dropdown');
    const addToPlaylistBtn = this.component
      .getElement()
      .querySelector('.track__add-btn');
    const deleteFromPlaylistBtn = this.component
      .getElement()
      .querySelector('.track__delete-btn');

    likeBtn?.addEventListener('click', this.handleLike.bind(this));
    dropDownBtn?.addEventListener('click', this.handleDropdown.bind(this));
    addToPlaylistBtn?.addEventListener(
      'click',
      this.handleAddToPlaylist.bind(this)
    );
    deleteFromPlaylistBtn?.addEventListener(
      'click',
      this.handleDeleteFromPlaylist.bind(this)
    );
  }

  private handleLike(): void {
    this.track.isLiked = !this.track.isLiked;
    this.updateLikeButton();
  }

  private handleDropdown(): void {
    const dropdown = this.component
      .getElement()
      .querySelector('.track__dropdown');
    dropdown?.classList.toggle('dropdown--active');
  }

  private handleAddToPlaylist(): void {
    console.log('Add to playlist:', this.track);
  }

  private handleDeleteFromPlaylist(): void {
    console.log('Delete from playlist:', this.track);
  }

  private updateLikeButton(): void {
    const likeBtn = this.component
      .getElement()
      .querySelector('.track__like-btn');
    if (likeBtn) {
      likeBtn.classList.toggle('like-btn--active', this.track.isLiked);
    }
  }

  public getComponent(): TrackItem {
    return this.component;
  }

  public updateTrack(updatedTrack: Track): void {
    this.track = updatedTrack;
  }
}

export default TrackItemPresenter;
