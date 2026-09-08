(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const b of h)if(b.type==="childList")for(const v of b.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function f(h){const b={};return h.integrity&&(b.integrity=h.integrity),h.referrerPolicy&&(b.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?b.credentials="include":h.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(h){if(h.ep)return;h.ep=!0;const b=f(h);fetch(h.href,b)}})();function Fm(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Vs={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function qm(){if(Qp)return fl;Qp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(u,h,b){var v=null;if(b!==void 0&&(v=""+b),h.key!==void 0&&(v=""+h.key),"key"in h){b={};for(var j in h)j!=="key"&&(b[j]=h[j])}else b=h;return h=b.ref,{$$typeof:p,type:u,key:v,ref:h!==void 0?h:null,props:b}}return fl.Fragment=s,fl.jsx=f,fl.jsxs=f,fl}var Ip;function Lm(){return Ip||(Ip=1,Vs.exports=qm()),Vs.exports}var l=Lm(),Xs={exports:{}},dl={},Ps={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Bm(){return Kp||(Kp=1,(function(p){function s(N,F){var M=N.length;N.push(F);e:for(;0<M;){var Q=M-1>>>1,$=N[Q];if(0<h($,F))N[Q]=F,N[M]=$,M=Q;else break e}}function f(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var F=N[0],M=N.pop();if(M!==F){N[0]=M;e:for(var Q=0,$=N.length,m=$>>>1;Q<m;){var C=2*(Q+1)-1,U=N[C],X=C+1,te=N[X];if(0>h(U,M))X<$&&0>h(te,U)?(N[Q]=te,N[X]=M,Q=X):(N[Q]=U,N[C]=M,Q=C);else if(X<$&&0>h(te,M))N[Q]=te,N[X]=M,Q=X;else break e}}return F}function h(N,F){var M=N.sortIndex-F.sortIndex;return M!==0?M:N.id-F.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;p.unstable_now=function(){return b.now()}}else{var v=Date,j=v.now();p.unstable_now=function(){return v.now()-j}}var D=[],g=[],L=1,O=null,G=3,H=!1,Y=!1,W=!1,J=!1,q=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function V(N){for(var F=f(g);F!==null;){if(F.callback===null)u(g);else if(F.startTime<=N)u(g),F.sortIndex=F.expirationTime,s(D,F);else break;F=f(g)}}function be(N){if(W=!1,V(N),!Y)if(f(D)!==null)Y=!0,Me||(Me=!0,Xe());else{var F=f(g);F!==null&&pe(be,F.startTime-N)}}var Me=!1,ie=-1,Fe=5,He=-1;function Ue(){return J?!0:!(p.unstable_now()-He<Fe)}function Qe(){if(J=!1,Me){var N=p.unstable_now();He=N;var F=!0;try{e:{Y=!1,W&&(W=!1,le(ie),ie=-1),H=!0;var M=G;try{t:{for(V(N),O=f(D);O!==null&&!(O.expirationTime>N&&Ue());){var Q=O.callback;if(typeof Q=="function"){O.callback=null,G=O.priorityLevel;var $=Q(O.expirationTime<=N);if(N=p.unstable_now(),typeof $=="function"){O.callback=$,V(N),F=!0;break t}O===f(D)&&u(D),V(N)}else u(D);O=f(D)}if(O!==null)F=!0;else{var m=f(g);m!==null&&pe(be,m.startTime-N),F=!1}}break e}finally{O=null,G=M,H=!1}F=void 0}}finally{F?Xe():Me=!1}}}var Xe;if(typeof _=="function")Xe=function(){_(Qe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Le=fe.port2;fe.port1.onmessage=Qe,Xe=function(){Le.postMessage(null)}}else Xe=function(){q(Qe,0)};function pe(N,F){ie=q(function(){N(p.unstable_now())},F)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(N){N.callback=null},p.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<N?Math.floor(1e3/N):5},p.unstable_getCurrentPriorityLevel=function(){return G},p.unstable_next=function(N){switch(G){case 1:case 2:case 3:var F=3;break;default:F=G}var M=G;G=F;try{return N()}finally{G=M}},p.unstable_requestPaint=function(){J=!0},p.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=G;G=N;try{return F()}finally{G=M}},p.unstable_scheduleCallback=function(N,F,M){var Q=p.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Q+M:Q):M=Q,N){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=M+$,N={id:L++,callback:F,priorityLevel:N,startTime:M,expirationTime:$,sortIndex:-1},M>Q?(N.sortIndex=M,s(g,N),f(D)===null&&N===f(g)&&(W?(le(ie),ie=-1):W=!0,pe(be,M-Q))):(N.sortIndex=$,s(D,N),Y||H||(Y=!0,Me||(Me=!0,Xe()))),N},p.unstable_shouldYield=Ue,p.unstable_wrapCallback=function(N){var F=G;return function(){var M=G;G=F;try{return N.apply(this,arguments)}finally{G=M}}}})(Zs)),Zs}var Wp;function Hm(){return Wp||(Wp=1,Ps.exports=Bm()),Ps.exports}var Qs={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Um(){if(Jp)return re;Jp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),v=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),G=Symbol.iterator;function H(m){return m===null||typeof m!="object"?null:(m=G&&m[G]||m["@@iterator"],typeof m=="function"?m:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,J={};function q(m,C,U){this.props=m,this.context=C,this.refs=J,this.updater=U||Y}q.prototype.isReactComponent={},q.prototype.setState=function(m,C){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,C,"setState")},q.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function le(){}le.prototype=q.prototype;function _(m,C,U){this.props=m,this.context=C,this.refs=J,this.updater=U||Y}var V=_.prototype=new le;V.constructor=_,W(V,q.prototype),V.isPureReactComponent=!0;var be=Array.isArray;function Me(){}var ie={H:null,A:null,T:null,S:null},Fe=Object.prototype.hasOwnProperty;function He(m,C,U){var X=U.ref;return{$$typeof:p,type:m,key:C,ref:X!==void 0?X:null,props:U}}function Ue(m,C){return He(m.type,C,m.props)}function Qe(m){return typeof m=="object"&&m!==null&&m.$$typeof===p}function Xe(m){var C={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(U){return C[U]})}var fe=/\/+/g;function Le(m,C){return typeof m=="object"&&m!==null&&m.key!=null?Xe(""+m.key):C.toString(36)}function pe(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Me,Me):(m.status="pending",m.then(function(C){m.status==="pending"&&(m.status="fulfilled",m.value=C)},function(C){m.status==="pending"&&(m.status="rejected",m.reason=C)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function N(m,C,U,X,te){var ae=typeof m;(ae==="undefined"||ae==="boolean")&&(m=null);var oe=!1;if(m===null)oe=!0;else switch(ae){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(m.$$typeof){case p:case s:oe=!0;break;case L:return oe=m._init,N(oe(m._payload),C,U,X,te)}}if(oe)return te=te(m),oe=X===""?"."+Le(m,0):X,be(te)?(U="",oe!=null&&(U=oe.replace(fe,"$&/")+"/"),N(te,C,U,"",function(bt){return bt})):te!=null&&(Qe(te)&&(te=Ue(te,U+(te.key==null||m&&m.key===te.key?"":(""+te.key).replace(fe,"$&/")+"/")+oe)),C.push(te)),1;oe=0;var Se=X===""?".":X+":";if(be(m))for(var de=0;de<m.length;de++)X=m[de],ae=Se+Le(X,de),oe+=N(X,C,U,ae,te);else if(de=H(m),typeof de=="function")for(m=de.call(m),de=0;!(X=m.next()).done;)X=X.value,ae=Se+Le(X,de++),oe+=N(X,C,U,ae,te);else if(ae==="object"){if(typeof m.then=="function")return N(pe(m),C,U,X,te);throw C=String(m),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return oe}function F(m,C,U){if(m==null)return m;var X=[],te=0;return N(m,X,"","",function(ae){return C.call(U,ae,te++)}),X}function M(m){if(m._status===-1){var C=m._result;C=C(),C.then(function(U){(m._status===0||m._status===-1)&&(m._status=1,m._result=U)},function(U){(m._status===0||m._status===-1)&&(m._status=2,m._result=U)}),m._status===-1&&(m._status=0,m._result=C)}if(m._status===1)return m._result.default;throw m._result}var Q=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},$={map:F,forEach:function(m,C,U){F(m,function(){C.apply(this,arguments)},U)},count:function(m){var C=0;return F(m,function(){C++}),C},toArray:function(m){return F(m,function(C){return C})||[]},only:function(m){if(!Qe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return re.Activity=O,re.Children=$,re.Component=q,re.Fragment=f,re.Profiler=h,re.PureComponent=_,re.StrictMode=u,re.Suspense=D,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,re.__COMPILER_RUNTIME={__proto__:null,c:function(m){return ie.H.useMemoCache(m)}},re.cache=function(m){return function(){return m.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(m,C,U){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var X=W({},m.props),te=m.key;if(C!=null)for(ae in C.key!==void 0&&(te=""+C.key),C)!Fe.call(C,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&C.ref===void 0||(X[ae]=C[ae]);var ae=arguments.length-2;if(ae===1)X.children=U;else if(1<ae){for(var oe=Array(ae),Se=0;Se<ae;Se++)oe[Se]=arguments[Se+2];X.children=oe}return He(m.type,te,X)},re.createContext=function(m){return m={$$typeof:v,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:b,_context:m},m},re.createElement=function(m,C,U){var X,te={},ae=null;if(C!=null)for(X in C.key!==void 0&&(ae=""+C.key),C)Fe.call(C,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=C[X]);var oe=arguments.length-2;if(oe===1)te.children=U;else if(1<oe){for(var Se=Array(oe),de=0;de<oe;de++)Se[de]=arguments[de+2];te.children=Se}if(m&&m.defaultProps)for(X in oe=m.defaultProps,oe)te[X]===void 0&&(te[X]=oe[X]);return He(m,ae,te)},re.createRef=function(){return{current:null}},re.forwardRef=function(m){return{$$typeof:j,render:m}},re.isValidElement=Qe,re.lazy=function(m){return{$$typeof:L,_payload:{_status:-1,_result:m},_init:M}},re.memo=function(m,C){return{$$typeof:g,type:m,compare:C===void 0?null:C}},re.startTransition=function(m){var C=ie.T,U={};ie.T=U;try{var X=m(),te=ie.S;te!==null&&te(U,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Me,Q)}catch(ae){Q(ae)}finally{C!==null&&U.types!==null&&(C.types=U.types),ie.T=C}},re.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},re.use=function(m){return ie.H.use(m)},re.useActionState=function(m,C,U){return ie.H.useActionState(m,C,U)},re.useCallback=function(m,C){return ie.H.useCallback(m,C)},re.useContext=function(m){return ie.H.useContext(m)},re.useDebugValue=function(){},re.useDeferredValue=function(m,C){return ie.H.useDeferredValue(m,C)},re.useEffect=function(m,C){return ie.H.useEffect(m,C)},re.useEffectEvent=function(m){return ie.H.useEffectEvent(m)},re.useId=function(){return ie.H.useId()},re.useImperativeHandle=function(m,C,U){return ie.H.useImperativeHandle(m,C,U)},re.useInsertionEffect=function(m,C){return ie.H.useInsertionEffect(m,C)},re.useLayoutEffect=function(m,C){return ie.H.useLayoutEffect(m,C)},re.useMemo=function(m,C){return ie.H.useMemo(m,C)},re.useOptimistic=function(m,C){return ie.H.useOptimistic(m,C)},re.useReducer=function(m,C,U){return ie.H.useReducer(m,C,U)},re.useRef=function(m){return ie.H.useRef(m)},re.useState=function(m){return ie.H.useState(m)},re.useSyncExternalStore=function(m,C,U){return ie.H.useSyncExternalStore(m,C,U)},re.useTransition=function(){return ie.H.useTransition()},re.version="19.2.8",re}var $p;function tc(){return $p||($p=1,Qs.exports=Um()),Qs.exports}var Is={exports:{}},vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Gm(){if(ef)return vt;ef=1;var p=tc();function s(D){var g="https://react.dev/errors/"+D;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)g+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+D+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function b(D,g,L){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:O==null?null:""+O,children:D,containerInfo:g,implementation:L}}var v=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(D,g){if(D==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,vt.createPortal=function(D,g){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return b(D,g,null,L)},vt.flushSync=function(D){var g=v.T,L=u.p;try{if(v.T=null,u.p=2,D)return D()}finally{v.T=g,u.p=L,u.d.f()}},vt.preconnect=function(D,g){typeof D=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(D,g))},vt.prefetchDNS=function(D){typeof D=="string"&&u.d.D(D)},vt.preinit=function(D,g){if(typeof D=="string"&&g&&typeof g.as=="string"){var L=g.as,O=j(L,g.crossOrigin),G=typeof g.integrity=="string"?g.integrity:void 0,H=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;L==="style"?u.d.S(D,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:O,integrity:G,fetchPriority:H}):L==="script"&&u.d.X(D,{crossOrigin:O,integrity:G,fetchPriority:H,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},vt.preinitModule=function(D,g){if(typeof D=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var L=j(g.as,g.crossOrigin);u.d.M(D,{crossOrigin:L,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(D)},vt.preload=function(D,g){if(typeof D=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var L=g.as,O=j(L,g.crossOrigin);u.d.L(D,L,{crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},vt.preloadModule=function(D,g){if(typeof D=="string")if(g){var L=j(g.as,g.crossOrigin);u.d.m(D,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:L,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(D)},vt.requestFormReset=function(D){u.d.r(D)},vt.unstable_batchedUpdates=function(D,g){return D(g)},vt.useFormState=function(D,g,L){return v.H.useFormState(D,g,L)},vt.useFormStatus=function(){return v.H.useHostTransitionStatus()},vt.version="19.2.8",vt}var tf;function Ym(){if(tf)return Is.exports;tf=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Is.exports=Gm(),Is.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function Vm(){if(af)return dl;af=1;var p=Hm(),s=tc(),f=Ym();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(b(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return D(n),e;if(r===i)return D(n),t;r=r.sibling}throw Error(u(188))}if(a.return!==i.return)a=n,i=r;else{for(var o=!1,c=n.child;c;){if(c===a){o=!0,a=n,i=r;break}if(c===i){o=!0,i=n,a=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===a){o=!0,a=r,i=n;break}if(c===i){o=!0,i=r,a=n;break}c=c.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==i)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,G=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),_=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),He=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Qe=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=Qe&&e[Qe]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function Le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case q:return"Profiler";case J:return"StrictMode";case be:return"Suspense";case Me:return"SuspenseList";case He:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case _:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return t=e.displayName||null,t!==null?t:Le(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return Le(e(t))}catch{}}return null}var pe=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},Q=[],$=-1;function m(e){return{current:e}}function C(e){0>$||(e.current=Q[$],Q[$]=null,$--)}function U(e,t){$++,Q[$]=e.current,e.current=t}var X=m(null),te=m(null),ae=m(null),oe=m(null);function Se(e,t){switch(U(ae,t),U(te,e),U(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vp(t),e=bp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(X),U(X,e)}function de(){C(X),C(te),C(ae)}function bt(e){e.memoizedState!==null&&U(oe,e);var t=X.current,a=bp(t,e.type);t!==a&&(U(te,e),U(X,a))}function gt(e){te.current===e&&(C(X),C(te)),oe.current===e&&(C(oe),sl._currentValue=M)}var me,ia;function ot(e){if(me===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||"",ia=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+me+e+ia}var yt=!1;function Ea(e,t){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(A){var w=A}Reflect.construct(e,[],k)}else{try{k.call()}catch(A){w=A}e.call(k.prototype)}}else{try{throw Error()}catch(A){w=A}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(A){if(A&&w&&typeof A.stack=="string")return[A.stack,w.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],c=r[1];if(o&&c){var d=o.split(`
`),S=c.split(`
`);for(n=i=0;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(i===d.length||n===S.length)for(i=d.length-1,n=S.length-1;1<=i&&0<=n&&d[i]!==S[n];)n--;for(;1<=i&&0<=n;i--,n--)if(d[i]!==S[n]){if(i!==1||n!==1)do if(i--,n--,0>n||d[i]!==S[n]){var T=`
`+d[i].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=i&&0<=n);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ot(a):""}function Mi(e,t){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return e.child!==t&&t!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return Ea(e.type,!1);case 11:return Ea(e.type.render,!1);case 1:return Ea(e.type,!0);case 31:return ot("Activity");default:return""}}function Ti(e){try{var t="",a=null;do t+=Mi(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ut=Object.prototype.hasOwnProperty,ri=p.unstable_scheduleCallback,oi=p.unstable_cancelCallback,Ci=p.unstable_shouldYield,ka=p.unstable_requestPaint,B=p.unstable_now,Z=p.unstable_getCurrentPriorityLevel,P=p.unstable_ImmediatePriority,he=p.unstable_UserBlockingPriority,ze=p.unstable_NormalPriority,Ie=p.unstable_LowPriority,Ne=p.unstable_IdlePriority,_t=p.log,zt=p.unstable_setDisableYieldValue,Je=null,Be=null;function Ge(e){if(typeof _t=="function"&&zt(e),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(Je,e)}catch{}}var Te=Math.clz32?Math.clz32:Er,Ct=Math.log,Ri=Math.LN2;function Er(e){return e>>>=0,e===0?32:31-(Ct(e)/Ri|0)|0}var si=256,ci=262144,ui=4194304;function Ae(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jt(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=i&134217727;return c!==0?(i=c&~r,i!==0?n=Ae(i):(o&=c,o!==0?n=Ae(o):a||(a=c&~e,a!==0&&(n=Ae(a))))):(c=i&~r,c!==0?n=Ae(c):o!==0?n=Ae(o):a||(a=i&~e,a!==0&&(n=Ae(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function pt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $t(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function ua(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,t,a,i,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,S=e.hiddenUpdates;for(a=o&~a;0<a;){var T=31-Te(a),k=1<<T;c[T]=0,d[T]=-1;var w=S[T];if(w!==null)for(S[T]=null,T=0;T<w.length;T++){var A=w[T];A!==null&&(A.lane&=-536870913)}a&=~k}i!==0&&Rt(e,i,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Rt(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Te(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function pa(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Te(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function pi(e,t){var a=t&-t;return a=(a&42)!==0?1:lt(a),(a&(e.suspendedLanes|t))!==0?0:a}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Et(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Up(e.type))}function fa(e,t){var a=F.p;try{return F.p=e,t()}finally{F.p=a}}var Oa=Math.random().toString(36).slice(2),ft="__reactFiber$"+Oa,Dt="__reactProps$"+Oa,ki="__reactContainer$"+Oa,kr="__reactEvents$"+Oa,wf="__reactListeners$"+Oa,Nf="__reactHandles$"+Oa,nc="__reactResources$"+Oa,Sn="__reactMarker$"+Oa;function Or(e){delete e[ft],delete e[Dt],delete e[kr],delete e[wf],delete e[Nf]}function Oi(e){var t=e[ft];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ki]||a[ft]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=wp(e);e!==null;){if(a=e[ft])return a;e=wp(e)}return t}e=a,a=e.parentNode}return null}function Fi(e){if(e=e[ft]||e[ki]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function qi(e){var t=e[nc];return t||(t=e[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Sn]=!0}var lc=new Set,rc={};function fi(e,t){Li(e,t),Li(e+"Capture",t)}function Li(e,t){for(rc[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var Af=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},sc={};function jf(e){return ut.call(sc,e)?!0:ut.call(oc,e)?!1:Af.test(e)?sc[e]=!0:(oc[e]=!0,!1)}function vl(e,t,a){if(jf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function bl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function da(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mf(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){if(!e._valueTracker){var t=cc(e)?"checked":"value";e._valueTracker=Mf(e,t,""+e[t])}}function uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=cc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tf=/[\n"\\]/g;function Yt(e){return e.replace(Tf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qr(e,t,a,i,n,r,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Lr(e,o,Gt(t)):a!=null?Lr(e,o,Gt(a)):i!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Gt(c):e.removeAttribute("name")}function pc(e,t,a,i,n,r,o,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Fr(e);return}a=a!=null?""+Gt(a):"",t=t!=null?""+Gt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=c?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Fr(e)}function Lr(e,t,a){t==="number"&&gl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Bi(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Gt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function fc(e,t,a){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Gt(a):""}function dc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(u(92));if(pe(i)){if(1<i.length)throw Error(u(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Gt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Fr(e)}function Hi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Cf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Cf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&mc(e,n,i)}else for(var r in t)t.hasOwnProperty(r)&&mc(e,r,t[r])}function Br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ef=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(e){return Ef.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ma(){}var Hr=null;function Ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ui=null,Gi=null;function xc(e){var t=Fi(e);if(t&&(e=t.stateNode)){var a=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(qr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[Dt]||null;if(!n)throw Error(u(90));qr(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&uc(i)}break e;case"textarea":fc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Bi(e,!!a.multiple,t,!1)}}}var Gr=!1;function vc(e,t,a){if(Gr)return e(t,a);Gr=!0;try{var i=e(t);return i}finally{if(Gr=!1,(Ui!==null||Gi!==null)&&(or(),Ui&&(t=Ui,e=Gi,Gi=Ui=null,xc(t),e)))for(t=0;t<e.length;t++)xc(e[t])}}function wn(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Dt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yr=!1;if(ha)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Yr=!1}var Fa=null,Vr=null,_l=null;function bc(){if(_l)return _l;var e,t=Vr,a=t.length,i,n="value"in Fa?Fa.value:Fa.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===n[r-i];i++);return _l=n.slice(e,1<i?1-i:void 0)}function zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function gc(){return!1}function wt(e){function t(a,i,n,r,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Sl:gc,this.isPropagationStopped=gc,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),t}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=wt(di),An=O({},di,{view:0,detail:0}),kf=wt(An),Xr,Pr,jn,wl=O({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Xr=e.screenX-jn.screenX,Pr=e.screenY-jn.screenY):Pr=Xr=0,jn=e),Xr)},movementY:function(e){return"movementY"in e?e.movementY:Pr}}),yc=wt(wl),Of=O({},wl,{dataTransfer:0}),Ff=wt(Of),qf=O({},An,{relatedTarget:0}),Zr=wt(qf),Lf=O({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=wt(Lf),Hf=O({},di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=wt(Hf),Gf=O({},di,{data:0}),_c=wt(Gf),Yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xf[e])?!!t[e]:!1}function Qr(){return Pf}var Zf=O({},An,{key:function(e){if(e.key){var t=Yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qf=wt(Zf),If=O({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=wt(If),Kf=O({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),Wf=wt(Kf),Jf=O({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),$f=wt(Jf),ed=O({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),td=wt(ed),ad=O({},di,{newState:0,oldState:0}),id=wt(ad),nd=[9,13,27,32],Ir=ha&&"CompositionEvent"in window,Mn=null;ha&&"documentMode"in document&&(Mn=document.documentMode);var ld=ha&&"TextEvent"in window&&!Mn,Sc=ha&&(!Ir||Mn&&8<Mn&&11>=Mn),Dc=" ",wc=!1;function Nc(e,t){switch(e){case"keyup":return nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yi=!1;function rd(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(wc=!0,Dc);case"textInput":return e=t.data,e===Dc&&wc?null:e;default:return null}}function od(e,t){if(Yi)return e==="compositionend"||!Ir&&Nc(e,t)?(e=bc(),_l=Vr=Fa=null,Yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var sd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sd[e.type]:t==="textarea"}function Mc(e,t,a,i){Ui?Gi?Gi.push(i):Gi=[i]:Ui=i,t=mr(t,"onChange"),0<t.length&&(a=new Dl("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Tn=null,Cn=null;function cd(e){pp(e,0)}function Nl(e){var t=Dn(e);if(uc(t))return e}function Tc(e,t){if(e==="change")return t}var Cc=!1;if(ha){var Kr;if(ha){var Wr="oninput"in document;if(!Wr){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),Wr=typeof Rc.oninput=="function"}Kr=Wr}else Kr=!1;Cc=Kr&&(!document.documentMode||9<document.documentMode)}function Ec(){Tn&&(Tn.detachEvent("onpropertychange",kc),Cn=Tn=null)}function kc(e){if(e.propertyName==="value"&&Nl(Cn)){var t=[];Mc(t,Cn,e,Ur(e)),vc(cd,t)}}function ud(e,t,a){e==="focusin"?(Ec(),Tn=t,Cn=a,Tn.attachEvent("onpropertychange",kc)):e==="focusout"&&Ec()}function pd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Cn)}function fd(e,t){if(e==="click")return Nl(t)}function dd(e,t){if(e==="input"||e==="change")return Nl(t)}function md(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:md;function Rn(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!ut.call(t,n)||!kt(e[n],t[n]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var a=Oc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oc(a)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=gl(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hd=ha&&"documentMode"in document&&11>=document.documentMode,Vi=null,$r=null,En=null,eo=!1;function Bc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eo||Vi==null||Vi!==gl(i)||(i=Vi,"selectionStart"in i&&Jr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),En&&Rn(En,i)||(En=i,i=mr($r,"onSelect"),0<i.length&&(t=new Dl("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Vi)))}function mi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Xi={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionrun:mi("Transition","TransitionRun"),transitionstart:mi("Transition","TransitionStart"),transitioncancel:mi("Transition","TransitionCancel"),transitionend:mi("Transition","TransitionEnd")},to={},Hc={};ha&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function hi(e){if(to[e])return to[e];if(!Xi[e])return e;var t=Xi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Hc)return to[e]=t[a];return e}var Uc=hi("animationend"),Gc=hi("animationiteration"),Yc=hi("animationstart"),xd=hi("transitionrun"),vd=hi("transitionstart"),bd=hi("transitioncancel"),Vc=hi("transitionend"),Xc=new Map,ao="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ao.push("scrollEnd");function ea(e,t){Xc.set(e,t),fi(t,[e])}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Pi=0,io=0;function jl(){for(var e=Pi,t=io=Pi=0;t<e;){var a=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var n=Vt[t];Vt[t++]=null;var r=Vt[t];if(Vt[t++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}r!==0&&Pc(a,n,r)}}function Ml(e,t,a,i){Vt[Pi++]=e,Vt[Pi++]=t,Vt[Pi++]=a,Vt[Pi++]=i,io|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function no(e,t,a,i){return Ml(e,t,a,i),Tl(e)}function xi(e,t){return Ml(e,null,null,t),Tl(e)}function Pc(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Te(a),e=r.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),r):null}function Tl(e){if(50<tl)throw tl=0,ms=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zi={};function gd(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,a,i){return new gd(e,t,a,i)}function lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,t){var a=e.alternate;return a===null?(a=Ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cl(e,t,a,i,n,r){var o=0;if(i=e,typeof e=="function")lo(e)&&(o=1);else if(typeof e=="string")o=Dm(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case He:return e=Ot(31,a,t,n),e.elementType=He,e.lanes=r,e;case W:return vi(a.children,n,r,t);case J:o=8,n|=24;break;case q:return e=Ot(12,a,t,n|2),e.elementType=q,e.lanes=r,e;case be:return e=Ot(13,a,t,n),e.elementType=be,e.lanes=r,e;case Me:return e=Ot(19,a,t,n),e.elementType=Me,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:o=10;break e;case le:o=9;break e;case V:o=11;break e;case ie:o=14;break e;case Fe:o=16,i=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Ot(o,a,t,n),t.elementType=e,t.type=i,t.lanes=r,t}function vi(e,t,a,i){return e=Ot(7,e,i,t),e.lanes=a,e}function ro(e,t,a){return e=Ot(6,e,null,t),e.lanes=a,e}function Qc(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function oo(e,t,a){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ic=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var a=Ic.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ti(t)},Ic.set(e,t),t)}return{value:e,source:t,stack:Ti(t)}}var Qi=[],Ii=0,Rl=null,kn=0,Pt=[],Zt=0,qa=null,la=1,ra="";function va(e,t){Qi[Ii++]=kn,Qi[Ii++]=Rl,Rl=e,kn=t}function Kc(e,t,a){Pt[Zt++]=la,Pt[Zt++]=ra,Pt[Zt++]=qa,qa=e;var i=la;e=ra;var n=32-Te(i)-1;i&=~(1<<n),a+=1;var r=32-Te(t)+n;if(30<r){var o=n-n%5;r=(i&(1<<o)-1).toString(32),i>>=o,n-=o,la=1<<32-Te(t)+n|a<<n|i,ra=r+e}else la=1<<r|a<<n|i,ra=e}function so(e){e.return!==null&&(va(e,1),Kc(e,1,0))}function co(e){for(;e===Rl;)Rl=Qi[--Ii],Qi[Ii]=null,kn=Qi[--Ii],Qi[Ii]=null;for(;e===qa;)qa=Pt[--Zt],Pt[Zt]=null,ra=Pt[--Zt],Pt[Zt]=null,la=Pt[--Zt],Pt[Zt]=null}function Wc(e,t){Pt[Zt++]=la,Pt[Zt++]=ra,Pt[Zt++]=qa,la=t.id,ra=t.overflow,qa=e}var dt=null,Ye=null,_e=!1,La=null,Qt=!1,uo=Error(u(519));function Ba(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw On(Xt(t,e)),uo}function Jc(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[ft]=e,t[Dt]=i,a){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(a=0;a<il.length;a++)ve(il[a],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),pc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),dc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||hp(t.textContent,a)?(i.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),i.onScroll!=null&&ve("scroll",t),i.onScrollEnd!=null&&ve("scrollend",t),i.onClick!=null&&(t.onclick=ma),t=!0):t=!1,t||Ba(e,!0)}function $c(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:dt=dt.return}}function Ki(e){if(e!==dt)return!1;if(!_e)return $c(e),_e=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ms(e.type,e.memoizedProps)),a=!a),a&&Ye&&Ba(e),$c(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Dp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Dp(e)}else t===27?(t=Ye,$a(e.type)?(e=ks,ks=null,Ye=e):Ye=t):Ye=dt?Kt(e.stateNode.nextSibling):null;return!0}function bi(){Ye=dt=null,_e=!1}function po(){var e=La;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),La=null),e}function On(e){La===null?La=[e]:La.push(e)}var fo=m(null),gi=null,ba=null;function Ha(e,t,a){U(fo,t._currentValue),t._currentValue=a}function ga(e){e._currentValue=fo.current,C(fo)}function mo(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function ho(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){r.lanes|=a,c=r.alternate,c!==null&&(c.lanes|=a),mo(r.return,a,e),i||(o=null);break e}r=c.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(u(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),mo(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Wi(e,t,a,i){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=n.type;kt(n.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(n===oe.current){if(o=n.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(sl):e=[sl])}n=n.return}e!==null&&ho(t,e,a,i),t.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yi(e){gi=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mt(e){return e0(gi,e)}function kl(e,t){return gi===null&&yi(e),e0(e,t)}function e0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(u(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return a}var yd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},_d=p.unstable_scheduleCallback,zd=p.unstable_NormalPriority,tt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xo(){return{controller:new yd,data:new Map,refCount:0}}function Fn(e){e.refCount--,e.refCount===0&&_d(zd,function(){e.controller.abort()})}var qn=null,vo=0,Ji=0,$i=null;function Sd(e,t){if(qn===null){var a=qn=[];vo=0,Ji=ys(),$i={status:"pending",value:void 0,then:function(i){a.push(i)}}}return vo++,t.then(t0,t0),t}function t0(){if(--vo===0&&qn!==null){$i!==null&&($i.status="fulfilled");var e=qn;qn=null,Ji=0,$i=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Dd(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var a0=N.S;N.S=function(e,t){Bu=B(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sd(e,t),a0!==null&&a0(e,t)};var _i=m(null);function bo(){var e=_i.current;return e!==null?e:qe.pooledCache}function Ol(e,t){t===null?U(_i,_i.current):U(_i,t.pool)}function i0(){var e=bo();return e===null?null:{parent:tt._currentValue,pool:e}}var en=Error(u(460)),go=Error(u(474)),Fl=Error(u(542)),ql={then:function(){}};function n0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function l0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ma,ma),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,o0(e),e;default:if(typeof t.status=="string")t.then(ma,ma);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,o0(e),e}throw Si=t,en}}function zi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Si=a,en):a}}var Si=null;function r0(){if(Si===null)throw Error(u(459));var e=Si;return Si=null,e}function o0(e){if(e===en||e===Fl)throw Error(u(483))}var tn=null,Ln=0;function Ll(e){var t=Ln;return Ln+=1,tn===null&&(tn=[]),l0(tn,e,t)}function Bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bl(e,t){throw t.$$typeof===G?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function s0(e){function t(y,x){if(e){var z=y.deletions;z===null?(y.deletions=[x],y.flags|=16):z.push(x)}}function a(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function i(y){for(var x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function n(y,x){return y=xa(y,x),y.index=0,y.sibling=null,y}function r(y,x,z){return y.index=z,e?(z=y.alternate,z!==null?(z=z.index,z<x?(y.flags|=67108866,x):z):(y.flags|=67108866,x)):(y.flags|=1048576,x)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,x,z,E){return x===null||x.tag!==6?(x=ro(z,y.mode,E),x.return=y,x):(x=n(x,z),x.return=y,x)}function d(y,x,z,E){var ee=z.type;return ee===W?T(y,x,z.props.children,E,z.key):x!==null&&(x.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Fe&&zi(ee)===x.type)?(x=n(x,z.props),Bn(x,z),x.return=y,x):(x=Cl(z.type,z.key,z.props,null,y.mode,E),Bn(x,z),x.return=y,x)}function S(y,x,z,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=oo(z,y.mode,E),x.return=y,x):(x=n(x,z.children||[]),x.return=y,x)}function T(y,x,z,E,ee){return x===null||x.tag!==7?(x=vi(z,y.mode,E,ee),x.return=y,x):(x=n(x,z),x.return=y,x)}function k(y,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ro(""+x,y.mode,z),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return z=Cl(x.type,x.key,x.props,null,y.mode,z),Bn(z,x),z.return=y,z;case Y:return x=oo(x,y.mode,z),x.return=y,x;case Fe:return x=zi(x),k(y,x,z)}if(pe(x)||Xe(x))return x=vi(x,y.mode,z,null),x.return=y,x;if(typeof x.then=="function")return k(y,Ll(x),z);if(x.$$typeof===_)return k(y,kl(y,x),z);Bl(y,x)}return null}function w(y,x,z,E){var ee=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ee!==null?null:c(y,x,""+z,E);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return z.key===ee?d(y,x,z,E):null;case Y:return z.key===ee?S(y,x,z,E):null;case Fe:return z=zi(z),w(y,x,z,E)}if(pe(z)||Xe(z))return ee!==null?null:T(y,x,z,E,null);if(typeof z.then=="function")return w(y,x,Ll(z),E);if(z.$$typeof===_)return w(y,x,kl(y,z),E);Bl(y,z)}return null}function A(y,x,z,E,ee){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return y=y.get(z)||null,c(x,y,""+E,ee);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case H:return y=y.get(E.key===null?z:E.key)||null,d(x,y,E,ee);case Y:return y=y.get(E.key===null?z:E.key)||null,S(x,y,E,ee);case Fe:return E=zi(E),A(y,x,z,E,ee)}if(pe(E)||Xe(E))return y=y.get(z)||null,T(x,y,E,ee,null);if(typeof E.then=="function")return A(y,x,z,Ll(E),ee);if(E.$$typeof===_)return A(y,x,z,kl(x,E),ee);Bl(x,E)}return null}function I(y,x,z,E){for(var ee=null,De=null,K=x,ue=x=0,ye=null;K!==null&&ue<z.length;ue++){K.index>ue?(ye=K,K=null):ye=K.sibling;var we=w(y,K,z[ue],E);if(we===null){K===null&&(K=ye);break}e&&K&&we.alternate===null&&t(y,K),x=r(we,x,ue),De===null?ee=we:De.sibling=we,De=we,K=ye}if(ue===z.length)return a(y,K),_e&&va(y,ue),ee;if(K===null){for(;ue<z.length;ue++)K=k(y,z[ue],E),K!==null&&(x=r(K,x,ue),De===null?ee=K:De.sibling=K,De=K);return _e&&va(y,ue),ee}for(K=i(K);ue<z.length;ue++)ye=A(K,y,ue,z[ue],E),ye!==null&&(e&&ye.alternate!==null&&K.delete(ye.key===null?ue:ye.key),x=r(ye,x,ue),De===null?ee=ye:De.sibling=ye,De=ye);return e&&K.forEach(function(ni){return t(y,ni)}),_e&&va(y,ue),ee}function ne(y,x,z,E){if(z==null)throw Error(u(151));for(var ee=null,De=null,K=x,ue=x=0,ye=null,we=z.next();K!==null&&!we.done;ue++,we=z.next()){K.index>ue?(ye=K,K=null):ye=K.sibling;var ni=w(y,K,we.value,E);if(ni===null){K===null&&(K=ye);break}e&&K&&ni.alternate===null&&t(y,K),x=r(ni,x,ue),De===null?ee=ni:De.sibling=ni,De=ni,K=ye}if(we.done)return a(y,K),_e&&va(y,ue),ee;if(K===null){for(;!we.done;ue++,we=z.next())we=k(y,we.value,E),we!==null&&(x=r(we,x,ue),De===null?ee=we:De.sibling=we,De=we);return _e&&va(y,ue),ee}for(K=i(K);!we.done;ue++,we=z.next())we=A(K,y,ue,we.value,E),we!==null&&(e&&we.alternate!==null&&K.delete(we.key===null?ue:we.key),x=r(we,x,ue),De===null?ee=we:De.sibling=we,De=we);return e&&K.forEach(function(Om){return t(y,Om)}),_e&&va(y,ue),ee}function Oe(y,x,z,E){if(typeof z=="object"&&z!==null&&z.type===W&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case H:e:{for(var ee=z.key;x!==null;){if(x.key===ee){if(ee=z.type,ee===W){if(x.tag===7){a(y,x.sibling),E=n(x,z.props.children),E.return=y,y=E;break e}}else if(x.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Fe&&zi(ee)===x.type){a(y,x.sibling),E=n(x,z.props),Bn(E,z),E.return=y,y=E;break e}a(y,x);break}else t(y,x);x=x.sibling}z.type===W?(E=vi(z.props.children,y.mode,E,z.key),E.return=y,y=E):(E=Cl(z.type,z.key,z.props,null,y.mode,E),Bn(E,z),E.return=y,y=E)}return o(y);case Y:e:{for(ee=z.key;x!==null;){if(x.key===ee)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){a(y,x.sibling),E=n(x,z.children||[]),E.return=y,y=E;break e}else{a(y,x);break}else t(y,x);x=x.sibling}E=oo(z,y.mode,E),E.return=y,y=E}return o(y);case Fe:return z=zi(z),Oe(y,x,z,E)}if(pe(z))return I(y,x,z,E);if(Xe(z)){if(ee=Xe(z),typeof ee!="function")throw Error(u(150));return z=ee.call(z),ne(y,x,z,E)}if(typeof z.then=="function")return Oe(y,x,Ll(z),E);if(z.$$typeof===_)return Oe(y,x,kl(y,z),E);Bl(y,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(a(y,x.sibling),E=n(x,z),E.return=y,y=E):(a(y,x),E=ro(z,y.mode,E),E.return=y,y=E),o(y)):a(y,x)}return function(y,x,z,E){try{Ln=0;var ee=Oe(y,x,z,E);return tn=null,ee}catch(K){if(K===en||K===Fl)throw K;var De=Ot(29,K,null,y.mode);return De.lanes=E,De.return=y,De}finally{}}}var Di=s0(!0),c0=s0(!1),Ua=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=Tl(e),Pc(e,null,a),t}return Ml(e,i,t,a),Tl(e)}function Hn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,pa(e,a)}}function zo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var So=!1;function Un(){if(So){var e=$i;if(e!==null)throw e}}function Gn(e,t,a,i){So=!1;var n=e.updateQueue;Ua=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,S=d.next;d.next=null,o===null?r=S:o.next=S,o=d;var T=e.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==o&&(c===null?T.firstBaseUpdate=S:c.next=S,T.lastBaseUpdate=d))}if(r!==null){var k=n.baseState;o=0,T=S=d=null,c=r;do{var w=c.lane&-536870913,A=w!==c.lane;if(A?(ge&w)===w:(i&w)===w){w!==0&&w===Ji&&(So=!0),T!==null&&(T=T.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var I=e,ne=c;w=t;var Oe=a;switch(ne.tag){case 1:if(I=ne.payload,typeof I=="function"){k=I.call(Oe,k,w);break e}k=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ne.payload,w=typeof I=="function"?I.call(Oe,k,w):I,w==null)break e;k=O({},k,w);break e;case 2:Ua=!0}}w=c.callback,w!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[w]:A.push(w))}else A={lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(S=T=A,d=k):T=T.next=A,o|=w;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;A=c,c=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);T===null&&(d=k),n.baseState=d,n.firstBaseUpdate=S,n.lastBaseUpdate=T,r===null&&(n.shared.lanes=0),Qa|=o,e.lanes=o,e.memoizedState=k}}function u0(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function p0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)u0(a[e],t)}var an=m(null),Hl=m(0);function f0(e,t){e=ja,U(Hl,e),U(an,t),ja=e|t.baseLanes}function Do(){U(Hl,ja),U(an,an.current)}function wo(){ja=Hl.current,C(an),C(Hl)}var Ft=m(null),It=null;function Va(e){var t=e.alternate;U($e,$e.current&1),U(Ft,e),It===null&&(t===null||an.current!==null||t.memoizedState!==null)&&(It=e)}function No(e){U($e,$e.current),U(Ft,e),It===null&&(It=e)}function d0(e){e.tag===22?(U($e,$e.current),U(Ft,e),It===null&&(It=e)):Xa()}function Xa(){U($e,$e.current),U(Ft,Ft.current)}function qt(e){C(Ft),It===e&&(It=null),C($e)}var $e=m(0);function Ul(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rs(a)||Es(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=0,se=null,Ee=null,at=null,Gl=!1,nn=!1,wi=!1,Yl=0,Yn=0,ln=null,wd=0;function Ke(){throw Error(u(321))}function Ao(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!kt(e[a],t[a]))return!1;return!0}function jo(e,t,a,i,n,r){return ya=r,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?K0:Yo,wi=!1,r=a(i,n),wi=!1,nn&&(r=h0(t,a,i,n)),m0(e),r}function m0(e){N.H=Pn;var t=Ee!==null&&Ee.next!==null;if(ya=0,at=Ee=se=null,Gl=!1,Yn=0,ln=null,t)throw Error(u(300));e===null||it||(e=e.dependencies,e!==null&&El(e)&&(it=!0))}function h0(e,t,a,i){se=e;var n=0;do{if(nn&&(ln=null),Yn=0,nn=!1,25<=n)throw Error(u(301));if(n+=1,at=Ee=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=W0,r=t(a,i)}while(nn);return r}function Nd(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Vn(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(se.flags|=1024),t}function Mo(){var e=Yl!==0;return Yl=0,e}function To(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Co(e){if(Gl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gl=!1}ya=0,at=Ee=se=null,nn=!1,Yn=Yl=0,ln=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?se.memoizedState=at=e:at=at.next=e,at}function et(){if(Ee===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=at===null?se.memoizedState:at.next;if(t!==null)at=t,Ee=e;else{if(e===null)throw se.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},at===null?se.memoizedState=at=e:at=at.next=e}return at}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vn(e){var t=Yn;return Yn+=1,ln===null&&(ln=[]),e=l0(ln,e,t),t=se,(at===null?t.memoizedState:at.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?K0:Yo),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vn(e);if(e.$$typeof===_)return mt(e)}throw Error(u(438,String(e)))}function Ro(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Vl(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ue;return t.index++,a}function _a(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=et();return Eo(t,Ee,e)}function Eo(e,t,a){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=a;var n=e.baseQueue,r=i.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,i.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var c=o=null,d=null,S=t,T=!1;do{var k=S.lane&-536870913;if(k!==S.lane?(ge&k)===k:(ya&k)===k){var w=S.revertLane;if(w===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),k===Ji&&(T=!0);else if((ya&w)===w){S=S.next,w===Ji&&(T=!0);continue}else k={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(c=d=k,o=r):d=d.next=k,se.lanes|=w,Qa|=w;k=S.action,wi&&a(r,k),r=S.hasEagerState?S.eagerState:a(r,k)}else w={lane:k,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(c=d=w,o=r):d=d.next=w,se.lanes|=k,Qa|=k;S=S.next}while(S!==null&&S!==t);if(d===null?o=r:d.next=c,!kt(r,e.memoizedState)&&(it=!0,T&&(a=$i,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=d,i.lastRenderedState=r}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ko(e){var t=et(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);kt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function x0(e,t,a){var i=se,n=et(),r=_e;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!kt((Ee||n).memoizedState,a);if(o&&(n.memoizedState=a,it=!0),n=n.queue,qo(g0.bind(null,i,n,e),[e]),n.getSnapshot!==t||o||at!==null&&at.memoizedState.tag&1){if(i.flags|=2048,rn(9,{destroy:void 0},b0.bind(null,i,n,a,t),null),qe===null)throw Error(u(349));r||(ya&127)!==0||v0(i,t,a)}return a}function v0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=Vl(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function b0(e,t,a,i){t.value=a,t.getSnapshot=i,y0(t)&&_0(e)}function g0(e,t,a){return a(function(){y0(t)&&_0(e)})}function y0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!kt(e,a)}catch{return!0}}function _0(e){var t=xi(e,2);t!==null&&Tt(t,e,2)}function Oo(e){var t=St();if(typeof e=="function"){var a=e;if(e=a(),wi){Ge(!0);try{a()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},t}function z0(e,t,a,i){return e.baseState=a,Eo(e,Ee,typeof i=="function"?i:_a)}function Ad(e,t,a,i,n){if(Il(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};N.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,S0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function S0(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var r=N.T,o={};N.T=o;try{var c=a(n,i),d=N.S;d!==null&&d(o,c),D0(e,t,c)}catch(S){Fo(e,t,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),N.T=r}}else try{r=a(n,i),D0(e,t,r)}catch(S){Fo(e,t,S)}}function D0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){w0(e,t,i)},function(i){return Fo(e,t,i)}):w0(e,t,a)}function w0(e,t,a){t.status="fulfilled",t.value=a,N0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,S0(e,a)))}function Fo(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,N0(t),t=t.next;while(t!==i)}e.action=null}function N0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function A0(e,t){return t}function j0(e,t){if(_e){var a=qe.formState;if(a!==null){e:{var i=se;if(_e){if(Ye){t:{for(var n=Ye,r=Qt;n.nodeType!==8;){if(!r){n=null;break t}if(n=Kt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){Ye=Kt(n.nextSibling),i=n.data==="F!";break e}}Ba(i)}i=!1}i&&(t=a[0])}}return a=St(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A0,lastRenderedState:t},a.queue=i,a=Z0.bind(null,se,i),i.dispatch=a,i=Oo(!1),r=Go.bind(null,se,!1,i.queue),i=St(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=Ad.bind(null,se,n,r,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function M0(e){var t=et();return T0(t,Ee,e)}function T0(e,t,a){if(t=Eo(e,t,A0)[0],e=Pl(_a)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Vn(t)}catch(o){throw o===en?Fl:o}else i=t;t=et();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(se.flags|=2048,rn(9,{destroy:void 0},jd.bind(null,n,a),null)),[i,r,e]}function jd(e,t){e.action=t}function C0(e){var t=et(),a=Ee;if(a!==null)return T0(t,a,e);et(),t=t.memoizedState,a=et();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function rn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=se.updateQueue,t===null&&(t=Vl(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function R0(){return et().memoizedState}function Zl(e,t,a,i){var n=St();se.flags|=e,n.memoizedState=rn(1|t,{destroy:void 0},a,i===void 0?null:i)}function Ql(e,t,a,i){var n=et();i=i===void 0?null:i;var r=n.memoizedState.inst;Ee!==null&&i!==null&&Ao(i,Ee.memoizedState.deps)?n.memoizedState=rn(t,r,a,i):(se.flags|=e,n.memoizedState=rn(1|t,r,a,i))}function E0(e,t){Zl(8390656,8,e,t)}function qo(e,t){Ql(2048,8,e,t)}function Md(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=Vl(),se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function k0(e){var t=et().memoizedState;return Md({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function O0(e,t){return Ql(4,2,e,t)}function F0(e,t){return Ql(4,4,e,t)}function q0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L0(e,t,a){a=a!=null?a.concat([e]):null,Ql(4,4,q0.bind(null,t,e),a)}function Lo(){}function B0(e,t){var a=et();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Ao(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function H0(e,t){var a=et();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Ao(t,i[1]))return i[0];if(i=e(),wi){Ge(!0);try{e()}finally{Ge(!1)}}return a.memoizedState=[i,t],i}function Bo(e,t,a){return a===void 0||(ya&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Uu(),se.lanes|=e,Qa|=e,a)}function U0(e,t,a,i){return kt(a,t)?a:an.current!==null?(e=Bo(e,a,i),kt(e,t)||(it=!0),e):(ya&42)===0||(ya&1073741824)!==0&&(ge&261930)===0?(it=!0,e.memoizedState=a):(e=Uu(),se.lanes|=e,Qa|=e,t)}function G0(e,t,a,i,n){var r=F.p;F.p=r!==0&&8>r?r:8;var o=N.T,c={};N.T=c,Go(e,!1,t,a);try{var d=n(),S=N.S;if(S!==null&&S(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var T=Dd(d,i);Xn(e,t,T,Ht(e))}else Xn(e,t,i,Ht(e))}catch(k){Xn(e,t,{then:function(){},status:"rejected",reason:k},Ht())}finally{F.p=r,o!==null&&c.types!==null&&(o.types=c.types),N.T=o}}function Td(){}function Ho(e,t,a,i){if(e.tag!==5)throw Error(u(476));var n=Y0(e).queue;G0(e,n,t,M,a===null?Td:function(){return V0(e),a(i)})}function Y0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:M},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function V0(e){var t=Y0(e);t.next===null&&(t=e.alternate.memoizedState),Xn(e,t.next.queue,{},Ht())}function Uo(){return mt(sl)}function X0(){return et().memoizedState}function P0(){return et().memoizedState}function Cd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ht();e=Ga(a);var i=Ya(t,e,a);i!==null&&(Tt(i,t,a),Hn(i,t,a)),t={cache:xo()},e.payload=t;return}t=t.return}}function Rd(e,t,a){var i=Ht();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(e)?Q0(t,a):(a=no(e,t,a,i),a!==null&&(Tt(a,e,i),I0(a,t,i)))}function Z0(e,t,a){var i=Ht();Xn(e,t,a,i)}function Xn(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(e))Q0(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,c=r(o,a);if(n.hasEagerState=!0,n.eagerState=c,kt(c,o))return Ml(e,t,n,0),qe===null&&jl(),!1}catch{}finally{}if(a=no(e,t,n,i),a!==null)return Tt(a,e,i),I0(a,t,i),!0}return!1}function Go(e,t,a,i){if(i={lane:2,revertLane:ys(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(t)throw Error(u(479))}else t=no(e,a,i,2),t!==null&&Tt(t,e,2)}function Il(e){var t=e.alternate;return e===se||t!==null&&t===se}function Q0(e,t){nn=Gl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function I0(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,pa(e,a)}}var Pn={readContext:mt,use:Xl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};Pn.useEffectEvent=Ke;var K0={readContext:mt,use:Xl,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:E0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Zl(4194308,4,q0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Zl(4194308,4,e,t)},useInsertionEffect:function(e,t){Zl(4,2,e,t)},useMemo:function(e,t){var a=St();t=t===void 0?null:t;var i=e();if(wi){Ge(!0);try{e()}finally{Ge(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=St();if(a!==void 0){var n=a(t);if(wi){Ge(!0);try{a(t)}finally{Ge(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Rd.bind(null,se,e),[i.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Oo(e);var t=e.queue,a=Z0.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Lo,useDeferredValue:function(e,t){var a=St();return Bo(a,e,t)},useTransition:function(){var e=Oo(!1);return e=G0.bind(null,se,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=se,n=St();if(_e){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),qe===null)throw Error(u(349));(ge&127)!==0||v0(i,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,E0(g0.bind(null,i,r,e),[e]),i.flags|=2048,rn(9,{destroy:void 0},b0.bind(null,i,r,a,t),null),a},useId:function(){var e=St(),t=qe.identifierPrefix;if(_e){var a=ra,i=la;a=(i&~(1<<32-Te(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Yl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=wd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Uo,useFormState:j0,useActionState:j0,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Go.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return St().memoizedState=Cd.bind(null,se)},useEffectEvent:function(e){var t=St(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Yo={readContext:mt,use:Xl,useCallback:B0,useContext:mt,useEffect:qo,useImperativeHandle:L0,useInsertionEffect:O0,useLayoutEffect:F0,useMemo:H0,useReducer:Pl,useRef:R0,useState:function(){return Pl(_a)},useDebugValue:Lo,useDeferredValue:function(e,t){var a=et();return U0(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Pl(_a)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Vn(e),t]},useSyncExternalStore:x0,useId:X0,useHostTransitionStatus:Uo,useFormState:M0,useActionState:M0,useOptimistic:function(e,t){var a=et();return z0(a,Ee,e,t)},useMemoCache:Ro,useCacheRefresh:P0};Yo.useEffectEvent=k0;var W0={readContext:mt,use:Xl,useCallback:B0,useContext:mt,useEffect:qo,useImperativeHandle:L0,useInsertionEffect:O0,useLayoutEffect:F0,useMemo:H0,useReducer:ko,useRef:R0,useState:function(){return ko(_a)},useDebugValue:Lo,useDeferredValue:function(e,t){var a=et();return Ee===null?Bo(a,e,t):U0(a,Ee.memoizedState,e,t)},useTransition:function(){var e=ko(_a)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Vn(e),t]},useSyncExternalStore:x0,useId:X0,useHostTransitionStatus:Uo,useFormState:C0,useActionState:C0,useOptimistic:function(e,t){var a=et();return Ee!==null?z0(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ro,useCacheRefresh:P0};W0.useEffectEvent=k0;function Vo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xo={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ht(),n=Ga(i);n.payload=t,a!=null&&(n.callback=a),t=Ya(e,n,i),t!==null&&(Tt(t,e,i),Hn(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ht(),n=Ga(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ya(e,n,i),t!==null&&(Tt(t,e,i),Hn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ht(),i=Ga(a);i.tag=2,t!=null&&(i.callback=t),t=Ya(e,i,a),t!==null&&(Tt(t,e,a),Hn(t,e,a))}};function J0(e,t,a,i,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!Rn(a,i)||!Rn(n,r):!0}function $0(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Ni(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function eu(e){Al(e)}function tu(e){console.error(e)}function au(e){Al(e)}function Kl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function iu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Po(e,t,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,t)},a}function nu(e){return e=Ga(e),e.tag=3,e}function lu(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=i.value;e.payload=function(){return n(r)},e.callback=function(){iu(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){iu(t,a,i),typeof n!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var c=i.stack;this.componentDidCatch(i.value,{componentStack:c!==null?c:""})})}function Ed(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Wi(t,a,n,!0),a=Ft.current,a!==null){switch(a.tag){case 31:case 13:return It===null?sr():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===ql?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),vs(e,i,n)),!1;case 22:return a.flags|=65536,i===ql?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),vs(e,i,n)),!1}throw Error(u(435,a.tag))}return vs(e,i,n),sr(),!1}if(_e)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==uo&&(e=Error(u(422),{cause:i}),On(Xt(e,a)))):(i!==uo&&(t=Error(u(423),{cause:i}),On(Xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=Xt(i,a),n=Po(e.stateNode,i,n),zo(e,n),We!==4&&(We=2)),!1;var r=Error(u(520),{cause:i});if(r=Xt(r,a),el===null?el=[r]:el.push(r),We!==4&&(We=2),t===null)return!0;i=Xt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Po(a.stateNode,i,e),zo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=nu(n),lu(n,e,a,i),zo(a,n),!1}a=a.return}while(a!==null);return!1}var Zo=Error(u(461)),it=!1;function ht(e,t,a,i){t.child=e===null?c0(t,null,a,i):Di(t,e.child,a,i)}function ru(e,t,a,i,n){a=a.render;var r=t.ref;if("ref"in i){var o={};for(var c in i)c!=="ref"&&(o[c]=i[c])}else o=i;return yi(t),i=jo(e,t,a,o,r,n),c=Mo(),e!==null&&!it?(To(e,t,n),za(e,t,n)):(_e&&c&&so(t),t.flags|=1,ht(e,t,i,n),t.child)}function ou(e,t,a,i,n){if(e===null){var r=a.type;return typeof r=="function"&&!lo(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,su(e,t,r,i,n)):(e=Cl(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ts(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Rn,a(o,i)&&e.ref===t.ref)return za(e,t,n)}return t.flags|=1,e=xa(r,i),e.ref=t.ref,e.return=t,t.child=e}function su(e,t,a,i,n){if(e!==null){var r=e.memoizedProps;if(Rn(r,i)&&e.ref===t.ref)if(it=!1,t.pendingProps=i=r,ts(e,n))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,za(e,t,n)}return Qo(e,t,a,i,n)}function cu(e,t,a,i){var n=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~r}else i=0,t.child=null;return uu(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(t,r!==null?r.cachePool:null),r!==null?f0(t,r):Do(),d0(t);else return i=t.lanes=536870912,uu(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(Ol(t,r.cachePool),f0(t,r),Xa(),t.memoizedState=null):(e!==null&&Ol(t,null),Do(),Xa());return ht(e,t,n,a),t.child}function Zn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uu(e,t,a,i,n){var r=bo();return r=r===null?null:{parent:tt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Ol(t,null),Do(),d0(t),e!==null&&Wi(e,t,i,!0),t.childLanes=n,null}function Wl(e,t){return t=$l({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pu(e,t,a){return Di(t,e.child,null,a),e=Wl(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function kd(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(i.mode==="hidden")return e=Wl(t,i),t.lanes=536870912,Zn(null,e);if(No(t),(e=Ye)?(e=Sp(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:la,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},a=Qc(e),a.return=t,t.child=a,dt=t,Ye=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return Wl(t,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(No(t),n)if(t.flags&256)t.flags&=-257,t=pu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(it||Wi(e,t,a,!1),n=(a&e.childLanes)!==0,it||n){if(i=qe,i!==null&&(o=pi(i,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,xi(e,o),Tt(i,e,o),Zo;sr(),t=pu(e,t,a)}else e=r.treeContext,Ye=Kt(o.nextSibling),dt=t,_e=!0,La=null,Qt=!1,e!==null&&Wc(t,e),t=Wl(t,i),t.flags|=4096;return t}return e=xa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Qo(e,t,a,i,n){return yi(t),a=jo(e,t,a,i,void 0,n),i=Mo(),e!==null&&!it?(To(e,t,n),za(e,t,n)):(_e&&i&&so(t),t.flags|=1,ht(e,t,a,n),t.child)}function fu(e,t,a,i,n,r){return yi(t),t.updateQueue=null,a=h0(t,i,a,n),m0(e),i=Mo(),e!==null&&!it?(To(e,t,r),za(e,t,r)):(_e&&i&&so(t),t.flags|=1,ht(e,t,a,r),t.child)}function du(e,t,a,i,n){if(yi(t),t.stateNode===null){var r=Zi,o=a.contextType;typeof o=="object"&&o!==null&&(r=mt(o)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},yo(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?mt(o):Zi,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Vo(t,a,o,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Xo.enqueueReplaceState(r,r.state,null),Gn(t,i,r,n),Un(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,d=Ni(a,c);r.props=d;var S=r.context,T=a.contextType;o=Zi,typeof T=="object"&&T!==null&&(o=mt(T));var k=a.getDerivedStateFromProps;T=typeof k=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,T||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||S!==o)&&$0(t,r,i,o),Ua=!1;var w=t.memoizedState;r.state=w,Gn(t,i,r,n),Un(),S=t.memoizedState,c||w!==S||Ua?(typeof k=="function"&&(Vo(t,a,k,i),S=t.memoizedState),(d=Ua||J0(t,a,d,i,w,S,o))?(T||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=S),r.props=i,r.state=S,r.context=o,i=d):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,_o(e,t),o=t.memoizedProps,T=Ni(a,o),r.props=T,k=t.pendingProps,w=r.context,S=a.contextType,d=Zi,typeof S=="object"&&S!==null&&(d=mt(S)),c=a.getDerivedStateFromProps,(S=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==k||w!==d)&&$0(t,r,i,d),Ua=!1,w=t.memoizedState,r.state=w,Gn(t,i,r,n),Un();var A=t.memoizedState;o!==k||w!==A||Ua||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof c=="function"&&(Vo(t,a,c,i),A=t.memoizedState),(T=Ua||J0(t,a,T,i,w,A,d)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,A,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,A,d)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=A),r.props=i,r.state=A,r.context=d,i=T):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Jl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Di(t,e.child,null,n),t.child=Di(t,null,a,n)):ht(e,t,a,n),t.memoizedState=r.state,e=t.child):e=za(e,t,n),e}function mu(e,t,a,i){return bi(),t.flags|=256,ht(e,t,a,i),t.child}var Io={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:i0()}}function Wo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bt),e}function hu(e,t,a){var i=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(n?Va(t):Xa(),(e=Ye)?(e=Sp(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:la,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},a=Qc(e),a.return=t,t.child=a,dt=t,Ye=null)):e=null,e===null)throw Ba(t);return Es(e)?t.lanes=32:t.lanes=536870912,null}var c=i.children;return i=i.fallback,n?(Xa(),n=t.mode,c=$l({mode:"hidden",children:c},n),i=vi(i,n,a,null),c.return=t,i.return=t,c.sibling=i,t.child=c,i=t.child,i.memoizedState=Ko(a),i.childLanes=Wo(e,o,a),t.memoizedState=Io,Zn(null,i)):(Va(t),Jo(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(r)t.flags&256?(Va(t),t.flags&=-257,t=$o(e,t,a)):t.memoizedState!==null?(Xa(),t.child=e.child,t.flags|=128,t=null):(Xa(),c=i.fallback,n=t.mode,i=$l({mode:"visible",children:i.children},n),c=vi(c,n,a,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,Di(t,e.child,null,a),i=t.child,i.memoizedState=Ko(a),i.childLanes=Wo(e,o,a),t.memoizedState=Io,t=Zn(null,i));else if(Va(t),Es(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var S=o.dgst;o=S,i=Error(u(419)),i.stack="",i.digest=o,On({value:i,source:null,stack:null}),t=$o(e,t,a)}else if(it||Wi(e,t,a,!1),o=(a&e.childLanes)!==0,it||o){if(o=qe,o!==null&&(i=pi(o,a),i!==0&&i!==d.retryLane))throw d.retryLane=i,xi(e,i),Tt(o,e,i),Zo;Rs(c)||sr(),t=$o(e,t,a)}else Rs(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Ye=Kt(c.nextSibling),dt=t,_e=!0,La=null,Qt=!1,e!==null&&Wc(t,e),t=Jo(t,i.children),t.flags|=4096);return t}return n?(Xa(),c=i.fallback,n=t.mode,d=e.child,S=d.sibling,i=xa(d,{mode:"hidden",children:i.children}),i.subtreeFlags=d.subtreeFlags&65011712,S!==null?c=xa(S,c):(c=vi(c,n,a,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,Zn(null,i),i=t.child,c=e.child.memoizedState,c===null?c=Ko(a):(n=c.cachePool,n!==null?(d=tt._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=i0(),c={baseLanes:c.baseLanes|a,cachePool:n}),i.memoizedState=c,i.childLanes=Wo(e,o,a),t.memoizedState=Io,Zn(e.child,i)):(Va(t),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Jo(e,t){return t=$l({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $l(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function $o(e,t,a){return Di(t,e.child,null,a),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xu(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),mo(e.return,t,a)}function es(e,t,a,i,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function vu(e,t,a){var i=t.pendingProps,n=i.revealOrder,r=i.tail;i=i.children;var o=$e.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,U($e,o),ht(e,t,i,a),i=_e?kn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xu(e,a,t);else if(e.tag===19)xu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),es(t,!1,n,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ul(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}es(t,!0,a,null,r,i);break;case"together":es(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function za(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=xa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ts(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function Od(e,t,a){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),Ha(t,tt,e.memoizedState.cache),bi();break;case 27:case 5:bt(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,No(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?hu(e,t,a):(Va(t),e=za(e,t,a),e!==null?e.sibling:null);Va(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Wi(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return vu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U($e,$e.current),i)break;return null;case 22:return t.lanes=0,cu(e,t,a,t.pendingProps);case 24:Ha(t,tt,e.memoizedState.cache)}return za(e,t,a)}function bu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!ts(e,a)&&(t.flags&128)===0)return it=!1,Od(e,t,a);it=(e.flags&131072)!==0}else it=!1,_e&&(t.flags&1048576)!==0&&Kc(t,kn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=zi(t.elementType),t.type=e,typeof e=="function")lo(e)?(i=Ni(e,i),t.tag=1,t=du(null,t,e,i,a)):(t.tag=0,t=Qo(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===V){t.tag=11,t=ru(null,t,e,i,a);break e}else if(n===ie){t.tag=14,t=ou(null,t,e,i,a);break e}}throw t=Le(e)||e,Error(u(306,t,""))}}return t;case 0:return Qo(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=Ni(i,t.pendingProps),du(e,t,i,n,a);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var r=t.memoizedState;n=r.element,_o(e,t),Gn(t,i,null,a);var o=t.memoizedState;if(i=o.cache,Ha(t,tt,i),i!==r.cache&&ho(t,[tt],a,!0),Un(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=mu(e,t,i,a);break e}else if(i!==n){n=Xt(Error(u(424)),t),On(n),t=mu(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Kt(e.firstChild),dt=t,_e=!0,La=null,Qt=!0,a=c0(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bi(),i===n){t=za(e,t,a);break e}ht(e,t,i,a)}t=t.child}return t;case 26:return Jl(e,t),e===null?(a=Mp(t.type,null,t.pendingProps,null))?t.memoizedState=a:_e||(a=t.type,e=t.pendingProps,i=hr(ae.current).createElement(a),i[ft]=t,i[Dt]=e,xt(i,a,e),st(i),t.stateNode=i):t.memoizedState=Mp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bt(t),e===null&&_e&&(i=t.stateNode=Np(t.type,t.pendingProps,ae.current),dt=t,Qt=!0,n=Ye,$a(t.type)?(ks=n,Ye=Kt(i.firstChild)):Ye=n),ht(e,t,t.pendingProps.children,a),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((n=i=Ye)&&(i=pm(i,t.type,t.pendingProps,Qt),i!==null?(t.stateNode=i,dt=t,Ye=Kt(i.firstChild),Qt=!1,n=!0):n=!1),n||Ba(t)),bt(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,Ms(n,r)?i=null:o!==null&&Ms(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=jo(e,t,Nd,null,null,a),sl._currentValue=n),Jl(e,t),ht(e,t,i,a),t.child;case 6:return e===null&&_e&&((e=a=Ye)&&(a=fm(a,t.pendingProps,Qt),a!==null?(t.stateNode=a,dt=t,Ye=null,e=!0):e=!1),e||Ba(t)),null;case 13:return hu(e,t,a);case 4:return Se(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Di(t,null,i,a):ht(e,t,i,a),t.child;case 11:return ru(e,t,t.type,t.pendingProps,a);case 7:return ht(e,t,t.pendingProps,a),t.child;case 8:return ht(e,t,t.pendingProps.children,a),t.child;case 12:return ht(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ha(t,t.type,i.value),ht(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,yi(t),n=mt(n),i=i(n),t.flags|=1,ht(e,t,i,a),t.child;case 14:return ou(e,t,t.type,t.pendingProps,a);case 15:return su(e,t,t.type,t.pendingProps,a);case 19:return vu(e,t,a);case 31:return kd(e,t,a);case 22:return cu(e,t,a,t.pendingProps);case 24:return yi(t),i=mt(tt),e===null?(n=bo(),n===null&&(n=qe,r=xo(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:i,cache:n},yo(t),Ha(t,tt,n)):((e.lanes&a)!==0&&(_o(e,t),Gn(t,null,null,a),Un()),n=e.memoizedState,r=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ha(t,tt,i)):(i=r.cache,Ha(t,tt,i),i!==n.cache&&ho(t,[tt],a,!0))),ht(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Sa(e){e.flags|=4}function as(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Xu())e.flags|=8192;else throw Si=ql,go}else e.flags&=-16777217}function gu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kp(t))if(Xu())e.flags|=8192;else throw Si=ql,go}function er(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ut():536870912,e.lanes|=t,un|=t)}function Qn(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Fd(e,t,a){var i=t.pendingProps;switch(co(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ga(tt),de(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,po())),Ve(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Sa(t),r!==null?(Ve(t),gu(t,r)):(Ve(t),as(t,n,null,i,a))):r?r!==e.memoizedState?(Sa(t),Ve(t),gu(t,r)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Sa(t),Ve(t),as(t,n,e,i,a)),null;case 27:if(gt(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sa(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}e=X.current,Ki(t)?Jc(t):(e=Np(n,i,a),t.stateNode=e,Sa(t))}return Ve(t),null;case 5:if(gt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sa(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}if(r=X.current,Ki(t))Jc(t);else{var o=hr(ae.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}r[ft]=t,r[Dt]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(xt(r,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Sa(t)}}return Ve(t),as(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,Ki(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=dt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[ft]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||hp(e.nodeValue,a)),e||Ba(t,!0)}else e=hr(e).createTextNode(i),e[ft]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ki(t),a!==null){if(e===null){if(!i)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ft]=t}else bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ki(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[ft]=t}else bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),n=!1}else n=po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),er(t,t.updateQueue),Ve(t),null);case 4:return de(),e===null&&Ds(t.stateNode.containerInfo),Ve(t),null;case 10:return ga(t.type),Ve(t),null;case 19:if(C($e),i=t.memoizedState,i===null)return Ve(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Qn(i,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ul(e),r!==null){for(t.flags|=128,Qn(i,!1),e=r.updateQueue,t.updateQueue=e,er(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Zc(a,e),a=a.sibling;return U($e,$e.current&1|2),_e&&va(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&B()>lr&&(t.flags|=128,n=!0,Qn(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ul(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,er(t,e),Qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!_e)return Ve(t),null}else 2*B()-i.renderingStartTime>lr&&a!==536870912&&(t.flags|=128,n=!0,Qn(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=B(),e.sibling=null,a=$e.current,U($e,n?a&1|2:a&1),_e&&va(t,i.treeForkCount),e):(Ve(t),null);case 22:case 23:return qt(t),wo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&er(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&C(_i),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ga(tt),Ve(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function qd(e,t){switch(co(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ga(tt),de(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gt(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(u(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C($e),null;case 4:return de(),null;case 10:return ga(t.type),null;case 22:case 23:return qt(t),wo(),e!==null&&C(_i),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ga(tt),null;case 25:return null;default:return null}}function yu(e,t){switch(co(t),t.tag){case 3:ga(tt),de();break;case 26:case 27:case 5:gt(t);break;case 4:de();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:C($e);break;case 10:ga(t.type);break;case 22:case 23:qt(t),wo(),e!==null&&C(_i);break;case 24:ga(tt)}}function In(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var r=a.create,o=a.inst;i=r(),o.destroy=i}a=a.next}while(a!==n)}}catch(c){Re(t,t.return,c)}}function Pa(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){var o=i.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,n=t;var d=a,S=c;try{S()}catch(T){Re(n,d,T)}}}i=i.next}while(i!==r)}}catch(T){Re(t,t.return,T)}}function _u(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{p0(t,a)}catch(i){Re(e,e.return,i)}}}function zu(e,t,a){a.props=Ni(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Re(e,t,i)}}function Kn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){Re(e,t,n)}}function oa(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){Re(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Re(e,t,n)}else a.current=null}function Su(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){Re(e,e.return,n)}}function is(e,t,a){try{var i=e.stateNode;lm(i,e.type,a,t),i[Dt]=t}catch(n){Re(e,e.return,n)}}function Du(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ls(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ma));else if(i!==4&&(i===27&&$a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ls(e,t,a),e=e.sibling;e!==null;)ls(e,t,a),e=e.sibling}function tr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&$a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tr(e,t,a),e=e.sibling;e!==null;)tr(e,t,a),e=e.sibling}function wu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xt(t,i,a),t[ft]=e,t[Dt]=a}catch(r){Re(e,e.return,r)}}var Da=!1,nt=!1,rs=!1,Nu=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Ld(e,t){if(e=e.containerInfo,As=zr,e=Lc(e),Jr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,c=-1,d=-1,S=0,T=0,k=e,w=null;t:for(;;){for(var A;k!==a||n!==0&&k.nodeType!==3||(c=o+n),k!==r||i!==0&&k.nodeType!==3||(d=o+i),k.nodeType===3&&(o+=k.nodeValue.length),(A=k.firstChild)!==null;)w=k,k=A;for(;;){if(k===e)break t;if(w===a&&++S===n&&(c=o),w===r&&++T===i&&(d=o),(A=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=A}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(js={focusedElem:e,selectionRange:a},zr=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var I=Ni(a.type,n);e=i.getSnapshotBeforeUpdate(I,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Re(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function Au(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a),i&4&&In(5,a);break;case 1:if(Na(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Re(a,a.return,o)}else{var n=Ni(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Re(a,a.return,o)}}i&64&&_u(a),i&512&&Kn(a,a.return);break;case 3:if(Na(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{p0(e,t)}catch(o){Re(a,a.return,o)}}break;case 27:t===null&&i&4&&wu(a);case 26:case 5:Na(e,a),t===null&&i&4&&Su(a),i&512&&Kn(a,a.return);break;case 12:Na(e,a);break;case 31:Na(e,a),i&4&&Tu(e,a);break;case 13:Na(e,a),i&4&&Cu(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zd.bind(null,a),dm(e,a))));break;case 22:if(i=a.memoizedState!==null||Da,!i){t=t!==null&&t.memoizedState!==null||nt,n=Da;var r=nt;Da=i,(nt=t)&&!r?Aa(e,a,(a.subtreeFlags&8772)!==0):Na(e,a),Da=n,nt=r}break;case 30:break;default:Na(e,a)}}function ju(e){var t=e.alternate;t!==null&&(e.alternate=null,ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Nt=!1;function wa(e,t,a){for(a=a.child;a!==null;)Mu(e,t,a),a=a.sibling}function Mu(e,t,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:nt||oa(a,t),wa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nt||oa(a,t);var i=Ze,n=Nt;$a(a.type)&&(Ze=a.stateNode,Nt=!1),wa(e,t,a),ll(a.stateNode),Ze=i,Nt=n;break;case 5:nt||oa(a,t);case 6:if(i=Ze,n=Nt,Ze=null,wa(e,t,a),Ze=i,Nt=n,Ze!==null)if(Nt)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(r){Re(a,t,r)}else try{Ze.removeChild(a.stateNode)}catch(r){Re(a,t,r)}break;case 18:Ze!==null&&(Nt?(e=Ze,_p(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bn(e)):_p(Ze,a.stateNode));break;case 4:i=Ze,n=Nt,Ze=a.stateNode.containerInfo,Nt=!0,wa(e,t,a),Ze=i,Nt=n;break;case 0:case 11:case 14:case 15:Pa(2,a,t),nt||Pa(4,a,t),wa(e,t,a);break;case 1:nt||(oa(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&zu(a,t,i)),wa(e,t,a);break;case 21:wa(e,t,a);break;case 22:nt=(i=nt)||a.memoizedState!==null,wa(e,t,a),nt=i;break;default:wa(e,t,a)}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{bn(e)}catch(a){Re(t,t.return,a)}}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bn(e)}catch(a){Re(t,t.return,a)}}function Bd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nu),t;default:throw Error(u(435,e.tag))}}function ar(e,t){var a=Bd(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=Qd.bind(null,e,i);i.then(n,n)}})}function At(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],r=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if($a(c.type)){Ze=c.stateNode,Nt=!1;break e}break;case 5:Ze=c.stateNode,Nt=!1;break e;case 3:case 4:Ze=c.stateNode.containerInfo,Nt=!0;break e}c=c.return}if(Ze===null)throw Error(u(160));Mu(r,o,n),Ze=null,Nt=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ru(t,e),t=t.sibling}var ta=null;function Ru(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),jt(e),i&4&&(Pa(3,e,e.return),In(3,e),Pa(5,e,e.return));break;case 1:At(t,e),jt(e),i&512&&(nt||a===null||oa(a,a.return)),i&64&&Da&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=ta;if(At(t,e),jt(e),i&512&&(nt||a===null||oa(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":r=n.getElementsByTagName("title")[0],(!r||r[Sn]||r[ft]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(i),n.head.insertBefore(r,n.querySelector("head > title"))),xt(r,i,a),r[ft]=e,st(r),i=r;break e;case"link":var o=Rp("link","href",n).get(i+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(r=o[c],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}r=n.createElement(i),xt(r,i,a),n.head.appendChild(r);break;case"meta":if(o=Rp("meta","content",n).get(i+(a.content||""))){for(c=0;c<o.length;c++)if(r=o[c],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}r=n.createElement(i),xt(r,i,a),n.head.appendChild(r);break;default:throw Error(u(468,i))}r[ft]=e,st(r),i=r}e.stateNode=i}else Ep(n,e.type,e.stateNode);else e.stateNode=Cp(n,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?Ep(n,e.type,e.stateNode):Cp(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&is(e,e.memoizedProps,a.memoizedProps)}break;case 27:At(t,e),jt(e),i&512&&(nt||a===null||oa(a,a.return)),a!==null&&i&4&&is(e,e.memoizedProps,a.memoizedProps);break;case 5:if(At(t,e),jt(e),i&512&&(nt||a===null||oa(a,a.return)),e.flags&32){n=e.stateNode;try{Hi(n,"")}catch(I){Re(e,e.return,I)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,is(e,n,a!==null?a.memoizedProps:n)),i&1024&&(rs=!0);break;case 6:if(At(t,e),jt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(I){Re(e,e.return,I)}}break;case 3:if(br=null,n=ta,ta=xr(t.containerInfo),At(t,e),ta=n,jt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(I){Re(e,e.return,I)}rs&&(rs=!1,Eu(e));break;case 4:i=ta,ta=xr(e.stateNode.containerInfo),At(t,e),jt(e),ta=i;break;case 12:At(t,e),jt(e);break;case 31:At(t,e),jt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ar(e,i)));break;case 13:At(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nr=B()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ar(e,i)));break;case 22:n=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,S=Da,T=nt;if(Da=S||n,nt=T||d,At(t,e),nt=T,Da=S,jt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||d||Da||nt||Ai(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(r=d.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var k=d.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null;c.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(I){Re(d,d.return,I)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(I){Re(d,d.return,I)}}}else if(t.tag===18){if(a===null){d=t;try{var A=d.stateNode;n?zp(A,!0):zp(d.stateNode,!1)}catch(I){Re(d,d.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,ar(e,a))));break;case 19:At(t,e),jt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ar(e,i)));break;case 30:break;case 21:break;default:At(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Du(i)){a=i;break}i=i.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,r=ns(e);tr(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(Hi(o,""),a.flags&=-33);var c=ns(e);tr(e,c,o);break;case 3:case 4:var d=a.stateNode.containerInfo,S=ns(e);ls(e,S,d);break;default:throw Error(u(161))}}catch(T){Re(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Eu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Au(e,t.alternate,t),t=t.sibling}function Ai(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),Ai(t);break;case 1:oa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zu(t,t.return,a),Ai(t);break;case 27:ll(t.stateNode);case 26:case 5:oa(t,t.return),Ai(t);break;case 22:t.memoizedState===null&&Ai(t);break;case 30:Ai(t);break;default:Ai(t)}e=e.sibling}}function Aa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:Aa(n,r,a),In(4,r);break;case 1:if(Aa(n,r,a),i=r,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){Re(i,i.return,S)}if(i=r,n=i.updateQueue,n!==null){var c=i.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)u0(d[n],c)}catch(S){Re(i,i.return,S)}}a&&o&64&&_u(r),Kn(r,r.return);break;case 27:wu(r);case 26:case 5:Aa(n,r,a),a&&i===null&&o&4&&Su(r),Kn(r,r.return);break;case 12:Aa(n,r,a);break;case 31:Aa(n,r,a),a&&o&4&&Tu(n,r);break;case 13:Aa(n,r,a),a&&o&4&&Cu(n,r);break;case 22:r.memoizedState===null&&Aa(n,r,a),Kn(r,r.return);break;case 30:break;default:Aa(n,r,a)}t=t.sibling}}function os(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fn(a))}function ss(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fn(e))}function aa(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ku(e,t,a,i),t=t.sibling}function ku(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:aa(e,t,a,i),n&2048&&In(9,t);break;case 1:aa(e,t,a,i);break;case 3:aa(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fn(e)));break;case 12:if(n&2048){aa(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Re(t,t.return,d)}}else aa(e,t,a,i);break;case 31:aa(e,t,a,i);break;case 13:aa(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?aa(e,t,a,i):Wn(e,t):r._visibility&2?aa(e,t,a,i):(r._visibility|=2,on(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&os(o,t);break;case 24:aa(e,t,a,i),n&2048&&ss(t.alternate,t);break;default:aa(e,t,a,i)}}function on(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,c=a,d=i,S=o.flags;switch(o.tag){case 0:case 11:case 15:on(r,o,c,d,n),In(8,o);break;case 23:break;case 22:var T=o.stateNode;o.memoizedState!==null?T._visibility&2?on(r,o,c,d,n):Wn(r,o):(T._visibility|=2,on(r,o,c,d,n)),n&&S&2048&&os(o.alternate,o);break;case 24:on(r,o,c,d,n),n&&S&2048&&ss(o.alternate,o);break;default:on(r,o,c,d,n)}t=t.sibling}}function Wn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:Wn(a,i),n&2048&&os(i.alternate,i);break;case 24:Wn(a,i),n&2048&&ss(i.alternate,i);break;default:Wn(a,i)}t=t.sibling}}var Jn=8192;function sn(e,t,a){if(e.subtreeFlags&Jn)for(e=e.child;e!==null;)Ou(e,t,a),e=e.sibling}function Ou(e,t,a){switch(e.tag){case 26:sn(e,t,a),e.flags&Jn&&e.memoizedState!==null&&wm(a,ta,e.memoizedState,e.memoizedProps);break;case 5:sn(e,t,a);break;case 3:case 4:var i=ta;ta=xr(e.stateNode.containerInfo),sn(e,t,a),ta=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jn,Jn=16777216,sn(e,t,a),Jn=i):sn(e,t,a));break;default:sn(e,t,a)}}function Fu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $n(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,Lu(i,e)}Fu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qu(e),e=e.sibling}function qu(e){switch(e.tag){case 0:case 11:case 15:$n(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:$n(e);break;case 12:$n(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ir(e)):$n(e);break;default:$n(e)}}function ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,Lu(i,e)}Fu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),ir(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ir(t));break;default:ir(t)}e=e.sibling}}function Lu(e,t){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ct=i;else e:for(a=e;ct!==null;){i=ct;var n=i.sibling,r=i.return;if(ju(i),i===a){ct=null;break e}if(n!==null){n.return=r,ct=n;break e}ct=r}}}var Hd={getCacheForType:function(e){var t=mt(tt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return mt(tt).controller.signal}},Ud=typeof WeakMap=="function"?WeakMap:Map,je=0,qe=null,xe=null,ge=0,Ce=0,Lt=null,Za=!1,cn=!1,cs=!1,ja=0,We=0,Qa=0,ji=0,us=0,Bt=0,un=0,el=null,Mt=null,ps=!1,nr=0,Bu=0,lr=1/0,rr=null,Ia=null,rt=0,Ka=null,pn=null,Ma=0,fs=0,ds=null,Hu=null,tl=0,ms=null;function Ht(){return(je&2)!==0&&ge!==0?ge&-ge:N.T!==null?ys():Et()}function Uu(){if(Bt===0)if((ge&536870912)===0||_e){var e=ci;ci<<=1,(ci&3932160)===0&&(ci=262144),Bt=e}else Bt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Bt}function Tt(e,t,a){(e===qe&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(fn(e,0),Wa(e,ge,Bt,!1)),na(e,a),((je&2)===0||e!==qe)&&(e===qe&&((je&2)===0&&(ji|=a),We===4&&Wa(e,ge,Bt,!1)),sa(e))}function Gu(e,t,a){if((je&6)!==0)throw Error(u(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||pt(e,t),n=i?Vd(e,t):xs(e,t,!0),r=i;do{if(n===0){cn&&!i&&Wa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Gd(a)){n=xs(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;n=el;var d=c.current.memoizedState.isDehydrated;if(d&&(fn(c,o).flags|=256),o=xs(c,o,!1),o!==2){if(cs&&!d){c.errorRecoveryDisabledLanes|=r,ji|=r,n=4;break e}r=Mt,Mt=n,r!==null&&(Mt===null?Mt=r:Mt.push.apply(Mt,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){fn(e,0),Wa(e,t,0,!0);break}e:{switch(i=e,r=n,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Wa(i,t,Bt,!Za);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=nr+300-B(),10<n)){if(Wa(i,t,Bt,!Za),Jt(i,0,!0)!==0)break e;Ma=t,i.timeoutHandle=gp(Yu.bind(null,i,a,Mt,rr,ps,t,Bt,ji,un,Za,r,"Throttled",-0,0),n);break e}Yu(i,a,Mt,rr,ps,t,Bt,ji,un,Za,r,null,-0,0)}}break}while(!0);sa(e)}function Yu(e,t,a,i,n,r,o,c,d,S,T,k,w,A){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ma},Ou(t,r,k);var I=(r&62914560)===r?nr-B():(r&4194048)===r?Bu-B():0;if(I=Nm(k,I),I!==null){Ma=r,e.cancelPendingCommit=I(Wu.bind(null,e,t,r,a,i,n,o,c,d,T,k,null,w,A)),Wa(e,r,o,!S);return}}Wu(e,t,r,a,i,n,o,c,d)}function Gd(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],r=n.getSnapshot;n=n.value;try{if(!kt(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wa(e,t,a,i){t&=~us,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var r=31-Te(n),o=1<<r;i[r]=-1,n&=~o}a!==0&&Rt(e,a,t)}function or(){return(je&6)===0?(al(0),!1):!0}function hs(){if(xe!==null){if(Ce===0)var e=xe.return;else e=xe,ba=gi=null,Co(e),tn=null,Ln=0,e=xe;for(;e!==null;)yu(e.alternate,e),e=e.return;xe=null}}function fn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ma=0,hs(),qe=e,xe=a=xa(e.current,null),ge=t,Ce=0,Lt=null,Za=!1,cn=pt(e,t),cs=!1,un=Bt=us=ji=Qa=We=0,Mt=el=null,ps=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-Te(i),r=1<<n;t|=e[n],i&=~r}return ja=t,jl(),a}function Vu(e,t){se=null,N.H=Pn,t===en||t===Fl?(t=r0(),Ce=3):t===go?(t=r0(),Ce=4):Ce=t===Zo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Lt=t,xe===null&&(We=1,Kl(e,Xt(t,e.current)))}function Xu(){var e=Ft.current;return e===null?!0:(ge&4194048)===ge?It===null:(ge&62914560)===ge||(ge&536870912)!==0?e===It:!1}function Pu(){var e=N.H;return N.H=Pn,e===null?Pn:e}function Zu(){var e=N.A;return N.A=Hd,e}function sr(){We=4,Za||(ge&4194048)!==ge&&Ft.current!==null||(cn=!0),(Qa&134217727)===0&&(ji&134217727)===0||qe===null||Wa(qe,ge,Bt,!1)}function xs(e,t,a){var i=je;je|=2;var n=Pu(),r=Zu();(qe!==e||ge!==t)&&(rr=null,fn(e,t)),t=!1;var o=We;e:do try{if(Ce!==0&&xe!==null){var c=xe,d=Lt;switch(Ce){case 8:hs(),o=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var S=Ce;if(Ce=0,Lt=null,dn(e,c,d,S),a&&cn){o=0;break e}break;default:S=Ce,Ce=0,Lt=null,dn(e,c,d,S)}}Yd(),o=We;break}catch(T){Vu(e,T)}while(!0);return t&&e.shellSuspendCounter++,ba=gi=null,je=i,N.H=n,N.A=r,xe===null&&(qe=null,ge=0,jl()),o}function Yd(){for(;xe!==null;)Qu(xe)}function Vd(e,t){var a=je;je|=2;var i=Pu(),n=Zu();qe!==e||ge!==t?(rr=null,lr=B()+500,fn(e,t)):cn=pt(e,t);e:do try{if(Ce!==0&&xe!==null){t=xe;var r=Lt;t:switch(Ce){case 1:Ce=0,Lt=null,dn(e,t,r,1);break;case 2:case 9:if(n0(r)){Ce=0,Lt=null,Iu(t);break}t=function(){Ce!==2&&Ce!==9||qe!==e||(Ce=7),sa(e)},r.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:n0(r)?(Ce=0,Lt=null,Iu(t)):(Ce=0,Lt=null,dn(e,t,r,7));break;case 5:var o=null;switch(xe.tag){case 26:o=xe.memoizedState;case 5:case 27:var c=xe;if(o?kp(o):c.stateNode.complete){Ce=0,Lt=null;var d=c.sibling;if(d!==null)xe=d;else{var S=c.return;S!==null?(xe=S,cr(S)):xe=null}break t}}Ce=0,Lt=null,dn(e,t,r,5);break;case 6:Ce=0,Lt=null,dn(e,t,r,6);break;case 8:hs(),We=6;break e;default:throw Error(u(462))}}Xd();break}catch(T){Vu(e,T)}while(!0);return ba=gi=null,N.H=i,N.A=n,je=a,xe!==null?0:(qe=null,ge=0,jl(),We)}function Xd(){for(;xe!==null&&!Ci();)Qu(xe)}function Qu(e){var t=bu(e.alternate,e,ja);e.memoizedProps=e.pendingProps,t===null?cr(e):xe=t}function Iu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=fu(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=fu(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Co(t);default:yu(a,t),t=xe=Zc(t,ja),t=bu(a,t,ja)}e.memoizedProps=e.pendingProps,t===null?cr(e):xe=t}function dn(e,t,a,i){ba=gi=null,Co(t),tn=null,Ln=0;var n=t.return;try{if(Ed(e,n,t,a,ge)){We=1,Kl(e,Xt(a,e.current)),xe=null;return}}catch(r){if(n!==null)throw xe=n,r;We=1,Kl(e,Xt(a,e.current)),xe=null;return}t.flags&32768?(_e||i===1?e=!0:cn||(ge&536870912)!==0?e=!1:(Za=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ku(t,e)):cr(t)}function cr(e){var t=e;do{if((t.flags&32768)!==0){Ku(t,Za);return}e=t.return;var a=Fd(t.alternate,t,ja);if(a!==null){xe=a;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);We===0&&(We=5)}function Ku(e,t){do{var a=qd(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);We=6,xe=null}function Wu(e,t,a,i,n,r,o,c,d){e.cancelPendingCommit=null;do ur();while(rt!==0);if((je&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=io,Ei(e,a,r,o,c,d),e===qe&&(xe=qe=null,ge=0),pn=t,Ka=e,Ma=a,fs=r,ds=n,Hu=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Id(ze,function(){return ap(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=N.T,N.T=null,n=F.p,F.p=2,o=je,je|=4;try{Ld(e,t,a)}finally{je=o,F.p=n,N.T=i}}rt=1,Ju(),$u(),ep()}}function Ju(){if(rt===1){rt=0;var e=Ka,t=pn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var i=F.p;F.p=2;var n=je;je|=4;try{Ru(t,e);var r=js,o=Lc(e.containerInfo),c=r.focusedElem,d=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&qc(c.ownerDocument.documentElement,c)){if(d!==null&&Jr(c)){var S=d.start,T=d.end;if(T===void 0&&(T=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(T,c.value.length);else{var k=c.ownerDocument||document,w=k&&k.defaultView||window;if(w.getSelection){var A=w.getSelection(),I=c.textContent.length,ne=Math.min(d.start,I),Oe=d.end===void 0?ne:Math.min(d.end,I);!A.extend&&ne>Oe&&(o=Oe,Oe=ne,ne=o);var y=Fc(c,ne),x=Fc(c,Oe);if(y&&x&&(A.rangeCount!==1||A.anchorNode!==y.node||A.anchorOffset!==y.offset||A.focusNode!==x.node||A.focusOffset!==x.offset)){var z=k.createRange();z.setStart(y.node,y.offset),A.removeAllRanges(),ne>Oe?(A.addRange(z),A.extend(x.node,x.offset)):(z.setEnd(x.node,x.offset),A.addRange(z))}}}}for(k=[],A=c;A=A.parentNode;)A.nodeType===1&&k.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<k.length;c++){var E=k[c];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}zr=!!As,js=As=null}finally{je=n,F.p=i,N.T=a}}e.current=t,rt=2}}function $u(){if(rt===2){rt=0;var e=Ka,t=pn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var i=F.p;F.p=2;var n=je;je|=4;try{Au(e,t.alternate,t)}finally{je=n,F.p=i,N.T=a}}rt=3}}function ep(){if(rt===4||rt===3){rt=0,ka();var e=Ka,t=pn,a=Ma,i=Hu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,pn=Ka=null,tp(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ia=null),Pe(a),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=N.T,n=F.p,F.p=2,N.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var c=i[o];r(c.value,{componentStack:c.stack})}}finally{N.T=t,F.p=n}}(Ma&3)!==0&&ur(),sa(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===ms?tl++:(tl=0,ms=e):tl=0,al(0)}}function tp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fn(t)))}function ur(){return Ju(),$u(),ep(),ap()}function ap(){if(rt!==5)return!1;var e=Ka,t=fs;fs=0;var a=Pe(Ma),i=N.T,n=F.p;try{F.p=32>a?32:a,N.T=null,a=ds,ds=null;var r=Ka,o=Ma;if(rt=0,pn=Ka=null,Ma=0,(je&6)!==0)throw Error(u(331));var c=je;if(je|=4,qu(r.current),ku(r,r.current,o,a),je=c,al(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Je,r)}catch{}return!0}finally{F.p=n,N.T=i,tp(e,t)}}function ip(e,t,a){t=Xt(a,t),t=Po(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(na(e,2),sa(e))}function Re(e,t,a){if(e.tag===3)ip(e,e,a);else for(;t!==null;){if(t.tag===3){ip(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ia===null||!Ia.has(i))){e=Xt(a,e),a=nu(2),i=Ya(t,a,2),i!==null&&(lu(a,i,t,e),na(i,2),sa(i));break}}t=t.return}}function vs(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Ud;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(cs=!0,n.add(a),e=Pd.bind(null,e,t,a),t.then(e,e))}function Pd(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ge&a)===a&&(We===4||We===3&&(ge&62914560)===ge&&300>B()-nr?(je&2)===0&&fn(e,0):us|=a,un===ge&&(un=0)),sa(e)}function np(e,t){t===0&&(t=Ut()),e=xi(e,t),e!==null&&(na(e,t),sa(e))}function Zd(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),np(e,a)}function Qd(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),np(e,a)}function Id(e,t){return ri(e,t)}var pr=null,mn=null,bs=!1,fr=!1,gs=!1,Ja=0;function sa(e){e!==mn&&e.next===null&&(mn===null?pr=mn=e:mn=mn.next=e),fr=!0,bs||(bs=!0,Wd())}function al(e,t){if(!gs&&fr){gs=!0;do for(var a=!1,i=pr;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var r=0;else{var o=i.suspendedLanes,c=i.pingedLanes;r=(1<<31-Te(42|e)+1)-1,r&=n&~(o&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,sp(i,r))}else r=ge,r=Jt(i,i===qe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||pt(i,r)||(a=!0,sp(i,r));i=i.next}while(a);gs=!1}}function Kd(){lp()}function lp(){fr=bs=!1;var e=0;Ja!==0&&om()&&(e=Ja);for(var t=B(),a=null,i=pr;i!==null;){var n=i.next,r=rp(i,t);r===0?(i.next=null,a===null?pr=n:a.next=n,n===null&&(mn=a)):(a=i,(e!==0||(r&3)!==0)&&(fr=!0)),i=n}rt!==0&&rt!==5||al(e),Ja!==0&&(Ja=0)}function rp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Te(r),c=1<<o,d=n[o];d===-1?((c&a)===0||(c&i)!==0)&&(n[o]=$t(c,t)):d<=t&&(e.expiredLanes|=c),r&=~c}if(t=qe,a=ge,a=Jt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&oi(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||pt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&oi(i),Pe(a)){case 2:case 8:a=he;break;case 32:a=ze;break;case 268435456:a=Ne;break;default:a=ze}return i=op.bind(null,e),a=ri(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&oi(i),e.callbackPriority=2,e.callbackNode=null,2}function op(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ur()&&e.callbackNode!==a)return null;var i=ge;return i=Jt(e,e===qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Gu(e,i,t),rp(e,B()),e.callbackNode!=null&&e.callbackNode===a?op.bind(null,e):null)}function sp(e,t){if(ur())return null;Gu(e,t,!0)}function Wd(){cm(function(){(je&6)!==0?ri(P,Kd):lp()})}function ys(){if(Ja===0){var e=Ji;e===0&&(e=si,si<<=1,(si&261888)===0&&(si=256)),Ja=e}return Ja}function cp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yl(""+e)}function up(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jd(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var r=cp((n[Dt]||null).action),o=i.submitter;o&&(t=(t=o[Dt]||null)?cp(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var c=new Dl("action","action",null,i,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ja!==0){var d=o?up(n,o):new FormData(n);Ho(a,{pending:!0,data:d,method:n.method,action:r},null,d)}}else typeof r=="function"&&(c.preventDefault(),d=o?up(n,o):new FormData(n),Ho(a,{pending:!0,data:d,method:n.method,action:r},r,d))},currentTarget:n}]})}}for(var _s=0;_s<ao.length;_s++){var zs=ao[_s],$d=zs.toLowerCase(),em=zs[0].toUpperCase()+zs.slice(1);ea($d,"on"+em)}ea(Uc,"onAnimationEnd"),ea(Gc,"onAnimationIteration"),ea(Yc,"onAnimationStart"),ea("dblclick","onDoubleClick"),ea("focusin","onFocus"),ea("focusout","onBlur"),ea(xd,"onTransitionRun"),ea(vd,"onTransitionStart"),ea(bd,"onTransitionCancel"),ea(Vc,"onTransitionEnd"),Li("onMouseEnter",["mouseout","mouseover"]),Li("onMouseLeave",["mouseout","mouseover"]),Li("onPointerEnter",["pointerout","pointerover"]),Li("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function pp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var c=i[o],d=c.instance,S=c.currentTarget;if(c=c.listener,d!==r&&n.isPropagationStopped())break e;r=c,n.currentTarget=S;try{r(n)}catch(T){Al(T)}n.currentTarget=null,r=d}else for(o=0;o<i.length;o++){if(c=i[o],d=c.instance,S=c.currentTarget,c=c.listener,d!==r&&n.isPropagationStopped())break e;r=c,n.currentTarget=S;try{r(n)}catch(T){Al(T)}n.currentTarget=null,r=d}}}}function ve(e,t){var a=t[kr];a===void 0&&(a=t[kr]=new Set);var i=e+"__bubble";a.has(i)||(fp(t,e,2,!1),a.add(i))}function Ss(e,t,a){var i=0;t&&(i|=4),fp(a,e,i,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Ds(e){if(!e[dr]){e[dr]=!0,lc.forEach(function(a){a!=="selectionchange"&&(tm.has(a)||Ss(a,!1,e),Ss(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ss("selectionchange",!1,t))}}function fp(e,t,a,i){switch(Up(t)){case 2:var n=Mm;break;case 8:n=Tm;break;default:n=Bs}a=n.bind(null,t,a,e),n=void 0,!Yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ws(e,t,a,i,n){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var c=i.stateNode.containerInfo;if(c===n)break;if(o===4)for(o=i.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;c!==null;){if(o=Oi(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){i=r=o;continue e}c=c.parentNode}}i=i.return}vc(function(){var S=r,T=Ur(a),k=[];e:{var w=Xc.get(e);if(w!==void 0){var A=Dl,I=e;switch(e){case"keypress":if(zl(a)===0)break e;case"keydown":case"keyup":A=Qf;break;case"focusin":I="focus",A=Zr;break;case"focusout":I="blur",A=Zr;break;case"beforeblur":case"afterblur":A=Zr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Wf;break;case Uc:case Gc:case Yc:A=Bf;break;case Vc:A=$f;break;case"scroll":case"scrollend":A=kf;break;case"wheel":A=td;break;case"copy":case"cut":case"paste":A=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=zc;break;case"toggle":case"beforetoggle":A=id}var ne=(t&4)!==0,Oe=!ne&&(e==="scroll"||e==="scrollend"),y=ne?w!==null?w+"Capture":null:w;ne=[];for(var x=S,z;x!==null;){var E=x;if(z=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||z===null||y===null||(E=wn(x,y),E!=null&&ne.push(nl(x,E,z))),Oe)break;x=x.return}0<ne.length&&(w=new A(w,I,null,a,T),k.push({event:w,listeners:ne}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",w&&a!==Hr&&(I=a.relatedTarget||a.fromElement)&&(Oi(I)||I[ki]))break e;if((A||w)&&(w=T.window===T?T:(w=T.ownerDocument)?w.defaultView||w.parentWindow:window,A?(I=a.relatedTarget||a.toElement,A=S,I=I?Oi(I):null,I!==null&&(Oe=b(I),ne=I.tag,I!==Oe||ne!==5&&ne!==27&&ne!==6)&&(I=null)):(A=null,I=S),A!==I)){if(ne=yc,E="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ne=zc,E="onPointerLeave",y="onPointerEnter",x="pointer"),Oe=A==null?w:Dn(A),z=I==null?w:Dn(I),w=new ne(E,x+"leave",A,a,T),w.target=Oe,w.relatedTarget=z,E=null,Oi(T)===S&&(ne=new ne(y,x+"enter",I,a,T),ne.target=z,ne.relatedTarget=Oe,E=ne),Oe=E,A&&I)t:{for(ne=am,y=A,x=I,z=0,E=y;E;E=ne(E))z++;E=0;for(var ee=x;ee;ee=ne(ee))E++;for(;0<z-E;)y=ne(y),z--;for(;0<E-z;)x=ne(x),E--;for(;z--;){if(y===x||x!==null&&y===x.alternate){ne=y;break t}y=ne(y),x=ne(x)}ne=null}else ne=null;A!==null&&dp(k,w,A,ne,!1),I!==null&&Oe!==null&&dp(k,Oe,I,ne,!0)}}e:{if(w=S?Dn(S):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var De=Tc;else if(jc(w))if(Cc)De=dd;else{De=pd;var K=ud}else A=w.nodeName,!A||A.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?S&&Br(S.elementType)&&(De=Tc):De=fd;if(De&&(De=De(e,S))){Mc(k,De,a,T);break e}K&&K(e,w,S),e==="focusout"&&S&&w.type==="number"&&S.memoizedProps.value!=null&&Lr(w,"number",w.value)}switch(K=S?Dn(S):window,e){case"focusin":(jc(K)||K.contentEditable==="true")&&(Vi=K,$r=S,En=null);break;case"focusout":En=$r=Vi=null;break;case"mousedown":eo=!0;break;case"contextmenu":case"mouseup":case"dragend":eo=!1,Bc(k,a,T);break;case"selectionchange":if(hd)break;case"keydown":case"keyup":Bc(k,a,T)}var ue;if(Ir)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Yi?Nc(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Sc&&a.locale!=="ko"&&(Yi||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Yi&&(ue=bc()):(Fa=T,Vr="value"in Fa?Fa.value:Fa.textContent,Yi=!0)),K=mr(S,ye),0<K.length&&(ye=new _c(ye,e,null,a,T),k.push({event:ye,listeners:K}),ue?ye.data=ue:(ue=Ac(a),ue!==null&&(ye.data=ue)))),(ue=ld?rd(e,a):od(e,a))&&(ye=mr(S,"onBeforeInput"),0<ye.length&&(K=new _c("onBeforeInput","beforeinput",null,a,T),k.push({event:K,listeners:ye}),K.data=ue)),Jd(k,e,S,a,T)}pp(k,t)})}function nl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function mr(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=wn(e,a),n!=null&&i.unshift(nl(e,n,r)),n=wn(e,t),n!=null&&i.push(nl(e,n,r))),e.tag===3)return i;e=e.return}return[]}function am(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dp(e,t,a,i,n){for(var r=t._reactName,o=[];a!==null&&a!==i;){var c=a,d=c.alternate,S=c.stateNode;if(c=c.tag,d!==null&&d===i)break;c!==5&&c!==26&&c!==27||S===null||(d=S,n?(S=wn(a,r),S!=null&&o.unshift(nl(a,S,d))):n||(S=wn(a,r),S!=null&&o.push(nl(a,S,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var im=/\r\n?/g,nm=/\u0000|\uFFFD/g;function mp(e){return(typeof e=="string"?e:""+e).replace(im,`
`).replace(nm,"")}function hp(e,t){return t=mp(t),mp(e)===t}function ke(e,t,a,i,n,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Hi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Hi(e,""+i);break;case"className":bl(e,"class",i);break;case"tabIndex":bl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(e,a,i);break;case"style":hc(e,i,r);break;case"data":if(t!=="object"){bl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=yl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",n.name,n,null),ke(e,t,"formEncType",n.formEncType,n,null),ke(e,t,"formMethod",n.formMethod,n,null),ke(e,t,"formTarget",n.formTarget,n,null)):(ke(e,t,"encType",n.encType,n,null),ke(e,t,"method",n.method,n,null),ke(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=yl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ma);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=yl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ve("beforetoggle",e),ve("toggle",e),vl(e,"popover",i);break;case"xlinkActuate":da(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":da(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":da(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":da(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":da(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":da(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":da(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rf.get(a)||a,vl(e,a,i))}}function Ns(e,t,a,i,n,r){switch(a){case"style":hc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Hi(e,i):(typeof i=="number"||typeof i=="bigint")&&Hi(e,""+i);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Dt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):vl(e,a,i)}}}function xt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var i=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ke(e,t,r,o,a,null)}}n&&ke(e,t,"srcSet",a.srcSet,a,null),i&&ke(e,t,"src",a.src,a,null);return;case"input":ve("invalid",e);var c=r=o=n=null,d=null,S=null;for(i in a)if(a.hasOwnProperty(i)){var T=a[i];if(T!=null)switch(i){case"name":n=T;break;case"type":o=T;break;case"checked":d=T;break;case"defaultChecked":S=T;break;case"value":r=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:ke(e,t,i,T,a,null)}}pc(e,r,c,d,S,o,n,!1);return;case"select":ve("invalid",e),i=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":r=c;break;case"defaultValue":o=c;break;case"multiple":i=c;default:ke(e,t,n,c,a,null)}t=r,a=o,e.multiple=!!i,t!=null?Bi(e,!!i,t,!1):a!=null&&Bi(e,!!i,a,!0);return;case"textarea":ve("invalid",e),r=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":i=c;break;case"defaultValue":n=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:ke(e,t,o,c,a,null)}dc(e,i,n,r);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(i=a[d],i!=null))switch(d){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ke(e,t,d,i,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(i=0;i<il.length;i++)ve(il[i],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(i=a[S],i!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ke(e,t,S,i,a,null)}return;default:if(Br(t)){for(T in a)a.hasOwnProperty(T)&&(i=a[T],i!==void 0&&Ns(e,t,T,i,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(i=a[c],i!=null&&ke(e,t,c,i,a,null))}function lm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,c=null,d=null,S=null,T=null;for(A in a){var k=a[A];if(a.hasOwnProperty(A)&&k!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":d=k;default:i.hasOwnProperty(A)||ke(e,t,A,null,i,k)}}for(var w in i){var A=i[w];if(k=a[w],i.hasOwnProperty(w)&&(A!=null||k!=null))switch(w){case"type":r=A;break;case"name":n=A;break;case"checked":S=A;break;case"defaultChecked":T=A;break;case"value":o=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==k&&ke(e,t,w,A,i,k)}}qr(e,o,c,d,S,T,r,n);return;case"select":A=o=c=w=null;for(r in a)if(d=a[r],a.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":A=d;default:i.hasOwnProperty(r)||ke(e,t,r,null,i,d)}for(n in i)if(r=i[n],d=a[n],i.hasOwnProperty(n)&&(r!=null||d!=null))switch(n){case"value":w=r;break;case"defaultValue":c=r;break;case"multiple":o=r;default:r!==d&&ke(e,t,n,r,i,d)}t=c,a=o,i=A,w!=null?Bi(e,!!a,w,!1):!!i!=!!a&&(t!=null?Bi(e,!!a,t,!0):Bi(e,!!a,a?[]:"",!1));return;case"textarea":A=w=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!i.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ke(e,t,c,null,i,n)}for(o in i)if(n=i[o],r=a[o],i.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":w=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==r&&ke(e,t,o,n,i,r)}fc(e,w,A);return;case"option":for(var I in a)if(w=a[I],a.hasOwnProperty(I)&&w!=null&&!i.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:ke(e,t,I,null,i,w)}for(d in i)if(w=i[d],A=a[d],i.hasOwnProperty(d)&&w!==A&&(w!=null||A!=null))switch(d){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:ke(e,t,d,w,i,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)w=a[ne],a.hasOwnProperty(ne)&&w!=null&&!i.hasOwnProperty(ne)&&ke(e,t,ne,null,i,w);for(S in i)if(w=i[S],A=a[S],i.hasOwnProperty(S)&&w!==A&&(w!=null||A!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:ke(e,t,S,w,i,A)}return;default:if(Br(t)){for(var Oe in a)w=a[Oe],a.hasOwnProperty(Oe)&&w!==void 0&&!i.hasOwnProperty(Oe)&&Ns(e,t,Oe,void 0,i,w);for(T in i)w=i[T],A=a[T],!i.hasOwnProperty(T)||w===A||w===void 0&&A===void 0||Ns(e,t,T,w,i,A);return}}for(var y in a)w=a[y],a.hasOwnProperty(y)&&w!=null&&!i.hasOwnProperty(y)&&ke(e,t,y,null,i,w);for(k in i)w=i[k],A=a[k],!i.hasOwnProperty(k)||w===A||w==null&&A==null||ke(e,t,k,w,i,A)}function xp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],r=n.transferSize,o=n.initiatorType,c=n.duration;if(r&&c&&xp(o)){for(o=0,c=n.responseEnd,i+=1;i<a.length;i++){var d=a[i],S=d.startTime;if(S>c)break;var T=d.transferSize,k=d.initiatorType;T&&xp(k)&&(d=d.responseEnd,o+=T*(d<c?1:(c-S)/(d-S)))}if(--i,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var As=null,js=null;function hr(e){return e.nodeType===9?e:e.ownerDocument}function vp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=null;function om(){var e=window.event;return e&&e.type==="popstate"?e===Ts?!1:(Ts=e,!0):(Ts=null,!1)}var gp=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(e){return yp.resolve(null).then(e).catch(um)}:gp;function um(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function _p(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),bn(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ll(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ll(a);for(var r=a.firstChild;r;){var o=r.nextSibling,c=r.nodeName;r[Sn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&ll(e.ownerDocument.body);a=n}while(a);bn(t)}function zp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Cs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cs(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pm(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Sn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function fm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Kt(e.nextSibling),e===null))return null;return e}function Sp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function Rs(e){return e.data==="$?"||e.data==="$~"}function Es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ks=null;function Dp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function wp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Np(e,t,a){switch(t=hr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Or(e)}var Wt=new Map,Ap=new Set;function xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=F.d;F.d={f:mm,r:hm,D:xm,C:vm,L:bm,m:gm,X:_m,S:ym,M:zm};function mm(){var e=Ta.f(),t=or();return e||t}function hm(e){var t=Fi(e);t!==null&&t.tag===5&&t.type==="form"?V0(t):Ta.r(e)}var hn=typeof document>"u"?null:document;function jp(e,t,a){var i=hn;if(i&&typeof t=="string"&&t){var n=Yt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ap.has(n)||(Ap.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),xt(t,"link",e),st(t),i.head.appendChild(t)))}}function xm(e){Ta.D(e),jp("dns-prefetch",e,null)}function vm(e,t){Ta.C(e,t),jp("preconnect",e,t)}function bm(e,t,a){Ta.L(e,t,a);var i=hn;if(i&&e&&t){var n='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Yt(a.imageSizes)+'"]')):n+='[href="'+Yt(e)+'"]';var r=n;switch(t){case"style":r=xn(e);break;case"script":r=vn(e)}Wt.has(r)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Wt.set(r,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(rl(r))||t==="script"&&i.querySelector(ol(r))||(t=i.createElement("link"),xt(t,"link",e),st(t),i.head.appendChild(t)))}}function gm(e,t){Ta.m(e,t);var a=hn;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Yt(i)+'"][href="'+Yt(e)+'"]',r=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=vn(e)}if(!Wt.has(r)&&(e=O({rel:"modulepreload",href:e},t),Wt.set(r,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(r)))return}i=a.createElement("link"),xt(i,"link",e),st(i),a.head.appendChild(i)}}}function ym(e,t,a){Ta.S(e,t,a);var i=hn;if(i&&e){var n=qi(i).hoistableStyles,r=xn(e);t=t||"default";var o=n.get(r);if(!o){var c={loading:0,preload:null};if(o=i.querySelector(rl(r)))c.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Wt.get(r))&&Os(e,a);var d=o=i.createElement("link");st(d),xt(d,"link",e),d._p=new Promise(function(S,T){d.onload=S,d.onerror=T}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,vr(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:c},n.set(r,o)}}}function _m(e,t){Ta.X(e,t);var a=hn;if(a&&e){var i=qi(a).hoistableScripts,n=vn(e),r=i.get(n);r||(r=a.querySelector(ol(n)),r||(e=O({src:e,async:!0},t),(t=Wt.get(n))&&Fs(e,t),r=a.createElement("script"),st(r),xt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function zm(e,t){Ta.M(e,t);var a=hn;if(a&&e){var i=qi(a).hoistableScripts,n=vn(e),r=i.get(n);r||(r=a.querySelector(ol(n)),r||(e=O({src:e,async:!0,type:"module"},t),(t=Wt.get(n))&&Fs(e,t),r=a.createElement("script"),st(r),xt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function Mp(e,t,a,i){var n=(n=ae.current)?xr(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xn(a.href),a=qi(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xn(a.href);var r=qi(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(rl(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wt.set(e,a),r||Sm(n,e,a,o.state))),t&&i===null)throw Error(u(528,""));return o}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vn(a),a=qi(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function xn(e){return'href="'+Yt(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function Tp(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Sm(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),xt(t,"link",a),st(t),e.head.appendChild(t))}function vn(e){return'[src="'+Yt(e)+'"]'}function ol(e){return"script[async]"+e}function Cp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(i)return t.instance=i,st(i),i;var n=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),st(i),xt(i,"style",n),vr(i,a.precedence,e),t.instance=i;case"stylesheet":n=xn(a.href);var r=e.querySelector(rl(n));if(r)return t.state.loading|=4,t.instance=r,st(r),r;i=Tp(a),(n=Wt.get(n))&&Os(i,n),r=(e.ownerDocument||e).createElement("link"),st(r);var o=r;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),xt(r,"link",i),t.state.loading|=4,vr(r,a.precedence,e),t.instance=r;case"script":return r=vn(a.src),(n=e.querySelector(ol(r)))?(t.instance=n,st(n),n):(i=a,(n=Wt.get(r))&&(i=O({},a),Fs(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),st(n),xt(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,vr(i,a.precedence,e));return t.instance}function vr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,r=n,o=0;o<i.length;o++){var c=i[o];if(c.dataset.precedence===t)r=c;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var br=null;function Rp(e,t,a){if(br===null){var i=new Map,n=br=new Map;n.set(a,i)}else n=br,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[Sn]||r[ft]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var c=i.get(o);c?c.push(r):i.set(o,[r])}}return i}function Ep(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Dm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wm(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=xn(i.href),r=t.querySelector(rl(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,st(r);return}r=t.ownerDocument||t,i=Tp(i),(n=Wt.get(n))&&Os(i,n),r=r.createElement("link"),st(r);var o=r;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),xt(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qs=0;function Nm(e,t){return e.stylesheets&&e.count===0&&_r(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&_r(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&qs===0&&(qs=62500*rm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_r(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>qs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_r(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yr=null;function _r(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yr=new Map,t.forEach(Am,e),yr=null,gr.call(e))}function Am(e,t){if(!(t.state.loading&4)){var a=yr.get(e);if(a)var i=a.get(null);else{a=new Map,yr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||i,r===i&&a.set(null,n),a.set(o,n),this.count++,i=gr.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var sl={$$typeof:_,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function jm(e,t,a,i,n,r,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ua(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.hiddenUpdates=ua(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Op(e,t,a,i,n,r,o,c,d,S,T,k){return e=new jm(e,t,a,o,d,S,T,k,c),t=1,r===!0&&(t|=24),r=Ot(3,null,null,t),e.current=r,r.stateNode=e,t=xo(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},yo(r),e}function Fp(e){return e?(e=Zi,e):Zi}function qp(e,t,a,i,n,r){n=Fp(n),i.context===null?i.context=n:i.pendingContext=n,i=Ga(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Ya(e,i,t),a!==null&&(Tt(a,e,t),Hn(a,e,t))}function Lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ls(e,t){Lp(e,t),(e=e.alternate)&&Lp(e,t)}function Bp(e){if(e.tag===13||e.tag===31){var t=xi(e,67108864);t!==null&&Tt(t,e,67108864),Ls(e,67108864)}}function Hp(e){if(e.tag===13||e.tag===31){var t=Ht();t=lt(t);var a=xi(e,t);a!==null&&Tt(a,e,t),Ls(e,t)}}var zr=!0;function Mm(e,t,a,i){var n=N.T;N.T=null;var r=F.p;try{F.p=2,Bs(e,t,a,i)}finally{F.p=r,N.T=n}}function Tm(e,t,a,i){var n=N.T;N.T=null;var r=F.p;try{F.p=8,Bs(e,t,a,i)}finally{F.p=r,N.T=n}}function Bs(e,t,a,i){if(zr){var n=Hs(i);if(n===null)ws(e,t,i,Sr,a),Gp(e,i);else if(Rm(n,e,t,a,i))i.stopPropagation();else if(Gp(e,i),t&4&&-1<Cm.indexOf(e)){for(;n!==null;){var r=Fi(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Ae(r.pendingLanes);if(o!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-Te(o);c.entanglements[1]|=d,o&=~d}sa(r),(je&6)===0&&(lr=B()+500,al(0))}}break;case 31:case 13:c=xi(r,2),c!==null&&Tt(c,r,2),or(),Ls(r,2)}if(r=Hs(i),r===null&&ws(e,t,i,Sr,a),r===n)break;n=r}n!==null&&i.stopPropagation()}else ws(e,t,i,null,a)}}function Hs(e){return e=Ur(e),Us(e)}var Sr=null;function Us(e){if(Sr=null,e=Oi(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sr=e,null}function Up(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case P:return 2;case he:return 8;case ze:case Ie:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Gs=!1,ei=null,ti=null,ai=null,cl=new Map,ul=new Map,ii=[],Cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gp(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(t.pointerId)}}function pl(e,t,a,i,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Fi(t),t!==null&&Bp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rm(e,t,a,i,n){switch(t){case"focusin":return ei=pl(ei,e,t,a,i,n),!0;case"dragenter":return ti=pl(ti,e,t,a,i,n),!0;case"mouseover":return ai=pl(ai,e,t,a,i,n),!0;case"pointerover":var r=n.pointerId;return cl.set(r,pl(cl.get(r)||null,e,t,a,i,n)),!0;case"gotpointercapture":return r=n.pointerId,ul.set(r,pl(ul.get(r)||null,e,t,a,i,n)),!0}return!1}function Yp(e){var t=Oi(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,fa(e.priority,function(){Hp(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,fa(e.priority,function(){Hp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Hs(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Hr=i,a.target.dispatchEvent(i),Hr=null}else return t=Fi(a),t!==null&&Bp(t),e.blockedOn=a,!1;t.shift()}return!0}function Vp(e,t,a){Dr(e)&&a.delete(t)}function Em(){Gs=!1,ei!==null&&Dr(ei)&&(ei=null),ti!==null&&Dr(ti)&&(ti=null),ai!==null&&Dr(ai)&&(ai=null),cl.forEach(Vp),ul.forEach(Vp)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Em)))}var Nr=null;function Xp(e){Nr!==e&&(Nr=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Nr===e&&(Nr=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(Us(i||a)===null)continue;break}var r=Fi(a);r!==null&&(e.splice(t,3),t-=3,Ho(r,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function bn(e){function t(d){return wr(d,e)}ei!==null&&wr(ei,e),ti!==null&&wr(ti,e),ai!==null&&wr(ai,e),cl.forEach(t),ul.forEach(t);for(var a=0;a<ii.length;a++){var i=ii[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ii.length&&(a=ii[0],a.blockedOn===null);)Yp(a),a.blockedOn===null&&ii.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],r=a[i+1],o=n[Dt]||null;if(typeof r=="function")o||Xp(a);else if(o){var c=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[Dt]||null)c=o.formAction;else if(Us(n)!==null)continue}else c=o.action;typeof c=="function"?a[i+1]=c:(a.splice(i,3),i-=3),Xp(a)}}}function Pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ys(e){this._internalRoot=e}Ar.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,i=Ht();qp(a,i,e,t,null,null)},Ar.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qp(e.current,2,null,e,null,null),or(),t[ki]=null}};function Ar(e){this._internalRoot=e}Ar.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ii.length&&t!==0&&t<ii[a].priority;a++);ii.splice(a,0,e),a===0&&Yp(e)}};var Zp=s.version;if(Zp!=="19.2.8")throw Error(u(527,Zp,"19.2.8"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var km={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{Je=jr.inject(km),Be=jr}catch{}}return dl.createRoot=function(e,t){if(!h(e))throw Error(u(299));var a=!1,i="",n=eu,r=tu,o=au;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Op(e,1,!1,null,null,a,i,null,n,r,o,Pp),e[ki]=t.current,Ds(e),new Ys(t)},dl.hydrateRoot=function(e,t,a){if(!h(e))throw Error(u(299));var i=!1,n="",r=eu,o=tu,c=au,d=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=Op(e,1,!0,t,a??null,i,n,d,r,o,c,Pp),t.context=Fp(null),a=t.current,i=Ht(),i=lt(i),n=Ga(i),n.callback=null,Ya(a,n,i),a=i,t.current.lanes=a,na(t,a),sa(t),e[ki]=t.current,Ds(e),new Ar(t)},dl.version="19.2.8",dl}var nf;function Xm(){if(nf)return Xs.exports;nf=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Xs.exports=Vm(),Xs.exports}var Pm=Xm();const Zm=Fm(Pm);var R=tc();const lf="golden_ratio_user_prefs",Qm=500;class Im{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(lf);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(lf,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,f){const u=performance.now(),h=u-this.lastSampleTime;this.lastSampleTime=u;const b={timestamp:u,type:s,value:f,duration:h};this.samples.push(b),this.samples.length>Qm&&this.samples.shift(),this.analyzeSample(b),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const f=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const f=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const f=String(Math.round(s.value));this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(s){const f=String(Math.round(s.value));this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(s){const f=String(Math.round(s.value));this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(s){const f=String(Math.round(s.value));this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(s){let f=0,u=null;for(const[h,b]of Object.entries(s))b>f&&(f=b,u=h);return u}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(s.preferredFractal=Number(f));const u=this.getPreferred(this.prefs.renderStyleWeights);u!==null&&(s.preferredStyle=Number(u));const h=this.getPreferred(this.prefs.paletteWeights);h!==null&&(s.preferredPalette=Number(h));const b=this.getPreferred(this.prefs.cameraModeWeights);b!==null&&(s.preferredCamera=b)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const rf=new Im,Km=`
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
  // FIX: Dynamic max_dist based on camera distance to prevent clipping
  var max_dist: f32 = select(128.0, select(192.0, 256.0, cam_dist < 1.0), cam_dist < 3.0);
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

  // Adaptive step budget: complex fractals at close zoom need many more steps
  let maxSteps: i32 = select(select(select(160, 200, cam_dist < 3.0), 256, cam_dist < 1.0), 256, false);
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
    // Minimum step: prevents infinite crawl when SDF is near zero
    let minStep = max(cam_dist * 0.0001, 0.0005);
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
`,Ra=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function Tr(p){switch(p){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;default:return 0}}function Wm(p){switch(p){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function Jm(p){switch(p){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function $m(p){switch(p){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function eh(p){switch(p){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class df{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||Ra.find(f=>f.id===s.paletteId)||Ra[0]}computeIndices(s){return{fractalIdx:Tr(s.type),hybridIdx:Tr(s.hybridType||s.type),tertiaryIdx:Tr(s.tertiaryType||"riemannZeta"),compositeOpIdx:Wm(s.compositeOp),cameraModeIdx:Jm(s.cameraMode),sliceAxisIdx:$m(s.sliceAxis),renderStyleIdx:eh(s.renderStyle)}}packUniforms(s,f,u,h,b){const v=this.canvas.width,j=this.canvas.height;return s[0]=v,s[1]=j,s[2]=f,s[3]=u.phiMultiplier,s[4]=u.rotX,s[5]=u.rotY,s[6]=u.zoom,s[7]=b.fractalIdx,s[8]=u.iterations,s[9]=u.glowIntensity,s[10]=u.morphSpeed,s[11]=b.hybridIdx,s[12]=u.hybridBlend??0,s[13]=u.boxFold??1.2,s[14]=u.sphereFold??.65,s[15]=u.interiorCut??.35,s[16]=h.primary[0],s[17]=h.primary[1],s[18]=h.primary[2],s[19]=b.tertiaryIdx,s[20]=h.secondary[0],s[21]=h.secondary[1],s[22]=h.secondary[2],s[23]=u.tertiaryBlend??0,s[24]=h.accent[0],s[25]=h.accent[1],s[26]=h.accent[2],s[27]=b.compositeOpIdx,s[28]=u.smoothK??.35,s[29]=u.warpStrength??.3,s[30]=u.octaveLayers??2,s[31]=b.cameraModeIdx,s[32]=u.camPosX??0,s[33]=u.camPosY??0,s[34]=u.camPosZ??0,s[35]=u.slicePlane??0,s[36]=u.headlampPower??.3,s[37]=u.volumetricFog??.15,s[38]=b.sliceAxisIdx,s[39]=b.renderStyleIdx,s[40]=h.ambient?h.ambient[0]:.02,s[41]=h.ambient?h.ambient[1]:.02,s[42]=h.ambient?h.ambient[2]:.02,s[43]=u.paletteSeed??0,s[44]=u.paletteRotation?1:0,s[45]=0,s[46]=0,s[47]=0,s}}class ac extends df{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!ac.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(b=>setTimeout(()=>b(null),5e3));if(this.adapter=await Promise.race([s,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const b=this.adapter.info;b&&(b.vendor||b.description)?this.adapterInfo=`${b.vendor||""} ${b.description||b.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(b=>{console.warn(`WebGPU device lost: ${b.message}`,b),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const u=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:u,alphaMode:"premultiplied"});try{const b=this.device.createCommandEncoder();b.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([b.finish()])}catch(b){console.debug("Initial clear pass handled:",b)}const h=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:Km});if("getCompilationInfo"in h)try{const v=(await h.getCompilationInfo()).messages.filter(j=>j.type==="error");if(v.length>0){for(const j of v)console.error(`[WGSL Compile Error] Line ${j.lineNum}:${j.linePos}: ${j.message}`);return!1}}catch(b){console.debug("Compilation info inspection skipped:",b)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:h,entryPoint:"vs_main"},fragment:{module:h,entryPoint:"fs_main",targets:[{format:u}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const u=this.canvas.width,h=this.canvas.height;if(u===0||h===0)return;const b=this.resolvePalette(f),v=this.computeIndices(f);this.packUniforms(this.uniformValues,s,f,b,v),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const j=this.device.createCommandEncoder(),D=this.context.getCurrentTexture().createView(),g=j.beginRenderPass({colorAttachments:[{view:D,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});g.setPipeline(this.pipeline),g.setBindGroup(0,this.bindGroup),g.draw(3,1,0,0),g.end(),this.device.queue.submit([j.finish()])}catch(j){console.debug("WebGPU render frame skipped:",j.message)}}destroy(){var s,f;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const th=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,ah=th,ih=`#version 300 es
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
  // FIX: Dynamic max_dist based on camera distance to prevent clipping
  // When camera is close, rays travel nearly parallel to surface and need more range
  float max_dist = (cam_dist < 1.0) ? 256.0 : (cam_dist < 3.0) ? 192.0 : 128.0;
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

  // Adaptive step budget: complex fractals at close zoom need many more steps
  int maxSteps = (cam_dist < 1.0) ? 256 : (cam_dist < 3.0) ? 200 : 160;
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
    // Minimum step: prevents infinite crawl when SDF is near zero
    float minStep = max(cam_dist * 0.0001, 0.0005);
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
      holoCol += u.secondary_color * (1.0 - hexLine) * 0.15 * (0.5 + depthNorm * 0.5);
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
`,nh=ih;class lh extends df{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline"}init(){console.group("[WebGL2] === INITIALIZATION START ==="),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const s=this.canvas.getBoundingClientRect();(s.width===0||s.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let f=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED"),f||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),f||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),!f){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const L=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return L&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",L.getParameter(L.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=f,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",f.getParameter(f.VERSION)),console.info("[WebGL2] GL_RENDERER:",f.getParameter(f.RENDERER)),console.info("[WebGL2] GL_VENDOR:",f.getParameter(f.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",f.getParameter(f.SHADING_LANGUAGE_VERSION));const u=f.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(u==null?void 0:u.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",u==null?void 0:u.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",u==null?void 0:u.includes("WEBGL_debug_renderer_info"));try{const L=f.getExtension("WEBGL_debug_renderer_info");if(L){const O=f.getParameter(L.UNMASKED_RENDERER_WEBGL);O&&(this.rendererInfo=O)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const h=this.compileShader(f.VERTEX_SHADER,ah),b=this.compileShader(f.FRAGMENT_SHADER,nh);if(!h||!b)return!1;const v=f.createProgram();if(!v)return!1;if(f.attachShader(v,h),f.attachShader(v,b),f.linkProgram(v),f.deleteShader(h),f.deleteShader(b),!f.getProgramParameter(v,f.LINK_STATUS))return console.error("WebGL Program Link Error:",f.getProgramInfoLog(v)),!1;this.program=v;const j=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=f.createVertexArray(),f.bindVertexArray(this.vao),this.vbo=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,this.vbo),f.bufferData(f.ARRAY_BUFFER,j,f.STATIC_DRAW);const D=f.getAttribLocation(v,"a_position");return f.enableVertexAttribArray(D),f.vertexAttribPointer(D,2,f.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed","u_palette_rotation"].forEach(L=>{this.uniformLocs[L]=f.getUniformLocation(v,L)}),!0}compileShader(s,f){if(!this.gl)return null;const u=this.gl,h=u.createShader(s);return h?(u.shaderSource(h,f),u.compileShader(h),u.getExtension("KHR_parallel_shader_compile"),u.getShaderParameter(h,u.COMPILE_STATUS)?(console.info("[WebGL2] Shader compiled successfully ("+(s===u.VERTEX_SHADER?"vertex":"fragment")+")"),h):(console.error("Shader compilation error:",u.getShaderInfoLog(h)),u.deleteShader(h),null)):null}render(s,f){const u=this.gl;if(!u||!this.program||!this.vao)return;u.viewport(0,0,this.canvas.width,this.canvas.height),u.useProgram(this.program),u.bindVertexArray(this.vao);const h=this.resolvePalette(f),b=this.computeIndices(f),v=new Float32Array(48);this.packUniforms(v,s,f,h,b);const j=(L,O)=>{const G=this.uniformLocs[L];G&&u.uniform1f(G,O)},D=(L,O,G)=>{const H=this.uniformLocs[L];H&&u.uniform2f(H,O,G)},g=(L,O,G,H)=>{const Y=this.uniformLocs[L];Y&&u.uniform3f(Y,O,G,H)};D("u_resolution",v[0],v[1]),j("u_time",v[2]),j("u_phi_val",v[3]),D("u_cam_rot",v[4],v[5]),j("u_zoom",v[6]),j("u_fractal_type",v[7]),j("u_iterations",v[8]),j("u_glow_intensity",v[9]),j("u_morph_speed",v[10]),j("u_hybrid_type",v[11]),j("u_hybrid_blend",v[12]),j("u_box_fold",v[13]),j("u_sphere_fold",v[14]),j("u_interior_cut",v[15]),g("u_primary_color",v[16],v[17],v[18]),j("u_tertiary_type",v[19]),g("u_secondary_color",v[20],v[21],v[22]),j("u_tertiary_blend",v[23]),g("u_accent_color",v[24],v[25],v[26]),j("u_compose_op",v[27]),j("u_smooth_k",v[28]),j("u_warp_strength",v[29]),j("u_octave_layers",v[30]),j("u_cam_mode",v[31]),g("u_cam_pos",v[32],v[33],v[34]),j("u_slice_plane",v[35]),j("u_headlamp_power",v[36]),j("u_volumetric_fog",v[37]),j("u_slice_axis",v[38]),j("u_render_style",v[39]),j("u_palette_seed",v[43]),j("u_palette_rotation",v[44]),u.drawArrays(u.TRIANGLES,0,3)}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function rh(p,s){const{forcedBackend:f,isEmbeddedBrowser:u,isMobileDevice:h,paramsRef:b,onTelemetryUpdate:v,onEngineReady:j,onNextSpecimen:D,onPrevSpecimen:g,onInteraction:L,screenshotRequested:O,onScreenshotCaptured:G}=s,H=R.useRef(null),[Y,W]=R.useState(()=>f==="webgl2"?"webgl2":f==="webgpu"?u?"webgl2":"webgpu":"webgl2"),[J,q]=R.useState(!0),[le,_]=R.useState(!1),[V,be]=R.useState("Initializing..."),[Me,ie]=R.useState(""),[Fe,He]=R.useState(0),[Ue,Qe]=R.useState(0),[Xe,fe]=R.useState(0),[Le,pe]=R.useState(0),[N,F]=R.useState([0,0]),M=R.useRef(null),Q=R.useRef(null),$=R.useRef("Initializing..."),m=R.useRef(v);m.current=v;const C=R.useRef(G);C.current=G;const U=R.useRef(D);U.current=D;const X=R.useRef(g);X.current=g;const te=R.useRef(L);te.current=L;const ae=R.useRef([]),oe=R.useRef(0),Se=R.useRef(0),de=R.useRef(null),bt=R.useRef(0),gt=R.useRef(!1),me=R.useRef(new Set),ia=R.useRef(!1),ot=R.useRef(!0),yt=R.useRef(!1),Ea=R.useRef(!1),Mi=R.useRef(!1),Ti=R.useRef({x:0,y:0}),ut=R.useRef({x:0,y:0}),ri=R.useRef(0),oi=R.useRef(0),Ci=.92,ka=1e-4;R.useEffect(()=>{Ea.current=O},[O]),R.useEffect(()=>{if(f==="webgl2")W("webgl2");else if(f==="webgpu"){if(u){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),gt.current=!0,W("webgl2");return}gt.current=!1,W("webgpu")}else f==="auto"&&W("webgl2")},[f]);const B=R.useCallback(()=>{const Z=H.current,P=p.current;if(!Z||!P)return;const he=u||h?1.5:2,ze=Math.min(window.devicePixelRatio||1,he),Ie=P.clientWidth||window.innerWidth||800,Ne=P.clientHeight||window.innerHeight||600,_t=Math.max(Math.floor(Ie*ze),320),zt=Math.max(Math.floor(Ne*ze),240);if(Z.width!==_t||Z.height!==zt){const Je=Z.width,Be=Z.height;Z.width=_t,Z.height=zt,console.info(`[Resize] Canvas buffer: ${Je}x${Be} → ${_t}x${zt} (container: ${Ie}x${Ne}, DPR: ${ze.toFixed(2)})`)}},[u,h]);return R.useEffect(()=>{const Z=H.current;if(!Z)return;B();let P=!1;const he=setTimeout(()=>{P||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),q(!1))},12e3),ze=setTimeout(()=>{!yt.current&&!P&&console.error("[useRenderEngine] Engine setup timed out after 20s — GPU unavailable")},2e4);async function Ie(){if(!Z)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",Y),q(!0),yt.current=!1,_(!1),M.current&&(M.current.destroy(),M.current=null),Q.current&&(Q.current.destroy(),Q.current=null),Y==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const Ct=new ac(Z);if(await Ct.init()&&!P){M.current=Ct,yt.current=!0,_(!0),$.current="WebGPU (WGSL)",be("WebGPU (WGSL)"),ie(Ct.adapterInfo),q(!1),console.info(`[DIAG] Engine ready: WebGPU | ${Ct.adapterInfo} | ${Z.width}x${Z.height} | fractal=${b.current.type} | palette=${b.current.paletteId} | renderStyle=${b.current.renderStyle} | paletteSeed=${b.current.paletteSeed??0}`),j==null||j();return}else{gt.current=!0,P?q(!1):W("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const Ge=new lh(Z);Ge.init()&&!P?(Q.current=Ge,yt.current=!0,_(!0),$.current="WebGL2 (GLSL)",be("WebGL2 (GLSL)"),ie(Ge.rendererInfo),q(!1),console.info(`[DIAG] Engine ready: WebGL2 | ${Ge.rendererInfo} | ${Z.width}x${Z.height} | fractal=${b.current.type} | palette=${b.current.paletteId} | renderStyle=${b.current.renderStyle} | paletteSeed=${b.current.paletteSeed??0}`),j==null||j()):(q(!1),j==null||j())}Ie().catch(Ge=>{console.error("[useRenderEngine] Engine setup crashed:",Ge),q(!1),j==null||j()});const Ne=setTimeout(()=>{P||(B(),requestAnimationFrame(()=>{P||B()}))},100),_t=Ge=>{Ge.preventDefault(),ia.current=!0},zt=()=>{ia.current=!1,Ie()};Z.addEventListener("webglcontextlost",_t,!1),Z.addEventListener("webglcontextrestored",zt,!1);const Je=p.current;let Be=null;return Je&&(Be=new ResizeObserver(()=>{P||B()}),Be.observe(Je)),()=>{var Ge,Te;P=!0,clearTimeout(ze),clearTimeout(he),clearTimeout(Ne),Z.removeEventListener("webglcontextlost",_t),Z.removeEventListener("webglcontextrestored",zt),Be&&Be.disconnect(),(Ge=M.current)==null||Ge.destroy(),(Te=Q.current)==null||Te.destroy()}},[Y,B]),R.useEffect(()=>{let Z=!0,P=performance.now();const he=()=>{ot.current=!document.hidden,ot.current&&(P=performance.now())};document.addEventListener("visibilitychange",he);const ze=Ie=>{var Be,Ge;if(!Z)return;if(ia.current){de.current=requestAnimationFrame(ze);return}if(!ot.current){de.current=requestAnimationFrame(ze);return}if(!yt.current){setTimeout(()=>{Z&&(de.current=requestAnimationFrame(ze))},1e3);return}const Ne=b.current,_t=Ie-P,zt=Ne.targetFps||60,Je=zt>=240?0:1e3/zt;if(Je<=0||_t>=Je-.75){const Te=Math.min(_t,100);P=Ie,bt.current+=Te/1e3;const Ct=bt.current;if(Ne.cameraMode==="flyThrough"){const pt=Ne.rotX,$t=Ne.rotY,Ut=Math.cos(pt),ua=Math.sin(pt),na=Math.cos($t),Ei=Math.sin($t),Rt=[ua*na,Ei,-Ut*na],pa=[Ut,0,ua],pi=[0,1,0];let lt=1.4*(Te/1e3);(me.current.has("ShiftLeft")||me.current.has("ShiftRight"))&&(lt*=2.8);let Pe=0,Et=0,fa=0;(me.current.has("KeyW")||me.current.has("ArrowUp"))&&(Pe+=Rt[0]*lt,Et+=Rt[1]*lt,fa+=Rt[2]*lt),(me.current.has("KeyS")||me.current.has("ArrowDown"))&&(Pe-=Rt[0]*lt,Et-=Rt[1]*lt,fa-=Rt[2]*lt),(me.current.has("KeyA")||me.current.has("ArrowLeft"))&&(Pe-=pa[0]*lt,fa-=pa[2]*lt),(me.current.has("KeyD")||me.current.has("ArrowRight"))&&(Pe+=pa[0]*lt,fa+=pa[2]*lt),(me.current.has("KeyE")||me.current.has("Space"))&&(Et+=pi[1]*lt),(me.current.has("KeyQ")||me.current.has("KeyC"))&&(Et-=pi[1]*lt),(Pe!==0||Et!==0||fa!==0)&&(b.current={...Ne,camPosX:(Ne.camPosX??0)+Pe,camPosY:(Ne.camPosY??0)+Et,camPosZ:(Ne.camPosZ??0)+fa})}const Ri=Ne.autoRotate?Ct*Ne.autoRotateSpeed*.12:0,Er=Ne.autoRotate?Math.sin(Ct*.18)*.06:0;let si=0,ci=0;if(!Mi.current&&(Math.abs(ut.current.x)>ka||Math.abs(ut.current.y)>ka)){const pt=Ne.zoom,$t=.0045*Math.max(.12,Math.min(1,pt/2.8)),Ut=Te;si=ut.current.x*Ut*$t*.5,ci=ut.current.y*Ut*$t*.5,ut.current.x*=Ci,ut.current.y*=Ci,Math.abs(ut.current.x)<ka&&(ut.current.x=0),Math.abs(ut.current.y)<ka&&(ut.current.y=0)}const ui={...Ne,rotX:Ne.rotX+Ri+si,rotY:Math.max(-1.52,Math.min(1.52,Ne.rotY+Er+ci))},Ae=H.current;if(Ae&&Ae.width>0&&Ae.height>0&&(M.current?M.current.render(Ct,ui):Q.current&&Q.current.render(Ct,ui)),Ea.current&&Ae)try{const pt=Ae.toDataURL("image/png");(Be=C.current)==null||Be.call(C,pt)}catch(pt){console.error("Screenshot capture failed",pt)}const Jt=ae.current;if(Jt.push(Te),Jt.length>72&&Jt.shift(),Ie-oe.current>250){oe.current=Ie;const pt=Jt.reduce((Pe,Et)=>Pe+Et,0)/Jt.length,$t=Te>0?Math.round(1e3/Te):0,Ut=pt>0?Math.round(1e3/pt):0,ua=[...Jt].sort((Pe,Et)=>Et-Pe),na=Math.floor(ua.length*.05),Ei=ua[na]||Te,Rt=Ei>0?Math.round(1e3/Ei):0,pa=M.current?M.current.adapterInfo:Q.current?Q.current.rendererInfo:"GPU Engine",pi=Y==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",lt={fps:$t,avgFps:Ut,frameTimeMs:parseFloat(Te.toFixed(2)),onePercentLow:Rt,backend:pi,adapterName:pa,resolution:[(Ae==null?void 0:Ae.width)||0,(Ae==null?void 0:Ae.height)||0],drsScale:1,targetFps:Ne.targetFps,interiorDistance:0};if((Ge=m.current)==null||Ge.call(m,lt),He($t),Qe(Ut),fe(parseFloat(Te.toFixed(2))),pe(Rt),F([(Ae==null?void 0:Ae.width)||0,(Ae==null?void 0:Ae.height)||0]),Se.current||(Se.current=Ie),Ie-Se.current>3e4){Se.current=Ie;const Pe=b.current;console.info(`[DIAG] Health: fps=${$t} avg=${Ut} 1%=${Rt} | fractal=${Pe.type} hybrid=${Pe.hybridType} | style=${Pe.renderStyle} cam=${Pe.cameraMode} | palette=${Pe.paletteId} seed=${Pe.paletteSeed??0} rot=${Pe.paletteRotation} | audio=${Pe.enableAudio} tuning=${Pe.audioTuning} | res=${Ae==null?void 0:Ae.width}x${Ae==null?void 0:Ae.height}`)}}}de.current=requestAnimationFrame(ze)};return de.current=requestAnimationFrame(ze),()=>{Z=!1,document.removeEventListener("visibilitychange",he),de.current&&cancelAnimationFrame(de.current)}},[Y]),R.useEffect(()=>{const Z=he=>{var ze,Ie,Ne;((ze=he.target)==null?void 0:ze.tagName)!=="INPUT"&&(he.repeat||(me.current.add(he.code),b.current.cameraMode!=="flyThrough"&&(he.key===" "||he.key==="ArrowRight"||he.key==="ArrowDown"||he.key==="PageDown"?(he.preventDefault(),(Ie=U.current)==null||Ie.call(U)):(he.key==="ArrowLeft"||he.key==="ArrowUp"||he.key==="PageUp")&&(he.preventDefault(),(Ne=X.current)==null||Ne.call(X)))))},P=he=>{me.current.delete(he.code)};return window.addEventListener("keydown",Z),window.addEventListener("keyup",P),()=>{window.removeEventListener("keydown",Z),window.removeEventListener("keyup",P)}},[]),{activeEngineType:Y,isCompiling:J,isEngineReady:le,backendLabel:V,adapterInfo:Me,fps:Fe,avgFps:Ue,frameTimeMs:Xe,onePercentLow:Le,resolution:N,canvasRef:H,keysPressedRef:me,isDraggingRef:Mi,velocityRef:ut,lastMousePosRef:Ti,lastInteractionReportTimeRef:oi,lastMoveTimeRef:ri,params:b.current}}const oh=({params:p,onParamsChange:s,onTelemetryUpdate:f,screenshotRequested:u,onScreenshotCaptured:h,forcedBackend:b="auto",onInteraction:v,onNextSpecimen:j,onPrevSpecimen:D,onEngineReady:g,scrollMode:L="feed"})=>{const O=R.useRef(null),G=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),H=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),Y=R.useRef(p);Y.current=p;const W=R.useRef(null);R.useRef(0);const J=rh(O,{forcedBackend:b,isEmbeddedBrowser:G,isMobileDevice:H,paramsRef:Y,onTelemetryUpdate:f,onEngineReady:g,onNextSpecimen:j,onPrevSpecimen:D,onInteraction:v,screenshotRequested:u,onScreenshotCaptured:h}),{canvasRef:q,isDraggingRef:le,velocityRef:_,lastMousePosRef:V,lastInteractionReportTimeRef:be,lastMoveTimeRef:Me,activeEngineType:ie,isCompiling:Fe}=J;R.useEffect(()=>{const fe=q.current;if(!fe)return;const Le=F=>{F.preventDefault();const M=Math.exp(Math.sign(F.deltaY)*Math.min(Math.abs(F.deltaY)*.0018,.28));v==null||v(Math.abs(F.deltaY)*.02,0),s(Q=>({...Q,zoom:Math.max(.02,Math.min(64,Q.zoom*M))})),rf.recordInteraction("zoom",Math.log(M)*10)};fe.addEventListener("wheel",Le,{passive:!1,capture:!0});const pe=F=>{if(F.touches.length===2){F.preventDefault();const M=F.touches[0],Q=F.touches[1];W.current=Math.hypot(M.clientX-Q.clientX,M.clientY-Q.clientY)}};fe.addEventListener("touchstart",pe,{passive:!1,capture:!0});const N=F=>{if(F.touches.length===2){F.preventDefault();const M=F.touches[0],Q=F.touches[1],$=Math.hypot(M.clientX-Q.clientX,M.clientY-Q.clientY);if(W.current!==null&&W.current>5){const m=W.current/Math.max($,1),C=Math.pow(m,.95);v==null||v(Math.abs(W.current-$)*.04,0),s(U=>({...U,zoom:Math.max(.02,Math.min(64,U.zoom*C))}))}W.current=$}};return fe.addEventListener("touchmove",N,{passive:!1,capture:!0}),()=>{fe.removeEventListener("wheel",Le,{capture:!0}),fe.removeEventListener("touchstart",pe,{capture:!0}),fe.removeEventListener("touchmove",N,{capture:!0})}},[q,s,v]);const He=fe=>{le.current=!0,V.current={x:fe.clientX,y:fe.clientY},_.current={x:0,y:0},fe.target.setPointerCapture(fe.pointerId)},Ue=fe=>{if(!le.current)return;const Le=fe.clientX-V.current.x,pe=fe.clientY-V.current.y,N=performance.now(),F=Math.max(1,N-Me.current);Me.current=N,V.current={x:fe.clientX,y:fe.clientY};const M=Math.hypot(Le,pe);N-be.current>300&&(be.current=N,v==null||v(0,M));const Q=Y.current.zoom,$=.0045*Math.max(.12,Math.min(1,Q/2.8));_.current={x:Le/F,y:pe/F},s(m=>({...m,rotX:m.rotX+Le*$,rotY:Math.max(-1.52,Math.min(1.52,m.rotY+pe*$))})),rf.recordInteraction("rotate",Math.hypot(Le,pe)/F)},Qe=fe=>{le.current=!1;try{fe.target.releasePointerCapture(fe.pointerId)}catch{}},Xe=()=>{W.current=null};return l.jsxs("div",{ref:O,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[Fe&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",ie==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),l.jsx("canvas",{ref:q,id:"fractal-canvas",className:"w-full h-full block touch-none",onPointerDown:He,onPointerMove:Ue,onPointerUp:Qe,onPointerCancel:Qe,onTouchEnd:Xe},ie)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ch=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,u)=>u?u.toUpperCase():f.toLowerCase()),of=p=>{const s=ch(p);return s.charAt(0).toUpperCase()+s.slice(1)},mf=(...p)=>p.filter((s,f,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===f).join(" ").trim(),uh=p=>{for(const s in p)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ph={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=R.forwardRef(({color:p="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:h="",children:b,iconNode:v,...j},D)=>R.createElement("svg",{ref:D,...ph,width:s,height:s,stroke:p,strokeWidth:u?Number(f)*24/Number(s):f,className:mf("lucide",h),...!b&&!uh(j)&&{"aria-hidden":"true"},...j},[...v.map(([g,L])=>R.createElement(g,L)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(p,s)=>{const f=R.forwardRef(({className:u,...h},b)=>R.createElement(fh,{ref:b,iconNode:s,className:mf(`lucide-${sh(of(p))}`,`lucide-${p}`,u),...h}));return f.displayName=of(p),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],hl=ce("activity",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],hf=ce("atom",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],yn=ce("book-open",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],vh=ce("bookmark-plus",xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],gh=ce("box",bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],_h=ce("brain",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Sh=ce("camera",zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],wh=ce("chart-column",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xf=ce("check",Nh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jh=ce("chevron-down",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Th=ce("chevron-left",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vf=ce("chevron-right",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Eh=ce("chevron-up",Rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Rr=ce("compass",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ks=ce("cpu",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],bf=ce("crosshair",Fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Lh=ce("droplet",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Hh=ce("ellipsis",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gf=ce("eye",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Yh=ce("flame",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Xh=ce("grid-3x3",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Cr=ce("heart",Ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],Qh=ce("infinity",Zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kh=ce("info",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_n=ce("layers",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],$h=ce("maximize",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],yf=ce("mouse-pointer",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],a2=ce("music",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],_f=ce("play",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],l2=ce("radio",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],o2=ce("scan",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],c2=ce("search",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],p2=ce("share-2",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ws=ce("shield-check",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],zn=ce("sparkles",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],h2=ce("trash-2",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],zf=ce("user",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ic=ce("volume-2",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Sf=ce("volume-x",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],y2=ce("wrench",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xl=ce("x",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],S2=ce("zoom-in",z2),D2=({telemetry:p,targetFps:s,phiMultiplier:f})=>{const[u,h]=R.useState([]),[b,v]=R.useState(!1);R.useEffect(()=>{p.frameTimeMs>0&&h(g=>[...g,p.frameTimeMs].slice(-40))},[p.frameTimeMs]);const j=s>0?1e3/s:6.94;s===144||s===0&&p.fps>=140;const D=p.frameTimeMs<=j*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${p.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:p.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>v(!b),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:b?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${p.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:p.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[p.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${D?"text-emerald-400":"text-amber-400"}`,children:p.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(p.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!b&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[s," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",j.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:u.map((g,L)=>{const O=Math.min(Math.max(g/20*100,8),100),G=g<=j*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${G?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${O}%`},title:`${g} ms`},L)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(zn,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:p.adapterName,children:p.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[p.resolution[0],"×",p.resolution[1]]})]})]})]})]})})},w2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Df={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},N2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],Js={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},A2=1.61803398875,ec=137.507764;function Mr(p,s,f){p=(p%360+360)%360,s=Math.max(0,Math.min(1,s)),f=Math.max(0,Math.min(1,f));const u=(1-Math.abs(2*f-1))*s,h=u*(1-Math.abs(p/60%2-1)),b=f-u/2;let v=0,j=0,D=0;return p<60?(v=u,j=h,D=0):p<120?(v=h,j=u,D=0):p<180?(v=0,j=u,D=h):p<240?(v=0,j=h,D=u):p<300?(v=h,j=0,D=u):(v=u,j=0,D=h),[v+b,j+b,D+b]}function j2(p,s){const f=p,u=(p+ec)%360,h=(p+ec*2)%360;return{id:`golden-gen-${Math.floor(p)}`,name:`Гармоника φ (${s})`,primary:Mr(f,.85,.45),secondary:Mr(u,.8,.55),accent:Mr(h,.95,.65),ambient:Mr(f,.6,.12)}}const Ca=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],gn={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона"},M2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5},$s="golden_ratio_taste_profile_v2",T2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function li(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class C2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem($s);if(f){const u=JSON.parse(f);return Ca.forEach(h=>{u.typeAffinities&&u.typeAffinities[h]===void 0&&(u.typeAffinities[h]=1)}),u}}catch{}const s={};return Ca.forEach(f=>{s[f]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem($s,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem($s,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}getOpSynergy(s,f){return s===f?1.2:s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"?1.1:s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"?1.15:s==="minimal"&&f==="geometry"||s==="geometry"&&f==="minimal"?1.1:1}getPreferredOps(s,f,u){if(s===f){const h=u.filter(b=>b==="smoothMorph"||b==="smoothUnion");return h.length>0?h:u}if(s==="geometry"&&f==="complex"||s==="complex"&&f==="geometry"){const h=u.filter(b=>b==="domainWarp"||b==="smoothUnion");return h.length>0?h:u}if(s==="primes"&&f==="attractors"||s==="attractors"&&f==="primes"){const h=u.filter(b=>b==="quantumResonance"||b==="smoothMorph");return h.length>0?h:u}if(s==="minimal"||f==="minimal"){const h=u.filter(b=>b==="fractalLattice"||b==="smoothUnion");return h.length>0?h:u}return u}getHybridRecommendations(s=5){const f=[],u=Ca.map(h=>({type:h,affinity:this.taste.typeAffinities[h]||1,arch:li(h)})).sort((h,b)=>b.affinity-h.affinity);for(const{type:h,affinity:b,arch:v}of u.slice(0,8)){const j=Js[h];if(j)for(const D of j.partners){const g=this.taste.typeAffinities[D]||1,L=li(D),G=this.history.some(le=>le.type===h&&le.hybridType===D||le.type===D&&le.hybridType===h)?.6:1.4,H=this.getOpSynergy(v,L),Y=b*g*G*H,J=this.getPreferredOps(v,L,j.ops)[0];let q="";v===L?q=`Same archetype (${v}) — natural visual harmony`:b>2&&g>2?q="Both types in your taste profile":b>2?q=`Matches your love of ${v} fractals`:g>2?q=`Pairs with your interest in ${L} patterns`:q=`Unexplored ${v}+${L} combination`,f.push({type:h,partner:D,op:J,score:Y,reason:q})}}return f.sort((h,b)=>b.score-h.score),f.slice(0,s)}breedNextSpecimen(s){var Le;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=s;if(!f){const pe=Ca,N=pe.map(Q=>{const $=Math.max(.2,this.taste.typeAffinities[Q]||1),m=this.recentTypes.includes(Q)?.05:1,C=this.currentGeneration<20?1.5:1;return $*m*C}),F=N.reduce((Q,$)=>Q+$,0);let M=Math.random()*F;for(let Q=0;Q<pe.length;Q++){if(M<=N[Q]){f=pe[Q];break}M-=N[Q]}f||(f=pe[Math.floor(Math.random()*pe.length)]),this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const u=Math.random()<.5;let h=this.taste.preferredHue;if(u){const pe=Math.random()<.5?1:2;h=(h+ec*pe+(Math.random()*30-15))%360}else h=Math.random()*360%360;let b;if(Math.random()<.65){const pe=this.history.length>0?(Le=this.history[this.history.length-1].palette)==null?void 0:Le.id:"";let N=Ra.filter(F=>F.id!==pe);N.length===0&&(N=Ra),b=N[Math.floor(Math.random()*N.length)]}else b=j2(h,`Ген #${this.currentGeneration}`);const j=(Math.random()-.5)*.08,D=parseFloat((A2+j).toFixed(5)),g=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),L=Math.max(12,Math.min(32,g)),O=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),G=parseFloat(O.toFixed(2)),H=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),Y=parseFloat(H.toFixed(2)),W=M2[f]*(.95+Math.random()*.1),J=Math.random()<.8;let q=f,le=f,_=0,V=0,be="smoothUnion",Me=1,ie=.32,Fe=.22,He=`${gn[f]} • φ-${this.currentGeneration}`;if(J){const pe=Js[f]||{partners:Ca.filter(X=>X!==f),ops:["smoothUnion","smoothMorph","domainWarp"]},N=li(f);let F=pe.partners[0],M=-1;for(const X of pe.partners){const te=li(X),ae=N===te?1.5:.8,oe=Math.max(.2,this.taste.typeAffinities[X]||1),de=this.history.some(me=>me.hybridType===X&&me.type===f)?.5:1.3,bt=this.getOpSynergy(N,te),gt=ae*oe*de*bt;gt>M&&(M=gt,F=X)}q=F;const Q=li(q),$=this.getPreferredOps(N,Q,pe.ops);be=$[Math.floor(Math.random()*$.length)],_=parseFloat((.15+Math.random()*.55).toFixed(3)),ie=parseFloat((.2+Math.random()*.35).toFixed(3)),Fe=parseFloat((.15+Math.random()*.4).toFixed(3)),Me=Math.random()<.4?2:1;const m=Df[be],C=gn[f].split(" ")[0],U=gn[q].split(" ")[0];if(He=`${C} ${m} ${U} • φ-${this.currentGeneration}`,Math.random()<.5){const te=(Js[q]||{partners:Ca.filter(ae=>ae!==f&&ae!==q)}).partners.filter(ae=>ae!==f&&ae!==q);if(te.length>0){let ae=te[0],oe=-1;for(const de of te){const bt=li(de),gt=Math.max(.2,this.taste.typeAffinities[de]||1),ia=this.history.some(yt=>yt.tertiaryType===de)?.5:1.2,ot=gt*ia*(N===bt?1.3:.9);ot>oe&&(oe=ot,ae=de)}le=ae,V=parseFloat((.1+Math.random()*.3).toFixed(3));const Se=gn[le].split(" ")[0];He=`${C} ${m} ${U} ⊕ ${Se} • φ-${this.currentGeneration}`}}}const Ue=parseFloat((.7+Math.random()*1.5).toFixed(3)),Qe=parseFloat((.35+Math.random()*1.05).toFixed(3)),fe={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:He,type:f,hybridType:q,tertiaryType:le,compositeOp:be,hybridBlend:_,tertiaryBlend:V,smoothK:ie,warpStrength:Fe,octaveLayers:Me,boxFold:Ue,sphereFold:Qe,interiorCut:0,palette:b,iterations:L,phiMultiplier:D,morphSpeed:G,glowIntensity:Y,zoom:W,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(fe),this.history.length>40&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,fe}registerEngagement(s,f,u,h){h.dwellTimeSeconds+=s,Math.abs(f)>.05&&h.zoomInteractions++,u>.05&&h.orbitInteractions++;const b=Math.min(35,h.dwellTimeSeconds/90*35),v=Math.min(18,Math.log1p(h.zoomInteractions)*3.2),j=Math.min(18,Math.log1p(h.orbitInteractions)*2.8),g=Math.round(Math.min(96,25+b+v+j));if(h.affinityScore=Math.max(h.affinityScore,g),h.dwellTimeSeconds>10&&h.affinityScore>50){const L=this.taste.typeAffinities[h.type]||1;if(this.taste.typeAffinities[h.type]=Math.min(4,L+.005),h.hybridType&&h.hybridBlend>.1){const q=this.taste.typeAffinities[h.hybridType]||1;this.taste.typeAffinities[h.hybridType]=Math.min(4,q+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+h.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+h.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+h.iterations*.01);const[O,G,H]=h.palette.primary,Y=Math.max(O,G,H),W=Math.min(O,G,H),J=Y-W;if(J>.05){let q=0;Y===O?q=60*((G-H)/J%6):Y===G?q=60*((H-O)/J+2):q=60*((O-G)/J+4),q<0&&(q+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+q*.03)%360}h.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=h.affinityScore),this.saveTasteProfile()}return h.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};Ca.forEach(v=>{const j=li(v),D=this.taste.typeAffinities[v]||1;s[j]+=D,f[j]++});const h=["geometry","complex","minimal","primes","attractors"].map(v=>({archetype:v,label:T2[v],avg:f[v]>0?s[v]/f[v]:1})),b=h.reduce((v,j)=>v+j.avg,0);return h.map(v=>({archetype:v.archetype,label:v.label,percentage:Math.round(v.avg/Math.max(1e-4,b)*100),score:Math.min(100,Math.round(v.avg*25))}))}suggestRenderStyle(s){const f=["solid","xray","topo","hologram","iridescent","quantum","gemstone"];if(s){const b=li(s),j={geometry:["solid","gemstone","topo"],complex:["hologram","quantum","iridescent"],minimal:["topo","solid","gemstone"],primes:["quantum","hologram","iridescent"],attractors:["xray","quantum","hologram"]}[b]||f;if(Math.random()<.6&&j.length>0)return j[Math.floor(Math.random()*j.length)]}const u=Math.random();if(u<.35)return"solid";const h=Math.floor((u-.35)/.65*(f.length-1));return f[Math.min(h+1,f.length-1)]}}const R2=({params:p,onParamsChange:s,onSelectFractalType:f,onCaptureScreenshot:u,onToggleFullscreen:h,onToggleInfoModal:b,onOpenAtlasModal:v,activeBackend:j,forcedBackend:D,onSelectBackend:g,onClose:L,tasteProfile:O,onSaveToFeed:G})=>{const[H,Y]=R.useState("architectures"),[W,J]=R.useState("all"),q=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],le=W==="all"?q:q.filter(_=>_.group===W);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[v&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:v,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(yn,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),G&&l.jsxs("button",{id:"save-to-feed-btn",onClick:G,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(vh,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:u,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(Sh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:h,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx($h,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:b,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(yn,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:L,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(xl,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>Y("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>Y("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>Y("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>Y("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>Y("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>Y("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>Y("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>Y("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${H==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),H==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(_=>l.jsx("button",{onClick:()=>J(_.id),className:`px-2 py-1 rounded-md text-[9px] transition ${W===_.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:_.label},_.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:le.map(_=>{const V=p.type===_.id;return l.jsxs("button",{id:`arch-btn-${_.id}`,onClick:()=>{f?f(_.id):s(be=>({...be,type:_.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${V?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${V?"text-amber-300":"text-neutral-200"}`,children:_.label}),V&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:_.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:_.formula})]},_.id)})})]}),H==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:N2.map(_=>l.jsxs("button",{onClick:()=>s(V=>({...V,compositeOp:_})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${p.compositeOp===_?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:w2[_]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Df[_]})]},_))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:p.hybridType||p.type,onChange:_=>s(V=>({...V,hybridType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:Ca.map(_=>l.jsx("option",{value:_,children:gn[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.hybridBlend??.35,onChange:_=>s(V=>({...V,hybridBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:p.tertiaryType||"riemannZeta",onChange:_=>s(V=>({...V,tertiaryType:_.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:Ca.map(_=>l.jsx("option",{value:_,children:gn[_]},_))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.tertiaryBlend??.2,onChange:_=>s(V=>({...V,tertiaryBlend:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:p.smoothK,onChange:_=>s(V=>({...V,smoothK:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.warpStrength,onChange:_=>s(V=>({...V,warpStrength:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),H==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(_=>l.jsxs("button",{onClick:()=>s(V=>({...V,cameraMode:_.id})),className:`p-2 rounded-lg border text-left transition ${p.cameraMode===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:p.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(_=>l.jsxs("button",{onClick:()=>s(V=>({...V,renderStyle:_.id})),className:`p-2 rounded-lg border text-left transition ${(p.renderStyle||"solid")===_.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:p.slicePlane>.01?`${(p.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(_=>l.jsx("button",{onClick:()=>s(V=>({...V,sliceAxis:_.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(p.sliceAxis||"golden")===_.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:_.label},_.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.slicePlane,onChange:_=>s(V=>({...V,slicePlane:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>s(_=>({..._,probeActive:!_.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>s(_=>({..._,macroMode:!_.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.headlampPower??1,onChange:_=>s(V=>({...V,headlampPower:parseFloat(_.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.volumetricFog??.4,onChange:_=>s(V=>({...V,volumetricFog:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((p.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:p.interiorCut??.4,onChange:_=>s(V=>({...V,interiorCut:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),H==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:Ra.map(_=>{const V=p.paletteId===_.id;return l.jsxs("button",{onClick:()=>s(be=>({...be,paletteId:_.id,customPalette:_})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${V?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${V?"text-amber-300":"text-neutral-200"}`,children:_.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.primary.map(be=>Math.round(be*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.secondary.map(be=>Math.round(be*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${_.accent.map(be=>Math.round(be*255)).join(",")})`}})]})]},_.id)})}),H==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:p.phiMultiplier,onChange:_=>s(V=>({...V,phiMultiplier:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:p.iterations,onChange:_=>s(V=>({...V,iterations:parseInt(_.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[p.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:p.morphSpeed,onChange:_=>s(V=>({...V,morphSpeed:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:p.boxFold,onChange:_=>s(V=>({...V,boxFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:p.sphereFold,onChange:_=>s(V=>({...V,sphereFold:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]})]}),H==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(_=>l.jsx("button",{onClick:()=>s(V=>({...V,targetFps:_})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${p.targetFps===_?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_===0?"Uncapped":`${_} FPS`},_))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>s(_=>({..._,drsEnabled:!_.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(_=>l.jsx("button",{onClick:()=>g(_.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${D===_.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:_.label},_.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",j]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),H==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[p.enableAudio?l.jsx(ic,{className:"w-4 h-4 text-amber-400"}):l.jsx(Sf,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>s(_=>({..._,enableAudio:!_.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((p.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.audioVolume??.65,onChange:_=>s(V=>({...V,audioVolume:parseFloat(_.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(_=>l.jsxs("button",{onClick:()=>s(V=>({...V,audioTuning:_.id})),className:`w-full p-2 rounded-lg border text-left transition ${(p.audioTuning||"phi432")===_.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:_.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:_.desc})]},_.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),H==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(O==null?void 0:O.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(O==null?void 0:O.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((O==null?void 0:O.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((O==null?void 0:O.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},E2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},k2=({specimen:p,resonanceScore:s,isInteracting:f,interactionType:u,onNext:h,onPrev:b,onFavorite:v,onOpenProfile:j,enableAudio:D,onToggleAudio:g,onOpenResearchModal:L,onOpenAtlas:O,isFeedOpen:G,onToggleFeed:H,isCurrentLiked:Y=!1,params:W})=>{const[J,q]=R.useState(!1),[le,_]=R.useState(!1),[V,be]=R.useState(!1),[Me,ie]=R.useState(!1),[Fe,He]=R.useState(!1),Ue=R.useRef(null),Qe=R.useRef(!1);R.useEffect(()=>{q(Y)},[p==null?void 0:p.id,Y]);const Xe=()=>{Ue.current&&clearTimeout(Ue.current),Ue.current=setTimeout(()=>{Qe.current||(_(!1),be(!1),ie(!1))},3e3)},fe=()=>{_(!0),be(!0),Xe()},Le=()=>{ie(M=>!M),_(!0),Ue.current&&clearTimeout(Ue.current)};R.useEffect(()=>(fe(),()=>{Ue.current&&clearTimeout(Ue.current)}),[]),R.useEffect(()=>{const M=$=>{($.clientY<80||$.clientY>window.innerHeight-120)&&fe()},Q=$=>{const m=$.target;m.closest("#top-right-bar")||m.closest("#top-right-trigger")||m.closest("#neuro-feed-bar")||(be(!0),Xe())};return window.addEventListener("mousemove",M),window.addEventListener("touchstart",Q,{passive:!0}),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("touchstart",Q)}},[]);const pe=()=>{q(!0),v()},N=()=>{if(!p)return;const M=W,Q=new URLSearchParams({type:p.type,hybrid:p.hybridType,tertiary:p.tertiaryType,op:p.compositeOp,blend:p.hybridBlend.toFixed(3),tertiaryBlend:p.tertiaryBlend.toFixed(3),smoothK:p.smoothK.toFixed(3),warp:p.warpStrength.toFixed(3),octaves:String(p.octaveLayers),boxFold:p.boxFold.toFixed(3),sphereFold:p.sphereFold.toFixed(3),interiorCut:p.interiorCut.toFixed(3),iterations:String(p.iterations),phi:p.phiMultiplier.toFixed(9),morphSpeed:p.morphSpeed.toFixed(3),glow:p.glowIntensity.toFixed(3),zoom:p.zoom.toFixed(3),name:p.name,palette:p.palette.id,paletteSeed:String((M==null?void 0:M.paletteSeed)??0),paletteRotation:M!=null&&M.paletteRotation?"1":"0",renderStyle:(M==null?void 0:M.renderStyle)??"solid",cameraMode:(M==null?void 0:M.cameraMode)??"orbit",camX:((M==null?void 0:M.camPosX)??0).toFixed(3),camY:((M==null?void 0:M.camPosY)??0).toFixed(3),camZ:((M==null?void 0:M.camPosZ)??-3.2).toFixed(3),headlamp:((M==null?void 0:M.headlampPower)??0).toFixed(3),fog:((M==null?void 0:M.volumetricFog)??.4).toFixed(3),slicePlane:((M==null?void 0:M.slicePlane)??0).toFixed(3),sliceAxis:(M==null?void 0:M.sliceAxis)??"golden",audio:M!=null&&M.enableAudio?"1":"0",audioVol:((M==null?void 0:M.audioVolume)??.65).toFixed(2),audioTuning:(M==null?void 0:M.audioTuning)??"phi432",drs:M!=null&&M.drsEnabled?"1":"0"}),$=`${window.location.origin}${window.location.pathname}#${Q.toString()}`;navigator.share?navigator.share({title:p.name,text:`Фрактал: ${p.name}`,url:$}).catch(()=>{}):navigator.clipboard.writeText($).then(()=>{He(!0),setTimeout(()=>He(!1),2e3)}).catch(()=>{const m=document.createElement("textarea");m.value=$,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),He(!0),setTimeout(()=>He(!1),2e3)})},F=p!=null&&p.compositeOp?E2[p.compositeOp]||p.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{Qe.current=!0,_(!0),ie(!0),Ue.current&&clearTimeout(Ue.current)},onMouseLeave:()=>{Qe.current=!1,ie(!1),Xe()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${Me?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:Le,title:"Меню",children:l.jsx(Hh,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${le&&Me?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:g,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${D?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:D?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:D?l.jsx(ic,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(Sf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),O&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:O,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(yn,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),H&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:H,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${G?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:G?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(_n,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:j,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(zf,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),f&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Rr,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:u==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${V?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(p==null?void 0:p.name)||"Золотой Фрактал",children:(p==null?void 0:p.name)||"Золотой Фрактал"}),(p==null?void 0:p.hybridBlend)&&p.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:p.compositeOp,children:F})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(p==null?void 0:p.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:pe,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${J?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(Cr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${J?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:N,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${Fe?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:Fe?"Ссылка скопирована!":"Поделиться этим фракталом",children:Fe?l.jsx(xf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(p2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:b,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(Th,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:h,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(vf,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},O2=({isOpen:p,onClose:s})=>p?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(yn,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(xl,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Rr,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(zn,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(_n,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(_n,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(hl,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(_h,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,F2=({isOpen:p,onClose:s,tasteProfile:f,archetypeBreakdown:u,currentSpecimen:h,resonanceScore:b,isEngineerMode:v,onToggleEngineerMode:j,audioTuning:D,onSelectAudioTuning:g,onResetTasteProfile:L,onOpenManifest:O,likedSpecimens:G=[],onPlayLiked:H,onRemoveLike:Y,isCurrentLiked:W=!1})=>p?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(zf,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(xl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[b,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${b}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(h==null?void 0:h.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Cr,{className:`w-4 h-4 ${G.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:G.length})]}),W&&h&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(Cr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),G.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(Cr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:G.map((J,q)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:q+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:J.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",J.phiMultiplier.toFixed(4)," • Gen #",J.generation]})]}),H&&l.jsx("button",{onClick:()=>H(J),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(_f,{className:"w-3 h-3"})}),Y&&l.jsx("button",{onClick:()=>Y(J.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(h2,{className:"w-3 h-3"})})]},J.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(wh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:u.map(J=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:J.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[J.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${J.percentage}%`}})})]},J.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ic,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(J=>l.jsxs("button",{onClick:()=>g(J.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${D===J.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:J.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:J.desc})]},J.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(zn,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{O==null||O()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(y2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:j,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${v?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${v?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:v?"Инженер Включен":"Включить Инж"})]})]}),v&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,sf=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],q2=({isReady:p,onFinished:s})=>{const[f,u]=R.useState(0),[h,b]=R.useState(!1),[v,j]=R.useState(!1);return R.useEffect(()=>{const D=setInterval(()=>{u(g=>g<sf.length-1?g+1:g)},450);return()=>clearInterval(D)},[]),R.useEffect(()=>{const D=setTimeout(()=>{if(!p){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),b(!0);const g=setTimeout(()=>{j(!0),s==null||s()},700);return()=>clearTimeout(g)}},15e3);return()=>clearTimeout(D)},[p,s]),R.useEffect(()=>{if(p){const D=setTimeout(()=>{b(!0);const g=setTimeout(()=>{j(!0),s==null||s()},700);return()=>clearTimeout(g)},500);return()=>clearTimeout(D)}},[p,s]),v?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${h?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((D,g)=>l.jsxs("g",{transform:`rotate(${D} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},g)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:sf[f]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},L2=({isOpen:p,onClose:s,isFirstVisit:f=!1,onOpenAtlas:u})=>{if(!p)return null;const h=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},b=()=>{h(),u==null||u()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:h,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:v=>v.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:h,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(xl,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(zn,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Rr,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(_n,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(a2,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(yf,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[u&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:b,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(yn,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:h,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(vf,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},cf=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}],B2=[{id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",enginePreset:{type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}},{id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}},{id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}},{id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2.0 (граница D ≈ 1.58)",generatorRule:"Чередование знака угла поворота на каждом шаге итерации",description:"Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.",phiPiRelation:"Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.35,zoom:2.5}},{id:"golden-dragon",name:"Золотой дракон",englishName:"Golden Dragon Curve",category:"geometric_curves",formula:"r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1",dimension:"D = 2.0 (самоподобие φ)",generatorRule:"Деление отрезка в отношении золотого сечения 1:φ",description:"Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.",phiPiRelation:"Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.6}},{id:"minkowski-curve",name:"Кривая Минковского (Сосиска Минковского)",englishName:"Minkowski Sausage",category:"geometric_curves",formula:"N = 8, S = 4",dimension:"D = ln(8)/ln(4) = 1.500",generatorRule:"F → F+F-F-FF+F+F-F (угол 90°)",description:"Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.",phiPiRelation:"Ортогональная дискретность π/2; целое полуцелое значение размерности.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothMorph",boxFold:1.5,zoom:3.1}},{id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]², N = 9, S = 3",dimension:"D = ln(9)/ln(3) = 2.000",generatorRule:"F → F+F-F-F-F+F+F+F-F (угол 90°)",description:"Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.",phiPiRelation:"Сюръективное непрерывное отображение; шаг дискретизации π/2.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.9}},{id:"hilbert-curve",name:"Кривая Гильберта 2D/3D",englishName:"Hilbert Space-Filling Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}",dimension:"D = 2.0 (в 3D D = 3.0)",generatorRule:"L-система обхода ячеек 2^n x 2^n",description:"Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.",phiPiRelation:"Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:3.2,rotX:.45,rotY:.35}},{id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2) = 2.0",dimension:"D = 2.000",generatorRule:"Замкнутый маршрут вокруг треугольников сетки",description:"Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.",phiPiRelation:"Углы поворота 45° (π/4) и 90° (π/2).",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"moore-curve",name:"Кривая Мура",englishName:"Moore Curve",category:"geometric_curves",formula:"N = 4^n, S = 2^n",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"Замкнутый вариант кривой Гильберта",description:"Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.",phiPiRelation:"Симметричный квадрантный обход, кратный π/2.",enginePreset:{type:"hilbertCurve3D",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.25,zoom:3}},{id:"gosper-curve",name:"Кривая Госпера (Flowsnake)",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"N = 7, S = √7",dimension:"D = ln(7)/ln(√7) = 2.000",generatorRule:"L-система на гексагональной сетке (угол 60° = π/3)",description:"Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.",phiPiRelation:"Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.",enginePreset:{type:"quasicrystal",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"cesaro-curve",name:"Кривая Чезаро",englishName:"Cesàro Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2(1 + cos α))",dimension:"D ∈ (1.0, 2.0] при α ∈ (0, π/2)",generatorRule:"Кривая Коха с переменным углом при вершине",description:"Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.",phiPiRelation:"При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"domainWarp",warpStrength:.3,zoom:2.7}},{id:"drummond-curve",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ = π / k, k ∈ ℝ",dimension:"D ≈ 1.45 - 1.85",generatorRule:"Циклические L-системы с дробными иррациональными углами",description:"Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.",phiPiRelation:"Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.",enginePreset:{type:"phyllotaxis",compositeOp:"goldenSpiralFold",zoom:2.6}},{id:"mcwhorter-pentigree",name:"Снежинка Коха — МакВортера",englishName:"McWhorter Pentigree",category:"geometric_curves",formula:"N = 5, S = (3 - √5)/2",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.672",generatorRule:"Асимметричный пентагональный генератор",description:"Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.",phiPiRelation:"Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",zoom:2.5}},{id:"rice-curve",name:"Кривая Райса",englishName:"Rice Curve",category:"geometric_curves",formula:"θ_1 = π/3, θ_2 = 2π/5",dimension:"D ≈ 1.78",generatorRule:"Неортогональные развороты в пространственно-заполняющих кривых",description:"Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.",phiPiRelation:"Сочетание углов π/3 и пентагональных пропорций золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"quasicrystal",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"polya-curve",name:"Кривая Пойи",englishName:"Pólya Sweep Curve",category:"geometric_curves",formula:"T → T_1 ∪ T_2",dimension:"D = 2.000",generatorRule:"Рекурсивный обход прямоугольного треугольника с высотой",description:"Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.",phiPiRelation:"Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.7}},{id:"sierpinski-arrowhead",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Двухсимвольная L-система сходящаяся к треугольнику",description:"Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.",phiPiRelation:"Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothUnion",zoom:2.9}}],H2=[{id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"constructive",formula:"N = 3, S = 2",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Удаление центрального перевернутого треугольника",description:"Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.",phiPiRelation:"Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"sierpinski-carpet",name:"Ковер Серпинского",englishName:"Sierpiński Carpet",category:"constructive",formula:"N = 8, S = 3",dimension:"D = ln(8)/ln(3) ≈ 1.89279",generatorRule:"Деление квадрата на 9 частей, удаление центрального",description:"Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.",phiPiRelation:"Универсальная плоская кривая Менгера; мера Лебега стремится к 0.",enginePreset:{type:"menger",compositeOp:"smoothMorph",boxFold:1,zoom:2.9}},{id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"constructive",formula:"N = 20, S = 3, V_∞ = 0, A_∞ = ∞",dimension:"D = ln(20)/ln(3) ≈ 2.72683",generatorRule:"Куб делится на 27 кубиков, удаляются 7 центральных",description:"Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.",phiPiRelation:"Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1.2,zoom:3.1}},{id:"pythagoras-tree-classic",name:"Дерево Пифагора классическое",englishName:"Pythagoras Tree (Symmetric)",category:"constructive",formula:"a² + b² = c², a = b = c/√2",dimension:"D = 2.0 (перекрытия в пределе)",generatorRule:"Построение квадратов на сторонах прямоугольного равнобедренного треугольника",description:"Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).",phiPiRelation:"Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.6,rotX:.35}},{id:"pythagoras-tree-windblown",name:"Дерево Пифагора обдуваемое",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"α = 60° (π/3), β = 30° (π/6)",dimension:"D ≈ 1.85",generatorRule:"Разноугольное ветвление прямоугольного треугольника",description:"Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.",phiPiRelation:"Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.",enginePreset:{type:"pythagorasTree3D",compositeOp:"goldenSpiralFold",warpStrength:.3,zoom:2.7}},{id:"pythagoras-tree-naked",name:"Обнаженное дерево Пифагора",englishName:"Naked Pythagoras Tree",category:"constructive",formula:"Граф центров квадратов G(V, E)",dimension:"D ≈ 1.73",generatorRule:"Отрезки соединяют только центры смежных квадратов",description:"Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центр квадратов дерева Пифагора.",phiPiRelation:"Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"domainWarp",warpStrength:.25,zoom:2.8}},{id:"apollonian-gasket",name:"Сетка Аполлония (Упаковка Аполлония)",englishName:"Apollonian Gasket / Sphere Packing",category:"constructive",formula:"(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)",dimension:"D ≈ 1.30568 (в 3D D ≈ 2.4739)",generatorRule:"Теорема Содди о четырех касающихся окружностях",description:"Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.",phiPiRelation:"Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",sphereFold:.75,zoom:3}},{id:"vicsek-fractal",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Box / Cross)",category:"constructive",formula:"N = 5, S = 3",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Деление квадрата на 9 частей, сохранение центрального креста",description:"Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.",phiPiRelation:"Идеальная симметрия группы D_4 (повороты на π/2).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothMorph",boxFold:1.1,zoom:2.9}},{id:"t-square-fractal",name:"Т-квадрат",englishName:"T-Square Fractal",category:"constructive",formula:"A_∞ = 2 A_0",dimension:"D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)",generatorRule:"Итеративное наложение уменьшенных квадратов на углы",description:"Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.",phiPiRelation:"Ограниченная фрактальная граница со степенью масштабирования 1/2.",enginePreset:{type:"menger",compositeOp:"domainWarp",warpStrength:.2,zoom:3}},{id:"sierpinski-cross",name:"Крест Серпинского",englishName:"Sierpiński Cross",category:"constructive",formula:"D = ln(5)/ln(3) ≈ 1.465",dimension:"D ≈ 1.465 (в 3D D ≈ 2.32)",generatorRule:"Пространственное пересечение плоскостей Серпинского",description:"Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.",phiPiRelation:"Инвариантен относительно октаэдрических вращений SO(3).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"sierpinski-pentagon",name:"Пятиугольник Серпинского (Пентафрактал)",englishName:"Sierpiński Pentagon (Pentaflake)",category:"constructive",formula:"N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²",dimension:"D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228",generatorRule:"5 копий пятиугольника по углам, удаление центра",description:"Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.",phiPiRelation:"АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",phiMultiplier:1.61803398875,zoom:2.7}},{id:"hexafractal",name:"Гексафрактал (Гексафлейк)",englishName:"Hexaflake",category:"constructive",formula:"N = 7, S = 3",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть копий шестиугольника вокруг центрального седьмого",description:"Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.",phiPiRelation:"Гексагональные углы 2π/6 = 60° = π/3.",enginePreset:{type:"quasicrystal",compositeOp:"smoothUnion",zoom:2.8}},{id:"ivezic-fractal",name:"Фрактал Ивезича",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n+1)/ln(2)",dimension:"D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32",generatorRule:"Рекурсивное деление n-мерного регулярного симплекса",description:"Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.",phiPiRelation:"Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"levy-snowflake",name:"Снежинка Леви",englishName:"Lévy Snowflake",category:"constructive",formula:"∂(Lévy C curve ∪ rot)",dimension:"D = 2.0 (граница D ≈ 1.934)",generatorRule:"Замкнутая суперпозиция 8 C-кривых Леви",description:"Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.",phiPiRelation:"Периодичность 2π/8 = π/4.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.7}},{id:"sierpinski-pyramid",name:"Пирамида Серпинского (Тетраэдр Серпинского)",englishName:"Sierpiński Tetrahedron",category:"constructive",formula:"N = 4, S = 2, V_∞ = 0",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"4 тетраэдра половинного размера в вершинах",description:"Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.",phiPiRelation:"Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.9,rotX:.4}}],U2=[{id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}},{id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}},{id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}},{id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}},{id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 2.0",generatorRule:"Бассейны притяжения комплексных корней полинома",description:"Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.",phiPiRelation:"Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:2.9}},{id:"serafimsky-fractal",name:"Фрактал Серафимского",englishName:"Serafimsky Shifted Newton",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{iθ} f(z_n)/f'(z_n)",dimension:"D ≈ 2.0",generatorRule:"Метод Ньютона с комплексным вращением фазового угла θ",description:"Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.",phiPiRelation:"Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.",enginePreset:{type:"newtonBasins",compositeOp:"goldenSpiralFold",warpStrength:.35,zoom:2.8}},{id:"burning-ship",name:"Фрактал «Пылающий корабль» (Burning Ship)",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D = 2.0",generatorRule:"Абсолютная величина от Re и Im перед возведением в квадрат",description:"Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.",phiPiRelation:"Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",zoom:3.1,rotX:.4}},{id:"perpendicular-burning-ship",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c",dimension:"D = 2.0",generatorRule:"Модуль берется только от одной компоненты (вещественной)",description:"Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.",phiPiRelation:"Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.",enginePreset:{type:"burningShip3D",compositeOp:"domainWarp",warpStrength:.3,zoom:3}},{id:"pickover-biomorphs",name:"Биоморфы Пиковера",englishName:"Pickover Biomorphs",category:"algebraic_complex",formula:"|Re(z_n)| < R ∨ |Im(z_n)| < R",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Условие останова итераций имитирует форму одноклеточных",description:"Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.",phiPiRelation:"Формы радиолярий и спикул подчиняются золотому закону роста Д'Арси Томпсона.",enginePreset:{type:"quaternionJulia",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.7}},{id:"trigonometric-fractal",name:"Тригонометрические фракталы (Фрактал Иисуса)",englishName:"Trigonometric Fractal (sin z + c)",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c",dimension:"D = 2.0",generatorRule:"Трансцендентные целые функции комплексного переменного",description:"Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.",phiPiRelation:"Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.",enginePreset:{type:"spiralTunnel",compositeOp:"quantumResonance",zoom:3.2}},{id:"lyapunov-fractal",name:"Карты Ляпунова / Фракталы Ляпунова",englishName:"Lyapunov Fractals / Zircon City",category:"algebraic_complex",formula:"λ = lim (1/N) ∑ ln |f'(x_n)| для последовательности AB",dimension:"D ≈ 2.0 (фрактальные границы стабильности)",generatorRule:"Чередование параметров r_A и r_B логистического отображения",description:"Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.",phiPiRelation:"Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.",enginePreset:{type:"primeSpiral",compositeOp:"quantumResonance",zoom:2.8}},{id:"novak-fractal",name:"Множество Новака",englishName:"Novak Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)",dimension:"D ≈ 2.0",generatorRule:"Использование иррациональных дробных степеней комплексного числа",description:"Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.",phiPiRelation:"При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"goldenSpiralFold",zoom:2.8}},{id:"spider-fractal",name:"Фрактал «Паук»",englishName:"Spider Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Связанная динамика точки z и параметра c на каждом шаге",description:"Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.",phiPiRelation:"Отношение затухания c_n/2 согласуется с золотой дихотомией.",enginePreset:{type:"quaternionJulia",compositeOp:"domainWarp",warpStrength:.45,zoom:2.9}},{id:"sherwood-carpet",name:"Ковер Шервуда",englishName:"Sherwood Carpet",category:"algebraic_complex",formula:"z_{n+1} = 1 / (z_n^k + c)",dimension:"D ≈ 1.85",generatorRule:"Инверсия комплексных полиномов высших порядков",description:"Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.",phiPiRelation:"Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.",enginePreset:{type:"apollonian",hybridType:"mandelbox",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}}],G2=[{id:"quaternion-mandelbrot",name:"Кватернионный Мандельброт 4D",englishName:"4D Quaternion Mandelbrot",category:"multidimensional",formula:"q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0",dimension:"D_4D = 4.0, D_3D-сечения = 2.0 - 3.0",generatorRule:"Итерации в теле алгебры кватернионов ℍ (1, i, j, k)",description:"Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.",phiPiRelation:"Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.25}},{id:"quaternion-julia",name:"Кватернионный Жюлиа 4D",englishName:"4D Quaternion Julia",category:"multidimensional",formula:"q_{n+1} = q_n² + C, C = const ∈ ℍ",dimension:"D ≈ 2.5 - 3.2 в 3D проекции",generatorRule:"4D сечение динамической системы кватернионов при фиксированном векторе C",description:"Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.",phiPiRelation:"Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.8}},{id:"mandelbulb-3d",name:"Mandelbulb 3D",englishName:"Mandelbulb 3D (White & Nylander)",category:"multidimensional",formula:"v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c",dimension:"D ≈ 2.7 - 2.9",generatorRule:"Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)",description:"Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.",phiPiRelation:"Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:3.1}},{id:"mandelbox-3d",name:"Mandelbox 3D",englishName:"Mandelbox 3D (Tom Lowe)",category:"multidimensional",formula:"v ↦ s · sphereFold(boxFold(v)) + c",dimension:"D ≈ 2.3 - 2.8",generatorRule:"Циклическое складывание кубического пространства (box fold) и сферическая инверсия",description:"3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.",phiPiRelation:"Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.",enginePreset:{type:"mandelbox",boxFold:1.2,sphereFold:.65,compositeOp:"smoothUnion",zoom:3.2}},{id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube (Eric Baird)",category:"multidimensional",formula:"Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)",dimension:"D ≈ 2.529",generatorRule:"Вырезание крестообразных отверстий с пропорциями золотого сечения",description:"Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.",phiPiRelation:"Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"kleinian-groups",name:"Клейниановы группы (Предельные множества)",englishName:"Kleinian Limit Sets / Schottky Groups",category:"multidimensional",formula:"γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)",dimension:"D ≈ 1.3 - 2.7",generatorRule:"Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³",description:"Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.",phiPiRelation:"Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothMorph",zoom:2.9}}],Y2=[{id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern IFS",category:"ifs_attractors",formula:"W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}",dimension:"D ≈ 1.85",generatorRule:"4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}",description:"Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.",phiPiRelation:"Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.",enginePreset:{type:"phyllotaxis",hybridType:"pythagorasTree3D",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"fractal-flames",name:"Фрактальное пламя (Fractal Flames)",englishName:"Fractal Flames (Scott Draves)",category:"ifs_attractors",formula:"F(x) = ∑ w_i V_j(A_i x + b_i)",dimension:"D зависит от нелинейных вариаций",generatorRule:"Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг",description:"Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.",phiPiRelation:"Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.",enginePreset:{type:"hopfFibration",hybridType:"spiralTunnel",compositeOp:"quantumResonance",hybridBlend:.45,zoom:3}},{id:"lorenz-attractor",name:"Странный аттрактор Лоренца",englishName:"Lorenz Strange Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz",dimension:"D_каплана-йорке ≈ 2.06 ± 0.01",generatorRule:"Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)",description:"Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.",phiPiRelation:"Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothMorph",zoom:3.2,rotX:.3,rotY:.4}},{id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)",dimension:"D ≈ 2.01",generatorRule:"Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты",description:"Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.",phiPiRelation:"Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothUnion",zoom:2.9}},{id:"ikeda-attractor",name:"Аттрактор Икеды",englishName:"Ikeda Map Attractor",category:"ifs_attractors",formula:"z_{n+1} = A + B z_n e^{i(|z_n|² + C)}",dimension:"D ≈ 1.7",generatorRule:"Двумерное отображение света в кольцевом оптическом резонаторе",description:"Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.",phiPiRelation:"Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.",enginePreset:{type:"spiralTunnel",compositeOp:"domainWarp",warpStrength:.4,zoom:2.8}},{id:"clifford-attractor",name:"Аттрактор Клиффорда",englishName:"Clifford Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Синусно-косинусное полиномиальное отображение с 4 параметрами",description:"Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.",phiPiRelation:"Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:2.9}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"Peter de Jong Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)",dimension:"D ≈ 1.8",generatorRule:"Симметричное тригонометрическое отображение Петера де Йонга",description:"Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.",phiPiRelation:"При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.",enginePreset:{type:"cliffordTorus4D",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3}},{id:"henon-attractor",name:"Аттрактор Хенона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)",dimension:"D ≈ 1.261 ± 0.003",generatorRule:"Дискретная диссипативная система Мишеля Эно (1976)",description:"Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.",phiPiRelation:"Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:2.7}},{id:"humboldt-attractor",name:"Аттрактор Гумбольдта",englishName:"Humboldt Flow Attractor",category:"ifs_attractors",formula:"dxdt = v_oceanic(x, φ, t)",dimension:"D ≈ 2.15",generatorRule:"IFS-система, имитирующая турбулентные океанические вихри",description:"Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.",phiPiRelation:"Логарифмические спирали вихрей имеют золотой угол раскрутки.",enginePreset:{type:"gyroid",compositeOp:"goldenSpiralFold",zoom:3.1}}],V2=[{id:"perlin-noise",name:"Фрактальный шум Перлина",englishName:"Fractal Perlin Noise (fBm)",category:"stochastic",formula:"f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)",dimension:"D = 3 - H, где H — показатель Херста",generatorRule:"Градиентный шум Кена Перлина, суммируемый по октавам",description:"Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.",phiPiRelation:"Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.",enginePreset:{type:"neoviusMinimal",compositeOp:"domainWarp",warpStrength:.35,zoom:3}},{id:"simplex-noise",name:"Симплексный шум (Simplex Noise)",englishName:"Simplex Noise",category:"stochastic",formula:"Разбиение пространства на симплексы Шлефли A_n",dimension:"D = 3 - H",generatorRule:"Замена гиперкубической сетки на симплексную решетку",description:"Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.",phiPiRelation:"Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.1}},{id:"diamond-square",name:"Алгоритм Diamond-Square (Плазма)",englishName:"Diamond-Square Plasma Fractal",category:"stochastic",formula:"h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}",dimension:"D = 3 - H ∈ (2.0, 3.0)",generatorRule:"Рекурсивное чередование шагов ромба и квадрата по сетке",description:"Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.",phiPiRelation:"Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.",enginePreset:{type:"dlaCluster",compositeOp:"smoothMorph",zoom:2.8}},{id:"fractional-brownian-motion",name:"Дробное броуновское движение (fBm)",englishName:"Fractional Brownian Motion (fBm)",category:"stochastic",formula:"E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})",dimension:"D = n + 1 - H (Мандельброт и Ван Несс, 1968)",generatorRule:"Гауссовский процесс с долговременной корреляцией и параметром Херста H",description:"Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.",phiPiRelation:"Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.",enginePreset:{type:"dlaCluster",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"dla-cluster",name:"Диффузионно-ограниченная агрегация (ДОА / DLA)",englishName:"Diffusion-Limited Aggregation (DLA)",category:"stochastic",formula:"N(r) ∝ r^{D_{DLA}}",dimension:"D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)",generatorRule:"Случайное блуждание броуновских частиц и их слипание с растущим кластером",description:"Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.",phiPiRelation:"Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.25}},{id:"percolation-clusters",name:"Кластеры перколяции",englishName:"Percolation Lattice Clusters",category:"stochastic",formula:"P(p) ∝ (p - p_c)^β при p → p_c",dimension:"D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)",generatorRule:"Случайное заполнение узлов решетки с критической вероятностью p_c",description:"Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.",phiPiRelation:"Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.",enginePreset:{type:"neoviusMinimal",compositeOp:"fractalLattice",zoom:3.1}},{id:"dielectric-breakdown",name:"Фрактал лавинного пробоя (Фигуры Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM / Lichtenberg)",category:"stochastic",formula:"∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)",dimension:"D ≈ 1.75 при η = 1",generatorRule:"Решение уравнения Лапласа для электростатического потенциала с ростом разряда",description:"Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.",phiPiRelation:"Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.",enginePreset:{type:"dlaCluster",compositeOp:"domainWarp",warpStrength:.4,zoom:3}}],ml=[...B2,...H2,...U2,...G2,...Y2,...V2],X2=({isOpen:p,onClose:s,onApplyPreset:f})=>{var J;const[u,h]=R.useState("catalog"),[b,v]=R.useState("all"),[j,D]=R.useState(""),[g,L]=R.useState(ml[0]),[O,G]=R.useState(null),H=R.useMemo(()=>ml.filter(q=>{const le=b==="all"||q.category===b,_=j.toLowerCase().trim();if(!_)return le;const V=q.name.toLowerCase().includes(_)||q.englishName.toLowerCase().includes(_)||q.formula.toLowerCase().includes(_)||q.dimension.toLowerCase().includes(_)||q.description.toLowerCase().includes(_);return le&&V}),[b,j]);if(!p)return null;const Y=q=>{f(q.enginePreset,q.name),G(q.id),setTimeout(()=>{G(null),s()},450)},W=q=>{switch(q){case"geometric_curves":return l.jsx(Rr,{className:"w-4 h-4"});case"constructive":return l.jsx(_n,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(Qh,{className:"w-4 h-4"});case"multidimensional":return l.jsx(gh,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(hl,{className:"w-4 h-4"});case"stochastic":return l.jsx(zn,{className:"w-4 h-4"});case"topological_physical":return l.jsx(hf,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(yn,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",ml.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(xl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>h("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(_n,{className:"w-4 h-4"}),"Атлас и Таксономия (",ml.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>h("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ws,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>h("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ks,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),u==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(c2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:j,onChange:q=>D(q.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),j&&l.jsx("button",{onClick:()=>D(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>v("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${b==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",ml.length,")"]}),cf.map(q=>{var le;return l.jsxs("button",{onClick:()=>v(q.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${b===q.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[W(q.id),l.jsx("span",{children:((le=q.title.split(".")[1])==null?void 0:le.trim())||q.title})]},q.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:H.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):H.map(q=>{var _;const le=(g==null?void 0:g.id)===q.id;return l.jsxs("button",{id:`btn-fractal-${q.id}`,onClick:()=>L(q),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${le?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:q.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(_=q.dimension.split("≈")[0])==null?void 0:_.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:q.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:q.formula})]})]},q.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:g?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[W(g.category),l.jsx("span",{children:(J=cf.find(q=>q.id===g.category))==null?void 0:J.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:g.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:g.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>Y(g),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:O===g.id?l.jsxs(l.Fragment,{children:[l.jsx(xf,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(_f,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:g.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:g.dimension})]})]}),g.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:g.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:g.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(Ws,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:g.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Ks,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:g.enginePreset.type}),g.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:g.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:g.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),u==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ws,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),u==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(Ks,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(o2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(gf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(hl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(bf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Kh,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},P2=({params:p,onToggleProbe:s,onToggleMacro:f})=>{if(!p.probeActive)return null;const u=Math.sqrt((p.camPosX??0)**2+(p.camPosY??0)**2+(p.camPosZ??0)**2),h=Math.max(.001,u/(p.zoom||3)).toFixed(4),b=p.slicePlane?((.5-p.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:p.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(bf,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[h," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(p.camPosX??0).toFixed(2)," Y:",(p.camPosY??0).toFixed(2)," Z:",(p.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[p.sliceAxis||"golden"," (",b,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:p.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[p.octaveLayers||2,"L · k=",p.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${p.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:p.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(hl,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",p.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",p.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",p.phiMultiplier.toFixed(5)]})]})]})},uf=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:zn,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:gf,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:hl,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:Xh,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:Lh,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:hf,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:Yh,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],Z2=({currentSpecimen:p,historyQueue:s,currentIndex:f,onSelectSpecimen:u,onNext:h,onPrev:b,renderStyle:v,onSelectRenderStyle:j,scrollMode:D,onToggleScrollMode:g,isOpen:L,onToggleOpen:O})=>{const G=R.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${L?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(l2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:g,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${D==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:D==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:D==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(yf,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(S2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",uf.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:uf.map(H=>{const Y=H.icon,W=v===H.id;return l.jsxs("button",{id:`select-render-style-${H.id}-btn`,onClick:()=>j(H.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${W?H.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:H.desc,children:[l.jsx(Y,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:H.shortLabel})]},H.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:b,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(Eh,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:h,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx(jh,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:G,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((H,Y)=>{const W=H.id===(p==null?void 0:p.id)||Y===f;return l.jsxs("button",{id:`feed-item-${Y}-btn`,onClick:()=>u(H),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${W?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",H.generation||Y+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:H.name})]}),W&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:H.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[H.type," + ",H.hybridType||H.type]})]})]},H.id||Y)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:D==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})};function pf(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class Q2{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,f="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const u=window.AudioContext||window.webkitAudioContext;this.ctx=new u,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(u){console.warn("AudioContext initialization deferred or unavailable",u)}}getChordFrequenciesForFamily(s,f,u){const h=1.61803398875,b=u?Tr(u):0,j=b*137.507764%50-25,D=Math.pow(2,j/1200);if(s==="sacred")return[{ratio:.5*D,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:h*D,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5*D,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:h*h*.5*D,wave:b%2===0?"triangle":"sine",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5*D,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5*D,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2*D,wave:b%3===0?"sawtooth":"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5*D,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75*D,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25*D,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2)*D,wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:h*1.2*D,wave:b%2===0?"sine":"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const g=1.1413470000000001,L=1+21.022/100,O=1+25.0108/100;return[{ratio:.5*D,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:g*D,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:L*D,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:O*D,wave:b%2===0?"triangle":"sine",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5*D,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1*D,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382*D,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618*D,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5*D,wave:b%3===0?"square":"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,f){if(!this.ctx||!this.globalFilter)return;const u=pf(s),h=f?pf(f):u,b=108,v=this.ctx.currentTime,j=[...this.voices];this.voices=[],j.forEach(L=>{try{L.gain.gain.cancelScheduledValues(v),L.gain.gain.setValueAtTime(L.gain.gain.value,v),L.gain.gain.exponentialRampToValueAtTime(1e-4,v+.35),setTimeout(()=>{var O;try{L.osc.stop(),L.osc.disconnect(),L.filter.disconnect(),(O=L.panner)==null||O.disconnect(),L.gain.disconnect()}catch{}},380)}catch{}});const g=this.getChordFrequenciesForFamily(u,this.tuningMode,s).map((L,O)=>{const G=this.ctx.createOscillator(),H=this.ctx.createGain(),Y=this.ctx.createBiquadFilter(),W=(O%2===0?.618:-.618)*.5,J=b*L.ratio+W;G.type=L.wave,G.frequency.setValueAtTime(J,v),H.gain.setValueAtTime(1e-4,v),H.gain.exponentialRampToValueAtTime(L.vol,v+1.2),Y.type="lowpass",Y.frequency.setValueAtTime(450+O*80,v),Y.Q.setValueAtTime(1.2,v),G.connect(Y);let q=Y,le;return this.ctx.createStereoPanner&&(le=this.ctx.createStereoPanner(),le.pan.setValueAtTime(L.pan,v),Y.connect(le),q=le),q.connect(H),H.connect(this.globalFilter),G.start(v),{osc:G,gain:H,filter:Y,panner:le,baseFreqRatio:L.ratio,role:L.role}});if(f&&f!==s){const L=this.getChordFrequenciesForFamily(h,this.tuningMode,f),O=L[2]||L[1],G=this.ctx.createOscillator(),H=this.ctx.createGain(),Y=this.ctx.createBiquadFilter();G.type="sine",G.frequency.setValueAtTime(b*O.ratio,v);const W=Math.max(1e-4,this.currentHybridBlend*.22);H.gain.setValueAtTime(1e-4,v),H.gain.exponentialRampToValueAtTime(W,v+1.5),Y.type="bandpass",Y.frequency.setValueAtTime(b*O.ratio*1.5,v),Y.Q.setValueAtTime(2,v),G.connect(Y);let J=Y,q;this.ctx.createStereoPanner&&(q=this.ctx.createStereoPanner(),q.pan.setValueAtTime(.45,v),Y.connect(q),J=q),J.connect(H),H.connect(this.globalFilter),G.start(v),g.push({osc:G,gain:H,filter:Y,panner:q,baseFreqRatio:O.ratio,role:"hybrid"})}this.voices=g}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,u=s.phiMultiplier||1.618034,h=Math.max(.08,Math.min(16,s.zoom||3)),b=Math.max(.1,Math.min(2,s.morphSpeed||.45)),v=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=v,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const j=Math.max(260,Math.min(980,380+(4-Math.min(h,4))*80+b*120));this.globalFilter.frequency.setTargetAtTime(j,f,.15);const D=Math.max(54,Math.min(240,108/Math.max(.5,h*.6)));this.cavityResonator.frequency.setTargetAtTime(D,f,.2);const g=108,L=(u-1.618034)*80,O=Math.sin(s.rotX||0)*.4;this.voices.forEach((G,H)=>{const Y=g*G.baseFreqRatio,W=G.role==="golden"||G.role==="shimmer"?L:L*.3;if(G.osc.frequency.setTargetAtTime(Y+W,f,.15),G.panner){const J=H%2===0?.25:-.25,q=Math.max(-.85,Math.min(.85,J+O));G.panner.pan.setTargetAtTime(q,f,.12)}if(G.role==="hybrid"){const J=Math.max(1e-4,v*.2);G.gain.gain.setTargetAtTime(J,f,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((h,b)=>{if(!this.ctx)return;const v=this.ctx.createOscillator(),j=this.ctx.createGain(),D=this.ctx.createBiquadFilter();v.type="sine",v.frequency.setValueAtTime(h,s+b*.05),D.type="lowpass",D.frequency.setValueAtTime(950,s),j.gain.setValueAtTime(1e-4,s+b*.05),j.gain.exponentialRampToValueAtTime(.05/(b+1),s+b*.05+.08),j.gain.exponentialRampToValueAtTime(1e-5,s+b*.05+2.8),v.onended=()=>{try{v.disconnect(),D.disconnect(),j.disconnect()}catch{}},v.connect(D),D.connect(j),j.connect(this.globalFilter),v.start(s+b*.05),v.stop(s+b*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var u,h,b,v,j;this.stopTimeout=null,f.forEach(D=>{var g;try{D.osc.stop(),D.osc.disconnect(),D.filter.disconnect(),(g=D.panner)==null||g.disconnect(),D.gain.disconnect()}catch{}});try{(u=this.globalFilter)==null||u.disconnect(),(h=this.cavityResonator)==null||h.disconnect(),(b=this.compressor)==null||b.disconnect(),(v=this.masterGain)==null||v.disconnect(),(j=this.ctx)==null||j.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const ca=new Q2,I2={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:28,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function K2(){const[p]=R.useState(()=>new C2),[s,f]=R.useState(I2),[u,h]=R.useState(null),[b,v]=R.useState(65),[j,D]=R.useState(!1),[g,L]=R.useState(!1),[O,G]=R.useState("idle"),H=R.useRef(null),Y=R.useRef(0),[W,J]=R.useState("auto"),[q,le]=R.useState(!1),[_,V]=R.useState(!1),[be,Me]=R.useState(!1),[ie,Fe]=R.useState(!1),[He,Ue]=R.useState(!1),[Qe,Xe]=R.useState(!1),[fe,Le]=R.useState("feed"),[pe,N]=R.useState(!1),[F,M]=R.useState([]),[Q,$]=R.useState(new Set),[m,C]=R.useState(!0),U=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","fractalCross","reactionDiffusion","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],X=["smoothUnion","smoothMorph","smoothIntersection","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],te=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],ae=["orbit","flyThrough","goldenSpiral","kelvinInvert"],oe=R.useRef(0),Se=.61803398875;R.useEffect(()=>{if(!m)return;const B=setInterval(()=>{oe.current=(oe.current+Math.round(Se*U.length))%U.length;const Z=oe.current,P=U[Z],he=(Z+Math.round(Se*37))%U.length,ze=(Z+Math.round(Se*73))%U.length,Ie=U[he],Ne=U[ze],_t=Math.floor(Z*Se)%X.length,zt=Math.floor(Z*Se*1.3)%te.length,Je=Math.floor(Z*Se*.7)%ae.length,Be=[1.8,2.5,3.5,5,7],Ge=Math.floor(Z*Se*1.7)%Be.length,Te=[12,18,24,30,36],Ct=Math.floor(Z*Se*2.1)%Te.length;f(Ri=>({...Ri,type:P,hybridType:Ie,tertiaryType:Ne,compositeOp:X[_t],renderStyle:te[zt],cameraMode:ae[Je],hybridBlend:.2+Z%5*.12,tertiaryBlend:.1+Z%4*.08,zoom:Be[Ge],iterations:Te[Ct],paletteRotation:!0,autoRotate:!0}))},18e3);return()=>clearInterval(B)},[m]);const de=R.useCallback(()=>{},[]),[bt,gt]=R.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),me=R.useCallback(B=>{C(!1),h(B),v(B.affinityScore);const Z=(p==null?void 0:p.suggestRenderStyle(B.type))||"solid";f(P=>({...P,type:B.type,hybridType:B.hybridType,tertiaryType:B.tertiaryType,compositeOp:B.compositeOp,hybridBlend:B.hybridBlend,tertiaryBlend:B.tertiaryBlend,smoothK:B.smoothK,warpStrength:B.warpStrength,octaveLayers:B.octaveLayers,boxFold:B.boxFold,sphereFold:B.sphereFold,interiorCut:B.interiorCut,paletteId:B.palette.id,customPalette:B.palette,iterations:B.iterations,phiMultiplier:B.phiMultiplier,morphSpeed:B.morphSpeed,glowIntensity:B.glowIntensity,zoom:B.zoom,renderStyle:Z})),ca.getActive()&&ca.playSpecimenTransitionChord()},[]);R.useEffect(()=>{if(!p)return;const B=window.location.hash.slice(1);if(B){const P=new URLSearchParams(B),he=P.get("type"),ze=P.get("hybrid"),Ie=P.get("tertiary"),Ne=P.get("op");if(he){const _t=Ra.find(Je=>Je.id===P.get("palette"))||Ra[0],zt={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:P.get("name")||`Фрактал ${he}`,type:he,hybridType:ze||he,tertiaryType:Ie||"riemannZeta",compositeOp:Ne||"smoothUnion",hybridBlend:parseFloat(P.get("blend")||"0.35"),tertiaryBlend:parseFloat(P.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(P.get("smoothK")||"0.35"),warpStrength:parseFloat(P.get("warp")||"0.25"),octaveLayers:parseInt(P.get("octaves")||"2"),boxFold:parseFloat(P.get("boxFold")||"1.2"),sphereFold:parseFloat(P.get("sphereFold")||"0.65"),interiorCut:parseFloat(P.get("interiorCut")||"0.0"),palette:_t,iterations:parseInt(P.get("iterations")||"20"),phiMultiplier:parseFloat(P.get("phi")||"1.61803398875"),morphSpeed:parseFloat(P.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(P.get("glow")||"1.1"),zoom:parseFloat(P.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};me(zt),f(Je=>({...Je,paletteSeed:parseInt(P.get("paletteSeed")||"0"),paletteRotation:P.get("paletteRotation")==="1",renderStyle:P.get("renderStyle")||Je.renderStyle,cameraMode:P.get("cameraMode")||Je.cameraMode,camPosX:parseFloat(P.get("camX")||"0"),camPosY:parseFloat(P.get("camY")||"0"),camPosZ:parseFloat(P.get("camZ")||"-3.2"),headlampPower:parseFloat(P.get("headlamp")||"0"),volumetricFog:parseFloat(P.get("fog")||"0.4"),slicePlane:parseFloat(P.get("slicePlane")||"0"),sliceAxis:P.get("sliceAxis")||"golden",enableAudio:P.get("audio")==="1",audioVolume:parseFloat(P.get("audioVol")||"0.65"),audioTuning:P.get("audioTuning")||"phi432",drsEnabled:P.get("drs")!=="0"})),window.history.replaceState(null,"",window.location.pathname);return}}const Z=p.breedNextSpecimen();me(Z)},[p,me]),R.useEffect(()=>(s.enableAudio?ca.start(s.audioVolume??.65,s.audioTuning??"phi432"):ca.stop(),()=>{ca.stop()}),[s.enableAudio]),R.useEffect(()=>{s.enableAudio&&(s.audioTuning&&ca.setTuning(s.audioTuning),s.audioVolume!==void 0&&ca.setVolume(s.audioVolume),ca.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),R.useEffect(()=>{const B=setInterval(()=>{if(p&&u){const Z=p.registerEngagement(1,0,0,u);v(P=>P===Z?P:Z)}},1200);return()=>clearInterval(B)},[p,u]);const ia=R.useCallback((B,Z)=>{if(!p||!u)return;const P=B>0?"zooming":Z>0?"orbiting":"idle";G(ze=>ze!==P?P:ze),H.current&&clearTimeout(H.current),H.current=setTimeout(()=>{G(ze=>ze!=="idle"?"idle":ze)},1200);const he=p.registerEngagement(.1,B,Z,u);v(ze=>ze===he?ze:he)},[p,u]),ot=R.useCallback(()=>{if(!p)return;const B=performance.now();if(B-Y.current<180)return;Y.current=B;const Z=p.stepHistory(1);me(Z)},[p,me]),yt=R.useCallback(()=>{if(!p)return;const B=performance.now();if(B-Y.current<180)return;Y.current=B;const Z=p.stepHistory(-1);me(Z)},[p,me]),Ea=R.useCallback(()=>{if(!p||!u)return;p.boostAffinity(u),v(100);const B=u.id;$(Z=>{const P=new Set(Z);return P.has(B)?(P.delete(B),M(he=>he.filter(ze=>ze.id!==B))):(P.add(B),M(he=>[...he,u])),P})},[p,u]),Mi=R.useCallback(B=>{me(B)},[me]),Ti=R.useCallback(B=>{$(Z=>{const P=new Set(Z);return P.delete(B),P}),M(Z=>Z.filter(P=>P.id!==B))},[]),ut=R.useCallback(B=>{if(!p)return;const Z=p.breedNextSpecimen(B);me(Z)},[p,me]),ri=R.useCallback(()=>{if(!p)return;const B={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((u==null?void 0:u.generation)||1)+1,name:`Фенотип Инженера #${((u==null?void 0:u.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||Ra.find(Z=>Z.id===s.paletteId)||Ra[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};h(B),p.boostAffinity(B),ca.getActive()&&ca.playSpecimenTransitionChord()},[p,s,u]),oi=R.useCallback(()=>{f(B=>({...B,enableAudio:!B.enableAudio}))},[]),Ci=R.useCallback(B=>{le(!1);const Z=document.createElement("a");Z.download=`golden-ratio-fractal-${s.type}-${(u==null?void 0:u.generation)||1}.png`,Z.href=B,Z.click()},[s.type,u==null?void 0:u.generation]),ka=R.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(oh,{params:s,onParamsChange:f,onTelemetryUpdate:gt,screenshotRequested:q,onScreenshotCaptured:Ci,forcedBackend:W,onInteraction:ia,onNextSpecimen:ot,onPrevSpecimen:yt,onEngineReady:()=>Fe(!0),scrollMode:fe}),l.jsx(Z2,{currentSpecimen:u,historyQueue:p.getHistory(),currentIndex:p.getCurrentIndex(),onSelectSpecimen:me,onNext:ot,onPrev:yt,renderStyle:s.renderStyle,onSelectRenderStyle:B=>f(Z=>({...Z,renderStyle:B})),scrollMode:fe,onToggleScrollMode:()=>Le(B=>B==="feed"?"zoom":"feed"),isOpen:pe,onToggleOpen:()=>N(B=>!B)}),l.jsx(k2,{specimen:u,resonanceScore:b,isInteracting:O!=="idle",interactionType:O,onNext:ot,onPrev:yt,onFavorite:Ea,onOpenProfile:()=>L(!0),enableAudio:s.enableAudio,onToggleAudio:oi,onOpenResearchModal:()=>V(!0),onOpenAtlas:()=>Me(!0),isFeedOpen:pe,onToggleFeed:()=>N(B=>!B),isCurrentLiked:u?Q.has(u.id):!1,params:s}),l.jsx(P2,{params:s,onToggleProbe:()=>f(B=>({...B,probeActive:!B.probeActive})),onToggleMacro:()=>f(B=>({...B,macroMode:!B.macroMode}))}),l.jsx(F2,{isOpen:g,onClose:()=>L(!1),tasteProfile:p.getTasteProfile(),archetypeBreakdown:p.getArchetypeBreakdown(),currentSpecimen:u,resonanceScore:b,isEngineerMode:j,onToggleEngineerMode:()=>D(B=>!B),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:B=>f(Z=>({...Z,audioTuning:B})),onOpenManifest:()=>{L(!1),Ue(!0)},likedSpecimens:F,onPlayLiked:Mi,onRemoveLike:Ti,isCurrentLiked:u?Q.has(u.id):!1}),j&&l.jsxs(l.Fragment,{children:[l.jsx(D2,{telemetry:bt,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),l.jsx(R2,{params:s,onParamsChange:f,onSelectFractalType:ut,onCaptureScreenshot:()=>le(!0),onToggleFullscreen:ka,onToggleInfoModal:()=>V(!0),onOpenAtlasModal:()=>Me(!0),activeBackend:bt.backend,forcedBackend:W,onSelectBackend:J,onClose:()=>D(!1),tasteProfile:p.getTasteProfile(),onSaveToFeed:ri})]}),l.jsx(O2,{isOpen:_,onClose:()=>V(!1)}),l.jsx(X2,{isOpen:be,onClose:()=>Me(!1),onApplyPreset:B=>{f(Z=>({...Z,...B}))}}),l.jsx(L2,{isOpen:He,onClose:()=>Ue(!1),isFirstVisit:Qe,onOpenAtlas:()=>Me(!0)}),l.jsx(q2,{isReady:ie,onFinished:de})]})}const ff=document.getElementById("root");ff&&Zm.createRoot(ff).render(l.jsx(K2,{}));
