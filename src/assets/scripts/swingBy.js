const XMLNS = "http://www.w3.org/2000/svg";
const fontSize = 40;

export class SwingBy{
    constructor(id, ref, data){
        this.id = id;
        this.ref = ref;

        this.size = data.size;
        
        this.box = document.createElementNS(XMLNS, "g");

        this.sub1group = document.createElementNS(XMLNS, "g");
        this.sub2group = document.createElementNS(XMLNS, "g");

        this.sub1 = document.createElementNS(XMLNS, "text");
        this.sub2 = document.createElementNS(XMLNS, "text");

        this.sub1.setAttribute('font-family', 'GMarketSansMedium');
        this.sub2.setAttribute('font-family', 'GMarketSansMedium');

        this.sub1.setAttribute('font-size', `${fontSize}px`);
        this.sub2.setAttribute('font-size', `${fontSize}px`);

        this.path = document.createElementNS(XMLNS, "path");

        this.box.classList = `swingBy swingBy${id}`;
        this.path.setAttribute("d", `
            M ${data.size + 10} 10
            L ${data.size} 0
            L ${data.size - 10} 10
            M ${data.size} 0
            A ${data.size} ${data.size} 0 0 1 ${-data.size} 0
        `);

        this.path.setAttribute('stroke', '#E68369');
        this.path.setAttribute('stroke-width', '8px');
        this.path.setAttribute('fill', 'transparent');

        this.box.appendChild(this.path);
        this.box.appendChild(this.sub1group);
        this.box.appendChild(this.sub2group);

        this.sub1group.appendChild(this.sub1);
        this.sub2group.appendChild(this.sub2);

        this.ref.swingByWrap.appendChild(this.box);
    }

    set(data){
        const cx = (data.R + this.size + 15) * Math.cos(data.t - Math.PI / 2);
        const cy = (data.R + this.size + 15) * Math.sin(data.t - Math.PI / 2);

        this.box.style.display = 'block';
        
        this.box.style.transform = `translateX(${cx}px) translateY(${cy}px)`;
        this.path.style.transform = ` rotate(${data.t}rad)`;

        this.sub1.innerHTML = data.sub1 || null;
        this.sub2.innerHTML = data.sub2 || null;

        const D = this.size;
        const d = 20;

        const t = data.t - Math.PI / 2;

        this.path.setAttribute("d", `
            M ${this.size + 10} 10
            L ${this.size} 0
            L ${this.size - 10} 10
            M ${this.size} 0
            A ${this.size} ${this.size} 0 0 1 ${-this.size} 0
        `);

        this.sub1.setAttribute('x', D * Math.cos(t - Math.PI / 2) + d * Math.cos(t));
        this.sub1.setAttribute('y', D * Math.sin(t - Math.PI / 2) + d * Math.sin(t) + (data.noAnime ? 0 : 100));
        this.sub2.setAttribute('x', D * Math.cos(t + Math.PI / 2) + d * Math.cos(t));
        this.sub2.setAttribute('y', D * Math.sin(t + Math.PI / 2) + d * Math.sin(t) + (data.noAnime ? 0 : 100));

        if (data.half){
            this.path.setAttribute("d", `
                M ${this.size + 10} 10
                L ${this.size} 0
                L ${this.size - 10} 10
                M ${this.size} 0
                A ${this.size} ${this.size} 0 0 1 ${-this.size / 2} 0
            `);

            this.path.style.transform = ` rotate(${data.t + Math.PI / 2}rad)`;

            this.sub1.setAttribute('x', D * Math.cos(t + Math.PI / 2) + d * Math.cos(t + Math.PI / 2) - 70);
            this.sub1.setAttribute('y', D * Math.sin(t + Math.PI / 2) + d * Math.sin(t + Math.PI / 2) + (data.noAnime ? 100 : 200));
        }

        if (t >= Math.PI){
            this.sub1.setAttribute("text-anchor", "end");
            this.sub2.setAttribute("text-anchor", "end");
        }

        else{
            this.sub1.setAttribute("text-anchor", "start");
            this.sub2.setAttribute("text-anchor", "start");
        }

        if (!data.noAnime){
            this.sub1.innerHTML += `<animateTransform id="anim0" attributeName="transform" type="translate"
                            from="0 0" to="0 -100"
                            begin="indefinite" dur="0.35s" fill="freeze"/>`;

            this.sub2.innerHTML += `<animateTransform id="anim1" attributeName="transform" type="translate"
                            from="0 0" to="0 -100"
                            begin="indefinite" dur="0.35s" fill="freeze"/>`; 
            
            document.getElementById("anim0").beginElement();
            document.getElementById("anim1").beginElementAt(0.2);
        }
    }

    hide(){
        this.box.style.display = 'none';
    }
}