(function(e){function t(t){for(var n,o,i=t[0],s=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec83033c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"32f80e60"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Map")]),e._v(" | "),r("router-link",{attrs:{to:"/calendar"}},[e._v("Calendar")]),e._v(" | "),r("router-link",{attrs:{to:"/read-me"}},[e._v("READ ME")])],1),r("router-view")],1)},a=[],u=(r("5c0b"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=r("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mapbox-map",{key:e.index,ref:"map",attrs:{id:"map",accessToken:e.accessToken,mapStyle:e.mapStyle},on:{"mb-created":function(t){return e.map=t}}},[r("mapbox-cluster",{attrs:{data:e.markers},on:{"update:data":function(t){e.markers=t}}})],1)},f=[],m=(r("d81d"),r("cae8")),h=r.n(m),v={name:"Map",data:function(){return{accessToken:"pk.eyJ1IjoiYWlyc3RhZmYiLCJhIjoiY2tscWJwemQ2MWIzejJ2bDZ3cWZqdHVnaCJ9.V8YkvVvSHLv_Ebd-EZxf7A",mapStyle:"mapbox://styles/mapbox/light-v10",map:null,draw:null,index:1,data:{features:[{type:"Marker",geometry:{type:"Marker",coordinates:[-151.5129,63.1016]}},{type:"Marker",geometry:{type:"Marker",coordinates:[-150.4048,63.1224]}},{type:"Marker",geometry:{type:"Marker",coordinates:[-151.3597,63.0781]}}]}}},computed:{markers:function(){return this.data}},mounted:function(){this.draw=new h.a({displayControlsDefault:!1,controls:{polygon:!0,trash:!0}}),this.map.addControl(this.draw,"top-right"),this.map.on("draw.create",this.updateArea),this.map.on("draw.delete",this.updateArea),this.map.on("draw.update",this.updateArea),this.map.on("load",this.updateArea);var e={type:"Marker",geometry:{type:"Marker",coordinates:[-154.3597,62.0781]}};this.data.features.push(e)},methods:{updateArea:function(e){var t=this.draw.getAll(),r=(t.features[0].geometry.coordinates[0],{type:"Marker",geometry:{type:"Marker",coordinates:[-154.3597,62.0781]}});this.data.features.push(r)}}},g=v,b=(r("811b"),Object(u["a"])(g,p,f,!1,null,null,null)),y=b.exports;n["default"].use(d["a"]);var w=[{path:"/",name:"Map",component:y},{path:"/read-me",name:"Read-me",component:function(){return r.e("about").then(r.bind(null,"4fdf"))}},{path:"/calendar",name:"Calendar",component:function(){return r.e("about").then(r.bind(null,"ac0f"))}}],k=new d["a"]({mode:"history",routes:w}),_=k,A=r("2f62");n["default"].use(A["a"]);var M=new A["a"].Store({state:{attributes:[{customData:{title:"Cookout with girl.",class:"bg-orange-500 text-white"},dates:{months:[1,2,3,4,5,6,7,8,9,10,11,12],days:12}}]},mutations:{UPDATE_ATTRIBUTES:function(e,t){e.attributes.push(t)}},actions:{},modules:{}}),j=r("617c");r("ac6d");n["default"].use(j["a"]),new n["default"]({router:_,store:M,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"811b":function(e,t,r){"use strict";r("dee9")},"9c0c":function(e,t,r){},dee9:function(e,t,r){}});
//# sourceMappingURL=app.d65e3469.js.map