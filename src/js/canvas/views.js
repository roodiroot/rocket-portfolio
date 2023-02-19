import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import sc from '../models/garden2.glb';
import sc2 from '../models/garden3.glb';
import { LightScene } from './lights';

export class Views {
  constructor() {
    this.contanier = document.querySelector('#container');
    this.width = this.contanier.offsetWidth;
    this.height = this.contanier.offsetHeight;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.contanier.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#1c2978', 5, 40);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.set(10, 3, 10);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);

    //произвльное вращение камерой
    // this.orbitControl();

    //подключение первого плана с ростительностью PLANE или без нее PLANE2
    // this.PLANE();
    this.PLANE2();

    //Свет на сцене
    new LightScene(this.scene);

    // изменение размера канваса при ресайзе
    addEventListener('resize', () => {
      this.onWindowResize();
    });
  }
  PLANE() {
    const loader = new GLTFLoader();
    loader.load(sc, (gltf) => {
      this.sceneModel = gltf.scene;
      this.sceneModel.traverse((s) => {
        s.castShadow = true;
        s.receiveShadow = true;
      });
      this.sceneModel.rotation.y = Math.PI / 4;
      this.sceneModel.position.y = -3.5;
      this.scene.add(this.sceneModel);
    });
  }
  PLANE2() {
    const loader = new GLTFLoader();
    loader.load(sc2, (gltf) => {
      this.sceneModel = gltf.scene;
      this.sceneModel.traverse((s) => {
        s.castShadow = true;
        s.receiveShadow = true;
      });
      this.sceneModel.rotation.y = Math.PI / 4;
      this.sceneModel.position.y = -3.5;
      this.scene.add(this.sceneModel);
    });
  }
  onWindowResize() {
    const width = this.contanier.offsetWidth;
    const height = this.contanier.offsetHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
  orbitControl() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 1, 0);
    this.controls.update();
  }
  UPDATE() {
    this.renderer.render(this.scene, this.camera);
  }
}
