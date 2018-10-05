var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var light = new THREE.PointLight(0xffff00);
light.position.set(50, 50, 50);
var light1 = new THREE.AmbientLight(0x00ffff,0.1);

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
var r = 0;

var geometry = new THREE.SphereGeometry(radius, segments, rings);
var material = new THREE.MeshPhongMaterial({color: "rgb(255, 255, 255)", wireframe: true});

var geometry1 = new THREE.SphereGeometry(radius/2, segments/2, rings/2);
var material1 = new THREE.MeshPhongMaterial({color: "rgb(255, 0, 0)", wireframe: true});

var geometry2 = new THREE.SphereGeometry(radius/4, segments/4, rings/4);
var material2 = new THREE.MeshPhongMaterial({color: "rgb(255, 255, 0)", wireframe: true});

var geometry3 = new THREE.SphereGeometry(radius/8, segments/8, rings/8);
var material3 = new THREE.MeshPhongMaterial({color: "rgb(0, 255, 0)", wireframe: false});

var cube = new THREE.Mesh(geometry, material);
var cube1 = new THREE.Mesh(geometry1, material1);
var cube2 = new THREE.Mesh(geometry2, material2);
var cube3 = new THREE.Mesh(geometry3, material3);

var group = new THREE.Group();
group.add( cube,cube1,cube2,cube3 );
scene.add( group,light,light1 );

camera.translateZ( distance );

var render = function() {
  	requestAnimationFrame(render);
  	t = t;
  	r +=0.01
  	if (32 in keysDown) {
        t+=0.01;
    }
  	cube.rotation.x += 0.04;
  	cube.rotation.y += 0.01;
  	group.position.x = 7*Math.sin(t*2);
  	group.position.y = -7*Math.sin(t*2);
  	cube1.rotation.x += 0.03;
  	cube1.rotation.y += 0.06;
  	cube2.rotation.x += 0.02;
  	cube2.rotation.y += 0.03;
  	cube3.rotation.x += 0.01;
  	cube3.rotation.y += 0.01;
  	light.position.x -= 7*Math.sin(r*2);
  	light.position.y -= -7*Math.sin(r*2);

  	renderer.render(scene, camera);
};

render();