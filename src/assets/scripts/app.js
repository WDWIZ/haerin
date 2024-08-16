import anime from "animejs";

import { Scenario } from './scenario.js';
import { Circle } from './circle.js';
import { ObjectManager } from './objectManager.js';

const XMLNS = "http://www.w3.org/2000/svg";

const R = 1000;
const D = 1300;

const DUR = 700;

export class App{
    constructor(ref, stageCount){
        this.ref = ref;

        this.STAGECOUNT = stageCount.stage;
        this.CircleSTAGECOUNT = stageCount.circle;

        this.scenario = new Scenario();
        this.scenarioInitData = {};
        this.scenarioData = [];

        this.circle = new Circle(anime, ref, stageCount.circle, DUR);
        this.objectManager = new ObjectManager(anime, ref, {
            R, D
        }, DUR);

        this.stage = 0;
        this.circleStage = 0;
        
        this.init.bind(this)(0);
    }

    init(stage = 0){
        this.scenarioInitData = this.scenario.init();
        this.ref.carbons.innerHTML = null;

        for (let i = 0; i < this.scenarioInitData.carbonCount; i++){
            this.objectManager.create();
        }

        for (let i = 0; i < this.scenarioInitData.groupCount; i++){
            this.objectManager.createGroup();
        }

        for (let i = 0; i < this.scenarioInitData.swingByCount; i++){
            this.objectManager.createSwingBy();
        }

        for (let i = 0; i < this.scenarioInitData.textCount; i++){
            this.objectManager.createText();
        }
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.ref.svg.setAttribute("viewBox", `0 0 ${this.stageWidth} ${this.stageHeight}`);
        this.scenario.resize(R, D, stageWidth, stageHeight);

        this.scenarioData = this.scenario.getData();

        this.circle.resize(stageWidth, stageHeight, R, D, this.stage);
        this.objectManager.resize(stageWidth, stageHeight, this.stage, this.scenarioData[this.stage]);
    }

    move(to, cw){
        let send = to;
        if (!cw) send = ((to + 1) + 20) % 20;

        this.circle.move(this.circleStage, this.scenarioData[to].circleStage, cw);
        this.objectManager.move(this.stage, to, this.scenarioData[send], this.scenarioData[this.stage], cw);

        this.stage = to;
        this.circleStage = this.scenarioData[to].circleStage;

        return new Promise(resolve => {
            setTimeout(resolve, this.DUR);
        });
    }
}