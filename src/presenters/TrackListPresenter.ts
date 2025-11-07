import TrackList from '../components/Tracks/TrackList';
import { TrackData } from '../types/Track';
import TrackItemPresenter from './TrackItemPresenter';

class TrackListPresenter {
  private component: TrackList;
  private trackPresenters: Map<string, TrackItemPresenter> = new Map();

  constructor(private trackData: TrackData) {
    this.component = new TrackList(trackData);
  }

  public initTracks(): void {
    this.trackData.tracks.forEach((track) => {
      const presenter = new TrackItemPresenter(track);
      this.trackPresenters.set(String(track.id), presenter);
    });

    this.renderTracks();
  }

  private renderTracks(): void {
    this.trackPresenters.forEach((presenter) => {
      this.component.addTrackElement(presenter.getComponent().getElement());
    });
  }

  public getComponent(): TrackList {
    return this.component;
  }
}

export default TrackListPresenter;
