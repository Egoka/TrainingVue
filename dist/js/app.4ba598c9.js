(function(t){function e(e){for(var n,o,c=e[0],l=e[1],u=e[2],d=0,b=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);r&&r(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var r=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1d91":function(t,e,a){},"34b0":function(t,e,a){},"441a":function(t,e,a){},"4f37":function(t,e){t.exports={urlListComments:Object({NODE_ENV:"production",BASE_URL:"/"}).urlListComments,urlDB:Object({NODE_ENV:"production",BASE_URL:"/"}).urlDB}},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const s={class:"container"},i={class:"container"};function o(t,e,a,o,c,l){const u=Object(n["n"])("app-resume"),r=Object(n["n"])("app-input-form"),d=Object(n["n"])("app-comments");return Object(n["i"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",s,[Object(n["h"])(u,{onMoveData:l.moveData,onEditData:l.editData,onDeleteBlock:l.deleteBlock,onSaveResume:l.saveResume,resume:c.resume},null,8,["onMoveData","onEditData","onDeleteBlock","onSaveResume","resume"]),Object(n["h"])(r,{"select-list":c.selectList,onAddBlock:l.addBlock},null,8,["select-list","onAddBlock"])]),Object(n["f"])("div",i,[Object(n["h"])(d,{comments:c.comments,"loud-comment":c.loud,onGetComments:l.loudComments},null,8,["comments","loud-comment","onGetComments"])])],64)}const c={class:"card card-w70",style:{margin:"0 auto"}},l={class:"form-control"},u=Object(n["f"])("label",{for:"type"},"Тип блока",-1),r=["value"],d={class:"form-control"},b=Object(n["f"])("label",{for:"value"},"Значение",-1),m=["disabled"];function p(t,e,a,s,i,o){return Object(n["i"])(),Object(n["e"])("form",c,[Object(n["f"])("div",l,[u,Object(n["t"])(Object(n["f"])("select",{id:"type","onUpdate:modelValue":e[0]||(e[0]=t=>i.select=t)},[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.selectList,t=>(Object(n["i"])(),Object(n["e"])("option",{key:"option",value:t.value},Object(n["p"])(t.text),9,r))),128))],512),[[n["q"],i.select]])]),Object(n["f"])("div",d,[b,Object(n["t"])(Object(n["f"])("textarea",{id:"value",rows:"3","onUpdate:modelValue":e[1]||(e[1]=t=>i.input=t)},null,512),[[n["r"],i.input]])]),Object(n["f"])("button",{class:"btn primary",disabled:i.input.length<3,onClick:e[2]||(e[2]=Object(n["u"])(e=>t.$emit("addBlock",i.select,i.input),["prevent"]))},"Добавить",8,m)])}var j={name:"AppInputForm",emits:["addBlock"],props:{selectList:{type:Array,default:[{value:"title",text:"Заголовок"},{value:"subtitle",text:"Подзаголовок"},{value:"avatar",text:"Аватар"},{value:"text",text:"Текст"}],validator(t){return t.map(t=>void 0!==t.value&&void 0!==t.text).reduce((t,e)=>t+e,0)===t.length}}},data(){return{select:this.selectList[0].value,input:""}}},O=a("6b0d"),f=a.n(O);const v=f()(j,[["render",p]]);var h=v;const y={class:"card centerFlex card-w70",style:{margin:"10px auto"}},k={class:"moveData"},x=["onClick"],D=["onClick"],g=["onClick"];function C(t,e,a,s,i,o){return Object(n["i"])(),Object(n["e"])("div",y,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.resume,(e,a)=>(Object(n["i"])(),Object(n["e"])("div",{key:a,class:"list-item"},[Object(n["f"])("div",k,[Object(n["f"])("button",{class:"arrowData material-icons-outlined",onClick:e=>t.$emit("moveData",a,!0)},"expand_less",8,x),Object(n["f"])("button",{class:"arrowData material-icons-outlined",onClick:e=>t.$emit("moveData",a,!1)},"expand_more",8,D)]),(Object(n["i"])(),Object(n["c"])(Object(n["o"])(o.addBlock(e.type)),{id:a,type:e.type,text:e.text,onEditData:o.editData},{default:Object(n["s"])(()=>[Object(n["g"])(Object(n["p"])(e.text),1)]),_:2},1032,["id","type","text","onEditData"])),Object(n["f"])("button",{onClick:e=>t.$emit("deleteBlock",a),class:"close material-icons-outlined"},"do_disturb_on",8,g)]))),128))])}const S={style:{width:"100%"}},w=["contenteditable"],B=["contenteditable"],_=["contenteditable"],L=["contenteditable"],R=["contenteditable"];function A(t,e,a,s,i,o){return Object(n["i"])(),Object(n["e"])("div",S,["title"===a.type?(Object(n["i"])(),Object(n["e"])("h1",{key:0,contenteditable:i.inputStatus,onClick:e[0]||(e[0]=t=>i.inputStatus=!0),onMouseout:e[1]||(e[1]=(...t)=>o.editData&&o.editData(...t))},[Object(n["m"])(t.$slots,"default",{},void 0,!0)],40,w)):"subtitle"===a.type?(Object(n["i"])(),Object(n["e"])("h2",{key:1,contenteditable:i.inputStatus,onClick:e[2]||(e[2]=t=>i.inputStatus=!0),onMouseout:e[3]||(e[3]=(...t)=>o.editData&&o.editData(...t))},[Object(n["m"])(t.$slots,"default",{},void 0,!0)],40,B)):"subtitle1"===a.type?(Object(n["i"])(),Object(n["e"])("h3",{key:2,contenteditable:i.inputStatus,onClick:e[4]||(e[4]=t=>i.inputStatus=!0),onMouseout:e[5]||(e[5]=(...t)=>o.editData&&o.editData(...t))},[Object(n["m"])(t.$slots,"default",{},void 0,!0)],40,_)):"subtitle2"===a.type?(Object(n["i"])(),Object(n["e"])("h4",{key:3,contenteditable:i.inputStatus,onClick:e[6]||(e[6]=t=>i.inputStatus=!0),onMouseout:e[7]||(e[7]=(...t)=>o.editData&&o.editData(...t))},[Object(n["m"])(t.$slots,"default",{},void 0,!0)],40,L)):"text"===a.type?(Object(n["i"])(),Object(n["e"])("p",{key:4,contenteditable:i.inputStatus,onClick:e[8]||(e[8]=t=>i.inputStatus=!0),onMouseout:e[9]||(e[9]=(...t)=>o.editData&&o.editData(...t))},[Object(n["m"])(t.$slots,"default",{},void 0,!0)],40,R)):Object(n["d"])("",!0)])}var E={name:"AppText",inject:["typeList"],emits:["editData"],props:{id:Number,type:String,text:String},data(){return{inputStatus:!1}},methods:{editData(t){this.inputStatus&&(this.inputStatus=!1,this.$emit("editData",this.id,t.target.innerText))}}};a("f218");const $=f()(E,[["render",A],["__scopeId","data-v-2ab98f86"]]);var M=$;const T=["src"],I=["placeholder"];function P(t,e,a,s,i,o){return Object(n["i"])(),Object(n["e"])("div",{style:{width:"100%"},onChange:e[2]||(e[2]=(...t)=>o.editData&&o.editData(...t))},["avatar"===a.type?(Object(n["i"])(),Object(n["e"])("div",{key:0,onClick:e[1]||(e[1]=t=>i.inputStatus=!0),class:"avatar"},[Object(n["f"])("img",{src:a.text,alt:""},null,8,T),i.inputStatus?Object(n["t"])((Object(n["i"])(),Object(n["e"])("input",{key:0,"onUpdate:modelValue":e[0]||(e[0]=t=>a.text=t),class:"inputLink",type:"url",placeholder:a.text},null,8,I)),[[n["r"],a.text,void 0,{trim:!0}]]):Object(n["d"])("",!0)])):Object(n["d"])("",!0)],32)}var N={name:"AppAvatar",emits:["editData"],props:{id:Number,type:String,text:String},data(){return{inputStatus:!1}},methods:{async editData(t){try{const e=t.target.value;await fetch(e);this.inputStatus&&(console.log(this.inputStatus),this.inputStatus=!1,this.$emit("editData",this.id,e))}catch(e){t.target.style.borderBottomColor="#e53935"}}}};a("bac5");const U=f()(N,[["render",P],["__scopeId","data-v-7da6ac5b"]]);var V=U,F={name:"AppResume",inject:["typeList"],emits:["moveData","deleteBlock","saveResume","editData"],props:{resume:Array},methods:{addBlock(t){return this.typeList.filter(t=>"text"===t.type).some(e=>e.value===t)?"app-text":this.typeList.filter(t=>"block"===t.type).some(e=>e.value===t)?"app-avatar":void 0},editData(t,e){this.$emit("editData",t,e)}},components:{appText:M,appAvatar:V}};a("7999");const J=f()(F,[["render",C],["__scopeId","data-v-71d3b433"]]);var G=J;const H={key:0,style:{"text-align":"center"}},q={key:1,class:"loader"},z={key:2,class:"card"},K=Object(n["f"])("h1",null,"Комментарии",-1),Q=[K],W={key:3,class:"list"},X={class:"card",style:{width:"100%"}},Y=Object(n["f"])("hr",null,null,-1),Z={key:4};function tt(t,e,a,s,i,o){return Object(n["i"])(),Object(n["e"])(n["a"],null,[a.loudComment?Object(n["d"])("",!0):(Object(n["i"])(),Object(n["e"])("p",H,[Object(n["f"])("button",{class:"btn primary",onClick:e[0]||(e[0]=e=>t.$emit("getComments"))},"Загрузить комментарии")])),a.loudComment?(Object(n["i"])(),Object(n["e"])("div",q)):Object(n["d"])("",!0),a.comments.length>0?(Object(n["i"])(),Object(n["e"])("div",z,Q)):Object(n["d"])("",!0),a.comments.length>0?(Object(n["i"])(),Object(n["e"])("ul",W,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.comments,t=>(Object(n["i"])(),Object(n["e"])("li",{key:t.id,class:"list-item"},[Object(n["f"])("div",X,[Object(n["f"])("h4",null,Object(n["p"])(t.email),1),(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(t.listComments,(t,e)=>(Object(n["i"])(),Object(n["e"])("div",{key:e},[Object(n["f"])("small",null,Object(n["p"])(t.body),1),Y]))),128))])]))),128))])):(Object(n["i"])(),Object(n["e"])("div",Z,"Коментариев еще нет"))],64)}var et={name:"AppComments",emits:["getComments"],props:{comments:Array,loudComment:{type:Boolean,default:!1}}};const at=f()(et,[["render",tt]]);var nt=at,st=a("af86"),it={mounted(){this.loudResume()},data(){return{selectList:[{value:"title",text:"Заголовок",type:"text"},{value:"subtitle",text:"Подзаголовок",type:"text"},{value:"subtitle1",text:"Подзаголовок H3",type:"text"},{value:"subtitle2",text:"Подзаголовок H4",type:"text"},{value:"avatar",text:"Аватар",type:"block"},{value:"text",text:"Текст",type:"text"}],resume:[],comments:[],loud:!1}},provide(){return{typeList:this.selectList}},methods:{async loudResume(){try{const t=await fetch(st["urlDB"]+".json"),e=await t.json();console.log(e),this.resume=e[Object.keys(e)[Object.keys(e).length-1]]}catch(t){console.log(t)}},loudComments(){this.loud=!0,setTimeout(async()=>{try{const t=await fetch(st["urlListComments"]),e=await t.json();e.map(t=>{const e=this.comments.findIndex(e=>e.id===t.postId);e>=0?this.comments[e].listComments.push({id:t.id,key:t.name,body:t.body}):this.comments.push({id:t.postId,email:t.email,listComments:[{id:t.id,key:t.name,body:t.body}]})}),this.loud=!1}catch(t){console.log(t)}},1e3)},addBlock(t,e){this.resume.push({type:t,text:e}),this.saveResume()},editData(t,e){this.resume[t].text=e,this.saveResume()},moveData(t,e){if(e){if(t>0){const e=this.resume[t];this.resume[t]=this.resume[t-1],this.resume[t-1]=e,this.saveResume()}}else if(this.resume.length>t){const e=this.resume[t];this.resume[t]=this.resume[t+1],this.resume[t+1]=e,this.saveResume()}},deleteBlock(t){this.resume=this.resume.filter((e,a)=>a!==t),this.saveResume()},async saveResume(){let t=await fetch(st["urlDB"]+".json");t=await t.json(),Object.keys(t).map(async t=>await fetch(st["urlDB"]+"/"+t+".json",{method:"DELETE"}));const e=await fetch(st["urlDB"]+".json",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.resume)});console.log(e)}},components:{appInputForm:h,appResume:G,appComments:nt}};const ot=f()(it,[["render",o]]);var ct=ot;a("441a");Object(n["b"])(ct).mount("#app")},7999:function(t,e,a){"use strict";a("34b0")},af86:function(t,e,a){t.exports=a("4f37")},bac5:function(t,e,a){"use strict";a("cff4")},cff4:function(t,e,a){},f218:function(t,e,a){"use strict";a("1d91")}});
//# sourceMappingURL=app.4ba598c9.js.map