!function(){"use strict";var e,t,r,s=window.location,o=window.document,l=o.getElementById("plausible"),u=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],r=e[2],t+"//"+r+"/api/event");function a(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var r={};r.n=e,r.u=t&&t.u?t.u:s.href,r.d=l.getAttribute("data-domain"),r.r=o.referrer||null,r.w=window.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props);var a=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),n=r.p||{};a.forEach(function(e){var t=e.replace("event-",""),r=l.getAttribute(e);n[t]=n[t]||r}),r.p=n;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(r)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<n.length;i++)a.apply(this,n[i]);var p=1;function c(e){if("auxclick"!==e.type||e.button===p){var t,r,a,n,i,o,l=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);l&&l.href&&l.href.split("?")[0];if((o=l)&&o.href&&o.host&&o.host!==s.host){var u={url:l.href};return n=u,i=!(a="Outbound Link: Click"),void(!function(e,t){if(!e.defaultPrevented){var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return r&&a}}(t=e,r=l)?plausible(a,{props:n}):(plausible(a,{props:n,callback:c}),setTimeout(c,5e3),t.preventDefault()))}}function c(){i||(i=!0,window.location=r.href)}}o.addEventListener("click",c),o.addEventListener("auxclick",c)}();