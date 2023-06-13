import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import './style.css'

const scene = new THREE.Scene();

/// init camera 
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
camera.position.z = 3;
camera.position.y = 3;



const sphareGeometry = new THREE.SphereGeometry(1.5, 64, 64);
const spereMaterial = new THREE.MeshPhysicalMaterial({ color: '#aaaaaa', roughness: .7})

const sphere = new THREE.Mesh(sphareGeometry, spereMaterial);
scene.add(sphere);


/// add light to the scene 
const light = new THREE.PointLight(0xffffff)
light.position.z = 20
scene.add(light);


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('canvas#threejs-canvas')! });
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animation);

renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.enableDamping = true;
controls.autoRotateSpeed = 5; 
 
controls.update(); 
animate();

function animate() {

  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);

}