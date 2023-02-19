import * as THREE from 'three';

export class Planet {
  constructor(scene) {
    this.scene = scene;
    this.addPlanet();
  }
  addPlanet() {
    this.planet = new THREE.Mesh(
      new THREE.SphereGeometry(3, 16, 16),
      new THREE.MeshStandardMaterial({ color: 'green' }),
    );

    this.planet.position.set(0, 4, 0);
    this.planet.castShadow = true;
    this.planet.receiveShadow = true;
    this.scene.add(this.planet);
  }
}
