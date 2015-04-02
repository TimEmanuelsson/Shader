			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			controls = new THREE.OrbitControls(camera);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			document.addEventListener("keydown", keyDownEvent, false);
			var mount = false;
			var step = 0;

			//Material
			var material = new THREE.MeshLambertMaterial( {} );
			
			//Table
			var Tablegeometry = new THREE.BoxGeometry( 2, 0.1, 2 );

			var Table = new THREE.Mesh( Tablegeometry, material );

			//Legs
			var Leggeometry = new THREE.BoxGeometry( 0.1, 1, 0.1 );

			var Legone = new THREE.Mesh( Leggeometry, material );
			var Legtwo = new THREE.Mesh( Leggeometry, material );
			var Legthree = new THREE.Mesh( Leggeometry, material );
			var Legfour = new THREE.Mesh( Leggeometry, material );

			//Light
			var AmbientLight = new THREE.AmbientLight( 0xFF0000 );

			//Scene
			scene.add(AmbientLight);

			//Position
			Legone.position.set(-0.95,-1.5,0.95);
			Legtwo.position.set(0.95,-1.5,0.95);
			Legthree.position.set(-0.95,-1.5,-0.95);
			Legfour.position.set(0.95,-1.5,-0.95);

			camera.position.z = 4;
			camera.position.y = 0.5;

			var render = function () {
				requestAnimationFrame( render);
				renderer.render(scene, camera);
				controls.update();
				var speed = 0.01;

				if(mount) {
					if(Legone.position.y <= -0.5 || Legtwo.position.y <= -0.5 
					|| Legthree.position.y <= -0.5 || Legfour.position.y <= -0.5) {
						Legone.position.y += speed;
						Legtwo.position.y += speed;
						Legthree.position.y += speed;
						Legfour.position.y += speed;
					}
				}
			};

			function Mount() {
				if(step < 6) {
					step++;
				}
			
				switch(step) {
					case 1:
						scene.add(Table);
						break;
					case 2:
						scene.add(Legone);
						break;
					case 3:
						scene.add(Legtwo);
						break;
					case 4:
						scene.add(Legthree);
						break;
					case 5:
						scene.add(Legfour);
						break;
					case 6:
						mount = true;
						break;	
				}
			}

			function keyDownEvent(e) {
				if(e.keyCode==13)	{
					Mount();
				}
			}

			render();