			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			controls = new THREE.OrbitControls(camera);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//Cube
			var cubegeometry = new THREE.BoxGeometry( 1, 1, 1 );
			var cubematerial = [
					new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('image/ett.png')}),
					new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('image/sex.png')}),
					new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('image/tre.png')}),
					new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('image/fyra.png')}),
					new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('image/fem.png')}),
					new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('image/tva.png')})
				];
			var AmbientLight = new THREE.AmbientLight( 0xFFFFFFF );
			var cube = new THREE.Mesh( cubegeometry, cubematerial );

			//Plane
			var planegeometry = new THREE.PlaneGeometry(3, 3);
			var planematerial = new THREE.MeshBasicMaterial({ color: 0xFF0000, side: THREE.DoubleSide});
			var plane = new THREE.Mesh(planegeometry, planematerial);
			plane.position.set(0,-1,0);
			plane.rotation.x = Math.PI/2;

			//Scene
			scene.add( cube, plane, AmbientLight);

			camera.position.z = 5;

			var render = function () {
				requestAnimationFrame( render);

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
				controls.update();
			};



			render();