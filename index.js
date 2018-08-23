let Gpio = require('onoff').Gpio;

let spawn = require('child_process').spawn;

let player = {};
player = spawn('sh', ['player.sh', 'black.mp4', 'black.mp4'], {detached: true});

let startVideo = true;

function playVideo() {

    if (startVideo) {

        process.kill(-player.pid);
        player = spawn('sh', ['player.sh', 'video.mp4', 'black.mp4'], {detached: true});

        startVideo = false;
        setInterval( function () {startVideo = true}, 20000);
    }
}

const output = new Gpio(17, 'out');
const input = new Gpio(4, 'in', 'both');

input.watch((err, value) => playVideo());

// pinIn.watch(function (err, value) {
//     if (value === 1)
//         playVideo();
// });