import { Rocket } from './mesh';
import { Pr } from './present/present';
import GUN from './updater';
import { Views } from './views';
import * as THREE from 'three';
import { positionPresentsModels, rotationsPresentModels } from './utils';

class App {
  constructor() {
    this.presentsObj = [];
    this.init();
    this.ADDPresentationModels();
    this.ADDRocket();
    this.RAF();
  }
  init() {
    this.g = new GUN();
    this.v = new Views();
  }
  ADDPresentationModels() {
    for (let i = 0; i < positionPresentsModels.length; i++) {
      this.presentsObj.push(new Pr(this.v.scene, positionPresentsModels[i], i, this.g));
    }
  }
  ADDRocket() {
    this.mainBox1 = new Rocket(
      'box1_rotate',
      this.v.scene,
      this.g,
      undefined,
      'yellow',
      this.v.camera,
      this.presentsObj,
    );
  }
  RAF() {
    this.STEP();
    requestAnimationFrame(() => {
      this.RAF();
    });
  }
  STEP() {
    this.g.Updater.animations();
    this.v.UPDATE();
  }
}
addEventListener('DOMContentLoaded', () => {
  new App();
});
