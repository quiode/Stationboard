<script setup lang="ts">
import { computed } from "vue";
import type { Connection } from "@/scripts/searchAPI";

const props = defineProps(["connection", "labels"]);
const labels = props.labels === true;
const connection = computed(() => props.connection as Connection);
</script>

<template>
  <div class="connection">
    <div class="icon">

    </div>
    <div class="line">

    </div>
    <div class="to">

    </div>
    <div class="track">

    </div>
    <div class="depart">

    </div>
    <div class="delay">

    </div>
  </div>
</template>

<style scoped>
.connection {
  width: 100%;
  height: 50px;
  margin-bottom: 2px;
  border-bottom: white 1px solid;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
