#!/bin/bash

mpris () {
    length=$(playerctl metadata -F -f "{{mpris:length}}")
    echo $length
}

mpris