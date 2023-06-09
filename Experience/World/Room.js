import Experience from '../Experience'

import * as THREE from 'three'

export default class Room { 
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
        const cube = new THREE.Mesh(geometry, material)
        this.scene.add(cube);
    }
}