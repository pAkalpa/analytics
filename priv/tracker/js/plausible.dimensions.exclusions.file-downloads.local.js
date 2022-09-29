!function(){"use strict";var c=window.location,d=window.document,f=d.currentScript,v=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(t){console.warn("Ignoring Event: "+t)}function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var i=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===t){var n=!i||i&&i.split(",").some(o),r=a&&a.split(",").some(o);if(!n||r)return g("exclusion rule")}function o(t){return c.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var p={};p.n=t,p.u=c.href,p.d=f.getAttribute("data-domain"),p.r=d.referrer||null,p.w=window.innerWidth,e&&e.meta&&(p.m=JSON.stringify(e.meta)),e&&e.props&&(p.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=p.p||{};l.forEach(function(t){var e=t.replace("event-",""),i=f.getAttribute(t);u[e]=u[e]||i}),p.p=u;var s=new XMLHttpRequest;s.open("POST",v,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(p)),s.onreadystatechange=function(){4===s.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,a=0;a<e.length;a++)t.apply(this,e[a]);function n(){i!==c.pathname&&(i=c.pathname,t("pageview"))}var r,o=window.history;o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),n()},window.addEventListener("popstate",n)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){i||"visible"!==d.visibilityState||n()}):n();var u=1;function p(t){if("auxclick"!==t.type||t.button===u){var e,i,a,n,r,o=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),p=o&&o.href&&o.href.split("?")[0];if(function(t){if(!t)return!1;var e=t.split(".").pop();return m.some(function(t){return t===e})}(p)){return n={url:p},r=!(a="File Download"),void(!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&a}}(e=t,i=o)?plausible(a,{props:n}):(plausible(a,{props:n,callback:l}),setTimeout(l,5e3),e.preventDefault()))}}function l(){r||(r=!0,window.location=i.href)}}d.addEventListener("click",p),d.addEventListener("auxclick",p);var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],s=f.getAttribute("file-types"),w=f.getAttribute("add-file-types"),m=s&&s.split(",")||w&&w.split(",").concat(l)||l}();