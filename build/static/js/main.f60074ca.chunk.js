(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){e.exports=n(291)},154:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(29),o=n.n(i),c=(n(154),n(66)),l=n(67),s=n(75),u=n(68),m=n(76),f=n(20),d=n(5),h=n(308),b=n(309),p=n(306),g=n(304),y=n(305),O=n(307),j=n(69),v=n(14),w=n(39),x=n(13),E=n(299),k=n(192),A=n(193),C=n(303),z=n(292),M=n(97);function F(){var e=Object(f.a)(["\n  svg {\n    /* Force video card acceleration on animation. */\n    transform: translateZ(0);\n  }\n"]);return F=function(){return e},e}var W=Object(d.b)(E.a)(F()),B=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e));var a={};return e.lineXPosStart.map(function(e,t){return a["line".concat(t+1)]=e}),n.state=Object(v.a)({},a),n.animate=n.animate.bind(Object(w.a)(Object(w.a)(n))),n.createLineAnim=n.createLineAnim.bind(Object(w.a)(Object(w.a)(n))),n.lineAnims=[],n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.animate()}},{key:"componentWillUnmount",value:function(){this.lineAnims.map(function(e){return e.kill()})}},{key:"createLineAnim",value:function(e,t){var n=this,a=e.map(function(e){return e}),r=e.map(function(e){if(50===e)return e;if(49===e)return 51;var t=100-e;return t>50?Math.floor(5*Math.random()+t):t<50?Math.floor(t-5*Math.random()):t}),i=12*Math.random()+5,o=M.b.to(a,i,r);o.vars.ease=M.a.easeInOut,o.delay(1*Math.random()),o.repeat(-1).yoyo(!0),r.onUpdate=function(){n.setState(Object(j.a)({},"line".concat(t),a.map(function(e){return e})))},this.lineAnims.push(o)}},{key:"animate",value:function(){var e=this,t=this.state;[t.line1,t.line2,t.line3,t.line4].map(function(t,n){return e.createLineAnim(t,n+1)})}},{key:"render",value:function(){var e=this.props.layout,t=this.state,n=t.line1,a=t.line2,i=t.line3,o=t.line4,c=x.b,l=n.map(function(e,t){return{line1X:e,line2X:a[t],line3X:i[t],line4X:o[t]}}),s="vertical"===e?r.a.createElement(k.a,{hide:!0,type:"number",domain:[0,100]}):r.a.createElement(k.a,{hide:!0,type:"category"}),u="vertical"===e?r.a.createElement(A.a,{hide:!0,type:"category"}):r.a.createElement(A.a,{hide:!0,type:"number",domain:[0,100]});return r.a.createElement(W,null,r.a.createElement(C.a,{layout:e,data:l},s,u,r.a.createElement(z.a,{isAnimationActive:!1,dot:!1,type:c,dataKey:"line1X",stroke:"#C0FF00",strokeWidth:"8"}),r.a.createElement(z.a,{isAnimationActive:!1,dot:!1,type:c,dataKey:"line2X",stroke:"#7D4CDB",strokeWidth:"8"}),r.a.createElement(z.a,{isAnimationActive:!1,dot:!1,type:c,dataKey:"line3X",stroke:"#00F4BB",strokeWidth:"8"}),r.a.createElement(z.a,{isAnimationActive:!1,dot:!1,type:c,dataKey:"line4X",stroke:"#FF5271",strokeWidth:"8"})))}}]),t}(a.Component);function H(){var e=Object(f.a)(["\n        box-sizing: border-box;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: ",";\n        height: ",";\n      "]);return H=function(){return e},e}B.defaultProps={lineXPosStart:[[50,50,30,70,10,65,30,50,50],[50,50,20,80,15,55,33,50,50],[50,50,10,100,5,75,20,50,50],[50,50,22,90,3,90,10,50,50]],layout:"vertical"};var X=function(e){return{size:"".concat(18+4*e,"px"),height:"".concat(24+4*e,"px"),maxWidth:"".concat(24*(18+4*e),"px")}},S=["#2AD2C9","#614767","#ff8d6d"],D={critical:"#F04953",error:"#F04953",warning:"#FFD144",ok:"#01a982",unknown:"#CCCCCC",disabled:"#CCCCCC"},P={brand:"#29f3bc",purple:"#9060EB",focus:S[0]},L=function(e,t){return e.forEach(function(e,n){P["".concat(t,"-").concat(n+1)]=e})};L(S,"accent"),L(["#1F2532","#232a37","#5F7A76","#80746E","#767676","#516778"],"neutral"),Object.keys(D).forEach(function(e){P["status-".concat(e)]=D[e]});var K,R=(K={global:{colors:P,font:{family:"'Metric', Arial, sans-serif",face:'\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format(\'woff\');\n        }\n\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format(\'woff\');\n          font-weight: 700;\n        }\n\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format(\'woff\');\n          font-weight: 600;\n        }\n\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format(\'woff\');\n          font-weight: 100;\n        }\n      '}},anchor:{textDecoration:"none",color:{dark:P.brand,light:P.brand},extend:"font-weight: 600;"},button:{border:{radius:"0px"},colors:{accent:"#ff8d6d",secondary:"rgba(51,51,51,0.6)"},extend:"\n      letter-spacing: 0.04167em;\n      transition: transform 0.15s ease-out;\n      &:hover { transform: scale(1.2); }\n    "},checkBox:{icon:{extend:Object(d.a)(H(),function(e){return e.theme.checkBox.size},function(e){return e.theme.checkBox.size})}},paragraph:{small:Object(v.a)({},X(-1)),medium:Object(v.a)({},X(0)),large:Object(v.a)({},X(1)),xlarge:Object(v.a)({},X(3.5)),xxlarge:Object(v.a)({},X(4)),extend:"font-weight: 100;"},text:{small:Object(v.a)({},X(-1)),medium:Object(v.a)({},X(0)),large:Object(v.a)({},X(1)),xlarge:Object(v.a)({},X(3.5)),xxlarge:Object(v.a)({},X(4))},heading:{level:{1:{small:Object(v.a)({},X(4)),medium:Object(v.a)({},X(8)),large:Object(v.a)({},X(44)),xlarge:Object(v.a)({},X(120))},2:{small:Object(v.a)({},X(2)),medium:Object(v.a)({},X(4)),large:Object(v.a)({},X(8)),xlarge:Object(v.a)({},X(12))},3:{small:Object(v.a)({},X(1)),medium:Object(v.a)({},X(1)),large:Object(v.a)({},X(4)),xlarge:Object(v.a)({},X(6))},4:{small:Object(v.a)({},X(0)),medium:Object(v.a)({},X(0)),large:Object(v.a)({},X(0)),xlarge:Object(v.a)({},X(0))}},responsiveBreakpoint:"small",weight:700},icon:{colors:P}},Object.keys(K).forEach(function(e){return e&&(t=K[e])&&"object"===typeof t&&!Array.isArray(t)&&Object.freeze(K[e]);var t}),Object.freeze(K));function Y(){var e=Object(f.a)(["\n  position: relative;\n  min-width: 100vw;\n  max-width: 100vw;\n  max-height: 100vh;\n\n  &.enlightened {\n    "," {\n      animation:  "," 0.25s ease-out;\n      animation-fill-mode: forwards;\n      animation-delay: 0.25s;\n    }\n\n    "," {\n      animation:  "," 0.25s ease-out;\n      animation-fill-mode: forwards;\n    }\n  }\n"]);return Y=function(){return e},e}function I(){var e=Object(f.a)([""]);return I=function(){return e},e}function J(){var e=Object(f.a)([""]);return J=function(){return e},e}function N(){var e=Object(f.a)(["\n  filter: drop-shadow(5px 5px 12px #1F2532);\n"]);return N=function(){return e},e}function U(){var e=Object(f.a)(["\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(100px);\n    opacity: 0;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(f.a)(["\n  display: inline-block;\n  padding-right: ","px;\n  opacity: 0;\n  transform: scale(0);\n  animation:  "," ","s ease-out;\n  animation-delay: ","s;\n  animation-fill-mode: forwards;\n  transform-origin: ",";\n"]);return V=function(){return e},e}function Z(){var e=Object(f.a)(["\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n"]);return Z=function(){return e},e}var $=Object(d.c)(Z()),q=d.b.span(V(),function(e){return e.paddingRight||"36"},$,function(e){return e.duration||"0.75"},function(e){return e.delay},function(e){return e.from}),G=Object(d.c)(U()),Q=Object(d.b)(h.a)(N()),T=Object(d.b)(b.a)(J()),_=Object(d.b)(p.a)(I()),ee=Object(d.b)(h.a)(Y(),_,G,T,G),te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={clickedOnce:!1,enlightened:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="what is the answer to life, the universe and everything?".split(" ");return r.a.createElement(g.a,{theme:R,style:{minHeight:"100vh"}},r.a.createElement(h.a,{flex:!0,background:{color:"neutral-1"},style:{position:"relative",minHeight:"100vh"},align:"center",justify:"center"},r.a.createElement(y.a,{fill:!0,anchor:"center"},r.a.createElement(h.a,{style:{minHeight:"100vh",opacity:this.state.enlightened?1:.25,filter:"brightness(".concat(this.state.enlightened?100:50,"%)"),transition:"opacity 0.3s linear, filter 0.3s linear",transitionDelay:"0.65s"},justify:"center",align:"center"},r.a.createElement(h.a,{alignSelf:"center",fill:"horizontal",height:"medium"},r.a.createElement(B,{layout:"horizontal"}))),this.state.enlightened&&r.a.createElement(Q,null,r.a.createElement(p.a,{size:"xlarge",textAlign:"center",margin:"none",style:{lineHeight:"360px"}},[4,2].map(function(e,t){return r.a.createElement(q,{key:"number-".concat(t),delay:1*t+1.75,from:"bottom"},e)})),r.a.createElement(p.a,{size:"medium",textAlign:"center",style:{lineHeight:"0.9"}},"the answer to life, the universe and everything. Come on Said, EVERYONE here knows that --!!!!".split(" ").map(function(e,t){return r.a.createElement(q,{key:"number-".concat(t),delay:.25*t+3.6,from:"top",paddingRight:12,duration:.25},e)}))),r.a.createElement(ee,{className:this.state.enlightened?"enlightened":"",pad:"small",align:"center"},r.a.createElement(_,{size:"large",textAlign:"center",style:{lineHeight:.8}},t.map(function(e,t){return r.a.createElement(q,{key:t,delay:t/3,from:"bottom"},e)})),r.a.createElement(h.a,{direction:"row"},r.a.createElement(q,{delay:2.2,from:"top"},r.a.createElement(T,{onClick:function(){return e.state.clickedOnce?e.setState({enlightened:!0}):e.setState({clickedOnce:!0})}},r.a.createElement(h.a,{background:{color:"brand"},pad:{vertical:"small",horizontal:"large"},round:"large"},r.a.createElement(O.a,{weight:"bold",color:"purple",size:"xlarge"},this.state.clickedOnce?"are you sure?":"tell me!")))))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[149,2,1]]]);
//# sourceMappingURL=main.f60074ca.chunk.js.map