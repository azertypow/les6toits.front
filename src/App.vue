<template>
  <main
      class="v-app"
      :class="l6tStore.deviceClassName"
  >
    <app-header></app-header>
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import {setDeviceClassName} from "@/scripts/setDeviceClassName"
import {useL6tStore} from "@/stores/l6tStore"

export default defineComponent({
  components: {AppHeader},

  data() {
    return {
      l6tStore: useL6tStore()
    }
  },

  mounted() {
    this.l6tStore.deviceClassName = setDeviceClassName()

    window.addEventListener("resize", () => { this.l6tStore.deviceClassName = setDeviceClassName() })
  }
})</script>

<style lang="scss">
.v-app {
  padding-top: var(--l6t-app-header-height);
  background-color: var(--l6t-color-light);
}
</style>
