net_status () {
    if (ping -c 1 google.com || ping -c 1 archlinux.org || ping -c 1 github.com) &> /dev/null; then
	jq -n --arg text "Online" --arg alt "online" '{text: $text, alt: $alt, tooltip: $text, class: "network-text", percentage: 0}' --unbuffered --compact-output
    else 
	jq -n --arg text "Offline" --arg alt "offline" '{text: $text, alt: $alt, tooltip: $text, class: "network-text", percentage: 0}' --unbuffered --compact-output
    fi
}

net_status
