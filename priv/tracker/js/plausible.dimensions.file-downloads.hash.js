!function(){"use strict";var o=window.location,l=window.document,p=l.currentScript,c=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=p.getAttribute("data-domain"),i.r=l.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=i.p||{};n.forEach(function(t){var e=t.replace("event-",""),i=p.getAttribute(t);r[e]=r[e]||i}),i.p=r,i.h=1;var a=new XMLHttpRequest;a.open("POST",c,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,n=0;n<e.length;n++)t.apply(this,e[n]);function r(){i=o.pathname,t("pageview")}window.addEventListener("hashchange",r),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){i||"visible"!==l.visibilityState||r()}):r();var u=1;function a(t){if("auxclick"!==t.type||t.button===u){var e,i,n,r,a,o=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),l=o&&o.href&&o.href.split("?")[0];if(function(t){if(!t)return!1;var e=t.split(".").pop();return v.some(function(t){return t===e})}(l)){return r={url:l},a=!(n="File Download"),void(!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&n}}(e=t,i=o)?plausible(n,{props:r}):(plausible(n,{props:r,callback:p}),setTimeout(p,5e3),e.preventDefault()))}}function p(){a||(a=!0,window.location=i.href)}}l.addEventListener("click",a),l.addEventListener("auxclick",a);var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],f=p.getAttribute("file-types"),w=p.getAttribute("add-file-types"),v=f&&f.split(",")||w&&w.split(",").concat(d)||d}();