export class AlertClass {
  constructor() {
    this.alert = document.querySelector('.alert');
    this.alertButton = document.querySelector('#alertButton');
  }
  openAlert(func) {
    this.alert.classList.add('active');
    this.click(func);
  }
  click(func) {
    this.alertButton.addEventListener('click', () => {
      func();
      this.alert.classList.remove('active');
    });
  }
}

export class DescriptionClass {
  constructor(livel) {
    this.livel = livel;
    this.startDiscription();
  }
  startDiscription() {
    switch (this.livel) {
      case 10:
        this.webDevelopment();
        break;
      case 30:
        this.ZDmodeling();
        break;
      case 60:
        this.disigner();
        break;
      case 100:
        this.servisin();
        break;
    }
  }
  webDevelopment() {
    const blocks = document.querySelectorAll('.profestionBlockPart');
    blocks.forEach((b) => {
      b.classList.remove('active');
    });
    const webDev = document.querySelector('#webDevelopment');
    webDev.classList.add('active');

    const curent = document.querySelector('#curent');
    curent.innerHTML = '01';
  }
  ZDmodeling() {
    const blocks = document.querySelectorAll('.profestionBlockPart');
    blocks.forEach((b) => {
      b.classList.remove('active');
    });
    const webDev = document.querySelector('#modeling3D');
    webDev.classList.add('active');

    const curent = document.querySelector('#curent');
    curent.innerHTML = '02';
  }
  disigner() {
    const blocks = document.querySelectorAll('.profestionBlockPart');
    blocks.forEach((b) => {
      b.classList.remove('active');
    });
    const webDev = document.querySelector('#disigner');
    webDev.classList.add('active');

    const curent = document.querySelector('#curent');
    curent.innerHTML = '03';
  }
  servisin() {
    const blocks = document.querySelectorAll('.profestionBlockPart');
    blocks.forEach((b) => {
      b.classList.remove('active');
    });
    const webDev = document.querySelector('#service');
    webDev.classList.add('active');

    const curent = document.querySelector('#curent');
    curent.innerHTML = '04';
  }
}
