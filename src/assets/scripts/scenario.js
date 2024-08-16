const RED = "url('#RedSphereGradient')";
const BLUE = "url('#BlueSphereGradient')";
const BLACK = "url('#BlackSphereGradient')";

export function Scenario(){
    let R, D, stageWidth, stageHeight;

    function resize(_R, _D, sw, sh){
        R = _R;
        D = _D;
        stageWidth = sw;
        stageHeight = sh;
    }

    function init(){
        const carbonCount = 6;
        const groupCount = 3;
        const swingByCount = 4;
        const textCount = 6;

        return { carbonCount, groupCount, swingByCount, textCount };
    }

    function createArcPath({cx, cy, r, arc, rot}){
        const res = `
            M ${cx + r * Math.cos(rot - Math.PI / 2)} ${cy + r * Math.sin(rot - Math.PI / 2)}
            A ${r} ${r} 0 0 1 ${cx + r * Math.cos(arc + rot - Math.PI / 2)} ${cy + r * Math.sin(arc + rot - Math.PI / 2)}
        `;

        return res;
    }

    function getData(){
        const data = [
            {
                scene: 0,
                circleStage: 0,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 18.5,
                        t: 2 * Math.PI / 20 * 1.5,
                        carbons: [2, 3, 4, 5],
                        caption: "Oxalacetic Acid"
                    },
                    {
                        id: 1,
                        R: R * 1.3,
                        path: `
                            M 0 ${-R * 2}
                            L 0 ${- (R + 194)}
                        `,
                        t: 2 * Math.PI / 20 * 0,
                        carbons: [0, 1],
                        caption: "Acetyl CoA"
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -50
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: 50
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 50
                    },
                    {
                        id: 5,
                        fill: BLUE,
                        dx: 150
                    }
                ]
            },
            {
                scene: 1,
                //circleStage: 0,
                circleStage: 1,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 1.5,
                        t: 2 * Math.PI / 20 * 2,
                        carbons: [2, 3, 4, 5],
                        caption: "Oxalacetic Acid",
                        captiondx: 100
                    },
                    {
                        id: 1,
                        R: R + 194,
                        path: createArcPath({
                            cx: 0, cy: -(R - 194),
                            r: 388, 
                            arc: Math.PI / 2,
                            rot: 0
                        }),
                        t: 2 * Math.PI / 20 * 5,
                        carbons: [0, 1],
                        caption: "Acetyl CoA"
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -50,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: 50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -50,
                        noAnime: true,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 50,
                        noAnime: true,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 150,
                        noAnime: true,
                    },
                    {
                        id: 5,
                        fill: BLUE,
                        dx: 250,
                        noAnime: true,
                    }
                ]
            },
            {
                scene: 2,
                circleStage: 2,
                groups: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 2,
                        carbons: [0, 1, 2, 3, 4, 5],
                        caption: "Citric Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20,
                        carbons: []
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -250,
                        noAnime: true,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -150,
                        noAnime: true,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -50,
                        noAnime: true,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 50,
                        noAnime: true,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 150,
                        noAnime: true,
                    },
                    {
                        id: 5,
                        fill: BLUE,
                        dx: 250,
                        noAnime: true,
                    }
                ]
            },
            {
                scene: 3,
                //circleStage: 2,
                circleStage: 3,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 2,
                        t: 2 * Math.PI / 20 * 3,
                        carbons: [0, 1, 2, 3, 4],
                        caption: "&alpha;-Ketoglutaric Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        path: createArcPath({
                            cx: R * Math.cos(2 * Math.PI / 20 * 2 - Math.PI / 2) + 250, cy: R * Math.sin(2 * Math.PI / 20 * 2 - Math.PI / 2) + 400,
                            r: 400,
                            arc: Math.PI / 2,
                            rot: 0
                        }) + createArcPath({
                            cx: R * Math.cos(2 * Math.PI / 20 * 2 - Math.PI / 2) + 850, cy: R * Math.sin(2 * Math.PI / 20 * 2 - Math.PI / 2) + 400,
                            r: 200,
                            arc: 2 * Math.PI / 3,
                            rot: 2 * Math.PI / 4 * 3
                        }),
                        t: 2 * Math.PI / 20,
                        carbons: [5],
                        dur: 500,
                        caption: `CO<tspan dy="10" class="sub">2</tspan>`
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -200,
                        noAnime: true,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -100,
                        noAnime: true,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 0,
                        noAnime: true
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 100,
                        noAnime: true
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 200,
                        noAnime: true
                    },
                    {
                        id: 5,
                        fill: BLUE,
                        noAnime: true
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 2,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>'
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 300,
                        t: 2 * Math.PI / 20 * 2.3,
                        text: "탈수소효소",
                        del: 100
                    }
                ]
            },
            {
                scene: 4,
                //circleStage: 2,
                circleStage: 4,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 3 ,
                        t: 2 * Math.PI / 20 * 3.75,
                        carbons: [0, 1, 2, 3, 4],
                        caption: "&alpha;-Ketoglutaric Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20,
                        carbons: [5],
                        dur: 500,
                        caption: `CO<tspan dy="10" class="sub">2</tspan>`,
                        noAnime: true
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -200,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -100,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 0,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 100,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 200
                    },
                    {
                        id: 5,
                        fill: BLUE,

                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 4.7,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>'
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20 * 2,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 300,
                        t: 2 * Math.PI / 20 * 2.3,
                        text: "탈수소효소",
                        noAnime: true
                    },
                    {
                        id: 1,
                        R: R + 300,
                        t: 2 * Math.PI / 20 * 4.65,
                        text: "탈수소효소",
                        del: 200
                    }
                ]
            },
            {
                scene: 5,
                //circleStage: 2.8,
                circleStage: 5,
                groups: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 3.75,
                        carbons: [0, 1, 2, 3, 4],
                        caption: "&alpha;-Ketoglutaric Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20,
                        carbons: [5],
                        dur: 500,
                        caption: `CO<tspan dy="10" class="sub">2</tspan>`,
                        noAnime: true
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -200,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -100,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 0,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 100,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 200,
                        noAnime: true
                    },
                    {
                        id: 5,
                        fill: BLUE,

                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 4.7,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    },
                    {
                        id: 1,
                        R,
                        t: 2 * Math.PI / 20 * 5.5,
                        sub1: 'ADP + P<tspan dy="10" class="sub">i</tspan>',
                        sub2: 'ATP'
                    },
                    {
                        id: 2,
                        R: R,
                        t: 2 * Math.PI / 20 * 2,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 300,
                        t: 2 * Math.PI / 20 * 4.65,
                        text: "탈수소효소",
                        del: 200
                    },
                    {
                        id: 0,
                        R: R + 250,
                        t: 2 * Math.PI / 20 * 5.4,
                        text: "탈탄산효소",
                        del: 200
                    }
                ]
            },
            {
                scene: 6,
                //circleStage: 4,
                circleStage: 6,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 3.75,
                        t: 2 * Math.PI / 20 * 6.2,
                        carbons: [0, 1, 2, 3],
                        caption: "Succinic Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        path: createArcPath({
                            cx: R * Math.cos(2 * Math.PI / 20 * 3.75 - Math.PI / 2) + 200, cy: R * Math.sin(2 * Math.PI / 20 * 3.75 - Math.PI / 2) + 500,
                            r: 500,
                            arc: Math.PI / 2,
                            rot: 0
                        }) + createArcPath({
                            cx: R * Math.cos(2 * Math.PI / 20 * 3.75 - Math.PI / 2) + 1000, cy: R * Math.sin(2 * Math.PI / 20 * 3.75 - Math.PI / 2) + 500,
                            r: 300,
                            arc: Math.PI / 6,
                            rot: 2 * Math.PI / 4 * 3
                        }),
                        t: 2 * Math.PI / 20,
                        carbons: [4],
                        caption: `CO<tspan dy="10" class="sub">2</tspan>`
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [5]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        noAnime: true
                    },
                    {
                        id: 5,
                        fill: BLUE,

                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 4.7,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    },
                    {
                        id: 1,
                        R,
                        t: 2 * Math.PI / 20 * 5.5,
                        sub1: 'ADP + P<tspan dy="10" class="sub">i</tspan>',
                        sub2: 'ATP',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 300,
                        t: 2 * Math.PI / 20 * 4.65,
                        text: "탈수소효소",
                        noAnime: true
                    },
                    {
                        id: 0,
                        R: R + 250,
                        t: 2 * Math.PI / 20 * 5.4,
                        text: "탈탄산효소",
                        noAnime: true
                    },
                ]
            },
            {
                scene: 7,
                //circleStage: 5,
                circleStage: 7,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 6.2,
                        t: 2 * Math.PI / 20 * 7.1,
                        carbons: [0, 1, 2, 3],
                        caption: "Succinic Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20,
                        carbons: [4],
                        dur: 500,
                        caption: `CO<tspan dy="10" class="sub">2</tspan>`,
                        noAnime: true
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [5]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 4,
                        fill: BLUE,

                    },
                    {
                        id: 5,
                        fill: BLUE,

                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 4.7,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    },
                    {
                        id: 1,
                        R,
                        t: 2 * Math.PI / 20 * 5.5,
                        sub1: 'ADP + P<tspan dy="10" class="sub">i</tspan>',
                        sub2: 'ATP',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 300,
                        t: 2 * Math.PI / 20 * 4.65,
                        text: "탈수소효소",
                        noAnime: true
                    },
                    {
                        id: 0,
                        R: R + 250,
                        t: 2 * Math.PI / 20 * 5.4,
                        text: "탈탄산효소",
                        noAnime: true
                    },
                ]
            },
            {
                scene: 8,
                //circleStage: 6,
                circleStage: 8,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 7.1,
                        t: 2 * Math.PI / 20 * 8,
                        carbons: [0, 1, 2, 3],
                        caption: "Succinic Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [4, 5]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 4,
                        fill: BLUE,

                    },
                    {
                        id: 5,
                        fill: BLUE,

                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 4.7,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    },
                    {
                        id: 1,
                        R,
                        t: 2 * Math.PI / 20 * 5.5,
                        sub1: 'ADP + P<tspan dy="10" class="sub">i</tspan>',
                        sub2: 'ATP',
                        noAnime: true
                    }
                ]
            },
            {
                scene: 9,
                //circleStage: 7,
                circleStage: 9,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 8,
                        t: 2 * Math.PI / 20 * 8.9,
                        carbons: [0, 1, 2, 3],
                        caption: "Succinic Acid"
                    },
                    {
                        id: 1,
                        R: R,
                        t: 2 * Math.PI / 20,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [4, 5]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 4,
                        fill: BLUE,

                    },
                    {
                        id: 5,
                        fill: BLUE,

                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 8,
                        sub1: 'FAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'FADH<tspan dy="10" class="sub">2</tspan>'
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 200,
                        t: 2 * Math.PI / 20 * 7.8,
                        text: "탈수소효소",
                        del: 100
                    }
                ]
            },
            {
                scene: 10,
                //circleStage: 8,
                circleStage: 10,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 8.9,
                        t: 2 * Math.PI / 20 * 10,
                        carbons: [2, 3, 4, 5],
                        caption: "Fumaric Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: 150
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 8,
                        sub1: 'FAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'FADH<tspan dy="10" class="sub">2</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 200,
                        t: 2 * Math.PI / 20 * 7.8,
                        text: "탈수소효소",
                        noAnime: true
                    }
                ]
            },
            {
                scene: 11,
                //circleStage: 9,
                circleStage: 11,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 10,
                        t: 2 * Math.PI / 20 * 11,
                        carbons: [2, 3, 4, 5],
                        caption: "Fumaric Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: 50
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: 150
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 8,
                        sub1: 'FAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'FADH<tspan dy="10" class="sub">2</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 200,
                        t: 2 * Math.PI / 20 * 7.8,
                        text: "탈수소효소",
                        noAnime: true
                    }
                ]
            },
            {
                scene: 12,
                //circleStage: 10,
                circleStage: 12,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 11,
                        t: 2 * Math.PI / 20 * 12,
                        carbons: [2, 3, 4, 5],
                        caption: "Fumaric Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: 50
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: 150
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 8,
                        sub1: 'FAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'FADH<tspan dy="10" class="sub">2</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 200,
                        t: 2 * Math.PI / 20 * 7.8,
                        text: "탈수소효소",
                        noAnime: true
                    }
                ]
            },
            {
                scene: 13,
                //circleStage: 11,
                circleStage: 13,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 12,
                        t: 2 * Math.PI / 20 * 13,
                        carbons: [2, 3, 4, 5],
                        caption: "Fumaric Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: 150
                    }
                ]
            },
            {
                scene: 14,
                //circleStage: 12,
                circleStage: 14,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 13,
                        t: 2 * Math.PI / 20 * 14,
                        carbons: [2, 3, 4, 5],
                        caption: "Mallic Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: -150,
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 13,
                        sub1: 'H<tspan dy="10" class="sub">2</tspan><tspan dy="-10">O</tspan>',
                        half: true
                    }
                ]
            },
            {
                scene: 15,
                //circleStage: 12.75,
                circleStage: 15,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 14,
                        t: 2 * Math.PI / 20 * 14.875,
                        carbons: [2, 3, 4, 5],
                        caption: "Mallic Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: -150
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 13,
                        sub1: 'H<tspan dy="10" class="sub">2</tspan><tspan dy="-10">O</tspan>',
                        half: true,
                        noAnime: true
                    }
                ]
            },
            {
                scene: 16,
                //circleStage: 13.5,
                circleStage: 16,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 14.875,
                        t: 2 * Math.PI / 20 * 16,
                        carbons: [2, 3, 4, 5],
                        caption: "Mallic Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: -150,
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 15.2,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>'
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 500,
                        t: 2 * Math.PI / 20 * 15.25,
                        text: "탈수소효소",
                        del: 100
                    }
                ]
            },
            {
                scene: 17,
                //circleStage: 14.25,
                circleStage: 17,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 16,
                        t: 2 * Math.PI / 20 * 16.625,
                        carbons: [2, 3, 4, 5],
                        caption: "Mallic Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: 150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: 50,
                    },
                    {
                        id: 4,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 5,
                        fill: BLACK,
                        dx: -150,
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 15,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 500,
                        t: 2 * Math.PI / 20 * 15.25,
                        text: "탈수소효소",
                        noAnime: true
                    }
                ]
            },
            {
                scene: 18,
                //circleStage: 15,
                circleStage: 18,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 16.625,
                        t: 2 * Math.PI / 20 * 17.5,
                        carbons: [2, 3, 4, 5],
                        caption: "Oxalacetic Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 1,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 50
                    },
                    {
                        id: 5,
                        fill: BLUE,
                        dx: 150
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 15,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 500,
                        t: 2 * Math.PI / 20 * 15.25,
                        text: "탈수소효소",
                        noAnime: true
                    }
                ]
            },
            {
                scene: 19,
                //circleStage: 15,
                circleStage: 19,
                groups: [
                    {
                        id: 0,
                        R: R,
                        ft: 2 * Math.PI / 20 * 17.5,
                        t: 2 * Math.PI / 20 * 18.5,
                        carbons: [2, 3, 4, 5],
                        caption: "Oxalacetic Acid"
                    },
                    {
                        id: 1,
                        R: R * 2,
                        t: 0,
                        carbons: []
                    },
                    {
                        id: 2,
                        R: R * 2,
                        t: 0,
                        carbons: [0, 1]
                    }
                ],
                carbons: [
                    {
                        id: 0,
                        fill: RED,
                        dx: -50,
                    },
                    {
                        id: 1,
                        fill: RED,
                        dx: 50,
                    },
                    {
                        id: 2,
                        fill: BLACK,
                        dx: -150,
                    },
                    {
                        id: 3,
                        fill: BLACK,
                        dx: -50,
                    },
                    {
                        id: 4,
                        fill: BLUE,
                        dx: 50
                    },
                    {
                        id: 5,
                        fill: BLUE,
                        dx: 150
                    }
                ],
                swingBys: [
                    {
                        id: 0,
                        R: R,
                        t: 2 * Math.PI / 20 * 15,
                        sub1: 'NAD<tspan dy="-10" class="sub">+</tspan><tspan dy="10"> + 2H<tspan dy="-10" class="sub">+</tspan></tspan>',
                        sub2: 'NADH + H<tspan dy="-10" class="sub">+</tspan>',
                        noAnime: true
                    }
                ],
                texts: [
                    {
                        id: 0,
                        R: R + 500,
                        t: 2 * Math.PI / 20 * 15.25,
                        text: "탈수소효소",
                        noAnime: true
                    }
                ]
            }
        ]

        return data;
    }

    return {resize, init, getData};
}