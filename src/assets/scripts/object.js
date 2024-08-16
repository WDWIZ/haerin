const XMLNS = "http://www.w3.org/2000/svg";

export class Object{
    constructor(id, ref, data){
        this.id = id;
        this.ref = ref;
        
        this.box = document.createElementNS(XMLNS, "circle");

        this.box.setAttribute("class", `carbon carbon${id}`);
        this.box.setAttribute("r", data.r);

        this.box.setAttribute("cx", data.cx);
        this.box.setAttribute("cy", data.cy);

        this.ref.carbons.appendChild(this.box);
    }

    setState(data){
        this.box.setAttribute("fill", data.fill);
    }
}