(this["webpackJsonpvd-calc"]=this["webpackJsonpvd-calc"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(1),i=a.n(l),n=a(9),s=a.n(n),r=(a(14),a(8)),c=a(3),u=a(4),m=a(2),o=a(6),d=a(5),j=(a(15),a(0)),h=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).uniqueId=0,e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.uniqueId+=1;var t={id:this.uniqueId,wireTag:e.target.wireTag.value,load:Number(e.target.load.value),loadType:e.target.loadType.value,pf:Number(e.target.pf.value),voltage:e.target.voltage.value,numOfPhases:e.target.numOfPhases.value,conductorMaterial:e.target.conductorMaterial.value,conduitMaterial:e.target.conduitMaterial.value,parallelRuns:Number(e.target.parallelRuns.value),wireSize:e.target.wireSize.value,wireLength:Number(e.target.wireLength.value)};this.props.calcVD(t)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"form-area-div",children:[Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-area",children:[Object(j.jsx)("h1",{children:"Voltage Drop Calculator"}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"wireTag",children:"Wire Tag:"}),Object(j.jsx)("input",{className:"form-input",type:"text",id:"wireTag",placeholder:"ex. 1A"})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"load",className:"form-label",children:"Electrical Load:"}),Object(j.jsx)("input",{type:"text",className:"form-input",id:"load",placeholder:"ex. 10"})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"loadType",className:"form-label",children:"Load Type:"}),Object(j.jsxs)("select",{id:"loadType",className:"form-select",children:[Object(j.jsx)("option",{value:"amps",children:"Amps"}),Object(j.jsx)("option",{value:"watts",children:"Watts"}),Object(j.jsx)("option",{value:"voltAmps",children:"Volt-Amps"})]})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"pf",className:"form-label",children:"Power Factor:"}),Object(j.jsx)("input",{type:"text",className:"form-input",id:"pf",placeholder:"ex. 0.85"})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"voltage",className:"form-label",children:"Voltage:"}),Object(j.jsxs)("select",{id:"voltage",className:"form-select",children:[Object(j.jsx)("option",{value:"120",children:"120V"}),Object(j.jsx)("option",{value:"208",children:"208V"}),Object(j.jsx)("option",{value:"277",children:"277V"}),Object(j.jsx)("option",{value:"480",children:"480V"})]})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"numOfPhases",className:"form-label",children:"Number of Phases:"}),Object(j.jsxs)("select",{id:"numOfPhases",className:"form-select",children:[Object(j.jsx)("option",{value:"single",children:"Single Phase"}),Object(j.jsx)("option",{value:"three",children:"Three Phase"})]})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"conductorMaterial",className:"form-label",children:"Conductor Material:"}),Object(j.jsxs)("select",{id:"conductorMaterial",className:"form-select",children:[Object(j.jsx)("option",{value:"copper",children:"Copper"}),Object(j.jsx)("option",{value:"aluminum",children:"Aluminum"})]})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"conduitMaterial",className:"form-label",children:"Conduit Material:"}),Object(j.jsxs)("select",{id:"conduitMaterial",className:"form-select",children:[Object(j.jsx)("option",{value:"steel",children:"Steel"}),Object(j.jsx)("option",{value:"aluminum",children:"Aluminum"}),Object(j.jsx)("option",{value:"PVC",children:"PVC"})]})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"parallelRuns",className:"form-label",children:"Number of Parallel Runs:"}),Object(j.jsx)("input",{type:"text",className:"form-input",id:"parallelRuns",placeholder:"ex. 1"})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"wireSize",className:"form-label",children:"Wire Size:"}),Object(j.jsx)("select",{id:"wireSize",className:"form-select",children:this.props.listOfWireSizes.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))})]}),Object(j.jsxs)("div",{className:"input-area-div",children:[Object(j.jsx)("label",{htmlFor:"wireLength",className:"form-label",children:"Wire Length (ft):"}),Object(j.jsx)("input",{type:"text",className:"form-input",id:"wireLength",placeholder:"ex. 150"})]}),Object(j.jsx)("button",{type:"submit",className:"submit-button",children:"SUBMIT"})]}),Object(j.jsxs)("p",{children:["created by ",Object(j.jsx)("span",{className:"underline",children:"thisisjoshtaylor"})]})]})}}]),a}(i.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=Number(e.target.id);this.props.removeLineItem(t)}},{key:"render",value:function(){var e=this.props.lineItem,t=e.id,a=e.wireTag,l=e.load,i=e.loadType,n=e.pf,s=e.voltage,r=e.numOfPhases,c=e.conductorMaterial,u=e.conduitMaterial,m=e.parallelRuns,o=e.wireSize,d=e.wireLength,h=e.voltageDrop,b=e.voltageDropPercent;return Object(j.jsxs)("li",{children:[Object(j.jsx)("svg",{className:"close-button",id:t,onClick:this.handleClick,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"})}),Object(j.jsx)("p",{className:"wire-title",children:"Wire ".concat(a)}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"underline",children:"Input:"})," Load: ".concat(l," ").concat(i,", \n            Power Factor: ").concat(n,", \n            Voltage: ").concat(s,"V, \n            Phase: ").concat(r)," ",Object(j.jsx)("br",{}),"Conductor Material: ".concat(c,", \n            Conduit Material: ").concat(u)," ",Object(j.jsx)("br",{}),"# of Parallel Runs: ".concat(m," \n            Wire Size: ").concat(o,", \n            Wire Length: ").concat(d,"ft"),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"bold",children:["Voltage Drop: ".concat(h,"V"),Object(j.jsx)("br",{}),"Voltage Drop Percent: ".concat(b,"%")]})]})}}]),a}(i.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={vdItemArray:[],listOfWireSizes:["#14","#12","#10","#8","#6","#4","#3","#2","#1","#1/0","#2/0","#3/0","#4/0","#250","#300","#400","#500","#600","#750","#1000"],listOfReactances:[{wire:"num14",PVC:.058,aluminum:.058,steel:.073},{wire:"num12",PVC:.054,aluminum:.054,steel:.068},{wire:"num10",PVC:.05,aluminum:.05,steel:.063},{wire:"num8",PVC:.052,aluminum:.052,steel:.065},{wire:"num6",PVC:.051,aluminum:.051,steel:.064},{wire:"num4",PVC:.048,aluminum:.048,steel:.06},{wire:"num3",PVC:.047,aluminum:.047,steel:.059},{wire:"num2",PVC:.045,aluminum:.045,steel:.057},{wire:"num1",PVC:.046,aluminum:.046,steel:.057},{wire:"num1/0",PVC:.044,aluminum:.044,steel:.055},{wire:"num2/0",PVC:.043,aluminum:.043,steel:.054},{wire:"num3/0",PVC:.042,aluminum:.042,steel:.052},{wire:"num4/0",PVC:.041,aluminum:.041,steel:.051},{wire:"num250",PVC:.041,aluminum:.041,steel:.052},{wire:"num300",PVC:.041,aluminum:.041,steel:.051},{wire:"num350",PVC:.04,aluminum:.04,steel:.05},{wire:"num400",PVC:.04,aluminum:.04,steel:.049},{wire:"num500",PVC:.039,aluminum:.039,steel:.048},{wire:"num600",PVC:.039,aluminum:.039,steel:.048},{wire:"num750",PVC:.038,aluminum:.038,steel:.048},{wire:"num1000",PVC:.037,aluminum:.037,steel:.046}],listOfCuACResistances:[{wire:"num14",PVC:3.1,aluminum:3.1,steel:3.1},{wire:"num12",PVC:2,aluminum:2,steel:2},{wire:"num10",PVC:1.2,aluminum:1.2,steel:1.2},{wire:"num8",PVC:.78,aluminum:.78,steel:.78},{wire:"num6",PVC:.49,aluminum:.49,steel:.49},{wire:"num4",PVC:.31,aluminum:.31,steel:.31},{wire:"num3",PVC:.25,aluminum:.25,steel:.25},{wire:"num2",PVC:.19,aluminum:.2,steel:.2},{wire:"num1",PVC:.15,aluminum:.16,steel:.16},{wire:"num1/0",PVC:.12,aluminum:.13,steel:.12},{wire:"num2/0",PVC:.1,aluminum:.1,steel:.1},{wire:"num3/0",PVC:.077,aluminum:.082,steel:.079},{wire:"num4/0",PVC:.062,aluminum:.067,steel:.063},{wire:"num250",PVC:.052,aluminum:.057,steel:.054},{wire:"num300",PVC:.044,aluminum:.049,steel:.045},{wire:"num350",PVC:.038,aluminum:.043,steel:.039},{wire:"num400",PVC:.033,aluminum:.038,steel:.035},{wire:"num500",PVC:.027,aluminum:.032,steel:.029},{wire:"num600",PVC:.023,aluminum:.028,steel:.025},{wire:"num750",PVC:.019,aluminum:.024,steel:.021},{wire:"num1000",PVC:.015,aluminum:.019,steel:.018}],listOfAlACResistances:[{wire:"num12",PVC:3.2,aluminum:3.2,steel:3.2},{wire:"num10",PVC:2,aluminum:2,steel:2},{wire:"num8",PVC:1.3,aluminum:1.3,steel:1.3},{wire:"num6",PVC:.81,aluminum:.81,steel:.81},{wire:"num4",PVC:.51,aluminum:.51,steel:.51},{wire:"num3",PVC:.4,aluminum:.41,steel:.4},{wire:"num2",PVC:.32,aluminum:.32,steel:.32},{wire:"num1",PVC:.25,aluminum:.26,steel:.25},{wire:"num1/0",PVC:.2,aluminum:.21,steel:.2},{wire:"num2/0",PVC:.16,aluminum:.16,steel:.16},{wire:"num3/0",PVC:.13,aluminum:.13,steel:.13},{wire:"num4/0",PVC:.1,aluminum:.11,steel:.1},{wire:"num250",PVC:.085,aluminum:.09,steel:.086},{wire:"num300",PVC:.071,aluminum:.076,steel:.072},{wire:"num350",PVC:.061,aluminum:.066,steel:.063},{wire:"num400",PVC:.054,aluminum:.059,steel:.055},{wire:"num500",PVC:.043,aluminum:.048,steel:.045},{wire:"num600",PVC:.036,aluminum:.041,steel:.038},{wire:"num750",PVC:.029,aluminum:.034,steel:.031},{wire:"num1000",PVC:.023,aluminum:.027,steel:.025}]},e.calcVD=e.calcVD.bind(Object(m.a)(e)),e.addLineItem=e.addLineItem.bind(Object(m.a)(e)),e.removeLineItem=e.removeLineItem.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"roundToTwoDec",value:function(e){return Math.round(100*(e+Number.EPSILON))/100}},{key:"addLineItem",value:function(e){var t=[].concat(Object(r.a)(this.state.vdItemArray),[e]);this.setState({vdItemArray:t})}},{key:"removeLineItem",value:function(e){var t=Object(r.a)(this.state.vdItemArray),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),this.setState({vdItemArray:t})}},{key:"calcImp",value:function(e){var t,a,l=e.wireSize,i=e.conductorMaterial,n=e.conduitMaterial,s=e.pf,r=this.state,c=r.listOfAlACResistances,u=r.listOfCuACResistances,m=r.listOfReactances,o="num"+l.slice(1);"copper"===i?t=u.find((function(e){return e.wire===o}))[n]:t=c.find((function(e){return e.wire===o}))[n];a=m.find((function(e){return e.wire===o}))[n];var d=t*Math.cos(Math.acos(s))+a*Math.sin(Math.acos(s));return console.log("Reactance: ".concat(a)),console.log("Resistance: ".concat(t)),console.log("Impedance: ".concat(d)),d}},{key:"calcAmps",value:function(e){var t=e.load,a=e.loadType,l=e.numOfPhases,i=e.voltage,n=e.pf;return"amps"===a?t:"watts"===a&&"single"===l?t/(i*n):"watts"===a&&"three"===l?t/(i*n*1.73):"voltAmps"===a&&"single"===l?t/i:"voltAmps"===a&&"three"===l?t/(1.73*i):void 0}},{key:"calcVD",value:function(e){var t,a=e.wireTag,l=e.load,i=e.loadType,n=e.pf,s=e.voltage,r=e.numOfPhases,c=e.conductorMaterial,u=e.conduitMaterial,m=e.parallelRuns,o=e.wireSize,d=e.wireLength;console.log("Wire Tag: ".concat(a));var j={wireSize:o,conductorMaterial:c,conduitMaterial:u,pf:n},h={load:l,loadType:i,numOfPhases:r,voltage:s,pf:n},b=this.calcImp(j),p=this.calcAmps(h),v=(t="single"===r?b*(d/1e3)*p*2/m:b*(d/1e3)*p*1.73/m)/s*100;console.log("Voltage Drop: ".concat(t)),console.log("Voltage Drop Percent: ".concat(v)),e.voltageDrop=this.roundToTwoDec(t),e.voltageDropPercent=this.roundToTwoDec(v),this.addLineItem(e)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"background",children:[Object(j.jsx)(h,{listOfWireSizes:this.state.listOfWireSizes,calcVD:this.calcVD}),Object(j.jsxs)("div",{className:"results-area",children:[Object(j.jsx)("p",{className:"results-header",children:"Results"}),Object(j.jsx)("ol",{className:"results-list",children:this.state.vdItemArray.map((function(t){return Object(j.jsx)(b,{lineItem:t,removeLineItem:e.removeLineItem},t.id)}))})]})]})}}]),a}(i.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,l=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),l(e),i(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.bb8e43cb.chunk.js.map