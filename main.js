import videojs from "video.js";
import 'videojs-contrib-eme';
import 'video.js/dist/video-js.min.css';
import './style.css';

// This line fails
console.log(videojs.getPlugin('eme').VERSION);

window.player = videojs('player', {fill: true});