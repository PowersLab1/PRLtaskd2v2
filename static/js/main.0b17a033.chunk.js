(this.webpackJsonpprltaskd2v2=this.webpackJsonpprltaskd2v2||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return w}));var a=n(0),o=n.n(a),s=n(44),r=n.n(s),c=n(1),i=n(17);const l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(92),n(93);const d=n(42);var u=n(94),p=n(95);n(100);class h extends a.Component{constructor(e){console.log("LabJsWrapperconstructor"),super(e);const t=p.parse(this.props.location.search,{ignoreQueryPrefix:!0});this.surveyUrl=t.survey_url,this.state={encryptedMetadata:t.id,sendingData:!1,link:void 0},u.isUndefined(this.state.encryptedMetadata)||this.addScript("/PRLtaskd2v2/external/lab.js",()=>{this.addScript("/PRLtaskd2v2/script.js")})}packageDataForExport(e){const t={};return console.log("packageDataForExport"),console.log(e),t.encrypted_metadata=this.state.encryptedMetadata,t.taskName=d.taskName,t.taskVersion=d.taskVersion,t.data=this.processLabJsData(e),JSON.stringify(t)}processLabJsData(e){return e}componentDidMount(){console.log("in compondentDidMount");var e=this;window.addEventListener("message",(function(t){if(console.log("in EventListener"),"labjs.data"===t.data.type){const n=JSON.parse(t.data.json);if(console.log("in componentDidMount -- type = labjs.data"),(d.debug||l)&&(console.log(n),console.log(e.processLabJsData(n))),l)return console.log("in islocalhost"),console.log(e.surveyUrl),void(e.surveyUrl&&(console.log("in that.surveyUrl"),e.setState({link:e.surveyUrl})));console.log("in componentDidMount -- after if statements"),console.log(e.state.encryptedMetadata),console.log(n),e.setState({sendingData:!0}),console.log("logging this"),console.log(this),console.log("logging that"),console.log(e),console.log("sending request"),Object(i.b)(e.state.encryptedMetadata,e.packageDataForExport(n)).then(()=>{console.log("sent data"),console.log(e.surveyUrl),e.surveyUrl?e.setState({link:e.surveyUrl}):Object(i.a)(e.state.encryptedMetadata).then(t=>e.setState({link:t}))})}Object(i.a)(e.state.encryptedMetadata).then(t=>e.setState({link:t}))}))}addScript(e,t){const n=document.createElement("script");n.src=e,n.type="module",n.onreadystatechange=t,n.onload=t,document.head.appendChild(n)}render(){return u.isUndefined(this.state.encryptedMetadata)?o.a.createElement("div",null,o.a.createElement("h2",null,"Something went wrong. Please try again.")):(u.isUndefined(this.state.link)||window.location.assign(this.state.link),o.a.createElement("div",null,o.a.createElement("div",{className:"container fullscreen","data-labjs-section":"main",style:{visibility:this.state.sendingData?"hidden":"visible"}},o.a.createElement("main",{className:"content-vertical-center content-horizontal-center"})),o.a.createElement("div",{className:"center",style:{visibility:this.state.sendingData?"visible":"hidden"}},o.a.createElement("h2",null,"Saving data... do not exit window"))))}}var g=h,m=()=>o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:g}));class f extends a.Component{render(){return o.a.createElement("div",null,o.a.createElement(m,null))}}var v=f,y=n(22),b=n(3);const w=Object(b.a)();console.log("render react"),r.a.render(o.a.createElement(y.a,{history:w,basename:"/PRLtaskd2v2"},o.a.createElement(v,null)),document.getElementById("root"))},17:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(53),o=n(89);const s=n(42);function r(t,n){return new Promise((function(r,c){const i=o.stringify({encrypted_metadata:t,data:n}),l={hostname:s.awsLambda.saveTaskData.host,port:443,path:s.awsLambda.saveTaskData.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(i)}},d=a.request(l,e=>{e.setEncoding("utf8"),e.on("data",()=>{}),e.on("end",r)});d.on("error",e=>{s.debug&&(console.log("ERROR:"),console.log(e)),c(e)}),d.write(i),d.end()}))}function c(t){return new Promise((function(n,r){const c=o.stringify({encrypted_metadata:t}),i={hostname:s.awsLambda.fetchLink.host,port:443,path:s.awsLambda.fetchLink.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(c)}},l=a.request(i,e=>{e.setEncoding("utf8");var t="";e.on("data",(function(e){t+=e})),e.on("end",()=>n(t))});l.on("error",e=>{s.debug&&(console.log("ERROR:"),console.log(e)),r(e)}),l.write(c),l.end()}))}}).call(this,n(7).Buffer)},42:function(e){e.exports=JSON.parse('{"taskVersion":"1.0.0","taskName":"prltaskd2v2","debug":false,"awsLambda":{"saveTaskData":{"host":"de8cnjde61.execute-api.us-east-2.amazonaws.com","path":"/default/saveTaskData"},"fetchLink":{"host":"3pnzb6n9vf.execute-api.us-east-2.amazonaws.com","path":"/default/fetchLink"}}}')},46:function(e,t,n){e.exports=n(106)},56:function(e,t){},58:function(e,t){},87:function(e,t){},92:function(e,t,n){},93:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.0b17a033.chunk.js.map