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
// const geometry3 = new THREE.BoxGeometry(5, 5, 5);
// const geometry2 = new THREE.SphereGeometry(4, 16, 32);

// const material = new THREE.MeshStandardMaterial({ color: "0xFFFF00" });
const material2 = new THREE.MeshNormalMaterial();
// const material3 = new THREE.MeshNormalMaterial({wireframe: true});
// const material3 = new THREE.MeshNormalMaterial({ color: "green", wireframe: true });

const torus = new THREE.Mesh(geometry, material2);
// const torus4 = new THREE.Mesh(geometry, material3);
// const sphere = new THREE.Mesh(geometry2, material2);
// const torus2 = new THREE.Mesh(geometry, material2);
// const torus3 = new THREE.Mesh(geometry, material3);
// const cube = new THREE.Mesh(geometry3, material);

// scene.add(torus);
// scene.add(sphere);
// scene.add(cube);
// scene.add(sphere);
// scene.add(torus4);
// scene.add(torus2);
// scene.add(torus3);
// scene.add(cube);

// cube.position.x = 20;

// const pointLight = new THREE.PointLight('white', 1, 100);
// pointLight.position.set(20, 20, 20);
// scene.add(pointLight);

// const ambientLight = new THREE.AmbientLight(0xe68cff);
// scene.add(ambientLight);

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
// scene.add(pointLightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
scene.add(light);

function addStar() {

    const a = Math.random() * (0.5 - 0.01) + 0.01;

    const geometry = new THREE.SphereGeometry(a, 24, 24);
    // const material = new THREE.MeshNormalMaterial();
    // const material = new THREE.MeshLambertMaterial(
    //     { color: 0xab66ff }
    // );
    const material = new THREE.MeshLambertMaterial(
        {
            color: 0x8affff,
            roughness: 0.0,
            metalness: 1,
            reflectivity: 1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
        }
    );

    const star = new THREE.Mesh(geometry, material);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);
    // pointLight.position.set(x,y,z);
    scene.add(pointLight);

    // const pointLight2 = new THREE.PointLight(0xffffff);
    // pointLight.position.set(-5, -5, -5);
    // // pointLight.position.set(x,y,z);
    // scene.add(pointLight2);

    // const directionalLight = new THREE.DirectionalLight(
    //     0xffffff, 0.5
    // );
    // directionalLight.castShadow;
    // scene.add(directionalLight);

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
    const a = Math.random() * (3 - 1) + 1;
    const geometry = new THREE.SphereGeometry(a, 24, 24);

    const material = new THREE.MeshNormalMaterial({ flatShading: true });
    const planet = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));

    planet.position.set(x, y, z);
    scene.add(planet);
}

Array(50).fill().forEach(addPlanet);

const spaceTexture = new THREE.TextureLoader().load('bg-image4.jpg');
scene.background = spaceTexture;

const planetTexture1 = new THREE.TextureLoader().load('planet-texture1.jpg');
const planetTexture2 = new THREE.TextureLoader().load('planet-texture2.jpg');
const planetTexture3 = new THREE.TextureLoader().load('planet-texture3.jpg');
const planetTexture4 = new THREE.TextureLoader().load('planet-texture5.jpg');
const planetTexture5 = new THREE.TextureLoader().load('planet-texture11.jpg');
const planetTexture6 = new THREE.TextureLoader().load('planet-texture9.jpg');
const planetTexture7 = new THREE.TextureLoader().load('planet-texture6.jpg');
const sunTexture = new THREE.TextureLoader().load('sun-texture.jpg');

const texturedPlanet1 = new THREE.Mesh(
    new THREE.SphereGeometry(15, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture1 })
);

const texturedPlanet2 = new THREE.Mesh(
    new THREE.SphereGeometry(10, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture2 })
);

const texturedPlanet3 = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture3 })
);

const texturedPlanet4 = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture4 })
);

const texturedPlanet5 = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture5 })
);

const texturedPlanet6 = new THREE.Mesh(
    new THREE.SphereGeometry(6, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture6 })
);

const texturedPlanet7 = new THREE.Mesh(
    new THREE.SphereGeometry(9, 32, 16),
    new THREE.MeshBasicMaterial({ map: planetTexture7 })
);

const sun = new THREE.Mesh(
    new THREE.SphereGeometry(10, 32, 16),
    new THREE.MeshBasicMaterial({ map: sunTexture })
);

scene.add(texturedPlanet1);
texturedPlanet1.position.x = 25;
texturedPlanet1.position.y = 25;

scene.add(texturedPlanet2);
texturedPlanet2.position.x = -25;
texturedPlanet2.position.y = -25;
texturedPlanet2.position.z = -25;

scene.add(texturedPlanet3);
texturedPlanet3.position.x = 28;
texturedPlanet3.position.y = 28;
texturedPlanet3.position.z = 28;

scene.add(texturedPlanet4);
texturedPlanet4.position.x = -10;
texturedPlanet4.position.y = -10;
texturedPlanet4.position.z = -10;

scene.add(texturedPlanet5);
texturedPlanet5.position.x = -5;
texturedPlanet5.position.y = 15;
texturedPlanet5.position.z = -5;

scene.add(texturedPlanet6);
texturedPlanet6.position.x = -10;
texturedPlanet6.position.y = 28;
texturedPlanet6.position.z = -10;

scene.add(texturedPlanet7);
texturedPlanet7.position.x = -25;
texturedPlanet7.position.y = 30;
texturedPlanet7.position.z = -25;

scene.add(sun);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;

    texturedPlanet1.rotation.y += 0.01;

    texturedPlanet2.rotation.y += 0.02;

    texturedPlanet3.rotation.x += 0.01;
    texturedPlanet3.rotation.z += 0.01;

    texturedPlanet4.rotation.x += 0.02;
    texturedPlanet4.rotation.z += 0.02;

    texturedPlanet5.rotation.x += 0.005;
    texturedPlanet5.rotation.y += 0.005;

    texturedPlanet6.rotation.x += 0.02;
    texturedPlanet6.rotation.z += 0.02;

    texturedPlanet7.rotation.y += 0.01;
    texturedPlanet7.rotation.z += 0.01;

    sun.rotation.x += 0.01;
    sun.rotation.y += 0.01;
    sun.rotation.z += 0.01;

    // star.rotation.x += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();