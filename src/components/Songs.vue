<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">🎧 Canciones</h2>
    <ul class="space-y-2">
      <li
        v-for="song in songs"
        :key="song.title"
        @click="playSong(song)"
        class="cursor-pointer hover:text-blue-500"
      >
        {{ song.title }} — {{ song.artist }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { store } from '../store.js'

const songs = [
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    src: '/audio/shape_of_you.mp3'
  },
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    src: '/audio/blinding_lights.mp3'
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    src: '/audio/levitating.mp3'
  }
]

function playSong(song) {
  store.play(song)
}
</script>
