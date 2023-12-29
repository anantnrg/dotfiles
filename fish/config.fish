set -U fish_greeting ""

if status is-interactive
    alias fishconf="code ~/.config/fish/config.fish"
    alias hyprconf="code ~/.config/hypr/hyprland.conf"
    alias barconf="code ~/.config/waybar/"
    alias kittyconf="code ~/.config/kitty/kitty.conf"
    alias git-df-add="git add eww fish gtk-3.0/ gtk-4.0/ hypr kitty nwg-look/ pavucontrol.ini spicetify/ swaync Vencord/ wallpapers/ waybar waypaper wlogout wofi"
end

starship init fish | source
