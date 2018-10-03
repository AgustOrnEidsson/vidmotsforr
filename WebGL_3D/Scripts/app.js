var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var light = new THREE.PointLight(0xFFDE00,1.0);
light.position.set(100, 100, 50);
scene.add(light);

 var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth-20, window.innerHeight-20);
document.body.appendChild(renderer.domElement);

var radius = 40;
var segments = 50;
var rings = 30;
var distance = 200; 
var t = 0;

var geometry = new THREE.SphereGeometry(radius, segments, rings);
var material = new THREE.MeshBasicMaterial({
  color: "rgb(64, 224, 208)",
  wireframe: true
});
var geometry1 = new THREE.SphereGeometry(radius/2, segments/2, rings/2);
var material1 = new THREE.MeshBasicMaterial({
  color: "rgb(255, 0, 0)",
  wireframe: true
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

camera.translateZ( distance );


var render = function() {
  	requestAnimationFrame(render);
  	t += 0.01;
  	if (32 in keysDown) {
        t-=0.01;
      }
  	cube.rotation.x += 0.03;
  	cube.rotation.y += 0.01;
  	cube.position.x = 7*Math.sin(t*2);
  	cube.position.y = -7*Math.sin(t*2);
  	cube1.rotation.x += 0.02;
  	cube1.rotation.y += 0.06;
  	cube1.position.x = 7*Math.sin(t*2);
  	cube1.position.y = -7*Math.sin(t*2);

  	renderer.render(scene, camera);
};

render();