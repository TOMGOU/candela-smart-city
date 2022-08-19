<script setup lang="ts">

</script>

<template>
  <!-- <HelloWorld /> -->
  <div>
    <div class="top-nav">
      <router-link replace to="/ShapeGeometry"><button>ShapeGeometry</button></router-link>
      <router-link replace to="/ExtrudeGeometry"><button>ExtrudeGeometry</button></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.top-nav {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
