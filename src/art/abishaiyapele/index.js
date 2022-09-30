class WebGL {
  constructor() {
    // WebGl basic configuration

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
  }
}

new WebGL();