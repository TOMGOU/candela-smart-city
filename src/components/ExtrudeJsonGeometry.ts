import * as THREE from 'three';
import { ShapeMesh } from './ShapeMesh';
import { ExtrudeMesh } from './ExtrudeMesh';
import { FlyGroup } from './FlyGroup';
import { lon2xy } from '../tools/math';

const model = new THREE.Group(); //声明一个组对象，用来添加城市三场场景的模型对象
model.add(FlyGroup);
const loader = new THREE.FileLoader();
loader.setResponseType('json')
//城市建筑数据解析
loader.load('./上海外滩.json', (data: any) => {
  console.log({ data })
  const buildGroup = new THREE.Group(); //作为所有每栋楼Mesh的父对象
  data.features.forEach((build: any) => {
    if (build.geometry) {
      // build.geometry.type === "Polygon"表示建筑物底部包含一个多边形轮廓
      //build.geometry.type === "MultiPolygon"表示建筑物底部包含多个多边形轮廓
      if (build.geometry.type === "Polygon") {
        // 把"Polygon"和"MultiPolygon"的geometry.coordinates数据结构处理为一致
        build.geometry.coordinates = [build.geometry.coordinates];
      }
      //build.properties.Floor*3近似表示楼的高度  
      const height = build.properties.Floor * 3;
      buildGroup.add(ExtrudeMesh(build.geometry.coordinates, height));
    }
  });
  model.add(buildGroup);
});
// 黄浦江
loader.load('./黄浦江.json', (data: any) => {
  const riverGroup = new THREE.Group(); //作为所有每栋楼Mesh的父对象
  data.features.forEach((build: any) => {
    if (build.geometry) {
      // build.geometry.type === "Polygon"表示建筑物底部包含一个多边形轮廓
      //build.geometry.type === "MultiPolygon"表示建筑物底部包含多个多边形轮廓
      if (build.geometry.type === "Polygon") {
        // 把"Polygon"和"MultiPolygon"的geometry.coordinates数据结构处理为一致
        build.geometry.coordinates = [build.geometry.coordinates];
      }
      riverGroup.add(ShapeMesh(build.geometry.coordinates));
    }
  });
  model.add(riverGroup);
});

setInterval(() => {
  // 一直无人机数据：经纬度和高度
  var height = 300 + Math.random() * 100; //无人机飞行高度300米
  var E = 121.49526536464691; //无人机经纬度坐标
  var N = 31.24189350905988;
  var xy = lon2xy(E, N);
  var x = xy.x;
  var y = xy.y;
  // 设置无人机坐标
  FlyGroup.position.set(x + Math.random() * 1000, y + Math.random() * 500, height);
  // 姿态调整
  // flyGroup.rotateX(Math.PI / 2);
}, 1000)

export default model