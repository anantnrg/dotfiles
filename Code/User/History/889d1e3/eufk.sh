#!/bin/bash

while true; do
    # name=$(playerctl metadata -F -f "{{playerName}}")
    # title=$(playerctl metadata -F -f "{{title}}")
    # artist=$(playerctl metadata -F -f "{{artist}}")
    # artUrl=$(playerctl metadata -F -f "{{mpris:artUrl}}")
    # status=$(playerctl metadata -F -f "{{status}}")
    length=$(playerctl metadata -F -f "{{mpris:length}}")
    if [[ $length != "" ]]; then
        length=$(($length / 1000000))
        length=$(echo "($length + 0.5) / 1" | bc)
    fi
    # lengthStr=$(playerctl metadata -F -f "{{duration(mpris:length)}}")

    # JSON_STRING=$( jq -n \
    #             --arg name "$name" \
    #             --arg title "$title" \
    #             --arg artist "$artist" \
    #             --arg artUrl "$artUrl" \
    #             --arg status "$status" \
    #             --arg length "$length" \
    #             --arg lengthStr "$lengthStr" \
    #             '{name: $name, title: $title, artist: $artist, artUrl: $artUrl, status: $status, length: $length, lengthStr: $lengthStr}' )
    # echo $JSON_STRING
done