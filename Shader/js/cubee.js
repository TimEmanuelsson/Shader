			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 85, window.innerWidth/window.innerHeight, 0.1, 1000 );
			var controls = new THREE.OrbitControls(camera);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//Cube
			var cubegeometry = new THREE.BoxGeometry( 1, 1, 1 );
			var cubematerial = new THREE.MeshPhongMaterial( { color: 0x6699FF, emissive: 0x293D66, shininess: 100} );
			var cube = new THREE.Mesh( cubegeometry, cubematerial );
			
			//Spheres
			var sphereonegeometry = new THREE.SphereGeometry( 1, 50, 50 );
			var sphereonematerial = new THREE.MeshPhongMaterial( { color: 0xCC3300, shininess: 1 } );
			var sphereone = new THREE.Mesh( sphereonegeometry, sphereonematerial );

			var spheretwogeometry = new THREE.SphereGeometry( 1, 10, 1 );
			var spheretwomaterial = new THREE.MeshPhongMaterial( { color: 0xE6E600, emissive: 0xA1A100, shininess: 50 } );
			var spheretwo = new THREE.Mesh( spheretwogeometry, spheretwomaterial );

			var spherethreegeometry = new THREE.SphereGeometry( 1, 50, 50 );
			var spherethreematerial = new THREE.MeshPhongMaterial( { color: 0x99CC00, emissive: 0x7A997A, shininess: 100 } );
			var spherethree = new THREE.Mesh( spherethreegeometry, spherethreematerial );

			var spherefivegeometry = new THREE.SphereGeometry( 1, 50, 50 );
			var spherefivematerial = new THREE.MeshPhongMaterial( {opacity: 0.3, transparent: true, shininess: 100, specular: 0xFF3300} );
			var spherefive = new THREE.Mesh( spherefivegeometry, spherefivematerial );

			//Light
			var AmbientLight = new THREE.AmbientLight(0x373737);
			var directionalLight = new THREE.DirectionalLight( 0xffffff );

			//Positions
			sphereone.position.set(3, 0, 0);
			spheretwo.position.set(0, 3, 0);
			spherethree.position.set(-3, 0, 0);
			spherefive.position.set(0, 0, 0);
			cube.position.set(0, -3, 0);
			directionalLight.position.set(10, 5, 10);
			camera.position.z = 5;

			//Scene
			scene.add( sphereone, spheretwo, cube, spherethree, spherefive, AmbientLight, directionalLight);

			var render = function () {
				requestAnimationFrame( render);

				renderer.render(scene, camera);
				controls.update();
			};



			render();