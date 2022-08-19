<script setup lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';
import model from '../components/ExtrudeGeometry'
// import model from '../components/ExtrudeJsonGeometry'
import { lon2xy } from '../tools/math'

onMounted(() => {
  /**
  * 创建场景对象Scene
  */
  const scene = new THREE.Scene();

  /**
  * 添加网格模型对象
  */
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

  // const camera = new THREE.PerspectiveCamera(30, width / height,1, 30000);
  // const E = 121.49526536464691;//东方明珠经纬度坐标
  // const N = 31.24189350905988;
  // const xy = lon2xy(E, N);
  // const x = xy.x;
  // const y = xy.y;
  // camera.position.set(x + 5000, y + 5000, 5000);//5000是根据建筑物尺寸范围设置  数量级对应即可 具体数值不用精准
  // // camera.position.set(13524889, 3657486, 5465);//利用OrbitControls重新设置相机参数 调整视角
  // camera.lookAt(x, y, 0);

  /**
  * 创建渲染器对象
  */
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio); //设置设备像素比率,防止Canvas画布输出模糊。
  renderer.setSize(width, height); // 设置渲染区域尺寸
  renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
  const carElement = document.getElementById('ExtrudeGeometry');
  if (carElement) carElement.appendChild(renderer.domElement); // 元素中插入canvas对象

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onWindowResize, false);

  console.log('scene', scene);

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
  <div id="ExtrudeGeometry"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
