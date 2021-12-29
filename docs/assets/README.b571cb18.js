import{_ as f}from"./index.41f6d4a5.js";import{r as m,l as a,E as d,a as n,o as y,f as p,w as u,e as r,c as h,b as _,Q as E}from"./vendor.dd34a66a.js";const F={name:"Slider",setup(){return{listQuery:m({sliderValue:0,sliderValue2:30,sliderValue3:0,sliderValue4:0,sliderValue5:0}),formItem:a([{type:"es-slider",label:"Default value",key:"sliderValue",col:24,attrs:{style:"width: 100%;",min:0,max:100},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}},{type:"es-slider",label:"Customized initial value",key:"sliderValue2",col:24,attrs:{style:"width: 100%;",min:0,max:100},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D2\uFF1A"+e,type:"success"})}}},{type:"es-slider",label:"Hide Tooltip",key:"sliderValue3",col:24,attrs:{style:"width: 100%;",min:0,max:100,"show-tooltip":!1},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D3\uFF1A"+e,type:"success"})}}},{type:"es-slider",label:"Customized initial value",key:"sliderValue4",col:24,attrs:{style:"width: 100%;",min:0,max:100,"show-tooltip":e=>e/100},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D2\uFF1A"+e,type:"success"})}}},{type:"es-slider",label:"Customized initial value",key:"sliderValue5",col:24,attrs:{style:"width: 100%;",min:0,max:100,disabled:!0},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D2\uFF1A"+e,type:"success"})}}}]),rules:a({sliderValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function x(l,s,e,t,g,o){const i=n("EsForm"),c=n("EsContainer");return y(),p(c,{title:"Slider\u7EC4\u4EF6"},{default:u(()=>[r(i,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var C=f(F,[["render",x]]);const D={name:"Slider",setup(){const l=m({sliderValue:30,sliderValue2:30}),s=e=>e/100;return{listQuery:l,formItem:a([{type:"es-slider",label:"Step",key:"sliderValue",col:24,attrs:{style:"width: 100%;","format-tooltip":s,min:0,max:100,step:10},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}},{type:"es-slider",label:"Slider",key:"sliderValue2",col:24,attrs:{style:"width: 100%;","format-tooltip":s,min:0,max:100,step:10,showStops:!0},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D2\uFF1A"+e,type:"success"})}}}]),rules:a({sliderValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],sliderValue2:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function V(l,s,e,t,g,o){const i=n("EsForm"),c=n("EsContainer");return y(),p(c,{title:"Slider\u7EC4\u4EF6 Step\u5C5E\u6027"},{default:u(()=>[r(i,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var A=f(D,[["render",V]]);const v={name:"Slider",setup(){return{listQuery:m({sliderValue:0}),formItem:a([{type:"es-slider",label:"ShowInput",key:"sliderValue",col:24,attrs:{style:"width: 100%;","format-tooltip":e=>e/100,min:0,max:100,"show-input":!0},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}]),rules:a({sliderValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function S(l,s,e,t,g,o){const i=n("EsForm"),c=n("EsContainer");return y(),p(c,{title:"Slider\u7EC4\u4EF6 ShowInput\u5C5E\u6027"},{default:u(()=>[r(i,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var b=f(v,[["render",S]]);const w={name:"Slider",setup(){return{listQuery:m({sliderValue:[30,80]}),formItem:a([{type:"es-slider",label:"Range",key:"sliderValue",col:24,attrs:{style:"width: 100%;","format-tooltip":e=>e/100,min:0,max:100,range:!0},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}]),rules:a({sliderValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function q(l,s,e,t,g,o){const i=n("EsForm"),c=n("EsContainer");return y(),p(c,{title:"Slider\u7EC4\u4EF6 Range\u5C5E\u6027"},{default:u(()=>[r(i,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var k=f(w,[["render",q]]);const $={name:"Slider",setup(){return{listQuery:m({sliderValue:[30,80]}),formItem:a([{type:"es-slider",label:"Vertical",key:"sliderValue",col:24,attrs:{style:"width: 100%; height: 200px;","format-tooltip":e=>e/100,min:0,max:100,vertical:!0},listeners:{change:e=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}]),rules:a({sliderValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function I(l,s,e,t,g,o){const i=n("EsForm"),c=n("EsContainer");return y(),p(c,{title:"Slider\u7EC4\u4EF6 Vertical\u5C5E\u6027"},{default:u(()=>[r(i,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var Q=f($,[["render",I]]);const T={name:"Slider",setup(){const l=m({sliderValue:[30,80]}),s=m({0:"0\xB0C",8:"8\xB0C",37:"37\xB0C",50:{style:{color:"#1989FA"},label:"50%"}});return{listQuery:l,formItem:a([{type:"es-slider",label:"Range",key:"sliderValue",col:24,attrs:{style:"width: 100%;","format-tooltip":t=>t/100,min:0,max:100,range:!0,marks:s},listeners:{change:t=>{d({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+t,type:"success"})}}}]),rules:a({sliderValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function B(l,s,e,t,g,o){const i=n("EsForm"),c=n("EsContainer");return y(),p(c,{title:"Slider\u7EC4\u4EF6 Range\u5C5E\u6027"},{default:u(()=>[r(i,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var R=f(T,[["render",B]]);const z={class:"markdown-body"},N=_("h1",null,"Slider\u7EC4\u4EF6",-1),j=_("h3",null,"\u793A\u4F8B",-1),P=_("h3",null,"\u79BB\u6563\u503C",-1),H=_("h3",null,"\u5E26\u6709\u8F93\u5165\u6846\u7684\u6ED1\u5757",-1),M=_("h3",null,"\u8303\u56F4\u9009\u62E9",-1),G=_("h3",null,"\u7AD6\u5411\u6A21\u5F0F",-1),J=_("h3",null,"\u5C55\u793A\u6807\u8BB0",-1),K=E('<h3>\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table>',4),U={setup(l,{expose:s}){return s({frontmatter:{}}),(t,g)=>{const o=n("Preview");return y(),h("div",z,[N,j,r(o,{"comp-name":"Slider","demo-name":"demo"},{default:u(()=>[r(C)]),_:1}),P,r(o,{"comp-name":"Slider","demo-name":"demo2"},{default:u(()=>[r(A)]),_:1}),H,r(o,{"comp-name":"Slider","demo-name":"demo3"},{default:u(()=>[r(b)]),_:1}),M,r(o,{"comp-name":"Slider","demo-name":"demo4"},{default:u(()=>[r(k)]),_:1}),G,r(o,{"comp-name":"Slider","demo-name":"demo5"},{default:u(()=>[r(Q)]),_:1}),J,r(o,{"comp-name":"Slider","demo-name":"demo6"},{default:u(()=>[r(R)]),_:1}),K])}}};export{U as default};
