<template>
  <video controls />
</template>

<script>
import { MediaPlayer, Debug } from 'dashjs'

export default {
  props: {
    src: {
      type: String,
      default () {
        return '/video/sintel/original/stream/manifest.mpd'
      }
    }
  },

  mounted () {
    const player = MediaPlayer().create()
    player.initialize()
    player.updateSettings({
      debug: {
        logLevel: Debug.LOG_LEVEL_DEBUG // turns off console logging
      },
      streaming: {
        stableBufferTime: 10,
        bufferTimeAtTopQualityLongForm: 10,
        abr: {
          minBitrate: {
            video: 100
          },
          maxBitrate: {
            video: 5500
          },
          // bandwidthSafetyFactor: 0.5,
          useBufferOccupancyABR: true,
          limitBitrateByPortal: true,
          usePixelRatioInLimitBitrateByPortal: true,
          ABRStrategy: 'abrDynamic',
          // useDefaultABRRules: true,
          autoSwitchBitrate: {
            video: true
          }
        }
        // scheduleWhilePaused: false, // stops the player from loading segments while paused
        // fastSwitchEnabled: true // enables buffer replacement when switching bitrates for faster switching
      }
    })
    player.setAutoPlay(false) // remove this line if you want the player to start automatically on load
    player.attachView(this.$el) // tell the player which videoElement it should use
    player.attachSource(this.src)

    player.setInitialMediaSettingsFor('audio', {
      lang: 'eng'
    })
    console.log(player.getTextDefaultEnabled())
    player.setTextDefaultLanguage('eng')
    setTimeout(() => {
      console.log(player.getTextDefaultLanguage())
      const track = player.getTracksFor('audio').find(track => track.lang === 'eng')
      console.log('player', player, player.getTracksFor('video'))
      player.setCurrentTrack(track)
    }, 15000)

    setTimeout(() => {
      const track = player.getTracksFor('audio').find(track => track.lang === 'esp')

      player.setCurrentTrack(track)
    }, 30000)

    setTimeout(() => {
      const track = player.getTracksFor('audio').find(track => track.lang === 'fre')

      player.setCurrentTrack(track)
    }, 45000)
    // console.log(player.getCurrentTextTrack())
  }
}
</script>

<style lang="postcss" scoped>
video {
  width: 100%;
}
</style>
