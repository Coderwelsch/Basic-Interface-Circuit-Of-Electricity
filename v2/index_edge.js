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
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Light_Bulb_Shine',
                            type: 'ellipse',
                            rect: ['14px', '-27px', '190px', '189px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)",[50,50,true,'farthest-corner',[['rgba(255,227,0,1.00)',0],['rgba(255,227,0,0.00)',65]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Light_Wire_Red',
                            type: 'image',
                            rect: ['77px', '50px', '60px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Light_Wire_Red.svg",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'Rectangle4Copy34',
                            type: 'rect',
                            rect: ['95px', '234px', '116px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy19',
                            type: 'rect',
                            rect: ['207px', '234px', '8px', '25px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy16',
                            type: 'rect',
                            rect: ['95px', '197px', '8px', '37px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Light_Bulb_Wire_Left',
                            type: 'rect',
                            rect: ['81px', '83px', '4px', '77px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-15']]
                        },
                        {
                            id: 'Rectangle3Copy18',
                            type: 'rect',
                            rect: ['123px', '80px', '4px', '77px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['15']]
                        },
                        {
                            id: 'Rectangle3Copy15',
                            type: 'rect',
                            rect: ['110px', '197px', '8px', '25px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy12',
                            type: 'rect',
                            rect: ['365px', '10px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy11',
                            type: 'rect',
                            rect: ['408px', '10px', '130px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy13',
                            type: 'rect',
                            rect: ['266px', '10px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy33',
                            type: 'rect',
                            rect: ['114px', '214px', '153px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy11',
                            type: 'rect',
                            rect: ['408px', '10px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy13',
                            type: 'rect',
                            rect: ['260px', '10px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy14',
                            type: 'rect',
                            rect: ['259px', '164px', '8px', '58px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy10',
                            type: 'rect',
                            rect: ['530px', '14px', '8px', '131px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Capacitor',
                            type: 'image',
                            rect: ['360px', '24px', '60px', '113px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Capacitor.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['438px', '249px', '60px', '18px', 'auto', 'auto'],
                            fill: ["rgba(255,237,193,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['438px', '163px', '60px', '18px', 'auto', 'auto'],
                            fill: ["rgba(255,237,193,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['438px', '181px', '60px', '68px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy3',
                            type: 'rect',
                            rect: ['464px', '283px', '74px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy10',
                            type: 'rect',
                            rect: ['464px', '137px', '74px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy4',
                            type: 'rect',
                            rect: ['464px', '253px', '28px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy5',
                            type: 'rect',
                            rect: ['444px', '237px', '48px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy6',
                            type: 'rect',
                            rect: ['444px', '221px', '48px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Switch_Overlay',
                            type: 'rect',
                            rect: ['423px', '342px', '81px', '58px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.10518292198336',
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['335px', '230px', '8px', '24px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['382px', '230px', '8px', '157px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy2',
                            type: 'rect',
                            rect: ['530px', '283px', '8px', '104px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy3',
                            type: 'rect',
                            rect: ['464px', '258px', '8px', '33px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy4',
                            type: 'rect',
                            rect: ['484px', '241px', '8px', '20px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy5',
                            type: 'rect',
                            rect: ['444px', '229px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy8',
                            type: 'rect',
                            rect: ['444px', '205px', '48px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy7',
                            type: 'rect',
                            rect: ['444px', '189px', '48px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy7',
                            type: 'rect',
                            rect: ['484px', '213px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy9',
                            type: 'rect',
                            rect: ['464px', '173px', '28px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy8',
                            type: 'rect',
                            rect: ['484px', '181px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy9',
                            type: 'rect',
                            rect: ['463px', '137px', '8px', '44px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy6',
                            type: 'rect',
                            rect: ['444px', '197px', '8px', '16px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['335px', '230px', '55px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy',
                            type: 'rect',
                            rect: ['382px', '379px', '55px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy2',
                            type: 'rect',
                            rect: ['492px', '379px', '46px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Switch_Cable',
                            type: 'rect',
                            rect: ['436px', '379px', '55px', '8px', 'auto', 'auto'],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-36']]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['429px', '376px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['482px', '376px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(60,60,60,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Magnet',
                            type: 'group',
                            rect: ['226', '25', '74', '139', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle6',
                                type: 'rect',
                                rect: ['0px', '0px', '74px', '139px', 'auto', 'auto'],
                                fill: ["rgba(235,235,235,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy14',
                                type: 'rect',
                                rect: ['0px', '4px', '38px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy12',
                                type: 'rect',
                                rect: ['36px', '0px', '4px', '8px', 'auto', 'auto'],
                                autoOrient: false,
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy15',
                                type: 'rect',
                                rect: ['0px', '11px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy16',
                                type: 'rect',
                                rect: ['0px', '19px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy19',
                                type: 'rect',
                                rect: ['0px', '26px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy18',
                                type: 'rect',
                                rect: ['0px', '34px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy17',
                                type: 'rect',
                                rect: ['0px', '41px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy25',
                                type: 'rect',
                                rect: ['0px', '48px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy24',
                                type: 'rect',
                                rect: ['0px', '56px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy23',
                                type: 'rect',
                                rect: ['0px', '63px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy22',
                                type: 'rect',
                                rect: ['0px', '71px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy21',
                                type: 'rect',
                                rect: ['0px', '78px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy20',
                                type: 'rect',
                                rect: ['0px', '86px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy31',
                                type: 'rect',
                                rect: ['0px', '93px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy30',
                                type: 'rect',
                                rect: ['0px', '100px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy29',
                                type: 'rect',
                                rect: ['0px', '108px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy28',
                                type: 'rect',
                                rect: ['0px', '115px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy27',
                                type: 'rect',
                                rect: ['0px', '123px', '74px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy26',
                                type: 'rect',
                                rect: ['37px', '130px', '37px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle4Copy32',
                                type: 'rect',
                                rect: ['35px', '130px', '4px', '9px', 'auto', 'auto'],
                                fill: ["rgba(255,166,0,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Light_Group',
                            type: 'group',
                            rect: ['43', '10', '128', '189', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Light_Bulb',
                                type: 'image',
                                rect: ['0px', '0px', '128px', '189px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Light_Bulb.svg",'0px','0px']
                            },
                            {
                                id: 'Rectangle5',
                                type: 'rect',
                                rect: ['46px', '154px', '37px', '33px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Light_Wire',
                            type: 'image',
                            rect: ['77px', '50px', '60px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Light_Wire.svg",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'Battery',
                            symbolName: 'Battery',
                            type: 'rect',
                            rect: ['191px', '249px', '168', '138', 'auto', 'auto']
                        },
                        {
                            id: 'Nail_Rope',
                            symbolName: 'Nail_Rope',
                            type: 'rect',
                            rect: ['180px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 97000,
                    autoPlay: false,
                    data: [
                        [
                            "eid334",
                            "opacity",
                            30998,
                            3002,
                            "linear",
                            "${Light_Wire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1282",
                            "left",
                            97000,
                            0,
                            "linear",
                            "${Nail_Rope}",
                            '180px',
                            '180px'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Battery}",
                            '191px',
                            '191px'
                        ],
                        [
                            "eid18",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Battery}",
                            '191px',
                            '191px'
                        ],
                        [
                            "eid337",
                            "opacity",
                            30998,
                            3002,
                            "linear",
                            "${Light_Bulb_Shine}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Battery}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid19",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${Battery}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            3000,
                            250,
                            "linear",
                            "${Switch_Cable}",
                            '-36deg',
                            '0deg'
                        ],
                        [
                            "eid1279",
                            "top",
                            97000,
                            0,
                            "linear",
                            "${Nail_Rope}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Battery": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7px', '29px', '153px', '108px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '127px', '168px', '11px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['4px', '16px', '160px', '11px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['34px', '0px', '100px', '17px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '0px 0px', '0px 0px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['10px', '8px', '20px', '11px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '0px 0px', '0px 0px'],
                            id: 'RoundRect4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['15px', '0px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '0px 0px', '0px 0px'],
                            id: 'RoundRect5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['138px', '8px', '20px', '11px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '0px 0px', '0px 0px'],
                            id: 'RoundRect4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['143px', '0px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '0px 0px', '0px 0px'],
                            id: 'RoundRect5Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['101px', '79px', '52px', '10px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px 3px', '3px 3px', '3px 3px'],
                            id: 'RoundRect6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,60,60,1.00)']
                        },
                        {
                            rect: ['16px', '79px', '52px', '10px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px 3px', '3px 3px', '3px 3px'],
                            id: 'RoundRect6Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,60,60,1.00)']
                        },
                        {
                            rect: ['101px', '79px', '52px', '10px', 'auto', 'auto'],
                            borderRadius: ['3px', '3px 3px', '3px 3px', '3px 3px'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'RoundRect6Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,60,60,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '168px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Electron_Container": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['77px', '188px', '6px', '6px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Electron',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '6px', '6px', 'auto', 'auto'],
                            id: 'Electron2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Electron.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '211px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 34000,
                    autoPlay: false,
                    data: [
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Electron2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${Electron2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid331",
                            "display",
                            30998,
                            0,
                            "linear",
                            "${Electron2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${Electron}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            30998,
                            0,
                            "linear",
                            "${Electron}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "height",
                            2500,
                            0,
                            "linear",
                            "${Electron}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Electron}",
                            '0',
                            '1'
                        ],
                        [
                            "eid83",
                            "width",
                            2500,
                            0,
                            "linear",
                            "${Electron}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid330",
                            "location",
                            29500,
                            1498,
                            "linear",
                            "${Electron2}",
                            [[3, 3, 0, 0, 0, 0,0],[-10.94, -19.92, -24.65, -53.11, -8.73, -18.81,26.84],[-2.09, -0.37, -2.28, 5.44, -33.02, 78.82,70.02],[-18.88, -10.97, -19.72, -30.4, -39.08, -60.24,94.12],[-25.04, -28.1, 26.02, -4.93, 6.26, -1.19,113.11],[-14.14, -0.98, -3.08, 9.27, -15.95, 48,147.16],[-26.85, -3.16, -5.94, -9.3, -18.57, -29.08,163.71],[-38.14, -21.41, -18.42, -25.86, -25.39, -35.64,185.18],[-26.66, -17.59, 1.84, 8.6, 9.93, 46.49,209.63],[-27.91, 0.12, -5.1, 6.54, -10.99, 14.08,227.79],[-40.06, -3.68, -7.64, -12.13, -18.74, -29.75,243.41],[-48.37, -15.49, -6.29, -10, -8.72, -13.86,257.86],[-51.91, -23.54, -8.87, -29.42, -0.04, -0.15,266.67],[-39.81, -18.73, 1.09, 17.69, 1.54, 25.07,287.64],[-48, 2, 0, 0, 0, 0,310.08]]
                        ],
                        [
                            "eid16",
                            "left",
                            1250,
                            500,
                            "linear",
                            "${Electron}",
                            '205px',
                            '252px'
                        ],
                        [
                            "eid23",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${Electron}",
                            '252px',
                            '303px'
                        ],
                        [
                            "eid90",
                            "left",
                            3000,
                            786,
                            "linear",
                            "${Electron}",
                            '303px',
                            '400px'
                        ],
                        [
                            "eid102",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${Electron}",
                            '400px',
                            '334px'
                        ],
                        [
                            "eid106",
                            "left",
                            5500,
                            250,
                            "linear",
                            "${Electron}",
                            '334px',
                            '354px'
                        ],
                        [
                            "eid110",
                            "left",
                            6000,
                            500,
                            "linear",
                            "${Electron}",
                            '354px',
                            '314px'
                        ],
                        [
                            "eid114",
                            "left",
                            6750,
                            1000,
                            "linear",
                            "${Electron}",
                            '314px',
                            '354px'
                        ],
                        [
                            "eid122",
                            "left",
                            7750,
                            0,
                            "linear",
                            "${Electron}",
                            '354px',
                            '354px'
                        ],
                        [
                            "eid134",
                            "left",
                            8250,
                            1250,
                            "linear",
                            "${Electron}",
                            '354px',
                            '314px'
                        ],
                        [
                            "eid125",
                            "left",
                            10000,
                            1250,
                            "linear",
                            "${Electron}",
                            '314px',
                            '354px'
                        ],
                        [
                            "eid128",
                            "left",
                            11250,
                            0,
                            "linear",
                            "${Electron}",
                            '354px',
                            '354px'
                        ],
                        [
                            "eid131",
                            "left",
                            11750,
                            500,
                            "linear",
                            "${Electron}",
                            '354px',
                            '333px'
                        ],
                        [
                            "eid133",
                            "left",
                            13750,
                            1750,
                            "linear",
                            "${Electron}",
                            '333px',
                            '400px'
                        ],
                        [
                            "eid138",
                            "left",
                            18000,
                            2000,
                            "linear",
                            "${Electron}",
                            '400px',
                            '278px'
                        ],
                        [
                            "eid146",
                            "left",
                            20250,
                            0,
                            "linear",
                            "${Electron}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid149",
                            "left",
                            22750,
                            0,
                            "linear",
                            "${Electron}",
                            '278px',
                            '235px'
                        ],
                        [
                            "eid155",
                            "left",
                            23000,
                            750,
                            "linear",
                            "${Electron}",
                            '235px',
                            '130px'
                        ],
                        [
                            "eid186",
                            "left",
                            24000,
                            125,
                            "linear",
                            "${Electron}",
                            '130px',
                            '94px'
                        ],
                        [
                            "eid192",
                            "left",
                            24125,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid199",
                            "left",
                            24250,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid205",
                            "left",
                            24375,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid213",
                            "left",
                            24500,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid219",
                            "left",
                            24625,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid225",
                            "left",
                            24750,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid231",
                            "left",
                            24875,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid237",
                            "left",
                            25000,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid243",
                            "left",
                            25125,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid249",
                            "left",
                            25250,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid257",
                            "left",
                            25375,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid267",
                            "left",
                            25500,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid273",
                            "left",
                            25625,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid279",
                            "left",
                            25750,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid285",
                            "left",
                            25875,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid291",
                            "left",
                            26000,
                            125,
                            "linear",
                            "${Electron}",
                            '163px',
                            '95px'
                        ],
                        [
                            "eid297",
                            "left",
                            26125,
                            63,
                            "linear",
                            "${Electron}",
                            '163px',
                            '129px'
                        ],
                        [
                            "eid298",
                            "left",
                            26188,
                            0,
                            "linear",
                            "${Electron}",
                            '129px',
                            '129px'
                        ],
                        [
                            "eid302",
                            "left",
                            26500,
                            1500,
                            "linear",
                            "${Electron}",
                            '129px',
                            '-20px'
                        ],
                        [
                            "eid307",
                            "left",
                            28000,
                            750,
                            "linear",
                            "${Electron}",
                            '-20px',
                            '-19px'
                        ],
                        [
                            "eid308",
                            "left",
                            28750,
                            750,
                            "linear",
                            "${Electron}",
                            '-19px',
                            '0px'
                        ],
                        [
                            "eid309",
                            "left",
                            29500,
                            1500,
                            "linear",
                            "${Electron}",
                            '0px',
                            '-51px'
                        ],
                        [
                            "eid313",
                            "left",
                            31000,
                            1000,
                            "linear",
                            "${Electron}",
                            '-51px',
                            '-31px'
                        ],
                        [
                            "eid315",
                            "left",
                            32000,
                            250,
                            "linear",
                            "${Electron}",
                            '-31px',
                            '-35px'
                        ],
                        [
                            "eid317",
                            "left",
                            32500,
                            1000,
                            "linear",
                            "${Electron}",
                            '-35px',
                            '77px'
                        ],
                        [
                            "eid13",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${Electron}",
                            '174px',
                            '151px'
                        ],
                        [
                            "eid21",
                            "top",
                            1750,
                            750,
                            "linear",
                            "${Electron}",
                            '151px',
                            '300px'
                        ],
                        [
                            "eid89",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Electron}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid98",
                            "top",
                            3786,
                            714,
                            "linear",
                            "${Electron}",
                            '300px',
                            '204px'
                        ],
                        [
                            "eid105",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${Electron}",
                            '204px',
                            '174px'
                        ],
                        [
                            "eid108",
                            "top",
                            5750,
                            250,
                            "linear",
                            "${Electron}",
                            '174px',
                            '158px'
                        ],
                        [
                            "eid112",
                            "top",
                            6500,
                            250,
                            "linear",
                            "${Electron}",
                            '158px',
                            '142px'
                        ],
                        [
                            "eid118",
                            "top",
                            7750,
                            500,
                            "linear",
                            "${Electron}",
                            '142px',
                            '126px'
                        ],
                        [
                            "eid123",
                            "top",
                            9500,
                            500,
                            "linear",
                            "${Electron}",
                            '126px',
                            '110px'
                        ],
                        [
                            "eid127",
                            "top",
                            11250,
                            500,
                            "linear",
                            "${Electron}",
                            '110px',
                            '94px'
                        ],
                        [
                            "eid130",
                            "top",
                            12250,
                            1500,
                            "linear",
                            "${Electron}",
                            '94px',
                            '58px'
                        ],
                        [
                            "eid136",
                            "top",
                            15500,
                            2500,
                            "linear",
                            "${Electron}",
                            '58px',
                            '-69px'
                        ],
                        [
                            "eid140",
                            "top",
                            20000,
                            250,
                            "linear",
                            "${Electron}",
                            '-69px',
                            '-54px'
                        ],
                        [
                            "eid142",
                            "top",
                            20250,
                            0,
                            "linear",
                            "${Electron}",
                            '-54px',
                            '-54px'
                        ],
                        [
                            "eid152",
                            "top",
                            22750,
                            0,
                            "linear",
                            "${Electron}",
                            '47px',
                            '-54px'
                        ],
                        [
                            "eid153",
                            "top",
                            22750,
                            250,
                            "linear",
                            "${Electron}",
                            '-54px',
                            '-69px'
                        ],
                        [
                            "eid157",
                            "top",
                            23750,
                            250,
                            "linear",
                            "${Electron}",
                            '-69px',
                            '-52px'
                        ],
                        [
                            "eid191",
                            "top",
                            24125,
                            0,
                            "linear",
                            "${Electron}",
                            '-52px',
                            '-45px'
                        ],
                        [
                            "eid198",
                            "top",
                            24250,
                            0,
                            "linear",
                            "${Electron}",
                            '-45px',
                            '-37px'
                        ],
                        [
                            "eid204",
                            "top",
                            24375,
                            0,
                            "linear",
                            "${Electron}",
                            '-37px',
                            '-30px'
                        ],
                        [
                            "eid210",
                            "top",
                            24500,
                            0,
                            "linear",
                            "${Electron}",
                            '-30px',
                            '-22px'
                        ],
                        [
                            "eid218",
                            "top",
                            24625,
                            0,
                            "linear",
                            "${Electron}",
                            '-22px',
                            '-15px'
                        ],
                        [
                            "eid224",
                            "top",
                            24750,
                            0,
                            "linear",
                            "${Electron}",
                            '-15px',
                            '-8px'
                        ],
                        [
                            "eid230",
                            "top",
                            24875,
                            0,
                            "linear",
                            "${Electron}",
                            '-8px',
                            '0px'
                        ],
                        [
                            "eid236",
                            "top",
                            25000,
                            0,
                            "linear",
                            "${Electron}",
                            '0px',
                            '7px'
                        ],
                        [
                            "eid242",
                            "top",
                            25125,
                            0,
                            "linear",
                            "${Electron}",
                            '7px',
                            '15px'
                        ],
                        [
                            "eid248",
                            "top",
                            25250,
                            0,
                            "linear",
                            "${Electron}",
                            '15px',
                            '22px'
                        ],
                        [
                            "eid254",
                            "top",
                            25375,
                            0,
                            "linear",
                            "${Electron}",
                            '22px',
                            '30px'
                        ],
                        [
                            "eid262",
                            "top",
                            25500,
                            0,
                            "linear",
                            "${Electron}",
                            '30px',
                            '37px'
                        ],
                        [
                            "eid272",
                            "top",
                            25625,
                            0,
                            "linear",
                            "${Electron}",
                            '37px',
                            '44px'
                        ],
                        [
                            "eid278",
                            "top",
                            25750,
                            0,
                            "linear",
                            "${Electron}",
                            '44px',
                            '52px'
                        ],
                        [
                            "eid284",
                            "top",
                            25875,
                            0,
                            "linear",
                            "${Electron}",
                            '52px',
                            '59px'
                        ],
                        [
                            "eid290",
                            "top",
                            26000,
                            0,
                            "linear",
                            "${Electron}",
                            '59px',
                            '67px'
                        ],
                        [
                            "eid296",
                            "top",
                            26125,
                            0,
                            "linear",
                            "${Electron}",
                            '67px',
                            '74px'
                        ],
                        [
                            "eid300",
                            "top",
                            26188,
                            312,
                            "linear",
                            "${Electron}",
                            '74px',
                            '135px'
                        ],
                        [
                            "eid304",
                            "top",
                            28000,
                            750,
                            "linear",
                            "${Electron}",
                            '135px',
                            '75px'
                        ],
                        [
                            "eid306",
                            "top",
                            28750,
                            750,
                            "linear",
                            "${Electron}",
                            '75px',
                            '-1px'
                        ],
                        [
                            "eid312",
                            "top",
                            30998,
                            1002,
                            "linear",
                            "${Electron}",
                            '-1px',
                            '75px'
                        ],
                        [
                            "eid314",
                            "top",
                            32000,
                            500,
                            "linear",
                            "${Electron}",
                            '75px',
                            '155px'
                        ],
                        [
                            "eid319",
                            "top",
                            33500,
                            500,
                            "linear",
                            "${Electron}",
                            '155px',
                            '188px'
                        ]
                    ]
                }
            },
            "Nail_Rope": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '40', '133', 'auto', 'auto'],
                            id: 'Rope',
                            type: 'group',
                            c: [
                            {
                                transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rope3',
                                type: 'image',
                                rect: ['-35px', '50px', '109px', '10px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Rope.png', '0px', '0px']
                            },
                            {
                                transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Nail',
                                type: 'image',
                                rect: ['5px', '100px', '28px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Nail.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '134px']
                        }
                    }
                },
                timeline: {
                    duration: 97000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1285",
                            "rotateZ",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${Rope}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid1286",
                            "rotateZ",
                            1000,
                            2000,
                            "easeInOutQuad",
                            "${Rope}",
                            '-5deg',
                            '5deg'
                        ],
                        [
                            "eid1288",
                            "rotateZ",
                            3000,
                            2000,
                            "easeInOutQuad",
                            "${Rope}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid1289",
                            "rotateZ",
                            97000,
                            0,
                            "linear",
                            "${Rope}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid1287",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1934",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1935",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1936",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1937",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1938",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-344489210");
