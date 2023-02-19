import * as THREE from 'three';

export class LightScene {
  constructor(scene) {
    this.scene = scene;

    this.mainLight();
    this.presentationOneLight();
    this.designerPrentationLight();
    this.treeDPrentationLight();
    this.serverLight();
    this.rocketPathLight();
  }
  mainLight() {
    const skyColor = '#130873'; // light blue
    const groundColor = '#000000'; // brownish orange
    const intensity = 0.4;
    const lightHami = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    this.scene.add(lightHami);

    // const lightHelp = new THREE.HemisphereLightHelper(lightHami);
    // this.scene.add(lightHelp);

    const dirLight = new THREE.DirectionalLight('#ffffff', 1);
    dirLight.position.set(-30, 100, 30);
    dirLight.castShadow = true;
    dirLight.shadow.camera.far = 400;
    this.scene.add(dirLight);

    const light = new THREE.PointLight('#FFEB40', 1, 15);
    light.position.set(-3, 0, -9);
    this.scene.add(light);
    // const lightH = new THREE.PointLightHelper(light);
    // this.scene.add(lightH);

    const light2 = new THREE.PointLight('#FFEB40', 1, 15);
    light2.position.set(-12, -2, -2);
    this.scene.add(light2);
    // const lightH2 = new THREE.PointLightHelper(light2);
    // this.scene.add(lightH2);

    const light3 = new THREE.PointLight('#ffffff', 1, 5);
    light3.position.set(2, 4.5, -2);
    this.scene.add(light3);
    // const lightH3 = new THREE.PointLightHelper(light3);
    // this.scene.add(lightH3);

    const light4 = new THREE.PointLight('#ffffff', 1, 5);
    light4.position.set(1, 5.6, 1);
    this.scene.add(light4);
    // const lightH4 = new THREE.PointLightHelper(light4);
    // this.scene.add(lightH4);

    const light5 = new THREE.PointLight('#ffffff', 1, 10);
    light5.position.set(-1, 6, 3);
    this.scene.add(light5);
    // const lightH5 = new THREE.PointLightHelper(light5);
    // this.scene.add(lightH5);
  }
  presentationOneLight() {
    const light = new THREE.PointLight('#fffffF', 1, 15);
    light.position.set(2, 8, 26);
    this.scene.add(light);
    // const lightH = new THREE.PointLightHelper(light);
    // this.scene.add(lightH);

    const light2 = new THREE.PointLight('#ffffff', 1, 10);
    light2.position.set(-3, 7, 32);
    this.scene.add(light2);
    // const lightH2 = new THREE.PointLightHelper(light2);
    // this.scene.add(lightH2);

    const light3 = new THREE.PointLight('#ffffff', 1, 10);
    light3.position.set(0, 15, 25);
    this.scene.add(light3);
    // const lightH3 = new THREE.PointLightHelper(light3);
    // this.scene.add(lightH3);

    const light4 = new THREE.PointLight('#ffffff', 1, 10);
    light4.position.set(0, 5, 25);
    this.scene.add(light4);
    // const lightH4 = new THREE.PointLightHelper(light4);
    // this.scene.add(lightH4);
  }
  designerPrentationLight() {
    const light = new THREE.PointLight('#fffffF', 1, 15);
    light.position.set(22, 27, 0);
    this.scene.add(light);
    // const lightH = new THREE.PointLightHelper(light);
    // this.scene.add(lightH);

    const light2 = new THREE.PointLight('#ffffff', 1, 10);
    light2.position.set(21, 35, 0);
    this.scene.add(light2);
    // const lightH2 = new THREE.PointLightHelper(light2);
    // this.scene.add(lightH2);

    const light3 = new THREE.PointLight('#ffffff', 1, 10);
    light3.position.set(22, 22, 0);
    this.scene.add(light3);
    // const lightH3 = new THREE.PointLightHelper(light3);
    // this.scene.add(lightH3);

    const light4 = new THREE.PointLight('#ffffff', 1, 10);
    light4.position.set(0, 5, 25);
    this.scene.add(light4);
    // const lightH4 = new THREE.PointLightHelper(light4);
    // this.scene.add(lightH4);
  }
  treeDPrentationLight() {
    const light = new THREE.PointLight('#fffffF', 1, 15);
    light.position.set(-13, 62, 19);
    this.scene.add(light);
    // const lightH = new THREE.PointLightHelper(light);
    // this.scene.add(lightH);

    const light2 = new THREE.PointLight('#ffffff', 1, 10);
    light2.position.set(-10, 62, 18);
    this.scene.add(light2);
    // const lightH2 = new THREE.PointLightHelper(light2);
    // this.scene.add(lightH2);

    const light3 = new THREE.PointLight('#ffffff', 1, 10);
    light3.position.set(-10, 61, 15);
    this.scene.add(light3);
    // const lightH3 = new THREE.PointLightHelper(light3);
    // this.scene.add(lightH3);

    const light4 = new THREE.PointLight('#ffffff', 1, 10);
    light4.position.set(-12, 61, 15);
    this.scene.add(light4);
    // const lightH4 = new THREE.PointLightHelper(light4);
    // this.scene.add(lightH4);
  }
  serverLight() {
    const light = new THREE.PointLight('#fffffF', 1, 15);
    light.position.set(9, 96, -18);
    this.scene.add(light);
    // const lightH = new THREE.PointLightHelper(light);
    // this.scene.add(lightH);

    const light2 = new THREE.PointLight('#ffffff', 1, 10);
    light2.position.set(8, 98, -17);
    this.scene.add(light2);
    // const lightH2 = new THREE.PointLightHelper(light2);
    // this.scene.add(lightH2);

    const light3 = new THREE.PointLight('#ffffff', 1, 10);
    light3.position.set(7, 104, -12);
    this.scene.add(light3);
    // const lightH3 = new THREE.PointLightHelper(light3);
    // this.scene.add(lightH3);

    const light4 = new THREE.PointLight('#ffffff', 1, 10);
    light4.position.set(4, 105, -12);
    this.scene.add(light4);
    // const lightH4 = new THREE.PointLightHelper(light4);
    // this.scene.add(lightH4);
  }
  rocketPathLight() {
    const arr = [10, 23, 30, 42, 55, 65, 67, 75, 89, 95, 100, 110, 120];
    for (let i = 0; i < arr.length; i++) {
      const light = new THREE.PointLight('red', 1, 5);
      light.position.set(1, arr[i], 1);
      this.scene.add(light);
      // const lightH4 = new THREE.PointLightHelper(light4);
      // this.scene.add(lightH4);
    }
  }
}
