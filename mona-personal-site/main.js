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

const geometry = new THREE.TorusGeometry(10, 0.2, 16, 50);
const geometry3 = new THREE.BoxGeometry(5, 5, 5);
const geometry2 = new THREE.SphereGeometry(4, 16, 32);

const material = new THREE.MeshStandardMaterial({ color: "0xFFFF00" });
const material2 = new THREE.MeshNormalMaterial();
// const material3 = new THREE.MeshNormalMaterial({wireframe: true});
// const material3 = new THREE.MeshNormalMaterial({ color: "green", wireframe: true });

const torus = new THREE.Mesh(geometry, material2);
// const torus4 = new THREE.Mesh(geometry, material3);
const sphere = new THREE.Mesh(geometry2, material2);
// const torus2 = new THREE.Mesh(geometry, material2);
// const torus3 = new THREE.Mesh(geometry, material3);
// const cube = new THREE.Mesh(geometry3, material);

scene.add(torus);
scene.add(sphere);
// scene.add(cube);
// scene.add(sphere);
// scene.add(torus4);
// scene.add(torus2);
// scene.add(torus3);
// scene.add(cube);

// cube.position.x = 20;

const pointLight = new THREE.PointLight('white', 1, 100);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xe68cff);
scene.add(ambientLight);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(pointLightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {

    const a = Math.random() * (0.5 - 0.01) + 0.01;

    const geometry = new THREE.SphereGeometry(a, 24, 24);
    const material = new THREE.MeshNormalMaterial();
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

// let letters = "0123456789ABCDEF";
// let randomColor = '0x';

// for (let i = 0; i < 6; i++) {
//     randomColor += letters[(Math.floor(Math.random() * 16))];
// }

// console.log(color);

function addPlanet() {
    const a = Math.random() * (1 - 0.8) + 0.8;
    const geometry = new THREE.SphereGeometry(a, 24, 24);

    // let letters = "0123456789abcdef";
    // let randomColor = '0x';

    // for (let i = 0; i < 6; i++) {
    //     randomColor += letters[(Math.floor(Math.random() * 16))];
    // }

    const material = new THREE.MeshNormalMaterial({ flatShading: true });
    const planet = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    planet.position.set(x, y, z);
    scene.add(planet);
}

Array(50).fill().forEach(addPlanet);

const spaceTexture = new THREE.TextureLoader().load('bg-image4.jpg');
scene.background = spaceTexture;

const planetTexture1 = new THREE.TextureLoader().load('planet-texture1.jpg');
const planetTexture2 = new THREE.TextureLoader().load('planet-texture2.jpg');

const texturedPlanet1 = new THREE.Mesh (
    new THREE.SphereGeometry(15,32,16),
    new THREE.MeshBasicMaterial( {map: planetTexture1} )
);

const texturedPlanet2 = new THREE.Mesh (
    new THREE.SphereGeometry(10,32,16),
    new THREE.MeshBasicMaterial( {map: planetTexture2} )
);

scene.add(texturedPlanet1);
texturedPlanet1.position.x = 25;
texturedPlanet1.position.y = 25;

scene.add(texturedPlanet2);
texturedPlanet2.position.x = -25;
texturedPlanet2.position.y = -25;
texturedPlanet2.position.z =-25;

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;

    texturedPlanet1.rotation.y += 0.01;

    texturedPlanet2.rotation.y += 0.02;

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.005;
    // sphere.rotation.z += 0.01;

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