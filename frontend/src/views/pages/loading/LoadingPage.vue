<script setup lang="ts">
import { ref, onMounted } from "vue";
import { mdiLoading } from '@mdi/js'

const redirectToHome: any = ref(null);
onMounted(() => {
  setTimeout(() => {
    // redirectToHome.value?.click();
    const rthEl: any = document.querySelector("#redirectToHome");
    rthEl.click();
  }, 1000);
});
</script>

<template>
  <v-row no-gutters class="h-screen">
    <v-col class="d-flex align-center justify-center">
      <div class="text-center">
        <v-progress-circular :indeterminate="true" :size="100" color="primary" class="mt-4 ">
          Loading...
        </v-progress-circular>
        <!-- <p>
          <small>Loading Pages...</small>
        </p> -->
        <v-btn id="redirectToHome" ref="redirectToHome" variant="flat" color="primary" class="mt-4 d-none" to="/"
          prepend-icon="mdi-home">
          Home
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.loading.v-icon {
  transform: rotate(-180deg);
}
</style>
