import './assets/css/style.css';
import AppPresenter from './presenters/AppPresenter';

const initApp = () => {
  const appPresenter = new AppPresenter();
  appPresenter.init();
};

initApp();
