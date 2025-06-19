/*! For license information please see main.40609cdd.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var m=Object.assign,p=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),j=Symbol.for("react.lazy");Symbol.for("react.scope");var C=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function z(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var A=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case $:return"SuspenseList";case C:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case f:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var D=Array.isArray,M=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},_=[],N=-1;function F(e){return{current:e}}function I(e){0>N||(e.current=_[N],_[N]=null,N--)}function V(e,t){N++,_[N]=e.current,e.current=t}var U=F(null),B=F(null),H=F(null),q=F(null);function W(e,t){switch(V(H,t),V(B,e),V(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=ad(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(U),V(U,e)}function Y(){I(U),I(B),I(H)}function K(e){null!==e.memoizedState&&V(q,e);var t=U.current,n=ad(t,e.type);t!==n&&(V(B,e),V(U,n))}function G(e){B.current===e&&(I(U),I(B)),q.current===e&&(I(q),Kd._currentValue=O)}var X=Object.prototype.hasOwnProperty,Q=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,oe=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function me(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/fe|0)|0},he=Math.log,fe=Math.LN2;var ge=256,ye=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=be(r):0!==(o&=s)?i=be(o):n||0!==(n=s&~e)&&(i=be(n)):0!==(s=r&~a)?i=be(s):0!==o?i=be(o):n||0!==(n=r&~e)&&(i=be(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=ye;return 0===(62914560&(ye<<=1))&&(ye=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ee(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Ce(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Pe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function ze(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:cm(e.type)}var Ae=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ae,De="__reactProps$"+Ae,Me="__reactContainer$"+Ae,Le="__reactEvents$"+Ae,Oe="__reactListeners$"+Ae,_e="__reactHandles$"+Ae,Ne="__reactResources$"+Ae,Fe="__reactMarker$"+Ae;function Ie(e){delete e[Re],delete e[De],delete e[Le],delete e[Oe],delete e[_e]}function Ve(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Me]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=vd(e);null!==e;){if(n=e[Re])return n;e=vd(e)}return t}n=(e=n).parentNode}return null}function Ue(e){if(e=e[Re]||e[Me]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Be(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function He(e){var t=e[Ne];return t||(t=e[Ne]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Fe]=!0}var We=new Set,Ye={};function Ke(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ye[e]=t,e=0;e<t.length;e++)We.add(t[e])}var Xe,Qe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(i=t,X.call(et,i)||!X.call(Ze,i)&&(Je.test(i)?et[i]=!0:(Ze[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Xe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Qe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Xe+e+Qe}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function ft(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?bt(e,o,ct(t)):null!=n?bt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function yt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function bt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(D(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $t(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&$t(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&$t(e,a,t[a])}function jt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tt(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zt=null;function At(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Dt=null;function Mt(e){var t=Ue(e);if(t&&(e=t.stateNode)){var n=e[De]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[De]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Ot(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Rt||null!==Dt)&&(Vc(),Rt&&(t=Rt,e=Dt,Dt=Rt=null,Mt(t),e)))for(t=0;t<e.length;t++)Mt(e[t])}}function _t(e,t){var n=e.stateNode;if(null===n)return null;var r=n[De]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ft=!1;if(Nt)try{var It={};Object.defineProperty(It,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch(Dm){Ft=!1}var Vt=null,Ut=null,Bt=null;function Ht(){if(Bt)return Bt;var e,t,n=Ut,r=n.length,i="value"in Vt?Vt.value:Vt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Bt=i.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function Yt(){return!1}function Kt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Wt:Yt,this.isPropagationStopped=Yt,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Gt,Xt,Qt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Jt),en=m({},Jt,{view:0,detail:0}),tn=Kt(en),nn=m({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&"mousemove"===e.type?(Gt=e.screenX-Qt.screenX,Xt=e.screenY-Qt.screenY):Xt=Gt=0,Qt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Xt}}),rn=Kt(nn),an=Kt(m({},nn,{dataTransfer:0})),on=Kt(m({},en,{relatedTarget:0})),sn=Kt(m({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Kt(m({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(m({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function hn(){return pn}var fn=Kt(m({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Kt(m({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),yn=Kt(m({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),bn=Kt(m({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vn=Kt(m({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(m({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Nt&&"CompositionEvent"in window,kn=null;Nt&&"documentMode"in document&&(kn=document.documentMode);var $n=Nt&&"TextEvent"in window&&!kn,En=Nt&&(!Sn||kn&&8<kn&&11>=kn),jn=String.fromCharCode(32),Cn=!1;function Pn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var zn=!1;var An={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!An[e.type]:"textarea"===t}function Dn(e,t,n,r){Rt?Dt?Dt.push(r):Dt=[r]:Rt=r,0<(t=Hu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Ln=null;function On(e){Ou(e,0)}function _n(e){if(mt(Be(e)))return e}function Nn(e,t){if("change"===e)return t}var Fn=!1;if(Nt){var In;if(Nt){var Vn="oninput"in document;if(!Vn){var Un=document.createElement("div");Un.setAttribute("oninput","return;"),Vn="function"===typeof Un.oninput}In=Vn}else In=!1;Fn=In&&(!document.documentMode||9<document.documentMode)}function Bn(){Mn&&(Mn.detachEvent("onpropertychange",Hn),Ln=Mn=null)}function Hn(e){if("value"===e.propertyName&&_n(Ln)){var t=[];Dn(t,Ln,e,At(e)),Ot(On,t)}}function qn(e,t,n){"focusin"===e?(Bn(),Ln=n,(Mn=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Bn()}function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return _n(Ln)}function Yn(e,t){if("click"===e)return _n(t)}function Kn(e,t){if("input"===e||"change"===e)return _n(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Xn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!X.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Qn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Xn(ar,r)||(ar=r,0<(r=Hu(ir,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function mr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var pr=mr("animationend"),hr=mr("animationiteration"),fr=mr("animationstart"),gr=mr("transitionrun"),yr=mr("transitionstart"),br=mr("transitioncancel"),vr=mr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){xr.set(e,t),Ke(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function $r(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Er=[],jr=0,Cr=0;function Pr(){for(var e=jr,t=Cr=jr=0;t<e;){var n=Er[t];Er[t++]=null;var r=Er[t];Er[t++]=null;var i=Er[t];Er[t++]=null;var a=Er[t];if(Er[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Rr(n,i,a)}}function Tr(e,t,n,r){Er[jr++]=e,Er[jr++]=t,Er[jr++]=n,Er[jr++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function zr(e,t,n,r){return Tr(e,t,n,r),Dr(e)}function Ar(e,t){return Tr(e,null,null,t),Dr(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-pe(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Dr(e){if(50<Rc)throw Rc=0,Dc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Mr={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Or(e,t,n,r){return new Lr(e,t,n,r)}function _r(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nr(e,t){var n=e.alternate;return null===n?((n=Or(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ir(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)_r(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,U.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case C:return(e=Or(31,n,t,i)).elementType=C,e.lanes=a,e;case g:return Vr(n.children,i,a,t);case y:s=8,i|=24;break;case b:return(e=Or(12,n,t,2|i)).elementType=b,e.lanes=a,e;case k:return(e=Or(13,n,t,i)).elementType=k,e.lanes=a,e;case $:return(e=Or(19,n,t,i)).elementType=$,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:case w:s=10;break e;case x:s=9;break e;case S:s=11;break e;case E:s=14;break e;case j:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Or(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Vr(e,t,n,r){return(e=Or(7,e,r,t)).lanes=n,e}function Ur(e,t,n){return(e=Or(6,e,null,t)).lanes=n,e}function Br(e,t,n){return(t=Or(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hr=[],qr=0,Wr=null,Yr=0,Kr=[],Gr=0,Xr=null,Qr=1,Jr="";function Zr(e,t){Hr[qr++]=Yr,Hr[qr++]=Wr,Wr=e,Yr=t}function ei(e,t,n){Kr[Gr++]=Qr,Kr[Gr++]=Jr,Kr[Gr++]=Xr,Xr=e;var r=Qr;e=Jr;var i=32-pe(r)-1;r&=~(1<<i),n+=1;var a=32-pe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qr=1<<32-pe(t)+i|n<<i|r,Jr=a+e}else Qr=1<<a|n<<i|r,Jr=e}function ti(e){null!==e.return&&(Zr(e,1),ei(e,1,0))}function ni(e){for(;e===Wr;)Wr=Hr[--qr],Hr[qr]=null,Yr=Hr[--qr],Hr[qr]=null;for(;e===Xr;)Xr=Kr[--Gr],Kr[Gr]=null,Jr=Kr[--Gr],Kr[Gr]=null,Qr=Kr[--Gr],Kr[Gr]=null}var ri=null,ii=null,ai=!1,oi=null,si=!1,li=Error(o(519));function ci(e){throw fi($r(Error(o(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Re]=e,t[De]=r,n){case"dialog":_u("cancel",t),_u("close",t);break;case"iframe":case"object":case"embed":_u("load",t);break;case"video":case"audio":for(n=0;n<Mu.length;n++)_u(Mu[n],t);break;case"source":_u("error",t);break;case"img":case"image":case"link":_u("error",t),_u("load",t);break;case"details":_u("toggle",t);break;case"input":_u("invalid",t),yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":_u("invalid",t);break;case"textarea":_u("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Xu(t.textContent,n)?(null!=r.popover&&(_u("beforetoggle",t),_u("toggle",t)),null!=r.onScroll&&_u("scroll",t),null!=r.onScrollEnd&&_u("scrollend",t),null!=r.onClick&&(t.onclick=Qu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function mi(e){if(e!==ri)return!1;if(!ai)return di(e),ai=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=yd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,pd(e.type)?(e=bd,bd=null,ii=e):ii=n):ii=ri?yd(e.stateNode.nextSibling):null;return!0}function pi(){ii=ri=null,ai=!1}function hi(){var e=oi;return null!==e&&(null===vc?vc=e:vc.push.apply(vc,e),oi=null),e}function fi(e){null===oi?oi=[e]:oi.push(e)}var gi=F(null),yi=null,bi=null;function vi(e,t,n){V(gi,t._currentValue),t._currentValue=n}function xi(e){e._currentValue=gi.current,I(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wi(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function ki(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Gn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===q.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}i=i.return}null!==e&&Si(t,e,n,r),t.flags|=262144}function $i(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ei(e){yi=e,bi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function ji(e){return Pi(yi,e)}function Ci(e,t){return null===yi&&Ei(e),Pi(e,t)}function Pi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===bi){if(null===e)throw Error(o(308));bi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bi=bi.next=t;return n}var Ti="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},zi=r.unstable_scheduleCallback,Ai=r.unstable_NormalPriority,Ri={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Di(){return{controller:new Ti,data:new Map,refCount:0}}function Mi(e){e.refCount--,0===e.refCount&&zi(Ai,(function(){e.controller.abort()}))}var Li=null,Oi=0,_i=0,Ni=null;function Fi(){if(0===--Oi&&null!==Li){null!==Ni&&(Ni.status="fulfilled");var e=Li;Li=null,_i=0,Ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ii=M.S;M.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Li){var n=Li=[];Oi=0,_i=Tu(),Ni={status:"pending",value:void 0,then:function(e){n.push(e)}}}Oi++,t.then(Fi,Fi)}(0,t),null!==Ii&&Ii(e,t)};var Vi=F(null);function Ui(){var e=Vi.current;return null!==e?e:rc.pooledCache}function Bi(e,t){V(Vi,null===t?Vi.current:t.pool)}function Hi(){var e=Ui();return null===e?null:{parent:Ri._currentValue,pool:e}}var qi=Error(o(460)),Wi=Error(o(474)),Yi=Error(o(542)),Ki={then:function(){}};function Gi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Xi(){}function Qi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Xi,Xi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Ji=t,qi}}var Ji=null;function Zi(){if(null===Ji)throw Error(o(459));var e=Ji;return Ji=null,e}function ea(e){if(e===qi||e===Yi)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Dr(e),Rr(e,null,n),t}return Tr(e,r,t,n),Dr(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ce(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Ni)throw Ni}}function ua(e,t,n,r){la=!1;var i=e.updateQueue;ta=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var p=-536870913&s.lane,h=p!==s.lane;if(h?(ac&p)===p:(r&p)===p){0!==p&&p===_i&&(la=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var f=e,g=s;p=t;var y=n;switch(g.tag){case 1:if("function"===typeof(f=g.payload)){d=f.call(y,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=g.payload)?f.call(y,d,p):f)||void 0===p)break e;d=m({},d,p);break e;case 2:ta=!0}}null!==(p=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=i.callbacks)?i.callbacks=[p]:h.push(p))}else h={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),pc|=o,e.lanes=o,e.memoizedState=d}}function da(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function ma(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)da(n[e],t)}var pa=F(null),ha=F(0);function fa(e,t){V(ha,e=dc),V(pa,t),dc=e|t.baseLanes}function ga(){V(ha,dc),V(pa,pa.current)}function ya(){dc=ha.current,I(pa),I(ha)}var ba=0,va=null,xa=null,wa=null,Sa=!1,ka=!1,$a=!1,Ea=0,ja=0,Ca=null,Pa=0;function Ta(){throw Error(o(321))}function za(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,a){return ba=a,va=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=null===e||null===e.memoizedState?Wo:Yo,$a=!1,a=n(r,i),$a=!1,ka&&(a=Da(t,n,r,i)),Ra(e),a}function Ra(e){M.H=qo;var t=null!==xa&&null!==xa.next;if(ba=0,wa=xa=va=null,Sa=!1,ja=0,Ca=null,t)throw Error(o(300));null===e||Cs||null!==(e=e.dependencies)&&$i(e)&&(Cs=!0)}function Da(e,t,n,r){va=e;var i=0;do{if(ka&&(Ca=null),ja=0,ka=!1,25<=i)throw Error(o(301));if(i+=1,wa=xa=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}M.H=Ko,a=t(n,r)}while(ka);return a}function Ma(){var e=M.H,t=e.useState()[0];return t="function"===typeof t.then?Ia(t):t,e=e.useState()[0],(null!==xa?xa.memoizedState:null)!==e&&(va.flags|=1024),t}function La(){var e=0!==Ea;return Ea=0,e}function Oa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _a(e){if(Sa){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Sa=!1}ba=0,wa=xa=va=null,ka=!1,ja=Ea=0,Ca=null}function Na(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?va.memoizedState=wa=e:wa=wa.next=e,wa}function Fa(){if(null===xa){var e=va.alternate;e=null!==e?e.memoizedState:null}else e=xa.next;var t=null===wa?va.memoizedState:wa.next;if(null!==t)wa=t,xa=e;else{if(null===e){if(null===va.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(xa=e).memoizedState,baseState:xa.baseState,baseQueue:xa.baseQueue,queue:xa.queue,next:null},null===wa?va.memoizedState=wa=e:wa=wa.next=e}return wa}function Ia(e){var t=ja;return ja+=1,null===Ca&&(Ca=[]),e=Qi(Ca,e,t),t=va,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,M.H=null===t||null===t.memoizedState?Wo:Yo),e}function Va(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ia(e);if(e.$$typeof===w)return ji(e)}throw Error(o(438,String(e)))}function Ua(e){var t=null,n=va.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=va.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},va.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=P;return t.index++,n}function Ba(e,t){return"function"===typeof t?t(e):t}function Ha(e){return qa(Fa(),xa,e)}function qa(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var m=-536870913&u.lane;if(m!==u.lane?(ac&m)===m:(ba&m)===m){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),m===_i&&(d=!0);else{if((ba&p)===p){u=u.next,p===_i&&(d=!0);continue}m={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=m,s=a):c=c.next=m,va.lanes|=p,pc|=p}m=u.action,$a&&n(a,m),a=u.hasEagerState?u.eagerState:n(a,m)}else p={lane:m,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,va.lanes|=m,pc|=m;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Gn(a,e.memoizedState)&&(Cs=!0,d&&null!==(n=Ni)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wa(e){var t=Fa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Gn(a,t.memoizedState)||(Cs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ya(e,t,n){var r=va,i=Fa(),a=ai;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Gn((xa||i).memoizedState,n);if(s&&(i.memoizedState=n,Cs=!0),i=i.queue,yo(2048,8,Xa.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(r.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,i,n,t),null),null===rc)throw Error(o(349));a||0!==(124&ba)||Ka(r,t,n)}return n}function Ka(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=va.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},va.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Qa(t)&&Ja(e)}function Xa(e,t,n){return n((function(){Qa(t)&&Ja(e)}))}function Qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function Ja(e){var t=Ar(e,2);null!==t&&Oc(t,e,2)}function Za(e){var t=Na();if("function"===typeof e){var n=e;if(e=n(),$a){me(!0);try{n()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,qa(e,xa,"function"===typeof r?r:Ba)}function to(e,t,n,r,i){if(Uo(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==M.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),l=M.S;null!==l&&l(o,s),ro(e,t,s)}catch(c){ao(e,t,c)}finally{M.T=a}}else try{ro(e,t,a=n(i,r))}catch(u){ao(e,t,u)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){io(e,t,n)}),(function(n){return ao(e,t,n)})):io(e,t,n)}function io(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ai){var n=rc.formState;if(null!==n){e:{var r=va;if(ai){if(ii){t:{for(var i=ii,a=si;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=yd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ii=yd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Na()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=r,n=Fo.bind(null,va,r),r.dispatch=n,r=Za(!1),a=Vo.bind(null,va,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Na()).queue=i,n=to.bind(null,va,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Fa(),xa,e)}function uo(e,t,n){if(t=qa(e,t,so)[0],e=Ha(Ba)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Ia(t)}catch(o){if(o===qi)throw Yi;throw o}else r=t;var i=(t=Fa()).queue,a=i.dispatch;return n!==t.memoizedState&&(va.flags|=2048,ho(9,{destroy:void 0,resource:void 0},mo.bind(null,i,n),null)),[r,a,e]}function mo(e,t){e.action=t}function po(e){var t=Fa(),n=xa;if(null!==n)return uo(t,n,e);Fa(),t=t.memoizedState;var r=(n=Fa()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ho(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=va.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},va.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function fo(){return Fa().memoizedState}function go(e,t,n,r){var i=Na();r=void 0===r?null:r,va.flags|=e,i.memoizedState=ho(1|t,{destroy:void 0,resource:void 0},n,r)}function yo(e,t,n,r){var i=Fa();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==xa&&null!==r&&za(r,xa.memoizedState.deps)?i.memoizedState=ho(t,a,n,r):(va.flags|=e,i.memoizedState=ho(1|t,a,n,r))}function bo(e,t){go(8390656,8,e,t)}function vo(e,t){yo(2048,8,e,t)}function xo(e,t){return yo(4,2,e,t)}function wo(e,t){return yo(4,4,e,t)}function So(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,yo(4,4,So.bind(null,t,e),n)}function $o(){}function Eo(e,t){var n=Fa();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jo(e,t){var n=Fa();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&za(t,r[1]))return r[0];if(r=e(),$a){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[r,t],r}function Co(e,t,n){return void 0===n||0!==(1073741824&ba)?e.memoizedState=t:(e.memoizedState=n,e=Lc(),va.lanes|=e,pc|=e,n)}function Po(e,t,n,r){return Gn(n,t)?n:null!==pa.current?(e=Co(e,n,r),Gn(e,t)||(Cs=!0),e):0===(42&ba)?(Cs=!0,e.memoizedState=n):(e=Lc(),va.lanes|=e,pc|=e,t)}function To(e,t,n,r,i){var a=L.p;L.p=0!==a&&8>a?a:8;var o=M.T,s={};M.T=s,Vo(e,!1,t,n);try{var l=i(),c=M.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Io(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),Mc());else Io(e,t,r,Mc())}catch(u){Io(e,t,{then:function(){},status:"rejected",reason:u},Mc())}finally{L.p=a,M.T=o}}function zo(){}function Ao(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=Ro(e).queue;To(e,i,t,O,null===n?zo:function(){return Do(e),n(r)})}function Ro(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Do(e){Io(e,Ro(e).next.queue,{},Mc())}function Mo(){return ji(Kd)}function Lo(){return Fa().memoizedState}function Oo(){return Fa().memoizedState}function _o(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Mc(),r=aa(t,e=ia(n),n);return null!==r&&(Oc(r,t,n),oa(r,t,n)),t={cache:Di()},void(e.payload=t)}t=t.return}}function No(e,t,n){var r=Mc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Uo(e)?Bo(t,n):null!==(n=zr(e,t,n,r))&&(Oc(n,e,r),Ho(n,t,r))}function Fo(e,t,n){Io(e,t,n,Mc())}function Io(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uo(e))Bo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gn(s,o))return Tr(e,t,i,0),null===rc&&Pr(),!1}catch(l){}if(null!==(n=zr(e,t,i,r)))return Oc(n,e,r),Ho(n,t,r),!0}return!1}function Vo(e,t,n,r){if(r={lane:2,revertLane:Tu(),action:r,hasEagerState:!1,eagerState:null,next:null},Uo(e)){if(t)throw Error(o(479))}else null!==(t=zr(e,n,r,2))&&Oc(t,e,2)}function Uo(e){var t=e.alternate;return e===va||null!==t&&t===va}function Bo(e,t){ka=Sa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ho(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ce(e,n)}}var qo={readContext:ji,use:Va,useCallback:Ta,useContext:Ta,useEffect:Ta,useImperativeHandle:Ta,useLayoutEffect:Ta,useInsertionEffect:Ta,useMemo:Ta,useReducer:Ta,useRef:Ta,useState:Ta,useDebugValue:Ta,useDeferredValue:Ta,useTransition:Ta,useSyncExternalStore:Ta,useId:Ta,useHostTransitionStatus:Ta,useFormState:Ta,useActionState:Ta,useOptimistic:Ta,useMemoCache:Ta,useCacheRefresh:Ta},Wo={readContext:ji,use:Va,useCallback:function(e,t){return Na().memoizedState=[e,void 0===t?null:t],e},useContext:ji,useEffect:bo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,So.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Na();t=void 0===t?null:t;var r=e();if($a){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Na();if(void 0!==n){var i=n(t);if($a){me(!0);try{n(t)}finally{me(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=No.bind(null,va,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Na().memoizedState=e},useState:function(e){var t=(e=Za(e)).queue,n=Fo.bind(null,va,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$o,useDeferredValue:function(e,t){return Co(Na(),e,t)},useTransition:function(){var e=Za(!1);return e=To.bind(null,va,e.queue,!0,!1),Na().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=va,i=Na();if(ai){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ac)||Ka(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,bo(Xa.bind(null,r,a,e),[e]),r.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,a,n,t),null),n},useId:function(){var e=Na(),t=rc.identifierPrefix;if(ai){var n=Jr;t="\xab"+t+"R"+(n=(Qr&~(1<<32-pe(Qr)-1)).toString(32)+n),0<(n=Ea++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Pa++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Mo,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Na();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vo.bind(null,va,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ua,useCacheRefresh:function(){return Na().memoizedState=_o.bind(null,va)}},Yo={readContext:ji,use:Va,useCallback:Eo,useContext:ji,useEffect:vo,useImperativeHandle:ko,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:jo,useReducer:Ha,useRef:fo,useState:function(){return Ha(Ba)},useDebugValue:$o,useDeferredValue:function(e,t){return Po(Fa(),xa.memoizedState,e,t)},useTransition:function(){var e=Ha(Ba)[0],t=Fa().memoizedState;return["boolean"===typeof e?e:Ia(e),t]},useSyncExternalStore:Ya,useId:Lo,useHostTransitionStatus:Mo,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Fa(),0,e,t)},useMemoCache:Ua,useCacheRefresh:Oo},Ko={readContext:ji,use:Va,useCallback:Eo,useContext:ji,useEffect:vo,useImperativeHandle:ko,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:jo,useReducer:Wa,useRef:fo,useState:function(){return Wa(Ba)},useDebugValue:$o,useDeferredValue:function(e,t){var n=Fa();return null===xa?Co(n,e,t):Po(n,xa.memoizedState,e,t)},useTransition:function(){var e=Wa(Ba)[0],t=Fa().memoizedState;return["boolean"===typeof e?e:Ia(e),t]},useSyncExternalStore:Ya,useId:Lo,useHostTransitionStatus:Mo,useFormState:po,useActionState:po,useOptimistic:function(e,t){var n=Fa();return null!==xa?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ua,useCacheRefresh:Oo},Go=null,Xo=0;function Qo(e){var t=Xo;return Xo+=1,null===Go&&(Go=[]),Qi(Go,e,t)}function Jo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===p)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Nr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Ur(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===j&&es(a)===t.type)?(Jo(t=i(t,n.props),n),t.return=e,t):(Jo(t=Ir(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Br(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Vr(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Ur(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Jo(n=Ir(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case f:return(t=Br(t,e.mode,n)).return=e,t;case j:return m(e,t=(0,t._init)(t._payload),n)}if(D(t)||z(t))return(t=Vr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,Qo(t),n);if(t.$$typeof===w)return m(e,Ci(e,t),n);Zo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===i?c(e,t,n,r):null;case f:return n.key===i?u(e,t,n,r):null;case j:return p(e,t,n=(i=n._init)(n._payload),r)}if(D(n)||z(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,Qo(n),r);if(n.$$typeof===w)return p(e,t,Ci(e,n),r);Zo(e,n)}return null}function y(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case f:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return y(e,t,n,r=(0,r._init)(r._payload),i)}if(D(r)||z(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return y(e,t,n,Qo(r),i);if(r.$$typeof===w)return y(e,t,n,Ci(t,r),i);Zo(t,r)}return null}function b(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var v=u.key;null!==c;){if(c.key===v){if((v=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===v||"object"===typeof v&&null!==v&&v.$$typeof===j&&es(v)===c.type){n(l,c.sibling),Jo(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Vr(u.props.children,l.mode,d,u.key)).return=l,l=d):(Jo(d=Ir(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case f:e:{for(v=u.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Br(u,l.mode,d)).return=l,l=d}return s(l);case j:return b(l,c,u=(v=u._init)(u._payload),d)}if(D(u))return function(i,o,s,l){for(var c=null,u=null,d=o,h=o=0,f=null;null!==d&&h<s.length;h++){d.index>h?(f=d,d=null):f=d.sibling;var g=p(i,d,s[h],l);if(null===g){null===d&&(d=f);break}e&&d&&null===g.alternate&&t(i,d),o=a(g,o,h),null===u?c=g:u.sibling=g,u=g,d=f}if(h===s.length)return n(i,d),ai&&Zr(i,h),c;if(null===d){for(;h<s.length;h++)null!==(d=m(i,s[h],l))&&(o=a(d,o,h),null===u?c=d:u.sibling=d,u=d);return ai&&Zr(i,h),c}for(d=r(d);h<s.length;h++)null!==(f=y(d,i,h,s[h],l))&&(e&&null!==f.alternate&&d.delete(null===f.key?h:f.key),o=a(f,o,h),null===u?c=f:u.sibling=f,u=f);return e&&d.forEach((function(e){return t(i,e)})),ai&&Zr(i,h),c}(l,c,u,d);if(z(u)){if("function"!==typeof(v=z(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,h=s,f=s=0,g=null,b=l.next();null!==h&&!b.done;f++,b=l.next()){h.index>f?(g=h,h=null):g=h.sibling;var v=p(i,h,b.value,c);if(null===v){null===h&&(h=g);break}e&&h&&null===v.alternate&&t(i,h),s=a(v,s,f),null===d?u=v:d.sibling=v,d=v,h=g}if(b.done)return n(i,h),ai&&Zr(i,f),u;if(null===h){for(;!b.done;f++,b=l.next())null!==(b=m(i,b.value,c))&&(s=a(b,s,f),null===d?u=b:d.sibling=b,d=b);return ai&&Zr(i,f),u}for(h=r(h);!b.done;f++,b=l.next())null!==(b=y(h,i,f,b.value,c))&&(e&&null!==b.alternate&&h.delete(null===b.key?f:b.key),s=a(b,s,f),null===d?u=b:d.sibling=b,d=b);return e&&h.forEach((function(e){return t(i,e)})),ai&&Zr(i,f),u}(l,c,u=v.call(u),d)}if("function"===typeof u.then)return b(l,c,Qo(u),d);if(u.$$typeof===w)return b(l,c,Ci(l,u),d);Zo(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Ur(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Xo=0;var i=b(e,t,n,r);return Go=null,i}catch(o){if(o===qi||o===Yi)throw o;var a=Or(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var ns=ts(!0),rs=ts(!1),is=F(null),as=null;function os(e){var t=e.alternate;V(us,1&us.current),V(is,e),null===as&&(null===t||null!==pa.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(V(us,us.current),V(is,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){V(us,us.current),V(is,is.current)}function cs(e){I(is),as===e&&(as=null),I(us)}var us=F(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ms(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:m({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ps={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Mc(),i=ia(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Mc(),i=ia(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mc(),r=ia(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=aa(e,r,n))&&(Oc(t,e,n),oa(t,e,n))}};function hs(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Xn(n,r)||!Xn(i,a))}function fs(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var ys="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function bs(e){ys(e)}function vs(e){console.error(e)}function xs(e){ys(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function ks(e,t,n){return(n=ia(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function $s(e){return(e=ia(e)).tag=3,e}function Es(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ss(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ss(t,n,r),"function"!==typeof i&&(null===$c?$c=new Set([this]):$c.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var js=Error(o(461)),Cs=!1;function Ps(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function Ts(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ei(t),r=Aa(e,t,n,o,a,i),s=La(),null===e||Cs?(ai&&s&&ti(t),t.flags|=1,Ps(e,t,r,i),t.child):(Oa(e,t,i),Gs(e,t,i))}function zs(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||_r(a)||void 0!==a.defaultProps||null!==n.compare?((e=Ir(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,As(e,t,a,r,i))}if(a=e.child,!Xs(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Xn)(o,r)&&e.ref===t.ref)return Gs(e,t,i)}return t.flags|=1,(e=Nr(a,r)).ref=t.ref,e.return=t,t.child=e}function As(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Xn(a,r)&&e.ref===t.ref){if(Cs=!1,t.pendingProps=r=a,!Xs(e,i))return t.lanes=e.lanes,Gs(e,t,i);0!==(131072&e.flags)&&(Cs=!0)}}return Ls(e,t,n,r,i)}function Rs(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Ds(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ds(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Bi(0,null!==a?a.cachePool:null),null!==a?fa(t,a):ga(),ss(t)}else null!==a?(Bi(0,a.cachePool),fa(t,a),ls(),t.memoizedState=null):(null!==e&&Bi(0,null),ga(),ls());return Ps(e,t,i,n),t.child}function Ds(e,t,n,r){var i=Ui();return i=null===i?null:{parent:Ri._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Bi(0,null),ga(),ss(t),null!==e&&ki(e,t,r,!0),null}function Ms(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ls(e,t,n,r,i){return Ei(t),n=Aa(e,t,n,r,void 0,i),r=La(),null===e||Cs?(ai&&r&&ti(t),t.flags|=1,Ps(e,t,n,i),t.child):(Oa(e,t,i),Gs(e,t,i))}function Os(e,t,n,r,i,a){return Ei(t),t.updateQueue=null,n=Da(t,r,n,i),Ra(e),r=La(),null===e||Cs?(ai&&r&&ti(t),t.flags|=1,Ps(e,t,n,a),t.child):(Oa(e,t,a),Gs(e,t,a))}function _s(e,t,n,r,i){if(Ei(t),null===t.stateNode){var a=Mr,o=n.contextType;"object"===typeof o&&null!==o&&(a=ji(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=ps,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?ji(o):Mr,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(ms(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&ps.enqueueReplaceState(a,a.state,null),ua(t,r,a,i),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,u=n.contextType;o=Mr,"object"===typeof u&&null!==u&&(o=ji(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&fs(t,a,r,o),ta=!1;var m=t.memoizedState;a.state=m,ua(t,r,a,i),ca(),c=t.memoizedState,s||m!==c||ta?("function"===typeof d&&(ms(t,n,d,r),c=t.memoizedState),(l=ta||hs(t,n,l,r,m,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ra(e,t),u=gs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,m=a.context,c=n.contextType,l=Mr,"object"===typeof c&&null!==c&&(l=ji(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||m!==l)&&fs(t,a,r,l),ta=!1,m=t.memoizedState,a.state=m,ua(t,r,a,i),ca();var p=t.memoizedState;o!==d||m!==p||ta||null!==e&&null!==e.dependencies&&$i(e.dependencies)?("function"===typeof s&&(ms(t,n,s,r),p=t.memoizedState),(u=ta||hs(t,n,u,r,m,p,l)||null!==e&&null!==e.dependencies&&$i(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ms(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):Ps(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Gs(e,t,i),e}function Ns(e,t,n,r){return pi(),t.flags|=256,Ps(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Is(e){return{baseLanes:e,cachePool:Hi()}}function Vs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Us(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ai){if(a?os(t):ls(),ai){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=yd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Xr?{id:Qr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=Or(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,a?(ls(),c=Hs({mode:"hidden",children:c},a=t.mode),i=Vr(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(a=t.child).memoizedState=Is(n),a.childLanes=Vs(e,r,n),t.memoizedState=Fs,i):(os(t),Bs(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=qs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=i.fallback,c=t.mode,i=Hs({mode:"visible",children:i.children},c),(a=Vr(a,c,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=Is(n),i.childLanes=Vs(e,r,n),t.memoizedState=Fs,t=a);else if(os(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,fi({value:i,source:null,stack:null}),t=qs(e,t,n)}else if(Cs||ki(e,t,n,!1),r=0!==(n&e.childLanes),Cs||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:Pe(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Ar(e,i),Oc(r,e,i),js;"$?"===c.data||Yc(),t=qs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=yd(c.nextSibling),ri=t,ai=!0,oi=null,si=!1,null!==e&&(Kr[Gr++]=Qr,Kr[Gr++]=Jr,Kr[Gr++]=Xr,Qr=e.id,Jr=e.overflow,Xr=t),(t=Bs(t,i.children)).flags|=4096);return t}return a?(ls(),a=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Nr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?a=Nr(u,a):(a=Vr(a,c,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(c=e.child.memoizedState)?c=Is(n):(null!==(l=c.cachePool)?(u=Ri._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Hi(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Vs(e,r,n),t.memoizedState=Fs,i):(os(t),e=(n=e.child).sibling,(n=Nr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Bs(e,t){return(t=Hs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Hs(e,t){return(e=Or(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function qs(e,t,n){return ns(t,e.child,null,n),(e=Bs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ws(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function Ys(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ks(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ps(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ws(e,n,t);else if(19===e.tag)Ws(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(V(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ys(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ys(t,!0,n,null,a);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ki(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Nr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!$i(e))}function Qs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Cs=!0;else{if(!Xs(e,n)&&0===(128&t.flags))return Cs=!1,function(e,t,n){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),vi(0,Ri,e.memoizedState.cache),pi();break;case 27:case 5:K(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:vi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Us(e,t,n):(os(t),null!==(e=Gs(e,t,n))?e.sibling:null);os(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ki(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return Ks(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n);case 24:vi(0,Ri,e.memoizedState.cache)}return Gs(e,t,n)}(e,t,n);Cs=0!==(131072&e.flags)}else Cs=!1,ai&&0!==(1048576&t.flags)&&ei(t,Yr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===S){t.tag=11,t=Ts(null,t,r,e,n);break e}if(i===E){t.tag=14,t=zs(null,t,r,e,n);break e}}throw t=R(r)||r,Error(o(306,t,""))}_r(r)?(e=gs(r,e),t.tag=1,t=_s(null,t,r,e,n)):(t.tag=0,t=Ls(null,t,r,e,n))}return t;case 0:return Ls(e,t,t.type,t.pendingProps,n);case 1:return _s(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(W(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ra(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,vi(0,Ri,r),r!==a.cache&&Si(t,[Ri],n,!0),ca(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ns(e,t,r,n);break e}if(r!==i){fi(i=$r(Error(o(424)),t)),t=Ns(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=yd(e.firstChild),ri=t,ai=!0,oi=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===i){t=Gs(e,t,n);break e}Ps(e,t,r,n)}t=t.child}return t;case 26:return Ms(e,t),null===e?(n=Pd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ai||(n=t.type,e=t.pendingProps,(r=rd(H.current).createElement(n))[Re]=t,r[De]=e,ed(r,n,e),qe(r),t.stateNode=r):t.memoizedState=Pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&ai&&(r=t.stateNode=xd(t.type,t.pendingProps,H.current),ri=t,si=!0,i=ii,pd(t.type)?(bd=i,ii=yd(r.firstChild)):ii=i),Ps(e,t,t.pendingProps.children,n),Ms(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ai&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Fe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=yd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=yd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),K(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,od(i,a)?r=null:null!==s&&od(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=Aa(e,t,Ma,null,null,n),Kd._currentValue=i),Ms(e,t),Ps(e,t,r,n),t.child;case 6:return null===e&&ai&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=yd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return Us(e,t,n);case 4:return W(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):Ps(e,t,r,n),t.child;case 11:return Ts(e,t,t.type,t.pendingProps,n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,vi(0,t.type,r.value),Ps(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ei(t),r=r(i=ji(i)),t.flags|=1,Ps(e,t,r,n),t.child;case 14:return zs(e,t,t.type,t.pendingProps,n);case 15:return As(e,t,t.type,t.pendingProps,n);case 19:return Ks(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Hs(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Nr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rs(e,t,n);case 24:return Ei(t),r=ji(Ri),null===e?(null===(i=Ui())&&(i=rc,a=Di(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},na(t),vi(0,Ri,i)):(0!==(e.lanes&n)&&(ra(e,t),ua(t,null,null,n),ca()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),vi(0,Ri,r)):(r=a.cache,vi(0,Ri,r),r!==i.cache&&Si(t,[Ri],n,!0))),Ps(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t)){if(null!==(t=is.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Ji=Ki,Wi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,yc|=t)}function tl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xi(Ri),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(mi(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,hi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:G(t),n=H.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=U.current,mi(t)?ui(t):(e=xd(i,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=U.current,mi(t))ui(t);else{switch(i=rd(H.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Re]=t,e[De]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=H.current,mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Xu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[Re]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=mi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Re]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=hi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return Y(),null===e&&Iu(t.stateNode.containerInfo),nl(t),null;case 10:return xi(t.type),nl(t),null;case 19:if(I(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)tl(i,!1);else{if(0!==mc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=ds(e))){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Fr(n,e),n=n.sibling;return V(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>Sc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ai)return nl(t),null}else 2*te()-i.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,V(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),ya(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&I(Vi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xi(Ri),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xi(Ri),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return I(us),null;case 4:return Y(),null;case 10:return xi(t.type),null;case 22:case 23:return cs(t),ya(),null!==e&&I(Vi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xi(Ri),null;default:return null}}function al(e,t){switch(ni(t),t.tag){case 3:xi(Ri),Y();break;case 26:case 27:case 5:G(t);break;case 4:Y();break;case 13:cs(t);break;case 19:I(us);break;case 10:xi(t.type);break;case 22:case 23:cs(t),ya(),null!==e&&I(Vi);break;case 24:xi(Ri)}}function ol(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ma(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){uu(e,t,a)}else n.current=null}function ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function pl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(h in n){var m=n[h];if(n.hasOwnProperty(h)&&null!=m)switch(h){case"checked":case"value":break;case"defaultValue":c=m;default:r.hasOwnProperty(h)||Ju(e,t,h,null,r,m)}}for(var p in r){var h=r[p];if(m=n[p],r.hasOwnProperty(p)&&(null!=h||null!=m))switch(p){case"type":a=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==m&&Ju(e,t,p,h,r,m)}}return void gt(e,s,l,c,u,d,a,i);case"select":for(a in h=s=l=p=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(a)||Ju(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":p=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Ju(e,t,i,a,r,c)}return t=l,n=s,r=h,void(null!=p?vt(e,!!n,p,!1):!!r!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(l in h=p=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":p=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Ju(e,t,s,i,r,a)}return void xt(e,p,h);case"option":for(var f in n)if(p=n[f],n.hasOwnProperty(f)&&null!=p&&!r.hasOwnProperty(f))if("selected"===f)e.selected=!1;else Ju(e,t,f,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Ju(e,t,c,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Ju(e,t,g,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Ju(e,t,u,p,r,h)}return;default:if(jt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&Zu(e,t,y,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Zu(e,t,d,p,r,h);return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!r.hasOwnProperty(b)&&Ju(e,t,b,null,r,p);for(m in r)p=r[m],h=n[m],!r.hasOwnProperty(m)||p===h||null==p&&null==h||Ju(e,t,m,p,r,h)}(r,e.type,n,t),r[De]=t}catch(i){uu(e,e.return,i)}}function hl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function fl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Qu));else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(yl(e,t,n),e=e.sibling;null!==e;)yl(e,t,n),e=e.sibling}function bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[Re]=e,t[De]=n}catch(a){uu(e,e.return,a)}}var vl=!1,xl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function $l(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:_l(e,n),4&r&&ol(5,n);break;case 1:if(_l(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(_l(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ma(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&r&&bl(n);case 26:case 5:_l(e,n),null===t&&4&r&&ml(n),512&r&&ul(n,n.return);break;case 12:_l(e,n);break;case 13:_l(e,n),4&r&&zl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||vl)){t=null!==t&&null!==t.memoizedState||xl,i=vl;var a=xl;vl=r,(xl=t)&&!a?Fl(e,n,0!==(8772&n.subtreeFlags)):_l(e,n),vl=i,xl=a}break;case 30:break;default:_l(e,n)}}function El(e){var t=e.alternate;null!==t&&(e.alternate=null,El(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ie(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jl=null,Cl=!1;function Pl(e,t,n){for(n=n.child;null!==n;)Tl(e,t,n),n=n.sibling}function Tl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(a){}switch(n.tag){case 26:xl||dl(n,t),Pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=jl,i=Cl;pd(n.type)&&(jl=n.stateNode,Cl=!1),Pl(e,t,n),wd(n.stateNode),jl=r,Cl=i;break;case 5:xl||dl(n,t);case 6:if(r=jl,i=Cl,jl=null,Pl(e,t,n),Cl=i,null!==(jl=r))if(Cl)try{(9===jl.nodeType?jl.body:"HTML"===jl.nodeName?jl.ownerDocument.body:jl).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{jl.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==jl&&(Cl?(hd(9===(e=jl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Cm(e)):hd(jl,n.stateNode));break;case 4:r=jl,i=Cl,jl=n.stateNode.containerInfo,Cl=!0,Pl(e,t,n),jl=r,Cl=i;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),Pl(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),Pl(e,t,n);break;case 21:Pl(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,Pl(e,t,n),xl=r;break;default:Pl(e,t,n)}}function zl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Cm(e)}catch(n){uu(t,t.return,n)}}function Al(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=fu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function Rl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(pd(l.type)){jl=l.stateNode,Cl=!1;break e}break;case 5:jl=l.stateNode,Cl=!1;break e;case 3:case 4:jl=l.stateNode.containerInfo,Cl=!0;break e}l=l.return}if(null===jl)throw Error(o(160));Tl(a,s,i),jl=null,Cl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ml(t,e),t=t.sibling}var Dl=null;function Ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rl(t,e),Ll(e),4&r&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:Rl(t,e),Ll(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&vl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Dl;if(Rl(t,e),Ll(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[Fe]||a[Re]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),ed(a,r,n),a[Re]=e,qe(a),r=a;break e;case"link":var s=Fd("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Fd("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Re]=e,qe(a),r=a}e.stateNode=r}else Id(i,e.type,e.stateNode);else e.stateNode=Md(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?Id(i,e.type,e.stateNode):Md(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&pl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rl(t,e),Ll(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&pl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rl(t,e),Ll(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&pl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Rl(t,e),Ll(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Nd=null,i=Dl,Dl=$d(t.containerInfo),Rl(t,e),Dl=i,Ll(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Cm(t.containerInfo)}catch(h){uu(e,e.return,h)}wl&&(wl=!1,Ol(e));break;case 4:r=Dl,Dl=$d(e.stateNode.containerInfo),Rl(t,e),Ll(e),Dl=r;break;case 12:default:Rl(t,e),Ll(e);break;case 13:Rl(t,e),Ll(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Al(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=vl,d=xl;if(vl=u||i,xl=d||c,Rl(t,e),xl=d,vl=u,Ll(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||vl||xl||Nl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var m=c.memoizedProps.style,p=void 0!==m&&null!==m&&m.hasOwnProperty("display")?m.display:null;l.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Al(e,n))));break;case 19:Rl(t,e),Ll(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Al(e,r)));case 30:case 21:}}function Ll(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hl(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;yl(e,fl(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),yl(e,fl(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,fl(e),s);break;default:throw Error(o(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ol(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)$l(e,t.alternate,t),t=t.sibling}function Nl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Nl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Nl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Nl(t);break;case 22:null===t.memoizedState&&Nl(t);break;default:Nl(t)}e=e.sibling}}function Fl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(i,a,n),ol(4,a);break;case 1:if(Fl(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)da(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&o&&ll(a),ul(a,a.return);break;case 27:bl(a);case 26:case 5:Fl(i,a,n),n&&null===r&&4&o&&ml(a),ul(a,a.return);break;case 12:Fl(i,a,n);break;case 13:Fl(i,a,n),n&&4&o&&zl(i,a);break;case 22:null===a.memoizedState&&Fl(i,a,n),ul(a,a.return);break;case 30:break;default:Fl(i,a,n)}t=t.sibling}}function Il(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Mi(n))}function Vl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Mi(e))}function Ul(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Bl(e,t,n,r),t=t.sibling}function Bl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ul(e,t,n,r),2048&i&&ol(9,t);break;case 1:case 13:default:Ul(e,t,n,r);break;case 3:Ul(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Mi(e)));break;case 12:if(2048&i){Ul(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Ul(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?Ul(e,t,n,r):ql(e,t):2&a._visibility?Ul(e,t,n,r):(a._visibility|=2,Hl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&Il(o,t);break;case 24:Ul(e,t,n,r),2048&i&&Vl(t.alternate,t)}}function Hl(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Hl(a,o,s,l,i),ol(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Hl(a,o,s,l,i):ql(a,o):(u._visibility|=2,Hl(a,o,s,l,i)),i&&2048&c&&Il(o.alternate,o);break;case 24:Hl(a,o,s,l,i),i&&2048&c&&Vl(o.alternate,o);break;default:Hl(a,o,s,l,i)}t=t.sibling}}function ql(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:ql(n,r),2048&i&&Il(r.alternate,r);break;case 24:ql(n,r),2048&i&&Vl(r.alternate,r);break;default:ql(n,r)}t=t.sibling}}var Wl=8192;function Yl(e){if(e.subtreeFlags&Wl)for(e=e.child;null!==e;)Kl(e),e=e.sibling}function Kl(e){switch(e.tag){case 26:Yl(e),e.flags&Wl&&null!==e.memoizedState&&function(e,t,n){if(null===Ud)throw Error(o(475));var r=Ud;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=Td(n.href),a=e.querySelector(zd(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Hd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void qe(a);a=e.ownerDocument||e,n=Ad(n),(i=Sd.get(i))&&Od(n,i),qe(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Hd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Dl,e.memoizedState,e.memoizedProps);break;case 5:default:Yl(e);break;case 3:case 4:var t=Dl;Dl=$d(e.stateNode.containerInfo),Yl(e),Dl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Wl,Wl=16777216,Yl(e),Wl=t):Yl(e))}}function Gl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Xl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Gl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ql(e),e=e.sibling}function Ql(e){switch(e.tag){case 0:case 11:case 15:Xl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Xl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Xl(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Gl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Mi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var i=(r=kl).sibling,a=r.return;if(El(r),r===n){kl=null;break e}if(null!==i){i.return=a,kl=i;break e}kl=a}}}var ec={getCacheForType:function(e){var t=ji(Ri),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,mc=0,pc=0,hc=0,fc=0,gc=0,yc=0,bc=null,vc=null,xc=!1,wc=0,Sc=1/0,kc=null,$c=null,Ec=0,jc=null,Cc=null,Pc=0,Tc=0,zc=null,Ac=null,Rc=0,Dc=null;function Mc(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==M.T){return 0!==_i?_i:Tu()}return ze()}function Lc(){0===gc&&(gc=0===(536870912&ac)||ai?Se():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function Oc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Bc(e,0),Ic(e,ac,gc,!1)),Ee(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===mc&&Ic(e,ac,gc,!1)),Su(e))}function _c(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=qc(),i=Wc();rc!==e||ac!==t?(kc=null,Sc=te()+500,Bc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==oc&&null!==ic){t=ic;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Zc(e,t,a,1);break;case 2:case 9:if(Gi(a)){oc=0,sc=null,Jc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),Su(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Gi(a)?(oc=0,sc=null,Jc(t)):(oc=0,sc=null,Zc(e,t,a,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Vd(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}oc=0,sc=null,Zc(e,t,a,5);break;case 6:oc=0,sc=null,Zc(e,t,a,6);break;case 8:Uc(),mc=6;break e;default:throw Error(o(462))}}Xc();break}catch(d){Hc(e,d)}return bi=yi=null,M.H=r,M.A=i,nc=n,null!==ic?0:(rc=null,ac=0,Pr(),mc)}(e,t):Kc(e,t,!0),a=r;;){if(0===i){cc&&!r&&Ic(e,t,0,!1);break}if(n=e.current.alternate,!a||Fc(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=bc;var c=l.current.memoizedState.isDehydrated;if(c&&(Bc(l,s).flags|=256),2!==(s=Kc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=a,hc|=a,i=4;break e}a=vc,vc=i,null!==a&&(null===vc?vc=a:vc.push.apply(vc,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){Bc(e,0),Ic(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Ic(r,t,gc,!lc);break e;case 2:vc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if(Ic(r,t,gc,!lc),0!==ve(r,0,!0))break e;r.timeoutHandle=ld(Nc.bind(null,r,n,vc,kc,xc,t,gc,hc,yc,lc,a,2,-0,0),i)}else Nc(r,n,vc,kc,xc,t,gc,hc,yc,lc,a,0,-0,0)}break}i=Kc(e,t,!1),a=!1}Su(e)}function Nc(e,t,n,r,i,a,s,l,c,u,d,m,p,h){if(e.timeoutHandle=-1,(8192&(m=t.subtreeFlags)||16785408===(16785408&m))&&(Ud={stylesheets:null,count:0,unsuspend:Bd},Kl(t),null!==(m=function(){if(null===Ud)throw Error(o(475));var e=Ud;return e.stylesheets&&0===e.count&&Wd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Wd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=m(nu.bind(null,e,t,a,n,r,i,s,l,c,d,1,p,h)),void Ic(e,a,s,!u);nu(e,t,a,n,r,i,s,l,c)}function Fc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ic(e,t,n,r){t&=~fc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-pe(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&je(e,n,t)}function Vc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Uc(){if(null!==ic){if(0===oc)var e=ic.return;else bi=yi=null,_a(e=ic),Go=null,Xo=0,e=ic;for(;null!==e;)al(e.alternate,e),e=e.return;ic=null}}function Bc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc(),rc=e,ic=n=Nr(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,yc=gc=fc=hc=pc=mc=0,vc=bc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-pe(r),a=1<<i;t|=e[i],r&=~a}return dc=t,Pr(),n}function Hc(e,t){va=null,M.H=qo,t===qi||t===Yi?(t=Zi(),oc=3):t===Wi?(t=Zi(),oc=4):oc=t===js?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(mc=1,ws(e,$r(t,e.current)))}function qc(){var e=M.H;return M.H=qo,null===e?qo:e}function Wc(){var e=M.A;return M.A=ec,e}function Yc(){mc=4,lc||(4194048&ac)!==ac&&null!==is.current||(cc=!0),0===(134217727&pc)&&0===(134217727&hc)||null===rc||Ic(rc,ac,gc,!1)}function Kc(e,t,n){var r=nc;nc|=2;var i=qc(),a=Wc();rc===e&&ac===t||(kc=null,Bc(e,t)),t=!1;var o=mc;e:for(;;)try{if(0!==oc&&null!==ic){var s=ic,l=sc;switch(oc){case 8:Uc(),o=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=oc;if(oc=0,sc=null,Zc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Zc(e,s,l,c)}}Gc(),o=mc;break}catch(u){Hc(e,u)}return t&&e.shellSuspendCounter++,bi=yi=null,nc=r,M.H=i,M.A=a,null===ic&&(rc=null,ac=0,Pr()),o}function Gc(){for(;null!==ic;)Qc(ic)}function Xc(){for(;null!==ic&&!Z();)Qc(ic)}function Qc(e){var t=Qs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Os(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Os(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:_a(t);default:al(n,t),t=Qs(n,t=ic=Fr(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Zc(e,t,n,r){bi=yi=null,_a(t),Go=null,Xo=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ki(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===as?Yc():null===n.alternate&&0===mc&&(mc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ki?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===Ki?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(o(435,n.tag))}return du(e,r,i),Yc(),!1}if(ai)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&fi($r(e=Error(o(422),{cause:r}),n))):(r!==li&&fi($r(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=$r(r,n),sa(e,i=ks(e.stateNode,r,i)),4!==mc&&(mc=2)),!1;var a=Error(o(520),{cause:r});if(a=$r(a,n),null===bc?bc=[a]:bc.push(a),4!==mc&&(mc=2),null===t)return!0;r=$r(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,sa(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===$c||!$c.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Es(i=$s(i),e,n,r),sa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ac))return mc=1,ws(e,$r(n,e.current)),void(ic=null)}catch(a){if(null!==i)throw ic=i,a;return mc=1,ws(e,$r(n,e.current)),void(ic=null)}32768&t.flags?(ai||1===r?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===mc&&(mc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);mc=6,ic=null}function nu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Ec);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-pe(n),d=1<<u;s[u]=0,l[u]=-1;var m=c[u];if(null!==m)for(c[u]=null,u=0;u<m.length;u++){var p=m[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&je(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Cr,s,l,c),e===rc&&(ic=rc=null,ac=0),Cc=t,jc=e,Pc=n,Tc=a,zc=i,Ac=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,Q(ae,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=M.T,M.T=null,i=L.p,L.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nm,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,m=e,p=null;t:for(;;){for(var h;m!==n||0!==i&&3!==m.nodeType||(l=s+i),m!==a||0!==r&&3!==m.nodeType||(c=s+r),3===m.nodeType&&(s+=m.nodeValue.length),null!==(h=m.firstChild);)p=m,m=h;for(;;){if(m===e)break t;if(p===n&&++u===i&&(l=s),p===a&&++d===r&&(c=s),null!==(h=m.nextSibling))break;p=(m=p).parentNode}m=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nm=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(a=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var f=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(f,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){uu(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))fd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,L.p=i,M.T=r}}Ec=1,ru(),iu(),au()}}function ru(){if(1===Ec){Ec=0;var e=jc,t=Cc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=M.T,M.T=null;var r=L.p;L.p=2;var i=nc;nc|=4;try{Ml(t,e);var a=nd,o=er(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,m=d&&d.defaultView||window;if(m.getSelection){var p=m.getSelection(),h=s.textContent.length,f=Math.min(l.start,h),g=void 0===l.end?f:Math.min(l.end,h);!p.extend&&f>g&&(o=g,g=f,f=o);var y=Jn(s,f),b=Jn(s,g);if(y&&b&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var v=d.createRange();v.setStart(y.node,y.offset),p.removeAllRanges(),f>g?(p.addRange(v),p.extend(b.node,b.offset)):(v.setEnd(b.node,b.offset),p.addRange(v))}}}}for(d=[],p=s;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nm=!!td,nd=td=null}finally{nc=i,L.p=r,M.T=n}}e.current=t,Ec=2}}function iu(){if(2===Ec){Ec=0;var e=jc,t=Cc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=M.T,M.T=null;var r=L.p;L.p=2;var i=nc;nc|=4;try{$l(e,t.alternate,t)}finally{nc=i,L.p=r,M.T=n}}Ec=3}}function au(){if(4===Ec||3===Ec){Ec=0,ee();var e=jc,t=Cc,n=Pc,r=Ac;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ec=5:(Ec=0,Cc=jc=null,ou(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&($c=null),Te(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=M.T,i=L.p,L.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,L.p=i}}0!==(3&Pc)&&su(),Su(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Dc?Rc++:(Rc=0,Dc=e):Rc=0,ku(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Mi(t)))}function su(e){return ru(),iu(),au(),lu()}function lu(){if(5!==Ec)return!1;var e=jc,t=Tc;Tc=0;var n=Te(Pc),r=M.T,i=L.p;try{L.p=32>n?32:n,M.T=null,n=zc,zc=null;var a=jc,s=Pc;if(Ec=0,Cc=jc=null,Pc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,Ql(a.current),Bl(a,a.current,s,n),nc=l,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,a)}catch(c){}return!0}finally{L.p=i,M.T=r,ou(e,t)}}function cu(e,t,n){t=$r(n,t),null!==(e=aa(e,t=ks(e.stateNode,t,2),2))&&(Ee(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===$c||!$c.has(r))){e=$r(n,e),null!==(r=aa(t,n=$s(2),2))&&(Es(n,r,t,e),Ee(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=mu.bind(null,e,t,n),t.then(e,e))}function mu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ac&n)===n&&(4===mc||3===mc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&Bc(e,0):fc|=n,yc===ac&&(yc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=Ar(e,t))&&(Ee(e,t),Su(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pu(e,n)}function fu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),pu(e,n)}var gu=null,yu=null,bu=!1,vu=!1,xu=!1,wu=0;function Su(e){e!==yu&&null===e.next&&(null===yu?gu=yu=e:yu=yu.next=e),vu=!0,bu||(bu=!0,dd((function(){0!==(6&nc)?Q(re,$u):Eu()})))}function ku(e,t){if(!xu&&vu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-pe(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Pu(r,a))}else a=ac,0===(3&(a=ve(r,r===rc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,a)||(n=!0,Pu(r,a));r=r.next}}while(n);xu=!1}}function $u(){Eu()}function Eu(){vu=bu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var i=r.next,a=ju(r,t);0===a?(r.next=null,null===n?gu=i:n.next=i,null===i&&(yu=n)):(n=r,(0!==e||0!==(3&a))&&(vu=!0)),r=i}ku(e,!1)}function ju(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-pe(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=ve(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Te(n)){case 2:case 8:n=ie;break;case 32:default:n=ae;break;case 268435456:n=se}return r=Cu.bind(null,e),n=Q(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Cu(e,t){if(0!==Ec&&5!==Ec)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ac;return 0===(r=ve(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(_c(e,r,t),ju(e,te()),null!=e.callbackNode&&e.callbackNode===n?Cu.bind(null,e):null)}function Pu(e,t){if(su())return null;_c(e,t,!0)}function Tu(){return 0===wu&&(wu=Se()),wu}function zu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Tt(""+e)}function Au(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ru=0;Ru<wr.length;Ru++){var Du=wr[Ru];Sr(Du.toLowerCase(),"on"+(Du[0].toUpperCase()+Du.slice(1)))}Sr(pr,"onAnimationEnd"),Sr(hr,"onAnimationIteration"),Sr(fr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(yr,"onTransitionStart"),Sr(br,"onTransitionCancel"),Sr(vr,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mu));function Ou(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){ys(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){ys(u)}i.currentTarget=null,a=l}}}}function _u(e,t){var n=t[Le];void 0===n&&(n=t[Le]=new Set);var r=e+"__bubble";n.has(r)||(Vu(t,e,2,!1),n.add(r))}function Nu(e,t,n){var r=0;t&&(r|=4),Vu(n,e,r,t)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function Iu(e){if(!e[Fu]){e[Fu]=!0,We.forEach((function(t){"selectionchange"!==t&&(Lu.has(t)||Nu(t,!1,e),Nu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fu]||(t[Fu]=!0,Nu("selectionchange",!1,t))}}function Vu(e,t,n,r){switch(cm(t)){case 2:var i=rm;break;case 8:i=im;break;default:i=am}n=i.bind(null,t,n,e),i=void 0,!Ft||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Uu(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Ve(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}Ot((function(){var r=a,i=At(n),o=[];e:{var s=xr.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=fn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=yn;break;case pr:case hr:case fr:c=sn;break;case vr:c=bn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=vn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),m=!d&&("scroll"===e||"scrollend"===e),p=d?null!==s?s+"Capture":null:s;d=[];for(var h,f=r;null!==f;){var g=f;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=_t(f,p))&&d.push(Bu(f,g,h)),m)break;f=f.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===zt||!(u=n.relatedTarget||n.fromElement)||!Ve(u)&&!u[Me])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ve(u):null)&&(m=l(u),d=u.tag,u!==m||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",p="onPointerEnter",f="pointer"),m=null==c?s:Be(c),h=null==u?s:Be(u),(s=new d(g,f+"leave",c,n,i)).target=m,s.relatedTarget=h,g=null,Ve(i)===r&&((d=new d(p,f+"enter",u,n,i)).target=h,d.relatedTarget=m,g=d),m=g,c&&u)e:{for(p=u,f=0,h=d=c;h;h=qu(h))f++;for(h=0,g=p;g;g=qu(g))h++;for(;0<f-h;)d=qu(d),f--;for(;0<h-f;)p=qu(p),h--;for(;f--;){if(d===p||null!==p&&d===p.alternate)break e;d=qu(d),p=qu(p)}d=null}else d=null;null!==c&&Wu(o,s,c,d,!1),null!==u&&null!==m&&Wu(o,m,u,d,!0)}if("select"===(c=(s=r?Be(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var y=Nn;else if(Rn(s))if(Fn)y=Kn;else{y=Wn;var b=qn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&jt(r.elementType)&&(y=Nn):y=Yn;switch(y&&(y=y(e,r))?Dn(o,y,n,i):(b&&b(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&bt(s,"number",s.value)),b=r?Be(r):window,e){case"focusin":(Rn(b)||"true"===b.contentEditable)&&(rr=b,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var v;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else zn?Pn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(En&&"ko"!==n.locale&&(zn||"onCompositionStart"!==x?"onCompositionEnd"===x&&zn&&(v=Ht()):(Ut="value"in(Vt=i)?Vt.value:Vt.textContent,zn=!0)),0<(b=Hu(r,x)).length&&(x=new cn(x,e,null,n,i),o.push({event:x,listeners:b}),v?x.data=v:null!==(v=Tn(n))&&(x.data=v))),(v=$n?function(e,t){switch(e){case"compositionend":return Tn(t);case"keypress":return 32!==t.which?null:(Cn=!0,jn);case"textInput":return(e=t.data)===jn&&Cn?null:e;default:return null}}(e,n):function(e,t){if(zn)return"compositionend"===e||!Sn&&Pn(e,t)?(e=Ht(),Bt=Ut=Vt=null,zn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Hu(r,"onBeforeInput")).length&&(b=new cn("onBeforeInput","beforeinput",null,n,i),o.push({event:b,listeners:x}),b.data=v)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=zu((i[De]||null).action),o=r.submitter;o&&null!==(t=(t=o[De]||null)?zu(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Zt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=o?Au(i,o):new FormData(i);Ao(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Au(i,o):new FormData(i),Ao(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Ou(o,t)}))}function Bu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=_t(e,n))&&r.unshift(Bu(e,i,a)),null!=(i=_t(e,t))&&r.push(Bu(e,i,a))),3===e.tag)return r;e=e.return}return[]}function qu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Wu(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=_t(n,a))&&o.unshift(Bu(n,c,l)):i||null!=(c=_t(n,a))&&o.push(Bu(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Gu(e){return("string"===typeof e?e:""+e).replace(Yu,"\n").replace(Ku,"")}function Xu(e,t){return t=Gu(t),Gu(e)===t}function Qu(){}function Ju(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Et(e,r,a);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Ju(e,t,"name",i.name,i,null),Ju(e,t,"formEncType",i.formEncType,i,null),Ju(e,t,"formMethod",i.formMethod,i,null),Ju(e,t,"formTarget",i.formTarget,i,null)):(Ju(e,t,"encType",i.encType,i,null),Ju(e,t,"method",i.method,i,null),Ju(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Qu);break;case"onScroll":null!=r&&_u("scroll",e);break;case"onScrollEnd":null!=r&&_u("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Tt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":_u("beforetoggle",e),_u("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Ct.get(n)||n,r)}}function Zu(e,t,n,r,i,a){switch(n){case"style":Et(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&_u("scroll",e);break;case"onScrollEnd":null!=r&&_u("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Qu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ye.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[De]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_u("error",e),_u("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,r,s,n,null)}}return a&&Ju(e,t,"srcSet",n.srcSet,n,null),void(i&&Ju(e,t,"src",n.src,n,null));case"input":_u("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Ju(e,t,i,d,n,null)}}return yt(e,r,l,c,u,s,a,!1),void dt(e);case"select":for(a in _u("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Ju(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?vt(e,!!i,t,!1):null!=n&&vt(e,!!i,n,!0));case"textarea":for(s in _u("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,i,a,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Ju(e,t,c,i,n,null);return;case"dialog":_u("beforetoggle",e),_u("toggle",e),_u("cancel",e),_u("close",e);break;case"iframe":case"object":_u("load",e);break;case"video":case"audio":for(i=0;i<Mu.length;i++)_u(Mu[i],e);break;case"image":_u("error",e),_u("load",e);break;case"details":_u("toggle",e);break;case"embed":case"source":case"link":_u("error",e),_u("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,u,i,n,null)}return;default:if(jt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Zu(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Ju(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(md)}:ld;function md(e){setTimeout((function(){throw e}))}function pd(e){return"head"===e}function hd(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Fe]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===i)return e.removeChild(a),void Cm(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);Cm(t)}function fd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fd(n),Ie(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function yd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bd=null;function vd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ie(e)}var Sd=new Map,kd=new Set;function $d(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ed=L.d;L.d={f:function(){var e=Ed.f(),t=Vc();return e||t},r:function(e){var t=Ue(e);null!==t&&5===t.tag&&"form"===t.type?Do(t):Ed.r(e)},D:function(e){Ed.D(e),Cd("dns-prefetch",e,null)},C:function(e,t){Ed.C(e,t),Cd("preconnect",e,t)},L:function(e,t,n){Ed.L(e,t,n);var r=jd;if(r&&e&&t){var i='link[rel="preload"][as="'+ft(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+ft(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+ft(n.imageSizes)+'"]')):i+='[href="'+ft(e)+'"]';var a=i;switch(t){case"style":a=Td(e);break;case"script":a=Rd(e)}Sd.has(a)||(e=m({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(zd(a))||"script"===t&&r.querySelector(Dd(a))||(ed(t=r.createElement("link"),"link",e),qe(t),r.head.appendChild(t)))}},m:function(e,t){Ed.m(e,t);var n=jd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+ft(r)+'"][href="'+ft(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Rd(e)}if(!Sd.has(a)&&(e=m({rel:"modulepreload",href:e},t),Sd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Dd(a)))return}ed(r=n.createElement("link"),"link",e),qe(r),n.head.appendChild(r)}}},X:function(e,t){Ed.X(e,t);var n=jd;if(n&&e){var r=He(n).hoistableScripts,i=Rd(e),a=r.get(i);a||((a=n.querySelector(Dd(i)))||(e=m({src:e,async:!0},t),(t=Sd.get(i))&&_d(e,t),qe(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Ed.S(e,t,n);var r=jd;if(r&&e){var i=He(r).hoistableStyles,a=Td(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(zd(a)))s.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(a))&&Od(e,n);var l=o=r.createElement("link");qe(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,Ld(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Ed.M(e,t);var n=jd;if(n&&e){var r=He(n).hoistableScripts,i=Rd(e),a=r.get(i);a||((a=n.querySelector(Dd(i)))||(e=m({src:e,async:!0,type:"module"},t),(t=Sd.get(i))&&_d(e,t),qe(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var jd="undefined"===typeof document?null:document;function Cd(e,t,n){var r=jd;if(r&&"string"===typeof t&&t){var i=ft(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),kd.has(i)||(kd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),qe(t),r.head.appendChild(t)))}}function Pd(e,t,n,r){var i,a,s,l,c=(c=H.current)?$d(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Td(n.href),(r=(n=He(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Td(n.href);var u=He(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(zd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),ed(a,"link",s),qe(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Rd(n),(r=(n=He(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Td(e){return'href="'+ft(e)+'"'}function zd(e){return'link[rel="stylesheet"]['+e+"]"}function Ad(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Rd(e){return'[src="'+ft(e)+'"]'}function Dd(e){return"script[async]"+e}function Md(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ft(n.href)+'"]');if(r)return t.instance=r,qe(r),r;var i=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return qe(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),Ld(r,n.precedence,e),t.instance=r;case"stylesheet":i=Td(n.href);var a=e.querySelector(zd(i));if(a)return t.state.loading|=4,t.instance=a,qe(a),a;r=Ad(n),(i=Sd.get(i))&&Od(r,i),qe(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",r),t.state.loading|=4,Ld(a,n.precedence,e),t.instance=a;case"script":return a=Rd(n.src),(i=e.querySelector(Dd(a)))?(t.instance=i,qe(i),i):(r=n,(i=Sd.get(a))&&_d(r=m({},n),i),qe(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ld(r,n.precedence,e));return t.instance}function Ld(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function _d(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Nd=null;function Fd(e,t,n){if(null===Nd){var r=new Map,i=Nd=new Map;i.set(n,r)}else(r=(i=Nd).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Fe]||a[Re]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Id(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Vd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Ud=null;function Bd(){}function Hd(){if(this.count--,0===this.count)if(this.stylesheets)Wd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var qd=null;function Wd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,qd=new Map,t.forEach(Yd,e),qd=null,Hd.call(e))}function Yd(e,t){if(!(4&t.state.loading)){var n=qd.get(e);if(n)var r=n.get(null);else{n=new Map,qd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Hd.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Gd(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Xd(e,t,n,r,i,a,o,s,l,c,u,d){return e=new Gd(e,t,n,o,s,l,c,d),t=1,!0===a&&(t|=24),a=Or(3,null,null,t),e.current=a,a.stateNode=e,(t=Di()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},na(a),e}function Qd(e){return e?e=Mr:Mr}function Jd(e,t,n,r,i,a){i=Qd(i),null===r.context?r.context=i:r.pendingContext=i,(r=ia(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=aa(e,r,t))&&(Oc(n,0,t),oa(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function em(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tm(e){if(13===e.tag){var t=Ar(e,67108864);null!==t&&Oc(t,0,67108864),em(e,67108864)}}var nm=!0;function rm(e,t,n,r){var i=M.T;M.T=null;var a=L.p;try{L.p=2,am(e,t,n,r)}finally{L.p=a,M.T=i}}function im(e,t,n,r){var i=M.T;M.T=null;var a=L.p;try{L.p=8,am(e,t,n,r)}finally{L.p=a,M.T=i}}function am(e,t,n,r){if(nm){var i=om(r);if(null===i)Uu(e,t,r,sm,n),bm(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return dm=vm(dm,e,t,n,r,i),!0;case"dragenter":return mm=vm(mm,e,t,n,r,i),!0;case"mouseover":return pm=vm(pm,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return hm.set(a,vm(hm.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,fm.set(a,vm(fm.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(bm(e,r),4&t&&-1<ym.indexOf(e)){for(;null!==i;){var a=Ue(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=be(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-pe(o);s.entanglements[1]|=l,o&=~l}Su(a),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(s=Ar(a,2))&&Oc(s,0,2),Vc(),em(a,2)}if(null===(a=om(r))&&Uu(e,t,r,sm,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Uu(e,t,r,null,n)}}function om(e){return lm(e=At(e))}var sm=null;function lm(e){if(sm=null,null!==(e=Ve(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sm=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var um=!1,dm=null,mm=null,pm=null,hm=new Map,fm=new Map,gm=[],ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bm(e,t){switch(e){case"focusin":case"focusout":dm=null;break;case"dragenter":case"dragleave":mm=null;break;case"mouseover":case"mouseout":pm=null;break;case"pointerover":case"pointerout":hm.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fm.delete(t.pointerId)}}function vm(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Ue(t))&&tm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function xm(e){var t=Ve(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}(e.priority,(function(){if(13===n.tag){var e=Mc();e=Pe(e);var t=Ar(n,e);null!==t&&Oc(t,0,e),em(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wm(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=om(e.nativeEvent);if(null!==n)return null!==(t=Ue(n))&&tm(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);zt=r,n.target.dispatchEvent(r),zt=null,t.shift()}return!0}function Sm(e,t,n){wm(e)&&n.delete(t)}function km(){um=!1,null!==dm&&wm(dm)&&(dm=null),null!==mm&&wm(mm)&&(mm=null),null!==pm&&wm(pm)&&(pm=null),hm.forEach(Sm),fm.forEach(Sm)}function $m(e,t){e.blockedOn===t&&(e.blockedOn=null,um||(um=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,km)))}var Em=null;function jm(e){Em!==e&&(Em=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Em===e&&(Em=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===lm(r||n))continue;break}var a=Ue(n);null!==a&&(e.splice(t,3),t-=3,Ao(a,{pending:!0,data:i,method:n.method,action:r},r,i))}})))}function Cm(e){function t(t){return $m(t,e)}null!==dm&&$m(dm,e),null!==mm&&$m(mm,e),null!==pm&&$m(pm,e),hm.forEach(t),fm.forEach(t);for(var n=0;n<gm.length;n++){var r=gm[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gm.length&&null===(n=gm[0]).blockedOn;)xm(n),null===n.blockedOn&&gm.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[De]||null;if("function"===typeof a)o||jm(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[De]||null)s=o.formAction;else if(null!==lm(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),jm(n)}}}function Pm(e){this._internalRoot=e}function Tm(e){this._internalRoot=e}Tm.prototype.render=Pm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Jd(t.current,Mc(),e,t,null,null)},Tm.prototype.unmount=Pm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Vc(),t[Me]=null}},Tm.prototype.unstable_scheduleHydration=function(e){if(e){var t=ze();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gm.length&&0!==t&&t<gm[n].priority;n++);gm.splice(n,0,e),0===n&&xm(e)}};var zm=i.version;if("19.1.0"!==zm)throw Error(o(527,zm,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return u(i),e;if(a===r)return u(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Am={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Rm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rm.isDisabled&&Rm.supportsFiber)try{ue=Rm.inject(Am),de=Rm}catch(Mm){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=bs,a=vs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Xd(e,1,!1,null,0,n,r,i,a,l,0,null),e[Me]=t.current,Iu(e),new Pm(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=bs,l=vs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Xd(e,1,!0,t,0,r,i,a,l,c,0,u)).context=Qd(null),n=t.current,(i=ia(r=Pe(r=Mc()))).callback=null,aa(n,i,r),n=r,t.current.lanes=n,Ee(t,n),Su(t),e[Me]=t.current,Iu(e),new Tm(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=v.prototype=new b;x.constructor=v,f(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function $(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(){}function T(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case m:return T((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+C(e,0):a,w(o)?(i="",null!=u&&(i=u.replace(j,"$&/")+"/"),T(o,t,i,"",(function(e){return e}))):null!=o&&(E(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+u,o=$(l.type,c,void 0,0,0,l.props)),t.push(o)),1;u=0;var d,h=""===a?".":a+":";if(w(e))for(var f=0;f<e.length;f++)u+=T(a=e[f],t,i,s=h+C(a,f),o);else if("function"===typeof(f=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=f.call(e),f=0;!(a=e.next()).done;)u+=T(a=a.value,t,i,s=h+C(a,f++),o);else if("object"===s){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(P,P):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function z(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(){}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=f({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!k.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return $(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return $(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(D,R)}catch(a){R(a)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,m=null,p=3,h=!1,f=!1,g=!1,y=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(g=!1,w(e),!f)if(null!==r(c))f=!0,$||($=!0,k());else{var t=r(u);null!==t&&R(S,t.startTime-e)}}var k,$=!1,E=-1,j=5,C=-1;function P(){return!!y||!(t.unstable_now()-C<j)}function T(){if(y=!1,$){var e=t.unstable_now();C=e;var n=!0;try{e:{f=!1,g&&(g=!1,v(E),E=-1),h=!0;var a=p;try{t:{for(w(e),m=r(c);null!==m&&!(m.expirationTime>e&&P());){var o=m.callback;if("function"===typeof o){m.callback=null,p=m.priorityLevel;var s=o(m.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){m.callback=s,w(e),n=!0;break t}m===r(c)&&i(c),w(e)}else i(c);m=r(c)}if(null!==m)n=!0;else{var l=r(u);null!==l&&R(S,l.startTime-e),n=!1}}break e}finally{m=null,p=a,h=!1}n=void 0}}finally{n?k():$=!1}}}if("function"===typeof x)k=function(){x(T)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,A=z.port2;z.port1.onmessage=T,k=function(){A.postMessage(null)}}else k=function(){b(T,0)};function R(e,n){E=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(v(E),E=-1):g=!0,R(S,a-o))):(e.sortIndex=s,n(c,e),f||h||(f=!0,$||($=!0,k()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".8e969639.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="proyecto-final-mocosa:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var m=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkproyecto_final_mocosa=self.webpackChunkproyecto_final_mocosa||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function i(){return d((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return l("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:c(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:u=!1}=i,d=o.history,m="POP",p=null,h=f();function f(){return(d.state||{idx:null}).idx}function g(){m="POP";let e=f(),t=null==e?null:e-h;h=e,p&&p({action:m,location:b.location,delta:t})}function y(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),a(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let b={get action(){return m},get location(){return e(o,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(r,g),p=e,()=>{o.removeEventListener(r,g),p=null}},createHref:e=>t(o,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){m="PUSH";let r=l(b.location,e,t);n&&n(r,e),h=f()+1;let i=s(r,h),a=b.createHref(r);try{d.pushState(i,"",a)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(a)}u&&p&&p({action:m,location:b.location,delta:1})},replace:function(e,t){m="REPLACE";let r=l(b.location,e,t);n&&n(r,e),h=f();let i=s(r,h),a=b.createHref(r);d.replaceState(i,"",a),u&&p&&p({action:m,location:b.location,delta:0})},go:e=>d.go(e)};return b}new WeakMap;function m(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let i=P(("string"===typeof t?u(t):t).pathname||"/",n);if(null==i)return null;let a=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=C(i);o=$(a[s],e,r)}return o}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(a(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let l=D([r,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),h(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:k(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of f(e.path))i(e,t,n);else i(e,t)})),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=f(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,y=3,b=2,v=1,x=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=b),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?y:""===t?v:x)),r)}function $(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:D([a,u.pathname]),pathnameBase:M(D([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=D([a,u.pathnameBase]))}return o}function E(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function j(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function C(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function T(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function A(e){let t=z(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function R(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},a(!r.pathname||!r.pathname.includes("?"),T("?","pathname","search",r)),a(!r.pathname||!r.pathname.includes("#"),T("#","pathname","hash",r)),a(!r.search||!r.search.includes("#"),T("#","search","hash",r)));let o,s=""===e||""===r.pathname,l=s?"/":r.pathname;if(null==l)o=n;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?u(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:L(r),hash:O(i)}}(r,o),d=l&&"/"!==l&&l.endsWith("/"),m=(s||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!m||(c.pathname+="/"),c}var D=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function _(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var N=["POST","PUT","PATCH","DELETE"],F=(new Set(N),["GET",...N]);new Set(F),Symbol("ResetLoaderData");var I=e.createContext(null);I.displayName="DataRouter";var V=e.createContext(null);V.displayName="DataRouterState";var U=e.createContext({isTransitioning:!1});U.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var H=e.createContext(null);H.displayName="Await";var q=e.createContext(null);q.displayName="Navigation";var W=e.createContext(null);W.displayName="Location";var Y=e.createContext({outlet:null,matches:[],isDataRoute:!1});Y.displayName="Route";var K=e.createContext(null);K.displayName="RouteError";function G(){return null!=e.useContext(W)}function X(){return a(G(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(W).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J(t){e.useContext(q).static||e.useLayoutEffect(t)}function Z(){let{isDataRoute:t}=e.useContext(Y);return t?function(){let{router:t}=ce("useNavigate"),n=de("useNavigate"),r=e.useRef(!1);J((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(r.current,Q),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){a(G(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(I),{basename:n,navigator:r}=e.useContext(q),{matches:i}=e.useContext(Y),{pathname:s}=X(),l=JSON.stringify(A(i)),c=e.useRef(!1);J((()=>{c.current=!0}));let u=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(c.current,Q),!c.current)return;if("number"===typeof e)return void r.go(e);let a=R(e,JSON.parse(l),s,"path"===i.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:D([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)}),[n,r,l,s,t]);return u}()}e.createContext(null);function ee(){let{matches:t}=e.useContext(Y),n=t[t.length-1];return n?n.params:{}}function te(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(Y),{pathname:i}=X(),a=JSON.stringify(A(r));return e.useMemo((()=>R(t,JSON.parse(a),i,"path"===n)),[t,a,i,n])}function ne(t,n,r,i){a(G(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(q),{matches:c}=e.useContext(Y),d=c[c.length-1],p=d?d.params:{},h=d?d.pathname:"/",f=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";he(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let y,b=X();if(n){let e="string"===typeof n?u(n):n;a("/"===f||e.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${e.pathname}" was given in the \`location\` prop.`),y=e}else y=b;let v=y.pathname||"/",x=v;if("/"!==f){let e=f.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:m(t,{pathname:x});o(g||null!=w,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),o(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=se(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:D([f,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:D([f,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,i);return n&&S?e.createElement(W.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},S):S}function re(){let t=me(),n=_(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,s)}var ie=e.createElement(re,null),ae=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Y.Provider,{value:this.props.routeContext},e.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oe(t){let{routeContext:n,match:r,children:i}=t,a=e.useContext(I);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(Y.Provider,{value:n},i)}function se(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,o=r?.errors;if(null!=o){let e=i.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,l=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){s=!0,i=l>=0?i.slice(0,l+1):[i[0]];break}}}return i.reduceRight(((t,a,c)=>{let u,d=!1,m=null,p=null;r&&(u=o&&a.route.id?o[a.route.id]:void 0,m=a.route.errorElement||ie,s&&(l<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===c&&(d=!0,p=a.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,c+1)),f=()=>{let n;return n=u?m:d?p:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(oe,{match:a,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===c)?e.createElement(ae,{location:r.location,revalidation:r.revalidation,component:m,error:u,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()}),null)}function le(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ce(t){let n=e.useContext(I);return a(n,le(t)),n}function ue(t){let n=e.useContext(V);return a(n,le(t)),n}function de(t){let n=function(t){let n=e.useContext(Y);return a(n,le(t)),n}(t),r=n.matches[n.matches.length-1];return a(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function me(){let t=e.useContext(K),n=ue("useRouteError"),r=de("useRouteError");return void 0!==t?t:n.errors?.[r]}var pe={};function he(e,t,n){t||pe[e]||(pe[e]=!0,o(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ne(t,void 0,r,n)}));function fe(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ge(t){let{basename:n="/",children:r=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}=t;a(!G(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=e.useMemo((()=>({basename:d,navigator:l,static:c,future:{}})),[d,l,c]);"string"===typeof i&&(i=u(i));let{pathname:p="/",search:h="",hash:f="",state:g=null,key:y="default"}=i,b=e.useMemo((()=>{let e=P(p,d);return null==e?null:{location:{pathname:e,search:h,hash:f,state:g,key:y},navigationType:s}}),[d,p,h,f,g,y,s]);return o(null!=b,`<Router basename="${d}"> is not able to match the URL "${p}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==b?null:e.createElement(q.Provider,{value:m},e.createElement(W.Provider,{children:r,value:b}))}function ye(e){let{children:t,location:n}=e;return ne(be(t),n)}e.Component;function be(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let o=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,be(t.props.children,o));a(t.type===fe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=be(t.props.children,o)),r.push(s)})),r}var ve="get",xe="application/x-www-form-urlencoded";function we(e){return null!=e&&"string"===typeof e.tagName}var Se=null;var ke=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $e(e){return null==e||ke.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null)}function Ee(e,t){let n,r,i,a,o;if(we(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?P(o,t):null,n=e.getAttribute("method")||ve,i=$e(e.getAttribute("enctype"))||xe,a=new FormData(e)}else if(function(e){return we(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return we(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?P(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ve,i=$e(e.getAttribute("formenctype"))||$e(o.getAttribute("enctype"))||xe,a=new FormData(o,e),!function(){if(null===Se)try{new FormData(document.createElement("form"),0),Se=!1}catch(e){Se=!0}return Se}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ve,r=null,i=xe,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function je(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Pe(e){return null!=e&&"string"===typeof e.page}function Te(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function ze(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Ae(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Re(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!Pe(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e}),[])}function De(e){return{__html:e}}Symbol("SingleFetchRedirect");var Me=new Set([100,101,204,205]);function Le(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===P(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Oe(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(_(n))return e.createElement(_e,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(_e,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function _e(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:a}=t,{routeModules:o}=Ue();return o.root?.Layout&&!i?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,r?e.createElement(Ge,null):null)))}function Ne(e){return!0===e}function Fe(){let t=e.useContext(I);return je(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ie(){let t=e.useContext(V);return je(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ve=e.createContext(void 0);function Ue(){let t=e.useContext(Ve);return je(t,"You must render this element inside a <HydratedRouter> element"),t}function Be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He(e,t,n){if(n&&!Ke)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function qe(t){let{page:n,...r}=t,{router:i}=Fe(),a=e.useMemo((()=>m(i.routes,n,i.basename)),[i.routes,n,i.basename]);return a?e.createElement(Ye,{page:n,matches:a,...r}):null}function We(t){let{manifest:n,routeModules:r}=Ue(),[i,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ce(r,n);return e.links?e.links():[]}return[]})));return Re(r.flat(1).filter(Te).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||a(t)})),()=>{e=!0}}),[t,n,r]),i}function Ye(t){let{page:n,matches:r,...i}=t,a=X(),{manifest:o,routeModules:s}=Ue(),{basename:l}=Fe(),{loaderData:c,matches:u}=Ie(),d=e.useMemo((()=>ze(n,r,u,o,a,"data")),[n,r,u,o,a]),m=e.useMemo((()=>ze(n,r,u,o,a,"assets")),[n,r,u,o,a]),p=e.useMemo((()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Le(n,l);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,c,a,o,d,r,n,s]),h=e.useMemo((()=>Ae(m,o)),[m,o]),f=We(m);return e.createElement(e.Fragment,null,p.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),f.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ve.displayName="FrameworkContext";var Ke=!1;function Ge(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:a,renderMeta:o}=Ue(),{router:s,static:l,staticContext:c}=Fe(),{matches:u}=Ie(),d=Ne(a);o&&(o.didRenderScripts=!0);let p=He(u,null,i);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let i=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];je(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map((e=>e.route.id))),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach((e=>{let n=m(t.routes,e,t.basename);n&&n.forEach((e=>i.add(e.route.id)))}));let s=[...i].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:De(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:De(a),type:"module",async:!0}))}),[]),f=Ke?[]:(n.entry.imports.concat(Ae(p,n,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let y="object"===typeof n.sri?n.sri:{};return Ke?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:y[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:y[n.entry.module],suppressHydrationWarning:!0}),f.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:y[n],suppressHydrationWarning:!0}))),h)}function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Qe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Qe&&(window.__reactRouterVersion="7.5.3")}catch(Db){}function Je(t){let{basename:n,children:r,window:a}=t,o=e.useRef();null==o.current&&(o.current=i({window:a,v5Compat:!0}));let s=o.current,[l,c]=e.useState({action:s.action,location:s.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>s.listen(u)),[s,u]),e.createElement(ge,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}var Ze=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=e.forwardRef((function(t,n){let r,{onClick:i,discover:s="render",prefetch:l="none",relative:u,reloadDocument:d,replace:m,state:p,target:h,to:f,preventScrollReset:g,viewTransition:y,...b}=t,{basename:v}=e.useContext(q),x="string"===typeof f&&Ze.test(f),w=!1;if("string"===typeof f&&x&&(r=f,Qe))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=P(t.pathname,v);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:w=!0}catch(Db){o(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(G(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(q),{hash:o,pathname:s,search:l}=te(t,{relative:n}),c=s;return"/"!==r&&(c="/"===s?r:D([r,s])),i.createHref({pathname:c,search:l,hash:o})}(f,{relative:u}),[k,$,E]=function(t,n){let r=e.useContext(Ve),[i,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:m}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let h=()=>{a(!0)},f=()=>{a(!1),s(!1)};return r?"intent"!==t?[o,p,{}]:[o,p,{onFocus:Be(l,h),onBlur:Be(c,f),onMouseEnter:Be(u,h),onMouseLeave:Be(d,f),onTouchStart:Be(m,h)}]:[!1,p,{}]}(l,b),j=function(t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Z(),u=X(),d=te(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);l(t,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}}),[u,l,d,r,i,n,t,a,o,s])}(f,{replace:m,state:p,target:h,preventScrollReset:g,relative:u,viewTransition:y});let C=e.createElement("a",{...b,...E,href:r||S,onClick:w||d?i:function(e){i&&i(e),e.defaultPrevented||j(e)},ref:Xe(n,$),target:h,"data-discover":x||"render"!==s?void 0:"true"});return k&&!x?e.createElement(e.Fragment,null,C,e.createElement(qe,{page:S})):C}));et.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:c,viewTransition:u,children:d,...m}=t,p=te(c,{relative:m.relative}),h=X(),f=e.useContext(V),{navigator:g,basename:y}=e.useContext(q),b=null!=f&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(U);a(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=rt("useViewTransitionState"),o=te(t,{relative:n.relative});if(!r.isTransitioning)return!1;let s=P(r.currentLocation.pathname,i)||r.currentLocation.pathname,l=P(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=E(o.pathname,l)||null!=E(o.pathname,s)}(p)&&!0===u,v=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(x=x.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&y&&(w=P(w,y)||w);const S="/"!==v&&v.endsWith("/")?v.length-1:v.length;let k,$=x===v||!s&&x.startsWith(v)&&"/"===x.charAt(S),j=null!=w&&(w===v||!s&&w.startsWith(v)&&"/"===w.charAt(v.length)),C={isActive:$,isPending:j,isTransitioning:b},T=$?r:void 0;k="function"===typeof o?o(C):[o,$?"active":null,j?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let z="function"===typeof l?l(C):l;return e.createElement(et,{...m,"aria-current":T,className:k,ref:n,style:z,to:c,viewTransition:u},"function"===typeof d?d(C):d)})).displayName="NavLink";var tt=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:l,state:u,method:d=ve,action:m,onSubmit:p,relative:h,preventScrollReset:f,viewTransition:g,...y}=t,b=ot(),v=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(q),i=e.useContext(Y);a(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),s={...te(t||".",{relative:n})},l=X();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(s.pathname="/"===s.pathname?r:D([r,s.pathname]));return c(s)}(m,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof m&&Ze.test(m);return e.createElement("form",{ref:n,method:x,action:v,onSubmit:s?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;b(t||e.currentTarget,{fetcherKey:i,method:n,navigate:o,replace:l,state:u,relative:h,preventScrollReset:f,viewTransition:g})},...y,"data-discover":w||"render"!==r?void 0:"true"})}));function nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rt(t){let n=e.useContext(I);return a(n,nt(t)),n}tt.displayName="Form";var it=0,at=()=>`__${String(++it)}__`;function ot(){let{router:t}=rt("useSubmit"),{basename:n}=e.useContext(q),r=de("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:c}=Ee(e,n);if(!1===i.navigate){let e=i.fetcherKey||at();await t.fetch(e,r,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var st=function(){return st=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},st.apply(this,arguments)};Object.create;function lt(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ct=n(324),ut=n.n(ct),dt="-ms-",mt="-moz-",pt="-webkit-",ht="comm",ft="rule",gt="decl",yt="@keyframes",bt=Math.abs,vt=String.fromCharCode,xt=Object.assign;function wt(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function kt(e,t,n){return e.replace(t,n)}function $t(e,t,n){return e.indexOf(t,n)}function Et(e,t){return 0|e.charCodeAt(t)}function jt(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Pt(e){return e.length}function Tt(e,t){return t.push(e),e}function zt(e,t){return e.filter((function(e){return!St(e,t)}))}var At=1,Rt=1,Dt=0,Mt=0,Lt=0,Ot="";function _t(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:At,column:Rt,length:o,return:"",siblings:s}}function Nt(e,t){return xt(_t("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ft(e){for(;e.root;)e=Nt(e.root,{children:[e]});Tt(e,e.siblings)}function It(){return Lt=Mt>0?Et(Ot,--Mt):0,Rt--,10===Lt&&(Rt=1,At--),Lt}function Vt(){return Lt=Mt<Dt?Et(Ot,Mt++):0,Rt++,10===Lt&&(Rt=1,At++),Lt}function Ut(){return Et(Ot,Mt)}function Bt(){return Mt}function Ht(e,t){return jt(Ot,e,t)}function qt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return At=Rt=1,Dt=Ct(Ot=e),Mt=0,[]}function Yt(e){return Ot="",e}function Kt(e){return wt(Ht(Mt-1,Qt(91===e?e+2:40===e?e+1:e)))}function Gt(e){for(;(Lt=Ut())&&Lt<33;)Vt();return qt(e)>2||qt(Lt)>3?"":" "}function Xt(e,t){for(;--t&&Vt()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Ht(e,Bt()+(t<6&&32==Ut()&&32==Vt()))}function Qt(e){for(;Vt();)switch(Lt){case e:return Mt;case 34:case 39:34!==e&&39!==e&&Qt(Lt);break;case 40:41===e&&Qt(e);break;case 92:Vt()}return Mt}function Jt(e,t){for(;Vt()&&e+Lt!==57&&(e+Lt!==84||47!==Ut()););return"/*"+Ht(t,Mt-1)+"*"+vt(47===e?e:Vt())}function Zt(e){for(;!qt(Ut());)Vt();return Ht(e,Mt)}function en(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case gt:return e.return=e.return||e.value;case ht:return"";case yt:return e.return=e.value+"{"+en(e.children,r)+"}";case ft:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=en(e.children,r))?e.return=e.value+"{"+n+"}":""}function nn(e,t,n){switch(function(e,t){return 45^Et(e,0)?(((t<<2^Et(e,0))<<2^Et(e,1))<<2^Et(e,2))<<2^Et(e,3):0}(e,t)){case 5103:return pt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pt+e+e;case 4789:return mt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pt+e+mt+e+dt+e+e;case 5936:switch(Et(e,t+11)){case 114:return pt+e+dt+kt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pt+e+dt+kt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pt+e+dt+kt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pt+e+dt+e+e;case 6165:return pt+e+dt+"flex-"+e+e;case 5187:return pt+e+kt(e,/(\w+).+(:[^]+)/,pt+"box-$1$2"+dt+"flex-$1$2")+e;case 5443:return pt+e+dt+"flex-item-"+kt(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":dt+"grid-row-"+kt(e,/flex-|-self/g,""))+e;case 4675:return pt+e+dt+"flex-line-pack"+kt(e,/align-content|flex-|-self/g,"")+e;case 5548:return pt+e+dt+kt(e,"shrink","negative")+e;case 5292:return pt+e+dt+kt(e,"basis","preferred-size")+e;case 6060:return pt+"box-"+kt(e,"-grow","")+pt+e+dt+kt(e,"grow","positive")+e;case 4554:return pt+kt(e,/([^-])(transform)/g,"$1"+pt+"$2")+e;case 6187:return kt(kt(kt(e,/(zoom-|grab)/,pt+"$1"),/(image-set)/,pt+"$1"),e,"")+e;case 5495:case 3959:return kt(e,/(image-set\([^]*)/,pt+"$1$`$1");case 4968:return kt(kt(e,/(.+:)(flex-)?(.*)/,pt+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pt+e+e;case 4200:if(!St(e,/flex-|baseline/))return dt+"grid-column-align"+jt(e,t)+e;break;case 2592:case 3360:return dt+kt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,St(e.props,/grid-\w+-end/)}))?~$t(e+(n=n[t].value),"span",0)?e:dt+kt(e,"-start","")+e+dt+"grid-row-span:"+(~$t(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":dt+kt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return St(e.props,/grid-\w+-start/)}))?e:dt+kt(kt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return kt(e,/(.+)-inline(.+)/,pt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(Et(e,t+1)){case 109:if(45!==Et(e,t+4))break;case 102:return kt(e,/(.+:)(.+)-([^]+)/,"$1"+pt+"$2-$3$1"+mt+(108==Et(e,t+3)?"$3":"$2-$3"))+e;case 115:return~$t(e,"stretch",0)?nn(kt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return kt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return dt+n+":"+r+s+(i?dt+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===Et(e,t+6))return kt(e,":",":"+pt)+e;break;case 6444:switch(Et(e,45===Et(e,14)?18:11)){case 120:return kt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pt+(45===Et(e,14)?"inline-":"")+"box$3$1"+pt+"$2$3$1"+dt+"$2box$3")+e;case 100:return kt(e,":",":"+dt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return kt(e,"scroll-","scroll-snap-")+e}return e}function rn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gt:return void(e.return=nn(e.value,e.length,n));case yt:return en([Nt(e,{value:kt(e.value,"@","@"+pt)})],r);case ft:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(St(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ft(Nt(e,{props:[kt(t,/:(read-\w+)/,":-moz-$1")]})),Ft(Nt(e,{props:[t]})),xt(e,{props:zt(n,r)});break;case"::placeholder":Ft(Nt(e,{props:[kt(t,/:(plac\w+)/,":"+pt+"input-$1")]})),Ft(Nt(e,{props:[kt(t,/:(plac\w+)/,":-moz-$1")]})),Ft(Nt(e,{props:[kt(t,/:(plac\w+)/,dt+"input-$1")]})),Ft(Nt(e,{props:[t]})),xt(e,{props:zt(n,r)})}return""}))}}function an(e){return Yt(on("",null,null,null,[""],e=Wt(e),0,[0],e))}function on(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,m=0,p=0,h=0,f=1,g=1,y=1,b=0,v="",x=i,w=a,S=r,k=v;g;)switch(h=b,b=Vt()){case 40:if(108!=h&&58==Et(k,d-1)){-1!=$t(k+=kt(Kt(b),"&","&\f"),"&\f",bt(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:k+=Kt(b);break;case 9:case 10:case 13:case 32:k+=Gt(h);break;case 92:k+=Xt(Bt()-1,7);continue;case 47:switch(Ut()){case 42:case 47:Tt(ln(Jt(Vt(),Bt()),t,n,l),l);break;default:k+="/"}break;case 123*f:s[c++]=Ct(k)*y;case 125*f:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==y&&(k=kt(k,/\f/g,"")),p>0&&Ct(k)-d&&Tt(p>32?cn(k+";",r,n,d-1,l):cn(kt(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Tt(S=sn(k,t,n,c,u,i,s,v,x=[],w=[],d,a),a),123===b)if(0===u)on(k,t,S,S,x,a,d,s,w);else switch(99===m&&110===Et(k,3)?100:m){case 100:case 108:case 109:case 115:on(e,S,S,r&&Tt(sn(e,S,S,0,0,i,s,v,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:on(k,S,S,S,[""],w,0,s,w)}}c=u=p=0,f=y=1,v=k="",d=o;break;case 58:d=1+Ct(k),p=h;default:if(f<1)if(123==b)--f;else if(125==b&&0==f++&&125==It())continue;switch(k+=vt(b),b*f){case 38:y=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Ct(k)-1)*y,y=1;break;case 64:45===Ut()&&(k+=Kt(Vt())),m=Ut(),u=d=Ct(v=k+=Zt(Bt())),b++;break;case 45:45===h&&2==Ct(k)&&(f=0)}}return a}function sn(e,t,n,r,i,a,o,s,l,c,u,d){for(var m=i-1,p=0===i?a:[""],h=Pt(p),f=0,g=0,y=0;f<r;++f)for(var b=0,v=jt(e,m+1,m=bt(g=o[f])),x=e;b<h;++b)(x=wt(g>0?p[b]+" "+v:kt(v,/&\f/g,p[b])))&&(l[y++]=x);return _t(e,t,n,0===i?ft:s,l,c,u,d)}function ln(e,t,n,r){return _t(e,t,n,ht,vt(Lt),jt(e,2,-2),0,r)}function cn(e,t,n,r,i){return _t(e,t,n,gt,jt(e,0,r),jt(e,r+1,-1),r,i)}var un={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",mn="active",pn="data-styled-version",hn="6.1.17",fn="/*!sc*/\n",gn="undefined"!=typeof window&&"HTMLElement"in window,yn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),bn={},vn=(new Set,Object.freeze([])),xn=Object.freeze({});function wn(e,t,n){return void 0===n&&(n=xn),e.theme!==n.theme&&e.theme||t||n.theme}var Sn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$n=/(^-|-$)/g;function En(e){return e.replace(kn,"-").replace($n,"")}var jn=/(a)(d)/gi,Cn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cn(t%52)+n;return(Cn(t%52)+n).replace(jn,"$1-$2")}var Tn,zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},An=function(e){return zn(5381,e)};function Rn(e){return Pn(An(e)>>>0)}function Dn(e){return e.displayName||e.name||"Component"}function Mn(e){return"string"==typeof e&&!0}var Ln="function"==typeof Symbol&&Symbol.for,On=Ln?Symbol.for("react.memo"):60115,_n=Ln?Symbol.for("react.forward_ref"):60112,Nn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vn=((Tn={})[_n]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tn[On]=In,Tn);function Un(e){return("type"in(t=e)&&t.type.$$typeof)===On?In:"$$typeof"in e?Vn[e.$$typeof]:Nn;var t}var Bn=Object.defineProperty,Hn=Object.getOwnPropertyNames,qn=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Yn=Object.getPrototypeOf,Kn=Object.prototype;function Gn(e,t,n){if("string"!=typeof t){if(Kn){var r=Yn(t);r&&r!==Kn&&Gn(e,r,n)}var i=Hn(t);qn&&(i=i.concat(qn(t)));for(var a=Un(e),o=Un(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Fn||n&&n[l]||o&&l in o||a&&l in a)){var c=Wn(t,l);try{Bn(e,l,c)}catch(e){}}}}return e}function Xn(e){return"function"==typeof e}function Qn(e){return"object"==typeof e&&"styledComponentId"in e}function Jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function er(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tr(e,t,n){if(void 0===n&&(n=!1),!n&&!er(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tr(e[r],t[r]);else if(er(t))for(var r in t)e[r]=tr(e[r],t[r]);return e}function nr(e,t){Object.defineProperty(e,"toString",{value:t})}function rr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ir=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw rr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(fn);return t},e}(),ar=new Map,or=new Map,sr=1,lr=function(e){if(ar.has(e))return ar.get(e);for(;or.has(sr);)sr++;var t=sr++;return ar.set(e,t),or.set(t,e),t},cr=function(e,t){sr=t+1,ar.set(e,t),or.set(t,e)},ur="style[".concat(dn,"][").concat(pn,'="').concat(hn,'"]'),dr=new RegExp("^".concat(dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mr=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},pr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fn),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(dr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(cr(u,c),mr(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},hr=function(e){for(var t=document.querySelectorAll(ur),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(dn)!==mn&&(pr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function fr(){return n.nc}var gr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(dn,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(dn,mn),r.setAttribute(pn,hn);var o=fr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},yr=function(){function e(e){this.element=gr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw rr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),br=function(){function e(e){this.element=gr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xr=gn,wr={isServer:!gn,useCSSOMInjection:!yn},Sr=function(){function e(e,t,n){void 0===e&&(e=xn),void 0===t&&(t={});var r=this;this.options=st(st({},wr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&gn&&xr&&(xr=!1,hr(this)),nr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return or.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(dn,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(fn)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return lr(e)},e.prototype.rehydrate=function(){!this.server&&gn&&hr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(st(st({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new vr(n):t?new yr(n):new br(n)}(this.options),new ir(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(lr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(lr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(lr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kr=/&/g,$r=/^\s*\/\/.*$/gm;function Er(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Er(e.children,t)),e}))}function jr(e){var t,n,r,i=void 0===e?xn:e,a=i.options,o=void 0===a?xn:a,s=i.plugins,l=void 0===s?vn:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===ft&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(kr,n).replace(r,c))})),o.prefix&&u.push(rn),u.push(tn);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace($r,""),c=an(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=Er(c,o.namespace));var d,m=[];return en(c,function(e){var t=Pt(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return m.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),m};return d.hash=l.length?l.reduce((function(e,t){return t.name||rr(15),zn(e,t.name)}),5381).toString():"",d}var Cr=new Sr,Pr=jr(),Tr=e.createContext({shouldForwardProp:void 0,styleSheet:Cr,stylis:Pr}),zr=(Tr.Consumer,e.createContext(void 0));function Ar(){return(0,e.useContext)(Tr)}function Rr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=Ar().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return jr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){ut()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(Tr.Provider,{value:l},e.createElement(zr.Provider,{value:s},t.children))}var Dr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,nr(this,(function(){throw rr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pr),this.name+e.hash},e}(),Mr=function(e){return e>="A"&&e<="Z"};function Lr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Mr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Or=function(e){return null==e||!1===e||""===e},_r=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Or(a)&&(Array.isArray(a)&&a.isCss||Xn(a)?r.push("".concat(Lr(i),":"),a,";"):er(a)?r.push.apply(r,lt(lt(["".concat(i," {")],_r(a),!1),["}"],!1)):r.push("".concat(Lr(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in un||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nr(e,t,n,r){return Or(e)?[]:Qn(e)?[".".concat(e.styledComponentId)]:Xn(e)?!Xn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Nr(e(t),t,n,r):e instanceof Dr?n?(e.inject(n,r),[e.getName(r)]):[e]:er(e)?_r(e):Array.isArray(e)?Array.prototype.concat.apply(vn,e.map((function(e){return Nr(e,t,n,r)}))):[e.toString()];var i}function Fr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Qn(n))return!1}return!0}var Ir=An(hn),Vr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Fr(e),this.componentId=t,this.baseHash=zn(Ir,t),this.baseStyle=n,Sr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Jn(r,this.staticRulesId);else{var i=Zn(Nr(this.rules,e,t,n)),a=Pn(zn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Jn(r,a),this.staticRulesId=a}else{for(var s=zn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Zn(Nr(u,e,t,n));s=zn(s,d+c),l+=d}}if(l){var m=Pn(s>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,n(l,".".concat(m),void 0,this.componentId)),r=Jn(r,m)}}return r},e}(),Ur=e.createContext(void 0);Ur.Consumer;function Br(t){var n=e.useContext(Ur),r=(0,e.useMemo)((function(){return function(e,t){if(!e)throw rr(14);if(Xn(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw rr(8);return t?st(st({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(Ur.Provider,{value:r},t.children):null}var Hr={};new Set;function qr(t,n,r){var i=Qn(t),a=t,o=!Mn(t),s=n.attrs,l=void 0===s?vn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":En(e);Hr[n]=(Hr[n]||0)+1;var r="".concat(n,"-").concat(Rn(hn+n+Hr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,m=void 0===d?function(e){return Mn(e)?"styled.".concat(e):"Styled(".concat(Dn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(En(n.displayName),"-").concat(n.componentId):n.componentId||u,h=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,f=n.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;f=function(e,t){return g(e,t)&&y(e,t)}}else f=g}var b=new Vr(r,p,i?a.componentStyle:void 0);function v(t,n){return function(t,n,r){var i=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Ur),d=Ar(),m=t.shouldForwardProp||d.shouldForwardProp,p=wn(n,u,o)||xn,h=function(e,t,n){for(var r,i=st(st({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Xn(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?Jn(i[s],o[s]):"style"===s?st(st({},i[s]),o[s]):o[s]}return t.className&&(i.className=Jn(i.className,t.className)),i}(i,n,p),f=h.as||c,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===p||("forwardedAs"===y?g.as=h.forwardedAs:m&&!m(y,f)||(g[y]=h[y]));var b=function(e,t){var n=Ar();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),v=Jn(s,l);return b&&(v+=" "+b),h.className&&(v+=" "+h.className),g[Mn(f)&&!Sn.has(f)?"class":"className"]=v,r&&(g.ref=r),(0,e.createElement)(f,g)}(x,t,n)}v.displayName=m;var x=e.forwardRef(v);return x.attrs=h,x.componentStyle=b,x.displayName=m,x.shouldForwardProp=f,x.foldedComponentIds=i?Jn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=i?a.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)tr(e,i[r],!0);return e}({},a.defaultProps,e):e}}),nr(x,(function(){return".".concat(x.styledComponentId)})),o&&Gn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Wr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yr=function(e){return Object.assign(e,{isCss:!0})};function Kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||er(e))return Yr(Nr(Wr(vn,lt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Nr(r):Yr(Nr(Wr(r,t)))}function Gr(e,t,n){if(void 0===n&&(n=xn),!t)throw rr(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Kr.apply(void 0,lt([r],i,!1)))};return r.attrs=function(r){return Gr(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Gr(e,t,st(st({},n),r))},r}var Xr=function(e){return Gr(qr,e)},Qr=Xr;Sn.forEach((function(e){Qr[e]=Xr(e)}));var Jr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Fr(e),Sr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Zn(Nr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Sr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Zr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zn(Kr.apply(void 0,lt([e],t,!1))),i=Rn(r);return new Dr(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=fr(),r=Zn([n&&'nonce="'.concat(n,'"'),"".concat(dn,'="true"'),"".concat(pn,'="').concat(hn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw rr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw rr(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[dn]="",n[pn]=hn,n.dangerouslySetInnerHTML={__html:r},n),a=fr();return a&&(i.nonce=a),[e.createElement("style",st({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Sr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw rr(2);return e.createElement(Rr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw rr(3)}})(),"__sc-".concat(dn,"__");var ei=n(579);const ti=(0,e.createContext)({});function ni(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const ri="undefined"!==typeof window,ii=ri?e.useLayoutEffect:e.useEffect,ai=(0,e.createContext)(null);function oi(e){return"object"===typeof e&&null!==e}function si(e){return oi(e)&&"offsetHeight"in e}const li=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ci extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=si(e)&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ui(t){let{children:n,isPresent:r,anchorX:i}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(li);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=s.current;if(r||!o.current||!e||!t)return;const d="left"===i?`left: ${c}`:`right: ${u}`;o.current.dataset.motionPopId=a;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.contains(m)&&document.head.removeChild(m)}}),[r]),(0,ei.jsx)(ci,{isPresent:r,childRef:o,sizeRef:s,children:e.cloneElement(n,{ref:o})})}const di=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c}=t;const u=ni(mi),d=(0,e.useId)();let m=!0,p=(0,e.useMemo)((()=>(m=!1,{id:d,initial:r,isPresent:i,custom:o,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;a&&a()},register:e=>(u.set(e,!1),()=>u.delete(e))})),[i,u,a]);return s&&m&&(p={...p}),(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!u.size&&a&&a()}),[i]),"popLayout"===l&&(n=(0,ei.jsx)(ui,{isPresent:i,anchorX:c,children:n})),(0,ei.jsx)(ai.Provider,{value:p,children:n})};function mi(){return new Map}function pi(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(ai);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&i&&i(o)),[o,i,t]);return!r&&i?[!1,s]:[!0]}const hi=e=>e.key||"";function fi(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const gi=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=pi(l),m=(0,e.useMemo)((()=>fi(n)),[n]),p=l&&!u?[]:m.map(hi),h=(0,e.useRef)(!0),f=(0,e.useRef)(m),g=ni((()=>new Map)),[y,b]=(0,e.useState)(m),[v,x]=(0,e.useState)(m);ii((()=>{h.current=!1,f.current=m;for(let e=0;e<v.length;e++){const t=hi(v[e]);p.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[v,p.length,p.join("-")]);const w=[];if(m!==y){let e=[...m];for(let t=0;t<v.length;t++){const n=v[t],r=hi(n);p.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),x(fi(e)),b(m),null}const{forceRender:S}=(0,e.useContext)(ti);return(0,ei.jsx)(ei.Fragment,{children:v.map((e=>{const t=hi(e),n=!(l&&!u)&&(m===v||p.includes(t));return(0,ei.jsx)(di,{isPresent:n,initial:!(h.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(S?.(),x(f.current),l&&d?.(),a&&a())},anchorX:c,children:e},t)}))})};function yi(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function bi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function vi(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function xi(e,t,n,r){if("function"===typeof t){const[i,a]=vi(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=vi(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function wi(e,t,n){const r=e.getProps();return xi(r,t,void 0!==n?n:r.custom,e)}function Si(e,t){return e?.[t]??e?.default??e}const ki=e=>e,$i={},Ei=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ji={value:null,addProjectionMetrics:null};function Ci(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ei.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&ji.value&&ji.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,u.process(e)))}};return u}(a,t?n:void 0),e)),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:m,render:p,postRender:h}=o,f=()=>{const a=$i.useManualTiming?i.timestamp:performance.now();n=!1,$i.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),m.process(i),p.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(f))},g=Ei.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(f)),s.schedule(t,a,o)},t}),{});return{schedule:g,cancel:e=>{for(let t=0;t<Ei.length;t++)o[Ei[t]].cancel(e)},state:i,steps:o}}const{schedule:Pi,cancel:Ti,state:zi,steps:Ai}=Ci("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:ki,!0),Ri=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Di=(()=>new Set(Ri))(),Mi=new Set(["width","height","top","left","right","bottom",...Ri]);function Li(e,t){-1===e.indexOf(t)&&e.push(t)}function Oi(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _i{constructor(){this.subscriptions=[]}add(e){return Li(this.subscriptions,e),()=>Oi(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ni(e,t){return t?e*(1e3/t):0}let Fi;function Ii(){Fi=void 0}const Vi={now:()=>(void 0===Fi&&Vi.set(zi.isProcessing||$i.useManualTiming?zi.timestamp:performance.now()),Fi),set:e=>{Fi=e,queueMicrotask(Ii)}},Ui={current:void 0};class Bi{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Vi.now();if(t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&(t.events.change?.notify(t.current),t.dependents))for(const i of t.dependents)i.dirty();n&&t.events.renderRequest?.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Vi.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new _i);const n=this.events[e].add(t);return"change"===e?()=>{n(),Pi.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ui.current&&Ui.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Vi.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Ni(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Hi(e,t){return new Bi(e,t)}const qi=e=>Array.isArray(e);function Wi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Hi(n))}function Yi(e){return qi(e)?e[e.length-1]||0:e}const Ki=e=>Boolean(e&&e.getVelocity);function Gi(e,t){const n=e.getValue("willChange");if(r=n,Boolean(Ki(r)&&r.add))return n.add(t);if(!n&&$i.WillChange){const n=new $i.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}const Xi=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Qi="data-"+Xi("framerAppearId");function Ji(e){return e.props[Qi]}const Zi=(e,t)=>n=>t(e(n)),ea=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Zi)},ta=(e,t,n)=>n>t?t:n<e?e:n,na=e=>1e3*e,ra=e=>e/1e3,ia={layout:0,mainThread:0,waapi:0};const aa=e=>t=>"string"===typeof t&&t.startsWith(e),oa=aa("--"),sa=aa("var(--"),la=e=>!!sa(e)&&ca.test(e.split("/*")[0].trim()),ca=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ua={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},da={...ua,transform:e=>ta(0,1,e)},ma={...ua,default:1},pa=e=>Math.round(1e5*e)/1e5,ha=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const fa=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ga=(e,t)=>n=>Boolean("string"===typeof n&&fa.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),ya=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(ha);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},ba={...ua,transform:e=>Math.round((e=>ta(0,255,e))(e))},va={test:ga("rgb","red"),parse:ya("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+ba.transform(t)+", "+ba.transform(n)+", "+ba.transform(r)+", "+pa(da.transform(i))+")"}};const xa={test:ga("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:va.transform},wa=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Sa=wa("deg"),ka=wa("%"),$a=wa("px"),Ea=wa("vh"),ja=wa("vw"),Ca=(()=>({...ka,parse:e=>ka.parse(e)/100,transform:e=>ka.transform(100*e)}))(),Pa={test:ga("hsl","hue"),parse:ya("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+ka.transform(pa(n))+", "+ka.transform(pa(r))+", "+pa(da.transform(i))+")"}},Ta={test:e=>va.test(e)||xa.test(e)||Pa.test(e),parse:e=>va.test(e)?va.parse(e):Pa.test(e)?Pa.parse(e):xa.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?va.transform(e):Pa.transform(e)},za=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Aa="number",Ra="color",Da=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ma(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(Da,(e=>(Ta.test(e)?(r.color.push(a),i.push(Ra),n.push(Ta.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(Aa),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:r,types:i}}function La(e){return Ma(e).values}function Oa(e){const{split:t,types:n}=Ma(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===Aa?pa(e[a]):t===Ra?Ta.transform(e[a]):e[a]}return i}}const _a=e=>"number"===typeof e?0:e;const Na={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(ha)?.length||0)+(e.match(za)?.length||0)>0},parse:La,createTransformer:Oa,getAnimatableNone:function(e){const t=La(e);return Oa(e)(t.map(_a))}};function Fa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ia(e,t){return n=>n>0?t:e}const Va=(e,t,n)=>e+(t-e)*n,Ua=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ba=[xa,va,Pa];function Ha(e){const t=(e=>Ba.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Pa&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=Fa(i,e,t+1/3),o=Fa(i,e,t),s=Fa(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const qa=(e,t)=>{const n=Ha(e),r=Ha(t);if(!n||!r)return Ia(e,t);const i={...n};return e=>(i.red=Ua(n.red,r.red,e),i.green=Ua(n.green,r.green,e),i.blue=Ua(n.blue,r.blue,e),i.alpha=Va(n.alpha,r.alpha,e),va.transform(i))},Wa=new Set(["none","hidden"]);function Ya(e,t){return n=>Va(e,t,n)}function Ka(e){return"number"===typeof e?Ya:"string"===typeof e?la(e)?Ia:Ta.test(e)?qa:Qa:Array.isArray(e)?Ga:"object"===typeof e?Ta.test(e)?qa:Xa:Ia}function Ga(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>Ka(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Xa(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Ka(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const Qa=(e,t)=>{const n=Na.createTransformer(t),r=Ma(e),i=Ma(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Wa.has(e)&&!i.values.length||Wa.has(t)&&!r.values.length?function(e,t){return Wa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):ea(Ga(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):Ia(e,t)};function Ja(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Va(e,t,n);return Ka(e)(e,t)}const Za=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return Pi.update(t,e)},stop:()=>Ti(t),now:()=>zi.isProcessing?zi.timestamp:Vi.now()}},eo=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(a/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`},to=2e4;function no(e){let t=0;let n=e.next(t);for(;!n.done&&t<to;)t+=50,n=e.next(t);return t>=to?1/0:t}function ro(e,t,n){const r=Math.max(t-5,0);return Ni(n-e(r),t-r)}const io={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ao=.001;function oo(e){let t,n,{duration:r=io.duration,bounce:i=io.bounce,velocity:a=io.velocity,mass:o=io.mass}=e;na(io.maxDuration);let s=1-i;s=ta(io.minDamping,io.maxDamping,s),r=ta(io.minDuration,io.maxDuration,ra(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=lo(e,s),l=Math.exp(-n);return ao-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=lo(Math.pow(e,2),s);return(-t(e)+ao>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<so;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=na(r),isNaN(l))return{stiffness:io.stiffness,damping:io.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const so=12;function lo(e,t){return e*Math.sqrt(1-t*t)}const co=["duration","bounce"],uo=["stiffness","damping","mass"];function mo(e,t){return t.some((t=>void 0!==e[t]))}function po(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:io.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:io.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:m,isResolvedFromDuration:p}=function(e){let t={velocity:io.velocity,stiffness:io.stiffness,damping:io.damping,mass:io.mass,isResolvedFromDuration:!1,...e};if(!mo(e,uo)&&mo(e,co))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*ta(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:io.mass,stiffness:i,damping:a}}else{const n=oo(e);t={...t,...n,mass:io.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-ra(n.velocity||0)}),h=m||0,f=c/(2*Math.sqrt(l*u)),g=o-a,y=ra(Math.sqrt(l/u)),b=Math.abs(g)<5;let v;if(r||(r=b?io.restSpeed.granular:io.restSpeed.default),i||(i=b?io.restDelta.granular:io.restDelta.default),f<1){const e=lo(y,f);v=t=>{const n=Math.exp(-f*y*t);return o-n*((h+f*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)v=e=>o-Math.exp(-y*e)*(g+(h+y*g)*e);else{const e=y*Math.sqrt(f*f-1);v=t=>{const n=Math.exp(-f*y*t),r=Math.min(e*t,300);return o-n*((h+f*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:p&&d||null,next:e=>{const t=v(e);if(p)s.done=e>=d;else{let n=0===e?h:0;f<1&&(n=0===e?na(h):ro(v,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(no(x),to),t=eo((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function ho(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const m=t[0],p={done:!1,value:m},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let f=r*n;const g=m+f,y=void 0===s?g:s(g);y!==g&&(f=y-m);const b=e=>-f*Math.exp(-e/i),v=e=>y+b(e),x=e=>{const t=b(e),n=v(e);p.done=Math.abs(t)<=u,p.value=p.done?y:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(p.value)&&(w=e,S=po({keyframes:[p.value,h(p.value)],velocity:ro(v,e,p.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,x(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&x(e),p)}}}po.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(no(n),to);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:ra(r)}}(e,100,po);return e.ease=t.ease,e.duration=na(t.duration),e.type="keyframes",e};const fo=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function go(e,t,n,r){if(e===t&&n===r)return ki;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=fo(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:fo(i(e),t,r)}const yo=go(.42,0,1,1),bo=go(0,0,.58,1),vo=go(.42,0,.58,1),xo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,wo=e=>t=>1-e(1-t),So=go(.33,1.53,.69,.99),ko=wo(So),$o=xo(ko),Eo=e=>(e*=2)<1?.5*ko(e):.5*(2-Math.pow(2,-10*(e-1))),jo=e=>1-Math.sin(Math.acos(e)),Co=wo(jo),Po=xo(jo),To=e=>Array.isArray(e)&&"number"===typeof e[0],zo={linear:ki,easeIn:yo,easeInOut:vo,easeOut:bo,circIn:jo,circInOut:Po,circOut:Co,backIn:ko,backInOut:$o,backOut:So,anticipate:Eo},Ao=e=>{if(To(e)){e.length;const[t,n,r,i]=e;return go(t,n,r,i)}return"string"===typeof e?zo[e]:e},Ro=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function Do(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||$i.mix||Ja,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||ki:t;n=ea(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Ro(e[r],e[r+1],n);return s[r](i)};return n?t=>c(ta(e[0],e[a-1],t)):c}function Mo(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ro(0,t,r);e.push(Va(n,1,i))}}(t,e.length-1),t}function Lo(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Ao):Ao(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Mo(n),t),l=Do(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map((()=>u||vo)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Oo=e=>null!==e;function _o(e,t,n){let{repeat:r,repeatType:i="loop"}=t,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const o=e.filter(Oo),s=a<0||r&&"loop"!==i&&r%2===1?0:o.length-1;return s&&void 0!==n?n:o[s]}const No={decay:ho,inertia:ho,tween:Lo,keyframes:Lo,spring:po};function Fo(e){"string"===typeof e.type&&(e.type=No[e.type])}class Io{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise((e=>{this.resolve=e}))}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Vo=e=>e/100;class Uo extends Io{constructor(e){var t;super(),t=this,this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=function(){if(!(arguments.length>0&&void 0!==arguments[0])||arguments[0]){const{motionValue:e}=t.options;e&&e.updatedAt!==Vi.now()&&t.tick(Vi.now())}t.isStopped=!0,"idle"!==t.state&&(t.teardown(),t.options.onStop?.())},ia.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;Fo(e);const{type:t=Lo,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e;let{keyframes:o}=e;const s=t||Lo;s!==Lo&&"number"!==typeof o[0]&&(this.mixKeyframes=ea(Vo,Ja(o[0],o[1])),o=[0,100]);const l=s({...e,keyframes:o});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=no(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:m,type:p,onUpdate:h,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let b=this.currentTime,v=n;if(u){const e=Math.min(this.currentTime,r)/o;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,u+1);Boolean(t%2)&&("reverse"===d?(n=1-n,m&&(n-=m/o)):"mirror"===d&&(v=a)),b=ta(0,1,n)*o}const x=y?{done:!1,value:c[0]}:v.next(b);i&&(x.value=i(x.value));let{done:w}=x;y||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&p!==ho&&(x.value=_o(c,this.options,f,this.speed)),h&&h(x.value),S&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return ra(this.calculatedDuration)}get time(){return ra(this.currentTime)}set time(e){e=na(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Vi.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ra(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Za,startTime:t}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vi.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,ia.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}const Bo=e=>180*e/Math.PI,Ho=e=>{const t=Bo(Math.atan2(e[1],e[0]));return Wo(t)},qo={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ho,rotateZ:Ho,skewX:e=>Bo(Math.atan(e[1])),skewY:e=>Bo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Wo=e=>((e%=360)<0&&(e+=360),e),Yo=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ko=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Go={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Yo,scaleY:Ko,scale:e=>(Yo(e)+Ko(e))/2,rotateX:e=>Wo(Bo(Math.atan2(e[6],e[5]))),rotateY:e=>Wo(Bo(Math.atan2(-e[2],e[0]))),rotateZ:Ho,rotate:Ho,skewX:e=>Bo(Math.atan(e[4])),skewY:e=>Bo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Xo(e){return e.includes("scale")?1:0}function Qo(e,t){if(!e||"none"===e)return Xo(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Go,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=qo,i=t}if(!i)return Xo(t);const a=r[t],o=i[1].split(",").map(Jo);return"function"===typeof a?a(o):o[a]}function Jo(e){return parseFloat(e.trim())}const Zo=e=>e===ua||e===$a,es=new Set(["x","y","z"]),ts=Ri.filter((e=>!es.has(e)));const ns={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Qo(n,"x")},y:(e,t)=>{let{transform:n}=t;return Qo(n,"y")}};ns.translateX=ns.x,ns.translateY=ns.y;const rs=new Set;let is=!1,as=!1,os=!1;function ss(){if(as){const e=Array.from(rs).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return ts.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;e.getValue(n)?.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}as=!1,is=!1,rs.forEach((e=>e.complete(os))),rs.clear()}function ls(){rs.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(as=!0)}))}class cs{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(rs.add(this),is||(is=!0,Pi.read(ls),Pi.resolveKeyframes(ss))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),rs.delete(this)}cancel(){"scheduled"===this.state&&(rs.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function us(e){let t;return()=>(void 0===t&&(t=e()),t)}const ds=us((()=>void 0!==window.ScrollTimeline)),ms={};function ps(e,t){const n=us(e);return()=>ms[t]??n()}const hs=ps((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Db){return!1}return!0}),"linearEasing"),fs=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},gs={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fs([0,.65,.55,1]),circOut:fs([.55,0,1,.45]),backIn:fs([.31,.01,.66,-.59]),backOut:fs([.33,1.53,.69,.99])};function ys(e,t){return e?"function"===typeof e?hs()?eo(e,t):"ease-out":To(e)?fs(e):Array.isArray(e)?e.map((e=>ys(e,t)||gs.easeOut)):gs[e]:void 0}function bs(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=ys(s,i);Array.isArray(d)&&(u.easing=d),ji.value&&ia.waapi++;const m={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"};c&&(m.pseudoElement=c);const p=e.animate(u,m);return ji.value&&p.finished.finally((()=>{ia.waapi--})),p}function vs(e){return"function"===typeof e&&"applyToOptions"in e}class xs extends Io{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=a,this.options=e,e.type;const l=function(e){let{type:t,...n}=e;return vs(t)&&hs()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}(e);this.animation=bs(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=_o(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(Db){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return ra(Number(e))}get time(){return ra(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=na(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline(e){let{timeline:t,observe:n}=e;return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&ds()?(this.animation.timeline=t,ki):n(this)}}const ws={anticipate:Eo,backInOut:$o,circInOut:Po};function Ss(e){"string"===typeof e.ease&&e.ease in ws&&(e.ease=ws[e.ease])}class ks extends xs{constructor(e){Ss(e),Fo(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const o=new Uo({...a,autoplay:!1}),s=na(this.finishedTime??this.time);t.setWithVelocity(o.sample(s-10).value,o.sample(s).value,10),o.stop()}}const $s=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Na.test(e)&&"0"!==e||e.startsWith("url(")));const Es=new Set(["opacity","clipPath","filter","transform"]),js=us((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class Cs extends Io{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",keyframes:s,name:l,motionValue:c,element:u,...d}=e;super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Vi.now();const m={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,name:l,motionValue:c,element:u,...d},p=u?.KeyframeResolver||cs;this.keyframeResolver=new p(s,((e,t,n)=>this.onKeyframesResolved(e,t,m,!n)),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:a,velocity:o,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=Vi.now(),function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=$s(i,t),s=$s(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||vs(n))&&r)}(e,i,a,o)||(!$i.instantAnimations&&s||c?.(_o(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0);const u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!l&&function(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!si(t?.owner?.current))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return js()&&n&&Es.has(n)&&("transform"!==n||!l)&&!s&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}(u)?new ks({...u,element:u.motionValue.owner.current}):new Uo(u);d.finished.then((()=>this.notifyFinished())).catch(ki),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then((()=>{}))}get animation(){return this._animation||(this.keyframeResolver?.resume(),os=!0,ls(),ss(),os=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Ps=e=>null!==e;const Ts={type:"spring",stiffness:500,damping:25,restSpeed:10},zs={type:"keyframes",duration:.8},As={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Rs=(e,t)=>{let{keyframes:n}=t;return n.length>2?zs:Di.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Ts:As};const Ds=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Si(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=na(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||Object.assign(u,Rs(e,u)),u.duration&&(u.duration=na(u.duration)),u.repeatDelay&&(u.repeatDelay=na(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),($i.instantAnimations||$i.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=function(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(Ps),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}(u.keyframes,s);if(void 0!==e)return void Pi.update((()=>{u.onUpdate(e),u.onComplete()}))}return s.isSync?new Uo(u):new Cs(u)}};function Ms(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Ls(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&Ms(c,u))continue;const i={delay:n,...Si(a||{},u)},o=t.get();if(void 0!==o&&!t.isAnimating&&!Array.isArray(r)&&r===o&&!i.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const t=Ji(e);if(t){const e=window.MotionHandoffAnimation(t,u,Pi);null!==e&&(i.startTime=e,d=!0)}}Gi(e,u),t.start(Ds(u,t,r,e.shouldReduceMotion&&Mi.has(u)?{type:!1}:i,e,d));const m=t.animation;m&&l.push(m)}return o&&Promise.all(l).then((()=>{Pi.update((()=>{o&&function(e,t){const n=wi(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Wi(e,o,Yi(a[o]))}(e,o)}))})),l}function Os(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=wi(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Ls(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(_s).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(Os(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(n.delay)])}function _s(e,t){return e.sortNodePosition(t)}function Ns(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Fs(e){return"string"===typeof e||Array.isArray(e)}const Is=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vs=["initial",...Is],Us=Vs.length;function Bs(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Bs(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Us;n++){const r=Vs[n],i=e.props[r];(Fs(i)||!1===i)&&(t[r]=i)}return t}const Hs=[...Is].reverse(),qs=Is.length;function Ws(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>Os(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=Os(e,t,r);else{const i="function"===typeof t?wi(e,t,r.custom):t;n=Promise.all(Ls(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function Ys(e){let t=Ws(e),n=Xs(),r=!0;const i=t=>(n,r)=>{const i=wi(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=Bs(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<qs;t++){const m=Hs[t],p=n[m],h=void 0!==o[m]?o[m]:s[m],f=Fs(h),g=m===a?p.isActive:null;!1===g&&(d=t);let y=h===s[m]&&h!==o[m]&&f;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),p.protectedKeys={...u},!p.isActive&&null===g||!h&&!p.prevProp||bi(h)||"boolean"===typeof h)continue;const b=Ks(p.prevProp,h);let v=b||m===a&&p.isActive&&!y&&f||t>d&&f,x=!1;const w=Array.isArray(h)?h:[h];let S=w.reduce(i(m),{});!1===g&&(S={});const{prevResolvedValues:k={}}=p,$={...k,...S},E=t=>{v=!0,c.has(t)&&(x=!0,c.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in $){const t=S[e],n=k[e];if(u.hasOwnProperty(e))continue;let r=!1;r=qi(t)&&qi(n)?!Ns(t,n):t!==n,r?void 0!==t&&null!==t?E(e):c.add(e):void 0!==t&&c.has(e)?E(e):p.protectedKeys[e]=!0}p.prevProp=h,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(v=!1);v&&(!(y&&b)||x)&&l.push(...w.map((e=>({animation:e,options:{type:m}}))))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=wi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null})),l.push({animation:t})}let m=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(m=!1),r=!1,m?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,r))),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=Xs(),r=!0}}}function Ks(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Ns(t,e)}function Gs(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xs(){return{animate:Gs(!0),whileInView:Gs(),whileHover:Gs(),whileTap:Gs(),whileDrag:Gs(),whileFocus:Gs(),exit:Gs()}}class Qs{constructor(e){this.isMounted=!1,this.node=e}update(){}}let Js=0;const Zs={animation:{Feature:class extends Qs{constructor(e){super(e),e.animationState||(e.animationState=Ys(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();bi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Qs{constructor(){super(...arguments),this.id=Js++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},el={x:!1,y:!1};function tl(){return el.x||el.y}function nl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const rl=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function il(e){return{point:{x:e.pageX,y:e.pageY}}}function al(e,t,n,r){return nl(e,t,(e=>t=>rl(t)&&e(t,il(t)))(n),r)}function ol(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function sl(e){return e.max-e.min}function ll(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Va(t.min,t.max,e.origin),e.scale=sl(n)/sl(t),e.translate=Va(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function cl(e,t,n,r){ll(e.x,t.x,n.x,r?r.originX:void 0),ll(e.y,t.y,n.y,r?r.originY:void 0)}function ul(e,t,n){e.min=n.min+t.min,e.max=e.min+sl(t)}function dl(e,t,n){e.min=t.min-n.min,e.max=e.min+sl(t)}function ml(e,t,n){dl(e.x,t.x,n.x),dl(e.y,t.y,n.y)}const pl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function hl(e){return[e("x"),e("y")]}function fl(e){return void 0===e||1===e}function gl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!fl(t)||!fl(n)||!fl(r)}function yl(e){return gl(e)||bl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function bl(e){return vl(e.x)||vl(e.y)}function vl(e){return e&&"0%"!==e}function xl(e,t,n){return n+t*(e-n)}function wl(e,t,n,r,i){return void 0!==i&&(e=xl(e,i,r)),xl(e,n,r)+t}function Sl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=wl(e.min,t,n,r,i),e.max=wl(e.max,t,n,r,i)}function kl(e,t){let{x:n,y:r}=t;Sl(e.x,n.translate,n.scale,n.originPoint),Sl(e.y,r.translate,r.scale,r.originPoint)}const $l=.999999999999,El=1.0000000000001;function jl(e,t){e.min=e.min+t,e.max=e.max+t}function Cl(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Sl(e,t,n,Va(e.min,e.max,i),r)}function Pl(e,t){Cl(e.x,t.x,t.scaleX,t.scale,t.originX),Cl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Tl(e,t){return ol(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const zl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Al(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Rl=(e,t)=>Math.abs(e-t);class Dl{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ol(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Rl(e.x,t.x),r=Rl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=zi;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ml(t,this.transformPagePoint),Pi.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Ol("pointercancel"===e.type?this.lastMoveEventInfo:Ml(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!rl(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=Ml(il(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=zi;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Ol(a,this.history)),this.removeListeners=ea(al(this.contextWindow,"pointermove",this.handlePointerMove),al(this.contextWindow,"pointerup",this.handlePointerUp),al(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ti(this.updatePoint)}}function Ml(e,t){return t?{point:t(e.point)}:e}function Ll(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ol(e,t){let{point:n}=e;return{point:n,delta:Ll(n,Nl(t)),offset:Ll(n,_l(t)),velocity:Fl(t,.1)}}function _l(e){return e[0]}function Nl(e){return e[e.length-1]}function Fl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Nl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>na(t)));)n--;if(!r)return{x:0,y:0};const a=ra(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Il(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Vl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Ul=.35;function Bl(e,t,n){return{min:Hl(e,t),max:Hl(e,n)}}function Hl(e,t){return"number"===typeof e?e:e[t]||0}const ql=new WeakMap;class Wl{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Dl(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(il(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?el[a]?null:(el[a]=!0,()=>{el[a]=!1}):el.x||el.y?null:(el.x=el.y=!0,()=>{el.x=el.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hl((e=>{let t=this.getAxisMotionValue(e).get()||0;if(ka.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=sl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&Pi.postRender((()=>i(e,t))),Gi(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>hl((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:zl(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&Pi.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Yl(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?Va(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?Va(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Al(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:Il(e.x,r,a),y:Il(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ul;return!1===e?e=0:!0===e&&(e=Ul),{x:Bl(e,"left","right"),y:Bl(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&hl((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Al(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Tl(e,n),{scroll:i}=t;return i&&(jl(r.x,i.offset.x),jl(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:Vl(e.x,t.x),y:Vl(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=ol(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=hl((o=>{if(!Yl(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Gi(this.visualElement,e),n.start(Ds(e,n,0,t,this.visualElement,!1))}stopAnimation(){hl((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){hl((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){hl((t=>{const{drag:n}=this.getProps();if(!Yl(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-Va(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Al(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};hl((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=sl(e),i=sl(t);return i>r?n=Ro(t.min,t.max-r,e.min):r>i&&(n=Ro(e.min,e.max-i,t.min)),ta(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),hl((t=>{if(!Yl(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Va(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;ql.set(this.visualElement,this);const e=al(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Al(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),Pi.read(t);const i=nl(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(hl((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Ul,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function Yl(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Kl=e=>(t,n)=>{e&&Pi.postRender((()=>e(t,n)))};const{schedule:Gl,cancel:Xl}=Ci(queueMicrotask,!1),Ql=(0,e.createContext)({}),Jl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zl(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ec={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!$a.test(e))return e;e=parseFloat(e)}return`${Zl(e,t.target.x)}% ${Zl(e,t.target.y)}%`}},tc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=Na.parse(e);if(a.length>5)return i;const o=Na.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=Va(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}},nc={};class rc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)nc[t]=e[t],oa(t)&&(nc[t].isCSSVariable=!0)}(ac),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Jl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Pi.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Gl.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ic(t){const[n,r]=pi(),i=(0,e.useContext)(ti);return(0,ei.jsx)(rc,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(Ql),isPresent:n,safeToRemove:r})}const ac={borderRadius:{...ec,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ec,borderTopRightRadius:ec,borderBottomLeftRadius:ec,borderBottomRightRadius:ec,boxShadow:tc};function oc(e){return oi(e)&&"ownerSVGElement"in e}const sc=(e,t)=>e.depth-t.depth;class lc{constructor(){this.children=[],this.isDirty=!1}add(e){Li(this.children,e),this.isDirty=!0}remove(e){Oi(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(sc),this.isDirty=!1,this.children.forEach(e)}}function cc(e,t){const n=Vi.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(Ti(r),e(o-t))};return Pi.setup(r,!0),()=>Ti(r)}function uc(e){return Ki(e)?e.get():e}const dc=["TopLeft","TopRight","BottomLeft","BottomRight"],mc=dc.length,pc=e=>"string"===typeof e?parseFloat(e):e,hc=e=>"number"===typeof e||$a.test(e);function fc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const gc=bc(0,.5,Co),yc=bc(.5,.95,ki);function bc(e,t,n){return r=>r<e?0:r>t?1:n(Ro(e,t,r))}function vc(e,t){e.min=t.min,e.max=t.max}function xc(e,t){vc(e.x,t.x),vc(e.y,t.y)}function wc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Sc(e,t,n,r,i){return e=xl(e-=t,1/n,r),void 0!==i&&(e=xl(e,1/i,r)),e}function kc(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;ka.test(t)&&(t=parseFloat(t),t=Va(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=Va(a.min,a.max,r);e===a&&(s-=t),e.min=Sc(e.min,t,n,s,i),e.max=Sc(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const $c=["x","scaleX","originX"],Ec=["y","scaleY","originY"];function jc(e,t,n,r){kc(e.x,t,$c,n?n.x:void 0,r?r.x:void 0),kc(e.y,t,Ec,n?n.y:void 0,r?r.y:void 0)}function Cc(e){return 0===e.translate&&1===e.scale}function Pc(e){return Cc(e.x)&&Cc(e.y)}function Tc(e,t){return e.min===t.min&&e.max===t.max}function zc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ac(e,t){return zc(e.x,t.x)&&zc(e.y,t.y)}function Rc(e){return sl(e.x)/sl(e.y)}function Dc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Mc{constructor(){this.members=[]}add(e){Li(this.members,e),e.scheduleRender()}remove(e){if(Oi(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Lc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Oc=["","X","Y","Z"],_c={visibility:"hidden"};let Nc=0;function Fc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ic(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Ji(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Pi,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ic(r)}function Vc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=Nc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ji.value&&(Lc.nodes=Lc.calculatedTargetDeltas=Lc.calculatedProjections=0),this.nodes.forEach(Hc),this.nodes.forEach(Qc),this.nodes.forEach(Jc),this.nodes.forEach(qc),ji.addProjectionMetrics&&ji.addProjectionMetrics(Lc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new lc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new _i),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){if(this.instance)return;var n;this.isSVG=oc(e)&&!(oc(n=e)&&"svg"===n.tagName),this.instance=e;const{layoutId:r,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=cc(r,250),Jl.hasAnimatedSinceResize&&(Jl.hasAnimatedSinceResize=!1,this.nodes.forEach(Xc))}))}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&a&&(r||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||iu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!Ac(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...Si(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Xc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ti(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Zc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ic(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Yc);this.isUpdating||this.nodes.forEach(Kc),this.isUpdating=!1,this.nodes.forEach(Gc),this.nodes.forEach(Uc),this.nodes.forEach(Bc),this.clearAllSnapshots();const e=Vi.now();zi.delta=ta(0,1e3/60,e-zi.timestamp),zi.timestamp=e,zi.isProcessing=!0,Ai.update.process(zi),Ai.preRender.process(zi),Ai.render.process(zi),zi.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Wc),this.sharedNodes.forEach(eu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Pi.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Pi.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||sl(this.snapshot.measuredBox.x)||sl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Pc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||yl(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),su((r=n).x),su(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(cu))){const{scroll:e}=this.root;e&&(jl(t.x,e.offset.x),jl(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(xc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&xc(t,e),jl(t.x,i.offset.x),jl(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};xc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Pl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),yl(e.latestValues)&&Pl(n,e.latestValues)}return yl(this.latestValues)&&Pl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};xc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!yl(e.latestValues))continue;gl(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};xc(r,e.measurePageBox()),jc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return yl(this.latestValues)&&jc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==zi.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=zi.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ml(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),xc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,ul(a.x,o.x,s.x),ul(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):xc(this.target,this.layout.layoutBox),kl(this.target,this.targetDelta)):xc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ml(this.relativeTargetOrigin,this.target,e.target),xc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ji.value&&Lc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!gl(this.parent.latestValues)&&!bl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===zi.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;xc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Pl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,kl(e,o)),r&&yl(a.latestValues)&&Pl(e,a.latestValues))}t.x<El&&t.x>$l&&(t.x=1),t.y<El&&t.y>$l&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(wc(this.prevProjectionDelta.x,this.projectionDelta.x),wc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),cl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&Dc(this.projectionDelta.x,this.prevProjectionDelta.x)&&Dc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),ji.value&&Lc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(ru));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;tu(a.x,e.x,n),tu(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ml(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){nu(e.x,t.x,n.x,r),nu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Tc(e.x,t.x)&&Tc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),xc(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=Va(0,n.opacity??1,gc(r)),e.opacityExit=Va(t.opacity??1,0,yc(r))):a&&(e.opacity=Va(t.opacity??1,n.opacity??1,r));for(let o=0;o<mc;o++){const i=`border${dc[o]}Radius`;let a=fc(t,i),s=fc(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||hc(a)===hc(s)?(e[i]=Math.max(Va(pc(a),pc(s),r),0),(ka.test(s)||ka.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Va(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(!1),this.resumingFrom?.currentAnimation?.stop(!1),this.pendingAnimation&&(Ti(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Pi.update((()=>{Jl.hasAnimatedSinceResize=!0,ia.layout++,this.motionValue||(this.motionValue=Hi(0)),this.currentAnimation=function(e,t,n){const r=Ki(e)?e:Hi(e);return r.start(Ds("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ia.layout--},onComplete:()=>{ia.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&lu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=sl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=sl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}xc(t,n),Pl(t,i),cl(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Mc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Fc("z",e,r,this.animationValues);for(let i=0;i<Oc.length;i++)Fc(`rotate${Oc[i]}`,e,r,this.animationValues),Fc(`skew${Oc[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return _c;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=uc(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=uc(e?.pointerEvents)||""),this.hasProjected&&!yl(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const i=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i),n&&(t.transform=n(i,t.transform));const{x:a,y:o}=this.projectionDelta;t.transformOrigin=`${100*a.origin}% ${100*o.origin}% 0`,r.animationValues?t.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:t.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const s in nc){if(void 0===i[s])continue;const{correct:e,applyTo:n,isCSSVariable:a}=nc[s],o="none"===t.transform?i[s]:e(i[s],r);if(n){const e=n.length;for(let r=0;r<e;r++)t[n[r]]=o}else a?this.options.visualElement.renderState.vars[s]=o:t[s]=o}return this.options.layoutId&&(t.pointerEvents=r===this?uc(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop(!1))),this.root.nodes.forEach(Yc),this.root.sharedNodes.clear()}}}function Uc(e){e.updateLayout()}function Bc(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?hl((e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=sl(r);r.min=n[e].min,r.max=r.min+i})):lu(i,t.layoutBox,n)&&hl((r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=sl(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};cl(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?cl(s,e.applyTransform(r,!0),t.measuredBox):cl(s,n,t.layoutBox);const l=!Pc(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};ml(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};ml(s,n,a.layoutBox),Ac(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Hc(e){ji.value&&Lc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Wc(e){e.clearSnapshot()}function Yc(e){e.clearMeasurements()}function Kc(e){e.isLayoutDirty=!1}function Gc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Qc(e){e.resolveTargetDelta()}function Jc(e){e.calcProjection()}function Zc(e){e.resetSkewAndRotation()}function eu(e){e.removeLeadSnapshot()}function tu(e,t,n){e.translate=Va(t.translate,0,n),e.scale=Va(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function nu(e,t,n,r){e.min=Va(t.min,n.min,r),e.max=Va(t.max,n.max,r)}function ru(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const iu={duration:.45,ease:[.4,0,.1,1]},au=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ou=au("applewebkit/")&&!au("chrome/")?Math.round:ki;function su(e){e.min=ou(e.min),e.max=ou(e.max)}function lu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Rc(t),i=Rc(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function cu(e){return e!==e.root&&e.scroll?.wasRoot}const uu=Vc({attachResizeListener:(e,t)=>nl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),du={current:void 0},mu=Vc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!du.current){const e=new uu({});e.mount(window),e.setOptions({layoutScroll:!0}),du.current=e}return du.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),pu={pan:{Feature:class extends Qs{constructor(){super(...arguments),this.removePointerDownListener=ki}onPointerDown(e){this.session=new Dl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:zl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Kl(e),onStart:Kl(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Pi.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=al(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Qs{constructor(e){super(e),this.removeGroupControls=ki,this.removeListeners=ki,this.controls=new Wl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ki}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:mu,MeasureLayout:ic}};function hu(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function fu(e){return!("touch"===e.pointerType||tl())}function gu(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&Pi.postRender((()=>i(t,il(t))))}const yu=(e,t)=>!!t&&(e===t||yu(e,t.parentElement)),bu=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const vu=new WeakSet;function xu(e){return t=>{"Enter"===t.key&&e(t)}}function wu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Su(e){return rl(e)&&!tl()}function ku(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=hu(e,n),o=e=>{const r=e.currentTarget;if(!Su(e))return;vu.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),vu.has(r)&&vu.delete(r),Su(e)&&"function"===typeof a&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||yu(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),si(e)&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=xu((()=>{if(vu.has(n))return;wu(n,"down");const e=xu((()=>{wu(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>wu(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i))),t=e,bu.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),a}function $u(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&Pi.postRender((()=>i(t,il(t))))}const Eu=new WeakMap,ju=new WeakMap,Cu=e=>{const t=Eu.get(e.target);t&&t(e)},Pu=e=>{e.forEach(Cu)};function Tu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;ju.has(r)||ju.set(r,{});const i=ju.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Pu,{root:t,...n})),i[a]}(t);return Eu.set(e,n),r.observe(e),()=>{Eu.delete(e),r.unobserve(e)}}const zu={some:0,all:1};const Au={inView:{Feature:class extends Qs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:zu[r]};return Tu(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Qs{mount(){const{current:e}=this.node;e&&(this.unmount=ku(e,((e,t)=>($u(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return $u(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Qs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Db){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ea(nl(this.node.current,"focus",(()=>this.onFocus())),nl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Qs{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=hu(e,n),o=e=>{if(!fu(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{fu(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach((e=>{e.addEventListener("pointerenter",o,i)})),a}(e,((e,t)=>(gu(this.node,t,"Start"),e=>gu(this.node,e,"End")))))}unmount(){}}}},Ru={layout:{ProjectionNode:mu,MeasureLayout:ic}},Du=(0,e.createContext)({strict:!1}),Mu=(0,e.createContext)({});function Lu(e){return bi(e.animate)||Vs.some((t=>Fs(e[t])))}function Ou(e){return Boolean(Lu(e)||e.variants)}function _u(t){const{initial:n,animate:r}=function(e,t){if(Lu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Fs(t)?t:void 0,animate:Fs(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Mu));return(0,e.useMemo)((()=>({initial:n,animate:r})),[Nu(n),Nu(r)])}function Nu(e){return Array.isArray(e)?e.join(" "):e}const Fu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Iu={};for(const n in Fu)Iu[n]={isEnabled:e=>Fu[n].some((t=>!!e[t]))};const Vu=Symbol.for("motionComponentSymbol");function Uu(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Al(r)&&(r.current=e))}),[n])}function Bu(t,n,r,i,a){const{visualElement:o}=(0,e.useContext)(Mu),s=(0,e.useContext)(Du),l=(0,e.useContext)(ai),c=(0,e.useContext)(li).reducedMotion,u=(0,e.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(t,{visualState:n,parent:o,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,m=(0,e.useContext)(Ql);!d||d.projection||!a||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Hu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Al(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,a,m);const p=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&p.current&&d.update(r,l)}));const h=r[Qi],f=(0,e.useRef)(Boolean(h)&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return ii((()=>{d&&(p.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Gl.render(d.render),f.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!f.current&&d.animationState&&d.animationState.animateChanges(),f.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(h)})),f.current=!1))})),d}function Hu(e){if(e)return!1!==e.options.allowProjection?e.projection:Hu(e.parent)}function qu(t){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=t;function s(t,n){let s;const l={...(0,e.useContext)(li),...t,layoutId:Wu(t)},{isStatic:c}=l,u=_u(t),d=a(t,c);if(!c&&ri){!function(){(0,e.useContext)(Du).strict;0}();const t=function(e){const{drag:t,layout:n}=Iu;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=Bu(o,d,l,r,t.ProjectionNode)}return(0,ei.jsxs)(Mu.Provider,{value:u,children:[s&&u.visualElement?(0,ei.jsx)(s,{visualElement:u.visualElement,...l}):null,i(o,t,Uu(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)Iu[t]={...Iu[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof o?o:`create(${o.displayName??o.name??""})`}`;const l=(0,e.forwardRef)(s);return l[Vu]=o,l}function Wu(t){let{layoutId:n}=t;const r=(0,e.useContext)(ti).id;return r&&void 0!==n?r+"-"+n:n}function Yu(e,t){let{layout:n,layoutId:r}=t;return Di.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!nc[e]||"opacity"===e)}const Ku=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Gu={...ua,transform:Math.round},Xu={borderWidth:$a,borderTopWidth:$a,borderRightWidth:$a,borderBottomWidth:$a,borderLeftWidth:$a,borderRadius:$a,radius:$a,borderTopLeftRadius:$a,borderTopRightRadius:$a,borderBottomRightRadius:$a,borderBottomLeftRadius:$a,width:$a,maxWidth:$a,height:$a,maxHeight:$a,top:$a,right:$a,bottom:$a,left:$a,padding:$a,paddingTop:$a,paddingRight:$a,paddingBottom:$a,paddingLeft:$a,margin:$a,marginTop:$a,marginRight:$a,marginBottom:$a,marginLeft:$a,backgroundPositionX:$a,backgroundPositionY:$a,...{rotate:Sa,rotateX:Sa,rotateY:Sa,rotateZ:Sa,scale:ma,scaleX:ma,scaleY:ma,scaleZ:ma,skew:Sa,skewX:Sa,skewY:Sa,distance:$a,translateX:$a,translateY:$a,translateZ:$a,x:$a,y:$a,z:$a,perspective:$a,transformPerspective:$a,opacity:da,originX:Ca,originY:Ca,originZ:$a},zIndex:Gu,fillOpacity:da,strokeOpacity:da,numOctaves:Gu},Qu={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ju=Ri.length;function Zu(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(Di.has(l))o=!0;else if(oa(l))i[l]=e;else{const t=Ku(e,Xu[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<Ju;a++){const o=Ri[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=Ku(s,Xu[o]);l||(i=!1,r+=`${Qu[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}const ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function td(e,t,n){for(const r in t)Ki(t[r])||Yu(r,n)||(e[r]=t[r])}function nd(t,n){const r={};return td(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Zu(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function rd(e,t){const n={},r=nd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const id={offset:"stroke-dashoffset",array:"stroke-dasharray"},ad={offset:"strokeDashoffset",array:"strokeDasharray"};function od(e,t,n,r,i){let{attrX:a,attrY:o,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d}=t;if(Zu(e,d,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:m,style:p}=e;m.transform&&(p.transform=m.transform,delete m.transform),(p.transform||m.transformOrigin)&&(p.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),p.transform&&(p.transformBox=i?.transformBox??"fill-box",delete m.transformBox),void 0!==a&&(m.x=a),void 0!==o&&(m.y=o),void 0!==s&&(m.scale=s),void 0!==l&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?id:ad;e[a.offset]=$a.transform(-r);const o=$a.transform(t),s=$a.transform(n);e[a.array]=`${o} ${s}`}(m,l,c,u,!1)}const sd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),ld=e=>"string"===typeof e&&"svg"===e.toLowerCase();function cd(t,n,r,i){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return od(e,n,ld(i),t.transformTemplate,t.style),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};td(e,t.style,t),a.style={...e,...a.style}}return a}const ud=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ud.has(e)}let md=e=>!dd(e);try{(pd=require("@emotion/is-prop-valid").default)&&(md=e=>e.startsWith("on")?!dd(e):pd(e))}catch{}var pd;const hd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fd(e){return"string"===typeof e&&!e.includes("-")&&!!(hd.indexOf(e)>-1||/[A-Z]/u.test(e))}function gd(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(fd(n)?cd:rd)(r,s,o,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(md(i)||!0===n&&dd(i)||!t&&!dd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:i}:{},{children:d}=r,m=(0,e.useMemo)((()=>Ki(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:m})}}const yd=t=>(n,r)=>{const i=(0,e.useContext)(Mu),a=(0,e.useContext)(ai),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a}=e;return{latestValues:bd(t,n,r,i),renderState:a()}}(t,n,i,a);return r?o():ni(o)};function bd(e,t,n,r){const i={},a=r(e,{});for(const m in a)i[m]=uc(a[m]);let{initial:o,animate:s}=e;const l=Lu(e),c=Ou(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!bi(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=xi(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}function vd(e,t,n){const{style:r}=e,i={};for(const a in r)(Ki(r[a])||t.style&&Ki(t.style[a])||Yu(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}const xd={useVisualState:yd({scrapeMotionValuesFromProps:vd,createRenderState:ed})};function wd(e,t,n){const r=vd(e,t,n);for(const i in e)if(Ki(e[i])||Ki(t[i])){r[-1!==Ri.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const Sd={useVisualState:yd({scrapeMotionValuesFromProps:wd,createRenderState:sd})};function kd(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return qu({...fd(n)?Sd:xd,preloadedFeatures:e,useRender:gd(r),createVisualElement:t,Component:n})}}const $d=e=>t=>t.test(e),Ed=[ua,$a,ka,Sa,ja,Ea,{test:e=>"auto"===e,parse:e=>e}],jd=e=>Ed.find($d(e)),Cd=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Pd=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Td(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=Pd.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return Cd(e)?parseFloat(e):e}return la(i)?Td(i,t,n+1):i}const zd=e=>/^0[^.\s]+$/u.test(e);const Ad=new Set(["brightness","contrast","saturate","opacity"]);function Rd(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(ha)||[];if(!r)return e;const i=n.replace(r,"");let a=Ad.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const Dd=/\b([a-z-]*)\(.*?\)/gu,Md={...Na,getAnimatableNone:e=>{const t=e.match(Dd);return t?t.map(Rd).join(" "):e}},Ld={...Xu,color:Ta,backgroundColor:Ta,outlineColor:Ta,fill:Ta,stroke:Ta,borderColor:Ta,borderTopColor:Ta,borderRightColor:Ta,borderBottomColor:Ta,borderLeftColor:Ta,filter:Md,WebkitFilter:Md},Od=e=>Ld[e];function _d(e,t){let n=Od(e);return n!==Md&&(n=Na),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Nd=new Set(["auto","none","0"]);class Fd extends cs{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),la(n))){const r=Td(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Mi.has(n)||2!==e.length)return;const[r,i]=e,a=jd(r),o=jd(i);if(a!==o)if(Zo(a)&&Zo(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else ns[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)(null===e[i]||("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||zd(r)))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!Nd.has(t)&&Ma(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=_d(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ns[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=ns[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const Id=[...Ed,Ta,Na],Vd={current:null},Ud={current:!1};const Bd=new WeakMap;const Hd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=cs,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Vi.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Pi.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Lu(n),this.isVariantNode=Ou(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in d){const e=d[m];void 0!==l[m]&&Ki(e)&&e.set(l[m],!1)}}mount(e){this.current=e,Bd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Ud.current||function(){if(Ud.current=!0,ri)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vd.current=e.matches;e.addListener(t),t()}else Vd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Vd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ti(this.notifyUpdate),Ti(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Di.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Pi.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Iu){const t=Iu[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Hd.length;n++){const t=Hd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Ki(i))e.addValue(r,i);else if(Ki(a))e.addValue(r,Hi(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,Hi(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Hi(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(Cd(n)||zd(n))?n=parseFloat(n):!(e=>Id.find($d(e)))(n)&&Na.test(t)&&(n=_d(e,t)),this.setBaseTarget(e,Ki(n)?n.get():n)),Ki(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=xi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||Ki(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new _i),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Wd extends qd{constructor(){super(...arguments),this.KeyframeResolver=Fd}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ki(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}function Yd(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}class Kd extends Wd{constructor(){super(...arguments),this.type="html",this.renderInstance=Yd}readValueFromInstance(e,t){if(Di.has(t))return this.projection?.isProjecting?Xo(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Qo(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(oa(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Tl(e,n)}build(e,t,n){Zu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return vd(e,t,n)}}const Gd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class Xd extends Wd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pl}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Di.has(t)){const e=Od(t);return e&&e.default||0}return t=Gd.has(t)?t:Xi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return wd(e,t,n)}build(e,t,n){od(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){Yd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Gd.has(i)?i:Xi(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=ld(e.tagName),super.mount(e)}}const Qd=yi(kd({...Zs,...Au,...pu,...Ru},((t,n)=>fd(t)?new Xd(n):new Kd(n,{allowProjection:t!==e.Fragment})))),Jd=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Kr.apply(void 0,lt([t],n,!1)),a="sc-global-".concat(Rn(JSON.stringify(i))),o=new Jr(i,a),s=function(t){var n=Ar(),r=e.useContext(Ur),i=e.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,bn,n,i);else{var a=st(st({},t),{theme:wn(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return e.memo(s)})`
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
`,Zd=Qr.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  position: relative;
  background: transparent;
  
  /* Remove any height constraints that might interfere with scrolling */
  height: auto;
  flex: 1;
`,em=Qr.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
  gap: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.borderRadius.xl} ${e=>e.theme.borderRadius.xl} 0 0;
  border-bottom: 1px solid ${e=>e.theme.colors.borderLight};
`,tm=(Qr.main`
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
`,Qr.h1`
  font-size: ${e=>e.theme.fontSizes["4xl"]};
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.display};
  letter-spacing: -0.02em;
  
  /* Optional gradient text effect */
  ${e=>e.gradient&&`\n    background: ${e.theme.colors.primary};\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  `}
`),nm=Qr.h2`
  font-size: ${e=>e.theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.textLight};
  line-height: 1.5;
`,rm=Qr.button`
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
`,im=Qr(et)`
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
`,am=Qr.div`
  flex: 1;
  height: 8px;
  background: ${e=>e.theme.colors.backgroundDark};
  border-radius: ${e=>e.theme.borderRadius.full};
  display: flex;
  overflow: hidden;
  margin-left: ${e=>e.theme.spacing.md};
`,om=Qr.div`
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
`,sm=(Qr.div`
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
`,Qr.div`
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
`,Qr.div`
  width: 100%;
  margin: ${e=>e.theme.spacing.xl} 0;
  padding: ${e=>e.theme.spacing.md} 0;
`,Qr.input.attrs({type:"range"})`
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
`,Qr.div`
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
`,Qr.div`
  display: flex;
  border-radius: ${e=>e.theme.borderRadius.xl};
  overflow: hidden;
  margin: ${e=>e.theme.spacing.xl} 0;
  background: ${e=>e.theme.colors.backgroundDark};
  padding: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`,Qr.button`
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
`,Qr.hr`
  width: 100%;
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, ${e=>e.theme.colors.border}, transparent);
  margin: ${e=>e.theme.spacing.lg} 0;
`,Qr.div`
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
`,Qr.p`
  color: ${e=>e.theme.colors.textLighter};
  font-size: ${e=>e.theme.fontSizes.sm};
  margin-top: ${e=>e.theme.spacing.md};
  text-align: center;
  line-height: 1.5;
`,Qr.div`
  margin-right: ${e=>e.theme.spacing.sm};
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.primarySolid};
`,Qr.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${e=>e.theme.spacing.sm} 0;
  gap: ${e=>e.theme.spacing.sm};
`,Qr.div`
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
`,Qr.div`
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
`,Qr.button`
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
`,Qr(Zd)`
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
`),lm=Qr(Zd)`
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
`,cm=Qr(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.lg};
`,um=Qr(Qd.div)`
    margin-bottom: ${e=>e.theme.spacing["2xl"]};
    position: relative;
`,dm=Qr.div`
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
`,mm=Qr(Qd.h1)`
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
`,pm=Qr(Qd.p)`
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
`,hm=Qr(Qd(rm))`
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
`,fm=Qr(Qd.div)`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.md};
    margin: ${e=>e.theme.spacing["2xl"]} 0;
    max-width: 300px;
`,gm=Qr.div`
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
`,ym=()=>{const e=Z(),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,ei.jsx)(lm,{children:(0,ei.jsxs)(cm,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",children:[(0,ei.jsx)(um,{variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.8,ease:"easeOut"}}},children:(0,ei.jsx)(dm,{children:(0,ei.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,ei.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})})}),(0,ei.jsx)(mm,{variants:t,children:"HEALTHY"}),(0,ei.jsx)(pm,{variants:t,children:"Tu compa\xf1ero inteligente para un estilo de vida saludable"}),(0,ei.jsxs)(fm,{variants:t,children:[(0,ei.jsxs)(gm,{children:[(0,ei.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,ei.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),"Entrenamientos personalizados"]}),(0,ei.jsxs)(gm,{children:[(0,ei.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,ei.jsx)("path",{d:"M21 10c-2 0-3-1-3-3s1-3 3-3 3 1 3 3-1 3-3 3zM3 10c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3zM12 22c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3z"})}),"Recetas nutritivas y deliciosas"]}),(0,ei.jsxs)(gm,{children:[(0,ei.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,ei.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,ei.jsx)("path",{d:"M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"})]}),"Seguimiento de progreso"]})]}),(0,ei.jsx)(hm,{onClick:()=>{e("/goal")},variants:t,whileHover:{scale:1.05},whileTap:{scale:.98},children:"Empezar mi viaje"})]})})},bm=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,vm=Qr(Qd.div)`
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
`,xm=Qr(Qd.div)`
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
`,wm=Qr.div`
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
`,Sm=Qr.div`
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
`,km=Qr.div`
    padding: 125px 0;
    transform: translateY(${e=>e.offset}px);
    transition: transform ${e=>e.isAnimating?"0.3s ease-out":"0s"};
`,$m=Qr.div`
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
`,Em=Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`,jm=Qr(rm)`
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
`,Cm=()=>{const t=Z(),[n,r]=(0,e.useState)(170),[i]=(0,e.useState)("cm"),[a,o]=(0,e.useState)(0),[s,l]=(0,e.useState)(!1),[c,u]=(0,e.useState)(!1),[d,m]=(0,e.useState)(0),[p,h]=(0,e.useState)(0),[f,g]=(0,e.useState)(0),[y,b]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),w=(0,e.useRef)(null),S=((0,e.useRef)(null),Array.from({length:131},((e,t)=>t+100))),k=(0,e.useCallback)((e=>{const t=Math.round(-e/50),n=Math.max(0,Math.min(S.length-1,t));return S[n]}),[S]),$=(0,e.useCallback)((e=>50*-S.indexOf(e)),[S]),E=(0,e.useCallback)((()=>{const e=k(a),t=$(e);l(!0),o(t),r(e),setTimeout((()=>l(!1)),300)}),[a,k,$]),j=e=>{if(!c)return;const t=Date.now(),n=p+(e-d),i=t-y;if(i>0){g((e-v)/i)}b(t),x(e);const a=50*-(S.length-1),s=Math.max(a,Math.min(0,n));o(s),r(k(s))},C=e=>{j(e.clientY)},P=e=>{e.preventDefault(),j(e.touches[0].clientY)},T=()=>{if(c)if(u(!1),Math.abs(f)>.5){const e=k(a+100*f),t=$(e);l(!0),o(t),r(e),setTimeout((()=>l(!1)),300)}else E()};(0,e.useEffect)((()=>{const e=()=>T(),t=e=>C(e),n=()=>T(),r=e=>P(e);return c&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",n)}}),[c,C,P,T]),(0,e.useEffect)((()=>{o($(n))}),[]);const z={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,ei.jsx)(bm,{children:(0,ei.jsxs)(Qd.div,{variants:z,children:[(0,ei.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1l es tu altura?"}),(0,ei.jsx)(nm,{children:"Desliza o usa la rueda para seleccionar tu altura"})]})}),(0,ei.jsxs)(vm,{variants:z,children:[(0,ei.jsxs)(xm,{initial:{scale:.8},animate:{scale:1},transition:{type:"spring",stiffness:200},children:[n,(0,ei.jsx)("span",{className:"unit",children:i})]},n),(0,ei.jsx)(wm,{children:(0,ei.jsx)(Sm,{ref:w,onMouseDown:e=>{u(!0),m(e.clientY),h(a),g(0),b(Date.now()),x(e.clientY),l(!1)},onTouchStart:e=>{u(!0),m(e.touches[0].clientY),h(a),g(0),b(Date.now()),x(e.touches[0].clientY),l(!1)},onWheel:e=>{e.preventDefault();const t=e.deltaY>0?1:-1,i=S.indexOf(n),a=Math.max(0,Math.min(S.length-1,i+t)),s=S[a],c=$(s);l(!0),o(c),r(s),setTimeout((()=>l(!1)),200)},children:(0,ei.jsx)(km,{offset:a,isAnimating:s,children:S.map(((e,t)=>{const r=S.indexOf(n),i=t===r,a=1===Math.abs(t-r);return(0,ei.jsx)($m,{isSelected:i,isAdjacent:a,children:e},e)}))})})})]}),(0,ei.jsx)(Em,{children:(0,ei.jsx)(Qd.div,{variants:z,children:(0,ei.jsx)(jm,{onClick:()=>{t("/weight")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Pm=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,Tm=Qr(Qd.div)`
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
`,zm=Qr(Qd.div)`
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
`,Am=Qr.div`
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
`,Rm=Qr.div`
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
`,Dm=Qr.div`
    padding: 125px 0;
    transform: translateY(${e=>e.offset}px);
    transition: transform ${e=>e.isAnimating?"0.3s ease-out":"0s"};
`,Mm=Qr.div`
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
`,Lm=(Qr(Qd.div)`
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
`,Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),Om=Qr(rm)`
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
`,_m=()=>{const t=Z(),[n,r]=(0,e.useState)(70),[i]=(0,e.useState)("kg"),[a,o]=(0,e.useState)(0),[s,l]=(0,e.useState)(!1),[c,u]=(0,e.useState)(!1),[d,m]=(0,e.useState)(0),[p,h]=(0,e.useState)(0),[f,g]=(0,e.useState)(0),[y,b]=(0,e.useState)(0),[v,x]=(0,e.useState)(0),w=(0,e.useRef)(null),S=Array.from({length:341},((e,t)=>30+.5*t)),k=(0,e.useCallback)((e=>{const t=Math.round(-e/50),n=Math.max(0,Math.min(S.length-1,t));return S[n]}),[S]),$=(0,e.useCallback)((e=>{const t=S.findIndex((t=>Math.abs(t-e)<.01));return 50*-t}),[S]),E=(0,e.useCallback)((()=>{const e=k(a),t=$(e);l(!0),o(t),r(e),setTimeout((()=>l(!1)),300)}),[a,k,$]),j=e=>{if(!c)return;const t=Date.now(),n=p+(e-d),i=t-y;if(i>0){g((e-v)/i)}b(t),x(e);const a=50*-(S.length-1),s=Math.max(a,Math.min(0,n));o(s),r(k(s))},C=e=>{j(e.clientY)},P=e=>{e.preventDefault(),j(e.touches[0].clientY)},T=()=>{if(c)if(u(!1),Math.abs(f)>.5){const e=k(a+100*f),t=$(e);l(!0),o(t),r(e),setTimeout((()=>l(!1)),300)}else E()};(0,e.useEffect)((()=>{const e=()=>T(),t=e=>C(e),n=()=>T(),r=e=>P(e);return c&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",n)}}),[c,C,P,T]),(0,e.useEffect)((()=>{o($(n))}),[]);const z={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,ei.jsx)(Pm,{children:(0,ei.jsxs)(Qd.div,{variants:z,children:[(0,ei.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1nto pesas?"}),(0,ei.jsx)(nm,{children:"Desliza o usa la rueda para seleccionar tu peso"})]})}),(0,ei.jsxs)(Tm,{variants:z,children:[(0,ei.jsxs)(zm,{initial:{scale:.8},animate:{scale:1},transition:{type:"spring",stiffness:200},children:[n.toFixed(1),(0,ei.jsx)("span",{className:"unit",children:i})]},n),(0,ei.jsx)(Am,{children:(0,ei.jsx)(Rm,{ref:w,onMouseDown:e=>{u(!0),m(e.clientY),h(a),g(0),b(Date.now()),x(e.clientY),l(!1)},onTouchStart:e=>{u(!0),m(e.touches[0].clientY),h(a),g(0),b(Date.now()),x(e.touches[0].clientY),l(!1)},onWheel:e=>{e.preventDefault();const t=e.deltaY>0?1:-1,i=S.findIndex((e=>Math.abs(e-n)<.01)),a=Math.max(0,Math.min(S.length-1,i+t)),s=S[a],c=$(s);l(!0),o(c),r(s),setTimeout((()=>l(!1)),200)},children:(0,ei.jsx)(Dm,{offset:a,isAnimating:s,children:S.map(((e,t)=>{const r=S.findIndex((e=>Math.abs(e-n)<.01)),i=t===r,a=1===Math.abs(t-r);return(0,ei.jsx)(Mm,{isSelected:i,isAdjacent:a,children:e.toFixed(1)},e)}))})})})]}),(0,ei.jsx)(Lm,{children:(0,ei.jsx)(Qd.div,{variants:z,children:(0,ei.jsx)(Om,{onClick:()=>{t("/age")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Nm=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,Fm=Qr(Qd.div)`
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
`,Im=Qr(Qd.div)`
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
`,Vm=Qr.div`
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
`,Um=Qr.div`
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
`,Bm=Qr.div`
    padding: 125px 0;
    transform: translateY(${e=>e.offset}px);
    transition: transform ${e=>e.isAnimating?"0.3s ease-out":"0s"};
`,Hm=Qr.div`
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
`,qm=(Qr(Qd.div)`
    margin-top: ${e=>e.theme.spacing.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${e=>e.theme.spacing.md};
`,Qr(Qd.div)`
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
`,Qr.div`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.lg};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
    color: ${e=>e.theme.colors.text};
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 600;
    text-align: center;
`,Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),Wm=Qr(rm)`
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
`,Ym=()=>{const t=Z(),[n,r]=(0,e.useState)(25),[i,a]=(0,e.useState)(0),[o,s]=(0,e.useState)(!1),[l,c]=(0,e.useState)(!1),[u,d]=(0,e.useState)(0),[m,p]=(0,e.useState)(0),[h,f]=(0,e.useState)(0),[g,y]=(0,e.useState)(0),[b,v]=(0,e.useState)(0),x=(0,e.useRef)(null),w=Array.from({length:88},((e,t)=>t+13)),S=(0,e.useCallback)((e=>{const t=Math.round(-e/50),n=Math.max(0,Math.min(w.length-1,t));return w[n]}),[w]),k=(0,e.useCallback)((e=>50*-w.indexOf(e)),[w]),$=(0,e.useCallback)((()=>{const e=S(i),t=k(e);s(!0),a(t),r(e),setTimeout((()=>s(!1)),300)}),[i,S,k]),E=e=>{if(!l)return;const t=Date.now(),n=m+(e-u),i=t-g;if(i>0){f((e-b)/i)}y(t),v(e);const o=50*-(w.length-1),s=Math.max(o,Math.min(0,n));a(s),r(S(s))},j=e=>{E(e.clientY)},C=e=>{e.preventDefault(),E(e.touches[0].clientY)},P=()=>{if(l)if(c(!1),Math.abs(h)>.5){const e=S(i+100*h),t=k(e);s(!0),a(t),r(e),setTimeout((()=>s(!1)),300)}else $()};(0,e.useEffect)((()=>{const e=()=>P(),t=e=>j(e),n=()=>P(),r=e=>C(e);return l&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",n)),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",n)}}),[l,j,C,P]),(0,e.useEffect)((()=>{a(k(n))}),[]);const T={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.15}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,ei.jsx)(Nm,{children:(0,ei.jsxs)(Qd.div,{variants:T,children:[(0,ei.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1ntos a\xf1os tienes?"}),(0,ei.jsx)(nm,{children:"Desliza en la lista para seleccionar tu edad"})]})}),(0,ei.jsxs)(Fm,{variants:T,children:[(0,ei.jsxs)(Im,{initial:{scale:.8},animate:{scale:1},transition:{type:"spring",stiffness:200},children:[n,(0,ei.jsx)("span",{className:"unit",children:"a\xf1os"})]},n),(0,ei.jsx)(Vm,{children:(0,ei.jsx)(Um,{ref:x,onMouseDown:e=>{c(!0),d(e.clientY),p(i),f(0),y(Date.now()),v(e.clientY),s(!1)},onTouchStart:e=>{c(!0),d(e.touches[0].clientY),p(i),f(0),y(Date.now()),v(e.touches[0].clientY),s(!1)},onWheel:e=>{e.preventDefault();const t=e.deltaY>0?1:-1,i=w.indexOf(n),o=Math.max(0,Math.min(w.length-1,i+t)),l=w[o],c=k(l);s(!0),a(c),r(l),setTimeout((()=>s(!1)),200)},children:(0,ei.jsx)(Bm,{offset:i,isAnimating:o,children:w.map(((e,t)=>{const r=w.indexOf(n),i=t===r,a=1===Math.abs(t-r);return(0,ei.jsx)(Hm,{isSelected:i,isAdjacent:a,children:e},e)}))})})})]}),(0,ei.jsx)(qm,{children:(0,ei.jsx)(Qd.div,{variants:T,children:(0,ei.jsx)(Wm,{onClick:()=>{t("/injuries")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Km=Qr.div`
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
    text-align: center;
    flex-shrink: 0;
`,Gm=Qr(Qd.div)`
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
`,Xm=Qr.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
`,Qm=Qr.div`
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
`,Jm=Qr(Qd.div)`
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
`,Zm=Qr.div`
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
`,ep=Qr.div`
    font-size: ${e=>e.theme.fontSizes.base};
    font-weight: 500;
    color: ${e=>e.selected?e.theme.colors.primarySolid:e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.main};
    position: relative;
    z-index: 1;
    transition: color ${e=>e.theme.transitions.base};
`,tp=(Qr(Qd.div)`
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
`,Qr.div`
    padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
    flex-shrink: 0;
`),np=Qr(rm)`
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
`,rp=()=>{const t=Z(),[n,r]=(0,e.useState)(null),i={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},a={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}};return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column",minHeight:0,maxHeight:"100vh",overflow:"hidden"},children:[(0,ei.jsx)(Km,{children:(0,ei.jsx)(Qd.div,{variants:i,children:(0,ei.jsx)(tm,{gradient:!0,children:"\xbfHas experimentado alguna molestia?"})})}),(0,ei.jsx)(Gm,{variants:i,children:(0,ei.jsx)(Xm,{children:(0,ei.jsx)(Qm,{children:[{id:"none",label:"Ninguna molestia",icon:"\u2728"},{id:"back",label:"Lesi\xf3n de espalda",icon:"\ud83e\uddb4"},{id:"arms",label:"Lesi\xf3n de brazos",icon:"\ud83d\udcaa"},{id:"knees",label:"Lesi\xf3n de rodillas",icon:"\ud83e\uddb5"},{id:"cardio",label:"Cardiomiopat\xeda",icon:"\u2764\ufe0f"}].map(((e,t)=>(0,ei.jsxs)(Jm,{selected:n===e.id,onClick:()=>(e=>{r(e)})(e.id),variants:a,initial:"hidden",animate:"visible",transition:{delay:.1*t},whileTap:{scale:.98},children:[(0,ei.jsx)(Zm,{selected:n===e.id,children:e.icon}),(0,ei.jsx)(ep,{selected:n===e.id,children:e.label})]},e.id)))})})}),(0,ei.jsx)(tp,{children:(0,ei.jsx)(Qd.div,{variants:i,children:(0,ei.jsx)(np,{onClick:()=>{t("/activity")},disabled:!n,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})};function ip(e){return ip="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ip(e)}function ap(e){var t=function(e,t){if("object"!=ip(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=ip(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ip(t)?t:t+""}function op(e,t,n){return(t=ap(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function lp(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?sp(Object(n),!0).forEach((function(t){op(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sp(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function cp(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function up(e,t){if(e){if("string"==typeof e)return cp(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cp(e,t):void 0}}function dp(e){return function(e){if(Array.isArray(e))return cp(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||up(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mp(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}(e,t)||up(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var pp=n(139),hp=n.n(pp);function fp(t){var n=e.useRef();n.current=t;var r=e.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return r}var gp="undefined"!==typeof window&&window.document&&window.document.createElement?e.useLayoutEffect:e.useEffect,yp=function(t,n){var r=e.useRef(!0);gp((function(){return t(r.current)}),n),gp((function(){return r.current=!1,function(){r.current=!0}}),[])},bp=function(e,t){yp((function(t){if(!t)return e()}),t)};const vp=yp;function xp(t){var n=e.useRef(!1),r=mp(e.useState(t),2),i=r[0],a=r[1];return e.useEffect((function(){return n.current=!1,function(){n.current=!0}}),[]),[i,function(e,t){t&&n.current||a(e)}]}function wp(e){return void 0!==e}var Sp={},kp=[];function $p(e,t){}function Ep(e,t){}function jp(e,t,n){t||Sp[n]||(e(!1,n),Sp[n]=!0)}function Cp(e,t){jp($p,e,t)}Cp.preMessage=function(e){kp.push(e)},Cp.resetWarned=function(){Sp={}},Cp.noteOnce=function(e,t){jp(Ep,e,t)};const Pp=Cp;const Tp=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Set;return function e(t,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=r.has(t);if(Pp(!o,"Warning: There may be circular references"),o)return!1;if(t===i)return!0;if(n&&a>1)return!1;r.add(t);var s=a+1;if(Array.isArray(t)){if(!Array.isArray(i)||t.length!==i.length)return!1;for(var l=0;l<t.length;l++)if(!e(t[l],i[l],s))return!1;return!0}if(t&&i&&"object"===ip(t)&&"object"===ip(i)){var c=Object.keys(t);return c.length===Object.keys(i).length&&c.every((function(n){return e(t[n],i[n],s)}))}return!1}(e,t)};function zp(){return zp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zp.apply(null,arguments)}function Ap(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Rp=n(950);function Dp(e,t,n){return(e-t)/(n-t)}function Mp(e,t,n,r){var i=Dp(t,n,r),a={};switch(e){case"rtl":a.right="".concat(100*i,"%"),a.transform="translateX(50%)";break;case"btt":a.bottom="".concat(100*i,"%"),a.transform="translateY(50%)";break;case"ttb":a.top="".concat(100*i,"%"),a.transform="translateY(-50%)";break;default:a.left="".concat(100*i,"%"),a.transform="translateX(-50%)"}return a}function Lp(e,t){return Array.isArray(e)?e[t]:e}var Op={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=Op.F1&&t<=Op.F12)return!1;switch(t){case Op.ALT:case Op.CAPS_LOCK:case Op.CONTEXT_MENU:case Op.CTRL:case Op.DOWN:case Op.END:case Op.ESC:case Op.HOME:case Op.INSERT:case Op.LEFT:case Op.MAC_FF_META:case Op.META:case Op.NUMLOCK:case Op.NUM_CENTER:case Op.PAGE_DOWN:case Op.PAGE_UP:case Op.PAUSE:case Op.PRINT_SCREEN:case Op.RIGHT:case Op.SHIFT:case Op.UP:case Op.WIN_KEY:case Op.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=Op.ZERO&&e<=Op.NINE)return!0;if(e>=Op.NUM_ZERO&&e<=Op.NUM_MULTIPLY)return!0;if(e>=Op.A&&e<=Op.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case Op.SPACE:case Op.QUESTION_MARK:case Op.NUM_PLUS:case Op.NUM_MINUS:case Op.NUM_PERIOD:case Op.NUM_DIVISION:case Op.SEMICOLON:case Op.DASH:case Op.EQUALS:case Op.COMMA:case Op.PERIOD:case Op.SLASH:case Op.APOSTROPHE:case Op.SINGLE_QUOTE:case Op.OPEN_SQUARE_BRACKET:case Op.BACKSLASH:case Op.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const _p=Op;const Np=e.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});var Fp=e.createContext({}),Ip=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"];const Vp=e.forwardRef((function(t,n){var r,i=t.prefixCls,a=t.value,o=t.valueIndex,s=t.onStartMove,l=t.onDelete,c=t.style,u=t.render,d=t.dragging,m=t.draggingDelete,p=t.onOffsetChange,h=t.onChangeComplete,f=t.onFocus,g=t.onMouseEnter,y=Ap(t,Ip),b=e.useContext(Np),v=b.min,x=b.max,w=b.direction,S=b.disabled,k=b.keyboard,$=b.range,E=b.tabIndex,j=b.ariaLabelForHandle,C=b.ariaLabelledByForHandle,P=b.ariaRequired,T=b.ariaValueTextFormatterForHandle,z=b.styles,A=b.classNames,R="".concat(i,"-handle"),D=function(e){S||s(e,o)},M=Mp(w,a,v,x),L={};null!==o&&(L={tabIndex:S?null:Lp(E,o),role:"slider","aria-valuemin":v,"aria-valuemax":x,"aria-valuenow":a,"aria-disabled":S,"aria-label":Lp(j,o),"aria-labelledby":Lp(C,o),"aria-required":Lp(P,o),"aria-valuetext":null===(r=Lp(T,o))||void 0===r?void 0:r(a),"aria-orientation":"ltr"===w||"rtl"===w?"horizontal":"vertical",onMouseDown:D,onTouchStart:D,onFocus:function(e){null===f||void 0===f||f(e,o)},onMouseEnter:function(e){g(e,o)},onKeyDown:function(e){if(!S&&k){var t=null;switch(e.which||e.keyCode){case _p.LEFT:t="ltr"===w||"btt"===w?-1:1;break;case _p.RIGHT:t="ltr"===w||"btt"===w?1:-1;break;case _p.UP:t="ttb"!==w?1:-1;break;case _p.DOWN:t="ttb"!==w?-1:1;break;case _p.HOME:t="min";break;case _p.END:t="max";break;case _p.PAGE_UP:t=2;break;case _p.PAGE_DOWN:t=-2;break;case _p.BACKSPACE:case _p.DELETE:l(o)}null!==t&&(e.preventDefault(),p(t,o))}},onKeyUp:function(e){switch(e.which||e.keyCode){case _p.LEFT:case _p.RIGHT:case _p.UP:case _p.DOWN:case _p.HOME:case _p.END:case _p.PAGE_UP:case _p.PAGE_DOWN:null===h||void 0===h||h()}}});var O=e.createElement("div",zp({ref:n,className:hp()(R,op(op(op({},"".concat(R,"-").concat(o+1),null!==o&&$),"".concat(R,"-dragging"),d),"".concat(R,"-dragging-delete"),m),A.handle),style:lp(lp(lp({},M),c),z.handle)},L,y));return u&&(O=u(O,{index:o,prefixCls:i,value:a,dragging:d,draggingDelete:m})),O}));var Up=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],Bp=e.forwardRef((function(t,n){var r=t.prefixCls,i=t.style,a=t.onStartMove,o=t.onOffsetChange,s=t.values,l=t.handleRender,c=t.activeHandleRender,u=t.draggingIndex,d=t.draggingDelete,m=t.onFocus,p=Ap(t,Up),h=e.useRef({}),f=mp(e.useState(!1),2),g=f[0],y=f[1],b=mp(e.useState(-1),2),v=b[0],x=b[1],w=function(e){x(e),y(!0)};e.useImperativeHandle(n,(function(){return{focus:function(e){var t;null===(t=h.current[e])||void 0===t||t.focus()},hideHelp:function(){(0,Rp.flushSync)((function(){y(!1)}))}}}));var S=lp({prefixCls:r,onStartMove:a,onOffsetChange:o,render:l,onFocus:function(e,t){w(t),null===m||void 0===m||m(e)},onMouseEnter:function(e,t){w(t)}},p);return e.createElement(e.Fragment,null,s.map((function(t,n){var r=u===n;return e.createElement(Vp,zp({ref:function(e){e?h.current[n]=e:delete h.current[n]},dragging:r,draggingDelete:r&&d,style:Lp(i,n),key:n,value:t,valueIndex:n},S))})),c&&g&&e.createElement(Vp,zp({key:"a11y"},S,{value:s[v],valueIndex:null,dragging:-1!==u,draggingDelete:d,render:c,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}));const Hp=Bp;const qp=function(t){var n=t.prefixCls,r=t.style,i=t.children,a=t.value,o=t.onClick,s=e.useContext(Np),l=s.min,c=s.max,u=s.direction,d=s.includedStart,m=s.includedEnd,p=s.included,h="".concat(n,"-text"),f=Mp(u,a,l,c);return e.createElement("span",{className:hp()(h,op({},"".concat(h,"-active"),p&&d<=a&&a<=m)),style:lp(lp({},f),r),onMouseDown:function(e){e.stopPropagation()},onClick:function(){o(a)}},i)};const Wp=function(t){var n=t.prefixCls,r=t.marks,i=t.onClick,a="".concat(n,"-mark");return r.length?e.createElement("div",{className:a},r.map((function(t){var n=t.value,r=t.style,o=t.label;return e.createElement(qp,{key:n,prefixCls:a,style:r,value:n,onClick:i},o)}))):null};const Yp=function(t){var n=t.prefixCls,r=t.value,i=t.style,a=t.activeStyle,o=e.useContext(Np),s=o.min,l=o.max,c=o.direction,u=o.included,d=o.includedStart,m=o.includedEnd,p="".concat(n,"-dot"),h=u&&d<=r&&r<=m,f=lp(lp({},Mp(c,r,s,l)),"function"===typeof i?i(r):i);return h&&(f=lp(lp({},f),"function"===typeof a?a(r):a)),e.createElement("span",{className:hp()(p,op({},"".concat(p,"-active"),h)),style:f})};const Kp=function(t){var n=t.prefixCls,r=t.marks,i=t.dots,a=t.style,o=t.activeStyle,s=e.useContext(Np),l=s.min,c=s.max,u=s.step,d=e.useMemo((function(){var e=new Set;if(r.forEach((function(t){e.add(t.value)})),i&&null!==u)for(var t=l;t<=c;)e.add(t),t+=u;return Array.from(e)}),[l,c,u,i,r]);return e.createElement("div",{className:"".concat(n,"-step")},d.map((function(t){return e.createElement(Yp,{prefixCls:n,key:t,value:t,style:a,activeStyle:o})})))};const Gp=function(t){var n=t.prefixCls,r=t.style,i=t.start,a=t.end,o=t.index,s=t.onStartMove,l=t.replaceCls,c=e.useContext(Np),u=c.direction,d=c.min,m=c.max,p=c.disabled,h=c.range,f=c.classNames,g="".concat(n,"-track"),y=Dp(i,d,m),b=Dp(a,d,m),v=function(e){!p&&s&&s(e,-1)},x={};switch(u){case"rtl":x.right="".concat(100*y,"%"),x.width="".concat(100*b-100*y,"%");break;case"btt":x.bottom="".concat(100*y,"%"),x.height="".concat(100*b-100*y,"%");break;case"ttb":x.top="".concat(100*y,"%"),x.height="".concat(100*b-100*y,"%");break;default:x.left="".concat(100*y,"%"),x.width="".concat(100*b-100*y,"%")}var w=l||hp()(g,op(op({},"".concat(g,"-").concat(o+1),null!==o&&h),"".concat(n,"-track-draggable"),s),f.track);return e.createElement("div",{className:w,style:lp(lp({},x),r),onMouseDown:v,onTouchStart:v})};const Xp=function(t){var n=t.prefixCls,r=t.style,i=t.values,a=t.startPoint,o=t.onStartMove,s=e.useContext(Np),l=s.included,c=s.range,u=s.min,d=s.styles,m=s.classNames,p=e.useMemo((function(){if(!c){if(0===i.length)return[];var e=null!==a&&void 0!==a?a:u,t=i[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<i.length-1;r+=1)n.push({start:i[r],end:i[r+1]});return n}),[i,c,a,u]);if(!l)return null;var h=null!==p&&void 0!==p&&p.length&&(m.tracks||d.tracks)?e.createElement(Gp,{index:null,prefixCls:n,start:p[0].start,end:p[p.length-1].end,replaceCls:hp()(m.tracks,"".concat(n,"-tracks")),style:d.tracks}):null;return e.createElement(e.Fragment,null,h,p.map((function(t,i){var a=t.start,s=t.end;return e.createElement(Gp,{index:i,prefixCls:n,style:lp(lp({},Lp(r,i)),d.track),start:a,end:s,key:i,onStartMove:o})})))};function Qp(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}const Jp=function(t,n,r,i,a,o,s,l,c,u,d){var m=mp(e.useState(null),2),p=m[0],h=m[1],f=mp(e.useState(-1),2),g=f[0],y=f[1],b=mp(e.useState(!1),2),v=b[0],x=b[1],w=mp(e.useState(r),2),S=w[0],k=w[1],$=mp(e.useState(r),2),E=$[0],j=$[1],C=e.useRef(null),P=e.useRef(null),T=e.useRef(null),z=e.useContext(Fp),A=z.onDragStart,R=z.onDragChange;vp((function(){-1===g&&k(r)}),[r,g]),e.useEffect((function(){return function(){document.removeEventListener("mousemove",C.current),document.removeEventListener("mouseup",P.current),T.current&&(T.current.removeEventListener("touchmove",C.current),T.current.removeEventListener("touchend",P.current))}}),[]);var D=function(e,t,n){void 0!==t&&h(t),k(e);var r=e;n&&(r=e.filter((function(e,t){return t!==g}))),s(r),R&&R({rawValues:e,deleteIndex:n?g:-1,draggingIndex:g,draggingValue:t})},M=fp((function(e,t,n){if(-1===e){var r=E[0],s=E[E.length-1],l=i-r,u=a-s,d=t*(a-i);d=Math.max(d,l),d=Math.min(d,u);var m=o(r+d);d=m-r;var p=E.map((function(e){return e+d}));D(p)}else{var h=(a-i)*t,f=dp(S);f[e]=E[e];var g=c(f,h,e,"dist");D(g.values,g.value,n)}})),L=e.useMemo((function(){var e=dp(r).sort((function(e,t){return e-t})),t=dp(S).sort((function(e,t){return e-t})),n={};t.forEach((function(e){n[e]=(n[e]||0)+1})),e.forEach((function(e){n[e]=(n[e]||0)-1}));var i=u?1:0,a=Object.values(n).reduce((function(e,t){return e+Math.abs(t)}),0);return a<=i?S:r}),[r,S,u]);return[g,p,v,L,function(e,i,a){e.stopPropagation();var o=a||r,s=o[i];y(i),h(s),j(o),k(o),x(!1);var c=Qp(e),m=c.pageX,p=c.pageY,f=!1;A&&A({rawValues:o,draggingIndex:i,draggingValue:s});var g=function(e){e.preventDefault();var r,a,o=Qp(e),s=o.pageX,l=o.pageY,c=s-m,h=l-p,g=t.current.getBoundingClientRect(),y=g.width,b=g.height;switch(n){case"btt":r=-h/b,a=c;break;case"ttb":r=h/b,a=c;break;case"rtl":r=-c/y,a=h;break;default:r=c/y,a=h}f=!!u&&(Math.abs(a)>130&&d<S.length),x(f),M(i,r,f)},b=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",g),T.current&&(T.current.removeEventListener("touchmove",C.current),T.current.removeEventListener("touchend",P.current)),C.current=null,P.current=null,T.current=null,l(f),y(-1),x(!1)};document.addEventListener("mouseup",b),document.addEventListener("mousemove",g),e.currentTarget.addEventListener("touchend",b),e.currentTarget.addEventListener("touchmove",g),C.current=g,P.current=b,T.current=e.currentTarget}]};var Zp=e.forwardRef((function(t,n){var r=t.prefixCls,i=void 0===r?"rc-slider":r,a=t.className,o=t.style,s=t.classNames,l=t.styles,c=t.id,u=t.disabled,d=void 0!==u&&u,m=t.keyboard,p=void 0===m||m,h=t.autoFocus,f=t.onFocus,g=t.onBlur,y=t.min,b=void 0===y?0:y,v=t.max,x=void 0===v?100:v,w=t.step,S=void 0===w?1:w,k=t.value,$=t.defaultValue,E=t.range,j=t.count,C=t.onChange,P=t.onBeforeChange,T=t.onAfterChange,z=t.onChangeComplete,A=t.allowCross,R=void 0===A||A,D=t.pushable,M=void 0!==D&&D,L=t.reverse,O=t.vertical,_=t.included,N=void 0===_||_,F=t.startPoint,I=t.trackStyle,V=t.handleStyle,U=t.railStyle,B=t.dotStyle,H=t.activeDotStyle,q=t.marks,W=t.dots,Y=t.handleRender,K=t.activeHandleRender,G=t.track,X=t.tabIndex,Q=void 0===X?0:X,J=t.ariaLabelForHandle,Z=t.ariaLabelledByForHandle,ee=t.ariaRequired,te=t.ariaValueTextFormatterForHandle,ne=e.useRef(null),re=e.useRef(null),ie=e.useMemo((function(){return O?L?"ttb":"btt":L?"rtl":"ltr"}),[L,O]),ae=function(t){return(0,e.useMemo)((function(){if(!0===t||!t)return[!!t,!1,!1,0];var e=t.editable,n=t.draggableTrack;return[!0,e,!e&&n,t.minCount||0,t.maxCount]}),[t])}(E),oe=mp(ae,5),se=oe[0],le=oe[1],ce=oe[2],ue=oe[3],de=oe[4],me=e.useMemo((function(){return isFinite(b)?b:0}),[b]),pe=e.useMemo((function(){return isFinite(x)?x:100}),[x]),he=e.useMemo((function(){return null!==S&&S<=0?1:S}),[S]),fe=e.useMemo((function(){return"boolean"===typeof M?!!M&&he:M>=0&&M}),[M,he]),ge=e.useMemo((function(){return Object.keys(q||{}).map((function(t){var n=q[t],r={value:Number(t)};return n&&"object"===ip(n)&&!e.isValidElement(n)&&("label"in n||"style"in n)?(r.style=n.style,r.label=n.label):r.label=n,r})).filter((function(e){var t=e.label;return t||"number"===typeof t})).sort((function(e,t){return e.value-t.value}))}),[q]),ye=function(t,n,r,i,a,o){var s=e.useCallback((function(e){return Math.max(t,Math.min(n,e))}),[t,n]),l=e.useCallback((function(e){if(null!==r){var i=t+Math.round((s(e)-t)/r)*r,a=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(a(r),a(n),a(t)),l=Number(i.toFixed(o));return t<=l&&l<=n?l:null}return null}),[r,t,n,s]),c=e.useCallback((function(e){var a=s(e),o=i.map((function(e){return e.value}));null!==r&&o.push(l(e)),o.push(t,n);var c=o[0],u=n-t;return o.forEach((function(e){var t=Math.abs(a-e);t<=u&&(c=e,u=t)})),c}),[t,n,i,r,s,l]),u=function e(a,o,s){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"===typeof o){var u,d=a[s],m=d+o,p=[];i.forEach((function(e){p.push(e.value)})),p.push(t,n),p.push(l(d));var h=o>0?1:-1;"unit"===c?p.push(l(d+h*r)):p.push(l(m)),p=p.filter((function(e){return null!==e})).filter((function(e){return o<0?e<=d:e>=d})),"unit"===c&&(p=p.filter((function(e){return e!==d})));var f="unit"===c?d:m;u=p[0];var g=Math.abs(u-f);if(p.forEach((function(e){var t=Math.abs(e-f);t<g&&(u=e,g=t)})),void 0===u)return o<0?t:n;if("dist"===c)return u;if(Math.abs(o)>1){var y=dp(a);return y[s]=u,e(y,o-h,s,c)}return u}return"min"===o?t:"max"===o?n:void 0},d=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",i=e[n],a=u(e,t,n,r);return{value:a,changed:a!==i}},m=function(e){return null===o&&0===e||"number"===typeof o&&e<o};return[c,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",i=e.map(c),s=i[n],l=u(i,t,n,r);if(i[n]=l,!1===a){var p=o||0;n>0&&i[n-1]!==s&&(i[n]=Math.max(i[n],i[n-1]+p)),n<i.length-1&&i[n+1]!==s&&(i[n]=Math.min(i[n],i[n+1]-p))}else if("number"===typeof o||null===o){for(var h=n+1;h<i.length;h+=1)for(var f=!0;m(i[h]-i[h-1])&&f;){var g=d(i,1,h);i[h]=g.value,f=g.changed}for(var y=n;y>0;y-=1)for(var b=!0;m(i[y]-i[y-1])&&b;){var v=d(i,-1,y-1);i[y-1]=v.value,b=v.changed}for(var x=i.length-1;x>0;x-=1)for(var w=!0;m(i[x]-i[x-1])&&w;){var S=d(i,-1,x-1);i[x-1]=S.value,w=S.changed}for(var k=0;k<i.length-1;k+=1)for(var $=!0;m(i[k+1]-i[k])&&$;){var E=d(i,1,k+1);i[k+1]=E.value,$=E.changed}}return{value:i[n],values:i}}]}(me,pe,he,ge,R,fe),be=mp(ye,2),ve=be[0],xe=be[1],we=function(e,t){var n=t||{},r=n.defaultValue,i=n.value,a=n.onChange,o=n.postState,s=mp(xp((function(){return wp(i)?i:wp(r)?"function"===typeof r?r():r:"function"===typeof e?e():e})),2),l=s[0],c=s[1],u=void 0!==i?i:l,d=o?o(u):u,m=fp(a),p=mp(xp([u]),2),h=p[0],f=p[1];return bp((function(){var e=h[0];l!==e&&m(l,e)}),[h]),bp((function(){wp(i)||c(i)}),[i]),[d,fp((function(e,t){c(e,t),f([u],t)}))]}($,{value:k}),Se=mp(we,2),ke=Se[0],$e=Se[1],Ee=e.useMemo((function(){var e=null===ke||void 0===ke?[]:Array.isArray(ke)?ke:[ke],t=mp(e,1)[0],n=null===ke?[]:[void 0===t?me:t];if(se){if(n=dp(e),j||void 0===ke){var r=j>=0?j+1:2;for(n=n.slice(0,r);n.length<r;){var i;n.push(null!==(i=n[n.length-1])&&void 0!==i?i:me)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=ve(e)})),n}),[ke,se,me,j,ve]),je=function(e){return se?e:e[0]},Ce=fp((function(e){var t=dp(e).sort((function(e,t){return e-t}));C&&!Tp(t,Ee,!0)&&C(je(t)),$e(t)})),Pe=fp((function(e){e&&ne.current.hideHelp();var t=je(Ee);null===T||void 0===T||T(t),Pp(!T,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null===z||void 0===z||z(t)})),Te=mp(Jp(re,ie,Ee,me,pe,ve,Ce,Pe,xe,le,ue),5),ze=Te[0],Ae=Te[1],Re=Te[2],De=Te[3],Me=Te[4],Le=function(e,t){if(!d){var n=dp(Ee),r=0,i=0,a=pe-me;Ee.forEach((function(t,n){var o=Math.abs(e-t);o<=a&&(a=o,r=n),t<e&&(i=n)}));var o=r;le&&0!==a&&(!de||Ee.length<de)?(n.splice(i+1,0,e),o=i+1):n[r]=e,se&&!Ee.length&&void 0===j&&n.push(e);var s,l,c=je(n);if(null===P||void 0===P||P(c),Ce(n),t)null===(s=document.activeElement)||void 0===s||null===(l=s.blur)||void 0===l||l.call(s),ne.current.focus(o),Me(t,o,n);else null===T||void 0===T||T(c),Pp(!T,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null===z||void 0===z||z(c)}},Oe=mp(e.useState(null),2),_e=Oe[0],Ne=Oe[1];e.useEffect((function(){if(null!==_e){var e=Ee.indexOf(_e);e>=0&&ne.current.focus(e)}Ne(null)}),[_e]);var Fe=e.useMemo((function(){return(!ce||null!==he)&&ce}),[ce,he]),Ie=fp((function(e,t){Me(e,t),null===P||void 0===P||P(je(Ee))})),Ve=-1!==ze;e.useEffect((function(){if(!Ve){var e=Ee.lastIndexOf(Ae);ne.current.focus(e)}}),[Ve]);var Ue=e.useMemo((function(){return dp(De).sort((function(e,t){return e-t}))}),[De]),Be=mp(e.useMemo((function(){return se?[Ue[0],Ue[Ue.length-1]]:[me,Ue[0]]}),[Ue,se,me]),2),He=Be[0],qe=Be[1];e.useImperativeHandle(n,(function(){return{focus:function(){ne.current.focus(0)},blur:function(){var e,t=document.activeElement;null!==(e=re.current)&&void 0!==e&&e.contains(t)&&(null===t||void 0===t||t.blur())}}})),e.useEffect((function(){h&&ne.current.focus(0)}),[]);var We=e.useMemo((function(){return{min:me,max:pe,direction:ie,disabled:d,keyboard:p,step:he,included:N,includedStart:He,includedEnd:qe,range:se,tabIndex:Q,ariaLabelForHandle:J,ariaLabelledByForHandle:Z,ariaRequired:ee,ariaValueTextFormatterForHandle:te,styles:l||{},classNames:s||{}}}),[me,pe,ie,d,p,he,N,He,qe,se,Q,J,Z,ee,te,l,s]);return e.createElement(Np.Provider,{value:We},e.createElement("div",{ref:re,className:hp()(i,a,op(op(op(op({},"".concat(i,"-disabled"),d),"".concat(i,"-vertical"),O),"".concat(i,"-horizontal"),!O),"".concat(i,"-with-marks"),ge.length)),style:o,onMouseDown:function(e){e.preventDefault();var t,n=re.current.getBoundingClientRect(),r=n.width,i=n.height,a=n.left,o=n.top,s=n.bottom,l=n.right,c=e.clientX,u=e.clientY;switch(ie){case"btt":t=(s-u)/i;break;case"ttb":t=(u-o)/i;break;case"rtl":t=(l-c)/r;break;default:t=(c-a)/r}Le(ve(me+t*(pe-me)),e)},id:c},e.createElement("div",{className:hp()("".concat(i,"-rail"),null===s||void 0===s?void 0:s.rail),style:lp(lp({},U),null===l||void 0===l?void 0:l.rail)}),!1!==G&&e.createElement(Xp,{prefixCls:i,style:I,values:Ee,startPoint:F,onStartMove:Fe?Ie:void 0}),e.createElement(Kp,{prefixCls:i,marks:ge,dots:W,style:B,activeStyle:H}),e.createElement(Hp,{ref:ne,prefixCls:i,style:V,values:De,draggingIndex:ze,draggingDelete:Re,onStartMove:Ie,onOffsetChange:function(e,t){if(!d){var n=xe(Ee,e,t);null===P||void 0===P||P(je(Ee)),Ce(n.values),Ne(n.value)}},onFocus:f,onBlur:g,handleRender:Y,activeHandleRender:K,onChangeComplete:Pe,onDelete:le?function(e){if(!(d||!le||Ee.length<=ue)){var t=dp(Ee);t.splice(e,1),null===P||void 0===P||P(je(t)),Ce(t);var n=Math.max(0,e-1);ne.current.hideHelp(),ne.current.focus(n)}}:void 0}),e.createElement(Wp,{prefixCls:i,marks:ge,onClick:Le})))}));const eh=Zp,th=eh,nh=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,rh=Qr(Qd.div)`
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
`,ih=Qr(Qd.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`,ah=Qr(Qd.div)`
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
`,oh=Qr(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${e=>e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.heading};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
`,sh=Qr(Qd.div)`
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,lh=Qr(Qd.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${e=>e.theme.spacing.xl} 35px;
`,ch=Qr.div`
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
`,uh=(Qr.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    position: relative;
`,Qr(Qd.div)`
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
`,Qr.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    padding: 0 ${e=>e.theme.spacing.sm};
`,Qr(Qd.span)`
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.textLight};
    font-weight: ${e=>e.active?"700":"500"};
    text-align: center;
    min-width: 80px;
    transition: all 0.3s ease;

    ${e=>e.active&&"\n        transform: scale(1.05);\n    "}
`,Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),dh=Qr(rm)`
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
`,mh=()=>{const t=Z(),[n,r]=(0,e.useState)(1),i=[{value:0,key:"sedentary",label:"Sedentario",description:"Trabajo de oficina, rara vez hago ejercicio y paso la mayor parte del tiempo sentado",emoji:"\ud83d\udecb\ufe0f",color:"#94a3b8"},{value:1,key:"light",label:"Actividad Ligera",description:"Ejercicio ligero 1-3 veces por semana, caminatas ocasionales para mantenerme activo",emoji:"\ud83d\udeb6\u200d\u2640\ufe0f",color:"#84cc16"},{value:2,key:"moderate",label:"Moderadamente Activo",description:"Ejercicio moderado 3-5 veces por semana, rutinas regulares para mantener mi salud",emoji:"\ud83c\udfc3\u200d\u2640\ufe0f",color:"#f59e0b"},{value:3,key:"very_active",label:"Muy Activo",description:"ejercicio intenso 6-7 veces por semana, entreno fuerte varias horas al d\xeda",emoji:"\ud83d\udcaa",color:"#dc2626"}],a=i.reduce(((e,t)=>(e[t.value]={style:{color:n===t.value?"#2d3e2d":"#94a3b8",fontWeight:n===t.value?"700":"500",fontSize:"11px",marginTop:"10px"},label:t.label.split(" ")[0]},e)),{}),o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s=i[n];return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,ei.jsx)(nh,{children:(0,ei.jsx)(Qd.div,{variants:o,children:(0,ei.jsx)(tm,{gradient:!0,children:"\xbfCu\xe1l es tu nivel de actividad?"})})}),(0,ei.jsxs)(rh,{variants:o,children:[(0,ei.jsxs)(ih,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3},children:[(0,ei.jsx)(ah,{level:s.key,animate:{scale:[1,1.05,1],rotate:[0,2,-2,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),(0,ei.jsx)(oh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:s.label},s.label)]}),(0,ei.jsx)(sh,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},children:s.description},s.description),(0,ei.jsx)(lh,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:(0,ei.jsx)(ch,{children:(0,ei.jsx)(th,{min:0,max:3,step:1,value:n,onChange:e=>{r(e)},marks:a,included:!0,trackStyle:{background:"#2d3e2d",boxShadow:"0 2px 8px rgba(45, 62, 45, 0.4)"},handleStyle:{background:"#2d3e2d",borderColor:"#2d3e2d",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)"},dotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"},activeDotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"}})})})]}),(0,ei.jsx)(uh,{children:(0,ei.jsx)(Qd.div,{variants:o,children:(0,ei.jsx)(dh,{onClick:()=>{t("/flexibility")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},ph=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,hh=Qr(Qd.div)`
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
`,fh=Qr(Qd.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`,gh=Qr(Qd.div)`
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
`,yh=Qr.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${e=>e.theme.borderRadius.lg};
    mix-blend-mode: color;
`,bh=Qr(Qd.div)`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${e=>e.theme.colors.text};
    font-family: ${e=>e.theme.fonts.heading};
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
`,vh=Qr(Qd.div)`
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,xh=Qr(Qd.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${e=>e.theme.spacing.xl} 35px;
`,wh=Qr.div`
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
`,Sh=(Qr.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    position: relative;
`,Qr(Qd.div)`
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
`,Qr.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${e=>e.theme.spacing.lg};
    padding: 0 ${e=>e.theme.spacing.sm};
`,Qr(Qd.span)`
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.active?e.theme.colors.primarySolid:e.theme.colors.textLight};
    font-weight: ${e=>e.active?"700":"500"};
    text-align: center;
    min-width: 80px;
    transition: all 0.3s ease;

    ${e=>e.active&&"\n        transform: scale(1.05);\n    "}
`,Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`),kh=Qr(rm)`
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
`,$h=()=>{const t=Z(),[n,r]=(0,e.useState)(1),i=[{value:0,key:"poor",label:"Est\xe1 bien",description:"Las manos est\xe1n lejos de los dedos de los pies, necesito mejorar mi flexibilidad",image:"/flexibilidad/esta-bien.png",color:"#94a3b8"},{value:1,key:"good",label:"\xa1Genial!",description:"Puedo acercarme bastante, tengo una flexibilidad moderada que puedo mejorar",image:"/flexibilidad/genial.png",color:"#84cc16"},{value:2,key:"excellent",label:"\xa1Excelente!",description:"Puedo tocar f\xe1cilmente los dedos de los pies, tengo muy buena flexibilidad",image:"/flexibilidad/excelente.png",color:"#22c55e"}],a=i.reduce(((e,t)=>(e[t.value]={style:{color:n===t.value?"#2d3e2d":"#94a3b8",fontWeight:n===t.value?"700":"500",fontSize:"11px",marginTop:"10px"},label:t.label.split(" ")[0]},e)),{}),o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s=i[n];return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,ei.jsx)(ph,{children:(0,ei.jsxs)(Qd.div,{variants:o,children:[(0,ei.jsx)(tm,{gradient:!0,children:"Tu flexibilidad"}),(0,ei.jsx)(nm,{children:"\xbfC\xf3mo de lejos est\xe1n las manos de los dedos de los pies?"})]})}),(0,ei.jsxs)(hh,{variants:o,children:[(0,ei.jsxs)(fh,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3},children:[(0,ei.jsx)(gh,{animate:{scale:[1,1.05,1],rotate:[0,2,-2,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:(0,ei.jsx)(yh,{src:s.image,alt:"Flexibilidad"})}),(0,ei.jsx)(bh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:s.label},s.label)]}),(0,ei.jsx)(vh,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},children:s.description},s.description),(0,ei.jsx)(xh,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:(0,ei.jsx)(wh,{children:(0,ei.jsx)(th,{min:0,max:2,step:1,value:n,onChange:e=>{r(e)},marks:a,included:!0,trackStyle:{background:"#2d3e2d",boxShadow:"0 2px 8px rgba(45, 62, 45, 0.4)"},handleStyle:{background:"#2d3e2d",borderColor:"#2d3e2d",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)"},dotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"},activeDotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"}})})})]}),(0,ei.jsx)(Sh,{children:(0,ei.jsx)(Qd.div,{variants:o,children:(0,ei.jsx)(kh,{onClick:()=>{t("/aerobic")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Continuar"})})})]})})},Eh=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg} 0;
    text-align: center;
`,jh=Qr(Qd.div)`
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
`,Ch=Qr(Qd.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`,Ph=Qr(Qd.div)`
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
`,Th=Qr.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${e=>e.theme.borderRadius.lg};
    mix-blend-mode: color;
`,zh=Qr(Qd.div)`
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
`,Ah=Qr(Qd.div)`
    font-size: ${e=>e.theme.fontSizes.md};
    color: ${e=>e.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,Rh=Qr(Qd.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${e=>e.theme.spacing.xl} 35px;
`,Dh=Qr.div`
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
`,Mh=Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`,Lh=Qr(rm)`
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
`,Oh=()=>{const t=Z(),[n,r]=(0,e.useState)(1),i=[{value:0,key:"low",label:"Sin aliento",description:"\xa1Entendido! Nuestros entrenamientos personalizados aumentar\xe1n gradualmente tu resistencia.",image:"/aerobico/sin-aliento.png",color:"#ef4444"},{value:1,key:"medium",label:"Un poco cansado pero bien",description:"\xa1Buen trabajo! Te ayudaremos a seguir progresando y a volverte m\xe1s fuerte.",image:"/aerobico/cansado-pero-bien.png",color:"#f59e0b"},{value:2,key:"high",label:"Con facilidad",description:"\xa1Genial! Tenemos m\xe1s desaf\xedos esper\xe1ndote.",image:"/aerobico/facilidad.png",color:"#22c55e"}],a=i.reduce(((e,t)=>(e[t.value]={style:{color:n===t.value?"#2d3e2d":"#94a3b8",fontWeight:n===t.value?"700":"500",fontSize:"11px",marginTop:"10px"},label:0===t.value?"Dif\xedcil":1===t.value?"Bien":"F\xe1cil"},e)),{}),o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s=i[n];return(0,ei.jsx)(sm,{children:(0,ei.jsxs)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},initial:"hidden",animate:"visible",style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,ei.jsx)(Eh,{children:(0,ei.jsxs)(Qd.div,{variants:o,children:[(0,ei.jsx)(tm,{gradient:!0,children:"Tu nivel aer\xf3bico"}),(0,ei.jsx)(nm,{children:"\xbfC\xf3mo te encuentras despu\xe9s de subir 5 pisos?"})]})}),(0,ei.jsxs)(jh,{variants:o,children:[(0,ei.jsxs)(Ch,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3},children:[(0,ei.jsx)(Ph,{animate:{scale:[1,1.05,1],rotate:[0,2,-2,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:(0,ei.jsx)(Th,{src:s.image,alt:"Aer\xf3bico"})}),(0,ei.jsx)(zh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4},children:s.label},s.label)]}),(0,ei.jsx)(Ah,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4},children:s.description},s.description),(0,ei.jsx)(Rh,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:(0,ei.jsx)(Dh,{children:(0,ei.jsx)(th,{min:0,max:2,step:1,value:n,onChange:e=>{r(e)},marks:a,included:!0,trackStyle:{background:"#2d3e2d",boxShadow:"0 2px 8px rgba(45, 62, 45, 0.4)"},handleStyle:{background:"#2d3e2d",borderColor:"#2d3e2d",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)"},dotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"},activeDotStyle:{borderColor:"#2d3e2d",background:"#2d3e2d"}})})})]}),(0,ei.jsx)(Mh,{children:(0,ei.jsx)(Qd.div,{variants:o,children:(0,ei.jsx)(Lh,{onClick:()=>{t("/discover")},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Finalizar"})})})]})})},_h=Qr(sm)`
    justify-content: center;
    align-items: center;
    padding: ${e=>e.theme.spacing.lg};
`,Nh=Qr(Qd.div)`
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
`,Fh=Qr(tm)`
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
`,Ih=Qr(Qd.div)`
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
`,Vh=Qr(rm)`
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
`,Uh=(Qr(Qd.div)`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: ${e=>e.theme.borderRadius.full};
    background: ${e=>e.theme.colors.primarySolid}10;
    top: -150px;
    right: -150px;
    z-index: 0;
`,()=>{const e=Z(),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return(0,ei.jsx)(_h,{children:(0,ei.jsx)(Qd.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",animate:"visible",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:(0,ei.jsxs)(Nh,{variants:t,children:[(0,ei.jsx)(Qd.div,{variants:t,children:(0,ei.jsx)(Fh,{children:"Tu Objetivo"})}),(0,ei.jsxs)(Ih,{variants:t,whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:[(0,ei.jsx)("span",{className:"emoji",children:"\ud83c\udfaf"}),(0,ei.jsx)("h3",{children:"Comenzar tu transformaci\xf3n"}),(0,ei.jsx)("p",{children:"Descubre ejercicios efectivos y recetas nutritivas que te ayudar\xe1n a alcanzar tus metas de fitness. Desde rutinas de cardio hasta comidas balanceadas, encuentra todo lo que necesitas para tu bienestar."})]}),(0,ei.jsx)(Vh,{onClick:()=>{e("/height")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Comenzar"})]})})})}),Bh=Qr.div`
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
`,Hh=Qr.div`
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
`,qh=Qr.div`
    text-align: center;
`,Wh=Qr.h1`
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,Yh=Qr.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    margin: ${e=>e.theme.spacing.sm} 0 0 0;
    font-weight: 400;
`,Kh=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    flex: 1;
`,Gh=Qr.div`
    display: grid;
    gap: ${e=>e.theme.spacing.lg};
    grid-template-columns: 1fr;
`,Xh=Qr(Qd.div)`
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
`,Qh=Qr.div`
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
`,Jh=Qr.div`
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
`,Zh=Qr.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.md};
`,ef=Qr.div`
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
`,tf=Qr.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`,nf=Qr.h2`
    color: white;
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    margin: ${e=>e.theme.spacing.sm} 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
`,rf=Qr.p`
    color: rgba(255, 255, 255, 0.9);
    font-size: ${e=>e.theme.fontSizes.base};
    margin: 0;
    line-height: 1.5;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`,af=Qr.div`
    display: flex;
    gap: ${e=>e.theme.spacing.md};
    margin-top: ${e=>e.theme.spacing.md};
`,of=Qr.div`
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
`,sf=(Qr.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
`,Qr(Qd.div)`
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    backdrop-filter: blur(10px);
`,()=>{const e=Z(),t={hidden:{opacity:0,y:50},visible:e=>({opacity:1,y:0,transition:{delay:.2*e,duration:.6,ease:"easeOut"}})};return(0,ei.jsxs)(Bh,{children:[(0,ei.jsx)(Hh,{children:(0,ei.jsxs)(qh,{children:[(0,ei.jsx)(Wh,{children:"Bienvenido"}),(0,ei.jsx)(Yh,{children:"Elige tu camino hacia una vida m\xe1s saludable"})]})}),(0,ei.jsx)(Kh,{children:(0,ei.jsxs)(Gh,{children:[(0,ei.jsxs)(Xh,{custom:0,initial:"hidden",animate:"visible",variants:t,onClick:()=>{return t="Ambas",console.log(`Selected: ${t}`),void("Hipertenso"===t?e("/category/hipertenso"):"Diabeticos"===t?e("/category/diabeticos"):"Ambas"===t&&e("/category/ambas"));var t},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,ei.jsx)(Qh,{src:"/ejercicios.webp"}),(0,ei.jsxs)(Jh,{children:[(0,ei.jsx)(Zh,{children:(0,ei.jsx)(ef,{children:(0,ei.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,ei.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})})}),(0,ei.jsxs)(tf,{children:[(0,ei.jsx)(nf,{children:"Ejercicios"}),(0,ei.jsx)(rf,{children:"Rutinas de ejercicios sugeridas para ti"}),(0,ei.jsxs)(af,{children:[(0,ei.jsxs)(of,{children:[(0,ei.jsx)("span",{className:"number",children:"50+"}),(0,ei.jsx)("span",{children:"Rutinas"})]}),(0,ei.jsxs)(of,{children:[(0,ei.jsx)("span",{className:"number",children:"24/7"}),(0,ei.jsx)("span",{children:"Acceso"})]})]})]})]})]}),(0,ei.jsxs)(Xh,{custom:1,initial:"hidden",animate:"visible",variants:t,onClick:()=>e("/recipes"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,ei.jsx)(Qh,{src:"/comidas.jpeg"}),(0,ei.jsxs)(Jh,{children:[(0,ei.jsx)(Zh,{children:(0,ei.jsx)(ef,{children:(0,ei.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,ei.jsx)("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})})}),(0,ei.jsxs)(tf,{children:[(0,ei.jsx)(nf,{children:"Recetas"}),(0,ei.jsx)(rf,{children:"Deliciosas recetas saludables dise\xf1adas por nutricionistas especializados"}),(0,ei.jsxs)(af,{children:[(0,ei.jsxs)(of,{children:[(0,ei.jsx)("span",{className:"number",children:"10+"}),(0,ei.jsx)("span",{children:"Recetas"})]}),(0,ei.jsxs)(of,{children:[(0,ei.jsx)("span",{className:"number",children:"\u26054.9"}),(0,ei.jsx)("span",{children:"Rating"})]})]})]})]})]})]})})]})}),lf=Qr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  background-color: #f8f9fa;
  position: relative;
`,cf=Qr.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,uf=Qr.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`,df=Qr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`,mf=Qr.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 25px;
  padding: 12px 16px;
  gap: 12px;
  border: 2px solid #e0e0e0;
`,pf=Qr.div`
  width: 20px;
  height: 20px;
  color: #666;
`,hf=Qr.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
`,ff=Qr.button`
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
`,gf=Qr.button`
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
`,yf=Qr.div`
  padding: 24px 20px;
  flex: 1;
`,bf=Qr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,vf=Qr.div`
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
`,xf=Qr.div`
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
`,wf=Qr.h3`
  color: white;
  font-size: 16px;
  font-weight: 600;  
  margin: 0;
  text-align: center;
`,Sf=()=>{const e=Z();return(0,ei.jsxs)(lf,{children:[(0,ei.jsxs)(cf,{children:[(0,ei.jsx)(uf,{children:"Actividades"}),(0,ei.jsxs)(df,{children:[(0,ei.jsxs)(mf,{children:[(0,ei.jsx)(pf,{children:(0,ei.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,ei.jsx)("path",{d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"})})}),(0,ei.jsx)(hf,{placeholder:"Buscar actividad"})]}),(0,ei.jsx)(ff,{children:"Buscar"}),(0,ei.jsx)(gf,{children:(0,ei.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,ei.jsx)("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),(0,ei.jsx)("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),(0,ei.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),(0,ei.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),(0,ei.jsx)("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),(0,ei.jsx)("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),(0,ei.jsx)("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),(0,ei.jsx)("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),(0,ei.jsx)("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]})})]})]}),(0,ei.jsx)(yf,{children:(0,ei.jsx)(bf,{children:[{name:"Caminar",gradient:"linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)"},{name:"Nadar",gradient:"linear-gradient(135deg, #4a7c59 0%, #6b8e6b 100%)"},{name:"Meditar",gradient:"linear-gradient(135deg, #7c9885 0%, #9bb99e 100%)"},{name:"Montar bici",gradient:"linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)"},{name:"Bailar",gradient:"linear-gradient(135deg, #6b8e6b 0%, #8ab08a 100%)"},{name:"Yoga",gradient:"linear-gradient(135deg, #8ab08a 0%, #7c9885 100%)"},{name:"T\xe9cnicas de respiraci\xf3n",gradient:"linear-gradient(135deg, #9bb99e 0%, #6b8e6b 100%)"},{name:"Pilates",gradient:"linear-gradient(135deg, #5a7a5a 0%, #4a7c59 100%)"},{name:"Acuaerobicos",gradient:"linear-gradient(135deg, #4a7c59 0%, #2d5a3d 100%)"}].map(((t,n)=>(0,ei.jsx)(vf,{gradient:t.gradient,onClick:()=>{return n=t.name,console.log(`Selected activity: ${n}`),void e("/discover");var n},children:(0,ei.jsx)(xf,{children:(0,ei.jsx)(wf,{children:t.name})})},n)))})})]})},kf=JSON.parse('{"categories":{"hipertenso":{"name":"Hipertenso","slug":"hipertenso","description":"Ejercicios especializados para personas con hipertensi\xf3n","color":"#2d5a3d","exercises":{"caminar":{"name":"Caminar","slug":"caminar","description":"Caminata suave para mejorar la circulaci\xf3n","image":"/exercises/walking.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"12m","calories":110,"targetAreas":["Cardiovascular","Circulaci\xf3n"],"exercises":[{"name":"Caminata suave hipertenso","duration":"12m","type":"ejercicio","instructions":"Caminata muy suave, monitorea tu presi\xf3n arterial","image":"/exercises/walk-hypertension.jpg"}]}}},"yoga":{"name":"Yoga","slug":"yoga","description":"Posturas de yoga para relajaci\xf3n y control de presi\xf3n","image":"/exercises/yoga.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"18m","calories":65,"targetAreas":["Relajaci\xf3n","Presi\xf3n arterial"],"exercises":[{"name":"Yoga para hipertensi\xf3n","duration":"18m","type":"relajacion","instructions":"Posturas suaves para reducir la presi\xf3n arterial","image":"/exercises/yoga-hypertension.jpg"}]}}},"respiracion":{"name":"T\xe9cnicas de respiraci\xf3n","slug":"respiracion","description":"Ejercicios de respiraci\xf3n para reducir estr\xe9s","image":"/exercises/breathing.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Control de estr\xe9s"],"exercises":[{"name":"Respiraci\xf3n para hipertensi\xf3n","duration":"10m","type":"respiracion","instructions":"T\xe9cnicas espec\xedficas para controlar la presi\xf3n","image":"/exercises/breathing-hypertension.jpg"}]}}},"nadar":{"name":"Nadar","slug":"nadar","description":"Nataci\xf3n de bajo impacto para hipertensos","image":"/exercises/swimming.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"22m","calories":165,"targetAreas":["Cardiovascular","Bajo impacto"],"exercises":[{"name":"Nataci\xf3n para hipertensos","duration":"22m","type":"ejercicio","instructions":"Nataci\xf3n muy suave, evita esfuerzos intensos","image":"/exercises/swim-hypertension.jpg"}]}}},"meditar":{"name":"Meditar","slug":"meditar","description":"Meditaci\xf3n para control de presi\xf3n arterial","image":"/exercises/meditation.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":25,"targetAreas":["Relajaci\xf3n","Control mental"],"exercises":[{"name":"Meditaci\xf3n anti-estr\xe9s","duration":"15m","type":"relajacion","instructions":"Meditaci\xf3n enfocada en reducir el estr\xe9s","image":"/exercises/meditation-hypertension.jpg"}]}}},"bici":{"name":"Montar bici","slug":"bici","description":"Ciclismo suave para hipertensos","image":"/exercises/cycling.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":180,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Ciclismo para hipertensos","duration":"25m","type":"ejercicio","instructions":"Pedalea suavemente, controla tu ritmo card\xedaco","image":"/exercises/cycling-hypertension.jpg"}]}}},"pilates":{"name":"Pilates","slug":"pilates","description":"Pilates suave para hipertensos","image":"/exercises/pilates.jpg","category":"fuerza","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":85,"targetAreas":["Core","Postura"],"exercises":[{"name":"Pilates para hipertensos","duration":"20m","type":"fuerza","instructions":"Movimientos muy controlados y suaves","image":"/exercises/pilates-hypertension.jpg"}]}}},"bailar":{"name":"Bailar","slug":"bailar","description":"Baile terap\xe9utico para hipertensos","image":"/exercises/dancing.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"18m","calories":120,"targetAreas":["Cardiovascular","Estado de \xe1nimo"],"exercises":[{"name":"Baile terap\xe9utico","duration":"18m","type":"ejercicio","instructions":"Movimientos suaves al ritmo de la m\xfasica","image":"/exercises/dance-therapeutic.jpg"}]}}},"acuaerobicos":{"name":"Acuaer\xf3bicos","slug":"acuaerobicos","description":"Ejercicios en agua para hipertensos","image":"/exercises/water-aerobics.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":150,"targetAreas":["Cardiovascular","Articulaciones"],"exercises":[{"name":"Acuaer\xf3bicos para hipertensos","duration":"30m","type":"ejercicio","instructions":"Ejercicios suaves en el agua","image":"/exercises/water-aerobics-hypertension.jpg"}]}}}},"days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"11m 22s","calories":122,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Extended Child Pose","duration":"25s","type":"calentamiento","instructions":"Posici\xf3n de relajaci\xf3n para comenzar","image":"/exercises/child-pose.jpg"},{"name":"Childs pose","duration":"25s","type":"calentamiento","instructions":"Mant\xe9n la posici\xf3n y respira profundamente","image":"/exercises/child-pose2.jpg"},{"name":"Cross Touch And Reach","duration":"25s","type":"calentamiento","instructions":"Movimiento suave de brazos cruzados","image":"/exercises/cross-touch.jpg"}]},"2":{"name":"D\xeda 2","level":"Intermedio","duration":"8m 42s","calories":93,"targetAreas":["Gl\xfateos","Pierna","Core"],"exercises":[{"name":"Gentle Warm Up","duration":"30s","type":"calentamiento","instructions":"Calentamiento suave para hipertensos","image":"/exercises/warmup.jpg"}]}}},"diabeticos":{"name":"Diab\xe9ticos","slug":"diabeticos","description":"Ejercicios especializados para personas con diabetes","color":"#ff9a9e","exercises":{"caminar":{"name":"Caminar","slug":"caminar","description":"Caminata regular para control de az\xfacar","image":"/exercises/walking.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":130,"targetAreas":["Cardiovascular","Control gluc\xe9mico"],"exercises":[{"name":"Caminata para diab\xe9ticos","duration":"20m","type":"ejercicio","instructions":"Caminata regular, controla tu glucosa antes y despu\xe9s","image":"/exercises/walk-diabetes.jpg"}]}}},"nadar":{"name":"Nadar","slug":"nadar","description":"Nataci\xf3n de bajo impacto para control gluc\xe9mico","image":"/exercises/swimming.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":190,"targetAreas":["Cardiovascular","Control gluc\xe9mico"],"exercises":[{"name":"Nataci\xf3n para diab\xe9ticos","duration":"25m","type":"ejercicio","instructions":"Nataci\xf3n moderada, ideal para control de az\xfacar","image":"/exercises/swim-diabetes.jpg"}]}}},"meditar":{"name":"Meditar","slug":"meditar","description":"Meditaci\xf3n para control del estr\xe9s y glucosa","image":"/exercises/meditation.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"12m","calories":22,"targetAreas":["Relajaci\xf3n","Control del estr\xe9s"],"exercises":[{"name":"Meditaci\xf3n para diab\xe9ticos","duration":"12m","type":"relajacion","instructions":"Reduce el estr\xe9s que afecta los niveles de glucosa","image":"/exercises/meditation-diabetes.jpg"}]}}},"bici":{"name":"Montar bici","slug":"bici","description":"Ciclismo para control gluc\xe9mico","image":"/exercises/cycling.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"28m","calories":210,"targetAreas":["Cardiovascular","Piernas","Control gluc\xe9mico"],"exercises":[{"name":"Ciclismo para diab\xe9ticos","duration":"28m","type":"ejercicio","instructions":"Excelente para mejorar la sensibilidad a la insulina","image":"/exercises/cycling-diabetes.jpg"}]}}},"bailar":{"name":"Bailar","slug":"bailar","description":"Baile para mejorar control gluc\xe9mico","image":"/exercises/dancing.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"22m","calories":155,"targetAreas":["Cardiovascular","Coordinaci\xf3n"],"exercises":[{"name":"Baile para diab\xe9ticos","duration":"22m","type":"ejercicio","instructions":"Ejercicio divertido que ayuda con la glucosa","image":"/exercises/dance-diabetes.jpg"}]}}},"yoga":{"name":"Yoga","slug":"yoga","description":"Yoga para diab\xe9ticos","image":"/exercises/yoga.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":80,"targetAreas":["Flexibilidad","Control del estr\xe9s"],"exercises":[{"name":"Yoga para diab\xe9ticos","duration":"25m","type":"estiramiento","instructions":"Posturas que ayudan al control metab\xf3lico","image":"/exercises/yoga-diabetes.jpg"}]}}},"respiracion":{"name":"T\xe9cnicas de respiraci\xf3n","slug":"respiracion","description":"Respiraci\xf3n para control del estr\xe9s diab\xe9tico","image":"/exercises/breathing.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"8m","calories":18,"targetAreas":["Relajaci\xf3n","Control hormonal"],"exercises":[{"name":"Respiraci\xf3n para diab\xe9ticos","duration":"8m","type":"respiracion","instructions":"T\xe9cnicas para controlar el estr\xe9s y la glucosa","image":"/exercises/breathing-diabetes.jpg"}]}}},"pilates":{"name":"Pilates","slug":"pilates","description":"Pilates para diab\xe9ticos","image":"/exercises/pilates.jpg","category":"fuerza","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":120,"targetAreas":["Core","Fuerza","Control postural"],"exercises":[{"name":"Pilates para diab\xe9ticos","duration":"30m","type":"fuerza","instructions":"Fortalecimiento que mejora el metabolismo","image":"/exercises/pilates-diabetes.jpg"}]}}},"acuaerobicos":{"name":"Acuaer\xf3bicos","slug":"acuaerobicos","description":"Ejercicios en agua para diab\xe9ticos","image":"/exercises/water-aerobics.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"35m","calories":175,"targetAreas":["Cardiovascular","Bajo impacto"],"exercises":[{"name":"Acuaer\xf3bicos para diab\xe9ticos","duration":"35m","type":"ejercicio","instructions":"Ejercicios en agua ideales para diab\xe9ticos","image":"/exercises/water-aerobics-diabetes.jpg"}]}}}},"days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m 30s","calories":140,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Warm Up Walk","duration":"5m","type":"calentamiento","instructions":"Caminata suave de calentamiento","image":"/exercises/walk-warmup.jpg"}]}}},"ambas":{"name":"Ambas Condiciones","slug":"ambas","description":"Ejercicios seguros para personas con hipertensi\xf3n y diabetes","color":"#a8edea","exercises":{"caminar":{"name":"Caminar","slug":"caminar","description":"Caminata adaptada","image":"/exercises/walking.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":120,"targetAreas":["Cardiovascular","Resistencia"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Caminar","duration":"30m","type":"ejercicio","instructions":"Caminata suave de calentamiento","image":"/ejercicio/caminar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}},"yoga":{"name":"Yoga","slug":"yoga","description":"Yoga adaptado","image":"/exercises/yoga.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"15m","calories":60,"targetAreas":["Flexibilidad","Equilibrio","Relajaci\xf3n"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Postura del ni\xf1o","duration":"40m","type":"estiramiento","instructions":"Mant\xe9n cada postura respirando profundamente","image":"/ejercicio/postura-del-nino.png"},{"name":"Postura de relajaci\xf3n acostada","duration":"5m","type":"relajacion","instructions":"Postura de relajaci\xf3n acostada","image":"/ejercicio/postura-de-relajacion-acostada.png"}]}}},"pilates":{"name":"Pilates","slug":"pilates","description":"Pilates de bajo impacto","image":"/exercises/pilates.jpg","category":"fuerza","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"25m","calories":100,"targetAreas":["Core","Fuerza","Flexibilidad"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Estiramiento de gluteos izquierdo","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos izquierdo","image":"/ejercicio/estiramiento-de-gluteos-izquierdo.png"},{"name":"Estiramiento de gluteos derecho","duration":"15m","type":"ejercicio","instructions":"Estiramiento de gluteos derecho","image":"/ejercicio/estiramiento-de-gluteos-derecho.png"},{"name":"Abduccion de pierna en postura recostada","duration":"15m","type":"ejercicio","instructions":"Abduccion de pierna en postura recostada","image":"/ejercicio/abduccion-de-pierna-en-postura-recostada.png"},{"name":"Puente","duration":"15m","type":"ejercicio","instructions":"Puente","image":"/ejercicio/puente.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}},"nadar":{"name":"Nataci\xf3n","slug":"nadar","description":"Nataci\xf3n suave y controlada","image":"/exercises/swimming.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"20m","calories":180,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Asentimientos hacia arriba y hacia abajo,","duration":"5m","type":"calentamiento","instructions":"Asentimientos hacia arriba y hacia abajo,","image":"/estiramiento/los-asentimientos-hacia-arriba-y-hacia-abajo.gif"},{"name":"Juntar las manos detr\xe1s de la espalda","duration":"1m","type":"calentamiento","instructions":"Juntar las manos detr\xe1s de la espalda","image":"/estiramiento/juntar-las-manos-detras-de-la-espalda.png"},{"name":"Nadar","duration":"30m","type":"ejercicio","instructions":"Nadar","image":"/ejercicio/nadar.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}},"meditar":{"name":"Meditar","slug":"meditar","description":"Meditaci\xf3n para reducir estr\xe9s y mejorar control metab\xf3lico","image":"/exercises/meditation.jpg","category":"relajacion","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"10m","calories":20,"targetAreas":["Relajaci\xf3n","Mente"],"exercises":[{"name":"Meditaci\xf3n b\xe1sica","duration":"15m","type":"relajacion","instructions":"Si\xe9ntate c\xf3modamente y enf\xf3cate en tu respiraci\xf3n","image":"/ejercicio/meditar.png"}]}}},"bici":{"name":"Montar bici","slug":"bici","description":"Ciclismo adaptado y controlado","image":"/exercises/cycling.jpg","category":"cardiovascular","days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"2":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"3":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"4":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"5":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"6":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]},"7":{"name":"D\xeda 1","level":"Principiante","duration":"30m","calories":200,"targetAreas":["Cardiovascular","Piernas"],"exercises":[{"name":"Estiramiento de mu\xf1ecas y tobillo izquierdo","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo izquierdo","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-izquierdo.gif"},{"name":"Estiramiento de mu\xf1ecas y tobillo derecho","duration":"1m","type":"calentamiento","instructions":"Estiramiento de mu\xf1ecas y tobillo derecho","image":"/estiramiento/estiramiento-de-munecas-y-tobillo-derecho.gif"},{"name":"C\xedrculos con las rodillas","duration":"1m","type":"calentamiento","instructions":"C\xedrculos con las rodillas","image":"/estiramiento/circulos-con-las-rodillas.gif"},{"name":"Flexi\xf3n de rodilla de pie","duration":"1m","type":"calentamiento","instructions":"Flexi\xf3n de rodilla de pie","image":"/estiramiento/flexion-de-rodilla-de-pie.gif"},{"name":"Ciclismo suave","duration":"60m","type":"ejercicio","instructions":"Pedalea a ritmo c\xf3modo, monitorea tu frecuencia card\xedaca","image":"/ejercicio/ciclismo.png"},{"name":"Descanso e hidrataci\xf3n","duration":"5m","type":"relajacion","instructions":"Descanso e hidrataci\xf3n","image":"/relajacion/descanso-e-hidratacion.png"}]}}}},"days":{"1":{"name":"D\xeda 1","level":"Principiante","duration":"6m 59s","calories":85,"targetAreas":["Gl\xfateos","Pierna","Espalda","Tronco","Abdomen"],"exercises":[{"name":"Extended Child Pose","duration":"25s","type":"calentamiento","instructions":"Posici\xf3n de relajaci\xf3n para comenzar suavemente","image":"/exercises/child-pose.jpg"},{"name":"Childs pose","duration":"25s","type":"calentamiento","instructions":"Mant\xe9n la posici\xf3n y controla tu respiraci\xf3n","image":"/exercises/child-pose2.jpg"},{"name":"Cross Touch And Reach","duration":"25s","type":"calentamiento","instructions":"Movimiento controlado, monitorea tu presi\xf3n","image":"/exercises/cross-touch.jpg"},{"name":"Wood Chopper","duration":"30s","type":"ejercicio","instructions":"Movimiento de hacha, controla tu glucosa durante el ejercicio","image":"/exercises/wood-chopper.jpg"}]},"2":{"name":"D\xeda 2","level":"Intermedio","duration":"8m 42s","calories":93,"targetAreas":["Cardiovascular","Core","Equilibrio"],"exercises":[{"name":"Gentle Cardio","duration":"45s","type":"ejercicio","instructions":"Cardio suave, monitorea signos vitales","image":"/exercises/gentle-cardio.jpg"}]},"3":{"name":"D\xeda 3","level":"Intermedio","duration":"6m 50s","calories":73,"targetAreas":["Flexibilidad","Relajaci\xf3n"],"exercises":[{"name":"Flexibility Routine","duration":"60s","type":"estiramiento","instructions":"Rutina de flexibilidad adaptada","image":"/exercises/flexibility.jpg"}]},"4":{"name":"D\xeda 4","level":"Intermedio","duration":"6m 1s","calories":64,"targetAreas":["Fuerza","Resistencia"],"exercises":[{"name":"Low Impact Strength","duration":"40s","type":"fuerza","instructions":"Ejercicios de fuerza de bajo impacto","image":"/exercises/low-impact.jpg"}]},"5":{"name":"D\xeda 5","level":"Descanso","duration":"0m","calories":0,"targetAreas":["Recuperaci\xf3n"],"restDay":true,"message":"Mereces descansar hoy"}}}}}'),$f=(0,e.createContext)(),Ef={completedDays:{},completedExercises:{},streakDays:0,totalDaysCompleted:0,lastActivity:null},jf=(e,t)=>{switch(t.type){case"COMPLETE_EXERCISE":const n=`${t.payload.category}-${t.payload.day}-${t.payload.exerciseIndex}`;return{...e,completedExercises:{...e.completedExercises,[n]:!0},lastActivity:(new Date).toISOString()};case"COMPLETE_DAY":const r=`${t.payload.category}-${t.payload.day}`,i={...e.completedDays,[r]:!0};return{...e,completedDays:i,totalDaysCompleted:Object.values(i).filter(Boolean).length,streakDays:e.streakDays+1,lastActivity:(new Date).toISOString()};case"LOAD_PROGRESS":return{...e,...t.payload};case"RESET_PROGRESS":return Ef;default:return e}},Cf=t=>{let{children:n}=t;const[r,i]=(0,e.useReducer)(jf,Ef);(0,e.useEffect)((()=>{const e=localStorage.getItem("exerciseProgress");if(e)try{const t=JSON.parse(e);i({type:"LOAD_PROGRESS",payload:t})}catch(t){console.error("Error loading progress:",t)}}),[]),(0,e.useEffect)((()=>{localStorage.setItem("exerciseProgress",JSON.stringify(r))}),[r]);const a=(e,t,n)=>{const i=`${e}-${t}-${n}`;return!!r.completedExercises[i]},o={...r,completeExercise:(e,t,n)=>{i({type:"COMPLETE_EXERCISE",payload:{category:e,day:t,exerciseIndex:n}})},completeDay:(e,t)=>{i({type:"COMPLETE_DAY",payload:{category:e,day:t}})},isExerciseCompleted:a,isDayCompleted:(e,t)=>{const n=`${e}-${t}`;return!!r.completedDays[n]},getDayProgress:(e,t,n)=>{let r=0;for(let i=0;i<n;i++)a(e,t,i)&&r++;return{completed:r,total:n,percentage:r/n*100}},resetProgress:()=>{i({type:"RESET_PROGRESS"})}};return(0,ei.jsx)($f.Provider,{value:o,children:n})},Pf=()=>{const t=(0,e.useContext)($f);if(!t)throw new Error("useProgress must be used within a ProgressProvider");return t},Tf=Qr.div`
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
`,zf=Qr.div`
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
`,Af=Qr(Qd.button)`
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
`,Rf=Qr.div`
    text-align: center;
`,Df=Qr.h1`
   font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,Mf=Qr.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    margin: ${e=>e.theme.spacing.sm} 0 0 0;
    font-weight: 400;
`,Lf=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    flex: 1;
`,Of=Qr(Qd.div)`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.lg};
`,_f=Qr(Qd.div)`
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
`,Nf=Qr.div`
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
`,Ff=Qr.div`
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
`,If=(Qr.div`
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
`,Qr.div`
    flex: 1;
    color: white;
`),Vf=Qr.h3`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 700;
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.01em;
    color: white;
`,Uf=Qr.p`
    font-size: ${e=>e.theme.fontSizes.sm};
    margin: 0 0 ${e=>e.theme.spacing.md} 0;
    opacity: 0.9;
    line-height: 1.4;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`,Bf=Qr.div`
    display: flex;
    gap: ${e=>e.theme.spacing.md};
`,Hf=Qr.div`
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

`,qf=(Qr(Qd.div)`
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
`,Qr(Qd.div)`
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
`),Wf=()=>{const{category:e}=ee(),t=Z(),n=kf.categories[e];if(!n)return(0,ei.jsx)("div",{children:"Categor\xeda no encontrada"});return(0,ei.jsxs)(Tf,{children:[(0,ei.jsxs)(zf,{children:[(0,ei.jsx)(Af,{onClick:()=>{t("/discover")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190"}),(0,ei.jsxs)(Rf,{children:[(0,ei.jsx)(Df,{children:"Ejercicios"}),(0,ei.jsx)(Mf,{children:"Elige tu rutina perfecta"})]})]}),(0,ei.jsxs)(Lf,{children:[(0,ei.jsx)(qf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:(0,ei.jsxs)("div",{className:"stats-grid",children:[(0,ei.jsxs)("div",{className:"stat-item",children:[(0,ei.jsx)("h4",{children:Object.keys(n.exercises).length}),(0,ei.jsx)("p",{children:"Ejercicios"})]}),(0,ei.jsxs)("div",{className:"stat-item",children:[(0,ei.jsx)("h4",{children:"24/7"}),(0,ei.jsx)("p",{children:"Acceso"})]})]})}),(0,ei.jsx)(Of,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.6},children:Object.entries(n.exercises).map(((n,r)=>{let[i,a]=n;return(0,ei.jsxs)(_f,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1*r,duration:.5},onClick:()=>(n=>{t(`/category/${e}/exercise/${n}`)})(i),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,ei.jsx)(Nf,{src:`/fondos/${i}.png`}),(0,ei.jsx)(Ff,{children:(0,ei.jsxs)(If,{children:[(0,ei.jsx)(Vf,{children:a.name}),(0,ei.jsx)(Uf,{children:a.description}),(0,ei.jsxs)(Bf,{children:[(0,ei.jsx)(Hf,{children:a.category}),(0,ei.jsx)(Hf,{children:"M\xfaltiples d\xedas"})]})]})})]},i)}))})]})]})},Yf=Qr.div`
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
`,Kf=Qr.div`
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
`,Gf=Qr(Qd.button)`
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
`,Xf=Qr.div`
    text-align: center;
    margin-top: 20px;
`,Qf=(Qr.h1`
    font-size: 18px;
    font-weight: 400;
    color: #666;
    margin: 0;
`,Qr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 10px 0;
`,Qr.span`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`,Qr.span`
    background: ${e=>e.theme.colors.primary};
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bold;
`,Qr.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 15px 0 5px 0;
`,Qr.div`
    display: inline-block;
    background-color: #f0f0f0;
    color: #666;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 20px;
`,Qr.div`
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`),Jf=(Qr.div`
    display: inline-block;
    background: #e5e7eb;
    color: #374151;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`,Qr.div`
    padding: 20px;
    flex: 1;
    border-radius: 25px 25px 0 0;
    margin-top: -20px;
    background-color: white;
    z-index: 5;
`),Zf=Qr.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,eg=Qr.div`
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
`,tg=Qr.div`
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
`,ng=Qr.div`
    flex: 1;
`,rg=Qr.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
`,ig=Qr.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
`,ag=Qr.div`
    color: #999;
    font-size: 18px;
`,og=Qr.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #666;
`,sg=Qr.div`
    width: 100%;
    height: 4px;
    background-color: #e5e7eb;
    border-radius: 2px;
    margin-top: 8px;
    overflow: hidden;
`,lg=Qr.div`
    height: 100%;
    background-color: ${e=>e.theme.colors.primarySolid};
    width: ${e=>e.progress}%;
    transition: width 0.3s ease;
`,cg=Qr(eg)`
    background: linear-gradient(135deg, #fef3c7, #fbbf24);
    border: none;
`,ug=Qr.div`
    width: 32px;
    height: 32px;
    background: rgba(251, 191, 36, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`,dg=Qr.div`
    color: #92400e;
    font-weight: 600;
`,mg=()=>{const{category:e,exercise:t}=ee(),n=Z(),{isDayCompleted:r,getDayProgress:i}=Pf(),a=kf.categories[e],o=null===a||void 0===a?void 0:a.exercises[t];if(!a||!o)return(0,ei.jsx)("div",{children:"Ejercicio no encontrado"});const s=o.days[1].exercises.reduce(((e,t)=>e+parseInt(t.duration.split("m")[0])),0);return(0,ei.jsxs)(Yf,{children:[(0,ei.jsxs)(Kf,{src:`/fondos/${t}.png`,children:[(0,ei.jsx)(Gf,{onClick:()=>{n(`/category/${e}`)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190"}),(0,ei.jsx)(Xf,{children:(0,ei.jsx)(Qf,{color:a.color,children:o.name})})]}),(0,ei.jsx)(Jf,{children:(0,ei.jsx)(Zf,{children:Object.entries(o.days).map((a=>{var o;let[l,c]=a;const u=r(`${e}-${t}`,l),d=i(`${e}-${t}`,l,(null===(o=c.exercises)||void 0===o?void 0:o.length)||0);return c.restDay?(0,ei.jsxs)(cg,{children:[(0,ei.jsx)(ug,{children:"\ud83c\udf19"}),(0,ei.jsxs)(ng,{children:[(0,ei.jsx)(rg,{children:(0,ei.jsx)(ig,{children:c.name})}),(0,ei.jsx)(dg,{children:c.message})]})]},l):(0,ei.jsxs)(eg,{onClick:()=>(r=>{n(`/category/${e}/exercise/${t}/day/${r}`)})(l),children:[(0,ei.jsx)(tg,{completed:u}),(0,ei.jsxs)(ng,{children:[(0,ei.jsxs)(rg,{children:[(0,ei.jsxs)(ig,{children:["D\xeda ",l]}),(0,ei.jsx)(ag,{children:"\u203a"})]}),(0,ei.jsx)(og,{children:(0,ei.jsxs)("span",{children:["\u23f1 ",s,"m"]})}),(0,ei.jsx)(sg,{children:(0,ei.jsx)(lg,{progress:d.percentage})})]})]},l)}))})})]})},pg=Qr.div`
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
`,hg=Qr.div`
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
`,fg=Qr.button`
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
`,gg=Qr.div`
    text-align: center;
    margin-top: 20px;
`,yg=Qr.h1`
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,bg=(Qr.div`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e7eb;
    cursor: pointer;

    &:hover {
        color: #ef4444;
    }
`,Qr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
`,Qr.div`
    padding: 20px;
    flex: 1;
    border-radius: 25px 25px 0 0;
    margin-top: -20px;
    background-color: white;
    z-index: 5;
`),vg=Qr.div`
    margin-bottom: 24px;
`,xg=Qr.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
`,wg=Qr.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`,Sg=Qr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: #666;
`,kg=Qr.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`,$g=Qr.span`
    font-size: 12px;
    text-align: center;
`,Eg=Qr.div`
    background: white;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 20px;
`,jg=(Qr.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`,Qr.h4`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
`,Qr.span`
    color: ${e=>e.theme.colors.primarySolid};
    font-size: 14px;
    font-weight: 600;
`,Qr.div`
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
`,Qr.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`),Cg=Qr.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
`,Pg=Qr.div`
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
`,Tg=Qr.div`
    flex: 1;
`,zg=Qr.h5`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
`,Ag=Qr.span`
    font-size: 12px;
    color: #666;
    text-transform: lowercase;
`,Rg=Qr.span`
    font-size: 12px;
    color: ${e=>e.theme.colors.primarySolid};
    font-weight: 600;
`,Dg=Qr.div`
    color: #999;
    font-size: 18px;
`,Mg=Qr.button`
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
`,Lg=Qr.div`
    width: 0;
    height: 0;
    border-left: 8px solid white;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    margin-left: 4px;
`,Og=()=>{var t,n;const{category:r,exercise:i,day:a}=ee(),o=Z(),{getDayProgress:s,isExerciseCompleted:l}=Pf(),[c,u]=e.useState(!0),d=kf.categories[r],m=null===d||void 0===d?void 0:d.exercises[i],p=null===m||void 0===m?void 0:m.days[a];if(!d||!m||!p)return(0,ei.jsx)("div",{children:"D\xeda no encontrado"});s(`${r}-${i}`,a,(null===(t=p.exercises)||void 0===t?void 0:t.length)||0);const h=e=>({"Gl\xfateos":"\ud83c\udf51",Pierna:"\ud83e\uddb5",Espalda:"\ud83d\udcaa",Tronco:"\ud83e\udec1",Abdomen:"\ud83d\udcaa",Cardiovascular:"\u2764\ufe0f",Core:"\ud83d\udcaa",Equilibrio:"\u2696\ufe0f",Flexibilidad:"\ud83e\udd38","Relajaci\xf3n":"\ud83e\uddd8",Fuerza:"\ud83d\udcaa",Resistencia:"\ud83c\udfc3","Recuperaci\xf3n":"\ud83d\ude34"}[e]||"\ud83d\udcaa");return(0,ei.jsxs)(pg,{children:[(0,ei.jsxs)(hg,{src:`/fondos/${i}.png`,children:[(0,ei.jsx)(fg,{onClick:()=>{o(`/category/${r}/exercise/${i}`)},children:"\u2190"}),(0,ei.jsx)(gg,{children:(0,ei.jsxs)(yg,{children:["D\xeda ",a]})})]}),(0,ei.jsxs)(bg,{children:[(0,ei.jsxs)(vg,{children:[(0,ei.jsx)(xg,{children:"\xc1rea Objetivo"}),(0,ei.jsx)(wg,{children:p.targetAreas.map(((e,t)=>(0,ei.jsxs)(Sg,{children:[(0,ei.jsx)(kg,{children:h(e)}),(0,ei.jsx)($g,{children:e})]},t)))})]}),(0,ei.jsx)(Eg,{children:c&&(0,ei.jsx)(jg,{children:null===(n=p.exercises)||void 0===n?void 0:n.map(((e,t)=>(0,ei.jsxs)(Cg,{children:[(0,ei.jsx)(Pg,{children:(0,ei.jsx)("img",{src:e.image,alt:e.name})}),(0,ei.jsxs)(Tg,{children:[(0,ei.jsx)(zg,{children:e.name}),(0,ei.jsx)(Ag,{children:e.type})]}),(0,ei.jsx)(Rg,{children:e.duration}),(0,ei.jsx)(Dg,{children:"\u203a"})]},t)))})}),(0,ei.jsxs)(Mg,{onClick:()=>{p.exercises&&p.exercises.length>0&&o(`/category/${r}/exercise/${i}/day/${a}/exercise/0`)},children:["COMENZAR",(0,ei.jsx)(Lg,{})]})]})]})},_g=Qr.div`
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
`,Ng=Qr.div`
    padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${e=>e.theme.colors.surface};
    border-radius: ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]} 0 0;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Fg=Qr(Qd.button)`
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
`,Ig=(Qr.h1`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 600;
    color: ${e=>e.theme.colors.text};
    margin: 0;
    font-family: ${e=>e.theme.fonts.display};
`,Qr.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.background};
`),Vg=Qr(Qd.div)`
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
`,Ug=Qr.div`
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
`,Bg=Qr(Qd.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`,Hg=Qr.h2`
    font-size: ${e=>e.theme.fontSizes["4xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 ${e=>e.theme.spacing.lg} 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,qg=Qr.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.lg};
    margin: 0 0 ${e=>e.theme.spacing.xl} 0;
`,Wg=Qr(Qd.div)`
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
`,Yg=Qr.div`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-radius: 0 0 ${e=>e.theme.borderRadius["2xl"]} ${e=>e.theme.borderRadius["2xl"]};
    border-top: 1px solid ${e=>e.theme.colors.border};
`,Kg=Qr.div`
    margin-bottom: ${e=>e.theme.spacing.xl};
    text-align: center;
`,Gg=Qr.h3`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 600;
    color: ${e=>e.theme.colors.text};
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
`,Xg=Qr.div`
    background: ${e=>e.theme.colors.glass};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${e=>e.theme.borderRadius.full};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
    display: inline-block;
    font-size: ${e=>e.theme.fontSizes.sm};
    font-weight: 500;
    color: ${e=>e.theme.colors.textLight};
`,Qg=Qr.div`
    text-align: center;
    margin-bottom: ${e=>e.theme.spacing.xl};
`,Jg=Qr.div`
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
`,Zg=Qr.div`
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
`,ey=Qr(Qd.button)`
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
`,ty=Qr(ey)`
    width: 72px;
    height: 72px;
    font-size: ${e=>e.theme.fontSizes.xl};
`,ny=Qr(Qd.button)`
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
`,ry=(Qr(Qd.div)`
    width: 100%;
    height: 6px;
    background: ${e=>e.theme.colors.backgroundDark};
    border-radius: ${e=>e.theme.borderRadius.full};
    overflow: hidden;
    margin-bottom: ${e=>e.theme.spacing.lg};
`,Qr(Qd.div)`
    height: 100%;
    background: ${e=>e.theme.colors.primary};
    border-radius: ${e=>e.theme.borderRadius.full};
`,()=>{var t,n,r;const{category:i,exercise:a,day:o,exerciseIndex:s}=ee(),l=Z(),{completeExercise:c,completeDay:u,isExerciseCompleted:d}=Pf(),[m,p]=(0,e.useState)(30),[h,f]=(0,e.useState)(!1),[g,y]=(0,e.useState)(!1),[b,v]=(0,e.useState)(0),[x,w]=(0,e.useState)(!0),S=null===kf||void 0===kf||null===(t=kf.categories)||void 0===t?void 0:t[i],k=null===S||void 0===S?void 0:S.exercises[a],$=null===k||void 0===k?void 0:k.days[o],E=null===$||void 0===$||null===(n=$.exercises)||void 0===n?void 0:n[parseInt(s)],j=(null===$||void 0===$||null===(r=$.exercises)||void 0===r?void 0:r.length)||0,C=parseInt(s);(0,e.useEffect)((()=>{if(E){const e=E.duration;e.includes("s")?p(parseInt(e)):e.includes("m")&&p(60*parseInt(e))}}),[E]),(0,e.useEffect)((()=>{let e;return h&&m>0&&(e=setInterval((()=>{p((e=>e<=1?(f(!1),y(!0),w(!1),c(`${i}-${a}`,o,C),0):e-1)),v((e=>e+.1))}),1e3)),()=>clearInterval(e)}),[h,m,c,i,a,o,C]);const P=()=>{const e=C+1;e<j?l(`/category/${i}/exercise/${a}/day/${o}/exercise/${e}`):(u(`${i}-${a}`,o),l(`/category/${i}/exercise/${a}/day/${o}/completed`))};return E?(0,ei.jsxs)(_g,{children:[(0,ei.jsx)(Ng,{children:(0,ei.jsx)(Fg,{onClick:()=>{l(`/category/${i}/exercise/${a}/day/${o}`)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2715"})}),(0,ei.jsxs)(Ig,{children:[(0,ei.jsxs)(Vg,{children:[(0,ei.jsx)(gi,{children:x&&(0,ei.jsxs)(Bg,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.5},children:[(0,ei.jsx)(Hg,{children:"\xa1Prep\xe1rate ahora!"}),(0,ei.jsx)(qg,{children:"Prep\xe1rate para comenzar el ejercicio"}),(0,ei.jsx)(Wg,{animate:{scale:[1,1.1,1],rotate:[0,5,-5,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:"\ud83d\udd0a"})]})}),!x&&(0,ei.jsx)(Ug,{children:(0,ei.jsx)("img",{src:E.image,alt:E.name})})]}),(0,ei.jsxs)(Yg,{children:[(0,ei.jsxs)(Kg,{children:[(0,ei.jsx)(Gg,{children:E.name}),(0,ei.jsxs)(Xg,{children:["Saltar ",C+1,"/",j]})]}),(0,ei.jsx)(Qg,{children:(0,ei.jsx)(Jg,{children:(e=>{const t=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`})(m)})}),(0,ei.jsxs)(Zg,{children:[(0,ei.jsx)(ey,{onClick:()=>{const e=C-1;e>=0&&l(`/category/${i}/exercise/${a}/day/${o}/exercise/${e}`)},disabled:0===C,whileHover:{scale:0===C?1:1.1},whileTap:{scale:0===C?1:.95},children:"\u23ee"}),(0,ei.jsx)(ty,{primary:!0,onClick:()=>{f(!h),w(!1)},whileHover:{scale:1.1},whileTap:{scale:.95},children:h?"\u23f8":"\u25b6"}),(0,ei.jsx)(ey,{onClick:P,disabled:0===C&&!h,whileHover:{scale:0!==C||h?1.1:1},whileTap:{scale:0!==C||h?.95:1},children:"\u23ed"})]}),(0,ei.jsx)(gi,{children:g&&(0,ei.jsx)(ny,{onClick:P,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},whileHover:{scale:1.02},whileTap:{scale:.98},children:C+1<j?"Siguiente Ejercicio":"Finalizar D\xeda"})})]})]})]}):(0,ei.jsx)("div",{children:"Ejercicio no encontrado"})}),iy=Zr`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
`,ay=Zr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,oy=Qr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  color: white;
  text-align: center;
  padding: 20px;
`,sy=Qr.button`
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
`,ly=Qr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`,cy=Qr.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
  animation: ${iy} 2s infinite;
`,uy=Qr.div`
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
`,dy=Qr.div`
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
`,my=Qr.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`,py=Qr.p`
  font-size: 18px;
  color: #d1d5db;
  margin-bottom: 40px;
  max-width: 300px;
  line-height: 1.5;
`,hy=Qr.div`
  font-size: 16px;
  color: #9ca3af;
  margin-bottom: 40px;
`,fy=Qr.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,gy=Qr.button`
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
`,yy=Qr.button`
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
`,by=Qr.span`
  font-size: 18px;
`,vy=Qr.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  color: #9ca3af;
  font-size: 14px;
`,xy=Qr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,wy=Qr.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
`,Sy=Qr.div`
  font-size: 12px;
`,ky=()=>{const{category:e,exercise:t,day:n}=ee(),r=Z(),{totalDaysCompleted:i,streakDays:a}=Pf(),o=(new Date).toLocaleDateString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit"});return(0,ei.jsxs)(oy,{children:[(0,ei.jsx)(sy,{onClick:()=>{r(`/category/${e}/exercise/${t}`)},children:"\u2190"}),(0,ei.jsxs)(ly,{children:[(0,ei.jsx)(cy,{children:(0,ei.jsx)(uy,{children:(0,ei.jsx)(dy,{children:i})})}),(0,ei.jsxs)(my,{children:[i," D\xedas en Total"]}),(0,ei.jsxs)(py,{children:["Acumula ",i," d\xedas de ejercicio"]}),(0,ei.jsx)(hy,{children:o}),(0,ei.jsxs)(fy,{children:[(0,ei.jsx)(gy,{onClick:()=>{r(`/category/${e}/exercise/${t}`)},children:"CONTINUAR"}),(0,ei.jsxs)(yy,{onClick:()=>{navigator.share?navigator.share({title:"\xa1Complet\xe9 mi entrenamiento!",text:`\xa1Acabo de completar el ${n} d\xeda de ${t}! \ud83d\udcaa`,url:window.location.origin}):(navigator.clipboard.writeText(`\xa1Acabo de completar el ${n} d\xeda de ${t}! \ud83d\udcaa`),alert("\xa1Enlace copiado al portapapeles!"))},children:[(0,ei.jsx)(by,{children:"\ud83d\udce4"}),"COMPARTIR"]})]})]}),(0,ei.jsxs)(vy,{children:[(0,ei.jsxs)(xy,{children:[(0,ei.jsx)(wy,{children:a}),(0,ei.jsx)(Sy,{children:"Racha"})]}),(0,ei.jsxs)(xy,{children:[(0,ei.jsx)(wy,{children:i}),(0,ei.jsx)(Sy,{children:"Total"})]}),(0,ei.jsxs)(xy,{children:[(0,ei.jsx)(wy,{children:"85%"}),(0,ei.jsx)(Sy,{children:"Progreso"})]})]})]})},$y=JSON.parse('[{"id":1,"name":"At\xfan con salsa de aguacate","category":"Saludable","image":"/comidas/atun-con-salsa-de-aguacate.png","preparationTime":85,"servings":2,"calories":320,"difficulty":"F\xe1cil","description":"Delicioso plato saludable con at\xfan fresco y salsa de aguacate, perfecto para una comida ligera y saludable.","ingredients":["1 Taza de aguacate (en cubos)","2 Cucharadas Cebolla Morada picada","2 Cucharadas de Aceite de Oliva Virgen Extra","1 Cucharada de Jugo Puro de lim\xf3n","2 cucharaditas de perejil picado","4 filetes de at\xfan (250 g cada uno)","Sal y pimienta negra al gusto"],"instructions":["En un recipiente mezcle el aguacate, la cebolla, el aceite de oliva, el jugo de lim\xf3n, el perejil y lleve a la heladera por 2 horas aproximadamente.","Sazone los filetes de at\xfan con sal y pimienta negra al gusto.","Pincelar con un poco de aceite de oliva y asar los filetes por ambos lados hasta que est\xe9n dorados.","Acomoda las rebanadas en un refractario y coloca encima la salsa de aguacate."],"nutritionalInfo":{"protein":"35g","carbs":"12g","fat":"18g","fiber":"8g"}},{"id":2,"name":"Alas de pollo a la mostaza","category":"Italiana","image":"/comidas/alas-de-pollo-a-la-mostaza.png","preparationTime":40,"servings":4,"calories":450,"difficulty":"Intermedio","description":"Deliciosas alas de pollo marinadas en una salsa cremosa de mostaza y jengibre, perfectas para una comida sabrosa y baja en carbohidratos.","ingredients":["4 Muslos con Alitas de Pollo ","3 dientes de ajo ","5 Cucharadas de Mostaza Sin az\xfacar ","1 pieza de jengibre rallado ","Sal a gusto ","Aceite de Oliva Virgen Extra al gusto"],"instructions":["En un bol, sofre\xedr bien el ajo con la sal, y mezclar el jengibre y la mostaza.","Pasar la mitad de la mezcla sobre el pollo y reservar por 20 minutos.","Engrasa una fuente para horno con aceite de oliva y coloca la otra mitad de la mezcla encima de los muslos.","Llevar a horno precalentado a 200\xb0C hasta dorar."],"nutritionalInfo":{"protein":"22g","carbs":"65g","fat":"18g","fiber":"3g"}},{"id":3,"name":"Alb\xf3ndigas de pavo","category":"Mexicana","image":"/comidas/albondigas-de-pavo.png","preparationTime":35,"servings":3,"calories":380,"difficulty":"F\xe1cil","description":"Deliciosas alb\xf3ndigas de pavo con salsa de tomate y queso, perfectas para una comida saludable y deliciosa.","ingredients":["300g de carne de pavo picada","1 huevo cocido","1 huevo crudo","1 cebolla peque\xf1a","Jengibre picado al gusto","1 Cucharada de Aceite de Oliva Virgen Extra","Sal y pimienta negra al gusto"],"instructions":["En un recipiente, mezcle la carne, la cebolla, el jengibre picado, el huevo cocido y el huevo crudo.","Sazone con sal y pimienta al gusto.","Mezcla hasta obtener una mezcla homog\xe9nea.","Modelar bolitas creando la forma de alb\xf3ndigas y tenerlas en forma untadas con un poco de aceite de oliva.","Hornear en horno precalentado a 180\xb0C por aproximadamente 20 minutos o hasta que las alb\xf3ndigas est\xe9n doradas."],"nutritionalInfo":{"protein":"28g","carbs":"35g","fat":"14g","fiber":"9g"}},{"id":4,"name":"Tortilla de espinacas","category":"Asi\xe1tica","image":"/comidas/tortilla-de-espinacas.png","preparationTime":15,"servings":4,"calories":420,"difficulty":"Intermedio","description":"Deliciosa tortilla de espinacas con huevos, cebolla y queso, perfecta para una comida saludable y deliciosa.","ingredients":["1 taza de espinacas (picadas)","3 huevos","1/2 cebolla picada","1 Cucharada Queso Blanco Rallado","1 cucharada de perejil picado","1 Cucharadita de Aceite de Oliva","Sal y pimienta negra al gusto"],"instructions":["Bate los huevos con el tenedor hasta obtener una mezcla homog\xe9nea.","En una sart\xe9n caliente con aceite de oliva, saltee la cebolla hasta que est\xe9 dorada.","Agregue la espinaca picada y deje solo hasta que se marchite.","Agrega los huevos batidos, el perejil picado y sazona con sal y pimienta negra al gusto.","Deje que se ponga firme y dorado por un lado y luego dore por el otro lado."],"nutritionalInfo":{"protein":"32g","carbs":"18g","fat":"24g","fiber":"6g"}},{"id":5,"name":"Tortilla con pollo","category":"Francesa","image":"/comidas/tortilla-con-pollo.png","preparationTime":30,"servings":6,"calories":180,"difficulty":"Intermedio","description":"Deliciosa tortilla con pollo, cebolla y perejil, perfecta para una comida saludable y deliciosa.","ingredients":["3 huevos","100 g de pollo cocido y desmenuzado","12 cebolla finamente picada","1 cucharadita de aceite de oliva","Perejil y or\xe9gano al gusto","Sal y pimienta negra al gusto"],"instructions":["En un recipiente, bate los huevos, la cebolla, el perejil, la sal, el or\xe9gano y la pimienta negra hasta integrar bien;","Agrega el pollo y bate un poco m\xe1s;","Ponga la mezcla en una sart\xe9n caliente con el aceite de oliva y d\xe9jela reposar. Gire hacia el otro lado al oro."],"nutritionalInfo":{"protein":"6g","carbs":"25g","fat":"8g","fiber":"12g"}},{"id":6,"name":"Minipizzas de berenjena","category":"Japonesa","image":"/comidas/minipizzas-de-berenjena.png","preparationTime":25,"servings":2,"calories":350,"difficulty":"Intermedio","description":"Deliciosas minipizzas de berenjena con tomates cherry, ricota y salsa de tomate, perfectas para una comida saludable y deliciosa.","ingredients":["2 berenjenas grandes","200g de tomates cherry en rodajas","200 g de ricota rallada","200ml de salsa de tomate","1 cucharadita de mantequilla","Or\xe9gano al gusto"],"instructions":["Corta las berenjenas a lo largo","Coloque las rebanadas en una fuenteupnaora horno ligeramente untada con mantequilla y espolvoree un poco de sal y pimienta negra encima.","Llevar a horno precalentado a 180\xb0C por 15 minutos.","Retire la bandeja para hornear del horno y rellene cada rebanada individualmente, agregando salsa de tomate, ricota rallada, rodajas de tomate cherry y or\xe9gano.","Regresar al horno por otros 15 min."],"nutritionalInfo":{"protein":"25g","carbs":"45g","fat":"12g","fiber":"8g"}},{"id":7,"name":"Cesta de pechuga de pavo","category":"Espa\xf1ola","image":"/comidas/cesta-de-pechuga-de-pavo.png","preparationTime":15,"servings":6,"calories":480,"difficulty":"Avanzado","description":"Deliciosa cesta de pechuga de pavo con vegetales, perfecta para una comida saludable y deliciosa.","ingredients":["6 rebanadas de pechuga de pavo","6 huevos","3 tomates cherry cortados por la mitad","1/2 Zanahoria Rallada","or\xe9gano al gusto","Sal a gusto"],"instructions":["Picar los tomates cherry por la mitad, rallar la zanahoria y reservar.","En un bowl, bate los huevos hasta que quede una mezcla uniforme.","Sazone con sal al gusto, mezcle bien y reserve.","Cubra con rebanadas de pechuga de pavo moldes individuales para pastel.","Agregue tomates cherry y zanahorias ralladas a las canastas de pechuga de pavo.","Luego coloca los huevos batidos.","Espolvorear con un poco de or\xe9gano al gusto y llevar al horno precalentado a 180\xb0C por unos 1 5 minutos o hasta que las canastas est\xe9n doradas y los huevos firmes.","Retirar del horno y servir inmediatamente."],"nutritionalInfo":{"protein":"28g","carbs":"55g","fat":"16g","fiber":"4g"}},{"id":8,"name":"Bolitas de espinacas","category":"Desayuno","image":"/comidas/bolitas-de-espinacas.png","preparationTime":30,"servings":1,"calories":280,"difficulty":"F\xe1cil","description":"Deliciosas bolitas de espinacas con queso, perfectas para una comida saludable y deliciosa.","ingredients":["2 manojos de espinacas","1 cebolla mediana picada","2 huevos","1 diente de ajo machacado","Perejil al gusto","1 cucharada de aceite de coco","Harina De Berenjena Al Punto","Sal y pimienta negra al gusto"],"instructions":["Lava bien los manojos de espinacas y d\xe9jalos en remojo durante unos minutos en agua caliente.","Escurrir las espinacas y picarlas finamente.","En un recipiente, agrega las espinacas, los huevos, el ajo, el perejil, la sal, el aceite de coco y la pimienta del reino y mezcla bien.","Agrega la harina de berenjena poco a poco hasta obtener una masa firme.","Con ayuda de dos cucharas, moldea las alb\xf3ndigas de espinaca y col\xf3calas en forma engrasada.","Llevar al horno precalentado a 160\xb0C hasta que las alb\xf3ndigas est\xe9n bien doradas."],"nutritionalInfo":{"protein":"8g","carbs":"45g","fat":"12g","fiber":"9g"}},{"id":9,"name":"Galleta de br\xf3coli","category":"Americana","image":"/comidas/galleta-de-brocoli.png","preparationTime":30,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosas alb\xf3ndigas de calabac\xedn con queso, perfectas para una comida saludable y deliciosa.","ingredients":["1 cabeza de br\xf3coli, cocido y escurrido","1 huevo","100 gramos de mozzarella finamente rallada","Sal y pimienta negra al gusto"],"instructions":["Cuece el br\xf3coli en una cazuela con agua y una pizca de sal durante 2 minutos.","Despu\xe9s de la cocci\xf3n, trocea el br\xf3coli para que parezca harina.","En un bol, mezclar todos los ingredientes, hacer bolitas con la masa y colocarlas en una sart\xe9n antiadherente.","Llevar a hornear en horno medio 180\xb0C por unos 10 a 15 minutos."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}},{"id":10,"name":"Alb\xf3ndigas de calabac\xedn con queso","category":"Americana","image":"/comidas/albondigas-de-calabacin-con-queso.png","preparationTime":45,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosas alb\xf3ndigas de calabac\xedn con queso, perfectas para una comida saludable y deliciosa.","ingredients":["2 calabacines","100g de queso Minas rallado","1/2 cebolla picada","2 dientes de ajo","1 cucharada (t\xe9) de sal","1/2 taza (t\xe9) de harina de almendras","1 huevo"],"instructions":["Ralla los calabacines y col\xf3calos sobre un pa\xf1o de cocina limpio, haz un peque\xf1o paquete y presiona bien los calabacines para sacarles todo el l\xedquido.","En un recipiente disponer las calabacitas, el queso, la cebolla picada, el ajo, el huevo, la sal y la harina de almendras.","Mezclar bien.","Toma dos cucharas y con las manos presiona hasta formar un pastelito.","Disponer las alb\xf3ndigas en un molde engrasado y hornear en horno precalentado a 200\xb0C por 30 minutos aproximadamente, volteando las alb\xf3ndigas a la mitad.","Mezclar bien."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}},{"id":11,"name":"Galleta de coco","category":"Americana","image":"/comidas/galleta-de-coco.png","preparationTime":30,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosas galletas de coco, perfectas para una comida saludable y deliciosa.","ingredients":["1 taza (t\xe9) de harina de coco (125 gramos)","1 Cucharada de Xilitol","1 taza (t\xe9) de mantequilla de coco","6 Gotas de Extracto de Vainilla","2 huevos"],"instructions":["En un recipiente, mezcla bien la harina de coco, el endulzante xilitol, la manteca de coco y el extracto de vainilla.","Agrega los huevos y mezcla bien hasta obtener una mezcla homog\xe9nea.","Disponer la masa en forma engrasada con papel manteca y abrir la masa con ayuda de un rollo.","Cortar la masa en cuadrados del tama\xf1o deseado.","Llevar a horno precalentado a 180\xb0C por aproximadamente 25 minutos o hasta que las galletas est\xe9n doradas.","Retire del horno y deje enfriar."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}},{"id":12,"name":"Brownie de cacao","category":"Americana","image":"/comidas/brownie-de-cacao.png","preparationTime":50,"servings":2,"calories":520,"difficulty":"F\xe1cil","description":"Deliciosos brownies de cacao, perfectas para una comida saludable y deliciosa.","ingredients":["200 g de mantequilla sin sal","260g de xilitol","1 y /2 tazas de harina de almendras","12 cucharadas de cacao en polvo","2 tazas de nueces (trituradas) ","5 gotas de esencia de vainilla","4 huevos"],"instructions":["Tamizar el xilitol en el vaso de la batidora, agregar los huevos, la mantequilla y batir por 4 min.","Tamizar tambien la harina de almendras y el cacao. Batir por otros 4 min.","Agrega las nueces, la esencia de vainilla y bate un poco m\xe1s solo para incorporar.","En una fuente para horno untada con mantequilla, verter la masa y hornear en horno precalentado a 250C durante aproximadamente 25 minutos."],"nutritionalInfo":{"protein":"32g","carbs":"35g","fat":"26g","fiber":"4g"}}]'),Ey=Qr.div`
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
`,jy=Qr.div`
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
`,Cy=Qr(Qd.button)`
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
`,Py=Qr.div`
    text-align: center;
    margin-top: ${e=>e.theme.spacing.lg};
`,Ty=Qr.h1`
    font-size: ${e=>e.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 ${e=>e.theme.spacing.sm} 0;
    font-family: ${e=>e.theme.fonts.display};
    letter-spacing: -0.02em;
`,zy=Qr.p`
    color: ${e=>e.theme.colors.textLight};
    font-size: ${e=>e.theme.fontSizes.base};
    margin: 0;
    font-weight: 400;
`,Ay=(Qr.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
        display: none;
    }
`,Qr.button`
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
`,Qr.div`
    padding: ${e=>e.theme.spacing.lg};
    flex: 1;
    background: ${e=>e.theme.colors.background};
`),Ry=Qr(Qd.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e=>e.theme.spacing.lg};
    margin-bottom: ${e=>e.theme.spacing.xl};
`,Dy=Qr(Qd.div)`
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
`,My=Qr.div`
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
`,Ly=Qr.div`
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
`,Oy=Qr.div`
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
`,_y=Qr.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
`,Ny=Qr.div`
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
`,Fy=Qr.div`
    padding: ${e=>e.theme.spacing.lg};
`,Iy=Qr.h3`
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
`,Vy=Qr.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.theme.colors.textLight};
`,Uy=(Qr.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.xs};
    font-weight: 600;
    color: ${e=>e.theme.colors.successSolid};
`,Qr.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing.xs};
    font-weight: 500;

    svg {
        width: 14px;
        height: 14px;
        opacity: 0.7;
    }
`),By=Qr(Qd.div)`
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
`,Hy=()=>{const t=Z(),[n,r]=(0,e.useState)("Todas"),i=(new Set($y.map((e=>e.category))),"Todas"===n?$y:$y.filter((e=>e.category===n)));return(0,ei.jsxs)(Ey,{children:[(0,ei.jsxs)(jy,{children:[(0,ei.jsx)(Cy,{onClick:()=>{t("/discover")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190"}),(0,ei.jsxs)(Py,{children:[(0,ei.jsx)(Ty,{children:"Recetas Saludables"}),(0,ei.jsx)(zy,{children:"Deliciosas opciones nutritivas para ti"})]})]}),(0,ei.jsx)(Ay,{children:i.length>0?(0,ei.jsx)(Ry,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:(0,ei.jsx)(gi,{children:i.map(((e,n)=>(0,ei.jsxs)(Dy,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{delay:.1*n},onClick:()=>{return n=e.id,void t(`/recipes/${n}`);var n},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,ei.jsxs)(My,{children:[(0,ei.jsx)(Ly,{image:e.image}),(0,ei.jsx)(Oy,{children:(0,ei.jsxs)(_y,{children:[(0,ei.jsxs)(Ny,{children:["\u23f1 ",e.preparationTime,"m"]}),e.difficulty&&(0,ei.jsxs)(Ny,{children:["\u2b50 ",e.difficulty]})]})})]}),(0,ei.jsxs)(Fy,{children:[(0,ei.jsx)(Iy,{children:e.name}),(0,ei.jsx)(Vy,{children:(0,ei.jsxs)(Uy,{children:[(0,ei.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[(0,ei.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,ei.jsx)("polyline",{points:"12,6 12,12 16,14",stroke:"currentColor",strokeWidth:"2",fill:"none"})]}),e.preparationTime,"min"]})})]})]},e.id)))})}):(0,ei.jsxs)(By,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,ei.jsx)("div",{className:"icon",children:"\ud83c\udf7d\ufe0f"}),(0,ei.jsx)("h3",{children:"No hay recetas disponibles"}),(0,ei.jsx)("p",{children:"No se encontraron recetas en esta categor\xeda. Prueba con otra categor\xeda."})]})})]})},qy=Qr.div`
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
`,Wy=Qr(Qd.div)`
    width: 100%;
    height: 320px;
    background-image: url(${e=>e.image});
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
`,Yy=Qr.div`
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
`,Ky=Qr.div`
    position: absolute;
    top: ${e=>e.theme.spacing.lg};
    left: ${e=>e.theme.spacing.lg};
    right: ${e=>e.theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`,Gy=Qr(Qd.button)`
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
`,Xy=Qr(Gy)`
    svg {
        color: ${e=>e.isFavorite?"#ff6b6b":"currentColor"};
        fill: ${e=>e.isFavorite?"#ff6b6b":"none"};
        width: 16px;
        height: 16px;
    }
`,Qy=Qr(Qd.h1)`
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
`,Jy=Qr(Qd.div)`
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
`,Zy=Qr.div`
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.lg};
    border-bottom: 1px solid ${e=>e.theme.colors.border};
`,eb=Qr.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e=>e.theme.spacing.lg};
    margin-bottom: ${e=>e.theme.spacing.xl};
`,tb=Qr(Qd.div)`
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
`,nb=Qr.div`
    font-size: ${e=>e.theme.fontSizes.xl};
    font-weight: 700;
    background: ${e=>e.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.xs};
    font-family: ${e=>e.theme.fonts.display};
`,rb=Qr.div`
    font-size: ${e=>e.theme.fontSizes.xs};
    color: ${e=>e.theme.colors.textLight};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
`,ib=Qr.p`
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.textLight};
    line-height: 1.6;
    margin: 0;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
`,ab=Qr.div`
    display: flex;
    padding: 0 ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.surface};
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(20px);
`,ob=Qr(Qd.button)`
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
`,sb=Qr(Qd.div)`
    padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
    background: ${e=>e.theme.colors.background};
    min-height: 400px;
`,lb=Qr.h3`
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
`,cb=Qr.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
`,ub=Qr(Qd.div)`
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
`,db=Qr.div`
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
`,mb=Qr.div`
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.text};
    font-weight: 500;
    line-height: 1.4;
`,pb=Qr.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.spacing.lg};
`,hb=Qr(Qd.div)`
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
`,fb=Qr.div`
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
`,gb=Qr.div`
    font-size: ${e=>e.theme.fontSizes.base};
    line-height: 1.6;
    color: ${e=>e.theme.colors.text};
    font-weight: 400;
`,yb=Qr.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e=>e.theme.spacing.lg};
`,bb=Qr(Qd.div)`
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
`,vb=Qr.div`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    font-weight: 700;
    background: ${e=>e.theme.colors.success};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${e=>e.theme.spacing.sm};
    font-family: ${e=>e.theme.fonts.display};
`,xb=Qr.div`
    font-size: ${e=>e.theme.fontSizes.sm};
    color: ${e=>e.theme.colors.textLight};
    text-transform: capitalize;
    font-weight: 500;
`,wb=Qr(Qd.div)`
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
`,Sb=Qr.div`
    font-size: ${e=>e.theme.fontSizes["5xl"]};
    margin-bottom: ${e=>e.theme.spacing.xl};
    opacity: 0.5;
`,kb=Qr.h2`
    font-size: ${e=>e.theme.fontSizes["2xl"]};
    color: ${e=>e.theme.colors.text};
    margin-bottom: ${e=>e.theme.spacing.md};
    font-family: ${e=>e.theme.fonts.display};
`,$b=Qr.p`
    font-size: ${e=>e.theme.fontSizes.base};
    color: ${e=>e.theme.colors.textLight};
    margin-bottom: ${e=>e.theme.spacing.xl};
    max-width: 300px;
`,Eb=()=>{const t=Z(),{recipeId:n}=ee(),[r,i]=(0,e.useState)("ingredients"),[a,o]=(0,e.useState)(!1),s=$y.find((e=>e.id===parseInt(n)));if(!s)return(0,ei.jsx)(qy,{children:(0,ei.jsxs)(wb,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[(0,ei.jsx)(Sb,{children:"\ud83c\udf7d\ufe0f"}),(0,ei.jsx)(kb,{children:"Receta no encontrada"}),(0,ei.jsx)($b,{children:"La receta que buscas no existe o ha sido eliminada."}),(0,ei.jsx)(Gy,{onClick:()=>t("/recipes"),children:"\u2190"})]})});const l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,staggerChildren:.1}}},c={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}};return(0,ei.jsxs)(qy,{children:[(0,ei.jsxs)(Wy,{image:s.image,initial:{opacity:0,scale:1.1},animate:{opacity:1,scale:1},transition:{duration:.8},children:[(0,ei.jsx)(Yy,{}),(0,ei.jsxs)(Ky,{children:[(0,ei.jsx)(Gy,{onClick:()=>{t("/recipes")},whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2190"}),(0,ei.jsx)(Xy,{isFavorite:a,onClick:()=>{o(!a)},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,ei.jsx)("svg",{viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,ei.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),(0,ei.jsx)(Qy,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.6},children:s.name})]}),(0,ei.jsxs)(Jy,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},children:[(0,ei.jsxs)(Zy,{children:[(0,ei.jsxs)(eb,{children:[(0,ei.jsxs)(tb,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.5},whileHover:{scale:1.05},children:[(0,ei.jsxs)(nb,{children:[s.preparationTime,"m"]}),(0,ei.jsx)(rb,{children:"Tiempo"})]}),(0,ei.jsxs)(tb,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5,duration:.5},whileHover:{scale:1.05},children:[(0,ei.jsx)(nb,{children:s.difficulty}),(0,ei.jsx)(rb,{children:"Dificultad"})]})]}),(0,ei.jsx)(ib,{children:s.description})]}),(0,ei.jsxs)(ab,{children:[(0,ei.jsx)(ob,{active:"ingredients"===r,onClick:()=>i("ingredients"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Ingredientes"}),(0,ei.jsx)(ob,{active:"instructions"===r,onClick:()=>i("instructions"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Preparaci\xf3n"})]}),(0,ei.jsx)(sb,{children:(0,ei.jsx)(gi,{mode:"wait",children:(()=>{switch(r){case"ingredients":return(0,ei.jsxs)(Qd.div,{variants:l,initial:"hidden",animate:"visible",children:[(0,ei.jsxs)(lb,{children:["Ingredientes (",s.servings," porciones)"]}),(0,ei.jsx)(cb,{children:s.ingredients.map(((e,t)=>(0,ei.jsxs)(ub,{variants:c,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,ei.jsx)(db,{children:"\ud83e\udd44"}),(0,ei.jsx)(mb,{children:e})]},t)))})]});case"instructions":return(0,ei.jsxs)(Qd.div,{variants:l,initial:"hidden",animate:"visible",children:[(0,ei.jsx)(lb,{children:"Instrucciones de Preparaci\xf3n"}),(0,ei.jsx)(pb,{children:s.instructions.map(((e,t)=>(0,ei.jsxs)(hb,{variants:c,whileHover:{scale:1.01},children:[(0,ei.jsx)(fb,{children:t+1}),(0,ei.jsx)(gb,{children:e})]},t)))})]});case"nutrition":return(0,ei.jsxs)(Qd.div,{variants:l,initial:"hidden",animate:"visible",children:[(0,ei.jsx)(lb,{children:"Informaci\xf3n Nutricional"}),(0,ei.jsx)(yb,{children:Object.entries(s.nutritionalInfo||{}).map((e=>{let[t,n]=e;return(0,ei.jsxs)(bb,{variants:c,whileHover:{scale:1.05},children:[(0,ei.jsx)(vb,{children:n}),(0,ei.jsxs)(xb,{children:["protein"===t&&"Prote\xedna","carbs"===t&&"Carbohidratos","fat"===t&&"Grasas","fiber"===t&&"Fibra"]})]},t)}))})]});default:return null}})()})},r)]})]})},jb={colors:{primary:"linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)",primarySolid:"#2d5a3d",primaryLight:"#4a7c59",primaryDark:"#1e3d28",secondary:"linear-gradient(135deg, #6b8e6b 0%, #8ab08a 100%)",secondarySolid:"#6b8e6b",secondaryLight:"#8ab08a",secondaryDark:"#5a7a5a",accent:"linear-gradient(135deg, #7c9885 0%, #9bb99e 100%)",accentSolid:"#7c9885",success:"linear-gradient(135deg, #4a7c59 0%, #6b8e6b 100%)",successSolid:"#4a7c59",warning:"linear-gradient(135deg, #d4a574 0%, #e6c2a6 100%)",warningSolid:"#d4a574",text:"#2d3e2d",textLight:"#5a6b5a",textLighter:"#8a9b8a",background:"#f7f4f0",backgroundDark:"#f0ebe4",surface:"#ffffff",surfaceLight:"rgba(255, 255, 255, 0.9)",glass:"rgba(247, 244, 240, 0.75)",glassDark:"rgba(240, 235, 228, 0.5)",shadow:"0 8px 32px rgba(45, 90, 61, 0.1)",shadowHover:"0 16px 48px rgba(45, 90, 61, 0.15)",shadowActive:"0 4px 16px rgba(45, 90, 61, 0.2)",border:"#e8e1d8",borderLight:"#f2ede6"},fonts:{main:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",display:"'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2rem","5xl":"3rem"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem","2xl":"1.5rem",full:"9999px"},transitions:{fast:"all 0.15s ease",base:"all 0.2s ease",slow:"all 0.3s ease",bounce:"all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},Cb=Qr.div`
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
`,Pb=Qr.div`
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
`,Tb=Qr.div`
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
`,zb=()=>{const t=X(),[n]=(Z(),(0,e.useState)(1)),r=["/height","/weight","/age","/injuries","/activity","/flexibility","/aerobic"],i=r.length,a=r.indexOf(t.pathname),o=t.pathname.includes("discover")||t.pathname.includes("activities")||t.pathname.includes("category")||t.pathname.includes("recipes");return(0,ei.jsx)(Cb,{children:(0,ei.jsx)(Pb,{children:(0,ei.jsxs)(gi,{mode:"wait",children:["/"!==t.pathname&&"/goal"!==t.pathname&&!o&&(0,ei.jsxs)(em,{children:[(0,ei.jsx)(im,{to:r[a-1]||"/",children:(0,ei.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16",children:(0,ei.jsx)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})})}),(0,ei.jsx)(am,{children:(()=>{const e=[];for(let t=0;t<i;t++)e.push((0,ei.jsx)(om,{active:t<=a},t));return e})()})]}),(0,ei.jsx)(Tb,{children:(0,ei.jsx)(Qd.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{flex:1,display:"flex",flexDirection:"column"},children:(0,ei.jsxs)(ye,{location:t,children:[(0,ei.jsx)(fe,{path:"/",element:(0,ei.jsx)(ym,{})}),(0,ei.jsx)(fe,{path:"/goal",element:(0,ei.jsx)(Uh,{})}),(0,ei.jsx)(fe,{path:"/height",element:(0,ei.jsx)(Cm,{})}),(0,ei.jsx)(fe,{path:"/weight",element:(0,ei.jsx)(_m,{})}),(0,ei.jsx)(fe,{path:"/age",element:(0,ei.jsx)(Ym,{})}),(0,ei.jsx)(fe,{path:"/injuries",element:(0,ei.jsx)(rp,{})}),(0,ei.jsx)(fe,{path:"/activity",element:(0,ei.jsx)(mh,{})}),(0,ei.jsx)(fe,{path:"/flexibility",element:(0,ei.jsx)($h,{})}),(0,ei.jsx)(fe,{path:"/aerobic",element:(0,ei.jsx)(Oh,{})}),(0,ei.jsx)(fe,{path:"/discover",element:(0,ei.jsx)(sf,{})}),(0,ei.jsx)(fe,{path:"/activities",element:(0,ei.jsx)(Sf,{})}),(0,ei.jsx)(fe,{path:"/category/:category",element:(0,ei.jsx)(Wf,{})}),(0,ei.jsx)(fe,{path:"/category/:category/exercise/:exercise",element:(0,ei.jsx)(mg,{})}),(0,ei.jsx)(fe,{path:"/category/:category/exercise/:exercise/day/:day",element:(0,ei.jsx)(Og,{})}),(0,ei.jsx)(fe,{path:"/category/:category/exercise/:exercise/day/:day/exercise/:exerciseIndex",element:(0,ei.jsx)(ry,{})}),(0,ei.jsx)(fe,{path:"/category/:category/exercise/:exercise/day/:day/completed",element:(0,ei.jsx)(ky,{})}),(0,ei.jsx)(fe,{path:"/recipes",element:(0,ei.jsx)(Hy,{})}),(0,ei.jsx)(fe,{path:"/recipes/:recipeId",element:(0,ei.jsx)(Eb,{})})]})},t.pathname)})]})})})};const Ab=function(){return(0,ei.jsxs)(Br,{theme:jb,children:[(0,ei.jsx)(Jd,{}),(0,ei.jsx)(Cf,{children:(0,ei.jsx)(Je,{children:(0,ei.jsx)(zb,{})})})]})},Rb=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,ei.jsx)(e.StrictMode,{children:(0,ei.jsx)(Ab,{})})),Rb()})()})();
//# sourceMappingURL=main.40609cdd.js.map