let Gpio = require('onoff').Gpio;

let spawn = require('child_process').spawn;

let player = {};
let dark = {};

dark = spawn('sh', ['dark.sh'], {detached: true});

function playVideo() {
    process.kill(-dark.pid);
    player = spawn('sh', ['player.sh', 'video.pm4'], {detached: true});
}

function playDark() {
    process.kill(-player.pid);
    dark = spawn('sh', ['dark.sh'], {detached: true});
}

let pinOut = new Gpio(5, 'out');
let pinIn = new Gpio(6, 'in', 'both');

pinIn.watch(function (err, value) {
    if (value === 1)
        playVideo();
});

playDark();