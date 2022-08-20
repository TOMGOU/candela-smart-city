import * as THREE from 'three';
import {
  lon2xy
} from '../tools/math';
// pointsArrs：多个多边形轮廓
function ShapeMesh(pointsArrs: any) {
  const shapeArr: number[] = []; //轮廓形状Shape集合
  pointsArrs.forEach((pointsArr: any) => {
    const vector2Arr: number[] = [];
    // 转化为Vector2构成的顶点数组
    pointsArr[0].forEach((elem: any) => {
      const xy = lon2xy(elem[0],elem[1]);//经纬度转墨卡托坐标
      vector2Arr.push(new THREE.Vector2(xy.x, xy.y));
    });
    const shape = new THREE.Shape(vector2Arr);
    shapeArr.push(shape);
  });
  const geometry = new THREE.ShapeGeometry( //填充多边形
    shapeArr,
  );
  const material = new THREE.MeshLambertMaterial({
    color: 0x009966,
  }); //材质对象
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象
  return mesh;
}
export {
  ShapeMesh
};