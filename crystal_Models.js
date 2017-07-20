var nowSelection = 6;

	//No0:三斜
	var triclinic_vertices = [
		new THREE.Vector3(-15,-10,-5),
		new THREE.Vector3(  5,-10,-5),
		new THREE.Vector3(  9, 10,-5),
		new THREE.Vector3(-11, 10,-5),
	    new THREE.Vector3( -9,-10, 5),
	    new THREE.Vector3( 11,-10, 5),
	    new THREE.Vector3( 15, 10, 5),
	    new THREE.Vector3( -5, 10, 5)
	];
	
	
	//No1:単斜
	var monoclinic_vertices = [
		new THREE.Vector3(-12,-10,-5),
		new THREE.Vector3(  8,-10,-5),
		new THREE.Vector3( 12, 10,-5),
		new THREE.Vector3( -8, 10,-5),
	    new THREE.Vector3(-12,-10, 5),
	    new THREE.Vector3(  8,-10, 5),
	    new THREE.Vector3( 12, 10, 5),
	    new THREE.Vector3( -8, 10, 5)
	];
	
	
	//No2:直方
	var orthorhombic_vertices = [
		new THREE.Vector3(-10,-12,-5),
		new THREE.Vector3( 10,-12,-5),
		new THREE.Vector3( 10, 12,-5),
		new THREE.Vector3(-10, 12,-5),
	    new THREE.Vector3(-10,-12, 5),
	    new THREE.Vector3( 10,-12, 5),
	    new THREE.Vector3( 10, 12, 5),
	    new THREE.Vector3(-10, 12, 5)
	];
	
	
	//No3:正方
	var tetragonal_vertices = [
		new THREE.Vector3(-8,-12,-8),
		new THREE.Vector3( 8,-12,-8),
		new THREE.Vector3( 8, 12,-8),
		new THREE.Vector3(-8, 12,-8),
	    new THREE.Vector3(-8,-12, 8),
	    new THREE.Vector3( 8,-12, 8),
	    new THREE.Vector3( 8, 12, 8),
	    new THREE.Vector3(-8, 12, 8)
	];
	
		//No4:三方
	var re = 10*Math.sqrt(11)/2 *2/3;
	
	var trigonal_vertices = [
		new THREE.Vector3(-20*2/3,-re/2,  0),
		new THREE.Vector3(  0,-re/2,-10*2/3),
		new THREE.Vector3(  0,-re/2, 10*2/3),
		new THREE.Vector3( 20*2/3,-re/2,  0),
	    new THREE.Vector3( -5*2/3, re/2,  0),
	    new THREE.Vector3( 15*2/3, re/2,-10*2/3),
	    new THREE.Vector3( 15*2/3, re/2, 10*2/3),
	    new THREE.Vector3( 35*2/3, re/2,  0)
	];
	
	
	//No5:六方
	var rt = 10*Math.sqrt(3)/2;
	
	var hexagonal_vertices = [
		new THREE.Vector3(-10,-10,  0),
		new THREE.Vector3( 10,-10,  0),
		new THREE.Vector3( 10, 10,  0),
		new THREE.Vector3(-10, 10,  0),
	    new THREE.Vector3(  0,-10, rt),
	    new THREE.Vector3(  0,-10,-rt),
	    new THREE.Vector3(  0, 10, rt),
	    new THREE.Vector3(  0, 10,-rt)
	];
		
		
	//No6:立方
	var cubic_vertices = [
		new THREE.Vector3(-10,-10,-10),
		new THREE.Vector3( 10,-10,-10),
		new THREE.Vector3( 10, 10,-10),
		new THREE.Vector3(-10, 10,-10),
	    new THREE.Vector3(-10,-10, 10),
	    new THREE.Vector3( 10,-10, 10),
	    new THREE.Vector3( 10, 10, 10),
	    new THREE.Vector3(-10, 10, 10)
	];




var wireQue = !true;

function wireOnOff(){
	wireQue = !wireQue;
	crystalForm(nowSelection);
}


function crystalForm(num){
	nowSelection = num;
	for(i = 0;i < 7;i++){
		document.getElementById("btnCry"+i).style.backgroundColor = "#ffffff";
	}
	document.getElementById("btnCry"+num).style.backgroundColor = "#888888";
		
		
document.getElementById("fieldCry").innerHTML ="";
	var scene = new THREE.Scene();
		
	var width  = 560;
	var height = width*3/5;
	var fov    = 60;
	var aspect = width / height;
	var near   = 1;
	var far    = 1500;
	var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.set( 0, 15, 30 );
	camera.rotation.x -= 0.5;
	//	camera.position.set( 0, 0, 50 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( width, height );
	//renderer.setClearColor(0xeeeeee,1);
	document.getElementById("fieldCry").appendChild( renderer.domElement );
	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 0.5, 1 );
	scene.add( directionalLight );
	var ambient = new THREE.AmbientLight(0x666666);
	scene.add(ambient);

	switch(num){
		case 0:
			geometry = new THREE.ConvexGeometry( triclinic_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
			break;

		case 1:
			geometry = new THREE.ConvexGeometry( monoclinic_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
			break;

		case 2:
			geometry = new THREE.ConvexGeometry( orthorhombic_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
			break;
	
		case 3:
			geometry = new THREE.ConvexGeometry( tetragonal_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
		break;
	
		case 4:
			geometry = new THREE.ConvexGeometry( trigonal_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
			break;
	
		case 5:
			geometry = new THREE.ConvexGeometry( hexagonal_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
		break;
		case 6:
			geometry = new THREE.ConvexGeometry( cubic_vertices );
			material = new THREE.MeshLambertMaterial( { color: 0x00ff00, transparent:true, opacity:1.0,wireframe: wireQue } );
			break;
	}
	var mesh = new THREE.Mesh(geometry,material);
	scene.add( mesh );
	var planeGeometry = new THREE.PlaneBufferGeometry(1500,1500);
	var planeMaterial = new THREE.MeshPhongMaterial({color:"#ffffff",side:THREE.DoubleSide,transparent:false});
	var plane = new THREE.Mesh(planeGeometry,planeMaterial);
	plane.position.set(0,-20,0);
	plane.rotation.x = 90 * Math.PI / 180;
	scene.add(plane);

	( function renderLoop () {
		requestAnimationFrame( renderLoop );
		mesh.rotation.set(0,mesh.rotation.y + 0.01,0/*mesh.rotation.z + 0.01*/);
		renderer.render( scene, camera );
	} )();
};