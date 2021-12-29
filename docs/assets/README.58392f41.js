import{_ as x}from"./index.41f6d4a5.js";import{l as _,r as m,E as o,a as r,o as g,f as h,w as s,e as n,H as p,c as F,b as u,Q as E}from"./vendor.dd34a66a.js";const f={name:"TimeSelect",setup(){const e=_("");return{listQuery:m({TimeSelectValue:e}),formItem:[{type:"es-time-select",label:"TimeSelect",key:"TimeSelectValue",col:12,width:"100px",tagAttrs:{"start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4","value-format":"timestamp"},listeners:{change:d=>{o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+d,type:"success"})}}}],rules:{TimeSelectValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function T(e,l,d,t,y,c){const a=r("EsForm"),i=r("EsContainer");return g(),h(i,{title:"TimeSelect\u7EC4\u4EF6"},{default:s(()=>[n(a,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var b=x(f,[["render",T]]);const S={name:"TimeSelect",setup(){const e=m({TimeSelectValue:"",TimeEndValue:""}),l=p(e).TimeSelectValue;return console.log("TimeSelectValue",l),{listQuery:e,formItem:[{type:"es-time-select",label:"StartTime",key:"TimeSelectValue",col:12,width:"100px",tagAttrs:{placeholder:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4",start:"8:30",step:"00:15",end:"18:30"},listeners:{change:t=>{o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+t,type:"success"})}}},{type:"es-time-select",label:"EndTime",key:"TimeEndValue",col:12,width:"100px",tagAttrs:{placeholder:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",start:"08:30",step:"00:15",end:"18:30"},listeners:{change:t=>{console.log("value.TimeSelectValue",e),o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+t,type:"success"})}}}],rules:{TimeSelectValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}],TimeEndValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function C(e,l,d,t,y,c){const a=r("EsForm"),i=r("EsContainer");return g(),h(i,{title:"TimeSelect\u7EC4\u4EF6"},{default:s(()=>[n(a,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var v=x(S,[["render",C]]);const V={class:"markdown-body"},B=u("h1",null,"TimeSelect\u7EC4\u4EF6",-1),D=u("h3",null,"\u793A\u4F8B",-1),k=u("h3",null,"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4",-1),w=E('<h3>\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>disabled</code></td><td style="text-align:center;">\u7981\u7528</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>editable</code></td><td style="text-align:center;">\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code> true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>clearable</code></td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>size</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u5C3A\u5BF8</td><td style="text-align:center;">string</td><td style="text-align:center;">large/medium/small/mini</td><td style="text-align:center;"><code>large</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>placeholder</code></td><td style="text-align:center;">\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>name</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>prefix-icon</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>clear-icon</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u6E05\u9664\u5F53\u524D\u9009\u62E9\u7684\u56FE\u6807</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>CircleClose</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>start</code></td><td style="text-align:center;">\u5F00\u59CB\u65F6\u95F4</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>09:00</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>end</code></td><td style="text-align:center;">\u7ED3\u675F\u65F6\u95F4</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>18:00</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>step</code></td><td style="text-align:center;">\u95F4\u9694\u65F6\u95F4</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>00:30</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>min-time</code></td><td style="text-align:center;">\u6700\u5C0F\u65F6\u95F4\uFF0C\u5C0F\u4E8E\u8BE5\u65F6\u95F4\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>00:00</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>max-time</code></td><td style="text-align:center;">\u6700\u5927\u65F6\u95F4\uFF0C\u5927\u4E8E\u8BE5\u65F6\u95F4\u7684\u65F6\u95F4\u6BB5\u5C06\u88AB\u7981\u7528</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table>',4),$={setup(e,{expose:l}){return l({frontmatter:{}}),(t,y)=>{const c=r("Preview");return g(),F("div",V,[B,D,n(c,{"comp-name":"TimeSelect","demo-name":"demo"},{default:s(()=>[n(b)]),_:1}),k,n(c,{"comp-name":"TimeSelect","demo-name":"demo2"},{default:s(()=>[n(v)]),_:1}),w])}}};export{$ as default};
