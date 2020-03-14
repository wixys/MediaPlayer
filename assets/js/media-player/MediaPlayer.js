function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}
//-- Plugins
MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
}
//-- Play video
MediaPlayer.prototype.play = function() {
    this.media.play()
}
//-- Pause video
MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
    this.media.unmuted = false
}

export default MediaPlayer