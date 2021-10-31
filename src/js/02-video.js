import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const timeDelay = throttle(onGetCurrentTime, 1000)

function onGetCurrentTime() {

  player
    .getCurrentTime()

    .then(function(seconds) {
      localStorage.setItem(LOCALSTORAGE_KEY, seconds)

    })
    .catch(function(error) {
      console.log(error.name, error.message, error.stack);
    });
}

console.log()
player.on('timeupdate', timeDelay);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).catch(function (error){
  console.log(error);
});
