import{_ as y}from"./index.41f6d4a5.js";import{r as p,E as a,a as n,o as d,f as g,w as r,e as s,c as F,b as m,Q as _}from"./vendor.dd34a66a.js";const x={name:"Form",setup(){return{listQuery:p({inputValue:"",RadioValue:"",CheckboxValue:[]}),formItem:[{type:"es-input",label:"Input",key:"inputValue",col:12,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165"},listeners:{input:e=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+e)}}},{type:"es-radio",label:"Radio",key:"RadioValue",col:24,width:"100px",options:[{label:"\u9009\u62E91",value:1},{label:"\u9009\u62E92",value:2}],listeners:{change:e=>{a({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}},{type:"es-checkbox",label:"checkbox",key:"CheckboxValue",col:24,width:"100px",options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3}],listeners:{change:e=>{a({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}],rules:{CheckboxValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function b(u,l,e,t,h,o){const c=n("EsForm"),i=n("EsContainer");return d(),g(i,{title:"Form\u7EB5\u5411\u6392\u5217"},{default:r(()=>[s(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var f=y(x,[["render",b]]);const E={name:"Form",setup(){const u=p({inputValue:"",RadioValue:"",CheckboxValue:[]}),l=[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2}];return{listQuery:u,formItem:[{type:"es-input",label:"Input",key:"inputValue",col:8,attrs:{placeholder:"\u8BF7\u8F93\u5165"},listeners:{input:e=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+e)}}},{type:"es-radio",label:"Radio",key:"RadioValue",col:8,options:l,listeners:{change:e=>{a({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}},{type:"es-checkbox",label:"Check",key:"CheckboxValue",col:8,options:l,listeners:{change:e=>{a({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}],rules:{CheckboxValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function k(u,l,e,t,h,o){const c=n("EsForm"),i=n("EsContainer");return d(),g(i,{title:"Form\u6A2A\u5411\u6392\u5217"},{default:r(()=>[s(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var v=y(E,[["render",k]]);const C={name:"Form",setup(){return{listQuery:p({inputValue:"",RadioValue:"",CheckboxValue:[]}),formItem:[{type:"es-input",label:"Input",key:"inputValue",col:24,attrs:{placeholder:"\u8BF7\u8F93\u5165"},listeners:{input:e=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+e)}}},{type:"es-radio",label:"Radio",key:"RadioValue",col:12,options:[{label:"\u9009\u62E91",value:1},{label:"\u9009\u62E92",value:2}],listeners:{change:e=>{a({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}},{type:"es-checkbox",label:"checkbox",key:"CheckboxValue",col:12,options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3}],listeners:{change:e=>{a({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}],rules:{CheckboxValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function V(u,l,e,t,h,o){const c=n("EsForm"),i=n("EsContainer");return d(),g(i,{title:"Form\u7EB5\u6A2A\u6392\u5217"},{default:r(()=>[s(c,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var B=y(C,[["render",V]]);const A={class:"markdown-body"},D=m("h1",null,"Form\u8868\u5355",-1),q=m("h3",null,"\u7EB5\u5411\u793A\u4F8B",-1),I=m("h3",null,"\u6A2A\u5411\u793A\u4F8B",-1),Q=m("h3",null,"\u7EB5\u6A2A\u5411\u793A\u4F8B",-1),R=_('<h3>\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table>',4),N={setup(u,{expose:l}){return l({frontmatter:{}}),(t,h)=>{const o=n("Preview");return d(),F("div",A,[D,q,s(o,{"comp-name":"Form","demo-name":"demo"},{default:r(()=>[s(f)]),_:1}),I,s(o,{"comp-name":"Form","demo-name":"demo2"},{default:r(()=>[s(v)]),_:1}),Q,s(o,{"comp-name":"Form","demo-name":"demo3"},{default:r(()=>[s(B)]),_:1}),R])}}};export{N as default};
