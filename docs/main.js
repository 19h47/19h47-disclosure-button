!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DisclosureButton=e():t.DisclosureButton=e()}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,s=void 0,s=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===r(s)?s:String(s)),i)}var o,s}t.r(e),t.d(e,{default:function(){return o}});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e}var e,r;return e=t,(r=[{key:"init",value:function(){this.onClick=this.onClick.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this);var t,e=this.el.getAttribute("aria-controls").trim().split(" ").map((function(t){return"#".concat(t.trim())}));this.elements=function(t){if(Array.isArray(t))return n(t)}(t=document.querySelectorAll(e.join(",")))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this.initEvents()}},{key:"initEvents",value:function(){this.el.addEventListener("click",this.onClick),this.el.addEventListener("focus",this.onFocus),this.el.addEventListener("blur",this.onBlur)}},{key:"onClick",value:function(){this.toggle()}},{key:"onFocus",value:function(){this.el.classList.add("focus")}},{key:"onBlur",value:function(){this.el.classList.remove("focus")}},{key:"toggle",value:function(){"true"===this.el.getAttribute("aria-expanded")?this.el.setAttribute("aria-expanded",!1):this.el.setAttribute("aria-expanded",!0),this.elements.forEach((function(t){return function(t){if(-1!==t.getAttribute("style").indexOf("display")){if("none"===t.style.display)return t.style.setProperty("display","block");if("block"===t.style.display)return t.style.setProperty("display","none")}return!1===JSON.parse(t.getAttribute("aria-hidden"))?(t.setAttribute("aria-hidden",!0),t.classList.remove("is-active"),t.style.setProperty("pointer-events","none")):!0!==JSON.parse(t.getAttribute("aria-hidden"))||(t.setAttribute("aria-hidden",!1),t.classList.add("is-active"),t.style.setProperty("pointer-events","auto"))}(t)}))}},{key:"destroy",value:function(){this.el.removeEventListener("click",this.onClick),this.el.removeEventListener("focus",this.onFocus),this.el.removeEventListener("blur",this.onBlur)}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();return e}()}));