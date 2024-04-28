<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['station'])
const station = computed(() => props.station as string);
</script>

<template>
  <h1>Welcome to {{ station }}</h1>
</template>

<style scoped>

</style>