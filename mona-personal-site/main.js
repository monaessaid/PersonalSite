import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const geometry2 = new THREE.BoxGeometry(5,5,5);
// const geometry2 = new THREE.SphereGeometry(4,16,32);

const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
// const material2 = new THREE.MeshNormalMaterial();
// const material3 = new THREE.MeshNormalMaterial({wireframe: true});
// const material3 = new THREE.MeshNormalMaterial({ color: "green", wireframe: true });

const torus = new THREE.Mesh(geometry, material);
// const torus4 = new THREE.Mesh(geometry, material3);
// const sphere = new THREE.Mesh(geometry2,material3);
// const torus2 = new THREE.Mesh(geometry, material2);
// const torus3 = new THREE.Mesh(geometry, material3);
// const cube = new THREE.Mesh (geometry2,material);

scene.add(torus);
// scene.add(sphere);
// scene.add(torus4);
// scene.add(torus2);
// scene.add(torus3);
// scene.add(cube);

// const pointLight = new THREE.PointLight(0xff0000, 1, 100);
// pointLight.position.set(5,5,5);
// scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xff0000);
scene.add(ambientLight);

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
// scene.add (pointLightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {

    const a = Math.random() * (0.5 - 0.01) + 0.01;

    const geometry = new THREE.SphereGeometry(a, 24, 24);
    const material = new THREE.MeshBasicMaterial( {color: "white"} );
    const star = new THREE.Mesh(geometry,material);

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

    star.position.set(x,y,z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // sphere.rotation.x += 0.05;
    // sphere.rotation.y += 0.05;
    // sphere.rotation.z += 0.05;
    // torus4.rotation.x +=0.05;
    // torus2.rotation.x += 0.05;
    // torus3.rotation.y += 0.05;
    // cube.rotation.x += 0.05;
    // cube.rotation.y += 0.05;

    controls.update();

    renderer.render(scene, camera);
}

animate();