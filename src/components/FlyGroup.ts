
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { lon2xy } from '../tools/math';

const FlyGroup = new THREE.Group()// 一架无人机
let mixer: any = null; //声明一个混合器变量
const loader = new GLTFLoader();
loader.load('./fly.glb', function (gltf: any) {
    const fly = gltf.scene;
    
    // 三维场景默认单位是米，美术导出模型单位是厘米，需要缩小数字尺寸
    // fly.scale.set(0.01,0.01,0.01);
    fly.scale.set(4,4,4);//根据需要放大无人机
    fly.position.x = -28*4;//如果美术导出的模型不居中，需要代码调整
    // console.log('gltf', gltf);
    FlyGroup.add(fly);
    fly.traverse((child: any) => {
        if (child.isMesh) {
            const material = child.material
            child.material = new THREE.MeshLambertMaterial({
                color: material.color,
            })
        }
    });
    // obj作为混合器的参数，可以播放obj包含的帧动画数据
    mixer = new THREE.AnimationMixer(fly);
    // console.log('gltf.animations[0]', gltf.animations);
    // obj.animations[0]：获得剪辑clip对象
    const AnimationAction = mixer.clipAction(gltf.animations[0]);
    AnimationAction.timeScale = 15; //默认1，可以调节播放速度
    // AnimationAction.loop = THREE.LoopOnce; //不循环播放
    // AnimationAction.clampWhenFinished=true;//暂停在最后一帧播放的状态
    AnimationAction.play();
})

const clock = new THREE.Clock();
function UpdateLoop() {
    if (mixer !== null) {
        //clock.getDelta()方法获得两帧的时间间隔
        mixer.update(clock.getDelta());
    }
    requestAnimationFrame(UpdateLoop);
}
UpdateLoop();

// 一直无人机数据：经纬度和高度
const height = 300;//无人机飞行高度300米
const E = 121.49526536464691; //无人机经纬度坐标
const N = 31.24189350905988;
const xy = lon2xy(E, N);
const x = xy.x;
const y = xy.y;
// 设置无人机坐标
FlyGroup.position.set(x, y, height);

// 姿态调整
FlyGroup.rotateX(Math.PI/2);

export { FlyGroup };