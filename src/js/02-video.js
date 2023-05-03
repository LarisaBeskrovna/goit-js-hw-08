import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_PLAUER = "videoplayer-current-time";

player.setCurrentTime(localStorage.getItem(KEY_PLAUER) || 0);

const playerTime = function () {
  player.getCurrentTime().then(function (seconds) {
  localStorage.setItem(KEY_PLAUER, seconds);
  console.log('playerTime');
  });
};
player.on('timeupdate', throttle(playerTime, 1000));