<script setup lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';
import model from '../components/ShapeGeometry'

onMounted(() => {
  /**
  * 创建场景对象Scene
  */
  const scene = new THREE.Scene();

  scene.add(model)
  /**
    * 光源设置
    */
  // 点光源
  const point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300); // 点光源位置
  scene.add(point); // 点光源添加到场景中
  // 环境光
  const ambient = new THREE.AmbientLight(0x444444);
  scene.add(ambient);
  /**
    * 相机设置
    */
  const width = window.innerWidth; // 窗口宽度
  const height = window.innerHeight; // 窗口高度
  const k = width / height; // 窗口宽高比
  const s = 150; // 三维场景显示范围控制系数，系数越大，显示的范围越大
  // 创建相机对象
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(200, 200, 200); // 设置相机位置
  camera.lookAt(scene.position); // 设置相机方向(指向的场景对象)
  /**
    * 创建渲染器对象
    */
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); // 设置渲染区域尺寸
  renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
  const carElement = document.getElementById('ShapeGeometry');
  if (carElement) carElement.appendChild(renderer.domElement); // 元素中插入canvas对象

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onWindowResize, false);

  console.log('scene.children:', scene, scene.children[2]);

  // 渲染函数
  const render = () => {
    renderer.render(scene, camera); // 执行渲染操作
    requestAnimationFrame(render); // 请求再次执行渲染函数render，渲染下一帧
  };

  render();

  // 创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
  new OrbitControls(camera, renderer.domElement);
});
</script>

<template>
  <div id="ShapeGeometry">
    <!-- <button type="button" @click="handleCount">count is {{ count }}</button> -->
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
