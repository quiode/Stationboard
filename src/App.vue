<script setup lang="ts">
import startup from "@/scripts/startup";
import { ref } from "vue";
import { constructIframeURL, station } from "@/scripts/url";
import { getStation } from "@/scripts/stationFinder";

startup();

// find the correct station
const url = ref("");
getStation(station() || "").then((station) => {
  if (station?.name) {
    window.document.title += " - " + station.name;

    // construct the correct url
    url.value = constructIframeURL(station.name, station.id)
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
