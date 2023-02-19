import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import rocket3 from '../models/rocket/rocket3.glb';
import { AlertClass, DescriptionClass } from './alert/alertClass.js';
import { DashBoard } from './infoPanel/dashboard.js';

export class Rocket {
  constructor(name_animation, scene, gun, position, color, camera, obj) {
    this.camera = camera;
    this.position = position || new THREE.Vector3(0, 2, 0);
    this.color = color || 'red';
    this.obj = obj;

    this.startPosition = this.position.clone();

    this.name_animation = name_animation;
    this.scene = scene;
    this.GUN = gun;
    this.key = this.GUN.c.key;
    this.clock = new THREE.Clock();
    this.dashboard = new DashBoard();

    this.updateUtils();
    this.addMesh();
  }
  addMesh() {
    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 2, 0.6),
      new THREE.MeshStandardMaterial({ transparent: true, opacity: 0 }),
    );

    const loader = new GLTFLoader();
    loader.load(rocket3, (gltf) => {
      this.rocket = gltf.scene;
      this.rocket.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
      });
      this.rocket.scale.set(0.8, 0.8, 0.8);
      this.rocket.position.set(0, -3.3, 0);
      this.box.add(this.rocket);

      const light = new THREE.PointLight('red', 1, 5);
      light.position.set(0, 1, 0);
      this.rocket.add(light);
    });

    this.box.position.add(this.position);
    this.scene.add(this.box);

    this.cameraOrigin = this.camera.position.clone();

    this.GUN.Updater.addAnimation(this.name_animation, () => {
      this.update(this.clock.getDelta());
    });
  }

  updateUtils() {
    this.incriment = 0;
    this.livels = [10, 30, 60, 100];
    this.stop = this.livels[this.incriment];
    this.velocity = new THREE.Vector3();
    this.c = 0;
    this.pause = false;

    this.description = false;

    const presentPosition = this.obj[0].position.clone();
    const presentPosition2 = this.obj[1].position.clone();
    const presentPosition3 = this.obj[2].position.clone();
    const presentPosition4 = this.obj[3].position.clone();

    let offset = new THREE.Vector3(0, -2, 3);
    let offset2 = new THREE.Vector3(4, -2, 0);
    let offset3 = new THREE.Vector3(-2.5, -2, 3);
    let offset4 = new THREE.Vector3(4, -4, -4);

    this.endPosition = [
      presentPosition.add(offset),
      presentPosition2.add(offset2),
      presentPosition3.add(offset3),
      presentPosition4.add(offset4),
    ];
    this.frame = 0;
  }

  update(deltaTime) {
    this.camera.lookAt(this.box.position);

    if (this.velocity.y > 0) this.box.rotation.y = this.box.rotation.y * this.box.rotation.y;

    if (this.key.Space && this.c < 1 && !this.pause) {
      this.c = this.c + 0.0003;
    }
    if ((this.key.Space == false || this.pause) && this.c > 0) {
      this.c = this.c - 0.001;
    }
    if ((this.key.Space == false || this.pause) && this.c < 0) {
      this.c = 0;
    }
    if (this.box.position.y >= this.stop) {
      this.pause = true;
      if (this.velocity.y == 0 && this.pause) {
        this.animationCameraPresent();
      }
    }

    this.velocity.y = this.velocity.y * deltaTime + this.c;

    this.box.position.add(this.velocity);
    this.camera.position.add(this.velocity);

    this.boxPosition = this.box.position.clone();
    this.endCameraPosition = this.boxPosition.add(new THREE.Vector3(10, 3, 10));
    this.dashboard.changeSpeed(this.velocity.y, this.box.position.y);
  }

  animationCameraPresent() {
    if (this.frame < 100) {
      if (this.description === false) {
        new DescriptionClass(this.stop); // создание описания
        this.description = true;
      }
      this.frame++;
      const cameraOrigin = this.camera.position.clone();
      let p = this.step(1, 1000, this.frame);
      this.camera.position.lerpVectors(cameraOrigin, this.endPosition[this.incriment], p);
    }
    if (this.frame === 100 && this.key.Space) {
      this.frame++;
    }
    if (this.frame > 100 && this.frame < 200) {
      this.frame++;
      const cameraOrigin = this.camera.position.clone();
      let p = this.step(1, 1000, this.frame);
      this.camera.position.lerpVectors(cameraOrigin, this.endCameraPosition, p);
    }
    if (this.frame == 200) {
      this.incriment++;
      this.stop = this.livels[this.incriment];
      this.frame = 0;
      this.pause = false;
      this.description = false;
      if (this.incriment == 4) {
        this.alert = new AlertClass(); // начало новой игры
        this.alert.openAlert(() => {
          this.returnStart();
        });
      }
    }
  }
  returnStart() {
    this.box.position.set(0, 2, 0);
    this.camera.position.set(10, 3, 10);
    this.incriment = 0;
    this.stop = this.livels[this.incriment];
  }
  step(start, end, frame) {
    return (frame - start) / (end - start);
  }
}
