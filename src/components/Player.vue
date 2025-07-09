<template>
  <div class="bg-gray-800 p-4 text-center">
    <p v-if="store.currentSong">
      🎧 Reproduciendo: <strong>{{ store.currentSong.title }}</strong> — {{ store.currentSong.artist }}
    </p>
    <p v-else>
      No hay canción reproduciéndose
    </p>
  </div>
</template>

<script setup>
import { store } from '../store.js'
</script>

