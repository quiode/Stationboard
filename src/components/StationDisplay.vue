<script lang="ts" setup>
import { computed, ref } from "vue";
import { type Connection, getTimetable } from "@/scripts/searchAPI";
import SingleLine from "@/components/SingleLine.vue";

const props = defineProps(["station"]);
const station = computed(() => props.station as string);

const connections = ref([] as Connection[]);

getTimetable(station.value).then(
  (response) => (connections.value = response.connections),
);
</script>

<template>
  <div class="container">
    <SingleLine :labels="true"></SingleLine>
    <SingleLine
      v-for="connection in connections"
      :connection="connection"
    ></SingleLine>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>
