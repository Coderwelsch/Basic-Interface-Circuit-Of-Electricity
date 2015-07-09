/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Battery',
                            type: 'image',
                            rect: ['30px', '49px', '91px', '139px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Battery.svg",'0px','0px']
                        },
                        {
                            id: 'Light_Bulb',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['249px', '11px', '174px', '174px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,0,0,0.00)",[50,50,true,'farthest-corner',[['rgba(252,255,11,1.00)',0],['rgba(252,255,11,0.00)',83]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Light_Off',
                            type: 'image',
                            rect: ['282px', '31px', '112px', '174px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lamp.svg",'0px','0px']
                        },
                        {
                            id: 'Cables',
                            type: 'group',
                            rect: ['97px', '22px', '308', '199', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '-2px', '5px', '29px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '-2px', '55px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['55px', '192px', '55px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy3',
                                type: 'rect',
                                rect: ['145px', '192px', '92px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy4',
                                type: 'rect',
                                rect: ['253px', '192px', '112px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy10',
                                type: 'rect',
                                rect: ['530px', '192px', '125px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy5',
                                type: 'rect',
                                rect: ['681px', '192px', '91px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4',
                                type: 'rect',
                                rect: ['234px', '185px', '5px', '12px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy',
                                type: 'rect',
                                rect: ['248px', '185px', '5px', '12px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy2',
                                type: 'rect',
                                rect: ['653px', '185px', '5px', '12px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy3',
                                type: 'rect',
                                rect: ['681px', '185px', '5px', '12px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Switch_Off',
                                type: 'rect',
                                rect: ['109px', '184px', '35px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-25']]
                            },
                            {
                                id: 'Switch_On',
                                display: 'none',
                                type: 'rect',
                                rect: ['110px', '192px', '35px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['55px', '-2px', '5px', '197px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'EllipseCopy',
                                type: 'ellipse',
                                rect: ['141px', '189px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['105px', '189px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Light_On',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '32px', '112px', '173px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Light%20On.svg",'0px','0px']
                        },
                        {
                            id: 'Resistor',
                            type: 'group',
                            rect: ['457px', '183px', '174', '61', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle6',
                                type: 'rect',
                                rect: ['-9px', '16px', '35px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-70']]
                            },
                            {
                                id: 'Rectangle6Copy',
                                type: 'rect',
                                rect: ['-7px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['70']]
                            },
                            {
                                id: 'Rectangle6Copy2',
                                type: 'rect',
                                rect: ['14px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-70']]
                            },
                            {
                                id: 'Rectangle6Copy3',
                                type: 'rect',
                                rect: ['35px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['70']]
                            },
                            {
                                id: 'Rectangle6Copy5',
                                type: 'rect',
                                rect: ['56px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-70']]
                            },
                            {
                                id: 'Rectangle6Copy4',
                                type: 'rect',
                                rect: ['77px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['70']]
                            },
                            {
                                id: 'Rectangle6Copy7',
                                type: 'rect',
                                rect: ['99px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-70']]
                            },
                            {
                                id: 'Rectangle6Copy8',
                                type: 'rect',
                                rect: ['152px', '43px', '30px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-70']]
                            },
                            {
                                id: 'Rectangle6Copy6',
                                type: 'rect',
                                rect: ['120px', '28px', '63px', '5px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['70']]
                            }]
                        },
                        {
                            id: 'Capacitor',
                            type: 'image',
                            rect: ['739px', '104px', '55px', '104px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Capacitor.svg",'0px','0px']
                        },
                        {
                            id: 'Spot',
                            symbolName: 'spot',
                            type: 'rect',
                            rect: ['199px', '188px', '55', '55', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.6'
                        },
                        {
                            id: 'spot2',
                            symbolName: 'spot',
                            type: 'rect',
                            rect: ['94px', '160px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.6'
                        },
                        {
                            id: 'spot',
                            symbolName: 'spot',
                            type: 'rect',
                            rect: ['326px', '43px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.6'
                        },
                        {
                            id: 'SpotCopy',
                            symbolName: 'spot',
                            type: 'rect',
                            rect: ['432px', '188', '55', '55', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.6'
                        },
                        {
                            id: 'SpotCopy3',
                            symbolName: 'spot',
                            type: 'rect',
                            rect: ['766px', '76px', '55', '55', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.6'
                        },
                        {
                            id: 'Tooltip_Light_Switch',
                            symbolName: 'Tooltip_Light_Switch',
                            display: 'none',
                            type: 'rect',
                            rect: ['85px', '229px', '283px', '233px', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Tooltip_Resistor',
                            symbolName: 'Tooltip_Resistor',
                            display: 'none',
                            type: 'rect',
                            rect: ['318px', '221px', 'undefined', 'undefined', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Tooltip_Capacitor',
                            symbolName: 'Tooltip_Capacitor',
                            display: 'none',
                            type: 'rect',
                            rect: ['809px', '16', '304', '175', 'auto', 'auto']
                        },
                        {
                            id: 'Tooltip_Light',
                            symbolName: 'Tooltip_Light',
                            display: 'none',
                            type: 'rect',
                            rect: ['395px', '14px', '236', '159', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Tooltip_Battery',
                            symbolName: 'Tooltip_Battery',
                            display: 'none',
                            type: 'rect',
                            rect: ['16', '208', '285', '212', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1270",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Light}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Light_Switch}",
                            '229px',
                            '229px'
                        ],
                        [
                            "eid1598",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Light_Bulb}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Switch_On}",
                            'none',
                            'none'
                        ],
                        [
                            "eid192",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Light_Switch}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Light_On}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1844",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Battery}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Light_On}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1842",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spot2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Spot}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid1126",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spot}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${SpotCopy3}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid386",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Resistor}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid842",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Resistor}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1840",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spot2}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid1124",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid1046",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Tooltip_Capacitor}",
                            '809px',
                            '809px'
                        ],
                        [
                            "eid1047",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Tooltip_Capacitor}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1125",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spot}",
                            '326px',
                            '326px'
                        ],
                        [
                            "eid858",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SpotCopy3}",
                            '766px',
                            '766px'
                        ],
                        [
                            "eid385",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Resistor}",
                            '318px',
                            '318px'
                        ],
                        [
                            "eid253",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Light_Switch}",
                            '85px',
                            '85px'
                        ],
                        [
                            "eid339",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Light_Switch}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${SpotCopy}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid191",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Tooltip_Light_Switch}",
                            '233px',
                            '233px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SpotCopy}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid1843",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${spot2}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid859",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SpotCopy3}",
                            '76px',
                            '76px'
                        ]
                    ]
                }
            },
            "spot": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['17px', '17px', '55px', '55px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,200,200,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '55px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '17px'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '17px'
                        ],
                        [
                            "eid9",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '21px',
                            '55px'
                        ],
                        [
                            "eid13",
                            "height",
                            1000,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '55px',
                            '21px'
                        ],
                        [
                            "eid12",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '21px',
                            '55px'
                        ],
                        [
                            "eid14",
                            "width",
                            1000,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '55px',
                            '21px'
                        ]
                    ]
                }
            },
            "Tooltip_Light_Switch": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '283px', '207', 'auto', 'auto'],
                            id: 'Tooltip_Light_Switch',
                            opacity: '0.9',
                            type: 'group',
                            c: [
                            {
                                rect: ['127px', '6px', '30px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(230,230,230,1.00)']
                            },
                            {
                                rect: ['0px', '21px', '283px', '186px', 'auto', 'auto'],
                                id: 'Rectangle5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(230,230,230,1.00)']
                            }]
                        },
                        {
                            rect: ['-9px', '130px', '58px', '22px', 'auto', 'auto'],
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1.00)']
                        },
                        {
                            rect: ['232px', '131px', '51px', '22px', 'auto', 'auto'],
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1.00)']
                        },
                        {
                            rect: ['17px', '123px', '35px', '35px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['220px', '125px', '35px', '35px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['43px', '131px', '206px', '22px', 'auto', 'auto'],
                            transform: [[], ['-30']],
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            id: 'Electron3',
                            type: 'image',
                            rect: ['60px', '131px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron3Copy2',
                            type: 'image',
                            rect: ['0px', '131px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron3Copy',
                            type: 'image',
                            rect: ['30px', '131px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron',
                            type: 'image',
                            rect: ['180px', '131px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['150px', '131', '19px', '19px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Electron2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['120px', '131', '19px', '19px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Electron2Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['90px', '131', '19px', '19px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Electron2Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'ElectronCopy',
                            type: 'image',
                            rect: ['210px', '131px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'ElectronCopy2',
                            type: 'image',
                            rect: ['240px', '116px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'ElectronCopy3',
                            type: 'image',
                            rect: ['270px', '100px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'ElectronCopy4',
                            type: 'image',
                            rect: ['300px', '80px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'ElectronCopy5',
                            type: 'image',
                            rect: ['330px', '64px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'ElectronCopy6',
                            type: 'image',
                            rect: ['360px', '46px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '283px', '233px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy4}",
                            '124px',
                            '113px'
                        ],
                        [
                            "eid88",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${ElectronCopy4}",
                            '113px',
                            '300px'
                        ],
                        [
                            "eid72",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy6}",
                            '46px',
                            '131px'
                        ],
                        [
                            "eid1558",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid283",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Electron3}",
                            '-133px',
                            '-133px'
                        ],
                        [
                            "eid151",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron3}",
                            '-133px',
                            '60px'
                        ],
                        [
                            "eid73",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy2}",
                            '116px',
                            '131px'
                        ],
                        [
                            "eid69",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${ElectronCopy}",
                            '131px',
                            '131px'
                        ],
                        [
                            "eid75",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy3}",
                            '100px',
                            '131px'
                        ],
                        [
                            "eid282",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Electron2Copy2}",
                            '-103px',
                            '-103px'
                        ],
                        [
                            "eid126",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron2Copy2}",
                            '-103px',
                            '90px'
                        ],
                        [
                            "eid78",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy4}",
                            '80px',
                            '131px'
                        ],
                        [
                            "eid280",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Electron2}",
                            '-43px',
                            '-43px'
                        ],
                        [
                            "eid127",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron2}",
                            '-43px',
                            '150px'
                        ],
                        [
                            "eid281",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Electron2Copy}",
                            '-73px',
                            '-73px'
                        ],
                        [
                            "eid125",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron2Copy}",
                            '-73px',
                            '120px'
                        ],
                        [
                            "eid74",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy2}",
                            '62px',
                            '53px'
                        ],
                        [
                            "eid93",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${ElectronCopy2}",
                            '53px',
                            '240px'
                        ],
                        [
                            "eid149",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron3Copy}",
                            '-163px',
                            '30px'
                        ],
                        [
                            "eid150",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron3Copy2}",
                            '-193px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1990",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1991",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1992",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1993",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1994",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid71",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy6}",
                            '185px',
                            '173px'
                        ],
                        [
                            "eid89",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${ElectronCopy6}",
                            '173px',
                            '360px'
                        ],
                        [
                            "eid80",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy5}",
                            '64px',
                            '131px'
                        ],
                        [
                            "eid70",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Electron}",
                            '131px',
                            '131px'
                        ],
                        [
                            "eid1557",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid1549",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid276",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${Electron}",
                            '-9px',
                            '-13px'
                        ],
                        [
                            "eid92",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${Electron}",
                            '-13px',
                            '180px'
                        ],
                        [
                            "eid79",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy5}",
                            '154px',
                            '143px'
                        ],
                        [
                            "eid94",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${ElectronCopy5}",
                            '143px',
                            '330px'
                        ],
                        [
                            "eid278",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy}",
                            '25px',
                            '23px'
                        ],
                        [
                            "eid91",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${ElectronCopy}",
                            '23px',
                            '210px'
                        ],
                        [
                            "eid76",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ElectronCopy3}",
                            '90px',
                            '83px'
                        ],
                        [
                            "eid90",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${ElectronCopy3}",
                            '83px',
                            '270px'
                        ],
                        [
                            "eid1561",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            '131px',
                            '131px'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            1000,
                            1000,
                            "linear",
                            "${Rectangle10}",
                            '-30deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "Tooltip_Resistor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            id: 'Tooltip_Light_Switch',
                            type: 'group',
                            rect: ['0px', '0px', '283px', '207', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['127px', '6px', '30px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(230,230,230,1.00)']
                            },
                            {
                                rect: ['0px', '21px', '283px', '186px', 'auto', 'auto'],
                                id: 'Rectangle5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(230,230,230,1.00)']
                            }]
                        },
                        {
                            rect: ['0px', '99px', '30px', '29px', 'auto', 'auto'],
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1.00)']
                        },
                        {
                            rect: ['253px', '99px', '30px', '29px', 'auto', 'auto'],
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1.00)']
                        },
                        {
                            rect: ['25px', '50px', '223px', '118px', 'auto', 'auto'],
                            id: 'Rectangle11',
                            stroke: [5, 'rgba(34,34,34,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(232,232,232,1.00)']
                        },
                        {
                            rect: ['30px', '104px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['230px', '104px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle12Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['45px', '66px', '16px', '57px', 'auto', 'auto'],
                            id: 'Rectangle13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['45px', '66px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['75px', '66px', '16px', '98px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['75px', '145px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['105px', '66px', '16px', '98px', 'auto', 'auto'],
                            id: 'Rectangle17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['105px', '66px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['135px', '66px', '16px', '98px', 'auto', 'auto'],
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['135px', '145px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['181px', '66px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle18Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['195px', '66px', '16px', '98px', 'auto', 'auto'],
                            id: 'Rectangle19Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['217px', '104px', '16px', '60px', 'auto', 'auto'],
                            id: 'Rectangle19Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['195px', '145px', '30px', '19px', 'auto', 'auto'],
                            id: 'Rectangle20Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            rect: ['165px', '66px', '16px', '98px', 'auto', 'auto'],
                            id: 'Rectangle21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,1)']
                        },
                        {
                            id: 'Electron4',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy2',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy3',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy4',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy5',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy6',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy7',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy8',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy9',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy15',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy14',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy13',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy12',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy11',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            id: 'Electron4Copy10',
                            type: 'image',
                            rect: ['-27px', '104px', '19px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '283px', '233px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 25750,
                    autoPlay: false,
                    data: [
                        [
                            "eid589",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${Electron4Copy5}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid590",
                            "top",
                            4250,
                            0,
                            "linear",
                            "${Electron4Copy5}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid591",
                            "top",
                            4500,
                            250,
                            "linear",
                            "${Electron4Copy5}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid592",
                            "top",
                            5000,
                            750,
                            "linear",
                            "${Electron4Copy5}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid593",
                            "top",
                            6250,
                            750,
                            "linear",
                            "${Electron4Copy5}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid594",
                            "top",
                            7500,
                            1000,
                            "linear",
                            "${Electron4Copy5}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid595",
                            "top",
                            9250,
                            1250,
                            "linear",
                            "${Electron4Copy5}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid596",
                            "top",
                            11250,
                            1250,
                            "linear",
                            "${Electron4Copy5}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid597",
                            "top",
                            13500,
                            1250,
                            "linear",
                            "${Electron4Copy5}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid754",
                            "top",
                            12000,
                            0,
                            "linear",
                            "${Electron4Copy12}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid755",
                            "top",
                            12250,
                            0,
                            "linear",
                            "${Electron4Copy12}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid756",
                            "top",
                            12500,
                            250,
                            "linear",
                            "${Electron4Copy12}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid757",
                            "top",
                            13000,
                            750,
                            "linear",
                            "${Electron4Copy12}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid758",
                            "top",
                            14250,
                            750,
                            "linear",
                            "${Electron4Copy12}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid759",
                            "top",
                            15500,
                            1000,
                            "linear",
                            "${Electron4Copy12}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid760",
                            "top",
                            17250,
                            1250,
                            "linear",
                            "${Electron4Copy12}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid761",
                            "top",
                            19250,
                            1250,
                            "linear",
                            "${Electron4Copy12}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid762",
                            "top",
                            21500,
                            1250,
                            "linear",
                            "${Electron4Copy12}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid631",
                            "left",
                            5000,
                            250,
                            "linear",
                            "${Electron4Copy6}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid632",
                            "left",
                            5250,
                            250,
                            "linear",
                            "${Electron4Copy6}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid633",
                            "left",
                            5750,
                            250,
                            "linear",
                            "${Electron4Copy6}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid634",
                            "left",
                            6750,
                            500,
                            "linear",
                            "${Electron4Copy6}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid635",
                            "left",
                            8000,
                            500,
                            "linear",
                            "${Electron4Copy6}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid636",
                            "left",
                            9500,
                            750,
                            "linear",
                            "${Electron4Copy6}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid637",
                            "left",
                            11500,
                            750,
                            "linear",
                            "${Electron4Copy6}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid638",
                            "left",
                            13500,
                            1000,
                            "linear",
                            "${Electron4Copy6}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid639",
                            "left",
                            15750,
                            1000,
                            "linear",
                            "${Electron4Copy6}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid534",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Electron4}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid442",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Electron4}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid446",
                            "left",
                            750,
                            250,
                            "linear",
                            "${Electron4}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid455",
                            "left",
                            1750,
                            500,
                            "linear",
                            "${Electron4}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid462",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${Electron4}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid468",
                            "left",
                            4500,
                            750,
                            "linear",
                            "${Electron4}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid471",
                            "left",
                            6500,
                            750,
                            "linear",
                            "${Electron4}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid475",
                            "left",
                            8500,
                            1000,
                            "linear",
                            "${Electron4}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid479",
                            "left",
                            10750,
                            1000,
                            "linear",
                            "${Electron4}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid763",
                            "left",
                            11000,
                            250,
                            "linear",
                            "${Electron4Copy13}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid764",
                            "left",
                            11250,
                            250,
                            "linear",
                            "${Electron4Copy13}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid765",
                            "left",
                            11750,
                            250,
                            "linear",
                            "${Electron4Copy13}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid766",
                            "left",
                            12750,
                            500,
                            "linear",
                            "${Electron4Copy13}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid767",
                            "left",
                            14000,
                            500,
                            "linear",
                            "${Electron4Copy13}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid768",
                            "left",
                            15500,
                            750,
                            "linear",
                            "${Electron4Copy13}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid769",
                            "left",
                            17500,
                            750,
                            "linear",
                            "${Electron4Copy13}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid770",
                            "left",
                            19500,
                            1000,
                            "linear",
                            "${Electron4Copy13}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid771",
                            "left",
                            21750,
                            1000,
                            "linear",
                            "${Electron4Copy13}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid533",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Electron4}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid441",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Electron4}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid444",
                            "top",
                            500,
                            250,
                            "linear",
                            "${Electron4}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid448",
                            "top",
                            1000,
                            750,
                            "linear",
                            "${Electron4}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid459",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${Electron4}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid465",
                            "top",
                            3500,
                            1000,
                            "linear",
                            "${Electron4}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid469",
                            "top",
                            5250,
                            1250,
                            "linear",
                            "${Electron4}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid473",
                            "top",
                            7250,
                            1250,
                            "linear",
                            "${Electron4}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid477",
                            "top",
                            9500,
                            1250,
                            "linear",
                            "${Electron4}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid562",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Electron4Copy3}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid563",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${Electron4Copy3}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid564",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${Electron4Copy3}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid565",
                            "left",
                            3750,
                            500,
                            "linear",
                            "${Electron4Copy3}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid566",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${Electron4Copy3}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid567",
                            "left",
                            6500,
                            750,
                            "linear",
                            "${Electron4Copy3}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid568",
                            "left",
                            8500,
                            750,
                            "linear",
                            "${Electron4Copy3}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid569",
                            "left",
                            10500,
                            1000,
                            "linear",
                            "${Electron4Copy3}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid570",
                            "left",
                            12750,
                            1000,
                            "linear",
                            "${Electron4Copy3}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid658",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${Electron4Copy8}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid659",
                            "top",
                            7250,
                            0,
                            "linear",
                            "${Electron4Copy8}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid660",
                            "top",
                            7500,
                            250,
                            "linear",
                            "${Electron4Copy8}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid661",
                            "top",
                            8000,
                            750,
                            "linear",
                            "${Electron4Copy8}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid662",
                            "top",
                            9250,
                            750,
                            "linear",
                            "${Electron4Copy8}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid663",
                            "top",
                            10500,
                            1000,
                            "linear",
                            "${Electron4Copy8}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid664",
                            "top",
                            12250,
                            1250,
                            "linear",
                            "${Electron4Copy8}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid665",
                            "top",
                            14250,
                            1250,
                            "linear",
                            "${Electron4Copy8}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid666",
                            "top",
                            16500,
                            1250,
                            "linear",
                            "${Electron4Copy8}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid799",
                            "top",
                            9000,
                            0,
                            "linear",
                            "${Electron4Copy15}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid800",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${Electron4Copy15}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid801",
                            "top",
                            9500,
                            250,
                            "linear",
                            "${Electron4Copy15}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid802",
                            "top",
                            10000,
                            750,
                            "linear",
                            "${Electron4Copy15}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid803",
                            "top",
                            11250,
                            750,
                            "linear",
                            "${Electron4Copy15}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid804",
                            "top",
                            12500,
                            1000,
                            "linear",
                            "${Electron4Copy15}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid805",
                            "top",
                            14250,
                            1250,
                            "linear",
                            "${Electron4Copy15}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid806",
                            "top",
                            16250,
                            1250,
                            "linear",
                            "${Electron4Copy15}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid807",
                            "top",
                            18500,
                            1250,
                            "linear",
                            "${Electron4Copy15}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid685",
                            "top",
                            8000,
                            0,
                            "linear",
                            "${Electron4Copy9}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid686",
                            "top",
                            8250,
                            0,
                            "linear",
                            "${Electron4Copy9}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid687",
                            "top",
                            8500,
                            250,
                            "linear",
                            "${Electron4Copy9}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid688",
                            "top",
                            9000,
                            750,
                            "linear",
                            "${Electron4Copy9}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid689",
                            "top",
                            10250,
                            750,
                            "linear",
                            "${Electron4Copy9}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid690",
                            "top",
                            11500,
                            1000,
                            "linear",
                            "${Electron4Copy9}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid691",
                            "top",
                            13250,
                            1250,
                            "linear",
                            "${Electron4Copy9}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid692",
                            "top",
                            15250,
                            1250,
                            "linear",
                            "${Electron4Copy9}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid693",
                            "top",
                            17500,
                            1250,
                            "linear",
                            "${Electron4Copy9}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid640",
                            "left",
                            6000,
                            250,
                            "linear",
                            "${Electron4Copy7}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid641",
                            "left",
                            6250,
                            250,
                            "linear",
                            "${Electron4Copy7}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid642",
                            "left",
                            6750,
                            250,
                            "linear",
                            "${Electron4Copy7}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid643",
                            "left",
                            7750,
                            500,
                            "linear",
                            "${Electron4Copy7}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid644",
                            "left",
                            9000,
                            500,
                            "linear",
                            "${Electron4Copy7}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid645",
                            "left",
                            10500,
                            750,
                            "linear",
                            "${Electron4Copy7}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid646",
                            "left",
                            12500,
                            750,
                            "linear",
                            "${Electron4Copy7}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid647",
                            "left",
                            14500,
                            1000,
                            "linear",
                            "${Electron4Copy7}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid648",
                            "left",
                            16750,
                            1000,
                            "linear",
                            "${Electron4Copy7}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid622",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Electron4Copy6}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid623",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${Electron4Copy6}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid624",
                            "top",
                            5500,
                            250,
                            "linear",
                            "${Electron4Copy6}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid625",
                            "top",
                            6000,
                            750,
                            "linear",
                            "${Electron4Copy6}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid626",
                            "top",
                            7250,
                            750,
                            "linear",
                            "${Electron4Copy6}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid627",
                            "top",
                            8500,
                            1000,
                            "linear",
                            "${Electron4Copy6}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid628",
                            "top",
                            10250,
                            1250,
                            "linear",
                            "${Electron4Copy6}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid629",
                            "top",
                            12250,
                            1250,
                            "linear",
                            "${Electron4Copy6}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid630",
                            "top",
                            14500,
                            1250,
                            "linear",
                            "${Electron4Copy6}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid772",
                            "top",
                            11000,
                            0,
                            "linear",
                            "${Electron4Copy13}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid773",
                            "top",
                            11250,
                            0,
                            "linear",
                            "${Electron4Copy13}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid774",
                            "top",
                            11500,
                            250,
                            "linear",
                            "${Electron4Copy13}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid775",
                            "top",
                            12000,
                            750,
                            "linear",
                            "${Electron4Copy13}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid776",
                            "top",
                            13250,
                            750,
                            "linear",
                            "${Electron4Copy13}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid777",
                            "top",
                            14500,
                            1000,
                            "linear",
                            "${Electron4Copy13}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid778",
                            "top",
                            16250,
                            1250,
                            "linear",
                            "${Electron4Copy13}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid779",
                            "top",
                            18250,
                            1250,
                            "linear",
                            "${Electron4Copy13}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid780",
                            "top",
                            20500,
                            1250,
                            "linear",
                            "${Electron4Copy13}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid808",
                            "left",
                            9000,
                            250,
                            "linear",
                            "${Electron4Copy15}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid809",
                            "left",
                            9250,
                            250,
                            "linear",
                            "${Electron4Copy15}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid810",
                            "left",
                            9750,
                            250,
                            "linear",
                            "${Electron4Copy15}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid811",
                            "left",
                            10750,
                            500,
                            "linear",
                            "${Electron4Copy15}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid812",
                            "left",
                            12000,
                            500,
                            "linear",
                            "${Electron4Copy15}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid813",
                            "left",
                            13500,
                            750,
                            "linear",
                            "${Electron4Copy15}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid814",
                            "left",
                            15500,
                            750,
                            "linear",
                            "${Electron4Copy15}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid815",
                            "left",
                            17500,
                            1000,
                            "linear",
                            "${Electron4Copy15}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid816",
                            "left",
                            19750,
                            1000,
                            "linear",
                            "${Electron4Copy15}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid580",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Electron4Copy4}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid581",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${Electron4Copy4}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid582",
                            "top",
                            3500,
                            250,
                            "linear",
                            "${Electron4Copy4}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid583",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${Electron4Copy4}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid584",
                            "top",
                            5250,
                            750,
                            "linear",
                            "${Electron4Copy4}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid585",
                            "top",
                            6500,
                            1000,
                            "linear",
                            "${Electron4Copy4}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid586",
                            "top",
                            8250,
                            1250,
                            "linear",
                            "${Electron4Copy4}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid587",
                            "top",
                            10250,
                            1250,
                            "linear",
                            "${Electron4Copy4}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid588",
                            "top",
                            12500,
                            1250,
                            "linear",
                            "${Electron4Copy4}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid676",
                            "left",
                            8000,
                            250,
                            "linear",
                            "${Electron4Copy9}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid677",
                            "left",
                            8250,
                            250,
                            "linear",
                            "${Electron4Copy9}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid678",
                            "left",
                            8750,
                            250,
                            "linear",
                            "${Electron4Copy9}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid679",
                            "left",
                            9750,
                            500,
                            "linear",
                            "${Electron4Copy9}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid680",
                            "left",
                            11000,
                            500,
                            "linear",
                            "${Electron4Copy9}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid681",
                            "left",
                            12500,
                            750,
                            "linear",
                            "${Electron4Copy9}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid682",
                            "left",
                            14500,
                            750,
                            "linear",
                            "${Electron4Copy9}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid683",
                            "left",
                            16500,
                            1000,
                            "linear",
                            "${Electron4Copy9}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid684",
                            "left",
                            18750,
                            1000,
                            "linear",
                            "${Electron4Copy9}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid790",
                            "left",
                            10000,
                            250,
                            "linear",
                            "${Electron4Copy14}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid791",
                            "left",
                            10250,
                            250,
                            "linear",
                            "${Electron4Copy14}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid792",
                            "left",
                            10750,
                            250,
                            "linear",
                            "${Electron4Copy14}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid793",
                            "left",
                            11750,
                            500,
                            "linear",
                            "${Electron4Copy14}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid794",
                            "left",
                            13000,
                            500,
                            "linear",
                            "${Electron4Copy14}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid795",
                            "left",
                            14500,
                            750,
                            "linear",
                            "${Electron4Copy14}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid796",
                            "left",
                            16500,
                            750,
                            "linear",
                            "${Electron4Copy14}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid797",
                            "left",
                            18500,
                            1000,
                            "linear",
                            "${Electron4Copy14}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid798",
                            "left",
                            20750,
                            1000,
                            "linear",
                            "${Electron4Copy14}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid745",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${Electron4Copy12}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid746",
                            "left",
                            12250,
                            250,
                            "linear",
                            "${Electron4Copy12}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid747",
                            "left",
                            12750,
                            250,
                            "linear",
                            "${Electron4Copy12}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid748",
                            "left",
                            13750,
                            500,
                            "linear",
                            "${Electron4Copy12}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid749",
                            "left",
                            15000,
                            500,
                            "linear",
                            "${Electron4Copy12}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid750",
                            "left",
                            16500,
                            750,
                            "linear",
                            "${Electron4Copy12}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid751",
                            "left",
                            18500,
                            750,
                            "linear",
                            "${Electron4Copy12}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid752",
                            "left",
                            20500,
                            1000,
                            "linear",
                            "${Electron4Copy12}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid753",
                            "left",
                            22750,
                            1000,
                            "linear",
                            "${Electron4Copy12}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid736",
                            "left",
                            13000,
                            250,
                            "linear",
                            "${Electron4Copy11}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid737",
                            "left",
                            13250,
                            250,
                            "linear",
                            "${Electron4Copy11}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid738",
                            "left",
                            13750,
                            250,
                            "linear",
                            "${Electron4Copy11}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid739",
                            "left",
                            14750,
                            500,
                            "linear",
                            "${Electron4Copy11}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid740",
                            "left",
                            16000,
                            500,
                            "linear",
                            "${Electron4Copy11}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid741",
                            "left",
                            17500,
                            750,
                            "linear",
                            "${Electron4Copy11}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid742",
                            "left",
                            19500,
                            750,
                            "linear",
                            "${Electron4Copy11}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid743",
                            "left",
                            21500,
                            1000,
                            "linear",
                            "${Electron4Copy11}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid744",
                            "left",
                            23750,
                            1000,
                            "linear",
                            "${Electron4Copy11}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid709",
                            "top",
                            14000,
                            0,
                            "linear",
                            "${Electron4Copy10}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid710",
                            "top",
                            14250,
                            0,
                            "linear",
                            "${Electron4Copy10}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid711",
                            "top",
                            14500,
                            250,
                            "linear",
                            "${Electron4Copy10}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid712",
                            "top",
                            15000,
                            750,
                            "linear",
                            "${Electron4Copy10}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid713",
                            "top",
                            16250,
                            750,
                            "linear",
                            "${Electron4Copy10}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid714",
                            "top",
                            17500,
                            1000,
                            "linear",
                            "${Electron4Copy10}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid715",
                            "top",
                            19250,
                            1250,
                            "linear",
                            "${Electron4Copy10}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid716",
                            "top",
                            21250,
                            1250,
                            "linear",
                            "${Electron4Copy10}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid717",
                            "top",
                            23500,
                            1250,
                            "linear",
                            "${Electron4Copy10}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid649",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${Electron4Copy7}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid650",
                            "top",
                            6250,
                            0,
                            "linear",
                            "${Electron4Copy7}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid651",
                            "top",
                            6500,
                            250,
                            "linear",
                            "${Electron4Copy7}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid652",
                            "top",
                            7000,
                            750,
                            "linear",
                            "${Electron4Copy7}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid653",
                            "top",
                            8250,
                            750,
                            "linear",
                            "${Electron4Copy7}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid654",
                            "top",
                            9500,
                            1000,
                            "linear",
                            "${Electron4Copy7}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid655",
                            "top",
                            11250,
                            1250,
                            "linear",
                            "${Electron4Copy7}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid656",
                            "top",
                            13250,
                            1250,
                            "linear",
                            "${Electron4Copy7}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid657",
                            "top",
                            15500,
                            1250,
                            "linear",
                            "${Electron4Copy7}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid553",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Electron4Copy3}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid554",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${Electron4Copy3}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid555",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${Electron4Copy3}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid556",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${Electron4Copy3}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid557",
                            "top",
                            4250,
                            750,
                            "linear",
                            "${Electron4Copy3}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid558",
                            "top",
                            5500,
                            1000,
                            "linear",
                            "${Electron4Copy3}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid559",
                            "top",
                            7250,
                            1250,
                            "linear",
                            "${Electron4Copy3}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid560",
                            "top",
                            9250,
                            1250,
                            "linear",
                            "${Electron4Copy3}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid561",
                            "top",
                            11500,
                            1250,
                            "linear",
                            "${Electron4Copy3}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid727",
                            "top",
                            13000,
                            0,
                            "linear",
                            "${Electron4Copy11}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid728",
                            "top",
                            13250,
                            0,
                            "linear",
                            "${Electron4Copy11}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid729",
                            "top",
                            13500,
                            250,
                            "linear",
                            "${Electron4Copy11}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid730",
                            "top",
                            14000,
                            750,
                            "linear",
                            "${Electron4Copy11}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid731",
                            "top",
                            15250,
                            750,
                            "linear",
                            "${Electron4Copy11}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid732",
                            "top",
                            16500,
                            1000,
                            "linear",
                            "${Electron4Copy11}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid733",
                            "top",
                            18250,
                            1250,
                            "linear",
                            "${Electron4Copy11}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid734",
                            "top",
                            20250,
                            1250,
                            "linear",
                            "${Electron4Copy11}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid735",
                            "top",
                            22500,
                            1250,
                            "linear",
                            "${Electron4Copy11}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid571",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${Electron4Copy4}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid572",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${Electron4Copy4}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid573",
                            "left",
                            3750,
                            250,
                            "linear",
                            "${Electron4Copy4}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid574",
                            "left",
                            4750,
                            500,
                            "linear",
                            "${Electron4Copy4}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid575",
                            "left",
                            6000,
                            500,
                            "linear",
                            "${Electron4Copy4}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid576",
                            "left",
                            7500,
                            750,
                            "linear",
                            "${Electron4Copy4}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid577",
                            "left",
                            9500,
                            750,
                            "linear",
                            "${Electron4Copy4}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid578",
                            "left",
                            11500,
                            1000,
                            "linear",
                            "${Electron4Copy4}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid579",
                            "left",
                            13750,
                            1000,
                            "linear",
                            "${Electron4Copy4}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid718",
                            "left",
                            14000,
                            250,
                            "linear",
                            "${Electron4Copy10}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid719",
                            "left",
                            14250,
                            250,
                            "linear",
                            "${Electron4Copy10}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid720",
                            "left",
                            14750,
                            250,
                            "linear",
                            "${Electron4Copy10}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid721",
                            "left",
                            15750,
                            500,
                            "linear",
                            "${Electron4Copy10}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid722",
                            "left",
                            17000,
                            500,
                            "linear",
                            "${Electron4Copy10}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid723",
                            "left",
                            18500,
                            750,
                            "linear",
                            "${Electron4Copy10}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid724",
                            "left",
                            20500,
                            750,
                            "linear",
                            "${Electron4Copy10}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid725",
                            "left",
                            22500,
                            1000,
                            "linear",
                            "${Electron4Copy10}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid726",
                            "left",
                            24750,
                            1000,
                            "linear",
                            "${Electron4Copy10}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid535",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${Electron4Copy2}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid536",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${Electron4Copy2}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid537",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${Electron4Copy2}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid538",
                            "left",
                            2750,
                            500,
                            "linear",
                            "${Electron4Copy2}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid539",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${Electron4Copy2}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid540",
                            "left",
                            5500,
                            750,
                            "linear",
                            "${Electron4Copy2}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid541",
                            "left",
                            7500,
                            750,
                            "linear",
                            "${Electron4Copy2}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid542",
                            "left",
                            9500,
                            1000,
                            "linear",
                            "${Electron4Copy2}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid543",
                            "left",
                            11750,
                            1000,
                            "linear",
                            "${Electron4Copy2}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid544",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Electron4Copy2}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid545",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${Electron4Copy2}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid546",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${Electron4Copy2}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid547",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${Electron4Copy2}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid548",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${Electron4Copy2}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid549",
                            "top",
                            4500,
                            1000,
                            "linear",
                            "${Electron4Copy2}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid550",
                            "top",
                            6250,
                            1250,
                            "linear",
                            "${Electron4Copy2}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid551",
                            "top",
                            8250,
                            1250,
                            "linear",
                            "${Electron4Copy2}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid552",
                            "top",
                            10500,
                            1250,
                            "linear",
                            "${Electron4Copy2}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid667",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${Electron4Copy8}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid668",
                            "left",
                            7250,
                            250,
                            "linear",
                            "${Electron4Copy8}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid669",
                            "left",
                            7750,
                            250,
                            "linear",
                            "${Electron4Copy8}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid670",
                            "left",
                            8750,
                            500,
                            "linear",
                            "${Electron4Copy8}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid671",
                            "left",
                            10000,
                            500,
                            "linear",
                            "${Electron4Copy8}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid672",
                            "left",
                            11500,
                            750,
                            "linear",
                            "${Electron4Copy8}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid673",
                            "left",
                            13500,
                            750,
                            "linear",
                            "${Electron4Copy8}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid674",
                            "left",
                            15500,
                            1000,
                            "linear",
                            "${Electron4Copy8}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid675",
                            "left",
                            17750,
                            1000,
                            "linear",
                            "${Electron4Copy8}",
                            '215px',
                            '290px'
                        ],
                        [
                            "eid781",
                            "top",
                            10000,
                            0,
                            "linear",
                            "${Electron4Copy14}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid782",
                            "top",
                            10250,
                            0,
                            "linear",
                            "${Electron4Copy14}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid783",
                            "top",
                            10500,
                            250,
                            "linear",
                            "${Electron4Copy14}",
                            '104px',
                            '66px'
                        ],
                        [
                            "eid784",
                            "top",
                            11000,
                            750,
                            "linear",
                            "${Electron4Copy14}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid785",
                            "top",
                            12250,
                            750,
                            "linear",
                            "${Electron4Copy14}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid786",
                            "top",
                            13500,
                            1000,
                            "linear",
                            "${Electron4Copy14}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid787",
                            "top",
                            15250,
                            1250,
                            "linear",
                            "${Electron4Copy14}",
                            '145px',
                            '66px'
                        ],
                        [
                            "eid788",
                            "top",
                            17250,
                            1250,
                            "linear",
                            "${Electron4Copy14}",
                            '66px',
                            '145px'
                        ],
                        [
                            "eid789",
                            "top",
                            19500,
                            1250,
                            "linear",
                            "${Electron4Copy14}",
                            '145px',
                            '104px'
                        ],
                        [
                            "eid598",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${Electron4Copy5}",
                            '-27px',
                            '5px'
                        ],
                        [
                            "eid599",
                            "left",
                            4250,
                            250,
                            "linear",
                            "${Electron4Copy5}",
                            '5px',
                            '43px'
                        ],
                        [
                            "eid600",
                            "left",
                            4750,
                            250,
                            "linear",
                            "${Electron4Copy5}",
                            '43px',
                            '73px'
                        ],
                        [
                            "eid601",
                            "left",
                            5750,
                            500,
                            "linear",
                            "${Electron4Copy5}",
                            '73px',
                            '103px'
                        ],
                        [
                            "eid602",
                            "left",
                            7000,
                            500,
                            "linear",
                            "${Electron4Copy5}",
                            '103px',
                            '133px'
                        ],
                        [
                            "eid603",
                            "left",
                            8500,
                            750,
                            "linear",
                            "${Electron4Copy5}",
                            '133px',
                            '163px'
                        ],
                        [
                            "eid604",
                            "left",
                            10500,
                            750,
                            "linear",
                            "${Electron4Copy5}",
                            '163px',
                            '193px'
                        ],
                        [
                            "eid605",
                            "left",
                            12500,
                            1000,
                            "linear",
                            "${Electron4Copy5}",
                            '193px',
                            '215px'
                        ],
                        [
                            "eid606",
                            "left",
                            14750,
                            1000,
                            "linear",
                            "${Electron4Copy5}",
                            '215px',
                            '290px'
                        ]
                    ]
                }
            },
            "Tooltip_Capacitor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0.89939024390244',
                            rect: ['0', '-1', '304', '174', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['21px', '0px', '283px', '174px', 'auto', 'auto'],
                                fill: ['rgba(230,230,230,1.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['6px', '74px', '30px', '29px', 'auto', 'auto'],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(230,230,230,1.00)']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['55px', '152px', '19px', '21px', 'auto', 'auto'],
                            fill: ['rgba(28,28,28,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle22Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['265px', '152px', '19px', '21px', 'auto', 'auto'],
                            fill: ['rgba(28,28,28,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['42px', '16px', '42px', '136px', 'auto', 'auto'],
                            fill: ['rgba(115,63,152,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle23Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['253px', '16px', '42px', '136px', 'auto', 'auto'],
                            fill: ['rgba(17,17,17,1.00)']
                        },
                        {
                            rect: ['256px', '175px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['62px', '38px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['46px', '55px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['62px', '73px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['46px', '90px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['63px', '105px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['47px', '122px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron5Copy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '304px', '175px']
                        }
                    }
                },
                timeline: {
                    duration: 9750,
                    autoPlay: false,
                    data: [
                        [
                            "eid884",
                            "left",
                            750,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '55px',
                            '54px'
                        ],
                        [
                            "eid885",
                            "left",
                            1750,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '54px',
                            '62px'
                        ],
                        [
                            "eid932",
                            "left",
                            4750,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '62px',
                            '272px'
                        ],
                        [
                            "eid989",
                            "left",
                            7750,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '272px',
                            '265px'
                        ],
                        [
                            "eid894",
                            "left",
                            1250,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid895",
                            "left",
                            2250,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '55px',
                            '63px'
                        ],
                        [
                            "eid928",
                            "left",
                            5250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '63px',
                            '273px'
                        ],
                        [
                            "eid985",
                            "left",
                            7250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '273px',
                            '265px'
                        ],
                        [
                            "eid888",
                            "top",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '175px',
                            '113px'
                        ],
                        [
                            "eid889",
                            "top",
                            2000,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '113px',
                            '90px'
                        ],
                        [
                            "eid925",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Electron5Copy4}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid988",
                            "top",
                            7500,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '90px',
                            '133px'
                        ],
                        [
                            "eid1004",
                            "top",
                            8000,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '133px',
                            '175px'
                        ],
                        [
                            "eid878",
                            "left",
                            250,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid879",
                            "left",
                            1250,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '55px',
                            '62px'
                        ],
                        [
                            "eid931",
                            "left",
                            4250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '62px',
                            '272px'
                        ],
                        [
                            "eid993",
                            "left",
                            8250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '272px',
                            '265px'
                        ],
                        [
                            "eid886",
                            "top",
                            750,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '175px',
                            '89px'
                        ],
                        [
                            "eid887",
                            "top",
                            1750,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '89px',
                            '73px'
                        ],
                        [
                            "eid924",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${Electron5Copy3}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid990",
                            "top",
                            7750,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '73px',
                            '133px'
                        ],
                        [
                            "eid1002",
                            "top",
                            8250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy3}",
                            '133px',
                            '175px'
                        ],
                        [
                            "eid890",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid891",
                            "left",
                            2000,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '55px',
                            '46px'
                        ],
                        [
                            "eid929",
                            "left",
                            5000,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '46px',
                            '256px'
                        ],
                        [
                            "eid987",
                            "left",
                            7500,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy4}",
                            '256px',
                            '265px'
                        ],
                        [
                            "eid892",
                            "top",
                            1250,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '175px',
                            '128px'
                        ],
                        [
                            "eid893",
                            "top",
                            2250,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '128px',
                            '105px'
                        ],
                        [
                            "eid926",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${Electron5Copy5}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid986",
                            "top",
                            7250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '105px',
                            '133px'
                        ],
                        [
                            "eid998",
                            "top",
                            7750,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy5}",
                            '133px',
                            '175px'
                        ],
                        [
                            "eid898",
                            "top",
                            1500,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '175px',
                            '142px'
                        ],
                        [
                            "eid899",
                            "top",
                            2500,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '142px',
                            '122px'
                        ],
                        [
                            "eid927",
                            "top",
                            5500,
                            0,
                            "linear",
                            "${Electron5Copy6}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid984",
                            "top",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '122px',
                            '133px'
                        ],
                        [
                            "eid999",
                            "top",
                            7500,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '133px',
                            '175px'
                        ],
                        [
                            "eid896",
                            "left",
                            1500,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '55px',
                            '54px'
                        ],
                        [
                            "eid897",
                            "left",
                            2500,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '54px',
                            '47px'
                        ],
                        [
                            "eid933",
                            "left",
                            5500,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '47px',
                            '257px'
                        ],
                        [
                            "eid983",
                            "left",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy6}",
                            '257px',
                            '265px'
                        ],
                        [
                            "eid880",
                            "left",
                            500,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '55px',
                            '53px'
                        ],
                        [
                            "eid881",
                            "left",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '53px',
                            '46px'
                        ],
                        [
                            "eid930",
                            "left",
                            4500,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '46px',
                            '256px'
                        ],
                        [
                            "eid991",
                            "left",
                            8000,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '256px',
                            '265px'
                        ],
                        [
                            "eid882",
                            "top",
                            500,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '175px',
                            '74px'
                        ],
                        [
                            "eid883",
                            "top",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '74px',
                            '55px'
                        ],
                        [
                            "eid923",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${Electron5Copy2}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid992",
                            "top",
                            8000,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '55px',
                            '133px'
                        ],
                        [
                            "eid1000",
                            "top",
                            8500,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy2}",
                            '133px',
                            '175px'
                        ],
                        [
                            "eid872",
                            "left",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${Electron5}",
                            '55px',
                            '54px'
                        ],
                        [
                            "eid874",
                            "left",
                            1000,
                            250,
                            "easeInOutQuad",
                            "${Electron5}",
                            '54px',
                            '46px'
                        ],
                        [
                            "eid914",
                            "left",
                            4000,
                            500,
                            "easeInOutQuad",
                            "${Electron5}",
                            '46px',
                            '256px'
                        ],
                        [
                            "eid995",
                            "left",
                            8500,
                            500,
                            "easeInOutQuad",
                            "${Electron5}",
                            '256px',
                            '265px'
                        ],
                        [
                            "eid876",
                            "top",
                            250,
                            1000,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '175px',
                            '57px'
                        ],
                        [
                            "eid877",
                            "top",
                            1250,
                            250,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '57px',
                            '38px'
                        ],
                        [
                            "eid922",
                            "top",
                            4250,
                            0,
                            "linear",
                            "${Electron5Copy}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid994",
                            "top",
                            8250,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '38px',
                            '133px'
                        ],
                        [
                            "eid1001",
                            "top",
                            8750,
                            500,
                            "easeInOutQuad",
                            "${Electron5Copy}",
                            '133px',
                            '175px'
                        ],
                        [
                            "eid873",
                            "top",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${Electron5}",
                            '175px',
                            '33px'
                        ],
                        [
                            "eid875",
                            "top",
                            1000,
                            250,
                            "easeInOutQuad",
                            "${Electron5}",
                            '33px',
                            '21px'
                        ],
                        [
                            "eid915",
                            "top",
                            4000,
                            500,
                            "easeInOutQuad",
                            "${Electron5}",
                            '21px',
                            '19px'
                        ],
                        [
                            "eid996",
                            "top",
                            8500,
                            500,
                            "easeInOutQuad",
                            "${Electron5}",
                            '19px',
                            '133px'
                        ],
                        [
                            "eid1003",
                            "top",
                            9000,
                            500,
                            "easeInOutQuad",
                            "${Electron5}",
                            '133px',
                            '175px'
                        ]
                    ]
                }
            },
            "Tooltip_Light": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group2',
                            opacity: '0.9',
                            rect: ['0', '0', '236', '159', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['20px', '0px', '216px', '159px', 'auto', 'auto'],
                                fill: ['rgba(230,230,230,1.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['6px', '40px', '30px', '29px', 'auto', 'auto'],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(230,230,230,1.00)']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'Light_Cable',
                            opacity: '1',
                            rect: ['42px', '25px', '186px', '108px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Light_Cable.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['42px', '125px', '10px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            rect: ['32px', '145px', '30px', '29px', 'auto', 'auto'],
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['204px', '128px', '10px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            rect: ['194px', '148px', '30px', '29px', 'auto', 'auto'],
                            id: 'Rectangle9Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'image',
                            id: 'Light_Cable_Red',
                            opacity: '0',
                            rect: ['42px', '25px', '186px', '108px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Light_Cable_Red.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy20',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'Electron',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy19',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy18',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy17',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy16',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy15',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy14',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy13',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy11',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy10',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['37px', '162px', '19px', '19px', 'auto', 'auto'],
                            id: 'ElectronCopy21',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '236px', '159px']
                        }
                    }
                },
                timeline: {
                    duration: 19000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1209",
                            "location",
                            1500,
                            9000,
                            "linear",
                            "${ElectronCopy3}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1212",
                            "location",
                            4032,
                            8258,
                            "linear",
                            "${ElectronCopy6}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1217",
                            "location",
                            9194,
                            8258,
                            "linear",
                            "${ElectronCopy11}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1225",
                            "location",
                            5065,
                            8258,
                            "linear",
                            "${ElectronCopy19}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1208",
                            "location",
                            1000,
                            9000,
                            "linear",
                            "${ElectronCopy2}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1219",
                            "location",
                            8161,
                            8258,
                            "linear",
                            "${ElectronCopy13}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1393",
                            "opacity",
                            0,
                            9000,
                            "linear",
                            "${Light_Cable_Red}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1176",
                            "location",
                            0,
                            9000,
                            "linear",
                            "${Electron}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1214",
                            "location",
                            3000,
                            8258,
                            "linear",
                            "${ElectronCopy8}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1213",
                            "location",
                            3516,
                            8258,
                            "linear",
                            "${ElectronCopy7}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1226",
                            "location",
                            10742,
                            8258,
                            "linear",
                            "${ElectronCopy20}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1207",
                            "location",
                            500,
                            9000,
                            "linear",
                            "${ElectronCopy}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1215",
                            "location",
                            2500,
                            9000,
                            "linear",
                            "${ElectronCopy9}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1223",
                            "location",
                            6097,
                            8258,
                            "linear",
                            "${ElectronCopy17}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1222",
                            "location",
                            6613,
                            8258,
                            "linear",
                            "${ElectronCopy16}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1224",
                            "location",
                            5581,
                            8258,
                            "linear",
                            "${ElectronCopy18}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1211",
                            "location",
                            4548,
                            8258,
                            "linear",
                            "${ElectronCopy5}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1216",
                            "location",
                            9710,
                            8258,
                            "linear",
                            "${ElectronCopy10}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1221",
                            "location",
                            7129,
                            8258,
                            "linear",
                            "${ElectronCopy15}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1210",
                            "location",
                            2000,
                            9000,
                            "linear",
                            "${ElectronCopy4}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1227",
                            "location",
                            10226,
                            8258,
                            "linear",
                            "${ElectronCopy21}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1220",
                            "location",
                            7645,
                            8258,
                            "linear",
                            "${ElectronCopy14}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ],
                        [
                            "eid1218",
                            "location",
                            8677,
                            8258,
                            "linear",
                            "${ElectronCopy12}",
                            [[46.5, 171.5, 0, 0, 0, 0,0],[54.85, 115.08, 27.39, -33.33, 49.12, -59.76,58.63],[98.73, 43.73, 8.16, -39.73, 8.92, -43.41,142.69],[66.39, 45.28, -25.84, 33.76, -67.33, 87.97,192.5],[73.06, 125.51, 31.51, 24.28, 61.98, 47.77,277.48],[121.17, 81.73, 22.57, -32.62, 51.08, -73.85,346.22],[140.62, 44.57, 25.03, -50.61, 31.89, -64.49,388.21],[107.94, 46.37, -15.75, 26.38, -43.55, 72.95,439.53],[100.87, 96.28, 3.19, 23.97, 8.77, 65.99,490.66],[112.21, 123.43, 22.16, 21.02, 20.21, 19.17,520.53],[145.01, 104.61, 19.54, -28.55, 42.54, -62.15,562.85],[182.34, 43.98, 11.39, -25.06, 28.75, -63.27,634.12],[153.76, 39.01, -29.68, 23.84, -79.42, 63.8,677.32],[141.95, 106.27, 13.71, 33.9, 23.25, 57.5,747.86],[181.7, 109.29, 3.93, -6.02, 69.95, -107.17,805.59],[189.23, 99.65, 33.32, -48.86, 8.07, -11.84,817.83],[223.14, 46.09, 9.45, -23.6, 22.2, -55.46,881.35],[199.05, 34.51, -28.71, 16.61, -71.44, 41.33,919.71],[193.76, 94.63, 16.18, 37.01, 50.09, 114.56,985.52],[207.66, 127.84, 9.09, 26.21, 12.71, 36.66,1021.53],[209.05, 151.28, -0.86, 33.24, -0.57, 21.87,1045.17],[208.5, 171.5, 0, 0, 0, 0,1065.4]]
                        ]
                    ]
                }
            },
            "Tooltip_Battery": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['91px', '6px', '30px', '29px', 'auto', 'auto'],
                            transform: [[], ['45']],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(230,230,230,1.00)']
                        },
                        {
                            rect: ['0px', '21px', '285px', '191px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(230,230,230,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '285px', '212px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-246452348");
