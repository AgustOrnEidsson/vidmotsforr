var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var light = new THREE.PointLight(0xFFFFFF,1.0);
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

var geometry2 = new THREE.SphereGeometry(radius/4, segments/4, rings/4);
var material2 = new THREE.MeshBasicMaterial({
  color: "rgb(255, 255, 0)",
  wireframe: true
});

var geometry3 = new THREE.SphereGeometry(radius/8, segments/8, rings/8);
var material3 = new THREE.MeshBasicMaterial({
  color: "rgb(0, 255, 0)",
  wireframe: false
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

var cube3 = new THREE.Mesh(geometry3, material3);
scene.add(cube3);

camera.translateZ( distance );

var render = function() {
  	requestAnimationFrame(render);
  	t = t;
  	if (32 in keysDown) {
        t+=0.01;
      }
  	cube.rotation.x += 0.04;
  	cube.rotation.y += 0.01;
  	cube.position.x = 7*Math.sin(t*2);
  	cube.position.y = -7*Math.sin(t*2);
  	cube1.rotation.x += 0.03;
  	cube1.rotation.y += 0.06;
  	cube1.position.x  = 7*Math.sin(t*2);
  	cube1.position.y = -7*Math.sin(t*2);
  	cube2.rotation.x += 0.02;
  	cube2.rotation.y += 0.03;
  	cube2.position.x = 7*Math.sin(t*2);
  	cube2.position.y = -7*Math.sin(t*2);
  	cube3.rotation.x += 0.01;
  	cube3.rotation.y += 0.01;
  	cube3.position.x = 7*Math.sin(t*2);
  	cube3.position.y = -7*Math.sin(t*2);

  	renderer.render(scene, camera);
};

render();