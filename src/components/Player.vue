<template>
  <div class="bg-gray-800 p-4 text-center">
    <div v-if="store.currentSong">
      <p class="mb-2">
        🎧 Reproduciendo: <strong>{{ store.currentSong.title }}</strong> — {{ store.currentSong.artist }}
      </p>
      <audio
        ref="audioPlayer"
        :src="store.currentSong.src"
        controls
        autoplay
        class="w-full max-w-lg mx-auto"
      />
    </div>
    <p v-else>
      No hay canción reproduciéndose
    </p>
  </div>
</template>

<script setup>
import { store } from '../store.js'
import { ref, watch } from 'vue'

const audioPlayer = ref(null)

watch(
  () => store.currentSong,
  () => {
    if (audioPlayer.value) {
      audioPlayer.value.load()
      audioPlayer.value.play()
    }
  }
)
</script>

