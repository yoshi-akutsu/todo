!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o}),r=function(e){const t=[];for(let e=1;e<arguments.length;e++)t.push(arguments[e]);return{title:e,tasks:t}};let l=o("Do dishes","People are coming over and they need done.","Dec 1","High"),d=o("Do laundry","People are coming over and they need done.","Dec 1","High"),i=o("Cleaning","People are coming over and they need done.","Dec 1","High"),c=r("Party Prep",l,d,i);(e=>{const t=document.getElementById("nav");for(let n=0;n<e.length;n++){let o=document.createElement("div"),r=document.createElement("h5");r.textContent=e[n].title,o.appendChild(r);let l=document.createElement("ul");for(let t=0;t<e[n].tasks.length;t++){let o=document.createElement("li");o.textContent=e[n].tasks[t].title,l.appendChild(o)}o.appendChild(l),t.appendChild(o)}})(function(){const e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);return e}(c,r("Party Prep 2",l,d,i))),(e=>{const t=document.getElementById("content");let n=document.createElement("div"),o=document.createElement("h1");o.textContent=e.title,n.appendChild(o);for(let t=0;t<e.tasks.length;t++){let o=document.createElement("p");o.textContent=e.tasks[t].title,n.appendChild(o)}t.appendChild(n)})(c),document.querySelectorAll("#nav > div").forEach(e=>{e.addEventListener("click",()=>{console.log("clicked"),e.childNodes.forEach(e=>{"UL"===e.nodeName&&"none"!==e.style.display?e.style.display="none":"none"===e.style.display&&(e.style.display="block")})})})}]);