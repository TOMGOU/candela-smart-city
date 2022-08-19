// 引入three.js
import * as THREE from 'three';
import {
  lon2xy
} from '../tools/math';
// MeshBasicMaterial:不受光照影响
// MeshLambertMaterial：几何体表面和光线角度不同，明暗不同
const material = new THREE.MeshLambertMaterial({
  color: 0x009999,
}); //材质对象
// pointsArrs：多个轮廓，一个轮廓对应pointsArrs的一个元素
const ExtrudeMesh = (pointsArrs, height) => {
  const shapeArr = []; //轮廓形状Shape集合
  pointsArrs.forEach(pointsArr => {
    const vector2Arr = [];
    // 转化为Vector2构成的顶点数组
    pointsArr[0].forEach(elem => {
      const xy = lon2xy(elem[0],elem[1]);//经纬度转墨卡托坐标
      vector2Arr.push(new THREE.Vector2(xy.x, xy.y));
    });
    const shape = new THREE.Shape(vector2Arr);
    shapeArr.push(shape);
  });

  const geometry = new THREE.ExtrudeGeometry( //拉伸造型
    shapeArr, //多个多边形二维轮廓
    //拉伸参数
    {
      depth: height, //拉伸高度
      bevelEnabled: false, //无倒角
    }
  );
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象
  return mesh;
}
export {
  ExtrudeMesh
};