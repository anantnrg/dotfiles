#!/bin/bash

waypaper --restore
waybar &
swaync &
eww daemon &&
eww open-many desk_clock usage_box &&
hyprctl dispatch exec [workspace 6 silent] spotify
hyprctl dispatch exec [workspace 5 silent] discord