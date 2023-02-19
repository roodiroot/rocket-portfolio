import * as THREE from 'three';
import { LoadModels } from './loadModels';

export class Pr {
  constructor(scene, position, numberPresent, gun) {
    this.scene = scene;
    this.position = position;
    this.numberPresent = numberPresent;
    this.gun = gun;

    this.addMesh();
    this.addPresent();
  }
  addMesh() {
    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 'red', transparent: true, opacity: 0 }),
    );

    this.box.position.add(this.position);
    this.scene.add(this.box);
  }
  addPresent() {
    new LoadModels(this.numberPresent, this.box, this.gun);
  }
}
