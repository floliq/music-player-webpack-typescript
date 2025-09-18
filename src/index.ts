import "./assets/css/style.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Playlists from "./components/Playlists";
import Sidebar from "./components/Sidebar";
import Tracks from "./components/Tracks/TrackList";
import {
  generateHeaderData,
  generatePlaylistsModal,
  generateSidebarData,
  generateTracks,
} from "./mocks";

const playlists = generatePlaylistsModal();
const headerData = generateHeaderData();
const sidebarData = generateSidebarData();
const tracks = generateTracks;

const initApp = () => {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
      ${Playlists(playlists)}
      <div class="over-wrapper" style="position: relative; overflow: hidden">
        ${Header(headerData)}
        <div class="content-wrap flex">
          ${Sidebar(sidebarData)}
          ${Tracks(tracks)}
        </div>
        ${Player()}
      </div>
    `
  );
};

initApp();
