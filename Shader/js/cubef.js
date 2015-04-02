			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			var controls = new THREE.OrbitControls(camera);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			// instantiate a loader
			var loader = new THREE.OBJMTLLoader();

			// load an obj / mtl resource pair
			loader.load(
				// OBJ resource URL
				'images/MickeyMouse.obj',
				// MTL resource URL
				'images/MickeyMouse.mtl',
				// Function when both resources are loaded
				function ( object ) {
					scene.add( object );
				},
				// Function called when downloads progress
				function ( xhr ) {
					console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
				},
				// Function called when downloads error
				function ( xhr ) {
					console.log( 'An error happened' );
				}
			);

			var directionalLight = new THREE.DirectionalLight( 0xffffff );
			directionalLight.position.set(1, 1, 1);
			
			//Scene
			scene.add(directionalLight);

			camera.position.z = 500;

			var render = function () {
				requestAnimationFrame( render);

				renderer.render(scene, camera);
				controls.update();
			};
			render();