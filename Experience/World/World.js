import BaseExperienceModule from "../BaseExperienceModule";
import Room from "./Room";

import * as THREE from 'three'

export default class World extends BaseExperienceModule {
    constructor() {
        super();
        this.camera = this.Experience.camera;
        this.room = new Room();
    }
}