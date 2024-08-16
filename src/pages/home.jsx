import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import '../assets/styles/home.scss';

import { App } from "../assets/scripts/app.js";

const TITLE = import.meta.env.VITE_TITLE;

const STAGECOUNT = 20;
const CircleSTAGECOUNT = 20;

const filters = [{
    services: ["0000ffe0-0000-1000-8000-00805f9b34fb"]
}];

let stage = 0;

let app;

function Home(){
    const svgRef = useRef(null);
    const centerRef = useRef(null);
    const circleRef = useRef(null);
    const centerTrackRef = useRef(null);
    const objectTrackRef = useRef(null);
    
    const carbonWrapRef = useRef(null);
    const carbonRef = useRef(null);
    const carbonsRef = useRef(null);
    const carbonPathRef = useRef(null);

    const textWrapRef = useRef(null);

    const swingByWrapRef = useRef(null);

    const btnRef = useRef(null);

    const [sStage, setSStage] = useState(0);

    function resize(){
        let stageWidth = document.getElementById('main').clientWidth;
        let stageHeight = document.getElementById('main').clientHeight;

        app.resize(stageWidth, stageHeight);
    }

    async function bluetooth(){
        try{
            const device = await navigator.bluetooth.requestDevice({ filters });

            const server = await device.gatt.connect();

            const service = await server.getPrimaryService("0000ffe0-0000-1000-8000-00805f9b34fb");

            const characteristic = await service.getCharacteristic("0000ffe1-0000-1000-8000-00805f9b34fb");

            function handler(event){
                btnRef.current.classList = 'connected';

                const value = event.target.value;
                const stringValue = new TextDecoder().decode(value);
                let stg = parseInt(stringValue);

                stg += 20;
                stg %= CircleSTAGECOUNT;

                let cw = stg > stage;

                if (!cw && (stg == 0 && stage == 19)) cw = true;
                else if (cw && (stg == 19 && stage == 0)) cw = false;
                
                app.move(stg, cw);

                stage = stg;
                setSStage(stg);
            }

            characteristic.addEventListener("characteristicvaluechanged", handler);

            await characteristic.startNotifications();
        } catch (error) {
            console.error("블루투스 연결 오류:", error);
        }
    }

    useEffect(() => {
        app = new App({
            svg: svgRef.current,
            
            center: centerRef.current,
            circle: circleRef.current,

            carbon: carbonRef.current,
            carbonWrap: carbonWrapRef.current,
            carbons: carbonsRef.current,
            carbonPath: carbonPathRef.current,

            swingByWrap: swingByWrapRef.current,

            textWrap: textWrapRef.current,

            centerTrack: centerTrackRef.current,
            objectTrack: objectTrackRef.current
        },{
            stage: STAGECOUNT,
            circle: CircleSTAGECOUNT
        });

        window.addEventListener('resize', resize);
        resize();
    }, []);

    return(
        <>
        <div id="home">
            <svg xmlns="http://www.w3.org/2000/svg" ref={svgRef} className="svg">
                <g ref={centerRef} className="center">
                    <circle ref={circleRef} className="circle"></circle>
                    <path ref={objectTrackRef} d="" strokeWidth="2" stroke="transparent" fill="transparent" className="track objectTrack"></path>
                </g>

                <g ref={swingByWrapRef} className="swingByWrap wrap">
                    
                </g>

                <g ref={carbonWrapRef} className="carbonWrap wrap">
                    <circle ref={carbonRef} className="carbon" r="20" fill="crimson"></circle>

                    <g ref={carbonsRef} className="carbons"></g>
                    <g ref={carbonPathRef} className="carbonPath"></g>
                </g>

                <g ref={textWrapRef} className="textWrap wrap"></g>

                <path ref={centerTrackRef} d="" strokeWidth="2" stroke="#000" fill="transparent" className="track centerTrack"></path>

                <defs>
                    <radialGradient id="RedSphereGradient" cx="0.4" cy="0.4" r="0.4" fx="0.3" fy="0.3">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                        <stop offset="80%" stopColor="#fc3c3c" stopOpacity="1"/>
                    </radialGradient>

                    <radialGradient id="BlueSphereGradient" cx="0.4" cy="0.4" r="0.4" fx="0.3" fy="0.3">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                        <stop offset="80%" stopColor="#0096ff" stopOpacity="1"/>
                    </radialGradient>

                    <radialGradient id="BlackSphereGradient" cx="0.4" cy="0.4" r="0.4" fx="0.3" fy="0.3">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                        <stop offset="80%" stopColor="#001C30" stopOpacity="1"/>
                    </radialGradient>

                    <clipPath id="textClip">
                        <rect x="0" y="200" width="200" height="50" />
                    </clipPath>
                </defs>
            </svg>

            <button type="button" className="bluetooth" onClick={bluetooth} ref={btnRef}>
                <img src="/bluetooth.png" />
            </button>

            <h1 className="count">{sStage}</h1>
        </div>
        </>
    )
}

export default Home;