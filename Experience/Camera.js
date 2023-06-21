import BaseExperienceModule from "./BaseExperienceModule";

import * as THREE from 'three';

export default class Camera extends BaseExperienceModule {
    constructor() {
        super();
        console.log(this.Experience, this.sizes, this.scene, this.canvas);

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
    }
    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5;
        this.perspectiveCamera.position.x = 1;
        this.perspectiveCamera.position.y = 0;
    }
    createOrthographicCamera() {
        this.frostrum = 5;
        this.orthographicCamera= new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.frostrum)/2,
            (this.sizes.aspect * this.frostrum)/2,
            this.frostrum/2,
            -this.frostrum/2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera);
    }

    resize() {
        //  Updating perspective Camera on resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        //  Updating orthographic Camera on resize
        this.orthographicCamera.left =
            (-this.sizes.aspect * this.frostrum)/2,
        this.orthographicCamera.right = 
            (this.sizes.aspect * this.frostrum)/2,
        this.orthographicCamera.top = this.frostrum/2
        this.orthographicCamera.bottom= -this.frostrum/2
        this.orthographicCamera.updateProjectionMatrix();
    }
     
    update() {

    }
}