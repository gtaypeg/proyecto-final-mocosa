/*! For license information please see main.c2b04087.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var i=n(853),r=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var m=Object.assign,p=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),j=Symbol.for("react.lazy");Symbol.for("react.scope");var C=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function z(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var A=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case $:return"SuspenseList";case C:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case f:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var D=Array.isArray,M=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},_=[],N=-1;function F(e){return{current:e}}function I(e){0>N||(e.current=_[N],_[N]=null,N--)}function V(e,t){N++,_[N]=e.current,e.current=t}var U=F(null),B=F(null),H=F(null),q=F(null);function W(e,t){switch(V(H,t),V(B,e),V(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=ad(t=rd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(U),V(U,e)}function Y(){I(U),I(B),I(H)}function K(e){null!==e.memoizedState&&V(q,e);var t=U.current,n=ad(t,e.type);t!==n&&(V(B,e),V(U,n))}function G(e){B.current===e&&(I(U),I(B)),q.current===e&&(I(q),Kd._currentValue=O)}var X=Object.prototype.hasOwnProperty,Q=i.unstable_scheduleCallback,J=i.unstable_cancelCallback,Z=i.unstable_shouldYield,ee=i.unstable_requestPaint,te=i.unstable_now,ne=i.unstable_getCurrentPriorityLevel,ie=i.unstable_ImmediatePriority,re=i.unstable_UserBlockingPriority,ae=i.unstable_NormalPriority,oe=i.unstable_LowPriority,se=i.unstable_IdlePriority,le=i.log,ce=i.unstable_setDisableYieldValue,ue=null,de=null;function me(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/fe|0)|0},he=Math.log,fe=Math.LN2;var ge=256,ye=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,t,n){var i=e.pendingLanes;if(0===i)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&i;return 0!==s?0!==(i=s&~a)?r=be(i):0!==(o&=s)?r=be(o):n||0!==(n=s&~e)&&(r=be(n)):0!==(s=i&~a)?r=be(s):0!==o?r=be(o):n||0!==(n=i&~e)&&(r=be(n)),0===r?0:0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:r}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=ye;return 0===(62914560&(ye<<=1))&&(ye=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ee(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-pe(t);e.entangledLanes|=t,e.entanglements[i]=1073741824|e.entanglements[i]|4194090&n}function Ce(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-pe(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function Pe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function ze(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:cm(e.type)}var Ae=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ae,De="__reactProps$"+Ae,Me="__reactContainer$"+Ae,Le="__reactEvents$"+Ae,Oe="__reactListeners$"+Ae,_e="__reactHandles$"+Ae,Ne="__reactResources$"+Ae,Fe="__reactMarker$"+Ae;function Ie(e){delete e[Re],delete e[De],delete e[Le],delete e[Oe],delete e[_e]}function Ve(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Me]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=vd(e);null!==e;){if(n=e[Re])return n;e=vd(e)}return t}n=(e=n).parentNode}return null}function Ue(e){if(e=e[Re]||e[Me]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Be(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function He(e){var t=e[Ne];return t||(t=e[Ne]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Fe]=!0}var We=new Set,Ye={};function Ke(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ye[e]=t,e=0;e<t.length;e++)We.add(t[e])}var Xe,Qe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(r=t,X.call(et,r)||!X.call(Ze,r)&&(Je.test(r)?et[r]=!0:(Ze[r]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var i=t.toLowerCase().slice(0,5);if("data-"!==i&&"aria-"!==i)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var r}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function it(e,t,n,i){if(null===i)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+i)}}function rt(e){if(void 0===Xe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Qe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Xe+e+Qe}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(r){var i=r}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){i=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){i=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&i&&"string"===typeof s.stack)return[s.stack,i.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(r=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(i===l.length||r===c.length)for(i=l.length-1,r=c.length-1;1<=i&&0<=r&&l[i]!==c[r];)r--;for(;1<=i&&0<=r;i--,r--)if(l[i]!==c[r]){if(1!==i||1!==r)do{if(i--,0>--r||l[i]!==c[r]){var u="\n"+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=i&&0<=r);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?rt(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return rt(e.type);case 16:return rt("Lazy");case 13:return rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return rt("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){i=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(e){i=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ut(e)?e.checked?"true":"false":e.value),(e=i)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function ft(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,i,r,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?bt(e,o,ct(t)):null!=n?bt(e,o,ct(n)):null!=i&&e.removeAttribute("value"),null==r&&null!=a&&(e.defaultChecked=!!a),null!=r&&(e.checked=r&&"function"!==typeof r&&"symbol"!==typeof r),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function yt(e,t,n,i,r,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}i="function"!==typeof(i=null!=i?i:r)&&"symbol"!==typeof i&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function bt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(i&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,i){if(null==t){if(null!=i){if(null!=n)throw Error(o(92));if(D(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(i=e.textContent)===n&&""!==i&&null!==i&&(e.value=i)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $t(e,t,n){var i=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?i?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":i?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var i in n)!n.hasOwnProperty(i)||null!=t&&t.hasOwnProperty(i)||(0===i.indexOf("--")?e.setProperty(i,""):"float"===i?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&$t(e,r,i)}else for(var a in t)t.hasOwnProperty(a)&&$t(e,a,t[a])}function jt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tt(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zt=null;function At(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Dt=null;function Mt(e){var t=Ue(e);if(t&&(e=t.stateNode)){var n=e[De]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[De]||null;if(!r)throw Error(o(90));gt(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)(i=n[t]).form===e.form&&mt(i)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Ot(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Rt||null!==Dt)&&(Vc(),Rt&&(t=Rt,e=Dt,Dt=Rt=null,Mt(t),e)))for(t=0;t<e.length;t++)Mt(e[t])}}function _t(e,t){var n=e.stateNode;if(null===n)return null;var i=n[De]||null;if(null===i)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ft=!1;if(Nt)try{var It={};Object.defineProperty(It,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch(Dm){Ft=!1}var Vt=null,Ut=null,Bt=null;function Ht(){if(Bt)return Bt;var e,t,n=Ut,i=n.length,r="value"in Vt?Vt.value:Vt.textContent,a=r.length;for(e=0;e<i&&n[e]===r[e];e++);var o=i-e;for(t=1;t<=o&&n[i-t]===r[a-t];t++);return Bt=r.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function Yt(){return!1}function Kt(e){function t(t,n,i,r,a){for(var o in this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?Wt:Yt,this.isPropagationStopped=Yt,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Gt,Xt,Qt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Jt),en=m({},Jt,{view:0,detail:0}),tn=Kt(en),nn=m({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&"mousemove"===e.type?(Gt=e.screenX-Qt.screenX,Xt=e.screenY-Qt.screenY):Xt=Gt=0,Qt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Xt}}),rn=Kt(nn),an=Kt(m({},nn,{dataTransfer:0})),on=Kt(m({},en,{relatedTarget:0})),sn=Kt(m({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Kt(m({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(m({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function hn(){return pn}var fn=Kt(m({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Kt(m({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),yn=Kt(m({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),bn=Kt(m({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vn=Kt(m({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(m({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Nt&&"CompositionEvent"in window,kn=null;Nt&&"documentMode"in document&&(kn=document.documentMode);var $n=Nt&&"TextEvent"in window&&!kn,En=Nt&&(!Sn||kn&&8<kn&&11>=kn),jn=String.fromCharCode(32),Cn=!1;function Pn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var zn=!1;var An={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!An[e.type]:"textarea"===t}function Dn(e,t,n,i){Rt?Dt?Dt.push(i):Dt=[i]:Rt=i,0<(t=Hu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Mn=null,Ln=null;function On(e){Ou(e,0)}function _n(e){if(mt(Be(e)))return e}function Nn(e,t){if("change"===e)return t}var Fn=!1;if(Nt){var In;if(Nt){var Vn="oninput"in document;if(!Vn){var Un=document.createElement("div");Un.setAttribute("oninput","return;"),Vn="function"===typeof Un.oninput}In=Vn}else In=!1;Fn=In&&(!document.documentMode||9<document.documentMode)}function Bn(){Mn&&(Mn.detachEvent("onpropertychange",Hn),Ln=Mn=null)}function Hn(e){if("value"===e.propertyName&&_n(Ln)){var t=[];Dn(t,Ln,e,At(e)),Ot(On,t)}}function qn(e,t,n){"focusin"===e?(Bn(),Ln=n,(Mn=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Bn()}function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return _n(Ln)}function Yn(e,t){if("click"===e)return _n(t)}function Kn(e,t){if("input"===e||"change"===e)return _n(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Xn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!X.call(t,r)||!Gn(e[r],t[r]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,i=Qn(e);for(e=0;i;){if(3===i.nodeType){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Qn(i)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ei(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(i){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ni=Nt&&"documentMode"in document&&11>=document.documentMode,ii=null,ri=null,ai=null,oi=!1;function si(e,t,n){var i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;oi||null==ii||ii!==pt(i)||("selectionStart"in(i=ii)&&ti(i)?i={start:i.selectionStart,end:i.selectionEnd}:i={anchorNode:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset},ai&&Xn(ai,i)||(ai=i,0<(i=Hu(ri,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ii)))}function li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ci={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionrun:li("Transition","TransitionRun"),transitionstart:li("Transition","TransitionStart"),transitioncancel:li("Transition","TransitionCancel"),transitionend:li("Transition","TransitionEnd")},ui={},di={};function mi(e){if(ui[e])return ui[e];if(!ci[e])return e;var t,n=ci[e];for(t in n)if(n.hasOwnProperty(t)&&t in di)return ui[e]=n[t];return e}Nt&&(di=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);var pi=mi("animationend"),hi=mi("animationiteration"),fi=mi("animationstart"),gi=mi("transitionrun"),yi=mi("transitionstart"),bi=mi("transitioncancel"),vi=mi("transitionend"),xi=new Map,wi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(e,t){xi.set(e,t),Ke(t,[e])}wi.push("scrollEnd");var ki=new WeakMap;function $i(e,t){if("object"===typeof e&&null!==e){var n=ki.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},ki.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Ei=[],ji=0,Ci=0;function Pi(){for(var e=ji,t=Ci=ji=0;t<e;){var n=Ei[t];Ei[t++]=null;var i=Ei[t];Ei[t++]=null;var r=Ei[t];Ei[t++]=null;var a=Ei[t];if(Ei[t++]=null,null!==i&&null!==r){var o=i.pending;null===o?r.next=r:(r.next=o.next,o.next=r),i.pending=r}0!==a&&Ri(n,r,a)}}function Ti(e,t,n,i){Ei[ji++]=e,Ei[ji++]=t,Ei[ji++]=n,Ei[ji++]=i,Ci|=i,e.lanes|=i,null!==(e=e.alternate)&&(e.lanes|=i)}function zi(e,t,n,i){return Ti(e,t,n,i),Di(e)}function Ai(e,t){return Ti(e,null,null,t),Di(e)}function Ri(e,t,n){e.lanes|=n;var i=e.alternate;null!==i&&(i.lanes|=n);for(var r=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(i=a.alternate)&&(i.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(r=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,r&&null!==t&&(r=31-pe(n),null===(i=(e=a.hiddenUpdates)[r])?e[r]=[t]:i.push(t),t.lane=536870912|n),a):null}function Di(e){if(50<Rc)throw Rc=0,Dc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Mi={};function Li(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(e,t,n,i){return new Li(e,t,n,i)}function _i(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ni(e,t){var n=e.alternate;return null===n?((n=Oi(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fi(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ii(e,t,n,i,r,a){var s=0;if(i=e,"function"===typeof e)_i(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,U.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case C:return(e=Oi(31,n,t,r)).elementType=C,e.lanes=a,e;case g:return Vi(n.children,r,a,t);case y:s=8,r|=24;break;case b:return(e=Oi(12,n,t,2|r)).elementType=b,e.lanes=a,e;case k:return(e=Oi(13,n,t,r)).elementType=k,e.lanes=a,e;case $:return(e=Oi(19,n,t,r)).elementType=$,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:case w:s=10;break e;case x:s=9;break e;case S:s=11;break e;case E:s=14;break e;case j:s=16,i=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),i=null}return(t=Oi(s,n,t,r)).elementType=e,t.type=i,t.lanes=a,t}function Vi(e,t,n,i){return(e=Oi(7,e,i,t)).lanes=n,e}function Ui(e,t,n){return(e=Oi(6,e,null,t)).lanes=n,e}function Bi(e,t,n){return(t=Oi(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hi=[],qi=0,Wi=null,Yi=0,Ki=[],Gi=0,Xi=null,Qi=1,Ji="";function Zi(e,t){Hi[qi++]=Yi,Hi[qi++]=Wi,Wi=e,Yi=t}function er(e,t,n){Ki[Gi++]=Qi,Ki[Gi++]=Ji,Ki[Gi++]=Xi,Xi=e;var i=Qi;e=Ji;var r=32-pe(i)-1;i&=~(1<<r),n+=1;var a=32-pe(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qi=1<<32-pe(t)+r|n<<r|i,Ji=a+e}else Qi=1<<a|n<<r|i,Ji=e}function tr(e){null!==e.return&&(Zi(e,1),er(e,1,0))}function nr(e){for(;e===Wi;)Wi=Hi[--qi],Hi[qi]=null,Yi=Hi[--qi],Hi[qi]=null;for(;e===Xi;)Xi=Ki[--Gi],Ki[Gi]=null,Ji=Ki[--Gi],Ki[Gi]=null,Qi=Ki[--Gi],Ki[Gi]=null}var ir=null,rr=null,ar=!1,or=null,sr=!1,lr=Error(o(519));function cr(e){throw fr($i(Error(o(418,"")),e)),lr}function ur(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Re]=e,t[De]=i,n){case"dialog":_u("cancel",t),_u("close",t);break;case"iframe":case"object":case"embed":_u("load",t);break;case"video":case"audio":for(n=0;n<Mu.length;n++)_u(Mu[n],t);break;case"source":_u("error",t);break;case"img":case"image":case"link":_u("error",t),_u("load",t);break;case"details":_u("toggle",t);break;case"input":_u("invalid",t),yt(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),dt(t);break;case"select":_u("invalid",t);break;case"textarea":_u("invalid",t),wt(t,i.value,i.defaultValue,i.children),dt(t)}"string"!==typeof(n=i.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===i.suppressHydrationWarning||Xu(t.textContent,n)?(null!=i.popover&&(_u("beforetoggle",t),_u("toggle",t)),null!=i.onScroll&&_u("scroll",t),null!=i.onScrollEnd&&_u("scrollend",t),null!=i.onClick&&(t.onclick=Qu),t=!0):t=!1,t||cr(e)}function dr(e){for(ir=e.return;ir;)switch(ir.tag){case 5:case 13:return void(sr=!1);case 27:case 3:return void(sr=!0);default:ir=ir.return}}function mr(e){if(e!==ir)return!1;if(!ar)return dr(e),ar=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&rr&&cr(e),dr(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){rr=yd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}rr=null}}else 27===n?(n=rr,pd(e.type)?(e=bd,bd=null,rr=e):rr=n):rr=ir?yd(e.stateNode.nextSibling):null;return!0}function pr(){rr=ir=null,ar=!1}function hr(){var e=or;return null!==e&&(null===vc?vc=e:vc.push.apply(vc,e),or=null),e}function fr(e){null===or?or=[e]:or.push(e)}var gr=F(null),yr=null,br=null;function vr(e,t,n){V(gr,t._currentValue),t._currentValue=n}function xr(e){e._currentValue=gr.current,I(gr)}function wr(e,t,n){for(;null!==e;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==i&&(i.childLanes|=t)):null!==i&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t,n,i){var r=e.child;for(null!==r&&(r.return=e);null!==r;){var a=r.dependencies;if(null!==a){var s=r.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=r;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wr(a.return,n,e),i||(s=null);break e}a=l.next}}else if(18===r.tag){if(null===(s=r.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wr(s,n,e),s=null}else s=r.child;if(null!==s)s.return=r;else for(s=r;null!==s;){if(s===e){s=null;break}if(null!==(r=s.sibling)){r.return=s.return,s=r;break}s=s.return}r=s}}function kr(e,t,n,i){e=null;for(var r=t,a=!1;null!==r;){if(!a)if(0!==(524288&r.flags))a=!0;else if(0!==(262144&r.flags))break;if(10===r.tag){var s=r.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=r.type;Gn(r.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(r===q.current){if(null===(s=r.alternate))throw Error(o(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}r=r.return}null!==e&&Sr(t,e,n,i),t.flags|=262144}function $r(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){yr=e,br=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function jr(e){return Pr(yr,e)}function Cr(e,t){return null===yr&&Er(e),Pr(e,t)}function Pr(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===br){if(null===e)throw Error(o(308));br=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else br=br.next=t;return n}var Tr="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},zr=i.unstable_scheduleCallback,Ar=i.unstable_NormalPriority,Rr={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dr(){return{controller:new Tr,data:new Map,refCount:0}}function Mr(e){e.refCount--,0===e.refCount&&zr(Ar,(function(){e.controller.abort()}))}var Lr=null,Or=0,_r=0,Nr=null;function Fr(){if(0===--Or&&null!==Lr){null!==Nr&&(Nr.status="fulfilled");var e=Lr;Lr=null,_r=0,Nr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ir=M.S;M.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Lr){var n=Lr=[];Or=0,_r=Tu(),Nr={status:"pending",value:void 0,then:function(e){n.push(e)}}}Or++,t.then(Fr,Fr)}(0,t),null!==Ir&&Ir(e,t)};var Vr=F(null);function Ur(){var e=Vr.current;return null!==e?e:ic.pooledCache}function Br(e,t){V(Vr,null===t?Vr.current:t.pool)}function Hr(){var e=Ur();return null===e?null:{parent:Rr._currentValue,pool:e}}var qr=Error(o(460)),Wr=Error(o(474)),Yr=Error(o(542)),Kr={then:function(){}};function Gr(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Xr(){}function Qr(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Xr,Xr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Xr,Xr);else{if(null!==(e=ic)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Jr=t,qr}}var Jr=null;function Zr(){if(null===Jr)throw Error(o(459));var e=Jr;return Jr=null,e}function ea(e){if(e===qr||e===Yr)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var i=e.updateQueue;if(null===i)return null;if(i=i.shared,0!==(2&nc)){var r=i.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Di(e),Ri(e,null,n),t}return Ti(e,i,t,n),Di(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,Ce(e,n)}}function sa(e,t){var n=e.updateQueue,i=e.alternate;if(null!==i&&n===(i=i.updateQueue)){var r=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?r=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?r=a=t:a=a.next=t}else r=a=t;return n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Nr)throw Nr}}function ua(e,t,n,i){la=!1;var r=e.updateQueue;ta=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(null!==s){r.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=r.baseState;for(o=0,u=c=l=null,s=a;;){var p=-536870913&s.lane,h=p!==s.lane;if(h?(ac&p)===p:(i&p)===p){0!==p&&p===_r&&(la=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var f=e,g=s;p=t;var y=n;switch(g.tag){case 1:if("function"===typeof(f=g.payload)){d=f.call(y,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=g.payload)?f.call(y,d,p):f)||void 0===p)break e;d=m({},d,p);break e;case 2:ta=!0}}null!==(p=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=r.callbacks)?r.callbacks=[p]:h.push(p))}else h={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,o|=p;if(null===(s=s.next)){if(null===(s=r.shared.pending))break;s=(h=s).next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}null===u&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,null===a&&(r.shared.lanes=0),pc|=o,e.lanes=o,e.memoizedState=d}}function da(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function ma(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)da(n[e],t)}var pa=F(null),ha=F(0);function fa(e,t){V(ha,e=dc),V(pa,t),dc=e|t.baseLanes}function ga(){V(ha,dc),V(pa,pa.current)}function ya(){dc=ha.current,I(pa),I(ha)}var ba=0,va=null,xa=null,wa=null,Sa=!1,ka=!1,$a=!1,Ea=0,ja=0,Ca=null,Pa=0;function Ta(){throw Error(o(321))}function za(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Aa(e,t,n,i,r,a){return ba=a,va=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=null===e||null===e.memoizedState?Wo:Yo,$a=!1,a=n(i,r),$a=!1,ka&&(a=Da(t,n,i,r)),Ra(e),a}function Ra(e){M.H=qo;var t=null!==xa&&null!==xa.next;if(ba=0,wa=xa=va=null,Sa=!1,ja=0,Ca=null,t)throw Error(o(300));null===e||Cs||null!==(e=e.dependencies)&&$r(e)&&(Cs=!0)}function Da(e,t,n,i){va=e;var r=0;do{if(ka&&(Ca=null),ja=0,ka=!1,25<=r)throw Error(o(301));if(r+=1,wa=xa=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}M.H=Ko,a=t(n,i)}while(ka);return a}function Ma(){var e=M.H,t=e.useState()[0];return t="function"===typeof t.then?Ia(t):t,e=e.useState()[0],(null!==xa?xa.memoizedState:null)!==e&&(va.flags|=1024),t}function La(){var e=0!==Ea;return Ea=0,e}function Oa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _a(e){if(Sa){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Sa=!1}ba=0,wa=xa=va=null,ka=!1,ja=Ea=0,Ca=null}function Na(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?va.memoizedState=wa=e:wa=wa.next=e,wa}function Fa(){if(null===xa){var e=va.alternate;e=null!==e?e.memoizedState:null}else e=xa.next;var t=null===wa?va.memoizedState:wa.next;if(null!==t)wa=t,xa=e;else{if(null===e){if(null===va.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(xa=e).memoizedState,baseState:xa.baseState,baseQueue:xa.baseQueue,queue:xa.queue,next:null},null===wa?va.memoizedState=wa=e:wa=wa.next=e}return wa}function Ia(e){var t=ja;return ja+=1,null===Ca&&(Ca=[]),e=Qr(Ca,e,t),t=va,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,M.H=null===t||null===t.memoizedState?Wo:Yo),e}function Va(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ia(e);if(e.$$typeof===w)return jr(e)}throw Error(o(438,String(e)))}function Ua(e){var t=null,n=va.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var i=va.alternate;null!==i&&(null!==(i=i.updateQueue)&&(null!=(i=i.memoCache)&&(t={data:i.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},va.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=P;return t.index++,n}function Ba(e,t){return"function"===typeof t?t(e):t}function Ha(e){return qa(Fa(),xa,e)}function qa(e,t,n){var i=e.queue;if(null===i)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,a=i.pending;if(null!==a){if(null!==r){var s=r.next;r.next=a.next,a.next=s}t.baseQueue=r=a,i.pending=null}if(a=e.baseState,null===r)e.memoizedState=a;else{var l=s=null,c=null,u=t=r.next,d=!1;do{var m=-536870913&u.lane;if(m!==u.lane?(ac&m)===m:(ba&m)===m){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),m===_r&&(d=!0);else{if((ba&p)===p){u=u.next,p===_r&&(d=!0);continue}m={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=m,s=a):c=c.next=m,va.lanes|=p,pc|=p}m=u.action,$a&&n(a,m),a=u.hasEagerState?u.eagerState:n(a,m)}else p={lane:m,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,va.lanes|=m,pc|=m;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Gn(a,e.memoizedState)&&(Cs=!0,d&&null!==(n=Nr)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,i.lastRenderedState=a}return null===r&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Wa(e){var t=Fa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(null!==r){n.pending=null;var s=r=r.next;do{a=e(a,s.action),s=s.next}while(s!==r);Gn(a,t.memoizedState)||(Cs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Ya(e,t,n){var i=va,r=Fa(),a=ar;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Gn((xa||r).memoizedState,n);if(s&&(r.memoizedState=n,Cs=!0),r=r.queue,yo(2048,8,Xa.bind(null,i,r,e),[e]),r.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(i.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Ga.bind(null,i,r,n,t),null),null===ic)throw Error(o(349));a||0!==(124&ba)||Ka(i,t,n)}return n}function Ka(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=va.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},va.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ga(e,t,n,i){t.value=n,t.getSnapshot=i,Qa(t)&&Ja(e)}function Xa(e,t,n){return n((function(){Qa(t)&&Ja(e)}))}function Qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(i){return!0}}function Ja(e){var t=Ai(e,2);null!==t&&Oc(t,e,2)}function Za(e){var t=Na();if("function"===typeof e){var n=e;if(e=n(),$a){me(!0);try{n()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:e},t}function eo(e,t,n,i){return e.baseState=n,qa(e,xa,"function"===typeof i?i:Ba)}function to(e,t,n,i,r){if(Uo(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==M.T?n(!0):a.isTransition=!1,i(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(r,i),l=M.S;null!==l&&l(o,s),io(e,t,s)}catch(c){ao(e,t,c)}finally{M.T=a}}else try{io(e,t,a=n(r,i))}catch(u){ao(e,t,u)}}function io(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){ro(e,t,n)}),(function(n){return ao(e,t,n)})):ro(e,t,n)}function ro(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var i=e.pending;if(e.pending=null,null!==i){i=i.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==i)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ar){var n=ic.formState;if(null!==n){e:{var i=va;if(ar){if(rr){t:{for(var r=rr,a=sr;8!==r.nodeType;){if(!a){r=null;break t}if(null===(r=yd(r.nextSibling))){r=null;break t}}r="F!"===(a=r.data)||"F"===a?r:null}if(r){rr=yd(r.nextSibling),i="F!"===r.data;break e}}cr(i)}i=!1}i&&(t=n[0])}}return(n=Na()).memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=i,n=Fo.bind(null,va,i),i.dispatch=n,i=Za(!1),a=Vo.bind(null,va,!1,i.queue),r={state:t,dispatch:null,action:e,pending:null},(i=Na()).queue=r,n=to.bind(null,va,r,a,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function co(e){return uo(Fa(),xa,e)}function uo(e,t,n){if(t=qa(e,t,so)[0],e=Ha(Ba)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var i=Ia(t)}catch(o){if(o===qr)throw Yr;throw o}else i=t;var r=(t=Fa()).queue,a=r.dispatch;return n!==t.memoizedState&&(va.flags|=2048,ho(9,{destroy:void 0,resource:void 0},mo.bind(null,r,n),null)),[i,a,e]}function mo(e,t){e.action=t}function po(e){var t=Fa(),n=xa;if(null!==n)return uo(t,n,e);Fa(),t=t.memoizedState;var i=(n=Fa()).queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ho(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},null===(t=va.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},va.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function fo(){return Fa().memoizedState}function go(e,t,n,i){var r=Na();i=void 0===i?null:i,va.flags|=e,r.memoizedState=ho(1|t,{destroy:void 0,resource:void 0},n,i)}function yo(e,t,n,i){var r=Fa();i=void 0===i?null:i;var a=r.memoizedState.inst;null!==xa&&null!==i&&za(i,xa.memoizedState.deps)?r.memoizedState=ho(t,a,n,i):(va.flags|=e,r.memoizedState=ho(1|t,a,n,i))}function bo(e,t){go(8390656,8,e,t)}function vo(e,t){yo(2048,8,e,t)}function xo(e,t){return yo(4,2,e,t)}function wo(e,t){return yo(4,4,e,t)}function So(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,yo(4,4,So.bind(null,t,e),n)}function $o(){}function Eo(e,t){var n=Fa();t=void 0===t?null:t;var i=n.memoizedState;return null!==t&&za(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function jo(e,t){var n=Fa();t=void 0===t?null:t;var i=n.memoizedState;if(null!==t&&za(t,i[1]))return i[0];if(i=e(),$a){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[i,t],i}function Co(e,t,n){return void 0===n||0!==(1073741824&ba)?e.memoizedState=t:(e.memoizedState=n,e=Lc(),va.lanes|=e,pc|=e,n)}function Po(e,t,n,i){return Gn(n,t)?n:null!==pa.current?(e=Co(e,n,i),Gn(e,t)||(Cs=!0),e):0===(42&ba)?(Cs=!0,e.memoizedState=n):(e=Lc(),va.lanes|=e,pc|=e,t)}function To(e,t,n,i,r){var a=L.p;L.p=0!==a&&8>a?a:8;var o=M.T,s={};M.T=s,Vo(e,!1,t,n);try{var l=r(),c=M.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Io(e,t,function(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){i.status="fulfilled",i.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(i.status="rejected",i.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),i}(l,i),Mc());else Io(e,t,i,Mc())}catch(u){Io(e,t,{then:function(){},status:"rejected",reason:u},Mc())}finally{L.p=a,M.T=o}}function zo(){}function Ao(e,t,n,i){if(5!==e.tag)throw Error(o(476));var r=Ro(e).queue;To(e,r,t,O,null===n?zo:function(){return Do(e),n(i)})}function Ro(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Do(e){Io(e,Ro(e).next.queue,{},Mc())}function Mo(){return jr(Kd)}function Lo(){return Fa().memoizedState}function Oo(){return Fa().memoizedState}function _o(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Mc(),i=aa(t,e=ra(n),n);return null!==i&&(Oc(i,t,n),oa(i,t,n)),t={cache:Dr()},void(e.payload=t)}t=t.return}}function No(e,t,n){var i=Mc();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Uo(e)?Bo(t,n):null!==(n=zi(e,t,n,i))&&(Oc(n,e,i),Ho(n,t,i))}function Fo(e,t,n){Io(e,t,n,Mc())}function Io(e,t,n,i){var r={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uo(e))Bo(t,r);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,Gn(s,o))return Ti(e,t,r,0),null===ic&&Pi(),!1}catch(l){}if(null!==(n=zi(e,t,r,i)))return Oc(n,e,i),Ho(n,t,i),!0}return!1}function Vo(e,t,n,i){if(i={lane:2,revertLane:Tu(),action:i,hasEagerState:!1,eagerState:null,next:null},Uo(e)){if(t)throw Error(o(479))}else null!==(t=zi(e,n,i,2))&&Oc(t,e,2)}function Uo(e){var t=e.alternate;return e===va||null!==t&&t===va}function Bo(e,t){ka=Sa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ho(e,t,n){if(0!==(4194048&n)){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,Ce(e,n)}}var qo={readContext:jr,use:Va,useCallback:Ta,useContext:Ta,useEffect:Ta,useImperativeHandle:Ta,useLayoutEffect:Ta,useInsertionEffect:Ta,useMemo:Ta,useReducer:Ta,useRef:Ta,useState:Ta,useDebugValue:Ta,useDeferredValue:Ta,useTransition:Ta,useSyncExternalStore:Ta,useId:Ta,useHostTransitionStatus:Ta,useFormState:Ta,useActionState:Ta,useOptimistic:Ta,useMemoCache:Ta,useCacheRefresh:Ta},Wo={readContext:jr,use:Va,useCallback:function(e,t){return Na().memoizedState=[e,void 0===t?null:t],e},useContext:jr,useEffect:bo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,So.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Na();t=void 0===t?null:t;var i=e();if($a){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Na();if(void 0!==n){var r=n(t);if($a){me(!0);try{n(t)}finally{me(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=No.bind(null,va,e),[i.memoizedState,e]},useRef:function(e){return e={current:e},Na().memoizedState=e},useState:function(e){var t=(e=Za(e)).queue,n=Fo.bind(null,va,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$o,useDeferredValue:function(e,t){return Co(Na(),e,t)},useTransition:function(){var e=Za(!1);return e=To.bind(null,va,e.queue,!0,!1),Na().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=va,r=Na();if(ar){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===ic)throw Error(o(349));0!==(124&ac)||Ka(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,bo(Xa.bind(null,i,a,e),[e]),i.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Ga.bind(null,i,a,n,t),null),n},useId:function(){var e=Na(),t=ic.identifierPrefix;if(ar){var n=Ji;t="\xab"+t+"R"+(n=(Qi&~(1<<32-pe(Qi)-1)).toString(32)+n),0<(n=Ea++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Pa++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Mo,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Na();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vo.bind(null,va,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ua,useCacheRefresh:function(){return Na().memoizedState=_o.bind(null,va)}},Yo={readContext:jr,use:Va,useCallback:Eo,useContext:jr,useEffect:vo,useImperativeHandle:ko,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:jo,useReducer:Ha,useRef:fo,useState:function(){return Ha(Ba)},useDebugValue:$o,useDeferredValue:function(e,t){return Po(Fa(),xa.memoizedState,e,t)},useTransition:function(){var e=Ha(Ba)[0],t=Fa().memoizedState;return["boolean"===typeof e?e:Ia(e),t]},useSyncExternalStore:Ya,useId:Lo,useHostTransitionStatus:Mo,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Fa(),0,e,t)},useMemoCache:Ua,useCacheRefresh:Oo},Ko={readContext:jr,use:Va,useCallback:Eo,useContext:jr,useEffect:vo,useImperativeHandle:ko,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:jo,useReducer:Wa,useRef:fo,useState:function(){return Wa(Ba)},useDebugValue:$o,useDeferredValue:function(e,t){var n=Fa();return null===xa?Co(n,e,t):Po(n,xa.memoizedState,e,t)},useTransition:function(){var e=Wa(Ba)[0],t=Fa().memoizedState;return["boolean"===typeof e?e:Ia(e),t]},useSyncExternalStore:Ya,useId:Lo,useHostTransitionStatus:Mo,useFormState:po,useActionState:po,useOptimistic:function(e,t){var n=Fa();return null!==xa?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ua,useCacheRefresh:Oo},Go=null,Xo=0;function Qo(e){var t=Xo;return Xo+=1,null===Go&&(Go=[]),Qr(Go,e,t)}function Jo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===p)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var i=t.deletions;null===i?(t.deletions=[n],t.flags|=16):i.push(n)}}function n(n,i){if(!e)return null;for(;null!==i;)t(n,i),i=i.sibling;return null}function i(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function r(e,t){return(e=Ni(e,t)).index=0,e.sibling=null,e}function a(t,n,i){return t.index=i,e?null!==(i=t.alternate)?(i=i.index)<n?(t.flags|=67108866,n):i:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,i){return null===t||6!==t.tag?((t=Ui(n,e.mode,i)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,i){var a=n.type;return a===g?d(e,t,n.props.children,i,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===j&&es(a)===t.type)?(Jo(t=r(t,n.props),n),t.return=e,t):(Jo(t=Ii(n.type,n.key,n.props,null,e.mode,i),n),t.return=e,t)}function u(e,t,n,i){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Bi(n,e.mode,i)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function d(e,t,n,i,a){return null===t||7!==t.tag?((t=Vi(n,e.mode,i,a)).return=e,t):((t=r(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Ui(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Jo(n=Ii(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case f:return(t=Bi(t,e.mode,n)).return=e,t;case j:return m(e,t=(0,t._init)(t._payload),n)}if(D(t)||z(t))return(t=Vi(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,Qo(t),n);if(t.$$typeof===w)return m(e,Cr(e,t),n);Zo(e,t)}return null}function p(e,t,n,i){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==r?null:l(e,t,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===r?c(e,t,n,i):null;case f:return n.key===r?u(e,t,n,i):null;case j:return p(e,t,n=(r=n._init)(n._payload),i)}if(D(n)||z(n))return null!==r?null:d(e,t,n,i,null);if("function"===typeof n.then)return p(e,t,Qo(n),i);if(n.$$typeof===w)return p(e,t,Cr(e,n),i);Zo(e,n)}return null}function y(e,t,n,i,r){if("string"===typeof i&&""!==i||"number"===typeof i||"bigint"===typeof i)return l(t,e=e.get(n)||null,""+i,r);if("object"===typeof i&&null!==i){switch(i.$$typeof){case h:return c(t,e=e.get(null===i.key?n:i.key)||null,i,r);case f:return u(t,e=e.get(null===i.key?n:i.key)||null,i,r);case j:return y(e,t,n,i=(0,i._init)(i._payload),r)}if(D(i)||z(i))return d(t,e=e.get(n)||null,i,r,null);if("function"===typeof i.then)return y(e,t,n,Qo(i),r);if(i.$$typeof===w)return y(e,t,n,Cr(t,i),r);Zo(t,i)}return null}function b(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var v=u.key;null!==c;){if(c.key===v){if((v=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=r(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===v||"object"===typeof v&&null!==v&&v.$$typeof===j&&es(v)===c.type){n(l,c.sibling),Jo(d=r(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Vi(u.props.children,l.mode,d,u.key)).return=l,l=d):(Jo(d=Ii(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case f:e:{for(v=u.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=r(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Bi(u,l.mode,d)).return=l,l=d}return s(l);case j:return b(l,c,u=(v=u._init)(u._payload),d)}if(D(u))return function(r,o,s,l){for(var c=null,u=null,d=o,h=o=0,f=null;null!==d&&h<s.length;h++){d.index>h?(f=d,d=null):f=d.sibling;var g=p(r,d,s[h],l);if(null===g){null===d&&(d=f);break}e&&d&&null===g.alternate&&t(r,d),o=a(g,o,h),null===u?c=g:u.sibling=g,u=g,d=f}if(h===s.length)return n(r,d),ar&&Zi(r,h),c;if(null===d){for(;h<s.length;h++)null!==(d=m(r,s[h],l))&&(o=a(d,o,h),null===u?c=d:u.sibling=d,u=d);return ar&&Zi(r,h),c}for(d=i(d);h<s.length;h++)null!==(f=y(d,r,h,s[h],l))&&(e&&null!==f.alternate&&d.delete(null===f.key?h:f.key),o=a(f,o,h),null===u?c=f:u.sibling=f,u=f);return e&&d.forEach((function(e){return t(r,e)})),ar&&Zi(r,h),c}(l,c,u,d);if(z(u)){if("function"!==typeof(v=z(u)))throw Error(o(150));return function(r,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,h=s,f=s=0,g=null,b=l.next();null!==h&&!b.done;f++,b=l.next()){h.index>f?(g=h,h=null):g=h.sibling;var v=p(r,h,b.value,c);if(null===v){null===h&&(h=g);break}e&&h&&null===v.alternate&&t(r,h),s=a(v,s,f),null===d?u=v:d.sibling=v,d=v,h=g}if(b.done)return n(r,h),ar&&Zi(r,f),u;if(null===h){for(;!b.done;f++,b=l.next())null!==(b=m(r,b.value,c))&&(s=a(b,s,f),null===d?u=b:d.sibling=b,d=b);return ar&&Zi(r,f),u}for(h=i(h);!b.done;f++,b=l.next())null!==(b=y(h,r,f,b.value,c))&&(e&&null!==b.alternate&&h.delete(null===b.key?f:b.key),s=a(b,s,f),null===d?u=b:d.sibling=b,d=b);return e&&h.forEach((function(e){return t(r,e)})),ar&&Zi(r,f),u}(l,c,u=v.call(u),d)}if("function"===typeof u.then)return b(l,c,Qo(u),d);if(u.$$typeof===w)return b(l,c,Cr(l,u),d);Zo(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=r(c,u)).return=l,l=d):(n(l,c),(d=Ui(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,i){try{Xo=0;var r=b(e,t,n,i);return Go=null,r}catch(o){if(o===qr||o===Yr)throw o;var a=Oi(29,o,null,e.mode);return a.lanes=i,a.return=e,a}}}var ns=ts(!0),is=ts(!1),rs=F(null),as=null;function os(e){var t=e.alternate;V(us,1&us.current),V(rs,e),null===as&&(null===t||null!==pa.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(V(us,us.current),V(rs,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){V(us,us.current),V(rs,rs.current)}function cs(e){I(rs),as===e&&(as=null),I(us)}var us=F(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ms(e,t,n,i){n=null===(n=n(i,t=e.memoizedState))||void 0===n?t:m({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ps={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Mc(),r=ra(i);r.payload=t,void 0!==n&&null!==n&&(r.callback=n),null!==(t=aa(e,r,i))&&(Oc(t,e,i),oa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Mc(),r=ra(i);r.tag=1,r.payload=t,void 0!==n&&null!==n&&(r.callback=n),null!==(t=aa(e,r,i))&&(Oc(t,e,i),oa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mc(),i=ra(n);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=aa(e,i,n))&&(Oc(t,e,n),oa(t,e,n))}};function hs(e,t,n,i,r,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(i,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Xn(n,i)||!Xn(r,a))}function fs(e,t,n,i){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,i),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var i in n={},t)"ref"!==i&&(n[i]=t[i]);if(e=e.defaultProps)for(var r in n===t&&(n=m({},n)),e)void 0===n[r]&&(n[r]=e[r]);return n}var ys="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function bs(e){ys(e)}function vs(e){console.error(e)}function xs(e){ys(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(i){setTimeout((function(){throw i}))}}function ks(e,t,n){return(n=ra(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function $s(e){return(e=ra(e)).tag=3,e}function Es(e,t,n,i){var r=n.type.getDerivedStateFromError;if("function"===typeof r){var a=i.value;e.payload=function(){return r(a)},e.callback=function(){Ss(t,n,i)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ss(t,n,i),"function"!==typeof r&&(null===$c?$c=new Set([this]):$c.add(this));var e=i.stack;this.componentDidCatch(i.value,{componentStack:null!==e?e:""})})}var js=Error(o(461)),Cs=!1;function Ps(e,t,n,i){t.child=null===e?is(t,null,n,i):ns(t,e.child,n,i)}function Ts(e,t,n,i,r){n=n.render;var a=t.ref;if("ref"in i){var o={};for(var s in i)"ref"!==s&&(o[s]=i[s])}else o=i;return Er(t),i=Aa(e,t,n,o,a,r),s=La(),null===e||Cs?(ar&&s&&tr(t),t.flags|=1,Ps(e,t,i,r),t.child):(Oa(e,t,r),Gs(e,t,r))}function zs(e,t,n,i,r){if(null===e){var a=n.type;return"function"!==typeof a||_i(a)||void 0!==a.defaultProps||null!==n.compare?((e=Ii(n.type,null,i,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,As(e,t,a,i,r))}if(a=e.child,!Xs(e,r)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Xn)(o,i)&&e.ref===t.ref)return Gs(e,t,r)}return t.flags|=1,(e=Ni(a,i)).ref=t.ref,e.return=t,t.child=e}function As(e,t,n,i,r){if(null!==e){var a=e.memoizedProps;if(Xn(a,i)&&e.ref===t.ref){if(Cs=!1,t.pendingProps=i=a,!Xs(e,r))return t.lanes=e.lanes,Gs(e,t,r);0!==(131072&e.flags)&&(Cs=!0)}}return Ls(e,t,n,i,r)}function Rs(e,t,n){var i=t.pendingProps,r=i.children,a=null!==e?e.memoizedState:null;if("hidden"===i.mode){if(0!==(128&t.flags)){if(i=null!==a?a.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;t.childLanes=a&~i}else t.childLanes=0,t.child=null;return Ds(e,t,i,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ds(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Br(0,null!==a?a.cachePool:null),null!==a?fa(t,a):ga(),ss(t)}else null!==a?(Br(0,a.cachePool),fa(t,a),ls(),t.memoizedState=null):(null!==e&&Br(0,null),ga(),ls());return Ps(e,t,r,n),t.child}function Ds(e,t,n,i){var r=Ur();return r=null===r?null:{parent:Rr._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},null!==e&&Br(0,null),ga(),ss(t),null!==e&&kr(e,t,i,!0),null}function Ms(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ls(e,t,n,i,r){return Er(t),n=Aa(e,t,n,i,void 0,r),i=La(),null===e||Cs?(ar&&i&&tr(t),t.flags|=1,Ps(e,t,n,r),t.child):(Oa(e,t,r),Gs(e,t,r))}function Os(e,t,n,i,r,a){return Er(t),t.updateQueue=null,n=Da(t,i,n,r),Ra(e),i=La(),null===e||Cs?(ar&&i&&tr(t),t.flags|=1,Ps(e,t,n,a),t.child):(Oa(e,t,a),Gs(e,t,a))}function _s(e,t,n,i,r){if(Er(t),null===t.stateNode){var a=Mi,o=n.contextType;"object"===typeof o&&null!==o&&(a=jr(o)),a=new n(i,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=ps,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=i,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?jr(o):Mi,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(ms(t,n,o,i),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&ps.enqueueReplaceState(a,a.state,null),ua(t,i,a,r),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),i=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,u=n.contextType;o=Mi,"object"===typeof u&&null!==u&&(o=jr(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&fs(t,a,i,o),ta=!1;var m=t.memoizedState;a.state=m,ua(t,i,a,r),ca(),c=t.memoizedState,s||m!==c||ta?("function"===typeof d&&(ms(t,n,d,i),c=t.memoizedState),(l=ta||hs(t,n,l,i,m,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=o,i=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,ia(e,t),u=gs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,m=a.context,c=n.contextType,l=Mi,"object"===typeof c&&null!==c&&(l=jr(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||m!==l)&&fs(t,a,i,l),ta=!1,m=t.memoizedState,a.state=m,ua(t,i,a,r),ca();var p=t.memoizedState;o!==d||m!==p||ta||null!==e&&null!==e.dependencies&&$r(e.dependencies)?("function"===typeof s&&(ms(t,n,s,i),p=t.memoizedState),(u=ta||hs(t,n,u,i,m,p,l)||null!==e&&null!==e.dependencies&&$r(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(i,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(i,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ms(e,t),i=0!==(128&t.flags),a||i?(a=t.stateNode,n=i&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&i?(t.child=ns(t,e.child,null,r),t.child=ns(t,null,n,r)):Ps(e,t,n,r),t.memoizedState=a.state,e=t.child):e=Gs(e,t,r),e}function Ns(e,t,n,i){return pr(),t.flags|=256,Ps(e,t,n,i),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Is(e){return{baseLanes:e,cachePool:Hr()}}function Vs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Us(e,t,n){var i,r=t.pendingProps,a=!1,s=0!==(128&t.flags);if((i=s)||(i=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),i&&(a=!0,t.flags&=-129),i=0!==(32&t.flags),t.flags&=-33,null===e){if(ar){if(a?os(t):ls(),ar){var l,c=rr;if(l=c){e:{for(l=c,c=sr;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=yd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Xi?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},(l=Oi(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ir=t,rr=null,l=!0):l=!1}l||cr(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=r.children,r=r.fallback,a?(ls(),c=Hs({mode:"hidden",children:c},a=t.mode),r=Vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,(a=t.child).memoizedState=Is(n),a.childLanes=Vs(e,i,n),t.memoizedState=Fs,r):(os(t),Bs(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=qs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=r.fallback,c=t.mode,r=Hs({mode:"visible",children:r.children},c),(a=Vi(a,c,n,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,ns(t,e.child,null,n),(r=t.child).memoizedState=Is(n),r.childLanes=Vs(e,i,n),t.memoizedState=Fs,t=a);else if(os(t),gd(c)){if(i=c.nextSibling&&c.nextSibling.dataset)var u=i.dgst;i=u,(r=Error(o(419))).stack="",r.digest=i,fr({value:r,source:null,stack:null}),t=qs(e,t,n)}else if(Cs||kr(e,t,n,!1),i=0!==(n&e.childLanes),Cs||i){if(null!==(i=ic)&&(0!==(r=0!==((r=0!==(42&(r=n&-n))?1:Pe(r))&(i.suspendedLanes|n))?0:r)&&r!==l.retryLane))throw l.retryLane=r,Ai(e,r),Oc(i,e,r),js;"$?"===c.data||Yc(),t=qs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,rr=yd(c.nextSibling),ir=t,ar=!0,or=null,sr=!1,null!==e&&(Ki[Gi++]=Qi,Ki[Gi++]=Ji,Ki[Gi++]=Xi,Qi=e.id,Ji=e.overflow,Xi=t),(t=Bs(t,r.children)).flags|=4096);return t}return a?(ls(),a=r.fallback,c=t.mode,u=(l=e.child).sibling,(r=Ni(l,{mode:"hidden",children:r.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?a=Ni(u,a):(a=Vi(a,c,n,null)).flags|=2,a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,null===(c=e.child.memoizedState)?c=Is(n):(null!==(l=c.cachePool)?(u=Rr._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Hr(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Vs(e,i,n),t.memoizedState=Fs,r):(os(t),e=(n=e.child).sibling,(n=Ni(n,{mode:"visible",children:r.children})).return=t,n.sibling=null,null!==e&&(null===(i=t.deletions)?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function Bs(e,t){return(t=Hs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Hs(e,t){return(e=Oi(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function qs(e,t,n){return ns(t,e.child,null,n),(e=Bs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ws(e,t,n){e.lanes|=t;var i=e.alternate;null!==i&&(i.lanes|=t),wr(e.return,t,n)}function Ys(e,t,n,i,r){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Ks(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(Ps(e,t,i.children,n),0!==(2&(i=us.current)))i=1&i|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ws(e,n,t);else if(19===e.tag)Ws(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(V(us,i),r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ys(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===ds(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ys(t,!0,n,null,a);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(kr(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ni(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ni(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!$r(e))}function Qs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Cs=!0;else{if(!Xs(e,n)&&0===(128&t.flags))return Cs=!1,function(e,t,n){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),vr(0,Rr,e.memoizedState.cache),pr();break;case 27:case 5:K(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:vr(0,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(null!==i)return null!==i.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Us(e,t,n):(os(t),null!==(e=Gs(e,t,n))?e.sibling:null);os(t);break;case 19:var r=0!==(128&e.flags);if((i=0!==(n&t.childLanes))||(kr(e,t,n,!1),i=0!==(n&t.childLanes)),r){if(i)return Ks(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(us,us.current),i)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n);case 24:vr(0,Rr,e.memoizedState.cache)}return Gs(e,t,n)}(e,t,n);Cs=0!==(131072&e.flags)}else Cs=!1,ar&&0!==(1048576&t.flags)&&er(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,r=i._init;if(i=r(i._payload),t.type=i,"function"!==typeof i){if(void 0!==i&&null!==i){if((r=i.$$typeof)===S){t.tag=11,t=Ts(null,t,i,e,n);break e}if(r===E){t.tag=14,t=zs(null,t,i,e,n);break e}}throw t=R(i)||i,Error(o(306,t,""))}_i(i)?(e=gs(i,e),t.tag=1,t=_s(null,t,i,e,n)):(t.tag=0,t=Ls(null,t,i,e,n))}return t;case 0:return Ls(e,t,t.type,t.pendingProps,n);case 1:return _s(e,t,i=t.type,r=gs(i,t.pendingProps),n);case 3:e:{if(W(t,t.stateNode.containerInfo),null===e)throw Error(o(387));i=t.pendingProps;var a=t.memoizedState;r=a.element,ia(e,t),ua(t,i,null,n);var s=t.memoizedState;if(i=s.cache,vr(0,Rr,i),i!==a.cache&&Sr(t,[Rr],n,!0),ca(),i=s.element,a.isDehydrated){if(a={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ns(e,t,i,n);break e}if(i!==r){fr(r=$i(Error(o(424)),t)),t=Ns(e,t,i,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(rr=yd(e.firstChild),ir=t,ar=!0,or=null,sr=!0,n=is(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pr(),i===r){t=Gs(e,t,n);break e}Ps(e,t,i,n)}t=t.child}return t;case 26:return Ms(e,t),null===e?(n=Pd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ar||(n=t.type,e=t.pendingProps,(i=id(H.current).createElement(n))[Re]=t,i[De]=e,ed(i,n,e),qe(i),t.stateNode=i):t.memoizedState=Pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&ar&&(i=t.stateNode=xd(t.type,t.pendingProps,H.current),ir=t,sr=!0,r=rr,pd(t.type)?(bd=r,rr=yd(i.firstChild)):rr=r),Ps(e,t,t.pendingProps.children,n),Ms(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ar&&((r=i=rr)&&(null!==(i=function(e,t,n,i){for(;1===e.nodeType;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(i){if(!e[Fe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(null==r.href||""===r.href?null:r.href)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin)||e.getAttribute("title")!==(null==r.title?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==r.src?null:r.src)||e.getAttribute("type")!==(null==r.type?null:r.type)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==r.name?null:""+r.name;if("hidden"===r.type&&e.getAttribute("name")===a)return e}if(null===(e=yd(e.nextSibling)))break}return null}(i,t.type,t.pendingProps,sr))?(t.stateNode=i,ir=t,rr=yd(i.firstChild),sr=!1,r=!0):r=!1),r||cr(t)),K(t),r=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,i=a.children,od(r,a)?i=null:null!==s&&od(r,s)&&(t.flags|=32),null!==t.memoizedState&&(r=Aa(e,t,Ma,null,null,n),Kd._currentValue=r),Ms(e,t),Ps(e,t,i,n),t.child;case 6:return null===e&&ar&&((e=n=rr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=yd(e.nextSibling)))return null}return e}(n,t.pendingProps,sr))?(t.stateNode=n,ir=t,rr=null,e=!0):e=!1),e||cr(t)),null;case 13:return Us(e,t,n);case 4:return W(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=ns(t,null,i,n):Ps(e,t,i,n),t.child;case 11:return Ts(e,t,t.type,t.pendingProps,n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,vr(0,t.type,i.value),Ps(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Er(t),i=i(r=jr(r)),t.flags|=1,Ps(e,t,i,n),t.child;case 14:return zs(e,t,t.type,t.pendingProps,n);case 15:return As(e,t,t.type,t.pendingProps,n);case 19:return Ks(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},null===e?((n=Hs(i,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Ni(e.child,i)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rs(e,t,n);case 24:return Er(t),i=jr(Rr),null===e?(null===(r=Ur())&&(r=ic,a=Dr(),r.pooledCache=a,a.refCount++,null!==a&&(r.pooledCacheLanes|=n),r=a),t.memoizedState={parent:i,cache:r},na(t),vr(0,Rr,r)):(0!==(e.lanes&n)&&(ia(e,t),ua(t,null,null,n),ca()),r=e.memoizedState,a=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=r),vr(0,Rr,i)):(i=a.cache,vr(0,Rr,i),i!==r.cache&&Sr(t,[Rr],n,!0))),Ps(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t)){if(null!==(t=rs.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Jr=Kr,Wr;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,yc|=t)}function tl(e,t){if(!ar)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;null!==n;)null!==n.alternate&&(i=n),n=n.sibling;null===i?t||null===e.tail?e.tail=null:e.tail.sibling=null:i.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=65011712&r.subtreeFlags,i|=65011712&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function il(e,t,n){var i=t.pendingProps;switch(nr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,i=null,null!==e&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xr(Rr),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(mr(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,hr())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==i&&Js(t),nl(t),t.flags&=-16777217),null;case 27:G(t),n=H.current;var r=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==i&&Js(t);else{if(!i){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=U.current,mr(t)?ur(t):(e=xd(r,i,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==i&&Js(t);else{if(!i){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=U.current,mr(t))ur(t);else{switch(r=id(H.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=r.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof i.is?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e="string"===typeof i.is?r.createElement(n,{is:i.is}):r.createElement(n)}}e[Re]=t,e[De]=i;e:for(r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&27!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;null===r.sibling;){if(null===r.return||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(ed(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==i&&Js(t);else{if("string"!==typeof i&&null===t.stateNode)throw Error(o(166));if(e=H.current,mr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,null!==(r=ir))switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==i&&!0===i.suppressHydrationWarning||Xu(e.nodeValue,n)))||cr(t)}else(e=id(e).createTextNode(i))[Re]=t,t.stateNode=e}return nl(t),null;case 13:if(i=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(r=mr(t),null!==i&&null!==i.dehydrated){if(null===e){if(!r)throw Error(o(318));if(!(r=null!==(r=t.memoizedState)?r.dehydrated:null))throw Error(o(317));r[Re]=t}else pr(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),r=!1}else r=hr(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==i,e=null!==e&&null!==e.memoizedState,n){r=null,null!==(i=t.child).alternate&&null!==i.alternate.memoizedState&&null!==i.alternate.memoizedState.cachePool&&(r=i.alternate.memoizedState.cachePool.pool);var a=null;null!==i.memoizedState&&null!==i.memoizedState.cachePool&&(a=i.memoizedState.cachePool.pool),a!==r&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return Y(),null===e&&Iu(t.stateNode.containerInfo),nl(t),null;case 10:return xr(t.type),nl(t),null;case 19:if(I(us),null===(r=t.memoizedState))return nl(t),null;if(i=0!==(128&t.flags),null===(a=r.rendering))if(i)tl(r,!1);else{if(0!==mc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=ds(e))){for(t.flags|=128,tl(r,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Fi(n,e),n=n.sibling;return V(us,1&us.current|2),t.child}e=e.sibling}null!==r.tail&&te()>Sc&&(t.flags|=128,i=!0,tl(r,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=ds(a))){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate&&!ar)return nl(t),null}else 2*te()-r.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,i=!0,tl(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=r.last)?e.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=te(),t.sibling=null,e=us.current,V(us,i?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),ya(),i=null!==t.memoizedState,null!==e?null!==e.memoizedState!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),i=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),null!==e&&I(Vr),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xr(Rr),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function rl(e,t){switch(nr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xr(Rr),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));pr()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return I(us),null;case 4:return Y(),null;case 10:return xr(t.type),null;case 22:case 23:return cs(t),ya(),null!==e&&I(Vr),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xr(Rr),null;default:return null}}function al(e,t){switch(nr(t),t.tag){case 3:xr(Rr),Y();break;case 26:case 27:case 5:G(t);break;case 4:Y();break;case 13:cs(t);break;case 19:I(us);break;case 10:xr(t.type);break;case 22:case 23:cs(t),ya(),null!==e&&I(Vr);break;case 24:xr(Rr)}}function ol(e,t){try{var n=t.updateQueue,i=null!==n?n.lastEffect:null;if(null!==i){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var a=n.create,o=n.inst;i=a(),o.destroy=i}n=n.next}while(n!==r)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var i=t.updateQueue,r=null!==i?i.lastEffect:null;if(null!==r){var a=r.next;i=a;do{if((i.tag&e)===e){var o=i.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,r=t;var l=n,c=s;try{c()}catch(u){uu(r,l,u)}}}i=i.next}while(i!==a)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ma(t,n)}catch(i){uu(e,e.return,i)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){uu(e,t,i)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;default:i=e.stateNode}"function"===typeof n?e.refCleanup=n(i):n.current=i}}catch(r){uu(e,t,r)}}function dl(e,t){var n=e.ref,i=e.refCleanup;if(null!==n)if("function"===typeof i)try{i()}catch(r){uu(e,t,r)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){uu(e,t,a)}else n.current=null}function ml(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){uu(e,e.return,r)}}function pl(e,t,n){try{var i=e.stateNode;!function(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,s=null,l=null,c=null,u=null,d=null;for(h in n){var m=n[h];if(n.hasOwnProperty(h)&&null!=m)switch(h){case"checked":case"value":break;case"defaultValue":c=m;default:i.hasOwnProperty(h)||Ju(e,t,h,null,i,m)}}for(var p in i){var h=i[p];if(m=n[p],i.hasOwnProperty(p)&&(null!=h||null!=m))switch(p){case"type":a=h;break;case"name":r=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==m&&Ju(e,t,p,h,i,m)}}return void gt(e,s,l,c,u,d,a,r);case"select":for(a in h=s=l=p=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":h=c;default:i.hasOwnProperty(a)||Ju(e,t,a,null,i,c)}for(r in i)if(a=i[r],c=n[r],i.hasOwnProperty(r)&&(null!=a||null!=c))switch(r){case"value":p=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Ju(e,t,r,a,i,c)}return t=l,n=s,i=h,void(null!=p?vt(e,!!n,p,!1):!!i!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(l in h=p=null,n)if(r=n[l],n.hasOwnProperty(l)&&null!=r&&!i.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,i,r)}for(s in i)if(r=i[s],a=n[s],i.hasOwnProperty(s)&&(null!=r||null!=a))switch(s){case"value":p=r;break;case"defaultValue":h=r;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=r)throw Error(o(91));break;default:r!==a&&Ju(e,t,s,r,i,a)}return void xt(e,p,h);case"option":for(var f in n)if(p=n[f],n.hasOwnProperty(f)&&null!=p&&!i.hasOwnProperty(f))if("selected"===f)e.selected=!1;else Ju(e,t,f,null,i,p);for(c in i)if(p=i[c],h=n[c],i.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Ju(e,t,c,p,i,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!i.hasOwnProperty(g)&&Ju(e,t,g,null,i,p);for(u in i)if(p=i[u],h=n[u],i.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Ju(e,t,u,p,i,h)}return;default:if(jt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!i.hasOwnProperty(y)&&Zu(e,t,y,void 0,i,p);for(d in i)p=i[d],h=n[d],!i.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Zu(e,t,d,p,i,h);return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!i.hasOwnProperty(b)&&Ju(e,t,b,null,i,p);for(m in i)p=i[m],h=n[m],!i.hasOwnProperty(m)||p===h||null==p&&null==h||Ju(e,t,m,p,i,h)}(i,e.type,n,t),i[De]=t}catch(r){uu(e,e.return,r)}}function hl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function fl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Qu));else if(4!==i&&(27===i&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function yl(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==i&&(27===i&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(yl(e,t,n),e=e.sibling;null!==e;)yl(e,t,n),e=e.sibling}function bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ed(t,i,n),t[Re]=e,t[De]=n}catch(a){uu(e,e.return,a)}}var vl=!1,xl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function $l(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:_l(e,n),4&i&&ol(5,n);break;case 1:if(_l(e,n),4&i)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var r=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&i&&ll(n),512&i&&ul(n,n.return);break;case 3:if(_l(e,n),64&i&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ma(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&i&&bl(n);case 26:case 5:_l(e,n),null===t&&4&i&&ml(n),512&i&&ul(n,n.return);break;case 12:_l(e,n);break;case 13:_l(e,n),4&i&&zl(e,n),64&i&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}(e,n=hu.bind(null,n))));break;case 22:if(!(i=null!==n.memoizedState||vl)){t=null!==t&&null!==t.memoizedState||xl,r=vl;var a=xl;vl=i,(xl=t)&&!a?Fl(e,n,0!==(8772&n.subtreeFlags)):_l(e,n),vl=r,xl=a}break;case 30:break;default:_l(e,n)}}function El(e){var t=e.alternate;null!==t&&(e.alternate=null,El(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ie(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jl=null,Cl=!1;function Pl(e,t,n){for(n=n.child;null!==n;)Tl(e,t,n),n=n.sibling}function Tl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(a){}switch(n.tag){case 26:xl||dl(n,t),Pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var i=jl,r=Cl;pd(n.type)&&(jl=n.stateNode,Cl=!1),Pl(e,t,n),wd(n.stateNode),jl=i,Cl=r;break;case 5:xl||dl(n,t);case 6:if(i=jl,r=Cl,jl=null,Pl(e,t,n),Cl=r,null!==(jl=i))if(Cl)try{(9===jl.nodeType?jl.body:"HTML"===jl.nodeName?jl.ownerDocument.body:jl).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{jl.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==jl&&(Cl?(hd(9===(e=jl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Cm(e)):hd(jl,n.stateNode));break;case 4:i=jl,r=Cl,jl=n.stateNode.containerInfo,Cl=!0,Pl(e,t,n),jl=i,Cl=r;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),Pl(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(i=n.stateNode).componentWillUnmount&&cl(n,t,i)),Pl(e,t,n);break;case 21:Pl(e,t,n);break;case 22:xl=(i=xl)||null!==n.memoizedState,Pl(e,t,n),xl=i;break;default:Pl(e,t,n)}}function zl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Cm(e)}catch(n){uu(t,t.return,n)}}function Al(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var i=fu.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))}))}function Rl(e,t){var n=t.deletions;if(null!==n)for(var i=0;i<n.length;i++){var r=n[i],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(pd(l.type)){jl=l.stateNode,Cl=!1;break e}break;case 5:jl=l.stateNode,Cl=!1;break e;case 3:case 4:jl=l.stateNode.containerInfo,Cl=!0;break e}l=l.return}if(null===jl)throw Error(o(160));Tl(a,s,r),jl=null,Cl=!1,null!==(a=r.alternate)&&(a.return=null),r.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ml(t,e),t=t.sibling}var Dl=null;function Ml(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rl(t,e),Ll(e),4&i&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:Rl(t,e),Ll(e),512&i&&(xl||null===n||dl(n,n.return)),64&i&&vl&&(null!==(e=e.updateQueue)&&(null!==(i=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?i:n.concat(i))));break;case 26:var r=Dl;if(Rl(t,e),Ll(e),512&i&&(xl||null===n||dl(n,n.return)),4&i){var a=null!==n?n.memoizedState:null;if(i=e.memoizedState,null===n)if(null===i)if(null===e.stateNode){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":(!(a=r.getElementsByTagName("title")[0])||a[Fe]||a[Re]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=r.createElement(i),r.head.insertBefore(a,r.querySelector("head > title"))),ed(a,i,n),a[Re]=e,qe(a),i=a;break e;case"link":var s=Fd("link","href",r).get(i+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(a=r.createElement(i),i,n),r.head.appendChild(a);break;case"meta":if(s=Fd("meta","content",r).get(i+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(a=r.createElement(i),i,n),r.head.appendChild(a);break;default:throw Error(o(468,i))}a[Re]=e,qe(a),i=a}e.stateNode=i}else Id(r,e.type,e.stateNode);else e.stateNode=Md(r,i,e.memoizedProps);else a!==i?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===i?Id(r,e.type,e.stateNode):Md(r,i,e.memoizedProps)):null===i&&null!==e.stateNode&&pl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rl(t,e),Ll(e),512&i&&(xl||null===n||dl(n,n.return)),null!==n&&4&i&&pl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rl(t,e),Ll(e),512&i&&(xl||null===n||dl(n,n.return)),32&e.flags){r=e.stateNode;try{St(r,"")}catch(h){uu(e,e.return,h)}}4&i&&null!=e.stateNode&&pl(e,r=e.memoizedProps,null!==n?n.memoizedProps:r),1024&i&&(wl=!0);break;case 6:if(Rl(t,e),Ll(e),4&i){if(null===e.stateNode)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(h){uu(e,e.return,h)}}break;case 3:if(Nd=null,r=Dl,Dl=$d(t.containerInfo),Rl(t,e),Dl=r,Ll(e),4&i&&null!==n&&n.memoizedState.isDehydrated)try{Cm(t.containerInfo)}catch(h){uu(e,e.return,h)}wl&&(wl=!1,Ol(e));break;case 4:i=Dl,Dl=$d(e.stateNode.containerInfo),Rl(t,e),Ll(e),Dl=i;break;case 12:default:Rl(t,e),Ll(e);break;case 13:Rl(t,e),Ll(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&i&&(null!==(i=e.updateQueue)&&(e.updateQueue=null,Al(e,i)));break;case 22:r=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=vl,d=xl;if(vl=u||r,xl=d||c,Rl(t,e),xl=d,vl=u,Ll(e),8192&i)e:for(t=e.stateNode,t._visibility=r?-2&t._visibility:1|t._visibility,r&&(null===n||c||vl||xl||Nl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,r)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var m=c.memoizedProps.style,p=void 0!==m&&null!==m&&m.hasOwnProperty("display")?m.display:null;l.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&i&&(null!==(i=e.updateQueue)&&(null!==(n=i.retryQueue)&&(i.retryQueue=null,Al(e,n))));break;case 19:Rl(t,e),Ll(e),4&i&&(null!==(i=e.updateQueue)&&(e.updateQueue=null,Al(e,i)));case 30:case 21:}}function Ll(e){var t=e.flags;if(2&t){try{for(var n,i=e.return;null!==i;){if(hl(i)){n=i;break}i=i.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode;yl(e,fl(e),r);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),yl(e,fl(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,fl(e),s);break;default:throw Error(o(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ol(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)$l(e,t.alternate,t),t=t.sibling}function Nl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Nl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Nl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Nl(t);break;case 22:null===t.memoizedState&&Nl(t);break;default:Nl(t)}e=e.sibling}}function Fl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var i=t.alternate,r=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(r,a,n),ol(4,a);break;case 1:if(Fl(r,a,n),"function"===typeof(r=(i=a).stateNode).componentDidMount)try{r.componentDidMount()}catch(c){uu(i,i.return,c)}if(null!==(r=(i=a).updateQueue)){var s=i.stateNode;try{var l=r.shared.hiddenCallbacks;if(null!==l)for(r.shared.hiddenCallbacks=null,r=0;r<l.length;r++)da(l[r],s)}catch(c){uu(i,i.return,c)}}n&&64&o&&ll(a),ul(a,a.return);break;case 27:bl(a);case 26:case 5:Fl(r,a,n),n&&null===i&&4&o&&ml(a),ul(a,a.return);break;case 12:Fl(r,a,n);break;case 13:Fl(r,a,n),n&&4&o&&zl(r,a);break;case 22:null===a.memoizedState&&Fl(r,a,n),ul(a,a.return);break;case 30:break;default:Fl(r,a,n)}t=t.sibling}}function Il(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Mr(n))}function Vl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Mr(e))}function Ul(e,t,n,i){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Bl(e,t,n,i),t=t.sibling}function Bl(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ul(e,t,n,i),2048&r&&ol(9,t);break;case 1:case 13:default:Ul(e,t,n,i);break;case 3:Ul(e,t,n,i),2048&r&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Mr(e)));break;case 12:if(2048&r){Ul(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Ul(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?Ul(e,t,n,i):ql(e,t):2&a._visibility?Ul(e,t,n,i):(a._visibility|=2,Hl(e,t,n,i,0!==(10256&t.subtreeFlags))),2048&r&&Il(o,t);break;case 24:Ul(e,t,n,i),2048&r&&Vl(t.alternate,t)}}function Hl(e,t,n,i,r){for(r=r&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=i,c=o.flags;switch(o.tag){case 0:case 11:case 15:Hl(a,o,s,l,r),ol(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Hl(a,o,s,l,r):ql(a,o):(u._visibility|=2,Hl(a,o,s,l,r)),r&&2048&c&&Il(o.alternate,o);break;case 24:Hl(a,o,s,l,r),r&&2048&c&&Vl(o.alternate,o);break;default:Hl(a,o,s,l,r)}t=t.sibling}}function ql(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:ql(n,i),2048&r&&Il(i.alternate,i);break;case 24:ql(n,i),2048&r&&Vl(i.alternate,i);break;default:ql(n,i)}t=t.sibling}}var Wl=8192;function Yl(e){if(e.subtreeFlags&Wl)for(e=e.child;null!==e;)Kl(e),e=e.sibling}function Kl(e){switch(e.tag){case 26:Yl(e),e.flags&Wl&&null!==e.memoizedState&&function(e,t,n){if(null===Ud)throw Error(o(475));var i=Ud;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var r=Td(n.href),a=e.querySelector(zd(r));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(i.count++,i=Hd.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=a,void qe(a);a=e.ownerDocument||e,n=Ad(n),(r=Sd.get(r))&&Od(n,r),qe(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",n),t.instance=a}null===i.stylesheets&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(i.count++,t=Hd.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}(Dl,e.memoizedState,e.memoizedProps);break;case 5:default:Yl(e);break;case 3:case 4:var t=Dl;Dl=$d(e.stateNode.containerInfo),Yl(e),Dl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Wl,Wl=16777216,Yl(e),Wl=t):Yl(e))}}function Gl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Xl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var i=t[n];kl=i,Zl(i,e)}Gl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ql(e),e=e.sibling}function Ql(e){switch(e.tag){case 0:case 11:case 15:Xl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Xl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Xl(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var i=t[n];kl=i,Zl(i,e)}Gl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var i=n.memoizedState.cachePool.pool;null!=i&&i.refCount++}break;case 24:Mr(n.memoizedState.cache)}if(null!==(i=n.child))i.return=n,kl=i;else e:for(n=e;null!==kl;){var r=(i=kl).sibling,a=i.return;if(El(i),i===n){kl=null;break e}if(null!==r){r.return=a,kl=r;break e}kl=a}}}var ec={getCacheForType:function(e){var t=jr(Rr),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,ic=null,rc=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,mc=0,pc=0,hc=0,fc=0,gc=0,yc=0,bc=null,vc=null,xc=!1,wc=0,Sc=1/0,kc=null,$c=null,Ec=0,jc=null,Cc=null,Pc=0,Tc=0,zc=null,Ac=null,Rc=0,Dc=null;function Mc(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==M.T){return 0!==_r?_r:Tu()}return ze()}function Lc(){0===gc&&(gc=0===(536870912&ac)||ar?Se():536870912);var e=rs.current;return null!==e&&(e.flags|=32),gc}function Oc(e,t,n){(e!==ic||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Bc(e,0),Ic(e,ac,gc,!1)),Ee(e,n),0!==(2&nc)&&e===ic||(e===ic&&(0===(2&nc)&&(hc|=n),4===mc&&Ic(e,ac,gc,!1)),Su(e))}function _c(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var i=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),r=i?function(e,t){var n=nc;nc|=2;var i=qc(),r=Wc();ic!==e||ac!==t?(kc=null,Sc=te()+500,Bc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==oc&&null!==rc){t=rc;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Zc(e,t,a,1);break;case 2:case 9:if(Gr(a)){oc=0,sc=null,Jc(t);break}t=function(){2!==oc&&9!==oc||ic!==e||(oc=7),Su(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Gr(a)?(oc=0,sc=null,Jc(t)):(oc=0,sc=null,Zc(e,t,a,7));break;case 5:var s=null;switch(rc.tag){case 26:s=rc.memoizedState;case 5:case 27:var l=rc;if(!s||Vd(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)rc=c;else{var u=l.return;null!==u?(rc=u,eu(u)):rc=null}break t}}oc=0,sc=null,Zc(e,t,a,5);break;case 6:oc=0,sc=null,Zc(e,t,a,6);break;case 8:Uc(),mc=6;break e;default:throw Error(o(462))}}Xc();break}catch(d){Hc(e,d)}return br=yr=null,M.H=i,M.A=r,nc=n,null!==rc?0:(ic=null,ac=0,Pi(),mc)}(e,t):Kc(e,t,!0),a=i;;){if(0===r){cc&&!i&&Ic(e,t,0,!1);break}if(n=e.current.alternate,!a||Fc(n)){if(2===r){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;r=bc;var c=l.current.memoizedState.isDehydrated;if(c&&(Bc(l,s).flags|=256),2!==(s=Kc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=a,hc|=a,r=4;break e}a=vc,vc=r,null!==a&&(null===vc?vc=a:vc.push.apply(vc,a))}r=s}if(a=!1,2!==r)continue}}if(1===r){Bc(e,0),Ic(e,t,0,!0);break}e:{switch(i=e,a=r){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Ic(i,t,gc,!lc);break e;case 2:vc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(r=wc+300-te())){if(Ic(i,t,gc,!lc),0!==ve(i,0,!0))break e;i.timeoutHandle=ld(Nc.bind(null,i,n,vc,kc,xc,t,gc,hc,yc,lc,a,2,-0,0),r)}else Nc(i,n,vc,kc,xc,t,gc,hc,yc,lc,a,0,-0,0)}break}r=Kc(e,t,!1),a=!1}Su(e)}function Nc(e,t,n,i,r,a,s,l,c,u,d,m,p,h){if(e.timeoutHandle=-1,(8192&(m=t.subtreeFlags)||16785408===(16785408&m))&&(Ud={stylesheets:null,count:0,unsuspend:Bd},Kl(t),null!==(m=function(){if(null===Ud)throw Error(o(475));var e=Ud;return e.stylesheets&&0===e.count&&Wd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Wd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=m(nu.bind(null,e,t,a,n,i,r,s,l,c,d,1,p,h)),void Ic(e,a,s,!u);nu(e,t,a,n,i,r,s,l,c)}function Fc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Gn(a(),r))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ic(e,t,n,i){t&=~fc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var a=31-pe(r),o=1<<a;i[a]=-1,r&=~o}0!==n&&je(e,n,t)}function Vc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Uc(){if(null!==rc){if(0===oc)var e=rc.return;else br=yr=null,_a(e=rc),Go=null,Xo=0,e=rc;for(;null!==e;)al(e.alternate,e),e=e.return;rc=null}}function Bc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc(),ic=e,rc=n=Ni(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,yc=gc=fc=hc=pc=mc=0,vc=bc=null,xc=!1,0!==(8&t)&&(t|=32&t);var i=e.entangledLanes;if(0!==i)for(e=e.entanglements,i&=t;0<i;){var r=31-pe(i),a=1<<r;t|=e[r],i&=~a}return dc=t,Pi(),n}function Hc(e,t){va=null,M.H=qo,t===qr||t===Yr?(t=Zr(),oc=3):t===Wr?(t=Zr(),oc=4):oc=t===js?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===rc&&(mc=1,ws(e,$i(t,e.current)))}function qc(){var e=M.H;return M.H=qo,null===e?qo:e}function Wc(){var e=M.A;return M.A=ec,e}function Yc(){mc=4,lc||(4194048&ac)!==ac&&null!==rs.current||(cc=!0),0===(134217727&pc)&&0===(134217727&hc)||null===ic||Ic(ic,ac,gc,!1)}function Kc(e,t,n){var i=nc;nc|=2;var r=qc(),a=Wc();ic===e&&ac===t||(kc=null,Bc(e,t)),t=!1;var o=mc;e:for(;;)try{if(0!==oc&&null!==rc){var s=rc,l=sc;switch(oc){case 8:Uc(),o=6;break e;case 3:case 2:case 9:case 6:null===rs.current&&(t=!0);var c=oc;if(oc=0,sc=null,Zc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Zc(e,s,l,c)}}Gc(),o=mc;break}catch(u){Hc(e,u)}return t&&e.shellSuspendCounter++,br=yr=null,nc=i,M.H=r,M.A=a,null===rc&&(ic=null,ac=0,Pi()),o}function Gc(){for(;null!==rc;)Qc(rc)}function Xc(){for(;null!==rc&&!Z();)Qc(rc)}function Qc(e){var t=Qs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):rc=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Os(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Os(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:_a(t);default:al(n,t),t=Qs(n,t=rc=Fi(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):rc=t}function Zc(e,t,n,i){br=yr=null,_a(t),Go=null,Xo=0;var r=t.return;try{if(function(e,t,n,i,r){if(n.flags|=32768,null!==i&&"object"===typeof i&&"function"===typeof i.then){if(null!==(t=n.alternate)&&kr(t,n,r,!0),null!==(n=rs.current)){switch(n.tag){case 13:return null===as?Yc():null===n.alternate&&0===mc&&(mc=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Kr?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([i]):t.add(i),du(e,i,r)),!1;case 22:return n.flags|=65536,i===Kr?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([i]):n.add(i),du(e,i,r)),!1}throw Error(o(435,n.tag))}return du(e,i,r),Yc(),!1}if(ar)return null!==(t=rs.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==lr&&fr($i(e=Error(o(422),{cause:i}),n))):(i!==lr&&fr($i(t=Error(o(423),{cause:i}),n)),(e=e.current.alternate).flags|=65536,r&=-r,e.lanes|=r,i=$i(i,n),sa(e,r=ks(e.stateNode,i,r)),4!==mc&&(mc=2)),!1;var a=Error(o(520),{cause:i});if(a=$i(a,n),null===bc?bc=[a]:bc.push(a),4!==mc&&(mc=2),null===t)return!0;i=$i(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,sa(n,e=ks(n.stateNode,i,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===$c||!$c.has(a))))return n.flags|=65536,r&=-r,n.lanes|=r,Es(r=$s(r),e,n,i),sa(n,r),!1}n=n.return}while(null!==n);return!1}(e,r,t,n,ac))return mc=1,ws(e,$i(n,e.current)),void(rc=null)}catch(a){if(null!==r)throw rc=r,a;return mc=1,ws(e,$i(n,e.current)),void(rc=null)}32768&t.flags?(ar||1===i?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===i||9===i||3===i||6===i)&&(null!==(i=rs.current)&&13===i.tag&&(i.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=il(t.alternate,t,dc);if(null!==n)return void(rc=n);if(null!==(t=t.sibling))return void(rc=t);rc=t=e}while(null!==t);0===mc&&(mc=5)}function tu(e,t){do{var n=rl(e.alternate,e);if(null!==n)return n.flags&=32767,void(rc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(rc=e);rc=e=n}while(null!==e);mc=6,rc=null}function nu(e,t,n,i,r,a,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Ec);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,i,r,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-pe(n),d=1<<u;s[u]=0,l[u]=-1;var m=c[u];if(null!==m)for(c[u]=null,u=0;u<m.length;u++){var p=m[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==i&&je(e,i,0),0!==a&&0===r&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Ci,s,l,c),e===ic&&(rc=ic=null,ac=0),Cc=t,jc=e,Pc=n,Tc=a,zc=r,Ac=i,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,Q(ae,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),i=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||i){i=M.T,M.T=null,r=L.p,L.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nm,ti(e=ei(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(i&&0!==i.rangeCount){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,m=e,p=null;t:for(;;){for(var h;m!==n||0!==r&&3!==m.nodeType||(l=s+r),m!==a||0!==i&&3!==m.nodeType||(c=s+i),3===m.nodeType&&(s+=m.nodeValue.length),null!==(h=m.firstChild);)p=m,m=h;for(;;){if(m===e)break t;if(p===n&&++u===r&&(l=s),p===a&&++d===i&&(c=s),null!==(h=m.nextSibling))break;p=(m=p).parentNode}m=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nm=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(a=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,r=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var f=gs(n.type,r,(n.elementType,n.type));e=i.getSnapshotBeforeUpdate(f,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){uu(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))fd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,L.p=r,M.T=i}}Ec=1,iu(),ru(),au()}}function iu(){if(1===Ec){Ec=0;var e=jc,t=Cc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=M.T,M.T=null;var i=L.p;L.p=2;var r=nc;nc|=4;try{Ml(t,e);var a=nd,o=ei(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&ti(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,m=d&&d.defaultView||window;if(m.getSelection){var p=m.getSelection(),h=s.textContent.length,f=Math.min(l.start,h),g=void 0===l.end?f:Math.min(l.end,h);!p.extend&&f>g&&(o=g,g=f,f=o);var y=Jn(s,f),b=Jn(s,g);if(y&&b&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var v=d.createRange();v.setStart(y.node,y.offset),p.removeAllRanges(),f>g?(p.addRange(v),p.extend(b.node,b.offset)):(v.setEnd(b.node,b.offset),p.addRange(v))}}}}for(d=[],p=s;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nm=!!td,nd=td=null}finally{nc=r,L.p=i,M.T=n}}e.current=t,Ec=2}}function ru(){if(2===Ec){Ec=0;var e=jc,t=Cc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=M.T,M.T=null;var i=L.p;L.p=2;var r=nc;nc|=4;try{$l(e,t.alternate,t)}finally{nc=r,L.p=i,M.T=n}}Ec=3}}function au(){if(4===Ec||3===Ec){Ec=0,ee();var e=jc,t=Cc,n=Pc,i=Ac;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ec=5:(Ec=0,Cc=jc=null,ou(e,e.pendingLanes));var r=e.pendingLanes;if(0===r&&($c=null),Te(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==i){t=M.T,r=L.p,L.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<i.length;o++){var s=i[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,L.p=r}}0!==(3&Pc)&&su(),Su(e),r=e.pendingLanes,0!==(4194090&n)&&0!==(42&r)?e===Dc?Rc++:(Rc=0,Dc=e):Rc=0,ku(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Mr(t)))}function su(e){return iu(),ru(),au(),lu()}function lu(){if(5!==Ec)return!1;var e=jc,t=Tc;Tc=0;var n=Te(Pc),i=M.T,r=L.p;try{L.p=32>n?32:n,M.T=null,n=zc,zc=null;var a=jc,s=Pc;if(Ec=0,Cc=jc=null,Pc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,Ql(a.current),Bl(a,a.current,s,n),nc=l,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,a)}catch(c){}return!0}finally{L.p=r,M.T=i,ou(e,t)}}function cu(e,t,n){t=$i(n,t),null!==(e=aa(e,t=ks(e.stateNode,t,2),2))&&(Ee(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var i=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof i.componentDidCatch&&(null===$c||!$c.has(i))){e=$i(n,e),null!==(i=aa(t,n=$s(2),2))&&(Es(n,i,t,e),Ee(i,2),Su(i));break}}t=t.return}}function du(e,t,n){var i=e.pingCache;if(null===i){i=e.pingCache=new tc;var r=new Set;i.set(t,r)}else void 0===(r=i.get(t))&&(r=new Set,i.set(t,r));r.has(n)||(uc=!0,r.add(n),e=mu.bind(null,e,t,n),t.then(e,e))}function mu(e,t,n){var i=e.pingCache;null!==i&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ic===e&&(ac&n)===n&&(4===mc||3===mc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&Bc(e,0):fc|=n,yc===ac&&(yc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=Ai(e,t))&&(Ee(e,t),Su(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pu(e,n)}function fu(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==i&&i.delete(t),pu(e,n)}var gu=null,yu=null,bu=!1,vu=!1,xu=!1,wu=0;function Su(e){e!==yu&&null===e.next&&(null===yu?gu=yu=e:yu=yu.next=e),vu=!0,bu||(bu=!0,dd((function(){0!==(6&nc)?Q(ie,$u):Eu()})))}function ku(e,t){if(!xu&&vu){xu=!0;do{for(var n=!1,i=gu;null!==i;){if(!t)if(0!==e){var r=i.pendingLanes;if(0===r)var a=0;else{var o=i.suspendedLanes,s=i.pingedLanes;a=(1<<31-pe(42|e)+1)-1,a=201326741&(a&=r&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Pu(i,a))}else a=ac,0===(3&(a=ve(i,i===ic?a:0,null!==i.cancelPendingCommit||-1!==i.timeoutHandle)))||xe(i,a)||(n=!0,Pu(i,a));i=i.next}}while(n);xu=!1}}function $u(){Eu()}function Eu(){vu=bu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,i=gu;null!==i;){var r=i.next,a=ju(i,t);0===a?(i.next=null,null===n?gu=r:n.next=r,null===r&&(yu=n)):(n=i,(0!==e||0!==(3&a))&&(vu=!0)),i=r}ku(e,!1)}function ju(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-pe(a),s=1<<o,l=r[o];-1===l?0!==(s&n)&&0===(s&i)||(r[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=ve(e,e===(t=ic)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),i=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==i&&null!==i&&J(i),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==i&&J(i),Te(n)){case 2:case 8:n=re;break;case 32:default:n=ae;break;case 268435456:n=se}return i=Cu.bind(null,e),n=Q(n,i),e.callbackPriority=t,e.callbackNode=n,t}return null!==i&&null!==i&&J(i),e.callbackPriority=2,e.callbackNode=null,2}function Cu(e,t){if(0!==Ec&&5!==Ec)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var i=ac;return 0===(i=ve(e,e===ic?i:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(_c(e,i,t),ju(e,te()),null!=e.callbackNode&&e.callbackNode===n?Cu.bind(null,e):null)}function Pu(e,t){if(su())return null;_c(e,t,!0)}function Tu(){return 0===wu&&(wu=Se()),wu}function zu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Tt(""+e)}function Au(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ru=0;Ru<wi.length;Ru++){var Du=wi[Ru];Si(Du.toLowerCase(),"on"+(Du[0].toUpperCase()+Du.slice(1)))}Si(pi,"onAnimationEnd"),Si(hi,"onAnimationIteration"),Si(fi,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(gi,"onTransitionRun"),Si(yi,"onTransitionStart"),Si(bi,"onTransitionCancel"),Si(vi,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mu));function Ou(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;a=s,r.currentTarget=c;try{a(r)}catch(u){ys(u)}r.currentTarget=null,a=l}else for(o=0;o<i.length;o++){if(l=(s=i[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;a=s,r.currentTarget=c;try{a(r)}catch(u){ys(u)}r.currentTarget=null,a=l}}}}function _u(e,t){var n=t[Le];void 0===n&&(n=t[Le]=new Set);var i=e+"__bubble";n.has(i)||(Vu(t,e,2,!1),n.add(i))}function Nu(e,t,n){var i=0;t&&(i|=4),Vu(n,e,i,t)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function Iu(e){if(!e[Fu]){e[Fu]=!0,We.forEach((function(t){"selectionchange"!==t&&(Lu.has(t)||Nu(t,!1,e),Nu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fu]||(t[Fu]=!0,Nu("selectionchange",!1,t))}}function Vu(e,t,n,i){switch(cm(t)){case 2:var r=im;break;case 8:r=rm;break;default:r=am}n=r.bind(null,t,n,e),r=void 0,!Ft||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),i?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Uu(e,t,n,i,r){var a=i;if(0===(1&t)&&0===(2&t)&&null!==i)e:for(;;){if(null===i)return;var o=i.tag;if(3===o||4===o){var s=i.stateNode.containerInfo;if(s===r)break;if(4===o)for(o=i.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===r)return;o=o.return}for(;null!==s;){if(null===(o=Ve(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){i=a=o;continue e}s=s.parentNode}}i=i.return}Ot((function(){var i=a,r=At(n),o=[];e:{var s=xi.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=fn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=yn;break;case pi:case hi:case fi:c=sn;break;case vi:c=bn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=vn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),m=!d&&("scroll"===e||"scrollend"===e),p=d?null!==s?s+"Capture":null:s;d=[];for(var h,f=i;null!==f;){var g=f;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=_t(f,p))&&d.push(Bu(f,g,h)),m)break;f=f.return}0<d.length&&(s=new c(s,u,null,n,r),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===zt||!(u=n.relatedTarget||n.fromElement)||!Ve(u)&&!u[Me])&&(c||s)&&(s=r.window===r?r:(s=r.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=i,null!==(u=(u=n.relatedTarget||n.toElement)?Ve(u):null)&&(m=l(u),d=u.tag,u!==m||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=i),c!==u)){if(d=rn,g="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",p="onPointerEnter",f="pointer"),m=null==c?s:Be(c),h=null==u?s:Be(u),(s=new d(g,f+"leave",c,n,r)).target=m,s.relatedTarget=h,g=null,Ve(r)===i&&((d=new d(p,f+"enter",u,n,r)).target=h,d.relatedTarget=m,g=d),m=g,c&&u)e:{for(p=u,f=0,h=d=c;h;h=qu(h))f++;for(h=0,g=p;g;g=qu(g))h++;for(;0<f-h;)d=qu(d),f--;for(;0<h-f;)p=qu(p),h--;for(;f--;){if(d===p||null!==p&&d===p.alternate)break e;d=qu(d),p=qu(p)}d=null}else d=null;null!==c&&Wu(o,s,c,d,!1),null!==u&&null!==m&&Wu(o,m,u,d,!0)}if("select"===(c=(s=i?Be(i):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var y=Nn;else if(Rn(s))if(Fn)y=Kn;else{y=Wn;var b=qn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?i&&jt(i.elementType)&&(y=Nn):y=Yn;switch(y&&(y=y(e,i))?Dn(o,y,n,r):(b&&b(e,s,i),"focusout"===e&&i&&"number"===s.type&&null!=i.memoizedProps.value&&bt(s,"number",s.value)),b=i?Be(i):window,e){case"focusin":(Rn(b)||"true"===b.contentEditable)&&(ii=b,ri=i,ai=null);break;case"focusout":ai=ri=ii=null;break;case"mousedown":oi=!0;break;case"contextmenu":case"mouseup":case"dragend":oi=!1,si(o,n,r);break;case"selectionchange":if(ni)break;case"keydown":case"keyup":si(o,n,r)}var v;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else zn?Pn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(En&&"ko"!==n.locale&&(zn||"onCompositionStart"!==x?"onCompositionEnd"===x&&zn&&(v=Ht()):(Ut="value"in(Vt=r)?Vt.value:Vt.textContent,zn=!0)),0<(b=Hu(i,x)).length&&(x=new cn(x,e,null,n,r),o.push({event:x,listeners:b}),v?x.data=v:null!==(v=Tn(n))&&(x.data=v))),(v=$n?function(e,t){switch(e){case"compositionend":return Tn(t);case"keypress":return 32!==t.which?null:(Cn=!0,jn);case"textInput":return(e=t.data)===jn&&Cn?null:e;default:return null}}(e,n):function(e,t){if(zn)return"compositionend"===e||!Sn&&Pn(e,t)?(e=Ht(),Bt=Ut=Vt=null,zn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Hu(i,"onBeforeInput")).length&&(b=new cn("onBeforeInput","beforeinput",null,n,r),o.push({event:b,listeners:x}),b.data=v)),function(e,t,n,i,r){if("submit"===t&&n&&n.stateNode===r){var a=zu((r[De]||null).action),o=i.submitter;o&&null!==(t=(t=o[De]||null)?zu(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Zt("action","action",null,i,r);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(0!==wu){var e=o?Au(r,o):new FormData(r);Ao(n,{pending:!0,data:e,method:r.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Au(r,o):new FormData(r),Ao(n,{pending:!0,data:e,method:r.method,action:a},a,e))},currentTarget:r}]})}}(o,e,i,n,r)}Ou(o,t)}))}function Bu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hu(e,t){for(var n=t+"Capture",i=[];null!==e;){var r=e,a=r.stateNode;if(5!==(r=r.tag)&&26!==r&&27!==r||null===a||(null!=(r=_t(e,n))&&i.unshift(Bu(e,r,a)),null!=(r=_t(e,t))&&i.push(Bu(e,r,a))),3===e.tag)return i;e=e.return}return[]}function qu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Wu(e,t,n,i,r){for(var a=t._reactName,o=[];null!==n&&n!==i;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===i)break;5!==s&&26!==s&&27!==s||null===c||(l=c,r?null!=(c=_t(n,a))&&o.unshift(Bu(n,c,l)):r||null!=(c=_t(n,a))&&o.push(Bu(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Gu(e){return("string"===typeof e?e:""+e).replace(Yu,"\n").replace(Ku,"")}function Xu(e,t){return t=Gu(t),Gu(e)===t}function Qu(){}function Ju(e,t,n,i,r,a){switch(n){case"children":"string"===typeof i?"body"===t||"textarea"===t&&""===i||St(e,i):("number"===typeof i||"bigint"===typeof i)&&"body"!==t&&St(e,""+i);break;case"className":nt(e,"class",i);break;case"tabIndex":nt(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,i);break;case"style":Et(e,i,a);break;case"data":if("object"!==t){nt(e,"data",i);break}case"src":case"href":if(""===i&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==i||"function"===typeof i||"symbol"===typeof i||"boolean"===typeof i){e.removeAttribute(n);break}i=Tt(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if("function"===typeof i){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Ju(e,t,"name",r.name,r,null),Ju(e,t,"formEncType",r.formEncType,r,null),Ju(e,t,"formMethod",r.formMethod,r,null),Ju(e,t,"formTarget",r.formTarget,r,null)):(Ju(e,t,"encType",r.encType,r,null),Ju(e,t,"method",r.method,r,null),Ju(e,t,"target",r.target,r,null))),null==i||"symbol"===typeof i||"boolean"===typeof i){e.removeAttribute(n);break}i=Tt(""+i),e.setAttribute(n,i);break;case"onClick":null!=i&&(e.onclick=Qu);break;case"onScroll":null!=i&&_u("scroll",e);break;case"onScrollEnd":null!=i&&_u("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=i){if("object"!==typeof i||!("__html"in i))throw Error(o(61));if(null!=(n=i.__html)){if(null!=r.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&"function"!==typeof i&&"symbol"!==typeof i;break;case"muted":e.muted=i&&"function"!==typeof i&&"symbol"!==typeof i;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==i||"function"===typeof i||"boolean"===typeof i||"symbol"===typeof i){e.removeAttribute("xlink:href");break}n=Tt(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=i&&"function"!==typeof i&&"symbol"!==typeof i?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&"function"!==typeof i&&"symbol"!==typeof i?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===i?e.setAttribute(n,""):!1!==i&&null!=i&&"function"!==typeof i&&"symbol"!==typeof i?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":null==i||"function"===typeof i||"symbol"===typeof i||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":_u("beforetoggle",e),_u("toggle",e),tt(e,"popover",i);break;case"xlinkActuate":it(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":it(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":it(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":it(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":it(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":it(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":it(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":it(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":it(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":tt(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Ct.get(n)||n,i)}}function Zu(e,t,n,i,r,a){switch(n){case"style":Et(e,i,a);break;case"dangerouslySetInnerHTML":if(null!=i){if("object"!==typeof i||!("__html"in i))throw Error(o(61));if(null!=(n=i.__html)){if(null!=r.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof i?St(e,i):("number"===typeof i||"bigint"===typeof i)&&St(e,""+i);break;case"onScroll":null!=i&&_u("scroll",e);break;case"onScrollEnd":null!=i&&_u("scrollend",e);break;case"onClick":null!=i&&(e.onclick=Qu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ye.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),"function"===typeof(a=null!=(a=e[De]||null)?a[n]:null)&&e.removeEventListener(t,a,r),"function"!==typeof i)?n in e?e[n]=i:!0===i?e.setAttribute(n,""):tt(e,n,i):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_u("error",e),_u("load",e);var i,r=!1,a=!1;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(null!=s)switch(i){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,i,s,n,null)}}return a&&Ju(e,t,"srcSet",n.srcSet,n,null),void(r&&Ju(e,t,"src",n.src,n,null));case"input":_u("invalid",e);var l=i=s=a=null,c=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(null!=d)switch(r){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":i=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Ju(e,t,r,d,n,null)}}return yt(e,i,l,c,u,s,a,!1),void dt(e);case"select":for(a in _u("invalid",e),r=s=i=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":i=l;break;case"defaultValue":s=l;break;case"multiple":r=l;default:Ju(e,t,a,l,n,null)}return t=i,n=s,e.multiple=!!r,void(null!=t?vt(e,!!r,t,!1):null!=n&&vt(e,!!r,n,!0));case"textarea":for(s in _u("invalid",e),i=a=r=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":r=l;break;case"defaultValue":a=l;break;case"children":i=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,r,a,i),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(r=n[c]))if("selected"===c)e.selected=r&&"function"!==typeof r&&"symbol"!==typeof r;else Ju(e,t,c,r,n,null);return;case"dialog":_u("beforetoggle",e),_u("toggle",e),_u("cancel",e),_u("close",e);break;case"iframe":case"object":_u("load",e);break;case"video":case"audio":for(r=0;r<Mu.length;r++)_u(Mu[r],e);break;case"image":_u("error",e),_u("load",e);break;case"details":_u("toggle",e);break;case"embed":case"source":case"link":_u("error",e),_u("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(r=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,u,r,n,null)}return;default:if(jt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(r=n[d])&&Zu(e,t,d,r,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(r=n[l])&&Ju(e,t,l,r,n,null))}var td=null,nd=null;function id(e){return 9===e.nodeType?e:e.ownerDocument}function rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(md)}:ld;function md(e){setTimeout((function(){throw e}))}function pd(e){return"head"===e}function hd(e,t){var n=t,i=0,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<i&&8>i){n=i;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Fe]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===r)return e.removeChild(a),void Cm(t);r--}else"$"===n||"$?"===n||"$!"===n?r++:i=n.charCodeAt(0)-48;else i=0;n=a}while(n);Cm(t)}function fd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fd(n),Ie(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function yd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bd=null;function vd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=id(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ie(e)}var Sd=new Map,kd=new Set;function $d(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ed=L.d;L.d={f:function(){var e=Ed.f(),t=Vc();return e||t},r:function(e){var t=Ue(e);null!==t&&5===t.tag&&"form"===t.type?Do(t):Ed.r(e)},D:function(e){Ed.D(e),Cd("dns-prefetch",e,null)},C:function(e,t){Ed.C(e,t),Cd("preconnect",e,t)},L:function(e,t,n){Ed.L(e,t,n);var i=jd;if(i&&e&&t){var r='link[rel="preload"][as="'+ft(t)+'"]';"image"===t&&n&&n.imageSrcSet?(r+='[imagesrcset="'+ft(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(r+='[imagesizes="'+ft(n.imageSizes)+'"]')):r+='[href="'+ft(e)+'"]';var a=r;switch(t){case"style":a=Td(e);break;case"script":a=Rd(e)}Sd.has(a)||(e=m({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(a,e),null!==i.querySelector(r)||"style"===t&&i.querySelector(zd(a))||"script"===t&&i.querySelector(Dd(a))||(ed(t=i.createElement("link"),"link",e),qe(t),i.head.appendChild(t)))}},m:function(e,t){Ed.m(e,t);var n=jd;if(n&&e){var i=t&&"string"===typeof t.as?t.as:"script",r='link[rel="modulepreload"][as="'+ft(i)+'"][href="'+ft(e)+'"]',a=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Rd(e)}if(!Sd.has(a)&&(e=m({rel:"modulepreload",href:e},t),Sd.set(a,e),null===n.querySelector(r))){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Dd(a)))return}ed(i=n.createElement("link"),"link",e),qe(i),n.head.appendChild(i)}}},X:function(e,t){Ed.X(e,t);var n=jd;if(n&&e){var i=He(n).hoistableScripts,r=Rd(e),a=i.get(r);a||((a=n.querySelector(Dd(r)))||(e=m({src:e,async:!0},t),(t=Sd.get(r))&&_d(e,t),qe(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}},S:function(e,t,n){Ed.S(e,t,n);var i=jd;if(i&&e){var r=He(i).hoistableStyles,a=Td(e);t=t||"default";var o=r.get(a);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(zd(a)))s.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(a))&&Od(e,n);var l=o=i.createElement("link");qe(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,Ld(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:s},r.set(a,o)}}},M:function(e,t){Ed.M(e,t);var n=jd;if(n&&e){var i=He(n).hoistableScripts,r=Rd(e),a=i.get(r);a||((a=n.querySelector(Dd(r)))||(e=m({src:e,async:!0,type:"module"},t),(t=Sd.get(r))&&_d(e,t),qe(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}};var jd="undefined"===typeof document?null:document;function Cd(e,t,n){var i=jd;if(i&&"string"===typeof t&&t){var r=ft(t);r='link[rel="'+e+'"][href="'+r+'"]',"string"===typeof n&&(r+='[crossorigin="'+n+'"]'),kd.has(r)||(kd.add(r),e={rel:e,crossOrigin:n,href:t},null===i.querySelector(r)&&(ed(t=i.createElement("link"),"link",e),qe(t),i.head.appendChild(t)))}}function Pd(e,t,n,i){var r,a,s,l,c=(c=H.current)?$d(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Td(n.href),(i=(n=He(c).hoistableStyles).get(t))||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Td(n.href);var u=He(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(zd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(r=c,a=e,s=n,l=d.state,r.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=r.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),ed(a,"link",s),qe(a),r.head.appendChild(a))))),t&&null===i)throw Error(o(528,""));return d}if(t&&null!==i)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Rd(n),(i=(n=He(c).hoistableScripts).get(t))||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Td(e){return'href="'+ft(e)+'"'}function zd(e){return'link[rel="stylesheet"]['+e+"]"}function Ad(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Rd(e){return'[src="'+ft(e)+'"]'}function Dd(e){return"script[async]"+e}function Md(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ft(n.href)+'"]');if(i)return t.instance=i,qe(i),i;var r=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return qe(i=(e.ownerDocument||e).createElement("style")),ed(i,"style",r),Ld(i,n.precedence,e),t.instance=i;case"stylesheet":r=Td(n.href);var a=e.querySelector(zd(r));if(a)return t.state.loading|=4,t.instance=a,qe(a),a;i=Ad(n),(r=Sd.get(r))&&Od(i,r),qe(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",i),t.state.loading|=4,Ld(a,n.precedence,e),t.instance=a;case"script":return a=Rd(n.src),(r=e.querySelector(Dd(a)))?(t.instance=r,qe(r),r):(i=n,(r=Sd.get(a))&&_d(i=m({},n),r),qe(r=(e=e.ownerDocument||e).createElement("script")),ed(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(i=t.instance,t.state.loading|=4,Ld(i,n.precedence,e));return t.instance}function Ld(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,a=r,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===t)a=s;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function _d(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Nd=null;function Fd(e,t,n){if(null===Nd){var i=new Map,r=Nd=new Map;r.set(n,i)}else(i=(r=Nd).get(n))||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var a=n[r];if(!(a[Fe]||a[Re]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=i.get(o);s?s.push(a):i.set(o,[a])}}return i}function Id(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Vd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Ud=null;function Bd(){}function Hd(){if(this.count--,0===this.count)if(this.stylesheets)Wd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var qd=null;function Wd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,qd=new Map,t.forEach(Yd,e),qd=null,Hd.call(e))}function Yd(e,t){if(!(4&t.state.loading)){var n=qd.get(e);if(n)var i=n.get(null);else{n=new Map,qd.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var o=r[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}o=(r=t.instance).getAttribute("data-precedence"),(a=n.get(o)||i)===i&&n.set(null,r),n.set(o,r),this.count++,i=Hd.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),a?a.parentNode.insertBefore(r,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(r,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Gd(e,t,n,i,r,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Xd(e,t,n,i,r,a,o,s,l,c,u,d){return e=new Gd(e,t,n,o,s,l,c,d),t=1,!0===a&&(t|=24),a=Oi(3,null,null,t),e.current=a,a.stateNode=e,(t=Dr()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},na(a),e}function Qd(e){return e?e=Mi:Mi}function Jd(e,t,n,i,r,a){r=Qd(r),null===i.context?i.context=r:i.pendingContext=r,(i=ra(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(i.callback=a),null!==(n=aa(e,i,t))&&(Oc(n,0,t),oa(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function em(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tm(e){if(13===e.tag){var t=Ai(e,67108864);null!==t&&Oc(t,0,67108864),em(e,67108864)}}var nm=!0;function im(e,t,n,i){var r=M.T;M.T=null;var a=L.p;try{L.p=2,am(e,t,n,i)}finally{L.p=a,M.T=r}}function rm(e,t,n,i){var r=M.T;M.T=null;var a=L.p;try{L.p=8,am(e,t,n,i)}finally{L.p=a,M.T=r}}function am(e,t,n,i){if(nm){var r=om(i);if(null===r)Uu(e,t,i,sm,n),bm(e,i);else if(function(e,t,n,i,r){switch(t){case"focusin":return dm=vm(dm,e,t,n,i,r),!0;case"dragenter":return mm=vm(mm,e,t,n,i,r),!0;case"mouseover":return pm=vm(pm,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return hm.set(a,vm(hm.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,fm.set(a,vm(fm.get(a)||null,e,t,n,i,r)),!0}return!1}(r,e,t,n,i))i.stopPropagation();else if(bm(e,i),4&t&&-1<ym.indexOf(e)){for(;null!==r;){var a=Ue(r);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=be(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-pe(o);s.entanglements[1]|=l,o&=~l}Su(a),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(s=Ai(a,2))&&Oc(s,0,2),Vc(),em(a,2)}if(null===(a=om(i))&&Uu(e,t,i,sm,n),a===r)break;r=a}null!==r&&i.stopPropagation()}else Uu(e,t,i,null,n)}}function om(e){return lm(e=At(e))}var sm=null;function lm(e){if(sm=null,null!==(e=Ve(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sm=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case ie:return 2;case re:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var um=!1,dm=null,mm=null,pm=null,hm=new Map,fm=new Map,gm=[],ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bm(e,t){switch(e){case"focusin":case"focusout":dm=null;break;case"dragenter":case"dragleave":mm=null;break;case"mouseover":case"mouseout":pm=null;break;case"pointerover":case"pointerout":hm.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fm.delete(t.pointerId)}}function vm(e,t,n,i,r,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},null!==t&&(null!==(t=Ue(t))&&tm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function xm(e){var t=Ve(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}(e.priority,(function(){if(13===n.tag){var e=Mc();e=Pe(e);var t=Ai(n,e);null!==t&&Oc(t,0,e),em(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wm(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=om(e.nativeEvent);if(null!==n)return null!==(t=Ue(n))&&tm(t),e.blockedOn=n,!1;var i=new(n=e.nativeEvent).constructor(n.type,n);zt=i,n.target.dispatchEvent(i),zt=null,t.shift()}return!0}function Sm(e,t,n){wm(e)&&n.delete(t)}function km(){um=!1,null!==dm&&wm(dm)&&(dm=null),null!==mm&&wm(mm)&&(mm=null),null!==pm&&wm(pm)&&(pm=null),hm.forEach(Sm),fm.forEach(Sm)}function $m(e,t){e.blockedOn===t&&(e.blockedOn=null,um||(um=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,km)))}var Em=null;function jm(e){Em!==e&&(Em=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,(function(){Em===e&&(Em=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if("function"!==typeof i){if(null===lm(i||n))continue;break}var a=Ue(n);null!==a&&(e.splice(t,3),t-=3,Ao(a,{pending:!0,data:r,method:n.method,action:i},i,r))}})))}function Cm(e){function t(t){return $m(t,e)}null!==dm&&$m(dm,e),null!==mm&&$m(mm,e),null!==pm&&$m(pm,e),hm.forEach(t),fm.forEach(t);for(var n=0;n<gm.length;n++){var i=gm[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<gm.length&&null===(n=gm[0]).blockedOn;)xm(n),null===n.blockedOn&&gm.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(i=0;i<n.length;i+=3){var r=n[i],a=n[i+1],o=r[De]||null;if("function"===typeof a)o||jm(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(r=a,o=a[De]||null)s=o.formAction;else if(null!==lm(r))continue}else s=o.action;"function"===typeof s?n[i+1]=s:(n.splice(i,3),i-=3),jm(n)}}}function Pm(e){this._internalRoot=e}function Tm(e){this._internalRoot=e}Tm.prototype.render=Pm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Jd(t.current,Mc(),e,t,null,null)},Tm.prototype.unmount=Pm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Vc(),t[Me]=null}},Tm.prototype.unstable_scheduleHydration=function(e){if(e){var t=ze();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gm.length&&0!==t&&t<gm[n].priority;n++);gm.splice(n,0,e),0===n&&xm(e)}};var zm=r.version;if("19.1.0"!==zm)throw Error(o(527,zm,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(null===r)break;var a=r.alternate;if(null===a){if(null!==(i=r.return)){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return u(r),e;if(a===i)return u(r),t;a=a.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,c=r.child;c;){if(c===n){s=!0,n=r,i=a;break}if(c===i){s=!0,i=r,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,i=r;break}if(c===i){s=!0,i=a,n=r;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Am={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Rm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rm.isDisabled&&Rm.supportsFiber)try{ue=Rm.inject(Am),de=Rm}catch(Mm){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,i="",r=bs,a=vs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onUncaughtError&&(r=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Xd(e,1,!1,null,0,n,i,r,a,l,0,null),e[Me]=t.current,Iu(e),new Pm(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var i=!1,r="",a=bs,l=vs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(r=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Xd(e,1,!0,t,0,i,r,a,l,c,0,u)).context=Qd(null),n=t.current,(r=ra(i=Pe(i=Mc()))).callback=null,aa(n,r,i),n=i,t.current.lanes=n,Ee(t,n),Su(t),e[Me]=t.current,Iu(e),new Tm(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},139:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=v.prototype=new b;x.constructor=v,f(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function $(e,t,i,r,a,o){return i=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==i?i:null,props:o}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(){}function T(e,t,r,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case i:u=!0;break;case m:return T((u=e._init)(e._payload),t,r,a,o)}}if(u)return o=o(e),u=""===a?"."+C(e,0):a,w(o)?(r="",null!=u&&(r=u.replace(j,"$&/")+"/"),T(o,t,r,"",(function(e){return e}))):null!=o&&(E(o)&&(l=o,c=r+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+u,o=$(l.type,c,void 0,0,0,l.props)),t.push(o)),1;u=0;var d,h=""===a?".":a+":";if(w(e))for(var f=0;f<e.length;f++)u+=T(a=e[f],t,r,s=h+C(a,f),o);else if("function"===typeof(f=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=f.call(e),f=0;!(a=e.next()).done;)u+=T(a=a.value,t,r,s=h+C(a,f++),o);else if("object"===s){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(P,P):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,r,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function z(e,t,n){if(null==e)return e;var i=[],r=0;return T(e,i,"","",(function(e){return t.call(n,e,r++)})),i}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(){}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var i=f({},e.props),r=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(r=""+t.key),t)!k.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(i[a]=t[a]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];i.children=o}return $(e.type,r,void 0,0,0,i)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var i,r={},a=null;if(null!=t)for(i in void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&(r[i]=t[i]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];r.children=s}if(e&&e.defaultProps)for(i in o=e.defaultProps)void 0===r[i]&&(r[i]=o[i]);return $(e,a,void 0,0,0,r)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var i=e(),r=S.S;null!==r&&r(n,i),"object"===typeof i&&null!==i&&"function"===typeof i.then&&i.then(D,R)}catch(a){R(a)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var i=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(r=n?n.call(i,u,d,c):void 0)||void 0===r&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var i=n(43);function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,i=c(n,t.crossOrigin),r="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:i,integrity:r,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,i=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:i,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(e,t,i){var r=null;if(void 0!==i&&(r=""+i),void 0!==t.key&&(r=""+t.key),"key"in t)for(var a in i={},t)"key"!==a&&(i[a]=t[a]);else i=t;return t=i.ref,{$$typeof:n,type:e,key:r,ref:void 0!==t?t:null,props:i}}t.Fragment=i,t.jsx=r,t.jsxs=r},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var i=n-1>>>1,r=e[i];if(!(0<a(r,t)))break e;e[i]=t,e[n]=r,n=i}}function i(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var i=0,r=e.length,o=r>>>1;i<o;){var s=2*(i+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<r&&0>a(u,l)?(e[i]=u,e[c]=n,i=c):(e[i]=l,e[s]=n,i=s);else{if(!(c<r&&0>a(u,n)))break e;e[i]=u,e[c]=n,i=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,m=null,p=3,h=!1,f=!1,g=!1,y=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=i(u);null!==t;){if(null===t.callback)r(u);else{if(!(t.startTime<=e))break;r(u),t.sortIndex=t.expirationTime,n(c,t)}t=i(u)}}function S(e){if(g=!1,w(e),!f)if(null!==i(c))f=!0,$||($=!0,k());else{var t=i(u);null!==t&&R(S,t.startTime-e)}}var k,$=!1,E=-1,j=5,C=-1;function P(){return!!y||!(t.unstable_now()-C<j)}function T(){if(y=!1,$){var e=t.unstable_now();C=e;var n=!0;try{e:{f=!1,g&&(g=!1,v(E),E=-1),h=!0;var a=p;try{t:{for(w(e),m=i(c);null!==m&&!(m.expirationTime>e&&P());){var o=m.callback;if("function"===typeof o){m.callback=null,p=m.priorityLevel;var s=o(m.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){m.callback=s,w(e),n=!0;break t}m===i(c)&&r(c),w(e)}else r(c);m=i(c)}if(null!==m)n=!0;else{var l=i(u);null!==l&&R(S,l.startTime-e),n=!1}}break e}finally{m=null,p=a,h=!1}n=void 0}}finally{n?k():$=!1}}}if("function"===typeof x)k=function(){x(T)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,A=z.port2;z.port1.onmessage=T,k=function(){A.postMessage(null)}}else k=function(){b(T,0)};function R(e,n){E=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,r,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:r,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===i(c)&&e===i(u)&&(g?(v(E),E=-1):g=!0,R(S,a-o))):(e.sortIndex=s,n(c,e),f||h||(f=!0,$||($=!0,k()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,i)=>(n.f[i](e,t),t)),[])),n.u=e=>"static/js/"+e+".8e969639.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="proyecto-final-mocosa:";n.l=(i,r,a,o)=>{if(e[i])e[i].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=i),e[i]=[r];var m=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/tesis-valentina/",(()=>{var e={792:0};n.f.j=(t,i)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise(((n,i)=>r=e[t]=[n,i]));i.push(r[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(i=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}}),"chunk-"+t,t)}};var t=(t,i)=>{var r,a,o=i[0],s=i[1],l=i[2],c=0;if(o.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)l(n)}for(t&&t(i);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},i=self.webpackChunkproyecto_final_mocosa=self.webpackChunkproyecto_final_mocosa||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),i=(n(358),"popstate");function r(){return d((function(e,t){let{pathname:n,search:i,hash:r}=e.location;return l("",{pathname:n,search:i,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:c(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||i||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function d(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:u=!1}=r,d=o.history,m="POP",p=null,h=f();function f(){return(d.state||{idx:null}).idx}function g(){m="POP";let e=f(),t=null==e?null:e-h;h=e,p&&p({action:m,location:b.location,delta:t})}function y(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),a(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let b={get action(){return m},get location(){return e(o,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(i,g),p=e,()=>{o.removeEventListener(i,g),p=null}},createHref:e=>t(o,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){m="PUSH";let i=l(b.location,e,t);n&&n(i,e),h=f()+1;let r=s(i,h),a=b.createHref(i);try{d.pushState(r,"",a)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(a)}u&&p&&p({action:m,location:b.location,delta:1})},replace:function(e,t){m="REPLACE";let i=l(b.location,e,t);n&&n(i,e),h=f();let r=s(i,h),a=b.createHref(i);d.replaceState(r,"",a),u&&p&&p({action:m,location:b.location,delta:0})},go:e=>d.go(e)};return b}new WeakMap;function m(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,i){let r=P(("string"===typeof t?u(t):t).pathname||"/",n);if(null==r)return null;let a=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=C(r);o=$(a[s],e,i)}return o}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=(e,r,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};s.relativePath.startsWith("/")&&(a(s.relativePath.startsWith(i),`Absolute route path "${s.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(i.length));let l=D([i,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),h(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:k(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of f(e.path))r(e,t,n);else r(e,t)})),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===i.length)return r?[a,""]:[a];let o=f(i.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),r&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,y=3,b=2,v=1,x=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),i=n.length;return n.some(S)&&(i+=w),t&&(i+=b),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?y:""===t?v:x)),i)}function $(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:i}=e,r={},a="/",o=[];for(let s=0;s<i.length;++s){let e=i[s],l=s===i.length-1,c="/"===a?t:t.slice(a.length)||"/",u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!i[i.length-1].route.index&&(u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(r,u.params),o.push({params:r,pathname:D([a,u.pathname]),pathnameBase:M(D([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=D([a,u.pathnameBase]))}return o}function E(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=j(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce(((e,t,n)=>{let{paramName:i,isOptional:r}=t;if("*"===i){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[i]=r&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function j(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(i.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function C(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&"/"!==i?null:e.slice(n)||"/"}function T(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function A(e){let t=z(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function R(e,t,n){let i,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?i=u(e):(i={...e},a(!i.pathname||!i.pathname.includes("?"),T("?","pathname","search",i)),a(!i.pathname||!i.pathname.includes("#"),T("#","pathname","hash",i)),a(!i.search||!i.search.includes("#"),T("#","search","hash",i)));let o,s=""===e||""===i.pathname,l=s?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:i="",hash:r=""}="string"===typeof e?u(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:L(i),hash:O(r)}}(i,o),d=l&&"/"!==l&&l.endsWith("/"),m=(s||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!m||(c.pathname+="/"),c}var D=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function _(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var N=["POST","PUT","PATCH","DELETE"],F=(new Set(N),["GET",...N]);new Set(F),Symbol("ResetLoaderData");var I=e.createContext(null);I.displayName="DataRouter";var V=e.createContext(null);V.displayName="DataRouterState";var U=e.createContext({isTransitioning:!1});U.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var H=e.createContext(null);H.displayName="Await";var q=e.createContext(null);q.displayName="Navigation";var W=e.createContext(null);W.displayName="Location";var Y=e.createContext({outlet:null,matches:[],isDataRoute:!1});Y.displayName="Route";var K=e.createContext(null);K.displayName="RouteError";function G(){return null!=e.useContext(W)}function X(){return a(G(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(W).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J(t){e.useContext(q).static||e.useLayoutEffect(t)}function Z(){let{isDataRoute:t}=e.useContext(Y);return t?function(){let{router:t}=ce("useNavigate"),n=de("useNavigate"),i=e.useRef(!1);J((()=>{i.current=!0}));let r=e.useCallback((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(i.current,Q),i.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...r}))}),[t,n]);return r}():function(){a(G(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(I),{basename:n,navigator:i}=e.useContext(q),{matches:r}=e.useContext(Y),{pathname:s}=X(),l=JSON.stringify(A(r)),c=e.useRef(!1);J((()=>{c.current=!0}));let u=e.useCallback((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(c.current,Q),!c.current)return;if("number"===typeof e)return void i.go(e);let a=R(e,JSON.parse(l),s,"path"===r.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:D([n,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)}),[n,i,l,s,t]);return u}()}e.createContext(null);function ee(){let{matches:t}=e.useContext(Y),n=t[t.length-1];return n?n.params:{}}function te(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:i}=e.useContext(Y),{pathname:r}=X(),a=JSON.stringify(A(i));return e.useMemo((()=>R(t,JSON.parse(a),r,"path"===n)),[t,a,r,n])}function ne(t,n,i,r){a(G(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(q),{matches:c}=e.useContext(Y),d=c[c.length-1],p=d?d.params:{},h=d?d.pathname:"/",f=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";he(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let y,b=X();if(n){let e="string"===typeof n?u(n):n;a("/"===f||e.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${e.pathname}" was given in the \`location\` prop.`),y=e}else y=b;let v=y.pathname||"/",x=v;if("/"!==f){let e=f.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&i&&i.matches&&i.matches.length>0?i.matches:m(t,{pathname:x});o(g||null!=w,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),o(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=se(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:D([f,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:D([f,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,i,r);return n&&S?e.createElement(W.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},S):S}function ie(){let t=me(),n=_(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),i?e.createElement("pre",{style:a},i):null,s)}var re=e.createElement(ie,null),ae=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Y.Provider,{value:this.props.routeContext},e.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oe(t){let{routeContext:n,match:i,children:r}=t,a=e.useContext(I);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),e.createElement(Y.Provider,{value:n},r)}function se(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!i)return null;if(i.errors)t=i.matches;else{if(0!==n.length||i.initialized||!(i.matches.length>0))return null;t=i.matches}}let r=t,o=i?.errors;if(null!=o){let e=r.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),r=r.slice(0,Math.min(r.length,e+1))}let s=!1,l=-1;if(i)for(let e=0;e<r.length;e++){let t=r[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=i,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){s=!0,r=l>=0?r.slice(0,l+1):[r[0]];break}}}return r.reduceRight(((t,a,c)=>{let u,d=!1,m=null,p=null;i&&(u=o&&a.route.id?o[a.route.id]:void 0,m=a.route.errorElement||re,s&&(l<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===c&&(d=!0,p=a.route.hydrateFallbackElement||null)));let h=n.concat(r.slice(0,c+1)),f=()=>{let n;return n=u?m:d?p:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(oe,{match:a,routeContext:{outlet:t,matches:h,isDataRoute:null!=i},children:n})};return i&&(a.route.ErrorBoundary||a.route.errorElement||0===c)?e.createElement(ae,{location:i.location,revalidation:i.revalidation,component:m,error:u,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()}),null)}function le(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ce(t){let n=e.useContext(I);return a(n,le(t)),n}function ue(t){let n=e.useContext(V);return a(n,le(t)),n}function de(t){let n=function(t){let n=e.useContext(Y);return a(n,le(t)),n}(t),i=n.matches[n.matches.length-1];return a(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function me(){let t=e.useContext(K),n=ue("useRouteError"),i=de("useRouteError");return void 0!==t?t:n.errors?.[i]}var pe={};function he(e,t,n){t||pe[e]||(pe[e]=!0,o(!1,n))}e.memo((function(e){let{routes:t,future:n,state:i}=e;return ne(t,void 0,i,n)}));function fe(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ge(t){let{basename:n="/",children:i=null,location:r,navigationType:s="POP",navigator:l,static:c=!1}=t;a(!G(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=e.useMemo((()=>({basename:d,navigator:l,static:c,future:{}})),[d,l,c]);"string"===typeof r&&(r=u(r));let{pathname:p="/",search:h="",hash:f="",state:g=null,key:y="default"}=r,b=e.useMemo((()=>{let e=P(p,d);return null==e?null:{location:{pathname:e,search:h,hash:f,state:g,key:y},navigationType:s}}),[d,p,h,f,g,y,s]);return o(null!=b,`<Router basename="${d}"> is not able to match the URL "${p}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==b?null:e.createElement(q.Provider,{value:m},e.createElement(W.Provider,{children:i,value:b}))}function ye(e){let{children:t,location:n}=e;return ne(be(t),n)}e.Component;function be(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=[];return e.Children.forEach(t,((t,r)=>{if(!e.isValidElement(t))return;let o=[...n,r];if(t.type===e.Fragment)return void i.push.apply(i,be(t.props.children,o));a(t.type===fe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=be(t.props.children,o)),i.push(s)})),i}var ve="get",xe="application/x-www-form-urlencoded";function we(e){return null!=e&&"string"===typeof e.tagName}var Se=null;var ke=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $e(e){return null==e||ke.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null)}function Ee(e,t){let n,i,r,a,o;if(we(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");i=o?P(o,t):null,n=e.getAttribute("method")||ve,r=$e(e.getAttribute("enctype"))||xe,a=new FormData(e)}else if(function(e){return we(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return we(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(i=s?P(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ve,r=$e(e.getAttribute("formenctype"))||$e(o.getAttribute("enctype"))||xe,a=new FormData(o,e),!function(){if(null===Se)try{new FormData(document.createElement("form"),0),Se=!1}catch(e){Se=!0}return Se}()){let{name:t,type:n,value:i}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,i)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ve,i=null,r=xe,o=e}var s;return a&&"text/plain"===r&&(o=a,a=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:a,body:o}}function je(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Pe(e){return null!=e&&"string"===typeof e.page}function Te(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function ze(e,t,n,i,r,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=i.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let i=t.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof i)return i}return!0})):[]}function Ae(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i=e.map((e=>{let i=t.routes[e.route.id];if(!i)return[];let r=[i.module];return i.clientActionModule&&(r=r.concat(i.clientActionModule)),i.clientLoaderModule&&(r=r.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(r=r.concat(i.hydrateFallbackModule)),i.imports&&(r=r.concat(i.imports)),r})).flat(1),[...new Set(i)];var i}function Re(e,t){let n=new Set,i=new Set(t);return e.reduce(((e,r)=>{if(t&&!Pe(r)&&"script"===r.as&&r.href&&i.has(r.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}(r));return n.has(a)||(n.add(a),e.push({key:a,link:r})),e}),[])}function De(e){return{__html:e}}Symbol("SingleFetchRedirect");var Me=new Set([100,101,204,205]);function Le(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===P(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Oe(t){let{error:n,isOutsideRemixApp:i}=t;console.error(n);let r,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(_(n))return e.createElement(_e,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(_e,{title:"Application Error!",isOutsideRemixApp:i},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},r.stack),a)}function _e(t){let{title:n,renderScripts:i,isOutsideRemixApp:r,children:a}=t,{routeModules:o}=Ue();return o.root?.Layout&&!r?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,i?e.createElement(Ge,null):null)))}function Ne(e){return!0===e}function Fe(){let t=e.useContext(I);return je(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ie(){let t=e.useContext(V);return je(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ve=e.createContext(void 0);function Ue(){let t=e.useContext(Ve);return je(t,"You must render this element inside a <HydratedRouter> element"),t}function Be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He(e,t,n){if(n&&!Ke)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function qe(t){let{page:n,...i}=t,{router:r}=Fe(),a=e.useMemo((()=>m(r.routes,n,r.basename)),[r.routes,n,r.basename]);return a?e.createElement(Ye,{page:n,matches:a,...i}):null}function We(t){let{manifest:n,routeModules:i}=Ue(),[r,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let i=await Promise.all(e.map((async e=>{let i=t.routes[e.route.id];if(i){let e=await Ce(i,n);return e.links?e.links():[]}return[]})));return Re(i.flat(1).filter(Te).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,i).then((t=>{e||a(t)})),()=>{e=!0}}),[t,n,i]),r}function Ye(t){let{page:n,matches:i,...r}=t,a=X(),{manifest:o,routeModules:s}=Ue(),{basename:l}=Fe(),{loaderData:c,matches:u}=Ie(),d=e.useMemo((()=>ze(n,i,u,o,a,"data")),[n,i,u,o,a]),m=e.useMemo((()=>ze(n,i,u,o,a,"assets")),[n,i,u,o,a]),p=e.useMemo((()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(i.forEach((n=>{let i=o.routes[n.route.id];i&&i.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||i.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let r=Le(n,l);return t&&e.size>0&&r.searchParams.set("_routes",i.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[r.pathname+r.search]}),[l,c,a,o,d,i,n,s]),h=e.useMemo((()=>Ae(m,o)),[m,o]),f=We(m);return e.createElement(e.Fragment,null,p.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...r}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...r}))),f.map((t=>{let{key:n,link:i}=t;return e.createElement("link",{key:n,...i})})))}Ve.displayName="FrameworkContext";var Ke=!1;function Ge(t){let{manifest:n,serverHandoffString:i,isSpaMode:r,ssr:a,renderMeta:o}=Ue(),{router:s,static:l,staticContext:c}=Fe(),{matches:u}=Ie(),d=Ne(a);o&&(o.didRenderScripts=!0);let p=He(u,null,r);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let r=c?`window.__reactRouterContext = ${i};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let i=`route${t}`,r=n.routes[e.route.id];je(r,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=r,u=[...a?[{module:a,varName:`${i}_clientAction`}]:[],...o?[{module:o,varName:`${i}_clientLoader`}]:[],...s?[{module:s,varName:`${i}_clientMiddleware`}]:[],...l?[{module:l,varName:`${i}_HydrateFallback`}]:[],{module:c,varName:`${i}_main`}];return 1===u.length?`import * as ${i} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${i} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...i}=e,r=new Set(t.state.matches.map((e=>e.route.id))),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach((e=>{let n=m(t.routes,e,t.basename);n&&n.forEach((e=>r.add(e.route.id)))}));let s=[...r].reduce(((e,t)=>Object.assign(e,{[t]:i.routes[t]})),{});return{...i,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:De(r),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:De(a),type:"module",async:!0}))}),[]),f=Ke?[]:(n.entry.imports.concat(Ae(p,n,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let y="object"===typeof n.sri?n.sri:{};return Ke?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:y[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:y[n.entry.module],suppressHydrationWarning:!0}),f.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:y[n],suppressHydrationWarning:!0}))),h)}function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Qe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Qe&&(window.__reactRouterVersion="7.5.3")}catch(Db){}function Je(t){let{basename:n,children:i,window:a}=t,o=e.useRef();null==o.current&&(o.current=r({window:a,v5Compat:!0}));let s=o.current,[l,c]=e.useState({action:s.action,location:s.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>s.listen(u)),[s,u]),e.createElement(ge,{basename:n,children:i,location:l.location,navigationType:l.action,navigator:s})}var Ze=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=e.forwardRef((function(t,n){let i,{onClick:r,discover:s="render",prefetch:l="none",relative:u,reloadDocument:d,replace:m,state:p,target:h,to:f,preventScrollReset:g,viewTransition:y,...b}=t,{basename:v}=e.useContext(q),x="string"===typeof f&&Ze.test(f),w=!1;if("string"===typeof f&&x&&(i=f,Qe))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=P(t.pathname,v);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:w=!0}catch(Db){o(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(G(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=e.useContext(q),{hash:o,pathname:s,search:l}=te(t,{relative:n}),c=s;return"/"!==i&&(c="/"===s?i:D([i,s])),r.createHref({pathname:c,search:l,hash:o})}(f,{relative:u}),[k,$,E]=function(t,n){let i=e.useContext(Ve),[r,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:m}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(r){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[r]);let h=()=>{a(!0)},f=()=>{a(!1),s(!1)};return i?"intent"!==t?[o,p,{}]:[o,p,{onFocus:Be(l,h),onBlur:Be(c,f),onMouseEnter:Be(u,h),onMouseLeave:Be(d,f),onTouchStart:Be(m,h)}]:[!1,p,{}]}(l,b),j=function(t){let{target:n,replace:i,state:r,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Z(),u=X(),d=te(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==i?i:c(u)===c(d);l(t,{replace:n,state:r,preventScrollReset:a,relative:o,viewTransition:s})}}),[u,l,d,i,r,n,t,a,o,s])}(f,{replace:m,state:p,target:h,preventScrollReset:g,relative:u,viewTransition:y});let C=e.createElement("a",{...b,...E,href:i||S,onClick:w||d?r:function(e){r&&r(e),e.defaultPrevented||j(e)},ref:Xe(n,$),target:h,"data-discover":x||"render"!==s?void 0:"true"});return k&&!x?e.createElement(e.Fragment,null,C,e.createElement(qe,{page:S})):C}));et.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":i="page",caseSensitive:r=!1,className:o="",end:s=!1,style:l,to:c,viewTransition:u,children:d,...m}=t,p=te(c,{relative:m.relative}),h=X(),f=e.useContext(V),{navigator:g,basename:y}=e.useContext(q),b=null!=f&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.useContext(U);a(null!=i,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=it("useViewTransitionState"),o=te(t,{relative:n.relative});if(!i.isTransitioning)return!1;let s=P(i.currentLocation.pathname,r)||i.currentLocation.pathname,l=P(i.nextLocation.pathname,r)||i.nextLocation.pathname;return null!=E(o.pathname,l)||null!=E(o.pathname,s)}(p)&&!0===u,v=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;r||(x=x.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&y&&(w=P(w,y)||w);const S="/"!==v&&v.endsWith("/")?v.length-1:v.length;let k,$=x===v||!s&&x.startsWith(v)&&"/"===x.charAt(S),j=null!=w&&(w===v||!s&&w.startsWith(v)&&"/"===w.charAt(v.length)),C={isActive:$,isPending:j,isTransitioning:b},T=$?i:void 0;k="function"===typeof o?o(C):[o,$?"active":null,j?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let z="function"===typeof l?l(C):l;return e.createElement(et,{...m,"aria-current":T,className:k,ref:n,style:z,to:c,viewTransition:u},"function"===typeof d?d(C):d)})).displayName="NavLink";var tt=e.forwardRef(((t,n)=>{let{discover:i="render",fetcherKey:r,navigate:o,reloadDocument:s,replace:l,state:u,method:d=ve,action:m,onSubmit:p,relative:h,preventScrollReset:f,viewTransition:g,...y}=t,b=ot(),v=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:i}=e.useContext(q),r=e.useContext(Y);a(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),s={...te(t||".",{relative:n})},l=X();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==i&&(s.pathname="/"===s.pathname?i:D([i,s.pathname]));return c(s)}(m,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof m&&Ze.test(m);return e.createElement("form",{ref:n,method:x,action:v,onSubmit:s?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;b(t||e.currentTarget,{fetcherKey:r,method:n,navigate:o,replace:l,state:u,relative:h,preventScrollReset:f,viewTransition:g})},...y,"data-discover":w||"render"!==i?void 0:"true"})}));function nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function it(t){let n=e.useContext(I);return a(n,nt(t)),n}tt.displayName="Form";var rt=0,at=()=>`__${String(++rt)}__`;function ot(){let{router:t}=it("useSubmit"),{basename:n}=e.useContext(q),i=de("useRouteId");return e.useCallback((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:c}=Ee(e,n);if(!1===r.navigate){let e=r.fetcherKey||at();await t.fetch(e,i,r.action||a,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||o,formEncType:r.encType||s,flushSync:r.flushSync})}else await t.navigate(r.action||a,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||o,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:i,flushSync:r.flushSync,viewTransition:r.viewTransition})}),[t,n,i])}new TextEncoder;var st=function(){return st=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},st.apply(this,arguments)};Object.create;function lt(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ct=n(324),ut=n.n(ct),dt="-ms-",mt="-moz-",pt="-webkit-",ht="comm",ft="rule",gt="decl",yt="@keyframes",bt=Math.abs,vt=String.fromCharCode,xt=Object.assign;function wt(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function kt(e,t,n){return e.replace(t,n)}function $t(e,t,n){return e.indexOf(t,n)}function Et(e,t){return 0|e.charCodeAt(t)}function jt(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Pt(e){return e.length}function Tt(e,t){return t.push(e),e}function zt(e,t){return e.filter((function(e){return!St(e,t)}))}var At=1,Rt=1,Dt=0,Mt=0,Lt=0,Ot="";function _t(e,t,n,i,r,a,o,s){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:At,column:Rt,length:o,return:"",siblings:s}}function Nt(e,t){return xt(_t("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ft(e){for(;e.root;)e=Nt(e.root,{children:[e]});Tt(e,e.siblings)}function It(){return Lt=Mt>0?Et(Ot,--Mt):0,Rt--,10===Lt&&(Rt=1,At--),Lt}function Vt(){return Lt=Mt<Dt?Et(Ot,Mt++):0,Rt++,10===Lt&&(Rt=1,At++),Lt}function Ut(){return Et(Ot,Mt)}function Bt(){return Mt}function Ht(e,t){return jt(Ot,e,t)}function qt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return At=Rt=1,Dt=Ct(Ot=e),Mt=0,[]}function Yt(e){return Ot="",e}function Kt(e){return wt(Ht(Mt-1,Qt(91===e?e+2:40===e?e+1:e)))}function Gt(e){for(;(Lt=Ut())&&Lt<33;)Vt();return qt(e)>2||qt(Lt)>3?"":" "}function Xt(e,t){for(;--t&&Vt()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Ht(e,Bt()+(t<6&&32==Ut()&&32==Vt()))}function Qt(e){for(;Vt();)switch(Lt){case e:return Mt;case 34:case 39:34!==e&&39!==e&&Qt(Lt);break;case 40:41===e&&Qt(e);break;case 92:Vt()}return Mt}function Jt(e,t){for(;Vt()&&e+Lt!==57&&(e+Lt!==84||47!==Ut()););return"/*"+Ht(t,Mt-1)+"*"+vt(47===e?e:Vt())}function Zt(e){for(;!qt(Ut());)Vt();return Ht(e,Mt)}function en(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function tn(e,t,n,i){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case gt:return e.return=e.return||e.value;case ht:return"";case yt:return e.return=e.value+"{"+en(e.children,i)+"}";case ft:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=en(e.children,i))?e.return=e.value+"{"+n+"}":""}function nn(e,t,n){switch(function(e,t){return 45^Et(e,0)?(((t<<2^Et(e,0))<<2^Et(e,1))<<2^Et(e,2))<<2^Et(e,3):0}(e,t)){case 5103:return pt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pt+e+e;case 4789:return mt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pt+e+mt+e+dt+e+e;case 5936:switch(Et(e,t+11)){case 114:return pt+e+dt+kt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pt+e+dt+kt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pt+e+dt+kt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pt+e+dt+e+e;case 6165:return pt+e+dt+"flex-"+e+e;case 5187:return pt+e+kt(e,/(\w+).+(:[^]+)/,pt+"box-$1$2"+dt+"flex-$1$2")+e;case 5443:return pt+e+dt+"flex-item-"+kt(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":dt+"grid-row-"+kt(e,/flex-|-self/g,""))+e;case 4675:return pt+e+dt+"flex-line-pack"+kt(e,/align-content|flex-|-self/g,"")+e;case 5548:return pt+e+dt+kt(e,"shrink","negative")+e;case 5292:return pt+e+dt+kt(e,"basis","preferred-size")+e;case 6060:return pt+"box-"+kt(e,"-grow","")+pt+e+dt+kt(e,"grow","positive")+e;case 4554:return pt+kt(e,/([^-])(transform)/g,"$1"+pt+"$2")+e;case 6187:return kt(kt(kt(e,/(zoom-|grab)/,pt+"$1"),/(image-set)/,pt+"$1"),e,"")+e;case 5495:case 3959:return kt(e,/(image-set\([^]*)/,pt+"$1$`$1");case 4968:return kt(kt(e,/(.+:)(flex-)?(.*)/,pt+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pt+e+e;case 4200:if(!St(e,/flex-|baseline/))return dt+"grid-column-align"+jt(e,t)+e;break;case 2592:case 3360:return dt+kt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,St(e.props,/grid-\w+-end/)}))?~$t(e+(n=n[t].value),"span",0)?e:dt+kt(e,"-start","")+e+dt+"grid-row-span:"+(~$t(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":dt+kt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return St(e.props,/grid-\w+-start/)}))?e:dt+kt(kt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return kt(e,/(.+)-inline(.+)/,pt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(Et(e,t+1)){case 109:if(45!==Et(e,t+4))break;case 102:return kt(e,/(.+:)(.+)-([^]+)/,"$1"+pt+"$2-$3$1"+mt+(108==Et(e,t+3)?"$3":"$2-$3"))+e;case 115:return~$t(e,"stretch",0)?nn(kt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return kt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,i,r,a,o,s){return dt+n+":"+i+s+(r?dt+n+"-span:"+(a?o:+o-+i)+s:"")+e}));case 4949:if(121===Et(e,t+6))return kt(e,":",":"+pt)+e;break;case 6444:switch(Et(e,45===Et(e,14)?18:11)){case 120:return kt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pt+(45===Et(e,14)?"inline-":"")+"box$3$1"+pt+"$2$3$1"+dt+"$2box$3")+e;case 100:return kt(e,":",":"+dt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return kt(e,"scroll-","scroll-snap-")+e}return e}function rn(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case gt:return void(e.return=nn(e.value,e.length,n));case yt:return en([Nt(e,{value:kt(e.value,"@","@"+pt)})],i);case ft:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(St(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ft(Nt(e,{props:[kt(t,/:(read-\w+)/,":-moz-$1")]})),Ft(Nt(e,{props:[t]})),xt(e,{props:zt(n,i)});break;case"::placeholder":Ft(Nt(e,{props:[kt(t,/:(plac\w+)/,":"+pt+"input-$1")]})),Ft(Nt(e,{props:[kt(t,/:(plac\w+)/,":-moz-$1")]})),Ft(Nt(e,{props:[kt(t,/:(plac\w+)/,dt+"input-$1")]})),Ft(Nt(e,{props:[t]})),xt(e,{props:zt(n,i)})}return""}))}}function an(e){return Yt(on("",null,null,null,[""],e=Wt(e),0,[0],e))}function on(e,t,n,i,r,a,o,s,l){for(var c=0,u=0,d=o,m=0,p=0,h=0,f=1,g=1,y=1,b=0,v="",x=r,w=a,S=i,k=v;g;)switch(h=b,b=Vt()){case 40:if(108!=h&&58==Et(k,d-1)){-1!=$t(k+=kt(Kt(b),"&","&\f"),"&\f",bt(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:k+=Kt(b);break;case 9:case 10:case 13:case 32:k+=Gt(h);break;case 92:k+=Xt(Bt()-1,7);continue;case 47:switch(Ut()){case 42:case 47:Tt(ln(Jt(Vt(),Bt()),t,n,l),l);break;default:k+="/"}break;case 123*f:s[c++]=Ct(k)*y;case 125*f:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==y&&(k=kt(k,/\f/g,"")),p>0&&Ct(k)-d&&Tt(p>32?cn(k+";",i,n,d-1,l):cn(kt(k," ","")+";",i,n,d-2,l),l);break;case 59:k+=";";default:if(Tt(S=sn(k,t,n,c,u,r,s,v,x=[],w=[],d,a),a),123===b)if(0===u)on(k,t,S,S,x,a,d,s,w);else switch(99===m&&110===Et(k,3)?100:m){case 100:case 108:case 109:case 115:on(e,S,S,i&&Tt(sn(e,S,S,0,0,r,s,v,r,x=[],d,w),w),r,w,d,s,i?x:w);break;default:on(k,S,S,S,[""],w,0,s,w)}}c=u=p=0,f=y=1,v=k="",d=o;break;case 58:d=1+Ct(k),p=h;default:if(f<1)if(123==b)--f;else if(125==b&&0==f++&&125==It())continue;switch(k+=vt(b),b*f){case 38:y=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Ct(k)-1)*y,y=1;break;case 64:45===Ut()&&(k+=Kt(Vt())),m=Ut(),u=d=Ct(v=k+=Zt(Bt())),b++;break;case 45:45===h&&2==Ct(k)&&(f=0)}}return a}function sn(e,t,n,i,r,a,o,s,l,c,u,d){for(var m=r-1,p=0===r?a:[""],h=Pt(p),f=0,g=0,y=0;f<i;++f)for(var b=0,v=jt(e,m+1,m=bt(g=o[f])),x=e;b<h;++b)(x=wt(g>0?p[b]+" "+v:kt(v,/&\f/g,p[b])))&&(l[y++]=x);return _t(e,t,n,0===r?ft:s,l,c,u,d)}function ln(e,t,n,i){return _t(e,t,n,ht,vt(Lt),jt(e,2,-2),0,i)}function cn(e,t,n,i,r){return _t(e,t,n,gt,jt(e,0,i),jt(e,i+1,-1),i,r)}var un={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",mn="active",pn="data-styled-version",hn="6.1.17",fn="/*!sc*/\n",gn="undefined"!=typeof window&&"HTMLElement"in window,yn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/tesis-valentina",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),bn={},vn=(new Set,Object.freeze([])),xn=Object.freeze({});function wn(e,t,n){return void 0===n&&(n=xn),e.theme!==n.theme&&e.theme||t||n.theme}var Sn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$n=/(^-|-$)/g;function En(e){return e.replace(kn,"-").replace($n,"")}var jn=/(a)(d)/gi,Cn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cn(t%52)+n;return(Cn(t%52)+n).replace(jn,"$1-$2")}var Tn,zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},An=function(e){return zn(5381,e)};function Rn(e){return Pn(An(e)>>>0)}function Dn(e){return e.displayName||e.name||"Component"}function Mn(e){return"string"==typeof e&&!0}var Ln="function"==typeof Symbol&&Symbol.for,On=Ln?Symbol.for("react.memo"):60115,_n=Ln?Symbol.for("react.forward_ref"):60112,Nn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vn=((Tn={})[_n]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tn[On]=In,Tn);function Un(e){return("type"in(t=e)&&t.type.$$typeof)===On?In:"$$typeof"in e?Vn[e.$$typeof]:Nn;var t}var Bn=Object.defineProperty,Hn=Object.getOwnPropertyNames,qn=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Yn=Object.getPrototypeOf,Kn=Object.prototype;function Gn(e,t,n){if("string"!=typeof t){if(Kn){var i=Yn(t);i&&i!==Kn&&Gn(e,i,n)}var r=Hn(t);qn&&(r=r.concat(qn(t)));for(var a=Un(e),o=Un(t),s=0;s<r.length;++s){var l=r[s];if(!(l in Fn||n&&n[l]||o&&l in o||a&&l in a)){var c=Wn(t,l);try{Bn(e,l,c)}catch(e){}}}}return e}function Xn(e){return"function"==typeof e}function Qn(e){return"object"==typeof e&&"styledComponentId"in e}function Jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zn(e,t){if(0===e.length)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function ei(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ti(e,t,n){if(void 0===n&&(n=!1),!n&&!ei(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=ti(e[i],t[i]);else if(ei(t))for(var i in t)e[i]=ti(e[i],t[i]);return e}function ni(e,t){Object.defineProperty(e,"toString",{value:t})}function ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ri=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)if((r<<=1)<0)throw ii(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var a=i;a<r;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,a=i;a<r;a++)t+="".concat(this.tag.getRule(a)).concat(fn);return t},e}(),ai=new Map,oi=new Map,si=1,li=function(e){if(ai.has(e))return ai.get(e);for(;oi.has(si);)si++;var t=si++;return ai.set(e,t),oi.set(t,e),t},ci=function(e,t){si=t+1,ai.set(e,t),oi.set(t,e)},ui="style[".concat(dn,"][").concat(pn,'="').concat(hn,'"]'),di=new RegExp("^".concat(dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mi=function(e,t,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},pi=function(e,t){for(var n,i=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fn),r=[],a=0,o=i.length;a<o;a++){var s=i[a].trim();if(s){var l=s.match(di);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ci(u,c),mi(e,u,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},hi=function(e){for(var t=document.querySelectorAll(ui),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(dn)!==mn&&(pi(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function fi(){return n.nc}var gi=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(dn,"]")));return t[t.length-1]}(n),a=void 0!==r?r.nextSibling:null;i.setAttribute(dn,mn),i.setAttribute(pn,hn);var o=fi();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},yi=function(){function e(e){this.element=gi(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}throw ii(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),bi=function(){function e(e){this.element=gi(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vi=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xi=gn,wi={isServer:!gn,useCSSOMInjection:!yn},Si=function(){function e(e,t,n){void 0===e&&(e=xn),void 0===t&&(t={});var i=this;this.options=st(st({},wi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&gn&&xi&&(xi=!1,hi(this)),ni(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=function(n){var r=function(e){return oi.get(e)}(n);if(void 0===r)return"continue";var a=e.names.get(r),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(dn,".g").concat(n,'[id="').concat(r,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),i+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(fn)},a=0;a<n;a++)r(a);return i}(i)}))}return e.registerId=function(e){return li(e)},e.prototype.rehydrate=function(){!this.server&&gn&&hi(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(st(st({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new vi(n):t?new yi(n):new bi(n)}(this.options),new ri(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(li(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(li(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(li(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ki=/&/g,$i=/^\s*\/\/.*$/gm;function Ei(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ei(e.children,t)),e}))}function ji(e){var t,n,i,r=void 0===e?xn:e,a=r.options,o=void 0===a?xn:a,s=r.plugins,l=void 0===s?vn:s,c=function(e,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===ft&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ki,n).replace(i,c))})),o.prefix&&u.push(rn),u.push(tn);var d=function(e,r,a,s){void 0===r&&(r=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace($i,""),c=an(a||r?"".concat(a," ").concat(r," { ").concat(l," }"):l);o.namespace&&(c=Ei(c,o.namespace));var d,m=[];return en(c,function(e){var t=Pt(e);return function(n,i,r,a){for(var o="",s=0;s<t;s++)o+=e[s](n,i,r,a)||"";return o}}(u.concat((d=function(e){return m.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),m};return d.hash=l.length?l.reduce((function(e,t){return t.name||ii(15),zn(e,t.name)}),5381).toString():"",d}var Ci=new Si,Pi=ji(),Ti=e.createContext({shouldForwardProp:void 0,styleSheet:Ci,stylis:Pi}),zi=(Ti.Consumer,e.createContext(void 0));function Ai(){return(0,e.useContext)(Ti)}function Ri(t){var n=(0,e.useState)(t.stylisPlugins),i=n[0],r=n[1],a=Ai().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return ji({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:i})}),[t.enableVendorPrefixes,t.namespace,i]);(0,e.useEffect)((function(){ut()(i,t.stylisPlugins)||r(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(Ti.Provider,{value:l},e.createElement(zi.Provider,{value:s},t.children))}var Di=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pi);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ni(this,(function(){throw ii(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pi),this.name+e.hash},e}(),Mi=function(e){return e>="A"&&e<="Z"};function Li(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(1===n&&"-"===i&&"-"===e[0])return e;Mi(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Oi=function(e){return null==e||!1===e||""===e},_i=function(e){var t,n,i=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!Oi(a)&&(Array.isArray(a)&&a.isCss||Xn(a)?i.push("".concat(Li(r),":"),a,";"):ei(a)?i.push.apply(i,lt(lt(["".concat(r," {")],_i(a),!1),["}"],!1)):i.push("".concat(Li(r),": ").concat((t=r,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in un||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Ni(e,t,n,i){return Oi(e)?[]:Qn(e)?[".".concat(e.styledComponentId)]:Xn(e)?!Xn(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:Ni(e(t),t,n,i):e instanceof Di?n?(e.inject(n,i),[e.getName(i)]):[e]:ei(e)?_i(e):Array.isArray(e)?Array.prototype.concat.apply(vn,e.map((function(e){return Ni(e,t,n,i)}))):[e.toString()];var r}function Fi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Qn(n))return!1}return!0}var Ii=An(hn),Vi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Fi(e),this.componentId=t,this.baseHash=zn(Ii,t),this.baseStyle=n,Si.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=Jn(i,this.staticRulesId);else{var r=Zn(Ni(this.rules,e,t,n)),a=Pn(zn(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(r,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}i=Jn(i,a),this.staticRulesId=a}else{for(var s=zn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Zn(Ni(u,e,t,n));s=zn(s,d+c),l+=d}}if(l){var m=Pn(s>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,n(l,".".concat(m),void 0,this.componentId)),i=Jn(i,m)}}return i},e}(),Ui=e.createContext(void 0);Ui.Consumer;function Bi(t){var n=e.useContext(Ui),i=(0,e.useMemo)((function(){return function(e,t){if(!e)throw ii(14);if(Xn(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw ii(8);return t?st(st({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(Ui.Provider,{value:i},t.children):null}var Hi={};new Set;function qi(t,n,i){var r=Qn(t),a=t,o=!Mn(t),s=n.attrs,l=void 0===s?vn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":En(e);Hi[n]=(Hi[n]||0)+1;var i="".concat(n,"-").concat(Rn(hn+n+Hi[n]));return t?"".concat(t,"-").concat(i):i}(n.displayName,n.parentComponentId):c,d=n.displayName,m=void 0===d?function(e){return Mn(e)?"styled.".concat(e):"Styled(".concat(Dn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(En(n.displayName),"-").concat(n.componentId):n.componentId||u,h=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,f=n.shouldForwardProp;if(r&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;f=function(e,t){return g(e,t)&&y(e,t)}}else f=g}var b=new Vi(i,p,r?a.componentStyle:void 0);function v(t,n){return function(t,n,i){var r=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Ui),d=Ai(),m=t.shouldForwardProp||d.shouldForwardProp,p=wn(n,u,o)||xn,h=function(e,t,n){for(var i,r=st(st({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Xn(i=e[a])?i(r):i;for(var s in o)r[s]="className"===s?Jn(r[s],o[s]):"style"===s?st(st({},r[s]),o[s]):o[s]}return t.className&&(r.className=Jn(r.className,t.className)),r}(r,n,p),f=h.as||c,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===p||("forwardedAs"===y?g.as=h.forwardedAs:m&&!m(y,f)||(g[y]=h[y]));var b=function(e,t){var n=Ai();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),v=Jn(s,l);return b&&(v+=" "+b),h.className&&(v+=" "+h.className),g[Mn(f)&&!Sn.has(f)?"class":"className"]=v,i&&(g.ref=i),(0,e.createElement)(f,g)}(x,t,n)}v.displayName=m;var x=e.forwardRef(v);return x.attrs=h,x.componentStyle=b,x.displayName=m,x.shouldForwardProp=f,x.foldedComponentIds=r?Jn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=r?a.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++)ti(e,r[i],!0);return e}({},a.defaultProps,e):e}}),ni(x,(function(){return".".concat(x.styledComponentId)})),o&&Gn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Wi(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var Yi=function(e){return Object.assign(e,{isCss:!0})};function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||ei(e))return Yi(Ni(Wi(vn,lt([e],t,!0))));var i=e;return 0===t.length&&1===i.length&&"string"==typeof i[0]?Ni(i):Yi(Ni(Wi(i,t)))}function Gi(e,t,n){if(void 0===n&&(n=xn),!t)throw ii(1,t);var i=function(i){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return e(t,n,Ki.apply(void 0,lt([i],r,!1)))};return i.attrs=function(i){return Gi(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return Gi(e,t,st(st({},n),i))},i}var Xi=function(e){return Gi(qi,e)},Qi=Xi;Sn.forEach((function(e){Qi[e]=Xi(e)}));var Ji=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Fi(e),Si.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,i){var r=i(Zn(Ni(this.rules,t,n,i)),""),a=this.componentId+e;n.insertRules(a,a,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,i){e>2&&Si.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)},e}();function Zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Zn(Ki.apply(void 0,lt([e],t,!1))),r=Rn(i);return new Di(r,i)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=fi(),i=Zn([n&&'nonce="'.concat(n,'"'),"".concat(dn,'="true"'),"".concat(pn,'="').concat(hn,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ii(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw ii(2);var i=t.instance.toString();if(!i)return[];var r=((n={})[dn]="",n[pn]=hn,n.dangerouslySetInnerHTML={__html:i},n),a=fi();return a&&(r.nonce=a),[e.createElement("style",st({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Si({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw ii(2);return e.createElement(Ri,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw ii(3)}})(),"__sc-".concat(dn,"__");var er=n(579);const tr=(0,e.createContext)({});function nr(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const ir="undefined"!==typeof window,rr=ir?e.useLayoutEffect:e.useEffect,ar=(0,e.createContext)(null);function or(e){return"object"===typeof e&&null!==e}function sr(e){return or(e)&&"offsetHeight"in e}const lr=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class cr extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=sr(e)&&e.offsetWidth||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ur(t){let{children:n,isPresent:i,anchorX:r}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(lr);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=s.current;if(i||!o.current||!e||!t)return;const d="left"===r?`left: ${c}`:`right: ${u}`;o.current.dataset.motionPopId=a;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.contains(m)&&document.head.removeChild(m)}}),[i]),(0,er.jsx)(cr,{isPresent:i,childRef:o,sizeRef:s,children:e.cloneElement(n,{ref:o})})}const dr=t=>{let{children:n,initial:i,isPresent:r,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c}=t;const u=nr(mr),d=(0,e.useId)();let m=!0,p=(0,e.useMemo)((()=>(m=!1,{id:d,initial:i,isPresent:r,custom:o,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;a&&a()},register:e=>(u.set(e,!1),()=>u.delete(e))})),[r,u,a]);return s&&m&&(p={...p}),(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[r]),e.useEffect((()=>{!r&&!u.size&&a&&a()}),[r]),"popLayout"===l&&(n=(0,er.jsx)(ur,{isPresent:r,anchorX:c,children:n})),(0,er.jsx)(ar.Provider,{value:p,children:n})};function mr(){return new Map}function pr(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(ar);if(null===n)return[!0,null];const{isPresent:i,onExitComplete:r,register:a}=n,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&r&&r(o)),[o,r,t]);return!i&&r?[!1,s]:[!0]}const hr=e=>e.key||"";function fr(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const gr=t=>{let{children:n,custom:i,initial:r=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=pr(l),m=(0,e.useMemo)((()=>fr(n)),[n]),p=l&&!u?[]:m.map(hr),h=(0,e.useRef)(!0),f=(0,e.useRef)(m),g=nr((()=>new Map)),[y,b]=(0,e.useState)(m),[v,x]=(0,e.useState)(m);rr((()=>{h.current=!1,f.current=m;for(let e=0;e<v.length;e++){const t=hr(v[e]);p.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[v,p.length,p.join("-")]);const w=[];if(m!==y){let e=[...m];for(let t=0;t<v.length;t++){const n=v[t],i=hr(n);p.includes(i)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),x(fr(e)),b(m),null}const{forceRender:S}=(0,e.useContext)(tr);return(0,er.jsx)(er.Fragment,{children:v.map((e=>{const t=hr(e),n=!(l&&!u)&&(m===v||p.includes(t));return(0,er.jsx)(dr,{isPresent:n,initial:!(h.current&&!r)&&void 0,custom:i,presenceAffectsLayout:o,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(S?.(),x(f.current),l&&d?.(),a&&a())},anchorX:c,children:e},t)}))})};function yr(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,i)=>"create"===i?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function br(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function vr(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function xr(e,t,n,i){if("function"===typeof t){const[r,a]=vr(i);t=t(void 0!==n?n:e.custom,r,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[r,a]=vr(i);t=t(void 0!==n?n:e.custom,r,a)}return t}function wr(e,t,n){const i=e.getProps();return xr(i,t,void 0!==n?n:i.custom,e)}function Sr(e,t){return e?.[t]??e?.default??e}const kr=e=>e,$r={},Er=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],jr={value:null,addProjectionMetrics:null};function Cr(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Er.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,i=new Set,r=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&r?n:i;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{i.delete(e),o.delete(e)},process:e=>{s=e,r?a=!0:(r=!0,[n,i]=[i,n],n.forEach(c),t&&jr.value&&jr.value.frameloop[t].push(l),l=0,n.clear(),r=!1,a&&(a=!1,u.process(e)))}};return u}(a,t?n:void 0),e)),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:m,render:p,postRender:h}=o,f=()=>{const a=$r.useManualTiming?r.timestamp:performance.now();n=!1,$r.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(a-r.timestamp,40),1)),r.timestamp=a,r.isProcessing=!0,s.process(r),l.process(r),c.process(r),u.process(r),d.process(r),m.process(r),p.process(r),h.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(f))},g=Er.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,i=!0,r.isProcessing||e(f)),s.schedule(t,a,o)},t}),{});return{schedule:g,cancel:e=>{for(let t=0;t<Er.length;t++)o[Er[t]].cancel(e)},state:r,steps:o}}const{schedule:Pr,cancel:Tr,state:zr,steps:Ar}=Cr("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:kr,!0),Rr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Dr=(()=>new Set(Rr))(),Mr=new Set(["width","height","top","left","right","bottom",...Rr]);function Lr(e,t){-1===e.indexOf(t)&&e.push(t)}function Or(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _r{constructor(){this.subscriptions=[]}add(e){return Lr(this.subscriptions,e),()=>Or(this.subscriptions,e)}notify(e,t,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](e,t,n);else for(let r=0;r<i;r++){const i=this.subscriptions[r];i&&i(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Nr(e,t){return t?e*(1e3/t):0}let Fr;function Ir(){Fr=void 0}const Vr={now:()=>(void 0===Fr&&Vr.set(zr.isProcessing||$r.useManualTiming?zr.timestamp:performance.now()),Fr),set:e=>{Fr=e,queueMicrotask(Ir)}},Ur={current:void 0};class Br{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=Vr.now();if(t.updatedAt!==i&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&(t.events.change?.notify(t.current),t.dependents))for(const r of t.dependents)r.dirty();n&&t.events.renderRequest?.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Vr.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new _r);const n=this.events[e].add(t);return"change"===e?()=>{n(),Pr.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ur.current&&Ur.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Vr.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Nr(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Hr(e,t){return new Br(e,t)}const qr=e=>Array.isArray(e);function Wr(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Hr(n))}function Yr(e){return qr(e)?e[e.length-1]||0:e}const Kr=e=>Boolean(e&&e.getVelocity);function Gr(e,t){const n=e.getValue("willChange");if(i=n,Boolean(Kr(i)&&i.add))return n.add(t);if(!n&&$r.WillChange){const n=new $r.WillChange("auto");e.addValue("willChange",n),n.add(t)}var i}const Xr=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Qr="data-"+Xr("framerAppearId");function Jr(e){return e.props[Qr]}const Zr=(e,t)=>n=>t(e(n)),ea=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Zr)},ta=(e,t,n)=>n>t?t:n<e?e:n,na=e=>1e3*e,ia=e=>e/1e3,ra={layout:0,mainThread:0,waapi:0};const aa=e=>t=>"string"===typeof t&&t.startsWith(e),oa=aa("--"),sa=aa("var(--"),la=e=>!!sa(e)&&ca.test(e.split("/*")[0].trim()),ca=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ua={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},da={...ua,transform:e=>ta(0,1,e)},ma={...ua,default:1},pa=e=>Math.round(1e5*e)/1e5,ha=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const fa=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ga=(e,t)=>n=>Boolean("string"===typeof n&&fa.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),ya=(e,t,n)=>i=>{if("string"!==typeof i)return i;const[r,a,o,s]=i.match(ha);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},ba={...ua,transform:e=>Math.round((e=>ta(0,255,e))(e))},va={test:ga("rgb","red"),parse:ya("red","green","blue"),transform:e=>{let{red:t,green:n,blue:i,alpha:r=1}=e;return"rgba("+ba.transform(t)+", "+ba.transform(n)+", "+ba.transform(i)+", "+pa(da.transform(r))+")"}};const xa={test:ga("#"),parse:function(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:va.transform},wa=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Sa=wa("deg"),ka=wa("%"),$a=wa("px"),Ea=wa("vh"),ja=wa("vw"),Ca=(()=>({...ka,parse:e=>ka.parse(e)/100,transform:e=>ka.transform(100*e)}))(),Pa={test:ga("hsl","hue"),parse:ya("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:i,alpha:r=1}=e;return"hsla("+Math.round(t)+", "+ka.transform(pa(n))+", "+ka.transform(pa(i))+", "+pa(da.transform(r))+")"}},Ta={test:e=>va.test(e)||xa.test(e)||Pa.test(e),parse:e=>va.test(e)?va.parse(e):Pa.test(e)?Pa.parse(e):xa.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?va.transform(e):Pa.transform(e)},za=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Aa="number",Ra="color",Da=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ma(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let a=0;const o=t.replace(Da,(e=>(Ta.test(e)?(i.color.push(a),r.push(Ra),n.push(Ta.parse(e))):e.startsWith("var(")?(i.var.push(a),r.push("var"),n.push(e)):(i.number.push(a),r.push(Aa),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:i,types:r}}function La(e){return Ma(e).values}function Oa(e){const{split:t,types:n}=Ma(e),i=t.length;return e=>{let r="";for(let a=0;a<i;a++)if(r+=t[a],void 0!==e[a]){const t=n[a];r+=t===Aa?pa(e[a]):t===Ra?Ta.transform(e[a]):e[a]}return r}}const _a=e=>"number"===typeof e?0:e;const Na={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(ha)?.length||0)+(e.match(za)?.length||0)>0},parse:La,createTransformer:Oa,getAnimatableNone:function(e){const t=La(e);return Oa(e)(t.map(_a))}};function Fa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ia(e,t){return n=>n>0?t:e}const Va=(e,t,n)=>e+(t-e)*n,Ua=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},Ba=[xa,va,Pa];function Ha(e){const t=(e=>Ba.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Pa&&(n=function(e){let{hue:t,saturation:n,lightness:i,alpha:r}=e;t/=360,n/=100,i/=100;let a=0,o=0,s=0;if(n){const e=i<.5?i*(1+n):i+n-i*n,r=2*i-e;a=Fa(r,e,t+1/3),o=Fa(r,e,t),s=Fa(r,e,t-1/3)}else a=o=s=i;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:r}}(n)),n}const qa=(e,t)=>{const n=Ha(e),i=Ha(t);if(!n||!i)return Ia(e,t);const r={...n};return e=>(r.red=Ua(n.red,i.red,e),r.green=Ua(n.green,i.green,e),r.blue=Ua(n.blue,i.blue,e),r.alpha=Va(n.alpha,i.alpha,e),va.transform(r))},Wa=new Set(["none","hidden"]);function Ya(e,t){return n=>Va(e,t,n)}function Ka(e){return"number"===typeof e?Ya:"string"===typeof e?la(e)?Ia:Ta.test(e)?qa:Qa:Array.isArray(e)?Ga:"object"===typeof e?Ta.test(e)?qa:Xa:Ia}function Ga(e,t){const n=[...e],i=n.length,r=e.map(((e,n)=>Ka(e)(e,t[n])));return e=>{for(let t=0;t<i;t++)n[t]=r[t](e);return n}}function Xa(e,t){const n={...e,...t},i={};for(const r in n)void 0!==e[r]&&void 0!==t[r]&&(i[r]=Ka(e[r])(e[r],t[r]));return e=>{for(const t in i)n[t]=i[t](e);return n}}const Qa=(e,t)=>{const n=Na.createTransformer(t),i=Ma(e),r=Ma(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Wa.has(e)&&!r.values.length||Wa.has(t)&&!i.values.length?function(e,t){return Wa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):ea(Ga(function(e,t){const n=[],i={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const a=t.types[r],o=e.indexes[a][i[a]],s=e.values[o]??0;n[r]=s,i[a]++}return n}(i,r),r.values),n):Ia(e,t)};function Ja(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Va(e,t,n);return Ka(e)(e,t)}const Za=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Pr.update(t,e)},stop:()=>Tr(t),now:()=>zr.isProcessing?zr.timestamp:Vr.now()}},eo=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i="";const r=Math.max(Math.round(t/n),2);for(let a=0;a<r;a++)i+=e(a/(r-1))+", ";return`linear(${i.substring(0,i.length-2)})`},to=2e4;function no(e){let t=0;let n=e.next(t);for(;!n.done&&t<to;)t+=50,n=e.next(t);return t>=to?1/0:t}function io(e,t,n){const i=Math.max(t-5,0);return Nr(n-e(i),t-i)}const ro={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ao=.001;function oo(e){let t,n,{duration:i=ro.duration,bounce:r=ro.bounce,velocity:a=ro.velocity,mass:o=ro.mass}=e;na(ro.maxDuration);let s=1-r;s=ta(ro.minDamping,ro.maxDamping,s),i=ta(ro.minDuration,ro.maxDuration,ia(i)),s<1?(t=e=>{const t=e*s,n=t*i,r=t-a,o=lo(e,s),l=Math.exp(-n);return ao-r/o*l},n=e=>{const n=e*s*i,r=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*i,l=Math.exp(-n),c=lo(Math.pow(e,2),s);return(-t(e)+ao>0?-1:1)*((r-o)*l)/c}):(t=e=>Math.exp(-e*i)*((e-a)*i+1)-.001,n=e=>Math.exp(-e*i)*(i*i*(a-e)));const l=function(e,t,n){let i=n;for(let r=1;r<so;r++)i-=e(i)/t(i);return i}(t,n,5/i);if(i=na(i),isNaN(l))return{stiffness:ro.stiffness,damping:ro.damping,duration:i};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:i}}}const so=12;function lo(e,t){return e*Math.sqrt(1-t*t)}const co=["duration","bounce"],uo=["stiffness","damping","mass"];function mo(e,t){return t.some((t=>void 0!==e[t]))}function po(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ro.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ro.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:r}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:m,isResolvedFromDuration:p}=function(e){let t={velocity:ro.velocity,stiffness:ro.stiffness,damping:ro.damping,mass:ro.mass,isResolvedFromDuration:!1,...e};if(!mo(e,uo)&&mo(e,co))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(1.2*n),r=i*i,a=2*ta(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:ro.mass,stiffness:r,damping:a}}else{const n=oo(e);t={...t,...n,mass:ro.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-ia(n.velocity||0)}),h=m||0,f=c/(2*Math.sqrt(l*u)),g=o-a,y=ia(Math.sqrt(l/u)),b=Math.abs(g)<5;let v;if(i||(i=b?ro.restSpeed.granular:ro.restSpeed.default),r||(r=b?ro.restDelta.granular:ro.restDelta.default),f<1){const e=lo(y,f);v=t=>{const n=Math.exp(-f*y*t);return o-n*((h+f*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)v=e=>o-Math.exp(-y*e)*(g+(h+y*g)*e);else{const e=y*Math.sqrt(f*f-1);v=t=>{const n=Math.exp(-f*y*t),i=Math.min(e*t,300);return o-n*((h+f*y*g)*Math.sinh(i)+e*g*Math.cosh(i))/e}}const x={calculatedDuration:p&&d||null,next:e=>{const t=v(e);if(p)s.done=e>=d;else{let n=0===e?h:0;f<1&&(n=0===e?na(h):io(v,e,t));const a=Math.abs(n)<=i,l=Math.abs(o-t)<=r;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(no(x),to),t=eo((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function ho(e){let{keyframes:t,velocity:n=0,power:i=.8,timeConstant:r=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const m=t[0],p={done:!1,value:m},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let f=i*n;const g=m+f,y=void 0===s?g:s(g);y!==g&&(f=y-m);const b=e=>-f*Math.exp(-e/r),v=e=>y+b(e),x=e=>{const t=b(e),n=v(e);p.done=Math.abs(t)<=u,p.value=p.done?y:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(p.value)&&(w=e,S=po({keyframes:[p.value,h(p.value)],velocity:io(v,e,p.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,x(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&x(e),p)}}}po.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),i=Math.min(no(n),to);return{type:"keyframes",ease:e=>n.next(i*e).value/t,duration:ia(i)}}(e,100,po);return e.ease=t.ease,e.duration=na(t.duration),e.type="keyframes",e};const fo=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function go(e,t,n,i){if(e===t&&n===i)return kr;const r=t=>function(e,t,n,i,r){let a,o,s=0;do{o=t+(n-t)/2,a=fo(o,i,r)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:fo(r(e),t,i)}const yo=go(.42,0,1,1),bo=go(0,0,.58,1),vo=go(.42,0,.58,1),xo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,wo=e=>t=>1-e(1-t),So=go(.33,1.53,.69,.99),ko=wo(So),$o=xo(ko),Eo=e=>(e*=2)<1?.5*ko(e):.5*(2-Math.pow(2,-10*(e-1))),jo=e=>1-Math.sin(Math.acos(e)),Co=wo(jo),Po=xo(jo),To=e=>Array.isArray(e)&&"number"===typeof e[0],zo={linear:kr,easeIn:yo,easeInOut:vo,easeOut:bo,circIn:jo,circInOut:Po,circOut:Co,backIn:ko,backInOut:$o,backOut:So,anticipate:Eo},Ao=e=>{if(To(e)){e.length;const[t,n,i,r]=e;return go(t,n,i,r)}return"string"===typeof e?zo[e]:e},Ro=(e,t,n)=>{const i=t-e;return 0===i?1:(n-e)/i};function Do(e,t){let{clamp:n=!0,ease:i,mixer:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const i=[],r=n||$r.mix||Ja,a=e.length-1;for(let o=0;o<a;o++){let n=r(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||kr:t;n=ea(e,n)}i.push(n)}return i}(t,i,r),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let i=0;if(l>1)for(;i<e.length-2&&!(n<e[i+1]);i++);const r=Ro(e[i],e[i+1],n);return s[i](r)};return n?t=>c(ta(e[0],e[a-1],t)):c}function Mo(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=Ro(0,t,i);e.push(Va(n,1,r))}}(t,e.length-1),t}function Lo(e){let{duration:t=300,keyframes:n,times:i,ease:r="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(r)?r.map(Ao):Ao(r),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(i&&i.length===n.length?i:Mo(n),t),l=Do(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map((()=>u||vo)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Oo=e=>null!==e;function _o(e,t,n){let{repeat:i,repeatType:r="loop"}=t,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const o=e.filter(Oo),s=a<0||i&&"loop"!==r&&i%2===1?0:o.length-1;return s&&void 0!==n?n:o[s]}const No={decay:ho,inertia:ho,tween:Lo,keyframes:Lo,spring:po};function Fo(e){"string"===typeof e.type&&(e.type=No[e.type])}class Io{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise((e=>{this.resolve=e}))}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Vo=e=>e/100;class Uo extends Io{constructor(e){var t;super(),t=this,this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=function(){if(!(arguments.length>0&&void 0!==arguments[0])||arguments[0]){const{motionValue:e}=t.options;e&&e.updatedAt!==Vr.now()&&t.tick(Vr.now())}t.isStopped=!0,"idle"!==t.state&&(t.teardown(),t.options.onStop?.())},ra.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;Fo(e);const{type:t=Lo,repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:a=0}=e;let{keyframes:o}=e;const s=t||Lo;s!==Lo&&"number"!==typeof o[0]&&(this.mixKeyframes=ea(Vo,Ja(o[0],o[1])),o=[0,100]);const l=s({...e,keyframes:o});"mirror"===r&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=no(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{generator:n,totalDuration:i,mixKeyframes:r,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:m,type:p,onUpdate:h,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=i);let b=this.currentTime,v=n;if(u){const e=Math.min(this.currentTime,i)/o;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,u+1);Boolean(t%2)&&("reverse"===d?(n=1-n,m&&(n-=m/o)):"mirror"===d&&(v=a)),b=ta(0,1,n)*o}const x=y?{done:!1,value:c[0]}:v.next(b);r&&(x.value=r(x.value));let{done:w}=x;y||null===s||(w=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&p!==ho&&(x.value=_o(c,this.options,f,this.speed)),h&&h(x.value),S&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return ia(this.calculatedDuration)}get time(){return ia(this.currentTime)}set time(e){e=na(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Vr.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ia(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Za,startTime:t}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vr.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,ra.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}const Bo=e=>180*e/Math.PI,Ho=e=>{const t=Bo(Math.atan2(e[1],e[0]));return Wo(t)},qo={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ho,rotateZ:Ho,skewX:e=>Bo(Math.atan(e[1])),skewY:e=>Bo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Wo=e=>((e%=360)<0&&(e+=360),e),Yo=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ko=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Go={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Yo,scaleY:Ko,scale:e=>(Yo(e)+Ko(e))/2,rotateX:e=>Wo(Bo(Math.atan2(e[6],e[5]))),rotateY:e=>Wo(Bo(Math.atan2(-e[2],e[0]))),rotateZ:Ho,rotate:Ho,skewX:e=>Bo(Math.atan(e[4])),skewY:e=>Bo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Xo(e){return e.includes("scale")?1:0}function Qo(e,t){if(!e||"none"===e)return Xo(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Go,r=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=qo,r=t}if(!r)return Xo(t);const a=i[t],o=r[1].split(",").map(Jo);return"function"===typeof a?a(o):o[a]}function Jo(e){return parseFloat(e.trim())}const Zo=e=>e===ua||e===$a,es=new Set(["x","y","z"]),ts=Rr.filter((e=>!es.has(e)));const ns={width:(e,t)=>{let{x:n}=e,{paddingLeft:i="0",paddingRight:r="0"}=t;return n.max-n.min-parseFloat(i)-parseFloat(r)},height:(e,t)=>{let{y:n}=e,{paddingTop:i="0",paddingBottom:r="0"}=t;return n.max-n.min-parseFloat(i)-parseFloat(r)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:i}=t;return parseFloat(i)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:i}=t;return parseFloat(i)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Qo(n,"x")},y:(e,t)=>{let{transform:n}=t;return Qo(n,"y")}};ns.translateX=ns.x,ns.translateY=ns.y;const is=new Set;let rs=!1,as=!1,os=!1;function ss(){if(as){const e=Array.from(is).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return ts.forEach((n=>{const i=e.getValue(n);void 0!==i&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,i]=t;e.getValue(n)?.set(i)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}as=!1,rs=!1,is.forEach((e=>e.complete(os))),is.clear()}function ls(){is.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(as=!0)}))}class cs{constructor(e,t,n,i,r){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=i,this.element=r,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(is.add(this),rs||(rs=!0,Pr.read(ls),Pr.resolveKeyframes(ss))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:i}=this;if(null===e[0]){const r=i?.get(),a=e[e.length-1];if(void 0!==r)e[0]=r;else if(n&&t){const i=n.readValue(t,a);void 0!==i&&null!==i&&(e[0]=i)}void 0===e[0]&&(e[0]=a),i&&void 0===r&&i.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),is.delete(this)}cancel(){"scheduled"===this.state&&(is.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function us(e){let t;return()=>(void 0===t&&(t=e()),t)}const ds=us((()=>void 0!==window.ScrollTimeline)),ms={};function ps(e,t){const n=us(e);return()=>ms[t]??n()}const hs=ps((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Db){return!1}return!0}),"linearEasing"),fs=e=>{let[t,n,i,r]=e;return`cubic-bezier(${t}, ${n}, ${i}, ${r})`},gs={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fs([0,.65,.55,1]),circOut:fs([.55,0,1,.45]),backIn:fs([.31,.01,.66,-.59]),backOut:fs([.33,1.53,.69,.99])};function ys(e,t){return e?"function"===typeof e?hs()?eo(e,t):"ease-out":To(e)?fs(e):Array.isArray(e)?e.map((e=>ys(e,t)||gs.easeOut)):gs[e]:void 0}function bs(e,t,n){let{delay:i=0,duration:r=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=ys(s,r);Array.isArray(d)&&(u.easing=d),jr.value&&ra.waapi++;const m={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"};c&&(m.pseudoElement=c);const p=e.animate(u,m);return jr.value&&p.finished.finally((()=>{ra.waapi--})),p}function vs(e){return"function"===typeof e&&"applyToOptions"in e}class xs extends Io{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:i,pseudoElement:r,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=Boolean(r),this.allowFlatten=a,this.options=e,e.type;const l=function(e){let{type:t,...n}=e;return vs(t)&&hs()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}(e);this.animation=bs(t,n,i,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const e=_o(i,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(Db){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return ia(Number(e))}get time(){return ia(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=na(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline(e){let{timeline:t,observe:n}=e;return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&ds()?(this.animation.timeline=t,kr):n(this)}}const ws={anticipate:Eo,backInOut:$o,circInOut:Po};function Ss(e){"string"===typeof e.ease&&e.ease in ws&&(e.ease=ws[e.ease])}class ks extends xs{constructor(e){Ss(e),Fo(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:i,element:r,...a}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const o=new Uo({...a,autoplay:!1}),s=na(this.finishedTime??this.time);t.setWithVelocity(o.sample(s-10).value,o.sample(s).value,10),o.stop()}}const $s=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Na.test(e)&&"0"!==e||e.startsWith("url(")));const Es=new Set(["opacity","clipPath","filter","transform"]),js=us((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class Cs extends Io{constructor(e){let{autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:o="loop",keyframes:s,name:l,motionValue:c,element:u,...d}=e;super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Vr.now();const m={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:a,repeatType:o,name:l,motionValue:c,element:u,...d},p=u?.KeyframeResolver||cs;this.keyframeResolver=new p(s,((e,t,n)=>this.onKeyframesResolved(e,t,m,!n)),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,i){this.keyframeResolver=void 0;const{name:r,type:a,velocity:o,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=Vr.now(),function(e,t,n,i){const r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=$s(r,t),s=$s(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||vs(n))&&i)}(e,r,a,o)||(!$r.instantAnimations&&s||c?.(_o(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0);const u={startTime:i?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!l&&function(e){const{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:a,type:o}=e;if(!sr(t?.owner?.current))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return js()&&n&&Es.has(n)&&("transform"!==n||!l)&&!s&&!i&&"mirror"!==r&&0!==a&&"inertia"!==o}(u)?new ks({...u,element:u.motionValue.owner.current}):new Uo(u);d.finished.then((()=>this.notifyFinished())).catch(kr),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then((()=>{}))}get animation(){return this._animation||(this.keyframeResolver?.resume(),os=!0,ls(),ss(),os=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Ps=e=>null!==e;const Ts={type:"spring",stiffness:500,damping:25,restSpeed:10},zs={type:"keyframes",duration:.8},As={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Rs=(e,t)=>{let{keyframes:n}=t;return n.length>2?zs:Dr.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Ts:As};const Ds=function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Sr(i,e)||{},l=s.delay||i.delay||0;let{elapsed:c=0}=i;c-=na(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:r};(function(e){let{when:t,delay:n,delayChildren:i,staggerChildren:r,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||Object.assign(u,Rs(e,u)),u.duration&&(u.duration=na(u.duration)),u.repeatDelay&&(u.repeatDelay=na(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),($r.instantAnimations||$r.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=function(e,t,n){let{repeat:i,repeatType:r="loop"}=t;const a=e.filter(Ps),o=i&&"loop"!==r&&i%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}(u.keyframes,s);if(void 0!==e)return void Pr.update((()=>{u.onUpdate(e),u.onComplete()}))}return s.isSync?new Uo(u):new Cs(u)}};function Ms(e,t){let{protectedKeys:n,needsAnimating:i}=e;const r=n.hasOwnProperty(t)&&!0!==i[t];return i[t]=!1,r}function Ls(e,t){let{delay:n=0,transitionOverride:i,type:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;i&&(a=i);const l=[],c=r&&e.animationState&&e.animationState.getState()[r];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),i=s[u];if(void 0===i||c&&Ms(c,u))continue;const r={delay:n,...Sr(a||{},u)},o=t.get();if(void 0!==o&&!t.isAnimating&&!Array.isArray(i)&&i===o&&!r.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const t=Jr(e);if(t){const e=window.MotionHandoffAnimation(t,u,Pr);null!==e&&(r.startTime=e,d=!0)}}Gr(e,u),t.start(Ds(u,t,i,e.shouldReduceMotion&&Mr.has(u)?{type:!1}:r,e,d));const m=t.animation;m&&l.push(m)}return o&&Promise.all(l).then((()=>{Pr.update((()=>{o&&function(e,t){const n=wr(e,t);let{transitionEnd:i={},transition:r={},...a}=n||{};a={...a,...i};for(const o in a)Wr(e,o,Yr(a[o]))}(e,o)}))})),l}function Os(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=wr(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const a=i?()=>Promise.all(Ls(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=r;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*i,l=1===r?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i};return Array.from(e.variantChildren).sort(_s).forEach(((e,i)=>{e.notify("AnimationStart",t),o.push(Os(e,t,{...a,delay:n+l(i)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+i,o,s,n)}:()=>Promise.resolve(),{when:s}=r;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(n.delay)])}function _s(e,t){return e.sortNodePosition(t)}function Ns(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Fs(e){return"string"===typeof e||Array.isArray(e)}const Is=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vs=["initial",...Is],Us=Vs.length;function Bs(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Bs(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Us;n++){const i=Vs[n],r=e.props[i];(Fs(r)||!1===r)&&(t[i]=r)}return t}const Hs=[...Is].reverse(),qs=Is.length;function Ws(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:i}=t;return function(e,t){let n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const r=t.map((t=>Os(e,t,i)));n=Promise.all(r)}else if("string"===typeof t)n=Os(e,t,i);else{const r="function"===typeof t?wr(e,t,i.custom):t;n=Promise.all(Ls(e,r,i))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,i)})))}function Ys(e){let t=Ws(e),n=Xs(),i=!0;const r=t=>(n,i)=>{const r=wr(e,i,"exit"===t?e.presenceContext?.custom:void 0);if(r){const{transition:e,transitionEnd:t,...i}=r;n={...n,...i,...t}}return n};function a(a){const{props:o}=e,s=Bs(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<qs;t++){const m=Hs[t],p=n[m],h=void 0!==o[m]?o[m]:s[m],f=Fs(h),g=m===a?p.isActive:null;!1===g&&(d=t);let y=h===s[m]&&h!==o[m]&&f;if(y&&i&&e.manuallyAnimateOnMount&&(y=!1),p.protectedKeys={...u},!p.isActive&&null===g||!h&&!p.prevProp||br(h)||"boolean"===typeof h)continue;const b=Ks(p.prevProp,h);let v=b||m===a&&p.isActive&&!y&&f||t>d&&f,x=!1;const w=Array.isArray(h)?h:[h];let S=w.reduce(r(m),{});!1===g&&(S={});const{prevResolvedValues:k={}}=p,$={...k,...S},E=t=>{v=!0,c.has(t)&&(x=!0,c.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in $){const t=S[e],n=k[e];if(u.hasOwnProperty(e))continue;let i=!1;i=qr(t)&&qr(n)?!Ns(t,n):t!==n,i?void 0!==t&&null!==t?E(e):c.add(e):void 0!==t&&c.has(e)?E(e):p.protectedKeys[e]=!0}p.prevProp=h,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),i&&e.blockInitialAnimation&&(v=!1);v&&(!(y&&b)||x)&&l.push(...w.map((e=>({animation:e,options:{type:m}}))))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=wr(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const i=e.getBaseTarget(n),r=e.getValue(n);r&&(r.liveStyle=!0),t[n]=i??null})),l.push({animation:t})}let m=Boolean(l.length);return!i||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(m=!1),i=!1,m?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,i){if(n[t].isActive===i)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,i))),n[t].isActive=i;const r=a(t);for(const e in n)n[e].protectedKeys={};return r},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=Xs(),i=!0}}}function Ks(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Ns(t,e)}function Gs(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xs(){return{animate:Gs(!0),whileInView:Gs(),whileHover:Gs(),whileTap:Gs(),whileDrag:Gs(),whileFocus:Gs(),exit:Gs()}}class Qs{constructor(e){this.isMounted=!1,this.node=e}update(){}}let Js=0;const Zs={animation:{Feature:class extends Qs{constructor(e){super(e),e.animationState||(e.animationState=Ys(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();br(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Qs{constructor(){super(...arguments),this.id=Js++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const i=this.node.animationState.setActive("exit",!e);t&&!e&&i.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},el={x:!1,y:!1};function tl(){return el.x||el.y}function nl(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const il=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function rl(e){return{point:{x:e.pageX,y:e.pageY}}}function al(e,t,n,i){return nl(e,t,(e=>t=>il(t)&&e(t,rl(t)))(n),i)}function ol(e){let{top:t,left:n,right:i,bottom:r}=e;return{x:{min:n,max:i},y:{min:t,max:r}}}function sl(e){return e.max-e.min}function ll(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=i,e.originPoint=Va(t.min,t.max,e.origin),e.scale=sl(n)/sl(t),e.translate=Va(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function cl(e,t,n,i){ll(e.x,t.x,n.x,i?i.originX:void 0),ll(e.y,t.y,n.y,i?i.originY:void 0)}function ul(e,t,n){e.min=n.min+t.min,e.max=e.min+sl(t)}function dl(e,t,n){e.min=t.min-n.min,e.max=e.min+sl(t)}function ml(e,t,n){dl(e.x,t.x,n.x),dl(e.y,t.y,n.y)}const pl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function hl(e){return[e("x"),e("y")]}function fl(e){return void 0===e||1===e}function gl(e){let{scale:t,scaleX:n,scaleY:i}=e;return!fl(t)||!fl(n)||!fl(i)}function yl(e){return gl(e)||bl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function bl(e){return vl(e.x)||vl(e.y)}function vl(e){return e&&"0%"!==e}function xl(e,t,n){return n+t*(e-n)}function wl(e,t,n,i,r){return void 0!==r&&(e=xl(e,r,i)),xl(e,n,i)+t}function Sl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;e.min=wl(e.min,t,n,i,r),e.max=wl(e.max,t,n,i,r)}function kl(e,t){let{x:n,y:i}=t;Sl(e.x,n.translate,n.scale,n.originPoint),Sl(e.y,i.translate,i.scale,i.originPoint)}const $l=.999999999999,El=1.0000000000001;function jl(e,t){e.min=e.min+t,e.max=e.max+t}function Cl(e,t,n,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Sl(e,t,n,Va(e.min,e.max,r),i)}function Pl(e,t){Cl(e.x,t.x,t.scaleX,t.scale,t.originX),Cl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Tl(e,t){return ol(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(e.getBoundingClientRect(),t))}const zl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Al(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Rl=(e,t)=>Math.abs(e-t);class Dl{constructor(e,t){let{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ol(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Rl(e.x,t.x),i=Rl(e.y,t.y);return Math.sqrt(n**2+i**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:i}=e,{timestamp:r}=zr;this.history.push({...i,timestamp:r});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ml(t,this.transformPagePoint),Pr.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Ol("pointercancel"===e.type?this.lastMoveEventInfo:Ml(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),i&&i(e,a)},!il(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=n,this.contextWindow=i||window;const a=Ml(rl(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=zr;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Ol(a,this.history)),this.removeListeners=ea(al(this.contextWindow,"pointermove",this.handlePointerMove),al(this.contextWindow,"pointerup",this.handlePointerUp),al(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Tr(this.updatePoint)}}function Ml(e,t){return t?{point:t(e.point)}:e}function Ll(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ol(e,t){let{point:n}=e;return{point:n,delta:Ll(n,Nl(t)),offset:Ll(n,_l(t)),velocity:Fl(t,.1)}}function _l(e){return e[0]}function Nl(e){return e[e.length-1]}function Fl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=Nl(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>na(t)));)n--;if(!i)return{x:0,y:0};const a=ia(r.timestamp-i.timestamp);if(0===a)return{x:0,y:0};const o={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Il(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Vl(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}const Ul=.35;function Bl(e,t,n){return{min:Hl(e,t),max:Hl(e,n)}}function Hl(e,t){return"number"===typeof e?e:e[t]||0}const ql=new WeakMap;class Wl{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new Dl(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(rl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:i,onDragStart:r}=this.getProps();if(n&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?el[a]?null:(el[a]=!0,()=>{el[a]=!1}):el.x||el.y?null:(el.x=el.y=!0,()=>{el.x=el.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hl((e=>{let t=this.getAxisMotionValue(e).get()||0;if(ka.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[e];if(i){t=sl(i)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),r&&Pr.postRender((()=>r(e,t))),Gr(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(i&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&r&&r(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>hl((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:zl(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=t;this.startAnimation(i);const{onDragEnd:r}=this.getProps();r&&Pr.postRender((()=>r(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:i}=this.getProps();if(!n||!Yl(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:i,max:r}=t;return void 0!==i&&e<i?e=n?Va(i,e,n.min):Math.max(e,i):void 0!==r&&e>r&&(e=n?Va(r,e,n.max):Math.min(e,r)),e}(a,this.constraints[e],this.elastic[e])),r.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;e&&Al(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:i,bottom:r,right:a}=t;return{x:Il(e.x,i,a),y:Il(e.y,n,r)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ul;return!1===e?e=0:!0===e&&(e=Ul),{x:Bl(e,"left","right"),y:Bl(e,"top","bottom")}}(t),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&hl((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Al(e))return!1;const n=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=function(e,t,n){const i=Tl(e,n),{scroll:r}=t;return r&&(jl(i.x,r.offset.x),jl(i.y,r.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:Vl(e.x,t.x),y:Vl(e.y,t.y)}}(i.layout.layoutBox,r);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=ol(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=hl((o=>{if(!Yl(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=i?200:1e6,u=i?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Gr(this.visualElement,e),n.start(Ds(e,n,0,t,this.visualElement,!1))}stopAnimation(){hl((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){hl((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),i=n[t];return i||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){hl((t=>{const{drag:n}=this.getProps();if(!Yl(t,n,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(t);if(i&&i.layout){const{min:n,max:a}=i.layout.layoutBox[t];r.set(e[t]-Va(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Al(t)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};hl((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();i[e]=function(e,t){let n=.5;const i=sl(e),r=sl(t);return r>i?n=Ro(t.min,t.max-i,e.min):i>r&&(n=Ro(e.min,e.max-r,t.min)),ta(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),hl((t=>{if(!Yl(t,e,null))return;const n=this.getAxisMotionValue(t),{min:r,max:a}=this.constraints[t];n.set(Va(r,a,i[t]))}))}addListeners(){if(!this.visualElement.current)return;ql.set(this.visualElement,this);const e=al(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Al(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),Pr.read(t);const r=nl(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(hl((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{r(),e(),i(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:a=Ul,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:a,dragMomentum:o}}}function Yl(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Kl=e=>(t,n)=>{e&&Pr.postRender((()=>e(t,n)))};const{schedule:Gl,cancel:Xl}=Cr(queueMicrotask,!1),Ql=(0,e.createContext)({}),Jl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zl(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ec={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!$a.test(e))return e;e=parseFloat(e)}return`${Zl(e,t.target.x)}% ${Zl(e,t.target.y)}%`}},tc={correct:(e,t)=>{let{treeScale:n,projectionDelta:i}=t;const r=e,a=Na.parse(e);if(a.length>5)return r;const o=Na.createTransformer(e),s="number"!==typeof a[0]?1:0,l=i.x.scale*n.x,c=i.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=Va(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}},nc={};class ic extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=e;!function(e){for(const t in e)nc[t]=e[t],oa(t)&&(nc[t].isCSSVariable=!0)}(ac),r&&(t.group&&t.group.add(r),n&&n.register&&i&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Jl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:i,isPresent:r}=this.props,{projection:a}=n;return a?(a.isPresent=r,i||e.layoutDependency!==t||void 0===t||e.isPresent!==r?a.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?a.promote():a.relegate()||Pr.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Gl.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rc(t){const[n,i]=pr(),r=(0,e.useContext)(tr);return(0,er.jsx)(ic,{...t,layoutGroup:r,switchLayoutGroup:(0,e.useContext)(Ql),isPresent:n,safeToRemove:i})}const ac={borderRadius:{...ec,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ec,borderTopRightRadius:ec,borderBottomLeftRadius:ec,borderBottomRightRadius:ec,boxShadow:tc};function oc(e){return or(e)&&"ownerSVGElement"in e}const sc=(e,t)=>e.depth-t.depth;class lc{constructor(){this.children=[],this.isDirty=!1}add(e){Lr(this.children,e),this.isDirty=!0}remove(e){Or(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(sc),this.isDirty=!1,this.children.forEach(e)}}function cc(e,t){const n=Vr.now(),i=r=>{let{timestamp:a}=r;const o=a-n;o>=t&&(Tr(i),e(o-t))};return Pr.setup(i,!0),()=>Tr(i)}function uc(e){return Kr(e)?e.get():e}const dc=["TopLeft","TopRight","BottomLeft","BottomRight"],mc=dc.length,pc=e=>"string"===typeof e?parseFloat(e):e,hc=e=>"number"===typeof e||$a.test(e);function fc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const gc=bc(0,.5,Co),yc=bc(.5,.95,kr);function bc(e,t,n){return i=>i<e?0:i>t?1:n(Ro(e,t,i))}function vc(e,t){e.min=t.min,e.max=t.max}function xc(e,t){vc(e.x,t.x),vc(e.y,t.y)}function wc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Sc(e,t,n,i,r){return e=xl(e-=t,1/n,i),void 0!==r&&(e=xl(e,1/r,i)),e}function kc(e,t,n,i,r){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;ka.test(t)&&(t=parseFloat(t),t=Va(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=Va(a.min,a.max,i);e===a&&(s-=t),e.min=Sc(e.min,t,n,s,r),e.max=Sc(e.max,t,n,s,r)}(e,t[a],t[o],t[s],t.scale,i,r)}const $c=["x","scaleX","originX"],Ec=["y","scaleY","originY"];function jc(e,t,n,i){kc(e.x,t,$c,n?n.x:void 0,i?i.x:void 0),kc(e.y,t,Ec,n?n.y:void 0,i?i.y:void 0)}function Cc(e){return 0===e.translate&&1===e.scale}function Pc(e){return Cc(e.x)&&Cc(e.y)}function Tc(e,t){return e.min===t.min&&e.max===t.max}function zc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ac(e,t){return zc(e.x,t.x)&&zc(e.y,t.y)}function Rc(e){return sl(e.x)/sl(e.y)}function Dc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Mc{constructor(){this.members=[]}add(e){Lr(this.members,e),e.scheduleRender()}remove(e){if(Or(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let i=t;i>=0;i--){const e=this.members[i];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Lc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Oc=["","X","Y","Z"],_c={visibility:"hidden"};let Nc=0;function Fc(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function Ic(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Jr(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Pr,!(t||i))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&Ic(i)}function Vc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:r,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=Nc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,jr.value&&(Lc.nodes=Lc.calculatedTargetDeltas=Lc.calculatedProjections=0),this.nodes.forEach(Hc),this.nodes.forEach(Qc),this.nodes.forEach(Jc),this.nodes.forEach(qc),jr.addProjectionMetrics&&jr.addProjectionMetrics(Lc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new lc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new _r),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];t&&t.notify(...i)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){if(this.instance)return;var n;this.isSVG=oc(e)&&!(oc(n=e)&&"svg"===n.tagName),this.instance=e;const{layoutId:i,layout:r,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||i)&&(this.isLayoutDirty=!0),t){let n;const i=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=cc(i,250),Jl.hasAnimatedSinceResize&&(Jl.hasAnimatedSinceResize=!1,this.nodes.forEach(Xc))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||r)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:i,layout:r}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||ru,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!Ac(this.targetLayout,r),u=!n&&i;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...Sr(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Xc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Tr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Zc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ic(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let r=0;r<this.path.length;r++){const e=this.path[r];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Yc);this.isUpdating||this.nodes.forEach(Kc),this.isUpdating=!1,this.nodes.forEach(Gc),this.nodes.forEach(Uc),this.nodes.forEach(Bc),this.clearAllSnapshots();const e=Vr.now();zr.delta=ta(0,1e3/60,e-zr.timestamp),zr.timestamp=e,zr.isProcessing=!0,Ar.update.process(zr),Ar.preRender.process(zr),Ar.render.process(zr),zr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Wc),this.sharedNodes.forEach(eu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Pr.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Pr.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||sl(this.snapshot.measuredBox.x)||sl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Pc(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,r=i!==this.prevTransformTemplateValue;e&&this.instance&&(t||yl(this.latestValues)||r)&&(a(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var i;return e&&(n=this.removeTransform(n)),su((i=n).x),su(i.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(cu))){const{scroll:e}=this.root;e&&(jl(t.x,e.offset.x),jl(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(xc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const i=this.path[n],{scroll:r,options:a}=i;i!==this.root&&r&&a.layoutScroll&&(r.wasRoot&&xc(t,e),jl(t.x,r.offset.x),jl(t.y,r.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};xc(n,e);for(let i=0;i<this.path.length;i++){const e=this.path[i];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Pl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),yl(e.latestValues)&&Pl(n,e.latestValues)}return yl(this.latestValues)&&Pl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};xc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!yl(e.latestValues))continue;gl(e.latestValues)&&e.updateSnapshot();const i={x:{min:0,max:0},y:{min:0,max:0}};xc(i,e.measurePageBox()),jc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,i)}return yl(this.latestValues)&&jc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==zr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:r}=this.options;if(this.layout&&(i||r)){if(this.resolvedRelativeTargetAt=zr.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ml(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),xc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,ul(a.x,o.x,s.x),ul(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):xc(this.target,this.layout.layoutBox),kl(this.target,this.targetDelta)):xc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ml(this.relativeTargetOrigin,this.target,e.target),xc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}jr.value&&Lc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!gl(this.parent.latestValues)&&!bl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===zr.timestamp&&(n=!1),n)return;const{layout:i,layoutId:r}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!r)return;xc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=n.length;if(!r)return;let a,o;t.x=t.y=1;for(let s=0;s<r;s++){a=n[s],o=a.projectionDelta;const{visualElement:r}=a.options;r&&r.props.style&&"contents"===r.props.style.display||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Pl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,kl(e,o)),i&&yl(a.latestValues)&&Pl(e,a.latestValues))}t.x<El&&t.x>$l&&(t.x=1),t.y<El&&t.y>$l&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(wc(this.prevProjectionDelta.x,this.projectionDelta.x),wc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),cl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&Dc(this.projectionDelta.x,this.prevProjectionDelta.x)&&Dc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),jr.value&&Lc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,i=n?n.latestValues:{},r={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(iu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;tu(a.x,e.x,n),tu(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ml(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,i){nu(e.x,t.x,n.x,i),nu(e.y,t.y,n.y,i)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Tc(e.x,t.x)&&Tc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),xc(d,this.relativeTarget)),s&&(this.animationValues=r,function(e,t,n,i,r,a){r?(e.opacity=Va(0,n.opacity??1,gc(i)),e.opacityExit=Va(t.opacity??1,0,yc(i))):a&&(e.opacity=Va(t.opacity??1,n.opacity??1,i));for(let o=0;o<mc;o++){const r=`border${dc[o]}Radius`;let a=fc(t,r),s=fc(n,r);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||hc(a)===hc(s)?(e[r]=Math.max(Va(pc(a),pc(s),i),0),(ka.test(s)||ka.test(a))&&(e[r]+="%")):e[r]=s)}(t.rotate||n.rotate)&&(e.rotate=Va(t.rotate||0,n.rotate||0,i))}(r,i,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(!1),this.resumingFrom?.currentAnimation?.stop(!1),this.pendingAnimation&&(Tr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Pr.update((()=>{Jl.hasAnimatedSinceResize=!0,ra.layout++,this.motionValue||(this.motionValue=Hr(0)),this.currentAnimation=function(e,t,n){const i=Kr(e)?e:Hr(e);return i.start(Ds("",i,t,n)),i.animation}(this.motionValue,[0,1e3],{...e,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ra.layout--},onComplete:()=>{ra.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:i,latestValues:r}=e;if(t&&n&&i){if(this!==e&&this.layout&&i&&lu(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=sl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const i=sl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+i}xc(t,n),Pl(t,r),cl(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Mc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=this.getStack();i&&i.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const i={};n.z&&Fc("z",e,i,this.animationValues);for(let r=0;r<Oc.length;r++)Fc(`rotate${Oc[r]}`,e,i,this.animationValues),Fc(`skew${Oc[r]}`,e,i,this.animationValues);e.render();for(const r in i)e.setStaticValue(r,i[r]),this.animationValues&&(this.animationValues[r]=i[r]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return _c;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=uc(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=uc(e?.pointerEvents)||""),this.hasProjected&&!yl(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const r=i.animationValues||i.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((r||a||o)&&(i=`translate3d(${r}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:r,rotateY:a,skewX:o,skewY:s}=n;e&&(i=`perspective(${e}px) ${i}`),t&&(i+=`rotate(${t}deg) `),r&&(i+=`rotateX(${r}deg) `),a&&(i+=`rotateY(${a}deg) `),o&&(i+=`skewX(${o}deg) `),s&&(i+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(i+=`scale(${s}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,r),n&&(t.transform=n(r,t.transform));const{x:a,y:o}=this.projectionDelta;t.transformOrigin=`${100*a.origin}% ${100*o.origin}% 0`,i.animationValues?t.opacity=i===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:t.opacity=i===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0;for(const s in nc){if(void 0===r[s])continue;const{correct:e,applyTo:n,isCSSVariable:a}=nc[s],o="none"===t.transform?r[s]:e(r[s],i);if(n){const e=n.length;for(let i=0;i<e;i++)t[n[i]]=o}else a?this.options.visualElement.renderState.vars[s]=o:t[s]=o}return this.options.layoutId&&(t.pointerEvents=i===this?uc(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop(!1))),this.root.nodes.forEach(Yc),this.root.sharedNodes.clear()}}}function Uc(e){e.updateLayout()}function Bc(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=e.layout,{animationType:r}=e.options,a=t.source!==e.layout.source;"size"===r?hl((e=>{const i=a?t.measuredBox[e]:t.layoutBox[e],r=sl(i);i.min=n[e].min,i.max=i.min+r})):lu(r,t.layoutBox,n)&&hl((i=>{const r=a?t.measuredBox[i]:t.layoutBox[i],o=sl(n[i]);r.max=r.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[i].max=e.relativeTarget[i].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};cl(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?cl(s,e.applyTransform(i,!0),t.measuredBox):cl(s,n,t.layoutBox);const l=!Pc(o);let c=!1;if(!e.resumeFrom){const i=e.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:r,layout:a}=i;if(r&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};ml(o,t.layoutBox,r.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};ml(s,n,a.layoutBox),Ac(o,s)||(c=!0),i.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=i)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Hc(e){jr.value&&Lc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Wc(e){e.clearSnapshot()}function Yc(e){e.clearMeasurements()}function Kc(e){e.isLayoutDirty=!1}function Gc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Qc(e){e.resolveTargetDelta()}function Jc(e){e.calcProjection()}function Zc(e){e.resetSkewAndRotation()}function eu(e){e.removeLeadSnapshot()}function tu(e,t,n){e.translate=Va(t.translate,0,n),e.scale=Va(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function nu(e,t,n,i){e.min=Va(t.min,n.min,i),e.max=Va(t.max,n.max,i)}function iu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const ru={duration:.45,ease:[.4,0,.1,1]},au=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ou=au("applewebkit/")&&!au("chrome/")?Math.round:kr;function su(e){e.min=ou(e.min),e.max=ou(e.max)}function lu(e,t,n){return"position"===e||"preserve-aspect"===e&&(i=Rc(t),r=Rc(n),a=.2,!(Math.abs(i-r)<=a));var i,r,a}function cu(e){return e!==e.root&&e.scroll?.wasRoot}const uu=Vc({attachResizeListener:(e,t)=>nl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),du={current:void 0},mu=Vc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!du.current){const e=new uu({});e.mount(window),e.setOptions({layoutScroll:!0}),du.current=e}return du.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),pu={pan:{Feature:class extends Qs{constructor(){super(...arguments),this.removePointerDownListener=kr}onPointerDown(e){this.session=new Dl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:zl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Kl(e),onStart:Kl(t),onMove:n,onEnd:(e,t)=>{delete this.session,i&&Pr.postRender((()=>i(e,t)))}}}mount(){this.removePointerDownListener=al(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Qs{constructor(e){super(e),this.removeGroupControls=kr,this.removeListeners=kr,this.controls=new Wl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||kr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:mu,MeasureLayout:rc}};function hu(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let i=document;t&&(i=t.current);const r=n?.[e]??i.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}(e),i=new AbortController;return[n,{passive:!0,...t,signal:i.signal},()=>i.abort()]}function fu(e){return!("touch"===e.pointerType||tl())}function gu(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover","Start"===n);const r=i["onHover"+n];r&&Pr.postRender((()=>r(t,rl(t))))}const yu=(e,t)=>!!t&&(e===t||yu(e,t.parentElement)),bu=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const vu=new WeakSet;function xu(e){return t=>{"Enter"===t.key&&e(t)}}function wu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Su(e){return il(e)&&!tl()}function ku(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[i,r,a]=hu(e,n),o=e=>{const i=e.currentTarget;if(!Su(e))return;vu.add(i);const a=t(i,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),vu.has(i)&&vu.delete(i),Su(e)&&"function"===typeof a&&a(e,{success:t})},s=e=>{o(e,i===window||i===document||n.useGlobalTarget||yu(i,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,r),window.addEventListener("pointercancel",l,r)};return i.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,r),sr(e)&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const i=xu((()=>{if(vu.has(n))return;wu(n,"down");const e=xu((()=>{wu(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>wu(n,"cancel")),t)}));n.addEventListener("keydown",i,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",i)),t)})(e,r))),t=e,bu.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),a}function $u(e,t,n){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap","Start"===n);const r=i["onTap"+("End"===n?"":n)];r&&Pr.postRender((()=>r(t,rl(t))))}const Eu=new WeakMap,ju=new WeakMap,Cu=e=>{const t=Eu.get(e.target);t&&t(e)},Pu=e=>{e.forEach(Cu)};function Tu(e,t,n){const i=function(e){let{root:t,...n}=e;const i=t||document;ju.has(i)||ju.set(i,{});const r=ju.get(i),a=JSON.stringify(n);return r[a]||(r[a]=new IntersectionObserver(Pu,{root:t,...n})),r[a]}(t);return Eu.set(e,n),i.observe(e),()=>{Eu.delete(e),i.unobserve(e)}}const zu={some:0,all:1};const Au={inView:{Feature:class extends Qs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:i="some",once:r}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof i?i:zu[i]};return Tu(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,r&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),a=t?n:i;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Qs{mount(){const{current:e}=this.node;e&&(this.unmount=ku(e,((e,t)=>($u(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return $u(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Qs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Db){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ea(nl(this.node.current,"focus",(()=>this.onFocus())),nl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Qs{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[i,r,a]=hu(e,n),o=e=>{if(!fu(e))return;const{target:n}=e,i=t(n,e);if("function"!==typeof i||!n)return;const a=e=>{fu(e)&&(i(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,r)};return i.forEach((e=>{e.addEventListener("pointerenter",o,r)})),a}(e,((e,t)=>(gu(this.node,t,"Start"),e=>gu(this.node,e,"End")))))}unmount(){}}}},Ru={layout:{ProjectionNode:mu,MeasureLayout:rc}},Du=(0,e.createContext)({strict:!1}),Mu=(0,e.createContext)({});function Lu(e){return br(e.animate)||Vs.some((t=>Fs(e[t])))}function Ou(e){return Boolean(Lu(e)||e.variants)}function _u(t){const{initial:n,animate:i}=function(e,t){if(Lu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Fs(t)?t:void 0,animate:Fs(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Mu));return(0,e.useMemo)((()=>({initial:n,animate:i})),[Nu(n),Nu(i)])}function Nu(e){return Array.isArray(e)?e.join(" "):e}const Fu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Iu={};for(const n in Fu)Iu[n]={isEnabled:e=>Fu[n].some((t=>!!e[t]))};const Vu=Symbol.for("motionComponentSymbol");function Uu(t,n,i){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),i&&("function"===typeof i?i(e):Al(i)&&(i.current=e))}),[n])}function Bu(t,n,i,r,a){const{visualElement:o}=(0,e.useContext)(Mu),s=(0,e.useContext)(Du),l=(0,e.useContext)(ar),c=(0,e.useContext)(lr).reducedMotion,u=(0,e.useRef)(null);r=r||s.renderer,!u.current&&r&&(u.current=r(t,{visualState:n,parent:o,props:i,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,m=(0,e.useContext)(Ql);!d||d.projection||!a||"html"!==d.type&&"svg"!==d.type||function(e,t,n,i){const{layoutId:r,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Hu(e.parent)),e.projection.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Al(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,i,a,m);const p=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&p.current&&d.update(i,l)}));const h=i[Qr],f=(0,e.useRef)(Boolean(h)&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return rr((()=>{d&&(p.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Gl.render(d.render),f.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!f.current&&d.animationState&&d.animationState.animateChanges(),f.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(h)})),f.current=!1))})),d}function Hu(e){if(e)return!1!==e.options.allowProjection?e.projection:Hu(e.parent)}function qu(t){let{preloadedFeatures:n,createVisualElement:i,useRender:r,useVisualState:a,Component:o}=t;function s(t,n){let s;const l={...(0,e.useContext)(lr),...t,layoutId:Wu(t)},{isStatic:c}=l,u=_u(t),d=a(t,c);if(!c&&ir){!function(){(0,e.useContext)(Du).strict;0}();const t=function(e){const{drag:t,layout:n}=Iu;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=Bu(o,d,l,i,t.ProjectionNode)}return(0,er.jsxs)(Mu.Provider,{value:u,children:[s&&u.visualElement?(0,er.jsx)(s,{visualElement:u.visualElement,...l}):null,r(o,t,Uu(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)Iu[t]={...Iu[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof o?o:`create(${o.displayName??o.name??""})`}`;const l=(0,e.forwardRef)(s);return l[Vu]=o,l}function Wu(t){let{layoutId:n}=t;const i=(0,e.useContext)(tr).id;return i&&void 0!==n?i+"-"+n:n}function Yu(e,t){let{layout:n,layoutId:i}=t;return Dr.has(e)||e.startsWith("origin")||(n||void 0!==i)&&(!!nc[e]||"opacity"===e)}const Ku=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Gu={...ua,transform:Math.round},Xu={borderWidth:$a,borderTopWidth:$a,borderRightWidth:$a,borderBottomWidth:$a,borderLeftWidth:$a,borderRadius:$a,radius:$a,borderTopLeftRadius:$a,borderTopRightRadius:$a,borderBottomRightRadius:$a,borderBottomLeftRadius:$a,width:$a,maxWidth:$a,height:$a,maxHeight:$a,top:$a,right:$a,bottom:$a,left:$a,padding:$a,paddingTop:$a,paddingRight:$a,paddingBottom:$a,paddingLeft:$a,margin:$a,marginTop:$a,marginRight:$a,marginBottom:$a,marginLeft:$a,backgroundPositionX:$a,backgroundPositionY:$a,...{rotate:Sa,rotateX:Sa,rotateY:Sa,rotateZ:Sa,scale:ma,scaleX:ma,scaleY:ma,scaleZ:ma,skew:Sa,skewX:Sa,skewY:Sa,distance:$a,translateX:$a,translateY:$a,translateZ:$a,x:$a,y:$a,z:$a,perspective:$a,transformPerspective:$a,opacity:da,originX:Ca,originY:Ca,originZ:$a},zIndex:Gu,fillOpacity:da,strokeOpacity:da,numOctaves:Gu},Qu={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ju=Rr.length;function Zu(e,t,n){const{style:i,vars:r,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(Dr.has(l))o=!0;else if(oa(l))r[l]=e;else{const t=Ku(e,Xu[l]);l.startsWith("origin")?(s=!0,a[l]=t):i[l]=t}}if(t.transform||(o||n?i.transform=function(e,t,n){let i="",r=!0;for(let a=0;a<Ju;a++){const o=Rr[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=Ku(s,Xu[o]);l||(r=!1,i+=`${Qu[o]||o}(${e}) `),n&&(t[o]=e)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}(t,e.transform,n):i.transform&&(i.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;i.transformOrigin=`${e} ${t} ${n}`}}const ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function td(e,t,n){for(const i in t)Kr(t[i])||Yu(i,n)||(e[i]=t[i])}function nd(t,n){const i={};return td(i,t.style||{},t),Object.assign(i,function(t,n){let{transformTemplate:i}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Zu(e,n,i),Object.assign({},e.vars,e.style)}),[n])}(t,n)),i}function id(e,t){const n={},i=nd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const rd={offset:"stroke-dashoffset",array:"stroke-dasharray"},ad={offset:"strokeDashoffset",array:"strokeDasharray"};function od(e,t,n,i,r){let{attrX:a,attrY:o,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d}=t;if(Zu(e,d,i),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:m,style:p}=e;m.transform&&(p.transform=m.transform,delete m.transform),(p.transform||m.transformOrigin)&&(p.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),p.transform&&(p.transformBox=r?.transformBox??"fill-box",delete m.transformBox),void 0!==a&&(m.x=a),void 0!==o&&(m.y=o),void 0!==s&&(m.scale=s),void 0!==l&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=r?rd:ad;e[a.offset]=$a.transform(-i);const o=$a.transform(t),s=$a.transform(n);e[a.array]=`${o} ${s}`}(m,l,c,u,!1)}const sd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),ld=e=>"string"===typeof e&&"svg"===e.toLowerCase();function cd(t,n,i,r){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return od(e,n,ld(r),t.transformTemplate,t.style),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};td(e,t.style,t),a.style={...e,...a.style}}return a}const ud=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ud.has(e)}let md=e=>!dd(e);try{(pd=require("@emotion/is-prop-valid").default)&&(md=e=>e.startsWith("on")?!dd(e):pd(e))}catch{}var pd;const hd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fd(e){return"string"===typeof e&&!e.includes("-")&&!!(hd.indexOf(e)>-1||/[A-Z]/u.test(e))}function gd(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,i,r,a,o)=>{let{latestValues:s}=a;const l=(fd(n)?cd:id)(i,s,o,n),c=function(e,t,n){const i={};for(const r in e)"values"===r&&"object"===typeof e.values||(md(r)||!0===n&&dd(r)||!t&&!dd(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}(i,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:r}:{},{children:d}=i,m=(0,e.useMemo)((()=>Kr(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:m})}}const yd=t=>(n,i)=>{const r=(0,e.useContext)(Mu),a=(0,e.useContext)(ar),o=()=>function(e,t,n,i){let{scrapeMotionValuesFromProps:r,createRenderState:a}=e;return{latestValues:bd(t,n,i,r),renderState:a()}}(t,n,r,a);return i?o():nr(o)};function bd(e,t,n,i){const r={},a=i(e,{});for(const m in a)r[m]=uc(a[m]);let{initial:o,animate:s}=e;const l=Lu(e),c=Ou(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!br(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const i=xr(e,t[n]);if(i){const{transitionEnd:e,transition:t,...n}=i;for(const i in n){let e=n[i];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(r[i]=e)}for(const i in e)r[i]=e[i]}}}return r}function vd(e,t,n){const{style:i}=e,r={};for(const a in i)(Kr(i[a])||t.style&&Kr(t.style[a])||Yu(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(r[a]=i[a]);return r}const xd={useVisualState:yd({scrapeMotionValuesFromProps:vd,createRenderState:ed})};function wd(e,t,n){const i=vd(e,t,n);for(const r in e)if(Kr(e[r])||Kr(t[r])){i[-1!==Rr.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return i}const Sd={useVisualState:yd({scrapeMotionValuesFromProps:wd,createRenderState:sd})};function kd(e,t){return function(n){let{forwardMotionProps:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return qu({...fd(n)?Sd:xd,preloadedFeatures:e,useRender:gd(i),createVisualElement:t,Component:n})}}const $d=e=>t=>t.test(e),Ed=[ua,$a,ka,Sa,ja,Ea,{test:e=>"auto"===e,parse:e=>e}],jd=e=>Ed.find($d(e)),Cd=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Pd=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Td(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[i,r]=function(e){const t=Pd.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const e=a.trim();return Cd(e)?parseFloat(e):e}return la(r)?Td(r,t,n+1):r}const zd=e=>/^0[^.\s]+$/u.test(e);const Ad=new Set(["brightness","contrast","saturate","opacity"]);function Rd(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[i]=n.match(ha)||[];if(!i)return e;const r=n.replace(i,"");let a=Ad.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const Dd=/\b([a-z-]*)\(.*?\)/gu,Md={...Na,getAnimatableNone:e=>{const t=e.match(Dd);return t?t.map(Rd).join(" "):e}},Ld={...Xu,color:Ta,backgroundColor:Ta,outlineColor:Ta,fill:Ta,stroke:Ta,borderColor:Ta,borderTopColor:Ta,borderRightColor:Ta,borderBottomColor:Ta,borderLeftColor:Ta,filter:Md,WebkitFilter:Md},Od=e=>Ld[e];function _d(e,t){let n=Od(e);return n!==Md&&(n=Na),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Nd=new Set(["auto","none","0"]);class Fd extends cs{constructor(e,t,n,i,r){super(e,t,n,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),la(n))){const i=Td(n,t.current);void 0!==i&&(e[s]=i),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Mr.has(n)||2!==e.length)return;const[i,r]=e,a=jd(i),o=jd(r);if(a!==o)if(Zo(a)&&Zo(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else ns[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||("number"===typeof(i=e[r])?0===i:null===i||"none"===i||"0"===i||zd(i)))&&n.push(r);var i;n.length&&function(e,t,n){let i,r=0;for(;r<e.length&&!i;){const t=e[r];"string"===typeof t&&!Nd.has(t)&&Ma(t).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=_d(n,i)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ns[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];void 0!==i&&e.getValue(n,i).jump(i,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const i=e.getValue(t);i&&i.jump(this.measuredOrigin,!1);const r=n.length-1,a=n[r];n[r]=ns[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,i]=t;e.getValue(n).set(i)})),this.resolveNoneKeyframes()}}const Id=[...Ed,Ta,Na],Vd={current:null},Ud={current:!1};const Bd=new WeakMap;const Hd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=cs,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Vr.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Pr.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Lu(n),this.isVariantNode=Ou(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in d){const e=d[m];void 0!==l[m]&&Kr(e)&&e.set(l[m],!1)}}mount(e){this.current=e,Bd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Ud.current||function(){if(Ud.current=!0,ir)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vd.current=e.matches;e.addListener(t),t()}else Vd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Vd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Tr(this.notifyUpdate),Tr(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Dr.has(e);n&&this.onBindTransform&&this.onBindTransform();const i=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Pr.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),r=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{i(),r(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Iu){const t=Iu[e];if(!t)continue;const{isEnabled:n,Feature:i}=t;if(!this.features[e]&&i&&n(this.props)&&(this.features[e]=new i(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Hd.length;n++){const t=Hd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const i=e["on"+t];i&&(this.propEventSubscriptions[t]=this.on(t,i))}this.prevMotionValues=function(e,t,n){for(const i in t){const r=t[i],a=n[i];if(Kr(r))e.addValue(i,r);else if(Kr(a))e.addValue(i,Hr(r,{owner:e}));else if(a!==r)if(e.hasValue(i)){const t=e.getValue(i);!0===t.liveStyle?t.jump(r):t.hasAnimated||t.set(r)}else{const t=e.getStaticValue(i);e.addValue(i,Hr(void 0!==t?t:r,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Hr(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(Cd(n)||zd(n))?n=parseFloat(n):!(e=>Id.find($d(e)))(n)&&Na.test(t)&&(n=_d(e,t)),this.setBaseTarget(e,Kr(n)?n.get():n)),Kr(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const i=xr(this.props,t,this.presenceContext?.custom);i&&(n=i[e])}if(t&&void 0!==n)return n;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Kr(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new _r),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.events[e].notify(...n)}}}class Wd extends qd{constructor(){super(...arguments),this.KeyframeResolver=Fd}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:i}=t;delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Kr(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}function Yd(e,t,n,i){let{style:r,vars:a}=t;Object.assign(e.style,r,i&&i.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}class Kd extends Wd{constructor(){super(...arguments),this.type="html",this.renderInstance=Yd}readValueFromInstance(e,t){if(Dr.has(t))return this.projection?.isProjecting?Xo(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Qo(n,t)})(e,t);{const i=(n=e,window.getComputedStyle(n)),r=(oa(t)?i.getPropertyValue(t):i[t])||0;return"string"===typeof r?r.trim():r}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Tl(e,n)}build(e,t,n){Zu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return vd(e,t,n)}}const Gd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class Xd extends Wd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pl}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Dr.has(t)){const e=Od(t);return e&&e.default||0}return t=Gd.has(t)?t:Xr(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return wd(e,t,n)}build(e,t,n){od(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,i){!function(e,t,n,i){Yd(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(Gd.has(r)?r:Xr(r),t.attrs[r])}(e,t,0,i)}mount(e){this.isSVGTag=ld(e.tagName),super.mount(e)}}const Qd=yr(kd({...Zs,...Au,...pu,...Ru},((t,n)=>fd(t)?new Xd(n):new Kd(n,{allowProjection:t!==e.Fragment})))),Jd=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var r=Ki.apply(void 0,lt([t],n,!1)),a="sc-global-".concat(Rn(JSON.stringify(r))),o=new Ji(r,a),s=function(t){var n=Ai(),i=e.useContext(Ui),r=e.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(r,t,n.styleSheet,i,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(r,t,n.styleSheet,i,n.stylis),function(){return o.removeStyles(r,n.styleSheet)}}),[r,t,n.styleSheet,i,n.stylis]),null};function l(e,t,n,i,r){if(o.isStatic)o.renderStyles(e,bn,n,r);else{var a=st(st({},t),{theme:wn(t,i,s.defaultProps)});o.renderStyles(e,a,n,r)}}return e.memo(s)})`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    height: 100%;
    font-family: ${e=>e.theme.fonts.main};
    color: ${e=>e.theme.colors.text};
    background: ${e=>e.theme.colors.background};
    line-height: 1.6;
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: 400;
    overflow-x: hidden;
    
    /* Enhanced text rendering */
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Better touch/tap handling */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  #root {
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    font-family: ${e=>e.theme.fonts.main};
    border: none;
    background: none;
    padding: 0;
    transition: ${e=>e.theme.transitions.base};
    
    &:focus {
      outline: none;
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: ${e=>e.theme.fonts.main};
    border: none;
    outline: none;
    background: none;
    
    &:focus {
      outline: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${e=>e.theme.transitions.base};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${e=>e.theme.fonts.display};
    font-weight: 600;
    line-height: 1.2;
    color: ${e=>e.theme.colors.text};
    margin: 0;
  }

  h1 {
    font-size: ${e=>e.theme.fontSizes["4xl"]};
    font-weight: 700;
  }

  h2 {
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 600;
  }

  h3 {
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 600;
  }

  h4 {
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 600;
  }

  h5 {
    font-size: ${e=>e.theme.fontSizes.lg};
    font-weight: 500;
  }

  h6 {
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: 500;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.backgroundDark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.primarySolid};
    border-radius: ${e=>e.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.primaryDark};
  }

  /* Selection styling */
  ::selection {
    background: ${e=>e.theme.colors.primaryLight};
    color: white;
  }

  /* Focus outline for accessibility */
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  a:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primarySolid};
    outline-offset: 2px;
  }

  /* Improved mobile touch targets */
  @media (max-width: 768px) {
    button, a, input, textarea, select {
      min-height: 44px;
    }
  }

  /* Animation utilities */
  .fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .slide-up {
    animation: slideUp 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Utility classes */
  .text-gradient {
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass {
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Responsive viewport handling */
  @media (max-width: 480px) {
    /* Mobile viewport optimization */
    html {
      height: 100vh;
      height: -webkit-fill-available;
    }
    
    body {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
    
    #root {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
  }

  /* Prevent zoom on iOS when focusing inputs */
  @media (max-width: 768px) {
    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="password"],
    textarea,
    select {
      font-size: 16px;
    }
  }
`,Zd=Qi.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: relative;
  background: transparent;
  
  /* Remove any height constraints that might interfere with scrolling */
  height: auto;
  flex: 1;
`,em=Qi.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
  gap: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.borderRadius.xl} ${e=>e.theme.borderRadius.xl} 0 0;
  border-bottom: 1px solid ${e=>e.theme.colors.borderLight};
`,tm=(Qi.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: ${e=>e.theme.spacing.xl} 0;

  & > button:last-child {
    margin-top: auto;
  }
`,Qi.h1`
  font-size: ${e=>e.theme.fontSizes["4xl"]};
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.display};
  letter-spacing: -0.02em;
  
  /* Optional gradient text effect */
  ${e=>e.gradient&&`\n    background: ${e.theme.colors.primary};\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`),nm=Qi.h2`
  font-size: ${e=>e.theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.textLight};
  line-height: 1.5;
`,im=Qi.button`
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.xl};
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.xl};
  font-size: ${e=>e.theme.fontSizes.base};
  font-weight: 600;
  font-family: ${e=>e.theme.fonts.main};
  margin: ${e=>e.theme.spacing.sm} 0;
  transition: ${e=>e.theme.transitions.bounce};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${e=>e.theme.colors.shadow};
  
  /* Enhanced hover effects */
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.colors.shadowHover};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${e=>e.theme.colors.shadowActive};
  }

  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }

  /* Secondary variant */
  ${e=>"secondary"===e.variant&&`\n    background: ${e.theme.colors.surface};\n    color: ${e.theme.colors.text};\n    border: 2px solid ${e.theme.colors.border};\n    \n    &:hover {\n      border-color: ${e.theme.colors.primarySolid};\n      color: ${e.theme.colors.primarySolid};\n    }\n  `}

  /* Outline variant */
  ${e=>"outline"===e.variant&&`\n    background: transparent;\n    color: ${e.theme.colors.primarySolid};\n    border: 2px solid ${e.theme.colors.primarySolid};\n    \n    &:hover {\n      background: ${e.theme.colors.primarySolid};\n      color: white;\n    }\n  `}

  /* Large size */
  ${e=>"large"===e.size&&`\n    padding: ${e.theme.spacing.lg} ${e.theme.spacing["2xl"]};\n    font-size: ${e.theme.fontSizes.lg};\n    border-radius: ${e.theme.borderRadius["2xl"]};\n  `}

  /* Small size */
  ${e=>"small"===e.size&&`\n    padding: ${e.theme.spacing.sm} ${e.theme.spacing.md};\n    font-size: ${e.theme.fontSizes.sm};\n  `}
`,rm=Qi(et)`
  color: ${e=>e.theme.colors.textLight};
  text-decoration: none;
  font-size: ${e=>e.theme.fontSizes.xl};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  transition: ${e=>e.theme.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  width: 44px;
  height: 44px;

  &:hover {
    color: ${e=>e.theme.colors.primarySolid};
    background: ${e=>e.theme.colors.primarySolid}15;
    border-color: ${e=>e.theme.colors.primarySolid};
    transform: translateX(-2px);
  }

  svg {
    transition: ${e=>e.theme.transitions.base};
  }
`,am=Qi.div`
  flex: 1;
  height: 8px;
  background: ${e=>e.theme.colors.backgroundDark};
  border-radius: ${e=>e.theme.borderRadius.full};
  display: flex;
  overflow: hidden;
  margin-left: ${e=>e.theme.spacing.md};
`,om=Qi.div`
  height: 100%;
  background: ${e=>e.active?`linear-gradient(90deg, ${e.theme.colors.primarySolid}, ${e.theme.colors.primaryLight})`:e.theme.colors.backgroundDark};
  flex: 1;
  margin: 0 1px;
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: ${e=>e.theme.transitions.slow};
  position: relative;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }

  /* Add shimmer effect for active step */
  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: -100%;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(\n        90deg,\n        transparent,\n        rgba(255, 255, 255, 0.4),\n        transparent\n      );\n      animation: shimmer 2s infinite;\n    }\n\n    @keyframes shimmer {\n      0% { left: -100%; }\n      100% { left: 100%; }\n    }\n  "}
`,sm=(Qi.div`
  width: 100%;
  padding: ${e=>e.theme.spacing.lg};
  margin: ${e=>e.theme.spacing.sm} 0;
  border-radius: ${e=>e.theme.borderRadius.xl};
  background: ${e=>e.selected?`linear-gradient(135deg, ${e.theme.colors.primarySolid}, ${e.theme.colors.primaryLight})`:e.theme.colors.surface};
  color: ${e=>e.selected?"white":e.theme.colors.text};
  border: 2px solid ${e=>e.selected?"transparent":e.theme.colors.border};
  transition: ${e=>e.theme.transitions.bounce};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${e=>e.selected?e.theme.colors.shadowHover:e.theme.colors.shadow};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.colors.shadowHover};
    border-color: ${e=>e.selected?"transparent":e.theme.colors.primarySolid};
  }

  &:active {
    transform: translateY(-1px);
  }

  /* Add subtle pattern overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.selected?"linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)":"none"};
  }
`,Qi.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing["2xl"]};
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${e=>e.theme.borderRadius.xl};
    box-shadow: ${e=>e.theme.colors.shadow};
  }
`,Qi.div`
  width: 100%;
  margin: ${e=>e.theme.spacing.xl} 0;
  padding: ${e=>e.theme.spacing.md} 0;
`,Qi.input.attrs({type:"range"})`
  width: 100%;
  height: 12px;
  border-radius: ${e=>e.theme.borderRadius.full};
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(
    to right,
    ${e=>e.theme.colors.primarySolid} 0%,
    ${e=>e.theme.colors.primarySolid} ${e=>e.value||50}%,
    ${e=>e.theme.colors.backgroundDark} ${e=>e.value||50}%,
    ${e=>e.theme.colors.backgroundDark} 100%
  );
  outline: none;
  transition: ${e=>e.theme.transitions.base};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${e=>e.theme.colors.primarySolid}, ${e=>e.theme.colors.primaryLight});
    cursor: pointer;
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 3px solid white;
    transition: ${e=>e.theme.transitions.bounce};
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    box-shadow: ${e=>e.theme.colors.shadowHover};
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${e=>e.theme.colors.primarySolid}, ${e=>e.theme.colors.primaryLight});
    cursor: pointer;
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 3px solid white;
    transition: ${e=>e.theme.transitions.bounce};
  }
`,Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${e=>e.theme.fontSizes["5xl"]};
  font-weight: 700;
  margin: ${e=>e.theme.spacing.xl} 0;
  font-family: ${e=>e.theme.fonts.display};
  background: ${e=>e.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`,Qi.div`
  display: flex;
  border-radius: ${e=>e.theme.borderRadius.xl};
  overflow: hidden;
  margin: ${e=>e.theme.spacing.xl} 0;
  background: ${e=>e.theme.colors.backgroundDark};
  padding: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`,Qi.button`
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.xl};
  border: none;
  background: ${e=>e.active?e.theme.colors.surface:"transparent"};
  color: ${e=>e.active?e.theme.colors.text:e.theme.colors.textLight};
  font-weight: ${e=>e.active?"600":"400"};
  border-radius: ${e=>e.theme.borderRadius.lg};
  transition: ${e=>e.theme.transitions.base};
  cursor: pointer;
  font-size: ${e=>e.theme.fontSizes.base};
  box-shadow: ${e=>e.active?e.theme.colors.shadow:"none"};

  &:hover {
    color: ${e=>e.theme.colors.text};
  }
`,Qi.hr`
  width: 100%;
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, ${e=>e.theme.colors.border}, transparent);
  margin: ${e=>e.theme.spacing.lg} 0;
`,Qi.div`
  background: ${e=>e.theme.colors.glass};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${e=>e.theme.borderRadius.xl};
  padding: ${e=>e.theme.spacing.lg};
  margin: ${e=>e.theme.spacing.lg} 0;
  width: 100%;
  text-align: left;
  box-shadow: ${e=>e.theme.colors.shadow};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  }
`,Qi.p`
  color: ${e=>e.theme.colors.textLighter};
  font-size: ${e=>e.theme.fontSizes.sm};
  margin-top: ${e=>e.theme.spacing.md};
  text-align: center;
  line-height: 1.5;
`,Qi.div`
  margin-right: ${e=>e.theme.spacing.sm};
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.primarySolid};
`,Qi.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${e=>e.theme.spacing.sm} 0;
  gap: ${e=>e.theme.spacing.sm};
`,Qi.div`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.xl};
  padding: ${e=>e.theme.spacing.lg};
  margin: ${e=>e.theme.spacing.md} 0;
  width: 100%;
  box-shadow: ${e=>e.theme.colors.shadow};
  transition: ${e=>e.theme.transitions.base};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.colors.shadowHover};
  }

  h3 {
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
  }

  p {
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.textLight};
  }
`,Qi.div`
  background: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.borderRadius.xl};
  padding: ${e=>e.theme.spacing.lg};
  box-shadow: ${e=>e.theme.colors.shadow};
  border: 1px solid ${e=>e.theme.colors.border};
  transition: ${e=>e.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.colors.shadowHover};
  }
`,Qi.button`
  position: fixed;
  bottom: ${e=>e.theme.spacing.xl};
  right: ${e=>e.theme.spacing.xl};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  box-shadow: ${e=>e.theme.colors.shadowHover};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.theme.fontSizes.xl};
  cursor: pointer;
  transition: ${e=>e.theme.transitions.bounce};
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`,Qi(Zd)`
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    backdrop-filter: blur(20px);
    min-height: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    
    /* Ensure proper scrolling behavior */
    overflow-y: auto;
    overflow-x: hidden;
    
    /* Remove any fixed height constraints */
    max-height: none;
`),lm=Qi(Zd)`
    background: url("/imagen-final.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh !important;
    min-height: 100vh;
    border-radius: 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            rgba(45, 90, 61, 0.92) 0%,
            rgba(74, 124, 89, 0.85) 30%,
            rgba(30, 61, 40, 0.90) 70%,
            rgba(45, 90, 61, 0.95) 100%
        );
        backdrop-filter: blur(2px);
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }
`,cm=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.lg};
`,um=Qi(Qd.div)`
    margin-bottom: ${e=>e.theme.spacing["2xl"]};
    position: relative;
`,dm=Qi.div`
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${e=>e.theme.spacing.xl} auto;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
        );
        animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    svg {
        width: 60px;
        height: 60px;
        color: #ffffff;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
`,mm=Qi(Qd.h1)`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    font-weight: 800;
    color: #ffffff;
    margin-bottom: ${e=>e.theme.spacing.md};
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.03em;
    text-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.8),
        0 4px 20px rgba(0, 0, 0, 0.6),
        0 0 40px rgba(0, 0, 0, 0.4);
    line-height: 1.1;

    @media (max-width: 480px) {
        font-size: ${e=>e.theme.fontSizes["4xl"]};
    }
`,pm=Qi(Qd.p)`
    font-size: ${e=>e.theme.fontSizes.xl};
    color: #ffffff;
    margin-bottom: ${e=>e.theme.spacing["2xl"]};
    font-weight: 500;
    letter-spacing: 0.01em;
    text-shadow: 
        0 1px 2px rgba(0, 0, 0, 0.8),
        0 2px 10px rgba(0, 0, 0, 0.5);
    line-height: 1.4;
    max-width: 320px;

    @media (max-width: 480px) {
        font-size: ${e=>e.theme.fontSizes.lg};
    }
`,hm=Qi(Qd(im))`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.8);
    color: ${e=>e.theme.colors.primarySolid};
    font-size: ${e=>e.theme.fontSizes.lg};
    font-weight: 700;
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing["2xl"]};
    border-radius: ${e=>e.theme.borderRadius.full};
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    position: relative;
    overflow: hidden;
    min-width: 200px;
    text-shadow: none;
    margin-top: auto;
    transition: none;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(45, 90, 61, 0.1),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        border-color: rgba(255, 255, 255, 1);
        background: rgba(255, 255, 255, 0.95);

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(-1px);
    }
`,fm=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.md};
    margin: ${e=>e.theme.spacing["2xl"]} 0;
    max-width: 300px;
`,gm=Qi.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.sm};
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: ${e=>e.theme.borderRadius.lg};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
    color: #ffffff;
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);

    svg {
        width: 16px;
        height: 16px;
        color: #ffffff;
        flex-shrink: 0;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }
`,ym=()=>{const e=Z(),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,er.jsx)(lm,{children:(0,er.jsxs)(cm,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",children:[(0,er.jsx)(um,{variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.8,ease:"easeOut"}}},children:(0,er.jsx)(dm,{children:(0,er.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,er.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})})}),(0,er.jsx)(mm,{variants:t,children:"HEALTHY"}),(0,er.jsx)(pm,{variants:t,children:"Tu compa\xf1ero inteligente para un estilo de vida saludable"}),(0,er.jsxs)(fm,{variants:t,children:[(0,er.jsxs)(gm,{children:[(0,er.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,er.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),"Entrenamientos personalizados"]}),(0,er.jsxs)(gm,{children:[(0,er.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,er.jsx)("path",{d:"M21 10c-2 0-3-1-3-3s1-3 3-3 3 1 3 3-1 3-3 3zM3 10c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3zM12 22c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3z"})}),"Recetas nutritivas y deliciosas"]}),(0,er.jsxs)(gm,{children:[(0,er.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,er.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,er.jsx)("path",{d:"M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"})]}),"Seguimiento de progreso"]})]}),(0,er.jsx)(hm,{onClick:()=>{e("/goal")},variants:t,whileHover:{scale:1.05},whileTap:{scale:.98},children:"Empezar mi viaje"})]})})},bm=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,vm=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,xm=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    font-weight: 800;
    font-family: ${e=>e.theme.fonts.display};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.xl};
    letter-spacing: -0.03em;
    text-align: center;
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: ${e=>e.theme.spacing.sm};

    .unit {
        font-size: ${e=>e.theme.fontSizes.xl};
        color: ${e=>e.theme.colors.textLight};
        font-weight: 500;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${e=>e.theme.colors.primary};
        border-radius: ${e=>e.theme.borderRadius.full};
    }
`,wm=Qi.div`
    width: 200px;
    height: 300px;
    position: relative;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius.xl};
    border: 2px solid ${e=>e.theme.colors.border};
    overflow: hidden;
    box-shadow: 
        inset 0 2px 10px rgba(0, 0, 0, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.1);
`,Sm=Qi.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }

    /* Selection indicator */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 50px;
        transform: translateY(-50%);
        background: ${e=>e.theme.colors.primarySolid}10;
        border-top: 2px solid ${e=>e.theme.colors.primarySolid};
        border-bottom: 2px solid ${e=>e.theme.colors.primarySolid};
        z-index: 2;
        pointer-events: none;
    }

    /* Fade gradients */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            ${e=>e.theme.colors.surface} 0%,
            transparent 25%,
            transparent 75%,
            ${e=>e.theme.colors.surface} 100%
        );
        pointer-events: none;
        z-index: 1;
    }
`,km=Qi.div`
    padding: 125px 0;
    transform: translateY(${e=>e.offset}px);
    transition: transform ${e=>e.isAnimating?"0.3s ease-out":"0s"};
`,$m=Qi.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.isSelected?e.theme.fontSizes["2xl"]:e.isAdjacent?e.theme.fontSizes.xl:e.theme.fontSizes.lg};
    font-weight: ${e=>e.isSelected?700:e.isAdjacent?600:400};
    color: ${e=>e.isSelected?e.theme.colors.primarySolid:e.isAdjacent?e.theme.colors.text:e.theme.colors.textLight};
    font-family: ${e=>e.theme.fonts.display};
    opacity: ${e=>e.isSelected?1:e.isAdjacent?.8:.4};
    transition: all 0.2s ease;
    transform: scale(${e=>e.isSelected?1.1:1});
    position: relative;
    z-index: 3;
`,Em=Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`,jm=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,Cm=()=>{const t=Z(),[n,i]=(0,e.useState)(170),[r]=(0,e.useState)("cm"),[a,o]=(0,e.useState)(0),[s,l]=(0,e.useState)(!1),[c,u]=(0,e.useState)(!1),[d,m]=(0,e.useState)(0),[p,h]=(0,e.useState)(0),[f,g]=(0,e.useState)(0),[y,b]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),w=(0,e.useRef)(null),S=((0,e.useRef)(null),Array.from({length:131},((e,t)=>t+100))),k=(0,e.useCallback)((e=>{const t=Math.round(-e/50),n=Math.max(0,Math.min(S.length-1,t));return S[n]}),[S]),$=(0,e.useCallback)((e=>50*-S.indexOf(e)),[S]),E=(0,e.useCallback)((()=>{const e=k(a),t=$(e);l(!0),o(t),i(e),setTimeout((()=>l(!1)),300)}),[a,k,$]),j=e=>{if(!c)return;const t=Date.now(),n=p+(e-d),r=t-y;if(r>0){g((e-v)/r)}b(t),x(e);const a=50*-(S.length-1),s=Math.max(a,Math.min(0,n));o(s),i(k(s))},C=e=>{j(e.clientY)},P=e=>{e.preventDefault(),j(e.touches[0].clientY)},T=()=>{if(c)if(u(!1),Math.abs(f)>.5){const e=k(a+100*f),t=$(e);l(!0),o(t),i(e),setTimeout((()=>l(!1)),300)}else E()};(0,e.useEffect)((()=>{const e=()=>T(),t=e=>C(e),n=()=>T(),i=e=>P(e);return c&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",n)}}),[c,C,P,T]),(0,e.useEffect)((()=>{o($(n))}),[]);const z={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,er.jsx)(bm,{children:(0,er.jsxs)(Qd.div,{variants:z,children:[(0,er.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1l es tu altura?"}),(0,er.jsx)(nm,{children:"Desliza o usa la rueda para seleccionar tu altura"})]})}),(0,er.jsxs)(vm,{variants:z,children:[(0,er.jsxs)(xm,{initial:{scale:.8},animate:{scale:1},transition:{type:"spring",stiffness:200},children:[n,(0,er.jsx)("span",{className:"unit",children:r})]},n),(0,er.jsx)(wm,{children:(0,er.jsx)(Sm,{ref:w,onMouseDown:e=>{u(!0),m(e.clientY),h(a),g(0),b(Date.now()),x(e.clientY),l(!1)},onTouchStart:e=>{u(!0),m(e.touches[0].clientY),h(a),g(0),b(Date.now()),x(e.touches[0].clientY),l(!1)},onWheel:e=>{e.preventDefault();const t=e.deltaY>0?1:-1,r=S.indexOf(n),a=Math.max(0,Math.min(S.length-1,r+t)),s=S[a],c=$(s);l(!0),o(c),i(s),setTimeout((()=>l(!1)),200)},children:(0,er.jsx)(km,{offset:a,isAnimating:s,children:S.map(((e,t)=>{const i=S.indexOf(n),r=t===i,a=1===Math.abs(t-i);return(0,er.jsx)($m,{isSelected:r,isAdjacent:a,children:e},e)}))})})})]}),(0,er.jsx)(Em,{children:(0,er.jsx)(Qd.div,{variants:z,children:(0,er.jsx)(jm,{onClick:()=>{t("/weight")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Pm=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,Tm=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,zm=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    font-weight: 800;
    font-family: ${e=>e.theme.fonts.display};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.xl};
    letter-spacing: -0.03em;
    text-align: center;
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: ${e=>e.theme.spacing.sm};

    .unit {
        font-size: ${e=>e.theme.fontSizes.xl};
        color: ${e=>e.theme.colors.textLight};
        font-weight: 500;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${e=>e.theme.colors.primary};
        border-radius: ${e=>e.theme.borderRadius.full};
    }
`,Am=Qi.div`
    width: 200px;
    height: 300px;
    position: relative;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius.xl};
    border: 2px solid ${e=>e.theme.colors.border};
    overflow: hidden;
    box-shadow: 
        inset 0 2px 10px rgba(0, 0, 0, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.1);
`,Rm=Qi.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }

    /* Selection indicator */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 50px;
        transform: translateY(-50%);
        background: ${e=>e.theme.colors.primarySolid}10;
        border-top: 2px solid ${e=>e.theme.colors.primarySolid};
        border-bottom: 2px solid ${e=>e.theme.colors.primarySolid};
        z-index: 2;
        pointer-events: none;
    }

    /* Fade gradients */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            ${e=>e.theme.colors.surface} 0%,
            transparent 25%,
            transparent 75%,
            ${e=>e.theme.colors.surface} 100%
        );
        pointer-events: none;
        z-index: 1;
    }
`,Dm=Qi.div`
    padding: 125px 0;
    transform: translateY(${e=>e.offset}px);
    transition: transform ${e=>e.isAnimating?"0.3s ease-out":"0s"};
`,Mm=Qi.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.isSelected?e.theme.fontSizes["2xl"]:e.isAdjacent?e.theme.fontSizes.xl:e.theme.fontSizes.lg};
    font-weight: ${e=>e.isSelected?700:e.isAdjacent?600:400};
    color: ${e=>e.isSelected?e.theme.colors.primarySolid:e.isAdjacent?e.theme.colors.text:e.theme.colors.textLight};
    font-family: ${e=>e.theme.fonts.display};
    opacity: ${e=>e.isSelected?1:e.isAdjacent?.8:.4};
    transition: all 0.2s ease;
    transform: scale(${e=>e.isSelected?1.1:1});
    position: relative;
    z-index: 3;
`,Lm=(Qi(Qd.div)`
    margin-top: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg};
    text-align: center;
    box-shadow: ${e=>e.theme.colors.shadow};
    max-width: 300px;
    width: 100%;

    h3 {
        color: ${e=>e.theme.colors.text};
        font-size: ${e=>e.theme.fontSizes.lg};
        font-weight: 600;
        margin-bottom: ${e=>e.theme.spacing.sm};
        background: ${e=>e.theme.colors.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .bmi-value {
        font-size: ${e=>e.theme.fontSizes["2xl"]};
        font-weight: 700;
        color: ${e=>e.theme.colors.primarySolid};
        margin-bottom: ${e=>e.theme.spacing.xs};
    }

    p {
        color: ${e=>e.theme.colors.textLight};
        font-size: ${e=>e.theme.fontSizes.sm};
        line-height: 1.5;
    }
`,Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),Om=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,_m=()=>{const t=Z(),[n,i]=(0,e.useState)(70),[r]=(0,e.useState)("kg"),[a,o]=(0,e.useState)(0),[s,l]=(0,e.useState)(!1),[c,u]=(0,e.useState)(!1),[d,m]=(0,e.useState)(0),[p,h]=(0,e.useState)(0),[f,g]=(0,e.useState)(0),[y,b]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),w=(0,e.useRef)(null),S=Array.from({length:341},((e,t)=>30+.5*t)),k=(0,e.useCallback)((e=>{const t=Math.round(-e/50),n=Math.max(0,Math.min(S.length-1,t));return S[n]}),[S]),$=(0,e.useCallback)((e=>{const t=S.findIndex((t=>Math.abs(t-e)<.01));return 50*-t}),[S]),E=(0,e.useCallback)((()=>{const e=k(a),t=$(e);l(!0),o(t),i(e),setTimeout((()=>l(!1)),300)}),[a,k,$]),j=e=>{if(!c)return;const t=Date.now(),n=p+(e-d),r=t-y;if(r>0){g((e-v)/r)}b(t),x(e);const a=50*-(S.length-1),s=Math.max(a,Math.min(0,n));o(s),i(k(s))},C=e=>{j(e.clientY)},P=e=>{e.preventDefault(),j(e.touches[0].clientY)},T=()=>{if(c)if(u(!1),Math.abs(f)>.5){const e=k(a+100*f),t=$(e);l(!0),o(t),i(e),setTimeout((()=>l(!1)),300)}else E()};(0,e.useEffect)((()=>{const e=()=>T(),t=e=>C(e),n=()=>T(),i=e=>P(e);return c&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",n)}}),[c,C,P,T]),(0,e.useEffect)((()=>{o($(n))}),[]);const z={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,er.jsx)(Pm,{children:(0,er.jsxs)(Qd.div,{variants:z,children:[(0,er.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1nto pesas?"}),(0,er.jsx)(nm,{children:"Desliza o usa la rueda para seleccionar tu peso"})]})}),(0,er.jsxs)(Tm,{variants:z,children:[(0,er.jsxs)(zm,{initial:{scale:.8},animate:{scale:1},transition:{type:"spring",stiffness:200},children:[n.toFixed(1),(0,er.jsx)("span",{className:"unit",children:r})]},n),(0,er.jsx)(Am,{children:(0,er.jsx)(Rm,{ref:w,onMouseDown:e=>{u(!0),m(e.clientY),h(a),g(0),b(Date.now()),x(e.clientY),l(!1)},onTouchStart:e=>{u(!0),m(e.touches[0].clientY),h(a),g(0),b(Date.now()),x(e.touches[0].clientY),l(!1)},onWheel:e=>{e.preventDefault();const t=e.deltaY>0?1:-1,r=S.findIndex((e=>Math.abs(e-n)<.01)),a=Math.max(0,Math.min(S.length-1,r+t)),s=S[a],c=$(s);l(!0),o(c),i(s),setTimeout((()=>l(!1)),200)},children:(0,er.jsx)(Dm,{offset:a,isAnimating:s,children:S.map(((e,t)=>{const i=S.findIndex((e=>Math.abs(e-n)<.01)),r=t===i,a=1===Math.abs(t-i);return(0,er.jsx)(Mm,{isSelected:r,isAdjacent:a,children:e.toFixed(1)},e)}))})})})]}),(0,er.jsx)(Lm,{children:(0,er.jsx)(Qd.div,{variants:z,children:(0,er.jsx)(Om,{onClick:()=>{t("/age")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Nm=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,Fm=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,Im=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    font-weight: 800;
    font-family: ${e=>e.theme.fonts.display};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.xl};
    letter-spacing: -0.03em;
    text-align: center;
    position: relative;

    .unit {
        font-size: ${e=>e.theme.fontSizes.xl};
        color: ${e=>e.theme.colors.textLight};
        font-weight: 500;
        margin-left: ${e=>e.theme.spacing.sm};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${e=>e.theme.colors.primary};
        border-radius: ${e=>e.theme.borderRadius.full};
    }
`,Vm=Qi.div`
    width: 200px;
    height: 300px;
    position: relative;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius.xl};
    border: 2px solid ${e=>e.theme.colors.border};
    overflow: hidden;
    box-shadow: 
        inset 0 2px 10px rgba(0, 0, 0, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.1);
`,Um=Qi.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }

    /* Selection indicator */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 50px;
        transform: translateY(-50%);
        background: ${e=>e.theme.colors.primarySolid}10;
        border-top: 2px solid ${e=>e.theme.colors.primarySolid};
        border-bottom: 2px solid ${e=>e.theme.colors.primarySolid};
        z-index: 2;
        pointer-events: none;
    }

    /* Fade gradients */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            ${e=>e.theme.colors.surface} 0%,
            transparent 25%,
            transparent 75%,
            ${e=>e.theme.colors.surface} 100%
        );
        pointer-events: none;
        z-index: 1;
    }
`,Bm=Qi.div`
    padding: 125px 0;
    transform: translateY(${e=>e.offset}px);
    transition: transform ${e=>e.isAnimating?"0.3s ease-out":"0s"};
`,Hm=Qi.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.isSelected?e.theme.fontSizes["2xl"]:e.isAdjacent?e.theme.fontSizes.xl:e.theme.fontSizes.lg};
    font-weight: ${e=>e.isSelected?700:e.isAdjacent?600:400};
    color: ${e=>e.isSelected?e.theme.colors.primarySolid:e.isAdjacent?e.theme.colors.text:e.theme.colors.textLight};
    font-family: ${e=>e.theme.fonts.display};
    opacity: ${e=>e.isSelected?1:e.isAdjacent?.8:.4};
    transition: all 0.2s ease;
    transform: scale(${e=>e.isSelected?1.1:1});
    position: relative;
    z-index: 3;
`,qm=(Qi(Qd.div)`
    margin-top: ${e=>e.theme.spacing.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${e=>e.theme.spacing.md};
`,Qi(Qd.div)`
    width: 80px;
    height: 80px;
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.primarySolid}20 0%,
        ${e=>e.theme.colors.primarySolid}10 100%
    );
    border: 3px solid ${e=>e.theme.colors.primarySolid};
    border-radius: ${e=>e.theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: ${e=>e.theme.colors.shadow};

    .emoji {
        font-size: 2rem;
        position: relative;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${e=>e.theme.colors.primary};
        opacity: 0.1;
        border-radius: inherit;
    }
`,Qi.div`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.lg};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
    color: ${e=>e.theme.colors.text};
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 600;
    text-align: center;
`,Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),Wm=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,Ym=()=>{const t=Z(),[n,i]=(0,e.useState)(25),[r,a]=(0,e.useState)(0),[o,s]=(0,e.useState)(!1),[l,c]=(0,e.useState)(!1),[u,d]=(0,e.useState)(0),[m,p]=(0,e.useState)(0),[h,f]=(0,e.useState)(0),[g,y]=(0,e.useState)(0),[b,v]=(0,e.useState)(0),x=(0,e.useRef)(null),w=Array.from({length:88},((e,t)=>t+13)),S=(0,e.useCallback)((e=>{const t=Math.round(-e/50),n=Math.max(0,Math.min(w.length-1,t));return w[n]}),[w]),k=(0,e.useCallback)((e=>50*-w.indexOf(e)),[w]),$=(0,e.useCallback)((()=>{const e=S(r),t=k(e);s(!0),a(t),i(e),setTimeout((()=>s(!1)),300)}),[r,S,k]),E=e=>{if(!l)return;const t=Date.now(),n=m+(e-u),r=t-g;if(r>0){f((e-b)/r)}y(t),v(e);const o=50*-(w.length-1),s=Math.max(o,Math.min(0,n));a(s),i(S(s))},j=e=>{E(e.clientY)},C=e=>{e.preventDefault(),E(e.touches[0].clientY)},P=()=>{if(l)if(c(!1),Math.abs(h)>.5){const e=S(r+100*h),t=k(e);s(!0),a(t),i(e),setTimeout((()=>s(!1)),300)}else $()};(0,e.useEffect)((()=>{const e=()=>P(),t=e=>j(e),n=()=>P(),i=e=>C(e);return l&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",n)}}),[l,j,C,P]),(0,e.useEffect)((()=>{a(k(n))}),[]);const T={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.15}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,er.jsx)(Nm,{children:(0,er.jsxs)(Qd.div,{variants:T,children:[(0,er.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1ntos a\xf1os tienes?"}),(0,er.jsx)(nm,{children:"Desliza en la lista para seleccionar tu edad"})]})}),(0,er.jsxs)(Fm,{variants:T,children:[(0,er.jsxs)(Im,{initial:{scale:.8},animate:{scale:1},transition:{type:"spring",stiffness:200},children:[n,(0,er.jsx)("span",{className:"unit",children:"a\xf1os"})]},n),(0,er.jsx)(Vm,{children:(0,er.jsx)(Um,{ref:x,onMouseDown:e=>{c(!0),d(e.clientY),p(r),f(0),y(Date.now()),v(e.clientY),s(!1)},onTouchStart:e=>{c(!0),d(e.touches[0].clientY),p(r),f(0),y(Date.now()),v(e.touches[0].clientY),s(!1)},onWheel:e=>{e.preventDefault();const t=e.deltaY>0?1:-1,r=w.indexOf(n),o=Math.max(0,Math.min(w.length-1,r+t)),l=w[o],c=k(l);s(!0),a(c),i(l),setTimeout((()=>s(!1)),200)},children:(0,er.jsx)(Bm,{offset:r,isAnimating:o,children:w.map(((e,t)=>{const i=w.indexOf(n),r=t===i,a=1===Math.abs(t-i);return(0,er.jsx)(Hm,{isSelected:r,isAdjacent:a,children:e},e)}))})})})]}),(0,er.jsx)(qm,{children:(0,er.jsx)(Qd.div,{variants:T,children:(0,er.jsx)(Wm,{onClick:()=>{t("/injuries")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Km=Qi.div`
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
    text-align: center;
    flex-shrink: 0;
`,Gm=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${e=>e.theme.spacing.md};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: 0 ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: calc(100vh - 280px); /* Fixed height to prevent page scroll */

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,Xm=Qi.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
`,Qm=Qi.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    gap: ${e=>e.theme.spacing.sm};
    padding: ${e=>e.theme.spacing.sm} 0;
    overflow-y: auto;
    flex: 1;
    
    /* Custom scrollbar */
    &::-webkit-scrollbar {
        width: 4px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${e=>e.theme.colors.primarySolid}40;
        border-radius: ${e=>e.theme.borderRadius.full};
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${e=>e.theme.colors.primarySolid}60;
    }
`,Jm=Qi(Qd.div)`
    display: flex;
    align-items: center;
    padding: ${e=>e.theme.spacing.md};
    background: ${e=>e.selected?`linear-gradient(135deg, ${e.theme.colors.primarySolid}15 0%, ${e.theme.colors.primarySolid}05 100%)`:e.theme.colors.glass};
    backdrop-filter: blur(10px);
    border: 1px solid ${e=>e.selected?e.theme.colors.primarySolid:"rgba(255, 255, 255, 0.2)"};
    border-radius: ${e=>e.theme.borderRadius.lg};
    cursor: pointer;
    transition: all ${e=>e.theme.transitions.base};
    position: relative;
    overflow: hidden;
    box-shadow: ${e=>e.selected?`0 4px 16px ${e.theme.colors.primarySolid}20`:"0 2px 8px rgba(0, 0, 0, 0.05)"};
    flex-shrink: 0;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        border-color: ${e=>e.theme.colors.primarySolid}60;
        background: ${e=>e.selected?`linear-gradient(135deg, ${e.theme.colors.primarySolid}20 0%, ${e.theme.colors.primarySolid}08 100%)`:"rgba(255, 255, 255, 0.8)"};
    }

    &:active {
        transform: translateY(0);
    }
`,Zm=Qi.div`
    width: 40px;
    height: 40px;
    border-radius: ${e=>e.theme.borderRadius.lg};
    background: ${e=>e.selected?e.theme.colors.primarySolid:e.theme.colors.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${e=>e.theme.spacing.md};
    font-size: 18px;
    transition: all ${e=>e.theme.transitions.base};
    position: relative;
    z-index: 1;
    box-shadow: ${e=>e.selected?`0 2px 8px ${e.theme.colors.primarySolid}30`:"0 1px 3px rgba(0, 0, 0, 0.1)"};

    ${e=>e.selected&&"\n        color: white;\n        transform: scale(1.05);\n    "}
`,ep=Qi.div`
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: 500;
    color: ${e=>e.selected?e.theme.colors.primarySolid:e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.main};
    position: relative;
    z-index: 1;
    transition: color ${e=>e.theme.transitions.base};
`,tp=(Qi(Qd.div)`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.lg};
    padding: ${e=>e.theme.spacing.sm};
    margin: ${e=>e.theme.spacing.sm} auto 0;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    max-width: 320px;
    width: 100%;
    flex-shrink: 0;

    h3 {
        color: ${e=>e.theme.colors.text};
        font-size: ${e=>e.theme.fontSizes.sm};
        font-weight: 600;
        margin-bottom: ${e=>e.theme.spacing.xs};
        background: ${e=>e.theme.colors.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        color: ${e=>e.theme.colors.textLight};
        font-size: ${e=>e.theme.fontSizes.xs};
        line-height: 1.3;
    }
`,Qi.div`
    padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
    flex-shrink: 0;
`),np=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,ip=()=>{const t=Z(),[n,i]=(0,e.useState)(null),r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},a={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}};return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column",minHeight:0,maxHeight:"100vh",overflow:"hidden"},children:[(0,er.jsx)(Km,{children:(0,er.jsx)(Qd.div,{variants:r,children:(0,er.jsx)(tm,{gradient:!0,children:"\xbfHas experimentado alguna molestia?"})})}),(0,er.jsx)(Gm,{variants:r,children:(0,er.jsx)(Xm,{children:(0,er.jsx)(Qm,{children:[{id:"none",label:"Ninguna molestia",icon:"\u2728"},{id:"back",label:"Lesi\xf3n de espalda",icon:"\ud83e\uddb4"},{id:"arms",label:"Lesi\xf3n de brazos",icon:"\ud83d\udcaa"},{id:"knees",label:"Lesi\xf3n de rodillas",icon:"\ud83e\uddb5"},{id:"cardio",label:"Cardiomiopat\xeda",icon:"\u2764\ufe0f"}].map(((e,t)=>(0,er.jsxs)(Jm,{selected:n===e.id,onClick:()=>(e=>{i(e)})(e.id),variants:a,initial:"hidden",animate:"visible",transition:{delay:.1*t},whileTap:{scale:.98},children:[(0,er.jsx)(Zm,{selected:n===e.id,children:e.icon}),(0,er.jsx)(ep,{selected:n===e.id,children:e.label})]},e.id)))})})}),(0,er.jsx)(tp,{children:(0,er.jsx)(Qd.div,{variants:r,children:(0,er.jsx)(np,{onClick:()=>{t("/activity")},disabled:!n,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})};function rp(e){return rp="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rp(e)}function ap(e){var t=function(e,t){if("object"!=rp(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=rp(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==rp(t)?t:t+""}function op(e,t,n){return(t=ap(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function lp(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?sp(Object(n),!0).forEach((function(t){op(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sp(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function cp(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function up(e,t){if(e){if("string"==typeof e)return cp(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cp(e,t):void 0}}function dp(e){return function(e){if(Array.isArray(e))return cp(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||up(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mp(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=a.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}(e,t)||up(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var pp=n(139),hp=n.n(pp);function fp(t){var n=e.useRef();n.current=t;var i=e.useCallback((function(){for(var e,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(i))}),[]);return i}var gp="undefined"!==typeof window&&window.document&&window.document.createElement?e.useLayoutEffect:e.useEffect,yp=function(t,n){var i=e.useRef(!0);gp((function(){return t(i.current)}),n),gp((function(){return i.current=!1,function(){i.current=!0}}),[])},bp=function(e,t){yp((function(t){if(!t)return e()}),t)};const vp=yp;function xp(t){var n=e.useRef(!1),i=mp(e.useState(t),2),r=i[0],a=i[1];return e.useEffect((function(){return n.current=!1,function(){n.current=!0}}),[]),[r,function(e,t){t&&n.current||a(e)}]}function wp(e){return void 0!==e}var Sp={},kp=[];function $p(e,t){}function Ep(e,t){}function jp(e,t,n){t||Sp[n]||(e(!1,n),Sp[n]=!0)}function Cp(e,t){jp($p,e,t)}Cp.preMessage=function(e){kp.push(e)},Cp.resetWarned=function(){Sp={}},Cp.noteOnce=function(e,t){jp(Ep,e,t)};const Pp=Cp;const Tp=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new Set;return function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=i.has(t);if(Pp(!o,"Warning: There may be circular references"),o)return!1;if(t===r)return!0;if(n&&a>1)return!1;i.add(t);var s=a+1;if(Array.isArray(t)){if(!Array.isArray(r)||t.length!==r.length)return!1;for(var l=0;l<t.length;l++)if(!e(t[l],r[l],s))return!1;return!0}if(t&&r&&"object"===rp(t)&&"object"===rp(r)){var c=Object.keys(t);return c.length===Object.keys(r).length&&c.every((function(n){return e(t[n],r[n],s)}))}return!1}(e,t)};function zp(){return zp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},zp.apply(null,arguments)}function Ap(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;n[i]=e[i]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Rp=n(950);function Dp(e,t,n){return(e-t)/(n-t)}function Mp(e,t,n,i){var r=Dp(t,n,i),a={};switch(e){case"rtl":a.right="".concat(100*r,"%"),a.transform="translateX(50%)";break;case"btt":a.bottom="".concat(100*r,"%"),a.transform="translateY(50%)";break;case"ttb":a.top="".concat(100*r,"%"),a.transform="translateY(-50%)";break;default:a.left="".concat(100*r,"%"),a.transform="translateX(-50%)"}return a}function Lp(e,t){return Array.isArray(e)?e[t]:e}var Op={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=Op.F1&&t<=Op.F12)return!1;switch(t){case Op.ALT:case Op.CAPS_LOCK:case Op.CONTEXT_MENU:case Op.CTRL:case Op.DOWN:case Op.END:case Op.ESC:case Op.HOME:case Op.INSERT:case Op.LEFT:case Op.MAC_FF_META:case Op.META:case Op.NUMLOCK:case Op.NUM_CENTER:case Op.PAGE_DOWN:case Op.PAGE_UP:case Op.PAUSE:case Op.PRINT_SCREEN:case Op.RIGHT:case Op.SHIFT:case Op.UP:case Op.WIN_KEY:case Op.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=Op.ZERO&&e<=Op.NINE)return!0;if(e>=Op.NUM_ZERO&&e<=Op.NUM_MULTIPLY)return!0;if(e>=Op.A&&e<=Op.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case Op.SPACE:case Op.QUESTION_MARK:case Op.NUM_PLUS:case Op.NUM_MINUS:case Op.NUM_PERIOD:case Op.NUM_DIVISION:case Op.SEMICOLON:case Op.DASH:case Op.EQUALS:case Op.COMMA:case Op.PERIOD:case Op.SLASH:case Op.APOSTROPHE:case Op.SINGLE_QUOTE:case Op.OPEN_SQUARE_BRACKET:case Op.BACKSLASH:case Op.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const _p=Op;const Np=e.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});var Fp=e.createContext({}),Ip=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"];const Vp=e.forwardRef((function(t,n){var i,r=t.prefixCls,a=t.value,o=t.valueIndex,s=t.onStartMove,l=t.onDelete,c=t.style,u=t.render,d=t.dragging,m=t.draggingDelete,p=t.onOffsetChange,h=t.onChangeComplete,f=t.onFocus,g=t.onMouseEnter,y=Ap(t,Ip),b=e.useContext(Np),v=b.min,x=b.max,w=b.direction,S=b.disabled,k=b.keyboard,$=b.range,E=b.tabIndex,j=b.ariaLabelForHandle,C=b.ariaLabelledByForHandle,P=b.ariaRequired,T=b.ariaValueTextFormatterForHandle,z=b.styles,A=b.classNames,R="".concat(r,"-handle"),D=function(e){S||s(e,o)},M=Mp(w,a,v,x),L={};null!==o&&(L={tabIndex:S?null:Lp(E,o),role:"slider","aria-valuemin":v,"aria-valuemax":x,"aria-valuenow":a,"aria-disabled":S,"aria-label":Lp(j,o),"aria-labelledby":Lp(C,o),"aria-required":Lp(P,o),"aria-valuetext":null===(i=Lp(T,o))||void 0===i?void 0:i(a),"aria-orientation":"ltr"===w||"rtl"===w?"horizontal":"vertical",onMouseDown:D,onTouchStart:D,onFocus:function(e){null===f||void 0===f||f(e,o)},onMouseEnter:function(e){g(e,o)},onKeyDown:function(e){if(!S&&k){var t=null;switch(e.which||e.keyCode){case _p.LEFT:t="ltr"===w||"btt"===w?-1:1;break;case _p.RIGHT:t="ltr"===w||"btt"===w?1:-1;break;case _p.UP:t="ttb"!==w?1:-1;break;case _p.DOWN:t="ttb"!==w?-1:1;break;case _p.HOME:t="min";break;case _p.END:t="max";break;case _p.PAGE_UP:t=2;break;case _p.PAGE_DOWN:t=-2;break;case _p.BACKSPACE:case _p.DELETE:l(o)}null!==t&&(e.preventDefault(),p(t,o))}},onKeyUp:function(e){switch(e.which||e.keyCode){case _p.LEFT:case _p.RIGHT:case _p.UP:case _p.DOWN:case _p.HOME:case _p.END:case _p.PAGE_UP:case _p.PAGE_DOWN:null===h||void 0===h||h()}}});var O=e.createElement("div",zp({ref:n,className:hp()(R,op(op(op({},"".concat(R,"-").concat(o+1),null!==o&&$),"".concat(R,"-dragging"),d),"".concat(R,"-dragging-delete"),m),A.handle),style:lp(lp(lp({},M),c),z.handle)},L,y));return u&&(O=u(O,{index:o,prefixCls:r,value:a,dragging:d,draggingDelete:m})),O}));var Up=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],Bp=e.forwardRef((function(t,n){var i=t.prefixCls,r=t.style,a=t.onStartMove,o=t.onOffsetChange,s=t.values,l=t.handleRender,c=t.activeHandleRender,u=t.draggingIndex,d=t.draggingDelete,m=t.onFocus,p=Ap(t,Up),h=e.useRef({}),f=mp(e.useState(!1),2),g=f[0],y=f[1],b=mp(e.useState(-1),2),v=b[0],x=b[1],w=function(e){x(e),y(!0)};e.useImperativeHandle(n,(function(){return{focus:function(e){var t;null===(t=h.current[e])||void 0===t||t.focus()},hideHelp:function(){(0,Rp.flushSync)((function(){y(!1)}))}}}));var S=lp({prefixCls:i,onStartMove:a,onOffsetChange:o,render:l,onFocus:function(e,t){w(t),null===m||void 0===m||m(e)},onMouseEnter:function(e,t){w(t)}},p);return e.createElement(e.Fragment,null,s.map((function(t,n){var i=u===n;return e.createElement(Vp,zp({ref:function(e){e?h.current[n]=e:delete h.current[n]},dragging:i,draggingDelete:i&&d,style:Lp(r,n),key:n,value:t,valueIndex:n},S))})),c&&g&&e.createElement(Vp,zp({key:"a11y"},S,{value:s[v],valueIndex:null,dragging:-1!==u,draggingDelete:d,render:c,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}));const Hp=Bp;const qp=function(t){var n=t.prefixCls,i=t.style,r=t.children,a=t.value,o=t.onClick,s=e.useContext(Np),l=s.min,c=s.max,u=s.direction,d=s.includedStart,m=s.includedEnd,p=s.included,h="".concat(n,"-text"),f=Mp(u,a,l,c);return e.createElement("span",{className:hp()(h,op({},"".concat(h,"-active"),p&&d<=a&&a<=m)),style:lp(lp({},f),i),onMouseDown:function(e){e.stopPropagation()},onClick:function(){o(a)}},r)};const Wp=function(t){var n=t.prefixCls,i=t.marks,r=t.onClick,a="".concat(n,"-mark");return i.length?e.createElement("div",{className:a},i.map((function(t){var n=t.value,i=t.style,o=t.label;return e.createElement(qp,{key:n,prefixCls:a,style:i,value:n,onClick:r},o)}))):null};const Yp=function(t){var n=t.prefixCls,i=t.value,r=t.style,a=t.activeStyle,o=e.useContext(Np),s=o.min,l=o.max,c=o.direction,u=o.included,d=o.includedStart,m=o.includedEnd,p="".concat(n,"-dot"),h=u&&d<=i&&i<=m,f=lp(lp({},Mp(c,i,s,l)),"function"===typeof r?r(i):r);return h&&(f=lp(lp({},f),"function"===typeof a?a(i):a)),e.createElement("span",{className:hp()(p,op({},"".concat(p,"-active"),h)),style:f})};const Kp=function(t){var n=t.prefixCls,i=t.marks,r=t.dots,a=t.style,o=t.activeStyle,s=e.useContext(Np),l=s.min,c=s.max,u=s.step,d=e.useMemo((function(){var e=new Set;if(i.forEach((function(t){e.add(t.value)})),r&&null!==u)for(var t=l;t<=c;)e.add(t),t+=u;return Array.from(e)}),[l,c,u,r,i]);return e.createElement("div",{className:"".concat(n,"-step")},d.map((function(t){return e.createElement(Yp,{prefixCls:n,key:t,value:t,style:a,activeStyle:o})})))};const Gp=function(t){var n=t.prefixCls,i=t.style,r=t.start,a=t.end,o=t.index,s=t.onStartMove,l=t.replaceCls,c=e.useContext(Np),u=c.direction,d=c.min,m=c.max,p=c.disabled,h=c.range,f=c.classNames,g="".concat(n,"-track"),y=Dp(r,d,m),b=Dp(a,d,m),v=function(e){!p&&s&&s(e,-1)},x={};switch(u){case"rtl":x.right="".concat(100*y,"%"),x.width="".concat(100*b-100*y,"%");break;case"btt":x.bottom="".concat(100*y,"%"),x.height="".concat(100*b-100*y,"%");break;case"ttb":x.top="".concat(100*y,"%"),x.height="".concat(100*b-100*y,"%");break;default:x.left="".concat(100*y,"%"),x.width="".concat(100*b-100*y,"%")}var w=l||hp()(g,op(op({},"".concat(g,"-").concat(o+1),null!==o&&h),"".concat(n,"-track-draggable"),s),f.track);return e.createElement("div",{className:w,style:lp(lp({},x),i),onMouseDown:v,onTouchStart:v})};const Xp=function(t){var n=t.prefixCls,i=t.style,r=t.values,a=t.startPoint,o=t.onStartMove,s=e.useContext(Np),l=s.included,c=s.range,u=s.min,d=s.styles,m=s.classNames,p=e.useMemo((function(){if(!c){if(0===r.length)return[];var e=null!==a&&void 0!==a?a:u,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],i=0;i<r.length-1;i+=1)n.push({start:r[i],end:r[i+1]});return n}),[r,c,a,u]);if(!l)return null;var h=null!==p&&void 0!==p&&p.length&&(m.tracks||d.tracks)?e.createElement(Gp,{index:null,prefixCls:n,start:p[0].start,end:p[p.length-1].end,replaceCls:hp()(m.tracks,"".concat(n,"-tracks")),style:d.tracks}):null;return e.createElement(e.Fragment,null,h,p.map((function(t,r){var a=t.start,s=t.end;return e.createElement(Gp,{index:r,prefixCls:n,style:lp(lp({},Lp(i,r)),d.track),start:a,end:s,key:r,onStartMove:o})})))};function Qp(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}const Jp=function(t,n,i,r,a,o,s,l,c,u,d){var m=mp(e.useState(null),2),p=m[0],h=m[1],f=mp(e.useState(-1),2),g=f[0],y=f[1],b=mp(e.useState(!1),2),v=b[0],x=b[1],w=mp(e.useState(i),2),S=w[0],k=w[1],$=mp(e.useState(i),2),E=$[0],j=$[1],C=e.useRef(null),P=e.useRef(null),T=e.useRef(null),z=e.useContext(Fp),A=z.onDragStart,R=z.onDragChange;vp((function(){-1===g&&k(i)}),[i,g]),e.useEffect((function(){return function(){document.removeEventListener("mousemove",C.current),document.removeEventListener("mouseup",P.current),T.current&&(T.current.removeEventListener("touchmove",C.current),T.current.removeEventListener("touchend",P.current))}}),[]);var D=function(e,t,n){void 0!==t&&h(t),k(e);var i=e;n&&(i=e.filter((function(e,t){return t!==g}))),s(i),R&&R({rawValues:e,deleteIndex:n?g:-1,draggingIndex:g,draggingValue:t})},M=fp((function(e,t,n){if(-1===e){var i=E[0],s=E[E.length-1],l=r-i,u=a-s,d=t*(a-r);d=Math.max(d,l),d=Math.min(d,u);var m=o(i+d);d=m-i;var p=E.map((function(e){return e+d}));D(p)}else{var h=(a-r)*t,f=dp(S);f[e]=E[e];var g=c(f,h,e,"dist");D(g.values,g.value,n)}})),L=e.useMemo((function(){var e=dp(i).sort((function(e,t){return e-t})),t=dp(S).sort((function(e,t){return e-t})),n={};t.forEach((function(e){n[e]=(n[e]||0)+1})),e.forEach((function(e){n[e]=(n[e]||0)-1}));var r=u?1:0,a=Object.values(n).reduce((function(e,t){return e+Math.abs(t)}),0);return a<=r?S:i}),[i,S,u]);return[g,p,v,L,function(e,r,a){e.stopPropagation();var o=a||i,s=o[r];y(r),h(s),j(o),k(o),x(!1);var c=Qp(e),m=c.pageX,p=c.pageY,f=!1;A&&A({rawValues:o,draggingIndex:r,draggingValue:s});var g=function(e){e.preventDefault();var i,a,o=Qp(e),s=o.pageX,l=o.pageY,c=s-m,h=l-p,g=t.current.getBoundingClientRect(),y=g.width,b=g.height;switch(n){case"btt":i=-h/b,a=c;break;case"ttb":i=h/b,a=c;break;case"rtl":i=-c/y,a=h;break;default:i=c/y,a=h}f=!!u&&(Math.abs(a)>130&&d<S.length),x(f),M(r,i,f)},b=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",g),T.current&&(T.current.removeEventListener("touchmove",C.current),T.current.removeEventListener("touchend",P.current)),C.current=null,P.current=null,T.current=null,l(f),y(-1),x(!1)};document.addEventListener("mouseup",b),document.addEventListener("mousemove",g),e.currentTarget.addEventListener("touchend",b),e.currentTarget.addEventListener("touchmove",g),C.current=g,P.current=b,T.current=e.currentTarget}]};var Zp=e.forwardRef((function(t,n){var i=t.prefixCls,r=void 0===i?"rc-slider":i,a=t.className,o=t.style,s=t.classNames,l=t.styles,c=t.id,u=t.disabled,d=void 0!==u&&u,m=t.keyboard,p=void 0===m||m,h=t.autoFocus,f=t.onFocus,g=t.onBlur,y=t.min,b=void 0===y?0:y,v=t.max,x=void 0===v?100:v,w=t.step,S=void 0===w?1:w,k=t.value,$=t.defaultValue,E=t.range,j=t.count,C=t.onChange,P=t.onBeforeChange,T=t.onAfterChange,z=t.onChangeComplete,A=t.allowCross,R=void 0===A||A,D=t.pushable,M=void 0!==D&&D,L=t.reverse,O=t.vertical,_=t.included,N=void 0===_||_,F=t.startPoint,I=t.trackStyle,V=t.handleStyle,U=t.railStyle,B=t.dotStyle,H=t.activeDotStyle,q=t.marks,W=t.dots,Y=t.handleRender,K=t.activeHandleRender,G=t.track,X=t.tabIndex,Q=void 0===X?0:X,J=t.ariaLabelForHandle,Z=t.ariaLabelledByForHandle,ee=t.ariaRequired,te=t.ariaValueTextFormatterForHandle,ne=e.useRef(null),ie=e.useRef(null),re=e.useMemo((function(){return O?L?"ttb":"btt":L?"rtl":"ltr"}),[L,O]),ae=function(t){return(0,e.useMemo)((function(){if(!0===t||!t)return[!!t,!1,!1,0];var e=t.editable,n=t.draggableTrack;return[!0,e,!e&&n,t.minCount||0,t.maxCount]}),[t])}(E),oe=mp(ae,5),se=oe[0],le=oe[1],ce=oe[2],ue=oe[3],de=oe[4],me=e.useMemo((function(){return isFinite(b)?b:0}),[b]),pe=e.useMemo((function(){return isFinite(x)?x:100}),[x]),he=e.useMemo((function(){return null!==S&&S<=0?1:S}),[S]),fe=e.useMemo((function(){return"boolean"===typeof M?!!M&&he:M>=0&&M}),[M,he]),ge=e.useMemo((function(){return Object.keys(q||{}).map((function(t){var n=q[t],i={value:Number(t)};return n&&"object"===rp(n)&&!e.isValidElement(n)&&("label"in n||"style"in n)?(i.style=n.style,i.label=n.label):i.label=n,i})).filter((function(e){var t=e.label;return t||"number"===typeof t})).sort((function(e,t){return e.value-t.value}))}),[q]),ye=function(t,n,i,r,a,o){var s=e.useCallback((function(e){return Math.max(t,Math.min(n,e))}),[t,n]),l=e.useCallback((function(e){if(null!==i){var r=t+Math.round((s(e)-t)/i)*i,a=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(a(i),a(n),a(t)),l=Number(r.toFixed(o));return t<=l&&l<=n?l:null}return null}),[i,t,n,s]),c=e.useCallback((function(e){var a=s(e),o=r.map((function(e){return e.value}));null!==i&&o.push(l(e)),o.push(t,n);var c=o[0],u=n-t;return o.forEach((function(e){var t=Math.abs(a-e);t<=u&&(c=e,u=t)})),c}),[t,n,r,i,s,l]),u=function e(a,o,s){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"===typeof o){var u,d=a[s],m=d+o,p=[];r.forEach((function(e){p.push(e.value)})),p.push(t,n),p.push(l(d));var h=o>0?1:-1;"unit"===c?p.push(l(d+h*i)):p.push(l(m)),p=p.filter((function(e){return null!==e})).filter((function(e){return o<0?e<=d:e>=d})),"unit"===c&&(p=p.filter((function(e){return e!==d})));var f="unit"===c?d:m;u=p[0];var g=Math.abs(u-f);if(p.forEach((function(e){var t=Math.abs(e-f);t<g&&(u=e,g=t)})),void 0===u)return o<0?t:n;if("dist"===c)return u;if(Math.abs(o)>1){var y=dp(a);return y[s]=u,e(y,o-h,s,c)}return u}return"min"===o?t:"max"===o?n:void 0},d=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",r=e[n],a=u(e,t,n,i);return{value:a,changed:a!==r}},m=function(e){return null===o&&0===e||"number"===typeof o&&e<o};return[c,function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",r=e.map(c),s=r[n],l=u(r,t,n,i);if(r[n]=l,!1===a){var p=o||0;n>0&&r[n-1]!==s&&(r[n]=Math.max(r[n],r[n-1]+p)),n<r.length-1&&r[n+1]!==s&&(r[n]=Math.min(r[n],r[n+1]-p))}else if("number"===typeof o||null===o){for(var h=n+1;h<r.length;h+=1)for(var f=!0;m(r[h]-r[h-1])&&f;){var g=d(r,1,h);r[h]=g.value,f=g.changed}for(var y=n;y>0;y-=1)for(var b=!0;m(r[y]-r[y-1])&&b;){var v=d(r,-1,y-1);r[y-1]=v.value,b=v.changed}for(var x=r.length-1;x>0;x-=1)for(var w=!0;m(r[x]-r[x-1])&&w;){var S=d(r,-1,x-1);r[x-1]=S.value,w=S.changed}for(var k=0;k<r.length-1;k+=1)for(var $=!0;m(r[k+1]-r[k])&&$;){var E=d(r,1,k+1);r[k+1]=E.value,$=E.changed}}return{value:r[n],values:r}}]}(me,pe,he,ge,R,fe),be=mp(ye,2),ve=be[0],xe=be[1],we=function(e,t){var n=t||{},i=n.defaultValue,r=n.value,a=n.onChange,o=n.postState,s=mp(xp((function(){return wp(r)?r:wp(i)?"function"===typeof i?i():i:"function"===typeof e?e():e})),2),l=s[0],c=s[1],u=void 0!==r?r:l,d=o?o(u):u,m=fp(a),p=mp(xp([u]),2),h=p[0],f=p[1];return bp((function(){var e=h[0];l!==e&&m(l,e)}),[h]),bp((function(){wp(r)||c(r)}),[r]),[d,fp((function(e,t){c(e,t),f([u],t)}))]}($,{value:k}),Se=mp(we,2),ke=Se[0],$e=Se[1],Ee=e.useMemo((function(){var e=null===ke||void 0===ke?[]:Array.isArray(ke)?ke:[ke],t=mp(e,1)[0],n=null===ke?[]:[void 0===t?me:t];if(se){if(n=dp(e),j||void 0===ke){var i=j>=0?j+1:2;for(n=n.slice(0,i);n.length<i;){var r;n.push(null!==(r=n[n.length-1])&&void 0!==r?r:me)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=ve(e)})),n}),[ke,se,me,j,ve]),je=function(e){return se?e:e[0]},Ce=fp((function(e){var t=dp(e).sort((function(e,t){return e-t}));C&&!Tp(t,Ee,!0)&&C(je(t)),$e(t)})),Pe=fp((function(e){e&&ne.current.hideHelp();var t=je(Ee);null===T||void 0===T||T(t),Pp(!T,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null===z||void 0===z||z(t)})),Te=mp(Jp(ie,re,Ee,me,pe,ve,Ce,Pe,xe,le,ue),5),ze=Te[0],Ae=Te[1],Re=Te[2],De=Te[3],Me=Te[4],Le=function(e,t){if(!d){var n=dp(Ee),i=0,r=0,a=pe-me;Ee.forEach((function(t,n){var o=Math.abs(e-t);o<=a&&(a=o,i=n),t<e&&(r=n)}));var o=i;le&&0!==a&&(!de||Ee.length<de)?(n.splice(r+1,0,e),o=r+1):n[i]=e,se&&!Ee.length&&void 0===j&&n.push(e);var s,l,c=je(n);if(null===P||void 0===P||P(c),Ce(n),t)null===(s=document.activeElement)||void 0===s||null===(l=s.blur)||void 0===l||l.call(s),ne.current.focus(o),Me(t,o,n);else null===T||void 0===T||T(c),Pp(!T,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null===z||void 0===z||z(c)}},Oe=mp(e.useState(null),2),_e=Oe[0],Ne=Oe[1];e.useEffect((function(){if(null!==_e){var e=Ee.indexOf(_e);e>=0&&ne.current.focus(e)}Ne(null)}),[_e]);var Fe=e.useMemo((function(){return(!ce||null!==he)&&ce}),[ce,he]),Ie=fp((function(e,t){Me(e,t),null===P||void 0===P||P(je(Ee))})),Ve=-1!==ze;e.useEffect((function(){if(!Ve){var e=Ee.lastIndexOf(Ae);ne.current.focus(e)}}),[Ve]);var Ue=e.useMemo((function(){return dp(De).sort((function(e,t){return e-t}))}),[De]),Be=mp(e.useMemo((function(){return se?[Ue[0],Ue[Ue.length-1]]:[me,Ue[0]]}),[Ue,se,me]),2),He=Be[0],qe=Be[1];e.useImperativeHandle(n,(function(){return{focus:function(){ne.current.focus(0)},blur:function(){var e,t=document.activeElement;null!==(e=ie.current)&&void 0!==e&&e.contains(t)&&(null===t||void 0===t||t.blur())}}})),e.useEffect((function(){h&&ne.current.focus(0)}),[]);var We=e.useMemo((function(){return{min:me,max:pe,direction:re,disabled:d,keyboard:p,step:he,included:N,includedStart:He,includedEnd:qe,range:se,tabIndex:Q,ariaLabelForHandle:J,ariaLabelledByForHandle:Z,ariaRequired:ee,ariaValueTextFormatterForHandle:te,styles:l||{},classNames:s||{}}}),[me,pe,re,d,p,he,N,He,qe,se,Q,J,Z,ee,te,l,s]);return e.createElement(Np.Provider,{value:We},e.createElement("div",{ref:ie,className:hp()(r,a,op(op(op(op({},"".concat(r,"-disabled"),d),"".concat(r,"-vertical"),O),"".concat(r,"-horizontal"),!O),"".concat(r,"-with-marks"),ge.length)),style:o,onMouseDown:function(e){e.preventDefault();var t,n=ie.current.getBoundingClientRect(),i=n.width,r=n.height,a=n.left,o=n.top,s=n.bottom,l=n.right,c=e.clientX,u=e.clientY;switch(re){case"btt":t=(s-u)/r;break;case"ttb":t=(u-o)/r;break;case"rtl":t=(l-c)/i;break;default:t=(c-a)/i}Le(ve(me+t*(pe-me)),e)},id:c},e.createElement("div",{className:hp()("".concat(r,"-rail"),null===s||void 0===s?void 0:s.rail),style:lp(lp({},U),null===l||void 0===l?void 0:l.rail)}),!1!==G&&e.createElement(Xp,{prefixCls:r,style:I,values:Ee,startPoint:F,onStartMove:Fe?Ie:void 0}),e.createElement(Kp,{prefixCls:r,marks:ge,dots:W,style:B,activeStyle:H}),e.createElement(Hp,{ref:ne,prefixCls:r,style:V,values:De,draggingIndex:ze,draggingDelete:Re,onStartMove:Ie,onOffsetChange:function(e,t){if(!d){var n=xe(Ee,e,t);null===P||void 0===P||P(je(Ee)),Ce(n.values),Ne(n.value)}},onFocus:f,onBlur:g,handleRender:Y,activeHandleRender:K,onChangeComplete:Pe,onDelete:le?function(e){if(!(d||!le||Ee.length<=ue)){var t=dp(Ee);t.splice(e,1),null===P||void 0===P||P(je(t)),Ce(t);var n=Math.max(0,e-1);ne.current.hideHelp(),ne.current.focus(n)}}:void 0}),e.createElement(Wp,{prefixCls:r,marks:ge,onClick:Le})))}));const eh=Zp,th=eh,nh=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,ih=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    }
`,rh=Qi(Qd.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`,ah=Qi(Qd.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    border-radius: ${e=>e.theme.borderRadius.full};
    background: ${e=>e.theme.colors.primarySolid}15;
    backdrop-filter: blur(10px);
    border: 3px solid ${e=>e.theme.colors.primarySolid}30;
    margin-bottom: ${e=>e.theme.spacing.md};
    position: relative;

    &::after {
        content: ${e=>{switch(e.level){case"sedentary":return'"\ud83d\udecb\ufe0f"';case"light":return'"\ud83d\udeb6\u200d\u2640\ufe0f"';case"moderate":return'"\ud83c\udfc3\u200d\u2640\ufe0f"';case"very_active":return'"\ud83d\udcaa"';default:return'"\ud83d\udc64"'}}};
    }
`,oh=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${e=>e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.heading};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
`,sh=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,lh=Qi(Qd.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${e=>e.theme.spacing.xl} 35px;
`,ch=Qi.div`
    width: 100%;

    .rc-slider {
        background-color: transparent;
        border-radius: 6px;
        position: relative;
        height: 12px;
        padding: 5px 0;
        width: 100%;
        border-radius: 6px;
        touch-action: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider-rail {
        position: absolute;
        width: 100%;
        background: ${e=>e.theme.colors.backgroundDark};
        height: 12px;
        border-radius: 6px;
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .rc-slider-track {
        position: absolute;
        left: 0;
        height: 12px;
        border-radius: 6px;
        background: ${e=>e.theme.colors.primary};
        z-index: 1;
        box-shadow: 0 2px 8px ${e=>e.theme.colors.primarySolid}40;
    }

    .rc-slider-handle {
        position: absolute;
        width: 28px;
        height: 28px;
        cursor: pointer;
        cursor: -webkit-grab;
        margin-top: -8px;
        border-radius: 50%;
        border: 4px solid ${e=>e.theme.colors.primarySolid};
        background: white;
        touch-action: pan-x;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 ${e=>e.theme.colors.primarySolid}00;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;
    }

    .rc-slider-handle:hover {
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 8px ${e=>e.theme.colors.primarySolid}20;
    }

    .rc-slider-handle:active {
        border-color: ${e=>e.theme.colors.primarySolid};
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 12px ${e=>e.theme.colors.primarySolid}30;
        cursor: -webkit-grabbing;
        transform: scale(1.15);
    }

    .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border-color: ${e=>e.theme.colors.primarySolid};
        box-shadow: 0 0 0 5px ${e=>e.theme.colors.primarySolid}30;
    }

    .rc-slider-mark {
        position: absolute;
        top: 22px;
        left: 0;
        width: 100%;
        font-size: 12px;
    }

    .rc-slider-mark-text {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        color: ${e=>e.theme.colors.textLight};
        font-weight: 600;
        font-size: ${e=>e.theme.fontSizes.sm};
        transform: translateX(-50%);
        white-space: nowrap;
        user-select: none;
    }

    .rc-slider-mark-text-active {
        color: ${e=>e.theme.colors.primarySolid};
        font-weight: 700;
    }

    .rc-slider-step {
        display: none !important;
    }

    .rc-slider-dot {
        position: absolute;
        bottom: -6px;
        margin-left: -4px;
        width: 8px;
        height: 8px;
        border: 2px solid ${e=>e.theme.colors.backgroundDark};
        background: ${e=>e.theme.colors.surface};
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
        transition: all 0.2s ease;
    }

    .rc-slider-dot-active {
        border-color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid};
        transform: scale(1.2);
    }

    .rc-slider-dot-reverse {
        margin-right: -4px;
        margin-left: auto;
    }

    .rc-slider:hover .rc-slider-track {
        background: ${e=>e.theme.colors.primary};
        box-shadow: 0 2px 12px ${e=>e.theme.colors.primarySolid}50;
    }

    .rc-slider-tooltip-zoom-down-enter,
    .rc-slider-tooltip-zoom-down-appear {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        display: block !important;
        animation-play-state: paused;
    }

    .rc-slider-tooltip-zoom-down-leave {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        display: block !important;
        animation-play-state: paused;
    }

    .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
    .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
        animation-name: rcSliderTooltipZoomDownIn;
        animation-play-state: running;
    }

    .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
        animation-name: rcSliderTooltipZoomDownOut;
        animation-play-state: running;
    }

    .rc-slider-tooltip {
        position: absolute;
        left: -9999px;
        top: -9999px;
        visibility: visible;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider-tooltip-hidden {
        display: none;
    }

    .rc-slider-tooltip-placement-top {
        padding: 4px 0 8px 0;
    }

    .rc-slider-tooltip-inner {
        padding: 6px 10px;
        min-width: 24px;
        height: 24px;
        font-size: 12px;
        line-height: 1;
        color: #fff;
        text-align: center;
        text-decoration: none;
        background: ${e=>e.theme.colors.primarySolid};
        border-radius: 6px;
        box-shadow: 0 0 4px #d9d9d9;
        white-space: nowrap;
    }

    .rc-slider-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
        bottom: 4px;
        left: 50%;
        margin-left: -4px;
        border-width: 4px 4px 0;
        border-top-color: ${e=>e.theme.colors.primarySolid};
    }
`,uh=(Qi.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    position: relative;
`,Qi(Qd.div)`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.backgroundDark};
    border: 2px solid ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.border};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 4px ${e=>e.theme.colors.primarySolid}20;
    }
`,Qi.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    padding: 0 ${e=>e.theme.spacing.sm};
`,Qi(Qd.span)`
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.textLight};
    font-weight: ${e=>e.active?"700":"500"};
    text-align: center;
    min-width: 80px;
    transition: all 0.3s ease;

    ${e=>e.active&&"\n        transform: scale(1.05);\n    "}
`,Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),dh=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,mh=()=>{const t=Z(),[n,i]=(0,e.useState)(1),r=[{value:0,key:"sedentary",label:"Sedentario",description:"Trabajo de oficina, rara vez hago ejercicio y paso la mayor parte del tiempo sentado",emoji:"\ud83d\udecb\ufe0f",color:"#94a3b8"},{value:1,key:"light",label:"Actividad Ligera",description:"Ejercicio ligero 1-3 veces por semana, caminatas ocasionales para mantenerme activo",emoji:"\ud83d\udeb6\u200d\u2640\ufe0f",color:"#84cc16"},{value:2,key:"moderate",label:"Moderadamente Activo",description:"Ejercicio moderado 3-5 veces por semana, rutinas regulares para mantener mi salud",emoji:"\ud83c\udfc3\u200d\u2640\ufe0f",color:"#f59e0b"},{value:3,key:"very_active",label:"Muy Activo",description:"ejercicio intenso 6-7 veces por semana, entreno fuerte varias horas al d\xeda",emoji:"\ud83d\udcaa",color:"#dc2626"}],a=r.reduce(((e,t)=>(e[t.value]={style:{color:n===t.value?"#2d3e2d":"#94a3b8",fontWeight:n===t.value?"700":"500",fontSize:"11px",marginTop:"10px"},label:t.label.split(" ")[0]},e)),{}),o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s=r[n];return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,er.jsx)(nh,{children:(0,er.jsx)(Qd.div,{variants:o,children:(0,er.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1l es tu nivel de actividad?"})})}),(0,er.jsxs)(ih,{variants:o,children:[(0,er.jsxs)(rh,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3},children:[(0,er.jsx)(ah,{level:s.key,animate:{scale:[1,1.05,1],rotate:[0,2,-2,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),(0,er.jsx)(oh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:s.label},s.label)]}),(0,er.jsx)(sh,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},children:s.description},s.description),(0,er.jsx)(lh,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:(0,er.jsx)(ch,{children:(0,er.jsx)(th,{min:0,max:3,step:1,value:n,onChange:e=>{i(e)},marks:a,included:!0,trackStyle:{background:"#2d3e2d",boxShadow:"0 2px 8px rgba(45, 62, 45, 0.4)"},handleStyle:{background:"#2d3e2d",borderColor:"#2d3e2d",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)"},dotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"},activeDotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"}})})})]}),(0,er.jsx)(uh,{children:(0,er.jsx)(Qd.div,{variants:o,children:(0,er.jsx)(dh,{onClick:()=>{t("/flexibility")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},ph=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,hh=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,fh=Qi(Qd.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`,gh=Qi(Qd.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e=>e.theme.borderRadius.full};
    background: ${e=>e.theme.colors.primarySolid}15;
    backdrop-filter: blur(10px);
    border: 3px solid ${e=>e.theme.colors.primarySolid}30;
    margin-bottom: ${e=>e.theme.spacing.md};
    position: relative;
    overflow: hidden;
`,yh=Qi.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${e=>e.theme.borderRadius.lg};
    mix-blend-mode: color;
`,bh=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${e=>e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.heading};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
`,vh=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,xh=Qi(Qd.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${e=>e.theme.spacing.xl} 35px;
`,wh=Qi.div`
    width: 100%;

    .rc-slider {
        background-color: transparent;
        border-radius: 6px;
        position: relative;
        height: 12px;
        padding: 5px 0;
        width: 100%;
        border-radius: 6px;
        touch-action: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider-rail {
        position: absolute;
        width: 100%;
        background: ${e=>e.theme.colors.backgroundDark};
        height: 12px;
        border-radius: 6px;
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .rc-slider-track {
        position: absolute;
        left: 0;
        height: 12px;
        border-radius: 6px;
        background: ${e=>e.theme.colors.primary};
        z-index: 1;
        box-shadow: 0 2px 8px ${e=>e.theme.colors.primarySolid}40;
    }

    .rc-slider-handle {
        position: absolute;
        width: 28px;
        height: 28px;
        cursor: pointer;
        cursor: -webkit-grab;
        margin-top: -8px;
        border-radius: 50%;
        border: 4px solid ${e=>e.theme.colors.primarySolid};
        background: white;
        touch-action: pan-x;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 ${e=>e.theme.colors.primarySolid}00;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;
    }

    .rc-slider-handle:hover {
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 8px ${e=>e.theme.colors.primarySolid}20;
    }

    .rc-slider-handle:active {
        border-color: ${e=>e.theme.colors.primarySolid};
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 12px ${e=>e.theme.colors.primarySolid}30;
        cursor: -webkit-grabbing;
        transform: scale(1.15);
    }

    .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border-color: ${e=>e.theme.colors.primarySolid};
        box-shadow: 0 0 0 5px ${e=>e.theme.colors.primarySolid}30;
    }

    .rc-slider-mark {
        position: absolute;
        top: 22px;
        left: 0;
        width: 100%;
        font-size: 12px;
    }

    .rc-slider-mark-text {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        color: ${e=>e.theme.colors.textLight};
        font-weight: 600;
        font-size: ${e=>e.theme.fontSizes.sm};
        transform: translateX(-50%);
        white-space: nowrap;
        user-select: none;
    }

    .rc-slider-mark-text-active {
        color: ${e=>e.theme.colors.primarySolid};
        font-weight: 700;
    }

    .rc-slider-step {
        display: none !important;
    }

    .rc-slider-dot {
        position: absolute;
        bottom: -6px;
        margin-left: -4px;
        width: 8px;
        height: 8px;
        border: 2px solid ${e=>e.theme.colors.backgroundDark};
        background: ${e=>e.theme.colors.surface};
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
        transition: all 0.2s ease;
    }

    .rc-slider-dot-active {
        border-color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid};
        transform: scale(1.2);
    }

    .rc-slider-dot-reverse {
        margin-right: -4px;
        margin-left: auto;
    }

    .rc-slider:hover .rc-slider-track {
        background: ${e=>e.theme.colors.primary};
        box-shadow: 0 2px 12px ${e=>e.theme.colors.primarySolid}50;
    }
`,Sh=(Qi.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    position: relative;
`,Qi(Qd.div)`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.backgroundDark};
    border: 2px solid ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.border};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 4px ${e=>e.theme.colors.primarySolid}20;
    }
`,Qi.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    padding: 0 ${e=>e.theme.spacing.sm};
`,Qi(Qd.span)`
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.textLight};
    font-weight: ${e=>e.active?"700":"500"};
    text-align: center;
    min-width: 80px;
    transition: all 0.3s ease;

    ${e=>e.active&&"\n        transform: scale(1.05);\n    "}
`,Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),kh=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,$h=()=>{const t=Z(),[n,i]=(0,e.useState)(1),r=[{value:0,key:"poor",label:"Est\xe1 bien",description:"Las manos est\xe1n lejos de los dedos de los pies, necesito mejorar mi flexibilidad",image:"/flexibilidad/esta-bien.png",color:"#94a3b8"},{value:1,key:"good",label:"\xa1Genial!",description:"Puedo acercarme bastante, tengo una flexibilidad moderada que puedo mejorar",image:"/flexibilidad/genial.png",color:"#84cc16"},{value:2,key:"excellent",label:"\xa1Excelente!",description:"Puedo tocar f\xe1cilmente los dedos de los pies, tengo muy buena flexibilidad",image:"/flexibilidad/excelente.png",color:"#22c55e"}],a=r.reduce(((e,t)=>(e[t.value]={style:{color:n===t.value?"#2d3e2d":"#94a3b8",fontWeight:n===t.value?"700":"500",fontSize:"11px",marginTop:"10px"},label:t.label.split(" ")[0]},e)),{}),o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s=r[n];return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,er.jsx)(ph,{children:(0,er.jsxs)(Qd.div,{variants:o,children:[(0,er.jsx)(tm,{gradient:!0,children:"Tu flexibilidad"}),(0,er.jsx)(nm,{children:"\xbfC\xf3mo de lejos est\xe1n las manos de los dedos de los pies?"})]})}),(0,er.jsxs)(hh,{variants:o,children:[(0,er.jsxs)(fh,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3},children:[(0,er.jsx)(gh,{animate:{scale:[1,1.05,1],rotate:[0,2,-2,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:(0,er.jsx)(yh,{src:s.image,alt:"Flexibilidad"})}),(0,er.jsx)(bh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:s.label},s.label)]}),(0,er.jsx)(vh,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},children:s.description},s.description),(0,er.jsx)(xh,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:(0,er.jsx)(wh,{children:(0,er.jsx)(th,{min:0,max:2,step:1,value:n,onChange:e=>{i(e)},marks:a,included:!0,trackStyle:{background:"#2d3e2d",boxShadow:"0 2px 8px rgba(45, 62, 45, 0.4)"},handleStyle:{background:"#2d3e2d",borderColor:"#2d3e2d",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)"},dotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"},activeDotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"}})})})]}),(0,er.jsx)(Sh,{children:(0,er.jsx)(Qd.div,{variants:o,children:(0,er.jsx)(kh,{onClick:()=>{t("/aerobic")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Eh=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,jh=Qi(Qd.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    margin: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,Ch=Qi(Qd.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`,Ph=Qi(Qd.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e=>e.theme.borderRadius.full};
    background: ${e=>e.theme.colors.primarySolid}15;
    backdrop-filter: blur(10px);
    border: 3px solid ${e=>e.theme.colors.primarySolid}30;
    margin-bottom: ${e=>e.theme.spacing.md};
    position: relative;
    overflow: hidden;
`,Th=Qi.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${e=>e.theme.borderRadius.lg};
    mix-blend-mode: color;
`,zh=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${e=>e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.heading};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
    text-align: center;
`,Ah=Qi(Qd.div)`
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,Rh=Qi(Qd.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${e=>e.theme.spacing.xl} 35px;
`,Dh=Qi.div`
    width: 100%;

    .rc-slider {
        background-color: transparent;
        border-radius: 6px;
        position: relative;
        height: 12px;
        padding: 5px 0;
        width: 100%;
        border-radius: 6px;
        touch-action: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider-rail {
        position: absolute;
        width: 100%;
        background: ${e=>e.theme.colors.backgroundDark};
        height: 12px;
        border-radius: 6px;
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .rc-slider-track {
        position: absolute;
        left: 0;
        height: 12px;
        border-radius: 6px;
        background: ${e=>e.theme.colors.primary};
        z-index: 1;
        box-shadow: 0 2px 8px ${e=>e.theme.colors.primarySolid}40;
    }

    .rc-slider-handle {
        position: absolute;
        width: 28px;
        height: 28px;
        cursor: pointer;
        cursor: -webkit-grab;
        margin-top: -8px;
        border-radius: 50%;
        border: 4px solid ${e=>e.theme.colors.primarySolid};
        background: white;
        touch-action: pan-x;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 ${e=>e.theme.colors.primarySolid}00;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;
    }

    .rc-slider-handle:hover {
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 8px ${e=>e.theme.colors.primarySolid}20;
    }

    .rc-slider-handle:active {
        border-color: ${e=>e.theme.colors.primarySolid};
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 12px ${e=>e.theme.colors.primarySolid}30;
        cursor: -webkit-grabbing;
        transform: scale(1.15);
    }

    .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border-color: ${e=>e.theme.colors.primarySolid};
        box-shadow: 0 0 0 5px ${e=>e.theme.colors.primarySolid}30;
    }

    .rc-slider-mark {
        position: absolute;
        top: 22px;
        left: 0;
        width: 100%;
        font-size: 12px;
    }

    .rc-slider-mark-text {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        color: ${e=>e.theme.colors.textLight};
        font-weight: 600;
        font-size: ${e=>e.theme.fontSizes.sm};
        transform: translateX(-50%);
        white-space: nowrap;
        user-select: none;
    }

    .rc-slider-mark-text-active {
        color: ${e=>e.theme.colors.primarySolid};
        font-weight: 700;
    }

    .rc-slider-step {
        display: none !important;
    }

    .rc-slider-dot {
        position: absolute;
        bottom: -6px;
        margin-left: -4px;
        width: 8px;
        height: 8px;
        border: 2px solid ${e=>e.theme.colors.backgroundDark};
        background: ${e=>e.theme.colors.surface};
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
        transition: all 0.2s ease;
    }

    .rc-slider-dot-active {
        border-color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid};
        transform: scale(1.2);
    }

    .rc-slider-dot-reverse {
        margin-right: -4px;
        margin-left: auto;
    }

    .rc-slider:hover .rc-slider-track {
        background: ${e=>e.theme.colors.primary};
        box-shadow: 0 2px 12px ${e=>e.theme.colors.primarySolid}50;
    }
`,Mh=Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`,Lh=Qi(im)`
    width: 100%;
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`,Oh=()=>{const t=Z(),[n,i]=(0,e.useState)(1),r=[{value:0,key:"low",label:"Sin aliento",description:"\xa1Entendido! Nuestros entrenamientos personalizados aumentar\xe1n gradualmente tu resistencia.",image:"/aerobico/sin-aliento.png",color:"#ef4444"},{value:1,key:"medium",label:"Un poco cansado pero bien",description:"\xa1Buen trabajo! Te ayudaremos a seguir progresando y a volverte m\xe1s fuerte.",image:"/aerobico/cansado-pero-bien.png",color:"#f59e0b"},{value:2,key:"high",label:"Con facilidad",description:"\xa1Genial! Tenemos m\xe1s desaf\xedos esper\xe1ndote.",image:"/aerobico/facilidad.png",color:"#22c55e"}],a=r.reduce(((e,t)=>(e[t.value]={style:{color:n===t.value?"#2d3e2d":"#94a3b8",fontWeight:n===t.value?"700":"500",fontSize:"11px",marginTop:"10px"},label:0===t.value?"Dif\xedcil":1===t.value?"Bien":"F\xe1cil"},e)),{}),o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s=r[n];return(0,er.jsx)(sm,{children:(0,er.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,er.jsx)(Eh,{children:(0,er.jsxs)(Qd.div,{variants:o,children:[(0,er.jsx)(tm,{gradient:!0,children:"Tu nivel aer\xf3bico"}),(0,er.jsx)(nm,{children:"\xbfC\xf3mo te encuentras despu\xe9s de subir 5 pisos?"})]})}),(0,er.jsxs)(jh,{variants:o,children:[(0,er.jsxs)(Ch,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3},children:[(0,er.jsx)(Ph,{animate:{scale:[1,1.05,1],rotate:[0,2,-2,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:(0,er.jsx)(Th,{src:s.image,alt:"Aer\xf3bico"})}),(0,er.jsx)(zh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:s.label},s.label)]}),(0,er.jsx)(Ah,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},children:s.description},s.description),(0,er.jsx)(Rh,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:(0,er.jsx)(Dh,{children:(0,er.jsx)(th,{min:0,max:2,step:1,value:n,onChange:e=>{i(e)},marks:a,included:!0,trackStyle:{background:"#2d3e2d",boxShadow:"0 2px 8px rgba(45, 62, 45, 0.4)"},handleStyle:{background:"#2d3e2d",borderColor:"#2d3e2d",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)"},dotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"},activeDotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"}})})})]}),(0,er.jsx)(Mh,{children:(0,er.jsx)(Qd.div,{variants:o,children:(0,er.jsx)(Lh,{onClick:()=>{t("/discover")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Finalizar"})})})]})})},_h=Qi(sm)`
    justify-content: center;
    align-items: center;
    padding: ${e=>e.theme.spacing.lg};
`,Nh=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;
    max-width: 500px;
    width: 90%;
    text-align: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,Fh=Qi(tm)`
    font-size: ${e=>e.theme.fontSizes["4xl"]};
    font-weight: 900;
    margin-bottom: ${e=>e.theme.spacing.xl};
    position: relative;
    z-index: 1;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: ${e=>e.theme.fonts.heading};
`,Ih=Qi(Qd.div)`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.xl};
    margin: ${e=>e.theme.spacing.lg} 0;
    position: relative;
    z-index: 1;
    box-shadow: ${e=>e.theme.colors.shadow};

    h3 {
        color: ${e=>e.theme.colors.text};
        font-size: ${e=>e.theme.fontSizes.xl};
        font-weight: 600;
        margin-bottom: ${e=>e.theme.spacing.md};
        font-family: ${e=>e.theme.fonts.heading};
    }

    p {
        color: ${e=>e.theme.colors.textLight};
        font-size: ${e=>e.theme.fontSizes.md};
        line-height: 1.6;
        margin-bottom: ${e=>e.theme.spacing.md};
    }

    .emoji {
        font-size: ${e=>e.theme.fontSizes["2xl"]};
        margin-bottom: ${e=>e.theme.spacing.sm};
        display: block;
    }
`,Vh=Qi(im)`
    font-size: ${e=>e.theme.fontSizes.lg};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing["2xl"]};
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin-top: ${e=>e.theme.spacing.lg};
    min-width: 200px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }

    &::after {
        content: '→';
        position: absolute;
        right: ${e=>e.theme.spacing.lg};
        top: 50%;
        transform: translateY(-50%);
        font-size: ${e=>e.theme.fontSizes.lg};
        opacity: 0;
        transition: all ${e=>e.theme.transitions.base};
    }

    &:hover::after {
        opacity: 1;
        transform: translateY(-50%) translateX(5px);
    }
`,Uh=(Qi(Qd.div)`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: ${e=>e.theme.borderRadius.full};
    background: ${e=>e.theme.colors.primarySolid}10;
    top: -150px;
    right: -150px;
    z-index: 0;
`,()=>{const e=Z(),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,er.jsx)(_h,{children:(0,er.jsx)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:(0,er.jsxs)(Nh,{variants:t,children:[(0,er.jsx)(Qd.div,{variants:t,children:(0,er.jsx)(Fh,{children:"Tu Objetivo"})}),(0,er.jsxs)(Ih,{variants:t,whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:[(0,er.jsx)("span",{className:"emoji",children:"\ud83c\udfaf"}),(0,er.jsx)("h3",{children:"Comenzar tu transformaci\xf3n"}),(0,er.jsx)("p",{children:"Descubre ejercicios efectivos y recetas nutritivas que te ayudar\xe1n a alcanzar tus metas de fitness. Desde rutinas de cardio hasta comidas balanceadas, encuentra todo lo que necesitas para tu bienestar."})]}),(0,er.jsx)(Vh,{onClick:()=>{e("/height")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Comenzar"})]})})})}),Bh=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2.125rem);
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
`,Hh=Qi.div`
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]} 0 0;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
    }
`,qh=Qi.div`
    text-align: center;
`,Wh=Qi.h1`
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,Yh=Qi.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    margin: ${e=>e.theme.spacing.sm} 0 0 0;
    font-weight: 400;
`,Kh=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    flex: 1;
`,Gh=Qi.div`
    display: grid;
    gap: ${e=>e.theme.spacing.lg};
    grid-template-columns: 1fr;
`,Xh=Qi(Qd.div)`
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    overflow: hidden;
    cursor: pointer;
    background: ${e=>e.theme.colors.surface};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    transition: ${e=>e.theme.transitions.slow};

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${e=>e.theme.colors.shadowHover};
    }
`,Qh=Qi.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${e=>e.src});
    background-size: cover;
    background-position: center;
    transition: ${e=>e.theme.transitions.slow};

    ${Xh}:hover & {
        transform: scale(1.05);
    }
`,Jh=Qi.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
                    rgba(45, 90, 61, 0.8) 0%,
            rgba(74, 124, 89, 0.6) 50%,
            rgba(30, 61, 40, 0.8) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${e=>e.theme.spacing.xl};
    backdrop-filter: blur(2px);
`,Zh=Qi.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.md};
`,ef=Qi.div`
    width: 60px;
    height: 60px;
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: ${e=>e.theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    svg {
        width: 28px;
        height: 28px;
    }
`,tf=Qi.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`,nf=Qi.h2`
    color: white;
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    margin: ${e=>e.theme.spacing.sm} 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
`,rf=Qi.p`
    color: rgba(255, 255, 255, 0.9);
    font-size: ${e=>e.theme.fontSizes.base};
    margin: 0;
    line-height: 1.5;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`,af=Qi.div`
    display: flex;
    gap: ${e=>e.theme.spacing.md};
    margin-top: ${e=>e.theme.spacing.md};
`,of=Qi.div`
    background: ${e=>e.theme.colors.glassDark};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: ${e=>e.theme.borderRadius.md};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
    color: white;
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 500;
    text-align: center;
    min-width: 60px;

    .number {
        display: block;
        font-size: ${e=>e.theme.fontSizes.lg};
        font-weight: 700;
        margin-bottom: ${e=>e.theme.spacing.xs};
    }
`,sf=(Qi.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
`,Qi(Qd.div)`
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    backdrop-filter: blur(10px);
`,()=>{const e=Z(),t={hidden:{opacity:0,y:50},visible:e=>({opacity:1,y:0,transition:{delay:.2*e,duration:.6,ease:"easeOut"}})};return(0,er.jsxs)(Bh,{children:[(0,er.jsx)(Hh,{children:(0,er.jsxs)(qh,{children:[(0,er.jsx)(Wh,{children:"Bienvenido"}),(0,er.jsx)(Yh,{children:"Elige tu camino hacia una vida m\xe1s saludable"})]})}),(0,er.jsx)(Kh,{children:(0,er.jsxs)(Gh,{children:[(0,er.jsxs)(Xh,{custom:0,initial:"hidden",animate:"visible",variants:t,onClick:()=>{return t="Ambas",console.log(`Selected: ${t}`),void("Hipertenso"===t?e("/category/hipertenso"):"Diabeticos"===t?e("/category/diabeticos"):"Ambas"===t&&e("/category/ambas"));var t},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,er.jsx)(Qh,{src:"/ejercicios.webp"}),(0,er.jsxs)(Jh,{children:[(0,er.jsx)(Zh,{children:(0,er.jsx)(ef,{children:(0,er.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,er.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})})}),(0,er.jsxs)(tf,{children:[(0,er.jsx)(nf,{children:"Ejercicios"}),(0,er.jsx)(rf,{children:"Rutinas de ejercicios sugeridas para ti"}),(0,er.jsxs)(af,{children:[(0,er.jsxs)(of,{children:[(0,er.jsx)("span",{className:"number",children:"50+"}),(0,er.jsx)("span",{children:"Rutinas"})]}),(0,er.jsxs)(of,{children:[(0,er.jsx)("span",{className:"number",children:"24/7"}),(0,er.jsx)("span",{children:"Acceso"})]})]})]})]})]}),(0,er.jsxs)(Xh,{custom:1,initial:"hidden",animate:"visible",variants:t,onClick:()=>e("/recipes"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,er.jsx)(Qh,{src:"/comidas.jpeg"}),(0,er.jsxs)(Jh,{children:[(0,er.jsx)(Zh,{children:(0,er.jsx)(ef,{children:(0,er.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,er.jsx)("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})}),(0,er.jsxs)(tf,{children:[(0,er.jsx)(nf,{children:"Recetas"}),(0,er.jsx)(rf,{children:"Deliciosas recetas saludables dise\xf1adas por nutricionistas especializados"}),(0,er.jsxs)(af,{children:[(0,er.jsxs)(of,{children:[(0,er.jsx)("span",{className:"number",children:"10+"}),(0,er.jsx)("span",{children:"Recetas"})]}),(0,er.jsxs)(of,{children:[(0,er.jsx)("span",{className:"number",children:"\u26054.9"}),(0,er.jsx)("span",{children:"Rating"})]})]})]})]})]})]})})]})}),lf=Qi.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  background-color: #f8f9fa;
  position: relative;
`,cf=Qi.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,uf=Qi.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`,df=Qi.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`,mf=Qi.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 25px;
  padding: 12px 16px;
  gap: 12px;
  border: 2px solid #e0e0e0;
`,pf=Qi.div`
  width: 20px;
  height: 20px;
  color: #666;
`,hf=Qi.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
`,ff=Qi.button`
      background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
  }
`,gf=Qi.button`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primarySolid};
  }
`,yf=Qi.div`
  padding: 24px 20px;
  flex: 1;
`,bf=Qi.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,vf=Qi.div`
  position: relative;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.gradient};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,xf=Qi.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,wf=Qi.h3`
  color: white;
  font-size: 16px;
  font-weight: 600;  
  margin: 0;
  text-align: center;
`,Sf=()=>{const e=Z();return(0,er.jsxs)(lf,{children:[(0,er.jsxs)(cf,{children:[(0,er.jsx)(uf,{children:"Actividades"}),(0,er.jsxs)(df,{children:[(0,er.jsxs)(mf,{children:[(0,er.jsx)(pf,{children:(0,er.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,er.jsx)("path",{d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"})})}),(0,er.jsx)(hf,{placeholder:"Buscar actividad"})]}),(0,er.jsx)(ff,{children:"Buscar"}),(0,er.jsx)(gf,{children:(0,er.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,er.jsx)("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),(0,er.jsx)("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),(0,er.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),(0,er.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),(0,er.jsx)("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),(0,er.jsx)("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),(0,er.jsx)("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),(0,er.jsx)("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),(0,er.jsx)("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]})})]})]}),(0,er.jsx)(yf,{children:(0,er.jsx)(bf,{children:[{name:"Caminar",gradient:"linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)"},{name:"Nadar",gradient:"linear-gradient(135deg, #4a7c59 0%, #6b8e6b 100%)"},{name:"Meditar",gradient:"linear-gradient(135deg, #7c9885 0%, #9bb99e 100%)"},{name:"Montar bici",gradient:"linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)"},{name:"Bailar",gradient:"linear-gradient(135deg, #6b8e6b 0%, #8ab08a 100%)"},{name:"Yoga",gradient:"linear-gradient(135deg, #8ab08a 0%, #7c9885 100%)"},{name:"T\xe9cnicas de respiraci\xf3n",gradient:"linear-gradient(135deg, #9bb99e 0%, #6b8e6b 100%)"},{name:"Pilates",gradient:"linear-gradient(135deg, #5a7a5a 0%, #4a7c59 100%)"},{name:"Acuaerobicos",gradient:"linear-gradient(135deg, #4a7c59 0%, #2d5a3d 100%)"}].map(((t,n)=>(0,er.jsx)(vf,{gradient:t.gradient,onClick:()=>{return n=t.name,console.log(`Selected activity: ${n}`),void e("/discover");var n},children:(0,er.jsx)(xf,{children:(0,er.jsx)(wf,{children:t.name})})},n)))})})]})},kf=JSON.parse('{"categories":{"hipertenso":{"name":"Hipertenso","slug":"hipertenso","description":"Ejercicios especializados para personas con hipertensi\xf3n","color":"#2d5a3d","exercises":{"caminar":{"name":"Caminar","slug":"caminar","description":"Caminata suave para mejorar la circulaci\xf3n","image":"/exercises/walking.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"12m","calories":110,"targetAreas":["Cardiovascular","Circulaci\xf3n"],"exercises":[{"name":"Caminata suave hipertenso","duration":"12m","type":"ejercicio","instructions":"Caminata muy suave, monitorea tu presi\xf3n arterial","image":"/exercises/walk-hypertension.jpg"}]}}},"yoga":{"name":"Yoga","slug":"yoga","description":"Posturas de yoga para relajaci\xf3n y control de presi\xf3n","image":"/exercises/yoga.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"18m","calories":65,"targetAreas":["Relajaci\xf3n","Presi\xf3n arterial"],"exercises":[{"name":"Yoga para hipertensi\xf3n","duration":"18m","type":"relajacion","instructions":"Posturas suaves para reducir la presi\xf3n arterial","image":"/exercises/yoga-hypertension.jpg"}]}}},"respiracion":{"name":"T\xe9cnicas de respiraci\xf3n","slug":"respiracion","description":"Ejercicios de respiraci\xf3n para reducir estr\xe9s","image":"/exercises/breathing.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Control de estr\xe9s"],"exercises":[{"name":"Respiraci\xf3n para hipertensi\xf3n","duration":"10m","type":"respiracion","instructions":"T\xe9cnicas espec\xedficas para controlar la presi\xf3n","image":"/exercises/breathing-hypertension.jpg"}]}}},"nadar":{"name":"Nadar","slug":"nadar","description":"Nataci\xf3n de bajo impacto para hipertensos","image":"/exercises/swimming.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"22m","calories":165,"targetAreas":["Cardiovascular","Bajo impacto"],"exercises":[{"name":"Nataci\xf3n para hipertensos","duration":"22m","type":"ejercicio","instructions":"Nataci\xf3n muy suave, evita esfuerzos intensos","image":"/exercises/swim-hypertension.jpg"}]}}},"meditar":{"name":"Meditar","slug":"meditar","description":"Meditaci\xf3n para control de presi\xf3n arterial","image":"/exercises/meditation.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":25,"targetAreas":["Relajaci\xf3n","Control mental"],"exercises":[{"name":"Meditaci\xf3n anti-estr\xe9s","duration":"15m","type":"relajacion","instructions":"Meditaci\xf3n enfocada en reducir el estr\xe9s","image":"/exercises/meditation-hypertension.jpg"}]}}},"bici":{"name":"Montar bici","slug":"bici","description":"Ciclismo suave para hipertensos","image":"/exercises/cycling.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":180,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Ciclismo para hipertensos","duration":"25m","type":"ejercicio","instructions":"Pedalea suavemente, controla tu ritmo card\xedaco","image":"/exercises/cycling-hypertension.jpg"}]}}},"pilates":{"name":"Pilates","slug":"pilates","description":"Pilates suave para hipertensos","image":"/exercises/pilates.jpg","category":"fuerza","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":85,"targetAreas":["Core","Postura"],"exercises":[{"name":"Pilates para hipertensos","duration":"20m","type":"fuerza","instructions":"Movimientos muy controlados y suaves","image":"/exercises/pilates-hypertension.jpg"}]}}},"bailar":{"name":"Bailar","slug":"bailar","description":"Baile terap\xe9utico para hipertensos","image":"/exercises/dancing.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"18m","calories":120,"targetAreas":["Cardiovascular","Estado de \xe1nimo"],"exercises":[{"name":"Baile terap\xe9utico","duration":"18m","type":"ejercicio","instructions":"Movimientos suaves al ritmo de la m\xfasica","image":"/exercises/dance-therapeutic.jpg"}]}}},"acuaerobicos":{"name":"Acuaer\xf3bicos","slug":"acuaerobicos","description":"Ejercicios en agua para hipertensos","image":"/exercises/water-aerobics.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":150,"targetAreas":["Cardiovascular","Articulaciones"],"exercises":[{"name":"Acuaer\xf3bicos para hipertensos","duration":"30m","type":"ejercicio","instructions":"Ejercicios suaves en el agua","image":"/exercises/water-aerobics-hypertension.jpg"}]}}}},"days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"11m 22s","calories":122,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Extended Child Pose","duration":"25s","type":"calentamiento","instructions":"Posici\xf3n de relajaci\xf3n para comenzar","image":"/exercises/child-pose.jpg"},{"name":"Childs pose","duration":"25s","type":"calentamiento","instructions":"Mant\xe9n la posici\xf3n y respira profundamente","image":"/exercises/child-pose2.jpg"},{"name":"Cross Touch And Reach","duration":"25s","type":"calentamiento","instructions":"Movimiento suave de brazos cruzados","image":"/exercises/cross-touch.jpg"}]},"2":{"name":"D\xeda 2","level":"Intermedio","duration":"8m 42s","calories":93,"targetAreas":["Gl\xfateos","Pierna","Core"],"exercises":[{"name":"Gentle Warm Up","duration":"30s","type":"calentamiento","instructions":"Calentamiento suave para hipertensos","image":"/exercises/warmup.jpg"}]}}},"diabeticos":{"name":"Diab\xe9ticos","slug":"diabeticos","description":"Ejercicios especializados para personas con diabetes","color":"#ff9a9e","exercises":{"caminar":{"name":"Caminar","slug":"caminar","description":"Caminata regular para control de az\xfacar","image":"/exercises/walking.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":130,"targetAreas":["Cardiovascular","Control gluc\xe9mico"],"exercises":[{"name":"Caminata para diab\xe9ticos","duration":"20m","type":"ejercicio","instructions":"Caminata regular, controla tu glucosa antes y despu\xe9s","image":"/exercises/walk-diabetes.jpg"}]}}},"nadar":{"name":"Nadar","slug":"nadar","description":"Nataci\xf3n de bajo impacto para control gluc\xe9mico","image":"/exercises/swimming.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":190,"targetAreas":["Cardiovascular","Control gluc\xe9mico"],"exercises":[{"name":"Nataci\xf3n para diab\xe9ticos","duration":"25m","type":"ejercicio","instructions":"Nataci\xf3n moderada, ideal para control de az\xfacar","image":"/exercises/swim-diabetes.jpg"}]}}},"meditar":{"name":"Meditar","slug":"meditar","description":"Meditaci\xf3n para control del estr\xe9s y glucosa","image":"/exercises/meditation.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"12m","calories":22,"targetAreas":["Relajaci\xf3n","Control del estr\xe9s"],"exercises":[{"name":"Meditaci\xf3n para diab\xe9ticos","duration":"12m","type":"relajacion","instructions":"Reduce el estr\xe9s que afecta los niveles de glucosa","image":"/exercises/meditation-diabetes.jpg"}]}}},"bici":{"name":"Montar bici","slug":"bici","description":"Ciclismo para control gluc\xe9mico","image":"/exercises/cycling.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"28m","calories":210,"targetAreas":["Cardiovascular","Piernas","Control gluc\xe9mico"],"exercises":[{"name":"Ciclismo para diab\xe9ticos","duration":"28m","type":"ejercicio","instructions":"Excelente para mejorar la sensibilidad a la insulina","image":"/exercises/cycling-diabetes.jpg"}]}}},"bailar":{"name":"Bailar","slug":"bailar","description":"Baile para mejorar control gluc\xe9mico","image":"/exercises/dancing.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"22m","calories":155,"targetAreas":["Cardiovascular","Coordinaci\xf3n"],"exercises":[{"name":"Baile para diab\xe9ticos","duration":"22m","type":"ejercicio","instructions":"Ejercicio divertido que ayuda con la glucosa","image":"/exercises/dance-diabetes.jpg"}]}}},"yoga":{"name":"Yoga","slug":"yoga","description":"Yoga para diab\xe9ticos","image":"/exercises/yoga.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":80,"targetAreas":["Flexibilidad","Control del estr\xe9s"],"exercises":[{"name":"Yoga para diab\xe9ticos","duration":"25m","type":"estiramiento","instructions":"Posturas que ayudan al control metab\xf3lico","image":"/exercises/yoga-diabetes.jpg"}]}}},"respiracion":{"name":"T\xe9cnicas de respiraci\xf3n","slug":"respiracion","description":"Respiraci\xf3n para control del estr\xe9s diab\xe9tico","image":"/exercises/breathing.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"8m","calories":18,"targetAreas":["Relajaci\xf3n","Control hormonal"],"exercises":[{"name":"Respiraci\xf3n para diab\xe9ticos","duration":"8m","type":"respiracion","instructions":"T\xe9cnicas para controlar el estr\xe9s y la glucosa","image":"/exercises/breathing-diabetes.jpg"}]}}},"pilates":{"name":"Pilates","slug":"pilates","description":"Pilates para diab\xe9ticos","image":"/exercises/pilates.jpg","category":"fuerza","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":120,"targetAreas":["Core","Fuerza","Control postural"],"exercises":[{"name":"Pilates para diab\xe9ticos","duration":"30m","type":"fuerza","instructions":"Fortalecimiento que mejora el metabolismo","image":"/exercises/pilates-diabetes.jpg"}]}}},"acuaerobicos":{"name":"Acuaer\xf3bicos","slug":"acuaerobicos","description":"Ejercicios en agua para diab\xe9ticos","image":"/exercises/water-aerobics.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"35m","calories":175,"targetAreas":["Cardiovascular","Bajo impacto"],"exercises":[{"name":"Acuaer\xf3bicos para diab\xe9ticos","duration":"35m","type":"ejercicio","instructions":"Ejercicios en agua ideales para diab\xe9ticos","image":"/exercises/water-aerobics-diabetes.jpg"}]}}}},"days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m 30s","calories":140,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Warm Up Walk","duration":"5m","type":"calentamiento","instructions":"Caminata suave de calentamiento","image":"/exercises/walk-warmup.jpg"}]}}},"ambas":{"name":"Ambas Condiciones","slug":"ambas","description":"Ejercicios seguros para personas con hipertensi\xf3n y diabetes","color":"#a8edea","exercises":{"caminar":{"name":"Caminar","slug":"caminar","description":"Caminata adaptada","image":"/exercises/walking.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}},"yoga":{"name":"Yoga","slug":"yoga","description":"Yoga adaptado","image":"/exercises/yoga.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]}}},"pilates":{"name":"Pilates","slug":"pilates","description":"Pilates de bajo impacto","image":"/exercises/pilates.jpg","category":"fuerza","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}},"nadar":{"name":"Nataci\xf3n","slug":"nadar","description":"Nataci\xf3n suave y controlada","image":"/exercises/swimming.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}},"meditar":{"name":"Meditar","slug":"meditar","description":"Meditaci\xf3n para reducir estr\xe9s y mejorar control metab\xf3lico","image":"/exercises/meditation.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]}}},"bici":{"name":"Montar bici","slug":"bici","description":"Ciclismo adaptado y controlado","image":"/exercises/cycling.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}}},"days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"6m 59s","calories":85,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Extended Child Pose","duration":"25s","type":"calentamiento","instructions":"Posici\xf3n de relajaci\xf3n para comenzar suavemente","image":"/exercises/child-pose.jpg"},{"name":"Childs pose","duration":"25s","type":"calentamiento","instructions":"Mant\xe9n la posici\xf3n y controla tu respiraci\xf3n","image":"/exercises/child-pose2.jpg"},{"name":"Cross Touch And Reach","duration":"25s","type":"calentamiento","instructions":"Movimiento controlado, monitorea tu presi\xf3n","image":"/exercises/cross-touch.jpg"},{"name":"Wood Chopper","duration":"30s","type":"ejercicio","instructions":"Movimiento de hacha, controla tu glucosa durante el ejercicio","image":"/exercises/wood-chopper.jpg"}]},"2":{"name":"D\xeda 2","level":"Intermedio","duration":"8m 42s","calories":93,"targetAreas":["Cardiovascular","Core","Equilibrio"],"exercises":[{"name":"Gentle Cardio","duration":"45s","type":"ejercicio","instructions":"Cardio suave, monitorea signos vitales","image":"/exercises/gentle-cardio.jpg"}]},"3":{"name":"D\xeda 3","level":"Intermedio","duration":"6m 50s","calories":73,"targetAreas":["Flexibilidad","Relajaci\xf3n"],"exercises":[{"name":"Flexibility Routine","duration":"60s","type":"estiramiento","instructions":"Rutina de flexibilidad adaptada","image":"/exercises/flexibility.jpg"}]},"4":{"name":"D\xeda 4","level":"Intermedio","duration":"6m 1s","calories":64,"targetAreas":["Fuerza","Resistencia"],"exercises":[{"name":"Low Impact Strength","duration":"40s","type":"fuerza","instructions":"Ejercicios de fuerza de bajo impacto","image":"/exercises/low-impact.jpg"}]},"5":{"name":"D\xeda 5","level":"Descanso","duration":"0m","calories":0,"targetAreas":["Recuperaci\xf3n"],"restDay":true,"message":"Mereces descansar hoy"}}}}}'),$f=(0,e.createContext)(),Ef={completedDays:{},completedExercises:{},streakDays:0,totalDaysCompleted:0,lastActivity:null},jf=(e,t)=>{switch(t.type){case"COMPLETE_EXERCISE":const n=`${t.payload.category}-${t.payload.day}-${t.payload.exerciseIndex}`;return{...e,completedExercises:{...e.completedExercises,[n]:!0},lastActivity:(new Date).toISOString()};case"COMPLETE_DAY":const i=`${t.payload.category}-${t.payload.day}`,r={...e.completedDays,[i]:!0};return{...e,completedDays:r,totalDaysCompleted:Object.values(r).filter(Boolean).length,streakDays:e.streakDays+1,lastActivity:(new Date).toISOString()};case"LOAD_PROGRESS":return{...e,...t.payload};case"RESET_PROGRESS":return Ef;default:return e}},Cf=t=>{let{children:n}=t;const[i,r]=(0,e.useReducer)(jf,Ef);(0,e.useEffect)((()=>{const e=localStorage.getItem("exerciseProgress");if(e)try{const t=JSON.parse(e);r({type:"LOAD_PROGRESS",payload:t})}catch(t){console.error("Error loading progress:",t)}}),[]),(0,e.useEffect)((()=>{localStorage.setItem("exerciseProgress",JSON.stringify(i))}),[i]);const a=(e,t,n)=>{const r=`${e}-${t}-${n}`;return!!i.completedExercises[r]},o={...i,completeExercise:(e,t,n)=>{r({type:"COMPLETE_EXERCISE",payload:{category:e,day:t,exerciseIndex:n}})},completeDay:(e,t)=>{r({type:"COMPLETE_DAY",payload:{category:e,day:t}})},isExerciseCompleted:a,isDayCompleted:(e,t)=>{const n=`${e}-${t}`;return!!i.completedDays[n]},getDayProgress:(e,t,n)=>{let i=0;for(let r=0;r<n;r++)a(e,t,r)&&i++;return{completed:i,total:n,percentage:i/n*100}},resetProgress:()=>{r({type:"RESET_PROGRESS"})}};return(0,er.jsx)($f.Provider,{value:o,children:n})},Pf=()=>{const t=(0,e.useContext)($f);if(!t)throw new Error("useProgress must be used within a ProgressProvider");return t},Tf=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2.125rem);
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
`,zf=Qi.div`
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]} 0 0;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
    }
`,Af=Qi(Qd.button)`
    position: absolute;
    left: ${e=>e.theme.spacing.lg};
    top: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid}10;
        transform: translateX(-2px);
    }
`,Rf=Qi.div`
    text-align: center;
`,Df=Qi.h1`
   font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,Mf=Qi.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    margin: ${e=>e.theme.spacing.sm} 0 0 0;
    font-weight: 400;
`,Lf=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    flex: 1;
`,Of=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.lg};
`,_f=Qi(Qd.div)`
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    overflow: hidden;
    cursor: pointer;
    transition: ${e=>e.theme.transitions.slow};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    min-height: 120px;

    &:hover {
        transform: translateY(-6px);
        box-shadow: ${e=>e.theme.colors.shadowHover};
    }
`,Nf=Qi.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${e=>e.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: ${e=>e.theme.transitions.slow};

    ${_f}:hover & {
        transform: scale(1.05);
    }
`,Ff=Qi.div`
    background: linear-gradient(
        135deg,
                    rgba(45, 90, 61, 0.8) 0%,
            rgba(74, 124, 89, 0.6) 50%,
            rgba(30, 61, 40, 0.8) 100%
    );
    padding: ${e=>e.theme.spacing.xl};
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.lg};
    backdrop-filter: blur(2px);
`,If=(Qi.div`
    width: 64px;
    height: 64px;
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: ${e=>e.theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    color: white;
    box-shadow: ${e=>e.theme.colors.shadowHover};
    flex-shrink: 0;
`,Qi.div`
    flex: 1;
    color: white;
`),Vf=Qi.h3`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 700;
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.01em;
    color: white;
`,Uf=Qi.p`
    font-size: ${e=>e.theme.fontSizes.sm};
    margin: 0 0 ${e=>e.theme.spacing.md} 0;
    opacity: 0.9;
    line-height: 1.4;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`,Bf=Qi.div`
    display: flex;
    gap: ${e=>e.theme.spacing.md};
`,Hf=Qi.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.sm};
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: ${e=>e.theme.borderRadius.lg};
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
    color: #ffffff;
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);

`,qf=(Qi(Qd.div)`
    position: absolute;
    top: ${e=>e.theme.spacing.md};
    right: ${e=>e.theme.spacing.md};
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.full};
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
    font-size: ${e=>e.theme.fontSizes.xs};
    font-weight: 600;
    color: white;
    z-index: 2;
`,Qi(Qd.div)`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg};
    margin-bottom: ${e=>e.theme.spacing.lg};
    box-shadow: ${e=>e.theme.colors.shadow};

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: ${e=>e.theme.spacing.md};
        text-align: center;
    }

    .stat-item {
        h4 {
            font-size: ${e=>e.theme.fontSizes["2xl"]};
            font-weight: 700;
            background: ${e=>e.theme.colors.primary};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 ${e=>e.theme.spacing.xs} 0;
        }

        p {
            font-size: ${e=>e.theme.fontSizes.sm};
            color: ${e=>e.theme.colors.textLight};
            margin: 0;
        }
    }
`),Wf=()=>{const{category:e}=ee(),t=Z(),n=kf.categories[e];if(!n)return(0,er.jsx)("div",{children:"Categor\xeda no encontrada"});return(0,er.jsxs)(Tf,{children:[(0,er.jsxs)(zf,{children:[(0,er.jsx)(Af,{onClick:()=>{t("/discover")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190"}),(0,er.jsxs)(Rf,{children:[(0,er.jsx)(Df,{children:"Ejercicios"}),(0,er.jsx)(Mf,{children:"Elige tu rutina perfecta"})]})]}),(0,er.jsxs)(Lf,{children:[(0,er.jsx)(qf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:(0,er.jsxs)("div",{className:"stats-grid",children:[(0,er.jsxs)("div",{className:"stat-item",children:[(0,er.jsx)("h4",{children:Object.keys(n.exercises).length}),(0,er.jsx)("p",{children:"Ejercicios"})]}),(0,er.jsxs)("div",{className:"stat-item",children:[(0,er.jsx)("h4",{children:"24/7"}),(0,er.jsx)("p",{children:"Acceso"})]})]})}),(0,er.jsx)(Of,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.6},children:Object.entries(n.exercises).map(((n,i)=>{let[r,a]=n;return(0,er.jsxs)(_f,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1*i,duration:.5},onClick:()=>(n=>{t(`/category/${e}/exercise/${n}`)})(r),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,er.jsx)(Nf,{src:`/fondos/${r}.png`}),(0,er.jsx)(Ff,{children:(0,er.jsxs)(If,{children:[(0,er.jsx)(Vf,{children:a.name}),(0,er.jsx)(Uf,{children:a.description}),(0,er.jsxs)(Bf,{children:[(0,er.jsx)(Hf,{children:a.category}),(0,er.jsx)(Hf,{children:"M\xfaltiples d\xedas"})]})]})})]},r)}))})]})]})},Yf=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2.125rem);
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    position: relative;
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
`,Kf=Qi.div`
    padding: 50px 20px;
    background-color: white;
    position: relative;
    background-image: url(${e=>e.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;

    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`,Gf=Qi(Qd.button)`
    position: absolute;
    left: ${e=>e.theme.spacing.lg};
    top: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: translateX(-2px);
    }
`,Xf=Qi.div`
    text-align: center;
    margin-top: 20px;
`,Qf=(Qi.h1`
    font-size: 18px;
    font-weight: 400;
    color: #666;
    margin: 0;
`,Qi.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 10px 0;
`,Qi.span`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`,Qi.span`
    background: ${e=>e.theme.colors.primary};
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bold;
`,Qi.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 15px 0 5px 0;
`,Qi.div`
    display: inline-block;
    background-color: #f0f0f0;
    color: #666;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 20px;
`,Qi.div`
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`),Jf=(Qi.div`
    display: inline-block;
    background: #e5e7eb;
    color: #374151;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`,Qi.div`
    padding: 20px;
    flex: 1;
    border-radius: 25px 25px 0 0;
    margin-top: -20px;
    background-color: white;
    z-index: 5;
`),Zf=Qi.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,eg=Qi.div`
    background: white;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`,tg=Qi.div`
    width: 24px;
    height: 24px;
    border: 2px solid ${e=>e.completed?e.theme.colors.primarySolid:"#e5e7eb"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${e=>e.completed?e.theme.colors.primarySolid:"transparent"};
    color: ${e=>e.completed?"white":"#666"};
    font-size: 12px;
    font-weight: bold;

    &::after {
        content: "${e=>e.completed?"\u2713":""}";
    }
`,ng=Qi.div`
    flex: 1;
`,ig=Qi.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
`,rg=Qi.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
`,ag=Qi.div`
    color: #999;
    font-size: 18px;
`,og=Qi.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #666;
`,sg=Qi.div`
    width: 100%;
    height: 4px;
    background-color: #e5e7eb;
    border-radius: 2px;
    margin-top: 8px;
    overflow: hidden;
`,lg=Qi.div`
    height: 100%;
    background-color: ${e=>e.theme.colors.primarySolid};
    width: ${e=>e.progress}%;
    transition: width 0.3s ease;
`,cg=Qi(eg)`
    background: linear-gradient(135deg, #fef3c7, #fbbf24);
    border: none;
`,ug=Qi.div`
    width: 32px;
    height: 32px;
    background: rgba(251, 191, 36, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`,dg=Qi.div`
    color: #92400e;
    font-weight: 600;
`,mg=()=>{const{category:e,exercise:t}=ee(),n=Z(),{isDayCompleted:i,getDayProgress:r}=Pf(),a=kf.categories[e],o=null===a||void 0===a?void 0:a.exercises[t];if(!a||!o)return(0,er.jsx)("div",{children:"Ejercicio no encontrado"});const s=o.days[1].exercises.reduce(((e,t)=>e+parseInt(t.duration.split("m")[0])),0);return(0,er.jsxs)(Yf,{children:[(0,er.jsxs)(Kf,{src:`/fondos/${t}.png`,children:[(0,er.jsx)(Gf,{onClick:()=>{n(`/category/${e}`)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190"}),(0,er.jsx)(Xf,{children:(0,er.jsx)(Qf,{color:a.color,children:o.name})})]}),(0,er.jsx)(Jf,{children:(0,er.jsx)(Zf,{children:Object.entries(o.days).map((a=>{var o;let[l,c]=a;const u=i(`${e}-${t}`,l),d=r(`${e}-${t}`,l,(null===(o=c.exercises)||void 0===o?void 0:o.length)||0);return c.restDay?(0,er.jsxs)(cg,{children:[(0,er.jsx)(ug,{children:"\ud83c\udf19"}),(0,er.jsxs)(ng,{children:[(0,er.jsx)(ig,{children:(0,er.jsx)(rg,{children:c.name})}),(0,er.jsx)(dg,{children:c.message})]})]},l):(0,er.jsxs)(eg,{onClick:()=>(i=>{n(`/category/${e}/exercise/${t}/day/${i}`)})(l),children:[(0,er.jsx)(tg,{completed:u}),(0,er.jsxs)(ng,{children:[(0,er.jsxs)(ig,{children:[(0,er.jsxs)(rg,{children:["D\xeda ",l]}),(0,er.jsx)(ag,{children:"\u203a"})]}),(0,er.jsx)(og,{children:(0,er.jsxs)("span",{children:["\u23f1 ",s,"m"]})}),(0,er.jsx)(sg,{children:(0,er.jsx)(lg,{progress:d.percentage})})]})]},l)}))})})]})},pg=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2.125rem);
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    position: relative;
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
`,hg=Qi.div`
    padding: 50px 20px;
    background-color: white;
    position: relative;
    background-image: url(${e=>e.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;

    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`,fg=Qi.button`
    position: absolute;
    left: ${e=>e.theme.spacing.lg};
    top: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: translateX(-2px);
    }
`,gg=Qi.div`
    text-align: center;
    margin-top: 20px;
`,yg=Qi.h1`
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,bg=(Qi.div`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e7eb;
    cursor: pointer;

    &:hover {
        color: #ef4444;
    }
`,Qi.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
`,Qi.div`
    padding: 20px;
    flex: 1;
    border-radius: 25px 25px 0 0;
    margin-top: -20px;
    background-color: white;
    z-index: 5;
`),vg=Qi.div`
    margin-bottom: 24px;
`,xg=Qi.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
`,wg=Qi.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`,Sg=Qi.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: #666;
`,kg=Qi.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`,$g=Qi.span`
    font-size: 12px;
    text-align: center;
`,Eg=Qi.div`
    background: white;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 20px;
`,jg=(Qi.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`,Qi.h4`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
`,Qi.span`
    color: ${e=>e.theme.colors.primarySolid};
    font-size: 14px;
    font-weight: 600;
`,Qi.div`
    position: relative;
    width: 44px;
    height: 24px;
    background-color: ${e=>e.active?e.theme.colors.primarySolid:"#e5e7eb"};
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s;

    &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: ${e=>e.active?"22px":"2px"};
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        transition: left 0.2s;
    }
`,Qi.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`),Cg=Qi.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
`,Pg=Qi.div`
    width: 60px;
    height: 60px;
    background-color: #f0f0f0;
    border-radius: 8px;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,Tg=Qi.div`
    flex: 1;
`,zg=Qi.h5`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
`,Ag=Qi.span`
    font-size: 12px;
    color: #666;
    text-transform: lowercase;
`,Rg=Qi.span`
    font-size: 12px;
    color: ${e=>e.theme.colors.primarySolid};
    font-weight: 600;
`,Dg=Qi.div`
    color: #999;
    font-size: 18px;
`,Mg=Qi.button`
    width: 100%;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #1f2937;
        transform: translateY(-1px);
    }
`,Lg=Qi.div`
    width: 0;
    height: 0;
    border-left: 8px solid white;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    margin-left: 4px;
`,Og=()=>{var t,n;const{category:i,exercise:r,day:a}=ee(),o=Z(),{getDayProgress:s,isExerciseCompleted:l}=Pf(),[c,u]=e.useState(!0),d=kf.categories[i],m=null===d||void 0===d?void 0:d.exercises[r],p=null===m||void 0===m?void 0:m.days[a];if(!d||!m||!p)return(0,er.jsx)("div",{children:"D\xeda no encontrado"});s(`${i}-${r}`,a,(null===(t=p.exercises)||void 0===t?void 0:t.length)||0);const h=e=>({"Gl\xfateos":"\ud83c\udf51",Pierna:"\ud83e\uddb5",Espalda:"\ud83d\udcaa",Tronco:"\ud83e\udec1",Abdomen:"\ud83d\udcaa",Cardiovascular:"\u2764\ufe0f",Core:"\ud83d\udcaa",Equilibrio:"\u2696\ufe0f",Flexibilidad:"\ud83e\udd38","Relajaci\xf3n":"\ud83e\uddd8",Fuerza:"\ud83d\udcaa",Resistencia:"\ud83c\udfc3","Recuperaci\xf3n":"\ud83d\ude34"}[e]||"\ud83d\udcaa");return(0,er.jsxs)(pg,{children:[(0,er.jsxs)(hg,{src:`/fondos/${r}.png`,children:[(0,er.jsx)(fg,{onClick:()=>{o(`/category/${i}/exercise/${r}`)},children:"\u2190"}),(0,er.jsx)(gg,{children:(0,er.jsxs)(yg,{children:["D\xeda ",a]})})]}),(0,er.jsxs)(bg,{children:[(0,er.jsxs)(vg,{children:[(0,er.jsx)(xg,{children:"\xc1rea Objetivo"}),(0,er.jsx)(wg,{children:p.targetAreas.map(((e,t)=>(0,er.jsxs)(Sg,{children:[(0,er.jsx)(kg,{children:h(e)}),(0,er.jsx)($g,{children:e})]},t)))})]}),(0,er.jsx)(Eg,{children:c&&(0,er.jsx)(jg,{children:null===(n=p.exercises)||void 0===n?void 0:n.map(((e,t)=>(0,er.jsxs)(Cg,{children:[(0,er.jsx)(Pg,{children:(0,er.jsx)("img",{src:e.image,alt:e.name})}),(0,er.jsxs)(Tg,{children:[(0,er.jsx)(zg,{children:e.name}),(0,er.jsx)(Ag,{children:e.type})]}),(0,er.jsx)(Rg,{children:e.duration}),(0,er.jsx)(Dg,{children:"\u203a"})]},t)))})}),(0,er.jsxs)(Mg,{onClick:()=>{p.exercises&&p.exercises.length>0&&o(`/category/${i}/exercise/${r}/day/${a}/exercise/0`)},children:["COMENZAR",(0,er.jsx)(Lg,{})]})]})]})},_g=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2.125rem);
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
`,Ng=Qi.div`
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]} 0 0;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Fg=Qi(Qd.button)`
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid}10;
    }
`,Ig=(Qi.h1`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 600;
    color: ${e=>e.theme.colors.text};
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
`,Qi.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.background};
`),Vg=Qi(Qd.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    padding: ${e=>e.theme.spacing["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;
    overflow: hidden;
    min-height: 300px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,Ug=Qi.div`
    width: 220px;
    height: 280px;
    background: ${e=>e.theme.colors.backgroundDark};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    position: relative;
    overflow: hidden;
    box-shadow: ${e=>e.theme.colors.shadow};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${e=>e.theme.borderRadius["2xl"]};
    }
`,Bg=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`,Hg=Qi.h2`
    font-size: ${e=>e.theme.fontSizes["4xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 ${e=>e.theme.spacing.lg} 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,qg=Qi.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.lg};
    margin: 0 0 ${e=>e.theme.spacing.xl} 0;
`,Wg=Qi(Qd.div)`
    width: 80px;
    height: 80px;
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    color: ${e=>e.theme.colors.primarySolid};
    box-shadow: ${e=>e.theme.colors.shadowHover};
`,Yg=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`,Kg=Qi.div`
    margin-bottom: ${e=>e.theme.spacing.xl};
    text-align: center;
`,Gg=Qi.h3`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 600;
    color: ${e=>e.theme.colors.text};
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
`,Xg=Qi.div`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.full};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
    display: inline-block;
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 500;
    color: ${e=>e.theme.colors.textLight};
`,Qg=Qi.div`
    text-align: center;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,Jg=Qi.div`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    font-weight: 300;
    font-family: 'Courier New', monospace;
    margin-bottom: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${e=>e.theme.colors.primary};
        border-radius: ${e=>e.theme.borderRadius.full};
    }
`,Zg=Qi.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e=>e.theme.spacing.xl};
    padding: ${e=>e.theme.spacing.xl} 0;
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
`,ey=Qi(Qd.button)`
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 50%;
    background: ${e=>e.primary?e.theme.colors.primary:e.theme.colors.surface};
    color: ${e=>e.primary?"white":e.theme.colors.text};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    transition: ${e=>e.theme.transitions.bounce};
    box-shadow: ${e=>e.primary?e.theme.colors.shadowHover:e.theme.colors.shadow};
    border: 2px solid ${e=>e.primary?"transparent":e.theme.colors.border};

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`,ty=Qi(ey)`
    width: 72px;
    height: 72px;
    font-size: ${e=>e.theme.fontSizes.xl};
`,ny=Qi(Qd.button)`
    width: 100%;
    background: ${e=>e.theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: 600;
    font-family: ${e=>e.theme.fonts.main};
    cursor: pointer;
    margin-top: ${e=>e.theme.spacing.lg};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${e=>e.theme.colors.shadowHover};

        &::before {
            left: 100%;
        }
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`,iy=(Qi(Qd.div)`
    width: 100%;
    height: 6px;
    background: ${e=>e.theme.colors.backgroundDark};
    border-radius: ${e=>e.theme.borderRadius.full};
    overflow: hidden;
    margin-bottom: ${e=>e.theme.spacing.lg};
`,Qi(Qd.div)`
    height: 100%;
    background: ${e=>e.theme.colors.primary};
    border-radius: ${e=>e.theme.borderRadius.full};
`,()=>{var t,n,i;const{category:r,exercise:a,day:o,exerciseIndex:s}=ee(),l=Z(),{completeExercise:c,completeDay:u,isExerciseCompleted:d}=Pf(),[m,p]=(0,e.useState)(30),[h,f]=(0,e.useState)(!1),[g,y]=(0,e.useState)(!1),[b,v]=(0,e.useState)(0),[x,w]=(0,e.useState)(!0),S=null===kf||void 0===kf||null===(t=kf.categories)||void 0===t?void 0:t[r],k=null===S||void 0===S?void 0:S.exercises[a],$=null===k||void 0===k?void 0:k.days[o],E=null===$||void 0===$||null===(n=$.exercises)||void 0===n?void 0:n[parseInt(s)],j=(null===$||void 0===$||null===(i=$.exercises)||void 0===i?void 0:i.length)||0,C=parseInt(s);(0,e.useEffect)((()=>{if(E){const e=E.duration;e.includes("s")?p(parseInt(e)):e.includes("m")&&p(60*parseInt(e))}}),[E]),(0,e.useEffect)((()=>{let e;return h&&m>0&&(e=setInterval((()=>{p((e=>e<=1?(f(!1),y(!0),w(!1),c(`${r}-${a}`,o,C),0):e-1)),v((e=>e+.1))}),1e3)),()=>clearInterval(e)}),[h,m,c,r,a,o,C]);const P=()=>{const e=C+1;e<j?l(`/category/${r}/exercise/${a}/day/${o}/exercise/${e}`):(u(`${r}-${a}`,o),l(`/category/${r}/exercise/${a}/day/${o}/completed`))};return E?(0,er.jsxs)(_g,{children:[(0,er.jsx)(Ng,{children:(0,er.jsx)(Fg,{onClick:()=>{l(`/category/${r}/exercise/${a}/day/${o}`)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2715"})}),(0,er.jsxs)(Ig,{children:[(0,er.jsxs)(Vg,{children:[(0,er.jsx)(gr,{children:x&&(0,er.jsxs)(Bg,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.5},children:[(0,er.jsx)(Hg,{children:"\xa1Prep\xe1rate ahora!"}),(0,er.jsx)(qg,{children:"Prep\xe1rate para comenzar el ejercicio"}),(0,er.jsx)(Wg,{animate:{scale:[1,1.1,1],rotate:[0,5,-5,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:"\ud83d\udd0a"})]})}),!x&&(0,er.jsx)(Ug,{children:(0,er.jsx)("img",{src:E.image,alt:E.name})})]}),(0,er.jsxs)(Yg,{children:[(0,er.jsxs)(Kg,{children:[(0,er.jsx)(Gg,{children:E.name}),(0,er.jsxs)(Xg,{children:["Saltar ",C+1,"/",j]})]}),(0,er.jsx)(Qg,{children:(0,er.jsx)(Jg,{children:(e=>{const t=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`})(m)})}),(0,er.jsxs)(Zg,{children:[(0,er.jsx)(ey,{onClick:()=>{const e=C-1;e>=0&&l(`/category/${r}/exercise/${a}/day/${o}/exercise/${e}`)},disabled:0===C,whileHover:{scale:0===C?1:1.1},whileTap:{scale:0===C?1:.95},children:"\u23ee"}),(0,er.jsx)(ty,{primary:!0,onClick:()=>{f(!h),w(!1)},whileHover:{scale:1.1},whileTap:{scale:.95},children:h?"\u23f8":"\u25b6"}),(0,er.jsx)(ey,{onClick:P,disabled:0===C&&!h,whileHover:{scale:0!==C||h?1.1:1},whileTap:{scale:0!==C||h?.95:1},children:"\u23ed"})]}),(0,er.jsx)(gr,{children:g&&(0,er.jsx)(ny,{onClick:P,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},whileHover:{scale:1.02},whileTap:{scale:.98},children:C+1<j?"Siguiente Ejercicio":"Finalizar D\xeda"})})]})]})]}):(0,er.jsx)("div",{children:"Ejercicio no encontrado"})}),ry=Zi`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
`,ay=Zi`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,oy=Qi.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  color: white;
  text-align: center;
  padding: 20px;
`,sy=Qi.button`
    position: absolute;
    left: ${e=>e.theme.spacing.lg};
    top: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: translateX(-2px);
    }
`,ly=Qi.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`,cy=Qi.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
  animation: ${ry} 2s infinite;
`,uy=Qi.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
    border-radius: 50%;
    z-index: -1;
  }
  
  &::after {
    content: '✦ ✦ ✦';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #fbbf24;
    letter-spacing: 8px;
  }
`,dy=Qi.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  animation: ${ay} 2s infinite;
`,my=Qi.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`,py=Qi.p`
  font-size: 18px;
  color: #d1d5db;
  margin-bottom: 40px;
  max-width: 300px;
  line-height: 1.5;
`,hy=Qi.div`
  font-size: 16px;
  color: #9ca3af;
  margin-bottom: 40px;
`,fy=Qi.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,gy=Qi.button`
  width: 100%;
  background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(236, 72, 153, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`,yy=Qi.button`
  width: 100%;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
  }
`,by=Qi.span`
  font-size: 18px;
`,vy=Qi.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  color: #9ca3af;
  font-size: 14px;
`,xy=Qi.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,wy=Qi.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
`,Sy=Qi.div`
  font-size: 12px;
`,ky=()=>{const{category:e,exercise:t,day:n}=ee(),i=Z(),{totalDaysCompleted:r,streakDays:a}=Pf(),o=(new Date).toLocaleDateString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit"});return(0,er.jsxs)(oy,{children:[(0,er.jsx)(sy,{onClick:()=>{i(`/category/${e}/exercise/${t}`)},children:"\u2190"}),(0,er.jsxs)(ly,{children:[(0,er.jsx)(cy,{children:(0,er.jsx)(uy,{children:(0,er.jsx)(dy,{children:r})})}),(0,er.jsxs)(my,{children:[r," D\xedas en Total"]}),(0,er.jsxs)(py,{children:["Acumula ",r," d\xedas de ejercicio"]}),(0,er.jsx)(hy,{children:o}),(0,er.jsxs)(fy,{children:[(0,er.jsx)(gy,{onClick:()=>{i(`/category/${e}/exercise/${t}`)},children:"CONTINUAR"}),(0,er.jsxs)(yy,{onClick:()=>{navigator.share?navigator.share({title:"\xa1Complet\xe9 mi entrenamiento!",text:`\xa1Acabo de completar el ${n} d\xeda de ${t}! \ud83d\udcaa`,url:window.location.origin}):(navigator.clipboard.writeText(`\xa1Acabo de completar el ${n} d\xeda de ${t}! \ud83d\udcaa`),alert("\xa1Enlace copiado al portapapeles!"))},children:[(0,er.jsx)(by,{children:"\ud83d\udce4"}),"COMPARTIR"]})]})]}),(0,er.jsxs)(vy,{children:[(0,er.jsxs)(xy,{children:[(0,er.jsx)(wy,{children:a}),(0,er.jsx)(Sy,{children:"Racha"})]}),(0,er.jsxs)(xy,{children:[(0,er.jsx)(wy,{children:r}),(0,er.jsx)(Sy,{children:"Total"})]}),(0,er.jsxs)(xy,{children:[(0,er.jsx)(wy,{children:"85%"}),(0,er.jsx)(Sy,{children:"Progreso"})]})]})]})},$y=JSON.parse('[{"id":1,"name":"At\xfan con salsa de aguacate","category":"Saludable","image":"/comidas/atun-con-salsa-de-aguacate.png","preparationTime":85,"servings":2,"calories":320,"difficulty":"F\xe1cil","description":"Delicioso plato saludable con at\xfan fresco y salsa de aguacate, perfecto para una comida ligera y saludable.","ingredients":["1 Taza de aguacate (en cubos)","2 Cucharadas Cebolla Morada picada","2 Cucharadas de Aceite de Oliva Virgen Extra","1 Cucharada de Jugo Puro de lim\xf3n","2 cucharaditas de perejil picado","4 filetes de at\xfan (250 g cada uno)","Sal y pimienta negra al gusto"],"instructions":["En un recipiente mezcle el aguacate, la cebolla, el aceite de oliva, el jugo de lim\xf3n, el perejil y lleve a la heladera por 2 horas aproximadamente.","Sazone los filetes de at\xfan con sal y pimienta negra al gusto.","Pincelar con un poco de aceite de oliva y asar los filetes por ambos lados hasta que est\xe9n dorados.","Acomoda las rebanadas en un refractario y coloca encima la salsa de aguacate."],"nutritionalInfo":{"protein":"35g","carbs":"12g","fat":"18g","fiber":"8g"}},{"id":2,"name":"Alas de pollo a la mostaza","category":"Italiana","image":"/comidas/alas-de-pollo-a-la-mostaza.png","preparationTime":40,"servings":4,"calories":450,"difficulty":"Intermedio","description":"Deliciosas alas de pollo marinadas en una salsa cremosa de mostaza y jengibre, perfectas para una comida sabrosa y baja en carbohidratos.","ingredients":["4 Muslos con Alitas de Pollo ","3 dientes de ajo ","5 Cucharadas de Mostaza Sin az\xfacar ","1 pieza de jengibre rallado ","Sal a gusto ","Aceite de Oliva Virgen Extra al gusto"],"instructions":["En un bol, sofre\xedr bien el ajo con la sal, y mezclar el jengibre y la mostaza.","Pasar la mitad de la mezcla sobre el pollo y reservar por 20 minutos.","Engrasa una fuente para horno con aceite de oliva y coloca la otra mitad de la mezcla encima de los muslos.","Llevar a horno precalentado a 200\xb0C hasta dorar."],"nutritionalInfo":{"protein":"22g","carbs":"65g","fat":"18g","fiber":"3g"}},{"id":3,"name":"Alb\xf3ndigas de pavo","category":"Mexicana","image":"/comidas/albondigas-de-pavo.png","preparationTime":35,"servings":3,"calories":380,"difficulty":"F\xe1cil","description":"Deliciosas alb\xf3ndigas de pavo con salsa de tomate y queso, perfectas para una comida saludable y deliciosa.","ingredients":["300g de carne de pavo picada","1 huevo cocido","1 huevo crudo","1 cebolla peque\xf1a","Jengibre picado al gusto","1 Cucharada de Aceite de Oliva Virgen Extra","Sal y pimienta negra al gusto"],"instructions":["En un recipiente, mezcle la carne, la cebolla, el jengibre picado, el huevo cocido y el huevo crudo.","Sazone con sal y pimienta al gusto.","Mezcla hasta obtener una mezcla homog\xe9nea.","Modelar bolitas creando la forma de alb\xf3ndigas y tenerlas en forma untadas con un poco de aceite de oliva.","Hornear en horno precalentado a 180\xb0C por aproximadamente 20 minutos o hasta que las alb\xf3ndigas est\xe9n doradas."],"nutritionalInfo":{"protein":"28g","carbs":"35g","fat":"14g","fiber":"9g"}},{"id":4,"name":"Tortilla de espinacas","category":"Asi\xe1tica","image":"/comidas/tortilla-de-espinacas.png","preparationTime":15,"servings":4,"calories":420,"difficulty":"Intermedio","description":"Deliciosa tortilla de espinacas con huevos, cebolla y queso, perfecta para una comida saludable y deliciosa.","ingredients":["1 taza de espinacas (picadas)","3 huevos","1/2 cebolla picada","1 Cucharada Queso Blanco Rallado","1 cucharada de perejil picado","1 Cucharadita de Aceite de Oliva","Sal y pimienta negra al gusto"],"instructions":["Bate los huevos con el tenedor hasta obtener una mezcla homog\xe9nea.","En una sart\xe9n caliente con aceite de oliva, saltee la cebolla hasta que est\xe9 dorada.","Agregue la espinaca picada y deje solo hasta que se marchite.","Agrega los huevos batidos, el perejil picado y sazona con sal y pimienta negra al gusto.","Deje que se ponga firme y dorado por un lado y luego dore por el otro lado."],"nutritionalInfo":{"protein":"32g","carbs":"18g","fat":"24g","fiber":"6g"}},{"id":5,"name":"Tortilla con pollo","category":"Francesa","image":"/comidas/tortilla-con-pollo.png","preparationTime":30,"servings":6,"calories":180,"difficulty":"Intermedio","description":"Deliciosa tortilla con pollo, cebolla y perejil, perfecta para una comida saludable y deliciosa.","ingredients":["3 huevos","100 g de pollo cocido y desmenuzado","12 cebolla finamente picada","1 cucharadita de aceite de oliva","Perejil y or\xe9gano al gusto","Sal y pimienta negra al gusto"],"instructions":["En un recipiente, bate los huevos, la cebolla, el perejil, la sal, el or\xe9gano y la pimienta negra hasta integrar bien;","Agrega el pollo y bate un poco m\xe1s;","Ponga la mezcla en una sart\xe9n caliente con el aceite de oliva y d\xe9jela reposar. Gire hacia el otro lado al oro."],"nutritionalInfo":{"protein":"6g","carbs":"25g","fat":"8g","fiber":"12g"}},{"id":6,"name":"Minipizzas de berenjena","category":"Japonesa","image":"/comidas/minipizzas-de-berenjena.png","preparationTime":25,"servings":2,"calories":350,"difficulty":"Intermedio","description":"Deliciosas minipizzas de berenjena con tomates cherry, ricota y salsa de tomate, perfectas para una comida saludable y deliciosa.","ingredients":["2 berenjenas grandes","200g de tomates cherry en rodajas","200 g de ricota rallada","200ml de salsa de tomate","1 cucharadita de mantequilla","Or\xe9gano al gusto"],"instructions":["Corta las berenjenas a lo largo","Coloque las rebanadas en una fuenteupnaora horno ligeramente untada con mantequilla y espolvoree un poco de sal y pimienta negra encima.","Llevar a horno precalentado a 180\xb0C por 15 minutos.","Retire la bandeja para hornear del horno y rellene cada rebanada individualmente, agregando salsa de tomate, ricota rallada, rodajas de tomate cherry y or\xe9gano.","Regresar al horno por otros 15 min."],"nutritionalInfo":{"protein":"25g","carbs":"45g","fat":"12g","fiber":"8g"}},{"id":7,"name":"Cesta de pechuga de pavo","category":"Espa\xf1ola","image":"/comidas/cesta-de-pechuga-de-pavo.png","preparationTime":15,"servings":6,"calories":480,"difficulty":"Avanzado","description":"Deliciosa cesta de pechuga de pavo con vegetales, perfecta para una comida saludable y deliciosa.","ingredients":["6 rebanadas de pechuga de pavo","6 huevos","3 tomates cherry cortados por la mitad","1/2 Zanahoria Rallada","or\xe9gano al gusto","Sal a gusto"],"instructions":["Picar los tomates cherry por la mitad, rallar la zanahoria y reservar.","En un bowl, bate los huevos hasta que quede una mezcla uniforme.","Sazone con sal al gusto, mezcle bien y reserve.","Cubra con rebanadas de pechuga de pavo moldes individuales para pastel.","Agregue tomates cherry y zanahorias ralladas a las canastas de pechuga de pavo.","Luego coloca los huevos batidos.","Espolvorear con un poco de or\xe9gano al gusto y llevar al horno precalentado a 180\xb0C por unos 1 5 minutos o hasta que las canastas est\xe9n doradas y los huevos firmes.","Retirar del horno y servir inmediatamente."],"nutritionalInfo":{"protein":"28g","carbs":"55g","fat":"16g","fiber":"4g"}},{"id":8,"name":"Bolitas de espinacas","category":"Desayuno","image":"/comidas/bolitas-de-espinacas.png","preparationTime":30,"servings":1,"calories":280,"difficulty":"F\xe1cil","description":"Deliciosas bolitas de espinacas con queso, perfectas para una comida saludable y deliciosa.","ingredients":["2 manojos de espinacas","1 cebolla mediana picada","2 huevos","1 diente de ajo machacado","Perejil al gusto","1 cucharada de aceite de coco","Harina De Berenjena Al Punto","Sal y pimienta negra al gusto"],"instructions":["Lava bien los manojos de espinacas y d\xe9jalos en remojo durante unos minutos en agua caliente.","Escurrir las espinacas y picarlas finamente.","En un recipiente, agrega las espinacas, los huevos, el ajo, el perejil, la sal, el aceite de coco y la pimienta del reino y mezcla bien.","Agrega la harina de berenjena poco a poco hasta obtener una masa firme.","Con ayuda de dos cucharas, moldea las alb\xf3ndigas de espinaca y col\xf3calas en forma engrasada.","Llevar al horno precalentado a 160\xb0C hasta que las alb\xf3ndigas est\xe9n bien doradas."],"nutritionalInfo":{"protein":"8g","carbs":"45g","fat":"12g","fiber":"9g"}},{"id":9,"name":"Galleta de br\xf3coli","category":"Americana","image":"/comidas/galleta-de-brocoli.png","preparationTime":30,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosas alb\xf3ndigas de calabac\xedn con queso, perfectas para una comida saludable y deliciosa.","ingredients":["1 cabeza de br\xf3coli, cocido y escurrido","1 huevo","100 gramos de mozzarella finamente rallada","Sal y pimienta negra al gusto"],"instructions":["Cuece el br\xf3coli en una cazuela con agua y una pizca de sal durante 2 minutos.","Despu\xe9s de la cocci\xf3n, trocea el br\xf3coli para que parezca harina.","En un bol, mezclar todos los ingredientes, hacer bolitas con la masa y colocarlas en una sart\xe9n antiadherente.","Llevar a hornear en horno medio 180\xb0C por unos 10 a 15 minutos."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}},{"id":10,"name":"Alb\xf3ndigas de calabac\xedn con queso","category":"Americana","image":"/comidas/albondigas-de-calabacin-con-queso.png","preparationTime":45,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosas alb\xf3ndigas de calabac\xedn con queso, perfectas para una comida saludable y deliciosa.","ingredients":["2 calabacines","100g de queso Minas rallado","1/2 cebolla picada","2 dientes de ajo","1 cucharada (t\xe9) de sal","1/2 taza (t\xe9) de harina de almendras","1 huevo"],"instructions":["Ralla los calabacines y col\xf3calos sobre un pa\xf1o de cocina limpio, haz un peque\xf1o paquete y presiona bien los calabacines para sacarles todo el l\xedquido.","En un recipiente disponer las calabacitas, el queso, la cebolla picada, el ajo, el huevo, la sal y la harina de almendras.","Mezclar bien.","Toma dos cucharas y con las manos presiona hasta formar un pastelito.","Disponer las alb\xf3ndigas en un molde engrasado y hornear en horno precalentado a 200\xb0C por 30 minutos aproximadamente, volteando las alb\xf3ndigas a la mitad.","Mezclar bien."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}},{"id":11,"name":"Galleta de coco","category":"Americana","image":"/comidas/galleta-de-coco.png","preparationTime":30,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosas galletas de coco, perfectas para una comida saludable y deliciosa.","ingredients":["1 taza (t\xe9) de harina de coco (125 gramos)","1 Cucharada de Xilitol","1 taza (t\xe9) de mantequilla de coco","6 Gotas de Extracto de Vainilla","2 huevos"],"instructions":["En un recipiente, mezcla bien la harina de coco, el endulzante xilitol, la manteca de coco y el extracto de vainilla.","Agrega los huevos y mezcla bien hasta obtener una mezcla homog\xe9nea.","Disponer la masa en forma engrasada con papel manteca y abrir la masa con ayuda de un rollo.","Cortar la masa en cuadrados del tama\xf1o deseado.","Llevar a horno precalentado a 180\xb0C por aproximadamente 25 minutos o hasta que las galletas est\xe9n doradas.","Retire del horno y deje enfriar."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}},{"id":12,"name":"Brownie de cacao","category":"Americana","image":"/comidas/brownie-de-cacao.png","preparationTime":50,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosos brownies de cacao, perfectas para una comida saludable y deliciosa.","ingredients":["200 g de mantequilla sin sal","260g de xilitol","1 y /2 tazas de harina de almendras","12 cucharadas de cacao en polvo","2 tazas de nueces (trituradas) ","5 gotas de esencia de vainilla","4 huevos"],"instructions":["Tamizar el xilitol en el vaso de la batidora, agregar los huevos, la mantequilla y batir por 4 min.","Tamizar tambien la harina de almendras y el cacao. Batir por otros 4 min.","Agrega las nueces, la esencia de vainilla y bate un poco m\xe1s solo para incorporar.","En una fuente para horno untada con mantequilla, verter la masa y hornear en horno precalentado a 250C durante aproximadamente 25 minutos."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}}]'),Ey=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
`,jy=Qi.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    position: relative;
    border-radius: ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]} 0 0;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
    }
`,Cy=Qi(Qd.button)`
    position: absolute;
    left: ${e=>e.theme.spacing.lg};
    top: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid}10;
        transform: translateX(-2px);
    }
`,Py=Qi.div`
    text-align: center;
    margin-top: ${e=>e.theme.spacing.lg};
`,Ty=Qi.h1`
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,zy=Qi.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    margin: 0;
    font-weight: 400;
`,Ay=(Qi.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
        display: none;
    }
`,Qi.button`
    background: ${e=>e.active?e.theme.colors.primary:"white"};
    color: ${e=>e.active?"white":"#666"};
    border: 2px solid ${e=>e.active?e.theme.colors.primarySolid:"#e0e0e0"};
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`,Qi.div`
    padding: ${e=>e.theme.spacing.lg};
    flex: 1;
    background: ${e=>e.theme.colors.background};
`),Ry=Qi(Qd.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e=>e.theme.spacing.lg};
    margin-bottom: ${e=>e.theme.spacing.xl};
`,Dy=Qi(Qd.div)`
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    overflow: hidden;
    cursor: pointer;
    transition: ${e=>e.theme.transitions.slow};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};
    position: relative;

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${e=>e.theme.colors.shadowHover};
    }
`,My=Qi.div`
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
`,Ly=Qi.div`
    width: 100%;
    height: 100%;
    background-image: url(${e=>e.image});
    background-size: cover;
    background-position: center;
    transition: ${e=>e.theme.transitions.slow};
    position: relative;

    ${Dy}:hover & {
        transform: scale(1.1);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(45, 90, 61, 0.1) 0%,
            rgba(74, 124, 89, 0.1) 100%
        );
        opacity: 0;
        transition: ${e=>e.theme.transitions.base};
    }

    ${Dy}:hover &::after {
        opacity: 1;
    }
`,Oy=Qi.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.6) 100%
    );
    display: flex;
    align-items: flex-end;
    padding: ${e=>e.theme.spacing.md};
`,_y=Qi.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
`,Ny=Qi.div`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
    border-radius: ${e=>e.theme.borderRadius.md};
    font-size: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
`,Fy=Qi.div`
    padding: ${e=>e.theme.spacing.lg};
`,Iy=Qi.h3`
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: 600;
    color: ${e=>e.theme.colors.text};
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    line-height: 1.3;
    font-family: ${e=>e.theme.fonts.display};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Vy=Qi.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.theme.colors.textLight};
`,Uy=(Qi.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.xs};
    font-weight: 600;
    color: ${e=>e.theme.colors.successSolid};
`,Qi.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.xs};
    font-weight: 500;

    svg {
        width: 14px;
        height: 14px;
        opacity: 0.7;
    }
`),By=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.lg};
    text-align: center;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    border: 1px solid ${e=>e.theme.colors.border};

    .icon {
        font-size: ${e=>e.theme.fontSizes["4xl"]};
        margin-bottom: ${e=>e.theme.spacing.lg};
        opacity: 0.5;
    }

    h3 {
        color: ${e=>e.theme.colors.text};
        font-size: ${e=>e.theme.fontSizes.xl};
        font-weight: 600;
        margin-bottom: ${e=>e.theme.spacing.sm};
    }

    p {
        color: ${e=>e.theme.colors.textLight};
        font-size: ${e=>e.theme.fontSizes.base};
        max-width: 280px;
    }
`,Hy=()=>{const t=Z(),[n,i]=(0,e.useState)("Todas"),r=(new Set($y.map((e=>e.category))),"Todas"===n?$y:$y.filter((e=>e.category===n)));return(0,er.jsxs)(Ey,{children:[(0,er.jsxs)(jy,{children:[(0,er.jsx)(Cy,{onClick:()=>{t("/discover")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190"}),(0,er.jsxs)(Py,{children:[(0,er.jsx)(Ty,{children:"Recetas Saludables"}),(0,er.jsx)(zy,{children:"Deliciosas opciones nutritivas para ti"})]})]}),(0,er.jsx)(Ay,{children:r.length>0?(0,er.jsx)(Ry,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:(0,er.jsx)(gr,{children:r.map(((e,n)=>(0,er.jsxs)(Dy,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{delay:.1*n},onClick:()=>{return n=e.id,void t(`/recipes/${n}`);var n},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,er.jsxs)(My,{children:[(0,er.jsx)(Ly,{image:e.image}),(0,er.jsx)(Oy,{children:(0,er.jsxs)(_y,{children:[(0,er.jsxs)(Ny,{children:["\u23f1 ",e.preparationTime,"m"]}),e.difficulty&&(0,er.jsxs)(Ny,{children:["\u2b50 ",e.difficulty]})]})})]}),(0,er.jsxs)(Fy,{children:[(0,er.jsx)(Iy,{children:e.name}),(0,er.jsx)(Vy,{children:(0,er.jsxs)(Uy,{children:[(0,er.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[(0,er.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,er.jsx)("polyline",{points:"12,6 12,12 16,14",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),e.preparationTime,"min"]})})]})]},e.id)))})}):(0,er.jsxs)(By,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,er.jsx)("div",{className:"icon",children:"\ud83c\udf7d\ufe0f"}),(0,er.jsx)("h3",{children:"No hay recetas disponibles"}),(0,er.jsx)("p",{children:"No se encontraron recetas en esta categor\xeda. Prueba con otra categor\xeda."})]})})]})},qy=Qi.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background: linear-gradient(
        135deg,
        ${e=>e.theme.colors.background} 0%,
        ${e=>e.theme.colors.backgroundDark} 100%
    );
    box-shadow: ${e=>e.theme.colors.shadow};
    overflow: hidden;
    position: relative;
`,Wy=Qi(Qd.div)`
    width: 100%;
    height: 320px;
    background-image: url(${e=>e.image});
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
`,Yy=Qi.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
                    rgba(45, 90, 61, 0.4) 0%,
                        rgba(74, 124, 89, 0.3) 50%,
            rgba(30, 61, 40, 0.6) 100%
    );
    backdrop-filter: blur(2px);
`,Ky=Qi.div`
    position: absolute;
    top: ${e=>e.theme.spacing.lg};
    left: ${e=>e.theme.spacing.lg};
    right: ${e=>e.theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`,Gy=Qi(Qd.button)`
    background: ${e=>e.theme.colors.surface};
    border: 2px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    cursor: pointer;
    color: ${e=>e.theme.colors.text};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        border-color: ${e=>e.theme.colors.primarySolid};
        transform: translateX(-2px);
    }
`,Xy=Qi(Gy)`
    svg {
        color: ${e=>e.isFavorite?"#ff6b6b":"currentColor"};
        fill: ${e=>e.isFavorite?"#ff6b6b":"none"};
        width: 16px;
        height: 16px;
    }
`,Qy=Qi(Qd.h1)`
    position: absolute;
    bottom: ${e=>e.theme.spacing["2xl"]};
    left: ${e=>e.theme.spacing.lg};
    right: ${e=>e.theme.spacing.lg};
    color: white;
    font-size: ${e=>e.theme.fontSizes["4xl"]};
    font-weight: 700;
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    letter-spacing: -0.02em;
    line-height: 1.1;
`,Jy=Qi(Qd.div)`
    flex: 1;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]} 0 0;
    margin-top: -${e=>e.theme.spacing.xl};
    position: relative;
    z-index: 5;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`,Zy=Qi.div`
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg};
    border-bottom: 1px solid ${e=>e.theme.colors.border};
`,eb=Qi.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e=>e.theme.spacing.lg};
    margin-bottom: ${e=>e.theme.spacing.xl};
`,tb=Qi(Qd.div)`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg};
    text-align: center;
    box-shadow: ${e=>e.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: ${e=>e.theme.colors.primary};
    }
`,nb=Qi.div`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.xs};
    font-family: ${e=>e.theme.fonts.display};
`,ib=Qi.div`
    font-size: ${e=>e.theme.fontSizes.xs};
    color: ${e=>e.theme.colors.textLight};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
`,rb=Qi.p`
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.textLight};
    line-height: 1.6;
    margin: 0;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
`,ab=Qi.div`
    display: flex;
    padding: 0 ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(20px);
`,ob=Qi(Qd.button)`
    flex: 1;
    padding: ${e=>e.theme.spacing.lg};
    background: none;
    border: none;
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: ${e=>e.active?"600":"400"};
    color: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.textLight};
    border-bottom: 3px solid ${e=>e.active?e.theme.colors.primarySolid:"transparent"};
    cursor: pointer;
    transition: ${e=>e.theme.transitions.base};
    position: relative;
    font-family: ${e=>e.theme.fonts.main};

    &:hover {
        color: ${e=>e.theme.colors.primarySolid};
        background: ${e=>e.theme.colors.primarySolid}10;
    }

    ${e=>e.active?`\n        &::before {\n            content: '';\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            height: 3px;\n            background: ${e.theme.colors.primary};\n            animation: slideIn 0.3s ease;\n        }\n\n        @keyframes slideIn {\n            from { transform: scaleX(0); }\n            to { transform: scaleX(1); }\n        }\n    `:""}
`,sb=Qi(Qd.div)`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.background};
    min-height: 400px;
`,lb=Qi.h3`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 600;
    color: ${e=>e.theme.colors.text};
    margin: 0 0 ${e=>e.theme.spacing.lg} 0;
    font-family: ${e=>e.theme.fonts.display};
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.sm};

    &::before {
        content: '';
        width: 4px;
        height: 20px;
        background: ${e=>e.theme.colors.primary};
        border-radius: ${e=>e.theme.borderRadius.full};
    }
`,cb=Qi.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
`,ub=Qi(Qd.div)`
    background: ${e=>e.theme.colors.surface};
    border: 1px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg};
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.md};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${e=>e.theme.colors.shadowHover};
        border-color: ${e=>e.theme.colors.primarySolid};
    }
`,db=Qi.div`
    width: 40px;
    height: 40px;
    background: ${e=>e.theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    color: white;
    flex-shrink: 0;
    box-shadow: ${e=>e.theme.colors.shadow};
`,mb=Qi.div`
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.text};
    font-weight: 500;
    line-height: 1.4;
`,pb=Qi.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.lg};
`,hb=Qi(Qd.div)`
    background: ${e=>e.theme.colors.surface};
    border: 1px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg};
    display: flex;
    gap: ${e=>e.theme.spacing.lg};
    transition: ${e=>e.theme.transitions.base};
    box-shadow: ${e=>e.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${e=>e.theme.colors.shadowHover};
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: ${e=>e.theme.colors.primary};
    }
`,fb=Qi.div`
    width: 48px;
    height: 48px;
    background: ${e=>e.theme.colors.primary};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>e.theme.fontSizes.lg};
    font-weight: 700;
    flex-shrink: 0;
    box-shadow: ${e=>e.theme.colors.shadow};
    font-family: ${e=>e.theme.fonts.display};
`,gb=Qi.div`
    font-size: ${e=>e.theme.fontSizes.base};
    line-height: 1.6;
    color: ${e=>e.theme.colors.text};
    font-weight: 400;
`,yb=Qi.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e=>e.theme.spacing.lg};
`,bb=Qi(Qd.div)`
    background: ${e=>e.theme.colors.surface};
    border: 1px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.theme.borderRadius.xl};
    padding: ${e=>e.theme.spacing.lg};
    text-align: center;
    box-shadow: ${e=>e.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${e=>e.theme.colors.shadowHover};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${e=>e.theme.colors.success};
    }
`,vb=Qi.div`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.success};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
    font-family: ${e=>e.theme.fonts.display};
`,xb=Qi.div`
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.theme.colors.textLight};
    text-transform: capitalize;
    font-weight: 500;
`,wb=Qi(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: ${e=>e.theme.spacing.xl};
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]};
    box-shadow: ${e=>e.theme.colors.shadow};
    margin: ${e=>e.theme.spacing.lg};
`,Sb=Qi.div`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    margin-bottom: ${e=>e.theme.spacing.xl};
    opacity: 0.5;
`,kb=Qi.h2`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    color: ${e=>e.theme.colors.text};
    margin-bottom: ${e=>e.theme.spacing.md};
    font-family: ${e=>e.theme.fonts.display};
`,$b=Qi.p`
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.textLight};
    margin-bottom: ${e=>e.theme.spacing.xl};
    max-width: 300px;
`,Eb=()=>{const t=Z(),{recipeId:n}=ee(),[i,r]=(0,e.useState)("ingredients"),[a,o]=(0,e.useState)(!1),s=$y.find((e=>e.id===parseInt(n)));if(!s)return(0,er.jsx)(qy,{children:(0,er.jsxs)(wb,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[(0,er.jsx)(Sb,{children:"\ud83c\udf7d\ufe0f"}),(0,er.jsx)(kb,{children:"Receta no encontrada"}),(0,er.jsx)($b,{children:"La receta que buscas no existe o ha sido eliminada."}),(0,er.jsx)(Gy,{onClick:()=>t("/recipes"),children:"\u2190"})]})});const l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,staggerChildren:.1}}},c={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}};return(0,er.jsxs)(qy,{children:[(0,er.jsxs)(Wy,{image:s.image,initial:{opacity:0,scale:1.1},animate:{opacity:1,scale:1},transition:{duration:.8},children:[(0,er.jsx)(Yy,{}),(0,er.jsxs)(Ky,{children:[(0,er.jsx)(Gy,{onClick:()=>{t("/recipes")},whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2190"}),(0,er.jsx)(Xy,{isFavorite:a,onClick:()=>{o(!a)},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,er.jsx)("svg",{viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,er.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),(0,er.jsx)(Qy,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.6},children:s.name})]}),(0,er.jsxs)(Jy,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},children:[(0,er.jsxs)(Zy,{children:[(0,er.jsxs)(eb,{children:[(0,er.jsxs)(tb,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.5},whileHover:{scale:1.05},children:[(0,er.jsxs)(nb,{children:[s.preparationTime,"m"]}),(0,er.jsx)(ib,{children:"Tiempo"})]}),(0,er.jsxs)(tb,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5,duration:.5},whileHover:{scale:1.05},children:[(0,er.jsx)(nb,{children:s.difficulty}),(0,er.jsx)(ib,{children:"Dificultad"})]})]}),(0,er.jsx)(rb,{children:s.description})]}),(0,er.jsxs)(ab,{children:[(0,er.jsx)(ob,{active:"ingredients"===i,onClick:()=>r("ingredients"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Ingredientes"}),(0,er.jsx)(ob,{active:"instructions"===i,onClick:()=>r("instructions"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Preparaci\xf3n"})]}),(0,er.jsx)(sb,{children:(0,er.jsx)(gr,{mode:"wait",children:(()=>{switch(i){case"ingredients":return(0,er.jsxs)(Qd.div,{variants:l,initial:"hidden",animate:"visible",children:[(0,er.jsxs)(lb,{children:["Ingredientes (",s.servings," porciones)"]}),(0,er.jsx)(cb,{children:s.ingredients.map(((e,t)=>(0,er.jsxs)(ub,{variants:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,er.jsx)(db,{children:"\ud83e\udd44"}),(0,er.jsx)(mb,{children:e})]},t)))})]});case"instructions":return(0,er.jsxs)(Qd.div,{variants:l,initial:"hidden",animate:"visible",children:[(0,er.jsx)(lb,{children:"Instrucciones de Preparaci\xf3n"}),(0,er.jsx)(pb,{children:s.instructions.map(((e,t)=>(0,er.jsxs)(hb,{variants:c,whileHover:{scale:1.01},children:[(0,er.jsx)(fb,{children:t+1}),(0,er.jsx)(gb,{children:e})]},t)))})]});case"nutrition":return(0,er.jsxs)(Qd.div,{variants:l,initial:"hidden",animate:"visible",children:[(0,er.jsx)(lb,{children:"Informaci\xf3n Nutricional"}),(0,er.jsx)(yb,{children:Object.entries(s.nutritionalInfo||{}).map((e=>{let[t,n]=e;return(0,er.jsxs)(bb,{variants:c,whileHover:{scale:1.05},children:[(0,er.jsx)(vb,{children:n}),(0,er.jsxs)(xb,{children:["protein"===t&&"Prote\xedna","carbs"===t&&"Carbohidratos","fat"===t&&"Grasas","fiber"===t&&"Fibra"]})]},t)}))})]});default:return null}})()})},i)]})]})},jb={colors:{primary:"linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)",primarySolid:"#2d5a3d",primaryLight:"#4a7c59",primaryDark:"#1e3d28",secondary:"linear-gradient(135deg, #6b8e6b 0%, #8ab08a 100%)",secondarySolid:"#6b8e6b",secondaryLight:"#8ab08a",secondaryDark:"#5a7a5a",accent:"linear-gradient(135deg, #7c9885 0%, #9bb99e 100%)",accentSolid:"#7c9885",success:"linear-gradient(135deg, #4a7c59 0%, #6b8e6b 100%)",successSolid:"#4a7c59",warning:"linear-gradient(135deg, #d4a574 0%, #e6c2a6 100%)",warningSolid:"#d4a574",text:"#2d3e2d",textLight:"#5a6b5a",textLighter:"#8a9b8a",background:"#f7f4f0",backgroundDark:"#f0ebe4",surface:"#ffffff",surfaceLight:"rgba(255, 255, 255, 0.9)",glass:"rgba(247, 244, 240, 0.75)",glassDark:"rgba(240, 235, 228, 0.5)",shadow:"0 8px 32px rgba(45, 90, 61, 0.1)",shadowHover:"0 16px 48px rgba(45, 90, 61, 0.15)",shadowActive:"0 4px 16px rgba(45, 90, 61, 0.2)",border:"#e8e1d8",borderLight:"#f2ede6"},fonts:{main:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",display:"'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2rem","5xl":"3rem"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem","2xl":"1.5rem",full:"9999px"},transitions:{fast:"all 0.15s ease",base:"all 0.2s ease",slow:"all 0.3s ease",bounce:"all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},Cb=Qi.div`
    min-height: 100vh;
    width: 100%;
    background: ${e=>e.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    
    /* Mobile first - full width */
    @media (max-width: 480px) {
        padding: 0;
    }
    
    /* Tablet and up - centered with max width */
    @media (min-width: 481px) {
        padding: ${e=>e.theme.spacing.md};
    }
    
    /* Large screens - add side padding */
    @media (min-width: 1024px) {
        padding: ${e=>e.theme.spacing.xl};
    }
`,Pb=Qi.div`
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    background: ${e=>e.theme.colors.surface};
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    /* Mobile - full height and width */
    @media (max-width: 480px) {
        border-radius: 0;
        box-shadow: none;
        border: none;
    }
    
    /* Tablet and up - card-like appearance */
    @media (min-width: 481px) {
        border-radius: ${e=>e.theme.borderRadius["2xl"]};
        box-shadow: ${e=>e.theme.colors.shadow};
        border: 1px solid ${e=>e.theme.colors.border};
        min-height: calc(100vh - ${e=>e.theme.spacing.xl});
    }
`,Tb=Qi.div`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    
    /* Custom scrollbar for better UX */
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: ${e=>e.theme.colors.backgroundDark};
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${e=>e.theme.colors.primarySolid};
        border-radius: ${e=>e.theme.borderRadius.full};
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${e=>e.theme.colors.primaryDark};
    }
`,zb=()=>{const t=X(),[n]=(Z(),(0,e.useState)(1)),i=["/height","/weight","/age","/injuries","/activity","/flexibility","/aerobic"],r=i.length,a=i.indexOf(t.pathname),o=t.pathname.includes("discover")||t.pathname.includes("activities")||t.pathname.includes("category")||t.pathname.includes("recipes");return(0,er.jsx)(Cb,{children:(0,er.jsx)(Pb,{children:(0,er.jsxs)(gr,{mode:"wait",children:["/"!==t.pathname&&"/goal"!==t.pathname&&!o&&(0,er.jsxs)(em,{children:[(0,er.jsx)(rm,{to:i[a-1]||"/",children:(0,er.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16",children:(0,er.jsx)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})})}),(0,er.jsx)(am,{children:(()=>{const e=[];for(let t=0;t<r;t++)e.push((0,er.jsx)(om,{active:t<=a},t));return e})()})]}),(0,er.jsx)(Tb,{children:(0,er.jsx)(Qd.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{flex:1,display:"flex",flexDirection:"column"},children:(0,er.jsxs)(ye,{location:t,children:[(0,er.jsx)(fe,{path:"/",element:(0,er.jsx)(ym,{})}),(0,er.jsx)(fe,{path:"/goal",element:(0,er.jsx)(Uh,{})}),(0,er.jsx)(fe,{path:"/height",element:(0,er.jsx)(Cm,{})}),(0,er.jsx)(fe,{path:"/weight",element:(0,er.jsx)(_m,{})}),(0,er.jsx)(fe,{path:"/age",element:(0,er.jsx)(Ym,{})}),(0,er.jsx)(fe,{path:"/injuries",element:(0,er.jsx)(ip,{})}),(0,er.jsx)(fe,{path:"/activity",element:(0,er.jsx)(mh,{})}),(0,er.jsx)(fe,{path:"/flexibility",element:(0,er.jsx)($h,{})}),(0,er.jsx)(fe,{path:"/aerobic",element:(0,er.jsx)(Oh,{})}),(0,er.jsx)(fe,{path:"/discover",element:(0,er.jsx)(sf,{})}),(0,er.jsx)(fe,{path:"/activities",element:(0,er.jsx)(Sf,{})}),(0,er.jsx)(fe,{path:"/category/:category",element:(0,er.jsx)(Wf,{})}),(0,er.jsx)(fe,{path:"/category/:category/exercise/:exercise",element:(0,er.jsx)(mg,{})}),(0,er.jsx)(fe,{path:"/category/:category/exercise/:exercise/day/:day",element:(0,er.jsx)(Og,{})}),(0,er.jsx)(fe,{path:"/category/:category/exercise/:exercise/day/:day/exercise/:exerciseIndex",element:(0,er.jsx)(iy,{})}),(0,er.jsx)(fe,{path:"/category/:category/exercise/:exercise/day/:day/completed",element:(0,er.jsx)(ky,{})}),(0,er.jsx)(fe,{path:"/recipes",element:(0,er.jsx)(Hy,{})}),(0,er.jsx)(fe,{path:"/recipes/:recipeId",element:(0,er.jsx)(Eb,{})})]})},t.pathname)})]})})})};const Ab=function(){return(0,er.jsxs)(Bi,{theme:jb,children:[(0,er.jsx)(Jd,{}),(0,er.jsx)(Cf,{children:(0,er.jsx)(Je,{children:(0,er.jsx)(zb,{})})})]})},Rb=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:i,getFCP:r,getLCP:a,getTTFB:o}=t;n(e),i(e),r(e),a(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,er.jsx)(e.StrictMode,{children:(0,er.jsx)(Ab,{})})),Rb()})()})();
//# sourceMappingURL=main.c2b04087.js.map