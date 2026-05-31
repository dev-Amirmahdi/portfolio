import * as THREE from
'https://unpkg.com/three@0.165.0/build/three.module.js';

const scene =
new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth /
window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document
.getElementById("bg-canvas")
.appendChild(
renderer.domElement
);

const geometry =
new THREE.BufferGeometry();

const count = 2000;

const positions =
new Float32Array(
count * 3
);

for(let i=0;i<count*3;i++){

positions[i] =
(Math.random()-0.5)*20;

}

geometry.setAttribute(
'position',
new THREE.BufferAttribute(
positions,
3
)
);

const material =
new THREE.PointsMaterial({

size:0.03

});

const particles =
new THREE.Points(
geometry,
material
);

scene.add(particles);

camera.position.z = 5;

function animate(){

requestAnimationFrame(
animate
);

particles.rotation.y += 0.0008;

particles.rotation.x += 0.0003;

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
'resize',
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});

////////////////////----------------------/////////////////////////

// import * as THREE from
// 'https://unpkg.com/three@0.165.0/build/three.module.js';

// const scene = new THREE.Scene();

// const camera =
// new THREE.PerspectiveCamera(
// 75,
// window.innerWidth / window.innerHeight,
// 0.1,
// 1000
// );

// const renderer =
// new THREE.WebGLRenderer({
// alpha: true,
// antialias: true
// });

// renderer.setSize(
// window.innerWidth,
// window.innerHeight
// );

// renderer.setPixelRatio(
// Math.min(
// window.devicePixelRatio,
// 2
// )
// );

// document
// .getElementById("bg-canvas")
// .appendChild(
// renderer.domElement
// );

// const particleCount = 5000;

// const geometry =
// new THREE.BufferGeometry();

// const positions =
// new Float32Array(
// particleCount * 3
// );

// for(let i = 0; i < particleCount; i++){

//     const radius =
//         Math.random() * 8;

//     const spin =
//         radius * 1.5;

//     const branch =
//         (i % 5) *
//         ((Math.PI * 2) / 5);

//     const angle =
//         spin + branch;

//     positions[i * 3] =
//         Math.cos(angle) *
//         radius;

//     positions[i * 3 + 1] =
//         (Math.random() - 0.5) *
//         0.8;

//     positions[i * 3 + 2] =
//         Math.sin(angle) *
//         radius;
// }

// geometry.setAttribute(
// 'position',
// new THREE.BufferAttribute(
// positions,
// 3
// )
// );

// const material =
// new THREE.PointsMaterial({
// size: 0.03,
// color: 0x00ffff,
// transparent: true,
// opacity: 0.8,
// depthWrite: false
// });

// const particles =
// new THREE.Points(
// geometry,
// material
// );

// scene.add(
// particles
// );

// camera.position.z = 7;

// let mouseX = 0;
// let mouseY = 0;

// window.addEventListener(
// 'mousemove',
// (e)=>{

// mouseX =
// (e.clientX /
// window.innerWidth - 0.5);

// mouseY =
// (e.clientY /
// window.innerHeight - 0.5);

// });

// function animate(){

// requestAnimationFrame(
// animate
// );

// particles.rotation.y += 0.0008;

// particles.rotation.x += 0.0002;

// particles.rotation.y +=
// (mouseX * 0.2 -
// particles.rotation.y)
// * 0.01;

// particles.rotation.x +=
// (mouseY * 0.2 -
// particles.rotation.x)
// * 0.01;

// renderer.render(
// scene,
// camera
// );

// }

// animate();

// window.addEventListener(
// 'resize',
// ()=>{

// camera.aspect =
// window.innerWidth /
// window.innerHeight;

// camera.updateProjectionMatrix();

// renderer.setSize(
// window.innerWidth,
// window.innerHeight
// );

// });