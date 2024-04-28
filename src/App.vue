<script setup lang="ts">
import startup from '@/scripts/startup';
import StationDisplay from '@/components/StationDisplay.vue'
import { computed, ref } from 'vue'
import NoStation from '@/components/NoStation.vue'
import { station } from '@/scripts/urlParams'

startup();

const stationName = ref(station());
const stationDefined = computed(() => stationName.value != null);
</script>

<template>
  <main>
    <StationDisplay v-if="stationDefined" :station="stationName"></StationDisplay>
    <NoStation v-else></NoStation>
  </main>
</template>

<style scoped>
</style>
