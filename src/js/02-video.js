import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_PLAUER = "videoplayer-current-time";

player.on('timeupdate', function () {
    console.log('played the video!');
    const currentTime = player.currentTime();
    localStorage.setItem(KEY_PLAUER, throttle(currentTime,1000));
    {
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
    
  }); 

function playerPaused(){
    if(JSON.parse(localStorage.setItem(KEY_PLAUER))===null){
        return;
    }}
 const pausedPlayer = JSON.parse(localStorage.setItem(KEY_PLAUER))["second"];

 if (pausedPlayer) {
    player
    .setCurrentTime(pausedPlayer)
    .then(function(second){})
    .catch(function(error){switch (error.name) {
        case 'Error':break;}})
    
 }

