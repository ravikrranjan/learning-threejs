import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Color
}
from "../node_modules/three/build/three.module.js";

import {
    OrbitControls
}
from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

export default class Demo {

    init() {
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );


        this.camera.position.set(10, 10, 10);
        this.renderer = new WebGLRenderer({
            antialias: true
        });

        this.renderer.sortObjects = true;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(new Color(0xfefefe));
        this.renderer.setPixelRatio(window.devicePixelRatio);

        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.10;
        this.controls.screenSpacePanning = false;

    }

    run(demo) {
        //init demo

        demo.init(this);

        const animate = () => {
            requestAnimationFrame(animate);

            if (demo.update) {
                demo.update(this);
            }
            this.renderer.render(this.scene, this.camera);
        }

        // start animation
        animate();
    }

    static run(demo) {
        const instances = new Demo();
        instances.init();
        instances.run(demo);
    }

}