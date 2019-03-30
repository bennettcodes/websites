# Keep two HTML5 video elements in sync.
#
# @primary   - primary video with controls and audio
# @secondary - secondary video,
class @VideoSync
  constructor: (@primary, @secondary) ->
    @ready = false

    @secondary.addEventListener 'canplay', => @ready = true

    @primary.addEventListener 'play', => @secondary.play()
    @primary.addEventListener 'pause', => @secondary.pause()
    @primary.addEventListener 'timeupdate', @sync
    @primary.addEventListener 'seeking', @sync

  sync: =>
    @secondary.currentTime = @primary.currentTime if @ready