!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(()=>{var e;const t=()=>document.body;return{getBody:t,getMain:()=>e,clearMain:()=>{for(;e.firstChild;)e.removeChild(e.firstChild)},renderMain:()=>{(e=document.createElement("main")).id="main",t().appendChild(e)}}})(),i=(d=[],{render:e=>{r=document.createElement("header"),l=document.createElement("nav");let t=document.createElement("button");t.id="aboutus",t.innerHTML="About Us";let n=document.createElement("button");n.innerHTML="Menu";let a=document.createElement("button");a.innerHTML="Contact",d.push(t),d.push(n),d.push(a);for(let e=0;e<d.length;e++)d[e].setAttribute("class","button"),l.appendChild(d[e]);r.appendChild(l),e.appendChild(r)},getButtons:()=>d});var r,l,d,u=n.p+"b458d389572fdf90aa55be2e37eb0881.jpg";const c={render:e=>{e.clearMain(),(o=document.createElement("div")).id="aboutdiv",o.className="contentdiv";let t=new Image;t.src=u,t.className="cover";let n=document.createElement("h2");n.innerHTML="Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!";let a=document.createElement("h3");a.innerHTML="Etiam quis interdum augue. Mauris vel nisl in sapien malesuada condimentum. Curabitur porta eleifend elit, et varius elit blandit vitae. In sit amet consequat purus. In hac habitasse platea dictumst. Donec volutpat facilisis suscipit. In ac nisl nec orci pretium sagittis vitae sit amet orci. Aliquam cursus ipsum in commodo tempus. Nulla lobortis, quam eu scelerisque maximus, lacus dolor auctor ipsum, eget suscipit orci sem in tellus.",o.appendChild(t),o.appendChild(n),o.appendChild(a),e.getMain().appendChild(o)}};var o,s=n.p+"4ffa87d6838028ce0bde3a564499af7b.jpg",m=n.p+"0c9962bb9a59551955e1703870739e41.jpg",p=n.p+"113013f367c1eeb60f92edd2e9382f9e.jpg",f=n.p+"9f6d4cea7e9581e82b65448596fac7f2.jpg";const h=(()=>{const e=["Aenean dictum sapien et diam.","Nunc interdum felis eu urna.","Sed pulvinar enim vitae neque.","Duis convallis, libero at feugiat."],t=[];var n;const a=e=>Math.floor(Math.random()*Math.floor(e)),i=()=>{let t=document.createElement("ul");t.className="list";for(let n=e.length;n>0;n--){let i=document.createElement("li");i.className="listItem";let r=document.createElement("h4");r.innerHTML=e[a(n)];let l=document.createElement("h4");l.innerHTML="$ "+a(100)+".00",i.appendChild(r),i.appendChild(l),t.appendChild(i)}return t};return{render:a=>{(()=>{let e=new Image;e.src=s;let n=new Image;n.src=m;let a=new Image;a.src=p;let i=new Image;i.src=f,t.push(e),t.push(n),t.push(a),t.push(i);for(let e=0;e<t.length;e++)t[e].className="menuImage"})(),a.clearMain(),(n=document.createElement("div")).id="menudiv",n.className="contentdiv";for(let a=0;a<e.length;a++){let r=document.createElement("h3");r.className="listTitle",r.innerHTML=e[a],n.appendChild(r),console.log(t[a]),n.appendChild(t[a]),n.appendChild(i())}a.getMain().appendChild(n)}}})(),b={render:e=>{e.clearMain(),(g=document.createElement("div")).id="contactdiv",g.className="contentdiv";let t=document.createElement("form");t.id="contactForm";let n=document.createElement("input"),a=document.createElement("label");n.type="text",n.id="name",n.required=!0,a.for="name",a.innerHTML="Name",a.style.textAlign="left";let i=document.createElement("input"),r=document.createElement("label");i.type="number",i.id="number",i.required=!0,r.for="number",r.innerHTML="Whatsapp number",r.style.textAlign="left";let l=document.createElement("textarea"),d=document.createElement("label");l.id="message",l.rows=10,l.required=!0,d.for="message",d.innerHTML="What do you want to say to us?",d.style.textAlign="left";let u=document.createElement("input");u.type="submit",u.id="submit",u.value="Send",t.appendChild(a),t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(d),t.appendChild(l),t.appendChild(u),g.appendChild(t),e.getMain().appendChild(g)}};var g;i.render(a.getBody()),a.renderMain();(()=>{const e=e=>{switch(e){case 0:c.render(a);break;case 1:h.render(a);break;case 2:b.render(a)}};return{tabsLogic:()=>{let t=i.getButtons();for(let n=0;n<t.length;n++)t[n].addEventListener("click",()=>{e(n)})}}})().tabsLogic()}]);