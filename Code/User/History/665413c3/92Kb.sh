#!/bin/bash

waypaper --restore
waybar &
swaync &
hyprctl dispatch exec [workspace 6 silent] spotify
hyprctl dispatch exec [workspace 5 silent] discord