
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(pausedTime, 1000));

function pausedTime(evt) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(evt.seconds)
  );
}

const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (time) {
  player.setCurrentTime(time);
}
