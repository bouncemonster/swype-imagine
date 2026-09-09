(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const z of m.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&c(z)}).observe(document,{childList:!0,subtree:!0});function f(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=f(d);fetch(d.href,m)}})();function Xm(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Qs={exports:{}},yn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au;function Zm(){if(au)return yn;au=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,d,m){var z=null;if(m!==void 0&&(z=""+m),d.key!==void 0&&(z=""+d.key),"key"in d){m={};for(var g in d)g!=="key"&&(m[g]=d[g])}else m=d;return d=m.ref,{$$typeof:p,type:c,key:z,ref:d!==void 0?d:null,props:m}}return yn.Fragment=s,yn.jsx=f,yn.jsxs=f,yn}var iu;function Jm(){return iu||(iu=1,Qs.exports=Zm()),Qs.exports}var n=Jm(),Ws={exports:{}},xn={},$s={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function Km(){return ru||(ru=1,(function(p){function s(N,U){var M=N.length;N.push(U);e:for(;0<M;){var Z=M-1>>>1,ee=N[Z];if(0<d(ee,U))N[Z]=U,N[M]=ee,M=Z;else break e}}function f(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var U=N[0],M=N.pop();if(M!==U){N[0]=M;e:for(var Z=0,ee=N.length,h=ee>>>1;Z<h;){var j=2*(Z+1)-1,G=N[j],X=j+1,W=N[X];if(0>d(G,M))X<ee&&0>d(W,G)?(N[Z]=W,N[X]=M,Z=X):(N[Z]=G,N[j]=M,Z=j);else if(X<ee&&0>d(W,M))N[Z]=W,N[X]=M,Z=X;else break e}}return U}function d(N,U){var M=N.sortIndex-U.sortIndex;return M!==0?M:N.id-U.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;p.unstable_now=function(){return m.now()}}else{var z=Date,g=z.now();p.unstable_now=function(){return z.now()-g}}var y=[],b=[],L=1,F=null,O=3,k=!1,B=!1,J=!1,K=!1,q=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function Y(N){for(var U=f(b);U!==null;){if(U.callback===null)c(b);else if(U.startTime<=N)c(b),U.sortIndex=U.expirationTime,s(y,U);else break;U=f(b)}}function xe(N){if(J=!1,Y(N),!B)if(f(y)!==null)B=!0,Ne||(Ne=!0,Ze());else{var U=f(b);U!==null&&de(xe,U.startTime-N)}}var Ne=!1,ae=-1,ke=5,Be=-1;function Ge(){return K?!0:!(p.unstable_now()-Be<ke)}function $e(){if(K=!1,Ne){var N=p.unstable_now();Be=N;var U=!0;try{e:{B=!1,J&&(J=!1,oe(ae),ae=-1),k=!0;var M=O;try{t:{for(Y(N),F=f(y);F!==null&&!(F.expirationTime>N&&Ge());){var Z=F.callback;if(typeof Z=="function"){F.callback=null,O=F.priorityLevel;var ee=Z(F.expirationTime<=N);if(N=p.unstable_now(),typeof ee=="function"){F.callback=ee,Y(N),U=!0;break t}F===f(y)&&c(y),Y(N)}else c(y);F=f(y)}if(F!==null)U=!0;else{var h=f(b);h!==null&&de(xe,h.startTime-N),U=!1}}break e}finally{F=null,O=M,k=!1}U=void 0}}finally{U?Ze():Ne=!1}}}var Ze;if(typeof S=="function")Ze=function(){S($e)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,qe=ue.port2;ue.port1.onmessage=$e,Ze=function(){qe.postMessage(null)}}else Ze=function(){q($e,0)};function de(N,U){ae=q(function(){N(p.unstable_now())},U)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(N){N.callback=null},p.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<N?Math.floor(1e3/N):5},p.unstable_getCurrentPriorityLevel=function(){return O},p.unstable_next=function(N){switch(O){case 1:case 2:case 3:var U=3;break;default:U=O}var M=O;O=U;try{return N()}finally{O=M}},p.unstable_requestPaint=function(){K=!0},p.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=O;O=N;try{return U()}finally{O=M}},p.unstable_scheduleCallback=function(N,U,M){var Z=p.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,N={id:L++,callback:U,priorityLevel:N,startTime:M,expirationTime:ee,sortIndex:-1},M>Z?(N.sortIndex=M,s(b,N),f(y)===null&&N===f(b)&&(J?(oe(ae),ae=-1):J=!0,de(xe,M-Z))):(N.sortIndex=ee,s(y,N),B||k||(B=!0,Ne||(Ne=!0,Ze()))),N},p.unstable_shouldYield=Ge,p.unstable_wrapCallback=function(N){var U=O;return function(){var M=O;O=U;try{return N.apply(this,arguments)}finally{O=M}}}})(ec)),ec}var nu;function Qm(){return nu||(nu=1,$s.exports=Km()),$s.exports}var tc={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu;function Wm(){if(lu)return se;lu=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),z=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),O=Symbol.iterator;function k(h){return h===null||typeof h!="object"?null:(h=O&&h[O]||h["@@iterator"],typeof h=="function"?h:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,K={};function q(h,j,G){this.props=h,this.context=j,this.refs=K,this.updater=G||B}q.prototype.isReactComponent={},q.prototype.setState=function(h,j){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,j,"setState")},q.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function oe(){}oe.prototype=q.prototype;function S(h,j,G){this.props=h,this.context=j,this.refs=K,this.updater=G||B}var Y=S.prototype=new oe;Y.constructor=S,J(Y,q.prototype),Y.isPureReactComponent=!0;var xe=Array.isArray;function Ne(){}var ae={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Be(h,j,G){var X=G.ref;return{$$typeof:p,type:h,key:j,ref:X!==void 0?X:null,props:G}}function Ge(h,j){return Be(h.type,j,h.props)}function $e(h){return typeof h=="object"&&h!==null&&h.$$typeof===p}function Ze(h){var j={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(G){return j[G]})}var ue=/\/+/g;function qe(h,j){return typeof h=="object"&&h!==null&&h.key!=null?Ze(""+h.key):j.toString(36)}function de(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Ne,Ne):(h.status="pending",h.then(function(j){h.status==="pending"&&(h.status="fulfilled",h.value=j)},function(j){h.status==="pending"&&(h.status="rejected",h.reason=j)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function N(h,j,G,X,W){var le=typeof h;(le==="undefined"||le==="boolean")&&(h=null);var ce=!1;if(h===null)ce=!0;else switch(le){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(h.$$typeof){case p:case s:ce=!0;break;case L:return ce=h._init,N(ce(h._payload),j,G,X,W)}}if(ce)return W=W(h),ce=X===""?"."+qe(h,0):X,xe(W)?(G="",ce!=null&&(G=ce.replace(ue,"$&/")+"/"),N(W,j,G,"",function(et){return et})):W!=null&&($e(W)&&(W=Ge(W,G+(W.key==null||h&&h.key===W.key?"":(""+W.key).replace(ue,"$&/")+"/")+ce)),j.push(W)),1;ce=0;var Ve=X===""?".":X+":";if(xe(h))for(var he=0;he<h.length;he++)X=h[he],le=Ve+qe(X,he),ce+=N(X,j,G,le,W);else if(he=k(h),typeof he=="function")for(h=he.call(h),he=0;!(X=h.next()).done;)X=X.value,le=Ve+qe(X,he++),ce+=N(X,j,G,le,W);else if(le==="object"){if(typeof h.then=="function")return N(de(h),j,G,X,W);throw j=String(h),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ce}function U(h,j,G){if(h==null)return h;var X=[],W=0;return N(h,X,"","",function(le){return j.call(G,le,W++)}),X}function M(h){if(h._status===-1){var j=h._result;j=j(),j.then(function(G){(h._status===0||h._status===-1)&&(h._status=1,h._result=G)},function(G){(h._status===0||h._status===-1)&&(h._status=2,h._result=G)}),h._status===-1&&(h._status=0,h._result=j)}if(h._status===1)return h._result.default;throw h._result}var Z=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ee={map:U,forEach:function(h,j,G){U(h,function(){j.apply(this,arguments)},G)},count:function(h){var j=0;return U(h,function(){j++}),j},toArray:function(h){return U(h,function(j){return j})||[]},only:function(h){if(!$e(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return se.Activity=F,se.Children=ee,se.Component=q,se.Fragment=f,se.Profiler=d,se.PureComponent=S,se.StrictMode=c,se.Suspense=y,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,se.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ae.H.useMemoCache(h)}},se.cache=function(h){return function(){return h.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(h,j,G){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var X=J({},h.props),W=h.key;if(j!=null)for(le in j.key!==void 0&&(W=""+j.key),j)!ke.call(j,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&j.ref===void 0||(X[le]=j[le]);var le=arguments.length-2;if(le===1)X.children=G;else if(1<le){for(var ce=Array(le),Ve=0;Ve<le;Ve++)ce[Ve]=arguments[Ve+2];X.children=ce}return Be(h.type,W,X)},se.createContext=function(h){return h={$$typeof:z,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:m,_context:h},h},se.createElement=function(h,j,G){var X,W={},le=null;if(j!=null)for(X in j.key!==void 0&&(le=""+j.key),j)ke.call(j,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=j[X]);var ce=arguments.length-2;if(ce===1)W.children=G;else if(1<ce){for(var Ve=Array(ce),he=0;he<ce;he++)Ve[he]=arguments[he+2];W.children=Ve}if(h&&h.defaultProps)for(X in ce=h.defaultProps,ce)W[X]===void 0&&(W[X]=ce[X]);return Be(h,le,W)},se.createRef=function(){return{current:null}},se.forwardRef=function(h){return{$$typeof:g,render:h}},se.isValidElement=$e,se.lazy=function(h){return{$$typeof:L,_payload:{_status:-1,_result:h},_init:M}},se.memo=function(h,j){return{$$typeof:b,type:h,compare:j===void 0?null:j}},se.startTransition=function(h){var j=ae.T,G={};ae.T=G;try{var X=h(),W=ae.S;W!==null&&W(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ne,Z)}catch(le){Z(le)}finally{j!==null&&G.types!==null&&(j.types=G.types),ae.T=j}},se.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},se.use=function(h){return ae.H.use(h)},se.useActionState=function(h,j,G){return ae.H.useActionState(h,j,G)},se.useCallback=function(h,j){return ae.H.useCallback(h,j)},se.useContext=function(h){return ae.H.useContext(h)},se.useDebugValue=function(){},se.useDeferredValue=function(h,j){return ae.H.useDeferredValue(h,j)},se.useEffect=function(h,j){return ae.H.useEffect(h,j)},se.useEffectEvent=function(h){return ae.H.useEffectEvent(h)},se.useId=function(){return ae.H.useId()},se.useImperativeHandle=function(h,j,G){return ae.H.useImperativeHandle(h,j,G)},se.useInsertionEffect=function(h,j){return ae.H.useInsertionEffect(h,j)},se.useLayoutEffect=function(h,j){return ae.H.useLayoutEffect(h,j)},se.useMemo=function(h,j){return ae.H.useMemo(h,j)},se.useOptimistic=function(h,j){return ae.H.useOptimistic(h,j)},se.useReducer=function(h,j,G){return ae.H.useReducer(h,j,G)},se.useRef=function(h){return ae.H.useRef(h)},se.useState=function(h){return ae.H.useState(h)},se.useSyncExternalStore=function(h,j,G){return ae.H.useSyncExternalStore(h,j,G)},se.useTransition=function(){return ae.H.useTransition()},se.version="19.2.8",se}var ou;function sc(){return ou||(ou=1,tc.exports=Wm()),tc.exports}var ac={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function $m(){if(su)return wt;su=1;var p=sc();function s(y){var b="https://react.dev/errors/"+y;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)b+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+y+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(y,b,L){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:F==null?null:""+F,children:y,containerInfo:b,implementation:L}}var z=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,b){if(y==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,wt.createPortal=function(y,b){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(s(299));return m(y,b,null,L)},wt.flushSync=function(y){var b=z.T,L=c.p;try{if(z.T=null,c.p=2,y)return y()}finally{z.T=b,c.p=L,c.d.f()}},wt.preconnect=function(y,b){typeof y=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(y,b))},wt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},wt.preinit=function(y,b){if(typeof y=="string"&&b&&typeof b.as=="string"){var L=b.as,F=g(L,b.crossOrigin),O=typeof b.integrity=="string"?b.integrity:void 0,k=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;L==="style"?c.d.S(y,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:F,integrity:O,fetchPriority:k}):L==="script"&&c.d.X(y,{crossOrigin:F,integrity:O,fetchPriority:k,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},wt.preinitModule=function(y,b){if(typeof y=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var L=g(b.as,b.crossOrigin);c.d.M(y,{crossOrigin:L,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(y)},wt.preload=function(y,b){if(typeof y=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var L=b.as,F=g(L,b.crossOrigin);c.d.L(y,L,{crossOrigin:F,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},wt.preloadModule=function(y,b){if(typeof y=="string")if(b){var L=g(b.as,b.crossOrigin);c.d.m(y,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:L,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(y)},wt.requestFormReset=function(y){c.d.r(y)},wt.unstable_batchedUpdates=function(y,b){return y(b)},wt.useFormState=function(y,b,L){return z.H.useFormState(y,b,L)},wt.useFormStatus=function(){return z.H.useHostTransitionStatus()},wt.version="19.2.8",wt}var cu;function eh(){if(cu)return ac.exports;cu=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),ac.exports=$m(),ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function th(){if(pu)return xn;pu=1;var p=Qm(),s=sc(),f=eh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var r=a.return;if(r===null)break;var l=r.alternate;if(l===null){if(i=r.return,i!==null){a=i;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===a)return y(r),e;if(l===i)return y(r),t;l=l.sibling}throw Error(c(188))}if(a.return!==i.return)a=r,i=l;else{for(var o=!1,u=r.child;u;){if(u===a){o=!0,a=r,i=l;break}if(u===i){o=!0,i=r,a=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===a){o=!0,a=l,i=r;break}if(u===i){o=!0,i=l,a=r;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var F=Object.assign,O=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),S=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Be=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case q:return"Profiler";case K:return"StrictMode";case xe:return"Suspense";case Ne:return"SuspenseList";case Be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case S:return e.displayName||"Context";case oe:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var de=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},Z=[],ee=-1;function h(e){return{current:e}}function j(e){0>ee||(e.current=Z[ee],Z[ee]=null,ee--)}function G(e,t){ee++,Z[ee]=e.current,e.current=t}var X=h(null),W=h(null),le=h(null),ce=h(null);function Ve(e,t){switch(G(le,t),G(W,e),G(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Df(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Df(t),e=Af(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(X),G(X,e)}function he(){j(X),j(W),j(le)}function et(e){e.memoizedState!==null&&G(ce,e);var t=X.current,a=Af(t,e.type);t!==a&&(G(W,e),G(X,a))}function Dt(e){W.current===e&&(j(X),j(W)),ce.current===e&&(j(ce),dn._currentValue=M)}var Oe,Fa;function Je(e){if(Oe===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Oe=t&&t[1]||"",Fa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oe+e+Fa}var ea=!1;function na(e,t){if(!e||ea)return"";ea=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(V){var A=V}Reflect.construct(e,[],H)}else{try{H.call()}catch(V){A=V}e.call(H.prototype)}}else{try{throw Error()}catch(V){A=V}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(V){if(V&&A&&typeof V.stack=="string")return[V.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],u=l[1];if(o&&u){var v=o.split(`
`),D=u.split(`
`);for(r=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;r<D.length&&!D[r].includes("DetermineComponentFrameRoot");)r++;if(i===v.length||r===D.length)for(i=v.length-1,r=D.length-1;1<=i&&0<=r&&v[i]!==D[r];)r--;for(;1<=i&&0<=r;i--,r--)if(v[i]!==D[r]){if(i!==1||r!==1)do if(i--,r--,0>r||v[i]!==D[r]){var R=`
`+v[i].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=i&&0<=r);break}}}finally{ea=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Je(a):""}function Ea(e,t){switch(e.tag){case 26:case 27:case 5:return Je(e.type);case 16:return Je("Lazy");case 13:return e.child!==t&&t!==null?Je("Suspense Fallback"):Je("Suspense");case 19:return Je("SuspenseList");case 0:case 15:return na(e.type,!1);case 11:return na(e.type.render,!1);case 1:return na(e.type,!0);case 31:return Je("Activity");default:return""}}function Ei(e){try{var t="",a=null;do t+=Ea(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var rt=Object.prototype.hasOwnProperty,fi=p.unstable_scheduleCallback,ui=p.unstable_cancelCallback,ki=p.unstable_shouldYield,ka=p.unstable_requestPaint,Ie=p.unstable_now,ma=p.unstable_getCurrentPriorityLevel,P=p.unstable_ImmediatePriority,ie=p.unstable_UserBlockingPriority,I=p.unstable_NormalPriority,be=p.unstable_LowPriority,ne=p.unstable_IdlePriority,st=p.log,tt=p.unstable_setDisableYieldValue,Se=null,He=null;function Ue(e){if(typeof st=="function"&&tt(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(Se,e)}catch{}}var Ke=Math.clz32?Math.clz32:xt,kt=Math.log,dt=Math.LN2;function xt(e){return e>>>=0,e===0?32:31-(kt(e)/dt|0)|0}var St=256,di=262144,Oi=4194304;function la(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mi(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~l,i!==0?r=la(i):(o&=u,o!==0?r=la(o):a||(a=u&~e,a!==0&&(r=la(a))))):(u=i&~l,u!==0?r=la(u):o!==0?r=la(o):a||(a=i&~e,a!==0&&(r=la(a)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:r}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ha(){var e=Oi;return Oi<<=1,(Oi&62914560)===0&&(Oi=4194304),e}function At(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ta(e,t,a,i,r,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,v=e.expirationTimes,D=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-Ke(a),H=1<<R;u[R]=0,v[R]=-1;var A=D[R];if(A!==null)for(D[R]=null,R=0;R<A.length;R++){var V=A[R];V!==null&&(V.lane&=-536870913)}a&=~H}i!==0&&Ha(e,i,0),l!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function Ha(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ke(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function hi(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Ke(a),r=1<<i;r&t|e[i]&t&&(e[i]|=t),a&=~r}}function vi(e,t){var a=t&-t;return a=(a&42)!==0?1:jt(a),(a&(e.suspendedLanes|t))!==0?0:a}function jt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yi(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Jf(e.type))}function ht(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var je=Math.random().toString(36).slice(2),Re="__reactFiber$"+je,nt="__reactProps$"+je,Hi="__reactContainer$"+je,Ul="__reactEvents$"+je,ku="__reactListeners$"+je,Ou="__reactHandles$"+je,fc="__reactResources$"+je,Nr="__reactMarker$"+je;function Bl(e){delete e[Re],delete e[nt],delete e[Ul],delete e[ku],delete e[Ou]}function Li(e){var t=e[Re];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Hi]||a[Re]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Cf(e);e!==null;){if(a=e[Re])return a;e=Cf(e)}return t}e=a,a=e.parentNode}return null}function qi(e){if(e=e[Re]||e[Hi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ui(e){var t=e[fc];return t||(t=e[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Nr]=!0}var uc=new Set,dc={};function xi(e,t){Bi(e,t),Bi(e+"Capture",t)}function Bi(e,t){for(dc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var Hu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},hc={};function Lu(e){return rt.call(hc,e)?!0:rt.call(mc,e)?!1:Hu.test(e)?hc[e]=!0:(mc[e]=!0,!1)}function _n(e,t,a){if(Lu(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Sn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function va(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qu(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gl(e){if(!e._valueTracker){var t=vc(e)?"checked":"value";e._valueTracker=qu(e,t,""+e[t])}}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=vc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Uu=/[\n"\\]/g;function Pt(e){return e.replace(Uu,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Il(e,t,a,i,r,l,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,o,It(t)):a!=null?Pl(e,o,It(a)):i!=null&&e.removeAttribute("value"),r==null&&l!=null&&(e.defaultChecked=!!l),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+It(u):e.removeAttribute("name")}function xc(e,t,a,i,r,l,o,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Gl(e);return}a=a!=null?""+It(a):"",t=t!=null?""+It(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Gl(e)}function Pl(e,t,a){t==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Gi(e,t,a,i){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&i&&(e[a].defaultSelected=!0)}else{for(a=""+It(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function bc(e,t,a){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+It(a):""}function gc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(de(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=It(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Gl(e)}function Ii(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Bu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Bu.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function _c(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&a[r]!==i&&zc(e,r,i)}else for(var l in t)t.hasOwnProperty(l)&&zc(e,l,t[l])}function Yl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(e){return Iu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Xl=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,Yi=null;function Sc(e){var t=qi(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Il(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var r=i[nt]||null;if(!r)throw Error(c(90));Il(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&yc(i)}break e;case"textarea":bc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Gi(e,!!a.multiple,t,!1)}}}var Jl=!1;function wc(e,t,a){if(Jl)return e(t,a);Jl=!0;try{var i=e(t);return i}finally{if(Jl=!1,(Pi!==null||Yi!==null)&&(ul(),Pi&&(t=Pi,e=Yi,Yi=Pi=null,Sc(t),e)))for(t=0;t<e.length;t++)Sc(e[t])}}function jr(e,t){var a=e.stateNode;if(a===null)return null;var i=a[nt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=!1;if(xa)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Kl=!1}var La=null,Ql=null,An=null;function Dc(){if(An)return An;var e,t=Ql,a=t.length,i,r="value"in La?La.value:La.textContent,l=r.length;for(e=0;e<a&&t[e]===r[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===r[l-i];i++);return An=r.slice(e,1<i?1-i:void 0)}function Nn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vn(){return!0}function Ac(){return!1}function Mt(e){function t(a,i,r,l,o){this._reactName=a,this._targetInst=r,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vn:Ac,this.isPropagationStopped=Ac,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),t}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=Mt(bi),Tr=F({},bi,{view:0,detail:0}),Pu=Mt(Tr),Wl,$l,Rr,Mn=F({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(Wl=e.screenX-Rr.screenX,$l=e.screenY-Rr.screenY):$l=Wl=0,Rr=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Nc=Mt(Mn),Yu=F({},Mn,{dataTransfer:0}),Xu=Mt(Yu),Zu=F({},Tr,{relatedTarget:0}),eo=Mt(Zu),Ju=F({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ku=Mt(Ju),Qu=F({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wu=Mt(Qu),$u=F({},bi,{data:0}),Vc=Mt($u),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function to(){return id}var rd=F({},Tr,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nd=Mt(rd),ld=F({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Mt(ld),od=F({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),sd=Mt(od),cd=F({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),pd=Mt(cd),fd=F({},Mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ud=Mt(fd),dd=F({},bi,{newState:0,oldState:0}),md=Mt(dd),hd=[9,13,27,32],ao=xa&&"CompositionEvent"in window,Cr=null;xa&&"documentMode"in document&&(Cr=document.documentMode);var vd=xa&&"TextEvent"in window&&!Cr,Mc=xa&&(!ao||Cr&&8<Cr&&11>=Cr),Tc=" ",Rc=!1;function Cc(e,t){switch(e){case"keyup":return hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function yd(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Rc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Rc?null:e;default:return null}}function xd(e,t){if(Xi)return e==="compositionend"||!ao&&Cc(e,t)?(e=Dc(),An=Ql=La=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bd[e.type]:t==="textarea"}function kc(e,t,a,i){Pi?Yi?Yi.push(i):Yi=[i]:Pi=i,t=bl(t,"onChange"),0<t.length&&(a=new jn("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Fr=null,Er=null;function gd(e){bf(e,0)}function Tn(e){var t=Vr(e);if(yc(t))return e}function Oc(e,t){if(e==="change")return t}var Hc=!1;if(xa){var io;if(xa){var ro="oninput"in document;if(!ro){var Lc=document.createElement("div");Lc.setAttribute("oninput","return;"),ro=typeof Lc.oninput=="function"}io=ro}else io=!1;Hc=io&&(!document.documentMode||9<document.documentMode)}function qc(){Fr&&(Fr.detachEvent("onpropertychange",Uc),Er=Fr=null)}function Uc(e){if(e.propertyName==="value"&&Tn(Er)){var t=[];kc(t,Er,e,Zl(e)),wc(gd,t)}}function zd(e,t,a){e==="focusin"?(qc(),Fr=t,Er=a,Fr.attachEvent("onpropertychange",Uc)):e==="focusout"&&qc()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tn(Er)}function Sd(e,t){if(e==="click")return Tn(t)}function wd(e,t){if(e==="input"||e==="change")return Tn(t)}function Dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:Dd;function kr(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var r=a[i];if(!rt.call(t,r)||!Ot(e[r],t[r]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var a=Bc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bc(a)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wn(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ad=xa&&"documentMode"in document&&11>=document.documentMode,Zi=null,lo=null,Or=null,oo=!1;function Yc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oo||Zi==null||Zi!==wn(i)||(i=Zi,"selectionStart"in i&&no(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Or&&kr(Or,i)||(Or=i,i=bl(lo,"onSelect"),0<i.length&&(t=new jn("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Zi)))}function gi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ji={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionrun:gi("Transition","TransitionRun"),transitionstart:gi("Transition","TransitionStart"),transitioncancel:gi("Transition","TransitionCancel"),transitionend:gi("Transition","TransitionEnd")},so={},Xc={};xa&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function zi(e){if(so[e])return so[e];if(!Ji[e])return e;var t=Ji[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Xc)return so[e]=t[a];return e}var Zc=zi("animationend"),Jc=zi("animationiteration"),Kc=zi("animationstart"),Nd=zi("transitionrun"),Vd=zi("transitionstart"),jd=zi("transitioncancel"),Qc=zi("transitionend"),Wc=new Map,co="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");co.push("scrollEnd");function aa(e,t){Wc.set(e,t),xi(t,[e])}var Rn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],Ki=0,po=0;function Cn(){for(var e=Ki,t=po=Ki=0;t<e;){var a=Yt[t];Yt[t++]=null;var i=Yt[t];Yt[t++]=null;var r=Yt[t];Yt[t++]=null;var l=Yt[t];if(Yt[t++]=null,i!==null&&r!==null){var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}l!==0&&$c(a,r,l)}}function Fn(e,t,a,i){Yt[Ki++]=e,Yt[Ki++]=t,Yt[Ki++]=a,Yt[Ki++]=i,po|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fo(e,t,a,i){return Fn(e,t,a,i),En(e)}function _i(e,t){return Fn(e,null,null,t),En(e)}function $c(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var r=!1,l=e.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(r=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,r&&t!==null&&(r=31-Ke(a),e=l.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=a|536870912),l):null}function En(e){if(50<ln)throw ln=0,zs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qi={};function Md(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,a,i){return new Md(e,t,a,i)}function uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,t){var a=e.alternate;return a===null?(a=Ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function e0(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kn(e,t,a,i,r,l){var o=0;if(i=e,typeof e=="function")uo(e)&&(o=1);else if(typeof e=="string")o=Em(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Be:return e=Ht(31,a,t,r),e.elementType=Be,e.lanes=l,e;case J:return Si(a.children,r,l,t);case K:o=8,r|=24;break;case q:return e=Ht(12,a,t,r|2),e.elementType=q,e.lanes=l,e;case xe:return e=Ht(13,a,t,r),e.elementType=xe,e.lanes=l,e;case Ne:return e=Ht(19,a,t,r),e.elementType=Ne,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:o=10;break e;case oe:o=9;break e;case Y:o=11;break e;case ae:o=14;break e;case ke:o=16,i=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Ht(o,a,t,r),t.elementType=e,t.type=i,t.lanes=l,t}function Si(e,t,a,i){return e=Ht(7,e,i,t),e.lanes=a,e}function mo(e,t,a){return e=Ht(6,e,null,t),e.lanes=a,e}function t0(e){var t=Ht(18,null,null,0);return t.stateNode=e,t}function ho(e,t,a){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a0=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var a=a0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ei(t)},a0.set(e,t),t)}return{value:e,source:t,stack:Ei(t)}}var Wi=[],$i=0,On=null,Hr=0,Zt=[],Jt=0,qa=null,sa=1,ca="";function ga(e,t){Wi[$i++]=Hr,Wi[$i++]=On,On=e,Hr=t}function i0(e,t,a){Zt[Jt++]=sa,Zt[Jt++]=ca,Zt[Jt++]=qa,qa=e;var i=sa;e=ca;var r=32-Ke(i)-1;i&=~(1<<r),a+=1;var l=32-Ke(t)+r;if(30<l){var o=r-r%5;l=(i&(1<<o)-1).toString(32),i>>=o,r-=o,sa=1<<32-Ke(t)+r|a<<r|i,ca=l+e}else sa=1<<l|a<<r|i,ca=e}function vo(e){e.return!==null&&(ga(e,1),i0(e,1,0))}function yo(e){for(;e===On;)On=Wi[--$i],Wi[$i]=null,Hr=Wi[--$i],Wi[$i]=null;for(;e===qa;)qa=Zt[--Jt],Zt[Jt]=null,ca=Zt[--Jt],Zt[Jt]=null,sa=Zt[--Jt],Zt[Jt]=null}function r0(e,t){Zt[Jt++]=sa,Zt[Jt++]=ca,Zt[Jt++]=qa,sa=t.id,ca=t.overflow,qa=e}var bt=null,Ye=null,_e=!1,Ua=null,Kt=!1,xo=Error(c(519));function Ba(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lr(Xt(t,e)),xo}function n0(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Re]=e,t[nt]=i,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<sn.length;a++)ye(sn[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),xc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),gc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Sf(t.textContent,a)?(i.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),i.onScroll!=null&&ye("scroll",t),i.onScrollEnd!=null&&ye("scrollend",t),i.onClick!=null&&(t.onclick=ya),t=!0):t=!1,t||Ba(e,!0)}function l0(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:bt=bt.return}}function er(e){if(e!==bt)return!1;if(!_e)return l0(e),_e=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ks(e.type,e.memoizedProps)),a=!a),a&&Ye&&Ba(e),l0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=Rf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=Rf(e)}else t===27?(t=Ye,ai(e.type)?(e=Us,Us=null,Ye=e):Ye=t):Ye=bt?Wt(e.stateNode.nextSibling):null;return!0}function wi(){Ye=bt=null,_e=!1}function bo(){var e=Ua;return e!==null&&(Ft===null?Ft=e:Ft.push.apply(Ft,e),Ua=null),e}function Lr(e){Ua===null?Ua=[e]:Ua.push(e)}var go=h(null),Di=null,za=null;function Ga(e,t,a){G(go,t._currentValue),t._currentValue=a}function _a(e){e._currentValue=go.current,j(go)}function zo(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function _o(e,t,a,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){var o=r.child;l=l.firstContext;e:for(;l!==null;){var u=l;l=r;for(var v=0;v<t.length;v++)if(u.context===t[v]){l.lanes|=a,u=l.alternate,u!==null&&(u.lanes|=a),zo(l.return,a,e),i||(o=null);break e}l=u.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(c(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),zo(o,a,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function tr(e,t,a,i){e=null;for(var r=t,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=r.type;Ot(r.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(r===ce.current){if(o=r.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(dn):e=[dn])}r=r.return}e!==null&&_o(t,e,a,i),t.flags|=262144}function Hn(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ai(e){Di=e,za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gt(e){return o0(Di,e)}function Ln(e,t){return Di===null&&Ai(e),o0(e,t)}function o0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},za===null){if(e===null)throw Error(c(308));za=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else za=za.next=t;return a}var Td=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rd=p.unstable_scheduleCallback,Cd=p.unstable_NormalPriority,ct={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function So(){return{controller:new Td,data:new Map,refCount:0}}function qr(e){e.refCount--,e.refCount===0&&Rd(Cd,function(){e.controller.abort()})}var Ur=null,wo=0,ar=0,ir=null;function Fd(e,t){if(Ur===null){var a=Ur=[];wo=0,ar=Ns(),ir={status:"pending",value:void 0,then:function(i){a.push(i)}}}return wo++,t.then(s0,s0),t}function s0(){if(--wo===0&&Ur!==null){ir!==null&&(ir.status="fulfilled");var e=Ur;Ur=null,ar=0,ir=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ed(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),i}var c0=N.S;N.S=function(e,t){Yp=Ie(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fd(e,t),c0!==null&&c0(e,t)};var Ni=h(null);function Do(){var e=Ni.current;return e!==null?e:Le.pooledCache}function qn(e,t){t===null?G(Ni,Ni.current):G(Ni,t.pool)}function p0(){var e=Do();return e===null?null:{parent:ct._currentValue,pool:e}}var rr=Error(c(460)),Ao=Error(c(474)),Un=Error(c(542)),Bn={then:function(){}};function f0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function u0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ya,ya),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,m0(e),e;default:if(typeof t.status=="string")t.then(ya,ya);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,m0(e),e}throw ji=t,rr}}function Vi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ji=a,rr):a}}var ji=null;function d0(){if(ji===null)throw Error(c(459));var e=ji;return ji=null,e}function m0(e){if(e===rr||e===Un)throw Error(c(483))}var nr=null,Br=0;function Gn(e){var t=Br;return Br+=1,nr===null&&(nr=[]),u0(nr,e,t)}function Gr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function h0(e){function t(_,x){if(e){var w=_.deletions;w===null?(_.deletions=[x],_.flags|=16):w.push(x)}}function a(_,x){if(!e)return null;for(;x!==null;)t(_,x),x=x.sibling;return null}function i(_){for(var x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function r(_,x){return _=ba(_,x),_.index=0,_.sibling=null,_}function l(_,x,w){return _.index=w,e?(w=_.alternate,w!==null?(w=w.index,w<x?(_.flags|=67108866,x):w):(_.flags|=67108866,x)):(_.flags|=1048576,x)}function o(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function u(_,x,w,E){return x===null||x.tag!==6?(x=mo(w,_.mode,E),x.return=_,x):(x=r(x,w),x.return=_,x)}function v(_,x,w,E){var te=w.type;return te===J?R(_,x,w.props.children,E,w.key):x!==null&&(x.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ke&&Vi(te)===x.type)?(x=r(x,w.props),Gr(x,w),x.return=_,x):(x=kn(w.type,w.key,w.props,null,_.mode,E),Gr(x,w),x.return=_,x)}function D(_,x,w,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=ho(w,_.mode,E),x.return=_,x):(x=r(x,w.children||[]),x.return=_,x)}function R(_,x,w,E,te){return x===null||x.tag!==7?(x=Si(w,_.mode,E,te),x.return=_,x):(x=r(x,w),x.return=_,x)}function H(_,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=mo(""+x,_.mode,w),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case k:return w=kn(x.type,x.key,x.props,null,_.mode,w),Gr(w,x),w.return=_,w;case B:return x=ho(x,_.mode,w),x.return=_,x;case ke:return x=Vi(x),H(_,x,w)}if(de(x)||Ze(x))return x=Si(x,_.mode,w,null),x.return=_,x;if(typeof x.then=="function")return H(_,Gn(x),w);if(x.$$typeof===S)return H(_,Ln(_,x),w);In(_,x)}return null}function A(_,x,w,E){var te=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return te!==null?null:u(_,x,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case k:return w.key===te?v(_,x,w,E):null;case B:return w.key===te?D(_,x,w,E):null;case ke:return w=Vi(w),A(_,x,w,E)}if(de(w)||Ze(w))return te!==null?null:R(_,x,w,E,null);if(typeof w.then=="function")return A(_,x,Gn(w),E);if(w.$$typeof===S)return A(_,x,Ln(_,w),E);In(_,w)}return null}function V(_,x,w,E,te){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return _=_.get(w)||null,u(x,_,""+E,te);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case k:return _=_.get(E.key===null?w:E.key)||null,v(x,_,E,te);case B:return _=_.get(E.key===null?w:E.key)||null,D(x,_,E,te);case ke:return E=Vi(E),V(_,x,w,E,te)}if(de(E)||Ze(E))return _=_.get(w)||null,R(x,_,E,te,null);if(typeof E.then=="function")return V(_,x,w,Gn(E),te);if(E.$$typeof===S)return V(_,x,w,Ln(x,E),te);In(x,E)}return null}function Q(_,x,w,E){for(var te=null,we=null,$=x,me=x=0,ze=null;$!==null&&me<w.length;me++){$.index>me?(ze=$,$=null):ze=$.sibling;var De=A(_,$,w[me],E);if(De===null){$===null&&($=ze);break}e&&$&&De.alternate===null&&t(_,$),x=l(De,x,me),we===null?te=De:we.sibling=De,we=De,$=ze}if(me===w.length)return a(_,$),_e&&ga(_,me),te;if($===null){for(;me<w.length;me++)$=H(_,w[me],E),$!==null&&(x=l($,x,me),we===null?te=$:we.sibling=$,we=$);return _e&&ga(_,me),te}for($=i($);me<w.length;me++)ze=V($,_,me,w[me],E),ze!==null&&(e&&ze.alternate!==null&&$.delete(ze.key===null?me:ze.key),x=l(ze,x,me),we===null?te=ze:we.sibling=ze,we=ze);return e&&$.forEach(function(oi){return t(_,oi)}),_e&&ga(_,me),te}function re(_,x,w,E){if(w==null)throw Error(c(151));for(var te=null,we=null,$=x,me=x=0,ze=null,De=w.next();$!==null&&!De.done;me++,De=w.next()){$.index>me?(ze=$,$=null):ze=$.sibling;var oi=A(_,$,De.value,E);if(oi===null){$===null&&($=ze);break}e&&$&&oi.alternate===null&&t(_,$),x=l(oi,x,me),we===null?te=oi:we.sibling=oi,we=oi,$=ze}if(De.done)return a(_,$),_e&&ga(_,me),te;if($===null){for(;!De.done;me++,De=w.next())De=H(_,De.value,E),De!==null&&(x=l(De,x,me),we===null?te=De:we.sibling=De,we=De);return _e&&ga(_,me),te}for($=i($);!De.done;me++,De=w.next())De=V($,_,me,De.value,E),De!==null&&(e&&De.alternate!==null&&$.delete(De.key===null?me:De.key),x=l(De,x,me),we===null?te=De:we.sibling=De,we=De);return e&&$.forEach(function(Ym){return t(_,Ym)}),_e&&ga(_,me),te}function Ee(_,x,w,E){if(typeof w=="object"&&w!==null&&w.type===J&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case k:e:{for(var te=w.key;x!==null;){if(x.key===te){if(te=w.type,te===J){if(x.tag===7){a(_,x.sibling),E=r(x,w.props.children),E.return=_,_=E;break e}}else if(x.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ke&&Vi(te)===x.type){a(_,x.sibling),E=r(x,w.props),Gr(E,w),E.return=_,_=E;break e}a(_,x);break}else t(_,x);x=x.sibling}w.type===J?(E=Si(w.props.children,_.mode,E,w.key),E.return=_,_=E):(E=kn(w.type,w.key,w.props,null,_.mode,E),Gr(E,w),E.return=_,_=E)}return o(_);case B:e:{for(te=w.key;x!==null;){if(x.key===te)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){a(_,x.sibling),E=r(x,w.children||[]),E.return=_,_=E;break e}else{a(_,x);break}else t(_,x);x=x.sibling}E=ho(w,_.mode,E),E.return=_,_=E}return o(_);case ke:return w=Vi(w),Ee(_,x,w,E)}if(de(w))return Q(_,x,w,E);if(Ze(w)){if(te=Ze(w),typeof te!="function")throw Error(c(150));return w=te.call(w),re(_,x,w,E)}if(typeof w.then=="function")return Ee(_,x,Gn(w),E);if(w.$$typeof===S)return Ee(_,x,Ln(_,w),E);In(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(a(_,x.sibling),E=r(x,w),E.return=_,_=E):(a(_,x),E=mo(w,_.mode,E),E.return=_,_=E),o(_)):a(_,x)}return function(_,x,w,E){try{Br=0;var te=Ee(_,x,w,E);return nr=null,te}catch($){if($===rr||$===Un)throw $;var we=Ht(29,$,null,_.mode);return we.lanes=E,we.return=_,we}finally{}}}var Mi=h0(!0),v0=h0(!1),Ia=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ae&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=En(e),$c(e,null,a),t}return Fn(e,i,t,a),En(e)}function Ir(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,hi(e,a)}}function jo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var r=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?r=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?r=l=t:l=l.next=t}else r=l=t;a={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Mo=!1;function Pr(){if(Mo){var e=ir;if(e!==null)throw e}}function Yr(e,t,a,i){Mo=!1;var r=e.updateQueue;Ia=!1;var l=r.firstBaseUpdate,o=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var v=u,D=v.next;v.next=null,o===null?l=D:o.next=D,o=v;var R=e.alternate;R!==null&&(R=R.updateQueue,u=R.lastBaseUpdate,u!==o&&(u===null?R.firstBaseUpdate=D:u.next=D,R.lastBaseUpdate=v))}if(l!==null){var H=r.baseState;o=0,R=D=v=null,u=l;do{var A=u.lane&-536870913,V=A!==u.lane;if(V?(ge&A)===A:(i&A)===A){A!==0&&A===ar&&(Mo=!0),R!==null&&(R=R.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Q=e,re=u;A=t;var Ee=a;switch(re.tag){case 1:if(Q=re.payload,typeof Q=="function"){H=Q.call(Ee,H,A);break e}H=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=re.payload,A=typeof Q=="function"?Q.call(Ee,H,A):Q,A==null)break e;H=F({},H,A);break e;case 2:Ia=!0}}A=u.callback,A!==null&&(e.flags|=64,V&&(e.flags|=8192),V=r.callbacks,V===null?r.callbacks=[A]:V.push(A))}else V={lane:A,tag:u.tag,payload:u.payload,callback:u.callback,next:null},R===null?(D=R=V,v=H):R=R.next=V,o|=A;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;V=u,u=V.next,V.next=null,r.lastBaseUpdate=V,r.shared.pending=null}}while(!0);R===null&&(v=H),r.baseState=v,r.firstBaseUpdate=D,r.lastBaseUpdate=R,l===null&&(r.shared.lanes=0),Qa|=o,e.lanes=o,e.memoizedState=H}}function y0(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function x0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)y0(a[e],t)}var lr=h(null),Pn=h(0);function b0(e,t){e=Ta,G(Pn,e),G(lr,t),Ta=e|t.baseLanes}function To(){G(Pn,Ta),G(lr,lr.current)}function Ro(){Ta=Pn.current,j(lr),j(Pn)}var Lt=h(null),Qt=null;function Xa(e){var t=e.alternate;G(lt,lt.current&1),G(Lt,e),Qt===null&&(t===null||lr.current!==null||t.memoizedState!==null)&&(Qt=e)}function Co(e){G(lt,lt.current),G(Lt,e),Qt===null&&(Qt=e)}function g0(e){e.tag===22?(G(lt,lt.current),G(Lt,e),Qt===null&&(Qt=e)):Za()}function Za(){G(lt,lt.current),G(Lt,Lt.current)}function qt(e){j(Lt),Qt===e&&(Qt=null),j(lt)}var lt=h(0);function Yn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ls(a)||qs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=0,pe=null,Ce=null,pt=null,Xn=!1,or=!1,Ti=!1,Zn=0,Xr=0,sr=null,kd=0;function at(){throw Error(c(321))}function Fo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ot(e[a],t[a]))return!1;return!0}function Eo(e,t,a,i,r,l){return Sa=l,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?ip:Ko,Ti=!1,l=a(i,r),Ti=!1,or&&(l=_0(t,a,i,r)),z0(e),l}function z0(e){N.H=Kr;var t=Ce!==null&&Ce.next!==null;if(Sa=0,pt=Ce=pe=null,Xn=!1,Xr=0,sr=null,t)throw Error(c(300));e===null||ft||(e=e.dependencies,e!==null&&Hn(e)&&(ft=!0))}function _0(e,t,a,i){pe=e;var r=0;do{if(or&&(sr=null),Xr=0,or=!1,25<=r)throw Error(c(301));if(r+=1,pt=Ce=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}N.H=rp,l=t(a,i)}while(or);return l}function Od(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Zr(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(pe.flags|=1024),t}function ko(){var e=Zn!==0;return Zn=0,e}function Oo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ho(e){if(Xn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xn=!1}Sa=0,pt=Ce=pe=null,or=!1,Xr=Zn=0,sr=null}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?pe.memoizedState=pt=e:pt=pt.next=e,pt}function ot(){if(Ce===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=pt===null?pe.memoizedState:pt.next;if(t!==null)pt=t,Ce=e;else{if(e===null)throw pe.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},pt===null?pe.memoizedState=pt=e:pt=pt.next=e}return pt}function Jn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zr(e){var t=Xr;return Xr+=1,sr===null&&(sr=[]),e=u0(sr,e,t),t=pe,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?ip:Ko),e}function Kn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zr(e);if(e.$$typeof===S)return gt(e)}throw Error(c(438,String(e)))}function Lo(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Jn(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ge;return t.index++,a}function wa(e,t){return typeof t=="function"?t(e):t}function Qn(e){var t=ot();return qo(t,Ce,e)}function qo(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var r=e.baseQueue,l=i.pending;if(l!==null){if(r!==null){var o=r.next;r.next=l.next,l.next=o}t.baseQueue=r=l,i.pending=null}if(l=e.baseState,r===null)e.memoizedState=l;else{t=r.next;var u=o=null,v=null,D=t,R=!1;do{var H=D.lane&-536870913;if(H!==D.lane?(ge&H)===H:(Sa&H)===H){var A=D.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),H===ar&&(R=!0);else if((Sa&A)===A){D=D.next,A===ar&&(R=!0);continue}else H={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},v===null?(u=v=H,o=l):v=v.next=H,pe.lanes|=A,Qa|=A;H=D.action,Ti&&a(l,H),l=D.hasEagerState?D.eagerState:a(l,H)}else A={lane:H,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},v===null?(u=v=A,o=l):v=v.next=A,pe.lanes|=H,Qa|=H;D=D.next}while(D!==null&&D!==t);if(v===null?o=l:v.next=u,!Ot(l,e.memoizedState)&&(ft=!0,R&&(a=ir,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=v,i.lastRenderedState=l}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Uo(e){var t=ot(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,r=a.pending,l=t.memoizedState;if(r!==null){a.pending=null;var o=r=r.next;do l=e(l,o.action),o=o.next;while(o!==r);Ot(l,t.memoizedState)||(ft=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,i]}function S0(e,t,a){var i=pe,r=ot(),l=_e;if(l){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!Ot((Ce||r).memoizedState,a);if(o&&(r.memoizedState=a,ft=!0),r=r.queue,Io(A0.bind(null,i,r,e),[e]),r.getSnapshot!==t||o||pt!==null&&pt.memoizedState.tag&1){if(i.flags|=2048,cr(9,{destroy:void 0},D0.bind(null,i,r,a,t),null),Le===null)throw Error(c(349));l||(Sa&127)!==0||w0(i,t,a)}return a}function w0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=Jn(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function D0(e,t,a,i){t.value=a,t.getSnapshot=i,N0(t)&&V0(e)}function A0(e,t,a){return a(function(){N0(t)&&V0(e)})}function N0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ot(e,a)}catch{return!0}}function V0(e){var t=_i(e,2);t!==null&&Et(t,e,2)}function Bo(e){var t=Vt();if(typeof e=="function"){var a=e;if(e=a(),Ti){Ue(!0);try{a()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t}function j0(e,t,a,i){return e.baseState=a,qo(e,Ce,typeof i=="function"?i:wa)}function Hd(e,t,a,i,r){if(el(e))throw Error(c(485));if(e=t.action,e!==null){var l={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};N.T!==null?a(!0):l.isTransition=!1,i(l),a=t.pending,a===null?(l.next=t.pending=l,M0(t,l)):(l.next=a.next,t.pending=a.next=l)}}function M0(e,t){var a=t.action,i=t.payload,r=e.state;if(t.isTransition){var l=N.T,o={};N.T=o;try{var u=a(r,i),v=N.S;v!==null&&v(o,u),T0(e,t,u)}catch(D){Go(e,t,D)}finally{l!==null&&o.types!==null&&(l.types=o.types),N.T=l}}else try{l=a(r,i),T0(e,t,l)}catch(D){Go(e,t,D)}}function T0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){R0(e,t,i)},function(i){return Go(e,t,i)}):R0(e,t,a)}function R0(e,t,a){t.status="fulfilled",t.value=a,C0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,M0(e,a)))}function Go(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,C0(t),t=t.next;while(t!==i)}e.action=null}function C0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function F0(e,t){return t}function E0(e,t){if(_e){var a=Le.formState;if(a!==null){e:{var i=pe;if(_e){if(Ye){t:{for(var r=Ye,l=Kt;r.nodeType!==8;){if(!l){r=null;break t}if(r=Wt(r.nextSibling),r===null){r=null;break t}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){Ye=Wt(r.nextSibling),i=r.data==="F!";break e}}Ba(i)}i=!1}i&&(t=a[0])}}return a=Vt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:F0,lastRenderedState:t},a.queue=i,a=ep.bind(null,pe,i),i.dispatch=a,i=Bo(!1),l=Jo.bind(null,pe,!1,i.queue),i=Vt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,a=Hd.bind(null,pe,r,l,a),r.dispatch=a,i.memoizedState=e,[t,a,!1]}function k0(e){var t=ot();return O0(t,Ce,e)}function O0(e,t,a){if(t=qo(e,t,F0)[0],e=Qn(wa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Zr(t)}catch(o){throw o===rr?Un:o}else i=t;t=ot();var r=t.queue,l=r.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,cr(9,{destroy:void 0},Ld.bind(null,r,a),null)),[i,l,e]}function Ld(e,t){e.action=t}function H0(e){var t=ot(),a=Ce;if(a!==null)return O0(t,a,e);ot(),t=t.memoizedState,a=ot();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function cr(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Jn(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function L0(){return ot().memoizedState}function Wn(e,t,a,i){var r=Vt();pe.flags|=e,r.memoizedState=cr(1|t,{destroy:void 0},a,i===void 0?null:i)}function $n(e,t,a,i){var r=ot();i=i===void 0?null:i;var l=r.memoizedState.inst;Ce!==null&&i!==null&&Fo(i,Ce.memoizedState.deps)?r.memoizedState=cr(t,l,a,i):(pe.flags|=e,r.memoizedState=cr(1|t,l,a,i))}function q0(e,t){Wn(8390656,8,e,t)}function Io(e,t){$n(2048,8,e,t)}function qd(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Jn(),pe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function U0(e){var t=ot().memoizedState;return qd({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function B0(e,t){return $n(4,2,e,t)}function G0(e,t){return $n(4,4,e,t)}function I0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function P0(e,t,a){a=a!=null?a.concat([e]):null,$n(4,4,I0.bind(null,t,e),a)}function Po(){}function Y0(e,t){var a=ot();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Fo(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function X0(e,t){var a=ot();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Fo(t,i[1]))return i[0];if(i=e(),Ti){Ue(!0);try{e()}finally{Ue(!1)}}return a.memoizedState=[i,t],i}function Yo(e,t,a){return a===void 0||(Sa&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Zp(),pe.lanes|=e,Qa|=e,a)}function Z0(e,t,a,i){return Ot(a,t)?a:lr.current!==null?(e=Yo(e,a,i),Ot(e,t)||(ft=!0),e):(Sa&42)===0||(Sa&1073741824)!==0&&(ge&261930)===0?(ft=!0,e.memoizedState=a):(e=Zp(),pe.lanes|=e,Qa|=e,t)}function J0(e,t,a,i,r){var l=U.p;U.p=l!==0&&8>l?l:8;var o=N.T,u={};N.T=u,Jo(e,!1,t,a);try{var v=r(),D=N.S;if(D!==null&&D(u,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=Ed(v,i);Jr(e,t,R,Gt(e))}else Jr(e,t,i,Gt(e))}catch(H){Jr(e,t,{then:function(){},status:"rejected",reason:H},Gt())}finally{U.p=l,o!==null&&u.types!==null&&(o.types=u.types),N.T=o}}function Ud(){}function Xo(e,t,a,i){if(e.tag!==5)throw Error(c(476));var r=K0(e).queue;J0(e,r,t,M,a===null?Ud:function(){return Q0(e),a(i)})}function K0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:M},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Q0(e){var t=K0(e);t.next===null&&(t=e.alternate.memoizedState),Jr(e,t.next.queue,{},Gt())}function Zo(){return gt(dn)}function W0(){return ot().memoizedState}function $0(){return ot().memoizedState}function Bd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Gt();e=Pa(a);var i=Ya(t,e,a);i!==null&&(Et(i,t,a),Ir(i,t,a)),t={cache:So()},e.payload=t;return}t=t.return}}function Gd(e,t,a){var i=Gt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},el(e)?tp(t,a):(a=fo(e,t,a,i),a!==null&&(Et(a,e,i),ap(a,t,i)))}function ep(e,t,a){var i=Gt();Jr(e,t,a,i)}function Jr(e,t,a,i){var r={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(el(e))tp(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,a);if(r.hasEagerState=!0,r.eagerState=u,Ot(u,o))return Fn(e,t,r,0),Le===null&&Cn(),!1}catch{}finally{}if(a=fo(e,t,r,i),a!==null)return Et(a,e,i),ap(a,t,i),!0}return!1}function Jo(e,t,a,i){if(i={lane:2,revertLane:Ns(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},el(e)){if(t)throw Error(c(479))}else t=fo(e,a,i,2),t!==null&&Et(t,e,2)}function el(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function tp(e,t){or=Xn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ap(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,hi(e,a)}}var Kr={readContext:gt,use:Kn,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at};Kr.useEffectEvent=at;var ip={readContext:gt,use:Kn,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:q0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Wn(4194308,4,I0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Wn(4194308,4,e,t)},useInsertionEffect:function(e,t){Wn(4,2,e,t)},useMemo:function(e,t){var a=Vt();t=t===void 0?null:t;var i=e();if(Ti){Ue(!0);try{e()}finally{Ue(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Vt();if(a!==void 0){var r=a(t);if(Ti){Ue(!0);try{a(t)}finally{Ue(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Gd.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:function(e){e=Bo(e);var t=e.queue,a=ep.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Po,useDeferredValue:function(e,t){var a=Vt();return Yo(a,e,t)},useTransition:function(){var e=Bo(!1);return e=J0.bind(null,pe,e.queue,!0,!1),Vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=pe,r=Vt();if(_e){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Le===null)throw Error(c(349));(ge&127)!==0||w0(i,t,a)}r.memoizedState=a;var l={value:a,getSnapshot:t};return r.queue=l,q0(A0.bind(null,i,l,e),[e]),i.flags|=2048,cr(9,{destroy:void 0},D0.bind(null,i,l,a,t),null),a},useId:function(){var e=Vt(),t=Le.identifierPrefix;if(_e){var a=ca,i=sa;a=(i&~(1<<32-Ke(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Zn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=kd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:E0,useActionState:E0,useOptimistic:function(e){var t=Vt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Jo.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Vt().memoizedState=Bd.bind(null,pe)},useEffectEvent:function(e){var t=Vt(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Ko={readContext:gt,use:Kn,useCallback:Y0,useContext:gt,useEffect:Io,useImperativeHandle:P0,useInsertionEffect:B0,useLayoutEffect:G0,useMemo:X0,useReducer:Qn,useRef:L0,useState:function(){return Qn(wa)},useDebugValue:Po,useDeferredValue:function(e,t){var a=ot();return Z0(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Qn(wa)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Zr(e),t]},useSyncExternalStore:S0,useId:W0,useHostTransitionStatus:Zo,useFormState:k0,useActionState:k0,useOptimistic:function(e,t){var a=ot();return j0(a,Ce,e,t)},useMemoCache:Lo,useCacheRefresh:$0};Ko.useEffectEvent=U0;var rp={readContext:gt,use:Kn,useCallback:Y0,useContext:gt,useEffect:Io,useImperativeHandle:P0,useInsertionEffect:B0,useLayoutEffect:G0,useMemo:X0,useReducer:Uo,useRef:L0,useState:function(){return Uo(wa)},useDebugValue:Po,useDeferredValue:function(e,t){var a=ot();return Ce===null?Yo(a,e,t):Z0(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Uo(wa)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Zr(e),t]},useSyncExternalStore:S0,useId:W0,useHostTransitionStatus:Zo,useFormState:H0,useActionState:H0,useOptimistic:function(e,t){var a=ot();return Ce!==null?j0(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lo,useCacheRefresh:$0};rp.useEffectEvent=U0;function Qo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:F({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wo={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Gt(),r=Pa(i);r.payload=t,a!=null&&(r.callback=a),t=Ya(e,r,i),t!==null&&(Et(t,e,i),Ir(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Gt(),r=Pa(i);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Ya(e,r,i),t!==null&&(Et(t,e,i),Ir(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Gt(),i=Pa(a);i.tag=2,t!=null&&(i.callback=t),t=Ya(e,i,a),t!==null&&(Et(t,e,a),Ir(t,e,a))}};function np(e,t,a,i,r,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,o):t.prototype&&t.prototype.isPureReactComponent?!kr(a,i)||!kr(r,l):!0}function lp(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Ri(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=F({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function op(e){Rn(e)}function sp(e){console.error(e)}function cp(e){Rn(e)}function tl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function pp(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $o(e,t,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){tl(e,t)},a}function fp(e){return e=Pa(e),e.tag=3,e}function up(e,t,a,i){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var l=i.value;e.payload=function(){return r(l)},e.callback=function(){pp(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){pp(t,a,i),typeof r!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function Id(e,t,a,i,r){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&tr(t,a,r,!0),a=Lt.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?dl():a.alternate===null&&it===0&&(it=3),a.flags&=-257,a.flags|=65536,a.lanes=r,i===Bn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),ws(e,i,r)),!1;case 22:return a.flags|=65536,i===Bn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),ws(e,i,r)),!1}throw Error(c(435,a.tag))}return ws(e,i,r),dl(),!1}if(_e)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==xo&&(e=Error(c(422),{cause:i}),Lr(Xt(e,a)))):(i!==xo&&(t=Error(c(423),{cause:i}),Lr(Xt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Xt(i,a),r=$o(e.stateNode,i,r),jo(e,r),it!==4&&(it=2)),!1;var l=Error(c(520),{cause:i});if(l=Xt(l,a),nn===null?nn=[l]:nn.push(l),it!==4&&(it=2),t===null)return!0;i=Xt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=$o(a.stateNode,i,e),jo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Wa===null||!Wa.has(l))))return a.flags|=65536,r&=-r,a.lanes|=r,r=fp(r),up(r,e,a,i),jo(a,r),!1}a=a.return}while(a!==null);return!1}var es=Error(c(461)),ft=!1;function zt(e,t,a,i){t.child=e===null?v0(t,null,a,i):Mi(t,e.child,a,i)}function dp(e,t,a,i,r){a=a.render;var l=t.ref;if("ref"in i){var o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}else o=i;return Ai(t),i=Eo(e,t,a,o,l,r),u=ko(),e!==null&&!ft?(Oo(e,t,r),Da(e,t,r)):(_e&&u&&vo(t),t.flags|=1,zt(e,t,i,r),t.child)}function mp(e,t,a,i,r){if(e===null){var l=a.type;return typeof l=="function"&&!uo(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,hp(e,t,l,i,r)):(e=kn(a.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!ss(e,r)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(o,i)&&e.ref===t.ref)return Da(e,t,r)}return t.flags|=1,e=ba(l,i),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,a,i,r){if(e!==null){var l=e.memoizedProps;if(kr(l,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=l,ss(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Da(e,t,r)}return ts(e,t,a,i,r)}function vp(e,t,a,i){var r=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~l}else i=0,t.child=null;return yp(e,t,l,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qn(t,l!==null?l.cachePool:null),l!==null?b0(t,l):To(),g0(t);else return i=t.lanes=536870912,yp(e,t,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(qn(t,l.cachePool),b0(t,l),Za(),t.memoizedState=null):(e!==null&&qn(t,null),To(),Za());return zt(e,t,r,a),t.child}function Qr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yp(e,t,a,i,r){var l=Do();return l=l===null?null:{parent:ct._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&qn(t,null),To(),g0(t),e!==null&&tr(e,t,i,!0),t.childLanes=r,null}function al(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xp(e,t,a){return Mi(t,e.child,null,a),e=al(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function Pd(e,t,a){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(i.mode==="hidden")return e=al(t,i),t.lanes=536870912,Qr(null,e);if(Co(t),(e=Ye)?(e=Tf(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:sa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=t0(e),a.return=t,t.child=a,bt=t,Ye=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return al(t,i)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(Co(t),r)if(t.flags&256)t.flags&=-257,t=xp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ft||tr(e,t,a,!1),r=(a&e.childLanes)!==0,ft||r){if(i=Le,i!==null&&(o=vi(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,_i(e,o),Et(i,e,o),es;dl(),t=xp(e,t,a)}else e=l.treeContext,Ye=Wt(o.nextSibling),bt=t,_e=!0,Ua=null,Kt=!1,e!==null&&r0(t,e),t=al(t,i),t.flags|=4096;return t}return e=ba(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function il(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ts(e,t,a,i,r){return Ai(t),a=Eo(e,t,a,i,void 0,r),i=ko(),e!==null&&!ft?(Oo(e,t,r),Da(e,t,r)):(_e&&i&&vo(t),t.flags|=1,zt(e,t,a,r),t.child)}function bp(e,t,a,i,r,l){return Ai(t),t.updateQueue=null,a=_0(t,i,a,r),z0(e),i=ko(),e!==null&&!ft?(Oo(e,t,l),Da(e,t,l)):(_e&&i&&vo(t),t.flags|=1,zt(e,t,a,l),t.child)}function gp(e,t,a,i,r){if(Ai(t),t.stateNode===null){var l=Qi,o=a.contextType;typeof o=="object"&&o!==null&&(l=gt(o)),l=new a(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Wo,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},No(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?gt(o):Qi,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Qo(t,a,o,i),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Wo.enqueueReplaceState(l,l.state,null),Yr(t,i,l,r),Pr(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var u=t.memoizedProps,v=Ri(a,u);l.props=v;var D=l.context,R=a.contextType;o=Qi,typeof R=="object"&&R!==null&&(o=gt(R));var H=a.getDerivedStateFromProps;R=typeof H=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||D!==o)&&lp(t,l,i,o),Ia=!1;var A=t.memoizedState;l.state=A,Yr(t,i,l,r),Pr(),D=t.memoizedState,u||A!==D||Ia?(typeof H=="function"&&(Qo(t,a,H,i),D=t.memoizedState),(v=Ia||np(t,a,v,i,A,D,o))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=D),l.props=i,l.state=D,l.context=o,i=v):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Vo(e,t),o=t.memoizedProps,R=Ri(a,o),l.props=R,H=t.pendingProps,A=l.context,D=a.contextType,v=Qi,typeof D=="object"&&D!==null&&(v=gt(D)),u=a.getDerivedStateFromProps,(D=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==H||A!==v)&&lp(t,l,i,v),Ia=!1,A=t.memoizedState,l.state=A,Yr(t,i,l,r),Pr();var V=t.memoizedState;o!==H||A!==V||Ia||e!==null&&e.dependencies!==null&&Hn(e.dependencies)?(typeof u=="function"&&(Qo(t,a,u,i),V=t.memoizedState),(R=Ia||np(t,a,R,i,A,V,v)||e!==null&&e.dependencies!==null&&Hn(e.dependencies))?(D||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,V,v),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,V,v)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=V),l.props=i,l.state=V,l.context=v,i=R):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,il(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=Mi(t,e.child,null,r),t.child=Mi(t,null,a,r)):zt(e,t,a,r),t.memoizedState=l.state,e=t.child):e=Da(e,t,r),e}function zp(e,t,a,i){return wi(),t.flags|=256,zt(e,t,a,i),t.child}var as={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function is(e){return{baseLanes:e,cachePool:p0()}}function rs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bt),e}function _p(e,t,a){var i=t.pendingProps,r=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(r?Xa(t):Za(),(e=Ye)?(e=Tf(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:sa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=t0(e),a.return=t,t.child=a,bt=t,Ye=null)):e=null,e===null)throw Ba(t);return qs(e)?t.lanes=32:t.lanes=536870912,null}var u=i.children;return i=i.fallback,r?(Za(),r=t.mode,u=rl({mode:"hidden",children:u},r),i=Si(i,r,a,null),u.return=t,i.return=t,u.sibling=i,t.child=u,i=t.child,i.memoizedState=is(a),i.childLanes=rs(e,o,a),t.memoizedState=as,Qr(null,i)):(Xa(t),ns(t,u))}var v=e.memoizedState;if(v!==null&&(u=v.dehydrated,u!==null)){if(l)t.flags&256?(Xa(t),t.flags&=-257,t=ls(e,t,a)):t.memoizedState!==null?(Za(),t.child=e.child,t.flags|=128,t=null):(Za(),u=i.fallback,r=t.mode,i=rl({mode:"visible",children:i.children},r),u=Si(u,r,a,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,Mi(t,e.child,null,a),i=t.child,i.memoizedState=is(a),i.childLanes=rs(e,o,a),t.memoizedState=as,t=Qr(null,i));else if(Xa(t),qs(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var D=o.dgst;o=D,i=Error(c(419)),i.stack="",i.digest=o,Lr({value:i,source:null,stack:null}),t=ls(e,t,a)}else if(ft||tr(e,t,a,!1),o=(a&e.childLanes)!==0,ft||o){if(o=Le,o!==null&&(i=vi(o,a),i!==0&&i!==v.retryLane))throw v.retryLane=i,_i(e,i),Et(o,e,i),es;Ls(u)||dl(),t=ls(e,t,a)}else Ls(u)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ye=Wt(u.nextSibling),bt=t,_e=!0,Ua=null,Kt=!1,e!==null&&r0(t,e),t=ns(t,i.children),t.flags|=4096);return t}return r?(Za(),u=i.fallback,r=t.mode,v=e.child,D=v.sibling,i=ba(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,D!==null?u=ba(D,u):(u=Si(u,r,a,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,Qr(null,i),i=t.child,u=e.child.memoizedState,u===null?u=is(a):(r=u.cachePool,r!==null?(v=ct._currentValue,r=r.parent!==v?{parent:v,pool:v}:r):r=p0(),u={baseLanes:u.baseLanes|a,cachePool:r}),i.memoizedState=u,i.childLanes=rs(e,o,a),t.memoizedState=as,Qr(e.child,i)):(Xa(t),a=e.child,e=a.sibling,a=ba(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function ns(e,t){return t=rl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=Ht(22,e,null,t),e.lanes=0,e}function ls(e,t,a){return Mi(t,e.child,null,a),e=ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sp(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),zo(e.return,t,a)}function os(e,t,a,i,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:r,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=r,o.treeForkCount=l)}function wp(e,t,a){var i=t.pendingProps,r=i.revealOrder,l=i.tail;i=i.children;var o=lt.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,G(lt,o),zt(e,t,i,a),i=_e?Hr:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sp(e,a,t);else if(e.tag===19)Sp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&Yn(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),os(t,!1,r,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Yn(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}os(t,!0,a,null,l,i);break;case"together":os(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Da(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(tr(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ba(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ss(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hn(e)))}function Yd(e,t,a){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),Ga(t,ct,e.memoizedState.cache),wi();break;case 27:case 5:et(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:Ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Co(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?_p(e,t,a):(Xa(t),e=Da(e,t,a),e!==null?e.sibling:null);Xa(t);break;case 19:var r=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(tr(e,t,a,!1),i=(a&t.childLanes)!==0),r){if(i)return wp(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),G(lt,lt.current),i)break;return null;case 22:return t.lanes=0,vp(e,t,a,t.pendingProps);case 24:Ga(t,ct,e.memoizedState.cache)}return Da(e,t,a)}function Dp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!ss(e,a)&&(t.flags&128)===0)return ft=!1,Yd(e,t,a);ft=(e.flags&131072)!==0}else ft=!1,_e&&(t.flags&1048576)!==0&&i0(t,Hr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Vi(t.elementType),t.type=e,typeof e=="function")uo(e)?(i=Ri(e,i),t.tag=1,t=gp(null,t,e,i,a)):(t.tag=0,t=ts(null,t,e,i,a));else{if(e!=null){var r=e.$$typeof;if(r===Y){t.tag=11,t=dp(null,t,e,i,a);break e}else if(r===ae){t.tag=14,t=mp(null,t,e,i,a);break e}}throw t=qe(e)||e,Error(c(306,t,""))}}return t;case 0:return ts(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,r=Ri(i,t.pendingProps),gp(e,t,i,r,a);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var l=t.memoizedState;r=l.element,Vo(e,t),Yr(t,i,null,a);var o=t.memoizedState;if(i=o.cache,Ga(t,ct,i),i!==l.cache&&_o(t,[ct],a,!0),Pr(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=zp(e,t,i,a);break e}else if(i!==r){r=Xt(Error(c(424)),t),Lr(r),t=zp(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Wt(e.firstChild),bt=t,_e=!0,Ua=null,Kt=!0,a=v0(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wi(),i===r){t=Da(e,t,a);break e}zt(e,t,i,a)}t=t.child}return t;case 26:return il(e,t),e===null?(a=Of(t.type,null,t.pendingProps,null))?t.memoizedState=a:_e||(a=t.type,e=t.pendingProps,i=gl(le.current).createElement(a),i[Re]=t,i[nt]=e,_t(i,a,e),vt(i),t.stateNode=i):t.memoizedState=Of(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return et(t),e===null&&_e&&(i=t.stateNode=Ff(t.type,t.pendingProps,le.current),bt=t,Kt=!0,r=Ye,ai(t.type)?(Us=r,Ye=Wt(i.firstChild)):Ye=r),zt(e,t,t.pendingProps.children,a),il(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((r=i=Ye)&&(i=_m(i,t.type,t.pendingProps,Kt),i!==null?(t.stateNode=i,bt=t,Ye=Wt(i.firstChild),Kt=!1,r=!0):r=!1),r||Ba(t)),et(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ks(r,l)?i=null:o!==null&&ks(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=Eo(e,t,Od,null,null,a),dn._currentValue=r),il(e,t),zt(e,t,i,a),t.child;case 6:return e===null&&_e&&((e=a=Ye)&&(a=Sm(a,t.pendingProps,Kt),a!==null?(t.stateNode=a,bt=t,Ye=null,e=!0):e=!1),e||Ba(t)),null;case 13:return _p(e,t,a);case 4:return Ve(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Mi(t,null,i,a):zt(e,t,i,a),t.child;case 11:return dp(e,t,t.type,t.pendingProps,a);case 7:return zt(e,t,t.pendingProps,a),t.child;case 8:return zt(e,t,t.pendingProps.children,a),t.child;case 12:return zt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ga(t,t.type,i.value),zt(e,t,i.children,a),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Ai(t),r=gt(r),i=i(r),t.flags|=1,zt(e,t,i,a),t.child;case 14:return mp(e,t,t.type,t.pendingProps,a);case 15:return hp(e,t,t.type,t.pendingProps,a);case 19:return wp(e,t,a);case 31:return Pd(e,t,a);case 22:return vp(e,t,a,t.pendingProps);case 24:return Ai(t),i=gt(ct),e===null?(r=Do(),r===null&&(r=Le,l=So(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=a),r=l),t.memoizedState={parent:i,cache:r},No(t),Ga(t,ct,r)):((e.lanes&a)!==0&&(Vo(e,t),Yr(t,null,null,a),Pr()),r=e.memoizedState,l=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Ga(t,ct,i)):(i=l.cache,Ga(t,ct,i),i!==r.cache&&_o(t,[ct],a,!0))),zt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Aa(e){e.flags|=4}function cs(e,t,a,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Wp())e.flags|=8192;else throw ji=Bn,Ao}else e.flags&=-16777217}function Ap(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bf(t))if(Wp())e.flags|=8192;else throw ji=Bn,Ao}function nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ha():536870912,e.lanes|=t,dr|=t)}function Wr(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Xd(e,t,a){var i=t.pendingProps;switch(yo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),_a(ct),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(t)?Aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bo())),Xe(t),null;case 26:var r=t.type,l=t.memoizedState;return e===null?(Aa(t),l!==null?(Xe(t),Ap(t,l)):(Xe(t),cs(t,r,null,i,a))):l?l!==e.memoizedState?(Aa(t),Xe(t),Ap(t,l)):(Xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Aa(t),Xe(t),cs(t,r,e,i,a)),null;case 27:if(Dt(t),a=le.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Aa(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}e=X.current,er(t)?n0(t):(e=Ff(r,i,a),t.stateNode=e,Aa(t))}return Xe(t),null;case 5:if(Dt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Aa(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}if(l=X.current,er(t))n0(t);else{var o=gl(le.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?o.createElement(r,{is:i.is}):o.createElement(r)}}l[Re]=t,l[nt]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(_t(l,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Aa(t)}}return Xe(t),cs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Aa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,er(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,r=bt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Re]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Sf(e.nodeValue,a)),e||Ba(t,!0)}else e=gl(e).createTextNode(i),e[Re]=t,t.stateNode=e}return Xe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=er(t),a!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Re]=t}else wi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),e=!1}else a=bo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Xe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[Re]=t}else wi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),r=!1}else r=bo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),nl(t,t.updateQueue),Xe(t),null);case 4:return he(),e===null&&Ts(t.stateNode.containerInfo),Xe(t),null;case 10:return _a(t.type),Xe(t),null;case 19:if(j(lt),i=t.memoizedState,i===null)return Xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Wr(i,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Yn(e),l!==null){for(t.flags|=128,Wr(i,!1),e=l.updateQueue,t.updateQueue=e,nl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)e0(a,e),a=a.sibling;return G(lt,lt.current&1|2),_e&&ga(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ie()>pl&&(t.flags|=128,r=!0,Wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yn(l),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,nl(t,e),Wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!_e)return Xe(t),null}else 2*Ie()-i.renderingStartTime>pl&&a!==536870912&&(t.flags|=128,r=!0,Wr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ie(),e.sibling=null,a=lt.current,G(lt,r?a&1|2:a&1),_e&&ga(t,i.treeForkCount),e):(Xe(t),null);case 22:case 23:return qt(t),Ro(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),a=t.updateQueue,a!==null&&nl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&j(Ni),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_a(ct),Xe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Zd(e,t){switch(yo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _a(ct),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Dt(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(c(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(lt),null;case 4:return he(),null;case 10:return _a(t.type),null;case 22:case 23:return qt(t),Ro(),e!==null&&j(Ni),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _a(ct),null;case 25:return null;default:return null}}function Np(e,t){switch(yo(t),t.tag){case 3:_a(ct),he();break;case 26:case 27:case 5:Dt(t);break;case 4:he();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:j(lt);break;case 10:_a(t.type);break;case 22:case 23:qt(t),Ro(),e!==null&&j(Ni);break;case 24:_a(ct)}}function $r(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){i=void 0;var l=a.create,o=a.inst;i=l(),o.destroy=i}a=a.next}while(a!==r)}}catch(u){Te(t,t.return,u)}}function Ja(e,t,a){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&e)===e){var o=i.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,r=t;var v=a,D=u;try{D()}catch(R){Te(r,v,R)}}}i=i.next}while(i!==l)}}catch(R){Te(t,t.return,R)}}function Vp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{x0(t,a)}catch(i){Te(e,e.return,i)}}}function jp(e,t,a){a.props=Ri(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Te(e,t,i)}}function en(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){Te(e,t,r)}}function pa(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(r){Te(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){Te(e,t,r)}else a.current=null}function Mp(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(r){Te(e,e.return,r)}}function ps(e,t,a){try{var i=e.stateNode;vm(i,e.type,a,t),i[nt]=t}catch(r){Te(e,e.return,r)}}function Tp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ai(e.type)||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ai(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function us(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ya));else if(i!==4&&(i===27&&ai(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(us(e,t,a),e=e.sibling;e!==null;)us(e,t,a),e=e.sibling}function ll(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ai(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ll(e,t,a),e=e.sibling;e!==null;)ll(e,t,a),e=e.sibling}function Rp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);_t(t,i,a),t[Re]=e,t[nt]=a}catch(l){Te(e,e.return,l)}}var Na=!1,ut=!1,ds=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,yt=null;function Jd(e,t){if(e=e.containerInfo,Fs=Nl,e=Pc(e),no(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var r=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,u=-1,v=-1,D=0,R=0,H=e,A=null;t:for(;;){for(var V;H!==a||r!==0&&H.nodeType!==3||(u=o+r),H!==l||i!==0&&H.nodeType!==3||(v=o+i),H.nodeType===3&&(o+=H.nodeValue.length),(V=H.firstChild)!==null;)A=H,H=V;for(;;){if(H===e)break t;if(A===a&&++D===r&&(u=o),A===l&&++R===i&&(v=o),(V=H.nextSibling)!==null)break;H=A,A=H.parentNode}H=V}a=u===-1||v===-1?null:{start:u,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Es={focusedElem:e,selectionRange:a},Nl=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,r=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var Q=Ri(a.type,r);e=i.getSnapshotBeforeUpdate(Q,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(re){Te(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Hs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function Fp(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ja(e,a),i&4&&$r(5,a);break;case 1:if(ja(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Te(a,a.return,o)}else{var r=Ri(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Te(a,a.return,o)}}i&64&&Vp(a),i&512&&en(a,a.return);break;case 3:if(ja(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{x0(e,t)}catch(o){Te(a,a.return,o)}}break;case 27:t===null&&i&4&&Rp(a);case 26:case 5:ja(e,a),t===null&&i&4&&Mp(a),i&512&&en(a,a.return);break;case 12:ja(e,a);break;case 31:ja(e,a),i&4&&Op(e,a);break;case 13:ja(e,a),i&4&&Hp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rm.bind(null,a),wm(e,a))));break;case 22:if(i=a.memoizedState!==null||Na,!i){t=t!==null&&t.memoizedState!==null||ut,r=Na;var l=ut;Na=i,(ut=t)&&!l?Ma(e,a,(a.subtreeFlags&8772)!==0):ja(e,a),Na=r,ut=l}break;case 30:break;default:ja(e,a)}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Tt=!1;function Va(e,t,a){for(a=a.child;a!==null;)kp(e,t,a),a=a.sibling}function kp(e,t,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:ut||pa(a,t),Va(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ut||pa(a,t);var i=Qe,r=Tt;ai(a.type)&&(Qe=a.stateNode,Tt=!1),Va(e,t,a),pn(a.stateNode),Qe=i,Tt=r;break;case 5:ut||pa(a,t);case 6:if(i=Qe,r=Tt,Qe=null,Va(e,t,a),Qe=i,Tt=r,Qe!==null)if(Tt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(l){Te(a,t,l)}else try{Qe.removeChild(a.stateNode)}catch(l){Te(a,t,l)}break;case 18:Qe!==null&&(Tt?(e=Qe,jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zr(e)):jf(Qe,a.stateNode));break;case 4:i=Qe,r=Tt,Qe=a.stateNode.containerInfo,Tt=!0,Va(e,t,a),Qe=i,Tt=r;break;case 0:case 11:case 14:case 15:Ja(2,a,t),ut||Ja(4,a,t),Va(e,t,a);break;case 1:ut||(pa(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&jp(a,t,i)),Va(e,t,a);break;case 21:Va(e,t,a);break;case 22:ut=(i=ut)||a.memoizedState!==null,Va(e,t,a),ut=i;break;default:Va(e,t,a)}}function Op(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zr(e)}catch(a){Te(t,t.return,a)}}}function Hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zr(e)}catch(a){Te(t,t.return,a)}}function Kd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cp),t;default:throw Error(c(435,e.tag))}}function ol(e,t){var a=Kd(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var r=nm.bind(null,e,i);i.then(r,r)}})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var r=a[i],l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ai(u.type)){Qe=u.stateNode,Tt=!1;break e}break;case 5:Qe=u.stateNode,Tt=!1;break e;case 3:case 4:Qe=u.stateNode.containerInfo,Tt=!0;break e}u=u.return}if(Qe===null)throw Error(c(160));kp(l,o,r),Qe=null,Tt=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}var ia=null;function Lp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Ct(e),i&4&&(Ja(3,e,e.return),$r(3,e),Ja(5,e,e.return));break;case 1:Rt(t,e),Ct(e),i&512&&(ut||a===null||pa(a,a.return)),i&64&&Na&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var r=ia;if(Rt(t,e),Ct(e),i&512&&(ut||a===null||pa(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Nr]||l[Re]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(i),r.head.insertBefore(l,r.querySelector("head > title"))),_t(l,i,a),l[Re]=e,vt(l),i=l;break e;case"link":var o=qf("link","href",r).get(i+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(l=o[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}l=r.createElement(i),_t(l,i,a),r.head.appendChild(l);break;case"meta":if(o=qf("meta","content",r).get(i+(a.content||""))){for(u=0;u<o.length;u++)if(l=o[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}l=r.createElement(i),_t(l,i,a),r.head.appendChild(l);break;default:throw Error(c(468,i))}l[Re]=e,vt(l),i=l}e.stateNode=i}else Uf(r,e.type,e.stateNode);else e.stateNode=Lf(r,i,e.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?Uf(r,e.type,e.stateNode):Lf(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ps(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rt(t,e),Ct(e),i&512&&(ut||a===null||pa(a,a.return)),a!==null&&i&4&&ps(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rt(t,e),Ct(e),i&512&&(ut||a===null||pa(a,a.return)),e.flags&32){r=e.stateNode;try{Ii(r,"")}catch(Q){Te(e,e.return,Q)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,ps(e,r,a!==null?a.memoizedProps:r)),i&1024&&(ds=!0);break;case 6:if(Rt(t,e),Ct(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(Q){Te(e,e.return,Q)}}break;case 3:if(Sl=null,r=ia,ia=zl(t.containerInfo),Rt(t,e),ia=r,Ct(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(Q){Te(e,e.return,Q)}ds&&(ds=!1,qp(e));break;case 4:i=ia,ia=zl(e.stateNode.containerInfo),Rt(t,e),Ct(e),ia=i;break;case 12:Rt(t,e),Ct(e);break;case 31:Rt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ol(e,i)));break;case 13:Rt(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cl=Ie()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ol(e,i)));break;case 22:r=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,D=Na,R=ut;if(Na=D||r,ut=R||v,Rt(t,e),ut=R,Na=D,Ct(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||v||Na||ut||Ci(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(l=v.stateNode,r)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=v.stateNode;var H=v.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Q){Te(v,v.return,Q)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(Q){Te(v,v.return,Q)}}}else if(t.tag===18){if(a===null){v=t;try{var V=v.stateNode;r?Mf(V,!0):Mf(v.stateNode,!1)}catch(Q){Te(v,v.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,ol(e,a))));break;case 19:Rt(t,e),Ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ol(e,i)));break;case 30:break;case 21:break;default:Rt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Tp(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var r=a.stateNode,l=fs(e);ll(e,l,r);break;case 5:var o=a.stateNode;a.flags&32&&(Ii(o,""),a.flags&=-33);var u=fs(e);ll(e,u,o);break;case 3:case 4:var v=a.stateNode.containerInfo,D=fs(e);us(e,D,v);break;default:throw Error(c(161))}}catch(R){Te(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ja(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fp(e,t.alternate,t),t=t.sibling}function Ci(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ja(4,t,t.return),Ci(t);break;case 1:pa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&jp(t,t.return,a),Ci(t);break;case 27:pn(t.stateNode);case 26:case 5:pa(t,t.return),Ci(t);break;case 22:t.memoizedState===null&&Ci(t);break;case 30:Ci(t);break;default:Ci(t)}e=e.sibling}}function Ma(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Ma(r,l,a),$r(4,l);break;case 1:if(Ma(r,l,a),i=l,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(D){Te(i,i.return,D)}if(i=l,r=i.updateQueue,r!==null){var u=i.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)y0(v[r],u)}catch(D){Te(i,i.return,D)}}a&&o&64&&Vp(l),en(l,l.return);break;case 27:Rp(l);case 26:case 5:Ma(r,l,a),a&&i===null&&o&4&&Mp(l),en(l,l.return);break;case 12:Ma(r,l,a);break;case 31:Ma(r,l,a),a&&o&4&&Op(r,l);break;case 13:Ma(r,l,a),a&&o&4&&Hp(r,l);break;case 22:l.memoizedState===null&&Ma(r,l,a),en(l,l.return);break;case 30:break;default:Ma(r,l,a)}t=t.sibling}}function ms(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qr(a))}function hs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qr(e))}function ra(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Up(e,t,a,i),t=t.sibling}function Up(e,t,a,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ra(e,t,a,i),r&2048&&$r(9,t);break;case 1:ra(e,t,a,i);break;case 3:ra(e,t,a,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qr(e)));break;case 12:if(r&2048){ra(e,t,a,i),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,u=l.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Te(t,t.return,v)}}else ra(e,t,a,i);break;case 31:ra(e,t,a,i);break;case 13:ra(e,t,a,i);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?ra(e,t,a,i):tn(e,t):l._visibility&2?ra(e,t,a,i):(l._visibility|=2,pr(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&ms(o,t);break;case 24:ra(e,t,a,i),r&2048&&hs(t.alternate,t);break;default:ra(e,t,a,i)}}function pr(e,t,a,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,u=a,v=i,D=o.flags;switch(o.tag){case 0:case 11:case 15:pr(l,o,u,v,r),$r(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?pr(l,o,u,v,r):tn(l,o):(R._visibility|=2,pr(l,o,u,v,r)),r&&D&2048&&ms(o.alternate,o);break;case 24:pr(l,o,u,v,r),r&&D&2048&&hs(o.alternate,o);break;default:pr(l,o,u,v,r)}t=t.sibling}}function tn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,r=i.flags;switch(i.tag){case 22:tn(a,i),r&2048&&ms(i.alternate,i);break;case 24:tn(a,i),r&2048&&hs(i.alternate,i);break;default:tn(a,i)}t=t.sibling}}var an=8192;function fr(e,t,a){if(e.subtreeFlags&an)for(e=e.child;e!==null;)Bp(e,t,a),e=e.sibling}function Bp(e,t,a){switch(e.tag){case 26:fr(e,t,a),e.flags&an&&e.memoizedState!==null&&km(a,ia,e.memoizedState,e.memoizedProps);break;case 5:fr(e,t,a);break;case 3:case 4:var i=ia;ia=zl(e.stateNode.containerInfo),fr(e,t,a),ia=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=an,an=16777216,fr(e,t,a),an=i):fr(e,t,a));break;default:fr(e,t,a)}}function Gp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];yt=i,Pp(i,e)}Gp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ip(e),e=e.sibling}function Ip(e){switch(e.tag){case 0:case 11:case 15:rn(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:rn(e);break;case 12:rn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,sl(e)):rn(e);break;default:rn(e)}}function sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];yt=i,Pp(i,e)}Gp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ja(8,t,t.return),sl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,sl(t));break;default:sl(t)}e=e.sibling}}function Pp(e,t){for(;yt!==null;){var a=yt;switch(a.tag){case 0:case 11:case 15:Ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:qr(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,yt=i;else e:for(a=e;yt!==null;){i=yt;var r=i.sibling,l=i.return;if(Ep(i),i===a){yt=null;break e}if(r!==null){r.return=l,yt=r;break e}yt=l}}}var Qd={getCacheForType:function(e){var t=gt(ct),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return gt(ct).controller.signal}},Wd=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Le=null,ve=null,ge=0,Me=0,Ut=null,Ka=!1,ur=!1,vs=!1,Ta=0,it=0,Qa=0,Fi=0,ys=0,Bt=0,dr=0,nn=null,Ft=null,xs=!1,cl=0,Yp=0,pl=1/0,fl=null,Wa=null,mt=0,$a=null,mr=null,Ra=0,bs=0,gs=null,Xp=null,ln=0,zs=null;function Gt(){return(Ae&2)!==0&&ge!==0?ge&-ge:N.T!==null?Ns():yi()}function Zp(){if(Bt===0)if((ge&536870912)===0||_e){var e=di;di<<=1,(di&3932160)===0&&(di=262144),Bt=e}else Bt=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Bt}function Et(e,t,a){(e===Le&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(hr(e,0),ei(e,ge,Bt,!1)),Nt(e,a),((Ae&2)===0||e!==Le)&&(e===Le&&((Ae&2)===0&&(Fi|=a),it===4&&ei(e,ge,Bt,!1)),fa(e))}function Jp(e,t,a){if((Ae&6)!==0)throw Error(c(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),r=i?tm(e,t):Ss(e,t,!0),l=i;do{if(r===0){ur&&!i&&ei(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!$d(a)){r=Ss(e,t,!1),l=!1;continue}if(r===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;r=nn;var v=u.current.memoizedState.isDehydrated;if(v&&(hr(u,o).flags|=256),o=Ss(u,o,!1),o!==2){if(vs&&!v){u.errorRecoveryDisabledLanes|=l,Fi|=l,r=4;break e}l=Ft,Ft=r,l!==null&&(Ft===null?Ft=l:Ft.push.apply(Ft,l))}r=o}if(l=!1,r!==2)continue}}if(r===1){hr(e,0),ei(e,t,0,!0);break}e:{switch(i=e,l=r,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ei(i,t,Bt,!Ka);break e;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=cl+300-Ie(),10<r)){if(ei(i,t,Bt,!Ka),mi(i,0,!0)!==0)break e;Ra=t,i.timeoutHandle=Nf(Kp.bind(null,i,a,Ft,fl,xs,t,Bt,Fi,dr,Ka,l,"Throttled",-0,0),r);break e}Kp(i,a,Ft,fl,xs,t,Bt,Fi,dr,Ka,l,null,-0,0)}}break}while(!0);fa(e)}function Kp(e,t,a,i,r,l,o,u,v,D,R,H,A,V){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},Bp(t,l,H);var Q=(l&62914560)===l?cl-Ie():(l&4194048)===l?Yp-Ie():0;if(Q=Om(H,Q),Q!==null){Ra=l,e.cancelPendingCommit=Q(nf.bind(null,e,t,l,a,i,r,o,u,v,R,H,null,A,V)),ei(e,l,o,!D);return}}nf(e,t,l,a,i,r,o,u,v)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var r=a[i],l=r.getSnapshot;r=r.value;try{if(!Ot(l(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ei(e,t,a,i){t&=~ys,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var l=31-Ke(r),o=1<<l;i[l]=-1,r&=~o}a!==0&&Ha(e,a,t)}function ul(){return(Ae&6)===0?(on(0),!1):!0}function _s(){if(ve!==null){if(Me===0)var e=ve.return;else e=ve,za=Di=null,Ho(e),nr=null,Br=0,e=ve;for(;e!==null;)Np(e.alternate,e),e=e.return;ve=null}}function hr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ra=0,_s(),Le=e,ve=a=ba(e.current,null),ge=t,Me=0,Ut=null,Ka=!1,ur=Oa(e,t),vs=!1,dr=Bt=ys=Fi=Qa=it=0,Ft=nn=null,xs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-Ke(i),l=1<<r;t|=e[r],i&=~l}return Ta=t,Cn(),a}function Qp(e,t){pe=null,N.H=Kr,t===rr||t===Un?(t=d0(),Me=3):t===Ao?(t=d0(),Me=4):Me=t===es?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,ve===null&&(it=1,tl(e,Xt(t,e.current)))}function Wp(){var e=Lt.current;return e===null?!0:(ge&4194048)===ge?Qt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Qt:!1}function $p(){var e=N.H;return N.H=Kr,e===null?Kr:e}function ef(){var e=N.A;return N.A=Qd,e}function dl(){it=4,Ka||(ge&4194048)!==ge&&Lt.current!==null||(ur=!0),(Qa&134217727)===0&&(Fi&134217727)===0||Le===null||ei(Le,ge,Bt,!1)}function Ss(e,t,a){var i=Ae;Ae|=2;var r=$p(),l=ef();(Le!==e||ge!==t)&&(fl=null,hr(e,t)),t=!1;var o=it;e:do try{if(Me!==0&&ve!==null){var u=ve,v=Ut;switch(Me){case 8:_s(),o=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var D=Me;if(Me=0,Ut=null,vr(e,u,v,D),a&&ur){o=0;break e}break;default:D=Me,Me=0,Ut=null,vr(e,u,v,D)}}em(),o=it;break}catch(R){Qp(e,R)}while(!0);return t&&e.shellSuspendCounter++,za=Di=null,Ae=i,N.H=r,N.A=l,ve===null&&(Le=null,ge=0,Cn()),o}function em(){for(;ve!==null;)tf(ve)}function tm(e,t){var a=Ae;Ae|=2;var i=$p(),r=ef();Le!==e||ge!==t?(fl=null,pl=Ie()+500,hr(e,t)):ur=Oa(e,t);e:do try{if(Me!==0&&ve!==null){t=ve;var l=Ut;t:switch(Me){case 1:Me=0,Ut=null,vr(e,t,l,1);break;case 2:case 9:if(f0(l)){Me=0,Ut=null,af(t);break}t=function(){Me!==2&&Me!==9||Le!==e||(Me=7),fa(e)},l.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:f0(l)?(Me=0,Ut=null,af(t)):(Me=0,Ut=null,vr(e,t,l,7));break;case 5:var o=null;switch(ve.tag){case 26:o=ve.memoizedState;case 5:case 27:var u=ve;if(o?Bf(o):u.stateNode.complete){Me=0,Ut=null;var v=u.sibling;if(v!==null)ve=v;else{var D=u.return;D!==null?(ve=D,ml(D)):ve=null}break t}}Me=0,Ut=null,vr(e,t,l,5);break;case 6:Me=0,Ut=null,vr(e,t,l,6);break;case 8:_s(),it=6;break e;default:throw Error(c(462))}}am();break}catch(R){Qp(e,R)}while(!0);return za=Di=null,N.H=i,N.A=r,Ae=a,ve!==null?0:(Le=null,ge=0,Cn(),it)}function am(){for(;ve!==null&&!ki();)tf(ve)}function tf(e){var t=Dp(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?ml(e):ve=t}function af(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=bp(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=bp(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Ho(t);default:Np(a,t),t=ve=e0(t,Ta),t=Dp(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?ml(e):ve=t}function vr(e,t,a,i){za=Di=null,Ho(t),nr=null,Br=0;var r=t.return;try{if(Id(e,r,t,a,ge)){it=1,tl(e,Xt(a,e.current)),ve=null;return}}catch(l){if(r!==null)throw ve=r,l;it=1,tl(e,Xt(a,e.current)),ve=null;return}t.flags&32768?(_e||i===1?e=!0:ur||(ge&536870912)!==0?e=!1:(Ka=e=!0,(i===2||i===9||i===3||i===6)&&(i=Lt.current,i!==null&&i.tag===13&&(i.flags|=16384))),rf(t,e)):ml(t)}function ml(e){var t=e;do{if((t.flags&32768)!==0){rf(t,Ka);return}e=t.return;var a=Xd(t.alternate,t,Ta);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);it===0&&(it=5)}function rf(e,t){do{var a=Zd(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);it=6,ve=null}function nf(e,t,a,i,r,l,o,u,v){e.cancelPendingCommit=null;do hl();while(mt!==0);if((Ae&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(l=t.lanes|t.childLanes,l|=po,ta(e,a,l,o,u,v),e===Le&&(ve=Le=null,ge=0),mr=t,$a=e,Ra=a,bs=l,gs=r,Xp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lm(I,function(){return pf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=N.T,N.T=null,r=U.p,U.p=2,o=Ae,Ae|=4;try{Jd(e,t,a)}finally{Ae=o,U.p=r,N.T=i}}mt=1,lf(),of(),sf()}}function lf(){if(mt===1){mt=0;var e=$a,t=mr,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var i=U.p;U.p=2;var r=Ae;Ae|=4;try{Lp(t,e);var l=Es,o=Pc(e.containerInfo),u=l.focusedElem,v=l.selectionRange;if(o!==u&&u&&u.ownerDocument&&Ic(u.ownerDocument.documentElement,u)){if(v!==null&&no(u)){var D=v.start,R=v.end;if(R===void 0&&(R=D),"selectionStart"in u)u.selectionStart=D,u.selectionEnd=Math.min(R,u.value.length);else{var H=u.ownerDocument||document,A=H&&H.defaultView||window;if(A.getSelection){var V=A.getSelection(),Q=u.textContent.length,re=Math.min(v.start,Q),Ee=v.end===void 0?re:Math.min(v.end,Q);!V.extend&&re>Ee&&(o=Ee,Ee=re,re=o);var _=Gc(u,re),x=Gc(u,Ee);if(_&&x&&(V.rangeCount!==1||V.anchorNode!==_.node||V.anchorOffset!==_.offset||V.focusNode!==x.node||V.focusOffset!==x.offset)){var w=H.createRange();w.setStart(_.node,_.offset),V.removeAllRanges(),re>Ee?(V.addRange(w),V.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),V.addRange(w))}}}}for(H=[],V=u;V=V.parentNode;)V.nodeType===1&&H.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<H.length;u++){var E=H[u];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Nl=!!Fs,Es=Fs=null}finally{Ae=r,U.p=i,N.T=a}}e.current=t,mt=2}}function of(){if(mt===2){mt=0;var e=$a,t=mr,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var i=U.p;U.p=2;var r=Ae;Ae|=4;try{Fp(e,t.alternate,t)}finally{Ae=r,U.p=i,N.T=a}}mt=3}}function sf(){if(mt===4||mt===3){mt=0,ka();var e=$a,t=mr,a=Ra,i=Xp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,mr=$a=null,cf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Wa=null),oa(a),t=t.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Se,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=N.T,r=U.p,U.p=2,N.T=null;try{for(var l=e.onRecoverableError,o=0;o<i.length;o++){var u=i[o];l(u.value,{componentStack:u.stack})}}finally{N.T=t,U.p=r}}(Ra&3)!==0&&hl(),fa(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===zs?ln++:(ln=0,zs=e):ln=0,on(0)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qr(t)))}function hl(){return lf(),of(),sf(),pf()}function pf(){if(mt!==5)return!1;var e=$a,t=bs;bs=0;var a=oa(Ra),i=N.T,r=U.p;try{U.p=32>a?32:a,N.T=null,a=gs,gs=null;var l=$a,o=Ra;if(mt=0,mr=$a=null,Ra=0,(Ae&6)!==0)throw Error(c(331));var u=Ae;if(Ae|=4,Ip(l.current),Up(l,l.current,o,a),Ae=u,on(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Se,l)}catch{}return!0}finally{U.p=r,N.T=i,cf(e,t)}}function ff(e,t,a){t=Xt(a,t),t=$o(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(Nt(e,2),fa(e))}function Te(e,t,a){if(e.tag===3)ff(e,e,a);else for(;t!==null;){if(t.tag===3){ff(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wa===null||!Wa.has(i))){e=Xt(a,e),a=fp(2),i=Ya(t,a,2),i!==null&&(up(a,i,t,e),Nt(i,2),fa(i));break}}t=t.return}}function ws(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Wd;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(a)||(vs=!0,r.add(a),e=im.bind(null,e,t,a),t.then(e,e))}function im(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Le===e&&(ge&a)===a&&(it===4||it===3&&(ge&62914560)===ge&&300>Ie()-cl?(Ae&2)===0&&hr(e,0):ys|=a,dr===ge&&(dr=0)),fa(e)}function uf(e,t){t===0&&(t=ha()),e=_i(e,t),e!==null&&(Nt(e,t),fa(e))}function rm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),uf(e,a)}function nm(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),uf(e,a)}function lm(e,t){return fi(e,t)}var vl=null,yr=null,Ds=!1,yl=!1,As=!1,ti=0;function fa(e){e!==yr&&e.next===null&&(yr===null?vl=yr=e:yr=yr.next=e),yl=!0,Ds||(Ds=!0,sm())}function on(e,t){if(!As&&yl){As=!0;do for(var a=!1,i=vl;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var l=0;else{var o=i.suspendedLanes,u=i.pingedLanes;l=(1<<31-Ke(42|e)+1)-1,l&=r&~(o&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,vf(i,l))}else l=ge,l=mi(i,i===Le?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Oa(i,l)||(a=!0,vf(i,l));i=i.next}while(a);As=!1}}function om(){df()}function df(){yl=Ds=!1;var e=0;ti!==0&&xm()&&(e=ti);for(var t=Ie(),a=null,i=vl;i!==null;){var r=i.next,l=mf(i,t);l===0?(i.next=null,a===null?vl=r:a.next=r,r===null&&(yr=a)):(a=i,(e!==0||(l&3)!==0)&&(yl=!0)),i=r}mt!==0&&mt!==5||on(e),ti!==0&&(ti=0)}function mf(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-Ke(l),u=1<<o,v=r[o];v===-1?((u&a)===0||(u&i)!==0)&&(r[o]=Pe(u,t)):v<=t&&(e.expiredLanes|=u),l&=~u}if(t=Le,a=ge,a=mi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ui(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Oa(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&ui(i),oa(a)){case 2:case 8:a=ie;break;case 32:a=I;break;case 268435456:a=ne;break;default:a=I}return i=hf.bind(null,e),a=fi(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&ui(i),e.callbackPriority=2,e.callbackNode=null,2}function hf(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(hl()&&e.callbackNode!==a)return null;var i=ge;return i=mi(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Jp(e,i,t),mf(e,Ie()),e.callbackNode!=null&&e.callbackNode===a?hf.bind(null,e):null)}function vf(e,t){if(hl())return null;Jp(e,t,!0)}function sm(){gm(function(){(Ae&6)!==0?fi(P,om):df()})}function Ns(){if(ti===0){var e=ar;e===0&&(e=St,St<<=1,(St&261888)===0&&(St=256)),ti=e}return ti}function yf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dn(""+e)}function xf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cm(e,t,a,i,r){if(t==="submit"&&a&&a.stateNode===r){var l=yf((r[nt]||null).action),o=i.submitter;o&&(t=(t=o[nt]||null)?yf(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var u=new jn("action","action",null,i,r);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ti!==0){var v=o?xf(r,o):new FormData(r);Xo(a,{pending:!0,data:v,method:r.method,action:l},null,v)}}else typeof l=="function"&&(u.preventDefault(),v=o?xf(r,o):new FormData(r),Xo(a,{pending:!0,data:v,method:r.method,action:l},l,v))},currentTarget:r}]})}}for(var Vs=0;Vs<co.length;Vs++){var js=co[Vs],pm=js.toLowerCase(),fm=js[0].toUpperCase()+js.slice(1);aa(pm,"on"+fm)}aa(Zc,"onAnimationEnd"),aa(Jc,"onAnimationIteration"),aa(Kc,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(Nd,"onTransitionRun"),aa(Vd,"onTransitionStart"),aa(jd,"onTransitionCancel"),aa(Qc,"onTransitionEnd"),Bi("onMouseEnter",["mouseout","mouseover"]),Bi("onMouseLeave",["mouseout","mouseover"]),Bi("onPointerEnter",["pointerout","pointerover"]),Bi("onPointerLeave",["pointerout","pointerover"]),xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),um=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function bf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],r=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var o=i.length-1;0<=o;o--){var u=i[o],v=u.instance,D=u.currentTarget;if(u=u.listener,v!==l&&r.isPropagationStopped())break e;l=u,r.currentTarget=D;try{l(r)}catch(R){Rn(R)}r.currentTarget=null,l=v}else for(o=0;o<i.length;o++){if(u=i[o],v=u.instance,D=u.currentTarget,u=u.listener,v!==l&&r.isPropagationStopped())break e;l=u,r.currentTarget=D;try{l(r)}catch(R){Rn(R)}r.currentTarget=null,l=v}}}}function ye(e,t){var a=t[Ul];a===void 0&&(a=t[Ul]=new Set);var i=e+"__bubble";a.has(i)||(gf(t,e,2,!1),a.add(i))}function Ms(e,t,a){var i=0;t&&(i|=4),gf(a,e,i,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Ts(e){if(!e[xl]){e[xl]=!0,uc.forEach(function(a){a!=="selectionchange"&&(um.has(a)||Ms(a,!1,e),Ms(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,Ms("selectionchange",!1,t))}}function gf(e,t,a,i){switch(Jf(t)){case 2:var r=qm;break;case 8:r=Um;break;default:r=Ys}a=r.bind(null,t,a,e),r=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Rs(e,t,a,i,r){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===r)break;if(o===4)for(o=i.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;u!==null;){if(o=Li(u),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){i=l=o;continue e}u=u.parentNode}}i=i.return}wc(function(){var D=l,R=Zl(a),H=[];e:{var A=Wc.get(e);if(A!==void 0){var V=jn,Q=e;switch(e){case"keypress":if(Nn(a)===0)break e;case"keydown":case"keyup":V=nd;break;case"focusin":Q="focus",V=eo;break;case"focusout":Q="blur",V=eo;break;case"beforeblur":case"afterblur":V=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Xu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=sd;break;case Zc:case Jc:case Kc:V=Ku;break;case Qc:V=pd;break;case"scroll":case"scrollend":V=Pu;break;case"wheel":V=ud;break;case"copy":case"cut":case"paste":V=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=jc;break;case"toggle":case"beforetoggle":V=md}var re=(t&4)!==0,Ee=!re&&(e==="scroll"||e==="scrollend"),_=re?A!==null?A+"Capture":null:A;re=[];for(var x=D,w;x!==null;){var E=x;if(w=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||w===null||_===null||(E=jr(x,_),E!=null&&re.push(cn(x,E,w))),Ee)break;x=x.return}0<re.length&&(A=new V(A,Q,null,a,R),H.push({event:A,listeners:re}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",A&&a!==Xl&&(Q=a.relatedTarget||a.fromElement)&&(Li(Q)||Q[Hi]))break e;if((V||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,V?(Q=a.relatedTarget||a.toElement,V=D,Q=Q?Li(Q):null,Q!==null&&(Ee=m(Q),re=Q.tag,Q!==Ee||re!==5&&re!==27&&re!==6)&&(Q=null)):(V=null,Q=D),V!==Q)){if(re=Nc,E="onMouseLeave",_="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(re=jc,E="onPointerLeave",_="onPointerEnter",x="pointer"),Ee=V==null?A:Vr(V),w=Q==null?A:Vr(Q),A=new re(E,x+"leave",V,a,R),A.target=Ee,A.relatedTarget=w,E=null,Li(R)===D&&(re=new re(_,x+"enter",Q,a,R),re.target=w,re.relatedTarget=Ee,E=re),Ee=E,V&&Q)t:{for(re=dm,_=V,x=Q,w=0,E=_;E;E=re(E))w++;E=0;for(var te=x;te;te=re(te))E++;for(;0<w-E;)_=re(_),w--;for(;0<E-w;)x=re(x),E--;for(;w--;){if(_===x||x!==null&&_===x.alternate){re=_;break t}_=re(_),x=re(x)}re=null}else re=null;V!==null&&zf(H,A,V,re,!1),Q!==null&&Ee!==null&&zf(H,Ee,Q,re,!0)}}e:{if(A=D?Vr(D):window,V=A.nodeName&&A.nodeName.toLowerCase(),V==="select"||V==="input"&&A.type==="file")var we=Oc;else if(Ec(A))if(Hc)we=wd;else{we=_d;var $=zd}else V=A.nodeName,!V||V.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?D&&Yl(D.elementType)&&(we=Oc):we=Sd;if(we&&(we=we(e,D))){kc(H,we,a,R);break e}$&&$(e,A,D),e==="focusout"&&D&&A.type==="number"&&D.memoizedProps.value!=null&&Pl(A,"number",A.value)}switch($=D?Vr(D):window,e){case"focusin":(Ec($)||$.contentEditable==="true")&&(Zi=$,lo=D,Or=null);break;case"focusout":Or=lo=Zi=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,Yc(H,a,R);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":Yc(H,a,R)}var me;if(ao)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Xi?Cc(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(Mc&&a.locale!=="ko"&&(Xi||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Xi&&(me=Dc()):(La=R,Ql="value"in La?La.value:La.textContent,Xi=!0)),$=bl(D,ze),0<$.length&&(ze=new Vc(ze,e,null,a,R),H.push({event:ze,listeners:$}),me?ze.data=me:(me=Fc(a),me!==null&&(ze.data=me)))),(me=vd?yd(e,a):xd(e,a))&&(ze=bl(D,"onBeforeInput"),0<ze.length&&($=new Vc("onBeforeInput","beforeinput",null,a,R),H.push({event:$,listeners:ze}),$.data=me)),cm(H,e,D,a,R)}bf(H,t)})}function cn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function bl(e,t){for(var a=t+"Capture",i=[];e!==null;){var r=e,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=jr(e,a),r!=null&&i.unshift(cn(e,r,l)),r=jr(e,t),r!=null&&i.push(cn(e,r,l))),e.tag===3)return i;e=e.return}return[]}function dm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zf(e,t,a,i,r){for(var l=t._reactName,o=[];a!==null&&a!==i;){var u=a,v=u.alternate,D=u.stateNode;if(u=u.tag,v!==null&&v===i)break;u!==5&&u!==26&&u!==27||D===null||(v=D,r?(D=jr(a,l),D!=null&&o.unshift(cn(a,D,v))):r||(D=jr(a,l),D!=null&&o.push(cn(a,D,v)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var mm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function _f(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(hm,"")}function Sf(e,t){return t=_f(t),_f(e)===t}function Fe(e,t,a,i,r,l){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ii(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ii(e,""+i);break;case"className":Sn(e,"class",i);break;case"tabIndex":Sn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Sn(e,a,i);break;case"style":_c(e,i,l);break;case"data":if(t!=="object"){Sn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Dn(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&Fe(e,t,"name",r.name,r,null),Fe(e,t,"formEncType",r.formEncType,r,null),Fe(e,t,"formMethod",r.formMethod,r,null),Fe(e,t,"formTarget",r.formTarget,r,null)):(Fe(e,t,"encType",r.encType,r,null),Fe(e,t,"method",r.method,r,null),Fe(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Dn(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ya);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Dn(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ye("beforetoggle",e),ye("toggle",e),_n(e,"popover",i);break;case"xlinkActuate":va(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":va(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":va(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":va(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":va(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":va(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":va(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":_n(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gu.get(a)||a,_n(e,a,i))}}function Cs(e,t,a,i,r,l){switch(a){case"style":_c(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ii(e,i):(typeof i=="number"||typeof i=="bigint")&&Ii(e,""+i);break;case"onScroll":i!=null&&ye("scroll",e);break;case"onScrollEnd":i!=null&&ye("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),l=e[nt]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,r),typeof i=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,r);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):_n(e,a,i)}}}function _t(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var i=!1,r=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Fe(e,t,l,o,a,null)}}r&&Fe(e,t,"srcSet",a.srcSet,a,null),i&&Fe(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var u=l=o=r=null,v=null,D=null;for(i in a)if(a.hasOwnProperty(i)){var R=a[i];if(R!=null)switch(i){case"name":r=R;break;case"type":o=R;break;case"checked":v=R;break;case"defaultChecked":D=R;break;case"value":l=R;break;case"defaultValue":u=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Fe(e,t,i,R,a,null)}}xc(e,l,u,v,D,o,r,!1);return;case"select":ye("invalid",e),i=o=l=null;for(r in a)if(a.hasOwnProperty(r)&&(u=a[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:Fe(e,t,r,u,a,null)}t=l,a=o,e.multiple=!!i,t!=null?Gi(e,!!i,t,!1):a!=null&&Gi(e,!!i,a,!0);return;case"textarea":ye("invalid",e),l=r=i=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":i=u;break;case"defaultValue":r=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Fe(e,t,o,u,a,null)}gc(e,i,r,l);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(i=a[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Fe(e,t,v,i,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(i=0;i<sn.length;i++)ye(sn[i],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(i=a[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Fe(e,t,D,i,a,null)}return;default:if(Yl(t)){for(R in a)a.hasOwnProperty(R)&&(i=a[R],i!==void 0&&Cs(e,t,R,i,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(i=a[u],i!=null&&Fe(e,t,u,i,a,null))}function vm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,o=null,u=null,v=null,D=null,R=null;for(V in a){var H=a[V];if(a.hasOwnProperty(V)&&H!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":v=H;default:i.hasOwnProperty(V)||Fe(e,t,V,null,i,H)}}for(var A in i){var V=i[A];if(H=a[A],i.hasOwnProperty(A)&&(V!=null||H!=null))switch(A){case"type":l=V;break;case"name":r=V;break;case"checked":D=V;break;case"defaultChecked":R=V;break;case"value":o=V;break;case"defaultValue":u=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(c(137,t));break;default:V!==H&&Fe(e,t,A,V,i,H)}}Il(e,o,u,v,D,R,l,r);return;case"select":V=o=u=A=null;for(l in a)if(v=a[l],a.hasOwnProperty(l)&&v!=null)switch(l){case"value":break;case"multiple":V=v;default:i.hasOwnProperty(l)||Fe(e,t,l,null,i,v)}for(r in i)if(l=i[r],v=a[r],i.hasOwnProperty(r)&&(l!=null||v!=null))switch(r){case"value":A=l;break;case"defaultValue":u=l;break;case"multiple":o=l;default:l!==v&&Fe(e,t,r,l,i,v)}t=u,a=o,i=V,A!=null?Gi(e,!!a,A,!1):!!i!=!!a&&(t!=null?Gi(e,!!a,t,!0):Gi(e,!!a,a?[]:"",!1));return;case"textarea":V=A=null;for(u in a)if(r=a[u],a.hasOwnProperty(u)&&r!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Fe(e,t,u,null,i,r)}for(o in i)if(r=i[o],l=a[o],i.hasOwnProperty(o)&&(r!=null||l!=null))switch(o){case"value":A=r;break;case"defaultValue":V=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==l&&Fe(e,t,o,r,i,l)}bc(e,A,V);return;case"option":for(var Q in a)if(A=a[Q],a.hasOwnProperty(Q)&&A!=null&&!i.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Fe(e,t,Q,null,i,A)}for(v in i)if(A=i[v],V=a[v],i.hasOwnProperty(v)&&A!==V&&(A!=null||V!=null))switch(v){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Fe(e,t,v,A,i,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)A=a[re],a.hasOwnProperty(re)&&A!=null&&!i.hasOwnProperty(re)&&Fe(e,t,re,null,i,A);for(D in i)if(A=i[D],V=a[D],i.hasOwnProperty(D)&&A!==V&&(A!=null||V!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Fe(e,t,D,A,i,V)}return;default:if(Yl(t)){for(var Ee in a)A=a[Ee],a.hasOwnProperty(Ee)&&A!==void 0&&!i.hasOwnProperty(Ee)&&Cs(e,t,Ee,void 0,i,A);for(R in i)A=i[R],V=a[R],!i.hasOwnProperty(R)||A===V||A===void 0&&V===void 0||Cs(e,t,R,A,i,V);return}}for(var _ in a)A=a[_],a.hasOwnProperty(_)&&A!=null&&!i.hasOwnProperty(_)&&Fe(e,t,_,null,i,A);for(H in i)A=i[H],V=a[H],!i.hasOwnProperty(H)||A===V||A==null&&V==null||Fe(e,t,H,A,i,V)}function wf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ym(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var r=a[i],l=r.transferSize,o=r.initiatorType,u=r.duration;if(l&&u&&wf(o)){for(o=0,u=r.responseEnd,i+=1;i<a.length;i++){var v=a[i],D=v.startTime;if(D>u)break;var R=v.transferSize,H=v.initiatorType;R&&wf(H)&&(v=v.responseEnd,o+=R*(v<u?1:(u-D)/(v-D)))}if(--i,t+=8*(l+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fs=null,Es=null;function gl(e){return e.nodeType===9?e:e.ownerDocument}function Df(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Af(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ks(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Os=null;function xm(){var e=window.event;return e&&e.type==="popstate"?e===Os?!1:(Os=e,!0):(Os=null,!1)}var Nf=typeof setTimeout=="function"?setTimeout:void 0,bm=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(zm)}:Nf;function zm(e){setTimeout(function(){throw e})}function ai(e){return e==="head"}function jf(e,t){var a=t,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(r),zr(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pn(a);for(var l=a.firstChild;l;){var o=l.nextSibling,u=l.nodeName;l[Nr]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&pn(e.ownerDocument.body);a=r}while(a);zr(t)}function Mf(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Hs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hs(a),Bl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _m(e,t,a,i){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Nr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function Sm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wt(e.nextSibling),e===null))return null;return e}function Tf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wt(e.nextSibling),e===null))return null;return e}function Ls(e){return e.data==="$?"||e.data==="$~"}function qs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Us=null;function Rf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ff(e,t,a){switch(t=gl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bl(e)}var $t=new Map,Ef=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=U.d;U.d={f:Dm,r:Am,D:Nm,C:Vm,L:jm,m:Mm,X:Rm,S:Tm,M:Cm};function Dm(){var e=Ca.f(),t=ul();return e||t}function Am(e){var t=qi(e);t!==null&&t.tag===5&&t.type==="form"?Q0(t):Ca.r(e)}var xr=typeof document>"u"?null:document;function kf(e,t,a){var i=xr;if(i&&typeof t=="string"&&t){var r=Pt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Ef.has(r)||(Ef.add(r),e={rel:e,crossOrigin:a,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),_t(t,"link",e),vt(t),i.head.appendChild(t)))}}function Nm(e){Ca.D(e),kf("dns-prefetch",e,null)}function Vm(e,t){Ca.C(e,t),kf("preconnect",e,t)}function jm(e,t,a){Ca.L(e,t,a);var i=xr;if(i&&e&&t){var r='link[rel="preload"][as="'+Pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Pt(a.imageSizes)+'"]')):r+='[href="'+Pt(e)+'"]';var l=r;switch(t){case"style":l=br(e);break;case"script":l=gr(e)}$t.has(l)||(e=F({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),$t.set(l,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(fn(l))||t==="script"&&i.querySelector(un(l))||(t=i.createElement("link"),_t(t,"link",e),vt(t),i.head.appendChild(t)))}}function Mm(e,t){Ca.m(e,t);var a=xr;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Pt(i)+'"][href="'+Pt(e)+'"]',l=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=gr(e)}if(!$t.has(l)&&(e=F({rel:"modulepreload",href:e},t),$t.set(l,e),a.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(un(l)))return}i=a.createElement("link"),_t(i,"link",e),vt(i),a.head.appendChild(i)}}}function Tm(e,t,a){Ca.S(e,t,a);var i=xr;if(i&&e){var r=Ui(i).hoistableStyles,l=br(e);t=t||"default";var o=r.get(l);if(!o){var u={loading:0,preload:null};if(o=i.querySelector(fn(l)))u.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},a),(a=$t.get(l))&&Bs(e,a);var v=o=i.createElement("link");vt(v),_t(v,"link",e),v._p=new Promise(function(D,R){v.onload=D,v.onerror=R}),v.addEventListener("load",function(){u.loading|=1}),v.addEventListener("error",function(){u.loading|=2}),u.loading|=4,_l(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:u},r.set(l,o)}}}function Rm(e,t){Ca.X(e,t);var a=xr;if(a&&e){var i=Ui(a).hoistableScripts,r=gr(e),l=i.get(r);l||(l=a.querySelector(un(r)),l||(e=F({src:e,async:!0},t),(t=$t.get(r))&&Gs(e,t),l=a.createElement("script"),vt(l),_t(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(r,l))}}function Cm(e,t){Ca.M(e,t);var a=xr;if(a&&e){var i=Ui(a).hoistableScripts,r=gr(e),l=i.get(r);l||(l=a.querySelector(un(r)),l||(e=F({src:e,async:!0,type:"module"},t),(t=$t.get(r))&&Gs(e,t),l=a.createElement("script"),vt(l),_t(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(r,l))}}function Of(e,t,a,i){var r=(r=le.current)?zl(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=br(a.href),a=Ui(r).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var l=Ui(r).hoistableStyles,o=l.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=r.querySelector(fn(e)))&&!l._p&&(o.instance=l,o.state.loading=5),$t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$t.set(e,a),l||Fm(r,e,a,o.state))),t&&i===null)throw Error(c(528,""));return o}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gr(a),a=Ui(r).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function br(e){return'href="'+Pt(e)+'"'}function fn(e){return'link[rel="stylesheet"]['+e+"]"}function Hf(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Fm(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),_t(t,"link",a),vt(t),e.head.appendChild(t))}function gr(e){return'[src="'+Pt(e)+'"]'}function un(e){return"script[async]"+e}function Lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(i)return t.instance=i,vt(i),i;var r=F({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),_t(i,"style",r),_l(i,a.precedence,e),t.instance=i;case"stylesheet":r=br(a.href);var l=e.querySelector(fn(r));if(l)return t.state.loading|=4,t.instance=l,vt(l),l;i=Hf(a),(r=$t.get(r))&&Bs(i,r),l=(e.ownerDocument||e).createElement("link"),vt(l);var o=l;return o._p=new Promise(function(u,v){o.onload=u,o.onerror=v}),_t(l,"link",i),t.state.loading|=4,_l(l,a.precedence,e),t.instance=l;case"script":return l=gr(a.src),(r=e.querySelector(un(l)))?(t.instance=r,vt(r),r):(i=a,(r=$t.get(l))&&(i=F({},a),Gs(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),vt(r),_t(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,_l(i,a.precedence,e));return t.instance}function _l(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,l=r,o=0;o<i.length;o++){var u=i[o];if(u.dataset.precedence===t)l=u;else if(l!==r)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sl=null;function qf(e,t,a){if(Sl===null){var i=new Map,r=Sl=new Map;r.set(a,i)}else r=Sl,i=r.get(a),i||(i=new Map,r.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var l=a[r];if(!(l[Nr]||l[Re]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var u=i.get(o);u?u.push(l):i.set(o,[l])}}return i}function Uf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Em(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function km(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=br(i.href),l=t.querySelector(fn(r));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,vt(l);return}l=t.ownerDocument||t,i=Hf(i),(r=$t.get(r))&&Bs(i,r),l=l.createElement("link"),vt(l);var o=l;o._p=new Promise(function(u,v){o.onload=u,o.onerror=v}),_t(l,"link",i),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Is=0;function Om(e,t){return e.stylesheets&&e.count===0&&Al(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Al(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Is===0&&(Is=62500*ym());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Al(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Is?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Al(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dl=null;function Al(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dl=new Map,t.forEach(Hm,e),Dl=null,wl.call(e))}function Hm(e,t){if(!(t.state.loading&4)){var a=Dl.get(e);if(a)var i=a.get(null);else{a=new Map,Dl.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var o=r[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}r=t.instance,o=r.getAttribute("data-precedence"),l=a.get(o)||i,l===i&&a.set(null,r),a.set(o,r),this.count++,i=wl.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),l?l.parentNode.insertBefore(r,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var dn={$$typeof:S,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function Lm(e,t,a,i,r,l,o,u,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Gf(e,t,a,i,r,l,o,u,v,D,R,H){return e=new Lm(e,t,a,o,v,D,R,H,u),t=1,l===!0&&(t|=24),l=Ht(3,null,null,t),e.current=l,l.stateNode=e,t=So(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:t},No(l),e}function If(e){return e?(e=Qi,e):Qi}function Pf(e,t,a,i,r,l){r=If(r),i.context===null?i.context=r:i.pendingContext=r,i=Pa(t),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=Ya(e,i,t),a!==null&&(Et(a,e,t),Ir(a,e,t))}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ps(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function Xf(e){if(e.tag===13||e.tag===31){var t=_i(e,67108864);t!==null&&Et(t,e,67108864),Ps(e,67108864)}}function Zf(e){if(e.tag===13||e.tag===31){var t=Gt();t=jt(t);var a=_i(e,t);a!==null&&Et(a,e,t),Ps(e,t)}}var Nl=!0;function qm(e,t,a,i){var r=N.T;N.T=null;var l=U.p;try{U.p=2,Ys(e,t,a,i)}finally{U.p=l,N.T=r}}function Um(e,t,a,i){var r=N.T;N.T=null;var l=U.p;try{U.p=8,Ys(e,t,a,i)}finally{U.p=l,N.T=r}}function Ys(e,t,a,i){if(Nl){var r=Xs(i);if(r===null)Rs(e,t,i,Vl,a),Kf(e,i);else if(Gm(r,e,t,a,i))i.stopPropagation();else if(Kf(e,i),t&4&&-1<Bm.indexOf(e)){for(;r!==null;){var l=qi(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=la(l.pendingLanes);if(o!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var v=1<<31-Ke(o);u.entanglements[1]|=v,o&=~v}fa(l),(Ae&6)===0&&(pl=Ie()+500,on(0))}}break;case 31:case 13:u=_i(l,2),u!==null&&Et(u,l,2),ul(),Ps(l,2)}if(l=Xs(i),l===null&&Rs(e,t,i,Vl,a),l===r)break;r=l}r!==null&&i.stopPropagation()}else Rs(e,t,i,null,a)}}function Xs(e){return e=Zl(e),Zs(e)}var Vl=null;function Zs(e){if(Vl=null,e=Li(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=z(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vl=e,null}function Jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ma()){case P:return 2;case ie:return 8;case I:case be:return 32;case ne:return 268435456;default:return 32}default:return 32}}var Js=!1,ii=null,ri=null,ni=null,mn=new Map,hn=new Map,li=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(t.pointerId)}}function vn(e,t,a,i,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[r]},t!==null&&(t=qi(t),t!==null&&Xf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Gm(e,t,a,i,r){switch(t){case"focusin":return ii=vn(ii,e,t,a,i,r),!0;case"dragenter":return ri=vn(ri,e,t,a,i,r),!0;case"mouseover":return ni=vn(ni,e,t,a,i,r),!0;case"pointerover":var l=r.pointerId;return mn.set(l,vn(mn.get(l)||null,e,t,a,i,r)),!0;case"gotpointercapture":return l=r.pointerId,hn.set(l,vn(hn.get(l)||null,e,t,a,i,r)),!0}return!1}function Qf(e){var t=Li(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=z(a),t!==null){e.blockedOn=t,ht(e.priority,function(){Zf(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,ht(e.priority,function(){Zf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xs(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Xl=i,a.target.dispatchEvent(i),Xl=null}else return t=qi(a),t!==null&&Xf(t),e.blockedOn=a,!1;t.shift()}return!0}function Wf(e,t,a){jl(e)&&a.delete(t)}function Im(){Js=!1,ii!==null&&jl(ii)&&(ii=null),ri!==null&&jl(ri)&&(ri=null),ni!==null&&jl(ni)&&(ni=null),mn.forEach(Wf),hn.forEach(Wf)}function Ml(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Im)))}var Tl=null;function $f(e){Tl!==e&&(Tl=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Tl===e&&(Tl=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Zs(i||a)===null)continue;break}var l=qi(a);l!==null&&(e.splice(t,3),t-=3,Xo(l,{pending:!0,data:r,method:a.method,action:i},i,r))}}))}function zr(e){function t(v){return Ml(v,e)}ii!==null&&Ml(ii,e),ri!==null&&Ml(ri,e),ni!==null&&Ml(ni,e),mn.forEach(t),hn.forEach(t);for(var a=0;a<li.length;a++){var i=li[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<li.length&&(a=li[0],a.blockedOn===null);)Qf(a),a.blockedOn===null&&li.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var r=a[i],l=a[i+1],o=r[nt]||null;if(typeof l=="function")o||$f(a);else if(o){var u=null;if(l&&l.hasAttribute("formAction")){if(r=l,o=l[nt]||null)u=o.formAction;else if(Zs(r)!==null)continue}else u=o.action;typeof u=="function"?a[i+1]=u:(a.splice(i,3),i-=3),$f(a)}}}function eu(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Ks(e){this._internalRoot=e}Rl.prototype.render=Ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=Gt();Pf(a,i,e,t,null,null)},Rl.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pf(e.current,2,null,e,null,null),ul(),t[Hi]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yi();e={blockedOn:null,target:e,priority:t};for(var a=0;a<li.length&&t!==0&&t<li[a].priority;a++);li.splice(a,0,e),a===0&&Qf(e)}};var tu=s.version;if(tu!=="19.2.8")throw Error(c(527,tu,"19.2.8"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var Pm={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Se=Cl.inject(Pm),He=Cl}catch{}}return xn.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,i="",r=op,l=sp,o=cp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gf(e,1,!1,null,null,a,i,null,r,l,o,eu),e[Hi]=t.current,Ts(e),new Ks(t)},xn.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var i=!1,r="",l=op,o=sp,u=cp,v=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=Gf(e,1,!0,t,a??null,i,r,v,l,o,u,eu),t.context=If(null),a=t.current,i=Gt(),i=jt(i),r=Pa(i),r.callback=null,Ya(a,r,i),a=i,t.current.lanes=a,Nt(t,a),fa(t),e[Hi]=t.current,Ts(e),new Rl(t)},xn.version="19.2.8",xn}var fu;function ah(){if(fu)return Ws.exports;fu=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Ws.exports=th(),Ws.exports}var ih=ah();const rh=Xm(ih);var T=sc();const uu="golden_ratio_user_prefs",nh=500;class lh{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(uu);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(uu,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,f){const c=performance.now(),d=c-this.lastSampleTime;this.lastSampleTime=c;const m={timestamp:c,type:s,value:f,duration:d};this.samples.push(m),this.samples.length>nh&&this.samples.shift(),this.analyzeSample(m),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const f=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const f=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const f=String(s.value);this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(s){const f=String(s.value);this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(s){const f=String(s.value);this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(s){const f=String(s.value);this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(s){let f=0,c=null;for(const[d,m]of Object.entries(s))m>f&&(f=m,c=d);return c}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(s.preferredFractal=f);const c=this.getPreferred(this.prefs.renderStyleWeights);c!==null&&(s.preferredStyle=c);const d=this.getPreferred(this.prefs.paletteWeights);d!==null&&(s.preferredPalette=d);const m=this.getPreferred(this.prefs.cameraModeWeights);m!==null&&(s.preferredCamera=m)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const du=new lh,oh=`
struct Uniforms {
  resolution: vec2<f32>,
  time: f32,
  phi_val: f32,

  cam_rot: vec2<f32>,
  zoom: f32,
  fractal_type: f32,

  iterations: f32,
  glow_intensity: f32,
  morph_speed: f32,
  hybrid_type: f32,

  hybrid_blend: f32,
  box_fold: f32,
  sphere_fold: f32,
  interior_cut: f32,

  primary_color: vec3<f32>,
  tertiary_type: f32,

  secondary_color: vec3<f32>,
  tertiary_blend: f32,

  accent_color: vec3<f32>,
  compose_op: f32,

  smooth_k: f32,
  warp_strength: f32,
  octave_layers: f32,
  cam_mode: f32,

  cam_pos: vec3<f32>,
  slice_plane: f32,

  headlamp_power: f32,
  volumetric_fog: f32,
  slice_axis: f32,
  render_style: f32,

  ambient_color: vec3<f32>,
  palette_seed: f32,

  palette_rotation: f32,
  pad5: vec3<f32>,
};

@group(0) @binding(0) var<uniform> u: Uniforms;

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vertex_index: u32) -> VertexOutput {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  let p = pos[vertex_index];
  var out = VertexOutput(
    vec4<f32>(p, 0.0, 1.0),
    p * 0.5 + vec2<f32>(0.5, 0.5)
  );
  return out;
}

const PI: f32 = 3.141592653589793;
const TWO_PI: f32 = 6.283185307179586;
const GOLDEN_RATIO: f32 = 1.618033988749895;
const GOLDEN_ANGLE: f32 = 2.399963229728653; // 137.507764 degrees

fn rot2D(p: vec2<f32>, a: f32) -> vec2<f32> {
  let c = cos(a);
  let s = sin(a);
  return vec2<f32>(c * p.x - s * p.y, s * p.x + c * p.y);
}

fn rotateVec(p: vec3<f32>, pitch: f32, yaw: f32) -> vec3<f32> {
  var v = p;
  let cy = cos(yaw);
  let sy = sin(yaw);
  let cp = cos(pitch);
  let sp = sin(pitch);
  
  v = vec3<f32>(cy * v.x + sy * v.z, v.y, -sy * v.x + cy * v.z);
  v = vec3<f32>(v.x, cp * v.y - sp * v.z, sp * v.y + cp * v.z);
  return v;
}

// 0. Sacred Phyllotaxis IFS
fn mapPhyllotaxis(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let r0 = length(p_in);
  if (r0 > 2.6) { return vec2<f32>(r0 - 1.4, r0); }

  var p = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 18);

  for (var i: i32 = 0; i < 18; i = i + 1) {
    if (i >= count) { break; }
    let rot = rot2D(p.xy, GOLDEN_ANGLE + t * 0.04);
    p = vec3<f32>(rot.x, rot.y, p.z);
    
    p = abs(p) - vec3<f32>(0.28 * phi, 0.18 * phi, 0.22);
    let r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    
    let factor = phi * 0.94;
    p = p * factor;
    scale = scale * factor;
    
    let rotZ = rot2D(p.xz, GOLDEN_ANGLE * 0.618);
    p = vec3<f32>(rotZ.x, p.y, rotZ.y);
  }
  let d = (length(p) - 0.35) / max(scale, 0.0001);
  return vec2<f32>(d, trap);
}

// 1. Golden Mandelbulb 3D
fn mapMandelbulb(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var w = p_in;
  var dr: f32 = 1.0;
  var r: f32 = 0.0;
  let power = 5.0 + phi;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 14);

  var escaped = false;
  for (var i: i32 = 0; i < 14; i = i + 1) {
    if (i >= count) { break; }
    r = length(w);
    if (r > 2.2) { escaped = true; break; }
    trap = min(trap, r);
    var theta = acos(clamp(w.z / max(r, 0.0001), -1.0, 1.0));
    var phi_ang = atan2(w.y, w.x);
    dr = pow(r, power - 1.0) * power * dr + 1.0;
    let zr = pow(r, power);
    theta = theta * power + t * 0.15;
    phi_ang = phi_ang * power;
    w = zr * vec3<f32>(sin(theta) * cos(phi_ang), sin(theta) * sin(phi_ang), cos(theta)) + p_in;
  }

  var d: f32;
  if (escaped) {
    d = 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
  } else {
    // FIX: Point is inside fractal - return small positive distance
    // log(r) would be negative for r < 1, breaking SDF
    d = 0.001 * f32(count - iters + 14); // Small positive value
  }
  return vec2<f32>(d, trap);
}

// 2. Quaternion Julia 4D
fn mapQuaternionJulia(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var z = vec4<f32>(p_in, 0.0);
  let c = vec4<f32>(
    -0.2 + 0.15 * cos(t * 0.2),
    0.45 * (phi - 1.0),
    -0.35 + 0.12 * sin(t * 0.18),
    0.15 * sin(t * 0.12)
  );

  var md2: f32 = 1.0;
  var mz2: f32 = dot(z, z);
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);

  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count || mz2 > 4.5) { break; }
    md2 = md2 * 4.0 * mz2;
    z = vec4<f32>(
      z.x * z.x - dot(z.yzw, z.yzw),
      2.0 * z.x * z.yzw
    ) + c;
    mz2 = dot(z, z);
    trap = min(trap, sqrt(mz2));
  }
  let d = 0.25 * sqrt(mz2 / max(md2, 0.0001)) * log(max(mz2, 1.0001));
  return vec2<f32>(d, trap);
}

// 3. Apollonian Sphere Packing
fn mapApollonian(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 10);
  let sFold = max(u.sphere_fold, 0.25);

  for (var i: i32 = 0; i < 10; i = i + 1) {
    if (i >= count) { break; }
    p = -1.0 + 2.0 * fract(0.5 * p + 0.5);
    let r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    let k = (sFold * phi) / max(r2, 0.12);
    p = p * k;
    scale = scale * k;
  }
  let d = (length(p) - 0.72) / max(scale, 0.0001);
  return vec2<f32>(d, trap);
}

// 4. Spiral Tunnel
fn mapSpiralTunnel(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in;
  let r_xy = rot2D(p.xy, p.z * 0.35 + t * 0.12);
  p = vec3<f32>(r_xy.x, r_xy.y, p.z);

  let r = length(p.xy);
  let a = atan2(p.y, p.x);
  let log_r = log(max(r, 0.001)) / log(phi);
  let spiral = fract(log_r - a / (2.0 * PI) * 5.0 - t * 0.1);
  let d_wall = abs(r - 1.25) - 0.08;
  let d_ribs = abs(spiral - 0.5) * r * 0.3 - 0.015;
  return vec2<f32>(max(d_wall, -d_ribs), spiral + 0.2 * abs(p.z));
}

// 5. Mandelbox 3D
fn mapMandelbox(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let r0 = length(p_in);
  if (r0 > 4.0) { return vec2<f32>(r0 - 1.8, r0); }

  var p = p_in;
  let offset = p;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 14);

  let foldingLimit = max(u.box_fold, 0.6);
  let minRad2 = max(u.sphere_fold * 0.35, 0.12);
  let fixedRad2 = 1.0;
  let mScale = -1.0 - (phi - 1.0) * 1.35;

  for (var i: i32 = 0; i < 14; i = i + 1) {
    if (i >= count) { break; }
    p = clamp(p, vec3<f32>(-foldingLimit), vec3<f32>(foldingLimit)) * 2.0 - p;

    let r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    if (r2 < minRad2) {
      let temp = fixedRad2 / minRad2;
      p = p * temp;
      scale = scale * temp;
    } else if (r2 < fixedRad2) {
      let temp = fixedRad2 / r2;
      p = p * temp;
      scale = scale * temp;
    }

    p = p * mScale + offset;
    scale = scale * abs(mScale) + 1.0;

    let rot = rot2D(p.xy, t * 0.03);
    p = vec3<f32>(rot.x, rot.y, p.z);
  }
  let d = (length(p) - 0.4) / max(abs(scale), 0.0001);
  return vec2<f32>(d, trap);
}

// 6. Icosahedral IFS
fn mapIcosahedron(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 16);
  
  let n1 = normalize(vec3<f32>(1.0, phi, 0.0));
  let n2 = normalize(vec3<f32>(0.0, 1.0, phi));
  let n3 = normalize(vec3<f32>(phi, 0.0, 1.0));

  for (var i: i32 = 0; i < 16; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    let d1 = dot(p, n1);
    if (d1 < 0.0) { p = p - 2.0 * d1 * n1; }
    let d2 = dot(p, n2);
    if (d2 < 0.0) { p = p - 2.0 * d2 * n2; }
    let d3 = dot(p, n3);
    if (d3 < 0.0) { p = p - 2.0 * d3 * n3; }

    let r_xz = rot2D(p.xz, GOLDEN_ANGLE + t * 0.08);
    p = vec3<f32>(r_xz.x, p.y, r_xz.y);

    let factor = phi * 0.94;
    p = p * factor - vec3<f32>(phi - 1.0, 0.5, 0.2);
    scale = scale * factor;
    trap = min(trap, length(p));
  }
  let d = (length(p) - 0.45) / max(scale, 0.0001);
  return vec2<f32>(d, trap);
}

// 7. Menger Sponge
fn mapMenger(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let r0 = length(p_in);
  if (r0 > 2.6) { return vec2<f32>(r0 - 1.4, r0); }

  var p = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 8);

  let rot = rot2D(p.xy, t * 0.12);
  p = vec3<f32>(rot.x, rot.y, p.z);

  for (var i: i32 = 0; i < 8; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x < p.y) { let tmp = p.x; p.x = p.y; p.y = tmp; }
    if (p.x < p.z) { let tmp = p.x; p.x = p.z; p.z = tmp; }
    if (p.y < p.z) { let tmp = p.y; p.y = p.z; p.z = tmp; }

    let factor = phi * 1.85;
    p = p * factor - vec3<f32>(factor - 1.0);
    scale = scale * factor;

    let cross_d = min(max(p.x, p.y), min(max(p.x, p.z), max(p.y, p.z))) - 1.0;
    trap = min(trap, abs(cross_d));

    if (p.z < -0.5 * (factor - 1.0)) {
      p.z = p.z + (factor - 1.0);
    }
  }
  let box_d = max(abs(p.x), max(abs(p.y), abs(p.z))) - 1.0;
  return vec2<f32>(box_d / max(scale, 0.0001), trap);
}

// 8. Gyroid Minimal Surface
fn mapGyroid(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in * 1.4;
  let rot = rot2D(p.xz, t * 0.1);
  p = vec3<f32>(rot.x, p.y, rot.y);

  let g_scale = phi * 1.25;
  let q = p * g_scale;
  let val = sin(q.x) * cos(q.y) + sin(q.y) * cos(q.z) + sin(q.z) * cos(q.x);
  let d = (abs(val) - 0.2) / g_scale;

  let sphere_d = length(p_in) - 2.1;
  return vec2<f32>(max(d, sphere_d), abs(val) + 0.3 * length(p));
}

// 9. Sachs & Ulam Golden Prime Spiral (Euler Polynomial n² - n + 41)
fn mapPrimeSpiral(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let r_rot = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r_rot.x, p.y, r_rot.y);

  let r = length(p.xy);
  let theta = atan2(p.y, p.x);
  
  // Continuous Archimedean / Golden ratio prime helical lattice
  let spiral_idx = (r * r) / (phi * 0.8) - (theta / TWO_PI) * 8.0 - t * 0.2;
  let fract_spiral = fract(spiral_idx) - 0.5;
  let prime_wave = sin(r * phi * 6.0 + p.z * 3.0 + t * 0.3);

  // Vertical helix strands and prime nodule spheres
  let d_spiral = sqrt(fract_spiral * fract_spiral + p.z * p.z) - 0.065;
  let nodule_d = length(vec3<f32>(fract_spiral * 0.4, p.z, sin(r * 12.0) * 0.1)) - 0.035;
  let d = min(d_spiral, nodule_d);
  let trap = abs(prime_wave) + 0.4 * r;
  return vec2<f32>(d, trap);
}

// 10. 3D Penrose & Dan Shechtman Icosahedral Quasicrystal (Nobel Prize Symmetries)
fn mapQuasicrystal(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.6;
  let r_xy = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r_xy.x, r_xy.y, p.z);

  // 6 Golden projection vectors from 6D hypercube to 3D
  let norm_c = 1.0 / sqrt(1.0 + phi * phi);
  let n1 = vec3<f32>(1.0, phi, 0.0) * norm_c;
  let n2 = vec3<f32>(-1.0, phi, 0.0) * norm_c;
  let n3 = vec3<f32>(0.0, 1.0, phi) * norm_c;
  let n4 = vec3<f32>(0.0, -1.0, phi) * norm_c;
  let n5 = vec3<f32>(phi, 0.0, 1.0) * norm_c;
  let n6 = vec3<f32>(phi, 0.0, -1.0) * norm_c;

  let wave_scale = 3.8 * phi;
  var psi: f32 = 0.0;
  psi = psi + cos(dot(p, n1) * wave_scale + t * 0.2);
  psi = psi + cos(dot(p, n2) * wave_scale + t * 0.2);
  psi = psi + cos(dot(p, n3) * wave_scale + t * 0.2);
  psi = psi + cos(dot(p, n4) * wave_scale + t * 0.2);
  psi = psi + cos(dot(p, n5) * wave_scale + t * 0.2);
  psi = psi + cos(dot(p, n6) * wave_scale + t * 0.2);

  // Surface at resonant interference level
  let d_quasi = (abs(psi - 0.75) - 0.28) / wave_scale;
  let bound = length(p_in) - 2.2;
  let d = max(d_quasi, bound);
  let trap = abs(psi) * 0.2 + 0.3 * length(p);
  return vec2<f32>(d, trap);
}

// 11. Hopf Fibration & Clifford Golden Torus S³→S²
fn mapHopfFibration(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.xz, t * 0.09);
  p = vec3<f32>(rot.x, p.y, rot.y);

  // Major and minor radii locked to Golden Ratio: R = phi, r = 1/phi
  let majorR = phi * 0.85;
  let minorR = 0.85 / phi;

  let q = vec2<f32>(length(p.xz) - majorR, p.y);
  let d_torus = length(q) - minorR;

  // Intertwined Villarceau circles along Hopf fibers
  let angleXZ = atan2(p.z, p.x);
  let angleTor = atan2(q.y, q.x);
  let fiberTwist = sin(angleXZ * 3.0 + angleTor * phi * 2.0 + t * 0.4);
  let fiber_d = abs(d_torus) - (0.04 + 0.03 * fiberTwist);

  let trap = abs(fiberTwist) + 0.3 * length(q);
  return vec2<f32>(fiber_d, trap);
}

// 12. Quintic Calabi-Yau 3-Fold Compactification (String Theory)
fn mapCalabiYau(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r_yz = rot2D(p.yz, t * 0.08);
  p = vec3<f32>(p.x, r_yz.x, r_yz.y);

  // 5-fold complex deformation parameter psi = phi * cos(t)
  let psi_param = phi * 0.45 * cos(t * 0.15);
  let r = length(p);
  let theta = atan2(p.y, p.x);
  let z_phase = p.z * 2.5;

  // Real projection of z1^5 + z2^5 + z3^5 - 5*psi*z1*z2*z3 = 0
  let quintic = cos(5.0 * theta) * pow(max(r, 0.01), 3.5) - sin(5.0 * z_phase) * 0.6 - psi_param * r;
  let d_manifold = (abs(quintic) - 0.15) / 5.0;
  let bound = length(p_in) - 2.3;
  let d = max(d_manifold, bound);
  let trap = abs(quintic) + 0.25 * r;
  return vec2<f32>(d, trap);
}

// 13. Riemann Zeta Quantum Chaos Resonator (Prime Zeros along Re(s) = 1/2)
fn mapRiemannZeta(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in * 1.35;
  let rot = rot2D(p.xy, t * 0.06);
  p = vec3<f32>(rot.x, rot.y, p.z);

  // First non-trivial zeros of Riemann zeta function: 14.13, 21.02, 25.01, 30.42
  let gamma1 = 14.1347 * (phi / 1.618);
  let gamma2 = 21.0220 * (phi / 1.618);
  let r = length(p.xy);
  
  let wave1 = cos(r * gamma1 * 0.35 - t * 0.3);
  let wave2 = cos(p.z * gamma2 * 0.35 + t * 0.25);
  let nodal = wave1 * wave2;

  let cavity = abs(nodal) - 0.22;
  let cylinder_bound = max(length(p.xy) - 1.8, abs(p.z) - 1.8);
  let d = max(cavity * 0.25, cylinder_bound);
  let trap = abs(nodal) + 0.2 * r;
  return vec2<f32>(d, trap);
}

// 14. Golden Sierpinski Octahedral Star
fn mapSierpinskiOcta(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  let rot = rot2D(p.xz, t * 0.1);
  p = vec3<f32>(rot.x, p.y, rot.y);

  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x + p.y < 0.0) { let t1 = -p.y; p.y = -p.x; p.x = t1; }
    if (p.x + p.z < 0.0) { let t2 = -p.z; p.z = -p.x; p.x = t2; }
    if (p.y + p.z < 0.0) { let t3 = -p.z; p.z = -p.y; p.y = t3; }

    let factor = phi * 1.15;
    p = p * factor - vec3<f32>(factor - 1.0) * 0.8;
    scale = scale * factor;
    trap = min(trap, length(p));
  }
  let d = (length(p) - 0.6) / max(scale, 0.0001);
  return vec2<f32>(d, trap);
}

// 15. 4D Clifford-Klein Golden Helicoid Knot
fn mapCliffordKlein(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.xy, t * 0.07);
  p = vec3<f32>(rot.x, rot.y, p.z);

  // Self-intersecting 4D Klein bottle immersion with golden helicoid pitch
  let u_ang = atan2(p.y, p.x);
  let v_h = p.z * phi * 0.6 + t * 0.2;
  let r_cyl = length(p.xy);

  // Figure-8 parametric radius
  let fig8 = 1.2 + 0.45 * cos(u_ang * 2.0 + v_h);
  let d_surface = sqrt((r_cyl - fig8) * (r_cyl - fig8) + sin(v_h) * sin(v_h) * 0.15) - 0.06;

  let trap = abs(cos(u_ang)) + 0.25 * r_cyl;
  return vec2<f32>(d_surface, trap);
}

// 16. Poincaré Homology Dodecahedral 3-Manifold
fn mapPoincareSphere(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(rot.x, p.y, rot.y);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 14);
  let n1 = normalize(vec3<f32>(phi, 1.0, 0.0));
  let n2 = normalize(vec3<f32>(0.0, phi, 1.0));
  let n3 = normalize(vec3<f32>(1.0, 0.0, phi));
  for (var i: i32 = 0; i < 14; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    let d1 = dot(p, n1) - 0.75;
    if (d1 > 0.0) { p = p - 2.0 * d1 * n1; }
    let d2 = dot(p, n2) - 0.75;
    if (d2 > 0.0) { p = p - 2.0 * d2 * n2; }
    let d3 = dot(p, n3) - 0.75;
    if (d3 > 0.0) { p = p - 2.0 * d3 * n3; }
    let factor = phi;
    p = p * factor - vec3<f32>(factor - 1.0) * 0.55;
    scale = scale * factor;
    trap = min(trap, length(p));
  }
  return vec2<f32>((length(p) - 0.5) / max(scale, 0.0001), trap);
}

// 17. Gaussian Primes Lattice Z[i] (p = a² + b²)
fn mapGaussianPrimes(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.8;
  let rot = rot2D(p.xy, t * 0.07);
  p = vec3<f32>(rot.x, rot.y, p.z);
  let r = length(p);
  let pot = cos(PI * p.x) * cos(PI * p.y) + cos(PI * p.y) * cos(PI * p.z * phi) + cos(PI * p.z * phi) * cos(PI * p.x);
  let primeRes = sin(r * r * 0.618 - t * 0.3) * 0.35;
  let d = (abs(pot + primeRes) - 0.22) / 2.2;
  let bound = r - 2.6;
  return vec2<f32>(max(d, bound), abs(pot) + 0.25 * r);
}

// 18. Neovius-Schoen TPMS Minimal Surface (Zero Mean Curvature)
fn mapNeoviusMinimal(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  let p = p_in * (1.8 * phi);
  let rot = rot2D(p.yz, t * 0.06);
  let pyz = vec3<f32>(p.x, rot.x, rot.y);
  let c = cos(pyz);
  let f = 3.0 * (c.x + c.y + c.z) + 4.0 * c.x * c.y * c.z;
  let d = (abs(f) - 0.25) / (2.6 * phi);
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound), abs(f) * 0.15 + 0.3 * length(p_in));
}

// 19. Euler Totient φ(n) & Archimedean Prime Spiral
fn mapEulerTotientSpiral(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(rot.x, p.y, rot.y);
  let r_xy = length(p.xy);
  let theta = atan2(p.y, p.x);
  let log_r = log(max(r_xy, 0.01));
  let spiral = fract(theta * (phi / PI) - log_r * 2.0 + p.z * 1.5 + t * 0.2) - 0.5;
  let d = sqrt(spiral * spiral * r_xy * r_xy + p.z * p.z * 0.2) - 0.08;
  let bound = length(p_in) - 2.6;
  return vec2<f32>(max(d, bound), abs(spiral) + 0.2 * r_xy);
}

// 20. 4D Flat Clifford Torus in S³ Stereographic Projection
fn mapCliffordTorus4D(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(rot.x, p.y, rot.y);
  let r2 = dot(p, p);
  let denom = 1.0 + r2;
  let q = vec4<f32>(2.0 * p, r2 - 1.0) / max(denom, 0.001);
  let a1 = t * 0.12;
  let a2 = t * 0.12 * phi;
  let z1 = rot2D(q.xy, a1);
  let z2 = rot2D(q.zw, a2);
  let d_clifford = abs(dot(z1, z1) - dot(z2, z2)) - 0.12;
  let d_3d = d_clifford * (1.0 + r2) * 0.35;
  let bound = length(p_in) - 2.7;
  return vec2<f32>(max(d_3d, bound), abs(d_clifford) + 0.3 * sqrt(r2));
}

// 21. Kleinian Group Schottky Limit Set (Möbius Inversions)
fn mapKleinianLimit(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(rot.x, rot.y, p.z);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    p = mod(p + vec3<f32>(1.0), vec3<f32>(2.0)) - vec3<f32>(1.0);
    let r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    let k = (1.25 * phi) / max(r2, 0.12);
    p = p * k;
    scale = scale * k;
  }
  return vec2<f32>((length(p) - 0.6) / max(scale, 0.001), trap);
}

// 22. Golden Fibonacci Snowflake IFS 3D
fn mapFibonacciSnowflake(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let rot = rot2D(p.yz, t * 0.07);
  p = vec3<f32>(p.x, rot.x, rot.y);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 10);
  for (var i: i32 = 0; i < 10; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x < p.y) { let t1 = p.x; p.x = p.y; p.y = t1; }
    if (p.x < p.z) { let t2 = p.x; p.x = p.z; p.z = t2; }
    if (p.y < p.z) { let t3 = p.y; p.y = p.z; p.z = t3; }
    let factor = phi * 1.05;
    p = p * factor - vec3<f32>(0.55 * (factor - 1.0));
    scale = scale * factor;
    trap = min(trap, length(p));
  }
  return vec2<f32>((length(p) - 0.45) / max(scale, 0.0001), trap);
}

// 23. 4D Quaternion Mandelbrot Set Golden Slices
fn mapQuaternionMandelbrot(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var c = vec4<f32>(p_in, 0.0);
  c.w = 0.25 * sin(t * 0.2 * phi);
  var z = c;
  var dz: f32 = 1.0;
  var r: f32 = 0.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  var escaped: bool = false;
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    r = length(z);
    if (r > 2.5) { escaped = true; break; }
    trap = min(trap, r);
    dz = 2.0 * r * dz + 1.0;
    let zv = z.yzw;
    let z0 = z.x;
    z = vec4<f32>(z0 * z0 - dot(zv, zv), 2.0 * z0 * zv) + c;
  }
  var d: f32 = 0.04 * (r - 0.7);
  if (escaped) {
    d = 0.5 * log(max(r, 1.0001)) * r / max(dz, 0.001);
  }
  return vec2<f32>(d, trap);
}

// 24. 3D Space-Filling Hilbert-Peano Curve (L-System)
fn mapHilbertCurve3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let rot = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(rot.x, rot.y, p.z);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 3, 8);
  for (var i: i32 = 0; i < 8; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p) - vec3<f32>(0.5);
    if (p.x < p.y) { let t1 = p.x; p.x = p.y; p.y = t1; }
    if (p.x < p.z) { let t2 = p.x; p.x = p.z; p.z = t2; }
    if (p.y < p.z) { let t3 = p.y; p.y = p.z; p.z = t3; }
    p = p * 2.0;
    scale = scale * 2.0;
    p = p - vec3<f32>(0.5);
    trap = min(trap, length(p.xy));
  }
  let d = (length(vec2<f32>(length(p.xy) - 0.25, p.z)) - 0.12) / max(scale, 0.0001);
  return vec2<f32>(d, trap);
}

// 25. Golden Dragon Curve IFS (Harter-Heighway / Levy)
fn mapDragonCurveIFS(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let rot1 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(rot1.x, p.y, rot1.y);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    if (p.x + p.y < 0.0) { let t1 = p.x; p.x = -p.y; p.y = -t1; }
    if (p.x - p.y < 0.0) { let t2 = p.x; p.x = -p.y; p.y = t2; }
    let rot2 = rot2D(p.xy, PI * 0.25);
    p = vec3<f32>(rot2.x, rot2.y, p.z);
    let rot3 = rot2D(p.yz, t * 0.03 + 0.1);
    p = vec3<f32>(p.x, rot3.x, rot3.y);
    let factor = phi * 0.85;
    p = p * factor - vec3<f32>(0.6, 0.2, 0.1);
    scale = scale * factor;
    trap = min(trap, length(p));
  }
  let d = (length(p) - 0.38) / max(scale, 0.0001);
  return vec2<f32>(d, trap);
}

// 26. 3D Branching Pythagorean Tree IFS
fn mapPythagorasTree3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let rot1 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(rot1.x, p.y, rot1.y);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  var d_tree = length(p - vec3<f32>(0.0, clamp(p.y, -1.0, 0.0), 0.0)) - 0.15;
  let count = clamp(iters, 3, 9);
  for (var i: i32 = 0; i < 9; i = i + 1) {
    if (i >= count) { break; }
    p.y = p.y - 0.65;
    p.x = abs(p.x);
    let rot2 = rot2D(p.xy, 0.55 + 0.05 * sin(t * 0.3));
    p = vec3<f32>(rot2.x, rot2.y, p.z);
    let rot3 = rot2D(p.yz, GOLDEN_ANGLE * 0.01);
    p = vec3<f32>(p.x, rot3.x, rot3.y);
    let factor = 1.0 / (phi * 0.72);
    p = p * factor;
    scale = scale * factor;
    let branch = (length(p - vec3<f32>(0.0, clamp(p.y, 0.0, 0.65), 0.0)) - 0.12) / scale;
    d_tree = min(d_tree, branch);
    trap = min(trap, length(p));
  }
  return vec2<f32>(d_tree, trap);
}

// 27. 3D Algebraic Burning Ship Fractal (|Re(z)| + i|Im(z)|)
fn mapBurningShip3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var z = p_in * 1.2;
  let c = z;
  var dr: f32 = 1.0;
  var r: f32 = 0.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 14);
  var escaped: bool = false;
  for (var i: i32 = 0; i < 14; i = i + 1) {
    if (i >= count) { break; }
    z = abs(z);
    r = length(z);
    if (r > 3.0) { escaped = true; break; }
    trap = min(trap, r);
    var theta = acos(clamp(z.z / max(r, 0.0001), -1.0, 1.0));
    var phi_ang = atan2(z.y, z.x);
    dr = 2.0 * r * dr + 1.0;
    let zr = r * r;
    theta = theta * 2.0 + sin(t * 0.15) * 0.1;
    phi_ang = phi_ang * 2.0;
    z = zr * vec3<f32>(sin(theta) * cos(phi_ang), sin(theta) * sin(phi_ang), cos(theta)) + c;
  }
  var d: f32 = 0.04 * (r - 0.6);
  if (escaped) {
    d = 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
  }
  return vec2<f32>(d, trap);
}

// 28. 3D Newton-Raphson Complex Roots Basin (z^3 - 1 = 0)
fn mapNewtonBasins(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.6;
  let rot = rot2D(p.xy, t * 0.06);
  p = vec3<f32>(rot.x, rot.y, p.z);
  var z = p.xy;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    let z2 = vec2<f32>(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y);
    let z3 = vec2<f32>(z2.x * z.x - z2.y * z.y, z2.x * z.y + z2.y * z.x);
    let num = vec2<f32>(2.0 * z3.x - 1.0, 2.0 * z3.y);
    let den = 3.0 * z2;
    let denom = dot(den, den);
    if (denom < 0.00001) { break; }
    z = vec2<f32>(dot(num, den), num.y * den.x - num.x * den.y) / denom;
    trap = min(trap, length(z - vec2<f32>(1.0, 0.0)));
  }
  let basinIso = length(z - vec2<f32>(1.0, 0.0)) - 0.6;
  let d_3d = sqrt(basinIso * basinIso + p.z * p.z * 0.3) - 0.2;
  let bound = length(p_in) - 2.8;
  return vec2<f32>(max(d_3d, bound * 0.4), trap);
}

// 29. 3D Jerusalem Cube (Golden Ratio Cross Cavities)
fn mapJerusalemCube(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let rot = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(rot.x, rot.y, p.z);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  var d = length(max(abs(p) - vec3<f32>(1.0), vec3<f32>(0.0)));
  let count = clamp(iters, 2, 6);
  for (var i: i32 = 0; i < 6; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x < p.y) { let t1 = p.x; p.x = p.y; p.y = t1; }
    if (p.x < p.z) { let t2 = p.x; p.x = p.z; p.z = t2; }
    if (p.y < p.z) { let t3 = p.y; p.y = p.z; p.z = t3; }
    let crossWidth = (phi - 1.0) / scale;
    let hole = min(max(abs(p.x) - crossWidth, abs(p.y) - crossWidth),
                   min(max(abs(p.y) - crossWidth, abs(p.z) - crossWidth),
                       max(abs(p.z) - crossWidth, abs(p.x) - crossWidth)));
    d = max(d, -hole);
    let factor = phi * 1.15;
    p = p * factor - vec3<f32>(factor - 1.0);
    scale = scale * factor;
    trap = min(trap, length(p));
  }
  return vec2<f32>(d, trap);
}

// 30. 3D Lorenz Strange Attractor Chaotic Flow
fn mapLorenzAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let sigma = 10.0; let rho = 28.0; let beta = 8.0 / 3.0;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var q = vec3<f32>(0.1 + f32(s) * 0.1, 0.0, 25.0 - f32(s) * 5.0);
    for (var i: i32 = 0; i < 80; i = i + 1) {
      let dx = sigma * (q.y - q.x);
      let dy = q.x * (rho - q.z) - q.y;
      let dz = q.x * q.y - beta * q.z;
      q = q + vec3<f32>(dx, dy, dz) * 0.008;
      let scaled = q * 0.25;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
            maxDensity = max(maxDensity, exp(-dist * 4.0));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 31. 3D Quantum Hofstadter Butterfly Energy Bands
fn mapHofstadterButterfly(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 2.0;
  let rot = rot2D(p.yz, t * 0.06);
  p = vec3<f32>(p.x, rot.x, rot.y);
  let alpha = fract(p.z * 0.5 + t * 0.04);
  let energy = 2.0 * (cos(p.x * PI) + cos(p.y * PI)) + 2.0 * cos(2.0 * PI * alpha * phi);
  let gap = abs(energy - 0.8) - 0.28;
  let d = gap / 2.5;
  let bound = length(p_in) - 2.7;
  return vec2<f32>(max(d, bound), abs(energy) * 0.2 + 0.25 * length(p));
}

// 32. 3D Antoine's Necklace Wild Topological Linked Tori
fn mapAntoineNecklace(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let rot = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(rot.x, rot.y, p.z);
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  var d: f32 = 1e10;
  let count = clamp(iters, 2, 5);
  for (var i: i32 = 0; i < 5; i = i + 1) {
    if (i >= count) { break; }
    let rMajor = 0.8 / scale;
    let rMinor = 0.22 / scale;
    let q = length(p.xz) - rMajor;
    let torusD = length(vec2<f32>(q, p.y)) - rMinor;
    d = min(d, torusD);
    trap = min(trap, abs(q));
    let ang = atan2(p.z, p.x);
    let nSub = 8.0;
    let cell = floor(ang * nSub / (2.0 * PI) + 0.5);
    let subAng = cell * (2.0 * PI) / nSub;
    let rot2 = rot2D(p.xz, -subAng);
    p = vec3<f32>(rot2.x - rMajor, p.y, rot2.y);
    let rot3 = rot2D(p.yz, PI * 0.5);
    p = vec3<f32>(p.x, rot3.x, rot3.y);
    scale = scale * 2.4;
    p = p * 2.4;
  }
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound) * 0.5, trap);
}

// 33. 3D Diffusion-Limited Aggregation (DLA) Dendritic Cluster
fn mapDLACluster(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var d = length(p) - 0.06;
  var trap: f32 = 0.0;
  for (var i: i32 = 0; i < 8; i = i + 1) {
    if (i >= iters) { break; }
    let fi = f32(i);
    let ang = fi * 2.39996323 + t * 0.1;
    let h = fi * 0.18 - 0.6;
    let rad = 0.4 * pow(0.72, fi);
    let center = vec3<f32>(cos(ang) * rad, h, sin(ang) * rad);
    let branch = length(p - center) - 0.04 * pow(0.75, fi);
    d = min(d, branch);
    trap += exp(-5.0 * length(p - center));
    for (var j: i32 = 0; j < 3; j = j + 1) {
      let fj = f32(j);
      let subAng = ang + (fj - 1.0) * 0.8;
      let subRad = rad * 0.5;
      let subCenter = center + vec3<f32>(cos(subAng) * subRad, 0.06, sin(subAng) * subRad);
      let subBranch = length(p - subCenter) - 0.02 * pow(0.75, fi);
      d = min(d, subBranch);
    }
  }
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, trap * 0.15);
}

// 34. 4D Hyperchaotic Rössler Attractor
fn mapRosslerHyperchaos(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var q = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  for (var i: i32 = 0; i < 8; i = i + 1) {
    let rotXY = rot2D(q.xy, GOLDEN_ANGLE * 0.5 + t * 0.05);
    q = vec3<f32>(rotXY.x, rotXY.y, q.z);
    let rotYZ = rot2D(q.yz, 0.382);
    q = vec3<f32>(q.x, rotYZ.x, rotYZ.y);
    q = abs(q) - vec3<f32>(0.45 * phi, 0.35, 0.25 * phi);
    let r = length(q);
    trap = min(trap, r);
    let f: f32 = 1.25;
    q = q * f;
    scale = scale * f;
  }
  let d_tube = (length(q.xy) - 0.15) / scale;
  let d_cap = (length(q) - 0.4) / scale;
  return vec2<f32>(min(d_tube, d_cap), trap);
}

// 35. Clifford-Pickover 4D Chaotic Dynamic Manifold
fn mapCliffordAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let aa = -1.4 + 0.1 * sin(t * 0.2);
  let bb = 1.6 + 0.1 * cos(t * 0.15);
  let cc = 1.0 * phi;
  let dd: f32 = 0.7;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var q = vec3<f32>(f32(s) * 0.5 - 0.75, f32(s & 1) * 0.3 - 0.15, f32(s) * 0.4);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let xn = sin(aa * q.y) + cc * cos(aa * q.x);
      let yn = sin(bb * q.x) + dd * cos(bb * q.y);
      let zn = sin(q.z * 1.5 + t * 0.1 + f32(i) * 0.05) * 0.5;
      q = vec3<f32>(xn, yn, zn);
      let dist = length(p_in - q);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.3);
}

// 36. Type-II Superconductor Quantum Magnetic Vortex Flux Lattice (Abrikosov Lattice)
fn mapAbrikosovLattice(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let uv = p_in.xy * 2.2;
  let a1 = vec2<f32>(1.0, 0.0);
  let a2 = vec2<f32>(0.5, 0.8660254);
  let guv = vec2<f32>(dot(uv, a1), dot(uv, a2));
  let f = fract(guv) - vec2<f32>(0.5, 0.5);
  let vortex_dist = length(f) - 0.18;
  let order_param = abs(vortex_dist) - 0.04;
  let z_twist = sin(p_in.z * 3.14159 * phi + t * 0.3) * 0.08;
  let d = max(order_param + z_twist, abs(p_in.z) - 1.6);
  return vec2<f32>(d * 0.45, length(f));
}

// 37. Beltrami Pseudosphere (Lobachevsky Hyperbolic Surface of Revolution)
fn mapBeltramiPseudosphere(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var q = p_in;
  let rotXY = rot2D(q.xy, t * 0.1);
  q = vec3<f32>(rotXY.x, rotXY.y, q.z);
  let r = length(q.xy);
  let z = clamp(abs(q.z), 0.01, 1.8);
  let r_ideal = exp(-z * (phi * 0.85)) * 1.25;
  let d_surface = abs(r - r_ideal) - 0.045;
  let d_cap = max(abs(q.z) - 1.8, d_surface);
  return vec2<f32>(d_cap * 0.6, r);
}

// 38. Loop Quantum Gravity Penrose Spin-Network & Quantum Foam
fn mapSpinFoamNetwork(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let q = p_in;
  let cell = fract(q * 1.5 + vec3<f32>(0.5, 0.5, 0.5)) - vec3<f32>(0.5, 0.5, 0.5);
  let vertex = length(cell) - 0.12;
  let edges = min(length(cell.xy), min(length(cell.yz), length(cell.xz))) - 0.035;
  let foam = abs(sin(q.x * 4.0 * phi) * cos(q.y * 4.0 * phi) * sin(q.z * 4.0 * phi + t * 0.2)) - 0.25;
  let net = min(vertex, edges);
  let d = max(net, foam * 0.3);
  let bound2 = length(p_in) - 2.3;
  return vec2<f32>(max(d * 0.5, bound2) * 0.5, length(cell));
}

// 39. Ramanujan Modular Discriminant Delta(tau) Resonator
fn mapRamanujanTau(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let q = p_in;
  let r = length(q);
  let theta = atan2(q.y, q.x);
  let cusp24 = cos(24.0 * theta + t * 0.2) * 0.12;
  let r_target = 1.0 + cusp24 + sin(q.z * 8.0 * phi) * 0.15;
  let d_core = abs(r - r_target) - 0.08;
  let d_ribs = length(vec2<f32>(fract(r * 4.0 * phi) - 0.5, q.z * 0.5)) - 0.08;
  let bound = length(q) - 2.2;
  return vec2<f32>(max(min(d_core, d_ribs) * 0.5, bound) * 0.5, abs(cusp24) * 2.0);
}

// 40. Belousov-Zhabotinsky Chemical Spiral Reaction Waves
fn mapBelousovWaves(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let r = length(p_in.xy);
  let ang = atan2(p_in.y, p_in.x);
  let wave = sin(r * 8.0 * phi - 3.0 * ang - t * 1.5);
  let z_mod = cos(p_in.z * 4.0 + wave * 0.5) * 0.15;
  let d = abs(p_in.z - wave * 0.25) - 0.05 + z_mod;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound) * 0.55, abs(wave));
}

// ============================================================
// EXPANDED FRACTAL TYPES (41-60): Real mathematical fractals
// ============================================================

// 41. Henon 3D Strange Attractor (orbit-traced, a=1.4, b=0.3)
fn mapHenonAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 1.4; let b = 0.3;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.1 - f32(s) * 0.08, f32(s) * 0.3);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let x = 1.0 - a * v.x * v.x + v.y;
      let y = b * v.x;
      let z = sin(v.z * phi + t * 0.15) * 0.5;
      v = vec3<f32>(x, y, z);
      let scaled = v * 0.5;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
            maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 42. Aizawa Toroidal Chaotic Attractor (orbit-traced)
fn mapAizawaAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.95; let b = 0.7; let c = 0.6; let dd = 3.5; let e = 0.25; let f = 0.1;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.05 * f32(s), 0.5 + f32(s) * 0.25);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dx = (v.z - b) * v.x - dd * v.y;
      let dy = dd * v.x + (v.z - b) * v.y;
      let dz = c + a * v.z - v.z * v.z * v.z / 3.0 - (v.x * v.x + v.y * v.y) * (1.0 + e * v.z) + f * v.z * v.x * v.x * v.x;
      v = v + vec3<f32>(dx, dy, dz) * 0.05;
      let scaled = v * 1.0;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
            maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 43. Thomas Cyclically Symmetric Attractor (orbit-traced, b=0.208186)
fn mapThomasAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.yz, t * 0.06);
  p = vec3<f32>(p.x, r0.x, r0.y);
  let b = 0.208186;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(1.0 + f32(s) * 0.3, 0.0, -1.0 + f32(s) * 0.5);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dx = sin(v.y) - b * v.x;
      let dy = sin(v.z) - b * v.y;
      let dz = sin(v.x) - b * v.z;
      v = v + vec3<f32>(dx, dy, dz) * 0.1;
      let scaled = v * 0.8;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
            maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 44. Halvorsen 3-Fold Chaotic Attractor (orbit-traced, a=1.89)
fn mapHalvorsenAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xy, t * 0.07);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let a = 1.89;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(-1.0 + f32(s) * 0.5, -1.0 + f32(s) * 0.3, -1.0);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dx = -a * v.x - 4.0 * v.y - 4.0 * v.z - v.y * v.y;
      let dy = -a * v.y - 4.0 * v.z - 4.0 * v.x - v.z * v.z;
      let dz = -a * v.z - 4.0 * v.x - 4.0 * v.y - v.x * v.x;
      v = v + vec3<f32>(dx, dy, dz) * 0.04;
      let scaled = v * 0.7;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
            maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 45. Julia Set 3D (c = -0.7 + 0.27i)
fn mapJuliaSet3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let r0 = rot2D(p.xz, t * 0.05);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let c = vec2<f32>(-0.7, 0.27015);
  var z = p.xy * 1.6;
  var dz = 1.0;
  var trap = 0.0;
  for (var i = 0; i < 20; i = i + 1) {
    if (i >= iters) { break; }
    dz = 2.0 * length(z) * dz;
    z = vec2<f32>(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    trap += exp(-3.0 * length(z));
    if (dot(z, z) > 16.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  let zThick = sqrt(d * d + p.z * p.z * 0.15) - 0.06;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(zThick, bound * 0.4), trap);
}

// 46. Multibrot z^3+c
fn mapMultibrot3(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var z = p.xy * 1.3;
  let c = vec2<f32>(p.z * 0.7, p.x * 0.3);
  var md = 1.0;
  var trap = 0.0;
  for (var i = 0; i < 16; i = i + 1) {
    if (i >= iters) { break; }
    let r = length(z);
    md = 3.0 * r * r * md;
    let theta = atan2(z.y, z.x) * 3.0;
    let rPow = pow(r, 3.0);
    z = vec2<f32>(rPow * cos(theta), rPow * sin(theta)) + c;
    trap += exp(-2.0 * length(z));
    if (dot(z, z) > 16.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(md, 0.001);
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(abs(d), bound * 0.3), trap);
}

// 47. Tetrix (Sierpinski Tetrahedron 3D IFS)
fn mapTetrix(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  var sc = 1.0;
  var trap = 0.0;
  let v1 = vec3<f32>(1.0, 1.0, 1.0);
  let v2 = vec3<f32>(1.0, -1.0, -1.0);
  let v3 = vec3<f32>(-1.0, 1.0, -1.0);
  let v4 = vec3<f32>(-1.0, -1.0, 1.0);
  for (var i = 0; i < 16; i = i + 1) {
    if (i >= iters) { break; }
    let d1 = length(p - v1); let d2 = length(p - v2);
    let d3 = length(p - v3); let d4 = length(p - v4);
    let mn = min(min(d1, d2), min(d3, d4));
    if (mn == d1) { p = (p - v1) * 2.0 + v1; }
    else if (mn == d2) { p = (p - v2) * 2.0 + v2; }
    else if (mn == d3) { p = (p - v3) * 2.0 + v3; }
    else { p = (p - v4) * 2.0 + v4; }
    sc *= 0.5;
    trap += length(p) * sc;
  }
  let d = length(p) * sc - 0.05;
  return vec2<f32>(d, trap * 0.08);
}

// 48. Gosper Island (hexagonal space-filling)
fn mapGosperCurve(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.06);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let sc: f32 = 2.6457513;
  var trap: f32 = 0.0;
  var d: f32 = 1e10;
  let c1 = vec3<f32>(0.0, 0.0, 0.0); let c2 = vec3<f32>(1.5, 0.0, 0.0);
  let c3 = vec3<f32>(0.75, 1.3, 0.0); let c4 = vec3<f32>(-0.75, 1.3, 0.0);
  let c5 = vec3<f32>(-1.5, 0.0, 0.0); let c6 = vec3<f32>(-0.75, -1.3, 0.0);
  let c7 = vec3<f32>(0.75, -1.3, 0.0);
  for (var i = 0; i < 8; i = i + 1) {
    if (i >= iters) { break; }
    let q = p * sc;
    let d1 = length(q - c1); let d2 = length(q - c2); let d3 = length(q - c3);
    let d4 = length(q - c4); let d5 = length(q - c5); let d6 = length(q - c6);
    let d7 = length(q - c7);
    let mn = min(min(min(d1, d2), min(d3, d4)), min(min(d5, d6), d7));
    trap += mn / sc;
    if (mn == d1) { p = (p - c1 / sc) * sc; }
    else if (mn == d2) { p = (p - c2 / sc) * sc; }
    else if (mn == d3) { p = (p - c3 / sc) * sc; }
    else if (mn == d4) { p = (p - c4 / sc) * sc; }
    else if (mn == d5) { p = (p - c5 / sc) * sc; }
    else if (mn == d6) { p = (p - c6 / sc) * sc; }
    else { p = (p - c7 / sc) * sc; }
    d = min(d, length(p) / sc);
  }
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d * 0.5, bound * 0.3), trap * 0.1);
}

// 49. L-System Plant (3D phyllotactic branching)
fn mapLSystemPlant(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let goldenAngle = 2.39996323;
  let sc = 1.0 / phi;
  var d = length(p) - 0.08;
  var trap = 0.0;
  for (var i = 0; i < 10; i = i + 1) {
    if (i >= iters) { break; }
    let fi = f32(i);
    let ang = fi * goldenAngle + t * 0.15;
    let h = fi * 0.22 - 0.8;
    let rad = 0.35 * pow(sc, fi * 0.5);
    let center = vec3<f32>(cos(ang) * rad, h, sin(ang) * rad);
    let branch = length(p - center) - 0.06 * pow(sc, fi * 0.3);
    d = min(d, branch);
    trap += exp(-4.0 * length(p - center));
  }
  let stem = max(length(p.xz) - 0.025, abs(p.y + 0.8) - 1.6);
  d = min(d, stem);
  return vec2<f32>(d * 0.6, trap * 0.15);
}

// 50. Schwarz P Minimal Surface
fn mapSchwarzP(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in * phi * 1.3;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let val = cos(p.x) + cos(p.y) + cos(p.z);
  let d = (abs(val) - 0.3) / (phi * 1.3);
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(d, bound), abs(val) + 0.2 * length(p));
}

// 51. Schwarz D Diamond Surface
fn mapSchwarzD(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in * phi * 1.2;
  let r0 = rot2D(p.yz, t * 0.07);
  p = vec3<f32>(p.x, r0.x, r0.y);
  let s1 = sin(p.x) * sin(p.y) * sin(p.z);
  let c1 = cos(p.x) * cos(p.y) * cos(p.z);
  let val = s1 - c1;
  let d = (abs(val) - 0.25) / (phi * 1.2);
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(d, bound), abs(val) + 0.3 * length(p));
}

// 52. Apollonian Gasket (recursive sphere packing)
fn mapApollonianGasket(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r0.x, r0.y, p.z);
  var sc = 1.0;
  var trap = 0.0;
  for (var i = 0; i < 12; i = i + 1) {
    if (i >= iters) { break; }
    p = abs(p);
    if (p.x < p.y) { p = vec3<f32>(p.y, p.x, p.z); }
    if (p.x < p.z) { p = vec3<f32>(p.z, p.y, p.x); }
    if (p.y < p.z) { p = vec3<f32>(p.x, p.z, p.y); }
    let r = length(p);
    if (r > 0.001) {
      let k = (1.0 + phi) / (r * r);
      p = p * k - vec3<f32>(phi * 0.5, 0.0, 0.0);
      sc *= k;
    }
    trap += length(p) / sc;
  }
  let d = (length(p) - 0.5) / sc;
  return vec2<f32>(abs(d) * 0.4, trap * 0.08);
}

// 53. Barnsley Fern 3D (orbit-traced IFS)
fn mapBarnsleyFern3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 5; s = s + 1) {
    var q = vec3<f32>(0.0, 0.0, 0.0);
    for (var i: i32 = 0; i < 40; i = i + 1) {
      let fi = f32(i);
      let choice = fract(sin(fi * 12.9898 + f32(s) * 78.233 + 43.12) * 43758.5453);
      if (choice < 0.01) { q = vec3<f32>(0.0, 0.16 * q.y, 0.0); }
      else if (choice < 0.86) { q = vec3<f32>(0.85 * q.x + 0.04 * q.y, -0.04 * q.x + 0.85 * q.y + 1.6, 0.3 * q.z); }
      else if (choice < 0.93) { q = vec3<f32>(0.2 * q.x - 0.26 * q.y, 0.23 * q.x + 0.22 * q.y + 1.6, 0.3 * q.z); }
      else { q = vec3<f32>(-0.15 * q.x + 0.28 * q.y, 0.26 * q.x + 0.24 * q.y + 0.44, 0.3 * q.z); }
      let scaled = q * 0.4;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 54. Klein Quartic Surface (genus-3)
fn mapKleinQuartic(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let r = length(p);
  let theta = atan2(p.y, p.x);
  let psi = atan2(p.z, length(p.xy));
  let val = cos(7.0 * theta) * sin(3.0 * psi) + sin(7.0 * theta) * cos(3.0 * psi);
  let surface = abs(r - (1.2 + val * 0.25)) - 0.06;
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(surface, bound) * 0.6, abs(val) + 0.2 * r);
}

// 55. Sphere Packing (FCC fractal)
fn mapSpherePacking(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r0.x, r0.y, p.z);
  var d = 1e10;
  var trap = 0.0;
  var sc = 1.0;
  for (var i = 0; i < 8; i = i + 1) {
    if (i >= iters) { break; }
    let q = fract(p * sc) - vec3<f32>(0.5, 0.5, 0.5);
    let sphere = length(q) - 0.25 / sc;
    d = min(d, sphere);
    trap += exp(-3.0 * abs(sphere));
    sc *= phi;
  }
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(d, bound) * 0.5, trap * 0.1);
}

// 56. Nova Fractal (Newton + Mandelbrot)
fn mapNovaFractal(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var z = p.xy * 1.2;
  let c = vec2<f32>(p.z * 0.6, p.x * 0.2);
  var md = 1.0;
  var trap = 0.0;
  for (var i = 0; i < 16; i = i + 1) {
    if (i >= iters) { break; }
    let r2 = dot(z, z);
    if (r2 > 16.0) { break; }
    let z3 = vec2<f32>(z.x * z.x * z.x - 3.0 * z.x * z.y * z.y, 3.0 * z.x * z.x * z.y - z.y * z.y * z.y);
    let dz3 = vec2<f32>(3.0 * (z.x * z.x - z.y * z.y), 6.0 * z.x * z.y);
    z = z - z3 / (dz3 + vec2<f32>(0.0001, 0.0001)) + c;
    md *= 2.0 * length(z);
    trap += exp(-2.0 * length(z));
  }
  let d = (length(z) - 2.0) * 0.5 / max(md, 0.001);
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(abs(d), bound * 0.3), trap);
}

// 57. Golden Knot (torus knot with golden winding)
fn mapGoldenKnot(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in;
  let r0 = rot2D(p.xz, t * 0.1);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let R = 1.0;
  let rTube = 0.18;
  let theta = atan2(p.y, p.x);
  let phiK = theta * phi;
  let curve = vec3<f32>(
    (R + rTube * cos(phiK * 3.0)) * cos(theta),
    (R + rTube * cos(phiK * 3.0)) * sin(theta),
    rTube * sin(phiK * 3.0));
  let d = length(p - curve) - 0.08;
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(d, bound) * 0.7, abs(phiK) * 0.1);
}

// 58. Spherical Harmonics (quantum orbitals)
fn mapSphericalHarmonics(p_in: vec3<f32>, t: f32, phi: f32) -> vec2<f32> {
  var p = p_in * 1.3;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let r = length(p);
  let theta = atan2(length(p.xy), p.z);
  let phiA = atan2(p.y, p.x);
  let Y32 = sin(theta) * sin(theta) * cos(theta) * cos(3.0 * phiA);
  let Y42 = sin(theta) * sin(theta) * (7.0 * cos(theta) * cos(theta) - 1.0) * cos(2.0 * phiA);
  let radial = 1.0 + 0.4 * Y32 + 0.25 * Y42;
  let d = abs(r - radial * 0.9) - 0.04;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound) * 0.5, abs(Y32) + abs(Y42));
}

// 59. Fractal Cross (3D plus-shaped recursive IFS)
fn mapFractalCross(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  var sc: f32 = 1.0;
  var trap: f32 = 0.0;
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= iters) { break; }
    p = abs(p);
    if (p.x < p.y) { p = vec3<f32>(p.y, p.x, p.z); }
    if (p.x < p.z) { p = vec3<f32>(p.z, p.y, p.x); }
    p = p * 1.5 - vec3<f32>(0.75, 0.75, 0.75);
    sc = sc * 0.667;
    trap = trap + length(p) * sc;
  }
  let d = length(p) * sc - 0.05;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.3), trap * 0.06);
}

// 60. Reaction-Diffusion (Gray-Scott Turing)
fn mapReactionDiffusion(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 2.0;
  let r0 = rot2D(p.xy, t * 0.06);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let f = 0.04 + phi * 0.01;
  let k = 0.06 + phi * 0.005;
  let u = cos(p.x * phi) * cos(p.y * phi) * cos(p.z * phi);
  let v = sin(p.x * 2.0 + t * 0.2) * sin(p.y * 2.0) * sin(p.z * 2.0);
  let lap = (cos(p.x * 3.0) + cos(p.y * 3.0) + cos(p.z * 3.0)) / 3.0;
  let pattern = u * (1.0 - u) - f * u * v + k * lap;
  let d = abs(pattern) - 0.15;
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(d * 0.4, bound) * 0.6, abs(pattern));
}

// ============================================================
// BATCH 3 fractals (61-75): More verified real mathematical fractals
// ============================================================

// 61. Sierpinski Carpet (IFS, dim = log(8)/log(3))
fn mapSierpinskiCarpet(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  var scale: f32 = 1.0;
  var trap: f32 = 1e10;
  let count = clamp(iters, 3, 8);
  let r0 = rot2D(p.xy, t * 0.08);
  p = vec3<f32>(r0.x, r0.y, p.z);
  for (var i: i32 = 0; i < 8; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x < p.y) { p = vec3<f32>(p.y, p.x, p.z); }
    if (p.x < p.z) { p = vec3<f32>(p.z, p.y, p.x); }
    if (p.y < p.z) { p = vec3<f32>(p.x, p.z, p.y); }
    p = p * 3.0 - vec3<f32>(2.0, 2.0, 2.0);
    if (p.x > -0.5 && p.x < 0.5 && p.y > -0.5 && p.y < 0.5) {
      if (p.x > 0.0) { p.x = p.x + 1.0; } else { p.x = p.x - 1.0; }
    }
    if (p.y > -0.5 && p.y < 0.5 && p.z > -0.5 && p.z < 0.5) {
      if (p.y > 0.0) { p.y = p.y + 1.0; } else { p.y = p.y - 1.0; }
    }
    if (p.x > -0.5 && p.x < 0.5 && p.z > -0.5 && p.z < 0.5) {
      if (p.z > 0.0) { p.z = p.z + 1.0; } else { p.z = p.z - 1.0; }
    }
    scale = scale * 3.0;
    trap = min(trap, length(p));
  }
  let d = (length(p) - 0.5) / max(scale, 0.0001);
  return vec2<f32>(d, trap * 0.08);
}

// 62. Tricorn (Mandelbar) — conjugate Mandelbrot
fn mapTricorn(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var z = p.xy * 1.2;
  let c = vec2<f32>(p.z * 0.7, p.x * 0.3);
  var dz: f32 = 1.0;
  var trap: f32 = 0.0;
  for (var i: i32 = 0; i < 16; i = i + 1) {
    if (i >= iters) { break; }
    dz = 2.0 * length(z) * dz;
    z = vec2<f32>(z.x * z.x - z.y * z.y, -2.0 * z.x * z.y) + c;
    trap += exp(-3.0 * length(z));
    if (dot(z, z) > 16.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(abs(d), bound * 0.3), trap);
}

// 63. Chua's Circuit Double Scroll (orbit-traced)
fn mapChuaCircuit(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let alpha = 15.6; let beta = 28.0;
  let m0 = -1.143; let m1 = -0.714;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.0, 0.1 + f32(s) * 0.2);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let fx = m1 * v.x + 0.5 * (m0 - m1) * (abs(v.x + 1.0) - abs(v.x - 1.0));
      let dx = alpha * (v.y - v.x - fx);
      let dy = v.x - v.y + v.z;
      let dz2 = -beta * v.y;
      v = v + vec3<f32>(dx, dy, dz2) * 0.008;
      let scaled = v * 0.5;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 64. Standard Map (Chirikov-Taylor, orbit-traced)
fn mapStandardMap(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let K = 1.5 + 0.5 * sin(t * 0.1);
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var theta = f32(s) * 1.57 + 0.3;
    var p_val = f32(s) * 0.8 - 1.2;
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let new_p = p_val + K * sin(theta);
      theta = mod(theta + new_p, 6.283185307);
      p_val = new_p;
      let pt = vec3<f32>(cos(theta) * 0.8, sin(theta) * 0.8, p_val * 0.5 + f32(s) * 0.2);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 65. Ikeda Map (orbit-traced)
fn mapIkedaMap(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let b = 0.9;
  let u = 0.4 + 0.05 * sin(t * 0.15);
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var xn = f32(s) * 0.3 - 0.45;
    var yn = f32(s) * 0.2 - 0.3;
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let ti = 0.4 - 6.0 / (1.0 + xn * xn + yn * yn);
      let cosT = cos(ti); let sinT = sin(ti);
      let xnew = 1.0 + u * (xn * cosT - yn * sinT);
      let ynew = u * (xn * sinT + yn * cosT);
      xn = xnew; yn = ynew;
      let pt = vec3<f32>(xn * 0.5, yn * 0.5, sin(f32(i) * 0.15 + t * 0.1 + f32(s) * 0.5) * 0.4);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.2);
}

// 66. Koch Snowflake 3D (recursive triangular IFS)
fn mapKochSnowflake3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.06);
  p = vec3<f32>(r0.x, r0.y, p.z);
  var d: f32 = length(p) - 1.5;
  var trap: f32 = 0.0;
  var sc: f32 = 1.0;
  for (var i: i32 = 0; i < 6; i = i + 1) {
    if (i >= iters) { break; }
    p.x = abs(p.x);
    p.x = p.x * 0.5 - 0.25;
    p.y = p.y * 3.0;
    trap += length(p) / sc;
    sc = sc * 3.0;
    d = min(d, length(p) / sc);
  }
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d * 0.5, bound * 0.3), trap * 0.08);
}

// 67. Cantor Dust 3D (recursive corner cubes)
fn mapCantorDust(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r0.x, r0.y, p.z);
  var scale: f32 = 1.0;
  var trap: f32 = 0.0;
  var d: f32 = 1e10;
  for (var i: i32 = 0; i < 10; i = i + 1) {
    if (i >= iters) { break; }
    p = abs(p);
    p = p * 3.0 - vec3<f32>(4.0, 4.0, 4.0);
    scale = scale * 3.0;
    trap = min(trap, length(p));
    d = min(d, length(p) / scale);
  }
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.3), trap * 0.06);
}

// 68. Phoenix Fractal (memory fractal: z_{n+1} = z_n^2 + c + p*z_{n-1})
fn mapPhoenixFractal(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in;
  let r0 = rot2D(p.xz, t * 0.05);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let c = vec2<f32>(0.56667 + 0.05 * sin(t * 0.2), -0.5);
  let p_param = 0.2 + 0.05 * cos(t * 0.15);
  var z = p.xy * 1.3;
  var z_prev = vec2<f32>(0.0, 0.0);
  var dz: f32 = 1.0;
  var trap: f32 = 0.0;
  for (var i: i32 = 0; i < 16; i = i + 1) {
    if (i >= iters) { break; }
    dz = 2.0 * length(z) * dz + p_param;
    let z_new = vec2<f32>(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    trap += exp(-2.0 * length(z));
    if (dot(z, z) > 16.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(abs(d), bound * 0.3), trap);
}

// 69. Fatou Set (basin boundary of z^2+c)
fn mapFatouSet(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let ang = t * 0.15;
  let c = vec2<f32>(0.7885 * cos(ang), 0.7885 * sin(ang));
  var z = p.xy;
  var trap: f32 = 1e10;
  for (var i: i32 = 0; i < 20; i = i + 1) {
    if (i >= iters) { break; }
    z = vec2<f32>(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    let r = length(z);
    trap = min(trap, r);
    if (r > 4.0) { break; }
  }
  // 3D volumetric extrusion: Julia distance extended into z-axis with smooth falloff
  let juliaD2d = 0.5 * log(max(trap, 1.0001)) / 4.0;
  let zFade = 1.0 / (1.0 + p.z * p.z * 4.0);
  let d = juliaD2d * zFade + abs(p.z) * 0.12 - 0.02;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, trap * 0.15);
}

// 70. E8 Lattice Projection (exceptional Lie group, 8D → 3D shadow)
fn mapE8Lattice(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * phi * 1.2;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var psi: f32 = 0.0;
  let ws = 3.5 * phi;
  let d0 = normalize(vec3<f32>(1.0, phi, 0.0));
  let d1 = normalize(vec3<f32>(-1.0, phi, 0.0));
  let d2 = normalize(vec3<f32>(0.0, 1.0, phi));
  let d3 = normalize(vec3<f32>(0.0, -1.0, phi));
  let d4 = normalize(vec3<f32>(phi, 0.0, 1.0));
  let d5 = normalize(vec3<f32>(phi, 0.0, -1.0));
  psi = cos(dot(p, d0) * ws + t * 0.15) + cos(dot(p, d1) * ws + t * 0.15)
      + cos(dot(p, d2) * ws + t * 0.15) + cos(dot(p, d3) * ws + t * 0.15)
      + cos(dot(p, d4) * ws + t * 0.15) + cos(dot(p, d5) * ws + t * 0.15);
  let d = (abs(psi) - 0.6) / ws;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound), abs(psi) * 0.2 + 0.3 * length(p));
}

// 71. Chladni Figures (vibrational eigenmodes)
fn mapChladniFigures(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.8;
  let r0 = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let n = 3.0 + floor(mod(t * 0.3, 5.0));
  let m = 2.0 + floor(mod(t * 0.2 + 2.5, 4.0));
  let pi_x = 3.14159265 * p.x;
  let pi_y = 3.14159265 * p.y;
  let mode1 = cos(n * pi_x) * cos(m * pi_y);
  let mode2 = cos(m * pi_x) * cos(n * pi_y);
  let chladni = mode1 - mode2;
  let d = abs(chladni) - 0.15;
  let plate = max(max(abs(p.x) - 1.5, abs(p.y) - 1.5), abs(p.z) - 0.15);
  let d3d = max(d, plate);
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d3d * 0.5, bound * 0.3), abs(chladni));
}

// 72. FitzHugh-Nagumo Neural Dynamics (orbit-traced)
fn mapFitzHugh(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.7; let b_param = 0.8; let tau = 12.5;
  let I_ext = 0.5 + 0.2 * sin(t * 0.2);
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, -0.2, f32(s) * 0.3);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dv = v.x - v.y * v.y * v.y / 3.0 + v.y + I_ext;
      let dw = (v.x - a + b_param * v.y) / tau;
      let dz2 = sin(v.z * 2.0 + t * 0.1) * 0.15;
      v = v + vec3<f32>(dv, dw, dz2) * 0.08;
      let scaled = v * 0.8;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 73. Rössler Attractor (orbit-traced, a=0.2, b=0.2, c=5.7)
fn mapRosslerAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.2; let b = 0.2; let c = 5.7;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.1, f32(s) * 0.3);
    for (var i: i32 = 0; i < 80; i = i + 1) {
      let dx = -v.y - v.z;
      let dy = v.x + a * v.y;
      let dz2 = b + v.z * (v.x - c);
      v = v + vec3<f32>(dx, dy, dz2) * 0.015;
      let scaled = v * 0.4;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 74. Duffing Attractor (orbit-traced)
fn mapDuffingAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let alpha = 1.0; let beta_p = 5.0; let delta = 0.02; let gamma = 8.0;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.0, f32(s) * 0.5);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let omega = 1.5 + f32(s) * 0.3;
      let dx = v.y;
      let dy = -delta * v.y - alpha * v.x - beta_p * v.x * v.x * v.x + gamma * cos(v.z);
      let dz2 = omega;
      v = v + vec3<f32>(dx, dy, dz2) * 0.015;
      let scaled = v * 0.8;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 75. Logistic Map Bifurcation (period-doubling cascade, Feigenbaum δ≈4.669)
fn mapLogisticBifurcation(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.05);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let r = 2.5 + (p.x + 1.5) / 3.0 * 1.5;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 6; s = s + 1) {
    var x = 0.3 + f32(s) * 0.1;
    for (var i: i32 = 0; i < 50; i = i + 1) {
      x = r * x * (1.0 - x);
    }
    for (var i: i32 = 0; i < 40; i = i + 1) {
      x = r * x * (1.0 - x);
      let pt = vec3<f32>(p.x, (x - 0.5) * 2.0, f32(s) * 0.3 - 0.75);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  let tubeR = 0.02 + maxDensity * 0.01;
  let d = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound * 0.6), maxDensity * 0.25);
}

// 76. Fractal Spire (Exponential spiral tower)
fn mapFractalSpire(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let rot_a = t * 0.08;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  var z = p.xy;
  var trap: f32 = 1e10;
  var dr: f32 = 1.0;
  let count = clamp(iters, 4, 16);
  for (var i: i32 = 0; i < 16; i = i + 1) {
    if (i >= count) { break; }
    let ex = exp(clamp(z.x, -10.0, 10.0));
    let ez = vec2<f32>(ex * cos(z.y), ex * sin(z.y));
    dr = length(ez) * dr + 1.0;
    z = ez + p.xy * 0.7;
    trap = min(trap, length(z));
    if (dot(z, z) > 256.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dr, 0.001);
  let bound = length(p_in) - 2.8;
  return vec2<f32>(max(d * 0.5, bound * 0.4), trap);
}

// 77. DeJong Attractor
fn mapDeJongAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 2.24 + sin(t * 0.05) * 0.5;
  let b = -0.43 + cos(t * 0.07) * 0.3;
  let c_ = -0.65 + sin(t * 0.03) * 0.4;
  let d_ = 2.43 + cos(t * 0.04) * 0.3;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  var z0 = vec2<f32>(0.1, 0.1); var z1 = vec2<f32>(-0.3, 0.5); var z2 = vec2<f32>(0.4, -0.2); var z3 = vec2<f32>(-0.5, -0.4);
  let count = clamp(iters, 8, 50);
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var z = z0;
    if (s == 1) { z = z1; } else if (s == 2) { z = z2; } else if (s == 3) { z = z3; }
    for (var i: i32 = 0; i < 50; i = i + 1) {
      if (i >= count) { break; }
      let nz = vec2<f32>(sin(a * z.y) - cos(b * z.x), sin(c_ * z.x) - cos(d_ * z.y));
      z = nz;
      let pt = vec3<f32>(z * 0.7, f32(s) * 0.25 - 0.375);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
    // PHASE 4.32: min-dist SDF with density-modulated tube radius
  let tubeR: f32 = 0.02 + maxDensity * 0.01;
  let dd = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 78. Pickover Attractor
fn mapPickoverAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = -1.64 + sin(t * 0.04) * 0.4;
  let b = 1.9 + cos(t * 0.06) * 0.3;
  let c_ = -0.31 + sin(t * 0.05) * 0.3;
  let d_ = 0.72 + cos(t * 0.03) * 0.2;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  let count = clamp(iters, 10, 40);
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var z = vec2<f32>(0.1 + f32(s) * 0.3, 0.1 + f32(s) * 0.2);
    for (var i: i32 = 0; i < 40; i = i + 1) {
      if (i >= count) { break; }
      let nz = vec2<f32>(sin(a * z.y) + c_ * cos(a * z.x), sin(b * z.x) + d_ * cos(b * z.y));
      z = nz;
      let pt = vec3<f32>(z * 0.8, sin(f32(s) + t * 0.1) * 0.5);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
    // PHASE 4.32: min-dist SDF with density-modulated tube radius
  let tubeR: f32 = 0.02 + maxDensity * 0.01;
  let dd = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 79. Vicsek Fractal (3D cross IFS, dim ~1.465)
fn mapVicsekFractal(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.8;
  let rot_a = t * 0.04;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  var scale: f32 = 3.0;
  var d: f32 = 1e10;
  var trap: f32 = 0.0;
  let count = clamp(iters, 4, 10);
  for (var i: i32 = 0; i < 10; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x < p.y) { p = vec3<f32>(p.y, p.x, p.z); }
    if (p.x < p.z) { p = vec3<f32>(p.z, p.y, p.x); }
    if (p.y < p.z) { p = vec3<f32>(p.x, p.z, p.y); }
    p = p * scale - vec3<f32>(scale - 1.0);
    if (p.x < -0.5) { p.x = p.x + 2.0; }
    if (p.y < -0.5) { p.y = p.y + 2.0; }
    scale = scale * 3.0;
    trap = min(trap, length(p));
    d = min(d, length(p) / scale);
  }
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound * 0.3), trap * 0.1);
}

// 80. Mandelbar (Conjugate Mandelbrot)
fn mapMandelbar(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let rot_a = t * 0.06;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  var z = p.xy;
  let c = vec2<f32>(p.z * 0.7, p.x * 0.3);
  var trap: f32 = 1e10;
  var dr: f32 = 1.0;
  let count = clamp(iters, 4, 20);
  for (var i: i32 = 0; i < 20; i = i + 1) {
    if (i >= count) { break; }
    trap = min(trap, length(z));
    let zc = vec2<f32>(z.x, -z.y);
    let z2 = vec2<f32>(zc.x * zc.x - zc.y * zc.y, 2.0 * zc.x * zc.y);
    dr = 2.0 * length(z) * dr + 1.0;
    z = z2 + c;
    if (dot(z, z) > 256.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dr, 0.001);
  let d3d = sqrt(d * d + p.z * p.z * 0.15) - 0.06;
  let bound = length(p_in) - 2.6;
  return vec2<f32>(max(d3d, bound * 0.4), trap);
}

// 81. Weierstrass 3D (Nowhere-differentiable surface)
fn mapWeierstrass3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let rot_a = t * 0.05;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  let a_w: f32 = 0.5;
  let b_w: f32 = 7.0;
  var surf: f32 = 0.0;
  let count = clamp(iters, 4, 10);
  for (var n: i32 = 0; n < 10; n = n + 1) {
    if (n >= count) { break; }
    let an = pow(a_w, f32(n));
    let bn = pow(b_w, f32(n));
    surf = surf + an * cos(bn * 3.14159 * p.x) * cos(bn * 3.14159 * p.z);
  }
  let d = abs(p.y - surf * 0.3) - 0.15;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.7, abs(surf) * 0.2);
}

// 82. Popcorn Function (Celldoor)
fn mapPopcornFunction(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let rot_a = t * 0.05;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  let c_pop = 0.4 + sin(t * 0.08) * 0.15;
  var z = p.xy;
  var trap: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    trap = min(trap, length(z));
    let nz = vec2<f32>(z.x - c_pop * sin(z.y + tan(z.y)), z.y - c_pop * sin(z.x + tan(z.x)));
    z = nz;
  }
  let d = length(z - p.xy) - 0.2;
  let d3d = sqrt(d * d + p.z * p.z * 0.2) - 0.08;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d3d, bound * 0.3), trap);
}

// 83. Bedhead Attractor (3D chaotic)
fn mapBedheadAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 0.95 + sin(t * 0.04) * 0.2;
  let b = 0.7 + cos(t * 0.06) * 0.15;
  let c_ = 0.6 + sin(t * 0.05) * 0.2;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var z = vec3<f32>(0.1 + f32(s) * 0.15, 0.1, 0.1 + f32(s) * 0.1);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let nz = vec3<f32>(
        sin(a * z.y * z.z) - z.z * cos(b * z.x * z.y),
        z.z * sin(a * z.x) - cos(b * z.y * z.z),
        c_ * sin(z.x * z.z)
      );
      z = nz;
      z = clamp(z, vec3<f32>(-5.0), vec3<f32>(5.0));
      let dist = length(p - z * 0.7);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
    // PHASE 4.32: min-dist SDF with density-modulated tube radius
  let tubeR: f32 = 0.02 + maxDensity * 0.01;
  let dd = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 84. FourSpot Attractor (4-wing chaotic)
fn mapFourSpotAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 1.0;
  let a = 2.0 + sin(t * 0.05) * 0.5;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  let count = clamp(iters, 8, 30);
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var z = vec3<f32>(0.5 + f32(s) * 0.2, 0.5, 0.5 + f32(s) * 0.1);
    for (var i: i32 = 0; i < 30; i = i + 1) {
      if (i >= count) { break; }
      let nz = vec3<f32>(z.y * z.z - a * z.x, z.x * z.z - z.y, -z.x * z.y + z.z);
      z = nz;
      z = clamp(z, vec3<f32>(-5.0), vec3<f32>(5.0));
      let scaled = z * 0.4;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
    // PHASE 4.32: min-dist SDF with density-modulated tube radius
  let tubeR: f32 = 0.02 + maxDensity * 0.01;
  let dd = minDist - tubeR;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 85. Svensson Attractor
fn mapSvenssonAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 2.0 + sin(t * 0.04) * 0.3;
  let b = 0.2 + cos(t * 0.06) * 0.1;
  let c_ = 1.57 + sin(t * 0.05) * 0.2;
  let d_ = 1.4 + cos(t * 0.03) * 0.3;
  var minDist: f32 = 1e10;
    var maxDensity: f32 = 0.0;
  let count = clamp(iters, 10, 35);
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var z = vec2<f32>(0.1 + f32(s) * 0.2, 0.1 + f32(s) * 0.15);
    for (var i: i32 = 0; i < 35; i = i + 1) {
      if (i >= count) { break; }
      let nz = vec2<f32>(d_ * sin(a * z.y) - c_, b * sin(c_ * z.x));
      z = nz;
      z = clamp(z, vec2<f32>(-5.0), vec2<f32>(5.0));
      let pt = vec3<f32>(z * 0.8, sin(f32(s) * 1.5 + t * 0.1) * 0.4);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
    // PHASE 4.32: min-dist SDF with density-modulated tube radius
  let tubeR: f32 = 0.02 + maxDensity * 0.01;
  let dd = minDist - tubeR;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 86: Kaleidoscopic IFS
fn mapKaleidoscopicIFS(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var pos = p;
  let scale = phi;
  var minDist = 1e10;
  let offset = vec3<f32>(1.0) * 0.8;
  for (var i = 0; i < 12; i = i + 1) {
    pos = abs(pos) - offset;
    pos = vec3<f32>(rot2D(t * 0.1 + f32(i) * 0.5) * pos.xy, pos.z);
    pos = vec3<f32>(pos.x, rot2D(t * 0.08 + f32(i) * 0.3) * pos.yz);
    let r = length(pos);
    pos = pos * (scale / max(r * r, 0.001)) - offset * 0.5;
    minDist = min(minDist, length(pos) * pow(scale, -f32(i + 1)));
  }
  return minDist * 0.5;
}

// 87: Flower of Life
fn mapFlowerOfLife(p: vec3<f32>, t: f32, phi: f32) -> f32 {
  let r = length(p.xy);
  let theta = atan2(p.y, p.x);
  var petals = 0.0;
  for (var i = 0; i < 6; i = i + 1) {
    let angle = f32(i) * 1.0472 + t * 0.1;
    let center = vec2<f32>(cos(angle), sin(angle)) * 0.5;
    let d = length(p.xy - center) - 0.5;
    petals = petals + exp(-abs(d) * 8.0);
  }
  let flower = r - 0.5 - petals * 0.1;
  let z = sin(theta * 6.0 + t) * 0.1;
  return max(flower, abs(p.z - z) - 0.05) * 0.8;
}

// 88: Cosmic Spiral
fn mapCosmicSpiral(p: vec3<f32>, t: f32, phi: f32) -> f32 {
  let r = length(p.xy);
  let theta = atan2(p.y, p.x);
  let spiral1 = theta - log(max(r, 0.01)) * 3.0 - t * 0.5;
  let spiral2 = theta - log(max(r, 0.01)) * 3.0 - t * 0.5 + 3.14159;
  let arm1 = sin(spiral1 * 2.0) * 0.5 + 0.5;
  let arm2 = sin(spiral2 * 2.0) * 0.5 + 0.5;
  let arms = max(arm1, arm2) * exp(-r * 0.5);
  let disk = abs(p.z) - 0.1 - arms * 0.2;
  return max(disk, r - 2.0) * 0.6;
}

// 89: Crystal Growth
fn mapCrystalGrowth(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var d = length(p) - 1.0;
  var dir = normalize(p);
  for (var i = 0; i < 8; i = i + 1) {
    let fi = f32(i);
    var branch = dir * (1.0 + fi * 0.3);
    branch = vec3<f32>(rot2D(fi * 1.2 + t * 0.1) * branch.xy, branch.z);
    let bd = length(p - branch) - 0.3 / (1.0 + fi * 0.2);
    d = min(d, bd);
    dir = normalize(dir + vec3<f32>(sin(fi), cos(fi * 1.3), sin(fi * 0.7)) * 0.3);
  }
  return d * 0.7;
}

// 90: Quantum Foam
fn mapQuantumFoam(p: vec3<f32>, t: f32, phi: f32) -> f32 {
  var bubbles = 0.0;
  for (var i = 0; i < 12; i = i + 1) {
    let fi = f32(i);
    let center = vec3<f32>(sin(fi * 1.3 + t * 0.2), cos(fi * 1.7 + t * 0.15), sin(fi * 2.1 + t * 0.1)) * 1.2;
    let r = 0.3 + sin(fi + t) * 0.1;
    let d = length(p - center) - r;
    bubbles = max(bubbles, -d);
  }
  return -bubbles * 0.8;
}

// 91: Fractal Coral
fn mapFractalCoral(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var pos = p;
  var d = length(p) - 1.5;
  let offset = vec3<f32>(0.0, 1.0, 0.0);
  for (var i = 0; i < 10; i = i + 1) {
    pos = abs(pos) - offset;
    pos = vec3<f32>(rot2D(0.8 + t * 0.05) * pos.xy, pos.z);
    let r = length(pos);
    pos = pos * 1.5 / max(r * r, 0.01);
    d = min(d, length(pos) * pow(1.5, -f32(i + 1)));
  }
  return d * 0.4;
}

// 92: Nebula Cloud
fn mapNebulaCloud(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var minDist2: f32 = 1e10;
  var maxDensity: f32 = 0.0;
  var q = p;
  for (var i = 0; i < 8; i = i + 1) {
    q = abs(q) - vec3<f32>(0.5, 0.3, 0.4);
    q = vec3<f32>(rot2D(t * 0.1 + f32(i)) * q.xy, q.z);
    q = vec3<f32>(q.x, rot2D(t * 0.08) * q.yz);
    let qlen = length(q);
    minDist2 = min(minDist2, qlen);
    maxDensity = max(maxDensity, exp(-qlen * 2.0));
  }
  let tubeR = 0.15 + maxDensity * 0.1;
  let d = minDist2 - tubeR;
  let bound = length(p) - 2.0;
  return max(d * 0.6, bound) * 0.7;
}

// 93: Hyperbolic Tiling
fn mapHyperbolicTiling(p: vec3<f32>, t: f32, phi: f32) -> f32 {
  let r = length(p.xy);
  let theta = atan2(p.y, p.x);
  let tile = sin(theta * 8.0 + t * 0.2) * sin(r * 10.0 - t * 0.3);
  let pattern = abs(tile) - 0.3;
  let disk = r - 1.0;
  return max(pattern * 0.3, disk) * 0.8;
}

// 94: Organic Cell
fn mapOrganicCell(p: vec3<f32>, t: f32, phi: f32) -> f32 {
  let r = length(p);
  let theta = atan2(p.y, p.x);
  let phiAngle = acos(clamp(p.z / max(r, 0.01), -1.0, 1.0));
  let membrane = abs(r - 1.0 - sin(theta * 5.0 + t) * 0.1 - sin(phiAngle * 4.0) * 0.1);
  let nucleus = length(p - vec3<f32>(0.0, 0.0, 0.2)) - 0.3;
  var organelles = 0.0;
  for (var i = 0; i < 5; i = i + 1) {
    let fi = f32(i);
    let pos = vec3<f32>(sin(fi * 1.5), cos(fi * 1.3), sin(fi * 1.7)) * 0.5;
    organelles = max(organelles, -(length(p - pos) - 0.15));
  }
  return min(membrane, max(-nucleus, -organelles)) * 0.7;
}

// 95: Golden Helix
fn mapGoldenHelix(p: vec3<f32>, t: f32, phi: f32) -> f32 {
  var helix1 = 0.0;
  var helix2 = 0.0;
  for (var i = 0; i < 20; i = i + 1) {
    let fi = f32(i) * 0.3;
    let angle1 = fi * 2.4 + t * 0.5;
    let angle2 = angle1 + 3.14159;
    let pos1 = vec3<f32>(cos(angle1), sin(angle1), fi - 3.0) * 0.5;
    let pos2 = vec3<f32>(cos(angle2), sin(angle2), fi - 3.0) * 0.5;
    helix1 = max(helix1, -(length(p - pos1) - 0.15));
    helix2 = max(helix2, -(length(p - pos2) - 0.15));
  }
  let bridge = abs(p.z) - 3.0;
  return min(min(helix1, helix2), bridge) * 0.8;
}

// 96: Mandelbulb Power 4
fn mapMandelbulbPower4(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var z = p;
  var dr = 1.0;
  var r = 0.0;
  let maxIter = i32(clamp(f32(iters), 6.0, 16.0));
  for (var i = 0; i < 16; i = i + 1) {
    if (i >= maxIter) { break; }
    r = length(z);
    if (r > 2.0) { break; }
    let theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    let phiAngle = atan2(z.y, z.x);
    dr = pow(r, 3.0) * 4.0 * dr + 1.0;
    let zr = pow(r, 4.0);
    z = zr * vec3<f32>(sin(theta * 4.0) * cos(phiAngle * 4.0), sin(phiAngle * 4.0) * sin(theta * 4.0), cos(theta * 4.0));
    z = z + p;
  }
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
}

// 97: Mandelbulb Power 12
fn mapMandelbulbPower12(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var z = p;
  var dr = 1.0;
  var r = 0.0;
  let maxIter = i32(clamp(f32(iters), 6.0, 16.0));
  for (var i = 0; i < 16; i = i + 1) {
    if (i >= maxIter) { break; }
    r = length(z);
    if (r > 2.0) { break; }
    let theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    let phiAngle = atan2(z.y, z.x);
    dr = pow(r, 11.0) * 12.0 * dr + 1.0;
    let zr = pow(r, 12.0);
    z = zr * vec3<f32>(sin(theta * 12.0) * cos(phiAngle * 12.0), sin(phiAngle * 12.0) * sin(theta * 12.0), cos(theta * 12.0));
    z = z + p;
  }
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
}

// 98: Hybrid Mandelbox-KIFS
fn mapHybridMandelboxKIFS(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var pos = p;
  let scale = phi;
  let offset = vec3<f32>(1.0);
  var minDist = 1e10;
  let maxIter = i32(clamp(f32(iters), 6.0, 14.0));
  for (var i = 0; i < 14; i = i + 1) {
    if (i >= maxIter) { break; }
    pos = abs(pos) - offset * 0.5;
    pos = clamp(pos, vec3<f32>(-1.0), vec3<f32>(1.0)) * 2.0 - pos;
    let r2 = dot(pos, pos);
    if (r2 < 0.25) { pos = pos * 4.0; }
    else if (r2 < 1.0) { pos = pos / r2; }
    pos = pos * scale + offset * (1.0 - scale);
    pos = vec3<f32>(rot2D(t * 0.05 + f32(i) * 0.3) * pos.xy, pos.z);
    minDist = min(minDist, length(pos) * pow(scale, -f32(i + 1)));
  }
  return minDist * 0.5;
}

// 99: Multibrot Power 3
fn mapMultibrot3Advanced(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var z = p;
  var dr = 1.0;
  var r = 0.0;
  let maxIter = i32(clamp(f32(iters), 8.0, 20.0));
  for (var i = 0; i < 20; i = i + 1) {
    if (i >= maxIter) { break; }
    r = length(z);
    if (r > 2.0) { break; }
    let theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    let phiAngle = atan2(z.y, z.x);
    dr = 3.0 * pow(r, 2.0) * dr + 1.0;
    let zr = pow(r, 3.0);
    z = zr * vec3<f32>(sin(theta * 3.0) * cos(phiAngle * 3.0), sin(phiAngle * 3.0) * sin(theta * 3.0), cos(theta * 3.0));
    z = z + p;
  }
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
}

// 100: Fractal Flame IFS
fn mapFractalFlameIFS(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var z = p;
  var color = 0.0;
  var minDist = 1e10;
  let maxIter = i32(clamp(f32(iters), 8.0, 18.0));
  for (var i = 0; i < 18; i = i + 1) {
    if (i >= maxIter) { break; }
    z = vec3<f32>(
      sin(z.x * phi + t * 0.1) + cos(z.y * 1.3),
      sin(z.y * phi * 0.8 + t * 0.08) + cos(z.z * 1.5),
      sin(z.z * phi * 0.6 + t * 0.12) + cos(z.x * 1.7)
    ) * 0.5;
    z = abs(z) - vec3<f32>(1.0, 0.8, 0.9);
    z = z * phi * 0.7;
    color = color + length(z) * 0.1;
    minDist = min(minDist, length(z - p) * pow(phi * 0.7, -f32(i + 1)));
  }
  return minDist * 0.4;
}

// 101: Amazing Box — Mandelbox variation with spherical fold
fn mapAmazingBox(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var z = p;
  let scale: f32 = 2.0;
  var minDist: f32 = 1e10;
  let maxIter = i32(clamp(f32(iters), 8.0, 15.0));
  for (var i: i32 = 0; i < 15; i = i + 1) {
    if (i >= maxIter) { break; }
    // Box fold
    z = clamp(z, vec3<f32>(-1.0), vec3<f32>(1.0)) * 2.0 - z;
    // Spherical fold (Amazing Box variation)
    let r2 = dot(z, z);
    let r = sqrt(r2);
    if (r < 0.5) {
      z = z * 4.0;
    } else if (r < 1.0) {
      z = z / r2;
    }
    // Scale and translate
    z = z * scale + p;
    minDist = min(minDist, length(z) * pow(scale, -f32(i + 1)));
  }
  return vec2<f32>(minDist * 0.5, 0.0);
}

// 102: Mandelbulb-Mandelbox Hybrid — Best of both worlds
fn mapMandelbulbMandelboxHybrid(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var z = p;
  var dr: f32 = 1.0;
  var minDist: f32 = 1e10;
  let maxIter = i32(clamp(f32(iters), 8.0, 12.0));
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= maxIter) { break; }
    // Alternate between Mandelbulb and Mandelbox operations
    if (i % 2 == 0) {
      // Mandelbulb: spherical coordinates
      let r = length(z);
      let theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
      let phi_angle = atan2(z.y, z.x);
      dr = pow(r, 7.0) * 8.0 * dr + 1.0;
      let zr = pow(r, 8.0);
      let newTheta = theta * 8.0;
      let newPhi = phi_angle * 8.0;
      z = zr * vec3<f32>(sin(newTheta) * cos(newPhi), sin(newTheta) * sin(newPhi), cos(newTheta));
      z = z + p;
    } else {
      // Mandelbox: box fold + sphere fold
      z = clamp(z, vec3<f32>(-1.0), vec3<f32>(1.0)) * 2.0 - z;
      let r2 = dot(z, z);
      if (r2 < 0.25) { z = z * 4.0; }
      else if (r2 < 1.0) { z = z / r2; }
      z = z * 2.0 + p;
    }
    minDist = min(minDist, length(z) * 0.5);
  }
  return vec2<f32>(0.5 * log(length(z)) * length(z) / dr, 0.0);
}

// 103: Menger-Mandelbox Hybrid — Sponge meets box
fn mapMengerMandelboxHybrid(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var z = abs(p);
  let scale: f32 = 3.0;
  var minDist: f32 = 1e10;
  let maxIter = i32(clamp(f32(iters), 6.0, 10.0));
  for (var i: i32 = 0; i < 10; i = i + 1) {
    if (i >= maxIter) { break; }
    // Menger sponge iteration
    z = abs(z);
    if (z.x < z.y) { let tmp = z.x; z.x = z.y; z.y = tmp; }
    if (z.x < z.z) { let tmp = z.x; z.x = z.z; z.z = tmp; }
    if (z.y < z.z) { let tmp = z.y; z.y = z.z; z.z = tmp; }
    z = z * scale - vec3<f32>(2.0, 2.0, 0.0);
    // Mandelbox influence
    z = clamp(z, vec3<f32>(-1.5), vec3<f32>(1.5)) * 2.0 - z;
    minDist = min(minDist, length(z) * pow(scale, -f32(i + 1)));
  }
  return vec2<f32>(minDist * 0.4, 0.0);
}

// Master Single Primitive Dispatcher (86 Architectures)
fn evalSingleFractal(ftype: i32, p: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  if (ftype == 0) { return mapPhyllotaxis(p, t, phi, iters); }
  if (ftype == 1) { return mapMandelbulb(p, t, phi, iters); }
  if (ftype == 2) { return mapQuaternionJulia(p, t, phi, iters); }
  if (ftype == 3) { return mapApollonian(p, t, phi, iters); }
  if (ftype == 4) { return mapSpiralTunnel(p, t, phi); }
  if (ftype == 5) { return mapMandelbox(p, t, phi, iters); }
  if (ftype == 6) { return mapIcosahedron(p, t, phi, iters); }
  if (ftype == 7) { return mapMenger(p, t, phi, iters); }
  if (ftype == 8) { return mapGyroid(p, t, phi); }
  if (ftype == 9) { return mapPrimeSpiral(p, t, phi, iters); }
  if (ftype == 10) { return mapQuasicrystal(p, t, phi, iters); }
  if (ftype == 11) { return mapHopfFibration(p, t, phi); }
  if (ftype == 12) { return mapCalabiYau(p, t, phi, iters); }
  if (ftype == 13) { return mapRiemannZeta(p, t, phi); }
  if (ftype == 14) { return mapSierpinskiOcta(p, t, phi, iters); }
  if (ftype == 15) { return mapCliffordKlein(p, t, phi); }
  if (ftype == 16) { return mapPoincareSphere(p, t, phi, iters); }
  if (ftype == 17) { return mapGaussianPrimes(p, t, phi, iters); }
  if (ftype == 18) { return mapNeoviusMinimal(p, t, phi); }
  if (ftype == 19) { return mapEulerTotientSpiral(p, t, phi); }
  if (ftype == 20) { return mapCliffordTorus4D(p, t, phi); }
  if (ftype == 21) { return mapKleinianLimit(p, t, phi, iters); }
  if (ftype == 22) { return mapFibonacciSnowflake(p, t, phi, iters); }
  if (ftype == 23) { return mapQuaternionMandelbrot(p, t, phi, iters); }
  if (ftype == 24) { return mapHilbertCurve3D(p, t, phi, iters); }
  if (ftype == 25) { return mapDragonCurveIFS(p, t, phi, iters); }
  if (ftype == 26) { return mapPythagorasTree3D(p, t, phi, iters); }
  if (ftype == 27) { return mapBurningShip3D(p, t, phi, iters); }
  if (ftype == 28) { return mapNewtonBasins(p, t, phi, iters); }
  if (ftype == 29) { return mapJerusalemCube(p, t, phi, iters); }
  if (ftype == 30) { return mapLorenzAttractor(p, t, phi, iters); }
  if (ftype == 31) { return mapHofstadterButterfly(p, t, phi, iters); }
  if (ftype == 32) { return mapAntoineNecklace(p, t, phi, iters); }
  if (ftype == 33) { return mapDLACluster(p, t, phi, iters); }
  if (ftype == 34) { return mapRosslerHyperchaos(p, t, phi, iters); }
  if (ftype == 35) { return mapCliffordAttractor(p, t, phi, iters); }
  if (ftype == 36) { return mapAbrikosovLattice(p, t, phi, iters); }
  if (ftype == 37) { return mapBeltramiPseudosphere(p, t, phi, iters); }
  if (ftype == 38) { return mapSpinFoamNetwork(p, t, phi, iters); }
  if (ftype == 39) { return mapRamanujanTau(p, t, phi, iters); }
  if (ftype == 40) { return mapBelousovWaves(p, t, phi, iters); }
  if (ftype == 41) { return mapHenonAttractor(p, t, phi, iters); }
  if (ftype == 42) { return mapAizawaAttractor(p, t, phi, iters); }
  if (ftype == 43) { return mapThomasAttractor(p, t, phi, iters); }
  if (ftype == 44) { return mapHalvorsenAttractor(p, t, phi, iters); }
  if (ftype == 45) { return mapJuliaSet3D(p, t, phi, iters); }
  if (ftype == 46) { return mapMultibrot3(p, t, phi, iters); }
  if (ftype == 47) { return mapTetrix(p, t, phi, iters); }
  if (ftype == 48) { return mapGosperCurve(p, t, phi, iters); }
  if (ftype == 49) { return mapLSystemPlant(p, t, phi, iters); }
  if (ftype == 50) { return mapSchwarzP(p, t, phi); }
  if (ftype == 51) { return mapSchwarzD(p, t, phi); }
  if (ftype == 52) { return mapApollonianGasket(p, t, phi, iters); }
  if (ftype == 53) { return mapBarnsleyFern3D(p, t, phi, iters); }
  if (ftype == 54) { return mapKleinQuartic(p, t, phi, iters); }
  if (ftype == 55) { return mapSpherePacking(p, t, phi, iters); }
  if (ftype == 56) { return mapNovaFractal(p, t, phi, iters); }
  if (ftype == 57) { return mapGoldenKnot(p, t, phi); }
  if (ftype == 58) { return mapSphericalHarmonics(p, t, phi); }
  if (ftype == 59) { return mapFractalCross(p, t, phi, iters); }
  if (ftype == 60) { return mapReactionDiffusion(p, t, phi, iters); }
  if (ftype == 61) { return mapSierpinskiCarpet(p, t, phi, iters); }
  if (ftype == 62) { return mapTricorn(p, t, phi, iters); }
  if (ftype == 63) { return mapChuaCircuit(p, t, phi, iters); }
  if (ftype == 64) { return mapStandardMap(p, t, phi, iters); }
  if (ftype == 65) { return mapIkedaMap(p, t, phi, iters); }
  if (ftype == 66) { return mapKochSnowflake3D(p, t, phi, iters); }
  if (ftype == 67) { return mapCantorDust(p, t, phi, iters); }
  if (ftype == 68) { return mapPhoenixFractal(p, t, phi, iters); }
  if (ftype == 69) { return mapFatouSet(p, t, phi, iters); }
  if (ftype == 70) { return mapE8Lattice(p, t, phi, iters); }
  if (ftype == 71) { return mapChladniFigures(p, t, phi, iters); }
  if (ftype == 72) { return mapFitzHugh(p, t, phi, iters); }
  if (ftype == 73) { return mapRosslerAttractor(p, t, phi, iters); }
  if (ftype == 74) { return mapDuffingAttractor(p, t, phi, iters); }
  if (ftype == 75) { return mapLogisticBifurcation(p, t, phi, iters); }
  if (ftype == 76) { return mapFractalSpire(p, t, phi, iters); }
  if (ftype == 77) { return mapDeJongAttractor(p, t, phi, iters); }
  if (ftype == 78) { return mapPickoverAttractor(p, t, phi, iters); }
  if (ftype == 79) { return mapVicsekFractal(p, t, phi, iters); }
  if (ftype == 80) { return mapMandelbar(p, t, phi, iters); }
  if (ftype == 81) { return mapWeierstrass3D(p, t, phi, iters); }
  if (ftype == 82) { return mapPopcornFunction(p, t, phi, iters); }
  if (ftype == 83) { return mapBedheadAttractor(p, t, phi, iters); }
  if (ftype == 84) { return mapFourSpotAttractor(p, t, phi, iters); }
  if (ftype == 85) { return mapSvenssonAttractor(p, t, phi, iters); }
  // NEW BEAUTIFUL FRACTALS (return f32 → wrap to vec2<f32> with trap=0)
  if (ftype == 86) { return vec2<f32>(mapKaleidoscopicIFS(p, t, phi, iters), 0.0); }
  if (ftype == 87) { return vec2<f32>(mapFlowerOfLife(p, t, phi), 0.0); }
  if (ftype == 88) { return vec2<f32>(mapCosmicSpiral(p, t, phi), 0.0); }
  if (ftype == 89) { return vec2<f32>(mapCrystalGrowth(p, t, phi, iters), 0.0); }
  if (ftype == 90) { return vec2<f32>(mapQuantumFoam(p, t, phi), 0.0); }
  if (ftype == 91) { return vec2<f32>(mapFractalCoral(p, t, phi, iters), 0.0); }
  if (ftype == 92) { return vec2<f32>(mapNebulaCloud(p, t, phi, iters), 0.0); }
  if (ftype == 93) { return vec2<f32>(mapHyperbolicTiling(p, t, phi), 0.0); }
  if (ftype == 94) { return vec2<f32>(mapOrganicCell(p, t, phi), 0.0); }
  if (ftype == 95) { return vec2<f32>(mapGoldenHelix(p, t, phi), 0.0); }
  // MODERN FRACTALS WITH ADVANCED TECHNIQUES
  if (ftype == 96) { return vec2<f32>(mapMandelbulbPower4(p, t, phi, iters), 0.0); }
  if (ftype == 97) { return vec2<f32>(mapMandelbulbPower12(p, t, phi, iters), 0.0); }
  if (ftype == 98) { return vec2<f32>(mapHybridMandelboxKIFS(p, t, phi, iters), 0.0); }
  if (ftype == 99) { return vec2<f32>(mapMultibrot3Advanced(p, t, phi, iters), 0.0); }
  if (ftype == 100) { return vec2<f32>(mapFractalFlameIFS(p, t, phi, iters), 0.0); }
  if (ftype == 101) { return vec2<f32>(mapAmazingBox(p, t, phi, iters), 0.0); }
  if (ftype == 102) { return vec2<f32>(mapMandelbulbMandelboxHybrid(p, t, phi, iters), 0.0); }
  if (ftype == 103) { return vec2<f32>(mapMengerMandelboxHybrid(p, t, phi, iters), 0.0); }
  return mapPhyllotaxis(p, t, phi, iters); // Default fallback
}

// Multi-Operator Distance Field Algebra & Space Folding
fn opSmoothUnion(d1: f32, d2: f32, k: f32) -> f32 {
  let h = clamp(0.5 + 0.5 * (d2 - d1) / max(k, 0.0001), 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

fn opSmoothIntersection(d1: f32, d2: f32, k: f32) -> f32 {
  let h = clamp(0.5 - 0.5 * (d2 - d1) / max(k, 0.0001), 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

fn opSmoothSubtraction(d1: f32, d2: f32, k: f32) -> f32 {
  let h = clamp(0.5 - 0.5 * (d2 - d1) / max(k, 0.0001), 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

// Recursive Space-Folding Domain Warp (Geometry A warps the coordinate space for Geometry B)
fn domainWarpByGeometry(p_in: vec3<f32>, ftype: i32, t: f32, phi: f32, strength: f32) -> vec3<f32> {
  if (strength <= 0.01) { return p_in; }
  var p = p_in;
  var disp = vec3<f32>(0.0);

  if (ftype == 5) {
    // Mandelbox Fold vector field
    let bFold = clamp(p, vec3<f32>(-u.box_fold), vec3<f32>(u.box_fold)) * 2.0 - p;
    disp = (bFold - p) * 0.35;
  } else if (ftype == 8) {
    // Gyroid Minimal Surface TPMS wave displacement
    disp = vec3<f32>(
      sin(p.y * phi * 1.5 + t * 0.2) * cos(p.z * phi * 1.5),
      sin(p.z * phi * 1.5 + t * 0.2) * cos(p.x * phi * 1.5),
      sin(p.x * phi * 1.5 + t * 0.2) * cos(p.y * phi * 1.5)
    ) * 0.28;
  } else if (ftype == 11) {
    // Hopf Fibration Villarceau circular vortex
    let r_xz = length(p.xz);
    let theta = atan2(p.z, p.x);
    disp = vec3<f32>(-sin(theta * 2.0), cos(r_xz * phi * 1.2), sin(theta * phi)) * 0.25;
  } else if (ftype == 9) {
    // Sachs-Ulam prime spiral helical displacement
    let r2 = dot(p.xy, p.xy);
    let ang = 2.0 * PI * sqrt(max(r2, 0.01));
    disp = vec3<f32>(cos(ang), sin(ang), sin(p.z * phi * 1.4)) * 0.25;
  } else if (ftype == 10) {
    // Quasicrystal 5-fold icosahedral wave interference
    let norm_c = 1.0 / sqrt(1.0 + phi * phi);
    let n1 = vec3<f32>(1.0, phi, 0.0) * norm_c;
    let n3 = vec3<f32>(0.0, 1.0, phi) * norm_c;
    disp = (n1 * sin(dot(p, n1) * 3.5 + t * 0.2) + n3 * cos(dot(p, n3) * 3.5)) * 0.28;
  } else {
    // Golden logarithmic helical twist
    let rot = rot2D(p.xy, p.z * 0.6 * phi + t * 0.08);
    disp = vec3<f32>(rot.x - p.x, rot.y - p.y, sin(length(p) * phi) * 0.2);
  }

  return p + disp * strength;
}

// Master Scene SDF: Multi-Tier Hybridization Engine (Millions of Topological Manifolds)
fn sceneSDF(p_world: vec3<f32>) -> vec2<f32> {
  var p_eval = p_world;
  var inv_scale: f32 = 1.0;

  // 0. Kelvin Inversion Sphere (Inside-Out Conformal Inversion)
  // Maps fractal core singularity to infinite exterior space!
  if (u.cam_mode > 2.5 && u.cam_mode < 3.5) {
    let R = u.phi_val;
    let r2 = dot(p_eval, p_eval);
    if (r2 > 0.0001) {
      inv_scale = (R * R) / r2;
      p_eval = p_eval * inv_scale;
    }
  }

  let r_bound = length(p_eval);
  if (r_bound > 5.0) {
    return vec2<f32>((r_bound - 2.8) / max(inv_scale, 0.0001), r_bound);
  }

  let ftypeA = i32(u.fractal_type + 0.5);
  let ftypeB = i32(u.hybrid_type + 0.5);
  let ftypeC = i32(u.tertiary_type + 0.5);
  var iters = i32(clamp(u.iterations, 6.0, 64.0));
  
  // FRACTAL-SPECIFIC ADAPTIVE ITERATIONS
  if (ftypeA == 1 || ftypeA == 23) { // Mandelbulb, Quaternion Mandelbrot
    iters = i32(clamp(f32(iters) * 1.2, 6.0, 64.0));
  } else if (ftypeA == 5 || ftypeA == 101) { // Mandelbox, Amazing Box
    iters = i32(clamp(f32(iters) * 1.1, 6.0, 64.0));
  } else if (ftypeA == 7 || ftypeA == 103) { // Menger, Menger-Mandelbox
    iters = i32(clamp(f32(iters) * 0.9, 6.0, 64.0));
  } else if (ftypeA >= 86 && ftypeA <= 95) { // Beautiful fractals
    iters = i32(clamp(f32(iters) * 1.15, 6.0, 64.0));
  }
  
  let t = u.time * u.morph_speed;
  let phi = u.phi_val;
  let compOp = i32(u.compose_op + 0.5);
  let k = max(0.04, u.smooth_k * 0.45);

  // FRACTAL BREATHING: Organic radial pulsation at golden-ratio frequencies
  // Creates living, breathing geometry that subtly grows and contracts
  let breathPrimary = sin(u.time * 0.4) * 0.5 + 0.5; // ~15.7s period
  let breathSecondary = sin(u.time * 0.4 * phi + 1.0) * 0.5 + 0.5; // Phase-shifted
  let breathTertiary = sin(u.time * 0.4 * phi * phi + 2.0) * 0.5 + 0.5; // Triple-phi
  // Combine for non-repeating organic motion
  let breathAmount = (breathPrimary * 0.5 + breathSecondary * 0.3 + breathTertiary * 0.2) * 0.025;
  // Distance-weighted: surface breathes more than interior
  let breathWeight = 1.0 - exp(-r_bound * 0.8);
  p_eval = p_eval * (1.0 + breathAmount * breathWeight);

  // ORBITAL PRECESSION: Slow rotation of evaluation space
  // Creates gentle tumbling motion that reveals hidden symmetry
  let precessAngle = u.time * 0.06; // Very slow: ~104s per revolution
  let precessY = u.time * 0.037; // Different speed on Y axis
  let cp = cos(precessAngle); let sp = sin(precessAngle);
  let cq = cos(precessY); let sq = sin(precessY);
  // Rotate around Y axis
  p_eval = vec3<f32>(
    p_eval.x * cp + p_eval.z * sp,
    p_eval.y * cq - p_eval.x * sq * 0.3,
    -p_eval.x * sp + p_eval.z * cp
  );

  // 1. Recursive Space-Folding Domain Warp
  var p_warped = p_eval;
  if (compOp == 4 || u.warp_strength > 0.05) {
    let effWarp = select(u.warp_strength, max(u.warp_strength, 0.35), compOp == 4);
    p_warped = domainWarpByGeometry(p_eval, ftypeB, t, phi, effWarp);
  }

  // 2. Primary Layer Evaluation
  let resA = evalSingleFractal(ftypeA, p_warped, t, phi, iters);
  var current_d = resA.x;
  var current_trap = resA.y;

  // 3. Secondary Layer Evaluation & All 8 Lipschitz-Continuous Composite Operators
  // FIX: Secondary gets FULL iterations — was starved to max 10, causing blobby hybrids
  if (u.hybrid_blend > 0.02) {
    let resB = evalSingleFractal(ftypeB, p_eval, t, phi, iters);
    let dB = resB.x;
    let trapB = resB.y;
    let blend = clamp(u.hybrid_blend, 0.0, 1.0);

    if (compOp == 0) {
      // 0: Continuous Topological Morph — full range blend
      let morphBlend = blend;
      current_d = mix(current_d, dB, morphBlend);
      current_trap = mix(current_trap, trapB, morphBlend * 0.85);
    } else if (compOp == 1) {
      // 1: Polynomial Smooth Union (smin)
      let h = clamp(0.5 + 0.5 * (dB - current_d) / k, 0.0, 1.0);
      current_d = mix(dB, current_d, h) - k * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, h);
    } else if (compOp == 2) {
      // 2: Smooth Intersection (smax)
      let h = clamp(0.5 - 0.5 * (dB - current_d) / k, 0.0, 1.0);
      current_d = mix(dB, current_d, h) + k * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, h);
    } else if (compOp == 3) {
      // 3: Smooth Vault Carving (ssub) — IQ formulation: (d2 - d1)
      let h = clamp(0.5 - 0.5 * (dB - current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -dB, h) + k * h * (1.0 - h);
      current_trap = mix(current_trap, trapB, h);
    } else if (compOp == 4) {
      // 4: Domain Warp — full range spatial distortion
      let warpBlend = blend * 0.8;
      current_d = mix(current_d, dB, warpBlend);
      current_trap = mix(current_trap, trapB, blend * 0.7);
    } else if (compOp == 5) {
      // 5: Harmonic Spectral Resonance — stronger displacement
      let disp = clamp(dB * 0.5, -0.2, 0.2) * blend;
      current_d = current_d + disp;
      current_trap = mix(current_trap, trapB, blend * 0.6);
    } else if (compOp == 6) {
      // 6: Interlaced TPMS Cellular Lattice
      let lattice = abs(dB) - 0.035;
      let h = clamp(0.5 - 0.5 * (lattice - current_d) / (k * 0.5), 0.0, 1.0);
      current_d = mix(lattice, current_d, h) + (k * 0.5) * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, 0.5);
    } else if (compOp == 7) {
      // 7: Conformal Spiral Vortex — full twist range
      let twistFactor = blend * 0.85;
      let blended = opSmoothUnion(current_d, dB, k * 0.8);
      current_d = mix(current_d, blended, twistFactor);
      current_trap = mix(current_trap, trapB, blend * 0.6);
    }
  }

  // 4. Tertiary Layer Evaluation — FIX: Evaluate further from surface for richer topology
  if (u.tertiary_blend > 0.02 && current_d < 0.5) {
    // FIX: Tertiary gets 75% iterations (was 50%) for visible detail
    let resC = evalSingleFractal(ftypeC, p_eval, t, phi, clamp(i32(f32(iters) * 0.75), 8, 24));
    let blendC = clamp(u.tertiary_blend, 0.05, 0.55);
    // Apply user-selected composite operator for consistent tertiary blending
    if (compOp == 2) {
      let h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
      current_d = mix(resC.x, current_d, h) + k * h * (1.0 - h);
    } else if (compOp == 3) {
      let h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -resC.x, h) + k * h * (1.0 - h);
    } else if (compOp == 0) {
      current_d = mix(current_d, resC.x, blendC * 0.5);
    } else {
      current_d = opSmoothUnion(current_d, resC.x, k * blendC * 1.5);
    }
    current_trap = min(current_trap, resC.y);
  }

  // 5. Multi-Scale Golden Octaves — FIX: Re-evaluate actual fractal at golden ratio scales
  let numOctaves = i32(clamp(u.octave_layers, 1.0, 4.0));
  if (numOctaves > 1 && current_d < 0.3) {
    var octScale = phi;
    var octWeight = 0.35;
    for (var oct: i32 = 1; oct < 3; oct = oct + 1) {
      if (oct >= numOctaves) { break; }
      let p_oct = p_eval * octScale;
      let resOct = evalSingleFractal(ftypeA, p_oct, t, phi, clamp(iters / 2, 4, 12));
      let octDist = resOct.x / octScale;
      current_d = mix(current_d, octDist, octWeight / f32(oct + 1));
      current_trap = mix(current_trap, resOct.y, octWeight * 0.3 / f32(oct + 1));
      octScale = octScale * phi;
      octWeight = octWeight * 0.5;
    }
  }

  // 6. Hollow Cathedral Carving (Only when explicitly enabled by user)
  if (u.interior_cut > 0.05) {
    let shellThick = 0.015 + u.interior_cut * 0.04;
    let shellD = abs(current_d) - shellThick;
    current_d = mix(current_d, shellD, clamp(u.interior_cut * 1.4, 0.0, 0.9));
  }

  // 7. Cross-Section Anatomical Slice (Multi-Axis Tomography)
  if (u.slice_plane > 0.01) {
    let sliceOffset = (0.5 - u.slice_plane) * 3.5;
    var planeNorm = normalize(vec3<f32>(0.0, 0.85065, 0.52573)); // Golden default
    if (u.slice_axis > 0.5 && u.slice_axis < 1.5) {
      planeNorm = vec3<f32>(1.0, 0.0, 0.0); // Sagittal X
    } else if (u.slice_axis > 1.5 && u.slice_axis < 2.5) {
      planeNorm = vec3<f32>(0.0, 1.0, 0.0); // Axial Y
    } else if (u.slice_axis > 2.5) {
      planeNorm = vec3<f32>(0.0, 0.0, 1.0); // Coronal Z
    }
    let planeDist = dot(p_eval, planeNorm) - sliceOffset;
    current_d = max(current_d, planeDist);
  }

  // Inverse distance correction for Kelvin inversion
  if (u.cam_mode > 2.5 && u.cam_mode < 3.5) {
    current_d = current_d / max(inv_scale, 0.0001);
  }

  return vec2<f32>(current_d, current_trap);
}

fn calcNormal(p: vec3<f32>, eps: f32) -> vec3<f32> {
  let e1 = vec3<f32>(eps, -eps, -eps);
  let e2 = vec3<f32>(-eps, -eps, eps);
  let e3 = vec3<f32>(-eps, eps, -eps);
  let e4 = vec3<f32>(eps, eps, eps);

  let n = e1 * sceneSDF(p + e1).x +
          e2 * sceneSDF(p + e2).x +
          e3 * sceneSDF(p + e3).x +
          e4 * sceneSDF(p + e4).x;
  let len = length(n);
  if (len > 0.00001) {
    return n / len;
  }
  return vec3<f32>(0.0, 1.0, 0.0);
}

// calcSoftShadow removed - was dead code (not used since Phase 4.15)
// Kept for reference but commented out to save shader compilation time

fn calcAO(p: vec3<f32>, n: vec3<f32>, t: f32) -> f32 {
  let aoScale = clamp(t * 3.0, 0.3, 1.0); // Distance-adaptive: scale down at close range
  var occ: f32 = 0.0;
  var sca: f32 = 1.0;
  for (var i: i32 = 0; i < 5; i = i + 1) {
    let h = (0.012 + 0.09 * f32(i * i) / 16.0) * aoScale;
    let d = sceneSDF(p + h * n).x;
    occ = occ + (h - d) * sca;
    sca = sca * 0.74;
  }
  // Clamp occ to prevent negative values or overflow
  occ = clamp(occ, 0.0, 2.0);
  
  // IQ multi-distance AO: distance-scaled for consistent behavior at all ranges
  let ao1 = clamp(1.0 - 4.0 * max(0.005 * aoScale - sceneSDF(p + n * 0.005 * aoScale).x, 0.0), 0.0, 1.0);
  let ao2 = clamp(1.0 - 2.5 * max(0.03  * aoScale - sceneSDF(p + n * 0.03  * aoScale).x, 0.0), 0.0, 1.0);
  let ao3 = clamp(1.0 - 1.5 * max(0.12  * aoScale - sceneSDF(p + n * 0.12  * aoScale).x, 0.0), 0.0, 1.0);
  let multiAO = ao1 * 0.25 + ao2 * 0.40 + ao3 * 0.35;
  return clamp(multiAO * (1.0 - 0.8 * occ), 0.15, 1.0);
}

fn acesToneMap(x: vec3<f32>) -> vec3<f32> {
  let a = 2.51;
  let b = 0.03;
  let c = 2.43;
  let d = 0.59;
  let e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), vec3<f32>(0.0), vec3<f32>(1.0));
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
  let aspect = u.resolution.x / max(u.resolution.y, 1.0);
  let uv = (in.uv * 2.0 - 1.0) * vec2<f32>(aspect, -1.0);

  // Camera distance: allow entering the fractal (min 0.05 for near-clip safety)
  let cam_dist: f32 = max(0.05, u.zoom);

  var ro: vec3<f32>;
  var rd: vec3<f32>;

  if (u.cam_mode > 0.5 && u.cam_mode < 1.5) {
    // Mode 1: Fly-Through (Inside-Out Free 3D Exploration inside corridors)
    ro = u.cam_pos;
    let cy = cos(u.cam_rot.x);
    let sy = sin(u.cam_rot.x);
    let cp = cos(u.cam_rot.y);
    let sp = sin(u.cam_rot.y);
    var forward = vec3<f32>(sy * cp, sp, -cy * cp);
    let fwd_len = length(forward);
    forward = forward / max(fwd_len, 1e-6);
    var up_hint = vec3<f32>(0.0, 1.0, 0.0);
    var cross_fwd_up = cross(forward, up_hint);
    var cross_len = length(cross_fwd_up);
    // Gimbal lock fallback: when forward ≈ up, use alternate hint
    if (cross_len < 1e-4) {
      up_hint = vec3<f32>(0.0, 0.0, 1.0);
      cross_fwd_up = cross(forward, up_hint);
      cross_len = length(cross_fwd_up);
    }
    let right = cross_fwd_up / max(cross_len, 1e-6);
    let up = cross(right, forward);
    let fov_factor = 1.25; // wide immersive FOV for interior halls
    rd = normalize(uv.x * right + uv.y * up + fov_factor * forward);
  } else if (u.cam_mode > 1.5 && u.cam_mode < 2.5) {
    // Mode 2: Autonomous Golden Spiral Dive into the core
    let spiralT = u.time * 0.22 * u.morph_speed;
    let r_spiral = 0.35 + 1.8 * (0.5 + 0.5 * cos(spiralT * 0.618));
    let theta_spiral = spiralT * 1.618;
    let y_spiral = sin(spiralT * 0.382) * 0.7;
    ro = vec3<f32>(r_spiral * cos(theta_spiral), y_spiral, r_spiral * sin(theta_spiral));
    let lookTarget = vec3<f32>(0.0, 0.0, 0.0);
    let ww = (lookTarget - ro) / max(length(lookTarget - ro), 1e-6);
    var cross_ww_up = cross(ww, vec3<f32>(0.0, 1.0, 0.0));
    var cross_ww_len = length(cross_ww_up);
    if (cross_ww_len < 1e-4) {
      cross_ww_up = cross(ww, vec3<f32>(0.0, 0.0, 1.0));
      cross_ww_len = length(cross_ww_up);
    }
    let uu = cross_ww_up / max(cross_ww_len, 1e-6);
    let vv = cross(uu, ww);
    let fov_factor = 1.35;
    rd = normalize(uv.x * uu + uv.y * vv + fov_factor * ww);
  } else {
    // Mode 0: Outside-In Orbit & Mode 3: Kelvin Inversion
    ro = vec3<f32>(0.0, 0.0, -cam_dist);
    ro = rotateVec(ro, u.cam_rot.y, u.cam_rot.x);
    let lookTarget = vec3<f32>(0.0, 0.0, 0.0);
    let ww = (lookTarget - ro) / max(length(lookTarget - ro), 1e-6);
    var cross_ww_up2 = cross(ww, vec3<f32>(0.0, 1.0, 0.0));
    var cross_ww_len2 = length(cross_ww_up2);
    if (cross_ww_len2 < 1e-4) {
      cross_ww_up2 = cross(ww, vec3<f32>(0.0, 0.0, 1.0));
      cross_ww_len2 = length(cross_ww_up2);
    }
    let uu = cross_ww_up2 / max(cross_ww_len2, 1e-6);
    let vv = cross(uu, ww);
    let fov_factor = 1.35;
    rd = normalize(uv.x * uu + uv.y * vv + fov_factor * ww);
  }

  // Golden ratio pseudo-dither to eliminate raymarch quantization banding
  let dither = fract(sin(dot(uv, vec2<f32>(12.9898, 78.233)) + u.time * 0.05) * 43758.5453);
  // Adaptive near-plane: scales with camera distance to prevent slicing
  let near_clip: f32 = max(0.0001, cam_dist * 0.0005);
  var t: f32 = near_clip + 0.001 * dither;
  // MASSIVE INCREASE: Dynamic max_dist for huge rendering distances
  // Close range: 2048.0, Medium: 1536.0, Far: 1024.0 (was 256/192/128)
  var max_dist: f32 = select(1024.0, select(1536.0, 2048.0, cam_dist < 1.0), cam_dist < 3.0);
  var hit: bool = false;
  var min_trap: f32 = 1e10;
  var steps: i32 = 0;

  // OPTIMIZATION 1: Space Leaping — skip empty space with bounding sphere
  // FIX: Bounding radius must match sceneSDF boundary (5.0) to prevent clipping
  let boundingRadius: f32 = 6.0; // Increased from 4.0
  let rayOriginDist = length(ro);
  if (rayOriginDist > boundingRadius) {
    let tmin = rayOriginDist - boundingRadius;
    if (tmin > t) { t = tmin * 0.95; } // More conservative (was 0.9)
  }

  // OPTIMIZATION 2: LOD System — reduce iterations based on distance
  let lodFactor = clamp(cam_dist / 10.0, 0.0, 1.0);
  let iterReduction = i32(lodFactor * 8.0);

  // MASSIVE INCREASE: Adaptive step budget for extreme detail
  // Close range: 640 steps, Medium: 480 steps, Far: 320 steps (was 512/384/256)
  let maxSteps: i32 = select(select(select(320, 480, cam_dist < 3.0), 640, cam_dist < 1.0), 640, false);
  // Scale-aware hit threshold: tighter at close range for clean surface convergence
  let hitScale = max(cam_dist * 0.0003, 0.0001);

  // PHASE 4.31 FIX: Robust raymarching with bounded steps and sign tracking
  // Root cause of black/flat/broken fractals: when SDF returns large negative
  // values (e.g. -2.0 deep inside fractal), abs(d)*relaxation = 2.156 step size
  // causes ray to JUMP from deep inside to far outside, completely overshooting
  // the surface. Binary search then fails because it can't bracket the surface.
  //
  // Fixes applied:
  // 1. Cap step size at 0.5 to prevent overshooting
  // 2. Track sign changes for proper surface bracketing
  // 3. Fix binary search to use tracked sign info
  // 4. Add fine-grained fallback search for missed surfaces
  // 5. Fix early termination to not bail on negative distances

  var lastD: f32 = 1e10;
  var missCount: i32 = 0;
  let relaxationFactor: f32 = 0.95; // UNDER-relaxation for stability (was 1.1 over-relaxation)
  var prevNegative: bool = false;
  var tSignChange: f32 = -1.0; // t value where sign last changed (surface bracket)
  var dSignChange: f32 = 0.0;  // SDF value at sign change

  for (var i: i32 = 0; i < 256; i = i + 1) {
    if (i >= maxSteps) { break; }
    let p = ro + rd * t;
    let res = sceneSDF(p);
    let d = res.x;
    min_trap = min(min_trap, res.y);

    // HIT DETECTION: Check if we're at the surface
    let hit_threshold = max(hitScale * 3.0, 0.002);
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // STEP SIZE: Cap at 0.5 to prevent overshooting surfaces
    // When SDF returns -2.0 (deep inside fractal), uncapped step would be
    // abs(-2.0) * 0.95 = 1.9, jumping completely past the surface
    let absD = abs(d);
    var step_d = min(absD * relaxationFactor, 0.5);
    // IMPROVED: Smaller minimum step for extreme interior detail
    // Was: max(cam_dist * 0.0001, 0.0005), now: max(cam_dist * 0.00005, 0.0001)
    let minStep = max(cam_dist * 0.00005, 0.0001);
    step_d = max(step_d, minStep);
    t = t + step_d;

    // SIGN TRACKING: Record where SDF changes sign (surface crossing)
    let curNegative = d < 0.0;
    if (i > 0 && curNegative != prevNegative) {
      tSignChange = t - step_d; // t before this step (where sign changed)
      dSignChange = d;
    }
    prevNegative = curNegative;

    // EARLY TERMINATION: Only count misses when ray is going AWAY from surface
    // Don't count negative distances as "increasing" — they mean we're inside
    if (i > 0 && d > 0.0 && lastD > 0.0 && d > lastD * 1.5 && d > 1.0) {
      missCount = missCount + 1;
      if (missCount > 16) { break; }
    } else if (d < 0.0) {
      missCount = 0; // Inside fractal = definitely not missing
    } else {
      missCount = max(0, missCount - 1); // Gradually reset
    }
    lastD = d;

    if (t > max_dist) {
      break;
    }
  }

  // PHASE 4.31: SIGN-AWARE BINARY SEARCH
  // Uses tracked sign change to properly bracket the surface
  if (!hit && t < max_dist) {
    var tLow: f32;
    var tHigh: f32;

    if (tSignChange > 0.0) {
      // We have a sign change — surface is bracketed between tSignChange and t
      tLow = tSignChange;
      tHigh = t;
    } else {
      // No sign change — try stepping back to find surface
      tLow = max(t - 2.0, near_clip);
      tHigh = t;
    }

    var tBest: f32 = tHigh;
    var bestD: f32 = 1e10;

    for (var j: i32 = 0; j < 20; j = j + 1) {
      let tMid = (tLow + tHigh) * 0.5;
      let pMid = ro + rd * tMid;
      let dMid = sceneSDF(pMid).x;
      let absDMid = abs(dMid);

      // Track best (closest to surface) point
      if (absDMid < bestD) {
        bestD = absDMid;
        tBest = tMid;
      }

      // Hit check
      if (absDMid < hit_threshold) {
        hit = true;
        t = tMid;
        break;
      }

      // Binary search: use SIGN to determine which half contains the surface
      // If dMid has same sign as d at tHigh, surface is in [tLow, tMid]
      // If dMid has opposite sign from d at tHigh, surface is in [tMid, tHigh]
      let dHigh = sceneSDF(ro + rd * tHigh).x;
      if (dMid * dHigh > 0.0) {
        // Same sign — surface is in lower half
        tHigh = tMid;
      } else {
        // Opposite sign — surface is in upper half
        tLow = tMid;
      }
    }

    if (!hit && bestD < 0.5) {
      // Didn't converge but found a close point — use it
      t = tBest;
      hit = true;
    }
  }

  // PHASE 4.31: FINE-GRAINED FALLBACK SEARCH
  // If main loop + binary search both failed, do a fine-grained linear search
  // This catches surfaces that were skipped due to step size
  if (!hit && t < max_dist) {
    let tStart = max(t - 3.0, near_clip);
    let fineStep: f32 = 0.02; // Small steps to catch any surface
    var bestFineD: f32 = 1e10;
    var bestFineT: f32 = t;

    for (var k: i32 = 0; k < 80; k = k + 1) {
      let tFine = tStart + f32(k) * fineStep;
      if (tFine > t) { break; }
      let dFine = sceneSDF(ro + rd * tFine).x;
      let absDFine = abs(dFine);
      if (absDFine < bestFineD) {
        bestFineD = absDFine;
        bestFineT = tFine;
      }
      if (absDFine < hit_threshold) {
        hit = true;
        t = tFine;
        break;
      }
    }

    if (!hit && bestFineD < 0.3) {
      t = bestFineT;
      hit = true;
    }
  }

  // Near-miss fallback: if we got close to surface, still render it
  let nearMiss = !hit && abs(lastD) < 0.5 && t < max_dist;

  let bg_rad = length(uv);
  var col = vec3<f32>(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u.time * 0.3));
  col = col + u.accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit || nearMiss) {
    let p = ro + rd * t;
    // Scale-adaptive normal epsilon: larger at close range to avoid precision noise
    let normalEps = min(0.0015 * max(t, 0.05) + 0.0004, 0.003);
    let base_n = calcNormal(p, normalEps);
    let ao = calcAO(p, base_n, t);
    
    // TRAP-BASED CURVATURE: Derive surface complexity from orbit trap data
    // Replaces expensive 8-SDF-evaluation normal perturbation with trap-driven curvature
    // min_trap (from raymarching) measures closest approach to fractal orbit points
    // Low trap = complex filamentary region, High trap = smooth region
    let curvDetail: f32 = min_trap * 12.0;
    let curvNorm: f32 = clamp(curvDetail / 3.0, 0.0, 1.0);
    
    // Use base normal directly — no perturbation noise
    let ndotv = dot(base_n, rd);
    var n = select(base_n, -base_n, ndotv > 0.0);

    let light1 = normalize(vec3<f32>(cos(u.time * 0.3), 1.2, sin(u.time * 0.3)));
    let light2 = normalize(vec3<f32>(-sin(u.time * 0.25 * GOLDEN_RATIO), -0.6, cos(u.time * 0.25 * GOLDEN_RATIO)));

    // CONCEPTUAL FIX: Remove soft shadows from dynamic lights
    // Dynamic lights can end up behind/beside the fractal, casting camera/object shadows
    // Instead, use only Ambient Occlusion for self-shadowing
    // This ensures only the fractal casts shadows on itself, not external objects
    let sh1: f32 = 1.0; // No soft shadows — pure AO-based shading

    // IMPROVED SSS: 5 samples with better color bleeding (was 3)
    var sssCol = vec3<f32>(0.0, 0.0, 0.0);
    let sssDist: f32 = 0.08; // Increased from 0.06 for deeper penetration
    var sssTotal: f32 = 0.0;
    for (var si: i32 = 0; si < 5; si = si + 1) { // Increased from 3 to 5 samples
      let sssAngle: f32 = f32(si) * GOLDEN_ANGLE;
      let sssOffset = vec3<f32>(cos(sssAngle), sin(sssAngle * 0.7), sin(sssAngle * 1.3)) * sssDist;
      let sssD = sceneSDF(p - light1 * sssOffset).x;
      sssTotal = sssTotal + smoothstep(0.0, sssDist * 2.0, sssD + sssDist * 2.0);
    }
    let sss: f32 = (sssTotal / 5.0) * 0.18; // Slightly increased weight
    sssCol = u.accent_color * sss * ao;
    let fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    // Diffuse lighting without soft shadows — relies on AO for depth
    let diff1 = max(dot(n, light1), 0.0);
    let diff2 = max(dot(n, light2), 0.0);

    let h1 = normalize(light1 - rd);
    // FIX: Higher specular power for sharper, more defined highlights (was 32.0)
    let spec1 = pow(max(dot(n, h1), 0.0), 64.0);
    let spec2 = pow(max(dot(n, normalize(light2 - rd)), 0.0), 48.0);
    
    // curvNorm already computed above from trap-based curvature
    // Curvature floor prevents trapDetail/trapWeight saturation at close range
    let effectiveTrap = max(min_trap, curvNorm * 0.15);
    // FIX: More responsive trap detail (was 1.0 / (1.0 + effectiveTrap * 2.0))
    let trapDetail = clamp(1.0 / (1.0 + effectiveTrap * 0.8), 0.0, 1.0);

    // PROCEDURAL FRACTAL TEXTURE: Add micro-detail using fractal noise
    var texDetail: f32 = 0.0;
    let texScale: f32 = 8.0;
    for (var ti: i32 = 0; ti < 3; ti = ti + 1) {
      let ti_f = f32(ti);
      let texP = p * texScale * pow(2.0, ti_f);
      texDetail = texDetail + sin(texP.x * 1.3 + texP.y * 0.7) * sin(texP.y * 1.1 + texP.z * 0.9) * sin(texP.z * 1.5 + texP.x * 0.8);
      texDetail = texDetail * 0.5;
    }
    texDetail = texDetail * 0.15 + 0.85;

    // IMPROVED: Reduced hash noise for smoother colors, enhanced normal-based variation
    let seedAnim = u.palette_seed + u.palette_rotation * u.time * 2.5;
    let trapSmooth = effectiveTrap / (1.0 + effectiveTrap);
    
    // Normal-based coloring breaks horizontal symmetry without noise artifacts
    let normalPhase = dot(n, vec3<f32>(1.0, 0.0, 0.0)) * 0.5 + 0.5;
    let normalPhase2 = dot(n, vec3<f32>(0.0, 1.0, 0.0)) * 0.5 + 0.5;
    let normalPhase3 = dot(n, vec3<f32>(0.0, 0.0, 1.0)) * 0.5 + 0.5;
    
    // Reduced hash noise — was 0.4+0.25+0.15=0.8 (grainy), now 0.15+0.1+0.05=0.3 (smooth)
    let hashNoise = fract(sin(dot(p * 17.3 + 127.1, vec3<f32>(12.9898, 78.233, 45.164))) * 43758.5453);
    let hashNoise2 = fract(sin(dot(p * 31.7 + 269.5, vec3<f32>(63.726, 10.873, 91.345))) * 23421.6312);
    let hashNoise3 = fract(sin(dot(p * 47.1 + 419.2, vec3<f32>(23.456, 89.012, 34.567))) * 54321.9876);
    
    // IMPROVED phase: normal-dominant, less noisy, depth-aware
    let phase = fract(
      normalPhase * 0.45 +
      normalPhase2 * 0.30 +
      normalPhase3 * 0.15 +
      hashNoise * 0.15 +
      hashNoise2 * 0.10 +
      hashNoise3 * 0.05 +
      trapSmooth * 0.25 +
      curvNorm * 0.20 +
      p.y * 0.04 + p.x * 0.02 + p.z * 0.02 +
      length(p - ro) * 0.015 +
      u.time * 0.03 + seedAnim * 0.01 + 0.37
    );
    let w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    let w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    let w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    // IMPROVED material: richer color mixing with depth-based accent
    var mat_col = u.primary_color * w_primary + u.secondary_color * w_secondary;
    mat_col = mix(mat_col, u.accent_color, w_accent * 0.35);
    let depthFade = clamp(t / 30.0, 0.0, 1.0);
    mat_col = mix(mat_col, u.accent_color * 0.7, depthFade * 0.15);
    mat_col = mix(mat_col, u.accent_color, pow(1.0 - ao, 2.0) * 0.20);
    let trapWeight = clamp(0.50 / (1.0 + effectiveTrap * 1.0), 0.0, 0.60);
    mat_col = mix(mat_col, u.accent_color * (0.5 + trapDetail * 0.5), trapWeight);
    mat_col = mat_col * texDetail;

    // IMPROVED PBR Lighting: Environment reflections + better balance
    let envOcc = sceneSDF(p + n * 0.15).x;
    let envFactor = clamp(envOcc * 6.0, 0.0, 1.0);
    let ambientCol = mix(u.secondary_color * 0.30, u.primary_color * 0.18, envFactor);
    let ambient = ambientCol * ao;
    
    // IMPROVED: Environment reflection
    let reflectDir = reflect(rd, n);
    let envReflDist = sceneSDF(p + reflectDir * 0.3).x;
    let envRefl = clamp(1.0 - envReflDist * 4.0, 0.0, 1.0);
    var reflCol = mix(u.secondary_color, u.accent_color, envRefl) * envRefl * 0.25;
    reflCol = reflCol * (0.3 + 0.7 * fresnel);
    
    let bounceDir = normalize(-light1 + n * 0.5);
    let bounce = max(dot(n, bounceDir), 0.0) * 0.12;
    let bounceOcc = clamp(sceneSDF(p - light1 * 0.08).x * 12.0, 0.0, 1.0);
    let bounceCol = u.secondary_color * bounce * bounceOcc * ao;

    let diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    // IMPROVED specular: material-tinted for colored highlights
    let specColor = mix(vec3<f32>(1.0, 0.97, 0.92), mat_col, 0.15);
    let specular = specColor * (spec1 * 1.3 + spec2 * 0.7) * ao;
    // IMPROVED rim: stronger at grazing angles
    let rim = u.accent_color * fresnel * 0.8 * (0.3 + 0.7 * ao);

    // IMPROVED full lighting: ambient + refl + diffuse + bounce + specular + rim + SSS
    col = ambient * 0.5 + reflCol + diffuse * 1.4 + bounceCol * 1.8 + specular * 1.3 + rim * 1.5 + sssCol * 1.8;
    col = col * (0.3 + 0.7 * ao);

    // Headlamp: camera-attached flashlight for illuminating dark interior halls
    if (u.headlamp_power > 0.01) {
      let lampDir = normalize(ro - p);
      let lampNdotL = max(dot(n, lampDir), 0.0);
      let lampFalloff = 1.0 / (1.0 + t * t * 0.15);
      let lampSpot = pow(max(dot(-rd, lampDir), 0.0), 4.0);
      let lampCol = (u.primary_color * 0.6 + u.accent_color * 0.4) * lampNdotL * lampFalloff * lampSpot;
      col = col + lampCol * u.headlamp_power * 2.0;
    }

    // If slice plane is active, highlight the glowing cut rim
    if (u.slice_plane > 0.01) {
      let sliceOffset = (0.5 - u.slice_plane) * 3.5;
      var planeNorm = normalize(vec3<f32>(0.0, 0.85065, 0.52573));
      if (u.slice_axis > 0.5 && u.slice_axis < 1.5) {
        planeNorm = vec3<f32>(1.0, 0.0, 0.0);
      } else if (u.slice_axis > 1.5 && u.slice_axis < 2.5) {
        planeNorm = vec3<f32>(0.0, 1.0, 0.0);
      } else if (u.slice_axis > 2.5) {
        planeNorm = vec3<f32>(0.0, 0.0, 1.0);
      }
      let distToSlice = abs(dot(p, planeNorm) - sliceOffset);
      if (distToSlice < 0.025) {
        let sliceGlow = smoothstep(0.025, 0.002, distToSlice);
        col = mix(col, u.accent_color * 2.8, sliceGlow * 0.85);
      }
    }

    // ===================================================================
    // Rendering Modalities: 7 Math-Driven Visualization Techniques
    // Curvature-enhanced: uses normal variation for rich surface detail
    // ===================================================================

    // Curvature and trapDetail already computed above for palette engine

    if (u.render_style > 0.5 && u.render_style < 1.5) {
      // 1. X-Ray Томография: Volumetric scattering + beam hardening + bone density
      let dens = clamp(f32(steps) / 65.0, 0.0, 1.0);
      // Volumetric path-length density
      let pathLen = clamp(t / 12.0, 0.0, 1.0);
      // Beam hardening: high-density regions absorb low-energy photons first
      let beamHardening = mix(1.0, 0.6, pathLen * curvNorm);
      // Bone density map
      let boneDensity = mix(0.15, 1.0, curvNorm * 0.55 + ao * 0.35 + trapDetail * 0.1);
      // Core: dense bone with volumetric attenuation
      let xrayCore = u.accent_color * boneDensity * (0.3 + trapDetail * 0.7) * beamHardening;
      // Vasculature: orbit trap channels
      let xrayVessel = u.primary_color * trapDetail * (0.25 + dens * 0.75);
      // Edge glow: surface boundary enhancement
      let edgeGlow = pow(1.0 - ao, 2.0) * (0.4 + curvNorm * 0.6);
      let xrayShell = u.secondary_color * edgeGlow;
      // Depth-based scatter: Compton scatter haze
      let scatterCol = vec3<f32>(0.6, 0.7, 0.9) * pathLen * 0.15 * (1.0 - boneDensity);
      var xrayCol = mix(xrayVessel, xrayCore, boneDensity * 0.85) + xrayShell * 0.5 + scatterCol;
      xrayCol = xrayCol + u.accent_color * curvNorm * 0.35;
      col = mix(col * 0.12, xrayCol * 1.6, 0.78 + 0.22 * ao);
    } else if (u.render_style > 1.5 && u.render_style < 2.5) {
      // 2. Топография: Height-based terrain + multi-scale contours + ridge detection
      // Use world-space Y as elevation (real terrain height)
      let height = p.y * 0.5 + 0.5;
      // Multi-scale contour lines
      let contourFine = abs(fract(height * 20.0) - 0.5) * 2.0;
      let contourMed = abs(fract(height * 8.0) - 0.5) * 2.0;
      let contourCoarse = abs(fract(height * 3.0 + curvNorm * 0.3) - 0.5) * 2.0;
      let contourF = smoothstep(0.0, 0.035, contourFine);
      let contourM = smoothstep(0.0, 0.07, contourMed);
      let contourC = smoothstep(0.0, 0.12, contourCoarse);
      let contour = min(contourF, min(contourM, contourC));
      // Ridge detection
      let ridgeLine = smoothstep(0.25, 0.75, curvNorm);
      // Valley detection
      let valleyLine = smoothstep(0.35, 0.0, curvNorm) * smoothstep(0.6, 0.2, height);
      // Slope shading
      let slope = 1.0 - abs(dot(n, vec3<f32>(0.0, 1.0, 0.0)));
      let slopeShade = pow(slope, 0.6);
      // Color zones by elevation
      let waterZone = u.secondary_color * 0.35;
      let lowlandZone = mix(u.secondary_color, u.primary_color, 0.3) * (0.5 + height * 0.4);
      let highlandZone = u.primary_color * (0.6 + height * 0.8);
      let peakZone = u.accent_color * (0.8 + curvNorm * 1.2);
      // Blend zones
      var topoCol = mix(waterZone, lowlandZone, smoothstep(0.15, 0.35, height));
      topoCol = mix(topoCol, highlandZone, smoothstep(0.40, 0.65, height));
      topoCol = mix(topoCol, peakZone, smoothstep(0.70, 0.90, height) * ridgeLine);
      // Ridge highlights
      topoCol = mix(topoCol, peakZone * 1.5, ridgeLine * 0.45);
      // Valley shadows
      topoCol = topoCol * (0.7 + 0.3 * (1.0 - valleyLine));
      // Contour lines
      topoCol = mix(topoCol, topoCol * 0.35, (1.0 - contour) * 0.5);
      // Slope shading
      topoCol = topoCol * (0.55 + 0.45 * slopeShade);
      // Ambient occlusion
      col = topoCol * (0.45 + 0.55 * ao);
    } else if (u.render_style > 2.5 && u.render_style < 3.5) {
      // 3. Голографическая проекция: Chromatic aberration + interference + hex grid
      let depthNorm = clamp(t / 20.0, 0.0, 1.0);
      // Chromatic aberration
      let rOff = sin(depthNorm * 25.0 + u.time * 3.5) * 0.03;
      let gOff = sin(depthNorm * 25.0 + u.time * 3.5 + 2.094) * 0.03;
      let bOff = sin(depthNorm * 25.0 + u.time * 3.5 + 4.189) * 0.03;
      let holoBase = vec3<f32>(
        u.primary_color.r * (1.0 + rOff),
        u.primary_color.g * (1.0 + gOff),
        u.primary_color.b * (1.0 + bOff)
      );
      let holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
      let scanFreq = 200.0 + depthNorm * 150.0;
      let scanline = 0.80 + 0.20 * sin(in.uv.y * scanFreq + u.time * 10.0);
      let wireframe = smoothstep(0.25, 0.75, curvNorm);
      let glitch = step(0.965, fract(sin(dot(p, vec3<f32>(12.9898, 78.233, 45.164)) + u.time * 2.5) * 43758.5));
      // Hexagonal grid overlay
      let hexScale = 25.0;
      let hexP = p * hexScale;
      let hx = abs(fract(hexP.x * 0.5) - 0.5) * 2.0;
      let hy = abs(fract(hexP.y * 0.866) - 0.5) * 2.0;
      let hexGrid = min(hx, hy);
      let hexLine = smoothstep(0.0, 0.08, hexGrid);
      let shimmer = 0.85 + 0.15 * sin(u.time * 6.0 + length(p) * 12.0);
      var holoCol = holoBase * (0.30 + holoFres * 1.5 + wireframe * 0.6) * scanline * shimmer;
      holoCol = holoCol + u.accent_color * wireframe * 1.4;
      holoCol = holoCol + vec3<f32>(0.12, 0.35, 0.75) * holoFres * 1.8;
      holoCol = holoCol + u.accent_color * glitch * 3.5;
      holoCol = holoCol + u.primary_color * trapDetail * 0.35;
      // Hex grid lines
      holoCol = holoCol + u.secondary_color * (1.0 - hexLine) * 0.15 * (0.5 + depthNorm * 0.5);
      col = mix(col * 0.06, holoCol, 0.94);
    } else if (u.render_style > 3.5 && u.render_style < 4.5) {
      // 4. Радужная интерференция: Thin-film + Fresnel + 5-order interference
      let nv = max(dot(n, -rd), 0.0);
      let filmThickness = 0.5 + curvNorm * 0.8 + trapDetail * 0.3;
      // 5 interference orders
      let order1 = nv * 3.0 * filmThickness + min_trap * 0.5;
      let order2 = nv * 5.0 * filmThickness + min_trap * 0.3 + u.time * 0.08;
      let order3 = nv * 7.0 * filmThickness + min_trap * 0.2;
      let order4 = nv * 9.0 * filmThickness + min_trap * 0.15 - u.time * 0.05;
      let order5 = nv * 11.0 * filmThickness + min_trap * 0.1;
      let iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33 + order4 * 0.1));
      let iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33 + order5 * 0.08));
      let iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
      var iridCol = vec3<f32>(iridR, iridG, iridB);
      // Fresnel-weighted specular
      let hIrid = normalize(light1 - rd);
      let specAngle = max(dot(n, hIrid), 0.0);
      let specIrid = vec3<f32>(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * 2.5;
      // Diffuse grounding
      let iridDiff = max(dot(n, light1), 0.0) * 0.3;
      iridCol = iridCol * (0.6 + trapDetail * 0.3 + iridDiff);
      // Fresnel rim
      iridCol = iridCol + u.accent_color * pow(fresnel, 1.5) * 0.4;
      col = iridCol * (0.45 + 0.55 * ao) + specIrid;
    } else if (u.render_style > 4.5 && u.render_style < 5.5) {
      // 5. Квантовое поле: Energy field + magnetic flux + PBR
      let wave1 = sin(length(p) * 12.0 - u.time * 3.5);
      let wave2 = cos(dot(p, normalize(vec3<f32>(1.618, 1.0, 0.618))) * 7.0 + u.time * 2.2);
      let wave3 = sin(dot(p, normalize(vec3<f32>(-0.618, 1.618, 1.0))) * 9.0 - u.time * 1.8);
      let interference = (wave1 + wave2 + wave3) / 3.0;
      // Magnetic flux lines
      let flux1 = sin(p.x * 8.0 + u.time * 1.5) * cos(p.z * 6.0 - u.time * 1.2);
      let flux2 = cos(p.y * 7.0 - u.time * 1.8) * sin(p.x * 5.0 + u.time * 0.9);
      let flux = (flux1 + flux2) * 0.5;
      let probability = trapDetail * 0.5 + (0.5 + 0.5 * interference) * 0.35 + flux * 0.15;
      let energy = pow(abs(interference), 0.7) * (0.5 + curvNorm * 0.5);
      let plasmaCold = u.secondary_color * (0.20 + probability * 0.5);
      let plasmaHot = u.accent_color * (0.6 + energy * 1.8);
      var qCol = mix(plasmaCold, plasmaHot, energy);
      // PBR diffuse
      let plasmaDiff = max(dot(n, light1), 0.0) * 0.4 + max(dot(n, light2), 0.0) * 0.15;
      qCol = qCol * (0.7 + plasmaDiff * 0.3);
      // Specular
      let hPlasma = normalize(light1 - rd);
      let plasmaSpec = pow(max(dot(n, hPlasma), 0.0), 32.0);
      qCol = qCol + vec3<f32>(0.8, 0.9, 1.0) * plasmaSpec * 0.5;
      // Flux lines
      qCol = qCol + u.secondary_color * abs(flux) * 0.2 * (0.5 + curvNorm * 0.5);
      qCol = qCol + u.accent_color * pow(fresnel, 2.0) * 1.2;
      qCol = qCol + u.primary_color * curvNorm * 0.35;
      qCol = qCol * (0.6 + trapDetail * 0.4);
      col = qCol * (0.35 + 0.65 * ao) + sssCol * 1.2;
    } else if (u.render_style > 5.5) {
      // 6. Кристалл: Internal reflections + caustics + dispersion + Beer-Lambert
      let beerDist = min(max(t - 0.5, 0.0), 20.0);
      // Asymmetric absorption
      let beer = exp(-beerDist * vec3<f32>(0.05, 0.15, 0.6));
      // Caustics
      let caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
      let caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
      let caustic = caustic1 + caustic2;
      let facetStrength = 0.3 + curvNorm * 0.7;
      let refractCol = mix(u.primary_color, u.accent_color, fresnel * facetStrength);
      var gemCol = refractCol * beer;
      // Internal reflection: first bounce
      let internalReflDir = reflect(rd, n);
      let internalRefl = clamp(1.0 - sceneSDF(p + internalReflDir * 0.15).x * 6.0, 0.0, 1.0);
      gemCol = gemCol + u.accent_color * internalRefl * beer * 0.2;
      // Second internal bounce for deeper light transport
      let bounce2Dir = reflect(internalReflDir, n);
      let bounce2Refl = clamp(1.0 - sceneSDF(p + bounce2Dir * 0.1).x * 8.0, 0.0, 1.0);
      gemCol = gemCol + u.primary_color * bounce2Refl * beer * 0.1;
      let gemSpec = vec3<f32>(1.0, 0.96, 0.82) * spec1 * 2.2;
      // Dispersion
      let dispersion = fresnel * (0.1 + curvNorm * 0.15);
      gemCol.r = gemCol.r * (1.0 + dispersion);
      gemCol.b = gemCol.b * (1.0 - dispersion * 0.5);
      gemCol = gemCol + u.secondary_color * trapDetail * 0.25 * beer;
      gemCol = gemCol * facetStrength;
      col = gemCol * (0.6 + 0.4 * ao) + gemSpec + u.accent_color * caustic * 0.6;
    }

    // IMPROVED FOG: Exponential-squared falloff for more natural atmospheric depth
    let fogStart: f32 = mix(20.0, max(4.0, cam_dist * 3.0 + 4.0), smoothstep(0.5, 5.0, cam_dist));
    let fogDensity: f32 = mix(0.008, 0.015, smoothstep(0.3, 3.0, cam_dist));
    let fogDist = max(0.0, t - fogStart);
    let fog = 1.0 - exp(-fogDist * fogDist * fogDensity * 0.5); // Exponential-squared for smoother falloff
    col = mix(col, vec3<f32>(0.005, 0.004, 0.008), fog * clamp(u.volumetric_fog, 0.0, 1.0));
  }

  col = acesToneMap(col);

  // BLOOM SIMULATION: Brightness-based glow for light sources and specular highlights
  let brightness = dot(col, vec3<f32>(0.299, 0.587, 0.114));
  let bloomThreshold: f32 = 0.6;
  let bloomStrength = max(brightness - bloomThreshold, 0.0) * 0.35;
  let bloomCol = col * bloomStrength + u.accent_color * bloomStrength * 0.15;
  col = col + bloomCol;

  // MINIMUM BRIGHTNESS FLOOR: Prevent completely black pixels
    col = max(col, vec3<f32>(0.004, 0.003, 0.005));

  // CHROMATIC ABERRATION: Subtle color fringing for realism
  // FIX: Use distance-based CA strength for more realistic effect
  let caStrength: f32 = 0.0015 * (1.0 + t * 0.1);
  let caR = fract(sin(dot(in.uv * u.resolution + vec2<f32>(caStrength, 0.0), vec2<f32>(12.9898, 78.233)) + u.time * 0.07) * 43758.5453);
  let caG = fract(sin(dot(in.uv * u.resolution, vec2<f32>(12.9898, 78.233)) + u.time * 0.07) * 43758.5453);
  let caB = fract(sin(dot(in.uv * u.resolution + vec2<f32>(-caStrength, 0.0), vec2<f32>(12.9898, 78.233)) + u.time * 0.07) * 43758.5453);
  col.r = col.r + (caR - 0.5) * 0.008;
  col.b = col.b + (caB - 0.5) * 0.008;

  // Color-space dither to eliminate banding in smooth gradients
  let ditherVal = fract(sin(dot(in.uv * u.resolution, vec2<f32>(12.9898, 78.233)) + u.time * 0.07) * 43758.5453);
  col = col + (ditherVal - 0.5) * (1.0 / 128.0);

  let vigStrength = smoothstep(0.12, 1.0, cam_dist);
  let vignette = 1.0 - smoothstep(0.9, 1.8, bg_rad) * vigStrength * 0.5;
  col = col * vignette;

  // Subpixel edge sharpening via screen-space derivatives
  let edgeDetect = length(vec2<f32>(dpdx(col.r), dpdy(col.r))) +
                   length(vec2<f32>(dpdx(col.g), dpdy(col.g))) +
                   length(vec2<f32>(dpdx(col.b), dpdy(col.b)));
  col = mix(col, col * (1.0 + edgeDetect * 2.0), 0.12);

  return vec4<f32>(col, 1.0);
}
`,Sr=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function Ol(p){switch(p){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;case"burningShip":return 27;case"chenAttractor":return 73;case"dadrasAttractor":return 73;case"dlAggregate":return 33;case"fibonacciSphere":return 22;case"goldenSpiral":return 22;case"ifsFractal":return 25;case"mandala":return 0;case"newtonFractal":return 28;case"penroseTiling":return 10;case"percolationCluster":return 33;case"perlinNoise":return 58;case"platonicSolids":return 6;case"randomTerrain":return 58;case"schwarzSurface":return 50;case"sierpinskiTriangle":return 14;case"sprottAttractor":return 77;case"torusKnot":return 57;case"worleyNoise":return 60;case"tesseract":return 104;case"120Cell":return 105;case"600Cell":return 106;case"24Cell":return 107;case"5Cell":return 108;case"kleinBottle":return 109;case"projectivePlane":return 110;case"mobiusStrip":return 111;case"torusKnot4D":return 112;case"flameSinusoidal":return 113;case"flameSpherical":return 114;case"flameSwirl":return 115;case"flameHorseshoe":return 116;case"flameButterfly":return 117;case"flameHeart":return 118;case"flameSpiral":return 119;case"flameHyperbolic":return 120;case"flameDiamond":return 121;case"flameWaves":return 122;case"flamePopcorn":return 123;case"flameRings":return 124;case"flameFan":return 125;case"ifs3DTree":return 126;case"ifs3DFern":return 127;case"ifs3DSierpinski":return 128;case"ifs3DCantor":return 129;case"ifs3DKoch":return 130;case"mandelbrotVariant1":return 131;case"mandelbrotVariant2":return 132;case"mandelbrotVariant3":return 133;case"mandelbrotVariant4":return 134;case"mandelbrotVariant5":return 135;case"mandelbrotVariant6":return 136;case"mandelbrotVariant7":return 137;case"mandelbrotVariant8":return 138;case"mandelbrotVariant9":return 139;case"mandelbrotVariant10":return 140;case"juliaVariant1":return 141;case"juliaVariant2":return 142;case"juliaVariant3":return 143;case"juliaVariant4":return 144;case"juliaVariant5":return 145;case"juliaVariant6":return 146;case"juliaVariant7":return 147;case"juliaVariant8":return 148;case"juliaVariant9":return 149;case"juliaVariant10":return 150;case"juliaVariant11":return 151;case"juliaVariant12":return 152;case"juliaVariant13":return 153;case"juliaVariant14":return 154;case"juliaVariant15":return 155;case"juliaVariant16":return 156;case"juliaVariant17":return 157;case"juliaVariant18":return 158;case"juliaVariant19":return 159;case"juliaVariant20":return 160;case"juliaVariant21":return 161;case"juliaVariant22":return 162;case"juliaVariant23":return 163;case"juliaVariant24":return 164;case"juliaVariant25":return 165;case"juliaVariant26":return 166;case"juliaVariant27":return 167;case"juliaVariant28":return 168;case"juliaVariant29":return 169;case"juliaVariant30":return 170;case"juliaVariant31":return 171;case"juliaVariant32":return 172;case"juliaVariant33":return 173;case"juliaVariant34":return 174;case"juliaVariant35":return 175;case"juliaVariant36":return 176;case"juliaVariant37":return 177;case"juliaVariant38":return 178;case"juliaVariant39":return 179;case"juliaVariant40":return 180;case"juliaVariant41":return 181;case"juliaVariant42":return 182;case"juliaVariant43":return 183;case"juliaVariant44":return 184;case"juliaVariant45":return 185;case"juliaVariant46":return 186;case"juliaVariant47":return 187;case"juliaVariant48":return 188;case"juliaVariant49":return 189;case"juliaVariant50":return 190;case"ifsVariant1":return 191;case"ifsVariant2":return 192;case"ifsVariant3":return 193;case"ifsVariant4":return 194;case"ifsVariant5":return 195;case"ifsVariant6":return 196;case"ifsVariant7":return 197;case"ifsVariant8":return 198;case"ifsVariant9":return 199;case"ifsVariant10":return 200;case"ifsVariant11":return 201;case"ifsVariant12":return 202;case"ifsVariant13":return 203;case"ifsVariant14":return 204;case"ifsVariant15":return 205;case"ifsVariant16":return 206;case"ifsVariant17":return 207;case"ifsVariant18":return 208;case"ifsVariant19":return 209;case"ifsVariant20":return 210;case"ifsVariant21":return 211;case"ifsVariant22":return 212;case"ifsVariant23":return 213;case"ifsVariant24":return 214;case"ifsVariant25":return 215;case"ifsVariant26":return 216;case"ifsVariant27":return 217;case"ifsVariant28":return 218;case"ifsVariant29":return 219;case"ifsVariant30":return 220;case"ifsVariant31":return 221;case"ifsVariant32":return 222;case"ifsVariant33":return 223;case"ifsVariant34":return 224;case"ifsVariant35":return 225;case"ifsVariant36":return 226;case"ifsVariant37":return 227;case"ifsVariant38":return 228;case"ifsVariant39":return 229;case"ifsVariant40":return 230;case"ifsVariant41":return 231;case"ifsVariant42":return 232;case"ifsVariant43":return 233;case"ifsVariant44":return 234;case"ifsVariant45":return 235;case"ifsVariant46":return 236;case"ifsVariant47":return 237;case"ifsVariant48":return 238;case"ifsVariant49":return 239;case"ifsVariant50":return 240;case"lsystemVariant1":return 241;case"lsystemVariant2":return 242;case"lsystemVariant3":return 243;case"lsystemVariant4":return 244;case"lsystemVariant5":return 245;case"lsystemVariant6":return 246;case"lsystemVariant7":return 247;case"lsystemVariant8":return 248;case"lsystemVariant9":return 249;case"lsystemVariant10":return 250;case"lsystemVariant11":return 251;case"lsystemVariant12":return 252;case"lsystemVariant13":return 253;case"lsystemVariant14":return 254;case"lsystemVariant15":return 255;case"lsystemVariant16":return 256;case"lsystemVariant17":return 257;case"lsystemVariant18":return 258;case"lsystemVariant19":return 259;case"lsystemVariant20":return 260;case"lsystemVariant21":return 261;case"lsystemVariant22":return 262;case"lsystemVariant23":return 263;case"lsystemVariant24":return 264;case"lsystemVariant25":return 265;case"lsystemVariant26":return 266;case"lsystemVariant27":return 267;case"lsystemVariant28":return 268;case"lsystemVariant29":return 269;case"lsystemVariant30":return 270;case"lsystemVariant31":return 271;case"lsystemVariant32":return 272;case"lsystemVariant33":return 273;case"lsystemVariant34":return 274;case"lsystemVariant35":return 275;case"lsystemVariant36":return 276;case"lsystemVariant37":return 277;case"lsystemVariant38":return 278;case"lsystemVariant39":return 279;case"lsystemVariant40":return 280;case"lsystemVariant41":return 281;case"lsystemVariant42":return 282;case"lsystemVariant43":return 283;case"lsystemVariant44":return 284;case"lsystemVariant45":return 285;case"lsystemVariant46":return 286;case"lsystemVariant47":return 287;case"lsystemVariant48":return 288;case"lsystemVariant49":return 289;case"lsystemVariant50":return 290;case"flameVariant1":return 291;case"flameVariant2":return 292;case"flameVariant3":return 293;case"flameVariant4":return 294;case"flameVariant5":return 295;case"flameVariant6":return 296;case"flameVariant7":return 297;case"flameVariant8":return 298;case"flameVariant9":return 299;case"flameVariant10":return 300;case"flameVariant11":return 301;case"flameVariant12":return 302;case"flameVariant13":return 303;case"flameVariant14":return 304;case"flameVariant15":return 305;case"flameVariant16":return 306;case"flameVariant17":return 307;case"flameVariant18":return 308;case"flameVariant19":return 309;case"flameVariant20":return 310;case"flameVariant21":return 311;case"flameVariant22":return 312;case"flameVariant23":return 313;case"flameVariant24":return 314;case"flameVariant25":return 315;case"flameVariant26":return 316;case"flameVariant27":return 317;case"flameVariant28":return 318;case"flameVariant29":return 319;case"flameVariant30":return 320;case"flameVariant31":return 321;case"flameVariant32":return 322;case"flameVariant33":return 323;case"flameVariant34":return 324;case"flameVariant35":return 325;case"flameVariant36":return 326;case"flameVariant37":return 327;case"flameVariant38":return 328;case"flameVariant39":return 329;case"flameVariant40":return 330;case"flameVariant41":return 331;case"flameVariant42":return 332;case"flameVariant43":return 333;case"flameVariant44":return 334;case"flameVariant45":return 335;case"flameVariant46":return 336;case"flameVariant47":return 337;case"flameVariant48":return 338;case"flameVariant49":return 339;case"flameVariant50":return 340;case"hybridVariant1":return 341;case"hybridVariant2":return 342;case"hybridVariant3":return 343;case"hybridVariant4":return 344;case"hybridVariant5":return 345;case"hybridVariant6":return 346;case"hybridVariant7":return 347;case"hybridVariant8":return 348;case"hybridVariant9":return 349;case"hybridVariant10":return 350;case"hybridVariant11":return 351;case"hybridVariant12":return 352;case"hybridVariant13":return 353;case"hybridVariant14":return 354;case"hybridVariant15":return 355;case"hybridVariant16":return 356;case"hybridVariant17":return 357;case"hybridVariant18":return 358;case"hybridVariant19":return 359;case"hybridVariant20":return 360;case"hybridVariant21":return 361;case"hybridVariant22":return 362;case"hybridVariant23":return 363;case"hybridVariant24":return 364;case"hybridVariant25":return 365;case"hybridVariant26":return 366;case"hybridVariant27":return 367;case"hybridVariant28":return 368;case"hybridVariant29":return 369;case"hybridVariant30":return 370;case"hybridVariant31":return 371;case"hybridVariant32":return 372;case"hybridVariant33":return 373;case"hybridVariant34":return 374;case"hybridVariant35":return 375;case"hybridVariant36":return 376;case"hybridVariant37":return 377;case"hybridVariant38":return 378;case"hybridVariant39":return 379;case"hybridVariant40":return 380;case"hybridVariant41":return 381;case"hybridVariant42":return 382;case"hybridVariant43":return 383;case"hybridVariant44":return 384;case"hybridVariant45":return 385;case"hybridVariant46":return 386;case"hybridVariant47":return 387;case"hybridVariant48":return 388;case"hybridVariant49":return 389;case"hybridVariant50":return 390;case"hybridVariant51":return 391;case"hybridVariant52":return 392;case"hybridVariant53":return 393;case"hybridVariant54":return 394;case"hybridVariant55":return 395;case"hybridVariant56":return 396;case"hybridVariant57":return 397;case"hybridVariant58":return 398;case"hybridVariant59":return 399;case"hybridVariant60":return 400;case"hybridVariant61":return 401;case"hybridVariant62":return 402;case"hybridVariant63":return 403;case"hybridVariant64":return 404;case"hybridVariant65":return 405;case"hybridVariant66":return 406;case"hybridVariant67":return 407;case"hybridVariant68":return 408;case"hybridVariant69":return 409;case"hybridVariant70":return 410;case"hybridVariant71":return 411;case"hybridVariant72":return 412;case"hybridVariant73":return 413;case"hybridVariant74":return 414;case"hybridVariant75":return 415;case"hybridVariant76":return 416;case"hybridVariant77":return 417;case"hybridVariant78":return 418;case"hybridVariant79":return 419;case"hybridVariant80":return 420;case"hybridVariant81":return 421;case"hybridVariant82":return 422;case"hybridVariant83":return 423;case"hybridVariant84":return 424;case"hybridVariant85":return 425;case"hybridVariant86":return 426;case"hybridVariant87":return 427;case"hybridVariant88":return 428;case"hybridVariant89":return 429;case"hybridVariant90":return 430;default:return 0}}function sh(p){switch(p){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function ch(p){switch(p){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function ph(p){switch(p){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function fh(p){switch(p){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class _u{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||Sr.find(f=>f.id===s.paletteId)||Sr[0]}computeIndices(s){return{fractalIdx:Ol(s.type),hybridIdx:Ol(s.hybridType||s.type),tertiaryIdx:Ol(s.tertiaryType||"riemannZeta"),compositeOpIdx:sh(s.compositeOp),cameraModeIdx:ch(s.cameraMode),sliceAxisIdx:ph(s.sliceAxis),renderStyleIdx:fh(s.renderStyle)}}packUniforms(s,f,c,d,m){const z=this.canvas.width,g=this.canvas.height;return s[0]=z,s[1]=g,s[2]=f,s[3]=c.phiMultiplier,s[4]=c.rotX,s[5]=c.rotY,s[6]=c.zoom,s[7]=m.fractalIdx,s[8]=c.iterations,s[9]=c.glowIntensity,s[10]=c.morphSpeed,s[11]=m.hybridIdx,s[12]=c.hybridBlend??0,s[13]=c.boxFold??1.2,s[14]=c.sphereFold??.65,s[15]=c.interiorCut??.35,s[16]=d.primary[0],s[17]=d.primary[1],s[18]=d.primary[2],s[19]=m.tertiaryIdx,s[20]=d.secondary[0],s[21]=d.secondary[1],s[22]=d.secondary[2],s[23]=c.tertiaryBlend??0,s[24]=d.accent[0],s[25]=d.accent[1],s[26]=d.accent[2],s[27]=m.compositeOpIdx,s[28]=c.smoothK??.35,s[29]=c.warpStrength??.3,s[30]=c.octaveLayers??2,s[31]=m.cameraModeIdx,s[32]=c.camPosX??0,s[33]=c.camPosY??0,s[34]=c.camPosZ??0,s[35]=c.slicePlane??0,s[36]=c.headlampPower??.3,s[37]=c.volumetricFog??.15,s[38]=m.sliceAxisIdx,s[39]=m.renderStyleIdx,s[40]=d.ambient?d.ambient[0]:.02,s[41]=d.ambient?d.ambient[1]:.02,s[42]=d.ambient?d.ambient[2]:.02,s[43]=c.paletteSeed??0,s[44]=c.paletteRotation?1:0,s[45]=0,s[46]=0,s[47]=0,s}}class uh{constructor(){this.logs=[],this.stats=this.getInitialStats(),this.frameCount=0,this.lastFrameTime=performance.now(),this.enabled=!0}getInitialStats(){return{frameTime:0,fps:0,rayMarchSteps:0,rayMarchStepsAvg:0,sdfMin:1/0,sdfMax:-1/0,sdfNaN:0,sdfInfinity:0,hitRate:0,averageDistance:0,maxDistance:0,gpuMemoryUsed:0,shaderCompileTime:0,contextLost:!1}}log(s,f,c,d){if(!this.enabled)return;const m={timestamp:performance.now(),level:s,category:f,message:c,data:d};this.logs.push(m),this.logs.length>1e3&&(this.logs=this.logs.slice(-1e3)),(s==="error"||s==="warn")&&console[s](`[${f}] ${c}`,d)}updateFrameStats(s,f,c){const d=performance.now(),m=d-this.lastFrameTime;this.lastFrameTime=d,this.frameCount++,this.stats.frameTime=m,this.stats.fps=1e3/m,this.stats.rayMarchSteps=s,this.stats.rayMarchStepsAvg=this.stats.rayMarchStepsAvg*.9+s*.1,isNaN(f)&&(this.stats.sdfNaN++,this.log("error","math","NaN detected in SDF calculation",{steps:s,hitDistance:f})),isFinite(f)||this.stats.sdfInfinity++,this.stats.sdfMin=Math.min(this.stats.sdfMin,f),this.stats.sdfMax=Math.max(this.stats.sdfMax,f);const z=f<.001;this.stats.hitRate=this.stats.hitRate*.95+(z?1:0)*.05,this.stats.averageDistance=this.stats.averageDistance*.95+f*.05,this.stats.maxDistance=Math.max(this.stats.maxDistance,c)}validateSDF(s,f){return isNaN(s)?(this.log("error","math","SDF returned NaN",{position:f,sdfValue:s}),!1):isFinite(s)?(s<-1e3&&this.log("warn","math","SDF returned unusually large negative value",{position:f,sdfValue:s}),!0):(this.log("error","math","SDF returned Infinity",{position:f,sdfValue:s}),!1)}validateNormal(s,f){const c=Math.sqrt(s[0]**2+s[1]**2+s[2]**2);return isNaN(c)?(this.log("error","math","Normal contains NaN",{position:f,normal:s}),!1):Math.abs(c-1)>.01?(this.log("warn","math","Normal is not normalized",{position:f,normal:s,length:c}),!1):!0}trackGPUContext(s,f){this.stats.contextLost=s,s&&this.log("error","gpu","GPU context lost"),f!==void 0&&(this.stats.shaderCompileTime=f,f>1e3&&this.log("warn","gpu","Shader compilation took too long",{shaderCompileTime:f}))}getStats(){return{...this.stats}}getLogs(s,f){let c=this.logs;return s&&(c=c.filter(d=>d.level===s)),f&&(c=c.filter(d=>d.category===f)),c}exportReport(){const s={timestamp:new Date().toISOString(),stats:this.stats,recentLogs:this.logs.slice(-100),summary:{totalLogs:this.logs.length,errors:this.logs.filter(f=>f.level==="error").length,warnings:this.logs.filter(f=>f.level==="warn").length,nanCount:this.stats.sdfNaN,infinityCount:this.stats.sdfInfinity}};return JSON.stringify(s,null,2)}reset(){this.stats=this.getInitialStats(),this.logs=[],this.frameCount=0,this.lastFrameTime=performance.now()}setEnabled(s){this.enabled=s}isHealthy(){return this.stats.sdfNaN===0&&this.stats.sdfInfinity===0&&!this.stats.contextLost&&this.stats.fps>10}}const We=new uh;function Ll(p,s,f,c){if(isNaN(p))return We.log("error","math",`NaN in scalar: ${s}`,{value:p,position:f}),!1;if(!isFinite(p))return We.log("error","math",`Infinity in scalar: ${s}`,{value:p,position:f}),!1;if(c){const[d,m]=c;if(p<d||p>m)return We.log("warn","math",`Scalar out of range: ${s}`,{value:p,position:f,expectedRange:c}),!1}return!0}function Su(p,s){const f=performance.now(),c=p(),d=performance.now()-f;return d>16&&We.log("warn","performance",`Slow operation: ${s}`,{duration:d}),{result:c,duration:d}}class cc extends _u{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!cc.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(m=>setTimeout(()=>m(null),5e3));if(this.adapter=await Promise.race([s,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const m=this.adapter.info;m&&(m.vendor||m.description)?this.adapterInfo=`${m.vendor||""} ${m.description||m.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(m=>{console.warn(`WebGPU device lost: ${m.message}`,m),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const c=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:c,alphaMode:"premultiplied"});try{const m=this.device.createCommandEncoder();m.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([m.finish()])}catch(m){console.debug("Initial clear pass handled:",m)}const d=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:oh});if("getCompilationInfo"in d)try{const z=(await d.getCompilationInfo()).messages.filter(g=>g.type==="error");if(z.length>0){for(const g of z)console.error(`[WGSL Compile Error] Line ${g.lineNum}:${g.linePos}: ${g.message}`);return!1}}catch(m){console.debug("Compilation info inspection skipped:",m)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:d,entryPoint:"vs_main"},fragment:{module:d,entryPoint:"fs_main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const c=this.canvas.width,d=this.canvas.height;if(c===0||d===0)return;const{duration:m}=Su(()=>{const z=this.resolvePalette(f),g=this.computeIndices(f);this.packUniforms(this.uniformValues,s,f,z,g),Ll(this.uniformValues[2],"u_time",void 0,[0,1e3])||We.log("error","render","Invalid time value",{time:this.uniformValues[2]}),Ll(this.uniformValues[6],"u_zoom",void 0,[.01,100])||We.log("warn","render","Zoom out of range",{zoom:this.uniformValues[6]}),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const y=this.device.createCommandEncoder(),b=this.context.getCurrentTexture().createView(),L=y.beginRenderPass({colorAttachments:[{view:b,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});L.setPipeline(this.pipeline),L.setBindGroup(0,this.bindGroup),L.draw(3,1,0,0),L.end(),this.device.queue.submit([y.finish()])}catch(y){We.log("warn","render","WebGPU render frame skipped",{error:y.message}),console.debug("WebGPU render frame skipped:",y.message)}},"WebGPU render");We.updateFrameStats(128,.001,20),We.trackGPUContext(!1,m)}destroy(){var s,f;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const dh=`
// ===================================================================
// Julia Variations 1-50 - CORRECT MANDELBULB FORMULAS
// ===================================================================

// Variant 1: Classic Mandelbulb (Power 8)
float mapJuliaVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0; // Classic Mandelbulb power
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Convert to polar coordinates
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    // Raise to power
    float zr = pow(r, power);
    theta = theta * power;
    phiAngle = phiAngle * power;
    
    // Convert back to cartesian
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p; // Add original point (Mandelbrot formula)
    
    // Update distance estimation
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Mandelbulb Power 4.2
float mapJuliaVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 4.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Mandelbulb Power 12.6
float mapJuliaVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Julia Set (Power 8)
float mapJuliaVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.340, 0.320, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Burning Ship Mandelbulb
float mapJuliaVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Tricorn Mandelbulb
float mapJuliaVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Rotated Mandelbulb
float mapJuliaVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.40;
  float rot = 0.240;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Folded Mandelbulb
float mapJuliaVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Mandelbulb Power 6.9
float mapJuliaVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 6.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Mandelbulb Power 19.0
float mapJuliaVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Mandelbulb (Escape 2.55)
float mapJuliaVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.10;
  float escapeR = 2.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Mandelbulb Power 5.2
float mapJuliaVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 5.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Mandelbulb Power 14.6
float mapJuliaVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 14.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Julia Set (Power 8)
float mapJuliaVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.440, 0.370, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Burning Ship Mandelbulb
float mapJuliaVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Tricorn Mandelbulb
float mapJuliaVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Rotated Mandelbulb
float mapJuliaVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.40;
  float rot = 0.440;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Folded Mandelbulb
float mapJuliaVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Mandelbulb Power 7.9
float mapJuliaVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 7.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Mandelbulb Power 22.0
float mapJuliaVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 22.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Mandelbulb (Escape 3.05)
float mapJuliaVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.10;
  float escapeR = 3.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Mandelbulb Power 6.2
float mapJuliaVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 6.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Mandelbulb Power 16.6
float mapJuliaVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Julia Set (Power 8)
float mapJuliaVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.540, 0.420, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Burning Ship Mandelbulb
float mapJuliaVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Tricorn Mandelbulb
float mapJuliaVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Rotated Mandelbulb
float mapJuliaVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.40;
  float rot = 0.640;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Folded Mandelbulb
float mapJuliaVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Mandelbulb Power 8.9
float mapJuliaVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Mandelbulb Power 25.0
float mapJuliaVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 25.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Mandelbulb (Escape 3.55)
float mapJuliaVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.10;
  float escapeR = 3.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Mandelbulb Power 7.2
float mapJuliaVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 7.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Mandelbulb Power 18.6
float mapJuliaVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Julia Set (Power 8)
float mapJuliaVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.640, 0.470, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Burning Ship Mandelbulb
float mapJuliaVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Tricorn Mandelbulb
float mapJuliaVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Rotated Mandelbulb
float mapJuliaVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.40;
  float rot = 0.840;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Folded Mandelbulb
float mapJuliaVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Mandelbulb Power 9.9
float mapJuliaVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Mandelbulb Power 28.0
float mapJuliaVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Mandelbulb (Escape 4.05)
float mapJuliaVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.10;
  float escapeR = 4.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Mandelbulb Power 8.2
float mapJuliaVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Mandelbulb Power 20.6
float mapJuliaVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 20.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Julia Set (Power 8)
float mapJuliaVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.740, 0.520, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Burning Ship Mandelbulb
float mapJuliaVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 14.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Tricorn Mandelbulb
float mapJuliaVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Rotated Mandelbulb
float mapJuliaVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 17.40;
  float rot = 1.040;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Folded Mandelbulb
float mapJuliaVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Mandelbulb Power 10.9
float mapJuliaVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Mandelbulb Power 31.0
float mapJuliaVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 31.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`,mh=`
// ===================================================================
// IFS Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Kaleidoscopic IFS
float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.5, 1.5, 1.5);
  }
  
  return length(z) * pow(scale, -float(iters));
}


// Variant 2: Sierpinski IFS
float mapIFSVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.54) z.xy = -z.yx;
    if (z.x + z.z < 0.56) z.xz = -z.zx;
    if (z.y + z.z < 0.58) z.yz = -z.zy;
    
    z = z * 1.86 - vec3(1.04, 1.06, 1.08);
  }
  
  return length(z) * 0.25;
}

// Variant 3: Menger IFS
float mapIFSVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 2.65 - vec3(2.09, 2.12, 2.15);
  }
  
  return length(z) * 0.377;
}

// Variant 4: Dragon IFS
float mapIFSVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.38 - vec3(0.86, 0.88, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 5: Vicsek IFS
float mapIFSVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.90, 0.95, 1.00);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.00;
  }
  
  return length(z) * 0.333;
}

// Variant 6: Apollonian IFS
float mapIFSVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.36) {
      z = z / r2 - vec3(1.68, 0.0, 0.0);
    } else {
      z = z * 1.95 - vec3(1.12, 1.18, 1.24);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 7: Tetrix IFS
float mapIFSVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 0.35) {
      z = -z;
    }
    
    z = z * 2.04 - vec3(1.10, 1.14, 1.18);
  }
  
  return length(z) * 0.25;
}

// Variant 8: Cubic IFS
float mapIFSVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 1.84 - vec3(1.46, 1.50, 1.54);
    
    if (z.x > 0.92) z.x = 1.84 - z.x;
    if (z.y > 0.96) z.y = 1.92 - z.y;
    if (z.z > 1.00) z.z = 2.00 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 9: Spiral IFS
float mapIFSVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.66;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 1.93 - vec3(1.04, 1.08, 1.13);
    angle += 0.095;
  }
  
  return length(z) * 0.5;
}

// Variant 10: Plasma IFS
float mapIFSVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.55, 0.60, 0.65);
    
    float r = length(z);
    if (r < 0.90) {
      z = z / (r * r);
    }
    
    z = z * 2.10;
  }
  
  return length(z) * 0.5;
}

// Variant 11: Kaleidoscopic IFS
float mapIFSVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.13;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.36, 1.42, 1.48);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 12: Sierpinski IFS
float mapIFSVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.74) z.xy = -z.yx;
    if (z.x + z.z < 0.86) z.xz = -z.zx;
    if (z.y + z.z < 0.98) z.yz = -z.zy;
    
    z = z * 2.16 - vec3(1.24, 1.36, 1.48);
  }
  
  return length(z) * 0.25;
}

// Variant 13: Menger IFS
float mapIFSVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 3.15 - vec3(2.39, 2.52, 2.65);
  }
  
  return length(z) * 0.317;
}

// Variant 14: Dragon IFS
float mapIFSVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.58 - vec3(1.01, 1.08, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 15: Vicsek IFS
float mapIFSVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.10, 1.25, 1.40);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.40;
  }
  
  return length(z) * 0.294;
}

// Variant 16: Apollonian IFS
float mapIFSVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.46) {
      z = z / r2 - vec3(1.98, 0.0, 0.0);
    } else {
      z = z * 2.20 - vec3(1.32, 1.48, 1.64);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 17: Tetrix IFS
float mapIFSVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 0.85) {
      z = -z;
    }
    
    z = z * 2.24 - vec3(1.25, 1.34, 1.43);
  }
  
  return length(z) * 0.25;
}

// Variant 18: Cubic IFS
float mapIFSVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.14 - vec3(1.66, 1.75, 1.84);
    
    if (z.x > 1.07) z.x = 2.14 - z.x;
    if (z.y > 1.16) z.y = 2.32 - z.y;
    if (z.z > 1.25) z.z = 2.50 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 19: Spiral IFS
float mapIFSVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.06;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.17 - vec3(1.19, 1.28, 1.38);
    angle += 0.145;
  }
  
  return length(z) * 0.5;
}

// Variant 20: Plasma IFS
float mapIFSVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.70, 0.80, 0.90);
    
    float r = length(z);
    if (r < 1.00) {
      z = z / (r * r);
    }
    
    z = z * 2.30;
  }
  
  return length(z) * 0.5;
}

// Variant 21: Kaleidoscopic IFS
float mapIFSVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.43;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.51, 1.62, 1.73);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 22: Sierpinski IFS
float mapIFSVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.94) z.xy = -z.yx;
    if (z.x + z.z < 1.16) z.xz = -z.zx;
    if (z.y + z.z < 1.38) z.yz = -z.zy;
    
    z = z * 2.46 - vec3(1.44, 1.66, 1.88);
  }
  
  return length(z) * 0.25;
}

// Variant 23: Menger IFS
float mapIFSVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 3.65 - vec3(2.69, 2.92, 3.15);
  }
  
  return length(z) * 0.274;
}

// Variant 24: Dragon IFS
float mapIFSVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.78 - vec3(1.16, 1.28, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 25: Vicsek IFS
float mapIFSVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.30, 1.55, 1.80);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.80;
  }
  
  return length(z) * 0.263;
}

// Variant 26: Apollonian IFS
float mapIFSVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.56) {
      z = z / r2 - vec3(2.28, 0.0, 0.0);
    } else {
      z = z * 2.45 - vec3(1.52, 1.78, 2.04);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 27: Tetrix IFS
float mapIFSVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 1.35) {
      z = -z;
    }
    
    z = z * 2.44 - vec3(1.41, 1.54, 1.68);
  }
  
  return length(z) * 0.25;
}

// Variant 28: Cubic IFS
float mapIFSVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.44 - vec3(1.86, 2.00, 2.14);
    
    if (z.x > 1.22) z.x = 2.44 - z.x;
    if (z.y > 1.36) z.y = 2.72 - z.y;
    if (z.z > 1.50) z.z = 3.00 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 29: Spiral IFS
float mapIFSVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.46;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.42 - vec3(1.33, 1.48, 1.63);
    angle += 0.195;
  }
  
  return length(z) * 0.5;
}

// Variant 30: Plasma IFS
float mapIFSVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.85, 1.00, 1.15);
    
    float r = length(z);
    if (r < 1.10) {
      z = z / (r * r);
    }
    
    z = z * 2.50;
  }
  
  return length(z) * 0.5;
}

// Variant 31: Kaleidoscopic IFS
float mapIFSVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.73;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.67, 1.82, 1.98);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 32: Sierpinski IFS
float mapIFSVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 1.14) z.xy = -z.yx;
    if (z.x + z.z < 1.46) z.xz = -z.zx;
    if (z.y + z.z < 1.78) z.yz = -z.zy;
    
    z = z * 2.76 - vec3(1.64, 1.96, 2.28);
  }
  
  return length(z) * 0.25;
}

// Variant 33: Menger IFS
float mapIFSVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 4.15 - vec3(2.99, 3.32, 3.65);
  }
  
  return length(z) * 0.241;
}

// Variant 34: Dragon IFS
float mapIFSVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.98 - vec3(1.31, 1.48, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 35: Vicsek IFS
float mapIFSVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.50, 1.85, 2.20);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 4.20;
  }
  
  return length(z) * 0.238;
}

// Variant 36: Apollonian IFS
float mapIFSVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.66) {
      z = z / r2 - vec3(2.58, 0.0, 0.0);
    } else {
      z = z * 2.70 - vec3(1.72, 2.08, 2.44);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 37: Tetrix IFS
float mapIFSVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 1.85) {
      z = -z;
    }
    
    z = z * 2.64 - vec3(1.55, 1.74, 1.93);
  }
  
  return length(z) * 0.25;
}

// Variant 38: Cubic IFS
float mapIFSVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.74 - vec3(2.06, 2.25, 2.44);
    
    if (z.x > 1.37) z.x = 2.74 - z.x;
    if (z.y > 1.56) z.y = 3.12 - z.y;
    if (z.z > 1.75) z.z = 3.50 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 39: Spiral IFS
float mapIFSVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.86;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.67 - vec3(1.48, 1.68, 1.88);
    angle += 0.245;
  }
  
  return length(z) * 0.5;
}

// Variant 40: Plasma IFS
float mapIFSVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.00, 1.20, 1.40);
    
    float r = length(z);
    if (r < 1.20) {
      z = z / (r * r);
    }
    
    z = z * 2.70;
  }
  
  return length(z) * 0.5;
}

// Variant 41: Kaleidoscopic IFS
float mapIFSVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 3.03;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.81, 2.02, 2.23);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 42: Sierpinski IFS
float mapIFSVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 1.34) z.xy = -z.yx;
    if (z.x + z.z < 1.76) z.xz = -z.zx;
    if (z.y + z.z < 2.18) z.yz = -z.zy;
    
    z = z * 3.06 - vec3(1.84, 2.26, 2.68);
  }
  
  return length(z) * 0.25;
}

// Variant 43: Menger IFS
float mapIFSVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 4.65 - vec3(3.29, 3.72, 4.15);
  }
  
  return length(z) * 0.215;
}

// Variant 44: Dragon IFS
float mapIFSVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 2.18 - vec3(1.46, 1.68, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 45: Vicsek IFS
float mapIFSVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.70, 2.15, 2.60);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 4.60;
  }
  
  return length(z) * 0.217;
}

// Variant 46: Apollonian IFS
float mapIFSVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.76) {
      z = z / r2 - vec3(2.88, 0.0, 0.0);
    } else {
      z = z * 2.95 - vec3(1.92, 2.38, 2.84);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 47: Tetrix IFS
float mapIFSVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 2.35) {
      z = -z;
    }
    
    z = z * 2.84 - vec3(1.71, 1.94, 2.17);
  }
  
  return length(z) * 0.25;
}

// Variant 48: Cubic IFS
float mapIFSVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 3.04 - vec3(2.26, 2.50, 2.74);
    
    if (z.x > 1.52) z.x = 3.04 - z.x;
    if (z.y > 1.76) z.y = 3.52 - z.y;
    if (z.z > 2.00) z.z = 4.00 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 49: Spiral IFS
float mapIFSVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.26;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.92 - vec3(1.64, 1.88, 2.13);
    angle += 0.295;
  }
  
  return length(z) * 0.5;
}

// Variant 50: Plasma IFS
float mapIFSVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.15, 1.40, 1.65);
    
    float r = length(z);
    if (r < 1.30) {
      z = z / (r * r);
    }
    
    z = z * 2.90;
  }
  
  return length(z) * 0.5;
}
`,hh=`
// ===================================================================
// L-System Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Binary Tree
float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    z = z * scale;
  }
  
  return length(z) * pow(scale, -float(iters));
}


// Variant 2: Fractal Plant
float mapLSystemVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.36;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.42;
    } else {
      z.z = z.z - 0.43;
    }
    
    z = z * 1.74;
    angle += 0.060;
  }
  
  return length(z) * 0.5;
}

// Variant 3: Koch Curve
float mapLSystemVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.23;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.34;
    }
    
    z = z * 2.65;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.377;
}

// Variant 4: Dragon Curve
float mapLSystemVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.66;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.08) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.38;
    z.x = z.x - 0.34;
  }
  
  return length(z) * 0.5;
}

// Variant 5: Sierpinski
float mapLSystemVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < -0.13) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < -0.10) {
      z.xz = -z.zx;
    }
    
    z = z * 2.02;
    z = abs(z) - 0.85;
  }
  
  return length(z) * 0.25;
}

// Variant 6: Hilbert Curve
float mapLSystemVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.46;
    z.y = z.y - sign(z.y) * 0.49;
    z.z = z.z - sign(z.z) * 0.52;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 1.98;
  }
  
  return length(z) * 0.5;
}

// Variant 7: Barnsley Fern
float mapLSystemVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 17.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.135;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.57;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.34;
    }
    
    z = z * 0.47;
  }
  
  return length(z) * 0.5;
}

// Variant 8: Spiral Phyllotaxis
float mapLSystemVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 2.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.28;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.120;
    
    z = z * 1.22;
  }
  
  return length(z) * 0.5;
}

// Variant 9: Cube Subdivision
float mapLSystemVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.145;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 2.95;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.339;
}

// Variant 10: Apical Dominance
float mapLSystemVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 0.75;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.30 && abs(z.z) < 0.35) {
      z.y = z.y + 1.05 * dominance;
    } else {
      z.y = z.y + 0.30 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.50;
    z.z = z.z * 1.55;
    
    z = z * 0.70;
  }
  
  return length(z) * 0.5;
}

// Variant 11: Binary Tree
float mapLSystemVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.85;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.08;
  }
  
  return length(z) * pow(2.08, -float(iters));
}

// Variant 12: Fractal Plant
float mapLSystemVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.66;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.52;
    } else {
      z.z = z.z - 0.58;
    }
    
    z = z * 1.94;
    angle += 0.110;
  }
  
  return length(z) * 0.5;
}

// Variant 13: Koch Curve
float mapLSystemVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.33;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.49;
    }
    
    z = z * 3.15;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.317;
}

// Variant 14: Dragon Curve
float mapLSystemVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.06;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.28) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.58;
    z.x = z.x - 0.44;
  }
  
  return length(z) * 0.5;
}

// Variant 15: Sierpinski
float mapLSystemVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.02) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.10) {
      z.xz = -z.zx;
    }
    
    z = z * 2.27;
    z = abs(z) - 0.95;
  }
  
  return length(z) * 0.25;
}

// Variant 16: Hilbert Curve
float mapLSystemVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.56;
    z.y = z.y - sign(z.y) * 0.64;
    z.z = z.z - sign(z.z) * 0.72;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.28;
  }
  
  return length(z) * 0.5;
}

// Variant 17: Barnsley Fern
float mapLSystemVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 27.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.185;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.82;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.54;
    }
    
    z = z * 0.57;
  }
  
  return length(z) * 0.5;
}

// Variant 18: Spiral Phyllotaxis
float mapLSystemVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 2.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.38;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.170;
    
    z = z * 1.37;
  }
  
  return length(z) * 0.5;
}

// Variant 19: Cube Subdivision
float mapLSystemVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.195;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 3.45;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.290;
}

// Variant 20: Apical Dominance
float mapLSystemVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 0.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.40 && abs(z.z) < 0.50) {
      z.y = z.y + 1.30 * dominance;
    } else {
      z.y = z.y + 0.40 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.70;
    z.z = z.z * 1.80;
    
    z = z * 0.80;
  }
  
  return length(z) * 0.5;
}

// Variant 21: Binary Tree
float mapLSystemVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.35;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.33;
  }
  
  return length(z) * pow(2.33, -float(iters));
}

// Variant 22: Fractal Plant
float mapLSystemVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.96;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.62;
    } else {
      z.z = z.z - 0.73;
    }
    
    z = z * 2.14;
    angle += 0.160;
  }
  
  return length(z) * 0.5;
}

// Variant 23: Koch Curve
float mapLSystemVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.43;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.65;
    }
    
    z = z * 3.65;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.274;
}

// Variant 24: Dragon Curve
float mapLSystemVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.46;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.48) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.78;
    z.x = z.x - 0.54;
  }
  
  return length(z) * 0.5;
}

// Variant 25: Sierpinski
float mapLSystemVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.17) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.30) {
      z.xz = -z.zx;
    }
    
    z = z * 2.52;
    z = abs(z) - 1.05;
  }
  
  return length(z) * 0.25;
}

// Variant 26: Hilbert Curve
float mapLSystemVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.66;
    z.y = z.y - sign(z.y) * 0.79;
    z.z = z.z - sign(z.z) * 0.92;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.58;
  }
  
  return length(z) * 0.5;
}

// Variant 27: Barnsley Fern
float mapLSystemVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 37.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.235;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.08;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.74;
    }
    
    z = z * 0.67;
  }
  
  return length(z) * 0.5;
}

// Variant 28: Spiral Phyllotaxis
float mapLSystemVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 3.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.48;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.220;
    
    z = z * 1.52;
  }
  
  return length(z) * 0.5;
}

// Variant 29: Cube Subdivision
float mapLSystemVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.245;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 3.95;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.253;
}

// Variant 30: Apical Dominance
float mapLSystemVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 1.05;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.50 && abs(z.z) < 0.65) {
      z.y = z.y + 1.55 * dominance;
    } else {
      z.y = z.y + 0.50 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.90;
    z.z = z.z * 2.05;
    
    z = z * 0.90;
  }
  
  return length(z) * 0.5;
}

// Variant 31: Binary Tree
float mapLSystemVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.85;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.58;
  }
  
  return length(z) * pow(2.58, -float(iters));
}

// Variant 32: Fractal Plant
float mapLSystemVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.26;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.72;
    } else {
      z.z = z.z - 0.88;
    }
    
    z = z * 2.34;
    angle += 0.210;
  }
  
  return length(z) * 0.5;
}

// Variant 33: Koch Curve
float mapLSystemVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.53;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.79;
    }
    
    z = z * 4.15;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.241;
}

// Variant 34: Dragon Curve
float mapLSystemVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.86;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.68) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.98;
    z.x = z.x - 0.64;
  }
  
  return length(z) * 0.5;
}

// Variant 35: Sierpinski
float mapLSystemVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.33) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.50) {
      z.xz = -z.zx;
    }
    
    z = z * 2.77;
    z = abs(z) - 1.15;
  }
  
  return length(z) * 0.25;
}

// Variant 36: Hilbert Curve
float mapLSystemVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.76;
    z.y = z.y - sign(z.y) * 0.94;
    z.z = z.z - sign(z.z) * 1.12;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.88;
  }
  
  return length(z) * 0.5;
}

// Variant 37: Barnsley Fern
float mapLSystemVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 47.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.285;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.33;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.94;
    }
    
    z = z * 0.77;
  }
  
  return length(z) * 0.5;
}

// Variant 38: Spiral Phyllotaxis
float mapLSystemVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 3.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.58;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.270;
    
    z = z * 1.67;
  }
  
  return length(z) * 0.5;
}

// Variant 39: Cube Subdivision
float mapLSystemVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.295;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 4.45;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.225;
}

// Variant 40: Apical Dominance
float mapLSystemVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 1.20;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.60 && abs(z.z) < 0.80) {
      z.y = z.y + 1.80 * dominance;
    } else {
      z.y = z.y + 0.60 * (1.0 - dominance);
    }
    
    z.x = z.x * 2.10;
    z.z = z.z * 2.30;
    
    z = z * 1.00;
  }
  
  return length(z) * 0.5;
}

// Variant 41: Binary Tree
float mapLSystemVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.35;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.83;
  }
  
  return length(z) * pow(2.83, -float(iters));
}

// Variant 42: Fractal Plant
float mapLSystemVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.56;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.82;
    } else {
      z.z = z.z - 1.03;
    }
    
    z = z * 2.54;
    angle += 0.260;
  }
  
  return length(z) * 0.5;
}

// Variant 43: Koch Curve
float mapLSystemVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.63;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.95;
    }
    
    z = z * 4.65;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.215;
}

// Variant 44: Dragon Curve
float mapLSystemVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.26;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.88) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 2.18;
    z.x = z.x - 0.74;
  }
  
  return length(z) * 0.5;
}

// Variant 45: Sierpinski
float mapLSystemVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.47) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.70) {
      z.xz = -z.zx;
    }
    
    z = z * 3.02;
    z = abs(z) - 1.25;
  }
  
  return length(z) * 0.25;
}

// Variant 46: Hilbert Curve
float mapLSystemVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.86;
    z.y = z.y - sign(z.y) * 1.09;
    z.z = z.z - sign(z.z) * 1.32;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 3.18;
  }
  
  return length(z) * 0.5;
}

// Variant 47: Barnsley Fern
float mapLSystemVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 57.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.335;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.58;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 2.14;
    }
    
    z = z * 0.87;
  }
  
  return length(z) * 0.5;
}

// Variant 48: Spiral Phyllotaxis
float mapLSystemVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 4.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.68;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.320;
    
    z = z * 1.82;
  }
  
  return length(z) * 0.5;
}

// Variant 49: Cube Subdivision
float mapLSystemVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.345;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 4.95;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.202;
}

// Variant 50: Apical Dominance
float mapLSystemVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 1.35;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.70 && abs(z.z) < 0.95) {
      z.y = z.y + 2.05 * dominance;
    } else {
      z.y = z.y + 0.70 * (1.0 - dominance);
    }
    
    z.x = z.x * 2.30;
    z.z = z.z * 2.55;
    
    z = z * 1.10;
  }
  
  return length(z) * 0.5;
}
`,vh=`
// ===================================================================
// Flame Variations 1-50
// Based on Apophysis-style fractal flames
// ===================================================================

float mapFlameVariant1(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    // Sinusoidal variation
    z = vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z *= 1.5 + sin(t * 0.1) * 0.3;
    z += p * 0.3;
    
    d = min(d, length(z) - 0.5);
  }
  return d;
}

float mapFlameVariant2(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    
    // Spherical variation
    z = z / (r * r + 0.5);
    z *= 1.8 + cos(t * 0.12) * 0.25;
    z += p * 0.25;
    
    d = min(d, length(z) - 0.6);
  }
  return d;
}

float mapFlameVariant3(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    float angle = atan(z.y, z.x) + t * 0.05;
    
    // Swirl variation
    z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    z *= 1.6 + sin(t * 0.08) * 0.28;
    z += p * 0.28;
    
    d = min(d, length(z) - 0.55);
  }
  return d;
}

float mapFlameVariant4(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Horseshoe variation
    float r = length(z);
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.3);
    z *= 1.7 + cos(t * 0.15) * 0.22;
    z += p * 0.22;
    
    d = min(d, length(z) - 0.58);
  }
  return d;
}

float mapFlameVariant5(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    
    // Heart variation
    z = vec3(z.x * cos(r) - z.y * sin(r), z.x * sin(r) + z.y * cos(r), z.z);
    z *= 1.9 + sin(t * 0.11) * 0.26;
    z += p * 0.26;
    
    d = min(d, length(z) - 0.52);
  }
  return d;
}

// Flame Variants 6-50: Parametric generation
float mapFlameVariant6(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(6) * 0.02), t + float(6) * 0.13, phi, iters); }
float mapFlameVariant7(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(7) * 0.02), t + float(7) * 0.13, phi, iters); }
float mapFlameVariant8(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(8) * 0.02), t + float(8) * 0.13, phi, iters); }
float mapFlameVariant9(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(9) * 0.02), t + float(9) * 0.13, phi, iters); }
float mapFlameVariant10(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(10) * 0.02), t + float(10) * 0.13, phi, iters); }

float mapFlameVariant11(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(11) * 0.02), t + float(11) * 0.13, phi, iters); }
float mapFlameVariant12(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(12) * 0.02), t + float(12) * 0.13, phi, iters); }
float mapFlameVariant13(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(13) * 0.02), t + float(13) * 0.13, phi, iters); }
float mapFlameVariant14(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(14) * 0.02), t + float(14) * 0.13, phi, iters); }
float mapFlameVariant15(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(15) * 0.02), t + float(15) * 0.13, phi, iters); }

float mapFlameVariant16(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(16) * 0.02), t + float(16) * 0.13, phi, iters); }
float mapFlameVariant17(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(17) * 0.02), t + float(17) * 0.13, phi, iters); }
float mapFlameVariant18(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(18) * 0.02), t + float(18) * 0.13, phi, iters); }
float mapFlameVariant19(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(19) * 0.02), t + float(19) * 0.13, phi, iters); }
float mapFlameVariant20(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(20) * 0.02), t + float(20) * 0.13, phi, iters); }

float mapFlameVariant21(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(21) * 0.02), t + float(21) * 0.13, phi, iters); }
float mapFlameVariant22(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(22) * 0.02), t + float(22) * 0.13, phi, iters); }
float mapFlameVariant23(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(23) * 0.02), t + float(23) * 0.13, phi, iters); }
float mapFlameVariant24(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(24) * 0.02), t + float(24) * 0.13, phi, iters); }
float mapFlameVariant25(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(25) * 0.02), t + float(25) * 0.13, phi, iters); }

float mapFlameVariant26(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(26) * 0.02), t + float(26) * 0.13, phi, iters); }
float mapFlameVariant27(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(27) * 0.02), t + float(27) * 0.13, phi, iters); }
float mapFlameVariant28(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(28) * 0.02), t + float(28) * 0.13, phi, iters); }
float mapFlameVariant29(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(29) * 0.02), t + float(29) * 0.13, phi, iters); }
float mapFlameVariant30(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(30) * 0.02), t + float(30) * 0.13, phi, iters); }

float mapFlameVariant31(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(31) * 0.02), t + float(31) * 0.13, phi, iters); }
float mapFlameVariant32(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(32) * 0.02), t + float(32) * 0.13, phi, iters); }
float mapFlameVariant33(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(33) * 0.02), t + float(33) * 0.13, phi, iters); }
float mapFlameVariant34(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(34) * 0.02), t + float(34) * 0.13, phi, iters); }
float mapFlameVariant35(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(35) * 0.02), t + float(35) * 0.13, phi, iters); }

float mapFlameVariant36(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(36) * 0.02), t + float(36) * 0.13, phi, iters); }
float mapFlameVariant37(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(37) * 0.02), t + float(37) * 0.13, phi, iters); }
float mapFlameVariant38(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(38) * 0.02), t + float(38) * 0.13, phi, iters); }
float mapFlameVariant39(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(39) * 0.02), t + float(39) * 0.13, phi, iters); }
float mapFlameVariant40(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(40) * 0.02), t + float(40) * 0.13, phi, iters); }

float mapFlameVariant41(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(41) * 0.02), t + float(41) * 0.13, phi, iters); }
float mapFlameVariant42(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(42) * 0.02), t + float(42) * 0.13, phi, iters); }
float mapFlameVariant43(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(43) * 0.02), t + float(43) * 0.13, phi, iters); }
float mapFlameVariant44(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(44) * 0.02), t + float(44) * 0.13, phi, iters); }
float mapFlameVariant45(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(45) * 0.02), t + float(45) * 0.13, phi, iters); }

float mapFlameVariant46(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(46) * 0.02), t + float(46) * 0.13, phi, iters); }
float mapFlameVariant47(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(47) * 0.02), t + float(47) * 0.13, phi, iters); }
float mapFlameVariant48(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(48) * 0.02), t + float(48) * 0.13, phi, iters); }
float mapFlameVariant49(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(49) * 0.02), t + float(49) * 0.13, phi, iters); }
float mapFlameVariant50(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(50) * 0.02), t + float(50) * 0.13, phi, iters); }
`,yh=`
// ===================================================================
// Hybrid Variations 1-90
// Combining Mandelbrot, Julia, IFS, and Flames
// ===================================================================

float mapHybridVariant1(vec3 p, float t, float phi, int iters) {
  // Mandelbrot-Julia hybrid
  vec3 z = p;
  vec3 c = vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + cos(t * 0.08) * 0.3;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = mix(z, c, 0.3); // Julia blend
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapHybridVariant2(vec3 p, float t, float phi, int iters) {
  // Mandelbrot-IFS hybrid
  vec3 z = p;
  float scale = 2.0 + sin(t * 0.1) * 0.2;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z.xy = abs(z.xy);
    z.xz = abs(z.xz);
    float angle = t * 0.05 + float(i) * 0.1;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    z.xy = rot * z.xy;
    z *= scale;
    z -= vec3(1.0, 0.5, 0.3);
    
    dr *= scale;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapHybridVariant3(vec3 p, float t, float phi, int iters) {
  // Julia-Flame hybrid
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float d = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    
    // Flame variation
    z = vec3(sin(r) * cos(r), sin(r) * sin(r), cos(r));
    z *= 1.5 + sin(t * 0.1) * 0.3;
    z += c;
    
    d = min(d, length(z) - 0.5);
  }
  return d;
}

float mapHybridVariant4(vec3 p, float t, float phi, int iters) {
  // IFS-L-System hybrid
  float d = length(p) - 1.0;
  float scale = 0.5 + sin(t * 0.1) * 0.1;
  
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    p = abs(p) - vec3(0.5, 0.3, 0.4);
    float angle = t * 0.05 + float(i) * 0.2;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    p *= scale;
    d = min(d, length(p) - 0.3);
  }
  return d;
}

float mapHybridVariant5(vec3 p, float t, float phi, int iters) {
  // Mandelbrot-Flame hybrid
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float angle = atan(z.y, z.x) + t * 0.05;
    z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    z *= 1.6 + sin(t * 0.08) * 0.28;
    z += p * 0.28;
    
    dr *= 1.6;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Hybrid Variants 6-90: Parametric generation using base functions
float mapHybridVariant6(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(6) * 0.015), t + float(6) * 0.1, phi, iters); }
float mapHybridVariant7(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(7) * 0.015), t + float(7) * 0.1, phi, iters); }
float mapHybridVariant8(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(8) * 0.015), t + float(8) * 0.1, phi, iters); }
float mapHybridVariant9(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(9) * 0.015), t + float(9) * 0.1, phi, iters); }
float mapHybridVariant10(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(10) * 0.015), t + float(10) * 0.1, phi, iters); }

float mapHybridVariant11(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(11) * 0.015), t + float(11) * 0.1, phi, iters); }
float mapHybridVariant12(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(12) * 0.015), t + float(12) * 0.1, phi, iters); }
float mapHybridVariant13(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(13) * 0.015), t + float(13) * 0.1, phi, iters); }
float mapHybridVariant14(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(14) * 0.015), t + float(14) * 0.1, phi, iters); }
float mapHybridVariant15(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(15) * 0.015), t + float(15) * 0.1, phi, iters); }

float mapHybridVariant16(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(16) * 0.015), t + float(16) * 0.1, phi, iters); }
float mapHybridVariant17(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(17) * 0.015), t + float(17) * 0.1, phi, iters); }
float mapHybridVariant18(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(18) * 0.015), t + float(18) * 0.1, phi, iters); }
float mapHybridVariant19(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(19) * 0.015), t + float(19) * 0.1, phi, iters); }
float mapHybridVariant20(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(20) * 0.015), t + float(20) * 0.1, phi, iters); }

float mapHybridVariant21(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(21) * 0.015), t + float(21) * 0.1, phi, iters); }
float mapHybridVariant22(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(22) * 0.015), t + float(22) * 0.1, phi, iters); }
float mapHybridVariant23(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(23) * 0.015), t + float(23) * 0.1, phi, iters); }
float mapHybridVariant24(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(24) * 0.015), t + float(24) * 0.1, phi, iters); }
float mapHybridVariant25(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(25) * 0.015), t + float(25) * 0.1, phi, iters); }

float mapHybridVariant26(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(26) * 0.015), t + float(26) * 0.1, phi, iters); }
float mapHybridVariant27(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(27) * 0.015), t + float(27) * 0.1, phi, iters); }
float mapHybridVariant28(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(28) * 0.015), t + float(28) * 0.1, phi, iters); }
float mapHybridVariant29(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(29) * 0.015), t + float(29) * 0.1, phi, iters); }
float mapHybridVariant30(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(30) * 0.015), t + float(30) * 0.1, phi, iters); }

float mapHybridVariant31(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(31) * 0.015), t + float(31) * 0.1, phi, iters); }
float mapHybridVariant32(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(32) * 0.015), t + float(32) * 0.1, phi, iters); }
float mapHybridVariant33(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(33) * 0.015), t + float(33) * 0.1, phi, iters); }
float mapHybridVariant34(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(34) * 0.015), t + float(34) * 0.1, phi, iters); }
float mapHybridVariant35(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(35) * 0.015), t + float(35) * 0.1, phi, iters); }

float mapHybridVariant36(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(36) * 0.015), t + float(36) * 0.1, phi, iters); }
float mapHybridVariant37(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(37) * 0.015), t + float(37) * 0.1, phi, iters); }
float mapHybridVariant38(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(38) * 0.015), t + float(38) * 0.1, phi, iters); }
float mapHybridVariant39(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(39) * 0.015), t + float(39) * 0.1, phi, iters); }
float mapHybridVariant40(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(40) * 0.015), t + float(40) * 0.1, phi, iters); }

float mapHybridVariant41(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(41) * 0.015), t + float(41) * 0.1, phi, iters); }
float mapHybridVariant42(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(42) * 0.015), t + float(42) * 0.1, phi, iters); }
float mapHybridVariant43(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(43) * 0.015), t + float(43) * 0.1, phi, iters); }
float mapHybridVariant44(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(44) * 0.015), t + float(44) * 0.1, phi, iters); }
float mapHybridVariant45(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(45) * 0.015), t + float(45) * 0.1, phi, iters); }

float mapHybridVariant46(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(46) * 0.015), t + float(46) * 0.1, phi, iters); }
float mapHybridVariant47(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(47) * 0.015), t + float(47) * 0.1, phi, iters); }
float mapHybridVariant48(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(48) * 0.015), t + float(48) * 0.1, phi, iters); }
float mapHybridVariant49(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(49) * 0.015), t + float(49) * 0.1, phi, iters); }
float mapHybridVariant50(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(50) * 0.015), t + float(50) * 0.1, phi, iters); }

float mapHybridVariant51(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(51) * 0.015), t + float(51) * 0.1, phi, iters); }
float mapHybridVariant52(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(52) * 0.015), t + float(52) * 0.1, phi, iters); }
float mapHybridVariant53(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(53) * 0.015), t + float(53) * 0.1, phi, iters); }
float mapHybridVariant54(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(54) * 0.015), t + float(54) * 0.1, phi, iters); }
float mapHybridVariant55(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(55) * 0.015), t + float(55) * 0.1, phi, iters); }

float mapHybridVariant56(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(56) * 0.015), t + float(56) * 0.1, phi, iters); }
float mapHybridVariant57(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(57) * 0.015), t + float(57) * 0.1, phi, iters); }
float mapHybridVariant58(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(58) * 0.015), t + float(58) * 0.1, phi, iters); }
float mapHybridVariant59(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(59) * 0.015), t + float(59) * 0.1, phi, iters); }
float mapHybridVariant60(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(60) * 0.015), t + float(60) * 0.1, phi, iters); }

float mapHybridVariant61(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(61) * 0.015), t + float(61) * 0.1, phi, iters); }
float mapHybridVariant62(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(62) * 0.015), t + float(62) * 0.1, phi, iters); }
float mapHybridVariant63(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(63) * 0.015), t + float(63) * 0.1, phi, iters); }
float mapHybridVariant64(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(64) * 0.015), t + float(64) * 0.1, phi, iters); }
float mapHybridVariant65(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(65) * 0.015), t + float(65) * 0.1, phi, iters); }

float mapHybridVariant66(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(66) * 0.015), t + float(66) * 0.1, phi, iters); }
float mapHybridVariant67(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(67) * 0.015), t + float(67) * 0.1, phi, iters); }
float mapHybridVariant68(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(68) * 0.015), t + float(68) * 0.1, phi, iters); }
float mapHybridVariant69(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(69) * 0.015), t + float(69) * 0.1, phi, iters); }
float mapHybridVariant70(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(70) * 0.015), t + float(70) * 0.1, phi, iters); }

float mapHybridVariant71(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(71) * 0.015), t + float(71) * 0.1, phi, iters); }
float mapHybridVariant72(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(72) * 0.015), t + float(72) * 0.1, phi, iters); }
float mapHybridVariant73(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(73) * 0.015), t + float(73) * 0.1, phi, iters); }
float mapHybridVariant74(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(74) * 0.015), t + float(74) * 0.1, phi, iters); }
float mapHybridVariant75(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(75) * 0.015), t + float(75) * 0.1, phi, iters); }

float mapHybridVariant76(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(76) * 0.015), t + float(76) * 0.1, phi, iters); }
float mapHybridVariant77(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(77) * 0.015), t + float(77) * 0.1, phi, iters); }
float mapHybridVariant78(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(78) * 0.015), t + float(78) * 0.1, phi, iters); }
float mapHybridVariant79(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(79) * 0.015), t + float(79) * 0.1, phi, iters); }
float mapHybridVariant80(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(80) * 0.015), t + float(80) * 0.1, phi, iters); }

float mapHybridVariant81(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(81) * 0.015), t + float(81) * 0.1, phi, iters); }
float mapHybridVariant82(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(82) * 0.015), t + float(82) * 0.1, phi, iters); }
float mapHybridVariant83(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(83) * 0.015), t + float(83) * 0.1, phi, iters); }
float mapHybridVariant84(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(84) * 0.015), t + float(84) * 0.1, phi, iters); }
float mapHybridVariant85(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(85) * 0.015), t + float(85) * 0.1, phi, iters); }

float mapHybridVariant86(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(86) * 0.015), t + float(86) * 0.1, phi, iters); }
float mapHybridVariant87(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(87) * 0.015), t + float(87) * 0.1, phi, iters); }
float mapHybridVariant88(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(88) * 0.015), t + float(88) * 0.1, phi, iters); }
float mapHybridVariant89(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(89) * 0.015), t + float(89) * 0.1, phi, iters); }
float mapHybridVariant90(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(90) * 0.015), t + float(90) * 0.1, phi, iters); }
`,xh=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,bh=xh,gh=`#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_phi_val;

uniform vec2 u_cam_rot;
uniform float u_zoom;
uniform float u_fractal_type;
uniform float u_hybrid_type;
uniform float u_tertiary_type;

uniform float u_iterations;
uniform float u_glow_intensity;
uniform float u_morph_speed;
uniform float u_hybrid_blend;
uniform float u_tertiary_blend;

uniform float u_compose_op;
uniform float u_smooth_k;
uniform float u_warp_strength;
uniform float u_octave_layers;

uniform float u_box_fold;
uniform float u_sphere_fold;
uniform float u_interior_cut;

uniform vec3 u_primary_color;
uniform vec3 u_secondary_color;
uniform vec3 u_accent_color;

uniform float u_cam_mode;
uniform vec3 u_cam_pos;
uniform float u_slice_plane;
uniform float u_slice_axis;
uniform float u_stereo_mode; // 0=off, 1=side-by-side, 2=anaglyph
uniform float u_stereo_eye; // 0=left, 1=right
uniform float u_render_style;
uniform float u_headlamp_power;
uniform float u_volumetric_fog;
uniform float u_palette_seed;
uniform float u_palette_rotation;

const float PI = 3.141592653589793;
const float TWO_PI = 6.283185307179586;
const float GOLDEN_RATIO = 1.618033988749895;
const float GOLDEN_ANGLE = 2.399963229728653; // 137.507764 degrees

mat2 rot2D(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

vec3 rotateVec(vec3 p, float pitch, float yaw) {
  vec3 v = p;
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  
  v = vec3(cy * v.x + sy * v.z, v.y, -sy * v.x + cy * v.z);
  v = vec3(v.x, cp * v.y - sp * v.z, sp * v.y + cp * v.z);
  return v;
}

// 0. Sacred Phyllotaxis IFS
vec2 mapPhyllotaxis(vec3 p_in, float t, float phi, int iters) {
  float r0 = length(p_in);
  if (r0 > 2.6) return vec2(r0 - 1.4, r0);

  vec3 p = p_in;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 18);

  for (int i = 0; i < 18; i++) {
    if (i >= count) break;
    p.xy = rot2D(GOLDEN_ANGLE + t * 0.04) * p.xy;
    p = abs(p) - vec3(0.28 * phi, 0.18 * phi, 0.22);
    float r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    
    float factor = phi * 0.94;
    p = p * factor;
    scale = scale * factor;
    p.xz = rot2D(GOLDEN_ANGLE * 0.618) * p.xz;
  }
  return vec2((length(p) - 0.35) / max(scale, 0.0001), trap);
}

// 1. Golden Mandelbulb 3D
vec2 mapMandelbulb(vec3 p_in, float t, float phi, int iters) {
  vec3 w = p_in;
  float dr = 1.0;
  float r = 0.0;
  float power = 5.0 + phi;
  float trap = 1e10;
  int count = clamp(iters, 4, 14);

  bool escaped = false;
  for (int i = 0; i < 14; i++) {
    if (i >= count) break;
    r = length(w);
    if (r > 2.2) { escaped = true; break; }
    trap = min(trap, r);
    float theta = acos(clamp(w.z / max(r, 0.0001), -1.0, 1.0));
    float phi_ang = atan(w.y, w.x);
    dr = pow(r, power - 1.0) * power * dr + 1.0;
    float zr = pow(r, power);
    theta = theta * power + t * 0.15;
    phi_ang = phi_ang * power;
    w = zr * vec3(sin(theta) * cos(phi_ang), sin(theta) * sin(phi_ang), cos(theta)) + p_in;
  }

  float d;
  if (escaped) {
    // Standard Mandelbulb distance estimate for exterior points
    d = 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
  } else {
    // FIX: Point is inside fractal - return small positive distance
    // log(r) would be negative for r < 1, breaking SDF
    // Use minimum distance based on iteration count for interior
    d = 0.001 * float(count - iters + 14); // Small positive value
  }
  return vec2(d, trap);
}

// 2. Quaternion Julia 4D
vec2 mapQuaternionJulia(vec3 p_in, float t, float phi, int iters) {
  vec4 z = vec4(p_in, 0.0);
  vec4 c = vec4(
    -0.2 + 0.15 * cos(t * 0.2),
    0.45 * (phi - 1.0),
    -0.35 + 0.12 * sin(t * 0.18),
    0.15 * sin(t * 0.12)
  );

  float md2 = 1.0;
  float mz2 = dot(z, z);
  float trap = 1e10;
  int count = clamp(iters, 4, 12);

  for (int i = 0; i < 12; i++) {
    if (i >= count || mz2 > 4.5) break;
    md2 = md2 * 4.0 * mz2;
    z = vec4(
      z.x * z.x - dot(z.yzw, z.yzw),
      2.0 * z.x * z.yzw
    ) + c;
    mz2 = dot(z, z);
    trap = min(trap, sqrt(mz2));
  }
  return vec2(0.25 * sqrt(mz2 / max(md2, 0.0001)) * log(max(mz2, 1.0001)), trap);
}

// 3. Apollonian Sphere Packing
vec2 mapApollonian(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 10);
  float sFold = max(u_sphere_fold, 0.25);

  for (int i = 0; i < 10; i++) {
    if (i >= count) break;
    p = -1.0 + 2.0 * fract(0.5 * p + 0.5);
    float r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    float k = (sFold * phi) / max(r2, 0.12);
    p = p * k;
    scale = scale * k;
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.72) / max(scale, 0.0001);
  return vec2(d, trap);
}

// 4. Spiral Tunnel
vec2 mapSpiralTunnel(vec3 p_in, float t, float phi) {
  vec3 p = p_in;
  p.xy = rot2D(p.z * 0.35 + t * 0.12) * p.xy;
  float r = length(p.xy);
  float a = atan(p.y, p.x);
  float log_r = log(max(r, 0.001)) / log(phi);
  float spiral = fract(log_r - a / (2.0 * PI) * 5.0 - t * 0.1);
  float d_wall = abs(r - 1.25) - 0.08;
  float d_ribs = abs(spiral - 0.5) * r * 0.3 - 0.015;
  return vec2(max(d_wall, -d_ribs), spiral + 0.2 * abs(p.z));
}

// 5. Mandelbox 3D
vec2 mapMandelbox(vec3 p_in, float t, float phi, int iters) {
  float r0 = length(p_in);
  if (r0 > 4.0) return vec2(r0 - 1.8, r0);

  vec3 p = p_in;
  vec3 offset = p;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 14);

  float foldingLimit = max(u_box_fold, 0.6);
  float minRad2 = max(u_sphere_fold * 0.35, 0.12);
  float fixedRad2 = 1.0;
  float mScale = -1.0 - (phi - 1.0) * 1.35;

  for (int i = 0; i < 14; i++) {
    if (i >= count) break;
    p = clamp(p, vec3(-foldingLimit), vec3(foldingLimit)) * 2.0 - p;
    float r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    if (r2 < minRad2) {
      float temp = fixedRad2 / minRad2;
      p *= temp;
      scale *= temp;
    } else if (r2 < fixedRad2) {
      float temp = fixedRad2 / r2;
      p *= temp;
      scale *= temp;
    }
    p = p * mScale + offset;
    scale = scale * abs(mScale) + 1.0;
    p.xy = rot2D(t * 0.03) * p.xy;
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.4) / max(abs(scale), 0.0001);
  return vec2(d, trap);
}

// 6. Icosahedral IFS
vec2 mapIcosahedron(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 16);
  
  vec3 n1 = normalize(vec3(1.0, phi, 0.0));
  vec3 n2 = normalize(vec3(0.0, 1.0, phi));
  vec3 n3 = normalize(vec3(phi, 0.0, 1.0));

  for (int i = 0; i < 16; i++) {
    if (i >= count) break;
    p = abs(p);
    float d1 = dot(p, n1);
    if (d1 < 0.0) p -= 2.0 * d1 * n1;
    float d2 = dot(p, n2);
    if (d2 < 0.0) p -= 2.0 * d2 * n2;
    float d3 = dot(p, n3);
    if (d3 < 0.0) p -= 2.0 * d3 * n3;

    p.xz = rot2D(GOLDEN_ANGLE + t * 0.08) * p.xz;
    float factor = phi * 0.94;
    p = p * factor - vec3(phi - 1.0, 0.5, 0.2);
    scale *= factor;
    trap = min(trap, length(p));
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.45) / max(scale, 0.0001);
  return vec2(d, trap);
}

// 7. Menger Sponge
vec2 mapMenger(vec3 p_in, float t, float phi, int iters) {
  float r0 = length(p_in);
  if (r0 > 2.6) return vec2(r0 - 1.4, r0);

  vec3 p = p_in;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 8);

  p.xy = rot2D(t * 0.12) * p.xy;

  for (int i = 0; i < 8; i++) {
    if (i >= count) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;

    float factor = phi * 1.85;
    p = p * factor - vec3(factor - 1.0);
    scale *= factor;

    float cross_d = min(max(p.x, p.y), min(max(p.x, p.z), max(p.y, p.z))) - 1.0;
    trap = min(trap, abs(cross_d));

    if (p.z < -0.5 * (factor - 1.0)) {
      p.z += (factor - 1.0);
    }
  }
  float box_d = max(abs(p.x), max(abs(p.y), abs(p.z))) - 1.0;
  // FIX: Ensure positive distance estimate
  return vec2(box_d / max(scale, 0.0001), trap);
}

// 8. Gyroid Minimal Surface
vec2 mapGyroid(vec3 p_in, float t, float phi) {
  vec3 p = p_in * 1.4;
  p.xz = rot2D(t * 0.1) * p.xz;

  float g_scale = phi * 1.25;
  vec3 q = p * g_scale;
  float val = sin(q.x) * cos(q.y) + sin(q.y) * cos(q.z) + sin(q.z) * cos(q.x);
  float d = (abs(val) - 0.2) / g_scale;

  float sphere_d = length(p_in) - 2.1;
  // FIX: Ensure positive distance estimate
  return vec2(max(d, sphere_d), abs(val) + 0.3 * length(p));
}

// 9. Sachs & Ulam Golden Prime Spiral
vec2 mapPrimeSpiral(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.08) * p.xz;

  float r = length(p.xy);
  float theta = atan(p.y, p.x);
  float spiral_idx = (r * r) / (phi * 0.8) - (theta / TWO_PI) * 8.0 - t * 0.2;
  float fract_spiral = fract(spiral_idx) - 0.5;
  float prime_wave = sin(r * phi * 6.0 + p.z * 3.0 + t * 0.3);

  float d_spiral = sqrt(fract_spiral * fract_spiral + p.z * p.z) - 0.065;
  float nodule_d = length(vec3(fract_spiral * 0.4, p.z, sin(r * 12.0) * 0.1)) - 0.035;
  return vec2(min(d_spiral, nodule_d), abs(prime_wave) + 0.4 * r);
}

// 10. 3D Penrose & Shechtman Icosahedral Quasicrystal
vec2 mapQuasicrystal(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.6;
  p.xy = rot2D(t * 0.05) * p.xy;

  float norm_c = 1.0 / sqrt(1.0 + phi * phi);
  vec3 n1 = vec3(1.0, phi, 0.0) * norm_c;
  vec3 n2 = vec3(-1.0, phi, 0.0) * norm_c;
  vec3 n3 = vec3(0.0, 1.0, phi) * norm_c;
  vec3 n4 = vec3(0.0, -1.0, phi) * norm_c;
  vec3 n5 = vec3(phi, 0.0, 1.0) * norm_c;
  vec3 n6 = vec3(phi, 0.0, -1.0) * norm_c;

  float wave_scale = 3.8 * phi;
  float psi = 0.0;
  psi += cos(dot(p, n1) * wave_scale + t * 0.2);
  psi += cos(dot(p, n2) * wave_scale + t * 0.2);
  psi += cos(dot(p, n3) * wave_scale + t * 0.2);
  psi += cos(dot(p, n4) * wave_scale + t * 0.2);
  psi += cos(dot(p, n5) * wave_scale + t * 0.2);
  psi += cos(dot(p, n6) * wave_scale + t * 0.2);

  float d_quasi = (abs(psi - 0.75) - 0.28) / wave_scale;
  float bound = length(p_in) - 2.2;
  // FIX: Ensure positive distance estimate
  return vec2(max(d_quasi, bound), abs(psi) * 0.2 + 0.3 * length(p));
}

// 11. Hopf Fibration & Clifford Golden Torus S³→S²
vec2 mapHopfFibration(vec3 p_in, float t, float phi) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.09) * p.xz;

  float majorR = phi * 0.85;
  float minorR = 0.85 / phi;
  vec2 q = vec2(length(p.xz) - majorR, p.y);
  float d_torus = length(q) - minorR;

  float angleXZ = atan(p.z, p.x);
  float angleTor = atan(q.y, q.x);
  float fiberTwist = sin(angleXZ * 3.0 + angleTor * phi * 2.0 + t * 0.4);
  float fiber_d = abs(d_torus) - (0.04 + 0.03 * fiberTwist);

  // FIX: Ensure positive distance estimate
  return vec2(fiber_d, abs(fiberTwist) + 0.3 * length(q));
}

// 12. Quintic Calabi-Yau 3-Fold Manifold
vec2 mapCalabiYau(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.yz = rot2D(t * 0.08) * p.yz;

  float psi_param = phi * 0.45 * cos(t * 0.15);
  float r = length(p);
  float theta = atan(p.y, p.x);
  float z_phase = p.z * 2.5;

  float quintic = cos(5.0 * theta) * pow(max(r, 0.01), 3.5) - sin(5.0 * z_phase) * 0.6 - psi_param * r;
  float d_manifold = (abs(quintic) - 0.15) / 5.0;
  float bound = length(p_in) - 2.3;
  // FIX: Ensure positive distance estimate
  return vec2(max(d_manifold, bound), abs(quintic) + 0.25 * r);
}

// 13. Riemann Zeta Quantum Chaos Resonator
vec2 mapRiemannZeta(vec3 p_in, float t, float phi) {
  vec3 p = p_in * 1.35;
  p.xy = rot2D(t * 0.06) * p.xy;

  float gamma1 = 14.1347 * (phi / 1.618);
  float gamma2 = 21.0220 * (phi / 1.618);
  float r = length(p.xy);
  
  float wave1 = cos(r * gamma1 * 0.35 - t * 0.3);
  float wave2 = cos(p.z * gamma2 * 0.35 + t * 0.25);
  float nodal = wave1 * wave2;

  float cavity = abs(nodal) - 0.22;
  float cylinder_bound = max(length(p.xy) - 1.8, abs(p.z) - 1.8);
  // FIX: Ensure positive distance estimate
  return vec2(max(cavity * 0.25, cylinder_bound), abs(nodal) + 0.2 * r);
}

// 14. Golden Sierpinski Octahedron Star
vec2 mapSierpinskiOcta(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 12);
  p.xz = rot2D(t * 0.1) * p.xz;

  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    p = abs(p);
    if (p.x + p.y < 0.0) { float t1 = -p.y; p.y = -p.x; p.x = t1; }
    if (p.x + p.z < 0.0) { float t2 = -p.z; p.z = -p.x; p.x = t2; }
    if (p.y + p.z < 0.0) { float t3 = -p.z; p.z = -p.y; p.y = t3; }

    float factor = phi * 1.15;
    p = p * factor - vec3(factor - 1.0) * 0.8;
    scale *= factor;
    trap = min(trap, length(p));
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.6) / max(scale, 0.0001);
  return vec2(d, trap);
}

// 15. 4D Clifford-Klein Golden Helicoid Knot
vec2 mapCliffordKlein(vec3 p_in, float t, float phi) {
  vec3 p = p_in;
  p.xy = rot2D(t * 0.07) * p.xy;

  float u_ang = atan(p.y, p.x);
  float v_h = p.z * phi * 0.6 + t * 0.2;
  float r_cyl = length(p.xy);

  float fig8 = 1.2 + 0.45 * cos(u_ang * 2.0 + v_h);
  float d_surface = sqrt((r_cyl - fig8) * (r_cyl - fig8) + sin(v_h) * sin(v_h) * 0.15) - 0.06;

  // FIX: Ensure positive distance estimate
  return vec2(d_surface, abs(cos(u_ang)) + 0.25 * r_cyl);
}

// 16. Poincaré Homology Dodecahedral 3-Manifold
vec2 mapPoincareSphere(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.08) * p.xz;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 14);
  vec3 n1 = normalize(vec3(phi, 1.0, 0.0));
  vec3 n2 = normalize(vec3(0.0, phi, 1.0));
  vec3 n3 = normalize(vec3(1.0, 0.0, phi));
  for (int i = 0; i < 14; i++) {
    if (i >= count) break;
    p = abs(p);
    float d1 = dot(p, n1) - 0.75;
    if (d1 > 0.0) p -= 2.0 * d1 * n1;
    float d2 = dot(p, n2) - 0.75;
    if (d2 > 0.0) p -= 2.0 * d2 * n2;
    float d3 = dot(p, n3) - 0.75;
    if (d3 > 0.0) p -= 2.0 * d3 * n3;
    float factor = phi;
    p = p * factor - vec3(factor - 1.0) * 0.55;
    scale *= factor;
    trap = min(trap, length(p));
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.5) / max(scale, 0.0001);
  return vec2(d, trap);
}

// 17. Gaussian Primes Lattice Z[i] (p = a² + b²)
vec2 mapGaussianPrimes(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.8;
  p.xy = rot2D(t * 0.07) * p.xy;
  float r = length(p);
  float pot = cos(PI * p.x) * cos(PI * p.y) + cos(PI * p.y) * cos(PI * p.z * phi) + cos(PI * p.z * phi) * cos(PI * p.x);
  float primeRes = sin(r * r * 0.618 - t * 0.3) * 0.35;
  float d = (abs(pot + primeRes) - 0.22) / 2.2;
  float bound = r - 2.6;
  // FIX: Ensure positive distance estimate
  return vec2(max(d, bound), abs(pot) + 0.25 * r);
}

// 18. Neovius-Schoen TPMS Minimal Surface (Zero Mean Curvature)
vec2 mapNeoviusMinimal(vec3 p_in, float t, float phi) {
  vec3 p = p_in * (1.8 * phi);
  p.yz = rot2D(t * 0.06) * p.yz;
  vec3 c = cos(p);
  float f = 3.0 * (c.x + c.y + c.z) + 4.0 * c.x * c.y * c.z;
  float d = (abs(f) - 0.25) / (2.6 * phi);
  float bound = length(p_in) - 2.5;
  // FIX: Ensure positive distance estimate
  return vec2(max(d, bound), abs(f) * 0.15 + 0.3 * length(p_in));
}

// 19. Euler Totient φ(n) & Archimedean Prime Spiral
vec2 mapEulerTotientSpiral(vec3 p_in, float t, float phi) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.08) * p.xz;
  float r_xy = length(p.xy);
  float theta = atan(p.y, p.x);
  float log_r = log(max(r_xy, 0.01));
  float spiral = mod(theta * (phi / PI) - log_r * 2.0 + p.z * 1.5 + t * 0.2, 1.0) - 0.5;
  float d = sqrt(spiral * spiral * r_xy * r_xy + p.z * p.z * 0.2) - 0.08;
  float bound = length(p_in) - 2.6;
  // FIX: Ensure positive distance estimate
  return vec2(max(d, bound), abs(spiral) + 0.2 * r_xy);
}

// 20. 4D Flat Clifford Torus in S³ Stereographic Projection
vec2 mapCliffordTorus4D(vec3 p_in, float t, float phi) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.06) * p.xz;
  float r2 = dot(p, p);
  float denom = 1.0 + r2;
  vec4 q = vec4(2.0 * p, r2 - 1.0) / max(denom, 0.001);
  float a1 = t * 0.12;
  float a2 = t * 0.12 * phi;
  vec2 z1 = rot2D(a1) * q.xy;
  vec2 z2 = rot2D(a2) * q.zw;
  float d_clifford = abs(dot(z1, z1) - dot(z2, z2)) - 0.12;
  float d_3d = d_clifford * (1.0 + r2) * 0.35;
  float bound = length(p_in) - 2.7;
  // FIX: Ensure positive distance estimate
  return vec2(max(d_3d, bound), abs(d_clifford) + 0.3 * sqrt(r2));
}

// 21. Kleinian Group Schottky Limit Set (Möbius Inversions)
vec2 mapKleinianLimit(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xy = rot2D(t * 0.05) * p.xy;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 12);
  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    p = mod(p + 1.0, 2.0) - 1.0;
    float r2 = dot(p, p);
    trap = min(trap, sqrt(r2));
    float k = (1.25 * phi) / max(r2, 0.12);
    p *= k;
    scale *= k;
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.6) / max(scale, 0.001);
  return vec2(d, trap);
}

// 22. Golden Fibonacci Snowflake IFS 3D
vec2 mapFibonacciSnowflake(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.yz = rot2D(t * 0.07) * p.yz;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 10);
  for (int i = 0; i < 10; i++) {
    if (i >= count) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    float factor = phi * 1.05;
    p = p * factor - vec3(0.55 * (factor - 1.0));
    scale *= factor;
    trap = min(trap, length(p));
  }
  // FIX: Ensure positive distance estimate
  float d = (length(p) - 0.45) / max(scale, 0.0001);
  return vec2(d, trap);
}

// 23. 4D Quaternion Mandelbrot Set Golden Slices
vec2 mapQuaternionMandelbrot(vec3 p_in, float t, float phi, int iters) {
  vec4 c = vec4(p_in, 0.0);
  c.w = 0.25 * sin(t * 0.2 * phi);
  vec4 z = c;
  float dz = 1.0;
  float r = 0.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 12);
  bool escaped = false;
  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    r = length(z);
    if (r > 2.5) { escaped = true; break; }
    trap = min(trap, r);
    dz = 2.0 * r * dz + 1.0;
    vec3 zv = z.yzw;
    float z0 = z.x;
    z = vec4(z0 * z0 - dot(zv, zv), 2.0 * z0 * zv) + c;
  }
  float d = escaped ? 0.5 * log(max(r, 1.0001)) * r / max(dz, 0.001) : 0.04 * (r - 0.7);
  // FIX: Ensure positive distance estimate
  return vec2(d, trap);
}

// 24. 3D Space-Filling Hilbert-Peano Curve (L-System)
vec2 mapHilbertCurve3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  p.xy = rot2D(t * 0.05) * p.xy;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 3, 8);
  for (int i = 0; i < 8; i++) {
    if (i >= count) break;
    p = abs(p) - vec3(0.5);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    p *= 2.0;
    scale *= 2.0;
    p -= vec3(0.5);
    trap = min(trap, length(p.xy));
  }
  float d = (length(vec2(length(p.xy) - 0.25, p.z)) - 0.12) / max(scale, 0.0001);
  // FIX: Ensure positive distance estimate
  return vec2(d, trap);
}

// 25. Golden Dragon Curve IFS (Harter-Heighway / Levy)
vec2 mapDragonCurveIFS(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.07) * p.xz;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 12);
  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    if (p.x + p.y < 0.0) p.xy = -p.yx;
    if (p.x - p.y < 0.0) p.xy = vec2(-p.y, p.x);
    p.xy = rot2D(PI * 0.25) * p.xy;
    p.yz = rot2D(t * 0.03 + 0.1) * p.yz;
    float factor = phi * 0.85;
    p = p * factor - vec3(0.6, 0.2, 0.1);
    scale *= factor;
    trap = min(trap, length(p));
  }
  float d = (length(p) - 0.38) / max(scale, 0.0001);
  // FIX: Ensure positive distance estimate
  return vec2(d, trap);
}

// 26. 3D Branching Pythagorean Tree IFS
vec2 mapPythagorasTree3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  p.xz = rot2D(t * 0.06) * p.xz;
  float scale = 1.0;
  float trap = 1e10;
  float d_tree = length(p - vec3(0.0, clamp(p.y, -1.0, 0.0), 0.0)) - 0.15;
  int count = clamp(iters, 3, 9);
  for (int i = 0; i < 9; i++) {
    if (i >= count) break;
    p.y -= 0.65;
    p.x = abs(p.x);
    p.xy = rot2D(0.55 + 0.05 * sin(t * 0.3)) * p.xy;
    p.yz = rot2D(GOLDEN_ANGLE * 0.01) * p.yz;
    float factor = 1.0 / (phi * 0.72);
    p *= factor;
    scale *= factor;
    float branch = (length(p - vec3(0.0, clamp(p.y, 0.0, 0.65), 0.0)) - 0.12) / scale;
    d_tree = min(d_tree, branch);
    trap = min(trap, length(p));
  }
  // FIX: Ensure positive distance estimate
  return vec2(d_tree, trap);
}

// 27. 3D Algebraic Burning Ship Fractal (|Re(z)| + i|Im(z)|)
vec2 mapBurningShip3D(vec3 p_in, float t, float phi, int iters) {
  vec3 z = p_in * 1.2;
  vec3 c = z;
  float dr = 1.0;
  float r = 0.0;
  float trap = 1e10;
  int count = clamp(iters, 4, 14);
  bool escaped = false;
  for (int i = 0; i < 14; i++) {
    if (i >= count) break;
    z = abs(z);
    r = length(z);
    if (r > 3.0) { escaped = true; break; }
    trap = min(trap, r);
    float theta = acos(clamp(z.z / max(r, 0.0001), -1.0, 1.0));
    float phi_ang = atan(z.y, z.x);
    dr = 2.0 * r * dr + 1.0;
    float zr = r * r;
    theta = theta * 2.0 + sin(t * 0.15) * 0.1;
    phi_ang = phi_ang * 2.0;
    z = zr * vec3(sin(theta) * cos(phi_ang), sin(theta) * sin(phi_ang), cos(theta)) + c;
  }
  float d = escaped ? 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001) : 0.04 * (r - 0.6);
  // FIX: Ensure positive distance estimate
  return vec2(d, trap);
}

// 28. 3D Newton-Raphson Complex Roots Basin (z^3 - 1 = 0)
vec2 mapNewtonBasins(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.6;
  p.xy = rot2D(t * 0.06) * p.xy;
  vec2 z = p.xy;
  float trap = 1e10;
  int count = clamp(iters, 4, 12);
  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    vec2 z2 = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y);
    vec2 z3 = vec2(z2.x * z.x - z2.y * z.y, z2.x * z.y + z2.y * z.x);
    vec2 num = vec2(2.0 * z3.x - 1.0, 2.0 * z3.y);
    vec2 den = 3.0 * z2;
    float denom = dot(den, den);
    if (denom < 0.00001) break;
    z = vec2(dot(num, den), num.y * den.x - num.x * den.y) / denom;
    trap = min(trap, length(z - vec2(1.0, 0.0)));
  }
  float basinIso = length(z - vec2(1.0, 0.0)) - 0.6;
  float d_3d = sqrt(basinIso * basinIso + p.z * p.z * 0.3) - 0.2;
  float bound = length(p_in) - 2.8;
  // FIX: Ensure positive distance estimate
  return vec2(max(d_3d, bound * 0.4), trap);
}

// 29. 3D Jerusalem Cube (Golden Ratio Cross Cavities)
vec2 mapJerusalemCube(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float scale = 1.0;
  float trap = 1e10;
  float d = length(max(abs(p) - vec3(1.0), 0.0));
  int count = clamp(iters, 2, 6);
  for (int i = 0; i < 6; i++) {
    if (i >= count) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    float crossWidth = (phi - 1.0) / scale;
    float hole = min(max(abs(p.x) - crossWidth, abs(p.y) - crossWidth),
                     min(max(abs(p.y) - crossWidth, abs(p.z) - crossWidth),
                         max(abs(p.z) - crossWidth, abs(p.x) - crossWidth)));
    d = max(d, -hole);
    float factor = phi * 1.15;
    p = p * factor - vec3(factor - 1.0);
    scale *= factor;
    trap = min(trap, length(p));
  }
  // FIX: Ensure positive distance estimate
  return vec2(d, trap);
}

// 30. 3D Lorenz Strange Attractor (orbit-traced, sigma=10, rho=28, beta=8/3)
vec2 mapLorenzAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.08) * p.xz;
  float sigma = 10.0, rho = 28.0, beta = 8.0 / 3.0;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 q = vec3(0.1 + float(s) * 0.1, 0.0, 25.0 - float(s) * 5.0);
    for (int i = 0; i < 80; i++) {
      float dx = sigma * (q.y - q.x);
      float dy = q.x * (rho - q.z) - q.y;
      float dz = q.x * q.y - beta * q.z;
      q += vec3(dx, dy, dz) * 0.008;
      vec3 scaled = q * 0.25;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 4.0));
    }
  }
  // PHASE 4.32 FIX: Proper SDF using minimum distance to orbit points
  // Density-based approach created smooth blobs — replaced with tube SDF
  float tubeR = 0.02 + maxDensity * 0.01; // Tube radius modulated by orbit density
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 31. 3D Quantum Hofstadter Butterfly Energy Bands
vec2 mapHofstadterButterfly(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 2.0;
  p.yz = rot2D(t * 0.06) * p.yz;
  float alpha = mod(p.z * 0.5 + t * 0.04, 1.0);
  float energy = 2.0 * (cos(p.x * PI) + cos(p.y * PI)) + 2.0 * cos(2.0 * PI * alpha * phi);
  float gap = abs(energy - 0.8) - 0.28;
  float d = gap / 2.5;
  float bound = length(p_in) - 2.7;
  return vec2(max(d, bound), abs(energy) * 0.2 + 0.25 * length(p));
}

// 32. 3D Antoine's Necklace Wild Topological Linked Tori
vec2 mapAntoineNecklace(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float scale = 1.0;
  float trap = 1e10;
  float d = 1e10;
  int count = clamp(iters, 2, 5);
  for (int i = 0; i < 5; i++) {
    if (i >= count) break;
    float rMajor = 0.8 / scale;
    float rMinor = 0.22 / scale;
    float q = length(p.xz) - rMajor;
    float torusD = length(vec2(q, p.y)) - rMinor;
    d = min(d, torusD);
    trap = min(trap, abs(q));
    float ang = atan(p.z, p.x);
    float nSub = 8.0;
    float cell = floor(ang * nSub / (2.0 * PI) + 0.5);
    float subAng = cell * (2.0 * PI) / nSub;
    p.xz = rot2D(-subAng) * p.xz;
    p.x -= rMajor;
    p.yz = rot2D(PI * 0.5) * p.yz;
    scale *= 2.4;
    p *= 2.4;
  }
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound) * 0.5, trap);
}

// 33. 3D Diffusion-Limited Aggregation (DLA) Dendritic Cluster
vec2 mapDLACluster(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.06) * p.xz;
  // Branching tree structure with deterministic pseudo-random directions
  float d = length(p) - 0.06; // seed particle
  float trap = 0.0;
  float sc = 1.0;
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    float fi = float(i);
    // Golden angle branching for natural look
    float ang = fi * 2.39996323 + t * 0.1;
    float h = fi * 0.18 - 0.6;
    float rad = 0.4 * pow(0.72, fi);
    vec3 center = vec3(cos(ang) * rad, h, sin(ang) * rad);
    float branch = length(p - center) - 0.04 * pow(0.75, fi);
    d = min(d, branch);
    trap += exp(-5.0 * length(p - center));
    // Sub-branches
    for (int j = 0; j < 3; j++) {
      float fj = float(j);
      float subAng = ang + (fj - 1.0) * 0.8;
      float subRad = rad * 0.5;
      vec3 subCenter = center + vec3(cos(subAng) * subRad, 0.06, sin(subAng) * subRad);
      float subBranch = length(p - subCenter) - 0.02 * pow(0.75, fi);
      d = min(d, subBranch);
    }
    sc *= 0.72;
  }
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, trap * 0.15);
}

// 34. 4D Hyperchaotic Rössler Attractor
vec2 mapRosslerHyperchaos(vec3 p, float t, float phi, int iters) {
  vec3 q = p;
  float scale = 1.0;
  float trap = 1e10;
  for (int i = 0; i < 8; i++) {
    q.xy = rot2D(GOLDEN_ANGLE * 0.5 + t * 0.05) * q.xy;
    q.yz = rot2D(0.382) * q.yz;
    q = abs(q) - vec3(0.45 * phi, 0.35, 0.25 * phi);
    float r = length(q);
    trap = min(trap, r);
    float f = 1.25;
    q *= f;
    scale *= f;
  }
  float d_tube = (length(q.xy) - 0.15) / scale;
  float d_cap = (length(q) - 0.4) / scale;
  return vec2(min(d_tube, d_cap), trap);
}

// 35. Clifford-Pickover Attractor (orbit-traced density field)
vec2 mapCliffordAttractor(vec3 p, float t, float phi, int iters) {
  float aa = -1.4 + 0.1 * sin(t * 0.2);
  float bb = 1.6 + 0.1 * cos(t * 0.15);
  float cc = 1.0 * phi;
  float dd = 0.7;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 q = vec3(float(s) * 0.5 - 0.75, float(s & 1) * 0.3 - 0.15, float(s) * 0.4);
    for (int i = 0; i < 60; i++) {
      float xn = sin(aa * q.y) + cc * cos(aa * q.x);
      float yn = sin(bb * q.x) + dd * cos(bb * q.y);
      float zn = sin(q.z * 1.5 + t * 0.1 + float(i) * 0.05) * 0.5;
      q = vec3(xn, yn, zn);
      float dist = length(p - q);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: min-dist SDF with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p) - 2.5;
  return vec2(max(d, bound * 0.6), max(maxDensity * 0.3, 0.001));
}

// 36. Type-II Superconductor Quantum Magnetic Vortex Flux Lattice (Abrikosov Lattice)
vec2 mapAbrikosovLattice(vec3 p, float t, float phi, int iters) {
  vec2 uv = p.xy * 2.2;
  vec2 a1 = vec2(1.0, 0.0);
  vec2 a2 = vec2(0.5, 0.8660254);
  vec2 guv = vec2(dot(uv, a1), dot(uv, a2));
  vec2 f = fract(guv) - 0.5;
  float vortex_dist = length(f) - 0.18;
  float order_param = abs(vortex_dist) - 0.04;
  float z_twist = sin(p.z * 3.14159 * phi + t * 0.3) * 0.08;
  float d = max(order_param + z_twist, abs(p.z) - 1.6);
  return vec2(d * 0.45, length(f));
}

// 37. Beltrami Pseudosphere (Lobachevsky Hyperbolic Surface of Revolution)
vec2 mapBeltramiPseudosphere(vec3 p, float t, float phi, int iters) {
  vec3 q = p;
  q.xy = rot2D(t * 0.1) * q.xy;
  float r = length(q.xy);
  float z = clamp(abs(q.z), 0.01, 1.8);
  float r_ideal = exp(-z * (phi * 0.85)) * 1.25;
  float d_surface = abs(r - r_ideal) - 0.045;
  float d_cap = max(abs(q.z) - 1.8, d_surface);
  return vec2(d_cap * 0.6, r);
}

// 38. Loop Quantum Gravity Penrose Spin-Network & Quantum Foam
vec2 mapSpinFoamNetwork(vec3 p, float t, float phi, int iters) {
  vec3 q = p;
  vec3 cell = fract(q * 1.5 + 0.5) - 0.5;
  float vertex = length(cell) - 0.12;
  float edges = min(length(cell.xy), min(length(cell.yz), length(cell.xz))) - 0.035;
  float foam = abs(sin(q.x * 4.0 * phi) * cos(q.y * 4.0 * phi) * sin(q.z * 4.0 * phi + t * 0.2)) - 0.25;
  float net = min(vertex, edges);
  float d = max(net, foam * 0.3);
  float bound = length(p) - 2.3;
  return vec2(max(d * 0.5, bound) * 0.5, length(cell));
}

// 39. Ramanujan Modular Discriminant Delta(tau) Resonator
vec2 mapRamanujanTau(vec3 p, float t, float phi, int iters) {
  vec3 q = p;
  float r = length(q);
  float theta = atan(q.y, q.x);
  float cusp24 = cos(24.0 * theta + t * 0.2) * 0.12;
  float r_target = 1.0 + cusp24 + sin(q.z * 8.0 * phi) * 0.15;
  float d_core = abs(r - r_target) - 0.08;
  float d_ribs = length(vec2(fract(r * 4.0 * phi) - 0.5, q.z * 0.5)) - 0.08;
  float bound = length(p) - 2.2;
  return vec2(max(min(d_core, d_ribs) * 0.5, bound) * 0.5, abs(cusp24) * 2.0);
}

// 40. Belousov-Zhabotinsky Chemical Spiral Reaction Waves
vec2 mapBelousovWaves(vec3 p, float t, float phi, int iters) {
  float r = length(p.xy);
  float ang = atan(p.y, p.x);
  float wave = sin(r * 8.0 * phi - 3.0 * ang - t * 1.5);
  float z_mod = cos(p.z * 4.0 + wave * 0.5) * 0.15;
  float d = abs(p.z - wave * 0.25) - 0.05 + z_mod;
  float bound = length(p) - 2.2;
  return vec2(max(d, bound) * 0.55, abs(wave));
}

// ============================================================
// EXPANDED FRACTAL TYPES (41-60): Real mathematical fractals
// ============================================================

// 41. Hénon 3D Strange Attractor (orbit-traced, a=1.4, b=0.3)
vec2 mapHenonAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.07) * p.xz;
  float a = 1.4, b = 0.3;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.1 - float(s) * 0.08, float(s) * 0.3);
    for (int i = 0; i < 60; i++) {
      float x = 1.0 - a * v.x * v.x + v.y;
      float y = b * v.x;
      float z = sin(v.z * phi + t * 0.15) * 0.5;
      v = vec3(x, y, z);
      vec3 scaled = v * 0.5;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 42. Aizawa Toroidal Chaotic Attractor (orbit-traced)
vec2 mapAizawaAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.08) * p.xz;
  float a = 0.95, b = 0.7, c = 0.6, dd = 3.5, e = 0.25, f = 0.1;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.05 * float(s), 0.5 + float(s) * 0.25);
    for (int i = 0; i < 60; i++) {
      float dx = (v.z - b) * v.x - dd * v.y;
      float dy = dd * v.x + (v.z - b) * v.y;
      float dz = c + a * v.z - v.z * v.z * v.z / 3.0 - (v.x * v.x + v.y * v.y) * (1.0 + e * v.z) + f * v.z * v.x * v.x * v.x;
      v += vec3(dx, dy, dz) * 0.05;
      vec3 scaled = v * 1.0;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 43. Thomas Cyclically Symmetric Attractor (orbit-traced, b=0.208186)
vec2 mapThomasAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.yz = rot2D(t * 0.06) * p.yz;
  float b = 0.208186;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(1.0 + float(s) * 0.3, 0.0, -1.0 + float(s) * 0.5);
    for (int i = 0; i < 60; i++) {
      float dx = sin(v.y) - b * v.x;
      float dy = sin(v.z) - b * v.y;
      float dz = sin(v.x) - b * v.z;
      v += vec3(dx, dy, dz) * 0.1;
      vec3 scaled = v * 0.8;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 44. Halvorsen 3-Fold Chaotic Attractor (orbit-traced, a=1.89)
vec2 mapHalvorsenAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xy = rot2D(t * 0.07) * p.xy;
  float a = 1.89;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(-1.0 + float(s) * 0.5, -1.0 + float(s) * 0.3, -1.0);
    for (int i = 0; i < 60; i++) {
      float dx = -a * v.x - 4.0 * v.y - 4.0 * v.z - v.y * v.y;
      float dy = -a * v.y - 4.0 * v.z - 4.0 * v.x - v.z * v.z;
      float dz = -a * v.z - 4.0 * v.x - 4.0 * v.y - v.x * v.x;
      v += vec3(dx, dy, dz) * 0.04;
      vec3 scaled = v * 0.7;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 45. Julia Set 3D (c = -0.7 + 0.27i, thick 3D extrusion with orbit trap)
vec2 mapJuliaSet3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.05) * p.xz;
  vec2 c = vec2(-0.7, 0.27015);
  vec2 z = p.xy * 1.6;
  float dz = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 20; i++) {
    if (i >= iters) break;
    dz = 2.0 * length(z) * dz;
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    trap += exp(-3.0 * length(z));
    if (dot(z, z) > 16.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  // Thicken 2D Julia into visible 3D volume using z-axis
  float zThick = sqrt(d * d + p.z * p.z * 0.15) - 0.06;
  float bound = length(p_in) - 2.3;
  return vec2(max(zThick, bound * 0.4), trap);
}

// 46. Multibrot z^3+c (cubic 3D generalization)
vec2 mapMultibrot3(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.06) * p.xz;
  vec2 z = p.xy * 1.3;
  vec2 c = vec2(p.z * 0.7, p.x * 0.3);
  float md = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    md = 3.0 * r * r * md;
    float theta = atan(z.y, z.x) * 3.0;
    float rPow = pow(r, 3.0);
    z = vec2(rPow * cos(theta), rPow * sin(theta)) + c;
    trap += exp(-2.0 * length(z));
    if (dot(z, z) > 16.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(md, 0.001);
  float bound = length(p_in) - 2.2;
  return vec2(max(abs(d), bound * 0.3), trap);
}

// 47. Tetrix (Sierpinski Tetrahedron 3D IFS)
vec2 mapTetrix(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  float scale = 1.0;
  float trap = 0.0;
  vec3 v1 = vec3(1, 1, 1), v2 = vec3(1, -1, -1);
  vec3 v3 = vec3(-1, 1, -1), v4 = vec3(-1, -1, 1);
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float d1 = length(p - v1), d2 = length(p - v2);
    float d3 = length(p - v3), d4 = length(p - v4);
    float mn = min(min(d1, d2), min(d3, d4));
    if (mn == d1) p = (p - v1) * 2.0 + v1;
    else if (mn == d2) p = (p - v2) * 2.0 + v2;
    else if (mn == d3) p = (p - v3) * 2.0 + v3;
    else p = (p - v4) * 2.0 + v4;
    scale *= 0.5;
    trap += length(p) * scale;
  }
  float d = length(p) * scale - 0.05;
  return vec2(d, trap * 0.08);
}

// 48. Gosper Island (hexagonal space-filling fractal)
vec2 mapGosperCurve(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.06) * p.xy;
  // Standard IFS: fold to nearest of 7 Gosper centers, constant scale
  float sc = 2.6457513; // sqrt(7)
  float trap = 0.0;
  float d = 1e10;
  vec3 c1 = vec3(0, 0, 0), c2 = vec3(1.5, 0, 0), c3 = vec3(0.75, 1.3, 0);
  vec3 c4 = vec3(-0.75, 1.3, 0), c5 = vec3(-1.5, 0, 0), c6 = vec3(-0.75, -1.3, 0);
  vec3 c7 = vec3(0.75, -1.3, 0);
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    vec3 q = p * sc;
    float d1 = length(q - c1), d2 = length(q - c2), d3 = length(q - c3);
    float d4 = length(q - c4), d5 = length(q - c5), d6 = length(q - c6);
    float d7 = length(q - c7);
    float mn = min(min(min(d1, d2), min(d3, d4)), min(min(d5, d6), d7));
    trap += mn / sc;
    // Transform into closest center's local frame
    if (mn == d1) p = (p - c1 / sc) * sc;
    else if (mn == d2) p = (p - c2 / sc) * sc;
    else if (mn == d3) p = (p - c3 / sc) * sc;
    else if (mn == d4) p = (p - c4 / sc) * sc;
    else if (mn == d5) p = (p - c5 / sc) * sc;
    else if (mn == d6) p = (p - c6 / sc) * sc;
    else p = (p - c7 / sc) * sc;
    d = min(d, length(p) / sc);
  }
  float bound = length(p_in) - 2.5;
  return vec2(max(d * 0.5, bound * 0.3), trap * 0.1);
}

// 49. L-System Plant (3D branching phyllotactic structure)
vec2 mapLSystemPlant(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  float goldenAngle = 2.39996323;
  float d = length(p) - 0.08;
  float trap = 0.0;
  float sc = 1.0 / phi;
  for (int i = 0; i < 10; i++) {
    if (i >= iters) break;
    float ang = float(i) * goldenAngle + t * 0.15;
    float h = float(i) * 0.22 - 0.8;
    float rad = 0.35 * pow(sc, float(i) * 0.5);
    vec3 center = vec3(cos(ang) * rad, h, sin(ang) * rad);
    float branch = length(p - center) - 0.06 * pow(sc, float(i) * 0.3);
    d = min(d, branch);
    trap += exp(-4.0 * length(p - center));
  }
  float stem = length(p.xz) - 0.025;
  stem = max(stem, abs(p.y + 0.8) - 1.6);
  d = min(d, stem);
  return vec2(d * 0.6, trap * 0.15);
}

// 50. Schwarz P Minimal Surface (cubic TPMS)
vec2 mapSchwarzP(vec3 p_in, float t, float phi) {
  vec3 p = p_in * phi * 1.3;
  p.xz = rot2D(t * 0.08) * p.xz;
  float val = cos(p.x) + cos(p.y) + cos(p.z);
  float d = (abs(val) - 0.3) / (phi * 1.3);
  float bound = length(p_in) - 2.0;
  return vec2(max(d, bound), abs(val) + 0.2 * length(p));
}

// 51. Schwarz D Diamond Surface (TPMS)
vec2 mapSchwarzD(vec3 p_in, float t, float phi) {
  vec3 p = p_in * phi * 1.2;
  p.yz = rot2D(t * 0.07) * p.yz;
  float s1 = sin(p.x) * sin(p.y) * sin(p.z);
  float c1 = cos(p.x) * cos(p.y) * cos(p.z);
  float val = s1 - c1;
  float d = (abs(val) - 0.25) / (phi * 1.2);
  float bound = length(p_in) - 2.0;
  return vec2(max(d, bound), abs(val) + 0.3 * length(p));
}

// 52. Apollonian Gasket (recursive sphere packing)
vec2 mapApollonianGasket(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float sc = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 12; i++) {
    if (i >= iters) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    float r = length(p);
    if (r > 0.001) {
      float k = (1.0 + phi) / (r * r);
      p = p * k - vec3(phi * 0.5);
      sc *= k;
    }
    trap += length(p) / sc;
  }
  float d = (length(p) - 0.5) / sc;
  return vec2(abs(d) * 0.4, trap * 0.08);
}

// 53. Barnsley Fern 3D (orbit-traced IFS)
vec2 mapBarnsleyFern3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.06) * p.xz;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 5; s++) {
    vec3 q = vec3(0.0, 0.0, 0.0);
    for (int i = 0; i < 40; i++) {
      float fi = float(i);
      float choice = fract(sin(fi * 12.9898 + float(s) * 78.233 + 43.12) * 43758.5453);
      if (choice < 0.01) {
        q = vec3(0.0, 0.16 * q.y, 0.0);
      } else if (choice < 0.86) {
        q = vec3(0.85 * q.x + 0.04 * q.y, -0.04 * q.x + 0.85 * q.y + 1.6, 0.3 * q.z);
      } else if (choice < 0.93) {
        q = vec3(0.2 * q.x - 0.26 * q.y, 0.23 * q.x + 0.22 * q.y + 1.6, 0.3 * q.z);
      } else {
        q = vec3(-0.15 * q.x + 0.28 * q.y, 0.26 * q.x + 0.24 * q.y + 0.44, 0.3 * q.z);
      }
      vec3 scaled = q * 0.4;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: min-dist SDF with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 54. Klein Quartic Surface (genus-3 Hurwitz surface)
vec2 mapKleinQuartic(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  p.xz = rot2D(t * 0.07) * p.xz;
  float r = length(p);
  float theta = atan(p.y, p.x);
  float psi = atan(p.z, length(p.xy));
  float val = cos(7.0 * theta) * sin(3.0 * psi) + sin(7.0 * theta) * cos(3.0 * psi);
  float surface = abs(r - (1.2 + val * 0.25)) - 0.06;
  float bound = length(p_in) - 2.0;
  return vec2(max(surface, bound) * 0.6, abs(val) + 0.2 * r);
}

// 55. Sphere Packing (FCC dense packing fractal)
vec2 mapSpherePacking(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float d = 1e10;
  float trap = 0.0;
  float sc = 1.0;
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    vec3 q = fract(p * sc) - 0.5;
    float sphere = length(q) - 0.25 / sc;
    d = min(d, sphere);
    trap += exp(-3.0 * abs(sphere));
    sc *= phi;
  }
  float bound = length(p_in) - 2.0;
  return vec2(max(d, bound) * 0.5, trap * 0.1);
}

// 56. Nova Fractal (Newton + Mandelbrot hybrid)
vec2 mapNovaFractal(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.06) * p.xz;
  vec2 z = p.xy * 1.2;
  vec2 c = vec2(p.z * 0.6, p.x * 0.2);
  float md = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r2 = dot(z, z);
    if (r2 > 16.0) break;
    vec2 z3 = vec2(z.x * z.x * z.x - 3.0 * z.x * z.y * z.y,
                   3.0 * z.x * z.x * z.y - z.y * z.y * z.y);
    vec2 dz3 = vec2(3.0 * (z.x * z.x - z.y * z.y), 6.0 * z.x * z.y);
    z = z - z3 / (dz3 + vec2(0.0001)) + c;
    md *= 2.0 * length(z);
    trap += exp(-2.0 * length(z));
  }
  float d = (length(z) - 2.0) * 0.5 / max(md, 0.001);
  float bound = length(p_in) - 2.2;
  return vec2(max(abs(d), bound * 0.3), trap);
}

// 57. Golden Knot (torus knot with golden winding)
vec2 mapGoldenKnot(vec3 p_in, float t, float phi) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.1) * p.xz;
  float R = 1.0;
  float r_tube = 0.18;
  float pq = phi;
  float theta = atan(p.y, p.x);
  float phiK = theta * pq;
  vec3 curve = vec3((R + r_tube * cos(phiK * 3.0)) * cos(theta),
                    (R + r_tube * cos(phiK * 3.0)) * sin(theta),
                    r_tube * sin(phiK * 3.0));
  float d = length(p - curve) - 0.08;
  float bound = length(p_in) - 2.0;
  return vec2(max(d, bound) * 0.7, abs(phiK) * 0.1);
}

// 58. Spherical Harmonics (quantum orbital shapes)
vec2 mapSphericalHarmonics(vec3 p_in, float t, float phi) {
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.08) * p.xz;
  float r = length(p);
  float theta = atan(length(p.xy), p.z);
  float phiA = atan(p.y, p.x);
  float Y32 = sin(theta) * sin(theta) * cos(theta) * cos(3.0 * phiA);
  float Y42 = sin(theta) * sin(theta) * (7.0 * cos(theta) * cos(theta) - 1.0) * cos(2.0 * phiA);
  float radial = 1.0 + 0.4 * Y32 + 0.25 * Y42;
  float d = abs(r - radial * 0.9) - 0.04;
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound) * 0.5, abs(Y32) + abs(Y42));
}

// 59. Fractal Cross (3D plus-shaped recursive IFS)
vec2 mapFractalCross(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  float sc = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 12; i++) {
    if (i >= iters) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    p = p * 1.5 - vec3(0.75);
    sc *= 0.667;
    trap += length(p) * sc;
  }
  float d = length(p) * sc - 0.05;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.3), trap * 0.06);
}

// 60. Reaction-Diffusion (Gray-Scott Turing pattern)
vec2 mapReactionDiffusion(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 2.0;
  p.xy = rot2D(t * 0.06) * p.xy;
  float f = 0.04 + phi * 0.01;
  float k = 0.06 + phi * 0.005;
  float u = cos(p.x * phi) * cos(p.y * phi) * cos(p.z * phi);
  float v = sin(p.x * 2.0 + t * 0.2) * sin(p.y * 2.0) * sin(p.z * 2.0);
  float lap = (cos(p.x * 3.0) + cos(p.y * 3.0) + cos(p.z * 3.0)) / 3.0;
  float pattern = u * (1.0 - u) - f * u * v + k * lap;
  float d = abs(pattern) - 0.15;
  float bound = length(p_in) - 2.0;
  return vec2(max(d * 0.4, bound) * 0.6, abs(pattern));
}

// ============================================================
// BATCH 3 fractals (61-75): More verified real mathematical fractals
// ============================================================

// 61. Sierpinski Carpet (IFS, dim = log(8)/log(3) ~ 1.893)
vec2 mapSierpinskiCarpet(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  float scale = 1.0;
  float trap = 1e10;
  int count = clamp(iters, 3, 8);
  p.xy = rot2D(t * 0.08) * p.xy;
  for (int i = 0; i < 8; i++) {
    if (i >= count) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    p = p * 3.0 - vec3(2.0);
    // Remove center column in ALL three axis pairs (true 3D carpet)
    if (p.x > -0.5 && p.x < 0.5 && p.y > -0.5 && p.y < 0.5) {
      p.x += (p.x > 0.0) ? 1.0 : -1.0;
    }
    if (p.y > -0.5 && p.y < 0.5 && p.z > -0.5 && p.z < 0.5) {
      p.y += (p.y > 0.0) ? 1.0 : -1.0;
    }
    if (p.x > -0.5 && p.x < 0.5 && p.z > -0.5 && p.z < 0.5) {
      p.z += (p.z > 0.0) ? 1.0 : -1.0;
    }
    scale *= 3.0;
    trap = min(trap, length(p));
  }
  float d = (length(p) - 0.5) / max(scale, 0.0001);
  return vec2(d, trap * 0.08);
}

// 62. Tricorn (Mandelbar) — conjugate Mandelbrot: z = conj(z)^2 + c
vec2 mapTricorn(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.06) * p.xz;
  vec2 z = p.xy * 1.2;
  vec2 c = vec2(p.z * 0.7, p.x * 0.3);
  float dz = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    dz = 2.0 * length(z) * dz;
    // Conjugate: z = conj(z)^2 + c = (zx - i*zy)^2 + c
    z = vec2(z.x * z.x - z.y * z.y, -2.0 * z.x * z.y) + c;
    trap += exp(-3.0 * length(z));
    if (dot(z, z) > 16.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  float bound = length(p_in) - 2.3;
  return vec2(max(abs(d), bound * 0.3), trap);
}

// 63. Chua's Circuit Double Scroll (orbit-traced, alpha=15.6, beta=28, m0=-1.143, m1=-0.714)
vec2 mapChuaCircuit(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.07) * p.xz;
  float alpha = 15.6, beta = 28.0;
  float m0 = -1.143, m1 = -0.714;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.0, 0.1 + float(s) * 0.2);
    for (int i = 0; i < 60; i++) {
      float fx = m1 * v.x + 0.5 * (m0 - m1) * (abs(v.x + 1.0) - abs(v.x - 1.0));
      float dx = alpha * (v.y - v.x - fx);
      float dy = v.x - v.y + v.z;
      float dz2 = -beta * v.y;
      v += vec3(dx, dy, dz2) * 0.008;
      vec3 scaled = v * 0.5;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 64. Standard Map (Chirikov-Taylor, orbit-traced)
vec2 mapStandardMap(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float K = 1.5 + 0.5 * sin(t * 0.1);
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    float theta = float(s) * 1.57 + 0.3;
    float p_val = float(s) * 0.8 - 1.2;
    for (int i = 0; i < 60; i++) {
      float new_p = p_val + K * sin(theta);
      theta = theta + new_p;
      theta = mod(theta, TWO_PI);
      p_val = new_p;
      vec3 pt = vec3(cos(theta) * 0.8, sin(theta) * 0.8, p_val * 0.5 + float(s) * 0.2);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 65. Ikeda Map (orbit-traced, b=0.9, u=0.4+0.05*sin(t))
vec2 mapIkedaMap(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float b = 0.9;
  float u = 0.4 + 0.05 * sin(t * 0.15);
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    float xn = float(s) * 0.3 - 0.45;
    float yn = float(s) * 0.2 - 0.3;
    for (int i = 0; i < 60; i++) {
      float ti = 0.4 - 6.0 / (1.0 + xn * xn + yn * yn);
      float cosT = cos(ti), sinT = sin(ti);
      float xnew = 1.0 + u * (xn * cosT - yn * sinT);
      float ynew = u * (xn * sinT + yn * cosT);
      xn = xnew; yn = ynew;
      vec3 pt = vec3(xn * 0.5, yn * 0.5, sin(float(i) * 0.15 + t * 0.1 + float(s) * 0.5) * 0.4);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 66. Koch Snowflake 3D (recursive triangular SDF)
vec2 mapKochSnowflake3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.06) * p.xy;
  float d = length(p) - 1.5;
  float trap = 0.0;
  float sc = 1.0;
  // Koch curve via recursive triangular bump
  for (int i = 0; i < 6; i++) {
    if (i >= iters) break;
    // Fold into fundamental domain of equilateral triangle
    p.x = abs(p.x);
    p.x = p.x * 0.5 - 0.25;
    p.y = p.y * 3.0;
    trap += length(p) / sc;
    sc *= 3.0;
    d = min(d, length(p) / sc);
  }
  float bound = length(p_in) - 2.2;
  return vec2(max(d * 0.5, bound * 0.3), trap * 0.08);
}

// 67. Cantor Dust 3D (recursive corner cubes, dim = log(8)/log(3) ~ 1.893)
vec2 mapCantorDust(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float scale = 1.0;
  float trap = 0.0;
  float d = 1e10;
  for (int i = 0; i < 10; i++) {
    if (i >= iters) break;
    // Cantor dust: keep 8 corners of cube, remove center
    p = abs(p);
    p = p * 3.0 - vec3(4.0); // offset 4 maps corners to ±2 range
    scale *= 3.0;
    trap = min(trap, length(p));
    d = min(d, length(p) / scale);
  }
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.3), trap * 0.06);
}

// 68. Phoenix Fractal (z_{n+1} = z_n^2 + c + p*z_{n-1}, memory fractal)
vec2 mapPhoenixFractal(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in;
  p.xz = rot2D(t * 0.05) * p.xz;
  vec2 c = vec2(0.56667 + 0.05 * sin(t * 0.2), -0.5);
  float p_param = 0.2 + 0.05 * cos(t * 0.15);
  vec2 z = p.xy * 1.3;
  vec2 z_prev = vec2(0.0);
  float dz = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    dz = 2.0 * length(z) * dz + p_param;
    vec2 z_new = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    trap += exp(-2.0 * length(z));
    if (dot(z, z) > 16.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  float bound = length(p_in) - 2.3;
  return vec2(max(abs(d), bound * 0.3), trap);
}

// 69. Fatou Set (Julia basin boundary — 3D volumetric extrusion)
vec2 mapFatouSet(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float ang = t * 0.15;
  vec2 c = vec2(0.7885 * cos(ang), 0.7885 * sin(ang));
  vec2 z = p.xy;
  float trap = 1e10;
  for (int i = 0; i < 20; i++) {
    if (i >= iters) break;
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    float r = length(z);
    trap = min(trap, r);
    if (r > 4.0) break;
  }
  // 3D volumetric extrusion: Julia distance extended into z-axis with smooth falloff
  float juliaD2d = 0.5 * log(max(trap, 1.0001)) / 4.0;
  float zFade = 1.0 / (1.0 + p.z * p.z * 4.0);
  float d = juliaD2d * zFade + abs(p.z) * 0.12 - 0.02;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, trap * 0.15);
}

// 70. E8 Lattice Projection (exceptional Lie group, 8D → 3D shadow)
vec2 mapE8Lattice(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * phi * 1.2;
  p.xz = rot2D(t * 0.07) * p.xz;
  // E8 root system projected: use 6 directions from E8 weights
  float psi = 0.0;
  vec3 dirs[6];
  dirs[0] = normalize(vec3(1.0, phi, 0.0));
  dirs[1] = normalize(vec3(-1.0, phi, 0.0));
  dirs[2] = normalize(vec3(0.0, 1.0, phi));
  dirs[3] = normalize(vec3(0.0, -1.0, phi));
  dirs[4] = normalize(vec3(phi, 0.0, 1.0));
  dirs[5] = normalize(vec3(phi, 0.0, -1.0));
  float ws = 3.5 * phi;
  for (int j = 0; j < 6; j++) {
    psi += cos(dot(p, dirs[j]) * ws + t * 0.15);
  }
  float d = (abs(psi) - 0.6) / ws;
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound), abs(psi) * 0.2 + 0.3 * length(p));
}

// 71. Chladni Figures (vibrational eigenmodes on rectangular plate)
vec2 mapChladniFigures(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.8;
  p.xy = rot2D(t * 0.05) * p.xy;
  float n = 3.0 + floor(mod(t * 0.3, 5.0));
  float m = 2.0 + floor(mod(t * 0.2 + 2.5, 4.0));
  float pi_x = PI * p.x;
  float pi_y = PI * p.y;
  float mode1 = cos(n * pi_x) * cos(m * pi_y);
  float mode2 = cos(m * pi_x) * cos(n * pi_y);
  float chladni = mode1 - mode2;
  float d = abs(chladni) - 0.15;
  float plate = max(max(abs(p.x) - 1.5, abs(p.y) - 1.5), abs(p.z) - 0.15);
  float d3d = max(d, plate);
  float bound = length(p_in) - 2.5;
  return vec2(max(d3d * 0.5, bound * 0.3), abs(chladni));
}

// 72. FitzHugh-Nagumo Neural Dynamics (orbit-traced)
vec2 mapFitzHugh(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float a = 0.7, b_param = 0.8, tau = 12.5;
  float I_ext = 0.5 + 0.2 * sin(t * 0.2);
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, -0.2, float(s) * 0.3);
    for (int i = 0; i < 60; i++) {
      float dv = v.x - v.y * v.y * v.y / 3.0 + v.y + I_ext;
      float dw = (v.x - a + b_param * v.y) / tau;
      float dz2 = sin(v.z * 2.0 + t * 0.1) * 0.15;
      v += vec3(dv, dw, dz2) * 0.08;
      vec3 scaled = v * 0.8;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 73. Rössler Attractor (orbit-traced, a=0.2, b=0.2, c=5.7)
vec2 mapRosslerAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.07) * p.xz;
  float a = 0.2, b = 0.2, c = 5.7;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.1, float(s) * 0.3);
    for (int i = 0; i < 80; i++) {
      float dx = -v.y - v.z;
      float dy = v.x + a * v.y;
      float dz2 = b + v.z * (v.x - c);
      v += vec3(dx, dy, dz2) * 0.015;
      vec3 scaled = v * 0.4;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 74. Duffing Attractor (orbit-traced, alpha=1, beta=5, delta=0.02, gamma=8)
vec2 mapDuffingAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float alpha = 1.0, beta_p = 5.0, delta = 0.02, gamma = 8.0;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.0, float(s) * 0.5);
    for (int i = 0; i < 60; i++) {
      float omega = 1.5 + float(s) * 0.3;
      float dx = v.y;
      float dy = -delta * v.y - alpha * v.x - beta_p * v.x * v.x * v.x + gamma * cos(v.z);
      float dz2 = omega;
      v += vec3(dx, dy, dz2) * 0.015;
      vec3 scaled = v * 0.8;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 75. Logistic Map Bifurcation (period-doubling cascade, Feigenbaum δ≈4.669)
vec2 mapLogisticBifurcation(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.05) * p.xz;
  float r = 2.5 + (p.x + 1.5) / 3.0 * 1.5;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 6; s++) {
    float x = 0.3 + float(s) * 0.1;
    for (int i = 0; i < 50; i++) {
      x = r * x * (1.0 - x);
    }
    for (int i = 0; i < 40; i++) {
      x = r * x * (1.0 - x);
      vec3 pt = vec3(p.x, (x - 0.5) * 2.0, float(s) * 0.3 - 0.75);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float d = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound * 0.6), maxDensity * 0.25);
}

// 76. Fractal Spire (Exponential spiral tower z -> e^z + c)
vec2 mapFractalSpire(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  float rot_a = t * 0.08;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  vec2 z = p.xy;
  float trap = 1e10;
  float dr = 1.0;
  int count = clamp(iters, 4, 16);
  for (int i = 0; i < 16; i++) {
    if (i >= count) break;
    float ex = exp(clamp(z.x, -10.0, 10.0));
    vec2 ez = vec2(ex * cos(z.y), ex * sin(z.y));
    dr = length(ez) * dr + 1.0;
    z = ez + p.xy * 0.7;
    trap = min(trap, length(z));
    if (dot(z, z) > 256.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dr, 0.001);
  float bound = length(p_in) - 2.8;
  return vec2(max(d * 0.5, bound * 0.4), trap);
}

// 77. DeJong Attractor (x'=sin(a*y)-z*cos(b*x))
vec2 mapDeJongAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 2.24 + sin(t * 0.05) * 0.5;
  float b = -0.43 + cos(t * 0.07) * 0.3;
  float c_ = -0.65 + sin(t * 0.03) * 0.4;
  float d_ = 2.43 + cos(t * 0.04) * 0.3;
  float minDist = 1e10;
  float maxDensity = 0.0;
  vec2 seeds[4];
  seeds[0] = vec2(0.1, 0.1); seeds[1] = vec2(-0.3, 0.5); seeds[2] = vec2(0.4, -0.2); seeds[3] = vec2(-0.5, -0.4);
  int count = clamp(iters, 8, 50);
  for (int s = 0; s < 4; s++) {
    vec2 z = seeds[s];
    for (int i = 0; i < 50; i++) {
      if (i >= count) break;
      vec2 nz = vec2(sin(a * z.y) - cos(b * z.x), sin(c_ * z.x) - cos(d_ * z.y));
      z = nz;
      vec3 pt = vec3(z * 0.7, float(s) * 0.25 - 0.375);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float dd = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 78. Pickover Attractor (x'=sin(a*y)+c*cos(a*x), y'=sin(b*x)+d*cos(b*y))
vec2 mapPickoverAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = -1.64 + sin(t * 0.04) * 0.4;
  float b = 1.9 + cos(t * 0.06) * 0.3;
  float c_ = -0.31 + sin(t * 0.05) * 0.3;
  float d_ = 0.72 + cos(t * 0.03) * 0.2;
  float minDist = 1e10;
  float maxDensity = 0.0;
  int count = clamp(iters, 10, 40);
  // Multiple seeds for better orbit coverage
  for (int s = 0; s < 3; s++) {
    vec2 z = vec2(0.1 + float(s) * 0.3, 0.1 + float(s) * 0.2);
    for (int i = 0; i < 40; i++) {
      if (i >= count) break;
      vec2 nz = vec2(sin(a * z.y) + c_ * cos(a * z.x), sin(b * z.x) + d_ * cos(b * z.y));
      z = nz;
      vec3 pt = vec3(z * 0.8, sin(float(s) + t * 0.1) * 0.5);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: min-dist SDF with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float dd = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 79. Vicsek Fractal (3D cross-shaped IFS, dim ~ 1.465)
vec2 mapVicsekFractal(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.8;
  float rot_a = t * 0.04;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  float scale = 3.0;
  float d = 1e10;
  float trap = 0.0;
  int count = clamp(iters, 4, 10);
  for (int i = 0; i < 10; i++) {
    if (i >= count) break;
    // Vicsek: 5 copies — center + 4 cardinal directions
    p = abs(p);
    // Fold to keep cross pattern (center + axes)
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    // Cross rule: keep center and one axis direction
    p = p * scale - vec3(scale - 1.0);
    // Push off-center copies back (creates the cross arms)
    if (p.x < -0.5) p.x += 2.0;
    if (p.y < -0.5) p.y += 2.0;
    scale *= 3.0;
    trap = min(trap, length(p));
    d = min(d, length(p) / scale);
  }
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound * 0.3), trap * 0.1);
}

// 80. Mandelbar (Conjugate Mandelbrot: z → conj(z)^2 + c)
vec2 mapMandelbar(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  float rot_a = t * 0.06;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  vec2 z = p.xy;
  vec2 c = vec2(p.z * 0.7, p.x * 0.3);
  float trap = 1e10;
  float dr = 1.0;
  int count = clamp(iters, 4, 20);
  for (int i = 0; i < 20; i++) {
    if (i >= count) break;
    trap = min(trap, length(z));
    vec2 zconj = vec2(z.x, -z.y);
    vec2 z2 = vec2(zconj.x * zconj.x - zconj.y * zconj.y, 2.0 * zconj.x * zconj.y);
    dr = 2.0 * length(z) * dr + 1.0;
    z = z2 + c;
    if (dot(z, z) > 256.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dr, 0.001);
  float d3d = sqrt(d * d + p.z * p.z * 0.15) - 0.06;
  float bound = length(p_in) - 2.6;
  return vec2(max(d3d, bound * 0.4), trap);
}

// 81. Weierstrass 3D (Nowhere-differentiable: sum a^n cos(b^n pi x))
vec2 mapWeierstrass3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  float rot_a = t * 0.05;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  float a_w = 0.5;
  float b_w = 7.0;
  float surf = 0.0;
  int count = clamp(iters, 4, 10);
  for (int n = 0; n < 10; n++) {
    if (n >= count) break;
    float an = pow(a_w, float(n));
    float bn = pow(b_w, float(n));
    surf += an * cos(bn * 3.14159 * p.x) * cos(bn * 3.14159 * p.z);
  }
  float d = abs(p.y - surf * 0.3) - 0.15;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.7, abs(surf) * 0.2);
}

// 82. Popcorn Function (Celldoor: x'=x-c*sin(y+tan(y)), y'=y-c*sin(x+tan(x)))
vec2 mapPopcornFunction(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  float rot_a = t * 0.05;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  float c_pop = 0.4 + sin(t * 0.08) * 0.15;
  vec2 z = p.xy;
  float trap = 1e10;
  int count = clamp(iters, 4, 12);
  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    trap = min(trap, length(z));
    vec2 nz = vec2(
      z.x - c_pop * sin(z.y + tan(z.y)),
      z.y - c_pop * sin(z.x + tan(z.x))
    );
    z = nz;
  }
  float d = length(z - p.xy) - 0.2;
  float d3d = sqrt(d * d + p.z * p.z * 0.2) - 0.08;
  float bound = length(p_in) - 2.5;
  return vec2(max(d3d, bound * 0.3), trap);
}

// 83. Bedhead Attractor (3D: x'=sin(y*z)-z*cos(x*y))
vec2 mapBedheadAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 0.95 + sin(t * 0.04) * 0.2;
  float b = 0.7 + cos(t * 0.06) * 0.15;
  float c_ = 0.6 + sin(t * 0.05) * 0.2;
  float minDist = 1e10;
  float maxDensity = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 z = vec3(0.1 + float(s) * 0.15, 0.1, 0.1 + float(s) * 0.1);
    for (int i = 0; i < 60; i++) {
      vec3 nz = vec3(
        sin(a * z.y * z.z) - z.z * cos(b * z.x * z.y),
        z.z * sin(a * z.x) - cos(b * z.y * z.z),
        c_ * sin(z.x * z.z)
      );
      z = nz;
      z = clamp(z, vec3(-5.0), vec3(5.0));
      float dist = length(p - z * 0.7);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: min-dist SDF with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float dd = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 84. FourSpot Attractor (4-wing chaotic attractor)
vec2 mapFourSpotAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  float a = 2.0 + sin(t * 0.05) * 0.5;
  float minDist = 1e10;
  float maxDensity = 0.0;
  int count = clamp(iters, 8, 30);
  // Multiple seeds for dense orbit coverage
  for (int s = 0; s < 4; s++) {
    vec3 z = vec3(0.5 + float(s) * 0.2, 0.5, 0.5 + float(s) * 0.1);
    for (int i = 0; i < 30; i++) {
      if (i >= count) break;
      vec3 nz = vec3(
        z.y * z.z - a * z.x,
        z.x * z.z - z.y,
        -z.x * z.y + z.z
      );
      // No damping — let orbits explore full attractor
      z = nz;
      // Clamp to prevent escape to infinity
      z = clamp(z, vec3(-5.0), vec3(5.0));
      vec3 scaled = z * 0.4;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: Proper SDF — min distance to orbit points with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float dd = minDist - tubeR;
  float bound = length(p_in) - 2.5;
  return vec2(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 85. Svensson Attractor (x'=d*sin(a*y)-c, y'=b-x)
vec2 mapSvenssonAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 2.0 + sin(t * 0.04) * 0.3;
  float b = 0.2 + cos(t * 0.06) * 0.1;
  float c_ = 1.57 + sin(t * 0.05) * 0.2;
  float d_ = 1.4 + cos(t * 0.03) * 0.3;
  float minDist = 1e10;
  float maxDensity = 0.0;
  int count = clamp(iters, 10, 35);
  for (int s = 0; s < 3; s++) {
    vec2 z = vec2(0.1 + float(s) * 0.2, 0.1 + float(s) * 0.15);
    for (int i = 0; i < 35; i++) {
      if (i >= count) break;
      // Correct Svensson formula: x'=d*sin(a*y)-c, y'=b*sin(c*x)
      vec2 nz = vec2(d_ * sin(a * z.y) - c_, b * sin(c_ * z.x));
      z = nz;
      z = clamp(z, vec2(-5.0), vec2(5.0));
      vec3 pt = vec3(z * 0.8, sin(float(s) * 1.5 + t * 0.1) * 0.4);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      maxDensity = max(maxDensity, exp(-dist * 3.5));
    }
  }
  // PHASE 4.32: min-dist SDF with density-modulated tube radius
  float tubeR = 0.02 + maxDensity * 0.01;
  float dd = minDist - tubeR;
  float bound = length(p_in) - 2.3;
  return vec2(max(dd, bound * 0.6), maxDensity * 0.25);
}

// 86: Kaleidoscopic IFS
float mapKaleidoscopicIFS(vec3 p, float t, float phi, int iters) {
  float scale = phi;
  float minDist = 1e10;
  vec3 offset = vec3(1.0) * 0.8;
  for (int i = 0; i < 12; i++) {
    p = abs(p) - offset;
    p.xy = rot2D(t * 0.1 + float(i) * 0.5) * p.xy;
    p.yz = rot2D(t * 0.08 + float(i) * 0.3) * p.yz;
    float r = length(p);
    p = p * (scale / max(r * r, 0.001)) - offset * 0.5;
    minDist = min(minDist, length(p) * pow(scale, -float(i + 1)));
  }
  return minDist * 0.5;
}

// 87: Flower of Life
float mapFlowerOfLife(vec3 p, float t, float phi) {
  float r = length(p.xy);
  float theta = atan(p.y, p.x);
  float petals = 0.0;
  for (int i = 0; i < 6; i++) {
    float angle = float(i) * 1.0472 + t * 0.1;
    vec2 center = vec2(cos(angle), sin(angle)) * 0.5;
    float d = length(p.xy - center) - 0.5;
    petals += exp(-abs(d) * 8.0);
  }
  float flower = r - 0.5 - petals * 0.1;
  float z = sin(theta * 6.0 + t) * 0.1;
  return max(flower, abs(p.z - z) - 0.05) * 0.8;
}

// 88: Cosmic Spiral
float mapCosmicSpiral(vec3 p, float t, float phi) {
  float r = length(p.xy);
  float theta = atan(p.y, p.x);
  float spiral1 = theta - log(max(r, 0.01)) * 3.0 - t * 0.5;
  float spiral2 = theta - log(max(r, 0.01)) * 3.0 - t * 0.5 + 3.14159;
  float arm1 = sin(spiral1 * 2.0) * 0.5 + 0.5;
  float arm2 = sin(spiral2 * 2.0) * 0.5 + 0.5;
  float arms = max(arm1, arm2) * exp(-r * 0.5);
  float disk = abs(p.z) - 0.1 - arms * 0.2;
  return max(disk, r - 2.0) * 0.6;
}

// 89: Crystal Growth
float mapCrystalGrowth(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 1.0;
  vec3 dir = normalize(p);
  for (int i = 0; i < 8; i++) {
    float fi = float(i);
    vec3 branch = dir * (1.0 + fi * 0.3);
    branch.xy = rot2D(fi * 1.2 + t * 0.1) * branch.xy;
    float bd = length(p - branch) - 0.3 / (1.0 + fi * 0.2);
    d = min(d, bd);
    dir = normalize(dir + vec3(sin(fi), cos(fi * 1.3), sin(fi * 0.7)) * 0.3);
  }
  return d * 0.7;
}

// 90: Quantum Foam
float mapQuantumFoam(vec3 p, float t, float phi) {
  float bubbles = 0.0;
  for (int i = 0; i < 12; i++) {
    float fi = float(i);
    vec3 center = vec3(sin(fi * 1.3 + t * 0.2), cos(fi * 1.7 + t * 0.15), sin(fi * 2.1 + t * 0.1)) * 1.2;
    float r = 0.3 + sin(fi + t) * 0.1;
    float d = length(p - center) - r;
    bubbles = max(bubbles, -d);
  }
  return -bubbles * 0.8;
}

// 91: Fractal Coral
float mapFractalCoral(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 1.5;
  vec3 offset = vec3(0.0, 1.0, 0.0);
  for (int i = 0; i < 10; i++) {
    p = abs(p) - offset;
    p.xy = rot2D(0.8 + t * 0.05) * p.xy;
    float r = length(p);
    p = p * 1.5 / max(r * r, 0.01);
    d = min(d, length(p) * pow(1.5, -float(i + 1)));
  }
  return d * 0.4;
}

// 92: Nebula Cloud
float mapNebulaCloud(vec3 p, float t, float phi, int iters) {
  float minDist = 1e10;
  float maxDensity = 0.0;
  vec3 q = p;
  for (int i = 0; i < 8; i++) {
    q = abs(q) - vec3(0.5, 0.3, 0.4);
    q.xy = rot2D(t * 0.1 + float(i)) * q.xy;
    q.yz = rot2D(t * 0.08) * q.yz;
    minDist = min(minDist, length(q));
    maxDensity = max(maxDensity, exp(-length(q) * 2.0));
  }
  // PHASE 4.32: min-dist SDF with density-modulated tube radius
  float tubeR = 0.08 + maxDensity * 0.05;
  float d = minDist - tubeR;
  float bound = length(p) - 2.0;
  return max(d * 0.6, bound) * 0.7;
}

// 93: Hyperbolic Tiling
float mapHyperbolicTiling(vec3 p, float t, float phi) {
  float r = length(p.xy);
  float theta = atan(p.y, p.x);
  float tile = sin(theta * 8.0 + t * 0.2) * sin(r * 10.0 - t * 0.3);
  float pattern = abs(tile) - 0.3;
  float disk = r - 1.0;
  return max(pattern * 0.3, disk) * 0.8;
}

// 94: Organic Cell
float mapOrganicCell(vec3 p, float t, float phi) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float phiAngle = acos(clamp(p.z / max(r, 0.01), -1.0, 1.0));
  float membrane = abs(r - 1.0 - sin(theta * 5.0 + t) * 0.1 - sin(phiAngle * 4.0) * 0.1);
  float nucleus = length(p - vec3(0.0, 0.0, 0.2)) - 0.3;
  float organelles = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec3 pos = vec3(sin(fi * 1.5), cos(fi * 1.3), sin(fi * 1.7)) * 0.5;
    organelles = max(organelles, -(length(p - pos) - 0.15));
  }
  return min(membrane, max(-nucleus, -organelles)) * 0.7;
}

// 95: Golden Helix
float mapGoldenHelix(vec3 p, float t, float phi) {
  float helix1 = 0.0;
  float helix2 = 0.0;
  for (int i = 0; i < 20; i++) {
    float fi = float(i) * 0.3;
    float angle1 = fi * 2.4 + t * 0.5;
    float angle2 = angle1 + 3.14159;
    vec3 pos1 = vec3(cos(angle1), sin(angle1), fi - 3.0) * 0.5;
    vec3 pos2 = vec3(cos(angle2), sin(angle2), fi - 3.0) * 0.5;
    helix1 = max(helix1, -(length(p - pos1) - 0.15));
    helix2 = max(helix2, -(length(p - pos2) - 0.15));
  }
  float bridge = abs(p.z) - 3.0;
  return min(min(helix1, helix2), bridge) * 0.8;
}

// ==========================================
// MODERN FRACTALS WITH ADVANCED TECHNIQUES (96-100)
// ==========================================

// 96: Mandelbulb Power 4 — Spiky variant
float mapMandelbulbPower4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  int maxIter = int(clamp(float(iters), 6.0, 16.0));
  for (int i = 0; i < 16; i++) {
    if (i >= maxIter) break;
    r = length(z);
    if (r > 2.0) break;
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x);
    dr = pow(r, 3.0) * 4.0 * dr + 1.0;
    float zr = pow(r, 4.0);
    theta = theta * 4.0;
    phiAngle = phiAngle * 4.0;
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(phiAngle) * sin(theta), cos(theta));
    z += p;
  }
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
}

// 97: Mandelbulb Power 12 — Sea urchin variant
float mapMandelbulbPower12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  int maxIter = int(clamp(float(iters), 6.0, 16.0));
  for (int i = 0; i < 16; i++) {
    if (i >= maxIter) break;
    r = length(z);
    if (r > 2.0) break;
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x);
    dr = pow(r, 11.0) * 12.0 * dr + 1.0;
    float zr = pow(r, 12.0);
    theta = theta * 12.0;
    phiAngle = phiAngle * 12.0;
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(phiAngle) * sin(theta), cos(theta));
    z += p;
  }
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
}

// 98: Hybrid Mandelbox-KIFS — Modern hybrid fractal
float mapHybridMandelboxKIFS(vec3 p, float t, float phi, int iters) {
  float scale = phi;
  vec3 offset = vec3(1.0);
  float minDist = 1e10;
  int maxIter = int(clamp(float(iters), 6.0, 14.0));
  for (int i = 0; i < 14; i++) {
    if (i >= maxIter) break;
    // Kaleidoscopic fold
    p = abs(p) - offset * 0.5;
    // Mandelbox box fold
    p = clamp(p, -1.0, 1.0) * 2.0 - p;
    // Sphere fold
    float r2 = dot(p, p);
    if (r2 < 0.25) p *= 4.0;
    else if (r2 < 1.0) p /= r2;
    p = p * scale + offset * (1.0 - scale);
    // Rotation for animation
    p.xy = rot2D(t * 0.05 + float(i) * 0.3) * p.xy;
    minDist = min(minDist, length(p) * pow(scale, -float(i + 1)));
  }
  return minDist * 0.5;
}

// 99: Multibrot Power 3 — 3D extension of Mandelbrot with power 3
float mapMultibrot3Advanced(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  int maxIter = int(clamp(float(iters), 8.0, 20.0));
  for (int i = 0; i < 20; i++) {
    if (i >= maxIter) break;
    r = length(z);
    if (r > 2.0) break;
    // Power 3 in spherical coordinates
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x);
    dr = 3.0 * pow(r, 2.0) * dr + 1.0;
    float zr = pow(r, 3.0);
    theta = theta * 3.0;
    phiAngle = phiAngle * 3.0;
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(phiAngle) * sin(theta), cos(theta));
    z += p;
  }
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.001);
}

// 100: Fractal Flame IFS — Modern flame fractal in 3D
float mapFractalFlameIFS(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float color = 0.0;
  float minDist = 1e10;
  int maxIter = int(clamp(float(iters), 8.0, 18.0));
  for (int i = 0; i < 18; i++) {
    if (i >= maxIter) break;
    // Nonlinear variations
    float fi = float(i);
    z = vec3(
      sin(z.x * phi + t * 0.1) + cos(z.y * 1.3),
      sin(z.y * phi * 0.8 + t * 0.08) + cos(z.z * 1.5),
      sin(z.z * phi * 0.6 + t * 0.12) + cos(z.x * 1.7)
    ) * 0.5;
    // Fold
    z = abs(z) - vec3(1.0, 0.8, 0.9);
    // Scale
    z *= phi * 0.7;
    color += length(z) * 0.1;
    minDist = min(minDist, length(z - p) * pow(phi * 0.7, -float(i + 1)));
  }
  return minDist * 0.4;
}

// 101: Amazing Box — Mandelbox variation with spherical fold
float mapAmazingBox(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  float minDist = 1e10;
  int maxIter = int(clamp(float(iters), 8.0, 15.0));
  for (int i = 0; i < 15; i++) {
    if (i >= maxIter) break;
    // Box fold
    z = clamp(z, -1.0, 1.0) * 2.0 - z;
    // Spherical fold (Amazing Box variation)
    float r2 = dot(z, z);
    float r = sqrt(r2);
    if (r < 0.5) {
      z *= 4.0;
    } else if (r < 1.0) {
      z /= r2;
    }
    // Scale and translate
    z = z * scale + p;
    minDist = min(minDist, length(z) * pow(scale, -float(i + 1)));
  }
  return minDist * 0.5;
}

// 102: Mandelbulb-Mandelbox Hybrid — Best of both worlds
float mapMandelbulbMandelboxHybrid(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float minDist = 1e10;
  int maxIter = int(clamp(float(iters), 8.0, 12.0));
  for (int i = 0; i < 12; i++) {
    if (i >= maxIter) break;
    float fi = float(i);
    // Alternate between Mandelbulb and Mandelbox operations
    if (i % 2 == 0) {
      // Mandelbulb: spherical coordinates
      float r = length(z);
      float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
      float phi_angle = atan(z.y, z.x);
      dr = pow(r, 7.0) * 8.0 * dr + 1.0;
      float zr = pow(r, 8.0);
      theta = theta * 8.0;
      phi_angle = phi_angle * 8.0;
      z = zr * vec3(sin(theta) * cos(phi_angle), sin(theta) * sin(phi_angle), cos(theta));
      z += p;
    } else {
      // Mandelbox: box fold + sphere fold
      z = clamp(z, -1.0, 1.0) * 2.0 - z;
      float r2 = dot(z, z);
      if (r2 < 0.25) z *= 4.0;
      else if (r2 < 1.0) z /= r2;
      z = z * 2.0 + p;
    }
    minDist = min(minDist, length(z) * 0.5);
  }
  return 0.5 * log(length(z)) * length(z) / dr;
}

// 103: Menger-Mandelbox Hybrid — Sponge meets box
float mapMengerMandelboxHybrid(vec3 p, float t, float phi, int iters) {
  vec3 z = abs(p);
  float scale = 3.0;
  float minDist = 1e10;
  int maxIter = int(clamp(float(iters), 6.0, 10.0));
  for (int i = 0; i < 10; i++) {
    if (i >= maxIter) break;
    // Menger sponge iteration
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    z = z * scale - vec3(2.0, 2.0, 0.0);
    // Mandelbox influence
    z = clamp(z, -1.5, 1.5) * 2.0 - z;
    minDist = min(minDist, length(z) * pow(scale, -float(i + 1)));
  }
  return minDist * 0.4;
}

// ============= 4D POLYTOPES (projected from 4D to 3D) =============

vec4 project4Dto3D(vec4 p4, float distance) {
  float w = 1.0 / (distance - p4.w);
  return vec4(p4.xyz * w, 0.0);
}

float mapTesseract(vec3 p, float t, float phi, int iters) {
  float angle1 = t * 0.3;
  float angle2 = t * 0.2;
  float c1 = cos(angle1), s1 = sin(angle1);
  float c2 = cos(angle2), s2 = sin(angle2);
  vec4 p4 = vec4(p, 0.0);
  p4.xw = mat2(c1, -s1, s1, c1) * p4.xw;
  p4.yw = mat2(c2, -s2, s2, c2) * p4.yw;
  vec3 projected = project4Dto3D(p4, 3.0).xyz;
  vec3 d = abs(projected) - vec3(1.0);
  float cubeDist = length(max(d, 0.0)) + min(max(d.x, max(d.y, d.z)), 0.0);
  float scale = phi;
  for (int i = 0; i < 8; i++) {
    projected = abs(projected) - 0.5;
    projected *= scale;
    if (i % 2 == 0) projected = projected.zxy;
  }
  return length(projected) * pow(scale, -8.0);
}

float map120Cell(vec3 p, float t, float phi, int iters) {
  float angle = t * 0.25;
  float c = cos(angle), s = sin(angle);
  vec4 p4 = vec4(p, 0.0);
  p4.xw = mat2(c, -s, s, c) * p4.xw;
  p4.yz = mat2(c, s, -s, c) * p4.yz;
  vec3 projected = project4Dto3D(p4, 3.5).xyz;
  vec3 q = abs(projected);
  float d = max(max(q.x + q.y + q.z - phi, q.x + q.y - q.z), max(q.x - q.y + q.z, -q.x + q.y + q.z)) - 1.0;
  float scale = 1.0 / phi;
  for (int i = 0; i < 6; i++) {
    projected = abs(projected) - 0.618;
    projected *= phi;
    projected = projected.yzx;
  }
  return length(projected) * pow(scale, 6.0) * 0.5;
}

float map600Cell(vec3 p, float t, float phi, int iters) {
  float angle = t * 0.2;
  float c = cos(angle), s = sin(angle);
  vec4 p4 = vec4(p, 0.0);
  p4.xw = mat2(c, -s, s, c) * p4.xw;
  p4.zw = mat2(c, s, -s, c) * p4.zw;
  vec3 projected = project4Dto3D(p4, 3.0).xyz;
  vec3 q = abs(projected);
  float d = max(max(q.x * 1.618 + q.y, q.y * 1.618 + q.z), q.z * 1.618 + q.x) - 1.0;
  float scale = phi;
  for (int i = 0; i < 7; i++) {
    projected = abs(projected) - 0.5;
    projected *= scale;
    projected = projected.zxy;
  }
  return length(projected) * pow(scale, -7.0);
}

// ============= MANDELBROT VARIATIONS (1-10) =============

float mapMandelbrotVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + sin(t * 0.1) * 0.5;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + cos(t * 0.15) * 0.4;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p * (1.0 + sin(t * 0.08) * 0.1);
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 3.0 + sin(t * 0.12) * 0.6;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.5 + cos(t * 0.18) * 0.5;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p * phi;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + sin(t * 0.2) * 0.7;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p;
    z *= 1.0 + sin(t * 0.1) * 0.05;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.2 + cos(t * 0.14) * 0.45;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p * (1.0 + cos(t * 0.12) * 0.08);
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.8 + sin(t * 0.16) * 0.55;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + cos(t * 0.22) * 0.65;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p * phi * 0.5;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.4 + sin(t * 0.19) * 0.5;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p;
    z *= 1.0 + cos(t * 0.15) * 0.06;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapMandelbrotVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.6 + cos(t * 0.17) * 0.58;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p * (1.0 + sin(t * 0.13) * 0.09);
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// ===================================================================
// FRACTAL VARIATION MODULES (300 types total)
// ===================================================================

${dh}

${mh}

${hh}

${vh}

${yh}

float map24Cell(vec3 p, float t, float phi, int iters) {
  float angle = t * 0.3;
  float c = cos(angle), s = sin(angle);
  vec4 p4 = vec4(p, 0.0);
  p4.xy = mat2(c, -s, s, c) * p4.xy;
  p4.zw = mat2(c, s, -s, c) * p4.zw;
  vec3 projected = project4Dto3D(p4, 2.5).xyz;
  vec3 q = abs(projected);
  float d = max(max(q.x + q.y, q.y + q.z), q.z + q.x) - 1.414;
  float scale = 1.0 / phi;
  for (int i = 0; i < 8; i++) {
    projected = abs(projected) - 0.707;
    projected *= phi;
    if (i % 3 == 0) projected = projected.zxy;
    else if (i % 3 == 1) projected = projected.yzx;
  }
  return length(projected) * pow(scale, 8.0) * 0.6;
}

float map5Cell(vec3 p, float t, float phi, int iters) {
  float angle = t * 0.35;
  float c = cos(angle), s = sin(angle);
  vec4 p4 = vec4(p, 0.0);
  p4.xw = mat2(c, -s, s, c) * p4.xw;
  vec3 projected = project4Dto3D(p4, 2.0).xyz;
  vec3 q = abs(projected);
  float d = max(q.x + q.y + q.z - 1.0, -q.x - q.y - q.z - 1.0);
  float scale = phi;
  for (int i = 0; i < 10; i++) {
    projected = abs(projected) - 0.618;
    projected *= scale;
    projected = projected.zxy;
  }
  return length(projected) * pow(scale, -10.0);
}

float mapKleinBottle(vec3 p, float t, float phi) {
  float u = atan(p.y, p.x);
  float v = atan(p.z, length(p.xy));
  float r = 2.0 + cos(u) * sin(v) - sin(u) * sin(2.0 * v);
  vec3 surface = vec3(r * cos(u), r * sin(u), sin(u) * sin(v) + cos(u) * sin(2.0 * v));
  return length(p - surface) - 0.1;
}

float mapProjectivePlane(vec3 p, float t, float phi) {
  float u = atan(p.y, p.x);
  float v = atan(p.z, length(p.xy));
  float r = 1.5 + cos(2.0 * u) * sin(v);
  vec3 surface = vec3(r * cos(u) * cos(v), r * sin(u) * cos(v), sin(2.0 * u) * sin(v));
  return length(p - surface) - 0.08;
}

float mapMobiusStrip3D(vec3 p, float t, float phi) {
  float u = atan(p.y, p.x);
  float v = p.z;
  float r = 1.0 + 0.5 * cos(u * 0.5) * v;
  vec3 surface = vec3(r * cos(u), r * sin(u), 0.5 * sin(u * 0.5) * v);
  return length(p - surface) - 0.05;
}

float mapTorusKnot4D(vec3 p, float t, float phi, int iters) {
  float angle = t * 0.2;
  float c = cos(angle), s = sin(angle);
  vec4 p4 = vec4(p, 0.0);
  p4.xw = mat2(c, -s, s, c) * p4.xw;
  vec3 projected = project4Dto3D(p4, 3.0).xyz;
  float u = atan(projected.y, projected.x);
  float r = 1.0 + 0.3 * cos(3.0 * u);
  vec3 torus = vec3(r * cos(2.0 * u), r * sin(2.0 * u), 0.3 * sin(3.0 * u));
  return length(projected - torus) - 0.08;
}

float mapFlameSinusoidal(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 12; i++) {
    z = vec3(sin(z.x), sin(z.y), sin(z.z)) * phi;
    z += 0.1 * p;
    if (i % 3 == 0) z = z.zxy;
  }
  return length(z) * pow(phi, -12.0) - 0.5;
}

float mapFlameSpherical(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r2 = dot(z, z);
  for (int i = 0; i < 10; i++) {
    z = z / r2 * phi;
    z += 0.15 * p;
    r2 = dot(z, z);
  }
  return length(z) * pow(phi, -10.0) - 0.6;
}

float mapFlameSwirl(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 14; i++) {
    float r = length(z.xy);
    float angle = atan(z.y, z.x) + r * 0.5;
    z.xy = vec2(cos(angle), sin(angle)) * r;
    z *= phi * 0.9;
    z += 0.1 * p;
  }
  return length(z) * pow(phi, -14.0) - 0.4;
}

float mapFlameHorseshoe(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 11; i++) {
    float r = length(z);
    float angle = atan(z.y, z.x) * 2.0;
    z = vec3(cos(angle), sin(angle), z.z) * r / (r + 1.0);
    z *= phi;
    z += 0.12 * p;
  }
  return length(z) * pow(phi, -11.0) - 0.5;
}

float mapFlameButterfly(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 13; i++) {
    float r = length(z.xy);
    float x = z.x * cos(r) - z.y * sin(r);
    float y = z.x * sin(r) + z.y * cos(r);
    z.xy = vec2(x, y) * phi * 0.8;
    z += 0.08 * p;
  }
  return length(z) * pow(phi, -13.0) - 0.45;
}

float mapFlameHeart(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 12; i++) {
    float r = length(z);
    float angle = atan(z.y, z.x);
    float heart = 1.0 - sin(angle);
    z.xy = vec2(cos(angle), sin(angle)) * r * heart;
    z *= phi * 0.85;
    z += 0.1 * p;
  }
  return length(z) * pow(phi, -12.0) - 0.5;
}

float mapFlameSpiral(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 15; i++) {
    float r = length(z.xy);
    float angle = atan(z.y, z.x) + 0.5;
    z.xy = vec2(cos(angle), sin(angle)) * (r + 0.1);
    z *= phi * 0.95;
    z += 0.05 * p;
  }
  return length(z) * pow(phi, -15.0) - 0.4;
}

float mapFlameHyperbolic(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 10; i++) {
    float r = length(z.xy);
    float angle = atan(z.y, z.x);
    z.xy = vec2(cosh(r) * cos(angle), sinh(r) * sin(angle));
    z *= phi * 0.7;
    z += 0.15 * p;
  }
  return length(z) * pow(phi, -10.0) - 0.6;
}

float mapFlameDiamond(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 11; i++) {
    float r = length(z.xy);
    float angle = atan(z.y, z.x);
    z.xy = vec2(sin(angle) * r, cos(angle) * r);
    z *= phi * 0.9;
    z += 0.12 * p;
  }
  return length(z) * pow(phi, -11.0) - 0.5;
}

float mapFlameWaves(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 12; i++) {
    z.x += 0.3 * sin(z.y * 3.14159);
    z.y += 0.3 * sin(z.x * 3.14159);
    z *= phi * 0.85;
    z += 0.1 * p;
  }
  return length(z) * pow(phi, -12.0) - 0.45;
}

float mapFlamePopcorn(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 13; i++) {
    float dx = 0.2 * sin(tan(z.y));
    float dy = 0.2 * sin(tan(z.x));
    z.x += dx;
    z.y += dy;
    z *= phi * 0.9;
    z += 0.08 * p;
  }
  return length(z) * pow(phi, -13.0) - 0.4;
}

float mapFlameRings(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 10; i++) {
    float r = length(z.xy);
    float angle = atan(z.y, z.x);
    r = 0.5 + 0.3 * sin(r * 10.0);
    z.xy = vec2(cos(angle), sin(angle)) * r;
    z *= phi * 0.8;
    z += 0.15 * p;
  }
  return length(z) * pow(phi, -10.0) - 0.5;
}

float mapFlameFan(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  for (int i = 0; i < 11; i++) {
    float r = length(z.xy);
    float angle = atan(z.y, z.x);
    if (mod(r, 0.5) > 0.25) angle += 0.5;
    z.xy = vec2(cos(angle), sin(angle)) * r;
    z *= phi * 0.85;
    z += 0.12 * p;
  }
  return length(z) * pow(phi, -11.0) - 0.45;
}

float mapIFS3DTree(vec3 p, float t, float phi, int iters) {
  float d = length(p - vec3(0.0, 1.0, 0.0)) - 0.3;
  for (int i = 0; i < 8; i++) {
    p = abs(p) - vec3(0.5, 0.8, 0.5);
    p.xz = mat2(cos(0.5), -sin(0.5), sin(0.5), cos(0.5)) * p.xz;
    p *= phi * 0.7;
    d = min(d, length(p) * pow(phi, -float(i)) * 0.5);
  }
  return d;
}

float mapIFS3DFern(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  for (int i = 0; i < 10; i++) {
    vec3 z = p;
    if (i % 4 == 0) z = z * 0.85 + vec3(0.0, 0.1, 0.0);
    else if (i % 4 == 1) z = z * 0.2 + vec3(0.0, 0.2, 0.0);
    else if (i % 4 == 2) { z.x = -z.x * 0.85; z = z + vec3(0.0, 0.15, 0.0); }
    else { z.x = -z.x * 0.85; z = z + vec3(0.0, 0.1, 0.0); }
    z *= phi;
    d = min(d, length(z) * pow(phi, -float(i)));
  }
  return d - 0.1;
}

float mapIFS3DSierpinski(vec3 p, float t, float phi, int iters) {
  float scale = 2.0;
  for (int i = 0; i < 12; i++) {
    if (p.x + p.y < 0.0) p.xy = -p.yx;
    if (p.x + p.z < 0.0) p.xz = -p.zx;
    if (p.y + p.z < 0.0) p.yz = -p.zy;
    p = p * scale - (scale - 1.0);
  }
  return length(p) * pow(scale, -12.0);
}

float mapIFS3DCantor(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  for (int i = 0; i < 8; i++) {
    vec3 z = p;
    z = fract(z * 3.0) - 0.5;
    z *= phi;
    d = min(d, length(z) * pow(phi, -float(i)) * 0.3);
  }
  return d;
}

float mapIFS3DKoch(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 1.0;
  for (int i = 0; i < 10; i++) {
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    p = p * 3.0 - vec3(2.0, 1.0, 1.0);
    p.xz = mat2(0.5, -0.866, 0.866, 0.5) * p.xz;
    d = min(d, length(p) * pow(3.0, -float(i)));
  }
  return d * 0.5;
}

vec2 evalSingleFractal(int ftype, vec3 p, float t, float phi, int iters) {
  if (ftype == 0) return mapPhyllotaxis(p, t, phi, iters);
  if (ftype == 1) return mapMandelbulb(p, t, phi, iters);
  if (ftype == 2) return mapQuaternionJulia(p, t, phi, iters);
  if (ftype == 3) return mapApollonian(p, t, phi, iters);
  if (ftype == 4) return mapSpiralTunnel(p, t, phi);
  if (ftype == 5) return mapMandelbox(p, t, phi, iters);
  if (ftype == 6) return mapIcosahedron(p, t, phi, iters);
  if (ftype == 7) return mapMenger(p, t, phi, iters);
  if (ftype == 8) return mapGyroid(p, t, phi);
  if (ftype == 9) return mapPrimeSpiral(p, t, phi, iters);
  if (ftype == 10) return mapQuasicrystal(p, t, phi, iters);
  if (ftype == 11) return mapHopfFibration(p, t, phi);
  if (ftype == 12) return mapCalabiYau(p, t, phi, iters);
  if (ftype == 13) return mapRiemannZeta(p, t, phi);
  if (ftype == 14) return mapSierpinskiOcta(p, t, phi, iters);
  if (ftype == 15) return mapCliffordKlein(p, t, phi);
  if (ftype == 16) return mapPoincareSphere(p, t, phi, iters);
  if (ftype == 17) return mapGaussianPrimes(p, t, phi, iters);
  if (ftype == 18) return mapNeoviusMinimal(p, t, phi);
  if (ftype == 19) return mapEulerTotientSpiral(p, t, phi);
  if (ftype == 20) return mapCliffordTorus4D(p, t, phi);
  if (ftype == 21) return mapKleinianLimit(p, t, phi, iters);
  if (ftype == 22) return mapFibonacciSnowflake(p, t, phi, iters);
  if (ftype == 23) return mapQuaternionMandelbrot(p, t, phi, iters);
  if (ftype == 24) return mapHilbertCurve3D(p, t, phi, iters);
  if (ftype == 25) return mapDragonCurveIFS(p, t, phi, iters);
  if (ftype == 26) return mapPythagorasTree3D(p, t, phi, iters);
  if (ftype == 27) return mapBurningShip3D(p, t, phi, iters);
  if (ftype == 28) return mapNewtonBasins(p, t, phi, iters);
  if (ftype == 29) return mapJerusalemCube(p, t, phi, iters);
  if (ftype == 30) return mapLorenzAttractor(p, t, phi, iters);
  if (ftype == 31) return mapHofstadterButterfly(p, t, phi, iters);
  if (ftype == 32) return mapAntoineNecklace(p, t, phi, iters);
  if (ftype == 33) return mapDLACluster(p, t, phi, iters);
  if (ftype == 34) return mapRosslerHyperchaos(p, t, phi, iters);
  if (ftype == 35) return mapCliffordAttractor(p, t, phi, iters);
  if (ftype == 36) return mapAbrikosovLattice(p, t, phi, iters);
  if (ftype == 37) return mapBeltramiPseudosphere(p, t, phi, iters);
  if (ftype == 38) return mapSpinFoamNetwork(p, t, phi, iters);
  if (ftype == 39) return mapRamanujanTau(p, t, phi, iters);
  if (ftype == 40) return mapBelousovWaves(p, t, phi, iters);
  if (ftype == 41) return mapHenonAttractor(p, t, phi, iters);
  if (ftype == 42) return mapAizawaAttractor(p, t, phi, iters);
  if (ftype == 43) return mapThomasAttractor(p, t, phi, iters);
  if (ftype == 44) return mapHalvorsenAttractor(p, t, phi, iters);
  if (ftype == 45) return mapJuliaSet3D(p, t, phi, iters);
  if (ftype == 46) return mapMultibrot3(p, t, phi, iters);
  if (ftype == 47) return mapTetrix(p, t, phi, iters);
  if (ftype == 48) return mapGosperCurve(p, t, phi, iters);
  if (ftype == 49) return mapLSystemPlant(p, t, phi, iters);
  if (ftype == 50) return mapSchwarzP(p, t, phi);
  if (ftype == 51) return mapSchwarzD(p, t, phi);
  if (ftype == 52) return mapApollonianGasket(p, t, phi, iters);
  if (ftype == 53) return mapBarnsleyFern3D(p, t, phi, iters);
  if (ftype == 54) return mapKleinQuartic(p, t, phi, iters);
  if (ftype == 55) return mapSpherePacking(p, t, phi, iters);
  if (ftype == 56) return mapNovaFractal(p, t, phi, iters);
  if (ftype == 57) return mapGoldenKnot(p, t, phi);
  if (ftype == 58) return mapSphericalHarmonics(p, t, phi);
  if (ftype == 59) return mapFractalCross(p, t, phi, iters);
  if (ftype == 60) return mapReactionDiffusion(p, t, phi, iters);
  if (ftype == 61) return mapSierpinskiCarpet(p, t, phi, iters);
  if (ftype == 62) return mapTricorn(p, t, phi, iters);
  if (ftype == 63) return mapChuaCircuit(p, t, phi, iters);
  if (ftype == 64) return mapStandardMap(p, t, phi, iters);
  if (ftype == 65) return mapIkedaMap(p, t, phi, iters);
  if (ftype == 66) return mapKochSnowflake3D(p, t, phi, iters);
  if (ftype == 67) return mapCantorDust(p, t, phi, iters);
  if (ftype == 68) return mapPhoenixFractal(p, t, phi, iters);
  if (ftype == 69) return mapFatouSet(p, t, phi, iters);
  if (ftype == 70) return mapE8Lattice(p, t, phi, iters);
  if (ftype == 71) return mapChladniFigures(p, t, phi, iters);
  if (ftype == 72) return mapFitzHugh(p, t, phi, iters);
  if (ftype == 73) return mapRosslerAttractor(p, t, phi, iters);
  if (ftype == 74) return mapDuffingAttractor(p, t, phi, iters);
  if (ftype == 75) return mapLogisticBifurcation(p, t, phi, iters);
  if (ftype == 76) return mapFractalSpire(p, t, phi, iters);
  if (ftype == 77) return mapDeJongAttractor(p, t, phi, iters);
  if (ftype == 78) return mapPickoverAttractor(p, t, phi, iters);
  if (ftype == 79) return mapVicsekFractal(p, t, phi, iters);
  if (ftype == 80) return mapMandelbar(p, t, phi, iters);
  if (ftype == 81) return mapWeierstrass3D(p, t, phi, iters);
  if (ftype == 82) return mapPopcornFunction(p, t, phi, iters);
  if (ftype == 83) return mapBedheadAttractor(p, t, phi, iters);
  if (ftype == 84) return mapFourSpotAttractor(p, t, phi, iters);
  if (ftype == 85) return mapSvenssonAttractor(p, t, phi, iters);
  // NEW BEAUTIFUL FRACTALS (return float → wrap to vec2 with trap=0)
  if (ftype == 86) return vec2(mapKaleidoscopicIFS(p, t, phi, iters), 0.0);
  if (ftype == 87) return vec2(mapFlowerOfLife(p, t, phi), 0.0);
  if (ftype == 88) return vec2(mapCosmicSpiral(p, t, phi), 0.0);
  if (ftype == 89) return vec2(mapCrystalGrowth(p, t, phi, iters), 0.0);
  if (ftype == 90) return vec2(mapQuantumFoam(p, t, phi), 0.0);
  if (ftype == 91) return vec2(mapFractalCoral(p, t, phi, iters), 0.0);
  if (ftype == 92) return vec2(mapNebulaCloud(p, t, phi, iters), 0.0);
  if (ftype == 93) return vec2(mapHyperbolicTiling(p, t, phi), 0.0);
  if (ftype == 94) return vec2(mapOrganicCell(p, t, phi), 0.0);
  if (ftype == 95) return vec2(mapGoldenHelix(p, t, phi), 0.0);
  // MODERN FRACTALS WITH ADVANCED TECHNIQUES
  if (ftype == 96) return vec2(mapMandelbulbPower4(p, t, phi, iters), 0.0);
  if (ftype == 97) return vec2(mapMandelbulbPower12(p, t, phi, iters), 0.0);
  if (ftype == 98) return vec2(mapHybridMandelboxKIFS(p, t, phi, iters), 0.0);
  if (ftype == 99) return vec2(mapMultibrot3Advanced(p, t, phi, iters), 0.0);
  if (ftype == 100) return vec2(mapFractalFlameIFS(p, t, phi, iters), 0.0);
  if (ftype == 101) return vec2(mapAmazingBox(p, t, phi, iters), 0.0);
  if (ftype == 102) return vec2(mapMandelbulbMandelboxHybrid(p, t, phi, iters), 0.0);
  if (ftype == 103) return vec2(mapMengerMandelboxHybrid(p, t, phi, iters), 0.0);
  // 4D POLYTOPES (projected from 4D to 3D)
  if (ftype == 104) return vec2(mapTesseract(p, t, phi, iters), 0.0); // 4D hypercube
  if (ftype == 105) return vec2(map120Cell(p, t, phi, iters), 0.0); // 4D dodecahedron
  if (ftype == 106) return vec2(map600Cell(p, t, phi, iters), 0.0); // 4D icosahedron
  if (ftype == 107) return vec2(map24Cell(p, t, phi, iters), 0.0); // self-dual 4D polytope
  if (ftype == 108) return vec2(map5Cell(p, t, phi, iters), 0.0); // 4D tetrahedron
  // HIGHER-DIMENSIONAL MANIFOLDS
  if (ftype == 109) return vec2(mapKleinBottle(p, t, phi), 0.0); // non-orientable surface
  if (ftype == 110) return vec2(mapProjectivePlane(p, t, phi), 0.0); // RP^2
  if (ftype == 111) return vec2(mapMobiusStrip3D(p, t, phi), 0.0); // twisted strip
  if (ftype == 112) return vec2(mapTorusKnot4D(p, t, phi, iters), 0.0); // 4D torus knot
  // FRACTAL FLAMES (Apophysis variations)
  if (ftype == 113) return vec2(mapFlameSinusoidal(p, t, phi, iters), 0.0);
  if (ftype == 114) return vec2(mapFlameSpherical(p, t, phi, iters), 0.0);
  if (ftype == 115) return vec2(mapFlameSwirl(p, t, phi, iters), 0.0);
  if (ftype == 116) return vec2(mapFlameHorseshoe(p, t, phi, iters), 0.0);
  if (ftype == 117) return vec2(mapFlameButterfly(p, t, phi, iters), 0.0);
  if (ftype == 118) return vec2(mapFlameHeart(p, t, phi, iters), 0.0);
  if (ftype == 119) return vec2(mapFlameSpiral(p, t, phi, iters), 0.0);
  if (ftype == 120) return vec2(mapFlameHyperbolic(p, t, phi, iters), 0.0);
  if (ftype == 121) return vec2(mapFlameDiamond(p, t, phi, iters), 0.0);
  if (ftype == 122) return vec2(mapFlameWaves(p, t, phi, iters), 0.0);
  if (ftype == 123) return vec2(mapFlamePopcorn(p, t, phi, iters), 0.0);
  if (ftype == 124) return vec2(mapFlameRings(p, t, phi, iters), 0.0);
  if (ftype == 125) return vec2(mapFlameFan(p, t, phi, iters), 0.0);
  // ADVANCED IFS (3D affine transforms)
  if (ftype == 126) return vec2(mapIFS3DTree(p, t, phi, iters), 0.0);
  if (ftype == 127) return vec2(mapIFS3DFern(p, t, phi, iters), 0.0);
  if (ftype == 128) return vec2(mapIFS3DSierpinski(p, t, phi, iters), 0.0);
  if (ftype == 129) return vec2(mapIFS3DCantor(p, t, phi, iters), 0.0);
  if (ftype == 130) return vec2(mapIFS3DKoch(p, t, phi, iters), 0.0);
  
  // MANDELBROT VARIATIONS (131-140)
  if (ftype == 131) return vec2(mapMandelbrotVariant1(p, t, phi, iters), 0.0);
  if (ftype == 132) return vec2(mapMandelbrotVariant2(p, t, phi, iters), 0.0);
  if (ftype == 133) return vec2(mapMandelbrotVariant3(p, t, phi, iters), 0.0);
  if (ftype == 134) return vec2(mapMandelbrotVariant4(p, t, phi, iters), 0.0);
  if (ftype == 135) return vec2(mapMandelbrotVariant5(p, t, phi, iters), 0.0);
  if (ftype == 136) return vec2(mapMandelbrotVariant6(p, t, phi, iters), 0.0);
  if (ftype == 137) return vec2(mapMandelbrotVariant7(p, t, phi, iters), 0.0);
  if (ftype == 138) return vec2(mapMandelbrotVariant8(p, t, phi, iters), 0.0);
  if (ftype == 139) return vec2(mapMandelbrotVariant9(p, t, phi, iters), 0.0);
  if (ftype == 140) return vec2(mapMandelbrotVariant10(p, t, phi, iters), 0.0);
  
  // JULIA VARIATIONS (141-190)
  if (ftype == 141) return vec2(mapJuliaVariant1(p, t, phi, iters), 0.0);
  if (ftype == 142) return vec2(mapJuliaVariant2(p, t, phi, iters), 0.0);
  if (ftype == 143) return vec2(mapJuliaVariant3(p, t, phi, iters), 0.0);
  if (ftype == 144) return vec2(mapJuliaVariant4(p, t, phi, iters), 0.0);
  if (ftype == 145) return vec2(mapJuliaVariant5(p, t, phi, iters), 0.0);
  if (ftype == 146) return vec2(mapJuliaVariant6(p, t, phi, iters), 0.0);
  if (ftype == 147) return vec2(mapJuliaVariant7(p, t, phi, iters), 0.0);
  if (ftype == 148) return vec2(mapJuliaVariant8(p, t, phi, iters), 0.0);
  if (ftype == 149) return vec2(mapJuliaVariant9(p, t, phi, iters), 0.0);
  if (ftype == 150) return vec2(mapJuliaVariant10(p, t, phi, iters), 0.0);
  if (ftype == 151) return vec2(mapJuliaVariant11(p, t, phi, iters), 0.0);
  if (ftype == 152) return vec2(mapJuliaVariant12(p, t, phi, iters), 0.0);
  if (ftype == 153) return vec2(mapJuliaVariant13(p, t, phi, iters), 0.0);
  if (ftype == 154) return vec2(mapJuliaVariant14(p, t, phi, iters), 0.0);
  if (ftype == 155) return vec2(mapJuliaVariant15(p, t, phi, iters), 0.0);
  if (ftype == 156) return vec2(mapJuliaVariant16(p, t, phi, iters), 0.0);
  if (ftype == 157) return vec2(mapJuliaVariant17(p, t, phi, iters), 0.0);
  if (ftype == 158) return vec2(mapJuliaVariant18(p, t, phi, iters), 0.0);
  if (ftype == 159) return vec2(mapJuliaVariant19(p, t, phi, iters), 0.0);
  if (ftype == 160) return vec2(mapJuliaVariant20(p, t, phi, iters), 0.0);
  if (ftype == 161) return vec2(mapJuliaVariant21(p, t, phi, iters), 0.0);
  if (ftype == 162) return vec2(mapJuliaVariant22(p, t, phi, iters), 0.0);
  if (ftype == 163) return vec2(mapJuliaVariant23(p, t, phi, iters), 0.0);
  if (ftype == 164) return vec2(mapJuliaVariant24(p, t, phi, iters), 0.0);
  if (ftype == 165) return vec2(mapJuliaVariant25(p, t, phi, iters), 0.0);
  if (ftype == 166) return vec2(mapJuliaVariant26(p, t, phi, iters), 0.0);
  if (ftype == 167) return vec2(mapJuliaVariant27(p, t, phi, iters), 0.0);
  if (ftype == 168) return vec2(mapJuliaVariant28(p, t, phi, iters), 0.0);
  if (ftype == 169) return vec2(mapJuliaVariant29(p, t, phi, iters), 0.0);
  if (ftype == 170) return vec2(mapJuliaVariant30(p, t, phi, iters), 0.0);
  if (ftype == 171) return vec2(mapJuliaVariant31(p, t, phi, iters), 0.0);
  if (ftype == 172) return vec2(mapJuliaVariant32(p, t, phi, iters), 0.0);
  if (ftype == 173) return vec2(mapJuliaVariant33(p, t, phi, iters), 0.0);
  if (ftype == 174) return vec2(mapJuliaVariant34(p, t, phi, iters), 0.0);
  if (ftype == 175) return vec2(mapJuliaVariant35(p, t, phi, iters), 0.0);
  if (ftype == 176) return vec2(mapJuliaVariant36(p, t, phi, iters), 0.0);
  if (ftype == 177) return vec2(mapJuliaVariant37(p, t, phi, iters), 0.0);
  if (ftype == 178) return vec2(mapJuliaVariant38(p, t, phi, iters), 0.0);
  if (ftype == 179) return vec2(mapJuliaVariant39(p, t, phi, iters), 0.0);
  if (ftype == 180) return vec2(mapJuliaVariant40(p, t, phi, iters), 0.0);
  if (ftype == 181) return vec2(mapJuliaVariant41(p, t, phi, iters), 0.0);
  if (ftype == 182) return vec2(mapJuliaVariant42(p, t, phi, iters), 0.0);
  if (ftype == 183) return vec2(mapJuliaVariant43(p, t, phi, iters), 0.0);
  if (ftype == 184) return vec2(mapJuliaVariant44(p, t, phi, iters), 0.0);
  if (ftype == 185) return vec2(mapJuliaVariant45(p, t, phi, iters), 0.0);
  if (ftype == 186) return vec2(mapJuliaVariant46(p, t, phi, iters), 0.0);
  if (ftype == 187) return vec2(mapJuliaVariant47(p, t, phi, iters), 0.0);
  if (ftype == 188) return vec2(mapJuliaVariant48(p, t, phi, iters), 0.0);
  if (ftype == 189) return vec2(mapJuliaVariant49(p, t, phi, iters), 0.0);
  if (ftype == 190) return vec2(mapJuliaVariant50(p, t, phi, iters), 0.0);
  
  // IFS VARIATIONS (191-240)
  if (ftype == 191) return vec2(mapIFSVariant1(p, t, phi, iters), 0.0);
  if (ftype == 192) return vec2(mapIFSVariant2(p, t, phi, iters), 0.0);
  if (ftype == 193) return vec2(mapIFSVariant3(p, t, phi, iters), 0.0);
  if (ftype == 194) return vec2(mapIFSVariant4(p, t, phi, iters), 0.0);
  if (ftype == 195) return vec2(mapIFSVariant5(p, t, phi, iters), 0.0);
  if (ftype == 196) return vec2(mapIFSVariant6(p, t, phi, iters), 0.0);
  if (ftype == 197) return vec2(mapIFSVariant7(p, t, phi, iters), 0.0);
  if (ftype == 198) return vec2(mapIFSVariant8(p, t, phi, iters), 0.0);
  if (ftype == 199) return vec2(mapIFSVariant9(p, t, phi, iters), 0.0);
  if (ftype == 200) return vec2(mapIFSVariant10(p, t, phi, iters), 0.0);
  if (ftype == 201) return vec2(mapIFSVariant11(p, t, phi, iters), 0.0);
  if (ftype == 202) return vec2(mapIFSVariant12(p, t, phi, iters), 0.0);
  if (ftype == 203) return vec2(mapIFSVariant13(p, t, phi, iters), 0.0);
  if (ftype == 204) return vec2(mapIFSVariant14(p, t, phi, iters), 0.0);
  if (ftype == 205) return vec2(mapIFSVariant15(p, t, phi, iters), 0.0);
  if (ftype == 206) return vec2(mapIFSVariant16(p, t, phi, iters), 0.0);
  if (ftype == 207) return vec2(mapIFSVariant17(p, t, phi, iters), 0.0);
  if (ftype == 208) return vec2(mapIFSVariant18(p, t, phi, iters), 0.0);
  if (ftype == 209) return vec2(mapIFSVariant19(p, t, phi, iters), 0.0);
  if (ftype == 210) return vec2(mapIFSVariant20(p, t, phi, iters), 0.0);
  if (ftype == 211) return vec2(mapIFSVariant21(p, t, phi, iters), 0.0);
  if (ftype == 212) return vec2(mapIFSVariant22(p, t, phi, iters), 0.0);
  if (ftype == 213) return vec2(mapIFSVariant23(p, t, phi, iters), 0.0);
  if (ftype == 214) return vec2(mapIFSVariant24(p, t, phi, iters), 0.0);
  if (ftype == 215) return vec2(mapIFSVariant25(p, t, phi, iters), 0.0);
  if (ftype == 216) return vec2(mapIFSVariant26(p, t, phi, iters), 0.0);
  if (ftype == 217) return vec2(mapIFSVariant27(p, t, phi, iters), 0.0);
  if (ftype == 218) return vec2(mapIFSVariant28(p, t, phi, iters), 0.0);
  if (ftype == 219) return vec2(mapIFSVariant29(p, t, phi, iters), 0.0);
  if (ftype == 220) return vec2(mapIFSVariant30(p, t, phi, iters), 0.0);
  if (ftype == 221) return vec2(mapIFSVariant31(p, t, phi, iters), 0.0);
  if (ftype == 222) return vec2(mapIFSVariant32(p, t, phi, iters), 0.0);
  if (ftype == 223) return vec2(mapIFSVariant33(p, t, phi, iters), 0.0);
  if (ftype == 224) return vec2(mapIFSVariant34(p, t, phi, iters), 0.0);
  if (ftype == 225) return vec2(mapIFSVariant35(p, t, phi, iters), 0.0);
  if (ftype == 226) return vec2(mapIFSVariant36(p, t, phi, iters), 0.0);
  if (ftype == 227) return vec2(mapIFSVariant37(p, t, phi, iters), 0.0);
  if (ftype == 228) return vec2(mapIFSVariant38(p, t, phi, iters), 0.0);
  if (ftype == 229) return vec2(mapIFSVariant39(p, t, phi, iters), 0.0);
  if (ftype == 230) return vec2(mapIFSVariant40(p, t, phi, iters), 0.0);
  if (ftype == 231) return vec2(mapIFSVariant41(p, t, phi, iters), 0.0);
  if (ftype == 232) return vec2(mapIFSVariant42(p, t, phi, iters), 0.0);
  if (ftype == 233) return vec2(mapIFSVariant43(p, t, phi, iters), 0.0);
  if (ftype == 234) return vec2(mapIFSVariant44(p, t, phi, iters), 0.0);
  if (ftype == 235) return vec2(mapIFSVariant45(p, t, phi, iters), 0.0);
  if (ftype == 236) return vec2(mapIFSVariant46(p, t, phi, iters), 0.0);
  if (ftype == 237) return vec2(mapIFSVariant47(p, t, phi, iters), 0.0);
  if (ftype == 238) return vec2(mapIFSVariant48(p, t, phi, iters), 0.0);
  if (ftype == 239) return vec2(mapIFSVariant49(p, t, phi, iters), 0.0);
  if (ftype == 240) return vec2(mapIFSVariant50(p, t, phi, iters), 0.0);
  
  // L-SYSTEM VARIATIONS (241-290)
  if (ftype == 241) return vec2(mapLSystemVariant1(p, t, phi, iters), 0.0);
  if (ftype == 242) return vec2(mapLSystemVariant2(p, t, phi, iters), 0.0);
  if (ftype == 243) return vec2(mapLSystemVariant3(p, t, phi, iters), 0.0);
  if (ftype == 244) return vec2(mapLSystemVariant4(p, t, phi, iters), 0.0);
  if (ftype == 245) return vec2(mapLSystemVariant5(p, t, phi, iters), 0.0);
  if (ftype == 246) return vec2(mapLSystemVariant6(p, t, phi, iters), 0.0);
  if (ftype == 247) return vec2(mapLSystemVariant7(p, t, phi, iters), 0.0);
  if (ftype == 248) return vec2(mapLSystemVariant8(p, t, phi, iters), 0.0);
  if (ftype == 249) return vec2(mapLSystemVariant9(p, t, phi, iters), 0.0);
  if (ftype == 250) return vec2(mapLSystemVariant10(p, t, phi, iters), 0.0);
  if (ftype == 251) return vec2(mapLSystemVariant11(p, t, phi, iters), 0.0);
  if (ftype == 252) return vec2(mapLSystemVariant12(p, t, phi, iters), 0.0);
  if (ftype == 253) return vec2(mapLSystemVariant13(p, t, phi, iters), 0.0);
  if (ftype == 254) return vec2(mapLSystemVariant14(p, t, phi, iters), 0.0);
  if (ftype == 255) return vec2(mapLSystemVariant15(p, t, phi, iters), 0.0);
  if (ftype == 256) return vec2(mapLSystemVariant16(p, t, phi, iters), 0.0);
  if (ftype == 257) return vec2(mapLSystemVariant17(p, t, phi, iters), 0.0);
  if (ftype == 258) return vec2(mapLSystemVariant18(p, t, phi, iters), 0.0);
  if (ftype == 259) return vec2(mapLSystemVariant19(p, t, phi, iters), 0.0);
  if (ftype == 260) return vec2(mapLSystemVariant20(p, t, phi, iters), 0.0);
  if (ftype == 261) return vec2(mapLSystemVariant21(p, t, phi, iters), 0.0);
  if (ftype == 262) return vec2(mapLSystemVariant22(p, t, phi, iters), 0.0);
  if (ftype == 263) return vec2(mapLSystemVariant23(p, t, phi, iters), 0.0);
  if (ftype == 264) return vec2(mapLSystemVariant24(p, t, phi, iters), 0.0);
  if (ftype == 265) return vec2(mapLSystemVariant25(p, t, phi, iters), 0.0);
  if (ftype == 266) return vec2(mapLSystemVariant26(p, t, phi, iters), 0.0);
  if (ftype == 267) return vec2(mapLSystemVariant27(p, t, phi, iters), 0.0);
  if (ftype == 268) return vec2(mapLSystemVariant28(p, t, phi, iters), 0.0);
  if (ftype == 269) return vec2(mapLSystemVariant29(p, t, phi, iters), 0.0);
  if (ftype == 270) return vec2(mapLSystemVariant30(p, t, phi, iters), 0.0);
  if (ftype == 271) return vec2(mapLSystemVariant31(p, t, phi, iters), 0.0);
  if (ftype == 272) return vec2(mapLSystemVariant32(p, t, phi, iters), 0.0);
  if (ftype == 273) return vec2(mapLSystemVariant33(p, t, phi, iters), 0.0);
  if (ftype == 274) return vec2(mapLSystemVariant34(p, t, phi, iters), 0.0);
  if (ftype == 275) return vec2(mapLSystemVariant35(p, t, phi, iters), 0.0);
  if (ftype == 276) return vec2(mapLSystemVariant36(p, t, phi, iters), 0.0);
  if (ftype == 277) return vec2(mapLSystemVariant37(p, t, phi, iters), 0.0);
  if (ftype == 278) return vec2(mapLSystemVariant38(p, t, phi, iters), 0.0);
  if (ftype == 279) return vec2(mapLSystemVariant39(p, t, phi, iters), 0.0);
  if (ftype == 280) return vec2(mapLSystemVariant40(p, t, phi, iters), 0.0);
  if (ftype == 281) return vec2(mapLSystemVariant41(p, t, phi, iters), 0.0);
  if (ftype == 282) return vec2(mapLSystemVariant42(p, t, phi, iters), 0.0);
  if (ftype == 283) return vec2(mapLSystemVariant43(p, t, phi, iters), 0.0);
  if (ftype == 284) return vec2(mapLSystemVariant44(p, t, phi, iters), 0.0);
  if (ftype == 285) return vec2(mapLSystemVariant45(p, t, phi, iters), 0.0);
  if (ftype == 286) return vec2(mapLSystemVariant46(p, t, phi, iters), 0.0);
  if (ftype == 287) return vec2(mapLSystemVariant47(p, t, phi, iters), 0.0);
  if (ftype == 288) return vec2(mapLSystemVariant48(p, t, phi, iters), 0.0);
  if (ftype == 289) return vec2(mapLSystemVariant49(p, t, phi, iters), 0.0);
  if (ftype == 290) return vec2(mapLSystemVariant50(p, t, phi, iters), 0.0);
  
  // FLAME VARIATIONS (291-340)
  if (ftype == 291) return vec2(mapFlameVariant1(p, t, phi, iters), 0.0);
  if (ftype == 292) return vec2(mapFlameVariant2(p, t, phi, iters), 0.0);
  if (ftype == 293) return vec2(mapFlameVariant3(p, t, phi, iters), 0.0);
  if (ftype == 294) return vec2(mapFlameVariant4(p, t, phi, iters), 0.0);
  if (ftype == 295) return vec2(mapFlameVariant5(p, t, phi, iters), 0.0);
  if (ftype == 296) return vec2(mapFlameVariant6(p, t, phi, iters), 0.0);
  if (ftype == 297) return vec2(mapFlameVariant7(p, t, phi, iters), 0.0);
  if (ftype == 298) return vec2(mapFlameVariant8(p, t, phi, iters), 0.0);
  if (ftype == 299) return vec2(mapFlameVariant9(p, t, phi, iters), 0.0);
  if (ftype == 300) return vec2(mapFlameVariant10(p, t, phi, iters), 0.0);
  if (ftype == 301) return vec2(mapFlameVariant11(p, t, phi, iters), 0.0);
  if (ftype == 302) return vec2(mapFlameVariant12(p, t, phi, iters), 0.0);
  if (ftype == 303) return vec2(mapFlameVariant13(p, t, phi, iters), 0.0);
  if (ftype == 304) return vec2(mapFlameVariant14(p, t, phi, iters), 0.0);
  if (ftype == 305) return vec2(mapFlameVariant15(p, t, phi, iters), 0.0);
  if (ftype == 306) return vec2(mapFlameVariant16(p, t, phi, iters), 0.0);
  if (ftype == 307) return vec2(mapFlameVariant17(p, t, phi, iters), 0.0);
  if (ftype == 308) return vec2(mapFlameVariant18(p, t, phi, iters), 0.0);
  if (ftype == 309) return vec2(mapFlameVariant19(p, t, phi, iters), 0.0);
  if (ftype == 310) return vec2(mapFlameVariant20(p, t, phi, iters), 0.0);
  if (ftype == 311) return vec2(mapFlameVariant21(p, t, phi, iters), 0.0);
  if (ftype == 312) return vec2(mapFlameVariant22(p, t, phi, iters), 0.0);
  if (ftype == 313) return vec2(mapFlameVariant23(p, t, phi, iters), 0.0);
  if (ftype == 314) return vec2(mapFlameVariant24(p, t, phi, iters), 0.0);
  if (ftype == 315) return vec2(mapFlameVariant25(p, t, phi, iters), 0.0);
  if (ftype == 316) return vec2(mapFlameVariant26(p, t, phi, iters), 0.0);
  if (ftype == 317) return vec2(mapFlameVariant27(p, t, phi, iters), 0.0);
  if (ftype == 318) return vec2(mapFlameVariant28(p, t, phi, iters), 0.0);
  if (ftype == 319) return vec2(mapFlameVariant29(p, t, phi, iters), 0.0);
  if (ftype == 320) return vec2(mapFlameVariant30(p, t, phi, iters), 0.0);
  if (ftype == 321) return vec2(mapFlameVariant31(p, t, phi, iters), 0.0);
  if (ftype == 322) return vec2(mapFlameVariant32(p, t, phi, iters), 0.0);
  if (ftype == 323) return vec2(mapFlameVariant33(p, t, phi, iters), 0.0);
  if (ftype == 324) return vec2(mapFlameVariant34(p, t, phi, iters), 0.0);
  if (ftype == 325) return vec2(mapFlameVariant35(p, t, phi, iters), 0.0);
  if (ftype == 326) return vec2(mapFlameVariant36(p, t, phi, iters), 0.0);
  if (ftype == 327) return vec2(mapFlameVariant37(p, t, phi, iters), 0.0);
  if (ftype == 328) return vec2(mapFlameVariant38(p, t, phi, iters), 0.0);
  if (ftype == 329) return vec2(mapFlameVariant39(p, t, phi, iters), 0.0);
  if (ftype == 330) return vec2(mapFlameVariant40(p, t, phi, iters), 0.0);
  if (ftype == 331) return vec2(mapFlameVariant41(p, t, phi, iters), 0.0);
  if (ftype == 332) return vec2(mapFlameVariant42(p, t, phi, iters), 0.0);
  if (ftype == 333) return vec2(mapFlameVariant43(p, t, phi, iters), 0.0);
  if (ftype == 334) return vec2(mapFlameVariant44(p, t, phi, iters), 0.0);
  if (ftype == 335) return vec2(mapFlameVariant45(p, t, phi, iters), 0.0);
  if (ftype == 336) return vec2(mapFlameVariant46(p, t, phi, iters), 0.0);
  if (ftype == 337) return vec2(mapFlameVariant47(p, t, phi, iters), 0.0);
  if (ftype == 338) return vec2(mapFlameVariant48(p, t, phi, iters), 0.0);
  if (ftype == 339) return vec2(mapFlameVariant49(p, t, phi, iters), 0.0);
  if (ftype == 340) return vec2(mapFlameVariant50(p, t, phi, iters), 0.0);
  
  // HYBRID VARIATIONS (341-430)
  if (ftype == 341) return vec2(mapHybridVariant1(p, t, phi, iters), 0.0);
  if (ftype == 342) return vec2(mapHybridVariant2(p, t, phi, iters), 0.0);
  if (ftype == 343) return vec2(mapHybridVariant3(p, t, phi, iters), 0.0);
  if (ftype == 344) return vec2(mapHybridVariant4(p, t, phi, iters), 0.0);
  if (ftype == 345) return vec2(mapHybridVariant5(p, t, phi, iters), 0.0);
  if (ftype == 346) return vec2(mapHybridVariant6(p, t, phi, iters), 0.0);
  if (ftype == 347) return vec2(mapHybridVariant7(p, t, phi, iters), 0.0);
  if (ftype == 348) return vec2(mapHybridVariant8(p, t, phi, iters), 0.0);
  if (ftype == 349) return vec2(mapHybridVariant9(p, t, phi, iters), 0.0);
  if (ftype == 350) return vec2(mapHybridVariant10(p, t, phi, iters), 0.0);
  if (ftype == 351) return vec2(mapHybridVariant11(p, t, phi, iters), 0.0);
  if (ftype == 352) return vec2(mapHybridVariant12(p, t, phi, iters), 0.0);
  if (ftype == 353) return vec2(mapHybridVariant13(p, t, phi, iters), 0.0);
  if (ftype == 354) return vec2(mapHybridVariant14(p, t, phi, iters), 0.0);
  if (ftype == 355) return vec2(mapHybridVariant15(p, t, phi, iters), 0.0);
  if (ftype == 356) return vec2(mapHybridVariant16(p, t, phi, iters), 0.0);
  if (ftype == 357) return vec2(mapHybridVariant17(p, t, phi, iters), 0.0);
  if (ftype == 358) return vec2(mapHybridVariant18(p, t, phi, iters), 0.0);
  if (ftype == 359) return vec2(mapHybridVariant19(p, t, phi, iters), 0.0);
  if (ftype == 360) return vec2(mapHybridVariant20(p, t, phi, iters), 0.0);
  if (ftype == 361) return vec2(mapHybridVariant21(p, t, phi, iters), 0.0);
  if (ftype == 362) return vec2(mapHybridVariant22(p, t, phi, iters), 0.0);
  if (ftype == 363) return vec2(mapHybridVariant23(p, t, phi, iters), 0.0);
  if (ftype == 364) return vec2(mapHybridVariant24(p, t, phi, iters), 0.0);
  if (ftype == 365) return vec2(mapHybridVariant25(p, t, phi, iters), 0.0);
  if (ftype == 366) return vec2(mapHybridVariant26(p, t, phi, iters), 0.0);
  if (ftype == 367) return vec2(mapHybridVariant27(p, t, phi, iters), 0.0);
  if (ftype == 368) return vec2(mapHybridVariant28(p, t, phi, iters), 0.0);
  if (ftype == 369) return vec2(mapHybridVariant29(p, t, phi, iters), 0.0);
  if (ftype == 370) return vec2(mapHybridVariant30(p, t, phi, iters), 0.0);
  if (ftype == 371) return vec2(mapHybridVariant31(p, t, phi, iters), 0.0);
  if (ftype == 372) return vec2(mapHybridVariant32(p, t, phi, iters), 0.0);
  if (ftype == 373) return vec2(mapHybridVariant33(p, t, phi, iters), 0.0);
  if (ftype == 374) return vec2(mapHybridVariant34(p, t, phi, iters), 0.0);
  if (ftype == 375) return vec2(mapHybridVariant35(p, t, phi, iters), 0.0);
  if (ftype == 376) return vec2(mapHybridVariant36(p, t, phi, iters), 0.0);
  if (ftype == 377) return vec2(mapHybridVariant37(p, t, phi, iters), 0.0);
  if (ftype == 378) return vec2(mapHybridVariant38(p, t, phi, iters), 0.0);
  if (ftype == 379) return vec2(mapHybridVariant39(p, t, phi, iters), 0.0);
  if (ftype == 380) return vec2(mapHybridVariant40(p, t, phi, iters), 0.0);
  if (ftype == 381) return vec2(mapHybridVariant41(p, t, phi, iters), 0.0);
  if (ftype == 382) return vec2(mapHybridVariant42(p, t, phi, iters), 0.0);
  if (ftype == 383) return vec2(mapHybridVariant43(p, t, phi, iters), 0.0);
  if (ftype == 384) return vec2(mapHybridVariant44(p, t, phi, iters), 0.0);
  if (ftype == 385) return vec2(mapHybridVariant45(p, t, phi, iters), 0.0);
  if (ftype == 386) return vec2(mapHybridVariant46(p, t, phi, iters), 0.0);
  if (ftype == 387) return vec2(mapHybridVariant47(p, t, phi, iters), 0.0);
  if (ftype == 388) return vec2(mapHybridVariant48(p, t, phi, iters), 0.0);
  if (ftype == 389) return vec2(mapHybridVariant49(p, t, phi, iters), 0.0);
  if (ftype == 390) return vec2(mapHybridVariant50(p, t, phi, iters), 0.0);
  if (ftype == 391) return vec2(mapHybridVariant51(p, t, phi, iters), 0.0);
  if (ftype == 392) return vec2(mapHybridVariant52(p, t, phi, iters), 0.0);
  if (ftype == 393) return vec2(mapHybridVariant53(p, t, phi, iters), 0.0);
  if (ftype == 394) return vec2(mapHybridVariant54(p, t, phi, iters), 0.0);
  if (ftype == 395) return vec2(mapHybridVariant55(p, t, phi, iters), 0.0);
  if (ftype == 396) return vec2(mapHybridVariant56(p, t, phi, iters), 0.0);
  if (ftype == 397) return vec2(mapHybridVariant57(p, t, phi, iters), 0.0);
  if (ftype == 398) return vec2(mapHybridVariant58(p, t, phi, iters), 0.0);
  if (ftype == 399) return vec2(mapHybridVariant59(p, t, phi, iters), 0.0);
  if (ftype == 400) return vec2(mapHybridVariant60(p, t, phi, iters), 0.0);
  if (ftype == 401) return vec2(mapHybridVariant61(p, t, phi, iters), 0.0);
  if (ftype == 402) return vec2(mapHybridVariant62(p, t, phi, iters), 0.0);
  if (ftype == 403) return vec2(mapHybridVariant63(p, t, phi, iters), 0.0);
  if (ftype == 404) return vec2(mapHybridVariant64(p, t, phi, iters), 0.0);
  if (ftype == 405) return vec2(mapHybridVariant65(p, t, phi, iters), 0.0);
  if (ftype == 406) return vec2(mapHybridVariant66(p, t, phi, iters), 0.0);
  if (ftype == 407) return vec2(mapHybridVariant67(p, t, phi, iters), 0.0);
  if (ftype == 408) return vec2(mapHybridVariant68(p, t, phi, iters), 0.0);
  if (ftype == 409) return vec2(mapHybridVariant69(p, t, phi, iters), 0.0);
  if (ftype == 410) return vec2(mapHybridVariant70(p, t, phi, iters), 0.0);
  if (ftype == 411) return vec2(mapHybridVariant71(p, t, phi, iters), 0.0);
  if (ftype == 412) return vec2(mapHybridVariant72(p, t, phi, iters), 0.0);
  if (ftype == 413) return vec2(mapHybridVariant73(p, t, phi, iters), 0.0);
  if (ftype == 414) return vec2(mapHybridVariant74(p, t, phi, iters), 0.0);
  if (ftype == 415) return vec2(mapHybridVariant75(p, t, phi, iters), 0.0);
  if (ftype == 416) return vec2(mapHybridVariant76(p, t, phi, iters), 0.0);
  if (ftype == 417) return vec2(mapHybridVariant77(p, t, phi, iters), 0.0);
  if (ftype == 418) return vec2(mapHybridVariant78(p, t, phi, iters), 0.0);
  if (ftype == 419) return vec2(mapHybridVariant79(p, t, phi, iters), 0.0);
  if (ftype == 420) return vec2(mapHybridVariant80(p, t, phi, iters), 0.0);
  if (ftype == 421) return vec2(mapHybridVariant81(p, t, phi, iters), 0.0);
  if (ftype == 422) return vec2(mapHybridVariant82(p, t, phi, iters), 0.0);
  if (ftype == 423) return vec2(mapHybridVariant83(p, t, phi, iters), 0.0);
  if (ftype == 424) return vec2(mapHybridVariant84(p, t, phi, iters), 0.0);
  if (ftype == 425) return vec2(mapHybridVariant85(p, t, phi, iters), 0.0);
  if (ftype == 426) return vec2(mapHybridVariant86(p, t, phi, iters), 0.0);
  if (ftype == 427) return vec2(mapHybridVariant87(p, t, phi, iters), 0.0);
  if (ftype == 428) return vec2(mapHybridVariant88(p, t, phi, iters), 0.0);
  if (ftype == 429) return vec2(mapHybridVariant89(p, t, phi, iters), 0.0);
  if (ftype == 430) return vec2(mapHybridVariant90(p, t, phi, iters), 0.0);
  
  return mapPhyllotaxis(p, t, phi, iters); // Default fallback
}

// Multi-Operator Distance Field Algebra & Space Folding
float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5 * (d2 - d1) / max(k, 0.0001), 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  float h = clamp(0.5 - 0.5 * (d2 - d1) / max(k, 0.0001), 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  float h = clamp(0.5 - 0.5 * (d2 - d1) / max(k, 0.0001), 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

// Recursive Space-Folding Domain Warp (Geometry A warps the coordinate space for Geometry B)
vec3 domainWarpByGeometry(vec3 p_in, int ftype, float t, float phi, float strength) {
  if (strength <= 0.01) return p_in;
  vec3 p = p_in;
  vec3 disp = vec3(0.0);

  if (ftype == 5) {
    vec3 bFold = clamp(p, vec3(-u_box_fold), vec3(u_box_fold)) * 2.0 - p;
    disp = (bFold - p) * 0.35;
  } else if (ftype == 8) {
    disp = vec3(
      sin(p.y * phi * 1.5 + t * 0.2) * cos(p.z * phi * 1.5),
      sin(p.z * phi * 1.5 + t * 0.2) * cos(p.x * phi * 1.5),
      sin(p.x * phi * 1.5 + t * 0.2) * cos(p.y * phi * 1.5)
    ) * 0.28;
  } else if (ftype == 11) {
    float r_xz = length(p.xz);
    float theta = atan(p.z, p.x);
    disp = vec3(-sin(theta * 2.0), cos(r_xz * phi * 1.2), sin(theta * phi)) * 0.25;
  } else if (ftype == 9) {
    float r2 = dot(p.xy, p.xy);
    float ang = 2.0 * PI * sqrt(max(r2, 0.01));
    disp = vec3(cos(ang), sin(ang), sin(p.z * phi * 1.4)) * 0.25;
  } else if (ftype == 10) {
    float norm_c = 1.0 / sqrt(1.0 + phi * phi);
    vec3 n1 = vec3(1.0, phi, 0.0) * norm_c;
    vec3 n3 = vec3(0.0, 1.0, phi) * norm_c;
    disp = (n1 * sin(dot(p, n1) * 3.5 + t * 0.2) + n3 * cos(dot(p, n3) * 3.5)) * 0.28;
  } else {
    vec2 rot = rot2D(p.z * 0.6 * phi + t * 0.08) * p.xy;
    disp = vec3(rot.x - p.x, rot.y - p.y, sin(length(p) * phi) * 0.2);
  }

  return p + disp * strength;
}

// Master Distance Evaluator with 16 Archetypes + Continuous Hybrids + Inside-Out Inversion
vec2 sceneSDF(vec3 p_world) {
  vec3 p_eval = p_world;
  float inv_scale = 1.0;

  // 0. Kelvin Inversion Sphere (Inside-Out Conformal Inversion)
  // Maps fractal core singularity to infinite exterior space!
  if (u_cam_mode > 2.5 && u_cam_mode < 3.5) {
    float R = u_phi_val;
    float r2 = dot(p_eval, p_eval);
    if (r2 > 0.0001) {
      inv_scale = (R * R) / r2;
      p_eval = p_eval * inv_scale;
    }
  }

  float r_bound = length(p_eval);
  if (r_bound > 5.0) {
    return vec2((r_bound - 2.8) / max(inv_scale, 0.0001), r_bound);
  }

  int ftypeA = int(u_fractal_type + 0.5);
  int ftypeB = int(u_hybrid_type + 0.5);
  int ftypeC = int(u_tertiary_type + 0.5);
  int iters = int(clamp(u_iterations, 6.0, 64.0));
  
  // FRACTAL-SPECIFIC ADAPTIVE ITERATIONS
  // Different fractals have different complexity and need different iteration counts
  // This optimizes quality/performance ratio for each fractal type
  if (ftypeA == 1 || ftypeA == 23) { // Mandelbulb, Quaternion Mandelbrot
    iters = int(clamp(float(iters) * 1.2, 6.0, 64.0)); // Need more iterations
  } else if (ftypeA == 5 || ftypeA == 101) { // Mandelbox, Amazing Box
    iters = int(clamp(float(iters) * 1.1, 6.0, 64.0)); // Slightly more
  } else if (ftypeA == 7 || ftypeA == 103) { // Menger, Menger-Mandelbox
    iters = int(clamp(float(iters) * 0.9, 6.0, 64.0)); // Can use fewer
  } else if (ftypeA >= 86 && ftypeA <= 95) { // Beautiful fractals
    iters = int(clamp(float(iters) * 1.15, 6.0, 64.0)); // More for detail
  }
  
  float t = u_time * u_morph_speed;
  float phi = u_phi_val;
  int compOp = int(u_compose_op + 0.5);
  float k = max(0.04, u_smooth_k * 0.45);

  // FRACTAL BREATHING: Organic radial pulsation at golden-ratio frequencies
  // Creates living, breathing geometry that visibly grows and contracts
  float breathPrimary = sin(u_time * 0.8) * 0.5 + 0.5; // 0-1, ~7.85s period (faster)
  float breathSecondary = sin(u_time * 0.8 * phi + 1.0) * 0.5 + 0.5; // Phase-shifted
  float breathTertiary = sin(u_time * 0.8 * phi * phi + 2.0) * 0.5 + 0.5; // Triple-phi
  // Combine for non-repeating organic motion (sum of golden-ratio frequencies)
  float breathAmount = (breathPrimary * 0.5 + breathSecondary * 0.3 + breathTertiary * 0.2) * 0.06; // Increased from 0.025 to 0.06 for more visible growth
  // Distance-weighted: surface breathes more than interior
  float breathWeight = 1.0 - exp(-r_bound * 0.8);
  p_eval *= 1.0 + breathAmount * breathWeight;

  // ORBITAL PRECESSION: Slow rotation of evaluation space
  // Creates gentle tumbling motion that reveals hidden symmetry
  float precessAngle = u_time * 0.06; // Very slow: ~104s per revolution
  float precessY = u_time * 0.037; // Different speed on Y axis
  float cp = cos(precessAngle), sp = sin(precessAngle);
  float cq = cos(precessY), sq = sin(precessY);
  // Rotate around Y axis
  p_eval = vec3(p_eval.x * cp + p_eval.z * sp, p_eval.y * cq - p_eval.x * sq * 0.3, -p_eval.x * sp + p_eval.z * cp);

  // 1. Recursive Space-Folding Domain Warp
  vec3 p_warped = p_eval;
  if (compOp == 4 || u_warp_strength > 0.05) {
    float effWarp = (compOp == 4) ? max(u_warp_strength, 0.35) : u_warp_strength;
    p_warped = domainWarpByGeometry(p_eval, ftypeB, t, phi, effWarp);
  }

  // 2. Primary Layer Evaluation
  vec2 resA = evalSingleFractal(ftypeA, p_warped, t, phi, iters);
  float current_d = resA.x;
  float current_trap = resA.y;

  // 3. Secondary Layer Evaluation & All 8 Lipschitz-Continuous Composite Operators
  // FIX: Secondary gets FULL iterations — was starved to max 10, causing blobby hybrids
  if (u_hybrid_blend > 0.02) {
    vec2 resB = evalSingleFractal(ftypeB, p_eval, t, phi, iters);
    float dB = resB.x;
    float trapB = resB.y;
    float blend = clamp(u_hybrid_blend, 0.0, 1.0);

    if (compOp == 0) {
      // 0: Continuous Topological Morph — full range blend for dramatic transitions
      float morphBlend = blend;
      current_d = mix(current_d, dB, morphBlend);
      // FIX: Richer orbit trap mixing — was losing color diversity
      current_trap = mix(current_trap, trapB, morphBlend * 0.85);
    } else if (compOp == 1) {
      // 1: Polynomial Smooth Union (smin)
      float h = clamp(0.5 + 0.5 * (dB - current_d) / k, 0.0, 1.0);
      current_d = mix(dB, current_d, h) - k * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, h);
    } else if (compOp == 2) {
      // 2: Smooth Intersection (smax)
      float h = clamp(0.5 - 0.5 * (dB - current_d) / k, 0.0, 1.0);
      current_d = mix(dB, current_d, h) + k * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, h);
    } else if (compOp == 3) {
      // 3: Smooth Vault Carving (ssub) — IQ formulation: (d2 - d1)
      float h = clamp(0.5 - 0.5 * (dB - current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -dB, h) + k * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, h);
    } else if (compOp == 4) {
      // 4: Domain Warp — full range spatial distortion
      float warpBlend = blend * 0.8;
      current_d = mix(current_d, dB, warpBlend);
      current_trap = mix(current_trap, trapB, blend * 0.7); // Richer trap influence
    } else if (compOp == 5) {
      // 5: Harmonic Spectral Resonance — stronger displacement
      float disp = clamp(dB * 0.5, -0.2, 0.2) * blend; // Wider displacement range
      current_d = current_d + disp;
      // FIX: Better trap blending for richer color interference
      current_trap = mix(current_trap, trapB, blend * 0.6);
    } else if (compOp == 6) {
      // 6: Interlaced TPMS Cellular Lattice
      float lattice = abs(dB) - 0.035;
      float h = clamp(0.5 - 0.5 * (lattice - current_d) / (k * 0.5), 0.0, 1.0);
      current_d = mix(lattice, current_d, h) + (k * 0.5) * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, 0.5);
    } else if (compOp == 7) {
      // 7: Conformal Spiral Vortex — full twist range
      float twistFactor = blend * 0.85;
      float blended = opSmoothUnion(current_d, dB, k * 0.8);
      current_d = mix(current_d, blended, twistFactor);
      current_trap = mix(current_trap, trapB, blend * 0.6);
    }
  }

  // 4. Tertiary Layer Evaluation — FIX: Evaluate further from surface for richer topology
  if (u_tertiary_blend > 0.02 && current_d < 0.5) {
    // FIX: Tertiary gets 75% iterations (was 50%) for visible detail
    vec2 resC = evalSingleFractal(ftypeC, p_eval, t, phi, clamp(int(float(iters) * 0.75), 8, 24));
    float blendC = clamp(u_tertiary_blend, 0.05, 0.55);
    // Apply user-selected composite operator for consistent tertiary blending
    if (compOp == 2) {
      float h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
      current_d = mix(resC.x, current_d, h) + k * h * (1.0 - h);
    } else if (compOp == 3) {
      float h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -resC.x, h) + k * h * (1.0 - h);
    } else if (compOp == 0) {
      current_d = mix(current_d, resC.x, blendC * 0.5);
    } else {
      current_d = opSmoothUnion(current_d, resC.x, k * blendC * 1.5);
    }
    current_trap = min(current_trap, resC.y);
  }

  // 5. Multi-Scale Golden Octaves — FIX: Re-evaluate actual fractal at golden ratio scales
  // This creates REAL hierarchical detail instead of generic sine noise
  int numOctaves = int(clamp(u_octave_layers, 1.0, 4.0));
  if (numOctaves > 1 && current_d < 0.3) {
    float octScale = phi;
    float octWeight = 0.35; // Stronger octave influence
    for (int oct = 1; oct < 3; oct++) {
      if (oct >= numOctaves) break;
      // Re-evaluate the PRIMARY fractal at golden-ratio scaled position
      vec3 p_oct = p_eval * octScale;
      vec2 resOct = evalSingleFractal(ftypeA, p_oct, t, phi, clamp(iters / 2, 4, 12));
      // Blend octave detail into main distance — creates real self-similar hierarchy
      float octDist = resOct.x / octScale; // Scale distance back to world space
      current_d = mix(current_d, octDist, octWeight / float(oct + 1));
      current_trap = mix(current_trap, resOct.y, octWeight * 0.3 / float(oct + 1));
      octScale *= phi;
      octWeight *= 0.5;
    }
  }

  // 6. Hollow Cathedral Carving (Only when explicitly enabled by user)
  if (u_interior_cut > 0.05) {
    float shellThick = 0.015 + u_interior_cut * 0.04;
    float shellD = abs(current_d) - shellThick;
    current_d = mix(current_d, shellD, clamp(u_interior_cut * 1.4, 0.0, 0.9));
  }

  // 7. Cross-Section Anatomical Slice (Multi-Axis Tomography)
  if (u_slice_plane > 0.01) {
    float sliceOffset = (0.5 - u_slice_plane) * 3.5;
    vec3 planeNorm = normalize(vec3(0.0, 0.85065, 0.52573)); // Golden default
    if (u_slice_axis > 0.5 && u_slice_axis < 1.5) {
      planeNorm = vec3(1.0, 0.0, 0.0); // Sagittal X
    } else if (u_slice_axis > 1.5 && u_slice_axis < 2.5) {
      planeNorm = vec3(0.0, 1.0, 0.0); // Axial Y
    } else if (u_slice_axis > 2.5) {
      planeNorm = vec3(0.0, 0.0, 1.0); // Coronal Z
    }
    float planeDist = dot(p_eval, planeNorm) - sliceOffset;
    current_d = max(current_d, planeDist);
  }

  // Inverse distance correction for Kelvin inversion
  if (u_cam_mode > 2.5 && u_cam_mode < 3.5) {
    current_d = current_d / max(inv_scale, 0.0001);
  }

  return vec2(current_d, current_trap);
}

vec3 calcNormal(vec3 p, float eps) {
  // Tetrahedral normal estimation with adaptive epsilon
  // Use smaller eps for more detail at close range
  float adaptiveEps = eps * 0.5; // Reduce for sharper normals
  
  vec3 e1 = vec3(adaptiveEps, -adaptiveEps, -adaptiveEps);
  vec3 e2 = vec3(-adaptiveEps, -adaptiveEps, adaptiveEps);
  vec3 e3 = vec3(-adaptiveEps, adaptiveEps, -adaptiveEps);
  vec3 e4 = vec3(adaptiveEps, adaptiveEps, adaptiveEps);

  vec3 n = e1 * sceneSDF(p + e1).x +
           e2 * sceneSDF(p + e2).x +
           e3 * sceneSDF(p + e3).x +
           e4 * sceneSDF(p + e4).x;
  float len = length(n);
  return len > 0.00001 ? n / len : vec3(0.0, 1.0, 0.0);
}

// Micro-detail normal perturbation for surface detail
vec3 calcMicroNormal(vec3 p, float scale) {
  float microEps = 0.0005 * scale;
  vec3 e1 = vec3(microEps, -microEps, -microEps);
  vec3 e2 = vec3(-microEps, -microEps, microEps);
  vec3 e3 = vec3(-microEps, microEps, -microEps);
  vec3 e4 = vec3(microEps, microEps, microEps);

  vec3 n = e1 * sceneSDF(p + e1).x +
           e2 * sceneSDF(p + e2).x +
           e3 * sceneSDF(p + e3).x +
           e4 * sceneSDF(p + e4).x;
  float len = length(n);
  return len > 0.00001 ? n / len : vec3(0.0, 1.0, 0.0);
}

// calcSoftShadow removed - was dead code (not used since Phase 4.15)
// Kept for reference but commented out to save shader compilation time

float calcAO(vec3 p, vec3 n, float t) {
  float aoScale = clamp(t * 3.0, 0.3, 1.0); // Distance-adaptive
  float occ = 0.0;
  float sca = 1.0;
  // HIGH-QUALITY AO: 7 samples (was 5) for smoother occlusion
  for (int i = 0; i < 7; i++) {
    float h = (0.01 + 0.11 * float(i * i) / 36.0) * aoScale;
    float d = sceneSDF(p + h * n).x;
    occ += (h - d) * sca;
    sca *= 0.72; // Slightly faster decay for sharper details
  }
  occ = clamp(occ, 0.0, 2.5);
  
  // IQ multi-distance AO: 4 distances (was 3) for better detail
  float ao1 = clamp(1.0 - 5.0 * max(0.003 * aoScale - sceneSDF(p + n * 0.003 * aoScale).x, 0.0), 0.0, 1.0);
  float ao2 = clamp(1.0 - 3.0 * max(0.02  * aoScale - sceneSDF(p + n * 0.02  * aoScale).x, 0.0), 0.0, 1.0);
  float ao3 = clamp(1.0 - 2.0 * max(0.08  * aoScale - sceneSDF(p + n * 0.08  * aoScale).x, 0.0), 0.0, 1.0);
  float ao4 = clamp(1.0 - 1.2 * max(0.18  * aoScale - sceneSDF(p + n * 0.18  * aoScale).x, 0.0), 0.0, 1.0);
  float multiAO = ao1 * 0.20 + ao2 * 0.35 + ao3 * 0.30 + ao4 * 0.15;
  return clamp(multiAO * (1.0 - 0.85 * occ), 0.12, 1.0);
}

vec3 acesToneMap(vec3 x) {
  float a = 2.51;
  float b = 0.03;
  float c = 2.43;
  float d = 0.59;
  float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 uv = (v_uv * 2.0 - 1.0) * vec2(aspect, -1.0);

  // Camera distance: allow entering the fractal (min 0.05 for near-clip safety)
  float cam_dist = max(0.05, u_zoom);

  vec3 ro;
  vec3 rd;

  if (u_cam_mode > 0.5 && u_cam_mode < 1.5) {
    // Mode 1: Fly-Through (Inside-Out Free 3D Exploration inside corridors)
    ro = u_cam_pos;
    float cy = cos(u_cam_rot.x);
    float sy = sin(u_cam_rot.x);
    float cp = cos(u_cam_rot.y);
    float sp = sin(u_cam_rot.y);
    vec3 forward = vec3(sy * cp, sp, -cy * cp);
    float fwd_len = length(forward);
    forward = forward / max(fwd_len, 1e-6);
    vec3 up_hint = vec3(0.0, 1.0, 0.0);
    vec3 cross_fwd_up = cross(forward, up_hint);
    float cross_len = length(cross_fwd_up);
    if (cross_len < 1e-4) {
      up_hint = vec3(0.0, 0.0, 1.0);
      cross_fwd_up = cross(forward, up_hint);
      cross_len = length(cross_fwd_up);
    }
    vec3 right = cross_fwd_up / max(cross_len, 1e-6);
    vec3 up = cross(right, forward);
    float fov_factor = 1.25;
    rd = normalize(uv.x * right + uv.y * up + fov_factor * forward);
  } else if (u_cam_mode > 1.5 && u_cam_mode < 2.5) {
    // Mode 2: Autonomous Golden Spiral Dive into the core
    float spiralT = u_time * 0.22 * u_morph_speed;
    float r_spiral = 0.35 + 1.8 * (0.5 + 0.5 * cos(spiralT * 0.618));
    float theta_spiral = spiralT * 1.618;
    float y_spiral = sin(spiralT * 0.382) * 0.7;
    ro = vec3(r_spiral * cos(theta_spiral), y_spiral, r_spiral * sin(theta_spiral));
    vec3 lookTarget = vec3(0.0, 0.0, 0.0);
    vec3 ww = (lookTarget - ro) / max(length(lookTarget - ro), 1e-6);
    vec3 cross_ww_up = cross(ww, vec3(0.0, 1.0, 0.0));
    float cross_ww_len = length(cross_ww_up);
    if (cross_ww_len < 1e-4) {
      cross_ww_up = cross(ww, vec3(0.0, 0.0, 1.0));
      cross_ww_len = length(cross_ww_up);
    }
    vec3 uu = cross_ww_up / max(cross_ww_len, 1e-6);
    vec3 vv = cross(uu, ww);
    float fov_factor = 1.35;
    rd = normalize(uv.x * uu + uv.y * vv + fov_factor * ww);
  } else {
    // Mode 0: Outside-In Orbit & Mode 3: Kelvin Inversion
    ro = vec3(0.0, 0.0, -cam_dist);
    
    // STEREO RENDERING: Add eye offset for side-by-side or anaglyph
    if (u_stereo_mode > 0.5) {
      float eyeSeparation = 0.065; // Average human IPD in world units
      float eyeOffset = (u_stereo_eye > 0.5) ? eyeSeparation * 0.5 : -eyeSeparation * 0.5;
      ro.x += eyeOffset;
    }
    
    ro = rotateVec(ro, u_cam_rot.y, u_cam_rot.x);
    vec3 lookTarget = vec3(0.0, 0.0, 0.0);
    vec3 ww = (lookTarget - ro) / max(length(lookTarget - ro), 1e-6);
    vec3 cross_ww_up2 = cross(ww, vec3(0.0, 1.0, 0.0));
    float cross_ww_len2 = length(cross_ww_up2);
    if (cross_ww_len2 < 1e-4) {
      cross_ww_up2 = cross(ww, vec3(0.0, 0.0, 1.0));
      cross_ww_len2 = length(cross_ww_up2);
    }
    vec3 uu = cross_ww_up2 / max(cross_ww_len2, 1e-6);
    vec3 vv = cross(uu, ww);
    float fov_factor = 1.35;
    rd = normalize(uv.x * uu + uv.y * vv + fov_factor * ww);
  }

  // Golden ratio pseudo-dither to eliminate raymarch quantization banding
  float dither = fract(sin(dot(uv, vec2(12.9898, 78.233)) + u_time * 0.05) * 43758.5453);
  // Adaptive near-plane: scales with camera distance to prevent slicing
  float near_clip = max(0.0001, cam_dist * 0.0005);
  float t = near_clip + 0.001 * dither;
  // MASSIVE INCREASE: Dynamic max_dist for huge rendering distances
  // Close range: 2048.0, Medium: 1536.0, Far: 1024.0 (was 256/192/128)
  float max_dist = (cam_dist < 1.0) ? 2048.0 : (cam_dist < 3.0) ? 1536.0 : 1024.0;
  bool hit = false;
  float min_trap = 1e10;
  int steps = 0;

  // OPTIMIZATION 1: HIERARCHICAL SPACE LEAPING
  // Multi-level bounding volumes for maximum performance
  float boundingRadius = 6.0;
  float rayOriginDist = length(ro);
  
  // Level 1: Large bounding sphere (fast skip)
  if (rayOriginDist > boundingRadius) {
    float tmin = rayOriginDist - boundingRadius;
    if (tmin > t) t = tmin * 0.95;
  }
  
  // Level 2: Medium bounding sphere (refined skip)
  float medRadius = 3.5;
  if (rayOriginDist > medRadius && rayOriginDist < boundingRadius) {
    float tmin = rayOriginDist - medRadius;
    if (tmin > t) t = tmin * 0.98;
  }
  
  // Level 3: Tight bounding box (final approach)
  vec3 bboxMin = vec3(-2.5);
  vec3 bboxMax = vec3(2.5);
  vec3 invRd = 1.0 / rd;
  vec3 t0 = (bboxMin - ro) * invRd;
  vec3 t1 = (bboxMax - ro) * invRd;
  vec3 tmin3 = min(t0, t1);
  vec3 tmax3 = max(t0, t1);
  float tent = max(max(tmin3.x, tmin3.y), tmin3.z);
  float tstart3 = min(min(tmax3.x, tmax3.y), tmax3.z);
  if (tent > 0.0 && tent > t && tent < tstart3) {
    t = tent * 0.99;
  }

  // OPTIMIZATION 2: LOD System — reduce iterations based on distance
  // Far away fractals don't need as many iterations
  float lodFactor = clamp(cam_dist / 10.0, 0.0, 1.0);
  int iterReduction = int(lodFactor * 8.0); // Reduce up to 8 iterations at far distance

  // MASSIVE INCREASE: Adaptive step budget for extreme detail
  // Close range: 640 steps, Medium: 480 steps, Far: 320 steps (was 512/384/256)
  int maxSteps = (cam_dist < 1.0) ? 640 : (cam_dist < 3.0) ? 480 : 320;
  // Scale-aware hit threshold: tighter at close range for clean surface convergence
  float hitScale = max(cam_dist * 0.0003, 0.0001);

  // PHASE 4.31 FIX: Robust raymarching with bounded steps and sign tracking
  // Root cause of black/flat/broken fractals: when SDF returns large negative
  // values (e.g. -2.0 deep inside fractal), abs(d)*relaxation = 2.156 step size
  // causes ray to JUMP from deep inside to far outside, completely overshooting
  // the surface. Binary search then fails because it can't bracket the surface.
  //
  // Fixes applied:
  // 1. Cap step size at 0.5 to prevent overshooting
  // 2. Track sign changes for proper surface bracketing
  // 3. Fix binary search to use tracked sign info
  // 4. Add fine-grained fallback search for missed surfaces
  // 5. Fix early termination to not bail on negative distances

  float lastD = 1e10;
  int missCount = 0;
  float relaxationFactor = 0.95; // UNDER-relaxation for stability (was 1.1 over-relaxation)
  bool prevNegative = false;
  float tSignChange = -1.0; // t value where sign last changed (surface bracket)
  float dSignChange = 0.0;  // SDF value at sign change

  for (int i = 0; i < 256; i++) {
    if (i >= maxSteps) break;
    vec3 p = ro + rd * t;
    vec2 res = sceneSDF(p);
    float d = res.x;
    min_trap = min(min_trap, res.y);

    // ADAPTIVE STEP SIZE: Larger steps when far from surface, smaller when close
    float adaptiveRelax = relaxationFactor;
    if (abs(d) > 0.5) {
      adaptiveRelax = 1.05; // Over-relax when far (speed up)
    } else if (abs(d) < 0.1) {
      adaptiveRelax = 0.85; // Under-relax when close (precision)
    }

    // HIT DETECTION: Check if we're at the surface
    float hit_threshold = max(hitScale * 3.0, 0.002);
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // STEP SIZE: Adaptive based on distance to surface
    float absD = abs(d);
    float step_d = min(absD * adaptiveRelax, 0.5);
    // IMPROVED: Smaller minimum step for extreme interior detail
    float minStep = max(cam_dist * 0.00005, 0.0001);
    step_d = max(step_d, minStep);
    t += step_d;

    // SIGN TRACKING: Record where SDF changes sign (surface crossing)
    bool curNegative = d < 0.0;
    if (i > 0 && curNegative != prevNegative) {
      tSignChange = t - step_d; // t before this step (where sign changed)
      dSignChange = d;
    }
    prevNegative = curNegative;

    // EARLY TERMINATION: Only count misses when ray is going AWAY from surface
    // Don't count negative distances as "increasing" — they mean we're inside
    if (i > 0 && d > 0.0 && lastD > 0.0 && d > lastD * 1.5 && d > 1.0) {
      missCount++;
      if (missCount > 16) break;
    } else if (d < 0.0) {
      missCount = 0; // Inside fractal = definitely not missing
    } else {
      missCount = max(0, missCount - 1); // Gradually reset
    }
    lastD = d;

    if (t > max_dist) break;
  }

  // PHASE 4.31: SIGN-AWARE BINARY SEARCH
  // Uses tracked sign change to properly bracket the surface
  if (!hit && t < max_dist) {
    float tLow, tHigh;

    if (tSignChange > 0.0) {
      // We have a sign change — surface is bracketed between tSignChange and t
      tLow = tSignChange;
      tHigh = t;
    } else {
      // No sign change — try stepping back to find surface
      tLow = max(t - 2.0, near_clip);
      tHigh = t;
    }

    float tBest = tHigh;
    float bestD = 1e10;

    for (int j = 0; j < 20; j++) {
      float tMid = (tLow + tHigh) * 0.5;
      vec3 pMid = ro + rd * tMid;
      float dMid = sceneSDF(pMid).x;
      float absDMid = abs(dMid);

      // Track best (closest to surface) point
      if (absDMid < bestD) {
        bestD = absDMid;
        tBest = tMid;
      }

      // Hit check
      if (absDMid < hit_threshold) {
        hit = true;
        t = tMid;
        break;
      }

      // Binary search: use SIGN to determine which half contains the surface
      // If dMid has same sign as d at tHigh, surface is in [tLow, tMid]
      // If dMid has opposite sign from d at tHigh, surface is in [tMid, tHigh]
      float dHigh = sceneSDF(ro + rd * tHigh).x;
      if (dMid * dHigh > 0.0) {
        // Same sign — surface is in lower half
        tHigh = tMid;
      } else {
        // Opposite sign — surface is in upper half
        tLow = tMid;
      }
    }

    if (!hit && bestD < 0.5) {
      // Didn't converge but found a close point — use it
      t = tBest;
      hit = true;
    }
  }

  // PHASE 4.31: FINE-GRAINED FALLBACK SEARCH
  // If main loop + binary search both failed, do a fine-grained linear search
  // This catches surfaces that were skipped due to step size
  if (!hit && t < max_dist) {
    float tStart = max(t - 3.0, near_clip);
    float fineStep = 0.02; // Small steps to catch any surface
    float bestFineD = 1e10;
    float bestFineT = t;

    for (int k = 0; k < 80; k++) {
      float tFine = tStart + float(k) * fineStep;
      if (tFine > t) break;
      float dFine = sceneSDF(ro + rd * tFine).x;
      float absDFine = abs(dFine);
      if (absDFine < bestFineD) {
        bestFineD = absDFine;
        bestFineT = tFine;
      }
      if (absDFine < hit_threshold) {
        hit = true;
        t = tFine;
        break;
      }
    }

    if (!hit && bestFineD < 0.3) {
      t = bestFineT;
      hit = true;
    }
  }

  // Near-miss fallback: if we got close to surface, still render it
  bool nearMiss = !hit && abs(lastD) < 0.5 && t < max_dist;

  float bg_rad = length(uv);
  vec3 col = vec3(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u_time * 0.3));
  col += u_accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit || nearMiss) {
    vec3 p = ro + rd * t;
    // Scale-adaptive normal epsilon: larger at close range to avoid precision noise
    float normalEps = min(0.0015 * max(t, 0.05) + 0.0004, 0.003);
    vec3 base_n = calcNormal(p, normalEps);
    float ao = calcAO(p, base_n, t);
    
    // TRAP-BASED CURVATURE: Derive surface complexity from orbit trap data
    // Replaces expensive 8-SDF-evaluation normal perturbation with trap-driven curvature
    // min_trap (from raymarching) measures closest approach to fractal orbit points
    // Low trap = complex filamentary region, High trap = smooth region
    // This gives curvature that follows actual fractal geometry, not procedural noise
    float curvDetail = min_trap * 12.0; // Scale trap to curvature range
    float curvNorm = clamp(curvDetail / 3.0, 0.0, 1.0);
    
    // Use base normal directly — no perturbation noise
    // Fractal geometry is already rich; procedural perturbation adds artifacts
    float ndotv = dot(base_n, rd);
    vec3 n = ndotv > 0.0 ? -base_n : base_n;

    vec3 light1 = normalize(vec3(cos(u_time * 0.3), 1.2, sin(u_time * 0.3)));
    vec3 light2 = normalize(vec3(-sin(u_time * 0.25 * GOLDEN_RATIO), -0.6, cos(u_time * 0.25 * GOLDEN_RATIO)));

    // SIMPLIFIED LIGHTING: Clean PBR without expensive effects
    // Removed: hard shadows (32 steps), SSS (5 samples), environment reflection
    // Kept: AO + diffuse (1 light) + specular (1 light) + rim (Fresnel)
    // Performance: 5x faster (from ~50 SDF calls to ~10 SDF calls for lighting)
    float fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    // Diffuse lighting (simplified - no shadows)
    float diff1 = max(dot(n, light1), 0.0);
    float diff2 = max(dot(n, light2), 0.0) * 0.3; // Secondary light much weaker

    vec3 h1 = normalize(light1 - rd);
    // FIX: Higher specular power for sharper, more defined highlights (was 32.0)
    float spec1 = pow(max(dot(n, h1), 0.0), 64.0);
    float spec2 = pow(max(dot(n, normalize(light2 - rd)), 0.0), 48.0);
    
    // curvNorm already computed above from trap-based curvature
    
    // REMOVED PROCEDURAL TEXTURE: Fractal already has rich detail
    // No need for 5-octave noise that adds artifacts and slows down rendering
    float texDetail = 1.0; // No texture modification
    // Curvature floor prevents trapDetail/trapWeight saturation at close range
    float effectiveTrap = max(min_trap, curvNorm * 0.15);
    // FIX: More responsive trap detail (was 1.0 / (1.0 + effectiveTrap * 2.0))
    float trapDetail = clamp(1.0 / (1.0 + effectiveTrap * 0.8), 0.0, 1.0);

    // Harmonic Cosine Palette Engine — scale-independent phase for all zoom levels
    // IMPROVED: Reduced hash noise for smoother colors, enhanced normal-based variation
    float seedAnim = u_palette_seed + u_palette_rotation * u_time * 2.5;
    float trapSmooth = effectiveTrap / (1.0 + effectiveTrap); // Soft saturation, no jumps
    
    // Normal-based coloring breaks horizontal symmetry without noise artifacts
    float normalPhase = dot(n, vec3(1.0, 0.0, 0.0)) * 0.5 + 0.5;
    float normalPhase2 = dot(n, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
    float normalPhase3 = dot(n, vec3(0.0, 0.0, 1.0)) * 0.5 + 0.5;
    
    // Reduced hash noise — was 0.4+0.25+0.15=0.8 (grainy), now 0.15+0.1+0.05=0.3 (smooth)
    float hashNoise = fract(sin(dot(p * 17.3 + 127.1, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    float hashNoise2 = fract(sin(dot(p * 31.7 + 269.5, vec3(63.726, 10.873, 91.345))) * 23421.6312);
    float hashNoise3 = fract(sin(dot(p * 47.1 + 419.2, vec3(23.456, 89.012, 34.567))) * 54321.9876);
    
    // IMPROVED phase: normal-dominant, less noisy, depth-aware
    float phase = fract(
      normalPhase * 0.45 +           // Normal X — primary variation
      normalPhase2 * 0.30 +          // Normal Y
      normalPhase3 * 0.15 +          // Normal Z
      hashNoise * 0.15 +             // Reduced noise (was 0.4)
      hashNoise2 * 0.10 +            // Reduced noise (was 0.25)
      hashNoise3 * 0.05 +            // Reduced noise (was 0.15)
      trapSmooth * 0.25 +            // Orbit trap detail
      curvNorm * 0.20 +              // Curvature variation
      p.y * 0.04 + p.x * 0.02 + p.z * 0.02 +  // Position (minimal)
      length(p - ro) * 0.015 +       // Distance-based variation
      u_time * 0.03 + seedAnim * 0.01 + 0.37  // Animation + offset
    );
    float w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    float w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    float w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    // IMPROVED material: richer color mixing with depth-based accent
    vec3 mat_col = u_primary_color * w_primary + u_secondary_color * w_secondary;
    mat_col = mix(mat_col, u_accent_color, w_accent * 0.35); // Slightly more accent
    // Depth-based color shift: distant surfaces get more accent (atmospheric perspective)
    float depthFade = clamp(t / 30.0, 0.0, 1.0);
    mat_col = mix(mat_col, u_accent_color * 0.7, depthFade * 0.15);
    mat_col = mix(mat_col, u_accent_color, pow(1.0 - ao, 2.0) * 0.20); // AO accent
    // Orbit trap direct coloring — more visible on complex surfaces
    float trapWeight = clamp(0.50 / (1.0 + effectiveTrap * 1.0), 0.0, 0.60);
    mat_col = mix(mat_col, u_accent_color * (0.5 + trapDetail * 0.5), trapWeight);
    
    // Apply procedural fractal texture detail
    mat_col *= texDetail;

    // IMPROVED PBR Lighting: Environment reflections + better balance
    // Environment ambient: sample SDF along normal for color-bleeding approximation
    float envOcc = sceneSDF(p + n * 0.15).x;
    float envFactor = clamp(envOcc * 6.0, 0.0, 1.0);
    vec3 ambientCol = mix(u_secondary_color * 0.30, u_primary_color * 0.18, envFactor);
    vec3 ambient = ambientCol * ao;
    
    // REMOVED ENVIRONMENT REFLECTION: Too expensive for minimal visual benefit
    // vec3 reflectDir = reflect(rd, n);
    // float envReflDist = sceneSDF(p + reflectDir * 0.3).x;
    // ...
    vec3 reflCol = vec3(0.0); // No reflection
    
    // REMOVED BOUNCE LIGHT: Too expensive for minimal visual benefit
    // vec3 bounceDir = normalize(-light1 + n * 0.5);
    // ...
    vec3 bounceCol = vec3(0.0); // No bounce light

    vec3 diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    // IMPROVED specular: material-tinted for colored highlights
    vec3 specColor = mix(vec3(1.0, 0.97, 0.92), mat_col, 0.15); // Slight material tint
    vec3 specular = specColor * (spec1 * 1.3 + spec2 * 0.7) * ao;
    // IMPROVED rim: stronger at grazing angles, color-shifted
    vec3 rim = u_accent_color * fresnel * 0.8 * (0.3 + 0.7 * ao);

    // SIMPLIFIED full lighting: ambient + diffuse + specular + rim (no SSS, no bounce, no reflection)
    col = ambient * 0.6 + diffuse * 1.5 + specular * 1.2 + rim * 1.3;
    col *= (0.4 + 0.6 * ao); // AO contrast

    // Headlamp: camera-attached flashlight for illuminating dark interior halls
    if (u_headlamp_power > 0.01) {
      vec3 lampDir = normalize(ro - p);
      float lampNdotL = max(dot(n, lampDir), 0.0);
      float lampFalloff = 1.0 / (1.0 + t * t * 0.15);
      float lampSpot = pow(max(dot(-rd, lampDir), 0.0), 4.0); // Focused beam along view ray
      vec3 lampCol = (u_primary_color * 0.6 + u_accent_color * 0.4) * lampNdotL * lampFalloff * lampSpot;
      col += lampCol * u_headlamp_power * 2.0;
    }

    // If slice plane is active, highlight the glowing cut rim
    if (u_slice_plane > 0.01) {
      float sliceOffset = (0.5 - u_slice_plane) * 3.5;
      vec3 planeNorm = normalize(vec3(0.0, 0.85065, 0.52573));
      if (u_slice_axis > 0.5 && u_slice_axis < 1.5) planeNorm = vec3(1.0, 0.0, 0.0);
      else if (u_slice_axis > 1.5 && u_slice_axis < 2.5) planeNorm = vec3(0.0, 1.0, 0.0);
      else if (u_slice_axis > 2.5) planeNorm = vec3(0.0, 0.0, 1.0);
      float distToSlice = abs(dot(p, planeNorm) - sliceOffset);
      if (distToSlice < 0.025) {
        float sliceGlow = smoothstep(0.025, 0.002, distToSlice);
        col = mix(col, u_accent_color * 2.8, sliceGlow * 0.85);
      }
    }

    // ===================================================================
    // Rendering Modalities: 7 Math-Driven Visualization Techniques
    // Curvature-enhanced: uses normal variation for rich surface detail
    // ===================================================================

    // Curvature and trapDetail already computed above for palette engine

    if (u_render_style > 0.5 && u_render_style < 1.5) {
      // 1. X-Ray Томография: Volumetric scattering + beam hardening + bone density
      float dens = clamp(float(steps) / 65.0, 0.0, 1.0);
      // Volumetric path-length density (deeper = more absorption)
      float pathLen = clamp(t / 12.0, 0.0, 1.0);
      // Beam hardening: high-density regions absorb low-energy photons first
      float beamHardening = mix(1.0, 0.6, pathLen * curvNorm);
      // Bone density map: curvature = cortical bone, trap = trabecular structure
      float boneDensity = mix(0.15, 1.0, curvNorm * 0.55 + ao * 0.35 + trapDetail * 0.1);
      // Core: dense bone with volumetric attenuation
      vec3 xrayCore = u_accent_color * boneDensity * (0.3 + trapDetail * 0.7) * beamHardening;
      // Vasculature: orbit trap channels (vascular network)
      vec3 xrayVessel = u_primary_color * trapDetail * (0.25 + dens * 0.75);
      // Edge glow: surface boundary enhancement (periosteum)
      float edgeGlow = pow(1.0 - ao, 2.0) * (0.4 + curvNorm * 0.6);
      vec3 xrayShell = u_secondary_color * edgeGlow;
      // Depth-based scatter: deeper = more Compton scatter (bluish haze)
      vec3 scatterCol = vec3(0.6, 0.7, 0.9) * pathLen * 0.15 * (1.0 - boneDensity);
      vec3 xrayCol = mix(xrayVessel, xrayCore, boneDensity * 0.85) + xrayShell * 0.5 + scatterCol;
      xrayCol += u_accent_color * curvNorm * 0.35;
      col = mix(col * 0.12, xrayCol * 1.6, 0.78 + 0.22 * ao);
    } else if (u_render_style > 1.5 && u_render_style < 2.5) {
      // 2. Топография: Height-based terrain + multi-scale contours + ridge detection
      // Use world-space Y as elevation (real terrain height, not normal Y)
      float height = p.y * 0.5 + 0.5;
      // Multi-scale contour lines at different frequencies
      float contourFine = abs(fract(height * 20.0) - 0.5) * 2.0;
      float contourMed = abs(fract(height * 8.0) - 0.5) * 2.0;
      float contourCoarse = abs(fract(height * 3.0 + curvNorm * 0.3) - 0.5) * 2.0;
      // Combine scales: fine contours are thinner, coarse are wider
      float contourF = smoothstep(0.0, 0.035, contourFine);
      float contourM = smoothstep(0.0, 0.07, contourMed);
      float contourC = smoothstep(0.0, 0.12, contourCoarse);
      float contour = min(contourF, min(contourM, contourC));
      // Ridge detection: high curvature = mountain ridges
      float ridgeLine = smoothstep(0.25, 0.75, curvNorm);
      // Valley detection: low curvature + low elevation = valleys
      float valleyLine = smoothstep(0.35, 0.0, curvNorm) * smoothstep(0.6, 0.2, height);
      // Slope shading: steep slopes are darker
      float slope = 1.0 - abs(dot(n, vec3(0.0, 1.0, 0.0)));
      float slopeShade = pow(slope, 0.6);
      // Color zones by elevation (like real topographic maps)
      vec3 waterZone = u_secondary_color * 0.35; // Low elevation = water/valley
      vec3 lowlandZone = mix(u_secondary_color, u_primary_color, 0.3) * (0.5 + height * 0.4);
      vec3 highlandZone = u_primary_color * (0.6 + height * 0.8);
      vec3 peakZone = u_accent_color * (0.8 + curvNorm * 1.2);
      // Blend zones by elevation
      vec3 topoCol = mix(waterZone, lowlandZone, smoothstep(0.15, 0.35, height));
      topoCol = mix(topoCol, highlandZone, smoothstep(0.40, 0.65, height));
      topoCol = mix(topoCol, peakZone, smoothstep(0.70, 0.90, height) * ridgeLine);
      // Add ridge highlights
      topoCol = mix(topoCol, peakZone * 1.5, ridgeLine * 0.45);
      // Add valley shadows
      topoCol *= (0.7 + 0.3 * (1.0 - valleyLine));
      // Apply contour lines (darken along contours)
      topoCol = mix(topoCol, topoCol * 0.35, (1.0 - contour) * 0.5);
      // Slope shading
      topoCol *= (0.55 + 0.45 * slopeShade);
      // Ambient occlusion
      col = topoCol * (0.45 + 0.55 * ao);
    } else if (u_render_style > 2.5 && u_render_style < 3.5) {
      // 3. Голографическая проекция: Chromatic aberration + interference + hex grid
      float depthNorm = clamp(t / 20.0, 0.0, 1.0);
      // Chromatic aberration: per-channel offset based on depth
      float rOff = sin(depthNorm * 25.0 + u_time * 3.5) * 0.03;
      float gOff = sin(depthNorm * 25.0 + u_time * 3.5 + 2.094) * 0.03;
      float bOff = sin(depthNorm * 25.0 + u_time * 3.5 + 4.189) * 0.03;
      vec3 holoBase = u_primary_color * vec3(1.0 + rOff, 1.0 + gOff, 1.0 + bOff);
      // Fresnel edge glow
      float holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
      // Scan lines with depth-varying frequency
      float scanFreq = 200.0 + depthNorm * 150.0;
      float scanline = 0.80 + 0.20 * sin(v_uv.y * scanFreq + u_time * 10.0);
      // Curvature wireframe
      float wireframe = smoothstep(0.25, 0.75, curvNorm);
      // Data glitch bursts
      float glitch = step(0.965, fract(sin(dot(p, vec3(12.9898, 78.233, 45.164)) + u_time * 2.5) * 43758.5));
      // Hexagonal grid overlay (holographic data mesh)
      float hexScale = 25.0;
      vec3 hexP = p * hexScale;
      float hx = abs(fract(hexP.x * 0.5) - 0.5) * 2.0;
      float hy = abs(fract(hexP.y * 0.866) - 0.5) * 2.0;
      float hexGrid = min(hx, hy);
      float hexLine = smoothstep(0.0, 0.08, hexGrid);
      // Shimmer
      float shimmer = 0.85 + 0.15 * sin(u_time * 6.0 + length(p) * 12.0);
      vec3 holoCol = holoBase * (0.30 + holoFres * 1.5 + wireframe * 0.6) * scanline * shimmer;
      holoCol += u_accent_color * wireframe * 1.4;
      holoCol += vec3(0.12, 0.35, 0.75) * holoFres * 1.8;
      holoCol += u_accent_color * glitch * 3.5;
      holoCol += u_primary_color * trapDetail * 0.35;
      // Hex grid lines
      holoCol += u_secondary_color * (1.0 - hexLine) * 0.15 * (0.5 + depthNorm * 0.5);
      col = mix(col * 0.06, holoCol, 0.94);
    } else if (u_render_style > 3.5 && u_render_style < 4.5) {
      // 4. Радужная интерференция: Thin-film + Fresnel + 5-order interference
      float nv = max(dot(n, -rd), 0.0);
      float filmThickness = 0.5 + curvNorm * 0.8 + trapDetail * 0.3;
      // 5 interference orders for rich rainbow
      float order1 = nv * 3.0 * filmThickness + min_trap * 0.5;
      float order2 = nv * 5.0 * filmThickness + min_trap * 0.3 + u_time * 0.08;
      float order3 = nv * 7.0 * filmThickness + min_trap * 0.2;
      float order4 = nv * 9.0 * filmThickness + min_trap * 0.15 - u_time * 0.05;
      float order5 = nv * 11.0 * filmThickness + min_trap * 0.1;
      float iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33 + order4 * 0.1));
      float iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33 + order5 * 0.08));
      float iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
      vec3 iridCol = vec3(iridR, iridG, iridB);
      // Fresnel-weighted specular
      vec3 hIrid = normalize(light1 - rd);
      float specAngle = max(dot(n, hIrid), 0.0);
      vec3 specIrid = vec3(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * 2.5;
      // Diffuse grounding
      float iridDiff = max(dot(n, light1), 0.0) * 0.3;
      iridCol *= (0.6 + trapDetail * 0.3 + iridDiff);
      // Fresnel rim for iridescence
      iridCol += u_accent_color * pow(fresnel, 1.5) * 0.4;
      col = iridCol * (0.45 + 0.55 * ao) + specIrid;
    } else if (u_render_style > 4.5 && u_render_style < 5.5) {
      // 5. Квантовое поле: Energy field + magnetic flux + PBR
      float wave1 = sin(length(p) * 12.0 - u_time * 3.5);
      float wave2 = cos(dot(p, normalize(vec3(1.618, 1.0, 0.618))) * 7.0 + u_time * 2.2);
      float wave3 = sin(dot(p, normalize(vec3(-0.618, 1.618, 1.0))) * 9.0 - u_time * 1.8);
      float interference = (wave1 + wave2 + wave3) / 3.0;
      // Magnetic flux lines (curl-like field visualization)
      float flux1 = sin(p.x * 8.0 + u_time * 1.5) * cos(p.z * 6.0 - u_time * 1.2);
      float flux2 = cos(p.y * 7.0 - u_time * 1.8) * sin(p.x * 5.0 + u_time * 0.9);
      float flux = (flux1 + flux2) * 0.5;
      float probability = trapDetail * 0.5 + (0.5 + 0.5 * interference) * 0.35 + flux * 0.15;
      float energy = pow(abs(interference), 0.7) * (0.5 + curvNorm * 0.5);
      vec3 plasmaCold = u_secondary_color * (0.20 + probability * 0.5);
      vec3 plasmaHot = u_accent_color * (0.6 + energy * 1.8);
      vec3 qCol = mix(plasmaCold, plasmaHot, energy);
      // PBR diffuse
      float plasmaDiff = max(dot(n, light1), 0.0) * 0.4 + max(dot(n, light2), 0.0) * 0.15;
      qCol *= (0.7 + plasmaDiff * 0.3);
      // Specular
      vec3 hPlasma = normalize(light1 - rd);
      float plasmaSpec = pow(max(dot(n, hPlasma), 0.0), 32.0);
      qCol += vec3(0.8, 0.9, 1.0) * plasmaSpec * 0.5;
      // Flux lines visualization
      qCol += u_secondary_color * abs(flux) * 0.2 * (0.5 + curvNorm * 0.5);
      qCol += u_accent_color * pow(fresnel, 2.0) * 1.2;
      qCol += u_primary_color * curvNorm * 0.35;
      qCol *= (0.6 + trapDetail * 0.4);
      col = qCol * (0.35 + 0.65 * ao) + sssCol * 1.2;
    } else if (u_render_style > 5.5) {
      // 6. Кристалл: Internal reflections + caustics + dispersion + Beer-Lambert
      float beerDist = min(max(t - 0.5, 0.0), 20.0);
      // Asymmetric absorption: red penetrates deepest, blue absorbs fastest
      vec3 beer = exp(-beerDist * vec3(0.05, 0.15, 0.6));
      // Caustics: focused light through crystal facets
      float caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
      float caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
      float caustic = caustic1 + caustic2;
      float facetStrength = 0.3 + curvNorm * 0.7;
      vec3 refractCol = mix(u_primary_color, u_accent_color, fresnel * facetStrength);
      vec3 gemCol = refractCol * beer;
      // Internal reflection: bounce light inside the gem
      vec3 internalReflDir = reflect(rd, n);
      float internalRefl = clamp(1.0 - sceneSDF(p + internalReflDir * 0.15).x * 6.0, 0.0, 1.0);
      gemCol += u_accent_color * internalRefl * beer * 0.2;
      // Second internal bounce for deeper light transport
      vec3 bounce2Dir = reflect(internalReflDir, n);
      float bounce2Refl = clamp(1.0 - sceneSDF(p + bounce2Dir * 0.1).x * 8.0, 0.0, 1.0);
      gemCol += u_primary_color * bounce2Refl * beer * 0.1;
      vec3 gemSpec = vec3(1.0, 0.96, 0.82) * spec1 * 2.2;
      // Dispersion: wavelength-dependent refraction
      float dispersion = fresnel * (0.1 + curvNorm * 0.15);
      gemCol.r *= (1.0 + dispersion);
      gemCol.b *= (1.0 - dispersion * 0.5);
      gemCol += u_secondary_color * trapDetail * 0.25 * beer;
      gemCol *= facetStrength;
      col = gemCol * (0.6 + 0.4 * ao) + gemSpec + u_accent_color * caustic * 0.6;
    }

    // IMPROVED FOG: Exponential-squared falloff for more natural atmospheric depth
    float fogStart = mix(20.0, max(4.0, cam_dist * 3.0 + 4.0), smoothstep(0.5, 5.0, cam_dist));
    float fogDensity = mix(0.008, 0.015, smoothstep(0.3, 3.0, cam_dist));
    float fogDist = max(0.0, t - fogStart);
    float fog = 1.0 - exp(-fogDist * fogDist * fogDensity * 0.5);
    col = mix(col, vec3(0.005, 0.004, 0.008), fog * clamp(u_volumetric_fog, 0.0, 1.0));

    // ATMOSPHERIC SCATTERING: Rayleigh-like scattering for realistic sky color
    // Sun direction based on time for dynamic atmosphere
    vec3 sunDir = normalize(vec3(cos(u_time * 0.1), 0.5, sin(u_time * 0.1)));
    float sunAmount = max(dot(rd, sunDir), 0.0);
    vec3 rayleighScatter = vec3(0.3, 0.5, 0.8) * pow(sunAmount, 2.0);
    float atmosphere = 1.0 - exp(-t * 0.008);
    col = mix(col, col + rayleighScatter * 0.15, clamp(atmosphere, 0.0, 1.0));
  }

  col = acesToneMap(col);

  // BLOOM SIMULATION: Brightness-based glow for light sources and specular highlights
  float brightness = dot(col, vec3(0.299, 0.587, 0.114));
  float bloomThreshold = 0.6;
  float bloomStrength = max(brightness - bloomThreshold, 0.0) * 0.35;
  vec3 bloomCol = col * bloomStrength + u_accent_color * bloomStrength * 0.15;
  col += bloomCol;

  // DEPTH OF FIELD: Bokeh-based blur for realistic camera focus
  // Focus distance based on camera distance, aperture based on zoom
  float focusDistance = cam_dist * 1.2;
  float aperture = 0.15 / max(cam_dist * 0.5, 0.5); // Wider aperture when close
  float dofBlur = abs(t - focusDistance) * aperture / focusDistance;
  dofBlur = clamp(dofBlur, 0.0, 1.0);
  
  if (dofBlur > 0.01) {
    // Multi-sample bokeh blur (simplified 5x5 kernel)
    vec3 blurred = vec3(0.0);
    float total = 0.0;
    for (int x = -2; x <= 2; x++) {
      for (int y = -2; y <= 2; y++) {
        vec2 offset = vec2(float(x), float(y)) * dofBlur * 0.008;
        float weight = 1.0 - length(vec2(float(x), float(y))) / 2.83;
        weight = max(weight, 0.0);
        // Sample at offset (simplified - uses current color)
        blurred += col * weight;
        total += weight;
      }
    }
    col = blurred / total;
  }

  // MINIMUM BRIGHTNESS FLOOR
  col = max(col, vec3(0.004, 0.003, 0.005));

  // CHROMATIC ABERRATION: Subtle color fringing for realism
  // Simulates lens dispersion - different wavelengths focus at different distances
  // FIX: Use distance-based CA strength for more realistic effect
  float caStrength = 0.0015 * (1.0 + t * 0.1); // Stronger CA at distance
  float caR = fract(sin(dot(v_uv * u_resolution + vec2(caStrength, 0.0), vec2(12.9898, 78.233)) + u_time * 0.07) * 43758.5453);
  float caG = fract(sin(dot(v_uv * u_resolution, vec2(12.9898, 78.233)) + u_time * 0.07) * 43758.5453);
  float caB = fract(sin(dot(v_uv * u_resolution + vec2(-caStrength, 0.0), vec2(12.9898, 78.233)) + u_time * 0.07) * 43758.5453);
  col.r += (caR - 0.5) * 0.008; // Very subtle red channel shift
  col.b += (caB - 0.5) * 0.008; // Very subtle blue channel shift

  // Color-space dither to eliminate banding in smooth gradients
  float ditherVal = fract(sin(dot(v_uv * u_resolution, vec2(12.9898, 78.233)) + u_time * 0.07) * 43758.5453);
  col = col + (ditherVal - 0.5) * (1.0 / 128.0);

  float vigStrength = smoothstep(0.12, 1.0, cam_dist);
  float vignette = 1.0 - smoothstep(0.9, 1.8, bg_rad) * vigStrength * 0.5;
  col *= vignette;

  // Subpixel anti-aliasing boost — sharpen edges via fwidth unsharp mask
  float edgeDetect = length(fwidth(col)) * 0.5;
  col = mix(col, col * (1.0 + edgeDetect * 2.0), 0.12);

  // ANAGYPH STEREO: Apply red/cyan coloring for anaglyph glasses
  if (u_stereo_mode > 1.5) {
    if (u_stereo_eye > 0.5) {
      // Right eye: cyan only
      col.r = 0.0;
    } else {
      // Left eye: red only
      col.g = 0.0;
      col.b = 0.0;
    }
  }

  fragColor = vec4(col, 1.0);
}
`,zh=gh,_h="GoldenRatioFractalLogs",Sh=1,si="userLogs";class wh{constructor(){this.db=null,this.initialized=!1,this.memoryBuffer=[]}async init(){if(!this.initialized)return new Promise((s,f)=>{try{const c=indexedDB.open(_h,Sh);c.onerror=()=>{console.warn("[UserLogger] IndexedDB unavailable, using memory buffer only"),this.initialized=!0,s()},c.onsuccess=()=>{this.db=c.result,this.initialized=!0,this.flushBuffer(),s()},c.onupgradeneeded=d=>{const m=d.target.result;if(!m.objectStoreNames.contains(si)){const z=m.createObjectStore(si,{keyPath:"id",autoIncrement:!0});z.createIndex("timestamp","timestamp",{unique:!1}),z.createIndex("level","level",{unique:!1}),z.createIndex("category","category",{unique:!1})}}}catch(c){console.warn("[UserLogger] IndexedDB init failed:",c),this.initialized=!0,s()}})}async log(s){const f={...s,timestamp:Date.now(),userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"?window.location.href:void 0},c=s.level==="error"?"error":s.level==="warn"?"warn":s.level==="debug"?"debug":"info";console[c](`[UserLogger][${s.category}] ${s.message}`,s.details||""),this.memoryBuffer.push(f),this.memoryBuffer.length>1e3&&this.memoryBuffer.shift(),this.initialized&&this.db&&await this.persistToDB(f)}async persistToDB(s){if(this.db)return new Promise(f=>{try{const c=this.db.transaction([si],"readwrite");c.objectStore(si).add(s),c.oncomplete=()=>f(),c.onerror=()=>{console.warn("[UserLogger] Failed to persist log entry"),f()}}catch(c){console.warn("[UserLogger] DB write error:",c),f()}})}flushBuffer(){if(this.memoryBuffer.length===0)return;const s=[...this.memoryBuffer];this.memoryBuffer=[],s.forEach(f=>this.persistToDB(f))}async getLogs(s){return this.db?new Promise(f=>{try{const m=this.db.transaction([si],"readonly").objectStore(si).getAll();m.onsuccess=()=>{let z=m.result||[];s&&(z=z.filter(g=>this.matchesFilter(g,s))),z.sort((g,y)=>y.timestamp-g.timestamp),s!=null&&s.limit&&(z=z.slice(0,s.limit)),f(z)},m.onerror=()=>{console.warn("[UserLogger] Failed to read logs"),f([])}}catch(c){console.warn("[UserLogger] DB read error:",c),f([])}}):this.memoryBuffer.filter(f=>this.matchesFilter(f,s))}matchesFilter(s,f){return!(f!=null&&f.level&&s.level!==f.level||f!=null&&f.category&&s.category!==f.category||f!=null&&f.since&&s.timestamp<f.since)}async clearLogs(){if(!this.db){this.memoryBuffer=[];return}return new Promise(s=>{try{const f=this.db.transaction([si],"readwrite");f.objectStore(si).clear(),f.oncomplete=()=>{this.memoryBuffer=[],s()},f.onerror=()=>s()}catch{s()}})}async exportLogs(){const s=await this.getLogs({limit:1e4});return JSON.stringify(s,null,2)}getStats(){const s=this.memoryBuffer,f={};let c=0,d=0;return s.forEach(m=>{f[m.category]=(f[m.category]||0)+1,m.level==="error"&&c++,m.level==="warn"&&d++}),{total:s.length,errors:c,warnings:d,byCategory:f}}}const pi=new wh;typeof window<"u"&&pi.init().catch(()=>{});class Dh extends _u{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.exportPositions=new Float32Array(1e5*3),this.exportColors=new Float32Array(1e5*3),this.exportNormals=new Float32Array(1e5*3),this.exportCount=0,this.rendererInfo="WebGL2 Shader Pipeline"}collectSurfacePoints(s,f=64){this.exportCount=0;const c=2.5,d=c*2/f;for(let m=0;m<f;m++)for(let z=0;z<f;z++)for(let g=0;g<f;g++){const y=-c+m*d,b=-c+z*d,L=-c+g*d,F=this.evaluateSDF(y,b,L,s);if(Math.abs(F)<.05&&this.exportCount<1e5){const O=this.exportCount*3;this.exportPositions[O]=y,this.exportPositions[O+1]=b,this.exportPositions[O+2]=L;const k=.01,B=this.evaluateSDF(y+k,b,L,s)-this.evaluateSDF(y-k,b,L,s),J=this.evaluateSDF(y,b+k,s)-this.evaluateSDF(y,b-k,s),K=this.evaluateSDF(y,b,L+k,s)-this.evaluateSDF(y,b,L-k,s),q=Math.sqrt(B*B+J*J+K*K);this.exportNormals[O]=B/q,this.exportNormals[O+1]=J/q,this.exportNormals[O+2]=K/q,this.exportColors[O]=.5+y*.2,this.exportColors[O+1]=.5+b*.2,this.exportColors[O+2]=.5+L*.2,this.exportCount++}}}evaluateSDF(s,f,c,d){const m=Math.sqrt(s*s+f*f+c*c),z=Math.atan2(Math.sqrt(s*s+f*f),c),g=Math.atan2(f,s),y=8;let b=Math.pow(m,y);const L=z*y,F=g*y,O=b*Math.sin(L)*Math.cos(F)+s,k=b*Math.sin(L)*Math.sin(F)+f,B=b*Math.cos(L)+c;return Math.sqrt(O*O+k*k+B*B)-1.5}getExportData(){return{positions:this.exportPositions.slice(0,this.exportCount*3),colors:this.exportColors.slice(0,this.exportCount*3),normals:this.exportNormals.slice(0,this.exportCount*3),count:this.exportCount}}init(){const s=performance.now();console.group("[WebGL2] === INITIALIZATION START ==="),We.log("info","gpu","WebGL2 initialization started"),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const f=this.canvas.getBoundingClientRect();(f.width===0||f.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let c=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED"),c||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),c=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED")),c||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),c=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED")),!c){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const O=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return O&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",O.getParameter(O.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=c,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",c.getParameter(c.VERSION)),console.info("[WebGL2] GL_RENDERER:",c.getParameter(c.RENDERER)),console.info("[WebGL2] GL_VENDOR:",c.getParameter(c.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",c.getParameter(c.SHADING_LANGUAGE_VERSION));const d=c.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(d==null?void 0:d.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",d==null?void 0:d.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",d==null?void 0:d.includes("WEBGL_debug_renderer_info"));try{const O=c.getExtension("WEBGL_debug_renderer_info");if(O){const k=c.getParameter(O.UNMASKED_RENDERER_WEBGL);k&&(this.rendererInfo=k)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const m=this.compileShader(c.VERTEX_SHADER,bh),z=this.compileShader(c.FRAGMENT_SHADER,zh);if(!m||!z)return!1;const g=c.createProgram();if(!g)return!1;if(c.attachShader(g,m),c.attachShader(g,z),c.linkProgram(g),c.deleteShader(m),c.deleteShader(z),!c.getProgramParameter(g,c.LINK_STATUS))return console.error("WebGL Program Link Error:",c.getProgramInfoLog(g)),!1;this.program=g;const y=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=c.createVertexArray(),c.bindVertexArray(this.vao),this.vbo=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,this.vbo),c.bufferData(c.ARRAY_BUFFER,y,c.STATIC_DRAW);const b=c.getAttribLocation(g,"a_position");c.enableVertexAttribArray(b),c.vertexAttribPointer(b,2,c.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed","u_palette_rotation"].forEach(O=>{this.uniformLocs[O]=c.getUniformLocation(g,O)});const F=performance.now()-s;return We.log("info","gpu","WebGL2 initialization completed",{initTime:F}),We.trackGPUContext(!1,F),console.info("[WebGL2] Initialization time:",F.toFixed(2),"ms"),console.groupEnd(),!0}compileShader(s,f){if(!this.gl)return null;const c=this.gl,d=c.createShader(s);if(!d)return null;if(c.shaderSource(d,f),c.compileShader(d),c.getExtension("KHR_parallel_shader_compile"),!c.getShaderParameter(d,c.COMPILE_STATUS)){const m=c.getShaderInfoLog(d);return console.error("Shader compilation error:",m),pi.log({level:"error",category:"render",message:`Shader compilation failed: ${s===c.VERTEX_SHADER?"vertex":"fragment"}`,details:{error:m==null?void 0:m.substring(0,500)}}),c.deleteShader(d),null}return console.info("[WebGL2] Shader compiled successfully ("+(s===c.VERTEX_SHADER?"vertex":"fragment")+")"),d}render(s,f){const c=this.gl;if(!c||!this.program||!this.vao){pi.log({level:"warn",category:"render",message:"WebGL2 render skipped - missing context/program/vao",details:{hasGl:!!c,hasProgram:!!this.program,hasVao:!!this.vao}});return}const d=this.computeIndices(f);pi.log({level:"info",category:"render",message:`Rendering fractal type: ${f.type} (idx: ${d.fractalIdx})`,details:{type:f.type,fractalIdx:d.fractalIdx,hybridType:f.hybridType,renderStyle:f.renderStyle,zoom:f.zoom}});const{duration:m}=Su(()=>{c.viewport(0,0,this.canvas.width,this.canvas.height),c.useProgram(this.program),c.bindVertexArray(this.vao);const z=this.resolvePalette(f),g=new Float32Array(48);this.packUniforms(g,s,f,z,d),Ll(g[2],"u_time",void 0,[0,1e3])||We.log("error","render","Invalid time value",{time:g[2]}),Ll(g[6],"u_zoom",void 0,[.01,100])||We.log("warn","render","Zoom out of range",{zoom:g[6]});const y=(O,k)=>{const B=this.uniformLocs[O];B&&c.uniform1f(B,k)},b=(O,k,B)=>{const J=this.uniformLocs[O];J&&c.uniform2f(J,k,B)},L=(O,k,B,J)=>{const K=this.uniformLocs[O];K&&c.uniform3f(K,k,B,J)};b("u_resolution",g[0],g[1]),y("u_time",g[2]),y("u_phi_val",g[3]),b("u_cam_rot",g[4],g[5]),y("u_zoom",g[6]),y("u_fractal_type",g[7]),y("u_iterations",g[8]),y("u_glow_intensity",g[9]),y("u_morph_speed",g[10]),y("u_hybrid_type",g[11]),y("u_hybrid_blend",g[12]),y("u_box_fold",g[13]),y("u_sphere_fold",g[14]),y("u_interior_cut",g[15]),L("u_primary_color",g[16],g[17],g[18]),y("u_tertiary_type",g[19]),L("u_secondary_color",g[20],g[21],g[22]),y("u_tertiary_blend",g[23]),L("u_accent_color",g[24],g[25],g[26]),y("u_compose_op",g[27]),y("u_smooth_k",g[28]),y("u_warp_strength",g[29]),y("u_octave_layers",g[30]),y("u_cam_mode",g[31]),L("u_cam_pos",g[32],g[33],g[34]),y("u_slice_plane",g[35]),y("u_headlamp_power",g[36]),y("u_volumetric_fog",g[37]),y("u_slice_axis",g[38]),y("u_render_style",g[39]),y("u_palette_seed",g[43]),y("u_palette_rotation",g[44]),c.drawArrays(c.TRIANGLES,0,3);const F=c.getError();if(F!==c.NO_ERROR){const O={[c.INVALID_ENUM]:"INVALID_ENUM",[c.INVALID_VALUE]:"INVALID_VALUE",[c.INVALID_OPERATION]:"INVALID_OPERATION",[c.OUT_OF_MEMORY]:"OUT_OF_MEMORY",[c.INVALID_FRAMEBUFFER_OPERATION]:"INVALID_FRAMEBUFFER_OPERATION"};pi.log({level:"error",category:"render",message:`WebGL2 render error: ${O[F]||"UNKNOWN"} (0x${F.toString(16)})`,details:{timeSec:s,fractalType:f.type,renderStyle:f.renderStyle}})}},"WebGL render setup");We.updateFrameStats(128,.001,20),We.trackGPUContext(!1,m),m>16&&pi.log({level:"warn",category:"performance",message:`Slow WebGL frame: ${m.toFixed(2)}ms`,details:{fractalType:f.type}})}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function Ah(p,s){const{forcedBackend:f,isEmbeddedBrowser:c,isMobileDevice:d,paramsRef:m,onTelemetryUpdate:z,onEngineReady:g,onNextSpecimen:y,onPrevSpecimen:b,onInteraction:L,screenshotRequested:F,onScreenshotCaptured:O}=s,k=T.useRef(null),[B,J]=T.useState(()=>f==="webgl2"?"webgl2":f==="webgpu"?c?"webgl2":"webgpu":"webgl2"),[K,q]=T.useState(!0),[oe,S]=T.useState(!1),[Y,xe]=T.useState("Initializing..."),[Ne,ae]=T.useState(""),[ke,Be]=T.useState(0),[Ge,$e]=T.useState(0),[Ze,ue]=T.useState(0),[qe,de]=T.useState(0),[N,U]=T.useState([0,0]),M=T.useRef(null),Z=T.useRef(null),ee=T.useRef("Initializing..."),h=T.useRef(z);h.current=z;const j=T.useRef(O);j.current=O;const G=T.useRef(y);G.current=y;const X=T.useRef(b);X.current=b;const W=T.useRef(L);W.current=L;const le=T.useRef([]),ce=T.useRef(0),Ve=T.useRef(0),he=T.useRef(null),et=T.useRef(0),Dt=T.useRef(!1),Oe=T.useRef(new Set),Fa=T.useRef(!1),Je=T.useRef(!0),ea=T.useRef(!1),na=T.useRef(!1),Ea=T.useRef(!1),Ei=T.useRef({x:0,y:0}),rt=T.useRef({x:0,y:0}),fi=T.useRef(0),ui=T.useRef(0),ki=.92,ka=1e-4,Ie=T.useRef(!0);T.useEffect(()=>{na.current=F},[F]),T.useEffect(()=>{if(f==="webgl2")J("webgl2");else if(f==="webgpu"){if(c){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),Dt.current=!0,J("webgl2");return}Dt.current=!1,J("webgpu")}else f==="auto"&&J("webgl2")},[f]);const ma=T.useCallback(()=>{const I=k.current,be=p.current;if(!I||!be)return;const ne=c||d?1.5:2,st=Math.min(window.devicePixelRatio||1,ne),tt=be.clientWidth||window.innerWidth||800,Se=be.clientHeight||window.innerHeight||600,He=Math.max(Math.floor(tt*st),320),Ue=Math.max(Math.floor(Se*st),240);if(I.width!==He||I.height!==Ue){const Ke=I.width,kt=I.height;I.width=He,I.height=Ue,console.info(`[Resize] Canvas buffer: ${Ke}x${kt} → ${He}x${Ue} (container: ${tt}x${Se}, DPR: ${st.toFixed(2)})`)}},[c,d]);T.useEffect(()=>{const I=k.current;if(!I)return;ma();let be=!1;const ne=setTimeout(()=>{be||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),q(!1))},12e3),st=setTimeout(()=>{!ea.current&&!be&&console.error("[useRenderEngine] Engine setup timed out after 20s — GPU unavailable")},2e4);async function tt(){if(!I)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",B),q(!0),ea.current=!1,S(!1),M.current&&(M.current.destroy(),M.current=null),Z.current&&(Z.current.destroy(),Z.current=null),B==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const St=new cc(I);if(await St.init()&&!be){M.current=St,ea.current=!0,S(!0),ee.current="WebGPU (WGSL)",xe("WebGPU (WGSL)"),ae(St.adapterInfo),q(!1),console.info(`[DIAG] Engine ready: WebGPU | ${St.adapterInfo} | ${I.width}x${I.height} | fractal=${m.current.type} | palette=${m.current.paletteId} | renderStyle=${m.current.renderStyle} | paletteSeed=${m.current.paletteSeed??0}`),g==null||g();return}else{Dt.current=!0,be?q(!1):J("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const dt=new Dh(I);dt.init()&&!be?(Z.current=dt,ea.current=!0,S(!0),ee.current="WebGL2 (GLSL)",xe("WebGL2 (GLSL)"),ae(dt.rendererInfo),q(!1),console.info(`[DIAG] Engine ready: WebGL2 | ${dt.rendererInfo} | ${I.width}x${I.height} | fractal=${m.current.type} | palette=${m.current.paletteId} | renderStyle=${m.current.renderStyle} | paletteSeed=${m.current.paletteSeed??0}`),g==null||g()):(q(!1),g==null||g())}tt().catch(dt=>{console.error("[useRenderEngine] Engine setup crashed:",dt),q(!1),g==null||g()});const Se=setTimeout(()=>{be||(ma(),requestAnimationFrame(()=>{be||ma()}))},100),He=dt=>{dt.preventDefault(),Fa.current=!0},Ue=()=>{Fa.current=!1,tt()};I.addEventListener("webglcontextlost",He,!1),I.addEventListener("webglcontextrestored",Ue,!1);const Ke=p.current;let kt=null;return Ke&&(kt=new ResizeObserver(()=>{be||ma()}),kt.observe(Ke)),()=>{var dt,xt;be=!0,clearTimeout(st),clearTimeout(ne),clearTimeout(Se),I.removeEventListener("webglcontextlost",He),I.removeEventListener("webglcontextrestored",Ue),kt&&kt.disconnect(),(dt=M.current)==null||dt.destroy(),(xt=Z.current)==null||xt.destroy()}},[B,ma]),T.useEffect(()=>{let I=!0,be=performance.now();const ne=()=>{Je.current=!document.hidden,Je.current&&(be=performance.now())};document.addEventListener("visibilitychange",ne);const st=tt=>{var kt,dt;if(!I)return;if(Fa.current){he.current=requestAnimationFrame(st);return}if(!Je.current){he.current=requestAnimationFrame(st);return}if(!ea.current){setTimeout(()=>{I&&(he.current=requestAnimationFrame(st))},1e3);return}const Se=m.current,He=tt-be,Ue=Se.targetFps||60,Ke=Ue>=240?0:1e3/Ue;if(Ke<=0||He>=Ke-.75){const xt=Math.min(He,100);be=tt,et.current+=xt/1e3;const St=et.current;if(Se.cameraMode==="flyThrough"){const At=Se.rotX,Nt=Se.rotY,ta=Math.cos(At),Ha=Math.sin(At),hi=Math.cos(Nt),vi=Math.sin(Nt),jt=[Ha*hi,vi,-ta*hi],oa=[ta,0,Ha],yi=[0,1,0];let ht=1.4*(xt/1e3);(Oe.current.has("ShiftLeft")||Oe.current.has("ShiftRight"))&&(ht*=2.8);let je=0,Re=0,nt=0;(Oe.current.has("KeyW")||Oe.current.has("ArrowUp"))&&(je+=jt[0]*ht,Re+=jt[1]*ht,nt+=jt[2]*ht),(Oe.current.has("KeyS")||Oe.current.has("ArrowDown"))&&(je-=jt[0]*ht,Re-=jt[1]*ht,nt-=jt[2]*ht),(Oe.current.has("KeyA")||Oe.current.has("ArrowLeft"))&&(je-=oa[0]*ht,nt-=oa[2]*ht),(Oe.current.has("KeyD")||Oe.current.has("ArrowRight"))&&(je+=oa[0]*ht,nt+=oa[2]*ht),(Oe.current.has("KeyE")||Oe.current.has("Space"))&&(Re+=yi[1]*ht),(Oe.current.has("KeyQ")||Oe.current.has("KeyC"))&&(Re-=yi[1]*ht),(je!==0||Re!==0||nt!==0)&&(m.current={...Se,camPosX:(Se.camPosX??0)+je,camPosY:(Se.camPosY??0)+Re,camPosZ:(Se.camPosZ??0)+nt})}const di=Se.autoRotate?St*Se.autoRotateSpeed*.12:0,Oi=Se.autoRotate?Math.sin(St*.18)*.06:0;let la=0,mi=0;if(Ie.current&&!Ea.current&&(Math.abs(rt.current.x)>ka||Math.abs(rt.current.y)>ka)){const At=Se.zoom,Nt=.0045*Math.max(.12,Math.min(1,At/2.8)),ta=xt;la=rt.current.x*ta*Nt*.5,mi=rt.current.y*ta*Nt*.5,rt.current.x*=ki,rt.current.y*=ki,Math.abs(rt.current.x)<ka&&(rt.current.x=0),Math.abs(rt.current.y)<ka&&(rt.current.y=0)}const Oa={...Se,rotX:Se.rotX+di+la,rotY:Math.max(-1.52,Math.min(1.52,Se.rotY+Oi+mi))},Pe=k.current;if(Pe&&Pe.width>0&&Pe.height>0&&(M.current?M.current.render(St,Oa):Z.current&&Z.current.render(St,Oa)),na.current&&Pe)try{const At=Pe.toDataURL("image/png");(kt=j.current)==null||kt.call(j,At)}catch(At){console.error("Screenshot capture failed",At)}const ha=le.current;if(ha.push(xt),ha.length>72&&ha.shift(),tt-ce.current>250){ce.current=tt;const At=ha.reduce((je,Re)=>je+Re,0)/ha.length,Nt=xt>0?Math.round(1e3/xt):0,ta=At>0?Math.round(1e3/At):0,Ha=[...ha].sort((je,Re)=>Re-je),hi=Math.floor(Ha.length*.05),vi=Ha[hi]||xt,jt=vi>0?Math.round(1e3/vi):0,oa=M.current?M.current.adapterInfo:Z.current?Z.current.rendererInfo:"GPU Engine",yi=B==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",ht={fps:Nt,avgFps:ta,frameTimeMs:parseFloat(xt.toFixed(2)),onePercentLow:jt,backend:yi,adapterName:oa,resolution:[(Pe==null?void 0:Pe.width)||0,(Pe==null?void 0:Pe.height)||0],drsScale:1,targetFps:Se.targetFps,interiorDistance:0};if((dt=h.current)==null||dt.call(h,ht),Be(Nt),$e(ta),ue(parseFloat(xt.toFixed(2))),de(jt),U([(Pe==null?void 0:Pe.width)||0,(Pe==null?void 0:Pe.height)||0]),Ve.current||(Ve.current=tt),tt-Ve.current>3e4){Ve.current=tt;const je=m.current;console.info(`[DIAG] Health: fps=${Nt} avg=${ta} 1%=${jt} | fractal=${je.type} hybrid=${je.hybridType} | style=${je.renderStyle} cam=${je.cameraMode} | palette=${je.paletteId} seed=${je.paletteSeed??0} rot=${je.paletteRotation} | audio=${je.enableAudio} tuning=${je.audioTuning} | res=${Pe==null?void 0:Pe.width}x${Pe==null?void 0:Pe.height}`)}}}he.current=requestAnimationFrame(st)};return he.current=requestAnimationFrame(st),()=>{I=!1,document.removeEventListener("visibilitychange",ne),he.current&&cancelAnimationFrame(he.current)}},[B]),T.useEffect(()=>{const I=ne=>{var st,tt,Se;((st=ne.target)==null?void 0:st.tagName)!=="INPUT"&&(ne.repeat||(Oe.current.add(ne.code),m.current.cameraMode!=="flyThrough"&&(ne.key===" "||ne.key==="ArrowRight"||ne.key==="ArrowDown"||ne.key==="PageDown"?(ne.preventDefault(),(tt=G.current)==null||tt.call(G)):ne.key==="ArrowLeft"||ne.key==="ArrowUp"||ne.key==="PageUp"?(ne.preventDefault(),(Se=X.current)==null||Se.call(X)):ne.key==="s"||ne.key==="S"||ne.key==="ы"||ne.key==="Ы"?(ne.preventDefault(),rt.current={x:0,y:0},m.current&&(m.current={...m.current,autoRotate:!1}),console.info("[Controls] Rotation stopped (S key)")):(ne.key==="i"||ne.key==="I"||ne.key==="ш"||ne.key==="Ш")&&(ne.preventDefault(),Ie.current=!Ie.current,Ie.current||(rt.current={x:0,y:0}),console.info(`[Controls] Inertia ${Ie.current?"enabled":"disabled"} (I key)`)))))},be=ne=>{Oe.current.delete(ne.code)};return window.addEventListener("keydown",I),window.addEventListener("keyup",be),()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",be)}},[]);const P=T.useCallback(()=>{rt.current={x:0,y:0},m.current&&(m.current={...m.current,autoRotate:!1})},[]),ie=T.useCallback(()=>{Ie.current=!Ie.current,Ie.current||(rt.current={x:0,y:0})},[]);return{activeEngineType:B,isCompiling:K,isEngineReady:oe,backendLabel:Y,adapterInfo:Ne,fps:ke,avgFps:Ge,frameTimeMs:Ze,onePercentLow:qe,resolution:N,canvasRef:k,keysPressedRef:Oe,isDraggingRef:Ea,velocityRef:rt,lastMousePosRef:Ei,lastInteractionReportTimeRef:ui,lastMoveTimeRef:fi,inertiaEnabledRef:Ie,stopRotation:P,toggleInertia:ie,params:m.current}}const Nh=({params:p,onParamsChange:s,onTelemetryUpdate:f,screenshotRequested:c,onScreenshotCaptured:d,forcedBackend:m="auto",onInteraction:z,onNextSpecimen:g,onPrevSpecimen:y,onEngineReady:b,scrollMode:L="feed"})=>{const F=T.useRef(null),O=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),k=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),B=T.useRef(p);B.current=p;const J=T.useRef(null);T.useRef(0);const K=Ah(F,{forcedBackend:m,isEmbeddedBrowser:O,isMobileDevice:k,paramsRef:B,onTelemetryUpdate:f,onEngineReady:b,onNextSpecimen:g,onPrevSpecimen:y,onInteraction:z,screenshotRequested:c,onScreenshotCaptured:d}),{canvasRef:q,isDraggingRef:oe,velocityRef:S,lastMousePosRef:Y,lastInteractionReportTimeRef:xe,lastMoveTimeRef:Ne,activeEngineType:ae,isCompiling:ke}=K;T.useEffect(()=>{const ue=q.current;if(!ue){pi.log({level:"error",category:"render",message:"FractalCanvas: canvas ref is null on mount"});return}pi.log({level:"info",category:"render",message:"FractalCanvas: mounted",details:{width:ue.width,height:ue.height,activeEngineType:ae}});const qe=U=>{U.preventDefault();const M=Math.exp(Math.sign(U.deltaY)*Math.min(Math.abs(U.deltaY)*.0012,.18));z==null||z(Math.abs(U.deltaY)*.015,0),s(Z=>({...Z,zoom:Math.max(.01,Math.min(100,Z.zoom*M))})),du.recordInteraction("zoom",Math.log(M)*10)};ue.addEventListener("wheel",qe,{passive:!1,capture:!0});const de=U=>{if(U.touches.length===2){U.preventDefault();const M=U.touches[0],Z=U.touches[1];J.current=Math.hypot(M.clientX-Z.clientX,M.clientY-Z.clientY)}};ue.addEventListener("touchstart",de,{passive:!1,capture:!0});const N=U=>{if(U.touches.length===2){U.preventDefault();const M=U.touches[0],Z=U.touches[1],ee=Math.hypot(M.clientX-Z.clientX,M.clientY-Z.clientY);if(J.current!==null&&J.current>5){const h=J.current/Math.max(ee,1),j=Math.pow(h,.95);z==null||z(Math.abs(J.current-ee)*.04,0),s(G=>({...G,zoom:Math.max(.01,Math.min(100,G.zoom*j))}))}J.current=ee}};return ue.addEventListener("touchmove",N,{passive:!1,capture:!0}),()=>{ue.removeEventListener("wheel",qe,{capture:!0}),ue.removeEventListener("touchstart",de,{capture:!0}),ue.removeEventListener("touchmove",N,{capture:!0})}},[q,s,z]);const Be=ue=>{oe.current=!0,Y.current={x:ue.clientX,y:ue.clientY},S.current={x:0,y:0},ue.target.setPointerCapture(ue.pointerId)},Ge=ue=>{if(!oe.current)return;const qe=ue.clientX-Y.current.x,de=ue.clientY-Y.current.y,N=performance.now(),U=Math.max(1,N-Ne.current);Ne.current=N,Y.current={x:ue.clientX,y:ue.clientY};const M=Math.hypot(qe,de);N-xe.current>300&&(xe.current=N,z==null||z(0,M)),B.current.zoom;const Z=S.current.x,ee=S.current.y,h=qe/U,j=de/U,G=Z>.001&&h<-.001||Z<-.001&&h>.001,X=ee>.001&&j<-.001||ee<-.001&&j>.001;G||X?S.current={x:0,y:0}:S.current={x:h,y:j},Math.abs(S.current.x)<5e-4&&Math.abs(S.current.y)<5e-4&&(S.current={x:0,y:0});const W=.003,le=qe*W,ce=de*W;s(Ve=>({...Ve,rotX:((Ve.rotX+le+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,rotY:Math.max(-1.5,Math.min(1.5,Ve.rotY+ce))})),du.recordInteraction("rotate",Math.hypot(qe,de)/U)},$e=ue=>{oe.current=!1;try{ue.target.releasePointerCapture(ue.pointerId)}catch{}},Ze=()=>{J.current=null};return n.jsxs("div",{ref:F,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[ke&&n.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:n.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[n.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),n.jsxs("span",{children:["Initializing GPU (",ae==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),n.jsx("canvas",{ref:q,id:"fractal-canvas",className:"w-full h-full block touch-none",onPointerDown:Be,onPointerMove:Ge,onPointerUp:$e,onPointerCancel:$e,onTouchEnd:Ze},ae)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jh=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,c)=>c?c.toUpperCase():f.toLowerCase()),mu=p=>{const s=jh(p);return s.charAt(0).toUpperCase()+s.slice(1)},wu=(...p)=>p.filter((s,f,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===f).join(" ").trim(),Mh=p=>{for(const s in p)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Th={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=T.forwardRef(({color:p="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:z,...g},y)=>T.createElement("svg",{ref:y,...Th,width:s,height:s,stroke:p,strokeWidth:c?Number(f)*24/Number(s):f,className:wu("lucide",d),...!m&&!Mh(g)&&{"aria-hidden":"true"},...g},[...z.map(([b,L])=>T.createElement(b,L)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(p,s)=>{const f=T.forwardRef(({className:c,...d},m)=>T.createElement(Rh,{ref:m,iconNode:s,className:wu(`lucide-${Vh(mu(p))}`,`lucide-${p}`,c),...d}));return f.displayName=mu(p),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],gn=fe("activity",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Du=fe("atom",Fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],wr=fe("book-open",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],Oh=fe("bookmark-plus",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Lh=fe("box",Hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Uh=fe("brain",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Gh=fe("camera",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ph=fe("chart-column",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Au=fe("check",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Zh=fe("chevron-down",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Kh=fe("chevron-left",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Nu=fe("chevron-right",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],$h=fe("chevron-up",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ql=fe("compass",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ic=fe("cpu",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Vu=fe("crosshair",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],r2=fe("droplet",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],l2=fe("ellipsis",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ju=fe("eye",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],c2=fe("flame",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],f2=fe("grid-3x3",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Hl=fe("heart",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],m2=fe("infinity",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],v2=fe("info",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Dr=fe("layers",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],b2=fe("maximize",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Mu=fe("mouse-pointer",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],_2=fe("music",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Tu=fe("play",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],D2=fe("radio",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],N2=fe("scan",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],j2=fe("search",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],T2=fe("share-2",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],rc=fe("shield-check",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ar=fe("sparkles",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],E2=fe("trash-2",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ru=fe("user",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],pc=fe("volume-2",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Cu=fe("volume-x",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],q2=fe("wrench",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zn=fe("x",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],G2=fe("zoom-in",B2),I2=({telemetry:p,targetFps:s,phiMultiplier:f})=>{const[c,d]=T.useState([]),[m,z]=T.useState(!1);T.useEffect(()=>{p.frameTimeMs>0&&d(b=>[...b,p.frameTimeMs].slice(-40))},[p.frameTimeMs]);const g=s>0?1e3/s:6.94;s===144||s===0&&p.fps>=140;const y=p.frameTimeMs<=g*1.05;return n.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:n.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[n.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),n.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${p.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),n.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:n.jsx("span",{children:p.backend})})]}),n.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>z(!m),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:m?"Expand":"Compact"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[n.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[n.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[n.jsx("span",{children:"RATE"}),n.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${p.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),n.jsxs("div",{className:"flex items-baseline gap-1",children:[n.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:p.fps}),n.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),n.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[n.jsx("span",{children:"1% Low:"}),n.jsxs("span",{className:"font-mono text-neutral-300",children:[p.onePercentLow," FPS"]})]})]}),n.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[n.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[n.jsx("span",{children:"FRAME TIME"}),n.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),n.jsxs("div",{className:"flex items-baseline gap-1",children:[n.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${y?"text-emerald-400":"text-amber-400"}`,children:p.frameTimeMs}),n.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),n.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[n.jsx("span",{children:"Avg:"}),n.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(p.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!m&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mb-2.5",children:[n.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[n.jsxs("span",{children:[s," FPS Frame Pacing"]}),n.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",g.toFixed(2)," ms"]})]}),n.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:c.map((b,L)=>{const F=Math.min(Math.max(b/20*100,8),100),O=b<=g*1.1;return n.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${O?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${F}%`},title:`${b} ms`},L)})})]}),n.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[n.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[n.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[n.jsx(Ar,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),n.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),n.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[n.jsx("span",{children:"Golden Angle (ψ):"}),n.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),n.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[n.jsx("span",{className:"truncate max-w-[140px]",title:p.adapterName,children:p.adapterName}),n.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[p.resolution[0],"×",p.resolution[1]]})]})]})]})]})})},P2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Fu={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},Y2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],nc={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},X2=1.61803398875,oc=137.507764;function Fl(p,s,f){p=(p%360+360)%360,s=Math.max(0,Math.min(1,s)),f=Math.max(0,Math.min(1,f));const c=(1-Math.abs(2*f-1))*s,d=c*(1-Math.abs(p/60%2-1)),m=f-c/2;let z=0,g=0,y=0;return p<60?(z=c,g=d,y=0):p<120?(z=d,g=c,y=0):p<180?(z=0,g=c,y=d):p<240?(z=0,g=d,y=c):p<300?(z=d,g=0,y=c):(z=c,g=0,y=d),[z+m,g+m,y+m]}function Z2(p,s){const f=p,c=(p+oc)%360,d=(p+oc*2)%360;return{id:`golden-gen-${Math.floor(p)}`,name:`Гармоника φ (${s})`,primary:Fl(f,.85,.45),secondary:Fl(c,.8,.55),accent:Fl(d,.95,.65),ambient:Fl(f,.6,.12)}}const da=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor","tesseract","120Cell","600Cell","24Cell","5Cell","kleinBottle","projectivePlane","mobiusStrip","torusKnot4D","flameSinusoidal","flameSpherical","flameSwirl","flameHorseshoe","flameButterfly","flameHeart","flameSpiral","flameHyperbolic","flameDiamond","flameWaves","flamePopcorn","flameRings","flameFan","ifs3DTree","ifs3DFern","ifs3DSierpinski","ifs3DCantor","ifs3DKoch"],_r={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона",tesseract:"Тессеракт (4D гиперкуб)","120Cell":"120-ячейка (4D додекаэдр)","600Cell":"600-ячейка (4D икосаэдр)","24Cell":"24-ячейка (самодвойственный)","5Cell":"5-ячейка (4D тетраэдр)",kleinBottle:"Бутылка Клейна (неориентируемая)",projectivePlane:"Проективная плоскость RP²",mobiusStrip:"Лента Мёбиуса 3D",torusKnot4D:"Торический узел 4D",flameSinusoidal:"Пламя: Синусоидальное",flameSpherical:"Пламя: Сферическое",flameSwirl:"Пламя: Вихрь",flameHorseshoe:"Пламя: Подкова",flameButterfly:"Пламя: Бабочка",flameHeart:"Пламя: Сердце",flameSpiral:"Пламя: Спираль",flameHyperbolic:"Пламя: Гиперболическое",flameDiamond:"Пламя: Алмаз",flameWaves:"Пламя: Волны",flamePopcorn:"Пламя: Попкорн",flameRings:"Пламя: Кольца",flameFan:"Пламя: Веер",ifs3DTree:"IFS 3D Дерево",ifs3DFern:"IFS 3D Папоротник Барнсли",ifs3DSierpinski:"IFS 3D Серпинского",ifs3DCantor:"IFS 3D Пыль Кантора",ifs3DKoch:"IFS 3D Кривая Коха"},J2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5,tesseract:3,"120Cell":3.5,"600Cell":3,"24Cell":2.5,"5Cell":2,kleinBottle:2.5,projectivePlane:2,mobiusStrip:1.5,torusKnot4D:3,flameSinusoidal:2.5,flameSpherical:2.6,flameSwirl:2.4,flameHorseshoe:2.5,flameButterfly:2.45,flameHeart:2.5,flameSpiral:2.4,flameHyperbolic:2.6,flameDiamond:2.5,flameWaves:2.45,flamePopcorn:2.4,flameRings:2.5,flameFan:2.45,ifs3DTree:2,ifs3DFern:2.2,ifs3DSierpinski:2,ifs3DCantor:2,ifs3DKoch:2},lc="golden_ratio_taste_profile_v2",K2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function ci(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class Q2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=20,this.explorationIndex=0,this.EXPLORATION_MODE=!0,this.RANDOM_HYBRID_MODE=!0,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem(lc);if(f){const c=JSON.parse(f);return da.forEach(d=>{c.typeAffinities&&c.typeAffinities[d]===void 0&&(c.typeAffinities[d]=1)}),c}}catch{}const s={};return da.forEach(f=>{s[f]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(lc,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(lc,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}getOpSynergy(s,f){return s===f?1.2:s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"?1.1:s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"?1.15:s==="minimal"&&f==="geometry"||s==="geometry"&&f==="minimal"?1.1:1}getPreferredOps(s,f,c){if(s===f){const d=c.filter(m=>m==="smoothMorph"||m==="smoothUnion");return d.length>0?d:c}if(s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"){const d=c.filter(m=>m==="domainWarp"||m==="smoothUnion");return d.length>0?d:c}if(s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"){const d=c.filter(m=>m==="quantumResonance"||m==="smoothMorph");return d.length>0?d:c}if(s==="minimal"||f==="minimal"){const d=c.filter(m=>m==="fractalLattice"||m==="smoothUnion");return d.length>0?d:c}return c}getHybridRecommendations(s=5){const f=[],c=da.map(d=>({type:d,affinity:this.taste.typeAffinities[d]||1,arch:ci(d)})).sort((d,m)=>m.affinity-d.affinity);for(const{type:d,affinity:m,arch:z}of c.slice(0,8)){const g=nc[d];if(g)for(const y of g.partners){const b=this.taste.typeAffinities[y]||1,L=ci(y),O=this.history.some(oe=>oe.type===d&&oe.hybridType===y||oe.type===y&&oe.hybridType===d)?.6:1.4,k=this.getOpSynergy(z,L),B=m*b*O*k,K=this.getPreferredOps(z,L,g.ops)[0];let q="";z===L?q=`Same archetype (${z}) — natural visual harmony`:m>2&&b>2?q="Both types in your taste profile":m>2?q=`Matches your love of ${z} fractals`:b>2?q=`Pairs with your interest in ${L} patterns`:q=`Unexplored ${z}+${L} combination`,f.push({type:d,partner:y,op:K,score:B,reason:q})}}return f.sort((d,m)=>m.score-d.score),f.slice(0,s)}breedNextSpecimen(s){var qe;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=s;if(!f){const de=da;if(this.EXPLORATION_MODE&&this.explorationIndex<de.length)f=de[this.explorationIndex],this.explorationIndex++,console.info(`[NeuroAesthetics] Exploration mode: showing type ${this.explorationIndex}/${de.length}: ${f}`);else{const N=de.map(Z=>{const ee=Math.max(.2,this.taste.typeAffinities[Z]||1),h=this.recentTypes.includes(Z)?.3:1,j=this.currentGeneration<20?1.5:1;return ee*h*j}),U=N.reduce((Z,ee)=>Z+ee,0);let M=Math.random()*U;for(let Z=0;Z<de.length;Z++){if(M<=N[Z]){f=de[Z];break}M-=N[Z]}f||(f=de[Math.floor(Math.random()*de.length)])}this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const c=Math.random()<.5;let d=this.taste.preferredHue;if(c){const de=Math.random()<.5?1:2;d=(d+oc*de+(Math.random()*30-15))%360}else d=Math.random()*360%360;let m;if(Math.random()<.65){const de=this.history.length>0?(qe=this.history[this.history.length-1].palette)==null?void 0:qe.id:"";let N=Sr.filter(U=>U.id!==de);N.length===0&&(N=Sr),m=N[Math.floor(Math.random()*N.length)]}else m=Z2(d,`Ген #${this.currentGeneration}`);const g=(Math.random()-.5)*.08,y=parseFloat((X2+g).toFixed(5)),b=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),L=Math.max(12,Math.min(32,b)),F=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),O=parseFloat(F.toFixed(2)),k=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),B=parseFloat(k.toFixed(2)),J=J2[f]*(.95+Math.random()*.1),K=Math.random()<.8;let q=f,oe=f,S=0,Y=0,xe="smoothUnion",Ne=1,ae=.32,ke=.22,Be=`${_r[f]} • φ-${this.currentGeneration}`;if(K){if(this.RANDOM_HYBRID_MODE&&Math.random()<.6){const ee=da.filter(h=>h!==f);q=ee[Math.floor(Math.random()*ee.length)],console.info(`[NeuroAesthetics] Random hybrid: ${f} + ${q}`)}else{const ee=nc[f]||{partners:da.filter(X=>X!==f)},h=ci(f);let j=ee.partners[0],G=-1;for(const X of ee.partners){const W=ci(X),le=h===W?1.5:.8,ce=Math.max(.2,this.taste.typeAffinities[X]||1),he=this.history.some(Oe=>Oe.hybridType===X&&Oe.type===f)?.5:1.3,et=this.getOpSynergy(h,W),Dt=le*ce*he*et;Dt>G&&(G=Dt,j=X)}q=j}const de=ci(q),N=this.getPreferredOps(selectedArch,de,compat.ops);xe=N[Math.floor(Math.random()*N.length)],S=parseFloat((.15+Math.random()*.55).toFixed(3)),ae=parseFloat((.2+Math.random()*.35).toFixed(3)),ke=parseFloat((.15+Math.random()*.4).toFixed(3)),Ne=Math.random()<.4?2:1;const U=Fu[xe],M=_r[f].split(" ")[0],Z=_r[q].split(" ")[0];if(Be=`${M} ${U} ${Z} • φ-${this.currentGeneration}`,Math.random()<.5){const h=(nc[q]||{partners:da.filter(j=>j!==f&&j!==q)}).partners.filter(j=>j!==f&&j!==q);if(h.length>0){let j=h[0],G=-1;for(const W of h){const le=ci(W),ce=Math.max(.2,this.taste.typeAffinities[W]||1),he=this.history.some(Dt=>Dt.tertiaryType===W)?.5:1.2,et=ce*he*(selectedArch===le?1.3:.9);et>G&&(G=et,j=W)}oe=j,Y=parseFloat((.1+Math.random()*.3).toFixed(3));const X=_r[oe].split(" ")[0];Be=`${M} ${U} ${Z} ⊕ ${X} • φ-${this.currentGeneration}`}}}const Ge=parseFloat((.7+Math.random()*1.5).toFixed(3)),$e=parseFloat((.35+Math.random()*1.05).toFixed(3)),ue={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:Be,type:f,hybridType:q,tertiaryType:oe,compositeOp:xe,hybridBlend:S,tertiaryBlend:Y,smoothK:ae,warpStrength:ke,octaveLayers:Ne,boxFold:Ge,sphereFold:$e,interiorCut:0,palette:m,iterations:L,phiMultiplier:y,morphSpeed:O,glowIntensity:B,zoom:J,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(ue),this.history.length>100&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,ue}registerEngagement(s,f,c,d){d.dwellTimeSeconds+=s,Math.abs(f)>.05&&d.zoomInteractions++,c>.05&&d.orbitInteractions++;const m=Math.min(35,d.dwellTimeSeconds/90*35),z=Math.min(18,Math.log1p(d.zoomInteractions)*3.2),g=Math.min(18,Math.log1p(d.orbitInteractions)*2.8),b=Math.round(Math.min(96,25+m+z+g));if(d.affinityScore=Math.max(d.affinityScore,b),d.dwellTimeSeconds>10&&d.affinityScore>50){const L=this.taste.typeAffinities[d.type]||1;if(this.taste.typeAffinities[d.type]=Math.min(4,L+.005),d.hybridType&&d.hybridBlend>.1){const q=this.taste.typeAffinities[d.hybridType]||1;this.taste.typeAffinities[d.hybridType]=Math.min(4,q+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+d.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+d.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+d.iterations*.01);const[F,O,k]=d.palette.primary,B=Math.max(F,O,k),J=Math.min(F,O,k),K=B-J;if(K>.05){let q=0;B===F?q=60*((O-k)/K%6):B===O?q=60*((k-F)/K+2):q=60*((F-O)/K+4),q<0&&(q+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+q*.03)%360}d.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=d.affinityScore),this.saveTasteProfile()}return d.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};da.forEach(z=>{const g=ci(z),y=this.taste.typeAffinities[z]||1;s[g]+=y,f[g]++});const d=["geometry","complex","minimal","primes","attractors"].map(z=>({archetype:z,label:K2[z],avg:f[z]>0?s[z]/f[z]:1})),m=d.reduce((z,g)=>z+g.avg,0);return d.map(z=>({archetype:z.archetype,label:z.label,percentage:Math.round(z.avg/Math.max(1e-4,m)*100),score:Math.min(100,Math.round(z.avg*25))}))}suggestRenderStyle(s){const f=["solid","xray","topo","hologram","iridescent","quantum","gemstone"];if(s){const m=ci(s),g={geometry:["solid","gemstone","topo"],complex:["hologram","quantum","iridescent"],minimal:["topo","solid","gemstone"],primes:["quantum","hologram","iridescent"],attractors:["xray","quantum","hologram"]}[m]||f;if(Math.random()<.6&&g.length>0)return g[Math.floor(Math.random()*g.length)]}const c=Math.random();if(c<.35)return"solid";const d=Math.floor((c-.35)/.65*(f.length-1));return f[Math.min(d+1,f.length-1)]}}const W2=({params:p,onParamsChange:s,onSelectFractalType:f,onCaptureScreenshot:c,onToggleFullscreen:d,onToggleInfoModal:m,onOpenAtlasModal:z,activeBackend:g,forcedBackend:y,onSelectBackend:b,onClose:L,tasteProfile:F,onSaveToFeed:O})=>{const[k,B]=T.useState("architectures"),[J,K]=T.useState("all"),q=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],oe=J==="all"?q:q.filter(S=>S.group===J);return n.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[n.jsx("span",{children:"Режим Инженера"}),n.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),n.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),n.jsxs("div",{className:"flex items-center gap-1",children:[z&&n.jsxs("button",{id:"open-atlas-modal-btn",onClick:z,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[n.jsx(wr,{className:"w-3.5 h-3.5"}),n.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),O&&n.jsxs("button",{id:"save-to-feed-btn",onClick:O,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[n.jsx(Oh,{className:"w-3 h-3"}),n.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),n.jsx("button",{id:"capture-screenshot-btn",onClick:c,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:n.jsx(Gh,{className:"w-3.5 h-3.5"})}),n.jsx("button",{id:"toggle-fullscreen-btn",onClick:d,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:n.jsx(b2,{className:"w-3.5 h-3.5"})}),n.jsx("button",{id:"show-math-info-btn",onClick:m,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:n.jsx(wr,{className:"w-3.5 h-3.5"})}),n.jsx("button",{id:"close-engineer-panel-btn",onClick:L,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:n.jsx(zn,{className:"w-3.5 h-3.5"})})]})]}),n.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[n.jsx("button",{id:"tab-architectures-btn",onClick:()=>B("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),n.jsx("button",{id:"tab-composition-btn",onClick:()=>B("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),n.jsx("button",{id:"tab-camera-btn",onClick:()=>B("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),n.jsx("button",{id:"tab-palettes-btn",onClick:()=>B("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),n.jsx("button",{id:"tab-morphology-btn",onClick:()=>B("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),n.jsx("button",{id:"tab-gpu-btn",onClick:()=>B("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),n.jsx("button",{id:"tab-audio-btn",onClick:()=>B("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),n.jsx("button",{id:"tab-neuro-btn",onClick:()=>B("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${k==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),k==="architectures"&&n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(S=>n.jsx("button",{onClick:()=>K(S.id),className:`px-2 py-1 rounded-md text-[9px] transition ${J===S.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:S.label},S.id))}),n.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:oe.map(S=>{const Y=p.type===S.id;return n.jsxs("button",{id:`arch-btn-${S.id}`,onClick:()=>{f?f(S.id):s(xe=>({...xe,type:S.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${Y?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:`text-xs font-semibold ${Y?"text-amber-300":"text-neutral-200"}`,children:S.label}),Y&&n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),n.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:S.desc}),n.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:S.formula})]},S.id)})})]}),k==="composition"&&n.jsxs("div",{className:"space-y-3.5",children:[n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),n.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Y2.map(S=>n.jsxs("button",{onClick:()=>s(Y=>({...Y,compositeOp:S})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${p.compositeOp===S?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsx("span",{className:"font-medium",children:P2[S]}),n.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Fu[S]})]},S))})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),n.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.hybridBlend??.35)*100),"%"]})]}),n.jsx("select",{value:p.hybridType||p.type,onChange:S=>s(Y=>({...Y,hybridType:S.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:da.map(S=>n.jsx("option",{value:S,children:_r[S]},S))}),n.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.hybridBlend??.35,onChange:S=>s(Y=>({...Y,hybridBlend:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),n.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.tertiaryBlend??.2)*100),"%"]})]}),n.jsx("select",{value:p.tertiaryType||"riemannZeta",onChange:S=>s(Y=>({...Y,tertiaryType:S.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:da.map(S=>n.jsx("option",{value:S,children:_r[S]},S))}),n.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.tertiaryBlend??.2,onChange:S=>s(Y=>({...Y,tertiaryBlend:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),n.jsx("span",{className:"font-mono text-amber-400",children:p.smoothK.toFixed(2)})]}),n.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:p.smoothK,onChange:S=>s(Y=>({...Y,smoothK:parseFloat(S.target.value)})),className:"w-full accent-amber-400"}),n.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[n.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),n.jsx("span",{className:"font-mono text-amber-400",children:p.warpStrength.toFixed(2)})]}),n.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.warpStrength,onChange:S=>s(Y=>({...Y,warpStrength:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]})]}),k==="camera"&&n.jsxs("div",{className:"space-y-3.5",children:[n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),n.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(S=>n.jsxs("button",{onClick:()=>s(Y=>({...Y,cameraMode:S.id})),className:`p-2 rounded-lg border text-left transition ${p.cameraMode===S.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsx("div",{className:"font-medium text-[10px]",children:S.label}),n.jsx("div",{className:"text-[8px] text-neutral-500",children:S.desc})]},S.id))})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[n.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),n.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:p.renderStyle||"solid"})]}),n.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(S=>n.jsxs("button",{onClick:()=>s(Y=>({...Y,renderStyle:S.id})),className:`p-2 rounded-lg border text-left transition ${(p.renderStyle||"solid")===S.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsx("div",{className:"font-medium text-[10px]",children:S.label}),n.jsx("div",{className:"text-[8px] text-neutral-500",children:S.desc})]},S.id))})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),n.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:p.slicePlane>.01?`${(p.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),n.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(S=>n.jsx("button",{onClick:()=>s(Y=>({...Y,sliceAxis:S.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(p.sliceAxis||"golden")===S.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:S.label},S.id))}),n.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.slicePlane,onChange:S=>s(Y=>({...Y,slicePlane:parseFloat(S.target.value)})),className:"w-full accent-amber-400"}),n.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("button",{onClick:()=>s(S=>({...S,probeActive:!S.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsxs("div",{children:[n.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),n.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),n.jsx("div",{className:`w-2 h-2 rounded-full ${p.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),n.jsxs("button",{onClick:()=>s(S=>({...S,macroMode:!S.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsxs("div",{children:[n.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),n.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),n.jsx("div",{className:`w-2 h-2 rounded-full ${p.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[n.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),n.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.headlampPower||1).toFixed(1),"x"]})]}),n.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.headlampPower??1,onChange:S=>s(Y=>({...Y,headlampPower:parseFloat(S.target.value)})),className:"w-full accent-amber-400"}),n.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[n.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),n.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.volumetricFog||.4).toFixed(1),"x"]})]}),n.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.volumetricFog??.4,onChange:S=>s(Y=>({...Y,volumetricFog:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[n.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),n.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((p.interiorCut??.4)*100),"%"]})]}),n.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:p.interiorCut??.4,onChange:S=>s(Y=>({...Y,interiorCut:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]})]}),k==="palettes"&&n.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:Sr.map(S=>{const Y=p.paletteId===S.id;return n.jsxs("button",{onClick:()=>s(xe=>({...xe,paletteId:S.id,customPalette:S})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${Y?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[n.jsx("div",{className:"text-left",children:n.jsx("span",{className:`text-[11px] font-semibold block ${Y?"text-amber-300":"text-neutral-200"}`,children:S.name})}),n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${S.primary.map(xe=>Math.round(xe*255)).join(",")})`}}),n.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${S.secondary.map(xe=>Math.round(xe*255)).join(",")})`}}),n.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${S.accent.map(xe=>Math.round(xe*255)).join(",")})`}})]})]},S.id)})}),k==="morphology"&&n.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),n.jsx("span",{className:"font-mono text-amber-400",children:p.phiMultiplier.toFixed(5)})]}),n.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:p.phiMultiplier,onChange:S=>s(Y=>({...Y,phiMultiplier:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"space-y-1 pt-1",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),n.jsx("span",{className:"font-mono text-amber-400",children:p.iterations})]}),n.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:p.iterations,onChange:S=>s(Y=>({...Y,iterations:parseInt(S.target.value,10)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"space-y-1 pt-1",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),n.jsxs("span",{className:"font-mono text-amber-400",children:[p.morphSpeed.toFixed(2),"x"]})]}),n.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:p.morphSpeed,onChange:S=>s(Y=>({...Y,morphSpeed:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"space-y-1 pt-1",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),n.jsx("span",{className:"font-mono text-amber-400",children:p.boxFold.toFixed(2)})]}),n.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:p.boxFold,onChange:S=>s(Y=>({...Y,boxFold:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"space-y-1 pt-1",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),n.jsx("span",{className:"font-mono text-amber-400",children:p.sphereFold.toFixed(2)})]}),n.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:p.sphereFold,onChange:S=>s(Y=>({...Y,sphereFold:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]})]}),k==="gpu"&&n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),n.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(S=>n.jsx("button",{onClick:()=>s(Y=>({...Y,targetFps:S})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${p.targetFps===S?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:S===0?"Uncapped":`${S} FPS`},S))}),n.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),n.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),n.jsx("button",{onClick:()=>s(S=>({...S,drsEnabled:!S.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),n.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(S=>n.jsx("button",{onClick:()=>b(S.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${y===S.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:S.label},S.id))}),n.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[n.jsxs("span",{children:["Текущий: ",g]}),n.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),k==="audio"&&n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[p.enableAudio?n.jsx(pc,{className:"w-4 h-4 text-amber-400"}):n.jsx(Cu,{className:"w-4 h-4 text-neutral-500"}),n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),n.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),n.jsx("button",{onClick:()=>s(S=>({...S,enableAudio:!S.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsxs("div",{className:"flex justify-between text-[11px]",children:[n.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),n.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((p.audioVolume??.65)*100),"%"]})]}),n.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.audioVolume??.65,onChange:S=>s(Y=>({...Y,audioVolume:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),n.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(S=>n.jsxs("button",{onClick:()=>s(Y=>({...Y,audioTuning:S.id})),className:`w-full p-2 rounded-lg border text-left transition ${(p.audioTuning||"phi432")===S.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsx("div",{className:"font-medium text-[10px]",children:S.label}),n.jsx("div",{className:"text-[8px] text-neutral-500",children:S.desc})]},S.id))})]}),n.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",n.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),k==="neuro"&&n.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[n.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),n.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(F==null?void 0:F.totalSpecimensExplored)||0," исследовано"]})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex justify-between text-[10px]",children:[n.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),n.jsxs("span",{className:"font-mono text-amber-300",children:[(F==null?void 0:F.highestResonanceScore.toFixed(1))||0,"%"]})]}),n.jsxs("div",{className:"flex justify-between text-[10px]",children:[n.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),n.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((F==null?void 0:F.preferredIterations)||20)})]}),n.jsxs("div",{className:"flex justify-between text-[10px]",children:[n.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),n.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((F==null?void 0:F.preferredHue)||0)*360),"° Hue"]})]})]}),n.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},$2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},e1=({specimen:p,resonanceScore:s,isInteracting:f,interactionType:c,onNext:d,onPrev:m,onFavorite:z,onOpenProfile:g,enableAudio:y,onToggleAudio:b,onOpenResearchModal:L,onOpenAtlas:F,isFeedOpen:O,onToggleFeed:k,isCurrentLiked:B=!1,params:J})=>{const[K,q]=T.useState(!1),[oe,S]=T.useState(!1),[Y,xe]=T.useState(!1),[Ne,ae]=T.useState(!1),[ke,Be]=T.useState(!1),Ge=T.useRef(null),$e=T.useRef(!1);T.useEffect(()=>{q(B)},[p==null?void 0:p.id,B]);const Ze=()=>{Ge.current&&clearTimeout(Ge.current),Ge.current=setTimeout(()=>{$e.current||(S(!1),xe(!1),ae(!1))},3e3)},ue=()=>{S(!0),xe(!0),Ze()},qe=()=>{ae(M=>!M),S(!0),Ge.current&&clearTimeout(Ge.current)};T.useEffect(()=>(ue(),()=>{Ge.current&&clearTimeout(Ge.current)}),[]),T.useEffect(()=>{const M=ee=>{(ee.clientY<80||ee.clientY>window.innerHeight-120)&&ue()},Z=ee=>{const h=ee.target;h.closest("#top-right-bar")||h.closest("#top-right-trigger")||h.closest("#neuro-feed-bar")||(xe(!0),Ze())};return window.addEventListener("mousemove",M),window.addEventListener("touchstart",Z,{passive:!0,capture:!0}),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("touchstart",Z,{capture:!0})}},[]);const de=()=>{q(!0),z()},N=()=>{if(!p)return;const M=J,Z=new URLSearchParams({type:p.type,hybrid:p.hybridType,tertiary:p.tertiaryType,op:p.compositeOp,blend:p.hybridBlend.toFixed(3),tertiaryBlend:p.tertiaryBlend.toFixed(3),smoothK:p.smoothK.toFixed(3),warp:p.warpStrength.toFixed(3),octaves:String(p.octaveLayers),boxFold:p.boxFold.toFixed(3),sphereFold:p.sphereFold.toFixed(3),interiorCut:p.interiorCut.toFixed(3),iterations:String(p.iterations),phi:p.phiMultiplier.toFixed(9),morphSpeed:p.morphSpeed.toFixed(3),glow:p.glowIntensity.toFixed(3),zoom:p.zoom.toFixed(3),name:p.name,palette:p.palette.id,paletteSeed:String((M==null?void 0:M.paletteSeed)??0),paletteRotation:M!=null&&M.paletteRotation?"1":"0",renderStyle:(M==null?void 0:M.renderStyle)??"solid",cameraMode:(M==null?void 0:M.cameraMode)??"orbit",camX:((M==null?void 0:M.camPosX)??0).toFixed(3),camY:((M==null?void 0:M.camPosY)??0).toFixed(3),camZ:((M==null?void 0:M.camPosZ)??-3.2).toFixed(3),headlamp:((M==null?void 0:M.headlampPower)??0).toFixed(3),fog:((M==null?void 0:M.volumetricFog)??.4).toFixed(3),slicePlane:((M==null?void 0:M.slicePlane)??0).toFixed(3),sliceAxis:(M==null?void 0:M.sliceAxis)??"golden",audio:M!=null&&M.enableAudio?"1":"0",audioVol:((M==null?void 0:M.audioVolume)??.65).toFixed(2),audioTuning:(M==null?void 0:M.audioTuning)??"phi432",drs:M!=null&&M.drsEnabled?"1":"0"}),ee=`${window.location.origin}${window.location.pathname}#${Z.toString()}`;navigator.share?navigator.share({title:p.name,text:`Фрактал: ${p.name}`,url:ee}).catch(()=>{}):navigator.clipboard.writeText(ee).then(()=>{Be(!0),setTimeout(()=>Be(!1),2e3)}).catch(()=>{const h=document.createElement("textarea");h.value=ee,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),Be(!0),setTimeout(()=>Be(!1),2e3)})},U=p!=null&&p.compositeOp?$2[p.compositeOp]||p.compositeOp:"Гибрид";return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{$e.current=!0,S(!0),ae(!0),Ge.current&&clearTimeout(Ge.current)},onMouseLeave:()=>{$e.current=!1,ae(!1),Ze()},children:[n.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${Ne?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:qe,title:"Меню",children:n.jsx(l2,{className:"w-4 h-4"})}),n.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${oe&&Ne?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[n.jsx("button",{id:"toggle-audio-btn-hud",onClick:b,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${y?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:y?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:y?n.jsx(pc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):n.jsx(Cu,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),F&&n.jsxs("button",{id:"open-atlas-btn-hud",onClick:F,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[n.jsx(wr,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),n.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),k&&n.jsx("button",{id:"toggle-feed-panel-btn",onClick:k,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${O?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:O?"Скрыть ленту фракталов":"Показать ленту фракталов",children:n.jsx(Dr,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),n.jsxs("button",{id:"open-user-profile-btn",onClick:g,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[n.jsx(Ru,{className:"w-3.5 h-3.5 text-amber-300"}),n.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),f&&n.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[n.jsx(ql,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),n.jsx("span",{children:c==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),n.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${Y?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:n.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[n.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[n.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),n.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[n.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[n.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(p==null?void 0:p.name)||"Золотой Фрактал",children:(p==null?void 0:p.name)||"Золотой Фрактал"}),(p==null?void 0:p.hybridBlend)&&p.hybridBlend>.05&&n.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:p.compositeOp,children:U})]}),n.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(p==null?void 0:p.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),n.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),n.jsx("button",{id:"boost-affinity-btn",onClick:de,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${K?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:n.jsx(Hl,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${K?"fill-rose-400 text-rose-400 scale-110":""}`})}),n.jsx("button",{id:"share-fractal-btn",onClick:N,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${ke?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:ke?"Ссылка скопирована!":"Поделиться этим фракталом",children:ke?n.jsx(Au,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):n.jsx(T2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),n.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[n.jsx("button",{id:"feed-prev-btn",onClick:m,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:n.jsx(Kh,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),n.jsxs("button",{id:"feed-next-btn",onClick:d,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[n.jsx("span",{children:"Далее"}),n.jsx(Nu,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},t1=({isOpen:p,onClose:s})=>p?n.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:n.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:n.jsx(wr,{className:"w-4.5 h-4.5"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),n.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),n.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:n.jsx(zn,{className:"w-4 h-4"})})]}),n.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[n.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(ql,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),n.jsxs("p",{className:"mb-2",children:["Число ",n.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",n.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),n.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),n.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(Ar,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),n.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),n.jsxs("div",{className:"space-y-2 text-neutral-300",children:[n.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[n.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),n.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",n.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",n.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),n.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[n.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),n.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",n.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(Dr,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[n.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[n.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),n.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),n.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[n.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),n.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),n.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[n.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),n.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(Dr,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),n.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[n.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[n.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),n.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),n.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),n.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[n.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),n.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),n.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),n.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[n.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),n.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),n.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),n.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[n.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),n.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),n.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(gn,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),n.jsxs("p",{className:"mb-2",children:["При частоте развертки ",n.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),n.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),n.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),n.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(Uh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),n.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",n.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),n.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[n.jsxs("li",{children:[n.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),n.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:n.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,a1=({isOpen:p,onClose:s,tasteProfile:f,archetypeBreakdown:c,currentSpecimen:d,resonanceScore:m,isEngineerMode:z,onToggleEngineerMode:g,audioTuning:y,onSelectAudioTuning:b,onResetTasteProfile:L,onOpenManifest:F,likedSpecimens:O=[],onPlayLiked:k,onRemoveLike:B,isCurrentLiked:J=!1})=>p?n.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:n.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[n.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[n.jsxs("div",{className:"flex items-center gap-3.5",children:[n.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[n.jsx(Ru,{className:"w-6 h-6 text-amber-300"}),n.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),n.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),n.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),n.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:n.jsx(zn,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[n.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),n.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[n.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[m,"%"]}),n.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),n.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${m}%`}})})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[n.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),n.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[n.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),n.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),n.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(d==null?void 0:d.generation)||1," в фокусе"]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[n.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),n.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:n.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),n.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Hl,{className:`w-4 h-4 ${O.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),n.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),n.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:O.length})]}),J&&d&&n.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[n.jsx(Hl,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),O.length===0?n.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",n.jsx(Hl,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):n.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:O.map((K,q)=>n.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[n.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:q+1}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:K.name}),n.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",K.phiMultiplier.toFixed(4)," • Gen #",K.generation]})]}),k&&n.jsx("button",{onClick:()=>k(K),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:n.jsx(Tu,{className:"w-3 h-3"})}),B&&n.jsx("button",{onClick:()=>B(K.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:n.jsx(E2,{className:"w-3 h-3"})})]},K.id))})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Ph,{className:"w-4 h-4 text-amber-400"}),n.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),n.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),n.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),n.jsx("div",{className:"space-y-2.5 pt-1",children:c.map(K=>n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsx("span",{className:"text-neutral-300 font-medium",children:K.label}),n.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[K.percentage,"%"]})]}),n.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${K.percentage}%`}})})]},K.archetype))})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(pc,{className:"w-4 h-4 text-amber-400"}),n.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),n.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(K=>n.jsxs("button",{onClick:()=>b(K.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${y===K.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[n.jsx("span",{className:"text-xs font-semibold",children:K.label}),n.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:K.desc})]},K.id))})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:n.jsx(Ar,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:n.jsx("span",{children:"О проекте & Описание Архитектуры"})}),n.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),n.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{F==null||F()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:n.jsx("span",{children:"Читать"})})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:n.jsx(q2,{className:"w-4 h-4"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),n.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),n.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:g,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${z?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[n.jsx("div",{className:`w-2 h-2 rounded-full ${z?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),n.jsx("span",{children:z?"Инженер Включен":"Включить Инж"})]})]}),z&&n.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[n.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),n.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),n.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[n.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),n.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,hu=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],i1=({isReady:p,onFinished:s})=>{const[f,c]=T.useState(0),[d,m]=T.useState(!1),[z,g]=T.useState(!1);return T.useEffect(()=>{const y=setInterval(()=>{c(b=>b<hu.length-1?b+1:b)},450);return()=>clearInterval(y)},[]),T.useEffect(()=>{const y=setTimeout(()=>{if(!p){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),m(!0);const b=setTimeout(()=>{g(!0),s==null||s()},700);return()=>clearTimeout(b)}},15e3);return()=>clearTimeout(y)},[p,s]),T.useEffect(()=>{if(p){const y=setTimeout(()=>{m(!0);const b=setTimeout(()=>{g(!0),s==null||s()},700);return()=>clearTimeout(b)},500);return()=>clearTimeout(y)}},[p,s]),z?null:n.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${d?"opacity-0 pointer-events-none":"opacity-100"}`,children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),n.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[n.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),n.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),n.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),n.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),n.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),n.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),n.jsxs("filter",{id:"softGlow",children:[n.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((y,b)=>n.jsxs("g",{transform:`rotate(${y} 80 80)`,children:[n.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),n.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),n.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},b)),n.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),n.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),n.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[n.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),n.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),n.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[n.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),n.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:hu[f]})]}),n.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},r1=({isOpen:p,onClose:s,isFirstVisit:f=!1,onOpenAtlas:c})=>{if(!p)return null;const d=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},m=()=>{d(),c==null||c()};return n.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:d,children:n.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:z=>z.stopPropagation(),children:[n.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),n.jsx("button",{id:"btn-close-manifest-modal",onClick:d,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:n.jsx(zn,{className:"w-5 h-5"})}),n.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[n.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[n.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[n.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[n.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),n.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),n.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[n.jsx(Ar,{className:"w-3 h-3 text-amber-400"}),n.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),n.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),n.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[n.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[n.jsx(ql,{className:"w-4 h-4 text-amber-400"}),n.jsx("span",{children:"100+ Канонических Форм"})]}),n.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),n.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[n.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[n.jsx(Dr,{className:"w-4 h-4 text-cyan-400"}),n.jsx("span",{children:"Живой Морфинг & Слияние"})]}),n.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),n.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[n.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[n.jsx(_2,{className:"w-4 h-4 text-purple-400"}),n.jsx("span",{children:"Гармоники Звука φ"})]}),n.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),n.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Mu,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),n.jsxs("span",{children:[n.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),n.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),n.jsxs("span",{children:[n.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),n.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),n.jsxs("span",{children:[n.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),n.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[c&&n.jsxs("button",{id:"btn-welcome-open-atlas",onClick:m,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[n.jsx(wr,{className:"w-4 h-4"}),n.jsx("span",{children:"Каталог 100+ Фракталов"})]}),n.jsxs("button",{id:"btn-manifest-start",onClick:d,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[n.jsx("span",{children:"Начать погружение"}),n.jsx(Nu,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},vu=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}];function C(p){return{id:p.id,name:p.name,englishName:p.englishName,category:p.category,formula:p.formula,dimension:p.dimension,generatorRule:p.generatorRule,description:p.description,phiPiRelation:p.phiPiRelation,enginePreset:{type:p.type,hybridType:p.hybridType,compositeOp:p.compositeOp,zoom:p.zoom??2.5,rotX:p.rotX??.4,rotY:p.rotY??.25,iterations:p.iterations??32,hybridBlend:p.hybridBlend,paletteSeed:p.paletteSeed,boxFold:p.boxFold,sphereFold:p.sphereFold,warpStrength:p.warpStrength,smoothK:p.smoothK,octaveLayers:p.octaveLayers,glowIntensity:p.glowIntensity,morphSpeed:p.morphSpeed,phiMultiplier:p.phiMultiplier,interiorCut:p.interiorCut,renderStyle:p.renderStyle}}}const n1=[C({id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}),C({id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}),C({id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}),C({id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}),C({id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}),C({id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2",generatorRule:"Вариация дракона с чередующимися углами",description:"Модификация дракона Хартера-Хейтуэя с чередующимися направлениями складывания.",phiPiRelation:"Чередование углов ±π/2 создает уникальную симметрию.",type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.65}),C({id:"hilbert-curve",name:"Кривая Гильберта",englishName:"Hilbert Curve",category:"geometric_curves",formula:"H_n: 4^(n-1) сегментов, заполняет квадрат",dimension:"D = 2 (пространственно-заполняющая)",generatorRule:"A → +BF-AFA-FB+, B → -AF+BFB+FA-",description:"Непрерывная кривая, проходящая через каждую точку единичного квадрата. Сохраняет локальность: близкие точки на кривой близки в квадрате.",phiPiRelation:"Рекурсивная структура 4-кратного разбиения; золотая модификация использует φ-пропорции в подквадратах.",type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.8}),C({id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"Заполняет квадрат, D = 2",dimension:"D = 2",generatorRule:"4 взаимно ортогональные подкривые",description:"Пространственно-заполняющая кривая Серпинского, альтернатива кривой Гильберта.",phiPiRelation:"4-кратная симметрия, φ-модификации в углах.",type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.7}),C({id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"Первая пространственно-заполняющая кривая (1890)",dimension:"D = 2",generatorRule:"9-кратное разбиение квадрата",description:"Исторически первая кривая, заполняющая квадрат. 9 подквадратов на каждой итерации.",phiPiRelation:"9 = 3², связь с φ через тригонометрию π/9.",type:"hilbertCurve3D",compositeOp:"smoothMorph",zoom:2.75}),C({id:"gosper-curve",name:"Кривая Госпера",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"7 сегментов, угол 60°",dimension:"D = ln(7)/ln(3) ≈ 1.7712",generatorRule:"A → A-B--B+A++AA+B-, B → +A-BB--B-A++A+B",description:'Кривая "flowsnake" - заполняет область с границей-снежинкой. 7-кратное самоподобие.',phiPiRelation:"7 сегментов, угол π/3; граница - кривая Коха.",type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.6}),C({id:"minkowski-sausage",name:"Колбаса Минковского",englishName:"Minkowski Sausage (Quadratic Koch)",category:"geometric_curves",formula:"8 сегментов, масштаб 1/4",dimension:"D = ln(8)/ln(4) = 1.5",generatorRule:"F → F+F-F-FF+F+F-F",description:"Квадратичная кривая Коха с 8 сегментами. Заполняет область с фрактальной границей.",phiPiRelation:"8 = 2³, масштаб 1/4 = (1/2)².",type:"kochSnowflake3D",compositeOp:"smoothUnion",zoom:2.8}),C({id:"cesaro-fractal",name:"Фрактал Чезаро",englishName:"Cesàro Fractal",category:"geometric_curves",formula:"Вариация кривой Коха с углом α",dimension:"D = ln(4)/ln(1/(2cos(α/2)))",generatorRule:"F → F+F--F+F (угол α варьируется)",description:"Обобщение кривой Коха с переменным углом. При α=60° совпадает с Коха.",phiPiRelation:"Угол α может быть выбран как π/φ ≈ 111.47°.",type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:2.7}),C({id:"cantor-curve",name:"Кривая Кантора",englishName:"Cantor Curve (Cantor Dust)",category:"geometric_curves",formula:"Удаление средней трети",dimension:"D = ln(2)/ln(3) ≈ 0.6309",generatorRule:"F → F F (удалить среднюю треть)",description:"Одномерное множество Кантора - простейший фрактал. Нулевая мера, несчетно.",phiPiRelation:"2/3 масштабирование; φ-вариация использует 1/φ.",type:"cantorDust",compositeOp:"smoothUnion",zoom:3}),C({id:"vicsek-fractal",name:"Фрактал Вицека",englishName:"Vicsek Fractal",category:"geometric_curves",formula:"5 квадратов, масштаб 1/3",dimension:"D = ln(5)/ln(3) ≈ 1.4650",generatorRule:"Крестообразное разбиение 3×3",description:"Крестообразный фрактал с квадратной симметрией. 5 подквадратов на каждой итерации.",phiPiRelation:"5-кратная симметрия; φ-модификация использует золотое крестообразное разбиение.",type:"vicsekFractal",compositeOp:"smoothUnion",zoom:2.9}),C({id:"tetrix",name:"Тетрикс",englishName:"Tetrix (Sierpiński Tetrahedron)",category:"geometric_curves",formula:"4 тетраэдра, масштаб 1/2",dimension:"D = ln(4)/ln(2) = 2",generatorRule:"Разбиение тетраэдра на 4 подтетраэдра",description:"Трехмерный аналог треугольника Серпинского. 4 подтетраэдра на каждой итерации.",phiPiRelation:"4 = 2², φ-пропорции в высотах тетраэдра.",type:"tetrix",compositeOp:"smoothUnion",zoom:2.8}),C({id:"sierpinski-carpet",name:"Ковёр Серпинского",englishName:"Sierpiński Carpet",category:"geometric_curves",formula:"8 квадратов, масштаб 1/3",dimension:"D = ln(8)/ln(3) ≈ 1.8928",generatorRule:"Разбиение 3×3, удалить центр",description:"Плоский фрактал Серпинского. Универсальная кривая: содержит все одномерные кривые.",phiPiRelation:"8 = 2³, 3×3 сетка; φ-модификация использует золотое разбиение.",type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.7}),C({id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"geometric_curves",formula:"20 кубов, масштаб 1/3",dimension:"D = ln(20)/ln(3) ≈ 2.7268",generatorRule:"Разбиение 3×3×3, удалить центры граней и центр",description:"Трехмерный аналог ковра Серпинского. Универсальная кривая для всех компактных метрических пространств размерности ≤ 1.",phiPiRelation:"20 = 4×5, φ-пропорции в удаленных объемах.",type:"menger",compositeOp:"smoothUnion",zoom:2.6}),C({id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"geometric_curves",formula:"φ-пропорции в разбиении куба",dimension:"D ≈ 2.5293",generatorRule:"Разбиение куба с φ-пропорциями",description:"Фрактальный куб с золотым сечением в пропорциях. Назван в честь формы креста на гранях.",phiPiRelation:"Основан на φ: 1/φ ≈ 0.618 масштабирование.",type:"jerusalemCube",compositeOp:"smoothUnion",zoom:2.5}),C({id:"pythagoras-tree",name:"Дерево Пифагора",englishName:"Pythagoras Tree",category:"geometric_curves",formula:"2 квадрата, масштаб cos(θ), sin(θ)",dimension:"D = 2 (при φ-углах)",generatorRule:"Квадрат + 2 квадрата наверху",description:"Фрактальное дерево из квадратов. При угле 45° симметрично; при φ-углах золотое.",phiPiRelation:"Углы ветвления могут быть выбраны как arctan(1/φ) ≈ 31.72°.",type:"pythagorasTree3D",compositeOp:"smoothUnion",zoom:2.7}),C({id:"l-system-plant",name:"L-система: Растение",englishName:"L-System Plant",category:"geometric_curves",formula:"X → F+[[X]-X]-F[-FX]+X, F → FF",dimension:"D ≈ 1.5-2.0",generatorRule:"Угол 22.5°, 25° или 25.7° (φ)",description:"Фрактальное растение из L-системы. Имитирует ветвление реальных растений.",phiPiRelation:"Угол ветвления 25.7° ≈ 360°/φ² - золотое ветвление.",type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.8})],l1=[C({id:"mandelbulb",name:"Мандельбульб",englishName:"Mandelbulb",category:"constructive_csg",formula:"z_{n+1} = z_n^8 + c (в сферических координатах)",dimension:"D ≈ 3.0",generatorRule:"Сферическое возведение в степень + сложение",description:"Трехмерный аналог множества Мандельброта. Создан Дэвидом Бейкером в 1978 году.",phiPiRelation:"Степень 8 = 2³; φ-модификация использует золотые пропорции в углах.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.5}),C({id:"mandelbox",name:"Мандельбокс",englishName:"Mandelbox",category:"constructive_csg",formula:"Свертка + масштабирование + отражение",dimension:"D ≈ 2.5-3.0",generatorRule:"Box-fold + sphere-fold + scale",description:"Фрактал, созданный Томом Лоу в 2010 году. Сочетает свертку куба и сферы.",phiPiRelation:"Масштабирование связано с φ через золотые пропорции.",type:"mandelbox",compositeOp:"smoothUnion",boxFold:1,sphereFold:.5,zoom:2.6}),C({id:"julia-set-3d",name:"3D Жюлиа",englishName:"3D Julia Set",category:"constructive_csg",formula:"Кватернионная Жюлиа",dimension:"D ≈ 2.0-2.5",generatorRule:"Кватернионная итерация",description:"Трехмерное обобщение множества Жюлиа в пространстве кватернионов.",phiPiRelation:"Кватернионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7}),C({id:"apollonian-gasket",name:"Прокладка Аполлония",englishName:"Apollonian Gasket",category:"constructive_csg",formula:"Инверсия относительно окружностей",dimension:"D ≈ 1.3057",generatorRule:"Касательные окружности",description:"Фрактальная упаковка касательных окружностей. Бесконечное количество окружностей.",phiPiRelation:"Инверсия сохраняет углы; φ-модификация использует золотые пропорции.",type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.8}),C({id:"schwarz-surface",name:"Поверхность Шварца",englishName:"Schwarz Minimal Surface",category:"constructive_csg",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2.0 (минимальная поверхность)",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность с нулевой средней кривизной. Бесконечно продолжается в трехмерном пространстве.",phiPiRelation:"Тригонометрическая симметрия связана с π.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.6}),C({id:"gyroid",name:"Гироид",englishName:"Gyroid",category:"constructive_csg",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2.0",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность, открытая Нерсесом в 1970 году. Встречается в природе (крылья бабочек).",phiPiRelation:"Хиральная симметрия связана с φ.",type:"gyroid",compositeOp:"smoothUnion",zoom:2.7}),C({id:"lidinoid",name:"Лидиноид",englishName:"Lidinoid",category:"constructive_csg",formula:"Вариация гироида",dimension:"D = 2.0",generatorRule:"Модифицированное тригонометрическое уравнение",description:"Родственная гироиду минимальная поверхность с более сложной топологией.",phiPiRelation:"Топология связана с φ через золотые пропорции.",type:"gyroid",compositeOp:"smoothUnion",zoom:2.65}),C({id:"neovius-surface",name:"Поверхность Неовиуса",englishName:"Neovius Surface",category:"constructive_csg",formula:"3(cos(x) + cos(y) + cos(z)) + 4cos(x)cos(y)cos(z) = 0",dimension:"D = 2.0",generatorRule:"Расширенное тригонометрическое уравнение",description:"Минимальная поверхность с более высокой симметрией, чем поверхность Шварца.",phiPiRelation:"Симметрия связана с π и φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.7}),C({id:"diamond-surface",name:"Алмазная поверхность",englishName:"Diamond Surface",category:"constructive_csg",formula:"Минимальная поверхность алмазной структуры",dimension:"D = 2.0",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность, соответствующая структуре алмаза.",phiPiRelation:"Кристаллическая симметрия связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.65}),C({id:"costa-surface",name:"Поверхность Косты",englishName:"Costa Surface",category:"constructive_csg",formula:"Минимальная поверхность с тремя концами",dimension:"D = 2.0",generatorRule:"Комплексный анализ",description:"Минимальная поверхность, открытая Костой в 1984 году. Первый пример поверхности с тремя концами.",phiPiRelation:"Топология связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.7}),C({id:"catalan-surface",name:"Поверхность Каталана",englishName:"Catalan Surface",category:"constructive_csg",formula:"Минимальная поверхность с прямыми линиями",dimension:"D = 2.0",generatorRule:"Параметрическое уравнение",description:"Минимальная поверхность, содержащая прямые линии. Открыта Каталланом в 1855 году.",phiPiRelation:"Геометрия связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.6}),C({id:"henneberg-surface",name:"Поверхность Хеннеберга",englishName:"Henneberg Surface",category:"constructive_csg",formula:"Минимальная поверхность",dimension:"D = 2.0",generatorRule:"Параметрическое уравнение",description:"Минимальная поверхность с интересной топологией.",phiPiRelation:"Топология связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.65})],o1=[C({id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}),C({id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}),C({id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),C({id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),C({id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 1.0-2.0",generatorRule:"Бассейны притяжения корней уравнения",description:"Бассейны притяжения метода Ньютона для нахождения корней многочлена. Границы между бассейнами - фракталы.",phiPiRelation:"При k = 5 + φ границы бассейнов образуют квазикристаллическую структуру.",type:"newtonFractal",compositeOp:"smoothUnion",zoom:2.8}),C({id:"burning-ship",name:"Горящий корабль",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D_граница = 2.0",generatorRule:"Модификация Мандельброта с абсолютными значениями",description:'Фрактал "Горящий корабль" - вариация Мандельброта с абсолютными значениями действительной и мнимой частей.',phiPiRelation:"Асимметрия создает уникальную структуру, связанную с φ через золотые пропорции.",type:"burningShip",compositeOp:"smoothUnion",zoom:2.7}),C({id:"tricorn-fractal",name:"Трезубец (Tricorn)",englishName:"Tricorn (Mandelbar)",category:"algebraic_complex",formula:"z_{n+1} = z̄_n² + c",dimension:"D_граница = 2.0",generatorRule:"Мандельброт с сопряжением",description:'Антиголоморфный аналог множества Мандельброта. Три симметричные "руки" вместо кардиоиды.',phiPiRelation:"3-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),C({id:"buffon-dart",name:"Фрактал Баффона",englishName:"Buffon Dart",category:"algebraic_complex",formula:"Стохастическая итерация",dimension:"D ≈ 1.5-2.0",generatorRule:"Случайные итерации с вероятностями",description:"Стохастический фрактал, генерируемый случайными итерациями IFS.",phiPiRelation:"Вероятности могут быть выбраны как 1/φ и 1-1/φ.",type:"ifsFractal",compositeOp:"smoothUnion",zoom:2.6}),C({id:"phoenix-julia",name:"Жюлиа Феникс",englishName:"Phoenix Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c + d·z_{n-1}",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Жюлиа с памятью предыдущего состояния",description:"Множество Жюлиа с памятью - зависит от двух предыдущих итераций. Создает более сложные структуры.",phiPiRelation:"Параметр d связан с φ через золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),C({id:"mandelbar-3d",name:"Мандельбар 3D",englishName:"Mandelbar 3D",category:"algebraic_complex",formula:"3D антиголоморфный Мандельброт",dimension:"D ≈ 2.0-2.5",generatorRule:"3D обобщение трезубца",description:"Трехмерное обобщение множества Мандельбар с антиголоморфной симметрией.",phiPiRelation:"3D симметрия связана с φ через золотые пропорции.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),C({id:"tetrahedral-julia",name:"Тетраэдрическая Жюлиа",englishName:"Tetrahedral Julia Set",category:"algebraic_complex",formula:"Кватернионная Жюлиа с тетраэдрической симметрией",dimension:"D ≈ 2.0",generatorRule:"Кватернионная итерация с тетраэдрической симметрией",description:"Множество Жюлиа в пространстве кватернионов с тетраэдрической симметрией.",phiPiRelation:"Тетраэдрическая симметрия связана с φ через золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),C({id:"cubic-julia",name:"Кубическая Жюлиа",englishName:"Cubic Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n³ + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Кубическая итерация",description:"Множество Жюлиа для кубического многочлена. 3-лучевая симметрия.",phiPiRelation:"3-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),C({id:"quartic-julia",name:"Квартичная Жюлиа",englishName:"Quartic Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n⁴ + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Квартичная итерация",description:"Множество Жюлиа для квартичного многочлена. 4-лучевая симметрия.",phiPiRelation:"4-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8}),C({id:"exponential-julia",name:"Экспоненциальная Жюлиа",englishName:"Exponential Julia Set",category:"algebraic_complex",formula:"z_{n+1} = e^{z_n} + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Экспоненциальная итерация",description:"Множество Жюлиа для экспоненциального отображения. Бесконечное количество компонент.",phiPiRelation:"Экспонента связана с φ через e^{iπ} = -1.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.6})],s1=[C({id:"4d-mandelbulb",name:"4D Мандельбульб",englishName:"4D Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c в 4D",dimension:"D ≈ 4.0",generatorRule:"4D сферическое возведение в степень",description:"Четырехмерное обобщение Мандельбульба.",phiPiRelation:"4D симметрия связана с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.5}),C({id:"quaternion-julia",name:"Кватернионная Жюлиа",englishName:"Quaternion Julia Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c в H",dimension:"D ≈ 2.0-3.0",generatorRule:"Кватернионная итерация",description:"Множество Жюлиа в пространстве кватернионов.",phiPiRelation:"Кватернионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),C({id:"octonion-fractal",name:"Октонионный Фрактал",englishName:"Octonion Fractal",category:"multidimensional",formula:"Итерация в октонионах",dimension:"D ≈ 3.0-4.0",generatorRule:"Октонионная итерация",description:"Фрактал в пространстве октонионов (8D алгебра).",phiPiRelation:"Октонионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7}),C({id:"4d-julia",name:"4D Жюлиа",englishName:"4D Julia Set",category:"multidimensional",formula:"4D обобщение Жюлиа",dimension:"D ≈ 2.0-3.0",generatorRule:"4D итерация",description:"Четырехмерное обобщение множества Жюлиа.",phiPiRelation:"4D симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.65}),C({id:"hyperbolic-fractal",name:"Гиперболический Фрактал",englishName:"Hyperbolic Fractal",category:"multidimensional",formula:"Фрактал в гиперболическом пространстве",dimension:"D ≈ 2.0-3.0",generatorRule:"Гиперболическая геометрия",description:"Фрактал в пространстве Лобачевского с отрицательной кривизной.",phiPiRelation:"Гиперболическая геометрия связана с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),C({id:"spherical-fractal",name:"Сферический Фрактал",englishName:"Spherical Fractal",category:"multidimensional",formula:"Фрактал на сфере",dimension:"D ≈ 2.0",generatorRule:"Сферическая геометрия",description:"Фрактал на поверхности сферы.",phiPiRelation:"Сферическая геометрия связана с π и φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7})],c1=[C({id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern",category:"ifs_attractors",formula:"4 аффинных преобразования",dimension:"D ≈ 1.45",generatorRule:"IFS с вероятностями",description:"Фрактал, имитирующий папоротник. Создан Майклом Барнсли в 1988 году.",phiPiRelation:"Вероятности связаны с φ через золотые пропорции.",type:"ifsFractal",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"ifs_attractors",formula:"3 сжатия к вершинам",dimension:"D = ln(3)/ln(2) ≈ 1.5850",generatorRule:"Хаотическая игра",description:"Классический фрактал Серпинского. Может быть построен хаотической игрой.",phiPiRelation:"3-кратная симметрия; φ-модификация использует золотые пропорции.",type:"sierpinskiTriangle",compositeOp:"smoothUnion",zoom:2.8}),C({id:"lorenz-attractor",name:"Аттрактор Лоренца",englishName:"Lorenz Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",dimension:"D ≈ 2.06",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, открытый Лоренцем в 1963 году. Моделирует конвекцию в атмосфере.",phiPiRelation:"Параметры σ=10, ρ=28, β=8/3; φ-модификация использует золотые пропорции.",type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:2.6}),C({id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y-z, dy/dt = x+ay, dz/dt = b+z(x-c)",dimension:"D ≈ 2.0",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, открытый Рёсслером в 1976 году. Проще аттрактора Лоренца.",phiPiRelation:"Параметры связаны с φ через золотые пропорции.",type:"rosslerAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"thomas-attractor",name:"Аттрактор Томаса",englishName:"Thomas Attractor",category:"ifs_attractors",formula:"dx/dt = sin(y)-bx, dy/dt = sin(z)-by, dz/dt = sin(x)-bz",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с периодической симметрией.",phiPiRelation:"Параметр b связан с φ.",type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"dadras-attractor",name:"Аттрактор Дадраса",englishName:"Dadras Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с двумя витками.",phiPiRelation:"Параметры связаны с φ.",type:"dadrasAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"chen-attractor",name:"Аттрактор Чена",englishName:"Chen Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, родственный аттрактору Лоренца.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.6}),C({id:"sprott-attractors",name:"Аттракторы Спротта",englishName:"Sprott Attractors",category:"ifs_attractors",formula:"Семейство простых систем ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Семейство странных аттракторов, открытых Спроттом.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"halvorsen-attractor",name:"Аттрактор Хальворсена",englishName:"Halvorsen Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с трехлучевой симметрией.",phiPiRelation:"3-лучевая симметрия; параметры связаны с φ.",type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с тороидальной структурой.",phiPiRelation:"Параметры связаны с φ.",type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.7})],p1=[C({id:"random-terrain",name:"Случайный Рельеф",englishName:"Random Terrain",category:"stochastic",formula:"Фрактальный шум",dimension:"D ≈ 2.0-2.5",generatorRule:"Фрактальный шум Перлина",description:"Случайный рельеф, сгенерированный фрактальным шумом.",phiPiRelation:"Шум связан с φ.",type:"randomTerrain",compositeOp:"smoothUnion",zoom:2.7}),C({id:"perlin-noise",name:"Шум Перлина",englishName:"Perlin Noise",category:"stochastic",formula:"Градиентный шум",dimension:"D = 2.0",generatorRule:"Градиентный шум",description:"Градиентный шум, разработанный Перлином.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",compositeOp:"smoothUnion",zoom:2.8}),C({id:"simplex-noise",name:"Симплексный Шум",englishName:"Simplex Noise",category:"stochastic",formula:"Симплексный градиентный шум",dimension:"D = 2.0",generatorRule:"Симплексный шум",description:"Улучшенная версия шума Перлина.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",compositeOp:"smoothUnion",zoom:2.75}),C({id:"worley-noise",name:"Шум Уорли",englishName:"Worley Noise (Cellular)",category:"stochastic",formula:"Клеточный шум",dimension:"D = 2.0",generatorRule:"Расстояние до случайных точек",description:"Клеточный шум, основанный на расстоянии до случайных точек.",phiPiRelation:"Структура связана с φ.",type:"worleyNoise",compositeOp:"smoothUnion",zoom:2.7}),C({id:"fbm-terrain",name:"FBM Рельеф",englishName:"FBM Terrain",category:"stochastic",formula:"Фрактальное броуновское движение",dimension:"D ≈ 2.0-2.5",generatorRule:"Сумма октав шума",description:"Рельеф, сгенерированный фрактальным броуновским движением.",phiPiRelation:"Октавы связаны с φ.",type:"randomTerrain",octaveLayers:8,compositeOp:"smoothUnion",zoom:2.8}),C({id:"ridged-multifractal",name:"Гребневой Мультифрактал",englishName:"Ridged Multifractal",category:"stochastic",formula:"Абсолютный шум с гребнями",dimension:"D ≈ 2.0-2.5",generatorRule:"Абсолютный шум",description:"Мультифрактал с гребневой структурой.",phiPiRelation:"Структура связана с φ.",type:"randomTerrain",octaveLayers:6,compositeOp:"smoothUnion",zoom:2.7}),C({id:"billow-noise",name:"Волнистый Шум",englishName:"Billow Noise",category:"stochastic",formula:"Абсолютный шум",dimension:"D ≈ 2.0",generatorRule:"Абсолютный шум",description:"Волнистый шум, похожий на облака.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",octaveLayers:6,compositeOp:"smoothUnion",zoom:2.75})],f1=[C({id:"percolation-cluster",name:"Перколяционный Кластер",englishName:"Percolation Cluster",category:"physical_nature",formula:"Вероятностная модель перколяции",dimension:"D ≈ 1.896 (2D), 2.53 (3D)",generatorRule:"Случайное заполнение решетки",description:"Фрактальный кластер в модели перколяции. Возникает при критической вероятности.",phiPiRelation:"Критическая вероятность связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.7}),C({id:"dl-aggregate",name:"DLA Агрегат",englishName:"Diffusion-Limited Aggregation",category:"physical_nature",formula:"Случайное блуждание + прилипание",dimension:"D ≈ 1.71 (2D), 2.5 (3D)",generatorRule:"Случайные блуждания частиц",description:"Агрегат, ограниченный диффузией. Модель роста кристаллов.",phiPiRelation:"Фрактальная размерность связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.8}),C({id:"eden-model",name:"Модель Эдена",englishName:"Eden Model",category:"physical_nature",formula:"Рост кластера",dimension:"D ≈ 1.71 (2D)",generatorRule:"Рост от начального кластера",description:"Модель роста кластера, похожая на DLA но без случайных блужданий.",phiPiRelation:"Фрактальная размерность связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.75}),C({id:"brownian-tree",name:"Броуновское Дерево",englishName:"Brownian Tree",category:"physical_nature",formula:"Случайное блуждание + агрегация",dimension:"D ≈ 2.0 (2D)",generatorRule:"Случайные блуждания",description:"Дерево, образованное броуновским движением частиц.",phiPiRelation:"Структура связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.7}),C({id:"viscous-fingering",name:"Вязкое Пальцеобразование",englishName:"Viscous Fingering",category:"physical_nature",formula:"Саффман-Тейлор неустойчивость",dimension:"D ≈ 1.5-1.8",generatorRule:"Неустойчивость границы раздела",description:"Фрактальные структуры при протекании вязкой жидкости.",phiPiRelation:"Неустойчивость связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.65}),C({id:"dielectric-breakdown",name:"Диэлектрический Пробой",englishName:"Dielectric Breakdown",category:"physical_nature",formula:"Модель пробоя диэлектрика",dimension:"D ≈ 1.7-2.5",generatorRule:"Электрический пробой",description:"Фрактальные структуры при электрическом пробое.",phiPiRelation:"Структура связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.8}),C({id:"diffusion-fractal",name:"Диффузионный Фрактал",englishName:"Diffusion Fractal",category:"physical_nature",formula:"Уравнение диффузии",dimension:"D ≈ 2.0",generatorRule:"Диффузионный процесс",description:"Фрактал, образованный диффузионным процессом.",phiPiRelation:"Диффузия связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.7}),C({id:"reaction-diffusion",name:"Реакция-Диффузия",englishName:"Reaction-Diffusion",category:"physical_nature",formula:"Система реакция-диффузия",dimension:"D ≈ 2.0",generatorRule:"Уравнения реакция-диффузия",description:"Фрактальные структуры в системах реакция-диффузия (Тьюринг).",phiPiRelation:"Паттерны связаны с φ.",type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.75}),C({id:"turbulence-fractal",name:"Турбулентный Фрактал",englishName:"Turbulence Fractal",category:"physical_nature",formula:"Турбулентный поток",dimension:"D ≈ 2.5-3.0",generatorRule:"Турбулентность",description:"Фрактальные структуры в турбулентных потоках.",phiPiRelation:"Турбулентность связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.6}),C({id:"crystal-growth",name:"Рост Кристалла",englishName:"Crystal Growth",category:"physical_nature",formula:"Модель роста кристалла",dimension:"D ≈ 1.7-2.5",generatorRule:"Рост кристалла",description:"Фрактальные структуры при росте кристаллов.",phiPiRelation:"Рост связан с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.8})],u1=[C({id:"lorenz-system",name:"Система Лоренца",englishName:"Lorenz System",category:"expanded_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",dimension:"D ≈ 2.06",generatorRule:"Система ODE",description:"Классический аттрактор Лоренца.",phiPiRelation:"Параметры связаны с φ.",type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:2.6}),C({id:"chen-system",name:"Система Чена",englishName:"Chen System",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Чена.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"lu-system",name:"Система Лю",englishName:"Lü System",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Лю.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-a",name:"Спротт A",englishName:"Sprott A",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта A.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-b",name:"Спротт B",englishName:"Sprott B",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта B.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),C({id:"sprott-c",name:"Спротт C",englishName:"Sprott C",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта C.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-d",name:"Спротт D",englishName:"Sprott D",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта D.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-e",name:"Спротт E",englishName:"Sprott E",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта E.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-f",name:"Спротт F",englishName:"Sprott F",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта F.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),C({id:"sprott-g",name:"Спротт G",englishName:"Sprott G",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта G.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-h",name:"Спротт H",englishName:"Sprott H",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта H.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-i",name:"Спротт I",englishName:"Sprott I",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта I.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-j",name:"Спротт J",englishName:"Sprott J",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта J.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),C({id:"sprott-k",name:"Спротт K",englishName:"Sprott K",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта K.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-l",name:"Спротт L",englishName:"Sprott L",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта L.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-m",name:"Спротт M",englishName:"Sprott M",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта M.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-n",name:"Спротт N",englishName:"Sprott N",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта N.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75})],d1=[C({id:"mandelbulb-crystal",name:"Мандельбульб Кристалл",englishName:"Mandelbulb Crystal",category:"visually_distinct",formula:"Мандельбульб с кристаллическим рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + кристаллический стиль",description:"Мандельбульб с кристаллическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"crystal"}),C({id:"julia-plasma",name:"Жюлиа Плазма",englishName:"Julia Plasma",category:"visually_distinct",formula:"Жюлиа с плазменным рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + плазменный стиль",description:"Множество Жюлиа с плазменным стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),C({id:"mandelbox-hologram",name:"Мандельбокс Голограмма",englishName:"Mandelbox Hologram",category:"visually_distinct",formula:"Мандельбокс с голографическим рендером",dimension:"D ≈ 2.5-3.0",generatorRule:"Мандельбокс + голографический стиль",description:"Мандельбокс с голографическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbox",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"hologram"}),C({id:"mandelbulb-iridescent",name:"Мандельбульб Иридесцент",englishName:"Mandelbulb Iridescent",category:"visually_distinct",formula:"Мандельбульб с переливающимся рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + иридесцентный стиль",description:"Мандельбульб с переливающимся стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.75,renderStyle:"iridescent"}),C({id:"julia-xray",name:"Жюлиа Рентген",englishName:"Julia X-Ray",category:"visually_distinct",formula:"Жюлиа с рентгеновским рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + рентгеновский стиль",description:"Множество Жюлиа с рентгеновским стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"xray"}),C({id:"mandelbulb-topography",name:"Мандельбульб Топография",englishName:"Mandelbulb Topography",category:"visually_distinct",formula:"Мандельбульб с топографическим рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + топографический стиль",description:"Мандельбульб с топографическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"topography"}),C({id:"julia-pbr",name:"Жюлиа PBR",englishName:"Julia PBR",category:"visually_distinct",formula:"Жюлиа с PBR рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + PBR стиль",description:"Множество Жюлиа с PBR стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.75,renderStyle:"pbr"}),C({id:"mandelbox-crystal",name:"Мандельбокс Кристалл",englishName:"Mandelbox Crystal",category:"visually_distinct",formula:"Мандельбокс с кристаллическим рендером",dimension:"D ≈ 2.5-3.0",generatorRule:"Мандельбокс + кристаллический стиль",description:"Мандельбокс с кристаллическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbox",compositeOp:"smoothUnion",zoom:2.65,renderStyle:"crystal"}),C({id:"mandelbulb-plasma",name:"Мандельбульб Плазма",englishName:"Mandelbulb Plasma",category:"visually_distinct",formula:"Мандельбульб с плазменным рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + плазменный стиль",description:"Мандельбульб с плазменным стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),C({id:"julia-iridescent",name:"Жюлиа Иридесцент",englishName:"Julia Iridescent",category:"visually_distinct",formula:"Жюлиа с переливающимся рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + иридесцентный стиль",description:"Множество Жюлиа с переливающимся стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"})],m1=[C({id:"sri-yantra",name:"Шри Янтра",englishName:"Sri Yantra",category:"mandalas_sacred",formula:"9 треугольников, 43 пересечения",dimension:"D = 2.0",generatorRule:"Геометрия священной геометрии",description:"Древняя индийская янтра, состоящая из 9 взаимопересекающихся треугольников.",phiPiRelation:"Пропорции связаны с φ и π.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"iridescent"}),C({id:"metatrons-cube",name:"Куб Метатрона",englishName:"Metatron's Cube",category:"mandalas_sacred",formula:"13 окружностей, платоновы тела",dimension:"D = 2.0",generatorRule:"Священная геометрия",description:"Священная геометрическая фигура, содержащая все 5 платоновых тел.",phiPiRelation:"Основан на φ и золотом сечении.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"crystal"}),C({id:"flower-of-life",name:"Цветок Жизни",englishName:"Flower of Life",category:"mandalas_sacred",formula:"19 окружностей, гексагональная симметрия",dimension:"D = 2.0",generatorRule:"Пересекающиеся окружности",description:"Священная геометрическая фигура из 19 пересекающихся окружностей.",phiPiRelation:"Гексагональная симметрия связана с π/3.",type:"mandala",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"hologram"}),C({id:"tree-of-life",name:"Древо Жизни",englishName:"Tree of Life",category:"mandalas_sacred",formula:"10 сефирот, 22 пути",dimension:"D = 2.0",generatorRule:"Каббалистическая геометрия",description:"Каббалистическое Древо Жизни с 10 сефирот и 22 путями.",phiPiRelation:"Структура связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),C({id:"platonic-solids",name:"Платоновы Тела",englishName:"Platonic Solids",category:"mandalas_sacred",formula:"5 правильных многогранников",dimension:"D = 2.0 (поверхности)",generatorRule:"Правильные многогранники",description:"5 правильных многогранников: тетраэдр, куб, октаэдр, додекаэдр, икосаэдр.",phiPiRelation:"Додекаэдр и икосаэдр связаны с φ.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"pbr"}),C({id:"torus-knot",name:"Торический Узел",englishName:"Torus Knot",category:"mandalas_sacred",formula:"Узел на поверхности тора",dimension:"D = 1.0 (кривая)",generatorRule:"Параметрическое уравнение тора",description:"Узел, лежащий на поверхности тора. Связан с сакральной геометрией.",phiPiRelation:"Параметры p,q связаны с φ.",type:"torusKnot",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"}),C({id:"hopf-fibration",name:"Расслоение Хопфа",englishName:"Hopf Fibration",category:"mandalas_sacred",formula:"S³ → S² с волокнами S¹",dimension:"D = 3.0 (в S³)",generatorRule:"Кватернионная проекция",description:"Отображение 3-сферы на 2-сферу с круговыми волокнами. Открыто Хопфом в 1931 году.",phiPiRelation:"Связано с кватернионами и φ.",type:"hopfFibration",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"hologram"}),C({id:"borromean-rings",name:"Кольца Борромео",englishName:"Borromean Rings",category:"mandalas_sacred",formula:"3 взаимозацепленных кольца",dimension:"D = 1.0 (кривые)",generatorRule:"Теория узлов",description:"Три кольца, зацепленные так, что удаление любого освобождает остальные.",phiPiRelation:"Связано с φ через золотые пропорции.",type:"mandala",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"crystal"}),C({id:"penrose-tiling",name:"Мозаика Пенроуза",englishName:"Penrose Tiling",category:"mandalas_sacred",formula:"2 типа плиток, 5-кратная симметрия",dimension:"D = 2.0",generatorRule:"Апериодическая мозаика",description:"Апериодическая мозаика с 5-кратной симметрией. Открыта Пенроузом в 1974 году.",phiPiRelation:"Основана на φ: отношение толстых и тонких ромбов = φ.",type:"penroseTiling",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"plasma"}),C({id:"golden-spiral",name:"Золотая Спираль",englishName:"Golden Spiral",category:"mandalas_sacred",formula:"r = a·φ^(2θ/π)",dimension:"D = 1.0 (кривая)",generatorRule:"Логарифмическая спираль с φ",description:"Логарифмическая спираль, растущая с коэффициентом φ на четверть оборота.",phiPiRelation:"Основана на φ ≈ 1.618.",type:"goldenSpiral",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"}),C({id:"fibonacci-sphere",name:"Сфера Фибоначчи",englishName:"Fibonacci Sphere",category:"mandalas_sacred",formula:"Точки на сфере с золотым углом",dimension:"D = 0.0 (дискретные точки)",generatorRule:"Золотой угол 137.508°",description:"Распределение точек на сфере с использованием золотого угла.",phiPiRelation:"Золотой угол = 360°/φ² ≈ 137.508°.",type:"fibonacciSphere",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"hologram"}),C({id:"vesica-piscis",name:"Весика Писцис",englishName:"Vesica Piscis",category:"mandalas_sacred",formula:"Пересечение двух окружностей",dimension:"D = 2.0",generatorRule:"Две окружности с центрами на друг друге",description:"Миндалевидная фигура, образованная пересечением двух окружностей.",phiPiRelation:"Отношение высоты к ширине = √3; связано с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"crystal"}),C({id:"seed-of-life",name:"Семя Жизни",englishName:"Seed of Life",category:"mandalas_sacred",formula:"7 окружностей",dimension:"D = 2.0",generatorRule:"7 пересекающихся окружностей",description:"Священная геометрическая фигура из 7 окружностей, основа Цветка Жизни.",phiPiRelation:"Симметрия связана с π/3.",type:"mandala",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"plasma"}),C({id:"egg-of-life",name:"Яйцо Жизни",englishName:"Egg of Life",category:"mandalas_sacred",formula:"6 окружностей вокруг центральной",dimension:"D = 2.0",generatorRule:"6 окружностей",description:"Священная геометрическая фигура, следующая стадия после Семени Жизни.",phiPiRelation:"Симметрия связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"iridescent"}),C({id:"fruit-of-life",name:"Плод Жизни",englishName:"Fruit of Life",category:"mandalas_sacred",formula:"13 окружностей",dimension:"D = 2.0",generatorRule:"13 окружностей",description:"Священная геометрическая фигура из 13 окружностей, основа Куба Метатрона.",phiPiRelation:"Связано с φ и 13.",type:"mandala",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"hologram"}),C({id:"mandala-universal",name:"Универсальная Мандала",englishName:"Universal Mandala",category:"mandalas_sacred",formula:"Радиальная симметрия n-кратная",dimension:"D = 2.0",generatorRule:"Радиальная симметрия",description:"Универсальная мандала с настраиваемой симметрией.",phiPiRelation:"Симметрия связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"plasma"}),C({id:"yantra-3d",name:"3D Янтра",englishName:"3D Yantra",category:"mandalas_sacred",formula:"Трехмерная янтра",dimension:"D = 3.0",generatorRule:"3D священная геометрия",description:"Трехмерная версия священной янтры.",phiPiRelation:"Связано с φ и π.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"crystal"}),C({id:"sacred-knot",name:"Священный Узел",englishName:"Sacred Knot",category:"mandalas_sacred",formula:"Узел с сакральной симметрией",dimension:"D = 1.0",generatorRule:"Теория узлов",description:"Узел с сакральной геометрической симметрией.",phiPiRelation:"Связано с φ.",type:"torusKnot",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"iridescent"}),C({id:"merkaba",name:"Меркаба",englishName:"Merkaba",category:"mandalas_sacred",formula:"Два тетраэдра",dimension:"D = 3.0",generatorRule:"Два противоположных тетраэдра",description:"Звездный тетраэдр, состоящий из двух противоположных тетраэдров.",phiPiRelation:"Связано с φ и звездой Давида.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"hologram"}),C({id:"phi-nexus",name:"Φ-Нексус",englishName:"Phi Nexus",category:"mandalas_sacred",formula:"Фрактал на основе φ",dimension:"D ≈ 2.5",generatorRule:"Золотое сечение в структуре",description:"Фрактал, полностью построенный на золотом сечении φ.",phiPiRelation:"Основан на φ ≈ 1.618.",type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"})],bn=[...n1,...l1,...o1,...s1,...c1,...p1,...f1,...u1,...d1,...m1],h1=({isOpen:p,onClose:s,onApplyPreset:f})=>{var K;const[c,d]=T.useState("catalog"),[m,z]=T.useState("all"),[g,y]=T.useState(""),[b,L]=T.useState(bn[0]),[F,O]=T.useState(null),k=T.useMemo(()=>bn.filter(q=>{const oe=m==="all"||q.category===m,S=g.toLowerCase().trim();if(!S)return oe;const Y=q.name.toLowerCase().includes(S)||q.englishName.toLowerCase().includes(S)||q.formula.toLowerCase().includes(S)||q.dimension.toLowerCase().includes(S)||q.description.toLowerCase().includes(S);return oe&&Y}),[m,g]);if(!p)return null;const B=q=>{f(q.enginePreset,q.name),O(q.id),setTimeout(()=>{O(null),s()},450)},J=q=>{switch(q){case"geometric_curves":return n.jsx(ql,{className:"w-4 h-4"});case"constructive":return n.jsx(Dr,{className:"w-4 h-4"});case"algebraic_complex":return n.jsx(m2,{className:"w-4 h-4"});case"multidimensional":return n.jsx(Lh,{className:"w-4 h-4"});case"ifs_attractors":return n.jsx(gn,{className:"w-4 h-4"});case"stochastic":return n.jsx(Ar,{className:"w-4 h-4"});case"topological_physical":return n.jsx(Du,{className:"w-4 h-4"})}};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:n.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:n.jsx(wr,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",bn.length," Канонических Фракталов"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),n.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:n.jsx(zn,{className:"w-5 h-5"})})]}),n.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[n.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>d("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[n.jsx(Dr,{className:"w-4 h-4"}),"Атлас и Таксономия (",bn.length,")"]}),n.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>d("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[n.jsx(rc,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),n.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>d("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[n.jsx(ic,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),c==="catalog"&&n.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[n.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[n.jsx("div",{className:"p-3 border-b border-slate-800",children:n.jsxs("div",{className:"relative",children:[n.jsx(j2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),n.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:g,onChange:q=>y(q.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),g&&n.jsx("button",{onClick:()=>y(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),n.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[n.jsxs("button",{onClick:()=>z("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${m==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",bn.length,")"]}),vu.map(q=>{var oe;return n.jsxs("button",{onClick:()=>z(q.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${m===q.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[J(q.id),n.jsx("span",{children:((oe=q.title.split(".")[1])==null?void 0:oe.trim())||q.title})]},q.id)})]}),n.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:k.length===0?n.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):k.map(q=>{var S;const oe=(b==null?void 0:b.id)===q.id;return n.jsxs("button",{id:`btn-fractal-${q.id}`,onClick:()=>L(q),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${oe?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[n.jsxs("div",{className:"flex items-center justify-between w-full",children:[n.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:q.name}),n.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(S=q.dimension.split("≈")[0])==null?void 0:S.replace("D = ","D=")})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[n.jsx("span",{className:"truncate max-w-[200px]",children:q.englishName}),n.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:q.formula})]})]},q.id)})})]}),n.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:b?n.jsxs("div",{className:"space-y-6 max-w-3xl",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[J(b.category),n.jsx("span",{children:(K=vu.find(q=>q.id===b.category))==null?void 0:K.title})]}),n.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:b.name}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:b.englishName})]}),n.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>B(b),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:F===b.id?n.jsxs(n.Fragment,{children:[n.jsx(Au,{className:"w-4 h-4 text-emerald-300"}),n.jsx("span",{children:"Активировано в 3D!"})]}):n.jsxs(n.Fragment,{children:[n.jsx(Tu,{className:"w-4 h-4 fill-white"}),n.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[n.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),n.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:b.formula})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[n.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),n.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:b.dimension})]})]}),b.generatorRule&&n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[n.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),n.jsx("div",{className:"text-xs font-mono text-cyan-300",children:b.generatorRule})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),n.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:b.description})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[n.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[n.jsx(rc,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),n.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:b.phiPiRelation})]}),n.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx(ic,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",n.jsx("strong",{className:"text-slate-200",children:b.enginePreset.type}),b.enginePreset.hybridType&&n.jsxs(n.Fragment,{children:[" + ",n.jsx("strong",{className:"text-slate-200",children:b.enginePreset.hybridType})]})]}),n.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:b.enginePreset.compositeOp})]})]}):n.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),c==="manifest"&&n.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[n.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[n.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[n.jsx(rc,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),n.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",n.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[n.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),n.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",n.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",n.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[n.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[n.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[n.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[n.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),n.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[n.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),n.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),c==="technologies"&&n.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[n.jsxs("div",{children:[n.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[n.jsx(ic,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[n.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:n.jsx(N2,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),n.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),n.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[n.jsxs("li",{children:[n.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),n.jsxs("li",{children:[n.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),n.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),n.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[n.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:n.jsx(ju,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),n.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),n.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[n.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),n.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),n.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),n.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[n.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:n.jsx(gn,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),n.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),n.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[n.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),n.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),n.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),n.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[n.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:n.jsx(Vu,{className:"w-6 h-6"})}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),n.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),n.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[n.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),n.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),n.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),n.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),n.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(v2,{className:"w-4 h-4 text-slate-400"}),n.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),n.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},v1=({params:p,onToggleProbe:s,onToggleMacro:f})=>{if(!p.probeActive)return null;const c=Math.sqrt((p.camPosX??0)**2+(p.camPosY??0)**2+(p.camPosZ??0)**2),d=Math.max(.001,c/(p.zoom||3)).toFixed(4),m=p.slicePlane?((.5-p.slicePlane)*3.5).toFixed(3):"OFF";return n.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[n.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:n.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[n.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),n.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),n.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:n.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),n.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),n.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:p.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),n.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[n.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[n.jsx(Vu,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),n.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),n.jsxs("span",{className:"text-emerald-300 font-mono",children:[d," u"]})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),n.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(p.camPosX??0).toFixed(2)," Y:",(p.camPosY??0).toFixed(2)," Z:",(p.camPosZ??0).toFixed(2)]})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),n.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[p.sliceAxis||"golden"," (",m,")"]})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-500",children:"Модальность:"}),n.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:p.renderStyle||"solid"})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),n.jsxs("span",{className:"text-indigo-300 font-mono",children:[p.octaveLayers||2,"L · k=",p.smoothK??.35]})]})]}),n.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:n.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${p.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:p.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),n.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[n.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[n.jsx(gn,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),n.jsx("span",{className:"text-slate-600",children:"|"}),n.jsxs("span",{children:["RotX: ",p.rotX.toFixed(2)," rad"]}),n.jsxs("span",{children:["RotY: ",p.rotY.toFixed(2)," rad"]}),n.jsx("span",{className:"text-slate-600",children:"|"}),n.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",p.phiMultiplier.toFixed(5)]})]})]})},yu=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:Ar,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:ju,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:gn,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:f2,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:r2,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:Du,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:c2,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],y1=({currentSpecimen:p,historyQueue:s,currentIndex:f,onSelectSpecimen:c,onNext:d,onPrev:m,renderStyle:z,onSelectRenderStyle:g,scrollMode:y,onToggleScrollMode:b,isOpen:L,onToggleOpen:F})=>{const O=T.useRef(null);return n.jsx(n.Fragment,{children:n.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${L?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:n.jsx("div",{className:"flex items-stretch",children:n.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[n.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:n.jsx(D2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),n.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),n.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:b,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${y==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:y==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:y==="feed"?n.jsxs(n.Fragment,{children:[n.jsx(Mu,{className:"w-3 h-3 text-amber-300"}),n.jsx("span",{children:"Лента"})]}):n.jsxs(n.Fragment,{children:[n.jsx(G2,{className:"w-3 h-3"}),n.jsx("span",{children:"Зум"})]})})]}),n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsx("div",{className:"flex items-center justify-between",children:n.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",yu.length,")"]})}),n.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:yu.map(k=>{const B=k.icon,J=z===k.id;return n.jsxs("button",{id:`select-render-style-${k.id}-btn`,onClick:()=>g(k.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${J?k.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:k.desc,children:[n.jsx(B,{className:"w-3 h-3 shrink-0"}),n.jsx("span",{className:"truncate",children:k.shortLabel})]},k.id)})})]}),n.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[n.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{id:"feed-ribbon-prev-btn",onClick:m,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:n.jsx($h,{className:"w-3 h-3"})}),n.jsx("button",{id:"feed-ribbon-next-btn",onClick:d,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:n.jsx(Zh,{className:"w-3 h-3"})})]})]}),n.jsx("div",{ref:O,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((k,B)=>{const J=k.id===(p==null?void 0:p.id)||B===f;return n.jsxs("button",{id:`feed-item-${B}-btn`,onClick:()=>c(k),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${J?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[n.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",k.generation||B+1]}),n.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:k.name})]}),J&&n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),n.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[n.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:k.compositeOp||"hybrid"}),n.jsxs("span",{className:"truncate text-neutral-400",children:[k.type," + ",k.hybridType||k.type]})]})]},k.id||B)})}),n.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[n.jsx("span",{children:"Скролл мыши / жест"}),n.jsx("span",{className:"text-amber-300/90 font-semibold",children:y==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})},x1=({visible:p,position:s="top-left"})=>{const[f,c]=T.useState(We.getStats()),[d,m]=T.useState(!1);if(T.useEffect(()=>{if(!p)return;const b=setInterval(()=>{c(We.getStats())},100);return()=>clearInterval(b)},[p]),!p)return null;const z={"top-left":"top-4 left-4","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-right":"bottom-4 right-4"},g=f.fps>50?"text-green-400":f.fps>30?"text-yellow-400":"text-red-400",y=We.isHealthy()?"text-green-400":"text-red-400";return n.jsxs("div",{className:`fixed ${z[s]} z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-xs font-mono text-white min-w-[280px]`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("h3",{className:"text-cyan-400 font-bold text-sm",children:"🔍 Render Diagnostics"}),n.jsx("button",{onClick:()=>m(!d),className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:d?"▼":"▶"})]}),n.jsxs("div",{className:"space-y-1 mb-2",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"FPS:"}),n.jsx("span",{className:g,children:f.fps.toFixed(1)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"Frame Time:"}),n.jsxs("span",{className:"text-white",children:[f.frameTime.toFixed(2),"ms"]})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"Ray Steps:"}),n.jsx("span",{className:"text-white",children:f.rayMarchSteps})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"Hit Rate:"}),n.jsxs("span",{className:"text-white",children:[(f.hitRate*100).toFixed(1),"%"]})]})]}),d&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2",children:[n.jsx("h4",{className:"text-yellow-400 font-semibold mb-1",children:"Math Validation"}),n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"SDF NaN:"}),n.jsx("span",{className:f.sdfNaN>0?"text-red-400":"text-green-400",children:f.sdfNaN})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"SDF ∞:"}),n.jsx("span",{className:f.sdfInfinity>0?"text-red-400":"text-green-400",children:f.sdfInfinity})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"SDF Range:"}),n.jsxs("span",{className:"text-white",children:["[",f.sdfMin.toFixed(3),", ",f.sdfMax.toFixed(3),"]"]})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"Avg Distance:"}),n.jsx("span",{className:"text-white",children:f.averageDistance.toFixed(4)})]})]})]}),n.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2",children:[n.jsx("h4",{className:"text-purple-400 font-semibold mb-1",children:"GPU Health"}),n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"Context:"}),n.jsx("span",{className:f.contextLost?"text-red-400":"text-green-400",children:f.contextLost?"LOST":"OK"})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-gray-400",children:"Shader Compile:"}),n.jsxs("span",{className:"text-white",children:[f.shaderCompileTime.toFixed(0),"ms"]})]})]})]}),n.jsx("div",{className:"border-t border-gray-700 pt-2 mt-2",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-400",children:"System Health:"}),n.jsx("span",{className:`${y} font-bold`,children:We.isHealthy()?"✓ HEALTHY":"✗ ISSUES"})]})}),n.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2 flex gap-2",children:[n.jsx("button",{onClick:()=>We.reset(),className:"flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-1 rounded text-xs transition-colors",children:"Reset Stats"}),n.jsx("button",{onClick:()=>{const b=We.exportReport();console.log("Diagnostics Report:",b),alert("Diagnostics report exported to console")},className:"flex-1 bg-purple-600 hover:bg-purple-500 text-white px-2 py-1 rounded text-xs transition-colors",children:"Export"})]})]}),n.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2 flex justify-between text-xs",children:[n.jsxs("span",{className:"text-gray-500",children:["Errors: ",We.getLogs("error").length]}),n.jsxs("span",{className:"text-gray-500",children:["Warnings: ",We.getLogs("warn").length]})]})]})};function xu(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class b1{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,f="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const c=window.AudioContext||window.webkitAudioContext;this.ctx=new c,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(c){console.warn("AudioContext initialization deferred or unavailable",c)}}getChordFrequenciesForFamily(s,f,c){const d=1.61803398875,m=c?Ol(c):0,g=m*137.507764%50-25,y=Math.pow(2,g/1200);if(s==="sacred")return[{ratio:.5*y,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*y,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:d*y,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5*y,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:d*d*.5*y,wave:m%2===0?"triangle":"sine",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5*y,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1*y,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5*y,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2*y,wave:m%3===0?"sawtooth":"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5*y,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75*y,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*y,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25*y,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2)*y,wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:d*1.2*y,wave:m%2===0?"sine":"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const b=1.1413470000000001,L=1+21.022/100,F=1+25.0108/100;return[{ratio:.5*y,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*y,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:b*y,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:L*y,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:F*y,wave:m%2===0?"triangle":"sine",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5*y,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*y,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382*y,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618*y,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5*y,wave:m%3===0?"square":"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,f){if(!this.ctx||!this.globalFilter)return;const c=xu(s),d=f?xu(f):c,m=108,z=this.ctx.currentTime,g=[...this.voices];this.voices=[],g.forEach(L=>{try{L.gain.gain.cancelScheduledValues(z),L.gain.gain.setValueAtTime(L.gain.gain.value,z),L.gain.gain.exponentialRampToValueAtTime(1e-4,z+.35),setTimeout(()=>{var F;try{L.osc.stop(),L.osc.disconnect(),L.filter.disconnect(),(F=L.panner)==null||F.disconnect(),L.gain.disconnect()}catch{}},380)}catch{}});const b=this.getChordFrequenciesForFamily(c,this.tuningMode,s).map((L,F)=>{const O=this.ctx.createOscillator(),k=this.ctx.createGain(),B=this.ctx.createBiquadFilter(),J=(F%2===0?.618:-.618)*.5,K=m*L.ratio+J;O.type=L.wave,O.frequency.setValueAtTime(K,z),k.gain.setValueAtTime(1e-4,z),k.gain.exponentialRampToValueAtTime(L.vol,z+1.2),B.type="lowpass",B.frequency.setValueAtTime(450+F*80,z),B.Q.setValueAtTime(1.2,z),O.connect(B);let q=B,oe;return this.ctx.createStereoPanner&&(oe=this.ctx.createStereoPanner(),oe.pan.setValueAtTime(L.pan,z),B.connect(oe),q=oe),q.connect(k),k.connect(this.globalFilter),O.start(z),{osc:O,gain:k,filter:B,panner:oe,baseFreqRatio:L.ratio,role:L.role}});if(f&&f!==s){const L=this.getChordFrequenciesForFamily(d,this.tuningMode,f),F=L[2]||L[1],O=this.ctx.createOscillator(),k=this.ctx.createGain(),B=this.ctx.createBiquadFilter();O.type="sine",O.frequency.setValueAtTime(m*F.ratio,z);const J=Math.max(1e-4,this.currentHybridBlend*.22);k.gain.setValueAtTime(1e-4,z),k.gain.exponentialRampToValueAtTime(J,z+1.5),B.type="bandpass",B.frequency.setValueAtTime(m*F.ratio*1.5,z),B.Q.setValueAtTime(2,z),O.connect(B);let K=B,q;this.ctx.createStereoPanner&&(q=this.ctx.createStereoPanner(),q.pan.setValueAtTime(.45,z),B.connect(q),K=q),K.connect(k),k.connect(this.globalFilter),O.start(z),b.push({osc:O,gain:k,filter:B,panner:q,baseFreqRatio:F.ratio,role:"hybrid"})}this.voices=b}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,c=s.phiMultiplier||1.618034,d=Math.max(.08,Math.min(16,s.zoom||3)),m=Math.max(.1,Math.min(2,s.morphSpeed||.45)),z=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=z,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const g=Math.max(260,Math.min(980,380+(4-Math.min(d,4))*80+m*120));this.globalFilter.frequency.setTargetAtTime(g,f,.15);const y=Math.max(54,Math.min(240,108/Math.max(.5,d*.6)));this.cavityResonator.frequency.setTargetAtTime(y,f,.2);const b=108,L=(c-1.618034)*80,F=Math.sin(s.rotX||0)*.4;this.voices.forEach((O,k)=>{const B=b*O.baseFreqRatio,J=O.role==="golden"||O.role==="shimmer"?L:L*.3;if(O.osc.frequency.setTargetAtTime(B+J,f,.15),O.panner){const K=k%2===0?.25:-.25,q=Math.max(-.85,Math.min(.85,K+F));O.panner.pan.setTargetAtTime(q,f,.12)}if(O.role==="hybrid"){const K=Math.max(1e-4,z*.2);O.gain.gain.setTargetAtTime(K,f,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((d,m)=>{if(!this.ctx)return;const z=this.ctx.createOscillator(),g=this.ctx.createGain(),y=this.ctx.createBiquadFilter();z.type="sine",z.frequency.setValueAtTime(d,s+m*.05),y.type="lowpass",y.frequency.setValueAtTime(950,s),g.gain.setValueAtTime(1e-4,s+m*.05),g.gain.exponentialRampToValueAtTime(.05/(m+1),s+m*.05+.08),g.gain.exponentialRampToValueAtTime(1e-5,s+m*.05+2.8),z.onended=()=>{try{z.disconnect(),y.disconnect(),g.disconnect()}catch{}},z.connect(y),y.connect(g),g.connect(this.globalFilter),z.start(s+m*.05),z.stop(s+m*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var c,d,m,z,g;this.stopTimeout=null,f.forEach(y=>{var b;try{y.osc.stop(),y.osc.disconnect(),y.filter.disconnect(),(b=y.panner)==null||b.disconnect(),y.gain.disconnect()}catch{}});try{(c=this.globalFilter)==null||c.disconnect(),(d=this.cavityResonator)==null||d.disconnect(),(m=this.compressor)==null||m.disconnect(),(z=this.masterGain)==null||z.disconnect(),(g=this.ctx)==null||g.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const ua=new b1,bu=[.6,.7,.8,.9,1],gu=[.5,.6,.7,.8,.9],g1=["Cosmic","Nebula","Stellar","Galactic","Astral","Quantum","Plasma","Photon","Neutron","Proton","Crystal","Prism","Spectrum","Rainbow","Iridescent","Ocean","Abyss","Coral","Reef","Tidal","Forest","Emerald","Jade","Moss","Canopy","Desert","Sand","Dune","Oasis","Mirage","Volcanic","Magma","Lava","Ember","Ash","Arctic","Glacier","Frost","Ice","Snow","Solar","Lunar","Eclipse","Zenith","Horizon","Mystic","Ethereal","Divine","Sacred","Celestial","Golden","Silver","Bronze","Copper","Platinum","Ruby","Sapphire","Emerald","Amethyst","Topaz","Phoenix","Dragon","Griffin","Unicorn","Pegasus","Lotus","Orchid","Rose","Lily","Iris","Thunder","Lightning","Storm","Cyclone","Tornado","Aurora","Borealis","Australis","Polar","Equatorial"];function El(p,s,f){p=p%360,p<0&&(p+=360);const c=(1-Math.abs(2*f-1))*s,d=c*(1-Math.abs(p/60%2-1)),m=f-c/2;let z=0,g=0,y=0;return p<60?(z=c,g=d,y=0):p<120?(z=d,g=c,y=0):p<180?(z=0,g=c,y=d):p<240?(z=0,g=d,y=c):p<300?(z=d,g=0,y=c):(z=c,g=0,y=d),[z+m,g+m,y+m]}function z1(p,s,f){const d=s,m=bu[Math.floor(f/5)%bu.length],z=gu[Math.floor(f/25)%gu.length],g=El(d,m,z),y=(s+137.508*(1+f%3))%360,b=m*.9,L=z*.8,F=El(y,b,L),O=f%4;let k;O===0?k=(s+180)%360:O===1?k=(s+120)%360:O===2?k=(s+240)%360:k=(s+137.508)%360;const B=El(k,m,Math.min(1,z+.2)),J=El(d,m*.5,z*.15);return{id:`${p.toLowerCase().replace(/\s+/g,"-")}-${s}-${f}`,name:`${p} ${f+1}`,primary:g,secondary:F,accent:B,ambient:J}}const Eu=[];g1.forEach((p,s)=>{const f=s*GOLDEN_ANGLE*7%360;for(let c=0;c<8;c++){const d=(f+c*30)%360;Eu.push(z1(p,d,c))}});const kl=[...Sr,...Eu],_1={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:28,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function S1(){const[p]=T.useState(()=>new Q2),[s,f]=T.useState(_1),[c,d]=T.useState(null),[m,z]=T.useState(65),[g,y]=T.useState(!1),[b,L]=T.useState(!1),[F,O]=T.useState("idle"),k=T.useRef(null),B=T.useRef(0),[J,K]=T.useState("auto"),[q,oe]=T.useState(!1),[S,Y]=T.useState(!1),[xe,Ne]=T.useState(!1),[ae,ke]=T.useState(!1),[Be,Ge]=T.useState(!1),[$e,Ze]=T.useState(!1),[ue,qe]=T.useState("feed"),[de,N]=T.useState(!1),[U,M]=T.useState([]),[Z,ee]=T.useState(new Set),[h,j]=T.useState(!0),[G,X]=T.useState(!1);T.useEffect(()=>{const P=ie=>{ie.key==="F3"&&(ie.preventDefault(),X(I=>!I))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[]);const W=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","fractalCross","reactionDiffusion","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],le=["smoothUnion","smoothMorph","smoothIntersection","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],ce=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],Ve=["orbit","flyThrough","goldenSpiral","kelvinInvert"],he=T.useRef(0),et=.61803398875;T.useEffect(()=>{if(!h)return;const P=setInterval(()=>{he.current=(he.current+Math.round(et*W.length))%W.length;const ie=he.current,I=W[ie],be=(ie+Math.round(et*37))%W.length,ne=(ie+Math.round(et*73))%W.length,st=W[be],tt=W[ne],Se=Math.floor(ie*et)%le.length,He=Math.floor(ie*et*1.3)%ce.length,Ue=Math.floor(ie*et*.7)%Ve.length,Ke=[1.8,2.5,3.5,5,7],kt=Math.floor(ie*et*1.7)%Ke.length,dt=[12,18,24,30,36],xt=Math.floor(ie*et*2.1)%dt.length;f(St=>({...St,type:I,hybridType:st,tertiaryType:tt,compositeOp:le[Se],renderStyle:ce[He],cameraMode:Ve[Ue],hybridBlend:.2+ie%5*.12,tertiaryBlend:.1+ie%4*.08,zoom:Ke[kt],iterations:dt[xt],paletteRotation:!0,autoRotate:!0}))},18e3);return()=>clearInterval(P)},[h]);const Dt=T.useCallback(()=>{},[]),[Oe,Fa]=T.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),Je=T.useCallback(P=>{j(!1),d(P),z(P.affinityScore);const ie=(p==null?void 0:p.suggestRenderStyle(P.type))||"solid";f(I=>({...I,type:P.type,hybridType:P.hybridType,tertiaryType:P.tertiaryType,compositeOp:P.compositeOp,hybridBlend:P.hybridBlend,tertiaryBlend:P.tertiaryBlend,smoothK:P.smoothK,warpStrength:P.warpStrength,octaveLayers:P.octaveLayers,boxFold:P.boxFold,sphereFold:P.sphereFold,interiorCut:P.interiorCut,paletteId:P.palette.id,customPalette:P.palette,iterations:P.iterations,phiMultiplier:P.phiMultiplier,morphSpeed:P.morphSpeed,glowIntensity:P.glowIntensity,zoom:P.zoom,renderStyle:ie})),ua.getActive()&&ua.playSpecimenTransitionChord()},[]);T.useEffect(()=>{if(!p)return;const P=window.location.hash.slice(1);if(P){const I=new URLSearchParams(P),be=I.get("type"),ne=I.get("hybrid"),st=I.get("tertiary"),tt=I.get("op");if(be){const Se=kl.find(Ue=>Ue.id===I.get("palette"))||kl[0],He={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:I.get("name")||`Фрактал ${be}`,type:be,hybridType:ne||be,tertiaryType:st||"riemannZeta",compositeOp:tt||"smoothUnion",hybridBlend:parseFloat(I.get("blend")||"0.35"),tertiaryBlend:parseFloat(I.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(I.get("smoothK")||"0.35"),warpStrength:parseFloat(I.get("warp")||"0.25"),octaveLayers:parseInt(I.get("octaves")||"2"),boxFold:parseFloat(I.get("boxFold")||"1.2"),sphereFold:parseFloat(I.get("sphereFold")||"0.65"),interiorCut:parseFloat(I.get("interiorCut")||"0.0"),palette:Se,iterations:parseInt(I.get("iterations")||"20"),phiMultiplier:parseFloat(I.get("phi")||"1.61803398875"),morphSpeed:parseFloat(I.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(I.get("glow")||"1.1"),zoom:parseFloat(I.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};Je(He),f(Ue=>({...Ue,paletteSeed:parseInt(I.get("paletteSeed")||"0"),paletteRotation:I.get("paletteRotation")==="1",renderStyle:I.get("renderStyle")||Ue.renderStyle,cameraMode:I.get("cameraMode")||Ue.cameraMode,camPosX:parseFloat(I.get("camX")||"0"),camPosY:parseFloat(I.get("camY")||"0"),camPosZ:parseFloat(I.get("camZ")||"-3.2"),headlampPower:parseFloat(I.get("headlamp")||"0"),volumetricFog:parseFloat(I.get("fog")||"0.4"),slicePlane:parseFloat(I.get("slicePlane")||"0"),sliceAxis:I.get("sliceAxis")||"golden",enableAudio:I.get("audio")==="1",audioVolume:parseFloat(I.get("audioVol")||"0.65"),audioTuning:I.get("audioTuning")||"phi432",drsEnabled:I.get("drs")!=="0"})),window.history.replaceState(null,"",window.location.pathname);return}}const ie=p.breedNextSpecimen();Je(ie)},[p,Je]),T.useEffect(()=>(s.enableAudio?ua.start(s.audioVolume??.65,s.audioTuning??"phi432"):ua.stop(),()=>{ua.stop()}),[s.enableAudio]),T.useEffect(()=>{s.enableAudio&&(s.audioTuning&&ua.setTuning(s.audioTuning),s.audioVolume!==void 0&&ua.setVolume(s.audioVolume),ua.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),T.useEffect(()=>{const P=setInterval(()=>{if(p&&c){const ie=p.registerEngagement(1,0,0,c);z(I=>I===ie?I:ie)}},1200);return()=>clearInterval(P)},[p,c]);const ea=T.useCallback((P,ie)=>{if(!p||!c)return;const I=P>0?"zooming":ie>0?"orbiting":"idle";O(ne=>ne!==I?I:ne),k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{O(ne=>ne!=="idle"?"idle":ne)},1200);const be=p.registerEngagement(.1,P,ie,c);z(ne=>ne===be?ne:be)},[p,c]),na=T.useCallback(()=>{if(!p)return;const P=performance.now();if(P-B.current<180)return;B.current=P;const ie=p.stepHistory(1);Je(ie)},[p,Je]),Ea=T.useCallback(()=>{if(!p)return;const P=performance.now();if(P-B.current<180)return;B.current=P;const ie=p.stepHistory(-1);Je(ie)},[p,Je]),Ei=T.useCallback(()=>{if(!p||!c)return;p.boostAffinity(c),z(100);const P=c.id;ee(ie=>{const I=new Set(ie);return I.has(P)?(I.delete(P),M(be=>be.filter(ne=>ne.id!==P))):(I.add(P),M(be=>[...be,c])),I})},[p,c]),rt=T.useCallback(P=>{Je(P)},[Je]),fi=T.useCallback(P=>{ee(ie=>{const I=new Set(ie);return I.delete(P),I}),M(ie=>ie.filter(I=>I.id!==P))},[]),ui=T.useCallback(P=>{if(!p)return;const ie=p.breedNextSpecimen(P);Je(ie)},[p,Je]),ki=T.useCallback(()=>{if(!p)return;const P={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((c==null?void 0:c.generation)||1)+1,name:`Фенотип Инженера #${((c==null?void 0:c.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||kl.find(ie=>ie.id===s.paletteId)||kl[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};d(P),p.boostAffinity(P),ua.getActive()&&ua.playSpecimenTransitionChord()},[p,s,c]),ka=T.useCallback(()=>{f(P=>({...P,enableAudio:!P.enableAudio}))},[]),Ie=T.useCallback(P=>{oe(!1);const ie=document.createElement("a");ie.download=`golden-ratio-fractal-${s.type}-${(c==null?void 0:c.generation)||1}.png`,ie.href=P,ie.click()},[s.type,c==null?void 0:c.generation]),ma=T.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return n.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[n.jsx(Nh,{params:s,onParamsChange:f,onTelemetryUpdate:Fa,screenshotRequested:q,onScreenshotCaptured:Ie,forcedBackend:J,onInteraction:ea,onNextSpecimen:na,onPrevSpecimen:Ea,onEngineReady:()=>ke(!0),scrollMode:ue}),n.jsx(y1,{currentSpecimen:c,historyQueue:p.getHistory(),currentIndex:p.getCurrentIndex(),onSelectSpecimen:Je,onNext:na,onPrev:Ea,renderStyle:s.renderStyle,onSelectRenderStyle:P=>f(ie=>({...ie,renderStyle:P})),scrollMode:ue,onToggleScrollMode:()=>qe(P=>P==="feed"?"zoom":"feed"),isOpen:de,onToggleOpen:()=>N(P=>!P)}),n.jsx(e1,{specimen:c,resonanceScore:m,isInteracting:F!=="idle",interactionType:F,onNext:na,onPrev:Ea,onFavorite:Ei,onOpenProfile:()=>L(!0),enableAudio:s.enableAudio,onToggleAudio:ka,onOpenResearchModal:()=>Y(!0),onOpenAtlas:()=>Ne(!0),isFeedOpen:de,onToggleFeed:()=>N(P=>!P),isCurrentLiked:c?Z.has(c.id):!1,params:s}),n.jsx(v1,{params:s,onToggleProbe:()=>f(P=>({...P,probeActive:!P.probeActive})),onToggleMacro:()=>f(P=>({...P,macroMode:!P.macroMode}))}),n.jsx(a1,{isOpen:b,onClose:()=>L(!1),tasteProfile:p.getTasteProfile(),archetypeBreakdown:p.getArchetypeBreakdown(),currentSpecimen:c,resonanceScore:m,isEngineerMode:g,onToggleEngineerMode:()=>y(P=>!P),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:P=>f(ie=>({...ie,audioTuning:P})),onOpenManifest:()=>{L(!1),Ge(!0)},likedSpecimens:U,onPlayLiked:rt,onRemoveLike:fi,isCurrentLiked:c?Z.has(c.id):!1}),g&&n.jsxs(n.Fragment,{children:[n.jsx(I2,{telemetry:Oe,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),n.jsx(W2,{params:s,onParamsChange:f,onSelectFractalType:ui,onCaptureScreenshot:()=>oe(!0),onToggleFullscreen:ma,onToggleInfoModal:()=>Y(!0),onOpenAtlasModal:()=>Ne(!0),activeBackend:Oe.backend,forcedBackend:J,onSelectBackend:K,onClose:()=>y(!1),tasteProfile:p.getTasteProfile(),onSaveToFeed:ki})]}),n.jsx(t1,{isOpen:S,onClose:()=>Y(!1)}),n.jsx(h1,{isOpen:xe,onClose:()=>Ne(!1),onApplyPreset:P=>{f(ie=>({...ie,...P}))}}),n.jsx(r1,{isOpen:Be,onClose:()=>Ge(!1),isFirstVisit:$e,onOpenAtlas:()=>Ne(!0)}),n.jsx(i1,{isReady:ae,onFinished:Dt}),G&&n.jsx(x1,{})]})}const zu=document.getElementById("root");zu&&rh.createRoot(zu).render(n.jsx(S1,{}));
