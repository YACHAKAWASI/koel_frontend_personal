<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Lista de Canciones</h2>
    <ul class="space-y-2">
      <li
        v-for="song in songs"
        :key="song.id"
        class="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
        @click="store.play(song)"
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
    id: 1,
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    src: '/audio/shape-of-you.mp3'
  },
  {
    id: 2,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    src: '/audio/blinding-lights.mp3'
  },
  {
    id: 3,
    title: 'Levitating',
    artist: 'Dua Lipa',
    src: '/audio/levitating.mp3'
  }
]
</script>

