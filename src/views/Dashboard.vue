<template>
  <div class="h-screen flex flex-col bg-gray-900 text-white">
    <div class="flex flex-1">
      <Sidebar />
      <div class="flex-1 p-4 overflow-y-auto">
        <SongList />
      </div>
    </div>
    <Player />
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import Player from '../components/Player.vue'
import SongList from '../components/SongList.vue'
</script>
