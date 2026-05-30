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