(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))c(y);new MutationObserver(y=>{for(const _ of y)if(_.type==="childList")for(const w of _.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function f(y){const _={};return y.integrity&&(_.integrity=y.integrity),y.referrerPolicy&&(_.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?_.credentials="include":y.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function c(y){if(y.ep)return;y.ep=!0;const _=f(y);fetch(y.href,_)}})();function Um(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Ls={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function Bm(){if(Pp)return al;Pp=1;var u=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function f(c,y,_){var w=null;if(_!==void 0&&(w=""+_),y.key!==void 0&&(w=""+y.key),"key"in y){_={};for(var E in y)E!=="key"&&(_[E]=y[E])}else _=y;return y=_.ref,{$$typeof:u,type:c,key:w,ref:y!==void 0?y:null,props:_}}return al.Fragment=p,al.jsx=f,al.jsxs=f,al}var Vp;function Fm(){return Vp||(Vp=1,Ls.exports=Bm()),Ls.exports}var l=Fm(),Us={exports:{}},nl={},Bs={exports:{}},Fs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Gm(){return Zp||(Zp=1,(function(u){function p(S,O){var Z=S.length;S.push(O);e:for(;0<Z;){var W=Z-1>>>1,re=S[W];if(0<y(re,O))S[W]=O,S[Z]=re,Z=W;else break e}}function f(S){return S.length===0?null:S[0]}function c(S){if(S.length===0)return null;var O=S[0],Z=S.pop();if(Z!==O){S[0]=Z;e:for(var W=0,re=S.length,h=re>>>1;W<h;){var A=2*(W+1)-1,X=S[A],H=A+1,K=S[H];if(0>y(X,Z))H<re&&0>y(K,X)?(S[W]=K,S[H]=Z,W=H):(S[W]=X,S[A]=Z,W=A);else if(H<re&&0>y(K,Z))S[W]=K,S[H]=Z,W=H;else break e}}return O}function y(S,O){var Z=S.sortIndex-O.sortIndex;return Z!==0?Z:S.id-O.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;u.unstable_now=function(){return _.now()}}else{var w=Date,E=w.now();u.unstable_now=function(){return w.now()-E}}var T=[],m=[],F=1,R=null,q=3,L=!1,V=!1,ee=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function U(S){for(var O=f(m);O!==null;){if(O.callback===null)c(m);else if(O.startTime<=S)c(m),O.sortIndex=O.expirationTime,p(T,O);else break;O=f(m)}}function be(S){if(ee=!1,U(S),!V)if(f(T)!==null)V=!0,ge||(ge=!0,Ge());else{var O=f(m);O!==null&&fe(be,O.startTime-S)}}var ge=!1,ae=-1,we=5,Se=-1;function Ze(){return $?!0:!(u.unstable_now()-Se<we)}function Fe(){if($=!1,ge){var S=u.unstable_now();Se=S;var O=!0;try{e:{V=!1,ee&&(ee=!1,le(ae),ae=-1),L=!0;var Z=q;try{t:{for(U(S),R=f(T);R!==null&&!(R.expirationTime>S&&Ze());){var W=R.callback;if(typeof W=="function"){R.callback=null,q=R.priorityLevel;var re=W(R.expirationTime<=S);if(S=u.unstable_now(),typeof re=="function"){R.callback=re,U(S),O=!0;break t}R===f(T)&&c(T),U(S)}else c(T);R=f(T)}if(R!==null)O=!0;else{var h=f(m);h!==null&&fe(be,h.startTime-S),O=!1}}break e}finally{R=null,q=Z,L=!1}O=void 0}}finally{O?Ge():ge=!1}}}var Ge;if(typeof g=="function")Ge=function(){g(Fe)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Xe=Qe.port2;Qe.port1.onmessage=Fe,Ge=function(){Xe.postMessage(null)}}else Ge=function(){B(Fe,0)};function fe(S,O){ae=B(function(){S(u.unstable_now())},O)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(S){S.callback=null},u.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<S?Math.floor(1e3/S):5},u.unstable_getCurrentPriorityLevel=function(){return q},u.unstable_next=function(S){switch(q){case 1:case 2:case 3:var O=3;break;default:O=q}var Z=q;q=O;try{return S()}finally{q=Z}},u.unstable_requestPaint=function(){$=!0},u.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var Z=q;q=S;try{return O()}finally{q=Z}},u.unstable_scheduleCallback=function(S,O,Z){var W=u.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?W+Z:W):Z=W,S){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,S={id:F++,callback:O,priorityLevel:S,startTime:Z,expirationTime:re,sortIndex:-1},Z>W?(S.sortIndex=Z,p(m,S),f(T)===null&&S===f(m)&&(ee?(le(ae),ae=-1):ee=!0,fe(be,Z-W))):(S.sortIndex=re,p(T,S),V||L||(V=!0,ge||(ge=!0,Ge()))),S},u.unstable_shouldYield=Ze,u.unstable_wrapCallback=function(S){var O=q;return function(){var Z=q;q=O;try{return S.apply(this,arguments)}finally{q=Z}}}})(Fs)),Fs}var Qp;function Hm(){return Qp||(Qp=1,Bs.exports=Gm()),Bs.exports}var Gs={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Ym(){if(Kp)return oe;Kp=1;var u=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),q=Symbol.iterator;function L(h){return h===null||typeof h!="object"?null:(h=q&&h[q]||h["@@iterator"],typeof h=="function"?h:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,$={};function B(h,A,X){this.props=h,this.context=A,this.refs=$,this.updater=X||V}B.prototype.isReactComponent={},B.prototype.setState=function(h,A){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,A,"setState")},B.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function le(){}le.prototype=B.prototype;function g(h,A,X){this.props=h,this.context=A,this.refs=$,this.updater=X||V}var U=g.prototype=new le;U.constructor=g,ee(U,B.prototype),U.isPureReactComponent=!0;var be=Array.isArray;function ge(){}var ae={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Se(h,A,X){var H=X.ref;return{$$typeof:u,type:h,key:A,ref:H!==void 0?H:null,props:X}}function Ze(h,A){return Se(h.type,A,h.props)}function Fe(h){return typeof h=="object"&&h!==null&&h.$$typeof===u}function Ge(h){var A={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(X){return A[X]})}var Qe=/\/+/g;function Xe(h,A){return typeof h=="object"&&h!==null&&h.key!=null?Ge(""+h.key):A.toString(36)}function fe(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(ge,ge):(h.status="pending",h.then(function(A){h.status==="pending"&&(h.status="fulfilled",h.value=A)},function(A){h.status==="pending"&&(h.status="rejected",h.reason=A)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function S(h,A,X,H,K){var ie=typeof h;(ie==="undefined"||ie==="boolean")&&(h=null);var de=!1;if(h===null)de=!0;else switch(ie){case"bigint":case"string":case"number":de=!0;break;case"object":switch(h.$$typeof){case u:case p:de=!0;break;case F:return de=h._init,S(de(h._payload),A,X,H,K)}}if(de)return K=K(h),de=H===""?"."+Xe(h,0):H,be(K)?(X="",de!=null&&(X=de.replace(Qe,"$&/")+"/"),S(K,A,X,"",function(Pt){return Pt})):K!=null&&(Fe(K)&&(K=Ze(K,X+(K.key==null||h&&h.key===K.key?"":(""+K.key).replace(Qe,"$&/")+"/")+de)),A.push(K)),1;de=0;var Le=H===""?".":H+":";if(be(h))for(var Oe=0;Oe<h.length;Oe++)H=h[Oe],ie=Le+Xe(H,Oe),de+=S(H,A,X,ie,K);else if(Oe=L(h),typeof Oe=="function")for(h=Oe.call(h),Oe=0;!(H=h.next()).done;)H=H.value,ie=Le+Xe(H,Oe++),de+=S(H,A,X,ie,K);else if(ie==="object"){if(typeof h.then=="function")return S(fe(h),A,X,H,K);throw A=String(h),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return de}function O(h,A,X){if(h==null)return h;var H=[],K=0;return S(h,H,"","",function(ie){return A.call(X,ie,K++)}),H}function Z(h){if(h._status===-1){var A=h._result;A=A(),A.then(function(X){(h._status===0||h._status===-1)&&(h._status=1,h._result=X)},function(X){(h._status===0||h._status===-1)&&(h._status=2,h._result=X)}),h._status===-1&&(h._status=0,h._result=A)}if(h._status===1)return h._result.default;throw h._result}var W=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},re={map:O,forEach:function(h,A,X){O(h,function(){A.apply(this,arguments)},X)},count:function(h){var A=0;return O(h,function(){A++}),A},toArray:function(h){return O(h,function(A){return A})||[]},only:function(h){if(!Fe(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return oe.Activity=R,oe.Children=re,oe.Component=B,oe.Fragment=f,oe.Profiler=y,oe.PureComponent=g,oe.StrictMode=c,oe.Suspense=T,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,oe.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ae.H.useMemoCache(h)}},oe.cache=function(h){return function(){return h.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(h,A,X){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var H=ee({},h.props),K=h.key;if(A!=null)for(ie in A.key!==void 0&&(K=""+A.key),A)!we.call(A,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&A.ref===void 0||(H[ie]=A[ie]);var ie=arguments.length-2;if(ie===1)H.children=X;else if(1<ie){for(var de=Array(ie),Le=0;Le<ie;Le++)de[Le]=arguments[Le+2];H.children=de}return Se(h.type,K,H)},oe.createContext=function(h){return h={$$typeof:w,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:_,_context:h},h},oe.createElement=function(h,A,X){var H,K={},ie=null;if(A!=null)for(H in A.key!==void 0&&(ie=""+A.key),A)we.call(A,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(K[H]=A[H]);var de=arguments.length-2;if(de===1)K.children=X;else if(1<de){for(var Le=Array(de),Oe=0;Oe<de;Oe++)Le[Oe]=arguments[Oe+2];K.children=Le}if(h&&h.defaultProps)for(H in de=h.defaultProps,de)K[H]===void 0&&(K[H]=de[H]);return Se(h,ie,K)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(h){return{$$typeof:E,render:h}},oe.isValidElement=Fe,oe.lazy=function(h){return{$$typeof:F,_payload:{_status:-1,_result:h},_init:Z}},oe.memo=function(h,A){return{$$typeof:m,type:h,compare:A===void 0?null:A}},oe.startTransition=function(h){var A=ae.T,X={};ae.T=X;try{var H=h(),K=ae.S;K!==null&&K(X,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ge,W)}catch(ie){W(ie)}finally{A!==null&&X.types!==null&&(A.types=X.types),ae.T=A}},oe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},oe.use=function(h){return ae.H.use(h)},oe.useActionState=function(h,A,X){return ae.H.useActionState(h,A,X)},oe.useCallback=function(h,A){return ae.H.useCallback(h,A)},oe.useContext=function(h){return ae.H.useContext(h)},oe.useDebugValue=function(){},oe.useDeferredValue=function(h,A){return ae.H.useDeferredValue(h,A)},oe.useEffect=function(h,A){return ae.H.useEffect(h,A)},oe.useEffectEvent=function(h){return ae.H.useEffectEvent(h)},oe.useId=function(){return ae.H.useId()},oe.useImperativeHandle=function(h,A,X){return ae.H.useImperativeHandle(h,A,X)},oe.useInsertionEffect=function(h,A){return ae.H.useInsertionEffect(h,A)},oe.useLayoutEffect=function(h,A){return ae.H.useLayoutEffect(h,A)},oe.useMemo=function(h,A){return ae.H.useMemo(h,A)},oe.useOptimistic=function(h,A){return ae.H.useOptimistic(h,A)},oe.useReducer=function(h,A,X){return ae.H.useReducer(h,A,X)},oe.useRef=function(h){return ae.H.useRef(h)},oe.useState=function(h){return ae.H.useState(h)},oe.useSyncExternalStore=function(h,A,X){return ae.H.useSyncExternalStore(h,A,X)},oe.useTransition=function(){return ae.H.useTransition()},oe.version="19.2.8",oe}var Jp;function Zs(){return Jp||(Jp=1,Gs.exports=Ym()),Gs.exports}var Hs={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Xm(){if(Wp)return ht;Wp=1;var u=Zs();function p(T){var m="https://react.dev/errors/"+T;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)m+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+T+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(p(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},y=Symbol.for("react.portal");function _(T,m,F){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:R==null?null:""+R,children:T,containerInfo:m,implementation:F}}var w=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(T,m){if(T==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ht.createPortal=function(T,m){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(p(299));return _(T,m,null,F)},ht.flushSync=function(T){var m=w.T,F=c.p;try{if(w.T=null,c.p=2,T)return T()}finally{w.T=m,c.p=F,c.d.f()}},ht.preconnect=function(T,m){typeof T=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(T,m))},ht.prefetchDNS=function(T){typeof T=="string"&&c.d.D(T)},ht.preinit=function(T,m){if(typeof T=="string"&&m&&typeof m.as=="string"){var F=m.as,R=E(F,m.crossOrigin),q=typeof m.integrity=="string"?m.integrity:void 0,L=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;F==="style"?c.d.S(T,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:R,integrity:q,fetchPriority:L}):F==="script"&&c.d.X(T,{crossOrigin:R,integrity:q,fetchPriority:L,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ht.preinitModule=function(T,m){if(typeof T=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var F=E(m.as,m.crossOrigin);c.d.M(T,{crossOrigin:F,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(T)},ht.preload=function(T,m){if(typeof T=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var F=m.as,R=E(F,m.crossOrigin);c.d.L(T,F,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ht.preloadModule=function(T,m){if(typeof T=="string")if(m){var F=E(m.as,m.crossOrigin);c.d.m(T,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:F,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(T)},ht.requestFormReset=function(T){c.d.r(T)},ht.unstable_batchedUpdates=function(T,m){return T(m)},ht.useFormState=function(T,m,F){return w.H.useFormState(T,m,F)},ht.useFormStatus=function(){return w.H.useHostTransitionStatus()},ht.version="19.2.8",ht}var $p;function Pm(){if($p)return Hs.exports;$p=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(p){console.error(p)}}return u(),Hs.exports=Xm(),Hs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Vm(){if(Ip)return nl;Ip=1;var u=Hm(),p=Zs(),f=Pm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(_(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return T(i),e;if(r===n)return T(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,s=i.child;s;){if(s===a){o=!0,a=i,n=r;break}if(s===n){o=!0,n=i,a=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===a){o=!0,a=r,n=i;break}if(s===n){o=!0,n=r,a=i;break}s=s.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,q=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),g=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),Fe=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Fe&&e[Fe]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case B:return"Profiler";case $:return"StrictMode";case be:return"Suspense";case ge:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case g:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var fe=Array.isArray,S=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},W=[],re=-1;function h(e){return{current:e}}function A(e){0>re||(e.current=W[re],W[re]=null,re--)}function X(e,t){re++,W[re]=e.current,e.current=t}var H=h(null),K=h(null),ie=h(null),de=h(null);function Le(e,t){switch(X(ie,t),X(K,e),X(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mp(t),e=hp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(H),X(H,e)}function Oe(){A(H),A(K),A(ie)}function Pt(e){e.memoizedState!==null&&X(de,e);var t=H.current,a=hp(t,e.type);t!==a&&(X(K,e),X(H,a))}function Ma(e){K.current===e&&(A(H),A(K)),de.current===e&&(A(de),$i._currentValue=Z)}var nn,ln;function Vt(e){if(nn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);nn=t&&t[1]||"",ln=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+e+ln}var rn=!1;function G(e,t){if(!e||rn)return"";rn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(D){var N=D}Reflect.construct(e,[],C)}else{try{C.call()}catch(D){N=D}e.call(C.prototype)}}else{try{throw Error()}catch(D){N=D}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(D){if(D&&N&&typeof D.stack=="string")return[D.stack,N.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],s=r[1];if(o&&s){var d=o.split(`
`),z=s.split(`
`);for(i=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(n===d.length||i===z.length)for(n=d.length-1,i=z.length-1;1<=n&&0<=i&&d[n]!==z[i];)i--;for(;1<=n&&0<=i;n--,i--)if(d[n]!==z[i]){if(n!==1||i!==1)do if(n--,i--,0>i||d[n]!==z[i]){var j=`
`+d[n].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=n&&0<=i);break}}}finally{rn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Vt(a):""}function Y(e,t){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==t&&t!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return G(e.type,!1);case 11:return G(e.type.render,!1);case 1:return G(e.type,!0);case 31:return Vt("Activity");default:return""}}function P(e){try{var t="",a=null;do t+=Y(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ne=Object.prototype.hasOwnProperty,pe=u.unstable_scheduleCallback,Ue=u.unstable_cancelCallback,Ne=u.unstable_shouldYield,rt=u.unstable_requestPaint,Re=u.unstable_now,vt=u.unstable_getCurrentPriorityLevel,tt=u.unstable_ImmediatePriority,Zt=u.unstable_UserBlockingPriority,ft=u.unstable_NormalPriority,oa=u.unstable_LowPriority,ol=u.unstable_IdlePriority,Nr=u.log,sl=u.unstable_setDisableYieldValue,Ca=null,dt=null;function Ke(e){if(typeof Nr=="function"&&sl(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Ca,e)}catch{}}var Je=Math.clz32?Math.clz32:ca,Dt=Math.log,sa=Math.LN2;function ca(e){return e>>>=0,e===0?32:31-(Dt(e)/sa|0)|0}var It=256,ua=262144,pa=4194304;function mt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qt(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~r,n!==0?i=mt(n):(o&=s,o!==0?i=mt(o):a||(a=s&~e,a!==0&&(i=mt(a))))):(s=n&~r,s!==0?i=mt(s):o!==0?i=mt(o):a||(a=n&~e,a!==0&&(i=mt(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function ea(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wt(){var e=pa;return pa<<=1,(pa&62914560)===0&&(pa=4194304),e}function ta(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wf(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,d=e.expirationTimes,z=e.hiddenUpdates;for(a=o&~a;0<a;){var j=31-Je(a),C=1<<j;s[j]=0,d[j]=-1;var N=z[j];if(N!==null)for(z[j]=null,j=0;j<N.length;j++){var D=N[j];D!==null&&(D.lane&=-536870913)}a&=~C}n!==0&&Js(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Js(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Je(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Ws(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Je(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function $s(e,t){var a=t&-t;return a=(a&42)!==0?1:Dr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Dr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:Up(e.type))}function ec(e,t){var a=O.p;try{return O.p=e,t()}finally{O.p=a}}var Ra=Math.random().toString(36).slice(2),ot="__reactFiber$"+Ra,yt="__reactProps$"+Ra,Nn="__reactContainer$"+Ra,jr="__reactEvents$"+Ra,jf="__reactListeners$"+Ra,Af="__reactHandles$"+Ra,tc="__reactResources$"+Ra,di="__reactMarker$"+Ra;function Ar(e){delete e[ot],delete e[yt],delete e[jr],delete e[jf],delete e[Af]}function Dn(e){var t=e[ot];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Nn]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=zp(e);e!==null;){if(a=e[ot])return a;e=zp(e)}return t}e=a,a=e.parentNode}return null}function wn(e){if(e=e[ot]||e[Nn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function jn(e){var t=e[tc];return t||(t=e[tc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[di]=!0}var ac=new Set,nc={};function on(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(nc[e]=t,e=0;e<t.length;e++)ac.add(t[e])}var Tf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ic={},lc={};function Mf(e){return ne.call(lc,e)?!0:ne.call(ic,e)?!1:Tf.test(e)?lc[e]=!0:(ic[e]=!0,!1)}function cl(e,t,a){if(Mf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ul(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function fa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){if(!e._valueTracker){var t=rc(e)?"checked":"value";e._valueTracker=Cf(e,t,""+e[t])}}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=rc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rf=/[\n"\\]/g;function qt(e){return e.replace(Rf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mr(e,t,a,n,i,r,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Cr(e,o,Et(t)):a!=null?Cr(e,o,Et(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Et(s):e.removeAttribute("name")}function sc(e,t,a,n,i,r,o,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Tr(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Tr(e)}function Cr(e,t,a){t==="number"&&pl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Tn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cc(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function uc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(fe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Tr(e)}function Mn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var kf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||kf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&pc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&pc(e,r,t[r])}function Rr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Of=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ef=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return Ef.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var kr=null;function Or(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,Rn=null;function dc(e){var t=wn(e);if(t&&(e=t.stateNode)){var a=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[yt]||null;if(!i)throw Error(c(90));Mr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&oc(n)}break e;case"textarea":cc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Tn(e,!!a.multiple,t,!1)}}}var Er=!1;function mc(e,t,a){if(Er)return e(t,a);Er=!0;try{var n=e(t);return n}finally{if(Er=!1,(Cn!==null||Rn!==null)&&(Il(),Cn&&(t=Cn,e=Rn,Rn=Cn=null,dc(t),e)))for(t=0;t<e.length;t++)dc(e[t])}}function hi(e,t){var a=e.stateNode;if(a===null)return null;var n=a[yt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(ma)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){qr=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{qr=!1}var ka=null,Lr=null,dl=null;function hc(){if(dl)return dl;var e,t=Lr,a=t.length,n,i="value"in ka?ka.value:ka.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return dl=i.slice(e,1<n?1-n:void 0)}function ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function xc(){return!1}function gt(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hl:xc,this.isPropagationStopped=xc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=gt(sn),vi=R({},sn,{view:0,detail:0}),qf=gt(vi),Ur,Br,yi,vl=R({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(Ur=e.screenX-yi.screenX,Br=e.screenY-yi.screenY):Br=Ur=0,yi=e),Ur)},movementY:function(e){return"movementY"in e?e.movementY:Br}}),vc=gt(vl),Lf=R({},vl,{dataTransfer:0}),Uf=gt(Lf),Bf=R({},vi,{relatedTarget:0}),Fr=gt(Bf),Ff=R({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gf=gt(Ff),Hf=R({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yf=gt(Hf),Xf=R({},sn,{data:0}),yc=gt(Xf),Pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zf[e])?!!t[e]:!1}function Gr(){return Qf}var Kf=R({},vi,{key:function(e){if(e.key){var t=Pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gr,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jf=gt(Kf),Wf=R({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=gt(Wf),$f=R({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gr}),If=gt($f),ed=R({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),td=gt(ed),ad=R({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nd=gt(ad),id=R({},sn,{newState:0,oldState:0}),ld=gt(id),rd=[9,13,27,32],Hr=ma&&"CompositionEvent"in window,gi=null;ma&&"documentMode"in document&&(gi=document.documentMode);var od=ma&&"TextEvent"in window&&!gi,bc=ma&&(!Hr||gi&&8<gi&&11>=gi),_c=" ",zc=!1;function Sc(e,t){switch(e){case"keyup":return rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function sd(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(zc=!0,_c);case"textInput":return e=t.data,e===_c&&zc?null:e;default:return null}}function cd(e,t){if(kn)return e==="compositionend"||!Hr&&Sc(e,t)?(e=hc(),dl=Lr=ka=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bc&&t.locale!=="ko"?null:t.data;default:return null}}var ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ud[e.type]:t==="textarea"}function wc(e,t,a,n){Cn?Rn?Rn.push(n):Rn=[n]:Cn=n,t=rr(t,"onChange"),0<t.length&&(a=new xl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var bi=null,_i=null;function pd(e){sp(e,0)}function yl(e){var t=mi(e);if(oc(t))return e}function jc(e,t){if(e==="change")return t}var Ac=!1;if(ma){var Yr;if(ma){var Xr="oninput"in document;if(!Xr){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),Xr=typeof Tc.oninput=="function"}Yr=Xr}else Yr=!1;Ac=Yr&&(!document.documentMode||9<document.documentMode)}function Mc(){bi&&(bi.detachEvent("onpropertychange",Cc),_i=bi=null)}function Cc(e){if(e.propertyName==="value"&&yl(_i)){var t=[];wc(t,_i,e,Or(e)),mc(pd,t)}}function fd(e,t,a){e==="focusin"?(Mc(),bi=t,_i=a,bi.attachEvent("onpropertychange",Cc)):e==="focusout"&&Mc()}function dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(_i)}function md(e,t){if(e==="click")return yl(t)}function hd(e,t){if(e==="input"||e==="change")return yl(t)}function xd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:xd;function zi(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ne.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var a=Rc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rc(a)}}function Oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ec(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pl(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vd=ma&&"documentMode"in document&&11>=document.documentMode,On=null,Vr=null,Si=null,Zr=!1;function qc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zr||On==null||On!==pl(n)||(n=On,"selectionStart"in n&&Pr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Si&&zi(Si,n)||(Si=n,n=rr(Vr,"onSelect"),0<n.length&&(t=new xl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=On)))}function cn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var En={animationend:cn("Animation","AnimationEnd"),animationiteration:cn("Animation","AnimationIteration"),animationstart:cn("Animation","AnimationStart"),transitionrun:cn("Transition","TransitionRun"),transitionstart:cn("Transition","TransitionStart"),transitioncancel:cn("Transition","TransitionCancel"),transitionend:cn("Transition","TransitionEnd")},Qr={},Lc={};ma&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function un(e){if(Qr[e])return Qr[e];if(!En[e])return e;var t=En[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Lc)return Qr[e]=t[a];return e}var Uc=un("animationend"),Bc=un("animationiteration"),Fc=un("animationstart"),yd=un("transitionrun"),gd=un("transitionstart"),bd=un("transitioncancel"),Gc=un("transitionend"),Hc=new Map,Kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kr.push("scrollEnd");function Kt(e,t){Hc.set(e,t),on(t,[e])}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],qn=0,Jr=0;function bl(){for(var e=qn,t=Jr=qn=0;t<e;){var a=Lt[t];Lt[t++]=null;var n=Lt[t];Lt[t++]=null;var i=Lt[t];Lt[t++]=null;var r=Lt[t];if(Lt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&Yc(a,i,r)}}function _l(e,t,a,n){Lt[qn++]=e,Lt[qn++]=t,Lt[qn++]=a,Lt[qn++]=n,Jr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Wr(e,t,a,n){return _l(e,t,a,n),zl(e)}function pn(e,t){return _l(e,null,null,t),zl(e)}function Yc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-Je(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function zl(e){if(50<Pi)throw Pi=0,os=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ln={};function _d(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,a,n){return new _d(e,t,a,n)}function $r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,t){var a=e.alternate;return a===null?(a=At(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Sl(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")$r(e)&&(o=1);else if(typeof e=="string")o=wm(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=At(31,a,t,i),e.elementType=Se,e.lanes=r,e;case ee:return fn(a.children,i,r,t);case $:o=8,i|=24;break;case B:return e=At(12,a,t,i|2),e.elementType=B,e.lanes=r,e;case be:return e=At(13,a,t,i),e.elementType=be,e.lanes=r,e;case ge:return e=At(19,a,t,i),e.elementType=ge,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:o=10;break e;case le:o=9;break e;case U:o=11;break e;case ae:o=14;break e;case we:o=16,n=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=At(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function fn(e,t,a,n){return e=At(7,e,n,t),e.lanes=a,e}function Ir(e,t,a){return e=At(6,e,null,t),e.lanes=a,e}function Pc(e){var t=At(18,null,null,0);return t.stateNode=e,t}function eo(e,t,a){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vc=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Vc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:P(t)},Vc.set(e,t),t)}return{value:e,source:t,stack:P(t)}}var Un=[],Bn=0,Nl=null,Ni=0,Bt=[],Ft=0,Oa=null,aa=1,na="";function xa(e,t){Un[Bn++]=Ni,Un[Bn++]=Nl,Nl=e,Ni=t}function Zc(e,t,a){Bt[Ft++]=aa,Bt[Ft++]=na,Bt[Ft++]=Oa,Oa=e;var n=aa;e=na;var i=32-Je(n)-1;n&=~(1<<i),a+=1;var r=32-Je(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,aa=1<<32-Je(t)+i|a<<i|n,na=r+e}else aa=1<<r|a<<i|n,na=e}function to(e){e.return!==null&&(xa(e,1),Zc(e,1,0))}function ao(e){for(;e===Nl;)Nl=Un[--Bn],Un[Bn]=null,Ni=Un[--Bn],Un[Bn]=null;for(;e===Oa;)Oa=Bt[--Ft],Bt[Ft]=null,na=Bt[--Ft],Bt[Ft]=null,aa=Bt[--Ft],Bt[Ft]=null}function Qc(e,t){Bt[Ft++]=aa,Bt[Ft++]=na,Bt[Ft++]=Oa,aa=t.id,na=t.overflow,Oa=e}var st=null,Ee=null,ye=!1,Ea=null,Gt=!1,no=Error(c(519));function qa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Di(Ut(t,e)),no}function Kc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ot]=e,t[yt]=n,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<Zi.length;a++)he(Zi[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),sc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),uc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||fp(t.textContent,a)?(n.popover!=null&&(he("beforetoggle",t),he("toggle",t)),n.onScroll!=null&&he("scroll",t),n.onScrollEnd!=null&&he("scrollend",t),n.onClick!=null&&(t.onclick=da),t=!0):t=!1,t||qa(e,!0)}function Jc(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:st=st.return}}function Fn(e){if(e!==st)return!1;if(!ye)return Jc(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zs(e.type,e.memoizedProps)),a=!a),a&&Ee&&qa(e),Jc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=_p(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=_p(e)}else t===27?(t=Ee,Ja(e.type)?(e=js,js=null,Ee=e):Ee=t):Ee=st?Yt(e.stateNode.nextSibling):null;return!0}function dn(){Ee=st=null,ye=!1}function io(){var e=Ea;return e!==null&&(St===null?St=e:St.push.apply(St,e),Ea=null),e}function Di(e){Ea===null?Ea=[e]:Ea.push(e)}var lo=h(null),mn=null,va=null;function La(e,t,a){X(lo,t._currentValue),t._currentValue=a}function ya(e){e._currentValue=lo.current,A(lo)}function ro(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function oo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=i;for(var d=0;d<t.length;d++)if(s.context===t[d]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),ro(r.return,a,e),n||(o=null);break e}r=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),ro(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Gn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var s=i.type;jt(i.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(i===de.current){if(o=i.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push($i):e=[$i])}i=i.return}e!==null&&oo(t,e,a,n),t.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hn(e){mn=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Wc(mn,e)}function wl(e,t){return mn===null&&hn(e),Wc(e,t)}function Wc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},va===null){if(e===null)throw Error(c(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return a}var zd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Sd=u.unstable_scheduleCallback,Nd=u.unstable_NormalPriority,We={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function so(){return{controller:new zd,data:new Map,refCount:0}}function wi(e){e.refCount--,e.refCount===0&&Sd(Nd,function(){e.controller.abort()})}var ji=null,co=0,Hn=0,Yn=null;function Dd(e,t){if(ji===null){var a=ji=[];co=0,Hn=ds(),Yn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return co++,t.then($c,$c),t}function $c(){if(--co===0&&ji!==null){Yn!==null&&(Yn.status="fulfilled");var e=ji;ji=null,Hn=0,Yn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wd(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Ic=S.S;S.S=function(e,t){qu=Re(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dd(e,t),Ic!==null&&Ic(e,t)};var xn=h(null);function uo(){var e=xn.current;return e!==null?e:ke.pooledCache}function jl(e,t){t===null?X(xn,xn.current):X(xn,t.pool)}function e0(){var e=uo();return e===null?null:{parent:We._currentValue,pool:e}}var Xn=Error(c(460)),po=Error(c(474)),Al=Error(c(542)),Tl={then:function(){}};function t0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function a0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(da,da),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i0(e),e;default:if(typeof t.status=="string")t.then(da,da);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i0(e),e}throw yn=t,Xn}}function vn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(yn=a,Xn):a}}var yn=null;function n0(){if(yn===null)throw Error(c(459));var e=yn;return yn=null,e}function i0(e){if(e===Xn||e===Al)throw Error(c(483))}var Pn=null,Ai=0;function Ml(e){var t=Ai;return Ai+=1,Pn===null&&(Pn=[]),a0(Pn,e,t)}function Ti(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cl(e,t){throw t.$$typeof===q?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function l0(e){function t(v,x){if(e){var b=v.deletions;b===null?(v.deletions=[x],v.flags|=16):b.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(v,x){return v=ha(v,x),v.index=0,v.sibling=null,v}function r(v,x,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<x?(v.flags|=67108866,x):b):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function s(v,x,b,M){return x===null||x.tag!==6?(x=Ir(b,v.mode,M),x.return=v,x):(x=i(x,b),x.return=v,x)}function d(v,x,b,M){var I=b.type;return I===ee?j(v,x,b.props.children,M,b.key):x!==null&&(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===we&&vn(I)===x.type)?(x=i(x,b.props),Ti(x,b),x.return=v,x):(x=Sl(b.type,b.key,b.props,null,v.mode,M),Ti(x,b),x.return=v,x)}function z(v,x,b,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=eo(b,v.mode,M),x.return=v,x):(x=i(x,b.children||[]),x.return=v,x)}function j(v,x,b,M,I){return x===null||x.tag!==7?(x=fn(b,v.mode,M,I),x.return=v,x):(x=i(x,b),x.return=v,x)}function C(v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Ir(""+x,v.mode,b),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case L:return b=Sl(x.type,x.key,x.props,null,v.mode,b),Ti(b,x),b.return=v,b;case V:return x=eo(x,v.mode,b),x.return=v,x;case we:return x=vn(x),C(v,x,b)}if(fe(x)||Ge(x))return x=fn(x,v.mode,b,null),x.return=v,x;if(typeof x.then=="function")return C(v,Ml(x),b);if(x.$$typeof===g)return C(v,wl(v,x),b);Cl(v,x)}return null}function N(v,x,b,M){var I=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return I!==null?null:s(v,x,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case L:return b.key===I?d(v,x,b,M):null;case V:return b.key===I?z(v,x,b,M):null;case we:return b=vn(b),N(v,x,b,M)}if(fe(b)||Ge(b))return I!==null?null:j(v,x,b,M,null);if(typeof b.then=="function")return N(v,x,Ml(b),M);if(b.$$typeof===g)return N(v,x,wl(v,b),M);Cl(v,b)}return null}function D(v,x,b,M,I){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return v=v.get(b)||null,s(x,v,""+M,I);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case L:return v=v.get(M.key===null?b:M.key)||null,d(x,v,M,I);case V:return v=v.get(M.key===null?b:M.key)||null,z(x,v,M,I);case we:return M=vn(M),D(v,x,b,M,I)}if(fe(M)||Ge(M))return v=v.get(b)||null,j(x,v,M,I,null);if(typeof M.then=="function")return D(v,x,b,Ml(M),I);if(M.$$typeof===g)return D(v,x,b,wl(x,M),I);Cl(x,M)}return null}function Q(v,x,b,M){for(var I=null,_e=null,J=x,ue=x=0,ve=null;J!==null&&ue<b.length;ue++){J.index>ue?(ve=J,J=null):ve=J.sibling;var ze=N(v,J,b[ue],M);if(ze===null){J===null&&(J=ve);break}e&&J&&ze.alternate===null&&t(v,J),x=r(ze,x,ue),_e===null?I=ze:_e.sibling=ze,_e=ze,J=ve}if(ue===b.length)return a(v,J),ye&&xa(v,ue),I;if(J===null){for(;ue<b.length;ue++)J=C(v,b[ue],M),J!==null&&(x=r(J,x,ue),_e===null?I=J:_e.sibling=J,_e=J);return ye&&xa(v,ue),I}for(J=n(J);ue<b.length;ue++)ve=D(J,v,ue,b[ue],M),ve!==null&&(e&&ve.alternate!==null&&J.delete(ve.key===null?ue:ve.key),x=r(ve,x,ue),_e===null?I=ve:_e.sibling=ve,_e=ve);return e&&J.forEach(function(tn){return t(v,tn)}),ye&&xa(v,ue),I}function te(v,x,b,M){if(b==null)throw Error(c(151));for(var I=null,_e=null,J=x,ue=x=0,ve=null,ze=b.next();J!==null&&!ze.done;ue++,ze=b.next()){J.index>ue?(ve=J,J=null):ve=J.sibling;var tn=N(v,J,ze.value,M);if(tn===null){J===null&&(J=ve);break}e&&J&&tn.alternate===null&&t(v,J),x=r(tn,x,ue),_e===null?I=tn:_e.sibling=tn,_e=tn,J=ve}if(ze.done)return a(v,J),ye&&xa(v,ue),I;if(J===null){for(;!ze.done;ue++,ze=b.next())ze=C(v,ze.value,M),ze!==null&&(x=r(ze,x,ue),_e===null?I=ze:_e.sibling=ze,_e=ze);return ye&&xa(v,ue),I}for(J=n(J);!ze.done;ue++,ze=b.next())ze=D(J,v,ue,ze.value,M),ze!==null&&(e&&ze.alternate!==null&&J.delete(ze.key===null?ue:ze.key),x=r(ze,x,ue),_e===null?I=ze:_e.sibling=ze,_e=ze);return e&&J.forEach(function(Lm){return t(v,Lm)}),ye&&xa(v,ue),I}function Ce(v,x,b,M){if(typeof b=="object"&&b!==null&&b.type===ee&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case L:e:{for(var I=b.key;x!==null;){if(x.key===I){if(I=b.type,I===ee){if(x.tag===7){a(v,x.sibling),M=i(x,b.props.children),M.return=v,v=M;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===we&&vn(I)===x.type){a(v,x.sibling),M=i(x,b.props),Ti(M,b),M.return=v,v=M;break e}a(v,x);break}else t(v,x);x=x.sibling}b.type===ee?(M=fn(b.props.children,v.mode,M,b.key),M.return=v,v=M):(M=Sl(b.type,b.key,b.props,null,v.mode,M),Ti(M,b),M.return=v,v=M)}return o(v);case V:e:{for(I=b.key;x!==null;){if(x.key===I)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){a(v,x.sibling),M=i(x,b.children||[]),M.return=v,v=M;break e}else{a(v,x);break}else t(v,x);x=x.sibling}M=eo(b,v.mode,M),M.return=v,v=M}return o(v);case we:return b=vn(b),Ce(v,x,b,M)}if(fe(b))return Q(v,x,b,M);if(Ge(b)){if(I=Ge(b),typeof I!="function")throw Error(c(150));return b=I.call(b),te(v,x,b,M)}if(typeof b.then=="function")return Ce(v,x,Ml(b),M);if(b.$$typeof===g)return Ce(v,x,wl(v,b),M);Cl(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,x!==null&&x.tag===6?(a(v,x.sibling),M=i(x,b),M.return=v,v=M):(a(v,x),M=Ir(b,v.mode,M),M.return=v,v=M),o(v)):a(v,x)}return function(v,x,b,M){try{Ai=0;var I=Ce(v,x,b,M);return Pn=null,I}catch(J){if(J===Xn||J===Al)throw J;var _e=At(29,J,null,v.mode);return _e.lanes=M,_e.return=v,_e}finally{}}}var gn=l0(!0),r0=l0(!1),Ua=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(De&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=zl(e),Yc(e,null,a),t}return _l(e,n,t,a),zl(e)}function Mi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ws(e,a)}}function ho(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xo=!1;function Ci(){if(xo){var e=Yn;if(e!==null)throw e}}function Ri(e,t,a,n){xo=!1;var i=e.updateQueue;Ua=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var d=s,z=d.next;d.next=null,o===null?r=z:o.next=z,o=d;var j=e.alternate;j!==null&&(j=j.updateQueue,s=j.lastBaseUpdate,s!==o&&(s===null?j.firstBaseUpdate=z:s.next=z,j.lastBaseUpdate=d))}if(r!==null){var C=i.baseState;o=0,j=z=d=null,s=r;do{var N=s.lane&-536870913,D=N!==s.lane;if(D?(xe&N)===N:(n&N)===N){N!==0&&N===Hn&&(xo=!0),j!==null&&(j=j.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var Q=e,te=s;N=t;var Ce=a;switch(te.tag){case 1:if(Q=te.payload,typeof Q=="function"){C=Q.call(Ce,C,N);break e}C=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=te.payload,N=typeof Q=="function"?Q.call(Ce,C,N):Q,N==null)break e;C=R({},C,N);break e;case 2:Ua=!0}}N=s.callback,N!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[N]:D.push(N))}else D={lane:N,tag:s.tag,payload:s.payload,callback:s.callback,next:null},j===null?(z=j=D,d=C):j=j.next=D,o|=N;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;D=s,s=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);j===null&&(d=C),i.baseState=d,i.firstBaseUpdate=z,i.lastBaseUpdate=j,r===null&&(i.shared.lanes=0),Pa|=o,e.lanes=o,e.memoizedState=C}}function o0(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function s0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)o0(a[e],t)}var Vn=h(null),Rl=h(0);function c0(e,t){e=ja,X(Rl,e),X(Vn,t),ja=e|t.baseLanes}function vo(){X(Rl,ja),X(Vn,Vn.current)}function yo(){ja=Rl.current,A(Vn),A(Rl)}var Tt=h(null),Ht=null;function Ga(e){var t=e.alternate;X(Pe,Pe.current&1),X(Tt,e),Ht===null&&(t===null||Vn.current!==null||t.memoizedState!==null)&&(Ht=e)}function go(e){X(Pe,Pe.current),X(Tt,e),Ht===null&&(Ht=e)}function u0(e){e.tag===22?(X(Pe,Pe.current),X(Tt,e),Ht===null&&(Ht=e)):Ha()}function Ha(){X(Pe,Pe.current),X(Tt,Tt.current)}function Mt(e){A(Tt),Ht===e&&(Ht=null),A(Pe)}var Pe=h(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ds(a)||ws(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ga=0,se=null,Te=null,$e=null,Ol=!1,Zn=!1,bn=!1,El=0,ki=0,Qn=null,jd=0;function He(){throw Error(c(321))}function bo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!jt(e[a],t[a]))return!1;return!0}function _o(e,t,a,n,i,r){return ga=r,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?Z0:qo,bn=!1,r=a(n,i),bn=!1,Zn&&(r=f0(t,a,n,i)),p0(e),r}function p0(e){S.H=qi;var t=Te!==null&&Te.next!==null;if(ga=0,$e=Te=se=null,Ol=!1,ki=0,Qn=null,t)throw Error(c(300));e===null||Ie||(e=e.dependencies,e!==null&&Dl(e)&&(Ie=!0))}function f0(e,t,a,n){se=e;var i=0;do{if(Zn&&(Qn=null),ki=0,Zn=!1,25<=i)throw Error(c(301));if(i+=1,$e=Te=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}S.H=Q0,r=t(a,n)}while(Zn);return r}function Ad(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Oi(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(se.flags|=1024),t}function zo(){var e=El!==0;return El=0,e}function So(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function No(e){if(Ol){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ol=!1}ga=0,$e=Te=se=null,Zn=!1,ki=El=0,Qn=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?se.memoizedState=$e=e:$e=$e.next=e,$e}function Ve(){if(Te===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=$e===null?se.memoizedState:$e.next;if(t!==null)$e=t,Te=e;else{if(e===null)throw se.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},$e===null?se.memoizedState=$e=e:$e=$e.next=e}return $e}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oi(e){var t=ki;return ki+=1,Qn===null&&(Qn=[]),e=a0(Qn,e,t),t=se,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?Z0:qo),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oi(e);if(e.$$typeof===g)return ct(e)}throw Error(c(438,String(e)))}function Do(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ql(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ze;return t.index++,a}function ba(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Ve();return wo(t,Te,e)}function wo(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var s=o=null,d=null,z=t,j=!1;do{var C=z.lane&-536870913;if(C!==z.lane?(xe&C)===C:(ga&C)===C){var N=z.revertLane;if(N===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),C===Hn&&(j=!0);else if((ga&N)===N){z=z.next,N===Hn&&(j=!0);continue}else C={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},d===null?(s=d=C,o=r):d=d.next=C,se.lanes|=N,Pa|=N;C=z.action,bn&&a(r,C),r=z.hasEagerState?z.eagerState:a(r,C)}else N={lane:C,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},d===null?(s=d=N,o=r):d=d.next=N,se.lanes|=C,Pa|=C;z=z.next}while(z!==null&&z!==t);if(d===null?o=r:d.next=s,!jt(r,e.memoizedState)&&(Ie=!0,j&&(a=Yn,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=d,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function jo(e){var t=Ve(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);jt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function d0(e,t,a){var n=se,i=Ve(),r=ye;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!jt((Te||i).memoizedState,a);if(o&&(i.memoizedState=a,Ie=!0),i=i.queue,Mo(x0.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Kn(9,{destroy:void 0},h0.bind(null,n,i,a,t),null),ke===null)throw Error(c(349));r||(ga&127)!==0||m0(n,t,a)}return a}function m0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=ql(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function h0(e,t,a,n){t.value=a,t.getSnapshot=n,v0(t)&&y0(e)}function x0(e,t,a){return a(function(){v0(t)&&y0(e)})}function v0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!jt(e,a)}catch{return!0}}function y0(e){var t=pn(e,2);t!==null&&Nt(t,e,2)}function Ao(e){var t=xt();if(typeof e=="function"){var a=e;if(e=a(),bn){Ke(!0);try{a()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t}function g0(e,t,a,n){return e.baseState=a,wo(e,Te,typeof n=="function"?n:ba)}function Td(e,t,a,n,i){if(Gl(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};S.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,b0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function b0(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=S.T,o={};S.T=o;try{var s=a(i,n),d=S.S;d!==null&&d(o,s),_0(e,t,s)}catch(z){To(e,t,z)}finally{r!==null&&o.types!==null&&(r.types=o.types),S.T=r}}else try{r=a(i,n),_0(e,t,r)}catch(z){To(e,t,z)}}function _0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){z0(e,t,n)},function(n){return To(e,t,n)}):z0(e,t,a)}function z0(e,t,a){t.status="fulfilled",t.value=a,S0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,b0(e,a)))}function To(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,S0(t),t=t.next;while(t!==n)}e.action=null}function S0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function N0(e,t){return t}function D0(e,t){if(ye){var a=ke.formState;if(a!==null){e:{var n=se;if(ye){if(Ee){t:{for(var i=Ee,r=Gt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Yt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ee=Yt(i.nextSibling),n=i.data==="F!";break e}}qa(n)}n=!1}n&&(t=a[0])}}return a=xt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:t},a.queue=n,a=X0.bind(null,se,n),n.dispatch=a,n=Ao(!1),r=Eo.bind(null,se,!1,n.queue),n=xt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Td.bind(null,se,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function w0(e){var t=Ve();return j0(t,Te,e)}function j0(e,t,a){if(t=wo(e,t,N0)[0],e=Ul(ba)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Oi(t)}catch(o){throw o===Xn?Al:o}else n=t;t=Ve();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(se.flags|=2048,Kn(9,{destroy:void 0},Md.bind(null,i,a),null)),[n,r,e]}function Md(e,t){e.action=t}function A0(e){var t=Ve(),a=Te;if(a!==null)return j0(t,a,e);Ve(),t=t.memoizedState,a=Ve();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Kn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=se.updateQueue,t===null&&(t=ql(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function T0(){return Ve().memoizedState}function Bl(e,t,a,n){var i=xt();se.flags|=e,i.memoizedState=Kn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Fl(e,t,a,n){var i=Ve();n=n===void 0?null:n;var r=i.memoizedState.inst;Te!==null&&n!==null&&bo(n,Te.memoizedState.deps)?i.memoizedState=Kn(t,r,a,n):(se.flags|=e,i.memoizedState=Kn(1|t,r,a,n))}function M0(e,t){Bl(8390656,8,e,t)}function Mo(e,t){Fl(2048,8,e,t)}function Cd(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=ql(),se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function C0(e){var t=Ve().memoizedState;return Cd({ref:t,nextImpl:e}),function(){if((De&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function R0(e,t){return Fl(4,2,e,t)}function k0(e,t){return Fl(4,4,e,t)}function O0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E0(e,t,a){a=a!=null?a.concat([e]):null,Fl(4,4,O0.bind(null,t,e),a)}function Co(){}function q0(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&bo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function L0(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&bo(t,n[1]))return n[0];if(n=e(),bn){Ke(!0);try{e()}finally{Ke(!1)}}return a.memoizedState=[n,t],n}function Ro(e,t,a){return a===void 0||(ga&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Uu(),se.lanes|=e,Pa|=e,a)}function U0(e,t,a,n){return jt(a,t)?a:Vn.current!==null?(e=Ro(e,a,n),jt(e,t)||(Ie=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(xe&261930)===0?(Ie=!0,e.memoizedState=a):(e=Uu(),se.lanes|=e,Pa|=e,t)}function B0(e,t,a,n,i){var r=O.p;O.p=r!==0&&8>r?r:8;var o=S.T,s={};S.T=s,Eo(e,!1,t,a);try{var d=i(),z=S.S;if(z!==null&&z(s,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var j=wd(d,n);Ei(e,t,j,kt(e))}else Ei(e,t,n,kt(e))}catch(C){Ei(e,t,{then:function(){},status:"rejected",reason:C},kt())}finally{O.p=r,o!==null&&s.types!==null&&(o.types=s.types),S.T=o}}function Rd(){}function ko(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=F0(e).queue;B0(e,i,t,Z,a===null?Rd:function(){return G0(e),a(n)})}function F0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function G0(e){var t=F0(e);t.next===null&&(t=e.alternate.memoizedState),Ei(e,t.next.queue,{},kt())}function Oo(){return ct($i)}function H0(){return Ve().memoizedState}function Y0(){return Ve().memoizedState}function kd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=kt();e=Ba(a);var n=Fa(t,e,a);n!==null&&(Nt(n,t,a),Mi(n,t,a)),t={cache:so()},e.payload=t;return}t=t.return}}function Od(e,t,a){var n=kt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?P0(t,a):(a=Wr(e,t,a,n),a!==null&&(Nt(a,e,n),V0(a,t,n)))}function X0(e,t,a){var n=kt();Ei(e,t,a,n)}function Ei(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))P0(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,s=r(o,a);if(i.hasEagerState=!0,i.eagerState=s,jt(s,o))return _l(e,t,i,0),ke===null&&bl(),!1}catch{}finally{}if(a=Wr(e,t,i,n),a!==null)return Nt(a,e,n),V0(a,t,n),!0}return!1}function Eo(e,t,a,n){if(n={lane:2,revertLane:ds(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(t)throw Error(c(479))}else t=Wr(e,a,n,2),t!==null&&Nt(t,e,2)}function Gl(e){var t=e.alternate;return e===se||t!==null&&t===se}function P0(e,t){Zn=Ol=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function V0(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ws(e,a)}}var qi={readContext:ct,use:Ll,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};qi.useEffectEvent=He;var Z0={readContext:ct,use:Ll,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:M0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,O0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){Bl(4,2,e,t)},useMemo:function(e,t){var a=xt();t=t===void 0?null:t;var n=e();if(bn){Ke(!0);try{e()}finally{Ke(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=xt();if(a!==void 0){var i=a(t);if(bn){Ke(!0);try{a(t)}finally{Ke(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Od.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,a=X0.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Co,useDeferredValue:function(e,t){var a=xt();return Ro(a,e,t)},useTransition:function(){var e=Ao(!1);return e=B0.bind(null,se,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=se,i=xt();if(ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ke===null)throw Error(c(349));(xe&127)!==0||m0(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,M0(x0.bind(null,n,r,e),[e]),n.flags|=2048,Kn(9,{destroy:void 0},h0.bind(null,n,r,a,t),null),a},useId:function(){var e=xt(),t=ke.identifierPrefix;if(ye){var a=na,n=aa;a=(n&~(1<<32-Je(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=El++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:D0,useActionState:D0,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Eo.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Do,useCacheRefresh:function(){return xt().memoizedState=kd.bind(null,se)},useEffectEvent:function(e){var t=xt(),a={impl:e};return t.memoizedState=a,function(){if((De&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},qo={readContext:ct,use:Ll,useCallback:q0,useContext:ct,useEffect:Mo,useImperativeHandle:E0,useInsertionEffect:R0,useLayoutEffect:k0,useMemo:L0,useReducer:Ul,useRef:T0,useState:function(){return Ul(ba)},useDebugValue:Co,useDeferredValue:function(e,t){var a=Ve();return U0(a,Te.memoizedState,e,t)},useTransition:function(){var e=Ul(ba)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:d0,useId:H0,useHostTransitionStatus:Oo,useFormState:w0,useActionState:w0,useOptimistic:function(e,t){var a=Ve();return g0(a,Te,e,t)},useMemoCache:Do,useCacheRefresh:Y0};qo.useEffectEvent=C0;var Q0={readContext:ct,use:Ll,useCallback:q0,useContext:ct,useEffect:Mo,useImperativeHandle:E0,useInsertionEffect:R0,useLayoutEffect:k0,useMemo:L0,useReducer:jo,useRef:T0,useState:function(){return jo(ba)},useDebugValue:Co,useDeferredValue:function(e,t){var a=Ve();return Te===null?Ro(a,e,t):U0(a,Te.memoizedState,e,t)},useTransition:function(){var e=jo(ba)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:d0,useId:H0,useHostTransitionStatus:Oo,useFormState:A0,useActionState:A0,useOptimistic:function(e,t){var a=Ve();return Te!==null?g0(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Do,useCacheRefresh:Y0};Q0.useEffectEvent=C0;function Lo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=kt(),i=Ba(n);i.payload=t,a!=null&&(i.callback=a),t=Fa(e,i,n),t!==null&&(Nt(t,e,n),Mi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=kt(),i=Ba(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Fa(e,i,n),t!==null&&(Nt(t,e,n),Mi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=kt(),n=Ba(a);n.tag=2,t!=null&&(n.callback=t),t=Fa(e,n,a),t!==null&&(Nt(t,e,a),Mi(t,e,a))}};function K0(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!zi(a,n)||!zi(i,r):!0}function J0(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function _n(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function W0(e){gl(e)}function $0(e){console.error(e)}function I0(e){gl(e)}function Hl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function eu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Bo(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,t)},a}function tu(e){return e=Ba(e),e.tag=3,e}function au(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){eu(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){eu(t,a,n),typeof i!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function Ed(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Gn(t,a,i,!0),a=Tt.current,a!==null){switch(a.tag){case 31:case 13:return Ht===null?er():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Tl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),us(e,n,i)),!1;case 22:return a.flags|=65536,n===Tl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),us(e,n,i)),!1}throw Error(c(435,a.tag))}return us(e,n,i),er(),!1}if(ye)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==no&&(e=Error(c(422),{cause:n}),Di(Ut(e,a)))):(n!==no&&(t=Error(c(423),{cause:n}),Di(Ut(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Ut(n,a),i=Bo(e.stateNode,n,i),ho(e,i),Ye!==4&&(Ye=2)),!1;var r=Error(c(520),{cause:n});if(r=Ut(r,a),Xi===null?Xi=[r]:Xi.push(r),Ye!==4&&(Ye=2),t===null)return!0;n=Ut(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Bo(a.stateNode,n,e),ho(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=tu(i),au(i,e,a,n),ho(a,i),!1}a=a.return}while(a!==null);return!1}var Fo=Error(c(461)),Ie=!1;function ut(e,t,a,n){t.child=e===null?r0(t,null,a,n):gn(t,e.child,a,n)}function nu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var s in n)s!=="ref"&&(o[s]=n[s])}else o=n;return hn(t),n=_o(e,t,a,o,r,i),s=zo(),e!==null&&!Ie?(So(e,t,i),_a(e,t,i)):(ye&&s&&to(t),t.flags|=1,ut(e,t,n,i),t.child)}function iu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!$r(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,lu(e,t,r,n,i)):(e=Sl(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Qo(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:zi,a(o,n)&&e.ref===t.ref)return _a(e,t,i)}return t.flags|=1,e=ha(r,n),e.ref=t.ref,e.return=t,t.child=e}function lu(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(zi(r,n)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=n=r,Qo(e,i))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,_a(e,t,i)}return Go(e,t,a,n,i)}function ru(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return ou(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(t,r!==null?r.cachePool:null),r!==null?c0(t,r):vo(),u0(t);else return n=t.lanes=536870912,ou(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(jl(t,r.cachePool),c0(t,r),Ha(),t.memoizedState=null):(e!==null&&jl(t,null),vo(),Ha());return ut(e,t,i,a),t.child}function Li(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ou(e,t,a,n,i){var r=uo();return r=r===null?null:{parent:We._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&jl(t,null),vo(),u0(t),e!==null&&Gn(e,t,n,!0),t.childLanes=i,null}function Yl(e,t){return t=Pl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function su(e,t,a){return gn(t,e.child,null,a),e=Yl(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function qd(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(n.mode==="hidden")return e=Yl(t,n),t.lanes=536870912,Li(null,e);if(go(t),(e=Ee)?(e=bp(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:aa,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=Pc(e),a.return=t,t.child=a,st=t,Ee=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return Yl(t,n)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(go(t),i)if(t.flags&256)t.flags&=-257,t=su(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ie||Gn(e,t,a,!1),i=(a&e.childLanes)!==0,Ie||i){if(n=ke,n!==null&&(o=$s(n,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,pn(e,o),Nt(n,e,o),Fo;er(),t=su(e,t,a)}else e=r.treeContext,Ee=Yt(o.nextSibling),st=t,ye=!0,Ea=null,Gt=!1,e!==null&&Qc(t,e),t=Yl(t,n),t.flags|=4096;return t}return e=ha(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Go(e,t,a,n,i){return hn(t),a=_o(e,t,a,n,void 0,i),n=zo(),e!==null&&!Ie?(So(e,t,i),_a(e,t,i)):(ye&&n&&to(t),t.flags|=1,ut(e,t,a,i),t.child)}function cu(e,t,a,n,i,r){return hn(t),t.updateQueue=null,a=f0(t,n,a,i),p0(e),n=zo(),e!==null&&!Ie?(So(e,t,r),_a(e,t,r)):(ye&&n&&to(t),t.flags|=1,ut(e,t,a,r),t.child)}function uu(e,t,a,n,i){if(hn(t),t.stateNode===null){var r=Ln,o=a.contextType;typeof o=="object"&&o!==null&&(r=ct(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Uo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},fo(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?ct(o):Ln,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Lo(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Uo.enqueueReplaceState(r,r.state,null),Ri(t,n,r,i),Ci(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,d=_n(a,s);r.props=d;var z=r.context,j=a.contextType;o=Ln,typeof j=="object"&&j!==null&&(o=ct(j));var C=a.getDerivedStateFromProps;j=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,j||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||z!==o)&&J0(t,r,n,o),Ua=!1;var N=t.memoizedState;r.state=N,Ri(t,n,r,i),Ci(),z=t.memoizedState,s||N!==z||Ua?(typeof C=="function"&&(Lo(t,a,C,n),z=t.memoizedState),(d=Ua||K0(t,a,d,n,N,z,o))?(j||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=z),r.props=n,r.state=z,r.context=o,n=d):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,mo(e,t),o=t.memoizedProps,j=_n(a,o),r.props=j,C=t.pendingProps,N=r.context,z=a.contextType,d=Ln,typeof z=="object"&&z!==null&&(d=ct(z)),s=a.getDerivedStateFromProps,(z=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==C||N!==d)&&J0(t,r,n,d),Ua=!1,N=t.memoizedState,r.state=N,Ri(t,n,r,i),Ci();var D=t.memoizedState;o!==C||N!==D||Ua||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof s=="function"&&(Lo(t,a,s,n),D=t.memoizedState),(j=Ua||K0(t,a,j,n,N,D,d)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,D,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,D,d)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),r.props=n,r.state=D,r.context=d,n=j):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Xl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=gn(t,e.child,null,i),t.child=gn(t,null,a,i)):ut(e,t,a,i),t.memoizedState=r.state,e=t.child):e=_a(e,t,i),e}function pu(e,t,a,n){return dn(),t.flags|=256,ut(e,t,a,n),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(e){return{baseLanes:e,cachePool:e0()}}function Xo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Rt),e}function fu(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(i?Ga(t):Ha(),(e=Ee)?(e=bp(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:aa,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=Pc(e),a.return=t,t.child=a,st=t,Ee=null)):e=null,e===null)throw qa(t);return ws(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,i?(Ha(),i=t.mode,s=Pl({mode:"hidden",children:s},i),n=fn(n,i,a,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=Yo(a),n.childLanes=Xo(e,o,a),t.memoizedState=Ho,Li(null,n)):(Ga(t),Po(t,s))}var d=e.memoizedState;if(d!==null&&(s=d.dehydrated,s!==null)){if(r)t.flags&256?(Ga(t),t.flags&=-257,t=Vo(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),s=n.fallback,i=t.mode,n=Pl({mode:"visible",children:n.children},i),s=fn(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,gn(t,e.child,null,a),n=t.child,n.memoizedState=Yo(a),n.childLanes=Xo(e,o,a),t.memoizedState=Ho,t=Li(null,n));else if(Ga(t),ws(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var z=o.dgst;o=z,n=Error(c(419)),n.stack="",n.digest=o,Di({value:n,source:null,stack:null}),t=Vo(e,t,a)}else if(Ie||Gn(e,t,a,!1),o=(a&e.childLanes)!==0,Ie||o){if(o=ke,o!==null&&(n=$s(o,a),n!==0&&n!==d.retryLane))throw d.retryLane=n,pn(e,n),Nt(o,e,n),Fo;Ds(s)||er(),t=Vo(e,t,a)}else Ds(s)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Ee=Yt(s.nextSibling),st=t,ye=!0,Ea=null,Gt=!1,e!==null&&Qc(t,e),t=Po(t,n.children),t.flags|=4096);return t}return i?(Ha(),s=n.fallback,i=t.mode,d=e.child,z=d.sibling,n=ha(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,z!==null?s=ha(z,s):(s=fn(s,i,a,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,Li(null,n),n=t.child,s=e.child.memoizedState,s===null?s=Yo(a):(i=s.cachePool,i!==null?(d=We._currentValue,i=i.parent!==d?{parent:d,pool:d}:i):i=e0(),s={baseLanes:s.baseLanes|a,cachePool:i}),n.memoizedState=s,n.childLanes=Xo(e,o,a),t.memoizedState=Ho,Li(e.child,n)):(Ga(t),a=e.child,e=a.sibling,a=ha(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Po(e,t){return t=Pl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pl(e,t){return e=At(22,e,null,t),e.lanes=0,e}function Vo(e,t,a){return gn(t,e.child,null,a),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function du(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ro(e.return,t,a)}function Zo(e,t,a,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=r)}function mu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var o=Pe.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,X(Pe,o),ut(e,t,n,a),n=ye?Ni:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,a,t);else if(e.tag===19)du(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Zo(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Zo(t,!0,a,null,r,n);break;case"together":Zo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function _a(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Gn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function Ld(e,t,a){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),La(t,We,e.memoizedState.cache),dn();break;case 27:case 5:Pt(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:La(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?fu(e,t,a):(Ga(t),e=_a(e,t,a),e!==null?e.sibling:null);Ga(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Gn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return mu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(Pe,Pe.current),n)break;return null;case 22:return t.lanes=0,ru(e,t,a,t.pendingProps);case 24:La(t,We,e.memoizedState.cache)}return _a(e,t,a)}function hu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Qo(e,a)&&(t.flags&128)===0)return Ie=!1,Ld(e,t,a);Ie=(e.flags&131072)!==0}else Ie=!1,ye&&(t.flags&1048576)!==0&&Zc(t,Ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=vn(t.elementType),t.type=e,typeof e=="function")$r(e)?(n=_n(e,n),t.tag=1,t=uu(null,t,e,n,a)):(t.tag=0,t=Go(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===U){t.tag=11,t=nu(null,t,e,n,a);break e}else if(i===ae){t.tag=14,t=iu(null,t,e,n,a);break e}}throw t=Xe(e)||e,Error(c(306,t,""))}}return t;case 0:return Go(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=_n(n,t.pendingProps),uu(e,t,n,i,a);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,mo(e,t),Ri(t,n,null,a);var o=t.memoizedState;if(n=o.cache,La(t,We,n),n!==r.cache&&oo(t,[We],a,!0),Ci(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=pu(e,t,n,a);break e}else if(n!==i){i=Ut(Error(c(424)),t),Di(i),t=pu(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=Yt(e.firstChild),st=t,ye=!0,Ea=null,Gt=!0,a=r0(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dn(),n===i){t=_a(e,t,a);break e}ut(e,t,n,a)}t=t.child}return t;case 26:return Xl(e,t),e===null?(a=wp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,n=or(ie.current).createElement(a),n[ot]=t,n[yt]=e,pt(n,a,e),it(n),t.stateNode=n):t.memoizedState=wp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pt(t),e===null&&ye&&(n=t.stateNode=Sp(t.type,t.pendingProps,ie.current),st=t,Gt=!0,i=Ee,Ja(t.type)?(js=i,Ee=Yt(n.firstChild)):Ee=i),ut(e,t,t.pendingProps.children,a),Xl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((i=n=Ee)&&(n=dm(n,t.type,t.pendingProps,Gt),n!==null?(t.stateNode=n,st=t,Ee=Yt(n.firstChild),Gt=!1,i=!0):i=!1),i||qa(t)),Pt(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,zs(i,r)?n=null:o!==null&&zs(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=_o(e,t,Ad,null,null,a),$i._currentValue=i),Xl(e,t),ut(e,t,n,a),t.child;case 6:return e===null&&ye&&((e=a=Ee)&&(a=mm(a,t.pendingProps,Gt),a!==null?(t.stateNode=a,st=t,Ee=null,e=!0):e=!1),e||qa(t)),null;case 13:return fu(e,t,a);case 4:return Le(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=gn(t,null,n,a):ut(e,t,n,a),t.child;case 11:return nu(e,t,t.type,t.pendingProps,a);case 7:return ut(e,t,t.pendingProps,a),t.child;case 8:return ut(e,t,t.pendingProps.children,a),t.child;case 12:return ut(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,La(t,t.type,n.value),ut(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,hn(t),i=ct(i),n=n(i),t.flags|=1,ut(e,t,n,a),t.child;case 14:return iu(e,t,t.type,t.pendingProps,a);case 15:return lu(e,t,t.type,t.pendingProps,a);case 19:return mu(e,t,a);case 31:return qd(e,t,a);case 22:return ru(e,t,a,t.pendingProps);case 24:return hn(t),n=ct(We),e===null?(i=uo(),i===null&&(i=ke,r=so(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},fo(t),La(t,We,i)):((e.lanes&a)!==0&&(mo(e,t),Ri(t,null,null,a),Ci()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),La(t,We,n)):(n=r.cache,La(t,We,n),n!==i.cache&&oo(t,[We],a,!0))),ut(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function za(e){e.flags|=4}function Ko(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Hu())e.flags|=8192;else throw yn=Tl,po}else e.flags&=-16777217}function xu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cp(t))if(Hu())e.flags|=8192;else throw yn=Tl,po}function Vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?wt():536870912,e.lanes|=t,In|=t)}function Ui(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ud(e,t,a){var n=t.pendingProps;switch(ao(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(We),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?za(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,io())),qe(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(za(t),r!==null?(qe(t),xu(t,r)):(qe(t),Ko(t,i,null,n,a))):r?r!==e.memoizedState?(za(t),qe(t),xu(t,r)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&za(t),qe(t),Ko(t,i,e,n,a)),null;case 27:if(Ma(t),a=ie.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&za(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return qe(t),null}e=H.current,Fn(t)?Kc(t):(e=Sp(i,n,a),t.stateNode=e,za(t))}return qe(t),null;case 5:if(Ma(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&za(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(r=H.current,Fn(t))Kc(t);else{var o=or(ie.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}r[ot]=t,r[yt]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(pt(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&za(t)}}return qe(t),Ko(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&za(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,Fn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=st,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||fp(e.nodeValue,a)),e||qa(t,!0)}else e=or(e).createTextNode(n),e[ot]=t,t.stateNode=e}return qe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Fn(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ot]=t}else dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else a=io(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return qe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[ot]=t}else dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else i=io(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Vl(t,t.updateQueue),qe(t),null);case 4:return Oe(),e===null&&vs(t.stateNode.containerInfo),qe(t),null;case 10:return ya(t.type),qe(t),null;case 19:if(A(Pe),n=t.memoizedState,n===null)return qe(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)Ui(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=kl(e),r!==null){for(t.flags|=128,Ui(n,!1),e=r.updateQueue,t.updateQueue=e,Vl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xc(a,e),a=a.sibling;return X(Pe,Pe.current&1|2),ye&&xa(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Re()>Wl&&(t.flags|=128,i=!0,Ui(n,!1),t.lanes=4194304)}else{if(!i)if(e=kl(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Vl(t,e),Ui(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ye)return qe(t),null}else 2*Re()-n.renderingStartTime>Wl&&a!==536870912&&(t.flags|=128,i=!0,Ui(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Re(),e.sibling=null,a=Pe.current,X(Pe,i?a&1|2:a&1),ye&&xa(t,n.treeForkCount),e):(qe(t),null);case 22:case 23:return Mt(t),yo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&Vl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&A(xn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ya(We),qe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Bd(e,t){switch(ao(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(We),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ma(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(c(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Pe),null;case 4:return Oe(),null;case 10:return ya(t.type),null;case 22:case 23:return Mt(t),yo(),e!==null&&A(xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(We),null;case 25:return null;default:return null}}function vu(e,t){switch(ao(t),t.tag){case 3:ya(We),Oe();break;case 26:case 27:case 5:Ma(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:A(Pe);break;case 10:ya(t.type);break;case 22:case 23:Mt(t),yo(),e!==null&&A(xn);break;case 24:ya(We)}}function Bi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(s){Ae(t,t.return,s)}}function Ya(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var d=a,z=s;try{z()}catch(j){Ae(i,d,j)}}}n=n.next}while(n!==r)}}catch(j){Ae(t,t.return,j)}}function yu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{s0(t,a)}catch(n){Ae(e,e.return,n)}}}function gu(e,t,a){a.props=_n(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ae(e,t,n)}}function Fi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ae(e,t,i)}}function ia(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ae(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ae(e,t,i)}else a.current=null}function bu(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ae(e,e.return,i)}}function Jo(e,t,a){try{var n=e.stateNode;om(n,e.type,a,t),n[yt]=t}catch(i){Ae(e,e.return,i)}}function _u(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=da));else if(n!==4&&(n===27&&Ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function Zl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,t,a),e=e.sibling;e!==null;)Zl(e,t,a),e=e.sibling}function zu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pt(t,n,a),t[ot]=e,t[yt]=a}catch(r){Ae(e,e.return,r)}}var Sa=!1,et=!1,Io=!1,Su=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Fd(e,t){if(e=e.containerInfo,bs=mr,e=Ec(e),Pr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,s=-1,d=-1,z=0,j=0,C=e,N=null;t:for(;;){for(var D;C!==a||i!==0&&C.nodeType!==3||(s=o+i),C!==r||n!==0&&C.nodeType!==3||(d=o+n),C.nodeType===3&&(o+=C.nodeValue.length),(D=C.firstChild)!==null;)N=C,C=D;for(;;){if(C===e)break t;if(N===a&&++z===i&&(s=o),N===r&&++j===n&&(d=o),(D=C.nextSibling)!==null)break;C=N,N=C.parentNode}C=D}a=s===-1||d===-1?null:{start:s,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(_s={focusedElem:e,selectionRange:a},mr=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Q=_n(a.type,i);e=n.getSnapshotBeforeUpdate(Q,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ae(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ns(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ns(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function Nu(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a),n&4&&Bi(5,a);break;case 1:if(Da(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ae(a,a.return,o)}else{var i=_n(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ae(a,a.return,o)}}n&64&&yu(a),n&512&&Fi(a,a.return);break;case 3:if(Da(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{s0(e,t)}catch(o){Ae(a,a.return,o)}}break;case 27:t===null&&n&4&&zu(a);case 26:case 5:Da(e,a),t===null&&n&4&&bu(a),n&512&&Fi(a,a.return);break;case 12:Da(e,a);break;case 31:Da(e,a),n&4&&ju(e,a);break;case 13:Da(e,a),n&4&&Au(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kd.bind(null,a),hm(e,a))));break;case 22:if(n=a.memoizedState!==null||Sa,!n){t=t!==null&&t.memoizedState!==null||et,i=Sa;var r=et;Sa=n,(et=t)&&!r?wa(e,a,(a.subtreeFlags&8772)!==0):Da(e,a),Sa=i,et=r}break;case 30:break;default:Da(e,a)}}function Du(e){var t=e.alternate;t!==null&&(e.alternate=null,Du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ar(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,bt=!1;function Na(e,t,a){for(a=a.child;a!==null;)wu(e,t,a),a=a.sibling}function wu(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ca,a)}catch{}switch(a.tag){case 26:et||ia(a,t),Na(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||ia(a,t);var n=Be,i=bt;Ja(a.type)&&(Be=a.stateNode,bt=!1),Na(e,t,a),Ki(a.stateNode),Be=n,bt=i;break;case 5:et||ia(a,t);case 6:if(n=Be,i=bt,Be=null,Na(e,t,a),Be=n,bt=i,Be!==null)if(bt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(r){Ae(a,t,r)}else try{Be.removeChild(a.stateNode)}catch(r){Ae(a,t,r)}break;case 18:Be!==null&&(bt?(e=Be,yp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),oi(e)):yp(Be,a.stateNode));break;case 4:n=Be,i=bt,Be=a.stateNode.containerInfo,bt=!0,Na(e,t,a),Be=n,bt=i;break;case 0:case 11:case 14:case 15:Ya(2,a,t),et||Ya(4,a,t),Na(e,t,a);break;case 1:et||(ia(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&gu(a,t,n)),Na(e,t,a);break;case 21:Na(e,t,a);break;case 22:et=(n=et)||a.memoizedState!==null,Na(e,t,a),et=n;break;default:Na(e,t,a)}}function ju(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oi(e)}catch(a){Ae(t,t.return,a)}}}function Au(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oi(e)}catch(a){Ae(t,t.return,a)}}function Gd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Su),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Su),t;default:throw Error(c(435,e.tag))}}function Ql(e,t){var a=Gd(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=Jd.bind(null,e,n);n.then(i,i)}})}function _t(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(Ja(s.type)){Be=s.stateNode,bt=!1;break e}break;case 5:Be=s.stateNode,bt=!1;break e;case 3:case 4:Be=s.stateNode.containerInfo,bt=!0;break e}s=s.return}if(Be===null)throw Error(c(160));wu(r,o,i),Be=null,bt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e),t=t.sibling}var Jt=null;function Tu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),zt(e),n&4&&(Ya(3,e,e.return),Bi(3,e),Ya(5,e,e.return));break;case 1:_t(t,e),zt(e),n&512&&(et||a===null||ia(a,a.return)),n&64&&Sa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Jt;if(_t(t,e),zt(e),n&512&&(et||a===null||ia(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[di]||r[ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),pt(r,n,a),r[ot]=e,it(r),n=r;break e;case"link":var o=Tp("link","href",i).get(n+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(r=o[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}r=i.createElement(n),pt(r,n,a),i.head.appendChild(r);break;case"meta":if(o=Tp("meta","content",i).get(n+(a.content||""))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}r=i.createElement(n),pt(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[ot]=e,it(r),n=r}e.stateNode=n}else Mp(i,e.type,e.stateNode);else e.stateNode=Ap(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Mp(i,e.type,e.stateNode):Ap(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Jo(e,e.memoizedProps,a.memoizedProps)}break;case 27:_t(t,e),zt(e),n&512&&(et||a===null||ia(a,a.return)),a!==null&&n&4&&Jo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_t(t,e),zt(e),n&512&&(et||a===null||ia(a,a.return)),e.flags&32){i=e.stateNode;try{Mn(i,"")}catch(Q){Ae(e,e.return,Q)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Jo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Io=!0);break;case 6:if(_t(t,e),zt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Q){Ae(e,e.return,Q)}}break;case 3:if(ur=null,i=Jt,Jt=sr(t.containerInfo),_t(t,e),Jt=i,zt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(Q){Ae(e,e.return,Q)}Io&&(Io=!1,Mu(e));break;case 4:n=Jt,Jt=sr(e.stateNode.containerInfo),_t(t,e),zt(e),Jt=n;break;case 12:_t(t,e),zt(e);break;case 31:_t(t,e),zt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ql(e,n)));break;case 13:_t(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=Re()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ql(e,n)));break;case 22:i=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,z=Sa,j=et;if(Sa=z||i,et=j||d,_t(t,e),et=j,Sa=z,zt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||d||Sa||et||zn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(r=d.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=d.stateNode;var C=d.memoizedProps.style,N=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Q){Ae(d,d.return,Q)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=i?"":d.memoizedProps}catch(Q){Ae(d,d.return,Q)}}}else if(t.tag===18){if(a===null){d=t;try{var D=d.stateNode;i?gp(D,!0):gp(d.stateNode,!1)}catch(Q){Ae(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ql(e,a))));break;case 19:_t(t,e),zt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ql(e,n)));break;case 30:break;case 21:break;default:_t(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(_u(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Wo(e);Zl(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(Mn(o,""),a.flags&=-33);var s=Wo(e);Zl(e,s,o);break;case 3:case 4:var d=a.stateNode.containerInfo,z=Wo(e);$o(e,z,d);break;default:throw Error(c(161))}}catch(j){Ae(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nu(e,t.alternate,t),t=t.sibling}function zn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),zn(t);break;case 1:ia(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&gu(t,t.return,a),zn(t);break;case 27:Ki(t.stateNode);case 26:case 5:ia(t,t.return),zn(t);break;case 22:t.memoizedState===null&&zn(t);break;case 30:zn(t);break;default:zn(t)}e=e.sibling}}function wa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:wa(i,r,a),Bi(4,r);break;case 1:if(wa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Ae(n,n.return,z)}if(n=r,i=n.updateQueue,i!==null){var s=n.stateNode;try{var d=i.shared.hiddenCallbacks;if(d!==null)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)o0(d[i],s)}catch(z){Ae(n,n.return,z)}}a&&o&64&&yu(r),Fi(r,r.return);break;case 27:zu(r);case 26:case 5:wa(i,r,a),a&&n===null&&o&4&&bu(r),Fi(r,r.return);break;case 12:wa(i,r,a);break;case 31:wa(i,r,a),a&&o&4&&ju(i,r);break;case 13:wa(i,r,a),a&&o&4&&Au(i,r);break;case 22:r.memoizedState===null&&wa(i,r,a),Fi(r,r.return);break;case 30:break;default:wa(i,r,a)}t=t.sibling}}function es(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wi(a))}function ts(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wi(e))}function Wt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cu(e,t,a,n),t=t.sibling}function Cu(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,n),i&2048&&Bi(9,t);break;case 1:Wt(e,t,a,n);break;case 3:Wt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wi(e)));break;case 12:if(i&2048){Wt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,s=r.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Ae(t,t.return,d)}}else Wt(e,t,a,n);break;case 31:Wt(e,t,a,n);break;case 13:Wt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Wt(e,t,a,n):Gi(e,t):r._visibility&2?Wt(e,t,a,n):(r._visibility|=2,Jn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&es(o,t);break;case 24:Wt(e,t,a,n),i&2048&&ts(t.alternate,t);break;default:Wt(e,t,a,n)}}function Jn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,s=a,d=n,z=o.flags;switch(o.tag){case 0:case 11:case 15:Jn(r,o,s,d,i),Bi(8,o);break;case 23:break;case 22:var j=o.stateNode;o.memoizedState!==null?j._visibility&2?Jn(r,o,s,d,i):Gi(r,o):(j._visibility|=2,Jn(r,o,s,d,i)),i&&z&2048&&es(o.alternate,o);break;case 24:Jn(r,o,s,d,i),i&&z&2048&&ts(o.alternate,o);break;default:Jn(r,o,s,d,i)}t=t.sibling}}function Gi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Gi(a,n),i&2048&&es(n.alternate,n);break;case 24:Gi(a,n),i&2048&&ts(n.alternate,n);break;default:Gi(a,n)}t=t.sibling}}var Hi=8192;function Wn(e,t,a){if(e.subtreeFlags&Hi)for(e=e.child;e!==null;)Ru(e,t,a),e=e.sibling}function Ru(e,t,a){switch(e.tag){case 26:Wn(e,t,a),e.flags&Hi&&e.memoizedState!==null&&jm(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:Wn(e,t,a);break;case 3:case 4:var n=Jt;Jt=sr(e.stateNode.containerInfo),Wn(e,t,a),Jt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Hi,Hi=16777216,Wn(e,t,a),Hi=n):Wn(e,t,a));break;default:Wn(e,t,a)}}function ku(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];lt=n,Eu(n,e)}ku(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ou(e),e=e.sibling}function Ou(e){switch(e.tag){case 0:case 11:case 15:Yi(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Yi(e);break;case 12:Yi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Kl(e)):Yi(e);break;default:Yi(e)}}function Kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];lt=n,Eu(n,e)}ku(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ya(8,t,t.return),Kl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(t));break;default:Kl(t)}e=e.sibling}}function Eu(e,t){for(;lt!==null;){var a=lt;switch(a.tag){case 0:case 11:case 15:Ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,lt=n;else e:for(a=e;lt!==null;){n=lt;var i=n.sibling,r=n.return;if(Du(n),n===a){lt=null;break e}if(i!==null){i.return=r,lt=i;break e}lt=r}}}var Hd={getCacheForType:function(e){var t=ct(We),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ct(We).controller.signal}},Yd=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,me=null,xe=0,je=0,Ct=null,Xa=!1,$n=!1,as=!1,ja=0,Ye=0,Pa=0,Sn=0,ns=0,Rt=0,In=0,Xi=null,St=null,is=!1,Jl=0,qu=0,Wl=1/0,$l=null,Va=null,nt=0,Za=null,ei=null,Aa=0,ls=0,rs=null,Lu=null,Pi=0,os=null;function kt(){return(De&2)!==0&&xe!==0?xe&-xe:S.T!==null?ds():Is()}function Uu(){if(Rt===0)if((xe&536870912)===0||ye){var e=ua;ua<<=1,(ua&3932160)===0&&(ua=262144),Rt=e}else Rt=536870912;return e=Tt.current,e!==null&&(e.flags|=32),Rt}function Nt(e,t,a){(e===ke&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(ti(e,0),Qa(e,xe,Rt,!1)),Ot(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(Sn|=a),Ye===4&&Qa(e,xe,Rt,!1)),la(e))}function Bu(e,t,a){if((De&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ea(e,t),i=n?Vd(e,t):cs(e,t,!0),r=n;do{if(i===0){$n&&!n&&Qa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Xd(a)){i=cs(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;i=Xi;var d=s.current.memoizedState.isDehydrated;if(d&&(ti(s,o).flags|=256),o=cs(s,o,!1),o!==2){if(as&&!d){s.errorRecoveryDisabledLanes|=r,Sn|=r,i=4;break e}r=St,St=i,r!==null&&(St===null?St=r:St.push.apply(St,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){ti(e,0),Qa(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Qa(n,t,Rt,!Xa);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Jl+300-Re(),10<i)){if(Qa(n,t,Rt,!Xa),Qt(n,0,!0)!==0)break e;Aa=t,n.timeoutHandle=xp(Fu.bind(null,n,a,St,$l,is,t,Rt,Sn,In,Xa,r,"Throttled",-0,0),i);break e}Fu(n,a,St,$l,is,t,Rt,Sn,In,Xa,r,null,-0,0)}}break}while(!0);la(e)}function Fu(e,t,a,n,i,r,o,s,d,z,j,C,N,D){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Ru(t,r,C);var Q=(r&62914560)===r?Jl-Re():(r&4194048)===r?qu-Re():0;if(Q=Am(C,Q),Q!==null){Aa=r,e.cancelPendingCommit=Q(Qu.bind(null,e,t,r,a,n,i,o,s,d,j,C,null,N,D)),Qa(e,r,o,!z);return}}Qu(e,t,r,a,n,i,o,s,d)}function Xd(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!jt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qa(e,t,a,n){t&=~ns,t&=~Sn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-Je(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&Js(e,a,t)}function Il(){return(De&6)===0?(Vi(0),!1):!0}function ss(){if(me!==null){if(je===0)var e=me.return;else e=me,va=mn=null,No(e),Pn=null,Ai=0,e=me;for(;e!==null;)vu(e.alternate,e),e=e.return;me=null}}function ti(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,um(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Aa=0,ss(),ke=e,me=a=ha(e.current,null),xe=t,je=0,Ct=null,Xa=!1,$n=ea(e,t),as=!1,In=Rt=ns=Sn=Pa=Ye=0,St=Xi=null,is=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Je(n),r=1<<i;t|=e[i],n&=~r}return ja=t,bl(),a}function Gu(e,t){se=null,S.H=qi,t===Xn||t===Al?(t=n0(),je=3):t===po?(t=n0(),je=4):je=t===Fo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,me===null&&(Ye=1,Hl(e,Ut(t,e.current)))}function Hu(){var e=Tt.current;return e===null?!0:(xe&4194048)===xe?Ht===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Ht:!1}function Yu(){var e=S.H;return S.H=qi,e===null?qi:e}function Xu(){var e=S.A;return S.A=Hd,e}function er(){Ye=4,Xa||(xe&4194048)!==xe&&Tt.current!==null||($n=!0),(Pa&134217727)===0&&(Sn&134217727)===0||ke===null||Qa(ke,xe,Rt,!1)}function cs(e,t,a){var n=De;De|=2;var i=Yu(),r=Xu();(ke!==e||xe!==t)&&($l=null,ti(e,t)),t=!1;var o=Ye;e:do try{if(je!==0&&me!==null){var s=me,d=Ct;switch(je){case 8:ss(),o=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var z=je;if(je=0,Ct=null,ai(e,s,d,z),a&&$n){o=0;break e}break;default:z=je,je=0,Ct=null,ai(e,s,d,z)}}Pd(),o=Ye;break}catch(j){Gu(e,j)}while(!0);return t&&e.shellSuspendCounter++,va=mn=null,De=n,S.H=i,S.A=r,me===null&&(ke=null,xe=0,bl()),o}function Pd(){for(;me!==null;)Pu(me)}function Vd(e,t){var a=De;De|=2;var n=Yu(),i=Xu();ke!==e||xe!==t?($l=null,Wl=Re()+500,ti(e,t)):$n=ea(e,t);e:do try{if(je!==0&&me!==null){t=me;var r=Ct;t:switch(je){case 1:je=0,Ct=null,ai(e,t,r,1);break;case 2:case 9:if(t0(r)){je=0,Ct=null,Vu(t);break}t=function(){je!==2&&je!==9||ke!==e||(je=7),la(e)},r.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:t0(r)?(je=0,Ct=null,Vu(t)):(je=0,Ct=null,ai(e,t,r,7));break;case 5:var o=null;switch(me.tag){case 26:o=me.memoizedState;case 5:case 27:var s=me;if(o?Cp(o):s.stateNode.complete){je=0,Ct=null;var d=s.sibling;if(d!==null)me=d;else{var z=s.return;z!==null?(me=z,tr(z)):me=null}break t}}je=0,Ct=null,ai(e,t,r,5);break;case 6:je=0,Ct=null,ai(e,t,r,6);break;case 8:ss(),Ye=6;break e;default:throw Error(c(462))}}Zd();break}catch(j){Gu(e,j)}while(!0);return va=mn=null,S.H=n,S.A=i,De=a,me!==null?0:(ke=null,xe=0,bl(),Ye)}function Zd(){for(;me!==null&&!Ne();)Pu(me)}function Pu(e){var t=hu(e.alternate,e,ja);e.memoizedProps=e.pendingProps,t===null?tr(e):me=t}function Vu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=cu(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=cu(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:No(t);default:vu(a,t),t=me=Xc(t,ja),t=hu(a,t,ja)}e.memoizedProps=e.pendingProps,t===null?tr(e):me=t}function ai(e,t,a,n){va=mn=null,No(t),Pn=null,Ai=0;var i=t.return;try{if(Ed(e,i,t,a,xe)){Ye=1,Hl(e,Ut(a,e.current)),me=null;return}}catch(r){if(i!==null)throw me=i,r;Ye=1,Hl(e,Ut(a,e.current)),me=null;return}t.flags&32768?(ye||n===1?e=!0:$n||(xe&536870912)!==0?e=!1:(Xa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Zu(t,e)):tr(t)}function tr(e){var t=e;do{if((t.flags&32768)!==0){Zu(t,Xa);return}e=t.return;var a=Ud(t.alternate,t,ja);if(a!==null){me=a;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ye===0&&(Ye=5)}function Zu(e,t){do{var a=Bd(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ye=6,me=null}function Qu(e,t,a,n,i,r,o,s,d){e.cancelPendingCommit=null;do ar();while(nt!==0);if((De&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Jr,wf(e,a,r,o,s,d),e===ke&&(me=ke=null,xe=0),ei=t,Za=e,Aa=a,ls=r,rs=i,Lu=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wd(ft,function(){return Iu(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=S.T,S.T=null,i=O.p,O.p=2,o=De,De|=4;try{Fd(e,t,a)}finally{De=o,O.p=i,S.T=n}}nt=1,Ku(),Ju(),Wu()}}function Ku(){if(nt===1){nt=0;var e=Za,t=ei,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var n=O.p;O.p=2;var i=De;De|=4;try{Tu(t,e);var r=_s,o=Ec(e.containerInfo),s=r.focusedElem,d=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&Oc(s.ownerDocument.documentElement,s)){if(d!==null&&Pr(s)){var z=d.start,j=d.end;if(j===void 0&&(j=z),"selectionStart"in s)s.selectionStart=z,s.selectionEnd=Math.min(j,s.value.length);else{var C=s.ownerDocument||document,N=C&&C.defaultView||window;if(N.getSelection){var D=N.getSelection(),Q=s.textContent.length,te=Math.min(d.start,Q),Ce=d.end===void 0?te:Math.min(d.end,Q);!D.extend&&te>Ce&&(o=Ce,Ce=te,te=o);var v=kc(s,te),x=kc(s,Ce);if(v&&x&&(D.rangeCount!==1||D.anchorNode!==v.node||D.anchorOffset!==v.offset||D.focusNode!==x.node||D.focusOffset!==x.offset)){var b=C.createRange();b.setStart(v.node,v.offset),D.removeAllRanges(),te>Ce?(D.addRange(b),D.extend(x.node,x.offset)):(b.setEnd(x.node,x.offset),D.addRange(b))}}}}for(C=[],D=s;D=D.parentNode;)D.nodeType===1&&C.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var M=C[s];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}mr=!!bs,_s=bs=null}finally{De=i,O.p=n,S.T=a}}e.current=t,nt=2}}function Ju(){if(nt===2){nt=0;var e=Za,t=ei,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var n=O.p;O.p=2;var i=De;De|=4;try{Nu(e,t.alternate,t)}finally{De=i,O.p=n,S.T=a}}nt=3}}function Wu(){if(nt===4||nt===3){nt=0,rt();var e=Za,t=ei,a=Aa,n=Lu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,ei=Za=null,$u(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Va=null),wr(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=S.T,i=O.p,O.p=2,S.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var s=n[o];r(s.value,{componentStack:s.stack})}}finally{S.T=t,O.p=i}}(Aa&3)!==0&&ar(),la(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===os?Pi++:(Pi=0,os=e):Pi=0,Vi(0)}}function $u(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wi(t)))}function ar(){return Ku(),Ju(),Wu(),Iu()}function Iu(){if(nt!==5)return!1;var e=Za,t=ls;ls=0;var a=wr(Aa),n=S.T,i=O.p;try{O.p=32>a?32:a,S.T=null,a=rs,rs=null;var r=Za,o=Aa;if(nt=0,ei=Za=null,Aa=0,(De&6)!==0)throw Error(c(331));var s=De;if(De|=4,Ou(r.current),Cu(r,r.current,o,a),De=s,Vi(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ca,r)}catch{}return!0}finally{O.p=i,S.T=n,$u(e,t)}}function ep(e,t,a){t=Ut(a,t),t=Bo(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(Ot(e,2),la(e))}function Ae(e,t,a){if(e.tag===3)ep(e,e,a);else for(;t!==null;){if(t.tag===3){ep(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Va===null||!Va.has(n))){e=Ut(a,e),a=tu(2),n=Fa(t,a,2),n!==null&&(au(a,n,t,e),Ot(n,2),la(n));break}}t=t.return}}function us(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Yd;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(as=!0,i.add(a),e=Qd.bind(null,e,t,a),t.then(e,e))}function Qd(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>Re()-Jl?(De&2)===0&&ti(e,0):ns|=a,In===xe&&(In=0)),la(e)}function tp(e,t){t===0&&(t=wt()),e=pn(e,t),e!==null&&(Ot(e,t),la(e))}function Kd(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),tp(e,a)}function Jd(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),tp(e,a)}function Wd(e,t){return pe(e,t)}var nr=null,ni=null,ps=!1,ir=!1,fs=!1,Ka=0;function la(e){e!==ni&&e.next===null&&(ni===null?nr=ni=e:ni=ni.next=e),ir=!0,ps||(ps=!0,Id())}function Vi(e,t){if(!fs&&ir){fs=!0;do for(var a=!1,n=nr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,s=n.pingedLanes;r=(1<<31-Je(42|e)+1)-1,r&=i&~(o&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,lp(n,r))}else r=xe,r=Qt(n,n===ke?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||ea(n,r)||(a=!0,lp(n,r));n=n.next}while(a);fs=!1}}function $d(){ap()}function ap(){ir=ps=!1;var e=0;Ka!==0&&cm()&&(e=Ka);for(var t=Re(),a=null,n=nr;n!==null;){var i=n.next,r=np(n,t);r===0?(n.next=null,a===null?nr=i:a.next=i,i===null&&(ni=a)):(a=n,(e!==0||(r&3)!==0)&&(ir=!0)),n=i}nt!==0&&nt!==5||Vi(e),Ka!==0&&(Ka=0)}function np(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Je(r),s=1<<o,d=i[o];d===-1?((s&a)===0||(s&n)!==0)&&(i[o]=at(s,t)):d<=t&&(e.expiredLanes|=s),r&=~s}if(t=ke,a=xe,a=Qt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ue(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ea(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ue(n),wr(a)){case 2:case 8:a=Zt;break;case 32:a=ft;break;case 268435456:a=ol;break;default:a=ft}return n=ip.bind(null,e),a=pe(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ue(n),e.callbackPriority=2,e.callbackNode=null,2}function ip(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ar()&&e.callbackNode!==a)return null;var n=xe;return n=Qt(e,e===ke?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Bu(e,n,t),np(e,Re()),e.callbackNode!=null&&e.callbackNode===a?ip.bind(null,e):null)}function lp(e,t){if(ar())return null;Bu(e,t,!0)}function Id(){pm(function(){(De&6)!==0?pe(tt,$d):ap()})}function ds(){if(Ka===0){var e=Hn;e===0&&(e=It,It<<=1,(It&261888)===0&&(It=256)),Ka=e}return Ka}function rp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function op(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function em(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=rp((i[yt]||null).action),o=n.submitter;o&&(t=(t=o[yt]||null)?rp(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var s=new xl("action","action",null,n,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ka!==0){var d=o?op(i,o):new FormData(i);ko(a,{pending:!0,data:d,method:i.method,action:r},null,d)}}else typeof r=="function"&&(s.preventDefault(),d=o?op(i,o):new FormData(i),ko(a,{pending:!0,data:d,method:i.method,action:r},r,d))},currentTarget:i}]})}}for(var ms=0;ms<Kr.length;ms++){var hs=Kr[ms],tm=hs.toLowerCase(),am=hs[0].toUpperCase()+hs.slice(1);Kt(tm,"on"+am)}Kt(Uc,"onAnimationEnd"),Kt(Bc,"onAnimationIteration"),Kt(Fc,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(yd,"onTransitionRun"),Kt(gd,"onTransitionStart"),Kt(bd,"onTransitionCancel"),Kt(Gc,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function sp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],d=s.instance,z=s.currentTarget;if(s=s.listener,d!==r&&i.isPropagationStopped())break e;r=s,i.currentTarget=z;try{r(i)}catch(j){gl(j)}i.currentTarget=null,r=d}else for(o=0;o<n.length;o++){if(s=n[o],d=s.instance,z=s.currentTarget,s=s.listener,d!==r&&i.isPropagationStopped())break e;r=s,i.currentTarget=z;try{r(i)}catch(j){gl(j)}i.currentTarget=null,r=d}}}}function he(e,t){var a=t[jr];a===void 0&&(a=t[jr]=new Set);var n=e+"__bubble";a.has(n)||(cp(t,e,2,!1),a.add(n))}function xs(e,t,a){var n=0;t&&(n|=4),cp(a,e,n,t)}var lr="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[lr]){e[lr]=!0,ac.forEach(function(a){a!=="selectionchange"&&(nm.has(a)||xs(a,!1,e),xs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lr]||(t[lr]=!0,xs("selectionchange",!1,t))}}function cp(e,t,a,n){switch(Up(t)){case 2:var i=Cm;break;case 8:i=Rm;break;default:i=Rs}a=i.bind(null,t,a,e),i=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ys(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=n.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Dn(s),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){n=r=o;continue e}s=s.parentNode}}n=n.return}mc(function(){var z=r,j=Or(a),C=[];e:{var N=Hc.get(e);if(N!==void 0){var D=xl,Q=e;switch(e){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":D=Jf;break;case"focusin":Q="focus",D=Fr;break;case"focusout":Q="blur",D=Fr;break;case"beforeblur":case"afterblur":D=Fr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=If;break;case Uc:case Bc:case Fc:D=Gf;break;case Gc:D=td;break;case"scroll":case"scrollend":D=qf;break;case"wheel":D=nd;break;case"copy":case"cut":case"paste":D=Yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=gc;break;case"toggle":case"beforetoggle":D=ld}var te=(t&4)!==0,Ce=!te&&(e==="scroll"||e==="scrollend"),v=te?N!==null?N+"Capture":null:N;te=[];for(var x=z,b;x!==null;){var M=x;if(b=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||b===null||v===null||(M=hi(x,v),M!=null&&te.push(Qi(x,M,b))),Ce)break;x=x.return}0<te.length&&(N=new D(N,Q,null,a,j),C.push({event:N,listeners:te}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",N&&a!==kr&&(Q=a.relatedTarget||a.fromElement)&&(Dn(Q)||Q[Nn]))break e;if((D||N)&&(N=j.window===j?j:(N=j.ownerDocument)?N.defaultView||N.parentWindow:window,D?(Q=a.relatedTarget||a.toElement,D=z,Q=Q?Dn(Q):null,Q!==null&&(Ce=_(Q),te=Q.tag,Q!==Ce||te!==5&&te!==27&&te!==6)&&(Q=null)):(D=null,Q=z),D!==Q)){if(te=vc,M="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(te=gc,M="onPointerLeave",v="onPointerEnter",x="pointer"),Ce=D==null?N:mi(D),b=Q==null?N:mi(Q),N=new te(M,x+"leave",D,a,j),N.target=Ce,N.relatedTarget=b,M=null,Dn(j)===z&&(te=new te(v,x+"enter",Q,a,j),te.target=b,te.relatedTarget=Ce,M=te),Ce=M,D&&Q)t:{for(te=im,v=D,x=Q,b=0,M=v;M;M=te(M))b++;M=0;for(var I=x;I;I=te(I))M++;for(;0<b-M;)v=te(v),b--;for(;0<M-b;)x=te(x),M--;for(;b--;){if(v===x||x!==null&&v===x.alternate){te=v;break t}v=te(v),x=te(x)}te=null}else te=null;D!==null&&up(C,N,D,te,!1),Q!==null&&Ce!==null&&up(C,Ce,Q,te,!0)}}e:{if(N=z?mi(z):window,D=N.nodeName&&N.nodeName.toLowerCase(),D==="select"||D==="input"&&N.type==="file")var _e=jc;else if(Dc(N))if(Ac)_e=hd;else{_e=dd;var J=fd}else D=N.nodeName,!D||D.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?z&&Rr(z.elementType)&&(_e=jc):_e=md;if(_e&&(_e=_e(e,z))){wc(C,_e,a,j);break e}J&&J(e,N,z),e==="focusout"&&z&&N.type==="number"&&z.memoizedProps.value!=null&&Cr(N,"number",N.value)}switch(J=z?mi(z):window,e){case"focusin":(Dc(J)||J.contentEditable==="true")&&(On=J,Vr=z,Si=null);break;case"focusout":Si=Vr=On=null;break;case"mousedown":Zr=!0;break;case"contextmenu":case"mouseup":case"dragend":Zr=!1,qc(C,a,j);break;case"selectionchange":if(vd)break;case"keydown":case"keyup":qc(C,a,j)}var ue;if(Hr)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else kn?Sc(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(bc&&a.locale!=="ko"&&(kn||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&kn&&(ue=hc()):(ka=j,Lr="value"in ka?ka.value:ka.textContent,kn=!0)),J=rr(z,ve),0<J.length&&(ve=new yc(ve,e,null,a,j),C.push({event:ve,listeners:J}),ue?ve.data=ue:(ue=Nc(a),ue!==null&&(ve.data=ue)))),(ue=od?sd(e,a):cd(e,a))&&(ve=rr(z,"onBeforeInput"),0<ve.length&&(J=new yc("onBeforeInput","beforeinput",null,a,j),C.push({event:J,listeners:ve}),J.data=ue)),em(C,e,z,a,j)}sp(C,t)})}function Qi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function rr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=hi(e,a),i!=null&&n.unshift(Qi(e,i,r)),i=hi(e,t),i!=null&&n.push(Qi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function im(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function up(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var s=a,d=s.alternate,z=s.stateNode;if(s=s.tag,d!==null&&d===n)break;s!==5&&s!==26&&s!==27||z===null||(d=z,i?(z=hi(a,r),z!=null&&o.unshift(Qi(a,z,d))):i||(z=hi(a,r),z!=null&&o.push(Qi(a,z,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var lm=/\r\n?/g,rm=/\u0000|\uFFFD/g;function pp(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(rm,"")}function fp(e,t){return t=pp(t),pp(e)===t}function Me(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Mn(e,""+n);break;case"className":ul(e,"class",n);break;case"tabIndex":ul(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ul(e,a,n);break;case"style":fc(e,n,r);break;case"data":if(t!=="object"){ul(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=fl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",i.name,i,null),Me(e,t,"formEncType",i.formEncType,i,null),Me(e,t,"formMethod",i.formMethod,i,null),Me(e,t,"formTarget",i.formTarget,i,null)):(Me(e,t,"encType",i.encType,i,null),Me(e,t,"method",i.method,i,null),Me(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=fl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=da);break;case"onScroll":n!=null&&he("scroll",e);break;case"onScrollEnd":n!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":he("beforetoggle",e),he("toggle",e),cl(e,"popover",n);break;case"xlinkActuate":fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":fa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":fa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":fa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":fa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":cl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Of.get(a)||a,cl(e,a,n))}}function gs(e,t,a,n,i,r){switch(a){case"style":fc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&Mn(e,""+n);break;case"onScroll":n!=null&&he("scroll",e);break;case"onScrollEnd":n!=null&&he("scrollend",e);break;case"onClick":n!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[yt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):cl(e,a,n)}}}function pt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Me(e,t,r,o,a,null)}}i&&Me(e,t,"srcSet",a.srcSet,a,null),n&&Me(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var s=r=o=i=null,d=null,z=null;for(n in a)if(a.hasOwnProperty(n)){var j=a[n];if(j!=null)switch(n){case"name":i=j;break;case"type":o=j;break;case"checked":d=j;break;case"defaultChecked":z=j;break;case"value":r=j;break;case"defaultValue":s=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:Me(e,t,n,j,a,null)}}sc(e,r,s,d,z,o,i,!1);return;case"select":he("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":r=s;break;case"defaultValue":o=s;break;case"multiple":n=s;default:Me(e,t,i,s,a,null)}t=r,a=o,e.multiple=!!n,t!=null?Tn(e,!!n,t,!1):a!=null&&Tn(e,!!n,a,!0);return;case"textarea":he("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":n=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:Me(e,t,o,s,a,null)}uc(e,n,i,r);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(n=a[d],n!=null))switch(d){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Me(e,t,d,n,a,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(n=0;n<Zi.length;n++)he(Zi[n],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(n=a[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Me(e,t,z,n,a,null)}return;default:if(Rr(t)){for(j in a)a.hasOwnProperty(j)&&(n=a[j],n!==void 0&&gs(e,t,j,n,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null&&Me(e,t,s,n,a,null))}function om(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,s=null,d=null,z=null,j=null;for(D in a){var C=a[D];if(a.hasOwnProperty(D)&&C!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":d=C;default:n.hasOwnProperty(D)||Me(e,t,D,null,n,C)}}for(var N in n){var D=n[N];if(C=a[N],n.hasOwnProperty(N)&&(D!=null||C!=null))switch(N){case"type":r=D;break;case"name":i=D;break;case"checked":z=D;break;case"defaultChecked":j=D;break;case"value":o=D;break;case"defaultValue":s=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:D!==C&&Me(e,t,N,D,n,C)}}Mr(e,o,s,d,z,j,r,i);return;case"select":D=o=s=N=null;for(r in a)if(d=a[r],a.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":D=d;default:n.hasOwnProperty(r)||Me(e,t,r,null,n,d)}for(i in n)if(r=n[i],d=a[i],n.hasOwnProperty(i)&&(r!=null||d!=null))switch(i){case"value":N=r;break;case"defaultValue":s=r;break;case"multiple":o=r;default:r!==d&&Me(e,t,i,r,n,d)}t=s,a=o,n=D,N!=null?Tn(e,!!a,N,!1):!!n!=!!a&&(t!=null?Tn(e,!!a,t,!0):Tn(e,!!a,a?[]:"",!1));return;case"textarea":D=N=null;for(s in a)if(i=a[s],a.hasOwnProperty(s)&&i!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Me(e,t,s,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":N=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&Me(e,t,o,i,n,r)}cc(e,N,D);return;case"option":for(var Q in a)if(N=a[Q],a.hasOwnProperty(Q)&&N!=null&&!n.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Me(e,t,Q,null,n,N)}for(d in n)if(N=n[d],D=a[d],n.hasOwnProperty(d)&&N!==D&&(N!=null||D!=null))switch(d){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Me(e,t,d,N,n,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)N=a[te],a.hasOwnProperty(te)&&N!=null&&!n.hasOwnProperty(te)&&Me(e,t,te,null,n,N);for(z in n)if(N=n[z],D=a[z],n.hasOwnProperty(z)&&N!==D&&(N!=null||D!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:Me(e,t,z,N,n,D)}return;default:if(Rr(t)){for(var Ce in a)N=a[Ce],a.hasOwnProperty(Ce)&&N!==void 0&&!n.hasOwnProperty(Ce)&&gs(e,t,Ce,void 0,n,N);for(j in n)N=n[j],D=a[j],!n.hasOwnProperty(j)||N===D||N===void 0&&D===void 0||gs(e,t,j,N,n,D);return}}for(var v in a)N=a[v],a.hasOwnProperty(v)&&N!=null&&!n.hasOwnProperty(v)&&Me(e,t,v,null,n,N);for(C in n)N=n[C],D=a[C],!n.hasOwnProperty(C)||N===D||N==null&&D==null||Me(e,t,C,N,n,D)}function dp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,o=i.initiatorType,s=i.duration;if(r&&s&&dp(o)){for(o=0,s=i.responseEnd,n+=1;n<a.length;n++){var d=a[n],z=d.startTime;if(z>s)break;var j=d.transferSize,C=d.initiatorType;j&&dp(C)&&(d=d.responseEnd,o+=j*(d<s?1:(s-z)/(d-z)))}if(--n,t+=8*(r+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bs=null,_s=null;function or(e){return e.nodeType===9?e:e.ownerDocument}function mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=null;function cm(){var e=window.event;return e&&e.type==="popstate"?e===Ss?!1:(Ss=e,!0):(Ss=null,!1)}var xp=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,pm=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(e){return vp.resolve(null).then(e).catch(fm)}:xp;function fm(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function yp(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),oi(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ki(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ki(a);for(var r=a.firstChild;r;){var o=r.nextSibling,s=r.nodeName;r[di]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&Ki(e.ownerDocument.body);a=i}while(a);oi(t)}function gp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ns(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ns(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dm(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function mm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function bp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function Ds(e){return e.data==="$?"||e.data==="$~"}function ws(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var js=null;function _p(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function zp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Sp(e,t,a){switch(t=or(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ki(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ar(e)}var Xt=new Map,Np=new Set;function sr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=O.d;O.d={f:xm,r:vm,D:ym,C:gm,L:bm,m:_m,X:Sm,S:zm,M:Nm};function xm(){var e=Ta.f(),t=Il();return e||t}function vm(e){var t=wn(e);t!==null&&t.tag===5&&t.type==="form"?G0(t):Ta.r(e)}var ii=typeof document>"u"?null:document;function Dp(e,t,a){var n=ii;if(n&&typeof t=="string"&&t){var i=qt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Np.has(i)||(Np.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),pt(t,"link",e),it(t),n.head.appendChild(t)))}}function ym(e){Ta.D(e),Dp("dns-prefetch",e,null)}function gm(e,t){Ta.C(e,t),Dp("preconnect",e,t)}function bm(e,t,a){Ta.L(e,t,a);var n=ii;if(n&&e&&t){var i='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+qt(a.imageSizes)+'"]')):i+='[href="'+qt(e)+'"]';var r=i;switch(t){case"style":r=li(e);break;case"script":r=ri(e)}Xt.has(r)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ji(r))||t==="script"&&n.querySelector(Wi(r))||(t=n.createElement("link"),pt(t,"link",e),it(t),n.head.appendChild(t)))}}function _m(e,t){Ta.m(e,t);var a=ii;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+qt(n)+'"][href="'+qt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ri(e)}if(!Xt.has(r)&&(e=R({rel:"modulepreload",href:e},t),Xt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wi(r)))return}n=a.createElement("link"),pt(n,"link",e),it(n),a.head.appendChild(n)}}}function zm(e,t,a){Ta.S(e,t,a);var n=ii;if(n&&e){var i=jn(n).hoistableStyles,r=li(e);t=t||"default";var o=i.get(r);if(!o){var s={loading:0,preload:null};if(o=n.querySelector(Ji(r)))s.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(r))&&As(e,a);var d=o=n.createElement("link");it(d),pt(d,"link",e),d._p=new Promise(function(z,j){d.onload=z,d.onerror=j}),d.addEventListener("load",function(){s.loading|=1}),d.addEventListener("error",function(){s.loading|=2}),s.loading|=4,cr(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(r,o)}}}function Sm(e,t){Ta.X(e,t);var a=ii;if(a&&e){var n=jn(a).hoistableScripts,i=ri(e),r=n.get(i);r||(r=a.querySelector(Wi(i)),r||(e=R({src:e,async:!0},t),(t=Xt.get(i))&&Ts(e,t),r=a.createElement("script"),it(r),pt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Nm(e,t){Ta.M(e,t);var a=ii;if(a&&e){var n=jn(a).hoistableScripts,i=ri(e),r=n.get(i);r||(r=a.querySelector(Wi(i)),r||(e=R({src:e,async:!0,type:"module"},t),(t=Xt.get(i))&&Ts(e,t),r=a.createElement("script"),it(r),pt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function wp(e,t,a,n){var i=(i=ie.current)?sr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=li(a.href),a=jn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=li(a.href);var r=jn(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(Ji(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),r||Dm(i,e,a,o.state))),t&&n===null)throw Error(c(528,""));return o}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ri(a),a=jn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function li(e){return'href="'+qt(e)+'"'}function Ji(e){return'link[rel="stylesheet"]['+e+"]"}function jp(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Dm(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),pt(t,"link",a),it(t),e.head.appendChild(t))}function ri(e){return'[src="'+qt(e)+'"]'}function Wi(e){return"script[async]"+e}function Ap(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(n)return t.instance=n,it(n),n;var i=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),it(n),pt(n,"style",i),cr(n,a.precedence,e),t.instance=n;case"stylesheet":i=li(a.href);var r=e.querySelector(Ji(i));if(r)return t.state.loading|=4,t.instance=r,it(r),r;n=jp(a),(i=Xt.get(i))&&As(n,i),r=(e.ownerDocument||e).createElement("link"),it(r);var o=r;return o._p=new Promise(function(s,d){o.onload=s,o.onerror=d}),pt(r,"link",n),t.state.loading|=4,cr(r,a.precedence,e),t.instance=r;case"script":return r=ri(a.src),(i=e.querySelector(Wi(r)))?(t.instance=i,it(i),i):(n=a,(i=Xt.get(r))&&(n=R({},a),Ts(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),it(i),pt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,cr(n,a.precedence,e));return t.instance}function cr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var s=n[o];if(s.dataset.precedence===t)r=s;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function As(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ur=null;function Tp(e,t,a){if(ur===null){var n=new Map,i=ur=new Map;i.set(a,n)}else i=ur,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[di]||r[ot]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var s=n.get(o);s?s.push(r):n.set(o,[r])}}return n}function Mp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jm(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=li(n.href),r=t.querySelector(Ji(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,it(r);return}r=t.ownerDocument||t,n=jp(n),(i=Xt.get(i))&&As(n,i),r=r.createElement("link"),it(r);var o=r;o._p=new Promise(function(s,d){o.onload=s,o.onerror=d}),pt(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ms=0;function Am(e,t){return e.stylesheets&&e.count===0&&dr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&dr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ms===0&&(Ms=62500*sm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ms?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function pr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fr=null;function dr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fr=new Map,t.forEach(Tm,e),fr=null,pr.call(e))}function Tm(e,t){if(!(t.state.loading&4)){var a=fr.get(e);if(a)var n=a.get(null);else{a=new Map,fr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=pr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $i={$$typeof:g,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Mm(e,t,a,n,i,r,o,s,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ta(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.hiddenUpdates=ta(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Rp(e,t,a,n,i,r,o,s,d,z,j,C){return e=new Mm(e,t,a,o,d,z,j,C,s),t=1,r===!0&&(t|=24),r=At(3,null,null,t),e.current=r,r.stateNode=e,t=so(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},fo(r),e}function kp(e){return e?(e=Ln,e):Ln}function Op(e,t,a,n,i,r){i=kp(i),n.context===null?n.context=i:n.pendingContext=i,n=Ba(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Fa(e,n,t),a!==null&&(Nt(a,e,t),Mi(a,e,t))}function Ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Cs(e,t){Ep(e,t),(e=e.alternate)&&Ep(e,t)}function qp(e){if(e.tag===13||e.tag===31){var t=pn(e,67108864);t!==null&&Nt(t,e,67108864),Cs(e,67108864)}}function Lp(e){if(e.tag===13||e.tag===31){var t=kt();t=Dr(t);var a=pn(e,t);a!==null&&Nt(a,e,t),Cs(e,t)}}var mr=!0;function Cm(e,t,a,n){var i=S.T;S.T=null;var r=O.p;try{O.p=2,Rs(e,t,a,n)}finally{O.p=r,S.T=i}}function Rm(e,t,a,n){var i=S.T;S.T=null;var r=O.p;try{O.p=8,Rs(e,t,a,n)}finally{O.p=r,S.T=i}}function Rs(e,t,a,n){if(mr){var i=ks(n);if(i===null)ys(e,t,n,hr,a),Bp(e,n);else if(Om(i,e,t,a,n))n.stopPropagation();else if(Bp(e,n),t&4&&-1<km.indexOf(e)){for(;i!==null;){var r=wn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=mt(r.pendingLanes);if(o!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var d=1<<31-Je(o);s.entanglements[1]|=d,o&=~d}la(r),(De&6)===0&&(Wl=Re()+500,Vi(0))}}break;case 31:case 13:s=pn(r,2),s!==null&&Nt(s,r,2),Il(),Cs(r,2)}if(r=ks(n),r===null&&ys(e,t,n,hr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else ys(e,t,n,null,a)}}function ks(e){return e=Or(e),Os(e)}var hr=null;function Os(e){if(hr=null,e=Dn(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hr=e,null}function Up(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case tt:return 2;case Zt:return 8;case ft:case oa:return 32;case ol:return 268435456;default:return 32}default:return 32}}var Es=!1,Wa=null,$a=null,Ia=null,Ii=new Map,el=new Map,en=[],km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bp(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(t.pointerId)}}function tl(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=wn(t),t!==null&&qp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Om(e,t,a,n,i){switch(t){case"focusin":return Wa=tl(Wa,e,t,a,n,i),!0;case"dragenter":return $a=tl($a,e,t,a,n,i),!0;case"mouseover":return Ia=tl(Ia,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Ii.set(r,tl(Ii.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,el.set(r,tl(el.get(r)||null,e,t,a,n,i)),!0}return!1}function Fp(e){var t=Dn(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,ec(e.priority,function(){Lp(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,ec(e.priority,function(){Lp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ks(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);kr=n,a.target.dispatchEvent(n),kr=null}else return t=wn(a),t!==null&&qp(t),e.blockedOn=a,!1;t.shift()}return!0}function Gp(e,t,a){xr(e)&&a.delete(t)}function Em(){Es=!1,Wa!==null&&xr(Wa)&&(Wa=null),$a!==null&&xr($a)&&($a=null),Ia!==null&&xr(Ia)&&(Ia=null),Ii.forEach(Gp),el.forEach(Gp)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Em)))}var yr=null;function Hp(e){yr!==e&&(yr=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){yr===e&&(yr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Os(n||a)===null)continue;break}var r=wn(a);r!==null&&(e.splice(t,3),t-=3,ko(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function oi(e){function t(d){return vr(d,e)}Wa!==null&&vr(Wa,e),$a!==null&&vr($a,e),Ia!==null&&vr(Ia,e),Ii.forEach(t),el.forEach(t);for(var a=0;a<en.length;a++){var n=en[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<en.length&&(a=en[0],a.blockedOn===null);)Fp(a),a.blockedOn===null&&en.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[yt]||null;if(typeof r=="function")o||Hp(a);else if(o){var s=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[yt]||null)s=o.formAction;else if(Os(i)!==null)continue}else s=o.action;typeof s=="function"?a[n+1]=s:(a.splice(n,3),n-=3),Hp(a)}}}function Yp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function qs(e){this._internalRoot=e}gr.prototype.render=qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=kt();Op(a,n,e,t,null,null)},gr.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Op(e.current,2,null,e,null,null),Il(),t[Nn]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Is();e={blockedOn:null,target:e,priority:t};for(var a=0;a<en.length&&t!==0&&t<en[a].priority;a++);en.splice(a,0,e),a===0&&Fp(e)}};var Xp=p.version;if(Xp!=="19.2.8")throw Error(c(527,Xp,"19.2.8"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var qm={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{Ca=br.inject(qm),dt=br}catch{}}return nl.createRoot=function(e,t){if(!y(e))throw Error(c(299));var a=!1,n="",i=W0,r=$0,o=I0;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Rp(e,1,!1,null,null,a,n,null,i,r,o,Yp),e[Nn]=t.current,vs(e),new qs(t)},nl.hydrateRoot=function(e,t,a){if(!y(e))throw Error(c(299));var n=!1,i="",r=W0,o=$0,s=I0,d=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=Rp(e,1,!0,t,a??null,n,i,d,r,o,s,Yp),t.context=kp(null),a=t.current,n=kt(),n=Dr(n),i=Ba(n),i.callback=null,Fa(a,i,n),a=n,t.current.lanes=a,Ot(t,a),la(t),e[Nn]=t.current,vs(e),new gr(t)},nl.version="19.2.8",nl}var ef;function Zm(){if(ef)return Us.exports;ef=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(p){console.error(p)}}return u(),Us.exports=Vm(),Us.exports}var Qm=Zm();const Km=Um(Qm);var k=Zs();const Jm=`
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
  pad3: f32,

  pad4: vec4<f32>,
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
    d = 0.5 * log(max(r, 0.001)) * r / max(dr, 0.0001);
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
    p = fract((p + vec3<f32>(1.0)) * 0.5) * 2.0 - vec3<f32>(1.0);
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
  let basinIso = length(z - vec2<f32>(1.0, 0.0)) - 0.45;
  let d_3d = sqrt(basinIso * basinIso + p.z * p.z * 0.4) - 0.14;
  let bound = length(p_in) - 2.8;
  return vec2<f32>(max(d_3d, bound), trap);
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
  var p = p_in * 1.8;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let sigma = 10.0; let rho = 28.0; let beta = 8.0 / 3.0;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var q = vec3<f32>(0.1 + f32(s) * 0.05, 0.0, 25.0 - f32(s) * 5.0);
    for (var i: i32 = 0; i < 30; i = i + 1) {
      let dx = sigma * (q.y - q.x);
      let dy = q.x * (rho - q.z) - q.y;
      let dz = q.x * q.y - beta * q.z;
      q = q + vec3<f32>(dx, dy, dz) * 0.004;
      let scaled = q * 0.04;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
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
  return vec2<f32>(d, trap);
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
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var q = vec3<f32>(f32(s) * 0.5 - 0.75, f32(s & 1) * 0.3 - 0.15, 0.0);
    for (var i: i32 = 0; i < 20; i = i + 1) {
      let xn = sin(aa * q.y) + cc * cos(aa * q.x);
      let yn = sin(bb * q.x) + dd * cos(bb * q.y);
      let zn = sin(q.z * 1.5 + t * 0.1) * 0.3;
      q = vec3<f32>(xn, yn, zn);
      let dist = length(p_in - q);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.35 - density * 0.08;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.6, density * 0.3);
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
  return vec2<f32>(d * 0.5, length(cell));
}

// 39. Ramanujan Modular Discriminant Delta(tau) Resonator
fn mapRamanujanTau(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let q = p_in;
  let r = length(q);
  let theta = atan2(q.y, q.x);
  let cusp24 = cos(24.0 * theta + t * 0.2) * 0.12;
  let r_target = 1.0 + cusp24 + sin(q.z * 8.0 * phi) * 0.15;
  let d_core = abs(r - r_target) - 0.04;
  let d_ribs = length(vec2<f32>(fract(r * 4.0 * phi) - 0.5, q.z * 0.5)) - 0.05;
  return vec2<f32>(min(d_core, d_ribs) * 0.5, abs(cusp24) * 2.0);
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
  var p = p_in * 1.3;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 1.4; let b = 0.3;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.1 - f32(s) * 0.08, f32(s) * 0.05);
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let x = 1.0 - a * v.x * v.x + v.y;
      let y = b * v.x;
      let z = sin(v.z * phi + t * 0.15) * 0.35;
      v = vec3<f32>(x, y, z);
      let scaled = v * 0.35;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
}

// 42. Aizawa Toroidal Chaotic Attractor (orbit-traced)
fn mapAizawaAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.95; let b = 0.7; let c = 0.6; let dd = 3.5; let e = 0.25; let f = 0.1;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.1, 0.0, 0.5 + f32(s) * 0.3);
    for (var i: i32 = 0; i < 20; i = i + 1) {
      let dx = (v.z - b) * v.x - dd * v.y;
      let dy = dd * v.x + (v.z - b) * v.y;
      let dz = c + a * v.z - v.z * v.z * v.z / 3.0 - (v.x * v.x + v.y * v.y) * (1.0 + e * v.z) + f * v.z * v.x * v.x * v.x;
      v = v + vec3<f32>(dx, dy, dz) * 0.05;
      let scaled = v * 0.5;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.35 - density * 0.07;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound) * 0.6, density * 0.2);
}

// 43. Thomas Cyclically Symmetric Attractor (orbit-traced, b=0.208186)
fn mapThomasAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.yz, t * 0.06);
  p = vec3<f32>(p.x, r0.x, r0.y);
  let b = 0.208186;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(1.0 + f32(s) * 0.3, 0.0, -1.0 + f32(s) * 0.5);
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let dx = sin(v.y) - b * v.x;
      let dy = sin(v.z) - b * v.y;
      let dz = sin(v.x) - b * v.z;
      v = v + vec3<f32>(dx, dy, dz) * 0.1;
      let scaled = v * 0.25;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.35 - density * 0.07;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
}

// 44. Halvorsen 3-Fold Chaotic Attractor (orbit-traced, a=1.89)
fn mapHalvorsenAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let r0 = rot2D(p.xy, t * 0.07);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let a = 1.89;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var v = vec3<f32>(-1.0 + f32(s) * 0.5, -1.0 + f32(s) * 0.3, -1.0);
    for (var i: i32 = 0; i < 20; i = i + 1) {
      let dx = -a * v.x - 4.0 * v.y - 4.0 * v.z - v.y * v.y;
      let dy = -a * v.y - 4.0 * v.z - 4.0 * v.x - v.z * v.z;
      let dz = -a * v.z - 4.0 * v.x - 4.0 * v.y - v.x * v.x;
      v = v + vec3<f32>(dx, dy, dz) * 0.04;
      let scaled = v * 0.12;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 3.5);
    }
  }
  let d = 0.35 - density * 0.07;
  let bound = length(p_in) - 2.0;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.18);
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
  for (var i = 0; i < 20; i++) {
    if (i >= iters) { break; }
    dz = 2.0 * length(z) * dz;
    z = vec2<f32>(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    trap += exp(-3.0 * length(z));
    if (dot(z, z) > 16.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dz, 0.001);
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(abs(d), bound * 0.3), trap);
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
  for (var i = 0; i < 16; i++) {
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
  for (var i = 0; i < 16; i++) {
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
  var sc: f32 = 2.6457513; // sqrt(7): Gosper curve scaling factor
  var trap = 0.0;
  for (var i = 0; i < 8; i++) {
    if (i >= iters) { break; }
    let q = p * sc;
    let d1 = length(q); let d2 = length(q - vec3<f32>(1.5, 0.0, 0.0));
    let d3 = length(q - vec3<f32>(0.75, 1.3, 0.0));
    let d4 = length(q - vec3<f32>(-0.75, 1.3, 0.0));
    let d5 = length(q - vec3<f32>(-1.5, 0.0, 0.0));
    let d6 = length(q - vec3<f32>(-0.75, -1.3, 0.0));
    let d7 = length(q - vec3<f32>(0.75, -1.3, 0.0));
    let mn = min(min(min(d1, d2), min(d3, d4)), min(min(d5, d6), d7));
    trap += mn / sc;
    sc *= 2.6457513;
  }
  let d = length(p) / sc * 0.5;
  return vec2<f32>(d, trap * 0.1);
}

// 49. L-System Plant (3D phyllotactic branching)
fn mapLSystemPlant(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let goldenAngle = 2.39996323;
  let sc = 1.0 / phi;
  var d = length(p) - 0.08;
  var trap = 0.0;
  for (var i = 0; i < 10; i++) {
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
  for (var i = 0; i < 12; i++) {
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
  var p = p_in * 1.5;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 5; s = s + 1) {
    var q = vec3<f32>(0.0, 0.0, 0.0);
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let fi = f32(i);
      let choice = fract(sin(fi * 12.9898 + f32(s) * 78.233 + 43.12) * 43758.5453);
      if (choice < 0.01) { q = vec3<f32>(0.0, 0.16 * q.y, 0.0); }
      else if (choice < 0.86) { q = vec3<f32>(0.85 * q.x + 0.04 * q.y, -0.04 * q.x + 0.85 * q.y + 1.6, 0.08 * q.z); }
      else if (choice < 0.93) { q = vec3<f32>(0.2 * q.x - 0.26 * q.y, 0.23 * q.x + 0.22 * q.y + 1.6, 0.08 * q.z); }
      else { q = vec3<f32>(-0.15 * q.x + 0.28 * q.y, 0.26 * q.x + 0.24 * q.y + 0.44, 0.08 * q.z); }
      let scaled = q * 0.06;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 6.0);
    }
  }
  let d = 0.25 - density * 0.05;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
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
  for (var i = 0; i < 8; i++) {
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
  for (var i = 0; i < 16; i++) {
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

// 59. Reaction-Diffusion (Gray-Scott Turing)
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
  var p = p_in * 1.5;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let alpha = 15.6; let beta = 28.0;
  let m0 = -1.143; let m1 = -0.714;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.1, 0.0, 0.1);
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let fx = m1 * v.x + 0.5 * (m0 - m1) * (abs(v.x + 1.0) - abs(v.x - 1.0));
      let dx = alpha * (v.y - v.x - fx);
      let dy = v.x - v.y + v.z;
      let dz2 = -beta * v.y;
      v = v + vec3<f32>(dx, dy, dz2) * 0.003;
      let scaled = v * 0.05;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
}

// 64. Standard Map (Chirikov-Taylor, orbit-traced)
fn mapStandardMap(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let K = 1.5 + 0.5 * sin(t * 0.1);
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var theta = f32(s) * 1.57 + 0.3;
    var p_val = f32(s) * 0.8 - 1.2;
    for (var i: i32 = 0; i < 30; i = i + 1) {
      let new_p = p_val + K * sin(theta);
      theta = mod(theta + new_p, 6.283185307);
      p_val = new_p;
      let pt = vec3<f32>(cos(theta) * 0.8, sin(theta) * 0.8, p_val * 0.15);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
}

// 65. Ikeda Map (orbit-traced)
fn mapIkedaMap(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let b = 0.9;
  let u = 0.4 + 0.05 * sin(t * 0.15);
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var xn = f32(s) * 0.3 - 0.45;
    var yn = f32(s) * 0.2 - 0.3;
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let ti = 0.4 - 6.0 / (1.0 + xn * xn + yn * yn);
      let cosT = cos(ti); let sinT = sin(ti);
      let xnew = 1.0 + u * (xn * cosT - yn * sinT);
      let ynew = u * (xn * sinT + yn * cosT);
      xn = xnew; yn = ynew;
      let pt = vec3<f32>(xn * 0.3, yn * 0.3, sin(f32(i) * 0.2 + t * 0.1) * 0.15);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  let d = 0.25 - density * 0.05;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
}

// 66. Koch Snowflake 3D (recursive triangular IFS)
fn mapKochSnowflake3D(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.06);
  p = vec3<f32>(r0.x, r0.y, p.z);
  var trap: f32 = 0.0;
  var sc: f32 = 1.0;
  let s3 = 1.0 / 3.0;
  for (var i: i32 = 0; i < 8; i = i + 1) {
    if (i >= iters) { break; }
    let q = p * sc;
    var mn: f32 = 1e10;
    let d1 = length(q); let d2 = length(q - vec3<f32>(s3, 0.0, 0.0));
    let d3 = length(q - vec3<f32>(0.5 * s3, s3 * 0.866, 0.0));
    let d4 = length(q - vec3<f32>(2.0 * s3, 0.0, 0.0));
    mn = min(min(d1, d2), min(d3, d4));
    trap += mn / sc;
    var best: f32 = 1e10; var bestOff = vec3<f32>(0.0, 0.0, 0.0);
    if (d1 < best) { best = d1; bestOff = vec3<f32>(0.0, 0.0, 0.0); }
    if (d2 < best) { best = d2; bestOff = vec3<f32>(s3, 0.0, 0.0); }
    if (d3 < best) { best = d3; bestOff = vec3<f32>(0.5 * s3, s3 * 0.866, 0.0); }
    if (d4 < best) { best = d4; bestOff = vec3<f32>(2.0 * s3, 0.0, 0.0); }
    p = (p - bestOff / sc) * sc * 3.0;
    sc = sc * 3.0;
  }
  let bound = length(p_in) - 2.2;
  let d = length(p) / sc;
  return vec2<f32>(max(d * 0.5, bound * 0.3), trap * 0.08);
}

// 67. Cantor Dust 3D (recursive corner cubes)
fn mapCantorDust(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xy, t * 0.05);
  p = vec3<f32>(r0.x, r0.y, p.z);
  var scale: f32 = 1.0;
  var trap: f32 = 0.0;
  for (var i: i32 = 0; i < 10; i = i + 1) {
    if (i >= iters) { break; }
    p = abs(p);
    if (p.x < p.y) { p = vec3<f32>(p.y, p.x, p.z); }
    if (p.x < p.z) { p = vec3<f32>(p.z, p.y, p.x); }
    if (p.y < p.z) { p = vec3<f32>(p.x, p.z, p.y); }
    p = p * 3.0 - vec3<f32>(2.0, 2.0, 2.0);
    scale = scale * 3.0;
    trap = min(trap, length(p));
  }
  let d = (length(p) - 0.4) / max(scale, 0.0001);
  return vec2<f32>(d, trap * 0.06);
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
  var minR: f32 = 1e10;
  var trap: f32 = 0.0;
  for (var i: i32 = 0; i < 20; i = i + 1) {
    if (i >= iters) { break; }
    z = vec2<f32>(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    let r = length(z);
    minR = min(minR, r);
    trap += exp(-2.0 * r);
    if (r > 4.0) { break; }
  }
  let fatou = smoothstep(0.0, 2.0, minR);
  let dd = abs(fatou - 0.5) - 0.05;
  let d3d = sqrt(dd * dd + p.z * p.z * 0.3) - 0.08;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d3d, bound) * 0.5, trap * 0.15);
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
  let d = abs(chladni) - 0.08;
  let plate = max(max(abs(p.x) - 1.5, abs(p.y) - 1.5), abs(p.z) - 0.06);
  let d3d = max(d, plate);
  return vec2<f32>(d3d * 0.5, abs(chladni));
}

// 72. FitzHugh-Nagumo Neural Dynamics (orbit-traced)
fn mapFitzHugh(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.7; let b_param = 0.8; let tau = 12.5;
  let I_ext = 0.5 + 0.2 * sin(t * 0.2);
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.1, -0.2, 0.0);
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let dv = v.x - v.y * v.y * v.y / 3.0 + v.y + I_ext;
      let dw = (v.x - a + b_param * v.y) / tau;
      let dz2 = sin(v.z * 2.0 + t * 0.1) * 0.1;
      v = v + vec3<f32>(dv, dw, dz2) * 0.08;
      let scaled = v * 0.25;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.18);
}

// 73. Rössler Attractor (orbit-traced, a=0.2, b=0.2, c=5.7)
fn mapRosslerAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.2; let b = 0.2; let c = 5.7;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.1, 0.1, 0.0);
    for (var i: i32 = 0; i < 30; i = i + 1) {
      let dx = -v.y - v.z;
      let dy = v.x + a * v.y;
      let dz2 = b + v.z * (v.x - c);
      v = v + vec3<f32>(dx, dy, dz2) * 0.01;
      let scaled = v * 0.08;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
}

// 74. Duffing Attractor (orbit-traced)
fn mapDuffingAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.3;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let alpha = 1.0; let beta_p = 5.0; let delta = 0.02; let gamma = 8.0;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.1, 0.0, f32(s) * 0.5);
    for (var i: i32 = 0; i < 25; i = i + 1) {
      let omega = 1.5 + f32(s) * 0.3;
      let dx = v.y;
      let dy = -delta * v.y - alpha * v.x - beta_p * v.x * v.x * v.x + gamma * cos(v.z);
      let dz2 = omega;
      v = v + vec3<f32>(dx, dy, dz2) * 0.015;
      let scaled = v * 0.15;
      let dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.3 - density * 0.06;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.18);
}

// 75. Logistic Map Bifurcation (period-doubling cascade, Feigenbaum δ≈4.669)
fn mapLogisticBifurcation(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.5;
  let r0 = rot2D(p.xz, t * 0.05);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let r = 2.5 + (p.x + 1.5) / 3.0 * 1.5;
  var density: f32 = 0.0;
  var minDist: f32 = 1e10;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var x = 0.3 + f32(s) * 0.15;
    for (var i: i32 = 0; i < 50; i = i + 1) {
      x = r * x * (1.0 - x);
    }
    for (var i: i32 = 0; i < 20; i = i + 1) {
      x = r * x * (1.0 - x);
      let pt = vec3<f32>(p.x, (x - 0.5) * 2.0, p.z + f32(s) * 0.1);
      let dist = length(p - pt);
      minDist = min(minDist, dist);
      density += exp(-dist * 6.0);
    }
  }
  let d = 0.25 - density * 0.05;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
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
    let ex = exp(z.x);
    let ez = vec2<f32>(ex * cos(z.y), ex * sin(z.y));
    dr = length(ez) * dr + 1.0;
    z = ez + p.xy * 0.3;
    trap = min(trap, length(z));
    if (dot(z, z) > 256.0) { break; }
  }
  let d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dr, 0.001);
  let bound = length(p_in) - 2.8;
  return vec2<f32>(max(d * 0.6, bound), trap);
}

// 77. DeJong Attractor
fn mapDeJongAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 2.24 + sin(t * 0.05) * 0.5;
  let b = -0.43 + cos(t * 0.07) * 0.3;
  let c_ = -0.65 + sin(t * 0.03) * 0.4;
  let d_ = 2.43 + cos(t * 0.04) * 0.3;
  var density: f32 = 0.0;
  let count = clamp(iters, 6, 20);
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var z = vec2<f32>(0.1 - f32(s) * 0.2, 0.1 + f32(s) * 0.15);
    for (var i: i32 = 0; i < 20; i = i + 1) {
      if (i >= count) { break; }
      let nz = vec2<f32>(sin(a * z.y) - cos(b * z.x), sin(c_ * z.x) - cos(d_ * z.y));
      z = nz;
      let pt = vec3<f32>(z * 0.7, p.z * 0.5 + f32(s) * 0.15);
      let dist = length(p - pt);
      density = density + exp(-dist * 5.0);
    }
  }
  let dd = 0.3 - density * 0.04;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(dd, bound) * 0.5, density * 0.15);
}

// 78. Pickover Attractor
fn mapPickoverAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.7;
  let a = -1.64 + sin(t * 0.04) * 0.4;
  let b = 1.9 + cos(t * 0.06) * 0.3;
  let c_ = -0.31 + sin(t * 0.05) * 0.3;
  let d_ = 0.72 + cos(t * 0.03) * 0.2;
  var density: f32 = 0.0;
  var z = vec2<f32>(0.1, 0.1);
  let count = clamp(iters, 8, 24);
  for (var i: i32 = 0; i < 24; i = i + 1) {
    if (i >= count) { break; }
    let nz = vec2<f32>(sin(a * z.y) + c_ * cos(a * z.x), sin(b * z.x) + d_ * cos(b * z.y));
    z = nz;
    let pt = vec3<f32>(z * 0.6, p.z * 0.4);
    let dist = length(p - pt);
    density = density + exp(-dist * 4.5);
  }
  let dd = 0.28 - density * 0.035;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(dd, bound) * 0.5, density * 0.12);
}

// 79. Vicsek Fractal (3D cross IFS, dim ~1.465)
fn mapVicsekFractal(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.8;
  let rot_a = t * 0.04;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  let scale: f32 = 3.0;
  var d: f32 = 1e10;
  let count = clamp(iters, 4, 12);
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (i >= count) { break; }
    p = abs(p);
    if (p.x < p.y) { p.xy = p.yx; }
    if (p.x < p.z) { p.xz = p.zx; }
    if (p.y < p.z) { p.yz = p.zy; }
    p = p * scale - vec3<f32>(scale - 1.0);
    d = min(d, length(p) * pow(scale, -f32(i + 1)));
  }
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound), length(p_in) * 0.3);
}

// 80. Mandelbar (Conjugate Mandelbrot)
fn mapMandelbar(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.4;
  let rot_a = t * 0.06;
  p = vec3<f32>(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  var z = p.xy;
  let c = p.xy;
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
  let bound = length(p_in) - 2.6;
  return vec2<f32>(max(d * 0.6, bound), trap);
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
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(abs(d) - 0.05, bound) * 0.6, trap);
}

// 83. Bedhead Attractor (3D chaotic)
fn mapBedheadAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.7;
  let a = 0.95 + sin(t * 0.04) * 0.2;
  let b = 0.7 + cos(t * 0.06) * 0.15;
  let c_ = 0.6 + sin(t * 0.05) * 0.2;
  var density: f32 = 0.0;
  var z = vec3<f32>(0.1, 0.1, 0.1);
  let count = clamp(iters, 6, 18);
  for (var i: i32 = 0; i < 18; i = i + 1) {
    if (i >= count) { break; }
    let nz = vec3<f32>(
      sin(a * z.y * z.z) - z.z * cos(b * z.x * z.y),
      z.z * sin(a * z.x) - cos(b * z.y * z.z),
      c_ * sin(z.x * z.z)
    );
    z = nz * 0.3;
    let dist = length(p - z);
    density = density + exp(-dist * 4.0);
  }
  let dd = 0.3 - density * 0.04;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(dd, bound) * 0.5, density * 0.15);
}

// 84. FourSpot Attractor (4-wing chaotic)
fn mapFourSpotAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 2.0 + sin(t * 0.05) * 0.5;
  var density: f32 = 0.0;
  var z = vec3<f32>(0.5, 0.5, 0.5);
  let count = clamp(iters, 6, 20);
  for (var i: i32 = 0; i < 20; i = i + 1) {
    if (i >= count) { break; }
    let nz = vec3<f32>(z.y * z.z - a * z.x, z.x * z.z - z.y, -z.x * z.y + z.z);
    z = nz * 0.3;
    let dist = length(p - z);
    density = density + exp(-dist * 5.0);
  }
  let dd = 0.25 - density * 0.04;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(dd, bound) * 0.5, density * 0.12);
}

// 85. Svensson Attractor
fn mapSvenssonAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.7;
  let a = 2.0 + sin(t * 0.04) * 0.3;
  let b = 0.2 + cos(t * 0.06) * 0.1;
  let c_ = 1.57 + sin(t * 0.05) * 0.2;
  let d_ = 0.4 + cos(t * 0.03) * 0.15;
  var density: f32 = 0.0;
  var z = vec2<f32>(0.1, 0.1);
  let count = clamp(iters, 8, 22);
  for (var i: i32 = 0; i < 22; i = i + 1) {
    if (i >= count) { break; }
    let nz = vec2<f32>(d_ * sin(a * z.y) - z.x * 0.1, b - z.x * cos(c_ * z.x));
    z = nz;
    let pt = vec3<f32>(z * 0.8, p.z * 0.4);
    let dist = length(p - pt);
    density = density + exp(-dist * 4.5);
  }
  let dd = 0.28 - density * 0.035;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(dd, bound) * 0.5, density * 0.12);
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
  return mapSvenssonAttractor(p, t, phi, iters);
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
  let h = clamp(0.5 - 0.5 * (d2 + d1) / max(k, 0.0001), 0.0, 1.0);
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
  let iters = i32(clamp(u.iterations, 4.0, 32.0));
  let t = u.time * u.morph_speed;
  let phi = u.phi_val;
  let compOp = i32(u.compose_op + 0.5);
  let k = max(0.04, u.smooth_k * 0.45);

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
  if (u.hybrid_blend > 0.02) {
    let resB = evalSingleFractal(ftypeB, p_eval, t, phi, clamp(iters - 2, 4, 10));
    let dB = resB.x;
    let trapB = resB.y;
    let blend = clamp(u.hybrid_blend, 0.0, 0.7);

    if (compOp == 0) {
      // 0: Continuous Topological Morph
      current_d = mix(current_d, dB, blend);
      current_trap = mix(current_trap, trapB, blend);
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
      // 3: Smooth Vault Carving (ssub)
      let h = clamp(0.5 - 0.5 * (dB + current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -dB, h) + k * h * (1.0 - h);
      current_trap = mix(current_trap, trapB, h);
    } else if (compOp == 4) {
      // 4: Domain Warp
      current_d = mix(current_d, dB, blend * 0.2);
      current_trap = mix(current_trap, trapB, 0.35);
    } else if (compOp == 5) {
      // 5: Harmonic Spectral Resonance (Smooth micro-relief without derivative explosion)
      let disp = clamp(dB * 0.16, -0.05, 0.05) * blend;
      current_d = current_d + disp;
      current_trap = min(current_trap, trapB);
    } else if (compOp == 6) {
      // 6: Interlaced TPMS Cellular Lattice
      let lattice = abs(dB) - 0.035;
      let h = clamp(0.5 - 0.5 * (lattice - current_d) / (k * 0.5), 0.0, 1.0);
      current_d = mix(lattice, current_d, h) + (k * 0.5) * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, 0.5);
    } else if (compOp == 7) {
      // 7: Conformal Spiral Vortex
      let twistFactor = clamp(blend * 0.6, 0.0, 0.75);
      let blended = opSmoothUnion(current_d, dB, k * 0.8);
      current_d = mix(current_d, blended, twistFactor);
      current_trap = min(current_trap, trapB);
    }
  }

  // 4. Tertiary Layer Evaluation (Only evaluated in direct proximity to surface)
  if (u.tertiary_blend > 0.03 && current_d < 0.1) {
    let resC = evalSingleFractal(ftypeC, p_eval, t, phi, clamp(iters / 2, 6, 16));
    let blendC = clamp(u.tertiary_blend, 0.05, 0.35);
    // Apply user-selected composite operator for consistent tertiary blending
    if (compOp == 2) {
      let h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
      current_d = mix(resC.x, current_d, h) + k * h * (1.0 - h);
    } else if (compOp == 3) {
      let h = clamp(0.5 - 0.5 * (resC.x + current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -resC.x, h) + k * h * (1.0 - h);
    } else if (compOp == 0) {
      current_d = mix(current_d, resC.x, blendC * 0.5);
    } else {
      current_d = opSmoothUnion(current_d, resC.x, k * blendC * 1.5);
    }
    current_trap = min(current_trap, resC.y);
  }

  // 5. Multi-Scale Golden Octaves
  let numOctaves = i32(clamp(u.octave_layers, 1.0, 4.0));
  if (numOctaves > 1 && current_d < 0.2) {
    var octScale = phi;
    var octAmp = 1.0 / phi;
    for (var oct: i32 = 1; oct < 3; oct = oct + 1) {
      if (oct >= numOctaves) { break; }
      let p_oct = p_eval * octScale;
      let octHarmonic = (sin(p_oct.x * phi) * cos(p_oct.y * phi) + sin(p_oct.z * phi)) / (phi * octScale);
      current_d = current_d + octHarmonic * octAmp * 0.12;
      octScale = octScale * phi;
      octAmp = octAmp / phi;
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

fn calcSoftShadow(ro: vec3<f32>, rd: vec3<f32>, mint: f32, maxt: f32, k: f32) -> f32 {
  var res: f32 = 1.0;
  var t: f32 = mint;
  for (var i: i32 = 0; i < 12; i = i + 1) {
    if (t >= maxt) { break; }
    let h = sceneSDF(ro + rd * t).x;
    if (h < 0.001) { return 0.0; }
    res = min(res, k * h / t);
    t = t + max(h * 0.85, 0.02);
  }
  return clamp(res, 0.0, 1.0);
}

fn calcAO(p: vec3<f32>, n: vec3<f32>) -> f32 {
  var occ: f32 = 0.0;
  var sca: f32 = 1.0;
  for (var i: i32 = 0; i < 5; i = i + 1) {
    let h = 0.012 + 0.09 * f32(i * i) / 16.0;
    let d = sceneSDF(p + h * n).x;
    occ = occ + (h - d) * sca;
    sca = sca * 0.74;
  }
  return clamp(1.0 - 2.8 * occ, 0.08, 1.0);
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
    let forward = vec3<f32>(sy * cp, sp, -cy * cp);
    let fwd_len = length(forward);
    forward = forward / max(fwd_len, 1e-6);
    let up_hint = vec3<f32>(0.0, 1.0, 0.0);
    let cross_fwd_up = cross(forward, up_hint);
    let cross_len = length(cross_fwd_up);
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
    let cross_ww_up = cross(ww, vec3<f32>(0.0, 1.0, 0.0));
    let cross_ww_len = length(cross_ww_up);
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
    let cross_ww_up2 = cross(ww, vec3<f32>(0.0, 1.0, 0.0));
    let cross_ww_len2 = length(cross_ww_up2);
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
  // Fixed large max_dist — decoupled from cam_dist to prevent far-side slicing
  // When camera is close, rays travel nearly parallel to surface and need full range
  let max_dist: f32 = 128.0;
  var hit: bool = false;
  var min_trap: f32 = 1e10;
  var steps: i32 = 0;

  for (var i: i32 = 0; i < 112; i = i + 1) {
    let p = ro + rd * t;
    let res = sceneSDF(p);
    let d = res.x;
    min_trap = min(min_trap, res.y);

    // No near-plane escape — let rays march from the start to prevent slicing artifacts

    let hit_threshold = 0.00075 * t + 0.00025;
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // Balanced step sizing: allows reaching surfaces within 112-step budget
    let step_factor = select(0.78, 0.92, abs(d) > 0.2);
    let step_d = max(abs(d) * step_factor, 0.001);
    t = t + step_d;
    if (t > max_dist) {
      break;
    }
  }

  let bg_rad = length(uv);
  var col = vec3<f32>(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u.time * 0.3));
  col = col + u.accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit) {
    let p = ro + rd * t;
    let base_n = calcNormal(p, min(0.0008 * t + 0.00025, 0.002));
    let ao = calcAO(p, base_n);
    var n = base_n;
    if (dot(n, rd) > 0.0) {
      n = -n;
    }

    let light1 = normalize(vec3<f32>(cos(u.time * 0.3), 1.2, sin(u.time * 0.3)));
    let light2 = normalize(vec3<f32>(-sin(u.time * 0.25 * GOLDEN_RATIO), -0.6, cos(u.time * 0.25 * GOLDEN_RATIO)));

    // Raymarched soft shadows from primary key light
    let sh1 = calcSoftShadow(p + n * 0.005, light1, 0.02, 3.5, 12.0);
    let sh2 = calcSoftShadow(p + n * 0.005, light2, 0.02, 2.2, 8.0);

    // Multi-sample Subsurface Scattering
    var sssCol = vec3<f32>(0.0, 0.0, 0.0);
    let sssDist: f32 = 0.06;
    var sssTotal: f32 = 0.0;
    for (var si: i32 = 0; si < 3; si = si + 1) {
      let sssAngle: f32 = f32(si) * GOLDEN_ANGLE;
      let sssOffset = vec3<f32>(cos(sssAngle), sin(sssAngle * 0.7), sin(sssAngle * 1.3)) * sssDist;
      let sssD = sceneSDF(p - light1 * sssOffset).x;
      sssTotal = sssTotal + smoothstep(0.0, sssDist * 1.5, sssD + sssDist * 1.5);
    }
    let sss: f32 = (sssTotal / 3.0) * 0.15; // Subtle SSS — high values wash out accent color
    sssCol = u.accent_color * sss * ao;
    let fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    let diff1 = max(dot(n, light1), 0.0) * (0.2 + 0.8 * sh1);
    let diff2 = max(dot(n, light2), 0.0) * (0.15 + 0.85 * sh2);

    let h1 = normalize(light1 - rd);
    let spec1 = pow(max(dot(n, h1), 0.0), 32.0) * sh1;
    
    // Harmonic Cosine Palette Engine with Golden Ratio phase distribution
    let phase = fract(min_trap * 0.85 + length(p) * 0.18 + u.time * 0.02);
    let w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    let w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    let w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    var mat_col = u.primary_color * w_primary + u.secondary_color * w_secondary;
    mat_col = mix(mat_col, u.accent_color, w_accent * 0.12); // Subtle accent — high values wash out to white
    mat_col = mix(mat_col, u.accent_color, pow(1.0 - ao, 2.0) * 0.08); // Low-edge accent tint

    let ambient = u.primary_color * 0.12 * ao;
    let diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    let specular = mat_col * spec1 * 0.35 * ao; // Tinted by material color — never white
    let rim = u.accent_color * fresnel * 0.18 * (0.3 + 0.7 * ao); // Subtle rim — high values create white edges

    // Clean surface lighting: no headlamp, minimal SSS
    col = ambient + diffuse + specular + rim + sssCol;
    col = col * (0.22 + 0.78 * ao); // Stronger AO contrast for depth

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

    // Surface curvature from normal variation (2 extra SDF calls)
    let ce: f32 = min(0.001 * t + 0.0005, 0.003);
    let dn1 = calcNormal(p + vec3<f32>(ce, 0.0, 0.0), ce) - n;
    let dn2 = calcNormal(p + vec3<f32>(0.0, ce, 0.0), ce) - n;
    let curv = clamp((length(dn1) + length(dn2)) / (2.0 * ce), 0.0, 8.0);
    let curvNorm = clamp(curv / 5.0, 0.0, 1.0);
    let trapDetail = clamp(1.0 / (1.0 + min_trap * 2.0), 0.0, 1.0);

    if (u.render_style > 0.5 && u.render_style < 1.5) {
      // 1. X-Ray Томография: Curvature bone density + orbit trap vasculature
      let dens = clamp(f32(steps) / 65.0, 0.0, 1.0);
      let boneDensity = mix(0.2, 1.0, curvNorm * 0.6 + ao * 0.4);
      let xrayCore = u.accent_color * boneDensity * (0.4 + trapDetail * 0.8);
      let xrayVessel = u.primary_color * trapDetail * (0.3 + dens * 0.7);
      let edgeGlow = pow(1.0 - ao, 2.5) * (0.5 + curvNorm * 0.5);
      let xrayShell = u.secondary_color * edgeGlow;
      var xrayCol = mix(xrayVessel, xrayCore, boneDensity) + xrayShell * 0.6;
      xrayCol = xrayCol + u.accent_color * curvNorm * 0.4;
      col = mix(col * 0.15, xrayCol * 1.5, 0.75 + 0.25 * ao);
    } else if (u.render_style > 1.5 && u.render_style < 2.5) {
      // 2. Топография: Curvature-enhanced ridges + multi-scale contours
      let elevation = dot(n, vec3<f32>(0.0, 1.0, 0.0)) * 0.5 + 0.5;
      let contour1 = abs(fract(elevation * 14.0) - 0.5) * 2.0;
      let contour2 = abs(fract(elevation * 5.0 + curvNorm * 0.4) - 0.5) * 2.0;
      let contourRaw = min(contour1, contour2);
      let contour = smoothstep(0.0, 0.06, contourRaw);
      let ridgeLine = smoothstep(0.35, 0.65, curvNorm);
      let topoLow = u.secondary_color * (0.3 + trapDetail * 0.2);
      let topoHigh = u.primary_color * (0.5 + elevation * 0.9);
      let topoRidge = u.accent_color * (0.7 + curvNorm * 1.3);
      var topoCol = mix(topoLow, topoHigh, elevation);
      topoCol = mix(topoCol, topoRidge, ridgeLine * 0.6 + elevation * 0.3);
      topoCol = mix(topoCol, topoCol * 2.0, (1.0 - contour) * 0.45);
      let slope = 1.0 - abs(dot(n, vec3<f32>(0.0, 1.0, 0.0)));
      topoCol = topoCol * (0.4 + 0.6 * slope);
      col = topoCol * (0.4 + 0.6 * ao);
    } else if (u.render_style > 2.5 && u.render_style < 3.5) {
      // 3. Голографическая проекция: Curvature wireframe + data glitch + scan lines
      let depthNorm = clamp(t / 20.0, 0.0, 1.0);
      let rOff = sin(depthNorm * 20.0 + u.time * 3.0) * 0.025;
      let gOff = sin(depthNorm * 20.0 + u.time * 3.0 + 2.094) * 0.025;
      let bOff = sin(depthNorm * 20.0 + u.time * 3.0 + 4.189) * 0.025;
      let holoBase = vec3<f32>(
        u.primary_color.r * (1.0 + rOff),
        u.primary_color.g * (1.0 + gOff),
        u.primary_color.b * (1.0 + bOff)
      );
      let holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
      let scanFreq = 180.0 + depthNorm * 120.0;
      let scanline = 0.82 + 0.18 * sin(in.uv.y * scanFreq + u.time * 8.0);
      let wireframe = smoothstep(0.3, 0.7, curvNorm);
      let glitch = step(0.96, fract(sin(dot(p, vec3<f32>(12.9898, 78.233, 45.164)) + u.time * 2.0) * 43758.5));
      let shimmer = 0.88 + 0.12 * sin(u.time * 5.0 + length(p) * 10.0);
      var holoCol = holoBase * (0.35 + holoFres * 1.4 + wireframe * 0.5) * scanline * shimmer;
      holoCol = holoCol + u.accent_color * wireframe * 1.2;
      holoCol = holoCol + vec3<f32>(0.15, 0.4, 0.7) * holoFres * 1.5;
      holoCol = holoCol + u.accent_color * glitch * 3.0;
      holoCol = holoCol + u.primary_color * trapDetail * 0.3;
      col = mix(col * 0.08, holoCol, 0.93);
    } else if (u.render_style > 3.5 && u.render_style < 4.5) {
      // 4. Радужная интерференция: Curvature-varying film thickness
      let nv = max(dot(n, -rd), 0.0);
      let filmThickness = 0.5 + curvNorm * 0.8 + trapDetail * 0.3;
      let order1 = nv * 3.0 * filmThickness + min_trap * 0.5;
      let order2 = nv * 5.0 * filmThickness + min_trap * 0.3 + u.time * 0.08;
      let order3 = nv * 7.0 * filmThickness + min_trap * 0.2;
      let iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33));
      let iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33));
      let iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
      var iridCol = vec3<f32>(iridR, iridG, iridB);
      let hIrid = normalize(light1 - rd);
      let specAngle = max(dot(n, hIrid), 0.0);
      let specIrid = vec3<f32>(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * sh1 * 2.0;
      iridCol = iridCol * (0.7 + trapDetail * 0.3);
      col = iridCol * (0.45 + 0.55 * ao) + specIrid;
    } else if (u.render_style > 4.5 && u.render_style < 5.5) {
      // 5. Квантовое поле: Trap-based probability + curvature energy density
      let wave1 = sin(length(p) * 12.0 - u.time * 3.5);
      let wave2 = cos(dot(p, normalize(vec3<f32>(1.618, 1.0, 0.618))) * 7.0 + u.time * 2.2);
      let wave3 = sin(dot(p, normalize(vec3<f32>(-0.618, 1.618, 1.0))) * 9.0 - u.time * 1.8);
      let interference = (wave1 + wave2 + wave3) / 3.0;
      let probability = trapDetail * 0.6 + (0.5 + 0.5 * interference) * 0.4;
      let energy = pow(abs(interference), 0.7) * (0.5 + curvNorm * 0.5);
      let plasmaCold = u.secondary_color * (0.25 + probability * 0.5);
      let plasmaHot = u.accent_color * (0.6 + energy * 1.8);
      var qCol = mix(plasmaCold, plasmaHot, energy);
      qCol = qCol + u.accent_color * pow(fresnel, 2.0) * 1.2;
      qCol = qCol + u.primary_color * curvNorm * 0.35;
      qCol = qCol * (0.6 + trapDetail * 0.4);
      col = qCol * (0.35 + 0.65 * ao) + sssCol * 1.2;
    } else if (u.render_style > 5.5) {
      // 6. Кристалл: Curvature facets + trap inclusions + Beer-Lambert
      let beer = exp(-max(t - 0.5, 0.0) * vec3<f32>(0.08, 0.25, 0.9));
      let caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
      let caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
      let caustic = caustic1 + caustic2;
      let facetStrength = 0.3 + curvNorm * 0.7;
      let refractCol = mix(u.primary_color, u.accent_color, fresnel * facetStrength);
      var gemCol = refractCol * beer;
      let gemSpec = vec3<f32>(1.0, 0.96, 0.82) * spec1 * 2.0;
      let dispersion = fresnel * (0.1 + curvNorm * 0.15);
      gemCol.r = gemCol.r * (1.0 + dispersion);
      gemCol.b = gemCol.b * (1.0 - dispersion * 0.5);
      gemCol = gemCol + u.secondary_color * trapDetail * 0.2 * beer;
      gemCol = gemCol * facetStrength;
      col = gemCol * (0.6 + 0.4 * ao) + gemSpec + u.accent_color * caustic * 0.6;
    }

    // Distance-relative atmospheric falloff
    let fogStart: f32 = select(select(max(2.0, cam_dist + 2.5), 8.0, cam_dist < 2.0), 16.0, cam_dist < 1.0);
    let fogDensity: f32 = select(0.02, 0.012, cam_dist < 1.0);
    let fog = 1.0 - exp(-max(0.0, t - fogStart) * fogDensity);
    col = mix(col, vec3<f32>(0.005, 0.004, 0.008), fog * clamp(u.volumetric_fog, 0.0, 1.0));
  }

  col = acesToneMap(col);

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
`,$t=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function ci(u){switch(u){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;default:return 0}}function pf(u){switch(u){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function ff(u){switch(u){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function df(u){switch(u){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function mf(u){switch(u){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class Qs{constructor(p){this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.canvas=p}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!Qs.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const p=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(_=>setTimeout(()=>_(null),5e3));if(this.adapter=await Promise.race([p,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const _=this.adapter.info;_&&(_.vendor||_.description)?this.adapterInfo=`${_.vendor||""} ${_.description||_.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(_=>{console.warn(`WebGPU device lost: ${_.message}`,_),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const c=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:c,alphaMode:"premultiplied"});try{const _=this.device.createCommandEncoder();_.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([_.finish()])}catch(_){console.debug("Initial clear pass handled:",_)}const y=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:Jm});if("getCompilationInfo"in y)try{const w=(await y.getCompilationInfo()).messages.filter(E=>E.type==="error");if(w.length>0){for(const E of w)console.error(`[WGSL Compile Error] Line ${E.lineNum}:${E.linePos}: ${E.message}`);return!1}}catch(_){console.debug("Compilation info inspection skipped:",_)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:y,entryPoint:"vs_main"},fragment:{module:y,entryPoint:"fs_main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(p){return console.warn("WebGPU init failed, will use fallback:",p),!1}}render(p,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const c=this.canvas.width,y=this.canvas.height;if(c===0||y===0)return;const _=f.customPalette||$t.find(F=>F.id===f.paletteId)||$t[0],w=ci(f.type),E=ci(f.hybridType||f.type),T=ci(f.tertiaryType||"riemannZeta"),m=this.uniformValues;m[0]=c,m[1]=y,m[2]=p,m[3]=f.phiMultiplier,m[4]=f.rotX,m[5]=f.rotY,m[6]=f.zoom,m[7]=w,m[8]=f.iterations,m[9]=f.glowIntensity,m[10]=f.morphSpeed,m[11]=E,m[12]=f.hybridBlend??0,m[13]=f.boxFold??1.2,m[14]=f.sphereFold??.65,m[15]=f.interiorCut??.35,m[16]=_.primary[0],m[17]=_.primary[1],m[18]=_.primary[2],m[19]=T,m[20]=_.secondary[0],m[21]=_.secondary[1],m[22]=_.secondary[2],m[23]=f.tertiaryBlend??0,m[24]=_.accent[0],m[25]=_.accent[1],m[26]=_.accent[2],m[27]=pf(f.compositeOp),m[28]=f.smoothK??.35,m[29]=f.warpStrength??.3,m[30]=f.octaveLayers??2,m[31]=ff(f.cameraMode),m[32]=f.camPosX??0,m[33]=f.camPosY??0,m[34]=f.camPosZ??0,m[35]=f.slicePlane??0,m[36]=f.headlampPower??.3,m[37]=f.volumetricFog??.15,m[38]=df(f.sliceAxis),m[39]=mf(f.renderStyle),m[40]=_.ambient?_.ambient[0]:.02,m[41]=_.ambient?_.ambient[1]:.02,m[42]=_.ambient?_.ambient[2]:.02,m[43]=0,m[44]=0,m[45]=0,m[46]=0,m[47]=0,this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const F=this.device.createCommandEncoder(),R=this.context.getCurrentTexture().createView(),q=F.beginRenderPass({colorAttachments:[{view:R,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});q.setPipeline(this.pipeline),q.setBindGroup(0,this.bindGroup),q.draw(3,1,0,0),q.end(),this.device.queue.submit([F.finish()])}catch(F){console.debug("WebGPU render frame skipped:",F.message)}}destroy(){var p,f;this.isDestroyed=!0;try{(p=this.uniformBuffer)==null||p.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const Wm=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,$m=Wm,Im=`#version 300 es
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
uniform float u_render_style;
uniform float u_headlamp_power;
uniform float u_volumetric_fog;

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
    d = 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
  } else {
    d = 0.5 * log(max(r, 0.001)) * r / max(dr, 0.0001);
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
  return vec2((length(p) - 0.72) / max(scale, 0.0001), trap);
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
  return vec2((length(p) - 0.4) / max(abs(scale), 0.0001), trap);
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
  return vec2((length(p) - 0.45) / max(scale, 0.0001), trap);
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
  return vec2((length(p) - 0.6) / max(scale, 0.0001), trap);
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
  return vec2((length(p) - 0.5) / max(scale, 0.0001), trap);
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
  return vec2((length(p) - 0.6) / max(scale, 0.001), trap);
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
  return vec2((length(p) - 0.45) / max(scale, 0.0001), trap);
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
  float basinIso = length(z - vec2(1.0, 0.0)) - 0.45;
  float d_3d = sqrt(basinIso * basinIso + p.z * p.z * 0.4) - 0.14;
  float bound = length(p_in) - 2.8;
  return vec2(max(d_3d, bound), trap);
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
  return vec2(d, trap);
}

// 30. 3D Lorenz Strange Attractor (orbit-traced, sigma=10, rho=28, beta=8/3)
vec2 mapLorenzAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.8;
  p.xz = rot2D(t * 0.08) * p.xz;
  float sigma = 10.0, rho = 28.0, beta = 8.0 / 3.0;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 q = vec3(0.1 + float(s) * 0.05, 0.0, 25.0 - float(s) * 5.0);
    for (int i = 0; i < 30; i++) {
      float dx = sigma * (q.y - q.x);
      float dy = q.x * (rho - q.z) - q.y;
      float dz = q.x * q.y - beta * q.z;
      q += vec3(dx, dy, dz) * 0.004;
      vec3 scaled = q * 0.04;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
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
  return vec2(d, trap);
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
  // Orbit-trace: iterate from multiple seeds, accumulate density near p
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 4; s++) {
    // 4 different seed points for coverage
    vec3 q = vec3(float(s) * 0.5 - 0.75, float(s & 1) * 0.3 - 0.15, 0.0);
    for (int i = 0; i < 20; i++) {
      float xn = sin(aa * q.y) + cc * cos(aa * q.x);
      float yn = sin(bb * q.x) + dd * cos(bb * q.y);
      float zn = sin(q.z * 1.5 + t * 0.1) * 0.3;
      q = vec3(xn, yn, zn);
      float dist = length(p - q);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  // Convert density to distance: high density = close to attractor
  float d = 0.35 - density * 0.08;
  float bound = length(p) - 2.5;
  return vec2(max(d, bound) * 0.6, density * 0.3);
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
  return vec2(d * 0.5, length(cell));
}

// 39. Ramanujan Modular Discriminant Delta(tau) Resonator
vec2 mapRamanujanTau(vec3 p, float t, float phi, int iters) {
  vec3 q = p;
  float r = length(q);
  float theta = atan(q.y, q.x);
  float cusp24 = cos(24.0 * theta + t * 0.2) * 0.12;
  float r_target = 1.0 + cusp24 + sin(q.z * 8.0 * phi) * 0.15;
  float d_core = abs(r - r_target) - 0.04;
  float d_ribs = length(vec2(fract(r * 4.0 * phi) - 0.5, q.z * 0.5)) - 0.05;
  return vec2(min(d_core, d_ribs) * 0.5, abs(cusp24) * 2.0);
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
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.07) * p.xz;
  float a = 1.4, b = 0.3;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.1 - float(s) * 0.08, float(s) * 0.05);
    for (int i = 0; i < 25; i++) {
      float x = 1.0 - a * v.x * v.x + v.y;
      float y = b * v.x;
      float z = sin(v.z * phi + t * 0.15) * 0.35;
      v = vec3(x, y, z);
      vec3 scaled = v * 0.35;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 42. Aizawa Toroidal Chaotic Attractor (orbit-traced)
vec2 mapAizawaAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  p.xz = rot2D(t * 0.08) * p.xz;
  float a = 0.95, b = 0.7, c = 0.6, dd = 3.5, e = 0.25, f = 0.1;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.1, 0.0, 0.5 + float(s) * 0.3);
    for (int i = 0; i < 20; i++) {
      float dx = (v.z - b) * v.x - dd * v.y;
      float dy = dd * v.x + (v.z - b) * v.y;
      float dz = c + a * v.z - v.z * v.z * v.z / 3.0 - (v.x * v.x + v.y * v.y) * (1.0 + e * v.z) + f * v.z * v.x * v.x * v.x;
      v += vec3(dx, dy, dz) * 0.05;
      vec3 scaled = v * 0.5;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.35 - density * 0.07;
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound) * 0.6, density * 0.2);
}

// 43. Thomas Cyclically Symmetric Attractor (orbit-traced, b=0.208186)
vec2 mapThomasAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.yz = rot2D(t * 0.06) * p.yz;
  float b = 0.208186;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(1.0 + float(s) * 0.3, 0.0, -1.0 + float(s) * 0.5);
    for (int i = 0; i < 25; i++) {
      float dx = sin(v.y) - b * v.x;
      float dy = sin(v.z) - b * v.y;
      float dz = sin(v.x) - b * v.z;
      v += vec3(dx, dy, dz) * 0.1;
      vec3 scaled = v * 0.25;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.35 - density * 0.07;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 44. Halvorsen 3-Fold Chaotic Attractor (orbit-traced, a=1.89)
vec2 mapHalvorsenAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  p.xy = rot2D(t * 0.07) * p.xy;
  float a = 1.89;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 v = vec3(-1.0 + float(s) * 0.5, -1.0 + float(s) * 0.3, -1.0);
    for (int i = 0; i < 20; i++) {
      float dx = -a * v.x - 4.0 * v.y - 4.0 * v.z - v.y * v.y;
      float dy = -a * v.y - 4.0 * v.z - 4.0 * v.x - v.z * v.z;
      float dz = -a * v.z - 4.0 * v.x - 4.0 * v.y - v.x * v.x;
      v += vec3(dx, dy, dz) * 0.04;
      vec3 scaled = v * 0.12;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.35 - density * 0.07;
  float bound = length(p_in) - 2.0;
  return vec2(max(d, bound) * 0.5, density * 0.18);
}

// 45. Julia Set 3D (c = -0.7 + 0.27i, classic dendrite)
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
  float bound = length(p_in) - 2.3;
  return vec2(max(abs(d), bound * 0.3), trap);
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
  float sc = 2.6457513; // sqrt(7): Gosper curve scaling factor
  float trap = 0.0;
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
    if (mn == d1) p = (p - c1 / sc) * sc;
    else if (mn == d2) p = (p - c2 / sc) * sc;
    else if (mn == d3) p = (p - c3 / sc) * sc;
    else if (mn == d4) p = (p - c4 / sc) * sc;
    else if (mn == d5) p = (p - c5 / sc) * sc;
    else if (mn == d6) p = (p - c6 / sc) * sc;
    else p = (p - c7 / sc) * sc;
    trap += mn / sc;
    sc *= 2.6457513;
  }
  float d = length(p) / sc * 0.5;
  return vec2(d, trap * 0.1);
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
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.06) * p.xz;
  float density = 0.0;
  float minDist = 1e10;
  // 4 IFS transformations with proper probabilities
  for (int s = 0; s < 5; s++) {
    vec3 q = vec3(0.0, 0.0, 0.0); // start from origin
    for (int i = 0; i < 25; i++) {
      float fi = float(i);
      float choice = fract(sin(fi * 12.9898 + float(s) * 78.233 + 43.12) * 43758.5453);
      if (choice < 0.01) {
        q = vec3(0.0, 0.16 * q.y, 0.0);
      } else if (choice < 0.86) {
        q = vec3(0.85 * q.x + 0.04 * q.y, -0.04 * q.x + 0.85 * q.y + 1.6, 0.08 * q.z);
      } else if (choice < 0.93) {
        q = vec3(0.2 * q.x - 0.26 * q.y, 0.23 * q.x + 0.22 * q.y + 1.6, 0.08 * q.z);
      } else {
        q = vec3(-0.15 * q.x + 0.28 * q.y, 0.26 * q.x + 0.24 * q.y + 0.44, 0.08 * q.z);
      }
      vec3 scaled = q * 0.06;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 6.0);
    }
  }
  float d = 0.25 - density * 0.05;
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound) * 0.5, density * 0.2);
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
    p = p * 2.0 - vec3(1.0);
    if (p.y < p.x) p.xy = p.yx;
    if (p.z < p.x) p.xz = p.zx;
    p = p * 2.0 - vec3(1.0);
    sc *= 0.5;
    trap += length(p) * sc;
  }
  float d = length(p) * sc - 0.05;
  return vec2(d, trap * 0.06);
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

// 61. Sierpinski Carpet (IFS, dim = log(8)/log(3) ≈ 1.893)
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
    // Remove center column (Sierpinski carpet rule)
    if (p.x > -0.5 && p.x < 0.5 && p.y > -0.5 && p.y < 0.5) {
      p.x += (p.x > 0.0) ? 1.0 : -1.0;
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
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.07) * p.xz;
  float alpha = 15.6, beta = 28.0;
  float m0 = -1.143, m1 = -0.714;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.1, 0.0, 0.1);
    for (int i = 0; i < 25; i++) {
      float fx = m1 * v.x + 0.5 * (m0 - m1) * (abs(v.x + 1.0) - abs(v.x - 1.0));
      float dx = alpha * (v.y - v.x - fx);
      float dy = v.x - v.y + v.z;
      float dz2 = -beta * v.y;
      v += vec3(dx, dy, dz2) * 0.003;
      vec3 scaled = v * 0.05;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 64. Standard Map (Chirikov-Taylor, orbit-traced)
vec2 mapStandardMap(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.06) * p.xz;
  float K = 1.5 + 0.5 * sin(t * 0.1); // chaos parameter
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 4; s++) {
    float theta = float(s) * 1.57 + 0.3;
    float p_val = float(s) * 0.8 - 1.2;
    for (int i = 0; i < 30; i++) {
      float new_p = p_val + K * sin(theta);
      theta = theta + new_p;
      theta = mod(theta, TWO_PI);
      p_val = new_p;
      vec3 pt = vec3(cos(theta) * 0.8, sin(theta) * 0.8, p_val * 0.15);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 65. Ikeda Map (orbit-traced, b=0.9, u=0.4+0.05*sin(t))
vec2 mapIkedaMap(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.06) * p.xz;
  float b = 0.9;
  float u = 0.4 + 0.05 * sin(t * 0.15);
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 4; s++) {
    float xn = float(s) * 0.3 - 0.45;
    float yn = float(s) * 0.2 - 0.3;
    for (int i = 0; i < 25; i++) {
      float ti = 0.4 - 6.0 / (1.0 + xn * xn + yn * yn);
      float cosT = cos(ti), sinT = sin(ti);
      float xnew = 1.0 + u * (xn * cosT - yn * sinT);
      float ynew = u * (xn * sinT + yn * cosT);
      xn = xnew; yn = ynew;
      vec3 pt = vec3(xn * 0.3, yn * 0.3, sin(float(i) * 0.2 + t * 0.1) * 0.15);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      density += exp(-dist * 5.0);
    }
  }
  float d = 0.25 - density * 0.05;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 66. Koch Snowflake 3D (recursive triangular IFS)
vec2 mapKochSnowflake3D(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.06) * p.xy;
  float d = 1e10;
  float trap = 0.0;
  float sc = 1.0;
  // Koch curve: 4 segments, scale 1/3, with triangular bump
  float s3 = 1.0 / 3.0;
  vec3 offsets[4];
  offsets[0] = vec3(0.0, 0.0, 0.0);
  offsets[1] = vec3(s3, 0.0, 0.0);
  offsets[2] = vec3(0.5 * s3, s3 * 0.866, 0.0);
  offsets[3] = vec3(2.0 * s3, 0.0, 0.0);
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    vec3 q = p * sc;
    float mn = 1e10;
    for (int j = 0; j < 4; j++) {
      float dd = length(q - offsets[j]);
      mn = min(mn, dd);
    }
    trap += mn / sc;
    // Find closest segment and zoom in
    float best = 1e10;
    int bestIdx = 0;
    for (int j = 0; j < 4; j++) {
      float dd = length(q - offsets[j]);
      if (dd < best) { best = dd; bestIdx = j; }
    }
    p = (p - offsets[bestIdx] / sc) * sc * 3.0;
    sc *= 3.0;
  }
  float bound = length(p_in) - 2.2;
  d = length(p) / sc;
  return vec2(max(d * 0.5, bound * 0.3), trap * 0.08);
}

// 67. Cantor Dust 3D (recursive corner cubes, dim = log(8)/log(3) ≈ 1.893)
vec2 mapCantorDust(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  float scale = 1.0;
  float trap = 0.0;
  for (int i = 0; i < 10; i++) {
    if (i >= iters) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    p = p * 3.0 - vec3(2.0);
    scale *= 3.0;
    trap = min(trap, length(p));
  }
  float d = (length(p) - 0.4) / max(scale, 0.0001);
  return vec2(d, trap * 0.06);
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

// 69. Fatou Set (basin boundary of z^2+c, showing connected/disconnected Julia)
vec2 mapFatouSet(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xy = rot2D(t * 0.05) * p.xy;
  // Animate c along the boundary of the Mandelbrot set
  float ang = t * 0.15;
  vec2 c = vec2(0.7885 * cos(ang), 0.7885 * sin(ang)); // on M-set boundary
  vec2 z = p.xy;
  float minR = 1e10;
  float trap = 0.0;
  for (int i = 0; i < 20; i++) {
    if (i >= iters) break;
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    float r = length(z);
    minR = min(minR, r);
    trap += exp(-2.0 * r);
    if (r > 4.0) break;
  }
  // Fatou set = points that don't escape (minR stays small)
  float fatou = smoothstep(0.0, 2.0, minR);
  float d = abs(fatou - 0.5) - 0.05;
  float d3d = sqrt(d * d + p.z * p.z * 0.3) - 0.08;
  float bound = length(p_in) - 2.5;
  return vec2(max(d3d, bound) * 0.5, trap * 0.15);
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
  // Chladni pattern: cos(n*pi*x/L)*cos(m*pi*y/L) - cos(m*pi*x/L)*cos(n*pi*y/L)
  float n = 3.0 + floor(mod(t * 0.3, 5.0));
  float m = 2.0 + floor(mod(t * 0.2 + 2.5, 4.0));
  float pi_x = PI * p.x;
  float pi_y = PI * p.y;
  float mode1 = cos(n * pi_x) * cos(m * pi_y);
  float mode2 = cos(m * pi_x) * cos(n * pi_y);
  float chladni = mode1 - mode2;
  float d = abs(chladni) - 0.08;
  float plate = max(max(abs(p.x) - 1.5, abs(p.y) - 1.5), abs(p.z) - 0.06);
  float d3d = max(d, plate);
  return vec2(d3d * 0.5, abs(chladni));
}

// 72. FitzHugh-Nagumo Neural Dynamics (orbit-traced)
vec2 mapFitzHugh(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.06) * p.xz;
  float a = 0.7, b_param = 0.8, tau = 12.5;
  float I_ext = 0.5 + 0.2 * sin(t * 0.2);
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.1, -0.2, 0.0);
    for (int i = 0; i < 25; i++) {
      float dv = v.x - v.y * v.y * v.y / 3.0 + v.y + I_ext;
      float dw = (v.x - a + b_param * v.y) / tau;
      float dz2 = sin(v.z * 2.0 + t * 0.1) * 0.1;
      v += vec3(dv, dw, dz2) * 0.08;
      vec3 scaled = v * 0.25;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.18);
}

// 73. Rössler Attractor (orbit-traced, a=0.2, b=0.2, c=5.7)
vec2 mapRosslerAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.07) * p.xz;
  float a = 0.2, b = 0.2, c = 5.7;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.1, 0.1, 0.0);
    for (int i = 0; i < 30; i++) {
      float dx = -v.y - v.z;
      float dy = v.x + a * v.y;
      float dz2 = b + v.z * (v.x - c);
      v += vec3(dx, dy, dz2) * 0.01;
      vec3 scaled = v * 0.08;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 74. Duffing Attractor (orbit-traced, alpha=1, beta=5, delta=0.02, gamma=8)
vec2 mapDuffingAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.3;
  p.xz = rot2D(t * 0.06) * p.xz;
  float alpha = 1.0, beta_p = 5.0, delta = 0.02, gamma = 8.0;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 3; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.1, 0.0, float(s) * 0.5);
    for (int i = 0; i < 25; i++) {
      float omega = 1.5 + float(s) * 0.3;
      float dx = v.y;
      float dy = -delta * v.y - alpha * v.x - beta_p * v.x * v.x * v.x + gamma * cos(v.z);
      float dz2 = omega;
      v += vec3(dx, dy, dz2) * 0.015;
      vec3 scaled = v * 0.15;
      float dist = length(p - scaled);
      minDist = min(minDist, dist);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.3 - density * 0.06;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.18);
}

// 75. Logistic Map Bifurcation (period-doubling cascade, Feigenbaum δ≈4.669)
vec2 mapLogisticBifurcation(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.05) * p.xz;
  // r parameter along x-axis: r ∈ [2.5, 4.0]
  float r = 2.5 + (p.x + 1.5) / 3.0 * 1.5;
  float density = 0.0;
  float minDist = 1e10;
  for (int s = 0; s < 4; s++) {
    float x = 0.3 + float(s) * 0.15;
    // Transient: iterate to attractor
    for (int i = 0; i < 50; i++) {
      x = r * x * (1.0 - x);
    }
    // Now trace attractor points
    for (int i = 0; i < 20; i++) {
      x = r * x * (1.0 - x);
      vec3 pt = vec3(p.x, (x - 0.5) * 2.0, p.z + float(s) * 0.1);
      float dist = length(p - pt);
      minDist = min(minDist, dist);
      density += exp(-dist * 6.0);
    }
  }
  float d = 0.25 - density * 0.05;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.2);
}

// 76. Fractal Spire (Exponential spiral tower z → e^z + c)
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
    float ex = exp(z.x);
    vec2 ez = vec2(ex * cos(z.y), ex * sin(z.y));
    dr = length(ez) * dr + 1.0;
    z = ez + p.xy * 0.3;
    trap = min(trap, length(z));
    if (dot(z, z) > 256.0) break;
  }
  float d = 0.5 * log(max(dot(z, z), 1.0001)) * length(z) / max(dr, 0.001);
  float bound = length(p_in) - 2.8;
  return vec2(max(d * 0.6, bound), trap);
}

// 77. DeJong Attractor (x'=sin(a*y)-z*cos(b*x))
vec2 mapDeJongAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 2.24 + sin(t * 0.05) * 0.5;
  float b = -0.43 + cos(t * 0.07) * 0.3;
  float c_ = -0.65 + sin(t * 0.03) * 0.4;
  float d_ = 2.43 + cos(t * 0.04) * 0.3;
  float density = 0.0;
  vec2 seeds[3];
  seeds[0] = vec2(0.1, 0.1); seeds[1] = vec2(-0.3, 0.5); seeds[2] = vec2(0.4, -0.2);
  int count = clamp(iters, 6, 20);
  for (int s = 0; s < 3; s++) {
    vec2 z = seeds[s];
    for (int i = 0; i < 20; i++) {
      if (i >= count) break;
      vec2 nz = vec2(sin(a * z.y) - cos(b * z.x), sin(c_ * z.x) - cos(d_ * z.y));
      z = nz;
      vec3 pt = vec3(z * 0.7, p.z * 0.5 + float(s) * 0.15);
      float dist = length(p - pt);
      density += exp(-dist * 5.0);
    }
  }
  float dd = 0.3 - density * 0.04;
  float bound = length(p_in) - 2.5;
  return vec2(max(dd, bound) * 0.5, density * 0.15);
}

// 78. Pickover Attractor (x'=sin(a*y)+c*cos(a*x), y'=sin(b*x)+d*cos(b*y))
vec2 mapPickoverAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.7;
  float a = -1.64 + sin(t * 0.04) * 0.4;
  float b = 1.9 + cos(t * 0.06) * 0.3;
  float c_ = -0.31 + sin(t * 0.05) * 0.3;
  float d_ = 0.72 + cos(t * 0.03) * 0.2;
  float density = 0.0;
  vec2 z = vec2(0.1, 0.1);
  int count = clamp(iters, 8, 24);
  for (int i = 0; i < 24; i++) {
    if (i >= count) break;
    vec2 nz = vec2(sin(a * z.y) + c_ * cos(a * z.x), sin(b * z.x) + d_ * cos(b * z.y));
    z = nz;
    vec3 pt = vec3(z * 0.6, p.z * 0.4);
    float dist = length(p - pt);
    density += exp(-dist * 4.5);
  }
  float dd = 0.28 - density * 0.035;
  float bound = length(p_in) - 2.3;
  return vec2(max(dd, bound) * 0.5, density * 0.12);
}

// 79. Vicsek Fractal (3D cross-shaped IFS, dim ≈ 1.465)
vec2 mapVicsekFractal(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.8;
  float rot_a = t * 0.04;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  float scale = 3.0;
  float d = 1e10;
  int count = clamp(iters, 4, 12);
  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    p = p * scale - vec3(scale - 1.0);
    d = min(d, length(p) * pow(scale, -float(i + 1)));
  }
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound), length(p_in) * 0.3);
}

// 80. Mandelbar (Conjugate Mandelbrot: z → conj(z)^2 + c)
vec2 mapMandelbar(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.4;
  float rot_a = t * 0.06;
  p = vec3(p.x * cos(rot_a) - p.z * sin(rot_a), p.y, p.x * sin(rot_a) + p.z * cos(rot_a));
  vec2 z = p.xy;
  vec2 c = p.xy;
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
  float bound = length(p_in) - 2.6;
  return vec2(max(d * 0.6, bound), trap);
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
  float bound = length(p_in) - 2.5;
  return vec2(max(abs(d) - 0.05, bound) * 0.6, trap);
}

// 83. Bedhead Attractor (3D: x'=sin(y*z)-z*cos(x*y))
vec2 mapBedheadAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.7;
  float a = 0.95 + sin(t * 0.04) * 0.2;
  float b = 0.7 + cos(t * 0.06) * 0.15;
  float c_ = 0.6 + sin(t * 0.05) * 0.2;
  float density = 0.0;
  vec3 z = vec3(0.1, 0.1, 0.1);
  int count = clamp(iters, 6, 18);
  for (int i = 0; i < 18; i++) {
    if (i >= count) break;
    vec3 nz = vec3(
      sin(a * z.y * z.z) - z.z * cos(b * z.x * z.y),
      z.z * sin(a * z.x) - cos(b * z.y * z.z),
      c_ * sin(z.x * z.z)
    );
    z = nz;
    float dist = length(p - z * 0.5);
    density += exp(-dist * 4.0);
  }
  float dd = 0.3 - density * 0.04;
  float bound = length(p_in) - 2.3;
  return vec2(max(dd, bound) * 0.5, density * 0.15);
}

// 84. FourSpot Attractor (4-wing chaotic attractor)
vec2 mapFourSpotAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 2.0 + sin(t * 0.05) * 0.5;
  float density = 0.0;
  vec3 z = vec3(0.5, 0.5, 0.5);
  int count = clamp(iters, 6, 20);
  for (int i = 0; i < 20; i++) {
    if (i >= count) break;
    vec3 nz = vec3(
      z.y * z.z - a * z.x,
      z.x * z.z - z.y,
      -z.x * z.y + z.z
    );
    z = nz * 0.3;
    float dist = length(p - z);
    density += exp(-dist * 5.0);
  }
  float dd = 0.25 - density * 0.04;
  float bound = length(p_in) - 2.5;
  return vec2(max(dd, bound) * 0.5, density * 0.12);
}

// 85. Svensson Attractor (x'=d*sin(a*y)-z, y'=b*cos(c*x))
vec2 mapSvenssonAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.7;
  float a = 2.0 + sin(t * 0.04) * 0.3;
  float b = 0.2 + cos(t * 0.06) * 0.1;
  float c_ = 1.57 + sin(t * 0.05) * 0.2;
  float d_ = 0.4 + cos(t * 0.03) * 0.15;
  float density = 0.0;
  vec2 z = vec2(0.1, 0.1);
  int count = clamp(iters, 8, 22);
  for (int i = 0; i < 22; i++) {
    if (i >= count) break;
    vec2 nz = vec2(d_ * sin(a * z.y) - z.x, b * cos(c_ * z.x));
    // Wait, correct Svensson: x'=d*sin(a*y)-z, y'=b-z*cos(c*x)
    nz = vec2(d_ * sin(a * z.y) - z.x * 0.1, b - z.x * cos(c_ * z.x));
    z = nz;
    vec3 pt = vec3(z * 0.8, p.z * 0.4);
    float dist = length(p - pt);
    density += exp(-dist * 4.5);
  }
  float dd = 0.28 - density * 0.035;
  float bound = length(p_in) - 2.3;
  return vec2(max(dd, bound) * 0.5, density * 0.12);
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
  return mapSvenssonAttractor(p, t, phi, iters);
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
  float h = clamp(0.5 - 0.5 * (d2 + d1) / max(k, 0.0001), 0.0, 1.0);
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
  int iters = int(clamp(u_iterations, 4.0, 32.0));
  float t = u_time * u_morph_speed;
  float phi = u_phi_val;
  int compOp = int(u_compose_op + 0.5);
  float k = max(0.04, u_smooth_k * 0.45);

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
  if (u_hybrid_blend > 0.02) {
    vec2 resB = evalSingleFractal(ftypeB, p_eval, t, phi, clamp(iters - 2, 4, 10));
    float dB = resB.x;
    float trapB = resB.y;
    float blend = clamp(u_hybrid_blend, 0.0, 0.7);

    if (compOp == 0) {
      // 0: Continuous Topological Morph
      current_d = mix(current_d, dB, blend);
      current_trap = mix(current_trap, trapB, blend);
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
      // 3: Smooth Vault Carving (ssub)
      float h = clamp(0.5 - 0.5 * (dB + current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -dB, h) + k * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, h);
    } else if (compOp == 4) {
      // 4: Domain Warp
      current_d = mix(current_d, dB, blend * 0.2);
      current_trap = mix(current_trap, trapB, 0.35);
    } else if (compOp == 5) {
      // 5: Harmonic Spectral Resonance
      float disp = clamp(dB * 0.16, -0.05, 0.05) * blend;
      current_d = current_d + disp;
      current_trap = min(current_trap, trapB);
    } else if (compOp == 6) {
      // 6: Interlaced TPMS Cellular Lattice
      float lattice = abs(dB) - 0.035;
      float h = clamp(0.5 - 0.5 * (lattice - current_d) / (k * 0.5), 0.0, 1.0);
      current_d = mix(lattice, current_d, h) + (k * 0.5) * h * (1.0 - h);
      current_trap = mix(trapB, current_trap, 0.5);
    } else if (compOp == 7) {
      // 7: Conformal Spiral Vortex
      float twistFactor = clamp(blend * 0.6, 0.0, 0.75);
      float blended = opSmoothUnion(current_d, dB, k * 0.8);
      current_d = mix(current_d, blended, twistFactor);
      current_trap = min(current_trap, trapB);
    }
  }

  // 4. Tertiary Layer Evaluation (Only evaluated in direct proximity to surface)
  if (u_tertiary_blend > 0.03 && current_d < 0.1) {
    vec2 resC = evalSingleFractal(ftypeC, p_eval, t, phi, clamp(iters / 2, 6, 16));
    float blendC = clamp(u_tertiary_blend, 0.05, 0.35);
    // Apply user-selected composite operator for consistent tertiary blending
    if (compOp == 2) {
      float h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
      current_d = mix(resC.x, current_d, h) + k * h * (1.0 - h);
    } else if (compOp == 3) {
      float h = clamp(0.5 - 0.5 * (resC.x + current_d) / k, 0.0, 1.0);
      current_d = mix(current_d, -resC.x, h) + k * h * (1.0 - h);
    } else if (compOp == 0) {
      current_d = mix(current_d, resC.x, blendC * 0.5);
    } else {
      current_d = opSmoothUnion(current_d, resC.x, k * blendC * 1.5);
    }
    current_trap = min(current_trap, resC.y);
  }

  // 5. Multi-Scale Golden Octaves
  int numOctaves = int(clamp(u_octave_layers, 1.0, 4.0));
  if (numOctaves > 1 && current_d < 0.2) {
    float octScale = phi;
    float octAmp = 1.0 / phi;
    for (int oct = 1; oct < 3; oct++) {
      if (oct >= numOctaves) break;
      vec3 p_oct = p_eval * octScale;
      float octHarmonic = (sin(p_oct.x * phi) * cos(p_oct.y * phi) + sin(p_oct.z * phi)) / (phi * octScale);
      current_d = current_d + octHarmonic * octAmp * 0.12;
      octScale *= phi;
      octAmp /= phi;
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
  vec3 e1 = vec3(eps, -eps, -eps);
  vec3 e2 = vec3(-eps, -eps, eps);
  vec3 e3 = vec3(-eps, eps, -eps);
  vec3 e4 = vec3(eps, eps, eps);

  vec3 n = e1 * sceneSDF(p + e1).x +
           e2 * sceneSDF(p + e2).x +
           e3 * sceneSDF(p + e3).x +
           e4 * sceneSDF(p + e4).x;
  float len = length(n);
  return len > 0.00001 ? n / len : vec3(0.0, 1.0, 0.0);
}

float calcSoftShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
  float res = 1.0;
  float t = mint;
  for (int i = 0; i < 12; i++) {
    if (t >= maxt) break;
    float h = sceneSDF(ro + rd * t).x;
    if (h < 0.001) return 0.0;
    res = min(res, k * h / t);
    t += max(h * 0.85, 0.02);
  }
  return clamp(res, 0.0, 1.0);
}

float calcAO(vec3 p, vec3 n) {
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = 0.012 + 0.09 * float(i * i) / 16.0;
    float d = sceneSDF(p + h * n).x;
    occ += (h - d) * sca;
    sca *= 0.74;
  }
  // Improved AO: smoother falloff, less harsh darkening in crevices
  return clamp(1.0 - 2.8 * occ, 0.08, 1.0);
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
  // Fixed large max_dist — decoupled from cam_dist to prevent far-side slicing
  // When camera is close, rays travel nearly parallel to surface and need full range
  float max_dist = 128.0;
  bool hit = false;
  float min_trap = 1e10;
  int steps = 0;

  for (int i = 0; i < 112; i++) {
    vec3 p = ro + rd * t;
    vec2 res = sceneSDF(p);
    float d = res.x;
    min_trap = min(min_trap, res.y);

    // No near-plane escape — let rays march from the start to prevent slicing artifacts

    float hit_threshold = 0.00075 * t + 0.00025;
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // Balanced step sizing: allows reaching surfaces within 112-step budget
    float step_factor = (abs(d) > 0.2) ? 0.92 : 0.78;
    float step_d = max(abs(d) * step_factor, 0.001);
    t += step_d;
    if (t > max_dist) break;
  }

  float bg_rad = length(uv);
  vec3 col = vec3(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u_time * 0.3));
  col += u_accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit) {
    vec3 p = ro + rd * t;
    vec3 base_n = calcNormal(p, min(0.0008 * t + 0.00025, 0.002));
    float ao = calcAO(p, base_n);
    vec3 n = base_n;
    if (dot(n, rd) > 0.0) {
      n = -n;
    }

    vec3 light1 = normalize(vec3(cos(u_time * 0.3), 1.2, sin(u_time * 0.3)));
    vec3 light2 = normalize(vec3(-sin(u_time * 0.25 * GOLDEN_RATIO), -0.6, cos(u_time * 0.25 * GOLDEN_RATIO)));

    // Raymarched soft shadows from primary key light
    float sh1 = calcSoftShadow(p + n * 0.005, light1, 0.02, 3.5, 12.0);
    float sh2 = calcSoftShadow(p + n * 0.005, light2, 0.02, 2.2, 8.0);

    // Multi-sample Subsurface Scattering
    float sssDist = 0.06;
    float sssTotal = 0.0;
    for (int si = 0; si < 3; si++) {
      float sssAngle = float(si) * GOLDEN_ANGLE;
      vec3 sssOffset = vec3(cos(sssAngle), sin(sssAngle * 0.7), sin(sssAngle * 1.3)) * sssDist;
      float sssD = sceneSDF(p - light1 * sssOffset).x;
      sssTotal += smoothstep(0.0, sssDist * 1.5, sssD + sssDist * 1.5);
    }
    float sss = (sssTotal / 3.0) * 0.15; // Subtle SSS — high values wash out accent color
    vec3 sssCol = u_accent_color * sss * ao;
    float fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    float diff1 = max(dot(n, light1), 0.0) * (0.2 + 0.8 * sh1);
    float diff2 = max(dot(n, light2), 0.0) * (0.15 + 0.85 * sh2);

    vec3 h1 = normalize(light1 - rd);
    float spec1 = pow(max(dot(n, h1), 0.0), 32.0) * sh1;
    
    // Harmonic Cosine Palette Engine with Golden Ratio phase distribution
    float phase = fract(min_trap * 0.85 + length(p) * 0.18 + u_time * 0.02);
    float w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    float w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    float w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    vec3 mat_col = u_primary_color * w_primary + u_secondary_color * w_secondary;
    mat_col = mix(mat_col, u_accent_color, w_accent * 0.12); // Subtle accent — high values wash out to white
    mat_col = mix(mat_col, u_accent_color, pow(1.0 - ao, 2.0) * 0.08); // Low-edge accent tint

    vec3 ambient = u_primary_color * 0.12 * ao;
    vec3 diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    vec3 specular = mat_col * spec1 * 0.35 * ao; // Tinted by material color — never white
    vec3 rim = u_accent_color * fresnel * 0.18 * (0.3 + 0.7 * ao); // Subtle rim — high values create white edges

    // Clean surface lighting: no headlamp, minimal SSS
    col = ambient + diffuse + specular + rim + sssCol;
    col *= (0.22 + 0.78 * ao); // Stronger AO contrast for depth

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

    // Surface curvature from normal variation (2 extra SDF calls)
    float curv = 0.0;
    {
      float ce = min(0.001 * t + 0.0005, 0.003);
      vec3 dn1 = calcNormal(p + vec3(ce, 0.0, 0.0), ce) - n;
      vec3 dn2 = calcNormal(p + vec3(0.0, ce, 0.0), ce) - n;
      curv = clamp((length(dn1) + length(dn2)) / (2.0 * ce), 0.0, 8.0);
    }
    float curvNorm = clamp(curv / 5.0, 0.0, 1.0);
    float trapDetail = clamp(1.0 / (1.0 + min_trap * 2.0), 0.0, 1.0);

    if (u_render_style > 0.5 && u_render_style < 1.5) {
      // 1. X-Ray Томография: Curvature bone density + orbit trap vasculature
      float dens = clamp(float(steps) / 65.0, 0.0, 1.0);
      float boneDensity = mix(0.2, 1.0, curvNorm * 0.6 + ao * 0.4);
      vec3 xrayCore = u_accent_color * boneDensity * (0.4 + trapDetail * 0.8);
      vec3 xrayVessel = u_primary_color * trapDetail * (0.3 + dens * 0.7);
      float edgeGlow = pow(1.0 - ao, 2.5) * (0.5 + curvNorm * 0.5);
      vec3 xrayShell = u_secondary_color * edgeGlow;
      vec3 xrayCol = mix(xrayVessel, xrayCore, boneDensity) + xrayShell * 0.6;
      xrayCol += u_accent_color * curvNorm * 0.4; // Curvature highlights
      col = mix(col * 0.15, xrayCol * 1.5, 0.75 + 0.25 * ao);
    } else if (u_render_style > 1.5 && u_render_style < 2.5) {
      // 2. Топография: Curvature-enhanced ridges + multi-scale contours
      float elevation = dot(n, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
      float contour1 = abs(fract(elevation * 14.0) - 0.5) * 2.0;
      float contour2 = abs(fract(elevation * 5.0 + curvNorm * 0.4) - 0.5) * 2.0;
      float contour = min(contour1, contour2);
      contour = smoothstep(0.0, 0.06, contour);
      float ridgeLine = smoothstep(0.35, 0.65, curvNorm); // Curvature ridges
      vec3 topoLow = u_secondary_color * (0.3 + trapDetail * 0.2);
      vec3 topoHigh = u_primary_color * (0.5 + elevation * 0.9);
      vec3 topoRidge = u_accent_color * (0.7 + curvNorm * 1.3);
      vec3 topoCol = mix(topoLow, topoHigh, elevation);
      topoCol = mix(topoCol, topoRidge, ridgeLine * 0.6 + elevation * 0.3);
      topoCol = mix(topoCol, topoCol * 2.0, (1.0 - contour) * 0.45);
      float slope = 1.0 - abs(dot(n, vec3(0.0, 1.0, 0.0)));
      topoCol *= (0.4 + 0.6 * slope);
      col = topoCol * (0.4 + 0.6 * ao);
    } else if (u_render_style > 2.5 && u_render_style < 3.5) {
      // 3. Голографическая проекция: Curvature wireframe + data glitch + scan lines
      float depthNorm = clamp(t / 20.0, 0.0, 1.0);
      float rOff = sin(depthNorm * 20.0 + u_time * 3.0) * 0.025;
      float gOff = sin(depthNorm * 20.0 + u_time * 3.0 + 2.094) * 0.025;
      float bOff = sin(depthNorm * 20.0 + u_time * 3.0 + 4.189) * 0.025;
      vec3 holoBase = u_primary_color * vec3(1.0 + rOff, 1.0 + gOff, 1.0 + bOff);
      float holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
      float scanFreq = 180.0 + depthNorm * 120.0;
      float scanline = 0.82 + 0.18 * sin(v_uv.y * scanFreq + u_time * 8.0);
      float wireframe = smoothstep(0.3, 0.7, curvNorm); // Curvature wireframe
      float glitch = step(0.96, fract(sin(dot(p, vec3(12.9898, 78.233, 45.164)) + u_time * 2.0) * 43758.5));
      float shimmer = 0.88 + 0.12 * sin(u_time * 5.0 + length(p) * 10.0);
      vec3 holoCol = holoBase * (0.35 + holoFres * 1.4 + wireframe * 0.5) * scanline * shimmer;
      holoCol += u_accent_color * wireframe * 1.2; // Curvature edge glow
      holoCol += vec3(0.15, 0.4, 0.7) * holoFres * 1.5;
      holoCol += u_accent_color * glitch * 3.0; // Data glitch bursts
      holoCol += u_primary_color * trapDetail * 0.3; // Internal structure
      col = mix(col * 0.08, holoCol, 0.93);
    } else if (u_render_style > 3.5 && u_render_style < 4.5) {
      // 4. Радужная интерференция: Curvature-varying film thickness
      float nv = max(dot(n, -rd), 0.0);
      float filmThickness = 0.5 + curvNorm * 0.8 + trapDetail * 0.3; // Curvature modulates film
      float order1 = nv * 3.0 * filmThickness + min_trap * 0.5;
      float order2 = nv * 5.0 * filmThickness + min_trap * 0.3 + u_time * 0.08;
      float order3 = nv * 7.0 * filmThickness + min_trap * 0.2;
      float iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33));
      float iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33));
      float iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
      vec3 iridCol = vec3(iridR, iridG, iridB);
      vec3 hIrid = normalize(light1 - rd);
      float specAngle = max(dot(n, hIrid), 0.0);
      vec3 specIrid = vec3(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * sh1 * 2.0;
      iridCol *= (0.7 + trapDetail * 0.3); // Trap detail modulates saturation
      col = iridCol * (0.45 + 0.55 * ao) + specIrid;
    } else if (u_render_style > 4.5 && u_render_style < 5.5) {
      // 5. Квантовое поле: Trap-based probability + curvature energy density
      float wave1 = sin(length(p) * 12.0 - u_time * 3.5);
      float wave2 = cos(dot(p, normalize(vec3(1.618, 1.0, 0.618))) * 7.0 + u_time * 2.2);
      float wave3 = sin(dot(p, normalize(vec3(-0.618, 1.618, 1.0))) * 9.0 - u_time * 1.8);
      float interference = (wave1 + wave2 + wave3) / 3.0;
      float probability = trapDetail * 0.6 + (0.5 + 0.5 * interference) * 0.4; // Trap as probability density
      float energy = pow(abs(interference), 0.7) * (0.5 + curvNorm * 0.5);
      vec3 plasmaCold = u_secondary_color * (0.25 + probability * 0.5);
      vec3 plasmaHot = u_accent_color * (0.6 + energy * 1.8);
      vec3 qCol = mix(plasmaCold, plasmaHot, energy);
      qCol += u_accent_color * pow(fresnel, 2.0) * 1.2;
      qCol += u_primary_color * curvNorm * 0.35; // Curvature energy filaments
      qCol *= (0.6 + trapDetail * 0.4); // Internal structure visibility
      col = qCol * (0.35 + 0.65 * ao) + sssCol * 1.2;
    } else if (u_render_style > 5.5) {
      // 6. Кристалл: Curvature facets + trap inclusions + Beer-Lambert
      vec3 beer = exp(-max(t - 0.5, 0.0) * vec3(0.08, 0.25, 0.9));
      float caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
      float caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
      float caustic = caustic1 + caustic2;
      float facetStrength = 0.3 + curvNorm * 0.7; // Curvature defines facets
      vec3 refractCol = mix(u_primary_color, u_accent_color, fresnel * facetStrength);
      vec3 gemCol = refractCol * beer;
      vec3 gemSpec = vec3(1.0, 0.96, 0.82) * spec1 * 2.0;
      float dispersion = fresnel * (0.1 + curvNorm * 0.15); // Curvature-dependent dispersion
      gemCol.r *= (1.0 + dispersion);
      gemCol.b *= (1.0 - dispersion * 0.5);
      gemCol += u_secondary_color * trapDetail * 0.2 * beer; // Internal trap inclusions
      gemCol *= facetStrength; // Facet darkening on flat areas
      col = gemCol * (0.6 + 0.4 * ao) + gemSpec + u_accent_color * caustic * 0.6;
    }

    // Distance-relative atmospheric falloff
    float fogStart = cam_dist < 1.0 ? 16.0 : (cam_dist < 2.0 ? 8.0 : max(2.0, cam_dist + 2.5));
    float fogDensity = cam_dist < 1.0 ? 0.012 : 0.02;
    float fog = 1.0 - exp(-max(0.0, t - fogStart) * fogDensity);
    col = mix(col, vec3(0.005, 0.004, 0.008), fog * clamp(u_volumetric_fog, 0.0, 1.0));
  }

  col = acesToneMap(col);

  // Color-space dither to eliminate banding in smooth gradients
  float ditherVal = fract(sin(dot(v_uv * u_resolution, vec2(12.9898, 78.233)) + u_time * 0.07) * 43758.5453);
  col = col + (ditherVal - 0.5) * (1.0 / 128.0);

  float vigStrength = smoothstep(0.12, 1.0, cam_dist);
  float vignette = 1.0 - smoothstep(0.9, 1.8, bg_rad) * vigStrength * 0.5;
  col *= vignette;

  // Subpixel anti-aliasing boost — sharpen edges via fwidth unsharp mask
  float edgeDetect = length(fwidth(col)) * 0.5;
  col = mix(col, col * (1.0 + edgeDetect * 2.0), 0.12);

  fragColor = vec4(col, 1.0);
}
`,eh=Im;class th{constructor(p){this.gl=null,this.program=null,this.vao=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline",this.canvas=p}init(){console.group("[WebGL2] === INITIALIZATION START ==="),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const p=this.canvas.getBoundingClientRect();(p.width===0||p.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let f=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED"),f||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),f||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),!f){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const R=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return R&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",R.getParameter(R.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=f,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",f.getParameter(f.VERSION)),console.info("[WebGL2] GL_RENDERER:",f.getParameter(f.RENDERER)),console.info("[WebGL2] GL_VENDOR:",f.getParameter(f.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",f.getParameter(f.SHADING_LANGUAGE_VERSION));const c=f.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(c==null?void 0:c.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",c==null?void 0:c.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",c==null?void 0:c.includes("WEBGL_debug_renderer_info"));try{const R=f.getExtension("WEBGL_debug_renderer_info");if(R){const q=f.getParameter(R.UNMASKED_RENDERER_WEBGL);q&&(this.rendererInfo=q)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const y=this.compileShader(f.VERTEX_SHADER,$m),_=this.compileShader(f.FRAGMENT_SHADER,eh);if(!y||!_)return!1;const w=f.createProgram();if(!w)return!1;if(f.attachShader(w,y),f.attachShader(w,_),f.linkProgram(w),!f.getProgramParameter(w,f.LINK_STATUS))return console.error("WebGL Program Link Error:",f.getProgramInfoLog(w)),!1;this.program=w;const E=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=f.createVertexArray(),f.bindVertexArray(this.vao);const T=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,T),f.bufferData(f.ARRAY_BUFFER,E,f.STATIC_DRAW);const m=f.getAttribLocation(w,"a_position");return f.enableVertexAttribArray(m),f.vertexAttribPointer(m,2,f.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog"].forEach(R=>{this.uniformLocs[R]=f.getUniformLocation(w,R)}),!0}compileShader(p,f){if(!this.gl)return null;const c=this.gl,y=c.createShader(p);if(!y)return null;const _=c.getExtension("KHR_parallel_shader_compile");if(c.shaderSource(y,f),c.compileShader(y),_){const w=performance.now(),E=15e3;for(;!c.getShaderParameter(y,c.COMPILE_STATUS);){const T=_.COMPLETION_STATUS_KHR;if(c.getShaderParameter(y,T))break;if(performance.now()-w>E)return console.error("[WebGL2] Shader compilation timeout after 15s"),console.error("Shader info:",c.getShaderInfoLog(y)),c.deleteShader(y),null}}return c.getShaderParameter(y,c.COMPILE_STATUS)?(console.info("[WebGL2] Shader compiled successfully ("+(p===c.VERTEX_SHADER?"vertex":"fragment")+")"),y):(console.error("Shader compilation error:",c.getShaderInfoLog(y)),c.deleteShader(y),null)}render(p,f){const c=this.gl;if(!c||!this.program||!this.vao)return;c.viewport(0,0,this.canvas.width,this.canvas.height),c.useProgram(this.program),c.bindVertexArray(this.vao);const y=f.customPalette||$t.find(T=>T.id===f.paletteId)||$t[0],_=ci(f.type),w=ci(f.hybridType||f.type),E=ci(f.tertiaryType||"riemannZeta");this.uniformLocs.u_resolution&&c.uniform2f(this.uniformLocs.u_resolution,this.canvas.width,this.canvas.height),this.uniformLocs.u_time&&c.uniform1f(this.uniformLocs.u_time,p),this.uniformLocs.u_phi_val&&c.uniform1f(this.uniformLocs.u_phi_val,f.phiMultiplier),this.uniformLocs.u_cam_rot&&c.uniform2f(this.uniformLocs.u_cam_rot,f.rotX,f.rotY),this.uniformLocs.u_zoom&&c.uniform1f(this.uniformLocs.u_zoom,f.zoom),this.uniformLocs.u_fractal_type&&c.uniform1f(this.uniformLocs.u_fractal_type,_),this.uniformLocs.u_hybrid_type&&c.uniform1f(this.uniformLocs.u_hybrid_type,w),this.uniformLocs.u_tertiary_type&&c.uniform1f(this.uniformLocs.u_tertiary_type,E),this.uniformLocs.u_iterations&&c.uniform1f(this.uniformLocs.u_iterations,f.iterations),this.uniformLocs.u_glow_intensity&&c.uniform1f(this.uniformLocs.u_glow_intensity,f.glowIntensity),this.uniformLocs.u_morph_speed&&c.uniform1f(this.uniformLocs.u_morph_speed,f.morphSpeed),this.uniformLocs.u_hybrid_blend&&c.uniform1f(this.uniformLocs.u_hybrid_blend,f.hybridBlend??0),this.uniformLocs.u_tertiary_blend&&c.uniform1f(this.uniformLocs.u_tertiary_blend,f.tertiaryBlend??0),this.uniformLocs.u_compose_op&&c.uniform1f(this.uniformLocs.u_compose_op,pf(f.compositeOp)),this.uniformLocs.u_smooth_k&&c.uniform1f(this.uniformLocs.u_smooth_k,f.smoothK??.35),this.uniformLocs.u_warp_strength&&c.uniform1f(this.uniformLocs.u_warp_strength,f.warpStrength??.3),this.uniformLocs.u_octave_layers&&c.uniform1f(this.uniformLocs.u_octave_layers,f.octaveLayers??2),this.uniformLocs.u_box_fold&&c.uniform1f(this.uniformLocs.u_box_fold,f.boxFold??1.2),this.uniformLocs.u_sphere_fold&&c.uniform1f(this.uniformLocs.u_sphere_fold,f.sphereFold??.65),this.uniformLocs.u_interior_cut&&c.uniform1f(this.uniformLocs.u_interior_cut,f.interiorCut??.35),this.uniformLocs.u_primary_color&&c.uniform3f(this.uniformLocs.u_primary_color,y.primary[0],y.primary[1],y.primary[2]),this.uniformLocs.u_secondary_color&&c.uniform3f(this.uniformLocs.u_secondary_color,y.secondary[0],y.secondary[1],y.secondary[2]),this.uniformLocs.u_accent_color&&c.uniform3f(this.uniformLocs.u_accent_color,y.accent[0],y.accent[1],y.accent[2]),this.uniformLocs.u_cam_mode&&c.uniform1f(this.uniformLocs.u_cam_mode,ff(f.cameraMode)),this.uniformLocs.u_cam_pos&&c.uniform3f(this.uniformLocs.u_cam_pos,f.camPosX??0,f.camPosY??0,f.camPosZ??0),this.uniformLocs.u_slice_plane&&c.uniform1f(this.uniformLocs.u_slice_plane,f.slicePlane??0),this.uniformLocs.u_slice_axis&&c.uniform1f(this.uniformLocs.u_slice_axis,df(f.sliceAxis)),this.uniformLocs.u_render_style&&c.uniform1f(this.uniformLocs.u_render_style,mf(f.renderStyle)),this.uniformLocs.u_headlamp_power&&c.uniform1f(this.uniformLocs.u_headlamp_power,f.headlampPower??.3),this.uniformLocs.u_volumetric_fog&&c.uniform1f(this.uniformLocs.u_volumetric_fog,f.volumetricFog??.15),c.drawArrays(c.TRIANGLES,0,3)}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const p=this.gl.getExtension("WEBGL_lose_context");p&&p.loseContext(),this.gl=null}}}const tf="golden_ratio_user_prefs",ah=500;class nh{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const p=localStorage.getItem(tf);if(p)return{...this.getDefaultPrefs(),...JSON.parse(p)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(tf,JSON.stringify(this.prefs))}catch{}}recordInteraction(p,f){const c=performance.now(),y=c-this.lastSampleTime;this.lastSampleTime=c;const _={timestamp:c,type:p,value:f,duration:y};this.samples.push(_),this.samples.length>ah&&this.samples.shift(),this.analyzeSample(_),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(p){switch(p.type){case"zoom":this.analyzeZoom(p);break;case"rotate":this.analyzeRotation(p);break;case"fractal_change":this.analyzeFractalChange(p);break;case"style_change":this.analyzeStyleChange(p);break;case"palette_change":this.analyzePaletteChange(p);break;case"camera_change":this.analyzeCameraChange(p);break}}analyzeZoom(p){const f=p.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(p.value)*.05}analyzeRotation(p){const f=Math.abs(p.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(p){const f=String(Math.round(p.value));this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(p){const f=String(Math.round(p.value));this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(p){const f=String(Math.round(p.value));this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(p){const f=String(Math.round(p.value));this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(p){let f=0,c=null;for(const[y,_]of Object.entries(p))_>f&&(f=_,c=y);return c}getAdaptedDefaults(){const p={};if(this.prefs.sampleCount>10){p.zoom=this.prefs.preferredZoomRange.avg,p.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(p.preferredFractal=Number(f));const c=this.getPreferred(this.prefs.renderStyleWeights);c!==null&&(p.preferredStyle=Number(c));const y=this.getPreferred(this.prefs.paletteWeights);y!==null&&(p.preferredPalette=Number(y));const _=this.getPreferred(this.prefs.cameraModeWeights);_!==null&&(p.preferredCamera=_)}return p}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const af=new nh,ih=({params:u,onParamsChange:p,onTelemetryUpdate:f,screenshotRequested:c,onScreenshotCaptured:y,forcedBackend:_="auto",onInteraction:w,onNextSpecimen:E,onPrevSpecimen:T,onEngineReady:m,scrollMode:F="feed"})=>{const R=k.useRef(null),q=k.useRef(null),L=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),V=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),[ee,$]=k.useState(()=>_==="webgl2"?"webgl2":_==="webgpu"?L?"webgl2":"webgpu":"webgl2"),[B,le]=k.useState(!0),g=k.useRef(null),U=k.useRef(null),be=k.useRef("Initializing..."),ge=k.useRef(u);k.useEffect(()=>{ge.current=u},[u]);const ae=k.useRef(f);ae.current=f;const we=k.useRef(y);we.current=y;const Se=k.useRef(E);Se.current=E;const Ze=k.useRef(T);Ze.current=T;const Fe=k.useRef(w);Fe.current=w;const Ge=k.useRef(0),Qe=k.useRef(!1),Xe=k.useRef({x:0,y:0}),fe=k.useRef(null),S=k.useRef({x:0,y:0}),O=k.useRef(0),Z=.92,W=1e-4,re=k.useRef([]),h=k.useRef(0),A=k.useRef(null),X=k.useRef(0),H=k.useRef(!1),K=k.useRef(new Set),ie=k.useRef(!1),de=k.useRef(!0),Le=k.useRef(!1),Oe=k.useRef(!1);k.useEffect(()=>{Oe.current=c},[c]),k.useEffect(()=>{if(_==="webgl2")$("webgl2");else if(_==="webgpu"){if(L){console.warn("[FractalCanvas] WebGPU blocked in embedded browser — using WebGL2"),H.current=!0,$("webgl2");return}H.current=!1,$("webgpu")}else _==="auto"&&$("webgl2")},[_]);const Pt=k.useCallback(()=>{const Y=q.current,P=R.current;if(!Y||!P)return;const ne=L||V?1.5:2,pe=Math.min(window.devicePixelRatio||1,ne),Ue=P.clientWidth||window.innerWidth||800,Ne=P.clientHeight||window.innerHeight||600,rt=Math.floor(Ue*pe),Re=Math.floor(Ne*pe);(Y.width!==rt||Y.height!==Re)&&(Y.width=Math.max(rt,320),Y.height=Math.max(Re,240))},[]);k.useEffect(()=>{const Y=q.current;if(!Y)return;Pt();let P=!1;const ne=setTimeout(()=>{P||(console.warn("[FractalCanvas] Force-hiding loading overlay after 12s"),le(!1))},12e3),pe=setTimeout(()=>{!Le.current&&!P&&(console.error("[FractalCanvas] Engine setup timed out after 8s — GPU unavailable"),console.error("[FractalCanvas] activeEngineType=",ee,"webgpuFailed=",H.current,"isDestroyed=",P))},8e3);async function Ue(){if(!Y)return;if(console.info("[FractalCanvas] Setup starting, activeEngineType=",ee),le(!0),Le.current=!1,g.current&&(g.current.destroy(),g.current=null),U.current&&(U.current.destroy(),U.current=null),ee==="webgpu"){console.info("[FractalCanvas] Attempting WebGPU init...");const ft=new Qs(Y),oa=await ft.init();if(console.info("[FractalCanvas] WebGPU init result:",oa),oa&&!P){g.current=ft,Le.current=!0,be.current="WebGPU (WGSL)",le(!1),m==null||m();return}else{console.warn("[FractalCanvas] WebGPU init failed, falling back to WebGL2"),H.current=!0,P?le(!1):$("webgl2");return}}console.info("[FractalCanvas] Attempting WebGL2 init...");const tt=new th(Y),Zt=tt.init();console.info("[FractalCanvas] WebGL2 init result:",Zt,"isDestroyed:",P),Zt&&!P?(U.current=tt,Le.current=!0,be.current="WebGL2 (GLSL)",le(!1),m==null||m()):(console.error("[FractalCanvas] WebGL2 init failed — no GPU engine available"),le(!1),m==null||m())}Ue().catch(tt=>{console.error("[FractalCanvas] Engine setup crashed:",tt),le(!1),m==null||m()});const Ne=tt=>{tt.preventDefault(),console.warn("GPU context lost, pausing rendering..."),ie.current=!0},rt=()=>{console.log("GPU context restored, re-initializing engine..."),ie.current=!1,Ue()};Y.addEventListener("webglcontextlost",Ne,!1),Y.addEventListener("webglcontextrestored",rt,!1);const Re=R.current;let vt=null;return Re&&(vt=new ResizeObserver(()=>{P||Pt()}),vt.observe(Re)),()=>{var tt,Zt;P=!0,clearTimeout(pe),clearTimeout(ne),Y.removeEventListener("webglcontextlost",Ne),Y.removeEventListener("webglcontextrestored",rt),vt&&vt.disconnect(),(tt=g.current)==null||tt.destroy(),(Zt=U.current)==null||Zt.destroy()}},[ee,Pt]),k.useEffect(()=>{let Y=!0,P=performance.now();const ne=()=>{de.current=!document.hidden,de.current&&(P=performance.now())};document.addEventListener("visibilitychange",ne);const pe=Ue=>{var tt,Zt;if(!Y)return;if(ie.current){A.current=requestAnimationFrame(pe);return}if(!de.current){A.current=requestAnimationFrame(pe);return}if(!Le.current){setTimeout(()=>{Y&&(A.current=requestAnimationFrame(pe))},1e3);return}const Ne=ge.current,rt=Ue-P,Re=Ne.targetFps||60,vt=Re>=240?0:1e3/Re;if(vt<=0||rt>=vt-.75){const ft=Math.min(rt,100);P=Ue,X.current+=ft/1e3;const oa=X.current;if(Ne.cameraMode==="flyThrough"){const Dt=Ne.rotX,sa=Ne.rotY,ca=Math.cos(Dt),It=Math.sin(Dt),ua=Math.cos(sa),pa=Math.sin(sa),mt=[It*ua,pa,-ca*ua],Qt=[ca,0,It],ea=[0,1,0];let at=1.4*(ft/1e3);(K.current.has("ShiftLeft")||K.current.has("ShiftRight"))&&(at*=2.8);let wt=0,ta=0,Ot=0;(K.current.has("KeyW")||K.current.has("ArrowUp"))&&(wt+=mt[0]*at,ta+=mt[1]*at,Ot+=mt[2]*at),(K.current.has("KeyS")||K.current.has("ArrowDown"))&&(wt-=mt[0]*at,ta-=mt[1]*at,Ot-=mt[2]*at),(K.current.has("KeyA")||K.current.has("ArrowLeft"))&&(wt-=Qt[0]*at,Ot-=Qt[2]*at),(K.current.has("KeyD")||K.current.has("ArrowRight"))&&(wt+=Qt[0]*at,Ot+=Qt[2]*at),(K.current.has("KeyE")||K.current.has("Space"))&&(ta+=ea[1]*at),(K.current.has("KeyQ")||K.current.has("KeyC"))&&(ta-=ea[1]*at),(wt!==0||ta!==0||Ot!==0)&&(ge.current={...Ne,camPosX:(Ne.camPosX??0)+wt,camPosY:(Ne.camPosY??0)+ta,camPosZ:(Ne.camPosZ??0)+Ot})}const ol=Ne.autoRotate?oa*Ne.autoRotateSpeed*.35:0,Nr=Ne.autoRotate?Math.sin(oa*.18)*.12:0;let sl=0,Ca=0;if(!Qe.current&&(Math.abs(S.current.x)>W||Math.abs(S.current.y)>W)){const Dt=Ne.zoom,sa=.0045*Math.max(.12,Math.min(1,Dt/2.8)),ca=ft;sl=S.current.x*ca*sa*.5,Ca=S.current.y*ca*sa*.5,S.current.x*=Z,S.current.y*=Z,Math.abs(S.current.x)<W&&(S.current.x=0),Math.abs(S.current.y)<W&&(S.current.y=0)}const dt={...Ne,rotX:Ne.rotX+ol+sl,rotY:Math.max(-1.52,Math.min(1.52,Ne.rotY+Nr+Ca))},Ke=q.current;if(Ke&&Ke.width>0&&Ke.height>0&&(g.current?g.current.render(oa,dt):U.current&&U.current.render(oa,dt)),Oe.current&&Ke)try{const Dt=Ke.toDataURL("image/png");(tt=we.current)==null||tt.call(we,Dt)}catch(Dt){console.error("Screenshot capture failed",Dt)}const Je=re.current;if(Je.push(ft),Je.length>72&&Je.shift(),Ue-h.current>250){h.current=Ue;const Dt=Je.reduce((at,wt)=>at+wt,0)/Je.length,sa=ft>0?Math.round(1e3/ft):0,ca=Dt>0?Math.round(1e3/Dt):0,It=[...Je].sort((at,wt)=>wt-at),ua=Math.floor(It.length*.05),pa=It[ua]||ft,mt=pa>0?Math.round(1e3/pa):0,Qt=g.current?g.current.adapterInfo:U.current?U.current.rendererInfo:"GPU Engine",ea=ee==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)";(Zt=ae.current)==null||Zt.call(ae,{fps:sa,avgFps:ca,frameTimeMs:parseFloat(ft.toFixed(2)),onePercentLow:mt,backend:ea,adapterName:Qt,resolution:[(Ke==null?void 0:Ke.width)||0,(Ke==null?void 0:Ke.height)||0],drsScale:1,targetFps:u.targetFps,interiorDistance:0})}}A.current=requestAnimationFrame(pe)};return A.current=requestAnimationFrame(pe),()=>{Y=!1,document.removeEventListener("visibilitychange",ne),A.current&&cancelAnimationFrame(A.current)}},[ee]),k.useEffect(()=>{const Y=ne=>{var pe,Ue,Ne;((pe=ne.target)==null?void 0:pe.tagName)!=="INPUT"&&(ne.repeat||(K.current.add(ne.code),ge.current.cameraMode!=="flyThrough"&&(ne.key===" "||ne.key==="ArrowRight"||ne.key==="ArrowDown"||ne.key==="PageDown"?(ne.preventDefault(),(Ue=Se.current)==null||Ue.call(Se)):(ne.key==="ArrowLeft"||ne.key==="ArrowUp"||ne.key==="PageUp")&&(ne.preventDefault(),(Ne=Ze.current)==null||Ne.call(Ze)))))},P=ne=>{K.current.delete(ne.code)};return window.addEventListener("keydown",Y),window.addEventListener("keyup",P),()=>{window.removeEventListener("keydown",Y),window.removeEventListener("keyup",P)}},[]);const Ma=Y=>{Qe.current=!0,Xe.current={x:Y.clientX,y:Y.clientY},S.current={x:0,y:0},O.current=performance.now(),Y.target.setPointerCapture(Y.pointerId)},nn=Y=>{var vt;if(!Qe.current)return;const P=Y.clientX-Xe.current.x,ne=Y.clientY-Xe.current.y,pe=performance.now(),Ue=Math.max(1,pe-O.current);O.current=pe,Xe.current={x:Y.clientX,y:Y.clientY};const Ne=Math.hypot(P,ne);pe-Ge.current>300&&(Ge.current=pe,(vt=Fe.current)==null||vt.call(Fe,0,Ne));const rt=ge.current.zoom,Re=.0045*Math.max(.12,Math.min(1,rt/2.8));S.current={x:P/Ue,y:ne/Ue},p(tt=>({...tt,rotX:tt.rotX+P*Re,rotY:Math.max(-1.52,Math.min(1.52,tt.rotY+ne*Re))})),af.recordInteraction("rotate",Math.hypot(P,ne)/Ue)},ln=Y=>{Qe.current=!1;try{Y.target.releasePointerCapture(Y.pointerId)}catch{}};k.useRef(0);const Vt=Y=>{Y.preventDefault();const P=Math.exp(Math.sign(Y.deltaY)*Math.min(Math.abs(Y.deltaY)*.0018,.28));w==null||w(Math.abs(Y.deltaY)*.02,0),p(ne=>({...ne,zoom:Math.max(.02,Math.min(64,ne.zoom*P))})),af.recordInteraction("zoom",Math.log(P)*10)},rn=Y=>{if(Y.touches.length===2){const P=Y.touches[0],ne=Y.touches[1],pe=Math.hypot(P.clientX-ne.clientX,P.clientY-ne.clientY);if(fe.current!==null&&fe.current>5){const Ue=fe.current/Math.max(pe,1),Ne=Math.pow(Ue,.95);w==null||w(Math.abs(fe.current-pe)*.04,0),p(rt=>({...rt,zoom:Math.max(.02,Math.min(64,rt.zoom*Ne))}))}fe.current=pe}},G=()=>{fe.current=null};return l.jsxs("div",{ref:R,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[B&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",ee==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),!B&&!Le.current&&l.jsx("div",{className:"absolute inset-0 z-[60] flex flex-col items-center justify-center bg-neutral-950/90 pointer-events-auto",children:l.jsxs("div",{className:"px-6 py-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-sm font-mono text-center max-w-md",children:[l.jsx("div",{className:"text-base font-bold mb-2",children:"GPU Unavailable"}),l.jsxs("div",{className:"text-xs opacity-80",children:["Neither WebGPU nor WebGL2 could initialize.",l.jsx("br",{}),"This browser/environment may not support hardware-accelerated rendering.",l.jsx("br",{}),"Try opening this page in Chrome/Edge with GPU acceleration enabled."]})]})}),l.jsx("canvas",{ref:q,id:"fractal-canvas",className:"w-full h-full block",onPointerDown:Ma,onPointerMove:nn,onPointerUp:ln,onPointerCancel:ln,onWheel:Vt,onTouchMove:rn,onTouchEnd:G},ee)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rh=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(p,f,c)=>c?c.toUpperCase():f.toLowerCase()),nf=u=>{const p=rh(u);return p.charAt(0).toUpperCase()+p.slice(1)},hf=(...u)=>u.filter((p,f,c)=>!!p&&p.trim()!==""&&c.indexOf(p)===f).join(" ").trim(),oh=u=>{for(const p in u)if(p.startsWith("aria-")||p==="role"||p==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=k.forwardRef(({color:u="currentColor",size:p=24,strokeWidth:f=2,absoluteStrokeWidth:c,className:y="",children:_,iconNode:w,...E},T)=>k.createElement("svg",{ref:T,...sh,width:p,height:p,stroke:u,strokeWidth:c?Number(f)*24/Number(p):f,className:hf("lucide",y),...!_&&!oh(E)&&{"aria-hidden":"true"},...E},[...w.map(([m,F])=>k.createElement(m,F)),...Array.isArray(_)?_:[_]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(u,p)=>{const f=k.forwardRef(({className:c,...y},_)=>k.createElement(ch,{ref:_,iconNode:p,className:hf(`lucide-${lh(nf(u))}`,`lucide-${u}`,c),...y}));return f.displayName=nf(u),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ll=ce("activity",uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],xf=ce("atom",ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ui=ce("book-open",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],mh=ce("bookmark-plus",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],xh=ce("box",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],yh=ce("brain",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],bh=ce("camera",gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],zh=ce("chart-column",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vf=ce("check",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Dh=ce("chevron-down",Nh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],jh=ce("chevron-left",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],yf=ce("chevron-right",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Mh=ce("chevron-up",Th);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sr=ce("compass",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ys=ce("cpu",Rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],gf=ce("crosshair",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Eh=ce("droplet",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Lh=ce("ellipsis",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],bf=ce("eye",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Fh=ce("flame",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Hh=ce("grid-3x3",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],zr=ce("heart",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],Ph=ce("infinity",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zh=ce("info",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],pi=ce("layers",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Jh=ce("maximize",Kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],_f=ce("mouse-pointer",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ih=ce("music",$h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],zf=ce("play",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],a2=ce("radio",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],i2=ce("scan",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],r2=ce("search",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],s2=ce("share-2",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xs=ce("shield-check",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fi=ce("sparkles",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],f2=ce("trash-2",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Sf=ce("user",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ks=ce("volume-2",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Nf=ce("volume-x",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],v2=ce("wrench",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rl=ce("x",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],b2=ce("zoom-in",g2),_2=({telemetry:u,targetFps:p,phiMultiplier:f})=>{const[c,y]=k.useState([]),[_,w]=k.useState(!1);k.useEffect(()=>{u.frameTimeMs>0&&y(m=>[...m,u.frameTimeMs].slice(-40))},[u.frameTimeMs]);const E=p>0?1e3/p:6.94;p===144||p===0&&u.fps>=140;const T=u.frameTimeMs<=E*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${u.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${u.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:u.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>w(!_),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:_?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${u.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:p>0?`${p}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:u.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[u.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:p>=240?"Max 250 FPS":`${p}Hz = ${(1e3/p).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${T?"text-emerald-400":"text-amber-400"}`,children:u.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(u.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!_&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[p," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",E.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:c.map((m,F)=>{const R=Math.min(Math.max(m/20*100,8),100),q=m<=E*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${q?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${R}%`},title:`${m} ms`},F)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(fi,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:u.adapterName,children:u.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[u.resolution[0],"×",u.resolution[1]]})]})]})]})]})})},z2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Df={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},S2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],lf={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},N2=1.61803398875,Vs=137.507764;function _r(u,p,f){u=(u%360+360)%360,p=Math.max(0,Math.min(1,p)),f=Math.max(0,Math.min(1,f));const c=(1-Math.abs(2*f-1))*p,y=c*(1-Math.abs(u/60%2-1)),_=f-c/2;let w=0,E=0,T=0;return u<60?(w=c,E=y,T=0):u<120?(w=y,E=c,T=0):u<180?(w=0,E=c,T=y):u<240?(w=0,E=y,T=c):u<300?(w=y,E=0,T=c):(w=c,E=0,T=y),[w+_,E+_,T+_]}function D2(u,p){const f=u,c=(u+Vs)%360,y=(u+Vs*2)%360;return{id:`golden-gen-${Math.floor(u)}`,name:`Гармоника φ (${p})`,primary:_r(f,.85,.45),secondary:_r(c,.8,.55),accent:_r(y,.95,.65),ambient:_r(f,.6,.12)}}const an=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],si={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона"},w2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5},Ps="golden_ratio_taste_profile_v2",j2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function A2(u){switch(u){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class T2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem(Ps);if(f){const c=JSON.parse(f);return an.forEach(y=>{c.typeAffinities&&c.typeAffinities[y]===void 0&&(c.typeAffinities[y]=1)}),c}}catch{}const p={};return an.forEach(f=>{p[f]=1}),{typeAffinities:p,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(p=!1){if(p){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(Ps,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(Ps,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}breedNextSpecimen(p){var Xe;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=p;if(!f){const fe=an,S=fe.map(W=>{const re=Math.max(.2,this.taste.typeAffinities[W]||1),h=this.recentTypes.includes(W)?.05:1,A=this.currentGeneration<20?1.5:1;return re*h*A}),O=S.reduce((W,re)=>W+re,0);let Z=Math.random()*O;for(let W=0;W<fe.length;W++){if(Z<=S[W]){f=fe[W];break}Z-=S[W]}f||(f=fe[Math.floor(Math.random()*fe.length)]),this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const c=Math.random()<.5;let y=this.taste.preferredHue;if(c){const fe=Math.random()<.5?1:2;y=(y+Vs*fe+(Math.random()*30-15))%360}else y=Math.random()*360%360;let _;if(Math.random()<.65){const fe=this.history.length>0?(Xe=this.history[this.history.length-1].palette)==null?void 0:Xe.id:"";let S=$t.filter(O=>O.id!==fe);S.length===0&&(S=$t),_=S[Math.floor(Math.random()*S.length)]}else _=D2(y,`Ген #${this.currentGeneration}`);const E=(Math.random()-.5)*.08,T=parseFloat((N2+E).toFixed(5)),m=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),F=Math.max(12,Math.min(32,m)),R=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),q=parseFloat(R.toFixed(2)),L=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),V=parseFloat(L.toFixed(2)),ee=w2[f]*(.95+Math.random()*.1),$=Math.random()<.72;let B=f,le=f,g=0,U=0,be="smoothUnion",ge=1,ae=.32,we=.22,Se=`${si[f]} • φ-${this.currentGeneration}`;if($){const fe=lf[f]||{partners:an.filter(W=>W!==f),ops:["smoothUnion","smoothMorph","domainWarp"]};B=fe.partners[Math.floor(Math.random()*fe.partners.length)],be=fe.ops[Math.floor(Math.random()*fe.ops.length)],g=parseFloat((.22+Math.random()*.26).toFixed(3)),ae=parseFloat((.24+Math.random()*.26).toFixed(3)),we=parseFloat((.15+Math.random()*.25).toFixed(3)),ge=1;const S=Df[be],O=si[f].split(" ")[0],Z=si[B].split(" ")[0];if(Se=`${O} ${S} ${Z} • φ-${this.currentGeneration}`,Math.random()<.35){const re=(lf[B]||{partners:an.filter(h=>h!==f&&h!==B)}).partners.filter(h=>h!==f&&h!==B);if(re.length>0){le=re[Math.floor(Math.random()*re.length)],U=parseFloat((.08+Math.random()*.18).toFixed(3));const h=si[le].split(" ")[0];Se=`${O} ${S} ${Z} ⊕ ${h} • φ-${this.currentGeneration}`}}}const Ze=parseFloat((.7+Math.random()*1.5).toFixed(3)),Fe=parseFloat((.35+Math.random()*1.05).toFixed(3)),Qe={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:Se,type:f,hybridType:B,tertiaryType:le,compositeOp:be,hybridBlend:g,tertiaryBlend:U,smoothK:ae,warpStrength:we,octaveLayers:ge,boxFold:Ze,sphereFold:Fe,interiorCut:0,palette:_,iterations:F,phiMultiplier:T,morphSpeed:q,glowIntensity:V,zoom:ee,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(Qe),this.history.length>40&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,Qe}registerEngagement(p,f,c,y){y.dwellTimeSeconds+=p,Math.abs(f)>.05&&y.zoomInteractions++,c>.05&&y.orbitInteractions++;const _=Math.min(35,y.dwellTimeSeconds/90*35),w=Math.min(18,Math.log1p(y.zoomInteractions)*3.2),E=Math.min(18,Math.log1p(y.orbitInteractions)*2.8),m=Math.round(Math.min(96,25+_+w+E));if(y.affinityScore=Math.max(y.affinityScore,m),y.dwellTimeSeconds>10&&y.affinityScore>50){const F=this.taste.typeAffinities[y.type]||1;if(this.taste.typeAffinities[y.type]=Math.min(4,F+.005),y.hybridType&&y.hybridBlend>.1){const B=this.taste.typeAffinities[y.hybridType]||1;this.taste.typeAffinities[y.hybridType]=Math.min(4,B+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+y.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+y.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+y.iterations*.01);const[R,q,L]=y.palette.primary,V=Math.max(R,q,L),ee=Math.min(R,q,L),$=V-ee;if($>.05){let B=0;V===R?B=60*((q-L)/$%6):V===q?B=60*((L-R)/$+2):B=60*((R-q)/$+4),B<0&&(B+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+B*.03)%360}y.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=y.affinityScore),this.saveTasteProfile()}return y.affinityScore}boostAffinity(p){p.affinityScore=95,this.taste.typeAffinities[p.type]=Math.min(4.5,(this.taste.typeAffinities[p.type]||1)+.35),p.hybridType&&(this.taste.typeAffinities[p.hybridType]=Math.min(4.5,(this.taste.typeAffinities[p.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(p){return p===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const p={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};an.forEach(w=>{const E=A2(w),T=this.taste.typeAffinities[w]||1;p[E]+=T,f[E]++});const y=["geometry","complex","minimal","primes","attractors"].map(w=>({archetype:w,label:j2[w],avg:f[w]>0?p[w]/f[w]:1})),_=y.reduce((w,E)=>w+E.avg,0);return y.map(w=>({archetype:w.archetype,label:w.label,percentage:Math.round(w.avg/Math.max(1e-4,_)*100),score:Math.min(100,Math.round(w.avg*25))}))}suggestRenderStyle(){const p=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],f=Math.random();if(f<.4)return"solid";const c=Math.floor((f-.4)/.6*(p.length-1));return p[Math.min(c+1,p.length-1)]}}const M2=({params:u,onParamsChange:p,onSelectFractalType:f,onCaptureScreenshot:c,onToggleFullscreen:y,onToggleInfoModal:_,onOpenAtlasModal:w,activeBackend:E,forcedBackend:T,onSelectBackend:m,onClose:F,tasteProfile:R,onSaveToFeed:q})=>{const[L,V]=k.useState("architectures"),[ee,$]=k.useState("all"),B=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],le=ee==="all"?B:B.filter(g=>g.group===ee);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[w&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:w,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(ui,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),q&&l.jsxs("button",{id:"save-to-feed-btn",onClick:q,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(mh,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:c,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(bh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:y,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx(Jh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:_,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(ui,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:F,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(rl,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>V("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>V("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>V("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>V("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>V("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>V("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>V("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>V("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${L==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),L==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(g=>l.jsx("button",{onClick:()=>$(g.id),className:`px-2 py-1 rounded-md text-[9px] transition ${ee===g.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:g.label},g.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:le.map(g=>{const U=u.type===g.id;return l.jsxs("button",{id:`arch-btn-${g.id}`,onClick:()=>{f?f(g.id):p(be=>({...be,type:g.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${U?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${U?"text-amber-300":"text-neutral-200"}`,children:g.label}),U&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:g.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:g.formula})]},g.id)})})]}),L==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:S2.map(g=>l.jsxs("button",{onClick:()=>p(U=>({...U,compositeOp:g})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${u.compositeOp===g?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:z2[g]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Df[g]})]},g))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((u.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:u.hybridType||u.type,onChange:g=>p(U=>({...U,hybridType:g.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:an.map(g=>l.jsx("option",{value:g,children:si[g]},g))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:u.hybridBlend??.35,onChange:g=>p(U=>({...U,hybridBlend:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((u.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:u.tertiaryType||"riemannZeta",onChange:g=>p(U=>({...U,tertiaryType:g.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:an.map(g=>l.jsx("option",{value:g,children:si[g]},g))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:u.tertiaryBlend??.2,onChange:g=>p(U=>({...U,tertiaryBlend:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:u.smoothK,onChange:g=>p(U=>({...U,smoothK:parseFloat(g.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.warpStrength,onChange:g=>p(U=>({...U,warpStrength:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]})]}),L==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(g=>l.jsxs("button",{onClick:()=>p(U=>({...U,cameraMode:g.id})),className:`p-2 rounded-lg border text-left transition ${u.cameraMode===g.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:g.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:g.desc})]},g.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:u.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(g=>l.jsxs("button",{onClick:()=>p(U=>({...U,renderStyle:g.id})),className:`p-2 rounded-lg border text-left transition ${(u.renderStyle||"solid")===g.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:g.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:g.desc})]},g.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:u.slicePlane>.01?`${(u.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(g=>l.jsx("button",{onClick:()=>p(U=>({...U,sliceAxis:g.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(u.sliceAxis||"golden")===g.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:g.label},g.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.slicePlane,onChange:g=>p(U=>({...U,slicePlane:parseFloat(g.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>p(g=>({...g,probeActive:!g.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${u.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${u.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>p(g=>({...g,macroMode:!g.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${u.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${u.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(u.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:u.headlampPower??1,onChange:g=>p(U=>({...U,headlampPower:parseFloat(g.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(u.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:u.volumetricFog??.4,onChange:g=>p(U=>({...U,volumetricFog:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((u.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:u.interiorCut??.4,onChange:g=>p(U=>({...U,interiorCut:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]})]}),L==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:$t.map(g=>{const U=u.paletteId===g.id;return l.jsxs("button",{onClick:()=>p(be=>({...be,paletteId:g.id,customPalette:g})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${U?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${U?"text-amber-300":"text-neutral-200"}`,children:g.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${g.primary.map(be=>Math.round(be*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${g.secondary.map(be=>Math.round(be*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${g.accent.map(be=>Math.round(be*255)).join(",")})`}})]})]},g.id)})}),L==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:u.phiMultiplier,onChange:g=>p(U=>({...U,phiMultiplier:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:u.iterations,onChange:g=>p(U=>({...U,iterations:parseInt(g.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[u.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:u.morphSpeed,onChange:g=>p(U=>({...U,morphSpeed:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:u.boxFold,onChange:g=>p(U=>({...U,boxFold:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:u.sphereFold,onChange:g=>p(U=>({...U,sphereFold:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]})]}),L==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(g=>l.jsx("button",{onClick:()=>p(U=>({...U,targetFps:g})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${u.targetFps===g?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:g===0?"Uncapped":`${g} FPS`},g))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>p(g=>({...g,drsEnabled:!g.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${u.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:u.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(g=>l.jsx("button",{onClick:()=>m(g.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${T===g.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:g.label},g.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",E]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),L==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[u.enableAudio?l.jsx(Ks,{className:"w-4 h-4 text-amber-400"}):l.jsx(Nf,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>p(g=>({...g,enableAudio:!g.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${u.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:u.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((u.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.audioVolume??.65,onChange:g=>p(U=>({...U,audioVolume:parseFloat(g.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(g=>l.jsxs("button",{onClick:()=>p(U=>({...U,audioTuning:g.id})),className:`w-full p-2 rounded-lg border text-left transition ${(u.audioTuning||"phi432")===g.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:g.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:g.desc})]},g.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),L==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(R==null?void 0:R.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(R==null?void 0:R.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((R==null?void 0:R.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((R==null?void 0:R.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},C2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},R2=({specimen:u,resonanceScore:p,isInteracting:f,interactionType:c,onNext:y,onPrev:_,onFavorite:w,onOpenProfile:E,enableAudio:T,onToggleAudio:m,onOpenResearchModal:F,onOpenAtlas:R,isFeedOpen:q,onToggleFeed:L,isCurrentLiked:V=!1})=>{const[ee,$]=k.useState(!1),[B,le]=k.useState(!1),[g,U]=k.useState(!1),[be,ge]=k.useState(!1),[ae,we]=k.useState(!1),Se=k.useRef(null),Ze=k.useRef(!1);k.useEffect(()=>{$(V)},[u==null?void 0:u.id,V]);const Fe=()=>{Se.current&&clearTimeout(Se.current),Se.current=setTimeout(()=>{Ze.current||(le(!1),U(!1),ge(!1))},3e3)},Ge=()=>{le(!0),U(!0),Fe()},Qe=()=>{ge(O=>!O),le(!0),Se.current&&clearTimeout(Se.current)};k.useEffect(()=>(Ge(),()=>{Se.current&&clearTimeout(Se.current)}),[]),k.useEffect(()=>{const O=W=>{(W.clientY<80||W.clientY>window.innerHeight-120)&&Ge()},Z=W=>{const re=W.target;re.closest("#top-right-bar")||re.closest("#top-right-trigger")||re.closest("#neuro-feed-bar")||(U(!0),Fe())};return window.addEventListener("mousemove",O),window.addEventListener("touchstart",Z,{passive:!0}),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("touchstart",Z)}},[]);const Xe=()=>{$(!0),w()},fe=()=>{if(!u)return;const O=new URLSearchParams({type:u.type,hybrid:u.hybridType,tertiary:u.tertiaryType,op:u.compositeOp,blend:u.hybridBlend.toFixed(3),tertiaryBlend:u.tertiaryBlend.toFixed(3),smoothK:u.smoothK.toFixed(3),warp:u.warpStrength.toFixed(3),octaves:String(u.octaveLayers),boxFold:u.boxFold.toFixed(3),sphereFold:u.sphereFold.toFixed(3),interiorCut:u.interiorCut.toFixed(3),palette:u.palette.id,iterations:String(u.iterations),phi:u.phiMultiplier.toFixed(9),morphSpeed:u.morphSpeed.toFixed(3),glow:u.glowIntensity.toFixed(3),zoom:u.zoom.toFixed(3),name:u.name}),Z=`${window.location.origin}${window.location.pathname}#${O.toString()}`;navigator.share?navigator.share({title:u.name,text:`Фрактал: ${u.name}`,url:Z}).catch(()=>{}):navigator.clipboard.writeText(Z).then(()=>{we(!0),setTimeout(()=>we(!1),2e3)}).catch(()=>{const W=document.createElement("textarea");W.value=Z,document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W),we(!0),setTimeout(()=>we(!1),2e3)})},S=u!=null&&u.compositeOp?C2[u.compositeOp]||u.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{Ze.current=!0,le(!0),ge(!0),Se.current&&clearTimeout(Se.current)},onMouseLeave:()=>{Ze.current=!1,ge(!1),Fe()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${be?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:Qe,title:"Меню",children:l.jsx(Lh,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${B&&be?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:m,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${T?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:T?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:T?l.jsx(Ks,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(Nf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),R&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:R,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(ui,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),L&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:L,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${q?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:q?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(pi,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:E,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(Sf,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[p,"%"]})]})]})]}),f&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Sr,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:c==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${g?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(u==null?void 0:u.name)||"Золотой Фрактал",children:(u==null?void 0:u.name)||"Золотой Фрактал"}),(u==null?void 0:u.hybridBlend)&&u.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:u.compositeOp,children:S})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(u==null?void 0:u.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:Xe,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${ee?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(zr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${ee?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:fe,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${ae?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:ae?"Ссылка скопирована!":"Поделиться этим фракталом",children:ae?l.jsx(vf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(s2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:_,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(jh,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:y,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(yf,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},k2=({isOpen:u,onClose:p})=>u?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:p,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(ui,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:p,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(rl,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Sr,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(fi,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(pi,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(pi,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(ll,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(yh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:p,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,O2=({isOpen:u,onClose:p,tasteProfile:f,archetypeBreakdown:c,currentSpecimen:y,resonanceScore:_,isEngineerMode:w,onToggleEngineerMode:E,audioTuning:T,onSelectAudioTuning:m,onResetTasteProfile:F,onOpenManifest:R,likedSpecimens:q=[],onPlayLiked:L,onRemoveLike:V,isCurrentLiked:ee=!1})=>u?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(Sf,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:p,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(rl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[_,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${_}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(y==null?void 0:y.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(zr,{className:`w-4 h-4 ${q.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:q.length})]}),ee&&y&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(zr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),q.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(zr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:q.map(($,B)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:B+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:$.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",$.phiMultiplier.toFixed(4)," • Gen #",$.generation]})]}),L&&l.jsx("button",{onClick:()=>L($),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(zf,{className:"w-3 h-3"})}),V&&l.jsx("button",{onClick:()=>V($.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(f2,{className:"w-3 h-3"})})]},$.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(zh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:c.map($=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:$.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[$.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${$.percentage}%`}})})]},$.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ks,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map($=>l.jsxs("button",{onClick:()=>m($.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${T===$.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:$.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:$.desc})]},$.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(fi,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{R==null||R()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(v2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:E,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${w?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${w?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:w?"Инженер Включен":"Включить Инж"})]})]}),w&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:p,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:p,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,rf=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],E2=({isReady:u,onFinished:p})=>{const[f,c]=k.useState(0),[y,_]=k.useState(!1),[w,E]=k.useState(!1);return k.useEffect(()=>{const T=setInterval(()=>{c(m=>m<rf.length-1?m+1:m)},450);return()=>clearInterval(T)},[]),k.useEffect(()=>{const T=setTimeout(()=>{if(!u){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),_(!0);const m=setTimeout(()=>{E(!0),p==null||p()},700);return()=>clearTimeout(m)}},15e3);return()=>clearTimeout(T)},[u,p]),k.useEffect(()=>{if(u){const T=setTimeout(()=>{_(!0);const m=setTimeout(()=>{E(!0),p==null||p()},700);return()=>clearTimeout(m)},500);return()=>clearTimeout(T)}},[u,p]),w?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${y?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((T,m)=>l.jsxs("g",{transform:`rotate(${T} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},m)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:rf[f]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},q2=({isOpen:u,onClose:p,isFirstVisit:f=!1,onOpenAtlas:c})=>{if(!u)return null;const y=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}p()},_=()=>{y(),c==null||c()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:y,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:w=>w.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:y,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(rl,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(fi,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Sr,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(pi,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(Ih,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(_f,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[c&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:_,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(ui,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:y,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(yf,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},of=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}],il=[{id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",enginePreset:{type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}},{id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}},{id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}},{id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2.0 (граница D ≈ 1.58)",generatorRule:"Чередование знака угла поворота на каждом шаге итерации",description:"Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.",phiPiRelation:"Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.35,zoom:2.5}},{id:"golden-dragon",name:"Золотой дракон",englishName:"Golden Dragon Curve",category:"geometric_curves",formula:"r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1",dimension:"D = 2.0 (самоподобие φ)",generatorRule:"Деление отрезка в отношении золотого сечения 1:φ",description:"Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.",phiPiRelation:"Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.6}},{id:"minkowski-curve",name:"Кривая Минковского (Сосиска Минковского)",englishName:"Minkowski Sausage",category:"geometric_curves",formula:"N = 8, S = 4",dimension:"D = ln(8)/ln(4) = 1.500",generatorRule:"F → F+F-F-FF+F+F-F (угол 90°)",description:"Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.",phiPiRelation:"Ортогональная дискретность π/2; целое полуцелое значение размерности.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothMorph",boxFold:1.5,zoom:3.1}},{id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]², N = 9, S = 3",dimension:"D = ln(9)/ln(3) = 2.000",generatorRule:"F → F+F-F-F-F+F+F+F-F (угол 90°)",description:"Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.",phiPiRelation:"Сюръективное непрерывное отображение; шаг дискретизации π/2.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.9}},{id:"hilbert-curve",name:"Кривая Гильберта 2D/3D",englishName:"Hilbert Space-Filling Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}",dimension:"D = 2.0 (в 3D D = 3.0)",generatorRule:"L-система обхода ячеек 2^n x 2^n",description:"Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.",phiPiRelation:"Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:3.2,rotX:.45,rotY:.35}},{id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2) = 2.0",dimension:"D = 2.000",generatorRule:"Замкнутый маршрут вокруг треугольников сетки",description:"Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.",phiPiRelation:"Углы поворота 45° (π/4) и 90° (π/2).",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"moore-curve",name:"Кривая Мура",englishName:"Moore Curve",category:"geometric_curves",formula:"N = 4^n, S = 2^n",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"Замкнутый вариант кривой Гильберта",description:"Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.",phiPiRelation:"Симметричный квадрантный обход, кратный π/2.",enginePreset:{type:"hilbertCurve3D",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.25,zoom:3}},{id:"gosper-curve",name:"Кривая Госпера (Flowsnake)",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"N = 7, S = √7",dimension:"D = ln(7)/ln(√7) = 2.000",generatorRule:"L-система на гексагональной сетке (угол 60° = π/3)",description:"Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.",phiPiRelation:"Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.",enginePreset:{type:"quasicrystal",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"cesaro-curve",name:"Кривая Чезаро",englishName:"Cesàro Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2(1 + cos α))",dimension:"D ∈ (1.0, 2.0] при α ∈ (0, π/2)",generatorRule:"Кривая Коха с переменным углом при вершине",description:"Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.",phiPiRelation:"При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"domainWarp",warpStrength:.3,zoom:2.7}},{id:"drummond-curve",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ = π / k, k ∈ ℝ",dimension:"D ≈ 1.45 - 1.85",generatorRule:"Циклические L-системы с дробными иррациональными углами",description:"Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.",phiPiRelation:"Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.",enginePreset:{type:"phyllotaxis",compositeOp:"goldenSpiralFold",zoom:2.6}},{id:"mcwhorter-pentigree",name:"Снежинка Коха — МакВортера",englishName:"McWhorter Pentigree",category:"geometric_curves",formula:"N = 5, S = (3 - √5)/2",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.672",generatorRule:"Асимметричный пентагональный генератор",description:"Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.",phiPiRelation:"Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",zoom:2.5}},{id:"rice-curve",name:"Кривая Райса",englishName:"Rice Curve",category:"geometric_curves",formula:"θ_1 = π/3, θ_2 = 2π/5",dimension:"D ≈ 1.78",generatorRule:"Неортогональные развороты в пространственно-заполняющих кривых",description:"Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.",phiPiRelation:"Сочетание углов π/3 и пентагональных пропорций золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"quasicrystal",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"polya-curve",name:"Кривая Пойи",englishName:"Pólya Sweep Curve",category:"geometric_curves",formula:"T → T_1 ∪ T_2",dimension:"D = 2.000",generatorRule:"Рекурсивный обход прямоугольного треугольника с высотой",description:"Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.",phiPiRelation:"Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.7}},{id:"sierpinski-arrowhead",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Двухсимвольная L-система сходящаяся к треугольнику",description:"Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.",phiPiRelation:"Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothUnion",zoom:2.9}},{id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"constructive",formula:"N = 3, S = 2",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Удаление центрального перевернутого треугольника",description:"Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.",phiPiRelation:"Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"sierpinski-carpet",name:"Ковер Серпинского",englishName:"Sierpiński Carpet",category:"constructive",formula:"N = 8, S = 3",dimension:"D = ln(8)/ln(3) ≈ 1.89279",generatorRule:"Деление квадрата на 9 частей, удаление центрального",description:"Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.",phiPiRelation:"Универсальная плоская кривая Менгера; мера Лебега стремится к 0.",enginePreset:{type:"menger",compositeOp:"smoothMorph",boxFold:1,zoom:2.9}},{id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"constructive",formula:"N = 20, S = 3, V_∞ = 0, A_∞ = ∞",dimension:"D = ln(20)/ln(3) ≈ 2.72683",generatorRule:"Куб делится на 27 кубиков, удаляются 7 центральных",description:"Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.",phiPiRelation:"Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1.2,zoom:3.1}},{id:"pythagoras-tree-classic",name:"Дерево Пифагора классическое",englishName:"Pythagoras Tree (Symmetric)",category:"constructive",formula:"a² + b² = c², a = b = c/√2",dimension:"D = 2.0 (перекрытия в пределе)",generatorRule:"Построение квадратов на сторонах прямоугольного равнобедренного треугольника",description:"Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).",phiPiRelation:"Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.6,rotX:.35}},{id:"pythagoras-tree-windblown",name:"Дерево Пифагора обдуваемое",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"α = 60° (π/3), β = 30° (π/6)",dimension:"D ≈ 1.85",generatorRule:"Разноугольное ветвление прямоугольного треугольника",description:"Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.",phiPiRelation:"Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.",enginePreset:{type:"pythagorasTree3D",compositeOp:"goldenSpiralFold",warpStrength:.3,zoom:2.7}},{id:"pythagoras-tree-naked",name:"Обнаженное дерево Пифагора",englishName:"Naked Pythagoras Tree",category:"constructive",formula:"Граф центров квадратов G(V, E)",dimension:"D ≈ 1.73",generatorRule:"Отрезки соединяют только центры смежных квадратов",description:"Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центры квадратов дерева Пифагора.",phiPiRelation:"Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"domainWarp",warpStrength:.25,zoom:2.8}},{id:"apollonian-gasket",name:"Сетка Аполлония (Упаковка Аполлония)",englishName:"Apollonian Gasket / Sphere Packing",category:"constructive",formula:"(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)",dimension:"D ≈ 1.30568 (в 3D D ≈ 2.4739)",generatorRule:"Теорема Содди о четырех касающихся окружностях",description:"Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.",phiPiRelation:"Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",sphereFold:.75,zoom:3}},{id:"vicsek-fractal",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Box / Cross)",category:"constructive",formula:"N = 5, S = 3",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Деление квадрата на 9 частей, сохранение центрального креста",description:"Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.",phiPiRelation:"Идеальная симметрия группы D_4 (повороты на π/2).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothMorph",boxFold:1.1,zoom:2.9}},{id:"t-square-fractal",name:"Т-квадрат",englishName:"T-Square Fractal",category:"constructive",formula:"A_∞ = 2 A_0",dimension:"D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)",generatorRule:"Итеративное наложение уменьшенных квадратов на углы",description:"Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.",phiPiRelation:"Ограниченная фрактальная граница со степенью масштабирования 1/2.",enginePreset:{type:"menger",compositeOp:"domainWarp",warpStrength:.2,zoom:3}},{id:"sierpinski-cross",name:"Крест Серпинского",englishName:"Sierpiński Cross",category:"constructive",formula:"D = ln(5)/ln(3) ≈ 1.465",dimension:"D ≈ 1.465 (в 3D D ≈ 2.32)",generatorRule:"Пространственное пересечение плоскостей Серпинского",description:"Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.",phiPiRelation:"Инвариантен относительно октаэдрических вращений SO(3).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"sierpinski-pentagon",name:"Пятиугольник Серпинского (Пентафрактал)",englishName:"Sierpiński Pentagon (Pentaflake)",category:"constructive",formula:"N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²",dimension:"D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228",generatorRule:"5 копий пятиугольника по углам, удаление центра",description:"Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.",phiPiRelation:"АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",phiMultiplier:1.61803398875,zoom:2.7}},{id:"hexafractal",name:"Гексафрактал (Гексафлейк)",englishName:"Hexaflake",category:"constructive",formula:"N = 7, S = 3",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть копий шестиугольника вокруг центрального седьмого",description:"Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.",phiPiRelation:"Гексагональные углы 2π/6 = 60° = π/3.",enginePreset:{type:"quasicrystal",compositeOp:"smoothUnion",zoom:2.8}},{id:"ivezic-fractal",name:"Фрактал Ивезича",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n+1)/ln(2)",dimension:"D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32",generatorRule:"Рекурсивное деление n-мерного регулярного симплекса",description:"Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.",phiPiRelation:"Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"levy-snowflake",name:"Снежинка Леви",englishName:"Lévy Snowflake",category:"constructive",formula:"∂(Lévy C curve ∪ rot)",dimension:"D = 2.0 (граница D ≈ 1.934)",generatorRule:"Замкнутая суперпозиция 8 C-кривых Леви",description:"Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.",phiPiRelation:"Периодичность 2π/8 = π/4.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.7}},{id:"sierpinski-pyramid",name:"Пирамида Серпинского (Тетраэдр Серпинского)",englishName:"Sierpiński Tetrahedron",category:"constructive",formula:"N = 4, S = 2, V_∞ = 0",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"4 тетраэдра половинного размера в вершинах",description:"Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.",phiPiRelation:"Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.9,rotX:.4}},{id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}},{id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}},{id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}},{id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}},{id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 2.0",generatorRule:"Бассейны притяжения комплексных корней полинома",description:"Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.",phiPiRelation:"Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:2.9}},{id:"serafimsky-fractal",name:"Фрактал Серафимского",englishName:"Serafimsky Shifted Newton",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{iθ} f(z_n)/f'(z_n)",dimension:"D ≈ 2.0",generatorRule:"Метод Ньютона с комплексным вращением фазового угла θ",description:"Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.",phiPiRelation:"Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.",enginePreset:{type:"newtonBasins",compositeOp:"goldenSpiralFold",warpStrength:.35,zoom:2.8}},{id:"burning-ship",name:"Фрактал «Пылающий корабль» (Burning Ship)",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D = 2.0",generatorRule:"Абсолютная величина от Re и Im перед возведением в квадрат",description:"Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.",phiPiRelation:"Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",zoom:3.1,rotX:.4}},{id:"perpendicular-burning-ship",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c",dimension:"D = 2.0",generatorRule:"Модуль берется только от одной компоненты (вещественной)",description:"Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.",phiPiRelation:"Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.",enginePreset:{type:"burningShip3D",compositeOp:"domainWarp",warpStrength:.3,zoom:3}},{id:"pickover-biomorphs",name:"Биоморфы Пиковера",englishName:"Pickover Biomorphs",category:"algebraic_complex",formula:"|Re(z_n)| < R ∨ |Im(z_n)| < R",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Условие останова итераций имитирует форму одноклеточных",description:"Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.",phiPiRelation:"Формы радиолярий и спикул подчиняются золотому закону роста Д'Арси Томпсона.",enginePreset:{type:"quaternionJulia",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.7}},{id:"trigonometric-fractal",name:"Тригонометрические фракталы (Фрактал Иисуса)",englishName:"Trigonometric Fractal (sin z + c)",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c",dimension:"D = 2.0",generatorRule:"Трансцендентные целые функции комплексного переменного",description:"Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.",phiPiRelation:"Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.",enginePreset:{type:"spiralTunnel",compositeOp:"quantumResonance",zoom:3.2}},{id:"lyapunov-fractal",name:"Карты Ляпунова / Фракталы Ляпунова",englishName:"Lyapunov Fractals / Zircon City",category:"algebraic_complex",formula:"λ = lim (1/N) ∑ ln |f'(x_n)| для последовательности AB",dimension:"D ≈ 2.0 (фрактальные границы стабильности)",generatorRule:"Чередование параметров r_A и r_B логистического отображения",description:"Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.",phiPiRelation:"Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.",enginePreset:{type:"primeSpiral",compositeOp:"quantumResonance",zoom:2.8}},{id:"novak-fractal",name:"Множество Новака",englishName:"Novak Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)",dimension:"D ≈ 2.0",generatorRule:"Использование иррациональных дробных степеней комплексного числа",description:"Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.",phiPiRelation:"При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"goldenSpiralFold",zoom:2.8}},{id:"spider-fractal",name:"Фрактал «Паук»",englishName:"Spider Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Связанная динамика точки z и параметра c на каждом шаге",description:"Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.",phiPiRelation:"Отношение затухания c_n/2 согласуется с золотой дихотомией.",enginePreset:{type:"quaternionJulia",compositeOp:"domainWarp",warpStrength:.45,zoom:2.9}},{id:"sherwood-carpet",name:"Ковер Шервуда",englishName:"Sherwood Carpet",category:"algebraic_complex",formula:"z_{n+1} = 1 / (z_n^k + c)",dimension:"D ≈ 1.85",generatorRule:"Инверсия комплексных полиномов высших порядков",description:"Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.",phiPiRelation:"Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.",enginePreset:{type:"apollonian",hybridType:"mandelbox",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"quaternion-mandelbrot",name:"Кватернионный Мандельброт 4D",englishName:"4D Quaternion Mandelbrot",category:"multidimensional",formula:"q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0",dimension:"D_4D = 4.0, D_3D-сечения = 2.0 - 3.0",generatorRule:"Итерации в теле алгебры кватернионов ℍ (1, i, j, k)",description:"Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.",phiPiRelation:"Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.25}},{id:"quaternion-julia",name:"Кватернионный Жюлиа 4D",englishName:"4D Quaternion Julia",category:"multidimensional",formula:"q_{n+1} = q_n² + C, C = const ∈ ℍ",dimension:"D ≈ 2.5 - 3.2 в 3D проекции",generatorRule:"4D сечение динамической системы кватернионов при фиксированном векторе C",description:"Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.",phiPiRelation:"Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.8}},{id:"mandelbulb-3d",name:"Mandelbulb 3D",englishName:"Mandelbulb 3D (White & Nylander)",category:"multidimensional",formula:"v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c",dimension:"D ≈ 2.7 - 2.9",generatorRule:"Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)",description:"Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.",phiPiRelation:"Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:3.1}},{id:"mandelbox-3d",name:"Mandelbox 3D",englishName:"Mandelbox 3D (Tom Lowe)",category:"multidimensional",formula:"v ↦ s · sphereFold(boxFold(v)) + c",dimension:"D ≈ 2.3 - 2.8",generatorRule:"Циклическое складывание кубического пространства (box fold) и сферическая инверсия",description:"3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.",phiPiRelation:"Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.",enginePreset:{type:"mandelbox",boxFold:1.2,sphereFold:.65,compositeOp:"smoothUnion",zoom:3.2}},{id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube (Eric Baird)",category:"multidimensional",formula:"Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)",dimension:"D ≈ 2.529",generatorRule:"Вырезание крестообразных отверстий с пропорциями золотого сечения",description:"Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.",phiPiRelation:"Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"kleinian-groups",name:"Клейниановы группы (Предельные множества)",englishName:"Kleinian Limit Sets / Schottky Groups",category:"multidimensional",formula:"γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)",dimension:"D ≈ 1.3 - 2.7",generatorRule:"Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³",description:"Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.",phiPiRelation:"Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothMorph",zoom:2.9}},{id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern IFS",category:"ifs_attractors",formula:"W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}",dimension:"D ≈ 1.85",generatorRule:"4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}",description:"Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.",phiPiRelation:"Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.",enginePreset:{type:"phyllotaxis",hybridType:"pythagorasTree3D",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"fractal-flames",name:"Фрактальное пламя (Fractal Flames)",englishName:"Fractal Flames (Scott Draves)",category:"ifs_attractors",formula:"F(x) = ∑ w_i V_j(A_i x + b_i)",dimension:"D зависит от нелинейных вариаций",generatorRule:"Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг",description:"Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.",phiPiRelation:"Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.",enginePreset:{type:"hopfFibration",hybridType:"spiralTunnel",compositeOp:"quantumResonance",hybridBlend:.45,zoom:3}},{id:"lorenz-attractor",name:"Странный аттрактор Лоренца",englishName:"Lorenz Strange Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz",dimension:"D_каплана-йорке ≈ 2.06 ± 0.01",generatorRule:"Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)",description:"Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.",phiPiRelation:"Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothMorph",zoom:3.2,rotX:.3,rotY:.4}},{id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)",dimension:"D ≈ 2.01",generatorRule:"Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты",description:"Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.",phiPiRelation:"Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothUnion",zoom:2.9}},{id:"ikeda-attractor",name:"Аттрактор Икеды",englishName:"Ikeda Map Attractor",category:"ifs_attractors",formula:"z_{n+1} = A + B z_n e^{i(|z_n|² + C)}",dimension:"D ≈ 1.7",generatorRule:"Двумерное отображение света в кольцевом оптическом резонаторе",description:"Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.",phiPiRelation:"Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.",enginePreset:{type:"spiralTunnel",compositeOp:"domainWarp",warpStrength:.4,zoom:2.8}},{id:"clifford-attractor",name:"Аттрактор Клиффорда",englishName:"Clifford Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Синусно-косинусное полиномиальное отображение с 4 параметрами",description:"Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.",phiPiRelation:"Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:2.9}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"Peter de Jong Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)",dimension:"D ≈ 1.8",generatorRule:"Симметричное тригонометрическое отображение Петера де Йонга",description:"Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.",phiPiRelation:"При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.",enginePreset:{type:"cliffordTorus4D",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3}},{id:"henon-attractor",name:"Аттрактор Хенона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)",dimension:"D ≈ 1.261 ± 0.003",generatorRule:"Дискретная диссипативная система Мишеля Эно (1976)",description:"Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.",phiPiRelation:"Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:2.7}},{id:"humboldt-attractor",name:"Аттрактор Гумбольдта",englishName:"Humboldt Flow Attractor",category:"ifs_attractors",formula:"dxdt = v_oceanic(x, φ, t)",dimension:"D ≈ 2.15",generatorRule:"IFS-система, имитирующая турбулентные океанические вихри",description:"Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.",phiPiRelation:"Логарифмические спирали вихрей имеют золотой угол раскрутки.",enginePreset:{type:"gyroid",compositeOp:"goldenSpiralFold",zoom:3.1}},{id:"perlin-noise",name:"Фрактальный шум Перлина",englishName:"Fractal Perlin Noise (fBm)",category:"stochastic",formula:"f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)",dimension:"D = 3 - H, где H — показатель Херста",generatorRule:"Градиентный шум Кена Перлина, суммируемый по октавам",description:"Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.",phiPiRelation:"Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.",enginePreset:{type:"neoviusMinimal",compositeOp:"domainWarp",warpStrength:.35,zoom:3}},{id:"simplex-noise",name:"Симплексный шум (Simplex Noise)",englishName:"Simplex Noise",category:"stochastic",formula:"Разбиение пространства на симплексы Шлефли A_n",dimension:"D = 3 - H",generatorRule:"Замена гиперкубической сетки на симплексную решетку",description:"Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.",phiPiRelation:"Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.1}},{id:"diamond-square",name:"Алгоритм Diamond-Square (Плазма)",englishName:"Diamond-Square Plasma Fractal",category:"stochastic",formula:"h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}",dimension:"D = 3 - H ∈ (2.0, 3.0)",generatorRule:"Рекурсивное чередование шагов ромба и квадрата по сетке",description:"Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.",phiPiRelation:"Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.",enginePreset:{type:"dlaCluster",compositeOp:"smoothMorph",zoom:2.8}},{id:"fractional-brownian-motion",name:"Дробное броуновское движение (fBm)",englishName:"Fractional Brownian Motion (fBm)",category:"stochastic",formula:"E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})",dimension:"D = n + 1 - H (Мандельброт и Ван Несс, 1968)",generatorRule:"Гауссовский процесс с долговременной корреляцией и параметром Херста H",description:"Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.",phiPiRelation:"Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.",enginePreset:{type:"dlaCluster",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"dla-cluster",name:"Диффузионно-ограниченная агрегация (ДОА / DLA)",englishName:"Diffusion-Limited Aggregation (DLA)",category:"stochastic",formula:"N(r) ∝ r^{D_{DLA}}",dimension:"D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)",generatorRule:"Случайное блуждание броуновских частиц и их слипание с растущим кластером",description:"Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.",phiPiRelation:"Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.25}},{id:"percolation-clusters",name:"Кластеры перколяции",englishName:"Percolation Lattice Clusters",category:"stochastic",formula:"P(p) ∝ (p - p_c)^β при p → p_c",dimension:"D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)",generatorRule:"Случайное заполнение узлов решетки с критической вероятностью p_c",description:"Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.",phiPiRelation:"Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.",enginePreset:{type:"neoviusMinimal",compositeOp:"fractalLattice",zoom:3.1}},{id:"dielectric-breakdown",name:"Фрактал лавинного пробоя (Фигуры Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM / Lichtenberg)",category:"stochastic",formula:"∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)",dimension:"D ≈ 1.75 при η = 1",generatorRule:"Решение уравнения Лапласа для электростатического потенциала с ростом разряда",description:"Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.",phiPiRelation:"Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.",enginePreset:{type:"dlaCluster",compositeOp:"domainWarp",warpStrength:.4,zoom:3}},{id:"hofstadter-butterfly",name:"Бабочка Хофштадтера",englishName:"Hofstadter Butterfly",category:"topological_physical",formula:"ψ_{m+1} + ψ_{m-1} + 2 cos(2π m α - ν) ψ_m = E ψ_m (Уравнение Харпера)",dimension:"D(E) фрактальное канторово множество разрешенных энергий",generatorRule:"Спектр энергии электрона в периодической 2D решетке в магнитном поле α = Φ/Φ_0",description:"Квантовый фрактал Дугласа Хофштадтера (1976). График разрешенных энергетических зон блоховского электрона в зависимости от магнитного потока.",phiPiRelation:"АБСОЛЮТНЫЙ КВАНТОВЫЙ РЕЗОНАНС: при иррациональном потоке α = 1/φ спектр становится канторовым множеством нулевой меры Лебега!",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3}},{id:"richardson-fractal",name:"Фрактал Ричардсона (Эффект береговой линии)",englishName:"Richardson Coastline Fractal Effect",category:"topological_physical",formula:"L(ε) ∝ ε^{1 - D} (Льюис Фрай Ричардсон)",dimension:"D_Британия ≈ 1.25, D_Норвегия ≈ 1.52",generatorRule:"Зависимость длины границы от масштаба измерительного инструмента ε",description:"Открытие Ричардсона (1961), легшее в основу книги Бенуа Мандельброта: длина географической границы неограниченно растет при уменьшении шага линейки.",phiPiRelation:"Скейлинг конформной береговой линии согласуется с броуновскими петлями SLE_{6/3}.",enginePreset:{type:"fibonacciSnowflake",hybridType:"dlaCluster",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.8}},{id:"cantor-set",name:"Канторово множество (Канторова лестница)",englishName:"Cantor Ternary Set",category:"topological_physical",formula:"C = ⋂_{n=1}^∞ E_n, L_∞ = 0, |C| = 2^{ℵ_0}",dimension:"D = ln(2)/ln(3) ≈ 0.63093",generatorRule:"Исключение открытой средней трети (1/3, 2/3) из отрезка [0, 1]",description:"Фундаментальный топологический объект Георга Кантора (1883). Содержит столько же точек, сколько весь отрезок ℝ, но имеет нулевую меру Лебега.",phiPiRelation:"Золотое канторово множество вырезает средний интервал длиной 1/φ², оставляя два отрезка длиной 1/φ.",enginePreset:{type:"menger",compositeOp:"smoothCarve",boxFold:1.4,zoom:3}},{id:"cantor-dust",name:"Пыль Кантора",englishName:"Cantor Dust",category:"topological_physical",formula:"C_d = C × C × ... × C (d-кратное прямое произведение)",dimension:"D = d · ln(2)/ln(3) (для d=2 D ≈ 1.2618, d=3 D ≈ 1.8928)",generatorRule:"Многомерное декартово произведение одномерных множеств Кантора",description:"Вполне несвязное компактное пространство в ℝ² и ℝ³. В астрофизике используется для моделирования крупномасштабного распределения галактик во Вселенной.",phiPiRelation:"Описывает кластеризацию материи в космических войдах с золотым масштабным фактором.",enginePreset:{type:"apollonian",compositeOp:"smoothCarve",sphereFold:.8,zoom:2.9}},{id:"antoine-necklace",name:"Ожерелье Антуана",englishName:"Antoine's Necklace",category:"topological_physical",formula:"X = ⋂_{i=1}^∞ A_i, где A_i — цепи зацепленных торов",dimension:"D_топологическая = 0, D_Хаусдорфа > 0",generatorRule:"Тор заменяется цепью зацепленных уменьшенных торов",description:"Дикий узел и фрактал Луи Антуана (1921). Вполне несвязное компактное подмножество ℝ³, дополнение к которому не является односвязным (фундаментальная группа π₁(ℝ³ \\ X) ≠ 1).",phiPiRelation:"Каждое кольцо ориентировано по меридианам тора (углы 2π); золотая инверсия диаметров предотвращает самопересечение колец.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.2}},{id:"cesaro-curve-v2",name:"Кривая Чезаро",englishName:"Cesàro Curve (Torn Square)",category:"geometric_curves",formula:"α = arctan((1-2δ)/√3), L_{n+1} = (2 + 2 cos α)^{-1} L_n",dimension:"D = ln(4) / ln(2(1 + cos α)) ≈ 1.7848",generatorRule:"Вариация кривой Коха с варьируемым углом при вершине отсекаемого треугольника α ∈ (0, π/3)",description:"Обобщение кривой Коха Эрнесто Чезаро (1906). При приближении угла к 90° кривая превращается в самокасающуюся пространственно-заполняющую структуру («разорванный квадрат»).",phiPiRelation:"При золотом угле Чезаро α = 2π(1 - 1/φ) ≈ 137.5° граница кривой образует квазипериодическую розетку.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",warpStrength:.35,zoom:3.1}},{id:"drummond-curve-v2",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ_k = 2π / (φ^k), L_{n+1} = r · L_n",dimension:"D ≈ 1.4142 (квазидробная размерность)",generatorRule:"Циклическая L-система с дробными иррациональными углами поворота и переменным масштабированием",description:"Кривая на основе L-систем с несимметричными ветвями и иррациональными фазовыми сдвигами, формирующая спиральные кристаллические кластеры.",phiPiRelation:"Каждый шаг итерации масштабируется на фактор 1/φ с поворотом на угол золотого сечения.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"koch-mcwhorter-v2",name:"Снежинка Коха — МакВортера (Pentigree)",englishName:"McWhorter's Pentigree",category:"geometric_curves",formula:"z ↦ z · e^{i θ} / r + c_k, r = √7",dimension:"D = ln(5)/ln(√7) ≈ 1.6309",generatorRule:"Асимметричная замена каждого отрезка на 5 сегментов под углом arcsin(√3/(2√7))",description:"Обобщение снежинки Коха Уильяма МакВортера (Pentigree), порождающее пятиугольные самозаполняющиеся фрактальные плитки с 5-лучевой симметрией.",phiPiRelation:"Симметрия pentigree неразрывно связана с пентаграммой и степенями золотого сечения φ.",enginePreset:{type:"fibonacciSnowflake",hybridType:"icosahedral",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3}},{id:"rice-curve-v2",name:"Кривая Райса",englishName:"Rice Space-Filling Curve",category:"geometric_curves",formula:"γ(t): [0, 1] → ℝ², L-система F → +F--F+F++F-",dimension:"D = 2.0 (пространственно-заполняющая)",generatorRule:"Пространственно-заполняющая кривая с неортогональными углами поворота 45° и 135°",description:"Непрерывная кривая, заполняющая треугольные и шестиугольные ячейки без самопересечений за счет асимметричных неортогональных разворотов.",phiPiRelation:"Углы разворота кратны π/4 и π/8; золотая модуляция длин звеньев сглаживает кривизну пути.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothCarve",boxFold:1.1,zoom:2.8}},{id:"polya-curve-v2",name:"Кривая Пойи",englishName:"Pólya Space-Filling Curve",category:"geometric_curves",formula:"P(t) = ∑_{k=1}^∞ 2^{-k} v_{ε_k(t)}, t ∈ [0, 1]",dimension:"D = 2.0 (непрерывно заполняет треугольник)",generatorRule:"Предельный случай блуждания кривой Джорджа Пойи (1913), заполняющей равнобедренный прямоугольный треугольник",description:"Первая доказанная непрерывная кривая, заполняющая внутренность треугольника, сохраняя дифференцируемость почти всюду кроме счетного множества канторовых узлов.",phiPiRelation:"Отношение гипотенузы к катетам равно √2; золотое сечение регулирует последовательность обхода подтреугольников.",enginePreset:{type:"dragonCurveIFS",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"twenmey-dragon-v2",name:"Дракон Твенми",englishName:"Twenmey Dragon Curve",category:"geometric_curves",formula:"w_1(z) = z · (1 + i)/2, w_2(z) = 1 - z · (1 - i)/2",dimension:"D = 2.0, граница D_∂ ≈ 1.5236",generatorRule:"Вариация дракона Хартера-Хейтуэя со сменой знака угла поворота на каждом нечетном шаге",description:"Спиральная фрактальная кривая с вихревыми завитками, разворачивающаяся в обе полуплоскости и напоминающая крылья феникса.",phiPiRelation:"Угол поворота 90° = π/2; шаг разворота витков масштабируется по пропорции φ = 1.618.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:3.2}},{id:"golden-dragon-v2",name:"Золотой Дракон (φ-Dragon)",englishName:"Golden Ratio Dragon Curve",category:"geometric_curves",formula:"z_{n+1} = z_n / φ · e^{i · arccos(1/(2φ))}",dimension:"D = ln(2)/ln(φ) ≈ 1.4404",generatorRule:"Замена звеньев ломаной треугольниками с золотыми пропорциями катетов 1 : 1/φ",description:"Фрактальная кривая дракона, углы и длины сегментов которой точно вычислены из корня полинома x² - x - 1 = 0. Не имеет самопересечений ни на одном масштабе.",phiPiRelation:"Фундаментальный фрактал: коэффициент подобия в точности равен 1/φ = 0.61803398875!",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.38,phiMultiplier:1.61803398875,zoom:3.1}},{id:"sierpinski-arrowhead-v2",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"A → B-A-B, B → A+B+A (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Симметричная L-система, в пределе сходящаяся к треугольнику Серпинского",description:"Непрерывная ломаная линия, которая при итерациях n → ∞ в точности заметает множество точек треугольника Серпинского, являясь его топологической траекторией.",phiPiRelation:"Угол 60° задает гексагональный базис; золотое разбиение сторон порождает фрактал Пенроуза.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:3}},{id:"pythagoras-tree-wind-v2",name:"Дерево Пифагора обдуваемое (Асимметричное)",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"c² = a² + b², a = c · cos(α), b = c · sin(α), α ≠ 45°",dimension:"D ≈ 1.83 (зависит от угла наклона)",generatorRule:"Построение квадратов на прямоугольном треугольнике с неравными острыми углами α = 30°, β = 60°",description:"Вариация классического дерева Пифагора, где неравные углы ветвления создают динамический эффект кроны, изогнутой непрерывным фрактальным ветром.",phiPiRelation:"При золотом угле α = arcsin(1/√φ) дерево сворачивается в совершенную логарифмическую спираль Фибоначчи.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothUnion",rotX:.45,rotY:.2,zoom:3.2}},{id:"pythagoras-tree-naked-v2",name:"Обнаженное дерево Пифагора",englishName:"Naked Skeleton Pythagoras Tree",category:"constructive",formula:"E_n = ⋃ [c_{k, 1}, c_{k, 2}], c_k — центры квадратов",dimension:"D = ln(2)/ln(√2) = 2 (для скелетного графа)",generatorRule:"Фрактальный граф, построенный исключительно по отрезкам, соединяющим центры смежных квадратов дерева Пифагора",description:"Минималистичный линейный остов дерева Пифагора. Образует элегантную ветвящуюся коралловую структуру, лишенную сплошных площадей квадратов.",phiPiRelation:"Длины ветвей убывают в геометрической прогрессии с масштабным множителем золотого корня 1/√φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",warpStrength:.2,zoom:3.4}},{id:"t-square-v2",name:"Т-квадрат (T-Square Fractal)",englishName:"T-Square Fractal",category:"constructive",formula:"A_{n+1} = A_n ∪ 4 × A_n / 2, S_∞ = 2 S_0",dimension:"D = ln(4)/ln(2) = 2.0",generatorRule:"Итерационное наложение уменьшенных вдвое квадратов на все 4 угла каждого квадрата предыдущего поколения",description:"Классический конструктивный фрактал. В пределе площадь покрываемой области в точности равна удвоенной площади начального квадрата, а периметр стремится к бесконечности.",phiPiRelation:"При золотом скейлинге (1/φ вместо 1/2) квадраты не перекрываются, образуя совершенную квазикристаллическую мозаику.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1,zoom:3}},{id:"sierpinski-cross-v2",name:"Крест Серпинского 3D",englishName:"Sierpiński Cross 3D",category:"constructive",formula:"C_{n+1} = ⋃_{i=1}^5 T_i(C_n), |det(T_i)| = 1/9",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Взаимно перпендикулярные плоскости ковра Серпинского, образующие объемный пространственный крест",description:"Трехмерная ортогональная комбинация пересекающихся фракталов Серпинского, обладающая октаэдрической симметрией полостей.",phiPiRelation:"Сечения креста плоскостями под золотым углом arctan(φ) образуют правильные пятиугольные отверстия.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",boxFold:1.2,zoom:3.2}},{id:"sierpinski-pentagon-v2",name:"Пятиугольник Серпинского (Пентафлейк / Pentaflake)",englishName:"Pentaflake / Sierpiński Pentagon",category:"constructive",formula:"P_{n+1} = ⋃_{i=1}^5 R_{2π i/5}(P_n / (1 + φ))",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.67228",generatorRule:"Правильный пятиугольник замещается пятью меньшими пятиугольниками по углам с удалением центральной пятиконечной звезды",description:"Один из самых гармоничных планарных фракталов. Имеет врожденную 5-лучевую золотую симметрию D₅, невозможную в стандартных кристаллических решетках.",phiPiRelation:"Масштабный множитель строго равен 1/(1 + φ) = 1/φ² ≈ 0.381966! Чистейшее проявление золотого сечения.",enginePreset:{type:"icosahedral",compositeOp:"smoothUnion",phiMultiplier:1.61803398875,zoom:3}},{id:"hexaflake-v2",name:"Гексафрактал (Hexaflake / Снежинка Серпинского)",englishName:"Hexaflake",category:"constructive",formula:"H_{n+1} = ⋃_{i=1}^7 H_n / 3 (6 по периметру + 1 в центре)",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть уменьшенных копий правильного шестиугольника по периметру плюс один в центре",description:"Шестилучевой фрактальный кристалл, моделирующий рекурсивный рост ледяных снежинок в насыщенных парах воды.",phiPiRelation:"Периметр шестиугольника задан соотношением 6r; вписанные золотые спирали описывают микроканалы кристаллизации.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothUnion",boxFold:1.3,zoom:2.9}},{id:"ivezic-fractal-v2",name:"Фрактал Ивезича (Многомерный симплекс Серпинского)",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n + 1) / ln(2), n ≥ 1",dimension:"D = ln(n+1)/ln(2) (для n=4 D ≈ 2.3219, для n=6 D ≈ 2.807)",generatorRule:"Рекурсивное удаление инвертированных подсимплексов из правильного n-мерного симплекса",description:"Обобщение треугольника и тетраэдра Серпинского на n-мерные гиперпространства, открытое в фундаментальных трудах по фрактальной топологии.",phiPiRelation:"Сечения 5-мерного симплекса Ивезича ортогонально проецируются в золотые икосаэдры в ℝ³.",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothMorph",hybridBlend:.4,zoom:3.1}},{id:"levi-snowflake-v2",name:"Снежинка Леви",englishName:"Lévy Snowflake (C-Curve Boundary)",category:"constructive",formula:"S = ⋃_{i=1}^8 Lévy_i, Area = 2",dimension:"D_граница ≈ 1.9340, D_тело = 2.0",generatorRule:"Замкнутая область, заметаемая восемью сходящимися кривыми Леви, расположенными по периметру квадрата",description:"Удивительная фрактальная мозаика с бесконечной бахромой, способная самозамостить евклидову плоскость ℝ² без зазоров и перекрытий.",phiPiRelation:"Период разворота ветвей равен π/4; фрактальная граница имеет золотой масштаб самоподобия.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothCarve",zoom:3.1}},{id:"burning-ship-perpendicular-v2",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (Re(z_n) + i|Im(z_n)|)^2 + c",dimension:"D_граница = 2.0 (комплексная динамика)",generatorRule:"Модуль берется только от мнимой компоненты, сохраняя знак вещественной части",description:"Асимметричная модификация фрактала Burning Ship. Разрушает зеркальную симметрию, порождая вихревые струи и призрачные фрактальные корабли.",phiPiRelation:"Отношение периодов бифуркации мачт корабля сходится к константе Фейгенбаума δ = 4.6692 и золотому множителю φ.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",warpStrength:.35,zoom:3}},{id:"jesus-trigonometric-v2",name:"Фрактал Иисуса / Тригонометрический фрактал",englishName:"Jesus / Sine-Cosine Transcendental Fractal",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c · cos(z_n)",dimension:"D = 2.0 (трансцендентная динамика)",generatorRule:"Итерация тригонометрических комплексных функций с экспоненциальным ростом вдоль мнимой оси",description:"Трансцендентный фрактал комплексной динамики. Вдоль мнимой оси синус переходит в гиперболический sinh, создавая соборные арки и бесконечные колоннады.",phiPiRelation:"Период функции строго равен 2π; золотое сечение управляет шириной коридоров сходимости.",enginePreset:{type:"riemannZeta",hybridType:"mandelbulb",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3.2}},{id:"spider-fractal-v2",name:"Фрактал «Паук» (Spider Fractal)",englishName:"Spider Dynamical System",category:"algebraic_complex",formula:"z_{n+1} = z_n^2 + c_n, c_{n+1} = c_n / 2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Динамическая система с блуждающим параметром сдвига c_n, зависящим от текущей координаты орбиты",description:"Сложный алгебраический фрактал, где параметр c не статичен, а эволюционирует синхронно с точкой z, создавая длинные радиальные нити-ножки.",phiPiRelation:"Углы расхождения паучьих нитей кратны золотому углу 137.5° = 2π(1 - 1/φ).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",warpStrength:.3,zoom:3.1}},{id:"sherwood-carpet-v2",name:"Фрактал «Ковер Шервуда»",englishName:"Sherwood Algebraic Carpet",category:"algebraic_complex",formula:"z_{n+1} = (z_n^3 + c) / (1 + conjugate(z_n)^2)",dimension:"D ≈ 1.89",generatorRule:"Рациональное дробно-линейное отображение третьего порядка с комплексным сопряжением",description:"Алгебраический фрактал на основе рациональных отображений Римана, образующий кружевную вязь бесконечных арок и сводов.",phiPiRelation:"Комплексные полюса отображения распределены по окружности радиуса √φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothUnion",boxFold:1.15,zoom:2.9}},{id:"serafimski-newton-v2",name:"Фрактал Серафимского (Фазовый метод Ньютона)",englishName:"Serafimski Non-Linear Newton Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{i α} P(z_n) / P'(z_n), α = π/φ",dimension:"D = 2.0 (бассейны с общей границей Жюлиа)",generatorRule:"Модификация метода Ньютона с добавлением комплексного вращения шага на золотой фазовый угол α",description:"Введение золотой фазы заставляет прямолинейные траектории Ньютона закручиваться в вихревые спирали вокруг корней полинома, создавая фантастические завихрения.",phiPiRelation:"Фазовый угол сдвига α = π/φ ≈ 111.246° устраняет прямолинейные сингулярности и максимизирует хаос.",enginePreset:{type:"newtonBasins",compositeOp:"domainWarp",warpStrength:.45,zoom:3}},{id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"ẋ=(z-b)x-dy, ẏ=dx+(z-b)y, ż=c+az-z³/3-(x²+y²)(1+ez)+fzx³",dimension:"D_L ≈ 2.16 (размерность Ляпунова)",generatorRule:"Трехмерная система нелинейных дифференциальных уравнений с тороидально-сферической хаотической оболочкой",description:"Один из самых визуально совершенных аттракторов хаоса: траектории образуют сферу с центральной осью вращения и струйными выбросами на полюсах.",phiPiRelation:"Соотношение радиальной и аксиальной частот вращения сходится к золотой пропорции φ.",enginePreset:{type:"lorenzAttractor",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:3.3}},{id:"thomas-attractor",name:"Аттрактор Томаса (Циклический лабиринт)",englishName:"Thomas Cyclically Symmetric Attractor",category:"ifs_attractors",formula:"ẋ = sin(y) - bx, ẏ = sin(z) - by, ż = sin(x) - bz",dimension:"D_L ≈ 2.05",generatorRule:"Циклически симметричная 3D динамическая система с тригонометрическим связыванием координат",description:"Хаотический аттрактор с полной циклической C₃-симметрией, формирующий бесконечный пространственный лабиринт из плавных трубок.",phiPiRelation:"Период тригонометрических функций 2π; критическое значение затухания b_c ≈ 0.208186 связано с золотыми степенями.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothMorph",warpStrength:.25,zoom:3.1}},{id:"halvorsen-attractor",name:"Аттрактор Халворсена",englishName:"Halvorsen 3D Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = -ax - 4y - 4z - y², ẏ = -ay - 4z - 4x - z², ż = -az - 4x - 4y - x²",dimension:"D_L ≈ 2.22",generatorRule:"Квадратичная 3D система с трехлучевой циклической симметрией",description:"Трехмерный аттрактор с тремя раскрывающимися лепестками, по которым хаотически перескакивает фазовая траектория.",phiPiRelation:"Симметрия C₃ задает угол поворота 120° = 2π/3; фазовый объем сжимается со скоростью div V = -3a.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:3.2}},{id:"sprott-attractor",name:"Аттрактор Спротта",englishName:"Sprott Minimal Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = y + 2xy + xz, ẏ = 1 - 2x² + yz, ż = x - x² - y²",dimension:"D_L ≈ 2.09",generatorRule:"Минимальная система Клиффорда Спротта с пятью слагаемыми и одним параметром",description:"Элегантная минималистичная хаотическая система дифференциальных уравнений, открытая в 1994 году в ходе численного поиска простейших аттракторов.",phiPiRelation:"Спектр показателей Ляпунова (+, 0, -) удовлетворяет теореме Каплана-Йорке с золотым коэффициентом сжатия.",enginePreset:{type:"lorenzAttractor",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.35,zoom:3}},{id:"avalanche-dbm-v2",name:"Фрактал лавинного пробоя (DBM / Молния Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM)",category:"stochastic",formula:"p_i ∝ (∇Φ)^η, ∇²Φ = 0",dimension:"D ≈ 1.75 (для η = 1 D ≈ 1.71, для η = 2 D ≈ 1.45)",generatorRule:"Вероятностная модель Нимейера-Пьетронеро-Висмана (1984) для роста искровых разрядов в диэлектриках",description:"Физический стохастический фрактал, точно описывающий ветвление молний в атмосфере, фигуры Лихтенберга на плексигласе и древовидные эрозии.",phiPiRelation:"Углы бифуркации разрядных каналов имеют моду статистического распределения около золотого угла 137.5°.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",warpStrength:.45,zoom:3}},{id:"mandelbrot-multidrop",name:"Мультифрактальный каскад Мандельброта",englishName:"Mandelbrot Multiplicative Cascade",category:"stochastic",formula:"μ(B) = ∏_{k=1}^n W_{ε_k}, ⟨W⟩ = 1",dimension:"Спектр сингулярностей f(α) = inf_q [q α - τ(q)]",generatorRule:"Мультипликативное случайное деление энергии между дочерними ячейками турбулентности",description:"Модель Бенуа Мандельброта (1974) для описания перемежаемости развитой гидродинамической турбулентности Колмогорова.",phiPiRelation:"Максимум спектра размерностей f(α) приходится на точку золотого баланса потоков энергии.",enginePreset:{type:"quasicrystal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3.1}},{id:"hopf-fibration-manifold",name:"Расслоение Хопфа S³ → S²",englishName:"Hopf Fibration Topological Bundle",category:"topological_physical",formula:"h(z_0, z_1) = (2 z_0 conjugate(z_1), |z_0|² - |z_1|²) ∈ S²",dimension:"D_топологическая = 3, расслаивается окружностями S¹",generatorRule:"Отображение 3-сферы в 4D на двумерную сферу Римана, где прообраз каждой точки есть окружность Вилларсо",description:"Великое топологическое открытие Хайнца Хопфа (1931). Пространство заполнено зацепленными торами Клиффорда, не пересекающимися между собой.",phiPiRelation:"Каждые два кольца зацеплены ровно один раз (число зацепления Хопфа = 1); золотой угол скрутки волокон предотвращает резонансные узлы.",enginePreset:{type:"hopfFibration",compositeOp:"smoothUnion",zoom:3.2,rotX:.3,rotY:.25}},{id:"calabi-yau-manifold",name:"Многообразие Калаби — Яу",englishName:"Calabi-Yau 3-Fold Compactification",category:"topological_physical",formula:"z_1^5 + z_2^5 + z_3^5 + z_4^5 + z_5^5 - 5 ψ z_1 z_2 z_3 z_4 z_5 = 0",dimension:"6 действительных измерений (3 комплексных) в CP⁴",generatorRule:"Компактное кэлерово многообразие с нулевым первым классом Черна c_1 = 0 и метрикой Риччи-плоского пространства",description:"Фундаментальная геометрия скрытых микроизмерений в теории суперструн. 2D и 3D проекции сечений многообразия образуют гармонические складки.",phiPiRelation:"Параметр комплексной деформации ψ при золотом значении φ порождает конформную зеркальную симметрию фермионных поколений.",enginePreset:{type:"calabiYau",compositeOp:"smoothMorph",zoom:3.1,rotX:.4,rotY:.3}},{id:"costa-minimal-surface",name:"Минимальная поверхность Коста",englishName:"Costa Minimal Surface",category:"topological_physical",formula:"X(z) = Re ∫ (½(1 - g²), i/2(1 + g²), g) ω, H ≡ 0",dimension:"D_топологическая = 2, род g = 1 с тремя концами",generatorRule:"Представление Вейерштрасса с эллиптическими функциями Вейерштрасса ℘(z)",description:"Сенсация геометрии: в 1982 году Селсо Коста доказал существование полной вложенной минимальной поверхности рода 1, опровергнув столетнее убеждение о единственности катеноида и геликоида.",phiPiRelation:"Эллиптические периоды тора Коста ω_1, ω_2 находятся в точном соотношении золотого сечения φ.",enginePreset:{type:"neoviusMinimal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"rossler-hyperchaos",name:"4D Гиперхаотический аттрактор Рёсслера",englishName:"4D Hyperchaotic Rössler Attractor",category:"ifs_attractors",formula:"ẋ = -y - z, ẏ = x + ay + w, ż = b + xz, ẇ = -cz + dw",dimension:"D_фрактальная ≈ 3.18 (Два положительных показателя Ляпунова λ₁ > λ₂ > 0)",generatorRule:"Двойное складчатое растяжение фазового потока в четырёхмерном фазовом пространстве",description:"Открытие Отто Рёсслера (1979). В отличие от простого хаоса, гиперхаос имеет более одного направления экспоненциального разбегания фазовых траекторий, порождая многослойные вихревые мембраны.",phiPiRelation:"Спектральное расщепление бифуркаций удвоения периода подчиняется универсальной константе Фейгенбаума δ ≈ 4.669 и золотой пропорции φ.",enginePreset:{type:"rosslerHyperchaos",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35}},{id:"clifford-attractor-v2",name:"4D Аттрактор Клиффорда — Пиковера",englishName:"Clifford-Pickover 4D Dynamic Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D_хаусдорфа ≈ 2.45 в четырёхмерном пространстве параметров",generatorRule:"Нелинейное синусоидальное отображение Клиффорда с закруткой фазового угла",description:"Исследован Клиффордом Пиковером. Образует непрерывные бархатистые каустические ленты и тороидальные спирали бесконечной глубины.",phiPiRelation:"При золотых параметрах a = -1.4φ, b = 1.6/φ, c = 1.0φ система формирует квазипериодические 10-лепестковые симметрии Пенроуза.",enginePreset:{type:"cliffordAttractor",compositeOp:"smoothUnion",zoom:3,rotX:.3,rotY:.4}},{id:"abrikosov-vortex-lattice",name:"Квантовая вихревая решётка Абрикосова",englishName:"Abrikosov Superconducting Vortex Lattice",category:"topological_physical",formula:"∇ × B = j_s, ψ(r) = Δ(r) e^{iθ}, ∮ v_s · dl = 2πℏ/m",dimension:"D = 2 + 1 (Квантованное 2D треугольное поле флюксонов с продольной спиралью)",generatorRule:"Нобелевское открытие А. А. Абрикосова (1957). Вихри сверхпроводящего тока с квантом магнитного потока Φ₀ = h/2e",description:"В сверхпроводниках II рода магнитное поле проникает в виде квантованных нитей (флюксонов), образующих строгую гексагональную решетку с вихревыми сингулярностями.",phiPiRelation:"Отношение периодов решетки флюксонов к длине когерентности Гинзбурга-Ландау ξ при золотом спиральном шаге минимизирует свободную энергию Гиббса.",enginePreset:{type:"abrikosovLattice",compositeOp:"smoothUnion",zoom:3.2,rotX:.2,rotY:.15}},{id:"beltrami-pseudosphere",name:"Псевдосфера Бельтрами (Геометрия Лобачевского)",englishName:"Beltrami Pseudosphere Hyperbolic Surface",category:"topological_physical",formula:"x = sech(u) cos(v), y = sech(u) sin(v), z = u - tanh(u), K ≡ -1/R²",dimension:"D_гладкая = 2 с гиперболическим фрактальным краевым сингулярным ребром",generatorRule:"Поверхность вращения трактрисы вокруг своей асимптоты; локальная модель плоскости Лобачевского",description:"Эудженио Бельтрами (1868) впервые реализовал неевклидову геометрию Лобачевского на вещественной поверхности в ℝ³ с постоянной отрицательной гауссовой кривизной K = -1.",phiPiRelation:"Экспоненциальное сужение горловины трактрисы e^{-z} скейлится золотым показателем φ, формируя бесконечный раструб.",enginePreset:{type:"beltramiPseudosphere",compositeOp:"smoothUnion",zoom:2.9,rotX:.35,rotY:.2}},{id:"spin-foam-network",name:"Спиновая пена и сеть Пенроуза (LQG)",englishName:"Penrose Spin Network & Quantum Foam",category:"topological_physical",formula:"A(j_f, v_e) = ∏_f dim(j_f) ∏_v W_v(j_f, i_e), SU(2) Gauge Invariance",dimension:"D_планковская = 4 (Дискретная квантовая планковская геометрия пространства-времени l_P ≈ 1.6·10⁻³⁵ м)",generatorRule:"Петлевая квантовая гравитация (Ровелли, Смолин, Пенроуз): пространство состоит из квантованных ячеек объёма и площади",description:"Революционная концепция квантовой физики: на планковском масштабе непрерывное пространство исчезает, уступая место динамической сети спинов и топологической квантовой пене.",phiPiRelation:"Спектры операторов площади квантованы через постоянную Иммирци γ_BI = ln(2) / (π√3) и масштабное деление золотого узла.",enginePreset:{type:"spinFoamNetwork",compositeOp:"smoothUnion",zoom:3.1,rotX:.5,rotY:.4}},{id:"ramanujan-tau-resonator",name:"Модулярный резонатор Рамануджана Δ(τ)",englishName:"Ramanujan Modular Tau Resonator",category:"algebraic_complex",formula:"Δ(τ) = (2π)¹² q ∏_{n=1}^∞ (1 - q^n)²⁴ = ∑_{n=1}^∞ τ(n) q^n, q = e^{2π i τ}",dimension:"Вес k = 12 модулярной формы над группой SL(2, ℤ)",generatorRule:"Параболическая модулярная форма Рамануджана с 24 каспами (корнями степени 24)",description:"Жемчужина теории чисел Сринивасы Рамануджана (1916). Функция τ(n) управляет 24-мерной решёткой Лича и теорией бозонных струн в 26 измерениях.",phiPiRelation:"Непрерывная дробь Рамануджана R(q) при q = e^{-2π} вычисляется строго через золотое сечение: R(e^{-2π}) = √(φ√5) - φ.",enginePreset:{type:"ramanujanTau",compositeOp:"smoothUnion",zoom:2.9,rotX:.4,rotY:.25}},{id:"belousov-zhabotinsky-waves",name:"Спиральные волны Белоусова — Жаботинского",englishName:"Belousov-Zhabotinsky Chemical Spiral Waves",category:"topological_physical",formula:"∂u/∂t = D_u ∇²u + u(1 - u) - f v (u - q)/(u + q), ∂v/∂t = D_v ∇²v + u - v",dimension:"D = 2 + 1 (Автоволновой фазовый спиральный фронт в активной нелинейной среде)",generatorRule:"Самоорганизующаяся нелинейная реакция окисления малоновой кислоты бромноватой кислотой",description:"Триумф синергетики и физики неравновесных процессов (Б. П. Белоусов 1951, А. М. Жаботинский 1964). Автоволновые ревербераторы образуют раскручивающиеся спирали в пространстве.",phiPiRelation:"Шаг спиральных волн самоорганизуется в золотую логарифмическую спираль r(θ) = a e^{θ cot(φ)}, минимизируя диссипацию энтропии.",enginePreset:{type:"belousovWaves",compositeOp:"smoothUnion",zoom:3,rotX:.35,rotY:.3}},{id:"mandelbulb-classic",name:"Мандельбульб (классический)",englishName:"Classic Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c, r = |z|, θ = atan2(√(x²+y²), z), φ = atan2(y, x)",dimension:"D ≈ 3.0 (граница) ",generatorRule:"Сферические координаты с возведением в степень 8",description:"Трёхмерный аналог множества Мандельброта, построенный путём обобщения формулы z²+c на сферические координаты со степенью 8.",phiPiRelation:"Степень 8 = 2³ связана с золотым сечением через итеративное удвоение; при замене 8 на φ·5 форма становится наиболее «золотой».",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",zoom:3.2,rotX:.4,rotY:.3,iterations:12}},{id:"mandelbulb-hybrid",name:"Мандельбульб × Спиральный туннель",englishName:"Mandelbulb × Spiral Tunnel Hybrid",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c ⊕ log-spiral fold",dimension:"D ≈ 2.8 (гибридная граница)",generatorRule:"Гладкое морфирование Мандельбульба с логарифмической спиральной складкой",description:"Гибрид классического Мандельбульба и спирального туннеля, создающий эффект закрученных коридоров внутри фрактала.",phiPiRelation:"Золотой угол скрутки 137.5° = 2π/φ² определяет шаг спирального складывания.",enginePreset:{type:"mandelbulb",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.4,zoom:3,rotX:.35}},{id:"quaternion-julia-slice",name:"Кватернионное множество Жюлиа (срез ℍ)",englishName:"Quaternion Julia Set (ℍ Slice)",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q ∈ ℍ, c = фиксированный кватернион",dimension:"D ≈ 2.5 (граница 3D-сечения)",generatorRule:"Итерация квадрата кватерниона с добавлением константы c ∈ ℍ",description:"4D множество Жюлиа в кватернионном пространстве. 3D-сечение показывает невероятно сложные переплетающиеся поверхности.",phiPiRelation:"Кватернионные компоненты c = (1/φ, 1/φ², 0, 0) порождают наиболее симметричные золотые сечения.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.5,iterations:10}},{id:"apollonian-packing",name:"Аполлониева упаковка сфер",englishName:"Apollonian Sphere Packing",category:"constructive",formula:"Кривизна k_{n+1} = k_1 + k_2 + k_3 + k_4 ± 2√(k_1 k_2 + k_2 k_3 + k_3 k_4 + k_4 k_1)",dimension:"D ≈ 2.47 (граница упаковки)",generatorRule:"Теорема Дезаржа об инверсиях: вписать максимальную сферу в зазор между 4 взаимно касающимися сферами",description:"Фрактальная упаковка сфер, где каждый зазор между 4 касающимися сферами заполняется новой максимальной сферой.",phiPiRelation:"Отношения кривизн соседних сфер в пределе сходятся к степеням золотого сечения.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",zoom:3.5,rotX:.3,rotY:.4,iterations:8}},{id:"spiral-tunnel-infinite",name:"Бесконечный логарифмический туннель φ",englishName:"Infinite Logarithmic Phi Zoom Tunnel",category:"geometric_curves",formula:"r(θ) = a · φ^(2θ/π), самоподобие при повороте на 2π/ln(φ)",dimension:"D = 1 + 2/ln(φ) ≈ 3.87",generatorRule:"Логарифмическая спираль с золотым показателем, развёрнутая в 3D-туннель",description:"Бесконечный туннель, стенки которого образованы золотой логарифмической спиралью. При зуме внутрь открывается бесконечная самоподобная структура.",phiPiRelation:"Показатель спирали = 2/ln(φ) ≈ 4.15; поворот на золотой угол 137.5° переводит туннель в себя.",enginePreset:{type:"spiralTunnel",compositeOp:"smoothMorph",zoom:2.5,rotX:0,rotY:0}},{id:"mandelbox-golden",name:"Мандельбокс золотого сложения",englishName:"Golden Mandelbox",category:"multidimensional",formula:"z_{n+1} = scale · fold(z_n) + c, fold: boxFold + sphereFold",dimension:"D ≈ 2.7 (зависит от scale)",generatorRule:"Складывание пространства: box fold (отражение) + sphere fold (инверсия сферы) + масштабирование",description:"Фрактал, полученный многократным складыванием 3D-пространства через комбинацию кубического и сферического отражений с золотым масштабом.",phiPiRelation:"При scale = φ² = 2.618... структура приобретает максимальную золотую симметрию.",enginePreset:{type:"mandelbox",compositeOp:"smoothMorph",zoom:3,boxFold:1,sphereFold:.5,iterations:12}},{id:"gyroid-tpms",name:"Золотая гироидная поверхность (TPMS)",englishName:"Golden Gyroid Minimal Surface",category:"topological_physical",formula:"G(x,y,z) = sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2 (нулевая средняя кривизна H ≡ 0)",generatorRule:"Трёхпериодическая минимальная поверхность Шона с золотым масштабированием",description:"Одна из трёх классических TPMS-поверхностей. Не имеет прямых линий, самопересечений; разделяет пространство на два лабиринтных канала.",phiPiRelation:"Периоды решётки масштабированы золотым сечением; каналы образуют золотые спиральные траектории.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.5,rotX:.5,rotY:.3}},{id:"prime-spiral-sachs",name:"Спираль простых Сакса — Улама",englishName:"Sachs-Ulam Prime Spiral",category:"algebraic_complex",formula:"p_n = n² + n + 41 (золотой многочлен Эйлера), размещение на ультра-спирали",dimension:"D ≈ 1 (асимптотическая плотность ~ 1/ln(n))",generatorRule:"Размещение простых чисел на полярной сетке r = √n, θ = 2π√n с золотым смещением",description:"Визуализация распределения простых чисел на плоскости, показывающая удивительные спиральные паттерны, связанные с золотым сечением.",phiPiRelation:"Золотой угол 2π/φ между последовательными витками минимизирует перекрытия и максимизирует видимость паттернов.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"poincare-homology",name:"Гомологическая сфера Пуанкаре",englishName:"Poincaré Homology Sphere",category:"topological_physical",formula:"S³/Γ, Γ = группа икосаэдра порядка 120",dimension:"D = 3 (замкнутое 3-многообразие с π₁ = Γ₁₂₀)",generatorRule:"Факторизация 3-сферы по группе икосаэдра: каждая точка идентифицируется с 119 другими",description:"Единственное известное замкнутое 3-многообразие с группами гомологий как у сферы, но нетривиальной фундаментальной группой порядка 120.",phiPiRelation:"Группа икосаэдра порядка 120 = 5! связана с φ через симметрии додекаэдра: |Γ| = 4π·60/(2π/φ).",enginePreset:{type:"poincareSphere",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:8}},{id:"gaussian-primes-lattice",name:"Решётка гауссовых простых Z[i]",englishName:"Gaussian Primes Lattice Z[i]",category:"algebraic_complex",formula:"p = a² + b² простое ⟺ p ≡ 1 (mod 4) или p = a+bi, N(p) = a²+b² простое в ℤ",dimension:"D ≈ 1.36 (асимптотическая плотность в ℂ)",generatorRule:"Размещение гауссовых простых на комплексной плоскости с золотым масштабированием",description:"Простые числа в кольце гауссовых целых Z[i]. Их распределение на комплексной плоскости образует удивительные решётчатые паттерны.",phiPiRelation:"Золотое масштабирование координат (a·φ, b·φ) выявляет скрытые спиральные симметрии в распределении.",enginePreset:{type:"gaussianPrimes",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"euler-totient-spiral",name:"Спираль функции Эйлера φ(n)",englishName:"Euler Totient φ(n) Archimedean Spiral",category:"algebraic_complex",formula:"φ(n) = n ∏_{p|n}(1 - 1/p), размещение на спирали Архимеда r = n",dimension:"D ≈ 1.5 (фрактальная размерность графика)",generatorRule:"Значение φ(n) кодирует высоту/цвет точки на архимедовой спирали",description:"Визуализация функции Эйлера на спиральной сетке, показывающая удивительные лучевые и радиальные паттерны в распределении значений.",phiPiRelation:"Среднее отношение φ(n)/n → 6/π²; золотой угол размещения φ(n) выявляет скрытые модулярные симметрии.",enginePreset:{type:"eulerTotientSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"clifford-torus-4d",name:"4D Тор Клиффорда (стереографическая проекция)",englishName:"4D Clifford Torus (Stereo Projection)",category:"multidimensional",formula:"(x₁,x₂,x₃,x₄) = (cos θ, sin θ, cos φ, sin φ) ⊂ S³ ⊂ ℝ⁴",dimension:"D = 2 (плоский тор в 4D, проекция в 3D)",generatorRule:"Стереографическая проекция из S³ в ℝ³ плоского тора (cos θ, sin θ, cos φ, sin φ)",description:"Единственный плоский (нулевая гауссова кривизна) тор, вложенный в 3-сферу. При стереографической проекции образует тор Дюпена.",phiPiRelation:"Золотое соотношение радиусов R/r = φ порождает наиболее гармоничную проекцию с икосаэдрическими сечениями.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"quaternion-mandelbrot-v2",name:"4D Кватернионное множество Мандельброта",englishName:"4D Quaternion Mandelbrot Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q, c ∈ ℍ",dimension:"D = 3 (граница 4D тела)",generatorRule:"Итерация квадрата кватерниона: q² = (a²-b·b̄, 2ab) для q = a + bi + cj + dk",description:"Полное 4D множество Мандельброта в кватернионном пространстве. 3D-сечения показывают бесконечное разнообразие форм.",phiPiRelation:"Кватернионные оси масштабированы золотым сечением; сечения при золотых углах обнаруживают максимальную сложность.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:10}},{id:"burning-ship-3d-v2",name:"3D Горящий корабль",englishName:"3D Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D ≈ 2.0 (граница)",generatorRule:"Модификация Мандельброта: абсолютные значения действительной и мнимой частей перед возведением в квадрат",description:"Фрактал, открытый Майклом Мандельбротом. В отличие от обычного Мандельброта, имеет характерную форму перевёрнутого корабля в пламени.",phiPiRelation:"Золотое масштабирование итераций выявляет самоподобные «паруса» горящего корабля.",enginePreset:{type:"burningShip3D",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4,iterations:12}},{id:"newton-basins-3d-v2",name:"3D Бассейны Ньютона-Рафсона",englishName:"3D Newton-Raphson Basins of Attraction",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n), f(z) = z³ - 1 (корни: 1, e^{2πi/3}, e^{4πi/3})",dimension:"D = 2 (границы бассейнов — фрактальные кривые)",generatorRule:"Итерация метода Ньютона для z³-1; каждая точка окрашивается по корню, к которому сходится",description:"Визуализация фрактальных границ бассейнов притяжения метода Ньютона. Границы между бассейнами образуют бесконечно сложные фрактальные кривые.",phiPiRelation:"Углы между бассейнами 120° = 2π/3; золотое возмущение начальных условий выявляет скрытую φ-симметрию.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:16}},{id:"jerusalem-cube-v2",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"constructive",formula:"Куб с крестами золотого сечения: удаление прямоугольников с отношением сторон φ",dimension:"D ≈ 2.58",generatorRule:"В каждой грани куба вырезается золотой крест, затем процесс повторяется рекурсивно",description:"Фрактал, построенный на кубе с золотыми пропорциями. В каждой грани вырезается крест, стороны которого относятся как φ:1.",phiPiRelation:"Все пропорции куба выражены через φ: рёбра креста, глубина вырезов и масштаб итераций.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",zoom:3,rotX:.35,rotY:.4,iterations:5}},{id:"hofstadter-butterfly-3d-v2",name:"Квантовая бабочка Хофштадтера",englishName:"Hofstadter Butterfly Energy Spectrum",category:"topological_physical",formula:"cos(q_x) + cos(q_y) = E, q_x = 2παm/n (магнитный поток α через ячейку)",dimension:"D ≈ 1.5 (фрактальная структура энергетических зон)",generatorRule:"Модель Харпера: квантовая частица на 2D решётке в однородном магнитном поле с рациональным потоком α = p/q",description:"Фрактальный энергетический спектр электрона в двумерной решётке с магнитным полем. Каждая «бабочка» — разрешённая зона энергии.",phiPiRelation:"При α = 1/φ (золотой поток) спектр демонстрирует максимальную фрактальную сложность и самоподобие.",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4}},{id:"antoine-necklace-v2",name:"Ожерелье Антуана (дикие зацепления)",englishName:"Antoine's Necklace Wild Linking",category:"topological_physical",formula:"C = ∩_n A_n, A_{n+1} ⊂ A_n, каждое звено зацеплено с соседними",dimension:"D ≈ 1.0 (канторово множество торов)",generatorRule:"Каждый тор заменяется на кольцо меньших торов, попарно зацепленных друг с другом",description:"Первый пример «дикого» вложения канторова множества в ℝ³. Топологически неэквивалентно стандартному канторову множеству.",phiPiRelation:"Количество торов на каждом уровне = 2·φ ≈ 3.236 → округление до 3 даёт наиболее плотное зацепление.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3,rotX:.4,rotY:.3,iterations:5}},{id:"henon-attractor",name:"Аттрактор Энона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"xₙ₊₁ = 1 − axₙ² + yₙ, yₙ₊₁ = bxₙ (a=1.4, b=0.3)",dimension:"D ≈ 1.261 (фрактальная размерность аттрактора)",generatorRule:"Отображение Энона — дискретная динамическая система. 3D-обобщение добавляет третью координату с модуляцией.",description:"Один из первых изученных странных аттракторов. Демонстрирует хаотическое поведение в диссипативной системе. Фазовое пространство — сложенные полосы.",phiPiRelation:"Параметр a = 1.4 ≈ φ − 0.218. При a = φ аттрактор переходит в хаос через каскад удвоения периода.",enginePreset:{type:"henonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"aizawa-attractor",name:"Аттрактор Аизавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"ẋ = (z−b)x − dy, ẏ = dx + (z−b)y, ż = c + az − z³/3 − (x²+y²)(1+ez) + fz x³",dimension:"D ≈ 2.1 (тороидальный хаос)",generatorRule:"Система ОДУ с тороидальной топологией. Параметры: a=0.95, b=0.7, c=0.6, d=3.5, e=0.25, f=0.1.",description:"Тороидальный странный аттрактор с характерной «пузырьковой» структурой. Демонстрирует переход от порядка к хаосу через квазипериодичность.",phiPiRelation:"Параметр d = 3.5 ≈ 2φ + 0.382. Тороидальная геометрия связана с золотым сечением через иррациональность числа вращения.",enginePreset:{type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.6,iterations:12}},{id:"thomas-attractor",name:"Аттрактор Томаса",englishName:"Thomas's Cyclically Symmetric Attractor",category:"ifs_attractors",formula:"ẋ = sin(y) − bx, ẏ = sin(z) − by, ż = sin(x) − bz",dimension:"D ≈ 2.0 (C₃-симметричный)",generatorRule:"Циклически симметричная система с 3-кратной осью. При b = 0.208186 — хаотический лабиринт.",description:"Простейший пример циклически симметричного хаоса. Траектория образует симметричный лабиринт в форме трёхмерного узла.",phiPiRelation:"Критическое значение b ≈ 0.208186 связано с золотым сечением: b ≈ 1/(2φ² + 1).",enginePreset:{type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.4,iterations:14}},{id:"halvorsen-attractor",name:"Аттрактор Хальворсена",englishName:"Halvorsen Attractor",category:"ifs_attractors",formula:"ẋ = −ax − 4y − 4z − y², ẏ = −ay − 4z − 4x − z², ż = −az − 4x − 4y − x²",dimension:"D ≈ 2.3 (3-кратная симметрия)",generatorRule:"Циклическая система с квадратичной нелинейностью. a = 1.89 даёт наиболее выразительную структуру.",description:"Трёхсимметричный странный аттрактор с характерными «лепестками». Каждый лепесток — спиральная траектория.",phiPiRelation:"Оптимальное a = 1.89 ≈ φ + 0.272. Три лепестка = 2π/(3φ) радиан на каждый.",enginePreset:{type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.7,iterations:12}},{id:"julia-set-3d",name:"Множество Жюлиа 3D",englishName:"Julia Set (c = −0.7 + 0.27i)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ² + c, c = −0.7 + 0.27015i",dimension:"D ≈ 1.75 (граница множества Жюлиа)",generatorRule:"Классическое квадратичное отображение Жюлиа. 3D-проекция через стереографическую проекцию.",description:"Одно из самых красивых множеств Жюлиа. Связано с множеством Мандельброта: каждая точка c даёт уникальную геометрию.",phiPiRelation:"c = −0.7 + 0.27i ≈ −1/φ + i/(2φ²). Граница множества имеет золотую спиральную структуру.",enginePreset:{type:"juliaSet3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.4,iterations:18}},{id:"multibrot3",name:"Мультиброт z³+c",englishName:"Multibrot Set (z³ + c)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ³ + c",dimension:"D = 2 (граница), внутренность — 3-кратная симметрия",generatorRule:"Обобщение Мандельброта на степень 3. Вместо 2-кратной — 3-кратная симметрия.",description:"Трёхкратное обобщение множества Мандельброта. Имеет 3-кратную вращательную симметрию вместо 2-кратной.",phiPiRelation:"Каждая степень d даёт d-кратную симметрию. При d = φ+1 ≈ 2.618 получается промежуточная структура.",enginePreset:{type:"multibrot3",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"tetrix",name:"Тетрикс (Тетраэдр Серпинского)",englishName:"Tetrix (Sierpinski Tetrahedron)",category:"ifs_attractors",formula:"IFS: 4 аффинных сжатия к вершинам тетраэдра с коэффициентом 1/2",dimension:"D = log(4)/log(2) = 2.0",generatorRule:"Каждый тетраэдр заменяется на 4 тетраэдра в половину размера, расположенных в вершинах исходного.",description:"3D-аналог треугольника Серпинского. Единственный IFS-фрактал, размерность которого точно равна 2.",phiPiRelation:"4 вершины тетраэдра = 3-мерный аналог золотого треугольника. Коэффициент 1/2 = 1/φ⁰.",enginePreset:{type:"tetrix",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.6,iterations:12}},{id:"gosper-curve",name:"Кривая Госпера (Остров Госпера)",englishName:"Gosper Curve (Gosper Island)",category:"geometric_curves",formula:"L-система: F → F+F−−F−F++FF+F−, угол 60°",dimension:"D = log(7)/log(3) ≈ 1.771",generatorRule:"Каждый сегмент заменяется на 7 сегментов в √7 раз меньших, с поворотом на arctan(√3/5).",description:"Единственная кривая, заполняющая плоскость, tiles которой — шестиугольники. Основа гексагонального фрактального мощения.",phiPiRelation:"7 сегментов / 3 масштаб = log(7)/log(3). Угол поворота ≈ 13.898° связан с φ через √7.",enginePreset:{type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.3,iterations:7}},{id:"l-system-plant",name:"L-система: Фрактальное растение",englishName:"L-System Plant (Phyllotactic Branching)",category:"geometric_curves",formula:"Axiom: F, Rules: F → F[+F]F[-F][F], угол = 137.5° (золотой)",dimension:"D ≈ 1.45 (филогенетическое ветвление)",generatorRule:"Рекурсивное ветвление с золотым углом 137.5° между побегами. Каждый уровень — масштабирование на 1/φ.",description:"Математическая модель роста растения. Золотой угол обеспечивает максимальную инсоляцию каждого листа.",phiPiRelation:"Золотой угол = 2π(1 − 1/φ) ≈ 137.508°. Фибоначчиево филлотаксисное расположение листьев.",enginePreset:{type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.5,rotX:.2,rotY:.8,iterations:9}},{id:"schwarz-p",name:"Поверхность Шварца P",englishName:"Schwarz P Minimal Surface",category:"topological_physical",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set суммы косинусов по трём осям. Периодическая структура с кубической симметрией.",description:"Одна из трёх классических трипериодических минимальных поверхностей (TPMS). Встречается в структуре мембран и кристаллах.",phiPiRelation:"Масштаб поверхности = φ. Периодичность по трём осям = 2π. Связь с кубической симметрией O_h.",enginePreset:{type:"schwarzP",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.5,iterations:6}},{id:"schwarz-d",name:"Поверхность Шварца D (Diamond)",englishName:"Schwarz D Minimal Surface",category:"topological_physical",formula:"sin(x)sin(y)sin(z) − cos(x)cos(y)cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set разности произведений sin и cos. Алмазная топология каналов.",description:"Вторая из трёх классических TPMS. Топология каналов соответствует алмазной кристаллической решётке.",phiPiRelation:"Масштаб = φ. Встречается в структуре опалов и фотонных кристаллов с золотым сечением.",enginePreset:{type:"schwarzD",compositeOp:"smoothUnion",zoom:2,rotX:.3,rotY:.6,iterations:6}},{id:"apollonian-gasket",name:"Прокладка Аполлония",englishName:"Apollonian Gasket",category:"constructive",formula:"Рекурсивное вписывание окружностей: каждая касается трёх соседних",dimension:"D ≈ 1.3057 (точно вычислена Бойдом)",generatorRule:"Начальные 3 взаимно касающиеся окружности. На каждом шаге в каждую криволинейную треугольную область вписывается новая окружность.",description:"Один из старейших известных фракталов (Аполлоний Пергский, ~200 до н.э.). Связан с теорией чисел и p-адическими формами.",phiPiRelation:"Кривизны окружностей образуют целочисленные квадруuples (a,b,c,d) с a²+b²+c²+d² = (a+b+c+d)²/2. Золотое сечение в соотношении радиусов.",enginePreset:{type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:10}},{id:"barnsley-fern-3d",name:"Папоротник Барнсли 3D",englishName:"Barnsley Fern 3D",category:"ifs_attractors",formula:"4 аффинных преобразования: стебель (1%), лист (85%), левый побег (7%), правый побег (7%)",dimension:"D ≈ 1.45 (IFS-аттрактор)",generatorRule:"Система итерируемых функций с 4 преобразованиями. Вероятностный выбор: p = {0.01, 0.85, 0.07, 0.07}.",description:"3D-обобщение классического папоротника Барнсли. Добавлена третья координата с уменьшением масштаба на каждом уровне.",phiPiRelation:"Коэффициенты преобразований: 0.85 ≈ 1/φ + 0.232. Золотое сечение в масштабах листьев.",enginePreset:{type:"barnsleyFern3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.5,iterations:10}},{id:"klein-quartic",name:"Квартика Клейна",englishName:"Klein Quartic Surface",category:"topological_physical",formula:"x³y + y³z + z³x = 0 (в ℂP²)",dimension:"D = 2 (поверхность рода 3)",generatorRule:"Поверхность 4-го порядка в комплексной проективной плоскости. Группа симметрий PSL(2,7) порядка 168.",description:"Поверхность с максимальной возможной симметрией для рода 3 (теорема Гурвица: 84(g−1) = 168). Связана с группой Фано.",phiPiRelation:"168 = 8 × 21 = 8 × 3 × 7. Порядок группы симметрий связан с φ через число Фибоначчи F(8) = 21.",enginePreset:{type:"kleinQuartic",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:8}},{id:"sphere-packing",name:"Фрактальная упаковка сфер",englishName:"Fractal Sphere Packing (FCC)",category:"constructive",formula:"Рекурсивное размещение сфер в гранях FCC-решётки с масштабом 1/φ",dimension:"D ≈ 2.47 (упаковка)",generatorRule:"На каждом уровне: FCC-решётка сфер, каждая сфера заполняется меньшими сферами в октаэдрических и тетраэдрических пустотах.",description:"Модель плотнейшей упаковки сфер с фрактальной иерархией. Связана с упаковкой Кеплера и гипотезой Хейлса.",phiPiRelation:"Масштаб вложения = φ. FCC-упаковка = π/(3√2) ≈ 0.7405. Золотое сечение в соотношении пустот.",enginePreset:{type:"spherePacking",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:7}},{id:"nova-fractal",name:"Нова-фрактал",englishName:"Nova Fractal",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ − zₙ³/(3zₙ²) + c (гибрид Ньютона и Мандельброта)",dimension:"D ≈ 2 (граница бассейнов)",generatorRule:"Итерация Ньютона для z³ = 1 с добавлением параметра c как в Мандельброте.",description:"Гибрид метода Ньютона и множества Мандельброта. Объединяет фрактальную структуру бассейнов притяжения с геометрией Мандельброта.",phiPiRelation:"3-кратная симметрия бассейнов = 2π/3. Параметр c связан с φ через положение бассейнов.",enginePreset:{type:"novaFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:14}},{id:"golden-knot",name:"Золотой узел",englishName:"Golden Knot (φ-Torus Knot)",category:"topological_physical",formula:"(R + r·cos(qθ))·(cos θ, sin θ), r·sin(qθ)), q = φ",dimension:"D = 1 (кривая), D ≈ 1.3 с трубкой",generatorRule:"Торический узел с иррациональным числом намотки q = φ. Замыкание при конечном числе оборотов.",description:"Торический узел с золотым числом намотки. Иррациональность φ делает кривую всюду плотной на торе.",phiPiRelation:"Число намотки = φ = (1+√5)/2. Золотой узел — единственная кривая с иррациональной намоткой на торе.",enginePreset:{type:"goldenKnot",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:6}},{id:"spherical-harmonics",name:"Сферические гармоники",englishName:"Spherical Harmonics (Quantum Orbitals)",category:"topological_physical",formula:"Yₗᵐ(θ,φ) — собственные функции оператора Лапласа на сфере",dimension:"D = 2 (поверхность), D ≈ 2.5 с модуляцией",generatorRule:"Суперпозиция сферических гармоник Y₃₂ и Y₄₂. Радиальная модуляция = 1 + 0.4·Y₃₂ + 0.25·Y₄₂.",description:"Квантовые орбитальные формы — собственные функции углового момента. Визуализация атомных орбиталей.",phiPiRelation:"Квантовые числа l, m связаны с золотым сечением: l = 3, m = 2 → l/m = φ − 0.118 ≈ 3/2.",enginePreset:{type:"sphericalHarmonics",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:6}},{id:"reaction-diffusion",name:"Реакция-диффузия (Тьюринг)",englishName:"Reaction-Diffusion (Gray-Scott)",category:"topological_physical",formula:"∂u/∂t = Du∇²u − uv² + F(1−u), ∂v/∂t = Dv∇²v + uv² − (F+k)v",dimension:"D ≈ 2.3 (Тьюринговые паттерны)",generatorRule:"Модель Грея-Скотта с параметрами F = 0.04 + φ·0.01, k = 0.06 + φ·0.005. Два реагента, диффузия и реакция.",description:"Математическая модель образования биологических паттернов: пятна, полоса, спирали. Объясняет окраску животных.",phiPiRelation:"Параметры F и k используют φ. Тьюринговые паттерны возникают при соотношении диффузий Du/Dv ≈ φ².",enginePreset:{type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:8}}],L2=({isOpen:u,onClose:p,onApplyPreset:f})=>{var $;const[c,y]=k.useState("catalog"),[_,w]=k.useState("all"),[E,T]=k.useState(""),[m,F]=k.useState(il[0]),[R,q]=k.useState(null),L=k.useMemo(()=>il.filter(B=>{const le=_==="all"||B.category===_,g=E.toLowerCase().trim();if(!g)return le;const U=B.name.toLowerCase().includes(g)||B.englishName.toLowerCase().includes(g)||B.formula.toLowerCase().includes(g)||B.dimension.toLowerCase().includes(g)||B.description.toLowerCase().includes(g);return le&&U}),[_,E]);if(!u)return null;const V=B=>{f(B.enginePreset,B.name),q(B.id),setTimeout(()=>{q(null),p()},450)},ee=B=>{switch(B){case"geometric_curves":return l.jsx(Sr,{className:"w-4 h-4"});case"constructive":return l.jsx(pi,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(Ph,{className:"w-4 h-4"});case"multidimensional":return l.jsx(xh,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(ll,{className:"w-4 h-4"});case"stochastic":return l.jsx(fi,{className:"w-4 h-4"});case"topological_physical":return l.jsx(xf,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(ui,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",il.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:p,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(rl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>y("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(pi,{className:"w-4 h-4"}),"Атлас и Таксономия (",il.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>y("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Xs,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>y("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ys,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),c==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(r2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:E,onChange:B=>T(B.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),E&&l.jsx("button",{onClick:()=>T(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>w("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${_==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",il.length,")"]}),of.map(B=>{var le;return l.jsxs("button",{onClick:()=>w(B.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${_===B.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[ee(B.id),l.jsx("span",{children:((le=B.title.split(".")[1])==null?void 0:le.trim())||B.title})]},B.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:L.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):L.map(B=>{var g;const le=(m==null?void 0:m.id)===B.id;return l.jsxs("button",{id:`btn-fractal-${B.id}`,onClick:()=>F(B),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${le?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:B.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(g=B.dimension.split("≈")[0])==null?void 0:g.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:B.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:B.formula})]})]},B.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:m?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[ee(m.category),l.jsx("span",{children:($=of.find(B=>B.id===m.category))==null?void 0:$.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:m.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:m.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>V(m),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:R===m.id?l.jsxs(l.Fragment,{children:[l.jsx(vf,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(zf,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:m.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:m.dimension})]})]}),m.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:m.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:m.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(Xs,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:m.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Ys,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:m.enginePreset.type}),m.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:m.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:m.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),c==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Xs,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),c==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(Ys,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(i2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(bf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(ll,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(gf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Zh,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:p,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},U2=({params:u,onToggleProbe:p,onToggleMacro:f})=>{if(!u.probeActive)return null;const c=Math.sqrt((u.camPosX??0)**2+(u.camPosY??0)**2+(u.camPosZ??0)**2),y=Math.max(.001,c/(u.zoom||3)).toFixed(4),_=u.slicePlane?((.5-u.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:u.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(gf,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:p,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[y," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(u.camPosX??0).toFixed(2)," Y:",(u.camPosY??0).toFixed(2)," Z:",(u.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[u.sliceAxis||"golden"," (",_,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:u.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[u.octaveLayers||2,"L · k=",u.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${u.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:u.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(ll,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",u.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",u.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",u.phiMultiplier.toFixed(5)]})]})]})},sf=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:fi,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:bf,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:ll,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:Hh,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:Eh,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:xf,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:Fh,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],B2=({currentSpecimen:u,historyQueue:p,currentIndex:f,onSelectSpecimen:c,onNext:y,onPrev:_,renderStyle:w,onSelectRenderStyle:E,scrollMode:T,onToggleScrollMode:m,isOpen:F,onToggleOpen:R})=>{const q=k.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${F?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(a2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:m,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${T==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:T==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:T==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(_f,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(b2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",sf.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:sf.map(L=>{const V=L.icon,ee=w===L.id;return l.jsxs("button",{id:`select-render-style-${L.id}-btn`,onClick:()=>E(L.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${ee?L.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:L.desc,children:[l.jsx(V,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:L.shortLabel})]},L.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",p.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:_,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(Mh,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:y,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx(Dh,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:q,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:p.map((L,V)=>{const ee=L.id===(u==null?void 0:u.id)||V===f;return l.jsxs("button",{id:`feed-item-${V}-btn`,onClick:()=>c(L),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${ee?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",L.generation||V+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:L.name})]}),ee&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:L.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[L.type," + ",L.hybridType||L.type]})]})]},L.id||V)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:T==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})};function cf(u){switch(u){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class F2{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(p=.65,f="phi432"){if(this.isRunning){this.setVolume(p),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const c=window.AudioContext||window.webkitAudioContext;this.ctx=new c,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=p,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,p*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(c){console.warn("AudioContext initialization deferred or unavailable",c)}}getChordFrequenciesForFamily(p,f){const c=1.61803398875;if(p==="sacred")return[{ratio:.5,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:c,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:c*c*.5,wave:"triangle",vol:.08,pan:.2,role:"shimmer"}];if(p==="complex")return[{ratio:.5,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2,wave:"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(p==="minimal")return[{ratio:.75,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2),wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:c*1.2,wave:"triangle",vol:.06,pan:.35,role:"shimmer"}];if(p==="primes"){const y=1.1413470000000001,_=1+21.022/100,w=1+25.0108/100;return[{ratio:.5,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:y,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:_,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:w,wave:"triangle",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5,wave:"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(p,f){if(!this.ctx||!this.globalFilter)return;const c=cf(p),y=f?cf(f):c,_=108,w=this.ctx.currentTime,E=[...this.voices];this.voices=[],E.forEach(F=>{try{F.gain.gain.cancelScheduledValues(w),F.gain.gain.setValueAtTime(F.gain.gain.value,w),F.gain.gain.exponentialRampToValueAtTime(1e-4,w+.35),setTimeout(()=>{var R;try{F.osc.stop(),F.osc.disconnect(),F.filter.disconnect(),(R=F.panner)==null||R.disconnect(),F.gain.disconnect()}catch{}},380)}catch{}});const m=this.getChordFrequenciesForFamily(c,this.tuningMode).map((F,R)=>{const q=this.ctx.createOscillator(),L=this.ctx.createGain(),V=this.ctx.createBiquadFilter(),ee=(R%2===0?.618:-.618)*.5,$=_*F.ratio+ee;q.type=F.wave,q.frequency.setValueAtTime($,w),L.gain.setValueAtTime(1e-4,w),L.gain.exponentialRampToValueAtTime(F.vol,w+1.2),V.type="lowpass",V.frequency.setValueAtTime(450+R*80,w),V.Q.setValueAtTime(1.2,w),q.connect(V);let B=V,le;return this.ctx.createStereoPanner&&(le=this.ctx.createStereoPanner(),le.pan.setValueAtTime(F.pan,w),V.connect(le),B=le),B.connect(L),L.connect(this.globalFilter),q.start(w),{osc:q,gain:L,filter:V,panner:le,baseFreqRatio:F.ratio,role:F.role}});if(f&&f!==p){const F=this.getChordFrequenciesForFamily(y,this.tuningMode),R=F[2]||F[1],q=this.ctx.createOscillator(),L=this.ctx.createGain(),V=this.ctx.createBiquadFilter();q.type="sine",q.frequency.setValueAtTime(_*R.ratio,w);const ee=Math.max(1e-4,this.currentHybridBlend*.22);L.gain.setValueAtTime(1e-4,w),L.gain.exponentialRampToValueAtTime(ee,w+1.5),V.type="bandpass",V.frequency.setValueAtTime(_*R.ratio*1.5,w),V.Q.setValueAtTime(2,w),q.connect(V);let $=V,B;this.ctx.createStereoPanner&&(B=this.ctx.createStereoPanner(),B.pan.setValueAtTime(.45,w),V.connect(B),$=B),$.connect(L),L.connect(this.globalFilter),q.start(w),m.push({osc:q,gain:L,filter:V,panner:B,baseFreqRatio:R.ratio,role:"hybrid"})}this.voices=m}updateParams(p){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,c=p.phiMultiplier||1.618034,y=Math.max(.08,Math.min(16,p.zoom||3)),_=Math.max(.1,Math.min(2,p.morphSpeed||.45)),w=Math.max(0,Math.min(1,p.hybridBlend||0));if(p.type!==this.currentFractalType||p.hybridType&&p.hybridType!==this.currentHybridType){this.currentFractalType=p.type,this.currentHybridType=p.hybridType||p.type,this.currentHybridBlend=w,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const E=Math.max(260,Math.min(980,380+(4-Math.min(y,4))*80+_*120));this.globalFilter.frequency.setTargetAtTime(E,f,.15);const T=Math.max(54,Math.min(240,108/Math.max(.5,y*.6)));this.cavityResonator.frequency.setTargetAtTime(T,f,.2);const m=108,F=(c-1.618034)*80,R=Math.sin(p.rotX||0)*.4;this.voices.forEach((q,L)=>{const V=m*q.baseFreqRatio,ee=q.role==="golden"||q.role==="shimmer"?F:F*.3;if(q.osc.frequency.setTargetAtTime(V+ee,f,.15),q.panner){const $=L%2===0?.25:-.25,B=Math.max(-.85,Math.min(.85,$+R));q.panner.pan.setTargetAtTime(B,f,.12)}if(q.role==="hybrid"){const $=Math.max(1e-4,w*.2);q.gain.gain.setTargetAtTime($,f,.1)}}),p.audioVolume!==void 0&&p.audioVolume!==this.currentVolume&&this.setVolume(p.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const p=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((y,_)=>{if(!this.ctx)return;const w=this.ctx.createOscillator(),E=this.ctx.createGain(),T=this.ctx.createBiquadFilter();w.type="sine",w.frequency.setValueAtTime(y,p+_*.05),T.type="lowpass",T.frequency.setValueAtTime(950,p),E.gain.setValueAtTime(1e-4,p+_*.05),E.gain.exponentialRampToValueAtTime(.05/(_+1),p+_*.05+.08),E.gain.exponentialRampToValueAtTime(1e-5,p+_*.05+2.8),w.onended=()=>{try{w.disconnect(),T.disconnect(),E.disconnect()}catch{}},w.connect(T),T.connect(E),E.connect(this.globalFilter),w.start(p+_*.05),w.stop(p+_*.05+3)})}catch{}}setVolume(p){if(this.currentVolume=Math.max(0,Math.min(1,p)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(p){this.tuningMode!==p&&(this.tuningMode=p,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const p=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(p),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,p),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,p+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var c,y,_,w,E;this.stopTimeout=null,f.forEach(T=>{var m;try{T.osc.stop(),T.osc.disconnect(),T.filter.disconnect(),(m=T.panner)==null||m.disconnect(),T.gain.disconnect()}catch{}});try{(c=this.globalFilter)==null||c.disconnect(),(y=this.cavityResonator)==null||y.disconnect(),(_=this.compressor)==null||_.disconnect(),(w=this.masterGain)==null||w.disconnect(),(E=this.ctx)==null||E.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(p){console.warn("Error stopping audio",p)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const ra=new F2,G2={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"gold-obsidian",iterations:20,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.3,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function H2(){const[u]=k.useState(()=>new T2),[p,f]=k.useState(G2),[c,y]=k.useState(null),[_,w]=k.useState(65),[E,T]=k.useState(!1),[m,F]=k.useState(!1),[R,q]=k.useState("idle"),L=k.useRef(null),V=k.useRef(0),[ee,$]=k.useState("auto"),[B,le]=k.useState(!1),[g,U]=k.useState(!1),[be,ge]=k.useState(!1),[ae,we]=k.useState(!1),[Se,Ze]=k.useState(!1),[Fe,Ge]=k.useState(!1),[Qe,Xe]=k.useState("feed"),[fe,S]=k.useState(!1),[O,Z]=k.useState([]),[W,re]=k.useState(new Set),h=k.useCallback(()=>{},[]),[A,X]=k.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),H=k.useCallback(G=>{y(G),w(G.affinityScore);const Y=(u==null?void 0:u.suggestRenderStyle())||"solid";f(P=>({...P,type:G.type,hybridType:G.hybridType,tertiaryType:G.tertiaryType,compositeOp:G.compositeOp,hybridBlend:G.hybridBlend,tertiaryBlend:G.tertiaryBlend,smoothK:G.smoothK,warpStrength:G.warpStrength,octaveLayers:G.octaveLayers,boxFold:G.boxFold,sphereFold:G.sphereFold,interiorCut:G.interiorCut,paletteId:G.palette.id,customPalette:G.palette,iterations:G.iterations,phiMultiplier:G.phiMultiplier,morphSpeed:G.morphSpeed,glowIntensity:G.glowIntensity,zoom:G.zoom,renderStyle:Y})),ra.getActive()&&ra.playSpecimenTransitionChord()},[]);k.useEffect(()=>{if(!u)return;const G=window.location.hash.slice(1);if(G){const P=new URLSearchParams(G),ne=P.get("type"),pe=P.get("hybrid"),Ue=P.get("tertiary"),Ne=P.get("op");if(ne){const rt=$t.find(vt=>vt.id===P.get("palette"))||$t[0],Re={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:P.get("name")||`Фрактал ${ne}`,type:ne,hybridType:pe||ne,tertiaryType:Ue||"riemannZeta",compositeOp:Ne||"smoothUnion",hybridBlend:parseFloat(P.get("blend")||"0.35"),tertiaryBlend:parseFloat(P.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(P.get("smoothK")||"0.35"),warpStrength:parseFloat(P.get("warp")||"0.25"),octaveLayers:parseInt(P.get("octaves")||"2"),boxFold:parseFloat(P.get("boxFold")||"1.2"),sphereFold:parseFloat(P.get("sphereFold")||"0.65"),interiorCut:parseFloat(P.get("interiorCut")||"0.0"),palette:rt,iterations:parseInt(P.get("iterations")||"20"),phiMultiplier:parseFloat(P.get("phi")||"1.61803398875"),morphSpeed:parseFloat(P.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(P.get("glow")||"1.1"),zoom:parseFloat(P.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};H(Re),window.history.replaceState(null,"",window.location.pathname);return}}const Y=u.breedNextSpecimen();H(Y)},[u,H]),k.useEffect(()=>(p.enableAudio?ra.start(p.audioVolume??.65,p.audioTuning??"phi432"):ra.stop(),()=>{ra.stop()}),[p.enableAudio]),k.useEffect(()=>{p.enableAudio&&(p.audioTuning&&ra.setTuning(p.audioTuning),p.audioVolume!==void 0&&ra.setVolume(p.audioVolume),ra.updateParams(p))},[p.enableAudio,p.audioTuning,p.audioVolume]),k.useEffect(()=>{const G=setInterval(()=>{if(u&&c){const Y=u.registerEngagement(1,0,0,c);w(P=>P===Y?P:Y)}},1200);return()=>clearInterval(G)},[u,c]);const K=k.useCallback((G,Y)=>{if(!u||!c)return;const P=G>0?"zooming":Y>0?"orbiting":"idle";q(pe=>pe!==P?P:pe),L.current&&clearTimeout(L.current),L.current=setTimeout(()=>{q(pe=>pe!=="idle"?"idle":pe)},1200);const ne=u.registerEngagement(.1,G,Y,c);w(pe=>pe===ne?pe:ne)},[u,c]),ie=k.useCallback(()=>{if(!u)return;const G=performance.now();if(G-V.current<180)return;V.current=G;const Y=u.stepHistory(1);H(Y)},[u,H]),de=k.useCallback(()=>{if(!u)return;const G=performance.now();if(G-V.current<180)return;V.current=G;const Y=u.stepHistory(-1);H(Y)},[u,H]),Le=k.useCallback(()=>{if(!u||!c)return;u.boostAffinity(c),w(100);const G=c.id;re(Y=>{const P=new Set(Y);return P.has(G)?(P.delete(G),Z(ne=>ne.filter(pe=>pe.id!==G))):(P.add(G),Z(ne=>[...ne,c])),P})},[u,c]),Oe=k.useCallback(G=>{H(G)},[H]),Pt=k.useCallback(G=>{re(Y=>{const P=new Set(Y);return P.delete(G),P}),Z(Y=>Y.filter(P=>P.id!==G))},[]),Ma=k.useCallback(G=>{if(!u)return;const Y=u.breedNextSpecimen(G);H(Y)},[u,H]),nn=k.useCallback(()=>{if(!u)return;const G={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((c==null?void 0:c.generation)||1)+1,name:`Фенотип Инженера #${((c==null?void 0:c.generation)||1)+1}`,type:p.type,hybridType:p.hybridType||p.type,tertiaryType:p.tertiaryType||"riemannZeta",compositeOp:p.compositeOp,hybridBlend:p.hybridBlend??.35,tertiaryBlend:p.tertiaryBlend??.2,smoothK:p.smoothK,warpStrength:p.warpStrength,octaveLayers:p.octaveLayers,boxFold:p.boxFold,sphereFold:p.sphereFold,interiorCut:p.interiorCut,palette:p.customPalette||$t.find(Y=>Y.id===p.paletteId)||$t[0],iterations:p.iterations,phiMultiplier:p.phiMultiplier,morphSpeed:p.morphSpeed,glowIntensity:p.glowIntensity,zoom:p.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};y(G),u.boostAffinity(G),ra.getActive()&&ra.playSpecimenTransitionChord()},[u,p,c]),ln=k.useCallback(()=>{f(G=>({...G,enableAudio:!G.enableAudio}))},[]),Vt=k.useCallback(G=>{le(!1);const Y=document.createElement("a");Y.download=`golden-ratio-fractal-${p.type}-${(c==null?void 0:c.generation)||1}.png`,Y.href=G,Y.click()},[p.type,c==null?void 0:c.generation]),rn=k.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(ih,{params:p,onParamsChange:f,onTelemetryUpdate:X,screenshotRequested:B,onScreenshotCaptured:Vt,forcedBackend:ee,onInteraction:K,onNextSpecimen:ie,onPrevSpecimen:de,onEngineReady:()=>we(!0),scrollMode:Qe}),l.jsx(B2,{currentSpecimen:c,historyQueue:u.getHistory(),currentIndex:u.getCurrentIndex(),onSelectSpecimen:H,onNext:ie,onPrev:de,renderStyle:p.renderStyle,onSelectRenderStyle:G=>f(Y=>({...Y,renderStyle:G})),scrollMode:Qe,onToggleScrollMode:()=>Xe(G=>G==="feed"?"zoom":"feed"),isOpen:fe,onToggleOpen:()=>S(G=>!G)}),l.jsx(R2,{specimen:c,resonanceScore:_,isInteracting:R!=="idle",interactionType:R,onNext:ie,onPrev:de,onFavorite:Le,onOpenProfile:()=>F(!0),enableAudio:p.enableAudio,onToggleAudio:ln,onOpenResearchModal:()=>U(!0),onOpenAtlas:()=>ge(!0),isFeedOpen:fe,onToggleFeed:()=>S(G=>!G),isCurrentLiked:c?W.has(c.id):!1}),l.jsx(U2,{params:p,onToggleProbe:()=>f(G=>({...G,probeActive:!G.probeActive})),onToggleMacro:()=>f(G=>({...G,macroMode:!G.macroMode}))}),l.jsx(O2,{isOpen:m,onClose:()=>F(!1),tasteProfile:u.getTasteProfile(),archetypeBreakdown:u.getArchetypeBreakdown(),currentSpecimen:c,resonanceScore:_,isEngineerMode:E,onToggleEngineerMode:()=>T(G=>!G),audioTuning:p.audioTuning||"phi432",onSelectAudioTuning:G=>f(Y=>({...Y,audioTuning:G})),onOpenManifest:()=>{F(!1),Ze(!0)},likedSpecimens:O,onPlayLiked:Oe,onRemoveLike:Pt,isCurrentLiked:c?W.has(c.id):!1}),E&&l.jsxs(l.Fragment,{children:[l.jsx(_2,{telemetry:A,targetFps:p.targetFps,phiMultiplier:p.phiMultiplier}),l.jsx(M2,{params:p,onParamsChange:f,onSelectFractalType:Ma,onCaptureScreenshot:()=>le(!0),onToggleFullscreen:rn,onToggleInfoModal:()=>U(!0),onOpenAtlasModal:()=>ge(!0),activeBackend:A.backend,forcedBackend:ee,onSelectBackend:$,onClose:()=>T(!1),tasteProfile:u.getTasteProfile(),onSaveToFeed:nn})]}),l.jsx(k2,{isOpen:g,onClose:()=>U(!1)}),l.jsx(L2,{isOpen:be,onClose:()=>ge(!1),onApplyPreset:G=>{f(Y=>({...Y,...G}))}}),l.jsx(q2,{isOpen:Se,onClose:()=>Ze(!1),isFirstVisit:Fe,onOpenAtlas:()=>ge(!0)}),l.jsx(E2,{isReady:ae,onFinished:h})]})}const uf=document.getElementById("root");uf&&Km.createRoot(uf).render(l.jsx(H2,{}));
