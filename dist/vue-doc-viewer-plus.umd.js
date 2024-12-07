(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("ant-design-vue")):typeof define=="function"&&define.amd?define(["exports","vue","ant-design-vue"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.VueDocViewerPlus={},l.Vue,l.antd))})(this,function(l,e,h){"use strict";const k={class:"vue-doc-viewer"},b={class:"modal-header"},v={class:"doc-viewer-container"},g=["src"],x=["src"],y={key:2,class:"unsupported-format"},w=((i,d)=>{const c=i.__vccOpts||i;for(const[p,o]of d)c[p]=o;return c})(e.defineComponent({__name:"DocViewerPlus",props:{fileUrl:{type:String,required:!0},fileName:{type:String,required:!1},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(i,{emit:d}){const c=h.Modal,p=h.Image,o=i,f=d,n=e.ref(o.visible),s=e.ref(!1);e.watch(()=>o.visible,t=>{m.value?s.value=t:n.value=t}),e.watch(()=>n.value,t=>{f("update:visible",t)});const B=()=>{n.value=!1,s.value=!1,f("update:visible",!1)},V=t=>{s.value=t,f("update:visible",t)},E=()=>{if(o.fileUrl){const t=document.createElement("a");t.href=o.fileUrl,t.download=o.fileName||`${Date.now()}.${a.value}`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}},a=e.computed(()=>{var t;return((t=o.fileUrl.split(".").pop())==null?void 0:t.toLowerCase())||""}),m=e.computed(()=>["jpg","jpeg","png","gif","bmp","webp"].includes(a.value)),U=e.computed(()=>a.value==="pdf"),_=e.computed(()=>["doc","docx","xls","xlsx","ppt","pptx"].includes(a.value)),N=e.computed(()=>`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(o.fileUrl)}`);return(t,r)=>(e.openBlock(),e.createElementBlock("div",k,[m.value&&s.value?e.withDirectives((e.openBlock(),e.createBlock(e.unref(p),{key:0,style:{display:"none"},width:200,src:o.fileUrl,preview:{visible:s.value,onVisibleChange:u=>{V(u)}},class:"preview-image"},null,8,["src","preview"])),[[e.vShow,!1]]):e.createCommentVNode("",!0),m.value?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(c),{key:1,visible:n.value,"onUpdate:visible":r[0]||(r[0]=u=>n.value=u),footer:null,onCancel:B,width:"80%",wrapClassName:"doc-viewer-modal",centered:!0},{title:e.withCtx(()=>[e.createElementVNode("div",b,[r[1]||(r[1]=e.createElementVNode("span",{class:"modal-title"},"预览",-1)),_.value?(e.openBlock(),e.createElementBlock("span",{key:0,class:"download-btn",onClick:E,style:{position:"absolute",right:"80px"}}," 下载 ")):e.createCommentVNode("",!0)])]),default:e.withCtx(()=>[e.createElementVNode("div",v,[_.value?(e.openBlock(),e.createElementBlock("iframe",{key:0,src:N.value,width:"100%",height:"100%",frameborder:"0"},null,8,g)):U.value?(e.openBlock(),e.createElementBlock("embed",{key:1,src:o.fileUrl,type:"application/pdf",width:"100%",height:"100%"},null,8,x)):(e.openBlock(),e.createElementBlock("div",y," 不支持的文件格式 "))])]),_:1},8,["visible"]))]))}}),[["__scopeId","data-v-5489040c"]]),C={install:i=>{i.component("DocViewerPlus",w)}};l.DocViewerPlus=w,l.default=C,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
