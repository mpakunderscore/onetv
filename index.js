let Gpio = require('onoff').Gpio;

let spawn = require('child_process').spawn;

let player = {};
let dark = {};

dark = spawn('sh', ['player.sh', 'black.mp4', 'black.mp4'], {detached: true});

function playVideo() {
    process.kill(-dark.pid);
    player = spawn('sh', ['player.sh', 'video.mp4', 'black.mp4'], {detached: true});
}

const output = new Gpio(17, 'out');
const input = new Gpio(4, 'in', 'both');

input.watch((err, value) => playVideo());

// pinIn.watch(function (err, value) {
//     if (value === 1)
//         playVideo();
// });