			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			var controls = new THREE.OrbitControls(camera);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			renderer.shadowMapEnabled = true;    
           	renderer.shadowMapSoft = true;
			renderer.shadowMapType = THREE.PCFSoftShadowMap;

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
					this.object = object;
					object.traverse( function ( child )
					{
						if ( child instanceof THREE.Mesh )
						{
							child.castShadow = true;
						}
					} );
					scene.add( object );
				});
				
			//Plane
			var planegeometry = new THREE.PlaneGeometry(1000, 1000);
			var planematerial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide});
			var plane = new THREE.Mesh(planegeometry, planematerial);
			plane.position.set(0,-230,0);
			plane.rotation.x = Math.PI/2;
			plane.receiveShadow = true;

			//Light
			var AmbientLight = new THREE.AmbientLight(0xFFFFFF);
			var directionalLight = new THREE.DirectionalLight( 0xffffff );
			directionalLight.position.set(1, 1, 1);
			directionalLight.castShadow = true;

			//Scene
			scene.add( directionalLight, plane);

			camera.position.z = 500;
			camera.position.y = 250;

			var render = function () {
				requestAnimationFrame( render);

				renderer.render(scene, camera);
				controls.update();
			};
			render();