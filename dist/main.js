!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(()=>{var e;const t=()=>document.body;return{getBody:t,getMain:()=>e,clearMain:()=>{for(;e.firstChild;)e.removeChild(e.firstChild)},renderMain:()=>{(e=document.createElement("main")).id="main",t().appendChild(e)}}})(),r=(l=[],{render:e=>{i=document.createElement("header"),u=document.createElement("nav");let t=document.createElement("button");t.id="aboutus",t.innerHTML="About Us";let n=document.createElement("button");n.innerHTML="Menu";let a=document.createElement("button");a.innerHTML="Contact",l.push(t),l.push(n),l.push(a);for(let e=0;e<l.length;e++)l[e].setAttribute("class","button"),u.appendChild(l[e]);i.appendChild(u),e.appendChild(i)},getButtons:()=>l});var i,u,l;const s={render:e=>{e.clearMain(),d=document.createElement("div");let t=document.createElement("h3");t.innerHTML="Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!",d.appendChild(t),e.getMain().appendChild(d)}};var d;const o={render:e=>{e.clearMain(),c=document.createElement("div");let t=document.createElement("h3");t.innerHTML="Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!",c.appendChild(t),e.getMain().appendChild(c)}};var c;const p={render:e=>{e.clearMain(),m=document.createElement("div");let t=document.createElement("h3");t.innerHTML="Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!",m.appendChild(t),e.getMain().appendChild(m)}};var m;r.render(a.getBody()),a.renderMain();(()=>{const e=e=>{switch(e){case 0:s.render(a);break;case 1:o.render(a);break;case 2:p.render(a)}};return{tabsLogic:()=>{let t=r.getButtons();for(let n=0;n<t.length;n++)t[n].addEventListener("click",()=>{e(n)})}}})().tabsLogic()}]);