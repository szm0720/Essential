import{_ as x}from"./index.0e7570c9.js";import{l as u,r as d,E as g,a,o as y,f,w as i,e as r,H as _,c as p,b as h,Q as w}from"./vendor.3dfe569d.js";const v={name:"Switch",setup(){const n=u(!1);return{listQuery:d({switchValue:n}),formItem:u([{type:"es-switch",label:"Switch",key:"switchValue",col:24,attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",style:"margin-top: 10px;"},listeners:{change:l=>{g({message:"\u5DF2\u64CD\u4F5C\uFF1A"+l,type:"success"})}}}]),rules:u({switchValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function E(n,e,l,t,m,s){const c=a("EsForm"),o=a("EsContainer");return y(),f(o,{title:"Switch\u7EC4\u4EF6"},{default:i(()=>[r(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var F=x(v,[["render",E]]);const C={name:"Switch",setup(){return{listQuery:d({switchValue:!1,switchValue2:!1}),formItem:d([{type:"es-switch",label:"SwitchText",key:"switchValue",col:24,attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",style:"margin-top: 10px;","active-text":"Pay by month","inactive-text":"Pay by year"},listeners:{change:e=>{g({message:"\u5DF2\u64CD\u4F5C\uFF1A"+e,type:"success"})}}},{type:"es-switch",label:"InlinePrompt",key:"switchValue2",col:24,attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",style:"margin-top: 10px;","active-text":"\u662F","inactive-text":"\u5426","inline-prompt":!0},listeners:{change:e=>{g({message:"\u5DF2\u64CD\u4F5C2\uFF1A"+e,type:"success"})}}}]),rules:u({switchValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],switchValue2:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function b(n,e,l,t,m,s){const c=a("EsForm"),o=a("EsContainer");return y(),f(o,{title:"Switch\u7EC4\u4EF6 ActiveText\u548CInactiveText\u5C5E\u6027"},{default:i(()=>[r(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var D=x(C,[["render",b]]);const A={name:"Switch",setup(){return{listQuery:d({switchValue:!1,switchValue2:!1}),formItem:d([{type:"es-switch",label:"SwitchIcon",key:"switchValue",col:12,attrs:{style:"margin-top: 10px;","active-color":"#13ce66","inactive-color":"#ff4949","active-icon":"Check","inactive-icon":"Close"},listeners:{change:e=>{g({message:"\u5DF2\u64CD\u4F5C\uFF1A"+e,type:"success"})}}},{type:"es-switch",label:"InlinePrompt",key:"switchValue2",col:12,attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",style:"margin-top: 10px;","active-icon":"Check","inactive-icon":"Close","inline-prompt":!0},listeners:{change:e=>{g({message:"\u5DF2\u64CD\u4F5C2\uFF1A"+e,type:"success"})}}}]),rules:u({switchValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],switchValue2:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function V(n,e,l,t,m,s){const c=a("EsForm"),o=a("EsContainer");return y(),f(o,{title:"Switch\u7EC4\u4EF6 ActiveText\u548CInactiveText\u5C5E\u6027"},{default:i(()=>[r(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var S=x(A,[["render",V]]);const q={name:"Switch",setup(){const n=u(!1);return{listQuery:d({switchValue:n}),formItem:u([{type:"es-switch",label:"Disabled",key:"switchValue",col:24,attrs:{style:"margin-top: 10px;","active-color":"#13ce66","inactive-color":"#ff4949",disabled:!0},listeners:{change:l=>{g({message:"\u5DF2\u64CD\u4F5C\uFF1A"+l,type:"success"})}}}]),rules:u({switchValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function I(n,e,l,t,m,s){const c=a("EsForm"),o=a("EsContainer");return y(),f(o,{title:"Switch\u7EC4\u4EF6 Disabled\u5C5E\u6027"},{default:i(()=>[r(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var $=x(q,[["render",I]]);const k={name:"Switch",setup(){return{listQuery:d({switchValue:!1,switchValue2:!0}),formItem:u([{type:"es-switch",label:"Disabled",key:"switchValue",col:12,attrs:{style:"margin-top: 10px;","active-color":"#13ce66","inactive-color":"#ff4949",loading:!0},listeners:{change:e=>{g({message:"\u5DF2\u64CD\u4F5C\uFF1A"+e,type:"success"})}}},{type:"es-switch",label:"Disabled",key:"switchValue2",col:12,attrs:{style:"margin-top: 10px;","active-color":"#13ce66","inactive-color":"#ff4949",loading:!0},listeners:{change:e=>{g({message:"\u5DF2\u64CD\u4F5C\uFF1A"+e,type:"success"})}}}]),rules:u({switchValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],switchValue2:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function Q(n,e,l,t,m,s){const c=a("EsForm"),o=a("EsContainer");return y(),f(o,{title:"Switch\u7EC4\u4EF6 Loading\u5C5E\u6027"},{default:i(()=>[r(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var P=x(k,[["render",Q]]);const T={name:"Switch",setup(){const n=d({switchValue:!1,loading:!1}),e=()=>(n.loading=!0,new Promise(s=>{setTimeout(()=>(n.loading=!1,g.success("Switch success"),s(!0)),1e3)})),l=d({switchValue2:!1,loading2:!1}),t=()=>(l.loading2=!0,new Promise((s,c)=>{setTimeout(()=>(l.loading2=!1,g.error("Switch failed"),c(new Error("Error"))),1e3)})),m=d([{type:"es-switch",label:"Disabled",key:"switchValue",col:12,attrs:{style:"margin-top: 10px;","active-color":"#13ce66","inactive-color":"#ff4949",loading:_(n).loading,"before-change":e},listeners:{change:s=>{console.log(n.loading)}}},{type:"es-switch",label:"Disabled",key:"switchValue2",col:12,attrs:{style:"margin-top: 10px;","active-color":"#13ce66","inactive-color":"#ff4949",loading:_(l).loading2,"before-change":t}}]);return{listQuery:n,formItem:m,rules:d({switchValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],switchValue2:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]})}}};function B(n,e,l,t,m,s){const c=a("EsForm"),o=a("EsContainer");return y(),f(o,{title:"Switch\u7EC4\u4EF6 BeforeChange\u5C5E\u6027"},{default:i(()=>[r(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var j=x(T,[["render",B]]);const N={class:"markdown-body"},H=h("h1",null,"Switch\u7EC4\u4EF6",-1),L=h("h3",null,"\u793A\u4F8B",-1),M=h("h3",null,"\u6587\u5B57\u63CF\u8FF0",-1),R=h("h3",null,"\u663E\u793A\u81EA\u5B9A\u4E49\u56FE\u6807",-1),z=h("h3",null,"\u7981\u7528\u72B6\u6001",-1),G=h("h3",null,"\u52A0\u8F7D\u4E2D",-1),J=h("h3",null,"\u963B\u6B62\u5207\u6362",-1),K=w('<h3>\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;"><code>model-value / v-model</code></td><td style="text-align:center;">\u7ED1\u5B9A\u503C\uFF0C\u5FC5\u987B\u7B49\u4E8E active-value \u6216 inactive-value\uFF0C\u9ED8\u8BA4\u4E3A Boolean \u7C7B\u578B</td><td style="text-align:center;">boolean / string / number</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>disabled</code></td><td style="text-align:center;">\u662F\u5426\u7981\u7528</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>loading</code></td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>width</code></td><td style="text-align:center;">switch \u7684\u5BBD\u5EA6</td><td style="text-align:center;">number</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">40px</td></tr><tr><td style="text-align:center;"><code>inline-prompt</code></td><td style="text-align:center;">\u65E0\u8BBA\u56FE\u6807\u6216\u6587\u672C\u662F\u5426\u663E\u793A\u5728\u70B9\u5185\uFF0C\u53EA\u4F1A\u5448\u73B0\u6587\u672C\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>active-icon</code></td><td style="text-align:center;">switch \u72B6\u6001\u4E3A on \u65F6\u6240\u663E\u793A\u56FE\u6807\uFF0C\u8BBE\u7F6E\u6B64\u9879\u4F1A\u5FFD\u7565 active-text</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>inactive-icon</code></td><td style="text-align:center;">switch \u72B6\u6001\u4E3A off \u65F6\u6240\u663E\u793A\u56FE\u6807\uFF0C\u8BBE\u7F6E\u6B64\u9879\u4F1A\u5FFD\u7565 inactive-text</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>active-text</code></td><td style="text-align:center;">switch \u72B6\u6001\u4E3A on \u65F6\u7684\u6587\u5B57\u63CF\u8FF0</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>inactive-text</code></td><td style="text-align:center;">switch \u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u6587\u5B57\u63CF\u8FF0</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>active-value</code></td><td style="text-align:center;">switch \u72B6\u6001\u4E3A on \u65F6\u7684\u503C</td><td style="text-align:center;">boolean / string / number</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;"><code>inactive-value</code></td><td style="text-align:center;">switch\u7684\u72B6\u6001\u4E3A off \u65F6\u7684\u503C</td><td style="text-align:center;">boolean / string / number</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>active-color</code></td><td style="text-align:center;">switch\u7684\u503C\u4E3A on \u65F6\u7684\u989C\u8272</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">#409EFF</td></tr><tr><td style="text-align:center;"><code>inactive-color</code></td><td style="text-align:center;">switch\u7684\u503C\u4E3A off \u7684\u989C\u8272</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">#C0CCDA</td></tr><tr><td style="text-align:center;"><code>border-color</code></td><td style="text-align:center;">switch \u8FB9\u6846\u989C\u8272</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">switch \u5BF9\u5E94\u7684 name \u5C5E\u6027</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>validate-event</code></td><td style="text-align:center;">\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;"><code>before-change</code></td><td style="text-align:center;">switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C \u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362</td><td style="text-align:center;">function</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th></tr></thead><tbody><tr><td style="text-align:center;"><code>change</code></td><td style="text-align:center;">switch</td><td style="text-align:center;">\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570 val\uFF0C\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;"><code>focus</code></td><td style="text-align:center;">\u4F7F Switch \u83B7\u53D6\u7126\u70B9</td><td style="text-align:center;">\u2014</td></tr></tbody></table>',6),W={setup(n,{expose:e}){return e({frontmatter:{}}),(t,m)=>{const s=a("Preview");return y(),p("div",N,[H,L,r(s,{"comp-name":"Switch","demo-name":"demo"},{default:i(()=>[r(F)]),_:1}),M,r(s,{"comp-name":"Switch","demo-name":"demo2"},{default:i(()=>[r(D)]),_:1}),R,r(s,{"comp-name":"Switch","demo-name":"demo3"},{default:i(()=>[r(S)]),_:1}),z,r(s,{"comp-name":"Switch","demo-name":"demo5"},{default:i(()=>[r($)]),_:1}),G,r(s,{"comp-name":"Switch","demo-name":"demo6"},{default:i(()=>[r(P)]),_:1}),J,r(s,{"comp-name":"Switch","demo-name":"demo7"},{default:i(()=>[r(j)]),_:1}),K])}}};export{W as default};
