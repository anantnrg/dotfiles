set -U fish_greeting ""
set PATH $PATH ~/.cargo/bin

if status is-interactive
    alias fishconf="nvim ~/.config/fish/config.fish"
    alias hyprconf="nvim ~/.config/hypr/hyprland.conf"
    alias barconf="nvim ~/.config/waybar/"
    alias kittyconf="nvim ~/.config/kitty/kitty.conf"
    alias git-df-add="git add eww fish gtk-3.0/ gtk-4.0/ hypr kitty nwg-look/ pavucontrol.ini spicetify/ swaync Vencord/ wallpapers/ waybar waypaper wlogout wofi Code starship.toml helix tmux zellij sxhkd bspwm mpv strata Vencord spicetify "
    alias gadd="git add"
    alias gc="git commit -m"
    alias gp="git push"
    alias mkdir="mkdir -p"
    alias tmuxconf="nvim ~/.config/tmux/tmux.conf"
    alias ls="eza -a --color=always --icons=always -1 --sort date -r"
    alias tree="eza --tree --git-ignore"
end

# zoxide init fish | source
starship init fish | source
