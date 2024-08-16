const XMLNS = "http://www.w3.org/2000/svg";
const fontSize = 50;

export class Text{
    constructor(id, ref, data){
        this.id = id;
        this.ref = ref;

        this.g = document.createElementNS(XMLNS, "g");
        this.rect = document.createElementNS(XMLNS, "rect");

        this.text = document.createElementNS(XMLNS, "text");

        this.text.setAttribute("text-anchor", "middle");
        this.text.setAttribute('font-family', 'GMarketSansMedium');
        this.text.setAttribute('font-size', `${fontSize}px`);
        this.text.setAttribute("fill", "#fc3c3c");

        this.rect.setAttribute("stroke", "#fc3c3c");
        this.rect.setAttribute("fill", "none");
        this.rect.setAttribute("stroke-width", "5px");
         
        this.rect.setAttribute("x", 0);
        this.rect.setAttribute("y", 0);

        this.g.appendChild(this.text);
        this.g.appendChild(this.rect);
        this.ref.textWrap.appendChild(this.g);
    }

    set(data){
        const cx = (data.R + 15) * Math.cos(data.t - Math.PI / 2);
        const cy = (data.R + 15) * Math.sin(data.t - Math.PI / 2);

        this.g.style.display = 'block';
        this.g.style.transform = `translateX(${cx}px) translateY(${cy}px)`;

        this.text.innerHTML = data.text;

        this.rect.setAttribute("width", this.text.getBBox().width + 40);
        this.rect.setAttribute("height", this.text.getBBox().height + 20);
        
        this.text.setAttribute("x", (this.text.getBBox().width + 40) / 2);
        this.text.setAttribute("y", (this.text.getBBox().height + 20) / 2 + 3);
    }

    hide(){
        this.g.style.display = 'none';
    }
}