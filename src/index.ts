import './assets/css/style.css';
import Header from './components/Header';
import Player from './components/Player';
import Playlists from './components/Playlists';
import Sidebar from './components/Sidebar';
import Tracks from './components/Tracks';

document.body.insertAdjacentHTML(
  'afterbegin',
  Playlists() +
  `<div class="over-wrapper" style="position: relative; overflow: hidden">
    ${Header()}
    <div class="content-wrap flex">
      ${Sidebar() + Tracks()}
    </div>
    ${Player()}
  </div>`
);
