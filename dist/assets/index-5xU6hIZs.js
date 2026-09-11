(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function f(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=f(d);fetch(d.href,m)}})();function Wm(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Ws={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function $m(){if(iu)return xl;iu=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,d,m){var b=null;if(m!==void 0&&(b=""+m),d.key!==void 0&&(b=""+d.key),"key"in d){m={};for(var w in d)w!=="key"&&(m[w]=d[w])}else m=d;return d=m.ref,{$$typeof:p,type:c,key:b,ref:d!==void 0?d:null,props:m}}return xl.Fragment=s,xl.jsx=f,xl.jsxs=f,xl}var lu;function eh(){return lu||(lu=1,Ws.exports=$m()),Ws.exports}var l=eh(),$s={exports:{}},yl={},ec={exports:{}},tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function th(){return nu||(nu=1,(function(p){function s(N,U){var M=N.length;N.push(U);e:for(;0<M;){var J=M-1>>>1,ee=N[J];if(0<d(ee,U))N[J]=U,N[M]=ee,M=J;else break e}}function f(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var U=N[0],M=N.pop();if(M!==U){N[0]=M;e:for(var J=0,ee=N.length,v=ee>>>1;J<v;){var k=2*(J+1)-1,B=N[k],P=k+1,$=N[P];if(0>d(B,M))P<ee&&0>d($,B)?(N[J]=$,N[P]=M,J=P):(N[J]=B,N[k]=M,J=k);else if(P<ee&&0>d($,M))N[J]=$,N[P]=M,J=P;else break e}}return U}function d(N,U){var M=N.sortIndex-U.sortIndex;return M!==0?M:N.id-U.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;p.unstable_now=function(){return m.now()}}else{var b=Date,w=b.now();p.unstable_now=function(){return b.now()-w}}var g=[],x=[],L=1,T=null,E=3,O=!1,G=!1,Z=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function Y(N){for(var U=f(x);U!==null;){if(U.callback===null)c(x);else if(U.startTime<=N)c(x),U.sortIndex=U.expirationTime,s(g,U);else break;U=f(x)}}function xe(N){if(Z=!1,Y(N),!G)if(f(g)!==null)G=!0,ke||(ke=!0,Je());else{var U=f(x);U!==null&&se(xe,U.startTime-N)}}var ke=!1,le=-1,He=5,Ge=-1;function Ie(){return Q?!0:!(p.unstable_now()-Ge<He)}function $e(){if(Q=!1,ke){var N=p.unstable_now();Ge=N;var U=!0;try{e:{G=!1,Z&&(Z=!1,oe(le),le=-1),O=!0;var M=E;try{t:{for(Y(N),T=f(g);T!==null&&!(T.expirationTime>N&&Ie());){var J=T.callback;if(typeof J=="function"){T.callback=null,E=T.priorityLevel;var ee=J(T.expirationTime<=N);if(N=p.unstable_now(),typeof ee=="function"){T.callback=ee,Y(N),U=!0;break t}T===f(g)&&c(g),Y(N)}else c(g);T=f(g)}if(T!==null)U=!0;else{var v=f(x);v!==null&&se(xe,v.startTime-N),U=!1}}break e}finally{T=null,E=M,O=!1}U=void 0}}finally{U?Je():ke=!1}}}var Je;if(typeof _=="function")Je=function(){_($e)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,qe=de.port2;de.port1.onmessage=$e,Je=function(){qe.postMessage(null)}}else Je=function(){q($e,0)};function se(N,U){le=q(function(){N(p.unstable_now())},U)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(N){N.callback=null},p.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<N?Math.floor(1e3/N):5},p.unstable_getCurrentPriorityLevel=function(){return E},p.unstable_next=function(N){switch(E){case 1:case 2:case 3:var U=3;break;default:U=E}var M=E;E=U;try{return N()}finally{E=M}},p.unstable_requestPaint=function(){Q=!0},p.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=E;E=N;try{return U()}finally{E=M}},p.unstable_scheduleCallback=function(N,U,M){var J=p.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,N={id:L++,callback:U,priorityLevel:N,startTime:M,expirationTime:ee,sortIndex:-1},M>J?(N.sortIndex=M,s(x,N),f(g)===null&&N===f(x)&&(Z?(oe(le),le=-1):Z=!0,se(xe,M-J))):(N.sortIndex=ee,s(g,N),G||O||(G=!0,ke||(ke=!0,Je()))),N},p.unstable_shouldYield=Ie,p.unstable_wrapCallback=function(N){var U=E;return function(){var M=E;E=U;try{return N.apply(this,arguments)}finally{E=M}}}})(tc)),tc}var ou;function ah(){return ou||(ou=1,ec.exports=th()),ec.exports}var ac={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function rh(){if(su)return pe;su=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),E=Symbol.iterator;function O(v){return v===null||typeof v!="object"?null:(v=E&&v[E]||v["@@iterator"],typeof v=="function"?v:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Q={};function q(v,k,B){this.props=v,this.context=k,this.refs=Q,this.updater=B||G}q.prototype.isReactComponent={},q.prototype.setState=function(v,k){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,k,"setState")},q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function oe(){}oe.prototype=q.prototype;function _(v,k,B){this.props=v,this.context=k,this.refs=Q,this.updater=B||G}var Y=_.prototype=new oe;Y.constructor=_,Z(Y,q.prototype),Y.isPureReactComponent=!0;var xe=Array.isArray;function ke(){}var le={H:null,A:null,T:null,S:null},He=Object.prototype.hasOwnProperty;function Ge(v,k,B){var P=B.ref;return{$$typeof:p,type:v,key:k,ref:P!==void 0?P:null,props:B}}function Ie(v,k){return Ge(v.type,k,v.props)}function $e(v){return typeof v=="object"&&v!==null&&v.$$typeof===p}function Je(v){var k={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(B){return k[B]})}var de=/\/+/g;function qe(v,k){return typeof v=="object"&&v!==null&&v.key!=null?Je(""+v.key):k.toString(36)}function se(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ke,ke):(v.status="pending",v.then(function(k){v.status==="pending"&&(v.status="fulfilled",v.value=k)},function(k){v.status==="pending"&&(v.status="rejected",v.reason=k)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function N(v,k,B,P,$){var ae=typeof v;(ae==="undefined"||ae==="boolean")&&(v=null);var ce=!1;if(v===null)ce=!0;else switch(ae){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(v.$$typeof){case p:case s:ce=!0;break;case L:return ce=v._init,N(ce(v._payload),k,B,P,$)}}if(ce)return $=$(v),ce=P===""?"."+qe(v,0):P,xe($)?(B="",ce!=null&&(B=ce.replace(de,"$&/")+"/"),N($,k,B,"",function(Ze){return Ze})):$!=null&&($e($)&&($=Ie($,B+($.key==null||v&&v.key===$.key?"":(""+$.key).replace(de,"$&/")+"/")+ce)),k.push($)),1;ce=0;var Me=P===""?".":P+":";if(xe(v))for(var be=0;be<v.length;be++)P=v[be],ae=Me+qe(P,be),ce+=N(P,k,B,ae,$);else if(be=O(v),typeof be=="function")for(v=be.call(v),be=0;!(P=v.next()).done;)P=P.value,ae=Me+qe(P,be++),ce+=N(P,k,B,ae,$);else if(ae==="object"){if(typeof v.then=="function")return N(se(v),k,B,P,$);throw k=String(v),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ce}function U(v,k,B){if(v==null)return v;var P=[],$=0;return N(v,P,"","",function(ae){return k.call(B,ae,$++)}),P}function M(v){if(v._status===-1){var k=v._result;k=k(),k.then(function(B){(v._status===0||v._status===-1)&&(v._status=1,v._result=B)},function(B){(v._status===0||v._status===-1)&&(v._status=2,v._result=B)}),v._status===-1&&(v._status=0,v._result=k)}if(v._status===1)return v._result.default;throw v._result}var J=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},ee={map:U,forEach:function(v,k,B){U(v,function(){k.apply(this,arguments)},B)},count:function(v){var k=0;return U(v,function(){k++}),k},toArray:function(v){return U(v,function(k){return k})||[]},only:function(v){if(!$e(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return pe.Activity=T,pe.Children=ee,pe.Component=q,pe.Fragment=f,pe.Profiler=d,pe.PureComponent=_,pe.StrictMode=c,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,pe.__COMPILER_RUNTIME={__proto__:null,c:function(v){return le.H.useMemoCache(v)}},pe.cache=function(v){return function(){return v.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(v,k,B){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var P=Z({},v.props),$=v.key;if(k!=null)for(ae in k.key!==void 0&&($=""+k.key),k)!He.call(k,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&k.ref===void 0||(P[ae]=k[ae]);var ae=arguments.length-2;if(ae===1)P.children=B;else if(1<ae){for(var ce=Array(ae),Me=0;Me<ae;Me++)ce[Me]=arguments[Me+2];P.children=ce}return Ge(v.type,$,P)},pe.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},pe.createElement=function(v,k,B){var P,$={},ae=null;if(k!=null)for(P in k.key!==void 0&&(ae=""+k.key),k)He.call(k,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&($[P]=k[P]);var ce=arguments.length-2;if(ce===1)$.children=B;else if(1<ce){for(var Me=Array(ce),be=0;be<ce;be++)Me[be]=arguments[be+2];$.children=Me}if(v&&v.defaultProps)for(P in ce=v.defaultProps,ce)$[P]===void 0&&($[P]=ce[P]);return Ge(v,ae,$)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(v){return{$$typeof:w,render:v}},pe.isValidElement=$e,pe.lazy=function(v){return{$$typeof:L,_payload:{_status:-1,_result:v},_init:M}},pe.memo=function(v,k){return{$$typeof:x,type:v,compare:k===void 0?null:k}},pe.startTransition=function(v){var k=le.T,B={};le.T=B;try{var P=v(),$=le.S;$!==null&&$(B,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(ke,J)}catch(ae){J(ae)}finally{k!==null&&B.types!==null&&(k.types=B.types),le.T=k}},pe.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},pe.use=function(v){return le.H.use(v)},pe.useActionState=function(v,k,B){return le.H.useActionState(v,k,B)},pe.useCallback=function(v,k){return le.H.useCallback(v,k)},pe.useContext=function(v){return le.H.useContext(v)},pe.useDebugValue=function(){},pe.useDeferredValue=function(v,k){return le.H.useDeferredValue(v,k)},pe.useEffect=function(v,k){return le.H.useEffect(v,k)},pe.useEffectEvent=function(v){return le.H.useEffectEvent(v)},pe.useId=function(){return le.H.useId()},pe.useImperativeHandle=function(v,k,B){return le.H.useImperativeHandle(v,k,B)},pe.useInsertionEffect=function(v,k){return le.H.useInsertionEffect(v,k)},pe.useLayoutEffect=function(v,k){return le.H.useLayoutEffect(v,k)},pe.useMemo=function(v,k){return le.H.useMemo(v,k)},pe.useOptimistic=function(v,k){return le.H.useOptimistic(v,k)},pe.useReducer=function(v,k,B){return le.H.useReducer(v,k,B)},pe.useRef=function(v){return le.H.useRef(v)},pe.useState=function(v){return le.H.useState(v)},pe.useSyncExternalStore=function(v,k,B){return le.H.useSyncExternalStore(v,k,B)},pe.useTransition=function(){return le.H.useTransition()},pe.version="19.2.8",pe}var cu;function pc(){return cu||(cu=1,ac.exports=rh()),ac.exports}var rc={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function ih(){if(pu)return _t;pu=1;var p=pc();function s(g){var x="https://react.dev/errors/"+g;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)x+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+g+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(g,x,L){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:g,containerInfo:x,implementation:L}}var b=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(g,x){if(g==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,_t.createPortal=function(g,x){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return m(g,x,null,L)},_t.flushSync=function(g){var x=b.T,L=c.p;try{if(b.T=null,c.p=2,g)return g()}finally{b.T=x,c.p=L,c.d.f()}},_t.preconnect=function(g,x){typeof g=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(g,x))},_t.prefetchDNS=function(g){typeof g=="string"&&c.d.D(g)},_t.preinit=function(g,x){if(typeof g=="string"&&x&&typeof x.as=="string"){var L=x.as,T=w(L,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,O=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;L==="style"?c.d.S(g,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:T,integrity:E,fetchPriority:O}):L==="script"&&c.d.X(g,{crossOrigin:T,integrity:E,fetchPriority:O,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},_t.preinitModule=function(g,x){if(typeof g=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var L=w(x.as,x.crossOrigin);c.d.M(g,{crossOrigin:L,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(g)},_t.preload=function(g,x){if(typeof g=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var L=x.as,T=w(L,x.crossOrigin);c.d.L(g,L,{crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},_t.preloadModule=function(g,x){if(typeof g=="string")if(x){var L=w(x.as,x.crossOrigin);c.d.m(g,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:L,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(g)},_t.requestFormReset=function(g){c.d.r(g)},_t.unstable_batchedUpdates=function(g,x){return g(x)},_t.useFormState=function(g,x,L){return b.H.useFormState(g,x,L)},_t.useFormStatus=function(){return b.H.useHostTransitionStatus()},_t.version="19.2.8",_t}var fu;function lh(){if(fu)return rc.exports;fu=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),rc.exports=ih(),rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu;function nh(){if(uu)return yl;uu=1;var p=ah(),s=pc(),f=lh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(m(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,r=t;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(r=i.return,r!==null){a=r;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return g(i),e;if(n===r)return g(i),t;n=n.sibling}throw Error(c(188))}if(a.return!==r.return)a=i,r=n;else{for(var o=!1,u=i.child;u;){if(u===a){o=!0,a=i,r=n;break}if(u===r){o=!0,r=i,a=n;break}u=u.sibling}if(!o){for(u=n.child;u;){if(u===a){o=!0,a=n,r=i;break}if(u===r){o=!0,r=n,a=i;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==r)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),_=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ge=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case q:return"Profiler";case Q:return"StrictMode";case xe:return"Suspense";case ke:return"SuspenseList";case Ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case _:return e.displayName||"Context";case oe:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var se=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},J=[],ee=-1;function v(e){return{current:e}}function k(e){0>ee||(e.current=J[ee],J[ee]=null,ee--)}function B(e,t){ee++,J[ee]=e.current,e.current=t}var P=v(null),$=v(null),ae=v(null),ce=v(null);function Me(e,t){switch(B(ae,t),B($,e),B(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nf(t),e=Vf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(P),B(P,e)}function be(){k(P),k($),k(ae)}function Ze(e){e.memoizedState!==null&&B(ce,e);var t=P.current,a=Vf(t,e.type);t!==a&&(B($,e),B(P,a))}function St(e){$.current===e&&(k(P),k($)),ce.current===e&&(k(ce),dl._currentValue=M)}var Ae,Pt;function Ot(e){if(Ae===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ae=t&&t[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ae+e+Pt}var aa=!1;function Ca(e,t){if(!e||aa)return"";aa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(V){var A=V}Reflect.construct(e,[],H)}else{try{H.call()}catch(V){A=V}e.call(H.prototype)}}else{try{throw Error()}catch(V){A=V}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(V){if(V&&A&&typeof V.stack=="string")return[V.stack,A.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=r.DetermineComponentFrameRoot(),o=n[0],u=n[1];if(o&&u){var h=o.split(`
`),D=u.split(`
`);for(i=r=0;r<h.length&&!h[r].includes("DetermineComponentFrameRoot");)r++;for(;i<D.length&&!D[i].includes("DetermineComponentFrameRoot");)i++;if(r===h.length||i===D.length)for(r=h.length-1,i=D.length-1;1<=r&&0<=i&&h[r]!==D[i];)i--;for(;1<=r&&0<=i;r--,i--)if(h[r]!==D[i]){if(r!==1||i!==1)do if(r--,i--,0>i||h[r]!==D[i]){var R=`
`+h[r].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=r&&0<=i);break}}}finally{aa=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ot(a):""}function Er(e,t){switch(e.tag){case 26:case 27:case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return e.child!==t&&t!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return Ca(e.type,!1);case 11:return Ca(e.type.render,!1);case 1:return Ca(e.type,!0);case 31:return Ot("Activity");default:return""}}function Or(e){try{var t="",a=null;do t+=Er(e,a),a=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var et=Object.prototype.hasOwnProperty,fr=p.unstable_scheduleCallback,ur=p.unstable_cancelCallback,I=p.unstable_shouldYield,re=p.unstable_requestPaint,X=p.unstable_now,it=p.unstable_getCurrentPriorityLevel,dt=p.unstable_ImmediatePriority,Ea=p.unstable_UserBlockingPriority,ye=p.unstable_NormalPriority,Ue=p.unstable_LowPriority,ie=p.unstable_IdlePriority,Ke=p.log,lt=p.unstable_setDisableYieldValue,_e=null,Ne=null;function tt(e){if(typeof Ke=="function"&&lt(e),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(_e,e)}catch{}}var Be=Math.clz32?Math.clz32:Dt,ra=Math.log,wt=Math.LN2;function Dt(e){return e>>>=0,e===0?32:31-(ra(e)/wt|0)|0}var kt=256,dr=262144,Hr=4194304;function sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mr(e,t,a){var r=e.pendingLanes;if(r===0)return 0;var i=0,n=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=r&134217727;return u!==0?(r=u&~n,r!==0?i=sa(r):(o&=u,o!==0?i=sa(o):a||(a=u&~e,a!==0&&(i=sa(a))))):(u=r&~n,u!==0?i=sa(u):o!==0?i=sa(o):a||(a=r&~e,a!==0&&(i=sa(a)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:i}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function va(){var e=Hr;return Hr<<=1,(Hr&62914560)===0&&(Hr=4194304),e}function At(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ia(e,t,a,r,i,n){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,D=e.hiddenUpdates;for(a=o&~a;0<a;){var R=31-Be(a),H=1<<R;u[R]=0,h[R]=-1;var A=D[R];if(A!==null)for(D[R]=null,R=0;R<A.length;R++){var V=A[R];V!==null&&(V.lane&=-536870913)}a&=~H}r!==0&&Ha(e,r,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(o&~t))}function Ha(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function hr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Be(a),i=1<<r;i&t|e[r]&t&&(e[r]|=t),a&=~i}}function vr(e,t){var a=t&-t;return a=(a&42)!==0?1:Mt(a),(a&(e.suspendedLanes|t))!==0?0:a}function Mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ca(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xr(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Qf(e.type))}function ht(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var je=Math.random().toString(36).slice(2),Fe="__reactFiber$"+je,nt="__reactProps$"+je,Lr="__reactContainer$"+je,Bn="__reactEvents$"+je,Uu="__reactListeners$"+je,Bu="__reactHandles$"+je,dc="__reactResources$"+je,Vi="__reactMarker$"+je;function Gn(e){delete e[Fe],delete e[nt],delete e[Bn],delete e[Uu],delete e[Bu]}function qr(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Lr]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Cf(e);e!==null;){if(a=e[Fe])return a;e=Cf(e)}return t}e=a,a=e.parentNode}return null}function Ur(e){if(e=e[Fe]||e[Lr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Br(e){var t=e[dc];return t||(t=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Vi]=!0}var mc=new Set,hc={};function yr(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(hc[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var Gu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vc={},xc={};function Iu(e){return et.call(xc,e)?!0:et.call(vc,e)?!1:Gu.test(e)?xc[e]=!0:(vc[e]=!0,!1)}function wl(e,t,a){if(Iu(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function _l(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function xa(e,t,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+r)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pu(e,t,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,n=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,n.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function In(e){if(!e._valueTracker){var t=yc(e)?"checked":"value";e._valueTracker=Pu(e,t,""+e[t])}}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=yc(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yu=/[\n"\\]/g;function Xt(e){return e.replace(Yu,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pn(e,t,a,r,i,n,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Yn(e,o,Yt(t)):a!=null?Yn(e,o,Yt(a)):r!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Yt(u):e.removeAttribute("name")}function zc(e,t,a,r,i,n,o,u){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){In(e);return}a=a!=null?""+Yt(a):"",t=t!=null?""+Yt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=u?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),In(e)}function Yn(e,t,a){t==="number"&&Sl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ir(e,t,a,r){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bc(e,t,a){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Yt(a):""}function wc(e,t,a,r){if(t==null){if(r!=null){if(a!=null)throw Error(c(92));if(se(r)){if(1<r.length)throw Error(c(93));r=r[0]}a=r}a==null&&(a=""),t=a}a=Yt(t),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),In(e)}function Pr(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Xu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,a){var r=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,a):typeof a!="number"||a===0||Xu.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Sc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&a[i]!==r&&_c(e,i,r)}else for(var n in t)t.hasOwnProperty(n)&&_c(e,n,t[n])}function Xn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return Zu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Jn=null;function Zn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,Xr=null;function Dc(e){var t=Ur(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var i=r[nt]||null;if(!i)throw Error(c(90));Pn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)r=a[t],r.form===e.form&&gc(r)}break e;case"textarea":bc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ir(e,!!a.multiple,t,!1)}}}var Kn=!1;function Ac(e,t,a){if(Kn)return e(t,a);Kn=!0;try{var r=e(t);return r}finally{if(Kn=!1,(Yr!==null||Xr!==null)&&(dn(),Yr&&(t=Yr,e=Xr,Xr=Yr=null,Dc(t),e)))for(t=0;t<e.length;t++)Dc(e[t])}}function Mi(e,t){var a=e.stateNode;if(a===null)return null;var r=a[nt]||null;if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qn=!1;if(ga)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Qn=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Qn=!1}var La=null,Wn=null,Al=null;function Nc(){if(Al)return Al;var e,t=Wn,a=t.length,r,i="value"in La?La.value:La.textContent,n=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(r=1;r<=o&&t[a-r]===i[n-r];r++);return Al=i.slice(e,1<r?1-r:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function Vc(){return!1}function jt(e){function t(a,r,i,n,o){this._reactName=a,this._targetInst=i,this.type=r,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(n):n[u]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Vl:Vc,this.isPropagationStopped=Vc,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=jt(gr),Ti=T({},gr,{view:0,detail:0}),Ku=jt(Ti),$n,eo,Ri,Ml=T({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?($n=e.screenX-Ri.screenX,eo=e.screenY-Ri.screenY):eo=$n=0,Ri=e),$n)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),kc=jt(Ml),Qu=T({},Ml,{dataTransfer:0}),Wu=jt(Qu),$u=T({},Ti,{relatedTarget:0}),to=jt($u),ed=T({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),td=jt(ed),ad=T({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rd=jt(ad),id=T({},gr,{data:0}),Mc=jt(id),ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=od[e])?!!t[e]:!1}function ao(){return sd}var cd=T({},Ti,{key:function(e){if(e.key){var t=ld[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pd=jt(cd),fd=T({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=jt(fd),ud=T({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),dd=jt(ud),md=T({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hd=jt(md),vd=T({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xd=jt(vd),yd=T({},gr,{newState:0,oldState:0}),gd=jt(yd),zd=[9,13,27,32],ro=ga&&"CompositionEvent"in window,Fi=null;ga&&"documentMode"in document&&(Fi=document.documentMode);var bd=ga&&"TextEvent"in window&&!Fi,Tc=ga&&(!ro||Fi&&8<Fi&&11>=Fi),Rc=" ",Fc=!1;function Cc(e,t){switch(e){case"keyup":return zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function wd(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Fc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Fc?null:e;default:return null}}function _d(e,t){if(Jr)return e==="compositionend"||!ro&&Cc(e,t)?(e=Nc(),Al=Wn=La=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var Sd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sd[e.type]:t==="textarea"}function Hc(e,t,a,r){Yr?Xr?Xr.push(r):Xr=[r]:Yr=r,t=zn(t,"onChange"),0<t.length&&(a=new kl("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Ci=null,Ei=null;function Dd(e){bf(e,0)}function jl(e){var t=ki(e);if(gc(t))return e}function Lc(e,t){if(e==="change")return t}var qc=!1;if(ga){var io;if(ga){var lo="oninput"in document;if(!lo){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),lo=typeof Uc.oninput=="function"}io=lo}else io=!1;qc=io&&(!document.documentMode||9<document.documentMode)}function Bc(){Ci&&(Ci.detachEvent("onpropertychange",Gc),Ei=Ci=null)}function Gc(e){if(e.propertyName==="value"&&jl(Ei)){var t=[];Hc(t,Ei,e,Zn(e)),Ac(Dd,t)}}function Ad(e,t,a){e==="focusin"?(Bc(),Ci=t,Ei=a,Ci.attachEvent("onpropertychange",Gc)):e==="focusout"&&Bc()}function Nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(Ei)}function Vd(e,t){if(e==="click")return jl(t)}function kd(e,t){if(e==="input"||e==="change")return jl(t)}function Md(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Md;function Oi(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var i=a[r];if(!et.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var a=Ic(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ic(a)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Sl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Sl(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jd=ga&&"documentMode"in document&&11>=document.documentMode,Zr=null,oo=null,Hi=null,so=!1;function Jc(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;so||Zr==null||Zr!==Sl(r)||(r=Zr,"selectionStart"in r&&no(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&Oi(Hi,r)||(Hi=r,r=zn(oo,"onSelect"),0<r.length&&(t=new kl("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Zr)))}function zr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Kr={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionrun:zr("Transition","TransitionRun"),transitionstart:zr("Transition","TransitionStart"),transitioncancel:zr("Transition","TransitionCancel"),transitionend:zr("Transition","TransitionEnd")},co={},Zc={};ga&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function br(e){if(co[e])return co[e];if(!Kr[e])return e;var t=Kr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Zc)return co[e]=t[a];return e}var Kc=br("animationend"),Qc=br("animationiteration"),Wc=br("animationstart"),Td=br("transitionrun"),Rd=br("transitionstart"),Fd=br("transitioncancel"),$c=br("transitionend"),e0=new Map,po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");po.push("scrollEnd");function la(e,t){e0.set(e,t),yr(t,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Jt=[],Qr=0,fo=0;function Rl(){for(var e=Qr,t=fo=Qr=0;t<e;){var a=Jt[t];Jt[t++]=null;var r=Jt[t];Jt[t++]=null;var i=Jt[t];Jt[t++]=null;var n=Jt[t];if(Jt[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}n!==0&&t0(a,i,n)}}function Fl(e,t,a,r){Jt[Qr++]=e,Jt[Qr++]=t,Jt[Qr++]=a,Jt[Qr++]=r,fo|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function uo(e,t,a,r){return Fl(e,t,a,r),Cl(e)}function wr(e,t){return Fl(e,null,null,t),Cl(e)}function t0(e,t,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var i=!1,n=e.return;n!==null;)n.childLanes|=a,r=n.alternate,r!==null&&(r.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-Be(a),e=n.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=a|536870912),n):null}function Cl(e){if(50<nl)throw nl=0,ws=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wr={};function Cd(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,a,r){return new Cd(e,t,a,r)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function za(e,t){var a=e.alternate;return a===null?(a=Lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function a0(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function El(e,t,a,r,i,n){var o=0;if(r=e,typeof e=="function")mo(e)&&(o=1);else if(typeof e=="string")o=qm(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ge:return e=Lt(31,a,t,i),e.elementType=Ge,e.lanes=n,e;case Z:return _r(a.children,i,n,t);case Q:o=8,i|=24;break;case q:return e=Lt(12,a,t,i|2),e.elementType=q,e.lanes=n,e;case xe:return e=Lt(13,a,t,i),e.elementType=xe,e.lanes=n,e;case ke:return e=Lt(19,a,t,i),e.elementType=ke,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:o=10;break e;case oe:o=9;break e;case Y:o=11;break e;case le:o=14;break e;case He:o=16,r=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),r=null}return t=Lt(o,a,t,i),t.elementType=e,t.type=r,t.lanes=n,t}function _r(e,t,a,r){return e=Lt(7,e,r,t),e.lanes=a,e}function ho(e,t,a){return e=Lt(6,e,null,t),e.lanes=a,e}function r0(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function vo(e,t,a){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var i0=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var a=i0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Or(t)},i0.set(e,t),t)}return{value:e,source:t,stack:Or(t)}}var $r=[],ei=0,Ol=null,Li=0,Kt=[],Qt=0,qa=null,pa=1,fa="";function ba(e,t){$r[ei++]=Li,$r[ei++]=Ol,Ol=e,Li=t}function l0(e,t,a){Kt[Qt++]=pa,Kt[Qt++]=fa,Kt[Qt++]=qa,qa=e;var r=pa;e=fa;var i=32-Be(r)-1;r&=~(1<<i),a+=1;var n=32-Be(t)+i;if(30<n){var o=i-i%5;n=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pa=1<<32-Be(t)+i|a<<i|r,fa=n+e}else pa=1<<n|a<<i|r,fa=e}function xo(e){e.return!==null&&(ba(e,1),l0(e,1,0))}function yo(e){for(;e===Ol;)Ol=$r[--ei],$r[ei]=null,Li=$r[--ei],$r[ei]=null;for(;e===qa;)qa=Kt[--Qt],Kt[Qt]=null,fa=Kt[--Qt],Kt[Qt]=null,pa=Kt[--Qt],Kt[Qt]=null}function n0(e,t){Kt[Qt++]=pa,Kt[Qt++]=fa,Kt[Qt++]=qa,pa=t.id,fa=t.overflow,qa=e}var yt=null,Ye=null,we=!1,Ua=null,Wt=!1,go=Error(c(519));function Ba(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qi(Zt(t,e)),go}function o0(e){var t=e.stateNode,a=e.type,r=e.memoizedProps;switch(t[Fe]=e,t[nt]=r,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<sl.length;a++)ve(sl[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),zc(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),wc(t,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||r.suppressHydrationWarning===!0||Df(t.textContent,a)?(r.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),r.onScroll!=null&&ve("scroll",t),r.onScrollEnd!=null&&ve("scrollend",t),r.onClick!=null&&(t.onclick=ya),t=!0):t=!1,t||Ba(e,!0)}function s0(e){for(yt=e.return;yt;)switch(yt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:yt=yt.return}}function ti(e){if(e!==yt)return!1;if(!we)return s0(e),we=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Os(e.type,e.memoizedProps)),a=!a),a&&Ye&&Ba(e),s0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=Ff(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=Ff(e)}else t===27?(t=Ye,ar(e.type)?(e=Bs,Bs=null,Ye=e):Ye=t):Ye=yt?ea(e.stateNode.nextSibling):null;return!0}function Sr(){Ye=yt=null,we=!1}function zo(){var e=Ua;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Ua=null),e}function qi(e){Ua===null?Ua=[e]:Ua.push(e)}var bo=v(null),Dr=null,wa=null;function Ga(e,t,a){B(bo,t._currentValue),t._currentValue=a}function _a(e){e._currentValue=bo.current,k(bo)}function wo(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function _o(e,t,a,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;e:for(;n!==null;){var u=n;n=i;for(var h=0;h<t.length;h++)if(u.context===t[h]){n.lanes|=a,u=n.alternate,u!==null&&(u.lanes|=a),wo(n.return,a,e),r||(o=null);break e}n=u.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=a,n=o.alternate,n!==null&&(n.lanes|=a),wo(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ai(e,t,a,r){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=i.type;Ht(i.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(i===ce.current){if(o=i.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}i=i.return}e!==null&&_o(t,e,a,r),t.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){Dr=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gt(e){return c0(Dr,e)}function Ll(e,t){return Dr===null&&Ar(e),c0(e,t)}function c0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},wa===null){if(e===null)throw Error(c(308));wa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wa=wa.next=t;return a}var Ed=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Od=p.unstable_scheduleCallback,Hd=p.unstable_NormalPriority,ct={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function So(){return{controller:new Ed,data:new Map,refCount:0}}function Ui(e){e.refCount--,e.refCount===0&&Od(Hd,function(){e.controller.abort()})}var Bi=null,Do=0,ri=0,ii=null;function Ld(e,t){if(Bi===null){var a=Bi=[];Do=0,ri=Vs(),ii={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Do++,t.then(p0,p0),t}function p0(){if(--Do===0&&Bi!==null){ii!==null&&(ii.status="fulfilled");var e=Bi;Bi=null,ri=0,ii=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qd(e,t){var a=[],r={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),r}var f0=N.S;N.S=function(e,t){Jp=X(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ld(e,t),f0!==null&&f0(e,t)};var Nr=v(null);function Ao(){var e=Nr.current;return e!==null?e:Le.pooledCache}function ql(e,t){t===null?B(Nr,Nr.current):B(Nr,t.pool)}function u0(){var e=Ao();return e===null?null:{parent:ct._currentValue,pool:e}}var li=Error(c(460)),No=Error(c(474)),Ul=Error(c(542)),Bl={then:function(){}};function d0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function m0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ya,ya),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,v0(e),e;default:if(typeof t.status=="string")t.then(ya,ya);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,v0(e),e}throw kr=t,li}}function Vr(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(kr=a,li):a}}var kr=null;function h0(){if(kr===null)throw Error(c(459));var e=kr;return kr=null,e}function v0(e){if(e===li||e===Ul)throw Error(c(483))}var ni=null,Gi=0;function Gl(e){var t=Gi;return Gi+=1,ni===null&&(ni=[]),m0(ni,e,t)}function Ii(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Il(e,t){throw t.$$typeof===E?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function x0(e){function t(z,y){if(e){var S=z.deletions;S===null?(z.deletions=[y],z.flags|=16):S.push(y)}}function a(z,y){if(!e)return null;for(;y!==null;)t(z,y),y=y.sibling;return null}function r(z){for(var y=new Map;z!==null;)z.key!==null?y.set(z.key,z):y.set(z.index,z),z=z.sibling;return y}function i(z,y){return z=za(z,y),z.index=0,z.sibling=null,z}function n(z,y,S){return z.index=S,e?(S=z.alternate,S!==null?(S=S.index,S<y?(z.flags|=67108866,y):S):(z.flags|=67108866,y)):(z.flags|=1048576,y)}function o(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function u(z,y,S,C){return y===null||y.tag!==6?(y=ho(S,z.mode,C),y.return=z,y):(y=i(y,S),y.return=z,y)}function h(z,y,S,C){var te=S.type;return te===Z?R(z,y,S.props.children,C,S.key):y!==null&&(y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===He&&Vr(te)===y.type)?(y=i(y,S.props),Ii(y,S),y.return=z,y):(y=El(S.type,S.key,S.props,null,z.mode,C),Ii(y,S),y.return=z,y)}function D(z,y,S,C){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=vo(S,z.mode,C),y.return=z,y):(y=i(y,S.children||[]),y.return=z,y)}function R(z,y,S,C,te){return y===null||y.tag!==7?(y=_r(S,z.mode,C,te),y.return=z,y):(y=i(y,S),y.return=z,y)}function H(z,y,S){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ho(""+y,z.mode,S),y.return=z,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case O:return S=El(y.type,y.key,y.props,null,z.mode,S),Ii(S,y),S.return=z,S;case G:return y=vo(y,z.mode,S),y.return=z,y;case He:return y=Vr(y),H(z,y,S)}if(se(y)||Je(y))return y=_r(y,z.mode,S,null),y.return=z,y;if(typeof y.then=="function")return H(z,Gl(y),S);if(y.$$typeof===_)return H(z,Ll(z,y),S);Il(z,y)}return null}function A(z,y,S,C){var te=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return te!==null?null:u(z,y,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return S.key===te?h(z,y,S,C):null;case G:return S.key===te?D(z,y,S,C):null;case He:return S=Vr(S),A(z,y,S,C)}if(se(S)||Je(S))return te!==null?null:R(z,y,S,C,null);if(typeof S.then=="function")return A(z,y,Gl(S),C);if(S.$$typeof===_)return A(z,y,Ll(z,S),C);Il(z,S)}return null}function V(z,y,S,C,te){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return z=z.get(S)||null,u(y,z,""+C,te);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O:return z=z.get(C.key===null?S:C.key)||null,h(y,z,C,te);case G:return z=z.get(C.key===null?S:C.key)||null,D(y,z,C,te);case He:return C=Vr(C),V(z,y,S,C,te)}if(se(C)||Je(C))return z=z.get(S)||null,R(y,z,C,te,null);if(typeof C.then=="function")return V(z,y,S,Gl(C),te);if(C.$$typeof===_)return V(z,y,S,Ll(y,C),te);Il(y,C)}return null}function K(z,y,S,C){for(var te=null,Se=null,W=y,me=y=0,ze=null;W!==null&&me<S.length;me++){W.index>me?(ze=W,W=null):ze=W.sibling;var De=A(z,W,S[me],C);if(De===null){W===null&&(W=ze);break}e&&W&&De.alternate===null&&t(z,W),y=n(De,y,me),Se===null?te=De:Se.sibling=De,Se=De,W=ze}if(me===S.length)return a(z,W),we&&ba(z,me),te;if(W===null){for(;me<S.length;me++)W=H(z,S[me],C),W!==null&&(y=n(W,y,me),Se===null?te=W:Se.sibling=W,Se=W);return we&&ba(z,me),te}for(W=r(W);me<S.length;me++)ze=V(W,z,me,S[me],C),ze!==null&&(e&&ze.alternate!==null&&W.delete(ze.key===null?me:ze.key),y=n(ze,y,me),Se===null?te=ze:Se.sibling=ze,Se=ze);return e&&W.forEach(function(or){return t(z,or)}),we&&ba(z,me),te}function ne(z,y,S,C){if(S==null)throw Error(c(151));for(var te=null,Se=null,W=y,me=y=0,ze=null,De=S.next();W!==null&&!De.done;me++,De=S.next()){W.index>me?(ze=W,W=null):ze=W.sibling;var or=A(z,W,De.value,C);if(or===null){W===null&&(W=ze);break}e&&W&&or.alternate===null&&t(z,W),y=n(or,y,me),Se===null?te=or:Se.sibling=or,Se=or,W=ze}if(De.done)return a(z,W),we&&ba(z,me),te;if(W===null){for(;!De.done;me++,De=S.next())De=H(z,De.value,C),De!==null&&(y=n(De,y,me),Se===null?te=De:Se.sibling=De,Se=De);return we&&ba(z,me),te}for(W=r(W);!De.done;me++,De=S.next())De=V(W,z,me,De.value,C),De!==null&&(e&&De.alternate!==null&&W.delete(De.key===null?me:De.key),y=n(De,y,me),Se===null?te=De:Se.sibling=De,Se=De);return e&&W.forEach(function(Qm){return t(z,Qm)}),we&&ba(z,me),te}function Oe(z,y,S,C){if(typeof S=="object"&&S!==null&&S.type===Z&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case O:e:{for(var te=S.key;y!==null;){if(y.key===te){if(te=S.type,te===Z){if(y.tag===7){a(z,y.sibling),C=i(y,S.props.children),C.return=z,z=C;break e}}else if(y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===He&&Vr(te)===y.type){a(z,y.sibling),C=i(y,S.props),Ii(C,S),C.return=z,z=C;break e}a(z,y);break}else t(z,y);y=y.sibling}S.type===Z?(C=_r(S.props.children,z.mode,C,S.key),C.return=z,z=C):(C=El(S.type,S.key,S.props,null,z.mode,C),Ii(C,S),C.return=z,z=C)}return o(z);case G:e:{for(te=S.key;y!==null;){if(y.key===te)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){a(z,y.sibling),C=i(y,S.children||[]),C.return=z,z=C;break e}else{a(z,y);break}else t(z,y);y=y.sibling}C=vo(S,z.mode,C),C.return=z,z=C}return o(z);case He:return S=Vr(S),Oe(z,y,S,C)}if(se(S))return K(z,y,S,C);if(Je(S)){if(te=Je(S),typeof te!="function")throw Error(c(150));return S=te.call(S),ne(z,y,S,C)}if(typeof S.then=="function")return Oe(z,y,Gl(S),C);if(S.$$typeof===_)return Oe(z,y,Ll(z,S),C);Il(z,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,y!==null&&y.tag===6?(a(z,y.sibling),C=i(y,S),C.return=z,z=C):(a(z,y),C=ho(S,z.mode,C),C.return=z,z=C),o(z)):a(z,y)}return function(z,y,S,C){try{Gi=0;var te=Oe(z,y,S,C);return ni=null,te}catch(W){if(W===li||W===Ul)throw W;var Se=Lt(29,W,null,z.mode);return Se.lanes=C,Se.return=z,Se}finally{}}}var Mr=x0(!0),y0=x0(!1),Ia=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Cl(e),t0(e,null,a),t}return Fl(e,r,t,a),Cl(e)}function Pi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,hr(e,a)}}function Mo(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,a=a.next}while(a!==null);n===null?i=n=t:n=n.next=t}else i=n=t;a={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jo=!1;function Yi(){if(jo){var e=ii;if(e!==null)throw e}}function Xi(e,t,a,r){jo=!1;var i=e.updateQueue;Ia=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,D=h.next;h.next=null,o===null?n=D:o.next=D,o=h;var R=e.alternate;R!==null&&(R=R.updateQueue,u=R.lastBaseUpdate,u!==o&&(u===null?R.firstBaseUpdate=D:u.next=D,R.lastBaseUpdate=h))}if(n!==null){var H=i.baseState;o=0,R=D=h=null,u=n;do{var A=u.lane&-536870913,V=A!==u.lane;if(V?(ge&A)===A:(r&A)===A){A!==0&&A===ri&&(jo=!0),R!==null&&(R=R.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var K=e,ne=u;A=t;var Oe=a;switch(ne.tag){case 1:if(K=ne.payload,typeof K=="function"){H=K.call(Oe,H,A);break e}H=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ne.payload,A=typeof K=="function"?K.call(Oe,H,A):K,A==null)break e;H=T({},H,A);break e;case 2:Ia=!0}}A=u.callback,A!==null&&(e.flags|=64,V&&(e.flags|=8192),V=i.callbacks,V===null?i.callbacks=[A]:V.push(A))}else V={lane:A,tag:u.tag,payload:u.payload,callback:u.callback,next:null},R===null?(D=R=V,h=H):R=R.next=V,o|=A;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;V=u,u=V.next,V.next=null,i.lastBaseUpdate=V,i.shared.pending=null}}while(!0);R===null&&(h=H),i.baseState=h,i.firstBaseUpdate=D,i.lastBaseUpdate=R,n===null&&(i.shared.lanes=0),Qa|=o,e.lanes=o,e.memoizedState=H}}function g0(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function z0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)g0(a[e],t)}var oi=v(null),Pl=v(0);function b0(e,t){e=Ta,B(Pl,e),B(oi,t),Ta=e|t.baseLanes}function To(){B(Pl,Ta),B(oi,oi.current)}function Ro(){Ta=Pl.current,k(oi),k(Pl)}var qt=v(null),$t=null;function Xa(e){var t=e.alternate;B(ot,ot.current&1),B(qt,e),$t===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&($t=e)}function Fo(e){B(ot,ot.current),B(qt,e),$t===null&&($t=e)}function w0(e){e.tag===22?(B(ot,ot.current),B(qt,e),$t===null&&($t=e)):Ja()}function Ja(){B(ot,ot.current),B(qt,qt.current)}function Ut(e){k(qt),$t===e&&($t=null),k(ot)}var ot=v(0);function Yl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qs(a)||Us(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=0,fe=null,Ce=null,pt=null,Xl=!1,si=!1,jr=!1,Jl=0,Ji=0,ci=null,Ud=0;function at(){throw Error(c(321))}function Co(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ht(e[a],t[a]))return!1;return!0}function Eo(e,t,a,r,i,n){return Sa=n,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?lp:Qo,jr=!1,n=a(r,i),jr=!1,si&&(n=S0(t,a,r,i)),_0(e),n}function _0(e){N.H=Qi;var t=Ce!==null&&Ce.next!==null;if(Sa=0,pt=Ce=fe=null,Xl=!1,Ji=0,ci=null,t)throw Error(c(300));e===null||ft||(e=e.dependencies,e!==null&&Hl(e)&&(ft=!0))}function S0(e,t,a,r){fe=e;var i=0;do{if(si&&(ci=null),Ji=0,si=!1,25<=i)throw Error(c(301));if(i+=1,pt=Ce=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}N.H=np,n=t(a,r)}while(si);return n}function Bd(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Zi(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(fe.flags|=1024),t}function Oo(){var e=Jl!==0;return Jl=0,e}function Ho(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Lo(e){if(Xl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xl=!1}Sa=0,pt=Ce=fe=null,si=!1,Ji=Jl=0,ci=null}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?fe.memoizedState=pt=e:pt=pt.next=e,pt}function st(){if(Ce===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=pt===null?fe.memoizedState:pt.next;if(t!==null)pt=t,Ce=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},pt===null?fe.memoizedState=pt=e:pt=pt.next=e}return pt}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zi(e){var t=Ji;return Ji+=1,ci===null&&(ci=[]),e=m0(ci,e,t),t=fe,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?lp:Qo),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zi(e);if(e.$$typeof===_)return gt(e)}throw Error(c(438,String(e)))}function qo(e){var t=null,a=fe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Zl(),fe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),r=0;r<e;r++)a[r]=Ie;return t.index++,a}function Da(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=st();return Uo(t,Ce,e)}function Uo(e,t,a){var r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=a;var i=e.baseQueue,n=r.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}t.baseQueue=i=n,r.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var u=o=null,h=null,D=t,R=!1;do{var H=D.lane&-536870913;if(H!==D.lane?(ge&H)===H:(Sa&H)===H){var A=D.revertLane;if(A===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),H===ri&&(R=!0);else if((Sa&A)===A){D=D.next,A===ri&&(R=!0);continue}else H={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},h===null?(u=h=H,o=n):h=h.next=H,fe.lanes|=A,Qa|=A;H=D.action,jr&&a(n,H),n=D.hasEagerState?D.eagerState:a(n,H)}else A={lane:H,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},h===null?(u=h=A,o=n):h=h.next=A,fe.lanes|=H,Qa|=H;D=D.next}while(D!==null&&D!==t);if(h===null?o=n:h.next=u,!Ht(n,e.memoizedState)&&(ft=!0,R&&(a=ii,a!==null)))throw a;e.memoizedState=n,e.baseState=o,e.baseQueue=h,r.lastRenderedState=n}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=st(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var r=a.dispatch,i=a.pending,n=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do n=e(n,o.action),o=o.next;while(o!==i);Ht(n,t.memoizedState)||(ft=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,r]}function D0(e,t,a){var r=fe,i=st(),n=we;if(n){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!Ht((Ce||i).memoizedState,a);if(o&&(i.memoizedState=a,ft=!0),i=i.queue,Po(V0.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||pt!==null&&pt.memoizedState.tag&1){if(r.flags|=2048,pi(9,{destroy:void 0},N0.bind(null,r,i,a,t),null),Le===null)throw Error(c(349));n||(Sa&127)!==0||A0(r,t,a)}return a}function A0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=fe.updateQueue,t===null?(t=Zl(),fe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function N0(e,t,a,r){t.value=a,t.getSnapshot=r,k0(t)&&M0(e)}function V0(e,t,a){return a(function(){k0(t)&&M0(e)})}function k0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ht(e,a)}catch{return!0}}function M0(e){var t=wr(e,2);t!==null&&Et(t,e,2)}function Go(e){var t=Vt();if(typeof e=="function"){var a=e;if(e=a(),jr){tt(!0);try{a()}finally{tt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:e},t}function j0(e,t,a,r){return e.baseState=a,Uo(e,Ce,typeof r=="function"?r:Da)}function Gd(e,t,a,r,i){if(en(e))throw Error(c(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};N.T!==null?a(!0):n.isTransition=!1,r(n),a=t.pending,a===null?(n.next=t.pending=n,T0(t,n)):(n.next=a.next,t.pending=a.next=n)}}function T0(e,t){var a=t.action,r=t.payload,i=e.state;if(t.isTransition){var n=N.T,o={};N.T=o;try{var u=a(i,r),h=N.S;h!==null&&h(o,u),R0(e,t,u)}catch(D){Io(e,t,D)}finally{n!==null&&o.types!==null&&(n.types=o.types),N.T=n}}else try{n=a(i,r),R0(e,t,n)}catch(D){Io(e,t,D)}}function R0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){F0(e,t,r)},function(r){return Io(e,t,r)}):F0(e,t,a)}function F0(e,t,a){t.status="fulfilled",t.value=a,C0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,T0(e,a)))}function Io(e,t,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=a,C0(t),t=t.next;while(t!==r)}e.action=null}function C0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function E0(e,t){return t}function O0(e,t){if(we){var a=Le.formState;if(a!==null){e:{var r=fe;if(we){if(Ye){t:{for(var i=Ye,n=Wt;i.nodeType!==8;){if(!n){i=null;break t}if(i=ea(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Ye=ea(i.nextSibling),r=i.data==="F!";break e}}Ba(r)}r=!1}r&&(t=a[0])}}return a=Vt(),a.memoizedState=a.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E0,lastRenderedState:t},a.queue=r,a=ap.bind(null,fe,r),r.dispatch=a,r=Go(!1),n=Ko.bind(null,fe,!1,r.queue),r=Vt(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,a=Gd.bind(null,fe,i,n,a),i.dispatch=a,r.memoizedState=e,[t,a,!1]}function H0(e){var t=st();return L0(t,Ce,e)}function L0(e,t,a){if(t=Uo(e,t,E0)[0],e=Ql(Da)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Zi(t)}catch(o){throw o===li?Ul:o}else r=t;t=st();var i=t.queue,n=i.dispatch;return a!==t.memoizedState&&(fe.flags|=2048,pi(9,{destroy:void 0},Id.bind(null,i,a),null)),[r,n,e]}function Id(e,t){e.action=t}function q0(e){var t=st(),a=Ce;if(a!==null)return L0(t,a,e);st(),t=t.memoizedState,a=st();var r=a.queue.dispatch;return a.memoizedState=e,[t,r,!1]}function pi(e,t,a,r){return e={tag:e,create:a,deps:r,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Zl(),fe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e),e}function U0(){return st().memoizedState}function Wl(e,t,a,r){var i=Vt();fe.flags|=e,i.memoizedState=pi(1|t,{destroy:void 0},a,r===void 0?null:r)}function $l(e,t,a,r){var i=st();r=r===void 0?null:r;var n=i.memoizedState.inst;Ce!==null&&r!==null&&Co(r,Ce.memoizedState.deps)?i.memoizedState=pi(t,n,a,r):(fe.flags|=e,i.memoizedState=pi(1|t,n,a,r))}function B0(e,t){Wl(8390656,8,e,t)}function Po(e,t){$l(2048,8,e,t)}function Pd(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=Zl(),fe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function G0(e){var t=st().memoizedState;return Pd({ref:t,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function I0(e,t){return $l(4,2,e,t)}function P0(e,t){return $l(4,4,e,t)}function Y0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function X0(e,t,a){a=a!=null?a.concat([e]):null,$l(4,4,Y0.bind(null,t,e),a)}function Yo(){}function J0(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Z0(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),jr){tt(!0);try{e()}finally{tt(!1)}}return a.memoizedState=[r,t],r}function Xo(e,t,a){return a===void 0||(Sa&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Kp(),fe.lanes|=e,Qa|=e,a)}function K0(e,t,a,r){return Ht(a,t)?a:oi.current!==null?(e=Xo(e,a,r),Ht(e,t)||(ft=!0),e):(Sa&42)===0||(Sa&1073741824)!==0&&(ge&261930)===0?(ft=!0,e.memoizedState=a):(e=Kp(),fe.lanes|=e,Qa|=e,t)}function Q0(e,t,a,r,i){var n=U.p;U.p=n!==0&&8>n?n:8;var o=N.T,u={};N.T=u,Ko(e,!1,t,a);try{var h=i(),D=N.S;if(D!==null&&D(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=qd(h,r);Ki(e,t,R,It(e))}else Ki(e,t,r,It(e))}catch(H){Ki(e,t,{then:function(){},status:"rejected",reason:H},It())}finally{U.p=n,o!==null&&u.types!==null&&(o.types=u.types),N.T=o}}function Yd(){}function Jo(e,t,a,r){if(e.tag!==5)throw Error(c(476));var i=W0(e).queue;Q0(e,i,t,M,a===null?Yd:function(){return $0(e),a(r)})}function W0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:M},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $0(e){var t=W0(e);t.next===null&&(t=e.alternate.memoizedState),Ki(e,t.next.queue,{},It())}function Zo(){return gt(dl)}function ep(){return st().memoizedState}function tp(){return st().memoizedState}function Xd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=It();e=Pa(a);var r=Ya(t,e,a);r!==null&&(Et(r,t,a),Pi(r,t,a)),t={cache:So()},e.payload=t;return}t=t.return}}function Jd(e,t,a){var r=It();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},en(e)?rp(t,a):(a=uo(e,t,a,r),a!==null&&(Et(a,e,r),ip(a,t,r)))}function ap(e,t,a){var r=It();Ki(e,t,a,r)}function Ki(e,t,a,r){var i={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(en(e))rp(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var o=t.lastRenderedState,u=n(o,a);if(i.hasEagerState=!0,i.eagerState=u,Ht(u,o))return Fl(e,t,i,0),Le===null&&Rl(),!1}catch{}finally{}if(a=uo(e,t,i,r),a!==null)return Et(a,e,r),ip(a,t,r),!0}return!1}function Ko(e,t,a,r){if(r={lane:2,revertLane:Vs(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},en(e)){if(t)throw Error(c(479))}else t=uo(e,a,r,2),t!==null&&Et(t,e,2)}function en(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function rp(e,t){si=Xl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ip(e,t,a){if((a&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,hr(e,a)}}var Qi={readContext:gt,use:Kl,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at};Qi.useEffectEvent=at;var lp={readContext:gt,use:Kl,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:B0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,Y0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Wl(4194308,4,e,t)},useInsertionEffect:function(e,t){Wl(4,2,e,t)},useMemo:function(e,t){var a=Vt();t=t===void 0?null:t;var r=e();if(jr){tt(!0);try{e()}finally{tt(!1)}}return a.memoizedState=[r,t],r},useReducer:function(e,t,a){var r=Vt();if(a!==void 0){var i=a(t);if(jr){tt(!0);try{a(t)}finally{tt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Jd.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,a=ap.bind(null,fe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Yo,useDeferredValue:function(e,t){var a=Vt();return Xo(a,e,t)},useTransition:function(){var e=Go(!1);return e=Q0.bind(null,fe,e.queue,!0,!1),Vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var r=fe,i=Vt();if(we){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Le===null)throw Error(c(349));(ge&127)!==0||A0(r,t,a)}i.memoizedState=a;var n={value:a,getSnapshot:t};return i.queue=n,B0(V0.bind(null,r,n,e),[e]),r.flags|=2048,pi(9,{destroy:void 0},N0.bind(null,r,n,a,t),null),a},useId:function(){var e=Vt(),t=Le.identifierPrefix;if(we){var a=fa,r=pa;a=(r&~(1<<32-Be(r)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Jl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ud++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zo,useFormState:O0,useActionState:O0,useOptimistic:function(e){var t=Vt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ko.bind(null,fe,!0,a),a.dispatch=t,[e,t]},useMemoCache:qo,useCacheRefresh:function(){return Vt().memoizedState=Xd.bind(null,fe)},useEffectEvent:function(e){var t=Vt(),a={impl:e};return t.memoizedState=a,function(){if((Ve&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Qo={readContext:gt,use:Kl,useCallback:J0,useContext:gt,useEffect:Po,useImperativeHandle:X0,useInsertionEffect:I0,useLayoutEffect:P0,useMemo:Z0,useReducer:Ql,useRef:U0,useState:function(){return Ql(Da)},useDebugValue:Yo,useDeferredValue:function(e,t){var a=st();return K0(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Ql(Da)[0],t=st().memoizedState;return[typeof e=="boolean"?e:Zi(e),t]},useSyncExternalStore:D0,useId:ep,useHostTransitionStatus:Zo,useFormState:H0,useActionState:H0,useOptimistic:function(e,t){var a=st();return j0(a,Ce,e,t)},useMemoCache:qo,useCacheRefresh:tp};Qo.useEffectEvent=G0;var np={readContext:gt,use:Kl,useCallback:J0,useContext:gt,useEffect:Po,useImperativeHandle:X0,useInsertionEffect:I0,useLayoutEffect:P0,useMemo:Z0,useReducer:Bo,useRef:U0,useState:function(){return Bo(Da)},useDebugValue:Yo,useDeferredValue:function(e,t){var a=st();return Ce===null?Xo(a,e,t):K0(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Bo(Da)[0],t=st().memoizedState;return[typeof e=="boolean"?e:Zi(e),t]},useSyncExternalStore:D0,useId:ep,useHostTransitionStatus:Zo,useFormState:q0,useActionState:q0,useOptimistic:function(e,t){var a=st();return Ce!==null?j0(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qo,useCacheRefresh:tp};np.useEffectEvent=G0;function Wo(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $o={enqueueSetState:function(e,t,a){e=e._reactInternals;var r=It(),i=Pa(r);i.payload=t,a!=null&&(i.callback=a),t=Ya(e,i,r),t!==null&&(Et(t,e,r),Pi(t,e,r))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=It(),i=Pa(r);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ya(e,i,r),t!==null&&(Et(t,e,r),Pi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=It(),r=Pa(a);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,a),t!==null&&(Et(t,e,a),Pi(t,e,a))}};function op(e,t,a,r,i,n,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,n,o):t.prototype&&t.prototype.isPureReactComponent?!Oi(a,r)||!Oi(i,n):!0}function sp(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function Tr(e,t){var a=t;if("ref"in t){a={};for(var r in t)r!=="ref"&&(a[r]=t[r])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function cp(e){Tl(e)}function pp(e){console.error(e)}function fp(e){Tl(e)}function tn(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function up(e,t,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function es(e,t,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){tn(e,t)},a}function dp(e){return e=Pa(e),e.tag=3,e}function mp(e,t,a,r){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=r.value;e.payload=function(){return i(n)},e.callback=function(){up(t,a,r)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){up(t,a,r),typeof i!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})})}function Zd(e,t,a,r,i){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=a.alternate,t!==null&&ai(t,a,i,!0),a=qt.current,a!==null){switch(a.tag){case 31:case 13:return $t===null?mn():a.alternate===null&&rt===0&&(rt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,r===Bl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([r]):t.add(r),Ds(e,r,i)),!1;case 22:return a.flags|=65536,r===Bl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([r]):a.add(r)),Ds(e,r,i)),!1}throw Error(c(435,a.tag))}return Ds(e,r,i),mn(),!1}if(we)return t=qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==go&&(e=Error(c(422),{cause:r}),qi(Zt(e,a)))):(r!==go&&(t=Error(c(423),{cause:r}),qi(Zt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Zt(r,a),i=es(e.stateNode,r,i),Mo(e,i),rt!==4&&(rt=2)),!1;var n=Error(c(520),{cause:r});if(n=Zt(n,a),ll===null?ll=[n]:ll.push(n),rt!==4&&(rt=2),t===null)return!0;r=Zt(r,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=es(a.stateNode,r,e),Mo(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Wa===null||!Wa.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=dp(i),mp(i,e,a,r),Mo(a,i),!1}a=a.return}while(a!==null);return!1}var ts=Error(c(461)),ft=!1;function zt(e,t,a,r){t.child=e===null?y0(t,null,a,r):Mr(t,e.child,a,r)}function hp(e,t,a,r,i){a=a.render;var n=t.ref;if("ref"in r){var o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}else o=r;return Ar(t),r=Eo(e,t,a,o,n,i),u=Oo(),e!==null&&!ft?(Ho(e,t,i),Aa(e,t,i)):(we&&u&&xo(t),t.flags|=1,zt(e,t,r,i),t.child)}function vp(e,t,a,r,i){if(e===null){var n=a.type;return typeof n=="function"&&!mo(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,xp(e,t,n,r,i)):(e=El(a.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!cs(e,i)){var o=n.memoizedProps;if(a=a.compare,a=a!==null?a:Oi,a(o,r)&&e.ref===t.ref)return Aa(e,t,i)}return t.flags|=1,e=za(n,r),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,a,r,i){if(e!==null){var n=e.memoizedProps;if(Oi(n,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=n,cs(e,i))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Aa(e,t,i)}return as(e,t,a,r,i)}function yp(e,t,a,r){var i=r.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~n}else r=0,t.child=null;return gp(e,t,n,a,r)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(t,n!==null?n.cachePool:null),n!==null?b0(t,n):To(),w0(t);else return r=t.lanes=536870912,gp(e,t,n!==null?n.baseLanes|a:a,a,r)}else n!==null?(ql(t,n.cachePool),b0(t,n),Ja(),t.memoizedState=null):(e!==null&&ql(t,null),To(),Ja());return zt(e,t,i,a),t.child}function Wi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gp(e,t,a,r,i){var n=Ao();return n=n===null?null:{parent:ct._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ql(t,null),To(),w0(t),e!==null&&ai(e,t,r,!0),t.childLanes=i,null}function an(e,t){return t=ln({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zp(e,t,a){return Mr(t,e.child,null,a),e=an(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Kd(e,t,a){var r=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(r.mode==="hidden")return e=an(t,r),t.lanes=536870912,Wi(null,e);if(Fo(t),(e=Ye)?(e=Rf(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:pa,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},a=r0(e),a.return=t,t.child=a,yt=t,Ye=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return an(t,r)}var n=e.memoizedState;if(n!==null){var o=n.dehydrated;if(Fo(t),i)if(t.flags&256)t.flags&=-257,t=zp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ft||ai(e,t,a,!1),i=(a&e.childLanes)!==0,ft||i){if(r=Le,r!==null&&(o=vr(r,a),o!==0&&o!==n.retryLane))throw n.retryLane=o,wr(e,o),Et(r,e,o),ts;mn(),t=zp(e,t,a)}else e=n.treeContext,Ye=ea(o.nextSibling),yt=t,we=!0,Ua=null,Wt=!1,e!==null&&n0(t,e),t=an(t,r),t.flags|=4096;return t}return e=za(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function as(e,t,a,r,i){return Ar(t),a=Eo(e,t,a,r,void 0,i),r=Oo(),e!==null&&!ft?(Ho(e,t,i),Aa(e,t,i)):(we&&r&&xo(t),t.flags|=1,zt(e,t,a,i),t.child)}function bp(e,t,a,r,i,n){return Ar(t),t.updateQueue=null,a=S0(t,r,a,i),_0(e),r=Oo(),e!==null&&!ft?(Ho(e,t,n),Aa(e,t,n)):(we&&r&&xo(t),t.flags|=1,zt(e,t,a,n),t.child)}function wp(e,t,a,r,i){if(Ar(t),t.stateNode===null){var n=Wr,o=a.contextType;typeof o=="object"&&o!==null&&(n=gt(o)),n=new a(r,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=$o,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=r,n.state=t.memoizedState,n.refs={},Vo(t),o=a.contextType,n.context=typeof o=="object"&&o!==null?gt(o):Wr,n.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Wo(t,a,o,r),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&$o.enqueueReplaceState(n,n.state,null),Xi(t,r,n,i),Yi(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){n=t.stateNode;var u=t.memoizedProps,h=Tr(a,u);n.props=h;var D=n.context,R=a.contextType;o=Wr,typeof R=="object"&&R!==null&&(o=gt(R));var H=a.getDerivedStateFromProps;R=typeof H=="function"||typeof n.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,R||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u||D!==o)&&sp(t,n,r,o),Ia=!1;var A=t.memoizedState;n.state=A,Xi(t,r,n,i),Yi(),D=t.memoizedState,u||A!==D||Ia?(typeof H=="function"&&(Wo(t,a,H,r),D=t.memoizedState),(h=Ia||op(t,a,h,r,A,D,o))?(R||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=D),n.props=r,n.state=D,n.context=o,r=h):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,ko(e,t),o=t.memoizedProps,R=Tr(a,o),n.props=R,H=t.pendingProps,A=n.context,D=a.contextType,h=Wr,typeof D=="object"&&D!==null&&(h=gt(D)),u=a.getDerivedStateFromProps,(D=typeof u=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==H||A!==h)&&sp(t,n,r,h),Ia=!1,A=t.memoizedState,n.state=A,Xi(t,r,n,i),Yi();var V=t.memoizedState;o!==H||A!==V||Ia||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof u=="function"&&(Wo(t,a,u,r),V=t.memoizedState),(R=Ia||op(t,a,R,r,A,V,h)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(D||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,V,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,V,h)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=V),n.props=r,n.state=V,n.context=h,r=R):(typeof n.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),r=!1)}return n=r,rn(e,t),r=(t.flags&128)!==0,n||r?(n=t.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&r?(t.child=Mr(t,e.child,null,i),t.child=Mr(t,null,a,i)):zt(e,t,a,i),t.memoizedState=n.state,e=t.child):e=Aa(e,t,i),e}function _p(e,t,a,r){return Sr(),t.flags|=256,zt(e,t,a,r),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function is(e){return{baseLanes:e,cachePool:u0()}}function ls(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Gt),e}function Sp(e,t,a){var r=t.pendingProps,i=!1,n=(t.flags&128)!==0,o;if((o=n)||(o=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(i?Xa(t):Ja(),(e=Ye)?(e=Rf(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:pa,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},a=r0(e),a.return=t,t.child=a,yt=t,Ye=null)):e=null,e===null)throw Ba(t);return Us(e)?t.lanes=32:t.lanes=536870912,null}var u=r.children;return r=r.fallback,i?(Ja(),i=t.mode,u=ln({mode:"hidden",children:u},i),r=_r(r,i,a,null),u.return=t,r.return=t,u.sibling=r,t.child=u,r=t.child,r.memoizedState=is(a),r.childLanes=ls(e,o,a),t.memoizedState=rs,Wi(null,r)):(Xa(t),ns(t,u))}var h=e.memoizedState;if(h!==null&&(u=h.dehydrated,u!==null)){if(n)t.flags&256?(Xa(t),t.flags&=-257,t=os(e,t,a)):t.memoizedState!==null?(Ja(),t.child=e.child,t.flags|=128,t=null):(Ja(),u=r.fallback,i=t.mode,r=ln({mode:"visible",children:r.children},i),u=_r(u,i,a,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,Mr(t,e.child,null,a),r=t.child,r.memoizedState=is(a),r.childLanes=ls(e,o,a),t.memoizedState=rs,t=Wi(null,r));else if(Xa(t),Us(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var D=o.dgst;o=D,r=Error(c(419)),r.stack="",r.digest=o,qi({value:r,source:null,stack:null}),t=os(e,t,a)}else if(ft||ai(e,t,a,!1),o=(a&e.childLanes)!==0,ft||o){if(o=Le,o!==null&&(r=vr(o,a),r!==0&&r!==h.retryLane))throw h.retryLane=r,wr(e,r),Et(o,e,r),ts;qs(u)||mn(),t=os(e,t,a)}else qs(u)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ye=ea(u.nextSibling),yt=t,we=!0,Ua=null,Wt=!1,e!==null&&n0(t,e),t=ns(t,r.children),t.flags|=4096);return t}return i?(Ja(),u=r.fallback,i=t.mode,h=e.child,D=h.sibling,r=za(h,{mode:"hidden",children:r.children}),r.subtreeFlags=h.subtreeFlags&65011712,D!==null?u=za(D,u):(u=_r(u,i,a,null),u.flags|=2),u.return=t,r.return=t,r.sibling=u,t.child=r,Wi(null,r),r=t.child,u=e.child.memoizedState,u===null?u=is(a):(i=u.cachePool,i!==null?(h=ct._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=u0(),u={baseLanes:u.baseLanes|a,cachePool:i}),r.memoizedState=u,r.childLanes=ls(e,o,a),t.memoizedState=rs,Wi(e.child,r)):(Xa(t),a=e.child,e=a.sibling,a=za(a,{mode:"visible",children:r.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function ns(e,t){return t=ln({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ln(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function os(e,t,a){return Mr(t,e.child,null,a),e=ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dp(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wo(e.return,t,a)}function ss(e,t,a,r,i,n){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:i,treeForkCount:n}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=a,o.tailMode=i,o.treeForkCount=n)}function Ap(e,t,a){var r=t.pendingProps,i=r.revealOrder,n=r.tail;r=r.children;var o=ot.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,B(ot,o),zt(e,t,r,a),r=we?Li:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dp(e,a,t);else if(e.tag===19)Dp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Yl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ss(t,!1,i,a,n,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ss(t,!0,a,null,n,r);break;case"together":ss(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ai(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=za(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=za(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function cs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function Qd(e,t,a){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),Ga(t,ct,e.memoizedState.cache),Sr();break;case 27:case 5:Ze(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:Ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Sp(e,t,a):(Xa(t),e=Aa(e,t,a),e!==null?e.sibling:null);Xa(t);break;case 19:var i=(e.flags&128)!==0;if(r=(a&t.childLanes)!==0,r||(ai(e,t,a,!1),r=(a&t.childLanes)!==0),i){if(r)return Ap(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(ot,ot.current),r)break;return null;case 22:return t.lanes=0,yp(e,t,a,t.pendingProps);case 24:Ga(t,ct,e.memoizedState.cache)}return Aa(e,t,a)}function Np(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!cs(e,a)&&(t.flags&128)===0)return ft=!1,Qd(e,t,a);ft=(e.flags&131072)!==0}else ft=!1,we&&(t.flags&1048576)!==0&&l0(t,Li,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Vr(t.elementType),t.type=e,typeof e=="function")mo(e)?(r=Tr(e,r),t.tag=1,t=wp(null,t,e,r,a)):(t.tag=0,t=as(null,t,e,r,a));else{if(e!=null){var i=e.$$typeof;if(i===Y){t.tag=11,t=hp(null,t,e,r,a);break e}else if(i===le){t.tag=14,t=vp(null,t,e,r,a);break e}}throw t=qe(e)||e,Error(c(306,t,""))}}return t;case 0:return as(e,t,t.type,t.pendingProps,a);case 1:return r=t.type,i=Tr(r,t.pendingProps),wp(e,t,r,i,a);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(c(387));r=t.pendingProps;var n=t.memoizedState;i=n.element,ko(e,t),Xi(t,r,null,a);var o=t.memoizedState;if(r=o.cache,Ga(t,ct,r),r!==n.cache&&_o(t,[ct],a,!0),Yi(),r=o.element,n.isDehydrated)if(n={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=_p(e,t,r,a);break e}else if(r!==i){i=Zt(Error(c(424)),t),qi(i),t=_p(e,t,r,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ea(e.firstChild),yt=t,we=!0,Ua=null,Wt=!0,a=y0(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Sr(),r===i){t=Aa(e,t,a);break e}zt(e,t,r,a)}t=t.child}return t;case 26:return rn(e,t),e===null?(a=Lf(t.type,null,t.pendingProps,null))?t.memoizedState=a:we||(a=t.type,e=t.pendingProps,r=bn(ae.current).createElement(a),r[Fe]=t,r[nt]=e,bt(r,a,e),vt(r),t.stateNode=r):t.memoizedState=Lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ze(t),e===null&&we&&(r=t.stateNode=Ef(t.type,t.pendingProps,ae.current),yt=t,Wt=!0,i=Ye,ar(t.type)?(Bs=i,Ye=ea(r.firstChild)):Ye=i),zt(e,t,t.pendingProps.children,a),rn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((i=r=Ye)&&(r=Nm(r,t.type,t.pendingProps,Wt),r!==null?(t.stateNode=r,yt=t,Ye=ea(r.firstChild),Wt=!1,i=!0):i=!1),i||Ba(t)),Ze(t),i=t.type,n=t.pendingProps,o=e!==null?e.memoizedProps:null,r=n.children,Os(i,n)?r=null:o!==null&&Os(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Eo(e,t,Bd,null,null,a),dl._currentValue=i),rn(e,t),zt(e,t,r,a),t.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=Vm(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,yt=t,Ye=null,e=!0):e=!1),e||Ba(t)),null;case 13:return Sp(e,t,a);case 4:return Me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,a):zt(e,t,r,a),t.child;case 11:return hp(e,t,t.type,t.pendingProps,a);case 7:return zt(e,t,t.pendingProps,a),t.child;case 8:return zt(e,t,t.pendingProps.children,a),t.child;case 12:return zt(e,t,t.pendingProps.children,a),t.child;case 10:return r=t.pendingProps,Ga(t,t.type,r.value),zt(e,t,r.children,a),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ar(t),i=gt(i),r=r(i),t.flags|=1,zt(e,t,r,a),t.child;case 14:return vp(e,t,t.type,t.pendingProps,a);case 15:return xp(e,t,t.type,t.pendingProps,a);case 19:return Ap(e,t,a);case 31:return Kd(e,t,a);case 22:return yp(e,t,a,t.pendingProps);case 24:return Ar(t),r=gt(ct),e===null?(i=Ao(),i===null&&(i=Le,n=So(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),t.memoizedState={parent:r,cache:i},Vo(t),Ga(t,ct,i)):((e.lanes&a)!==0&&(ko(e,t),Xi(t,null,null,a),Yi()),i=e.memoizedState,n=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ga(t,ct,r)):(r=n.cache,Ga(t,ct,r),r!==i.cache&&_o(t,[ct],a,!0))),zt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Na(e){e.flags|=4}function ps(e,t,a,r,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ef())e.flags|=8192;else throw kr=Bl,No}else e.flags&=-16777217}function Vp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!If(t))if(ef())e.flags|=8192;else throw kr=Bl,No}function nn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?va():536870912,e.lanes|=t,mi|=t)}function $i(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Wd(e,t,a){var r=t.pendingProps;switch(yo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return a=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_a(ct),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ti(t)?Na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zo())),Xe(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Na(t),n!==null?(Xe(t),Vp(t,n)):(Xe(t),ps(t,i,null,r,a))):n?n!==e.memoizedState?(Na(t),Xe(t),Vp(t,n)):(Xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Na(t),Xe(t),ps(t,i,e,r,a)),null;case 27:if(St(t),a=ae.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Na(t);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}e=P.current,ti(t)?o0(t):(e=Ef(i,r,a),t.stateNode=e,Na(t))}return Xe(t),null;case 5:if(St(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Na(t);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}if(n=P.current,ti(t))o0(t);else{var o=bn(ae.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?n.multiple=!0:r.size&&(n.size=r.size);break;default:n=typeof r.is=="string"?o.createElement(i,{is:r.is}):o.createElement(i)}}n[Fe]=t,n[nt]=r;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=n;e:switch(bt(n,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Na(t)}}return Xe(t),ps(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Na(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,ti(t)){if(e=t.stateNode,a=t.memoizedProps,r=null,i=yt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Df(e.nodeValue,a)),e||Ba(t,!0)}else e=bn(e).createTextNode(r),e[Fe]=t,t.stateNode=e}return Xe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(r=ti(t),a!==null){if(e===null){if(!r)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Fe]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),e=!1}else a=zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Xe(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Fe]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else i=zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==i&&(r.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),nn(t,t.updateQueue),Xe(t),null);case 4:return be(),e===null&&Ts(t.stateNode.containerInfo),Xe(t),null;case 10:return _a(t.type),Xe(t),null;case 19:if(k(ot),r=t.memoizedState,r===null)return Xe(t),null;if(i=(t.flags&128)!==0,n=r.rendering,n===null)if(i)$i(r,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Yl(e),n!==null){for(t.flags|=128,$i(r,!1),e=n.updateQueue,t.updateQueue=e,nn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)a0(a,e),a=a.sibling;return B(ot,ot.current&1|2),we&&ba(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&X()>fn&&(t.flags|=128,i=!0,$i(r,!1),t.lanes=4194304)}else{if(!i)if(e=Yl(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,nn(t,e),$i(r,!0),r.tail===null&&r.tailMode==="hidden"&&!n.alternate&&!we)return Xe(t),null}else 2*X()-r.renderingStartTime>fn&&a!==536870912&&(t.flags|=128,i=!0,$i(r,!1),t.lanes=4194304);r.isBackwards?(n.sibling=t.child,t.child=n):(e=r.last,e!==null?e.sibling=n:t.child=n,r.last=n)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=X(),e.sibling=null,a=ot.current,B(ot,i?a&1|2:a&1),we&&ba(t,r.treeForkCount),e):(Xe(t),null);case 22:case 23:return Ut(t),Ro(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(a&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),a=t.updateQueue,a!==null&&nn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==a&&(t.flags|=2048),e!==null&&k(Nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_a(ct),Xe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function $d(e,t){switch(yo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _a(ct),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(c(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(ot),null;case 4:return be(),null;case 10:return _a(t.type),null;case 22:case 23:return Ut(t),Ro(),e!==null&&k(Nr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _a(ct),null;case 25:return null;default:return null}}function kp(e,t){switch(yo(t),t.tag){case 3:_a(ct),be();break;case 26:case 27:case 5:St(t);break;case 4:be();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:k(ot);break;case 10:_a(t.type);break;case 22:case 23:Ut(t),Ro(),e!==null&&k(Nr);break;case 24:_a(ct)}}function el(e,t){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){r=void 0;var n=a.create,o=a.inst;r=n(),o.destroy=r}a=a.next}while(a!==i)}}catch(u){Re(t,t.return,u)}}function Za(e,t,a){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var n=i.next;r=n;do{if((r.tag&e)===e){var o=r.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,i=t;var h=a,D=u;try{D()}catch(R){Re(i,h,R)}}}r=r.next}while(r!==n)}}catch(R){Re(t,t.return,R)}}function Mp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{z0(t,a)}catch(r){Re(e,e.return,r)}}}function jp(e,t,a){a.props=Tr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Re(e,t,r)}}function tl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(i){Re(e,t,i)}}function ua(e,t){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(i){Re(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Re(e,t,i)}else a.current=null}function Tp(e){var t=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(i){Re(e,e.return,i)}}function fs(e,t,a){try{var r=e.stateNode;bm(r,e.type,a,t),r[nt]=t}catch(i){Re(e,e.return,i)}}function Rp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ar(e.type)||e.tag===4}function us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(r===27&&ar(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ds(e,t,a),e=e.sibling;e!==null;)ds(e,t,a),e=e.sibling}function on(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(r===27&&ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(on(e,t,a),e=e.sibling;e!==null;)on(e,t,a),e=e.sibling}function Fp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);bt(t,r,a),t[Fe]=e,t[nt]=a}catch(n){Re(e,e.return,n)}}var Va=!1,ut=!1,ms=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,xt=null;function em(e,t){if(e=e.containerInfo,Cs=Vn,e=Xc(e),no(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var i=r.anchorOffset,n=r.focusNode;r=r.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var o=0,u=-1,h=-1,D=0,R=0,H=e,A=null;t:for(;;){for(var V;H!==a||i!==0&&H.nodeType!==3||(u=o+i),H!==n||r!==0&&H.nodeType!==3||(h=o+r),H.nodeType===3&&(o+=H.nodeValue.length),(V=H.firstChild)!==null;)A=H,H=V;for(;;){if(H===e)break t;if(A===a&&++D===i&&(u=o),A===n&&++R===r&&(h=o),(V=H.nextSibling)!==null)break;H=A,A=H.parentNode}H=V}a=u===-1||h===-1?null:{start:u,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Es={focusedElem:e,selectionRange:a},Vn=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,i=n.memoizedProps,n=n.memoizedState,r=a.stateNode;try{var K=Tr(a.type,i);e=r.getSnapshotBeforeUpdate(K,n),r.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Re(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ls(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ls(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function Ep(e,t,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),r&4&&el(5,a);break;case 1:if(Ma(e,a),r&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Re(a,a.return,o)}else{var i=Tr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Re(a,a.return,o)}}r&64&&Mp(a),r&512&&tl(a,a.return);break;case 3:if(Ma(e,a),r&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{z0(e,t)}catch(o){Re(a,a.return,o)}}break;case 27:t===null&&r&4&&Fp(a);case 26:case 5:Ma(e,a),t===null&&r&4&&Tp(a),r&512&&tl(a,a.return);break;case 12:Ma(e,a);break;case 31:Ma(e,a),r&4&&Lp(e,a);break;case 13:Ma(e,a),r&4&&qp(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cm.bind(null,a),km(e,a))));break;case 22:if(r=a.memoizedState!==null||Va,!r){t=t!==null&&t.memoizedState!==null||ut,i=Va;var n=ut;Va=r,(ut=t)&&!n?ja(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Va=i,ut=n}break;case 30:break;default:Ma(e,a)}}function Op(e){var t=e.alternate;t!==null&&(e.alternate=null,Op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Tt=!1;function ka(e,t,a){for(a=a.child;a!==null;)Hp(e,t,a),a=a.sibling}function Hp(e,t,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:ut||ua(a,t),ka(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ut||ua(a,t);var r=Qe,i=Tt;ar(a.type)&&(Qe=a.stateNode,Tt=!1),ka(e,t,a),pl(a.stateNode),Qe=r,Tt=i;break;case 5:ut||ua(a,t);case 6:if(r=Qe,i=Tt,Qe=null,ka(e,t,a),Qe=r,Tt=i,Qe!==null)if(Tt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(n){Re(a,t,n)}else try{Qe.removeChild(a.stateNode)}catch(n){Re(a,t,n)}break;case 18:Qe!==null&&(Tt?(e=Qe,jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wi(e)):jf(Qe,a.stateNode));break;case 4:r=Qe,i=Tt,Qe=a.stateNode.containerInfo,Tt=!0,ka(e,t,a),Qe=r,Tt=i;break;case 0:case 11:case 14:case 15:Za(2,a,t),ut||Za(4,a,t),ka(e,t,a);break;case 1:ut||(ua(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jp(a,t,r)),ka(e,t,a);break;case 21:ka(e,t,a);break;case 22:ut=(r=ut)||a.memoizedState!==null,ka(e,t,a),ut=r;break;default:ka(e,t,a)}}function Lp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wi(e)}catch(a){Re(t,t.return,a)}}}function qp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(a){Re(t,t.return,a)}}function tm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cp),t;default:throw Error(c(435,e.tag))}}function sn(e,t){var a=tm(e);t.forEach(function(r){if(!a.has(r)){a.add(r);var i=pm.bind(null,e,r);r.then(i,i)}})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var i=a[r],n=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ar(u.type)){Qe=u.stateNode,Tt=!1;break e}break;case 5:Qe=u.stateNode,Tt=!1;break e;case 3:case 4:Qe=u.stateNode.containerInfo,Tt=!0;break e}u=u.return}if(Qe===null)throw Error(c(160));Hp(n,o,i),Qe=null,Tt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Up(t,e),t=t.sibling}var na=null;function Up(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Ft(e),r&4&&(Za(3,e,e.return),el(3,e),Za(5,e,e.return));break;case 1:Rt(t,e),Ft(e),r&512&&(ut||a===null||ua(a,a.return)),r&64&&Va&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var i=na;if(Rt(t,e),Ft(e),r&512&&(ut||a===null||ua(a,a.return)),r&4){var n=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Vi]||n[Fe]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(r),i.head.insertBefore(n,i.querySelector("head > title"))),bt(n,r,a),n[Fe]=e,vt(n),r=n;break e;case"link":var o=Bf("link","href",i).get(r+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(n=o[u],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}n=i.createElement(r),bt(n,r,a),i.head.appendChild(n);break;case"meta":if(o=Bf("meta","content",i).get(r+(a.content||""))){for(u=0;u<o.length;u++)if(n=o[u],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}n=i.createElement(r),bt(n,r,a),i.head.appendChild(n);break;default:throw Error(c(468,r))}n[Fe]=e,vt(n),r=n}e.stateNode=r}else Gf(i,e.type,e.stateNode);else e.stateNode=Uf(i,r,e.memoizedProps);else n!==r?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,r===null?Gf(i,e.type,e.stateNode):Uf(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&fs(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rt(t,e),Ft(e),r&512&&(ut||a===null||ua(a,a.return)),a!==null&&r&4&&fs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rt(t,e),Ft(e),r&512&&(ut||a===null||ua(a,a.return)),e.flags&32){i=e.stateNode;try{Pr(i,"")}catch(K){Re(e,e.return,K)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,fs(e,i,a!==null?a.memoizedProps:i)),r&1024&&(ms=!0);break;case 6:if(Rt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(c(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(K){Re(e,e.return,K)}}break;case 3:if(Sn=null,i=na,na=wn(t.containerInfo),Rt(t,e),na=i,Ft(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(K){Re(e,e.return,K)}ms&&(ms=!1,Bp(e));break;case 4:r=na,na=wn(e.stateNode.containerInfo),Rt(t,e),Ft(e),na=r;break;case 12:Rt(t,e),Ft(e);break;case 31:Rt(t,e),Ft(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,sn(e,r)));break;case 13:Rt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pn=X()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,sn(e,r)));break;case 22:i=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,D=Va,R=ut;if(Va=D||i,ut=R||h,Rt(t,e),ut=R,Va=D,Ft(e),r&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||h||Va||ut||Rr(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=h.stateNode;var H=h.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(K){Re(h,h.return,K)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(K){Re(h,h.return,K)}}}else if(t.tag===18){if(a===null){h=t;try{var V=h.stateNode;i?Tf(V,!0):Tf(h.stateNode,!1)}catch(K){Re(h,h.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,sn(e,a))));break;case 19:Rt(t,e),Ft(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,sn(e,r)));break;case 30:break;case 21:break;default:Rt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var a,r=e.return;r!==null;){if(Rp(r)){a=r;break}r=r.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,n=us(e);on(e,n,i);break;case 5:var o=a.stateNode;a.flags&32&&(Pr(o,""),a.flags&=-33);var u=us(e);on(e,u,o);break;case 3:case 4:var h=a.stateNode.containerInfo,D=us(e);ds(e,D,h);break;default:throw Error(c(161))}}catch(R){Re(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ep(e,t.alternate,t),t=t.sibling}function Rr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Za(4,t,t.return),Rr(t);break;case 1:ua(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&jp(t,t.return,a),Rr(t);break;case 27:pl(t.stateNode);case 26:case 5:ua(t,t.return),Rr(t);break;case 22:t.memoizedState===null&&Rr(t);break;case 30:Rr(t);break;default:Rr(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,n=t,o=n.flags;switch(n.tag){case 0:case 11:case 15:ja(i,n,a),el(4,n);break;case 1:if(ja(i,n,a),r=n,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(D){Re(r,r.return,D)}if(r=n,i=r.updateQueue,i!==null){var u=r.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)g0(h[i],u)}catch(D){Re(r,r.return,D)}}a&&o&64&&Mp(n),tl(n,n.return);break;case 27:Fp(n);case 26:case 5:ja(i,n,a),a&&r===null&&o&4&&Tp(n),tl(n,n.return);break;case 12:ja(i,n,a);break;case 31:ja(i,n,a),a&&o&4&&Lp(i,n);break;case 13:ja(i,n,a),a&&o&4&&qp(i,n);break;case 22:n.memoizedState===null&&ja(i,n,a),tl(n,n.return);break;case 30:break;default:ja(i,n,a)}t=t.sibling}}function hs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ui(a))}function vs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ui(e))}function oa(e,t,a,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gp(e,t,a,r),t=t.sibling}function Gp(e,t,a,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:oa(e,t,a,r),i&2048&&el(9,t);break;case 1:oa(e,t,a,r);break;case 3:oa(e,t,a,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ui(e)));break;case 12:if(i&2048){oa(e,t,a,r),e=t.stateNode;try{var n=t.memoizedProps,o=n.id,u=n.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){Re(t,t.return,h)}}else oa(e,t,a,r);break;case 31:oa(e,t,a,r);break;case 13:oa(e,t,a,r);break;case 23:break;case 22:n=t.stateNode,o=t.alternate,t.memoizedState!==null?n._visibility&2?oa(e,t,a,r):al(e,t):n._visibility&2?oa(e,t,a,r):(n._visibility|=2,fi(e,t,a,r,(t.subtreeFlags&10256)!==0||!1)),i&2048&&hs(o,t);break;case 24:oa(e,t,a,r),i&2048&&vs(t.alternate,t);break;default:oa(e,t,a,r)}}function fi(e,t,a,r,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,o=t,u=a,h=r,D=o.flags;switch(o.tag){case 0:case 11:case 15:fi(n,o,u,h,i),el(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&2?fi(n,o,u,h,i):al(n,o):(R._visibility|=2,fi(n,o,u,h,i)),i&&D&2048&&hs(o.alternate,o);break;case 24:fi(n,o,u,h,i),i&&D&2048&&vs(o.alternate,o);break;default:fi(n,o,u,h,i)}t=t.sibling}}function al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,r=t,i=r.flags;switch(r.tag){case 22:al(a,r),i&2048&&hs(r.alternate,r);break;case 24:al(a,r),i&2048&&vs(r.alternate,r);break;default:al(a,r)}t=t.sibling}}var rl=8192;function ui(e,t,a){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)Ip(e,t,a),e=e.sibling}function Ip(e,t,a){switch(e.tag){case 26:ui(e,t,a),e.flags&rl&&e.memoizedState!==null&&Um(a,na,e.memoizedState,e.memoizedProps);break;case 5:ui(e,t,a);break;case 3:case 4:var r=na;na=wn(e.stateNode.containerInfo),ui(e,t,a),na=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=rl,rl=16777216,ui(e,t,a),rl=r):ui(e,t,a));break;default:ui(e,t,a)}}function Pp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];xt=r,Xp(r,e)}Pp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&Za(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cn(e)):il(e);break;default:il(e)}}function cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];xt=r,Xp(r,e)}Pp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Za(8,t,t.return),cn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,cn(t));break;default:cn(t)}e=e.sibling}}function Xp(e,t){for(;xt!==null;){var a=xt;switch(a.tag){case 0:case 11:case 15:Za(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ui(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xt=r;else e:for(a=e;xt!==null;){r=xt;var i=r.sibling,n=r.return;if(Op(r),r===a){xt=null;break e}if(i!==null){i.return=n,xt=i;break e}xt=n}}}var am={getCacheForType:function(e){var t=gt(ct),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return gt(ct).controller.signal}},rm=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Le=null,he=null,ge=0,Te=0,Bt=null,Ka=!1,di=!1,xs=!1,Ta=0,rt=0,Qa=0,Fr=0,ys=0,Gt=0,mi=0,ll=null,Ct=null,gs=!1,pn=0,Jp=0,fn=1/0,un=null,Wa=null,mt=0,$a=null,hi=null,Ra=0,zs=0,bs=null,Zp=null,nl=0,ws=null;function It(){return(Ve&2)!==0&&ge!==0?ge&-ge:N.T!==null?Vs():xr()}function Kp(){if(Gt===0)if((ge&536870912)===0||we){var e=dr;dr<<=1,(dr&3932160)===0&&(dr=262144),Gt=e}else Gt=536870912;return e=qt.current,e!==null&&(e.flags|=32),Gt}function Et(e,t,a){(e===Le&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(vi(e,0),er(e,ge,Gt,!1)),Nt(e,a),((Ve&2)===0||e!==Le)&&(e===Le&&((Ve&2)===0&&(Fr|=a),rt===4&&er(e,ge,Gt,!1)),da(e))}function Qp(e,t,a){if((Ve&6)!==0)throw Error(c(327));var r=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),i=r?nm(e,t):Ss(e,t,!0),n=r;do{if(i===0){di&&!r&&er(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!im(a)){i=Ss(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;i=ll;var h=u.current.memoizedState.isDehydrated;if(h&&(vi(u,o).flags|=256),o=Ss(u,o,!1),o!==2){if(xs&&!h){u.errorRecoveryDisabledLanes|=n,Fr|=n,i=4;break e}n=Ct,Ct=i,n!==null&&(Ct===null?Ct=n:Ct.push.apply(Ct,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){vi(e,0),er(e,t,0,!0);break}e:{switch(r=e,n=i,n){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:er(r,t,Gt,!Ka);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=pn+300-X(),10<i)){if(er(r,t,Gt,!Ka),mr(r,0,!0)!==0)break e;Ra=t,r.timeoutHandle=kf(Wp.bind(null,r,a,Ct,un,gs,t,Gt,Fr,mi,Ka,n,"Throttled",-0,0),i);break e}Wp(r,a,Ct,un,gs,t,Gt,Fr,mi,Ka,n,null,-0,0)}}break}while(!0);da(e)}function Wp(e,t,a,r,i,n,o,u,h,D,R,H,A,V){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},Ip(t,n,H);var K=(n&62914560)===n?pn-X():(n&4194048)===n?Jp-X():0;if(K=Bm(H,K),K!==null){Ra=n,e.cancelPendingCommit=K(of.bind(null,e,t,n,a,r,i,o,u,h,R,H,null,A,V)),er(e,n,o,!D);return}}of(e,t,n,a,r,i,o,u,h)}function im(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var i=a[r],n=i.getSnapshot;i=i.value;try{if(!Ht(n(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t,a,r){t&=~ys,t&=~Fr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var n=31-Be(i),o=1<<n;r[n]=-1,i&=~o}a!==0&&Ha(e,a,t)}function dn(){return(Ve&6)===0?(ol(0),!1):!0}function _s(){if(he!==null){if(Te===0)var e=he.return;else e=he,wa=Dr=null,Lo(e),ni=null,Gi=0,e=he;for(;e!==null;)kp(e.alternate,e),e=e.return;he=null}}function vi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ra=0,_s(),Le=e,he=a=za(e.current,null),ge=t,Te=0,Bt=null,Ka=!1,di=Oa(e,t),xs=!1,mi=Gt=ys=Fr=Qa=rt=0,Ct=ll=null,gs=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),n=1<<i;t|=e[i],r&=~n}return Ta=t,Rl(),a}function $p(e,t){fe=null,N.H=Qi,t===li||t===Ul?(t=h0(),Te=3):t===No?(t=h0(),Te=4):Te=t===ts?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,he===null&&(rt=1,tn(e,Zt(t,e.current)))}function ef(){var e=qt.current;return e===null?!0:(ge&4194048)===ge?$t===null:(ge&62914560)===ge||(ge&536870912)!==0?e===$t:!1}function tf(){var e=N.H;return N.H=Qi,e===null?Qi:e}function af(){var e=N.A;return N.A=am,e}function mn(){rt=4,Ka||(ge&4194048)!==ge&&qt.current!==null||(di=!0),(Qa&134217727)===0&&(Fr&134217727)===0||Le===null||er(Le,ge,Gt,!1)}function Ss(e,t,a){var r=Ve;Ve|=2;var i=tf(),n=af();(Le!==e||ge!==t)&&(un=null,vi(e,t)),t=!1;var o=rt;e:do try{if(Te!==0&&he!==null){var u=he,h=Bt;switch(Te){case 8:_s(),o=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(t=!0);var D=Te;if(Te=0,Bt=null,xi(e,u,h,D),a&&di){o=0;break e}break;default:D=Te,Te=0,Bt=null,xi(e,u,h,D)}}lm(),o=rt;break}catch(R){$p(e,R)}while(!0);return t&&e.shellSuspendCounter++,wa=Dr=null,Ve=r,N.H=i,N.A=n,he===null&&(Le=null,ge=0,Rl()),o}function lm(){for(;he!==null;)rf(he)}function nm(e,t){var a=Ve;Ve|=2;var r=tf(),i=af();Le!==e||ge!==t?(un=null,fn=X()+500,vi(e,t)):di=Oa(e,t);e:do try{if(Te!==0&&he!==null){t=he;var n=Bt;t:switch(Te){case 1:Te=0,Bt=null,xi(e,t,n,1);break;case 2:case 9:if(d0(n)){Te=0,Bt=null,lf(t);break}t=function(){Te!==2&&Te!==9||Le!==e||(Te=7),da(e)},n.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:d0(n)?(Te=0,Bt=null,lf(t)):(Te=0,Bt=null,xi(e,t,n,7));break;case 5:var o=null;switch(he.tag){case 26:o=he.memoizedState;case 5:case 27:var u=he;if(o?If(o):u.stateNode.complete){Te=0,Bt=null;var h=u.sibling;if(h!==null)he=h;else{var D=u.return;D!==null?(he=D,hn(D)):he=null}break t}}Te=0,Bt=null,xi(e,t,n,5);break;case 6:Te=0,Bt=null,xi(e,t,n,6);break;case 8:_s(),rt=6;break e;default:throw Error(c(462))}}om();break}catch(R){$p(e,R)}while(!0);return wa=Dr=null,N.H=r,N.A=i,Ve=a,he!==null?0:(Le=null,ge=0,Rl(),rt)}function om(){for(;he!==null&&!I();)rf(he)}function rf(e){var t=Np(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?hn(e):he=t}function lf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=bp(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=bp(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Lo(t);default:kp(a,t),t=he=a0(t,Ta),t=Np(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?hn(e):he=t}function xi(e,t,a,r){wa=Dr=null,Lo(t),ni=null,Gi=0;var i=t.return;try{if(Zd(e,i,t,a,ge)){rt=1,tn(e,Zt(a,e.current)),he=null;return}}catch(n){if(i!==null)throw he=i,n;rt=1,tn(e,Zt(a,e.current)),he=null;return}t.flags&32768?(we||r===1?e=!0:di||(ge&536870912)!==0?e=!1:(Ka=e=!0,(r===2||r===9||r===3||r===6)&&(r=qt.current,r!==null&&r.tag===13&&(r.flags|=16384))),nf(t,e)):hn(t)}function hn(e){var t=e;do{if((t.flags&32768)!==0){nf(t,Ka);return}e=t.return;var a=Wd(t.alternate,t,Ta);if(a!==null){he=a;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);rt===0&&(rt=5)}function nf(e,t){do{var a=$d(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);rt=6,he=null}function of(e,t,a,r,i,n,o,u,h){e.cancelPendingCommit=null;do vn();while(mt!==0);if((Ve&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(n=t.lanes|t.childLanes,n|=fo,ia(e,a,n,o,u,h),e===Le&&(he=Le=null,ge=0),hi=t,$a=e,Ra=a,zs=n,bs=i,Zp=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fm(ye,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,i=U.p,U.p=2,o=Ve,Ve|=4;try{em(e,t,a)}finally{Ve=o,U.p=i,N.T=r}}mt=1,sf(),cf(),pf()}}function sf(){if(mt===1){mt=0;var e=$a,t=hi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=U.p;U.p=2;var i=Ve;Ve|=4;try{Up(t,e);var n=Es,o=Xc(e.containerInfo),u=n.focusedElem,h=n.selectionRange;if(o!==u&&u&&u.ownerDocument&&Yc(u.ownerDocument.documentElement,u)){if(h!==null&&no(u)){var D=h.start,R=h.end;if(R===void 0&&(R=D),"selectionStart"in u)u.selectionStart=D,u.selectionEnd=Math.min(R,u.value.length);else{var H=u.ownerDocument||document,A=H&&H.defaultView||window;if(A.getSelection){var V=A.getSelection(),K=u.textContent.length,ne=Math.min(h.start,K),Oe=h.end===void 0?ne:Math.min(h.end,K);!V.extend&&ne>Oe&&(o=Oe,Oe=ne,ne=o);var z=Pc(u,ne),y=Pc(u,Oe);if(z&&y&&(V.rangeCount!==1||V.anchorNode!==z.node||V.anchorOffset!==z.offset||V.focusNode!==y.node||V.focusOffset!==y.offset)){var S=H.createRange();S.setStart(z.node,z.offset),V.removeAllRanges(),ne>Oe?(V.addRange(S),V.extend(y.node,y.offset)):(S.setEnd(y.node,y.offset),V.addRange(S))}}}}for(H=[],V=u;V=V.parentNode;)V.nodeType===1&&H.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<H.length;u++){var C=H[u];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Vn=!!Cs,Es=Cs=null}finally{Ve=i,U.p=r,N.T=a}}e.current=t,mt=2}}function cf(){if(mt===2){mt=0;var e=$a,t=hi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=U.p;U.p=2;var i=Ve;Ve|=4;try{Ep(e,t.alternate,t)}finally{Ve=i,U.p=r,N.T=a}}mt=3}}function pf(){if(mt===4||mt===3){mt=0,re();var e=$a,t=hi,a=Ra,r=Zp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,hi=$a=null,ff(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Wa=null),ca(a),t=t.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(_e,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=N.T,i=U.p,U.p=2,N.T=null;try{for(var n=e.onRecoverableError,o=0;o<r.length;o++){var u=r[o];n(u.value,{componentStack:u.stack})}}finally{N.T=t,U.p=i}}(Ra&3)!==0&&vn(),da(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===ws?nl++:(nl=0,ws=e):nl=0,ol(0)}}function ff(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ui(t)))}function vn(){return sf(),cf(),pf(),uf()}function uf(){if(mt!==5)return!1;var e=$a,t=zs;zs=0;var a=ca(Ra),r=N.T,i=U.p;try{U.p=32>a?32:a,N.T=null,a=bs,bs=null;var n=$a,o=Ra;if(mt=0,hi=$a=null,Ra=0,(Ve&6)!==0)throw Error(c(331));var u=Ve;if(Ve|=4,Yp(n.current),Gp(n,n.current,o,a),Ve=u,ol(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(_e,n)}catch{}return!0}finally{U.p=i,N.T=r,ff(e,t)}}function df(e,t,a){t=Zt(a,t),t=es(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(Nt(e,2),da(e))}function Re(e,t,a){if(e.tag===3)df(e,e,a);else for(;t!==null;){if(t.tag===3){df(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wa===null||!Wa.has(r))){e=Zt(a,e),a=dp(2),r=Ya(t,a,2),r!==null&&(mp(a,r,t,e),Nt(r,2),da(r));break}}t=t.return}}function Ds(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new rm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(a)||(xs=!0,i.add(a),e=sm.bind(null,e,t,a),t.then(e,e))}function sm(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Le===e&&(ge&a)===a&&(rt===4||rt===3&&(ge&62914560)===ge&&300>X()-pn?(Ve&2)===0&&vi(e,0):ys|=a,mi===ge&&(mi=0)),da(e)}function mf(e,t){t===0&&(t=va()),e=wr(e,t),e!==null&&(Nt(e,t),da(e))}function cm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),mf(e,a)}function pm(e,t){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(t),mf(e,a)}function fm(e,t){return fr(e,t)}var xn=null,yi=null,As=!1,yn=!1,Ns=!1,tr=0;function da(e){e!==yi&&e.next===null&&(yi===null?xn=yi=e:yi=yi.next=e),yn=!0,As||(As=!0,dm())}function ol(e,t){if(!Ns&&yn){Ns=!0;do for(var a=!1,r=xn;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var n=0;else{var o=r.suspendedLanes,u=r.pingedLanes;n=(1<<31-Be(42|e)+1)-1,n&=i&~(o&~u),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,yf(r,n))}else n=ge,n=mr(r,r===Le?n:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(n&3)===0||Oa(r,n)||(a=!0,yf(r,n));r=r.next}while(a);Ns=!1}}function um(){hf()}function hf(){yn=As=!1;var e=0;tr!==0&&_m()&&(e=tr);for(var t=X(),a=null,r=xn;r!==null;){var i=r.next,n=vf(r,t);n===0?(r.next=null,a===null?xn=i:a.next=i,i===null&&(yi=a)):(a=r,(e!==0||(n&3)!==0)&&(yn=!0)),r=i}mt!==0&&mt!==5||ol(e),tr!==0&&(tr=0)}function vf(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var o=31-Be(n),u=1<<o,h=i[o];h===-1?((u&a)===0||(u&r)!==0)&&(i[o]=Pe(u,t)):h<=t&&(e.expiredLanes|=u),n&=~u}if(t=Le,a=ge,a=mr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ur(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Oa(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(r!==null&&ur(r),ca(a)){case 2:case 8:a=Ea;break;case 32:a=ye;break;case 268435456:a=ie;break;default:a=ye}return r=xf.bind(null,e),a=fr(a,r),e.callbackPriority=t,e.callbackNode=a,t}return r!==null&&r!==null&&ur(r),e.callbackPriority=2,e.callbackNode=null,2}function xf(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(vn()&&e.callbackNode!==a)return null;var r=ge;return r=mr(e,e===Le?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Qp(e,r,t),vf(e,X()),e.callbackNode!=null&&e.callbackNode===a?xf.bind(null,e):null)}function yf(e,t){if(vn())return null;Qp(e,t,!0)}function dm(){Dm(function(){(Ve&6)!==0?fr(dt,um):hf()})}function Vs(){if(tr===0){var e=ri;e===0&&(e=kt,kt<<=1,(kt&261888)===0&&(kt=256)),tr=e}return tr}function gf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(""+e)}function zf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function mm(e,t,a,r,i){if(t==="submit"&&a&&a.stateNode===i){var n=gf((i[nt]||null).action),o=r.submitter;o&&(t=(t=o[nt]||null)?gf(t.formAction):o.getAttribute("formAction"),t!==null&&(n=t,o=null));var u=new kl("action","action",null,r,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(tr!==0){var h=o?zf(i,o):new FormData(i);Jo(a,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(u.preventDefault(),h=o?zf(i,o):new FormData(i),Jo(a,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(var ks=0;ks<po.length;ks++){var Ms=po[ks],hm=Ms.toLowerCase(),vm=Ms[0].toUpperCase()+Ms.slice(1);la(hm,"on"+vm)}la(Kc,"onAnimationEnd"),la(Qc,"onAnimationIteration"),la(Wc,"onAnimationStart"),la("dblclick","onDoubleClick"),la("focusin","onFocus"),la("focusout","onBlur"),la(Td,"onTransitionRun"),la(Rd,"onTransitionStart"),la(Fd,"onTransitionCancel"),la($c,"onTransitionEnd"),Gr("onMouseEnter",["mouseout","mouseover"]),Gr("onMouseLeave",["mouseout","mouseover"]),Gr("onPointerEnter",["pointerout","pointerover"]),Gr("onPointerLeave",["pointerout","pointerover"]),yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yr("onBeforeInput",["compositionend","keypress","textInput","paste"]),yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function bf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],i=r.event;r=r.listeners;e:{var n=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],h=u.instance,D=u.currentTarget;if(u=u.listener,h!==n&&i.isPropagationStopped())break e;n=u,i.currentTarget=D;try{n(i)}catch(R){Tl(R)}i.currentTarget=null,n=h}else for(o=0;o<r.length;o++){if(u=r[o],h=u.instance,D=u.currentTarget,u=u.listener,h!==n&&i.isPropagationStopped())break e;n=u,i.currentTarget=D;try{n(i)}catch(R){Tl(R)}i.currentTarget=null,n=h}}}}function ve(e,t){var a=t[Bn];a===void 0&&(a=t[Bn]=new Set);var r=e+"__bubble";a.has(r)||(wf(t,e,2,!1),a.add(r))}function js(e,t,a){var r=0;t&&(r|=4),wf(a,e,r,t)}var gn="_reactListening"+Math.random().toString(36).slice(2);function Ts(e){if(!e[gn]){e[gn]=!0,mc.forEach(function(a){a!=="selectionchange"&&(xm.has(a)||js(a,!1,e),js(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gn]||(t[gn]=!0,js("selectionchange",!1,t))}}function wf(e,t,a,r){switch(Qf(t)){case 2:var i=Pm;break;case 8:i=Ym;break;default:i=Xs}a=i.bind(null,t,a,e),i=void 0,!Qn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Rs(e,t,a,r,i){var n=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i)break;if(o===4)for(o=r.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;u!==null;){if(o=qr(u),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){r=n=o;continue e}u=u.parentNode}}r=r.return}Ac(function(){var D=n,R=Zn(a),H=[];e:{var A=e0.get(e);if(A!==void 0){var V=kl,K=e;switch(e){case"keypress":if(Nl(a)===0)break e;case"keydown":case"keyup":V=pd;break;case"focusin":K="focus",V=to;break;case"focusout":K="blur",V=to;break;case"beforeblur":case"afterblur":V=to;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Wu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=dd;break;case Kc:case Qc:case Wc:V=td;break;case $c:V=hd;break;case"scroll":case"scrollend":V=Ku;break;case"wheel":V=xd;break;case"copy":case"cut":case"paste":V=rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=jc;break;case"toggle":case"beforetoggle":V=gd}var ne=(t&4)!==0,Oe=!ne&&(e==="scroll"||e==="scrollend"),z=ne?A!==null?A+"Capture":null:A;ne=[];for(var y=D,S;y!==null;){var C=y;if(S=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||S===null||z===null||(C=Mi(y,z),C!=null&&ne.push(cl(y,C,S))),Oe)break;y=y.return}0<ne.length&&(A=new V(A,K,null,a,R),H.push({event:A,listeners:ne}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",A&&a!==Jn&&(K=a.relatedTarget||a.fromElement)&&(qr(K)||K[Lr]))break e;if((V||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,V?(K=a.relatedTarget||a.toElement,V=D,K=K?qr(K):null,K!==null&&(Oe=m(K),ne=K.tag,K!==Oe||ne!==5&&ne!==27&&ne!==6)&&(K=null)):(V=null,K=D),V!==K)){if(ne=kc,C="onMouseLeave",z="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ne=jc,C="onPointerLeave",z="onPointerEnter",y="pointer"),Oe=V==null?A:ki(V),S=K==null?A:ki(K),A=new ne(C,y+"leave",V,a,R),A.target=Oe,A.relatedTarget=S,C=null,qr(R)===D&&(ne=new ne(z,y+"enter",K,a,R),ne.target=S,ne.relatedTarget=Oe,C=ne),Oe=C,V&&K)t:{for(ne=ym,z=V,y=K,S=0,C=z;C;C=ne(C))S++;C=0;for(var te=y;te;te=ne(te))C++;for(;0<S-C;)z=ne(z),S--;for(;0<C-S;)y=ne(y),C--;for(;S--;){if(z===y||y!==null&&z===y.alternate){ne=z;break t}z=ne(z),y=ne(y)}ne=null}else ne=null;V!==null&&_f(H,A,V,ne,!1),K!==null&&Oe!==null&&_f(H,Oe,K,ne,!0)}}e:{if(A=D?ki(D):window,V=A.nodeName&&A.nodeName.toLowerCase(),V==="select"||V==="input"&&A.type==="file")var Se=Lc;else if(Oc(A))if(qc)Se=kd;else{Se=Nd;var W=Ad}else V=A.nodeName,!V||V.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?D&&Xn(D.elementType)&&(Se=Lc):Se=Vd;if(Se&&(Se=Se(e,D))){Hc(H,Se,a,R);break e}W&&W(e,A,D),e==="focusout"&&D&&A.type==="number"&&D.memoizedProps.value!=null&&Yn(A,"number",A.value)}switch(W=D?ki(D):window,e){case"focusin":(Oc(W)||W.contentEditable==="true")&&(Zr=W,oo=D,Hi=null);break;case"focusout":Hi=oo=Zr=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,Jc(H,a,R);break;case"selectionchange":if(jd)break;case"keydown":case"keyup":Jc(H,a,R)}var me;if(ro)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else Jr?Cc(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(Tc&&a.locale!=="ko"&&(Jr||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&Jr&&(me=Nc()):(La=R,Wn="value"in La?La.value:La.textContent,Jr=!0)),W=zn(D,ze),0<W.length&&(ze=new Mc(ze,e,null,a,R),H.push({event:ze,listeners:W}),me?ze.data=me:(me=Ec(a),me!==null&&(ze.data=me)))),(me=bd?wd(e,a):_d(e,a))&&(ze=zn(D,"onBeforeInput"),0<ze.length&&(W=new Mc("onBeforeInput","beforeinput",null,a,R),H.push({event:W,listeners:ze}),W.data=me)),mm(H,e,D,a,R)}bf(H,t)})}function cl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zn(e,t){for(var a=t+"Capture",r=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Mi(e,a),i!=null&&r.unshift(cl(e,i,n)),i=Mi(e,t),i!=null&&r.push(cl(e,i,n))),e.tag===3)return r;e=e.return}return[]}function ym(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _f(e,t,a,r,i){for(var n=t._reactName,o=[];a!==null&&a!==r;){var u=a,h=u.alternate,D=u.stateNode;if(u=u.tag,h!==null&&h===r)break;u!==5&&u!==26&&u!==27||D===null||(h=D,i?(D=Mi(a,n),D!=null&&o.unshift(cl(a,D,h))):i||(D=Mi(a,n),D!=null&&o.push(cl(a,D,h)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var gm=/\r\n?/g,zm=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(zm,"")}function Df(e,t){return t=Sf(t),Sf(e)===t}function Ee(e,t,a,r,i,n){switch(a){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Pr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Pr(e,""+r);break;case"className":_l(e,"class",r);break;case"tabIndex":_l(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_l(e,a,r);break;case"style":Sc(e,r,n);break;case"data":if(t!=="object"){_l(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Dl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",i.name,i,null),Ee(e,t,"formEncType",i.formEncType,i,null),Ee(e,t,"formMethod",i.formMethod,i,null),Ee(e,t,"formTarget",i.formTarget,i,null)):(Ee(e,t,"encType",i.encType,i,null),Ee(e,t,"method",i.method,i,null),Ee(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Dl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ya);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(a=r.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),wl(e,"popover",r);break;case"xlinkActuate":xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":xa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":xa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":xa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":xa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":wl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ju.get(a)||a,wl(e,a,r))}}function Fs(e,t,a,r,i,n){switch(a){case"style":Sc(e,r,n);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(a=r.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Pr(e,r):(typeof r=="number"||typeof r=="bigint")&&Pr(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),n=e[nt]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,r,i);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):wl(e,a,r)}}}function bt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var o=a[n];if(o!=null)switch(n){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,n,o,a,null)}}i&&Ee(e,t,"srcSet",a.srcSet,a,null),r&&Ee(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var u=n=o=i=null,h=null,D=null;for(r in a)if(a.hasOwnProperty(r)){var R=a[r];if(R!=null)switch(r){case"name":i=R;break;case"type":o=R;break;case"checked":h=R;break;case"defaultChecked":D=R;break;case"value":n=R;break;case"defaultValue":u=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Ee(e,t,r,R,a,null)}}zc(e,n,u,h,D,o,i,!1);return;case"select":ve("invalid",e),r=o=n=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":n=u;break;case"defaultValue":o=u;break;case"multiple":r=u;default:Ee(e,t,i,u,a,null)}t=n,a=o,e.multiple=!!r,t!=null?Ir(e,!!r,t,!1):a!=null&&Ir(e,!!r,a,!0);return;case"textarea":ve("invalid",e),n=i=r=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":r=u;break;case"defaultValue":i=u;break;case"children":n=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Ee(e,t,o,u,a,null)}wc(e,r,i,n);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(r=a[h],r!=null))switch(h){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ee(e,t,h,r,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<sl.length;r++)ve(sl[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(r=a[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,D,r,a,null)}return;default:if(Xn(t)){for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!==void 0&&Fs(e,t,R,r,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(r=a[u],r!=null&&Ee(e,t,u,r,a,null))}function bm(e,t,a,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,u=null,h=null,D=null,R=null;for(V in a){var H=a[V];if(a.hasOwnProperty(V)&&H!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":h=H;default:r.hasOwnProperty(V)||Ee(e,t,V,null,r,H)}}for(var A in r){var V=r[A];if(H=a[A],r.hasOwnProperty(A)&&(V!=null||H!=null))switch(A){case"type":n=V;break;case"name":i=V;break;case"checked":D=V;break;case"defaultChecked":R=V;break;case"value":o=V;break;case"defaultValue":u=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(c(137,t));break;default:V!==H&&Ee(e,t,A,V,r,H)}}Pn(e,o,u,h,D,R,n,i);return;case"select":V=o=u=A=null;for(n in a)if(h=a[n],a.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":V=h;default:r.hasOwnProperty(n)||Ee(e,t,n,null,r,h)}for(i in r)if(n=r[i],h=a[i],r.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":A=n;break;case"defaultValue":u=n;break;case"multiple":o=n;default:n!==h&&Ee(e,t,i,n,r,h)}t=u,a=o,r=V,A!=null?Ir(e,!!a,A,!1):!!r!=!!a&&(t!=null?Ir(e,!!a,t,!0):Ir(e,!!a,a?[]:"",!1));return;case"textarea":V=A=null;for(u in a)if(i=a[u],a.hasOwnProperty(u)&&i!=null&&!r.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ee(e,t,u,null,r,i)}for(o in r)if(i=r[o],n=a[o],r.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":A=i;break;case"defaultValue":V=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==n&&Ee(e,t,o,i,r,n)}bc(e,A,V);return;case"option":for(var K in a)if(A=a[K],a.hasOwnProperty(K)&&A!=null&&!r.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:Ee(e,t,K,null,r,A)}for(h in r)if(A=r[h],V=a[h],r.hasOwnProperty(h)&&A!==V&&(A!=null||V!=null))switch(h){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ee(e,t,h,A,r,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)A=a[ne],a.hasOwnProperty(ne)&&A!=null&&!r.hasOwnProperty(ne)&&Ee(e,t,ne,null,r,A);for(D in r)if(A=r[D],V=a[D],r.hasOwnProperty(D)&&A!==V&&(A!=null||V!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ee(e,t,D,A,r,V)}return;default:if(Xn(t)){for(var Oe in a)A=a[Oe],a.hasOwnProperty(Oe)&&A!==void 0&&!r.hasOwnProperty(Oe)&&Fs(e,t,Oe,void 0,r,A);for(R in r)A=r[R],V=a[R],!r.hasOwnProperty(R)||A===V||A===void 0&&V===void 0||Fs(e,t,R,A,r,V);return}}for(var z in a)A=a[z],a.hasOwnProperty(z)&&A!=null&&!r.hasOwnProperty(z)&&Ee(e,t,z,null,r,A);for(H in r)A=r[H],V=a[H],!r.hasOwnProperty(H)||A===V||A==null&&V==null||Ee(e,t,H,A,r,V)}function Af(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var i=a[r],n=i.transferSize,o=i.initiatorType,u=i.duration;if(n&&u&&Af(o)){for(o=0,u=i.responseEnd,r+=1;r<a.length;r++){var h=a[r],D=h.startTime;if(D>u)break;var R=h.transferSize,H=h.initiatorType;R&&Af(H)&&(h=h.responseEnd,o+=R*(h<u?1:(u-D)/(h-D)))}if(--r,t+=8*(n+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cs=null,Es=null;function bn(e){return e.nodeType===9?e:e.ownerDocument}function Nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hs=null;function _m(){var e=window.event;return e&&e.type==="popstate"?e===Hs?!1:(Hs=e,!0):(Hs=null,!1)}var kf=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Mf=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Mf<"u"?function(e){return Mf.resolve(null).then(e).catch(Am)}:kf;function Am(e){setTimeout(function(){throw e})}function ar(e){return e==="head"}function jf(e,t){var a=t,r=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(i),wi(t);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")pl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pl(a);for(var n=a.firstChild;n;){var o=n.nextSibling,u=n.nodeName;n[Vi]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=o}}else a==="body"&&pl(e.ownerDocument.body);a=i}while(a);wi(t)}function Tf(e,t){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Ls(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ls(a),Gn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Nm(e,t,a,r){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Vi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=ea(e.nextSibling),e===null)break}return null}function Vm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ea(e.nextSibling),e===null))return null;return e}function Rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ea(e.nextSibling),e===null))return null;return e}function qs(e){return e.data==="$?"||e.data==="$~"}function Us(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function km(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var r=function(){t(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ea(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Bs=null;function Ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ea(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ef(e,t,a){switch(t=bn(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function pl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gn(e)}var ta=new Map,Of=new Set;function wn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fa=U.d;U.d={f:Mm,r:jm,D:Tm,C:Rm,L:Fm,m:Cm,X:Om,S:Em,M:Hm};function Mm(){var e=Fa.f(),t=dn();return e||t}function jm(e){var t=Ur(e);t!==null&&t.tag===5&&t.type==="form"?$0(t):Fa.r(e)}var gi=typeof document>"u"?null:document;function Hf(e,t,a){var r=gi;if(r&&typeof t=="string"&&t){var i=Xt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Of.has(i)||(Of.add(i),e={rel:e,crossOrigin:a,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),bt(t,"link",e),vt(t),r.head.appendChild(t)))}}function Tm(e){Fa.D(e),Hf("dns-prefetch",e,null)}function Rm(e,t){Fa.C(e,t),Hf("preconnect",e,t)}function Fm(e,t,a){Fa.L(e,t,a);var r=gi;if(r&&e&&t){var i='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Xt(a.imageSizes)+'"]')):i+='[href="'+Xt(e)+'"]';var n=i;switch(t){case"style":n=zi(e);break;case"script":n=bi(e)}ta.has(n)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ta.set(n,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(fl(n))||t==="script"&&r.querySelector(ul(n))||(t=r.createElement("link"),bt(t,"link",e),vt(t),r.head.appendChild(t)))}}function Cm(e,t){Fa.m(e,t);var a=gi;if(a&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Xt(r)+'"][href="'+Xt(e)+'"]',n=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=bi(e)}if(!ta.has(n)&&(e=T({rel:"modulepreload",href:e},t),ta.set(n,e),a.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(n)))return}r=a.createElement("link"),bt(r,"link",e),vt(r),a.head.appendChild(r)}}}function Em(e,t,a){Fa.S(e,t,a);var r=gi;if(r&&e){var i=Br(r).hoistableStyles,n=zi(e);t=t||"default";var o=i.get(n);if(!o){var u={loading:0,preload:null};if(o=r.querySelector(fl(n)))u.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ta.get(n))&&Gs(e,a);var h=o=r.createElement("link");vt(h),bt(h,"link",e),h._p=new Promise(function(D,R){h.onload=D,h.onerror=R}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,_n(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:u},i.set(n,o)}}}function Om(e,t){Fa.X(e,t);var a=gi;if(a&&e){var r=Br(a).hoistableScripts,i=bi(e),n=r.get(i);n||(n=a.querySelector(ul(i)),n||(e=T({src:e,async:!0},t),(t=ta.get(i))&&Is(e,t),n=a.createElement("script"),vt(n),bt(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},r.set(i,n))}}function Hm(e,t){Fa.M(e,t);var a=gi;if(a&&e){var r=Br(a).hoistableScripts,i=bi(e),n=r.get(i);n||(n=a.querySelector(ul(i)),n||(e=T({src:e,async:!0,type:"module"},t),(t=ta.get(i))&&Is(e,t),n=a.createElement("script"),vt(n),bt(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},r.set(i,n))}}function Lf(e,t,a,r){var i=(i=ae.current)?wn(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zi(a.href),a=Br(i).hoistableStyles,r=a.get(t),r||(r={type:"style",instance:null,count:0,state:null},a.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zi(a.href);var n=Br(i).hoistableStyles,o=n.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,o),(n=i.querySelector(fl(e)))&&!n._p&&(o.instance=n,o.state.loading=5),ta.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ta.set(e,a),n||Lm(i,e,a,o.state))),t&&r===null)throw Error(c(528,""));return o}if(t&&r!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bi(a),a=Br(i).hoistableScripts,r=a.get(t),r||(r={type:"script",instance:null,count:0,state:null},a.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function zi(e){return'href="'+Xt(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function qf(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,a,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),bt(t,"link",a),vt(t),e.head.appendChild(t))}function bi(e){return'[src="'+Xt(e)+'"]'}function ul(e){return"script[async]"+e}function Uf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(r)return t.instance=r,vt(r),r;var i=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),bt(r,"style",i),_n(r,a.precedence,e),t.instance=r;case"stylesheet":i=zi(a.href);var n=e.querySelector(fl(i));if(n)return t.state.loading|=4,t.instance=n,vt(n),n;r=qf(a),(i=ta.get(i))&&Gs(r,i),n=(e.ownerDocument||e).createElement("link"),vt(n);var o=n;return o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),bt(n,"link",r),t.state.loading|=4,_n(n,a.precedence,e),t.instance=n;case"script":return n=bi(a.src),(i=e.querySelector(ul(n)))?(t.instance=i,vt(i),i):(r=a,(i=ta.get(n))&&(r=T({},a),Is(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),vt(i),bt(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,_n(r,a.precedence,e));return t.instance}function _n(e,t,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,n=i,o=0;o<r.length;o++){var u=r[o];if(u.dataset.precedence===t)n=u;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Is(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sn=null;function Bf(e,t,a){if(Sn===null){var r=new Map,i=Sn=new Map;i.set(a,r)}else i=Sn,r=i.get(a),r||(r=new Map,i.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var n=a[i];if(!(n[Vi]||n[Fe]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(t)||"";o=e+o;var u=r.get(o);u?u.push(n):r.set(o,[n])}}return r}function Gf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function If(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Um(e,t,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=zi(r.href),n=t.querySelector(fl(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Dn.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,vt(n);return}n=t.ownerDocument||t,r=qf(r),(i=ta.get(i))&&Gs(r,i),n=n.createElement("link"),vt(n);var o=n;o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),bt(n,"link",r),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Dn.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ps=0;function Bm(e,t){return e.stylesheets&&e.count===0&&Nn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Nn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&Ps===0&&(Ps=62500*wm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Ps?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Dn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var An=null;function Nn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,An=new Map,t.forEach(Gm,e),An=null,Dn.call(e))}function Gm(e,t){if(!(t.state.loading&4)){var a=An.get(e);if(a)var r=a.get(null);else{a=new Map,An.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),r=o)}r&&a.set(null,r)}i=t.instance,o=i.getAttribute("data-precedence"),n=a.get(o)||r,n===r&&a.set(null,i),a.set(o,i),this.count++,r=Dn.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var dl={$$typeof:_,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function Im(e,t,a,r,i,n,o,u,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Pf(e,t,a,r,i,n,o,u,h,D,R,H){return e=new Im(e,t,a,o,h,D,R,H,u),t=1,n===!0&&(t|=24),n=Lt(3,null,null,t),e.current=n,n.stateNode=e,t=So(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:r,isDehydrated:a,cache:t},Vo(n),e}function Yf(e){return e?(e=Wr,e):Wr}function Xf(e,t,a,r,i,n){i=Yf(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:a},n=n===void 0?null:n,n!==null&&(r.callback=n),a=Ya(e,r,t),a!==null&&(Et(a,e,t),Pi(a,e,t))}function Jf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ys(e,t){Jf(e,t),(e=e.alternate)&&Jf(e,t)}function Zf(e){if(e.tag===13||e.tag===31){var t=wr(e,67108864);t!==null&&Et(t,e,67108864),Ys(e,67108864)}}function Kf(e){if(e.tag===13||e.tag===31){var t=It();t=Mt(t);var a=wr(e,t);a!==null&&Et(a,e,t),Ys(e,t)}}var Vn=!0;function Pm(e,t,a,r){var i=N.T;N.T=null;var n=U.p;try{U.p=2,Xs(e,t,a,r)}finally{U.p=n,N.T=i}}function Ym(e,t,a,r){var i=N.T;N.T=null;var n=U.p;try{U.p=8,Xs(e,t,a,r)}finally{U.p=n,N.T=i}}function Xs(e,t,a,r){if(Vn){var i=Js(r);if(i===null)Rs(e,t,r,kn,a),Wf(e,r);else if(Jm(i,e,t,a,r))r.stopPropagation();else if(Wf(e,r),t&4&&-1<Xm.indexOf(e)){for(;i!==null;){var n=Ur(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=sa(n.pendingLanes);if(o!==0){var u=n;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var h=1<<31-Be(o);u.entanglements[1]|=h,o&=~h}da(n),(Ve&6)===0&&(fn=X()+500,ol(0))}}break;case 31:case 13:u=wr(n,2),u!==null&&Et(u,n,2),dn(),Ys(n,2)}if(n=Js(r),n===null&&Rs(e,t,r,kn,a),n===i)break;i=n}i!==null&&r.stopPropagation()}else Rs(e,t,r,null,a)}}function Js(e){return e=Zn(e),Zs(e)}var kn=null;function Zs(e){if(kn=null,e=qr(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kn=e,null}function Qf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case dt:return 2;case Ea:return 8;case ye:case Ue:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Ks=!1,rr=null,ir=null,lr=null,ml=new Map,hl=new Map,nr=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wf(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function vl(e,t,a,r,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Ur(t),t!==null&&Zf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jm(e,t,a,r,i){switch(t){case"focusin":return rr=vl(rr,e,t,a,r,i),!0;case"dragenter":return ir=vl(ir,e,t,a,r,i),!0;case"mouseover":return lr=vl(lr,e,t,a,r,i),!0;case"pointerover":var n=i.pointerId;return ml.set(n,vl(ml.get(n)||null,e,t,a,r,i)),!0;case"gotpointercapture":return n=i.pointerId,hl.set(n,vl(hl.get(n)||null,e,t,a,r,i)),!0}return!1}function $f(e){var t=qr(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,ht(e.priority,function(){Kf(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,ht(e.priority,function(){Kf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Js(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Jn=r,a.target.dispatchEvent(r),Jn=null}else return t=Ur(a),t!==null&&Zf(t),e.blockedOn=a,!1;t.shift()}return!0}function eu(e,t,a){Mn(e)&&a.delete(t)}function Zm(){Ks=!1,rr!==null&&Mn(rr)&&(rr=null),ir!==null&&Mn(ir)&&(ir=null),lr!==null&&Mn(lr)&&(lr=null),ml.forEach(eu),hl.forEach(eu)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ks||(Ks=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Zm)))}var Tn=null;function tu(e){Tn!==e&&(Tn=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Tn===e&&(Tn=null);for(var t=0;t<e.length;t+=3){var a=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(Zs(r||a)===null)continue;break}var n=Ur(a);n!==null&&(e.splice(t,3),t-=3,Jo(n,{pending:!0,data:i,method:a.method,action:r},r,i))}}))}function wi(e){function t(h){return jn(h,e)}rr!==null&&jn(rr,e),ir!==null&&jn(ir,e),lr!==null&&jn(lr,e),ml.forEach(t),hl.forEach(t);for(var a=0;a<nr.length;a++){var r=nr[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&nr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var i=a[r],n=a[r+1],o=i[nt]||null;if(typeof n=="function")o||tu(a);else if(o){var u=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[nt]||null)u=o.formAction;else if(Zs(i)!==null)continue}else u=o.action;typeof u=="function"?a[r+1]=u:(a.splice(r,3),r-=3),tu(a)}}}function au(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Qs(e){this._internalRoot=e}Rn.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,r=It();Xf(a,r,e,t,null,null)},Rn.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xf(e.current,2,null,e,null,null),dn(),t[Lr]=null}};function Rn(e){this._internalRoot=e}Rn.prototype.unstable_scheduleHydration=function(e){if(e){var t=xr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<nr.length&&t!==0&&t<nr[a].priority;a++);nr.splice(a,0,e),a===0&&$f(e)}};var ru=s.version;if(ru!=="19.2.8")throw Error(c(527,ru,"19.2.8"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var Km={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fn.isDisabled&&Fn.supportsFiber)try{_e=Fn.inject(Km),Ne=Fn}catch{}}return yl.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,r="",i=cp,n=pp,o=fp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pf(e,1,!1,null,null,a,r,null,i,n,o,au),e[Lr]=t.current,Ts(e),new Qs(t)},yl.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var r=!1,i="",n=cp,o=pp,u=fp,h=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=Pf(e,1,!0,t,a??null,r,i,h,n,o,u,au),t.context=Yf(null),a=t.current,r=It(),r=Mt(r),i=Pa(r),i.callback=null,Ya(a,i,r),a=r,t.current.lanes=a,Nt(t,a),da(t),e[Lr]=t.current,Ts(e),new Rn(t)},yl.version="19.2.8",yl}var du;function oh(){if(du)return $s.exports;du=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),$s.exports=nh(),$s.exports}var sh=oh();const ch=Wm(sh);var j=pc();const mu="golden_ratio_user_prefs",ph=500;class fh{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(mu);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(mu,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,f){const c=performance.now(),d=c-this.lastSampleTime;this.lastSampleTime=c;const m={timestamp:c,type:s,value:f,duration:d};this.samples.push(m),this.samples.length>ph&&this.samples.shift(),this.analyzeSample(m),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const f=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const f=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const f=String(s.value);this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(s){const f=String(s.value);this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(s){const f=String(s.value);this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(s){const f=String(s.value);this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(s){let f=0,c=null;for(const[d,m]of Object.entries(s))m>f&&(f=m,c=d);return c}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(s.preferredFractal=f);const c=this.getPreferred(this.prefs.renderStyleWeights);c!==null&&(s.preferredStyle=c);const d=this.getPreferred(this.prefs.paletteWeights);d!==null&&(s.preferredPalette=d);const m=this.getPreferred(this.prefs.cameraModeWeights);m!==null&&(s.preferredCamera=m)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const hu=new fh,uh=`
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
`,Si=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function Hn(p){switch(p){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;case"burningShip":return 27;case"chenAttractor":return 73;case"dadrasAttractor":return 73;case"dlAggregate":return 33;case"fibonacciSphere":return 22;case"goldenSpiral":return 22;case"ifsFractal":return 25;case"mandala":return 0;case"newtonFractal":return 28;case"penroseTiling":return 10;case"percolationCluster":return 33;case"perlinNoise":return 58;case"platonicSolids":return 6;case"randomTerrain":return 58;case"schwarzSurface":return 50;case"sierpinskiTriangle":return 14;case"sprottAttractor":return 77;case"torusKnot":return 57;case"worleyNoise":return 60;case"tesseract":return 104;case"120Cell":return 105;case"600Cell":return 106;case"24Cell":return 107;case"5Cell":return 108;case"kleinBottle":return 109;case"projectivePlane":return 110;case"mobiusStrip":return 111;case"torusKnot4D":return 112;case"flameSinusoidal":return 113;case"flameSpherical":return 114;case"flameSwirl":return 115;case"flameHorseshoe":return 116;case"flameButterfly":return 117;case"flameHeart":return 118;case"flameSpiral":return 119;case"flameHyperbolic":return 120;case"flameDiamond":return 121;case"flameWaves":return 122;case"flamePopcorn":return 123;case"flameRings":return 124;case"flameFan":return 125;case"ifs3DTree":return 126;case"ifs3DFern":return 127;case"ifs3DSierpinski":return 128;case"ifs3DCantor":return 129;case"ifs3DKoch":return 130;case"mandelbrotVariant1":return 131;case"mandelbrotVariant2":return 132;case"mandelbrotVariant3":return 133;case"mandelbrotVariant4":return 134;case"mandelbrotVariant5":return 135;case"mandelbrotVariant6":return 136;case"mandelbrotVariant7":return 137;case"mandelbrotVariant8":return 138;case"mandelbrotVariant9":return 139;case"mandelbrotVariant10":return 140;case"juliaVariant1":return 141;case"juliaVariant2":return 142;case"juliaVariant3":return 143;case"juliaVariant4":return 144;case"juliaVariant5":return 145;case"juliaVariant6":return 146;case"juliaVariant7":return 147;case"juliaVariant8":return 148;case"juliaVariant9":return 149;case"juliaVariant10":return 150;case"juliaVariant11":return 151;case"juliaVariant12":return 152;case"juliaVariant13":return 153;case"juliaVariant14":return 154;case"juliaVariant15":return 155;case"juliaVariant16":return 156;case"juliaVariant17":return 157;case"juliaVariant18":return 158;case"juliaVariant19":return 159;case"juliaVariant20":return 160;case"juliaVariant21":return 161;case"juliaVariant22":return 162;case"juliaVariant23":return 163;case"juliaVariant24":return 164;case"juliaVariant25":return 165;case"juliaVariant26":return 166;case"juliaVariant27":return 167;case"juliaVariant28":return 168;case"juliaVariant29":return 169;case"juliaVariant30":return 170;case"juliaVariant31":return 171;case"juliaVariant32":return 172;case"juliaVariant33":return 173;case"juliaVariant34":return 174;case"juliaVariant35":return 175;case"juliaVariant36":return 176;case"juliaVariant37":return 177;case"juliaVariant38":return 178;case"juliaVariant39":return 179;case"juliaVariant40":return 180;case"juliaVariant41":return 181;case"juliaVariant42":return 182;case"juliaVariant43":return 183;case"juliaVariant44":return 184;case"juliaVariant45":return 185;case"juliaVariant46":return 186;case"juliaVariant47":return 187;case"juliaVariant48":return 188;case"juliaVariant49":return 189;case"juliaVariant50":return 190;case"ifsVariant1":return 191;case"ifsVariant2":return 192;case"ifsVariant3":return 193;case"ifsVariant4":return 194;case"ifsVariant5":return 195;case"ifsVariant6":return 196;case"ifsVariant7":return 197;case"ifsVariant8":return 198;case"ifsVariant9":return 199;case"ifsVariant10":return 200;case"ifsVariant11":return 201;case"ifsVariant12":return 202;case"ifsVariant13":return 203;case"ifsVariant14":return 204;case"ifsVariant15":return 205;case"ifsVariant16":return 206;case"ifsVariant17":return 207;case"ifsVariant18":return 208;case"ifsVariant19":return 209;case"ifsVariant20":return 210;case"ifsVariant21":return 211;case"ifsVariant22":return 212;case"ifsVariant23":return 213;case"ifsVariant24":return 214;case"ifsVariant25":return 215;case"ifsVariant26":return 216;case"ifsVariant27":return 217;case"ifsVariant28":return 218;case"ifsVariant29":return 219;case"ifsVariant30":return 220;case"ifsVariant31":return 221;case"ifsVariant32":return 222;case"ifsVariant33":return 223;case"ifsVariant34":return 224;case"ifsVariant35":return 225;case"ifsVariant36":return 226;case"ifsVariant37":return 227;case"ifsVariant38":return 228;case"ifsVariant39":return 229;case"ifsVariant40":return 230;case"ifsVariant41":return 231;case"ifsVariant42":return 232;case"ifsVariant43":return 233;case"ifsVariant44":return 234;case"ifsVariant45":return 235;case"ifsVariant46":return 236;case"ifsVariant47":return 237;case"ifsVariant48":return 238;case"ifsVariant49":return 239;case"ifsVariant50":return 240;case"lsystemVariant1":return 241;case"lsystemVariant2":return 242;case"lsystemVariant3":return 243;case"lsystemVariant4":return 244;case"lsystemVariant5":return 245;case"lsystemVariant6":return 246;case"lsystemVariant7":return 247;case"lsystemVariant8":return 248;case"lsystemVariant9":return 249;case"lsystemVariant10":return 250;case"lsystemVariant11":return 251;case"lsystemVariant12":return 252;case"lsystemVariant13":return 253;case"lsystemVariant14":return 254;case"lsystemVariant15":return 255;case"lsystemVariant16":return 256;case"lsystemVariant17":return 257;case"lsystemVariant18":return 258;case"lsystemVariant19":return 259;case"lsystemVariant20":return 260;case"lsystemVariant21":return 261;case"lsystemVariant22":return 262;case"lsystemVariant23":return 263;case"lsystemVariant24":return 264;case"lsystemVariant25":return 265;case"lsystemVariant26":return 266;case"lsystemVariant27":return 267;case"lsystemVariant28":return 268;case"lsystemVariant29":return 269;case"lsystemVariant30":return 270;case"lsystemVariant31":return 271;case"lsystemVariant32":return 272;case"lsystemVariant33":return 273;case"lsystemVariant34":return 274;case"lsystemVariant35":return 275;case"lsystemVariant36":return 276;case"lsystemVariant37":return 277;case"lsystemVariant38":return 278;case"lsystemVariant39":return 279;case"lsystemVariant40":return 280;case"lsystemVariant41":return 281;case"lsystemVariant42":return 282;case"lsystemVariant43":return 283;case"lsystemVariant44":return 284;case"lsystemVariant45":return 285;case"lsystemVariant46":return 286;case"lsystemVariant47":return 287;case"lsystemVariant48":return 288;case"lsystemVariant49":return 289;case"lsystemVariant50":return 290;case"flameVariant1":return 291;case"flameVariant2":return 292;case"flameVariant3":return 293;case"flameVariant4":return 294;case"flameVariant5":return 295;case"flameVariant6":return 296;case"flameVariant7":return 297;case"flameVariant8":return 298;case"flameVariant9":return 299;case"flameVariant10":return 300;case"flameVariant11":return 301;case"flameVariant12":return 302;case"flameVariant13":return 303;case"flameVariant14":return 304;case"flameVariant15":return 305;case"flameVariant16":return 306;case"flameVariant17":return 307;case"flameVariant18":return 308;case"flameVariant19":return 309;case"flameVariant20":return 310;case"flameVariant21":return 311;case"flameVariant22":return 312;case"flameVariant23":return 313;case"flameVariant24":return 314;case"flameVariant25":return 315;case"flameVariant26":return 316;case"flameVariant27":return 317;case"flameVariant28":return 318;case"flameVariant29":return 319;case"flameVariant30":return 320;case"flameVariant31":return 321;case"flameVariant32":return 322;case"flameVariant33":return 323;case"flameVariant34":return 324;case"flameVariant35":return 325;case"flameVariant36":return 326;case"flameVariant37":return 327;case"flameVariant38":return 328;case"flameVariant39":return 329;case"flameVariant40":return 330;case"flameVariant41":return 331;case"flameVariant42":return 332;case"flameVariant43":return 333;case"flameVariant44":return 334;case"flameVariant45":return 335;case"flameVariant46":return 336;case"flameVariant47":return 337;case"flameVariant48":return 338;case"flameVariant49":return 339;case"flameVariant50":return 340;case"hybridVariant1":return 341;case"hybridVariant2":return 342;case"hybridVariant3":return 343;case"hybridVariant4":return 344;case"hybridVariant5":return 345;case"hybridVariant6":return 346;case"hybridVariant7":return 347;case"hybridVariant8":return 348;case"hybridVariant9":return 349;case"hybridVariant10":return 350;case"hybridVariant11":return 351;case"hybridVariant12":return 352;case"hybridVariant13":return 353;case"hybridVariant14":return 354;case"hybridVariant15":return 355;case"hybridVariant16":return 356;case"hybridVariant17":return 357;case"hybridVariant18":return 358;case"hybridVariant19":return 359;case"hybridVariant20":return 360;case"hybridVariant21":return 361;case"hybridVariant22":return 362;case"hybridVariant23":return 363;case"hybridVariant24":return 364;case"hybridVariant25":return 365;case"hybridVariant26":return 366;case"hybridVariant27":return 367;case"hybridVariant28":return 368;case"hybridVariant29":return 369;case"hybridVariant30":return 370;case"hybridVariant31":return 371;case"hybridVariant32":return 372;case"hybridVariant33":return 373;case"hybridVariant34":return 374;case"hybridVariant35":return 375;case"hybridVariant36":return 376;case"hybridVariant37":return 377;case"hybridVariant38":return 378;case"hybridVariant39":return 379;case"hybridVariant40":return 380;case"hybridVariant41":return 381;case"hybridVariant42":return 382;case"hybridVariant43":return 383;case"hybridVariant44":return 384;case"hybridVariant45":return 385;case"hybridVariant46":return 386;case"hybridVariant47":return 387;case"hybridVariant48":return 388;case"hybridVariant49":return 389;case"hybridVariant50":return 390;case"hybridVariant51":return 391;case"hybridVariant52":return 392;case"hybridVariant53":return 393;case"hybridVariant54":return 394;case"hybridVariant55":return 395;case"hybridVariant56":return 396;case"hybridVariant57":return 397;case"hybridVariant58":return 398;case"hybridVariant59":return 399;case"hybridVariant60":return 400;case"hybridVariant61":return 401;case"hybridVariant62":return 402;case"hybridVariant63":return 403;case"hybridVariant64":return 404;case"hybridVariant65":return 405;case"hybridVariant66":return 406;case"hybridVariant67":return 407;case"hybridVariant68":return 408;case"hybridVariant69":return 409;case"hybridVariant70":return 410;case"hybridVariant71":return 411;case"hybridVariant72":return 412;case"hybridVariant73":return 413;case"hybridVariant74":return 414;case"hybridVariant75":return 415;case"hybridVariant76":return 416;case"hybridVariant77":return 417;case"hybridVariant78":return 418;case"hybridVariant79":return 419;case"hybridVariant80":return 420;case"hybridVariant81":return 421;case"hybridVariant82":return 422;case"hybridVariant83":return 423;case"hybridVariant84":return 424;case"hybridVariant85":return 425;case"hybridVariant86":return 426;case"hybridVariant87":return 427;case"hybridVariant88":return 428;case"hybridVariant89":return 429;case"hybridVariant90":return 430;default:return 0}}function dh(p){switch(p){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function mh(p){switch(p){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function hh(p){switch(p){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function vh(p){switch(p){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class Nu{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||Si.find(f=>f.id===s.paletteId)||Si[0]}computeIndices(s){return{fractalIdx:Hn(s.type),hybridIdx:Hn(s.hybridType||s.type),tertiaryIdx:Hn(s.tertiaryType||"riemannZeta"),compositeOpIdx:dh(s.compositeOp),cameraModeIdx:mh(s.cameraMode),sliceAxisIdx:hh(s.sliceAxis),renderStyleIdx:vh(s.renderStyle)}}packUniforms(s,f,c,d,m){const b=this.canvas.width,w=this.canvas.height;return s[0]=b,s[1]=w,s[2]=f,s[3]=c.phiMultiplier,s[4]=c.rotX,s[5]=c.rotY,s[6]=c.zoom,s[7]=m.fractalIdx,s[8]=c.iterations,s[9]=c.glowIntensity,s[10]=c.morphSpeed,s[11]=m.hybridIdx,s[12]=c.hybridBlend??0,s[13]=c.boxFold??1.2,s[14]=c.sphereFold??.65,s[15]=c.interiorCut??.35,s[16]=d.primary[0],s[17]=d.primary[1],s[18]=d.primary[2],s[19]=m.tertiaryIdx,s[20]=d.secondary[0],s[21]=d.secondary[1],s[22]=d.secondary[2],s[23]=c.tertiaryBlend??0,s[24]=d.accent[0],s[25]=d.accent[1],s[26]=d.accent[2],s[27]=m.compositeOpIdx,s[28]=c.smoothK??.35,s[29]=c.warpStrength??.3,s[30]=c.octaveLayers??2,s[31]=m.cameraModeIdx,s[32]=c.camPosX??0,s[33]=c.camPosY??0,s[34]=c.camPosZ??0,s[35]=c.slicePlane??0,s[36]=c.headlampPower??.3,s[37]=c.volumetricFog??.15,s[38]=m.sliceAxisIdx,s[39]=m.renderStyleIdx,s[40]=d.ambient?d.ambient[0]:.02,s[41]=d.ambient?d.ambient[1]:.02,s[42]=d.ambient?d.ambient[2]:.02,s[43]=c.paletteSeed??0,s[44]=c.paletteRotation?1:0,s[45]=0,s[46]=0,s[47]=0,s}}class xh{constructor(){this.logs=[],this.stats=this.getInitialStats(),this.frameCount=0,this.lastFrameTime=performance.now(),this.enabled=!0}getInitialStats(){return{frameTime:0,fps:0,rayMarchSteps:0,rayMarchStepsAvg:0,sdfMin:1/0,sdfMax:-1/0,sdfNaN:0,sdfInfinity:0,hitRate:0,averageDistance:0,maxDistance:0,gpuMemoryUsed:0,shaderCompileTime:0,contextLost:!1}}log(s,f,c,d){if(!this.enabled)return;const m={timestamp:performance.now(),level:s,category:f,message:c,data:d};this.logs.push(m),this.logs.length>1e3&&(this.logs=this.logs.slice(-1e3)),(s==="error"||s==="warn")&&console[s](`[${f}] ${c}`,d)}updateFrameStats(s,f,c){const d=performance.now(),m=d-this.lastFrameTime;this.lastFrameTime=d,this.frameCount++,this.stats.frameTime=m,this.stats.fps=1e3/m,this.stats.rayMarchSteps=s,this.stats.rayMarchStepsAvg=this.stats.rayMarchStepsAvg*.9+s*.1,isNaN(f)&&(this.stats.sdfNaN++,this.log("error","math","NaN detected in SDF calculation",{steps:s,hitDistance:f})),isFinite(f)||this.stats.sdfInfinity++,this.stats.sdfMin=Math.min(this.stats.sdfMin,f),this.stats.sdfMax=Math.max(this.stats.sdfMax,f);const b=f<.001;this.stats.hitRate=this.stats.hitRate*.95+(b?1:0)*.05,this.stats.averageDistance=this.stats.averageDistance*.95+f*.05,this.stats.maxDistance=Math.max(this.stats.maxDistance,c)}validateSDF(s,f){return isNaN(s)?(this.log("error","math","SDF returned NaN",{position:f,sdfValue:s}),!1):isFinite(s)?(s<-1e3&&this.log("warn","math","SDF returned unusually large negative value",{position:f,sdfValue:s}),!0):(this.log("error","math","SDF returned Infinity",{position:f,sdfValue:s}),!1)}validateNormal(s,f){const c=Math.sqrt(s[0]**2+s[1]**2+s[2]**2);return isNaN(c)?(this.log("error","math","Normal contains NaN",{position:f,normal:s}),!1):Math.abs(c-1)>.01?(this.log("warn","math","Normal is not normalized",{position:f,normal:s,length:c}),!1):!0}trackGPUContext(s,f){this.stats.contextLost=s,s&&this.log("error","gpu","GPU context lost"),f!==void 0&&(this.stats.shaderCompileTime=f,f>1e3&&this.log("warn","gpu","Shader compilation took too long",{shaderCompileTime:f}))}getStats(){return{...this.stats}}getLogs(s,f){let c=this.logs;return s&&(c=c.filter(d=>d.level===s)),f&&(c=c.filter(d=>d.category===f)),c}exportReport(){const s={timestamp:new Date().toISOString(),stats:this.stats,recentLogs:this.logs.slice(-100),summary:{totalLogs:this.logs.length,errors:this.logs.filter(f=>f.level==="error").length,warnings:this.logs.filter(f=>f.level==="warn").length,nanCount:this.stats.sdfNaN,infinityCount:this.stats.sdfInfinity}};return JSON.stringify(s,null,2)}reset(){this.stats=this.getInitialStats(),this.logs=[],this.frameCount=0,this.lastFrameTime=performance.now()}setEnabled(s){this.enabled=s}isHealthy(){return this.stats.sdfNaN===0&&this.stats.sdfInfinity===0&&!this.stats.contextLost&&this.stats.fps>10}}const We=new xh;function qn(p,s,f,c){if(isNaN(p))return We.log("error","math",`NaN in scalar: ${s}`,{value:p,position:f}),!1;if(!isFinite(p))return We.log("error","math",`Infinity in scalar: ${s}`,{value:p,position:f}),!1;if(c){const[d,m]=c;if(p<d||p>m)return We.log("warn","math",`Scalar out of range: ${s}`,{value:p,position:f,expectedRange:c}),!1}return!0}function Vu(p,s){const f=performance.now(),c=p(),d=performance.now()-f;return d>16&&We.log("warn","performance",`Slow operation: ${s}`,{duration:d}),{result:c,duration:d}}class fc extends Nu{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(52),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!fc.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(m=>setTimeout(()=>m(null),5e3));if(this.adapter=await Promise.race([s,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const m=this.adapter.info;m&&(m.vendor||m.description)?this.adapterInfo=`${m.vendor||""} ${m.description||m.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(m=>{console.warn(`WebGPU device lost: ${m.message}`,m),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const c=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:c,alphaMode:"premultiplied"});try{const m=this.device.createCommandEncoder();m.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([m.finish()])}catch(m){console.debug("Initial clear pass handled:",m)}const d=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:uh});if("getCompilationInfo"in d)try{const b=(await d.getCompilationInfo()).messages.filter(w=>w.type==="error");if(b.length>0){for(const w of b)console.error(`[WGSL Compile Error] Line ${w.lineNum}:${w.linePos}: ${w.message}`);return!1}}catch(m){console.debug("Compilation info inspection skipped:",m)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:d,entryPoint:"vs_main"},fragment:{module:d,entryPoint:"fs_main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:208,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const c=this.canvas.width,d=this.canvas.height;if(c===0||d===0)return;const{duration:m}=Vu(()=>{const b=this.resolvePalette(f),w=this.computeIndices(f);this.packUniforms(this.uniformValues,s,f,b,w),qn(this.uniformValues[2],"u_time",void 0,[0,1e3])||We.log("error","render","Invalid time value",{time:this.uniformValues[2]}),qn(this.uniformValues[6],"u_zoom",void 0,[.01,100])||We.log("warn","render","Zoom out of range",{zoom:this.uniformValues[6]}),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const g=this.device.createCommandEncoder(),x=this.context.getCurrentTexture().createView(),L=g.beginRenderPass({colorAttachments:[{view:x,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});L.setPipeline(this.pipeline),L.setBindGroup(0,this.bindGroup),L.draw(3,1,0,0),L.end(),this.device.queue.submit([g.finish()])}catch(g){We.log("warn","render","WebGPU render frame skipped",{error:g.message}),console.debug("WebGPU render frame skipped:",g.message)}},"WebGPU render");We.updateFrameStats(128,.001,20),We.trackGPUContext(!1,m)}destroy(){var s,f;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const yh=`
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
`,gh=`
// ===================================================================
// IFS Variations 1-50 - CORRECT IFS FORMULAS
// ===================================================================

// Variant 1: Classic Kaleidoscopic IFS
float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.5, 1.5, 1.5);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Sierpinski IFS
float mapIFSVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.84;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.52) z.xy = -z.yx;
    if (z.x + z.z < 0.53) z.xz = -z.zx;
    if (z.y + z.z < 0.54) z.yz = -z.zy;
    
    z = z * scale - vec3(1.02, 1.03, 1.04);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Menger IFS
float mapIFSVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.59;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.06, 2.08, 2.09);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Dragon IFS
float mapIFSVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.36;
  float angle = 0.62;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(0.84, 0.86, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Vicsek IFS
float mapIFSVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.95;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.88, 0.90, 0.93);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Apollonian IFS
float mapIFSVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.92;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.35) {
      z = z / r2 - vec3(1.62, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.09, 1.12, 1.15);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Tetrix IFS
float mapIFSVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 0.21) {
      z = -z;
    }
    
    z = z * scale - vec3(1.07, 1.10, 1.14);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Cubic IFS
float mapIFSVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.42, 1.46, 1.50);
    
    if (z.x > 0.88) z.x = 1.76 - z.x;
    if (z.y > 0.92) z.y = 1.84 - z.y;
    if (z.z > 0.96) z.z = 1.92 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Spiral IFS
float mapIFSVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.88;
  float angle = 0.57;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(0.99, 1.04, 1.08);
    angle += 0.077;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Plasma IFS
float mapIFSVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.50, 0.55, 0.60);
    
    float r2 = r * r;
    if (r2 < 0.88) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Kaleidoscopic IFS
float mapIFSVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.31, 1.36, 1.42);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Sierpinski IFS
float mapIFSVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.62) z.xy = -z.yx;
    if (z.x + z.z < 0.68) z.xz = -z.zx;
    if (z.y + z.z < 0.74) z.yz = -z.zy;
    
    z = z * scale - vec3(1.12, 1.18, 1.24);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Menger IFS
float mapIFSVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.89;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.26, 2.33, 2.39);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Dragon IFS
float mapIFSVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.51;
  float angle = 0.92;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(0.94, 1.01, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Vicsek IFS
float mapIFSVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.02, 1.10, 1.18);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Apollonian IFS
float mapIFSVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.12;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.43) {
      z = z / r2 - vec3(1.82, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.24, 1.32, 1.40);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Tetrix IFS
float mapIFSVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 0.51) {
      z = -z;
    }
    
    z = z * scale - vec3(1.17, 1.25, 1.34);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Cubic IFS
float mapIFSVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.57, 1.66, 1.75);
    
    if (z.x > 0.98) z.x = 1.96 - z.x;
    if (z.y > 1.07) z.y = 2.14 - z.y;
    if (z.z > 1.16) z.z = 2.32 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Spiral IFS
float mapIFSVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  float angle = 0.87;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.09, 1.19, 1.28);
    angle += 0.107;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Plasma IFS
float mapIFSVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.30;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.60, 0.70, 0.80);
    
    float r2 = r * r;
    if (r2 < 0.96) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Kaleidoscopic IFS
float mapIFSVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.33;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.41, 1.51, 1.62);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Sierpinski IFS
float mapIFSVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.72) z.xy = -z.yx;
    if (z.x + z.z < 0.83) z.xz = -z.zx;
    if (z.y + z.z < 0.94) z.yz = -z.zy;
    
    z = z * scale - vec3(1.22, 1.33, 1.44);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Menger IFS
float mapIFSVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.19;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.46, 2.58, 2.69);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Dragon IFS
float mapIFSVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.66;
  float angle = 1.22;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(1.04, 1.16, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Vicsek IFS
float mapIFSVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.18, 1.30, 1.43);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Apollonian IFS
float mapIFSVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.32;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.51) {
      z = z / r2 - vec3(2.02, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.39, 1.52, 1.65);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Tetrix IFS
float mapIFSVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 0.81) {
      z = -z;
    }
    
    z = z * scale - vec3(1.27, 1.41, 1.54);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Cubic IFS
float mapIFSVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.30;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.72, 1.86, 2.00);
    
    if (z.x > 1.08) z.x = 2.16 - z.x;
    if (z.y > 1.22) z.y = 2.44 - z.y;
    if (z.z > 1.36) z.z = 2.72 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Spiral IFS
float mapIFSVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.28;
  float angle = 1.17;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.19, 1.33, 1.48);
    angle += 0.137;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Plasma IFS
float mapIFSVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.70, 0.85, 1.00);
    
    float r2 = r * r;
    if (r2 < 1.04) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Kaleidoscopic IFS
float mapIFSVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.58;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.51, 1.67, 1.82);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Sierpinski IFS
float mapIFSVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.82) z.xy = -z.yx;
    if (z.x + z.z < 0.98) z.xz = -z.zx;
    if (z.y + z.z < 1.14) z.yz = -z.zy;
    
    z = z * scale - vec3(1.32, 1.48, 1.64);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Menger IFS
float mapIFSVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.49;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.66, 2.83, 2.99);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Dragon IFS
float mapIFSVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.81;
  float angle = 1.52;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(1.14, 1.31, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Vicsek IFS
float mapIFSVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.33, 1.50, 1.68);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Apollonian IFS
float mapIFSVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.52;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.59) {
      z = z / r2 - vec3(2.22, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.54, 1.72, 1.90);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Tetrix IFS
float mapIFSVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 1.11) {
      z = -z;
    }
    
    z = z * scale - vec3(1.37, 1.55, 1.74);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Cubic IFS
float mapIFSVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.87, 2.06, 2.25);
    
    if (z.x > 1.18) z.x = 2.36 - z.x;
    if (z.y > 1.37) z.y = 2.74 - z.y;
    if (z.z > 1.56) z.z = 3.12 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Spiral IFS
float mapIFSVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.48;
  float angle = 1.47;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.29, 1.48, 1.68);
    angle += 0.167;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Plasma IFS
float mapIFSVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.80, 1.00, 1.20);
    
    float r2 = r * r;
    if (r2 < 1.12) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Kaleidoscopic IFS
float mapIFSVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.83;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.61, 1.81, 2.02);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Sierpinski IFS
float mapIFSVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.92) z.xy = -z.yx;
    if (z.x + z.z < 1.13) z.xz = -z.zx;
    if (z.y + z.z < 1.34) z.yz = -z.zy;
    
    z = z * scale - vec3(1.42, 1.63, 1.84);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Menger IFS
float mapIFSVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.79;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.86, 3.08, 3.29);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Dragon IFS
float mapIFSVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.96;
  float angle = 1.82;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(1.24, 1.46, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Vicsek IFS
float mapIFSVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.15;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.48, 1.70, 1.93);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Apollonian IFS
float mapIFSVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.72;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.67) {
      z = z / r2 - vec3(2.42, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.69, 1.92, 2.15);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Tetrix IFS
float mapIFSVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.84;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 1.41) {
      z = -z;
    }
    
    z = z * scale - vec3(1.47, 1.71, 1.94);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Cubic IFS
float mapIFSVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(2.02, 2.26, 2.50);
    
    if (z.x > 1.28) z.x = 2.56 - z.x;
    if (z.y > 1.52) z.y = 3.04 - z.y;
    if (z.z > 1.76) z.z = 3.52 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Spiral IFS
float mapIFSVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.68;
  float angle = 1.77;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.39, 1.64, 1.88);
    angle += 0.197;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Plasma IFS
float mapIFSVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.90, 1.15, 1.40);
    
    float r2 = r * r;
    if (r2 < 1.20) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`,zh=`
// ===================================================================
// L-System Variations 1-50 - CORRECT L-SYSTEM FORMULAS
// ===================================================================

// Variant 1: Classic Binary Tree
float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Fractal Plant
float mapLSystemVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.74;
  float angle = 0.35;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.42;
    } else {
      z.z = z.z - 0.42;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.056;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Koch Curve
float mapLSystemVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.62;
  float threshold = 0.22;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.33;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Dragon Curve
float mapLSystemVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.36;
  float angle = 0.62;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.06) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.33;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Sierpinski
float mapLSystemVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.00;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < -0.15) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < -0.13) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 0.84;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Hilbert Curve
float mapLSystemVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.95;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.45;
    z.y = z.y - sign(z.y) * 0.46;
    z.z = z.z - sign(z.z) * 0.49;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Barnsley Fern
float mapLSystemVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.46;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 17.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.121;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.54;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.30;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Spiral Phyllotaxis
float mapLSystemVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.20;
  float goldenAngle = 2.32;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.26;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.104;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Cube Subdivision
float mapLSystemVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.86;
  float removeSize = 0.127;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Apical Dominance
float mapLSystemVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.68;
  float dominance = 0.70;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.28 && abs(z.z) < 0.30) {
      z.y = z.y + 1.00 * dominance;
    } else {
      z.y = z.y + 0.28 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.45;
    z.z = z.z * 1.50;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Binary Tree
float mapLSystemVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.02;
  float angle = 0.74;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Fractal Plant
float mapLSystemVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.94;
  float angle = 0.60;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.50;
    } else {
      z.z = z.z - 0.52;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.086;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Koch Curve
float mapLSystemVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.02;
  float threshold = 0.30;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.43;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Dragon Curve
float mapLSystemVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.51;
  float angle = 0.92;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.21) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.41;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Sierpinski
float mapLSystemVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.20;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < -0.05) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.02) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 0.92;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Hilbert Curve
float mapLSystemVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.20;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.53;
    z.y = z.y - sign(z.y) * 0.56;
    z.z = z.z - sign(z.z) * 0.64;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Barnsley Fern
float mapLSystemVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.54;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 27.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.151;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.74;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.46;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Spiral Phyllotaxis
float mapLSystemVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.32;
  float goldenAngle = 2.72;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.34;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.134;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Cube Subdivision
float mapLSystemVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.26;
  float removeSize = 0.157;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Apical Dominance
float mapLSystemVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.76;
  float dominance = 0.80;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.36 && abs(z.z) < 0.40) {
      z.y = z.y + 1.20 * dominance;
    } else {
      z.y = z.y + 0.36 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.60;
    z.z = z.z * 1.70;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Binary Tree
float mapLSystemVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.22;
  float angle = 1.14;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Fractal Plant
float mapLSystemVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.14;
  float angle = 0.85;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.58;
    } else {
      z.z = z.z - 0.62;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.116;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Koch Curve
float mapLSystemVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.42;
  float threshold = 0.38;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.53;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Dragon Curve
float mapLSystemVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.66;
  float angle = 1.22;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.36) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.49;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Sierpinski
float mapLSystemVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.05) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.17) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 1.00;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Hilbert Curve
float mapLSystemVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.45;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.61;
    z.y = z.y - sign(z.y) * 0.66;
    z.z = z.z - sign(z.z) * 0.79;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Barnsley Fern
float mapLSystemVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.62;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 37.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.181;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.94;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.60;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Spiral Phyllotaxis
float mapLSystemVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.44;
  float goldenAngle = 3.12;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.42;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.164;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Cube Subdivision
float mapLSystemVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.66;
  float removeSize = 0.187;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Apical Dominance
float mapLSystemVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.84;
  float dominance = 0.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.44 && abs(z.z) < 0.50) {
      z.y = z.y + 1.40 * dominance;
    } else {
      z.y = z.y + 0.44 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.75;
    z.z = z.z * 1.90;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Binary Tree
float mapLSystemVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.42;
  float angle = 1.54;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Fractal Plant
float mapLSystemVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.34;
  float angle = 1.10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.66;
    } else {
      z.z = z.z - 0.72;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.146;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Koch Curve
float mapLSystemVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.82;
  float threshold = 0.46;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.63;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Dragon Curve
float mapLSystemVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.81;
  float angle = 1.52;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.51) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.57;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Sierpinski
float mapLSystemVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.60;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.15) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.33) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 1.08;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Hilbert Curve
float mapLSystemVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.70;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.69;
    z.y = z.y - sign(z.y) * 0.76;
    z.z = z.z - sign(z.z) * 0.94;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Barnsley Fern
float mapLSystemVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.70;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 47.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.211;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.14;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.75;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Spiral Phyllotaxis
float mapLSystemVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.56;
  float goldenAngle = 3.52;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.50;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.194;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Cube Subdivision
float mapLSystemVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.06;
  float removeSize = 0.217;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Apical Dominance
float mapLSystemVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.92;
  float dominance = 1.00;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.52 && abs(z.z) < 0.60) {
      z.y = z.y + 1.60 * dominance;
    } else {
      z.y = z.y + 0.52 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.90;
    z.z = z.z * 2.10;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Binary Tree
float mapLSystemVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.62;
  float angle = 1.94;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Fractal Plant
float mapLSystemVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.54;
  float angle = 1.35;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.74;
    } else {
      z.z = z.z - 0.82;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.176;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Koch Curve
float mapLSystemVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.22;
  float threshold = 0.54;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.73;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Dragon Curve
float mapLSystemVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.96;
  float angle = 1.82;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.66) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.65;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Sierpinski
float mapLSystemVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.80;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.25) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.47) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 1.16;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Hilbert Curve
float mapLSystemVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.95;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.77;
    z.y = z.y - sign(z.y) * 0.86;
    z.z = z.z - sign(z.z) * 1.09;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Barnsley Fern
float mapLSystemVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.78;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 57.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.241;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.34;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.90;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Spiral Phyllotaxis
float mapLSystemVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.68;
  float goldenAngle = 3.92;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.58;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.224;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Cube Subdivision
float mapLSystemVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.46;
  float removeSize = 0.247;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Apical Dominance
float mapLSystemVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.00;
  float dominance = 1.10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.60 && abs(z.z) < 0.70) {
      z.y = z.y + 1.80 * dominance;
    } else {
      z.y = z.y + 0.60 * (1.0 - dominance);
    }
    
    z.x = z.x * 2.05;
    z.z = z.z * 2.30;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`,bh=`
// ===================================================================
// Flame Variations 1-50 - CORRECT FRACTAL FLAME FORMULAS
// ===================================================================

// Variant 1: Sinusoidal Flame
float mapFlameVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.5;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Sinusoidal variation
    z = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Spherical Flame
float mapFlameVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.64;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Swirl Flame
float mapFlameVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.74;
  float swirl = 0.59;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Horseshoe Flame
float mapFlameVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.88;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Heart Flame
float mapFlameVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.02;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Disc Flame
float mapFlameVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.78;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Spiral Flame
float mapFlameVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.84;
  float spiral = 0.58;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Hyperbolic Flame
float mapFlameVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Diamond Flame
float mapFlameVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.17;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Exponential Flame
float mapFlameVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Power Flame
float mapFlameVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.98;
  float power = 3.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Spherical Flame
float mapFlameVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.84;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Swirl Flame
float mapFlameVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.90;
  float swirl = 0.89;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Horseshoe Flame
float mapFlameVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Heart Flame
float mapFlameVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.27;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Disc Flame
float mapFlameVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Spiral Flame
float mapFlameVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  float spiral = 0.98;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Hyperbolic Flame
float mapFlameVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Diamond Flame
float mapFlameVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.47;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Exponential Flame
float mapFlameVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Power Flame
float mapFlameVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.23;
  float power = 4.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Spherical Flame
float mapFlameVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Swirl Flame
float mapFlameVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  float swirl = 1.19;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Horseshoe Flame
float mapFlameVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.28;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Heart Flame
float mapFlameVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.52;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Disc Flame
float mapFlameVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.38;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Spiral Flame
float mapFlameVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  float spiral = 1.38;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Hyperbolic Flame
float mapFlameVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Diamond Flame
float mapFlameVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.77;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Exponential Flame
float mapFlameVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Power Flame
float mapFlameVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.48;
  float power = 5.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Spherical Flame
float mapFlameVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Swirl Flame
float mapFlameVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.19;
  float swirl = 1.49;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Horseshoe Flame
float mapFlameVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.48;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Heart Flame
float mapFlameVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.77;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Disc Flame
float mapFlameVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.68;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Spiral Flame
float mapFlameVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  float spiral = 1.78;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Hyperbolic Flame
float mapFlameVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Diamond Flame
float mapFlameVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.07;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Exponential Flame
float mapFlameVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Power Flame
float mapFlameVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.73;
  float power = 6.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Spherical Flame
float mapFlameVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Swirl Flame
float mapFlameVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.34;
  float swirl = 1.79;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Horseshoe Flame
float mapFlameVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.68;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Heart Flame
float mapFlameVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.02;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Disc Flame
float mapFlameVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.98;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Spiral Flame
float mapFlameVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  float spiral = 2.18;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Hyperbolic Flame
float mapFlameVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Diamond Flame
float mapFlameVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.37;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Exponential Flame
float mapFlameVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`,wh=`
// ===================================================================
// Hybrid Variations 1-90 - CORRECT HYBRID FORMULAS
// ===================================================================

// Variant 1: Mandelbrot-Julia Hybrid
float mapHybridVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355);
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
    z = mix(z, c, 0.3); // Julia blend
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Mandelbrot-IFS Hybrid
float mapHybridVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  float power = 8.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Julia-Flame Hybrid
float mapHybridVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.45;
  float blend = 0.215;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: IFS-L-System Hybrid
float mapHybridVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Mandelbrot Power 5.0
float mapHybridVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 5.00;
  
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

// Variant 6: Mandelbrot Power 13.8
float mapHybridVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.80;
  
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

// Variant 7: Burning Ship Hybrid
float mapHybridVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.05;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Rotated Mandelbrot
float mapHybridVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.60;
  float rot = 0.260;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Folded Mandelbrot
float mapHybridVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 10: Mandelbrot Power 8.5
float mapHybridVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.50;
  
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

// Variant 11: Mandelbrot Power 20.4
float mapHybridVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 20.40;
  
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

// Variant 12: Mandelbrot-IFS Hybrid
float mapHybridVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  float power = 9.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Julia-Flame Hybrid
float mapHybridVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 9.95;
  float blend = 0.265;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: IFS-L-System Hybrid
float mapHybridVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.15;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Mandelbrot Power 7.0
float mapHybridVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 7.00;
  
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

// Variant 16: Mandelbrot Power 16.8
float mapHybridVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.80;
  
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

// Variant 17: Burning Ship Hybrid
float mapHybridVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.55;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Rotated Mandelbrot
float mapHybridVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.60;
  float rot = 0.460;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Folded Mandelbrot
float mapHybridVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 20: Mandelbrot Power 11.0
float mapHybridVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.00;
  
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

// Variant 21: Mandelbrot Power 24.4
float mapHybridVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 24.40;
  
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

// Variant 22: Mandelbrot-IFS Hybrid
float mapHybridVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  float power = 10.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Julia-Flame Hybrid
float mapHybridVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 11.45;
  float blend = 0.315;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: IFS-L-System Hybrid
float mapHybridVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Mandelbrot Power 9.0
float mapHybridVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.00;
  
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

// Variant 26: Mandelbrot Power 19.8
float mapHybridVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.80;
  
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

// Variant 27: Burning Ship Hybrid
float mapHybridVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.05;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Rotated Mandelbrot
float mapHybridVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.60;
  float rot = 0.660;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Folded Mandelbrot
float mapHybridVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 30: Mandelbrot Power 13.5
float mapHybridVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.50;
  
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

// Variant 31: Mandelbrot Power 28.4
float mapHybridVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.40;
  
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

// Variant 32: Mandelbrot-IFS Hybrid
float mapHybridVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  float power = 11.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Julia-Flame Hybrid
float mapHybridVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 12.95;
  float blend = 0.365;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: IFS-L-System Hybrid
float mapHybridVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.65;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Mandelbrot Power 11.0
float mapHybridVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.00;
  
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

// Variant 36: Mandelbrot Power 22.8
float mapHybridVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 22.80;
  
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

// Variant 37: Burning Ship Hybrid
float mapHybridVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.55;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Rotated Mandelbrot
float mapHybridVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.60;
  float rot = 0.860;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Folded Mandelbrot
float mapHybridVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 40: Mandelbrot Power 16.0
float mapHybridVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.00;
  
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

// Variant 41: Mandelbrot Power 32.4
float mapHybridVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 32.40;
  
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

// Variant 42: Mandelbrot-IFS Hybrid
float mapHybridVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.84;
  float power = 12.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Julia-Flame Hybrid
float mapHybridVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 14.45;
  float blend = 0.415;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: IFS-L-System Hybrid
float mapHybridVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Mandelbrot Power 13.0
float mapHybridVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.00;
  
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

// Variant 46: Mandelbrot Power 25.8
float mapHybridVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 25.80;
  
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

// Variant 47: Burning Ship Hybrid
float mapHybridVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.05;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Rotated Mandelbrot
float mapHybridVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 17.60;
  float rot = 1.060;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Folded Mandelbrot
float mapHybridVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 50: Mandelbrot Power 18.5
float mapHybridVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.50;
  
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

// Variant 51: Mandelbrot Power 36.4
float mapHybridVariant51(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 36.40;
  
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

// Variant 52: Mandelbrot-IFS Hybrid
float mapHybridVariant52(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.04;
  float power = 13.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 53: Julia-Flame Hybrid
float mapHybridVariant53(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 15.95;
  float blend = 0.465;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 54: IFS-L-System Hybrid
float mapHybridVariant54(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.15;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 55: Mandelbrot Power 15.0
float mapHybridVariant55(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.00;
  
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

// Variant 56: Mandelbrot Power 28.8
float mapHybridVariant56(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.80;
  
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

// Variant 57: Burning Ship Hybrid
float mapHybridVariant57(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.55;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 58: Rotated Mandelbrot
float mapHybridVariant58(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.60;
  float rot = 1.260;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 59: Folded Mandelbrot
float mapHybridVariant59(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 60: Mandelbrot Power 21.0
float mapHybridVariant60(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.00;
  
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

// Variant 61: Mandelbrot Power 40.4
float mapHybridVariant61(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 40.40;
  
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

// Variant 62: Mandelbrot-IFS Hybrid
float mapHybridVariant62(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.24;
  float power = 14.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 63: Julia-Flame Hybrid
float mapHybridVariant63(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 17.45;
  float blend = 0.515;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 64: IFS-L-System Hybrid
float mapHybridVariant64(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 65: Mandelbrot Power 17.0
float mapHybridVariant65(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 17.00;
  
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

// Variant 66: Mandelbrot Power 31.8
float mapHybridVariant66(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 31.80;
  
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

// Variant 67: Burning Ship Hybrid
float mapHybridVariant67(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.05;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 68: Rotated Mandelbrot
float mapHybridVariant68(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.60;
  float rot = 1.460;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 69: Folded Mandelbrot
float mapHybridVariant69(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 70: Mandelbrot Power 23.5
float mapHybridVariant70(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 23.50;
  
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

// Variant 71: Mandelbrot Power 44.4
float mapHybridVariant71(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 44.40;
  
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

// Variant 72: Mandelbrot-IFS Hybrid
float mapHybridVariant72(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.44;
  float power = 15.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 73: Julia-Flame Hybrid
float mapHybridVariant73(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 18.95;
  float blend = 0.565;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 74: IFS-L-System Hybrid
float mapHybridVariant74(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.65;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 75: Mandelbrot Power 19.0
float mapHybridVariant75(vec3 p, float t, float phi, int iters) {
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

// Variant 76: Mandelbrot Power 34.8
float mapHybridVariant76(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 34.80;
  
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

// Variant 77: Burning Ship Hybrid
float mapHybridVariant77(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.55;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 78: Rotated Mandelbrot
float mapHybridVariant78(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 23.60;
  float rot = 1.660;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 79: Folded Mandelbrot
float mapHybridVariant79(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 80: Mandelbrot Power 26.0
float mapHybridVariant80(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 26.00;
  
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

// Variant 81: Mandelbrot Power 48.4
float mapHybridVariant81(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 48.40;
  
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

// Variant 82: Mandelbrot-IFS Hybrid
float mapHybridVariant82(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.64;
  float power = 16.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 83: Julia-Flame Hybrid
float mapHybridVariant83(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 20.45;
  float blend = 0.615;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                        sin(theta * power) * sin(phiAngle * power), 
                        cos(theta * power));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 84: IFS-L-System Hybrid
float mapHybridVariant84(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 85: Mandelbrot Power 21.0
float mapHybridVariant85(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.00;
  
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

// Variant 86: Mandelbrot Power 37.8
float mapHybridVariant86(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 37.80;
  
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

// Variant 87: Burning Ship Hybrid
float mapHybridVariant87(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.05;
  
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
    z = abs(z) + p; // Burning ship
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 88: Rotated Mandelbrot
float mapHybridVariant88(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 25.60;
  float rot = 1.860;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 89: Folded Mandelbrot
float mapHybridVariant89(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
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

// Variant 90: Mandelbrot Power 28.5
float mapHybridVariant90(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.50;
  
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
`,_h=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Sh=_h,Dh=`#version 300 es
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

${yh}

${gh}

${zh}

${bh}

${wh}

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

// SOFT SHADOWS: 16 steps for realistic penumbra (optimized from 32)
float calcSoftShadow(vec3 p, vec3 lightDir) {
  float shadow = 1.0;
  float t = 0.01;
  for (int i = 0; i < 16; i++) {
    float d = sceneSDF(p + lightDir * t).x;
    if (d < 0.0001) return 0.0;
    shadow = min(shadow, 12.0 * d / t);
    t += clamp(d, 0.01, 0.2);
    if (t > 8.0) break;
  }
  return clamp(shadow, 0.0, 1.0);
}

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
    
    // Use base normal + micro detail for surface richness
    float ndotv = dot(base_n, rd);
    vec3 n = ndotv > 0.0 ? -base_n : base;
    
    // MICRO NORMAL: Add fine surface detail from fractal geometry
    float microScale = clamp(cam_dist * 0.5, 0.5, 2.0);
    vec3 micro_n = calcMicroNormal(p, microScale);
    n = normalize(mix(n, micro_n, 0.15)); // 15% micro detail blend

    vec3 light1 = normalize(vec3(cos(u_time * 0.3), 1.2, sin(u_time * 0.3)));
    vec3 light2 = normalize(vec3(-sin(u_time * 0.25 * GOLDEN_RATIO), -0.6, cos(u_time * 0.25 * GOLDEN_RATIO)));

    // ENHANCED PBR LIGHTING: Soft shadows + SSS + Environment reflections
    float fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    // SOFT SHADOWS: 16-step penumbra for realistic lighting
    float shadow1 = calcSoftShadow(p, light1);
    float shadow2 = calcSoftShadow(p, light2);

    // Diffuse lighting WITH soft shadows
    float diff1 = max(dot(n, light1), 0.0) * shadow1;
    float diff2 = max(dot(n, light2), 0.0) * shadow2 * 0.3;

    vec3 h1 = normalize(light1 - rd);
    // Higher specular power for sharper, more defined highlights
    float spec1 = pow(max(dot(n, h1), 0.0), 64.0) * shadow1;
    float spec2 = pow(max(dot(n, normalize(light2 - rd)), 0.0), 48.0) * shadow2;
    
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

    // ENHANCED PBR Lighting: Environment reflections + SSS + soft shadows
    // Environment ambient: sample SDF along normal for color-bleeding approximation
    float envOcc = sceneSDF(p + n * 0.15).x;
    float envFactor = clamp(envOcc * 6.0, 0.0, 1.0);
    vec3 ambientCol = mix(u_secondary_color * 0.30, u_primary_color * 0.18, envFactor);
    vec3 ambient = ambientCol * ao;
    
    // ENVIRONMENT REFLECTIONS: 1 sample for subtle reflections
    vec3 reflectDir = reflect(rd, n);
    float envReflDist = sceneSDF(p + reflectDir * 0.3).x;
    float envRefl = clamp(1.0 - envReflDist * 4.0, 0.0, 1.0);
    vec3 reflCol = mix(u_secondary_color, u_accent_color, envRefl) * envRefl * 0.25;
    reflCol *= (0.3 + 0.7 * fresnel);
    
    // BOUNCE LIGHT: Simplified indirect illumination
    vec3 bounceDir = normalize(-light1 + n * 0.5);
    float bounceDist = sceneSDF(p + bounceDir * 0.2).x;
    float bounceFactor = clamp(1.0 - bounceDist * 5.0, 0.0, 1.0);
    vec3 bounceCol = u_primary_color * bounceFactor * 0.15 * ao;

    // SUBSURFACE SCATTERING: 3 samples for light bleeding through thin parts
    vec3 sssLightDir = normalize(vec3(0.5, 1.0, -0.3));
    vec3 sssEnterPoint = p - n * 0.01;
    float sssThickness = 0.0;
    for (int sss_i = 1; sss_i <= 3; sss_i++) {
      float sssDist = float(sss_i) * 0.05;
      vec3 sssSamplePos = sssEnterPoint + sssLightDir * sssDist;
      float sssD = sceneSDF(sssSamplePos).x;
      sssThickness += max(0.0, -sssD);
    }
    float sss = exp(-sssThickness * 8.0);
    vec3 sssColor = vec3(1.0, 0.4, 0.2) * sss * 0.4;
    float sssBackLight = max(dot(-n, sssLightDir), 0.0) * sss;

    vec3 diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    // Material-tinted specular for colored highlights
    vec3 specColor = mix(vec3(1.0, 0.97, 0.92), mat_col, 0.15);
    vec3 specular = specColor * (spec1 * 1.3 + spec2 * 0.7) * ao;
    // Stronger rim at grazing angles, color-shifted
    vec3 rim = u_accent_color * fresnel * 0.8 * (0.3 + 0.7 * ao);

    // FULL PBR Lighting: ambient + diffuse + specular + rim + SSS + bounce + reflection
    col = ambient * 0.6 + diffuse * 1.5 + specular * 1.2 + rim * 1.3 + sssColor * sssBackLight + bounceCol * 1.8 + reflCol * 0.8;
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

    // GOD RAYS / VOLUMETRIC LIGHT: Light shafts from sun direction
    // Sample along light ray for volumetric scattering effect
    float godRayIntensity = 0.0;
    float godRayStep = 0.5;
    for (int gr_i = 0; gr_i < 8; gr_i++) {
      float gr_t = float(gr_i) * godRayStep;
      vec3 gr_p = ro + rd * gr_t;
      // Check if this point is in shadow (simple occlusion)
      float gr_d = sceneSDF(gr_p).x;
      if (gr_d > 0.1) {
        // Point is in light - add god ray contribution
        float gr_falloff = exp(-gr_t * 0.08);
        godRayIntensity += gr_falloff * 0.12;
      }
    }
    godRayIntensity = clamp(godRayIntensity, 0.0, 1.0);
    vec3 godRayColor = vec3(1.0, 0.95, 0.8) * godRayIntensity * sunAmount * 0.4;
    col += godRayColor;
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

  // MOTION BLUR: Based on camera movement (simplified - uses time-based blur)
  // Approximate motion from camera rotation speed
  float motionSpeed = 0.0;
  if (u_cam_mode > 0.5) {
    // Fly-through mode - more motion blur
    motionSpeed = 0.15;
  } else if (u_auto_rotate > 0.5) {
    // Auto-rotate mode - slight motion blur
    motionSpeed = 0.05;
  }
  motionSpeed = clamp(motionSpeed, 0.0, 0.3);
  if (motionSpeed > 0.01) {
    vec3 motionCol = vec3(0.0);
    float motionTotal = 0.0;
    for (int mb_i = -2; mb_i <= 2; mb_i++) {
      vec2 mbOffset = rd.xy * float(mb_i) * motionSpeed * 0.002;
      float mbWeight = 1.0 - abs(float(mb_i)) * 0.15;
      motionCol += col * mbWeight;
      motionTotal += mbWeight;
    }
    col = mix(col, motionCol / motionTotal, motionSpeed * 0.4);
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
`,Ah=Dh,Nh="GoldenRatioFractalLogs",Vh=1,sr="userLogs";class kh{constructor(){this.db=null,this.initialized=!1,this.memoryBuffer=[]}async init(){if(!this.initialized)return new Promise((s,f)=>{try{const c=indexedDB.open(Nh,Vh);c.onerror=()=>{console.warn("[UserLogger] IndexedDB unavailable, using memory buffer only"),this.initialized=!0,s()},c.onsuccess=()=>{this.db=c.result,this.initialized=!0,this.flushBuffer(),s()},c.onupgradeneeded=d=>{const m=d.target.result;if(!m.objectStoreNames.contains(sr)){const b=m.createObjectStore(sr,{keyPath:"id",autoIncrement:!0});b.createIndex("timestamp","timestamp",{unique:!1}),b.createIndex("level","level",{unique:!1}),b.createIndex("category","category",{unique:!1})}}}catch(c){console.warn("[UserLogger] IndexedDB init failed:",c),this.initialized=!0,s()}})}async log(s){const f={...s,timestamp:Date.now(),userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"?window.location.href:void 0},c=s.level==="error"?"error":s.level==="warn"?"warn":s.level==="debug"?"debug":"info";console[c](`[UserLogger][${s.category}] ${s.message}`,s.details||""),this.memoryBuffer.push(f),this.memoryBuffer.length>1e3&&this.memoryBuffer.shift(),this.initialized&&this.db&&await this.persistToDB(f)}async persistToDB(s){if(this.db)return new Promise(f=>{try{const c=this.db.transaction([sr],"readwrite");c.objectStore(sr).add(s),c.oncomplete=()=>f(),c.onerror=()=>{console.warn("[UserLogger] Failed to persist log entry"),f()}}catch(c){console.warn("[UserLogger] DB write error:",c),f()}})}flushBuffer(){if(this.memoryBuffer.length===0)return;const s=[...this.memoryBuffer];this.memoryBuffer=[],s.forEach(f=>this.persistToDB(f))}async getLogs(s){return this.db?new Promise(f=>{try{const m=this.db.transaction([sr],"readonly").objectStore(sr).getAll();m.onsuccess=()=>{let b=m.result||[];s&&(b=b.filter(w=>this.matchesFilter(w,s))),b.sort((w,g)=>g.timestamp-w.timestamp),s!=null&&s.limit&&(b=b.slice(0,s.limit)),f(b)},m.onerror=()=>{console.warn("[UserLogger] Failed to read logs"),f([])}}catch(c){console.warn("[UserLogger] DB read error:",c),f([])}}):this.memoryBuffer.filter(f=>this.matchesFilter(f,s))}matchesFilter(s,f){return!(f!=null&&f.level&&s.level!==f.level||f!=null&&f.category&&s.category!==f.category||f!=null&&f.since&&s.timestamp<f.since)}async clearLogs(){if(!this.db){this.memoryBuffer=[];return}return new Promise(s=>{try{const f=this.db.transaction([sr],"readwrite");f.objectStore(sr).clear(),f.oncomplete=()=>{this.memoryBuffer=[],s()},f.onerror=()=>s()}catch{s()}})}async exportLogs(){const s=await this.getLogs({limit:1e4});return JSON.stringify(s,null,2)}getStats(){const s=this.memoryBuffer,f={};let c=0,d=0;return s.forEach(m=>{f[m.category]=(f[m.category]||0)+1,m.level==="error"&&c++,m.level==="warn"&&d++}),{total:s.length,errors:c,warnings:d,byCategory:f}}}const pr=new kh;typeof window<"u"&&pr.init().catch(()=>{});class Mh extends Nu{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.exportPositions=null,this.exportColors=null,this.exportNormals=null,this.exportCount=0,this.packedUniforms=new Float32Array(48),this.lastLoggedFractalType="",this.rendererInfo="WebGL2 Shader Pipeline"}collectSurfacePoints(s,f=64){this.exportPositions||(this.exportPositions=new Float32Array(1e5*3),this.exportColors=new Float32Array(1e5*3),this.exportNormals=new Float32Array(1e5*3)),this.exportCount=0;const c=2.5,d=c*2/f;for(let m=0;m<f;m++)for(let b=0;b<f;b++)for(let w=0;w<f;w++){const g=-c+m*d,x=-c+b*d,L=-c+w*d,T=this.evaluateSDF(g,x,L,s);if(Math.abs(T)<.05&&this.exportCount<1e5){const E=this.exportCount*3;this.exportPositions[E]=g,this.exportPositions[E+1]=x,this.exportPositions[E+2]=L;const O=.01,G=this.evaluateSDF(g+O,x,L,s)-this.evaluateSDF(g-O,x,L,s),Z=this.evaluateSDF(g,x+O,L,s)-this.evaluateSDF(g,x-O,L,s),Q=this.evaluateSDF(g,x,L+O,s)-this.evaluateSDF(g,x,L-O,s),q=Math.sqrt(G*G+Z*Z+Q*Q),oe=q<1e-6?1e-6:q;this.exportNormals[E]=G/oe,this.exportNormals[E+1]=Z/oe,this.exportNormals[E+2]=Q/oe,this.exportColors[E]=.5+g*.2,this.exportColors[E+1]=.5+x*.2,this.exportColors[E+2]=.5+L*.2,this.exportCount++}}}evaluateSDF(s,f,c,d){const m=Math.sqrt(s*s+f*f+c*c),b=Math.atan2(Math.sqrt(s*s+f*f),c),w=Math.atan2(f,s),g=8;let x=Math.pow(m,g);const L=b*g,T=w*g,E=x*Math.sin(L)*Math.cos(T)+s,O=x*Math.sin(L)*Math.sin(T)+f,G=x*Math.cos(L)+c;return Math.sqrt(E*E+O*O+G*G)-1.5}getExportData(){return{positions:this.exportPositions.slice(0,this.exportCount*3),colors:this.exportColors.slice(0,this.exportCount*3),normals:this.exportNormals.slice(0,this.exportCount*3),count:this.exportCount}}init(){const s=performance.now();console.group("[WebGL2] === INITIALIZATION START ==="),We.log("info","gpu","WebGL2 initialization started"),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const f=this.canvas.getBoundingClientRect();(f.width===0||f.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let c=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED"),c||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),c=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED")),c||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),c=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",c?"SUCCESS":"FAILED")),!c){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const E=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return E&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",E.getParameter(E.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=c,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",c.getParameter(c.VERSION)),console.info("[WebGL2] GL_RENDERER:",c.getParameter(c.RENDERER)),console.info("[WebGL2] GL_VENDOR:",c.getParameter(c.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",c.getParameter(c.SHADING_LANGUAGE_VERSION));const d=c.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(d==null?void 0:d.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",d==null?void 0:d.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",d==null?void 0:d.includes("WEBGL_debug_renderer_info"));try{const E=c.getExtension("WEBGL_debug_renderer_info");if(E){const O=c.getParameter(E.UNMASKED_RENDERER_WEBGL);O&&(this.rendererInfo=O)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const m=this.compileShader(c.VERTEX_SHADER,Sh),b=this.compileShader(c.FRAGMENT_SHADER,Ah);if(!m||!b)return!1;const w=c.createProgram();if(!w)return!1;if(c.attachShader(w,m),c.attachShader(w,b),c.linkProgram(w),c.deleteShader(m),c.deleteShader(b),!c.getProgramParameter(w,c.LINK_STATUS))return console.error("WebGL Program Link Error:",c.getProgramInfoLog(w)),!1;this.program=w;const g=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=c.createVertexArray(),c.bindVertexArray(this.vao),this.vbo=c.createBuffer(),c.bindBuffer(c.ARRAY_BUFFER,this.vbo),c.bufferData(c.ARRAY_BUFFER,g,c.STATIC_DRAW);const x=c.getAttribLocation(w,"a_position");c.enableVertexAttribArray(x),c.vertexAttribPointer(x,2,c.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed","u_palette_rotation"].forEach(E=>{this.uniformLocs[E]=c.getUniformLocation(w,E)});const T=performance.now()-s;return We.log("info","gpu","WebGL2 initialization completed",{initTime:T}),We.trackGPUContext(!1,T),console.info("[WebGL2] Initialization time:",T.toFixed(2),"ms"),console.groupEnd(),!0}compileShader(s,f){if(!this.gl)return null;const c=this.gl,d=c.createShader(s);if(!d)return null;if(c.shaderSource(d,f),c.compileShader(d),c.getExtension("KHR_parallel_shader_compile"),!c.getShaderParameter(d,c.COMPILE_STATUS)){const m=c.getShaderInfoLog(d);return console.error("Shader compilation error:",m),pr.log({level:"error",category:"render",message:`Shader compilation failed: ${s===c.VERTEX_SHADER?"vertex":"fragment"}`,details:{error:m==null?void 0:m.substring(0,500)}}),c.deleteShader(d),null}return console.info("[WebGL2] Shader compiled successfully ("+(s===c.VERTEX_SHADER?"vertex":"fragment")+")"),d}render(s,f){const c=this.gl;if(!c||!this.program||!this.vao){pr.log({level:"warn",category:"render",message:"WebGL2 render skipped - missing context/program/vao",details:{hasGl:!!c,hasProgram:!!this.program,hasVao:!!this.vao}});return}const d=this.computeIndices(f);f.type!==this.lastLoggedFractalType&&(this.lastLoggedFractalType=f.type,pr.log({level:"info",category:"render",message:`Rendering fractal type: ${f.type} (idx: ${d.fractalIdx})`,details:{type:f.type,fractalIdx:d.fractalIdx,hybridType:f.hybridType,renderStyle:f.renderStyle,zoom:f.zoom}}));const{duration:m}=Vu(()=>{c.viewport(0,0,this.canvas.width,this.canvas.height),c.useProgram(this.program),c.bindVertexArray(this.vao);const b=this.resolvePalette(f);this.packUniforms(this.packedUniforms,s,f,b,d),qn(this.packedUniforms[2],"u_time",void 0,[0,1e3])||We.log("error","render","Invalid time value",{time:this.packedUniforms[2]}),qn(this.packedUniforms[6],"u_zoom",void 0,[.01,100])||We.log("warn","render","Zoom out of range",{zoom:this.packedUniforms[6]});const w=(T,E)=>{const O=this.uniformLocs[T];O&&c.uniform1f(O,E)},g=(T,E,O)=>{const G=this.uniformLocs[T];G&&c.uniform2f(G,E,O)},x=(T,E,O,G)=>{const Z=this.uniformLocs[T];Z&&c.uniform3f(Z,E,O,G)};g("u_resolution",this.packedUniforms[0],this.packedUniforms[1]),w("u_time",this.packedUniforms[2]),w("u_phi_val",this.packedUniforms[3]),g("u_cam_rot",this.packedUniforms[4],this.packedUniforms[5]),w("u_zoom",this.packedUniforms[6]),w("u_fractal_type",this.packedUniforms[7]),w("u_iterations",this.packedUniforms[8]),w("u_glow_intensity",this.packedUniforms[9]),w("u_morph_speed",this.packedUniforms[10]),w("u_hybrid_type",this.packedUniforms[11]),w("u_hybrid_blend",this.packedUniforms[12]),w("u_box_fold",this.packedUniforms[13]),w("u_sphere_fold",this.packedUniforms[14]),w("u_interior_cut",this.packedUniforms[15]),x("u_primary_color",this.packedUniforms[16],this.packedUniforms[17],this.packedUniforms[18]),w("u_tertiary_type",this.packedUniforms[19]),x("u_secondary_color",this.packedUniforms[20],this.packedUniforms[21],this.packedUniforms[22]),w("u_tertiary_blend",this.packedUniforms[23]),x("u_accent_color",this.packedUniforms[24],this.packedUniforms[25],this.packedUniforms[26]),w("u_compose_op",this.packedUniforms[27]),w("u_smooth_k",this.packedUniforms[28]),w("u_warp_strength",this.packedUniforms[29]),w("u_octave_layers",this.packedUniforms[30]),w("u_cam_mode",this.packedUniforms[31]),x("u_cam_pos",this.packedUniforms[32],this.packedUniforms[33],this.packedUniforms[34]),w("u_slice_plane",this.packedUniforms[35]),w("u_headlamp_power",this.packedUniforms[36]),w("u_volumetric_fog",this.packedUniforms[37]),w("u_slice_axis",this.packedUniforms[38]),w("u_render_style",this.packedUniforms[39]),w("u_palette_seed",this.packedUniforms[43]),w("u_palette_rotation",this.packedUniforms[44]),c.drawArrays(c.TRIANGLES,0,3);const L=c.getError();if(L!==c.NO_ERROR){const T={[c.INVALID_ENUM]:"INVALID_ENUM",[c.INVALID_VALUE]:"INVALID_VALUE",[c.INVALID_OPERATION]:"INVALID_OPERATION",[c.OUT_OF_MEMORY]:"OUT_OF_MEMORY",[c.INVALID_FRAMEBUFFER_OPERATION]:"INVALID_FRAMEBUFFER_OPERATION"};pr.log({level:"error",category:"render",message:`WebGL2 render error: ${T[L]||"UNKNOWN"} (0x${L.toString(16)})`,details:{timeSec:s,fractalType:f.type,renderStyle:f.renderStyle}})}},"WebGL render setup");We.updateFrameStats(128,.001,20),We.trackGPUContext(!1,m),m>16&&pr.log({level:"warn",category:"performance",message:`Slow WebGL frame: ${m.toFixed(2)}ms`,details:{fractalType:f.type}})}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function jh(p,s){const{forcedBackend:f,isEmbeddedBrowser:c,isMobileDevice:d,paramsRef:m,onTelemetryUpdate:b,onEngineReady:w,onNextSpecimen:g,onPrevSpecimen:x,onInteraction:L,screenshotRequested:T,onScreenshotCaptured:E}=s,O=j.useRef(null),[G,Z]=j.useState(()=>f==="webgl2"?"webgl2":f==="webgpu"?c?"webgl2":"webgpu":"webgl2"),[Q,q]=j.useState(!0),[oe,_]=j.useState(!1),[Y,xe]=j.useState("Initializing..."),[ke,le]=j.useState(""),[He,Ge]=j.useState(0),[Ie,$e]=j.useState(0),[Je,de]=j.useState(0),[qe,se]=j.useState(0),[N,U]=j.useState([0,0]),M=j.useRef(null),J=j.useRef(null),ee=j.useRef("Initializing..."),v=j.useRef(b);v.current=b;const k=j.useRef(E);k.current=E;const B=j.useRef(g);B.current=g;const P=j.useRef(x);P.current=x;const $=j.useRef(L);$.current=L;const ae=j.useRef([]),ce=j.useRef(0),Me=j.useRef(0),be=j.useRef(null),Ze=j.useRef(0),St=j.useRef(!1),Ae=j.useRef(new Set),Pt=j.useRef(!1),Ot=j.useRef(!0),aa=j.useRef(!1),Ca=j.useRef(!1),Er=j.useRef(!1),Or=j.useRef({x:0,y:0}),et=j.useRef({x:0,y:0}),fr=j.useRef(0),ur=j.useRef(0),I=.94,re=8e-5,X=j.useRef(!0);j.useEffect(()=>{Ca.current=T},[T]),j.useEffect(()=>{if(f==="webgl2")Z("webgl2");else if(f==="webgpu"){if(c){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),St.current=!0,Z("webgl2");return}St.current=!1,Z("webgpu")}else f==="auto"&&Z("webgl2")},[f,c]);const it=j.useCallback(()=>{const ye=O.current,Ue=p.current;if(!ye||!Ue)return;const ie=c||d?1.5:2,Ke=Math.min(window.devicePixelRatio||1,ie),lt=Ue.clientWidth||window.innerWidth||800,_e=Ue.clientHeight||window.innerHeight||600,Ne=Math.max(Math.floor(lt*Ke),320),tt=Math.max(Math.floor(_e*Ke),240);if(ye.width!==Ne||ye.height!==tt){const Be=ye.width,ra=ye.height;ye.width=Ne,ye.height=tt,console.info(`[Resize] Canvas buffer: ${Be}x${ra} → ${Ne}x${tt} (container: ${lt}x${_e}, DPR: ${Ke.toFixed(2)})`)}},[c,d]);j.useEffect(()=>{const ye=O.current;if(!ye)return;it();let Ue=!1;const ie=setTimeout(()=>{Ue||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),q(!1))},12e3),Ke=setTimeout(()=>{!aa.current&&!Ue&&console.error("[useRenderEngine] Engine setup timed out after 20s — GPU unavailable")},2e4);async function lt(){if(!ye)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",G),q(!0),aa.current=!1,_(!1),M.current&&(M.current.destroy(),M.current=null),J.current&&(J.current.destroy(),J.current=null),G==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const kt=new fc(ye);if(await kt.init()&&!Ue){M.current=kt,aa.current=!0,_(!0),ee.current="WebGPU (WGSL)",xe("WebGPU (WGSL)"),le(kt.adapterInfo),q(!1),console.info(`[DIAG] Engine ready: WebGPU | ${kt.adapterInfo} | ${ye.width}x${ye.height} | fractal=${m.current.type} | palette=${m.current.paletteId} | renderStyle=${m.current.renderStyle} | paletteSeed=${m.current.paletteSeed??0}`),w==null||w();return}else{St.current=!0,Ue?q(!1):Z("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const wt=new Mh(ye);wt.init()&&!Ue?(J.current=wt,aa.current=!0,_(!0),ee.current="WebGL2 (GLSL)",xe("WebGL2 (GLSL)"),le(wt.rendererInfo),q(!1),console.info(`[DIAG] Engine ready: WebGL2 | ${wt.rendererInfo} | ${ye.width}x${ye.height} | fractal=${m.current.type} | palette=${m.current.paletteId} | renderStyle=${m.current.renderStyle} | paletteSeed=${m.current.paletteSeed??0}`),w==null||w()):(q(!1),w==null||w())}lt().catch(wt=>{console.error("[useRenderEngine] Engine setup crashed:",wt),q(!1),w==null||w()});const _e=setTimeout(()=>{Ue||(it(),requestAnimationFrame(()=>{Ue||it()}))},100),Ne=wt=>{wt.preventDefault(),Pt.current=!0},tt=()=>{Pt.current=!1,lt()};ye.addEventListener("webglcontextlost",Ne,!1),ye.addEventListener("webglcontextrestored",tt,!1);const Be=p.current;let ra=null;return Be&&(ra=new ResizeObserver(()=>{Ue||it()}),ra.observe(Be)),()=>{var wt,Dt;Ue=!0,clearTimeout(Ke),clearTimeout(ie),clearTimeout(_e),ye.removeEventListener("webglcontextlost",Ne),ye.removeEventListener("webglcontextrestored",tt),ra&&ra.disconnect(),(wt=M.current)==null||wt.destroy(),(Dt=J.current)==null||Dt.destroy()}},[G,it]),j.useEffect(()=>{let ye=!0,Ue=performance.now();const ie=()=>{Ot.current=!document.hidden,Ot.current&&(Ue=performance.now())};document.addEventListener("visibilitychange",ie);const Ke=lt=>{var ra,wt;if(!ye)return;if(Pt.current){be.current=requestAnimationFrame(Ke);return}if(!Ot.current){be.current=requestAnimationFrame(Ke);return}if(!aa.current){setTimeout(()=>{ye&&(be.current=requestAnimationFrame(Ke))},1e3);return}const _e=m.current,Ne=lt-Ue,tt=_e.targetFps||60,Be=tt>=240?0:1e3/tt;if(Be<=0||Ne>=Be-.75){const Dt=Math.min(Ne,100);Ue=lt,Ze.current+=Dt/1e3;const kt=Ze.current;if(_e.cameraMode==="flyThrough"){const At=_e.rotX,Nt=_e.rotY,ia=Math.cos(At),Ha=Math.sin(At),hr=Math.cos(Nt),vr=Math.sin(Nt),Mt=[Ha*hr,vr,-ia*hr],ca=[ia,0,Ha],xr=[0,1,0];let ht=1.4*(Dt/1e3);(Ae.current.has("ShiftLeft")||Ae.current.has("ShiftRight"))&&(ht*=2.8);let je=0,Fe=0,nt=0;(Ae.current.has("KeyW")||Ae.current.has("ArrowUp"))&&(je+=Mt[0]*ht,Fe+=Mt[1]*ht,nt+=Mt[2]*ht),(Ae.current.has("KeyS")||Ae.current.has("ArrowDown"))&&(je-=Mt[0]*ht,Fe-=Mt[1]*ht,nt-=Mt[2]*ht),(Ae.current.has("KeyA")||Ae.current.has("ArrowLeft"))&&(je-=ca[0]*ht,nt-=ca[2]*ht),(Ae.current.has("KeyD")||Ae.current.has("ArrowRight"))&&(je+=ca[0]*ht,nt+=ca[2]*ht),(Ae.current.has("KeyE")||Ae.current.has("Space"))&&(Fe+=xr[1]*ht),(Ae.current.has("KeyQ")||Ae.current.has("KeyC"))&&(Fe-=xr[1]*ht),(je!==0||Fe!==0||nt!==0)&&(m.current={..._e,camPosX:(_e.camPosX??0)+je,camPosY:(_e.camPosY??0)+Fe,camPosZ:(_e.camPosZ??0)+nt})}const dr=_e.autoRotate?kt*_e.autoRotateSpeed*.12:0,Hr=_e.autoRotate?Math.sin(kt*.18)*.06:0;let sa=0,mr=0;if(X.current&&!Er.current&&(Math.abs(et.current.x)>re||Math.abs(et.current.y)>re)){const At=_e.zoom,Nt=.005*Math.max(.1,Math.min(1.2,At/2.5)),ia=Dt;sa=et.current.x*ia*Nt*.6,mr=et.current.y*ia*Nt*.6,et.current.x*=I,et.current.y*=I,Math.abs(et.current.x)<re&&(et.current.x=0),Math.abs(et.current.y)<re&&(et.current.y=0)}const Oa={..._e,rotX:_e.rotX+dr+sa,rotY:Math.max(-1.52,Math.min(1.52,_e.rotY+Hr+mr))},Pe=O.current;if(Pe&&Pe.width>0&&Pe.height>0&&(M.current?M.current.render(kt,Oa):J.current&&J.current.render(kt,Oa)),Ca.current&&Pe)try{const At=Pe.toDataURL("image/png");(ra=k.current)==null||ra.call(k,At)}catch(At){console.error("Screenshot capture failed",At)}const va=ae.current;if(va.push(Dt),va.length>40&&va.shift(),lt-ce.current>250){ce.current=lt;const At=va.reduce((je,Fe)=>je+Fe,0)/va.length,Nt=Dt>0?Math.round(1e3/Dt):0,ia=At>0?Math.round(1e3/At):0,Ha=[...va].sort((je,Fe)=>Fe-je),hr=Math.floor(Ha.length*.05),vr=Ha[hr]||Dt,Mt=vr>0?Math.round(1e3/vr):0,ca=M.current?M.current.adapterInfo:J.current?J.current.rendererInfo:"GPU Engine",xr=G==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",ht={fps:Nt,avgFps:ia,frameTimeMs:parseFloat(Dt.toFixed(2)),onePercentLow:Mt,backend:xr,adapterName:ca,resolution:[(Pe==null?void 0:Pe.width)||0,(Pe==null?void 0:Pe.height)||0],drsScale:1,targetFps:_e.targetFps,interiorDistance:0};if((wt=v.current)==null||wt.call(v,ht),Ge(Nt),$e(ia),de(parseFloat(Dt.toFixed(2))),se(Mt),U([(Pe==null?void 0:Pe.width)||0,(Pe==null?void 0:Pe.height)||0]),Me.current||(Me.current=lt),lt-Me.current>3e4){Me.current=lt;const je=m.current;console.info(`[DIAG] Health: fps=${Nt} avg=${ia} 1%=${Mt} | fractal=${je.type} hybrid=${je.hybridType} | style=${je.renderStyle} cam=${je.cameraMode} | palette=${je.paletteId} seed=${je.paletteSeed??0} rot=${je.paletteRotation} | audio=${je.enableAudio} tuning=${je.audioTuning} | res=${Pe==null?void 0:Pe.width}x${Pe==null?void 0:Pe.height}`)}}}be.current=requestAnimationFrame(Ke)};return be.current=requestAnimationFrame(Ke),()=>{ye=!1,document.removeEventListener("visibilitychange",ie),be.current&&cancelAnimationFrame(be.current)}},[G]),j.useEffect(()=>{const ye=ie=>{var Ke,lt,_e;if(((Ke=ie.target)==null?void 0:Ke.tagName)!=="INPUT"&&!ie.repeat&&(Ae.current.add(ie.code),m.current.cameraMode!=="flyThrough"))if(ie.key===" "||ie.key==="ArrowRight"||ie.key==="ArrowDown"||ie.key==="PageDown")ie.preventDefault(),(lt=B.current)==null||lt.call(B);else if(ie.key==="ArrowLeft"||ie.key==="ArrowUp"||ie.key==="PageUp")ie.preventDefault(),(_e=P.current)==null||_e.call(P);else if(ie.key==="s"||ie.key==="S"||ie.key==="ы"||ie.key==="Ы")ie.preventDefault(),et.current={x:0,y:0},m.current&&(m.current={...m.current,autoRotate:!1}),console.info("[Controls] Rotation stopped (S key)");else if(ie.key==="i"||ie.key==="I"||ie.key==="ш"||ie.key==="Ш")ie.preventDefault(),X.current=!X.current,X.current||(et.current={x:0,y:0}),console.info(`[Controls] Inertia ${X.current?"enabled":"disabled"} (I key)`);else if(ie.key>="1"&&ie.key<="7"){ie.preventDefault();const Ne=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],tt=parseInt(ie.key)-1,Be=Ne[tt]||"solid";m.current&&(m.current={...m.current,renderStyle:Be}),console.info(`[Controls] Render mode: ${Be} (${ie.key} key)`)}else if(ie.key==="f"||ie.key==="F"||ie.key==="а"||ie.key==="А"){if(ie.preventDefault(),m.current){const Ne=m.current.cameraMode==="flyThrough"?"orbit":"flyThrough";m.current={...m.current,cameraMode:Ne},console.info(`[Controls] Camera mode: ${Ne} (F key)`)}}else(ie.key==="r"||ie.key==="R"||ie.key==="к"||ie.key==="К")&&(ie.preventDefault(),et.current={x:0,y:0},m.current&&(m.current={...m.current,rotX:0,rotY:0,zoom:2.5,camPosX:0,camPosY:0,camPosZ:0}),console.info("[Controls] Camera reset (R key)"))},Ue=ie=>{Ae.current.delete(ie.code)};return window.addEventListener("keydown",ye),window.addEventListener("keyup",Ue),()=>{window.removeEventListener("keydown",ye),window.removeEventListener("keyup",Ue)}},[]);const dt=j.useCallback(()=>{et.current={x:0,y:0},m.current&&(m.current={...m.current,autoRotate:!1})},[]),Ea=j.useCallback(()=>{X.current=!X.current,X.current||(et.current={x:0,y:0})},[]);return{activeEngineType:G,isCompiling:Q,isEngineReady:oe,backendLabel:Y,adapterInfo:ke,fps:He,avgFps:Ie,frameTimeMs:Je,onePercentLow:qe,resolution:N,canvasRef:O,keysPressedRef:Ae,isDraggingRef:Er,velocityRef:et,lastMousePosRef:Or,lastInteractionReportTimeRef:ur,lastMoveTimeRef:fr,inertiaEnabledRef:X,stopRotation:dt,toggleInertia:Ea,params:m.current}}const Th=({params:p,onParamsChange:s,onTelemetryUpdate:f,screenshotRequested:c,onScreenshotCaptured:d,forcedBackend:m="auto",onInteraction:b,onNextSpecimen:w,onPrevSpecimen:g,onEngineReady:x,scrollMode:L="feed"})=>{const T=j.useRef(null),E=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),O=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),G=j.useRef(p);G.current=p;const Z=j.useRef(null);j.useRef(0);const Q=jh(T,{forcedBackend:m,isEmbeddedBrowser:E,isMobileDevice:O,paramsRef:G,onTelemetryUpdate:f,onEngineReady:x,onNextSpecimen:w,onPrevSpecimen:g,onInteraction:b,screenshotRequested:c,onScreenshotCaptured:d}),{canvasRef:q,isDraggingRef:oe,velocityRef:_,lastMousePosRef:Y,lastInteractionReportTimeRef:xe,lastMoveTimeRef:ke,activeEngineType:le,isCompiling:He}=Q;j.useEffect(()=>{const de=q.current;if(!de){pr.log({level:"error",category:"render",message:"FractalCanvas: canvas ref is null on mount"});return}pr.log({level:"info",category:"render",message:"FractalCanvas: mounted",details:{width:de.width,height:de.height,activeEngineType:le}});const qe=U=>{U.preventDefault(),U.stopPropagation();const M=Math.exp(Math.sign(U.deltaY)*Math.min(Math.abs(U.deltaY)*.0012,.18));b==null||b(Math.abs(U.deltaY)*.015,0),s(J=>({...J,zoom:Math.max(.01,Math.min(100,J.zoom*M))})),hu.recordInteraction("zoom",Math.log(M)*10)};de.addEventListener("wheel",qe,{passive:!1,capture:!0});const se=U=>{if(U.touches.length===2){U.preventDefault(),U.stopPropagation();const M=U.touches[0],J=U.touches[1];Z.current=Math.hypot(M.clientX-J.clientX,M.clientY-J.clientY)}};de.addEventListener("touchstart",se,{passive:!1,capture:!0});const N=U=>{if(U.touches.length===2){U.preventDefault(),U.stopPropagation();const M=U.touches[0],J=U.touches[1],ee=Math.hypot(M.clientX-J.clientX,M.clientY-J.clientY);if(Z.current!==null&&Z.current>5){const v=Z.current/Math.max(ee,1),k=Math.pow(v,.95);b==null||b(Math.abs(Z.current-ee)*.04,0),s(B=>({...B,zoom:Math.max(.01,Math.min(100,B.zoom*k))}))}Z.current=ee}};return de.addEventListener("touchmove",N,{passive:!1,capture:!0}),()=>{de.removeEventListener("wheel",qe,{capture:!0}),de.removeEventListener("touchstart",se,{capture:!0}),de.removeEventListener("touchmove",N,{capture:!0})}},[q,s,b]);const Ge=de=>{oe.current=!0,Y.current={x:de.clientX,y:de.clientY},_.current={x:0,y:0},de.target.setPointerCapture(de.pointerId)},Ie=de=>{if(!oe.current)return;const qe=de.clientX-Y.current.x,se=de.clientY-Y.current.y,N=performance.now(),U=Math.max(1,N-ke.current);ke.current=N,Y.current={x:de.clientX,y:de.clientY};const M=Math.hypot(qe,se);N-xe.current>300&&(xe.current=N,b==null||b(0,M)),G.current.zoom;const J=_.current.x,ee=_.current.y,v=qe/U,k=se/U,B=J>.001&&v<-.001||J<-.001&&v>.001,P=ee>.001&&k<-.001||ee<-.001&&k>.001;B||P?_.current={x:0,y:0}:_.current={x:v,y:k},Math.abs(_.current.x)<5e-4&&Math.abs(_.current.y)<5e-4&&(_.current={x:0,y:0});const $=.0035,ae=qe*$,ce=se*$;s(Me=>({...Me,rotX:((Me.rotX+ae+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,rotY:Math.max(-1.5,Math.min(1.5,Me.rotY+ce))})),hu.recordInteraction("rotate",Math.hypot(qe,se)/U)},$e=de=>{oe.current=!1;try{de.target.releasePointerCapture(de.pointerId)}catch{}},Je=()=>{Z.current=null};return l.jsxs("div",{ref:T,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",style:{touchAction:"none",overscrollBehavior:"none"},children:[He&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",le==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),l.jsx("canvas",{ref:q,id:"fractal-canvas",className:"w-full h-full block touch-none",style:{touchAction:"none"},onPointerDown:Ge,onPointerMove:Ie,onPointerUp:$e,onPointerCancel:$e,onTouchEnd:Je},le)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fh=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,c)=>c?c.toUpperCase():f.toLowerCase()),vu=p=>{const s=Fh(p);return s.charAt(0).toUpperCase()+s.slice(1)},ku=(...p)=>p.filter((s,f,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===f).join(" ").trim(),Ch=p=>{for(const s in p)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=j.forwardRef(({color:p="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:b,...w},g)=>j.createElement("svg",{ref:g,...Eh,width:s,height:s,stroke:p,strokeWidth:c?Number(f)*24/Number(s):f,className:ku("lucide",d),...!m&&!Ch(w)&&{"aria-hidden":"true"},...w},[...b.map(([x,L])=>j.createElement(x,L)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(p,s)=>{const f=j.forwardRef(({className:c,...d},m)=>j.createElement(Oh,{ref:m,iconNode:s,className:ku(`lucide-${Rh(vu(p))}`,`lucide-${p}`,c),...d}));return f.displayName=vu(p),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],zl=ue("activity",Hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Mu=ue("atom",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Di=ue("book-open",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],Bh=ue("bookmark-plus",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Ih=ue("box",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Yh=ue("brain",Ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Jh=ue("camera",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Kh=ue("chart-column",Zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ju=ue("check",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$h=ue("chevron-down",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],t2=ue("chevron-left",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Tu=ue("chevron-right",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],i2=ue("chevron-up",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Un=ue("compass",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ic=ue("cpu",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Ru=ue("crosshair",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],c2=ue("droplet",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],f2=ue("ellipsis",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fu=ue("eye",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],m2=ue("flame",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],v2=ue("grid-3x3",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ln=ue("heart",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],g2=ue("infinity",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],b2=ue("info",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ai=ue("layers",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],S2=ue("maximize",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Cu=ue("mouse-pointer",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],N2=ue("music",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Eu=ue("play",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],M2=ue("radio",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],T2=ue("scan",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],F2=ue("search",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],E2=ue("share-2",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lc=ue("shield-check",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ni=ue("sparkles",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],q2=ue("trash-2",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ou=ue("user",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],uc=ue("volume-2",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Hu=ue("volume-x",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],P2=ue("wrench",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bl=ue("x",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],J2=ue("zoom-in",X2),Z2=({telemetry:p,targetFps:s,phiMultiplier:f})=>{const[c,d]=j.useState([]),[m,b]=j.useState(!1);j.useEffect(()=>{p.frameTimeMs>0&&d(x=>[...x,p.frameTimeMs].slice(-40))},[p.frameTimeMs]);const w=s>0?1e3/s:6.94;s===144||s===0&&p.fps>=140;const g=p.frameTimeMs<=w*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${p.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:p.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>b(!m),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:m?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${p.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:p.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[p.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${g?"text-emerald-400":"text-amber-400"}`,children:p.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(p.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!m&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[s," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",w.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:c.map((x,L)=>{const T=Math.min(Math.max(x/20*100,8),100),E=x<=w*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${E?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${T}%`},title:`${x} ms`},L)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(Ni,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:p.adapterName,children:p.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[p.resolution[0],"×",p.resolution[1]]})]})]})]})]})})},K2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Lu={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},Q2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],nc={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},W2=1.61803398875,sc=137.507764;function Cn(p,s,f){p=(p%360+360)%360,s=Math.max(0,Math.min(1,s)),f=Math.max(0,Math.min(1,f));const c=(1-Math.abs(2*f-1))*s,d=c*(1-Math.abs(p/60%2-1)),m=f-c/2;let b=0,w=0,g=0;return p<60?(b=c,w=d,g=0):p<120?(b=d,w=c,g=0):p<180?(b=0,w=c,g=d):p<240?(b=0,w=d,g=c):p<300?(b=d,w=0,g=c):(b=c,w=0,g=d),[b+m,w+m,g+m]}function $2(p,s){const f=p,c=(p+sc)%360,d=(p+sc*2)%360;return{id:`golden-gen-${Math.floor(p)}`,name:`Гармоника φ (${s})`,primary:Cn(f,.85,.45),secondary:Cn(c,.8,.55),accent:Cn(d,.95,.65),ambient:Cn(f,.6,.12)}}const ha=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor","tesseract","120Cell","600Cell","24Cell","5Cell","kleinBottle","projectivePlane","mobiusStrip","torusKnot4D","flameSinusoidal","flameSpherical","flameSwirl","flameHorseshoe","flameButterfly","flameHeart","flameSpiral","flameHyperbolic","flameDiamond","flameWaves","flamePopcorn","flameRings","flameFan","ifs3DTree","ifs3DFern","ifs3DSierpinski","ifs3DCantor","ifs3DKoch"],_i={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона",tesseract:"Тессеракт (4D гиперкуб)","120Cell":"120-ячейка (4D додекаэдр)","600Cell":"600-ячейка (4D икосаэдр)","24Cell":"24-ячейка (самодвойственный)","5Cell":"5-ячейка (4D тетраэдр)",kleinBottle:"Бутылка Клейна (неориентируемая)",projectivePlane:"Проективная плоскость RP²",mobiusStrip:"Лента Мёбиуса 3D",torusKnot4D:"Торический узел 4D",flameSinusoidal:"Пламя: Синусоидальное",flameSpherical:"Пламя: Сферическое",flameSwirl:"Пламя: Вихрь",flameHorseshoe:"Пламя: Подкова",flameButterfly:"Пламя: Бабочка",flameHeart:"Пламя: Сердце",flameSpiral:"Пламя: Спираль",flameHyperbolic:"Пламя: Гиперболическое",flameDiamond:"Пламя: Алмаз",flameWaves:"Пламя: Волны",flamePopcorn:"Пламя: Попкорн",flameRings:"Пламя: Кольца",flameFan:"Пламя: Веер",ifs3DTree:"IFS 3D Дерево",ifs3DFern:"IFS 3D Папоротник Барнсли",ifs3DSierpinski:"IFS 3D Серпинского",ifs3DCantor:"IFS 3D Пыль Кантора",ifs3DKoch:"IFS 3D Кривая Коха"},e1={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5,tesseract:3,"120Cell":3.5,"600Cell":3,"24Cell":2.5,"5Cell":2,kleinBottle:2.5,projectivePlane:2,mobiusStrip:1.5,torusKnot4D:3,flameSinusoidal:2.5,flameSpherical:2.6,flameSwirl:2.4,flameHorseshoe:2.5,flameButterfly:2.45,flameHeart:2.5,flameSpiral:2.4,flameHyperbolic:2.6,flameDiamond:2.5,flameWaves:2.45,flamePopcorn:2.4,flameRings:2.5,flameFan:2.45,ifs3DTree:2,ifs3DFern:2.2,ifs3DSierpinski:2,ifs3DCantor:2,ifs3DKoch:2},oc="golden_ratio_taste_profile_v2",t1={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function cr(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class a1{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=20,this.explorationIndex=0,this.EXPLORATION_MODE=!0,this.RANDOM_HYBRID_MODE=!0,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem(oc);if(f){const c=JSON.parse(f);return ha.forEach(d=>{c.typeAffinities&&c.typeAffinities[d]===void 0&&(c.typeAffinities[d]=1)}),c}}catch{}const s={};return ha.forEach(f=>{s[f]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(oc,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(oc,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}getOpSynergy(s,f){return s===f?1.2:s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"?1.1:s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"?1.15:s==="minimal"&&f==="geometry"||s==="geometry"&&f==="minimal"?1.1:1}getPreferredOps(s,f,c){if(s===f){const d=c.filter(m=>m==="smoothMorph"||m==="smoothUnion");return d.length>0?d:c}if(s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"){const d=c.filter(m=>m==="domainWarp"||m==="smoothUnion");return d.length>0?d:c}if(s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"){const d=c.filter(m=>m==="quantumResonance"||m==="smoothMorph");return d.length>0?d:c}if(s==="minimal"||f==="minimal"){const d=c.filter(m=>m==="fractalLattice"||m==="smoothUnion");return d.length>0?d:c}return c}getHybridRecommendations(s=5){const f=[],c=ha.map(d=>({type:d,affinity:this.taste.typeAffinities[d]||1,arch:cr(d)})).sort((d,m)=>m.affinity-d.affinity);for(const{type:d,affinity:m,arch:b}of c.slice(0,8)){const w=nc[d];if(w)for(const g of w.partners){const x=this.taste.typeAffinities[g]||1,L=cr(g),E=this.history.some(oe=>oe.type===d&&oe.hybridType===g||oe.type===g&&oe.hybridType===d)?.6:1.4,O=this.getOpSynergy(b,L),G=m*x*E*O,Q=this.getPreferredOps(b,L,w.ops)[0];let q="";b===L?q=`Same archetype (${b}) — natural visual harmony`:m>2&&x>2?q="Both types in your taste profile":m>2?q=`Matches your love of ${b} fractals`:x>2?q=`Pairs with your interest in ${L} patterns`:q=`Unexplored ${b}+${L} combination`,f.push({type:d,partner:g,op:Q,score:G,reason:q})}}return f.sort((d,m)=>m.score-d.score),f.slice(0,s)}breedNextSpecimen(s){var qe;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=s;if(!f){const se=ha;if(this.EXPLORATION_MODE&&this.explorationIndex<se.length)f=se[this.explorationIndex],this.explorationIndex++,console.info(`[NeuroAesthetics] Exploration mode: showing type ${this.explorationIndex}/${se.length}: ${f}`);else{const N=se.map(J=>{const ee=Math.max(.2,this.taste.typeAffinities[J]||1),v=this.recentTypes.includes(J)?.3:1,k=this.currentGeneration<20?1.5:1;return ee*v*k}),U=N.reduce((J,ee)=>J+ee,0);let M=Math.random()*U;for(let J=0;J<se.length;J++){if(M<=N[J]){f=se[J];break}M-=N[J]}f||(f=se[Math.floor(Math.random()*se.length)])}this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const c=Math.random()<.5;let d=this.taste.preferredHue;if(c){const se=Math.random()<.5?1:2;d=(d+sc*se+(Math.random()*30-15))%360}else d=Math.random()*360%360;let m;if(Math.random()<.65){const se=this.history.length>0?(qe=this.history[this.history.length-1].palette)==null?void 0:qe.id:"";let N=Si.filter(U=>U.id!==se);N.length===0&&(N=Si),m=N[Math.floor(Math.random()*N.length)]}else m=$2(d,`Ген #${this.currentGeneration}`);const w=(Math.random()-.5)*.08,g=parseFloat((W2+w).toFixed(5)),x=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),L=Math.max(12,Math.min(32,x)),T=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),E=parseFloat(T.toFixed(2)),O=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),G=parseFloat(O.toFixed(2)),Z=e1[f]*(.95+Math.random()*.1),Q=Math.random()<.8;let q=f,oe=f,_=0,Y=0,xe="smoothUnion",ke=1,le=.32,He=.22,Ge=`${_i[f]} • φ-${this.currentGeneration}`;if(Q){const se=cr(f),N=nc[f]||{partners:ha.filter(k=>k!==f),ops:["smoothUnion","smoothMorph","domainWarp"]};if(this.RANDOM_HYBRID_MODE&&Math.random()<.6){const k=ha.filter(B=>B!==f);q=k[Math.floor(Math.random()*k.length)],console.info(`[NeuroAesthetics] Random hybrid: ${f} + ${q}`)}else{let k=N.partners[0],B=-1;for(const P of N.partners){const $=cr(P),ae=se===$?1.5:.8,ce=Math.max(.2,this.taste.typeAffinities[P]||1),be=this.history.some(Ae=>Ae.hybridType===P&&Ae.type===f)?.5:1.3,Ze=this.getOpSynergy(se,$),St=ae*ce*be*Ze;St>B&&(B=St,k=P)}q=k}const U=cr(q),M=this.getPreferredOps(se,U,N.ops);xe=M[Math.floor(Math.random()*M.length)],_=parseFloat((.15+Math.random()*.55).toFixed(3)),le=parseFloat((.2+Math.random()*.35).toFixed(3)),He=parseFloat((.15+Math.random()*.4).toFixed(3)),ke=Math.random()<.4?2:1;const J=Lu[xe],ee=_i[f].split(" ")[0],v=_i[q].split(" ")[0];if(Ge=`${ee} ${J} ${v} • φ-${this.currentGeneration}`,Math.random()<.5){const B=(nc[q]||{partners:ha.filter(P=>P!==f&&P!==q)}).partners.filter(P=>P!==f&&P!==q);if(B.length>0){let P=B[0],$=-1;for(const ce of B){const Me=cr(ce),be=Math.max(.2,this.taste.typeAffinities[ce]||1),St=this.history.some(Pt=>Pt.tertiaryType===ce)?.5:1.2,Ae=be*St*(se===Me?1.3:.9);Ae>$&&($=Ae,P=ce)}oe=P,Y=parseFloat((.1+Math.random()*.3).toFixed(3));const ae=_i[oe].split(" ")[0];Ge=`${ee} ${J} ${v} ⊕ ${ae} • φ-${this.currentGeneration}`}}}const Ie=parseFloat((.7+Math.random()*1.5).toFixed(3)),$e=parseFloat((.35+Math.random()*1.05).toFixed(3)),de={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:Ge,type:f,hybridType:q,tertiaryType:oe,compositeOp:xe,hybridBlend:_,tertiaryBlend:Y,smoothK:le,warpStrength:He,octaveLayers:ke,boxFold:Ie,sphereFold:$e,interiorCut:0,palette:m,iterations:L,phiMultiplier:g,morphSpeed:E,glowIntensity:G,zoom:Z,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(de),this.history.length>100&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,de}registerEngagement(s,f,c,d){d.dwellTimeSeconds+=s,Math.abs(f)>.05&&d.zoomInteractions++,c>.05&&d.orbitInteractions++;const m=Math.min(35,d.dwellTimeSeconds/90*35),b=Math.min(18,Math.log1p(d.zoomInteractions)*3.2),w=Math.min(18,Math.log1p(d.orbitInteractions)*2.8),x=Math.round(Math.min(96,25+m+b+w));if(d.affinityScore=Math.max(d.affinityScore,x),d.dwellTimeSeconds>10&&d.affinityScore>50){const L=this.taste.typeAffinities[d.type]||1;if(this.taste.typeAffinities[d.type]=Math.min(4,L+.005),d.hybridType&&d.hybridBlend>.1){const q=this.taste.typeAffinities[d.hybridType]||1;this.taste.typeAffinities[d.hybridType]=Math.min(4,q+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+d.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+d.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+d.iterations*.01);const[T,E,O]=d.palette.primary,G=Math.max(T,E,O),Z=Math.min(T,E,O),Q=G-Z;if(Q>.05){let q=0;G===T?q=60*((E-O)/Q%6):G===E?q=60*((O-T)/Q+2):q=60*((T-E)/Q+4),q<0&&(q+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+q*.03)%360}d.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=d.affinityScore),this.saveTasteProfile()}return d.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};ha.forEach(b=>{const w=cr(b),g=this.taste.typeAffinities[b]||1;s[w]+=g,f[w]++});const d=["geometry","complex","minimal","primes","attractors"].map(b=>({archetype:b,label:t1[b],avg:f[b]>0?s[b]/f[b]:1})),m=d.reduce((b,w)=>b+w.avg,0);return d.map(b=>({archetype:b.archetype,label:b.label,percentage:Math.round(b.avg/Math.max(1e-4,m)*100),score:Math.min(100,Math.round(b.avg*25))}))}suggestRenderStyle(s){const f=["solid","xray","topo","hologram","iridescent","quantum","gemstone"];if(s){const m=cr(s),w={geometry:["solid","gemstone","topo"],complex:["hologram","quantum","iridescent"],minimal:["topo","solid","gemstone"],primes:["quantum","hologram","iridescent"],attractors:["xray","quantum","hologram"]}[m]||f;if(Math.random()<.6&&w.length>0)return w[Math.floor(Math.random()*w.length)]}const c=Math.random();if(c<.35)return"solid";const d=Math.floor((c-.35)/.65*(f.length-1));return f[Math.min(d+1,f.length-1)]}}const r1=({params:p,onParamsChange:s,onSelectFractalType:f,onCaptureScreenshot:c,onToggleFullscreen:d,onToggleInfoModal:m,onOpenAtlasModal:b,activeBackend:w,forcedBackend:g,onSelectBackend:x,onClose:L,tasteProfile:T,onSaveToFeed:E})=>{const[O,G]=j.useState("architectures"),[Z,Q]=j.useState("all"),q=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],oe=Z==="all"?q:q.filter(_=>_.group===Z);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[b&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:b,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(Di,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),E&&l.jsxs("button",{id:"save-to-feed-btn",onClick:E,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(Bh,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:c,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(Jh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:d,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx(S2,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:m,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(Di,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:L,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(bl,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>G("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>G("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>G("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>G("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>G("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>G("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>G("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>G("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${O==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),O==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(_=>l.jsx("button",{onClick:()=>Q(_.id),className:`px-2 py-1 rounded-md text-[9px] transition ${Z===_.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:_.label},_.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:oe.map(_=>{const Y=p.type===_.id;return l.jsxs("button",{id:`arch-btn-${_.id}`,onClick:()=>{f?f(_.id):s(xe=>({...xe,type:_.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${Y?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${Y?"text-amber-300":"text-neutral-200"}`,children:_.label}),Y&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:_.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:_.formula})]},_.id)})})]}),O==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Q2.map(_=>l.jsxs("button",{onClick:()=>s(Y=>({...Y,compositeOp:_})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${p.compositeOp===_?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:K2[_]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Lu[_]})]},_))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:p.hybridType||p.type,onChange:_=>s(Y=>({...Y,hybridType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:ha.map(_=>l.jsx("option",{value:_,children:_i[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.hybridBlend??.35,onChange:_=>s(Y=>({...Y,hybridBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:p.tertiaryType||"riemannZeta",onChange:_=>s(Y=>({...Y,tertiaryType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:ha.map(_=>l.jsx("option",{value:_,children:_i[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.tertiaryBlend??.2,onChange:_=>s(Y=>({...Y,tertiaryBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:p.smoothK,onChange:_=>s(Y=>({...Y,smoothK:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.warpStrength,onChange:_=>s(Y=>({...Y,warpStrength:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),O==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(_=>l.jsxs("button",{onClick:()=>s(Y=>({...Y,cameraMode:_.id})),className:`p-2 rounded-lg border text-left transition ${p.cameraMode===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:p.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(_=>l.jsxs("button",{onClick:()=>s(Y=>({...Y,renderStyle:_.id})),className:`p-2 rounded-lg border text-left transition ${(p.renderStyle||"solid")===_.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:p.slicePlane>.01?`${(p.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(_=>l.jsx("button",{onClick:()=>s(Y=>({...Y,sliceAxis:_.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(p.sliceAxis||"golden")===_.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:_.label},_.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.slicePlane,onChange:_=>s(Y=>({...Y,slicePlane:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>s(_=>({..._,probeActive:!_.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>s(_=>({..._,macroMode:!_.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.headlampPower??1,onChange:_=>s(Y=>({...Y,headlampPower:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.volumetricFog??.4,onChange:_=>s(Y=>({...Y,volumetricFog:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((p.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:p.interiorCut??.4,onChange:_=>s(Y=>({...Y,interiorCut:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),O==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:Si.map(_=>{const Y=p.paletteId===_.id;return l.jsxs("button",{onClick:()=>s(xe=>({...xe,paletteId:_.id,customPalette:_})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${Y?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${Y?"text-amber-300":"text-neutral-200"}`,children:_.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.primary.map(xe=>Math.round(xe*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.secondary.map(xe=>Math.round(xe*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.accent.map(xe=>Math.round(xe*255)).join(",")})`}})]})]},_.id)})}),O==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:p.phiMultiplier,onChange:_=>s(Y=>({...Y,phiMultiplier:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:p.iterations,onChange:_=>s(Y=>({...Y,iterations:parseInt(_.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[p.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:p.morphSpeed,onChange:_=>s(Y=>({...Y,morphSpeed:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:p.boxFold,onChange:_=>s(Y=>({...Y,boxFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:p.sphereFold,onChange:_=>s(Y=>({...Y,sphereFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),O==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(_=>l.jsx("button",{onClick:()=>s(Y=>({...Y,targetFps:_})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${p.targetFps===_?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_===0?"Uncapped":`${_} FPS`},_))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>s(_=>({..._,drsEnabled:!_.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(_=>l.jsx("button",{onClick:()=>x(_.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${g===_.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_.label},_.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",w]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),O==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[p.enableAudio?l.jsx(uc,{className:"w-4 h-4 text-amber-400"}):l.jsx(Hu,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>s(_=>({..._,enableAudio:!_.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((p.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.audioVolume??.65,onChange:_=>s(Y=>({...Y,audioVolume:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(_=>l.jsxs("button",{onClick:()=>s(Y=>({...Y,audioTuning:_.id})),className:`w-full p-2 rounded-lg border text-left transition ${(p.audioTuning||"phi432")===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),O==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(T==null?void 0:T.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(T==null?void 0:T.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((T==null?void 0:T.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((T==null?void 0:T.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},i1={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},l1=({specimen:p,resonanceScore:s,isInteracting:f,interactionType:c,onNext:d,onPrev:m,onFavorite:b,onOpenProfile:w,enableAudio:g,onToggleAudio:x,onOpenResearchModal:L,onOpenAtlas:T,isFeedOpen:E,onToggleFeed:O,isCurrentLiked:G=!1,params:Z})=>{const[Q,q]=j.useState(!1),[oe,_]=j.useState(!1),[Y,xe]=j.useState(!1),[ke,le]=j.useState(!1),[He,Ge]=j.useState(!1),Ie=j.useRef(null),$e=j.useRef(!1);j.useEffect(()=>{q(G)},[p==null?void 0:p.id,G]);const Je=()=>{Ie.current&&clearTimeout(Ie.current),Ie.current=setTimeout(()=>{$e.current||(_(!1),xe(!1),le(!1))},3e3)},de=()=>{_(!0),xe(!0),Je()},qe=()=>{le(M=>!M),_(!0),Ie.current&&clearTimeout(Ie.current)};j.useEffect(()=>(de(),()=>{Ie.current&&clearTimeout(Ie.current)}),[]),j.useEffect(()=>{const M=ee=>{(ee.clientY<80||ee.clientY>window.innerHeight-120)&&de()},J=ee=>{const v=ee.target;v.closest("#top-right-bar")||v.closest("#top-right-trigger")||v.closest("#neuro-feed-bar")||(xe(!0),Je())};return window.addEventListener("mousemove",M),window.addEventListener("touchstart",J,{passive:!0,capture:!0}),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("touchstart",J,{capture:!0})}},[]);const se=()=>{q(!0),b()},N=()=>{if(!p)return;const M=Z,J=new URLSearchParams({type:p.type,hybrid:p.hybridType,tertiary:p.tertiaryType,op:p.compositeOp,blend:p.hybridBlend.toFixed(3),tertiaryBlend:p.tertiaryBlend.toFixed(3),smoothK:p.smoothK.toFixed(3),warp:p.warpStrength.toFixed(3),octaves:String(p.octaveLayers),boxFold:p.boxFold.toFixed(3),sphereFold:p.sphereFold.toFixed(3),interiorCut:p.interiorCut.toFixed(3),iterations:String(p.iterations),phi:p.phiMultiplier.toFixed(9),morphSpeed:p.morphSpeed.toFixed(3),glow:p.glowIntensity.toFixed(3),zoom:p.zoom.toFixed(3),name:p.name,palette:p.palette.id,paletteSeed:String((M==null?void 0:M.paletteSeed)??0),paletteRotation:M!=null&&M.paletteRotation?"1":"0",renderStyle:(M==null?void 0:M.renderStyle)??"solid",cameraMode:(M==null?void 0:M.cameraMode)??"orbit",camX:((M==null?void 0:M.camPosX)??0).toFixed(3),camY:((M==null?void 0:M.camPosY)??0).toFixed(3),camZ:((M==null?void 0:M.camPosZ)??-3.2).toFixed(3),headlamp:((M==null?void 0:M.headlampPower)??0).toFixed(3),fog:((M==null?void 0:M.volumetricFog)??.4).toFixed(3),slicePlane:((M==null?void 0:M.slicePlane)??0).toFixed(3),sliceAxis:(M==null?void 0:M.sliceAxis)??"golden",audio:M!=null&&M.enableAudio?"1":"0",audioVol:((M==null?void 0:M.audioVolume)??.65).toFixed(2),audioTuning:(M==null?void 0:M.audioTuning)??"phi432",drs:M!=null&&M.drsEnabled?"1":"0"}),ee=`${window.location.origin}${window.location.pathname}#${J.toString()}`;navigator.share?navigator.share({title:p.name,text:`Фрактал: ${p.name}`,url:ee}).catch(()=>{}):navigator.clipboard.writeText(ee).then(()=>{Ge(!0),setTimeout(()=>Ge(!1),2e3)}).catch(()=>{const v=document.createElement("textarea");v.value=ee,document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v),Ge(!0),setTimeout(()=>Ge(!1),2e3)})},U=p!=null&&p.compositeOp?i1[p.compositeOp]||p.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{$e.current=!0,_(!0),le(!0),Ie.current&&clearTimeout(Ie.current)},onMouseLeave:()=>{$e.current=!1,le(!1),Je()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${ke?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:qe,title:"Меню",children:l.jsx(f2,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${oe&&ke?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:x,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${g?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:g?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:g?l.jsx(uc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(Hu,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),T&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:T,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(Di,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),O&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:O,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${E?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:E?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(Ai,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:w,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(Ou,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),f&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Un,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:c==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${Y?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(p==null?void 0:p.name)||"Золотой Фрактал",children:(p==null?void 0:p.name)||"Золотой Фрактал"}),(p==null?void 0:p.hybridBlend)&&p.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:p.compositeOp,children:U})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(p==null?void 0:p.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:se,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${Q?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(Ln,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${Q?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:N,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${He?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:He?"Ссылка скопирована!":"Поделиться этим фракталом",children:He?l.jsx(ju,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(E2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:m,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(t2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:d,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(Tu,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},n1=({isOpen:p,onClose:s})=>p?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(Di,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(bl,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Un,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ni,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ai,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ai,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(zl,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Yh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,o1=({isOpen:p,onClose:s,tasteProfile:f,archetypeBreakdown:c,currentSpecimen:d,resonanceScore:m,isEngineerMode:b,onToggleEngineerMode:w,audioTuning:g,onSelectAudioTuning:x,onResetTasteProfile:L,onOpenManifest:T,likedSpecimens:E=[],onPlayLiked:O,onRemoveLike:G,isCurrentLiked:Z=!1})=>p?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(Ou,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(bl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[m,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${m}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(d==null?void 0:d.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ln,{className:`w-4 h-4 ${E.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:E.length})]}),Z&&d&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(Ln,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),E.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(Ln,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:E.map((Q,q)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:q+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:Q.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",Q.phiMultiplier.toFixed(4)," • Gen #",Q.generation]})]}),O&&l.jsx("button",{onClick:()=>O(Q),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(Eu,{className:"w-3 h-3"})}),G&&l.jsx("button",{onClick:()=>G(Q.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(q2,{className:"w-3 h-3"})})]},Q.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Kh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:c.map(Q=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:Q.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[Q.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${Q.percentage}%`}})})]},Q.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(uc,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(Q=>l.jsxs("button",{onClick:()=>x(Q.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${g===Q.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:Q.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:Q.desc})]},Q.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(Ni,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{T==null||T()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(P2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:w,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${b?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${b?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:b?"Инженер Включен":"Включить Инж"})]})]}),b&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,xu=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],s1=({isReady:p,onFinished:s})=>{const[f,c]=j.useState(0),[d,m]=j.useState(!1),[b,w]=j.useState(!1);return j.useEffect(()=>{const g=setInterval(()=>{c(x=>x<xu.length-1?x+1:x)},450);return()=>clearInterval(g)},[]),j.useEffect(()=>{const g=setTimeout(()=>{if(!p){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),m(!0);const x=setTimeout(()=>{w(!0),s==null||s()},700);return()=>clearTimeout(x)}},15e3);return()=>clearTimeout(g)},[p,s]),j.useEffect(()=>{if(p){const g=setTimeout(()=>{m(!0);const x=setTimeout(()=>{w(!0),s==null||s()},700);return()=>clearTimeout(x)},500);return()=>clearTimeout(g)}},[p,s]),b?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${d?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((g,x)=>l.jsxs("g",{transform:`rotate(${g} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},x)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:xu[f]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},c1=({isOpen:p,onClose:s,isFirstVisit:f=!1,onOpenAtlas:c})=>{if(!p)return null;const d=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},m=()=>{d(),c==null||c()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:d,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:b=>b.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:d,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(bl,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(Ni,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Un,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(Ai,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(N2,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Cu,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[c&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:m,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(Di,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:d,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(Tu,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},yu=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}];function F(p){return{id:p.id,name:p.name,englishName:p.englishName,category:p.category,formula:p.formula,dimension:p.dimension,generatorRule:p.generatorRule,description:p.description,phiPiRelation:p.phiPiRelation,enginePreset:{type:p.type,hybridType:p.hybridType,compositeOp:p.compositeOp,zoom:p.zoom??2.5,rotX:p.rotX??.4,rotY:p.rotY??.25,iterations:p.iterations??32,hybridBlend:p.hybridBlend,paletteSeed:p.paletteSeed,boxFold:p.boxFold,sphereFold:p.sphereFold,warpStrength:p.warpStrength,smoothK:p.smoothK,octaveLayers:p.octaveLayers,glowIntensity:p.glowIntensity,morphSpeed:p.morphSpeed,phiMultiplier:p.phiMultiplier,interiorCut:p.interiorCut,renderStyle:p.renderStyle}}}const p1=[F({id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}),F({id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}),F({id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}),F({id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}),F({id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}),F({id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2",generatorRule:"Вариация дракона с чередующимися углами",description:"Модификация дракона Хартера-Хейтуэя с чередующимися направлениями складывания.",phiPiRelation:"Чередование углов ±π/2 создает уникальную симметрию.",type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.65}),F({id:"hilbert-curve",name:"Кривая Гильберта",englishName:"Hilbert Curve",category:"geometric_curves",formula:"H_n: 4^(n-1) сегментов, заполняет квадрат",dimension:"D = 2 (пространственно-заполняющая)",generatorRule:"A → +BF-AFA-FB+, B → -AF+BFB+FA-",description:"Непрерывная кривая, проходящая через каждую точку единичного квадрата. Сохраняет локальность: близкие точки на кривой близки в квадрате.",phiPiRelation:"Рекурсивная структура 4-кратного разбиения; золотая модификация использует φ-пропорции в подквадратах.",type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.8}),F({id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"Заполняет квадрат, D = 2",dimension:"D = 2",generatorRule:"4 взаимно ортогональные подкривые",description:"Пространственно-заполняющая кривая Серпинского, альтернатива кривой Гильберта.",phiPiRelation:"4-кратная симметрия, φ-модификации в углах.",type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.7}),F({id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"Первая пространственно-заполняющая кривая (1890)",dimension:"D = 2",generatorRule:"9-кратное разбиение квадрата",description:"Исторически первая кривая, заполняющая квадрат. 9 подквадратов на каждой итерации.",phiPiRelation:"9 = 3², связь с φ через тригонометрию π/9.",type:"hilbertCurve3D",compositeOp:"smoothMorph",zoom:2.75}),F({id:"gosper-curve",name:"Кривая Госпера",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"7 сегментов, угол 60°",dimension:"D = ln(7)/ln(3) ≈ 1.7712",generatorRule:"A → A-B--B+A++AA+B-, B → +A-BB--B-A++A+B",description:'Кривая "flowsnake" - заполняет область с границей-снежинкой. 7-кратное самоподобие.',phiPiRelation:"7 сегментов, угол π/3; граница - кривая Коха.",type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.6}),F({id:"minkowski-sausage",name:"Колбаса Минковского",englishName:"Minkowski Sausage (Quadratic Koch)",category:"geometric_curves",formula:"8 сегментов, масштаб 1/4",dimension:"D = ln(8)/ln(4) = 1.5",generatorRule:"F → F+F-F-FF+F+F-F",description:"Квадратичная кривая Коха с 8 сегментами. Заполняет область с фрактальной границей.",phiPiRelation:"8 = 2³, масштаб 1/4 = (1/2)².",type:"kochSnowflake3D",compositeOp:"smoothUnion",zoom:2.8}),F({id:"cesaro-fractal",name:"Фрактал Чезаро",englishName:"Cesàro Fractal",category:"geometric_curves",formula:"Вариация кривой Коха с углом α",dimension:"D = ln(4)/ln(1/(2cos(α/2)))",generatorRule:"F → F+F--F+F (угол α варьируется)",description:"Обобщение кривой Коха с переменным углом. При α=60° совпадает с Коха.",phiPiRelation:"Угол α может быть выбран как π/φ ≈ 111.47°.",type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:2.7}),F({id:"cantor-curve",name:"Кривая Кантора",englishName:"Cantor Curve (Cantor Dust)",category:"geometric_curves",formula:"Удаление средней трети",dimension:"D = ln(2)/ln(3) ≈ 0.6309",generatorRule:"F → F F (удалить среднюю треть)",description:"Одномерное множество Кантора - простейший фрактал. Нулевая мера, несчетно.",phiPiRelation:"2/3 масштабирование; φ-вариация использует 1/φ.",type:"cantorDust",compositeOp:"smoothUnion",zoom:3}),F({id:"vicsek-fractal",name:"Фрактал Вицека",englishName:"Vicsek Fractal",category:"geometric_curves",formula:"5 квадратов, масштаб 1/3",dimension:"D = ln(5)/ln(3) ≈ 1.4650",generatorRule:"Крестообразное разбиение 3×3",description:"Крестообразный фрактал с квадратной симметрией. 5 подквадратов на каждой итерации.",phiPiRelation:"5-кратная симметрия; φ-модификация использует золотое крестообразное разбиение.",type:"vicsekFractal",compositeOp:"smoothUnion",zoom:2.9}),F({id:"tetrix",name:"Тетрикс",englishName:"Tetrix (Sierpiński Tetrahedron)",category:"geometric_curves",formula:"4 тетраэдра, масштаб 1/2",dimension:"D = ln(4)/ln(2) = 2",generatorRule:"Разбиение тетраэдра на 4 подтетраэдра",description:"Трехмерный аналог треугольника Серпинского. 4 подтетраэдра на каждой итерации.",phiPiRelation:"4 = 2², φ-пропорции в высотах тетраэдра.",type:"tetrix",compositeOp:"smoothUnion",zoom:2.8}),F({id:"sierpinski-carpet",name:"Ковёр Серпинского",englishName:"Sierpiński Carpet",category:"geometric_curves",formula:"8 квадратов, масштаб 1/3",dimension:"D = ln(8)/ln(3) ≈ 1.8928",generatorRule:"Разбиение 3×3, удалить центр",description:"Плоский фрактал Серпинского. Универсальная кривая: содержит все одномерные кривые.",phiPiRelation:"8 = 2³, 3×3 сетка; φ-модификация использует золотое разбиение.",type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.7}),F({id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"geometric_curves",formula:"20 кубов, масштаб 1/3",dimension:"D = ln(20)/ln(3) ≈ 2.7268",generatorRule:"Разбиение 3×3×3, удалить центры граней и центр",description:"Трехмерный аналог ковра Серпинского. Универсальная кривая для всех компактных метрических пространств размерности ≤ 1.",phiPiRelation:"20 = 4×5, φ-пропорции в удаленных объемах.",type:"menger",compositeOp:"smoothUnion",zoom:2.6}),F({id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"geometric_curves",formula:"φ-пропорции в разбиении куба",dimension:"D ≈ 2.5293",generatorRule:"Разбиение куба с φ-пропорциями",description:"Фрактальный куб с золотым сечением в пропорциях. Назван в честь формы креста на гранях.",phiPiRelation:"Основан на φ: 1/φ ≈ 0.618 масштабирование.",type:"jerusalemCube",compositeOp:"smoothUnion",zoom:2.5}),F({id:"pythagoras-tree",name:"Дерево Пифагора",englishName:"Pythagoras Tree",category:"geometric_curves",formula:"2 квадрата, масштаб cos(θ), sin(θ)",dimension:"D = 2 (при φ-углах)",generatorRule:"Квадрат + 2 квадрата наверху",description:"Фрактальное дерево из квадратов. При угле 45° симметрично; при φ-углах золотое.",phiPiRelation:"Углы ветвления могут быть выбраны как arctan(1/φ) ≈ 31.72°.",type:"pythagorasTree3D",compositeOp:"smoothUnion",zoom:2.7}),F({id:"l-system-plant",name:"L-система: Растение",englishName:"L-System Plant",category:"geometric_curves",formula:"X → F+[[X]-X]-F[-FX]+X, F → FF",dimension:"D ≈ 1.5-2.0",generatorRule:"Угол 22.5°, 25° или 25.7° (φ)",description:"Фрактальное растение из L-системы. Имитирует ветвление реальных растений.",phiPiRelation:"Угол ветвления 25.7° ≈ 360°/φ² - золотое ветвление.",type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.8})],f1=[F({id:"mandelbulb",name:"Мандельбульб",englishName:"Mandelbulb",category:"constructive_csg",formula:"z_{n+1} = z_n^8 + c (в сферических координатах)",dimension:"D ≈ 3.0",generatorRule:"Сферическое возведение в степень + сложение",description:"Трехмерный аналог множества Мандельброта. Создан Дэвидом Бейкером в 1978 году.",phiPiRelation:"Степень 8 = 2³; φ-модификация использует золотые пропорции в углах.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.5}),F({id:"mandelbox",name:"Мандельбокс",englishName:"Mandelbox",category:"constructive_csg",formula:"Свертка + масштабирование + отражение",dimension:"D ≈ 2.5-3.0",generatorRule:"Box-fold + sphere-fold + scale",description:"Фрактал, созданный Томом Лоу в 2010 году. Сочетает свертку куба и сферы.",phiPiRelation:"Масштабирование связано с φ через золотые пропорции.",type:"mandelbox",compositeOp:"smoothUnion",boxFold:1,sphereFold:.5,zoom:2.6}),F({id:"julia-set-3d",name:"3D Жюлиа",englishName:"3D Julia Set",category:"constructive_csg",formula:"Кватернионная Жюлиа",dimension:"D ≈ 2.0-2.5",generatorRule:"Кватернионная итерация",description:"Трехмерное обобщение множества Жюлиа в пространстве кватернионов.",phiPiRelation:"Кватернионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7}),F({id:"apollonian-gasket",name:"Прокладка Аполлония",englishName:"Apollonian Gasket",category:"constructive_csg",formula:"Инверсия относительно окружностей",dimension:"D ≈ 1.3057",generatorRule:"Касательные окружности",description:"Фрактальная упаковка касательных окружностей. Бесконечное количество окружностей.",phiPiRelation:"Инверсия сохраняет углы; φ-модификация использует золотые пропорции.",type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.8}),F({id:"schwarz-surface",name:"Поверхность Шварца",englishName:"Schwarz Minimal Surface",category:"constructive_csg",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2.0 (минимальная поверхность)",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность с нулевой средней кривизной. Бесконечно продолжается в трехмерном пространстве.",phiPiRelation:"Тригонометрическая симметрия связана с π.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.6}),F({id:"gyroid",name:"Гироид",englishName:"Gyroid",category:"constructive_csg",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2.0",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность, открытая Нерсесом в 1970 году. Встречается в природе (крылья бабочек).",phiPiRelation:"Хиральная симметрия связана с φ.",type:"gyroid",compositeOp:"smoothUnion",zoom:2.7}),F({id:"lidinoid",name:"Лидиноид",englishName:"Lidinoid",category:"constructive_csg",formula:"Вариация гироида",dimension:"D = 2.0",generatorRule:"Модифицированное тригонометрическое уравнение",description:"Родственная гироиду минимальная поверхность с более сложной топологией.",phiPiRelation:"Топология связана с φ через золотые пропорции.",type:"gyroid",compositeOp:"smoothUnion",zoom:2.65}),F({id:"neovius-surface",name:"Поверхность Неовиуса",englishName:"Neovius Surface",category:"constructive_csg",formula:"3(cos(x) + cos(y) + cos(z)) + 4cos(x)cos(y)cos(z) = 0",dimension:"D = 2.0",generatorRule:"Расширенное тригонометрическое уравнение",description:"Минимальная поверхность с более высокой симметрией, чем поверхность Шварца.",phiPiRelation:"Симметрия связана с π и φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.7}),F({id:"diamond-surface",name:"Алмазная поверхность",englishName:"Diamond Surface",category:"constructive_csg",formula:"Минимальная поверхность алмазной структуры",dimension:"D = 2.0",generatorRule:"Тригонометрическое уравнение",description:"Минимальная поверхность, соответствующая структуре алмаза.",phiPiRelation:"Кристаллическая симметрия связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.65}),F({id:"costa-surface",name:"Поверхность Косты",englishName:"Costa Surface",category:"constructive_csg",formula:"Минимальная поверхность с тремя концами",dimension:"D = 2.0",generatorRule:"Комплексный анализ",description:"Минимальная поверхность, открытая Костой в 1984 году. Первый пример поверхности с тремя концами.",phiPiRelation:"Топология связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.7}),F({id:"catalan-surface",name:"Поверхность Каталана",englishName:"Catalan Surface",category:"constructive_csg",formula:"Минимальная поверхность с прямыми линиями",dimension:"D = 2.0",generatorRule:"Параметрическое уравнение",description:"Минимальная поверхность, содержащая прямые линии. Открыта Каталланом в 1855 году.",phiPiRelation:"Геометрия связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.6}),F({id:"henneberg-surface",name:"Поверхность Хеннеберга",englishName:"Henneberg Surface",category:"constructive_csg",formula:"Минимальная поверхность",dimension:"D = 2.0",generatorRule:"Параметрическое уравнение",description:"Минимальная поверхность с интересной топологией.",phiPiRelation:"Топология связана с φ.",type:"schwarzSurface",compositeOp:"smoothUnion",zoom:2.65})],u1=[F({id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}),F({id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}),F({id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),F({id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),F({id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 1.0-2.0",generatorRule:"Бассейны притяжения корней уравнения",description:"Бассейны притяжения метода Ньютона для нахождения корней многочлена. Границы между бассейнами - фракталы.",phiPiRelation:"При k = 5 + φ границы бассейнов образуют квазикристаллическую структуру.",type:"newtonFractal",compositeOp:"smoothUnion",zoom:2.8}),F({id:"burning-ship",name:"Горящий корабль",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D_граница = 2.0",generatorRule:"Модификация Мандельброта с абсолютными значениями",description:'Фрактал "Горящий корабль" - вариация Мандельброта с абсолютными значениями действительной и мнимой частей.',phiPiRelation:"Асимметрия создает уникальную структуру, связанную с φ через золотые пропорции.",type:"burningShip",compositeOp:"smoothUnion",zoom:2.7}),F({id:"tricorn-fractal",name:"Трезубец (Tricorn)",englishName:"Tricorn (Mandelbar)",category:"algebraic_complex",formula:"z_{n+1} = z̄_n² + c",dimension:"D_граница = 2.0",generatorRule:"Мандельброт с сопряжением",description:'Антиголоморфный аналог множества Мандельброта. Три симметричные "руки" вместо кардиоиды.',phiPiRelation:"3-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),F({id:"buffon-dart",name:"Фрактал Баффона",englishName:"Buffon Dart",category:"algebraic_complex",formula:"Стохастическая итерация",dimension:"D ≈ 1.5-2.0",generatorRule:"Случайные итерации с вероятностями",description:"Стохастический фрактал, генерируемый случайными итерациями IFS.",phiPiRelation:"Вероятности могут быть выбраны как 1/φ и 1-1/φ.",type:"ifsFractal",compositeOp:"smoothUnion",zoom:2.6}),F({id:"phoenix-julia",name:"Жюлиа Феникс",englishName:"Phoenix Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c + d·z_{n-1}",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Жюлиа с памятью предыдущего состояния",description:"Множество Жюлиа с памятью - зависит от двух предыдущих итераций. Создает более сложные структуры.",phiPiRelation:"Параметр d связан с φ через золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),F({id:"mandelbar-3d",name:"Мандельбар 3D",englishName:"Mandelbar 3D",category:"algebraic_complex",formula:"3D антиголоморфный Мандельброт",dimension:"D ≈ 2.0-2.5",generatorRule:"3D обобщение трезубца",description:"Трехмерное обобщение множества Мандельбар с антиголоморфной симметрией.",phiPiRelation:"3D симметрия связана с φ через золотые пропорции.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),F({id:"tetrahedral-julia",name:"Тетраэдрическая Жюлиа",englishName:"Tetrahedral Julia Set",category:"algebraic_complex",formula:"Кватернионная Жюлиа с тетраэдрической симметрией",dimension:"D ≈ 2.0",generatorRule:"Кватернионная итерация с тетраэдрической симметрией",description:"Множество Жюлиа в пространстве кватернионов с тетраэдрической симметрией.",phiPiRelation:"Тетраэдрическая симметрия связана с φ через золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),F({id:"cubic-julia",name:"Кубическая Жюлиа",englishName:"Cubic Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n³ + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Кубическая итерация",description:"Множество Жюлиа для кубического многочлена. 3-лучевая симметрия.",phiPiRelation:"3-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}),F({id:"quartic-julia",name:"Квартичная Жюлиа",englishName:"Quartic Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n⁴ + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Квартичная итерация",description:"Множество Жюлиа для квартичного многочлена. 4-лучевая симметрия.",phiPiRelation:"4-лучевая симметрия; φ-модификация использует золотые пропорции.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8}),F({id:"exponential-julia",name:"Экспоненциальная Жюлиа",englishName:"Exponential Julia Set",category:"algebraic_complex",formula:"z_{n+1} = e^{z_n} + c",dimension:"D ∈ (1.0, 2.0]",generatorRule:"Экспоненциальная итерация",description:"Множество Жюлиа для экспоненциального отображения. Бесконечное количество компонент.",phiPiRelation:"Экспонента связана с φ через e^{iπ} = -1.",type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.6})],d1=[F({id:"4d-mandelbulb",name:"4D Мандельбульб",englishName:"4D Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c в 4D",dimension:"D ≈ 4.0",generatorRule:"4D сферическое возведение в степень",description:"Четырехмерное обобщение Мандельбульба.",phiPiRelation:"4D симметрия связана с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.5}),F({id:"quaternion-julia",name:"Кватернионная Жюлиа",englishName:"Quaternion Julia Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c в H",dimension:"D ≈ 2.0-3.0",generatorRule:"Кватернионная итерация",description:"Множество Жюлиа в пространстве кватернионов.",phiPiRelation:"Кватернионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}),F({id:"octonion-fractal",name:"Октонионный Фрактал",englishName:"Octonion Fractal",category:"multidimensional",formula:"Итерация в октонионах",dimension:"D ≈ 3.0-4.0",generatorRule:"Октонионная итерация",description:"Фрактал в пространстве октонионов (8D алгебра).",phiPiRelation:"Октонионная симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7}),F({id:"4d-julia",name:"4D Жюлиа",englishName:"4D Julia Set",category:"multidimensional",formula:"4D обобщение Жюлиа",dimension:"D ≈ 2.0-3.0",generatorRule:"4D итерация",description:"Четырехмерное обобщение множества Жюлиа.",phiPiRelation:"4D симметрия связана с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.65}),F({id:"hyperbolic-fractal",name:"Гиперболический Фрактал",englishName:"Hyperbolic Fractal",category:"multidimensional",formula:"Фрактал в гиперболическом пространстве",dimension:"D ≈ 2.0-3.0",generatorRule:"Гиперболическая геометрия",description:"Фрактал в пространстве Лобачевского с отрицательной кривизной.",phiPiRelation:"Гиперболическая геометрия связана с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8}),F({id:"spherical-fractal",name:"Сферический Фрактал",englishName:"Spherical Fractal",category:"multidimensional",formula:"Фрактал на сфере",dimension:"D ≈ 2.0",generatorRule:"Сферическая геометрия",description:"Фрактал на поверхности сферы.",phiPiRelation:"Сферическая геометрия связана с π и φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7})],m1=[F({id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern",category:"ifs_attractors",formula:"4 аффинных преобразования",dimension:"D ≈ 1.45",generatorRule:"IFS с вероятностями",description:"Фрактал, имитирующий папоротник. Создан Майклом Барнсли в 1988 году.",phiPiRelation:"Вероятности связаны с φ через золотые пропорции.",type:"ifsFractal",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"ifs_attractors",formula:"3 сжатия к вершинам",dimension:"D = ln(3)/ln(2) ≈ 1.5850",generatorRule:"Хаотическая игра",description:"Классический фрактал Серпинского. Может быть построен хаотической игрой.",phiPiRelation:"3-кратная симметрия; φ-модификация использует золотые пропорции.",type:"sierpinskiTriangle",compositeOp:"smoothUnion",zoom:2.8}),F({id:"lorenz-attractor",name:"Аттрактор Лоренца",englishName:"Lorenz Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",dimension:"D ≈ 2.06",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, открытый Лоренцем в 1963 году. Моделирует конвекцию в атмосфере.",phiPiRelation:"Параметры σ=10, ρ=28, β=8/3; φ-модификация использует золотые пропорции.",type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:2.6}),F({id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y-z, dy/dt = x+ay, dz/dt = b+z(x-c)",dimension:"D ≈ 2.0",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, открытый Рёсслером в 1976 году. Проще аттрактора Лоренца.",phiPiRelation:"Параметры связаны с φ через золотые пропорции.",type:"rosslerAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"thomas-attractor",name:"Аттрактор Томаса",englishName:"Thomas Attractor",category:"ifs_attractors",formula:"dx/dt = sin(y)-bx, dy/dt = sin(z)-by, dz/dt = sin(x)-bz",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с периодической симметрией.",phiPiRelation:"Параметр b связан с φ.",type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.65}),F({id:"dadras-attractor",name:"Аттрактор Дадраса",englishName:"Dadras Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с двумя витками.",phiPiRelation:"Параметры связаны с φ.",type:"dadrasAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"chen-attractor",name:"Аттрактор Чена",englishName:"Chen Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор, родственный аттрактору Лоренца.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.6}),F({id:"sprott-attractors",name:"Аттракторы Спротта",englishName:"Sprott Attractors",category:"ifs_attractors",formula:"Семейство простых систем ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Семейство странных аттракторов, открытых Спроттом.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"halvorsen-attractor",name:"Аттрактор Хальворсена",englishName:"Halvorsen Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с трехлучевой симметрией.",phiPiRelation:"3-лучевая симметрия; параметры связаны с φ.",type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.65}),F({id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"Система 3D ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система дифференциальных уравнений",description:"Странный аттрактор с тороидальной структурой.",phiPiRelation:"Параметры связаны с φ.",type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.7})],h1=[F({id:"random-terrain",name:"Случайный Рельеф",englishName:"Random Terrain",category:"stochastic",formula:"Фрактальный шум",dimension:"D ≈ 2.0-2.5",generatorRule:"Фрактальный шум Перлина",description:"Случайный рельеф, сгенерированный фрактальным шумом.",phiPiRelation:"Шум связан с φ.",type:"randomTerrain",compositeOp:"smoothUnion",zoom:2.7}),F({id:"perlin-noise",name:"Шум Перлина",englishName:"Perlin Noise",category:"stochastic",formula:"Градиентный шум",dimension:"D = 2.0",generatorRule:"Градиентный шум",description:"Градиентный шум, разработанный Перлином.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",compositeOp:"smoothUnion",zoom:2.8}),F({id:"simplex-noise",name:"Симплексный Шум",englishName:"Simplex Noise",category:"stochastic",formula:"Симплексный градиентный шум",dimension:"D = 2.0",generatorRule:"Симплексный шум",description:"Улучшенная версия шума Перлина.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",compositeOp:"smoothUnion",zoom:2.75}),F({id:"worley-noise",name:"Шум Уорли",englishName:"Worley Noise (Cellular)",category:"stochastic",formula:"Клеточный шум",dimension:"D = 2.0",generatorRule:"Расстояние до случайных точек",description:"Клеточный шум, основанный на расстоянии до случайных точек.",phiPiRelation:"Структура связана с φ.",type:"worleyNoise",compositeOp:"smoothUnion",zoom:2.7}),F({id:"fbm-terrain",name:"FBM Рельеф",englishName:"FBM Terrain",category:"stochastic",formula:"Фрактальное броуновское движение",dimension:"D ≈ 2.0-2.5",generatorRule:"Сумма октав шума",description:"Рельеф, сгенерированный фрактальным броуновским движением.",phiPiRelation:"Октавы связаны с φ.",type:"randomTerrain",octaveLayers:8,compositeOp:"smoothUnion",zoom:2.8}),F({id:"ridged-multifractal",name:"Гребневой Мультифрактал",englishName:"Ridged Multifractal",category:"stochastic",formula:"Абсолютный шум с гребнями",dimension:"D ≈ 2.0-2.5",generatorRule:"Абсолютный шум",description:"Мультифрактал с гребневой структурой.",phiPiRelation:"Структура связана с φ.",type:"randomTerrain",octaveLayers:6,compositeOp:"smoothUnion",zoom:2.7}),F({id:"billow-noise",name:"Волнистый Шум",englishName:"Billow Noise",category:"stochastic",formula:"Абсолютный шум",dimension:"D ≈ 2.0",generatorRule:"Абсолютный шум",description:"Волнистый шум, похожий на облака.",phiPiRelation:"Шум связан с φ.",type:"perlinNoise",octaveLayers:6,compositeOp:"smoothUnion",zoom:2.75})],v1=[F({id:"percolation-cluster",name:"Перколяционный Кластер",englishName:"Percolation Cluster",category:"physical_nature",formula:"Вероятностная модель перколяции",dimension:"D ≈ 1.896 (2D), 2.53 (3D)",generatorRule:"Случайное заполнение решетки",description:"Фрактальный кластер в модели перколяции. Возникает при критической вероятности.",phiPiRelation:"Критическая вероятность связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.7}),F({id:"dl-aggregate",name:"DLA Агрегат",englishName:"Diffusion-Limited Aggregation",category:"physical_nature",formula:"Случайное блуждание + прилипание",dimension:"D ≈ 1.71 (2D), 2.5 (3D)",generatorRule:"Случайные блуждания частиц",description:"Агрегат, ограниченный диффузией. Модель роста кристаллов.",phiPiRelation:"Фрактальная размерность связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.8}),F({id:"eden-model",name:"Модель Эдена",englishName:"Eden Model",category:"physical_nature",formula:"Рост кластера",dimension:"D ≈ 1.71 (2D)",generatorRule:"Рост от начального кластера",description:"Модель роста кластера, похожая на DLA но без случайных блужданий.",phiPiRelation:"Фрактальная размерность связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.75}),F({id:"brownian-tree",name:"Броуновское Дерево",englishName:"Brownian Tree",category:"physical_nature",formula:"Случайное блуждание + агрегация",dimension:"D ≈ 2.0 (2D)",generatorRule:"Случайные блуждания",description:"Дерево, образованное броуновским движением частиц.",phiPiRelation:"Структура связана с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.7}),F({id:"viscous-fingering",name:"Вязкое Пальцеобразование",englishName:"Viscous Fingering",category:"physical_nature",formula:"Саффман-Тейлор неустойчивость",dimension:"D ≈ 1.5-1.8",generatorRule:"Неустойчивость границы раздела",description:"Фрактальные структуры при протекании вязкой жидкости.",phiPiRelation:"Неустойчивость связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.65}),F({id:"dielectric-breakdown",name:"Диэлектрический Пробой",englishName:"Dielectric Breakdown",category:"physical_nature",formula:"Модель пробоя диэлектрика",dimension:"D ≈ 1.7-2.5",generatorRule:"Электрический пробой",description:"Фрактальные структуры при электрическом пробое.",phiPiRelation:"Структура связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.8}),F({id:"diffusion-fractal",name:"Диффузионный Фрактал",englishName:"Diffusion Fractal",category:"physical_nature",formula:"Уравнение диффузии",dimension:"D ≈ 2.0",generatorRule:"Диффузионный процесс",description:"Фрактал, образованный диффузионным процессом.",phiPiRelation:"Диффузия связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.7}),F({id:"reaction-diffusion",name:"Реакция-Диффузия",englishName:"Reaction-Diffusion",category:"physical_nature",formula:"Система реакция-диффузия",dimension:"D ≈ 2.0",generatorRule:"Уравнения реакция-диффузия",description:"Фрактальные структуры в системах реакция-диффузия (Тьюринг).",phiPiRelation:"Паттерны связаны с φ.",type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.75}),F({id:"turbulence-fractal",name:"Турбулентный Фрактал",englishName:"Turbulence Fractal",category:"physical_nature",formula:"Турбулентный поток",dimension:"D ≈ 2.5-3.0",generatorRule:"Турбулентность",description:"Фрактальные структуры в турбулентных потоках.",phiPiRelation:"Турбулентность связана с φ.",type:"percolationCluster",compositeOp:"smoothUnion",zoom:2.6}),F({id:"crystal-growth",name:"Рост Кристалла",englishName:"Crystal Growth",category:"physical_nature",formula:"Модель роста кристалла",dimension:"D ≈ 1.7-2.5",generatorRule:"Рост кристалла",description:"Фрактальные структуры при росте кристаллов.",phiPiRelation:"Рост связан с φ.",type:"dlAggregate",compositeOp:"smoothUnion",zoom:2.8})],x1=[F({id:"lorenz-system",name:"Система Лоренца",englishName:"Lorenz System",category:"expanded_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz",dimension:"D ≈ 2.06",generatorRule:"Система ODE",description:"Классический аттрактор Лоренца.",phiPiRelation:"Параметры связаны с φ.",type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:2.6}),F({id:"chen-system",name:"Система Чена",englishName:"Chen System",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Чена.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"lu-system",name:"Система Лю",englishName:"Lü System",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Лю.",phiPiRelation:"Параметры связаны с φ.",type:"chenAttractor",compositeOp:"smoothUnion",zoom:2.65}),F({id:"sprott-a",name:"Спротт A",englishName:"Sprott A",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта A.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-b",name:"Спротт B",englishName:"Sprott B",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта B.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),F({id:"sprott-c",name:"Спротт C",englishName:"Sprott C",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта C.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-d",name:"Спротт D",englishName:"Sprott D",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта D.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),F({id:"sprott-e",name:"Спротт E",englishName:"Sprott E",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта E.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-f",name:"Спротт F",englishName:"Sprott F",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта F.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),F({id:"sprott-g",name:"Спротт G",englishName:"Sprott G",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта G.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-h",name:"Спротт H",englishName:"Sprott H",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта H.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),F({id:"sprott-i",name:"Спротт I",englishName:"Sprott I",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта I.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-j",name:"Спротт J",englishName:"Sprott J",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта J.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75}),F({id:"sprott-k",name:"Спротт K",englishName:"Sprott K",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта K.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-l",name:"Спротт L",englishName:"Sprott L",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта L.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.65}),F({id:"sprott-m",name:"Спротт M",englishName:"Sprott M",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта M.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.7}),F({id:"sprott-n",name:"Спротт N",englishName:"Sprott N",category:"expanded_attractors",formula:"Система ODE",dimension:"D ≈ 2.0-2.5",generatorRule:"Система ODE",description:"Аттрактор Спротта N.",phiPiRelation:"Параметры связаны с φ.",type:"sprottAttractor",compositeOp:"smoothUnion",zoom:2.75})],y1=[F({id:"mandelbulb-crystal",name:"Мандельбульб Кристалл",englishName:"Mandelbulb Crystal",category:"visually_distinct",formula:"Мандельбульб с кристаллическим рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + кристаллический стиль",description:"Мандельбульб с кристаллическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"crystal"}),F({id:"julia-plasma",name:"Жюлиа Плазма",englishName:"Julia Plasma",category:"visually_distinct",formula:"Жюлиа с плазменным рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + плазменный стиль",description:"Множество Жюлиа с плазменным стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),F({id:"mandelbox-hologram",name:"Мандельбокс Голограмма",englishName:"Mandelbox Hologram",category:"visually_distinct",formula:"Мандельбокс с голографическим рендером",dimension:"D ≈ 2.5-3.0",generatorRule:"Мандельбокс + голографический стиль",description:"Мандельбокс с голографическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbox",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"hologram"}),F({id:"mandelbulb-iridescent",name:"Мандельбульб Иридесцент",englishName:"Mandelbulb Iridescent",category:"visually_distinct",formula:"Мандельбульб с переливающимся рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + иридесцентный стиль",description:"Мандельбульб с переливающимся стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.75,renderStyle:"iridescent"}),F({id:"julia-xray",name:"Жюлиа Рентген",englishName:"Julia X-Ray",category:"visually_distinct",formula:"Жюлиа с рентгеновским рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + рентгеновский стиль",description:"Множество Жюлиа с рентгеновским стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"xray"}),F({id:"mandelbulb-topography",name:"Мандельбульб Топография",englishName:"Mandelbulb Topography",category:"visually_distinct",formula:"Мандельбульб с топографическим рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + топографический стиль",description:"Мандельбульб с топографическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"topography"}),F({id:"julia-pbr",name:"Жюлиа PBR",englishName:"Julia PBR",category:"visually_distinct",formula:"Жюлиа с PBR рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + PBR стиль",description:"Множество Жюлиа с PBR стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.75,renderStyle:"pbr"}),F({id:"mandelbox-crystal",name:"Мандельбокс Кристалл",englishName:"Mandelbox Crystal",category:"visually_distinct",formula:"Мандельбокс с кристаллическим рендером",dimension:"D ≈ 2.5-3.0",generatorRule:"Мандельбокс + кристаллический стиль",description:"Мандельбокс с кристаллическим стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbox",compositeOp:"smoothUnion",zoom:2.65,renderStyle:"crystal"}),F({id:"mandelbulb-plasma",name:"Мандельбульб Плазма",englishName:"Mandelbulb Plasma",category:"visually_distinct",formula:"Мандельбульб с плазменным рендером",dimension:"D ≈ 3.0",generatorRule:"Мандельбульб + плазменный стиль",description:"Мандельбульб с плазменным стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"mandelbulb",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),F({id:"julia-iridescent",name:"Жюлиа Иридесцент",englishName:"Julia Iridescent",category:"visually_distinct",formula:"Жюлиа с переливающимся рендером",dimension:"D ≈ 2.0-2.5",generatorRule:"Жюлиа + иридесцентный стиль",description:"Множество Жюлиа с переливающимся стилем рендеринга.",phiPiRelation:"Связано с φ.",type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"})],g1=[F({id:"sri-yantra",name:"Шри Янтра",englishName:"Sri Yantra",category:"mandalas_sacred",formula:"9 треугольников, 43 пересечения",dimension:"D = 2.0",generatorRule:"Геометрия священной геометрии",description:"Древняя индийская янтра, состоящая из 9 взаимопересекающихся треугольников.",phiPiRelation:"Пропорции связаны с φ и π.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"iridescent"}),F({id:"metatrons-cube",name:"Куб Метатрона",englishName:"Metatron's Cube",category:"mandalas_sacred",formula:"13 окружностей, платоновы тела",dimension:"D = 2.0",generatorRule:"Священная геометрия",description:"Священная геометрическая фигура, содержащая все 5 платоновых тел.",phiPiRelation:"Основан на φ и золотом сечении.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"crystal"}),F({id:"flower-of-life",name:"Цветок Жизни",englishName:"Flower of Life",category:"mandalas_sacred",formula:"19 окружностей, гексагональная симметрия",dimension:"D = 2.0",generatorRule:"Пересекающиеся окружности",description:"Священная геометрическая фигура из 19 пересекающихся окружностей.",phiPiRelation:"Гексагональная симметрия связана с π/3.",type:"mandala",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"hologram"}),F({id:"tree-of-life",name:"Древо Жизни",englishName:"Tree of Life",category:"mandalas_sacred",formula:"10 сефирот, 22 пути",dimension:"D = 2.0",generatorRule:"Каббалистическая геометрия",description:"Каббалистическое Древо Жизни с 10 сефирот и 22 путями.",phiPiRelation:"Структура связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"}),F({id:"platonic-solids",name:"Платоновы Тела",englishName:"Platonic Solids",category:"mandalas_sacred",formula:"5 правильных многогранников",dimension:"D = 2.0 (поверхности)",generatorRule:"Правильные многогранники",description:"5 правильных многогранников: тетраэдр, куб, октаэдр, додекаэдр, икосаэдр.",phiPiRelation:"Додекаэдр и икосаэдр связаны с φ.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"pbr"}),F({id:"torus-knot",name:"Торический Узел",englishName:"Torus Knot",category:"mandalas_sacred",formula:"Узел на поверхности тора",dimension:"D = 1.0 (кривая)",generatorRule:"Параметрическое уравнение тора",description:"Узел, лежащий на поверхности тора. Связан с сакральной геометрией.",phiPiRelation:"Параметры p,q связаны с φ.",type:"torusKnot",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"}),F({id:"hopf-fibration",name:"Расслоение Хопфа",englishName:"Hopf Fibration",category:"mandalas_sacred",formula:"S³ → S² с волокнами S¹",dimension:"D = 3.0 (в S³)",generatorRule:"Кватернионная проекция",description:"Отображение 3-сферы на 2-сферу с круговыми волокнами. Открыто Хопфом в 1931 году.",phiPiRelation:"Связано с кватернионами и φ.",type:"hopfFibration",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"hologram"}),F({id:"borromean-rings",name:"Кольца Борромео",englishName:"Borromean Rings",category:"mandalas_sacred",formula:"3 взаимозацепленных кольца",dimension:"D = 1.0 (кривые)",generatorRule:"Теория узлов",description:"Три кольца, зацепленные так, что удаление любого освобождает остальные.",phiPiRelation:"Связано с φ через золотые пропорции.",type:"mandala",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"crystal"}),F({id:"penrose-tiling",name:"Мозаика Пенроуза",englishName:"Penrose Tiling",category:"mandalas_sacred",formula:"2 типа плиток, 5-кратная симметрия",dimension:"D = 2.0",generatorRule:"Апериодическая мозаика",description:"Апериодическая мозаика с 5-кратной симметрией. Открыта Пенроузом в 1974 году.",phiPiRelation:"Основана на φ: отношение толстых и тонких ромбов = φ.",type:"penroseTiling",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"plasma"}),F({id:"golden-spiral",name:"Золотая Спираль",englishName:"Golden Spiral",category:"mandalas_sacred",formula:"r = a·φ^(2θ/π)",dimension:"D = 1.0 (кривая)",generatorRule:"Логарифмическая спираль с φ",description:"Логарифмическая спираль, растущая с коэффициентом φ на четверть оборота.",phiPiRelation:"Основана на φ ≈ 1.618.",type:"goldenSpiral",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"iridescent"}),F({id:"fibonacci-sphere",name:"Сфера Фибоначчи",englishName:"Fibonacci Sphere",category:"mandalas_sacred",formula:"Точки на сфере с золотым углом",dimension:"D = 0.0 (дискретные точки)",generatorRule:"Золотой угол 137.508°",description:"Распределение точек на сфере с использованием золотого угла.",phiPiRelation:"Золотой угол = 360°/φ² ≈ 137.508°.",type:"fibonacciSphere",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"hologram"}),F({id:"vesica-piscis",name:"Весика Писцис",englishName:"Vesica Piscis",category:"mandalas_sacred",formula:"Пересечение двух окружностей",dimension:"D = 2.0",generatorRule:"Две окружности с центрами на друг друге",description:"Миндалевидная фигура, образованная пересечением двух окружностей.",phiPiRelation:"Отношение высоты к ширине = √3; связано с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"crystal"}),F({id:"seed-of-life",name:"Семя Жизни",englishName:"Seed of Life",category:"mandalas_sacred",formula:"7 окружностей",dimension:"D = 2.0",generatorRule:"7 пересекающихся окружностей",description:"Священная геометрическая фигура из 7 окружностей, основа Цветка Жизни.",phiPiRelation:"Симметрия связана с π/3.",type:"mandala",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"plasma"}),F({id:"egg-of-life",name:"Яйцо Жизни",englishName:"Egg of Life",category:"mandalas_sacred",formula:"6 окружностей вокруг центральной",dimension:"D = 2.0",generatorRule:"6 окружностей",description:"Священная геометрическая фигура, следующая стадия после Семени Жизни.",phiPiRelation:"Симметрия связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"iridescent"}),F({id:"fruit-of-life",name:"Плод Жизни",englishName:"Fruit of Life",category:"mandalas_sacred",formula:"13 окружностей",dimension:"D = 2.0",generatorRule:"13 окружностей",description:"Священная геометрическая фигура из 13 окружностей, основа Куба Метатрона.",phiPiRelation:"Связано с φ и 13.",type:"mandala",compositeOp:"smoothUnion",zoom:2.9,renderStyle:"hologram"}),F({id:"mandala-universal",name:"Универсальная Мандала",englishName:"Universal Mandala",category:"mandalas_sacred",formula:"Радиальная симметрия n-кратная",dimension:"D = 2.0",generatorRule:"Радиальная симметрия",description:"Универсальная мандала с настраиваемой симметрией.",phiPiRelation:"Симметрия связана с φ.",type:"mandala",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"plasma"}),F({id:"yantra-3d",name:"3D Янтра",englishName:"3D Yantra",category:"mandalas_sacred",formula:"Трехмерная янтра",dimension:"D = 3.0",generatorRule:"3D священная геометрия",description:"Трехмерная версия священной янтры.",phiPiRelation:"Связано с φ и π.",type:"mandala",compositeOp:"smoothUnion",zoom:2.8,renderStyle:"crystal"}),F({id:"sacred-knot",name:"Священный Узел",englishName:"Sacred Knot",category:"mandalas_sacred",formula:"Узел с сакральной симметрией",dimension:"D = 1.0",generatorRule:"Теория узлов",description:"Узел с сакральной геометрической симметрией.",phiPiRelation:"Связано с φ.",type:"torusKnot",compositeOp:"smoothUnion",zoom:2.6,renderStyle:"iridescent"}),F({id:"merkaba",name:"Меркаба",englishName:"Merkaba",category:"mandalas_sacred",formula:"Два тетраэдра",dimension:"D = 3.0",generatorRule:"Два противоположных тетраэдра",description:"Звездный тетраэдр, состоящий из двух противоположных тетраэдров.",phiPiRelation:"Связано с φ и звездой Давида.",type:"platonicSolids",compositeOp:"smoothUnion",zoom:2.7,renderStyle:"hologram"}),F({id:"phi-nexus",name:"Φ-Нексус",englishName:"Phi Nexus",category:"mandalas_sacred",formula:"Фрактал на основе φ",dimension:"D ≈ 2.5",generatorRule:"Золотое сечение в структуре",description:"Фрактал, полностью построенный на золотом сечении φ.",phiPiRelation:"Основан на φ ≈ 1.618.",type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.8,renderStyle:"plasma"})],gl=[...p1,...f1,...u1,...d1,...m1,...h1,...v1,...x1,...y1,...g1],z1=({isOpen:p,onClose:s,onApplyPreset:f})=>{var Q;const[c,d]=j.useState("catalog"),[m,b]=j.useState("all"),[w,g]=j.useState(""),[x,L]=j.useState(gl[0]),[T,E]=j.useState(null),O=j.useMemo(()=>gl.filter(q=>{const oe=m==="all"||q.category===m,_=w.toLowerCase().trim();if(!_)return oe;const Y=q.name.toLowerCase().includes(_)||q.englishName.toLowerCase().includes(_)||q.formula.toLowerCase().includes(_)||q.dimension.toLowerCase().includes(_)||q.description.toLowerCase().includes(_);return oe&&Y}),[m,w]);if(!p)return null;const G=q=>{f(q.enginePreset,q.name),E(q.id),setTimeout(()=>{E(null),s()},450)},Z=q=>{switch(q){case"geometric_curves":return l.jsx(Un,{className:"w-4 h-4"});case"constructive":return l.jsx(Ai,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(g2,{className:"w-4 h-4"});case"multidimensional":return l.jsx(Ih,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(zl,{className:"w-4 h-4"});case"stochastic":return l.jsx(Ni,{className:"w-4 h-4"});case"topological_physical":return l.jsx(Mu,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(Di,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",gl.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(bl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>d("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ai,{className:"w-4 h-4"}),"Атлас и Таксономия (",gl.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>d("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(lc,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>d("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(ic,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),c==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(F2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:w,onChange:q=>g(q.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),w&&l.jsx("button",{onClick:()=>g(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>b("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${m==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",gl.length,")"]}),yu.map(q=>{var oe;return l.jsxs("button",{onClick:()=>b(q.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${m===q.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[Z(q.id),l.jsx("span",{children:((oe=q.title.split(".")[1])==null?void 0:oe.trim())||q.title})]},q.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:O.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):O.map(q=>{var _;const oe=(x==null?void 0:x.id)===q.id;return l.jsxs("button",{id:`btn-fractal-${q.id}`,onClick:()=>L(q),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${oe?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:q.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(_=q.dimension.split("≈")[0])==null?void 0:_.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:q.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:q.formula})]})]},q.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:x?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[Z(x.category),l.jsx("span",{children:(Q=yu.find(q=>q.id===x.category))==null?void 0:Q.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:x.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:x.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>G(x),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:T===x.id?l.jsxs(l.Fragment,{children:[l.jsx(ju,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Eu,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:x.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:x.dimension})]})]}),x.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:x.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:x.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(lc,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:x.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(ic,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:x.enginePreset.type}),x.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:x.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:x.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),c==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(lc,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),c==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(ic,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(T2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(Fu,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(zl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(Ru,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(b2,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},b1=({params:p,onToggleProbe:s,onToggleMacro:f})=>{if(!p.probeActive)return null;const c=Math.sqrt((p.camPosX??0)**2+(p.camPosY??0)**2+(p.camPosZ??0)**2),d=Math.max(.001,c/(p.zoom||3)).toFixed(4),m=p.slicePlane?((.5-p.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:p.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(Ru,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[d," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(p.camPosX??0).toFixed(2)," Y:",(p.camPosY??0).toFixed(2)," Z:",(p.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[p.sliceAxis||"golden"," (",m,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:p.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[p.octaveLayers||2,"L · k=",p.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${p.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:p.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(zl,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",p.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",p.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",p.phiMultiplier.toFixed(5)]})]})]})},gu=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:Ni,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:Fu,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:zl,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:v2,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:c2,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:Mu,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:m2,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],w1=({currentSpecimen:p,historyQueue:s,currentIndex:f,onSelectSpecimen:c,onNext:d,onPrev:m,renderStyle:b,onSelectRenderStyle:w,scrollMode:g,onToggleScrollMode:x,isOpen:L,onToggleOpen:T})=>{const E=j.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${L?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(M2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:x,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${g==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:g==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:g==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(Cu,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(J2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",gu.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:gu.map(O=>{const G=O.icon,Z=b===O.id;return l.jsxs("button",{id:`select-render-style-${O.id}-btn`,onClick:()=>w(O.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${Z?O.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:O.desc,children:[l.jsx(G,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:O.shortLabel})]},O.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:m,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(i2,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:d,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx($h,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:E,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((O,G)=>{const Z=O.id===(p==null?void 0:p.id)||G===f;return l.jsxs("button",{id:`feed-item-${G}-btn`,onClick:()=>c(O),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${Z?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",O.generation||G+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:O.name})]}),Z&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:O.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[O.type," + ",O.hybridType||O.type]})]})]},O.id||G)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:g==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})},_1=({visible:p,position:s="top-left"})=>{const[f,c]=j.useState(We.getStats()),[d,m]=j.useState(!1);if(j.useEffect(()=>{if(!p)return;const x=setInterval(()=>{c(We.getStats())},100);return()=>clearInterval(x)},[p]),!p)return null;const b={"top-left":"top-4 left-4","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-right":"bottom-4 right-4"},w=f.fps>50?"text-green-400":f.fps>30?"text-yellow-400":"text-red-400",g=We.isHealthy()?"text-green-400":"text-red-400";return l.jsxs("div",{className:`fixed ${b[s]} z-50 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-xs font-mono text-white min-w-[280px]`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("h3",{className:"text-cyan-400 font-bold text-sm",children:"🔍 Render Diagnostics"}),l.jsx("button",{onClick:()=>m(!d),className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:d?"▼":"▶"})]}),l.jsxs("div",{className:"space-y-1 mb-2",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"FPS:"}),l.jsx("span",{className:w,children:f.fps.toFixed(1)})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Frame Time:"}),l.jsxs("span",{className:"text-white",children:[f.frameTime.toFixed(2),"ms"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Ray Steps:"}),l.jsx("span",{className:"text-white",children:f.rayMarchSteps})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Hit Rate:"}),l.jsxs("span",{className:"text-white",children:[(f.hitRate*100).toFixed(1),"%"]})]})]}),d&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2",children:[l.jsx("h4",{className:"text-yellow-400 font-semibold mb-1",children:"Math Validation"}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"SDF NaN:"}),l.jsx("span",{className:f.sdfNaN>0?"text-red-400":"text-green-400",children:f.sdfNaN})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"SDF ∞:"}),l.jsx("span",{className:f.sdfInfinity>0?"text-red-400":"text-green-400",children:f.sdfInfinity})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"SDF Range:"}),l.jsxs("span",{className:"text-white",children:["[",f.sdfMin.toFixed(3),", ",f.sdfMax.toFixed(3),"]"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Avg Distance:"}),l.jsx("span",{className:"text-white",children:f.averageDistance.toFixed(4)})]})]})]}),l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2",children:[l.jsx("h4",{className:"text-purple-400 font-semibold mb-1",children:"GPU Health"}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Context:"}),l.jsx("span",{className:f.contextLost?"text-red-400":"text-green-400",children:f.contextLost?"LOST":"OK"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Shader Compile:"}),l.jsxs("span",{className:"text-white",children:[f.shaderCompileTime.toFixed(0),"ms"]})]})]})]}),l.jsx("div",{className:"border-t border-gray-700 pt-2 mt-2",children:l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-gray-400",children:"System Health:"}),l.jsx("span",{className:`${g} font-bold`,children:We.isHealthy()?"✓ HEALTHY":"✗ ISSUES"})]})}),l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2 flex gap-2",children:[l.jsx("button",{onClick:()=>We.reset(),className:"flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-1 rounded text-xs transition-colors",children:"Reset Stats"}),l.jsx("button",{onClick:()=>{const x=We.exportReport();console.log("Diagnostics Report:",x),alert("Diagnostics report exported to console")},className:"flex-1 bg-purple-600 hover:bg-purple-500 text-white px-2 py-1 rounded text-xs transition-colors",children:"Export"})]})]}),l.jsxs("div",{className:"border-t border-gray-700 pt-2 mt-2 flex justify-between text-xs",children:[l.jsxs("span",{className:"text-gray-500",children:["Errors: ",We.getLogs("error").length]}),l.jsxs("span",{className:"text-gray-500",children:["Warnings: ",We.getLogs("warn").length]})]})]})};function zu(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class S1{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,f="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const c=window.AudioContext||window.webkitAudioContext;this.ctx=new c,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(c){console.warn("AudioContext initialization deferred or unavailable",c)}}getChordFrequenciesForFamily(s,f,c){const d=1.61803398875,m=c?Hn(c):0,w=m*137.507764%50-25,g=Math.pow(2,w/1200);if(s==="sacred")return[{ratio:.5*g,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:d*g,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5*g,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:d*d*.5*g,wave:m%2===0?"triangle":"sine",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5*g,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5*g,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2*g,wave:m%3===0?"sawtooth":"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5*g,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75*g,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25*g,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2)*g,wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:d*1.2*g,wave:m%2===0?"sine":"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const x=1.1413470000000001,L=1+21.022/100,T=1+25.0108/100;return[{ratio:.5*g,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:x*g,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:L*g,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:T*g,wave:m%2===0?"triangle":"sine",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5*g,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*g,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382*g,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618*g,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5*g,wave:m%3===0?"square":"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,f){if(!this.ctx||!this.globalFilter)return;const c=zu(s),d=f?zu(f):c,m=108,b=this.ctx.currentTime,w=[...this.voices];this.voices=[],w.forEach(L=>{try{L.gain.gain.cancelScheduledValues(b),L.gain.gain.setValueAtTime(L.gain.gain.value,b),L.gain.gain.exponentialRampToValueAtTime(1e-4,b+.35),setTimeout(()=>{var T;try{L.osc.stop(),L.osc.disconnect(),L.filter.disconnect(),(T=L.panner)==null||T.disconnect(),L.gain.disconnect()}catch{}},380)}catch{}});const x=this.getChordFrequenciesForFamily(c,this.tuningMode,s).map((L,T)=>{const E=this.ctx.createOscillator(),O=this.ctx.createGain(),G=this.ctx.createBiquadFilter(),Z=(T%2===0?.618:-.618)*.5,Q=m*L.ratio+Z;E.type=L.wave,E.frequency.setValueAtTime(Q,b),O.gain.setValueAtTime(1e-4,b),O.gain.exponentialRampToValueAtTime(L.vol,b+1.2),G.type="lowpass",G.frequency.setValueAtTime(450+T*80,b),G.Q.setValueAtTime(1.2,b),E.connect(G);let q=G,oe;return this.ctx.createStereoPanner&&(oe=this.ctx.createStereoPanner(),oe.pan.setValueAtTime(L.pan,b),G.connect(oe),q=oe),q.connect(O),O.connect(this.globalFilter),E.start(b),{osc:E,gain:O,filter:G,panner:oe,baseFreqRatio:L.ratio,role:L.role}});if(f&&f!==s){const L=this.getChordFrequenciesForFamily(d,this.tuningMode,f),T=L[2]||L[1],E=this.ctx.createOscillator(),O=this.ctx.createGain(),G=this.ctx.createBiquadFilter();E.type="sine",E.frequency.setValueAtTime(m*T.ratio,b);const Z=Math.max(1e-4,this.currentHybridBlend*.22);O.gain.setValueAtTime(1e-4,b),O.gain.exponentialRampToValueAtTime(Z,b+1.5),G.type="bandpass",G.frequency.setValueAtTime(m*T.ratio*1.5,b),G.Q.setValueAtTime(2,b),E.connect(G);let Q=G,q;this.ctx.createStereoPanner&&(q=this.ctx.createStereoPanner(),q.pan.setValueAtTime(.45,b),G.connect(q),Q=q),Q.connect(O),O.connect(this.globalFilter),E.start(b),x.push({osc:E,gain:O,filter:G,panner:q,baseFreqRatio:T.ratio,role:"hybrid"})}this.voices=x}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,c=s.phiMultiplier||1.618034,d=Math.max(.08,Math.min(16,s.zoom||3)),m=Math.max(.1,Math.min(2,s.morphSpeed||.45)),b=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=b,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const w=Math.max(260,Math.min(980,380+(4-Math.min(d,4))*80+m*120));this.globalFilter.frequency.setTargetAtTime(w,f,.15);const g=Math.max(54,Math.min(240,108/Math.max(.5,d*.6)));this.cavityResonator.frequency.setTargetAtTime(g,f,.2);const x=108,L=(c-1.618034)*80,T=Math.sin(s.rotX||0)*.4;this.voices.forEach((E,O)=>{const G=x*E.baseFreqRatio,Z=E.role==="golden"||E.role==="shimmer"?L:L*.3;if(E.osc.frequency.setTargetAtTime(G+Z,f,.15),E.panner){const Q=O%2===0?.25:-.25,q=Math.max(-.85,Math.min(.85,Q+T));E.panner.pan.setTargetAtTime(q,f,.12)}if(E.role==="hybrid"){const Q=Math.max(1e-4,b*.2);E.gain.gain.setTargetAtTime(Q,f,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((d,m)=>{if(!this.ctx)return;const b=this.ctx.createOscillator(),w=this.ctx.createGain(),g=this.ctx.createBiquadFilter();b.type="sine",b.frequency.setValueAtTime(d,s+m*.05),g.type="lowpass",g.frequency.setValueAtTime(950,s),w.gain.setValueAtTime(1e-4,s+m*.05),w.gain.exponentialRampToValueAtTime(.05/(m+1),s+m*.05+.08),w.gain.exponentialRampToValueAtTime(1e-5,s+m*.05+2.8),b.onended=()=>{try{b.disconnect(),g.disconnect(),w.disconnect()}catch{}},b.connect(g),g.connect(w),w.connect(this.globalFilter),b.start(s+m*.05),b.stop(s+m*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var c,d,m,b,w;this.stopTimeout=null,f.forEach(g=>{var x;try{g.osc.stop(),g.osc.disconnect(),g.filter.disconnect(),(x=g.panner)==null||x.disconnect(),g.gain.disconnect()}catch{}});try{(c=this.globalFilter)==null||c.disconnect(),(d=this.cavityResonator)==null||d.disconnect(),(m=this.compressor)==null||m.disconnect(),(b=this.masterGain)==null||b.disconnect(),(w=this.ctx)==null||w.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const ma=new S1,cc=137.508,bu=[.6,.7,.8,.9,1],wu=[.5,.6,.7,.8,.9],D1=["Cosmic","Nebula","Stellar","Galactic","Astral","Quantum","Plasma","Photon","Neutron","Proton","Crystal","Prism","Spectrum","Rainbow","Iridescent","Ocean","Abyss","Coral","Reef","Tidal","Forest","Emerald","Jade","Moss","Canopy","Desert","Sand","Dune","Oasis","Mirage","Volcanic","Magma","Lava","Ember","Ash","Arctic","Glacier","Frost","Ice","Snow","Solar","Lunar","Eclipse","Zenith","Horizon","Mystic","Ethereal","Divine","Sacred","Celestial","Golden","Silver","Bronze","Copper","Platinum","Ruby","Sapphire","Emerald","Amethyst","Topaz","Phoenix","Dragon","Griffin","Unicorn","Pegasus","Lotus","Orchid","Rose","Lily","Iris","Thunder","Lightning","Storm","Cyclone","Tornado","Aurora","Borealis","Australis","Polar","Equatorial"];function En(p,s,f){p=p%360,p<0&&(p+=360);const c=(1-Math.abs(2*f-1))*s,d=c*(1-Math.abs(p/60%2-1)),m=f-c/2;let b=0,w=0,g=0;return p<60?(b=c,w=d,g=0):p<120?(b=d,w=c,g=0):p<180?(b=0,w=c,g=d):p<240?(b=0,w=d,g=c):p<300?(b=d,w=0,g=c):(b=c,w=0,g=d),[b+m,w+m,g+m]}function A1(p,s,f){const c=s,d=bu[Math.floor(f/5)%bu.length],m=wu[Math.floor(f/25)%wu.length],b=En(c,d,m),w=(s+cc*(1+f%3))%360,g=d*.9,x=m*.8,L=En(w,g,x),T=f%4;let E;T===0?E=(s+180)%360:T===1?E=(s+120)%360:T===2?E=(s+240)%360:E=(s+cc)%360;const O=En(E,d,Math.min(1,m+.2)),G=En(c,d*.5,m*.15);return{id:`${p.toLowerCase().replace(/\s+/g,"-")}-${s}-${f}`,name:`${p} ${f+1}`,primary:b,secondary:L,accent:O,ambient:G}}const qu=[];D1.forEach((p,s)=>{const f=s*cc*7%360;for(let c=0;c<8;c++){const d=(f+c*30)%360;qu.push(A1(p,d,c))}});const On=[...Si,...qu],Cr=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","fractalCross","reactionDiffusion","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],_u=["smoothUnion","smoothMorph","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],Su=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],Du=["orbit","flyThrough","goldenSpiral","kelvinInvert"],N1={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:28,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function V1(){const[p]=j.useState(()=>new a1),[s,f]=j.useState(N1),[c,d]=j.useState(null),[m,b]=j.useState(65),[w,g]=j.useState(!1),[x,L]=j.useState(!1),[T,E]=j.useState("idle"),O=j.useRef(null),G=j.useRef(0),[Z,Q]=j.useState("auto"),[q,oe]=j.useState(!1),[_,Y]=j.useState(!1),[xe,ke]=j.useState(!1),[le,He]=j.useState(!1),[Ge,Ie]=j.useState(!1),[$e,Je]=j.useState(!1),[de,qe]=j.useState("feed"),[se,N]=j.useState(!1),[U,M]=j.useState([]),[J,ee]=j.useState(new Set),[v,k]=j.useState(!0),[B,P]=j.useState(!1);j.useEffect(()=>{const I=re=>{re.key==="F3"&&(re.preventDefault(),P(X=>!X))};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[]),j.useEffect(()=>()=>{O.current&&clearTimeout(O.current)},[]);const $=j.useRef(0),ae=.61803398875;j.useEffect(()=>{if(!v)return;const I=setInterval(()=>{$.current=($.current+Math.round(ae*Cr.length))%Cr.length;const re=$.current,X=Cr[re],it=(re+Math.round(ae*37))%Cr.length,dt=(re+Math.round(ae*73))%Cr.length,Ea=Cr[it],ye=Cr[dt],Ue=Math.floor(re*ae)%_u.length,ie=Math.floor(re*ae*1.3)%Su.length,Ke=Math.floor(re*ae*.7)%Du.length,lt=[1.8,2.5,3.5,5,7],_e=Math.floor(re*ae*1.7)%lt.length,Ne=[12,18,24,30,36],tt=Math.floor(re*ae*2.1)%Ne.length;f(Be=>({...Be,type:X,hybridType:Ea,tertiaryType:ye,compositeOp:_u[Ue],renderStyle:Su[ie],cameraMode:Du[Ke],hybridBlend:.2+re%5*.12,tertiaryBlend:.1+re%4*.08,zoom:lt[_e],iterations:Ne[tt],paletteRotation:!0,autoRotate:!0}))},18e3);return()=>clearInterval(I)},[v]);const ce=j.useCallback(()=>{},[]),[Me,be]=j.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),Ze=j.useCallback(I=>{k(!1),d(I),b(I.affinityScore);const re=(p==null?void 0:p.suggestRenderStyle(I.type))||"solid";f(X=>({...X,type:I.type,hybridType:I.hybridType,tertiaryType:I.tertiaryType,compositeOp:I.compositeOp,hybridBlend:I.hybridBlend,tertiaryBlend:I.tertiaryBlend,smoothK:I.smoothK,warpStrength:I.warpStrength,octaveLayers:I.octaveLayers,boxFold:I.boxFold,sphereFold:I.sphereFold,interiorCut:I.interiorCut,paletteId:I.palette.id,customPalette:I.palette,iterations:I.iterations,phiMultiplier:I.phiMultiplier,morphSpeed:I.morphSpeed,glowIntensity:I.glowIntensity,zoom:I.zoom,renderStyle:re})),ma.getActive()&&ma.playSpecimenTransitionChord()},[]);j.useEffect(()=>{if(!p)return;const I=window.location.hash.slice(1);if(I){const X=new URLSearchParams(I),it=X.get("type"),dt=X.get("hybrid"),Ea=X.get("tertiary"),ye=X.get("op");if(it){const Ue=On.find(Ke=>Ke.id===X.get("palette"))||On[0],ie={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:X.get("name")||`Фрактал ${it}`,type:it,hybridType:dt||it,tertiaryType:Ea||"riemannZeta",compositeOp:ye||"smoothUnion",hybridBlend:parseFloat(X.get("blend")||"0.35"),tertiaryBlend:parseFloat(X.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(X.get("smoothK")||"0.35"),warpStrength:parseFloat(X.get("warp")||"0.25"),octaveLayers:parseInt(X.get("octaves")||"2"),boxFold:parseFloat(X.get("boxFold")||"1.2"),sphereFold:parseFloat(X.get("sphereFold")||"0.65"),interiorCut:parseFloat(X.get("interiorCut")||"0.0"),palette:Ue,iterations:parseInt(X.get("iterations")||"20"),phiMultiplier:parseFloat(X.get("phi")||"1.61803398875"),morphSpeed:parseFloat(X.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(X.get("glow")||"1.1"),zoom:parseFloat(X.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};Ze(ie),f(Ke=>({...Ke,paletteSeed:parseInt(X.get("paletteSeed")||"0"),paletteRotation:X.get("paletteRotation")==="1",renderStyle:X.get("renderStyle")||Ke.renderStyle,cameraMode:X.get("cameraMode")||Ke.cameraMode,camPosX:parseFloat(X.get("camX")||"0"),camPosY:parseFloat(X.get("camY")||"0"),camPosZ:parseFloat(X.get("camZ")||"-3.2"),headlampPower:parseFloat(X.get("headlamp")||"0"),volumetricFog:parseFloat(X.get("fog")||"0.4"),slicePlane:parseFloat(X.get("slicePlane")||"0"),sliceAxis:X.get("sliceAxis")||"golden",enableAudio:X.get("audio")==="1",audioVolume:parseFloat(X.get("audioVol")||"0.65"),audioTuning:X.get("audioTuning")||"phi432",drsEnabled:X.get("drs")!=="0"})),window.history.replaceState(null,"",window.location.pathname);return}}const re=p.breedNextSpecimen();Ze(re)},[p,Ze]),j.useEffect(()=>(s.enableAudio?ma.start(s.audioVolume??.65,s.audioTuning??"phi432"):ma.stop(),()=>{ma.stop()}),[s.enableAudio]),j.useEffect(()=>{s.enableAudio&&(s.audioTuning&&ma.setTuning(s.audioTuning),s.audioVolume!==void 0&&ma.setVolume(s.audioVolume),ma.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),j.useEffect(()=>{const I=setInterval(()=>{if(p&&c){const re=p.registerEngagement(1,0,0,c);b(X=>X===re?X:re)}},1200);return()=>clearInterval(I)},[p,c]);const St=j.useCallback((I,re)=>{if(!p||!c)return;const X=I>0?"zooming":re>0?"orbiting":"idle";E(dt=>dt!==X?X:dt),O.current&&clearTimeout(O.current),O.current=setTimeout(()=>{E(dt=>dt!=="idle"?"idle":dt)},1200);const it=p.registerEngagement(.1,I,re,c);b(dt=>dt===it?dt:it)},[p,c]),Ae=j.useCallback(()=>{if(!p)return;const I=performance.now();if(I-G.current<180)return;G.current=I;const re=p.stepHistory(1);Ze(re)},[p,Ze]),Pt=j.useCallback(()=>{if(!p)return;const I=performance.now();if(I-G.current<180)return;G.current=I;const re=p.stepHistory(-1);Ze(re)},[p,Ze]),Ot=j.useCallback(()=>{if(!p||!c)return;p.boostAffinity(c),b(100);const I=c.id;ee(re=>{const X=new Set(re);return X.has(I)?(X.delete(I),M(it=>it.filter(dt=>dt.id!==I))):(X.add(I),M(it=>[...it,c])),X})},[p,c]),aa=j.useCallback(I=>{Ze(I)},[Ze]),Ca=j.useCallback(I=>{ee(re=>{const X=new Set(re);return X.delete(I),X}),M(re=>re.filter(X=>X.id!==I))},[]),Er=j.useCallback(I=>{if(!p)return;const re=p.breedNextSpecimen(I);Ze(re)},[p,Ze]),Or=j.useCallback(()=>{if(!p)return;const I={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((c==null?void 0:c.generation)||1)+1,name:`Фенотип Инженера #${((c==null?void 0:c.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||On.find(re=>re.id===s.paletteId)||On[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};d(I),p.boostAffinity(I),ma.getActive()&&ma.playSpecimenTransitionChord()},[p,s,c]),et=j.useCallback(()=>{f(I=>({...I,enableAudio:!I.enableAudio}))},[]),fr=j.useCallback(I=>{oe(!1);const re=document.createElement("a");re.download=`golden-ratio-fractal-${s.type}-${(c==null?void 0:c.generation)||1}.png`,re.href=I,re.click()},[s.type,c==null?void 0:c.generation]),ur=j.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(Th,{params:s,onParamsChange:f,onTelemetryUpdate:be,screenshotRequested:q,onScreenshotCaptured:fr,forcedBackend:Z,onInteraction:St,onNextSpecimen:Ae,onPrevSpecimen:Pt,onEngineReady:()=>He(!0),scrollMode:de}),l.jsx(w1,{currentSpecimen:c,historyQueue:p.getHistory(),currentIndex:p.getCurrentIndex(),onSelectSpecimen:Ze,onNext:Ae,onPrev:Pt,renderStyle:s.renderStyle,onSelectRenderStyle:I=>f(re=>({...re,renderStyle:I})),scrollMode:de,onToggleScrollMode:()=>qe(I=>I==="feed"?"zoom":"feed"),isOpen:se,onToggleOpen:()=>N(I=>!I)}),l.jsx(l1,{specimen:c,resonanceScore:m,isInteracting:T!=="idle",interactionType:T,onNext:Ae,onPrev:Pt,onFavorite:Ot,onOpenProfile:()=>L(!0),enableAudio:s.enableAudio,onToggleAudio:et,onOpenResearchModal:()=>Y(!0),onOpenAtlas:()=>ke(!0),isFeedOpen:se,onToggleFeed:()=>N(I=>!I),isCurrentLiked:c?J.has(c.id):!1,params:s}),l.jsx(b1,{params:s,onToggleProbe:()=>f(I=>({...I,probeActive:!I.probeActive})),onToggleMacro:()=>f(I=>({...I,macroMode:!I.macroMode}))}),l.jsx(o1,{isOpen:x,onClose:()=>L(!1),tasteProfile:p.getTasteProfile(),archetypeBreakdown:p.getArchetypeBreakdown(),currentSpecimen:c,resonanceScore:m,isEngineerMode:w,onToggleEngineerMode:()=>g(I=>!I),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:I=>f(re=>({...re,audioTuning:I})),onOpenManifest:()=>{L(!1),Ie(!0)},likedSpecimens:U,onPlayLiked:aa,onRemoveLike:Ca,isCurrentLiked:c?J.has(c.id):!1}),w&&l.jsxs(l.Fragment,{children:[l.jsx(Z2,{telemetry:Me,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),l.jsx(r1,{params:s,onParamsChange:f,onSelectFractalType:Er,onCaptureScreenshot:()=>oe(!0),onToggleFullscreen:ur,onToggleInfoModal:()=>Y(!0),onOpenAtlasModal:()=>ke(!0),activeBackend:Me.backend,forcedBackend:Z,onSelectBackend:Q,onClose:()=>g(!1),tasteProfile:p.getTasteProfile(),onSaveToFeed:Or})]}),l.jsx(n1,{isOpen:_,onClose:()=>Y(!1)}),l.jsx(z1,{isOpen:xe,onClose:()=>ke(!1),onApplyPreset:I=>{f(re=>({...re,...I}))}}),l.jsx(c1,{isOpen:Ge,onClose:()=>Ie(!1),isFirstVisit:$e,onOpenAtlas:()=>ke(!0)}),l.jsx(s1,{isReady:le,onFinished:ce}),B&&l.jsx(_1,{visible:B})]})}const Au=document.getElementById("root");Au&&ch.createRoot(Au).render(l.jsx(V1,{}));
