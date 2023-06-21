import BaseExperienceModule from "./BaseExperienceModule";

import * as THREE from 'three';
export default class Renderer extends BaseExperienceModule {
    constructor() {
        super();
        this.camera = this.Experience.camera;
        console.log(this.camera, this.camera.perspectiveCamera)

        this.setRenderer();
    }

    setRenderer() {
        // creating the renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });

        // setting up base properties for the renderer
        this.renderer.useLegacyLights = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure =  1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        this.renderer.render(this.scene, this.camera.perspectiveCamera)
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
}