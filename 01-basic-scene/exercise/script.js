//scene
const scene = new THREE.Scene();
//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
//material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//mesh
const mesh = new THREE.Mesh(geometry, material);
//add mesh to scene
scene.add(mesh);
//camera
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);
//renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)
