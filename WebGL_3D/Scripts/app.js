var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var light = new THREE.PointLight(0xFFFFFF);
light.position.set(300, 40, 50);
scene.add(light);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var radius = 40;
var segments = 50;
var rings = 30;
var distance = 200; 
var t = 0;

var geometry = new THREE.SphereGeometry(radius, segments, rings);
var material = new THREE.MeshBasicMaterial({
  color: 0xF3A2B0,
  wireframe: true
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.translateZ( distance );



var render = function() {
  	requestAnimationFrame(render);
  	t += 0.01;

  	cube.rotation.x += 0.03;
  	cube.rotation.y += 0.01;
  	cube.position.x = 7*Math.sin(t*2);
  	cube.position.y = -7*Math.sin(t*2);

  	renderer.render(scene, camera);
};

render();