<script setup lang="ts">
import startup from "@/scripts/startup";
import { ref } from "vue";
import { constructIframeURL, stations, title } from "@/scripts/url";
import { getStation } from "@/scripts/stationFinder";

startup();

// find the correct station
const url = ref("");

Promise.all(stations().map(getStation)).then((stations) => {
  const filteredStations = stations
    .filter((station) => station?.name)
    .map((station) => {
      return { name: station.name, id: station.id };
    });

  if (filteredStations.length > 0) {
    // construct the correct url
    url.value = constructIframeURL(
      filteredStations,
      title(),
      8 / filteredStations.length,
    )
      .toString()
      .replace(/\+/g, " ");
  }
});
</script>

<template>
  <iframe v-if="url != ''" :src="url" class="iframe"></iframe>
  <h1 v-else>No station defined!</h1>
</template>

<style scoped>
.iframe {
  width: 100vw;
  height: 100vh;
  border: none;
}
</style>
