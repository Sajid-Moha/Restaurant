(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"235522f98326c0c498a0.png";let n=document.querySelector("#content");console.log("eat this food!"),function(){let t=document.createElement("header"),o=new Image;o.setAttribute("id","logo"),o.src=e;let r=document.createElement("div");r.classList.add("brand-name");let a=document.createElement("H1");a.textContent="Sajid's Savoury Burgers",r.appendChild(a),t.appendChild(o),t.appendChild(r),n.appendChild(t)}(),function(){let t=document.createElement("nav"),e=document.createElement("button");e.classList.add("nav-button"),e.setAttribute("id","about"),e.textContent="About";let o=document.createElement("button");o.classList.add("nav-button"),o.setAttribute("id","menu"),o.textContent="Menu";let r=document.createElement("button");r.classList.add("nav-button"),r.setAttribute("id","contact"),r.textContent="Contact Us",t.appendChild(e),t.appendChild(o),t.appendChild(r),n.appendChild(t)}()})();