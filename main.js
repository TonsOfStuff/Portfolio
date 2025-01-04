import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
mainBody.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.12;


const box = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial( {color: 0x00ff00} )
)

scene.add(box);


camera.position.z += 5;











function animate() {
	renderer.render( scene, camera );
    controls.update();

}
renderer.setAnimationLoop( animate );