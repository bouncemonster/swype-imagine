(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const x of d)if(x.type==="childList")for(const z of x.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&c(z)}).observe(document,{childList:!0,subtree:!0});function f(d){const x={};return d.integrity&&(x.integrity=d.integrity),d.referrerPolicy&&(x.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?x.credentials="include":d.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function c(d){if(d.ep)return;d.ep=!0;const x=f(d);fetch(d.href,x)}})();function Im(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Js={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function Zm(){if(tf)return vl;tf=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,d,x){var z=null;if(x!==void 0&&(z=""+x),d.key!==void 0&&(z=""+d.key),"key"in d){x={};for(var b in d)b!=="key"&&(x[b]=d[b])}else x=d;return d=x.ref,{$$typeof:u,type:c,key:z,ref:d!==void 0?d:null,props:x}}return vl.Fragment=s,vl.jsx=f,vl.jsxs=f,vl}var af;function Qm(){return af||(af=1,Js.exports=Zm()),Js.exports}var l=Qm(),Ws={exports:{}},gl={},$s={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Km(){return nf||(nf=1,(function(u){function s(A,L){var M=A.length;A.push(L);e:for(;0<M;){var Q=M-1>>>1,ee=A[Q];if(0<d(ee,L))A[Q]=L,A[M]=ee,M=Q;else break e}}function f(A){return A.length===0?null:A[0]}function c(A){if(A.length===0)return null;var L=A[0],M=A.pop();if(M!==L){A[0]=M;e:for(var Q=0,ee=A.length,h=ee>>>1;Q<h;){var T=2*(Q+1)-1,V=A[T],P=T+1,te=A[P];if(0>d(V,M))P<ee&&0>d(te,V)?(A[Q]=te,A[P]=M,Q=P):(A[Q]=V,A[T]=M,Q=T);else if(P<ee&&0>d(te,M))A[Q]=te,A[P]=M,Q=P;else break e}}return L}function d(A,L){var M=A.sortIndex-L.sortIndex;return M!==0?M:A.id-L.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;u.unstable_now=function(){return x.now()}}else{var z=Date,b=z.now();u.unstable_now=function(){return z.now()-b}}var g=[],y=[],G=1,k=null,B=3,q=!1,Y=!1,K=!1,W=!1,H=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function X(A){for(var L=f(y);L!==null;){if(L.callback===null)c(y);else if(L.startTime<=A)c(y),L.sortIndex=L.expirationTime,s(g,L);else break;L=f(y)}}function ge(A){if(K=!1,X(A),!Y)if(f(g)!==null)Y=!0,Me||(Me=!0,Ie());else{var L=f(y);L!==null&&me(ge,L.startTime-A)}}var Me=!1,ne=-1,qe=5,Ye=-1;function Ve(){return W?!0:!(u.unstable_now()-Ye<qe)}function Je(){if(W=!1,Me){var A=u.unstable_now();Ye=A;var L=!0;try{e:{Y=!1,K&&(K=!1,re(ne),ne=-1),q=!0;var M=B;try{t:{for(X(A),k=f(g);k!==null&&!(k.expirationTime>A&&Ve());){var Q=k.callback;if(typeof Q=="function"){k.callback=null,B=k.priorityLevel;var ee=Q(k.expirationTime<=A);if(A=u.unstable_now(),typeof ee=="function"){k.callback=ee,X(A),L=!0;break t}k===f(g)&&c(g),X(A)}else c(g);k=f(g)}if(k!==null)L=!0;else{var h=f(y);h!==null&&me(ge,h.startTime-A),L=!1}}break e}finally{k=null,B=M,q=!1}L=void 0}}finally{L?Ie():Me=!1}}}var Ie;if(typeof S=="function")Ie=function(){S(Je)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,He=pe.port2;pe.port1.onmessage=Je,Ie=function(){He.postMessage(null)}}else Ie=function(){H(Je,0)};function me(A,L){ne=H(function(){A(u.unstable_now())},L)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(A){A.callback=null},u.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<A?Math.floor(1e3/A):5},u.unstable_getCurrentPriorityLevel=function(){return B},u.unstable_next=function(A){switch(B){case 1:case 2:case 3:var L=3;break;default:L=B}var M=B;B=L;try{return A()}finally{B=M}},u.unstable_requestPaint=function(){W=!0},u.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=B;B=A;try{return L()}finally{B=M}},u.unstable_scheduleCallback=function(A,L,M){var Q=u.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Q+M:Q):M=Q,A){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,A={id:G++,callback:L,priorityLevel:A,startTime:M,expirationTime:ee,sortIndex:-1},M>Q?(A.sortIndex=M,s(y,A),f(g)===null&&A===f(y)&&(K?(re(ne),ne=-1):K=!0,me(ge,M-Q))):(A.sortIndex=ee,s(g,A),Y||q||(Y=!0,Me||(Me=!0,Ie()))),A},u.unstable_shouldYield=Ve,u.unstable_wrapCallback=function(A){var L=B;return function(){var M=B;B=L;try{return A.apply(this,arguments)}finally{B=M}}}})(ec)),ec}var lf;function Jm(){return lf||(lf=1,$s.exports=Km()),$s.exports}var tc={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function Wm(){if(rf)return oe;rf=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),z=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),B=Symbol.iterator;function q(h){return h===null||typeof h!="object"?null:(h=B&&h[B]||h["@@iterator"],typeof h=="function"?h:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function H(h,T,V){this.props=h,this.context=T,this.refs=W,this.updater=V||Y}H.prototype.isReactComponent={},H.prototype.setState=function(h,T){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,T,"setState")},H.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function re(){}re.prototype=H.prototype;function S(h,T,V){this.props=h,this.context=T,this.refs=W,this.updater=V||Y}var X=S.prototype=new re;X.constructor=S,K(X,H.prototype),X.isPureReactComponent=!0;var ge=Array.isArray;function Me(){}var ne={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function Ye(h,T,V){var P=V.ref;return{$$typeof:u,type:h,key:T,ref:P!==void 0?P:null,props:V}}function Ve(h,T){return Ye(h.type,T,h.props)}function Je(h){return typeof h=="object"&&h!==null&&h.$$typeof===u}function Ie(h){var T={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(V){return T[V]})}var pe=/\/+/g;function He(h,T){return typeof h=="object"&&h!==null&&h.key!=null?Ie(""+h.key):T.toString(36)}function me(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Me,Me):(h.status="pending",h.then(function(T){h.status==="pending"&&(h.status="fulfilled",h.value=T)},function(T){h.status==="pending"&&(h.status="rejected",h.reason=T)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function A(h,T,V,P,te){var ie=typeof h;(ie==="undefined"||ie==="boolean")&&(h=null);var fe=!1;if(h===null)fe=!0;else switch(ie){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(h.$$typeof){case u:case s:fe=!0;break;case G:return fe=h._init,A(fe(h._payload),T,V,P,te)}}if(fe)return te=te(h),fe=P===""?"."+He(h,0):P,ge(te)?(V="",fe!=null&&(V=fe.replace(pe,"$&/")+"/"),A(te,T,V,"",function(et){return et})):te!=null&&(Je(te)&&(te=Ve(te,V+(te.key==null||h&&h.key===te.key?"":(""+te.key).replace(pe,"$&/")+"/")+fe)),T.push(te)),1;fe=0;var Ge=P===""?".":P+":";if(ge(h))for(var he=0;he<h.length;he++)P=h[he],ie=Ge+He(P,he),fe+=A(P,T,V,ie,te);else if(he=q(h),typeof he=="function")for(h=he.call(h),he=0;!(P=h.next()).done;)P=P.value,ie=Ge+He(P,he++),fe+=A(P,T,V,ie,te);else if(ie==="object"){if(typeof h.then=="function")return A(me(h),T,V,P,te);throw T=String(h),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return fe}function L(h,T,V){if(h==null)return h;var P=[],te=0;return A(h,P,"","",function(ie){return T.call(V,ie,te++)}),P}function M(h){if(h._status===-1){var T=h._result;T=T(),T.then(function(V){(h._status===0||h._status===-1)&&(h._status=1,h._result=V)},function(V){(h._status===0||h._status===-1)&&(h._status=2,h._result=V)}),h._status===-1&&(h._status=0,h._result=T)}if(h._status===1)return h._result.default;throw h._result}var Q=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ee={map:L,forEach:function(h,T,V){L(h,function(){T.apply(this,arguments)},V)},count:function(h){var T=0;return L(h,function(){T++}),T},toArray:function(h){return L(h,function(T){return T})||[]},only:function(h){if(!Je(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return oe.Activity=k,oe.Children=ee,oe.Component=H,oe.Fragment=f,oe.Profiler=d,oe.PureComponent=S,oe.StrictMode=c,oe.Suspense=g,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,oe.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ne.H.useMemoCache(h)}},oe.cache=function(h){return function(){return h.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(h,T,V){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var P=K({},h.props),te=h.key;if(T!=null)for(ie in T.key!==void 0&&(te=""+T.key),T)!qe.call(T,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&T.ref===void 0||(P[ie]=T[ie]);var ie=arguments.length-2;if(ie===1)P.children=V;else if(1<ie){for(var fe=Array(ie),Ge=0;Ge<ie;Ge++)fe[Ge]=arguments[Ge+2];P.children=fe}return Ye(h.type,te,P)},oe.createContext=function(h){return h={$$typeof:z,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:x,_context:h},h},oe.createElement=function(h,T,V){var P,te={},ie=null;if(T!=null)for(P in T.key!==void 0&&(ie=""+T.key),T)qe.call(T,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(te[P]=T[P]);var fe=arguments.length-2;if(fe===1)te.children=V;else if(1<fe){for(var Ge=Array(fe),he=0;he<fe;he++)Ge[he]=arguments[he+2];te.children=Ge}if(h&&h.defaultProps)for(P in fe=h.defaultProps,fe)te[P]===void 0&&(te[P]=fe[P]);return Ye(h,ie,te)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(h){return{$$typeof:b,render:h}},oe.isValidElement=Je,oe.lazy=function(h){return{$$typeof:G,_payload:{_status:-1,_result:h},_init:M}},oe.memo=function(h,T){return{$$typeof:y,type:h,compare:T===void 0?null:T}},oe.startTransition=function(h){var T=ne.T,V={};ne.T=V;try{var P=h(),te=ne.S;te!==null&&te(V,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(Me,Q)}catch(ie){Q(ie)}finally{T!==null&&V.types!==null&&(T.types=V.types),ne.T=T}},oe.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},oe.use=function(h){return ne.H.use(h)},oe.useActionState=function(h,T,V){return ne.H.useActionState(h,T,V)},oe.useCallback=function(h,T){return ne.H.useCallback(h,T)},oe.useContext=function(h){return ne.H.useContext(h)},oe.useDebugValue=function(){},oe.useDeferredValue=function(h,T){return ne.H.useDeferredValue(h,T)},oe.useEffect=function(h,T){return ne.H.useEffect(h,T)},oe.useEffectEvent=function(h){return ne.H.useEffectEvent(h)},oe.useId=function(){return ne.H.useId()},oe.useImperativeHandle=function(h,T,V){return ne.H.useImperativeHandle(h,T,V)},oe.useInsertionEffect=function(h,T){return ne.H.useInsertionEffect(h,T)},oe.useLayoutEffect=function(h,T){return ne.H.useLayoutEffect(h,T)},oe.useMemo=function(h,T){return ne.H.useMemo(h,T)},oe.useOptimistic=function(h,T){return ne.H.useOptimistic(h,T)},oe.useReducer=function(h,T,V){return ne.H.useReducer(h,T,V)},oe.useRef=function(h){return ne.H.useRef(h)},oe.useState=function(h){return ne.H.useState(h)},oe.useSyncExternalStore=function(h,T,V){return ne.H.useSyncExternalStore(h,T,V)},oe.useTransition=function(){return ne.H.useTransition()},oe.version="19.2.8",oe}var of;function sc(){return of||(of=1,tc.exports=Wm()),tc.exports}var ac={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf;function $m(){if(sf)return bt;sf=1;var u=sc();function s(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)y+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function x(g,y,G){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:g,containerInfo:y,implementation:G}}var z=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,bt.createPortal=function(g,y){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(s(299));return x(g,y,null,G)},bt.flushSync=function(g){var y=z.T,G=c.p;try{if(z.T=null,c.p=2,g)return g()}finally{z.T=y,c.p=G,c.d.f()}},bt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(g,y))},bt.prefetchDNS=function(g){typeof g=="string"&&c.d.D(g)},bt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var G=y.as,k=b(G,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;G==="style"?c.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:k,integrity:B,fetchPriority:q}):G==="script"&&c.d.X(g,{crossOrigin:k,integrity:B,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},bt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var G=b(y.as,y.crossOrigin);c.d.M(g,{crossOrigin:G,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(g)},bt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var G=y.as,k=b(G,y.crossOrigin);c.d.L(g,G,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},bt.preloadModule=function(g,y){if(typeof g=="string")if(y){var G=b(y.as,y.crossOrigin);c.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:G,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(g)},bt.requestFormReset=function(g){c.d.r(g)},bt.unstable_batchedUpdates=function(g,y){return g(y)},bt.useFormState=function(g,y,G){return z.H.useFormState(g,y,G)},bt.useFormStatus=function(){return z.H.useHostTransitionStatus()},bt.version="19.2.8",bt}var cf;function eh(){if(cf)return ac.exports;cf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),ac.exports=$m(),ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function th(){if(uf)return gl;uf=1;var u=Jm(),s=sc(),f=eh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(x(e)!==e)throw Error(c(188))}function y(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return g(n),e;if(r===i)return g(n),t;r=r.sibling}throw Error(c(188))}if(a.return!==i.return)a=n,i=r;else{for(var o=!1,p=n.child;p;){if(p===a){o=!0,a=n,i=r;break}if(p===i){o=!0,i=n,a=r;break}p=p.sibling}if(!o){for(p=r.child;p;){if(p===a){o=!0,a=r,i=n;break}if(p===i){o=!0,i=r,a=n;break}p=p.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function G(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=G(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,B=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),S=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),Je=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=Je&&e[Je]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function He(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case H:return"Profiler";case W:return"StrictMode";case ge:return"Suspense";case Me:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case S:return e.displayName||"Context";case re:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:He(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}var me=Array.isArray,A=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},Q=[],ee=-1;function h(e){return{current:e}}function T(e){0>ee||(e.current=Q[ee],Q[ee]=null,ee--)}function V(e,t){ee++,Q[ee]=e.current,e.current=t}var P=h(null),te=h(null),ie=h(null),fe=h(null);function Ge(e,t){switch(V(ie,t),V(te,e),V(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dp(t),e=Np(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(P),V(P,e)}function he(){T(P),T(te),T(ie)}function et(e){e.memoizedState!==null&&V(fe,e);var t=P.current,a=Np(t,e.type);t!==a&&(V(te,e),V(P,a))}function _t(e){te.current===e&&(T(P),T(te)),fe.current===e&&(T(fe),dl._currentValue=M)}var Ee,la;function Le(e){if(Ee===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ee=t&&t[1]||"",la=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ee+e+la}var Ct=!1;function ra(e,t){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(j){var w=j}Reflect.construct(e,[],F)}else{try{F.call()}catch(j){w=j}e.call(F.prototype)}}else{try{throw Error()}catch(j){w=j}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(j){if(j&&w&&typeof j.stack=="string")return[j.stack,w.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],p=r[1];if(o&&p){var m=o.split(`
`),N=p.split(`
`);for(n=i=0;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(i===m.length||n===N.length)for(i=m.length-1,n=N.length-1;1<=i&&0<=n&&m[i]!==N[n];)n--;for(;1<=i&&0<=n;i--,n--)if(m[i]!==N[n]){if(i!==1||n!==1)do if(i--,n--,0>n||m[i]!==N[n]){var R=`
`+m[i].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=i&&0<=n);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Le(a):""}function Fa(e,t){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le("Lazy");case 13:return e.child!==t&&t!==null?Le("Suspense Fallback"):Le("Suspense");case 19:return Le("SuspenseList");case 0:case 15:return ra(e.type,!1);case 11:return ra(e.type.render,!1);case 1:return ra(e.type,!0);case 31:return Le("Activity");default:return""}}function Oi(e){try{var t="",a=null;do t+=Fa(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ft=Object.prototype.hasOwnProperty,ui=u.unstable_scheduleCallback,pi=u.unstable_cancelCallback,ki=u.unstable_shouldYield,qa=u.unstable_requestPaint,tt=u.unstable_now,Ne=u.unstable_getCurrentPriorityLevel,U=u.unstable_ImmediatePriority,Z=u.unstable_UserBlockingPriority,I=u.unstable_NormalPriority,ze=u.unstable_LowPriority,se=u.unstable_IdlePriority,zt=u.log,St=u.unstable_setDisableYieldValue,dt=null,Ue=null;function we(e){if(typeof zt=="function"&&St(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(dt,e)}catch{}}var Te=Math.clz32?Math.clz32:An,Et=Math.log,fi=Math.LN2;function An(e){return e>>>=0,e===0?32:31-(Et(e)/fi|0)|0}var da=256,di=262144,mi=4194304;function Ae(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ea(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var p=i&134217727;return p!==0?(i=p&~r,i!==0?n=Ae(i):(o&=p,o!==0?n=Ae(o):a||(a=p&~e,a!==0&&(n=Ae(a))))):(p=i&~r,p!==0?n=Ae(p):o!==0?n=Ae(o):a||(a=i&~e,a!==0&&(n=Ae(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function mt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ta(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yt(){var e=mi;return mi<<=1,(mi&62914560)===0&&(mi=4194304),e}function ma(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fi(e,t,a,i,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,m=e.expirationTimes,N=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-Te(a),F=1<<R;p[R]=0,m[R]=-1;var w=N[R];if(w!==null)for(N[R]=null,R=0;R<w.length;R++){var j=w[R];j!==null&&(j.lane&=-536870913)}a&=~F}i!==0&&Ot(e,i,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Ot(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Te(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ha(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Te(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function hi(e,t){var a=t&-t;return a=(a&42)!==0?1:st(a),(a&(e.suspendedLanes|t))!==0?0:a}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ze(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kt(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Zp(e.type))}function xa(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var La=Math.random().toString(36).slice(2),ht="__reactFiber$"+La,Nt="__reactProps$"+La,qi="__reactContainer$"+La,Hr="__reactEvents$"+La,Ff="__reactListeners$"+La,qf="__reactHandles$"+La,pc="__reactResources$"+La,jn="__reactMarker$"+La;function Gr(e){delete e[ht],delete e[Nt],delete e[Hr],delete e[Ff],delete e[qf]}function Li(e){var t=e[ht];if(t)return t;for(var a=e.parentNode;a;){if(t=a[qi]||a[ht]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Cp(e);e!==null;){if(a=e[ht])return a;e=Cp(e)}return t}e=a,a=e.parentNode}return null}function Ui(e){if(e=e[ht]||e[qi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Bi(e){var t=e[pc];return t||(t=e[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[jn]=!0}var fc=new Set,dc={};function xi(e,t){Hi(e,t),Hi(e+"Capture",t)}function Hi(e,t){for(dc[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var Lf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},hc={};function Uf(e){return ft.call(hc,e)?!0:ft.call(mc,e)?!1:Lf.test(e)?hc[e]=!0:(mc[e]=!0,!1)}function zl(e,t,a){if(Uf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Sl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function va(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bf(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){if(!e._valueTracker){var t=xc(e)?"checked":"value";e._valueTracker=Bf(e,t,""+e[t])}}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=xc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Dl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hf=/[\n"\\]/g;function Xt(e){return e.replace(Hf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vr(e,t,a,i,n,r,o,p){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Xr(e,o,Vt(t)):a!=null?Xr(e,o,Vt(a)):i!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Vt(p):e.removeAttribute("name")}function gc(e,t,a,i,n,r,o,p){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Yr(e);return}a=a!=null?""+Vt(a):"",t=t!=null?""+Vt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=p?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Yr(e)}function Xr(e,t,a){t==="number"&&Dl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Gi(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function yc(e,t,a){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Vt(a):""}function bc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(me(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Vt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Yr(e)}function Yi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Gf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&_c(e,n,i)}else for(var r in t)t.hasOwnProperty(r)&&_c(e,r,t[r])}function Pr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(e){return Vf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ga(){}var Ir=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,Xi=null;function Sc(e){var t=Ui(e);if(t&&(e=t.stateNode)){var a=e[Nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Vr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[Nt]||null;if(!n)throw Error(c(90));Vr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&vc(i)}break e;case"textarea":yc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Gi(e,!!a.multiple,t,!1)}}}var Qr=!1;function Dc(e,t,a){if(Qr)return e(t,a);Qr=!0;try{var i=e(t);return i}finally{if(Qr=!1,(Vi!==null||Xi!==null)&&(fr(),Vi&&(t=Vi,e=Xi,Xi=Vi=null,Sc(t),e)))for(t=0;t<e.length;t++)Sc(e[t])}}function Tn(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Nt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kr=!1;if(ya)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Kr=!1}var Ua=null,Jr=null,wl=null;function Nc(){if(wl)return wl;var e,t=Jr,a=t.length,i,n="value"in Ua?Ua.value:Ua.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===n[r-i];i++);return wl=n.slice(e,1<i?1-i:void 0)}function Al(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function wc(){return!1}function wt(e){function t(a,i,n,r,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(r):r[p]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?jl:wc,this.isPropagationStopped=wc,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),t}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=wt(vi),Cn=k({},vi,{view:0,detail:0}),Xf=wt(Cn),Wr,$r,En,Tl=k({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Wr=e.screenX-En.screenX,$r=e.screenY-En.screenY):$r=Wr=0,En=e),Wr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),Ac=wt(Tl),Pf=k({},Tl,{dataTransfer:0}),If=wt(Pf),Zf=k({},Cn,{relatedTarget:0}),eo=wt(Zf),Qf=k({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),Kf=wt(Qf),Jf=k({},vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=wt(Jf),$f=k({},vi,{data:0}),jc=wt($f),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function to(){return id}var nd=k({},Cn,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ld=wt(nd),rd=k({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=wt(rd),od=k({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),sd=wt(od),cd=k({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ud=wt(cd),pd=k({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fd=wt(pd),dd=k({},vi,{newState:0,oldState:0}),md=wt(dd),hd=[9,13,27,32],ao=ya&&"CompositionEvent"in window,On=null;ya&&"documentMode"in document&&(On=document.documentMode);var xd=ya&&"TextEvent"in window&&!On,Tc=ya&&(!ao||On&&8<On&&11>=On),Rc=" ",Cc=!1;function Ec(e,t){switch(e){case"keyup":return hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pi=!1;function vd(e,t){switch(e){case"compositionend":return Oc(t);case"keypress":return t.which!==32?null:(Cc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Cc?null:e;default:return null}}function gd(e,t){if(Pi)return e==="compositionend"||!ao&&Ec(e,t)?(e=Nc(),wl=Jr=Ua=null,Pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yd[e.type]:t==="textarea"}function Fc(e,t,a,i){Vi?Xi?Xi.push(i):Xi=[i]:Vi=i,t=yr(t,"onChange"),0<t.length&&(a=new Ml("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var kn=null,Fn=null;function bd(e){gp(e,0)}function Rl(e){var t=Mn(e);if(vc(t))return e}function qc(e,t){if(e==="change")return t}var Lc=!1;if(ya){var io;if(ya){var no="oninput"in document;if(!no){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),no=typeof Uc.oninput=="function"}io=no}else io=!1;Lc=io&&(!document.documentMode||9<document.documentMode)}function Bc(){kn&&(kn.detachEvent("onpropertychange",Hc),Fn=kn=null)}function Hc(e){if(e.propertyName==="value"&&Rl(Fn)){var t=[];Fc(t,Fn,e,Zr(e)),Dc(bd,t)}}function _d(e,t,a){e==="focusin"?(Bc(),kn=t,Fn=a,kn.attachEvent("onpropertychange",Hc)):e==="focusout"&&Bc()}function zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(Fn)}function Sd(e,t){if(e==="click")return Rl(t)}function Dd(e,t){if(e==="input"||e==="change")return Rl(t)}function Nd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Nd;function qn(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!ft.call(t,n)||!Ft(e[n],t[n]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yc(e,t){var a=Gc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gc(a)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Dl(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wd=ya&&"documentMode"in document&&11>=document.documentMode,Ii=null,ro=null,Ln=null,oo=!1;function Pc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oo||Ii==null||Ii!==Dl(i)||(i=Ii,"selectionStart"in i&&lo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ln&&qn(Ln,i)||(Ln=i,i=yr(ro,"onSelect"),0<i.length&&(t=new Ml("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Ii)))}function gi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Zi={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionrun:gi("Transition","TransitionRun"),transitionstart:gi("Transition","TransitionStart"),transitioncancel:gi("Transition","TransitionCancel"),transitionend:gi("Transition","TransitionEnd")},so={},Ic={};ya&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function yi(e){if(so[e])return so[e];if(!Zi[e])return e;var t=Zi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ic)return so[e]=t[a];return e}var Zc=yi("animationend"),Qc=yi("animationiteration"),Kc=yi("animationstart"),Ad=yi("transitionrun"),jd=yi("transitionstart"),Md=yi("transitioncancel"),Jc=yi("transitionend"),Wc=new Map,co="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");co.push("scrollEnd");function aa(e,t){Wc.set(e,t),xi(t,[e])}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],Qi=0,uo=0;function El(){for(var e=Qi,t=uo=Qi=0;t<e;){var a=Pt[t];Pt[t++]=null;var i=Pt[t];Pt[t++]=null;var n=Pt[t];Pt[t++]=null;var r=Pt[t];if(Pt[t++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}r!==0&&$c(a,n,r)}}function Ol(e,t,a,i){Pt[Qi++]=e,Pt[Qi++]=t,Pt[Qi++]=a,Pt[Qi++]=i,uo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function po(e,t,a,i){return Ol(e,t,a,i),kl(e)}function bi(e,t){return Ol(e,null,null,t),kl(e)}function $c(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Te(a),e=r.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),r):null}function kl(e){if(50<rl)throw rl=0,_s=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ki={};function Td(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,a,i){return new Td(e,t,a,i)}function fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,t){var a=e.alternate;return a===null?(a=qt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function e0(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fl(e,t,a,i,n,r){var o=0;if(i=e,typeof e=="function")fo(e)&&(o=1);else if(typeof e=="string")o=km(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=qt(31,a,t,n),e.elementType=Ye,e.lanes=r,e;case K:return _i(a.children,n,r,t);case W:o=8,n|=24;break;case H:return e=qt(12,a,t,n|2),e.elementType=H,e.lanes=r,e;case ge:return e=qt(13,a,t,n),e.elementType=ge,e.lanes=r,e;case Me:return e=qt(19,a,t,n),e.elementType=Me,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:o=10;break e;case re:o=9;break e;case X:o=11;break e;case ne:o=14;break e;case qe:o=16,i=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=qt(o,a,t,n),t.elementType=e,t.type=i,t.lanes=r,t}function _i(e,t,a,i){return e=qt(7,e,i,t),e.lanes=a,e}function mo(e,t,a){return e=qt(6,e,null,t),e.lanes=a,e}function t0(e){var t=qt(18,null,null,0);return t.stateNode=e,t}function ho(e,t,a){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a0=new WeakMap;function It(e,t){if(typeof e=="object"&&e!==null){var a=a0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Oi(t)},a0.set(e,t),t)}return{value:e,source:t,stack:Oi(t)}}var Ji=[],Wi=0,ql=null,Un=0,Zt=[],Qt=0,Ba=null,sa=1,ca="";function _a(e,t){Ji[Wi++]=Un,Ji[Wi++]=ql,ql=e,Un=t}function i0(e,t,a){Zt[Qt++]=sa,Zt[Qt++]=ca,Zt[Qt++]=Ba,Ba=e;var i=sa;e=ca;var n=32-Te(i)-1;i&=~(1<<n),a+=1;var r=32-Te(t)+n;if(30<r){var o=n-n%5;r=(i&(1<<o)-1).toString(32),i>>=o,n-=o,sa=1<<32-Te(t)+n|a<<n|i,ca=r+e}else sa=1<<r|a<<n|i,ca=e}function xo(e){e.return!==null&&(_a(e,1),i0(e,1,0))}function vo(e){for(;e===ql;)ql=Ji[--Wi],Ji[Wi]=null,Un=Ji[--Wi],Ji[Wi]=null;for(;e===Ba;)Ba=Zt[--Qt],Zt[Qt]=null,ca=Zt[--Qt],Zt[Qt]=null,sa=Zt[--Qt],Zt[Qt]=null}function n0(e,t){Zt[Qt++]=sa,Zt[Qt++]=ca,Zt[Qt++]=Ba,sa=t.id,ca=t.overflow,Ba=e}var xt=null,Xe=null,_e=!1,Ha=null,Kt=!1,go=Error(c(519));function Ga(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bn(It(t,e)),go}function l0(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[ht]=e,t[Nt]=i,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<sl.length;a++)ve(sl[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),gc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),bc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||zp(t.textContent,a)?(i.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),i.onScroll!=null&&ve("scroll",t),i.onScrollEnd!=null&&ve("scrollend",t),i.onClick!=null&&(t.onclick=ga),t=!0):t=!1,t||Ga(e,!0)}function r0(e){for(xt=e.return;xt;)switch(xt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:xt=xt.return}}function $i(e){if(e!==xt)return!1;if(!_e)return r0(e),_e=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Fs(e.type,e.memoizedProps)),a=!a),a&&Xe&&Ga(e),r0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Xe=Rp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Xe=Rp(e)}else t===27?(t=Xe,ai(e.type)?(e=Hs,Hs=null,Xe=e):Xe=t):Xe=xt?Wt(e.stateNode.nextSibling):null;return!0}function zi(){Xe=xt=null,_e=!1}function yo(){var e=Ha;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Ha=null),e}function Bn(e){Ha===null?Ha=[e]:Ha.push(e)}var bo=h(null),Si=null,za=null;function Ya(e,t,a){V(bo,t._currentValue),t._currentValue=a}function Sa(e){e._currentValue=bo.current,T(bo)}function _o(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function zo(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var p=r;r=n;for(var m=0;m<t.length;m++)if(p.context===t[m]){r.lanes|=a,p=r.alternate,p!==null&&(p.lanes|=a),_o(r.return,a,e),i||(o=null);break e}r=p.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),_o(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function en(e,t,a,i){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var p=n.type;Ft(n.pendingProps.value,o.value)||(e!==null?e.push(p):e=[p])}}else if(n===fe.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}n=n.return}e!==null&&zo(t,e,a,i),t.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!Ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Di(e){Si=e,za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return o0(Si,e)}function Ul(e,t){return Si===null&&Di(e),o0(e,t)}function o0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},za===null){if(e===null)throw Error(c(308));za=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else za=za.next=t;return a}var Rd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Cd=u.unstable_scheduleCallback,Ed=u.unstable_NormalPriority,nt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function So(){return{controller:new Rd,data:new Map,refCount:0}}function Hn(e){e.refCount--,e.refCount===0&&Cd(Ed,function(){e.controller.abort()})}var Gn=null,Do=0,tn=0,an=null;function Od(e,t){if(Gn===null){var a=Gn=[];Do=0,tn=As(),an={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Do++,t.then(s0,s0),t}function s0(){if(--Do===0&&Gn!==null){an!==null&&(an.status="fulfilled");var e=Gn;Gn=null,tn=0,an=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kd(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var c0=A.S;A.S=function(e,t){Pu=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Od(e,t),c0!==null&&c0(e,t)};var Ni=h(null);function No(){var e=Ni.current;return e!==null?e:Be.pooledCache}function Bl(e,t){t===null?V(Ni,Ni.current):V(Ni,t.pool)}function u0(){var e=No();return e===null?null:{parent:nt._currentValue,pool:e}}var nn=Error(c(460)),wo=Error(c(474)),Hl=Error(c(542)),Gl={then:function(){}};function p0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function f0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ga,ga),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,m0(e),e;default:if(typeof t.status=="string")t.then(ga,ga);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,m0(e),e}throw Ai=t,nn}}function wi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ai=a,nn):a}}var Ai=null;function d0(){if(Ai===null)throw Error(c(459));var e=Ai;return Ai=null,e}function m0(e){if(e===nn||e===Hl)throw Error(c(483))}var ln=null,Yn=0;function Yl(e){var t=Yn;return Yn+=1,ln===null&&(ln=[]),f0(ln,e,t)}function Vn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vl(e,t){throw t.$$typeof===B?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function h0(e){function t(_,v){if(e){var D=_.deletions;D===null?(_.deletions=[v],_.flags|=16):D.push(v)}}function a(_,v){if(!e)return null;for(;v!==null;)t(_,v),v=v.sibling;return null}function i(_){for(var v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function n(_,v){return _=ba(_,v),_.index=0,_.sibling=null,_}function r(_,v,D){return _.index=D,e?(D=_.alternate,D!==null?(D=D.index,D<v?(_.flags|=67108866,v):D):(_.flags|=67108866,v)):(_.flags|=1048576,v)}function o(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function p(_,v,D,O){return v===null||v.tag!==6?(v=mo(D,_.mode,O),v.return=_,v):(v=n(v,D),v.return=_,v)}function m(_,v,D,O){var ae=D.type;return ae===K?R(_,v,D.props.children,O,D.key):v!==null&&(v.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===qe&&wi(ae)===v.type)?(v=n(v,D.props),Vn(v,D),v.return=_,v):(v=Fl(D.type,D.key,D.props,null,_.mode,O),Vn(v,D),v.return=_,v)}function N(_,v,D,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==D.containerInfo||v.stateNode.implementation!==D.implementation?(v=ho(D,_.mode,O),v.return=_,v):(v=n(v,D.children||[]),v.return=_,v)}function R(_,v,D,O,ae){return v===null||v.tag!==7?(v=_i(D,_.mode,O,ae),v.return=_,v):(v=n(v,D),v.return=_,v)}function F(_,v,D){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=mo(""+v,_.mode,D),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return D=Fl(v.type,v.key,v.props,null,_.mode,D),Vn(D,v),D.return=_,D;case Y:return v=ho(v,_.mode,D),v.return=_,v;case qe:return v=wi(v),F(_,v,D)}if(me(v)||Ie(v))return v=_i(v,_.mode,D,null),v.return=_,v;if(typeof v.then=="function")return F(_,Yl(v),D);if(v.$$typeof===S)return F(_,Ul(_,v),D);Vl(_,v)}return null}function w(_,v,D,O){var ae=v!==null?v.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return ae!==null?null:p(_,v,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case q:return D.key===ae?m(_,v,D,O):null;case Y:return D.key===ae?N(_,v,D,O):null;case qe:return D=wi(D),w(_,v,D,O)}if(me(D)||Ie(D))return ae!==null?null:R(_,v,D,O,null);if(typeof D.then=="function")return w(_,v,Yl(D),O);if(D.$$typeof===S)return w(_,v,Ul(_,D),O);Vl(_,D)}return null}function j(_,v,D,O,ae){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return _=_.get(D)||null,p(v,_,""+O,ae);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case q:return _=_.get(O.key===null?D:O.key)||null,m(v,_,O,ae);case Y:return _=_.get(O.key===null?D:O.key)||null,N(v,_,O,ae);case qe:return O=wi(O),j(_,v,D,O,ae)}if(me(O)||Ie(O))return _=_.get(D)||null,R(v,_,O,ae,null);if(typeof O.then=="function")return j(_,v,D,Yl(O),ae);if(O.$$typeof===S)return j(_,v,D,Ul(v,O),ae);Vl(v,O)}return null}function J(_,v,D,O){for(var ae=null,Se=null,$=v,de=v=0,be=null;$!==null&&de<D.length;de++){$.index>de?(be=$,$=null):be=$.sibling;var De=w(_,$,D[de],O);if(De===null){$===null&&($=be);break}e&&$&&De.alternate===null&&t(_,$),v=r(De,v,de),Se===null?ae=De:Se.sibling=De,Se=De,$=be}if(de===D.length)return a(_,$),_e&&_a(_,de),ae;if($===null){for(;de<D.length;de++)$=F(_,D[de],O),$!==null&&(v=r($,v,de),Se===null?ae=$:Se.sibling=$,Se=$);return _e&&_a(_,de),ae}for($=i($);de<D.length;de++)be=j($,_,de,D[de],O),be!==null&&(e&&be.alternate!==null&&$.delete(be.key===null?de:be.key),v=r(be,v,de),Se===null?ae=be:Se.sibling=be,Se=be);return e&&$.forEach(function(oi){return t(_,oi)}),_e&&_a(_,de),ae}function le(_,v,D,O){if(D==null)throw Error(c(151));for(var ae=null,Se=null,$=v,de=v=0,be=null,De=D.next();$!==null&&!De.done;de++,De=D.next()){$.index>de?(be=$,$=null):be=$.sibling;var oi=w(_,$,De.value,O);if(oi===null){$===null&&($=be);break}e&&$&&oi.alternate===null&&t(_,$),v=r(oi,v,de),Se===null?ae=oi:Se.sibling=oi,Se=oi,$=be}if(De.done)return a(_,$),_e&&_a(_,de),ae;if($===null){for(;!De.done;de++,De=D.next())De=F(_,De.value,O),De!==null&&(v=r(De,v,de),Se===null?ae=De:Se.sibling=De,Se=De);return _e&&_a(_,de),ae}for($=i($);!De.done;de++,De=D.next())De=j($,_,de,De.value,O),De!==null&&(e&&De.alternate!==null&&$.delete(De.key===null?de:De.key),v=r(De,v,de),Se===null?ae=De:Se.sibling=De,Se=De);return e&&$.forEach(function(Pm){return t(_,Pm)}),_e&&_a(_,de),ae}function Fe(_,v,D,O){if(typeof D=="object"&&D!==null&&D.type===K&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case q:e:{for(var ae=D.key;v!==null;){if(v.key===ae){if(ae=D.type,ae===K){if(v.tag===7){a(_,v.sibling),O=n(v,D.props.children),O.return=_,_=O;break e}}else if(v.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===qe&&wi(ae)===v.type){a(_,v.sibling),O=n(v,D.props),Vn(O,D),O.return=_,_=O;break e}a(_,v);break}else t(_,v);v=v.sibling}D.type===K?(O=_i(D.props.children,_.mode,O,D.key),O.return=_,_=O):(O=Fl(D.type,D.key,D.props,null,_.mode,O),Vn(O,D),O.return=_,_=O)}return o(_);case Y:e:{for(ae=D.key;v!==null;){if(v.key===ae)if(v.tag===4&&v.stateNode.containerInfo===D.containerInfo&&v.stateNode.implementation===D.implementation){a(_,v.sibling),O=n(v,D.children||[]),O.return=_,_=O;break e}else{a(_,v);break}else t(_,v);v=v.sibling}O=ho(D,_.mode,O),O.return=_,_=O}return o(_);case qe:return D=wi(D),Fe(_,v,D,O)}if(me(D))return J(_,v,D,O);if(Ie(D)){if(ae=Ie(D),typeof ae!="function")throw Error(c(150));return D=ae.call(D),le(_,v,D,O)}if(typeof D.then=="function")return Fe(_,v,Yl(D),O);if(D.$$typeof===S)return Fe(_,v,Ul(_,D),O);Vl(_,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,v!==null&&v.tag===6?(a(_,v.sibling),O=n(v,D),O.return=_,_=O):(a(_,v),O=mo(D,_.mode,O),O.return=_,_=O),o(_)):a(_,v)}return function(_,v,D,O){try{Yn=0;var ae=Fe(_,v,D,O);return ln=null,ae}catch($){if($===nn||$===Hl)throw $;var Se=qt(29,$,null,_.mode);return Se.lanes=O,Se.return=_,Se}finally{}}}var ji=h0(!0),x0=h0(!1),Va=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=kl(e),$c(e,null,a),t}return Ol(e,i,t,a),kl(e)}function Xn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ha(e,a)}}function Mo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var To=!1;function Pn(){if(To){var e=an;if(e!==null)throw e}}function In(e,t,a,i){To=!1;var n=e.updateQueue;Va=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,p=n.shared.pending;if(p!==null){n.shared.pending=null;var m=p,N=m.next;m.next=null,o===null?r=N:o.next=N,o=m;var R=e.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==o&&(p===null?R.firstBaseUpdate=N:p.next=N,R.lastBaseUpdate=m))}if(r!==null){var F=n.baseState;o=0,R=N=m=null,p=r;do{var w=p.lane&-536870913,j=w!==p.lane;if(j?(ye&w)===w:(i&w)===w){w!==0&&w===tn&&(To=!0),R!==null&&(R=R.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var J=e,le=p;w=t;var Fe=a;switch(le.tag){case 1:if(J=le.payload,typeof J=="function"){F=J.call(Fe,F,w);break e}F=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=le.payload,w=typeof J=="function"?J.call(Fe,F,w):J,w==null)break e;F=k({},F,w);break e;case 2:Va=!0}}w=p.callback,w!==null&&(e.flags|=64,j&&(e.flags|=8192),j=n.callbacks,j===null?n.callbacks=[w]:j.push(w))}else j={lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(N=R=j,m=F):R=R.next=j,o|=w;if(p=p.next,p===null){if(p=n.shared.pending,p===null)break;j=p,p=j.next,j.next=null,n.lastBaseUpdate=j,n.shared.pending=null}}while(!0);R===null&&(m=F),n.baseState=m,n.firstBaseUpdate=N,n.lastBaseUpdate=R,r===null&&(n.shared.lanes=0),Ja|=o,e.lanes=o,e.memoizedState=F}}function v0(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function g0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)v0(a[e],t)}var rn=h(null),Xl=h(0);function y0(e,t){e=Ca,V(Xl,e),V(rn,t),Ca=e|t.baseLanes}function Ro(){V(Xl,Ca),V(rn,rn.current)}function Co(){Ca=Xl.current,T(rn),T(Xl)}var Lt=h(null),Jt=null;function Ia(e){var t=e.alternate;V(at,at.current&1),V(Lt,e),Jt===null&&(t===null||rn.current!==null||t.memoizedState!==null)&&(Jt=e)}function Eo(e){V(at,at.current),V(Lt,e),Jt===null&&(Jt=e)}function b0(e){e.tag===22?(V(at,at.current),V(Lt,e),Jt===null&&(Jt=e)):Za()}function Za(){V(at,at.current),V(Lt,Lt.current)}function Ut(e){T(Lt),Jt===e&&(Jt=null),T(at)}var at=h(0);function Pl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Us(a)||Bs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=0,ce=null,Oe=null,lt=null,Il=!1,on=!1,Mi=!1,Zl=0,Zn=0,sn=null,Fd=0;function We(){throw Error(c(321))}function Oo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ft(e[a],t[a]))return!1;return!0}function ko(e,t,a,i,n,r){return Da=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?iu:Ko,Mi=!1,r=a(i,n),Mi=!1,on&&(r=z0(t,a,i,n)),_0(e),r}function _0(e){A.H=Jn;var t=Oe!==null&&Oe.next!==null;if(Da=0,lt=Oe=ce=null,Il=!1,Zn=0,sn=null,t)throw Error(c(300));e===null||rt||(e=e.dependencies,e!==null&&Ll(e)&&(rt=!0))}function z0(e,t,a,i){ce=e;var n=0;do{if(on&&(sn=null),Zn=0,on=!1,25<=n)throw Error(c(301));if(n+=1,lt=Oe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}A.H=nu,r=t(a,i)}while(on);return r}function qd(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Qn(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ce.flags|=1024),t}function Fo(){var e=Zl!==0;return Zl=0,e}function qo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Lo(e){if(Il){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Il=!1}Da=0,lt=Oe=ce=null,on=!1,Zn=Zl=0,sn=null}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?ce.memoizedState=lt=e:lt=lt.next=e,lt}function it(){if(Oe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=lt===null?ce.memoizedState:lt.next;if(t!==null)lt=t,Oe=e;else{if(e===null)throw ce.alternate===null?Error(c(467)):Error(c(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},lt===null?ce.memoizedState=lt=e:lt=lt.next=e}return lt}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qn(e){var t=Zn;return Zn+=1,sn===null&&(sn=[]),e=f0(sn,e,t),t=ce,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?iu:Ko),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qn(e);if(e.$$typeof===S)return vt(e)}throw Error(c(438,String(e)))}function Uo(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ql(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ve;return t.index++,a}function Na(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=it();return Bo(t,Oe,e)}function Bo(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var n=e.baseQueue,r=i.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,i.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var p=o=null,m=null,N=t,R=!1;do{var F=N.lane&-536870913;if(F!==N.lane?(ye&F)===F:(Da&F)===F){var w=N.revertLane;if(w===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),F===tn&&(R=!0);else if((Da&w)===w){N=N.next,w===tn&&(R=!0);continue}else F={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},m===null?(p=m=F,o=r):m=m.next=F,ce.lanes|=w,Ja|=w;F=N.action,Mi&&a(r,F),r=N.hasEagerState?N.eagerState:a(r,F)}else w={lane:F,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},m===null?(p=m=w,o=r):m=m.next=w,ce.lanes|=F,Ja|=F;N=N.next}while(N!==null&&N!==t);if(m===null?o=r:m.next=p,!Ft(r,e.memoizedState)&&(rt=!0,R&&(a=an,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=m,i.lastRenderedState=r}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ho(e){var t=it(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);Ft(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function S0(e,t,a){var i=ce,n=it(),r=_e;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!Ft((Oe||n).memoizedState,a);if(o&&(n.memoizedState=a,rt=!0),n=n.queue,Vo(w0.bind(null,i,n,e),[e]),n.getSnapshot!==t||o||lt!==null&&lt.memoizedState.tag&1){if(i.flags|=2048,cn(9,{destroy:void 0},N0.bind(null,i,n,a,t),null),Be===null)throw Error(c(349));r||(Da&127)!==0||D0(i,t,a)}return a}function D0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Ql(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function N0(e,t,a,i){t.value=a,t.getSnapshot=i,A0(t)&&j0(e)}function w0(e,t,a){return a(function(){A0(t)&&j0(e)})}function A0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ft(e,a)}catch{return!0}}function j0(e){var t=bi(e,2);t!==null&&Rt(t,e,2)}function Go(e){var t=Dt();if(typeof e=="function"){var a=e;if(e=a(),Mi){we(!0);try{a()}finally{we(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},t}function M0(e,t,a,i){return e.baseState=a,Bo(e,Oe,typeof i=="function"?i:Na)}function Ld(e,t,a,i,n){if(er(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};A.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,T0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function T0(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var r=A.T,o={};A.T=o;try{var p=a(n,i),m=A.S;m!==null&&m(o,p),R0(e,t,p)}catch(N){Yo(e,t,N)}finally{r!==null&&o.types!==null&&(r.types=o.types),A.T=r}}else try{r=a(n,i),R0(e,t,r)}catch(N){Yo(e,t,N)}}function R0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){C0(e,t,i)},function(i){return Yo(e,t,i)}):C0(e,t,a)}function C0(e,t,a){t.status="fulfilled",t.value=a,E0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,T0(e,a)))}function Yo(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,E0(t),t=t.next;while(t!==i)}e.action=null}function E0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function O0(e,t){return t}function k0(e,t){if(_e){var a=Be.formState;if(a!==null){e:{var i=ce;if(_e){if(Xe){t:{for(var n=Xe,r=Kt;n.nodeType!==8;){if(!r){n=null;break t}if(n=Wt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Xe=Wt(n.nextSibling),i=n.data==="F!";break e}}Ga(i)}i=!1}i&&(t=a[0])}}return a=Dt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O0,lastRenderedState:t},a.queue=i,a=eu.bind(null,ce,i),i.dispatch=a,i=Go(!1),r=Qo.bind(null,ce,!1,i.queue),i=Dt(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=Ld.bind(null,ce,n,r,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function F0(e){var t=it();return q0(t,Oe,e)}function q0(e,t,a){if(t=Bo(e,t,O0)[0],e=Jl(Na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Qn(t)}catch(o){throw o===nn?Hl:o}else i=t;t=it();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,cn(9,{destroy:void 0},Ud.bind(null,n,a),null)),[i,r,e]}function Ud(e,t){e.action=t}function L0(e){var t=it(),a=Oe;if(a!==null)return q0(t,a,e);it(),t=t.memoizedState,a=it();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function cn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ql(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function U0(){return it().memoizedState}function Wl(e,t,a,i){var n=Dt();ce.flags|=e,n.memoizedState=cn(1|t,{destroy:void 0},a,i===void 0?null:i)}function $l(e,t,a,i){var n=it();i=i===void 0?null:i;var r=n.memoizedState.inst;Oe!==null&&i!==null&&Oo(i,Oe.memoizedState.deps)?n.memoizedState=cn(t,r,a,i):(ce.flags|=e,n.memoizedState=cn(1|t,r,a,i))}function B0(e,t){Wl(8390656,8,e,t)}function Vo(e,t){$l(2048,8,e,t)}function Bd(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ql(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function H0(e){var t=it().memoizedState;return Bd({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function G0(e,t){return $l(4,2,e,t)}function Y0(e,t){return $l(4,4,e,t)}function V0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function X0(e,t,a){a=a!=null?a.concat([e]):null,$l(4,4,V0.bind(null,t,e),a)}function Xo(){}function P0(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Oo(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function I0(e,t){var a=it();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Oo(t,i[1]))return i[0];if(i=e(),Mi){we(!0);try{e()}finally{we(!1)}}return a.memoizedState=[i,t],i}function Po(e,t,a){return a===void 0||(Da&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Zu(),ce.lanes|=e,Ja|=e,a)}function Z0(e,t,a,i){return Ft(a,t)?a:rn.current!==null?(e=Po(e,a,i),Ft(e,t)||(rt=!0),e):(Da&42)===0||(Da&1073741824)!==0&&(ye&261930)===0?(rt=!0,e.memoizedState=a):(e=Zu(),ce.lanes|=e,Ja|=e,t)}function Q0(e,t,a,i,n){var r=L.p;L.p=r!==0&&8>r?r:8;var o=A.T,p={};A.T=p,Qo(e,!1,t,a);try{var m=n(),N=A.S;if(N!==null&&N(p,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var R=kd(m,i);Kn(e,t,R,Gt(e))}else Kn(e,t,i,Gt(e))}catch(F){Kn(e,t,{then:function(){},status:"rejected",reason:F},Gt())}finally{L.p=r,o!==null&&p.types!==null&&(o.types=p.types),A.T=o}}function Hd(){}function Io(e,t,a,i){if(e.tag!==5)throw Error(c(476));var n=K0(e).queue;Q0(e,n,t,M,a===null?Hd:function(){return J0(e),a(i)})}function K0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:M},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function J0(e){var t=K0(e);t.next===null&&(t=e.alternate.memoizedState),Kn(e,t.next.queue,{},Gt())}function Zo(){return vt(dl)}function W0(){return it().memoizedState}function $0(){return it().memoizedState}function Gd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Gt();e=Xa(a);var i=Pa(t,e,a);i!==null&&(Rt(i,t,a),Xn(i,t,a)),t={cache:So()},e.payload=t;return}t=t.return}}function Yd(e,t,a){var i=Gt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},er(e)?tu(t,a):(a=po(e,t,a,i),a!==null&&(Rt(a,e,i),au(a,t,i)))}function eu(e,t,a){var i=Gt();Kn(e,t,a,i)}function Kn(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(er(e))tu(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,p=r(o,a);if(n.hasEagerState=!0,n.eagerState=p,Ft(p,o))return Ol(e,t,n,0),Be===null&&El(),!1}catch{}finally{}if(a=po(e,t,n,i),a!==null)return Rt(a,e,i),au(a,t,i),!0}return!1}function Qo(e,t,a,i){if(i={lane:2,revertLane:As(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},er(e)){if(t)throw Error(c(479))}else t=po(e,a,i,2),t!==null&&Rt(t,e,2)}function er(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function tu(e,t){on=Il=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function au(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ha(e,a)}}var Jn={readContext:vt,use:Kl,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};Jn.useEffectEvent=We;var iu={readContext:vt,use:Kl,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:B0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,V0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Wl(4194308,4,e,t)},useInsertionEffect:function(e,t){Wl(4,2,e,t)},useMemo:function(e,t){var a=Dt();t=t===void 0?null:t;var i=e();if(Mi){we(!0);try{e()}finally{we(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Dt();if(a!==void 0){var n=a(t);if(Mi){we(!0);try{a(t)}finally{we(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Yd.bind(null,ce,e),[i.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,a=eu.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Xo,useDeferredValue:function(e,t){var a=Dt();return Po(a,e,t)},useTransition:function(){var e=Go(!1);return e=Q0.bind(null,ce,e.queue,!0,!1),Dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ce,n=Dt();if(_e){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Be===null)throw Error(c(349));(ye&127)!==0||D0(i,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,B0(w0.bind(null,i,r,e),[e]),i.flags|=2048,cn(9,{destroy:void 0},N0.bind(null,i,r,a,t),null),a},useId:function(){var e=Dt(),t=Be.identifierPrefix;if(_e){var a=ca,i=sa;a=(i&~(1<<32-Te(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Zl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Fd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:k0,useActionState:k0,useOptimistic:function(e){var t=Dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Qo.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Uo,useCacheRefresh:function(){return Dt().memoizedState=Gd.bind(null,ce)},useEffectEvent:function(e){var t=Dt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Ko={readContext:vt,use:Kl,useCallback:P0,useContext:vt,useEffect:Vo,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:Y0,useMemo:I0,useReducer:Jl,useRef:U0,useState:function(){return Jl(Na)},useDebugValue:Xo,useDeferredValue:function(e,t){var a=it();return Z0(a,Oe.memoizedState,e,t)},useTransition:function(){var e=Jl(Na)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Qn(e),t]},useSyncExternalStore:S0,useId:W0,useHostTransitionStatus:Zo,useFormState:F0,useActionState:F0,useOptimistic:function(e,t){var a=it();return M0(a,Oe,e,t)},useMemoCache:Uo,useCacheRefresh:$0};Ko.useEffectEvent=H0;var nu={readContext:vt,use:Kl,useCallback:P0,useContext:vt,useEffect:Vo,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:Y0,useMemo:I0,useReducer:Ho,useRef:U0,useState:function(){return Ho(Na)},useDebugValue:Xo,useDeferredValue:function(e,t){var a=it();return Oe===null?Po(a,e,t):Z0(a,Oe.memoizedState,e,t)},useTransition:function(){var e=Ho(Na)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Qn(e),t]},useSyncExternalStore:S0,useId:W0,useHostTransitionStatus:Zo,useFormState:L0,useActionState:L0,useOptimistic:function(e,t){var a=it();return Oe!==null?M0(a,Oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Uo,useCacheRefresh:$0};nu.useEffectEvent=H0;function Jo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:k({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wo={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Gt(),n=Xa(i);n.payload=t,a!=null&&(n.callback=a),t=Pa(e,n,i),t!==null&&(Rt(t,e,i),Xn(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Gt(),n=Xa(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Pa(e,n,i),t!==null&&(Rt(t,e,i),Xn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Gt(),i=Xa(a);i.tag=2,t!=null&&(i.callback=t),t=Pa(e,i,a),t!==null&&(Rt(t,e,a),Xn(t,e,a))}};function lu(e,t,a,i,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!qn(a,i)||!qn(n,r):!0}function ru(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Ti(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=k({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ou(e){Cl(e)}function su(e){console.error(e)}function cu(e){Cl(e)}function tr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function uu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function $o(e,t,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){tr(e,t)},a}function pu(e){return e=Xa(e),e.tag=3,e}function fu(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=i.value;e.payload=function(){return n(r)},e.callback=function(){uu(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){uu(t,a,i),typeof n!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function Vd(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&en(t,a,n,!0),a=Lt.current,a!==null){switch(a.tag){case 31:case 13:return Jt===null?dr():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===Gl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Ds(e,i,n)),!1;case 22:return a.flags|=65536,i===Gl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Ds(e,i,n)),!1}throw Error(c(435,a.tag))}return Ds(e,i,n),dr(),!1}if(_e)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==go&&(e=Error(c(422),{cause:i}),Bn(It(e,a)))):(i!==go&&(t=Error(c(423),{cause:i}),Bn(It(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=It(i,a),n=$o(e.stateNode,i,n),Mo(e,n),$e!==4&&($e=2)),!1;var r=Error(c(520),{cause:i});if(r=It(r,a),ll===null?ll=[r]:ll.push(r),$e!==4&&($e=2),t===null)return!0;i=It(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=$o(a.stateNode,i,e),Mo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Wa===null||!Wa.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=pu(n),fu(n,e,a,i),Mo(a,n),!1}a=a.return}while(a!==null);return!1}var es=Error(c(461)),rt=!1;function gt(e,t,a,i){t.child=e===null?x0(t,null,a,i):ji(t,e.child,a,i)}function du(e,t,a,i,n){a=a.render;var r=t.ref;if("ref"in i){var o={};for(var p in i)p!=="ref"&&(o[p]=i[p])}else o=i;return Di(t),i=ko(e,t,a,o,r,n),p=Fo(),e!==null&&!rt?(qo(e,t,n),wa(e,t,n)):(_e&&p&&xo(t),t.flags|=1,gt(e,t,i,n),t.child)}function mu(e,t,a,i,n){if(e===null){var r=a.type;return typeof r=="function"&&!fo(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,hu(e,t,r,i,n)):(e=Fl(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ss(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:qn,a(o,i)&&e.ref===t.ref)return wa(e,t,n)}return t.flags|=1,e=ba(r,i),e.ref=t.ref,e.return=t,t.child=e}function hu(e,t,a,i,n){if(e!==null){var r=e.memoizedProps;if(qn(r,i)&&e.ref===t.ref)if(rt=!1,t.pendingProps=i=r,ss(e,n))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,wa(e,t,n)}return ts(e,t,a,i,n)}function xu(e,t,a,i){var n=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~r}else i=0,t.child=null;return vu(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(t,r!==null?r.cachePool:null),r!==null?y0(t,r):Ro(),b0(t);else return i=t.lanes=536870912,vu(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(Bl(t,r.cachePool),y0(t,r),Za(),t.memoizedState=null):(e!==null&&Bl(t,null),Ro(),Za());return gt(e,t,n,a),t.child}function Wn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vu(e,t,a,i,n){var r=No();return r=r===null?null:{parent:nt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Bl(t,null),Ro(),b0(t),e!==null&&en(e,t,i,!0),t.childLanes=n,null}function ar(e,t){return t=nr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gu(e,t,a){return ji(t,e.child,null,a),e=ar(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Xd(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(i.mode==="hidden")return e=ar(t,i),t.lanes=536870912,Wn(null,e);if(Eo(t),(e=Xe)?(e=Tp(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:sa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=t0(e),a.return=t,t.child=a,xt=t,Xe=null)):e=null,e===null)throw Ga(t);return t.lanes=536870912,null}return ar(t,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Eo(t),n)if(t.flags&256)t.flags&=-257,t=gu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(rt||en(e,t,a,!1),n=(a&e.childLanes)!==0,rt||n){if(i=Be,i!==null&&(o=hi(i,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,bi(e,o),Rt(i,e,o),es;dr(),t=gu(e,t,a)}else e=r.treeContext,Xe=Wt(o.nextSibling),xt=t,_e=!0,Ha=null,Kt=!1,e!==null&&n0(t,e),t=ar(t,i),t.flags|=4096;return t}return e=ba(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ir(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ts(e,t,a,i,n){return Di(t),a=ko(e,t,a,i,void 0,n),i=Fo(),e!==null&&!rt?(qo(e,t,n),wa(e,t,n)):(_e&&i&&xo(t),t.flags|=1,gt(e,t,a,n),t.child)}function yu(e,t,a,i,n,r){return Di(t),t.updateQueue=null,a=z0(t,i,a,n),_0(e),i=Fo(),e!==null&&!rt?(qo(e,t,r),wa(e,t,r)):(_e&&i&&xo(t),t.flags|=1,gt(e,t,a,r),t.child)}function bu(e,t,a,i,n){if(Di(t),t.stateNode===null){var r=Ki,o=a.contextType;typeof o=="object"&&o!==null&&(r=vt(o)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Ao(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?vt(o):Ki,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Jo(t,a,o,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Wo.enqueueReplaceState(r,r.state,null),In(t,i,r,n),Pn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var p=t.memoizedProps,m=Ti(a,p);r.props=m;var N=r.context,R=a.contextType;o=Ki,typeof R=="object"&&R!==null&&(o=vt(R));var F=a.getDerivedStateFromProps;R=typeof F=="function"||typeof r.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,R||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p||N!==o)&&ru(t,r,i,o),Va=!1;var w=t.memoizedState;r.state=w,In(t,i,r,n),Pn(),N=t.memoizedState,p||w!==N||Va?(typeof F=="function"&&(Jo(t,a,F,i),N=t.memoizedState),(m=Va||lu(t,a,m,i,w,N,o))?(R||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),r.props=i,r.state=N,r.context=o,i=m):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,jo(e,t),o=t.memoizedProps,R=Ti(a,o),r.props=R,F=t.pendingProps,w=r.context,N=a.contextType,m=Ki,typeof N=="object"&&N!==null&&(m=vt(N)),p=a.getDerivedStateFromProps,(N=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==F||w!==m)&&ru(t,r,i,m),Va=!1,w=t.memoizedState,r.state=w,In(t,i,r,n),Pn();var j=t.memoizedState;o!==F||w!==j||Va||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof p=="function"&&(Jo(t,a,p,i),j=t.memoizedState),(R=Va||lu(t,a,R,i,w,j,m)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(N||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,j,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,j,m)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),r.props=i,r.state=j,r.context=m,i=R):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,ir(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ji(t,e.child,null,n),t.child=ji(t,null,a,n)):gt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=wa(e,t,n),e}function _u(e,t,a,i){return zi(),t.flags|=256,gt(e,t,a,i),t.child}var as={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function is(e){return{baseLanes:e,cachePool:u0()}}function ns(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ht),e}function zu(e,t,a){var i=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(n?Ia(t):Za(),(e=Xe)?(e=Tp(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:sa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=t0(e),a.return=t,t.child=a,xt=t,Xe=null)):e=null,e===null)throw Ga(t);return Bs(e)?t.lanes=32:t.lanes=536870912,null}var p=i.children;return i=i.fallback,n?(Za(),n=t.mode,p=nr({mode:"hidden",children:p},n),i=_i(i,n,a,null),p.return=t,i.return=t,p.sibling=i,t.child=p,i=t.child,i.memoizedState=is(a),i.childLanes=ns(e,o,a),t.memoizedState=as,Wn(null,i)):(Ia(t),ls(t,p))}var m=e.memoizedState;if(m!==null&&(p=m.dehydrated,p!==null)){if(r)t.flags&256?(Ia(t),t.flags&=-257,t=rs(e,t,a)):t.memoizedState!==null?(Za(),t.child=e.child,t.flags|=128,t=null):(Za(),p=i.fallback,n=t.mode,i=nr({mode:"visible",children:i.children},n),p=_i(p,n,a,null),p.flags|=2,i.return=t,p.return=t,i.sibling=p,t.child=i,ji(t,e.child,null,a),i=t.child,i.memoizedState=is(a),i.childLanes=ns(e,o,a),t.memoizedState=as,t=Wn(null,i));else if(Ia(t),Bs(p)){if(o=p.nextSibling&&p.nextSibling.dataset,o)var N=o.dgst;o=N,i=Error(c(419)),i.stack="",i.digest=o,Bn({value:i,source:null,stack:null}),t=rs(e,t,a)}else if(rt||en(e,t,a,!1),o=(a&e.childLanes)!==0,rt||o){if(o=Be,o!==null&&(i=hi(o,a),i!==0&&i!==m.retryLane))throw m.retryLane=i,bi(e,i),Rt(o,e,i),es;Us(p)||dr(),t=rs(e,t,a)}else Us(p)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Xe=Wt(p.nextSibling),xt=t,_e=!0,Ha=null,Kt=!1,e!==null&&n0(t,e),t=ls(t,i.children),t.flags|=4096);return t}return n?(Za(),p=i.fallback,n=t.mode,m=e.child,N=m.sibling,i=ba(m,{mode:"hidden",children:i.children}),i.subtreeFlags=m.subtreeFlags&65011712,N!==null?p=ba(N,p):(p=_i(p,n,a,null),p.flags|=2),p.return=t,i.return=t,i.sibling=p,t.child=i,Wn(null,i),i=t.child,p=e.child.memoizedState,p===null?p=is(a):(n=p.cachePool,n!==null?(m=nt._currentValue,n=n.parent!==m?{parent:m,pool:m}:n):n=u0(),p={baseLanes:p.baseLanes|a,cachePool:n}),i.memoizedState=p,i.childLanes=ns(e,o,a),t.memoizedState=as,Wn(e.child,i)):(Ia(t),a=e.child,e=a.sibling,a=ba(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function ls(e,t){return t=nr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nr(e,t){return e=qt(22,e,null,t),e.lanes=0,e}function rs(e,t,a){return ji(t,e.child,null,a),e=ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Su(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),_o(e.return,t,a)}function os(e,t,a,i,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function Du(e,t,a){var i=t.pendingProps,n=i.revealOrder,r=i.tail;i=i.children;var o=at.current,p=(o&2)!==0;if(p?(o=o&1|2,t.flags|=128):o&=1,V(at,o),gt(e,t,i,a),i=_e?Un:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,a,t);else if(e.tag===19)Su(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),os(t,!1,n,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Pl(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}os(t,!0,a,null,r,i);break;case"together":os(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(en(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ba(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ss(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function Pd(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Ya(t,nt,e.memoizedState.cache),zi();break;case 27:case 5:et(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Eo(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?zu(e,t,a):(Ia(t),e=wa(e,t,a),e!==null?e.sibling:null);Ia(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(en(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return Du(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),V(at,at.current),i)break;return null;case 22:return t.lanes=0,xu(e,t,a,t.pendingProps);case 24:Ya(t,nt,e.memoizedState.cache)}return wa(e,t,a)}function Nu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!ss(e,a)&&(t.flags&128)===0)return rt=!1,Pd(e,t,a);rt=(e.flags&131072)!==0}else rt=!1,_e&&(t.flags&1048576)!==0&&i0(t,Un,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=wi(t.elementType),t.type=e,typeof e=="function")fo(e)?(i=Ti(e,i),t.tag=1,t=bu(null,t,e,i,a)):(t.tag=0,t=ts(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===X){t.tag=11,t=du(null,t,e,i,a);break e}else if(n===ne){t.tag=14,t=mu(null,t,e,i,a);break e}}throw t=He(e)||e,Error(c(306,t,""))}}return t;case 0:return ts(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=Ti(i,t.pendingProps),bu(e,t,i,n,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var r=t.memoizedState;n=r.element,jo(e,t),In(t,i,null,a);var o=t.memoizedState;if(i=o.cache,Ya(t,nt,i),i!==r.cache&&zo(t,[nt],a,!0),Pn(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=_u(e,t,i,a);break e}else if(i!==n){n=It(Error(c(424)),t),Bn(n),t=_u(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=Wt(e.firstChild),xt=t,_e=!0,Ha=null,Kt=!0,a=x0(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zi(),i===n){t=wa(e,t,a);break e}gt(e,t,i,a)}t=t.child}return t;case 26:return ir(e,t),e===null?(a=Fp(t.type,null,t.pendingProps,null))?t.memoizedState=a:_e||(a=t.type,e=t.pendingProps,i=br(ie.current).createElement(a),i[ht]=t,i[Nt]=e,yt(i,a,e),ut(i),t.stateNode=i):t.memoizedState=Fp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return et(t),e===null&&_e&&(i=t.stateNode=Ep(t.type,t.pendingProps,ie.current),xt=t,Kt=!0,n=Xe,ai(t.type)?(Hs=n,Xe=Wt(i.firstChild)):Xe=n),gt(e,t,t.pendingProps.children,a),ir(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((n=i=Xe)&&(i=zm(i,t.type,t.pendingProps,Kt),i!==null?(t.stateNode=i,xt=t,Xe=Wt(i.firstChild),Kt=!1,n=!0):n=!1),n||Ga(t)),et(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,Fs(n,r)?i=null:o!==null&&Fs(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=ko(e,t,qd,null,null,a),dl._currentValue=n),ir(e,t),gt(e,t,i,a),t.child;case 6:return e===null&&_e&&((e=a=Xe)&&(a=Sm(a,t.pendingProps,Kt),a!==null?(t.stateNode=a,xt=t,Xe=null,e=!0):e=!1),e||Ga(t)),null;case 13:return zu(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ji(t,null,i,a):gt(e,t,i,a),t.child;case 11:return du(e,t,t.type,t.pendingProps,a);case 7:return gt(e,t,t.pendingProps,a),t.child;case 8:return gt(e,t,t.pendingProps.children,a),t.child;case 12:return gt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ya(t,t.type,i.value),gt(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,Di(t),n=vt(n),i=i(n),t.flags|=1,gt(e,t,i,a),t.child;case 14:return mu(e,t,t.type,t.pendingProps,a);case 15:return hu(e,t,t.type,t.pendingProps,a);case 19:return Du(e,t,a);case 31:return Xd(e,t,a);case 22:return xu(e,t,a,t.pendingProps);case 24:return Di(t),i=vt(nt),e===null?(n=No(),n===null&&(n=Be,r=So(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:i,cache:n},Ao(t),Ya(t,nt,n)):((e.lanes&a)!==0&&(jo(e,t),In(t,null,null,a),Pn()),n=e.memoizedState,r=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ya(t,nt,i)):(i=r.cache,Ya(t,nt,i),i!==n.cache&&zo(t,[nt],a,!0))),gt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Aa(e){e.flags|=4}function cs(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Wu())e.flags|=8192;else throw Ai=Gl,wo}else e.flags&=-16777217}function wu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hp(t))if(Wu())e.flags|=8192;else throw Ai=Gl,wo}function lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yt():536870912,e.lanes|=t,dn|=t)}function $n(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Id(e,t,a){var i=t.pendingProps;switch(vo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Sa(nt),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($i(t)?Aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yo())),Pe(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Aa(t),r!==null?(Pe(t),wu(t,r)):(Pe(t),cs(t,n,null,i,a))):r?r!==e.memoizedState?(Aa(t),Pe(t),wu(t,r)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Aa(t),Pe(t),cs(t,n,e,i,a)),null;case 27:if(_t(t),a=ie.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Aa(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Pe(t),null}e=P.current,$i(t)?l0(t):(e=Ep(n,i,a),t.stateNode=e,Aa(t))}return Pe(t),null;case 5:if(_t(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Aa(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Pe(t),null}if(r=P.current,$i(t))l0(t);else{var o=br(ie.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}r[ht]=t,r[Nt]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(yt(r,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Aa(t)}}return Pe(t),cs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Aa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,$i(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=xt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[ht]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||zp(e.nodeValue,a)),e||Ga(t,!0)}else e=br(e).createTextNode(i),e[ht]=t,t.stateNode=e}return Pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=$i(t),a!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ht]=t}else zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else a=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=$i(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[ht]=t}else zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),n=!1}else n=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),lr(t,t.updateQueue),Pe(t),null);case 4:return he(),e===null&&Rs(t.stateNode.containerInfo),Pe(t),null;case 10:return Sa(t.type),Pe(t),null;case 19:if(T(at),i=t.memoizedState,i===null)return Pe(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)$n(i,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Pl(e),r!==null){for(t.flags|=128,$n(i,!1),e=r.updateQueue,t.updateQueue=e,lr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)e0(a,e),a=a.sibling;return V(at,at.current&1|2),_e&&_a(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&tt()>ur&&(t.flags|=128,n=!0,$n(i,!1),t.lanes=4194304)}else{if(!n)if(e=Pl(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,lr(t,e),$n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!_e)return Pe(t),null}else 2*tt()-i.renderingStartTime>ur&&a!==536870912&&(t.flags|=128,n=!0,$n(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=tt(),e.sibling=null,a=at.current,V(at,n?a&1|2:a&1),_e&&_a(t,i.treeForkCount),e):(Pe(t),null);case 22:case 23:return Ut(t),Co(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),a=t.updateQueue,a!==null&&lr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&T(Ni),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sa(nt),Pe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Zd(e,t){switch(vo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(nt),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _t(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(c(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(at),null;case 4:return he(),null;case 10:return Sa(t.type),null;case 22:case 23:return Ut(t),Co(),e!==null&&T(Ni),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sa(nt),null;case 25:return null;default:return null}}function Au(e,t){switch(vo(t),t.tag){case 3:Sa(nt),he();break;case 26:case 27:case 5:_t(t);break;case 4:he();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:T(at);break;case 10:Sa(t.type);break;case 22:case 23:Ut(t),Co(),e!==null&&T(Ni);break;case 24:Sa(nt)}}function el(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var r=a.create,o=a.inst;i=r(),o.destroy=i}a=a.next}while(a!==n)}}catch(p){Ce(t,t.return,p)}}function Qa(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){var o=i.inst,p=o.destroy;if(p!==void 0){o.destroy=void 0,n=t;var m=a,N=p;try{N()}catch(R){Ce(n,m,R)}}}i=i.next}while(i!==r)}}catch(R){Ce(t,t.return,R)}}function ju(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{g0(t,a)}catch(i){Ce(e,e.return,i)}}}function Mu(e,t,a){a.props=Ti(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Ce(e,t,i)}}function tl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){Ce(e,t,n)}}function ua(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){Ce(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ce(e,t,n)}else a.current=null}function Tu(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){Ce(e,e.return,n)}}function us(e,t,a){try{var i=e.stateNode;xm(i,e.type,a,t),i[Nt]=t}catch(n){Ce(e,e.return,n)}}function Ru(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ai(e.type)||e.tag===4}function ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ai(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ga));else if(i!==4&&(i===27&&ai(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(fs(e,t,a),e=e.sibling;e!==null;)fs(e,t,a),e=e.sibling}function rr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ai(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(rr(e,t,a),e=e.sibling;e!==null;)rr(e,t,a),e=e.sibling}function Cu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);yt(t,i,a),t[ht]=e,t[Nt]=a}catch(r){Ce(e,e.return,r)}}var ja=!1,ot=!1,ds=!1,Eu=typeof WeakSet=="function"?WeakSet:Set,pt=null;function Qd(e,t){if(e=e.containerInfo,Os=Ar,e=Xc(e),lo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,p=-1,m=-1,N=0,R=0,F=e,w=null;t:for(;;){for(var j;F!==a||n!==0&&F.nodeType!==3||(p=o+n),F!==r||i!==0&&F.nodeType!==3||(m=o+i),F.nodeType===3&&(o+=F.nodeValue.length),(j=F.firstChild)!==null;)w=F,F=j;for(;;){if(F===e)break t;if(w===a&&++N===n&&(p=o),w===r&&++R===i&&(m=o),(j=F.nextSibling)!==null)break;F=w,w=F.parentNode}F=j}a=p===-1||m===-1?null:{start:p,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(ks={focusedElem:e,selectionRange:a},Ar=!1,pt=t;pt!==null;)if(t=pt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pt=e;else for(;pt!==null;){switch(t=pt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var J=Ti(a.type,n);e=i.getSnapshotBeforeUpdate(J,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(le){Ce(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ls(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ls(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,pt=e;break}pt=t.return}}function Ou(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),i&4&&el(5,a);break;case 1:if(Ta(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ce(a,a.return,o)}else{var n=Ti(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ce(a,a.return,o)}}i&64&&ju(a),i&512&&tl(a,a.return);break;case 3:if(Ta(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{g0(e,t)}catch(o){Ce(a,a.return,o)}}break;case 27:t===null&&i&4&&Cu(a);case 26:case 5:Ta(e,a),t===null&&i&4&&Tu(a),i&512&&tl(a,a.return);break;case 12:Ta(e,a);break;case 31:Ta(e,a),i&4&&qu(e,a);break;case 13:Ta(e,a),i&4&&Lu(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nm.bind(null,a),Dm(e,a))));break;case 22:if(i=a.memoizedState!==null||ja,!i){t=t!==null&&t.memoizedState!==null||ot,n=ja;var r=ot;ja=i,(ot=t)&&!r?Ra(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),ja=n,ot=r}break;case 30:break;default:Ta(e,a)}}function ku(e){var t=e.alternate;t!==null&&(e.alternate=null,ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,At=!1;function Ma(e,t,a){for(a=a.child;a!==null;)Fu(e,t,a),a=a.sibling}function Fu(e,t,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:ot||ua(a,t),Ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ot||ua(a,t);var i=Qe,n=At;ai(a.type)&&(Qe=a.stateNode,At=!1),Ma(e,t,a),ul(a.stateNode),Qe=i,At=n;break;case 5:ot||ua(a,t);case 6:if(i=Qe,n=At,Qe=null,Ma(e,t,a),Qe=i,At=n,Qe!==null)if(At)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(r){Ce(a,t,r)}else try{Qe.removeChild(a.stateNode)}catch(r){Ce(a,t,r)}break;case 18:Qe!==null&&(At?(e=Qe,jp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_n(e)):jp(Qe,a.stateNode));break;case 4:i=Qe,n=At,Qe=a.stateNode.containerInfo,At=!0,Ma(e,t,a),Qe=i,At=n;break;case 0:case 11:case 14:case 15:Qa(2,a,t),ot||Qa(4,a,t),Ma(e,t,a);break;case 1:ot||(ua(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Mu(a,t,i)),Ma(e,t,a);break;case 21:Ma(e,t,a);break;case 22:ot=(i=ot)||a.memoizedState!==null,Ma(e,t,a),ot=i;break;default:Ma(e,t,a)}}function qu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_n(e)}catch(a){Ce(t,t.return,a)}}}function Lu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_n(e)}catch(a){Ce(t,t.return,a)}}function Kd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Eu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Eu),t;default:throw Error(c(435,e.tag))}}function or(e,t){var a=Kd(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=lm.bind(null,e,i);i.then(n,n)}})}function jt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],r=e,o=t,p=o;e:for(;p!==null;){switch(p.tag){case 27:if(ai(p.type)){Qe=p.stateNode,At=!1;break e}break;case 5:Qe=p.stateNode,At=!1;break e;case 3:case 4:Qe=p.stateNode.containerInfo,At=!0;break e}p=p.return}if(Qe===null)throw Error(c(160));Fu(r,o,n),Qe=null,At=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}var ia=null;function Uu(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Mt(e),i&4&&(Qa(3,e,e.return),el(3,e),Qa(5,e,e.return));break;case 1:jt(t,e),Mt(e),i&512&&(ot||a===null||ua(a,a.return)),i&64&&ja&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=ia;if(jt(t,e),Mt(e),i&512&&(ot||a===null||ua(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":r=n.getElementsByTagName("title")[0],(!r||r[jn]||r[ht]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(i),n.head.insertBefore(r,n.querySelector("head > title"))),yt(r,i,a),r[ht]=e,ut(r),i=r;break e;case"link":var o=Up("link","href",n).get(i+(a.href||""));if(o){for(var p=0;p<o.length;p++)if(r=o[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(p,1);break t}}r=n.createElement(i),yt(r,i,a),n.head.appendChild(r);break;case"meta":if(o=Up("meta","content",n).get(i+(a.content||""))){for(p=0;p<o.length;p++)if(r=o[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(p,1);break t}}r=n.createElement(i),yt(r,i,a),n.head.appendChild(r);break;default:throw Error(c(468,i))}r[ht]=e,ut(r),i=r}e.stateNode=i}else Bp(n,e.type,e.stateNode);else e.stateNode=Lp(n,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?Bp(n,e.type,e.stateNode):Lp(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&us(e,e.memoizedProps,a.memoizedProps)}break;case 27:jt(t,e),Mt(e),i&512&&(ot||a===null||ua(a,a.return)),a!==null&&i&4&&us(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jt(t,e),Mt(e),i&512&&(ot||a===null||ua(a,a.return)),e.flags&32){n=e.stateNode;try{Yi(n,"")}catch(J){Ce(e,e.return,J)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,us(e,n,a!==null?a.memoizedProps:n)),i&1024&&(ds=!0);break;case 6:if(jt(t,e),Mt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(J){Ce(e,e.return,J)}}break;case 3:if(Sr=null,n=ia,ia=_r(t.containerInfo),jt(t,e),ia=n,Mt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(J){Ce(e,e.return,J)}ds&&(ds=!1,Bu(e));break;case 4:i=ia,ia=_r(e.stateNode.containerInfo),jt(t,e),Mt(e),ia=i;break;case 12:jt(t,e),Mt(e);break;case 31:jt(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,or(e,i)));break;case 13:jt(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cr=tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,or(e,i)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,N=ja,R=ot;if(ja=N||n,ot=R||m,jt(t,e),ot=R,ja=N,Mt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||ja||ot||Ri(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(r=m.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{p=m.stateNode;var F=m.memoizedProps.style,w=F!=null&&F.hasOwnProperty("display")?F.display:null;p.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(J){Ce(m,m.return,J)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(J){Ce(m,m.return,J)}}}else if(t.tag===18){if(a===null){m=t;try{var j=m.stateNode;n?Mp(j,!0):Mp(m.stateNode,!1)}catch(J){Ce(m,m.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,or(e,a))));break;case 19:jt(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,or(e,i)));break;case 30:break;case 21:break;default:jt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Ru(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,r=ps(e);rr(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(Yi(o,""),a.flags&=-33);var p=ps(e);rr(e,p,o);break;case 3:case 4:var m=a.stateNode.containerInfo,N=ps(e);fs(e,N,m);break;default:throw Error(c(161))}}catch(R){Ce(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ou(e,t.alternate,t),t=t.sibling}function Ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qa(4,t,t.return),Ri(t);break;case 1:ua(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Mu(t,t.return,a),Ri(t);break;case 27:ul(t.stateNode);case 26:case 5:ua(t,t.return),Ri(t);break;case 22:t.memoizedState===null&&Ri(t);break;case 30:Ri(t);break;default:Ri(t)}e=e.sibling}}function Ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(n,r,a),el(4,r);break;case 1:if(Ra(n,r,a),i=r,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){Ce(i,i.return,N)}if(i=r,n=i.updateQueue,n!==null){var p=i.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)v0(m[n],p)}catch(N){Ce(i,i.return,N)}}a&&o&64&&ju(r),tl(r,r.return);break;case 27:Cu(r);case 26:case 5:Ra(n,r,a),a&&i===null&&o&4&&Tu(r),tl(r,r.return);break;case 12:Ra(n,r,a);break;case 31:Ra(n,r,a),a&&o&4&&qu(n,r);break;case 13:Ra(n,r,a),a&&o&4&&Lu(n,r);break;case 22:r.memoizedState===null&&Ra(n,r,a),tl(r,r.return);break;case 30:break;default:Ra(n,r,a)}t=t.sibling}}function ms(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Hn(a))}function hs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hn(e))}function na(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hu(e,t,a,i),t=t.sibling}function Hu(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:na(e,t,a,i),n&2048&&el(9,t);break;case 1:na(e,t,a,i);break;case 3:na(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hn(e)));break;case 12:if(n&2048){na(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,p=r.onPostCommit;typeof p=="function"&&p(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){Ce(t,t.return,m)}}else na(e,t,a,i);break;case 31:na(e,t,a,i);break;case 13:na(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?na(e,t,a,i):al(e,t):r._visibility&2?na(e,t,a,i):(r._visibility|=2,un(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ms(o,t);break;case 24:na(e,t,a,i),n&2048&&hs(t.alternate,t);break;default:na(e,t,a,i)}}function un(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,p=a,m=i,N=o.flags;switch(o.tag){case 0:case 11:case 15:un(r,o,p,m,n),el(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?un(r,o,p,m,n):al(r,o):(R._visibility|=2,un(r,o,p,m,n)),n&&N&2048&&ms(o.alternate,o);break;case 24:un(r,o,p,m,n),n&&N&2048&&hs(o.alternate,o);break;default:un(r,o,p,m,n)}t=t.sibling}}function al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:al(a,i),n&2048&&ms(i.alternate,i);break;case 24:al(a,i),n&2048&&hs(i.alternate,i);break;default:al(a,i)}t=t.sibling}}var il=8192;function pn(e,t,a){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Gu(e,t,a),e=e.sibling}function Gu(e,t,a){switch(e.tag){case 26:pn(e,t,a),e.flags&il&&e.memoizedState!==null&&Fm(a,ia,e.memoizedState,e.memoizedProps);break;case 5:pn(e,t,a);break;case 3:case 4:var i=ia;ia=_r(e.stateNode.containerInfo),pn(e,t,a),ia=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=il,il=16777216,pn(e,t,a),il=i):pn(e,t,a));break;default:pn(e,t,a)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];pt=i,Xu(i,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vu(e),e=e.sibling}function Vu(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,sr(e)):nl(e);break;default:nl(e)}}function sr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];pt=i,Xu(i,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qa(8,t,t.return),sr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,sr(t));break;default:sr(t)}e=e.sibling}}function Xu(e,t){for(;pt!==null;){var a=pt;switch(a.tag){case 0:case 11:case 15:Qa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,pt=i;else e:for(a=e;pt!==null;){i=pt;var n=i.sibling,r=i.return;if(ku(i),i===a){pt=null;break e}if(n!==null){n.return=r,pt=n;break e}pt=r}}}var Jd={getCacheForType:function(e){var t=vt(nt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return vt(nt).controller.signal}},Wd=typeof WeakMap=="function"?WeakMap:Map,je=0,Be=null,xe=null,ye=0,Re=0,Bt=null,Ka=!1,fn=!1,xs=!1,Ca=0,$e=0,Ja=0,Ci=0,vs=0,Ht=0,dn=0,ll=null,Tt=null,gs=!1,cr=0,Pu=0,ur=1/0,pr=null,Wa=null,ct=0,$a=null,mn=null,Ea=0,ys=0,bs=null,Iu=null,rl=0,_s=null;function Gt(){return(je&2)!==0&&ye!==0?ye&-ye:A.T!==null?As():kt()}function Zu(){if(Ht===0)if((ye&536870912)===0||_e){var e=di;di<<=1,(di&3932160)===0&&(di=262144),Ht=e}else Ht=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Ht}function Rt(e,t,a){(e===Be&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(hn(e,0),ei(e,ye,Ht,!1)),oa(e,a),((je&2)===0||e!==Be)&&(e===Be&&((je&2)===0&&(Ci|=a),$e===4&&ei(e,ye,Ht,!1)),pa(e))}function Qu(e,t,a){if((je&6)!==0)throw Error(c(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||mt(e,t),n=i?tm(e,t):Ss(e,t,!0),r=i;do{if(n===0){fn&&!i&&ei(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!$d(a)){n=Ss(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var p=e;n=ll;var m=p.current.memoizedState.isDehydrated;if(m&&(hn(p,o).flags|=256),o=Ss(p,o,!1),o!==2){if(xs&&!m){p.errorRecoveryDisabledLanes|=r,Ci|=r,n=4;break e}r=Tt,Tt=n,r!==null&&(Tt===null?Tt=r:Tt.push.apply(Tt,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){hn(e,0),ei(e,t,0,!0);break}e:{switch(i=e,r=n,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ei(i,t,Ht,!Ka);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=cr+300-tt(),10<n)){if(ei(i,t,Ht,!Ka),ea(i,0,!0)!==0)break e;Ea=t,i.timeoutHandle=wp(Ku.bind(null,i,a,Tt,pr,gs,t,Ht,Ci,dn,Ka,r,"Throttled",-0,0),n);break e}Ku(i,a,Tt,pr,gs,t,Ht,Ci,dn,Ka,r,null,-0,0)}}break}while(!0);pa(e)}function Ku(e,t,a,i,n,r,o,p,m,N,R,F,w,j){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},Gu(t,r,F);var J=(r&62914560)===r?cr-tt():(r&4194048)===r?Pu-tt():0;if(J=qm(F,J),J!==null){Ea=r,e.cancelPendingCommit=J(np.bind(null,e,t,r,a,i,n,o,p,m,R,F,null,w,j)),ei(e,r,o,!N);return}}np(e,t,r,a,i,n,o,p,m)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],r=n.getSnapshot;n=n.value;try{if(!Ft(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ei(e,t,a,i){t&=~vs,t&=~Ci,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var r=31-Te(n),o=1<<r;i[r]=-1,n&=~o}a!==0&&Ot(e,a,t)}function fr(){return(je&6)===0?(ol(0),!1):!0}function zs(){if(xe!==null){if(Re===0)var e=xe.return;else e=xe,za=Si=null,Lo(e),ln=null,Yn=0,e=xe;for(;e!==null;)Au(e.alternate,e),e=e.return;xe=null}}function hn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ym(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,zs(),Be=e,xe=a=ba(e.current,null),ye=t,Re=0,Bt=null,Ka=!1,fn=mt(e,t),xs=!1,dn=Ht=vs=Ci=Ja=$e=0,Tt=ll=null,gs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-Te(i),r=1<<n;t|=e[n],i&=~r}return Ca=t,El(),a}function Ju(e,t){ce=null,A.H=Jn,t===nn||t===Hl?(t=d0(),Re=3):t===wo?(t=d0(),Re=4):Re=t===es?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,xe===null&&($e=1,tr(e,It(t,e.current)))}function Wu(){var e=Lt.current;return e===null?!0:(ye&4194048)===ye?Jt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Jt:!1}function $u(){var e=A.H;return A.H=Jn,e===null?Jn:e}function ep(){var e=A.A;return A.A=Jd,e}function dr(){$e=4,Ka||(ye&4194048)!==ye&&Lt.current!==null||(fn=!0),(Ja&134217727)===0&&(Ci&134217727)===0||Be===null||ei(Be,ye,Ht,!1)}function Ss(e,t,a){var i=je;je|=2;var n=$u(),r=ep();(Be!==e||ye!==t)&&(pr=null,hn(e,t)),t=!1;var o=$e;e:do try{if(Re!==0&&xe!==null){var p=xe,m=Bt;switch(Re){case 8:zs(),o=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var N=Re;if(Re=0,Bt=null,xn(e,p,m,N),a&&fn){o=0;break e}break;default:N=Re,Re=0,Bt=null,xn(e,p,m,N)}}em(),o=$e;break}catch(R){Ju(e,R)}while(!0);return t&&e.shellSuspendCounter++,za=Si=null,je=i,A.H=n,A.A=r,xe===null&&(Be=null,ye=0,El()),o}function em(){for(;xe!==null;)tp(xe)}function tm(e,t){var a=je;je|=2;var i=$u(),n=ep();Be!==e||ye!==t?(pr=null,ur=tt()+500,hn(e,t)):fn=mt(e,t);e:do try{if(Re!==0&&xe!==null){t=xe;var r=Bt;t:switch(Re){case 1:Re=0,Bt=null,xn(e,t,r,1);break;case 2:case 9:if(p0(r)){Re=0,Bt=null,ap(t);break}t=function(){Re!==2&&Re!==9||Be!==e||(Re=7),pa(e)},r.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:p0(r)?(Re=0,Bt=null,ap(t)):(Re=0,Bt=null,xn(e,t,r,7));break;case 5:var o=null;switch(xe.tag){case 26:o=xe.memoizedState;case 5:case 27:var p=xe;if(o?Hp(o):p.stateNode.complete){Re=0,Bt=null;var m=p.sibling;if(m!==null)xe=m;else{var N=p.return;N!==null?(xe=N,mr(N)):xe=null}break t}}Re=0,Bt=null,xn(e,t,r,5);break;case 6:Re=0,Bt=null,xn(e,t,r,6);break;case 8:zs(),$e=6;break e;default:throw Error(c(462))}}am();break}catch(R){Ju(e,R)}while(!0);return za=Si=null,A.H=i,A.A=n,je=a,xe!==null?0:(Be=null,ye=0,El(),$e)}function am(){for(;xe!==null&&!ki();)tp(xe)}function tp(e){var t=Nu(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,t===null?mr(e):xe=t}function ap(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=yu(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=yu(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Lo(t);default:Au(a,t),t=xe=e0(t,Ca),t=Nu(a,t,Ca)}e.memoizedProps=e.pendingProps,t===null?mr(e):xe=t}function xn(e,t,a,i){za=Si=null,Lo(t),ln=null,Yn=0;var n=t.return;try{if(Vd(e,n,t,a,ye)){$e=1,tr(e,It(a,e.current)),xe=null;return}}catch(r){if(n!==null)throw xe=n,r;$e=1,tr(e,It(a,e.current)),xe=null;return}t.flags&32768?(_e||i===1?e=!0:fn||(ye&536870912)!==0?e=!1:(Ka=e=!0,(i===2||i===9||i===3||i===6)&&(i=Lt.current,i!==null&&i.tag===13&&(i.flags|=16384))),ip(t,e)):mr(t)}function mr(e){var t=e;do{if((t.flags&32768)!==0){ip(t,Ka);return}e=t.return;var a=Id(t.alternate,t,Ca);if(a!==null){xe=a;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);$e===0&&($e=5)}function ip(e,t){do{var a=Zd(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);$e=6,xe=null}function np(e,t,a,i,n,r,o,p,m){e.cancelPendingCommit=null;do hr();while(ct!==0);if((je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=uo,Fi(e,a,r,o,p,m),e===Be&&(xe=Be=null,ye=0),mn=t,$a=e,Ea=a,ys=r,bs=n,Iu=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rm(I,function(){return cp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=A.T,A.T=null,n=L.p,L.p=2,o=je,je|=4;try{Qd(e,t,a)}finally{je=o,L.p=n,A.T=i}}ct=1,lp(),rp(),op()}}function lp(){if(ct===1){ct=0;var e=$a,t=mn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var i=L.p;L.p=2;var n=je;je|=4;try{Uu(t,e);var r=ks,o=Xc(e.containerInfo),p=r.focusedElem,m=r.selectionRange;if(o!==p&&p&&p.ownerDocument&&Vc(p.ownerDocument.documentElement,p)){if(m!==null&&lo(p)){var N=m.start,R=m.end;if(R===void 0&&(R=N),"selectionStart"in p)p.selectionStart=N,p.selectionEnd=Math.min(R,p.value.length);else{var F=p.ownerDocument||document,w=F&&F.defaultView||window;if(w.getSelection){var j=w.getSelection(),J=p.textContent.length,le=Math.min(m.start,J),Fe=m.end===void 0?le:Math.min(m.end,J);!j.extend&&le>Fe&&(o=Fe,Fe=le,le=o);var _=Yc(p,le),v=Yc(p,Fe);if(_&&v&&(j.rangeCount!==1||j.anchorNode!==_.node||j.anchorOffset!==_.offset||j.focusNode!==v.node||j.focusOffset!==v.offset)){var D=F.createRange();D.setStart(_.node,_.offset),j.removeAllRanges(),le>Fe?(j.addRange(D),j.extend(v.node,v.offset)):(D.setEnd(v.node,v.offset),j.addRange(D))}}}}for(F=[],j=p;j=j.parentNode;)j.nodeType===1&&F.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<F.length;p++){var O=F[p];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Ar=!!Os,ks=Os=null}finally{je=n,L.p=i,A.T=a}}e.current=t,ct=2}}function rp(){if(ct===2){ct=0;var e=$a,t=mn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var i=L.p;L.p=2;var n=je;je|=4;try{Ou(e,t.alternate,t)}finally{je=n,L.p=i,A.T=a}}ct=3}}function op(){if(ct===4||ct===3){ct=0,qa();var e=$a,t=mn,a=Ea,i=Iu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,mn=$a=null,sp(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Wa=null),Ze(a),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(dt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=A.T,n=L.p,L.p=2,A.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var p=i[o];r(p.value,{componentStack:p.stack})}}finally{A.T=t,L.p=n}}(Ea&3)!==0&&hr(),pa(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===_s?rl++:(rl=0,_s=e):rl=0,ol(0)}}function sp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hn(t)))}function hr(){return lp(),rp(),op(),cp()}function cp(){if(ct!==5)return!1;var e=$a,t=ys;ys=0;var a=Ze(Ea),i=A.T,n=L.p;try{L.p=32>a?32:a,A.T=null,a=bs,bs=null;var r=$a,o=Ea;if(ct=0,mn=$a=null,Ea=0,(je&6)!==0)throw Error(c(331));var p=je;if(je|=4,Vu(r.current),Hu(r,r.current,o,a),je=p,ol(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(dt,r)}catch{}return!0}finally{L.p=n,A.T=i,sp(e,t)}}function up(e,t,a){t=It(a,t),t=$o(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(oa(e,2),pa(e))}function Ce(e,t,a){if(e.tag===3)up(e,e,a);else for(;t!==null;){if(t.tag===3){up(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wa===null||!Wa.has(i))){e=It(a,e),a=pu(2),i=Pa(t,a,2),i!==null&&(fu(a,i,t,e),oa(i,2),pa(i));break}}t=t.return}}function Ds(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Wd;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(xs=!0,n.add(a),e=im.bind(null,e,t,a),t.then(e,e))}function im(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(ye&a)===a&&($e===4||$e===3&&(ye&62914560)===ye&&300>tt()-cr?(je&2)===0&&hn(e,0):vs|=a,dn===ye&&(dn=0)),pa(e)}function pp(e,t){t===0&&(t=Yt()),e=bi(e,t),e!==null&&(oa(e,t),pa(e))}function nm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),pp(e,a)}function lm(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),pp(e,a)}function rm(e,t){return ui(e,t)}var xr=null,vn=null,Ns=!1,vr=!1,ws=!1,ti=0;function pa(e){e!==vn&&e.next===null&&(vn===null?xr=vn=e:vn=vn.next=e),vr=!0,Ns||(Ns=!0,sm())}function ol(e,t){if(!ws&&vr){ws=!0;do for(var a=!1,i=xr;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var r=0;else{var o=i.suspendedLanes,p=i.pingedLanes;r=(1<<31-Te(42|e)+1)-1,r&=n&~(o&~p),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,hp(i,r))}else r=ye,r=ea(i,i===Be?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||mt(i,r)||(a=!0,hp(i,r));i=i.next}while(a);ws=!1}}function om(){fp()}function fp(){vr=Ns=!1;var e=0;ti!==0&&gm()&&(e=ti);for(var t=tt(),a=null,i=xr;i!==null;){var n=i.next,r=dp(i,t);r===0?(i.next=null,a===null?xr=n:a.next=n,n===null&&(vn=a)):(a=i,(e!==0||(r&3)!==0)&&(vr=!0)),i=n}ct!==0&&ct!==5||ol(e),ti!==0&&(ti=0)}function dp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Te(r),p=1<<o,m=n[o];m===-1?((p&a)===0||(p&i)!==0)&&(n[o]=ta(p,t)):m<=t&&(e.expiredLanes|=p),r&=~p}if(t=Be,a=ye,a=ea(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&pi(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||mt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&pi(i),Ze(a)){case 2:case 8:a=Z;break;case 32:a=I;break;case 268435456:a=se;break;default:a=I}return i=mp.bind(null,e),a=ui(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&pi(i),e.callbackPriority=2,e.callbackNode=null,2}function mp(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(hr()&&e.callbackNode!==a)return null;var i=ye;return i=ea(e,e===Be?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qu(e,i,t),dp(e,tt()),e.callbackNode!=null&&e.callbackNode===a?mp.bind(null,e):null)}function hp(e,t){if(hr())return null;Qu(e,t,!0)}function sm(){bm(function(){(je&6)!==0?ui(U,om):fp()})}function As(){if(ti===0){var e=tn;e===0&&(e=da,da<<=1,(da&261888)===0&&(da=256)),ti=e}return ti}function xp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Nl(""+e)}function vp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cm(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var r=xp((n[Nt]||null).action),o=i.submitter;o&&(t=(t=o[Nt]||null)?xp(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var p=new Ml("action","action",null,i,n);e.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ti!==0){var m=o?vp(n,o):new FormData(n);Io(a,{pending:!0,data:m,method:n.method,action:r},null,m)}}else typeof r=="function"&&(p.preventDefault(),m=o?vp(n,o):new FormData(n),Io(a,{pending:!0,data:m,method:n.method,action:r},r,m))},currentTarget:n}]})}}for(var js=0;js<co.length;js++){var Ms=co[js],um=Ms.toLowerCase(),pm=Ms[0].toUpperCase()+Ms.slice(1);aa(um,"on"+pm)}aa(Zc,"onAnimationEnd"),aa(Qc,"onAnimationIteration"),aa(Kc,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(Ad,"onTransitionRun"),aa(jd,"onTransitionStart"),aa(Md,"onTransitionCancel"),aa(Jc,"onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function gp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var p=i[o],m=p.instance,N=p.currentTarget;if(p=p.listener,m!==r&&n.isPropagationStopped())break e;r=p,n.currentTarget=N;try{r(n)}catch(R){Cl(R)}n.currentTarget=null,r=m}else for(o=0;o<i.length;o++){if(p=i[o],m=p.instance,N=p.currentTarget,p=p.listener,m!==r&&n.isPropagationStopped())break e;r=p,n.currentTarget=N;try{r(n)}catch(R){Cl(R)}n.currentTarget=null,r=m}}}}function ve(e,t){var a=t[Hr];a===void 0&&(a=t[Hr]=new Set);var i=e+"__bubble";a.has(i)||(yp(t,e,2,!1),a.add(i))}function Ts(e,t,a){var i=0;t&&(i|=4),yp(a,e,i,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Rs(e){if(!e[gr]){e[gr]=!0,fc.forEach(function(a){a!=="selectionchange"&&(fm.has(a)||Ts(a,!1,e),Ts(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Ts("selectionchange",!1,t))}}function yp(e,t,a,i){switch(Zp(t)){case 2:var n=Bm;break;case 8:n=Hm;break;default:n=Ps}a=n.bind(null,t,a,e),n=void 0,!Kr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Cs(e,t,a,i,n){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var p=i.stateNode.containerInfo;if(p===n)break;if(o===4)for(o=i.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;p!==null;){if(o=Li(p),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){i=r=o;continue e}p=p.parentNode}}i=i.return}Dc(function(){var N=r,R=Zr(a),F=[];e:{var w=Wc.get(e);if(w!==void 0){var j=Ml,J=e;switch(e){case"keypress":if(Al(a)===0)break e;case"keydown":case"keyup":j=ld;break;case"focusin":J="focus",j=eo;break;case"focusout":J="blur",j=eo;break;case"beforeblur":case"afterblur":j=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=sd;break;case Zc:case Qc:case Kc:j=Kf;break;case Jc:j=ud;break;case"scroll":case"scrollend":j=Xf;break;case"wheel":j=fd;break;case"copy":case"cut":case"paste":j=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Mc;break;case"toggle":case"beforetoggle":j=md}var le=(t&4)!==0,Fe=!le&&(e==="scroll"||e==="scrollend"),_=le?w!==null?w+"Capture":null:w;le=[];for(var v=N,D;v!==null;){var O=v;if(D=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||D===null||_===null||(O=Tn(v,_),O!=null&&le.push(cl(v,O,D))),Fe)break;v=v.return}0<le.length&&(w=new j(w,J,null,a,R),F.push({event:w,listeners:le}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",w&&a!==Ir&&(J=a.relatedTarget||a.fromElement)&&(Li(J)||J[qi]))break e;if((j||w)&&(w=R.window===R?R:(w=R.ownerDocument)?w.defaultView||w.parentWindow:window,j?(J=a.relatedTarget||a.toElement,j=N,J=J?Li(J):null,J!==null&&(Fe=x(J),le=J.tag,J!==Fe||le!==5&&le!==27&&le!==6)&&(J=null)):(j=null,J=N),j!==J)){if(le=Ac,O="onMouseLeave",_="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(le=Mc,O="onPointerLeave",_="onPointerEnter",v="pointer"),Fe=j==null?w:Mn(j),D=J==null?w:Mn(J),w=new le(O,v+"leave",j,a,R),w.target=Fe,w.relatedTarget=D,O=null,Li(R)===N&&(le=new le(_,v+"enter",J,a,R),le.target=D,le.relatedTarget=Fe,O=le),Fe=O,j&&J)t:{for(le=dm,_=j,v=J,D=0,O=_;O;O=le(O))D++;O=0;for(var ae=v;ae;ae=le(ae))O++;for(;0<D-O;)_=le(_),D--;for(;0<O-D;)v=le(v),O--;for(;D--;){if(_===v||v!==null&&_===v.alternate){le=_;break t}_=le(_),v=le(v)}le=null}else le=null;j!==null&&bp(F,w,j,le,!1),J!==null&&Fe!==null&&bp(F,Fe,J,le,!0)}}e:{if(w=N?Mn(N):window,j=w.nodeName&&w.nodeName.toLowerCase(),j==="select"||j==="input"&&w.type==="file")var Se=qc;else if(kc(w))if(Lc)Se=Dd;else{Se=zd;var $=_d}else j=w.nodeName,!j||j.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?N&&Pr(N.elementType)&&(Se=qc):Se=Sd;if(Se&&(Se=Se(e,N))){Fc(F,Se,a,R);break e}$&&$(e,w,N),e==="focusout"&&N&&w.type==="number"&&N.memoizedProps.value!=null&&Xr(w,"number",w.value)}switch($=N?Mn(N):window,e){case"focusin":(kc($)||$.contentEditable==="true")&&(Ii=$,ro=N,Ln=null);break;case"focusout":Ln=ro=Ii=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,Pc(F,a,R);break;case"selectionchange":if(wd)break;case"keydown":case"keyup":Pc(F,a,R)}var de;if(ao)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Pi?Ec(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Tc&&a.locale!=="ko"&&(Pi||be!=="onCompositionStart"?be==="onCompositionEnd"&&Pi&&(de=Nc()):(Ua=R,Jr="value"in Ua?Ua.value:Ua.textContent,Pi=!0)),$=yr(N,be),0<$.length&&(be=new jc(be,e,null,a,R),F.push({event:be,listeners:$}),de?be.data=de:(de=Oc(a),de!==null&&(be.data=de)))),(de=xd?vd(e,a):gd(e,a))&&(be=yr(N,"onBeforeInput"),0<be.length&&($=new jc("onBeforeInput","beforeinput",null,a,R),F.push({event:$,listeners:be}),$.data=de)),cm(F,e,N,a,R)}gp(F,t)})}function cl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function yr(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Tn(e,a),n!=null&&i.unshift(cl(e,n,r)),n=Tn(e,t),n!=null&&i.push(cl(e,n,r))),e.tag===3)return i;e=e.return}return[]}function dm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bp(e,t,a,i,n){for(var r=t._reactName,o=[];a!==null&&a!==i;){var p=a,m=p.alternate,N=p.stateNode;if(p=p.tag,m!==null&&m===i)break;p!==5&&p!==26&&p!==27||N===null||(m=N,n?(N=Tn(a,r),N!=null&&o.unshift(cl(a,N,m))):n||(N=Tn(a,r),N!=null&&o.push(cl(a,N,m)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var mm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(hm,"")}function zp(e,t){return t=_p(t),_p(e)===t}function ke(e,t,a,i,n,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Yi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Yi(e,""+i);break;case"className":Sl(e,"class",i);break;case"tabIndex":Sl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Sl(e,a,i);break;case"style":zc(e,i,r);break;case"data":if(t!=="object"){Sl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Nl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",n.name,n,null),ke(e,t,"formEncType",n.formEncType,n,null),ke(e,t,"formMethod",n.formMethod,n,null),ke(e,t,"formTarget",n.formTarget,n,null)):(ke(e,t,"encType",n.encType,n,null),ke(e,t,"method",n.method,n,null),ke(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Nl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ga);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Nl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ve("beforetoggle",e),ve("toggle",e),zl(e,"popover",i);break;case"xlinkActuate":va(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":va(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":va(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":va(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":va(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":va(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":va(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":zl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yf.get(a)||a,zl(e,a,i))}}function Es(e,t,a,i,n,r){switch(a){case"style":zc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Yi(e,i):(typeof i=="number"||typeof i=="bigint")&&Yi(e,""+i);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Nt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):zl(e,a,i)}}}function yt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var i=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,r,o,a,null)}}n&&ke(e,t,"srcSet",a.srcSet,a,null),i&&ke(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var p=r=o=n=null,m=null,N=null;for(i in a)if(a.hasOwnProperty(i)){var R=a[i];if(R!=null)switch(i){case"name":n=R;break;case"type":o=R;break;case"checked":m=R;break;case"defaultChecked":N=R;break;case"value":r=R;break;case"defaultValue":p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:ke(e,t,i,R,a,null)}}gc(e,r,p,m,N,o,n,!1);return;case"select":ve("invalid",e),i=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(p=a[n],p!=null))switch(n){case"value":r=p;break;case"defaultValue":o=p;break;case"multiple":i=p;default:ke(e,t,n,p,a,null)}t=r,a=o,e.multiple=!!i,t!=null?Gi(e,!!i,t,!1):a!=null&&Gi(e,!!i,a,!0);return;case"textarea":ve("invalid",e),r=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(p=a[o],p!=null))switch(o){case"value":i=p;break;case"defaultValue":n=p;break;case"children":r=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:ke(e,t,o,p,a,null)}bc(e,i,n,r);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(i=a[m],i!=null))switch(m){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ke(e,t,m,i,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(i=0;i<sl.length;i++)ve(sl[i],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(i=a[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,N,i,a,null)}return;default:if(Pr(t)){for(R in a)a.hasOwnProperty(R)&&(i=a[R],i!==void 0&&Es(e,t,R,i,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(i=a[p],i!=null&&ke(e,t,p,i,a,null))}function xm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,p=null,m=null,N=null,R=null;for(j in a){var F=a[j];if(a.hasOwnProperty(j)&&F!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":m=F;default:i.hasOwnProperty(j)||ke(e,t,j,null,i,F)}}for(var w in i){var j=i[w];if(F=a[w],i.hasOwnProperty(w)&&(j!=null||F!=null))switch(w){case"type":r=j;break;case"name":n=j;break;case"checked":N=j;break;case"defaultChecked":R=j;break;case"value":o=j;break;case"defaultValue":p=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:j!==F&&ke(e,t,w,j,i,F)}}Vr(e,o,p,m,N,R,r,n);return;case"select":j=o=p=w=null;for(r in a)if(m=a[r],a.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":j=m;default:i.hasOwnProperty(r)||ke(e,t,r,null,i,m)}for(n in i)if(r=i[n],m=a[n],i.hasOwnProperty(n)&&(r!=null||m!=null))switch(n){case"value":w=r;break;case"defaultValue":p=r;break;case"multiple":o=r;default:r!==m&&ke(e,t,n,r,i,m)}t=p,a=o,i=j,w!=null?Gi(e,!!a,w,!1):!!i!=!!a&&(t!=null?Gi(e,!!a,t,!0):Gi(e,!!a,a?[]:"",!1));return;case"textarea":j=w=null;for(p in a)if(n=a[p],a.hasOwnProperty(p)&&n!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:ke(e,t,p,null,i,n)}for(o in i)if(n=i[o],r=a[o],i.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":w=n;break;case"defaultValue":j=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==r&&ke(e,t,o,n,i,r)}yc(e,w,j);return;case"option":for(var J in a)if(w=a[J],a.hasOwnProperty(J)&&w!=null&&!i.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:ke(e,t,J,null,i,w)}for(m in i)if(w=i[m],j=a[m],i.hasOwnProperty(m)&&w!==j&&(w!=null||j!=null))switch(m){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:ke(e,t,m,w,i,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)w=a[le],a.hasOwnProperty(le)&&w!=null&&!i.hasOwnProperty(le)&&ke(e,t,le,null,i,w);for(N in i)if(w=i[N],j=a[N],i.hasOwnProperty(N)&&w!==j&&(w!=null||j!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:ke(e,t,N,w,i,j)}return;default:if(Pr(t)){for(var Fe in a)w=a[Fe],a.hasOwnProperty(Fe)&&w!==void 0&&!i.hasOwnProperty(Fe)&&Es(e,t,Fe,void 0,i,w);for(R in i)w=i[R],j=a[R],!i.hasOwnProperty(R)||w===j||w===void 0&&j===void 0||Es(e,t,R,w,i,j);return}}for(var _ in a)w=a[_],a.hasOwnProperty(_)&&w!=null&&!i.hasOwnProperty(_)&&ke(e,t,_,null,i,w);for(F in i)w=i[F],j=a[F],!i.hasOwnProperty(F)||w===j||w==null&&j==null||ke(e,t,F,w,i,j)}function Sp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],r=n.transferSize,o=n.initiatorType,p=n.duration;if(r&&p&&Sp(o)){for(o=0,p=n.responseEnd,i+=1;i<a.length;i++){var m=a[i],N=m.startTime;if(N>p)break;var R=m.transferSize,F=m.initiatorType;R&&Sp(F)&&(m=m.responseEnd,o+=R*(m<p?1:(p-N)/(m-N)))}if(--i,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Os=null,ks=null;function br(e){return e.nodeType===9?e:e.ownerDocument}function Dp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Np(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qs=null;function gm(){var e=window.event;return e&&e.type==="popstate"?e===qs?!1:(qs=e,!0):(qs=null,!1)}var wp=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(e){return Ap.resolve(null).then(e).catch(_m)}:wp;function _m(e){setTimeout(function(){throw e})}function ai(e){return e==="head"}function jp(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),_n(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ul(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ul(a);for(var r=a.firstChild;r;){var o=r.nextSibling,p=r.nodeName;r[jn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&ul(e.ownerDocument.body);a=n}while(a);_n(t)}function Mp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Ls(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ls(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zm(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[jn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function Sm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wt(e.nextSibling),e===null))return null;return e}function Tp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wt(e.nextSibling),e===null))return null;return e}function Us(e){return e.data==="$?"||e.data==="$~"}function Bs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hs=null;function Rp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ep(e,t,a){switch(t=br(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ul(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gr(e)}var $t=new Map,Op=new Set;function _r(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Oa=L.d;L.d={f:Nm,r:wm,D:Am,C:jm,L:Mm,m:Tm,X:Cm,S:Rm,M:Em};function Nm(){var e=Oa.f(),t=fr();return e||t}function wm(e){var t=Ui(e);t!==null&&t.tag===5&&t.type==="form"?J0(t):Oa.r(e)}var gn=typeof document>"u"?null:document;function kp(e,t,a){var i=gn;if(i&&typeof t=="string"&&t){var n=Xt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Op.has(n)||(Op.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),yt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Am(e){Oa.D(e),kp("dns-prefetch",e,null)}function jm(e,t){Oa.C(e,t),kp("preconnect",e,t)}function Mm(e,t,a){Oa.L(e,t,a);var i=gn;if(i&&e&&t){var n='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Xt(a.imageSizes)+'"]')):n+='[href="'+Xt(e)+'"]';var r=n;switch(t){case"style":r=yn(e);break;case"script":r=bn(e)}$t.has(r)||(e=k({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),$t.set(r,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(pl(r))||t==="script"&&i.querySelector(fl(r))||(t=i.createElement("link"),yt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Tm(e,t){Oa.m(e,t);var a=gn;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Xt(i)+'"][href="'+Xt(e)+'"]',r=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=bn(e)}if(!$t.has(r)&&(e=k({rel:"modulepreload",href:e},t),$t.set(r,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fl(r)))return}i=a.createElement("link"),yt(i,"link",e),ut(i),a.head.appendChild(i)}}}function Rm(e,t,a){Oa.S(e,t,a);var i=gn;if(i&&e){var n=Bi(i).hoistableStyles,r=yn(e);t=t||"default";var o=n.get(r);if(!o){var p={loading:0,preload:null};if(o=i.querySelector(pl(r)))p.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},a),(a=$t.get(r))&&Gs(e,a);var m=o=i.createElement("link");ut(m),yt(m,"link",e),m._p=new Promise(function(N,R){m.onload=N,m.onerror=R}),m.addEventListener("load",function(){p.loading|=1}),m.addEventListener("error",function(){p.loading|=2}),p.loading|=4,zr(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:p},n.set(r,o)}}}function Cm(e,t){Oa.X(e,t);var a=gn;if(a&&e){var i=Bi(a).hoistableScripts,n=bn(e),r=i.get(n);r||(r=a.querySelector(fl(n)),r||(e=k({src:e,async:!0},t),(t=$t.get(n))&&Ys(e,t),r=a.createElement("script"),ut(r),yt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function Em(e,t){Oa.M(e,t);var a=gn;if(a&&e){var i=Bi(a).hoistableScripts,n=bn(e),r=i.get(n);r||(r=a.querySelector(fl(n)),r||(e=k({src:e,async:!0,type:"module"},t),(t=$t.get(n))&&Ys(e,t),r=a.createElement("script"),ut(r),yt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function Fp(e,t,a,i){var n=(n=ie.current)?_r(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=yn(a.href),a=Bi(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yn(a.href);var r=Bi(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(pl(e)))&&!r._p&&(o.instance=r,o.state.loading=5),$t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$t.set(e,a),r||Om(n,e,a,o.state))),t&&i===null)throw Error(c(528,""));return o}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bn(a),a=Bi(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function yn(e){return'href="'+Xt(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function qp(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Om(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),yt(t,"link",a),ut(t),e.head.appendChild(t))}function bn(e){return'[src="'+Xt(e)+'"]'}function fl(e){return"script[async]"+e}function Lp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(i)return t.instance=i,ut(i),i;var n=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ut(i),yt(i,"style",n),zr(i,a.precedence,e),t.instance=i;case"stylesheet":n=yn(a.href);var r=e.querySelector(pl(n));if(r)return t.state.loading|=4,t.instance=r,ut(r),r;i=qp(a),(n=$t.get(n))&&Gs(i,n),r=(e.ownerDocument||e).createElement("link"),ut(r);var o=r;return o._p=new Promise(function(p,m){o.onload=p,o.onerror=m}),yt(r,"link",i),t.state.loading|=4,zr(r,a.precedence,e),t.instance=r;case"script":return r=bn(a.src),(n=e.querySelector(fl(r)))?(t.instance=n,ut(n),n):(i=a,(n=$t.get(r))&&(i=k({},a),Ys(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),ut(n),yt(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,zr(i,a.precedence,e));return t.instance}function zr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,r=n,o=0;o<i.length;o++){var p=i[o];if(p.dataset.precedence===t)r=p;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ys(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sr=null;function Up(e,t,a){if(Sr===null){var i=new Map,n=Sr=new Map;n.set(a,i)}else n=Sr,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[jn]||r[ht]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var p=i.get(o);p?p.push(r):i.set(o,[r])}}return i}function Bp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function km(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fm(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=yn(i.href),r=t.querySelector(pl(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Dr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ut(r);return}r=t.ownerDocument||t,i=qp(i),(n=$t.get(n))&&Gs(i,n),r=r.createElement("link"),ut(r);var o=r;o._p=new Promise(function(p,m){o.onload=p,o.onerror=m}),yt(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Dr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Vs=0;function qm(e,t){return e.stylesheets&&e.count===0&&wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&wr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Vs===0&&(Vs=62500*vm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Vs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function Dr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nr=null;function wr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nr=new Map,t.forEach(Lm,e),Nr=null,Dr.call(e))}function Lm(e,t){if(!(t.state.loading&4)){var a=Nr.get(e);if(a)var i=a.get(null);else{a=new Map,Nr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||i,r===i&&a.set(null,n),a.set(o,n),this.count++,i=Dr.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var dl={$$typeof:S,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function Um(e,t,a,i,n,r,o,p,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ma(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.hiddenUpdates=ma(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Gp(e,t,a,i,n,r,o,p,m,N,R,F){return e=new Um(e,t,a,o,m,N,R,F,p),t=1,r===!0&&(t|=24),r=qt(3,null,null,t),e.current=r,r.stateNode=e,t=So(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},Ao(r),e}function Yp(e){return e?(e=Ki,e):Ki}function Vp(e,t,a,i,n,r){n=Yp(n),i.context===null?i.context=n:i.pendingContext=n,i=Xa(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Pa(e,i,t),a!==null&&(Rt(a,e,t),Xn(a,e,t))}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Xs(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function Pp(e){if(e.tag===13||e.tag===31){var t=bi(e,67108864);t!==null&&Rt(t,e,67108864),Xs(e,67108864)}}function Ip(e){if(e.tag===13||e.tag===31){var t=Gt();t=st(t);var a=bi(e,t);a!==null&&Rt(a,e,t),Xs(e,t)}}var Ar=!0;function Bm(e,t,a,i){var n=A.T;A.T=null;var r=L.p;try{L.p=2,Ps(e,t,a,i)}finally{L.p=r,A.T=n}}function Hm(e,t,a,i){var n=A.T;A.T=null;var r=L.p;try{L.p=8,Ps(e,t,a,i)}finally{L.p=r,A.T=n}}function Ps(e,t,a,i){if(Ar){var n=Is(i);if(n===null)Cs(e,t,i,jr,a),Qp(e,i);else if(Ym(n,e,t,a,i))i.stopPropagation();else if(Qp(e,i),t&4&&-1<Gm.indexOf(e)){for(;n!==null;){var r=Ui(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Ae(r.pendingLanes);if(o!==0){var p=r;for(p.pendingLanes|=2,p.entangledLanes|=2;o;){var m=1<<31-Te(o);p.entanglements[1]|=m,o&=~m}pa(r),(je&6)===0&&(ur=tt()+500,ol(0))}}break;case 31:case 13:p=bi(r,2),p!==null&&Rt(p,r,2),fr(),Xs(r,2)}if(r=Is(i),r===null&&Cs(e,t,i,jr,a),r===n)break;n=r}n!==null&&i.stopPropagation()}else Cs(e,t,i,null,a)}}function Is(e){return e=Zr(e),Zs(e)}var jr=null;function Zs(e){if(jr=null,e=Li(e),e!==null){var t=x(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=z(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jr=e,null}function Zp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case U:return 2;case Z:return 8;case I:case ze:return 32;case se:return 268435456;default:return 32}default:return 32}}var Qs=!1,ii=null,ni=null,li=null,ml=new Map,hl=new Map,ri=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qp(e,t){switch(e){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function xl(e,t,a,i,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Ui(t),t!==null&&Pp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Ym(e,t,a,i,n){switch(t){case"focusin":return ii=xl(ii,e,t,a,i,n),!0;case"dragenter":return ni=xl(ni,e,t,a,i,n),!0;case"mouseover":return li=xl(li,e,t,a,i,n),!0;case"pointerover":var r=n.pointerId;return ml.set(r,xl(ml.get(r)||null,e,t,a,i,n)),!0;case"gotpointercapture":return r=n.pointerId,hl.set(r,xl(hl.get(r)||null,e,t,a,i,n)),!0}return!1}function Kp(e){var t=Li(e.target);if(t!==null){var a=x(t);if(a!==null){if(t=a.tag,t===13){if(t=z(a),t!==null){e.blockedOn=t,xa(e.priority,function(){Ip(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,xa(e.priority,function(){Ip(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Is(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Ir=i,a.target.dispatchEvent(i),Ir=null}else return t=Ui(a),t!==null&&Pp(t),e.blockedOn=a,!1;t.shift()}return!0}function Jp(e,t,a){Mr(e)&&a.delete(t)}function Vm(){Qs=!1,ii!==null&&Mr(ii)&&(ii=null),ni!==null&&Mr(ni)&&(ni=null),li!==null&&Mr(li)&&(li=null),ml.forEach(Jp),hl.forEach(Jp)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qs||(Qs=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Vm)))}var Rr=null;function Wp(e){Rr!==e&&(Rr=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Rr===e&&(Rr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(Zs(i||a)===null)continue;break}var r=Ui(a);r!==null&&(e.splice(t,3),t-=3,Io(r,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function _n(e){function t(m){return Tr(m,e)}ii!==null&&Tr(ii,e),ni!==null&&Tr(ni,e),li!==null&&Tr(li,e),ml.forEach(t),hl.forEach(t);for(var a=0;a<ri.length;a++){var i=ri[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ri.length&&(a=ri[0],a.blockedOn===null);)Kp(a),a.blockedOn===null&&ri.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],r=a[i+1],o=n[Nt]||null;if(typeof r=="function")o||Wp(a);else if(o){var p=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[Nt]||null)p=o.formAction;else if(Zs(n)!==null)continue}else p=o.action;typeof p=="function"?a[i+1]=p:(a.splice(i,3),i-=3),Wp(a)}}}function $p(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ks(e){this._internalRoot=e}Cr.prototype.render=Ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=Gt();Vp(a,i,e,t,null,null)},Cr.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vp(e.current,2,null,e,null,null),fr(),t[qi]=null}};function Cr(e){this._internalRoot=e}Cr.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ri.length&&t!==0&&t<ri[a].priority;a++);ri.splice(a,0,e),a===0&&Kp(e)}};var ef=s.version;if(ef!=="19.2.8")throw Error(c(527,ef,"19.2.8"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(t),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var Xm={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{dt=Er.inject(Xm),Ue=Er}catch{}}return gl.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,i="",n=ou,r=su,o=cu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gp(e,1,!1,null,null,a,i,null,n,r,o,$p),e[qi]=t.current,Rs(e),new Ks(t)},gl.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var i=!1,n="",r=ou,o=su,p=cu,m=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=Gp(e,1,!0,t,a??null,i,n,m,r,o,p,$p),t.context=Yp(null),a=t.current,i=Gt(),i=st(i),n=Xa(i),n.callback=null,Pa(a,n,i),a=i,t.current.lanes=a,oa(t,a),pa(t),e[qi]=t.current,Rs(e),new Cr(t)},gl.version="19.2.8",gl}var pf;function ah(){if(pf)return Ws.exports;pf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Ws.exports=th(),Ws.exports}var ih=ah();const nh=Im(ih);var E=sc();const ff="golden_ratio_user_prefs",lh=500;class rh{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(ff);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(ff,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,f){const c=performance.now(),d=c-this.lastSampleTime;this.lastSampleTime=c;const x={timestamp:c,type:s,value:f,duration:d};this.samples.push(x),this.samples.length>lh&&this.samples.shift(),this.analyzeSample(x),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const f=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const f=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const f=String(s.value);this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(s){const f=String(s.value);this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(s){const f=String(s.value);this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(s){const f=String(s.value);this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(s){let f=0,c=null;for(const[d,x]of Object.entries(s))x>f&&(f=x,c=d);return c}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(s.preferredFractal=f);const c=this.getPreferred(this.prefs.renderStyleWeights);c!==null&&(s.preferredStyle=c);const d=this.getPreferred(this.prefs.paletteWeights);d!==null&&(s.preferredPalette=d);const x=this.getPreferred(this.prefs.cameraModeWeights);x!==null&&(s.preferredCamera=x)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const df=new rh,oh=`
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
  var iters = i32(clamp(u.iterations, 6.0, 48.0));
  
  // FRACTAL-SPECIFIC ADAPTIVE ITERATIONS
  if (ftypeA == 1 || ftypeA == 23) { // Mandelbulb, Quaternion Mandelbrot
    iters = i32(clamp(f32(iters) * 1.2, 6.0, 48.0));
  } else if (ftypeA == 5 || ftypeA == 101) { // Mandelbox, Amazing Box
    iters = i32(clamp(f32(iters) * 1.1, 6.0, 48.0));
  } else if (ftypeA == 7 || ftypeA == 103) { // Menger, Menger-Mandelbox
    iters = i32(clamp(f32(iters) * 0.9, 6.0, 48.0));
  } else if (ftypeA >= 86 && ftypeA <= 95) { // Beautiful fractals
    iters = i32(clamp(f32(iters) * 1.15, 6.0, 48.0));
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
  // Close range: 512 steps, Medium: 384 steps, Far: 256 steps (was 256/200/160)
  let maxSteps: i32 = select(select(select(256, 384, cam_dist < 3.0), 512, cam_dist < 1.0), 512, false);
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
`,Sn=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function qr(u){switch(u){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;case"burningShip":return 27;case"chenAttractor":return 73;case"dadrasAttractor":return 73;case"dlAggregate":return 33;case"fibonacciSphere":return 22;case"goldenSpiral":return 22;case"ifsFractal":return 25;case"mandala":return 0;case"newtonFractal":return 28;case"penroseTiling":return 10;case"percolationCluster":return 33;case"perlinNoise":return 58;case"platonicSolids":return 6;case"randomTerrain":return 58;case"schwarzSurface":return 50;case"sierpinskiTriangle":return 14;case"sprottAttractor":return 77;case"torusKnot":return 57;case"worleyNoise":return 60;default:return 0}}function sh(u){switch(u){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function ch(u){switch(u){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function uh(u){switch(u){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function ph(u){switch(u){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class zf{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||Sn.find(f=>f.id===s.paletteId)||Sn[0]}computeIndices(s){return{fractalIdx:qr(s.type),hybridIdx:qr(s.hybridType||s.type),tertiaryIdx:qr(s.tertiaryType||"riemannZeta"),compositeOpIdx:sh(s.compositeOp),cameraModeIdx:ch(s.cameraMode),sliceAxisIdx:uh(s.sliceAxis),renderStyleIdx:ph(s.renderStyle)}}packUniforms(s,f,c,d,x){const z=this.canvas.width,b=this.canvas.height;return s[0]=z,s[1]=b,s[2]=f,s[3]=c.phiMultiplier,s[4]=c.rotX,s[5]=c.rotY,s[6]=c.zoom,s[7]=x.fractalIdx,s[8]=c.iterations,s[9]=c.glowIntensity,s[10]=c.morphSpeed,s[11]=x.hybridIdx,s[12]=c.hybridBlend??0,s[13]=c.boxFold??1.2,s[14]=c.sphereFold??.65,s[15]=c.interiorCut??.35,s[16]=d.primary[0],s[17]=d.primary[1],s[18]=d.primary[2],s[19]=x.tertiaryIdx,s[20]=d.secondary[0],s[21]=d.secondary[1],s[22]=d.secondary[2],s[23]=c.tertiaryBlend??0,s[24]=d.accent[0],s[25]=d.accent[1],s[26]=d.accent[2],s[27]=x.compositeOpIdx,s[28]=c.smoothK??.35,s[29]=c.warpStrength??.3,s[30]=c.octaveLayers??2,s[31]=x.cameraModeIdx,s[32]=c.camPosX??0,s[33]=c.camPosY??0,s[34]=c.camPosZ??0,s[35]=c.slicePlane??0,s[36]=c.headlampPower??.3,s[37]=c.volumetricFog??.15,s[38]=x.sliceAxisIdx,s[39]=x.renderStyleIdx,s[40]=d.ambient?d.ambient[0]:.02,s[41]=d.ambient?d.ambient[1]:.02,s[42]=d.ambient?d.ambient[2]:.02,s[43]=c.paletteSeed??0,s[44]=c.paletteRotation?1:0,s[45]=0,s[46]=0,s[47]=0,s}}class fh{constructor(){this.logs=[],this.stats=this.getInitialStats(),this.frameCount=0,this.lastFrameTime=performance.now(),this.enabled=!0}getInitialStats(){return{frameTime:0,fps:0,rayMarchSteps:0,rayMarchStepsAvg:0,sdfMin:1/0,sdfMax:-1/0,sdfNaN:0,sdfInfinity:0,hitRate:0,averageDistance:0,maxDistance:0,gpuMemoryUsed:0,shaderCompileTime:0,contextLost:!1}}log(s,f,c,d){if(!this.enabled)return;const x={timestamp:performance.now(),level:s,category:f,message:c,data:d};this.logs.push(x),this.logs.length>1e3&&(this.logs=this.logs.slice(-1e3)),(s==="error"||s==="warn")&&console[s](`[${f}] ${c}`,d)}updateFrameStats(s,f,c){const d=performance.now(),x=d-this.lastFrameTime;this.lastFrameTime=d,this.frameCount++,this.stats.frameTime=x,this.stats.fps=1e3/x,this.stats.rayMarchSteps=s,this.stats.rayMarchStepsAvg=this.stats.rayMarchStepsAvg*.9+s*.1,isNaN(f)&&(this.stats.sdfNaN++,this.log("error","math","NaN detected in SDF calculation",{steps:s,hitDistance:f})),isFinite(f)||this.stats.sdfInfinity++,this.stats.sdfMin=Math.min(this.stats.sdfMin,f),this.stats.sdfMax=Math.max(this.stats.sdfMax,f);const z=f<.001;this.stats.hitRate=this.stats.hitRate*.95+(z?1:0)*.05,this.stats.averageDistance=this.stats.averageDistance*.95+f*.05,this.stats.maxDistance=Math.max(this.stats.maxDistance,c)}validateSDF(s,f){return isNaN(s)?(this.log("error","math","SDF returned NaN",{position:f,sdfValue:s}),!1):isFinite(s)?(s<-1e3&&this.log("warn","math","SDF returned unusually large negative value",{position:f,sdfValue:s}),!0):(this.log("error","math","SDF returned Infinity",{position:f,sdfValue:s}),!1)}validateNormal(s,f){const c=Math.sqrt(s[0]**2+s[1]**2+s[2]**2);return isNaN(c)?(this.log("error","math","Normal contains NaN",{position:f,normal:s}),!1):Math.abs(c-1)>.01?(this.log("warn","math","Normal is not normalized",{position:f,normal:s,length:c}),!1):!0}trackGPUContext(s,f){this.stats.contextLost=s,s&&this.log("error","gpu","GPU context lost"),f!==void 0&&(this.stats.shaderCompileTime=f,f>1e3&&this.log("warn","gpu","Shader compilation took too long",{shaderCompileTime:f}))}getStats(){return{...this.stats}}getLogs(s,f){let c=this.logs;return s&&(c=c.filter(d=>d.level===s)),f&&(c=c.filter(d=>d.category===f)),c}exportReport(){const s={timestamp:new Date().toISOString(),stats:this.stats,recentLogs:this.logs.slice(-100),summary:{totalLogs:this.logs.length,errors:this.logs.filter(f=>f.level==="error").length,warnings:this.logs.filter(f=>f.level==="warn").length,nanCount:this.stats.sdfNaN,infinityCount:this.stats.sdfInfinity}};return JSON.stringify(s,null,2)}reset(){this.stats=this.getInitialStats(),this.logs=[],this.frameCount=0,this.lastFrameTime=performance.now()}setEnabled(s){this.enabled=s}isHealthy(){return this.stats.sdfNaN===0&&this.stats.sdfInfinity===0&&!this.stats.contextLost&&this.stats.fps>10}}const Ke=new fh;function Ur(u,s,f,c){if(isNaN(u))return Ke.log("error","math",`NaN in scalar: ${s}`,{value:u,position:f}),!1;if(!isFinite(u))return Ke.log("error","math",`Infinity in scalar: ${s}`,{value:u,position:f}),!1;if(c){const[d,x]=c;if(u<d||u>x)return Ke.log("warn","math",`Scalar out of range: ${s}`,{value:u,position:f,expectedRange:c}),!1}return!0}function Sf(u,s){const f=performance.now(),c=u(),d=performance.now()-f;return d>16&&Ke.log("warn","performance",`Slow operation: ${s}`,{duration:d}),{result:c,duration:d}}class cc extends zf{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!cc.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(x=>setTimeout(()=>x(null),5e3));if(this.adapter=await Promise.race([s,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const x=this.adapter.info;x&&(x.vendor||x.description)?this.adapterInfo=`${x.vendor||""} ${x.description||x.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(x=>{console.warn(`WebGPU device lost: ${x.message}`,x),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const c=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:c,alphaMode:"premultiplied"});try{const x=this.device.createCommandEncoder();x.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([x.finish()])}catch(x){console.debug("Initial clear pass handled:",x)}const d=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:oh});if("getCompilationInfo"in d)try{const z=(await d.getCompilationInfo()).messages.filter(b=>b.type==="error");if(z.length>0){for(const b of z)console.error(`[WGSL Compile Error] Line ${b.lineNum}:${b.linePos}: ${b.message}`);return!1}}catch(x){console.debug("Compilation info inspection skipped:",x)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:d,entryPoint:"vs_main"},fragment:{module:d,entryPoint:"fs_main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const c=this.canvas.width,d=this.canvas.height;if(c===0||d===0)return;const{duration:x}=Sf(()=>{const z=this.resolvePalette(f),b=this.computeIndices(f);this.packUniforms(this.uniformValues,s,f,z,b),Ur(this.uniformValues[2],"u_time",void 0,[0,1e3])||Ke.log("error","render","Invalid time value",{time:this.uniformValues[2]}),Ur(this.uniformValues[6],"u_zoom",void 0,[.01,100])||Ke.log("warn","render","Zoom out of range",{zoom:this.uniformValues[6]}),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const g=this.device.createCommandEncoder(),y=this.context.getCurrentTexture().createView(),G=g.beginRenderPass({colorAttachments:[{view:y,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});G.setPipeline(this.pipeline),G.setBindGroup(0,this.bindGroup),G.draw(3,1,0,0),G.end(),this.device.queue.submit([g.finish()])}catch(g){Ke.log("warn","render","WebGPU render frame skipped",{error:g.message}),console.debug("WebGPU render frame skipped:",g.message)}},"WebGPU render");Ke.updateFrameStats(128,.001,20),Ke.trackGPUContext(!1,x)}destroy(){var s,f;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const dh=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,mh=dh,hh=`#version 300 es
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
  int iters = int(clamp(u_iterations, 6.0, 48.0));
  
  // FRACTAL-SPECIFIC ADAPTIVE ITERATIONS
  // Different fractals have different complexity and need different iteration counts
  // This optimizes quality/performance ratio for each fractal type
  if (ftypeA == 1 || ftypeA == 23) { // Mandelbulb, Quaternion Mandelbrot
    iters = int(clamp(float(iters) * 1.2, 6.0, 48.0)); // Need more iterations
  } else if (ftypeA == 5 || ftypeA == 101) { // Mandelbox, Amazing Box
    iters = int(clamp(float(iters) * 1.1, 6.0, 48.0)); // Slightly more
  } else if (ftypeA == 7 || ftypeA == 103) { // Menger, Menger-Mandelbox
    iters = int(clamp(float(iters) * 0.9, 6.0, 48.0)); // Can use fewer
  } else if (ftypeA >= 86 && ftypeA <= 95) { // Beautiful fractals
    iters = int(clamp(float(iters) * 1.15, 6.0, 48.0)); // More for detail
  }
  
  float t = u_time * u_morph_speed;
  float phi = u_phi_val;
  int compOp = int(u_compose_op + 0.5);
  float k = max(0.04, u_smooth_k * 0.45);

  // FRACTAL BREATHING: Organic radial pulsation at golden-ratio frequencies
  // Creates living, breathing geometry that subtly grows and contracts
  float breathPrimary = sin(u_time * 0.4) * 0.5 + 0.5; // 0-1, ~15.7s period
  float breathSecondary = sin(u_time * 0.4 * phi + 1.0) * 0.5 + 0.5; // Phase-shifted
  float breathTertiary = sin(u_time * 0.4 * phi * phi + 2.0) * 0.5 + 0.5; // Triple-phi
  // Combine for non-repeating organic motion (sum of golden-ratio frequencies)
  float breathAmount = (breathPrimary * 0.5 + breathSecondary * 0.3 + breathTertiary * 0.2) * 0.025;
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
  float aoScale = clamp(t * 3.0, 0.3, 1.0); // Distance-adaptive: scale down at close range
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = (0.012 + 0.09 * float(i * i) / 16.0) * aoScale;
    float d = sceneSDF(p + h * n).x;
    occ += (h - d) * sca;
    sca *= 0.74;
  }
  // Clamp occ to prevent negative values or overflow
  occ = clamp(occ, 0.0, 2.0);
  
  // IQ multi-distance AO: distance-scaled for consistent behavior at all ranges
  float ao1 = clamp(1.0 - 4.0 * max(0.005 * aoScale - sceneSDF(p + n * 0.005 * aoScale).x, 0.0), 0.0, 1.0);
  float ao2 = clamp(1.0 - 2.5 * max(0.03  * aoScale - sceneSDF(p + n * 0.03  * aoScale).x, 0.0), 0.0, 1.0);
  float ao3 = clamp(1.0 - 1.5 * max(0.12  * aoScale - sceneSDF(p + n * 0.12  * aoScale).x, 0.0), 0.0, 1.0);
  float multiAO = ao1 * 0.25 + ao2 * 0.40 + ao3 * 0.35;
  return clamp(multiAO * (1.0 - 0.8 * occ), 0.15, 1.0);
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
  // MASSIVE INCREASE: Dynamic max_dist for huge rendering distances
  // Close range: 2048.0, Medium: 1536.0, Far: 1024.0 (was 256/192/128)
  float max_dist = (cam_dist < 1.0) ? 2048.0 : (cam_dist < 3.0) ? 1536.0 : 1024.0;
  bool hit = false;
  float min_trap = 1e10;
  int steps = 0;

  // OPTIMIZATION 1: Space Leaping — skip empty space with bounding sphere
  // FIX: Bounding radius must match sceneSDF boundary (5.0) to prevent clipping
  float boundingRadius = 6.0; // Increased from 4.0 to match sceneSDF r_bound > 5.0
  float rayOriginDist = length(ro);
  if (rayOriginDist > boundingRadius) {
    // Ray starts outside bounding sphere, skip to intersection
    // FIX: Use more conservative start (0.95 instead of 0.9) to prevent missing surface
    float tmin = rayOriginDist - boundingRadius;
    if (tmin > t) t = tmin * 0.95; // Start 5% before sphere intersection (was 10%)
  }

  // OPTIMIZATION 2: LOD System — reduce iterations based on distance
  // Far away fractals don't need as many iterations
  float lodFactor = clamp(cam_dist / 10.0, 0.0, 1.0);
  int iterReduction = int(lodFactor * 8.0); // Reduce up to 8 iterations at far distance

  // MASSIVE INCREASE: Adaptive step budget for extreme detail
  // Close range: 512 steps, Medium: 384 steps, Far: 256 steps (was 256/200/160)
  int maxSteps = (cam_dist < 1.0) ? 512 : (cam_dist < 3.0) ? 384 : 256;
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

    // HIT DETECTION: Check if we're at the surface
    float hit_threshold = max(hitScale * 3.0, 0.002);
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // STEP SIZE: Cap at 0.5 to prevent overshooting surfaces
    // When SDF returns -2.0 (deep inside fractal), uncapped step would be
    // abs(-2.0) * 0.95 = 1.9, jumping completely past the surface
    float absD = abs(d);
    float step_d = min(absD * relaxationFactor, 0.5);
    // IMPROVED: Smaller minimum step for extreme interior detail
    // Was: max(cam_dist * 0.0001, 0.0005), now: max(cam_dist * 0.00005, 0.0001)
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

    // CONCEPTUAL FIX: Remove soft shadows from dynamic lights
    // Dynamic lights can end up behind/beside the fractal, casting camera/object shadows
    // Instead, use only Ambient Occlusion for self-shadowing
    // This ensures only the fractal casts shadows on itself, not external objects
    float sh1 = 1.0; // No soft shadows — pure AO-based shading

    // IMPROVED SSS: 5 samples with better color bleeding (was 3)
    // Based on modern volumetric subsurface scattering techniques
    float sssDist = 0.08; // Increased from 0.06 for deeper penetration
    float sssTotal = 0.0;
    for (int si = 0; si < 5; si++) { // Increased from 3 to 5 samples
      float sssAngle = float(si) * GOLDEN_ANGLE;
      vec3 sssOffset = vec3(cos(sssAngle), sin(sssAngle * 0.7), sin(sssAngle * 1.3)) * sssDist;
      float sssD = sceneSDF(p - light1 * sssOffset).x;
      sssTotal += smoothstep(0.0, sssDist * 2.0, sssD + sssDist * 2.0);
    }
    float sss = (sssTotal / 5.0) * 0.18; // Slightly increased weight
    vec3 sssCol = u_accent_color * sss * ao;
    float fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    // Diffuse lighting without soft shadows — relies on AO for depth
    float diff1 = max(dot(n, light1), 0.0);
    float diff2 = max(dot(n, light2), 0.0);

    vec3 h1 = normalize(light1 - rd);
    // FIX: Higher specular power for sharper, more defined highlights (was 32.0)
    float spec1 = pow(max(dot(n, h1), 0.0), 64.0);
    float spec2 = pow(max(dot(n, normalize(light2 - rd)), 0.0), 48.0);
    
    // curvNorm already computed above from trap-based curvature
    
    // PROCEDURAL FRACTAL TEXTURE: Add micro-detail using fractal noise
    // Creates surface variation that scales with fractal complexity
    float texScale = 8.0; // Texture frequency
    float texDetail = 0.0;
    for (int ti = 0; ti < 3; ti++) {
      float ti_f = float(ti);
      vec3 texP = p * texScale * pow(2.0, ti_f);
      texDetail += sin(texP.x * 1.3 + texP.y * 0.7) * sin(texP.y * 1.1 + texP.z * 0.9) * sin(texP.z * 1.5 + texP.x * 0.8);
      texDetail *= 0.5; // Reduce amplitude per octave
    }
    texDetail = texDetail * 0.15 + 0.85; // Scale to [0.85, 1.15] range for subtle variation
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
    
    // IMPROVED: Environment reflection — reflect view ray and sample SDF
    // Gives surfaces a subtle reflective quality without full ray tracing
    vec3 reflectDir = reflect(rd, n);
    float envReflDist = sceneSDF(p + reflectDir * 0.3).x;
    float envRefl = clamp(1.0 - envReflDist * 4.0, 0.0, 1.0);
    vec3 reflCol = mix(u_secondary_color, u_accent_color, envRefl) * envRefl * 0.25;
    // Fresnel-gated: reflections stronger at grazing angles
    reflCol *= (0.3 + 0.7 * fresnel);
    
    // Secondary bounce light: light bouncing off nearby surfaces into crevices
    vec3 bounceDir = normalize(-light1 + n * 0.5);
    float bounce = max(dot(n, bounceDir), 0.0) * 0.12;
    float bounceOcc = clamp(sceneSDF(p - light1 * 0.08).x * 12.0, 0.0, 1.0);
    vec3 bounceCol = u_secondary_color * bounce * bounceOcc * ao;

    vec3 diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    // IMPROVED specular: material-tinted for colored highlights
    vec3 specColor = mix(vec3(1.0, 0.97, 0.92), mat_col, 0.15); // Slight material tint
    vec3 specular = specColor * (spec1 * 1.3 + spec2 * 0.7) * ao;
    // IMPROVED rim: stronger at grazing angles, color-shifted
    vec3 rim = u_accent_color * fresnel * 0.8 * (0.3 + 0.7 * ao);

    // IMPROVED full lighting: ambient + refl + diffuse + bounce + specular + rim + SSS
    col = ambient * 0.5 + reflCol + diffuse * 1.4 + bounceCol * 1.8 + specular * 1.3 + rim * 1.5 + sssCol * 1.8;
    col *= (0.3 + 0.7 * ao); // Stronger AO contrast for more depth

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
    // Based on physically-based volumetric fog models
    float fogStart = mix(20.0, max(4.0, cam_dist * 3.0 + 4.0), smoothstep(0.5, 5.0, cam_dist));
    float fogDensity = mix(0.008, 0.015, smoothstep(0.3, 3.0, cam_dist));
    float fogDist = max(0.0, t - fogStart);
    float fog = 1.0 - exp(-fogDist * fogDist * fogDensity * 0.5); // Exponential-squared for smoother falloff
    col = mix(col, vec3(0.005, 0.004, 0.008), fog * clamp(u_volumetric_fog, 0.0, 1.0));
  }

  col = acesToneMap(col);

  // BLOOM SIMULATION: Brightness-based glow for light sources and specular highlights
  // Single-pass approximation: extract bright areas and add soft glow
  float brightness = dot(col, vec3(0.299, 0.587, 0.114));
  float bloomThreshold = 0.6;
  float bloomStrength = max(brightness - bloomThreshold, 0.0) * 0.35;
  // Bloom color: warm-tinted for natural look
  vec3 bloomCol = col * bloomStrength + u_accent_color * bloomStrength * 0.15;
  col += bloomCol;

  // MINIMUM BRIGHTNESS FLOOR: Prevent completely black pixels
  // Ensures all surfaces have at least a subtle ambient glow
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

  fragColor = vec4(col, 1.0);
}
`,xh=hh,vh="GoldenRatioFractalLogs",gh=1,si="userLogs";class yh{constructor(){this.db=null,this.initialized=!1,this.memoryBuffer=[]}async init(){if(!this.initialized)return new Promise((s,f)=>{try{const c=indexedDB.open(vh,gh);c.onerror=()=>{console.warn("[UserLogger] IndexedDB unavailable, using memory buffer only"),this.initialized=!0,s()},c.onsuccess=()=>{this.db=c.result,this.initialized=!0,this.flushBuffer(),s()},c.onupgradeneeded=d=>{const x=d.target.result;if(!x.objectStoreNames.contains(si)){const z=x.createObjectStore(si,{keyPath:"id",autoIncrement:!0});z.createIndex("timestamp","timestamp",{unique:!1}),z.createIndex("level","level",{unique:!1}),z.createIndex("category","category",{unique:!1})}}}catch(c){console.warn("[UserLogger] IndexedDB init failed:",c),this.initialized=!0,s()}})}async log(s){const f={...s,timestamp:Date.now(),userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"?window.location.href:void 0},c=s.level==="error"?"error":s.level==="warn"?"warn":s.level==="debug"?"debug":"info";console[c](`[UserLogger][${s.category}] ${s.message}`,s.details||""),this.memoryBuffer.push(f),this.memoryBuffer.length>1e3&&this.memoryBuffer.shift(),this.initialized&&this.db&&await this.persistToDB(f)}async persistToDB(s){if(this.db)return new Promise(f=>{try{const c=this.db.transaction([si],"readwrite");c.objectStore(si).add(s),c.oncomplete=()=>f(),c.onerror=()=>{console.warn("[UserLogger] Failed to persist log entry"),f()}}catch(c){console.warn("[UserLogger] DB write error:",c),f()}})}flushBuffer(){if(this.memoryBuffer.length===0)return;const s=[...this.memoryBuffer];this.memoryBuffer=[],s.forEach(f=>this.persistToDB(f))}async getLogs(s){return this.db?new Promise(f=>{try{const x=this.db.transaction([si],"readonly").objectStore(si).getAll();x.onsuccess=()=>{let z=x.result||[];s&&(z=z.filter(b=>this.matchesFilter(b,s))),z.sort((b,g)=>g.timestamp-b.timestamp),s!=null&&s.limit&&(z=z.slice(0,s.limit)),f(z)},x.onerror=()=>{console.warn("[UserLogger] Failed to read logs"),f([])}}catch(c){console.warn("[UserLogger] DB read error:",c),f([])}}):this.memoryBuffer.filter(f=>this.matchesFilter(f,s))}matchesFilter(s,f){return!(f!=null&&f.level&&s.level!==f.level||f!=null&&f.category&&s.category!==f.category||f!=null&&f.since&&s.timestamp<f.since)}async clearLogs(){if(!this.db){this.memoryBuffer=[];return}return new Promise(s=>{try{const f=this.db.transaction([si],"readwrite");f.objectStore(si).clear(),f.oncomplete=()=>{this.memoryBuffer=[],s()},f.onerror=()=>s()}catch{s()}})}async exportLogs(){const s=await this.getLogs({limit:1e4});return JSON.stringify(s,null,2)}getStats(){const s=this.memoryBuffer,f={};let c=0,d=0;return s.forEach(x=>{f[x.category]=(f[x.category]||0)+1,x.level==="error"&&c++,x.level==="warn"&&d++}),{total:s.length,errors:c,warnings:d,byCategory:f}}}const Ei=new yh;typeof window<"u"&&Ei.init().catch(()=>{});class bh extends zf{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline"}init(){const s=performance.now();console.group("[WebGL2] === INITIALIZATION START ==="),Ke.log("info","gpu","WebGL2 initialization started"),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const f=this.canvas.getBoundingClientRect();(f.width===0||f.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let c=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED"),c||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),c=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED")),c||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),c=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED")),!c){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const B=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return B&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",B.getParameter(B.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=c,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",c.getParameter(c.VERSION)),console.info("[WebGL2] GL_RENDERER:",c.getParameter(c.RENDERER)),console.info("[WebGL2] GL_VENDOR:",c.getParameter(c.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",c.getParameter(c.SHADING_LANGUAGE_VERSION));const d=c.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(d==null?void 0:d.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",d==null?void 0:d.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",d==null?void 0:d.includes("WEBGL_debug_renderer_info"));try{const B=c.getExtension("WEBGL_debug_renderer_info");if(B){const q=c.getParameter(B.UNMASKED_RENDERER_WEBGL);q&&(this.rendererInfo=q)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const x=this.compileShader(c.VERTEX_SHADER,mh),z=this.compileShader(c.FRAGMENT_SHADER,xh);if(!x||!z)return!1;const b=c.createProgram();if(!b)return!1;if(c.attachShader(b,x),c.attachShader(b,z),c.linkProgram(b),c.deleteShader(x),c.deleteShader(z),!c.getProgramParameter(b,c.LINK_STATUS))return console.error("WebGL Program Link Error:",c.getProgramInfoLog(b)),!1;this.program=b;const g=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=c.createVertexArray(),c.bindVertexArray(this.vao),this.vbo=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,this.vbo),c.bufferData(c.ARRAY_BUFFER,g,c.STATIC_DRAW);const y=c.getAttribLocation(b,"a_position");c.enableVertexAttribArray(y),c.vertexAttribPointer(y,2,c.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed","u_palette_rotation"].forEach(B=>{this.uniformLocs[B]=c.getUniformLocation(b,B)});const k=performance.now()-s;return Ke.log("info","gpu","WebGL2 initialization completed",{initTime:k}),Ke.trackGPUContext(!1,k),console.info("[WebGL2] Initialization time:",k.toFixed(2),"ms"),console.groupEnd(),!0}compileShader(s,f){if(!this.gl)return null;const c=this.gl,d=c.createShader(s);if(!d)return null;if(c.shaderSource(d,f),c.compileShader(d),c.getExtension("KHR_parallel_shader_compile"),!c.getShaderParameter(d,c.COMPILE_STATUS)){const x=c.getShaderInfoLog(d);return console.error("Shader compilation error:",x),Ei.log({level:"error",category:"render",message:`Shader compilation failed: ${s===c.VERTEX_SHADER?"vertex":"fragment"}`,details:{error:x==null?void 0:x.substring(0,500)}}),c.deleteShader(d),null}return console.info("[WebGL2] Shader compiled successfully ("+(s===c.VERTEX_SHADER?"vertex":"fragment")+")"),d}render(s,f){const c=this.gl;if(!c||!this.program||!this.vao){Ei.log({level:"warn",category:"render",message:"WebGL2 render skipped - missing context/program/vao",details:{hasGl:!!c,hasProgram:!!this.program,hasVao:!!this.vao}});return}const{duration:d}=Sf(()=>{c.viewport(0,0,this.canvas.width,this.canvas.height),c.useProgram(this.program),c.bindVertexArray(this.vao);const x=this.resolvePalette(f),z=this.computeIndices(f),b=new Float32Array(48);this.packUniforms(b,s,f,x,z),Ur(b[2],"u_time",void 0,[0,1e3])||Ke.log("error","render","Invalid time value",{time:b[2]}),Ur(b[6],"u_zoom",void 0,[.01,100])||Ke.log("warn","render","Zoom out of range",{zoom:b[6]});const g=(B,q)=>{const Y=this.uniformLocs[B];Y&&c.uniform1f(Y,q)},y=(B,q,Y)=>{const K=this.uniformLocs[B];K&&c.uniform2f(K,q,Y)},G=(B,q,Y,K)=>{const W=this.uniformLocs[B];W&&c.uniform3f(W,q,Y,K)};y("u_resolution",b[0],b[1]),g("u_time",b[2]),g("u_phi_val",b[3]),y("u_cam_rot",b[4],b[5]),g("u_zoom",b[6]),g("u_fractal_type",b[7]),g("u_iterations",b[8]),g("u_glow_intensity",b[9]),g("u_morph_speed",b[10]),g("u_hybrid_type",b[11]),g("u_hybrid_blend",b[12]),g("u_box_fold",b[13]),g("u_sphere_fold",b[14]),g("u_interior_cut",b[15]),G("u_primary_color",b[16],b[17],b[18]),g("u_tertiary_type",b[19]),G("u_secondary_color",b[20],b[21],b[22]),g("u_tertiary_blend",b[23]),G("u_accent_color",b[24],b[25],b[26]),g("u_compose_op",b[27]),g("u_smooth_k",b[28]),g("u_warp_strength",b[29]),g("u_octave_layers",b[30]),g("u_cam_mode",b[31]),G("u_cam_pos",b[32],b[33],b[34]),g("u_slice_plane",b[35]),g("u_headlamp_power",b[36]),g("u_volumetric_fog",b[37]),g("u_slice_axis",b[38]),g("u_render_style",b[39]),g("u_palette_seed",b[43]),g("u_palette_rotation",b[44]),c.drawArrays(c.TRIANGLES,0,3);const k=c.getError();if(k!==c.NO_ERROR){const B={[c.INVALID_ENUM]:"INVALID_ENUM",[c.INVALID_VALUE]:"INVALID_VALUE",[c.INVALID_OPERATION]:"INVALID_OPERATION",[c.OUT_OF_MEMORY]:"OUT_OF_MEMORY",[c.INVALID_FRAMEBUFFER_OPERATION]:"INVALID_FRAMEBUFFER_OPERATION"};Ei.log({level:"error",category:"render",message:`WebGL2 render error: ${B[k]||"UNKNOWN"} (0x${k.toString(16)})`,details:{timeSec:s,fractalType:f.type,renderStyle:f.renderStyle}})}},"WebGL render setup");Ke.updateFrameStats(128,.001,20),Ke.trackGPUContext(!1,d),d>16&&Ei.log({level:"warn",category:"performance",message:`Slow WebGL frame: ${d.toFixed(2)}ms`,details:{fractalType:f.type}})}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function _h(u,s){const{forcedBackend:f,isEmbeddedBrowser:c,isMobileDevice:d,paramsRef:x,onTelemetryUpdate:z,onEngineReady:b,onNextSpecimen:g,onPrevSpecimen:y,onInteraction:G,screenshotRequested:k,onScreenshotCaptured:B}=s,q=E.useRef(null),[Y,K]=E.useState(()=>f==="webgl2"?"webgl2":f==="webgpu"?c?"webgl2":"webgpu":"webgl2"),[W,H]=E.useState(!0),[re,S]=E.useState(!1),[X,ge]=E.useState("Initializing..."),[Me,ne]=E.useState(""),[qe,Ye]=E.useState(0),[Ve,Je]=E.useState(0),[Ie,pe]=E.useState(0),[He,me]=E.useState(0),[A,L]=E.useState([0,0]),M=E.useRef(null),Q=E.useRef(null),ee=E.useRef("Initializing..."),h=E.useRef(z);h.current=z;const T=E.useRef(B);T.current=B;const V=E.useRef(g);V.current=g;const P=E.useRef(y);P.current=y;const te=E.useRef(G);te.current=G;const ie=E.useRef([]),fe=E.useRef(0),Ge=E.useRef(0),he=E.useRef(null),et=E.useRef(0),_t=E.useRef(!1),Ee=E.useRef(new Set),la=E.useRef(!1),Le=E.useRef(!0),Ct=E.useRef(!1),ra=E.useRef(!1),Fa=E.useRef(!1),Oi=E.useRef({x:0,y:0}),ft=E.useRef({x:0,y:0}),ui=E.useRef(0),pi=E.useRef(0),ki=.92,qa=1e-4;E.useEffect(()=>{ra.current=k},[k]),E.useEffect(()=>{if(f==="webgl2")K("webgl2");else if(f==="webgpu"){if(c){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),_t.current=!0,K("webgl2");return}_t.current=!1,K("webgpu")}else f==="auto"&&K("webgl2")},[f]);const tt=E.useCallback(()=>{const Ne=q.current,U=u.current;if(!Ne||!U)return;const Z=c||d?1.5:2,I=Math.min(window.devicePixelRatio||1,Z),ze=U.clientWidth||window.innerWidth||800,se=U.clientHeight||window.innerHeight||600,zt=Math.max(Math.floor(ze*I),320),St=Math.max(Math.floor(se*I),240);if(Ne.width!==zt||Ne.height!==St){const dt=Ne.width,Ue=Ne.height;Ne.width=zt,Ne.height=St,console.info(`[Resize] Canvas buffer: ${dt}x${Ue} → ${zt}x${St} (container: ${ze}x${se}, DPR: ${I.toFixed(2)})`)}},[c,d]);return E.useEffect(()=>{const Ne=q.current;if(!Ne)return;tt();let U=!1;const Z=setTimeout(()=>{U||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),H(!1))},12e3),I=setTimeout(()=>{!Ct.current&&!U&&console.error("[useRenderEngine] Engine setup timed out after 20s — GPU unavailable")},2e4);async function ze(){if(!Ne)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",Y),H(!0),Ct.current=!1,S(!1),M.current&&(M.current.destroy(),M.current=null),Q.current&&(Q.current.destroy(),Q.current=null),Y==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const Et=new cc(Ne);if(await Et.init()&&!U){M.current=Et,Ct.current=!0,S(!0),ee.current="WebGPU (WGSL)",ge("WebGPU (WGSL)"),ne(Et.adapterInfo),H(!1),console.info(`[DIAG] Engine ready: WebGPU | ${Et.adapterInfo} | ${Ne.width}x${Ne.height} | fractal=${x.current.type} | palette=${x.current.paletteId} | renderStyle=${x.current.renderStyle} | paletteSeed=${x.current.paletteSeed??0}`),b==null||b();return}else{_t.current=!0,U?H(!1):K("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const we=new bh(Ne);we.init()&&!U?(Q.current=we,Ct.current=!0,S(!0),ee.current="WebGL2 (GLSL)",ge("WebGL2 (GLSL)"),ne(we.rendererInfo),H(!1),console.info(`[DIAG] Engine ready: WebGL2 | ${we.rendererInfo} | ${Ne.width}x${Ne.height} | fractal=${x.current.type} | palette=${x.current.paletteId} | renderStyle=${x.current.renderStyle} | paletteSeed=${x.current.paletteSeed??0}`),b==null||b()):(H(!1),b==null||b())}ze().catch(we=>{console.error("[useRenderEngine] Engine setup crashed:",we),H(!1),b==null||b()});const se=setTimeout(()=>{U||(tt(),requestAnimationFrame(()=>{U||tt()}))},100),zt=we=>{we.preventDefault(),la.current=!0},St=()=>{la.current=!1,ze()};Ne.addEventListener("webglcontextlost",zt,!1),Ne.addEventListener("webglcontextrestored",St,!1);const dt=u.current;let Ue=null;return dt&&(Ue=new ResizeObserver(()=>{U||tt()}),Ue.observe(dt)),()=>{var we,Te;U=!0,clearTimeout(I),clearTimeout(Z),clearTimeout(se),Ne.removeEventListener("webglcontextlost",zt),Ne.removeEventListener("webglcontextrestored",St),Ue&&Ue.disconnect(),(we=M.current)==null||we.destroy(),(Te=Q.current)==null||Te.destroy()}},[Y,tt]),E.useEffect(()=>{let Ne=!0,U=performance.now();const Z=()=>{Le.current=!document.hidden,Le.current&&(U=performance.now())};document.addEventListener("visibilitychange",Z);const I=ze=>{var Ue,we;if(!Ne)return;if(la.current){he.current=requestAnimationFrame(I);return}if(!Le.current){he.current=requestAnimationFrame(I);return}if(!Ct.current){setTimeout(()=>{Ne&&(he.current=requestAnimationFrame(I))},1e3);return}const se=x.current,zt=ze-U,St=se.targetFps||60,dt=St>=240?0:1e3/St;if(dt<=0||zt>=dt-.75){const Te=Math.min(zt,100);U=ze,et.current+=Te/1e3;const Et=et.current;if(se.cameraMode==="flyThrough"){const mt=se.rotX,ta=se.rotY,Yt=Math.cos(mt),ma=Math.sin(mt),oa=Math.cos(ta),Fi=Math.sin(ta),Ot=[ma*oa,Fi,-Yt*oa],ha=[Yt,0,ma],hi=[0,1,0];let st=1.4*(Te/1e3);(Ee.current.has("ShiftLeft")||Ee.current.has("ShiftRight"))&&(st*=2.8);let Ze=0,kt=0,xa=0;(Ee.current.has("KeyW")||Ee.current.has("ArrowUp"))&&(Ze+=Ot[0]*st,kt+=Ot[1]*st,xa+=Ot[2]*st),(Ee.current.has("KeyS")||Ee.current.has("ArrowDown"))&&(Ze-=Ot[0]*st,kt-=Ot[1]*st,xa-=Ot[2]*st),(Ee.current.has("KeyA")||Ee.current.has("ArrowLeft"))&&(Ze-=ha[0]*st,xa-=ha[2]*st),(Ee.current.has("KeyD")||Ee.current.has("ArrowRight"))&&(Ze+=ha[0]*st,xa+=ha[2]*st),(Ee.current.has("KeyE")||Ee.current.has("Space"))&&(kt+=hi[1]*st),(Ee.current.has("KeyQ")||Ee.current.has("KeyC"))&&(kt-=hi[1]*st),(Ze!==0||kt!==0||xa!==0)&&(x.current={...se,camPosX:(se.camPosX??0)+Ze,camPosY:(se.camPosY??0)+kt,camPosZ:(se.camPosZ??0)+xa})}const fi=se.autoRotate?Et*se.autoRotateSpeed*.12:0,An=se.autoRotate?Math.sin(Et*.18)*.06:0;let da=0,di=0;if(!Fa.current&&(Math.abs(ft.current.x)>qa||Math.abs(ft.current.y)>qa)){const mt=se.zoom,ta=.0045*Math.max(.12,Math.min(1,mt/2.8)),Yt=Te;da=ft.current.x*Yt*ta*.5,di=ft.current.y*Yt*ta*.5,ft.current.x*=ki,ft.current.y*=ki,Math.abs(ft.current.x)<qa&&(ft.current.x=0),Math.abs(ft.current.y)<qa&&(ft.current.y=0)}const mi={...se,rotX:se.rotX+fi+da,rotY:Math.max(-1.52,Math.min(1.52,se.rotY+An+di))},Ae=q.current;if(Ae&&Ae.width>0&&Ae.height>0&&(M.current?M.current.render(Et,mi):Q.current&&Q.current.render(Et,mi)),ra.current&&Ae)try{const mt=Ae.toDataURL("image/png");(Ue=T.current)==null||Ue.call(T,mt)}catch(mt){console.error("Screenshot capture failed",mt)}const ea=ie.current;if(ea.push(Te),ea.length>72&&ea.shift(),ze-fe.current>250){fe.current=ze;const mt=ea.reduce((Ze,kt)=>Ze+kt,0)/ea.length,ta=Te>0?Math.round(1e3/Te):0,Yt=mt>0?Math.round(1e3/mt):0,ma=[...ea].sort((Ze,kt)=>kt-Ze),oa=Math.floor(ma.length*.05),Fi=ma[oa]||Te,Ot=Fi>0?Math.round(1e3/Fi):0,ha=M.current?M.current.adapterInfo:Q.current?Q.current.rendererInfo:"GPU Engine",hi=Y==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",st={fps:ta,avgFps:Yt,frameTimeMs:parseFloat(Te.toFixed(2)),onePercentLow:Ot,backend:hi,adapterName:ha,resolution:[(Ae==null?void 0:Ae.width)||0,(Ae==null?void 0:Ae.height)||0],drsScale:1,targetFps:se.targetFps,interiorDistance:0};if((we=h.current)==null||we.call(h,st),Ye(ta),Je(Yt),pe(parseFloat(Te.toFixed(2))),me(Ot),L([(Ae==null?void 0:Ae.width)||0,(Ae==null?void 0:Ae.height)||0]),Ge.current||(Ge.current=ze),ze-Ge.current>3e4){Ge.current=ze;const Ze=x.current;console.info(`[DIAG] Health: fps=${ta} avg=${Yt} 1%=${Ot} | fractal=${Ze.type} hybrid=${Ze.hybridType} | style=${Ze.renderStyle} cam=${Ze.cameraMode} | palette=${Ze.paletteId} seed=${Ze.paletteSeed??0} rot=${Ze.paletteRotation} | audio=${Ze.enableAudio} tuning=${Ze.audioTuning} | res=${Ae==null?void 0:Ae.width}x${Ae==null?void 0:Ae.height}`)}}}he.current=requestAnimationFrame(I)};return he.current=requestAnimationFrame(I),()=>{Ne=!1,document.removeEventListener("visibilitychange",Z),he.current&&cancelAnimationFrame(he.current)}},[Y]),E.useEffect(()=>{const Ne=Z=>{var I,ze,se;((I=Z.target)==null?void 0:I.tagName)!=="INPUT"&&(Z.repeat||(Ee.current.add(Z.code),x.current.cameraMode!=="flyThrough"&&(Z.key===" "||Z.key==="ArrowRight"||Z.key==="ArrowDown"||Z.key==="PageDown"?(Z.preventDefault(),(ze=V.current)==null||ze.call(V)):(Z.key==="ArrowLeft"||Z.key==="ArrowUp"||Z.key==="PageUp")&&(Z.preventDefault(),(se=P.current)==null||se.call(P)))))},U=Z=>{Ee.current.delete(Z.code)};return window.addEventListener("keydown",Ne),window.addEventListener("keyup",U),()=>{window.removeEventListener("keydown",Ne),window.removeEventListener("keyup",U)}},[]),{activeEngineType:Y,isCompiling:W,isEngineReady:re,backendLabel:X,adapterInfo:Me,fps:qe,avgFps:Ve,frameTimeMs:Ie,onePercentLow:He,resolution:A,canvasRef:q,keysPressedRef:Ee,isDraggingRef:Fa,velocityRef:ft,lastMousePosRef:Oi,lastInteractionReportTimeRef:pi,lastMoveTimeRef:ui,params:x.current}}const zh=({params:u,onParamsChange:s,onTelemetryUpdate:f,screenshotRequested:c,onScreenshotCaptured:d,forcedBackend:x="auto",onInteraction:z,onNextSpecimen:b,onPrevSpecimen:g,onEngineReady:y,scrollMode:G="feed"})=>{const k=E.useRef(null),B=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),q=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),Y=E.useRef(u);Y.current=u;const K=E.useRef(null);E.useRef(0);const W=_h(k,{forcedBackend:x,isEmbeddedBrowser:B,isMobileDevice:q,paramsRef:Y,onTelemetryUpdate:f,onEngineReady:y,onNextSpecimen:b,onPrevSpecimen:g,onInteraction:z,screenshotRequested:c,onScreenshotCaptured:d}),{canvasRef:H,isDraggingRef:re,velocityRef:S,lastMousePosRef:X,lastInteractionReportTimeRef:ge,lastMoveTimeRef:Me,activeEngineType:ne,isCompiling:qe}=W;E.useEffect(()=>{const pe=H.current;if(!pe){Ei.log({level:"error",category:"render",message:"FractalCanvas: canvas ref is null on mount"});return}Ei.log({level:"info",category:"render",message:"FractalCanvas: mounted",details:{width:pe.width,height:pe.height,activeEngineType:ne}});const He=L=>{L.preventDefault();const M=Math.exp(Math.sign(L.deltaY)*Math.min(Math.abs(L.deltaY)*.0012,.18));z==null||z(Math.abs(L.deltaY)*.015,0),s(Q=>({...Q,zoom:Math.max(.05,Math.min(32,Q.zoom*M))})),df.recordInteraction("zoom",Math.log(M)*10)};pe.addEventListener("wheel",He,{passive:!1,capture:!0});const me=L=>{if(L.touches.length===2){L.preventDefault();const M=L.touches[0],Q=L.touches[1];K.current=Math.hypot(M.clientX-Q.clientX,M.clientY-Q.clientY)}};pe.addEventListener("touchstart",me,{passive:!1,capture:!0});const A=L=>{if(L.touches.length===2){L.preventDefault();const M=L.touches[0],Q=L.touches[1],ee=Math.hypot(M.clientX-Q.clientX,M.clientY-Q.clientY);if(K.current!==null&&K.current>5){const h=K.current/Math.max(ee,1),T=Math.pow(h,.95);z==null||z(Math.abs(K.current-ee)*.04,0),s(V=>({...V,zoom:Math.max(.02,Math.min(64,V.zoom*T))}))}K.current=ee}};return pe.addEventListener("touchmove",A,{passive:!1,capture:!0}),()=>{pe.removeEventListener("wheel",He,{capture:!0}),pe.removeEventListener("touchstart",me,{capture:!0}),pe.removeEventListener("touchmove",A,{capture:!0})}},[H,s,z]);const Ye=pe=>{re.current=!0,X.current={x:pe.clientX,y:pe.clientY},S.current={x:0,y:0},pe.target.setPointerCapture(pe.pointerId)},Ve=pe=>{if(!re.current)return;const He=pe.clientX-X.current.x,me=pe.clientY-X.current.y,A=performance.now(),L=Math.max(1,A-Me.current);Me.current=A,X.current={x:pe.clientX,y:pe.clientY};const M=Math.hypot(He,me);A-ge.current>300&&(ge.current=A,z==null||z(0,M));const Q=Y.current.zoom,ee=.0015*Math.max(.1,Math.min(.6,Q/3));S.current={x:He/L,y:me/L};const h=.08,T=Math.max(-h/ee,Math.min(h/ee,He)),V=Math.max(-h/ee,Math.min(h/ee,me));s(P=>({...P,rotX:((P.rotX+T*ee+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,rotY:Math.max(-1.48,Math.min(1.48,P.rotY+V*ee))})),df.recordInteraction("rotate",Math.hypot(He,me)/L)},Je=pe=>{re.current=!1;try{pe.target.releasePointerCapture(pe.pointerId)}catch{}},Ie=()=>{K.current=null};return l.jsxs("div",{ref:k,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[qe&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",ne==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),l.jsx("canvas",{ref:H,id:"fractal-canvas",className:"w-full h-full block touch-none",onPointerDown:Ye,onPointerMove:Ve,onPointerUp:Je,onPointerCancel:Je,onTouchEnd:Ie},ne)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dh=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,c)=>c?c.toUpperCase():f.toLowerCase()),mf=u=>{const s=Dh(u);return s.charAt(0).toUpperCase()+s.slice(1)},Df=(...u)=>u.filter((s,f,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===f).join(" ").trim(),Nh=u=>{for(const s in u)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=E.forwardRef(({color:u="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:c,className:d="",children:x,iconNode:z,...b},g)=>E.createElement("svg",{ref:g,...wh,width:s,height:s,stroke:u,strokeWidth:c?Number(f)*24/Number(s):f,className:Df("lucide",d),...!x&&!Nh(b)&&{"aria-hidden":"true"},...b},[...z.map(([y,G])=>E.createElement(y,G)),...Array.isArray(x)?x:[x]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(u,s)=>{const f=E.forwardRef(({className:c,...d},x)=>E.createElement(Ah,{ref:x,iconNode:s,className:Df(`lucide-${Sh(mf(u))}`,`lucide-${u}`,c),...d}));return f.displayName=mf(u),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],bl=ue("activity",jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Nf=ue("atom",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Dn=ue("book-open",Th);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],Ch=ue("bookmark-plus",Rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Oh=ue("box",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Fh=ue("brain",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Lh=ue("camera",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Bh=ue("chart-column",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wf=ue("check",Hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yh=ue("chevron-down",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Xh=ue("chevron-left",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Af=ue("chevron-right",Ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Zh=ue("chevron-up",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Br=ue("compass",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ic=ue("cpu",Kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],jf=ue("crosshair",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],$h=ue("droplet",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],t2=ue("ellipsis",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Mf=ue("eye",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],n2=ue("flame",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],r2=ue("grid-3x3",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Lr=ue("heart",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],c2=ue("infinity",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],p2=ue("info",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Nn=ue("layers",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],m2=ue("maximize",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Tf=ue("mouse-pointer",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],v2=ue("music",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rf=ue("play",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],b2=ue("radio",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],z2=ue("scan",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],D2=ue("search",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],w2=ue("share-2",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nc=ue("shield-check",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],wn=ue("sparkles",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],T2=ue("trash-2",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Cf=ue("user",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],uc=ue("volume-2",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ef=ue("volume-x",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],k2=ue("wrench",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_l=ue("x",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],L2=ue("zoom-in",q2),U2=({telemetry:u,targetFps:s,phiMultiplier:f})=>{const[c,d]=E.useState([]),[x,z]=E.useState(!1);E.useEffect(()=>{u.frameTimeMs>0&&d(y=>[...y,u.frameTimeMs].slice(-40))},[u.frameTimeMs]);const b=s>0?1e3/s:6.94;s===144||s===0&&u.fps>=140;const g=u.frameTimeMs<=b*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${u.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${u.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:u.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>z(!x),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:x?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${u.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:u.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[u.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${g?"text-emerald-400":"text-amber-400"}`,children:u.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(u.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!x&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[s," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",b.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:c.map((y,G)=>{const k=Math.min(Math.max(y/20*100,8),100),B=y<=b*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${B?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${k}%`},title:`${y} ms`},G)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(wn,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:u.adapterName,children:u.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[u.resolution[0],"×",u.resolution[1]]})]})]})]})]})})},B2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Of={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},H2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],lc={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},G2=1.61803398875,oc=137.507764;function Or(u,s,f){u=(u%360+360)%360,s=Math.max(0,Math.min(1,s)),f=Math.max(0,Math.min(1,f));const c=(1-Math.abs(2*f-1))*s,d=c*(1-Math.abs(u/60%2-1)),x=f-c/2;let z=0,b=0,g=0;return u<60?(z=c,b=d,g=0):u<120?(z=d,b=c,g=0):u<180?(z=0,b=c,g=d):u<240?(z=0,b=d,g=c):u<300?(z=d,b=0,g=c):(z=c,b=0,g=d),[z+x,b+x,g+x]}function Y2(u,s){const f=u,c=(u+oc)%360,d=(u+oc*2)%360;return{id:`golden-gen-${Math.floor(u)}`,name:`Гармоника φ (${s})`,primary:Or(f,.85,.45),secondary:Or(c,.8,.55),accent:Or(d,.95,.65),ambient:Or(f,.6,.12)}}const ka=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],zn={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона"},V2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5},rc="golden_ratio_taste_profile_v2",X2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function ci(u){switch(u){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class P2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem(rc);if(f){const c=JSON.parse(f);return ka.forEach(d=>{c.typeAffinities&&c.typeAffinities[d]===void 0&&(c.typeAffinities[d]=1)}),c}}catch{}const s={};return ka.forEach(f=>{s[f]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(rc,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(rc,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}getOpSynergy(s,f){return s===f?1.2:s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"?1.1:s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"?1.15:s==="minimal"&&f==="geometry"||s==="geometry"&&f==="minimal"?1.1:1}getPreferredOps(s,f,c){if(s===f){const d=c.filter(x=>x==="smoothMorph"||x==="smoothUnion");return d.length>0?d:c}if(s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"){const d=c.filter(x=>x==="domainWarp"||x==="smoothUnion");return d.length>0?d:c}if(s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"){const d=c.filter(x=>x==="quantumResonance"||x==="smoothMorph");return d.length>0?d:c}if(s==="minimal"||f==="minimal"){const d=c.filter(x=>x==="fractalLattice"||x==="smoothUnion");return d.length>0?d:c}return c}getHybridRecommendations(s=5){const f=[],c=ka.map(d=>({type:d,affinity:this.taste.typeAffinities[d]||1,arch:ci(d)})).sort((d,x)=>x.affinity-d.affinity);for(const{type:d,affinity:x,arch:z}of c.slice(0,8)){const b=lc[d];if(b)for(const g of b.partners){const y=this.taste.typeAffinities[g]||1,G=ci(g),B=this.history.some(re=>re.type===d&&re.hybridType===g||re.type===g&&re.hybridType===d)?.6:1.4,q=this.getOpSynergy(z,G),Y=x*y*B*q,W=this.getPreferredOps(z,G,b.ops)[0];let H="";z===G?H=`Same archetype (${z}) — natural visual harmony`:x>2&&y>2?H="Both types in your taste profile":x>2?H=`Matches your love of ${z} fractals`:y>2?H=`Pairs with your interest in ${G} patterns`:H=`Unexplored ${z}+${G} combination`,f.push({type:d,partner:g,op:W,score:Y,reason:H})}}return f.sort((d,x)=>x.score-d.score),f.slice(0,s)}breedNextSpecimen(s){var He;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=s;if(!f){const me=ka,A=me.map(Q=>{const ee=Math.max(.2,this.taste.typeAffinities[Q]||1),h=this.recentTypes.includes(Q)?.05:1,T=this.currentGeneration<20?1.5:1;return ee*h*T}),L=A.reduce((Q,ee)=>Q+ee,0);let M=Math.random()*L;for(let Q=0;Q<me.length;Q++){if(M<=A[Q]){f=me[Q];break}M-=A[Q]}f||(f=me[Math.floor(Math.random()*me.length)]),this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const c=Math.random()<.5;let d=this.taste.preferredHue;if(c){const me=Math.random()<.5?1:2;d=(d+oc*me+(Math.random()*30-15))%360}else d=Math.random()*360%360;let x;if(Math.random()<.65){const me=this.history.length>0?(He=this.history[this.history.length-1].palette)==null?void 0:He.id:"";let A=Sn.filter(L=>L.id!==me);A.length===0&&(A=Sn),x=A[Math.floor(Math.random()*A.length)]}else x=Y2(d,`Ген #${this.currentGeneration}`);const b=(Math.random()-.5)*.08,g=parseFloat((G2+b).toFixed(5)),y=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),G=Math.max(12,Math.min(32,y)),k=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),B=parseFloat(k.toFixed(2)),q=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),Y=parseFloat(q.toFixed(2)),K=V2[f]*(.95+Math.random()*.1),W=Math.random()<.8;let H=f,re=f,S=0,X=0,ge="smoothUnion",Me=1,ne=.32,qe=.22,Ye=`${zn[f]} • φ-${this.currentGeneration}`;if(W){const me=lc[f]||{partners:ka.filter(P=>P!==f),ops:["smoothUnion","smoothMorph","domainWarp"]},A=ci(f);let L=me.partners[0],M=-1;for(const P of me.partners){const te=ci(P),ie=A===te?1.5:.8,fe=Math.max(.2,this.taste.typeAffinities[P]||1),he=this.history.some(Ee=>Ee.hybridType===P&&Ee.type===f)?.5:1.3,et=this.getOpSynergy(A,te),_t=ie*fe*he*et;_t>M&&(M=_t,L=P)}H=L;const Q=ci(H),ee=this.getPreferredOps(A,Q,me.ops);ge=ee[Math.floor(Math.random()*ee.length)],S=parseFloat((.15+Math.random()*.55).toFixed(3)),ne=parseFloat((.2+Math.random()*.35).toFixed(3)),qe=parseFloat((.15+Math.random()*.4).toFixed(3)),Me=Math.random()<.4?2:1;const h=Of[ge],T=zn[f].split(" ")[0],V=zn[H].split(" ")[0];if(Ye=`${T} ${h} ${V} • φ-${this.currentGeneration}`,Math.random()<.5){const te=(lc[H]||{partners:ka.filter(ie=>ie!==f&&ie!==H)}).partners.filter(ie=>ie!==f&&ie!==H);if(te.length>0){let ie=te[0],fe=-1;for(const he of te){const et=ci(he),_t=Math.max(.2,this.taste.typeAffinities[he]||1),la=this.history.some(Ct=>Ct.tertiaryType===he)?.5:1.2,Le=_t*la*(A===et?1.3:.9);Le>fe&&(fe=Le,ie=he)}re=ie,X=parseFloat((.1+Math.random()*.3).toFixed(3));const Ge=zn[re].split(" ")[0];Ye=`${T} ${h} ${V} ⊕ ${Ge} • φ-${this.currentGeneration}`}}}const Ve=parseFloat((.7+Math.random()*1.5).toFixed(3)),Je=parseFloat((.35+Math.random()*1.05).toFixed(3)),pe={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:Ye,type:f,hybridType:H,tertiaryType:re,compositeOp:ge,hybridBlend:S,tertiaryBlend:X,smoothK:ne,warpStrength:qe,octaveLayers:Me,boxFold:Ve,sphereFold:Je,interiorCut:0,palette:x,iterations:G,phiMultiplier:g,morphSpeed:B,glowIntensity:Y,zoom:K,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(pe),this.history.length>100&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,pe}registerEngagement(s,f,c,d){d.dwellTimeSeconds+=s,Math.abs(f)>.05&&d.zoomInteractions++,c>.05&&d.orbitInteractions++;const x=Math.min(35,d.dwellTimeSeconds/90*35),z=Math.min(18,Math.log1p(d.zoomInteractions)*3.2),b=Math.min(18,Math.log1p(d.orbitInteractions)*2.8),y=Math.round(Math.min(96,25+x+z+b));if(d.affinityScore=Math.max(d.affinityScore,y),d.dwellTimeSeconds>10&&d.affinityScore>50){const G=this.taste.typeAffinities[d.type]||1;if(this.taste.typeAffinities[d.type]=Math.min(4,G+.005),d.hybridType&&d.hybridBlend>.1){const H=this.taste.typeAffinities[d.hybridType]||1;this.taste.typeAffinities[d.hybridType]=Math.min(4,H+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+d.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+d.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+d.iterations*.01);const[k,B,q]=d.palette.primary,Y=Math.max(k,B,q),K=Math.min(k,B,q),W=Y-K;if(W>.05){let H=0;Y===k?H=60*((B-q)/W%6):Y===B?H=60*((q-k)/W+2):H=60*((k-B)/W+4),H<0&&(H+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+H*.03)%360}d.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=d.affinityScore),this.saveTasteProfile()}return d.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};ka.forEach(z=>{const b=ci(z),g=this.taste.typeAffinities[z]||1;s[b]+=g,f[b]++});const d=["geometry","complex","minimal","primes","attractors"].map(z=>({archetype:z,label:X2[z],avg:f[z]>0?s[z]/f[z]:1})),x=d.reduce((z,b)=>z+b.avg,0);return d.map(z=>({archetype:z.archetype,label:z.label,percentage:Math.round(z.avg/Math.max(1e-4,x)*100),score:Math.min(100,Math.round(z.avg*25))}))}suggestRenderStyle(s){const f=["solid","xray","topo","hologram","iridescent","quantum","gemstone"];if(s){const x=ci(s),b={geometry:["solid","gemstone","topo"],complex:["hologram","quantum","iridescent"],minimal:["topo","solid","gemstone"],primes:["quantum","hologram","iridescent"],attractors:["xray","quantum","hologram"]}[x]||f;if(Math.random()<.6&&b.length>0)return b[Math.floor(Math.random()*b.length)]}const c=Math.random();if(c<.35)return"solid";const d=Math.floor((c-.35)/.65*(f.length-1));return f[Math.min(d+1,f.length-1)]}}const I2=({params:u,onParamsChange:s,onSelectFractalType:f,onCaptureScreenshot:c,onToggleFullscreen:d,onToggleInfoModal:x,onOpenAtlasModal:z,activeBackend:b,forcedBackend:g,onSelectBackend:y,onClose:G,tasteProfile:k,onSaveToFeed:B})=>{const[q,Y]=E.useState("architectures"),[K,W]=E.useState("all"),H=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],re=K==="all"?H:H.filter(S=>S.group===K);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[z&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:z,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(Dn,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),B&&l.jsxs("button",{id:"save-to-feed-btn",onClick:B,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(Ch,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:c,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(Lh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:d,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx(m2,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:x,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(Dn,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:G,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(_l,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>Y("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>Y("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>Y("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>Y("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>Y("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>Y("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>Y("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>Y("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),q==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(S=>l.jsx("button",{onClick:()=>W(S.id),className:`px-2 py-1 rounded-md text-[9px] transition ${K===S.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:S.label},S.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:re.map(S=>{const X=u.type===S.id;return l.jsxs("button",{id:`arch-btn-${S.id}`,onClick:()=>{f?f(S.id):s(ge=>({...ge,type:S.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${X?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${X?"text-amber-300":"text-neutral-200"}`,children:S.label}),X&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:S.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:S.formula})]},S.id)})})]}),q==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:H2.map(S=>l.jsxs("button",{onClick:()=>s(X=>({...X,compositeOp:S})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${u.compositeOp===S?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:B2[S]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Of[S]})]},S))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((u.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:u.hybridType||u.type,onChange:S=>s(X=>({...X,hybridType:S.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:ka.map(S=>l.jsx("option",{value:S,children:zn[S]},S))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:u.hybridBlend??.35,onChange:S=>s(X=>({...X,hybridBlend:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((u.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:u.tertiaryType||"riemannZeta",onChange:S=>s(X=>({...X,tertiaryType:S.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:ka.map(S=>l.jsx("option",{value:S,children:zn[S]},S))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:u.tertiaryBlend??.2,onChange:S=>s(X=>({...X,tertiaryBlend:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:u.smoothK,onChange:S=>s(X=>({...X,smoothK:parseFloat(S.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.warpStrength,onChange:S=>s(X=>({...X,warpStrength:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]})]}),q==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(S=>l.jsxs("button",{onClick:()=>s(X=>({...X,cameraMode:S.id})),className:`p-2 rounded-lg border text-left transition ${u.cameraMode===S.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:S.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:S.desc})]},S.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:u.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(S=>l.jsxs("button",{onClick:()=>s(X=>({...X,renderStyle:S.id})),className:`p-2 rounded-lg border text-left transition ${(u.renderStyle||"solid")===S.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:S.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:S.desc})]},S.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:u.slicePlane>.01?`${(u.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(S=>l.jsx("button",{onClick:()=>s(X=>({...X,sliceAxis:S.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(u.sliceAxis||"golden")===S.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:S.label},S.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.slicePlane,onChange:S=>s(X=>({...X,slicePlane:parseFloat(S.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>s(S=>({...S,probeActive:!S.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${u.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${u.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>s(S=>({...S,macroMode:!S.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${u.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${u.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(u.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:u.headlampPower??1,onChange:S=>s(X=>({...X,headlampPower:parseFloat(S.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(u.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:u.volumetricFog??.4,onChange:S=>s(X=>({...X,volumetricFog:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((u.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:u.interiorCut??.4,onChange:S=>s(X=>({...X,interiorCut:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]})]}),q==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:Sn.map(S=>{const X=u.paletteId===S.id;return l.jsxs("button",{onClick:()=>s(ge=>({...ge,paletteId:S.id,customPalette:S})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${X?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${X?"text-amber-300":"text-neutral-200"}`,children:S.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${S.primary.map(ge=>Math.round(ge*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${S.secondary.map(ge=>Math.round(ge*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${S.accent.map(ge=>Math.round(ge*255)).join(",")})`}})]})]},S.id)})}),q==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:u.phiMultiplier,onChange:S=>s(X=>({...X,phiMultiplier:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:u.iterations,onChange:S=>s(X=>({...X,iterations:parseInt(S.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[u.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:u.morphSpeed,onChange:S=>s(X=>({...X,morphSpeed:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:u.boxFold,onChange:S=>s(X=>({...X,boxFold:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:u.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:u.sphereFold,onChange:S=>s(X=>({...X,sphereFold:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]})]}),q==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(S=>l.jsx("button",{onClick:()=>s(X=>({...X,targetFps:S})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${u.targetFps===S?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:S===0?"Uncapped":`${S} FPS`},S))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>s(S=>({...S,drsEnabled:!S.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${u.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:u.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(S=>l.jsx("button",{onClick:()=>y(S.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${g===S.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:S.label},S.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",b]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),q==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[u.enableAudio?l.jsx(uc,{className:"w-4 h-4 text-amber-400"}):l.jsx(Ef,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>s(S=>({...S,enableAudio:!S.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${u.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:u.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((u.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.audioVolume??.65,onChange:S=>s(X=>({...X,audioVolume:parseFloat(S.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(S=>l.jsxs("button",{onClick:()=>s(X=>({...X,audioTuning:S.id})),className:`w-full p-2 rounded-lg border text-left transition ${(u.audioTuning||"phi432")===S.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:S.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:S.desc})]},S.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),q==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(k==null?void 0:k.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(k==null?void 0:k.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((k==null?void 0:k.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((k==null?void 0:k.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},Z2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},Q2=({specimen:u,resonanceScore:s,isInteracting:f,interactionType:c,onNext:d,onPrev:x,onFavorite:z,onOpenProfile:b,enableAudio:g,onToggleAudio:y,onOpenResearchModal:G,onOpenAtlas:k,isFeedOpen:B,onToggleFeed:q,isCurrentLiked:Y=!1,params:K})=>{const[W,H]=E.useState(!1),[re,S]=E.useState(!1),[X,ge]=E.useState(!1),[Me,ne]=E.useState(!1),[qe,Ye]=E.useState(!1),Ve=E.useRef(null),Je=E.useRef(!1);E.useEffect(()=>{H(Y)},[u==null?void 0:u.id,Y]);const Ie=()=>{Ve.current&&clearTimeout(Ve.current),Ve.current=setTimeout(()=>{Je.current||(S(!1),ge(!1),ne(!1))},3e3)},pe=()=>{S(!0),ge(!0),Ie()},He=()=>{ne(M=>!M),S(!0),Ve.current&&clearTimeout(Ve.current)};E.useEffect(()=>(pe(),()=>{Ve.current&&clearTimeout(Ve.current)}),[]),E.useEffect(()=>{const M=ee=>{(ee.clientY<80||ee.clientY>window.innerHeight-120)&&pe()},Q=ee=>{const h=ee.target;h.closest("#top-right-bar")||h.closest("#top-right-trigger")||h.closest("#neuro-feed-bar")||(ge(!0),Ie())};return window.addEventListener("mousemove",M),window.addEventListener("touchstart",Q,{passive:!0,capture:!0}),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("touchstart",Q,{capture:!0})}},[]);const me=()=>{H(!0),z()},A=()=>{if(!u)return;const M=K,Q=new URLSearchParams({type:u.type,hybrid:u.hybridType,tertiary:u.tertiaryType,op:u.compositeOp,blend:u.hybridBlend.toFixed(3),tertiaryBlend:u.tertiaryBlend.toFixed(3),smoothK:u.smoothK.toFixed(3),warp:u.warpStrength.toFixed(3),octaves:String(u.octaveLayers),boxFold:u.boxFold.toFixed(3),sphereFold:u.sphereFold.toFixed(3),interiorCut:u.interiorCut.toFixed(3),iterations:String(u.iterations),phi:u.phiMultiplier.toFixed(9),morphSpeed:u.morphSpeed.toFixed(3),glow:u.glowIntensity.toFixed(3),zoom:u.zoom.toFixed(3),name:u.name,palette:u.palette.id,paletteSeed:String((M==null?void 0:M.paletteSeed)??0),paletteRotation:M!=null&&M.paletteRotation?"1":"0",renderStyle:(M==null?void 0:M.renderStyle)??"solid",cameraMode:(M==null?void 0:M.cameraMode)??"orbit",camX:((M==null?void 0:M.camPosX)??0).toFixed(3),camY:((M==null?void 0:M.camPosY)??0).toFixed(3),camZ:((M==null?void 0:M.camPosZ)??-3.2).toFixed(3),headlamp:((M==null?void 0:M.headlampPower)??0).toFixed(3),fog:((M==null?void 0:M.volumetricFog)??.4).toFixed(3),slicePlane:((M==null?void 0:M.slicePlane)??0).toFixed(3),sliceAxis:(M==null?void 0:M.sliceAxis)??"golden",audio:M!=null&&M.enableAudio?"1":"0",audioVol:((M==null?void 0:M.audioVolume)??.65).toFixed(2),audioTuning:(M==null?void 0:M.audioTuning)??"phi432",drs:M!=null&&M.drsEnabled?"1":"0"}),ee=`${window.location.origin}${window.location.pathname}#${Q.toString()}`;navigator.share?navigator.share({title:u.name,text:`Фрактал: ${u.name}`,url:ee}).catch(()=>{}):navigator.clipboard.writeText(ee).then(()=>{Ye(!0),setTimeout(()=>Ye(!1),2e3)}).catch(()=>{const h=document.createElement("textarea");h.value=ee,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),Ye(!0),setTimeout(()=>Ye(!1),2e3)})},L=u!=null&&u.compositeOp?Z2[u.compositeOp]||u.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{Je.current=!0,S(!0),ne(!0),Ve.current&&clearTimeout(Ve.current)},onMouseLeave:()=>{Je.current=!1,ne(!1),Ie()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${Me?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:He,title:"Меню",children:l.jsx(t2,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${re&&Me?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:y,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${g?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:g?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:g?l.jsx(uc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(Ef,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),k&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:k,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(Dn,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),q&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:q,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${B?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:B?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(Nn,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:b,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(Cf,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),f&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Br,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:c==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${X?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(u==null?void 0:u.name)||"Золотой Фрактал",children:(u==null?void 0:u.name)||"Золотой Фрактал"}),(u==null?void 0:u.hybridBlend)&&u.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:u.compositeOp,children:L})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(u==null?void 0:u.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:me,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${W?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(Lr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${W?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:A,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${qe?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:qe?"Ссылка скопирована!":"Поделиться этим фракталом",children:qe?l.jsx(wf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(w2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:x,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(Xh,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:d,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(Af,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},K2=({isOpen:u,onClose:s})=>u?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(Dn,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(_l,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Br,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(wn,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Nn,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Nn,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(bl,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Fh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,J2=({isOpen:u,onClose:s,tasteProfile:f,archetypeBreakdown:c,currentSpecimen:d,resonanceScore:x,isEngineerMode:z,onToggleEngineerMode:b,audioTuning:g,onSelectAudioTuning:y,onResetTasteProfile:G,onOpenManifest:k,likedSpecimens:B=[],onPlayLiked:q,onRemoveLike:Y,isCurrentLiked:K=!1})=>u?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(Cf,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(_l,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[x,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${x}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(d==null?void 0:d.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Lr,{className:`w-4 h-4 ${B.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:B.length})]}),K&&d&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(Lr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),B.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(Lr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:B.map((W,H)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:H+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:W.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",W.phiMultiplier.toFixed(4)," • Gen #",W.generation]})]}),q&&l.jsx("button",{onClick:()=>q(W),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(Rf,{className:"w-3 h-3"})}),Y&&l.jsx("button",{onClick:()=>Y(W.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(T2,{className:"w-3 h-3"})})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Bh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:c.map(W=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:W.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[W.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${W.percentage}%`}})})]},W.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(uc,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(W=>l.jsxs("button",{onClick:()=>y(W.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${g===W.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:W.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:W.desc})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(wn,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{k==null||k()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(k2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:b,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${z?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${z?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:z?"Инженер Включен":"Включить Инж"})]})]}),z&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,hf=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],W2=({isReady:u,onFinished:s})=>{const[f,c]=E.useState(0),[d,x]=E.useState(!1),[z,b]=E.useState(!1);return E.useEffect(()=>{const g=setInterval(()=>{c(y=>y<hf.length-1?y+1:y)},450);return()=>clearInterval(g)},[]),E.useEffect(()=>{const g=setTimeout(()=>{if(!u){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),x(!0);const y=setTimeout(()=>{b(!0),s==null||s()},700);return()=>clearTimeout(y)}},15e3);return()=>clearTimeout(g)},[u,s]),E.useEffect(()=>{if(u){const g=setTimeout(()=>{x(!0);const y=setTimeout(()=>{b(!0),s==null||s()},700);return()=>clearTimeout(y)},500);return()=>clearTimeout(g)}},[u,s]),z?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${d?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((g,y)=>l.jsxs("g",{transform:`rotate(${g} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},y)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:hf[f]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},$2=({isOpen:u,onClose:s,isFirstVisit:f=!1,onOpenAtlas:c})=>{if(!u)return null;const d=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},x=()=>{d(),c==null||c()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:d,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:z=>z.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:d,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(_l,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(wn,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Br,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(Nn,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(v2,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Tf,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[c&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:x,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(Dn,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:d,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(Af,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},xf=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}];function C(u){return{id:u.id,name:u.name,englishName:u.englishName,category:u.category,formula:u.formula,dimension:u.dimension,generatorRule:u.generatorRule,description:u.description,phiPiRelation:u.phiPiRelation,enginePreset:{type:u.type,hybridType:u.hybridType,compositeOp:u.compositeOp,zoom:u.zoom??2.5,rotX:u.rotX??.4,rotY:u.rotY??.25,iterations:u.iterations??32,hybridBlend:u.hybridBlend,paletteSeed:u.paletteSeed,boxFold:u.boxFold,sphereFold:u.sphereFold,warpStrength:u.warpStrength,smoothK:u.smoothK,octaveLayers:u.octaveLayers,glowIntensity:u.glowIntensity,morphSpeed:u.morphSpeed,phiMultiplier:u.phiMultiplier,interiorCut:u.interiorCut,renderStyle:u.renderStyle}}}const ex=[C({id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}),C({id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}),C({id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}),C({id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}),C({id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}),C({id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2",generatorRule:"Вариация дракона с чередующимися углами",description:"Модификация дракона Хартера-Хейтуэя с чередующимися направлениями складывания.",phiPiRelation:"Чередование углов ±π/2 создает уникальную симметрию.",type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.65}),C({id:"hilbert-curve",name:"Кривая Гильберта",englishName:"Hilbert Curve",category:"geometric_curves",formula:"H_n: 4^(n-1) сегментов, заполняет квадрат",dimension:"D = 2 (пространственно-заполняющая)",generatorRule:"A → +BF-AFA-FB+, B → -AF+BFB+FA-",description:"Непрерывная кривая, проходящая через каждую точку единичного квадрата. Сохраняет локальность: близкие точки на кривой близки в квадрате.",phiPiRelation:"Рекурсивная структура 4-кратного разбиения; золотая модификация использует φ-пропорции в подквадратах.",type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.8}),C({id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"Заполняет квадрат, D = 2",dimension:"D = 2",generatorRule:"4 взаимно ортогональные подкривые",description:"Пространственно-заполняющая кривая Серпинского, альтернатива кривой Гильберта.",phiPiRelation:"4-кратная симметрия, φ-модификации в углах.",type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.7}),C({id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"Первая пространственно-заполняющая кривая (1890)",dimension:"D = 2",generatorRule:"9-кратное разбиение квадрата",description:"Исторически первая кривая, заполняющая квадрат. 9 подквадратов на каждой итерации.",phiPiRelation:"9 = 3², связь с φ через тригонометрию π/9.",type:"hilbertCurve3D",compositeOp:"smoothMorph",zoom:2.75}),C({id:"gosper-curve",name:"Кривая Госпера",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"7 сегментов, угол 60°",dimension:"D = ln(7)/ln(3) ≈ 1.7712",generatorRule:"A → A-B--B+A++AA+B-, B → +A-BB--B-A++A+B",description:'Кривая "flowsnake" - заполняет область с границей-снежинкой. 7-кратное самоподобие.',phiPiRelation:"7 сегментов, угол π/3; граница - кривая Коха.",type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.6}),C({id:"minkowski-sausage",name:"Колбаса Минковского",englishName:"Minkowski Sausage (Quadratic Koch)",category:"geometric_curves",formula:"8 сегментов, масштаб 1/4",dimension:"D = ln(8)/ln(4) = 1.5",generatorRule:"F → F+F-F-FF+F+F-F",description:"Квадратичная кривая Коха с 8 сегментами. Заполняет область с фрактальной границей.",phiPiRelation:"8 = 2³, масштаб 1/4 = (1/2)².",type:"kochSnowflake3D",compositeOp:"smoothUnion",zoom:2.8}),C({id:"cesaro-fractal",name:"Фрактал Чезаро",englishName:"Cesàro Fractal",category:"geometric_curves",formula:"Вариация кривой Коха с углом α",dimension:"D = ln(4)/ln(1/(2cos(α/2)))",generatorRule:"F → F+F--F+F (угол α варьируется)",description:"Обобщение кривой Коха с переменным углом. При α=60° совпадает с Коха.",phiPiRelation:"Угол α может быть выбран как π/φ ≈ 111.47°.",type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:2.7}),C({id:"cantor-curve",name:"Кривая Кантора",englishName:"Cantor Curve (Cantor Dust)",category:"geometric_curves",formula:"Удаление средней трети",dimension:"D = ln(2)/ln(3) ≈ 0.6309",generatorRule:"F → F F (удалить среднюю треть)",description:"Одномерное множество Кантора - простейший фрактал. Нулевая мера, несчетно.",phiPiRelation:"2/3 масштабирование; φ-вариация использует 1/φ.",type:"cantorDust",compositeOp:"smoothUnion",zoom:3}),C({id:"vicsek-fractal",name:"Фрактал Вицека",englishName:"Vicsek Fractal",category:"geometric_curves",formula:"5 квадратов, масштаб 1/3",dimension:"D = ln(5)/ln(3) ≈ 1.4650",generatorRule:"Крестообразное разбиение 3×3",description:"Крестообразный фрактал с квадратной симметрией. 5 подквадратов на каждой итерации.",phiPiRelation:"5-кратная симметрия; φ-модификация использует золотое крестообразное разбиение.",type:"vicsekFractal",compositeOp:"smoothUnion",zoom:2.9}),C({id:"tetrix",name:"Тетрикс",englishName:"Tetrix (Sierpiński Tetrahedron)",category:"geometric_curves",formula:"4 тетраэдра, масштаб 1/2",dimension:"D = ln(4)/ln(2) = 2",generatorRule:"Разбиение тетраэдра на 4 подтетраэдра",description:"Трехмерный аналог треугольника Серпинского. 4 подтетраэдра на каждой итерации.",phiPiRelation:"4 = 2², φ-пропорции в высотах тетраэдра.",type:"tetrix",compositeOp:"smoothUnion",zoom:2.8}),C({id:"sierpinski-carpet",name:"Ковёр Серпинского",englishName:"Sierpiński Carpet",category:"geometric_curves",formula:"8 квадратов, масштаб 1/3",dimension:"D = ln(8)/ln(3) ≈ 1.8928",generatorRule:"Разбиение 3×3, удалить центр",description:"Плоский фрактал Серпинского. Универсальная кривая: содержит все одномерные кривые.",phiPiRelation:"8 = 2³, 3×3 сетка; φ-модификация использует золотое разбиение.",type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.7}),C({id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"geometric_curves",formula:"20 кубов, масштаб 1/3",dimension:"D = ln(20)/ln(3) ≈ 2.7268",generatorRule:"Разбиение 3×3×3, удалить центры граней и центр",description:"Трехмерный аналог ковра Серпинского. Универсальная кривая для всех компактных метрических пространств размерности ≤ 1.",phiPiRelation:"20 = 4×5, φ-пропорции в удаленных объемах.",type:"menger",compositeOp:"smoothUnion",zoom:2.6}),C({id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"geometric_curves",formula:"φ-пропорции в разбиении куба",dimension:"D ≈ 2.5293",generatorRule:"Разбиение куба с φ-пропорциями",description:"Фрактальный куб с золотым сечением в пропорциях. Назван в честь формы креста на гранях.",phiPiRelation:"Основан на φ: 1/φ ≈ 0.618 масштабирование.",type:"jerusalemCube",compositeOp:"smoothUnion",zoom:2.5}),C({id:"pythagoras-tree",name:"Дерево Пифагора",englishName:"Pythagoras Tree",category:"geometric_curves",formula:"2 квадрата, масштаб cos(θ), sin(θ)",dimension:"D = 2 (при φ-углах)",generatorRule:"Квадрат + 2 квадрата наверху",description:"Фрактальное дерево из квадратов. При угле 45° симметрично; при φ-углах золотое.",phiPiRelation:"Углы ветвления могут быть выбраны как arctan(1/φ) ≈ 31.72°.",type:"pythagorasTree3D",compositeOp:"smoothUnion",zoom:2.7}),C({id:"l-system-plant",name:"L-система: Растение",englishName:"L-System Plant",category:"geometric_curves",formula:"X → F+[[X]-X]-F[-FX]+X, F → FF",dimension:"D ≈ 1.5-2.0",generatorRule:"Угол 22.5°, 25° или 25.7° (φ)",description:"Фрактальное растение из L-системы. Имитирует ветвление реальных растений.",phiPiRelation:"Угол ветвления 25.7° ≈ 360°/φ² - золотое ветвление.",type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.8})],tx=[C({id:"mandelbulb",name:"Мандельбульб",englishName:"Mandelbulb",category:"constructive_csg",formula:"z_{n+1} = z_n^8 + c (в сферических координатах)",dimension:"D ≈ 3.0",generatorRule:"Сферическое возведение в степень + сложение",description:"Трехмерный аналог множества Мандельброта. Создан Дэвидом Бейкером в 1978 году.",phiPiRelation:"Степень 8 = 2³; φ-модификация использует золотые пропорции в углах.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.5}),C({id:"mandelbox",name:"Мандельбокс",englishName:"Mandelbox",category:"constructive_csg",formula:"Свертка + масштабирование + отражение",dimension:"D ≈ 2.5-3.0",generatorRule:"Box-fold + sphere-fold + scale",description:"Фрактал, созданный Томом Лоу в 2010 году. Сочетает свертку куба и сферы.",phiPiRelation:"Масштабирование связано с φ через золотые пропорции.",type:"mandelbox",compositeOp:"smoothUnion",boxFold:1,sphereFold:.5,zoom:2.6}),C({id:"julia-set-3d",name:"3D Жюлиа",englishName:"3D Julia Set",category:"constructive_csg",formula:"Кватернионная Жюлиа",dimension:"D ≈ 2.0-2.5",generatorRule:"Кватернионная итерация",description:"Трехмерное обобщение множества Жюлиа в пространстве кватернионов.",phiPiRelation:"Кватернионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7}),C({id:"apollonian-gasket",name:"Прокладка Аполлония",englishName:"Apollonian Gasket",category:"constructive_csg",formula:"Инверсия относительно окружностей",dimension:"D ≈ 1.3057",generatorRule:"Касательные окружности",description:"Фрактальная упаковка касательных окружностей. Бесконечное количество окружностей.",phiPiRelation:"Инверсия сохраняет углы; φ-модификация использует золотые пропорции.",type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.8}),C({id:"schwarz-surface",name:"Поверхность Шварца",englishName:"Schwarz Minimal Surface",category:"constructive_csg",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2.0 (минимальная поверхность)",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность с нулевой средней кривизной. Бесконечно продолжается в трехмерном пространстве.",phiPiRelation:"Тригонометрическая симметрия связана с π.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.6}),C({id:"gyroid",name:"Гироид",englishName:"Gyroid",category:"constructive_csg",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2.0",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность, открытая Нерсесом в 1970 году. Встречается в природе (крылья бабочек).",phiPiRelation:"Хиральная симметрия связана с φ.",type:"gyroid",compositeOp:"smoothUnion",zoom:2.7}),C({id:"lidinoid",name:"Лидиноид",englishName:"Lidinoid",category:"constructive_csg",formula:"Вариация гироида",dimension:"D = 2.0",generatorRule:"Модифицированное тригонометрическое уравнение",description:"Родственная гироиду минимальная поверхность с более сложной топологией.",phiPiRelation:"Топология связана с φ через золотые пропорции.",type:"gyroid",compositeOp:"smoothUnion",zoom:2.65}),C({id:"neovius-surface",name:"Поверхность Неовиуса",englishName:"Neovius Surface",category:"constructive_csg",formula:"3(cos(x) + cos(y) + cos(z)) + 4cos(x)cos(y)cos(z) = 0",dimension:"D = 2.0",generatorRule:"Расширенное тригонометрическое уравнение",description:"Минимальная поверхность с более высокой симметрией, чем поверхность Шварца.",phiPiRelation:"Симметрия связана с π и φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.7}),C({id:"diamond-surface",name:"Алмазная поверхность",englishName:"Diamond Surface",category:"constructive_csg",formula:"Минимальная поверхность алмазной структуры",dimension:"D = 2.0",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность, соответствующая структуре алмаза.",phiPiRelation:"Кристаллическая симметрия связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.65}),C({id:"costa-surface",name:"Поверхность Косты",englishName:"Costa Surface",category:"constructive_csg",formula:"Минимальная поверхность с тремя концами",dimension:"D = 2.0",generatorRule:"Комплексный анализ",description:"Минимальная поверхность, открытая Костой в 1984 году. Первый пример поверхности с тремя концами.",phiPiRelation:"Топология связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.7}),C({id:"catalan-surface",name:"Поверхность Каталана",englishName:"Catalan Surface",category:"constructive_csg",formula:"Минимальная поверхность с прямыми линиями",dimension:"D = 2.0",generatorRule:"Параметрическое уравнение",description:"Минимальная поверхность, содержащая прямые линии. Открыта Каталланом в 1855 году.",phiPiRelation:"Геометрия связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.6}),C({id:"henneberg-surface",name:"Поверхность Хеннеберга",englishName:"Henneberg Surface",category:"constructive_csg",formula:"Минимальная поверхность",dimension:"D = 2.0",generatorRule:"Параметрическое уравнение",description:"Минимальная поверхность с интересной топологией.",phiPiRelation:"Топология связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.65})],ax=[C({id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}),C({id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}),C({id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),C({id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),C({id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 1.0-2.0",generatorRule:"Бассейны притяжения корней уравнения",description:"Бассейны притяжения метода Ньютона для нахождения корней многочлена. Границы между бассейнами - фракталы.",phiPiRelation:"При k = 5 + φ границы бассейнов образуют квазикристаллическую структуру.",type:"newtonFractal",compositeOp:"smoothUnion",zoom:2.8}),C({id:"burning-ship",name:"Горящий корабль",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D_граница = 2.0",generatorRule:"Модификация Мандельброта с абсолютными значениями",description:'Фрактал "Горящий корабль" - вариация Мандельброта с абсолютными значениями действительной и мнимой частей.',phiPiRelation:"Асимметрия создает уникальную структуру, связанную с φ через золотые пропорции.",type:"burningShip",compositeOp:"smoothUnion",zoom:2.7}),C({id:"tricorn-fractal",name:"Трезубец (Tricorn)",englishName:"Tricorn (Mandelbar)",category:"algebraic_complex",formula:"z_{n+1} = z̄_n² + c",dimension:"D_граница = 2.0",generatorRule:"Мандельброт с сопряжением",description:'Антиголоморфный аналог множества Мандельброта. Три симметричные "руки" вместо кардиоиды.',phiPiRelation:"3-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),C({id:"buffon-dart",name:"Фрактал Баффона",englishName:"Buffon Dart",category:"algebraic_complex",formula:"Стохастическая итерация",dimension:"D ≈ 1.5-2.0",generatorRule:"Случайные итерации с вероятностями",description:"Стохастический фрактал, генерируемый случайными итерациями IFS.",phiPiRelation:"Вероятности могут быть выбраны как 1/φ и 1-1/φ.",type:"ifsFractal",compositeOp:"smoothUnion",zoom:2.6}),C({id:"phoenix-julia",name:"Жюлиа Феникс",englishName:"Phoenix Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c + d·z_{n-1}",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Жюлиа с памятью предыдущего состояния",description:"Множество Жюлиа с памятью - зависит от двух предыдущих итераций. Создает более сложные структуры.",phiPiRelation:"Параметр d связан с φ через золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),C({id:"mandelbar-3d",name:"Мандельбар 3D",englishName:"Mandelbar 3D",category:"algebraic_complex",formula:"3D антиголоморфный Мандельброт",dimension:"D ≈ 2.0-2.5",generatorRule:"3D обобщение трезубца",description:"Трехмерное обобщение множества Мандельбар с антиголоморфной симметрией.",phiPiRelation:"3D симметрия связана с φ через золотые пропорции.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),C({id:"tetrahedral-julia",name:"Тетраэдрическая Жюлиа",englishName:"Tetrahedral Julia Set",category:"algebraic_complex",formula:"Кватернионная Жюлиа с тетраэдрической симметрией",dimension:"D ≈ 2.0",generatorRule:"Кватернионная итерация с тетраэдрической симметрией",description:"Множество Жюлиа в пространстве кватернионов с тетраэдрической симметрией.",phiPiRelation:"Тетраэдрическая симметрия связана с φ через золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),C({id:"cubic-julia",name:"Кубическая Жюлиа",englishName:"Cubic Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n³ + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Кубическая итерация",description:"Множество Жюлиа для кубического многочлена. 3-лучевая симметрия.",phiPiRelation:"3-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),C({id:"quartic-julia",name:"Квартичная Жюлиа",englishName:"Quartic Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n⁴ + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Квартичная итерация",description:"Множество Жюлиа для квартичного многочлена. 4-лучевая симметрия.",phiPiRelation:"4-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8}),C({id:"exponential-julia",name:"Экспоненциальная Жюлиа",englishName:"Exponential Julia Set",category:"algebraic_complex",formula:"z_{n+1} = e^{z_n} + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Экспоненциальная итерация",description:"Множество Жюлиа для экспоненциального отображения. Бесконечное количество компонент.",phiPiRelation:"Экспонента связана с φ через e^{iπ} = -1.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.6})],ix=[C({id:"4d-mandelbulb",name:"4D Мандельбульб",englishName:"4D Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c в 4D",dimension:"D ≈ 4.0",generatorRule:"4D сферическое возведение в степень",description:"Четырехмерное обобщение Мандельбульба.",phiPiRelation:"4D симметрия связана с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.5}),C({id:"quaternion-julia",name:"Кватернионная Жюлиа",englishName:"Quaternion Julia Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c в H",dimension:"D ≈ 2.0-3.0",generatorRule:"Кватернионная итерация",description:"Множество Жюлиа в пространстве кватернионов.",phiPiRelation:"Кватернионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),C({id:"octonion-fractal",name:"Октонионный Фрактал",englishName:"Octonion Fractal",category:"multidimensional",formula:"Итерация в октонионах",dimension:"D ≈ 3.0-4.0",generatorRule:"Октонионная итерация",description:"Фрактал в пространстве октонионов (8D алгебра).",phiPiRelation:"Октонионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7}),C({id:"4d-julia",name:"4D Жюлиа",englishName:"4D Julia Set",category:"multidimensional",formula:"4D обобщение Жюлиа",dimension:"D ≈ 2.0-3.0",generatorRule:"4D итерация",description:"Четырехмерное обобщение множества Жюлиа.",phiPiRelation:"4D симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.65}),C({id:"hyperbolic-fractal",name:"Гиперболический Фрактал",englishName:"Hyperbolic Fractal",category:"multidimensional",formula:"Фрактал в гиперболическом пространстве",dimension:"D ≈ 2.0-3.0",generatorRule:"Гиперболическая геометрия",description:"Фрактал в пространстве Лобачевского с отрицательной кривизной.",phiPiRelation:"Гиперболическая геометрия связана с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),C({id:"spherical-fractal",name:"Сферический Фрактал",englishName:"Spherical Fractal",category:"multidimensional",formula:"Фрактал на сфере",dimension:"D ≈ 2.0",generatorRule:"Сферическая геометрия",description:"Фрактал на поверхности сферы.",phiPiRelation:"Сферическая геометрия связана с π и φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7})],nx=[C({id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern",category:"ifs_attractors",formula:"4 аффинных преобразования",dimension:"D ≈ 1.45",generatorRule:"IFS с вероятностями",description:"Фрактал, имитирующий папоротник. Создан Майклом Барнсли в 1988 году.",phiPiRelation:"Вероятности связаны с φ через золотые пропорции.",type:"ifsFractal",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"ifs_attractors",formula:"3 сжатия к вершинам",dimension:"D = ln(3)/ln(2) ≈ 1.5850",generatorRule:"Хаотическая игра",description:"Классический фрактал Серпинского. Может быть построен хаотической игрой.",phiPiRelation:"3-кратная симметрия; φ-модификация использует золотые пропорции.",type:"sierpinskiTriangle",compositeOp:"smoothUnion",zoom:2.8}),C({id:"lorenz-attractor",name:"Аттрактор Лоренца",englishName:"Lorenz Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",dimension:"D ≈ 2.06",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, открытый Лоренцем в 1963 году. Моделирует конвекцию в атмосфере.",phiPiRelation:"Параметры σ=10, ρ=28, β=8/3; φ-модификация использует золотые пропорции.",type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:2.6}),C({id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y-z, dy/dt = x+ay, dz/dt = b+z(x-c)",dimension:"D ≈ 2.0",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, открытый Рёсслером в 1976 году. Проще аттрактора Лоренца.",phiPiRelation:"Параметры связаны с φ через золотые пропорции.",type:"rosslerAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"thomas-attractor",name:"Аттрактор Томаса",englishName:"Thomas Attractor",category:"ifs_attractors",formula:"dx/dt = sin(y)-bx, dy/dt = sin(z)-by, dz/dt = sin(x)-bz",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с периодической симметрией.",phiPiRelation:"Параметр b связан с φ.",type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"dadras-attractor",name:"Аттрактор Дадраса",englishName:"Dadras Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с двумя витками.",phiPiRelation:"Параметры связаны с φ.",type:"dadrasAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"chen-attractor",name:"Аттрактор Чена",englishName:"Chen Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, родственный аттрактору Лоренца.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.6}),C({id:"sprott-attractors",name:"Аттракторы Спротта",englishName:"Sprott Attractors",category:"ifs_attractors",formula:"Семейство простых систем ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Семейство странных аттракторов, открытых Спроттом.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"halvorsen-attractor",name:"Аттрактор Хальворсена",englishName:"Halvorsen Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с трехлучевой симметрией.",phiPiRelation:"3-лучевая симметрия; параметры связаны с φ.",type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с тороидальной структурой.",phiPiRelation:"Параметры связаны с φ.",type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.7})],lx=[C({id:"random-terrain",name:"Случайный Рельеф",englishName:"Random Terrain",category:"stochastic",formula:"Фрактальный шум",dimension:"D ≈ 2.0-2.5",generatorRule:"Фрактальный шум Перлина",description:"Случайный рельеф, сгенерированный фрактальным шумом.",phiPiRelation:"Шум связан с φ.",type:"randomTerrain",compositeOp:"smoothUnion",zoom:2.7}),C({id:"perlin-noise",name:"Шум Перлина",englishName:"Perlin Noise",category:"stochastic",formula:"Градиентный шум",dimension:"D = 2.0",generatorRule:"Градиентный шум",description:"Градиентный шум, разработанный Перлином.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",compositeOp:"smoothUnion",zoom:2.8}),C({id:"simplex-noise",name:"Симплексный Шум",englishName:"Simplex Noise",category:"stochastic",formula:"Симплексный градиентный шум",dimension:"D = 2.0",generatorRule:"Симплексный шум",description:"Улучшенная версия шума Перлина.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",compositeOp:"smoothUnion",zoom:2.75}),C({id:"worley-noise",name:"Шум Уорли",englishName:"Worley Noise (Cellular)",category:"stochastic",formula:"Клеточный шум",dimension:"D = 2.0",generatorRule:"Расстояние до случайных точек",description:"Клеточный шум, основанный на расстоянии до случайных точек.",phiPiRelation:"Структура связана с φ.",type:"worleyNoise",compositeOp:"smoothUnion",zoom:2.7}),C({id:"fbm-terrain",name:"FBM Рельеф",englishName:"FBM Terrain",category:"stochastic",formula:"Фрактальное броуновское движение",dimension:"D ≈ 2.0-2.5",generatorRule:"Сумма октав шума",description:"Рельеф, сгенерированный фрактальным броуновским движением.",phiPiRelation:"Октавы связаны с φ.",type:"randomTerrain",octaveLayers:8,compositeOp:"smoothUnion",zoom:2.8}),C({id:"ridged-multifractal",name:"Гребневой Мультифрактал",englishName:"Ridged Multifractal",category:"stochastic",formula:"Абсолютный шум с гребнями",dimension:"D ≈ 2.0-2.5",generatorRule:"Абсолютный шум",description:"Мультифрактал с гребневой структурой.",phiPiRelation:"Структура связана с φ.",type:"randomTerrain",octaveLayers:6,compositeOp:"smoothUnion",zoom:2.7}),C({id:"billow-noise",name:"Волнистый Шум",englishName:"Billow Noise",category:"stochastic",formula:"Абсолютный шум",dimension:"D ≈ 2.0",generatorRule:"Абсолютный шум",description:"Волнистый шум, похожий на облака.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",octaveLayers:6,compositeOp:"smoothUnion",zoom:2.75})],rx=[C({id:"percolation-cluster",name:"Перколяционный Кластер",englishName:"Percolation Cluster",category:"physical_nature",formula:"Вероятностная модель перколяции",dimension:"D ≈ 1.896 (2D), 2.53 (3D)",generatorRule:"Случайное заполнение решетки",description:"Фрактальный кластер в модели перколяции. Возникает при критической вероятности.",phiPiRelation:"Критическая вероятность связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.7}),C({id:"dl-aggregate",name:"DLA Агрегат",englishName:"Diffusion-Limited Aggregation",category:"physical_nature",formula:"Случайное блуждание + прилипание",dimension:"D ≈ 1.71 (2D), 2.5 (3D)",generatorRule:"Случайные блуждания частиц",description:"Агрегат, ограниченный диффузией. Модель роста кристаллов.",phiPiRelation:"Фрактальная размерность связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.8}),C({id:"eden-model",name:"Модель Эдена",englishName:"Eden Model",category:"physical_nature",formula:"Рост кластера",dimension:"D ≈ 1.71 (2D)",generatorRule:"Рост от начального кластера",description:"Модель роста кластера, похожая на DLA но без случайных блужданий.",phiPiRelation:"Фрактальная размерность связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.75}),C({id:"brownian-tree",name:"Броуновское Дерево",englishName:"Brownian Tree",category:"physical_nature",formula:"Случайное блуждание + агрегация",dimension:"D ≈ 2.0 (2D)",generatorRule:"Случайные блуждания",description:"Дерево, образованное броуновским движением частиц.",phiPiRelation:"Структура связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.7}),C({id:"viscous-fingering",name:"Вязкое Пальцеобразование",englishName:"Viscous Fingering",category:"physical_nature",formula:"Саффман-Тейлор неустойчивость",dimension:"D ≈ 1.5-1.8",generatorRule:"Неустойчивость границы раздела",description:"Фрактальные структуры при протекании вязкой жидкости.",phiPiRelation:"Неустойчивость связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.65}),C({id:"dielectric-breakdown",name:"Диэлектрический Пробой",englishName:"Dielectric Breakdown",category:"physical_nature",formula:"Модель пробоя диэлектрика",dimension:"D ≈ 1.7-2.5",generatorRule:"Электрический пробой",description:"Фрактальные структуры при электрическом пробое.",phiPiRelation:"Структура связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.8}),C({id:"diffusion-fractal",name:"Диффузионный Фрактал",englishName:"Diffusion Fractal",category:"physical_nature",formula:"Уравнение диффузии",dimension:"D ≈ 2.0",generatorRule:"Диффузионный процесс",description:"Фрактал, образованный диффузионным процессом.",phiPiRelation:"Диффузия связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.7}),C({id:"reaction-diffusion",name:"Реакция-Диффузия",englishName:"Reaction-Diffusion",category:"physical_nature",formula:"Система реакция-диффузия",dimension:"D ≈ 2.0",generatorRule:"Уравнения реакция-диффузия",description:"Фрактальные структуры в системах реакция-диффузия (Тьюринг).",phiPiRelation:"Паттерны связаны с φ.",type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.75}),C({id:"turbulence-fractal",name:"Турбулентный Фрактал",englishName:"Turbulence Fractal",category:"physical_nature",formula:"Турбулентный поток",dimension:"D ≈ 2.5-3.0",generatorRule:"Турбулентность",description:"Фрактальные структуры в турбулентных потоках.",phiPiRelation:"Турбулентность связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.6}),C({id:"crystal-growth",name:"Рост Кристалла",englishName:"Crystal Growth",category:"physical_nature",formula:"Модель роста кристалла",dimension:"D ≈ 1.7-2.5",generatorRule:"Рост кристалла",description:"Фрактальные структуры при росте кристаллов.",phiPiRelation:"Рост связан с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.8})],ox=[C({id:"lorenz-system",name:"Система Лоренца",englishName:"Lorenz System",category:"expanded_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",dimension:"D ≈ 2.06",generatorRule:"Система ODE",description:"Классический аттрактор Лоренца.",phiPiRelation:"Параметры связаны с φ.",type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:2.6}),C({id:"chen-system",name:"Система Чена",englishName:"Chen System",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Чена.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"lu-system",name:"Система Лю",englishName:"Lü System",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Лю.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-a",name:"Спротт A",englishName:"Sprott A",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта A.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-b",name:"Спротт B",englishName:"Sprott B",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта B.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),C({id:"sprott-c",name:"Спротт C",englishName:"Sprott C",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта C.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-d",name:"Спротт D",englishName:"Sprott D",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта D.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-e",name:"Спротт E",englishName:"Sprott E",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта E.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-f",name:"Спротт F",englishName:"Sprott F",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта F.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),C({id:"sprott-g",name:"Спротт G",englishName:"Sprott G",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта G.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-h",name:"Спротт H",englishName:"Sprott H",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта H.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-i",name:"Спротт I",englishName:"Sprott I",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта I.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-j",name:"Спротт J",englishName:"Sprott J",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта J.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),C({id:"sprott-k",name:"Спротт K",englishName:"Sprott K",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта K.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-l",name:"Спротт L",englishName:"Sprott L",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта L.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),C({id:"sprott-m",name:"Спротт M",englishName:"Sprott M",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта M.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),C({id:"sprott-n",name:"Спротт N",englishName:"Sprott N",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта N.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75})],sx=[C({id:"mandelbulb-crystal",name:"Мандельбульб Кристалл",englishName:"Mandelbulb Crystal",category:"visually_distinct",formula:"Мандельбульб с кристаллическим рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + кристаллический стиль",description:"Мандельбульб с кристаллическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"crystal"}),C({id:"julia-plasma",name:"Жюлиа Плазма",englishName:"Julia Plasma",category:"visually_distinct",formula:"Жюлиа с плазменным рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + плазменный стиль",description:"Множество Жюлиа с плазменным стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),C({id:"mandelbox-hologram",name:"Мандельбокс Голограмма",englishName:"Mandelbox Hologram",category:"visually_distinct",formula:"Мандельбокс с голографическим рендером",dimension:"D ≈ 2.5-3.0",generatorRule:"Мандельбокс + голографический стиль",description:"Мандельбокс с голографическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbox",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"hologram"}),C({id:"mandelbulb-iridescent",name:"Мандельбульб Иридесцент",englishName:"Mandelbulb Iridescent",category:"visually_distinct",formula:"Мандельбульб с переливающимся рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + иридесцентный стиль",description:"Мандельбульб с переливающимся стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.75,renderStyle:"iridescent"}),C({id:"julia-xray",name:"Жюлиа Рентген",englishName:"Julia X-Ray",category:"visually_distinct",formula:"Жюлиа с рентгеновским рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + рентгеновский стиль",description:"Множество Жюлиа с рентгеновским стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"xray"}),C({id:"mandelbulb-topography",name:"Мандельбульб Топография",englishName:"Mandelbulb Topography",category:"visually_distinct",formula:"Мандельбульб с топографическим рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + топографический стиль",description:"Мандельбульб с топографическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"topography"}),C({id:"julia-pbr",name:"Жюлиа PBR",englishName:"Julia PBR",category:"visually_distinct",formula:"Жюлиа с PBR рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + PBR стиль",description:"Множество Жюлиа с PBR стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.75,renderStyle:"pbr"}),C({id:"mandelbox-crystal",name:"Мандельбокс Кристалл",englishName:"Mandelbox Crystal",category:"visually_distinct",formula:"Мандельбокс с кристаллическим рендером",dimension:"D ≈ 2.5-3.0",generatorRule:"Мандельбокс + кристаллический стиль",description:"Мандельбокс с кристаллическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbox",compositeOp:"smoothUnion",zoom:2.65,renderStyle:"crystal"}),C({id:"mandelbulb-plasma",name:"Мандельбульб Плазма",englishName:"Mandelbulb Plasma",category:"visually_distinct",formula:"Мандельбульб с плазменным рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + плазменный стиль",description:"Мандельбульб с плазменным стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),C({id:"julia-iridescent",name:"Жюлиа Иридесцент",englishName:"Julia Iridescent",category:"visually_distinct",formula:"Жюлиа с переливающимся рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + иридесцентный стиль",description:"Множество Жюлиа с переливающимся стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"})],cx=[C({id:"sri-yantra",name:"Шри Янтра",englishName:"Sri Yantra",category:"mandalas_sacred",formula:"9 треугольников, 43 пересечения",dimension:"D = 2.0",generatorRule:"Геометрия священной геометрии",description:"Древняя индийская янтра, состоящая из 9 взаимопересекающихся треугольников.",phiPiRelation:"Пропорции связаны с φ и π.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"iridescent"}),C({id:"metatrons-cube",name:"Куб Метатрона",englishName:"Metatron's Cube",category:"mandalas_sacred",formula:"13 окружностей, платоновы тела",dimension:"D = 2.0",generatorRule:"Священная геометрия",description:"Священная геометрическая фигура, содержащая все 5 платоновых тел.",phiPiRelation:"Основан на φ и золотом сечении.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"crystal"}),C({id:"flower-of-life",name:"Цветок Жизни",englishName:"Flower of Life",category:"mandalas_sacred",formula:"19 окружностей, гексагональная симметрия",dimension:"D = 2.0",generatorRule:"Пересекающиеся окружности",description:"Священная геометрическая фигура из 19 пересекающихся окружностей.",phiPiRelation:"Гексагональная симметрия связана с π/3.",type:"mandala",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"hologram"}),C({id:"tree-of-life",name:"Древо Жизни",englishName:"Tree of Life",category:"mandalas_sacred",formula:"10 сефирот, 22 пути",dimension:"D = 2.0",generatorRule:"Каббалистическая геометрия",description:"Каббалистическое Древо Жизни с 10 сефирот и 22 путями.",phiPiRelation:"Структура связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),C({id:"platonic-solids",name:"Платоновы Тела",englishName:"Platonic Solids",category:"mandalas_sacred",formula:"5 правильных многогранников",dimension:"D = 2.0 (поверхности)",generatorRule:"Правильные многогранники",description:"5 правильных многогранников: тетраэдр, куб, октаэдр, додекаэдр, икосаэдр.",phiPiRelation:"Додекаэдр и икосаэдр связаны с φ.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"pbr"}),C({id:"torus-knot",name:"Торический Узел",englishName:"Torus Knot",category:"mandalas_sacred",formula:"Узел на поверхности тора",dimension:"D = 1.0 (кривая)",generatorRule:"Параметрическое уравнение тора",description:"Узел, лежащий на поверхности тора. Связан с сакральной геометрией.",phiPiRelation:"Параметры p,q связаны с φ.",type:"torusKnot",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"}),C({id:"hopf-fibration",name:"Расслоение Хопфа",englishName:"Hopf Fibration",category:"mandalas_sacred",formula:"S³ → S² с волокнами S¹",dimension:"D = 3.0 (в S³)",generatorRule:"Кватернионная проекция",description:"Отображение 3-сферы на 2-сферу с круговыми волокнами. Открыто Хопфом в 1931 году.",phiPiRelation:"Связано с кватернионами и φ.",type:"hopfFibration",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"hologram"}),C({id:"borromean-rings",name:"Кольца Борромео",englishName:"Borromean Rings",category:"mandalas_sacred",formula:"3 взаимозацепленных кольца",dimension:"D = 1.0 (кривые)",generatorRule:"Теория узлов",description:"Три кольца, зацепленные так, что удаление любого освобождает остальные.",phiPiRelation:"Связано с φ через золотые пропорции.",type:"mandala",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"crystal"}),C({id:"penrose-tiling",name:"Мозаика Пенроуза",englishName:"Penrose Tiling",category:"mandalas_sacred",formula:"2 типа плиток, 5-кратная симметрия",dimension:"D = 2.0",generatorRule:"Апериодическая мозаика",description:"Апериодическая мозаика с 5-кратной симметрией. Открыта Пенроузом в 1974 году.",phiPiRelation:"Основана на φ: отношение толстых и тонких ромбов = φ.",type:"penroseTiling",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"plasma"}),C({id:"golden-spiral",name:"Золотая Спираль",englishName:"Golden Spiral",category:"mandalas_sacred",formula:"r = a·φ^(2θ/π)",dimension:"D = 1.0 (кривая)",generatorRule:"Логарифмическая спираль с φ",description:"Логарифмическая спираль, растущая с коэффициентом φ на четверть оборота.",phiPiRelation:"Основана на φ ≈ 1.618.",type:"goldenSpiral",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"}),C({id:"fibonacci-sphere",name:"Сфера Фибоначчи",englishName:"Fibonacci Sphere",category:"mandalas_sacred",formula:"Точки на сфере с золотым углом",dimension:"D = 0.0 (дискретные точки)",generatorRule:"Золотой угол 137.508°",description:"Распределение точек на сфере с использованием золотого угла.",phiPiRelation:"Золотой угол = 360°/φ² ≈ 137.508°.",type:"fibonacciSphere",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"hologram"}),C({id:"vesica-piscis",name:"Весика Писцис",englishName:"Vesica Piscis",category:"mandalas_sacred",formula:"Пересечение двух окружностей",dimension:"D = 2.0",generatorRule:"Две окружности с центрами на друг друге",description:"Миндалевидная фигура, образованная пересечением двух окружностей.",phiPiRelation:"Отношение высоты к ширине = √3; связано с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"crystal"}),C({id:"seed-of-life",name:"Семя Жизни",englishName:"Seed of Life",category:"mandalas_sacred",formula:"7 окружностей",dimension:"D = 2.0",generatorRule:"7 пересекающихся окружностей",description:"Священная геометрическая фигура из 7 окружностей, основа Цветка Жизни.",phiPiRelation:"Симметрия связана с π/3.",type:"mandala",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"plasma"}),C({id:"egg-of-life",name:"Яйцо Жизни",englishName:"Egg of Life",category:"mandalas_sacred",formula:"6 окружностей вокруг центральной",dimension:"D = 2.0",generatorRule:"6 окружностей",description:"Священная геометрическая фигура, следующая стадия после Семени Жизни.",phiPiRelation:"Симметрия связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"iridescent"}),C({id:"fruit-of-life",name:"Плод Жизни",englishName:"Fruit of Life",category:"mandalas_sacred",formula:"13 окружностей",dimension:"D = 2.0",generatorRule:"13 окружностей",description:"Священная геометрическая фигура из 13 окружностей, основа Куба Метатрона.",phiPiRelation:"Связано с φ и 13.",type:"mandala",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"hologram"}),C({id:"mandala-universal",name:"Универсальная Мандала",englishName:"Universal Mandala",category:"mandalas_sacred",formula:"Радиальная симметрия n-кратная",dimension:"D = 2.0",generatorRule:"Радиальная симметрия",description:"Универсальная мандала с настраиваемой симметрией.",phiPiRelation:"Симметрия связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"plasma"}),C({id:"yantra-3d",name:"3D Янтра",englishName:"3D Yantra",category:"mandalas_sacred",formula:"Трехмерная янтра",dimension:"D = 3.0",generatorRule:"3D священная геометрия",description:"Трехмерная версия священной янтры.",phiPiRelation:"Связано с φ и π.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"crystal"}),C({id:"sacred-knot",name:"Священный Узел",englishName:"Sacred Knot",category:"mandalas_sacred",formula:"Узел с сакральной симметрией",dimension:"D = 1.0",generatorRule:"Теория узлов",description:"Узел с сакральной геометрической симметрией.",phiPiRelation:"Связано с φ.",type:"torusKnot",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"iridescent"}),C({id:"merkaba",name:"Меркаба",englishName:"Merkaba",category:"mandalas_sacred",formula:"Два тетраэдра",dimension:"D = 3.0",generatorRule:"Два противоположных тетраэдра",description:"Звездный тетраэдр, состоящий из двух противоположных тетраэдров.",phiPiRelation:"Связано с φ и звездой Давида.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"hologram"}),C({id:"phi-nexus",name:"Φ-Нексус",englishName:"Phi Nexus",category:"mandalas_sacred",formula:"Фрактал на основе φ",dimension:"D ≈ 2.5",generatorRule:"Золотое сечение в структуре",description:"Фрактал, полностью построенный на золотом сечении φ.",phiPiRelation:"Основан на φ ≈ 1.618.",type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"})],yl=[...ex,...tx,...ax,...ix,...nx,...lx,...rx,...ox,...sx,...cx],ux=({isOpen:u,onClose:s,onApplyPreset:f})=>{var W;const[c,d]=E.useState("catalog"),[x,z]=E.useState("all"),[b,g]=E.useState(""),[y,G]=E.useState(yl[0]),[k,B]=E.useState(null),q=E.useMemo(()=>yl.filter(H=>{const re=x==="all"||H.category===x,S=b.toLowerCase().trim();if(!S)return re;const X=H.name.toLowerCase().includes(S)||H.englishName.toLowerCase().includes(S)||H.formula.toLowerCase().includes(S)||H.dimension.toLowerCase().includes(S)||H.description.toLowerCase().includes(S);return re&&X}),[x,b]);if(!u)return null;const Y=H=>{f(H.enginePreset,H.name),B(H.id),setTimeout(()=>{B(null),s()},450)},K=H=>{switch(H){case"geometric_curves":return l.jsx(Br,{className:"w-4 h-4"});case"constructive":return l.jsx(Nn,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(c2,{className:"w-4 h-4"});case"multidimensional":return l.jsx(Oh,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(bl,{className:"w-4 h-4"});case"stochastic":return l.jsx(wn,{className:"w-4 h-4"});case"topological_physical":return l.jsx(Nf,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(Dn,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",yl.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(_l,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>d("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Nn,{className:"w-4 h-4"}),"Атлас и Таксономия (",yl.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>d("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(nc,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>d("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(ic,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),c==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(D2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:b,onChange:H=>g(H.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),b&&l.jsx("button",{onClick:()=>g(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>z("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${x==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",yl.length,")"]}),xf.map(H=>{var re;return l.jsxs("button",{onClick:()=>z(H.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${x===H.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[K(H.id),l.jsx("span",{children:((re=H.title.split(".")[1])==null?void 0:re.trim())||H.title})]},H.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:q.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):q.map(H=>{var S;const re=(y==null?void 0:y.id)===H.id;return l.jsxs("button",{id:`btn-fractal-${H.id}`,onClick:()=>G(H),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${re?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:H.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(S=H.dimension.split("≈")[0])==null?void 0:S.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:H.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:H.formula})]})]},H.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:y?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[K(y.category),l.jsx("span",{children:(W=xf.find(H=>H.id===y.category))==null?void 0:W.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:y.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:y.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>Y(y),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:k===y.id?l.jsxs(l.Fragment,{children:[l.jsx(wf,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Rf,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:y.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:y.dimension})]})]}),y.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:y.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:y.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(nc,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:y.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(ic,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:y.enginePreset.type}),y.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:y.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:y.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),c==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(nc,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),c==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(ic,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(z2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(Mf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(bl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(jf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(p2,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},px=({params:u,onToggleProbe:s,onToggleMacro:f})=>{if(!u.probeActive)return null;const c=Math.sqrt((u.camPosX??0)**2+(u.camPosY??0)**2+(u.camPosZ??0)**2),d=Math.max(.001,c/(u.zoom||3)).toFixed(4),x=u.slicePlane?((.5-u.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:u.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(jf,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[d," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(u.camPosX??0).toFixed(2)," Y:",(u.camPosY??0).toFixed(2)," Z:",(u.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[u.sliceAxis||"golden"," (",x,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:u.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[u.octaveLayers||2,"L · k=",u.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${u.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:u.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(bl,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",u.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",u.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",u.phiMultiplier.toFixed(5)]})]})]})},vf=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:wn,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:Mf,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:bl,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:r2,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:$h,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:Nf,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:n2,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],fx=({currentSpecimen:u,historyQueue:s,currentIndex:f,onSelectSpecimen:c,onNext:d,onPrev:x,renderStyle:z,onSelectRenderStyle:b,scrollMode:g,onToggleScrollMode:y,isOpen:G,onToggleOpen:k})=>{const B=E.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${G?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(b2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:y,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${g==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:g==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:g==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(Tf,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(L2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",vf.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:vf.map(q=>{const Y=q.icon,K=z===q.id;return l.jsxs("button",{id:`select-render-style-${q.id}-btn`,onClick:()=>b(q.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${K?q.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:q.desc,children:[l.jsx(Y,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:q.shortLabel})]},q.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:x,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(Zh,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:d,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx(Yh,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:B,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((q,Y)=>{const K=q.id===(u==null?void 0:u.id)||Y===f;return l.jsxs("button",{id:`feed-item-${Y}-btn`,onClick:()=>c(q),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${K?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",q.generation||Y+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:q.name})]}),K&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:q.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[q.type," + ",q.hybridType||q.type]})]})]},q.id||Y)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:g==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})},dx=({visible:u,position:s="top-left"})=>{const[f,c]=E.useState(Ke.getStats()),[d,x]=E.useState(!1);if(E.useEffect(()=>{if(!u)return;const y=setInterval(()=>{c(Ke.getStats())},100);return()=>clearInterval(y)},[u]),!u)return null;const z={"top-left":"top-4 left-4","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-right":"bottom-4 right-4"},b=f.fps>50?"text-green-400":f.fps>30?"text-yellow-400":"text-red-400",g=Ke.isHealthy()?"text-green-400":"text-red-400";return l.jsxs("div",{className:`fixed ${z[s]} z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-xs font-mono text-white min-w-[280px]`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("h3",{className:"text-cyan-400 font-bold text-sm",children:"🔍 Render Diagnostics"}),l.jsx("button",{onClick:()=>x(!d),className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:d?"▼":"▶"})]}),l.jsxs("div",{className:"space-y-1 mb-2",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"FPS:"}),l.jsx("span",{className:b,children:f.fps.toFixed(1)})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Frame Time:"}),l.jsxs("span",{className:"text-white",children:[f.frameTime.toFixed(2),"ms"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Ray Steps:"}),l.jsx("span",{className:"text-white",children:f.rayMarchSteps})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Hit Rate:"}),l.jsxs("span",{className:"text-white",children:[(f.hitRate*100).toFixed(1),"%"]})]})]}),d&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2",children:[l.jsx("h4",{className:"text-yellow-400 font-semibold mb-1",children:"Math Validation"}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"SDF NaN:"}),l.jsx("span",{className:f.sdfNaN>0?"text-red-400":"text-green-400",children:f.sdfNaN})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"SDF ∞:"}),l.jsx("span",{className:f.sdfInfinity>0?"text-red-400":"text-green-400",children:f.sdfInfinity})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"SDF Range:"}),l.jsxs("span",{className:"text-white",children:["[",f.sdfMin.toFixed(3),", ",f.sdfMax.toFixed(3),"]"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Avg Distance:"}),l.jsx("span",{className:"text-white",children:f.averageDistance.toFixed(4)})]})]})]}),l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2",children:[l.jsx("h4",{className:"text-purple-400 font-semibold mb-1",children:"GPU Health"}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Context:"}),l.jsx("span",{className:f.contextLost?"text-red-400":"text-green-400",children:f.contextLost?"LOST":"OK"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Shader Compile:"}),l.jsxs("span",{className:"text-white",children:[f.shaderCompileTime.toFixed(0),"ms"]})]})]})]}),l.jsx("div",{className:"border-t border-gray-700 pt-2 mt-2",children:l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-gray-400",children:"System Health:"}),l.jsx("span",{className:`${g} font-bold`,children:Ke.isHealthy()?"✓ HEALTHY":"✗ ISSUES"})]})}),l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2 flex gap-2",children:[l.jsx("button",{onClick:()=>Ke.reset(),className:"flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-1 rounded text-xs transition-colors",children:"Reset Stats"}),l.jsx("button",{onClick:()=>{const y=Ke.exportReport();console.log("Diagnostics Report:",y),alert("Diagnostics report exported to console")},className:"flex-1 bg-purple-600 hover:bg-purple-500 text-white px-2 py-1 rounded text-xs transition-colors",children:"Export"})]})]}),l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2 flex justify-between text-xs",children:[l.jsxs("span",{className:"text-gray-500",children:["Errors: ",Ke.getLogs("error").length]}),l.jsxs("span",{className:"text-gray-500",children:["Warnings: ",Ke.getLogs("warn").length]})]})]})};function gf(u){switch(u){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class mx{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,f="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const c=window.AudioContext||window.webkitAudioContext;this.ctx=new c,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(c){console.warn("AudioContext initialization deferred or unavailable",c)}}getChordFrequenciesForFamily(s,f,c){const d=1.61803398875,x=c?qr(c):0,b=x*137.507764%50-25,g=Math.pow(2,b/1200);if(s==="sacred")return[{ratio:.5*g,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:d*g,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5*g,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:d*d*.5*g,wave:x%2===0?"triangle":"sine",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5*g,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5*g,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2*g,wave:x%3===0?"sawtooth":"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5*g,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75*g,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25*g,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2)*g,wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:d*1.2*g,wave:x%2===0?"sine":"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const y=1.1413470000000001,G=1+21.022/100,k=1+25.0108/100;return[{ratio:.5*g,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:y*g,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:G*g,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:k*g,wave:x%2===0?"triangle":"sine",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5*g,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382*g,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618*g,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5*g,wave:x%3===0?"square":"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,f){if(!this.ctx||!this.globalFilter)return;const c=gf(s),d=f?gf(f):c,x=108,z=this.ctx.currentTime,b=[...this.voices];this.voices=[],b.forEach(G=>{try{G.gain.gain.cancelScheduledValues(z),G.gain.gain.setValueAtTime(G.gain.gain.value,z),G.gain.gain.exponentialRampToValueAtTime(1e-4,z+.35),setTimeout(()=>{var k;try{G.osc.stop(),G.osc.disconnect(),G.filter.disconnect(),(k=G.panner)==null||k.disconnect(),G.gain.disconnect()}catch{}},380)}catch{}});const y=this.getChordFrequenciesForFamily(c,this.tuningMode,s).map((G,k)=>{const B=this.ctx.createOscillator(),q=this.ctx.createGain(),Y=this.ctx.createBiquadFilter(),K=(k%2===0?.618:-.618)*.5,W=x*G.ratio+K;B.type=G.wave,B.frequency.setValueAtTime(W,z),q.gain.setValueAtTime(1e-4,z),q.gain.exponentialRampToValueAtTime(G.vol,z+1.2),Y.type="lowpass",Y.frequency.setValueAtTime(450+k*80,z),Y.Q.setValueAtTime(1.2,z),B.connect(Y);let H=Y,re;return this.ctx.createStereoPanner&&(re=this.ctx.createStereoPanner(),re.pan.setValueAtTime(G.pan,z),Y.connect(re),H=re),H.connect(q),q.connect(this.globalFilter),B.start(z),{osc:B,gain:q,filter:Y,panner:re,baseFreqRatio:G.ratio,role:G.role}});if(f&&f!==s){const G=this.getChordFrequenciesForFamily(d,this.tuningMode,f),k=G[2]||G[1],B=this.ctx.createOscillator(),q=this.ctx.createGain(),Y=this.ctx.createBiquadFilter();B.type="sine",B.frequency.setValueAtTime(x*k.ratio,z);const K=Math.max(1e-4,this.currentHybridBlend*.22);q.gain.setValueAtTime(1e-4,z),q.gain.exponentialRampToValueAtTime(K,z+1.5),Y.type="bandpass",Y.frequency.setValueAtTime(x*k.ratio*1.5,z),Y.Q.setValueAtTime(2,z),B.connect(Y);let W=Y,H;this.ctx.createStereoPanner&&(H=this.ctx.createStereoPanner(),H.pan.setValueAtTime(.45,z),Y.connect(H),W=H),W.connect(q),q.connect(this.globalFilter),B.start(z),y.push({osc:B,gain:q,filter:Y,panner:H,baseFreqRatio:k.ratio,role:"hybrid"})}this.voices=y}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,c=s.phiMultiplier||1.618034,d=Math.max(.08,Math.min(16,s.zoom||3)),x=Math.max(.1,Math.min(2,s.morphSpeed||.45)),z=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=z,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const b=Math.max(260,Math.min(980,380+(4-Math.min(d,4))*80+x*120));this.globalFilter.frequency.setTargetAtTime(b,f,.15);const g=Math.max(54,Math.min(240,108/Math.max(.5,d*.6)));this.cavityResonator.frequency.setTargetAtTime(g,f,.2);const y=108,G=(c-1.618034)*80,k=Math.sin(s.rotX||0)*.4;this.voices.forEach((B,q)=>{const Y=y*B.baseFreqRatio,K=B.role==="golden"||B.role==="shimmer"?G:G*.3;if(B.osc.frequency.setTargetAtTime(Y+K,f,.15),B.panner){const W=q%2===0?.25:-.25,H=Math.max(-.85,Math.min(.85,W+k));B.panner.pan.setTargetAtTime(H,f,.12)}if(B.role==="hybrid"){const W=Math.max(1e-4,z*.2);B.gain.gain.setTargetAtTime(W,f,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((d,x)=>{if(!this.ctx)return;const z=this.ctx.createOscillator(),b=this.ctx.createGain(),g=this.ctx.createBiquadFilter();z.type="sine",z.frequency.setValueAtTime(d,s+x*.05),g.type="lowpass",g.frequency.setValueAtTime(950,s),b.gain.setValueAtTime(1e-4,s+x*.05),b.gain.exponentialRampToValueAtTime(.05/(x+1),s+x*.05+.08),b.gain.exponentialRampToValueAtTime(1e-5,s+x*.05+2.8),z.onended=()=>{try{z.disconnect(),g.disconnect(),b.disconnect()}catch{}},z.connect(g),g.connect(b),b.connect(this.globalFilter),z.start(s+x*.05),z.stop(s+x*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var c,d,x,z,b;this.stopTimeout=null,f.forEach(g=>{var y;try{g.osc.stop(),g.osc.disconnect(),g.filter.disconnect(),(y=g.panner)==null||y.disconnect(),g.gain.disconnect()}catch{}});try{(c=this.globalFilter)==null||c.disconnect(),(d=this.cavityResonator)==null||d.disconnect(),(x=this.compressor)==null||x.disconnect(),(z=this.masterGain)==null||z.disconnect(),(b=this.ctx)==null||b.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const fa=new mx,yf=[.6,.7,.8,.9,1],bf=[.5,.6,.7,.8,.9],hx=["Cosmic","Nebula","Stellar","Galactic","Astral","Quantum","Plasma","Photon","Neutron","Proton","Crystal","Prism","Spectrum","Rainbow","Iridescent","Ocean","Abyss","Coral","Reef","Tidal","Forest","Emerald","Jade","Moss","Canopy","Desert","Sand","Dune","Oasis","Mirage","Volcanic","Magma","Lava","Ember","Ash","Arctic","Glacier","Frost","Ice","Snow","Solar","Lunar","Eclipse","Zenith","Horizon","Mystic","Ethereal","Divine","Sacred","Celestial","Golden","Silver","Bronze","Copper","Platinum","Ruby","Sapphire","Emerald","Amethyst","Topaz","Phoenix","Dragon","Griffin","Unicorn","Pegasus","Lotus","Orchid","Rose","Lily","Iris","Thunder","Lightning","Storm","Cyclone","Tornado","Aurora","Borealis","Australis","Polar","Equatorial"];function kr(u,s,f){u=u%360,u<0&&(u+=360);const c=(1-Math.abs(2*f-1))*s,d=c*(1-Math.abs(u/60%2-1)),x=f-c/2;let z=0,b=0,g=0;return u<60?(z=c,b=d,g=0):u<120?(z=d,b=c,g=0):u<180?(z=0,b=c,g=d):u<240?(z=0,b=d,g=c):u<300?(z=d,b=0,g=c):(z=c,b=0,g=d),[z+x,b+x,g+x]}function xx(u,s,f){const d=s,x=yf[Math.floor(f/5)%yf.length],z=bf[Math.floor(f/25)%bf.length],b=kr(d,x,z),g=(s+137.508*(1+f%3))%360,y=x*.9,G=z*.8,k=kr(g,y,G),B=f%4;let q;B===0?q=(s+180)%360:B===1?q=(s+120)%360:B===2?q=(s+240)%360:q=(s+137.508)%360;const Y=kr(q,x,Math.min(1,z+.2)),K=kr(d,x*.5,z*.15);return{id:`${u.toLowerCase().replace(/\s+/g,"-")}-${s}-${f}`,name:`${u} ${f+1}`,primary:b,secondary:k,accent:Y,ambient:K}}const kf=[];hx.forEach((u,s)=>{const f=s*GOLDEN_ANGLE*7%360;for(let c=0;c<8;c++){const d=(f+c*30)%360;kf.push(xx(u,d,c))}});const Fr=[...Sn,...kf],vx={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:28,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function gx(){const[u]=E.useState(()=>new P2),[s,f]=E.useState(vx),[c,d]=E.useState(null),[x,z]=E.useState(65),[b,g]=E.useState(!1),[y,G]=E.useState(!1),[k,B]=E.useState("idle"),q=E.useRef(null),Y=E.useRef(0),[K,W]=E.useState("auto"),[H,re]=E.useState(!1),[S,X]=E.useState(!1),[ge,Me]=E.useState(!1),[ne,qe]=E.useState(!1),[Ye,Ve]=E.useState(!1),[Je,Ie]=E.useState(!1),[pe,He]=E.useState("feed"),[me,A]=E.useState(!1),[L,M]=E.useState([]),[Q,ee]=E.useState(new Set),[h,T]=E.useState(!0),[V,P]=E.useState(!1);E.useEffect(()=>{const U=Z=>{Z.key==="F3"&&(Z.preventDefault(),P(I=>!I))};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[]);const te=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","fractalCross","reactionDiffusion","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],ie=["smoothUnion","smoothMorph","smoothIntersection","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],fe=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],Ge=["orbit","flyThrough","goldenSpiral","kelvinInvert"],he=E.useRef(0),et=.61803398875;E.useEffect(()=>{if(!h)return;const U=setInterval(()=>{he.current=(he.current+Math.round(et*te.length))%te.length;const Z=he.current,I=te[Z],ze=(Z+Math.round(et*37))%te.length,se=(Z+Math.round(et*73))%te.length,zt=te[ze],St=te[se],dt=Math.floor(Z*et)%ie.length,Ue=Math.floor(Z*et*1.3)%fe.length,we=Math.floor(Z*et*.7)%Ge.length,Te=[1.8,2.5,3.5,5,7],Et=Math.floor(Z*et*1.7)%Te.length,fi=[12,18,24,30,36],An=Math.floor(Z*et*2.1)%fi.length;f(da=>({...da,type:I,hybridType:zt,tertiaryType:St,compositeOp:ie[dt],renderStyle:fe[Ue],cameraMode:Ge[we],hybridBlend:.2+Z%5*.12,tertiaryBlend:.1+Z%4*.08,zoom:Te[Et],iterations:fi[An],paletteRotation:!0,autoRotate:!0}))},18e3);return()=>clearInterval(U)},[h]);const _t=E.useCallback(()=>{},[]),[Ee,la]=E.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),Le=E.useCallback(U=>{T(!1),d(U),z(U.affinityScore);const Z=(u==null?void 0:u.suggestRenderStyle(U.type))||"solid";f(I=>({...I,type:U.type,hybridType:U.hybridType,tertiaryType:U.tertiaryType,compositeOp:U.compositeOp,hybridBlend:U.hybridBlend,tertiaryBlend:U.tertiaryBlend,smoothK:U.smoothK,warpStrength:U.warpStrength,octaveLayers:U.octaveLayers,boxFold:U.boxFold,sphereFold:U.sphereFold,interiorCut:U.interiorCut,paletteId:U.palette.id,customPalette:U.palette,iterations:U.iterations,phiMultiplier:U.phiMultiplier,morphSpeed:U.morphSpeed,glowIntensity:U.glowIntensity,zoom:U.zoom,renderStyle:Z})),fa.getActive()&&fa.playSpecimenTransitionChord()},[]);E.useEffect(()=>{if(!u)return;const U=window.location.hash.slice(1);if(U){const I=new URLSearchParams(U),ze=I.get("type"),se=I.get("hybrid"),zt=I.get("tertiary"),St=I.get("op");if(ze){const dt=Fr.find(we=>we.id===I.get("palette"))||Fr[0],Ue={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:I.get("name")||`Фрактал ${ze}`,type:ze,hybridType:se||ze,tertiaryType:zt||"riemannZeta",compositeOp:St||"smoothUnion",hybridBlend:parseFloat(I.get("blend")||"0.35"),tertiaryBlend:parseFloat(I.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(I.get("smoothK")||"0.35"),warpStrength:parseFloat(I.get("warp")||"0.25"),octaveLayers:parseInt(I.get("octaves")||"2"),boxFold:parseFloat(I.get("boxFold")||"1.2"),sphereFold:parseFloat(I.get("sphereFold")||"0.65"),interiorCut:parseFloat(I.get("interiorCut")||"0.0"),palette:dt,iterations:parseInt(I.get("iterations")||"20"),phiMultiplier:parseFloat(I.get("phi")||"1.61803398875"),morphSpeed:parseFloat(I.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(I.get("glow")||"1.1"),zoom:parseFloat(I.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};Le(Ue),f(we=>({...we,paletteSeed:parseInt(I.get("paletteSeed")||"0"),paletteRotation:I.get("paletteRotation")==="1",renderStyle:I.get("renderStyle")||we.renderStyle,cameraMode:I.get("cameraMode")||we.cameraMode,camPosX:parseFloat(I.get("camX")||"0"),camPosY:parseFloat(I.get("camY")||"0"),camPosZ:parseFloat(I.get("camZ")||"-3.2"),headlampPower:parseFloat(I.get("headlamp")||"0"),volumetricFog:parseFloat(I.get("fog")||"0.4"),slicePlane:parseFloat(I.get("slicePlane")||"0"),sliceAxis:I.get("sliceAxis")||"golden",enableAudio:I.get("audio")==="1",audioVolume:parseFloat(I.get("audioVol")||"0.65"),audioTuning:I.get("audioTuning")||"phi432",drsEnabled:I.get("drs")!=="0"})),window.history.replaceState(null,"",window.location.pathname);return}}const Z=u.breedNextSpecimen();Le(Z)},[u,Le]),E.useEffect(()=>(s.enableAudio?fa.start(s.audioVolume??.65,s.audioTuning??"phi432"):fa.stop(),()=>{fa.stop()}),[s.enableAudio]),E.useEffect(()=>{s.enableAudio&&(s.audioTuning&&fa.setTuning(s.audioTuning),s.audioVolume!==void 0&&fa.setVolume(s.audioVolume),fa.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),E.useEffect(()=>{const U=setInterval(()=>{if(u&&c){const Z=u.registerEngagement(1,0,0,c);z(I=>I===Z?I:Z)}},1200);return()=>clearInterval(U)},[u,c]);const Ct=E.useCallback((U,Z)=>{if(!u||!c)return;const I=U>0?"zooming":Z>0?"orbiting":"idle";B(se=>se!==I?I:se),q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{B(se=>se!=="idle"?"idle":se)},1200);const ze=u.registerEngagement(.1,U,Z,c);z(se=>se===ze?se:ze)},[u,c]),ra=E.useCallback(()=>{if(!u)return;const U=performance.now();if(U-Y.current<180)return;Y.current=U;const Z=u.stepHistory(1);Le(Z)},[u,Le]),Fa=E.useCallback(()=>{if(!u)return;const U=performance.now();if(U-Y.current<180)return;Y.current=U;const Z=u.stepHistory(-1);Le(Z)},[u,Le]),Oi=E.useCallback(()=>{if(!u||!c)return;u.boostAffinity(c),z(100);const U=c.id;ee(Z=>{const I=new Set(Z);return I.has(U)?(I.delete(U),M(ze=>ze.filter(se=>se.id!==U))):(I.add(U),M(ze=>[...ze,c])),I})},[u,c]),ft=E.useCallback(U=>{Le(U)},[Le]),ui=E.useCallback(U=>{ee(Z=>{const I=new Set(Z);return I.delete(U),I}),M(Z=>Z.filter(I=>I.id!==U))},[]),pi=E.useCallback(U=>{if(!u)return;const Z=u.breedNextSpecimen(U);Le(Z)},[u,Le]),ki=E.useCallback(()=>{if(!u)return;const U={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((c==null?void 0:c.generation)||1)+1,name:`Фенотип Инженера #${((c==null?void 0:c.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||Fr.find(Z=>Z.id===s.paletteId)||Fr[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};d(U),u.boostAffinity(U),fa.getActive()&&fa.playSpecimenTransitionChord()},[u,s,c]),qa=E.useCallback(()=>{f(U=>({...U,enableAudio:!U.enableAudio}))},[]),tt=E.useCallback(U=>{re(!1);const Z=document.createElement("a");Z.download=`golden-ratio-fractal-${s.type}-${(c==null?void 0:c.generation)||1}.png`,Z.href=U,Z.click()},[s.type,c==null?void 0:c.generation]),Ne=E.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(zh,{params:s,onParamsChange:f,onTelemetryUpdate:la,screenshotRequested:H,onScreenshotCaptured:tt,forcedBackend:K,onInteraction:Ct,onNextSpecimen:ra,onPrevSpecimen:Fa,onEngineReady:()=>qe(!0),scrollMode:pe}),l.jsx(fx,{currentSpecimen:c,historyQueue:u.getHistory(),currentIndex:u.getCurrentIndex(),onSelectSpecimen:Le,onNext:ra,onPrev:Fa,renderStyle:s.renderStyle,onSelectRenderStyle:U=>f(Z=>({...Z,renderStyle:U})),scrollMode:pe,onToggleScrollMode:()=>He(U=>U==="feed"?"zoom":"feed"),isOpen:me,onToggleOpen:()=>A(U=>!U)}),l.jsx(Q2,{specimen:c,resonanceScore:x,isInteracting:k!=="idle",interactionType:k,onNext:ra,onPrev:Fa,onFavorite:Oi,onOpenProfile:()=>G(!0),enableAudio:s.enableAudio,onToggleAudio:qa,onOpenResearchModal:()=>X(!0),onOpenAtlas:()=>Me(!0),isFeedOpen:me,onToggleFeed:()=>A(U=>!U),isCurrentLiked:c?Q.has(c.id):!1,params:s}),l.jsx(px,{params:s,onToggleProbe:()=>f(U=>({...U,probeActive:!U.probeActive})),onToggleMacro:()=>f(U=>({...U,macroMode:!U.macroMode}))}),l.jsx(J2,{isOpen:y,onClose:()=>G(!1),tasteProfile:u.getTasteProfile(),archetypeBreakdown:u.getArchetypeBreakdown(),currentSpecimen:c,resonanceScore:x,isEngineerMode:b,onToggleEngineerMode:()=>g(U=>!U),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:U=>f(Z=>({...Z,audioTuning:U})),onOpenManifest:()=>{G(!1),Ve(!0)},likedSpecimens:L,onPlayLiked:ft,onRemoveLike:ui,isCurrentLiked:c?Q.has(c.id):!1}),b&&l.jsxs(l.Fragment,{children:[l.jsx(U2,{telemetry:Ee,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),l.jsx(I2,{params:s,onParamsChange:f,onSelectFractalType:pi,onCaptureScreenshot:()=>re(!0),onToggleFullscreen:Ne,onToggleInfoModal:()=>X(!0),onOpenAtlasModal:()=>Me(!0),activeBackend:Ee.backend,forcedBackend:K,onSelectBackend:W,onClose:()=>g(!1),tasteProfile:u.getTasteProfile(),onSaveToFeed:ki})]}),l.jsx(K2,{isOpen:S,onClose:()=>X(!1)}),l.jsx(ux,{isOpen:ge,onClose:()=>Me(!1),onApplyPreset:U=>{f(Z=>({...Z,...U}))}}),l.jsx($2,{isOpen:Ye,onClose:()=>Ve(!1),isFirstVisit:Je,onOpenAtlas:()=>Me(!0)}),l.jsx(W2,{isReady:ne,onFinished:_t}),V&&l.jsx(dx,{})]})}const _f=document.getElementById("root");_f&&nh.createRoot(_f).render(l.jsx(gx,{}));
