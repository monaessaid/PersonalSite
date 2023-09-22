import './style.css'

import * as THREE from 'three';

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
const geometry2 = new THREE.BoxGeometry(5,5,5);

const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
const material2 = new THREE.MeshBasicMaterial({ color: "blue", wireframe: true });
const material3 = new THREE.MeshBasicMaterial({ color: "green", wireframe: true });

const torus = new THREE.Mesh(geometry, material);
const torus2 = new THREE.Mesh(geometry, material2);
const torus3 = new THREE.Mesh(geometry, material3);
const cube = new THREE.Mesh (geometry2,material);

scene.add(torus);
scene.add(torus2);
scene.add(torus3);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.1;
    torus.rotation.y += 0.1;
    torus.rotation.z += 0.1;
    torus2.rotation.x += 0.1;
    torus3.rotation.y += 0.2;
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
}

animate()