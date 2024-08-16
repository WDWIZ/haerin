const lead = 0;

export class Circle{
    constructor(anime, ref, STAGECOUNT, DUR){
        this.anime = anime;

        this.ref = ref;

        this.DUR = DUR;

        this.stage = 0;

        this.STAGECOUNT = STAGECOUNT;
    }
    
    init(stage = 0){
        this.ref.circle.setAttribute("r", this.R);

        this.anime({
            targets: this.ref.center,
            translateX: this.stageWidth / 2 - this.D * Math.sin(2 * Math.PI * stage / this.STAGECOUNT + lead),
            translateY: this.stageHeight / 2 + this.D * 0.9 * Math.cos(2 * Math.PI * stage / this.STAGECOUNT + lead),
            duration: 0
        });
    }

    theta(stage){
        return 2 * Math.PI / this.STAGECOUNT * stage + lead;
    }

    move(from, to, cw){
        const cx = this.stageWidth / 2;
        const cy = this.stageHeight / 2;

        const rx = this.D;
        const ry = this.D * 0.9;

        this.init.bind(this)(from);

        this.ref.centerTrack.setAttribute("d",`
            M ${cx + rx * Math.cos(this.theta.bind(this)(cw ? from : to) + Math.PI / 2)} ${cy + ry * Math.sin(this.theta.bind(this)(cw ? from : to) + Math.PI / 2)}
            A ${rx} ${ry} 0 0 1 ${cx + rx * Math.cos(this.theta.bind(this)(cw ? to : from) + Math.PI / 2)} ${cy + ry * Math.sin(this.theta.bind(this)(cw ? to : from) + Math.PI / 2)}
        `);
        this.centerTrackPath = this.anime.path(this.ref.centerTrack);

        this.anime({
            targets: [this.ref.center, this.ref.carbonWrap, this.ref.swingByWrap, this.ref.textWrap],
            translateX: this.centerTrackPath('x'),
            translateY: this.centerTrackPath('y'),
            duration: this.DUR,
            easing: 'cubicBezier(.17, .67, .5, 1)',
            direction: cw ? "" : "reverse"
        });

        this.stage = to;
    }

    resize(stageWidth, stageHeight, R, D, stage){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.R = R; this.D = D;

        this.stage = stage;

        this.move.bind(this)(stage, stage, true);
    }
}