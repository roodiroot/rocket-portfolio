export default class {
  constructor() {
    this.Updater = this.u = new Updater();
    this.Contrls = this.c = new Controls();
  }
}

class Updater {
  constructor() {
    this.obj = {};
  }

  addAnimation(name, func) {
    this.obj[name] = {
      func,
    };
  }

  animations() {
    for (let a in this.obj) {
      console.log();
      this.obj[a].func();
    }
  }
}

class Controls {
  constructor() {
    this.key = {};
    this.keysControls = ['Space'];

    this.button = document.querySelector('#spaceButton');

    addEventListener('keydown', (e) => {
      if (this.keysControls.includes(e.code)) {
        this.button.classList.add('active');
        this.key[e.code] = true;
      }
    });
    addEventListener('keyup', (e) => {
      if (this.keysControls.includes(e.code)) {
        this.button.classList.remove('active');
        this.key[e.code] = false;
      }
    });

    this.button.addEventListener('mousedown', (e) => {
      this.key['Space'] = true;
    });
    this.button.addEventListener('mouseup', (e) => {
      this.key['Space'] = false;
    });

    this.button.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.key['Space'] = true;
    });
    this.button.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.key['Space'] = false;
    });
  }
  getKeys() {
    return this.key;
  }
}
