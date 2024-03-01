set -U fish_greeting ""

if status is-interactive
    alias fishconf="nvim ~/.config/fish/config.fish"
    alias hyprconf="nvim ~/.config/hypr/hyprland.conf"
    alias barconf="nvim ~/.config/waybar/"
    alias kittyconf="nvim ~/.config/kitty/kitty.conf"
    alias git-df-add="git add eww fish gtk-3.0/ gtk-4.0/ hypr kitty nwg-look/ pavucontrol.ini spicetify/ swaync Vencord/ wallpapers/ waybar waypaper wlogout wofi"
    alias gadd="git add"
    alias gc="git commit -m"
    alias gp="git push"
end

starship init fish | source
