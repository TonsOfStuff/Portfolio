import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("threeCanvas").appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.12;

//Window resizing
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}










for (let i = 0; i <= 10; i++){
    const star = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2, 1),
        new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    )

    star.position.x = Math.random() * 100 - Math.random() * 100;
    star.position.y = Math.random() * 100 - Math.random() * 100;
    star.position.z = Math.random() * 100 - Math.random() * 100;


    scene.add(star);
}





camera.position.z += 100;











function animate() {
	renderer.render( scene, camera );
    controls.update();

}
renderer.setAnimationLoop( animate );