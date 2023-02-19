import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import presentWORLD from '../../models/presentations/world.glb';
import presentWWW from '../../models/presentations/www.glb';
import presentBanana from '../../models/presentations/bananaText.glb';
import presentTractor2 from '../../models/presentations/3Dmodeling.glb';
import okModel from '../../models/presentations/end.glb';

export class LoadModels {
  constructor(number, scene, gun) {
    this.number = number;
    this.scene = scene;
    this.modelsArray = [];
    this.gun = gun;
    this.clock = new THREE.Clock();
    this.left = false;

    this.startModels();
  }
  startModels() {
    switch (this.number) {
      case 0:
        this.webDevelopmetnPresent();
        break;
      case 1:
        this.webDesignerPresent();
        break;
      case 2:
        this.threeDModaling();
        break;
      case 3:
        this.serverModal();
        break;
    }
  }
  addMesh(model) {
    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshStandardMaterial({ color: 'blue', transparent: true, opacity: 0 }),
    );
    this.box.rotation.y = 0.6;
    model.add(this.box);
    // анимация WWW в первой сцене
    // this.gun.Updater.addAnimation('rotateWWW', () => {
    //   this.animationWWW(this.box);
    // });

    const loader = new GLTFLoader();
    loader.load(presentWWW, (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
      });
      this.model.position.set(0, -0.5, 3);
      this.model.scale.set(0.2, 0.2, 0.2);
      this.box.add(this.model);
    });
  }
  webDevelopmetnPresent() {
    const loader = new GLTFLoader();
    loader.load(presentWORLD, (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
      });
      this.model.rotation.y = -1;
      this.model.position.z = -5;
      this.model.scale.set(0.9, 0.9, 0.9);
      this.scene.add(this.model);
      this.addMesh(this.model);
    });
  }

  webDesignerPresent() {
    const loader = new GLTFLoader();
    loader.load(presentBanana, (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
      });
      this.model.rotation.y = Math.PI / 2;
      this.model.position.x = -3;
      //   this.model.scale.set(0.9, 0.9, 0.9);
      this.scene.add(this.model);
    });
  }

  threeDModaling() {
    const loader = new GLTFLoader();
    loader.load(presentTractor2, (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
      });
      //   this.model.rotation.y = Math.PI / 2;
      this.model.position.y = -2;
      this.model.scale.set(0.2, 0.2, 0.2);
      this.scene.add(this.model);
    });
  }
  serverModal() {
    const loader = new GLTFLoader();
    loader.load(okModel, (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((c) => {
        c.castShadow = true;
        c.receiveShadow = true;
      });
      this.model.rotation.y = -Math.PI / 4;
      this.model.rotation.x = -0.2;
      this.model.rotation.z = 0.2;
      this.model.position.set(3, -3, -1);
      this.model.scale.set(0.2, 0.2, 0.2);
      this.scene.add(this.model);
    });
  }
  animationWWW(box) {
    this.deltaTime = this.clock.getDelta();
    if (box.rotation.y >= 0.5 && !this.left && box.rotation.y <= 1.3) {
      box.rotation.y += 0.1 * this.deltaTime;
      if (box.rotation.y >= 1.3) {
        this.left = true;
      }
    }
    if (box.rotation.y >= 0.6 && this.left && box.rotation.y <= 1.4) {
      box.rotation.y -= 0.1 * this.deltaTime;
      if (box.rotation.y <= 0.6) {
        this.left = false;
      }
    }
  }
}
