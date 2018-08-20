let Gpio = require('onoff').Gpio;

let spawn = require('child_process').spawn;

let player = {};

function playVideo() {
    process.kill(-player.pid);
    player = spawn('sh', ['player.sh', 'video.pm4'], {detached: true});
}

exports.pins[id].interface = exports.pins[id].type ? new Gpio(exports.pins[id].pid, 'out') : new Gpio(exports.pins[id].pid, 'in', 'both');

if (!exports.pins[id].type) {

    exports.pins[id].interface.watch(function (err, value) {

        exports.pins[id].state = (value === 1);

        api.broadcastState(id);

        // console.log(exports.pins[id].id + ' | ' + exports.pins[id].pid + ' | ' + value + ' | ' + exports.pins[id].state);

        scenario.checkScenario();
    })

} else {

    // console.log(exports.pins[id]);
    exports.pins[id].interface.writeSync(exports.pins[id].state ? 1 : 0);
}