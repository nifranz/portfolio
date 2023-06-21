import Experience from "./Experience";

export default class BaseExperienceModule {
    constructor() {
        this.Experience = new Experience();
        this.sizes = this.Experience.sizes;
        this.scene = this.Experience.scene;
        this.canvas = this.Experience.canvas;
    }
}