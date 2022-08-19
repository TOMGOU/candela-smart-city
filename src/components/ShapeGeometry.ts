import * as THREE from 'three';

const model = new THREE.Group();

const shape = new THREE.Shape([
  // 一个多边形轮廓的五个顶点坐标
  new THREE.Vector2(0, 0),
  new THREE.Vector2(60, 0),
  new THREE.Vector2(60, 80),
  new THREE.Vector2(40, 120),
  new THREE.Vector2(-20, 80),
]);
//ShapeGeometry：填充多边形
const geometry = new THREE.ShapeGeometry(shape);

const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side:THREE.DoubleSide,
  // wireframe:true,//查看生成的三角形
}); //材质对象
const mesh = new THREE.Mesh(geometry, material); //网格模型对象

model.add(mesh);

export default model