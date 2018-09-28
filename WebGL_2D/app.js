var canvas = document.getElementById('my_Canvas');//	bý til canvasinn
		
var gl = canvas.getContext('webgl');//sæki WebGL
		
gl.viewport(0,0,canvas.width,canvas.height);//vel stærð á canavasnum

var vertShader = gl.createShader(gl.VERTEX_SHADER);//bý til vertex shader
		
gl.shaderSource(vertShader, 'attribute vec3 c;void main(void){gl_Position=vec4(c, 1.0);}');
		
gl.compileShader(vertShader);//compile-a shaderinn	

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);//bý til object sem býr til fragment shader
		
gl.shaderSource(fragShader, 'void main(void){gl_FragColor=vec4(0.5,0,0,0.5);}');//fragment shaderinn tekur inn lit
		
gl.compileShader(fragShader);//compile-a fragment shadernum

var program = gl.createProgram();//bý til programið

gl.attachShader(program, vertShader);//tengi vertex shaderinn við programið

gl.attachShader(program, fragShader);//tengi fragment shaderinn við programið

gl.linkProgram(program);//linka programinu við vefsíðuna

gl.useProgram(program);//vel að nota programið

gl.clearColor(1, 8, 0.7, 0.9);//set bakgrunns lit á canvasinn
		
gl.clear(gl.COLOR_BUFFER_BIT);//hreynsa color buffer bitana

var vertexBuf = gl.createBuffer();//bý til buffer
		
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
		
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -0.5,-0.5,0.0, 0,0.5,0.0, 0.5,-0.5,0.0]), gl.STATIC_DRAW);//gef buffernum staðsetningarnar á hornum þríhyrningsins

var coord = gl.getAttribLocation(program, "c");
		
gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
		
gl.enableVertexAttribArray(coord);

gl.drawArrays(gl.TRIANGLES, 0, 3);//teikna þríhyrninginn inn