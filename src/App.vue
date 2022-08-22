<script setup lang="ts">

</script>

<template>
  <!-- <HelloWorld /> -->
  <div>
    <div class="top-nav">
      <router-link replace to="/ShapeGeometry"><button>河流</button></router-link>
      <router-link replace to="/ExtrudeGeometry"><button>建筑</button></router-link>
      <router-link replace to="/ExtrudeJsonGeometry"><button>批量生成模型</button></router-link>
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
  width: 100%;
}
</style>
