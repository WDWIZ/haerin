const XMLNS = "http://www.w3.org/2000/svg";

import { Object } from './object.js';
import { SwingBy } from './swingBy.js';
import { Text } from './text.js';

export class ObjectManager{
    constructor(anime, ref, center, DUR){
        this.anime = anime;

        this.ref = ref;
        this.center = center;

        this.objects = [];
        this.objectCount = 0;

        this.DUR = DUR;

        this.groups = [];
        this.groupCaptions = [];
        this.groupCount = 0;

        this.swingBys = [];
        this.swingByCount = 0;

        this.texts = []
        this.textCount = 0;

        this.stage = 0;
    }

    setPos({targets, pos, option = ['translateX', 'translateY']}){
        const [ x, y ] = pos;
        const [ optx, opty ] = option;

        const data = {
            targets,
            duration: 0
        }

        data[optx] = x;
        data[opty] = y;

        this.anime(data);
    }

    carbonGroup(data, cw, noAnime = false){
        if (!data) return;

        const group = data.groups;
        const carbons = data.carbons;

        const path = this.setPath.bind(this)(group, cw);

        this.objects.map((x, i) => {
            this.ref.svg.appendChild(x.box);

            const { dx, dy } = carbons[i];

            this.anime({
                targets: this.objects[i].box,
                cx: dx || 0,
                cy: dy || 0,
                duration: carbons[i].noAnime || noAnime ? 0 : 500
            });
        });

        group.map((t, i) => {
            let x = this.groups[i];

            this.setCaption.bind(this)(this.groupCaptions[i], group[i].caption || null, group[i].captiondx || 0);

            group[i].carbons.map((y, j) => {
                if (group[i].carbons == []) return;

                x.appendChild(this.objects[y].box);

                this.objects[y].setState({
                    fill: carbons[y].fill || '#000'
                });
            });

            if (group[i].ft == null && group[i].path == null) return;

            this.anime({
                targets: x,
                translateX: path[i]('x'),
                translateY: path[i]('y'),
                easing: "cubicBezier(.17, .67, .5, 1)",
                duration: noAnime ? 0 : t.dur || this.DUR,
                direction: !cw || t.direction == "reverse" ? "reverse" : ""
            });
        });

        this.objects.map((x, i) => {
            const dx = carbons[i].dx;
            const dy = carbons[i].dy;

            if (x.noAnime){
                this.anime({
                    targets: this.objects[i].box,
                    cx: dx || 0,
                    cy: dy || 0,
                    duration: 0
                });
            }

            else{
                this.anime({
                    targets: this.objects[i].box,
                    cx: dx || 0,
                    cy: dy || 0,
                    duration: 500
                });
            }
        });

        this.texts.map((x, i) => {
            x.hide();
        });

        if (data.texts){
            data.texts.map((x, i) => {
                this.texts[i].set(x);
            });
        }

        this.swingBys.map((x, i) => {
            x.hide();
        });

        if (data.swingBys){
            data.swingBys.map((x, i) => {
                this.swingBys[i].set(x);
    
                const length = this.anime.setDashoffset(this.swingBys[i].path);
    
                this.anime({
                    targets: this.swingBys[i].path,
                    strokeDashoffset: [-length, 0],
                    duration: noAnime || x.noAnime ? 0 : this.DUR,
                    easing: 'cubicBezier(.17, .67, .5, 1)'
                });
            });   
        }
    }

    setPath(data, cw){
        let paths = [];

        this.ref.carbonPath.innerHTML = null;

        data.map((x, i) => {
            let d = x.ft == null ?
            x.path || "" :
            `
                M ${x.R * Math.cos(data[i].ft - Math.PI / 2)} ${x.R * Math.sin(data[i].ft - Math.PI / 2)}
                A ${x.R} ${x.R} 0 0 1 ${x.R * Math.cos(data[i].t - Math.PI / 2)} ${x.R * Math.sin(data[i].t - Math.PI / 2)}
            `;

            const track = document.createElementNS(XMLNS, "path");

            track.setAttribute("d", d);

            track.classList = 'objectTrack';

            this.ref.carbonPath.appendChild(track);

            paths.push(this.anime.path(track));
        });

        return paths;
    }

    setCaption(box, text, dx = 0){
        box.innerHTML = text;

        box.style.transform = `translateX(${dx}px) translateY(80px)`;
    }
    
    move(from, to, scenario, fscenario, cw){
        this.carbonGroup.bind(this)(scenario, cw);

        this.stage = to;
    }

    create(){
        const [cx, cy] = [0, 0];

        const obj = new Object(this.objectCount, this.ref, {
            r: 50,
            cx, cy
        });

        this.objects.push(obj);

        this.objectCount++;

        return this.objectCount;
    }

    createGroup(){
        const group = document.createElementNS(XMLNS, "g");
        const caption = document.createElementNS(XMLNS, "text");

        caption.setAttribute("font-size", "40px");
        caption.setAttribute("font-family", "GMarketSansMedium");
        caption.setAttribute('text-anchor', 'middle');

        group.appendChild(caption);
        this.ref.carbons.appendChild(group);

        this.setPos.bind(this)({
            targets: caption,
            pos: [0, 80]
        });

        group.classList = `carbonGroup carbonGroup${this.groupCount}`;
        caption.classList = `groupCaption groupCaption${this.groupCount}`;

        this.groups.push(group);
        this.groupCaptions.push(caption);

        this.groupCount++;

        return this.groupCount;
    }

    createSwingBy(){
        const swingBy = new SwingBy(this.swingByCount, this.ref, {
            size: 75
        });

        this.swingBys.push(swingBy);

        this.swingByCount++;

        return this.swingByCount;
    }

    createText(){
        const text = new Text(this.textCount, this.ref, {
            
        });

        this.texts.push(text);

        this.textCount++;

        return this.textCount;
    }

    resize(stageWidth, stageHeight, stage, scenario){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.move.bind(this)(stage, stage, scenario, scenario, true);
    }
}