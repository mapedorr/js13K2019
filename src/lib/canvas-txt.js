!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("canvasTxt",[],e):"object"==typeof exports?exports.canvasTxt=e():t.canvasTxt=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={debug:!1,align:"center",textSize:14,font:"Arial",lineHeight:null,drawText:function(t,e,n,r,i,o){var s=[n,r,i,o],u=this.textSize+"px "+this.font;t.font=u;var a=parseInt(s[1])+parseInt(s[3])/2+parseInt(this.textSize)/2,l=parseInt(s[0])+parseInt(s[2])/2;t.textAlign="center",this.align&&("right"==this.align?(l=parseInt(s[0])+parseInt(s[2]),t.textAlign="right"):"left"==this.align&&(l=parseInt(s[0]),t.textAlign="left"));var f=[];e.split("\n").forEach(function(e){var n=t.measureText(e).width;if(n<=s[2])f.push(e);else{var r,i,o,u=e,a=s[2];for(n=t.measureText(u).width;n>a;){for(r=0,i=0,o="";i<a;)r++,o=u.substr(0,r),i=t.measureText(u.substr(0,r)).width;var l=r;if(" "!=u.substr(r,1)){for(;" "!=u.substr(r,1)&&0!=r;)r--;0==r&&(r=l),o=u.substr(0,r)}u=u.substr(r),n=t.measureText(u).width,f.push(o)}0<n&&f.push(u)}});var p=this.getTextHeight(e,this.font,this.textSize);this.lineHeight&&(p=this.lineHeight);var d=p*(f.length-1);a-=d/2,f.forEach(function(e){t.fillText(e,l,a),a+=p}),this.debug&&(t.lineWidth=5,t.strokeStyle="yellow",t.strokeRect(s[0],s[1],s[2],s[3]),t.lineWidth=3,t.strokeStyle="red",t.moveTo(l,s[1]),t.lineTo(l,parseInt(s[1])+parseInt(s[3])),t.stroke())},getTextHeight:function(t,e){var n,r=document.createElement("div");return r.style.cssText="position:fixed;padding:0;left:-9999px;top:-9999px;font:"+e+";font-size:"+this.textSize+"px",r.textContent=t,document.body.appendChild(r),n=parseInt(getComputedStyle(r).getPropertyValue("height"),10),document.body.removeChild(r),n}};e.default=r}])});