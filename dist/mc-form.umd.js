!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.McForm=t():e.McForm=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}([function(e,t,n){"use strict";Array.prototype.slice;var r=n(4),i=n(5);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=Object.prototype.toString;function c(e){return function(t){return o.call(t)==="[object ".concat(e,"]")}}var l=c("Object"),u=(c("String"),c("Number"),c("Date"),c("Function")),s=Array.isArray||c("Array");function f(e){return void 0===e}function d(e){return""===e||null==e}function p(e){return s(e)?e=Object(r.a)(!0,[],e):l(e)&&(e=Object(r.a)(!0,{},e)),e}function h(e){return"select"===e||"radio"===e||"checkbox"===e}function b(e){return i.c.indexOf(e)>=0}function m(e){return i.b.indexOf(e)>=0}var v=Object.create(null);function g(e){return!!v[e]}function y(e){return e.replace(/\[([\w$'"]+)\]/g,(function(e,t){return"."+t.replace(/['"]/g,"")}))}function j(e,t){if(null==e)return e;for(var n=(t=y(t)).split("."),r=0;r<n.length;r++)if(null==(e=e[n[r]]))return e;return e}["plaintext","title","component"].forEach((function(e){return v[e]=!0}));var O=Object.prototype.hasOwnProperty;function x(e,t){return O.call(e,t)}function _(e,t){Object.keys(t).forEach((function(n){x(e,n)||(e[n]=p(t[n]))}))}function k(e){return e.charAt(0).toUpperCase()+e.substring(1)}var w="undefined"!=typeof console;function $(e){w&&console.error(e)}function C(e){return"string"==typeof e&&"dx:"===e.substring(0,3)}function S(){return null}function E(e,t){return e.__expr__!==t&&(e.__expr__=t),e}function P(e){function t(e){return $(e),E(S,null)}if(!C(e))return"string"!=typeof(n=e)&&"number"!=typeof n&&null!=n&&"boolean"!=typeof n&&"symbol"!==a(n)?t('reference value must use dx expression just like: "dx:{{ [] }}"'):E((function(){return e}),e);var n;if(/\{\{([\s\S]+?)\}\}/.test(e)){var r=RegExp.$1.trim();if(!function(e){for(var t=!1,n=!1,r=0;r<e.length;r++){var i=e.charAt(r),a=e.charAt(r-2),o=e.charAt(r-1),c=e.charAt(r+1);switch(i){case'"':if("\\"===o)break;n=!n;break;case"'":if("\\"===o)break;t=!t;break;case"=":if(t||n)break;if("="===o||"="===c||"!"===o||"<"===o&&"<"!==a||">"===o&&">"!==a)break;return!1;case"+":case"-":if(t||n)break;if(o===i||c===i)return!1}}return!t&&!n}(r))return t("invalid expression: ".concat(e));try{return E(new Function("$state","\n            try {\n              return (".concat(r,");\n            } catch (e) {\n              throw new Error('invalid expression: ").concat(e,"');\n            }\n          ")),e)}catch(n){return t("invalid expression: ".concat(e))}}return t("invalid expression: ".concat(e))}function A(e){l(e)&&Object.keys(e).forEach((function(t){e[t]=P(e[t])}))}var W=/[-.*+?^${}()|[\]/\\]/g;var q=/^(?:[\w$_]+|\(([^)]*?)\))\s*=>|^function(?:\s+[\w$_]+)?\s*\(([^)]*?)\)/;function z(e){var t=e.toString(),n=[];if(!q.test(t))return n;var r=RegExp.$1||RegExp.$2;if(!r)return n;if((r=r.split(/\s*,\s*/)).length<=3)return n;for(var i=r[3].replace(W,"\\$&"),a=new RegExp("".concat(i,"(?:\\.([\\w$_]+)|\\[(?:'([^']+)'|\"([^\"]+)\")\\])"),"g"),o=null;o=a.exec(t);)n.push(o[1]||o[2]||o[3]);return n}var T=/[->&@]/;function M(e){return!d(e)&&T.test(e)}var R=[function(e,t){if(!(e.indexOf("-")>0))return!1;var n=e.split("-");if(!x(t,n[0])&&!x(t,n[1]))return!0;var r=t[n[1]],i=t[n[0]];return d(i)&&d(r)?t[e]=null:t[e]=[i,r],!0},function(e,t){if(!(e.indexOf(">")>0))return!1;var n=t,r=e.split(">");if(!x(t,r[0]))return!0;for(var i=r.length-1,a=0;a<i;a++)if(d(n=n[r[a]]))return t[e]=null,!0;var o=n[r[i]];return d(o)?t[e]=null:t[e]=o,!0},function(e,t){if(!(e.indexOf("@")>0))return!1;var n=e.split("@");if(!x(t,n[0])&&!x(t,n[1]))return!0;var r=t[n[0]],i=t[n[1]];if(d(r)&&d(i))return t[e]=null,!0;var a=t[e]=[];return s(r)&&s(i)?(r.forEach((function(e,t){return a.push({id:e,name:i[t]})})),!0):(r=d(r)?null:r,i=d(i)?null:i,a.push({id:r,name:i}),!0)},function(e,t){if(!(e.indexOf("&")>0))return!1;var n=e.split("&");if(!x(t,n[0])&&!x(t,n[1]))return!0;var r=t[n[0]],i=t[n[1]];return d(r)&&d(i)?(t[e]=null,!0):(r=d(r)?null:r,i=d(i)?null:i,t[e]={id:r,name:i},!0)}];function D(e){return this.config.properties.forEach((function(t){var n=t.field;M(n)&&R.some((function(t){return t(n,e)}))})),e}var N=[function(e,t){if(!(e.indexOf("-")>0))return!1;var n=t[e];s(n)||(n=[n,n]);var r=e.split("-");return t[r[0]]=n[0],t[r[1]]=n[1],delete t[e],!0},function(e,t){if(!(e.indexOf(">")>0))return!1;for(var n=t,r=t[e],i=e.split(">"),a=i.length-1,o=0;o<a;o++){var c=i[o];l(n[c])||s(n[c])||(n[c]={}),n=n[c]}return n[i[a]]=r,delete t[e],!0},function(e,t){if(!(e.indexOf("@")>0))return!1;var n=t[e],r=e.split("@");return s(n)||(n=[]),t[r[0]]=n.map((function(e){return e.id})),t[r[1]]=n.map((function(e){return e.name})),delete t[e],!0},function(e,t){if(!(e.indexOf("&")>0))return!1;var n=t[e],r=e.split("&");return d(n)&&(n={id:null,name:null}),t[r[0]]=n.id,t[r[1]]=n.name,delete t[e],!0}];function F(e){return Object.keys(e).forEach((function(t){M(t)&&N.some((function(n){return n(t,e)}))})),e}n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return x})),n.d(t,"s",(function(){return _})),n.d(t,"d",(function(){return k})),n.d(t,"o",(function(){return l})),n.d(t,"m",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"r",(function(){return f})),n.d(t,"l",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"p",(function(){return h})),n.d(t,"q",(function(){return b})),n.d(t,"n",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"k",(function(){return C})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return A})),n.d(t,"g",(function(){return z})),n.d(t,"b",(function(){return $})),n.d(t,"u",(function(){return D})),n.d(t,"t",(function(){return F}))},function(e,t,n){"use strict";var r={props:{state:{type:Object,required:!0},config:{type:Object,required:!0},value:{type:null,required:!0},rules:{type:Object},gutter:{type:Number},getRequest:{type:Function}},computed:{hidden:function(){return this.config.ui.hidden(this.state)},disabled:function(){return this.config.ui.disabled(this.state)},readonly:function(){return this.config.ui.readonly(this.state)}}},i=n(4),a=n(0);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={mixins:[r],data:function(){return{once:!1,options:[]}},created:function(){this.config.options.ajax&&this.init()},watch:{hidden:function(){this.init()}},methods:{genData:function(e){var t=this,n={};return Object(a.o)(e)?(Object.keys(e).forEach((function(r){try{n[r]=e[r](t.state)}catch(e){Object(a.b)(e.message),n[r]=null}})),n):n},beforeSend:function(e){var t=e.beforeSend;if(!t)return!0;try{return t(this.state)}catch(e){Object(a.b)(e.message)}return!1},fetchOptions:function(e){var t=this,n=this.config.options.ajax;if(!n)return Promise.reject(new Error("options.ajax is required"));if(this.options=[],!this.beforeSend(n))return Promise.resolve([]);this.loading=!0;var r=this.genData(n.data),o=this.genData(n.params);Object(a.o)(e)&&(Object(a.o)(e.data)&&Object(i.a)(r,e.data),Object(a.o)(e.params)&&Object(i.a)(o,e.params));var c=null;n.request?c=n.request(r,o):c=this.getRequest()({data:r,params:o,url:n.url,method:n.method||"get"});return c.then((function(e){var r=n.path;Object(a.r)(r)&&(r="recordList || content");var i=null;r?r.split(/\s*\|\|\s*/).some((function(t){if(i=Object(a.h)(e,t))return!0})):i=e;t.loading=!1,t.options=i||[]})).catch((function(e){return t.options=[],t.loading=!1,Promise.reject(e)}))},handleAdditional:function(e){var t,n=this.config.options,r=n.additional;Object(a.o)(r)&&(e=e.slice()).unshift((o(t={},n.label,r.label),o(t,n.value,r.value),t));return e},getOptions:function(){var e=this.config.options,t=e.ajax?this.options:e.data;"string"==typeof t&&(t=Object(a.h)(this.$store,t)||[]);var n=e.include;Object(a.m)(n)&&Object(a.j)(n=n(this.state))&&(t=t.filter((function(t){return n.some((function(n){return n===t[e.value]}))})));var r=e.exclude;return Object(a.m)(r)&&Object(a.j)(r=r(this.state))&&(t=t.filter((function(t){return r.every((function(n){return n!==t[e.value]}))}))),t=this.handleAdditional(t)},init:function(){if(!this.once&&!this.hidden){this.once=!0;var e=this.config.options.ajax;e&&!e.remote&&!1!==e.auto&&this.fetchOptions().catch((function(e){return Object(a.b)("fetch options failed")}))}}}};n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}))},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var i=["attrs","props","domProps"],a=["class","style","directives"],o=["on","nativeOn"],c=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==i.indexOf(n))e[n]=r({},e[n],t[n]);else if(-1!==a.indexOf(n)){var l=e[n]instanceof Array?e[n]:[e[n]],u=t[n]instanceof Array?t[n]:[t[n]];e[n]=l.concat(u)}else if(-1!==o.indexOf(n))for(var s in t[n])if(e[n][s]){var f=e[n][s]instanceof Array?e[n][s]:[e[n][s]],d=t[n][s]instanceof Array?t[n][s]:[t[n][s]];e[n][s]=f.concat(d)}else e[n][s]=t[n][s];else if("hook"==n)for(var p in t[n])e[n][p]=e[n][p]?c(e[n][p],t[n][p]):t[n][p];else e[n]=t[n];else e[n]=t[n];return e}),{})}},function(e,t,n){"use strict";function r(e,t,n,r,i,a,o,c){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var s=u.render;u.render=function(e,t){return l.call(t),s(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return d}));var i=Object.prototype.hasOwnProperty,a=Object.prototype.toString,o=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===a.call(e)},u=function(e){if(!e||"[object Object]"!==a.call(e))return!1;var t,n=i.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&i.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!r)return!1;for(t in e);return void 0===t||i.call(e,t)},s=function(e,t){o&&"__proto__"===t.name?o(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},f=function(e,t){if("__proto__"===t){if(!i.call(e,t))return;if(c)return c(e,t).value}return e[t]};function d(){var e,t,n,i,a,o,c=arguments[0],p=1,h=arguments.length,b=!1;for("boolean"==typeof c&&(b=c,c=arguments[1]||{},p=2),(null==c||"object"!==r(c)&&"function"!=typeof c)&&(c={});p<h;++p)if(null!=(e=arguments[p]))for(t in e)n=f(c,t),c!==(i=f(e,t))&&(b&&i&&(u(i)||(a=l(i)))?(a?(a=!1,o=n&&l(n)?n:[]):o=n&&u(n)?n:{},s(c,{name:t,newValue:d(b,o,i)})):void 0!==i&&s(c,{name:t,newValue:i}));return c}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r="text|number|password|textarea".split("|"),i="time|year|month|date|dates|week|datetime|datetimerange|daterange|monthrange".split("|"),a={tree:"mc-tree",title:"mc-title",radio:"mc-radio",select:"mc-select",upload:"mc-upload",plaintext:"mc-text",time:"mc-time-picker",selector:"mc-selector",checkbox:"mc-checkbox",inputrange:"mc-input-range",inputnumber:"mc-input-number",component:"mc-component"};r.forEach((function(e){a[e]="mc-input"})),i.forEach((function(e){a[e]="time"===e?"mc-time-picker":"mc-date-picker"}))},function(e,t,n){var r={"./checkbox.js":7,"./component.vue":34,"./date.js":8,"./input.js":9,"./inputnumber.js":10,"./inputrange.vue":35,"./plaintext.js":11,"./radio.js":12,"./select.js":13,"./selector.js":14,"./time.js":15,"./tree.js":16,"./upload.vue":36};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=6},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0);t.default={name:"McCheckbox",mixins:[r.a],data:function(){return{loading:!1}},methods:{handleCheckAllChange:function(e){if(!e)return this.handleCheckChange([]);var t=this.getOptions(),n=this.config.options;this.handleCheckChange(t.map((function(e){return e[n.value]})))},handleCheckChange:function(e){this.$emit("input",e)}},render:function(e){if(this.hidden)return null;var t=!1,n=!1,r=this.config,a=r.ui,o=r.checkbox,c=r.options,l=this.getOptions();if(c.checkAll&&Object(i.j)(this.value)){var u=this.value.reduce((function(e,t){return(e[t]=!0)&&e}),{});n=!(t=l.every((function(e){return u[e[c.value]]>=0})))&&l.some((function(e){return u[e[c.value]]>=0}))}return e("el-col",{attrs:{span:a.column}},[e("el-form-item",{attrs:{prop:r.field,labelWidth:a.labelWidth,label:r.label},class:"mc-form-item"},[c.checkAll&&!!l.length&&e("div",{class:"mc-check-all"},[e("el-checkbox",{attrs:{border:o.border,readonly:this.readonly,disabled:this.disabled,value:t,indeterminate:n},on:{input:this.handleCheckAllChange}},["全选"])]),e("el-checkbox-group",{class:"mc-checkbox-group",attrs:{min:o.min,max:o.max,fill:o.fill,textColor:o.textColor,size:a.size,value:this.value,readonly:this.readonly,disabled:this.disabled},on:{input:this.handleCheckChange}},[l.map((function(t,n){return e("el-checkbox",{key:n,attrs:{border:o.border,label:t[c.value]}},[t[c.label]])}))])])])}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(1),o=n(0);t.default={name:"McDatePicker",mixins:[a.b],methods:{isRange:function(e){return"range"===e.slice(-5)}},render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,a=n.picker,c=n.field,l=n.label,u=n.type,s={attrs:Object(o.a)(a)},f=a.defaultTime;return e("el-col",{attrs:{span:r.column}},[e("el-form-item",{attrs:{prop:c,labelWidth:r.labelWidth,label:l},class:"mc-form-item"},[e("el-date-picker",i()([{},s,{attrs:{size:r.size,value:this.value,type:u,readonly:this.readonly,disabled:this.disabled,clearable:r.clearable,placeholder:r.placeholder,defaultTime:this.isRange(u)?f:Object(o.j)(f)?f[0]:f},on:{input:function(e){return t.$emit("input",e)}}}]))])])}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(1),o=n(0);t.default={name:"McInput",mixins:[a.b],render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,a=n.input,c=n.field,l=n.label,u=n.type,s={attrs:Object(o.a)(a)};return e("el-col",{attrs:{span:r.column}},[e("el-form-item",{attrs:{prop:c,labelWidth:r.labelWidth,label:l},class:"mc-form-item"},[e("el-input",i()([{},s,{attrs:{size:r.size,type:u,value:this.value,readonly:this.readonly,disabled:this.disabled,clearable:r.clearable,placeholder:r.placeholder},on:{input:function(e){return t.$emit("input",e)}}}]))])])}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(0),o=n(1);t.default={name:"McInputNumber",mixins:[o.b],render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,o=n.inputnumber,c=n.field,l=n.label,u={attrs:Object(a.a)(o)};return e("el-col",{attrs:{span:r.column}},[e("el-form-item",{attrs:{prop:c,labelWidth:r.labelWidth,label:l},class:"mc-form-item"},[e("el-input-number",i()([{},u,{attrs:{size:r.size,value:this.value||0,readonly:this.readonly,disabled:this.disabled,clearable:r.clearable,placeholder:r.placeholder},on:{input:function(e){return t.$emit("input",e)}}}]))])])}}},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default={name:"McText",mixins:[r.b],render:function(e){if(this.hidden)return null;var t=this.state,n=this.config,r=n.ui,i=n.label,a=n.plaintext,o=e("div",{class:"mc-form-text align-"+a.align+(a.clsName?" ".concat(a.clsName):"")},[e("span",[a.text(t)])]);return e("div",{class:"mc-col"},[null!=i?e("el-form-item",{attrs:{label:i,labelWidth:r.labelWidth},class:"mc-form-item"},[o]):o])}}},function(e,t,n){"use strict";n.r(t);var r=n(1);t.default={name:"McRadio",mixins:[r.a],data:function(){return{loading:!1}},render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,i=n.radio,a=n.options,o=this.getOptions();return e("el-col",{attrs:{span:r.column}},[e("el-form-item",{attrs:{prop:n.field,labelWidth:r.labelWidth,label:n.label},class:"mc-form-item"},[e("el-radio-group",{attrs:{size:r.size,fill:i.fill,value:this.value,readonly:this.readonly,disabled:this.disabled,textColor:i.textColor},on:{input:function(e){return t.$emit("input",e)}}},[o.map((function(t,n){return e("el-radio",{key:n,attrs:{border:i.border,label:t[a.value]}},[t[a.label]])}))])])])}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(0),o=n(1);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default={name:"McSelect",mixins:[o.a],data:function(){return{loading:!1}},computed:{remote:function(){var e=this.config.options.ajax;return!(!e||!e.remote)}},methods:{handleRemote:function(e){if(e){var t=this.config.options.ajax,n=t.remote,r={};"post"===(t.method||"get").toLowerCase()?r.data=c({},n,e):r.params=c({},n,e),this.fetchOptions(r).catch((function(e){return Object(a.b)("fetch options failed")}))}else this.options=[]}},render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,o=n.options,c=n.select,l=this.getOptions(),u={attrs:Object(a.a)(c)};return e("el-col",{attrs:{span:r.column}},[e("el-form-item",{attrs:{prop:n.field,labelWidth:r.labelWidth,label:n.label},class:"mc-form-item"},[e("el-select",i()([{},u,{attrs:{size:r.size,value:this.value,remote:this.remote,loading:this.loading,readonly:this.readonly,disabled:this.disabled,clearable:r.clearable,placeholder:r.placeholder,"remote-method":this.handleRemote},on:{input:function(e){return t.$emit("input",e)}}}]),[l.map((function(t,n){return e("el-option",{key:n,attrs:{label:t[o.label],value:t[o.value]}})}))])])])}}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0);t.default={name:"McSelector",mixins:[r.b],computed:{closable:function(){return this.config.selector.closable(this.state)},tags:function(){var e=this.value;if(!e)return[];Object(i.j)(e)||(e=[e]);var t=this.config.selector.label;return e.map((function(e){var n,r,a;return Object(i.o)(e)||(a=e,(r=t)in(n={})?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,e=n),e}))}},methods:{genValue:function(e){var t=null,n=this.config.selector;return Object(i.j)(this.value)?t=Object(i.a)(e):Object(i.o)(this.value)?e.length&&(t=Object(i.a)(e[0])):e.length&&(t=e[0][n.label]),t},handleClose:function(e){var t=this.tags.filter((function(t,n){return n!==e}));this.$emit("input",this.genValue(t))},handleClick:function(){var e=this.config;this.$emit("click",e.selector.event,{field:e.field,value:this.genValue(this.tags)})}},render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,i=n.selector,a=!(this.disabled||this.readonly),o=a&&this.closable;return e("el-col",{attrs:{span:r.column},style:r.aequilate?{width:"calc(".concat(r.column/24*100+"%"," - ").concat(r.labelWidth,")")}:{}},[e("el-form-item",{attrs:{prop:n.field,labelWidth:r.labelWidth,label:n.label},class:"mc-form-item"},[this.tags.map((function(n,r){return e("el-tag",{class:"mc-selector-tag",key:r,attrs:{size:i.size,closable:o,disableTransitions:!0},on:{close:function(e){return t.handleClose(r)}}},[n[i.label]])})),a&&e("el-button",{class:"mc-selector-btn",attrs:{size:r.size,type:i.type,icon:i.icon?i.icon:""},on:{click:function(e){return t.handleClick()}}},[i.text])])])}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(1),o=n(0);t.default={name:"McTimePicker",mixins:[a.b],render:function(e){var t=this;if(this.hidden)return null;var n=this.config,r=n.ui,a=n.picker,c=n.field,l=n.label,u={attrs:Object(o.a)(a)};return e("el-col",{attrs:{span:r.column}},[e("el-form-item",{attrs:{prop:c,labelWidth:r.labelWidth,label:l},class:"mc-form-item"},[e("el-time-picker",i()([{},u,{attrs:{size:r.size,value:this.value,readonly:this.readonly,disabled:this.disabled,clearable:r.clearable,placeholder:r.placeholder},on:{input:function(e){return t.$emit("input",e)}}}]))])])}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(1),o=n(0);t.default={name:"McTree",mixins:[a.b],props:{value:{type:Array,required:!0,default:function(){return[]}}},watch:{value:"setCheckedKeys"},methods:{notice:function(e){var t=this;this._equal=!0,this.$emit("input",e),this.$nextTick((function(e){return t._equal=!1}))},handleChange:function(){var e=this.$refs.tree,t=this.config.tree,n=e.getCheckedNodes(t.leafOnly,t.includeHalfChecked).map((function(e){return e[t.nodeKey]}));this.notice(n)},setCheckedKeys:function(e){if(!this._equal){e||(e=[]);var t=this.$refs.tree,n=this.config.tree;t.setCheckedKeys([]),e.forEach((function(e){return t.setChecked(e,!0,n.deep)}))}},getTreeData:function(){var e=this.config.tree.data;return"string"==typeof e&&(e=Object(o.h)(this.$store,e)||[]),e}},render:function(){var e=arguments[0];if(this.hidden)return null;var t=this.config,n=t.ui,r=t.tree,a=this.getTreeData();return e("el-col",{attrs:{span:n.column}},[e("el-form-item",{attrs:{prop:t.field,"label-width":t.ui.labelWidth,label:t.label},class:"mc-form-item"},[e("div",{class:"form-tree"},[e("el-tree",i()([{ref:"tree",attrs:{"show-checkbox":!0,data:a}},{props:r.props},{attrs:{"node-key":r.nodeKey,accordion:r.accordion,"empty-text":r.emptyText,"check-strictly":r.checkStrictly,"highlight-current":r.highlightCurrent,"default-expand-all":r.defaultExpandAll,"auto-expand-parent":t.tree.autoExpandParent,"check-on-click-node":r.checkOnClickNode,"expand-on-click-node":r.expandOnClickNode},on:{check:this.handleChange}}]))])])])},mounted:function(){var e=this;this._equal=!1,this.$nextTick((function(t){return e.setCheckedKeys(e.value)}))}}},function(e,t,n){var r={"./checkbox.js":18,"./input.js":19,"./inputnumber.js":20,"./inputrange.js":21,"./options.js":22,"./picker.js":23,"./plaintext.js":24,"./radio.js":25,"./select.js":26,"./selector.js":27,"./tree.js":28,"./ui.js":29,"./upload.js":30};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=17},function(e,t,n){"use strict";n.r(t),t.default={}},function(e,t,n){"use strict";n.r(t),t.default={}},function(e,t,n){"use strict";n.r(t),t.default={}},function(e,t,n){"use strict";n.r(t),t.default={startPlaceholder:"",endPlaceholder:"",rangeSeparator:"-",type:"number"}},function(e,t,n){"use strict";n.r(t),t.default={data:[],label:"label",value:"value"}},function(e,t,n){"use strict";n.r(t),t.default={editable:!1,valueFormat:"timestamp"}},function(e,t,n){"use strict";n.r(t),t.default={align:"center",text:"",clsName:""}},function(e,t,n){"use strict";n.r(t),t.default={}},function(e,t,n){"use strict";n.r(t),t.default={}},function(e,t,n){"use strict";n.r(t),t.default={label:"label",type:"primary",text:"选择",size:"medium",event:"click",closable:!0}},function(e,t,n){"use strict";n.r(t),t.default={data:null,emptyText:"暂无数据",nodeKey:"id",props:{label:"label",children:"children"},highlightCurrent:!1,defaultExpandAll:!1,expandOnClickNode:!0,checkOnClickNode:!1,autoExpandParent:!0,checkStrictly:!1,accordion:!1,lazy:!1,ajax:null,leafOnly:!1,includeHalfChecked:!1,deep:!1}},function(e,t,n){"use strict";n.r(t),t.default={column:24,size:"mini",wrap:!1,aequilate:!1,occupation:!0,hidden:!1,disabled:!1,readonly:!1,clearable:!1,placeholder:"",labelWidth:""}},function(e,t,n){"use strict";n.r(t),t.default={accept:"image/jpeg,image/jpg,image/png",action:"",headers:{},data:{},multiple:!1,name:"file",limit:0,tip:"",listType:"picture-card",limitSize:1,onSuccess:function(e){return{success:200===e.code,message:e.chnDesc,uri:e.content}}}},,,function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"mc-form",attrs:{rules:e.rules,model:e.state,"label-width":e.labelWidth,inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},e._l(e.rows,(function(t,r){return n("el-row",{key:r,attrs:{gutter:e.gutter}},e._l(t,(function(t,r){return n(e.componentMap[t.type],{key:r,ref:t.field||"__no_field__",refInFor:!0,tag:"component",attrs:{state:e.state,rules:e.rules,config:t,gutter:e.gutter,"get-request":e.getRequest,value:t.field?e.state[t.field]:null},on:{input:function(n){return e.handleChange(t.field,n)},click:e.handleClick,"update:array":e.updateArray,"update:object":e.updateObject}})})),1)})),1)};r._withStripped=!0;var i={},a=n(6);a.keys().forEach((function(e){var t=a(e).default;i[t.name]=t}));var o=i,c=null;function l(){return c}var u=n(5),s={},f=n(17);f.keys().forEach((function(e){var t=e.replace(/(?:^\.\/|\.js$)/g,"");s[t]=f(e).default}));var d=s,p=n(0);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"McForm",props:{config:{type:Object,required:!0,default:function(e){return{}}}},data:function(){var e=this.config,t=!!e.symbol,n=Object(p.l)(e.gutter)?20:e.gutter,r=Object(p.l)(e.labelWidth)?"80px":e.labelWidth,i=this.process(e,r),a=i.state;return{rows:i.rows,state:a,rules:i.rules,symbol:t,gutter:n,labelWidth:r,getRequest:l,componentMap:u.a}},provide:function(){return{dangerousState:this.state}},methods:{setSymbolsFromNormals:p.u,setNormalsFromSymbols:p.t,processState:function(e,t){if(!Object(p.c)(t.type)){var n=t.field;n&&Object(p.r)(e[n])&&this.$set(e,n,t.value)}delete t.value},processRules:function(e,t){var n=this,r=t.field,i=t.rules;delete t.rules,Object(p.l)(r)||Object(p.c)(t.type)||!Object(p.j)(i)||(i.forEach((function(e){if(e.validator){var t=e.validator,r=Object(p.g)(t);r.length&&(e.validator=function(e,i,a){var o={};return r.forEach((function(e){return o[e]=Object(p.a)(n.state[e])})),t(e,i,a,o)})}})),this.$set(e,r,i))},processLinkeds:function(e){var t=e.field,n=e.linkeds;if(delete e.linkeds,!Object(p.l)(t)&&Object(p.j)(n)){this._watches_||(this._watches_={});var r=this._watches_[t]={};n.forEach((function(e){r[e.path]={refresh:!!e.refresh,value:Object(p.e)(e.value)}}))}},processDefaultConfig:function(e,t){var n=t.type,r=Object(p.d)(e),i={isInput:p.n,isPicker:p.q,isOptions:p.p};if("ui"===e||e===n||i["is"+r]&&i["is"+r](n)){var a=t[e];a||(a=t[e]={}),Object(p.s)(a,d[e]),Object(p.p)(n)&&this.processOptions(a)}else delete t[e]},processOptions:function(e){["include","exclude"].forEach((function(t){var n=e[t];Object(p.l)(n)||(Object(p.k)(n)?e[t]=Object(p.e)(n):(n=Object(p.a)(n),e[t]=function(e){return n}))}));var t=e.ajax;t&&(Object(p.f)(t.data),Object(p.f)(t.params),t.beforeSend&&(t.beforeSend=Object(p.e)(t.beforeSend)))},processReactives:function(e){var t=e.ui;["disabled","readonly","hidden"].forEach((function(e){t[e]=Object(p.e)(t[e])}));var n=e.selector;n&&(n.closable=Object(p.e)(n.closable));var r=e.plaintext;r&&(r.text=Object(p.e)(r.text))},handleChange:function(e,t){e&&(this.state[e]=t,this.$listeners.change&&this.$emit("change",{field:e,value:Object(p.a)(t)}))},handleClick:function(e,t){this.$emit(e,t)},fieldToProperty:function(e){var t=e.field;t&&((this._map_||(this._map_={}))[t]=e)},join:function(e,t){if(e.length){var n=t.ui,r=!1,i=e[e.length-1];if(n.occupation)if(n.wrap)r=!0;else{var a=i.filter((function(e){return e.ui.occupation})).reduce((function(e,t){return e+t.ui.column}),0);r=n.column+a>24}r?e.push([t]):i.push(t)}else e.push([t])},setLabelWidth:function(e,t){Object(p.l)(e.ui.labelWidth)&&(e.ui.labelWidth=t)},processProperty:function(e,t,n,r,i){var a=this,o=e.type;return o?u.a[o]?!Object(p.c)(o)&&Object(p.l)(e.field)?Object(p.b)("property.type: ".concat(o,", 'field' is required")):(e=Object(p.a)(e),this.processLinkeds(e),this.processState(r,e),this.processRules(n,e),Object.keys(d).forEach((function(t){a.processDefaultConfig(t,e)})),this.setLabelWidth(e,i),this.processReactives(e),this.fieldToProperty(e),void this.join(t,e)):Object(p.b)("property.type: ".concat(o,", is not supported yet")):Object(p.b)("property.type is required")},process:function(e,t){var n=this,r=[],i={},a=e.state?Object(p.a)(e.state):{};return e.properties.forEach((function(e){n.processProperty(e,r,i,a,t)})),this._rawState=Object(p.a)(a),{state:a,rules:i,rows:r}},processWatches:function(){var e=this,t=this._watches_;t&&(Object.keys(t).forEach((function(n){e.$watch((function(){return this.state[n]}),(function(){this.notice(t[n])}))})),delete this._watches_)},updateArray:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];e[t].apply(e,r)},updateObject:function(e,t,n){var r=this;Object(p.o)(t)?Object.keys(t).forEach((function(n){return r.$set(e,n,t[n])})):this.$set(e,t,n)},notice:function(e){var t=this,n=this.state,r=this._state_map_;Object.keys(e).forEach((function(i){var a=e[i];if(!r||!r[i])try{t.$set(n,i,a.value(n))}catch(e){return void Object(p.b)(e.message)}var o=t.$refs[i];a.refresh&&o&&o.length&&t.$nextTick((function(e){o.forEach((function(e){e.fetchOptions().catch((function(e){return Object(p.b)("fetch options failed")}))}))}))}))},getState:function(e){if(Object(p.l)(e)){var t=Object(p.a)(this.state);return this.symbol&&this.setNormalsFromSymbols(t),t}return Object(p.a)(this.state[e])},validate:function(){return this.$refs.form.validate()},clear:function(){return this.$refs.form.clearValidate()},setState:function(e,t,n){var r=this,i=null;Object(p.o)(e)?(n=t,i=Object(p.a)(e)):i=b({},e,Object(p.a)(t)),n=!!n,this.symbol&&this.setSymbolsFromNormals(i);var a=Object.keys(i);if(this._state_map_=a.reduce((function(e,t){return(e[t]=!0)&&e}),{}),n){var o=this._state_map_;Object.keys(this.state).forEach((function(e){o[e]||r.$delete(r.state,e)}))}a.forEach((function(e){r.$set(r.state,e,i[e])})),this.$nextTick((function(e){return r._state_map_=null}))},replaceState:function(e){this.setState(e,!0)},setEditable:function(e,t,n){var r=this._map_,i=r&&r[e];if(i&&["disabled","readonly","hidden","closable"].some((function(e){return e===t}))){var a="closable"===t?i.selector:i.ui;a&&a[t]&&a[t].__expr__!==n&&this.$set(a,t,Object(p.e)(n))}},setOptions:function(e,t,n){var r=this._map_,i=r&&r[e];!i||["data","include","exclude"].indexOf(t)<0||!Object(p.p)(i.type)||("data"!==t?Object(p.k)(n)?this.$set(i.options,t,Object(p.e)(n)):(n=Object(p.a)(n),this.$set(i.options,t,(function(e){return n}))):this.$set(i.options,t,Object(p.a)(n)))},reset:function(){this.setState(this._rawState,!0),this.$nextTick(this.clear)}},created:function(){this.processWatches(),this._state_map_=null},components:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o)},v=n(3),g=Object(v.a)(m,r,[],!1,null,null,null);g.options.__file="form.vue";var y=g.exports;n.d(t,"setDefaultConfigs",(function(){return j})),n.d(t,"installComponent",(function(){return O}));t.default=y;function j(e,t){var n=e;Object(p.o)(n)||(n=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t)),Object.keys(n).forEach((function(e){var t=n[e];if("request"!==e){if(Object(p.i)(d,e)){var r=d[e];Object.keys(t).forEach((function(e){r[e]=Object(p.a)(t[e])}))}}else c=t}))}function O(e){var t=e.type,n=e.name,r=e.component;if(Object(p.l)(t))return Object(p.b)('"type" is required');if(Object(p.l)(r))return Object(p.b)('"component" is required');if(n=n||r.name||"Mc".concat(Object(p.d)(t)),!Object(p.l)(u.a[n]))return Object(p.b)("component ".concat(n," already exists"));var i=e.config||{};u.a[t]=n,y.components[n]=r,d[t]=Object(p.a)(i)}},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hidden?e._e():n("el-col",{attrs:{span:e.config.ui.column}},[e.config.component?n(e.config.component,{tag:"component",attrs:{gutter:e.gutter,state:e.state,config:e.config},on:{"update:object":e.updateObject,"update:array":e.updateArray}}):e._e()],1)};r._withStripped=!0;var i={name:"McComponent",mixins:[n(1).b],methods:{updateObject:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["update:object"].concat(t))},updateArray:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["update:array"].concat(t))}}},a=n(3),o=Object(a.a)(i,r,[],!1,null,null,null);o.options.__file="packages/modules/component.vue";t.default=o.exports},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hidden?e._e():n("el-col",{attrs:{span:e.config.ui.column}},[n("el-form-item",{staticClass:"mc-form-item",attrs:{prop:e.config.field,"label-width":e.config.ui.labelWidth,label:e.config.label}},[n("div",{staticClass:"range-input-editor",class:e.disabled?"disabled":""},[n("el-input",{attrs:{size:e.config.ui.size,readonly:e.readonly,disabled:e.disabled,type:e.config.inputrange.type,clearable:e.config.ui.clearable,placeholder:e.config.inputrange.startPlaceholder},model:{value:e.range0,callback:function(t){e.range0=t},expression:"range0"}}),e._v(" "),n("span",{staticClass:"separator"},[e._v(e._s(e.config.inputrange.rangeSeparator))]),e._v(" "),n("el-input",{attrs:{size:e.config.ui.size,readonly:e.readonly,disabled:e.disabled,type:e.config.inputrange.type,clearable:e.config.ui.clearable,placeholder:e.config.inputrange.endPlaceholder},model:{value:e.range1,callback:function(t){e.range1=t},expression:"range1"}})],1)])],1)};r._withStripped=!0;var i=n(0),a={name:"McInputRange",mixins:[n(1).b],computed:{range0:{get:function(){var e=this.value;return Object(i.j)(e)?e[0]:null},set:function(e){this.$emit("input",[e,this.range1])}},range1:{get:function(){var e=this.value;return Object(i.j)(e)?e[1]:null},set:function(e){this.$emit("input",[this.range0,e])}}}},o=n(3),c=Object(o.a)(a,r,[],!1,null,null,null);c.options.__file="packages/modules/inputrange.vue";t.default=c.exports},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hidden?e._e():n("el-col",{attrs:{span:e.config.ui.column}},[n("el-form-item",{ref:"item",staticClass:"mc-form-item",attrs:{prop:e.config.field,"label-width":e.config.ui.labelWidth,label:e.config.label}},[n("el-upload",{staticClass:"uploader",class:{"uploader-readonly":e.disabled||e.readonly},attrs:{data:e.config.upload.data,action:e.config.upload.action,accept:e.config.upload.accept,headers:e.config.upload.headers,disabled:e.disabled||e.readonly,"show-file-list":!0,"file-list":e.files,multiple:e.multiple,name:e.config.upload.name,"list-type":e.config.upload.listType,"auto-upload":!0,limit:e.config.upload.limit,"on-remove":e.handleRemove,"on-error":e.handleError,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"before-upload":e.beforeUpload}},["picture-card"===e.config.upload.listType?n("i",{staticClass:"el-icon-plus"}):n("el-button",{attrs:{size:e.config.ui.size,type:"primary"}},[e._v("点击上传")]),e._v(" "),e.config.upload.tip?n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.config.upload.tip))]):e._e()],1)],1)],1)};r._withStripped=!0;var i=n(1),a=n(0),o=/((?:[^./]+)\.(?:[^.]+))$/;var c={name:"McUpload",mixins:[i.b],data:function(){return{files:[]}},computed:{multiple:function(){return this.config.upload.multiple}},watch:{value:{immediate:!0,handler:function(e){if(!this._equal)if(e){var t=[];Object(a.j)(e)||(e=[e]),e.forEach((function(e){var n;Object(a.o)(e)?t.push({url:e.url,uri:e.uri,name:e.name}):t.push({url:e,uri:e,name:(n=e,o.test(n)?RegExp.$1:"")})})),this.files=t}else this.files=[]}}},methods:{notice:function(e){var t=this,n=this.multiple;e=e.filter((function(e){return!!e.uri})),e=n?e.map((function(e){return e.uri})):e.length?e[0].uri:null,this._equal=!0,this.$emit("input",e),this.$refs.item.$emit("el.form.change"),this.$nextTick((function(e){return t._equal=!1}))},handleRemove:function(e,t){this.notice(t)},handleBeforeUpload:function(e){var t=this.config.upload.limitSize;if(t&&t<e.size/1024/1024)return Promise.reject(new Error("上传文件大小不能超过 ".concat(t,"MB!")));return Promise.resolve()},beforeUpload:function(e){var t=this,n=null,r=this.config.upload;if(Object(a.m)(r.beforeUpload)){var i=r.beforeUpload(e);if(!1===i)return!1;i&&Object(a.m)(i.then)&&Object(a.m)(i.catch)&&(n=i)}return(n||Promise.resolve()).then((function(n){return t.handleBeforeUpload(e)})).catch((function(e){return t.$message.error(e.message),Promise.reject(e)}))},handleSuccess:function(e,t,n){var r=n.indexOf(t),i=this.config.upload.onSuccess(e);if(!i.success)return this.$message.error(i.message),void n.splice(r,1);t.uri=i.uri,this.multiple||(n=[t],this.files=[t]),this.notice(n)},handleError:function(){this.$message.error("上传失败")},handleExceed:function(){return this.$message.error("最多只能上传".concat(this.config.upload.limit,"份文件"))}},created:function(){this._equal=!1}},l=n(3),u=Object(l.a)(c,r,[],!1,null,null,null);u.options.__file="packages/modules/upload.vue";t.default=u.exports}])}));