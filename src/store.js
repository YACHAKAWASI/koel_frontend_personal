import { reactive } from 'vue'

export const store = reactive({
  currentSong: null,
  play(song) {
    this.currentSong = song
  }
})
