!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.DomPoints=n():t.DomPoints=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},e=arguments.length>2?arguments[2]:void 0,r=2*Math.PI/360*e,o=Math.cos(r),i=Math.sin(r),a=(n.x-t.x)*o-(n.y-t.y)*i+t.x,u=(n.x-t.x)*i+(n.y-t.y)*o+t.y;return{x:a,y:u}}function a(t,n){var e,r,o,i,a=0,u=n.length;for(o=n[0],e=1;e<=u;e++)i=n[e%u],t.x>Math.min(o.x,i.x)&&t.x<=Math.max(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&o.x!==i.x&&(r=(t.x-o.x)*(i.y-o.y)/(i.x-o.x)+o.y,(o.y===i.y||t.y<=r)&&a++),o=i;return a%2!=0}function u(t,n){var e,o=!0,i=r(t);try{for(i.s();!(e=i.n()).done;){if(!a(e.value,n)){o=!1;break}}}catch(t){i.e(t)}finally{i.f()}return o}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{x:0,y:0},{x:0,y:0}],e={},r=n[0],o=n[1];if(r.x-o.x==0)e.x=r.x,e.y=t.y;else{var i=(r.y-o.y)/(r.x-o.x),a=r.y-i*r.x,u=t.x+i*t.y;e.x=(u-i*a)/(i*i+1),e.y=i*e.x+a}return e}function l(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{x:0,y:0},{x:0,y:0}],r=e[0],o=e[1];if(r.x-o.x==0)t=Math.abs(n.x-r.x);else{var i=(r.y-o.y)/(r.x-o.x),a=r.y-i*r.x;t=Math.abs((i*n.x+a-n.y)/Math.sqrt(i*i+1))}return t}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},e=Math.abs(n.x-t.x),r=Math.abs(n.y-t.y),o=Math.sqrt(Math.pow(e,2)+Math.pow(r,2));return o}function y(t){var n=t.replace("matrix(","").replace(")","").split(", "),e=n[0],r=n[1];return parseFloat((Math.atan2(r,e)*(180/Math.PI)).toFixed(4))||0}function x(t){var n=0;try{n=y(getComputedStyle(t,null).getPropertyValue("transform")),t.parentNode&&(n+=x(t.parentNode))}catch(t){}return(n%=360)<0&&(n+=360),n}function d(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.getBoundingClientRect(),r=document.documentElement.scrollLeft,o=document.documentElement.scrollTop,i={x:e.left+r+.5*e.width,y:e.top+o+.5*e.height};if(n){var a=document.createElement("div");a.style.cssText="position:absolute;width:3px;height:3px;left:".concat(i.x-1,"px;top:").concat(i.y-1,"px;background: #000;"),document.body.appendChild(a)}return i}function s(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=.5*t.offsetWidth,o=.5*t.offsetHeight,i=d(t,n),a=[{x:i.x-e,y:i.y-o},{x:i.x+e,y:i.y-o},{x:i.x+e,y:i.y+o},{x:i.x-e,y:i.y+o}];if(n){var u,c=r(a);try{for(c.s();!(u=c.n()).done;){var l=u.value,f=document.createElement("div");f.style.cssText="position:absolute;width:3px;height:3px;left:".concat(l.x-1,"px;top:").concat(l.y-1,"px;background: #000;"),document.body.appendChild(f)}}catch(t){c.e(t)}finally{c.f()}}return a}function p(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=x(t),a=d(t,e),u=s(t,e),c=[],l=r(u);try{for(l.s();!(n=l.n()).done;){var f=n.value;c.push(i(a,f,o))}}catch(t){l.e(t)}finally{l.f()}if(e){var y,p=r(c);try{for(p.s();!(y=p.n()).done;){var h=y.value,v=document.createElement("div");v.style.cssText="position:absolute;width:3px;height:3px;left:".concat(h.x-1,"px;top:").concat(h.y-1,"px;background: #000;"),document.body.appendChild(v)}}catch(t){p.e(t)}finally{p.f()}}return c}function h(t,n){var e,o,a,u,c,l,f,y=arguments.length>2&&void 0!==arguments[2]&&arguments[2],h=p(t),v=x(t),m=x(n),g=v-m,b=d(n,y),M=s(n,y),w=[],P=r(h);try{for(P.s();!(f=P.n()).done;){var j=f.value;w.push(i(b,j,-m))}}catch(t){P.e(t)}finally{P.f()}if(y){var T,S=r(w);try{for(S.s();!(T=S.n()).done;){var C=T.value,O=document.createElement("div");O.style.cssText="position:absolute;width:3px;height:3px;left:".concat(C.x-1,"px;top:").concat(C.y-1,"px;background: #000;"),document.body.appendChild(O)}}catch(t){S.e(t)}finally{S.f()}}var I=M[0].y,E=M[1].x,k=M[2].y,A=M[3].x;o=Math.min(w[0].y-I,w[1].y-I,w[2].y-I,w[3].y-I),a=Math.min(E-w[0].x,E-w[1].x,E-w[2].x,E-w[3].x),u=Math.min(k-w[0].y,k-w[1].y,k-w[2].y,k-w[3].y);var D={left:e=Math.min(w[0].x-A,w[1].x-A,w[2].x-A,w[3].x-A),top:o,right:a,bottom:u,width:c=Math.max(Math.abs(w[0].x-w[2].x),Math.abs(w[1].x-w[3].x)),height:l=Math.max(Math.abs(w[0].y-w[2].y),Math.abs(w[1].y-w[3].y)),deg:g};if(y){var _=document.createElement("div");_.style.cssText="position:absolute;width:".concat(c,"px;height:").concat(l,"px;left:").concat(e,"px;top:").concat(o,"px;background: rgba(0,0,0,0.4);"),n.appendChild(_)}return D}e.r(n),e.d(n,"rotatePoint",(function(){return i})),e.d(n,"pointIsInPolygon",(function(){return a})),e.d(n,"polygonIsInPolygon",(function(){return u})),e.d(n,"pointToLineCross",(function(){return c})),e.d(n,"pointToLineDistance",(function(){return l})),e.d(n,"pointsDistance",(function(){return f})),e.d(n,"matrixToDeg",(function(){return y})),e.d(n,"clientDeg",(function(){return x})),e.d(n,"clientCenterPoint",(function(){return d})),e.d(n,"clientOriginalPoints",(function(){return s})),e.d(n,"clientBoundsPoints",(function(){return p})),e.d(n,"rectBoundsToRect",(function(){return h}))}])}));