export class DashBoard {
  constructor() {
    this.speed = document.querySelector('#speedPanel');
    this.distance = document.querySelector('#distancePanel');
  }
  changeSpeed(valueSpeed, valueDistance) {
    this.speed.innerHTML = this.speedTransform(valueSpeed);
    this.distance.innerHTML = this.destanceTransform(valueDistance);
  }
  speedTransform(value) {
    if (value >= 0 && value <= 1) {
      return Math.round(value * 5000);
    }
    return 0;
  }
  destanceTransform(value) {
    if (value >= 0 && value <= 9999) {
      let values = value * 0.4545 - 0.9;
      return values.toFixed(1);
    }
    return 0;
  }
}
