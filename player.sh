#!/usr/bin/env bash

# get rid of the cursor
setterm -cursor off

# you can probably leave this alone
Process="omxplayer"

clear
omxplayer -r "/home/pi/onetv/videos/$1" > /dev/null

# our loop
while true; do
        if ps ax | grep -v grep | grep $Process > /dev/null
        then
        sleep 1;
else
        clear
        omxplayer -r "/home/pi/onetv/videos/$2" > /dev/null
fi
done