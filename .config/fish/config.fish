set -U fish_greeting ""

if status is-interactive
    # Commands to run when the shell opens
    neofetch

    # Aliases
    alias start-hyprland="exec ~/.local/bin/hyprwrapped.sh"
    alias vim="nvim"
    alias fishconf="vim ~/.config/fish/config.fish"
    alias shipconf="vim ~/.config/starship.toml"
    alias hyprconf="vim ~/.config/hypr/hyprland.conf"
    alias kittyconf="vim ~/.config/kitty/kitty.conf"
    alias vimconf="vim ~/.config/nvim/init.lua"
    alias wbconf="vim ~/.config/waybar/config"
    alias tty-clock="tty-clock -c -C 6 -b -t"
    alias pipes="pipes.sh -t 1"
    alias cat="bat --theme="Catppuccin-mocha""
    alias ls="exa --icons --color=always --group-directories-first"
    alias ll="exa -l --icons --color=always --group-directories-first"
    alias code="code-insiders"
end

starship init fish | source
