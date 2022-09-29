!function(){"use strict";var u=window.location,o=window.document,l=o.currentScript,c=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=u.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var i=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=n.p||{};i.forEach(function(t){var e=t.replace("event-",""),n=l.getAttribute(t);r[e]=r[e]||n}),n.p=r,n.h=1;var a=new XMLHttpRequest;a.open("POST",c,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function r(){n=u.pathname,t("pageview")}window.addEventListener("hashchange",r),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){n||"visible"!==o.visibilityState||r()}):r();var p=1;function a(t){if("auxclick"!==t.type||t.button===p){var e,n,i,r,a,o,l=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);l&&l.href&&l.href.split("?")[0];if((o=l)&&o.href&&o.host&&o.host!==u.host){var c={url:l.href};return r=c,a=!(i="Outbound Link: Click"),void(!function(t,e){if(!t.defaultPrevented){var n=!e.target||e.target.match(/^_(self|parent|top)$/i),i=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return n&&i}}(e=t,n=l)?plausible(i,{props:r}):(plausible(i,{props:r,callback:s}),setTimeout(s,5e3),e.preventDefault()))}}function s(){a||(a=!0,window.location=n.href)}}o.addEventListener("click",a),o.addEventListener("auxclick",a)}();