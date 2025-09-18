
import { Track, TrackData } from "../../types/Track";
import TrackItem from "./TrackItem";

const TrackList = (tracks: TrackData) => {

  const tracksHTML = tracks.tracks.map((track: Track) => TrackItem(track))


  return `
    <main class="main">
        <section
          class="tracks section tabs-content section--active"
          data-target="tracks"
        >
          <h2 class="tracks__h2 title__h2">Треки</h2>
          <div class="tracks__content">
            <div class="tracks__header flex">
              <div class="tracks__header__number">№</div>
              <div class="tracks__header__name">НАЗВАНИЕ</div>
              <div class="tracks__header__albom">АЛЬБОМ</div>
              <div class="tracks__header__data">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.5H1C0.723858 1.5 0.5 1.72386 0.5 2V12C0.5 12.2761 0.723858 12.5 1 12.5H11C11.2761 12.5 11.5 12.2761 11.5 12V2C11.5 1.72386 11.2761 1.5 11 1.5Z"
                    stroke="#A4A4A4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 0.5V2.5"
                    stroke="#A4A4A4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 0.5V2.5"
                    stroke="#A4A4A4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.5 4.5H11.5"
                    stroke="#A4A4A4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="tracks__header__time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                    stroke="#A4A4A4"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M7 3.5V7H10.5"
                    stroke="#A4A4A4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <ul class="tracks__list">
             ${tracksHTML.join('')}
            </ul>
          </div>
        </section>
        <section class="playlist section tabs-content" data-target="playlists">
          <h2 class="playlist__h2 visually-hidden">Плейлисты</h2>
          <ul class="playlist__list">
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(1).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(1).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(1).jpg"
                  alt="Любимые песни"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Любимые песни</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(2).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(2).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(2).jpg"
                  alt="Плейлист #1"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #1</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(3).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(3).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(3).jpg"
                  alt="Плейлист #2"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #2</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(4).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(4).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(4).jpg"
                  alt="Плейлист #3"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #3</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(5).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(5).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(5).jpg"
                  alt="Плейлист #4"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #4</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(6).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(6).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(6).jpg"
                  alt="Плейлист #5"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #5</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(7).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(7).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(7).jpg"
                  alt="Плейлист #6"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #6</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
            <li class="playlist__item">
              <picture>
                <source
                  srcset="img/playlists__360%20(8).jpg"
                  media="(max-width: 576px)"
                />
                <source
                  srcset="img/playlists__1440%20(8).jpg"
                  media="(max-width: 1440px)"
                />
                <img
                  class="playlist__img"
                  src="img/playlists%20(8).jpg"
                  alt="Плейлист #7"
                />
              </picture>
              <div class="playlist__content">
                <h3 class="playlist__h3">
                  <a class="playlist__h3__link" href="/">Плейлист #7</a>
                </h3>
                <span class="playlist__count">58 треков</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    `;
};

export default TrackList;
