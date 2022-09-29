!function(){"use strict";var s=window.location,o=window.document,l=o.currentScript,u=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function c(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var r={};r.n=t,r.u=e&&e.u?e.u:s.href,r.d=l.getAttribute("data-domain"),r.r=o.referrer||null,r.w=window.innerWidth,e&&e.meta&&(r.m=JSON.stringify(e.meta)),e&&e.props&&(r.p=e.props);var n=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=r.p||{};n.forEach(function(t){var e=t.replace("event-",""),r=l.getAttribute(t);a[e]=a[e]||r}),r.p=a,r.h=1;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(r)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r=0;r<e.length;r++)t.apply(this,e[r]);var p=1;function n(t){if("auxclick"!==t.type||t.button===p){var e,r,n,a,i,o,l=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);l&&l.href&&l.href.split("?")[0];if((o=l)&&o.href&&o.host&&o.host!==s.host){var u={url:l.href};return a=u,i=!(n="Outbound Link: Click"),void(!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&n}}(e=t,r=l)?plausible(n,{props:a}):(plausible(n,{props:a,callback:c}),setTimeout(c,5e3),e.preventDefault()))}}function c(){i||(i=!0,window.location=r.href)}}o.addEventListener("click",n),o.addEventListener("auxclick",n)}();