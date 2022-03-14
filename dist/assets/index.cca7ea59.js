import{o as i,c as r,t as _,r as m,a as e,b as d,d as b,e as g,f as c,n as u,u as $,F as v,g as x,h as k}from"./vendor.c768a6b1.js";const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};w();const f={props:["text"],setup(s){return(t,a)=>(i(),r("h1",null,_(s.text),1))}},y={props:["text"],setup(s){return(t,a)=>(i(),r("h3",null,_(s.text),1))}},S={setup(s){const t=m([{text:'"Quando voc\xEA acerta o software, algo m\xE1gico acontece: voc\xEA n\xE3o precisa de hordas de programadores para mant\xEA-lo funcionando". ',author:"(Robert C. Martin, Arquitetura Limpa)."}]);return(a,l)=>(i(),r("p",null,[e("cite",null,_(t.value[0].text),1),d(_(t.value[0].author),1)]))}};var j="./assets/github.15008ff3.png",h=(s,t)=>{const a=s.__vccOpts||s;for(const[l,o]of t)a[l]=o;return a};const A={},C={href:"https://github.com/alvarengacarlos",target:"blank"},L=e("img",{src:j,alt:"Github icon",width:"30"},null,-1),D=[L];function I(s,t){return i(),r("a",C,D)}var N=h(A,[["render",I]]),P="./assets/api.95d3bb96.png",E="./assets/dev.07e21002.png",B="./assets/elephant.2007025e.png",F="./assets/penguin.8fe54818.png",O="./assets/ux.07c7e317.png";const T={},V={id:"carouselExampleSlidesOnly",class:"carousel slide","data-bs-ride":"carousel"},q=b('<div class="carousel-inner"><div class="carousel-item active"><img src="'+P+'" class="d-block w-100" alt="Api imagem"></div><div class="carousel-item"><img src="'+E+'" class="d-block w-100" alt="Desenvolvimento imagem"></div><div class="carousel-item"><img src="'+B+'" class="d-block w-100" alt="Elefante imagem"></div><div class="carousel-item"><img src="'+F+'" class="d-block w-100" alt="Pinguim imagem"></div><div class="carousel-item"><img src="'+O+'" class="d-block w-100" alt="Experi\xEAncia do Usu\xE1rio imagem"></div></div>',1),H=[q];function M(s,t){return i(),r("div",V,H)}var U=h(T,[["render",M]]);const G=["id"],Q={class:"col-1"},R={class:"col-7"},W={class:"col-4"},z={props:["idSection"],setup(s){const t=g({"fw-bold":!0}),a=g({"fst-italic":!0});return(l,o)=>(i(),r("div",{class:"row d-flex align-items-center",id:s.idSection},[e("div",Q,[c(N)]),e("div",R,[c(f,{class:u($(t)),text:"Ol\xE1, eu sou Carlos"},null,8,["class"]),c(y,{class:u($(a)),text:"Desenvolvedor de Software"},null,8,["class"]),c(S)]),e("div",W,[c(U)])],8,G))}};var J="./assets/linkedin.3282007e.png";const K={},X={href:"https://www.linkedin.com/in/carlos-henrique-alvarenga-dos-santos-6985a4224?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGkQQ06beTfi1ehgoqs8WyA%3D%3D",target:"blank"},Y=e("img",{src:J,alt:"LinkedIn Icon",width:"30"},null,-1),Z=e("span",{class:"ps-1"},"LinkedIn",-1),tt=[Y,Z];function et(s,t){return i(),r("a",X,tt)}var st=h(K,[["render",et]]),ot="./assets/email.1ffd3a06.png";const it={},rt=e("img",{src:ot,alt:"LinkedIn Icon",width:"30"},null,-1),at=e("span",{class:"ps-1"},"carlosho200@hotmail.com",-1),ct=[rt,at];function nt(s,t){return i(),r("div",null,ct)}var lt=h(it,[["render",nt]]);const dt=["id"],_t={class:"col"},ut={class:"d-flex justify-content-around pt-2"},pt={props:["idSection"],setup(s){const t={"fw-bold":!0};return(a,l)=>(i(),r("div",{class:"row",id:s.idSection},[e("div",_t,[c(f,{class:u(t),text:"Contato"}),e("div",ut,[c(st),c(lt)])])],8,dt))}};var ht="./assets/php.d5b35dd7.png",ft="./assets/javascript.9ef631e6.png",mt="./assets/html-5.f8cd2bbb.png",vt="./assets/css.a71123f1.png",gt="./assets/linux.e95eb46e.png",$t="./assets/docker.9c871ca1.png",bt="./assets/git.544d51fb.png";const xt={},kt={class:"d-flex justify-content-around pt-2"},wt=b('<img src="'+ht+'" alt="Php logo" width="50"><img src="'+ft+'" alt="Javascript logo" width="50"><img src="'+mt+'" alt="Html5 logo" width="50"><img src="'+vt+'" alt="Css logo" width="50"><img src="'+gt+'" alt="Linux logo" width="50"><img src="'+$t+'" alt="Docker logo" width="50"><img src="'+bt+'" alt="Git logo" width="50">',7),yt=[wt];function St(s,t){return i(),r("div",kt,yt)}var jt=h(xt,[["render",St]]);const At=["id"],Ct={class:"col"},Lt=e("p",null,[d("Certifica\xE7\xF5es dispon\xEDvel em "),e("a",{href:"https://github.com/alvarengacarlos/Certificados",target:"blank"},"Reposit\xF3rio"),d(".")],-1),Dt={props:["idSection"],setup(s){const t={"fw-bold":!0};return(a,l)=>(i(),r("div",{class:"row",id:s.idSection},[e("div",Ct,[c(f,{class:u(t),text:"Habilidades"}),Lt,c(jt)])],8,At))}},It=["id"],Nt={class:"d-flex justify-content-around ps-2"},Pt={class:"card-header"},Et={class:"card-body"},Bt={class:"card-text"},Ft=["href"],Ot={props:["idSection"],setup(s){const t={"fw-bold":!0},a=m([{title:"Task Manager",description:"Api do Backend desenvolvido com Laravel e Frontend com Vuejs.",repositoryUrl:"https://github.com/alvarengacarlos/Task-Manager"},{title:"My Profile",description:"Frontend desenvolvido com Vuejs.",repositoryUrl:"https://github.com/alvarengacarlos/My-Profile"},{title:"Desafio Trello",description:"Api do Backend desenvolvido com Express",repositoryUrl:"https://github.com/alvarengacarlos/Desafio-Trello"},{title:"Arch Node",description:"Wrapper para o Express",repositoryUrl:"https://github.com/alvarengacarlos/Arch-Node"}]);return(l,o)=>(i(),r("div",{class:"row",id:s.idSection},[c(f,{class:u(t),text:"Projetos"}),e("div",Nt,[(i(!0),r(v,null,x(a.value,(n,p)=>(i(),r("div",{key:p,class:"card text-white bg-dark mb-3",style:{"max-width":"18rem"}},[e("div",Pt,_(n.title),1),e("div",Et,[e("p",Bt,_(n.description),1),e("a",{href:n.repositoryUrl,target:"blank"},"Repositorio",8,Ft)])]))),128))])],8,It))}},Tt={class:"row justify-content-center nav nav-tabs fixed-top bg-white border border-dark"},Vt=["href"],qt={props:["sections"],setup(s){return(t,a)=>(i(),r("div",Tt,[(i(!0),r(v,null,x(s.sections,(l,o)=>(i(),r("div",{class:"col nav-item",key:o},[e("a",{class:"nav-link text-center",href:l.href},_(l.title),9,Vt)]))),128))]))}},Ht=e("h4",{class:"text-bold"},"Direitos",-1),Mt=d("Direitos das imagens e icones reservados a "),Ut=["href"],Gt=d("."),Qt=d("Direitos do sistema reservados a "),Rt=["href"],Wt=d("."),zt=d("Creditos a "),Jt=["href"],Kt=d(" e a "),Xt=["href"],Yt=d("."),Zt={setup(s){const t=m([""]);return t.value.freepik="https://br.freepik.com/",t.value.github="https://github.com/alvarengacarlos",t.value.vuejs="https://vuejs.org/",t.value.bootstrap="https://getbootstrap.com/",(a,l)=>(i(),r(v,null,[Ht,e("p",null,[Mt,e("a",{href:t.value.freepik,target:"blank"},"Freepik",8,Ut),Gt]),e("p",null,[Qt,e("a",{href:t.value.github,target:"blank"},"Carlos Henrique Alvarenga Dos Santos",8,Rt),Wt]),e("p",null,[zt,e("a",{href:t.value.vuejs,target:"blank"},"Vuejs",8,Jt),Kt,e("a",{href:t.value.bootstrap,target:"blank"},"Bootstrap",8,Xt),Yt])],64))}},te={class:"row"},ee={class:"col"},se={class:"row mt-5 pt-5"},oe={class:"row pt-5"},ie={class:"row pt-5"},re={class:"row pt-5"},ae={class:"row pt-5"},ce={setup(s){const t=[{id:"Home",title:"In\xEDcio",href:"#Home"},{id:"Contact",title:"Contato",href:"#Contact"},{id:"Skills",title:"Habilidades",href:"#Skills"},{id:"Projects",title:"Projetos",href:"#Projects"}],a={"bg-primary":!1};return(l,o)=>(i(),r("div",te,[e("div",ee,[e("header",null,[c(qt,{class:u(a),sections:t})]),e("main",null,[e("div",se,[c(z,{idSection:t[0].id},null,8,["idSection"])]),e("div",oe,[c(pt,{idSection:t[1].id},null,8,["idSection"])]),e("div",ie,[c(Dt,{idSection:t[2].id},null,8,["idSection"])]),e("div",re,[c(Ot,{idSection:t[3].id},null,8,["idSection"])])]),e("footer",null,[e("div",ae,[c(Zt)])])])]))}};k(ce).mount("#app");
