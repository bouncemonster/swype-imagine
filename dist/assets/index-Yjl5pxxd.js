(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))u(v);new MutationObserver(v=>{for(const b of v)if(b.type==="childList")for(const x of b.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function d(v){const b={};return v.integrity&&(b.integrity=v.integrity),v.referrerPolicy&&(b.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?b.credentials="include":v.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(v){if(v.ep)return;v.ep=!0;const b=d(v);fetch(v.href,b)}})();function Em(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Ys={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function qm(){if(Vp)return ul;Vp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(u,v,b){var x=null;if(b!==void 0&&(x=""+b),v.key!==void 0&&(x=""+v.key),"key"in v){b={};for(var A in v)A!=="key"&&(b[A]=v[A])}else b=v;return v=b.ref,{$$typeof:p,type:u,key:x,ref:v!==void 0?v:null,props:b}}return ul.Fragment=s,ul.jsx=d,ul.jsxs=d,ul}var Zp;function Fm(){return Zp||(Zp=1,Ys.exports=qm()),Ys.exports}var l=Fm(),Ps={exports:{}},pl={},Xs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Um(){return Qp||(Qp=1,(function(p){function s(D,q){var T=D.length;D.push(q);e:for(;0<T;){var V=T-1>>>1,ee=D[V];if(0<v(ee,q))D[V]=q,D[T]=ee,T=V;else break e}}function d(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var q=D[0],T=D.pop();if(T!==q){D[0]=T;e:for(var V=0,ee=D.length,m=ee>>>1;V<m;){var C=2*(V+1)-1,G=D[C],X=C+1,ne=D[X];if(0>v(G,T))X<ee&&0>v(ne,G)?(D[V]=ne,D[X]=T,V=X):(D[V]=G,D[C]=T,V=C);else if(X<ee&&0>v(ne,T))D[V]=ne,D[X]=T,V=X;else break e}}return q}function v(D,q){var T=D.sortIndex-q.sortIndex;return T!==0?T:D.id-q.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;p.unstable_now=function(){return b.now()}}else{var x=Date,A=x.now();p.unstable_now=function(){return x.now()-A}}var N=[],g=[],F=1,E=null,L=3,U=!1,Y=!1,J=!1,W=!1,B=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function P(D){for(var q=d(g);q!==null;){if(q.callback===null)u(g);else if(q.startTime<=D)u(g),q.sortIndex=q.expirationTime,s(N,q);else break;q=d(g)}}function me(D){if(J=!1,P(D),!Y)if(d(N)!==null)Y=!0,Ne||(Ne=!0,Le());else{var q=d(g);q!==null&&K(me,q.startTime-D)}}var Ne=!1,te=-1,Re=5,qe=-1;function Fe(){return W?!0:!(p.unstable_now()-qe<Re)}function Pe(){if(W=!1,Ne){var D=p.unstable_now();qe=D;var q=!0;try{e:{Y=!1,J&&(J=!1,ce(te),te=-1),U=!0;var T=L;try{t:{for(P(D),E=d(N);E!==null&&!(E.expirationTime>D&&Fe());){var V=E.callback;if(typeof V=="function"){E.callback=null,L=E.priorityLevel;var ee=V(E.expirationTime<=D);if(D=p.unstable_now(),typeof ee=="function"){E.callback=ee,P(D),q=!0;break t}E===d(N)&&u(N),P(D)}else u(N);E=d(N)}if(E!==null)q=!0;else{var m=d(g);m!==null&&K(me,m.startTime-D),q=!1}}break e}finally{E=null,L=T,U=!1}q=void 0}}finally{q?Le():Ne=!1}}}var Le;if(typeof _=="function")Le=function(){_(Pe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ie=$e.port2;$e.port1.onmessage=Pe,Le=function(){Ie.postMessage(null)}}else Le=function(){B(Pe,0)};function K(D,q){te=B(function(){D(p.unstable_now())},q)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(D){D.callback=null},p.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<D?Math.floor(1e3/D):5},p.unstable_getCurrentPriorityLevel=function(){return L},p.unstable_next=function(D){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var T=L;L=q;try{return D()}finally{L=T}},p.unstable_requestPaint=function(){W=!0},p.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var T=L;L=D;try{return q()}finally{L=T}},p.unstable_scheduleCallback=function(D,q,T){var V=p.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?V+T:V):T=V,D){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,D={id:F++,callback:q,priorityLevel:D,startTime:T,expirationTime:ee,sortIndex:-1},T>V?(D.sortIndex=T,s(g,D),d(N)===null&&D===d(g)&&(J?(ce(te),te=-1):J=!0,K(me,T-V))):(D.sortIndex=ee,s(N,D),Y||U||(Y=!0,Ne||(Ne=!0,Le()))),D},p.unstable_shouldYield=Fe,p.unstable_wrapCallback=function(D){var q=L;return function(){var T=L;L=q;try{return D.apply(this,arguments)}finally{L=T}}}})(Vs)),Vs}var Kp;function Bm(){return Kp||(Kp=1,Xs.exports=Um()),Xs.exports}var Zs={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Lm(){if(Jp)return ie;Jp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),x=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),L=Symbol.iterator;function U(m){return m===null||typeof m!="object"?null:(m=L&&m[L]||m["@@iterator"],typeof m=="function"?m:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,W={};function B(m,C,G){this.props=m,this.context=C,this.refs=W,this.updater=G||Y}B.prototype.isReactComponent={},B.prototype.setState=function(m,C){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,C,"setState")},B.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ce(){}ce.prototype=B.prototype;function _(m,C,G){this.props=m,this.context=C,this.refs=W,this.updater=G||Y}var P=_.prototype=new ce;P.constructor=_,J(P,B.prototype),P.isPureReactComponent=!0;var me=Array.isArray;function Ne(){}var te={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function qe(m,C,G){var X=G.ref;return{$$typeof:p,type:m,key:C,ref:X!==void 0?X:null,props:G}}function Fe(m,C){return qe(m.type,C,m.props)}function Pe(m){return typeof m=="object"&&m!==null&&m.$$typeof===p}function Le(m){var C={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return C[G]})}var $e=/\/+/g;function Ie(m,C){return typeof m=="object"&&m!==null&&m.key!=null?Le(""+m.key):C.toString(36)}function K(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Ne,Ne):(m.status="pending",m.then(function(C){m.status==="pending"&&(m.status="fulfilled",m.value=C)},function(C){m.status==="pending"&&(m.status="rejected",m.reason=C)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function D(m,C,G,X,ne){var le=typeof m;(le==="undefined"||le==="boolean")&&(m=null);var pe=!1;if(m===null)pe=!0;else switch(le){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(m.$$typeof){case p:case s:pe=!0;break;case F:return pe=m._init,D(pe(m._payload),C,G,X,ne)}}if(pe)return ne=ne(m),pe=X===""?"."+Ie(m,0):X,me(ne)?(G="",pe!=null&&(G=pe.replace($e,"$&/")+"/"),D(ne,C,G,"",function(aa){return aa})):ne!=null&&(Pe(ne)&&(ne=Fe(ne,G+(ne.key==null||m&&m.key===ne.key?"":(""+ne.key).replace($e,"$&/")+"/")+pe)),C.push(ne)),1;pe=0;var Ve=X===""?".":X+":";if(me(m))for(var _e=0;_e<m.length;_e++)X=m[_e],le=Ve+Ie(X,_e),pe+=D(X,C,G,le,ne);else if(_e=U(m),typeof _e=="function")for(m=_e.call(m),_e=0;!(X=m.next()).done;)X=X.value,le=Ve+Ie(X,_e++),pe+=D(X,C,G,le,ne);else if(le==="object"){if(typeof m.then=="function")return D(K(m),C,G,X,ne);throw C=String(m),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return pe}function q(m,C,G){if(m==null)return m;var X=[],ne=0;return D(m,X,"","",function(le){return C.call(G,le,ne++)}),X}function T(m){if(m._status===-1){var C=m._result;C=C(),C.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=C)}if(m._status===1)return m._result.default;throw m._result}var V=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ee={map:q,forEach:function(m,C,G){q(m,function(){C.apply(this,arguments)},G)},count:function(m){var C=0;return q(m,function(){C++}),C},toArray:function(m){return q(m,function(C){return C})||[]},only:function(m){if(!Pe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return ie.Activity=E,ie.Children=ee,ie.Component=B,ie.Fragment=d,ie.Profiler=v,ie.PureComponent=_,ie.StrictMode=u,ie.Suspense=N,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ie.__COMPILER_RUNTIME={__proto__:null,c:function(m){return te.H.useMemoCache(m)}},ie.cache=function(m){return function(){return m.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(m,C,G){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var X=J({},m.props),ne=m.key;if(C!=null)for(le in C.key!==void 0&&(ne=""+C.key),C)!Re.call(C,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&C.ref===void 0||(X[le]=C[le]);var le=arguments.length-2;if(le===1)X.children=G;else if(1<le){for(var pe=Array(le),Ve=0;Ve<le;Ve++)pe[Ve]=arguments[Ve+2];X.children=pe}return qe(m.type,ne,X)},ie.createContext=function(m){return m={$$typeof:x,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:b,_context:m},m},ie.createElement=function(m,C,G){var X,ne={},le=null;if(C!=null)for(X in C.key!==void 0&&(le=""+C.key),C)Re.call(C,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ne[X]=C[X]);var pe=arguments.length-2;if(pe===1)ne.children=G;else if(1<pe){for(var Ve=Array(pe),_e=0;_e<pe;_e++)Ve[_e]=arguments[_e+2];ne.children=Ve}if(m&&m.defaultProps)for(X in pe=m.defaultProps,pe)ne[X]===void 0&&(ne[X]=pe[X]);return qe(m,le,ne)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:A,render:m}},ie.isValidElement=Pe,ie.lazy=function(m){return{$$typeof:F,_payload:{_status:-1,_result:m},_init:T}},ie.memo=function(m,C){return{$$typeof:g,type:m,compare:C===void 0?null:C}},ie.startTransition=function(m){var C=te.T,G={};te.T=G;try{var X=m(),ne=te.S;ne!==null&&ne(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ne,V)}catch(le){V(le)}finally{C!==null&&G.types!==null&&(C.types=G.types),te.T=C}},ie.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ie.use=function(m){return te.H.use(m)},ie.useActionState=function(m,C,G){return te.H.useActionState(m,C,G)},ie.useCallback=function(m,C){return te.H.useCallback(m,C)},ie.useContext=function(m){return te.H.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m,C){return te.H.useDeferredValue(m,C)},ie.useEffect=function(m,C){return te.H.useEffect(m,C)},ie.useEffectEvent=function(m){return te.H.useEffectEvent(m)},ie.useId=function(){return te.H.useId()},ie.useImperativeHandle=function(m,C,G){return te.H.useImperativeHandle(m,C,G)},ie.useInsertionEffect=function(m,C){return te.H.useInsertionEffect(m,C)},ie.useLayoutEffect=function(m,C){return te.H.useLayoutEffect(m,C)},ie.useMemo=function(m,C){return te.H.useMemo(m,C)},ie.useOptimistic=function(m,C){return te.H.useOptimistic(m,C)},ie.useReducer=function(m,C,G){return te.H.useReducer(m,C,G)},ie.useRef=function(m){return te.H.useRef(m)},ie.useState=function(m){return te.H.useState(m)},ie.useSyncExternalStore=function(m,C,G){return te.H.useSyncExternalStore(m,C,G)},ie.useTransition=function(){return te.H.useTransition()},ie.version="19.2.8",ie}var Wp;function Is(){return Wp||(Wp=1,Zs.exports=Lm()),Zs.exports}var Qs={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Gm(){if($p)return gt;$p=1;var p=Is();function s(N){var g="https://react.dev/errors/"+N;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)g+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+N+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},v=Symbol.for("react.portal");function b(N,g,F){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:E==null?null:""+E,children:N,containerInfo:g,implementation:F}}var x=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(N,g){if(N==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,gt.createPortal=function(N,g){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return b(N,g,null,F)},gt.flushSync=function(N){var g=x.T,F=u.p;try{if(x.T=null,u.p=2,N)return N()}finally{x.T=g,u.p=F,u.d.f()}},gt.preconnect=function(N,g){typeof N=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(N,g))},gt.prefetchDNS=function(N){typeof N=="string"&&u.d.D(N)},gt.preinit=function(N,g){if(typeof N=="string"&&g&&typeof g.as=="string"){var F=g.as,E=A(F,g.crossOrigin),L=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;F==="style"?u.d.S(N,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:L,fetchPriority:U}):F==="script"&&u.d.X(N,{crossOrigin:E,integrity:L,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},gt.preinitModule=function(N,g){if(typeof N=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var F=A(g.as,g.crossOrigin);u.d.M(N,{crossOrigin:F,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(N)},gt.preload=function(N,g){if(typeof N=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var F=g.as,E=A(F,g.crossOrigin);u.d.L(N,F,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},gt.preloadModule=function(N,g){if(typeof N=="string")if(g){var F=A(g.as,g.crossOrigin);u.d.m(N,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:F,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(N)},gt.requestFormReset=function(N){u.d.r(N)},gt.unstable_batchedUpdates=function(N,g){return N(g)},gt.useFormState=function(N,g,F){return x.H.useFormState(N,g,F)},gt.useFormStatus=function(){return x.H.useHostTransitionStatus()},gt.version="19.2.8",gt}var Ip;function Hm(){if(Ip)return Qs.exports;Ip=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Qs.exports=Gm(),Qs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Ym(){if(ed)return pl;ed=1;var p=Bm(),s=Is(),d=Hm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(b(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return N(i),e;if(r===n)return N(i),t;r=r.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,c=i.child;c;){if(c===a){o=!0,a=i,n=r;break}if(c===n){o=!0,n=i,a=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===a){o=!0,a=r,n=i;break}if(c===n){o=!0,n=r,a=i;break}c=c.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,L=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),qe=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case B:return"Profiler";case W:return"StrictMode";case me:return"Suspense";case Ne:return"SuspenseList";case qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case _:return e.displayName||"Context";case ce:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Ie(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Ie(e(t))}catch{}}return null}var K=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T={pending:!1,data:null,method:null,action:null},V=[],ee=-1;function m(e){return{current:e}}function C(e){0>ee||(e.current=V[ee],V[ee]=null,ee--)}function G(e,t){ee++,V[ee]=e.current,e.current=t}var X=m(null),ne=m(null),le=m(null),pe=m(null);function Ve(e,t){switch(G(le,t),G(ne,e),G(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hp(t),e=xp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(X),G(X,e)}function _e(){C(X),C(ne),C(le)}function aa(e){e.memoizedState!==null&&G(pe,e);var t=X.current,a=xp(t,e.type);t!==a&&(G(ne,e),G(X,a))}function na(e){ne.current===e&&(C(X),C(ne)),pe.current===e&&(C(pe),rl._currentValue=T)}var Xe,Oa;function At(e){if(Xe===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Oa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+e+Oa}var Jt=!1;function H(e,t){if(!e||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(j){var w=j}Reflect.construct(e,[],O)}else{try{O.call()}catch(j){w=j}e.call(O.prototype)}}else{try{throw Error()}catch(j){w=j}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(j){if(j&&w&&typeof j.stack=="string")return[j.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],c=r[1];if(o&&c){var f=o.split(`
`),S=c.split(`
`);for(i=n=0;n<f.length&&!f[n].includes("DetermineComponentFrameRoot");)n++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(n===f.length||i===S.length)for(n=f.length-1,i=S.length-1;1<=n&&0<=i&&f[n]!==S[i];)i--;for(;1<=n&&0<=i;n--,i--)if(f[n]!==S[i]){if(n!==1||i!==1)do if(n--,i--,0>i||f[n]!==S[i]){var M=`
`+f[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=i);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?At(a):""}function ue(e,t){switch(e.tag){case 26:case 27:case 5:return At(e.type);case 16:return At("Lazy");case 13:return e.child!==t&&t!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return H(e.type,!1);case 11:return H(e.type.render,!1);case 1:return H(e.type,!0);case 31:return At("Activity");default:return""}}function $(e){try{var t="",a=null;do t+=ue(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ke=Object.prototype.hasOwnProperty,ot=p.unstable_scheduleCallback,sn=p.unstable_cancelCallback,Cn=p.unstable_shouldYield,Ea=p.unstable_requestPaint,it=p.unstable_now,ge=p.unstable_getCurrentPriorityLevel,Ke=p.unstable_ImmediatePriority,Ge=p.unstable_UserBlockingPriority,st=p.unstable_NormalPriority,pt=p.unstable_LowPriority,Oe=p.unstable_IdlePriority,ia=p.log,la=p.unstable_setDisableYieldValue,Tt=null,je=null;function yt(e){if(typeof ia=="function"&&la(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Tt,e)}catch{}}var Ae=Math.clz32?Math.clz32:Rr,cn=Math.log,Cr=Math.LN2;function Rr(e){return e>>>=0,e===0?32:31-(cn(e)/Cr|0)|0}var un=256,pn=262144,dn=4194304;function ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~r,n!==0?i=ze(n):(o&=c,o!==0?i=ze(o):a||(a=c&~e,a!==0&&(i=ze(a))))):(c=n&~r,c!==0?i=ze(c):o!==0?i=ze(o):a||(a=n&~e,a!==0&&(i=ze(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function dt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $t(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=dn;return dn<<=1,(dn&62914560)===0&&(dn=4194304),e}function da(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ra(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rn(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,S=e.hiddenUpdates;for(a=o&~a;0<a;){var M=31-Ae(a),O=1<<M;c[M]=0,f[M]=-1;var w=S[M];if(w!==null)for(S[M]=null,M=0;M<w.length;M++){var j=w[M];j!==null&&(j.lane&=-536870913)}a&=~O}n!==0&&Mt(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Mt(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Ae(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function fa(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Ae(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function fn(e,t){var a=t&-t;return a=(a&42)!==0?1:lt(a),(a&(e.suspendedLanes|t))!==0?0:a}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function He(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ct(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Bp(e.type))}function ma(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var qa=Math.random().toString(36).slice(2),ft="__reactFiber$"+qa,_t="__reactProps$"+qa,kn="__reactContainer$"+qa,kr="__reactEvents$"+qa,Sd="__reactListeners$"+qa,Nd="__reactHandles$"+qa,ac="__reactResources$"+qa,_i="__reactMarker$"+qa;function Or(e){delete e[ft],delete e[_t],delete e[kr],delete e[Sd],delete e[Nd]}function On(e){var t=e[ft];if(t)return t;for(var a=e.parentNode;a;){if(t=a[kn]||a[ft]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Sp(e);e!==null;){if(a=e[ft])return a;e=Sp(e)}return t}e=a,a=e.parentNode}return null}function En(e){if(e=e[ft]||e[kn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function qn(e){var t=e[ac];return t||(t=e[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[_i]=!0}var nc=new Set,ic={};function mn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(ic[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var Dd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lc={},rc={};function wd(e){return ke.call(rc,e)?!0:ke.call(lc,e)?!1:Dd.test(e)?rc[e]=!0:(lc[e]=!0,!1)}function hl(e,t,a){if(wd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function xl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ha(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){if(!e._valueTracker){var t=oc(e)?"checked":"value";e._valueTracker=jd(e,t,""+e[t])}}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=oc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ad=/[\n"\\]/g;function Gt(e){return e.replace(Ad,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qr(e,t,a,n,i,r,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Fr(e,o,Lt(t)):a!=null?Fr(e,o,Lt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Lt(c):e.removeAttribute("name")}function cc(e,t,a,n,i,r,o,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Er(e);return}a=a!=null?""+Lt(a):"",t=t!=null?""+Lt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Er(e)}function Fr(e,t,a){t==="number"&&vl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Un(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Lt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uc(e,t,a){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Lt(a):""}function pc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(K(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Lt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Er(e)}function Bn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Td=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Td.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&dc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&dc(e,r,t[r])}function Ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return Cd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xa(){}var Br=null;function Lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ln=null,Gn=null;function mc(e){var t=En(e);if(t&&(e=t.stateNode)){var a=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(qr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[_t]||null;if(!i)throw Error(u(90));qr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&sc(n)}break e;case"textarea":uc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Un(e,!!a.multiple,t,!1)}}}var Gr=!1;function hc(e,t,a){if(Gr)return e(t,a);Gr=!0;try{var n=e(t);return n}finally{if(Gr=!1,(Ln!==null||Gn!==null)&&(lr(),Ln&&(t=Ln,e=Gn,Gn=Ln=null,mc(t),e)))for(t=0;t<e.length;t++)mc(e[t])}}function Si(e,t){var a=e.stateNode;if(a===null)return null;var n=a[_t]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=!1;if(va)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Hr=!1}var Fa=null,Yr=null,yl=null;function xc(){if(yl)return yl;var e,t=Yr,a=t.length,n,i="value"in Fa?Fa.value:Fa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return yl=i.slice(e,1<n?1-n:void 0)}function bl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function vc(){return!1}function zt(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?_l:vc,this.isPropagationStopped=vc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=zt(hn),Di=E({},hn,{view:0,detail:0}),Rd=zt(Di),Pr,Xr,wi,Sl=E({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Pr=e.screenX-wi.screenX,Xr=e.screenY-wi.screenY):Xr=Pr=0,wi=e),Pr)},movementY:function(e){return"movementY"in e?e.movementY:Xr}}),gc=zt(Sl),kd=E({},Sl,{dataTransfer:0}),Od=zt(kd),Ed=E({},Di,{relatedTarget:0}),Vr=zt(Ed),qd=E({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=zt(qd),Ud=E({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=zt(Ud),Ld=E({},hn,{data:0}),yc=zt(Ld),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yd[e])?!!t[e]:!1}function Zr(){return Pd}var Xd=E({},Di,{key:function(e){if(e.key){var t=Gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vd=zt(Xd),Zd=E({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=zt(Zd),Qd=E({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),Kd=zt(Qd),Jd=E({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=zt(Jd),$d=E({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=zt($d),ef=E({},hn,{newState:0,oldState:0}),tf=zt(ef),af=[9,13,27,32],Qr=va&&"CompositionEvent"in window,ji=null;va&&"documentMode"in document&&(ji=document.documentMode);var nf=va&&"TextEvent"in window&&!ji,_c=va&&(!Qr||ji&&8<ji&&11>=ji),zc=" ",Sc=!1;function Nc(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function lf(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Sc=!0,zc);case"textInput":return e=t.data,e===zc&&Sc?null:e;default:return null}}function rf(e,t){if(Hn)return e==="compositionend"||!Qr&&Nc(e,t)?(e=xc(),yl=Yr=Fa=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!of[e.type]:t==="textarea"}function jc(e,t,a,n){Ln?Gn?Gn.push(n):Gn=[n]:Ln=n,t=dr(t,"onChange"),0<t.length&&(a=new zl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ai=null,Ti=null;function sf(e){cp(e,0)}function Nl(e){var t=zi(e);if(sc(t))return e}function Ac(e,t){if(e==="change")return t}var Tc=!1;if(va){var Kr;if(va){var Jr="oninput"in document;if(!Jr){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Jr=typeof Mc.oninput=="function"}Kr=Jr}else Kr=!1;Tc=Kr&&(!document.documentMode||9<document.documentMode)}function Cc(){Ai&&(Ai.detachEvent("onpropertychange",Rc),Ti=Ai=null)}function Rc(e){if(e.propertyName==="value"&&Nl(Ti)){var t=[];jc(t,Ti,e,Lr(e)),hc(sf,t)}}function cf(e,t,a){e==="focusin"?(Cc(),Ai=t,Ti=a,Ai.attachEvent("onpropertychange",Rc)):e==="focusout"&&Cc()}function uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Ti)}function pf(e,t){if(e==="click")return Nl(t)}function df(e,t){if(e==="input"||e==="change")return Nl(t)}function ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:ff;function Mi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ke.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var a=kc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kc(a)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=vl(e.document)}return t}function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mf=va&&"documentMode"in document&&11>=document.documentMode,Yn=null,$r=null,Ci=null,Ir=!1;function Fc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ir||Yn==null||Yn!==vl(n)||(n=Yn,"selectionStart"in n&&Wr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ci&&Mi(Ci,n)||(Ci=n,n=dr($r,"onSelect"),0<n.length&&(t=new zl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Yn)))}function xn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pn={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},eo={},Uc={};va&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function vn(e){if(eo[e])return eo[e];if(!Pn[e])return e;var t=Pn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Uc)return eo[e]=t[a];return e}var Bc=vn("animationend"),Lc=vn("animationiteration"),Gc=vn("animationstart"),hf=vn("transitionrun"),xf=vn("transitionstart"),vf=vn("transitioncancel"),Hc=vn("transitionend"),Yc=new Map,to="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");to.push("scrollEnd");function It(e,t){Yc.set(e,t),mn(t,[e])}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Xn=0,ao=0;function wl(){for(var e=Xn,t=ao=Xn=0;t<e;){var a=Ht[t];Ht[t++]=null;var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var r=Ht[t];if(Ht[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&Pc(a,i,r)}}function jl(e,t,a,n){Ht[Xn++]=e,Ht[Xn++]=t,Ht[Xn++]=a,Ht[Xn++]=n,ao|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function no(e,t,a,n){return jl(e,t,a,n),Al(e)}function gn(e,t){return jl(e,null,null,t),Al(e)}function Pc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-Ae(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Al(e){if(50<Ii)throw Ii=0,fs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vn={};function gf(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,n){return new gf(e,t,a,n)}function io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tl(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")io(e)&&(o=1);else if(typeof e=="string")o=Sm(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qe:return e=kt(31,a,t,i),e.elementType=qe,e.lanes=r,e;case J:return yn(a.children,i,r,t);case W:o=8,i|=24;break;case B:return e=kt(12,a,t,i|2),e.elementType=B,e.lanes=r,e;case me:return e=kt(13,a,t,i),e.elementType=me,e.lanes=r,e;case Ne:return e=kt(19,a,t,i),e.elementType=Ne,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:o=10;break e;case ce:o=9;break e;case P:o=11;break e;case te:o=14;break e;case Re:o=16,n=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=kt(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function yn(e,t,a,n){return e=kt(7,e,n,t),e.lanes=a,e}function lo(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function Vc(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function ro(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zc=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var a=Zc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$(t)},Zc.set(e,t),t)}return{value:e,source:t,stack:$(t)}}var Zn=[],Qn=0,Ml=null,Ri=0,Pt=[],Xt=0,Ua=null,oa=1,sa="";function ya(e,t){Zn[Qn++]=Ri,Zn[Qn++]=Ml,Ml=e,Ri=t}function Qc(e,t,a){Pt[Xt++]=oa,Pt[Xt++]=sa,Pt[Xt++]=Ua,Ua=e;var n=oa;e=sa;var i=32-Ae(n)-1;n&=~(1<<i),a+=1;var r=32-Ae(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,oa=1<<32-Ae(t)+i|a<<i|n,sa=r+e}else oa=1<<r|a<<i|n,sa=e}function oo(e){e.return!==null&&(ya(e,1),Qc(e,1,0))}function so(e){for(;e===Ml;)Ml=Zn[--Qn],Zn[Qn]=null,Ri=Zn[--Qn],Zn[Qn]=null;for(;e===Ua;)Ua=Pt[--Xt],Pt[Xt]=null,sa=Pt[--Xt],Pt[Xt]=null,oa=Pt[--Xt],Pt[Xt]=null}function Kc(e,t){Pt[Xt++]=oa,Pt[Xt++]=sa,Pt[Xt++]=Ua,oa=t.id,sa=t.overflow,Ua=e}var mt=null,Ue=null,ve=!1,Ba=null,Vt=!1,co=Error(u(519));function La(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ki(Yt(t,e)),co}function Jc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ft]=e,t[_t]=n,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<tl.length;a++)fe(tl[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),cc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),pc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||fp(t.textContent,a)?(n.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),n.onScroll!=null&&fe("scroll",t),n.onScrollEnd!=null&&fe("scrollend",t),n.onClick!=null&&(t.onclick=xa),t=!0):t=!1,t||La(e,!0)}function Wc(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:mt=mt.return}}function Kn(e){if(e!==mt)return!1;if(!ve)return Wc(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||As(e.type,e.memoizedProps)),a=!a),a&&Ue&&La(e),Wc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ue=zp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ue=zp(e)}else t===27?(t=Ue,en(e.type)?(e=ks,ks=null,Ue=e):Ue=t):Ue=mt?Qt(e.stateNode.nextSibling):null;return!0}function bn(){Ue=mt=null,ve=!1}function uo(){var e=Ba;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Ba=null),e}function ki(e){Ba===null?Ba=[e]:Ba.push(e)}var po=m(null),_n=null,ba=null;function Ga(e,t,a){G(po,t._currentValue),t._currentValue=a}function _a(e){e._currentValue=po.current,C(po)}function fo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function mo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=i;for(var f=0;f<t.length;f++)if(c.context===t[f]){r.lanes|=a,c=r.alternate,c!==null&&(c.lanes|=a),fo(r.return,a,e),n||(o=null);break e}r=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),fo(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Jn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=i.type;Rt(i.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(i===pe.current){if(o=i.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(rl):e=[rl])}i=i.return}e!==null&&mo(t,e,a,n),t.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zn(e){_n=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return $c(_n,e)}function Rl(e,t){return _n===null&&zn(e),$c(e,t)}function $c(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(u(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return a}var yf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bf=p.unstable_scheduleCallback,_f=p.unstable_NormalPriority,et={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new yf,data:new Map,refCount:0}}function Oi(e){e.refCount--,e.refCount===0&&bf(_f,function(){e.controller.abort()})}var Ei=null,xo=0,Wn=0,$n=null;function zf(e,t){if(Ei===null){var a=Ei=[];xo=0,Wn=ys(),$n={status:"pending",value:void 0,then:function(n){a.push(n)}}}return xo++,t.then(Ic,Ic),t}function Ic(){if(--xo===0&&Ei!==null){$n!==null&&($n.status="fulfilled");var e=Ei;Ei=null,Wn=0,$n=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sf(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var e0=D.S;D.S=function(e,t){Fu=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zf(e,t),e0!==null&&e0(e,t)};var Sn=m(null);function vo(){var e=Sn.current;return e!==null?e:Ee.pooledCache}function kl(e,t){t===null?G(Sn,Sn.current):G(Sn,t.pool)}function t0(){var e=vo();return e===null?null:{parent:et._currentValue,pool:e}}var In=Error(u(460)),go=Error(u(474)),Ol=Error(u(542)),El={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(xa,xa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l0(e),e;default:if(typeof t.status=="string")t.then(xa,xa);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l0(e),e}throw Dn=t,In}}function Nn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dn=a,In):a}}var Dn=null;function i0(){if(Dn===null)throw Error(u(459));var e=Dn;return Dn=null,e}function l0(e){if(e===In||e===Ol)throw Error(u(483))}var ei=null,qi=0;function ql(e){var t=qi;return qi+=1,ei===null&&(ei=[]),n0(ei,e,t)}function Fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fl(e,t){throw t.$$typeof===L?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function r0(e){function t(y,h){if(e){var z=y.deletions;z===null?(y.deletions=[h],y.flags|=16):z.push(h)}}function a(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function n(y){for(var h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function i(y,h){return y=ga(y,h),y.index=0,y.sibling=null,y}function r(y,h,z){return y.index=z,e?(z=y.alternate,z!==null?(z=z.index,z<h?(y.flags|=67108866,h):z):(y.flags|=67108866,h)):(y.flags|=1048576,h)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,h,z,R){return h===null||h.tag!==6?(h=lo(z,y.mode,R),h.return=y,h):(h=i(h,z),h.return=y,h)}function f(y,h,z,R){var I=z.type;return I===J?M(y,h,z.props.children,R,z.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Re&&Nn(I)===h.type)?(h=i(h,z.props),Fi(h,z),h.return=y,h):(h=Tl(z.type,z.key,z.props,null,y.mode,R),Fi(h,z),h.return=y,h)}function S(y,h,z,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==z.containerInfo||h.stateNode.implementation!==z.implementation?(h=ro(z,y.mode,R),h.return=y,h):(h=i(h,z.children||[]),h.return=y,h)}function M(y,h,z,R,I){return h===null||h.tag!==7?(h=yn(z,y.mode,R,I),h.return=y,h):(h=i(h,z),h.return=y,h)}function O(y,h,z){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=lo(""+h,y.mode,z),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case U:return z=Tl(h.type,h.key,h.props,null,y.mode,z),Fi(z,h),z.return=y,z;case Y:return h=ro(h,y.mode,z),h.return=y,h;case Re:return h=Nn(h),O(y,h,z)}if(K(h)||Le(h))return h=yn(h,y.mode,z,null),h.return=y,h;if(typeof h.then=="function")return O(y,ql(h),z);if(h.$$typeof===_)return O(y,Rl(y,h),z);Fl(y,h)}return null}function w(y,h,z,R){var I=h!==null?h.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return I!==null?null:c(y,h,""+z,R);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return z.key===I?f(y,h,z,R):null;case Y:return z.key===I?S(y,h,z,R):null;case Re:return z=Nn(z),w(y,h,z,R)}if(K(z)||Le(z))return I!==null?null:M(y,h,z,R,null);if(typeof z.then=="function")return w(y,h,ql(z),R);if(z.$$typeof===_)return w(y,h,Rl(y,z),R);Fl(y,z)}return null}function j(y,h,z,R,I){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return y=y.get(z)||null,c(h,y,""+R,I);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return y=y.get(R.key===null?z:R.key)||null,f(h,y,R,I);case Y:return y=y.get(R.key===null?z:R.key)||null,S(h,y,R,I);case Re:return R=Nn(R),j(y,h,z,R,I)}if(K(R)||Le(R))return y=y.get(z)||null,M(h,y,R,I,null);if(typeof R.then=="function")return j(y,h,z,ql(R),I);if(R.$$typeof===_)return j(y,h,z,Rl(h,R),I);Fl(h,R)}return null}function Z(y,h,z,R){for(var I=null,ye=null,Q=h,se=h=0,xe=null;Q!==null&&se<z.length;se++){Q.index>se?(xe=Q,Q=null):xe=Q.sibling;var be=w(y,Q,z[se],R);if(be===null){Q===null&&(Q=xe);break}e&&Q&&be.alternate===null&&t(y,Q),h=r(be,h,se),ye===null?I=be:ye.sibling=be,ye=be,Q=xe}if(se===z.length)return a(y,Q),ve&&ya(y,se),I;if(Q===null){for(;se<z.length;se++)Q=O(y,z[se],R),Q!==null&&(h=r(Q,h,se),ye===null?I=Q:ye.sibling=Q,ye=Q);return ve&&ya(y,se),I}for(Q=n(Q);se<z.length;se++)xe=j(Q,y,se,z[se],R),xe!==null&&(e&&xe.alternate!==null&&Q.delete(xe.key===null?se:xe.key),h=r(xe,h,se),ye===null?I=xe:ye.sibling=xe,ye=xe);return e&&Q.forEach(function(rn){return t(y,rn)}),ve&&ya(y,se),I}function ae(y,h,z,R){if(z==null)throw Error(u(151));for(var I=null,ye=null,Q=h,se=h=0,xe=null,be=z.next();Q!==null&&!be.done;se++,be=z.next()){Q.index>se?(xe=Q,Q=null):xe=Q.sibling;var rn=w(y,Q,be.value,R);if(rn===null){Q===null&&(Q=xe);break}e&&Q&&rn.alternate===null&&t(y,Q),h=r(rn,h,se),ye===null?I=rn:ye.sibling=rn,ye=rn,Q=xe}if(be.done)return a(y,Q),ve&&ya(y,se),I;if(Q===null){for(;!be.done;se++,be=z.next())be=O(y,be.value,R),be!==null&&(h=r(be,h,se),ye===null?I=be:ye.sibling=be,ye=be);return ve&&ya(y,se),I}for(Q=n(Q);!be.done;se++,be=z.next())be=j(Q,y,se,be.value,R),be!==null&&(e&&be.alternate!==null&&Q.delete(be.key===null?se:be.key),h=r(be,h,se),ye===null?I=be:ye.sibling=be,ye=be);return e&&Q.forEach(function(Om){return t(y,Om)}),ve&&ya(y,se),I}function Ce(y,h,z,R){if(typeof z=="object"&&z!==null&&z.type===J&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case U:e:{for(var I=z.key;h!==null;){if(h.key===I){if(I=z.type,I===J){if(h.tag===7){a(y,h.sibling),R=i(h,z.props.children),R.return=y,y=R;break e}}else if(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Re&&Nn(I)===h.type){a(y,h.sibling),R=i(h,z.props),Fi(R,z),R.return=y,y=R;break e}a(y,h);break}else t(y,h);h=h.sibling}z.type===J?(R=yn(z.props.children,y.mode,R,z.key),R.return=y,y=R):(R=Tl(z.type,z.key,z.props,null,y.mode,R),Fi(R,z),R.return=y,y=R)}return o(y);case Y:e:{for(I=z.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===z.containerInfo&&h.stateNode.implementation===z.implementation){a(y,h.sibling),R=i(h,z.children||[]),R.return=y,y=R;break e}else{a(y,h);break}else t(y,h);h=h.sibling}R=ro(z,y.mode,R),R.return=y,y=R}return o(y);case Re:return z=Nn(z),Ce(y,h,z,R)}if(K(z))return Z(y,h,z,R);if(Le(z)){if(I=Le(z),typeof I!="function")throw Error(u(150));return z=I.call(z),ae(y,h,z,R)}if(typeof z.then=="function")return Ce(y,h,ql(z),R);if(z.$$typeof===_)return Ce(y,h,Rl(y,z),R);Fl(y,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,h!==null&&h.tag===6?(a(y,h.sibling),R=i(h,z),R.return=y,y=R):(a(y,h),R=lo(z,y.mode,R),R.return=y,y=R),o(y)):a(y,h)}return function(y,h,z,R){try{qi=0;var I=Ce(y,h,z,R);return ei=null,I}catch(Q){if(Q===In||Q===Ol)throw Q;var ye=kt(29,Q,null,y.mode);return ye.lanes=R,ye.return=y,ye}finally{}}}var wn=r0(!0),o0=r0(!1),Ha=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Se&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Al(e),Pc(e,null,a),t}return jl(e,n,t,a),Al(e)}function Ui(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,fa(e,a)}}function _o(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var zo=!1;function Bi(){if(zo){var e=$n;if(e!==null)throw e}}function Li(e,t,a,n){zo=!1;var i=e.updateQueue;Ha=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,S=f.next;f.next=null,o===null?r=S:o.next=S,o=f;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==o&&(c===null?M.firstBaseUpdate=S:c.next=S,M.lastBaseUpdate=f))}if(r!==null){var O=i.baseState;o=0,M=S=f=null,c=r;do{var w=c.lane&-536870913,j=w!==c.lane;if(j?(he&w)===w:(n&w)===w){w!==0&&w===Wn&&(zo=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Z=e,ae=c;w=t;var Ce=a;switch(ae.tag){case 1:if(Z=ae.payload,typeof Z=="function"){O=Z.call(Ce,O,w);break e}O=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ae.payload,w=typeof Z=="function"?Z.call(Ce,O,w):Z,w==null)break e;O=E({},O,w);break e;case 2:Ha=!0}}w=c.callback,w!==null&&(e.flags|=64,j&&(e.flags|=8192),j=i.callbacks,j===null?i.callbacks=[w]:j.push(w))}else j={lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(S=M=j,f=O):M=M.next=j,o|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;j=c,c=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);M===null&&(f=O),i.baseState=f,i.firstBaseUpdate=S,i.lastBaseUpdate=M,r===null&&(i.shared.lanes=0),Ka|=o,e.lanes=o,e.memoizedState=O}}function s0(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function c0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)s0(a[e],t)}var ti=m(null),Ul=m(0);function u0(e,t){e=Ma,G(Ul,e),G(ti,t),Ma=e|t.baseLanes}function So(){G(Ul,Ma),G(ti,ti.current)}function No(){Ma=Ul.current,C(ti),C(Ul)}var Ot=m(null),Zt=null;function Xa(e){var t=e.alternate;G(Je,Je.current&1),G(Ot,e),Zt===null&&(t===null||ti.current!==null||t.memoizedState!==null)&&(Zt=e)}function Do(e){G(Je,Je.current),G(Ot,e),Zt===null&&(Zt=e)}function p0(e){e.tag===22?(G(Je,Je.current),G(Ot,e),Zt===null&&(Zt=e)):Va()}function Va(){G(Je,Je.current),G(Ot,Ot.current)}function Et(e){C(Ot),Zt===e&&(Zt=null),C(Je)}var Je=m(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cs(a)||Rs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=0,re=null,Te=null,tt=null,Ll=!1,ai=!1,jn=!1,Gl=0,Gi=0,ni=null,Nf=0;function Ze(){throw Error(u(321))}function wo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Rt(e[a],t[a]))return!1;return!0}function jo(e,t,a,n,i,r){return za=r,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Q0:Ho,jn=!1,r=a(n,i),jn=!1,ai&&(r=f0(t,a,n,i)),d0(e),r}function d0(e){D.H=Pi;var t=Te!==null&&Te.next!==null;if(za=0,tt=Te=re=null,Ll=!1,Gi=0,ni=null,t)throw Error(u(300));e===null||at||(e=e.dependencies,e!==null&&Cl(e)&&(at=!0))}function f0(e,t,a,n){re=e;var i=0;do{if(ai&&(ni=null),Gi=0,ai=!1,25<=i)throw Error(u(301));if(i+=1,tt=Te=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=K0,r=t(a,n)}while(ai);return r}function Df(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Hi(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(re.flags|=1024),t}function Ao(){var e=Gl!==0;return Gl=0,e}function To(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Mo(e){if(Ll){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ll=!1}za=0,tt=Te=re=null,ai=!1,Gi=Gl=0,ni=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?re.memoizedState=tt=e:tt=tt.next=e,tt}function We(){if(Te===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=tt===null?re.memoizedState:tt.next;if(t!==null)tt=t,Te=e;else{if(e===null)throw re.alternate===null?Error(u(467)):Error(u(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},tt===null?re.memoizedState=tt=e:tt=tt.next=e}return tt}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hi(e){var t=Gi;return Gi+=1,ni===null&&(ni=[]),e=n0(ni,e,t),t=re,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Q0:Ho),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hi(e);if(e.$$typeof===_)return ht(e)}throw Error(u(438,String(e)))}function Co(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Hl(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Fe;return t.index++,a}function Sa(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=We();return Ro(t,Te,e)}function Ro(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var c=o=null,f=null,S=t,M=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(he&O)===O:(za&O)===O){var w=S.revertLane;if(w===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===Wn&&(M=!0);else if((za&w)===w){S=S.next,w===Wn&&(M=!0);continue}else O={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},f===null?(c=f=O,o=r):f=f.next=O,re.lanes|=w,Ka|=w;O=S.action,jn&&a(r,O),r=S.hasEagerState?S.eagerState:a(r,O)}else w={lane:O,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},f===null?(c=f=w,o=r):f=f.next=w,re.lanes|=O,Ka|=O;S=S.next}while(S!==null&&S!==t);if(f===null?o=r:f.next=c,!Rt(r,e.memoizedState)&&(at=!0,M&&(a=$n,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=f,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ko(e){var t=We(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);Rt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function m0(e,t,a){var n=re,i=We(),r=ve;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!Rt((Te||i).memoizedState,a);if(o&&(i.memoizedState=a,at=!0),i=i.queue,qo(v0.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,ii(9,{destroy:void 0},x0.bind(null,n,i,a,t),null),Ee===null)throw Error(u(349));r||(za&127)!==0||h0(n,t,a)}return a}function h0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=Hl(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function x0(e,t,a,n){t.value=a,t.getSnapshot=n,g0(t)&&y0(e)}function v0(e,t,a){return a(function(){g0(t)&&y0(e)})}function g0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Rt(e,a)}catch{return!0}}function y0(e){var t=gn(e,2);t!==null&&jt(t,e,2)}function Oo(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),jn){yt(!0);try{a()}finally{yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t}function b0(e,t,a,n){return e.baseState=a,Ro(e,Te,typeof n=="function"?n:Sa)}function wf(e,t,a,n,i){if(Zl(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,_0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function _0(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=D.T,o={};D.T=o;try{var c=a(i,n),f=D.S;f!==null&&f(o,c),z0(e,t,c)}catch(S){Eo(e,t,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),D.T=r}}else try{r=a(i,n),z0(e,t,r)}catch(S){Eo(e,t,S)}}function z0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){S0(e,t,n)},function(n){return Eo(e,t,n)}):S0(e,t,a)}function S0(e,t,a){t.status="fulfilled",t.value=a,N0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_0(e,a)))}function Eo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,N0(t),t=t.next;while(t!==n)}e.action=null}function N0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function D0(e,t){return t}function w0(e,t){if(ve){var a=Ee.formState;if(a!==null){e:{var n=re;if(ve){if(Ue){t:{for(var i=Ue,r=Vt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Qt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ue=Qt(i.nextSibling),n=i.data==="F!";break e}}La(n)}n=!1}n&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:t},a.queue=n,a=X0.bind(null,re,n),n.dispatch=a,n=Oo(!1),r=Go.bind(null,re,!1,n.queue),n=bt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=wf.bind(null,re,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function j0(e){var t=We();return A0(t,Te,e)}function A0(e,t,a){if(t=Ro(e,t,D0)[0],e=Pl(Sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Hi(t)}catch(o){throw o===In?Ol:o}else n=t;t=We();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(re.flags|=2048,ii(9,{destroy:void 0},jf.bind(null,i,a),null)),[n,r,e]}function jf(e,t){e.action=t}function T0(e){var t=We(),a=Te;if(a!==null)return A0(t,a,e);We(),t=t.memoizedState,a=We();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function ii(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=re.updateQueue,t===null&&(t=Hl(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function M0(){return We().memoizedState}function Xl(e,t,a,n){var i=bt();re.flags|=e,i.memoizedState=ii(1|t,{destroy:void 0},a,n===void 0?null:n)}function Vl(e,t,a,n){var i=We();n=n===void 0?null:n;var r=i.memoizedState.inst;Te!==null&&n!==null&&wo(n,Te.memoizedState.deps)?i.memoizedState=ii(t,r,a,n):(re.flags|=e,i.memoizedState=ii(1|t,r,a,n))}function C0(e,t){Xl(8390656,8,e,t)}function qo(e,t){Vl(2048,8,e,t)}function Af(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=Hl(),re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function R0(e){var t=We().memoizedState;return Af({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function k0(e,t){return Vl(4,2,e,t)}function O0(e,t){return Vl(4,4,e,t)}function E0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,a){a=a!=null?a.concat([e]):null,Vl(4,4,E0.bind(null,t,e),a)}function Fo(){}function F0(e,t){var a=We();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&wo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function U0(e,t){var a=We();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&wo(t,n[1]))return n[0];if(n=e(),jn){yt(!0);try{e()}finally{yt(!1)}}return a.memoizedState=[n,t],n}function Uo(e,t,a){return a===void 0||(za&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Bu(),re.lanes|=e,Ka|=e,a)}function B0(e,t,a,n){return Rt(a,t)?a:ti.current!==null?(e=Uo(e,a,n),Rt(e,t)||(at=!0),e):(za&42)===0||(za&1073741824)!==0&&(he&261930)===0?(at=!0,e.memoizedState=a):(e=Bu(),re.lanes|=e,Ka|=e,t)}function L0(e,t,a,n,i){var r=q.p;q.p=r!==0&&8>r?r:8;var o=D.T,c={};D.T=c,Go(e,!1,t,a);try{var f=i(),S=D.S;if(S!==null&&S(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var M=Sf(f,n);Yi(e,t,M,Ut(e))}else Yi(e,t,n,Ut(e))}catch(O){Yi(e,t,{then:function(){},status:"rejected",reason:O},Ut())}finally{q.p=r,o!==null&&c.types!==null&&(o.types=c.types),D.T=o}}function Tf(){}function Bo(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=G0(e).queue;L0(e,i,t,T,a===null?Tf:function(){return H0(e),a(n)})}function G0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:T,baseState:T,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:T},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function H0(e){var t=G0(e);t.next===null&&(t=e.alternate.memoizedState),Yi(e,t.next.queue,{},Ut())}function Lo(){return ht(rl)}function Y0(){return We().memoizedState}function P0(){return We().memoizedState}function Mf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ut();e=Ya(a);var n=Pa(t,e,a);n!==null&&(jt(n,t,a),Ui(n,t,a)),t={cache:ho()},e.payload=t;return}t=t.return}}function Cf(e,t,a){var n=Ut();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?V0(t,a):(a=no(e,t,a,n),a!==null&&(jt(a,e,n),Z0(a,t,n)))}function X0(e,t,a){var n=Ut();Yi(e,t,a,n)}function Yi(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))V0(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,c=r(o,a);if(i.hasEagerState=!0,i.eagerState=c,Rt(c,o))return jl(e,t,i,0),Ee===null&&wl(),!1}catch{}finally{}if(a=no(e,t,i,n),a!==null)return jt(a,e,n),Z0(a,t,n),!0}return!1}function Go(e,t,a,n){if(n={lane:2,revertLane:ys(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(t)throw Error(u(479))}else t=no(e,a,n,2),t!==null&&jt(t,e,2)}function Zl(e){var t=e.alternate;return e===re||t!==null&&t===re}function V0(e,t){ai=Ll=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Z0(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,fa(e,a)}}var Pi={readContext:ht,use:Yl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};Pi.useEffectEvent=Ze;var Q0={readContext:ht,use:Yl,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:C0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Xl(4194308,4,E0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xl(4194308,4,e,t)},useInsertionEffect:function(e,t){Xl(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var n=e();if(jn){yt(!0);try{e()}finally{yt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=bt();if(a!==void 0){var i=a(t);if(jn){yt(!0);try{a(t)}finally{yt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Cf.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Oo(e);var t=e.queue,a=X0.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Fo,useDeferredValue:function(e,t){var a=bt();return Uo(a,e,t)},useTransition:function(){var e=Oo(!1);return e=L0.bind(null,re,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=re,i=bt();if(ve){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ee===null)throw Error(u(349));(he&127)!==0||h0(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,C0(v0.bind(null,n,r,e),[e]),n.flags|=2048,ii(9,{destroy:void 0},x0.bind(null,n,r,a,t),null),a},useId:function(){var e=bt(),t=Ee.identifierPrefix;if(ve){var a=sa,n=oa;a=(n&~(1<<32-Ae(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Gl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nf++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lo,useFormState:w0,useActionState:w0,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Go.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:Co,useCacheRefresh:function(){return bt().memoizedState=Mf.bind(null,re)},useEffectEvent:function(e){var t=bt(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Ho={readContext:ht,use:Yl,useCallback:F0,useContext:ht,useEffect:qo,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:U0,useReducer:Pl,useRef:M0,useState:function(){return Pl(Sa)},useDebugValue:Fo,useDeferredValue:function(e,t){var a=We();return B0(a,Te.memoizedState,e,t)},useTransition:function(){var e=Pl(Sa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Hi(e),t]},useSyncExternalStore:m0,useId:Y0,useHostTransitionStatus:Lo,useFormState:j0,useActionState:j0,useOptimistic:function(e,t){var a=We();return b0(a,Te,e,t)},useMemoCache:Co,useCacheRefresh:P0};Ho.useEffectEvent=R0;var K0={readContext:ht,use:Yl,useCallback:F0,useContext:ht,useEffect:qo,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:U0,useReducer:ko,useRef:M0,useState:function(){return ko(Sa)},useDebugValue:Fo,useDeferredValue:function(e,t){var a=We();return Te===null?Uo(a,e,t):B0(a,Te.memoizedState,e,t)},useTransition:function(){var e=ko(Sa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Hi(e),t]},useSyncExternalStore:m0,useId:Y0,useHostTransitionStatus:Lo,useFormState:T0,useActionState:T0,useOptimistic:function(e,t){var a=We();return Te!==null?b0(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:P0};K0.useEffectEvent=R0;function Yo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Po={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ut(),i=Ya(n);i.payload=t,a!=null&&(i.callback=a),t=Pa(e,i,n),t!==null&&(jt(t,e,n),Ui(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ut(),i=Ya(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Pa(e,i,n),t!==null&&(jt(t,e,n),Ui(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ut(),n=Ya(a);n.tag=2,t!=null&&(n.callback=t),t=Pa(e,n,a),t!==null&&(jt(t,e,a),Ui(t,e,a))}};function J0(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Mi(a,n)||!Mi(i,r):!0}function W0(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function An(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function $0(e){Dl(e)}function I0(e){console.error(e)}function eu(e){Dl(e)}function Ql(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function tu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Xo(e,t,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Ql(e,t)},a}function au(e){return e=Ya(e),e.tag=3,e}function nu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){tu(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){tu(t,a,n),typeof i!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Rf(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,i,!0),a=Ot.current,a!==null){switch(a.tag){case 31:case 13:return Zt===null?rr():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===El?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),xs(e,n,i)),!1;case 22:return a.flags|=65536,n===El?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),xs(e,n,i)),!1}throw Error(u(435,a.tag))}return xs(e,n,i),rr(),!1}if(ve)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==co&&(e=Error(u(422),{cause:n}),ki(Yt(e,a)))):(n!==co&&(t=Error(u(423),{cause:n}),ki(Yt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Yt(n,a),i=Xo(e.stateNode,n,i),_o(e,i),Qe!==4&&(Qe=2)),!1;var r=Error(u(520),{cause:n});if(r=Yt(r,a),$i===null?$i=[r]:$i.push(r),Qe!==4&&(Qe=2),t===null)return!0;n=Yt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Xo(a.stateNode,n,e),_o(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=au(i),nu(i,e,a,n),_o(a,i),!1}a=a.return}while(a!==null);return!1}var Vo=Error(u(461)),at=!1;function xt(e,t,a,n){t.child=e===null?o0(t,null,a,n):wn(t,e.child,a,n)}function iu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}else o=n;return zn(t),n=jo(e,t,a,o,r,i),c=Ao(),e!==null&&!at?(To(e,t,i),Na(e,t,i)):(ve&&c&&oo(t),t.flags|=1,xt(e,t,n,i),t.child)}function lu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!io(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,ru(e,t,r,n,i)):(e=Tl(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!es(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Mi,a(o,n)&&e.ref===t.ref)return Na(e,t,i)}return t.flags|=1,e=ga(r,n),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Mi(r,n)&&e.ref===t.ref)if(at=!1,t.pendingProps=n=r,es(e,i))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Na(e,t,i)}return Zo(e,t,a,n,i)}function ou(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return su(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,r!==null?r.cachePool:null),r!==null?u0(t,r):So(),p0(t);else return n=t.lanes=536870912,su(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(kl(t,r.cachePool),u0(t,r),Va(),t.memoizedState=null):(e!==null&&kl(t,null),So(),Va());return xt(e,t,i,a),t.child}function Xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function su(e,t,a,n,i){var r=vo();return r=r===null?null:{parent:et._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&kl(t,null),So(),p0(t),e!==null&&Jn(e,t,n,!0),t.childLanes=i,null}function Kl(e,t){return t=Wl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cu(e,t,a){return wn(t,e.child,null,a),e=Kl(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function kf(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(n.mode==="hidden")return e=Kl(t,n),t.lanes=536870912,Xi(null,e);if(Do(t),(e=Ue)?(e=_p(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:oa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,mt=t,Ue=null)):e=null,e===null)throw La(t);return t.lanes=536870912,null}return Kl(t,n)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Do(t),i)if(t.flags&256)t.flags&=-257,t=cu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(at||Jn(e,t,a,!1),i=(a&e.childLanes)!==0,at||i){if(n=Ee,n!==null&&(o=fn(n,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,gn(e,o),jt(n,e,o),Vo;rr(),t=cu(e,t,a)}else e=r.treeContext,Ue=Qt(o.nextSibling),mt=t,ve=!0,Ba=null,Vt=!1,e!==null&&Kc(t,e),t=Kl(t,n),t.flags|=4096;return t}return e=ga(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zo(e,t,a,n,i){return zn(t),a=jo(e,t,a,n,void 0,i),n=Ao(),e!==null&&!at?(To(e,t,i),Na(e,t,i)):(ve&&n&&oo(t),t.flags|=1,xt(e,t,a,i),t.child)}function uu(e,t,a,n,i,r){return zn(t),t.updateQueue=null,a=f0(t,n,a,i),d0(e),n=Ao(),e!==null&&!at?(To(e,t,r),Na(e,t,r)):(ve&&n&&oo(t),t.flags|=1,xt(e,t,a,r),t.child)}function pu(e,t,a,n,i){if(zn(t),t.stateNode===null){var r=Vn,o=a.contextType;typeof o=="object"&&o!==null&&(r=ht(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Po,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},yo(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?ht(o):Vn,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Yo(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Po.enqueueReplaceState(r,r.state,null),Li(t,n,r,i),Bi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,f=An(a,c);r.props=f;var S=r.context,M=a.contextType;o=Vn,typeof M=="object"&&M!==null&&(o=ht(M));var O=a.getDerivedStateFromProps;M=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||S!==o)&&W0(t,r,n,o),Ha=!1;var w=t.memoizedState;r.state=w,Li(t,n,r,i),Bi(),S=t.memoizedState,c||w!==S||Ha?(typeof O=="function"&&(Yo(t,a,O,n),S=t.memoizedState),(f=Ha||J0(t,a,f,n,w,S,o))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),r.props=n,r.state=S,r.context=o,n=f):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,bo(e,t),o=t.memoizedProps,M=An(a,o),r.props=M,O=t.pendingProps,w=r.context,S=a.contextType,f=Vn,typeof S=="object"&&S!==null&&(f=ht(S)),c=a.getDerivedStateFromProps,(S=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==O||w!==f)&&W0(t,r,n,f),Ha=!1,w=t.memoizedState,r.state=w,Li(t,n,r,i),Bi();var j=t.memoizedState;o!==O||w!==j||Ha||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof c=="function"&&(Yo(t,a,c,n),j=t.memoizedState),(M=Ha||J0(t,a,M,n,w,j,f)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,j,f),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,j,f)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=j),r.props=n,r.state=j,r.context=f,n=M):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Jl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=wn(t,e.child,null,i),t.child=wn(t,null,a,i)):xt(e,t,a,i),t.memoizedState=r.state,e=t.child):e=Na(e,t,i),e}function du(e,t,a,n){return bn(),t.flags|=256,xt(e,t,a,n),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:t0()}}function Jo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ft),e}function fu(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(i?Xa(t):Va(),(e=Ue)?(e=_p(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:oa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,mt=t,Ue=null)):e=null,e===null)throw La(t);return Rs(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,i?(Va(),i=t.mode,c=Wl({mode:"hidden",children:c},i),n=yn(n,i,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=Ko(a),n.childLanes=Jo(e,o,a),t.memoizedState=Qo,Xi(null,n)):(Xa(t),Wo(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(r)t.flags&256?(Xa(t),t.flags&=-257,t=$o(e,t,a)):t.memoizedState!==null?(Va(),t.child=e.child,t.flags|=128,t=null):(Va(),c=n.fallback,i=t.mode,n=Wl({mode:"visible",children:n.children},i),c=yn(c,i,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,wn(t,e.child,null,a),n=t.child,n.memoizedState=Ko(a),n.childLanes=Jo(e,o,a),t.memoizedState=Qo,t=Xi(null,n));else if(Xa(t),Rs(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var S=o.dgst;o=S,n=Error(u(419)),n.stack="",n.digest=o,ki({value:n,source:null,stack:null}),t=$o(e,t,a)}else if(at||Jn(e,t,a,!1),o=(a&e.childLanes)!==0,at||o){if(o=Ee,o!==null&&(n=fn(o,a),n!==0&&n!==f.retryLane))throw f.retryLane=n,gn(e,n),jt(o,e,n),Vo;Cs(c)||rr(),t=$o(e,t,a)}else Cs(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,Ue=Qt(c.nextSibling),mt=t,ve=!0,Ba=null,Vt=!1,e!==null&&Kc(t,e),t=Wo(t,n.children),t.flags|=4096);return t}return i?(Va(),c=n.fallback,i=t.mode,f=e.child,S=f.sibling,n=ga(f,{mode:"hidden",children:n.children}),n.subtreeFlags=f.subtreeFlags&65011712,S!==null?c=ga(S,c):(c=yn(c,i,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,Xi(null,n),n=t.child,c=e.child.memoizedState,c===null?c=Ko(a):(i=c.cachePool,i!==null?(f=et._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=t0(),c={baseLanes:c.baseLanes|a,cachePool:i}),n.memoizedState=c,n.childLanes=Jo(e,o,a),t.memoizedState=Qo,Xi(e.child,n)):(Xa(t),a=e.child,e=a.sibling,a=ga(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Wo(e,t){return t=Wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wl(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function $o(e,t,a){return wn(t,e.child,null,a),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fo(e.return,t,a)}function Io(e,t,a,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=r)}function hu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var o=Je.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,G(Je,o),xt(e,t,n,a),n=ve?Ri:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,a,t);else if(e.tag===19)mu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Io(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Io(t,!0,a,null,r,n);break;case"together":Io(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Na(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=ga(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ga(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function es(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function Of(e,t,a){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),Ga(t,et,e.memoizedState.cache),bn();break;case 27:case 5:aa(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:Ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Do(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?fu(e,t,a):(Xa(t),e=Na(e,t,a),e!==null?e.sibling:null);Xa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return hu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Je,Je.current),n)break;return null;case 22:return t.lanes=0,ou(e,t,a,t.pendingProps);case 24:Ga(t,et,e.memoizedState.cache)}return Na(e,t,a)}function xu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!es(e,a)&&(t.flags&128)===0)return at=!1,Of(e,t,a);at=(e.flags&131072)!==0}else at=!1,ve&&(t.flags&1048576)!==0&&Qc(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Nn(t.elementType),t.type=e,typeof e=="function")io(e)?(n=An(e,n),t.tag=1,t=pu(null,t,e,n,a)):(t.tag=0,t=Zo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===P){t.tag=11,t=iu(null,t,e,n,a);break e}else if(i===te){t.tag=14,t=lu(null,t,e,n,a);break e}}throw t=Ie(e)||e,Error(u(306,t,""))}}return t;case 0:return Zo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=An(n,t.pendingProps),pu(e,t,n,i,a);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,bo(e,t),Li(t,n,null,a);var o=t.memoizedState;if(n=o.cache,Ga(t,et,n),n!==r.cache&&mo(t,[et],a,!0),Bi(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=du(e,t,n,a);break e}else if(n!==i){i=Yt(Error(u(424)),t),ki(i),t=du(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Qt(e.firstChild),mt=t,ve=!0,Ba=null,Vt=!0,a=o0(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bn(),n===i){t=Na(e,t,a);break e}xt(e,t,n,a)}t=t.child}return t;case 26:return Jl(e,t),e===null?(a=jp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,n=fr(le.current).createElement(a),n[ft]=t,n[_t]=e,vt(n,a,e),ct(n),t.stateNode=n):t.memoizedState=jp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return aa(t),e===null&&ve&&(n=t.stateNode=Np(t.type,t.pendingProps,le.current),mt=t,Vt=!0,i=Ue,en(t.type)?(ks=i,Ue=Qt(n.firstChild)):Ue=i),xt(e,t,t.pendingProps.children,a),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((i=n=Ue)&&(n=um(n,t.type,t.pendingProps,Vt),n!==null?(t.stateNode=n,mt=t,Ue=Qt(n.firstChild),Vt=!1,i=!0):i=!1),i||La(t)),aa(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,As(i,r)?n=null:o!==null&&As(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=jo(e,t,Df,null,null,a),rl._currentValue=i),Jl(e,t),xt(e,t,n,a),t.child;case 6:return e===null&&ve&&((e=a=Ue)&&(a=pm(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,mt=t,Ue=null,e=!0):e=!1),e||La(t)),null;case 13:return fu(e,t,a);case 4:return Ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=wn(t,null,n,a):xt(e,t,n,a),t.child;case 11:return iu(e,t,t.type,t.pendingProps,a);case 7:return xt(e,t,t.pendingProps,a),t.child;case 8:return xt(e,t,t.pendingProps.children,a),t.child;case 12:return xt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ga(t,t.type,n.value),xt(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,zn(t),i=ht(i),n=n(i),t.flags|=1,xt(e,t,n,a),t.child;case 14:return lu(e,t,t.type,t.pendingProps,a);case 15:return ru(e,t,t.type,t.pendingProps,a);case 19:return hu(e,t,a);case 31:return kf(e,t,a);case 22:return ou(e,t,a,t.pendingProps);case 24:return zn(t),n=ht(et),e===null?(i=vo(),i===null&&(i=Ee,r=ho(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},yo(t),Ga(t,et,i)):((e.lanes&a)!==0&&(bo(e,t),Li(t,null,null,a),Bi()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ga(t,et,n)):(n=r.cache,Ga(t,et,n),n!==i.cache&&mo(t,[et],a,!0))),xt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Da(e){e.flags|=4}function ts(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Yu())e.flags|=8192;else throw Dn=El,go}else e.flags&=-16777217}function vu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rp(t))if(Yu())e.flags|=8192;else throw Dn=El,go}function $l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bt():536870912,e.lanes|=t,si|=t)}function Vi(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ef(e,t,a){var n=t.pendingProps;switch(so(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(et),_e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kn(t)?Da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,uo())),Be(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(Da(t),r!==null?(Be(t),vu(t,r)):(Be(t),ts(t,i,null,n,a))):r?r!==e.memoizedState?(Da(t),Be(t),vu(t,r)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Da(t),Be(t),ts(t,i,e,n,a)),null;case 27:if(na(t),a=le.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Da(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Be(t),null}e=X.current,Kn(t)?Jc(t):(e=Np(i,n,a),t.stateNode=e,Da(t))}return Be(t),null;case 5:if(na(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Da(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(r=X.current,Kn(t))Jc(t);else{var o=fr(le.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}r[ft]=t,r[_t]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(vt(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Da(t)}}return Be(t),ts(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Da(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=le.current,Kn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=mt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[ft]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||fp(e.nodeValue,a)),e||La(t,!0)}else e=fr(e).createTextNode(n),e[ft]=t,t.stateNode=e}return Be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Kn(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ft]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else a=uo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Be(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Kn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[ft]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else i=uo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),$l(t,t.updateQueue),Be(t),null);case 4:return _e(),e===null&&Ss(t.stateNode.containerInfo),Be(t),null;case 10:return _a(t.type),Be(t),null;case 19:if(C(Je),n=t.memoizedState,n===null)return Be(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)Vi(n,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Bl(e),r!==null){for(t.flags|=128,Vi(n,!1),e=r.updateQueue,t.updateQueue=e,$l(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xc(a,e),a=a.sibling;return G(Je,Je.current&1|2),ve&&ya(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&it()>nr&&(t.flags|=128,i=!0,Vi(n,!1),t.lanes=4194304)}else{if(!i)if(e=Bl(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,$l(t,e),Vi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ve)return Be(t),null}else 2*it()-n.renderingStartTime>nr&&a!==536870912&&(t.flags|=128,i=!0,Vi(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=it(),e.sibling=null,a=Je.current,G(Je,i?a&1|2:a&1),ve&&ya(t,n.treeForkCount),e):(Be(t),null);case 22:case 23:return Et(t),No(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),a=t.updateQueue,a!==null&&$l(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&C(Sn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_a(et),Be(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function qf(e,t){switch(so(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _a(et),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return na(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(u(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Je),null;case 4:return _e(),null;case 10:return _a(t.type),null;case 22:case 23:return Et(t),No(),e!==null&&C(Sn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _a(et),null;case 25:return null;default:return null}}function gu(e,t){switch(so(t),t.tag){case 3:_a(et),_e();break;case 26:case 27:case 5:na(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:C(Je);break;case 10:_a(t.type);break;case 22:case 23:Et(t),No(),e!==null&&C(Sn);break;case 24:_a(et)}}function Zi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(c){we(t,t.return,c)}}function Za(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,i=t;var f=a,S=c;try{S()}catch(M){we(i,f,M)}}}n=n.next}while(n!==r)}}catch(M){we(t,t.return,M)}}function yu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{c0(t,a)}catch(n){we(e,e.return,n)}}}function bu(e,t,a){a.props=An(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){we(e,t,n)}}function Qi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){we(e,t,i)}}function ca(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){we(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){we(e,t,i)}else a.current=null}function _u(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){we(e,e.return,i)}}function as(e,t,a){try{var n=e.stateNode;im(n,e.type,a,t),n[_t]=t}catch(i){we(e,e.return,i)}}function zu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&en(e.type)||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&en(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=xa));else if(n!==4&&(n===27&&en(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(is(e,t,a),e=e.sibling;e!==null;)is(e,t,a),e=e.sibling}function Il(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&en(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,t,a),e=e.sibling;e!==null;)Il(e,t,a),e=e.sibling}function Su(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);vt(t,n,a),t[ft]=e,t[_t]=a}catch(r){we(e,e.return,r)}}var wa=!1,nt=!1,ls=!1,Nu=typeof WeakSet=="function"?WeakSet:Set,ut=null;function Ff(e,t){if(e=e.containerInfo,ws=br,e=qc(e),Wr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,c=-1,f=-1,S=0,M=0,O=e,w=null;t:for(;;){for(var j;O!==a||i!==0&&O.nodeType!==3||(c=o+i),O!==r||n!==0&&O.nodeType!==3||(f=o+n),O.nodeType===3&&(o+=O.nodeValue.length),(j=O.firstChild)!==null;)w=O,O=j;for(;;){if(O===e)break t;if(w===a&&++S===i&&(c=o),w===r&&++M===n&&(f=o),(j=O.nextSibling)!==null)break;O=w,w=O.parentNode}O=j}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(js={focusedElem:e,selectionRange:a},br=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Z=An(a.type,i);e=n.getSnapshotBeforeUpdate(Z,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ae){we(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ms(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function Du(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),n&4&&Zi(5,a);break;case 1:if(Aa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){we(a,a.return,o)}else{var i=An(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){we(a,a.return,o)}}n&64&&yu(a),n&512&&Qi(a,a.return);break;case 3:if(Aa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{c0(e,t)}catch(o){we(a,a.return,o)}}break;case 27:t===null&&n&4&&Su(a);case 26:case 5:Aa(e,a),t===null&&n&4&&_u(a),n&512&&Qi(a,a.return);break;case 12:Aa(e,a);break;case 31:Aa(e,a),n&4&&Au(e,a);break;case 13:Aa(e,a),n&4&&Tu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vf.bind(null,a),dm(e,a))));break;case 22:if(n=a.memoizedState!==null||wa,!n){t=t!==null&&t.memoizedState!==null||nt,i=wa;var r=nt;wa=n,(nt=t)&&!r?Ta(e,a,(a.subtreeFlags&8772)!==0):Aa(e,a),wa=i,nt=r}break;case 30:break;default:Aa(e,a)}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,St=!1;function ja(e,t,a){for(a=a.child;a!==null;)ju(e,t,a),a=a.sibling}function ju(e,t,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:nt||ca(a,t),ja(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nt||ca(a,t);var n=Ye,i=St;en(a.type)&&(Ye=a.stateNode,St=!1),ja(e,t,a),nl(a.stateNode),Ye=n,St=i;break;case 5:nt||ca(a,t);case 6:if(n=Ye,i=St,Ye=null,ja(e,t,a),Ye=n,St=i,Ye!==null)if(St)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(r){we(a,t,r)}else try{Ye.removeChild(a.stateNode)}catch(r){we(a,t,r)}break;case 18:Ye!==null&&(St?(e=Ye,yp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xi(e)):yp(Ye,a.stateNode));break;case 4:n=Ye,i=St,Ye=a.stateNode.containerInfo,St=!0,ja(e,t,a),Ye=n,St=i;break;case 0:case 11:case 14:case 15:Za(2,a,t),nt||Za(4,a,t),ja(e,t,a);break;case 1:nt||(ca(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&bu(a,t,n)),ja(e,t,a);break;case 21:ja(e,t,a);break;case 22:nt=(n=nt)||a.memoizedState!==null,ja(e,t,a),nt=n;break;default:ja(e,t,a)}}function Au(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xi(e)}catch(a){we(t,t.return,a)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xi(e)}catch(a){we(t,t.return,a)}}function Uf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nu),t;default:throw Error(u(435,e.tag))}}function er(e,t){var a=Uf(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=Zf.bind(null,e,n);n.then(i,i)}})}function Nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(en(c.type)){Ye=c.stateNode,St=!1;break e}break;case 5:Ye=c.stateNode,St=!1;break e;case 3:case 4:Ye=c.stateNode.containerInfo,St=!0;break e}c=c.return}if(Ye===null)throw Error(u(160));ju(r,o,i),Ye=null,St=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling}var ea=null;function Mu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(t,e),Dt(e),n&4&&(Za(3,e,e.return),Zi(3,e),Za(5,e,e.return));break;case 1:Nt(t,e),Dt(e),n&512&&(nt||a===null||ca(a,a.return)),n&64&&wa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=ea;if(Nt(t,e),Dt(e),n&512&&(nt||a===null||ca(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[_i]||r[ft]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),vt(r,n,a),r[ft]=e,ct(r),n=r;break e;case"link":var o=Mp("link","href",i).get(n+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(r=o[c],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}r=i.createElement(n),vt(r,n,a),i.head.appendChild(r);break;case"meta":if(o=Mp("meta","content",i).get(n+(a.content||""))){for(c=0;c<o.length;c++)if(r=o[c],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}r=i.createElement(n),vt(r,n,a),i.head.appendChild(r);break;default:throw Error(u(468,n))}r[ft]=e,ct(r),n=r}e.stateNode=n}else Cp(i,e.type,e.stateNode);else e.stateNode=Tp(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Cp(i,e.type,e.stateNode):Tp(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&as(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nt(t,e),Dt(e),n&512&&(nt||a===null||ca(a,a.return)),a!==null&&n&4&&as(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nt(t,e),Dt(e),n&512&&(nt||a===null||ca(a,a.return)),e.flags&32){i=e.stateNode;try{Bn(i,"")}catch(Z){we(e,e.return,Z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,as(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ls=!0);break;case 6:if(Nt(t,e),Dt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Z){we(e,e.return,Z)}}break;case 3:if(xr=null,i=ea,ea=mr(t.containerInfo),Nt(t,e),ea=i,Dt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(Z){we(e,e.return,Z)}ls&&(ls=!1,Cu(e));break;case 4:n=ea,ea=mr(e.stateNode.containerInfo),Nt(t,e),Dt(e),ea=n;break;case 12:Nt(t,e),Dt(e);break;case 31:Nt(t,e),Dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,er(e,n)));break;case 13:Nt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ar=it()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,er(e,n)));break;case 22:i=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,S=wa,M=nt;if(wa=S||i,nt=M||f,Nt(t,e),nt=M,wa=S,Dt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||f||wa||nt||Tn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(r=f.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=f.stateNode;var O=f.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(Z){we(f,f.return,Z)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(Z){we(f,f.return,Z)}}}else if(t.tag===18){if(a===null){f=t;try{var j=f.stateNode;i?bp(j,!0):bp(f.stateNode,!1)}catch(Z){we(f,f.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,er(e,a))));break;case 19:Nt(t,e),Dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,er(e,n)));break;case 30:break;case 21:break;default:Nt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(zu(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,r=ns(e);Il(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(Bn(o,""),a.flags&=-33);var c=ns(e);Il(e,c,o);break;case 3:case 4:var f=a.stateNode.containerInfo,S=ns(e);is(e,S,f);break;default:throw Error(u(161))}}catch(M){we(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Du(e,t.alternate,t),t=t.sibling}function Tn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Za(4,t,t.return),Tn(t);break;case 1:ca(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&bu(t,t.return,a),Tn(t);break;case 27:nl(t.stateNode);case 26:case 5:ca(t,t.return),Tn(t);break;case 22:t.memoizedState===null&&Tn(t);break;case 30:Tn(t);break;default:Tn(t)}e=e.sibling}}function Ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Ta(i,r,a),Zi(4,r);break;case 1:if(Ta(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){we(n,n.return,S)}if(n=r,i=n.updateQueue,i!==null){var c=n.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)s0(f[i],c)}catch(S){we(n,n.return,S)}}a&&o&64&&yu(r),Qi(r,r.return);break;case 27:Su(r);case 26:case 5:Ta(i,r,a),a&&n===null&&o&4&&_u(r),Qi(r,r.return);break;case 12:Ta(i,r,a);break;case 31:Ta(i,r,a),a&&o&4&&Au(i,r);break;case 13:Ta(i,r,a),a&&o&4&&Tu(i,r);break;case 22:r.memoizedState===null&&Ta(i,r,a),Qi(r,r.return);break;case 30:break;default:Ta(i,r,a)}t=t.sibling}}function rs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Oi(a))}function os(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e))}function ta(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ru(e,t,a,n),t=t.sibling}function Ru(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ta(e,t,a,n),i&2048&&Zi(9,t);break;case 1:ta(e,t,a,n);break;case 3:ta(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e)));break;case 12:if(i&2048){ta(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){we(t,t.return,f)}}else ta(e,t,a,n);break;case 31:ta(e,t,a,n);break;case 13:ta(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?ta(e,t,a,n):Ki(e,t):r._visibility&2?ta(e,t,a,n):(r._visibility|=2,li(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&rs(o,t);break;case 24:ta(e,t,a,n),i&2048&&os(t.alternate,t);break;default:ta(e,t,a,n)}}function li(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,c=a,f=n,S=o.flags;switch(o.tag){case 0:case 11:case 15:li(r,o,c,f,i),Zi(8,o);break;case 23:break;case 22:var M=o.stateNode;o.memoizedState!==null?M._visibility&2?li(r,o,c,f,i):Ki(r,o):(M._visibility|=2,li(r,o,c,f,i)),i&&S&2048&&rs(o.alternate,o);break;case 24:li(r,o,c,f,i),i&&S&2048&&os(o.alternate,o);break;default:li(r,o,c,f,i)}t=t.sibling}}function Ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ki(a,n),i&2048&&rs(n.alternate,n);break;case 24:Ki(a,n),i&2048&&os(n.alternate,n);break;default:Ki(a,n)}t=t.sibling}}var Ji=8192;function ri(e,t,a){if(e.subtreeFlags&Ji)for(e=e.child;e!==null;)ku(e,t,a),e=e.sibling}function ku(e,t,a){switch(e.tag){case 26:ri(e,t,a),e.flags&Ji&&e.memoizedState!==null&&Nm(a,ea,e.memoizedState,e.memoizedProps);break;case 5:ri(e,t,a);break;case 3:case 4:var n=ea;ea=mr(e.stateNode.containerInfo),ri(e,t,a),ea=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ji,Ji=16777216,ri(e,t,a),Ji=n):ri(e,t,a));break;default:ri(e,t,a)}}function Ou(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ut=n,qu(n,e)}Ou(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eu(e),e=e.sibling}function Eu(e){switch(e.tag){case 0:case 11:case 15:Wi(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Wi(e);break;case 12:Wi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,tr(e)):Wi(e);break;default:Wi(e)}}function tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ut=n,qu(n,e)}Ou(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Za(8,t,t.return),tr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,tr(t));break;default:tr(t)}e=e.sibling}}function qu(e,t){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:Za(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Oi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ut=n;else e:for(a=e;ut!==null;){n=ut;var i=n.sibling,r=n.return;if(wu(n),n===a){ut=null;break e}if(i!==null){i.return=r,ut=i;break e}ut=r}}}var Bf={getCacheForType:function(e){var t=ht(et),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ht(et).controller.signal}},Lf=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ee=null,de=null,he=0,De=0,qt=null,Qa=!1,oi=!1,ss=!1,Ma=0,Qe=0,Ka=0,Mn=0,cs=0,Ft=0,si=0,$i=null,wt=null,us=!1,ar=0,Fu=0,nr=1/0,ir=null,Ja=null,rt=0,Wa=null,ci=null,Ca=0,ps=0,ds=null,Uu=null,Ii=0,fs=null;function Ut(){return(Se&2)!==0&&he!==0?he&-he:D.T!==null?ys():Ct()}function Bu(){if(Ft===0)if((he&536870912)===0||ve){var e=pn;pn<<=1,(pn&3932160)===0&&(pn=262144),Ft=e}else Ft=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Ft}function jt(e,t,a){(e===Ee&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(ui(e,0),$a(e,he,Ft,!1)),ra(e,a),((Se&2)===0||e!==Ee)&&(e===Ee&&((Se&2)===0&&(Mn|=a),Qe===4&&$a(e,he,Ft,!1)),ua(e))}function Lu(e,t,a){if((Se&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||dt(e,t),i=n?Yf(e,t):hs(e,t,!0),r=n;do{if(i===0){oi&&!n&&$a(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Gf(a)){i=hs(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;i=$i;var f=c.current.memoizedState.isDehydrated;if(f&&(ui(c,o).flags|=256),o=hs(c,o,!1),o!==2){if(ss&&!f){c.errorRecoveryDisabledLanes|=r,Mn|=r,i=4;break e}r=wt,wt=i,r!==null&&(wt===null?wt=r:wt.push.apply(wt,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){ui(e,0),$a(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:$a(n,t,Ft,!Qa);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=ar+300-it(),10<i)){if($a(n,t,Ft,!Qa),Wt(n,0,!0)!==0)break e;Ca=t,n.timeoutHandle=vp(Gu.bind(null,n,a,wt,ir,us,t,Ft,Mn,si,Qa,r,"Throttled",-0,0),i);break e}Gu(n,a,wt,ir,us,t,Ft,Mn,si,Qa,r,null,-0,0)}}break}while(!0);ua(e)}function Gu(e,t,a,n,i,r,o,c,f,S,M,O,w,j){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},ku(t,r,O);var Z=(r&62914560)===r?ar-it():(r&4194048)===r?Fu-it():0;if(Z=Dm(O,Z),Z!==null){Ca=r,e.cancelPendingCommit=Z(Ku.bind(null,e,t,r,a,n,i,o,c,f,M,O,null,w,j)),$a(e,r,o,!S);return}}Ku(e,t,r,a,n,i,o,c,f)}function Gf(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!Rt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $a(e,t,a,n){t&=~cs,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-Ae(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&Mt(e,a,t)}function lr(){return(Se&6)===0?(el(0),!1):!0}function ms(){if(de!==null){if(De===0)var e=de.return;else e=de,ba=_n=null,Mo(e),ei=null,qi=0,e=de;for(;e!==null;)gu(e.alternate,e),e=e.return;de=null}}function ui(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,om(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,ms(),Ee=e,de=a=ga(e.current,null),he=t,De=0,qt=null,Qa=!1,oi=dt(e,t),ss=!1,si=Ft=cs=Mn=Ka=Qe=0,wt=$i=null,us=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Ae(n),r=1<<i;t|=e[i],n&=~r}return Ma=t,wl(),a}function Hu(e,t){re=null,D.H=Pi,t===In||t===Ol?(t=i0(),De=3):t===go?(t=i0(),De=4):De=t===Vo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,de===null&&(Qe=1,Ql(e,Yt(t,e.current)))}function Yu(){var e=Ot.current;return e===null?!0:(he&4194048)===he?Zt===null:(he&62914560)===he||(he&536870912)!==0?e===Zt:!1}function Pu(){var e=D.H;return D.H=Pi,e===null?Pi:e}function Xu(){var e=D.A;return D.A=Bf,e}function rr(){Qe=4,Qa||(he&4194048)!==he&&Ot.current!==null||(oi=!0),(Ka&134217727)===0&&(Mn&134217727)===0||Ee===null||$a(Ee,he,Ft,!1)}function hs(e,t,a){var n=Se;Se|=2;var i=Pu(),r=Xu();(Ee!==e||he!==t)&&(ir=null,ui(e,t)),t=!1;var o=Qe;e:do try{if(De!==0&&de!==null){var c=de,f=qt;switch(De){case 8:ms(),o=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var S=De;if(De=0,qt=null,pi(e,c,f,S),a&&oi){o=0;break e}break;default:S=De,De=0,qt=null,pi(e,c,f,S)}}Hf(),o=Qe;break}catch(M){Hu(e,M)}while(!0);return t&&e.shellSuspendCounter++,ba=_n=null,Se=n,D.H=i,D.A=r,de===null&&(Ee=null,he=0,wl()),o}function Hf(){for(;de!==null;)Vu(de)}function Yf(e,t){var a=Se;Se|=2;var n=Pu(),i=Xu();Ee!==e||he!==t?(ir=null,nr=it()+500,ui(e,t)):oi=dt(e,t);e:do try{if(De!==0&&de!==null){t=de;var r=qt;t:switch(De){case 1:De=0,qt=null,pi(e,t,r,1);break;case 2:case 9:if(a0(r)){De=0,qt=null,Zu(t);break}t=function(){De!==2&&De!==9||Ee!==e||(De=7),ua(e)},r.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:a0(r)?(De=0,qt=null,Zu(t)):(De=0,qt=null,pi(e,t,r,7));break;case 5:var o=null;switch(de.tag){case 26:o=de.memoizedState;case 5:case 27:var c=de;if(o?Rp(o):c.stateNode.complete){De=0,qt=null;var f=c.sibling;if(f!==null)de=f;else{var S=c.return;S!==null?(de=S,or(S)):de=null}break t}}De=0,qt=null,pi(e,t,r,5);break;case 6:De=0,qt=null,pi(e,t,r,6);break;case 8:ms(),Qe=6;break e;default:throw Error(u(462))}}Pf();break}catch(M){Hu(e,M)}while(!0);return ba=_n=null,D.H=n,D.A=i,Se=a,de!==null?0:(Ee=null,he=0,wl(),Qe)}function Pf(){for(;de!==null&&!Cn();)Vu(de)}function Vu(e){var t=xu(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,t===null?or(e):de=t}function Zu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=uu(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=uu(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Mo(t);default:gu(a,t),t=de=Xc(t,Ma),t=xu(a,t,Ma)}e.memoizedProps=e.pendingProps,t===null?or(e):de=t}function pi(e,t,a,n){ba=_n=null,Mo(t),ei=null,qi=0;var i=t.return;try{if(Rf(e,i,t,a,he)){Qe=1,Ql(e,Yt(a,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;Qe=1,Ql(e,Yt(a,e.current)),de=null;return}t.flags&32768?(ve||n===1?e=!0:oi||(he&536870912)!==0?e=!1:(Qa=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ot.current,n!==null&&n.tag===13&&(n.flags|=16384))),Qu(t,e)):or(t)}function or(e){var t=e;do{if((t.flags&32768)!==0){Qu(t,Qa);return}e=t.return;var a=Ef(t.alternate,t,Ma);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Qe===0&&(Qe=5)}function Qu(e,t){do{var a=qf(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Qe=6,de=null}function Ku(e,t,a,n,i,r,o,c,f){e.cancelPendingCommit=null;do sr();while(rt!==0);if((Se&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=ao,Rn(e,a,r,o,c,f),e===Ee&&(de=Ee=null,he=0),ci=t,Wa=e,Ca=a,ps=r,ds=i,Uu=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qf(st,function(){return ep(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=q.p,q.p=2,o=Se,Se|=4;try{Ff(e,t,a)}finally{Se=o,q.p=i,D.T=n}}rt=1,Ju(),Wu(),$u()}}function Ju(){if(rt===1){rt=0;var e=Wa,t=ci,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=q.p;q.p=2;var i=Se;Se|=4;try{Mu(t,e);var r=js,o=qc(e.containerInfo),c=r.focusedElem,f=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&Ec(c.ownerDocument.documentElement,c)){if(f!==null&&Wr(c)){var S=f.start,M=f.end;if(M===void 0&&(M=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(M,c.value.length);else{var O=c.ownerDocument||document,w=O&&O.defaultView||window;if(w.getSelection){var j=w.getSelection(),Z=c.textContent.length,ae=Math.min(f.start,Z),Ce=f.end===void 0?ae:Math.min(f.end,Z);!j.extend&&ae>Ce&&(o=Ce,Ce=ae,ae=o);var y=Oc(c,ae),h=Oc(c,Ce);if(y&&h&&(j.rangeCount!==1||j.anchorNode!==y.node||j.anchorOffset!==y.offset||j.focusNode!==h.node||j.focusOffset!==h.offset)){var z=O.createRange();z.setStart(y.node,y.offset),j.removeAllRanges(),ae>Ce?(j.addRange(z),j.extend(h.node,h.offset)):(z.setEnd(h.node,h.offset),j.addRange(z))}}}}for(O=[],j=c;j=j.parentNode;)j.nodeType===1&&O.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var R=O[c];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}br=!!ws,js=ws=null}finally{Se=i,q.p=n,D.T=a}}e.current=t,rt=2}}function Wu(){if(rt===2){rt=0;var e=Wa,t=ci,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=q.p;q.p=2;var i=Se;Se|=4;try{Du(e,t.alternate,t)}finally{Se=i,q.p=n,D.T=a}}rt=3}}function $u(){if(rt===4||rt===3){rt=0,Ea();var e=Wa,t=ci,a=Ca,n=Uu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,ci=Wa=null,Iu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ja=null),He(a),t=t.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=q.p,q.p=2,D.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];r(c.value,{componentStack:c.stack})}}finally{D.T=t,q.p=i}}(Ca&3)!==0&&sr(),ua(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===fs?Ii++:(Ii=0,fs=e):Ii=0,el(0)}}function Iu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oi(t)))}function sr(){return Ju(),Wu(),$u(),ep()}function ep(){if(rt!==5)return!1;var e=Wa,t=ps;ps=0;var a=He(Ca),n=D.T,i=q.p;try{q.p=32>a?32:a,D.T=null,a=ds,ds=null;var r=Wa,o=Ca;if(rt=0,ci=Wa=null,Ca=0,(Se&6)!==0)throw Error(u(331));var c=Se;if(Se|=4,Eu(r.current),Ru(r,r.current,o,a),Se=c,el(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Tt,r)}catch{}return!0}finally{q.p=i,D.T=n,Iu(e,t)}}function tp(e,t,a){t=Yt(a,t),t=Xo(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(ra(e,2),ua(e))}function we(e,t,a){if(e.tag===3)tp(e,e,a);else for(;t!==null;){if(t.tag===3){tp(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ja===null||!Ja.has(n))){e=Yt(a,e),a=au(2),n=Pa(t,a,2),n!==null&&(nu(a,n,t,e),ra(n,2),ua(n));break}}t=t.return}}function xs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Lf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(ss=!0,i.add(a),e=Xf.bind(null,e,t,a),t.then(e,e))}function Xf(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(he&a)===a&&(Qe===4||Qe===3&&(he&62914560)===he&&300>it()-ar?(Se&2)===0&&ui(e,0):cs|=a,si===he&&(si=0)),ua(e)}function ap(e,t){t===0&&(t=Bt()),e=gn(e,t),e!==null&&(ra(e,t),ua(e))}function Vf(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ap(e,a)}function Zf(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),ap(e,a)}function Qf(e,t){return ot(e,t)}var cr=null,di=null,vs=!1,ur=!1,gs=!1,Ia=0;function ua(e){e!==di&&e.next===null&&(di===null?cr=di=e:di=di.next=e),ur=!0,vs||(vs=!0,Jf())}function el(e,t){if(!gs&&ur){gs=!0;do for(var a=!1,n=cr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,c=n.pingedLanes;r=(1<<31-Ae(42|e)+1)-1,r&=i&~(o&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,rp(n,r))}else r=he,r=Wt(n,n===Ee?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||dt(n,r)||(a=!0,rp(n,r));n=n.next}while(a);gs=!1}}function Kf(){np()}function np(){ur=vs=!1;var e=0;Ia!==0&&rm()&&(e=Ia);for(var t=it(),a=null,n=cr;n!==null;){var i=n.next,r=ip(n,t);r===0?(n.next=null,a===null?cr=i:a.next=i,i===null&&(di=a)):(a=n,(e!==0||(r&3)!==0)&&(ur=!0)),n=i}rt!==0&&rt!==5||el(e),Ia!==0&&(Ia=0)}function ip(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Ae(r),c=1<<o,f=i[o];f===-1?((c&a)===0||(c&n)!==0)&&(i[o]=$t(c,t)):f<=t&&(e.expiredLanes|=c),r&=~c}if(t=Ee,a=he,a=Wt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&sn(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||dt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&sn(n),He(a)){case 2:case 8:a=Ge;break;case 32:a=st;break;case 268435456:a=Oe;break;default:a=st}return n=lp.bind(null,e),a=ot(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&sn(n),e.callbackPriority=2,e.callbackNode=null,2}function lp(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sr()&&e.callbackNode!==a)return null;var n=he;return n=Wt(e,e===Ee?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Lu(e,n,t),ip(e,it()),e.callbackNode!=null&&e.callbackNode===a?lp.bind(null,e):null)}function rp(e,t){if(sr())return null;Lu(e,t,!0)}function Jf(){sm(function(){(Se&6)!==0?ot(Ke,Kf):np()})}function ys(){if(Ia===0){var e=Wn;e===0&&(e=un,un<<=1,(un&261888)===0&&(un=256)),Ia=e}return Ia}function op(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function sp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wf(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=op((i[_t]||null).action),o=n.submitter;o&&(t=(t=o[_t]||null)?op(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var c=new zl("action","action",null,n,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ia!==0){var f=o?sp(i,o):new FormData(i);Bo(a,{pending:!0,data:f,method:i.method,action:r},null,f)}}else typeof r=="function"&&(c.preventDefault(),f=o?sp(i,o):new FormData(i),Bo(a,{pending:!0,data:f,method:i.method,action:r},r,f))},currentTarget:i}]})}}for(var bs=0;bs<to.length;bs++){var _s=to[bs],$f=_s.toLowerCase(),If=_s[0].toUpperCase()+_s.slice(1);It($f,"on"+If)}It(Bc,"onAnimationEnd"),It(Lc,"onAnimationIteration"),It(Gc,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(hf,"onTransitionRun"),It(xf,"onTransitionStart"),It(vf,"onTransitionCancel"),It(Hc,"onTransitionEnd"),Fn("onMouseEnter",["mouseout","mouseover"]),Fn("onMouseLeave",["mouseout","mouseover"]),Fn("onPointerEnter",["pointerout","pointerover"]),Fn("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function cp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var c=n[o],f=c.instance,S=c.currentTarget;if(c=c.listener,f!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=S;try{r(i)}catch(M){Dl(M)}i.currentTarget=null,r=f}else for(o=0;o<n.length;o++){if(c=n[o],f=c.instance,S=c.currentTarget,c=c.listener,f!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=S;try{r(i)}catch(M){Dl(M)}i.currentTarget=null,r=f}}}}function fe(e,t){var a=t[kr];a===void 0&&(a=t[kr]=new Set);var n=e+"__bubble";a.has(n)||(up(t,e,2,!1),a.add(n))}function zs(e,t,a){var n=0;t&&(n|=4),up(a,e,n,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[pr]){e[pr]=!0,nc.forEach(function(a){a!=="selectionchange"&&(em.has(a)||zs(a,!1,e),zs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,zs("selectionchange",!1,t))}}function up(e,t,a,n){switch(Bp(t)){case 2:var i=Am;break;case 8:i=Tm;break;default:i=Us}a=i.bind(null,t,a,e),i=void 0,!Hr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Ns(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var c=n.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=n.return;o!==null;){var f=o.tag;if((f===3||f===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=On(c),o===null)return;if(f=o.tag,f===5||f===6||f===26||f===27){n=r=o;continue e}c=c.parentNode}}n=n.return}hc(function(){var S=r,M=Lr(a),O=[];e:{var w=Yc.get(e);if(w!==void 0){var j=zl,Z=e;switch(e){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":j=Vd;break;case"focusin":Z="focus",j=Vr;break;case"focusout":Z="blur",j=Vr;break;case"beforeblur":case"afterblur":j=Vr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Kd;break;case Bc:case Lc:case Gc:j=Fd;break;case Hc:j=Wd;break;case"scroll":case"scrollend":j=Rd;break;case"wheel":j=Id;break;case"copy":case"cut":case"paste":j=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=bc;break;case"toggle":case"beforetoggle":j=tf}var ae=(t&4)!==0,Ce=!ae&&(e==="scroll"||e==="scrollend"),y=ae?w!==null?w+"Capture":null:w;ae=[];for(var h=S,z;h!==null;){var R=h;if(z=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||z===null||y===null||(R=Si(h,y),R!=null&&ae.push(al(h,R,z))),Ce)break;h=h.return}0<ae.length&&(w=new j(w,Z,null,a,M),O.push({event:w,listeners:ae}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",w&&a!==Br&&(Z=a.relatedTarget||a.fromElement)&&(On(Z)||Z[kn]))break e;if((j||w)&&(w=M.window===M?M:(w=M.ownerDocument)?w.defaultView||w.parentWindow:window,j?(Z=a.relatedTarget||a.toElement,j=S,Z=Z?On(Z):null,Z!==null&&(Ce=b(Z),ae=Z.tag,Z!==Ce||ae!==5&&ae!==27&&ae!==6)&&(Z=null)):(j=null,Z=S),j!==Z)){if(ae=gc,R="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(ae=bc,R="onPointerLeave",y="onPointerEnter",h="pointer"),Ce=j==null?w:zi(j),z=Z==null?w:zi(Z),w=new ae(R,h+"leave",j,a,M),w.target=Ce,w.relatedTarget=z,R=null,On(M)===S&&(ae=new ae(y,h+"enter",Z,a,M),ae.target=z,ae.relatedTarget=Ce,R=ae),Ce=R,j&&Z)t:{for(ae=tm,y=j,h=Z,z=0,R=y;R;R=ae(R))z++;R=0;for(var I=h;I;I=ae(I))R++;for(;0<z-R;)y=ae(y),z--;for(;0<R-z;)h=ae(h),R--;for(;z--;){if(y===h||h!==null&&y===h.alternate){ae=y;break t}y=ae(y),h=ae(h)}ae=null}else ae=null;j!==null&&pp(O,w,j,ae,!1),Z!==null&&Ce!==null&&pp(O,Ce,Z,ae,!0)}}e:{if(w=S?zi(S):window,j=w.nodeName&&w.nodeName.toLowerCase(),j==="select"||j==="input"&&w.type==="file")var ye=Ac;else if(wc(w))if(Tc)ye=df;else{ye=uf;var Q=cf}else j=w.nodeName,!j||j.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?S&&Ur(S.elementType)&&(ye=Ac):ye=pf;if(ye&&(ye=ye(e,S))){jc(O,ye,a,M);break e}Q&&Q(e,w,S),e==="focusout"&&S&&w.type==="number"&&S.memoizedProps.value!=null&&Fr(w,"number",w.value)}switch(Q=S?zi(S):window,e){case"focusin":(wc(Q)||Q.contentEditable==="true")&&(Yn=Q,$r=S,Ci=null);break;case"focusout":Ci=$r=Yn=null;break;case"mousedown":Ir=!0;break;case"contextmenu":case"mouseup":case"dragend":Ir=!1,Fc(O,a,M);break;case"selectionchange":if(mf)break;case"keydown":case"keyup":Fc(O,a,M)}var se;if(Qr)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Hn?Nc(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(_c&&a.locale!=="ko"&&(Hn||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Hn&&(se=xc()):(Fa=M,Yr="value"in Fa?Fa.value:Fa.textContent,Hn=!0)),Q=dr(S,xe),0<Q.length&&(xe=new yc(xe,e,null,a,M),O.push({event:xe,listeners:Q}),se?xe.data=se:(se=Dc(a),se!==null&&(xe.data=se)))),(se=nf?lf(e,a):rf(e,a))&&(xe=dr(S,"onBeforeInput"),0<xe.length&&(Q=new yc("onBeforeInput","beforeinput",null,a,M),O.push({event:Q,listeners:xe}),Q.data=se)),Wf(O,e,S,a,M)}cp(O,t)})}function al(e,t,a){return{instance:e,listener:t,currentTarget:a}}function dr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Si(e,a),i!=null&&n.unshift(al(e,i,r)),i=Si(e,t),i!=null&&n.push(al(e,i,r))),e.tag===3)return n;e=e.return}return[]}function tm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pp(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var c=a,f=c.alternate,S=c.stateNode;if(c=c.tag,f!==null&&f===n)break;c!==5&&c!==26&&c!==27||S===null||(f=S,i?(S=Si(a,r),S!=null&&o.unshift(al(a,S,f))):i||(S=Si(a,r),S!=null&&o.push(al(a,S,f)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var am=/\r\n?/g,nm=/\u0000|\uFFFD/g;function dp(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(nm,"")}function fp(e,t){return t=dp(t),dp(e)===t}function Me(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Bn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Bn(e,""+n);break;case"className":xl(e,"class",n);break;case"tabIndex":xl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":xl(e,a,n);break;case"style":fc(e,n,r);break;case"data":if(t!=="object"){xl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=gl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",i.name,i,null),Me(e,t,"formEncType",i.formEncType,i,null),Me(e,t,"formMethod",i.formMethod,i,null),Me(e,t,"formTarget",i.formTarget,i,null)):(Me(e,t,"encType",i.encType,i,null),Me(e,t,"method",i.method,i,null),Me(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=gl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=xa);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":fe("beforetoggle",e),fe("toggle",e),hl(e,"popover",n);break;case"xlinkActuate":ha(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ha(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ha(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ha(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ha(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ha(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ha(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ha(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ha(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":hl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Md.get(a)||a,hl(e,a,n))}}function Ds(e,t,a,n,i,r){switch(a){case"style":fc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Bn(e,n):(typeof n=="number"||typeof n=="bigint")&&Bn(e,""+n);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[_t]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):hl(e,a,n)}}}function vt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Me(e,t,r,o,a,null)}}i&&Me(e,t,"srcSet",a.srcSet,a,null),n&&Me(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var c=r=o=i=null,f=null,S=null;for(n in a)if(a.hasOwnProperty(n)){var M=a[n];if(M!=null)switch(n){case"name":i=M;break;case"type":o=M;break;case"checked":f=M;break;case"defaultChecked":S=M;break;case"value":r=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Me(e,t,n,M,a,null)}}cc(e,r,c,f,S,o,i,!1);return;case"select":fe("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":r=c;break;case"defaultValue":o=c;break;case"multiple":n=c;default:Me(e,t,i,c,a,null)}t=r,a=o,e.multiple=!!n,t!=null?Un(e,!!n,t,!1):a!=null&&Un(e,!!n,a,!0);return;case"textarea":fe("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":n=c;break;case"defaultValue":i=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Me(e,t,o,c,a,null)}pc(e,n,i,r);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(n=a[f],n!=null))switch(f){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Me(e,t,f,n,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(n=0;n<tl.length;n++)fe(tl[n],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Me(e,t,S,n,a,null)}return;default:if(Ur(t)){for(M in a)a.hasOwnProperty(M)&&(n=a[M],n!==void 0&&Ds(e,t,M,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&Me(e,t,c,n,a,null))}function im(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,c=null,f=null,S=null,M=null;for(j in a){var O=a[j];if(a.hasOwnProperty(j)&&O!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=O;default:n.hasOwnProperty(j)||Me(e,t,j,null,n,O)}}for(var w in n){var j=n[w];if(O=a[w],n.hasOwnProperty(w)&&(j!=null||O!=null))switch(w){case"type":r=j;break;case"name":i=j;break;case"checked":S=j;break;case"defaultChecked":M=j;break;case"value":o=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,t));break;default:j!==O&&Me(e,t,w,j,n,O)}}qr(e,o,c,f,S,M,r,i);return;case"select":j=o=c=w=null;for(r in a)if(f=a[r],a.hasOwnProperty(r)&&f!=null)switch(r){case"value":break;case"multiple":j=f;default:n.hasOwnProperty(r)||Me(e,t,r,null,n,f)}for(i in n)if(r=n[i],f=a[i],n.hasOwnProperty(i)&&(r!=null||f!=null))switch(i){case"value":w=r;break;case"defaultValue":c=r;break;case"multiple":o=r;default:r!==f&&Me(e,t,i,r,n,f)}t=c,a=o,n=j,w!=null?Un(e,!!a,w,!1):!!n!=!!a&&(t!=null?Un(e,!!a,t,!0):Un(e,!!a,a?[]:"",!1));return;case"textarea":j=w=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Me(e,t,c,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":w=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Me(e,t,o,i,n,r)}uc(e,w,j);return;case"option":for(var Z in a)if(w=a[Z],a.hasOwnProperty(Z)&&w!=null&&!n.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Me(e,t,Z,null,n,w)}for(f in n)if(w=n[f],j=a[f],n.hasOwnProperty(f)&&w!==j&&(w!=null||j!=null))switch(f){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Me(e,t,f,w,n,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)w=a[ae],a.hasOwnProperty(ae)&&w!=null&&!n.hasOwnProperty(ae)&&Me(e,t,ae,null,n,w);for(S in n)if(w=n[S],j=a[S],n.hasOwnProperty(S)&&w!==j&&(w!=null||j!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:Me(e,t,S,w,n,j)}return;default:if(Ur(t)){for(var Ce in a)w=a[Ce],a.hasOwnProperty(Ce)&&w!==void 0&&!n.hasOwnProperty(Ce)&&Ds(e,t,Ce,void 0,n,w);for(M in n)w=n[M],j=a[M],!n.hasOwnProperty(M)||w===j||w===void 0&&j===void 0||Ds(e,t,M,w,n,j);return}}for(var y in a)w=a[y],a.hasOwnProperty(y)&&w!=null&&!n.hasOwnProperty(y)&&Me(e,t,y,null,n,w);for(O in n)w=n[O],j=a[O],!n.hasOwnProperty(O)||w===j||w==null&&j==null||Me(e,t,O,w,n,j)}function mp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,o=i.initiatorType,c=i.duration;if(r&&c&&mp(o)){for(o=0,c=i.responseEnd,n+=1;n<a.length;n++){var f=a[n],S=f.startTime;if(S>c)break;var M=f.transferSize,O=f.initiatorType;M&&mp(O)&&(f=f.responseEnd,o+=M*(f<c?1:(c-S)/(f-S)))}if(--n,t+=8*(r+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ws=null,js=null;function fr(e){return e.nodeType===9?e:e.ownerDocument}function hp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=null;function rm(){var e=window.event;return e&&e.type==="popstate"?e===Ts?!1:(Ts=e,!0):(Ts=null,!1)}var vp=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(cm)}:vp;function cm(e){setTimeout(function(){throw e})}function en(e){return e==="head"}function yp(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),xi(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")nl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,nl(a);for(var r=a.firstChild;r;){var o=r.nextSibling,c=r.nodeName;r[_i]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&nl(e.ownerDocument.body);a=i}while(a);xi(t)}function bp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ms(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ms(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function um(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[_i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function pm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function _p(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Cs(e){return e.data==="$?"||e.data==="$~"}function Rs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ks=null;function zp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Np(e,t,a){switch(t=fr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function nl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Or(e)}var Kt=new Map,Dp=new Set;function mr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ra=q.d;q.d={f:fm,r:mm,D:hm,C:xm,L:vm,m:gm,X:bm,S:ym,M:_m};function fm(){var e=Ra.f(),t=lr();return e||t}function mm(e){var t=En(e);t!==null&&t.tag===5&&t.type==="form"?H0(t):Ra.r(e)}var fi=typeof document>"u"?null:document;function wp(e,t,a){var n=fi;if(n&&typeof t=="string"&&t){var i=Gt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Dp.has(i)||(Dp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),vt(t,"link",e),ct(t),n.head.appendChild(t)))}}function hm(e){Ra.D(e),wp("dns-prefetch",e,null)}function xm(e,t){Ra.C(e,t),wp("preconnect",e,t)}function vm(e,t,a){Ra.L(e,t,a);var n=fi;if(n&&e&&t){var i='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Gt(a.imageSizes)+'"]')):i+='[href="'+Gt(e)+'"]';var r=i;switch(t){case"style":r=mi(e);break;case"script":r=hi(e)}Kt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Kt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(il(r))||t==="script"&&n.querySelector(ll(r))||(t=n.createElement("link"),vt(t,"link",e),ct(t),n.head.appendChild(t)))}}function gm(e,t){Ra.m(e,t);var a=fi;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Gt(n)+'"][href="'+Gt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hi(e)}if(!Kt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Kt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(r)))return}n=a.createElement("link"),vt(n,"link",e),ct(n),a.head.appendChild(n)}}}function ym(e,t,a){Ra.S(e,t,a);var n=fi;if(n&&e){var i=qn(n).hoistableStyles,r=mi(e);t=t||"default";var o=i.get(r);if(!o){var c={loading:0,preload:null};if(o=n.querySelector(il(r)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Kt.get(r))&&Os(e,a);var f=o=n.createElement("link");ct(f),vt(f,"link",e),f._p=new Promise(function(S,M){f.onload=S,f.onerror=M}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,hr(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:c},i.set(r,o)}}}function bm(e,t){Ra.X(e,t);var a=fi;if(a&&e){var n=qn(a).hoistableScripts,i=hi(e),r=n.get(i);r||(r=a.querySelector(ll(i)),r||(e=E({src:e,async:!0},t),(t=Kt.get(i))&&Es(e,t),r=a.createElement("script"),ct(r),vt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function _m(e,t){Ra.M(e,t);var a=fi;if(a&&e){var n=qn(a).hoistableScripts,i=hi(e),r=n.get(i);r||(r=a.querySelector(ll(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Kt.get(i))&&Es(e,t),r=a.createElement("script"),ct(r),vt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function jp(e,t,a,n){var i=(i=le.current)?mr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=mi(a.href),a=qn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mi(a.href);var r=qn(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(il(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kt.set(e,a),r||zm(i,e,a,o.state))),t&&n===null)throw Error(u(528,""));return o}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hi(a),a=qn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mi(e){return'href="'+Gt(e)+'"'}function il(e){return'link[rel="stylesheet"]['+e+"]"}function Ap(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),vt(t,"link",a),ct(t),e.head.appendChild(t))}function hi(e){return'[src="'+Gt(e)+'"]'}function ll(e){return"script[async]"+e}function Tp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(n)return t.instance=n,ct(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ct(n),vt(n,"style",i),hr(n,a.precedence,e),t.instance=n;case"stylesheet":i=mi(a.href);var r=e.querySelector(il(i));if(r)return t.state.loading|=4,t.instance=r,ct(r),r;n=Ap(a),(i=Kt.get(i))&&Os(n,i),r=(e.ownerDocument||e).createElement("link"),ct(r);var o=r;return o._p=new Promise(function(c,f){o.onload=c,o.onerror=f}),vt(r,"link",n),t.state.loading|=4,hr(r,a.precedence,e),t.instance=r;case"script":return r=hi(a.src),(i=e.querySelector(ll(r)))?(t.instance=i,ct(i),i):(n=a,(i=Kt.get(r))&&(n=E({},a),Es(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),ct(i),vt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,hr(n,a.precedence,e));return t.instance}function hr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var c=n[o];if(c.dataset.precedence===t)r=c;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xr=null;function Mp(e,t,a){if(xr===null){var n=new Map,i=xr=new Map;i.set(a,n)}else i=xr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[_i]||r[ft]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var c=n.get(o);c?c.push(r):n.set(o,[r])}}return n}function Cp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Sm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nm(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=mi(n.href),r=t.querySelector(il(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ct(r);return}r=t.ownerDocument||t,n=Ap(n),(i=Kt.get(i))&&Os(n,i),r=r.createElement("link"),ct(r);var o=r;o._p=new Promise(function(c,f){o.onload=c,o.onerror=f}),vt(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qs=0;function Dm(e,t){return e.stylesheets&&e.count===0&&yr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&yr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&qs===0&&(qs=62500*lm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function vr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gr=null;function yr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gr=new Map,t.forEach(wm,e),gr=null,vr.call(e))}function wm(e,t){if(!(t.state.loading&4)){var a=gr.get(e);if(a)var n=a.get(null);else{a=new Map,gr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=vr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var rl={$$typeof:_,Provider:null,Consumer:null,_currentValue:T,_currentValue2:T,_threadCount:0};function jm(e,t,a,n,i,r,o,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=da(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.hiddenUpdates=da(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function kp(e,t,a,n,i,r,o,c,f,S,M,O){return e=new jm(e,t,a,o,f,S,M,O,c),t=1,r===!0&&(t|=24),r=kt(3,null,null,t),e.current=r,r.stateNode=e,t=ho(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},yo(r),e}function Op(e){return e?(e=Vn,e):Vn}function Ep(e,t,a,n,i,r){i=Op(i),n.context===null?n.context=i:n.pendingContext=i,n=Ya(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Pa(e,n,t),a!==null&&(jt(a,e,t),Ui(a,e,t))}function qp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fs(e,t){qp(e,t),(e=e.alternate)&&qp(e,t)}function Fp(e){if(e.tag===13||e.tag===31){var t=gn(e,67108864);t!==null&&jt(t,e,67108864),Fs(e,67108864)}}function Up(e){if(e.tag===13||e.tag===31){var t=Ut();t=lt(t);var a=gn(e,t);a!==null&&jt(a,e,t),Fs(e,t)}}var br=!0;function Am(e,t,a,n){var i=D.T;D.T=null;var r=q.p;try{q.p=2,Us(e,t,a,n)}finally{q.p=r,D.T=i}}function Tm(e,t,a,n){var i=D.T;D.T=null;var r=q.p;try{q.p=8,Us(e,t,a,n)}finally{q.p=r,D.T=i}}function Us(e,t,a,n){if(br){var i=Bs(n);if(i===null)Ns(e,t,n,_r,a),Lp(e,n);else if(Cm(i,e,t,a,n))n.stopPropagation();else if(Lp(e,n),t&4&&-1<Mm.indexOf(e)){for(;i!==null;){var r=En(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=ze(r.pendingLanes);if(o!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var f=1<<31-Ae(o);c.entanglements[1]|=f,o&=~f}ua(r),(Se&6)===0&&(nr=it()+500,el(0))}}break;case 31:case 13:c=gn(r,2),c!==null&&jt(c,r,2),lr(),Fs(r,2)}if(r=Bs(n),r===null&&Ns(e,t,n,_r,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Ns(e,t,n,null,a)}}function Bs(e){return e=Lr(e),Ls(e)}var _r=null;function Ls(e){if(_r=null,e=On(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _r=e,null}function Bp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case Ke:return 2;case Ge:return 8;case st:case pt:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Gs=!1,tn=null,an=null,nn=null,ol=new Map,sl=new Map,ln=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lp(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(t.pointerId)}}function cl(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=En(t),t!==null&&Fp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cm(e,t,a,n,i){switch(t){case"focusin":return tn=cl(tn,e,t,a,n,i),!0;case"dragenter":return an=cl(an,e,t,a,n,i),!0;case"mouseover":return nn=cl(nn,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return ol.set(r,cl(ol.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,sl.set(r,cl(sl.get(r)||null,e,t,a,n,i)),!0}return!1}function Gp(e){var t=On(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,ma(e.priority,function(){Up(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,ma(e.priority,function(){Up(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Bs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Br=n,a.target.dispatchEvent(n),Br=null}else return t=En(a),t!==null&&Fp(t),e.blockedOn=a,!1;t.shift()}return!0}function Hp(e,t,a){zr(e)&&a.delete(t)}function Rm(){Gs=!1,tn!==null&&zr(tn)&&(tn=null),an!==null&&zr(an)&&(an=null),nn!==null&&zr(nn)&&(nn=null),ol.forEach(Hp),sl.forEach(Hp)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Rm)))}var Nr=null;function Yp(e){Nr!==e&&(Nr=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Nr===e&&(Nr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Ls(n||a)===null)continue;break}var r=En(a);r!==null&&(e.splice(t,3),t-=3,Bo(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function xi(e){function t(f){return Sr(f,e)}tn!==null&&Sr(tn,e),an!==null&&Sr(an,e),nn!==null&&Sr(nn,e),ol.forEach(t),sl.forEach(t);for(var a=0;a<ln.length;a++){var n=ln[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)Gp(a),a.blockedOn===null&&ln.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[_t]||null;if(typeof r=="function")o||Yp(a);else if(o){var c=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[_t]||null)c=o.formAction;else if(Ls(i)!==null)continue}else c=o.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),Yp(a)}}}function Pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Hs(e){this._internalRoot=e}Dr.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=Ut();Ep(a,n,e,t,null,null)},Dr.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ep(e.current,2,null,e,null,null),lr(),t[kn]=null}};function Dr(e){this._internalRoot=e}Dr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ln.length&&t!==0&&t<ln[a].priority;a++);ln.splice(a,0,e),a===0&&Gp(e)}};var Xp=s.version;if(Xp!=="19.2.8")throw Error(u(527,Xp,"19.2.8"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var km={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{Tt=wr.inject(km),je=wr}catch{}}return pl.createRoot=function(e,t){if(!v(e))throw Error(u(299));var a=!1,n="",i=$0,r=I0,o=eu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=kp(e,1,!1,null,null,a,n,null,i,r,o,Pp),e[kn]=t.current,Ss(e),new Hs(t)},pl.hydrateRoot=function(e,t,a){if(!v(e))throw Error(u(299));var n=!1,i="",r=$0,o=I0,c=eu,f=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=kp(e,1,!0,t,a??null,n,i,f,r,o,c,Pp),t.context=Op(null),a=t.current,n=Ut(),n=lt(n),i=Ya(n),i.callback=null,Pa(a,i,n),a=n,t.current.lanes=a,ra(t,a),ua(t),e[kn]=t.current,Ss(e),new Dr(t)},pl.version="19.2.8",pl}var td;function Pm(){if(td)return Ps.exports;td=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Ps.exports=Ym(),Ps.exports}var Xm=Pm();const Vm=Em(Xm);var k=Is();const ad="golden_ratio_user_prefs",Zm=500;class Qm{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(ad);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(ad,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,d){const u=performance.now(),v=u-this.lastSampleTime;this.lastSampleTime=u;const b={timestamp:u,type:s,value:d,duration:v};this.samples.push(b),this.samples.length>Zm&&this.samples.shift(),this.analyzeSample(b),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const d=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+d*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,d),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,d),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const d=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+d*.1,d<.003?this.prefs.rotationStyle="careful":d<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const d=String(Math.round(s.value));this.prefs.fractalWeights[d]=(this.prefs.fractalWeights[d]||0)+1,this.currentFractal=d}analyzeStyleChange(s){const d=String(Math.round(s.value));this.prefs.renderStyleWeights[d]=(this.prefs.renderStyleWeights[d]||0)+1,this.currentStyle=d}analyzePaletteChange(s){const d=String(Math.round(s.value));this.prefs.paletteWeights[d]=(this.prefs.paletteWeights[d]||0)+1,this.currentPalette=d}analyzeCameraChange(s){const d=String(Math.round(s.value));this.prefs.cameraModeWeights[d]=(this.prefs.cameraModeWeights[d]||0)+1,this.currentCamera=d}getPreferred(s){let d=0,u=null;for(const[v,b]of Object.entries(s))b>d&&(d=b,u=v);return u}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const d=this.getPreferred(this.prefs.fractalWeights);d!==null&&(s.preferredFractal=Number(d));const u=this.getPreferred(this.prefs.renderStyleWeights);u!==null&&(s.preferredStyle=Number(u));const v=this.getPreferred(this.prefs.paletteWeights);v!==null&&(s.preferredPalette=Number(v));const b=this.getPreferred(this.prefs.cameraModeWeights);b!==null&&(s.preferredCamera=b)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const nd=new Qm,Km=`
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
      // 3: Smooth Vault Carving (ssub)
      let h = clamp(0.5 - 0.5 * (dB + current_d) / k, 0.0, 1.0);
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

  // Adaptive step budget: complex fractals at close zoom need many more steps
  let maxSteps: i32 = select(select(select(128, 160, cam_dist < 3.0), 200, cam_dist < 1.0), 200, false);
  // Scale-aware hit threshold: tighter at close range for clean surface convergence
  let hitScale = max(cam_dist * 0.0003, 0.0001);

  for (var i: i32 = 0; i < 200; i = i + 1) {
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

    // Conservative stepping near surface prevents overshooting thin features
    let absD = abs(d);
    let step_factor = select(select(0.65, 0.82, absD > 0.05), 0.92, absD > 0.5);
    let minStep = max(cam_dist * 0.00005, 0.0001);
    let step_d = max(absD * step_factor, minStep);
    t = t + step_d;
    if (t > max_dist) {
      break;
    }
  }

  // Refinement pass: snap to surface more precisely if we got close but didn't converge
  if (!hit && t < max_dist) {
    for (var j: i32 = 0; j < 12; j = j + 1) {
      let p2 = ro + rd * t;
      let d2 = sceneSDF(p2).x;
      if (abs(d2) < hitScale * 0.5) {
        hit = true;
        break;
      }
      t = t - d2 * 0.6;
      if (t < 0.0) { t = 0.001; break; }
    }
  }

  let bg_rad = length(uv);
  var col = vec3<f32>(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u.time * 0.3));
  col = col + u.accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit) {
    let p = ro + rd * t;
    let base_n = calcNormal(p, min(0.001 * max(t, 0.1) + 0.0003, 0.002));
    let ao = calcAO(p, base_n, t);
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
    // curvNorm provides surface variation; length(p-ro) is ray distance (always meaningful)
    // palette_rotation animates the seed over time for dynamic color cycling
    let seedAnim = u.palette_seed + u.palette_rotation * u.time * 2.5;
    let phase = fract(effectiveTrap * 2.0 + curvNorm * 1.5 + length(p - ro) * 0.3 + u.time * 0.04 + seedAnim * 0.01);
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
    let specular = vec3<f32>(1.0, 0.97, 0.92) * spec1 * 0.55 * ao; // Near-white specular for visible highlights
    let rim = u.accent_color * fresnel * 0.28 * (0.3 + 0.7 * ao); // Stronger rim for edge definition

    // Full lighting: ambient + diffuse + bounce + specular + rim + SSS
    col = ambient + diffuse + bounceCol + specular + rim + sssCol;
    col = col * (0.35 + 0.65 * ao); // Balanced AO — preserves brightness while adding depth

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

    // Distance-relative atmospheric falloff
    // Smooth fog interpolation — no discontinuous jumps with zoom
    let fogStart: f32 = mix(16.0, max(2.0, cam_dist + 2.5), smoothstep(0.5, 3.0, cam_dist));
    let fogDensity: f32 = mix(0.012, 0.02, smoothstep(0.3, 1.5, cam_dist));
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
`,ka=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function Ar(p){switch(p){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;default:return 0}}function Jm(p){switch(p){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function Wm(p){switch(p){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function $m(p){switch(p){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function Im(p){switch(p){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class pd{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||ka.find(d=>d.id===s.paletteId)||ka[0]}computeIndices(s){return{fractalIdx:Ar(s.type),hybridIdx:Ar(s.hybridType||s.type),tertiaryIdx:Ar(s.tertiaryType||"riemannZeta"),compositeOpIdx:Jm(s.compositeOp),cameraModeIdx:Wm(s.cameraMode),sliceAxisIdx:$m(s.sliceAxis),renderStyleIdx:Im(s.renderStyle)}}packUniforms(s,d,u,v,b){const x=this.canvas.width,A=this.canvas.height;return s[0]=x,s[1]=A,s[2]=d,s[3]=u.phiMultiplier,s[4]=u.rotX,s[5]=u.rotY,s[6]=u.zoom,s[7]=b.fractalIdx,s[8]=u.iterations,s[9]=u.glowIntensity,s[10]=u.morphSpeed,s[11]=b.hybridIdx,s[12]=u.hybridBlend??0,s[13]=u.boxFold??1.2,s[14]=u.sphereFold??.65,s[15]=u.interiorCut??.35,s[16]=v.primary[0],s[17]=v.primary[1],s[18]=v.primary[2],s[19]=b.tertiaryIdx,s[20]=v.secondary[0],s[21]=v.secondary[1],s[22]=v.secondary[2],s[23]=u.tertiaryBlend??0,s[24]=v.accent[0],s[25]=v.accent[1],s[26]=v.accent[2],s[27]=b.compositeOpIdx,s[28]=u.smoothK??.35,s[29]=u.warpStrength??.3,s[30]=u.octaveLayers??2,s[31]=b.cameraModeIdx,s[32]=u.camPosX??0,s[33]=u.camPosY??0,s[34]=u.camPosZ??0,s[35]=u.slicePlane??0,s[36]=u.headlampPower??.3,s[37]=u.volumetricFog??.15,s[38]=b.sliceAxisIdx,s[39]=b.renderStyleIdx,s[40]=v.ambient?v.ambient[0]:.02,s[41]=v.ambient?v.ambient[1]:.02,s[42]=v.ambient?v.ambient[2]:.02,s[43]=u.paletteSeed??0,s[44]=u.paletteRotation?1:0,s[45]=0,s[46]=0,s[47]=0,s}}class ec extends pd{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!ec.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),d=new Promise(b=>setTimeout(()=>b(null),5e3));if(this.adapter=await Promise.race([s,d]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const b=this.adapter.info;b&&(b.vendor||b.description)?this.adapterInfo=`${b.vendor||""} ${b.description||b.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(b=>{console.warn(`WebGPU device lost: ${b.message}`,b),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const u=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:u,alphaMode:"premultiplied"});try{const b=this.device.createCommandEncoder();b.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([b.finish()])}catch(b){console.debug("Initial clear pass handled:",b)}const v=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:Km});if("getCompilationInfo"in v)try{const x=(await v.getCompilationInfo()).messages.filter(A=>A.type==="error");if(x.length>0){for(const A of x)console.error(`[WGSL Compile Error] Line ${A.lineNum}:${A.linePos}: ${A.message}`);return!1}}catch(b){console.debug("Compilation info inspection skipped:",b)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_main",targets:[{format:u}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,d){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const u=this.canvas.width,v=this.canvas.height;if(u===0||v===0)return;const b=this.resolvePalette(d),x=this.computeIndices(d);this.packUniforms(this.uniformValues,s,d,b,x),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const A=this.device.createCommandEncoder(),N=this.context.getCurrentTexture().createView(),g=A.beginRenderPass({colorAttachments:[{view:N,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});g.setPipeline(this.pipeline),g.setBindGroup(0,this.bindGroup),g.draw(3,1,0,0),g.end(),this.device.queue.submit([A.finish()])}catch(A){console.debug("WebGPU render frame skipped:",A.message)}}destroy(){var s,d;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(d=this.device)==null||d.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const eh=`#version 300 es
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
      // 3: Smooth Vault Carving (ssub)
      float h = clamp(0.5 - 0.5 * (dB + current_d) / k, 0.0, 1.0);
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

  // Adaptive step budget: complex fractals at close zoom need many more steps
  int maxSteps = (cam_dist < 1.0) ? 200 : (cam_dist < 3.0) ? 160 : 128;
  // Scale-aware hit threshold: tighter at close range for clean surface convergence
  float hitScale = max(cam_dist * 0.0003, 0.0001);

  for (int i = 0; i < 200; i++) {
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

    // Conservative stepping near surface prevents overshooting thin features
    float absD = abs(d);
    float step_factor = (absD > 0.5) ? 0.92 : (absD > 0.05) ? 0.82 : 0.65;
    float minStep = max(cam_dist * 0.00005, 0.0001);
    float step_d = max(absD * step_factor, minStep);
    t += step_d;
    if (t > max_dist) break;
  }

  // Refinement pass: snap to surface more precisely if we got close but didn't converge
  if (!hit && t < max_dist) {
    for (int j = 0; j < 12; j++) {
      vec3 p = ro + rd * t;
      float d = sceneSDF(p).x;
      if (abs(d) < hitScale * 0.5) {
        hit = true;
        break;
      }
      t -= d * 0.6; // Back-track and approach more carefully
      if (t < 0.0) { t = 0.001; break; }
    }
  }

  float bg_rad = length(uv);
  vec3 col = vec3(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u_time * 0.3));
  col += u_accent_color * 0.015 * exp(-bg_rad * 2.0);

  if (hit) {
    vec3 p = ro + rd * t;
    vec3 base_n = calcNormal(p, min(0.001 * max(t, 0.1) + 0.0003, 0.002));
    float ao = calcAO(p, base_n, t);
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
    // curvNorm provides surface variation; length(p-ro) is ray distance (always meaningful)
    // palette_rotation animates the seed over time for dynamic color cycling
    float seedAnim = u_palette_seed + u_palette_rotation * u_time * 2.5;
    float phase = fract(effectiveTrap * 2.0 + curvNorm * 1.5 + length(p - ro) * 0.3 + u_time * 0.04 + seedAnim * 0.01);
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
    vec3 specular = vec3(1.0, 0.97, 0.92) * spec1 * 0.55 * ao; // Near-white specular for visible highlights
    vec3 rim = u_accent_color * fresnel * 0.28 * (0.3 + 0.7 * ao); // Stronger rim for edge definition

    // Full lighting: ambient + diffuse + bounce + specular + rim + SSS
    col = ambient + diffuse + bounceCol + specular + rim + sssCol;
    col *= (0.35 + 0.65 * ao); // Balanced AO — preserves brightness while adding depth

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

    // Distance-relative atmospheric falloff
    // Smooth fog interpolation — no discontinuous jumps with zoom
    float fogStart = mix(16.0, max(2.0, cam_dist + 2.5), smoothstep(0.5, 3.0, cam_dist));
    float fogDensity = mix(0.012, 0.02, smoothstep(0.3, 1.5, cam_dist));
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
`,nh=ah;class ih extends pd{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline"}init(){console.group("[WebGL2] === INITIALIZATION START ==="),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const s=this.canvas.getBoundingClientRect();(s.width===0||s.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let d=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",d?"SUCCESS":"FAILED"),d||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),d=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",d?"SUCCESS":"FAILED")),d||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),d=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",d?"SUCCESS":"FAILED")),!d){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const F=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return F&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",F.getParameter(F.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=d,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",d.getParameter(d.VERSION)),console.info("[WebGL2] GL_RENDERER:",d.getParameter(d.RENDERER)),console.info("[WebGL2] GL_VENDOR:",d.getParameter(d.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",d.getParameter(d.SHADING_LANGUAGE_VERSION));const u=d.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(u==null?void 0:u.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",u==null?void 0:u.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",u==null?void 0:u.includes("WEBGL_debug_renderer_info"));try{const F=d.getExtension("WEBGL_debug_renderer_info");if(F){const E=d.getParameter(F.UNMASKED_RENDERER_WEBGL);E&&(this.rendererInfo=E)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const v=this.compileShader(d.VERTEX_SHADER,th),b=this.compileShader(d.FRAGMENT_SHADER,nh);if(!v||!b)return!1;const x=d.createProgram();if(!x)return!1;if(d.attachShader(x,v),d.attachShader(x,b),d.linkProgram(x),d.deleteShader(v),d.deleteShader(b),!d.getProgramParameter(x,d.LINK_STATUS))return console.error("WebGL Program Link Error:",d.getProgramInfoLog(x)),!1;this.program=x;const A=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=d.createVertexArray(),d.bindVertexArray(this.vao),this.vbo=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,this.vbo),d.bufferData(d.ARRAY_BUFFER,A,d.STATIC_DRAW);const N=d.getAttribLocation(x,"a_position");return d.enableVertexAttribArray(N),d.vertexAttribPointer(N,2,d.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed","u_palette_rotation"].forEach(F=>{this.uniformLocs[F]=d.getUniformLocation(x,F)}),!0}compileShader(s,d){if(!this.gl)return null;const u=this.gl,v=u.createShader(s);if(!v)return null;const b=u.getExtension("KHR_parallel_shader_compile");if(u.shaderSource(v,d),u.compileShader(v),b){const x=performance.now(),A=15e3;for(;!u.getShaderParameter(v,u.COMPILE_STATUS);){const N=b.COMPLETION_STATUS_KHR;if(u.getShaderParameter(v,N))break;if(performance.now()-x>A)return console.error("[WebGL2] Shader compilation timeout after 15s"),console.error("Shader info:",u.getShaderInfoLog(v)),u.deleteShader(v),null}}return u.getShaderParameter(v,u.COMPILE_STATUS)?(console.info("[WebGL2] Shader compiled successfully ("+(s===u.VERTEX_SHADER?"vertex":"fragment")+")"),v):(console.error("Shader compilation error:",u.getShaderInfoLog(v)),u.deleteShader(v),null)}render(s,d){const u=this.gl;if(!u||!this.program||!this.vao)return;u.viewport(0,0,this.canvas.width,this.canvas.height),u.useProgram(this.program),u.bindVertexArray(this.vao);const v=this.resolvePalette(d),b=this.computeIndices(d),x=new Float32Array(48);this.packUniforms(x,s,d,v,b);const A=(F,E)=>{const L=this.uniformLocs[F];L&&u.uniform1f(L,E)},N=(F,E,L)=>{const U=this.uniformLocs[F];U&&u.uniform2f(U,E,L)},g=(F,E,L,U)=>{const Y=this.uniformLocs[F];Y&&u.uniform3f(Y,E,L,U)};N("u_resolution",x[0],x[1]),A("u_time",x[2]),A("u_phi_val",x[3]),N("u_cam_rot",x[4],x[5]),A("u_zoom",x[6]),A("u_fractal_type",x[7]),A("u_iterations",x[8]),A("u_glow_intensity",x[9]),A("u_morph_speed",x[10]),A("u_hybrid_type",x[11]),A("u_hybrid_blend",x[12]),A("u_box_fold",x[13]),A("u_sphere_fold",x[14]),A("u_interior_cut",x[15]),g("u_primary_color",x[16],x[17],x[18]),A("u_tertiary_type",x[19]),g("u_secondary_color",x[20],x[21],x[22]),A("u_tertiary_blend",x[23]),g("u_accent_color",x[24],x[25],x[26]),A("u_compose_op",x[27]),A("u_smooth_k",x[28]),A("u_warp_strength",x[29]),A("u_octave_layers",x[30]),A("u_cam_mode",x[31]),g("u_cam_pos",x[32],x[33],x[34]),A("u_slice_plane",x[35]),A("u_headlamp_power",x[36]),A("u_volumetric_fog",x[37]),A("u_slice_axis",x[38]),A("u_render_style",x[39]),A("u_palette_seed",x[43]),A("u_palette_rotation",x[44]),u.drawArrays(u.TRIANGLES,0,3)}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function lh(p,s){const{forcedBackend:d,isEmbeddedBrowser:u,isMobileDevice:v,paramsRef:b,onTelemetryUpdate:x,onEngineReady:A,onNextSpecimen:N,onPrevSpecimen:g,onInteraction:F,screenshotRequested:E,onScreenshotCaptured:L}=s,U=k.useRef(null),[Y,J]=k.useState(()=>d==="webgl2"?"webgl2":d==="webgpu"?u?"webgl2":"webgpu":"webgl2"),[W,B]=k.useState(!0),[ce,_]=k.useState(!1),[P,me]=k.useState("Initializing..."),[Ne,te]=k.useState(""),[Re,qe]=k.useState(0),[Fe,Pe]=k.useState(0),[Le,$e]=k.useState(0),[Ie,K]=k.useState(0),[D,q]=k.useState([0,0]),T=k.useRef(null),V=k.useRef(null),ee=k.useRef("Initializing..."),m=k.useRef(x);m.current=x;const C=k.useRef(L);C.current=L;const G=k.useRef(N);G.current=N;const X=k.useRef(g);X.current=g;const ne=k.useRef(F);ne.current=F;const le=k.useRef([]),pe=k.useRef(0),Ve=k.useRef(0),_e=k.useRef(null),aa=k.useRef(0),na=k.useRef(!1),Xe=k.useRef(new Set),Oa=k.useRef(!1),At=k.useRef(!0),Jt=k.useRef(!1),H=k.useRef(!1),ue=k.useRef(!1),$=k.useRef({x:0,y:0}),ke=k.useRef({x:0,y:0}),ot=k.useRef(0),sn=k.useRef(0),Cn=.92,Ea=1e-4;k.useEffect(()=>{H.current=E},[E]),k.useEffect(()=>{if(d==="webgl2")J("webgl2");else if(d==="webgpu"){if(u){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),na.current=!0,J("webgl2");return}na.current=!1,J("webgpu")}else d==="auto"&&J("webgl2")},[d]);const it=k.useCallback(()=>{const ge=U.current,Ke=p.current;if(!ge||!Ke)return;const Ge=u||v?1.5:2,st=Math.min(window.devicePixelRatio||1,Ge),pt=Ke.clientWidth||window.innerWidth||800,Oe=Ke.clientHeight||window.innerHeight||600,ia=Math.floor(pt*st),la=Math.floor(Oe*st);(ge.width!==ia||ge.height!==la)&&(ge.width=Math.max(ia,320),ge.height=Math.max(la,240))},[u,v]);return k.useEffect(()=>{const ge=U.current;if(!ge)return;it();let Ke=!1;const Ge=setTimeout(()=>{Ke||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),B(!1))},12e3),st=setTimeout(()=>{!Jt.current&&!Ke&&console.error("[useRenderEngine] Engine setup timed out after 8s — GPU unavailable")},8e3);async function pt(){if(!ge)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",Y),B(!0),Jt.current=!1,_(!1),T.current&&(T.current.destroy(),T.current=null),V.current&&(V.current.destroy(),V.current=null),Y==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const Ae=new ec(ge);if(await Ae.init()&&!Ke){T.current=Ae,Jt.current=!0,_(!0),ee.current="WebGPU (WGSL)",me("WebGPU (WGSL)"),te(Ae.adapterInfo),B(!1),console.info(`[DIAG] Engine ready: WebGPU | ${Ae.adapterInfo} | ${ge.width}x${ge.height} | fractal=${b.current.type} | palette=${b.current.paletteId} | renderStyle=${b.current.renderStyle} | paletteSeed=${b.current.paletteSeed??0}`),A==null||A();return}else{na.current=!0,Ke?B(!1):J("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const je=new ih(ge);je.init()&&!Ke?(V.current=je,Jt.current=!0,_(!0),ee.current="WebGL2 (GLSL)",me("WebGL2 (GLSL)"),te(je.rendererInfo),B(!1),console.info(`[DIAG] Engine ready: WebGL2 | ${je.rendererInfo} | ${ge.width}x${ge.height} | fractal=${b.current.type} | palette=${b.current.paletteId} | renderStyle=${b.current.renderStyle} | paletteSeed=${b.current.paletteSeed??0}`),A==null||A()):(B(!1),A==null||A())}pt().catch(je=>{console.error("[useRenderEngine] Engine setup crashed:",je),B(!1),A==null||A()});const Oe=je=>{je.preventDefault(),Oa.current=!0},ia=()=>{Oa.current=!1,pt()};ge.addEventListener("webglcontextlost",Oe,!1),ge.addEventListener("webglcontextrestored",ia,!1);const la=p.current;let Tt=null;return la&&(Tt=new ResizeObserver(()=>{Ke||it()}),Tt.observe(la)),()=>{var je,yt;Ke=!0,clearTimeout(st),clearTimeout(Ge),ge.removeEventListener("webglcontextlost",Oe),ge.removeEventListener("webglcontextrestored",ia),Tt&&Tt.disconnect(),(je=T.current)==null||je.destroy(),(yt=V.current)==null||yt.destroy()}},[Y,it]),k.useEffect(()=>{let ge=!0,Ke=performance.now();const Ge=()=>{At.current=!document.hidden,At.current&&(Ke=performance.now())};document.addEventListener("visibilitychange",Ge);const st=pt=>{var je,yt;if(!ge)return;if(Oa.current){_e.current=requestAnimationFrame(st);return}if(!At.current){_e.current=requestAnimationFrame(st);return}if(!Jt.current){setTimeout(()=>{ge&&(_e.current=requestAnimationFrame(st))},1e3);return}const Oe=b.current,ia=pt-Ke,la=Oe.targetFps||60,Tt=la>=240?0:1e3/la;if(Tt<=0||ia>=Tt-.75){const Ae=Math.min(ia,100);Ke=pt,aa.current+=Ae/1e3;const cn=aa.current;if(Oe.cameraMode==="flyThrough"){const dt=Oe.rotX,$t=Oe.rotY,Bt=Math.cos(dt),da=Math.sin(dt),ra=Math.cos($t),Rn=Math.sin($t),Mt=[da*ra,Rn,-Bt*ra],fa=[Bt,0,da],fn=[0,1,0];let lt=1.4*(Ae/1e3);(Xe.current.has("ShiftLeft")||Xe.current.has("ShiftRight"))&&(lt*=2.8);let He=0,Ct=0,ma=0;(Xe.current.has("KeyW")||Xe.current.has("ArrowUp"))&&(He+=Mt[0]*lt,Ct+=Mt[1]*lt,ma+=Mt[2]*lt),(Xe.current.has("KeyS")||Xe.current.has("ArrowDown"))&&(He-=Mt[0]*lt,Ct-=Mt[1]*lt,ma-=Mt[2]*lt),(Xe.current.has("KeyA")||Xe.current.has("ArrowLeft"))&&(He-=fa[0]*lt,ma-=fa[2]*lt),(Xe.current.has("KeyD")||Xe.current.has("ArrowRight"))&&(He+=fa[0]*lt,ma+=fa[2]*lt),(Xe.current.has("KeyE")||Xe.current.has("Space"))&&(Ct+=fn[1]*lt),(Xe.current.has("KeyQ")||Xe.current.has("KeyC"))&&(Ct-=fn[1]*lt),(He!==0||Ct!==0||ma!==0)&&(b.current={...Oe,camPosX:(Oe.camPosX??0)+He,camPosY:(Oe.camPosY??0)+Ct,camPosZ:(Oe.camPosZ??0)+ma})}const Cr=Oe.autoRotate?cn*Oe.autoRotateSpeed*.12:0,Rr=Oe.autoRotate?Math.sin(cn*.18)*.06:0;let un=0,pn=0;if(!ue.current&&(Math.abs(ke.current.x)>Ea||Math.abs(ke.current.y)>Ea)){const dt=Oe.zoom,$t=.0045*Math.max(.12,Math.min(1,dt/2.8)),Bt=Ae;un=ke.current.x*Bt*$t*.5,pn=ke.current.y*Bt*$t*.5,ke.current.x*=Cn,ke.current.y*=Cn,Math.abs(ke.current.x)<Ea&&(ke.current.x=0),Math.abs(ke.current.y)<Ea&&(ke.current.y=0)}const dn={...Oe,rotX:Oe.rotX+Cr+un,rotY:Math.max(-1.52,Math.min(1.52,Oe.rotY+Rr+pn))},ze=U.current;if(ze&&ze.width>0&&ze.height>0&&(T.current?T.current.render(cn,dn):V.current&&V.current.render(cn,dn)),H.current&&ze)try{const dt=ze.toDataURL("image/png");(je=C.current)==null||je.call(C,dt)}catch(dt){console.error("Screenshot capture failed",dt)}const Wt=le.current;if(Wt.push(Ae),Wt.length>72&&Wt.shift(),pt-pe.current>250){pe.current=pt;const dt=Wt.reduce((He,Ct)=>He+Ct,0)/Wt.length,$t=Ae>0?Math.round(1e3/Ae):0,Bt=dt>0?Math.round(1e3/dt):0,da=[...Wt].sort((He,Ct)=>Ct-He),ra=Math.floor(da.length*.05),Rn=da[ra]||Ae,Mt=Rn>0?Math.round(1e3/Rn):0,fa=T.current?T.current.adapterInfo:V.current?V.current.rendererInfo:"GPU Engine",fn=Y==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",lt={fps:$t,avgFps:Bt,frameTimeMs:parseFloat(Ae.toFixed(2)),onePercentLow:Mt,backend:fn,adapterName:fa,resolution:[(ze==null?void 0:ze.width)||0,(ze==null?void 0:ze.height)||0],drsScale:1,targetFps:Oe.targetFps,interiorDistance:0};if((yt=m.current)==null||yt.call(m,lt),qe($t),Pe(Bt),$e(parseFloat(Ae.toFixed(2))),K(Mt),q([(ze==null?void 0:ze.width)||0,(ze==null?void 0:ze.height)||0]),Ve.current||(Ve.current=pt),pt-Ve.current>3e4){Ve.current=pt;const He=b.current;console.info(`[DIAG] Health: fps=${$t} avg=${Bt} 1%=${Mt} | fractal=${He.type} hybrid=${He.hybridType} | style=${He.renderStyle} cam=${He.cameraMode} | palette=${He.paletteId} seed=${He.paletteSeed??0} rot=${He.paletteRotation} | audio=${He.enableAudio} tuning=${He.audioTuning} | res=${ze==null?void 0:ze.width}x${ze==null?void 0:ze.height}`)}}}_e.current=requestAnimationFrame(st)};return _e.current=requestAnimationFrame(st),()=>{ge=!1,document.removeEventListener("visibilitychange",Ge),_e.current&&cancelAnimationFrame(_e.current)}},[Y]),k.useEffect(()=>{const ge=Ge=>{var st,pt,Oe;((st=Ge.target)==null?void 0:st.tagName)!=="INPUT"&&(Ge.repeat||(Xe.current.add(Ge.code),b.current.cameraMode!=="flyThrough"&&(Ge.key===" "||Ge.key==="ArrowRight"||Ge.key==="ArrowDown"||Ge.key==="PageDown"?(Ge.preventDefault(),(pt=G.current)==null||pt.call(G)):(Ge.key==="ArrowLeft"||Ge.key==="ArrowUp"||Ge.key==="PageUp")&&(Ge.preventDefault(),(Oe=X.current)==null||Oe.call(X)))))},Ke=Ge=>{Xe.current.delete(Ge.code)};return window.addEventListener("keydown",ge),window.addEventListener("keyup",Ke),()=>{window.removeEventListener("keydown",ge),window.removeEventListener("keyup",Ke)}},[]),{activeEngineType:Y,isCompiling:W,isEngineReady:ce,backendLabel:P,adapterInfo:Ne,fps:Re,avgFps:Fe,frameTimeMs:Le,onePercentLow:Ie,resolution:D,canvasRef:U,keysPressedRef:Xe,isDraggingRef:ue,velocityRef:ke,lastMousePosRef:$,lastInteractionReportTimeRef:sn,lastMoveTimeRef:ot,params:b.current}}const rh=({params:p,onParamsChange:s,onTelemetryUpdate:d,screenshotRequested:u,onScreenshotCaptured:v,forcedBackend:b="auto",onInteraction:x,onNextSpecimen:A,onPrevSpecimen:N,onEngineReady:g,scrollMode:F="feed"})=>{const E=k.useRef(null),L=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),U=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),Y=k.useRef(p);Y.current=p;const J=k.useRef(null);k.useRef(0);const W=lh(E,{forcedBackend:b,isEmbeddedBrowser:L,isMobileDevice:U,paramsRef:Y,onTelemetryUpdate:d,onEngineReady:g,onNextSpecimen:A,onPrevSpecimen:N,onInteraction:x,screenshotRequested:u,onScreenshotCaptured:v}),{canvasRef:B,isDraggingRef:ce,velocityRef:_,lastMousePosRef:P,lastInteractionReportTimeRef:me,lastMoveTimeRef:Ne,activeEngineType:te,isCompiling:Re}=W,qe=K=>{ce.current=!0,P.current={x:K.clientX,y:K.clientY},_.current={x:0,y:0},K.target.setPointerCapture(K.pointerId)},Fe=K=>{if(!ce.current)return;const D=K.clientX-P.current.x,q=K.clientY-P.current.y,T=performance.now(),V=Math.max(1,T-Ne.current);Ne.current=T,P.current={x:K.clientX,y:K.clientY};const ee=Math.hypot(D,q);T-me.current>300&&(me.current=T,x==null||x(0,ee));const m=Y.current.zoom,C=.0045*Math.max(.12,Math.min(1,m/2.8));_.current={x:D/V,y:q/V},s(G=>({...G,rotX:G.rotX+D*C,rotY:Math.max(-1.52,Math.min(1.52,G.rotY+q*C))})),nd.recordInteraction("rotate",Math.hypot(D,q)/V)},Pe=K=>{ce.current=!1;try{K.target.releasePointerCapture(K.pointerId)}catch{}},Le=K=>{K.preventDefault();const D=Math.exp(Math.sign(K.deltaY)*Math.min(Math.abs(K.deltaY)*.0018,.28));x==null||x(Math.abs(K.deltaY)*.02,0),s(q=>({...q,zoom:Math.max(.02,Math.min(64,q.zoom*D))})),nd.recordInteraction("zoom",Math.log(D)*10)},$e=K=>{if(K.preventDefault(),K.touches.length===2){const D=K.touches[0],q=K.touches[1],T=Math.hypot(D.clientX-q.clientX,D.clientY-q.clientY);if(J.current!==null&&J.current>5){const V=J.current/Math.max(T,1),ee=Math.pow(V,.95);x==null||x(Math.abs(J.current-T)*.04,0),s(m=>({...m,zoom:Math.max(.02,Math.min(64,m.zoom*ee))}))}J.current=T}},Ie=K=>{K.preventDefault(),J.current=null};return l.jsxs("div",{ref:E,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[Re&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",te==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),l.jsx("canvas",{ref:B,id:"fractal-canvas",className:"w-full h-full block touch-none",onPointerDown:qe,onPointerMove:Fe,onPointerUp:Pe,onPointerCancel:Pe,onWheel:Le,onTouchStart:K=>K.preventDefault(),onTouchMove:$e,onTouchEnd:Ie},te)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sh=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,d,u)=>u?u.toUpperCase():d.toLowerCase()),id=p=>{const s=sh(p);return s.charAt(0).toUpperCase()+s.slice(1)},dd=(...p)=>p.filter((s,d,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===d).join(" ").trim(),ch=p=>{for(const s in p)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=k.forwardRef(({color:p="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:v="",children:b,iconNode:x,...A},N)=>k.createElement("svg",{ref:N,...uh,width:s,height:s,stroke:p,strokeWidth:u?Number(d)*24/Number(s):d,className:dd("lucide",v),...!b&&!ch(A)&&{"aria-hidden":"true"},...A},[...x.map(([g,F])=>k.createElement(g,F)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(p,s)=>{const d=k.forwardRef(({className:u,...v},b)=>k.createElement(ph,{ref:b,iconNode:s,className:dd(`lucide-${oh(id(p))}`,`lucide-${p}`,u),...v}));return d.displayName=id(p),d};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],fl=oe("activity",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],fd=oe("atom",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],gi=oe("book-open",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],xh=oe("bookmark-plus",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],gh=oe("box",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],bh=oe("brain",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],zh=oe("camera",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Nh=oe("chart-column",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],md=oe("check",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jh=oe("chevron-down",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Th=oe("chevron-left",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hd=oe("chevron-right",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rh=oe("chevron-up",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mr=oe("compass",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ks=oe("cpu",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],xd=oe("crosshair",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Fh=oe("droplet",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Bh=oe("ellipsis",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vd=oe("eye",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Hh=oe("flame",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Ph=oe("grid-3x3",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Tr=oe("heart",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],Zh=oe("infinity",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kh=oe("info",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],yi=oe("layers",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],$h=oe("maximize",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],gd=oe("mouse-pointer",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],t2=oe("music",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yd=oe("play",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],i2=oe("radio",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],r2=oe("scan",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s2=oe("search",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],u2=oe("share-2",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Js=oe("shield-check",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bi=oe("sparkles",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],m2=oe("trash-2",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],bd=oe("user",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],tc=oe("volume-2",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],_d=oe("volume-x",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],y2=oe("wrench",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ml=oe("x",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],z2=oe("zoom-in",_2),S2=({telemetry:p,targetFps:s,phiMultiplier:d})=>{const[u,v]=k.useState([]),[b,x]=k.useState(!1);k.useEffect(()=>{p.frameTimeMs>0&&v(g=>[...g,p.frameTimeMs].slice(-40))},[p.frameTimeMs]);const A=s>0?1e3/s:6.94;s===144||s===0&&p.fps>=140;const N=p.frameTimeMs<=A*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${p.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:p.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>x(!b),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:b?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${p.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:p.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[p.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${N?"text-emerald-400":"text-amber-400"}`,children:p.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(p.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!b&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[s," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",A.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:u.map((g,F)=>{const E=Math.min(Math.max(g/20*100,8),100),L=g<=A*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${L?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${E}%`},title:`${g} ms`},F)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(bi,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:d.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:p.adapterName,children:p.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[p.resolution[0],"×",p.resolution[1]]})]})]})]})]})})},N2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},zd={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},D2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],ld={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},w2=1.61803398875,$s=137.507764;function jr(p,s,d){p=(p%360+360)%360,s=Math.max(0,Math.min(1,s)),d=Math.max(0,Math.min(1,d));const u=(1-Math.abs(2*d-1))*s,v=u*(1-Math.abs(p/60%2-1)),b=d-u/2;let x=0,A=0,N=0;return p<60?(x=u,A=v,N=0):p<120?(x=v,A=u,N=0):p<180?(x=0,A=u,N=v):p<240?(x=0,A=v,N=u):p<300?(x=v,A=0,N=u):(x=u,A=0,N=v),[x+b,A+b,N+b]}function j2(p,s){const d=p,u=(p+$s)%360,v=(p+$s*2)%360;return{id:`golden-gen-${Math.floor(p)}`,name:`Гармоника φ (${s})`,primary:jr(d,.85,.45),secondary:jr(u,.8,.55),accent:jr(v,.95,.65),ambient:jr(d,.6,.12)}}const on=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],vi={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона"},A2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5},Ws="golden_ratio_taste_profile_v2",T2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function M2(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class C2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const d=localStorage.getItem(Ws);if(d){const u=JSON.parse(d);return on.forEach(v=>{u.typeAffinities&&u.typeAffinities[v]===void 0&&(u.typeAffinities[v]=1)}),u}}catch{}const s={};return on.forEach(d=>{s[d]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(Ws,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(Ws,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}breedNextSpecimen(s){var Ie;this.currentGeneration++,this.taste.totalSpecimensExplored++;let d=s;if(!d){const K=on,D=K.map(V=>{const ee=Math.max(.2,this.taste.typeAffinities[V]||1),m=this.recentTypes.includes(V)?.05:1,C=this.currentGeneration<20?1.5:1;return ee*m*C}),q=D.reduce((V,ee)=>V+ee,0);let T=Math.random()*q;for(let V=0;V<K.length;V++){if(T<=D[V]){d=K[V];break}T-=D[V]}d||(d=K[Math.floor(Math.random()*K.length)]),this.recentTypes.push(d),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const u=Math.random()<.5;let v=this.taste.preferredHue;if(u){const K=Math.random()<.5?1:2;v=(v+$s*K+(Math.random()*30-15))%360}else v=Math.random()*360%360;let b;if(Math.random()<.65){const K=this.history.length>0?(Ie=this.history[this.history.length-1].palette)==null?void 0:Ie.id:"";let D=ka.filter(q=>q.id!==K);D.length===0&&(D=ka),b=D[Math.floor(Math.random()*D.length)]}else b=j2(v,`Ген #${this.currentGeneration}`);const A=(Math.random()-.5)*.08,N=parseFloat((w2+A).toFixed(5)),g=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),F=Math.max(12,Math.min(32,g)),E=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),L=parseFloat(E.toFixed(2)),U=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),Y=parseFloat(U.toFixed(2)),J=A2[d]*(.95+Math.random()*.1),W=Math.random()<.72;let B=d,ce=d,_=0,P=0,me="smoothUnion",Ne=1,te=.32,Re=.22,qe=`${vi[d]} • φ-${this.currentGeneration}`;if(W){const K=ld[d]||{partners:on.filter(V=>V!==d),ops:["smoothUnion","smoothMorph","domainWarp"]};B=K.partners[Math.floor(Math.random()*K.partners.length)],me=K.ops[Math.floor(Math.random()*K.ops.length)],_=parseFloat((.22+Math.random()*.26).toFixed(3)),te=parseFloat((.24+Math.random()*.26).toFixed(3)),Re=parseFloat((.15+Math.random()*.25).toFixed(3)),Ne=1;const D=zd[me],q=vi[d].split(" ")[0],T=vi[B].split(" ")[0];if(qe=`${q} ${D} ${T} • φ-${this.currentGeneration}`,Math.random()<.35){const ee=(ld[B]||{partners:on.filter(m=>m!==d&&m!==B)}).partners.filter(m=>m!==d&&m!==B);if(ee.length>0){ce=ee[Math.floor(Math.random()*ee.length)],P=parseFloat((.08+Math.random()*.18).toFixed(3));const m=vi[ce].split(" ")[0];qe=`${q} ${D} ${T} ⊕ ${m} • φ-${this.currentGeneration}`}}}const Fe=parseFloat((.7+Math.random()*1.5).toFixed(3)),Pe=parseFloat((.35+Math.random()*1.05).toFixed(3)),$e={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:qe,type:d,hybridType:B,tertiaryType:ce,compositeOp:me,hybridBlend:_,tertiaryBlend:P,smoothK:te,warpStrength:Re,octaveLayers:Ne,boxFold:Fe,sphereFold:Pe,interiorCut:0,palette:b,iterations:F,phiMultiplier:N,morphSpeed:L,glowIntensity:Y,zoom:J,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push($e),this.history.length>40&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,$e}registerEngagement(s,d,u,v){v.dwellTimeSeconds+=s,Math.abs(d)>.05&&v.zoomInteractions++,u>.05&&v.orbitInteractions++;const b=Math.min(35,v.dwellTimeSeconds/90*35),x=Math.min(18,Math.log1p(v.zoomInteractions)*3.2),A=Math.min(18,Math.log1p(v.orbitInteractions)*2.8),g=Math.round(Math.min(96,25+b+x+A));if(v.affinityScore=Math.max(v.affinityScore,g),v.dwellTimeSeconds>10&&v.affinityScore>50){const F=this.taste.typeAffinities[v.type]||1;if(this.taste.typeAffinities[v.type]=Math.min(4,F+.005),v.hybridType&&v.hybridBlend>.1){const B=this.taste.typeAffinities[v.hybridType]||1;this.taste.typeAffinities[v.hybridType]=Math.min(4,B+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+v.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+v.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+v.iterations*.01);const[E,L,U]=v.palette.primary,Y=Math.max(E,L,U),J=Math.min(E,L,U),W=Y-J;if(W>.05){let B=0;Y===E?B=60*((L-U)/W%6):Y===L?B=60*((U-E)/W+2):B=60*((E-L)/W+4),B<0&&(B+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+B*.03)%360}v.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=v.affinityScore),this.saveTasteProfile()}return v.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},d={geometry:0,complex:0,minimal:0,primes:0,attractors:0};on.forEach(x=>{const A=M2(x),N=this.taste.typeAffinities[x]||1;s[A]+=N,d[A]++});const v=["geometry","complex","minimal","primes","attractors"].map(x=>({archetype:x,label:T2[x],avg:d[x]>0?s[x]/d[x]:1})),b=v.reduce((x,A)=>x+A.avg,0);return v.map(x=>({archetype:x.archetype,label:x.label,percentage:Math.round(x.avg/Math.max(1e-4,b)*100),score:Math.min(100,Math.round(x.avg*25))}))}suggestRenderStyle(){const s=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],d=Math.random();if(d<.4)return"solid";const u=Math.floor((d-.4)/.6*(s.length-1));return s[Math.min(u+1,s.length-1)]}}const R2=({params:p,onParamsChange:s,onSelectFractalType:d,onCaptureScreenshot:u,onToggleFullscreen:v,onToggleInfoModal:b,onOpenAtlasModal:x,activeBackend:A,forcedBackend:N,onSelectBackend:g,onClose:F,tasteProfile:E,onSaveToFeed:L})=>{const[U,Y]=k.useState("architectures"),[J,W]=k.useState("all"),B=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],ce=J==="all"?B:B.filter(_=>_.group===J);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[x&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:x,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(gi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),L&&l.jsxs("button",{id:"save-to-feed-btn",onClick:L,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(xh,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:u,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(zh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:v,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx($h,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:b,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(gi,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:F,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(ml,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>Y("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>Y("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>Y("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>Y("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>Y("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>Y("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>Y("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>Y("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${U==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),U==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(_=>l.jsx("button",{onClick:()=>W(_.id),className:`px-2 py-1 rounded-md text-[9px] transition ${J===_.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:_.label},_.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:ce.map(_=>{const P=p.type===_.id;return l.jsxs("button",{id:`arch-btn-${_.id}`,onClick:()=>{d?d(_.id):s(me=>({...me,type:_.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${P?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${P?"text-amber-300":"text-neutral-200"}`,children:_.label}),P&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:_.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:_.formula})]},_.id)})})]}),U==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:D2.map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,compositeOp:_})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${p.compositeOp===_?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:N2[_]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:zd[_]})]},_))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:p.hybridType||p.type,onChange:_=>s(P=>({...P,hybridType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:on.map(_=>l.jsx("option",{value:_,children:vi[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.hybridBlend??.35,onChange:_=>s(P=>({...P,hybridBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:p.tertiaryType||"riemannZeta",onChange:_=>s(P=>({...P,tertiaryType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:on.map(_=>l.jsx("option",{value:_,children:vi[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.tertiaryBlend??.2,onChange:_=>s(P=>({...P,tertiaryBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:p.smoothK,onChange:_=>s(P=>({...P,smoothK:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.warpStrength,onChange:_=>s(P=>({...P,warpStrength:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),U==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,cameraMode:_.id})),className:`p-2 rounded-lg border text-left transition ${p.cameraMode===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:p.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,renderStyle:_.id})),className:`p-2 rounded-lg border text-left transition ${(p.renderStyle||"solid")===_.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:p.slicePlane>.01?`${(p.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(_=>l.jsx("button",{onClick:()=>s(P=>({...P,sliceAxis:_.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(p.sliceAxis||"golden")===_.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:_.label},_.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.slicePlane,onChange:_=>s(P=>({...P,slicePlane:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>s(_=>({..._,probeActive:!_.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>s(_=>({..._,macroMode:!_.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.headlampPower??1,onChange:_=>s(P=>({...P,headlampPower:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.volumetricFog??.4,onChange:_=>s(P=>({...P,volumetricFog:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((p.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:p.interiorCut??.4,onChange:_=>s(P=>({...P,interiorCut:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),U==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:ka.map(_=>{const P=p.paletteId===_.id;return l.jsxs("button",{onClick:()=>s(me=>({...me,paletteId:_.id,customPalette:_})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${P?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${P?"text-amber-300":"text-neutral-200"}`,children:_.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.primary.map(me=>Math.round(me*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.secondary.map(me=>Math.round(me*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.accent.map(me=>Math.round(me*255)).join(",")})`}})]})]},_.id)})}),U==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:p.phiMultiplier,onChange:_=>s(P=>({...P,phiMultiplier:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:p.iterations,onChange:_=>s(P=>({...P,iterations:parseInt(_.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[p.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:p.morphSpeed,onChange:_=>s(P=>({...P,morphSpeed:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:p.boxFold,onChange:_=>s(P=>({...P,boxFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:p.sphereFold,onChange:_=>s(P=>({...P,sphereFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),U==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(_=>l.jsx("button",{onClick:()=>s(P=>({...P,targetFps:_})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${p.targetFps===_?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_===0?"Uncapped":`${_} FPS`},_))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>s(_=>({..._,drsEnabled:!_.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(_=>l.jsx("button",{onClick:()=>g(_.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${N===_.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_.label},_.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",A]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),U==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[p.enableAudio?l.jsx(tc,{className:"w-4 h-4 text-amber-400"}):l.jsx(_d,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>s(_=>({..._,enableAudio:!_.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((p.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.audioVolume??.65,onChange:_=>s(P=>({...P,audioVolume:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(_=>l.jsxs("button",{onClick:()=>s(P=>({...P,audioTuning:_.id})),className:`w-full p-2 rounded-lg border text-left transition ${(p.audioTuning||"phi432")===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),U==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(E==null?void 0:E.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(E==null?void 0:E.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((E==null?void 0:E.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((E==null?void 0:E.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},k2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},O2=({specimen:p,resonanceScore:s,isInteracting:d,interactionType:u,onNext:v,onPrev:b,onFavorite:x,onOpenProfile:A,enableAudio:N,onToggleAudio:g,onOpenResearchModal:F,onOpenAtlas:E,isFeedOpen:L,onToggleFeed:U,isCurrentLiked:Y=!1,params:J})=>{const[W,B]=k.useState(!1),[ce,_]=k.useState(!1),[P,me]=k.useState(!1),[Ne,te]=k.useState(!1),[Re,qe]=k.useState(!1),Fe=k.useRef(null),Pe=k.useRef(!1);k.useEffect(()=>{B(Y)},[p==null?void 0:p.id,Y]);const Le=()=>{Fe.current&&clearTimeout(Fe.current),Fe.current=setTimeout(()=>{Pe.current||(_(!1),me(!1),te(!1))},3e3)},$e=()=>{_(!0),me(!0),Le()},Ie=()=>{te(T=>!T),_(!0),Fe.current&&clearTimeout(Fe.current)};k.useEffect(()=>($e(),()=>{Fe.current&&clearTimeout(Fe.current)}),[]),k.useEffect(()=>{const T=ee=>{(ee.clientY<80||ee.clientY>window.innerHeight-120)&&$e()},V=ee=>{const m=ee.target;m.closest("#top-right-bar")||m.closest("#top-right-trigger")||m.closest("#neuro-feed-bar")||(me(!0),Le())};return window.addEventListener("mousemove",T),window.addEventListener("touchstart",V,{passive:!0}),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("touchstart",V)}},[]);const K=()=>{B(!0),x()},D=()=>{if(!p)return;const T=J,V=new URLSearchParams({type:p.type,hybrid:p.hybridType,tertiary:p.tertiaryType,op:p.compositeOp,blend:p.hybridBlend.toFixed(3),tertiaryBlend:p.tertiaryBlend.toFixed(3),smoothK:p.smoothK.toFixed(3),warp:p.warpStrength.toFixed(3),octaves:String(p.octaveLayers),boxFold:p.boxFold.toFixed(3),sphereFold:p.sphereFold.toFixed(3),interiorCut:p.interiorCut.toFixed(3),iterations:String(p.iterations),phi:p.phiMultiplier.toFixed(9),morphSpeed:p.morphSpeed.toFixed(3),glow:p.glowIntensity.toFixed(3),zoom:p.zoom.toFixed(3),name:p.name,palette:p.palette.id,paletteSeed:String((T==null?void 0:T.paletteSeed)??0),paletteRotation:T!=null&&T.paletteRotation?"1":"0",renderStyle:(T==null?void 0:T.renderStyle)??"solid",cameraMode:(T==null?void 0:T.cameraMode)??"orbit",camX:((T==null?void 0:T.camPosX)??0).toFixed(3),camY:((T==null?void 0:T.camPosY)??0).toFixed(3),camZ:((T==null?void 0:T.camPosZ)??-3.2).toFixed(3),headlamp:((T==null?void 0:T.headlampPower)??0).toFixed(3),fog:((T==null?void 0:T.volumetricFog)??.4).toFixed(3),slicePlane:((T==null?void 0:T.slicePlane)??0).toFixed(3),sliceAxis:(T==null?void 0:T.sliceAxis)??"golden",audio:T!=null&&T.enableAudio?"1":"0",audioVol:((T==null?void 0:T.audioVolume)??.65).toFixed(2),audioTuning:(T==null?void 0:T.audioTuning)??"phi432",drs:T!=null&&T.drsEnabled?"1":"0"}),ee=`${window.location.origin}${window.location.pathname}#${V.toString()}`;navigator.share?navigator.share({title:p.name,text:`Фрактал: ${p.name}`,url:ee}).catch(()=>{}):navigator.clipboard.writeText(ee).then(()=>{qe(!0),setTimeout(()=>qe(!1),2e3)}).catch(()=>{const m=document.createElement("textarea");m.value=ee,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),qe(!0),setTimeout(()=>qe(!1),2e3)})},q=p!=null&&p.compositeOp?k2[p.compositeOp]||p.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{Pe.current=!0,_(!0),te(!0),Fe.current&&clearTimeout(Fe.current)},onMouseLeave:()=>{Pe.current=!1,te(!1),Le()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${Ne?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:Ie,title:"Меню",children:l.jsx(Bh,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${ce&&Ne?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:g,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${N?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:N?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:N?l.jsx(tc,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(_d,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),E&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:E,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(gi,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),U&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:U,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${L?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:L?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(yi,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:A,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(bd,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),d&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Mr,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:u==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${P?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(p==null?void 0:p.name)||"Золотой Фрактал",children:(p==null?void 0:p.name)||"Золотой Фрактал"}),(p==null?void 0:p.hybridBlend)&&p.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:p.compositeOp,children:q})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(p==null?void 0:p.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:K,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${W?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(Tr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${W?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:D,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${Re?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:Re?"Ссылка скопирована!":"Поделиться этим фракталом",children:Re?l.jsx(md,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(u2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:b,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(Th,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:v,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(hd,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},E2=({isOpen:p,onClose:s})=>p?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:d=>d.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(gi,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(ml,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Mr,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(bi,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(yi,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(yi,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(fl,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(bh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,q2=({isOpen:p,onClose:s,tasteProfile:d,archetypeBreakdown:u,currentSpecimen:v,resonanceScore:b,isEngineerMode:x,onToggleEngineerMode:A,audioTuning:N,onSelectAudioTuning:g,onResetTasteProfile:F,onOpenManifest:E,likedSpecimens:L=[],onPlayLiked:U,onRemoveLike:Y,isCurrentLiked:J=!1})=>p?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(bd,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(ml,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[b,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${b}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(d==null?void 0:d.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(v==null?void 0:v.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(d==null?void 0:d.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Tr,{className:`w-4 h-4 ${L.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:L.length})]}),J&&v&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(Tr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),L.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(Tr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:L.map((W,B)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:B+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:W.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",W.phiMultiplier.toFixed(4)," • Gen #",W.generation]})]}),U&&l.jsx("button",{onClick:()=>U(W),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(yd,{className:"w-3 h-3"})}),Y&&l.jsx("button",{onClick:()=>Y(W.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(m2,{className:"w-3 h-3"})})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Nh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:u.map(W=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:W.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[W.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${W.percentage}%`}})})]},W.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(tc,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(W=>l.jsxs("button",{onClick:()=>g(W.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${N===W.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:W.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:W.desc})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(bi,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{E==null||E()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(y2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:A,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${x?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${x?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:x?"Инженер Включен":"Включить Инж"})]})]}),x&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,rd=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],F2=({isReady:p,onFinished:s})=>{const[d,u]=k.useState(0),[v,b]=k.useState(!1),[x,A]=k.useState(!1);return k.useEffect(()=>{const N=setInterval(()=>{u(g=>g<rd.length-1?g+1:g)},450);return()=>clearInterval(N)},[]),k.useEffect(()=>{const N=setTimeout(()=>{if(!p){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),b(!0);const g=setTimeout(()=>{A(!0),s==null||s()},700);return()=>clearTimeout(g)}},15e3);return()=>clearTimeout(N)},[p,s]),k.useEffect(()=>{if(p){const N=setTimeout(()=>{b(!0);const g=setTimeout(()=>{A(!0),s==null||s()},700);return()=>clearTimeout(g)},500);return()=>clearTimeout(N)}},[p,s]),x?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${v?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((N,g)=>l.jsxs("g",{transform:`rotate(${N} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},g)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(d+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:rd[d]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},U2=({isOpen:p,onClose:s,isFirstVisit:d=!1,onOpenAtlas:u})=>{if(!p)return null;const v=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},b=()=>{v(),u==null||u()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:v,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:x=>x.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:v,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(ml,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(bi,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Mr,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(yi,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(t2,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(gd,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[u&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:b,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(gi,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:v,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(hd,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},od=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}],dl=[{id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",enginePreset:{type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}},{id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}},{id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}},{id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2.0 (граница D ≈ 1.58)",generatorRule:"Чередование знака угла поворота на каждом шаге итерации",description:"Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.",phiPiRelation:"Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.35,zoom:2.5}},{id:"golden-dragon",name:"Золотой дракон",englishName:"Golden Dragon Curve",category:"geometric_curves",formula:"r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1",dimension:"D = 2.0 (самоподобие φ)",generatorRule:"Деление отрезка в отношении золотого сечения 1:φ",description:"Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.",phiPiRelation:"Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.6}},{id:"minkowski-curve",name:"Кривая Минковского (Сосиска Минковского)",englishName:"Minkowski Sausage",category:"geometric_curves",formula:"N = 8, S = 4",dimension:"D = ln(8)/ln(4) = 1.500",generatorRule:"F → F+F-F-FF+F+F-F (угол 90°)",description:"Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.",phiPiRelation:"Ортогональная дискретность π/2; целое полуцелое значение размерности.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothMorph",boxFold:1.5,zoom:3.1}},{id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]², N = 9, S = 3",dimension:"D = ln(9)/ln(3) = 2.000",generatorRule:"F → F+F-F-F-F+F+F+F-F (угол 90°)",description:"Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.",phiPiRelation:"Сюръективное непрерывное отображение; шаг дискретизации π/2.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.9}},{id:"hilbert-curve",name:"Кривая Гильберта 2D/3D",englishName:"Hilbert Space-Filling Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}",dimension:"D = 2.0 (в 3D D = 3.0)",generatorRule:"L-система обхода ячеек 2^n x 2^n",description:"Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.",phiPiRelation:"Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:3.2,rotX:.45,rotY:.35}},{id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2) = 2.0",dimension:"D = 2.000",generatorRule:"Замкнутый маршрут вокруг треугольников сетки",description:"Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.",phiPiRelation:"Углы поворота 45° (π/4) и 90° (π/2).",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"moore-curve",name:"Кривая Мура",englishName:"Moore Curve",category:"geometric_curves",formula:"N = 4^n, S = 2^n",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"Замкнутый вариант кривой Гильберта",description:"Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.",phiPiRelation:"Симметричный квадрантный обход, кратный π/2.",enginePreset:{type:"hilbertCurve3D",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.25,zoom:3}},{id:"gosper-curve",name:"Кривая Госпера (Flowsnake)",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"N = 7, S = √7",dimension:"D = ln(7)/ln(√7) = 2.000",generatorRule:"L-система на гексагональной сетке (угол 60° = π/3)",description:"Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.",phiPiRelation:"Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.",enginePreset:{type:"quasicrystal",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"cesaro-curve",name:"Кривая Чезаро",englishName:"Cesàro Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2(1 + cos α))",dimension:"D ∈ (1.0, 2.0] при α ∈ (0, π/2)",generatorRule:"Кривая Коха с переменным углом при вершине",description:"Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.",phiPiRelation:"При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"domainWarp",warpStrength:.3,zoom:2.7}},{id:"drummond-curve",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ = π / k, k ∈ ℝ",dimension:"D ≈ 1.45 - 1.85",generatorRule:"Циклические L-системы с дробными иррациональными углами",description:"Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.",phiPiRelation:"Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.",enginePreset:{type:"phyllotaxis",compositeOp:"goldenSpiralFold",zoom:2.6}},{id:"mcwhorter-pentigree",name:"Снежинка Коха — МакВортера",englishName:"McWhorter Pentigree",category:"geometric_curves",formula:"N = 5, S = (3 - √5)/2",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.672",generatorRule:"Асимметричный пентагональный генератор",description:"Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.",phiPiRelation:"Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",zoom:2.5}},{id:"rice-curve",name:"Кривая Райса",englishName:"Rice Curve",category:"geometric_curves",formula:"θ_1 = π/3, θ_2 = 2π/5",dimension:"D ≈ 1.78",generatorRule:"Неортогональные развороты в пространственно-заполняющих кривых",description:"Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.",phiPiRelation:"Сочетание углов π/3 и пентагональных пропорций золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"quasicrystal",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"polya-curve",name:"Кривая Пойи",englishName:"Pólya Sweep Curve",category:"geometric_curves",formula:"T → T_1 ∪ T_2",dimension:"D = 2.000",generatorRule:"Рекурсивный обход прямоугольного треугольника с высотой",description:"Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.",phiPiRelation:"Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.7}},{id:"sierpinski-arrowhead",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Двухсимвольная L-система сходящаяся к треугольнику",description:"Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.",phiPiRelation:"Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothUnion",zoom:2.9}},{id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"constructive",formula:"N = 3, S = 2",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Удаление центрального перевернутого треугольника",description:"Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.",phiPiRelation:"Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"sierpinski-carpet",name:"Ковер Серпинского",englishName:"Sierpiński Carpet",category:"constructive",formula:"N = 8, S = 3",dimension:"D = ln(8)/ln(3) ≈ 1.89279",generatorRule:"Деление квадрата на 9 частей, удаление центрального",description:"Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.",phiPiRelation:"Универсальная плоская кривая Менгера; мера Лебега стремится к 0.",enginePreset:{type:"menger",compositeOp:"smoothMorph",boxFold:1,zoom:2.9}},{id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"constructive",formula:"N = 20, S = 3, V_∞ = 0, A_∞ = ∞",dimension:"D = ln(20)/ln(3) ≈ 2.72683",generatorRule:"Куб делится на 27 кубиков, удаляются 7 центральных",description:"Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.",phiPiRelation:"Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1.2,zoom:3.1}},{id:"pythagoras-tree-classic",name:"Дерево Пифагора классическое",englishName:"Pythagoras Tree (Symmetric)",category:"constructive",formula:"a² + b² = c², a = b = c/√2",dimension:"D = 2.0 (перекрытия в пределе)",generatorRule:"Построение квадратов на сторонах прямоугольного равнобедренного треугольника",description:"Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).",phiPiRelation:"Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.6,rotX:.35}},{id:"pythagoras-tree-windblown",name:"Дерево Пифагора обдуваемое",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"α = 60° (π/3), β = 30° (π/6)",dimension:"D ≈ 1.85",generatorRule:"Разноугольное ветвление прямоугольного треугольника",description:"Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.",phiPiRelation:"Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.",enginePreset:{type:"pythagorasTree3D",compositeOp:"goldenSpiralFold",warpStrength:.3,zoom:2.7}},{id:"pythagoras-tree-naked",name:"Обнаженное дерево Пифагора",englishName:"Naked Pythagoras Tree",category:"constructive",formula:"Граф центров квадратов G(V, E)",dimension:"D ≈ 1.73",generatorRule:"Отрезки соединяют только центры смежных квадратов",description:"Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центры квадратов дерева Пифагора.",phiPiRelation:"Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"domainWarp",warpStrength:.25,zoom:2.8}},{id:"apollonian-gasket",name:"Сетка Аполлония (Упаковка Аполлония)",englishName:"Apollonian Gasket / Sphere Packing",category:"constructive",formula:"(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)",dimension:"D ≈ 1.30568 (в 3D D ≈ 2.4739)",generatorRule:"Теорема Содди о четырех касающихся окружностях",description:"Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.",phiPiRelation:"Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",sphereFold:.75,zoom:3}},{id:"vicsek-fractal",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Box / Cross)",category:"constructive",formula:"N = 5, S = 3",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Деление квадрата на 9 частей, сохранение центрального креста",description:"Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.",phiPiRelation:"Идеальная симметрия группы D_4 (повороты на π/2).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothMorph",boxFold:1.1,zoom:2.9}},{id:"t-square-fractal",name:"Т-квадрат",englishName:"T-Square Fractal",category:"constructive",formula:"A_∞ = 2 A_0",dimension:"D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)",generatorRule:"Итеративное наложение уменьшенных квадратов на углы",description:"Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.",phiPiRelation:"Ограниченная фрактальная граница со степенью масштабирования 1/2.",enginePreset:{type:"menger",compositeOp:"domainWarp",warpStrength:.2,zoom:3}},{id:"sierpinski-cross",name:"Крест Серпинского",englishName:"Sierpiński Cross",category:"constructive",formula:"D = ln(5)/ln(3) ≈ 1.465",dimension:"D ≈ 1.465 (в 3D D ≈ 2.32)",generatorRule:"Пространственное пересечение плоскостей Серпинского",description:"Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.",phiPiRelation:"Инвариантен относительно октаэдрических вращений SO(3).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"sierpinski-pentagon",name:"Пятиугольник Серпинского (Пентафрактал)",englishName:"Sierpiński Pentagon (Pentaflake)",category:"constructive",formula:"N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²",dimension:"D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228",generatorRule:"5 копий пятиугольника по углам, удаление центра",description:"Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.",phiPiRelation:"АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",phiMultiplier:1.61803398875,zoom:2.7}},{id:"hexafractal",name:"Гексафрактал (Гексафлейк)",englishName:"Hexaflake",category:"constructive",formula:"N = 7, S = 3",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть копий шестиугольника вокруг центрального седьмого",description:"Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.",phiPiRelation:"Гексагональные углы 2π/6 = 60° = π/3.",enginePreset:{type:"quasicrystal",compositeOp:"smoothUnion",zoom:2.8}},{id:"ivezic-fractal",name:"Фрактал Ивезича",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n+1)/ln(2)",dimension:"D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32",generatorRule:"Рекурсивное деление n-мерного регулярного симплекса",description:"Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.",phiPiRelation:"Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"levy-snowflake",name:"Снежинка Леви",englishName:"Lévy Snowflake",category:"constructive",formula:"∂(Lévy C curve ∪ rot)",dimension:"D = 2.0 (граница D ≈ 1.934)",generatorRule:"Замкнутая суперпозиция 8 C-кривых Леви",description:"Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.",phiPiRelation:"Периодичность 2π/8 = π/4.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.7}},{id:"sierpinski-pyramid",name:"Пирамида Серпинского (Тетраэдр Серпинского)",englishName:"Sierpiński Tetrahedron",category:"constructive",formula:"N = 4, S = 2, V_∞ = 0",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"4 тетраэдра половинного размера в вершинах",description:"Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.",phiPiRelation:"Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.9,rotX:.4}},{id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}},{id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}},{id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}},{id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}},{id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 2.0",generatorRule:"Бассейны притяжения комплексных корней полинома",description:"Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.",phiPiRelation:"Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:2.9}},{id:"serafimsky-fractal",name:"Фрактал Серафимского",englishName:"Serafimsky Shifted Newton",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{iθ} f(z_n)/f'(z_n)",dimension:"D ≈ 2.0",generatorRule:"Метод Ньютона с комплексным вращением фазового угла θ",description:"Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.",phiPiRelation:"Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.",enginePreset:{type:"newtonBasins",compositeOp:"goldenSpiralFold",warpStrength:.35,zoom:2.8}},{id:"burning-ship",name:"Фрактал «Пылающий корабль» (Burning Ship)",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D = 2.0",generatorRule:"Абсолютная величина от Re и Im перед возведением в квадрат",description:"Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.",phiPiRelation:"Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",zoom:3.1,rotX:.4}},{id:"perpendicular-burning-ship",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c",dimension:"D = 2.0",generatorRule:"Модуль берется только от одной компоненты (вещественной)",description:"Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.",phiPiRelation:"Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.",enginePreset:{type:"burningShip3D",compositeOp:"domainWarp",warpStrength:.3,zoom:3}},{id:"pickover-biomorphs",name:"Биоморфы Пиковера",englishName:"Pickover Biomorphs",category:"algebraic_complex",formula:"|Re(z_n)| < R ∨ |Im(z_n)| < R",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Условие останова итераций имитирует форму одноклеточных",description:"Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.",phiPiRelation:"Формы радиолярий и спикул подчиняются золотому закону роста Д'Арси Томпсона.",enginePreset:{type:"quaternionJulia",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.7}},{id:"trigonometric-fractal",name:"Тригонометрические фракталы (Фрактал Иисуса)",englishName:"Trigonometric Fractal (sin z + c)",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c",dimension:"D = 2.0",generatorRule:"Трансцендентные целые функции комплексного переменного",description:"Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.",phiPiRelation:"Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.",enginePreset:{type:"spiralTunnel",compositeOp:"quantumResonance",zoom:3.2}},{id:"lyapunov-fractal",name:"Карты Ляпунова / Фракталы Ляпунова",englishName:"Lyapunov Fractals / Zircon City",category:"algebraic_complex",formula:"λ = lim (1/N) ∑ ln |f'(x_n)| для последовательности AB",dimension:"D ≈ 2.0 (фрактальные границы стабильности)",generatorRule:"Чередование параметров r_A и r_B логистического отображения",description:"Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.",phiPiRelation:"Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.",enginePreset:{type:"primeSpiral",compositeOp:"quantumResonance",zoom:2.8}},{id:"novak-fractal",name:"Множество Новака",englishName:"Novak Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)",dimension:"D ≈ 2.0",generatorRule:"Использование иррациональных дробных степеней комплексного числа",description:"Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.",phiPiRelation:"При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"goldenSpiralFold",zoom:2.8}},{id:"spider-fractal",name:"Фрактал «Паук»",englishName:"Spider Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Связанная динамика точки z и параметра c на каждом шаге",description:"Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.",phiPiRelation:"Отношение затухания c_n/2 согласуется с золотой дихотомией.",enginePreset:{type:"quaternionJulia",compositeOp:"domainWarp",warpStrength:.45,zoom:2.9}},{id:"sherwood-carpet",name:"Ковер Шервуда",englishName:"Sherwood Carpet",category:"algebraic_complex",formula:"z_{n+1} = 1 / (z_n^k + c)",dimension:"D ≈ 1.85",generatorRule:"Инверсия комплексных полиномов высших порядков",description:"Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.",phiPiRelation:"Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.",enginePreset:{type:"apollonian",hybridType:"mandelbox",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"quaternion-mandelbrot",name:"Кватернионный Мандельброт 4D",englishName:"4D Quaternion Mandelbrot",category:"multidimensional",formula:"q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0",dimension:"D_4D = 4.0, D_3D-сечения = 2.0 - 3.0",generatorRule:"Итерации в теле алгебры кватернионов ℍ (1, i, j, k)",description:"Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.",phiPiRelation:"Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.25}},{id:"quaternion-julia",name:"Кватернионный Жюлиа 4D",englishName:"4D Quaternion Julia",category:"multidimensional",formula:"q_{n+1} = q_n² + C, C = const ∈ ℍ",dimension:"D ≈ 2.5 - 3.2 в 3D проекции",generatorRule:"4D сечение динамической системы кватернионов при фиксированном векторе C",description:"Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.",phiPiRelation:"Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.8}},{id:"mandelbulb-3d",name:"Mandelbulb 3D",englishName:"Mandelbulb 3D (White & Nylander)",category:"multidimensional",formula:"v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c",dimension:"D ≈ 2.7 - 2.9",generatorRule:"Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)",description:"Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.",phiPiRelation:"Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:3.1}},{id:"mandelbox-3d",name:"Mandelbox 3D",englishName:"Mandelbox 3D (Tom Lowe)",category:"multidimensional",formula:"v ↦ s · sphereFold(boxFold(v)) + c",dimension:"D ≈ 2.3 - 2.8",generatorRule:"Циклическое складывание кубического пространства (box fold) и сферическая инверсия",description:"3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.",phiPiRelation:"Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.",enginePreset:{type:"mandelbox",boxFold:1.2,sphereFold:.65,compositeOp:"smoothUnion",zoom:3.2}},{id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube (Eric Baird)",category:"multidimensional",formula:"Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)",dimension:"D ≈ 2.529",generatorRule:"Вырезание крестообразных отверстий с пропорциями золотого сечения",description:"Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.",phiPiRelation:"Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"kleinian-groups",name:"Клейниановы группы (Предельные множества)",englishName:"Kleinian Limit Sets / Schottky Groups",category:"multidimensional",formula:"γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)",dimension:"D ≈ 1.3 - 2.7",generatorRule:"Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³",description:"Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.",phiPiRelation:"Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothMorph",zoom:2.9}},{id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern IFS",category:"ifs_attractors",formula:"W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}",dimension:"D ≈ 1.85",generatorRule:"4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}",description:"Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.",phiPiRelation:"Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.",enginePreset:{type:"phyllotaxis",hybridType:"pythagorasTree3D",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"fractal-flames",name:"Фрактальное пламя (Fractal Flames)",englishName:"Fractal Flames (Scott Draves)",category:"ifs_attractors",formula:"F(x) = ∑ w_i V_j(A_i x + b_i)",dimension:"D зависит от нелинейных вариаций",generatorRule:"Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг",description:"Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.",phiPiRelation:"Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.",enginePreset:{type:"hopfFibration",hybridType:"spiralTunnel",compositeOp:"quantumResonance",hybridBlend:.45,zoom:3}},{id:"lorenz-attractor",name:"Странный аттрактор Лоренца",englishName:"Lorenz Strange Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz",dimension:"D_каплана-йорке ≈ 2.06 ± 0.01",generatorRule:"Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)",description:"Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.",phiPiRelation:"Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothMorph",zoom:3.2,rotX:.3,rotY:.4}},{id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)",dimension:"D ≈ 2.01",generatorRule:"Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты",description:"Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.",phiPiRelation:"Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothUnion",zoom:2.9}},{id:"ikeda-attractor",name:"Аттрактор Икеды",englishName:"Ikeda Map Attractor",category:"ifs_attractors",formula:"z_{n+1} = A + B z_n e^{i(|z_n|² + C)}",dimension:"D ≈ 1.7",generatorRule:"Двумерное отображение света в кольцевом оптическом резонаторе",description:"Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.",phiPiRelation:"Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.",enginePreset:{type:"spiralTunnel",compositeOp:"domainWarp",warpStrength:.4,zoom:2.8}},{id:"clifford-attractor",name:"Аттрактор Клиффорда",englishName:"Clifford Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Синусно-косинусное полиномиальное отображение с 4 параметрами",description:"Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.",phiPiRelation:"Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:2.9}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"Peter de Jong Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)",dimension:"D ≈ 1.8",generatorRule:"Симметричное тригонометрическое отображение Петера де Йонга",description:"Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.",phiPiRelation:"При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.",enginePreset:{type:"cliffordTorus4D",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3}},{id:"henon-attractor",name:"Аттрактор Хенона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)",dimension:"D ≈ 1.261 ± 0.003",generatorRule:"Дискретная диссипативная система Мишеля Эно (1976)",description:"Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.",phiPiRelation:"Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:2.7}},{id:"humboldt-attractor",name:"Аттрактор Гумбольдта",englishName:"Humboldt Flow Attractor",category:"ifs_attractors",formula:"dxdt = v_oceanic(x, φ, t)",dimension:"D ≈ 2.15",generatorRule:"IFS-система, имитирующая турбулентные океанические вихри",description:"Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.",phiPiRelation:"Логарифмические спирали вихрей имеют золотой угол раскрутки.",enginePreset:{type:"gyroid",compositeOp:"goldenSpiralFold",zoom:3.1}},{id:"perlin-noise",name:"Фрактальный шум Перлина",englishName:"Fractal Perlin Noise (fBm)",category:"stochastic",formula:"f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)",dimension:"D = 3 - H, где H — показатель Херста",generatorRule:"Градиентный шум Кена Перлина, суммируемый по октавам",description:"Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.",phiPiRelation:"Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.",enginePreset:{type:"neoviusMinimal",compositeOp:"domainWarp",warpStrength:.35,zoom:3}},{id:"simplex-noise",name:"Симплексный шум (Simplex Noise)",englishName:"Simplex Noise",category:"stochastic",formula:"Разбиение пространства на симплексы Шлефли A_n",dimension:"D = 3 - H",generatorRule:"Замена гиперкубической сетки на симплексную решетку",description:"Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.",phiPiRelation:"Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.1}},{id:"diamond-square",name:"Алгоритм Diamond-Square (Плазма)",englishName:"Diamond-Square Plasma Fractal",category:"stochastic",formula:"h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}",dimension:"D = 3 - H ∈ (2.0, 3.0)",generatorRule:"Рекурсивное чередование шагов ромба и квадрата по сетке",description:"Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.",phiPiRelation:"Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.",enginePreset:{type:"dlaCluster",compositeOp:"smoothMorph",zoom:2.8}},{id:"fractional-brownian-motion",name:"Дробное броуновское движение (fBm)",englishName:"Fractional Brownian Motion (fBm)",category:"stochastic",formula:"E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})",dimension:"D = n + 1 - H (Мандельброт и Ван Несс, 1968)",generatorRule:"Гауссовский процесс с долговременной корреляцией и параметром Херста H",description:"Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.",phiPiRelation:"Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.",enginePreset:{type:"dlaCluster",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"dla-cluster",name:"Диффузионно-ограниченная агрегация (ДОА / DLA)",englishName:"Diffusion-Limited Aggregation (DLA)",category:"stochastic",formula:"N(r) ∝ r^{D_{DLA}}",dimension:"D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)",generatorRule:"Случайное блуждание броуновских частиц и их слипание с растущим кластером",description:"Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.",phiPiRelation:"Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.25}},{id:"percolation-clusters",name:"Кластеры перколяции",englishName:"Percolation Lattice Clusters",category:"stochastic",formula:"P(p) ∝ (p - p_c)^β при p → p_c",dimension:"D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)",generatorRule:"Случайное заполнение узлов решетки с критической вероятностью p_c",description:"Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.",phiPiRelation:"Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.",enginePreset:{type:"neoviusMinimal",compositeOp:"fractalLattice",zoom:3.1}},{id:"dielectric-breakdown",name:"Фрактал лавинного пробоя (Фигуры Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM / Lichtenberg)",category:"stochastic",formula:"∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)",dimension:"D ≈ 1.75 при η = 1",generatorRule:"Решение уравнения Лапласа для электростатического потенциала с ростом разряда",description:"Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.",phiPiRelation:"Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.",enginePreset:{type:"dlaCluster",compositeOp:"domainWarp",warpStrength:.4,zoom:3}},{id:"hofstadter-butterfly",name:"Бабочка Хофштадтера",englishName:"Hofstadter Butterfly",category:"topological_physical",formula:"ψ_{m+1} + ψ_{m-1} + 2 cos(2π m α - ν) ψ_m = E ψ_m (Уравнение Харпера)",dimension:"D(E) фрактальное канторово множество разрешенных энергий",generatorRule:"Спектр энергии электрона в периодической 2D решетке в магнитном поле α = Φ/Φ_0",description:"Квантовый фрактал Дугласа Хофштадтера (1976). График разрешенных энергетических зон блоховского электрона в зависимости от магнитного потока.",phiPiRelation:"АБСОЛЮТНЫЙ КВАНТОВЫЙ РЕЗОНАНС: при иррациональном потоке α = 1/φ спектр становится канторовым множеством нулевой меры Лебега!",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3}},{id:"richardson-fractal",name:"Фрактал Ричардсона (Эффект береговой линии)",englishName:"Richardson Coastline Fractal Effect",category:"topological_physical",formula:"L(ε) ∝ ε^{1 - D} (Льюис Фрай Ричардсон)",dimension:"D_Британия ≈ 1.25, D_Норвегия ≈ 1.52",generatorRule:"Зависимость длины границы от масштаба измерительного инструмента ε",description:"Открытие Ричардсона (1961), легшее в основу книги Бенуа Мандельброта: длина географической границы неограниченно растет при уменьшении шага линейки.",phiPiRelation:"Скейлинг конформной береговой линии согласуется с броуновскими петлями SLE_{6/3}.",enginePreset:{type:"fibonacciSnowflake",hybridType:"dlaCluster",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.8}},{id:"cantor-set",name:"Канторово множество (Канторова лестница)",englishName:"Cantor Ternary Set",category:"topological_physical",formula:"C = ⋂_{n=1}^∞ E_n, L_∞ = 0, |C| = 2^{ℵ_0}",dimension:"D = ln(2)/ln(3) ≈ 0.63093",generatorRule:"Исключение открытой средней трети (1/3, 2/3) из отрезка [0, 1]",description:"Фундаментальный топологический объект Георга Кантора (1883). Содержит столько же точек, сколько весь отрезок ℝ, но имеет нулевую меру Лебега.",phiPiRelation:"Золотое канторово множество вырезает средний интервал длиной 1/φ², оставляя два отрезка длиной 1/φ.",enginePreset:{type:"menger",compositeOp:"smoothCarve",boxFold:1.4,zoom:3}},{id:"cantor-dust",name:"Пыль Кантора",englishName:"Cantor Dust",category:"topological_physical",formula:"C_d = C × C × ... × C (d-кратное прямое произведение)",dimension:"D = d · ln(2)/ln(3) (для d=2 D ≈ 1.2618, d=3 D ≈ 1.8928)",generatorRule:"Многомерное декартово произведение одномерных множеств Кантора",description:"Вполне несвязное компактное пространство в ℝ² и ℝ³. В астрофизике используется для моделирования крупномасштабного распределения галактик во Вселенной.",phiPiRelation:"Описывает кластеризацию материи в космических войдах с золотым масштабным фактором.",enginePreset:{type:"apollonian",compositeOp:"smoothCarve",sphereFold:.8,zoom:2.9}},{id:"antoine-necklace",name:"Ожерелье Антуана",englishName:"Antoine's Necklace",category:"topological_physical",formula:"X = ⋂_{i=1}^∞ A_i, где A_i — цепи зацепленных торов",dimension:"D_топологическая = 0, D_Хаусдорфа > 0",generatorRule:"Тор заменяется цепью зацепленных уменьшенных торов",description:"Дикий узел и фрактал Луи Антуана (1921). Вполне несвязное компактное подмножество ℝ³, дополнение к которому не является односвязным (фундаментальная группа π₁(ℝ³ \\ X) ≠ 1).",phiPiRelation:"Каждое кольцо ориентировано по меридианам тора (углы 2π); золотая инверсия диаметров предотвращает самопересечение колец.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.2}},{id:"cesaro-curve-v2",name:"Кривая Чезаро",englishName:"Cesàro Curve (Torn Square)",category:"geometric_curves",formula:"α = arctan((1-2δ)/√3), L_{n+1} = (2 + 2 cos α)^{-1} L_n",dimension:"D = ln(4) / ln(2(1 + cos α)) ≈ 1.7848",generatorRule:"Вариация кривой Коха с варьируемым углом при вершине отсекаемого треугольника α ∈ (0, π/3)",description:"Обобщение кривой Коха Эрнесто Чезаро (1906). При приближении угла к 90° кривая превращается в самокасающуюся пространственно-заполняющую структуру («разорванный квадрат»).",phiPiRelation:"При золотом угле Чезаро α = 2π(1 - 1/φ) ≈ 137.5° граница кривой образует квазипериодическую розетку.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",warpStrength:.35,zoom:3.1}},{id:"drummond-curve-v2",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ_k = 2π / (φ^k), L_{n+1} = r · L_n",dimension:"D ≈ 1.4142 (квазидробная размерность)",generatorRule:"Циклическая L-система с дробными иррациональными углами поворота и переменным масштабированием",description:"Кривая на основе L-систем с несимметричными ветвями и иррациональными фазовыми сдвигами, формирующая спиральные кристаллические кластеры.",phiPiRelation:"Каждый шаг итерации масштабируется на фактор 1/φ с поворотом на угол золотого сечения.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"koch-mcwhorter-v2",name:"Снежинка Коха — МакВортера (Pentigree)",englishName:"McWhorter's Pentigree",category:"geometric_curves",formula:"z ↦ z · e^{i θ} / r + c_k, r = √7",dimension:"D = ln(5)/ln(√7) ≈ 1.6309",generatorRule:"Асимметричная замена каждого отрезка на 5 сегментов под углом arcsin(√3/(2√7))",description:"Обобщение снежинки Коха Уильяма МакВортера (Pentigree), порождающее пятиугольные самозаполняющиеся фрактальные плитки с 5-лучевой симметрией.",phiPiRelation:"Симметрия pentigree неразрывно связана с пентаграммой и степенями золотого сечения φ.",enginePreset:{type:"fibonacciSnowflake",hybridType:"icosahedral",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3}},{id:"rice-curve-v2",name:"Кривая Райса",englishName:"Rice Space-Filling Curve",category:"geometric_curves",formula:"γ(t): [0, 1] → ℝ², L-система F → +F--F+F++F-",dimension:"D = 2.0 (пространственно-заполняющая)",generatorRule:"Пространственно-заполняющая кривая с неортогональными углами поворота 45° и 135°",description:"Непрерывная кривая, заполняющая треугольные и шестиугольные ячейки без самопересечений за счет асимметричных неортогональных разворотов.",phiPiRelation:"Углы разворота кратны π/4 и π/8; золотая модуляция длин звеньев сглаживает кривизну пути.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothCarve",boxFold:1.1,zoom:2.8}},{id:"polya-curve-v2",name:"Кривая Пойи",englishName:"Pólya Space-Filling Curve",category:"geometric_curves",formula:"P(t) = ∑_{k=1}^∞ 2^{-k} v_{ε_k(t)}, t ∈ [0, 1]",dimension:"D = 2.0 (непрерывно заполняет треугольник)",generatorRule:"Предельный случай блуждания кривой Джорджа Пойи (1913), заполняющей равнобедренный прямоугольный треугольник",description:"Первая доказанная непрерывная кривая, заполняющая внутренность треугольника, сохраняя дифференцируемость почти всюду кроме счетного множества канторовых узлов.",phiPiRelation:"Отношение гипотенузы к катетам равно √2; золотое сечение регулирует последовательность обхода подтреугольников.",enginePreset:{type:"dragonCurveIFS",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"twenmey-dragon-v2",name:"Дракон Твенми",englishName:"Twenmey Dragon Curve",category:"geometric_curves",formula:"w_1(z) = z · (1 + i)/2, w_2(z) = 1 - z · (1 - i)/2",dimension:"D = 2.0, граница D_∂ ≈ 1.5236",generatorRule:"Вариация дракона Хартера-Хейтуэя со сменой знака угла поворота на каждом нечетном шаге",description:"Спиральная фрактальная кривая с вихревыми завитками, разворачивающаяся в обе полуплоскости и напоминающая крылья феникса.",phiPiRelation:"Угол поворота 90° = π/2; шаг разворота витков масштабируется по пропорции φ = 1.618.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:3.2}},{id:"golden-dragon-v2",name:"Золотой Дракон (φ-Dragon)",englishName:"Golden Ratio Dragon Curve",category:"geometric_curves",formula:"z_{n+1} = z_n / φ · e^{i · arccos(1/(2φ))}",dimension:"D = ln(2)/ln(φ) ≈ 1.4404",generatorRule:"Замена звеньев ломаной треугольниками с золотыми пропорциями катетов 1 : 1/φ",description:"Фрактальная кривая дракона, углы и длины сегментов которой точно вычислены из корня полинома x² - x - 1 = 0. Не имеет самопересечений ни на одном масштабе.",phiPiRelation:"Фундаментальный фрактал: коэффициент подобия в точности равен 1/φ = 0.61803398875!",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.38,phiMultiplier:1.61803398875,zoom:3.1}},{id:"sierpinski-arrowhead-v2",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"A → B-A-B, B → A+B+A (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Симметричная L-система, в пределе сходящаяся к треугольнику Серпинского",description:"Непрерывная ломаная линия, которая при итерациях n → ∞ в точности заметает множество точек треугольника Серпинского, являясь его топологической траекторией.",phiPiRelation:"Угол 60° задает гексагональный базис; золотое разбиение сторон порождает фрактал Пенроуза.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:3}},{id:"pythagoras-tree-wind-v2",name:"Дерево Пифагора обдуваемое (Асимметричное)",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"c² = a² + b², a = c · cos(α), b = c · sin(α), α ≠ 45°",dimension:"D ≈ 1.83 (зависит от угла наклона)",generatorRule:"Построение квадратов на прямоугольном треугольнике с неравными острыми углами α = 30°, β = 60°",description:"Вариация классического дерева Пифагора, где неравные углы ветвления создают динамический эффект кроны, изогнутой непрерывным фрактальным ветром.",phiPiRelation:"При золотом угле α = arcsin(1/√φ) дерево сворачивается в совершенную логарифмическую спираль Фибоначчи.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothUnion",rotX:.45,rotY:.2,zoom:3.2}},{id:"pythagoras-tree-naked-v2",name:"Обнаженное дерево Пифагора",englishName:"Naked Skeleton Pythagoras Tree",category:"constructive",formula:"E_n = ⋃ [c_{k, 1}, c_{k, 2}], c_k — центры квадратов",dimension:"D = ln(2)/ln(√2) = 2 (для скелетного графа)",generatorRule:"Фрактальный граф, построенный исключительно по отрезкам, соединяющим центры смежных квадратов дерева Пифагора",description:"Минималистичный линейный остов дерева Пифагора. Образует элегантную ветвящуюся коралловую структуру, лишенную сплошных площадей квадратов.",phiPiRelation:"Длины ветвей убывают в геометрической прогрессии с масштабным множителем золотого корня 1/√φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",warpStrength:.2,zoom:3.4}},{id:"t-square-v2",name:"Т-квадрат (T-Square Fractal)",englishName:"T-Square Fractal",category:"constructive",formula:"A_{n+1} = A_n ∪ 4 × A_n / 2, S_∞ = 2 S_0",dimension:"D = ln(4)/ln(2) = 2.0",generatorRule:"Итерационное наложение уменьшенных вдвое квадратов на все 4 угла каждого квадрата предыдущего поколения",description:"Классический конструктивный фрактал. В пределе площадь покрываемой области в точности равна удвоенной площади начального квадрата, а периметр стремится к бесконечности.",phiPiRelation:"При золотом скейлинге (1/φ вместо 1/2) квадраты не перекрываются, образуя совершенную квазикристаллическую мозаику.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1,zoom:3}},{id:"sierpinski-cross-v2",name:"Крест Серпинского 3D",englishName:"Sierpiński Cross 3D",category:"constructive",formula:"C_{n+1} = ⋃_{i=1}^5 T_i(C_n), |det(T_i)| = 1/9",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Взаимно перпендикулярные плоскости ковра Серпинского, образующие объемный пространственный крест",description:"Трехмерная ортогональная комбинация пересекающихся фракталов Серпинского, обладающая октаэдрической симметрией полостей.",phiPiRelation:"Сечения креста плоскостями под золотым углом arctan(φ) образуют правильные пятиугольные отверстия.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",boxFold:1.2,zoom:3.2}},{id:"sierpinski-pentagon-v2",name:"Пятиугольник Серпинского (Пентафлейк / Pentaflake)",englishName:"Pentaflake / Sierpiński Pentagon",category:"constructive",formula:"P_{n+1} = ⋃_{i=1}^5 R_{2π i/5}(P_n / (1 + φ))",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.67228",generatorRule:"Правильный пятиугольник замещается пятью меньшими пятиугольниками по углам с удалением центральной пятиконечной звезды",description:"Один из самых гармоничных планарных фракталов. Имеет врожденную 5-лучевую золотую симметрию D₅, невозможную в стандартных кристаллических решетках.",phiPiRelation:"Масштабный множитель строго равен 1/(1 + φ) = 1/φ² ≈ 0.381966! Чистейшее проявление золотого сечения.",enginePreset:{type:"icosahedral",compositeOp:"smoothUnion",phiMultiplier:1.61803398875,zoom:3}},{id:"hexaflake-v2",name:"Гексафрактал (Hexaflake / Снежинка Серпинского)",englishName:"Hexaflake",category:"constructive",formula:"H_{n+1} = ⋃_{i=1}^7 H_n / 3 (6 по периметру + 1 в центре)",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть уменьшенных копий правильного шестиугольника по периметру плюс один в центре",description:"Шестилучевой фрактальный кристалл, моделирующий рекурсивный рост ледяных снежинок в насыщенных парах воды.",phiPiRelation:"Периметр шестиугольника задан соотношением 6r; вписанные золотые спирали описывают микроканалы кристаллизации.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothUnion",boxFold:1.3,zoom:2.9}},{id:"ivezic-fractal-v2",name:"Фрактал Ивезича (Многомерный симплекс Серпинского)",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n + 1) / ln(2), n ≥ 1",dimension:"D = ln(n+1)/ln(2) (для n=4 D ≈ 2.3219, для n=6 D ≈ 2.807)",generatorRule:"Рекурсивное удаление инвертированных подсимплексов из правильного n-мерного симплекса",description:"Обобщение треугольника и тетраэдра Серпинского на n-мерные гиперпространства, открытое в фундаментальных трудах по фрактальной топологии.",phiPiRelation:"Сечения 5-мерного симплекса Ивезича ортогонально проецируются в золотые икосаэдры в ℝ³.",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothMorph",hybridBlend:.4,zoom:3.1}},{id:"levi-snowflake-v2",name:"Снежинка Леви",englishName:"Lévy Snowflake (C-Curve Boundary)",category:"constructive",formula:"S = ⋃_{i=1}^8 Lévy_i, Area = 2",dimension:"D_граница ≈ 1.9340, D_тело = 2.0",generatorRule:"Замкнутая область, заметаемая восемью сходящимися кривыми Леви, расположенными по периметру квадрата",description:"Удивительная фрактальная мозаика с бесконечной бахромой, способная самозамостить евклидову плоскость ℝ² без зазоров и перекрытий.",phiPiRelation:"Период разворота ветвей равен π/4; фрактальная граница имеет золотой масштаб самоподобия.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothCarve",zoom:3.1}},{id:"burning-ship-perpendicular-v2",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (Re(z_n) + i|Im(z_n)|)^2 + c",dimension:"D_граница = 2.0 (комплексная динамика)",generatorRule:"Модуль берется только от мнимой компоненты, сохраняя знак вещественной части",description:"Асимметричная модификация фрактала Burning Ship. Разрушает зеркальную симметрию, порождая вихревые струи и призрачные фрактальные корабли.",phiPiRelation:"Отношение периодов бифуркации мачт корабля сходится к константе Фейгенбаума δ = 4.6692 и золотому множителю φ.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",warpStrength:.35,zoom:3}},{id:"jesus-trigonometric-v2",name:"Фрактал Иисуса / Тригонометрический фрактал",englishName:"Jesus / Sine-Cosine Transcendental Fractal",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c · cos(z_n)",dimension:"D = 2.0 (трансцендентная динамика)",generatorRule:"Итерация тригонометрических комплексных функций с экспоненциальным ростом вдоль мнимой оси",description:"Трансцендентный фрактал комплексной динамики. Вдоль мнимой оси синус переходит в гиперболический sinh, создавая соборные арки и бесконечные колоннады.",phiPiRelation:"Период функции строго равен 2π; золотое сечение управляет шириной коридоров сходимости.",enginePreset:{type:"riemannZeta",hybridType:"mandelbulb",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3.2}},{id:"spider-fractal-v2",name:"Фрактал «Паук» (Spider Fractal)",englishName:"Spider Dynamical System",category:"algebraic_complex",formula:"z_{n+1} = z_n^2 + c_n, c_{n+1} = c_n / 2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Динамическая система с блуждающим параметром сдвига c_n, зависящим от текущей координаты орбиты",description:"Сложный алгебраический фрактал, где параметр c не статичен, а эволюционирует синхронно с точкой z, создавая длинные радиальные нити-ножки.",phiPiRelation:"Углы расхождения паучьих нитей кратны золотому углу 137.5° = 2π(1 - 1/φ).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",warpStrength:.3,zoom:3.1}},{id:"sherwood-carpet-v2",name:"Фрактал «Ковер Шервуда»",englishName:"Sherwood Algebraic Carpet",category:"algebraic_complex",formula:"z_{n+1} = (z_n^3 + c) / (1 + conjugate(z_n)^2)",dimension:"D ≈ 1.89",generatorRule:"Рациональное дробно-линейное отображение третьего порядка с комплексным сопряжением",description:"Алгебраический фрактал на основе рациональных отображений Римана, образующий кружевную вязь бесконечных арок и сводов.",phiPiRelation:"Комплексные полюса отображения распределены по окружности радиуса √φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothUnion",boxFold:1.15,zoom:2.9}},{id:"serafimski-newton-v2",name:"Фрактал Серафимского (Фазовый метод Ньютона)",englishName:"Serafimski Non-Linear Newton Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{i α} P(z_n) / P'(z_n), α = π/φ",dimension:"D = 2.0 (бассейны с общей границей Жюлиа)",generatorRule:"Модификация метода Ньютона с добавлением комплексного вращения шага на золотой фазовый угол α",description:"Введение золотой фазы заставляет прямолинейные траектории Ньютона закручиваться в вихревые спирали вокруг корней полинома, создавая фантастические завихрения.",phiPiRelation:"Фазовый угол сдвига α = π/φ ≈ 111.246° устраняет прямолинейные сингулярности и максимизирует хаос.",enginePreset:{type:"newtonBasins",compositeOp:"domainWarp",warpStrength:.45,zoom:3}},{id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"ẋ=(z-b)x-dy, ẏ=dx+(z-b)y, ż=c+az-z³/3-(x²+y²)(1+ez)+fzx³",dimension:"D_L ≈ 2.16 (размерность Ляпунова)",generatorRule:"Трехмерная система нелинейных дифференциальных уравнений с тороидально-сферической хаотической оболочкой",description:"Один из самых визуально совершенных аттракторов хаоса: траектории образуют сферу с центральной осью вращения и струйными выбросами на полюсах.",phiPiRelation:"Соотношение радиальной и аксиальной частот вращения сходится к золотой пропорции φ.",enginePreset:{type:"lorenzAttractor",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:3.3}},{id:"thomas-attractor",name:"Аттрактор Томаса (Циклический лабиринт)",englishName:"Thomas Cyclically Symmetric Attractor",category:"ifs_attractors",formula:"ẋ = sin(y) - bx, ẏ = sin(z) - by, ż = sin(x) - bz",dimension:"D_L ≈ 2.05",generatorRule:"Циклически симметричная 3D динамическая система с тригонометрическим связыванием координат",description:"Хаотический аттрактор с полной циклической C₃-симметрией, формирующий бесконечный пространственный лабиринт из плавных трубок.",phiPiRelation:"Период тригонометрических функций 2π; критическое значение затухания b_c ≈ 0.208186 связано с золотыми степенями.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothMorph",warpStrength:.25,zoom:3.1}},{id:"halvorsen-attractor",name:"Аттрактор Халворсена",englishName:"Halvorsen 3D Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = -ax - 4y - 4z - y², ẏ = -ay - 4z - 4x - z², ż = -az - 4x - 4y - x²",dimension:"D_L ≈ 2.22",generatorRule:"Квадратичная 3D система с трехлучевой циклической симметрией",description:"Трехмерный аттрактор с тремя раскрывающимися лепестками, по которым хаотически перескакивает фазовая траектория.",phiPiRelation:"Симметрия C₃ задает угол поворота 120° = 2π/3; фазовый объем сжимается со скоростью div V = -3a.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:3.2}},{id:"sprott-attractor",name:"Аттрактор Спротта",englishName:"Sprott Minimal Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = y + 2xy + xz, ẏ = 1 - 2x² + yz, ż = x - x² - y²",dimension:"D_L ≈ 2.09",generatorRule:"Минимальная система Клиффорда Спротта с пятью слагаемыми и одним параметром",description:"Элегантная минималистичная хаотическая система дифференциальных уравнений, открытая в 1994 году в ходе численного поиска простейших аттракторов.",phiPiRelation:"Спектр показателей Ляпунова (+, 0, -) удовлетворяет теореме Каплана-Йорке с золотым коэффициентом сжатия.",enginePreset:{type:"lorenzAttractor",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.35,zoom:3}},{id:"avalanche-dbm-v2",name:"Фрактал лавинного пробоя (DBM / Молния Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM)",category:"stochastic",formula:"p_i ∝ (∇Φ)^η, ∇²Φ = 0",dimension:"D ≈ 1.75 (для η = 1 D ≈ 1.71, для η = 2 D ≈ 1.45)",generatorRule:"Вероятностная модель Нимейера-Пьетронеро-Висмана (1984) для роста искровых разрядов в диэлектриках",description:"Физический стохастический фрактал, точно описывающий ветвление молний в атмосфере, фигуры Лихтенберга на плексигласе и древовидные эрозии.",phiPiRelation:"Углы бифуркации разрядных каналов имеют моду статистического распределения около золотого угла 137.5°.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",warpStrength:.45,zoom:3}},{id:"mandelbrot-multidrop",name:"Мультифрактальный каскад Мандельброта",englishName:"Mandelbrot Multiplicative Cascade",category:"stochastic",formula:"μ(B) = ∏_{k=1}^n W_{ε_k}, ⟨W⟩ = 1",dimension:"Спектр сингулярностей f(α) = inf_q [q α - τ(q)]",generatorRule:"Мультипликативное случайное деление энергии между дочерними ячейками турбулентности",description:"Модель Бенуа Мандельброта (1974) для описания перемежаемости развитой гидродинамической турбулентности Колмогорова.",phiPiRelation:"Максимум спектра размерностей f(α) приходится на точку золотого баланса потоков энергии.",enginePreset:{type:"quasicrystal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3.1}},{id:"hopf-fibration-manifold",name:"Расслоение Хопфа S³ → S²",englishName:"Hopf Fibration Topological Bundle",category:"topological_physical",formula:"h(z_0, z_1) = (2 z_0 conjugate(z_1), |z_0|² - |z_1|²) ∈ S²",dimension:"D_топологическая = 3, расслаивается окружностями S¹",generatorRule:"Отображение 3-сферы в 4D на двумерную сферу Римана, где прообраз каждой точки есть окружность Вилларсо",description:"Великое топологическое открытие Хайнца Хопфа (1931). Пространство заполнено зацепленными торами Клиффорда, не пересекающимися между собой.",phiPiRelation:"Каждые два кольца зацеплены ровно один раз (число зацепления Хопфа = 1); золотой угол скрутки волокон предотвращает резонансные узлы.",enginePreset:{type:"hopfFibration",compositeOp:"smoothUnion",zoom:3.2,rotX:.3,rotY:.25}},{id:"calabi-yau-manifold",name:"Многообразие Калаби — Яу",englishName:"Calabi-Yau 3-Fold Compactification",category:"topological_physical",formula:"z_1^5 + z_2^5 + z_3^5 + z_4^5 + z_5^5 - 5 ψ z_1 z_2 z_3 z_4 z_5 = 0",dimension:"6 действительных измерений (3 комплексных) в CP⁴",generatorRule:"Компактное кэлерово многообразие с нулевым первым классом Черна c_1 = 0 и метрикой Риччи-плоского пространства",description:"Фундаментальная геометрия скрытых микроизмерений в теории суперструн. 2D и 3D проекции сечений многообразия образуют гармонические складки.",phiPiRelation:"Параметр комплексной деформации ψ при золотом значении φ порождает конформную зеркальную симметрию фермионных поколений.",enginePreset:{type:"calabiYau",compositeOp:"smoothMorph",zoom:3.1,rotX:.4,rotY:.3}},{id:"costa-minimal-surface",name:"Минимальная поверхность Коста",englishName:"Costa Minimal Surface",category:"topological_physical",formula:"X(z) = Re ∫ (½(1 - g²), i/2(1 + g²), g) ω, H ≡ 0",dimension:"D_топологическая = 2, род g = 1 с тремя концами",generatorRule:"Представление Вейерштрасса с эллиптическими функциями Вейерштрасса ℘(z)",description:"Сенсация геометрии: в 1982 году Селсо Коста доказал существование полной вложенной минимальной поверхности рода 1, опровергнув столетнее убеждение о единственности катеноида и геликоида.",phiPiRelation:"Эллиптические периоды тора Коста ω_1, ω_2 находятся в точном соотношении золотого сечения φ.",enginePreset:{type:"neoviusMinimal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"rossler-hyperchaos",name:"4D Гиперхаотический аттрактор Рёсслера",englishName:"4D Hyperchaotic Rössler Attractor",category:"ifs_attractors",formula:"ẋ = -y - z, ẏ = x + ay + w, ż = b + xz, ẇ = -cz + dw",dimension:"D_фрактальная ≈ 3.18 (Два положительных показателя Ляпунова λ₁ > λ₂ > 0)",generatorRule:"Двойное складчатое растяжение фазового потока в четырёхмерном фазовом пространстве",description:"Открытие Отто Рёсслера (1979). В отличие от простого хаоса, гиперхаос имеет более одного направления экспоненциального разбегания фазовых траекторий, порождая многослойные вихревые мембраны.",phiPiRelation:"Спектральное расщепление бифуркаций удвоения периода подчиняется универсальной константе Фейгенбаума δ ≈ 4.669 и золотой пропорции φ.",enginePreset:{type:"rosslerHyperchaos",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35}},{id:"clifford-attractor-v2",name:"4D Аттрактор Клиффорда — Пиковера",englishName:"Clifford-Pickover 4D Dynamic Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D_хаусдорфа ≈ 2.45 в четырёхмерном пространстве параметров",generatorRule:"Нелинейное синусоидальное отображение Клиффорда с закруткой фазового угла",description:"Исследован Клиффордом Пиковером. Образует непрерывные бархатистые каустические ленты и тороидальные спирали бесконечной глубины.",phiPiRelation:"При золотых параметрах a = -1.4φ, b = 1.6/φ, c = 1.0φ система формирует квазипериодические 10-лепестковые симметрии Пенроуза.",enginePreset:{type:"cliffordAttractor",compositeOp:"smoothUnion",zoom:3,rotX:.3,rotY:.4}},{id:"abrikosov-vortex-lattice",name:"Квантовая вихревая решётка Абрикосова",englishName:"Abrikosov Superconducting Vortex Lattice",category:"topological_physical",formula:"∇ × B = j_s, ψ(r) = Δ(r) e^{iθ}, ∮ v_s · dl = 2πℏ/m",dimension:"D = 2 + 1 (Квантованное 2D треугольное поле флюксонов с продольной спиралью)",generatorRule:"Нобелевское открытие А. А. Абрикосова (1957). Вихри сверхпроводящего тока с квантом магнитного потока Φ₀ = h/2e",description:"В сверхпроводниках II рода магнитное поле проникает в виде квантованных нитей (флюксонов), образующих строгую гексагональную решетку с вихревыми сингулярностями.",phiPiRelation:"Отношение периодов решетки флюксонов к длине когерентности Гинзбурга-Ландау ξ при золотом спиральном шаге минимизирует свободную энергию Гиббса.",enginePreset:{type:"abrikosovLattice",compositeOp:"smoothUnion",zoom:3.2,rotX:.2,rotY:.15}},{id:"beltrami-pseudosphere",name:"Псевдосфера Бельтрами (Геометрия Лобачевского)",englishName:"Beltrami Pseudosphere Hyperbolic Surface",category:"topological_physical",formula:"x = sech(u) cos(v), y = sech(u) sin(v), z = u - tanh(u), K ≡ -1/R²",dimension:"D_гладкая = 2 с гиперболическим фрактальным краевым сингулярным ребром",generatorRule:"Поверхность вращения трактрисы вокруг своей асимптоты; локальная модель плоскости Лобачевского",description:"Эудженио Бельтрами (1868) впервые реализовал неевклидову геометрию Лобачевского на вещественной поверхности в ℝ³ с постоянной отрицательной гауссовой кривизной K = -1.",phiPiRelation:"Экспоненциальное сужение горловины трактрисы e^{-z} скейлится золотым показателем φ, формируя бесконечный раструб.",enginePreset:{type:"beltramiPseudosphere",compositeOp:"smoothUnion",zoom:2.9,rotX:.35,rotY:.2}},{id:"spin-foam-network",name:"Спиновая пена и сеть Пенроуза (LQG)",englishName:"Penrose Spin Network & Quantum Foam",category:"topological_physical",formula:"A(j_f, v_e) = ∏_f dim(j_f) ∏_v W_v(j_f, i_e), SU(2) Gauge Invariance",dimension:"D_планковская = 4 (Дискретная квантовая планковская геометрия пространства-времени l_P ≈ 1.6·10⁻³⁵ м)",generatorRule:"Петлевая квантовая гравитация (Ровелли, Смолин, Пенроуз): пространство состоит из квантованных ячеек объёма и площади",description:"Революционная концепция квантовой физики: на планковском масштабе непрерывное пространство исчезает, уступая место динамической сети спинов и топологической квантовой пене.",phiPiRelation:"Спектры операторов площади квантованы через постоянную Иммирци γ_BI = ln(2) / (π√3) и масштабное деление золотого узла.",enginePreset:{type:"spinFoamNetwork",compositeOp:"smoothUnion",zoom:3.1,rotX:.5,rotY:.4}},{id:"ramanujan-tau-resonator",name:"Модулярный резонатор Рамануджана Δ(τ)",englishName:"Ramanujan Modular Tau Resonator",category:"algebraic_complex",formula:"Δ(τ) = (2π)¹² q ∏_{n=1}^∞ (1 - q^n)²⁴ = ∑_{n=1}^∞ τ(n) q^n, q = e^{2π i τ}",dimension:"Вес k = 12 модулярной формы над группой SL(2, ℤ)",generatorRule:"Параболическая модулярная форма Рамануджана с 24 каспами (корнями степени 24)",description:"Жемчужина теории чисел Сринивасы Рамануджана (1916). Функция τ(n) управляет 24-мерной решёткой Лича и теорией бозонных струн в 26 измерениях.",phiPiRelation:"Непрерывная дробь Рамануджана R(q) при q = e^{-2π} вычисляется строго через золотое сечение: R(e^{-2π}) = √(φ√5) - φ.",enginePreset:{type:"ramanujanTau",compositeOp:"smoothUnion",zoom:2.9,rotX:.4,rotY:.25}},{id:"belousov-zhabotinsky-waves",name:"Спиральные волны Белоусова — Жаботинского",englishName:"Belousov-Zhabotinsky Chemical Spiral Waves",category:"topological_physical",formula:"∂u/∂t = D_u ∇²u + u(1 - u) - f v (u - q)/(u + q), ∂v/∂t = D_v ∇²v + u - v",dimension:"D = 2 + 1 (Автоволновой фазовый спиральный фронт в активной нелинейной среде)",generatorRule:"Самоорганизующаяся нелинейная реакция окисления малоновой кислоты бромноватой кислотой",description:"Триумф синергетики и физики неравновесных процессов (Б. П. Белоусов 1951, А. М. Жаботинский 1964). Автоволновые ревербераторы образуют раскручивающиеся спирали в пространстве.",phiPiRelation:"Шаг спиральных волн самоорганизуется в золотую логарифмическую спираль r(θ) = a e^{θ cot(φ)}, минимизируя диссипацию энтропии.",enginePreset:{type:"belousovWaves",compositeOp:"smoothUnion",zoom:3,rotX:.35,rotY:.3}},{id:"mandelbulb-classic",name:"Мандельбульб (классический)",englishName:"Classic Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c, r = |z|, θ = atan2(√(x²+y²), z), φ = atan2(y, x)",dimension:"D ≈ 3.0 (граница) ",generatorRule:"Сферические координаты с возведением в степень 8",description:"Трёхмерный аналог множества Мандельброта, построенный путём обобщения формулы z²+c на сферические координаты со степенью 8.",phiPiRelation:"Степень 8 = 2³ связана с золотым сечением через итеративное удвоение; при замене 8 на φ·5 форма становится наиболее «золотой».",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",zoom:3.2,rotX:.4,rotY:.3,iterations:12}},{id:"mandelbulb-hybrid",name:"Мандельбульб × Спиральный туннель",englishName:"Mandelbulb × Spiral Tunnel Hybrid",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c ⊕ log-spiral fold",dimension:"D ≈ 2.8 (гибридная граница)",generatorRule:"Гладкое морфирование Мандельбульба с логарифмической спиральной складкой",description:"Гибрид классического Мандельбульба и спирального туннеля, создающий эффект закрученных коридоров внутри фрактала.",phiPiRelation:"Золотой угол скрутки 137.5° = 2π/φ² определяет шаг спирального складывания.",enginePreset:{type:"mandelbulb",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.4,zoom:3,rotX:.35}},{id:"quaternion-julia-slice",name:"Кватернионное множество Жюлиа (срез ℍ)",englishName:"Quaternion Julia Set (ℍ Slice)",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q ∈ ℍ, c = фиксированный кватернион",dimension:"D ≈ 2.5 (граница 3D-сечения)",generatorRule:"Итерация квадрата кватерниона с добавлением константы c ∈ ℍ",description:"4D множество Жюлиа в кватернионном пространстве. 3D-сечение показывает невероятно сложные переплетающиеся поверхности.",phiPiRelation:"Кватернионные компоненты c = (1/φ, 1/φ², 0, 0) порождают наиболее симметричные золотые сечения.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.5,iterations:10}},{id:"apollonian-packing",name:"Аполлониева упаковка сфер",englishName:"Apollonian Sphere Packing",category:"constructive",formula:"Кривизна k_{n+1} = k_1 + k_2 + k_3 + k_4 ± 2√(k_1 k_2 + k_2 k_3 + k_3 k_4 + k_4 k_1)",dimension:"D ≈ 2.47 (граница упаковки)",generatorRule:"Теорема Дезаржа об инверсиях: вписать максимальную сферу в зазор между 4 взаимно касающимися сферами",description:"Фрактальная упаковка сфер, где каждый зазор между 4 касающимися сферами заполняется новой максимальной сферой.",phiPiRelation:"Отношения кривизн соседних сфер в пределе сходятся к степеням золотого сечения.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",zoom:3.5,rotX:.3,rotY:.4,iterations:8}},{id:"spiral-tunnel-infinite",name:"Бесконечный логарифмический туннель φ",englishName:"Infinite Logarithmic Phi Zoom Tunnel",category:"geometric_curves",formula:"r(θ) = a · φ^(2θ/π), самоподобие при повороте на 2π/ln(φ)",dimension:"D = 1 + 2/ln(φ) ≈ 3.87",generatorRule:"Логарифмическая спираль с золотым показателем, развёрнутая в 3D-туннель",description:"Бесконечный туннель, стенки которого образованы золотой логарифмической спиралью. При зуме внутрь открывается бесконечная самоподобная структура.",phiPiRelation:"Показатель спирали = 2/ln(φ) ≈ 4.15; поворот на золотой угол 137.5° переводит туннель в себя.",enginePreset:{type:"spiralTunnel",compositeOp:"smoothMorph",zoom:2.5,rotX:0,rotY:0}},{id:"mandelbox-golden",name:"Мандельбокс золотого сложения",englishName:"Golden Mandelbox",category:"multidimensional",formula:"z_{n+1} = scale · fold(z_n) + c, fold: boxFold + sphereFold",dimension:"D ≈ 2.7 (зависит от scale)",generatorRule:"Складывание пространства: box fold (отражение) + sphere fold (инверсия сферы) + масштабирование",description:"Фрактал, полученный многократным складыванием 3D-пространства через комбинацию кубического и сферического отражений с золотым масштабом.",phiPiRelation:"При scale = φ² = 2.618... структура приобретает максимальную золотую симметрию.",enginePreset:{type:"mandelbox",compositeOp:"smoothMorph",zoom:3,boxFold:1,sphereFold:.5,iterations:12}},{id:"gyroid-tpms",name:"Золотая гироидная поверхность (TPMS)",englishName:"Golden Gyroid Minimal Surface",category:"topological_physical",formula:"G(x,y,z) = sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2 (нулевая средняя кривизна H ≡ 0)",generatorRule:"Трёхпериодическая минимальная поверхность Шона с золотым масштабированием",description:"Одна из трёх классических TPMS-поверхностей. Не имеет прямых линий, самопересечений; разделяет пространство на два лабиринтных канала.",phiPiRelation:"Периоды решётки масштабированы золотым сечением; каналы образуют золотые спиральные траектории.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.5,rotX:.5,rotY:.3}},{id:"prime-spiral-sachs",name:"Спираль простых Сакса — Улама",englishName:"Sachs-Ulam Prime Spiral",category:"algebraic_complex",formula:"p_n = n² + n + 41 (золотой многочлен Эйлера), размещение на ультра-спирали",dimension:"D ≈ 1 (асимптотическая плотность ~ 1/ln(n))",generatorRule:"Размещение простых чисел на полярной сетке r = √n, θ = 2π√n с золотым смещением",description:"Визуализация распределения простых чисел на плоскости, показывающая удивительные спиральные паттерны, связанные с золотым сечением.",phiPiRelation:"Золотой угол 2π/φ между последовательными витками минимизирует перекрытия и максимизирует видимость паттернов.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"poincare-homology",name:"Гомологическая сфера Пуанкаре",englishName:"Poincaré Homology Sphere",category:"topological_physical",formula:"S³/Γ, Γ = группа икосаэдра порядка 120",dimension:"D = 3 (замкнутое 3-многообразие с π₁ = Γ₁₂₀)",generatorRule:"Факторизация 3-сферы по группе икосаэдра: каждая точка идентифицируется с 119 другими",description:"Единственное известное замкнутое 3-многообразие с группами гомологий как у сферы, но нетривиальной фундаментальной группой порядка 120.",phiPiRelation:"Группа икосаэдра порядка 120 = 5! связана с φ через симметрии додекаэдра: |Γ| = 4π·60/(2π/φ).",enginePreset:{type:"poincareSphere",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:8}},{id:"gaussian-primes-lattice",name:"Решётка гауссовых простых Z[i]",englishName:"Gaussian Primes Lattice Z[i]",category:"algebraic_complex",formula:"p = a² + b² простое ⟺ p ≡ 1 (mod 4) или p = a+bi, N(p) = a²+b² простое в ℤ",dimension:"D ≈ 1.36 (асимптотическая плотность в ℂ)",generatorRule:"Размещение гауссовых простых на комплексной плоскости с золотым масштабированием",description:"Простые числа в кольце гауссовых целых Z[i]. Их распределение на комплексной плоскости образует удивительные решётчатые паттерны.",phiPiRelation:"Золотое масштабирование координат (a·φ, b·φ) выявляет скрытые спиральные симметрии в распределении.",enginePreset:{type:"gaussianPrimes",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"euler-totient-spiral",name:"Спираль функции Эйлера φ(n)",englishName:"Euler Totient φ(n) Archimedean Spiral",category:"algebraic_complex",formula:"φ(n) = n ∏_{p|n}(1 - 1/p), размещение на спирали Архимеда r = n",dimension:"D ≈ 1.5 (фрактальная размерность графика)",generatorRule:"Значение φ(n) кодирует высоту/цвет точки на архимедовой спирали",description:"Визуализация функции Эйлера на спиральной сетке, показывающая удивительные лучевые и радиальные паттерны в распределении значений.",phiPiRelation:"Среднее отношение φ(n)/n → 6/π²; золотой угол размещения φ(n) выявляет скрытые модулярные симметрии.",enginePreset:{type:"eulerTotientSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"clifford-torus-4d",name:"4D Тор Клиффорда (стереографическая проекция)",englishName:"4D Clifford Torus (Stereo Projection)",category:"multidimensional",formula:"(x₁,x₂,x₃,x₄) = (cos θ, sin θ, cos φ, sin φ) ⊂ S³ ⊂ ℝ⁴",dimension:"D = 2 (плоский тор в 4D, проекция в 3D)",generatorRule:"Стереографическая проекция из S³ в ℝ³ плоского тора (cos θ, sin θ, cos φ, sin φ)",description:"Единственный плоский (нулевая гауссова кривизна) тор, вложенный в 3-сферу. При стереографической проекции образует тор Дюпена.",phiPiRelation:"Золотое соотношение радиусов R/r = φ порождает наиболее гармоничную проекцию с икосаэдрическими сечениями.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"quaternion-mandelbrot-v2",name:"4D Кватернионное множество Мандельброта",englishName:"4D Quaternion Mandelbrot Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q, c ∈ ℍ",dimension:"D = 3 (граница 4D тела)",generatorRule:"Итерация квадрата кватерниона: q² = (a²-b·b̄, 2ab) для q = a + bi + cj + dk",description:"Полное 4D множество Мандельброта в кватернионном пространстве. 3D-сечения показывают бесконечное разнообразие форм.",phiPiRelation:"Кватернионные оси масштабированы золотым сечением; сечения при золотых углах обнаруживают максимальную сложность.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:10}},{id:"burning-ship-3d-v2",name:"3D Горящий корабль",englishName:"3D Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D ≈ 2.0 (граница)",generatorRule:"Модификация Мандельброта: абсолютные значения действительной и мнимой частей перед возведением в квадрат",description:"Фрактал, открытый Майклом Мандельбротом. В отличие от обычного Мандельброта, имеет характерную форму перевёрнутого корабля в пламени.",phiPiRelation:"Золотое масштабирование итераций выявляет самоподобные «паруса» горящего корабля.",enginePreset:{type:"burningShip3D",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4,iterations:12}},{id:"newton-basins-3d-v2",name:"3D Бассейны Ньютона-Рафсона",englishName:"3D Newton-Raphson Basins of Attraction",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n), f(z) = z³ - 1 (корни: 1, e^{2πi/3}, e^{4πi/3})",dimension:"D = 2 (границы бассейнов — фрактальные кривые)",generatorRule:"Итерация метода Ньютона для z³-1; каждая точка окрашивается по корню, к которому сходится",description:"Визуализация фрактальных границ бассейнов притяжения метода Ньютона. Границы между бассейнами образуют бесконечно сложные фрактальные кривые.",phiPiRelation:"Углы между бассейнами 120° = 2π/3; золотое возмущение начальных условий выявляет скрытую φ-симметрию.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:16}},{id:"jerusalem-cube-v2",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"constructive",formula:"Куб с крестами золотого сечения: удаление прямоугольников с отношением сторон φ",dimension:"D ≈ 2.58",generatorRule:"В каждой грани куба вырезается золотой крест, затем процесс повторяется рекурсивно",description:"Фрактал, построенный на кубе с золотыми пропорциями. В каждой грани вырезается крест, стороны которого относятся как φ:1.",phiPiRelation:"Все пропорции куба выражены через φ: рёбра креста, глубина вырезов и масштаб итераций.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",zoom:3,rotX:.35,rotY:.4,iterations:5}},{id:"hofstadter-butterfly-3d-v2",name:"Квантовая бабочка Хофштадтера",englishName:"Hofstadter Butterfly Energy Spectrum",category:"topological_physical",formula:"cos(q_x) + cos(q_y) = E, q_x = 2παm/n (магнитный поток α через ячейку)",dimension:"D ≈ 1.5 (фрактальная структура энергетических зон)",generatorRule:"Модель Харпера: квантовая частица на 2D решётке в однородном магнитном поле с рациональным потоком α = p/q",description:"Фрактальный энергетический спектр электрона в двумерной решётке с магнитным полем. Каждая «бабочка» — разрешённая зона энергии.",phiPiRelation:"При α = 1/φ (золотой поток) спектр демонстрирует максимальную фрактальную сложность и самоподобие.",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4}},{id:"antoine-necklace-v2",name:"Ожерелье Антуана (дикие зацепления)",englishName:"Antoine's Necklace Wild Linking",category:"topological_physical",formula:"C = ∩_n A_n, A_{n+1} ⊂ A_n, каждое звено зацеплено с соседними",dimension:"D ≈ 1.0 (канторово множество торов)",generatorRule:"Каждый тор заменяется на кольцо меньших торов, попарно зацепленных друг с другом",description:"Первый пример «дикого» вложения канторова множества в ℝ³. Топологически неэквивалентно стандартному канторову множеству.",phiPiRelation:"Количество торов на каждом уровне = 2·φ ≈ 3.236 → округление до 3 даёт наиболее плотное зацепление.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3,rotX:.4,rotY:.3,iterations:5}},{id:"henon-attractor-v2",name:"Аттрактор Энона (v2)",englishName:"Hénon Attractor (Expanded)",category:"expanded_real",formula:"xₙ₊₁ = 1 − axₙ² + yₙ, yₙ₊₁ = bxₙ (a=1.4, b=0.3)",dimension:"D ≈ 1.261 (фрактальная размерность аттрактора)",generatorRule:"Отображение Энона — дискретная динамическая система. 3D-обобщение добавляет третью координату с модуляцией.",description:"Один из первых изученных странных аттракторов. Демонстрирует хаотическое поведение в диссипативной системе. Фазовое пространство — сложенные полосы.",phiPiRelation:"Параметр a = 1.4 ≈ φ − 0.218. При a = φ аттрактор переходит в хаос через каскад удвоения периода.",enginePreset:{type:"henonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"aizawa-attractor-v2",name:"Аттрактор Аизавы (v2)",englishName:"Aizawa Attractor (Expanded)",category:"expanded_real",formula:"ẋ = (z−b)x − dy, ẏ = dx + (z−b)y, ż = c + az − z³/3 − (x²+y²)(1+ez) + fz x³",dimension:"D ≈ 2.1 (тороидальный хаос)",generatorRule:"Система ОДУ с тороидальной топологией. Параметры: a=0.95, b=0.7, c=0.6, d=3.5, e=0.25, f=0.1.",description:"Тороидальный странный аттрактор с характерной «пузырьковой» структурой. Демонстрирует переход от порядка к хаосу через квазипериодичность.",phiPiRelation:"Параметр d = 3.5 ≈ 2φ + 0.382. Тороидальная геометрия связана с золотым сечением через иррациональность числа вращения.",enginePreset:{type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.6,iterations:12}},{id:"thomas-attractor-v2",name:"Аттрактор Томаса (v2)",englishName:"Thomas's Cyclically Symmetric Attractor (Expanded)",category:"expanded_real",formula:"ẋ = sin(y) − bx, ẏ = sin(z) − by, ż = sin(x) − bz",dimension:"D ≈ 2.0 (C₃-симметричный)",generatorRule:"Циклически симметричная система с 3-кратной осью. При b = 0.208186 — хаотический лабиринт.",description:"Простейший пример циклически симметричного хаоса. Траектория образует симметричный лабиринт в форме трёхмерного узла.",phiPiRelation:"Критическое значение b ≈ 0.208186 связано с золотым сечением: b ≈ 1/(2φ² + 1).",enginePreset:{type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.4,iterations:14}},{id:"halvorsen-attractor-v2",name:"Аттрактор Хальворсена (v2)",englishName:"Halvorsen Attractor (Expanded)",category:"expanded_real",formula:"ẋ = −ax − 4y − 4z − y², ẏ = −ay − 4z − 4x − z², ż = −az − 4x − 4y − x²",dimension:"D ≈ 2.3 (3-кратная симметрия)",generatorRule:"Циклическая система с квадратичной нелинейностью. a = 1.89 даёт наиболее выразительную структуру.",description:"Трёхсимметричный странный аттрактор с характерными «лепестками». Каждый лепесток — спиральная траектория.",phiPiRelation:"Оптимальное a = 1.89 ≈ φ + 0.272. Три лепестка = 2π/(3φ) радиан на каждый.",enginePreset:{type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.7,iterations:12}},{id:"julia-set-3d",name:"Множество Жюлиа 3D",englishName:"Julia Set (c = −0.7 + 0.27i)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ² + c, c = −0.7 + 0.27015i",dimension:"D ≈ 1.75 (граница множества Жюлиа)",generatorRule:"Классическое квадратичное отображение Жюлиа. 3D-проекция через стереографическую проекцию.",description:"Одно из самых красивых множеств Жюлиа. Связано с множеством Мандельброта: каждая точка c даёт уникальную геометрию.",phiPiRelation:"c = −0.7 + 0.27i ≈ −1/φ + i/(2φ²). Граница множества имеет золотую спиральную структуру.",enginePreset:{type:"juliaSet3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.4,iterations:18}},{id:"multibrot3",name:"Мультиброт z³+c",englishName:"Multibrot Set (z³ + c)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ³ + c",dimension:"D = 2 (граница), внутренность — 3-кратная симметрия",generatorRule:"Обобщение Мандельброта на степень 3. Вместо 2-кратной — 3-кратная симметрия.",description:"Трёхкратное обобщение множества Мандельброта. Имеет 3-кратную вращательную симметрию вместо 2-кратной.",phiPiRelation:"Каждая степень d даёт d-кратную симметрию. При d = φ+1 ≈ 2.618 получается промежуточная структура.",enginePreset:{type:"multibrot3",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"tetrix",name:"Тетрикс (Тетраэдр Серпинского)",englishName:"Tetrix (Sierpinski Tetrahedron)",category:"ifs_attractors",formula:"IFS: 4 аффинных сжатия к вершинам тетраэдра с коэффициентом 1/2",dimension:"D = log(4)/log(2) = 2.0",generatorRule:"Каждый тетраэдр заменяется на 4 тетраэдра в половину размера, расположенных в вершинах исходного.",description:"3D-аналог треугольника Серпинского. Единственный IFS-фрактал, размерность которого точно равна 2.",phiPiRelation:"4 вершины тетраэдра = 3-мерный аналог золотого треугольника. Коэффициент 1/2 = 1/φ⁰.",enginePreset:{type:"tetrix",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.6,iterations:12}},{id:"gosper-curve-v2",name:"Кривая Госпера (Остров Госпера) (v2)",englishName:"Gosper Curve (Gosper Island) (Expanded)",category:"expanded_real",formula:"L-система: F → F+F−−F−F++FF+F−, угол 60°",dimension:"D = log(7)/log(3) ≈ 1.771",generatorRule:"Каждый сегмент заменяется на 7 сегментов в √7 раз меньших, с поворотом на arctan(√3/5).",description:"Единственная кривая, заполняющая плоскость, tiles которой — шестиугольники. Основа гексагонального фрактального мощения.",phiPiRelation:"7 сегментов / 3 масштаб = log(7)/log(3). Угол поворота ≈ 13.898° связан с φ через √7.",enginePreset:{type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.3,iterations:7}},{id:"l-system-plant",name:"L-система: Фрактальное растение",englishName:"L-System Plant (Phyllotactic Branching)",category:"geometric_curves",formula:"Axiom: F, Rules: F → F[+F]F[-F][F], угол = 137.5° (золотой)",dimension:"D ≈ 1.45 (филогенетическое ветвление)",generatorRule:"Рекурсивное ветвление с золотым углом 137.5° между побегами. Каждый уровень — масштабирование на 1/φ.",description:"Математическая модель роста растения. Золотой угол обеспечивает максимальную инсоляцию каждого листа.",phiPiRelation:"Золотой угол = 2π(1 − 1/φ) ≈ 137.508°. Фибоначчиево филлотаксисное расположение листьев.",enginePreset:{type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.5,rotX:.2,rotY:.8,iterations:9}},{id:"schwarz-p",name:"Поверхность Шварца P",englishName:"Schwarz P Minimal Surface",category:"topological_physical",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set суммы косинусов по трём осям. Периодическая структура с кубической симметрией.",description:"Одна из трёх классических трипериодических минимальных поверхностей (TPMS). Встречается в структуре мембран и кристаллах.",phiPiRelation:"Масштаб поверхности = φ. Периодичность по трём осям = 2π. Связь с кубической симметрией O_h.",enginePreset:{type:"schwarzP",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.5,iterations:6}},{id:"schwarz-d",name:"Поверхность Шварца D (Diamond)",englishName:"Schwarz D Minimal Surface",category:"topological_physical",formula:"sin(x)sin(y)sin(z) − cos(x)cos(y)cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set разности произведений sin и cos. Алмазная топология каналов.",description:"Вторая из трёх классических TPMS. Топология каналов соответствует алмазной кристаллической решётке.",phiPiRelation:"Масштаб = φ. Встречается в структуре опалов и фотонных кристаллов с золотым сечением.",enginePreset:{type:"schwarzD",compositeOp:"smoothUnion",zoom:2,rotX:.3,rotY:.6,iterations:6}},{id:"apollonian-gasket-v2",name:"Прокладка Аполлония (v2)",englishName:"Apollonian Gasket (Expanded)",category:"expanded_real",formula:"Рекурсивное вписывание окружностей: каждая касается трёх соседних",dimension:"D ≈ 1.3057 (точно вычислена Бойдом)",generatorRule:"Начальные 3 взаимно касающиеся окружности. На каждом шаге в каждую криволинейную треугольную область вписывается новая окружность.",description:"Один из старейших известных фракталов (Аполлоний Пергский, ~200 до н.э.). Связан с теорией чисел и p-адическими формами.",phiPiRelation:"Кривизны окружностей образуют целочисленные квадруuples (a,b,c,d) с a²+b²+c²+d² = (a+b+c+d)²/2. Золотое сечение в соотношении радиусов.",enginePreset:{type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:10}},{id:"barnsley-fern-3d",name:"Папоротник Барнсли 3D",englishName:"Barnsley Fern 3D",category:"ifs_attractors",formula:"4 аффинных преобразования: стебель (1%), лист (85%), левый побег (7%), правый побег (7%)",dimension:"D ≈ 1.45 (IFS-аттрактор)",generatorRule:"Система итерируемых функций с 4 преобразованиями. Вероятностный выбор: p = {0.01, 0.85, 0.07, 0.07}.",description:"3D-обобщение классического папоротника Барнсли. Добавлена третья координата с уменьшением масштаба на каждом уровне.",phiPiRelation:"Коэффициенты преобразований: 0.85 ≈ 1/φ + 0.232. Золотое сечение в масштабах листьев.",enginePreset:{type:"barnsleyFern3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.5,iterations:10}},{id:"klein-quartic",name:"Квартика Клейна",englishName:"Klein Quartic Surface",category:"topological_physical",formula:"x³y + y³z + z³x = 0 (в ℂP²)",dimension:"D = 2 (поверхность рода 3)",generatorRule:"Поверхность 4-го порядка в комплексной проективной плоскости. Группа симметрий PSL(2,7) порядка 168.",description:"Поверхность с максимальной возможной симметрией для рода 3 (теорема Гурвица: 84(g−1) = 168). Связана с группой Фано.",phiPiRelation:"168 = 8 × 21 = 8 × 3 × 7. Порядок группы симметрий связан с φ через число Фибоначчи F(8) = 21.",enginePreset:{type:"kleinQuartic",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:8}},{id:"sphere-packing",name:"Фрактальная упаковка сфер",englishName:"Fractal Sphere Packing (FCC)",category:"constructive",formula:"Рекурсивное размещение сфер в гранях FCC-решётки с масштабом 1/φ",dimension:"D ≈ 2.47 (упаковка)",generatorRule:"На каждом уровне: FCC-решётка сфер, каждая сфера заполняется меньшими сферами в октаэдрических и тетраэдрических пустотах.",description:"Модель плотнейшей упаковки сфер с фрактальной иерархией. Связана с упаковкой Кеплера и гипотезой Хейлса.",phiPiRelation:"Масштаб вложения = φ. FCC-упаковка = π/(3√2) ≈ 0.7405. Золотое сечение в соотношении пустот.",enginePreset:{type:"spherePacking",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:7}},{id:"nova-fractal",name:"Нова-фрактал",englishName:"Nova Fractal",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ − zₙ³/(3zₙ²) + c (гибрид Ньютона и Мандельброта)",dimension:"D ≈ 2 (граница бассейнов)",generatorRule:"Итерация Ньютона для z³ = 1 с добавлением параметра c как в Мандельброте.",description:"Гибрид метода Ньютона и множества Мандельброта. Объединяет фрактальную структуру бассейнов притяжения с геометрией Мандельброта.",phiPiRelation:"3-кратная симметрия бассейнов = 2π/3. Параметр c связан с φ через положение бассейнов.",enginePreset:{type:"novaFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:14}},{id:"golden-knot",name:"Золотой узел",englishName:"Golden Knot (φ-Torus Knot)",category:"topological_physical",formula:"(R + r·cos(qθ))·(cos θ, sin θ), r·sin(qθ)), q = φ",dimension:"D = 1 (кривая), D ≈ 1.3 с трубкой",generatorRule:"Торический узел с иррациональным числом намотки q = φ. Замыкание при конечном числе оборотов.",description:"Торический узел с золотым числом намотки. Иррациональность φ делает кривую всюду плотной на торе.",phiPiRelation:"Число намотки = φ = (1+√5)/2. Золотой узел — единственная кривая с иррациональной намоткой на торе.",enginePreset:{type:"goldenKnot",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:6}},{id:"spherical-harmonics",name:"Сферические гармоники",englishName:"Spherical Harmonics (Quantum Orbitals)",category:"topological_physical",formula:"Yₗᵐ(θ,φ) — собственные функции оператора Лапласа на сфере",dimension:"D = 2 (поверхность), D ≈ 2.5 с модуляцией",generatorRule:"Суперпозиция сферических гармоник Y₃₂ и Y₄₂. Радиальная модуляция = 1 + 0.4·Y₃₂ + 0.25·Y₄₂.",description:"Квантовые орбитальные формы — собственные функции углового момента. Визуализация атомных орбиталей.",phiPiRelation:"Квантовые числа l, m связаны с золотым сечением: l = 3, m = 2 → l/m = φ − 0.118 ≈ 3/2.",enginePreset:{type:"sphericalHarmonics",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:6}},{id:"reaction-diffusion",name:"Реакция-диффузия (Тьюринг)",englishName:"Reaction-Diffusion (Gray-Scott)",category:"topological_physical",formula:"∂u/∂t = Du∇²u − uv² + F(1−u), ∂v/∂t = Dv∇²v + uv² − (F+k)v",dimension:"D ≈ 2.3 (Тьюринговые паттерны)",generatorRule:"Модель Грея-Скотта с параметрами F = 0.04 + φ·0.01, k = 0.06 + φ·0.005. Два реагента, диффузия и реакция.",description:"Математическая модель образования биологических паттернов: пятна, полоса, спирали. Объясняет окраску животных.",phiPiRelation:"Параметры F и k используют φ. Тьюринговые паттерны возникают при соотношении диффузий Du/Dv ≈ φ².",enginePreset:{type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:8,paletteSeed:92}},{id:"kleinian-limit-set",name:"Пределное множество Клейна",englishName:"Kleinian Limit Set",category:"expanded_real",formula:"Γ = ⟨γ₁, γ₂⟩  PSL(2,ℂ), Λ(Γ) = замыкание орбиты",dimension:"D ≈ 1.2-2.0 (зависит от группы)",generatorRule:"Мёбиус-инверсии порождают фрактальное пределное множество.",description:"Фрактальная граница орбит дискретной группы Мёбиусовых преобразований. Аппроксимация круговыми упаковками.",phiPiRelation:"Соотношения сторон фундаментальной области используют φ.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.3,iterations:10,paletteSeed:5}},{id:"tricorn-mandelbar",name:"ТрикORN (Мандельбар)",englishName:"Tricorn / Mandelbar",category:"expanded_real",formula:"z → z̄² + c (сопряжение вместо квадрата)",dimension:"D ≈ 2 (граница)",generatorRule:"Итерация z_{n+1} = conjugate(z_n)² + c. Антилинейное отображение.",description:'Сопряжённое множество Мандельброта с характерными "рогами" и антианалитической симметрией.',phiPiRelation:"Периоды кардиоид используют φ в параметризации.",enginePreset:{type:"tricorn",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.6,iterations:18,paletteSeed:12}},{id:"mandelbar-3d",name:"3D Мандельбар",englishName:"3D Mandelbar Fractal",category:"expanded_real",formula:"z → z̄ + c в 3D обобщении",dimension:"D ≈ 2.5-3.0",generatorRule:"3D обобщение антианалитического отображения Мандельбара.",description:"Трёхмерная версия трикорна с характерными шипами и зеркальной симметрией.",phiPiRelation:"Показатель степени n связан с φ.",enginePreset:{type:"mandelbar",compositeOp:"smoothUnion",zoom:2.8,rotX:.35,rotY:.45,iterations:14,paletteSeed:19}},{id:"phoenix-memory-fractal",name:"Фрактал Феникс (память)",englishName:"Phoenix Fractal (Memory)",category:"expanded_real",formula:"z_{n+1} = z_n² + c + p·z_{n-1}",dimension:"D ≈ 1.5-2.0",generatorRule:"Итерация с памятью: текущее значение зависит от двух предыдущих.",description:'Фрактал с "памятью" — каждое состояние зависит от двух предыдущих. Создаёт крылоподобные структуры.',phiPiRelation:"Параметр памяти p = 1/φ создаёт наиболее симметричные формы.",enginePreset:{type:"phoenixFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:16,paletteSeed:27}},{id:"e8-lattice-projection",name:"Проекция решётки E8",englishName:"E8 Lattice Projection",category:"expanded_real",formula:"E8  ℝ⁸, проекция на ℝ³ через золотое сечение",dimension:"D = 8 (полная), D ≈ 3.2 (проекция)",generatorRule:"240 корней E8 проецируются на 3D через икосаэдральную симметрию.",description:"Исключительная группа Ли E8 — самая симметричная структура в математике. 240 векторов корней.",phiPiRelation:"Проекция E8 на 3D использует φ-симметрию икосаэдра.",enginePreset:{type:"e8Lattice",compositeOp:"smoothUnion",zoom:3,rotX:.6,rotY:.3,iterations:8,paletteSeed:34}},{id:"chladni-vibrational-modes",name:"Фигуры Хладни",englishName:"Chladni Vibrational Figures",category:"expanded_real",formula:"⁴u − k⁴u = 0 (уравнение изгибных колебаний пластины)",dimension:"D ≈ 2 (узловые линии)",generatorRule:"Узловые линии стоячих волн на квадратной/круглой пластине.",description:"Визуализация собственных мод колебаний. Песок собирается на узловых линиях, образуя фрактальные паттерны.",phiPiRelation:"Соотношения частот мод используют φ для негармонических пластин.",enginePreset:{type:"chladniFigures",compositeOp:"smoothUnion",zoom:2.5,rotX:0,rotY:0,iterations:10,paletteSeed:41}},{id:"koch-snowflake-3d",name:"Снежинка Коха 3D",englishName:"3D Koch Snowflake",category:"expanded_real",formula:"Рекурсивное добавление тетраэдров на каждую грань",dimension:"D = log(4)/log(3) ≈ 1.261 (кривая), D ≈ 2.3 (поверхность)",generatorRule:"Каждая грань заменяется на 4 меньших с тетраэдральным выступом.",description:"Трёхмерное обобщение снежинки Коха. Бесконечная площадь поверхности при конечном объёме.",phiPiRelation:"Масштабный коэффициент 1/3 связан с φ через золотой треугольник.",enginePreset:{type:"kochSnowflake3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.5,iterations:7,paletteSeed:48}},{id:"cantor-dust-3d",name:"Канторова пыль 3D",englishName:"3D Cantor Dust",category:"expanded_real",formula:"C = C × C × C, рекурсивное удаление центральных кубов",dimension:"D = 3·log(2)/log(3) ≈ 1.893",generatorRule:"Куб делится на 27 подкубов, удаляются все кроме 8 угловых.",description:"Трёхмерный аналог множества Кантора. Совершенно несвязное фрактальное множество.",phiPiRelation:"Коэффициент подобия 1/3 связан с φ через золотое сечение отрезка.",enginePreset:{type:"cantorDust",compositeOp:"smoothUnion",zoom:3,rotX:.5,rotY:.3,iterations:8,paletteSeed:55}},{id:"sierpinski-carpet-3d",name:"Ковёр Серпинского",englishName:"Sierpinski Carpet",category:"expanded_real",formula:"Квадрат делится на 9, центральный удаляется, рекурсия",dimension:"D = log(8)/log(3) ≈ 1.893",generatorRule:"3×3 сетка, удаление центрального квадрата на каждом уровне.",description:"Универсальная кривая Серпинского — содержит все одномерные кривые. Нулевая площадь.",phiPiRelation:"Масштаб 1/3 и 8 копий создают φ-пропорции в предельном множестве.",enginePreset:{type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:7,paletteSeed:62}},{id:"fractal-spire-exponential",name:"Фрактальный шпиль (e^z+c)",englishName:"Fractal Spire (Exponential)",category:"expanded_real",formula:"z → e^z + c (экспоненциальное отображение)",dimension:"D ≈ 2 (граница)",generatorRule:"Итерация экспоненциальной функции. Создаёт бесконечные спиральные башни.",description:"Фрактал экспоненциального отображения. Бесконечные спиральные шпили уходят в комплексную бесконечность.",phiPiRelation:"Период 2πi и золотое сечение создают резонансные башни.",enginePreset:{type:"fractalSpire",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:14,paletteSeed:69}},{id:"vicsek-fractal-3d",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Cross)",category:"expanded_real",formula:"Крестообразное рекурсивное разбиение 3×3×3",dimension:"D = log(5)/log(3) ≈ 1.465",generatorRule:"3×3×3 куб, оставляются центральный и 4 угловых подкуба.",description:"Крестообразный фрактал Вичека. Самоподобная структура с крестообразной симметрией.",phiPiRelation:"5 копий при масштабе 1/3 создают φ-пропорции.",enginePreset:{type:"vicsekFractal",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.4,iterations:8,paletteSeed:76}},{id:"fractal-cross-3d",name:"Фрактальный крест 3D",englishName:"3D Fractal Cross",category:"expanded_real",formula:"Рекурсивное крестообразное IFS с 6 направлениями",dimension:"D ≈ 2.0",generatorRule:"6 аффинных преобразований вдоль осей ±x, ±y, ±z.",description:"Трёхмерный фрактальный крест с шестью лучами. Рекурсивная структура с октаэдральной симметрией.",phiPiRelation:"6 направлений связаны с икосаэдральной φ-симметрией.",enginePreset:{type:"fractalCross",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35,iterations:8,paletteSeed:83}},{id:"chua-circuit-double-scroll",name:"Схема Чуа (двойной скролл)",englishName:"Chua's Circuit Double Scroll",category:"expanded_real",formula:"ẋ = α(y − x − f(x)), ẏ = x − y + z, ż = −βy",dimension:"D ≈ 2.2 (странный аттрактор)",generatorRule:"Нелинейная цепь с кусочно-линейной характеристикой. α=15.6, β=28, m₀=−1.143, m₁=−0.714.",description:"Первая физически реализованная хаотическая система. Фазовый портрет — «бабочка» двойного скролла.",phiPiRelation:"Параметры α/β ≈ 0.557 ≈ 1/φ. Пороговое значение β связано с золотым сечением.",enginePreset:{type:"chuaCircuit",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.5,iterations:14,paletteSeed:8}},{id:"standard-map-chirikov",name:"Стандартное отображение Чирикова-Тейлора",englishName:"Standard Map (Chirikov-Taylor)",category:"expanded_real",formula:"pₙ₊₁ = pₙ + K sin(θₙ), θₙ₊₁ = θₙ + pₙ₊₁ (mod 2π)",dimension:"D ≈ 2.0 (стохастический слой)",generatorRule:"Гамильтоново отображение с параметром хаоса K. При K > 0.9716 — глобальный хаос.",description:"Фундаментальная модель хаотической динамики. Демонстрирует переход от порядка к хаосу через каскад островов.",phiPiRelation:"Золотое сечение определяет критические KAM-торы, устойчивые при максимальном хаосе.",enginePreset:{type:"standardMap",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:12,paletteSeed:15}},{id:"ikeda-map",name:"Отображение Икеды",englishName:"Ikeda Map",category:"expanded_real",formula:"zₙ₊₁ = 1 + u·zₙ·exp(i·tₙ), tₙ = 0.4 − 6/(1+|zₙ|²)",dimension:"D ≈ 1.7 (странный аттрактор)",generatorRule:"Комплексное отображение с u=0.9. Моделирует распространение света в нелинейной среде.",description:"Аттрактор Икеды описывает распространение лучей в нелинейной оптической среде. U-образная структура.",phiPiRelation:"Параметр u = 0.9 ≈ φ − 0.718. Фазовая модуляция использует π.",enginePreset:{type:"ikedaMap",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14,paletteSeed:22}},{id:"fatou-set-basin",name:"Множество Фату (граница бассейна)",englishName:"Fatou Set (Basin Boundary)",category:"expanded_real",formula:"zₙ₊₁ = zₙ² + c, c = 0.7885·e^{iθ}",dimension:"D ≈ 1.0-2.0 (граница бассейна)",generatorRule:"Бассейны сходимости орбит z²+c. Граница между бассейнами — фрактальная кривая.",description:"Множество Фату — дополнение множества Жюлиа. Область, где орбиты сходятся к фиксированным точкам.",phiPiRelation:"Параметр c = 0.7885 ≈ φ/2. Вращение c по кругу раскрывает φ-структуру.",enginePreset:{type:"fatouSet",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.3,iterations:16,paletteSeed:29}},{id:"fitzhugh-nagumo-neural",name:"Модель ФитцХью-Нагумо (нейродинамика)",englishName:"FitzHugh-Nagumo Neural Dynamics",category:"expanded_real",formula:"dv/dt = v − v³/3 + w + I, dw/dt = (v − a + bw)/τ",dimension:"D ≈ 2.1 (фазовый портрет)",generatorRule:"Упрощённая модель Ходжкина-Хаксли. a=0.7, b=0.8, τ=12.5.",description:"Модель нейронного импульса. Фазовый портрет — предельный цикл с порогом возбуждения.",phiPiRelation:"Параметр τ = 12.5 ≈ 8φ. Порог возбуждения a = 0.7 ≈ 1/φ + 0.082.",enginePreset:{type:"fitzHugh",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:12,paletteSeed:36}},{id:"rossler-attractor",name:"Аттрактор Рёсснера",englishName:"Rössler Attractor",category:"expanded_real",formula:"ẋ = −y − z, ẏ = x + ay, ż = b + z(x − c)",dimension:"D ≈ 2.0 (странный аттрактор)",generatorRule:"a=0.2, b=0.2, c=5.7. Простейший аттрактор с одной полосой.",description:"Аттрактор Рёсснера — простейшая система с хаотическим поведением. Одна лента, скрученная в спираль.",phiPiRelation:"c = 5.7 ≈ 3φ + 1.082. Частота вращения связана с φ через отношение a/b.",enginePreset:{type:"rosslerAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.3,rotY:.6,iterations:14,paletteSeed:43}},{id:"duffing-attractor",name:"Аттрактор Даффинга",englishName:"Duffing Attractor",category:"expanded_real",formula:"ẍ + δẋ + αx + βx³ = γ cos(ωt)",dimension:"D ≈ 2.2 (нелинейный осциллятор)",generatorRule:"α=1, β=5, δ=0.02, γ=8. Нелинейная пружина с жёсткостью k(x) = α + βx².",description:"Нелинейный осциллятор Даффинга. Двойная потенциальная яма создаёт хаотические переключения.",phiPiRelation:"Отношение γ/β = 1.6 ≈ φ. Частота ω связана с золотым сечением.",enginePreset:{type:"duffingAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:12,paletteSeed:50}},{id:"logistic-bifurcation",name:"Бифуркация логистического отображения",englishName:"Logistic Map Bifurcation",category:"expanded_real",formula:"xₙ₊₁ = r·xₙ(1 − xₙ), δ ≈ 4.669 (константа Фейгенбаума)",dimension:"D ≈ 1.0 (бифуркационная диаграмма)",generatorRule:"Каскад удвоения периода при r ∈ [2.5, 4.0]. Универсальная константа δ.",description:"Бифуркационная диаграмма логистического отображения — универсальный путь к хаосу через удвоение периода.",phiPiRelation:"Константа Фейгенбаума δ ≈ 4.669 ≈ 3φ − 0.173. Универсальность для всех одномерных отображений.",enginePreset:{type:"logisticBifurcation",compositeOp:"smoothUnion",zoom:2.5,rotX:0,rotY:.5,iterations:10,paletteSeed:57}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"DeJong Strange Attractor",category:"expanded_real",formula:"x' = sin(ay) − cos(bx), y' = sin(cx) − cos(dy)",dimension:"D ≈ 2.0 (странный аттрактор)",generatorRule:"Тригонометрическое отображение с 4 параметрами. a=2.24, b=−0.43, c=−0.65, d=2.43.",description:"Странный аттрактор Питера Де Йонга. Элегантные спиральные структуры из простых тригонометрических функций.",phiPiRelation:"Параметры подобраны так, что a−d ≈ −0.19 ≈ 1/φ² − 0.81.",enginePreset:{type:"deJongAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.3,iterations:14,paletteSeed:64}},{id:"pickover-attractor",name:"Аттрактор Пиковера",englishName:"Pickover Strange Attractor",category:"expanded_real",formula:"x' = sin(ay) + c·cos(ax), y' = sin(bx) + d·cos(by)",dimension:"D ≈ 2.0",generatorRule:"Модификация аттрактора Де Йонга Клиффордом Пиковером. a=−1.64, b=1.9, c=−0.31, d=0.72.",description:"Вариация аттрактора Де Йонга с дополнительными косинусными членами. Создаёт более сложные спиральные узоры.",phiPiRelation:"Параметры связаны с φ через золотые пропорции тригонометрических функций.",enginePreset:{type:"pickoverAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.6,iterations:14,paletteSeed:71}},{id:"weierstrass-surface",name:"Функция Вейерштрасса (нигде не дифференцируема)",englishName:"Weierstrass Nowhere-Differentiable Surface",category:"expanded_real",formula:"W(x) = Σ aⁿ cos(bⁿ πx), ab > 1 + 3π/2",dimension:"D ≈ 2.3 (фрактальная поверхность)",generatorRule:"a=0.5, b=7. Суперпозиция косинусоид с экспоненциально растущей частотой.",description:"Классический пример непрерывной, но нигде не дифференцируемой функции. Фрактальная поверхность.",phiPiRelation:"Условие ab > 1+3π/2. При a = 1/φ поверхность сохраняет фрактальность.",enginePreset:{type:"weierstrass3D",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:8,paletteSeed:78}},{id:"popcorn-function",name:"Функция «Попкорн» (Celldoor)",englishName:"Popcorn Function (Celldoor)",category:"expanded_real",formula:"x' = x − c·sin(y + tan(y)), y' = y − c·sin(x + tan(x))",dimension:"D ≈ 1.5-2.0",generatorRule:"Итеративное отображение с тангенциальной модуляцией. c = 0.4 + 0.15·sin(t).",description:"Фрактальное отображение «Попкорн» от Celldoor. Тангенциальные члены создают «взрывные» паттерны.",phiPiRelation:"Параметр c модулируется с периодом, связанным с φ.",enginePreset:{type:"popcornFunction",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.4,iterations:10,paletteSeed:85}},{id:"bedhead-attractor",name:"Аттрактор Bedhead (3D хаос)",englishName:"Bedhead 3D Chaotic Attractor",category:"expanded_real",formula:"x' = sin(ay·z) − z·cos(bx·y), y' = z·sin(ax) − cos(by·z), z' = c·sin(xz)",dimension:"D ≈ 2.3",generatorRule:"Трёхмерное тригонометрическое отображение с перекрёстными членами. a=0.95, b=0.7, c=0.6.",description:"Трёхмерный хаотический аттрактор «растрёпанной головы». Нелинейные перекрёстные члены создают объёмные спирали.",phiPiRelation:"Параметры a,b,c подобраны для максимального хаоса при минимальной сложности.",enginePreset:{type:"bedheadAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.3,iterations:14,paletteSeed:90}},{id:"fourspot-attractor",name:"Аттрактор FourSpot (4-крыловой)",englishName:"FourSpot 4-Wing Chaotic Attractor",category:"expanded_real",formula:"x' = yz − ax, y' = xz − y, z' = −xy + z",dimension:"D ≈ 2.2",generatorRule:"Система ОДУ с 4 крыльями аттрактора. a = 2.0 + 0.5·sin(t).",description:"Четырёхкрылый хаотический аттрактор. Траектория переключается между 4 лопастями.",phiPiRelation:"Параметр a модулируется в диапазоне, связанном с φ.",enginePreset:{type:"fourSpotAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:12,paletteSeed:95}},{id:"svensson-attractor",name:"Аттрактор Свенссона",englishName:"Svensson Strange Attractor",category:"expanded_real",formula:"x' = d·sin(ay) − c, y' = b·sin(cx)",dimension:"D ≈ 2.0",generatorRule:"Двумерное отображение с тригонометрической модуляцией. a=2.0, b=0.2, c=1.57, d=1.4.",description:"Странный аттрактор Свенссона. Элегантные спиральные узоры из простых тригонометрических функций.",phiPiRelation:"Параметр c = 1.57 ≈ π/2. Золотое сечение в соотношениях частот.",enginePreset:{type:"svenssonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:14,paletteSeed:99}}],B2=({isOpen:p,onClose:s,onApplyPreset:d})=>{var W;const[u,v]=k.useState("catalog"),[b,x]=k.useState("all"),[A,N]=k.useState(""),[g,F]=k.useState(dl[0]),[E,L]=k.useState(null),U=k.useMemo(()=>dl.filter(B=>{const ce=b==="all"||B.category===b,_=A.toLowerCase().trim();if(!_)return ce;const P=B.name.toLowerCase().includes(_)||B.englishName.toLowerCase().includes(_)||B.formula.toLowerCase().includes(_)||B.dimension.toLowerCase().includes(_)||B.description.toLowerCase().includes(_);return ce&&P}),[b,A]);if(!p)return null;const Y=B=>{d(B.enginePreset,B.name),L(B.id),setTimeout(()=>{L(null),s()},450)},J=B=>{switch(B){case"geometric_curves":return l.jsx(Mr,{className:"w-4 h-4"});case"constructive":return l.jsx(yi,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(Zh,{className:"w-4 h-4"});case"multidimensional":return l.jsx(gh,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(fl,{className:"w-4 h-4"});case"stochastic":return l.jsx(bi,{className:"w-4 h-4"});case"topological_physical":return l.jsx(fd,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(gi,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",dl.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(ml,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>v("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(yi,{className:"w-4 h-4"}),"Атлас и Таксономия (",dl.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>v("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Js,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>v("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ks,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),u==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(s2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:A,onChange:B=>N(B.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),A&&l.jsx("button",{onClick:()=>N(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>x("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${b==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",dl.length,")"]}),od.map(B=>{var ce;return l.jsxs("button",{onClick:()=>x(B.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${b===B.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[J(B.id),l.jsx("span",{children:((ce=B.title.split(".")[1])==null?void 0:ce.trim())||B.title})]},B.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:U.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):U.map(B=>{var _;const ce=(g==null?void 0:g.id)===B.id;return l.jsxs("button",{id:`btn-fractal-${B.id}`,onClick:()=>F(B),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${ce?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:B.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(_=B.dimension.split("≈")[0])==null?void 0:_.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:B.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:B.formula})]})]},B.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:g?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[J(g.category),l.jsx("span",{children:(W=od.find(B=>B.id===g.category))==null?void 0:W.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:g.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:g.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>Y(g),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:E===g.id?l.jsxs(l.Fragment,{children:[l.jsx(md,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(yd,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:g.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:g.dimension})]})]}),g.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:g.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:g.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(Js,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:g.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Ks,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:g.enginePreset.type}),g.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:g.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:g.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),u==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Js,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),u==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(Ks,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(r2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(vd,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(fl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(xd,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Kh,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},L2=({params:p,onToggleProbe:s,onToggleMacro:d})=>{if(!p.probeActive)return null;const u=Math.sqrt((p.camPosX??0)**2+(p.camPosY??0)**2+(p.camPosZ??0)**2),v=Math.max(.001,u/(p.zoom||3)).toFixed(4),b=p.slicePlane?((.5-p.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:p.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(xd,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[v," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(p.camPosX??0).toFixed(2)," Y:",(p.camPosY??0).toFixed(2)," Z:",(p.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[p.sliceAxis||"golden"," (",b,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:p.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[p.octaveLayers||2,"L · k=",p.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:d,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${p.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:p.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(fl,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",p.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",p.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",p.phiMultiplier.toFixed(5)]})]})]})},sd=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:bi,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:vd,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:fl,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:Ph,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:Fh,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:fd,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:Hh,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],G2=({currentSpecimen:p,historyQueue:s,currentIndex:d,onSelectSpecimen:u,onNext:v,onPrev:b,renderStyle:x,onSelectRenderStyle:A,scrollMode:N,onToggleScrollMode:g,isOpen:F,onToggleOpen:E})=>{const L=k.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${F?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(i2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:g,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${N==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:N==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:N==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(gd,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(z2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",sd.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:sd.map(U=>{const Y=U.icon,J=x===U.id;return l.jsxs("button",{id:`select-render-style-${U.id}-btn`,onClick:()=>A(U.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${J?U.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:U.desc,children:[l.jsx(Y,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:U.shortLabel})]},U.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:b,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(Rh,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:v,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx(jh,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:L,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((U,Y)=>{const J=U.id===(p==null?void 0:p.id)||Y===d;return l.jsxs("button",{id:`feed-item-${Y}-btn`,onClick:()=>u(U),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${J?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",U.generation||Y+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:U.name})]}),J&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:U.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[U.type," + ",U.hybridType||U.type]})]})]},U.id||Y)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:N==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})};function cd(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class H2{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,d="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(d);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const u=window.AudioContext||window.webkitAudioContext;this.ctx=new u,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=d,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(u){console.warn("AudioContext initialization deferred or unavailable",u)}}getChordFrequenciesForFamily(s,d,u){const v=1.61803398875,b=u?Ar(u):0,A=b*137.507764%50-25,N=Math.pow(2,A/1200);if(s==="sacred")return[{ratio:.5*N,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*N,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:v*N,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5*N,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:v*v*.5*N,wave:b%2===0?"triangle":"sine",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5*N,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1*N,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5*N,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2*N,wave:b%3===0?"sawtooth":"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5*N,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75*N,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*N,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25*N,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2)*N,wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:v*1.2*N,wave:b%2===0?"sine":"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const g=1.1413470000000001,F=1+21.022/100,E=1+25.0108/100;return[{ratio:.5*N,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*N,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:g*N,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:F*N,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:E*N,wave:b%2===0?"triangle":"sine",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5*N,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*N,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382*N,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618*N,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5*N,wave:b%3===0?"square":"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,d){if(!this.ctx||!this.globalFilter)return;const u=cd(s),v=d?cd(d):u,b=108,x=this.ctx.currentTime,A=[...this.voices];this.voices=[],A.forEach(F=>{try{F.gain.gain.cancelScheduledValues(x),F.gain.gain.setValueAtTime(F.gain.gain.value,x),F.gain.gain.exponentialRampToValueAtTime(1e-4,x+.35),setTimeout(()=>{var E;try{F.osc.stop(),F.osc.disconnect(),F.filter.disconnect(),(E=F.panner)==null||E.disconnect(),F.gain.disconnect()}catch{}},380)}catch{}});const g=this.getChordFrequenciesForFamily(u,this.tuningMode,s).map((F,E)=>{const L=this.ctx.createOscillator(),U=this.ctx.createGain(),Y=this.ctx.createBiquadFilter(),J=(E%2===0?.618:-.618)*.5,W=b*F.ratio+J;L.type=F.wave,L.frequency.setValueAtTime(W,x),U.gain.setValueAtTime(1e-4,x),U.gain.exponentialRampToValueAtTime(F.vol,x+1.2),Y.type="lowpass",Y.frequency.setValueAtTime(450+E*80,x),Y.Q.setValueAtTime(1.2,x),L.connect(Y);let B=Y,ce;return this.ctx.createStereoPanner&&(ce=this.ctx.createStereoPanner(),ce.pan.setValueAtTime(F.pan,x),Y.connect(ce),B=ce),B.connect(U),U.connect(this.globalFilter),L.start(x),{osc:L,gain:U,filter:Y,panner:ce,baseFreqRatio:F.ratio,role:F.role}});if(d&&d!==s){const F=this.getChordFrequenciesForFamily(v,this.tuningMode,d),E=F[2]||F[1],L=this.ctx.createOscillator(),U=this.ctx.createGain(),Y=this.ctx.createBiquadFilter();L.type="sine",L.frequency.setValueAtTime(b*E.ratio,x);const J=Math.max(1e-4,this.currentHybridBlend*.22);U.gain.setValueAtTime(1e-4,x),U.gain.exponentialRampToValueAtTime(J,x+1.5),Y.type="bandpass",Y.frequency.setValueAtTime(b*E.ratio*1.5,x),Y.Q.setValueAtTime(2,x),L.connect(Y);let W=Y,B;this.ctx.createStereoPanner&&(B=this.ctx.createStereoPanner(),B.pan.setValueAtTime(.45,x),Y.connect(B),W=B),W.connect(U),U.connect(this.globalFilter),L.start(x),g.push({osc:L,gain:U,filter:Y,panner:B,baseFreqRatio:E.ratio,role:"hybrid"})}this.voices=g}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const d=this.ctx.currentTime,u=s.phiMultiplier||1.618034,v=Math.max(.08,Math.min(16,s.zoom||3)),b=Math.max(.1,Math.min(2,s.morphSpeed||.45)),x=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=x,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const A=Math.max(260,Math.min(980,380+(4-Math.min(v,4))*80+b*120));this.globalFilter.frequency.setTargetAtTime(A,d,.15);const N=Math.max(54,Math.min(240,108/Math.max(.5,v*.6)));this.cavityResonator.frequency.setTargetAtTime(N,d,.2);const g=108,F=(u-1.618034)*80,E=Math.sin(s.rotX||0)*.4;this.voices.forEach((L,U)=>{const Y=g*L.baseFreqRatio,J=L.role==="golden"||L.role==="shimmer"?F:F*.3;if(L.osc.frequency.setTargetAtTime(Y+J,d,.15),L.panner){const W=U%2===0?.25:-.25,B=Math.max(-.85,Math.min(.85,W+E));L.panner.pan.setTargetAtTime(B,d,.12)}if(L.role==="hybrid"){const W=Math.max(1e-4,x*.2);L.gain.gain.setTargetAtTime(W,d,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,d=216;[d*1,d*1.25,d*1.5,d*(1.618034*1.25)].forEach((v,b)=>{if(!this.ctx)return;const x=this.ctx.createOscillator(),A=this.ctx.createGain(),N=this.ctx.createBiquadFilter();x.type="sine",x.frequency.setValueAtTime(v,s+b*.05),N.type="lowpass",N.frequency.setValueAtTime(950,s),A.gain.setValueAtTime(1e-4,s+b*.05),A.gain.exponentialRampToValueAtTime(.05/(b+1),s+b*.05+.08),A.gain.exponentialRampToValueAtTime(1e-5,s+b*.05+2.8),x.onended=()=>{try{x.disconnect(),N.disconnect(),A.disconnect()}catch{}},x.connect(N),N.connect(A),A.connect(this.globalFilter),x.start(s+b*.05),x.stop(s+b*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const d=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(d,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const d=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var u,v,b,x,A;this.stopTimeout=null,d.forEach(N=>{var g;try{N.osc.stop(),N.osc.disconnect(),N.filter.disconnect(),(g=N.panner)==null||g.disconnect(),N.gain.disconnect()}catch{}});try{(u=this.globalFilter)==null||u.disconnect(),(v=this.cavityResonator)==null||v.disconnect(),(b=this.compressor)==null||b.disconnect(),(x=this.masterGain)==null||x.disconnect(),(A=this.ctx)==null||A.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const pa=new H2,Y2={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:20,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function P2(){const[p]=k.useState(()=>new C2),[s,d]=k.useState(Y2),[u,v]=k.useState(null),[b,x]=k.useState(65),[A,N]=k.useState(!1),[g,F]=k.useState(!1),[E,L]=k.useState("idle"),U=k.useRef(null),Y=k.useRef(0),[J,W]=k.useState("auto"),[B,ce]=k.useState(!1),[_,P]=k.useState(!1),[me,Ne]=k.useState(!1),[te,Re]=k.useState(!1),[qe,Fe]=k.useState(!1),[Pe,Le]=k.useState(!1),[$e,Ie]=k.useState("feed"),[K,D]=k.useState(!1),[q,T]=k.useState([]),[V,ee]=k.useState(new Set),m=k.useCallback(()=>{},[]),[C,G]=k.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),X=k.useCallback(H=>{v(H),x(H.affinityScore);const ue=(p==null?void 0:p.suggestRenderStyle())||"solid";d($=>({...$,type:H.type,hybridType:H.hybridType,tertiaryType:H.tertiaryType,compositeOp:H.compositeOp,hybridBlend:H.hybridBlend,tertiaryBlend:H.tertiaryBlend,smoothK:H.smoothK,warpStrength:H.warpStrength,octaveLayers:H.octaveLayers,boxFold:H.boxFold,sphereFold:H.sphereFold,interiorCut:H.interiorCut,paletteId:H.palette.id,customPalette:H.palette,iterations:H.iterations,phiMultiplier:H.phiMultiplier,morphSpeed:H.morphSpeed,glowIntensity:H.glowIntensity,zoom:H.zoom,renderStyle:ue})),pa.getActive()&&pa.playSpecimenTransitionChord()},[]);k.useEffect(()=>{if(!p)return;const H=window.location.hash.slice(1);if(H){const $=new URLSearchParams(H),ke=$.get("type"),ot=$.get("hybrid"),sn=$.get("tertiary"),Cn=$.get("op");if(ke){const Ea=ka.find(ge=>ge.id===$.get("palette"))||ka[0],it={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:$.get("name")||`Фрактал ${ke}`,type:ke,hybridType:ot||ke,tertiaryType:sn||"riemannZeta",compositeOp:Cn||"smoothUnion",hybridBlend:parseFloat($.get("blend")||"0.35"),tertiaryBlend:parseFloat($.get("tertiaryBlend")||"0.2"),smoothK:parseFloat($.get("smoothK")||"0.35"),warpStrength:parseFloat($.get("warp")||"0.25"),octaveLayers:parseInt($.get("octaves")||"2"),boxFold:parseFloat($.get("boxFold")||"1.2"),sphereFold:parseFloat($.get("sphereFold")||"0.65"),interiorCut:parseFloat($.get("interiorCut")||"0.0"),palette:Ea,iterations:parseInt($.get("iterations")||"20"),phiMultiplier:parseFloat($.get("phi")||"1.61803398875"),morphSpeed:parseFloat($.get("morphSpeed")||"0.45"),glowIntensity:parseFloat($.get("glow")||"1.1"),zoom:parseFloat($.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};X(it),d(ge=>({...ge,paletteSeed:parseInt($.get("paletteSeed")||"0"),paletteRotation:$.get("paletteRotation")==="1",renderStyle:$.get("renderStyle")||ge.renderStyle,cameraMode:$.get("cameraMode")||ge.cameraMode,camPosX:parseFloat($.get("camX")||"0"),camPosY:parseFloat($.get("camY")||"0"),camPosZ:parseFloat($.get("camZ")||"-3.2"),headlampPower:parseFloat($.get("headlamp")||"0"),volumetricFog:parseFloat($.get("fog")||"0.4"),slicePlane:parseFloat($.get("slicePlane")||"0"),sliceAxis:$.get("sliceAxis")||"golden",enableAudio:$.get("audio")==="1",audioVolume:parseFloat($.get("audioVol")||"0.65"),audioTuning:$.get("audioTuning")||"phi432",drsEnabled:$.get("drs")!=="0"})),window.history.replaceState(null,"",window.location.pathname);return}}const ue=p.breedNextSpecimen();X(ue)},[p,X]),k.useEffect(()=>(s.enableAudio?pa.start(s.audioVolume??.65,s.audioTuning??"phi432"):pa.stop(),()=>{pa.stop()}),[s.enableAudio]),k.useEffect(()=>{s.enableAudio&&(s.audioTuning&&pa.setTuning(s.audioTuning),s.audioVolume!==void 0&&pa.setVolume(s.audioVolume),pa.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),k.useEffect(()=>{const H=setInterval(()=>{if(p&&u){const ue=p.registerEngagement(1,0,0,u);x($=>$===ue?$:ue)}},1200);return()=>clearInterval(H)},[p,u]);const ne=k.useCallback((H,ue)=>{if(!p||!u)return;const $=H>0?"zooming":ue>0?"orbiting":"idle";L(ot=>ot!==$?$:ot),U.current&&clearTimeout(U.current),U.current=setTimeout(()=>{L(ot=>ot!=="idle"?"idle":ot)},1200);const ke=p.registerEngagement(.1,H,ue,u);x(ot=>ot===ke?ot:ke)},[p,u]),le=k.useCallback(()=>{if(!p)return;const H=performance.now();if(H-Y.current<180)return;Y.current=H;const ue=p.stepHistory(1);X(ue)},[p,X]),pe=k.useCallback(()=>{if(!p)return;const H=performance.now();if(H-Y.current<180)return;Y.current=H;const ue=p.stepHistory(-1);X(ue)},[p,X]),Ve=k.useCallback(()=>{if(!p||!u)return;p.boostAffinity(u),x(100);const H=u.id;ee(ue=>{const $=new Set(ue);return $.has(H)?($.delete(H),T(ke=>ke.filter(ot=>ot.id!==H))):($.add(H),T(ke=>[...ke,u])),$})},[p,u]),_e=k.useCallback(H=>{X(H)},[X]),aa=k.useCallback(H=>{ee(ue=>{const $=new Set(ue);return $.delete(H),$}),T(ue=>ue.filter($=>$.id!==H))},[]),na=k.useCallback(H=>{if(!p)return;const ue=p.breedNextSpecimen(H);X(ue)},[p,X]),Xe=k.useCallback(()=>{if(!p)return;const H={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((u==null?void 0:u.generation)||1)+1,name:`Фенотип Инженера #${((u==null?void 0:u.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||ka.find(ue=>ue.id===s.paletteId)||ka[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};v(H),p.boostAffinity(H),pa.getActive()&&pa.playSpecimenTransitionChord()},[p,s,u]),Oa=k.useCallback(()=>{d(H=>({...H,enableAudio:!H.enableAudio}))},[]),At=k.useCallback(H=>{ce(!1);const ue=document.createElement("a");ue.download=`golden-ratio-fractal-${s.type}-${(u==null?void 0:u.generation)||1}.png`,ue.href=H,ue.click()},[s.type,u==null?void 0:u.generation]),Jt=k.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(rh,{params:s,onParamsChange:d,onTelemetryUpdate:G,screenshotRequested:B,onScreenshotCaptured:At,forcedBackend:J,onInteraction:ne,onNextSpecimen:le,onPrevSpecimen:pe,onEngineReady:()=>Re(!0),scrollMode:$e}),l.jsx(G2,{currentSpecimen:u,historyQueue:p.getHistory(),currentIndex:p.getCurrentIndex(),onSelectSpecimen:X,onNext:le,onPrev:pe,renderStyle:s.renderStyle,onSelectRenderStyle:H=>d(ue=>({...ue,renderStyle:H})),scrollMode:$e,onToggleScrollMode:()=>Ie(H=>H==="feed"?"zoom":"feed"),isOpen:K,onToggleOpen:()=>D(H=>!H)}),l.jsx(O2,{specimen:u,resonanceScore:b,isInteracting:E!=="idle",interactionType:E,onNext:le,onPrev:pe,onFavorite:Ve,onOpenProfile:()=>F(!0),enableAudio:s.enableAudio,onToggleAudio:Oa,onOpenResearchModal:()=>P(!0),onOpenAtlas:()=>Ne(!0),isFeedOpen:K,onToggleFeed:()=>D(H=>!H),isCurrentLiked:u?V.has(u.id):!1,params:s}),l.jsx(L2,{params:s,onToggleProbe:()=>d(H=>({...H,probeActive:!H.probeActive})),onToggleMacro:()=>d(H=>({...H,macroMode:!H.macroMode}))}),l.jsx(q2,{isOpen:g,onClose:()=>F(!1),tasteProfile:p.getTasteProfile(),archetypeBreakdown:p.getArchetypeBreakdown(),currentSpecimen:u,resonanceScore:b,isEngineerMode:A,onToggleEngineerMode:()=>N(H=>!H),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:H=>d(ue=>({...ue,audioTuning:H})),onOpenManifest:()=>{F(!1),Fe(!0)},likedSpecimens:q,onPlayLiked:_e,onRemoveLike:aa,isCurrentLiked:u?V.has(u.id):!1}),A&&l.jsxs(l.Fragment,{children:[l.jsx(S2,{telemetry:C,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),l.jsx(R2,{params:s,onParamsChange:d,onSelectFractalType:na,onCaptureScreenshot:()=>ce(!0),onToggleFullscreen:Jt,onToggleInfoModal:()=>P(!0),onOpenAtlasModal:()=>Ne(!0),activeBackend:C.backend,forcedBackend:J,onSelectBackend:W,onClose:()=>N(!1),tasteProfile:p.getTasteProfile(),onSaveToFeed:Xe})]}),l.jsx(E2,{isOpen:_,onClose:()=>P(!1)}),l.jsx(B2,{isOpen:me,onClose:()=>Ne(!1),onApplyPreset:H=>{d(ue=>({...ue,...H}))}}),l.jsx(U2,{isOpen:qe,onClose:()=>Fe(!1),isFirstVisit:Pe,onOpenAtlas:()=>Ne(!0)}),l.jsx(F2,{isReady:te,onFinished:m})]})}const ud=document.getElementById("root");ud&&Vm.createRoot(ud).render(l.jsx(P2,{}));
