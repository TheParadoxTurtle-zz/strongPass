/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'SunMoon2',
                type: 'rect',
                rect: ['75%', '175','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'SunMoon2',
                symbolName: 'SunMoon',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(219,134,92,0.65)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '350px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "max-width", 'none'],
                ["style", "width", '100%']
            ],
            "${_SunMoon2}": [
                ["style", "left", '75%'],
                ["style", "top", '359px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid110", tween: [ "color", "${_Stage}", "background-color", 'rgba(242,238,196,0.76)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 0, duration: 1000 },
                { id: "eid111", tween: [ "color", "${_Stage}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(242,238,196,0.76)'}], position: 1000, duration: 1000 },
                { id: "eid112", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 2000, duration: 500 },
                { id: "eid116", tween: [ "color", "${_Stage}", "background-color", 'rgba(18,25,81,0.66)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.63)'}], position: 2500, duration: 500 },
                { id: "eid117", tween: [ "color", "${_Stage}", "background-color", 'rgba(24,46,110,0.40)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,25,81,0.66)'}], position: 3000, duration: 1000 },
                { id: "eid114", tween: [ "color", "${_Stage}", "background-color", 'rgba(18,25,81,0.66)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(24,46,110,0.40)'}], position: 4000, duration: 1000 },
                { id: "eid115", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,25,81,0.66)'}], position: 5000, duration: 500 },
                { id: "eid113", tween: [ "color", "${_Stage}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.63)'}], position: 5500, duration: 500 },
                { id: "eid125", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 6000, duration: 0 },
                { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SunMoon2}', [] ], ""], position: 0 },
                { id: "eid138", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_SunMoon2}', [0] ], ""], position: 6000 }            ]
        }
    }
},
"SunMoon": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-472px', '-270px', '102px', '102px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    fill: ['rgba(192,192,192,1)'],
                    id: 'Sun',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                },
                {
                    rect: ['-472px', '-270px', '102px', '102px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    fill: ['rgba(192,192,192,1)'],
                    id: 'Moon',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Moon}": [
                ["color", "background-color", 'rgba(221,221,221,1.00)'],
                ["subproperty", "boxShadow.blur", '20px'],
                ["transform", "rotateZ", '-9deg'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(218,218,218,1.00)',0],['rgba(162,198,254,0.61)',100]]]],
                ["style", "left", '-609px'],
                ["style", "width", '84px'],
                ["style", "top", '-47px'],
                ["subproperty", "boxShadow.color", 'rgba(191,202,255,0.65098)'],
                ["subproperty", "boxShadow.spread", '3px'],
                ["style", "height", '84px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "-webkit-transform-origin", [418.84,52.72], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Sun}": [
                ["style", "-webkit-transform-origin", [418.84,52.72], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [418.84,52.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.blur", '20px'],
                ["transform", "rotateZ", '-9deg'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(253,45,0,1.00)',0],['rgba(255,177,60,0.68)',100]]]],
                ["style", "left", '-609px'],
                ["style", "width", '84px'],
                ["style", "top", '-47px'],
                ["color", "background-color", 'rgba(221,221,221,1.00)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '84px'],
                ["subproperty", "boxShadow.spread", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(255,197,0,0.65)']
            ],
            "${symbolSelector}": [
                ["style", "height", '96px'],
                ["style", "width", '96px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "subproperty", "${_Sun}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "subproperty", "${_Sun}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 2000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Moon}", "top", '-47px', { fromValue: '-47px'}], position: 3000, duration: 0 },
                { id: "eid30", tween: [ "subproperty", "${_Sun}", "boxShadow.blur", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "subproperty", "${_Sun}", "boxShadow.blur", '20px', { fromValue: '20px'}], position: 2000, duration: 0 },
                { id: "eid26", tween: [ "subproperty", "${_Sun}", "boxShadow.color", 'rgba(255,197,0,0.65)', { fromValue: 'rgba(255,197,0,0.65)'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "subproperty", "${_Sun}", "boxShadow.color", 'rgba(255,197,0,0.65)', { fromValue: 'rgba(255,197,0,0.65)'}], position: 2000, duration: 0 },
                { id: "eid60", tween: [ "subproperty", "${_Moon}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 3000, duration: 0 },
                { id: "eid61", tween: [ "subproperty", "${_Moon}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 5000, duration: 0 },
                { id: "eid44", tween: [ "transform", "${_Sun}", "rotateZ", '189deg', { fromValue: '-9deg'}], position: 0, duration: 2000 },
                { id: "eid59", tween: [ "style", "${_Moon}", "height", '84px', { fromValue: '84px'}], position: 3000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Sun}", "width", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "gradient", "${_Sun}", "background-image", [50,50,true,'farthest-corner',[['rgba(244,253,0,1.00)',0],['rgba(255,177,60,0.68)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(253,45,0,1.00)',0],['rgba(255,177,60,0.68)',100]]]}], position: 0, duration: 1000 },
                { id: "eid50", tween: [ "gradient", "${_Sun}", "background-image", [50,50,true,'farthest-corner',[['rgba(253,45,0,1.00)',0],['rgba(255,177,60,0.68)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(244,253,0,1.00)',0],['rgba(255,177,60,0.68)',100]]]}], position: 1000, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_Sun}", "top", '-47px', { fromValue: '-47px'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "gradient", "${_Moon}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(190,193,236,0.86)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(218,218,218,1.00)',0],['rgba(162,198,254,0.61)',100]]]}], position: 3000, duration: 1000 },
                { id: "eid80", tween: [ "gradient", "${_Moon}", "background-image", [50,50,true,'farthest-corner',[['rgba(218,218,218,1.00)',0],['rgba(162,198,254,0.61)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(190,193,236,0.86)',100]]]}], position: 4000, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_Sun}", "left", '-609px', { fromValue: '-609px'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Sun}", "height", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Moon}", "left", '-609px', { fromValue: '-609px'}], position: 3000, duration: 0 },
                { id: "eid51", tween: [ "subproperty", "${_Moon}", "boxShadow.blur", '20px', { fromValue: '20px'}], position: 3000, duration: 0 },
                { id: "eid52", tween: [ "subproperty", "${_Moon}", "boxShadow.blur", '20px', { fromValue: '20px'}], position: 5000, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Moon}", "width", '84px', { fromValue: '84px'}], position: 3000, duration: 0 },
                { id: "eid53", tween: [ "transform", "${_Moon}", "rotateZ", '189deg', { fromValue: '-9deg'}], position: 3000, duration: 2000 },
                { id: "eid81", tween: [ "subproperty", "${_Moon}", "boxShadow.color", 'rgba(255,255,255,1.00)', { fromValue: 'rgba(191,202,255,0.65098)'}], position: 3000, duration: 1000 },
                { id: "eid82", tween: [ "subproperty", "${_Moon}", "boxShadow.color", 'rgba(191,202,255,0.65)', { fromValue: 'rgba(255,255,255,1.00)'}], position: 4000, duration: 1000 }            ]
        }
    }
},
"SunMoonWithBackground": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '99.3%', '400px', 'auto', 'auto'],
                    fill: ['rgba(221,221,221,1)']
                },
                {
                    id: 'SunMoon',
                    type: 'rect',
                    rect: ['609px', '405px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'SunMoon',
                symbolName: 'SunMoon',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(219,134,92,0.65)'],
                ["style", "left", '0px'],
                ["style", "width", '105.11%']
            ],
            "${_SunMoon}": [
                ["style", "left", '609px'],
                ["style", "top", '405px']
            ],
            "${symbolSelector}": [
                ["style", "height", '501px'],
                ["style", "width", '705px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid93", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(242,238,196,0.76)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 0, duration: 1000 },
                { id: "eid94", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(242,238,196,0.76)'}], position: 1000, duration: 1000 },
                { id: "eid95", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 2000, duration: 500 },
                { id: "eid99", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(18,25,81,0.66)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.63)'}], position: 2500, duration: 500 },
                { id: "eid100", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(24,46,110,0.40)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,25,81,0.66)'}], position: 3000, duration: 1000 },
                { id: "eid97", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(18,25,81,0.66)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(24,46,110,0.40)'}], position: 4000, duration: 1000 },
                { id: "eid98", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,25,81,0.66)'}], position: 5000, duration: 500 },
                { id: "eid96", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.63)'}], position: 5500, duration: 500 },
                { id: "eid106", tween: [ "style", "${_Rectangle}", "width", '170.71%', { fromValue: '105.11%'}], position: 3357, duration: 2643 }            ]
        }
    }
},
"BackgroundMask": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['12px', '0px', '900px', '458px', 'auto', 'auto'],
                    fill: ['rgba(219,134,92,0.651)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '100%']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(219,134,92,0.65)'],
                ["style", "left", '12px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid127", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(242,238,196,0.76)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 0, duration: 1000 },
                { id: "eid128", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(242,238,196,0.76)'}], position: 1000, duration: 1000 },
                { id: "eid129", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 2000, duration: 500 },
                { id: "eid130", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(18,25,81,0.66)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.63)'}], position: 2500, duration: 500 },
                { id: "eid131", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(24,46,110,0.40)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,25,81,0.66)'}], position: 3000, duration: 1000 },
                { id: "eid132", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(18,25,81,0.66)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(24,46,110,0.40)'}], position: 4000, duration: 1000 },
                { id: "eid133", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(0,0,0,0.63)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,25,81,0.66)'}], position: 5000, duration: 500 },
                { id: "eid136", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.63)'}], position: 5500, duration: 500 },
                { id: "eid135", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(219,134,92,0.65)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(219,134,92,0.65)'}], position: 6000, duration: 0 }            ]
        }
    }
},
"TestShape": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '178px'],
                ["style", "width", '303px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-171195031");
