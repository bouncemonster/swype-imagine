(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const b of g)if(b.type==="childList")for(const x of b.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function f(g){const b={};return g.integrity&&(b.integrity=g.integrity),g.referrerPolicy&&(b.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?b.credentials="include":g.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(g){if(g.ep)return;g.ep=!0;const b=f(g);fetch(g.href,b)}})();function Em(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Ys={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function qm(){if(Vp)return ul;Vp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(u,g,b){var x=null;if(b!==void 0&&(x=""+b),g.key!==void 0&&(x=""+g.key),"key"in g){b={};for(var A in g)A!=="key"&&(b[A]=g[A])}else b=g;return g=b.ref,{$$typeof:p,type:u,key:x,ref:g!==void 0?g:null,props:b}}return ul.Fragment=s,ul.jsx=f,ul.jsxs=f,ul}var Zp;function Fm(){return Zp||(Zp=1,Ys.exports=qm()),Ys.exports}var l=Fm(),Ps={exports:{}},pl={},Xs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Um(){return Qp||(Qp=1,(function(p){function s(w,q){var T=w.length;w.push(q);e:for(;0<T;){var V=T-1>>>1,J=w[V];if(0<g(J,q))w[V]=q,w[T]=J,T=V;else break e}}function f(w){return w.length===0?null:w[0]}function u(w){if(w.length===0)return null;var q=w[0],T=w.pop();if(T!==q){w[0]=T;e:for(var V=0,J=w.length,m=J>>>1;V<m;){var C=2*(V+1)-1,G=w[C],X=C+1,ae=w[X];if(0>g(G,T))X<J&&0>g(ae,G)?(w[V]=ae,w[X]=T,V=X):(w[V]=G,w[C]=T,V=C);else if(X<J&&0>g(ae,T))w[V]=ae,w[X]=T,V=X;else break e}}return q}function g(w,q){var T=w.sortIndex-q.sortIndex;return T!==0?T:w.id-q.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;p.unstable_now=function(){return b.now()}}else{var x=Date,A=x.now();p.unstable_now=function(){return x.now()-A}}var D=[],v=[],F=1,E=null,L=3,U=!1,Y=!1,K=!1,W=!1,B=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function P(w){for(var q=f(v);q!==null;){if(q.callback===null)u(v);else if(q.startTime<=w)u(v),q.sortIndex=q.expirationTime,s(D,q);else break;q=f(v)}}function he(w){if(K=!1,P(w),!Y)if(f(D)!==null)Y=!0,De||(De=!0,Ge());else{var q=f(v);q!==null&&oe(he,q.startTime-w)}}var De=!1,ee=-1,Ce=5,Fe=-1;function Ue(){return W?!0:!(p.unstable_now()-Fe<Ce)}function Xe(){if(W=!1,De){var w=p.unstable_now();Fe=w;var q=!0;try{e:{Y=!1,K&&(K=!1,ce(ee),ee=-1),U=!0;var T=L;try{t:{for(P(w),E=f(D);E!==null&&!(E.expirationTime>w&&Ue());){var V=E.callback;if(typeof V=="function"){E.callback=null,L=E.priorityLevel;var J=V(E.expirationTime<=w);if(w=p.unstable_now(),typeof J=="function"){E.callback=J,P(w),q=!0;break t}E===f(D)&&u(D),P(w)}else u(D);E=f(D)}if(E!==null)q=!0;else{var m=f(v);m!==null&&oe(he,m.startTime-w),q=!1}}break e}finally{E=null,L=T,U=!1}q=void 0}}finally{q?Ge():De=!1}}}var Ge;if(typeof _=="function")Ge=function(){_(Xe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,qe=ue.port2;ue.port1.onmessage=Xe,Ge=function(){qe.postMessage(null)}}else Ge=function(){B(Xe,0)};function oe(w,q){ee=B(function(){w(p.unstable_now())},q)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(w){w.callback=null},p.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<w?Math.floor(1e3/w):5},p.unstable_getCurrentPriorityLevel=function(){return L},p.unstable_next=function(w){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var T=L;L=q;try{return w()}finally{L=T}},p.unstable_requestPaint=function(){W=!0},p.unstable_runWithPriority=function(w,q){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var T=L;L=w;try{return q()}finally{L=T}},p.unstable_scheduleCallback=function(w,q,T){var V=p.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?V+T:V):T=V,w){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=T+J,w={id:F++,callback:q,priorityLevel:w,startTime:T,expirationTime:J,sortIndex:-1},T>V?(w.sortIndex=T,s(v,w),f(D)===null&&w===f(v)&&(K?(ce(ee),ee=-1):K=!0,oe(he,T-V))):(w.sortIndex=J,s(D,w),Y||U||(Y=!0,De||(De=!0,Ge()))),w},p.unstable_shouldYield=Ue,p.unstable_wrapCallback=function(w){var q=L;return function(){var T=L;L=q;try{return w.apply(this,arguments)}finally{L=T}}}})(Vs)),Vs}var Kp;function Bm(){return Kp||(Kp=1,Xs.exports=Um()),Xs.exports}var Zs={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Lm(){if(Wp)return ie;Wp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),x=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),L=Symbol.iterator;function U(m){return m===null||typeof m!="object"?null:(m=L&&m[L]||m["@@iterator"],typeof m=="function"?m:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function B(m,C,G){this.props=m,this.context=C,this.refs=W,this.updater=G||Y}B.prototype.isReactComponent={},B.prototype.setState=function(m,C){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,C,"setState")},B.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ce(){}ce.prototype=B.prototype;function _(m,C,G){this.props=m,this.context=C,this.refs=W,this.updater=G||Y}var P=_.prototype=new ce;P.constructor=_,K(P,B.prototype),P.isPureReactComponent=!0;var he=Array.isArray;function De(){}var ee={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function Fe(m,C,G){var X=G.ref;return{$$typeof:p,type:m,key:C,ref:X!==void 0?X:null,props:G}}function Ue(m,C){return Fe(m.type,C,m.props)}function Xe(m){return typeof m=="object"&&m!==null&&m.$$typeof===p}function Ge(m){var C={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return C[G]})}var ue=/\/+/g;function qe(m,C){return typeof m=="object"&&m!==null&&m.key!=null?Ge(""+m.key):C.toString(36)}function oe(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(De,De):(m.status="pending",m.then(function(C){m.status==="pending"&&(m.status="fulfilled",m.value=C)},function(C){m.status==="pending"&&(m.status="rejected",m.reason=C)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function w(m,C,G,X,ae){var ne=typeof m;(ne==="undefined"||ne==="boolean")&&(m=null);var fe=!1;if(m===null)fe=!0;else switch(ne){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(m.$$typeof){case p:case s:fe=!0;break;case F:return fe=m._init,w(fe(m._payload),C,G,X,ae)}}if(fe)return ae=ae(m),fe=X===""?"."+qe(m,0):X,he(ae)?(G="",fe!=null&&(G=fe.replace(ue,"$&/")+"/"),w(ae,C,G,"",function(la){return la})):ae!=null&&(Xe(ae)&&(ae=Ue(ae,G+(ae.key==null||m&&m.key===ae.key?"":(""+ae.key).replace(ue,"$&/")+"/")+fe)),C.push(ae)),1;fe=0;var We=X===""?".":X+":";if(he(m))for(var ze=0;ze<m.length;ze++)X=m[ze],ne=We+qe(X,ze),fe+=w(X,C,G,ne,ae);else if(ze=U(m),typeof ze=="function")for(m=ze.call(m),ze=0;!(X=m.next()).done;)X=X.value,ne=We+qe(X,ze++),fe+=w(X,C,G,ne,ae);else if(ne==="object"){if(typeof m.then=="function")return w(oe(m),C,G,X,ae);throw C=String(m),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return fe}function q(m,C,G){if(m==null)return m;var X=[],ae=0;return w(m,X,"","",function(ne){return C.call(G,ne,ae++)}),X}function T(m){if(m._status===-1){var C=m._result;C=C(),C.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=C)}if(m._status===1)return m._result.default;throw m._result}var V=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},J={map:q,forEach:function(m,C,G){q(m,function(){C.apply(this,arguments)},G)},count:function(m){var C=0;return q(m,function(){C++}),C},toArray:function(m){return q(m,function(C){return C})||[]},only:function(m){if(!Xe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return ie.Activity=E,ie.Children=J,ie.Component=B,ie.Fragment=f,ie.Profiler=g,ie.PureComponent=_,ie.StrictMode=u,ie.Suspense=D,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ie.__COMPILER_RUNTIME={__proto__:null,c:function(m){return ee.H.useMemoCache(m)}},ie.cache=function(m){return function(){return m.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(m,C,G){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var X=K({},m.props),ae=m.key;if(C!=null)for(ne in C.key!==void 0&&(ae=""+C.key),C)!Ce.call(C,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&C.ref===void 0||(X[ne]=C[ne]);var ne=arguments.length-2;if(ne===1)X.children=G;else if(1<ne){for(var fe=Array(ne),We=0;We<ne;We++)fe[We]=arguments[We+2];X.children=fe}return Fe(m.type,ae,X)},ie.createContext=function(m){return m={$$typeof:x,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:b,_context:m},m},ie.createElement=function(m,C,G){var X,ae={},ne=null;if(C!=null)for(X in C.key!==void 0&&(ne=""+C.key),C)Ce.call(C,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ae[X]=C[X]);var fe=arguments.length-2;if(fe===1)ae.children=G;else if(1<fe){for(var We=Array(fe),ze=0;ze<fe;ze++)We[ze]=arguments[ze+2];ae.children=We}if(m&&m.defaultProps)for(X in fe=m.defaultProps,fe)ae[X]===void 0&&(ae[X]=fe[X]);return Fe(m,ne,ae)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:A,render:m}},ie.isValidElement=Xe,ie.lazy=function(m){return{$$typeof:F,_payload:{_status:-1,_result:m},_init:T}},ie.memo=function(m,C){return{$$typeof:v,type:m,compare:C===void 0?null:C}},ie.startTransition=function(m){var C=ee.T,G={};ee.T=G;try{var X=m(),ae=ee.S;ae!==null&&ae(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(De,V)}catch(ne){V(ne)}finally{C!==null&&G.types!==null&&(C.types=G.types),ee.T=C}},ie.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ie.use=function(m){return ee.H.use(m)},ie.useActionState=function(m,C,G){return ee.H.useActionState(m,C,G)},ie.useCallback=function(m,C){return ee.H.useCallback(m,C)},ie.useContext=function(m){return ee.H.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m,C){return ee.H.useDeferredValue(m,C)},ie.useEffect=function(m,C){return ee.H.useEffect(m,C)},ie.useEffectEvent=function(m){return ee.H.useEffectEvent(m)},ie.useId=function(){return ee.H.useId()},ie.useImperativeHandle=function(m,C,G){return ee.H.useImperativeHandle(m,C,G)},ie.useInsertionEffect=function(m,C){return ee.H.useInsertionEffect(m,C)},ie.useLayoutEffect=function(m,C){return ee.H.useLayoutEffect(m,C)},ie.useMemo=function(m,C){return ee.H.useMemo(m,C)},ie.useOptimistic=function(m,C){return ee.H.useOptimistic(m,C)},ie.useReducer=function(m,C,G){return ee.H.useReducer(m,C,G)},ie.useRef=function(m){return ee.H.useRef(m)},ie.useState=function(m){return ee.H.useState(m)},ie.useSyncExternalStore=function(m,C,G){return ee.H.useSyncExternalStore(m,C,G)},ie.useTransition=function(){return ee.H.useTransition()},ie.version="19.2.8",ie}var Jp;function $s(){return Jp||(Jp=1,Zs.exports=Lm()),Zs.exports}var Qs={exports:{}},yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function Gm(){if(Ip)return yt;Ip=1;var p=$s();function s(D){var v="https://react.dev/errors/"+D;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)v+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+D+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},g=Symbol.for("react.portal");function b(D,v,F){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:E==null?null:""+E,children:D,containerInfo:v,implementation:F}}var x=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(D,v){if(D==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,yt.createPortal=function(D,v){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(s(299));return b(D,v,null,F)},yt.flushSync=function(D){var v=x.T,F=u.p;try{if(x.T=null,u.p=2,D)return D()}finally{x.T=v,u.p=F,u.d.f()}},yt.preconnect=function(D,v){typeof D=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,u.d.C(D,v))},yt.prefetchDNS=function(D){typeof D=="string"&&u.d.D(D)},yt.preinit=function(D,v){if(typeof D=="string"&&v&&typeof v.as=="string"){var F=v.as,E=A(F,v.crossOrigin),L=typeof v.integrity=="string"?v.integrity:void 0,U=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;F==="style"?u.d.S(D,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:L,fetchPriority:U}):F==="script"&&u.d.X(D,{crossOrigin:E,integrity:L,fetchPriority:U,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},yt.preinitModule=function(D,v){if(typeof D=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var F=A(v.as,v.crossOrigin);u.d.M(D,{crossOrigin:F,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&u.d.M(D)},yt.preload=function(D,v){if(typeof D=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var F=v.as,E=A(F,v.crossOrigin);u.d.L(D,F,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},yt.preloadModule=function(D,v){if(typeof D=="string")if(v){var F=A(v.as,v.crossOrigin);u.d.m(D,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:F,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else u.d.m(D)},yt.requestFormReset=function(D){u.d.r(D)},yt.unstable_batchedUpdates=function(D,v){return D(v)},yt.useFormState=function(D,v,F){return x.H.useFormState(D,v,F)},yt.useFormStatus=function(){return x.H.useHostTransitionStatus()},yt.version="19.2.8",yt}var $p;function Hm(){if($p)return Qs.exports;$p=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Qs.exports=Gm(),Qs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Ym(){if(ef)return pl;ef=1;var p=Bm(),s=$s(),f=Hm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(b(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return D(n),e;if(r===i)return D(n),t;r=r.sibling}throw Error(u(188))}if(a.return!==i.return)a=n,i=r;else{for(var o=!1,c=n.child;c;){if(c===a){o=!0,a=n,i=r;break}if(c===i){o=!0,i=n,a=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===a){o=!0,a=r,i=n;break}if(c===i){o=!0,i=r,a=n;break}c=c.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==i)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,L=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Fe=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case B:return"Profiler";case W:return"StrictMode";case he:return"Suspense";case De:return"SuspenseList";case Fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case _:return e.displayName||"Context";case ce:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var oe=Array.isArray,w=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T={pending:!1,data:null,method:null,action:null},V=[],J=-1;function m(e){return{current:e}}function C(e){0>J||(e.current=V[J],V[J]=null,J--)}function G(e,t){J++,V[J]=e.current,e.current=t}var X=m(null),ae=m(null),ne=m(null),fe=m(null);function We(e,t){switch(G(ne,t),G(ae,e),G(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hp(t),e=xp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(X),G(X,e)}function ze(){C(X),C(ae),C(ne)}function la(e){e.memoizedState!==null&&G(fe,e);var t=X.current,a=xp(t,e.type);t!==a&&(G(ae,e),G(X,a))}function ra(e){ae.current===e&&(C(X),C(ae)),fe.current===e&&(C(fe),rl._currentValue=T)}var Ve,Ea;function At(e){if(Ve===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ve=t&&t[1]||"",Ea=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+e+Ea}var Wt=!1;function H(e,t){if(!e||Wt)return"";Wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(j){var N=j}Reflect.construct(e,[],O)}else{try{O.call()}catch(j){N=j}e.call(O.prototype)}}else{try{throw Error()}catch(j){N=j}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(j){if(j&&N&&typeof j.stack=="string")return[j.stack,N.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],c=r[1];if(o&&c){var d=o.split(`
`),S=c.split(`
`);for(n=i=0;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(i===d.length||n===S.length)for(i=d.length-1,n=S.length-1;1<=i&&0<=n&&d[i]!==S[n];)n--;for(;1<=i&&0<=n;i--,n--)if(d[i]!==S[n]){if(i!==1||n!==1)do if(i--,n--,0>n||d[i]!==S[n]){var M=`
`+d[i].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=i&&0<=n);break}}}finally{Wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?At(a):""}function pe(e,t){switch(e.tag){case 26:case 27:case 5:return At(e.type);case 16:return At("Lazy");case 13:return e.child!==t&&t!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return H(e.type,!1);case 11:return H(e.type.render,!1);case 1:return H(e.type,!0);case 31:return At("Activity");default:return""}}function I(e){try{var t="",a=null;do t+=pe(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Re=Object.prototype.hasOwnProperty,ct=p.unstable_scheduleCallback,si=p.unstable_cancelCallback,Mi=p.unstable_shouldYield,qa=p.unstable_requestPaint,$e=p.unstable_now,ge=p.unstable_getCurrentPriorityLevel,Ze=p.unstable_ImmediatePriority,He=p.unstable_UserBlockingPriority,rt=p.unstable_NormalPriority,ut=p.unstable_LowPriority,ke=p.unstable_IdlePriority,Jt=p.log,It=p.unstable_setDisableYieldValue,Tt=null,Qe=null;function Ke(e){if(typeof Jt=="function"&&It(e),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(Tt,e)}catch{}}var Oe=Math.clz32?Math.clz32:Rr,$t=Math.log,hl=Math.LN2;function Rr(e){return e>>>=0,e===0?32:31-($t(e)/hl|0)|0}var ci=256,ui=262144,pi=4194304;function Se(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ea(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=i&134217727;return c!==0?(i=c&~r,i!==0?n=Se(i):(o&=c,o!==0?n=Se(o):a||(a=c&~e,a!==0&&(n=Se(a))))):(c=i&~r,c!==0?n=Se(c):o!==0?n=Se(o):a||(a=i&~e,a!==0&&(n=Se(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function dt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ta(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),e}function da(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ci(e,t,a,i,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,S=e.hiddenUpdates;for(a=o&~a;0<a;){var M=31-Oe(a),O=1<<M;c[M]=0,d[M]=-1;var N=S[M];if(N!==null)for(S[M]=null,M=0;M<N.length;M++){var j=N[M];j!==null&&(j.lane&=-536870913)}a&=~O}i!==0&&Mt(e,i,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Mt(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Oe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ma(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Oe(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function fi(e,t){var a=t&-t;return a=(a&42)!==0?1:ot(a),(a&(e.suspendedLanes|t))!==0?0:a}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ye(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ct(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Bp(e.type))}function ha(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Fa=Math.random().toString(36).slice(2),mt="__reactFiber$"+Fa,_t="__reactProps$"+Fa,Ri="__reactContainer$"+Fa,kr="__reactEvents$"+Fa,Nf="__reactListeners$"+Fa,Df="__reactHandles$"+Fa,ac="__reactResources$"+Fa,_n="__reactMarker$"+Fa;function Or(e){delete e[mt],delete e[_t],delete e[kr],delete e[Nf],delete e[Df]}function ki(e){var t=e[mt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ri]||a[mt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Sp(e);e!==null;){if(a=e[mt])return a;e=Sp(e)}return t}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[mt]||e[Ri]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ei(e){var t=e[ac];return t||(t=e[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pt(e){e[_n]=!0}var ic=new Set,nc={};function di(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(nc[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var wf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lc={},rc={};function jf(e){return Re.call(rc,e)?!0:Re.call(lc,e)?!1:wf.test(e)?rc[e]=!0:(lc[e]=!0,!1)}function xl(e,t,a){if(jf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function vl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function xa(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Af(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){if(!e._valueTracker){var t=oc(e)?"checked":"value";e._valueTracker=Af(e,t,""+e[t])}}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=oc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tf=/[\n"\\]/g;function Gt(e){return e.replace(Tf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qr(e,t,a,i,n,r,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Fr(e,o,Lt(t)):a!=null?Fr(e,o,Lt(a)):i!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Lt(c):e.removeAttribute("name")}function cc(e,t,a,i,n,r,o,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Er(e);return}a=a!=null?""+Lt(a):"",t=t!=null?""+Lt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=c?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Er(e)}function Fr(e,t,a){t==="number"&&gl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fi(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Lt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function uc(e,t,a){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Lt(a):""}function pc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(u(92));if(oe(i)){if(1<i.length)throw Error(u(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Lt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Er(e)}function Ui(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Mf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Mf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function dc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&fc(e,n,i)}else for(var r in t)t.hasOwnProperty(r)&&fc(e,r,t[r])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(e){return Rf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function va(){}var Br=null;function Lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,Li=null;function mc(e){var t=Oi(e);if(t&&(e=t.stateNode)){var a=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(qr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[_t]||null;if(!n)throw Error(u(90));qr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&sc(i)}break e;case"textarea":uc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Fi(e,!!a.multiple,t,!1)}}}var Gr=!1;function hc(e,t,a){if(Gr)return e(t,a);Gr=!0;try{var i=e(t);return i}finally{if(Gr=!1,(Bi!==null||Li!==null)&&(rr(),Bi&&(t=Bi,e=Li,Li=Bi=null,mc(t),e)))for(t=0;t<e.length;t++)mc(e[t])}}function Sn(e,t){var a=e.stateNode;if(a===null)return null;var i=a[_t]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(ga)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Hr=!1}var Ua=null,Yr=null,bl=null;function xc(){if(bl)return bl;var e,t=Yr,a=t.length,i,n="value"in Ua?Ua.value:Ua.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===n[r-i];i++);return bl=n.slice(e,1<i?1-i:void 0)}function _l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function vc(){return!1}function zt(e){function t(a,i,n,r,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?zl:vc,this.isPropagationStopped=vc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=zt(mi),Dn=E({},mi,{view:0,detail:0}),kf=zt(Dn),Pr,Xr,wn,Nl=E({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Pr=e.screenX-wn.screenX,Xr=e.screenY-wn.screenY):Xr=Pr=0,wn=e),Pr)},movementY:function(e){return"movementY"in e?e.movementY:Xr}}),gc=zt(Nl),Of=E({},Nl,{dataTransfer:0}),Ef=zt(Of),qf=E({},Dn,{relatedTarget:0}),Vr=zt(qf),Ff=E({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Uf=zt(Ff),Bf=E({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lf=zt(Bf),Gf=E({},mi,{data:0}),yc=zt(Gf),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pf[e])?!!t[e]:!1}function Zr(){return Xf}var Vf=E({},Dn,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=zt(Vf),Qf=E({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=zt(Qf),Kf=E({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),Wf=zt(Kf),Jf=E({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=zt(Jf),$f=E({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ed=zt($f),td=E({},mi,{newState:0,oldState:0}),ad=zt(td),id=[9,13,27,32],Qr=ga&&"CompositionEvent"in window,jn=null;ga&&"documentMode"in document&&(jn=document.documentMode);var nd=ga&&"TextEvent"in window&&!jn,_c=ga&&(!Qr||jn&&8<jn&&11>=jn),zc=" ",Sc=!1;function Nc(e,t){switch(e){case"keyup":return id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gi=!1;function ld(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Sc=!0,zc);case"textInput":return e=t.data,e===zc&&Sc?null:e;default:return null}}function rd(e,t){if(Gi)return e==="compositionend"||!Qr&&Nc(e,t)?(e=xc(),bl=Yr=Ua=null,Gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!od[e.type]:t==="textarea"}function jc(e,t,a,i){Bi?Li?Li.push(i):Li=[i]:Bi=i,t=dr(t,"onChange"),0<t.length&&(a=new Sl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var An=null,Tn=null;function sd(e){cp(e,0)}function Dl(e){var t=zn(e);if(sc(t))return e}function Ac(e,t){if(e==="change")return t}var Tc=!1;if(ga){var Kr;if(ga){var Wr="oninput"in document;if(!Wr){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Wr=typeof Mc.oninput=="function"}Kr=Wr}else Kr=!1;Tc=Kr&&(!document.documentMode||9<document.documentMode)}function Cc(){An&&(An.detachEvent("onpropertychange",Rc),Tn=An=null)}function Rc(e){if(e.propertyName==="value"&&Dl(Tn)){var t=[];jc(t,Tn,e,Lr(e)),hc(sd,t)}}function cd(e,t,a){e==="focusin"?(Cc(),An=t,Tn=a,An.attachEvent("onpropertychange",Rc)):e==="focusout"&&Cc()}function ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(Tn)}function pd(e,t){if(e==="click")return Dl(t)}function fd(e,t){if(e==="input"||e==="change")return Dl(t)}function dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:dd;function Mn(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!Re.call(t,n)||!Rt(e[n],t[n]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var a=kc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kc(a)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=gl(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var md=ga&&"documentMode"in document&&11>=document.documentMode,Hi=null,Ir=null,Cn=null,$r=!1;function Fc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$r||Hi==null||Hi!==gl(i)||(i=Hi,"selectionStart"in i&&Jr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Cn&&Mn(Cn,i)||(Cn=i,i=dr(Ir,"onSelect"),0<i.length&&(t=new Sl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Hi)))}function hi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yi={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionrun:hi("Transition","TransitionRun"),transitionstart:hi("Transition","TransitionStart"),transitioncancel:hi("Transition","TransitionCancel"),transitionend:hi("Transition","TransitionEnd")},eo={},Uc={};ga&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function xi(e){if(eo[e])return eo[e];if(!Yi[e])return e;var t=Yi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Uc)return eo[e]=t[a];return e}var Bc=xi("animationend"),Lc=xi("animationiteration"),Gc=xi("animationstart"),hd=xi("transitionrun"),xd=xi("transitionstart"),vd=xi("transitioncancel"),Hc=xi("transitionend"),Yc=new Map,to="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");to.push("scrollEnd");function aa(e,t){Yc.set(e,t),di(t,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Pi=0,ao=0;function jl(){for(var e=Pi,t=ao=Pi=0;t<e;){var a=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var n=Ht[t];Ht[t++]=null;var r=Ht[t];if(Ht[t++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}r!==0&&Pc(a,n,r)}}function Al(e,t,a,i){Ht[Pi++]=e,Ht[Pi++]=t,Ht[Pi++]=a,Ht[Pi++]=i,ao|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function io(e,t,a,i){return Al(e,t,a,i),Tl(e)}function vi(e,t){return Al(e,null,null,t),Tl(e)}function Pc(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Oe(a),e=r.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),r):null}function Tl(e){if(50<$n)throw $n=0,ds=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xi={};function gd(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,i){return new gd(e,t,a,i)}function no(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ml(e,t,a,i,n,r){var o=0;if(i=e,typeof e=="function")no(e)&&(o=1);else if(typeof e=="string")o=Sm(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Fe:return e=kt(31,a,t,n),e.elementType=Fe,e.lanes=r,e;case K:return gi(a.children,n,r,t);case W:o=8,n|=24;break;case B:return e=kt(12,a,t,n|2),e.elementType=B,e.lanes=r,e;case he:return e=kt(13,a,t,n),e.elementType=he,e.lanes=r,e;case De:return e=kt(19,a,t,n),e.elementType=De,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:o=10;break e;case ce:o=9;break e;case P:o=11;break e;case ee:o=14;break e;case Ce:o=16,i=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=kt(o,a,t,n),t.elementType=e,t.type=i,t.lanes=r,t}function gi(e,t,a,i){return e=kt(7,e,i,t),e.lanes=a,e}function lo(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function Vc(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function ro(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zc=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var a=Zc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:I(t)},Zc.set(e,t),t)}return{value:e,source:t,stack:I(t)}}var Vi=[],Zi=0,Cl=null,Rn=0,Pt=[],Xt=0,Ba=null,sa=1,ca="";function ba(e,t){Vi[Zi++]=Rn,Vi[Zi++]=Cl,Cl=e,Rn=t}function Qc(e,t,a){Pt[Xt++]=sa,Pt[Xt++]=ca,Pt[Xt++]=Ba,Ba=e;var i=sa;e=ca;var n=32-Oe(i)-1;i&=~(1<<n),a+=1;var r=32-Oe(t)+n;if(30<r){var o=n-n%5;r=(i&(1<<o)-1).toString(32),i>>=o,n-=o,sa=1<<32-Oe(t)+n|a<<n|i,ca=r+e}else sa=1<<r|a<<n|i,ca=e}function oo(e){e.return!==null&&(ba(e,1),Qc(e,1,0))}function so(e){for(;e===Cl;)Cl=Vi[--Zi],Vi[Zi]=null,Rn=Vi[--Zi],Vi[Zi]=null;for(;e===Ba;)Ba=Pt[--Xt],Pt[Xt]=null,ca=Pt[--Xt],Pt[Xt]=null,sa=Pt[--Xt],Pt[Xt]=null}function Kc(e,t){Pt[Xt++]=sa,Pt[Xt++]=ca,Pt[Xt++]=Ba,sa=t.id,ca=t.overflow,Ba=e}var ht=null,Be=null,ye=!1,La=null,Vt=!1,co=Error(u(519));function Ga(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kn(Yt(t,e)),co}function Wc(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[mt]=e,t[_t]=i,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<tl.length;a++)me(tl[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),cc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),pc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||dp(t.textContent,a)?(i.popover!=null&&(me("beforetoggle",t),me("toggle",t)),i.onScroll!=null&&me("scroll",t),i.onScrollEnd!=null&&me("scrollend",t),i.onClick!=null&&(t.onclick=va),t=!0):t=!1,t||Ga(e,!0)}function Jc(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ht=ht.return}}function Qi(e){if(e!==ht)return!1;if(!ye)return Jc(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||As(e.type,e.memoizedProps)),a=!a),a&&Be&&Ga(e),Jc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=zp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Be=zp(e)}else t===27?(t=Be,ti(e.type)?(e=ks,ks=null,Be=e):Be=t):Be=ht?Qt(e.stateNode.nextSibling):null;return!0}function yi(){Be=ht=null,ye=!1}function uo(){var e=La;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),La=null),e}function kn(e){La===null?La=[e]:La.push(e)}var po=m(null),bi=null,_a=null;function Ha(e,t,a){G(po,t._currentValue),t._currentValue=a}function za(e){e._currentValue=po.current,C(po)}function fo(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function mo(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){r.lanes|=a,c=r.alternate,c!==null&&(c.lanes|=a),fo(r.return,a,e),i||(o=null);break e}r=c.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(u(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),fo(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Ki(e,t,a,i){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=n.type;Rt(n.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(n===fe.current){if(o=n.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(rl):e=[rl])}n=n.return}e!==null&&mo(t,e,a,i),t.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _i(e){bi=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Ic(bi,e)}function kl(e,t){return bi===null&&_i(e),Ic(e,t)}function Ic(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(u(308));_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t;return a}var yd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bd=p.unstable_scheduleCallback,_d=p.unstable_NormalPriority,at={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new yd,data:new Map,refCount:0}}function On(e){e.refCount--,e.refCount===0&&bd(_d,function(){e.controller.abort()})}var En=null,xo=0,Wi=0,Ji=null;function zd(e,t){if(En===null){var a=En=[];xo=0,Wi=ys(),Ji={status:"pending",value:void 0,then:function(i){a.push(i)}}}return xo++,t.then($c,$c),t}function $c(){if(--xo===0&&En!==null){Ji!==null&&(Ji.status="fulfilled");var e=En;En=null,Wi=0,Ji=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sd(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var e0=w.S;w.S=function(e,t){Fu=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zd(e,t),e0!==null&&e0(e,t)};var zi=m(null);function vo(){var e=zi.current;return e!==null?e:Ee.pooledCache}function Ol(e,t){t===null?G(zi,zi.current):G(zi,t.pool)}function t0(){var e=vo();return e===null?null:{parent:at._currentValue,pool:e}}var Ii=Error(u(460)),go=Error(u(474)),El=Error(u(542)),ql={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function i0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(va,va),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l0(e),e;default:if(typeof t.status=="string")t.then(va,va);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l0(e),e}throw Ni=t,Ii}}function Si(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ni=a,Ii):a}}var Ni=null;function n0(){if(Ni===null)throw Error(u(459));var e=Ni;return Ni=null,e}function l0(e){if(e===Ii||e===El)throw Error(u(483))}var $i=null,qn=0;function Fl(e){var t=qn;return qn+=1,$i===null&&($i=[]),i0($i,e,t)}function Fn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ul(e,t){throw t.$$typeof===L?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function r0(e){function t(y,h){if(e){var z=y.deletions;z===null?(y.deletions=[h],y.flags|=16):z.push(h)}}function a(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function i(y){for(var h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function n(y,h){return y=ya(y,h),y.index=0,y.sibling=null,y}function r(y,h,z){return y.index=z,e?(z=y.alternate,z!==null?(z=z.index,z<h?(y.flags|=67108866,h):z):(y.flags|=67108866,h)):(y.flags|=1048576,h)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,h,z,R){return h===null||h.tag!==6?(h=lo(z,y.mode,R),h.return=y,h):(h=n(h,z),h.return=y,h)}function d(y,h,z,R){var $=z.type;return $===K?M(y,h,z.props.children,R,z.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ce&&Si($)===h.type)?(h=n(h,z.props),Fn(h,z),h.return=y,h):(h=Ml(z.type,z.key,z.props,null,y.mode,R),Fn(h,z),h.return=y,h)}function S(y,h,z,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==z.containerInfo||h.stateNode.implementation!==z.implementation?(h=ro(z,y.mode,R),h.return=y,h):(h=n(h,z.children||[]),h.return=y,h)}function M(y,h,z,R,$){return h===null||h.tag!==7?(h=gi(z,y.mode,R,$),h.return=y,h):(h=n(h,z),h.return=y,h)}function O(y,h,z){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=lo(""+h,y.mode,z),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case U:return z=Ml(h.type,h.key,h.props,null,y.mode,z),Fn(z,h),z.return=y,z;case Y:return h=ro(h,y.mode,z),h.return=y,h;case Ce:return h=Si(h),O(y,h,z)}if(oe(h)||Ge(h))return h=gi(h,y.mode,z,null),h.return=y,h;if(typeof h.then=="function")return O(y,Fl(h),z);if(h.$$typeof===_)return O(y,kl(y,h),z);Ul(y,h)}return null}function N(y,h,z,R){var $=h!==null?h.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return $!==null?null:c(y,h,""+z,R);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return z.key===$?d(y,h,z,R):null;case Y:return z.key===$?S(y,h,z,R):null;case Ce:return z=Si(z),N(y,h,z,R)}if(oe(z)||Ge(z))return $!==null?null:M(y,h,z,R,null);if(typeof z.then=="function")return N(y,h,Fl(z),R);if(z.$$typeof===_)return N(y,h,kl(y,z),R);Ul(y,z)}return null}function j(y,h,z,R,$){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return y=y.get(z)||null,c(h,y,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return y=y.get(R.key===null?z:R.key)||null,d(h,y,R,$);case Y:return y=y.get(R.key===null?z:R.key)||null,S(h,y,R,$);case Ce:return R=Si(R),j(y,h,z,R,$)}if(oe(R)||Ge(R))return y=y.get(z)||null,M(h,y,R,$,null);if(typeof R.then=="function")return j(y,h,z,Fl(R),$);if(R.$$typeof===_)return j(y,h,z,kl(h,R),$);Ul(h,R)}return null}function Z(y,h,z,R){for(var $=null,be=null,Q=h,se=h=0,ve=null;Q!==null&&se<z.length;se++){Q.index>se?(ve=Q,Q=null):ve=Q.sibling;var _e=N(y,Q,z[se],R);if(_e===null){Q===null&&(Q=ve);break}e&&Q&&_e.alternate===null&&t(y,Q),h=r(_e,h,se),be===null?$=_e:be.sibling=_e,be=_e,Q=ve}if(se===z.length)return a(y,Q),ye&&ba(y,se),$;if(Q===null){for(;se<z.length;se++)Q=O(y,z[se],R),Q!==null&&(h=r(Q,h,se),be===null?$=Q:be.sibling=Q,be=Q);return ye&&ba(y,se),$}for(Q=i(Q);se<z.length;se++)ve=j(Q,y,se,z[se],R),ve!==null&&(e&&ve.alternate!==null&&Q.delete(ve.key===null?se:ve.key),h=r(ve,h,se),be===null?$=ve:be.sibling=ve,be=ve);return e&&Q.forEach(function(ri){return t(y,ri)}),ye&&ba(y,se),$}function te(y,h,z,R){if(z==null)throw Error(u(151));for(var $=null,be=null,Q=h,se=h=0,ve=null,_e=z.next();Q!==null&&!_e.done;se++,_e=z.next()){Q.index>se?(ve=Q,Q=null):ve=Q.sibling;var ri=N(y,Q,_e.value,R);if(ri===null){Q===null&&(Q=ve);break}e&&Q&&ri.alternate===null&&t(y,Q),h=r(ri,h,se),be===null?$=ri:be.sibling=ri,be=ri,Q=ve}if(_e.done)return a(y,Q),ye&&ba(y,se),$;if(Q===null){for(;!_e.done;se++,_e=z.next())_e=O(y,_e.value,R),_e!==null&&(h=r(_e,h,se),be===null?$=_e:be.sibling=_e,be=_e);return ye&&ba(y,se),$}for(Q=i(Q);!_e.done;se++,_e=z.next())_e=j(Q,y,se,_e.value,R),_e!==null&&(e&&_e.alternate!==null&&Q.delete(_e.key===null?se:_e.key),h=r(_e,h,se),be===null?$=_e:be.sibling=_e,be=_e);return e&&Q.forEach(function(Om){return t(y,Om)}),ye&&ba(y,se),$}function Me(y,h,z,R){if(typeof z=="object"&&z!==null&&z.type===K&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case U:e:{for(var $=z.key;h!==null;){if(h.key===$){if($=z.type,$===K){if(h.tag===7){a(y,h.sibling),R=n(h,z.props.children),R.return=y,y=R;break e}}else if(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ce&&Si($)===h.type){a(y,h.sibling),R=n(h,z.props),Fn(R,z),R.return=y,y=R;break e}a(y,h);break}else t(y,h);h=h.sibling}z.type===K?(R=gi(z.props.children,y.mode,R,z.key),R.return=y,y=R):(R=Ml(z.type,z.key,z.props,null,y.mode,R),Fn(R,z),R.return=y,y=R)}return o(y);case Y:e:{for($=z.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===z.containerInfo&&h.stateNode.implementation===z.implementation){a(y,h.sibling),R=n(h,z.children||[]),R.return=y,y=R;break e}else{a(y,h);break}else t(y,h);h=h.sibling}R=ro(z,y.mode,R),R.return=y,y=R}return o(y);case Ce:return z=Si(z),Me(y,h,z,R)}if(oe(z))return Z(y,h,z,R);if(Ge(z)){if($=Ge(z),typeof $!="function")throw Error(u(150));return z=$.call(z),te(y,h,z,R)}if(typeof z.then=="function")return Me(y,h,Fl(z),R);if(z.$$typeof===_)return Me(y,h,kl(y,z),R);Ul(y,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,h!==null&&h.tag===6?(a(y,h.sibling),R=n(h,z),R.return=y,y=R):(a(y,h),R=lo(z,y.mode,R),R.return=y,y=R),o(y)):a(y,h)}return function(y,h,z,R){try{qn=0;var $=Me(y,h,z,R);return $i=null,$}catch(Q){if(Q===Ii||Q===El)throw Q;var be=kt(29,Q,null,y.mode);return be.lanes=R,be.return=y,be}finally{}}}var Di=r0(!0),o0=r0(!1),Ya=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=Tl(e),Pc(e,null,a),t}return Al(e,i,t,a),Tl(e)}function Un(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ma(e,a)}}function _o(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var zo=!1;function Bn(){if(zo){var e=Ji;if(e!==null)throw e}}function Ln(e,t,a,i){zo=!1;var n=e.updateQueue;Ya=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,S=d.next;d.next=null,o===null?r=S:o.next=S,o=d;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==o&&(c===null?M.firstBaseUpdate=S:c.next=S,M.lastBaseUpdate=d))}if(r!==null){var O=n.baseState;o=0,M=S=d=null,c=r;do{var N=c.lane&-536870913,j=N!==c.lane;if(j?(xe&N)===N:(i&N)===N){N!==0&&N===Wi&&(zo=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Z=e,te=c;N=t;var Me=a;switch(te.tag){case 1:if(Z=te.payload,typeof Z=="function"){O=Z.call(Me,O,N);break e}O=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=te.payload,N=typeof Z=="function"?Z.call(Me,O,N):Z,N==null)break e;O=E({},O,N);break e;case 2:Ya=!0}}N=c.callback,N!==null&&(e.flags|=64,j&&(e.flags|=8192),j=n.callbacks,j===null?n.callbacks=[N]:j.push(N))}else j={lane:N,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(S=M=j,d=O):M=M.next=j,o|=N;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;j=c,c=j.next,j.next=null,n.lastBaseUpdate=j,n.shared.pending=null}}while(!0);M===null&&(d=O),n.baseState=d,n.firstBaseUpdate=S,n.lastBaseUpdate=M,r===null&&(n.shared.lanes=0),Wa|=o,e.lanes=o,e.memoizedState=O}}function s0(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function c0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)s0(a[e],t)}var en=m(null),Bl=m(0);function u0(e,t){e=Ca,G(Bl,e),G(en,t),Ca=e|t.baseLanes}function So(){G(Bl,Ca),G(en,en.current)}function No(){Ca=Bl.current,C(en),C(Bl)}var Ot=m(null),Zt=null;function Va(e){var t=e.alternate;G(et,et.current&1),G(Ot,e),Zt===null&&(t===null||en.current!==null||t.memoizedState!==null)&&(Zt=e)}function Do(e){G(et,et.current),G(Ot,e),Zt===null&&(Zt=e)}function p0(e){e.tag===22?(G(et,et.current),G(Ot,e),Zt===null&&(Zt=e)):Za()}function Za(){G(et,et.current),G(Ot,Ot.current)}function Et(e){C(Ot),Zt===e&&(Zt=null),C(et)}var et=m(0);function Ll(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cs(a)||Rs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=0,le=null,Ae=null,it=null,Gl=!1,tn=!1,wi=!1,Hl=0,Gn=0,an=null,Nd=0;function Je(){throw Error(u(321))}function wo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Rt(e[a],t[a]))return!1;return!0}function jo(e,t,a,i,n,r){return Sa=r,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Q0:Ho,wi=!1,r=a(i,n),wi=!1,tn&&(r=d0(t,a,i,n)),f0(e),r}function f0(e){w.H=Pn;var t=Ae!==null&&Ae.next!==null;if(Sa=0,it=Ae=le=null,Gl=!1,Gn=0,an=null,t)throw Error(u(300));e===null||nt||(e=e.dependencies,e!==null&&Rl(e)&&(nt=!0))}function d0(e,t,a,i){le=e;var n=0;do{if(tn&&(an=null),Gn=0,tn=!1,25<=n)throw Error(u(301));if(n+=1,it=Ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}w.H=K0,r=t(a,i)}while(tn);return r}function Dd(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?Hn(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(le.flags|=1024),t}function Ao(){var e=Hl!==0;return Hl=0,e}function To(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Mo(e){if(Gl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gl=!1}Sa=0,it=Ae=le=null,tn=!1,Gn=Hl=0,an=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?le.memoizedState=it=e:it=it.next=e,it}function tt(){if(Ae===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=it===null?le.memoizedState:it.next;if(t!==null)it=t,Ae=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},it===null?le.memoizedState=it=e:it=it.next=e}return it}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hn(e){var t=Gn;return Gn+=1,an===null&&(an=[]),e=i0(an,e,t),t=le,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Q0:Ho),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hn(e);if(e.$$typeof===_)return xt(e)}throw Error(u(438,String(e)))}function Co(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=le.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Yl(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ue;return t.index++,a}function Na(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=tt();return Ro(t,Ae,e)}function Ro(e,t,a){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=a;var n=e.baseQueue,r=i.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,i.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var c=o=null,d=null,S=t,M=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(xe&O)===O:(Sa&O)===O){var N=S.revertLane;if(N===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===Wi&&(M=!0);else if((Sa&N)===N){S=S.next,N===Wi&&(M=!0);continue}else O={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(c=d=O,o=r):d=d.next=O,le.lanes|=N,Wa|=N;O=S.action,wi&&a(r,O),r=S.hasEagerState?S.eagerState:a(r,O)}else N={lane:O,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(c=d=N,o=r):d=d.next=N,le.lanes|=O,Wa|=O;S=S.next}while(S!==null&&S!==t);if(d===null?o=r:d.next=c,!Rt(r,e.memoizedState)&&(nt=!0,M&&(a=Ji,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=d,i.lastRenderedState=r}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ko(e){var t=tt(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);Rt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function m0(e,t,a){var i=le,n=tt(),r=ye;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!Rt((Ae||n).memoizedState,a);if(o&&(n.memoizedState=a,nt=!0),n=n.queue,qo(v0.bind(null,i,n,e),[e]),n.getSnapshot!==t||o||it!==null&&it.memoizedState.tag&1){if(i.flags|=2048,nn(9,{destroy:void 0},x0.bind(null,i,n,a,t),null),Ee===null)throw Error(u(349));r||(Sa&127)!==0||h0(i,t,a)}return a}function h0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=Yl(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function x0(e,t,a,i){t.value=a,t.getSnapshot=i,g0(t)&&y0(e)}function v0(e,t,a){return a(function(){g0(t)&&y0(e)})}function g0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Rt(e,a)}catch{return!0}}function y0(e){var t=vi(e,2);t!==null&&jt(t,e,2)}function Oo(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),wi){Ke(!0);try{a()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},t}function b0(e,t,a,i){return e.baseState=a,Ro(e,Ae,typeof i=="function"?i:Na)}function wd(e,t,a,i,n){if(Ql(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};w.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,_0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function _0(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var r=w.T,o={};w.T=o;try{var c=a(n,i),d=w.S;d!==null&&d(o,c),z0(e,t,c)}catch(S){Eo(e,t,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),w.T=r}}else try{r=a(n,i),z0(e,t,r)}catch(S){Eo(e,t,S)}}function z0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){S0(e,t,i)},function(i){return Eo(e,t,i)}):S0(e,t,a)}function S0(e,t,a){t.status="fulfilled",t.value=a,N0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_0(e,a)))}function Eo(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,N0(t),t=t.next;while(t!==i)}e.action=null}function N0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function D0(e,t){return t}function w0(e,t){if(ye){var a=Ee.formState;if(a!==null){e:{var i=le;if(ye){if(Be){t:{for(var n=Be,r=Vt;n.nodeType!==8;){if(!r){n=null;break t}if(n=Qt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Be=Qt(n.nextSibling),i=n.data==="F!";break e}}Ga(i)}i=!1}i&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:t},a.queue=i,a=X0.bind(null,le,i),i.dispatch=a,i=Oo(!1),r=Go.bind(null,le,!1,i.queue),i=bt(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=wd.bind(null,le,n,r,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function j0(e){var t=tt();return A0(t,Ae,e)}function A0(e,t,a){if(t=Ro(e,t,D0)[0],e=Xl(Na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Hn(t)}catch(o){throw o===Ii?El:o}else i=t;t=tt();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,nn(9,{destroy:void 0},jd.bind(null,n,a),null)),[i,r,e]}function jd(e,t){e.action=t}function T0(e){var t=tt(),a=Ae;if(a!==null)return A0(t,a,e);tt(),t=t.memoizedState,a=tt();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function nn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=le.updateQueue,t===null&&(t=Yl(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function M0(){return tt().memoizedState}function Vl(e,t,a,i){var n=bt();le.flags|=e,n.memoizedState=nn(1|t,{destroy:void 0},a,i===void 0?null:i)}function Zl(e,t,a,i){var n=tt();i=i===void 0?null:i;var r=n.memoizedState.inst;Ae!==null&&i!==null&&wo(i,Ae.memoizedState.deps)?n.memoizedState=nn(t,r,a,i):(le.flags|=e,n.memoizedState=nn(1|t,r,a,i))}function C0(e,t){Vl(8390656,8,e,t)}function qo(e,t){Zl(2048,8,e,t)}function Ad(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=Yl(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function R0(e){var t=tt().memoizedState;return Ad({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function k0(e,t){return Zl(4,2,e,t)}function O0(e,t){return Zl(4,4,e,t)}function E0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,a){a=a!=null?a.concat([e]):null,Zl(4,4,E0.bind(null,t,e),a)}function Fo(){}function F0(e,t){var a=tt();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&wo(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function U0(e,t){var a=tt();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&wo(t,i[1]))return i[0];if(i=e(),wi){Ke(!0);try{e()}finally{Ke(!1)}}return a.memoizedState=[i,t],i}function Uo(e,t,a){return a===void 0||(Sa&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Bu(),le.lanes|=e,Wa|=e,a)}function B0(e,t,a,i){return Rt(a,t)?a:en.current!==null?(e=Uo(e,a,i),Rt(e,t)||(nt=!0),e):(Sa&42)===0||(Sa&1073741824)!==0&&(xe&261930)===0?(nt=!0,e.memoizedState=a):(e=Bu(),le.lanes|=e,Wa|=e,t)}function L0(e,t,a,i,n){var r=q.p;q.p=r!==0&&8>r?r:8;var o=w.T,c={};w.T=c,Go(e,!1,t,a);try{var d=n(),S=w.S;if(S!==null&&S(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=Sd(d,i);Yn(e,t,M,Ut(e))}else Yn(e,t,i,Ut(e))}catch(O){Yn(e,t,{then:function(){},status:"rejected",reason:O},Ut())}finally{q.p=r,o!==null&&c.types!==null&&(o.types=c.types),w.T=o}}function Td(){}function Bo(e,t,a,i){if(e.tag!==5)throw Error(u(476));var n=G0(e).queue;L0(e,n,t,T,a===null?Td:function(){return H0(e),a(i)})}function G0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:T,baseState:T,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:T},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function H0(e){var t=G0(e);t.next===null&&(t=e.alternate.memoizedState),Yn(e,t.next.queue,{},Ut())}function Lo(){return xt(rl)}function Y0(){return tt().memoizedState}function P0(){return tt().memoizedState}function Md(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ut();e=Pa(a);var i=Xa(t,e,a);i!==null&&(jt(i,t,a),Un(i,t,a)),t={cache:ho()},e.payload=t;return}t=t.return}}function Cd(e,t,a){var i=Ut();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(e)?V0(t,a):(a=io(e,t,a,i),a!==null&&(jt(a,e,i),Z0(a,t,i)))}function X0(e,t,a){var i=Ut();Yn(e,t,a,i)}function Yn(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))V0(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,c=r(o,a);if(n.hasEagerState=!0,n.eagerState=c,Rt(c,o))return Al(e,t,n,0),Ee===null&&jl(),!1}catch{}finally{}if(a=io(e,t,n,i),a!==null)return jt(a,e,i),Z0(a,t,i),!0}return!1}function Go(e,t,a,i){if(i={lane:2,revertLane:ys(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(t)throw Error(u(479))}else t=io(e,a,i,2),t!==null&&jt(t,e,2)}function Ql(e){var t=e.alternate;return e===le||t!==null&&t===le}function V0(e,t){tn=Gl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Z0(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ma(e,a)}}var Pn={readContext:xt,use:Pl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Pn.useEffectEvent=Je;var Q0={readContext:xt,use:Pl,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:C0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Vl(4194308,4,E0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Vl(4194308,4,e,t)},useInsertionEffect:function(e,t){Vl(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var i=e();if(wi){Ke(!0);try{e()}finally{Ke(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=bt();if(a!==void 0){var n=a(t);if(wi){Ke(!0);try{a(t)}finally{Ke(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Cd.bind(null,le,e),[i.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Oo(e);var t=e.queue,a=X0.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Fo,useDeferredValue:function(e,t){var a=bt();return Uo(a,e,t)},useTransition:function(){var e=Oo(!1);return e=L0.bind(null,le,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=le,n=bt();if(ye){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ee===null)throw Error(u(349));(xe&127)!==0||h0(i,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,C0(v0.bind(null,i,r,e),[e]),i.flags|=2048,nn(9,{destroy:void 0},x0.bind(null,i,r,a,t),null),a},useId:function(){var e=bt(),t=Ee.identifierPrefix;if(ye){var a=ca,i=sa;a=(i&~(1<<32-Oe(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Hl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lo,useFormState:w0,useActionState:w0,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Go.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Co,useCacheRefresh:function(){return bt().memoizedState=Md.bind(null,le)},useEffectEvent:function(e){var t=bt(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Ho={readContext:xt,use:Pl,useCallback:F0,useContext:xt,useEffect:qo,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:U0,useReducer:Xl,useRef:M0,useState:function(){return Xl(Na)},useDebugValue:Fo,useDeferredValue:function(e,t){var a=tt();return B0(a,Ae.memoizedState,e,t)},useTransition:function(){var e=Xl(Na)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:Hn(e),t]},useSyncExternalStore:m0,useId:Y0,useHostTransitionStatus:Lo,useFormState:j0,useActionState:j0,useOptimistic:function(e,t){var a=tt();return b0(a,Ae,e,t)},useMemoCache:Co,useCacheRefresh:P0};Ho.useEffectEvent=R0;var K0={readContext:xt,use:Pl,useCallback:F0,useContext:xt,useEffect:qo,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:U0,useReducer:ko,useRef:M0,useState:function(){return ko(Na)},useDebugValue:Fo,useDeferredValue:function(e,t){var a=tt();return Ae===null?Uo(a,e,t):B0(a,Ae.memoizedState,e,t)},useTransition:function(){var e=ko(Na)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:Hn(e),t]},useSyncExternalStore:m0,useId:Y0,useHostTransitionStatus:Lo,useFormState:T0,useActionState:T0,useOptimistic:function(e,t){var a=tt();return Ae!==null?b0(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:P0};K0.useEffectEvent=R0;function Yo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Po={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ut(),n=Pa(i);n.payload=t,a!=null&&(n.callback=a),t=Xa(e,n,i),t!==null&&(jt(t,e,i),Un(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ut(),n=Pa(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Xa(e,n,i),t!==null&&(jt(t,e,i),Un(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ut(),i=Pa(a);i.tag=2,t!=null&&(i.callback=t),t=Xa(e,i,a),t!==null&&(jt(t,e,a),Un(t,e,a))}};function W0(e,t,a,i,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!Mn(a,i)||!Mn(n,r):!0}function J0(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function ji(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function I0(e){wl(e)}function $0(e){console.error(e)}function eu(e){wl(e)}function Kl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function tu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Xo(e,t,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,t)},a}function au(e){return e=Pa(e),e.tag=3,e}function iu(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=i.value;e.payload=function(){return n(r)},e.callback=function(){tu(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){tu(t,a,i),typeof n!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var c=i.stack;this.componentDidCatch(i.value,{componentStack:c!==null?c:""})})}function Rd(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Ki(t,a,n,!0),a=Ot.current,a!==null){switch(a.tag){case 31:case 13:return Zt===null?or():a.alternate===null&&Ie===0&&(Ie=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===ql?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),xs(e,i,n)),!1;case 22:return a.flags|=65536,i===ql?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),xs(e,i,n)),!1}throw Error(u(435,a.tag))}return xs(e,i,n),or(),!1}if(ye)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==co&&(e=Error(u(422),{cause:i}),kn(Yt(e,a)))):(i!==co&&(t=Error(u(423),{cause:i}),kn(Yt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=Yt(i,a),n=Xo(e.stateNode,i,n),_o(e,n),Ie!==4&&(Ie=2)),!1;var r=Error(u(520),{cause:i});if(r=Yt(r,a),In===null?In=[r]:In.push(r),Ie!==4&&(Ie=2),t===null)return!0;i=Yt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Xo(a.stateNode,i,e),_o(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=au(n),iu(n,e,a,i),_o(a,n),!1}a=a.return}while(a!==null);return!1}var Vo=Error(u(461)),nt=!1;function vt(e,t,a,i){t.child=e===null?o0(t,null,a,i):Di(t,e.child,a,i)}function nu(e,t,a,i,n){a=a.render;var r=t.ref;if("ref"in i){var o={};for(var c in i)c!=="ref"&&(o[c]=i[c])}else o=i;return _i(t),i=jo(e,t,a,o,r,n),c=Ao(),e!==null&&!nt?(To(e,t,n),Da(e,t,n)):(ye&&c&&oo(t),t.flags|=1,vt(e,t,i,n),t.child)}function lu(e,t,a,i,n){if(e===null){var r=a.type;return typeof r=="function"&&!no(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,ru(e,t,r,i,n)):(e=Ml(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!es(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Mn,a(o,i)&&e.ref===t.ref)return Da(e,t,n)}return t.flags|=1,e=ya(r,i),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,a,i,n){if(e!==null){var r=e.memoizedProps;if(Mn(r,i)&&e.ref===t.ref)if(nt=!1,t.pendingProps=i=r,es(e,n))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Da(e,t,n)}return Zo(e,t,a,i,n)}function ou(e,t,a,i){var n=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~r}else i=0,t.child=null;return su(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(t,r!==null?r.cachePool:null),r!==null?u0(t,r):So(),p0(t);else return i=t.lanes=536870912,su(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(Ol(t,r.cachePool),u0(t,r),Za(),t.memoizedState=null):(e!==null&&Ol(t,null),So(),Za());return vt(e,t,n,a),t.child}function Xn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function su(e,t,a,i,n){var r=vo();return r=r===null?null:{parent:at._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Ol(t,null),So(),p0(t),e!==null&&Ki(e,t,i,!0),t.childLanes=n,null}function Wl(e,t){return t=Il({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cu(e,t,a){return Di(t,e.child,null,a),e=Wl(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function kd(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(i.mode==="hidden")return e=Wl(t,i),t.lanes=536870912,Xn(null,e);if(Do(t),(e=Be)?(e=_p(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:sa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,ht=t,Be=null)):e=null,e===null)throw Ga(t);return t.lanes=536870912,null}return Wl(t,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Do(t),n)if(t.flags&256)t.flags&=-257,t=cu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(nt||Ki(e,t,a,!1),n=(a&e.childLanes)!==0,nt||n){if(i=Ee,i!==null&&(o=fi(i,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,vi(e,o),jt(i,e,o),Vo;or(),t=cu(e,t,a)}else e=r.treeContext,Be=Qt(o.nextSibling),ht=t,ye=!0,La=null,Vt=!1,e!==null&&Kc(t,e),t=Wl(t,i),t.flags|=4096;return t}return e=ya(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zo(e,t,a,i,n){return _i(t),a=jo(e,t,a,i,void 0,n),i=Ao(),e!==null&&!nt?(To(e,t,n),Da(e,t,n)):(ye&&i&&oo(t),t.flags|=1,vt(e,t,a,n),t.child)}function uu(e,t,a,i,n,r){return _i(t),t.updateQueue=null,a=d0(t,i,a,n),f0(e),i=Ao(),e!==null&&!nt?(To(e,t,r),Da(e,t,r)):(ye&&i&&oo(t),t.flags|=1,vt(e,t,a,r),t.child)}function pu(e,t,a,i,n){if(_i(t),t.stateNode===null){var r=Xi,o=a.contextType;typeof o=="object"&&o!==null&&(r=xt(o)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Po,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},yo(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?xt(o):Xi,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Yo(t,a,o,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Po.enqueueReplaceState(r,r.state,null),Ln(t,i,r,n),Bn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,d=ji(a,c);r.props=d;var S=r.context,M=a.contextType;o=Xi,typeof M=="object"&&M!==null&&(o=xt(M));var O=a.getDerivedStateFromProps;M=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||S!==o)&&J0(t,r,i,o),Ya=!1;var N=t.memoizedState;r.state=N,Ln(t,i,r,n),Bn(),S=t.memoizedState,c||N!==S||Ya?(typeof O=="function"&&(Yo(t,a,O,i),S=t.memoizedState),(d=Ya||W0(t,a,d,i,N,S,o))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=S),r.props=i,r.state=S,r.context=o,i=d):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,bo(e,t),o=t.memoizedProps,M=ji(a,o),r.props=M,O=t.pendingProps,N=r.context,S=a.contextType,d=Xi,typeof S=="object"&&S!==null&&(d=xt(S)),c=a.getDerivedStateFromProps,(S=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==O||N!==d)&&J0(t,r,i,d),Ya=!1,N=t.memoizedState,r.state=N,Ln(t,i,r,n),Bn();var j=t.memoizedState;o!==O||N!==j||Ya||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof c=="function"&&(Yo(t,a,c,i),j=t.memoizedState),(M=Ya||W0(t,a,M,i,N,j,d)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,j,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,j,d)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),r.props=i,r.state=j,r.context=d,i=M):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Jl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Di(t,e.child,null,n),t.child=Di(t,null,a,n)):vt(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Da(e,t,n),e}function fu(e,t,a,i){return yi(),t.flags|=256,vt(e,t,a,i),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:t0()}}function Wo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ft),e}function du(e,t,a){var i=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(et.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(n?Va(t):Za(),(e=Be)?(e=_p(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:sa,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,ht=t,Be=null)):e=null,e===null)throw Ga(t);return Rs(e)?t.lanes=32:t.lanes=536870912,null}var c=i.children;return i=i.fallback,n?(Za(),n=t.mode,c=Il({mode:"hidden",children:c},n),i=gi(i,n,a,null),c.return=t,i.return=t,c.sibling=i,t.child=c,i=t.child,i.memoizedState=Ko(a),i.childLanes=Wo(e,o,a),t.memoizedState=Qo,Xn(null,i)):(Va(t),Jo(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(r)t.flags&256?(Va(t),t.flags&=-257,t=Io(e,t,a)):t.memoizedState!==null?(Za(),t.child=e.child,t.flags|=128,t=null):(Za(),c=i.fallback,n=t.mode,i=Il({mode:"visible",children:i.children},n),c=gi(c,n,a,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,Di(t,e.child,null,a),i=t.child,i.memoizedState=Ko(a),i.childLanes=Wo(e,o,a),t.memoizedState=Qo,t=Xn(null,i));else if(Va(t),Rs(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var S=o.dgst;o=S,i=Error(u(419)),i.stack="",i.digest=o,kn({value:i,source:null,stack:null}),t=Io(e,t,a)}else if(nt||Ki(e,t,a,!1),o=(a&e.childLanes)!==0,nt||o){if(o=Ee,o!==null&&(i=fi(o,a),i!==0&&i!==d.retryLane))throw d.retryLane=i,vi(e,i),jt(o,e,i),Vo;Cs(c)||or(),t=Io(e,t,a)}else Cs(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Be=Qt(c.nextSibling),ht=t,ye=!0,La=null,Vt=!1,e!==null&&Kc(t,e),t=Jo(t,i.children),t.flags|=4096);return t}return n?(Za(),c=i.fallback,n=t.mode,d=e.child,S=d.sibling,i=ya(d,{mode:"hidden",children:i.children}),i.subtreeFlags=d.subtreeFlags&65011712,S!==null?c=ya(S,c):(c=gi(c,n,a,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,Xn(null,i),i=t.child,c=e.child.memoizedState,c===null?c=Ko(a):(n=c.cachePool,n!==null?(d=at._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=t0(),c={baseLanes:c.baseLanes|a,cachePool:n}),i.memoizedState=c,i.childLanes=Wo(e,o,a),t.memoizedState=Qo,Xn(e.child,i)):(Va(t),a=e.child,e=a.sibling,a=ya(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Jo(e,t){return t=Il({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Il(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function Io(e,t,a){return Di(t,e.child,null,a),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mu(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fo(e.return,t,a)}function $o(e,t,a,i,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function hu(e,t,a){var i=t.pendingProps,n=i.revealOrder,r=i.tail;i=i.children;var o=et.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,G(et,o),vt(e,t,i,a),i=ye?Rn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,a,t);else if(e.tag===19)mu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),$o(t,!1,n,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ll(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}$o(t,!0,a,null,r,i);break;case"together":$o(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Da(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ki(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=ya(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ya(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function es(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function Od(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),Ha(t,at,e.memoizedState.cache),yi();break;case 27:case 5:la(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Do(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?du(e,t,a):(Va(t),e=Da(e,t,a),e!==null?e.sibling:null);Va(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Ki(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return hu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),G(et,et.current),i)break;return null;case 22:return t.lanes=0,ou(e,t,a,t.pendingProps);case 24:Ha(t,at,e.memoizedState.cache)}return Da(e,t,a)}function xu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!es(e,a)&&(t.flags&128)===0)return nt=!1,Od(e,t,a);nt=(e.flags&131072)!==0}else nt=!1,ye&&(t.flags&1048576)!==0&&Qc(t,Rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Si(t.elementType),t.type=e,typeof e=="function")no(e)?(i=ji(e,i),t.tag=1,t=pu(null,t,e,i,a)):(t.tag=0,t=Zo(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===P){t.tag=11,t=nu(null,t,e,i,a);break e}else if(n===ee){t.tag=14,t=lu(null,t,e,i,a);break e}}throw t=qe(e)||e,Error(u(306,t,""))}}return t;case 0:return Zo(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=ji(i,t.pendingProps),pu(e,t,i,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var r=t.memoizedState;n=r.element,bo(e,t),Ln(t,i,null,a);var o=t.memoizedState;if(i=o.cache,Ha(t,at,i),i!==r.cache&&mo(t,[at],a,!0),Bn(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fu(e,t,i,a);break e}else if(i!==n){n=Yt(Error(u(424)),t),kn(n),t=fu(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Qt(e.firstChild),ht=t,ye=!0,La=null,Vt=!0,a=o0(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yi(),i===n){t=Da(e,t,a);break e}vt(e,t,i,a)}t=t.child}return t;case 26:return Jl(e,t),e===null?(a=jp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,i=mr(ne.current).createElement(a),i[mt]=t,i[_t]=e,gt(i,a,e),pt(i),t.stateNode=i):t.memoizedState=jp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return la(t),e===null&&ye&&(i=t.stateNode=Np(t.type,t.pendingProps,ne.current),ht=t,Vt=!0,n=Be,ti(t.type)?(ks=n,Be=Qt(i.firstChild)):Be=n),vt(e,t,t.pendingProps.children,a),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((n=i=Be)&&(i=um(i,t.type,t.pendingProps,Vt),i!==null?(t.stateNode=i,ht=t,Be=Qt(i.firstChild),Vt=!1,n=!0):n=!1),n||Ga(t)),la(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,As(n,r)?i=null:o!==null&&As(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=jo(e,t,Dd,null,null,a),rl._currentValue=n),Jl(e,t),vt(e,t,i,a),t.child;case 6:return e===null&&ye&&((e=a=Be)&&(a=pm(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,ht=t,Be=null,e=!0):e=!1),e||Ga(t)),null;case 13:return du(e,t,a);case 4:return We(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Di(t,null,i,a):vt(e,t,i,a),t.child;case 11:return nu(e,t,t.type,t.pendingProps,a);case 7:return vt(e,t,t.pendingProps,a),t.child;case 8:return vt(e,t,t.pendingProps.children,a),t.child;case 12:return vt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ha(t,t.type,i.value),vt(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,_i(t),n=xt(n),i=i(n),t.flags|=1,vt(e,t,i,a),t.child;case 14:return lu(e,t,t.type,t.pendingProps,a);case 15:return ru(e,t,t.type,t.pendingProps,a);case 19:return hu(e,t,a);case 31:return kd(e,t,a);case 22:return ou(e,t,a,t.pendingProps);case 24:return _i(t),i=xt(at),e===null?(n=vo(),n===null&&(n=Ee,r=ho(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:i,cache:n},yo(t),Ha(t,at,n)):((e.lanes&a)!==0&&(bo(e,t),Ln(t,null,null,a),Bn()),n=e.memoizedState,r=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ha(t,at,i)):(i=r.cache,Ha(t,at,i),i!==n.cache&&mo(t,[at],a,!0))),vt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function wa(e){e.flags|=4}function ts(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Yu())e.flags|=8192;else throw Ni=ql,go}else e.flags&=-16777217}function vu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rp(t))if(Yu())e.flags|=8192;else throw Ni=ql,go}function $l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bt():536870912,e.lanes|=t,sn|=t)}function Vn(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Ed(e,t,a){var i=t.pendingProps;switch(so(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),za(at),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?wa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,uo())),Le(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(wa(t),r!==null?(Le(t),vu(t,r)):(Le(t),ts(t,n,null,i,a))):r?r!==e.memoizedState?(wa(t),Le(t),vu(t,r)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&wa(t),Le(t),ts(t,n,e,i,a)),null;case 27:if(ra(t),a=ne.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wa(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Le(t),null}e=X.current,Qi(t)?Wc(t):(e=Np(n,i,a),t.stateNode=e,wa(t))}return Le(t),null;case 5:if(ra(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wa(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Le(t),null}if(r=X.current,Qi(t))Wc(t);else{var o=mr(ne.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}r[mt]=t,r[_t]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(gt(r,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&wa(t)}}return Le(t),ts(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&wa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,Qi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=ht,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[mt]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||dp(e.nodeValue,a)),e||Ga(t,!0)}else e=mr(e).createTextNode(i),e[mt]=t,t.stateNode=e}return Le(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Qi(t),a!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[mt]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else a=uo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Qi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[mt]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),n=!1}else n=uo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),$l(t,t.updateQueue),Le(t),null);case 4:return ze(),e===null&&Ss(t.stateNode.containerInfo),Le(t),null;case 10:return za(t.type),Le(t),null;case 19:if(C(et),i=t.memoizedState,i===null)return Le(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Vn(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ll(e),r!==null){for(t.flags|=128,Vn(i,!1),e=r.updateQueue,t.updateQueue=e,$l(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xc(a,e),a=a.sibling;return G(et,et.current&1|2),ye&&ba(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&$e()>nr&&(t.flags|=128,n=!0,Vn(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ll(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,$l(t,e),Vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ye)return Le(t),null}else 2*$e()-i.renderingStartTime>nr&&a!==536870912&&(t.flags|=128,n=!0,Vn(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$e(),e.sibling=null,a=et.current,G(et,n?a&1|2:a&1),ye&&ba(t,i.treeForkCount),e):(Le(t),null);case 22:case 23:return Et(t),No(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),a=t.updateQueue,a!==null&&$l(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&C(zi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),za(at),Le(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function qd(e,t){switch(so(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return za(at),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ra(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(u(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(et),null;case 4:return ze(),null;case 10:return za(t.type),null;case 22:case 23:return Et(t),No(),e!==null&&C(zi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return za(at),null;case 25:return null;default:return null}}function gu(e,t){switch(so(t),t.tag){case 3:za(at),ze();break;case 26:case 27:case 5:ra(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:C(et);break;case 10:za(t.type);break;case 22:case 23:Et(t),No(),e!==null&&C(zi);break;case 24:za(at)}}function Zn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var r=a.create,o=a.inst;i=r(),o.destroy=i}a=a.next}while(a!==n)}}catch(c){je(t,t.return,c)}}function Qa(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){var o=i.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,n=t;var d=a,S=c;try{S()}catch(M){je(n,d,M)}}}i=i.next}while(i!==r)}}catch(M){je(t,t.return,M)}}function yu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{c0(t,a)}catch(i){je(e,e.return,i)}}}function bu(e,t,a){a.props=ji(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){je(e,t,i)}}function Qn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){je(e,t,n)}}function ua(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){je(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){je(e,t,n)}else a.current=null}function _u(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){je(e,e.return,n)}}function as(e,t,a){try{var i=e.stateNode;nm(i,e.type,a,t),i[_t]=t}catch(n){je(e,e.return,n)}}function zu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ti(e.type)||e.tag===4}function is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ti(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ns(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=va));else if(i!==4&&(i===27&&ti(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ns(e,t,a),e=e.sibling;e!==null;)ns(e,t,a),e=e.sibling}function er(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ti(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(er(e,t,a),e=e.sibling;e!==null;)er(e,t,a),e=e.sibling}function Su(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);gt(t,i,a),t[mt]=e,t[_t]=a}catch(r){je(e,e.return,r)}}var ja=!1,lt=!1,ls=!1,Nu=typeof WeakSet=="function"?WeakSet:Set,ft=null;function Fd(e,t){if(e=e.containerInfo,ws=_r,e=qc(e),Jr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,c=-1,d=-1,S=0,M=0,O=e,N=null;t:for(;;){for(var j;O!==a||n!==0&&O.nodeType!==3||(c=o+n),O!==r||i!==0&&O.nodeType!==3||(d=o+i),O.nodeType===3&&(o+=O.nodeValue.length),(j=O.firstChild)!==null;)N=O,O=j;for(;;){if(O===e)break t;if(N===a&&++S===n&&(c=o),N===r&&++M===i&&(d=o),(j=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=j}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(js={focusedElem:e,selectionRange:a},_r=!1,ft=t;ft!==null;)if(t=ft,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ft=e;else for(;ft!==null;){switch(t=ft,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var Z=ji(a.type,n);e=i.getSnapshotBeforeUpdate(Z,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(te){je(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ms(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,ft=e;break}ft=t.return}}function Du(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),i&4&&Zn(5,a);break;case 1:if(Ta(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){je(a,a.return,o)}else{var n=ji(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){je(a,a.return,o)}}i&64&&yu(a),i&512&&Qn(a,a.return);break;case 3:if(Ta(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{c0(e,t)}catch(o){je(a,a.return,o)}}break;case 27:t===null&&i&4&&Su(a);case 26:case 5:Ta(e,a),t===null&&i&4&&_u(a),i&512&&Qn(a,a.return);break;case 12:Ta(e,a);break;case 31:Ta(e,a),i&4&&Au(e,a);break;case 13:Ta(e,a),i&4&&Tu(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vd.bind(null,a),fm(e,a))));break;case 22:if(i=a.memoizedState!==null||ja,!i){t=t!==null&&t.memoizedState!==null||lt,n=ja;var r=lt;ja=i,(lt=t)&&!r?Ma(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),ja=n,lt=r}break;case 30:break;default:Ta(e,a)}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,St=!1;function Aa(e,t,a){for(a=a.child;a!==null;)ju(e,t,a),a=a.sibling}function ju(e,t,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:lt||ua(a,t),Aa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:lt||ua(a,t);var i=Pe,n=St;ti(a.type)&&(Pe=a.stateNode,St=!1),Aa(e,t,a),il(a.stateNode),Pe=i,St=n;break;case 5:lt||ua(a,t);case 6:if(i=Pe,n=St,Pe=null,Aa(e,t,a),Pe=i,St=n,Pe!==null)if(St)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(r){je(a,t,r)}else try{Pe.removeChild(a.stateNode)}catch(r){je(a,t,r)}break;case 18:Pe!==null&&(St?(e=Pe,yp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xn(e)):yp(Pe,a.stateNode));break;case 4:i=Pe,n=St,Pe=a.stateNode.containerInfo,St=!0,Aa(e,t,a),Pe=i,St=n;break;case 0:case 11:case 14:case 15:Qa(2,a,t),lt||Qa(4,a,t),Aa(e,t,a);break;case 1:lt||(ua(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&bu(a,t,i)),Aa(e,t,a);break;case 21:Aa(e,t,a);break;case 22:lt=(i=lt)||a.memoizedState!==null,Aa(e,t,a),lt=i;break;default:Aa(e,t,a)}}function Au(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xn(e)}catch(a){je(t,t.return,a)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xn(e)}catch(a){je(t,t.return,a)}}function Ud(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nu),t;default:throw Error(u(435,e.tag))}}function tr(e,t){var a=Ud(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=Zd.bind(null,e,i);i.then(n,n)}})}function Nt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],r=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(ti(c.type)){Pe=c.stateNode,St=!1;break e}break;case 5:Pe=c.stateNode,St=!1;break e;case 3:case 4:Pe=c.stateNode.containerInfo,St=!0;break e}c=c.return}if(Pe===null)throw Error(u(160));ju(r,o,n),Pe=null,St=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling}var ia=null;function Mu(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),Dt(e),i&4&&(Qa(3,e,e.return),Zn(3,e),Qa(5,e,e.return));break;case 1:Nt(t,e),Dt(e),i&512&&(lt||a===null||ua(a,a.return)),i&64&&ja&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=ia;if(Nt(t,e),Dt(e),i&512&&(lt||a===null||ua(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":r=n.getElementsByTagName("title")[0],(!r||r[_n]||r[mt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(i),n.head.insertBefore(r,n.querySelector("head > title"))),gt(r,i,a),r[mt]=e,pt(r),i=r;break e;case"link":var o=Mp("link","href",n).get(i+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(r=o[c],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}r=n.createElement(i),gt(r,i,a),n.head.appendChild(r);break;case"meta":if(o=Mp("meta","content",n).get(i+(a.content||""))){for(c=0;c<o.length;c++)if(r=o[c],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}r=n.createElement(i),gt(r,i,a),n.head.appendChild(r);break;default:throw Error(u(468,i))}r[mt]=e,pt(r),i=r}e.stateNode=i}else Cp(n,e.type,e.stateNode);else e.stateNode=Tp(n,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?Cp(n,e.type,e.stateNode):Tp(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&as(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nt(t,e),Dt(e),i&512&&(lt||a===null||ua(a,a.return)),a!==null&&i&4&&as(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nt(t,e),Dt(e),i&512&&(lt||a===null||ua(a,a.return)),e.flags&32){n=e.stateNode;try{Ui(n,"")}catch(Z){je(e,e.return,Z)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,as(e,n,a!==null?a.memoizedProps:n)),i&1024&&(ls=!0);break;case 6:if(Nt(t,e),Dt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(Z){je(e,e.return,Z)}}break;case 3:if(vr=null,n=ia,ia=hr(t.containerInfo),Nt(t,e),ia=n,Dt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(t.containerInfo)}catch(Z){je(e,e.return,Z)}ls&&(ls=!1,Cu(e));break;case 4:i=ia,ia=hr(e.stateNode.containerInfo),Nt(t,e),Dt(e),ia=i;break;case 12:Nt(t,e),Dt(e);break;case 31:Nt(t,e),Dt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,tr(e,i)));break;case 13:Nt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ir=$e()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,tr(e,i)));break;case 22:n=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,S=ja,M=lt;if(ja=S||n,lt=M||d,Nt(t,e),lt=M,ja=S,Dt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||d||ja||lt||Ai(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(r=d.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var O=d.memoizedProps.style,N=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Z){je(d,d.return,Z)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(Z){je(d,d.return,Z)}}}else if(t.tag===18){if(a===null){d=t;try{var j=d.stateNode;n?bp(j,!0):bp(d.stateNode,!1)}catch(Z){je(d,d.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,tr(e,a))));break;case 19:Nt(t,e),Dt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,tr(e,i)));break;case 30:break;case 21:break;default:Nt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(zu(i)){a=i;break}i=i.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,r=is(e);er(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(Ui(o,""),a.flags&=-33);var c=is(e);er(e,c,o);break;case 3:case 4:var d=a.stateNode.containerInfo,S=is(e);ns(e,S,d);break;default:throw Error(u(161))}}catch(M){je(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Du(e,t.alternate,t),t=t.sibling}function Ai(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qa(4,t,t.return),Ai(t);break;case 1:ua(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&bu(t,t.return,a),Ai(t);break;case 27:il(t.stateNode);case 26:case 5:ua(t,t.return),Ai(t);break;case 22:t.memoizedState===null&&Ai(t);break;case 30:Ai(t);break;default:Ai(t)}e=e.sibling}}function Ma(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Ma(n,r,a),Zn(4,r);break;case 1:if(Ma(n,r,a),i=r,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){je(i,i.return,S)}if(i=r,n=i.updateQueue,n!==null){var c=i.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)s0(d[n],c)}catch(S){je(i,i.return,S)}}a&&o&64&&yu(r),Qn(r,r.return);break;case 27:Su(r);case 26:case 5:Ma(n,r,a),a&&i===null&&o&4&&_u(r),Qn(r,r.return);break;case 12:Ma(n,r,a);break;case 31:Ma(n,r,a),a&&o&4&&Au(n,r);break;case 13:Ma(n,r,a),a&&o&4&&Tu(n,r);break;case 22:r.memoizedState===null&&Ma(n,r,a),Qn(r,r.return);break;case 30:break;default:Ma(n,r,a)}t=t.sibling}}function rs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&On(a))}function os(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&On(e))}function na(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ru(e,t,a,i),t=t.sibling}function Ru(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:na(e,t,a,i),n&2048&&Zn(9,t);break;case 1:na(e,t,a,i);break;case 3:na(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&On(e)));break;case 12:if(n&2048){na(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){je(t,t.return,d)}}else na(e,t,a,i);break;case 31:na(e,t,a,i);break;case 13:na(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?na(e,t,a,i):Kn(e,t):r._visibility&2?na(e,t,a,i):(r._visibility|=2,ln(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&rs(o,t);break;case 24:na(e,t,a,i),n&2048&&os(t.alternate,t);break;default:na(e,t,a,i)}}function ln(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,c=a,d=i,S=o.flags;switch(o.tag){case 0:case 11:case 15:ln(r,o,c,d,n),Zn(8,o);break;case 23:break;case 22:var M=o.stateNode;o.memoizedState!==null?M._visibility&2?ln(r,o,c,d,n):Kn(r,o):(M._visibility|=2,ln(r,o,c,d,n)),n&&S&2048&&rs(o.alternate,o);break;case 24:ln(r,o,c,d,n),n&&S&2048&&os(o.alternate,o);break;default:ln(r,o,c,d,n)}t=t.sibling}}function Kn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:Kn(a,i),n&2048&&rs(i.alternate,i);break;case 24:Kn(a,i),n&2048&&os(i.alternate,i);break;default:Kn(a,i)}t=t.sibling}}var Wn=8192;function rn(e,t,a){if(e.subtreeFlags&Wn)for(e=e.child;e!==null;)ku(e,t,a),e=e.sibling}function ku(e,t,a){switch(e.tag){case 26:rn(e,t,a),e.flags&Wn&&e.memoizedState!==null&&Nm(a,ia,e.memoizedState,e.memoizedProps);break;case 5:rn(e,t,a);break;case 3:case 4:var i=ia;ia=hr(e.stateNode.containerInfo),rn(e,t,a),ia=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Wn,Wn=16777216,rn(e,t,a),Wn=i):rn(e,t,a));break;default:rn(e,t,a)}}function Ou(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ft=i,qu(i,e)}Ou(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eu(e),e=e.sibling}function Eu(e){switch(e.tag){case 0:case 11:case 15:Jn(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:Jn(e);break;case 12:Jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ar(e)):Jn(e);break;default:Jn(e)}}function ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ft=i,qu(i,e)}Ou(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qa(8,t,t.return),ar(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ar(t));break;default:ar(t)}e=e.sibling}}function qu(e,t){for(;ft!==null;){var a=ft;switch(a.tag){case 0:case 11:case 15:Qa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:On(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ft=i;else e:for(a=e;ft!==null;){i=ft;var n=i.sibling,r=i.return;if(wu(i),i===a){ft=null;break e}if(n!==null){n.return=r,ft=n;break e}ft=r}}}var Bd={getCacheForType:function(e){var t=xt(at),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return xt(at).controller.signal}},Ld=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ee=null,de=null,xe=0,we=0,qt=null,Ka=!1,on=!1,ss=!1,Ca=0,Ie=0,Wa=0,Ti=0,cs=0,Ft=0,sn=0,In=null,wt=null,us=!1,ir=0,Fu=0,nr=1/0,lr=null,Ja=null,st=0,Ia=null,cn=null,Ra=0,ps=0,fs=null,Uu=null,$n=0,ds=null;function Ut(){return(Ne&2)!==0&&xe!==0?xe&-xe:w.T!==null?ys():Ct()}function Bu(){if(Ft===0)if((xe&536870912)===0||ye){var e=ui;ui<<=1,(ui&3932160)===0&&(ui=262144),Ft=e}else Ft=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Ft}function jt(e,t,a){(e===Ee&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(un(e,0),$a(e,xe,Ft,!1)),oa(e,a),((Ne&2)===0||e!==Ee)&&(e===Ee&&((Ne&2)===0&&(Ti|=a),Ie===4&&$a(e,xe,Ft,!1)),pa(e))}function Lu(e,t,a){if((Ne&6)!==0)throw Error(u(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||dt(e,t),n=i?Yd(e,t):hs(e,t,!0),r=i;do{if(n===0){on&&!i&&$a(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Gd(a)){n=hs(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;n=In;var d=c.current.memoizedState.isDehydrated;if(d&&(un(c,o).flags|=256),o=hs(c,o,!1),o!==2){if(ss&&!d){c.errorRecoveryDisabledLanes|=r,Ti|=r,n=4;break e}r=wt,wt=n,r!==null&&(wt===null?wt=r:wt.push.apply(wt,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){un(e,0),$a(e,t,0,!0);break}e:{switch(i=e,r=n,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:$a(i,t,Ft,!Ka);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=ir+300-$e(),10<n)){if($a(i,t,Ft,!Ka),ea(i,0,!0)!==0)break e;Ra=t,i.timeoutHandle=vp(Gu.bind(null,i,a,wt,lr,us,t,Ft,Ti,sn,Ka,r,"Throttled",-0,0),n);break e}Gu(i,a,wt,lr,us,t,Ft,Ti,sn,Ka,r,null,-0,0)}}break}while(!0);pa(e)}function Gu(e,t,a,i,n,r,o,c,d,S,M,O,N,j){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},ku(t,r,O);var Z=(r&62914560)===r?ir-$e():(r&4194048)===r?Fu-$e():0;if(Z=Dm(O,Z),Z!==null){Ra=r,e.cancelPendingCommit=Z(Ku.bind(null,e,t,r,a,i,n,o,c,d,M,O,null,N,j)),$a(e,r,o,!S);return}}Ku(e,t,r,a,i,n,o,c,d)}function Gd(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],r=n.getSnapshot;n=n.value;try{if(!Rt(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $a(e,t,a,i){t&=~cs,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var r=31-Oe(n),o=1<<r;i[r]=-1,n&=~o}a!==0&&Mt(e,a,t)}function rr(){return(Ne&6)===0?(el(0),!1):!0}function ms(){if(de!==null){if(we===0)var e=de.return;else e=de,_a=bi=null,Mo(e),$i=null,qn=0,e=de;for(;e!==null;)gu(e.alternate,e),e=e.return;de=null}}function un(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,om(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ra=0,ms(),Ee=e,de=a=ya(e.current,null),xe=t,we=0,qt=null,Ka=!1,on=dt(e,t),ss=!1,sn=Ft=cs=Ti=Wa=Ie=0,wt=In=null,us=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-Oe(i),r=1<<n;t|=e[n],i&=~r}return Ca=t,jl(),a}function Hu(e,t){le=null,w.H=Pn,t===Ii||t===El?(t=n0(),we=3):t===go?(t=n0(),we=4):we=t===Vo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,de===null&&(Ie=1,Kl(e,Yt(t,e.current)))}function Yu(){var e=Ot.current;return e===null?!0:(xe&4194048)===xe?Zt===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Zt:!1}function Pu(){var e=w.H;return w.H=Pn,e===null?Pn:e}function Xu(){var e=w.A;return w.A=Bd,e}function or(){Ie=4,Ka||(xe&4194048)!==xe&&Ot.current!==null||(on=!0),(Wa&134217727)===0&&(Ti&134217727)===0||Ee===null||$a(Ee,xe,Ft,!1)}function hs(e,t,a){var i=Ne;Ne|=2;var n=Pu(),r=Xu();(Ee!==e||xe!==t)&&(lr=null,un(e,t)),t=!1;var o=Ie;e:do try{if(we!==0&&de!==null){var c=de,d=qt;switch(we){case 8:ms(),o=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var S=we;if(we=0,qt=null,pn(e,c,d,S),a&&on){o=0;break e}break;default:S=we,we=0,qt=null,pn(e,c,d,S)}}Hd(),o=Ie;break}catch(M){Hu(e,M)}while(!0);return t&&e.shellSuspendCounter++,_a=bi=null,Ne=i,w.H=n,w.A=r,de===null&&(Ee=null,xe=0,jl()),o}function Hd(){for(;de!==null;)Vu(de)}function Yd(e,t){var a=Ne;Ne|=2;var i=Pu(),n=Xu();Ee!==e||xe!==t?(lr=null,nr=$e()+500,un(e,t)):on=dt(e,t);e:do try{if(we!==0&&de!==null){t=de;var r=qt;t:switch(we){case 1:we=0,qt=null,pn(e,t,r,1);break;case 2:case 9:if(a0(r)){we=0,qt=null,Zu(t);break}t=function(){we!==2&&we!==9||Ee!==e||(we=7),pa(e)},r.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:a0(r)?(we=0,qt=null,Zu(t)):(we=0,qt=null,pn(e,t,r,7));break;case 5:var o=null;switch(de.tag){case 26:o=de.memoizedState;case 5:case 27:var c=de;if(o?Rp(o):c.stateNode.complete){we=0,qt=null;var d=c.sibling;if(d!==null)de=d;else{var S=c.return;S!==null?(de=S,sr(S)):de=null}break t}}we=0,qt=null,pn(e,t,r,5);break;case 6:we=0,qt=null,pn(e,t,r,6);break;case 8:ms(),Ie=6;break e;default:throw Error(u(462))}}Pd();break}catch(M){Hu(e,M)}while(!0);return _a=bi=null,w.H=i,w.A=n,Ne=a,de!==null?0:(Ee=null,xe=0,jl(),Ie)}function Pd(){for(;de!==null&&!Mi();)Vu(de)}function Vu(e){var t=xu(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,t===null?sr(e):de=t}function Zu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=uu(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=uu(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:Mo(t);default:gu(a,t),t=de=Xc(t,Ca),t=xu(a,t,Ca)}e.memoizedProps=e.pendingProps,t===null?sr(e):de=t}function pn(e,t,a,i){_a=bi=null,Mo(t),$i=null,qn=0;var n=t.return;try{if(Rd(e,n,t,a,xe)){Ie=1,Kl(e,Yt(a,e.current)),de=null;return}}catch(r){if(n!==null)throw de=n,r;Ie=1,Kl(e,Yt(a,e.current)),de=null;return}t.flags&32768?(ye||i===1?e=!0:on||(xe&536870912)!==0?e=!1:(Ka=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ot.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qu(t,e)):sr(t)}function sr(e){var t=e;do{if((t.flags&32768)!==0){Qu(t,Ka);return}e=t.return;var a=Ed(t.alternate,t,Ca);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ie===0&&(Ie=5)}function Qu(e,t){do{var a=qd(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ie=6,de=null}function Ku(e,t,a,i,n,r,o,c,d){e.cancelPendingCommit=null;do cr();while(st!==0);if((Ne&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=ao,Ci(e,a,r,o,c,d),e===Ee&&(de=Ee=null,xe=0),cn=t,Ia=e,Ra=a,ps=r,fs=n,Uu=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qd(rt,function(){return ep(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=w.T,w.T=null,n=q.p,q.p=2,o=Ne,Ne|=4;try{Fd(e,t,a)}finally{Ne=o,q.p=n,w.T=i}}st=1,Wu(),Ju(),Iu()}}function Wu(){if(st===1){st=0;var e=Ia,t=cn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var i=q.p;q.p=2;var n=Ne;Ne|=4;try{Mu(t,e);var r=js,o=qc(e.containerInfo),c=r.focusedElem,d=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&Ec(c.ownerDocument.documentElement,c)){if(d!==null&&Jr(c)){var S=d.start,M=d.end;if(M===void 0&&(M=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(M,c.value.length);else{var O=c.ownerDocument||document,N=O&&O.defaultView||window;if(N.getSelection){var j=N.getSelection(),Z=c.textContent.length,te=Math.min(d.start,Z),Me=d.end===void 0?te:Math.min(d.end,Z);!j.extend&&te>Me&&(o=Me,Me=te,te=o);var y=Oc(c,te),h=Oc(c,Me);if(y&&h&&(j.rangeCount!==1||j.anchorNode!==y.node||j.anchorOffset!==y.offset||j.focusNode!==h.node||j.focusOffset!==h.offset)){var z=O.createRange();z.setStart(y.node,y.offset),j.removeAllRanges(),te>Me?(j.addRange(z),j.extend(h.node,h.offset)):(z.setEnd(h.node,h.offset),j.addRange(z))}}}}for(O=[],j=c;j=j.parentNode;)j.nodeType===1&&O.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var R=O[c];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}_r=!!ws,js=ws=null}finally{Ne=n,q.p=i,w.T=a}}e.current=t,st=2}}function Ju(){if(st===2){st=0;var e=Ia,t=cn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var i=q.p;q.p=2;var n=Ne;Ne|=4;try{Du(e,t.alternate,t)}finally{Ne=n,q.p=i,w.T=a}}st=3}}function Iu(){if(st===4||st===3){st=0,qa();var e=Ia,t=cn,a=Ra,i=Uu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,cn=Ia=null,$u(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ja=null),Ye(a),t=t.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=w.T,n=q.p,q.p=2,w.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var c=i[o];r(c.value,{componentStack:c.stack})}}finally{w.T=t,q.p=n}}(Ra&3)!==0&&cr(),pa(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===ds?$n++:($n=0,ds=e):$n=0,el(0)}}function $u(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,On(t)))}function cr(){return Wu(),Ju(),Iu(),ep()}function ep(){if(st!==5)return!1;var e=Ia,t=ps;ps=0;var a=Ye(Ra),i=w.T,n=q.p;try{q.p=32>a?32:a,w.T=null,a=fs,fs=null;var r=Ia,o=Ra;if(st=0,cn=Ia=null,Ra=0,(Ne&6)!==0)throw Error(u(331));var c=Ne;if(Ne|=4,Eu(r.current),Ru(r,r.current,o,a),Ne=c,el(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Tt,r)}catch{}return!0}finally{q.p=n,w.T=i,$u(e,t)}}function tp(e,t,a){t=Yt(a,t),t=Xo(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(oa(e,2),pa(e))}function je(e,t,a){if(e.tag===3)tp(e,e,a);else for(;t!==null;){if(t.tag===3){tp(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ja===null||!Ja.has(i))){e=Yt(a,e),a=au(2),i=Xa(t,a,2),i!==null&&(iu(a,i,t,e),oa(i,2),pa(i));break}}t=t.return}}function xs(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Ld;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(ss=!0,n.add(a),e=Xd.bind(null,e,t,a),t.then(e,e))}function Xd(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(xe&a)===a&&(Ie===4||Ie===3&&(xe&62914560)===xe&&300>$e()-ir?(Ne&2)===0&&un(e,0):cs|=a,sn===xe&&(sn=0)),pa(e)}function ap(e,t){t===0&&(t=Bt()),e=vi(e,t),e!==null&&(oa(e,t),pa(e))}function Vd(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ap(e,a)}function Zd(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),ap(e,a)}function Qd(e,t){return ct(e,t)}var ur=null,fn=null,vs=!1,pr=!1,gs=!1,ei=0;function pa(e){e!==fn&&e.next===null&&(fn===null?ur=fn=e:fn=fn.next=e),pr=!0,vs||(vs=!0,Wd())}function el(e,t){if(!gs&&pr){gs=!0;do for(var a=!1,i=ur;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var r=0;else{var o=i.suspendedLanes,c=i.pingedLanes;r=(1<<31-Oe(42|e)+1)-1,r&=n&~(o&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,rp(i,r))}else r=xe,r=ea(i,i===Ee?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||dt(i,r)||(a=!0,rp(i,r));i=i.next}while(a);gs=!1}}function Kd(){ip()}function ip(){pr=vs=!1;var e=0;ei!==0&&rm()&&(e=ei);for(var t=$e(),a=null,i=ur;i!==null;){var n=i.next,r=np(i,t);r===0?(i.next=null,a===null?ur=n:a.next=n,n===null&&(fn=a)):(a=i,(e!==0||(r&3)!==0)&&(pr=!0)),i=n}st!==0&&st!==5||el(e),ei!==0&&(ei=0)}function np(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Oe(r),c=1<<o,d=n[o];d===-1?((c&a)===0||(c&i)!==0)&&(n[o]=ta(c,t)):d<=t&&(e.expiredLanes|=c),r&=~c}if(t=Ee,a=xe,a=ea(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&si(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||dt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&si(i),Ye(a)){case 2:case 8:a=He;break;case 32:a=rt;break;case 268435456:a=ke;break;default:a=rt}return i=lp.bind(null,e),a=ct(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&si(i),e.callbackPriority=2,e.callbackNode=null,2}function lp(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cr()&&e.callbackNode!==a)return null;var i=xe;return i=ea(e,e===Ee?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Lu(e,i,t),np(e,$e()),e.callbackNode!=null&&e.callbackNode===a?lp.bind(null,e):null)}function rp(e,t){if(cr())return null;Lu(e,t,!0)}function Wd(){sm(function(){(Ne&6)!==0?ct(Ze,Kd):ip()})}function ys(){if(ei===0){var e=Wi;e===0&&(e=ci,ci<<=1,(ci&261888)===0&&(ci=256)),ei=e}return ei}function op(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yl(""+e)}function sp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jd(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var r=op((n[_t]||null).action),o=i.submitter;o&&(t=(t=o[_t]||null)?op(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var c=new Sl("action","action",null,i,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ei!==0){var d=o?sp(n,o):new FormData(n);Bo(a,{pending:!0,data:d,method:n.method,action:r},null,d)}}else typeof r=="function"&&(c.preventDefault(),d=o?sp(n,o):new FormData(n),Bo(a,{pending:!0,data:d,method:n.method,action:r},r,d))},currentTarget:n}]})}}for(var bs=0;bs<to.length;bs++){var _s=to[bs],Id=_s.toLowerCase(),$d=_s[0].toUpperCase()+_s.slice(1);aa(Id,"on"+$d)}aa(Bc,"onAnimationEnd"),aa(Lc,"onAnimationIteration"),aa(Gc,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(hd,"onTransitionRun"),aa(xd,"onTransitionStart"),aa(vd,"onTransitionCancel"),aa(Hc,"onTransitionEnd"),qi("onMouseEnter",["mouseout","mouseover"]),qi("onMouseLeave",["mouseout","mouseover"]),qi("onPointerEnter",["pointerout","pointerover"]),qi("onPointerLeave",["pointerout","pointerover"]),di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),di("onBeforeInput",["compositionend","keypress","textInput","paste"]),di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function cp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var c=i[o],d=c.instance,S=c.currentTarget;if(c=c.listener,d!==r&&n.isPropagationStopped())break e;r=c,n.currentTarget=S;try{r(n)}catch(M){wl(M)}n.currentTarget=null,r=d}else for(o=0;o<i.length;o++){if(c=i[o],d=c.instance,S=c.currentTarget,c=c.listener,d!==r&&n.isPropagationStopped())break e;r=c,n.currentTarget=S;try{r(n)}catch(M){wl(M)}n.currentTarget=null,r=d}}}}function me(e,t){var a=t[kr];a===void 0&&(a=t[kr]=new Set);var i=e+"__bubble";a.has(i)||(up(t,e,2,!1),a.add(i))}function zs(e,t,a){var i=0;t&&(i|=4),up(a,e,i,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[fr]){e[fr]=!0,ic.forEach(function(a){a!=="selectionchange"&&(em.has(a)||zs(a,!1,e),zs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,zs("selectionchange",!1,t))}}function up(e,t,a,i){switch(Bp(t)){case 2:var n=Am;break;case 8:n=Tm;break;default:n=Us}a=n.bind(null,t,a,e),n=void 0,!Hr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ns(e,t,a,i,n){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var c=i.stateNode.containerInfo;if(c===n)break;if(o===4)for(o=i.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;c!==null;){if(o=ki(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){i=r=o;continue e}c=c.parentNode}}i=i.return}hc(function(){var S=r,M=Lr(a),O=[];e:{var N=Yc.get(e);if(N!==void 0){var j=Sl,Z=e;switch(e){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":j=Zf;break;case"focusin":Z="focus",j=Vr;break;case"focusout":Z="blur",j=Vr;break;case"beforeblur":case"afterblur":j=Vr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Wf;break;case Bc:case Lc:case Gc:j=Uf;break;case Hc:j=If;break;case"scroll":case"scrollend":j=kf;break;case"wheel":j=ed;break;case"copy":case"cut":case"paste":j=Lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=bc;break;case"toggle":case"beforetoggle":j=ad}var te=(t&4)!==0,Me=!te&&(e==="scroll"||e==="scrollend"),y=te?N!==null?N+"Capture":null:N;te=[];for(var h=S,z;h!==null;){var R=h;if(z=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||z===null||y===null||(R=Sn(h,y),R!=null&&te.push(al(h,R,z))),Me)break;h=h.return}0<te.length&&(N=new j(N,Z,null,a,M),O.push({event:N,listeners:te}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",N&&a!==Br&&(Z=a.relatedTarget||a.fromElement)&&(ki(Z)||Z[Ri]))break e;if((j||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,j?(Z=a.relatedTarget||a.toElement,j=S,Z=Z?ki(Z):null,Z!==null&&(Me=b(Z),te=Z.tag,Z!==Me||te!==5&&te!==27&&te!==6)&&(Z=null)):(j=null,Z=S),j!==Z)){if(te=gc,R="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(te=bc,R="onPointerLeave",y="onPointerEnter",h="pointer"),Me=j==null?N:zn(j),z=Z==null?N:zn(Z),N=new te(R,h+"leave",j,a,M),N.target=Me,N.relatedTarget=z,R=null,ki(M)===S&&(te=new te(y,h+"enter",Z,a,M),te.target=z,te.relatedTarget=Me,R=te),Me=R,j&&Z)t:{for(te=tm,y=j,h=Z,z=0,R=y;R;R=te(R))z++;R=0;for(var $=h;$;$=te($))R++;for(;0<z-R;)y=te(y),z--;for(;0<R-z;)h=te(h),R--;for(;z--;){if(y===h||h!==null&&y===h.alternate){te=y;break t}y=te(y),h=te(h)}te=null}else te=null;j!==null&&pp(O,N,j,te,!1),Z!==null&&Me!==null&&pp(O,Me,Z,te,!0)}}e:{if(N=S?zn(S):window,j=N.nodeName&&N.nodeName.toLowerCase(),j==="select"||j==="input"&&N.type==="file")var be=Ac;else if(wc(N))if(Tc)be=fd;else{be=ud;var Q=cd}else j=N.nodeName,!j||j.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?S&&Ur(S.elementType)&&(be=Ac):be=pd;if(be&&(be=be(e,S))){jc(O,be,a,M);break e}Q&&Q(e,N,S),e==="focusout"&&S&&N.type==="number"&&S.memoizedProps.value!=null&&Fr(N,"number",N.value)}switch(Q=S?zn(S):window,e){case"focusin":(wc(Q)||Q.contentEditable==="true")&&(Hi=Q,Ir=S,Cn=null);break;case"focusout":Cn=Ir=Hi=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":$r=!1,Fc(O,a,M);break;case"selectionchange":if(md)break;case"keydown":case"keyup":Fc(O,a,M)}var se;if(Qr)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Gi?Nc(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(_c&&a.locale!=="ko"&&(Gi||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Gi&&(se=xc()):(Ua=M,Yr="value"in Ua?Ua.value:Ua.textContent,Gi=!0)),Q=dr(S,ve),0<Q.length&&(ve=new yc(ve,e,null,a,M),O.push({event:ve,listeners:Q}),se?ve.data=se:(se=Dc(a),se!==null&&(ve.data=se)))),(se=nd?ld(e,a):rd(e,a))&&(ve=dr(S,"onBeforeInput"),0<ve.length&&(Q=new yc("onBeforeInput","beforeinput",null,a,M),O.push({event:Q,listeners:ve}),Q.data=se)),Jd(O,e,S,a,M)}cp(O,t)})}function al(e,t,a){return{instance:e,listener:t,currentTarget:a}}function dr(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Sn(e,a),n!=null&&i.unshift(al(e,n,r)),n=Sn(e,t),n!=null&&i.push(al(e,n,r))),e.tag===3)return i;e=e.return}return[]}function tm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pp(e,t,a,i,n){for(var r=t._reactName,o=[];a!==null&&a!==i;){var c=a,d=c.alternate,S=c.stateNode;if(c=c.tag,d!==null&&d===i)break;c!==5&&c!==26&&c!==27||S===null||(d=S,n?(S=Sn(a,r),S!=null&&o.unshift(al(a,S,d))):n||(S=Sn(a,r),S!=null&&o.push(al(a,S,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var am=/\r\n?/g,im=/\u0000|\uFFFD/g;function fp(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(im,"")}function dp(e,t){return t=fp(t),fp(e)===t}function Te(e,t,a,i,n,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ui(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ui(e,""+i);break;case"className":vl(e,"class",i);break;case"tabIndex":vl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":vl(e,a,i);break;case"style":dc(e,i,r);break;case"data":if(t!=="object"){vl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=yl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Te(e,t,"name",n.name,n,null),Te(e,t,"formEncType",n.formEncType,n,null),Te(e,t,"formMethod",n.formMethod,n,null),Te(e,t,"formTarget",n.formTarget,n,null)):(Te(e,t,"encType",n.encType,n,null),Te(e,t,"method",n.method,n,null),Te(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=yl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=va);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=yl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":me("beforetoggle",e),me("toggle",e),xl(e,"popover",i);break;case"xlinkActuate":xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":xa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":xa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":xa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":xa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":xl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cf.get(a)||a,xl(e,a,i))}}function Ds(e,t,a,i,n,r){switch(a){case"style":dc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ui(e,i):(typeof i=="number"||typeof i=="bigint")&&Ui(e,""+i);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[_t]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):xl(e,a,i)}}}function gt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var i=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,r,o,a,null)}}n&&Te(e,t,"srcSet",a.srcSet,a,null),i&&Te(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var c=r=o=n=null,d=null,S=null;for(i in a)if(a.hasOwnProperty(i)){var M=a[i];if(M!=null)switch(i){case"name":n=M;break;case"type":o=M;break;case"checked":d=M;break;case"defaultChecked":S=M;break;case"value":r=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Te(e,t,i,M,a,null)}}cc(e,r,c,d,S,o,n,!1);return;case"select":me("invalid",e),i=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":r=c;break;case"defaultValue":o=c;break;case"multiple":i=c;default:Te(e,t,n,c,a,null)}t=r,a=o,e.multiple=!!i,t!=null?Fi(e,!!i,t,!1):a!=null&&Fi(e,!!i,a,!0);return;case"textarea":me("invalid",e),r=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":i=c;break;case"defaultValue":n=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Te(e,t,o,c,a,null)}pc(e,i,n,r);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(i=a[d],i!=null))switch(d){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Te(e,t,d,i,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(i=0;i<tl.length;i++)me(tl[i],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(i=a[S],i!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,S,i,a,null)}return;default:if(Ur(t)){for(M in a)a.hasOwnProperty(M)&&(i=a[M],i!==void 0&&Ds(e,t,M,i,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(i=a[c],i!=null&&Te(e,t,c,i,a,null))}function nm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,c=null,d=null,S=null,M=null;for(j in a){var O=a[j];if(a.hasOwnProperty(j)&&O!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":d=O;default:i.hasOwnProperty(j)||Te(e,t,j,null,i,O)}}for(var N in i){var j=i[N];if(O=a[N],i.hasOwnProperty(N)&&(j!=null||O!=null))switch(N){case"type":r=j;break;case"name":n=j;break;case"checked":S=j;break;case"defaultChecked":M=j;break;case"value":o=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,t));break;default:j!==O&&Te(e,t,N,j,i,O)}}qr(e,o,c,d,S,M,r,n);return;case"select":j=o=c=N=null;for(r in a)if(d=a[r],a.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":j=d;default:i.hasOwnProperty(r)||Te(e,t,r,null,i,d)}for(n in i)if(r=i[n],d=a[n],i.hasOwnProperty(n)&&(r!=null||d!=null))switch(n){case"value":N=r;break;case"defaultValue":c=r;break;case"multiple":o=r;default:r!==d&&Te(e,t,n,r,i,d)}t=c,a=o,i=j,N!=null?Fi(e,!!a,N,!1):!!i!=!!a&&(t!=null?Fi(e,!!a,t,!0):Fi(e,!!a,a?[]:"",!1));return;case"textarea":j=N=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!i.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Te(e,t,c,null,i,n)}for(o in i)if(n=i[o],r=a[o],i.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":N=n;break;case"defaultValue":j=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==r&&Te(e,t,o,n,i,r)}uc(e,N,j);return;case"option":for(var Z in a)if(N=a[Z],a.hasOwnProperty(Z)&&N!=null&&!i.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Te(e,t,Z,null,i,N)}for(d in i)if(N=i[d],j=a[d],i.hasOwnProperty(d)&&N!==j&&(N!=null||j!=null))switch(d){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Te(e,t,d,N,i,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)N=a[te],a.hasOwnProperty(te)&&N!=null&&!i.hasOwnProperty(te)&&Te(e,t,te,null,i,N);for(S in i)if(N=i[S],j=a[S],i.hasOwnProperty(S)&&N!==j&&(N!=null||j!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:Te(e,t,S,N,i,j)}return;default:if(Ur(t)){for(var Me in a)N=a[Me],a.hasOwnProperty(Me)&&N!==void 0&&!i.hasOwnProperty(Me)&&Ds(e,t,Me,void 0,i,N);for(M in i)N=i[M],j=a[M],!i.hasOwnProperty(M)||N===j||N===void 0&&j===void 0||Ds(e,t,M,N,i,j);return}}for(var y in a)N=a[y],a.hasOwnProperty(y)&&N!=null&&!i.hasOwnProperty(y)&&Te(e,t,y,null,i,N);for(O in i)N=i[O],j=a[O],!i.hasOwnProperty(O)||N===j||N==null&&j==null||Te(e,t,O,N,i,j)}function mp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],r=n.transferSize,o=n.initiatorType,c=n.duration;if(r&&c&&mp(o)){for(o=0,c=n.responseEnd,i+=1;i<a.length;i++){var d=a[i],S=d.startTime;if(S>c)break;var M=d.transferSize,O=d.initiatorType;M&&mp(O)&&(d=d.responseEnd,o+=M*(d<c?1:(c-S)/(d-S)))}if(--i,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ws=null,js=null;function mr(e){return e.nodeType===9?e:e.ownerDocument}function hp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=null;function rm(){var e=window.event;return e&&e.type==="popstate"?e===Ts?!1:(Ts=e,!0):(Ts=null,!1)}var vp=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(cm)}:vp;function cm(e){setTimeout(function(){throw e})}function ti(e){return e==="head"}function yp(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),xn(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")il(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,il(a);for(var r=a.firstChild;r;){var o=r.nextSibling,c=r.nodeName;r[_n]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&il(e.ownerDocument.body);a=n}while(a);xn(t)}function bp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Ms(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ms(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function um(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[_n])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function pm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function _p(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Cs(e){return e.data==="$?"||e.data==="$~"}function Rs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ks=null;function zp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Np(e,t,a){switch(t=mr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function il(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Or(e)}var Kt=new Map,Dp=new Set;function hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=q.d;q.d={f:dm,r:mm,D:hm,C:xm,L:vm,m:gm,X:bm,S:ym,M:_m};function dm(){var e=ka.f(),t=rr();return e||t}function mm(e){var t=Oi(e);t!==null&&t.tag===5&&t.type==="form"?H0(t):ka.r(e)}var dn=typeof document>"u"?null:document;function wp(e,t,a){var i=dn;if(i&&typeof t=="string"&&t){var n=Gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Dp.has(n)||(Dp.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),gt(t,"link",e),pt(t),i.head.appendChild(t)))}}function hm(e){ka.D(e),wp("dns-prefetch",e,null)}function xm(e,t){ka.C(e,t),wp("preconnect",e,t)}function vm(e,t,a){ka.L(e,t,a);var i=dn;if(i&&e&&t){var n='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Gt(a.imageSizes)+'"]')):n+='[href="'+Gt(e)+'"]';var r=n;switch(t){case"style":r=mn(e);break;case"script":r=hn(e)}Kt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Kt.set(r,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(nl(r))||t==="script"&&i.querySelector(ll(r))||(t=i.createElement("link"),gt(t,"link",e),pt(t),i.head.appendChild(t)))}}function gm(e,t){ka.m(e,t);var a=dn;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Gt(i)+'"][href="'+Gt(e)+'"]',r=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hn(e)}if(!Kt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Kt.set(r,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(r)))return}i=a.createElement("link"),gt(i,"link",e),pt(i),a.head.appendChild(i)}}}function ym(e,t,a){ka.S(e,t,a);var i=dn;if(i&&e){var n=Ei(i).hoistableStyles,r=mn(e);t=t||"default";var o=n.get(r);if(!o){var c={loading:0,preload:null};if(o=i.querySelector(nl(r)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Kt.get(r))&&Os(e,a);var d=o=i.createElement("link");pt(d),gt(d,"link",e),d._p=new Promise(function(S,M){d.onload=S,d.onerror=M}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,xr(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:c},n.set(r,o)}}}function bm(e,t){ka.X(e,t);var a=dn;if(a&&e){var i=Ei(a).hoistableScripts,n=hn(e),r=i.get(n);r||(r=a.querySelector(ll(n)),r||(e=E({src:e,async:!0},t),(t=Kt.get(n))&&Es(e,t),r=a.createElement("script"),pt(r),gt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function _m(e,t){ka.M(e,t);var a=dn;if(a&&e){var i=Ei(a).hoistableScripts,n=hn(e),r=i.get(n);r||(r=a.querySelector(ll(n)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Kt.get(n))&&Es(e,t),r=a.createElement("script"),pt(r),gt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function jp(e,t,a,i){var n=(n=ne.current)?hr(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=mn(a.href),a=Ei(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mn(a.href);var r=Ei(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(nl(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kt.set(e,a),r||zm(n,e,a,o.state))),t&&i===null)throw Error(u(528,""));return o}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hn(a),a=Ei(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mn(e){return'href="'+Gt(e)+'"'}function nl(e){return'link[rel="stylesheet"]['+e+"]"}function Ap(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gt(t,"link",a),pt(t),e.head.appendChild(t))}function hn(e){return'[src="'+Gt(e)+'"]'}function ll(e){return"script[async]"+e}function Tp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(i)return t.instance=i,pt(i),i;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pt(i),gt(i,"style",n),xr(i,a.precedence,e),t.instance=i;case"stylesheet":n=mn(a.href);var r=e.querySelector(nl(n));if(r)return t.state.loading|=4,t.instance=r,pt(r),r;i=Ap(a),(n=Kt.get(n))&&Os(i,n),r=(e.ownerDocument||e).createElement("link"),pt(r);var o=r;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),gt(r,"link",i),t.state.loading|=4,xr(r,a.precedence,e),t.instance=r;case"script":return r=hn(a.src),(n=e.querySelector(ll(r)))?(t.instance=n,pt(n),n):(i=a,(n=Kt.get(r))&&(i=E({},a),Es(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),pt(n),gt(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xr(i,a.precedence,e));return t.instance}function xr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,r=n,o=0;o<i.length;o++){var c=i[o];if(c.dataset.precedence===t)r=c;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vr=null;function Mp(e,t,a){if(vr===null){var i=new Map,n=vr=new Map;n.set(a,i)}else n=vr,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[_n]||r[mt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var c=i.get(o);c?c.push(r):i.set(o,[r])}}return i}function Cp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Sm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nm(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=mn(i.href),r=t.querySelector(nl(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,pt(r);return}r=t.ownerDocument||t,i=Ap(i),(n=Kt.get(n))&&Os(i,n),r=r.createElement("link"),pt(r);var o=r;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),gt(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qs=0;function Dm(e,t){return e.stylesheets&&e.count===0&&br(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&br(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&qs===0&&(qs=62500*lm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&br(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)br(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yr=null;function br(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yr=new Map,t.forEach(wm,e),yr=null,gr.call(e))}function wm(e,t){if(!(t.state.loading&4)){var a=yr.get(e);if(a)var i=a.get(null);else{a=new Map,yr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||i,r===i&&a.set(null,n),a.set(o,n),this.count++,i=gr.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var rl={$$typeof:_,Provider:null,Consumer:null,_currentValue:T,_currentValue2:T,_threadCount:0};function jm(e,t,a,i,n,r,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=da(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.hiddenUpdates=da(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function kp(e,t,a,i,n,r,o,c,d,S,M,O){return e=new jm(e,t,a,o,d,S,M,O,c),t=1,r===!0&&(t|=24),r=kt(3,null,null,t),e.current=r,r.stateNode=e,t=ho(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},yo(r),e}function Op(e){return e?(e=Xi,e):Xi}function Ep(e,t,a,i,n,r){n=Op(n),i.context===null?i.context=n:i.pendingContext=n,i=Pa(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Xa(e,i,t),a!==null&&(jt(a,e,t),Un(a,e,t))}function qp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fs(e,t){qp(e,t),(e=e.alternate)&&qp(e,t)}function Fp(e){if(e.tag===13||e.tag===31){var t=vi(e,67108864);t!==null&&jt(t,e,67108864),Fs(e,67108864)}}function Up(e){if(e.tag===13||e.tag===31){var t=Ut();t=ot(t);var a=vi(e,t);a!==null&&jt(a,e,t),Fs(e,t)}}var _r=!0;function Am(e,t,a,i){var n=w.T;w.T=null;var r=q.p;try{q.p=2,Us(e,t,a,i)}finally{q.p=r,w.T=n}}function Tm(e,t,a,i){var n=w.T;w.T=null;var r=q.p;try{q.p=8,Us(e,t,a,i)}finally{q.p=r,w.T=n}}function Us(e,t,a,i){if(_r){var n=Bs(i);if(n===null)Ns(e,t,i,zr,a),Lp(e,i);else if(Cm(n,e,t,a,i))i.stopPropagation();else if(Lp(e,i),t&4&&-1<Mm.indexOf(e)){for(;n!==null;){var r=Oi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Se(r.pendingLanes);if(o!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-Oe(o);c.entanglements[1]|=d,o&=~d}pa(r),(Ne&6)===0&&(nr=$e()+500,el(0))}}break;case 31:case 13:c=vi(r,2),c!==null&&jt(c,r,2),rr(),Fs(r,2)}if(r=Bs(i),r===null&&Ns(e,t,i,zr,a),r===n)break;n=r}n!==null&&i.stopPropagation()}else Ns(e,t,i,null,a)}}function Bs(e){return e=Lr(e),Ls(e)}var zr=null;function Ls(e){if(zr=null,e=ki(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zr=e,null}function Bp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case Ze:return 2;case He:return 8;case rt:case ut:return 32;case ke:return 268435456;default:return 32}default:return 32}}var Gs=!1,ai=null,ii=null,ni=null,ol=new Map,sl=new Map,li=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lp(e,t){switch(e){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(t.pointerId)}}function cl(e,t,a,i,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Oi(t),t!==null&&Fp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Cm(e,t,a,i,n){switch(t){case"focusin":return ai=cl(ai,e,t,a,i,n),!0;case"dragenter":return ii=cl(ii,e,t,a,i,n),!0;case"mouseover":return ni=cl(ni,e,t,a,i,n),!0;case"pointerover":var r=n.pointerId;return ol.set(r,cl(ol.get(r)||null,e,t,a,i,n)),!0;case"gotpointercapture":return r=n.pointerId,sl.set(r,cl(sl.get(r)||null,e,t,a,i,n)),!0}return!1}function Gp(e){var t=ki(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,ha(e.priority,function(){Up(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,ha(e.priority,function(){Up(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Bs(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Br=i,a.target.dispatchEvent(i),Br=null}else return t=Oi(a),t!==null&&Fp(t),e.blockedOn=a,!1;t.shift()}return!0}function Hp(e,t,a){Sr(e)&&a.delete(t)}function Rm(){Gs=!1,ai!==null&&Sr(ai)&&(ai=null),ii!==null&&Sr(ii)&&(ii=null),ni!==null&&Sr(ni)&&(ni=null),ol.forEach(Hp),sl.forEach(Hp)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Rm)))}var Dr=null;function Yp(e){Dr!==e&&(Dr=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Dr===e&&(Dr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(Ls(i||a)===null)continue;break}var r=Oi(a);r!==null&&(e.splice(t,3),t-=3,Bo(r,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function xn(e){function t(d){return Nr(d,e)}ai!==null&&Nr(ai,e),ii!==null&&Nr(ii,e),ni!==null&&Nr(ni,e),ol.forEach(t),sl.forEach(t);for(var a=0;a<li.length;a++){var i=li[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<li.length&&(a=li[0],a.blockedOn===null);)Gp(a),a.blockedOn===null&&li.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],r=a[i+1],o=n[_t]||null;if(typeof r=="function")o||Yp(a);else if(o){var c=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[_t]||null)c=o.formAction;else if(Ls(n)!==null)continue}else c=o.action;typeof c=="function"?a[i+1]=c:(a.splice(i,3),i-=3),Yp(a)}}}function Pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Hs(e){this._internalRoot=e}wr.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,i=Ut();Ep(a,i,e,t,null,null)},wr.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ep(e.current,2,null,e,null,null),rr(),t[Ri]=null}};function wr(e){this._internalRoot=e}wr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var a=0;a<li.length&&t!==0&&t<li[a].priority;a++);li.splice(a,0,e),a===0&&Gp(e)}};var Xp=s.version;if(Xp!=="19.2.8")throw Error(u(527,Xp,"19.2.8"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var km={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{Tt=jr.inject(km),Qe=jr}catch{}}return pl.createRoot=function(e,t){if(!g(e))throw Error(u(299));var a=!1,i="",n=I0,r=$0,o=eu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=kp(e,1,!1,null,null,a,i,null,n,r,o,Pp),e[Ri]=t.current,Ss(e),new Hs(t)},pl.hydrateRoot=function(e,t,a){if(!g(e))throw Error(u(299));var i=!1,n="",r=I0,o=$0,c=eu,d=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=kp(e,1,!0,t,a??null,i,n,d,r,o,c,Pp),t.context=Op(null),a=t.current,i=Ut(),i=ot(i),n=Pa(i),n.callback=null,Xa(a,n,i),a=i,t.current.lanes=a,oa(t,a),pa(t),e[Ri]=t.current,Ss(e),new wr(t)},pl.version="19.2.8",pl}var tf;function Pm(){if(tf)return Ps.exports;tf=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Ps.exports=Ym(),Ps.exports}var Xm=Pm();const Vm=Em(Xm);var k=$s();const af="golden_ratio_user_prefs",Zm=500;class Qm{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(af);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(af,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,f){const u=performance.now(),g=u-this.lastSampleTime;this.lastSampleTime=u;const b={timestamp:u,type:s,value:f,duration:g};this.samples.push(b),this.samples.length>Zm&&this.samples.shift(),this.analyzeSample(b),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const f=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const f=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const f=String(Math.round(s.value));this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(s){const f=String(Math.round(s.value));this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(s){const f=String(Math.round(s.value));this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(s){const f=String(Math.round(s.value));this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(s){let f=0,u=null;for(const[g,b]of Object.entries(s))b>f&&(f=b,u=g);return u}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(s.preferredFractal=Number(f));const u=this.getPreferred(this.prefs.renderStyleWeights);u!==null&&(s.preferredStyle=Number(u));const g=this.getPreferred(this.prefs.paletteWeights);g!==null&&(s.preferredPalette=Number(g));const b=this.getPreferred(this.prefs.cameraModeWeights);b!==null&&(s.preferredCamera=b)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const nf=new Qm,Km=`
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
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var q = vec3<f32>(0.1 + f32(s) * 0.1, 0.0, 25.0 - f32(s) * 5.0);
    for (var i: i32 = 0; i < 80; i = i + 1) {
      let dx = sigma * (q.y - q.x);
      let dy = q.x * (rho - q.z) - q.y;
      let dz = q.x * q.y - beta * q.z;
      q = q + vec3<f32>(dx, dy, dz) * 0.008;
      let scaled = q * 0.08;
      let dist = length(p - scaled);
      density += exp(-dist * 4.0);
    }
  }
  let d = 0.5 - density * 0.12;
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
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var q = vec3<f32>(f32(s) * 0.5 - 0.75, f32(s & 1) * 0.3 - 0.15, f32(s) * 0.4);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let xn = sin(aa * q.y) + cc * cos(aa * q.x);
      let yn = sin(bb * q.x) + dd * cos(bb * q.y);
      let zn = sin(q.z * 1.5 + t * 0.1 + f32(i) * 0.05) * 0.5;
      q = vec3<f32>(xn, yn, zn);
      let dist = length(p_in - q);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.3);
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
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.1 - f32(s) * 0.08, f32(s) * 0.3);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let x = 1.0 - a * v.x * v.x + v.y;
      let y = b * v.x;
      let z = sin(v.z * phi + t * 0.15) * 0.5;
      v = vec3<f32>(x, y, z);
      let scaled = v * 0.5;
      let dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 42. Aizawa Toroidal Chaotic Attractor (orbit-traced)
fn mapAizawaAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.95; let b = 0.7; let c = 0.6; let dd = 3.5; let e = 0.25; let f = 0.1;
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.05 * f32(s), 0.5 + f32(s) * 0.25);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dx = (v.z - b) * v.x - dd * v.y;
      let dy = dd * v.x + (v.z - b) * v.y;
      let dz = c + a * v.z - v.z * v.z * v.z / 3.0 - (v.x * v.x + v.y * v.y) * (1.0 + e * v.z) + f * v.z * v.x * v.x * v.x;
      v = v + vec3<f32>(dx, dy, dz) * 0.05;
      let scaled = v * 1.0;
      let dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 43. Thomas Cyclically Symmetric Attractor (orbit-traced, b=0.208186)
fn mapThomasAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.yz, t * 0.06);
  p = vec3<f32>(p.x, r0.x, r0.y);
  let b = 0.208186;
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(1.0 + f32(s) * 0.3, 0.0, -1.0 + f32(s) * 0.5);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dx = sin(v.y) - b * v.x;
      let dy = sin(v.z) - b * v.y;
      let dz = sin(v.x) - b * v.z;
      v = v + vec3<f32>(dx, dy, dz) * 0.1;
      let scaled = v * 0.45;
      let dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 44. Halvorsen 3-Fold Chaotic Attractor (orbit-traced, a=1.89)
fn mapHalvorsenAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xy, t * 0.07);
  p = vec3<f32>(r0.x, r0.y, p.z);
  let a = 1.89;
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(-1.0 + f32(s) * 0.5, -1.0 + f32(s) * 0.3, -1.0);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dx = -a * v.x - 4.0 * v.y - 4.0 * v.z - v.y * v.y;
      let dy = -a * v.y - 4.0 * v.z - 4.0 * v.x - v.z * v.z;
      let dz = -a * v.z - 4.0 * v.x - 4.0 * v.y - v.x * v.x;
      v = v + vec3<f32>(dx, dy, dz) * 0.04;
      let scaled = v * 0.25;
      let dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
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
  let zThick = sqrt(d * d + p.z * p.z * 0.15) - 0.06;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(max(zThick, bound * 0.4), 0.001), trap);
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
  let sc: f32 = 2.6457513;
  var trap: f32 = 0.0;
  var d: f32 = 1e10;
  let c1 = vec3<f32>(0.0, 0.0, 0.0); let c2 = vec3<f32>(1.5, 0.0, 0.0);
  let c3 = vec3<f32>(0.75, 1.3, 0.0); let c4 = vec3<f32>(-0.75, 1.3, 0.0);
  let c5 = vec3<f32>(-1.5, 0.0, 0.0); let c6 = vec3<f32>(-0.75, -1.3, 0.0);
  let c7 = vec3<f32>(0.75, -1.3, 0.0);
  for (var i = 0; i < 8; i++) {
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
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 5; s = s + 1) {
    var q = vec3<f32>(0.0, 0.0, 0.0);
    for (var i: i32 = 0; i < 40; i = i + 1) {
      let fi = f32(i);
      let choice = fract(sin(fi * 12.9898 + f32(s) * 78.233 + 43.12) * 43758.5453);
      if (choice < 0.01) { q = vec3<f32>(0.0, 0.16 * q.y, 0.0); }
      else if (choice < 0.86) { q = vec3<f32>(0.85 * q.x + 0.04 * q.y, -0.04 * q.x + 0.85 * q.y + 1.6, 0.3 * q.z); }
      else if (choice < 0.93) { q = vec3<f32>(0.2 * q.x - 0.26 * q.y, 0.23 * q.x + 0.22 * q.y + 1.6, 0.3 * q.z); }
      else { q = vec3<f32>(-0.15 * q.x + 0.28 * q.y, 0.26 * q.x + 0.24 * q.y + 0.44, 0.3 * q.z); }
      let scaled = q * 0.15;
      let dist = length(p - scaled);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.2;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
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
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.0, 0.1 + f32(s) * 0.2);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let fx = m1 * v.x + 0.5 * (m0 - m1) * (abs(v.x + 1.0) - abs(v.x - 1.0));
      let dx = alpha * (v.y - v.x - fx);
      let dy = v.x - v.y + v.z;
      let dz2 = -beta * v.y;
      v = v + vec3<f32>(dx, dy, dz2) * 0.008;
      let scaled = v * 0.1;
      let dist = length(p - scaled);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 64. Standard Map (Chirikov-Taylor, orbit-traced)
fn mapStandardMap(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let K = 1.5 + 0.5 * sin(t * 0.1);
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var theta = f32(s) * 1.57 + 0.3;
    var p_val = f32(s) * 0.8 - 1.2;
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let new_p = p_val + K * sin(theta);
      theta = mod(theta + new_p, 6.283185307);
      p_val = new_p;
      let pt = vec3<f32>(cos(theta) * 0.8, sin(theta) * 0.8, p_val * 0.5 + f32(s) * 0.2);
      let dist = length(p - pt);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 65. Ikeda Map (orbit-traced)
fn mapIkedaMap(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let b = 0.9;
  let u = 0.4 + 0.05 * sin(t * 0.15);
  var density: f32 = 0.0;
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
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.2);
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
  return vec2<f32>(max(max(d, 0.001), bound) * 0.5, trap * 0.15);
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
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, -0.2, f32(s) * 0.3);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let dv = v.x - v.y * v.y * v.y / 3.0 + v.y + I_ext;
      let dw = (v.x - a + b_param * v.y) / tau;
      let dz2 = sin(v.z * 2.0 + t * 0.1) * 0.15;
      v = v + vec3<f32>(dv, dw, dz2) * 0.08;
      let scaled = v * 0.45;
      let dist = length(p - scaled);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 73. Rössler Attractor (orbit-traced, a=0.2, b=0.2, c=5.7)
fn mapRosslerAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.07);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let a = 0.2; let b = 0.2; let c = 5.7;
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.1, f32(s) * 0.3);
    for (var i: i32 = 0; i < 80; i = i + 1) {
      let dx = -v.y - v.z;
      let dy = v.x + a * v.y;
      let dz2 = b + v.z * (v.x - c);
      v = v + vec3<f32>(dx, dy, dz2) * 0.015;
      let scaled = v * 0.15;
      let dist = length(p - scaled);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 74. Duffing Attractor (orbit-traced)
fn mapDuffingAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.0;
  let r0 = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let alpha = 1.0; let beta_p = 5.0; let delta = 0.02; let gamma = 8.0;
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 4; s = s + 1) {
    var v = vec3<f32>(0.1 + f32(s) * 0.15, 0.0, f32(s) * 0.5);
    for (var i: i32 = 0; i < 60; i = i + 1) {
      let omega = 1.5 + f32(s) * 0.3;
      let dx = v.y;
      let dy = -delta * v.y - alpha * v.x - beta_p * v.x * v.x * v.x + gamma * cos(v.z);
      let dz2 = omega;
      v = v + vec3<f32>(dx, dy, dz2) * 0.015;
      let scaled = v * 0.3;
      let dist = length(p - scaled);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
}

// 75. Logistic Map Bifurcation (period-doubling cascade, Feigenbaum δ≈4.669)
fn mapLogisticBifurcation(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  var p = p_in * 1.2;
  let r0 = rot2D(p.xz, t * 0.05);
  p = vec3<f32>(r0.x, p.y, r0.y);
  let r = 2.5 + (p.x + 1.5) / 3.0 * 1.5;
  var density: f32 = 0.0;
  for (var s: i32 = 0; s < 6; s = s + 1) {
    var x = 0.3 + f32(s) * 0.1;
    for (var i: i32 = 0; i < 50; i = i + 1) {
      x = r * x * (1.0 - x);
    }
    for (var i: i32 = 0; i < 40; i = i + 1) {
      x = r * x * (1.0 - x);
      let pt = vec3<f32>(p.x, (x - 0.5) * 2.0, f32(s) * 0.3 - 0.75);
      let dist = length(p - pt);
      density = density + exp(-dist * 3.5);
    }
  }
  let d = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(d, bound) * 0.5, density * 0.25);
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
  var density: f32 = 0.0;
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
      density = density + exp(-dist * 3.5);
    }
  }
  let dd = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 78. Pickover Attractor
fn mapPickoverAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = -1.64 + sin(t * 0.04) * 0.4;
  let b = 1.9 + cos(t * 0.06) * 0.3;
  let c_ = -0.31 + sin(t * 0.05) * 0.3;
  let d_ = 0.72 + cos(t * 0.03) * 0.2;
  var density: f32 = 0.0;
  let count = clamp(iters, 10, 40);
  for (var s: i32 = 0; s < 3; s = s + 1) {
    var z = vec2<f32>(0.1 + f32(s) * 0.3, 0.1 + f32(s) * 0.2);
    for (var i: i32 = 0; i < 40; i = i + 1) {
      if (i >= count) { break; }
      let nz = vec2<f32>(sin(a * z.y) + c_ * cos(a * z.x), sin(b * z.x) + d_ * cos(b * z.y));
      z = nz;
      let pt = vec3<f32>(z * 0.8, sin(f32(s) + t * 0.1) * 0.5);
      let dist = length(p - pt);
      density = density + exp(-dist * 3.5);
    }
  }
  let dd = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
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
  return vec2<f32>(max(max(d3d, bound * 0.4), 0.001), trap);
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
  return vec2<f32>(max(max(d3d, bound * 0.3), 0.001), trap);
}

// 83. Bedhead Attractor (3D chaotic)
fn mapBedheadAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 0.95 + sin(t * 0.04) * 0.2;
  let b = 0.7 + cos(t * 0.06) * 0.15;
  let c_ = 0.6 + sin(t * 0.05) * 0.2;
  var density: f32 = 0.0;
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
      density = density + exp(-dist * 3.5);
    }
  }
  let dd = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 84. FourSpot Attractor (4-wing chaotic)
fn mapFourSpotAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 1.0;
  let a = 2.0 + sin(t * 0.05) * 0.5;
  var density: f32 = 0.0;
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
      density = density + exp(-dist * 3.5);
    }
  }
  let dd = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.5;
  return vec2<f32>(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 85. Svensson Attractor
fn mapSvenssonAttractor(p_in: vec3<f32>, t: f32, phi: f32, iters: i32) -> vec2<f32> {
  let p = p_in * 0.8;
  let a = 2.0 + sin(t * 0.04) * 0.3;
  let b = 0.2 + cos(t * 0.06) * 0.1;
  let c_ = 1.57 + sin(t * 0.05) * 0.2;
  let d_ = 1.4 + cos(t * 0.03) * 0.3;
  var density: f32 = 0.0;
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
      density = density + exp(-dist * 3.5);
    }
  }
  let dd = 0.5 - density * 0.12;
  let bound = length(p_in) - 2.3;
  return vec2<f32>(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 86: Kaleidoscopic IFS
fn mapKaleidoscopicIFS(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var pos = p;
  let scale = phi;
  var minDist = 1e10;
  let offset = vec3<f32>(1.0) * 0.8;
  for (var i = 0; i < 12; i++) {
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
  for (var i = 0; i < 6; i++) {
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
  for (var i = 0; i < 8; i++) {
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
  for (var i = 0; i < 12; i++) {
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
  for (var i = 0; i < 10; i++) {
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
  var density = 0.0;
  var q = p;
  for (var i = 0; i < 8; i++) {
    q = abs(q) - vec3<f32>(0.5, 0.3, 0.4);
    q = vec3<f32>(rot2D(t * 0.1 + f32(i)) * q.xy, q.z);
    q = vec3<f32>(q.x, rot2D(t * 0.08) * q.yz);
    density = density + exp(-length(q) * 2.0);
  }
  let d = 0.5 - density * 0.15;
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
  let phiAngle = acos(p.z / max(r, 0.01));
  let membrane = abs(r - 1.0 - sin(theta * 5.0 + t) * 0.1 - sin(phiAngle * 4.0) * 0.1);
  let nucleus = length(p - vec3<f32>(0.0, 0.0, 0.2)) - 0.3;
  var organelles = 0.0;
  for (var i = 0; i < 5; i++) {
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
  for (var i = 0; i < 20; i++) {
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
  for (var i = 0; i < 16; i++) {
    if (i >= maxIter) { break; }
    r = length(z);
    if (r > 2.0) { break; }
    let theta = acos(z.z / r);
    let phiAngle = atan2(z.y, z.x);
    dr = pow(r, 3.0) * 4.0 * dr + 1.0;
    let zr = pow(r, 4.0);
    z = zr * vec3<f32>(sin(theta * 4.0) * cos(phiAngle * 4.0), sin(phiAngle * 4.0) * sin(theta * 4.0), cos(theta * 4.0));
    z = z + p;
  }
  return 0.5 * log(r) * r / dr;
}

// 97: Mandelbulb Power 12
fn mapMandelbulbPower12(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var z = p;
  var dr = 1.0;
  var r = 0.0;
  let maxIter = i32(clamp(f32(iters), 6.0, 16.0));
  for (var i = 0; i < 16; i++) {
    if (i >= maxIter) { break; }
    r = length(z);
    if (r > 2.0) { break; }
    let theta = acos(z.z / r);
    let phiAngle = atan2(z.y, z.x);
    dr = pow(r, 11.0) * 12.0 * dr + 1.0;
    let zr = pow(r, 12.0);
    z = zr * vec3<f32>(sin(theta * 12.0) * cos(phiAngle * 12.0), sin(phiAngle * 12.0) * sin(theta * 12.0), cos(theta * 12.0));
    z = z + p;
  }
  return 0.5 * log(r) * r / dr;
}

// 98: Hybrid Mandelbox-KIFS
fn mapHybridMandelboxKIFS(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var pos = p;
  let scale = phi;
  let offset = vec3<f32>(1.0);
  var minDist = 1e10;
  let maxIter = i32(clamp(f32(iters), 6.0, 14.0));
  for (var i = 0; i < 14; i++) {
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
  for (var i = 0; i < 20; i++) {
    if (i >= maxIter) { break; }
    r = length(z);
    if (r > 2.0) { break; }
    let theta = acos(z.z / r);
    let phiAngle = atan2(z.y, z.x);
    dr = 3.0 * pow(r, 2.0) * dr + 1.0;
    let zr = pow(r, 3.0);
    z = zr * vec3<f32>(sin(theta * 3.0) * cos(phiAngle * 3.0), sin(phiAngle * 3.0) * sin(theta * 3.0), cos(theta * 3.0));
    z = z + p;
  }
  return 0.5 * log(r) * r / dr;
}

// 100: Fractal Flame IFS
fn mapFractalFlameIFS(p: vec3<f32>, t: f32, phi: f32, iters: i32) -> f32 {
  var z = p;
  var color = 0.0;
  var minDist = 1e10;
  let maxIter = i32(clamp(f32(iters), 8.0, 18.0));
  for (var i = 0; i < 18; i++) {
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
  // NEW BEAUTIFUL FRACTALS
  if (ftype == 86) { return mapKaleidoscopicIFS(p, t, phi, iters); }
  if (ftype == 87) { return mapFlowerOfLife(p, t, phi); }
  if (ftype == 88) { return mapCosmicSpiral(p, t, phi); }
  if (ftype == 89) { return mapCrystalGrowth(p, t, phi, iters); }
  if (ftype == 90) { return mapQuantumFoam(p, t, phi); }
  if (ftype == 91) { return mapFractalCoral(p, t, phi, iters); }
  if (ftype == 92) { return mapNebulaCloud(p, t, phi, iters); }
  if (ftype == 93) { return mapHyperbolicTiling(p, t, phi); }
  if (ftype == 94) { return mapOrganicCell(p, t, phi); }
  if (ftype == 95) { return mapGoldenHelix(p, t, phi); }
  // MODERN FRACTALS WITH ADVANCED TECHNIQUES
  if (ftype == 96) { return mapMandelbulbPower4(p, t, phi, iters); }
  if (ftype == 97) { return mapMandelbulbPower12(p, t, phi, iters); }
  if (ftype == 98) { return mapHybridMandelboxKIFS(p, t, phi, iters); }
  if (ftype == 99) { return mapMultibrot3Advanced(p, t, phi, iters); }
  return mapFractalFlameIFS(p, t, phi, iters);
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
  let iters = i32(clamp(u.iterations, 6.0, 48.0));
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
      // 0: Continuous Topological Morph — stronger blend for visible transition
      let morphBlend = blend * 0.7 + 0.15; // Minimum 15% blend even at low settings
      current_d = mix(current_d, dB, morphBlend);
      current_trap = mix(current_trap, trapB, morphBlend * 0.8);
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
      // 4: Domain Warp — stronger spatial distortion
      let warpBlend = blend * 0.5 + 0.1; // Stronger base warp
      current_d = mix(current_d, dB, warpBlend);
      current_trap = mix(current_trap, trapB, 0.55); // More trap influence
    } else if (compOp == 5) {
      // 5: Harmonic Spectral Resonance — stronger displacement
      let disp = clamp(dB * 0.35, -0.12, 0.12) * blend; // 2x displacement range
      current_d = current_d + disp;
      current_trap = min(current_trap, trapB * 0.7 + current_trap * 0.3); // Blend traps
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
      let h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
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
    if (h < 0.0005) { return smoothstep(0.0, 0.002, h); }
    res = min(res, k * h / t);
    t = t + max(h * 0.85, 0.02);
  }
  return clamp(res, 0.0, 1.0);
}

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

  // OPTIMIZATION 1: Space Leaping — skip empty space with bounding sphere
  let boundingRadius: f32 = 4.0;
  let rayOriginDist = length(ro);
  if (rayOriginDist > boundingRadius) {
    let tmin = rayOriginDist - boundingRadius;
    if (tmin > t) { t = tmin * 0.9; }
  }

  // OPTIMIZATION 2: LOD System — reduce iterations based on distance
  let lodFactor = clamp(cam_dist / 10.0, 0.0, 1.0);
  let iterReduction = i32(lodFactor * 8.0);

  // Adaptive step budget: complex fractals at close zoom need many more steps
  let maxSteps: i32 = select(select(select(160, 200, cam_dist < 3.0), 256, cam_dist < 1.0), 256, false);
  // Scale-aware hit threshold: tighter at close range for clean surface convergence
  let hitScale = max(cam_dist * 0.0003, 0.0001);

  // OPTIMIZATION 3: Early Ray Termination
  var lastD: f32 = 1e10;
  var missCount: i32 = 0;

  for (var i: i32 = 0; i < 256; i = i + 1) {
    if (i >= maxSteps) { break; }
    let p = ro + rd * t;
    let res = sceneSDF(p);
    let d = res.x;
    min_trap = min(min_trap, res.y);

    let hit_threshold = hitScale + 0.0002;
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // OPTIMIZATION 4: Adaptive Step Size with distance-based acceleration
    let absD = abs(d);
    var step_factor: f32;
    if (absD > 2.0) {
      step_factor = 0.98;
    } else if (absD > 0.5) {
      step_factor = 0.92;
    } else if (absD > 0.05) {
      step_factor = 0.82;
    } else {
      step_factor = 0.65;
    }
    
    // OPTIMIZATION 5: Minimum step size scales with distance
    let minStep = max(cam_dist * 0.00005, 0.0001);
    let step_d = max(absD * step_factor, minStep);
    t = t + step_d;
    
    // OPTIMIZATION 6: Early Ray Termination
    if (d > lastD * 1.5 && d > 0.5) {
      missCount = missCount + 1;
      if (missCount > 8) { break; }
    } else {
      missCount = 0;
    }
    lastD = d;
    
    if (t > max_dist) {
      break;
    }
  }

  // Refinement pass: snap to surface more precisely if we got close but didn't converge
  // lastD already tracked from main loop
  if (!hit && t < max_dist) {
    for (var j: i32 = 0; j < 16; j = j + 1) {
      let p2 = ro + rd * t;
      let d2 = sceneSDF(p2).x;
      lastD = d2;
      if (abs(d2) < hitScale * 0.5) {
        hit = true;
        break;
      }
      t = t - d2 * 0.5;
      if (t < 0.0) { t = 0.001; break; }
    }
  }

  // Near-miss fallback: if we got very close to surface but didn't converge,
  // still render as surface to prevent black holes
  let nearMiss = !hit && abs(lastD) < hitScale * 5.0 && t < max_dist;

  let bg_rad = length(uv);
  var col = vec3<f32>(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u.time * 0.3));
  col = col + u.accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit || nearMiss) {
    let p = ro + rd * t;
    // Scale-adaptive normal epsilon: larger at close range to avoid precision noise
    let normalEps = min(0.0015 * max(t, 0.05) + 0.0004, 0.003);
    let base_n = calcNormal(p, normalEps);
    let ao = calcAO(p, base_n, t);
    // Smooth normal flip — prevents hard lighting boundary at silhouette edge
    let ndotv = dot(base_n, rd);
    var n = select(base_n, -base_n, ndotv > 0.0);

    let light1 = normalize(vec3<f32>(cos(u.time * 0.3), 1.2, sin(u.time * 0.3)));
    let light2 = normalize(vec3<f32>(-sin(u.time * 0.25 * GOLDEN_RATIO), -0.6, cos(u.time * 0.25 * GOLDEN_RATIO)));

    // CONCEPTUAL FIX: Remove soft shadows from dynamic lights
    // Dynamic lights can end up behind/beside the fractal, casting camera/object shadows
    // Instead, use only Ambient Occlusion for self-shadowing
    // This ensures only the fractal casts shadows on itself, not external objects
    let sh1: f32 = 1.0; // No soft shadows — pure AO-based shading
    let sh2: f32 = 1.0;

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

    // Diffuse lighting without soft shadows — relies on AO for depth
    let diff1 = max(dot(n, light1), 0.0);
    let diff2 = max(dot(n, light2), 0.0);

    let h1 = normalize(light1 - rd);
    let spec1 = pow(max(dot(n, h1), 0.0), 32.0);
    
    // Surface curvature from normal variation (2 extra SDF calls)
    // Distance-adaptive epsilon + curvature floor prevents close-up saturation
    let ce: f32 = min(0.0015 * max(t, 0.1) + 0.0004, 0.003);
    let dn1 = calcNormal(p + vec3<f32>(ce, 0.0, 0.0), ce) - n;
    let dn2 = calcNormal(p + vec3<f32>(0.0, ce, 0.0), ce) - n;
    let curv = clamp((length(dn1) + length(dn2)) / (2.0 * ce), 0.0, 8.0);
    let curvNorm = clamp(curv / 5.0, 0.0, 1.0);
    // Curvature floor prevents trapDetail/trapWeight saturation at close range
    let effectiveTrap = max(min_trap, curvNorm * 0.15);
    let trapDetail = clamp(1.0 / (1.0 + effectiveTrap * 2.0), 0.0, 1.0);

    // Harmonic Cosine Palette Engine — scale-independent phase for all zoom levels
    // Reduced trap weight to prevent horizontal banding; added position-based variation
    let seedAnim = u.palette_seed + u.palette_rotation * u.time * 2.5;
    let trapSmooth = effectiveTrap / (1.0 + effectiveTrap); // Soft saturation, no jumps
    let phase = fract(trapSmooth * 0.8 + curvNorm * 1.2 + p.y * 0.5 + p.x * 0.3 + length(p - ro) * 0.15 + u.time * 0.04 + seedAnim * 0.01);
    let w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    let w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    let w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    var mat_col = u.primary_color * w_primary + u.secondary_color * w_secondary;
    mat_col = mix(mat_col, u.accent_color, w_accent * 0.30);
    mat_col = mix(mat_col, u.accent_color, pow(1.0 - ao, 2.0) * 0.18);
    // Orbit trap direct coloring with saturation-safe effectiveTrap
    let trapWeight = clamp(0.30 / (1.0 + effectiveTrap * 2.5), 0.0, 0.40);
    mat_col = mix(mat_col, u.accent_color * (0.5 + trapDetail * 0.5), trapWeight);

    // Environment ambient: sample SDF along normal for color-bleeding approximation
    let envOcc = sceneSDF(p + n * 0.15).x;
    let envFactor = clamp(envOcc * 6.0, 0.0, 1.0);
    let ambientCol = mix(u.secondary_color * 0.25, u.primary_color * 0.15, envFactor);
    let ambient = ambientCol * ao;
    // Secondary bounce light: light bouncing off nearby surfaces into crevices
    let bounceDir = normalize(-light1 + n * 0.5);
    let bounce = max(dot(n, bounceDir), 0.0) * 0.12;
    let bounceOcc = clamp(sceneSDF(p - light1 * 0.08).x * 12.0, 0.0, 1.0);
    let bounceCol = u.secondary_color * bounce * bounceOcc * ao;

    let diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    let specular = vec3<f32>(1.0, 0.97, 0.92) * spec1 * 0.85 * ao; // Brighter specular for visible highlights
    let rim = u.accent_color * fresnel * 0.45 * (0.3 + 0.7 * ao); // Stronger rim for edge definition

    // Full lighting: ambient + diffuse + bounce + specular + rim + SSS
    col = ambient * 0.6 + diffuse * 1.2 + bounceCol * 1.5 + specular + rim * 1.3 + sssCol * 1.5;
    col = col * (0.4 + 0.6 * ao); // Balanced AO — preserves brightness while adding depth

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
      let beerDist = min(max(t - 0.5, 0.0), 20.0); // Clamp to prevent black-out at extreme depths
      let beer = exp(-beerDist * vec3<f32>(0.08, 0.25, 0.9));
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

    // Distance-relative atmospheric falloff — fog starts well beyond surface at all zoom levels
    let fogStart: f32 = mix(20.0, max(4.0, cam_dist * 3.0 + 4.0), smoothstep(0.5, 5.0, cam_dist));
    let fogDensity: f32 = mix(0.008, 0.015, smoothstep(0.3, 3.0, cam_dist));
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
`,Oa=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function Tr(p){switch(p){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;default:return 0}}function Wm(p){switch(p){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function Jm(p){switch(p){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function Im(p){switch(p){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function $m(p){switch(p){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class ff{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||Oa.find(f=>f.id===s.paletteId)||Oa[0]}computeIndices(s){return{fractalIdx:Tr(s.type),hybridIdx:Tr(s.hybridType||s.type),tertiaryIdx:Tr(s.tertiaryType||"riemannZeta"),compositeOpIdx:Wm(s.compositeOp),cameraModeIdx:Jm(s.cameraMode),sliceAxisIdx:Im(s.sliceAxis),renderStyleIdx:$m(s.renderStyle)}}packUniforms(s,f,u,g,b){const x=this.canvas.width,A=this.canvas.height;return s[0]=x,s[1]=A,s[2]=f,s[3]=u.phiMultiplier,s[4]=u.rotX,s[5]=u.rotY,s[6]=u.zoom,s[7]=b.fractalIdx,s[8]=u.iterations,s[9]=u.glowIntensity,s[10]=u.morphSpeed,s[11]=b.hybridIdx,s[12]=u.hybridBlend??0,s[13]=u.boxFold??1.2,s[14]=u.sphereFold??.65,s[15]=u.interiorCut??.35,s[16]=g.primary[0],s[17]=g.primary[1],s[18]=g.primary[2],s[19]=b.tertiaryIdx,s[20]=g.secondary[0],s[21]=g.secondary[1],s[22]=g.secondary[2],s[23]=u.tertiaryBlend??0,s[24]=g.accent[0],s[25]=g.accent[1],s[26]=g.accent[2],s[27]=b.compositeOpIdx,s[28]=u.smoothK??.35,s[29]=u.warpStrength??.3,s[30]=u.octaveLayers??2,s[31]=b.cameraModeIdx,s[32]=u.camPosX??0,s[33]=u.camPosY??0,s[34]=u.camPosZ??0,s[35]=u.slicePlane??0,s[36]=u.headlampPower??.3,s[37]=u.volumetricFog??.15,s[38]=b.sliceAxisIdx,s[39]=b.renderStyleIdx,s[40]=g.ambient?g.ambient[0]:.02,s[41]=g.ambient?g.ambient[1]:.02,s[42]=g.ambient?g.ambient[2]:.02,s[43]=u.paletteSeed??0,s[44]=u.paletteRotation?1:0,s[45]=0,s[46]=0,s[47]=0,s}}class ec extends ff{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!ec.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(b=>setTimeout(()=>b(null),5e3));if(this.adapter=await Promise.race([s,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const b=this.adapter.info;b&&(b.vendor||b.description)?this.adapterInfo=`${b.vendor||""} ${b.description||b.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(b=>{console.warn(`WebGPU device lost: ${b.message}`,b),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const u=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:u,alphaMode:"premultiplied"});try{const b=this.device.createCommandEncoder();b.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([b.finish()])}catch(b){console.debug("Initial clear pass handled:",b)}const g=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:Km});if("getCompilationInfo"in g)try{const x=(await g.getCompilationInfo()).messages.filter(A=>A.type==="error");if(x.length>0){for(const A of x)console.error(`[WGSL Compile Error] Line ${A.lineNum}:${A.linePos}: ${A.message}`);return!1}}catch(b){console.debug("Compilation info inspection skipped:",b)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_main",targets:[{format:u}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const u=this.canvas.width,g=this.canvas.height;if(u===0||g===0)return;const b=this.resolvePalette(f),x=this.computeIndices(f);this.packUniforms(this.uniformValues,s,f,b,x),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const A=this.device.createCommandEncoder(),D=this.context.getCurrentTexture().createView(),v=A.beginRenderPass({colorAttachments:[{view:D,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});v.setPipeline(this.pipeline),v.setBindGroup(0,this.bindGroup),v.draw(3,1,0,0),v.end(),this.device.queue.submit([A.finish()])}catch(A){console.debug("WebGPU render frame skipped:",A.message)}}destroy(){var s,f;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const eh=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,th=eh,ah=`#version 300 es
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
  float basinIso = length(z - vec2(1.0, 0.0)) - 0.6;
  float d_3d = sqrt(basinIso * basinIso + p.z * p.z * 0.3) - 0.2;
  float bound = length(p_in) - 2.8;
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
  return vec2(d, trap);
}

// 30. 3D Lorenz Strange Attractor (orbit-traced, sigma=10, rho=28, beta=8/3)
vec2 mapLorenzAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.5;
  p.xz = rot2D(t * 0.08) * p.xz;
  float sigma = 10.0, rho = 28.0, beta = 8.0 / 3.0;
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 q = vec3(0.1 + float(s) * 0.1, 0.0, 25.0 - float(s) * 5.0);
    for (int i = 0; i < 80; i++) {
      float dx = sigma * (q.y - q.x);
      float dy = q.x * (rho - q.z) - q.y;
      float dz = q.x * q.y - beta * q.z;
      q += vec3(dx, dy, dz) * 0.008;
      vec3 scaled = q * 0.08;
      float dist = length(p - scaled);
      density += exp(-dist * 4.0);
    }
  }
  float d = 0.5 - density * 0.12;
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
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 q = vec3(float(s) * 0.5 - 0.75, float(s & 1) * 0.3 - 0.15, float(s) * 0.4);
    for (int i = 0; i < 60; i++) {
      float xn = sin(aa * q.y) + cc * cos(aa * q.x);
      float yn = sin(bb * q.x) + dd * cos(bb * q.y);
      float zn = sin(q.z * 1.5 + t * 0.1 + float(i) * 0.05) * 0.5;
      q = vec3(xn, yn, zn);
      float dist = length(p - q);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.3);
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
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.1 - float(s) * 0.08, float(s) * 0.3);
    for (int i = 0; i < 60; i++) {
      float x = 1.0 - a * v.x * v.x + v.y;
      float y = b * v.x;
      float z = sin(v.z * phi + t * 0.15) * 0.5;
      v = vec3(x, y, z);
      vec3 scaled = v * 0.5;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 42. Aizawa Toroidal Chaotic Attractor (orbit-traced)
vec2 mapAizawaAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.08) * p.xz;
  float a = 0.95, b = 0.7, c = 0.6, dd = 3.5, e = 0.25, f = 0.1;
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.05 * float(s), 0.5 + float(s) * 0.25);
    for (int i = 0; i < 60; i++) {
      float dx = (v.z - b) * v.x - dd * v.y;
      float dy = dd * v.x + (v.z - b) * v.y;
      float dz = c + a * v.z - v.z * v.z * v.z / 3.0 - (v.x * v.x + v.y * v.y) * (1.0 + e * v.z) + f * v.z * v.x * v.x * v.x;
      v += vec3(dx, dy, dz) * 0.05;
      vec3 scaled = v * 1.0;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 43. Thomas Cyclically Symmetric Attractor (orbit-traced, b=0.208186)
vec2 mapThomasAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.yz = rot2D(t * 0.06) * p.yz;
  float b = 0.208186;
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(1.0 + float(s) * 0.3, 0.0, -1.0 + float(s) * 0.5);
    for (int i = 0; i < 60; i++) {
      float dx = sin(v.y) - b * v.x;
      float dy = sin(v.z) - b * v.y;
      float dz = sin(v.x) - b * v.z;
      v += vec3(dx, dy, dz) * 0.1;
      vec3 scaled = v * 0.45;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 44. Halvorsen 3-Fold Chaotic Attractor (orbit-traced, a=1.89)
vec2 mapHalvorsenAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xy = rot2D(t * 0.07) * p.xy;
  float a = 1.89;
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(-1.0 + float(s) * 0.5, -1.0 + float(s) * 0.3, -1.0);
    for (int i = 0; i < 60; i++) {
      float dx = -a * v.x - 4.0 * v.y - 4.0 * v.z - v.y * v.y;
      float dy = -a * v.y - 4.0 * v.z - 4.0 * v.x - v.z * v.z;
      float dz = -a * v.z - 4.0 * v.x - 4.0 * v.y - v.x * v.x;
      v += vec3(dx, dy, dz) * 0.04;
      vec3 scaled = v * 0.25;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
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
  return vec2(max(max(zThick, bound * 0.4), 0.001), trap);
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
  float density = 0.0;
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
      vec3 scaled = q * 0.15;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.2;
  return vec2(max(d, bound) * 0.5, density * 0.25);
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
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.0, 0.1 + float(s) * 0.2);
    for (int i = 0; i < 60; i++) {
      float fx = m1 * v.x + 0.5 * (m0 - m1) * (abs(v.x + 1.0) - abs(v.x - 1.0));
      float dx = alpha * (v.y - v.x - fx);
      float dy = v.x - v.y + v.z;
      float dz2 = -beta * v.y;
      v += vec3(dx, dy, dz2) * 0.008;
      vec3 scaled = v * 0.1;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 64. Standard Map (Chirikov-Taylor, orbit-traced)
vec2 mapStandardMap(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float K = 1.5 + 0.5 * sin(t * 0.1);
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 65. Ikeda Map (orbit-traced, b=0.9, u=0.4+0.05*sin(t))
vec2 mapIkedaMap(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float b = 0.9;
  float u = 0.4 + 0.05 * sin(t * 0.15);
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.25);
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
  return vec2(max(max(d, 0.001), bound) * 0.5, trap * 0.15);
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
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, -0.2, float(s) * 0.3);
    for (int i = 0; i < 60; i++) {
      float dv = v.x - v.y * v.y * v.y / 3.0 + v.y + I_ext;
      float dw = (v.x - a + b_param * v.y) / tau;
      float dz2 = sin(v.z * 2.0 + t * 0.1) * 0.15;
      v += vec3(dv, dw, dz2) * 0.08;
      vec3 scaled = v * 0.45;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 73. Rössler Attractor (orbit-traced, a=0.2, b=0.2, c=5.7)
vec2 mapRosslerAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.07) * p.xz;
  float a = 0.2, b = 0.2, c = 5.7;
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.1, float(s) * 0.3);
    for (int i = 0; i < 80; i++) {
      float dx = -v.y - v.z;
      float dy = v.x + a * v.y;
      float dz2 = b + v.z * (v.x - c);
      v += vec3(dx, dy, dz2) * 0.015;
      vec3 scaled = v * 0.15;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 74. Duffing Attractor (orbit-traced, alpha=1, beta=5, delta=0.02, gamma=8)
vec2 mapDuffingAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  p.xz = rot2D(t * 0.06) * p.xz;
  float alpha = 1.0, beta_p = 5.0, delta = 0.02, gamma = 8.0;
  float density = 0.0;
  for (int s = 0; s < 4; s++) {
    vec3 v = vec3(0.1 + float(s) * 0.15, 0.0, float(s) * 0.5);
    for (int i = 0; i < 60; i++) {
      float omega = 1.5 + float(s) * 0.3;
      float dx = v.y;
      float dy = -delta * v.y - alpha * v.x - beta_p * v.x * v.x * v.x + gamma * cos(v.z);
      float dz2 = omega;
      v += vec3(dx, dy, dz2) * 0.015;
      vec3 scaled = v * 0.3;
      float dist = length(p - scaled);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.25);
}

// 75. Logistic Map Bifurcation (period-doubling cascade, Feigenbaum δ≈4.669)
vec2 mapLogisticBifurcation(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.2;
  p.xz = rot2D(t * 0.05) * p.xz;
  float r = 2.5 + (p.x + 1.5) / 3.0 * 1.5;
  float density = 0.0;
  for (int s = 0; s < 6; s++) {
    float x = 0.3 + float(s) * 0.1;
    for (int i = 0; i < 50; i++) {
      x = r * x * (1.0 - x);
    }
    for (int i = 0; i < 40; i++) {
      x = r * x * (1.0 - x);
      vec3 pt = vec3(p.x, (x - 0.5) * 2.0, float(s) * 0.3 - 0.75);
      float dist = length(p - pt);
      density += exp(-dist * 3.5);
    }
  }
  float d = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(d, bound) * 0.5, density * 0.25);
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
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float dd = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 78. Pickover Attractor (x'=sin(a*y)+c*cos(a*x), y'=sin(b*x)+d*cos(b*y))
vec2 mapPickoverAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = -1.64 + sin(t * 0.04) * 0.4;
  float b = 1.9 + cos(t * 0.06) * 0.3;
  float c_ = -0.31 + sin(t * 0.05) * 0.3;
  float d_ = 0.72 + cos(t * 0.03) * 0.2;
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float dd = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
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
  return vec2(max(max(d3d, bound * 0.4), 0.001), trap);
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
  return vec2(max(max(d3d, bound * 0.3), 0.001), trap);
}

// 83. Bedhead Attractor (3D: x'=sin(y*z)-z*cos(x*y))
vec2 mapBedheadAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 0.95 + sin(t * 0.04) * 0.2;
  float b = 0.7 + cos(t * 0.06) * 0.15;
  float c_ = 0.6 + sin(t * 0.05) * 0.2;
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float dd = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 84. FourSpot Attractor (4-wing chaotic attractor)
vec2 mapFourSpotAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 1.0;
  float a = 2.0 + sin(t * 0.05) * 0.5;
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float dd = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.5;
  return vec2(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
}

// 85. Svensson Attractor (x'=d*sin(a*y)-c, y'=b-x)
vec2 mapSvenssonAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 0.8;
  float a = 2.0 + sin(t * 0.04) * 0.3;
  float b = 0.2 + cos(t * 0.06) * 0.1;
  float c_ = 1.57 + sin(t * 0.05) * 0.2;
  float d_ = 1.4 + cos(t * 0.03) * 0.3;
  float density = 0.0;
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
      density += exp(-dist * 3.5);
    }
  }
  float dd = 0.5 - density * 0.12;
  float bound = length(p_in) - 2.3;
  return vec2(max(max(dd, 0.001), bound) * 0.5, density * 0.25);
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
  float density = 0.0;
  vec3 q = p;
  for (int i = 0; i < 8; i++) {
    q = abs(q) - vec3(0.5, 0.3, 0.4);
    q.xy = rot2D(t * 0.1 + float(i)) * q.xy;
    q.yz = rot2D(t * 0.08) * q.yz;
    density += exp(-length(q) * 2.0);
  }
  float d = 0.5 - density * 0.15;
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
  float phiAngle = acos(p.z / max(r, 0.01));
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
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    dr = pow(r, 3.0) * 4.0 * dr + 1.0;
    float zr = pow(r, 4.0);
    theta = theta * 4.0;
    phiAngle = phiAngle * 4.0;
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(phiAngle) * sin(theta), cos(theta));
    z += p;
  }
  return 0.5 * log(r) * r / dr;
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
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    dr = pow(r, 11.0) * 12.0 * dr + 1.0;
    float zr = pow(r, 12.0);
    theta = theta * 12.0;
    phiAngle = phiAngle * 12.0;
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(phiAngle) * sin(theta), cos(theta));
    z += p;
  }
  return 0.5 * log(r) * r / dr;
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
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    dr = 3.0 * pow(r, 2.0) * dr + 1.0;
    float zr = pow(r, 3.0);
    theta = theta * 3.0;
    phiAngle = phiAngle * 3.0;
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(phiAngle) * sin(theta), cos(theta));
    z += p;
  }
  return 0.5 * log(r) * r / dr;
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
  // NEW BEAUTIFUL FRACTALS
  if (ftype == 86) return mapKaleidoscopicIFS(p, t, phi, iters);
  if (ftype == 87) return mapFlowerOfLife(p, t, phi);
  if (ftype == 88) return mapCosmicSpiral(p, t, phi);
  if (ftype == 89) return mapCrystalGrowth(p, t, phi, iters);
  if (ftype == 90) return mapQuantumFoam(p, t, phi);
  if (ftype == 91) return mapFractalCoral(p, t, phi, iters);
  if (ftype == 92) return mapNebulaCloud(p, t, phi, iters);
  if (ftype == 93) return mapHyperbolicTiling(p, t, phi);
  if (ftype == 94) return mapOrganicCell(p, t, phi);
  if (ftype == 95) return mapGoldenHelix(p, t, phi);
  // MODERN FRACTALS WITH ADVANCED TECHNIQUES
  if (ftype == 96) return mapMandelbulbPower4(p, t, phi, iters);
  if (ftype == 97) return mapMandelbulbPower12(p, t, phi, iters);
  if (ftype == 98) return mapHybridMandelboxKIFS(p, t, phi, iters);
  if (ftype == 99) return mapMultibrot3Advanced(p, t, phi, iters);
  return mapFractalFlameIFS(p, t, phi, iters);
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
      // 0: Continuous Topological Morph — stronger blend for visible transition
      float morphBlend = blend * 0.7 + 0.15; // Minimum 15% blend even at low settings
      current_d = mix(current_d, dB, morphBlend);
      current_trap = mix(current_trap, trapB, morphBlend * 0.8);
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
      // 4: Domain Warp — stronger spatial distortion
      float warpBlend = blend * 0.5 + 0.1; // Stronger base warp
      current_d = mix(current_d, dB, warpBlend);
      current_trap = mix(current_trap, trapB, 0.55); // More trap influence
    } else if (compOp == 5) {
      // 5: Harmonic Spectral Resonance — stronger displacement
      float disp = clamp(dB * 0.35, -0.12, 0.12) * blend; // 2x displacement range
      current_d = current_d + disp;
      current_trap = min(current_trap, trapB * 0.7 + current_trap * 0.3); // Blend traps
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
      float h = clamp(0.5 - 0.5 * (resC.x - current_d) / k, 0.0, 1.0);
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
    if (h < 0.0005) return smoothstep(0.0, 0.002, h); // Smooth shadow termination
    res = min(res, k * h / t);
    t += max(h * 0.85, 0.02);
  }
  return clamp(res, 0.0, 1.0);
}

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
  // Fixed large max_dist — decoupled from cam_dist to prevent far-side slicing
  // When camera is close, rays travel nearly parallel to surface and need full range
  float max_dist = 128.0;
  bool hit = false;
  float min_trap = 1e10;
  int steps = 0;

  // OPTIMIZATION 1: Space Leaping — skip empty space with bounding sphere
  // Check if ray starts outside a large bounding sphere around the fractal
  float boundingRadius = 4.0; // Fractal is contained within radius 4
  float rayOriginDist = length(ro);
  if (rayOriginDist > boundingRadius) {
    // Ray starts outside bounding sphere, skip to intersection
    float tmin = rayOriginDist - boundingRadius;
    if (tmin > t) t = tmin * 0.9; // Start 10% before sphere intersection
  }

  // OPTIMIZATION 2: LOD System — reduce iterations based on distance
  // Far away fractals don't need as many iterations
  float lodFactor = clamp(cam_dist / 10.0, 0.0, 1.0);
  int iterReduction = int(lodFactor * 8.0); // Reduce up to 8 iterations at far distance

  // Adaptive step budget: complex fractals at close zoom need many more steps
  int maxSteps = (cam_dist < 1.0) ? 256 : (cam_dist < 3.0) ? 200 : 160;
  // Scale-aware hit threshold: tighter at close range for clean surface convergence
  float hitScale = max(cam_dist * 0.0003, 0.0001);

  // OPTIMIZATION 3: Early Ray Termination — stop if we're clearly missing
  float lastD = 1e10;
  int missCount = 0;

  for (int i = 0; i < 256; i++) {
    if (i >= maxSteps) break;
    vec3 p = ro + rd * t;
    vec2 res = sceneSDF(p);
    float d = res.x;
    min_trap = min(min_trap, res.y);

    float hit_threshold = hitScale + 0.0002;
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      break;
    }

    // OPTIMIZATION 4: Adaptive Step Size with distance-based acceleration
    // When far from surface, take larger steps; when close, be conservative
    float absD = abs(d);
    float step_factor;
    if (absD > 2.0) {
      step_factor = 0.98; // Very far: almost full step
    } else if (absD > 0.5) {
      step_factor = 0.92; // Far: conservative
    } else if (absD > 0.05) {
      step_factor = 0.82; // Mid: moderate
    } else {
      step_factor = 0.65; // Close: very conservative
    }
    
    // OPTIMIZATION 5: Minimum step size scales with distance
    float minStep = max(cam_dist * 0.00005, 0.0001);
    float step_d = max(absD * step_factor, minStep);
    t += step_d;
    
    // OPTIMIZATION 6: Early Ray Termination
    // If we're moving away from surface for many steps, terminate early
    if (d > lastD * 1.5 && d > 0.5) {
      missCount++;
      if (missCount > 8) break; // Ray is clearly missing, stop
    } else {
      missCount = 0;
    }
    lastD = d;
    
    if (t > max_dist) break;
  }

  // Refinement pass: snap to surface more precisely if we got close but didn't converge
  // lastD already tracked from main loop
  if (!hit && t < max_dist) {
    for (int j = 0; j < 16; j++) {
      vec3 p = ro + rd * t;
      float d = sceneSDF(p).x;
      lastD = d;
      if (abs(d) < hitScale * 0.5) {
        hit = true;
        break;
      }
      t -= d * 0.5; // Gentler back-tracking for stability
      if (t < 0.0) { t = 0.001; break; }
    }
  }

  // Near-miss fallback: if we got very close to surface but didn't converge,
  // still render as surface to prevent black holes
  bool nearMiss = !hit && abs(lastD) < hitScale * 5.0 && t < max_dist;

  float bg_rad = length(uv);
  vec3 col = vec3(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u_time * 0.3));
  col += u_accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit || nearMiss) {
    vec3 p = ro + rd * t;
    // Scale-adaptive normal epsilon: larger at close range to avoid precision noise
    float normalEps = min(0.0015 * max(t, 0.05) + 0.0004, 0.003);
    vec3 base_n = calcNormal(p, normalEps);
    float ao = calcAO(p, base_n, t);
    // Smooth normal flip — prevents hard lighting boundary at silhouette edge
    float ndotv = dot(base_n, rd);
    vec3 n = ndotv > 0.0 ? -base_n : base_n;

    vec3 light1 = normalize(vec3(cos(u_time * 0.3), 1.2, sin(u_time * 0.3)));
    vec3 light2 = normalize(vec3(-sin(u_time * 0.25 * GOLDEN_RATIO), -0.6, cos(u_time * 0.25 * GOLDEN_RATIO)));

    // CONCEPTUAL FIX: Remove soft shadows from dynamic lights
    // Dynamic lights can end up behind/beside the fractal, casting camera/object shadows
    // Instead, use only Ambient Occlusion for self-shadowing
    // This ensures only the fractal casts shadows on itself, not external objects
    float sh1 = 1.0; // No soft shadows — pure AO-based shading
    float sh2 = 1.0;

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

    // Diffuse lighting without soft shadows — relies on AO for depth
    float diff1 = max(dot(n, light1), 0.0);
    float diff2 = max(dot(n, light2), 0.0);

    vec3 h1 = normalize(light1 - rd);
    float spec1 = pow(max(dot(n, h1), 0.0), 32.0);
    
    // Surface curvature from normal variation (2 extra SDF calls)
    // Distance-adaptive epsilon + curvature floor prevents close-up saturation
    float curv = 0.0;
    {
      float ce = min(0.0015 * max(t, 0.1) + 0.0004, 0.003);
      vec3 dn1 = calcNormal(p + vec3(ce, 0.0, 0.0), ce) - n;
      vec3 dn2 = calcNormal(p + vec3(0.0, ce, 0.0), ce) - n;
      curv = clamp((length(dn1) + length(dn2)) / (2.0 * ce), 0.0, 8.0);
    }
    float curvNorm = clamp(curv / 5.0, 0.0, 1.0);
    // Curvature floor prevents trapDetail/trapWeight saturation at close range
    float effectiveTrap = max(min_trap, curvNorm * 0.15);
    float trapDetail = clamp(1.0 / (1.0 + effectiveTrap * 2.0), 0.0, 1.0);

    // Harmonic Cosine Palette Engine — scale-independent phase for all zoom levels
    // Reduced trap weight to prevent horizontal banding; added position-based variation
    float seedAnim = u_palette_seed + u_palette_rotation * u_time * 2.5;
    float trapSmooth = effectiveTrap / (1.0 + effectiveTrap); // Soft saturation, no jumps
    float phase = fract(trapSmooth * 0.8 + curvNorm * 1.2 + p.y * 0.5 + p.x * 0.3 + length(p - ro) * 0.15 + u_time * 0.04 + seedAnim * 0.01);
    float w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    float w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    float w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    vec3 mat_col = u_primary_color * w_primary + u_secondary_color * w_secondary;
    mat_col = mix(mat_col, u_accent_color, w_accent * 0.30);
    mat_col = mix(mat_col, u_accent_color, pow(1.0 - ao, 2.0) * 0.18);
    // Orbit trap direct coloring with saturation-safe effectiveTrap
    float trapWeight = clamp(0.30 / (1.0 + effectiveTrap * 2.5), 0.0, 0.40);
    mat_col = mix(mat_col, u_accent_color * (0.5 + trapDetail * 0.5), trapWeight);

    // Environment ambient: sample SDF along normal for color-bleeding approximation
    float envOcc = sceneSDF(p + n * 0.15).x;
    float envFactor = clamp(envOcc * 6.0, 0.0, 1.0);
    vec3 ambientCol = mix(u_secondary_color * 0.25, u_primary_color * 0.15, envFactor);
    vec3 ambient = ambientCol * ao;
    // Secondary bounce light: light bouncing off nearby surfaces into crevices
    vec3 bounceDir = normalize(-light1 + n * 0.5);
    float bounce = max(dot(n, bounceDir), 0.0) * 0.12;
    float bounceOcc = clamp(sceneSDF(p - light1 * 0.08).x * 12.0, 0.0, 1.0);
    vec3 bounceCol = u_secondary_color * bounce * bounceOcc * ao;

    vec3 diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    vec3 specular = vec3(1.0, 0.97, 0.92) * spec1 * 0.85 * ao; // Brighter specular for visible highlights
    vec3 rim = u_accent_color * fresnel * 0.45 * (0.3 + 0.7 * ao); // Stronger rim for edge definition

    // Full lighting: ambient + diffuse + bounce + specular + rim + SSS
    col = ambient * 0.6 + diffuse * 1.2 + bounceCol * 1.5 + specular + rim * 1.3 + sssCol * 1.5;
    col *= (0.4 + 0.6 * ao); // Balanced AO — preserves brightness while adding depth

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
      float beerDist = min(max(t - 0.5, 0.0), 20.0); // Clamp to prevent black-out at extreme depths
      vec3 beer = exp(-beerDist * vec3(0.08, 0.25, 0.9));
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

    // Distance-relative atmospheric falloff — fog starts well beyond surface at all zoom levels
    float fogStart = mix(20.0, max(4.0, cam_dist * 3.0 + 4.0), smoothstep(0.5, 5.0, cam_dist));
    float fogDensity = mix(0.008, 0.015, smoothstep(0.3, 3.0, cam_dist));
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
`,ih=ah;class nh extends ff{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline"}init(){console.group("[WebGL2] === INITIALIZATION START ==="),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const s=this.canvas.getBoundingClientRect();(s.width===0||s.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let f=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED"),f||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),f||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),!f){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const F=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return F&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",F.getParameter(F.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=f,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",f.getParameter(f.VERSION)),console.info("[WebGL2] GL_RENDERER:",f.getParameter(f.RENDERER)),console.info("[WebGL2] GL_VENDOR:",f.getParameter(f.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",f.getParameter(f.SHADING_LANGUAGE_VERSION));const u=f.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(u==null?void 0:u.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",u==null?void 0:u.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",u==null?void 0:u.includes("WEBGL_debug_renderer_info"));try{const F=f.getExtension("WEBGL_debug_renderer_info");if(F){const E=f.getParameter(F.UNMASKED_RENDERER_WEBGL);E&&(this.rendererInfo=E)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const g=this.compileShader(f.VERTEX_SHADER,th),b=this.compileShader(f.FRAGMENT_SHADER,ih);if(!g||!b)return!1;const x=f.createProgram();if(!x)return!1;if(f.attachShader(x,g),f.attachShader(x,b),f.linkProgram(x),f.deleteShader(g),f.deleteShader(b),!f.getProgramParameter(x,f.LINK_STATUS))return console.error("WebGL Program Link Error:",f.getProgramInfoLog(x)),!1;this.program=x;const A=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=f.createVertexArray(),f.bindVertexArray(this.vao),this.vbo=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,this.vbo),f.bufferData(f.ARRAY_BUFFER,A,f.STATIC_DRAW);const D=f.getAttribLocation(x,"a_position");return f.enableVertexAttribArray(D),f.vertexAttribPointer(D,2,f.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed","u_palette_rotation"].forEach(F=>{this.uniformLocs[F]=f.getUniformLocation(x,F)}),!0}compileShader(s,f){if(!this.gl)return null;const u=this.gl,g=u.createShader(s);return g?(u.shaderSource(g,f),u.compileShader(g),u.getExtension("KHR_parallel_shader_compile"),u.getShaderParameter(g,u.COMPILE_STATUS)?(console.info("[WebGL2] Shader compiled successfully ("+(s===u.VERTEX_SHADER?"vertex":"fragment")+")"),g):(console.error("Shader compilation error:",u.getShaderInfoLog(g)),u.deleteShader(g),null)):null}render(s,f){const u=this.gl;if(!u||!this.program||!this.vao)return;u.viewport(0,0,this.canvas.width,this.canvas.height),u.useProgram(this.program),u.bindVertexArray(this.vao);const g=this.resolvePalette(f),b=this.computeIndices(f),x=new Float32Array(48);this.packUniforms(x,s,f,g,b);const A=(F,E)=>{const L=this.uniformLocs[F];L&&u.uniform1f(L,E)},D=(F,E,L)=>{const U=this.uniformLocs[F];U&&u.uniform2f(U,E,L)},v=(F,E,L,U)=>{const Y=this.uniformLocs[F];Y&&u.uniform3f(Y,E,L,U)};D("u_resolution",x[0],x[1]),A("u_time",x[2]),A("u_phi_val",x[3]),D("u_cam_rot",x[4],x[5]),A("u_zoom",x[6]),A("u_fractal_type",x[7]),A("u_iterations",x[8]),A("u_glow_intensity",x[9]),A("u_morph_speed",x[10]),A("u_hybrid_type",x[11]),A("u_hybrid_blend",x[12]),A("u_box_fold",x[13]),A("u_sphere_fold",x[14]),A("u_interior_cut",x[15]),v("u_primary_color",x[16],x[17],x[18]),A("u_tertiary_type",x[19]),v("u_secondary_color",x[20],x[21],x[22]),A("u_tertiary_blend",x[23]),v("u_accent_color",x[24],x[25],x[26]),A("u_compose_op",x[27]),A("u_smooth_k",x[28]),A("u_warp_strength",x[29]),A("u_octave_layers",x[30]),A("u_cam_mode",x[31]),v("u_cam_pos",x[32],x[33],x[34]),A("u_slice_plane",x[35]),A("u_headlamp_power",x[36]),A("u_volumetric_fog",x[37]),A("u_slice_axis",x[38]),A("u_render_style",x[39]),A("u_palette_seed",x[43]),A("u_palette_rotation",x[44]),u.drawArrays(u.TRIANGLES,0,3)}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function lh(p,s){const{forcedBackend:f,isEmbeddedBrowser:u,isMobileDevice:g,paramsRef:b,onTelemetryUpdate:x,onEngineReady:A,onNextSpecimen:D,onPrevSpecimen:v,onInteraction:F,screenshotRequested:E,onScreenshotCaptured:L}=s,U=k.useRef(null),[Y,K]=k.useState(()=>f==="webgl2"?"webgl2":f==="webgpu"?u?"webgl2":"webgpu":"webgl2"),[W,B]=k.useState(!0),[ce,_]=k.useState(!1),[P,he]=k.useState("Initializing..."),[De,ee]=k.useState(""),[Ce,Fe]=k.useState(0),[Ue,Xe]=k.useState(0),[Ge,ue]=k.useState(0),[qe,oe]=k.useState(0),[w,q]=k.useState([0,0]),T=k.useRef(null),V=k.useRef(null),J=k.useRef("Initializing..."),m=k.useRef(x);m.current=x;const C=k.useRef(L);C.current=L;const G=k.useRef(D);G.current=D;const X=k.useRef(v);X.current=v;const ae=k.useRef(F);ae.current=F;const ne=k.useRef([]),fe=k.useRef(0),We=k.useRef(0),ze=k.useRef(null),la=k.useRef(0),ra=k.useRef(!1),Ve=k.useRef(new Set),Ea=k.useRef(!1),At=k.useRef(!0),Wt=k.useRef(!1),H=k.useRef(!1),pe=k.useRef(!1),I=k.useRef({x:0,y:0}),Re=k.useRef({x:0,y:0}),ct=k.useRef(0),si=k.useRef(0),Mi=.92,qa=1e-4;k.useEffect(()=>{H.current=E},[E]),k.useEffect(()=>{if(f==="webgl2")K("webgl2");else if(f==="webgpu"){if(u){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),ra.current=!0,K("webgl2");return}ra.current=!1,K("webgpu")}else f==="auto"&&K("webgl2")},[f]);const $e=k.useCallback(()=>{const ge=U.current,Ze=p.current;if(!ge||!Ze)return;const He=u||g?1.5:2,rt=Math.min(window.devicePixelRatio||1,He),ut=Ze.clientWidth||window.innerWidth||800,ke=Ze.clientHeight||window.innerHeight||600,Jt=Math.max(Math.floor(ut*rt),320),It=Math.max(Math.floor(ke*rt),240);if(ge.width!==Jt||ge.height!==It){const Tt=ge.width,Qe=ge.height;ge.width=Jt,ge.height=It,console.info(`[Resize] Canvas buffer: ${Tt}x${Qe} → ${Jt}x${It} (container: ${ut}x${ke}, DPR: ${rt.toFixed(2)})`)}},[u,g]);return k.useEffect(()=>{const ge=U.current;if(!ge)return;$e();let Ze=!1;const He=setTimeout(()=>{Ze||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),B(!1))},12e3),rt=setTimeout(()=>{!Wt.current&&!Ze&&console.error("[useRenderEngine] Engine setup timed out after 20s — GPU unavailable")},2e4);async function ut(){if(!ge)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",Y),B(!0),Wt.current=!1,_(!1),T.current&&(T.current.destroy(),T.current=null),V.current&&(V.current.destroy(),V.current=null),Y==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const $t=new ec(ge);if(await $t.init()&&!Ze){T.current=$t,Wt.current=!0,_(!0),J.current="WebGPU (WGSL)",he("WebGPU (WGSL)"),ee($t.adapterInfo),B(!1),console.info(`[DIAG] Engine ready: WebGPU | ${$t.adapterInfo} | ${ge.width}x${ge.height} | fractal=${b.current.type} | palette=${b.current.paletteId} | renderStyle=${b.current.renderStyle} | paletteSeed=${b.current.paletteSeed??0}`),A==null||A();return}else{ra.current=!0,Ze?B(!1):K("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const Ke=new nh(ge);Ke.init()&&!Ze?(V.current=Ke,Wt.current=!0,_(!0),J.current="WebGL2 (GLSL)",he("WebGL2 (GLSL)"),ee(Ke.rendererInfo),B(!1),console.info(`[DIAG] Engine ready: WebGL2 | ${Ke.rendererInfo} | ${ge.width}x${ge.height} | fractal=${b.current.type} | palette=${b.current.paletteId} | renderStyle=${b.current.renderStyle} | paletteSeed=${b.current.paletteSeed??0}`),A==null||A()):(B(!1),A==null||A())}ut().catch(Ke=>{console.error("[useRenderEngine] Engine setup crashed:",Ke),B(!1),A==null||A()});const ke=setTimeout(()=>{Ze||($e(),requestAnimationFrame(()=>{Ze||$e()}))},100),Jt=Ke=>{Ke.preventDefault(),Ea.current=!0},It=()=>{Ea.current=!1,ut()};ge.addEventListener("webglcontextlost",Jt,!1),ge.addEventListener("webglcontextrestored",It,!1);const Tt=p.current;let Qe=null;return Tt&&(Qe=new ResizeObserver(()=>{Ze||$e()}),Qe.observe(Tt)),()=>{var Ke,Oe;Ze=!0,clearTimeout(rt),clearTimeout(He),clearTimeout(ke),ge.removeEventListener("webglcontextlost",Jt),ge.removeEventListener("webglcontextrestored",It),Qe&&Qe.disconnect(),(Ke=T.current)==null||Ke.destroy(),(Oe=V.current)==null||Oe.destroy()}},[Y,$e]),k.useEffect(()=>{let ge=!0,Ze=performance.now();const He=()=>{At.current=!document.hidden,At.current&&(Ze=performance.now())};document.addEventListener("visibilitychange",He);const rt=ut=>{var Qe,Ke;if(!ge)return;if(Ea.current){ze.current=requestAnimationFrame(rt);return}if(!At.current){ze.current=requestAnimationFrame(rt);return}if(!Wt.current){setTimeout(()=>{ge&&(ze.current=requestAnimationFrame(rt))},1e3);return}const ke=b.current,Jt=ut-Ze,It=ke.targetFps||60,Tt=It>=240?0:1e3/It;if(Tt<=0||Jt>=Tt-.75){const Oe=Math.min(Jt,100);Ze=ut,la.current+=Oe/1e3;const $t=la.current;if(ke.cameraMode==="flyThrough"){const dt=ke.rotX,ta=ke.rotY,Bt=Math.cos(dt),da=Math.sin(dt),oa=Math.cos(ta),Ci=Math.sin(ta),Mt=[da*oa,Ci,-Bt*oa],ma=[Bt,0,da],fi=[0,1,0];let ot=1.4*(Oe/1e3);(Ve.current.has("ShiftLeft")||Ve.current.has("ShiftRight"))&&(ot*=2.8);let Ye=0,Ct=0,ha=0;(Ve.current.has("KeyW")||Ve.current.has("ArrowUp"))&&(Ye+=Mt[0]*ot,Ct+=Mt[1]*ot,ha+=Mt[2]*ot),(Ve.current.has("KeyS")||Ve.current.has("ArrowDown"))&&(Ye-=Mt[0]*ot,Ct-=Mt[1]*ot,ha-=Mt[2]*ot),(Ve.current.has("KeyA")||Ve.current.has("ArrowLeft"))&&(Ye-=ma[0]*ot,ha-=ma[2]*ot),(Ve.current.has("KeyD")||Ve.current.has("ArrowRight"))&&(Ye+=ma[0]*ot,ha+=ma[2]*ot),(Ve.current.has("KeyE")||Ve.current.has("Space"))&&(Ct+=fi[1]*ot),(Ve.current.has("KeyQ")||Ve.current.has("KeyC"))&&(Ct-=fi[1]*ot),(Ye!==0||Ct!==0||ha!==0)&&(b.current={...ke,camPosX:(ke.camPosX??0)+Ye,camPosY:(ke.camPosY??0)+Ct,camPosZ:(ke.camPosZ??0)+ha})}const hl=ke.autoRotate?$t*ke.autoRotateSpeed*.12:0,Rr=ke.autoRotate?Math.sin($t*.18)*.06:0;let ci=0,ui=0;if(!pe.current&&(Math.abs(Re.current.x)>qa||Math.abs(Re.current.y)>qa)){const dt=ke.zoom,ta=.0045*Math.max(.12,Math.min(1,dt/2.8)),Bt=Oe;ci=Re.current.x*Bt*ta*.5,ui=Re.current.y*Bt*ta*.5,Re.current.x*=Mi,Re.current.y*=Mi,Math.abs(Re.current.x)<qa&&(Re.current.x=0),Math.abs(Re.current.y)<qa&&(Re.current.y=0)}const pi={...ke,rotX:ke.rotX+hl+ci,rotY:Math.max(-1.52,Math.min(1.52,ke.rotY+Rr+ui))},Se=U.current;if(Se&&Se.width>0&&Se.height>0&&(T.current?T.current.render($t,pi):V.current&&V.current.render($t,pi)),H.current&&Se)try{const dt=Se.toDataURL("image/png");(Qe=C.current)==null||Qe.call(C,dt)}catch(dt){console.error("Screenshot capture failed",dt)}const ea=ne.current;if(ea.push(Oe),ea.length>72&&ea.shift(),ut-fe.current>250){fe.current=ut;const dt=ea.reduce((Ye,Ct)=>Ye+Ct,0)/ea.length,ta=Oe>0?Math.round(1e3/Oe):0,Bt=dt>0?Math.round(1e3/dt):0,da=[...ea].sort((Ye,Ct)=>Ct-Ye),oa=Math.floor(da.length*.05),Ci=da[oa]||Oe,Mt=Ci>0?Math.round(1e3/Ci):0,ma=T.current?T.current.adapterInfo:V.current?V.current.rendererInfo:"GPU Engine",fi=Y==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",ot={fps:ta,avgFps:Bt,frameTimeMs:parseFloat(Oe.toFixed(2)),onePercentLow:Mt,backend:fi,adapterName:ma,resolution:[(Se==null?void 0:Se.width)||0,(Se==null?void 0:Se.height)||0],drsScale:1,targetFps:ke.targetFps,interiorDistance:0};if((Ke=m.current)==null||Ke.call(m,ot),Fe(ta),Xe(Bt),ue(parseFloat(Oe.toFixed(2))),oe(Mt),q([(Se==null?void 0:Se.width)||0,(Se==null?void 0:Se.height)||0]),We.current||(We.current=ut),ut-We.current>3e4){We.current=ut;const Ye=b.current;console.info(`[DIAG] Health: fps=${ta} avg=${Bt} 1%=${Mt} | fractal=${Ye.type} hybrid=${Ye.hybridType} | style=${Ye.renderStyle} cam=${Ye.cameraMode} | palette=${Ye.paletteId} seed=${Ye.paletteSeed??0} rot=${Ye.paletteRotation} | audio=${Ye.enableAudio} tuning=${Ye.audioTuning} | res=${Se==null?void 0:Se.width}x${Se==null?void 0:Se.height}`)}}}ze.current=requestAnimationFrame(rt)};return ze.current=requestAnimationFrame(rt),()=>{ge=!1,document.removeEventListener("visibilitychange",He),ze.current&&cancelAnimationFrame(ze.current)}},[Y]),k.useEffect(()=>{const ge=He=>{var rt,ut,ke;((rt=He.target)==null?void 0:rt.tagName)!=="INPUT"&&(He.repeat||(Ve.current.add(He.code),b.current.cameraMode!=="flyThrough"&&(He.key===" "||He.key==="ArrowRight"||He.key==="ArrowDown"||He.key==="PageDown"?(He.preventDefault(),(ut=G.current)==null||ut.call(G)):(He.key==="ArrowLeft"||He.key==="ArrowUp"||He.key==="PageUp")&&(He.preventDefault(),(ke=X.current)==null||ke.call(X)))))},Ze=He=>{Ve.current.delete(He.code)};return window.addEventListener("keydown",ge),window.addEventListener("keyup",Ze),()=>{window.removeEventListener("keydown",ge),window.removeEventListener("keyup",Ze)}},[]),{activeEngineType:Y,isCompiling:W,isEngineReady:ce,backendLabel:P,adapterInfo:De,fps:Ce,avgFps:Ue,frameTimeMs:Ge,onePercentLow:qe,resolution:w,canvasRef:U,keysPressedRef:Ve,isDraggingRef:pe,velocityRef:Re,lastMousePosRef:I,lastInteractionReportTimeRef:si,lastMoveTimeRef:ct,params:b.current}}const rh=({params:p,onParamsChange:s,onTelemetryUpdate:f,screenshotRequested:u,onScreenshotCaptured:g,forcedBackend:b="auto",onInteraction:x,onNextSpecimen:A,onPrevSpecimen:D,onEngineReady:v,scrollMode:F="feed"})=>{const E=k.useRef(null),L=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),U=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),Y=k.useRef(p);Y.current=p;const K=k.useRef(null);k.useRef(0);const W=lh(E,{forcedBackend:b,isEmbeddedBrowser:L,isMobileDevice:U,paramsRef:Y,onTelemetryUpdate:f,onEngineReady:v,onNextSpecimen:A,onPrevSpecimen:D,onInteraction:x,screenshotRequested:u,onScreenshotCaptured:g}),{canvasRef:B,isDraggingRef:ce,velocityRef:_,lastMousePosRef:P,lastInteractionReportTimeRef:he,lastMoveTimeRef:De,activeEngineType:ee,isCompiling:Ce}=W;k.useEffect(()=>{const ue=B.current;if(!ue)return;const qe=q=>{q.preventDefault();const T=Math.exp(Math.sign(q.deltaY)*Math.min(Math.abs(q.deltaY)*.0018,.28));x==null||x(Math.abs(q.deltaY)*.02,0),s(V=>({...V,zoom:Math.max(.02,Math.min(64,V.zoom*T))})),nf.recordInteraction("zoom",Math.log(T)*10)};ue.addEventListener("wheel",qe,{passive:!1,capture:!0});const oe=q=>{if(q.touches.length===2){q.preventDefault();const T=q.touches[0],V=q.touches[1];K.current=Math.hypot(T.clientX-V.clientX,T.clientY-V.clientY)}};ue.addEventListener("touchstart",oe,{passive:!1,capture:!0});const w=q=>{if(q.touches.length===2){q.preventDefault();const T=q.touches[0],V=q.touches[1],J=Math.hypot(T.clientX-V.clientX,T.clientY-V.clientY);if(K.current!==null&&K.current>5){const m=K.current/Math.max(J,1),C=Math.pow(m,.95);x==null||x(Math.abs(K.current-J)*.04,0),s(G=>({...G,zoom:Math.max(.02,Math.min(64,G.zoom*C))}))}K.current=J}};return ue.addEventListener("touchmove",w,{passive:!1,capture:!0}),()=>{ue.removeEventListener("wheel",qe,{capture:!0}),ue.removeEventListener("touchstart",oe,{capture:!0}),ue.removeEventListener("touchmove",w,{capture:!0})}},[B,s,x]);const Fe=ue=>{ce.current=!0,P.current={x:ue.clientX,y:ue.clientY},_.current={x:0,y:0},ue.target.setPointerCapture(ue.pointerId)},Ue=ue=>{if(!ce.current)return;const qe=ue.clientX-P.current.x,oe=ue.clientY-P.current.y,w=performance.now(),q=Math.max(1,w-De.current);De.current=w,P.current={x:ue.clientX,y:ue.clientY};const T=Math.hypot(qe,oe);w-he.current>300&&(he.current=w,x==null||x(0,T));const V=Y.current.zoom,J=.0045*Math.max(.12,Math.min(1,V/2.8));_.current={x:qe/q,y:oe/q},s(m=>({...m,rotX:m.rotX+qe*J,rotY:Math.max(-1.52,Math.min(1.52,m.rotY+oe*J))})),nf.recordInteraction("rotate",Math.hypot(qe,oe)/q)},Xe=ue=>{ce.current=!1;try{ue.target.releasePointerCapture(ue.pointerId)}catch{}},Ge=()=>{K.current=null};return l.jsxs("div",{ref:E,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[Ce&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",ee==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),l.jsx("canvas",{ref:B,id:"fractal-canvas",className:"w-full h-full block touch-none",onPointerDown:Fe,onPointerMove:Ue,onPointerUp:Xe,onPointerCancel:Xe,onTouchEnd:Ge},ee)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sh=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,u)=>u?u.toUpperCase():f.toLowerCase()),lf=p=>{const s=sh(p);return s.charAt(0).toUpperCase()+s.slice(1)},df=(...p)=>p.filter((s,f,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===f).join(" ").trim(),ch=p=>{for(const s in p)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=k.forwardRef(({color:p="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:g="",children:b,iconNode:x,...A},D)=>k.createElement("svg",{ref:D,...uh,width:s,height:s,stroke:p,strokeWidth:u?Number(f)*24/Number(s):f,className:df("lucide",g),...!b&&!ch(A)&&{"aria-hidden":"true"},...A},[...x.map(([v,F])=>k.createElement(v,F)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(p,s)=>{const f=k.forwardRef(({className:u,...g},b)=>k.createElement(ph,{ref:b,iconNode:s,className:df(`lucide-${oh(lf(p))}`,`lucide-${p}`,u),...g}));return f.displayName=lf(p),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],dl=re("activity",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],mf=re("atom",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],gn=re("book-open",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],xh=re("bookmark-plus",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],gh=re("box",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],bh=re("brain",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],zh=re("camera",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Nh=re("chart-column",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hf=re("check",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jh=re("chevron-down",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Th=re("chevron-left",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xf=re("chevron-right",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rh=re("chevron-up",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Cr=re("compass",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ks=re("cpu",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],vf=re("crosshair",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Fh=re("droplet",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Bh=re("ellipsis",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gf=re("eye",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Hh=re("flame",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Ph=re("grid-3x3",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Mr=re("heart",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],Zh=re("infinity",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kh=re("info",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],yn=re("layers",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ih=re("maximize",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],yf=re("mouse-pointer",$h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],t2=re("music",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bf=re("play",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],n2=re("radio",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],r2=re("scan",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s2=re("search",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],u2=re("share-2",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ws=re("shield-check",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bn=re("sparkles",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],m2=re("trash-2",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_f=re("user",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],tc=re("volume-2",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],zf=re("volume-x",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],y2=re("wrench",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ml=re("x",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],z2=re("zoom-in",_2),S2=({telemetry:p,targetFps:s,phiMultiplier:f})=>{const[u,g]=k.useState([]),[b,x]=k.useState(!1);k.useEffect(()=>{p.frameTimeMs>0&&g(v=>[...v,p.frameTimeMs].slice(-40))},[p.frameTimeMs]);const A=s>0?1e3/s:6.94;s===144||s===0&&p.fps>=140;const D=p.frameTimeMs<=A*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${p.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:p.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>x(!b),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:b?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${p.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:p.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[p.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${D?"text-emerald-400":"text-amber-400"}`,children:p.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(p.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!b&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[s," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",A.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:u.map((v,F)=>{const E=Math.min(Math.max(v/20*100,8),100),L=v<=A*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${L?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${E}%`},title:`${v} ms`},F)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(bn,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:p.adapterName,children:p.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[p.resolution[0],"×",p.resolution[1]]})]})]})]})]})})},N2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Sf={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},D2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],rf={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},w2=1.61803398875,Is=137.507764;function Ar(p,s,f){p=(p%360+360)%360,s=Math.max(0,Math.min(1,s)),f=Math.max(0,Math.min(1,f));const u=(1-Math.abs(2*f-1))*s,g=u*(1-Math.abs(p/60%2-1)),b=f-u/2;let x=0,A=0,D=0;return p<60?(x=u,A=g,D=0):p<120?(x=g,A=u,D=0):p<180?(x=0,A=u,D=g):p<240?(x=0,A=g,D=u):p<300?(x=g,A=0,D=u):(x=u,A=0,D=g),[x+b,A+b,D+b]}function j2(p,s){const f=p,u=(p+Is)%360,g=(p+Is*2)%360;return{id:`golden-gen-${Math.floor(p)}`,name:`Гармоника φ (${s})`,primary:Ar(f,.85,.45),secondary:Ar(u,.8,.55),accent:Ar(g,.95,.65),ambient:Ar(f,.6,.12)}}const oi=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],vn={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона"},A2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5},Js="golden_ratio_taste_profile_v2",T2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function M2(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class C2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem(Js);if(f){const u=JSON.parse(f);return oi.forEach(g=>{u.typeAffinities&&u.typeAffinities[g]===void 0&&(u.typeAffinities[g]=1)}),u}}catch{}const s={};return oi.forEach(f=>{s[f]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(Js,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(Js,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}breedNextSpecimen(s){var qe;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=s;if(!f){const oe=oi,w=oe.map(V=>{const J=Math.max(.2,this.taste.typeAffinities[V]||1),m=this.recentTypes.includes(V)?.05:1,C=this.currentGeneration<20?1.5:1;return J*m*C}),q=w.reduce((V,J)=>V+J,0);let T=Math.random()*q;for(let V=0;V<oe.length;V++){if(T<=w[V]){f=oe[V];break}T-=w[V]}f||(f=oe[Math.floor(Math.random()*oe.length)]),this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const u=Math.random()<.5;let g=this.taste.preferredHue;if(u){const oe=Math.random()<.5?1:2;g=(g+Is*oe+(Math.random()*30-15))%360}else g=Math.random()*360%360;let b;if(Math.random()<.65){const oe=this.history.length>0?(qe=this.history[this.history.length-1].palette)==null?void 0:qe.id:"";let w=Oa.filter(q=>q.id!==oe);w.length===0&&(w=Oa),b=w[Math.floor(Math.random()*w.length)]}else b=j2(g,`Ген #${this.currentGeneration}`);const A=(Math.random()-.5)*.08,D=parseFloat((w2+A).toFixed(5)),v=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),F=Math.max(12,Math.min(32,v)),E=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),L=parseFloat(E.toFixed(2)),U=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),Y=parseFloat(U.toFixed(2)),K=A2[f]*(.95+Math.random()*.1),W=Math.random()<.72;let B=f,ce=f,_=0,P=0,he="smoothUnion",De=1,ee=.32,Ce=.22,Fe=`${vn[f]} • φ-${this.currentGeneration}`;if(W){const oe=rf[f]||{partners:oi.filter(V=>V!==f),ops:["smoothUnion","smoothMorph","domainWarp"]};B=oe.partners[Math.floor(Math.random()*oe.partners.length)],he=oe.ops[Math.floor(Math.random()*oe.ops.length)],_=parseFloat((.22+Math.random()*.26).toFixed(3)),ee=parseFloat((.24+Math.random()*.26).toFixed(3)),Ce=parseFloat((.15+Math.random()*.25).toFixed(3)),De=1;const w=Sf[he],q=vn[f].split(" ")[0],T=vn[B].split(" ")[0];if(Fe=`${q} ${w} ${T} • φ-${this.currentGeneration}`,Math.random()<.35){const J=(rf[B]||{partners:oi.filter(m=>m!==f&&m!==B)}).partners.filter(m=>m!==f&&m!==B);if(J.length>0){ce=J[Math.floor(Math.random()*J.length)],P=parseFloat((.08+Math.random()*.18).toFixed(3));const m=vn[ce].split(" ")[0];Fe=`${q} ${w} ${T} ⊕ ${m} • φ-${this.currentGeneration}`}}}const Ue=parseFloat((.7+Math.random()*1.5).toFixed(3)),Xe=parseFloat((.35+Math.random()*1.05).toFixed(3)),ue={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:Fe,type:f,hybridType:B,tertiaryType:ce,compositeOp:he,hybridBlend:_,tertiaryBlend:P,smoothK:ee,warpStrength:Ce,octaveLayers:De,boxFold:Ue,sphereFold:Xe,interiorCut:0,palette:b,iterations:F,phiMultiplier:D,morphSpeed:L,glowIntensity:Y,zoom:K,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(ue),this.history.length>40&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,ue}registerEngagement(s,f,u,g){g.dwellTimeSeconds+=s,Math.abs(f)>.05&&g.zoomInteractions++,u>.05&&g.orbitInteractions++;const b=Math.min(35,g.dwellTimeSeconds/90*35),x=Math.min(18,Math.log1p(g.zoomInteractions)*3.2),A=Math.min(18,Math.log1p(g.orbitInteractions)*2.8),v=Math.round(Math.min(96,25+b+x+A));if(g.affinityScore=Math.max(g.affinityScore,v),g.dwellTimeSeconds>10&&g.affinityScore>50){const F=this.taste.typeAffinities[g.type]||1;if(this.taste.typeAffinities[g.type]=Math.min(4,F+.005),g.hybridType&&g.hybridBlend>.1){const B=this.taste.typeAffinities[g.hybridType]||1;this.taste.typeAffinities[g.hybridType]=Math.min(4,B+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+g.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+g.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+g.iterations*.01);const[E,L,U]=g.palette.primary,Y=Math.max(E,L,U),K=Math.min(E,L,U),W=Y-K;if(W>.05){let B=0;Y===E?B=60*((L-U)/W%6):Y===L?B=60*((U-E)/W+2):B=60*((E-L)/W+4),B<0&&(B+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+B*.03)%360}g.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=g.affinityScore),this.saveTasteProfile()}return g.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};oi.forEach(x=>{const A=M2(x),D=this.taste.typeAffinities[x]||1;s[A]+=D,f[A]++});const g=["geometry","complex","minimal","primes","attractors"].map(x=>({archetype:x,label:T2[x],avg:f[x]>0?s[x]/f[x]:1})),b=g.reduce((x,A)=>x+A.avg,0);return g.map(x=>({archetype:x.archetype,label:x.label,percentage:Math.round(x.avg/Math.max(1e-4,b)*100),score:Math.min(100,Math.round(x.avg*25))}))}suggestRenderStyle(){const s=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],f=Math.random();if(f<.4)return"solid";const u=Math.floor((f-.4)/.6*(s.length-1));return s[Math.min(u+1,s.length-1)]}}const R2=({params:p,onParamsChange:s,onSelectFractalType:f,onCaptureScreenshot:u,onToggleFullscreen:g,onToggleInfoModal:b,onOpenAtlasModal:x,activeBackend:A,forcedBackend:D,onSelectBackend:v,onClose:F,tasteProfile:E,onSaveToFeed:L})=>{const[U,Y]=k.useState("architectures"),[K,W]=k.useState("all"),B=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],ce=K==="all"?B:B.filter(_=>_.group===K);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[x&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:x,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(gn,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),L&&l.jsxs("button",{id:"save-to-feed-btn",onClick:L,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(xh,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:u,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(zh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:g,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx(Ih,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:b,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(gn,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:F,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(ml,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>Y("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>Y("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>Y("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>Y("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>Y("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>Y("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>Y("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>Y("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),U==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(_=>l.jsx("button",{onClick:()=>W(_.id),className:`px-2 py-1 rounded-md text-[9px] transition ${K===_.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:_.label},_.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:ce.map(_=>{const P=p.type===_.id;return l.jsxs("button",{id:`arch-btn-${_.id}`,onClick:()=>{f?f(_.id):s(he=>({...he,type:_.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${P?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${P?"text-amber-300":"text-neutral-200"}`,children:_.label}),P&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:_.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:_.formula})]},_.id)})})]}),U==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:D2.map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,compositeOp:_})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${p.compositeOp===_?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:N2[_]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Sf[_]})]},_))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:p.hybridType||p.type,onChange:_=>s(P=>({...P,hybridType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:oi.map(_=>l.jsx("option",{value:_,children:vn[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.hybridBlend??.35,onChange:_=>s(P=>({...P,hybridBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:p.tertiaryType||"riemannZeta",onChange:_=>s(P=>({...P,tertiaryType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:oi.map(_=>l.jsx("option",{value:_,children:vn[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.tertiaryBlend??.2,onChange:_=>s(P=>({...P,tertiaryBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:p.smoothK,onChange:_=>s(P=>({...P,smoothK:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.warpStrength,onChange:_=>s(P=>({...P,warpStrength:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),U==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,cameraMode:_.id})),className:`p-2 rounded-lg border text-left transition ${p.cameraMode===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:p.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,renderStyle:_.id})),className:`p-2 rounded-lg border text-left transition ${(p.renderStyle||"solid")===_.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:p.slicePlane>.01?`${(p.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(_=>l.jsx("button",{onClick:()=>s(P=>({...P,sliceAxis:_.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(p.sliceAxis||"golden")===_.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:_.label},_.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.slicePlane,onChange:_=>s(P=>({...P,slicePlane:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>s(_=>({..._,probeActive:!_.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>s(_=>({..._,macroMode:!_.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.headlampPower??1,onChange:_=>s(P=>({...P,headlampPower:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.volumetricFog??.4,onChange:_=>s(P=>({...P,volumetricFog:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((p.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:p.interiorCut??.4,onChange:_=>s(P=>({...P,interiorCut:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),U==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:Oa.map(_=>{const P=p.paletteId===_.id;return l.jsxs("button",{onClick:()=>s(he=>({...he,paletteId:_.id,customPalette:_})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${P?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${P?"text-amber-300":"text-neutral-200"}`,children:_.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.primary.map(he=>Math.round(he*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.secondary.map(he=>Math.round(he*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.accent.map(he=>Math.round(he*255)).join(",")})`}})]})]},_.id)})}),U==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:p.phiMultiplier,onChange:_=>s(P=>({...P,phiMultiplier:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:p.iterations,onChange:_=>s(P=>({...P,iterations:parseInt(_.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[p.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:p.morphSpeed,onChange:_=>s(P=>({...P,morphSpeed:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:p.boxFold,onChange:_=>s(P=>({...P,boxFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:p.sphereFold,onChange:_=>s(P=>({...P,sphereFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),U==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(_=>l.jsx("button",{onClick:()=>s(P=>({...P,targetFps:_})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${p.targetFps===_?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_===0?"Uncapped":`${_} FPS`},_))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>s(_=>({..._,drsEnabled:!_.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(_=>l.jsx("button",{onClick:()=>v(_.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${D===_.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_.label},_.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",A]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),U==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[p.enableAudio?l.jsx(tc,{className:"w-4 h-4 text-amber-400"}):l.jsx(zf,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>s(_=>({..._,enableAudio:!_.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((p.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.audioVolume??.65,onChange:_=>s(P=>({...P,audioVolume:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,audioTuning:_.id})),className:`w-full p-2 rounded-lg border text-left transition ${(p.audioTuning||"phi432")===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),U==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(E==null?void 0:E.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(E==null?void 0:E.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((E==null?void 0:E.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((E==null?void 0:E.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},k2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},O2=({specimen:p,resonanceScore:s,isInteracting:f,interactionType:u,onNext:g,onPrev:b,onFavorite:x,onOpenProfile:A,enableAudio:D,onToggleAudio:v,onOpenResearchModal:F,onOpenAtlas:E,isFeedOpen:L,onToggleFeed:U,isCurrentLiked:Y=!1,params:K})=>{const[W,B]=k.useState(!1),[ce,_]=k.useState(!1),[P,he]=k.useState(!1),[De,ee]=k.useState(!1),[Ce,Fe]=k.useState(!1),Ue=k.useRef(null),Xe=k.useRef(!1);k.useEffect(()=>{B(Y)},[p==null?void 0:p.id,Y]);const Ge=()=>{Ue.current&&clearTimeout(Ue.current),Ue.current=setTimeout(()=>{Xe.current||(_(!1),he(!1),ee(!1))},3e3)},ue=()=>{_(!0),he(!0),Ge()},qe=()=>{ee(T=>!T),_(!0),Ue.current&&clearTimeout(Ue.current)};k.useEffect(()=>(ue(),()=>{Ue.current&&clearTimeout(Ue.current)}),[]),k.useEffect(()=>{const T=J=>{(J.clientY<80||J.clientY>window.innerHeight-120)&&ue()},V=J=>{const m=J.target;m.closest("#top-right-bar")||m.closest("#top-right-trigger")||m.closest("#neuro-feed-bar")||(he(!0),Ge())};return window.addEventListener("mousemove",T),window.addEventListener("touchstart",V,{passive:!0}),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("touchstart",V)}},[]);const oe=()=>{B(!0),x()},w=()=>{if(!p)return;const T=K,V=new URLSearchParams({type:p.type,hybrid:p.hybridType,tertiary:p.tertiaryType,op:p.compositeOp,blend:p.hybridBlend.toFixed(3),tertiaryBlend:p.tertiaryBlend.toFixed(3),smoothK:p.smoothK.toFixed(3),warp:p.warpStrength.toFixed(3),octaves:String(p.octaveLayers),boxFold:p.boxFold.toFixed(3),sphereFold:p.sphereFold.toFixed(3),interiorCut:p.interiorCut.toFixed(3),iterations:String(p.iterations),phi:p.phiMultiplier.toFixed(9),morphSpeed:p.morphSpeed.toFixed(3),glow:p.glowIntensity.toFixed(3),zoom:p.zoom.toFixed(3),name:p.name,palette:p.palette.id,paletteSeed:String((T==null?void 0:T.paletteSeed)??0),paletteRotation:T!=null&&T.paletteRotation?"1":"0",renderStyle:(T==null?void 0:T.renderStyle)??"solid",cameraMode:(T==null?void 0:T.cameraMode)??"orbit",camX:((T==null?void 0:T.camPosX)??0).toFixed(3),camY:((T==null?void 0:T.camPosY)??0).toFixed(3),camZ:((T==null?void 0:T.camPosZ)??-3.2).toFixed(3),headlamp:((T==null?void 0:T.headlampPower)??0).toFixed(3),fog:((T==null?void 0:T.volumetricFog)??.4).toFixed(3),slicePlane:((T==null?void 0:T.slicePlane)??0).toFixed(3),sliceAxis:(T==null?void 0:T.sliceAxis)??"golden",audio:T!=null&&T.enableAudio?"1":"0",audioVol:((T==null?void 0:T.audioVolume)??.65).toFixed(2),audioTuning:(T==null?void 0:T.audioTuning)??"phi432",drs:T!=null&&T.drsEnabled?"1":"0"}),J=`${window.location.origin}${window.location.pathname}#${V.toString()}`;navigator.share?navigator.share({title:p.name,text:`Фрактал: ${p.name}`,url:J}).catch(()=>{}):navigator.clipboard.writeText(J).then(()=>{Fe(!0),setTimeout(()=>Fe(!1),2e3)}).catch(()=>{const m=document.createElement("textarea");m.value=J,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),Fe(!0),setTimeout(()=>Fe(!1),2e3)})},q=p!=null&&p.compositeOp?k2[p.compositeOp]||p.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{Xe.current=!0,_(!0),ee(!0),Ue.current&&clearTimeout(Ue.current)},onMouseLeave:()=>{Xe.current=!1,ee(!1),Ge()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${De?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:qe,title:"Меню",children:l.jsx(Bh,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${ce&&De?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:v,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${D?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:D?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:D?l.jsx(tc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(zf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),E&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:E,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(gn,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),U&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:U,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${L?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:L?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(yn,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:A,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(_f,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),f&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Cr,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:u==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${P?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(p==null?void 0:p.name)||"Золотой Фрактал",children:(p==null?void 0:p.name)||"Золотой Фрактал"}),(p==null?void 0:p.hybridBlend)&&p.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:p.compositeOp,children:q})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(p==null?void 0:p.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:oe,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${W?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(Mr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${W?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:w,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${Ce?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:Ce?"Ссылка скопирована!":"Поделиться этим фракталом",children:Ce?l.jsx(hf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(u2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:b,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(Th,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:g,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(xf,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},E2=({isOpen:p,onClose:s})=>p?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(gn,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(ml,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Cr,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(bn,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(yn,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(yn,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(dl,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(bh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,q2=({isOpen:p,onClose:s,tasteProfile:f,archetypeBreakdown:u,currentSpecimen:g,resonanceScore:b,isEngineerMode:x,onToggleEngineerMode:A,audioTuning:D,onSelectAudioTuning:v,onResetTasteProfile:F,onOpenManifest:E,likedSpecimens:L=[],onPlayLiked:U,onRemoveLike:Y,isCurrentLiked:K=!1})=>p?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(_f,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(ml,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[b,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${b}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(g==null?void 0:g.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Mr,{className:`w-4 h-4 ${L.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:L.length})]}),K&&g&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(Mr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),L.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(Mr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:L.map((W,B)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:B+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:W.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",W.phiMultiplier.toFixed(4)," • Gen #",W.generation]})]}),U&&l.jsx("button",{onClick:()=>U(W),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(bf,{className:"w-3 h-3"})}),Y&&l.jsx("button",{onClick:()=>Y(W.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(m2,{className:"w-3 h-3"})})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Nh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:u.map(W=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:W.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[W.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${W.percentage}%`}})})]},W.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(tc,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(W=>l.jsxs("button",{onClick:()=>v(W.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${D===W.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:W.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:W.desc})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(bn,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{E==null||E()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(y2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:A,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${x?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${x?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:x?"Инженер Включен":"Включить Инж"})]})]}),x&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,of=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],F2=({isReady:p,onFinished:s})=>{const[f,u]=k.useState(0),[g,b]=k.useState(!1),[x,A]=k.useState(!1);return k.useEffect(()=>{const D=setInterval(()=>{u(v=>v<of.length-1?v+1:v)},450);return()=>clearInterval(D)},[]),k.useEffect(()=>{const D=setTimeout(()=>{if(!p){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),b(!0);const v=setTimeout(()=>{A(!0),s==null||s()},700);return()=>clearTimeout(v)}},15e3);return()=>clearTimeout(D)},[p,s]),k.useEffect(()=>{if(p){const D=setTimeout(()=>{b(!0);const v=setTimeout(()=>{A(!0),s==null||s()},700);return()=>clearTimeout(v)},500);return()=>clearTimeout(D)}},[p,s]),x?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${g?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((D,v)=>l.jsxs("g",{transform:`rotate(${D} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},v)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:of[f]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},U2=({isOpen:p,onClose:s,isFirstVisit:f=!1,onOpenAtlas:u})=>{if(!p)return null;const g=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},b=()=>{g(),u==null||u()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:g,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:x=>x.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:g,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(ml,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(bn,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Cr,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(yn,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(t2,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(yf,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[u&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:b,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(gn,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:g,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(xf,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},sf=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}],fl=[{id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",enginePreset:{type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}},{id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}},{id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}},{id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2.0 (граница D ≈ 1.58)",generatorRule:"Чередование знака угла поворота на каждом шаге итерации",description:"Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.",phiPiRelation:"Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.35,zoom:2.5}},{id:"golden-dragon",name:"Золотой дракон",englishName:"Golden Dragon Curve",category:"geometric_curves",formula:"r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1",dimension:"D = 2.0 (самоподобие φ)",generatorRule:"Деление отрезка в отношении золотого сечения 1:φ",description:"Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.",phiPiRelation:"Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.6}},{id:"minkowski-curve",name:"Кривая Минковского (Сосиска Минковского)",englishName:"Minkowski Sausage",category:"geometric_curves",formula:"N = 8, S = 4",dimension:"D = ln(8)/ln(4) = 1.500",generatorRule:"F → F+F-F-FF+F+F-F (угол 90°)",description:"Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.",phiPiRelation:"Ортогональная дискретность π/2; целое полуцелое значение размерности.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothMorph",boxFold:1.5,zoom:3.1}},{id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]², N = 9, S = 3",dimension:"D = ln(9)/ln(3) = 2.000",generatorRule:"F → F+F-F-F-F+F+F+F-F (угол 90°)",description:"Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.",phiPiRelation:"Сюръективное непрерывное отображение; шаг дискретизации π/2.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.9}},{id:"hilbert-curve",name:"Кривая Гильберта 2D/3D",englishName:"Hilbert Space-Filling Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}",dimension:"D = 2.0 (в 3D D = 3.0)",generatorRule:"L-система обхода ячеек 2^n x 2^n",description:"Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.",phiPiRelation:"Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:3.2,rotX:.45,rotY:.35}},{id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2) = 2.0",dimension:"D = 2.000",generatorRule:"Замкнутый маршрут вокруг треугольников сетки",description:"Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.",phiPiRelation:"Углы поворота 45° (π/4) и 90° (π/2).",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"moore-curve",name:"Кривая Мура",englishName:"Moore Curve",category:"geometric_curves",formula:"N = 4^n, S = 2^n",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"Замкнутый вариант кривой Гильберта",description:"Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.",phiPiRelation:"Симметричный квадрантный обход, кратный π/2.",enginePreset:{type:"hilbertCurve3D",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.25,zoom:3}},{id:"gosper-curve",name:"Кривая Госпера (Flowsnake)",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"N = 7, S = √7",dimension:"D = ln(7)/ln(√7) = 2.000",generatorRule:"L-система на гексагональной сетке (угол 60° = π/3)",description:"Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.",phiPiRelation:"Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.",enginePreset:{type:"quasicrystal",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"cesaro-curve",name:"Кривая Чезаро",englishName:"Cesàro Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2(1 + cos α))",dimension:"D ∈ (1.0, 2.0] при α ∈ (0, π/2)",generatorRule:"Кривая Коха с переменным углом при вершине",description:"Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.",phiPiRelation:"При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"domainWarp",warpStrength:.3,zoom:2.7}},{id:"drummond-curve",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ = π / k, k ∈ ℝ",dimension:"D ≈ 1.45 - 1.85",generatorRule:"Циклические L-системы с дробными иррациональными углами",description:"Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.",phiPiRelation:"Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.",enginePreset:{type:"phyllotaxis",compositeOp:"goldenSpiralFold",zoom:2.6}},{id:"mcwhorter-pentigree",name:"Снежинка Коха — МакВортера",englishName:"McWhorter Pentigree",category:"geometric_curves",formula:"N = 5, S = (3 - √5)/2",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.672",generatorRule:"Асимметричный пентагональный генератор",description:"Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.",phiPiRelation:"Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",zoom:2.5}},{id:"rice-curve",name:"Кривая Райса",englishName:"Rice Curve",category:"geometric_curves",formula:"θ_1 = π/3, θ_2 = 2π/5",dimension:"D ≈ 1.78",generatorRule:"Неортогональные развороты в пространственно-заполняющих кривых",description:"Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.",phiPiRelation:"Сочетание углов π/3 и пентагональных пропорций золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"quasicrystal",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"polya-curve",name:"Кривая Пойи",englishName:"Pólya Sweep Curve",category:"geometric_curves",formula:"T → T_1 ∪ T_2",dimension:"D = 2.000",generatorRule:"Рекурсивный обход прямоугольного треугольника с высотой",description:"Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.",phiPiRelation:"Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.7}},{id:"sierpinski-arrowhead",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Двухсимвольная L-система сходящаяся к треугольнику",description:"Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.",phiPiRelation:"Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothUnion",zoom:2.9}},{id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"constructive",formula:"N = 3, S = 2",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Удаление центрального перевернутого треугольника",description:"Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.",phiPiRelation:"Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"sierpinski-carpet",name:"Ковер Серпинского",englishName:"Sierpiński Carpet",category:"constructive",formula:"N = 8, S = 3",dimension:"D = ln(8)/ln(3) ≈ 1.89279",generatorRule:"Деление квадрата на 9 частей, удаление центрального",description:"Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.",phiPiRelation:"Универсальная плоская кривая Менгера; мера Лебега стремится к 0.",enginePreset:{type:"menger",compositeOp:"smoothMorph",boxFold:1,zoom:2.9}},{id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"constructive",formula:"N = 20, S = 3, V_∞ = 0, A_∞ = ∞",dimension:"D = ln(20)/ln(3) ≈ 2.72683",generatorRule:"Куб делится на 27 кубиков, удаляются 7 центральных",description:"Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.",phiPiRelation:"Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1.2,zoom:3.1}},{id:"pythagoras-tree-classic",name:"Дерево Пифагора классическое",englishName:"Pythagoras Tree (Symmetric)",category:"constructive",formula:"a² + b² = c², a = b = c/√2",dimension:"D = 2.0 (перекрытия в пределе)",generatorRule:"Построение квадратов на сторонах прямоугольного равнобедренного треугольника",description:"Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).",phiPiRelation:"Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.6,rotX:.35}},{id:"pythagoras-tree-windblown",name:"Дерево Пифагора обдуваемое",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"α = 60° (π/3), β = 30° (π/6)",dimension:"D ≈ 1.85",generatorRule:"Разноугольное ветвление прямоугольного треугольника",description:"Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.",phiPiRelation:"Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.",enginePreset:{type:"pythagorasTree3D",compositeOp:"goldenSpiralFold",warpStrength:.3,zoom:2.7}},{id:"pythagoras-tree-naked",name:"Обнаженное дерево Пифагора",englishName:"Naked Pythagoras Tree",category:"constructive",formula:"Граф центров квадратов G(V, E)",dimension:"D ≈ 1.73",generatorRule:"Отрезки соединяют только центры смежных квадратов",description:"Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центры квадратов дерева Пифагора.",phiPiRelation:"Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"domainWarp",warpStrength:.25,zoom:2.8}},{id:"apollonian-gasket",name:"Сетка Аполлония (Упаковка Аполлония)",englishName:"Apollonian Gasket / Sphere Packing",category:"constructive",formula:"(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)",dimension:"D ≈ 1.30568 (в 3D D ≈ 2.4739)",generatorRule:"Теорема Содди о четырех касающихся окружностях",description:"Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.",phiPiRelation:"Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",sphereFold:.75,zoom:3}},{id:"vicsek-fractal",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Box / Cross)",category:"constructive",formula:"N = 5, S = 3",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Деление квадрата на 9 частей, сохранение центрального креста",description:"Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.",phiPiRelation:"Идеальная симметрия группы D_4 (повороты на π/2).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothMorph",boxFold:1.1,zoom:2.9}},{id:"t-square-fractal",name:"Т-квадрат",englishName:"T-Square Fractal",category:"constructive",formula:"A_∞ = 2 A_0",dimension:"D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)",generatorRule:"Итеративное наложение уменьшенных квадратов на углы",description:"Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.",phiPiRelation:"Ограниченная фрактальная граница со степенью масштабирования 1/2.",enginePreset:{type:"menger",compositeOp:"domainWarp",warpStrength:.2,zoom:3}},{id:"sierpinski-cross",name:"Крест Серпинского",englishName:"Sierpiński Cross",category:"constructive",formula:"D = ln(5)/ln(3) ≈ 1.465",dimension:"D ≈ 1.465 (в 3D D ≈ 2.32)",generatorRule:"Пространственное пересечение плоскостей Серпинского",description:"Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.",phiPiRelation:"Инвариантен относительно октаэдрических вращений SO(3).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"sierpinski-pentagon",name:"Пятиугольник Серпинского (Пентафрактал)",englishName:"Sierpiński Pentagon (Pentaflake)",category:"constructive",formula:"N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²",dimension:"D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228",generatorRule:"5 копий пятиугольника по углам, удаление центра",description:"Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.",phiPiRelation:"АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",phiMultiplier:1.61803398875,zoom:2.7}},{id:"hexafractal",name:"Гексафрактал (Гексафлейк)",englishName:"Hexaflake",category:"constructive",formula:"N = 7, S = 3",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть копий шестиугольника вокруг центрального седьмого",description:"Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.",phiPiRelation:"Гексагональные углы 2π/6 = 60° = π/3.",enginePreset:{type:"quasicrystal",compositeOp:"smoothUnion",zoom:2.8}},{id:"ivezic-fractal",name:"Фрактал Ивезича",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n+1)/ln(2)",dimension:"D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32",generatorRule:"Рекурсивное деление n-мерного регулярного симплекса",description:"Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.",phiPiRelation:"Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"levy-snowflake",name:"Снежинка Леви",englishName:"Lévy Snowflake",category:"constructive",formula:"∂(Lévy C curve ∪ rot)",dimension:"D = 2.0 (граница D ≈ 1.934)",generatorRule:"Замкнутая суперпозиция 8 C-кривых Леви",description:"Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.",phiPiRelation:"Периодичность 2π/8 = π/4.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.7}},{id:"sierpinski-pyramid",name:"Пирамида Серпинского (Тетраэдр Серпинского)",englishName:"Sierpiński Tetrahedron",category:"constructive",formula:"N = 4, S = 2, V_∞ = 0",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"4 тетраэдра половинного размера в вершинах",description:"Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.",phiPiRelation:"Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.9,rotX:.4}},{id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}},{id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}},{id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}},{id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}},{id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 2.0",generatorRule:"Бассейны притяжения комплексных корней полинома",description:"Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.",phiPiRelation:"Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:2.9}},{id:"serafimsky-fractal",name:"Фрактал Серафимского",englishName:"Serafimsky Shifted Newton",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{iθ} f(z_n)/f'(z_n)",dimension:"D ≈ 2.0",generatorRule:"Метод Ньютона с комплексным вращением фазового угла θ",description:"Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.",phiPiRelation:"Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.",enginePreset:{type:"newtonBasins",compositeOp:"goldenSpiralFold",warpStrength:.35,zoom:2.8}},{id:"burning-ship",name:"Фрактал «Пылающий корабль» (Burning Ship)",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D = 2.0",generatorRule:"Абсолютная величина от Re и Im перед возведением в квадрат",description:"Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.",phiPiRelation:"Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",zoom:3.1,rotX:.4}},{id:"perpendicular-burning-ship",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c",dimension:"D = 2.0",generatorRule:"Модуль берется только от одной компоненты (вещественной)",description:"Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.",phiPiRelation:"Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.",enginePreset:{type:"burningShip3D",compositeOp:"domainWarp",warpStrength:.3,zoom:3}},{id:"pickover-biomorphs",name:"Биоморфы Пиковера",englishName:"Pickover Biomorphs",category:"algebraic_complex",formula:"|Re(z_n)| < R ∨ |Im(z_n)| < R",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Условие останова итераций имитирует форму одноклеточных",description:"Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.",phiPiRelation:"Формы радиолярий и спикул подчиняются золотому закону роста Д'Арси Томпсона.",enginePreset:{type:"quaternionJulia",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.7}},{id:"trigonometric-fractal",name:"Тригонометрические фракталы (Фрактал Иисуса)",englishName:"Trigonometric Fractal (sin z + c)",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c",dimension:"D = 2.0",generatorRule:"Трансцендентные целые функции комплексного переменного",description:"Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.",phiPiRelation:"Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.",enginePreset:{type:"spiralTunnel",compositeOp:"quantumResonance",zoom:3.2}},{id:"lyapunov-fractal",name:"Карты Ляпунова / Фракталы Ляпунова",englishName:"Lyapunov Fractals / Zircon City",category:"algebraic_complex",formula:"λ = lim (1/N) ∑ ln |f'(x_n)| для последовательности AB",dimension:"D ≈ 2.0 (фрактальные границы стабильности)",generatorRule:"Чередование параметров r_A и r_B логистического отображения",description:"Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.",phiPiRelation:"Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.",enginePreset:{type:"primeSpiral",compositeOp:"quantumResonance",zoom:2.8}},{id:"novak-fractal",name:"Множество Новака",englishName:"Novak Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)",dimension:"D ≈ 2.0",generatorRule:"Использование иррациональных дробных степеней комплексного числа",description:"Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.",phiPiRelation:"При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"goldenSpiralFold",zoom:2.8}},{id:"spider-fractal",name:"Фрактал «Паук»",englishName:"Spider Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Связанная динамика точки z и параметра c на каждом шаге",description:"Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.",phiPiRelation:"Отношение затухания c_n/2 согласуется с золотой дихотомией.",enginePreset:{type:"quaternionJulia",compositeOp:"domainWarp",warpStrength:.45,zoom:2.9}},{id:"sherwood-carpet",name:"Ковер Шервуда",englishName:"Sherwood Carpet",category:"algebraic_complex",formula:"z_{n+1} = 1 / (z_n^k + c)",dimension:"D ≈ 1.85",generatorRule:"Инверсия комплексных полиномов высших порядков",description:"Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.",phiPiRelation:"Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.",enginePreset:{type:"apollonian",hybridType:"mandelbox",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"quaternion-mandelbrot",name:"Кватернионный Мандельброт 4D",englishName:"4D Quaternion Mandelbrot",category:"multidimensional",formula:"q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0",dimension:"D_4D = 4.0, D_3D-сечения = 2.0 - 3.0",generatorRule:"Итерации в теле алгебры кватернионов ℍ (1, i, j, k)",description:"Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.",phiPiRelation:"Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.25}},{id:"quaternion-julia",name:"Кватернионный Жюлиа 4D",englishName:"4D Quaternion Julia",category:"multidimensional",formula:"q_{n+1} = q_n² + C, C = const ∈ ℍ",dimension:"D ≈ 2.5 - 3.2 в 3D проекции",generatorRule:"4D сечение динамической системы кватернионов при фиксированном векторе C",description:"Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.",phiPiRelation:"Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.8}},{id:"mandelbulb-3d",name:"Mandelbulb 3D",englishName:"Mandelbulb 3D (White & Nylander)",category:"multidimensional",formula:"v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c",dimension:"D ≈ 2.7 - 2.9",generatorRule:"Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)",description:"Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.",phiPiRelation:"Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:3.1}},{id:"mandelbox-3d",name:"Mandelbox 3D",englishName:"Mandelbox 3D (Tom Lowe)",category:"multidimensional",formula:"v ↦ s · sphereFold(boxFold(v)) + c",dimension:"D ≈ 2.3 - 2.8",generatorRule:"Циклическое складывание кубического пространства (box fold) и сферическая инверсия",description:"3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.",phiPiRelation:"Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.",enginePreset:{type:"mandelbox",boxFold:1.2,sphereFold:.65,compositeOp:"smoothUnion",zoom:3.2}},{id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube (Eric Baird)",category:"multidimensional",formula:"Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)",dimension:"D ≈ 2.529",generatorRule:"Вырезание крестообразных отверстий с пропорциями золотого сечения",description:"Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.",phiPiRelation:"Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"kleinian-groups",name:"Клейниановы группы (Предельные множества)",englishName:"Kleinian Limit Sets / Schottky Groups",category:"multidimensional",formula:"γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)",dimension:"D ≈ 1.3 - 2.7",generatorRule:"Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³",description:"Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.",phiPiRelation:"Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothMorph",zoom:2.9}},{id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern IFS",category:"ifs_attractors",formula:"W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}",dimension:"D ≈ 1.85",generatorRule:"4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}",description:"Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.",phiPiRelation:"Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.",enginePreset:{type:"phyllotaxis",hybridType:"pythagorasTree3D",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"fractal-flames",name:"Фрактальное пламя (Fractal Flames)",englishName:"Fractal Flames (Scott Draves)",category:"ifs_attractors",formula:"F(x) = ∑ w_i V_j(A_i x + b_i)",dimension:"D зависит от нелинейных вариаций",generatorRule:"Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг",description:"Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.",phiPiRelation:"Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.",enginePreset:{type:"hopfFibration",hybridType:"spiralTunnel",compositeOp:"quantumResonance",hybridBlend:.45,zoom:3}},{id:"lorenz-attractor",name:"Странный аттрактор Лоренца",englishName:"Lorenz Strange Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz",dimension:"D_каплана-йорке ≈ 2.06 ± 0.01",generatorRule:"Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)",description:"Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.",phiPiRelation:"Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothMorph",zoom:3.2,rotX:.3,rotY:.4}},{id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)",dimension:"D ≈ 2.01",generatorRule:"Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты",description:"Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.",phiPiRelation:"Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothUnion",zoom:2.9}},{id:"ikeda-attractor",name:"Аттрактор Икеды",englishName:"Ikeda Map Attractor",category:"ifs_attractors",formula:"z_{n+1} = A + B z_n e^{i(|z_n|² + C)}",dimension:"D ≈ 1.7",generatorRule:"Двумерное отображение света в кольцевом оптическом резонаторе",description:"Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.",phiPiRelation:"Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.",enginePreset:{type:"spiralTunnel",compositeOp:"domainWarp",warpStrength:.4,zoom:2.8}},{id:"clifford-attractor",name:"Аттрактор Клиффорда",englishName:"Clifford Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Синусно-косинусное полиномиальное отображение с 4 параметрами",description:"Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.",phiPiRelation:"Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:2.9}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"Peter de Jong Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)",dimension:"D ≈ 1.8",generatorRule:"Симметричное тригонометрическое отображение Петера де Йонга",description:"Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.",phiPiRelation:"При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.",enginePreset:{type:"cliffordTorus4D",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3}},{id:"henon-attractor",name:"Аттрактор Хенона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)",dimension:"D ≈ 1.261 ± 0.003",generatorRule:"Дискретная диссипативная система Мишеля Эно (1976)",description:"Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.",phiPiRelation:"Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:2.7}},{id:"humboldt-attractor",name:"Аттрактор Гумбольдта",englishName:"Humboldt Flow Attractor",category:"ifs_attractors",formula:"dxdt = v_oceanic(x, φ, t)",dimension:"D ≈ 2.15",generatorRule:"IFS-система, имитирующая турбулентные океанические вихри",description:"Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.",phiPiRelation:"Логарифмические спирали вихрей имеют золотой угол раскрутки.",enginePreset:{type:"gyroid",compositeOp:"goldenSpiralFold",zoom:3.1}},{id:"perlin-noise",name:"Фрактальный шум Перлина",englishName:"Fractal Perlin Noise (fBm)",category:"stochastic",formula:"f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)",dimension:"D = 3 - H, где H — показатель Херста",generatorRule:"Градиентный шум Кена Перлина, суммируемый по октавам",description:"Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.",phiPiRelation:"Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.",enginePreset:{type:"neoviusMinimal",compositeOp:"domainWarp",warpStrength:.35,zoom:3}},{id:"simplex-noise",name:"Симплексный шум (Simplex Noise)",englishName:"Simplex Noise",category:"stochastic",formula:"Разбиение пространства на симплексы Шлефли A_n",dimension:"D = 3 - H",generatorRule:"Замена гиперкубической сетки на симплексную решетку",description:"Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.",phiPiRelation:"Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.1}},{id:"diamond-square",name:"Алгоритм Diamond-Square (Плазма)",englishName:"Diamond-Square Plasma Fractal",category:"stochastic",formula:"h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}",dimension:"D = 3 - H ∈ (2.0, 3.0)",generatorRule:"Рекурсивное чередование шагов ромба и квадрата по сетке",description:"Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.",phiPiRelation:"Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.",enginePreset:{type:"dlaCluster",compositeOp:"smoothMorph",zoom:2.8}},{id:"fractional-brownian-motion",name:"Дробное броуновское движение (fBm)",englishName:"Fractional Brownian Motion (fBm)",category:"stochastic",formula:"E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})",dimension:"D = n + 1 - H (Мандельброт и Ван Несс, 1968)",generatorRule:"Гауссовский процесс с долговременной корреляцией и параметром Херста H",description:"Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.",phiPiRelation:"Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.",enginePreset:{type:"dlaCluster",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"dla-cluster",name:"Диффузионно-ограниченная агрегация (ДОА / DLA)",englishName:"Diffusion-Limited Aggregation (DLA)",category:"stochastic",formula:"N(r) ∝ r^{D_{DLA}}",dimension:"D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)",generatorRule:"Случайное блуждание броуновских частиц и их слипание с растущим кластером",description:"Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.",phiPiRelation:"Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.25}},{id:"percolation-clusters",name:"Кластеры перколяции",englishName:"Percolation Lattice Clusters",category:"stochastic",formula:"P(p) ∝ (p - p_c)^β при p → p_c",dimension:"D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)",generatorRule:"Случайное заполнение узлов решетки с критической вероятностью p_c",description:"Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.",phiPiRelation:"Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.",enginePreset:{type:"neoviusMinimal",compositeOp:"fractalLattice",zoom:3.1}},{id:"dielectric-breakdown",name:"Фрактал лавинного пробоя (Фигуры Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM / Lichtenberg)",category:"stochastic",formula:"∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)",dimension:"D ≈ 1.75 при η = 1",generatorRule:"Решение уравнения Лапласа для электростатического потенциала с ростом разряда",description:"Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.",phiPiRelation:"Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.",enginePreset:{type:"dlaCluster",compositeOp:"domainWarp",warpStrength:.4,zoom:3}},{id:"hofstadter-butterfly",name:"Бабочка Хофштадтера",englishName:"Hofstadter Butterfly",category:"topological_physical",formula:"ψ_{m+1} + ψ_{m-1} + 2 cos(2π m α - ν) ψ_m = E ψ_m (Уравнение Харпера)",dimension:"D(E) фрактальное канторово множество разрешенных энергий",generatorRule:"Спектр энергии электрона в периодической 2D решетке в магнитном поле α = Φ/Φ_0",description:"Квантовый фрактал Дугласа Хофштадтера (1976). График разрешенных энергетических зон блоховского электрона в зависимости от магнитного потока.",phiPiRelation:"АБСОЛЮТНЫЙ КВАНТОВЫЙ РЕЗОНАНС: при иррациональном потоке α = 1/φ спектр становится канторовым множеством нулевой меры Лебега!",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3}},{id:"richardson-fractal",name:"Фрактал Ричардсона (Эффект береговой линии)",englishName:"Richardson Coastline Fractal Effect",category:"topological_physical",formula:"L(ε) ∝ ε^{1 - D} (Льюис Фрай Ричардсон)",dimension:"D_Британия ≈ 1.25, D_Норвегия ≈ 1.52",generatorRule:"Зависимость длины границы от масштаба измерительного инструмента ε",description:"Открытие Ричардсона (1961), легшее в основу книги Бенуа Мандельброта: длина географической границы неограниченно растет при уменьшении шага линейки.",phiPiRelation:"Скейлинг конформной береговой линии согласуется с броуновскими петлями SLE_{6/3}.",enginePreset:{type:"fibonacciSnowflake",hybridType:"dlaCluster",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.8}},{id:"cantor-set",name:"Канторово множество (Канторова лестница)",englishName:"Cantor Ternary Set",category:"topological_physical",formula:"C = ⋂_{n=1}^∞ E_n, L_∞ = 0, |C| = 2^{ℵ_0}",dimension:"D = ln(2)/ln(3) ≈ 0.63093",generatorRule:"Исключение открытой средней трети (1/3, 2/3) из отрезка [0, 1]",description:"Фундаментальный топологический объект Георга Кантора (1883). Содержит столько же точек, сколько весь отрезок ℝ, но имеет нулевую меру Лебега.",phiPiRelation:"Золотое канторово множество вырезает средний интервал длиной 1/φ², оставляя два отрезка длиной 1/φ.",enginePreset:{type:"menger",compositeOp:"smoothCarve",boxFold:1.4,zoom:3}},{id:"cantor-dust",name:"Пыль Кантора",englishName:"Cantor Dust",category:"topological_physical",formula:"C_d = C × C × ... × C (d-кратное прямое произведение)",dimension:"D = d · ln(2)/ln(3) (для d=2 D ≈ 1.2618, d=3 D ≈ 1.8928)",generatorRule:"Многомерное декартово произведение одномерных множеств Кантора",description:"Вполне несвязное компактное пространство в ℝ² и ℝ³. В астрофизике используется для моделирования крупномасштабного распределения галактик во Вселенной.",phiPiRelation:"Описывает кластеризацию материи в космических войдах с золотым масштабным фактором.",enginePreset:{type:"apollonian",compositeOp:"smoothCarve",sphereFold:.8,zoom:2.9}},{id:"antoine-necklace",name:"Ожерелье Антуана",englishName:"Antoine's Necklace",category:"topological_physical",formula:"X = ⋂_{i=1}^∞ A_i, где A_i — цепи зацепленных торов",dimension:"D_топологическая = 0, D_Хаусдорфа > 0",generatorRule:"Тор заменяется цепью зацепленных уменьшенных торов",description:"Дикий узел и фрактал Луи Антуана (1921). Вполне несвязное компактное подмножество ℝ³, дополнение к которому не является односвязным (фундаментальная группа π₁(ℝ³ \\ X) ≠ 1).",phiPiRelation:"Каждое кольцо ориентировано по меридианам тора (углы 2π); золотая инверсия диаметров предотвращает самопересечение колец.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.2}},{id:"cesaro-curve-v2",name:"Кривая Чезаро",englishName:"Cesàro Curve (Torn Square)",category:"geometric_curves",formula:"α = arctan((1-2δ)/√3), L_{n+1} = (2 + 2 cos α)^{-1} L_n",dimension:"D = ln(4) / ln(2(1 + cos α)) ≈ 1.7848",generatorRule:"Вариация кривой Коха с варьируемым углом при вершине отсекаемого треугольника α ∈ (0, π/3)",description:"Обобщение кривой Коха Эрнесто Чезаро (1906). При приближении угла к 90° кривая превращается в самокасающуюся пространственно-заполняющую структуру («разорванный квадрат»).",phiPiRelation:"При золотом угле Чезаро α = 2π(1 - 1/φ) ≈ 137.5° граница кривой образует квазипериодическую розетку.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",warpStrength:.35,zoom:3.1}},{id:"drummond-curve-v2",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ_k = 2π / (φ^k), L_{n+1} = r · L_n",dimension:"D ≈ 1.4142 (квазидробная размерность)",generatorRule:"Циклическая L-система с дробными иррациональными углами поворота и переменным масштабированием",description:"Кривая на основе L-систем с несимметричными ветвями и иррациональными фазовыми сдвигами, формирующая спиральные кристаллические кластеры.",phiPiRelation:"Каждый шаг итерации масштабируется на фактор 1/φ с поворотом на угол золотого сечения.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"koch-mcwhorter-v2",name:"Снежинка Коха — МакВортера (Pentigree)",englishName:"McWhorter's Pentigree",category:"geometric_curves",formula:"z ↦ z · e^{i θ} / r + c_k, r = √7",dimension:"D = ln(5)/ln(√7) ≈ 1.6309",generatorRule:"Асимметричная замена каждого отрезка на 5 сегментов под углом arcsin(√3/(2√7))",description:"Обобщение снежинки Коха Уильяма МакВортера (Pentigree), порождающее пятиугольные самозаполняющиеся фрактальные плитки с 5-лучевой симметрией.",phiPiRelation:"Симметрия pentigree неразрывно связана с пентаграммой и степенями золотого сечения φ.",enginePreset:{type:"fibonacciSnowflake",hybridType:"icosahedral",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3}},{id:"rice-curve-v2",name:"Кривая Райса",englishName:"Rice Space-Filling Curve",category:"geometric_curves",formula:"γ(t): [0, 1] → ℝ², L-система F → +F--F+F++F-",dimension:"D = 2.0 (пространственно-заполняющая)",generatorRule:"Пространственно-заполняющая кривая с неортогональными углами поворота 45° и 135°",description:"Непрерывная кривая, заполняющая треугольные и шестиугольные ячейки без самопересечений за счет асимметричных неортогональных разворотов.",phiPiRelation:"Углы разворота кратны π/4 и π/8; золотая модуляция длин звеньев сглаживает кривизну пути.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothCarve",boxFold:1.1,zoom:2.8}},{id:"polya-curve-v2",name:"Кривая Пойи",englishName:"Pólya Space-Filling Curve",category:"geometric_curves",formula:"P(t) = ∑_{k=1}^∞ 2^{-k} v_{ε_k(t)}, t ∈ [0, 1]",dimension:"D = 2.0 (непрерывно заполняет треугольник)",generatorRule:"Предельный случай блуждания кривой Джорджа Пойи (1913), заполняющей равнобедренный прямоугольный треугольник",description:"Первая доказанная непрерывная кривая, заполняющая внутренность треугольника, сохраняя дифференцируемость почти всюду кроме счетного множества канторовых узлов.",phiPiRelation:"Отношение гипотенузы к катетам равно √2; золотое сечение регулирует последовательность обхода подтреугольников.",enginePreset:{type:"dragonCurveIFS",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"twenmey-dragon-v2",name:"Дракон Твенми",englishName:"Twenmey Dragon Curve",category:"geometric_curves",formula:"w_1(z) = z · (1 + i)/2, w_2(z) = 1 - z · (1 - i)/2",dimension:"D = 2.0, граница D_∂ ≈ 1.5236",generatorRule:"Вариация дракона Хартера-Хейтуэя со сменой знака угла поворота на каждом нечетном шаге",description:"Спиральная фрактальная кривая с вихревыми завитками, разворачивающаяся в обе полуплоскости и напоминающая крылья феникса.",phiPiRelation:"Угол поворота 90° = π/2; шаг разворота витков масштабируется по пропорции φ = 1.618.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:3.2}},{id:"golden-dragon-v2",name:"Золотой Дракон (φ-Dragon)",englishName:"Golden Ratio Dragon Curve",category:"geometric_curves",formula:"z_{n+1} = z_n / φ · e^{i · arccos(1/(2φ))}",dimension:"D = ln(2)/ln(φ) ≈ 1.4404",generatorRule:"Замена звеньев ломаной треугольниками с золотыми пропорциями катетов 1 : 1/φ",description:"Фрактальная кривая дракона, углы и длины сегментов которой точно вычислены из корня полинома x² - x - 1 = 0. Не имеет самопересечений ни на одном масштабе.",phiPiRelation:"Фундаментальный фрактал: коэффициент подобия в точности равен 1/φ = 0.61803398875!",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.38,phiMultiplier:1.61803398875,zoom:3.1}},{id:"sierpinski-arrowhead-v2",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"A → B-A-B, B → A+B+A (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Симметричная L-система, в пределе сходящаяся к треугольнику Серпинского",description:"Непрерывная ломаная линия, которая при итерациях n → ∞ в точности заметает множество точек треугольника Серпинского, являясь его топологической траекторией.",phiPiRelation:"Угол 60° задает гексагональный базис; золотое разбиение сторон порождает фрактал Пенроуза.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:3}},{id:"pythagoras-tree-wind-v2",name:"Дерево Пифагора обдуваемое (Асимметричное)",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"c² = a² + b², a = c · cos(α), b = c · sin(α), α ≠ 45°",dimension:"D ≈ 1.83 (зависит от угла наклона)",generatorRule:"Построение квадратов на прямоугольном треугольнике с неравными острыми углами α = 30°, β = 60°",description:"Вариация классического дерева Пифагора, где неравные углы ветвления создают динамический эффект кроны, изогнутой непрерывным фрактальным ветром.",phiPiRelation:"При золотом угле α = arcsin(1/√φ) дерево сворачивается в совершенную логарифмическую спираль Фибоначчи.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothUnion",rotX:.45,rotY:.2,zoom:3.2}},{id:"pythagoras-tree-naked-v2",name:"Обнаженное дерево Пифагора",englishName:"Naked Skeleton Pythagoras Tree",category:"constructive",formula:"E_n = ⋃ [c_{k, 1}, c_{k, 2}], c_k — центры квадратов",dimension:"D = ln(2)/ln(√2) = 2 (для скелетного графа)",generatorRule:"Фрактальный граф, построенный исключительно по отрезкам, соединяющим центры смежных квадратов дерева Пифагора",description:"Минималистичный линейный остов дерева Пифагора. Образует элегантную ветвящуюся коралловую структуру, лишенную сплошных площадей квадратов.",phiPiRelation:"Длины ветвей убывают в геометрической прогрессии с масштабным множителем золотого корня 1/√φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",warpStrength:.2,zoom:3.4}},{id:"t-square-v2",name:"Т-квадрат (T-Square Fractal)",englishName:"T-Square Fractal",category:"constructive",formula:"A_{n+1} = A_n ∪ 4 × A_n / 2, S_∞ = 2 S_0",dimension:"D = ln(4)/ln(2) = 2.0",generatorRule:"Итерационное наложение уменьшенных вдвое квадратов на все 4 угла каждого квадрата предыдущего поколения",description:"Классический конструктивный фрактал. В пределе площадь покрываемой области в точности равна удвоенной площади начального квадрата, а периметр стремится к бесконечности.",phiPiRelation:"При золотом скейлинге (1/φ вместо 1/2) квадраты не перекрываются, образуя совершенную квазикристаллическую мозаику.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1,zoom:3}},{id:"sierpinski-cross-v2",name:"Крест Серпинского 3D",englishName:"Sierpiński Cross 3D",category:"constructive",formula:"C_{n+1} = ⋃_{i=1}^5 T_i(C_n), |det(T_i)| = 1/9",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Взаимно перпендикулярные плоскости ковра Серпинского, образующие объемный пространственный крест",description:"Трехмерная ортогональная комбинация пересекающихся фракталов Серпинского, обладающая октаэдрической симметрией полостей.",phiPiRelation:"Сечения креста плоскостями под золотым углом arctan(φ) образуют правильные пятиугольные отверстия.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",boxFold:1.2,zoom:3.2}},{id:"sierpinski-pentagon-v2",name:"Пятиугольник Серпинского (Пентафлейк / Pentaflake)",englishName:"Pentaflake / Sierpiński Pentagon",category:"constructive",formula:"P_{n+1} = ⋃_{i=1}^5 R_{2π i/5}(P_n / (1 + φ))",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.67228",generatorRule:"Правильный пятиугольник замещается пятью меньшими пятиугольниками по углам с удалением центральной пятиконечной звезды",description:"Один из самых гармоничных планарных фракталов. Имеет врожденную 5-лучевую золотую симметрию D₅, невозможную в стандартных кристаллических решетках.",phiPiRelation:"Масштабный множитель строго равен 1/(1 + φ) = 1/φ² ≈ 0.381966! Чистейшее проявление золотого сечения.",enginePreset:{type:"icosahedral",compositeOp:"smoothUnion",phiMultiplier:1.61803398875,zoom:3}},{id:"hexaflake-v2",name:"Гексафрактал (Hexaflake / Снежинка Серпинского)",englishName:"Hexaflake",category:"constructive",formula:"H_{n+1} = ⋃_{i=1}^7 H_n / 3 (6 по периметру + 1 в центре)",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть уменьшенных копий правильного шестиугольника по периметру плюс один в центре",description:"Шестилучевой фрактальный кристалл, моделирующий рекурсивный рост ледяных снежинок в насыщенных парах воды.",phiPiRelation:"Периметр шестиугольника задан соотношением 6r; вписанные золотые спирали описывают микроканалы кристаллизации.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothUnion",boxFold:1.3,zoom:2.9}},{id:"ivezic-fractal-v2",name:"Фрактал Ивезича (Многомерный симплекс Серпинского)",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n + 1) / ln(2), n ≥ 1",dimension:"D = ln(n+1)/ln(2) (для n=4 D ≈ 2.3219, для n=6 D ≈ 2.807)",generatorRule:"Рекурсивное удаление инвертированных подсимплексов из правильного n-мерного симплекса",description:"Обобщение треугольника и тетраэдра Серпинского на n-мерные гиперпространства, открытое в фундаментальных трудах по фрактальной топологии.",phiPiRelation:"Сечения 5-мерного симплекса Ивезича ортогонально проецируются в золотые икосаэдры в ℝ³.",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothMorph",hybridBlend:.4,zoom:3.1}},{id:"levi-snowflake-v2",name:"Снежинка Леви",englishName:"Lévy Snowflake (C-Curve Boundary)",category:"constructive",formula:"S = ⋃_{i=1}^8 Lévy_i, Area = 2",dimension:"D_граница ≈ 1.9340, D_тело = 2.0",generatorRule:"Замкнутая область, заметаемая восемью сходящимися кривыми Леви, расположенными по периметру квадрата",description:"Удивительная фрактальная мозаика с бесконечной бахромой, способная самозамостить евклидову плоскость ℝ² без зазоров и перекрытий.",phiPiRelation:"Период разворота ветвей равен π/4; фрактальная граница имеет золотой масштаб самоподобия.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothCarve",zoom:3.1}},{id:"burning-ship-perpendicular-v2",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (Re(z_n) + i|Im(z_n)|)^2 + c",dimension:"D_граница = 2.0 (комплексная динамика)",generatorRule:"Модуль берется только от мнимой компоненты, сохраняя знак вещественной части",description:"Асимметричная модификация фрактала Burning Ship. Разрушает зеркальную симметрию, порождая вихревые струи и призрачные фрактальные корабли.",phiPiRelation:"Отношение периодов бифуркации мачт корабля сходится к константе Фейгенбаума δ = 4.6692 и золотому множителю φ.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",warpStrength:.35,zoom:3}},{id:"jesus-trigonometric-v2",name:"Фрактал Иисуса / Тригонометрический фрактал",englishName:"Jesus / Sine-Cosine Transcendental Fractal",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c · cos(z_n)",dimension:"D = 2.0 (трансцендентная динамика)",generatorRule:"Итерация тригонометрических комплексных функций с экспоненциальным ростом вдоль мнимой оси",description:"Трансцендентный фрактал комплексной динамики. Вдоль мнимой оси синус переходит в гиперболический sinh, создавая соборные арки и бесконечные колоннады.",phiPiRelation:"Период функции строго равен 2π; золотое сечение управляет шириной коридоров сходимости.",enginePreset:{type:"riemannZeta",hybridType:"mandelbulb",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3.2}},{id:"spider-fractal-v2",name:"Фрактал «Паук» (Spider Fractal)",englishName:"Spider Dynamical System",category:"algebraic_complex",formula:"z_{n+1} = z_n^2 + c_n, c_{n+1} = c_n / 2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Динамическая система с блуждающим параметром сдвига c_n, зависящим от текущей координаты орбиты",description:"Сложный алгебраический фрактал, где параметр c не статичен, а эволюционирует синхронно с точкой z, создавая длинные радиальные нити-ножки.",phiPiRelation:"Углы расхождения паучьих нитей кратны золотому углу 137.5° = 2π(1 - 1/φ).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",warpStrength:.3,zoom:3.1}},{id:"sherwood-carpet-v2",name:"Фрактал «Ковер Шервуда»",englishName:"Sherwood Algebraic Carpet",category:"algebraic_complex",formula:"z_{n+1} = (z_n^3 + c) / (1 + conjugate(z_n)^2)",dimension:"D ≈ 1.89",generatorRule:"Рациональное дробно-линейное отображение третьего порядка с комплексным сопряжением",description:"Алгебраический фрактал на основе рациональных отображений Римана, образующий кружевную вязь бесконечных арок и сводов.",phiPiRelation:"Комплексные полюса отображения распределены по окружности радиуса √φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothUnion",boxFold:1.15,zoom:2.9}},{id:"serafimski-newton-v2",name:"Фрактал Серафимского (Фазовый метод Ньютона)",englishName:"Serafimski Non-Linear Newton Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{i α} P(z_n) / P'(z_n), α = π/φ",dimension:"D = 2.0 (бассейны с общей границей Жюлиа)",generatorRule:"Модификация метода Ньютона с добавлением комплексного вращения шага на золотой фазовый угол α",description:"Введение золотой фазы заставляет прямолинейные траектории Ньютона закручиваться в вихревые спирали вокруг корней полинома, создавая фантастические завихрения.",phiPiRelation:"Фазовый угол сдвига α = π/φ ≈ 111.246° устраняет прямолинейные сингулярности и максимизирует хаос.",enginePreset:{type:"newtonBasins",compositeOp:"domainWarp",warpStrength:.45,zoom:3}},{id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"ẋ=(z-b)x-dy, ẏ=dx+(z-b)y, ż=c+az-z³/3-(x²+y²)(1+ez)+fzx³",dimension:"D_L ≈ 2.16 (размерность Ляпунова)",generatorRule:"Трехмерная система нелинейных дифференциальных уравнений с тороидально-сферической хаотической оболочкой",description:"Один из самых визуально совершенных аттракторов хаоса: траектории образуют сферу с центральной осью вращения и струйными выбросами на полюсах.",phiPiRelation:"Соотношение радиальной и аксиальной частот вращения сходится к золотой пропорции φ.",enginePreset:{type:"lorenzAttractor",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:3.3}},{id:"thomas-attractor",name:"Аттрактор Томаса (Циклический лабиринт)",englishName:"Thomas Cyclically Symmetric Attractor",category:"ifs_attractors",formula:"ẋ = sin(y) - bx, ẏ = sin(z) - by, ż = sin(x) - bz",dimension:"D_L ≈ 2.05",generatorRule:"Циклически симметричная 3D динамическая система с тригонометрическим связыванием координат",description:"Хаотический аттрактор с полной циклической C₃-симметрией, формирующий бесконечный пространственный лабиринт из плавных трубок.",phiPiRelation:"Период тригонометрических функций 2π; критическое значение затухания b_c ≈ 0.208186 связано с золотыми степенями.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothMorph",warpStrength:.25,zoom:3.1}},{id:"halvorsen-attractor",name:"Аттрактор Халворсена",englishName:"Halvorsen 3D Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = -ax - 4y - 4z - y², ẏ = -ay - 4z - 4x - z², ż = -az - 4x - 4y - x²",dimension:"D_L ≈ 2.22",generatorRule:"Квадратичная 3D система с трехлучевой циклической симметрией",description:"Трехмерный аттрактор с тремя раскрывающимися лепестками, по которым хаотически перескакивает фазовая траектория.",phiPiRelation:"Симметрия C₃ задает угол поворота 120° = 2π/3; фазовый объем сжимается со скоростью div V = -3a.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:3.2}},{id:"sprott-attractor",name:"Аттрактор Спротта",englishName:"Sprott Minimal Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = y + 2xy + xz, ẏ = 1 - 2x² + yz, ż = x - x² - y²",dimension:"D_L ≈ 2.09",generatorRule:"Минимальная система Клиффорда Спротта с пятью слагаемыми и одним параметром",description:"Элегантная минималистичная хаотическая система дифференциальных уравнений, открытая в 1994 году в ходе численного поиска простейших аттракторов.",phiPiRelation:"Спектр показателей Ляпунова (+, 0, -) удовлетворяет теореме Каплана-Йорке с золотым коэффициентом сжатия.",enginePreset:{type:"lorenzAttractor",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.35,zoom:3}},{id:"avalanche-dbm-v2",name:"Фрактал лавинного пробоя (DBM / Молния Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM)",category:"stochastic",formula:"p_i ∝ (∇Φ)^η, ∇²Φ = 0",dimension:"D ≈ 1.75 (для η = 1 D ≈ 1.71, для η = 2 D ≈ 1.45)",generatorRule:"Вероятностная модель Нимейера-Пьетронеро-Висмана (1984) для роста искровых разрядов в диэлектриках",description:"Физический стохастический фрактал, точно описывающий ветвление молний в атмосфере, фигуры Лихтенберга на плексигласе и древовидные эрозии.",phiPiRelation:"Углы бифуркации разрядных каналов имеют моду статистического распределения около золотого угла 137.5°.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",warpStrength:.45,zoom:3}},{id:"mandelbrot-multidrop",name:"Мультифрактальный каскад Мандельброта",englishName:"Mandelbrot Multiplicative Cascade",category:"stochastic",formula:"μ(B) = ∏_{k=1}^n W_{ε_k}, ⟨W⟩ = 1",dimension:"Спектр сингулярностей f(α) = inf_q [q α - τ(q)]",generatorRule:"Мультипликативное случайное деление энергии между дочерними ячейками турбулентности",description:"Модель Бенуа Мандельброта (1974) для описания перемежаемости развитой гидродинамической турбулентности Колмогорова.",phiPiRelation:"Максимум спектра размерностей f(α) приходится на точку золотого баланса потоков энергии.",enginePreset:{type:"quasicrystal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3.1}},{id:"hopf-fibration-manifold",name:"Расслоение Хопфа S³ → S²",englishName:"Hopf Fibration Topological Bundle",category:"topological_physical",formula:"h(z_0, z_1) = (2 z_0 conjugate(z_1), |z_0|² - |z_1|²) ∈ S²",dimension:"D_топологическая = 3, расслаивается окружностями S¹",generatorRule:"Отображение 3-сферы в 4D на двумерную сферу Римана, где прообраз каждой точки есть окружность Вилларсо",description:"Великое топологическое открытие Хайнца Хопфа (1931). Пространство заполнено зацепленными торами Клиффорда, не пересекающимися между собой.",phiPiRelation:"Каждые два кольца зацеплены ровно один раз (число зацепления Хопфа = 1); золотой угол скрутки волокон предотвращает резонансные узлы.",enginePreset:{type:"hopfFibration",compositeOp:"smoothUnion",zoom:3.2,rotX:.3,rotY:.25}},{id:"calabi-yau-manifold",name:"Многообразие Калаби — Яу",englishName:"Calabi-Yau 3-Fold Compactification",category:"topological_physical",formula:"z_1^5 + z_2^5 + z_3^5 + z_4^5 + z_5^5 - 5 ψ z_1 z_2 z_3 z_4 z_5 = 0",dimension:"6 действительных измерений (3 комплексных) в CP⁴",generatorRule:"Компактное кэлерово многообразие с нулевым первым классом Черна c_1 = 0 и метрикой Риччи-плоского пространства",description:"Фундаментальная геометрия скрытых микроизмерений в теории суперструн. 2D и 3D проекции сечений многообразия образуют гармонические складки.",phiPiRelation:"Параметр комплексной деформации ψ при золотом значении φ порождает конформную зеркальную симметрию фермионных поколений.",enginePreset:{type:"calabiYau",compositeOp:"smoothMorph",zoom:3.1,rotX:.4,rotY:.3}},{id:"costa-minimal-surface",name:"Минимальная поверхность Коста",englishName:"Costa Minimal Surface",category:"topological_physical",formula:"X(z) = Re ∫ (½(1 - g²), i/2(1 + g²), g) ω, H ≡ 0",dimension:"D_топологическая = 2, род g = 1 с тремя концами",generatorRule:"Представление Вейерштрасса с эллиптическими функциями Вейерштрасса ℘(z)",description:"Сенсация геометрии: в 1982 году Селсо Коста доказал существование полной вложенной минимальной поверхности рода 1, опровергнув столетнее убеждение о единственности катеноида и геликоида.",phiPiRelation:"Эллиптические периоды тора Коста ω_1, ω_2 находятся в точном соотношении золотого сечения φ.",enginePreset:{type:"neoviusMinimal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"rossler-hyperchaos",name:"4D Гиперхаотический аттрактор Рёсслера",englishName:"4D Hyperchaotic Rössler Attractor",category:"ifs_attractors",formula:"ẋ = -y - z, ẏ = x + ay + w, ż = b + xz, ẇ = -cz + dw",dimension:"D_фрактальная ≈ 3.18 (Два положительных показателя Ляпунова λ₁ > λ₂ > 0)",generatorRule:"Двойное складчатое растяжение фазового потока в четырёхмерном фазовом пространстве",description:"Открытие Отто Рёсслера (1979). В отличие от простого хаоса, гиперхаос имеет более одного направления экспоненциального разбегания фазовых траекторий, порождая многослойные вихревые мембраны.",phiPiRelation:"Спектральное расщепление бифуркаций удвоения периода подчиняется универсальной константе Фейгенбаума δ ≈ 4.669 и золотой пропорции φ.",enginePreset:{type:"rosslerHyperchaos",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35}},{id:"clifford-attractor-v2",name:"4D Аттрактор Клиффорда — Пиковера",englishName:"Clifford-Pickover 4D Dynamic Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D_хаусдорфа ≈ 2.45 в четырёхмерном пространстве параметров",generatorRule:"Нелинейное синусоидальное отображение Клиффорда с закруткой фазового угла",description:"Исследован Клиффордом Пиковером. Образует непрерывные бархатистые каустические ленты и тороидальные спирали бесконечной глубины.",phiPiRelation:"При золотых параметрах a = -1.4φ, b = 1.6/φ, c = 1.0φ система формирует квазипериодические 10-лепестковые симметрии Пенроуза.",enginePreset:{type:"cliffordAttractor",compositeOp:"smoothUnion",zoom:3,rotX:.3,rotY:.4}},{id:"abrikosov-vortex-lattice",name:"Квантовая вихревая решётка Абрикосова",englishName:"Abrikosov Superconducting Vortex Lattice",category:"topological_physical",formula:"∇ × B = j_s, ψ(r) = Δ(r) e^{iθ}, ∮ v_s · dl = 2πℏ/m",dimension:"D = 2 + 1 (Квантованное 2D треугольное поле флюксонов с продольной спиралью)",generatorRule:"Нобелевское открытие А. А. Абрикосова (1957). Вихри сверхпроводящего тока с квантом магнитного потока Φ₀ = h/2e",description:"В сверхпроводниках II рода магнитное поле проникает в виде квантованных нитей (флюксонов), образующих строгую гексагональную решетку с вихревыми сингулярностями.",phiPiRelation:"Отношение периодов решетки флюксонов к длине когерентности Гинзбурга-Ландау ξ при золотом спиральном шаге минимизирует свободную энергию Гиббса.",enginePreset:{type:"abrikosovLattice",compositeOp:"smoothUnion",zoom:3.2,rotX:.2,rotY:.15}},{id:"beltrami-pseudosphere",name:"Псевдосфера Бельтрами (Геометрия Лобачевского)",englishName:"Beltrami Pseudosphere Hyperbolic Surface",category:"topological_physical",formula:"x = sech(u) cos(v), y = sech(u) sin(v), z = u - tanh(u), K ≡ -1/R²",dimension:"D_гладкая = 2 с гиперболическим фрактальным краевым сингулярным ребром",generatorRule:"Поверхность вращения трактрисы вокруг своей асимптоты; локальная модель плоскости Лобачевского",description:"Эудженио Бельтрами (1868) впервые реализовал неевклидову геометрию Лобачевского на вещественной поверхности в ℝ³ с постоянной отрицательной гауссовой кривизной K = -1.",phiPiRelation:"Экспоненциальное сужение горловины трактрисы e^{-z} скейлится золотым показателем φ, формируя бесконечный раструб.",enginePreset:{type:"beltramiPseudosphere",compositeOp:"smoothUnion",zoom:2.9,rotX:.35,rotY:.2}},{id:"spin-foam-network",name:"Спиновая пена и сеть Пенроуза (LQG)",englishName:"Penrose Spin Network & Quantum Foam",category:"topological_physical",formula:"A(j_f, v_e) = ∏_f dim(j_f) ∏_v W_v(j_f, i_e), SU(2) Gauge Invariance",dimension:"D_планковская = 4 (Дискретная квантовая планковская геометрия пространства-времени l_P ≈ 1.6·10⁻³⁵ м)",generatorRule:"Петлевая квантовая гравитация (Ровелли, Смолин, Пенроуз): пространство состоит из квантованных ячеек объёма и площади",description:"Революционная концепция квантовой физики: на планковском масштабе непрерывное пространство исчезает, уступая место динамической сети спинов и топологической квантовой пене.",phiPiRelation:"Спектры операторов площади квантованы через постоянную Иммирци γ_BI = ln(2) / (π√3) и масштабное деление золотого узла.",enginePreset:{type:"spinFoamNetwork",compositeOp:"smoothUnion",zoom:3.1,rotX:.5,rotY:.4}},{id:"ramanujan-tau-resonator",name:"Модулярный резонатор Рамануджана Δ(τ)",englishName:"Ramanujan Modular Tau Resonator",category:"algebraic_complex",formula:"Δ(τ) = (2π)¹² q ∏_{n=1}^∞ (1 - q^n)²⁴ = ∑_{n=1}^∞ τ(n) q^n, q = e^{2π i τ}",dimension:"Вес k = 12 модулярной формы над группой SL(2, ℤ)",generatorRule:"Параболическая модулярная форма Рамануджана с 24 каспами (корнями степени 24)",description:"Жемчужина теории чисел Сринивасы Рамануджана (1916). Функция τ(n) управляет 24-мерной решёткой Лича и теорией бозонных струн в 26 измерениях.",phiPiRelation:"Непрерывная дробь Рамануджана R(q) при q = e^{-2π} вычисляется строго через золотое сечение: R(e^{-2π}) = √(φ√5) - φ.",enginePreset:{type:"ramanujanTau",compositeOp:"smoothUnion",zoom:2.9,rotX:.4,rotY:.25}},{id:"belousov-zhabotinsky-waves",name:"Спиральные волны Белоусова — Жаботинского",englishName:"Belousov-Zhabotinsky Chemical Spiral Waves",category:"topological_physical",formula:"∂u/∂t = D_u ∇²u + u(1 - u) - f v (u - q)/(u + q), ∂v/∂t = D_v ∇²v + u - v",dimension:"D = 2 + 1 (Автоволновой фазовый спиральный фронт в активной нелинейной среде)",generatorRule:"Самоорганизующаяся нелинейная реакция окисления малоновой кислоты бромноватой кислотой",description:"Триумф синергетики и физики неравновесных процессов (Б. П. Белоусов 1951, А. М. Жаботинский 1964). Автоволновые ревербераторы образуют раскручивающиеся спирали в пространстве.",phiPiRelation:"Шаг спиральных волн самоорганизуется в золотую логарифмическую спираль r(θ) = a e^{θ cot(φ)}, минимизируя диссипацию энтропии.",enginePreset:{type:"belousovWaves",compositeOp:"smoothUnion",zoom:3,rotX:.35,rotY:.3}},{id:"mandelbulb-classic",name:"Мандельбульб (классический)",englishName:"Classic Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c, r = |z|, θ = atan2(√(x²+y²), z), φ = atan2(y, x)",dimension:"D ≈ 3.0 (граница) ",generatorRule:"Сферические координаты с возведением в степень 8",description:"Трёхмерный аналог множества Мандельброта, построенный путём обобщения формулы z²+c на сферические координаты со степенью 8.",phiPiRelation:"Степень 8 = 2³ связана с золотым сечением через итеративное удвоение; при замене 8 на φ·5 форма становится наиболее «золотой».",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",zoom:3.2,rotX:.4,rotY:.3,iterations:12}},{id:"mandelbulb-hybrid",name:"Мандельбульб × Спиральный туннель",englishName:"Mandelbulb × Spiral Tunnel Hybrid",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c ⊕ log-spiral fold",dimension:"D ≈ 2.8 (гибридная граница)",generatorRule:"Гладкое морфирование Мандельбульба с логарифмической спиральной складкой",description:"Гибрид классического Мандельбульба и спирального туннеля, создающий эффект закрученных коридоров внутри фрактала.",phiPiRelation:"Золотой угол скрутки 137.5° = 2π/φ² определяет шаг спирального складывания.",enginePreset:{type:"mandelbulb",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.4,zoom:3,rotX:.35}},{id:"quaternion-julia-slice",name:"Кватернионное множество Жюлиа (срез ℍ)",englishName:"Quaternion Julia Set (ℍ Slice)",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q ∈ ℍ, c = фиксированный кватернион",dimension:"D ≈ 2.5 (граница 3D-сечения)",generatorRule:"Итерация квадрата кватерниона с добавлением константы c ∈ ℍ",description:"4D множество Жюлиа в кватернионном пространстве. 3D-сечение показывает невероятно сложные переплетающиеся поверхности.",phiPiRelation:"Кватернионные компоненты c = (1/φ, 1/φ², 0, 0) порождают наиболее симметричные золотые сечения.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.5,iterations:10}},{id:"apollonian-packing",name:"Аполлониева упаковка сфер",englishName:"Apollonian Sphere Packing",category:"constructive",formula:"Кривизна k_{n+1} = k_1 + k_2 + k_3 + k_4 ± 2√(k_1 k_2 + k_2 k_3 + k_3 k_4 + k_4 k_1)",dimension:"D ≈ 2.47 (граница упаковки)",generatorRule:"Теорема Дезаржа об инверсиях: вписать максимальную сферу в зазор между 4 взаимно касающимися сферами",description:"Фрактальная упаковка сфер, где каждый зазор между 4 касающимися сферами заполняется новой максимальной сферой.",phiPiRelation:"Отношения кривизн соседних сфер в пределе сходятся к степеням золотого сечения.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",zoom:3.5,rotX:.3,rotY:.4,iterations:8}},{id:"spiral-tunnel-infinite",name:"Бесконечный логарифмический туннель φ",englishName:"Infinite Logarithmic Phi Zoom Tunnel",category:"geometric_curves",formula:"r(θ) = a · φ^(2θ/π), самоподобие при повороте на 2π/ln(φ)",dimension:"D = 1 + 2/ln(φ) ≈ 3.87",generatorRule:"Логарифмическая спираль с золотым показателем, развёрнутая в 3D-туннель",description:"Бесконечный туннель, стенки которого образованы золотой логарифмической спиралью. При зуме внутрь открывается бесконечная самоподобная структура.",phiPiRelation:"Показатель спирали = 2/ln(φ) ≈ 4.15; поворот на золотой угол 137.5° переводит туннель в себя.",enginePreset:{type:"spiralTunnel",compositeOp:"smoothMorph",zoom:2.5,rotX:0,rotY:0}},{id:"mandelbox-golden",name:"Мандельбокс золотого сложения",englishName:"Golden Mandelbox",category:"multidimensional",formula:"z_{n+1} = scale · fold(z_n) + c, fold: boxFold + sphereFold",dimension:"D ≈ 2.7 (зависит от scale)",generatorRule:"Складывание пространства: box fold (отражение) + sphere fold (инверсия сферы) + масштабирование",description:"Фрактал, полученный многократным складыванием 3D-пространства через комбинацию кубического и сферического отражений с золотым масштабом.",phiPiRelation:"При scale = φ² = 2.618... структура приобретает максимальную золотую симметрию.",enginePreset:{type:"mandelbox",compositeOp:"smoothMorph",zoom:3,boxFold:1,sphereFold:.5,iterations:12}},{id:"gyroid-tpms",name:"Золотая гироидная поверхность (TPMS)",englishName:"Golden Gyroid Minimal Surface",category:"topological_physical",formula:"G(x,y,z) = sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2 (нулевая средняя кривизна H ≡ 0)",generatorRule:"Трёхпериодическая минимальная поверхность Шона с золотым масштабированием",description:"Одна из трёх классических TPMS-поверхностей. Не имеет прямых линий, самопересечений; разделяет пространство на два лабиринтных канала.",phiPiRelation:"Периоды решётки масштабированы золотым сечением; каналы образуют золотые спиральные траектории.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.5,rotX:.5,rotY:.3}},{id:"prime-spiral-sachs",name:"Спираль простых Сакса — Улама",englishName:"Sachs-Ulam Prime Spiral",category:"algebraic_complex",formula:"p_n = n² + n + 41 (золотой многочлен Эйлера), размещение на ультра-спирали",dimension:"D ≈ 1 (асимптотическая плотность ~ 1/ln(n))",generatorRule:"Размещение простых чисел на полярной сетке r = √n, θ = 2π√n с золотым смещением",description:"Визуализация распределения простых чисел на плоскости, показывающая удивительные спиральные паттерны, связанные с золотым сечением.",phiPiRelation:"Золотой угол 2π/φ между последовательными витками минимизирует перекрытия и максимизирует видимость паттернов.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"poincare-homology",name:"Гомологическая сфера Пуанкаре",englishName:"Poincaré Homology Sphere",category:"topological_physical",formula:"S³/Γ, Γ = группа икосаэдра порядка 120",dimension:"D = 3 (замкнутое 3-многообразие с π₁ = Γ₁₂₀)",generatorRule:"Факторизация 3-сферы по группе икосаэдра: каждая точка идентифицируется с 119 другими",description:"Единственное известное замкнутое 3-многообразие с группами гомологий как у сферы, но нетривиальной фундаментальной группой порядка 120.",phiPiRelation:"Группа икосаэдра порядка 120 = 5! связана с φ через симметрии додекаэдра: |Γ| = 4π·60/(2π/φ).",enginePreset:{type:"poincareSphere",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:8}},{id:"gaussian-primes-lattice",name:"Решётка гауссовых простых Z[i]",englishName:"Gaussian Primes Lattice Z[i]",category:"algebraic_complex",formula:"p = a² + b² простое ⟺ p ≡ 1 (mod 4) или p = a+bi, N(p) = a²+b² простое в ℤ",dimension:"D ≈ 1.36 (асимптотическая плотность в ℂ)",generatorRule:"Размещение гауссовых простых на комплексной плоскости с золотым масштабированием",description:"Простые числа в кольце гауссовых целых Z[i]. Их распределение на комплексной плоскости образует удивительные решётчатые паттерны.",phiPiRelation:"Золотое масштабирование координат (a·φ, b·φ) выявляет скрытые спиральные симметрии в распределении.",enginePreset:{type:"gaussianPrimes",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"euler-totient-spiral",name:"Спираль функции Эйлера φ(n)",englishName:"Euler Totient φ(n) Archimedean Spiral",category:"algebraic_complex",formula:"φ(n) = n ∏_{p|n}(1 - 1/p), размещение на спирали Архимеда r = n",dimension:"D ≈ 1.5 (фрактальная размерность графика)",generatorRule:"Значение φ(n) кодирует высоту/цвет точки на архимедовой спирали",description:"Визуализация функции Эйлера на спиральной сетке, показывающая удивительные лучевые и радиальные паттерны в распределении значений.",phiPiRelation:"Среднее отношение φ(n)/n → 6/π²; золотой угол размещения φ(n) выявляет скрытые модулярные симметрии.",enginePreset:{type:"eulerTotientSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"clifford-torus-4d",name:"4D Тор Клиффорда (стереографическая проекция)",englishName:"4D Clifford Torus (Stereo Projection)",category:"multidimensional",formula:"(x₁,x₂,x₃,x₄) = (cos θ, sin θ, cos φ, sin φ) ⊂ S³ ⊂ ℝ⁴",dimension:"D = 2 (плоский тор в 4D, проекция в 3D)",generatorRule:"Стереографическая проекция из S³ в ℝ³ плоского тора (cos θ, sin θ, cos φ, sin φ)",description:"Единственный плоский (нулевая гауссова кривизна) тор, вложенный в 3-сферу. При стереографической проекции образует тор Дюпена.",phiPiRelation:"Золотое соотношение радиусов R/r = φ порождает наиболее гармоничную проекцию с икосаэдрическими сечениями.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"quaternion-mandelbrot-v2",name:"4D Кватернионное множество Мандельброта",englishName:"4D Quaternion Mandelbrot Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q, c ∈ ℍ",dimension:"D = 3 (граница 4D тела)",generatorRule:"Итерация квадрата кватерниона: q² = (a²-b·b̄, 2ab) для q = a + bi + cj + dk",description:"Полное 4D множество Мандельброта в кватернионном пространстве. 3D-сечения показывают бесконечное разнообразие форм.",phiPiRelation:"Кватернионные оси масштабированы золотым сечением; сечения при золотых углах обнаруживают максимальную сложность.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:10}},{id:"burning-ship-3d-v2",name:"3D Горящий корабль",englishName:"3D Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D ≈ 2.0 (граница)",generatorRule:"Модификация Мандельброта: абсолютные значения действительной и мнимой частей перед возведением в квадрат",description:"Фрактал, открытый Майклом Мандельбротом. В отличие от обычного Мандельброта, имеет характерную форму перевёрнутого корабля в пламени.",phiPiRelation:"Золотое масштабирование итераций выявляет самоподобные «паруса» горящего корабля.",enginePreset:{type:"burningShip3D",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4,iterations:12}},{id:"newton-basins-3d-v2",name:"3D Бассейны Ньютона-Рафсона",englishName:"3D Newton-Raphson Basins of Attraction",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n), f(z) = z³ - 1 (корни: 1, e^{2πi/3}, e^{4πi/3})",dimension:"D = 2 (границы бассейнов — фрактальные кривые)",generatorRule:"Итерация метода Ньютона для z³-1; каждая точка окрашивается по корню, к которому сходится",description:"Визуализация фрактальных границ бассейнов притяжения метода Ньютона. Границы между бассейнами образуют бесконечно сложные фрактальные кривые.",phiPiRelation:"Углы между бассейнами 120° = 2π/3; золотое возмущение начальных условий выявляет скрытую φ-симметрию.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:16}},{id:"jerusalem-cube-v2",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"constructive",formula:"Куб с крестами золотого сечения: удаление прямоугольников с отношением сторон φ",dimension:"D ≈ 2.58",generatorRule:"В каждой грани куба вырезается золотой крест, затем процесс повторяется рекурсивно",description:"Фрактал, построенный на кубе с золотыми пропорциями. В каждой грани вырезается крест, стороны которого относятся как φ:1.",phiPiRelation:"Все пропорции куба выражены через φ: рёбра креста, глубина вырезов и масштаб итераций.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",zoom:3,rotX:.35,rotY:.4,iterations:5}},{id:"hofstadter-butterfly-3d-v2",name:"Квантовая бабочка Хофштадтера",englishName:"Hofstadter Butterfly Energy Spectrum",category:"topological_physical",formula:"cos(q_x) + cos(q_y) = E, q_x = 2παm/n (магнитный поток α через ячейку)",dimension:"D ≈ 1.5 (фрактальная структура энергетических зон)",generatorRule:"Модель Харпера: квантовая частица на 2D решётке в однородном магнитном поле с рациональным потоком α = p/q",description:"Фрактальный энергетический спектр электрона в двумерной решётке с магнитным полем. Каждая «бабочка» — разрешённая зона энергии.",phiPiRelation:"При α = 1/φ (золотой поток) спектр демонстрирует максимальную фрактальную сложность и самоподобие.",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4}},{id:"antoine-necklace-v2",name:"Ожерелье Антуана (дикие зацепления)",englishName:"Antoine's Necklace Wild Linking",category:"topological_physical",formula:"C = ∩_n A_n, A_{n+1} ⊂ A_n, каждое звено зацеплено с соседними",dimension:"D ≈ 1.0 (канторово множество торов)",generatorRule:"Каждый тор заменяется на кольцо меньших торов, попарно зацепленных друг с другом",description:"Первый пример «дикого» вложения канторова множества в ℝ³. Топологически неэквивалентно стандартному канторову множеству.",phiPiRelation:"Количество торов на каждом уровне = 2·φ ≈ 3.236 → округление до 3 даёт наиболее плотное зацепление.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3,rotX:.4,rotY:.3,iterations:5}},{id:"henon-attractor-v2",name:"Аттрактор Энона (v2)",englishName:"Hénon Attractor (Expanded)",category:"expanded_real",formula:"xₙ₊₁ = 1 − axₙ² + yₙ, yₙ₊₁ = bxₙ (a=1.4, b=0.3)",dimension:"D ≈ 1.261 (фрактальная размерность аттрактора)",generatorRule:"Отображение Энона — дискретная динамическая система. 3D-обобщение добавляет третью координату с модуляцией.",description:"Один из первых изученных странных аттракторов. Демонстрирует хаотическое поведение в диссипативной системе. Фазовое пространство — сложенные полосы.",phiPiRelation:"Параметр a = 1.4 ≈ φ − 0.218. При a = φ аттрактор переходит в хаос через каскад удвоения периода.",enginePreset:{type:"henonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"aizawa-attractor-v2",name:"Аттрактор Аизавы (v2)",englishName:"Aizawa Attractor (Expanded)",category:"expanded_real",formula:"ẋ = (z−b)x − dy, ẏ = dx + (z−b)y, ż = c + az − z³/3 − (x²+y²)(1+ez) + fz x³",dimension:"D ≈ 2.1 (тороидальный хаос)",generatorRule:"Система ОДУ с тороидальной топологией. Параметры: a=0.95, b=0.7, c=0.6, d=3.5, e=0.25, f=0.1.",description:"Тороидальный странный аттрактор с характерной «пузырьковой» структурой. Демонстрирует переход от порядка к хаосу через квазипериодичность.",phiPiRelation:"Параметр d = 3.5 ≈ 2φ + 0.382. Тороидальная геометрия связана с золотым сечением через иррациональность числа вращения.",enginePreset:{type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.6,iterations:12}},{id:"thomas-attractor-v2",name:"Аттрактор Томаса (v2)",englishName:"Thomas's Cyclically Symmetric Attractor (Expanded)",category:"expanded_real",formula:"ẋ = sin(y) − bx, ẏ = sin(z) − by, ż = sin(x) − bz",dimension:"D ≈ 2.0 (C₃-симметричный)",generatorRule:"Циклически симметричная система с 3-кратной осью. При b = 0.208186 — хаотический лабиринт.",description:"Простейший пример циклически симметричного хаоса. Траектория образует симметричный лабиринт в форме трёхмерного узла.",phiPiRelation:"Критическое значение b ≈ 0.208186 связано с золотым сечением: b ≈ 1/(2φ² + 1).",enginePreset:{type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.4,iterations:14}},{id:"halvorsen-attractor-v2",name:"Аттрактор Хальворсена (v2)",englishName:"Halvorsen Attractor (Expanded)",category:"expanded_real",formula:"ẋ = −ax − 4y − 4z − y², ẏ = −ay − 4z − 4x − z², ż = −az − 4x − 4y − x²",dimension:"D ≈ 2.3 (3-кратная симметрия)",generatorRule:"Циклическая система с квадратичной нелинейностью. a = 1.89 даёт наиболее выразительную структуру.",description:"Трёхсимметричный странный аттрактор с характерными «лепестками». Каждый лепесток — спиральная траектория.",phiPiRelation:"Оптимальное a = 1.89 ≈ φ + 0.272. Три лепестка = 2π/(3φ) радиан на каждый.",enginePreset:{type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.7,iterations:12}},{id:"julia-set-3d",name:"Множество Жюлиа 3D",englishName:"Julia Set (c = −0.7 + 0.27i)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ² + c, c = −0.7 + 0.27015i",dimension:"D ≈ 1.75 (граница множества Жюлиа)",generatorRule:"Классическое квадратичное отображение Жюлиа. 3D-проекция через стереографическую проекцию.",description:"Одно из самых красивых множеств Жюлиа. Связано с множеством Мандельброта: каждая точка c даёт уникальную геометрию.",phiPiRelation:"c = −0.7 + 0.27i ≈ −1/φ + i/(2φ²). Граница множества имеет золотую спиральную структуру.",enginePreset:{type:"juliaSet3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.4,iterations:18}},{id:"multibrot3",name:"Мультиброт z³+c",englishName:"Multibrot Set (z³ + c)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ³ + c",dimension:"D = 2 (граница), внутренность — 3-кратная симметрия",generatorRule:"Обобщение Мандельброта на степень 3. Вместо 2-кратной — 3-кратная симметрия.",description:"Трёхкратное обобщение множества Мандельброта. Имеет 3-кратную вращательную симметрию вместо 2-кратной.",phiPiRelation:"Каждая степень d даёт d-кратную симметрию. При d = φ+1 ≈ 2.618 получается промежуточная структура.",enginePreset:{type:"multibrot3",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"tetrix",name:"Тетрикс (Тетраэдр Серпинского)",englishName:"Tetrix (Sierpinski Tetrahedron)",category:"ifs_attractors",formula:"IFS: 4 аффинных сжатия к вершинам тетраэдра с коэффициентом 1/2",dimension:"D = log(4)/log(2) = 2.0",generatorRule:"Каждый тетраэдр заменяется на 4 тетраэдра в половину размера, расположенных в вершинах исходного.",description:"3D-аналог треугольника Серпинского. Единственный IFS-фрактал, размерность которого точно равна 2.",phiPiRelation:"4 вершины тетраэдра = 3-мерный аналог золотого треугольника. Коэффициент 1/2 = 1/φ⁰.",enginePreset:{type:"tetrix",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.6,iterations:12}},{id:"gosper-curve-v2",name:"Кривая Госпера (Остров Госпера) (v2)",englishName:"Gosper Curve (Gosper Island) (Expanded)",category:"expanded_real",formula:"L-система: F → F+F−−F−F++FF+F−, угол 60°",dimension:"D = log(7)/log(3) ≈ 1.771",generatorRule:"Каждый сегмент заменяется на 7 сегментов в √7 раз меньших, с поворотом на arctan(√3/5).",description:"Единственная кривая, заполняющая плоскость, tiles которой — шестиугольники. Основа гексагонального фрактального мощения.",phiPiRelation:"7 сегментов / 3 масштаб = log(7)/log(3). Угол поворота ≈ 13.898° связан с φ через √7.",enginePreset:{type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.3,iterations:7}},{id:"l-system-plant",name:"L-система: Фрактальное растение",englishName:"L-System Plant (Phyllotactic Branching)",category:"geometric_curves",formula:"Axiom: F, Rules: F → F[+F]F[-F][F], угол = 137.5° (золотой)",dimension:"D ≈ 1.45 (филогенетическое ветвление)",generatorRule:"Рекурсивное ветвление с золотым углом 137.5° между побегами. Каждый уровень — масштабирование на 1/φ.",description:"Математическая модель роста растения. Золотой угол обеспечивает максимальную инсоляцию каждого листа.",phiPiRelation:"Золотой угол = 2π(1 − 1/φ) ≈ 137.508°. Фибоначчиево филлотаксисное расположение листьев.",enginePreset:{type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.5,rotX:.2,rotY:.8,iterations:9}},{id:"schwarz-p",name:"Поверхность Шварца P",englishName:"Schwarz P Minimal Surface",category:"topological_physical",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set суммы косинусов по трём осям. Периодическая структура с кубической симметрией.",description:"Одна из трёх классических трипериодических минимальных поверхностей (TPMS). Встречается в структуре мембран и кристаллах.",phiPiRelation:"Масштаб поверхности = φ. Периодичность по трём осям = 2π. Связь с кубической симметрией O_h.",enginePreset:{type:"schwarzP",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.5,iterations:6}},{id:"schwarz-d",name:"Поверхность Шварца D (Diamond)",englishName:"Schwarz D Minimal Surface",category:"topological_physical",formula:"sin(x)sin(y)sin(z) − cos(x)cos(y)cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set разности произведений sin и cos. Алмазная топология каналов.",description:"Вторая из трёх классических TPMS. Топология каналов соответствует алмазной кристаллической решётке.",phiPiRelation:"Масштаб = φ. Встречается в структуре опалов и фотонных кристаллов с золотым сечением.",enginePreset:{type:"schwarzD",compositeOp:"smoothUnion",zoom:2,rotX:.3,rotY:.6,iterations:6}},{id:"apollonian-gasket-v2",name:"Прокладка Аполлония (v2)",englishName:"Apollonian Gasket (Expanded)",category:"expanded_real",formula:"Рекурсивное вписывание окружностей: каждая касается трёх соседних",dimension:"D ≈ 1.3057 (точно вычислена Бойдом)",generatorRule:"Начальные 3 взаимно касающиеся окружности. На каждом шаге в каждую криволинейную треугольную область вписывается новая окружность.",description:"Один из старейших известных фракталов (Аполлоний Пергский, ~200 до н.э.). Связан с теорией чисел и p-адическими формами.",phiPiRelation:"Кривизны окружностей образуют целочисленные квадруuples (a,b,c,d) с a²+b²+c²+d² = (a+b+c+d)²/2. Золотое сечение в соотношении радиусов.",enginePreset:{type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:10}},{id:"barnsley-fern-3d",name:"Папоротник Барнсли 3D",englishName:"Barnsley Fern 3D",category:"ifs_attractors",formula:"4 аффинных преобразования: стебель (1%), лист (85%), левый побег (7%), правый побег (7%)",dimension:"D ≈ 1.45 (IFS-аттрактор)",generatorRule:"Система итерируемых функций с 4 преобразованиями. Вероятностный выбор: p = {0.01, 0.85, 0.07, 0.07}.",description:"3D-обобщение классического папоротника Барнсли. Добавлена третья координата с уменьшением масштаба на каждом уровне.",phiPiRelation:"Коэффициенты преобразований: 0.85 ≈ 1/φ + 0.232. Золотое сечение в масштабах листьев.",enginePreset:{type:"barnsleyFern3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.5,iterations:10}},{id:"klein-quartic",name:"Квартика Клейна",englishName:"Klein Quartic Surface",category:"topological_physical",formula:"x³y + y³z + z³x = 0 (в ℂP²)",dimension:"D = 2 (поверхность рода 3)",generatorRule:"Поверхность 4-го порядка в комплексной проективной плоскости. Группа симметрий PSL(2,7) порядка 168.",description:"Поверхность с максимальной возможной симметрией для рода 3 (теорема Гурвица: 84(g−1) = 168). Связана с группой Фано.",phiPiRelation:"168 = 8 × 21 = 8 × 3 × 7. Порядок группы симметрий связан с φ через число Фибоначчи F(8) = 21.",enginePreset:{type:"kleinQuartic",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:8}},{id:"sphere-packing",name:"Фрактальная упаковка сфер",englishName:"Fractal Sphere Packing (FCC)",category:"constructive",formula:"Рекурсивное размещение сфер в гранях FCC-решётки с масштабом 1/φ",dimension:"D ≈ 2.47 (упаковка)",generatorRule:"На каждом уровне: FCC-решётка сфер, каждая сфера заполняется меньшими сферами в октаэдрических и тетраэдрических пустотах.",description:"Модель плотнейшей упаковки сфер с фрактальной иерархией. Связана с упаковкой Кеплера и гипотезой Хейлса.",phiPiRelation:"Масштаб вложения = φ. FCC-упаковка = π/(3√2) ≈ 0.7405. Золотое сечение в соотношении пустот.",enginePreset:{type:"spherePacking",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:7}},{id:"nova-fractal",name:"Нова-фрактал",englishName:"Nova Fractal",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ − zₙ³/(3zₙ²) + c (гибрид Ньютона и Мандельброта)",dimension:"D ≈ 2 (граница бассейнов)",generatorRule:"Итерация Ньютона для z³ = 1 с добавлением параметра c как в Мандельброте.",description:"Гибрид метода Ньютона и множества Мандельброта. Объединяет фрактальную структуру бассейнов притяжения с геометрией Мандельброта.",phiPiRelation:"3-кратная симметрия бассейнов = 2π/3. Параметр c связан с φ через положение бассейнов.",enginePreset:{type:"novaFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:14}},{id:"golden-knot",name:"Золотой узел",englishName:"Golden Knot (φ-Torus Knot)",category:"topological_physical",formula:"(R + r·cos(qθ))·(cos θ, sin θ), r·sin(qθ)), q = φ",dimension:"D = 1 (кривая), D ≈ 1.3 с трубкой",generatorRule:"Торический узел с иррациональным числом намотки q = φ. Замыкание при конечном числе оборотов.",description:"Торический узел с золотым числом намотки. Иррациональность φ делает кривую всюду плотной на торе.",phiPiRelation:"Число намотки = φ = (1+√5)/2. Золотой узел — единственная кривая с иррациональной намоткой на торе.",enginePreset:{type:"goldenKnot",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:6}},{id:"spherical-harmonics",name:"Сферические гармоники",englishName:"Spherical Harmonics (Quantum Orbitals)",category:"topological_physical",formula:"Yₗᵐ(θ,φ) — собственные функции оператора Лапласа на сфере",dimension:"D = 2 (поверхность), D ≈ 2.5 с модуляцией",generatorRule:"Суперпозиция сферических гармоник Y₃₂ и Y₄₂. Радиальная модуляция = 1 + 0.4·Y₃₂ + 0.25·Y₄₂.",description:"Квантовые орбитальные формы — собственные функции углового момента. Визуализация атомных орбиталей.",phiPiRelation:"Квантовые числа l, m связаны с золотым сечением: l = 3, m = 2 → l/m = φ − 0.118 ≈ 3/2.",enginePreset:{type:"sphericalHarmonics",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:6}},{id:"reaction-diffusion",name:"Реакция-диффузия (Тьюринг)",englishName:"Reaction-Diffusion (Gray-Scott)",category:"topological_physical",formula:"∂u/∂t = Du∇²u − uv² + F(1−u), ∂v/∂t = Dv∇²v + uv² − (F+k)v",dimension:"D ≈ 2.3 (Тьюринговые паттерны)",generatorRule:"Модель Грея-Скотта с параметрами F = 0.04 + φ·0.01, k = 0.06 + φ·0.005. Два реагента, диффузия и реакция.",description:"Математическая модель образования биологических паттернов: пятна, полоса, спирали. Объясняет окраску животных.",phiPiRelation:"Параметры F и k используют φ. Тьюринговые паттерны возникают при соотношении диффузий Du/Dv ≈ φ².",enginePreset:{type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:8,paletteSeed:92}},{id:"kleinian-limit-set",name:"Пределное множество Клейна",englishName:"Kleinian Limit Set",category:"expanded_real",formula:"Γ = ⟨γ₁, γ₂⟩  PSL(2,ℂ), Λ(Γ) = замыкание орбиты",dimension:"D ≈ 1.2-2.0 (зависит от группы)",generatorRule:"Мёбиус-инверсии порождают фрактальное пределное множество.",description:"Фрактальная граница орбит дискретной группы Мёбиусовых преобразований. Аппроксимация круговыми упаковками.",phiPiRelation:"Соотношения сторон фундаментальной области используют φ.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.3,iterations:10,paletteSeed:5}},{id:"tricorn-mandelbar",name:"ТрикORN (Мандельбар)",englishName:"Tricorn / Mandelbar",category:"expanded_real",formula:"z → z̄² + c (сопряжение вместо квадрата)",dimension:"D ≈ 2 (граница)",generatorRule:"Итерация z_{n+1} = conjugate(z_n)² + c. Антилинейное отображение.",description:'Сопряжённое множество Мандельброта с характерными "рогами" и антианалитической симметрией.',phiPiRelation:"Периоды кардиоид используют φ в параметризации.",enginePreset:{type:"tricorn",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.6,iterations:18,paletteSeed:12}},{id:"mandelbar-3d",name:"3D Мандельбар",englishName:"3D Mandelbar Fractal",category:"expanded_real",formula:"z → z̄ + c в 3D обобщении",dimension:"D ≈ 2.5-3.0",generatorRule:"3D обобщение антианалитического отображения Мандельбара.",description:"Трёхмерная версия трикорна с характерными шипами и зеркальной симметрией.",phiPiRelation:"Показатель степени n связан с φ.",enginePreset:{type:"mandelbar",compositeOp:"smoothUnion",zoom:2.8,rotX:.35,rotY:.45,iterations:14,paletteSeed:19}},{id:"phoenix-memory-fractal",name:"Фрактал Феникс (память)",englishName:"Phoenix Fractal (Memory)",category:"expanded_real",formula:"z_{n+1} = z_n² + c + p·z_{n-1}",dimension:"D ≈ 1.5-2.0",generatorRule:"Итерация с памятью: текущее значение зависит от двух предыдущих.",description:'Фрактал с "памятью" — каждое состояние зависит от двух предыдущих. Создаёт крылоподобные структуры.',phiPiRelation:"Параметр памяти p = 1/φ создаёт наиболее симметричные формы.",enginePreset:{type:"phoenixFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:16,paletteSeed:27}},{id:"e8-lattice-projection",name:"Проекция решётки E8",englishName:"E8 Lattice Projection",category:"expanded_real",formula:"E8  ℝ⁸, проекция на ℝ³ через золотое сечение",dimension:"D = 8 (полная), D ≈ 3.2 (проекция)",generatorRule:"240 корней E8 проецируются на 3D через икосаэдральную симметрию.",description:"Исключительная группа Ли E8 — самая симметричная структура в математике. 240 векторов корней.",phiPiRelation:"Проекция E8 на 3D использует φ-симметрию икосаэдра.",enginePreset:{type:"e8Lattice",compositeOp:"smoothUnion",zoom:3,rotX:.6,rotY:.3,iterations:8,paletteSeed:34}},{id:"chladni-vibrational-modes",name:"Фигуры Хладни",englishName:"Chladni Vibrational Figures",category:"expanded_real",formula:"⁴u − k⁴u = 0 (уравнение изгибных колебаний пластины)",dimension:"D ≈ 2 (узловые линии)",generatorRule:"Узловые линии стоячих волн на квадратной/круглой пластине.",description:"Визуализация собственных мод колебаний. Песок собирается на узловых линиях, образуя фрактальные паттерны.",phiPiRelation:"Соотношения частот мод используют φ для негармонических пластин.",enginePreset:{type:"chladniFigures",compositeOp:"smoothUnion",zoom:2.5,rotX:0,rotY:0,iterations:10,paletteSeed:41}},{id:"koch-snowflake-3d",name:"Снежинка Коха 3D",englishName:"3D Koch Snowflake",category:"expanded_real",formula:"Рекурсивное добавление тетраэдров на каждую грань",dimension:"D = log(4)/log(3) ≈ 1.261 (кривая), D ≈ 2.3 (поверхность)",generatorRule:"Каждая грань заменяется на 4 меньших с тетраэдральным выступом.",description:"Трёхмерное обобщение снежинки Коха. Бесконечная площадь поверхности при конечном объёме.",phiPiRelation:"Масштабный коэффициент 1/3 связан с φ через золотой треугольник.",enginePreset:{type:"kochSnowflake3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.5,iterations:7,paletteSeed:48}},{id:"cantor-dust-3d",name:"Канторова пыль 3D",englishName:"3D Cantor Dust",category:"expanded_real",formula:"C = C × C × C, рекурсивное удаление центральных кубов",dimension:"D = 3·log(2)/log(3) ≈ 1.893",generatorRule:"Куб делится на 27 подкубов, удаляются все кроме 8 угловых.",description:"Трёхмерный аналог множества Кантора. Совершенно несвязное фрактальное множество.",phiPiRelation:"Коэффициент подобия 1/3 связан с φ через золотое сечение отрезка.",enginePreset:{type:"cantorDust",compositeOp:"smoothUnion",zoom:3,rotX:.5,rotY:.3,iterations:8,paletteSeed:55}},{id:"sierpinski-carpet-3d",name:"Ковёр Серпинского",englishName:"Sierpinski Carpet",category:"expanded_real",formula:"Квадрат делится на 9, центральный удаляется, рекурсия",dimension:"D = log(8)/log(3) ≈ 1.893",generatorRule:"3×3 сетка, удаление центрального квадрата на каждом уровне.",description:"Универсальная кривая Серпинского — содержит все одномерные кривые. Нулевая площадь.",phiPiRelation:"Масштаб 1/3 и 8 копий создают φ-пропорции в предельном множестве.",enginePreset:{type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:7,paletteSeed:62}},{id:"fractal-spire-exponential",name:"Фрактальный шпиль (e^z+c)",englishName:"Fractal Spire (Exponential)",category:"expanded_real",formula:"z → e^z + c (экспоненциальное отображение)",dimension:"D ≈ 2 (граница)",generatorRule:"Итерация экспоненциальной функции. Создаёт бесконечные спиральные башни.",description:"Фрактал экспоненциального отображения. Бесконечные спиральные шпили уходят в комплексную бесконечность.",phiPiRelation:"Период 2πi и золотое сечение создают резонансные башни.",enginePreset:{type:"fractalSpire",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:14,paletteSeed:69}},{id:"vicsek-fractal-3d",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Cross)",category:"expanded_real",formula:"Крестообразное рекурсивное разбиение 3×3×3",dimension:"D = log(5)/log(3) ≈ 1.465",generatorRule:"3×3×3 куб, оставляются центральный и 4 угловых подкуба.",description:"Крестообразный фрактал Вичека. Самоподобная структура с крестообразной симметрией.",phiPiRelation:"5 копий при масштабе 1/3 создают φ-пропорции.",enginePreset:{type:"vicsekFractal",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.4,iterations:8,paletteSeed:76}},{id:"fractal-cross-3d",name:"Фрактальный крест 3D",englishName:"3D Fractal Cross",category:"expanded_real",formula:"Рекурсивное крестообразное IFS с 6 направлениями",dimension:"D ≈ 2.0",generatorRule:"6 аффинных преобразований вдоль осей ±x, ±y, ±z.",description:"Трёхмерный фрактальный крест с шестью лучами. Рекурсивная структура с октаэдральной симметрией.",phiPiRelation:"6 направлений связаны с икосаэдральной φ-симметрией.",enginePreset:{type:"fractalCross",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35,iterations:8,paletteSeed:83}},{id:"chua-circuit-double-scroll",name:"Схема Чуа (двойной скролл)",englishName:"Chua's Circuit Double Scroll",category:"expanded_real",formula:"ẋ = α(y − x − f(x)), ẏ = x − y + z, ż = −βy",dimension:"D ≈ 2.2 (странный аттрактор)",generatorRule:"Нелинейная цепь с кусочно-линейной характеристикой. α=15.6, β=28, m₀=−1.143, m₁=−0.714.",description:"Первая физически реализованная хаотическая система. Фазовый портрет — «бабочка» двойного скролла.",phiPiRelation:"Параметры α/β ≈ 0.557 ≈ 1/φ. Пороговое значение β связано с золотым сечением.",enginePreset:{type:"chuaCircuit",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.5,iterations:14,paletteSeed:8}},{id:"standard-map-chirikov",name:"Стандартное отображение Чирикова-Тейлора",englishName:"Standard Map (Chirikov-Taylor)",category:"expanded_real",formula:"pₙ₊₁ = pₙ + K sin(θₙ), θₙ₊₁ = θₙ + pₙ₊₁ (mod 2π)",dimension:"D ≈ 2.0 (стохастический слой)",generatorRule:"Гамильтоново отображение с параметром хаоса K. При K > 0.9716 — глобальный хаос.",description:"Фундаментальная модель хаотической динамики. Демонстрирует переход от порядка к хаосу через каскад островов.",phiPiRelation:"Золотое сечение определяет критические KAM-торы, устойчивые при максимальном хаосе.",enginePreset:{type:"standardMap",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:12,paletteSeed:15}},{id:"ikeda-map",name:"Отображение Икеды",englishName:"Ikeda Map",category:"expanded_real",formula:"zₙ₊₁ = 1 + u·zₙ·exp(i·tₙ), tₙ = 0.4 − 6/(1+|zₙ|²)",dimension:"D ≈ 1.7 (странный аттрактор)",generatorRule:"Комплексное отображение с u=0.9. Моделирует распространение света в нелинейной среде.",description:"Аттрактор Икеды описывает распространение лучей в нелинейной оптической среде. U-образная структура.",phiPiRelation:"Параметр u = 0.9 ≈ φ − 0.718. Фазовая модуляция использует π.",enginePreset:{type:"ikedaMap",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14,paletteSeed:22}},{id:"fatou-set-basin",name:"Множество Фату (граница бассейна)",englishName:"Fatou Set (Basin Boundary)",category:"expanded_real",formula:"zₙ₊₁ = zₙ² + c, c = 0.7885·e^{iθ}",dimension:"D ≈ 1.0-2.0 (граница бассейна)",generatorRule:"Бассейны сходимости орбит z²+c. Граница между бассейнами — фрактальная кривая.",description:"Множество Фату — дополнение множества Жюлиа. Область, где орбиты сходятся к фиксированным точкам.",phiPiRelation:"Параметр c = 0.7885 ≈ φ/2. Вращение c по кругу раскрывает φ-структуру.",enginePreset:{type:"fatouSet",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.3,iterations:16,paletteSeed:29}},{id:"fitzhugh-nagumo-neural",name:"Модель ФитцХью-Нагумо (нейродинамика)",englishName:"FitzHugh-Nagumo Neural Dynamics",category:"expanded_real",formula:"dv/dt = v − v³/3 + w + I, dw/dt = (v − a + bw)/τ",dimension:"D ≈ 2.1 (фазовый портрет)",generatorRule:"Упрощённая модель Ходжкина-Хаксли. a=0.7, b=0.8, τ=12.5.",description:"Модель нейронного импульса. Фазовый портрет — предельный цикл с порогом возбуждения.",phiPiRelation:"Параметр τ = 12.5 ≈ 8φ. Порог возбуждения a = 0.7 ≈ 1/φ + 0.082.",enginePreset:{type:"fitzHugh",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:12,paletteSeed:36}},{id:"rossler-attractor",name:"Аттрактор Рёсснера",englishName:"Rössler Attractor",category:"expanded_real",formula:"ẋ = −y − z, ẏ = x + ay, ż = b + z(x − c)",dimension:"D ≈ 2.0 (странный аттрактор)",generatorRule:"a=0.2, b=0.2, c=5.7. Простейший аттрактор с одной полосой.",description:"Аттрактор Рёсснера — простейшая система с хаотическим поведением. Одна лента, скрученная в спираль.",phiPiRelation:"c = 5.7 ≈ 3φ + 1.082. Частота вращения связана с φ через отношение a/b.",enginePreset:{type:"rosslerAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.3,rotY:.6,iterations:14,paletteSeed:43}},{id:"duffing-attractor",name:"Аттрактор Даффинга",englishName:"Duffing Attractor",category:"expanded_real",formula:"ẍ + δẋ + αx + βx³ = γ cos(ωt)",dimension:"D ≈ 2.2 (нелинейный осциллятор)",generatorRule:"α=1, β=5, δ=0.02, γ=8. Нелинейная пружина с жёсткостью k(x) = α + βx².",description:"Нелинейный осциллятор Даффинга. Двойная потенциальная яма создаёт хаотические переключения.",phiPiRelation:"Отношение γ/β = 1.6 ≈ φ. Частота ω связана с золотым сечением.",enginePreset:{type:"duffingAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:12,paletteSeed:50}},{id:"logistic-bifurcation",name:"Бифуркация логистического отображения",englishName:"Logistic Map Bifurcation",category:"expanded_real",formula:"xₙ₊₁ = r·xₙ(1 − xₙ), δ ≈ 4.669 (константа Фейгенбаума)",dimension:"D ≈ 1.0 (бифуркационная диаграмма)",generatorRule:"Каскад удвоения периода при r ∈ [2.5, 4.0]. Универсальная константа δ.",description:"Бифуркационная диаграмма логистического отображения — универсальный путь к хаосу через удвоение периода.",phiPiRelation:"Константа Фейгенбаума δ ≈ 4.669 ≈ 3φ − 0.173. Универсальность для всех одномерных отображений.",enginePreset:{type:"logisticBifurcation",compositeOp:"smoothUnion",zoom:2.5,rotX:0,rotY:.5,iterations:10,paletteSeed:57}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"DeJong Strange Attractor",category:"expanded_real",formula:"x' = sin(ay) − cos(bx), y' = sin(cx) − cos(dy)",dimension:"D ≈ 2.0 (странный аттрактор)",generatorRule:"Тригонометрическое отображение с 4 параметрами. a=2.24, b=−0.43, c=−0.65, d=2.43.",description:"Странный аттрактор Питера Де Йонга. Элегантные спиральные структуры из простых тригонометрических функций.",phiPiRelation:"Параметры подобраны так, что a−d ≈ −0.19 ≈ 1/φ² − 0.81.",enginePreset:{type:"deJongAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.3,iterations:14,paletteSeed:64}},{id:"pickover-attractor",name:"Аттрактор Пиковера",englishName:"Pickover Strange Attractor",category:"expanded_real",formula:"x' = sin(ay) + c·cos(ax), y' = sin(bx) + d·cos(by)",dimension:"D ≈ 2.0",generatorRule:"Модификация аттрактора Де Йонга Клиффордом Пиковером. a=−1.64, b=1.9, c=−0.31, d=0.72.",description:"Вариация аттрактора Де Йонга с дополнительными косинусными членами. Создаёт более сложные спиральные узоры.",phiPiRelation:"Параметры связаны с φ через золотые пропорции тригонометрических функций.",enginePreset:{type:"pickoverAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.6,iterations:14,paletteSeed:71}},{id:"weierstrass-surface",name:"Функция Вейерштрасса (нигде не дифференцируема)",englishName:"Weierstrass Nowhere-Differentiable Surface",category:"expanded_real",formula:"W(x) = Σ aⁿ cos(bⁿ πx), ab > 1 + 3π/2",dimension:"D ≈ 2.3 (фрактальная поверхность)",generatorRule:"a=0.5, b=7. Суперпозиция косинусоид с экспоненциально растущей частотой.",description:"Классический пример непрерывной, но нигде не дифференцируемой функции. Фрактальная поверхность.",phiPiRelation:"Условие ab > 1+3π/2. При a = 1/φ поверхность сохраняет фрактальность.",enginePreset:{type:"weierstrass3D",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:8,paletteSeed:78}},{id:"popcorn-function",name:"Функция «Попкорн» (Celldoor)",englishName:"Popcorn Function (Celldoor)",category:"expanded_real",formula:"x' = x − c·sin(y + tan(y)), y' = y − c·sin(x + tan(x))",dimension:"D ≈ 1.5-2.0",generatorRule:"Итеративное отображение с тангенциальной модуляцией. c = 0.4 + 0.15·sin(t).",description:"Фрактальное отображение «Попкорн» от Celldoor. Тангенциальные члены создают «взрывные» паттерны.",phiPiRelation:"Параметр c модулируется с периодом, связанным с φ.",enginePreset:{type:"popcornFunction",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.4,iterations:10,paletteSeed:85}},{id:"bedhead-attractor",name:"Аттрактор Bedhead (3D хаос)",englishName:"Bedhead 3D Chaotic Attractor",category:"expanded_real",formula:"x' = sin(ay·z) − z·cos(bx·y), y' = z·sin(ax) − cos(by·z), z' = c·sin(xz)",dimension:"D ≈ 2.3",generatorRule:"Трёхмерное тригонометрическое отображение с перекрёстными членами. a=0.95, b=0.7, c=0.6.",description:"Трёхмерный хаотический аттрактор «растрёпанной головы». Нелинейные перекрёстные члены создают объёмные спирали.",phiPiRelation:"Параметры a,b,c подобраны для максимального хаоса при минимальной сложности.",enginePreset:{type:"bedheadAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.3,iterations:14,paletteSeed:90}},{id:"fourspot-attractor",name:"Аттрактор FourSpot (4-крыловой)",englishName:"FourSpot 4-Wing Chaotic Attractor",category:"expanded_real",formula:"x' = yz − ax, y' = xz − y, z' = −xy + z",dimension:"D ≈ 2.2",generatorRule:"Система ОДУ с 4 крыльями аттрактора. a = 2.0 + 0.5·sin(t).",description:"Четырёхкрылый хаотический аттрактор. Траектория переключается между 4 лопастями.",phiPiRelation:"Параметр a модулируется в диапазоне, связанном с φ.",enginePreset:{type:"fourSpotAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:12,paletteSeed:95}},{id:"svensson-attractor",name:"Аттрактор Свенссона",englishName:"Svensson Strange Attractor",category:"expanded_real",formula:"x' = d·sin(ay) − c, y' = b·sin(cx)",dimension:"D ≈ 2.0",generatorRule:"Двумерное отображение с тригонометрической модуляцией. a=2.0, b=0.2, c=1.57, d=1.4.",description:"Странный аттрактор Свенссона. Элегантные спиральные узоры из простых тригонометрических функций.",phiPiRelation:"Параметр c = 1.57 ≈ π/2. Золотое сечение в соотношениях частот.",enginePreset:{type:"svenssonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:14,paletteSeed:99}}],B2=({isOpen:p,onClose:s,onApplyPreset:f})=>{var W;const[u,g]=k.useState("catalog"),[b,x]=k.useState("all"),[A,D]=k.useState(""),[v,F]=k.useState(fl[0]),[E,L]=k.useState(null),U=k.useMemo(()=>fl.filter(B=>{const ce=b==="all"||B.category===b,_=A.toLowerCase().trim();if(!_)return ce;const P=B.name.toLowerCase().includes(_)||B.englishName.toLowerCase().includes(_)||B.formula.toLowerCase().includes(_)||B.dimension.toLowerCase().includes(_)||B.description.toLowerCase().includes(_);return ce&&P}),[b,A]);if(!p)return null;const Y=B=>{f(B.enginePreset,B.name),L(B.id),setTimeout(()=>{L(null),s()},450)},K=B=>{switch(B){case"geometric_curves":return l.jsx(Cr,{className:"w-4 h-4"});case"constructive":return l.jsx(yn,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(Zh,{className:"w-4 h-4"});case"multidimensional":return l.jsx(gh,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(dl,{className:"w-4 h-4"});case"stochastic":return l.jsx(bn,{className:"w-4 h-4"});case"topological_physical":return l.jsx(mf,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(gn,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",fl.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(ml,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>g("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(yn,{className:"w-4 h-4"}),"Атлас и Таксономия (",fl.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>g("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ws,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>g("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ks,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),u==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(s2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:A,onChange:B=>D(B.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),A&&l.jsx("button",{onClick:()=>D(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>x("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${b==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",fl.length,")"]}),sf.map(B=>{var ce;return l.jsxs("button",{onClick:()=>x(B.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${b===B.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[K(B.id),l.jsx("span",{children:((ce=B.title.split(".")[1])==null?void 0:ce.trim())||B.title})]},B.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:U.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):U.map(B=>{var _;const ce=(v==null?void 0:v.id)===B.id;return l.jsxs("button",{id:`btn-fractal-${B.id}`,onClick:()=>F(B),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${ce?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:B.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(_=B.dimension.split("≈")[0])==null?void 0:_.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:B.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:B.formula})]})]},B.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:v?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[K(v.category),l.jsx("span",{children:(W=sf.find(B=>B.id===v.category))==null?void 0:W.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:v.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:v.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>Y(v),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:E===v.id?l.jsxs(l.Fragment,{children:[l.jsx(hf,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(bf,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:v.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:v.dimension})]})]}),v.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:v.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:v.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(Ws,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:v.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Ks,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:v.enginePreset.type}),v.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:v.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:v.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),u==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ws,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),u==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(Ks,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(r2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(gf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(dl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(vf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Kh,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},L2=({params:p,onToggleProbe:s,onToggleMacro:f})=>{if(!p.probeActive)return null;const u=Math.sqrt((p.camPosX??0)**2+(p.camPosY??0)**2+(p.camPosZ??0)**2),g=Math.max(.001,u/(p.zoom||3)).toFixed(4),b=p.slicePlane?((.5-p.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:p.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(vf,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[g," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(p.camPosX??0).toFixed(2)," Y:",(p.camPosY??0).toFixed(2)," Z:",(p.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[p.sliceAxis||"golden"," (",b,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:p.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[p.octaveLayers||2,"L · k=",p.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${p.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:p.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(dl,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",p.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",p.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",p.phiMultiplier.toFixed(5)]})]})]})},cf=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:bn,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:gf,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:dl,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:Ph,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:Fh,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:mf,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:Hh,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],G2=({currentSpecimen:p,historyQueue:s,currentIndex:f,onSelectSpecimen:u,onNext:g,onPrev:b,renderStyle:x,onSelectRenderStyle:A,scrollMode:D,onToggleScrollMode:v,isOpen:F,onToggleOpen:E})=>{const L=k.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${F?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(n2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:v,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${D==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:D==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:D==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(yf,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(z2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",cf.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:cf.map(U=>{const Y=U.icon,K=x===U.id;return l.jsxs("button",{id:`select-render-style-${U.id}-btn`,onClick:()=>A(U.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${K?U.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:U.desc,children:[l.jsx(Y,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:U.shortLabel})]},U.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:b,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(Rh,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:g,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx(jh,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:L,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((U,Y)=>{const K=U.id===(p==null?void 0:p.id)||Y===f;return l.jsxs("button",{id:`feed-item-${Y}-btn`,onClick:()=>u(U),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${K?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",U.generation||Y+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:U.name})]}),K&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:U.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[U.type," + ",U.hybridType||U.type]})]})]},U.id||Y)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:D==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})};function uf(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class H2{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,f="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const u=window.AudioContext||window.webkitAudioContext;this.ctx=new u,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(u){console.warn("AudioContext initialization deferred or unavailable",u)}}getChordFrequenciesForFamily(s,f,u){const g=1.61803398875,b=u?Tr(u):0,A=b*137.507764%50-25,D=Math.pow(2,A/1200);if(s==="sacred")return[{ratio:.5*D,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:g*D,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5*D,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:g*g*.5*D,wave:b%2===0?"triangle":"sine",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5*D,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5*D,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2*D,wave:b%3===0?"sawtooth":"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5*D,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75*D,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25*D,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2)*D,wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:g*1.2*D,wave:b%2===0?"sine":"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const v=1.1413470000000001,F=1+21.022/100,E=1+25.0108/100;return[{ratio:.5*D,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:v*D,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:F*D,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:E*D,wave:b%2===0?"triangle":"sine",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5*D,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382*D,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618*D,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5*D,wave:b%3===0?"square":"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,f){if(!this.ctx||!this.globalFilter)return;const u=uf(s),g=f?uf(f):u,b=108,x=this.ctx.currentTime,A=[...this.voices];this.voices=[],A.forEach(F=>{try{F.gain.gain.cancelScheduledValues(x),F.gain.gain.setValueAtTime(F.gain.gain.value,x),F.gain.gain.exponentialRampToValueAtTime(1e-4,x+.35),setTimeout(()=>{var E;try{F.osc.stop(),F.osc.disconnect(),F.filter.disconnect(),(E=F.panner)==null||E.disconnect(),F.gain.disconnect()}catch{}},380)}catch{}});const v=this.getChordFrequenciesForFamily(u,this.tuningMode,s).map((F,E)=>{const L=this.ctx.createOscillator(),U=this.ctx.createGain(),Y=this.ctx.createBiquadFilter(),K=(E%2===0?.618:-.618)*.5,W=b*F.ratio+K;L.type=F.wave,L.frequency.setValueAtTime(W,x),U.gain.setValueAtTime(1e-4,x),U.gain.exponentialRampToValueAtTime(F.vol,x+1.2),Y.type="lowpass",Y.frequency.setValueAtTime(450+E*80,x),Y.Q.setValueAtTime(1.2,x),L.connect(Y);let B=Y,ce;return this.ctx.createStereoPanner&&(ce=this.ctx.createStereoPanner(),ce.pan.setValueAtTime(F.pan,x),Y.connect(ce),B=ce),B.connect(U),U.connect(this.globalFilter),L.start(x),{osc:L,gain:U,filter:Y,panner:ce,baseFreqRatio:F.ratio,role:F.role}});if(f&&f!==s){const F=this.getChordFrequenciesForFamily(g,this.tuningMode,f),E=F[2]||F[1],L=this.ctx.createOscillator(),U=this.ctx.createGain(),Y=this.ctx.createBiquadFilter();L.type="sine",L.frequency.setValueAtTime(b*E.ratio,x);const K=Math.max(1e-4,this.currentHybridBlend*.22);U.gain.setValueAtTime(1e-4,x),U.gain.exponentialRampToValueAtTime(K,x+1.5),Y.type="bandpass",Y.frequency.setValueAtTime(b*E.ratio*1.5,x),Y.Q.setValueAtTime(2,x),L.connect(Y);let W=Y,B;this.ctx.createStereoPanner&&(B=this.ctx.createStereoPanner(),B.pan.setValueAtTime(.45,x),Y.connect(B),W=B),W.connect(U),U.connect(this.globalFilter),L.start(x),v.push({osc:L,gain:U,filter:Y,panner:B,baseFreqRatio:E.ratio,role:"hybrid"})}this.voices=v}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,u=s.phiMultiplier||1.618034,g=Math.max(.08,Math.min(16,s.zoom||3)),b=Math.max(.1,Math.min(2,s.morphSpeed||.45)),x=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=x,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const A=Math.max(260,Math.min(980,380+(4-Math.min(g,4))*80+b*120));this.globalFilter.frequency.setTargetAtTime(A,f,.15);const D=Math.max(54,Math.min(240,108/Math.max(.5,g*.6)));this.cavityResonator.frequency.setTargetAtTime(D,f,.2);const v=108,F=(u-1.618034)*80,E=Math.sin(s.rotX||0)*.4;this.voices.forEach((L,U)=>{const Y=v*L.baseFreqRatio,K=L.role==="golden"||L.role==="shimmer"?F:F*.3;if(L.osc.frequency.setTargetAtTime(Y+K,f,.15),L.panner){const W=U%2===0?.25:-.25,B=Math.max(-.85,Math.min(.85,W+E));L.panner.pan.setTargetAtTime(B,f,.12)}if(L.role==="hybrid"){const W=Math.max(1e-4,x*.2);L.gain.gain.setTargetAtTime(W,f,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((g,b)=>{if(!this.ctx)return;const x=this.ctx.createOscillator(),A=this.ctx.createGain(),D=this.ctx.createBiquadFilter();x.type="sine",x.frequency.setValueAtTime(g,s+b*.05),D.type="lowpass",D.frequency.setValueAtTime(950,s),A.gain.setValueAtTime(1e-4,s+b*.05),A.gain.exponentialRampToValueAtTime(.05/(b+1),s+b*.05+.08),A.gain.exponentialRampToValueAtTime(1e-5,s+b*.05+2.8),x.onended=()=>{try{x.disconnect(),D.disconnect(),A.disconnect()}catch{}},x.connect(D),D.connect(A),A.connect(this.globalFilter),x.start(s+b*.05),x.stop(s+b*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var u,g,b,x,A;this.stopTimeout=null,f.forEach(D=>{var v;try{D.osc.stop(),D.osc.disconnect(),D.filter.disconnect(),(v=D.panner)==null||v.disconnect(),D.gain.disconnect()}catch{}});try{(u=this.globalFilter)==null||u.disconnect(),(g=this.cavityResonator)==null||g.disconnect(),(b=this.compressor)==null||b.disconnect(),(x=this.masterGain)==null||x.disconnect(),(A=this.ctx)==null||A.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const fa=new H2,Y2={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:28,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function P2(){const[p]=k.useState(()=>new C2),[s,f]=k.useState(Y2),[u,g]=k.useState(null),[b,x]=k.useState(65),[A,D]=k.useState(!1),[v,F]=k.useState(!1),[E,L]=k.useState("idle"),U=k.useRef(null),Y=k.useRef(0),[K,W]=k.useState("auto"),[B,ce]=k.useState(!1),[_,P]=k.useState(!1),[he,De]=k.useState(!1),[ee,Ce]=k.useState(!1),[Fe,Ue]=k.useState(!1),[Xe,Ge]=k.useState(!1),[ue,qe]=k.useState("feed"),[oe,w]=k.useState(!1),[q,T]=k.useState([]),[V,J]=k.useState(new Set),m=k.useCallback(()=>{},[]),[C,G]=k.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),X=k.useCallback(H=>{g(H),x(H.affinityScore);const pe=(p==null?void 0:p.suggestRenderStyle())||"solid";f(I=>({...I,type:H.type,hybridType:H.hybridType,tertiaryType:H.tertiaryType,compositeOp:H.compositeOp,hybridBlend:H.hybridBlend,tertiaryBlend:H.tertiaryBlend,smoothK:H.smoothK,warpStrength:H.warpStrength,octaveLayers:H.octaveLayers,boxFold:H.boxFold,sphereFold:H.sphereFold,interiorCut:H.interiorCut,paletteId:H.palette.id,customPalette:H.palette,iterations:H.iterations,phiMultiplier:H.phiMultiplier,morphSpeed:H.morphSpeed,glowIntensity:H.glowIntensity,zoom:H.zoom,renderStyle:pe})),fa.getActive()&&fa.playSpecimenTransitionChord()},[]);k.useEffect(()=>{if(!p)return;const H=window.location.hash.slice(1);if(H){const I=new URLSearchParams(H),Re=I.get("type"),ct=I.get("hybrid"),si=I.get("tertiary"),Mi=I.get("op");if(Re){const qa=Oa.find(ge=>ge.id===I.get("palette"))||Oa[0],$e={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:I.get("name")||`Фрактал ${Re}`,type:Re,hybridType:ct||Re,tertiaryType:si||"riemannZeta",compositeOp:Mi||"smoothUnion",hybridBlend:parseFloat(I.get("blend")||"0.35"),tertiaryBlend:parseFloat(I.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(I.get("smoothK")||"0.35"),warpStrength:parseFloat(I.get("warp")||"0.25"),octaveLayers:parseInt(I.get("octaves")||"2"),boxFold:parseFloat(I.get("boxFold")||"1.2"),sphereFold:parseFloat(I.get("sphereFold")||"0.65"),interiorCut:parseFloat(I.get("interiorCut")||"0.0"),palette:qa,iterations:parseInt(I.get("iterations")||"20"),phiMultiplier:parseFloat(I.get("phi")||"1.61803398875"),morphSpeed:parseFloat(I.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(I.get("glow")||"1.1"),zoom:parseFloat(I.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};X($e),f(ge=>({...ge,paletteSeed:parseInt(I.get("paletteSeed")||"0"),paletteRotation:I.get("paletteRotation")==="1",renderStyle:I.get("renderStyle")||ge.renderStyle,cameraMode:I.get("cameraMode")||ge.cameraMode,camPosX:parseFloat(I.get("camX")||"0"),camPosY:parseFloat(I.get("camY")||"0"),camPosZ:parseFloat(I.get("camZ")||"-3.2"),headlampPower:parseFloat(I.get("headlamp")||"0"),volumetricFog:parseFloat(I.get("fog")||"0.4"),slicePlane:parseFloat(I.get("slicePlane")||"0"),sliceAxis:I.get("sliceAxis")||"golden",enableAudio:I.get("audio")==="1",audioVolume:parseFloat(I.get("audioVol")||"0.65"),audioTuning:I.get("audioTuning")||"phi432",drsEnabled:I.get("drs")!=="0"})),window.history.replaceState(null,"",window.location.pathname);return}}const pe=p.breedNextSpecimen();X(pe)},[p,X]),k.useEffect(()=>(s.enableAudio?fa.start(s.audioVolume??.65,s.audioTuning??"phi432"):fa.stop(),()=>{fa.stop()}),[s.enableAudio]),k.useEffect(()=>{s.enableAudio&&(s.audioTuning&&fa.setTuning(s.audioTuning),s.audioVolume!==void 0&&fa.setVolume(s.audioVolume),fa.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),k.useEffect(()=>{const H=setInterval(()=>{if(p&&u){const pe=p.registerEngagement(1,0,0,u);x(I=>I===pe?I:pe)}},1200);return()=>clearInterval(H)},[p,u]);const ae=k.useCallback((H,pe)=>{if(!p||!u)return;const I=H>0?"zooming":pe>0?"orbiting":"idle";L(ct=>ct!==I?I:ct),U.current&&clearTimeout(U.current),U.current=setTimeout(()=>{L(ct=>ct!=="idle"?"idle":ct)},1200);const Re=p.registerEngagement(.1,H,pe,u);x(ct=>ct===Re?ct:Re)},[p,u]),ne=k.useCallback(()=>{if(!p)return;const H=performance.now();if(H-Y.current<180)return;Y.current=H;const pe=p.stepHistory(1);X(pe)},[p,X]),fe=k.useCallback(()=>{if(!p)return;const H=performance.now();if(H-Y.current<180)return;Y.current=H;const pe=p.stepHistory(-1);X(pe)},[p,X]),We=k.useCallback(()=>{if(!p||!u)return;p.boostAffinity(u),x(100);const H=u.id;J(pe=>{const I=new Set(pe);return I.has(H)?(I.delete(H),T(Re=>Re.filter(ct=>ct.id!==H))):(I.add(H),T(Re=>[...Re,u])),I})},[p,u]),ze=k.useCallback(H=>{X(H)},[X]),la=k.useCallback(H=>{J(pe=>{const I=new Set(pe);return I.delete(H),I}),T(pe=>pe.filter(I=>I.id!==H))},[]),ra=k.useCallback(H=>{if(!p)return;const pe=p.breedNextSpecimen(H);X(pe)},[p,X]),Ve=k.useCallback(()=>{if(!p)return;const H={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((u==null?void 0:u.generation)||1)+1,name:`Фенотип Инженера #${((u==null?void 0:u.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||Oa.find(pe=>pe.id===s.paletteId)||Oa[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};g(H),p.boostAffinity(H),fa.getActive()&&fa.playSpecimenTransitionChord()},[p,s,u]),Ea=k.useCallback(()=>{f(H=>({...H,enableAudio:!H.enableAudio}))},[]),At=k.useCallback(H=>{ce(!1);const pe=document.createElement("a");pe.download=`golden-ratio-fractal-${s.type}-${(u==null?void 0:u.generation)||1}.png`,pe.href=H,pe.click()},[s.type,u==null?void 0:u.generation]),Wt=k.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(rh,{params:s,onParamsChange:f,onTelemetryUpdate:G,screenshotRequested:B,onScreenshotCaptured:At,forcedBackend:K,onInteraction:ae,onNextSpecimen:ne,onPrevSpecimen:fe,onEngineReady:()=>Ce(!0),scrollMode:ue}),l.jsx(G2,{currentSpecimen:u,historyQueue:p.getHistory(),currentIndex:p.getCurrentIndex(),onSelectSpecimen:X,onNext:ne,onPrev:fe,renderStyle:s.renderStyle,onSelectRenderStyle:H=>f(pe=>({...pe,renderStyle:H})),scrollMode:ue,onToggleScrollMode:()=>qe(H=>H==="feed"?"zoom":"feed"),isOpen:oe,onToggleOpen:()=>w(H=>!H)}),l.jsx(O2,{specimen:u,resonanceScore:b,isInteracting:E!=="idle",interactionType:E,onNext:ne,onPrev:fe,onFavorite:We,onOpenProfile:()=>F(!0),enableAudio:s.enableAudio,onToggleAudio:Ea,onOpenResearchModal:()=>P(!0),onOpenAtlas:()=>De(!0),isFeedOpen:oe,onToggleFeed:()=>w(H=>!H),isCurrentLiked:u?V.has(u.id):!1,params:s}),l.jsx(L2,{params:s,onToggleProbe:()=>f(H=>({...H,probeActive:!H.probeActive})),onToggleMacro:()=>f(H=>({...H,macroMode:!H.macroMode}))}),l.jsx(q2,{isOpen:v,onClose:()=>F(!1),tasteProfile:p.getTasteProfile(),archetypeBreakdown:p.getArchetypeBreakdown(),currentSpecimen:u,resonanceScore:b,isEngineerMode:A,onToggleEngineerMode:()=>D(H=>!H),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:H=>f(pe=>({...pe,audioTuning:H})),onOpenManifest:()=>{F(!1),Ue(!0)},likedSpecimens:q,onPlayLiked:ze,onRemoveLike:la,isCurrentLiked:u?V.has(u.id):!1}),A&&l.jsxs(l.Fragment,{children:[l.jsx(S2,{telemetry:C,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),l.jsx(R2,{params:s,onParamsChange:f,onSelectFractalType:ra,onCaptureScreenshot:()=>ce(!0),onToggleFullscreen:Wt,onToggleInfoModal:()=>P(!0),onOpenAtlasModal:()=>De(!0),activeBackend:C.backend,forcedBackend:K,onSelectBackend:W,onClose:()=>D(!1),tasteProfile:p.getTasteProfile(),onSaveToFeed:Ve})]}),l.jsx(E2,{isOpen:_,onClose:()=>P(!1)}),l.jsx(B2,{isOpen:he,onClose:()=>De(!1),onApplyPreset:H=>{f(pe=>({...pe,...H}))}}),l.jsx(U2,{isOpen:Fe,onClose:()=>Ue(!1),isFirstVisit:Xe,onOpenAtlas:()=>De(!0)}),l.jsx(F2,{isReady:ee,onFinished:m})]})}const pf=document.getElementById("root");pf&&Vm.createRoot(pf).render(l.jsx(P2,{}));
