import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_PLAUER = "videoplayer-current-time";

player.on('timeupdate', function () {
    console.log('played the video!');
    const currentTime = player.currentTime();
    localStorage.setItem(KEY_PLAUER, throttle(currentTime,1000));
    throttle
        {
            duration: 61.857
            percent: 0.049
            seconds: 3.034
        }
      console.log(KEY_PLAUER)}); 
      
        function pausedPlay() {
          if (JSON.parse(localStorage.getItem(KEY_PLAUER)) === null) {
            return;
          }
          const paused = JSON.parse(localStorage.getItem(KEY_PLAUER))["seconds"];
          if (paused) {
            player
              .setCurrentTime(paused)
              .then(function (seconds) {})
              .catch(function (error) {
                switch (error.name) {
                  case "Error":
                    break;
                  default:
                    break;
                }
              });
          }
        }
        pausedPlay();



