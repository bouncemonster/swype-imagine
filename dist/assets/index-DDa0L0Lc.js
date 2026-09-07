(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))c(y);new MutationObserver(y=>{for(const _ of y)if(_.type==="childList")for(const j of _.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&c(j)}).observe(document,{childList:!0,subtree:!0});function d(y){const _={};return y.integrity&&(_.integrity=y.integrity),y.referrerPolicy&&(_.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?_.credentials="include":y.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function c(y){if(y.ep)return;y.ep=!0;const _=d(y);fetch(y.href,_)}})();function Lm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Ls={exports:{}},ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function Bm(){if(Zf)return ti;Zf=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,y,_){var j=null;if(_!==void 0&&(j=""+_),y.key!==void 0&&(j=""+y.key),"key"in y){_={};for(var k in y)k!=="key"&&(_[k]=y[k])}else _=y;return y=_.ref,{$$typeof:u,type:c,key:j,ref:y!==void 0?y:null,props:_}}return ti.Fragment=f,ti.jsx=d,ti.jsxs=d,ti}var Qf;function Um(){return Qf||(Qf=1,Ls.exports=Bm()),Ls.exports}var i=Um(),Bs={exports:{}},ai={},Us={exports:{}},Gs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function Gm(){return Kf||(Kf=1,(function(u){function f(N,E){var Z=N.length;N.push(E);e:for(;0<Z;){var W=Z-1>>>1,ue=N[W];if(0<y(ue,E))N[W]=E,N[Z]=ue,Z=W;else break e}}function d(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var E=N[0],Z=N.pop();if(Z!==E){N[0]=Z;e:for(var W=0,ue=N.length,x=ue>>>1;W<x;){var T=2*(W+1)-1,Y=N[T],H=T+1,P=N[H];if(0>y(Y,Z))H<ue&&0>y(P,Y)?(N[W]=P,N[H]=Z,W=H):(N[W]=Y,N[T]=Z,W=T);else if(H<ue&&0>y(P,Z))N[W]=P,N[H]=Z,W=H;else break e}}return E}function y(N,E){var Z=N.sortIndex-E.sortIndex;return Z!==0?Z:N.id-E.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;u.unstable_now=function(){return _.now()}}else{var j=Date,k=j.now();u.unstable_now=function(){return j.now()-k}}var M=[],m=[],L=1,C=null,U=3,B=!1,Q=!1,ee=!1,I=!1,X=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function q(N){for(var E=d(m);E!==null;){if(E.callback===null)c(m);else if(E.startTime<=N)c(m),E.sortIndex=E.expirationTime,f(M,E);else break;E=d(m)}}function ve(N){if(ee=!1,q(N),!Q)if(d(M)!==null)Q=!0,be||(be=!0,He());else{var E=d(m);E!==null&&de(ve,E.startTime-N)}}var be=!1,ae=-1,je=5,we=-1;function Qe(){return I?!0:!(u.unstable_now()-we<je)}function Ge(){if(I=!1,be){var N=u.unstable_now();we=N;var E=!0;try{e:{Q=!1,ee&&(ee=!1,re(ae),ae=-1),B=!0;var Z=U;try{t:{for(q(N),C=d(M);C!==null&&!(C.expirationTime>N&&Qe());){var W=C.callback;if(typeof W=="function"){C.callback=null,U=C.priorityLevel;var ue=W(C.expirationTime<=N);if(N=u.unstable_now(),typeof ue=="function"){C.callback=ue,q(N),E=!0;break t}C===d(M)&&c(M),q(N)}else c(M);C=d(M)}if(C!==null)E=!0;else{var x=d(m);x!==null&&de(ve,x.startTime-N),E=!1}}break e}finally{C=null,U=Z,B=!1}E=void 0}}finally{E?He():be=!1}}}var He;if(typeof b=="function")He=function(){b(Ge)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Xe=Ke.port2;Ke.port1.onmessage=Ge,He=function(){Xe.postMessage(null)}}else He=function(){X(Ge,0)};function de(N,E){ae=X(function(){N(u.unstable_now())},E)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(N){N.callback=null},u.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<N?Math.floor(1e3/N):5},u.unstable_getCurrentPriorityLevel=function(){return U},u.unstable_next=function(N){switch(U){case 1:case 2:case 3:var E=3;break;default:E=U}var Z=U;U=E;try{return N()}finally{U=Z}},u.unstable_requestPaint=function(){I=!0},u.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=U;U=N;try{return E()}finally{U=Z}},u.unstable_scheduleCallback=function(N,E,Z){var W=u.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?W+Z:W):Z=W,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,N={id:L++,callback:E,priorityLevel:N,startTime:Z,expirationTime:ue,sortIndex:-1},Z>W?(N.sortIndex=Z,f(m,N),d(M)===null&&N===d(m)&&(ee?(re(ae),ae=-1):ee=!0,de(ve,Z-W))):(N.sortIndex=ue,f(M,N),Q||B||(Q=!0,be||(be=!0,He()))),N},u.unstable_shouldYield=Qe,u.unstable_wrapCallback=function(N){var E=U;return function(){var Z=U;U=E;try{return N.apply(this,arguments)}finally{U=Z}}}})(Gs)),Gs}var Pf;function Hm(){return Pf||(Pf=1,Us.exports=Gm()),Us.exports}var Hs={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function Fm(){if(Jf)return ie;Jf=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),j=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.iterator;function B(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,I={};function X(x,T,Y){this.props=x,this.context=T,this.refs=I,this.updater=Y||Q}X.prototype.isReactComponent={},X.prototype.setState=function(x,T){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,T,"setState")},X.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function re(){}re.prototype=X.prototype;function b(x,T,Y){this.props=x,this.context=T,this.refs=I,this.updater=Y||Q}var q=b.prototype=new re;q.constructor=b,ee(q,X.prototype),q.isPureReactComponent=!0;var ve=Array.isArray;function be(){}var ae={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function we(x,T,Y){var H=Y.ref;return{$$typeof:u,type:x,key:T,ref:H!==void 0?H:null,props:Y}}function Qe(x,T){return we(x.type,T,x.props)}function Ge(x){return typeof x=="object"&&x!==null&&x.$$typeof===u}function He(x){var T={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return T[Y]})}var Ke=/\/+/g;function Xe(x,T){return typeof x=="object"&&x!==null&&x.key!=null?He(""+x.key):T.toString(36)}function de(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(be,be):(x.status="pending",x.then(function(T){x.status==="pending"&&(x.status="fulfilled",x.value=T)},function(T){x.status==="pending"&&(x.status="rejected",x.reason=T)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,T,Y,H,P){var ne=typeof x;(ne==="undefined"||ne==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(ne){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case u:case f:pe=!0;break;case L:return pe=x._init,N(pe(x._payload),T,Y,H,P)}}if(pe)return P=P(x),pe=H===""?"."+Xe(x,0):H,ve(P)?(Y="",pe!=null&&(Y=pe.replace(Ke,"$&/")+"/"),N(P,T,Y,"",function(Vt){return Vt})):P!=null&&(Ge(P)&&(P=Qe(P,Y+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(Ke,"$&/")+"/")+pe)),T.push(P)),1;pe=0;var Le=H===""?".":H+":";if(ve(x))for(var Ee=0;Ee<x.length;Ee++)H=x[Ee],ne=Le+Xe(H,Ee),pe+=N(H,T,Y,ne,P);else if(Ee=B(x),typeof Ee=="function")for(x=Ee.call(x),Ee=0;!(H=x.next()).done;)H=H.value,ne=Le+Xe(H,Ee++),pe+=N(H,T,Y,ne,P);else if(ne==="object"){if(typeof x.then=="function")return N(de(x),T,Y,H,P);throw T=String(x),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return pe}function E(x,T,Y){if(x==null)return x;var H=[],P=0;return N(x,H,"","",function(ne){return T.call(Y,ne,P++)}),H}function Z(x){if(x._status===-1){var T=x._result;T=T(),T.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=T)}if(x._status===1)return x._result.default;throw x._result}var W=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},ue={map:E,forEach:function(x,T,Y){E(x,function(){T.apply(this,arguments)},Y)},count:function(x){var T=0;return E(x,function(){T++}),T},toArray:function(x){return E(x,function(T){return T})||[]},only:function(x){if(!Ge(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ie.Activity=C,ie.Children=ue,ie.Component=X,ie.Fragment=d,ie.Profiler=y,ie.PureComponent=b,ie.StrictMode=c,ie.Suspense=M,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ae.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(x,T,Y){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var H=ee({},x.props),P=x.key;if(T!=null)for(ne in T.key!==void 0&&(P=""+T.key),T)!je.call(T,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&T.ref===void 0||(H[ne]=T[ne]);var ne=arguments.length-2;if(ne===1)H.children=Y;else if(1<ne){for(var pe=Array(ne),Le=0;Le<ne;Le++)pe[Le]=arguments[Le+2];H.children=pe}return we(x.type,P,H)},ie.createContext=function(x){return x={$$typeof:j,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:_,_context:x},x},ie.createElement=function(x,T,Y){var H,P={},ne=null;if(T!=null)for(H in T.key!==void 0&&(ne=""+T.key),T)je.call(T,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(P[H]=T[H]);var pe=arguments.length-2;if(pe===1)P.children=Y;else if(1<pe){for(var Le=Array(pe),Ee=0;Ee<pe;Ee++)Le[Ee]=arguments[Ee+2];P.children=Le}if(x&&x.defaultProps)for(H in pe=x.defaultProps,pe)P[H]===void 0&&(P[H]=pe[H]);return we(x,ne,P)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:k,render:x}},ie.isValidElement=Ge,ie.lazy=function(x){return{$$typeof:L,_payload:{_status:-1,_result:x},_init:Z}},ie.memo=function(x,T){return{$$typeof:m,type:x,compare:T===void 0?null:T}},ie.startTransition=function(x){var T=ae.T,Y={};ae.T=Y;try{var H=x(),P=ae.S;P!==null&&P(Y,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(be,W)}catch(ne){W(ne)}finally{T!==null&&Y.types!==null&&(T.types=Y.types),ae.T=T}},ie.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},ie.use=function(x){return ae.H.use(x)},ie.useActionState=function(x,T,Y){return ae.H.useActionState(x,T,Y)},ie.useCallback=function(x,T){return ae.H.useCallback(x,T)},ie.useContext=function(x){return ae.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,T){return ae.H.useDeferredValue(x,T)},ie.useEffect=function(x,T){return ae.H.useEffect(x,T)},ie.useEffectEvent=function(x){return ae.H.useEffectEvent(x)},ie.useId=function(){return ae.H.useId()},ie.useImperativeHandle=function(x,T,Y){return ae.H.useImperativeHandle(x,T,Y)},ie.useInsertionEffect=function(x,T){return ae.H.useInsertionEffect(x,T)},ie.useLayoutEffect=function(x,T){return ae.H.useLayoutEffect(x,T)},ie.useMemo=function(x,T){return ae.H.useMemo(x,T)},ie.useOptimistic=function(x,T){return ae.H.useOptimistic(x,T)},ie.useReducer=function(x,T,Y){return ae.H.useReducer(x,T,Y)},ie.useRef=function(x){return ae.H.useRef(x)},ie.useState=function(x){return ae.H.useState(x)},ie.useSyncExternalStore=function(x,T,Y){return ae.H.useSyncExternalStore(x,T,Y)},ie.useTransition=function(){return ae.H.useTransition()},ie.version="19.2.8",ie}var Wf;function Qs(){return Wf||(Wf=1,Hs.exports=Fm()),Hs.exports}var Fs={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Ym(){if($f)return ht;$f=1;var u=Qs();function f(M){var m="https://react.dev/errors/"+M;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)m+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+M+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},y=Symbol.for("react.portal");function _(M,m,L){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:C==null?null:""+C,children:M,containerInfo:m,implementation:L}}var j=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(M,m){if(M==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ht.createPortal=function(M,m){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(f(299));return _(M,m,null,L)},ht.flushSync=function(M){var m=j.T,L=c.p;try{if(j.T=null,c.p=2,M)return M()}finally{j.T=m,c.p=L,c.d.f()}},ht.preconnect=function(M,m){typeof M=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(M,m))},ht.prefetchDNS=function(M){typeof M=="string"&&c.d.D(M)},ht.preinit=function(M,m){if(typeof M=="string"&&m&&typeof m.as=="string"){var L=m.as,C=k(L,m.crossOrigin),U=typeof m.integrity=="string"?m.integrity:void 0,B=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;L==="style"?c.d.S(M,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:C,integrity:U,fetchPriority:B}):L==="script"&&c.d.X(M,{crossOrigin:C,integrity:U,fetchPriority:B,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ht.preinitModule=function(M,m){if(typeof M=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var L=k(m.as,m.crossOrigin);c.d.M(M,{crossOrigin:L,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(M)},ht.preload=function(M,m){if(typeof M=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var L=m.as,C=k(L,m.crossOrigin);c.d.L(M,L,{crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ht.preloadModule=function(M,m){if(typeof M=="string")if(m){var L=k(m.as,m.crossOrigin);c.d.m(M,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:L,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(M)},ht.requestFormReset=function(M){c.d.r(M)},ht.unstable_batchedUpdates=function(M,m){return M(m)},ht.useFormState=function(M,m,L){return j.H.useFormState(M,m,L)},ht.useFormStatus=function(){return j.H.useHostTransitionStatus()},ht.version="19.2.8",ht}var If;function Xm(){if(If)return Fs.exports;If=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Fs.exports=Ym(),Fs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Vm(){if(ed)return ai;ed=1;var u=Hm(),f=Qs(),d=Xm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function j(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(_(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return M(n),e;if(r===l)return M(n),t;r=r.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=r;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,l=r;break}if(s===l){o=!0,l=n,a=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===a){o=!0,a=r,l=n;break}if(s===l){o=!0,l=r,a=n;break}s=s.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,U=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),b=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case X:return"Profiler";case I:return"StrictMode";case ve:return"Suspense";case be:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case b:return e.displayName||"Context";case re:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var de=Array.isArray,N=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},W=[],ue=-1;function x(e){return{current:e}}function T(e){0>ue||(e.current=W[ue],W[ue]=null,ue--)}function Y(e,t){ue++,W[ue]=e.current,e.current=t}var H=x(null),P=x(null),ne=x(null),pe=x(null);function Le(e,t){switch(Y(ne,t),Y(P,e),Y(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hf(t),e=xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(H),Y(H,e)}function Ee(){T(H),T(P),T(ne)}function Vt(e){e.memoizedState!==null&&Y(pe,e);var t=H.current,a=xf(t,e.type);t!==a&&(Y(P,e),Y(H,a))}function Aa(e){P.current===e&&(T(H),T(P)),pe.current===e&&(T(pe),Wn._currentValue=Z)}var al,ll;function Zt(e){if(al===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);al=t&&t[1]||"",ll=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+al+e+ll}var nl=!1;function G(e,t){if(!e||nl)return"";nl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(w){var z=w}Reflect.construct(e,[],R)}else{try{R.call()}catch(w){z=w}e.call(R.prototype)}}else{try{throw Error()}catch(w){z=w}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(w){if(w&&z&&typeof w.stack=="string")return[w.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],s=r[1];if(o&&s){var p=o.split(`
`),S=s.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===S.length)for(l=p.length-1,n=S.length-1;1<=l&&0<=n&&p[l]!==S[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==S[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==S[n]){var D=`
`+p[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{nl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function F(e,t){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return e.child!==t&&t!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return G(e.type,!1);case 11:return G(e.type.render,!1);case 1:return G(e.type,!0);case 31:return Zt("Activity");default:return""}}function V(e){try{var t="",a=null;do t+=F(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var le=Object.prototype.hasOwnProperty,fe=u.unstable_scheduleCallback,Be=u.unstable_cancelCallback,ze=u.unstable_shouldYield,rt=u.unstable_requestPaint,Ce=u.unstable_now,gt=u.unstable_getCurrentPriorityLevel,tt=u.unstable_ImmediatePriority,Qt=u.unstable_UserBlockingPriority,dt=u.unstable_NormalPriority,oa=u.unstable_LowPriority,oi=u.unstable_IdlePriority,Nr=u.log,si=u.unstable_setDisableYieldValue,Ra=null,pt=null;function Pe(e){if(typeof Nr=="function"&&si(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(Ra,e)}catch{}}var Je=Math.clz32?Math.clz32:ca,wt=Math.log,sa=Math.LN2;function ca(e){return e>>>=0,e===0?32:31-(wt(e)/sa|0)|0}var It=256,ua=262144,fa=4194304;function mt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~r,l!==0?n=mt(l):(o&=s,o!==0?n=mt(o):a||(a=s&~e,a!==0&&(n=mt(a))))):(s=l&~r,s!==0?n=mt(s):o!==0?n=mt(o):a||(a=l&~e,a!==0&&(n=mt(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function ea(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jt(){var e=fa;return fa<<=1,(fa&62914560)===0&&(fa=4194304),e}function ta(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wd(e,t,a,l,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(a=o&~a;0<a;){var D=31-Je(a),R=1<<D;s[D]=0,p[D]=-1;var z=S[D];if(z!==null)for(S[D]=null,D=0;D<z.length;D++){var w=z[D];w!==null&&(w.lane&=-536870913)}a&=~R}l!==0&&Js(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Js(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Je(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ws(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Je(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function $s(e,t){var a=t&-t;return a=(a&42)!==0?1:wr(a),(a&(e.suspendedLanes|t))!==0?0:a}function wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:Uf(e.type))}function ec(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var Ca=Math.random().toString(36).slice(2),ot="__reactFiber$"+Ca,yt="__reactProps$"+Ca,zl="__reactContainer$"+Ca,Dr="__reactEvents$"+Ca,jd="__reactListeners$"+Ca,Dd="__reactHandles$"+Ca,tc="__reactResources$"+Ca,dn="__reactMarker$"+Ca;function Tr(e){delete e[ot],delete e[yt],delete e[Dr],delete e[jd],delete e[Dd]}function Nl(e){var t=e[ot];if(t)return t;for(var a=e.parentNode;a;){if(t=a[zl]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=zf(e);e!==null;){if(a=e[ot])return a;e=zf(e)}return t}e=a,a=e.parentNode}return null}function wl(e){if(e=e[ot]||e[zl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function pn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function jl(e){var t=e[tc];return t||(t=e[tc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[dn]=!0}var ac=new Set,lc={};function il(e,t){Dl(e,t),Dl(e+"Capture",t)}function Dl(e,t){for(lc[e]=t,e=0;e<t.length;e++)ac.add(t[e])}var Td=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},ic={};function Md(e){return le.call(ic,e)?!0:le.call(nc,e)?!1:Td.test(e)?ic[e]=!0:(nc[e]=!0,!1)}function ci(e,t,a){if(Md(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ui(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function da(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ad(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mr(e){if(!e._valueTracker){var t=rc(e)?"checked":"value";e._valueTracker=Ad(e,t,""+e[t])}}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=rc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rd=/[\n"\\]/g;function qt(e){return e.replace(Rd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ar(e,t,a,l,n,r,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Rr(e,o,kt(t)):a!=null?Rr(e,o,kt(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+kt(s):e.removeAttribute("name")}function sc(e,t,a,l,n,r,o,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Mr(e);return}a=a!=null?""+kt(a):"",t=t!=null?""+kt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Mr(e)}function Rr(e,t,a){t==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Tl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function cc(e,t,a){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+kt(a):""}function uc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(de(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=kt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Mr(e)}function Ml(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Cd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Cd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function dc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&fc(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&fc(e,r,t[r])}function Cr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ed=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function di(e){return Ed.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var Or=null;function Er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Rl=null;function pc(e){var t=wl(e);if(t&&(e=t.stateNode)){var a=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ar(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[yt]||null;if(!n)throw Error(c(90));Ar(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&oc(l)}break e;case"textarea":cc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Tl(e,!!a.multiple,t,!1)}}}var kr=!1;function mc(e,t,a){if(kr)return e(t,a);kr=!0;try{var l=e(t);return l}finally{if(kr=!1,(Al!==null||Rl!==null)&&(Ii(),Al&&(t=Al,e=Rl,Rl=Al=null,pc(t),e)))for(t=0;t<e.length;t++)pc(e[t])}}function mn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[yt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(ma)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){qr=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{qr=!1}var Oa=null,Lr=null,pi=null;function hc(){if(pi)return pi;var e,t=Lr,a=t.length,l,n="value"in Oa?Oa.value:Oa.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[r-l];l++);return pi=n.slice(e,1<l?1-l:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function xc(){return!1}function bt(e){function t(a,l,n,r,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hi:xc,this.isPropagationStopped=xc,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=bt(rl),xn=C({},rl,{view:0,detail:0}),kd=bt(xn),Br,Ur,gn,gi=C({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Br=e.screenX-gn.screenX,Ur=e.screenY-gn.screenY):Ur=Br=0,gn=e),Br)},movementY:function(e){return"movementY"in e?e.movementY:Ur}}),gc=bt(gi),qd=C({},gi,{dataTransfer:0}),Ld=bt(qd),Bd=C({},xn,{relatedTarget:0}),Gr=bt(Bd),Ud=C({},rl,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=bt(Ud),Hd=C({},rl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=bt(Hd),Yd=C({},rl,{data:0}),yc=bt(Yd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zd[e])?!!t[e]:!1}function Hr(){return Qd}var Kd=C({},xn,{key:function(e){if(e.key){var t=Xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=bt(Kd),Jd=C({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=bt(Jd),Wd=C({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),$d=bt(Wd),Id=C({},rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=bt(Id),tp=C({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=bt(tp),lp=C({},rl,{newState:0,oldState:0}),np=bt(lp),ip=[9,13,27,32],Fr=ma&&"CompositionEvent"in window,yn=null;ma&&"documentMode"in document&&(yn=document.documentMode);var rp=ma&&"TextEvent"in window&&!yn,vc=ma&&(!Fr||yn&&8<yn&&11>=yn),_c=" ",Sc=!1;function zc(e,t){switch(e){case"keyup":return ip.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cl=!1;function op(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Sc=!0,_c);case"textInput":return e=t.data,e===_c&&Sc?null:e;default:return null}}function sp(e,t){if(Cl)return e==="compositionend"||!Fr&&zc(e,t)?(e=hc(),pi=Lr=Oa=null,Cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vc&&t.locale!=="ko"?null:t.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cp[e.type]:t==="textarea"}function jc(e,t,a,l){Al?Rl?Rl.push(l):Rl=[l]:Al=l,t=rr(t,"onChange"),0<t.length&&(a=new xi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var bn=null,vn=null;function up(e){cf(e,0)}function yi(e){var t=pn(e);if(oc(t))return e}function Dc(e,t){if(e==="change")return t}var Tc=!1;if(ma){var Yr;if(ma){var Xr="oninput"in document;if(!Xr){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Xr=typeof Mc.oninput=="function"}Yr=Xr}else Yr=!1;Tc=Yr&&(!document.documentMode||9<document.documentMode)}function Ac(){bn&&(bn.detachEvent("onpropertychange",Rc),vn=bn=null)}function Rc(e){if(e.propertyName==="value"&&yi(vn)){var t=[];jc(t,vn,e,Er(e)),mc(up,t)}}function fp(e,t,a){e==="focusin"?(Ac(),bn=t,vn=a,bn.attachEvent("onpropertychange",Rc)):e==="focusout"&&Ac()}function dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(vn)}function pp(e,t){if(e==="click")return yi(t)}function mp(e,t){if(e==="input"||e==="change")return yi(t)}function hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:hp;function _n(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!le.call(t,n)||!Dt(e[n],t[n]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var a=Cc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cc(a)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=fi(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xp=ma&&"documentMode"in document&&11>=document.documentMode,Ol=null,Zr=null,Sn=null,Qr=!1;function qc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qr||Ol==null||Ol!==fi(l)||(l=Ol,"selectionStart"in l&&Vr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sn&&_n(Sn,l)||(Sn=l,l=rr(Zr,"onSelect"),0<l.length&&(t=new xi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ol)))}function ol(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var El={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionrun:ol("Transition","TransitionRun"),transitionstart:ol("Transition","TransitionStart"),transitioncancel:ol("Transition","TransitionCancel"),transitionend:ol("Transition","TransitionEnd")},Kr={},Lc={};ma&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete El.animationend.animation,delete El.animationiteration.animation,delete El.animationstart.animation),"TransitionEvent"in window||delete El.transitionend.transition);function sl(e){if(Kr[e])return Kr[e];if(!El[e])return e;var t=El[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Lc)return Kr[e]=t[a];return e}var Bc=sl("animationend"),Uc=sl("animationiteration"),Gc=sl("animationstart"),gp=sl("transitionrun"),yp=sl("transitionstart"),bp=sl("transitioncancel"),Hc=sl("transitionend"),Fc=new Map,Pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pr.push("scrollEnd");function Pt(e,t){Fc.set(e,t),il(t,[e])}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],kl=0,Jr=0;function vi(){for(var e=kl,t=Jr=kl=0;t<e;){var a=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var n=Lt[t];Lt[t++]=null;var r=Lt[t];if(Lt[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}r!==0&&Yc(a,n,r)}}function _i(e,t,a,l){Lt[kl++]=e,Lt[kl++]=t,Lt[kl++]=a,Lt[kl++]=l,Jr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wr(e,t,a,l){return _i(e,t,a,l),Si(e)}function cl(e,t){return _i(e,null,null,t),Si(e)}function Yc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Je(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function Si(e){if(50<Xn)throw Xn=0,os=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ql={};function vp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,a,l){return new vp(e,t,a,l)}function $r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,t){var a=e.alternate;return a===null?(a=Tt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,a,l,n,r){var o=0;if(l=e,typeof e=="function")$r(e)&&(o=1);else if(typeof e=="string")o=wm(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=Tt(31,a,t,n),e.elementType=we,e.lanes=r,e;case ee:return ul(a.children,n,r,t);case I:o=8,n|=24;break;case X:return e=Tt(12,a,t,n|2),e.elementType=X,e.lanes=r,e;case ve:return e=Tt(13,a,t,n),e.elementType=ve,e.lanes=r,e;case be:return e=Tt(19,a,t,n),e.elementType=be,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case b:o=10;break e;case re:o=9;break e;case q:o=11;break e;case ae:o=14;break e;case je:o=16,l=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=Tt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function ul(e,t,a,l){return e=Tt(7,e,l,t),e.lanes=a,e}function Ir(e,t,a){return e=Tt(6,e,null,t),e.lanes=a,e}function Vc(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function eo(e,t,a){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zc=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=Zc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:V(t)},Zc.set(e,t),t)}return{value:e,source:t,stack:V(t)}}var Ll=[],Bl=0,Ni=null,zn=0,Ut=[],Gt=0,Ea=null,aa=1,la="";function xa(e,t){Ll[Bl++]=zn,Ll[Bl++]=Ni,Ni=e,zn=t}function Qc(e,t,a){Ut[Gt++]=aa,Ut[Gt++]=la,Ut[Gt++]=Ea,Ea=e;var l=aa;e=la;var n=32-Je(l)-1;l&=~(1<<n),a+=1;var r=32-Je(t)+n;if(30<r){var o=n-n%5;r=(l&(1<<o)-1).toString(32),l>>=o,n-=o,aa=1<<32-Je(t)+n|a<<n|l,la=r+e}else aa=1<<r|a<<n|l,la=e}function to(e){e.return!==null&&(xa(e,1),Qc(e,1,0))}function ao(e){for(;e===Ni;)Ni=Ll[--Bl],Ll[Bl]=null,zn=Ll[--Bl],Ll[Bl]=null;for(;e===Ea;)Ea=Ut[--Gt],Ut[Gt]=null,la=Ut[--Gt],Ut[Gt]=null,aa=Ut[--Gt],Ut[Gt]=null}function Kc(e,t){Ut[Gt++]=aa,Ut[Gt++]=la,Ut[Gt++]=Ea,aa=t.id,la=t.overflow,Ea=e}var st=null,ke=null,ye=!1,ka=null,Ht=!1,lo=Error(c(519));function qa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nn(Bt(t,e)),lo}function Pc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ot]=e,t[yt]=l,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<Zn.length;a++)he(Zn[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),sc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),uc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||pf(t.textContent,a)?(l.popover!=null&&(he("beforetoggle",t),he("toggle",t)),l.onScroll!=null&&he("scroll",t),l.onScrollEnd!=null&&he("scrollend",t),l.onClick!=null&&(t.onclick=pa),t=!0):t=!1,t||qa(e,!0)}function Jc(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:st=st.return}}function Ul(e){if(e!==st)return!1;if(!ye)return Jc(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ss(e.type,e.memoizedProps)),a=!a),a&&ke&&qa(e),Jc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=Sf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=Sf(e)}else t===27?(t=ke,Ja(e.type)?(e=Ds,Ds=null,ke=e):ke=t):ke=st?Yt(e.stateNode.nextSibling):null;return!0}function fl(){ke=st=null,ye=!1}function no(){var e=ka;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),ka=null),e}function Nn(e){ka===null?ka=[e]:ka.push(e)}var io=x(null),dl=null,ga=null;function La(e,t,a){Y(io,t._currentValue),t._currentValue=a}function ya(e){e._currentValue=io.current,T(io)}function ro(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function oo(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=n;for(var p=0;p<t.length;p++)if(s.context===t[p]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),ro(r.return,a,e),l||(o=null);break e}r=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),ro(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Gl(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var s=n.type;Dt(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===pe.current){if(o=n.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Wn):e=[Wn])}n=n.return}e!==null&&oo(t,e,a,l),t.flags|=262144}function wi(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pl(e){dl=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Wc(dl,e)}function ji(e,t){return dl===null&&pl(e),Wc(e,t)}function Wc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ga===null){if(e===null)throw Error(c(308));ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ga=ga.next=t;return a}var _p=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Sp=u.unstable_scheduleCallback,zp=u.unstable_NormalPriority,We={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function so(){return{controller:new _p,data:new Map,refCount:0}}function wn(e){e.refCount--,e.refCount===0&&Sp(zp,function(){e.controller.abort()})}var jn=null,co=0,Hl=0,Fl=null;function Np(e,t){if(jn===null){var a=jn=[];co=0,Hl=ps(),Fl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return co++,t.then($c,$c),t}function $c(){if(--co===0&&jn!==null){Fl!==null&&(Fl.status="fulfilled");var e=jn;jn=null,Hl=0,Fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ic=N.S;N.S=function(e,t){q0=Ce(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Np(e,t),Ic!==null&&Ic(e,t)};var ml=x(null);function uo(){var e=ml.current;return e!==null?e:Oe.pooledCache}function Di(e,t){t===null?Y(ml,ml.current):Y(ml,t.pool)}function eu(){var e=uo();return e===null?null:{parent:We._currentValue,pool:e}}var Yl=Error(c(460)),fo=Error(c(474)),Ti=Error(c(542)),Mi={then:function(){}};function tu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function au(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(pa,pa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nu(e),e;default:if(typeof t.status=="string")t.then(pa,pa);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nu(e),e}throw xl=t,Yl}}function hl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xl=a,Yl):a}}var xl=null;function lu(){if(xl===null)throw Error(c(459));var e=xl;return xl=null,e}function nu(e){if(e===Yl||e===Ti)throw Error(c(483))}var Xl=null,Dn=0;function Ai(e){var t=Dn;return Dn+=1,Xl===null&&(Xl=[]),au(Xl,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ri(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function iu(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function a(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function l(g){for(var h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function n(g,h){return g=ha(g,h),g.index=0,g.sibling=null,g}function r(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=67108866,h):v):(g.flags|=67108866,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function s(g,h,v,A){return h===null||h.tag!==6?(h=Ir(v,g.mode,A),h.return=g,h):(h=n(h,v),h.return=g,h)}function p(g,h,v,A){var $=v.type;return $===ee?D(g,h,v.props.children,A,v.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===je&&hl($)===h.type)?(h=n(h,v.props),Tn(h,v),h.return=g,h):(h=zi(v.type,v.key,v.props,null,g.mode,A),Tn(h,v),h.return=g,h)}function S(g,h,v,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=eo(v,g.mode,A),h.return=g,h):(h=n(h,v.children||[]),h.return=g,h)}function D(g,h,v,A,$){return h===null||h.tag!==7?(h=ul(v,g.mode,A,$),h.return=g,h):(h=n(h,v),h.return=g,h)}function R(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Ir(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case B:return v=zi(h.type,h.key,h.props,null,g.mode,v),Tn(v,h),v.return=g,v;case Q:return h=eo(h,g.mode,v),h.return=g,h;case je:return h=hl(h),R(g,h,v)}if(de(h)||He(h))return h=ul(h,g.mode,v,null),h.return=g,h;if(typeof h.then=="function")return R(g,Ai(h),v);if(h.$$typeof===b)return R(g,ji(g,h),v);Ri(g,h)}return null}function z(g,h,v,A){var $=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return $!==null?null:s(g,h,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case B:return v.key===$?p(g,h,v,A):null;case Q:return v.key===$?S(g,h,v,A):null;case je:return v=hl(v),z(g,h,v,A)}if(de(v)||He(v))return $!==null?null:D(g,h,v,A,null);if(typeof v.then=="function")return z(g,h,Ai(v),A);if(v.$$typeof===b)return z(g,h,ji(g,v),A);Ri(g,v)}return null}function w(g,h,v,A,$){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return g=g.get(v)||null,s(h,g,""+A,$);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case B:return g=g.get(A.key===null?v:A.key)||null,p(h,g,A,$);case Q:return g=g.get(A.key===null?v:A.key)||null,S(h,g,A,$);case je:return A=hl(A),w(g,h,v,A,$)}if(de(A)||He(A))return g=g.get(v)||null,D(h,g,A,$,null);if(typeof A.then=="function")return w(g,h,v,Ai(A),$);if(A.$$typeof===b)return w(g,h,v,ji(h,A),$);Ri(h,A)}return null}function K(g,h,v,A){for(var $=null,_e=null,J=h,ce=h=0,ge=null;J!==null&&ce<v.length;ce++){J.index>ce?(ge=J,J=null):ge=J.sibling;var Se=z(g,J,v[ce],A);if(Se===null){J===null&&(J=ge);break}e&&J&&Se.alternate===null&&t(g,J),h=r(Se,h,ce),_e===null?$=Se:_e.sibling=Se,_e=Se,J=ge}if(ce===v.length)return a(g,J),ye&&xa(g,ce),$;if(J===null){for(;ce<v.length;ce++)J=R(g,v[ce],A),J!==null&&(h=r(J,h,ce),_e===null?$=J:_e.sibling=J,_e=J);return ye&&xa(g,ce),$}for(J=l(J);ce<v.length;ce++)ge=w(J,g,ce,v[ce],A),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?ce:ge.key),h=r(ge,h,ce),_e===null?$=ge:_e.sibling=ge,_e=ge);return e&&J.forEach(function(tl){return t(g,tl)}),ye&&xa(g,ce),$}function te(g,h,v,A){if(v==null)throw Error(c(151));for(var $=null,_e=null,J=h,ce=h=0,ge=null,Se=v.next();J!==null&&!Se.done;ce++,Se=v.next()){J.index>ce?(ge=J,J=null):ge=J.sibling;var tl=z(g,J,Se.value,A);if(tl===null){J===null&&(J=ge);break}e&&J&&tl.alternate===null&&t(g,J),h=r(tl,h,ce),_e===null?$=tl:_e.sibling=tl,_e=tl,J=ge}if(Se.done)return a(g,J),ye&&xa(g,ce),$;if(J===null){for(;!Se.done;ce++,Se=v.next())Se=R(g,Se.value,A),Se!==null&&(h=r(Se,h,ce),_e===null?$=Se:_e.sibling=Se,_e=Se);return ye&&xa(g,ce),$}for(J=l(J);!Se.done;ce++,Se=v.next())Se=w(J,g,ce,Se.value,A),Se!==null&&(e&&Se.alternate!==null&&J.delete(Se.key===null?ce:Se.key),h=r(Se,h,ce),_e===null?$=Se:_e.sibling=Se,_e=Se);return e&&J.forEach(function(qm){return t(g,qm)}),ye&&xa(g,ce),$}function Re(g,h,v,A){if(typeof v=="object"&&v!==null&&v.type===ee&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case B:e:{for(var $=v.key;h!==null;){if(h.key===$){if($=v.type,$===ee){if(h.tag===7){a(g,h.sibling),A=n(h,v.props.children),A.return=g,g=A;break e}}else if(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===je&&hl($)===h.type){a(g,h.sibling),A=n(h,v.props),Tn(A,v),A.return=g,g=A;break e}a(g,h);break}else t(g,h);h=h.sibling}v.type===ee?(A=ul(v.props.children,g.mode,A,v.key),A.return=g,g=A):(A=zi(v.type,v.key,v.props,null,g.mode,A),Tn(A,v),A.return=g,g=A)}return o(g);case Q:e:{for($=v.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){a(g,h.sibling),A=n(h,v.children||[]),A.return=g,g=A;break e}else{a(g,h);break}else t(g,h);h=h.sibling}A=eo(v,g.mode,A),A.return=g,g=A}return o(g);case je:return v=hl(v),Re(g,h,v,A)}if(de(v))return K(g,h,v,A);if(He(v)){if($=He(v),typeof $!="function")throw Error(c(150));return v=$.call(v),te(g,h,v,A)}if(typeof v.then=="function")return Re(g,h,Ai(v),A);if(v.$$typeof===b)return Re(g,h,ji(g,v),A);Ri(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(a(g,h.sibling),A=n(h,v),A.return=g,g=A):(a(g,h),A=Ir(v,g.mode,A),A.return=g,g=A),o(g)):a(g,h)}return function(g,h,v,A){try{Dn=0;var $=Re(g,h,v,A);return Xl=null,$}catch(J){if(J===Yl||J===Ti)throw J;var _e=Tt(29,J,null,g.mode);return _e.lanes=A,_e.return=g,_e}finally{}}}var gl=iu(!0),ru=iu(!1),Ba=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Si(e),Yc(e,null,a),t}return _i(e,l,t,a),Si(e)}function Mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ws(e,a)}}function ho(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xo=!1;function An(){if(xo){var e=Fl;if(e!==null)throw e}}function Rn(e,t,a,l){xo=!1;var n=e.updateQueue;Ba=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var p=s,S=p.next;p.next=null,o===null?r=S:o.next=S,o=p;var D=e.alternate;D!==null&&(D=D.updateQueue,s=D.lastBaseUpdate,s!==o&&(s===null?D.firstBaseUpdate=S:s.next=S,D.lastBaseUpdate=p))}if(r!==null){var R=n.baseState;o=0,D=S=p=null,s=r;do{var z=s.lane&-536870913,w=z!==s.lane;if(w?(xe&z)===z:(l&z)===z){z!==0&&z===Hl&&(xo=!0),D!==null&&(D=D.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var K=e,te=s;z=t;var Re=a;switch(te.tag){case 1:if(K=te.payload,typeof K=="function"){R=K.call(Re,R,z);break e}R=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=te.payload,z=typeof K=="function"?K.call(Re,R,z):K,z==null)break e;R=C({},R,z);break e;case 2:Ba=!0}}z=s.callback,z!==null&&(e.flags|=64,w&&(e.flags|=8192),w=n.callbacks,w===null?n.callbacks=[z]:w.push(z))}else w={lane:z,tag:s.tag,payload:s.payload,callback:s.callback,next:null},D===null?(S=D=w,p=R):D=D.next=w,o|=z;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;w=s,s=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);D===null&&(p=R),n.baseState=p,n.firstBaseUpdate=S,n.lastBaseUpdate=D,r===null&&(n.shared.lanes=0),Va|=o,e.lanes=o,e.memoizedState=R}}function ou(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function su(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ou(a[e],t)}var Vl=x(null),Ci=x(0);function cu(e,t){e=Da,Y(Ci,e),Y(Vl,t),Da=e|t.baseLanes}function go(){Y(Ci,Da),Y(Vl,Vl.current)}function yo(){Da=Ci.current,T(Vl),T(Ci)}var Mt=x(null),Ft=null;function Ha(e){var t=e.alternate;Y(Ve,Ve.current&1),Y(Mt,e),Ft===null&&(t===null||Vl.current!==null||t.memoizedState!==null)&&(Ft=e)}function bo(e){Y(Ve,Ve.current),Y(Mt,e),Ft===null&&(Ft=e)}function uu(e){e.tag===22?(Y(Ve,Ve.current),Y(Mt,e),Ft===null&&(Ft=e)):Fa()}function Fa(){Y(Ve,Ve.current),Y(Mt,Mt.current)}function At(e){T(Mt),Ft===e&&(Ft=null),T(Ve)}var Ve=x(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ws(a)||js(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=0,oe=null,Me=null,$e=null,Ei=!1,Zl=!1,yl=!1,ki=0,Cn=0,Ql=null,jp=0;function Fe(){throw Error(c(321))}function vo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Dt(e[a],t[a]))return!1;return!0}function _o(e,t,a,l,n,r){return ba=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Qu:qo,yl=!1,r=a(l,n),yl=!1,Zl&&(r=du(t,a,l,n)),fu(e),r}function fu(e){N.H=kn;var t=Me!==null&&Me.next!==null;if(ba=0,$e=Me=oe=null,Ei=!1,Cn=0,Ql=null,t)throw Error(c(300));e===null||Ie||(e=e.dependencies,e!==null&&wi(e)&&(Ie=!0))}function du(e,t,a,l){oe=e;var n=0;do{if(Zl&&(Ql=null),Cn=0,Zl=!1,25<=n)throw Error(c(301));if(n+=1,$e=Me=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=Ku,r=t(a,l)}while(Zl);return r}function Dp(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?On(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(oe.flags|=1024),t}function So(){var e=ki!==0;return ki=0,e}function zo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function No(e){if(Ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ei=!1}ba=0,$e=Me=oe=null,Zl=!1,Cn=ki=0,Ql=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?oe.memoizedState=$e=e:$e=$e.next=e,$e}function Ze(){if(Me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=$e===null?oe.memoizedState:$e.next;if(t!==null)$e=t,Me=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?oe.memoizedState=$e=e:$e=$e.next=e}return $e}function qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function On(e){var t=Cn;return Cn+=1,Ql===null&&(Ql=[]),e=au(Ql,e,t),t=oe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Qu:qo),e}function Li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return On(e);if(e.$$typeof===b)return ct(e)}throw Error(c(438,String(e)))}function wo(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=qi(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qe;return t.index++,a}function va(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ze();return jo(t,Me,e)}function jo(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var s=o=null,p=null,S=t,D=!1;do{var R=S.lane&-536870913;if(R!==S.lane?(xe&R)===R:(ba&R)===R){var z=S.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),R===Hl&&(D=!0);else if((ba&z)===z){S=S.next,z===Hl&&(D=!0);continue}else R={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(s=p=R,o=r):p=p.next=R,oe.lanes|=z,Va|=z;R=S.action,yl&&a(r,R),r=S.hasEagerState?S.eagerState:a(r,R)}else z={lane:R,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(s=p=z,o=r):p=p.next=z,oe.lanes|=R,Va|=R;S=S.next}while(S!==null&&S!==t);if(p===null?o=r:p.next=s,!Dt(r,e.memoizedState)&&(Ie=!0,D&&(a=Fl,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=p,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Do(e){var t=Ze(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);Dt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function pu(e,t,a){var l=oe,n=Ze(),r=ye;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!Dt((Me||n).memoizedState,a);if(o&&(n.memoizedState=a,Ie=!0),n=n.queue,Ao(xu.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,Kl(9,{destroy:void 0},hu.bind(null,l,n,a,t),null),Oe===null)throw Error(c(349));r||(ba&127)!==0||mu(l,t,a)}return a}function mu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=qi(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function hu(e,t,a,l){t.value=a,t.getSnapshot=l,gu(t)&&yu(e)}function xu(e,t,a){return a(function(){gu(t)&&yu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Dt(e,a)}catch{return!0}}function yu(e){var t=cl(e,2);t!==null&&Nt(t,e,2)}function To(e){var t=xt();if(typeof e=="function"){var a=e;if(e=a(),yl){Pe(!0);try{a()}finally{Pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},t}function bu(e,t,a,l){return e.baseState=a,jo(e,Me,typeof l=="function"?l:va)}function Tp(e,t,a,l,n){if(Hi(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};N.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,vu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function vu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=N.T,o={};N.T=o;try{var s=a(n,l),p=N.S;p!==null&&p(o,s),_u(e,t,s)}catch(S){Mo(e,t,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),N.T=r}}else try{r=a(n,l),_u(e,t,r)}catch(S){Mo(e,t,S)}}function _u(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Su(e,t,l)},function(l){return Mo(e,t,l)}):Su(e,t,a)}function Su(e,t,a){t.status="fulfilled",t.value=a,zu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,vu(e,a)))}function Mo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,zu(t),t=t.next;while(t!==l)}e.action=null}function zu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nu(e,t){return t}function wu(e,t){if(ye){var a=Oe.formState;if(a!==null){e:{var l=oe;if(ye){if(ke){t:{for(var n=ke,r=Ht;n.nodeType!==8;){if(!r){n=null;break t}if(n=Yt(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ke=Yt(n.nextSibling),l=n.data==="F!";break e}}qa(l)}l=!1}l&&(t=a[0])}}return a=xt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nu,lastRenderedState:t},a.queue=l,a=Xu.bind(null,oe,l),l.dispatch=a,l=To(!1),r=ko.bind(null,oe,!1,l.queue),l=xt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Tp.bind(null,oe,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ju(e){var t=Ze();return Du(t,Me,e)}function Du(e,t,a){if(t=jo(e,t,Nu)[0],e=Bi(va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=On(t)}catch(o){throw o===Yl?Ti:o}else l=t;t=Ze();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Kl(9,{destroy:void 0},Mp.bind(null,n,a),null)),[l,r,e]}function Mp(e,t){e.action=t}function Tu(e){var t=Ze(),a=Me;if(a!==null)return Du(t,a,e);Ze(),t=t.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Kl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=oe.updateQueue,t===null&&(t=qi(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Mu(){return Ze().memoizedState}function Ui(e,t,a,l){var n=xt();oe.flags|=e,n.memoizedState=Kl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Gi(e,t,a,l){var n=Ze();l=l===void 0?null:l;var r=n.memoizedState.inst;Me!==null&&l!==null&&vo(l,Me.memoizedState.deps)?n.memoizedState=Kl(t,r,a,l):(oe.flags|=e,n.memoizedState=Kl(1|t,r,a,l))}function Au(e,t){Ui(8390656,8,e,t)}function Ao(e,t){Gi(2048,8,e,t)}function Ap(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=qi(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ru(e){var t=Ze().memoizedState;return Ap({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Cu(e,t){return Gi(4,2,e,t)}function Ou(e,t){return Gi(4,4,e,t)}function Eu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,a){a=a!=null?a.concat([e]):null,Gi(4,4,Eu.bind(null,t,e),a)}function Ro(){}function qu(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&vo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Lu(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&vo(t,l[1]))return l[0];if(l=e(),yl){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[l,t],l}function Co(e,t,a){return a===void 0||(ba&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=B0(),oe.lanes|=e,Va|=e,a)}function Bu(e,t,a,l){return Dt(a,t)?a:Vl.current!==null?(e=Co(e,a,l),Dt(e,t)||(Ie=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(xe&261930)===0?(Ie=!0,e.memoizedState=a):(e=B0(),oe.lanes|=e,Va|=e,t)}function Uu(e,t,a,l,n){var r=E.p;E.p=r!==0&&8>r?r:8;var o=N.T,s={};N.T=s,ko(e,!1,t,a);try{var p=n(),S=N.S;if(S!==null&&S(s,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=wp(p,l);En(e,t,D,Ot(e))}else En(e,t,l,Ot(e))}catch(R){En(e,t,{then:function(){},status:"rejected",reason:R},Ot())}finally{E.p=r,o!==null&&s.types!==null&&(o.types=s.types),N.T=o}}function Rp(){}function Oo(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Gu(e).queue;Uu(e,n,t,Z,a===null?Rp:function(){return Hu(e),a(l)})}function Gu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hu(e){var t=Gu(e);t.next===null&&(t=e.alternate.memoizedState),En(e,t.next.queue,{},Ot())}function Eo(){return ct(Wn)}function Fu(){return Ze().memoizedState}function Yu(){return Ze().memoizedState}function Cp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=Ua(a);var l=Ga(t,e,a);l!==null&&(Nt(l,t,a),Mn(l,t,a)),t={cache:so()},e.payload=t;return}t=t.return}}function Op(e,t,a){var l=Ot();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hi(e)?Vu(t,a):(a=Wr(e,t,a,l),a!==null&&(Nt(a,e,l),Zu(a,t,l)))}function Xu(e,t,a){var l=Ot();En(e,t,a,l)}function En(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hi(e))Vu(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,s=r(o,a);if(n.hasEagerState=!0,n.eagerState=s,Dt(s,o))return _i(e,t,n,0),Oe===null&&vi(),!1}catch{}finally{}if(a=Wr(e,t,n,l),a!==null)return Nt(a,e,l),Zu(a,t,l),!0}return!1}function ko(e,t,a,l){if(l={lane:2,revertLane:ps(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hi(e)){if(t)throw Error(c(479))}else t=Wr(e,a,l,2),t!==null&&Nt(t,e,2)}function Hi(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Vu(e,t){Zl=Ei=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Zu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ws(e,a)}}var kn={readContext:ct,use:Li,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};kn.useEffectEvent=Fe;var Qu={readContext:ct,use:Li,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Au,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ui(4194308,4,Eu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var a=xt();t=t===void 0?null:t;var l=e();if(yl){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=xt();if(a!==void 0){var n=a(t);if(yl){Pe(!0);try{a(t)}finally{Pe(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Op.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=To(e);var t=e.queue,a=Xu.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ro,useDeferredValue:function(e,t){var a=xt();return Co(a,e,t)},useTransition:function(){var e=To(!1);return e=Uu.bind(null,oe,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=oe,n=xt();if(ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Oe===null)throw Error(c(349));(xe&127)!==0||mu(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,Au(xu.bind(null,l,r,e),[e]),l.flags|=2048,Kl(9,{destroy:void 0},hu.bind(null,l,r,a,t),null),a},useId:function(){var e=xt(),t=Oe.identifierPrefix;if(ye){var a=la,l=aa;a=(l&~(1<<32-Je(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ki++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Eo,useFormState:wu,useActionState:wu,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ko.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return xt().memoizedState=Cp.bind(null,oe)},useEffectEvent:function(e){var t=xt(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},qo={readContext:ct,use:Li,useCallback:qu,useContext:ct,useEffect:Ao,useImperativeHandle:ku,useInsertionEffect:Cu,useLayoutEffect:Ou,useMemo:Lu,useReducer:Bi,useRef:Mu,useState:function(){return Bi(va)},useDebugValue:Ro,useDeferredValue:function(e,t){var a=Ze();return Bu(a,Me.memoizedState,e,t)},useTransition:function(){var e=Bi(va)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:On(e),t]},useSyncExternalStore:pu,useId:Fu,useHostTransitionStatus:Eo,useFormState:ju,useActionState:ju,useOptimistic:function(e,t){var a=Ze();return bu(a,Me,e,t)},useMemoCache:wo,useCacheRefresh:Yu};qo.useEffectEvent=Ru;var Ku={readContext:ct,use:Li,useCallback:qu,useContext:ct,useEffect:Ao,useImperativeHandle:ku,useInsertionEffect:Cu,useLayoutEffect:Ou,useMemo:Lu,useReducer:Do,useRef:Mu,useState:function(){return Do(va)},useDebugValue:Ro,useDeferredValue:function(e,t){var a=Ze();return Me===null?Co(a,e,t):Bu(a,Me.memoizedState,e,t)},useTransition:function(){var e=Do(va)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:On(e),t]},useSyncExternalStore:pu,useId:Fu,useHostTransitionStatus:Eo,useFormState:Tu,useActionState:Tu,useOptimistic:function(e,t){var a=Ze();return Me!==null?bu(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wo,useCacheRefresh:Yu};Ku.useEffectEvent=Ru;function Lo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:C({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Ot(),n=Ua(l);n.payload=t,a!=null&&(n.callback=a),t=Ga(e,n,l),t!==null&&(Nt(t,e,l),Mn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Ot(),n=Ua(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ga(e,n,l),t!==null&&(Nt(t,e,l),Mn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),l=Ua(a);l.tag=2,t!=null&&(l.callback=t),t=Ga(e,l,a),t!==null&&(Nt(t,e,a),Mn(t,e,a))}};function Pu(e,t,a,l,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!_n(a,l)||!_n(n,r):!0}function Ju(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function bl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=C({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Wu(e){bi(e)}function $u(e){console.error(e)}function Iu(e){bi(e)}function Fi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function e0(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Uo(e,t,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Fi(e,t)},a}function t0(e){return e=Ua(e),e.tag=3,e}function a0(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){e0(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){e0(t,a,l),typeof n!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ep(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Gl(t,a,n,!0),a=Mt.current,a!==null){switch(a.tag){case 31:case 13:return Ft===null?er():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),us(e,l,n)),!1;case 22:return a.flags|=65536,l===Mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),us(e,l,n)),!1}throw Error(c(435,a.tag))}return us(e,l,n),er(),!1}if(ye)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==lo&&(e=Error(c(422),{cause:l}),Nn(Bt(e,a)))):(l!==lo&&(t=Error(c(423),{cause:l}),Nn(Bt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Bt(l,a),n=Uo(e.stateNode,l,n),ho(e,n),Ye!==4&&(Ye=2)),!1;var r=Error(c(520),{cause:l});if(r=Bt(r,a),Yn===null?Yn=[r]:Yn.push(r),Ye!==4&&(Ye=2),t===null)return!0;l=Bt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Uo(a.stateNode,l,e),ho(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Za===null||!Za.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=t0(n),a0(n,e,a,l),ho(a,n),!1}a=a.return}while(a!==null);return!1}var Go=Error(c(461)),Ie=!1;function ut(e,t,a,l){t.child=e===null?ru(t,null,a,l):gl(t,e.child,a,l)}function l0(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return pl(t),l=_o(e,t,a,o,r,n),s=So(),e!==null&&!Ie?(zo(e,t,n),_a(e,t,n)):(ye&&s&&to(t),t.flags|=1,ut(e,t,l,n),t.child)}function n0(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!$r(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,i0(e,t,r,l,n)):(e=zi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ko(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:_n,a(o,l)&&e.ref===t.ref)return _a(e,t,n)}return t.flags|=1,e=ha(r,l),e.ref=t.ref,e.return=t,t.child=e}function i0(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(_n(r,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=r,Ko(e,n))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,_a(e,t,n)}return Ho(e,t,a,l,n)}function r0(e,t,a,l){var n=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~r}else l=0,t.child=null;return o0(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,r!==null?r.cachePool:null),r!==null?cu(t,r):go(),uu(t);else return l=t.lanes=536870912,o0(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(Di(t,r.cachePool),cu(t,r),Fa(),t.memoizedState=null):(e!==null&&Di(t,null),go(),Fa());return ut(e,t,n,a),t.child}function qn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function o0(e,t,a,l,n){var r=uo();return r=r===null?null:{parent:We._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Di(t,null),go(),uu(t),e!==null&&Gl(e,t,l,!0),t.childLanes=n,null}function Yi(e,t){return t=Vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function s0(e,t,a){return gl(t,e.child,null,a),e=Yi(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function kp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(l.mode==="hidden")return e=Yi(t,l),t.lanes=536870912,qn(null,e);if(bo(t),(e=ke)?(e=_f(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,st=t,ke=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return Yi(t,l)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(bo(t),n)if(t.flags&256)t.flags&=-257,t=s0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ie||Gl(e,t,a,!1),n=(a&e.childLanes)!==0,Ie||n){if(l=Oe,l!==null&&(o=$s(l,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,cl(e,o),Nt(l,e,o),Go;er(),t=s0(e,t,a)}else e=r.treeContext,ke=Yt(o.nextSibling),st=t,ye=!0,ka=null,Ht=!1,e!==null&&Kc(t,e),t=Yi(t,l),t.flags|=4096;return t}return e=ha(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ho(e,t,a,l,n){return pl(t),a=_o(e,t,a,l,void 0,n),l=So(),e!==null&&!Ie?(zo(e,t,n),_a(e,t,n)):(ye&&l&&to(t),t.flags|=1,ut(e,t,a,n),t.child)}function c0(e,t,a,l,n,r){return pl(t),t.updateQueue=null,a=du(t,l,a,n),fu(e),l=So(),e!==null&&!Ie?(zo(e,t,r),_a(e,t,r)):(ye&&l&&to(t),t.flags|=1,ut(e,t,a,r),t.child)}function u0(e,t,a,l,n){if(pl(t),t.stateNode===null){var r=ql,o=a.contextType;typeof o=="object"&&o!==null&&(r=ct(o)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},po(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?ct(o):ql,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Lo(t,a,o,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Bo.enqueueReplaceState(r,r.state,null),Rn(t,l,r,n),An(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,p=bl(a,s);r.props=p;var S=r.context,D=a.contextType;o=ql,typeof D=="object"&&D!==null&&(o=ct(D));var R=a.getDerivedStateFromProps;D=typeof R=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||S!==o)&&Ju(t,r,l,o),Ba=!1;var z=t.memoizedState;r.state=z,Rn(t,l,r,n),An(),S=t.memoizedState,s||z!==S||Ba?(typeof R=="function"&&(Lo(t,a,R,l),S=t.memoizedState),(p=Ba||Pu(t,a,p,l,z,S,o))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),r.props=l,r.state=S,r.context=o,l=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,mo(e,t),o=t.memoizedProps,D=bl(a,o),r.props=D,R=t.pendingProps,z=r.context,S=a.contextType,p=ql,typeof S=="object"&&S!==null&&(p=ct(S)),s=a.getDerivedStateFromProps,(S=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==R||z!==p)&&Ju(t,r,l,p),Ba=!1,z=t.memoizedState,r.state=z,Rn(t,l,r,n),An();var w=t.memoizedState;o!==R||z!==w||Ba||e!==null&&e.dependencies!==null&&wi(e.dependencies)?(typeof s=="function"&&(Lo(t,a,s,l),w=t.memoizedState),(D=Ba||Pu(t,a,D,l,z,w,p)||e!==null&&e.dependencies!==null&&wi(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,w,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,w,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=p,l=D):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Xi(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=gl(t,e.child,null,n),t.child=gl(t,null,a,n)):ut(e,t,a,n),t.memoizedState=r.state,e=t.child):e=_a(e,t,n),e}function f0(e,t,a,l){return fl(),t.flags|=256,ut(e,t,a,l),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(e){return{baseLanes:e,cachePool:eu()}}function Xo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ct),e}function d0(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(n?Ha(t):Fa(),(e=ke)?(e=_f(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:aa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,st=t,ke=null)):e=null,e===null)throw qa(t);return js(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(Fa(),n=t.mode,s=Vi({mode:"hidden",children:s},n),l=ul(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Yo(a),l.childLanes=Xo(e,o,a),t.memoizedState=Fo,qn(null,l)):(Ha(t),Vo(t,s))}var p=e.memoizedState;if(p!==null&&(s=p.dehydrated,s!==null)){if(r)t.flags&256?(Ha(t),t.flags&=-257,t=Zo(e,t,a)):t.memoizedState!==null?(Fa(),t.child=e.child,t.flags|=128,t=null):(Fa(),s=l.fallback,n=t.mode,l=Vi({mode:"visible",children:l.children},n),s=ul(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,gl(t,e.child,null,a),l=t.child,l.memoizedState=Yo(a),l.childLanes=Xo(e,o,a),t.memoizedState=Fo,t=qn(null,l));else if(Ha(t),js(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var S=o.dgst;o=S,l=Error(c(419)),l.stack="",l.digest=o,Nn({value:l,source:null,stack:null}),t=Zo(e,t,a)}else if(Ie||Gl(e,t,a,!1),o=(a&e.childLanes)!==0,Ie||o){if(o=Oe,o!==null&&(l=$s(o,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,cl(e,l),Nt(o,e,l),Go;ws(s)||er(),t=Zo(e,t,a)}else ws(s)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,ke=Yt(s.nextSibling),st=t,ye=!0,ka=null,Ht=!1,e!==null&&Kc(t,e),t=Vo(t,l.children),t.flags|=4096);return t}return n?(Fa(),s=l.fallback,n=t.mode,p=e.child,S=p.sibling,l=ha(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,S!==null?s=ha(S,s):(s=ul(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,qn(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Yo(a):(n=s.cachePool,n!==null?(p=We._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=eu(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Xo(e,o,a),t.memoizedState=Fo,qn(e.child,l)):(Ha(t),a=e.child,e=a.sibling,a=ha(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Vo(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function Zo(e,t,a){return gl(t,e.child,null,a),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p0(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ro(e.return,t,a)}function Qo(e,t,a,l,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function m0(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;l=l.children;var o=Ve.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,Y(Ve,o),ut(e,t,l,a),l=ye?zn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p0(e,a,t);else if(e.tag===19)p0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Oi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Qo(t,!1,n,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Oi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Qo(t,!0,a,null,r,l);break;case"together":Qo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function _a(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Va|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Gl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ko(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wi(e)))}function qp(e,t,a){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),La(t,We,e.memoizedState.cache),fl();break;case 27:case 5:Vt(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:La(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?d0(e,t,a):(Ha(t),e=_a(e,t,a),e!==null?e.sibling:null);Ha(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Gl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return m0(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Ve,Ve.current),l)break;return null;case 22:return t.lanes=0,r0(e,t,a,t.pendingProps);case 24:La(t,We,e.memoizedState.cache)}return _a(e,t,a)}function h0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Ko(e,a)&&(t.flags&128)===0)return Ie=!1,qp(e,t,a);Ie=(e.flags&131072)!==0}else Ie=!1,ye&&(t.flags&1048576)!==0&&Qc(t,zn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=hl(t.elementType),t.type=e,typeof e=="function")$r(e)?(l=bl(e,l),t.tag=1,t=u0(null,t,e,l,a)):(t.tag=0,t=Ho(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===q){t.tag=11,t=l0(null,t,e,l,a);break e}else if(n===ae){t.tag=14,t=n0(null,t,e,l,a);break e}}throw t=Xe(e)||e,Error(c(306,t,""))}}return t;case 0:return Ho(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=bl(l,t.pendingProps),u0(e,t,l,n,a);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,mo(e,t),Rn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,La(t,We,l),l!==r.cache&&oo(t,[We],a,!0),An(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=f0(e,t,l,a);break e}else if(l!==n){n=Bt(Error(c(424)),t),Nn(n),t=f0(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=Yt(e.firstChild),st=t,ye=!0,ka=null,Ht=!0,a=ru(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fl(),l===n){t=_a(e,t,a);break e}ut(e,t,l,a)}t=t.child}return t;case 26:return Xi(e,t),e===null?(a=Df(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,l=or(ne.current).createElement(a),l[ot]=t,l[yt]=e,ft(l,a,e),nt(l),t.stateNode=l):t.memoizedState=Df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vt(t),e===null&&ye&&(l=t.stateNode=Nf(t.type,t.pendingProps,ne.current),st=t,Ht=!0,n=ke,Ja(t.type)?(Ds=n,ke=Yt(l.firstChild)):ke=n),ut(e,t,t.pendingProps.children,a),Xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((n=l=ke)&&(l=dm(l,t.type,t.pendingProps,Ht),l!==null?(t.stateNode=l,st=t,ke=Yt(l.firstChild),Ht=!1,n=!0):n=!1),n||qa(t)),Vt(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,Ss(n,r)?l=null:o!==null&&Ss(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=_o(e,t,Dp,null,null,a),Wn._currentValue=n),Xi(e,t),ut(e,t,l,a),t.child;case 6:return e===null&&ye&&((e=a=ke)&&(a=pm(a,t.pendingProps,Ht),a!==null?(t.stateNode=a,st=t,ke=null,e=!0):e=!1),e||qa(t)),null;case 13:return d0(e,t,a);case 4:return Le(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=gl(t,null,l,a):ut(e,t,l,a),t.child;case 11:return l0(e,t,t.type,t.pendingProps,a);case 7:return ut(e,t,t.pendingProps,a),t.child;case 8:return ut(e,t,t.pendingProps.children,a),t.child;case 12:return ut(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,La(t,t.type,l.value),ut(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,pl(t),n=ct(n),l=l(n),t.flags|=1,ut(e,t,l,a),t.child;case 14:return n0(e,t,t.type,t.pendingProps,a);case 15:return i0(e,t,t.type,t.pendingProps,a);case 19:return m0(e,t,a);case 31:return kp(e,t,a);case 22:return r0(e,t,a,t.pendingProps);case 24:return pl(t),l=ct(We),e===null?(n=uo(),n===null&&(n=Oe,r=so(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},po(t),La(t,We,n)):((e.lanes&a)!==0&&(mo(e,t),Rn(t,null,null,a),An()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),La(t,We,l)):(l=r.cache,La(t,We,l),l!==n.cache&&oo(t,[We],a,!0))),ut(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Sa(e){e.flags|=4}function Po(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(F0())e.flags|=8192;else throw xl=Mi,fo}else e.flags&=-16777217}function x0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cf(t))if(F0())e.flags|=8192;else throw xl=Mi,fo}function Zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jt():536870912,e.lanes|=t,$l|=t)}function Ln(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Lp(e,t,a){var l=t.pendingProps;switch(ao(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ya(We),Ee(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ul(t)?Sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,no())),qe(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(Sa(t),r!==null?(qe(t),x0(t,r)):(qe(t),Po(t,n,null,l,a))):r?r!==e.memoizedState?(Sa(t),qe(t),x0(t,r)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sa(t),qe(t),Po(t,n,e,l,a)),null;case 27:if(Aa(t),a=ne.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return qe(t),null}e=H.current,Ul(t)?Pc(t):(e=Nf(n,l,a),t.stateNode=e,Sa(t))}return qe(t),null;case 5:if(Aa(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Sa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(r=H.current,Ul(t))Pc(t);else{var o=or(ne.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}r[ot]=t,r[yt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(ft(r,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sa(t)}}return qe(t),Po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Sa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ne.current,Ul(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=st,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||pf(e.nodeValue,a)),e||qa(t,!0)}else e=or(e).createTextNode(l),e[ot]=t,t.stateNode=e}return qe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ul(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ot]=t}else fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else a=no(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(c(558))}return qe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ul(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[ot]=t}else fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),n=!1}else n=no(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Zi(t,t.updateQueue),qe(t),null);case 4:return Ee(),e===null&&gs(t.stateNode.containerInfo),qe(t),null;case 10:return ya(t.type),qe(t),null;case 19:if(T(Ve),l=t.memoizedState,l===null)return qe(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)Ln(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Oi(e),r!==null){for(t.flags|=128,Ln(l,!1),e=r.updateQueue,t.updateQueue=e,Zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xc(a,e),a=a.sibling;return Y(Ve,Ve.current&1|2),ye&&xa(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ce()>Wi&&(t.flags|=128,n=!0,Ln(l,!1),t.lanes=4194304)}else{if(!n)if(e=Oi(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Zi(t,e),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ye)return qe(t),null}else 2*Ce()-l.renderingStartTime>Wi&&a!==536870912&&(t.flags|=128,n=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ce(),e.sibling=null,a=Ve.current,Y(Ve,n?a&1|2:a&1),ye&&xa(t,l.treeForkCount),e):(qe(t),null);case 22:case 23:return At(t),yo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&Zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&T(ml),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ya(We),qe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Bp(e,t){switch(ao(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(We),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Aa(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(c(340));fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(Ve),null;case 4:return Ee(),null;case 10:return ya(t.type),null;case 22:case 23:return At(t),yo(),e!==null&&T(ml),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(We),null;case 25:return null;default:return null}}function g0(e,t){switch(ao(t),t.tag){case 3:ya(We),Ee();break;case 26:case 27:case 5:Aa(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:T(Ve);break;case 10:ya(t.type);break;case 22:case 23:At(t),yo(),e!==null&&T(ml);break;case 24:ya(We)}}function Bn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,o=a.inst;l=r(),o.destroy=l}a=a.next}while(a!==n)}}catch(s){Te(t,t.return,s)}}function Ya(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var p=a,S=s;try{S()}catch(D){Te(n,p,D)}}}l=l.next}while(l!==r)}}catch(D){Te(t,t.return,D)}}function y0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{su(t,a)}catch(l){Te(e,e.return,l)}}}function b0(e,t,a){a.props=bl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Te(e,t,l)}}function Un(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Te(e,t,n)}}function na(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Te(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Te(e,t,n)}else a.current=null}function v0(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Te(e,e.return,n)}}function Jo(e,t,a){try{var l=e.stateNode;rm(l,e.type,a,t),l[yt]=t}catch(n){Te(e,e.return,n)}}function _0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=pa));else if(l!==4&&(l===27&&Ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function Qi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qi(e,t,a),e=e.sibling;e!==null;)Qi(e,t,a),e=e.sibling}function S0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ft(t,l,a),t[ot]=e,t[yt]=a}catch(r){Te(e,e.return,r)}}var za=!1,et=!1,Io=!1,z0=typeof WeakSet=="function"?WeakSet:Set,it=null;function Up(e,t){if(e=e.containerInfo,vs=mr,e=kc(e),Vr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,s=-1,p=-1,S=0,D=0,R=e,z=null;t:for(;;){for(var w;R!==a||n!==0&&R.nodeType!==3||(s=o+n),R!==r||l!==0&&R.nodeType!==3||(p=o+l),R.nodeType===3&&(o+=R.nodeValue.length),(w=R.firstChild)!==null;)z=R,R=w;for(;;){if(R===e)break t;if(z===a&&++S===n&&(s=o),z===r&&++D===l&&(p=o),(w=R.nextSibling)!==null)break;R=z,z=R.parentNode}R=w}a=s===-1||p===-1?null:{start:s,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(_s={focusedElem:e,selectionRange:a},mr=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var K=bl(a.type,n);e=l.getSnapshotBeforeUpdate(K,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Te(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ns(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ns(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function N0(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),l&4&&Bn(5,a);break;case 1:if(wa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Te(a,a.return,o)}else{var n=bl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Te(a,a.return,o)}}l&64&&y0(a),l&512&&Un(a,a.return);break;case 3:if(wa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{su(e,t)}catch(o){Te(a,a.return,o)}}break;case 27:t===null&&l&4&&S0(a);case 26:case 5:wa(e,a),t===null&&l&4&&v0(a),l&512&&Un(a,a.return);break;case 12:wa(e,a);break;case 31:wa(e,a),l&4&&D0(e,a);break;case 13:wa(e,a),l&4&&T0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kp.bind(null,a),mm(e,a))));break;case 22:if(l=a.memoizedState!==null||za,!l){t=t!==null&&t.memoizedState!==null||et,n=za;var r=et;za=l,(et=t)&&!r?ja(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),za=n,et=r}break;case 30:break;default:wa(e,a)}}function w0(e){var t=e.alternate;t!==null&&(e.alternate=null,w0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,vt=!1;function Na(e,t,a){for(a=a.child;a!==null;)j0(e,t,a),a=a.sibling}function j0(e,t,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ra,a)}catch{}switch(a.tag){case 26:et||na(a,t),Na(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||na(a,t);var l=Ue,n=vt;Ja(a.type)&&(Ue=a.stateNode,vt=!1),Na(e,t,a),Kn(a.stateNode),Ue=l,vt=n;break;case 5:et||na(a,t);case 6:if(l=Ue,n=vt,Ue=null,Na(e,t,a),Ue=l,vt=n,Ue!==null)if(vt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(r){Te(a,t,r)}else try{Ue.removeChild(a.stateNode)}catch(r){Te(a,t,r)}break;case 18:Ue!==null&&(vt?(e=Ue,bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),on(e)):bf(Ue,a.stateNode));break;case 4:l=Ue,n=vt,Ue=a.stateNode.containerInfo,vt=!0,Na(e,t,a),Ue=l,vt=n;break;case 0:case 11:case 14:case 15:Ya(2,a,t),et||Ya(4,a,t),Na(e,t,a);break;case 1:et||(na(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&b0(a,t,l)),Na(e,t,a);break;case 21:Na(e,t,a);break;case 22:et=(l=et)||a.memoizedState!==null,Na(e,t,a),et=l;break;default:Na(e,t,a)}}function D0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{on(e)}catch(a){Te(t,t.return,a)}}}function T0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{on(e)}catch(a){Te(t,t.return,a)}}function Gp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new z0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new z0),t;default:throw Error(c(435,e.tag))}}function Ki(e,t){var a=Gp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Pp.bind(null,e,l);l.then(n,n)}})}function _t(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(Ja(s.type)){Ue=s.stateNode,vt=!1;break e}break;case 5:Ue=s.stateNode,vt=!1;break e;case 3:case 4:Ue=s.stateNode.containerInfo,vt=!0;break e}s=s.return}if(Ue===null)throw Error(c(160));j0(r,o,n),Ue=null,vt=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)M0(t,e),t=t.sibling}var Jt=null;function M0(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),St(e),l&4&&(Ya(3,e,e.return),Bn(3,e),Ya(5,e,e.return));break;case 1:_t(t,e),St(e),l&512&&(et||a===null||na(a,a.return)),l&64&&za&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Jt;if(_t(t,e),St(e),l&512&&(et||a===null||na(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[dn]||r[ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),ft(r,l,a),r[ot]=e,nt(r),l=r;break e;case"link":var o=Af("link","href",n).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(r=o[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}r=n.createElement(l),ft(r,l,a),n.head.appendChild(r);break;case"meta":if(o=Af("meta","content",n).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}r=n.createElement(l),ft(r,l,a),n.head.appendChild(r);break;default:throw Error(c(468,l))}r[ot]=e,nt(r),l=r}e.stateNode=l}else Rf(n,e.type,e.stateNode);else e.stateNode=Mf(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Rf(n,e.type,e.stateNode):Mf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Jo(e,e.memoizedProps,a.memoizedProps)}break;case 27:_t(t,e),St(e),l&512&&(et||a===null||na(a,a.return)),a!==null&&l&4&&Jo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_t(t,e),St(e),l&512&&(et||a===null||na(a,a.return)),e.flags&32){n=e.stateNode;try{Ml(n,"")}catch(K){Te(e,e.return,K)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Jo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Io=!0);break;case 6:if(_t(t,e),St(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(K){Te(e,e.return,K)}}break;case 3:if(ur=null,n=Jt,Jt=sr(t.containerInfo),_t(t,e),Jt=n,St(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{on(t.containerInfo)}catch(K){Te(e,e.return,K)}Io&&(Io=!1,A0(e));break;case 4:l=Jt,Jt=sr(e.stateNode.containerInfo),_t(t,e),St(e),Jt=l;break;case 12:_t(t,e),St(e);break;case 31:_t(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ki(e,l)));break;case 13:_t(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ji=Ce()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ki(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,S=za,D=et;if(za=S||n,et=D||p,_t(t,e),et=D,za=S,St(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||za||et||vl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(r=p.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=p.stateNode;var R=p.memoizedProps.style,z=R!=null&&R.hasOwnProperty("display")?R.display:null;s.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(K){Te(p,p.return,K)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(K){Te(p,p.return,K)}}}else if(t.tag===18){if(a===null){p=t;try{var w=p.stateNode;n?vf(w,!0):vf(p.stateNode,!1)}catch(K){Te(p,p.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ki(e,a))));break;case 19:_t(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ki(e,l)));break;case 30:break;case 21:break;default:_t(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(_0(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,r=Wo(e);Qi(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(Ml(o,""),a.flags&=-33);var s=Wo(e);Qi(e,s,o);break;case 3:case 4:var p=a.stateNode.containerInfo,S=Wo(e);$o(e,S,p);break;default:throw Error(c(161))}}catch(D){Te(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function A0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;A0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)N0(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),vl(t);break;case 1:na(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&b0(t,t.return,a),vl(t);break;case 27:Kn(t.stateNode);case 26:case 5:na(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:ja(n,r,a),Bn(4,r);break;case 1:if(ja(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){Te(l,l.return,S)}if(l=r,n=l.updateQueue,n!==null){var s=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)ou(p[n],s)}catch(S){Te(l,l.return,S)}}a&&o&64&&y0(r),Un(r,r.return);break;case 27:S0(r);case 26:case 5:ja(n,r,a),a&&l===null&&o&4&&v0(r),Un(r,r.return);break;case 12:ja(n,r,a);break;case 31:ja(n,r,a),a&&o&4&&D0(n,r);break;case 13:ja(n,r,a),a&&o&4&&T0(n,r);break;case 22:r.memoizedState===null&&ja(n,r,a),Un(r,r.return);break;case 30:break;default:ja(n,r,a)}t=t.sibling}}function es(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wn(a))}function ts(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wn(e))}function Wt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R0(e,t,a,l),t=t.sibling}function R0(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,l),n&2048&&Bn(9,t);break;case 1:Wt(e,t,a,l);break;case 3:Wt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wn(e)));break;case 12:if(n&2048){Wt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,s=r.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Te(t,t.return,p)}}else Wt(e,t,a,l);break;case 31:Wt(e,t,a,l);break;case 13:Wt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Wt(e,t,a,l):Gn(e,t):r._visibility&2?Wt(e,t,a,l):(r._visibility|=2,Pl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&es(o,t);break;case 24:Wt(e,t,a,l),n&2048&&ts(t.alternate,t);break;default:Wt(e,t,a,l)}}function Pl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,s=a,p=l,S=o.flags;switch(o.tag){case 0:case 11:case 15:Pl(r,o,s,p,n),Bn(8,o);break;case 23:break;case 22:var D=o.stateNode;o.memoizedState!==null?D._visibility&2?Pl(r,o,s,p,n):Gn(r,o):(D._visibility|=2,Pl(r,o,s,p,n)),n&&S&2048&&es(o.alternate,o);break;case 24:Pl(r,o,s,p,n),n&&S&2048&&ts(o.alternate,o);break;default:Pl(r,o,s,p,n)}t=t.sibling}}function Gn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Gn(a,l),n&2048&&es(l.alternate,l);break;case 24:Gn(a,l),n&2048&&ts(l.alternate,l);break;default:Gn(a,l)}t=t.sibling}}var Hn=8192;function Jl(e,t,a){if(e.subtreeFlags&Hn)for(e=e.child;e!==null;)C0(e,t,a),e=e.sibling}function C0(e,t,a){switch(e.tag){case 26:Jl(e,t,a),e.flags&Hn&&e.memoizedState!==null&&jm(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:Jl(e,t,a);break;case 3:case 4:var l=Jt;Jt=sr(e.stateNode.containerInfo),Jl(e,t,a),Jt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Hn,Hn=16777216,Jl(e,t,a),Hn=l):Jl(e,t,a));break;default:Jl(e,t,a)}}function O0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];it=l,k0(l,e)}O0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E0(e),e=e.sibling}function E0(e){switch(e.tag){case 0:case 11:case 15:Fn(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Fn(e);break;case 12:Fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pi(e)):Fn(e);break;default:Fn(e)}}function Pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];it=l,k0(l,e)}O0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ya(8,t,t.return),Pi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Pi(t));break;default:Pi(t)}e=e.sibling}}function k0(e,t){for(;it!==null;){var a=it;switch(a.tag){case 0:case 11:case 15:Ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,it=l;else e:for(a=e;it!==null;){l=it;var n=l.sibling,r=l.return;if(w0(l),l===a){it=null;break e}if(n!==null){n.return=r,it=n;break e}it=r}}}var Hp={getCacheForType:function(e){var t=ct(We),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ct(We).controller.signal}},Fp=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Oe=null,me=null,xe=0,De=0,Rt=null,Xa=!1,Wl=!1,as=!1,Da=0,Ye=0,Va=0,_l=0,ls=0,Ct=0,$l=0,Yn=null,zt=null,ns=!1,Ji=0,q0=0,Wi=1/0,$i=null,Za=null,lt=0,Qa=null,Il=null,Ta=0,is=0,rs=null,L0=null,Xn=0,os=null;function Ot(){return(Ne&2)!==0&&xe!==0?xe&-xe:N.T!==null?ps():Is()}function B0(){if(Ct===0)if((xe&536870912)===0||ye){var e=ua;ua<<=1,(ua&3932160)===0&&(ua=262144),Ct=e}else Ct=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Ct}function Nt(e,t,a){(e===Oe&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(en(e,0),Ka(e,xe,Ct,!1)),Et(e,a),((Ne&2)===0||e!==Oe)&&(e===Oe&&((Ne&2)===0&&(_l|=a),Ye===4&&Ka(e,xe,Ct,!1)),ia(e))}function U0(e,t,a){if((Ne&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ea(e,t),n=l?Vp(e,t):cs(e,t,!0),r=l;do{if(n===0){Wl&&!l&&Ka(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Yp(a)){n=cs(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=Yn;var p=s.current.memoizedState.isDehydrated;if(p&&(en(s,o).flags|=256),o=cs(s,o,!1),o!==2){if(as&&!p){s.errorRecoveryDisabledLanes|=r,_l|=r,n=4;break e}r=zt,zt=n,r!==null&&(zt===null?zt=r:zt.push.apply(zt,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){en(e,0),Ka(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ka(l,t,Ct,!Xa);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Ji+300-Ce(),10<n)){if(Ka(l,t,Ct,!Xa),Kt(l,0,!0)!==0)break e;Ta=t,l.timeoutHandle=gf(G0.bind(null,l,a,zt,$i,ns,t,Ct,_l,$l,Xa,r,"Throttled",-0,0),n);break e}G0(l,a,zt,$i,ns,t,Ct,_l,$l,Xa,r,null,-0,0)}}break}while(!0);ia(e)}function G0(e,t,a,l,n,r,o,s,p,S,D,R,z,w){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},C0(t,r,R);var K=(r&62914560)===r?Ji-Ce():(r&4194048)===r?q0-Ce():0;if(K=Dm(R,K),K!==null){Ta=r,e.cancelPendingCommit=K(K0.bind(null,e,t,r,a,l,n,o,s,p,D,R,null,z,w)),Ka(e,r,o,!S);return}}K0(e,t,r,a,l,n,o,s,p)}function Yp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!Dt(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ka(e,t,a,l){t&=~ls,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-Je(n),o=1<<r;l[r]=-1,n&=~o}a!==0&&Js(e,a,t)}function Ii(){return(Ne&6)===0?(Vn(0),!1):!0}function ss(){if(me!==null){if(De===0)var e=me.return;else e=me,ga=dl=null,No(e),Xl=null,Dn=0,e=me;for(;e!==null;)g0(e.alternate,e),e=e.return;me=null}}function en(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,ss(),Oe=e,me=a=ha(e.current,null),xe=t,De=0,Rt=null,Xa=!1,Wl=ea(e,t),as=!1,$l=Ct=ls=_l=Va=Ye=0,zt=Yn=null,ns=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Je(l),r=1<<n;t|=e[n],l&=~r}return Da=t,vi(),a}function H0(e,t){oe=null,N.H=kn,t===Yl||t===Ti?(t=lu(),De=3):t===fo?(t=lu(),De=4):De=t===Go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,me===null&&(Ye=1,Fi(e,Bt(t,e.current)))}function F0(){var e=Mt.current;return e===null?!0:(xe&4194048)===xe?Ft===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Ft:!1}function Y0(){var e=N.H;return N.H=kn,e===null?kn:e}function X0(){var e=N.A;return N.A=Hp,e}function er(){Ye=4,Xa||(xe&4194048)!==xe&&Mt.current!==null||(Wl=!0),(Va&134217727)===0&&(_l&134217727)===0||Oe===null||Ka(Oe,xe,Ct,!1)}function cs(e,t,a){var l=Ne;Ne|=2;var n=Y0(),r=X0();(Oe!==e||xe!==t)&&($i=null,en(e,t)),t=!1;var o=Ye;e:do try{if(De!==0&&me!==null){var s=me,p=Rt;switch(De){case 8:ss(),o=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var S=De;if(De=0,Rt=null,tn(e,s,p,S),a&&Wl){o=0;break e}break;default:S=De,De=0,Rt=null,tn(e,s,p,S)}}Xp(),o=Ye;break}catch(D){H0(e,D)}while(!0);return t&&e.shellSuspendCounter++,ga=dl=null,Ne=l,N.H=n,N.A=r,me===null&&(Oe=null,xe=0,vi()),o}function Xp(){for(;me!==null;)V0(me)}function Vp(e,t){var a=Ne;Ne|=2;var l=Y0(),n=X0();Oe!==e||xe!==t?($i=null,Wi=Ce()+500,en(e,t)):Wl=ea(e,t);e:do try{if(De!==0&&me!==null){t=me;var r=Rt;t:switch(De){case 1:De=0,Rt=null,tn(e,t,r,1);break;case 2:case 9:if(tu(r)){De=0,Rt=null,Z0(t);break}t=function(){De!==2&&De!==9||Oe!==e||(De=7),ia(e)},r.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:tu(r)?(De=0,Rt=null,Z0(t)):(De=0,Rt=null,tn(e,t,r,7));break;case 5:var o=null;switch(me.tag){case 26:o=me.memoizedState;case 5:case 27:var s=me;if(o?Cf(o):s.stateNode.complete){De=0,Rt=null;var p=s.sibling;if(p!==null)me=p;else{var S=s.return;S!==null?(me=S,tr(S)):me=null}break t}}De=0,Rt=null,tn(e,t,r,5);break;case 6:De=0,Rt=null,tn(e,t,r,6);break;case 8:ss(),Ye=6;break e;default:throw Error(c(462))}}Zp();break}catch(D){H0(e,D)}while(!0);return ga=dl=null,N.H=l,N.A=n,Ne=a,me!==null?0:(Oe=null,xe=0,vi(),Ye)}function Zp(){for(;me!==null&&!ze();)V0(me)}function V0(e){var t=h0(e.alternate,e,Da);e.memoizedProps=e.pendingProps,t===null?tr(e):me=t}function Z0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=c0(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=c0(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:No(t);default:g0(a,t),t=me=Xc(t,Da),t=h0(a,t,Da)}e.memoizedProps=e.pendingProps,t===null?tr(e):me=t}function tn(e,t,a,l){ga=dl=null,No(t),Xl=null,Dn=0;var n=t.return;try{if(Ep(e,n,t,a,xe)){Ye=1,Fi(e,Bt(a,e.current)),me=null;return}}catch(r){if(n!==null)throw me=n,r;Ye=1,Fi(e,Bt(a,e.current)),me=null;return}t.flags&32768?(ye||l===1?e=!0:Wl||(xe&536870912)!==0?e=!1:(Xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Q0(t,e)):tr(t)}function tr(e){var t=e;do{if((t.flags&32768)!==0){Q0(t,Xa);return}e=t.return;var a=Lp(t.alternate,t,Da);if(a!==null){me=a;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ye===0&&(Ye=5)}function Q0(e,t){do{var a=Bp(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ye=6,me=null}function K0(e,t,a,l,n,r,o,s,p){e.cancelPendingCommit=null;do ar();while(lt!==0);if((Ne&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Jr,wd(e,a,r,o,s,p),e===Oe&&(me=Oe=null,xe=0),Il=t,Qa=e,Ta=a,is=r,rs=n,L0=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jp(dt,function(){return I0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,n=E.p,E.p=2,o=Ne,Ne|=4;try{Up(e,t,a)}finally{Ne=o,E.p=n,N.T=l}}lt=1,P0(),J0(),W0()}}function P0(){if(lt===1){lt=0;var e=Qa,t=Il,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var l=E.p;E.p=2;var n=Ne;Ne|=4;try{M0(t,e);var r=_s,o=kc(e.containerInfo),s=r.focusedElem,p=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ec(s.ownerDocument.documentElement,s)){if(p!==null&&Vr(s)){var S=p.start,D=p.end;if(D===void 0&&(D=S),"selectionStart"in s)s.selectionStart=S,s.selectionEnd=Math.min(D,s.value.length);else{var R=s.ownerDocument||document,z=R&&R.defaultView||window;if(z.getSelection){var w=z.getSelection(),K=s.textContent.length,te=Math.min(p.start,K),Re=p.end===void 0?te:Math.min(p.end,K);!w.extend&&te>Re&&(o=Re,Re=te,te=o);var g=Oc(s,te),h=Oc(s,Re);if(g&&h&&(w.rangeCount!==1||w.anchorNode!==g.node||w.anchorOffset!==g.offset||w.focusNode!==h.node||w.focusOffset!==h.offset)){var v=R.createRange();v.setStart(g.node,g.offset),w.removeAllRanges(),te>Re?(w.addRange(v),w.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),w.addRange(v))}}}}for(R=[],w=s;w=w.parentNode;)w.nodeType===1&&R.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<R.length;s++){var A=R[s];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}mr=!!vs,_s=vs=null}finally{Ne=n,E.p=l,N.T=a}}e.current=t,lt=2}}function J0(){if(lt===2){lt=0;var e=Qa,t=Il,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var l=E.p;E.p=2;var n=Ne;Ne|=4;try{N0(e,t.alternate,t)}finally{Ne=n,E.p=l,N.T=a}}lt=3}}function W0(){if(lt===4||lt===3){lt=0,rt();var e=Qa,t=Il,a=Ta,l=L0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,Il=Qa=null,$0(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Za=null),jr(a),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ra,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=N.T,n=E.p,E.p=2,N.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var s=l[o];r(s.value,{componentStack:s.stack})}}finally{N.T=t,E.p=n}}(Ta&3)!==0&&ar(),ia(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===os?Xn++:(Xn=0,os=e):Xn=0,Vn(0)}}function $0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wn(t)))}function ar(){return P0(),J0(),W0(),I0()}function I0(){if(lt!==5)return!1;var e=Qa,t=is;is=0;var a=jr(Ta),l=N.T,n=E.p;try{E.p=32>a?32:a,N.T=null,a=rs,rs=null;var r=Qa,o=Ta;if(lt=0,Il=Qa=null,Ta=0,(Ne&6)!==0)throw Error(c(331));var s=Ne;if(Ne|=4,E0(r.current),R0(r,r.current,o,a),Ne=s,Vn(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ra,r)}catch{}return!0}finally{E.p=n,N.T=l,$0(e,t)}}function ef(e,t,a){t=Bt(a,t),t=Uo(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Et(e,2),ia(e))}function Te(e,t,a){if(e.tag===3)ef(e,e,a);else for(;t!==null;){if(t.tag===3){ef(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Za===null||!Za.has(l))){e=Bt(a,e),a=t0(2),l=Ga(t,a,2),l!==null&&(a0(a,l,t,e),Et(l,2),ia(l));break}}t=t.return}}function us(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Fp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(as=!0,n.add(a),e=Qp.bind(null,e,t,a),t.then(e,e))}function Qp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>Ce()-Ji?(Ne&2)===0&&en(e,0):ls|=a,$l===xe&&($l=0)),ia(e)}function tf(e,t){t===0&&(t=jt()),e=cl(e,t),e!==null&&(Et(e,t),ia(e))}function Kp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),tf(e,a)}function Pp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),tf(e,a)}function Jp(e,t){return fe(e,t)}var lr=null,an=null,fs=!1,nr=!1,ds=!1,Pa=0;function ia(e){e!==an&&e.next===null&&(an===null?lr=an=e:an=an.next=e),nr=!0,fs||(fs=!0,$p())}function Vn(e,t){if(!ds&&nr){ds=!0;do for(var a=!1,l=lr;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var o=l.suspendedLanes,s=l.pingedLanes;r=(1<<31-Je(42|e)+1)-1,r&=n&~(o&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,rf(l,r))}else r=xe,r=Kt(l,l===Oe?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||ea(l,r)||(a=!0,rf(l,r));l=l.next}while(a);ds=!1}}function Wp(){af()}function af(){nr=fs=!1;var e=0;Pa!==0&&sm()&&(e=Pa);for(var t=Ce(),a=null,l=lr;l!==null;){var n=l.next,r=lf(l,t);r===0?(l.next=null,a===null?lr=n:a.next=n,n===null&&(an=a)):(a=l,(e!==0||(r&3)!==0)&&(nr=!0)),l=n}lt!==0&&lt!==5||Vn(e),Pa!==0&&(Pa=0)}function lf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Je(r),s=1<<o,p=n[o];p===-1?((s&a)===0||(s&l)!==0)&&(n[o]=at(s,t)):p<=t&&(e.expiredLanes|=s),r&=~s}if(t=Oe,a=xe,a=Kt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Be(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ea(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Be(l),jr(a)){case 2:case 8:a=Qt;break;case 32:a=dt;break;case 268435456:a=oi;break;default:a=dt}return l=nf.bind(null,e),a=fe(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Be(l),e.callbackPriority=2,e.callbackNode=null,2}function nf(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ar()&&e.callbackNode!==a)return null;var l=xe;return l=Kt(e,e===Oe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(U0(e,l,t),lf(e,Ce()),e.callbackNode!=null&&e.callbackNode===a?nf.bind(null,e):null)}function rf(e,t){if(ar())return null;U0(e,t,!0)}function $p(){um(function(){(Ne&6)!==0?fe(tt,Wp):af()})}function ps(){if(Pa===0){var e=Hl;e===0&&(e=It,It<<=1,(It&261888)===0&&(It=256)),Pa=e}return Pa}function of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:di(""+e)}function sf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ip(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=of((n[yt]||null).action),o=l.submitter;o&&(t=(t=o[yt]||null)?of(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var s=new xi("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pa!==0){var p=o?sf(n,o):new FormData(n);Oo(a,{pending:!0,data:p,method:n.method,action:r},null,p)}}else typeof r=="function"&&(s.preventDefault(),p=o?sf(n,o):new FormData(n),Oo(a,{pending:!0,data:p,method:n.method,action:r},r,p))},currentTarget:n}]})}}for(var ms=0;ms<Pr.length;ms++){var hs=Pr[ms],em=hs.toLowerCase(),tm=hs[0].toUpperCase()+hs.slice(1);Pt(em,"on"+tm)}Pt(Bc,"onAnimationEnd"),Pt(Uc,"onAnimationIteration"),Pt(Gc,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(gp,"onTransitionRun"),Pt(yp,"onTransitionStart"),Pt(bp,"onTransitionCancel"),Pt(Hc,"onTransitionEnd"),Dl("onMouseEnter",["mouseout","mouseover"]),Dl("onMouseLeave",["mouseout","mouseover"]),Dl("onPointerEnter",["pointerout","pointerover"]),Dl("onPointerLeave",["pointerout","pointerover"]),il("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),il("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),il("onBeforeInput",["compositionend","keypress","textInput","paste"]),il("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),il("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),il("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));function cf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var s=l[o],p=s.instance,S=s.currentTarget;if(s=s.listener,p!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=S;try{r(n)}catch(D){bi(D)}n.currentTarget=null,r=p}else for(o=0;o<l.length;o++){if(s=l[o],p=s.instance,S=s.currentTarget,s=s.listener,p!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=S;try{r(n)}catch(D){bi(D)}n.currentTarget=null,r=p}}}}function he(e,t){var a=t[Dr];a===void 0&&(a=t[Dr]=new Set);var l=e+"__bubble";a.has(l)||(uf(t,e,2,!1),a.add(l))}function xs(e,t,a){var l=0;t&&(l|=4),uf(a,e,l,t)}var ir="_reactListening"+Math.random().toString(36).slice(2);function gs(e){if(!e[ir]){e[ir]=!0,ac.forEach(function(a){a!=="selectionchange"&&(am.has(a)||xs(a,!1,e),xs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ir]||(t[ir]=!0,xs("selectionchange",!1,t))}}function uf(e,t,a,l){switch(Uf(t)){case 2:var n=Am;break;case 8:n=Rm;break;default:n=Cs}a=n.bind(null,t,a,e),n=void 0,!qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ys(e,t,a,l,n){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=l.return;o!==null;){var p=o.tag;if((p===3||p===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Nl(s),o===null)return;if(p=o.tag,p===5||p===6||p===26||p===27){l=r=o;continue e}s=s.parentNode}}l=l.return}mc(function(){var S=r,D=Er(a),R=[];e:{var z=Fc.get(e);if(z!==void 0){var w=xi,K=e;switch(e){case"keypress":if(mi(a)===0)break e;case"keydown":case"keyup":w=Pd;break;case"focusin":K="focus",w=Gr;break;case"focusout":K="blur",w=Gr;break;case"beforeblur":case"afterblur":w=Gr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=$d;break;case Bc:case Uc:case Gc:w=Gd;break;case Hc:w=ep;break;case"scroll":case"scrollend":w=kd;break;case"wheel":w=ap;break;case"copy":case"cut":case"paste":w=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bc;break;case"toggle":case"beforetoggle":w=np}var te=(t&4)!==0,Re=!te&&(e==="scroll"||e==="scrollend"),g=te?z!==null?z+"Capture":null:z;te=[];for(var h=S,v;h!==null;){var A=h;if(v=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||v===null||g===null||(A=mn(h,g),A!=null&&te.push(Qn(h,A,v))),Re)break;h=h.return}0<te.length&&(z=new w(z,K,null,a,D),R.push({event:z,listeners:te}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",z&&a!==Or&&(K=a.relatedTarget||a.fromElement)&&(Nl(K)||K[zl]))break e;if((w||z)&&(z=D.window===D?D:(z=D.ownerDocument)?z.defaultView||z.parentWindow:window,w?(K=a.relatedTarget||a.toElement,w=S,K=K?Nl(K):null,K!==null&&(Re=_(K),te=K.tag,K!==Re||te!==5&&te!==27&&te!==6)&&(K=null)):(w=null,K=S),w!==K)){if(te=gc,A="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(te=bc,A="onPointerLeave",g="onPointerEnter",h="pointer"),Re=w==null?z:pn(w),v=K==null?z:pn(K),z=new te(A,h+"leave",w,a,D),z.target=Re,z.relatedTarget=v,A=null,Nl(D)===S&&(te=new te(g,h+"enter",K,a,D),te.target=v,te.relatedTarget=Re,A=te),Re=A,w&&K)t:{for(te=lm,g=w,h=K,v=0,A=g;A;A=te(A))v++;A=0;for(var $=h;$;$=te($))A++;for(;0<v-A;)g=te(g),v--;for(;0<A-v;)h=te(h),A--;for(;v--;){if(g===h||h!==null&&g===h.alternate){te=g;break t}g=te(g),h=te(h)}te=null}else te=null;w!==null&&ff(R,z,w,te,!1),K!==null&&Re!==null&&ff(R,Re,K,te,!0)}}e:{if(z=S?pn(S):window,w=z.nodeName&&z.nodeName.toLowerCase(),w==="select"||w==="input"&&z.type==="file")var _e=Dc;else if(wc(z))if(Tc)_e=mp;else{_e=dp;var J=fp}else w=z.nodeName,!w||w.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?S&&Cr(S.elementType)&&(_e=Dc):_e=pp;if(_e&&(_e=_e(e,S))){jc(R,_e,a,D);break e}J&&J(e,z,S),e==="focusout"&&S&&z.type==="number"&&S.memoizedProps.value!=null&&Rr(z,"number",z.value)}switch(J=S?pn(S):window,e){case"focusin":(wc(J)||J.contentEditable==="true")&&(Ol=J,Zr=S,Sn=null);break;case"focusout":Sn=Zr=Ol=null;break;case"mousedown":Qr=!0;break;case"contextmenu":case"mouseup":case"dragend":Qr=!1,qc(R,a,D);break;case"selectionchange":if(xp)break;case"keydown":case"keyup":qc(R,a,D)}var ce;if(Fr)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Cl?zc(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(vc&&a.locale!=="ko"&&(Cl||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Cl&&(ce=hc()):(Oa=D,Lr="value"in Oa?Oa.value:Oa.textContent,Cl=!0)),J=rr(S,ge),0<J.length&&(ge=new yc(ge,e,null,a,D),R.push({event:ge,listeners:J}),ce?ge.data=ce:(ce=Nc(a),ce!==null&&(ge.data=ce)))),(ce=rp?op(e,a):sp(e,a))&&(ge=rr(S,"onBeforeInput"),0<ge.length&&(J=new yc("onBeforeInput","beforeinput",null,a,D),R.push({event:J,listeners:ge}),J.data=ce)),Ip(R,e,S,a,D)}cf(R,t)})}function Qn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function rr(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=mn(e,a),n!=null&&l.unshift(Qn(e,n,r)),n=mn(e,t),n!=null&&l.push(Qn(e,n,r))),e.tag===3)return l;e=e.return}return[]}function lm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ff(e,t,a,l,n){for(var r=t._reactName,o=[];a!==null&&a!==l;){var s=a,p=s.alternate,S=s.stateNode;if(s=s.tag,p!==null&&p===l)break;s!==5&&s!==26&&s!==27||S===null||(p=S,n?(S=mn(a,r),S!=null&&o.unshift(Qn(a,S,p))):n||(S=mn(a,r),S!=null&&o.push(Qn(a,S,p)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var nm=/\r\n?/g,im=/\u0000|\uFFFD/g;function df(e){return(typeof e=="string"?e:""+e).replace(nm,`
`).replace(im,"")}function pf(e,t){return t=df(t),df(e)===t}function Ae(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ml(e,""+l);break;case"className":ui(e,"class",l);break;case"tabIndex":ui(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ui(e,a,l);break;case"style":dc(e,l,r);break;case"data":if(t!=="object"){ui(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=di(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",n.name,n,null),Ae(e,t,"formEncType",n.formEncType,n,null),Ae(e,t,"formMethod",n.formMethod,n,null),Ae(e,t,"formTarget",n.formTarget,n,null)):(Ae(e,t,"encType",n.encType,n,null),Ae(e,t,"method",n.method,n,null),Ae(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=di(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=pa);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=di(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":he("beforetoggle",e),he("toggle",e),ci(e,"popover",l);break;case"xlinkActuate":da(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":da(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":da(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":da(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":da(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":da(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":da(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ci(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Od.get(a)||a,ci(e,a,l))}}function bs(e,t,a,l,n,r){switch(a){case"style":dc(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ml(e,l):(typeof l=="number"||typeof l=="bigint")&&Ml(e,""+l);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[yt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ci(e,a,l)}}}function ft(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,r,o,a,null)}}n&&Ae(e,t,"srcSet",a.srcSet,a,null),l&&Ae(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var s=r=o=n=null,p=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":o=D;break;case"checked":p=D;break;case"defaultChecked":S=D;break;case"value":r=D;break;case"defaultValue":s=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Ae(e,t,l,D,a,null)}}sc(e,r,s,p,S,o,n,!1);return;case"select":he("invalid",e),l=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":r=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:Ae(e,t,n,s,a,null)}t=r,a=o,e.multiple=!!l,t!=null?Tl(e,!!l,t,!1):a!=null&&Tl(e,!!l,a,!0);return;case"textarea":he("invalid",e),r=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":n=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:Ae(e,t,o,s,a,null)}uc(e,l,n,r);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ae(e,t,p,l,a,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(l=0;l<Zn.length;l++)he(Zn[l],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,S,l,a,null)}return;default:if(Cr(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&bs(e,t,D,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&Ae(e,t,s,l,a,null))}function rm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,s=null,p=null,S=null,D=null;for(w in a){var R=a[w];if(a.hasOwnProperty(w)&&R!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=R;default:l.hasOwnProperty(w)||Ae(e,t,w,null,l,R)}}for(var z in l){var w=l[z];if(R=a[z],l.hasOwnProperty(z)&&(w!=null||R!=null))switch(z){case"type":r=w;break;case"name":n=w;break;case"checked":S=w;break;case"defaultChecked":D=w;break;case"value":o=w;break;case"defaultValue":s=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:w!==R&&Ae(e,t,z,w,l,R)}}Ar(e,o,s,p,S,D,r,n);return;case"select":w=o=s=z=null;for(r in a)if(p=a[r],a.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":w=p;default:l.hasOwnProperty(r)||Ae(e,t,r,null,l,p)}for(n in l)if(r=l[n],p=a[n],l.hasOwnProperty(n)&&(r!=null||p!=null))switch(n){case"value":z=r;break;case"defaultValue":s=r;break;case"multiple":o=r;default:r!==p&&Ae(e,t,n,r,l,p)}t=s,a=o,l=w,z!=null?Tl(e,!!a,z,!1):!!l!=!!a&&(t!=null?Tl(e,!!a,t,!0):Tl(e,!!a,a?[]:"",!1));return;case"textarea":w=z=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ae(e,t,s,null,l,n)}for(o in l)if(n=l[o],r=a[o],l.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":z=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==r&&Ae(e,t,o,n,l,r)}cc(e,z,w);return;case"option":for(var K in a)if(z=a[K],a.hasOwnProperty(K)&&z!=null&&!l.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:Ae(e,t,K,null,l,z)}for(p in l)if(z=l[p],w=a[p],l.hasOwnProperty(p)&&z!==w&&(z!=null||w!=null))switch(p){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ae(e,t,p,z,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)z=a[te],a.hasOwnProperty(te)&&z!=null&&!l.hasOwnProperty(te)&&Ae(e,t,te,null,l,z);for(S in l)if(z=l[S],w=a[S],l.hasOwnProperty(S)&&z!==w&&(z!=null||w!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:Ae(e,t,S,z,l,w)}return;default:if(Cr(t)){for(var Re in a)z=a[Re],a.hasOwnProperty(Re)&&z!==void 0&&!l.hasOwnProperty(Re)&&bs(e,t,Re,void 0,l,z);for(D in l)z=l[D],w=a[D],!l.hasOwnProperty(D)||z===w||z===void 0&&w===void 0||bs(e,t,D,z,l,w);return}}for(var g in a)z=a[g],a.hasOwnProperty(g)&&z!=null&&!l.hasOwnProperty(g)&&Ae(e,t,g,null,l,z);for(R in l)z=l[R],w=a[R],!l.hasOwnProperty(R)||z===w||z==null&&w==null||Ae(e,t,R,z,l,w)}function mf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function om(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],r=n.transferSize,o=n.initiatorType,s=n.duration;if(r&&s&&mf(o)){for(o=0,s=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],S=p.startTime;if(S>s)break;var D=p.transferSize,R=p.initiatorType;D&&mf(R)&&(p=p.responseEnd,o+=D*(p<s?1:(s-S)/(p-S)))}if(--l,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vs=null,_s=null;function or(e){return e.nodeType===9?e:e.ownerDocument}function hf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=null;function sm(){var e=window.event;return e&&e.type==="popstate"?e===zs?!1:(zs=e,!0):(zs=null,!1)}var gf=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(e){return yf.resolve(null).then(e).catch(fm)}:gf;function fm(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function bf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),on(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Kn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Kn(a);for(var r=a.firstChild;r;){var o=r.nextSibling,s=r.nodeName;r[dn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&Kn(e.ownerDocument.body);a=n}while(a);on(t)}function vf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ns(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ns(a),Tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dm(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[dn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function pm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function _f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function ws(e){return e.data==="$?"||e.data==="$~"}function js(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ds=null;function Sf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nf(e,t,a){switch(t=or(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tr(e)}var Xt=new Map,wf=new Set;function sr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=E.d;E.d={f:hm,r:xm,D:gm,C:ym,L:bm,m:vm,X:Sm,S:_m,M:zm};function hm(){var e=Ma.f(),t=Ii();return e||t}function xm(e){var t=wl(e);t!==null&&t.tag===5&&t.type==="form"?Hu(t):Ma.r(e)}var ln=typeof document>"u"?null:document;function jf(e,t,a){var l=ln;if(l&&typeof t=="string"&&t){var n=qt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),wf.has(n)||(wf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),ft(t,"link",e),nt(t),l.head.appendChild(t)))}}function gm(e){Ma.D(e),jf("dns-prefetch",e,null)}function ym(e,t){Ma.C(e,t),jf("preconnect",e,t)}function bm(e,t,a){Ma.L(e,t,a);var l=ln;if(l&&e&&t){var n='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+qt(a.imageSizes)+'"]')):n+='[href="'+qt(e)+'"]';var r=n;switch(t){case"style":r=nn(e);break;case"script":r=rn(e)}Xt.has(r)||(e=C({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Pn(r))||t==="script"&&l.querySelector(Jn(r))||(t=l.createElement("link"),ft(t,"link",e),nt(t),l.head.appendChild(t)))}}function vm(e,t){Ma.m(e,t);var a=ln;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(e)+'"]',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=rn(e)}if(!Xt.has(r)&&(e=C({rel:"modulepreload",href:e},t),Xt.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jn(r)))return}l=a.createElement("link"),ft(l,"link",e),nt(l),a.head.appendChild(l)}}}function _m(e,t,a){Ma.S(e,t,a);var l=ln;if(l&&e){var n=jl(l).hoistableStyles,r=nn(e);t=t||"default";var o=n.get(r);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(Pn(r)))s.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(r))&&Ts(e,a);var p=o=l.createElement("link");nt(p),ft(p,"link",e),p._p=new Promise(function(S,D){p.onload=S,p.onerror=D}),p.addEventListener("load",function(){s.loading|=1}),p.addEventListener("error",function(){s.loading|=2}),s.loading|=4,cr(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(r,o)}}}function Sm(e,t){Ma.X(e,t);var a=ln;if(a&&e){var l=jl(a).hoistableScripts,n=rn(e),r=l.get(n);r||(r=a.querySelector(Jn(n)),r||(e=C({src:e,async:!0},t),(t=Xt.get(n))&&Ms(e,t),r=a.createElement("script"),nt(r),ft(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function zm(e,t){Ma.M(e,t);var a=ln;if(a&&e){var l=jl(a).hoistableScripts,n=rn(e),r=l.get(n);r||(r=a.querySelector(Jn(n)),r||(e=C({src:e,async:!0,type:"module"},t),(t=Xt.get(n))&&Ms(e,t),r=a.createElement("script"),nt(r),ft(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function Df(e,t,a,l){var n=(n=ne.current)?sr(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=nn(a.href),a=jl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nn(a.href);var r=jl(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(Pn(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),r||Nm(n,e,a,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=rn(a),a=jl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function nn(e){return'href="'+qt(e)+'"'}function Pn(e){return'link[rel="stylesheet"]['+e+"]"}function Tf(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Nm(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",a),nt(t),e.head.appendChild(t))}function rn(e){return'[src="'+qt(e)+'"]'}function Jn(e){return"script[async]"+e}function Mf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(l)return t.instance=l,nt(l),l;var n=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nt(l),ft(l,"style",n),cr(l,a.precedence,e),t.instance=l;case"stylesheet":n=nn(a.href);var r=e.querySelector(Pn(n));if(r)return t.state.loading|=4,t.instance=r,nt(r),r;l=Tf(a),(n=Xt.get(n))&&Ts(l,n),r=(e.ownerDocument||e).createElement("link"),nt(r);var o=r;return o._p=new Promise(function(s,p){o.onload=s,o.onerror=p}),ft(r,"link",l),t.state.loading|=4,cr(r,a.precedence,e),t.instance=r;case"script":return r=rn(a.src),(n=e.querySelector(Jn(r)))?(t.instance=n,nt(n),n):(l=a,(n=Xt.get(r))&&(l=C({},a),Ms(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),nt(n),ft(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,cr(l,a.precedence,e));return t.instance}function cr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,r=n,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===t)r=s;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ur=null;function Af(e,t,a){if(ur===null){var l=new Map,n=ur=new Map;n.set(a,l)}else n=ur,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[dn]||r[ot]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var s=l.get(o);s?s.push(r):l.set(o,[r])}}return l}function Rf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jm(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=nn(l.href),r=t.querySelector(Pn(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,nt(r);return}r=t.ownerDocument||t,l=Tf(l),(n=Xt.get(n))&&Ts(l,n),r=r.createElement("link"),nt(r);var o=r;o._p=new Promise(function(s,p){o.onload=s,o.onerror=p}),ft(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var As=0;function Dm(e,t){return e.stylesheets&&e.count===0&&pr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&pr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&As===0&&(As=62500*om());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>As?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function fr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dr=null;function pr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dr=new Map,t.forEach(Tm,e),dr=null,fr.call(e))}function Tm(e,t){if(!(t.state.loading&4)){var a=dr.get(e);if(a)var l=a.get(null);else{a=new Map,dr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||l,r===l&&a.set(null,n),a.set(o,n),this.count++,l=fr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Wn={$$typeof:b,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Mm(e,t,a,l,n,r,o,s,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ta(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.hiddenUpdates=ta(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Of(e,t,a,l,n,r,o,s,p,S,D,R){return e=new Mm(e,t,a,o,p,S,D,R,s),t=1,r===!0&&(t|=24),r=Tt(3,null,null,t),e.current=r,r.stateNode=e,t=so(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},po(r),e}function Ef(e){return e?(e=ql,e):ql}function kf(e,t,a,l,n,r){n=Ef(n),l.context===null?l.context=n:l.pendingContext=n,l=Ua(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=Ga(e,l,t),a!==null&&(Nt(a,e,t),Mn(a,e,t))}function qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Rs(e,t){qf(e,t),(e=e.alternate)&&qf(e,t)}function Lf(e){if(e.tag===13||e.tag===31){var t=cl(e,67108864);t!==null&&Nt(t,e,67108864),Rs(e,67108864)}}function Bf(e){if(e.tag===13||e.tag===31){var t=Ot();t=wr(t);var a=cl(e,t);a!==null&&Nt(a,e,t),Rs(e,t)}}var mr=!0;function Am(e,t,a,l){var n=N.T;N.T=null;var r=E.p;try{E.p=2,Cs(e,t,a,l)}finally{E.p=r,N.T=n}}function Rm(e,t,a,l){var n=N.T;N.T=null;var r=E.p;try{E.p=8,Cs(e,t,a,l)}finally{E.p=r,N.T=n}}function Cs(e,t,a,l){if(mr){var n=Os(l);if(n===null)ys(e,t,l,hr,a),Gf(e,l);else if(Om(n,e,t,a,l))l.stopPropagation();else if(Gf(e,l),t&4&&-1<Cm.indexOf(e)){for(;n!==null;){var r=wl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=mt(r.pendingLanes);if(o!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var p=1<<31-Je(o);s.entanglements[1]|=p,o&=~p}ia(r),(Ne&6)===0&&(Wi=Ce()+500,Vn(0))}}break;case 31:case 13:s=cl(r,2),s!==null&&Nt(s,r,2),Ii(),Rs(r,2)}if(r=Os(l),r===null&&ys(e,t,l,hr,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else ys(e,t,l,null,a)}}function Os(e){return e=Er(e),Es(e)}var hr=null;function Es(e){if(hr=null,e=Nl(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=j(t),e!==null)return e;e=null}else if(a===31){if(e=k(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hr=e,null}function Uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case tt:return 2;case Qt:return 8;case dt:case oa:return 32;case oi:return 268435456;default:return 32}default:return 32}}var ks=!1,Wa=null,$a=null,Ia=null,$n=new Map,In=new Map,el=[],Cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gf(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function ei(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=wl(t),t!==null&&Lf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Om(e,t,a,l,n){switch(t){case"focusin":return Wa=ei(Wa,e,t,a,l,n),!0;case"dragenter":return $a=ei($a,e,t,a,l,n),!0;case"mouseover":return Ia=ei(Ia,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return $n.set(r,ei($n.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,In.set(r,ei(In.get(r)||null,e,t,a,l,n)),!0}return!1}function Hf(e){var t=Nl(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=j(a),t!==null){e.blockedOn=t,ec(e.priority,function(){Bf(a)});return}}else if(t===31){if(t=k(a),t!==null){e.blockedOn=t,ec(e.priority,function(){Bf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Os(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Or=l,a.target.dispatchEvent(l),Or=null}else return t=wl(a),t!==null&&Lf(t),e.blockedOn=a,!1;t.shift()}return!0}function Ff(e,t,a){xr(e)&&a.delete(t)}function Em(){ks=!1,Wa!==null&&xr(Wa)&&(Wa=null),$a!==null&&xr($a)&&($a=null),Ia!==null&&xr(Ia)&&(Ia=null),$n.forEach(Ff),In.forEach(Ff)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Em)))}var yr=null;function Yf(e){yr!==e&&(yr=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){yr===e&&(yr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Es(l||a)===null)continue;break}var r=wl(a);r!==null&&(e.splice(t,3),t-=3,Oo(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function on(e){function t(p){return gr(p,e)}Wa!==null&&gr(Wa,e),$a!==null&&gr($a,e),Ia!==null&&gr(Ia,e),$n.forEach(t),In.forEach(t);for(var a=0;a<el.length;a++){var l=el[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<el.length&&(a=el[0],a.blockedOn===null);)Hf(a),a.blockedOn===null&&el.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],o=n[yt]||null;if(typeof r=="function")o||Yf(a);else if(o){var s=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[yt]||null)s=o.formAction;else if(Es(n)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Yf(a)}}}function Xf(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function qs(e){this._internalRoot=e}br.prototype.render=qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=Ot();kf(a,l,e,t,null,null)},br.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kf(e.current,2,null,e,null,null),Ii(),t[zl]=null}};function br(e){this._internalRoot=e}br.prototype.unstable_scheduleHydration=function(e){if(e){var t=Is();e={blockedOn:null,target:e,priority:t};for(var a=0;a<el.length&&t!==0&&t<el[a].priority;a++);el.splice(a,0,e),a===0&&Hf(e)}};var Vf=f.version;if(Vf!=="19.2.8")throw Error(c(527,Vf,"19.2.8"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var km={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{Ra=vr.inject(km),pt=vr}catch{}}return ai.createRoot=function(e,t){if(!y(e))throw Error(c(299));var a=!1,l="",n=Wu,r=$u,o=Iu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Of(e,1,!1,null,null,a,l,null,n,r,o,Xf),e[zl]=t.current,gs(e),new qs(t)},ai.hydrateRoot=function(e,t,a){if(!y(e))throw Error(c(299));var l=!1,n="",r=Wu,o=$u,s=Iu,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Of(e,1,!0,t,a??null,l,n,p,r,o,s,Xf),t.context=Ef(null),a=t.current,l=Ot(),l=wr(l),n=Ua(l),n.callback=null,Ga(a,n,l),a=l,t.current.lanes=a,Et(t,a),ia(t),e[zl]=t.current,gs(e),new br(t)},ai.version="19.2.8",ai}var td;function Zm(){if(td)return Bs.exports;td=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Bs.exports=Vm(),Bs.exports}var Qm=Zm();const Km=Lm(Qm);var O=Qs();const Pm=`
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
    let num = 2.0 * z3 + vec2<f32>(1.0, 0.0);
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
  var p = p_in * 2.2;
  let rot = rot2D(p.xz, t * 0.08);
  p = vec3<f32>(rot.x, p.y + 0.5, rot.y);
  let r_xy = length(p.xz);
  let lobe1 = length(p - vec3<f32>(0.9, 0.4, 0.0)) - 0.7;
  let lobe2 = length(p - vec3<f32>(-0.9, -0.4, 0.0)) - 0.7;
  let lobes = min(lobe1, lobe2);
  let theta = atan2(p.z, p.x);
  let vortex = sin(p.y * 3.0 + theta * 2.0 + t * 0.5) * 0.2;
  let d = lobes + vortex * 0.35;
  let bound = length(p_in) - 2.8;
  return vec2<f32>(max(d * 0.45, bound), abs(vortex) + 0.3 * r_xy);
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
  var p = p_in * 1.6;
  let rot = rot2D(p.xz, t * 0.06);
  p = vec3<f32>(rot.x, p.y, rot.y);
  let r = length(p);
  let theta = atan2(p.y, p.x);
  let phi_ang = acos(clamp(p.z / max(r, 0.001), -1.0, 1.0));
  let dendrite = sin(phi_ang * 7.0 + theta * 5.0) * cos(theta * 3.0 + r * 6.0 - t * 0.3);
  let growth = r - 1.2 - dendrite * 0.35 * (1.0 + 0.5 * sin(r * 12.0 * phi));
  let d = growth * 0.5;
  let bound = r - 2.8;
  return vec2<f32>(max(d, bound), abs(dendrite) + 0.25 * r);
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
  let a = -1.4 + 0.1 * sin(t * 0.2);
  let b = 1.6 + 0.1 * cos(t * 0.15);
  let c = 1.0 * phi;
  let d_p: f32 = 0.7;
  var q = p_in;
  var trap: f32 = 1e10;
  var d: f32 = 1e10;
  for (var i: i32 = 0; i < 7; i = i + 1) {
    let x_next = sin(a * q.y) + c * cos(a * q.x);
    let y_next = sin(b * q.x) + d_p * cos(b * q.y);
    let z_next = sin(q.z * phi + t * 0.1) * 0.5;
    let target = vec3<f32>(x_next, y_next, z_next) * 0.55;
    let dist = length(p_in - target) - 0.08 * (1.0 + 0.5 * sin(f32(i) * phi));
    d = min(d, dist);
    trap = min(trap, dist);
    q = target;
  }
  return vec2<f32>(d, trap);
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

// Master Single Primitive Dispatcher (41 Architectures)
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
  return mapBelousovWaves(p, t, phi, iters);
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
    let resC = evalSingleFractal(ftypeC, p_eval, t, phi, 4);
    let blendC = clamp(u.tertiary_blend, 0.0, 0.35);
    current_d = opSmoothUnion(current_d, resC.x, k * blendC * 0.5);
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
  return clamp(1.0 - 2.2 * occ, 0.15, 1.0);
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
  var glow: f32 = 0.0;
  var hit: bool = false;
  var min_trap: f32 = 1e10;
  var steps: i32 = 0;

  for (var i: i32 = 0; i < 112; i = i + 1) {
    let p = ro + rd * t;
    let res = sceneSDF(p);
    let d = res.x;
    min_trap = min(min_trap, res.y);

    // No near-plane escape — let rays march from the start to prevent slicing artifacts
    
    // Controlled aura & interior volumetric fog
    let fogDensity = max(0.0, u.volumetric_fog);
    if (d > 0.006) {
      glow = glow + (0.0012 * (1.0 + fogDensity * 1.5)) / (0.08 + d * d * 18.0);
    }

    let hit_threshold = 0.00075 * t + 0.00025;
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      // 3-step bisection refinement for exact zero isosurface contact
      var t_a: f32 = max(0.001, t - 0.02);
      var t_b: f32 = t;
      for (var s: i32 = 0; s < 3; s = s + 1) {
        let t_m = 0.5 * (t_a + t_b);
        let dm = sceneSDF(ro + rd * t_m).x;
        if (abs(dm) < 0.0001) { t = t_m; break; }
        if (dm < 0.0) { t_b = t_m; }
        else { t_a = t_m; }
        t = t_m;
      }
      break;
    }

    // Adaptive step sizing: fast across open space, precise at isosurface
    let step_factor = select(0.80, 0.94, abs(d) > 0.2);
    let step_d = max(abs(d) * step_factor, 0.0008);
    t = t + step_d;
    if (t > max_dist) {
      break;
    }
  }

  glow = min(glow, 0.45);

  let bg_rad = length(uv);
  var col = vec3<f32>(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u.time * 0.3));
  col = col + u.accent_color * 0.04 * exp(-bg_rad * 1.5);

  if (hit) {
    let p = ro + rd * t;
    let base_n = calcNormal(p, 0.0008 * t + 0.00025);
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
    let sss: f32 = (sssTotal / 3.0) * 0.55;
    sssCol = u.accent_color * sss * ao;
    let fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    let diff1 = max(dot(n, light1), 0.0) * (0.2 + 0.8 * sh1);
    let diff2 = max(dot(n, light2), 0.0) * (0.15 + 0.85 * sh2);

    let h1 = normalize(light1 - rd);
    let spec1 = pow(max(dot(n, h1), 0.0), 32.0) * sh1;

    // Dynamic Camera Headlamp: subtle fill light from camera direction
    let headDir = -rd;
    let headDiff = max(dot(n, headDir), 0.0);
    let headSpec = pow(headDiff, 32.0);
    let headAtten = 1.0 / (1.0 + t * 0.8 + t * t * 0.2);
    let headPower = max(0.0, u.headlamp_power) * 0.3; // Reduced to 30% to prevent harsh camera shadow
    let headLight = (vec3<f32>(1.0, 0.97, 0.90) * headDiff * 0.4 + vec3<f32>(1.0, 1.0, 0.95) * headSpec * 0.3) * headAtten * ao * headPower;

    // Harmonic Cosine Palette Engine with Golden Ratio Phase distribution
    let phase = fract(min_trap * 0.85 + length(p) * 0.18 + u.time * 0.02);
    let w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    let w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    let w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    var mat_col = u.primary_color * w_primary + u.secondary_color * w_secondary;
    mat_col = mix(mat_col, u.accent_color, w_accent * 0.45);
    mat_col = mix(mat_col, u.accent_color, pow(1.0 - ao, 2.0) * 0.35);

    let ambient = u.primary_color * 0.16 * ao;
    let diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    let specular = vec3<f32>(1.0, 0.96, 0.82) * spec1 * 1.35 * ao;
    let rim = u.accent_color * fresnel * 0.65 * (0.3 + 0.7 * ao);

    // Direct crisp surface lighting with interior headlight and SSS
    col = ambient + diffuse + specular + rim + headLight + sssCol;
    col = col * (0.28 + 0.72 * ao);

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
    // Each reveals different mathematical properties of the fractal
    // ZERO extra SDF calls — uses only already-computed data
    // ===================================================================
    
    if (u.render_style > 0.5 && u.render_style < 1.5) {
      // 1. X-Ray Томография: Density gradient + surface curvature + interior glow
      let dens = f32(steps) / 90.0;
      let surfaceEdge = pow(1.0 - ao, 2.0);
      let xrayCore = u.accent_color * (0.3 + dens * 1.2);
      let xrayShell = u.secondary_color * (0.2 + surfaceEdge * 0.8);
      var xrayCol = mix(xrayCore, xrayShell, 0.4 + 0.6 * ao);
      xrayCol = xrayCol + vec3<f32>(0.05, 0.12, 0.2) * surfaceEdge * 1.5;
      xrayCol = xrayCol + u.primary_color * surfaceEdge * 0.6;
      col = mix(col * 0.2, xrayCol * 1.4, 0.7 + 0.3 * ao);
    } else if (u.render_style > 1.5 && u.render_style < 2.5) {
      // 2. Топография: Normal-based elevation contours + slope shading
      let elevation = dot(n, vec3<f32>(0.0, 1.0, 0.0)) * 0.5 + 0.5;
      let contourRaw = abs(fract(elevation * 12.0) - 0.5) * 2.0;
      let contour = smoothstep(0.0, 0.08, contourRaw);
      let topoLow = u.secondary_color * 0.4;
      let topoHigh = u.primary_color * (0.6 + elevation * 0.8);
      let topoRidge = u.accent_color * (0.8 + elevation * 1.2);
      var topoCol = mix(topoLow, topoHigh, elevation);
      topoCol = mix(topoCol, topoRidge, elevation * 0.7);
      topoCol = mix(topoCol, topoCol * 1.8, (1.0 - contour) * 0.5);
      let slope = 1.0 - abs(dot(n, vec3<f32>(0.0, 1.0, 0.0)));
      topoCol = topoCol * (0.5 + 0.5 * slope);
      col = topoCol * (0.5 + 0.5 * ao);
    } else if (u.render_style > 2.5 && u.render_style < 3.5) {
      // 3. Голографическая проекция: Chromatic aberration + scan lines + shimmer
      let depthNorm = clamp(t / 20.0, 0.0, 1.0);
      let rOff = sin(depthNorm * 20.0 + u.time * 3.0) * 0.02;
      let gOff = sin(depthNorm * 20.0 + u.time * 3.0 + 2.094) * 0.02;
      let bOff = sin(depthNorm * 20.0 + u.time * 3.0 + 4.189) * 0.02;
      let holoBase = vec3<f32>(
        u.primary_color.r * (1.0 + rOff),
        u.primary_color.g * (1.0 + gOff),
        u.primary_color.b * (1.0 + bOff)
      );
      let holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
      let scanFreq = 180.0 + depthNorm * 120.0;
      let scanline = 0.85 + 0.15 * sin(in.uv.y * scanFreq + u.time * 8.0);
      let shimmer = 0.9 + 0.1 * sin(u.time * 5.0 + length(p) * 10.0);
      var holoCol = holoBase * (0.4 + holoFres * 1.2) * scanline * shimmer;
      holoCol = holoCol + u.accent_color * pow(1.0 - ao, 2.0) * 2.0;
      holoCol = holoCol + vec3<f32>(0.1, 0.3, 0.5) * holoFres * 1.5;
      col = mix(col * 0.1, holoCol, 0.92);
    } else if (u.render_style > 3.5 && u.render_style < 4.5) {
      // 4. Радужная интерференция: Multi-order thin-film interference
      let nv = max(dot(n, -rd), 0.0);
      let order1 = nv * 3.0 + min_trap * 0.5;
      let order2 = nv * 5.0 + min_trap * 0.3 + u.time * 0.08;
      let order3 = nv * 7.0 + min_trap * 0.2;
      let iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33));
      let iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33));
      let iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
      let iridCol = vec3<f32>(iridR, iridG, iridB);
      let hIrid = normalize(light1 - rd);
      let specAngle = max(dot(n, hIrid), 0.0);
      let specIrid = vec3<f32>(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * sh1 * 2.0;
      col = iridCol * (0.5 + 0.5 * ao) + specIrid;
    } else if (u.render_style > 4.5 && u.render_style < 5.5) {
      // 5. Квантовое поле: 3 standing waves on golden vectors + interference
      let wave1 = sin(length(p) * 12.0 - u.time * 3.5);
      let wave2 = cos(dot(p, normalize(vec3<f32>(1.618, 1.0, 0.618))) * 7.0 + u.time * 2.2);
      let wave3 = sin(dot(p, normalize(vec3<f32>(-0.618, 1.618, 1.0))) * 9.0 - u.time * 1.8);
      let interference = (wave1 + wave2 + wave3) / 3.0;
      let energy = pow(abs(interference), 0.7);
      let plasmaCold = u.secondary_color * (0.3 + energy * 0.5);
      let plasmaHot = u.accent_color * (0.8 + energy * 1.5);
      var qCol = mix(plasmaCold, plasmaHot, energy);
      qCol = qCol + u.accent_color * pow(fresnel, 2.0) * 1.2;
      col = qCol * (0.4 + 0.6 * ao) + sssCol * 1.2;
    } else if (u.render_style > 5.5) {
      // 6. Кристалл: Beer-Lambert + dual caustic + spectral dispersion
      let beer = exp(-max(t - 0.5, 0.0) * vec3<f32>(0.08, 0.25, 0.9));
      let caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
      let caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
      let caustic = caustic1 + caustic2;
      let refractCol = mix(u.primary_color, u.accent_color, fresnel * 0.7);
      var gemCol = refractCol * beer;
      let gemSpec = vec3<f32>(1.0, 0.96, 0.82) * spec1 * 2.0;
      let dispersion = fresnel * 0.15;
      gemCol.r = gemCol.r * (1.0 + dispersion);
      gemCol.b = gemCol.b * (1.0 - dispersion * 0.5);
      col = gemCol * (0.7 + 0.3 * ao) + gemSpec + u.accent_color * caustic * 0.6;
    }

    // Distance-relative atmospheric falloff
    let fogStart: f32 = select(select(max(2.0, cam_dist + 2.5), 8.0, cam_dist < 2.0), 16.0, cam_dist < 1.0);
    let fogDensity: f32 = select(0.02, 0.012, cam_dist < 1.0);
    let fog = 1.0 - exp(-max(0.0, t - fogStart) * fogDensity);
    col = mix(col, vec3<f32>(0.005, 0.004, 0.008), fog * clamp(u.volumetric_fog, 0.0, 1.0));
  } else {
    // Glow in empty void silhouette
    if (u.render_style > 0.5 && u.render_style < 1.5) {
      col = col + u.accent_color * glow * 1.2 + vec3<f32>(0.01, 0.02, 0.04);
    } else if (u.render_style > 2.5 && u.render_style < 3.5) {
      col = col + u.accent_color * glow * 1.8 + u.secondary_color * (glow * 0.6);
    } else if (u.render_style > 4.5 && u.render_style < 5.5) {
      col = col + mix(u.primary_color, u.accent_color, 0.5 + 0.5 * sin(u.time * 3.0)) * glow * 1.5;
    } else {
      col = col + u.accent_color * glow * (u.glow_intensity * 0.35);
    }
  }

  col = acesToneMap(col);

  let vigStrength = smoothstep(0.12, 1.0, cam_dist);
  let vignette = 1.0 - smoothstep(0.9, 1.8, bg_rad) * vigStrength * 0.5;
  col = col * vignette;

  return vec4<f32>(col, 1.0);
}
`,$t=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.95,.95,1],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.92,.98,1],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[1,1,1],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[1,.98,.92],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function sn(u){switch(u){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;default:return 0}}function ud(u){switch(u){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function fd(u){switch(u){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function dd(u){switch(u){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function pd(u){switch(u){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class Ks{constructor(f){this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.canvas=f}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!Ks.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const f=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),d=new Promise(_=>setTimeout(()=>_(null),5e3));if(this.adapter=await Promise.race([f,d]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const _=this.adapter.info;_&&(_.vendor||_.description)?this.adapterInfo=`${_.vendor||""} ${_.description||_.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(_=>{console.warn(`WebGPU device lost: ${_.message}`,_),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const c=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:c,alphaMode:"premultiplied"});try{const _=this.device.createCommandEncoder();_.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([_.finish()])}catch(_){console.debug("Initial clear pass handled:",_)}const y=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:Pm});if("getCompilationInfo"in y)try{const j=(await y.getCompilationInfo()).messages.filter(k=>k.type==="error");if(j.length>0){for(const k of j)console.error(`[WGSL Compile Error] Line ${k.lineNum}:${k.linePos}: ${k.message}`);return!1}}catch(_){console.debug("Compilation info inspection skipped:",_)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:y,entryPoint:"vs_main"},fragment:{module:y,entryPoint:"fs_main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(f){return console.warn("WebGPU init failed, will use fallback:",f),!1}}render(f,d){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const c=this.canvas.width,y=this.canvas.height;if(c===0||y===0)return;const _=d.customPalette||$t.find(L=>L.id===d.paletteId)||$t[0],j=sn(d.type),k=sn(d.hybridType||d.type),M=sn(d.tertiaryType||"riemannZeta"),m=this.uniformValues;m[0]=c,m[1]=y,m[2]=f,m[3]=d.phiMultiplier,m[4]=d.rotX,m[5]=d.rotY,m[6]=d.zoom,m[7]=j,m[8]=d.iterations,m[9]=d.glowIntensity,m[10]=d.morphSpeed,m[11]=k,m[12]=d.hybridBlend??0,m[13]=d.boxFold??1.2,m[14]=d.sphereFold??.65,m[15]=d.interiorCut??.35,m[16]=_.primary[0],m[17]=_.primary[1],m[18]=_.primary[2],m[19]=M,m[20]=_.secondary[0],m[21]=_.secondary[1],m[22]=_.secondary[2],m[23]=d.tertiaryBlend??0,m[24]=_.accent[0],m[25]=_.accent[1],m[26]=_.accent[2],m[27]=ud(d.compositeOp),m[28]=d.smoothK??.35,m[29]=d.warpStrength??.3,m[30]=d.octaveLayers??2,m[31]=fd(d.cameraMode),m[32]=d.camPosX??0,m[33]=d.camPosY??0,m[34]=d.camPosZ??0,m[35]=d.slicePlane??0,m[36]=d.headlampPower??1,m[37]=d.volumetricFog??.4,m[38]=dd(d.sliceAxis),m[39]=pd(d.renderStyle),m[40]=_.ambient?_.ambient[0]:.02,m[41]=_.ambient?_.ambient[1]:.02,m[42]=_.ambient?_.ambient[2]:.02,m[43]=0,m[44]=0,m[45]=0,m[46]=0,m[47]=0,this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const L=this.device.createCommandEncoder(),C=this.context.getCurrentTexture().createView(),U=L.beginRenderPass({colorAttachments:[{view:C,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});U.setPipeline(this.pipeline),U.setBindGroup(0,this.bindGroup),U.draw(3,1,0,0),U.end(),this.device.queue.submit([L.finish()])}catch(L){console.debug("WebGPU render frame skipped:",L.message)}}destroy(){var f,d;this.isDestroyed=!0;try{(f=this.uniformBuffer)==null||f.destroy()}catch{}try{(d=this.device)==null||d.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const Jm=`#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Wm=Jm,$m=`#version 300 es
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
    vec2 num = 2.0 * z3 + vec2(1.0, 0.0);
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

// 30. 3D Lorenz Strange Attractor Chaotic Flow
vec2 mapLorenzAttractor(vec3 p_in, float t, float phi, int iters) {
  vec3 p = p_in * 2.2;
  p.xz = rot2D(t * 0.08) * p.xz;
  p.y += 0.5;
  float r_xy = length(p.xz);
  float lobe1 = length(p - vec3(0.9, 0.4, 0.0)) - 0.7;
  float lobe2 = length(p - vec3(-0.9, -0.4, 0.0)) - 0.7;
  float lobes = min(lobe1, lobe2);
  float theta = atan(p.z, p.x);
  float vortex = sin(p.y * 3.0 + theta * 2.0 + t * 0.5) * 0.2;
  float d = lobes + vortex * 0.35;
  float bound = length(p_in) - 2.8;
  return vec2(max(d * 0.45, bound), abs(vortex) + 0.3 * r_xy);
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
  vec3 p = p_in * 1.6;
  p.xz = rot2D(t * 0.06) * p.xz;
  float r = length(p);
  float theta = atan(p.y, p.x);
  float phi_ang = acos(clamp(p.z / max(r, 0.001), -1.0, 1.0));
  float dendrite = sin(phi_ang * 7.0 + theta * 5.0) * cos(theta * 3.0 + r * 6.0 - t * 0.3);
  float growth = r - 1.2 - dendrite * 0.35 * (1.0 + 0.5 * sin(r * 12.0 * phi));
  float d = growth * 0.5;
  float bound = r - 2.8;
  return vec2(max(d, bound), abs(dendrite) + 0.25 * r);
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

// 35. Clifford-Pickover 4D Chaotic Dynamic Manifold
vec2 mapCliffordAttractor(vec3 p, float t, float phi, int iters) {
  float a = -1.4 + 0.1 * sin(t * 0.2);
  float b = 1.6 + 0.1 * cos(t * 0.15);
  float c = 1.0 * phi;
  float d_p = 0.7;
  vec3 q = p;
  float trap = 1e10;
  float d = 1e10;
  for (int i = 0; i < 7; i++) {
    float x_next = sin(a * q.y) + c * cos(a * q.x);
    float y_next = sin(b * q.x) + d_p * cos(b * q.y);
    float z_next = sin(q.z * phi + t * 0.1) * 0.5;
    vec3 target = vec3(x_next, y_next, z_next) * 0.55;
    float dist = length(p - target) - 0.08 * (1.0 + 0.5 * sin(float(i) * phi));
    d = min(d, dist);
    trap = min(trap, dist);
    q = target;
  }
  return vec2(d, trap);
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
  return mapBelousovWaves(p, t, phi, iters);
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
    vec2 resC = evalSingleFractal(ftypeC, p_eval, t, phi, 4);
    float blendC = clamp(u_tertiary_blend, 0.0, 0.35);
    current_d = opSmoothUnion(current_d, resC.x, k * blendC * 0.5);
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
  return clamp(1.0 - 2.2 * occ, 0.15, 1.0);
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
  float glow = 0.0;
  bool hit = false;
  float min_trap = 1e10;
  int steps = 0;

  for (int i = 0; i < 112; i++) {
    vec3 p = ro + rd * t;
    vec2 res = sceneSDF(p);
    float d = res.x;
    min_trap = min(min_trap, res.y);

    // No near-plane escape — let rays march from the start to prevent slicing artifacts
    
    // Controlled aura & interior volumetric fog
    float fogDensity = max(0.0, u_volumetric_fog);
    if (d > 0.006) {
      glow += (0.0012 * (1.0 + fogDensity * 1.5)) / (0.08 + d * d * 18.0);
    }

    float hit_threshold = 0.00075 * t + 0.00025;
    if (abs(d) < hit_threshold) {
      hit = true;
      steps = i;
      // 3-step bisection refinement for exact zero isosurface contact
      float t_a = max(0.001, t - 0.02);
      float t_b = t;
      for (int s = 0; s < 3; s++) {
        float t_m = 0.5 * (t_a + t_b);
        float dm = sceneSDF(ro + rd * t_m).x;
        if (abs(dm) < 0.0001) { t = t_m; break; }
        if (dm < 0.0) t_b = t_m;
        else t_a = t_m;
        t = t_m;
      }
      break;
    }

    // Adaptive step sizing: fast across open space, precise at isosurface
    float step_factor = (abs(d) > 0.2) ? 0.94 : 0.80;
    float step_d = max(abs(d) * step_factor, 0.0008);
    t += step_d;
    if (t > max_dist) break;
  }

  glow = min(glow, 0.45);

  float bg_rad = length(uv);
  vec3 col = vec3(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(uv.y * 3.0 + u_time * 0.3));
  col += u_accent_color * 0.04 * exp(-bg_rad * 1.5);

  if (hit) {
    vec3 p = ro + rd * t;
    vec3 base_n = calcNormal(p, 0.0008 * t + 0.00025);
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
    float sss = (sssTotal / 3.0) * 0.55;
    vec3 sssCol = u_accent_color * sss * ao;
    float fresnel = pow(clamp(1.0 + dot(rd, n), 0.0, 1.0), 3.0);

    float diff1 = max(dot(n, light1), 0.0) * (0.2 + 0.8 * sh1);
    float diff2 = max(dot(n, light2), 0.0) * (0.15 + 0.85 * sh2);

    vec3 h1 = normalize(light1 - rd);
    float spec1 = pow(max(dot(n, h1), 0.0), 32.0) * sh1;

    // Dynamic Camera Headlamp: subtle fill light from camera direction
    vec3 headDir = -rd;
    float headDiff = max(dot(n, headDir), 0.0);
    float headSpec = pow(headDiff, 32.0);
    float headAtten = 1.0 / (1.0 + t * 0.8 + t * t * 0.2);
    float headPower = max(0.0, u_headlamp_power) * 0.3; // Reduced to 30% to prevent harsh camera shadow
    vec3 headLight = (vec3(1.0, 0.97, 0.90) * headDiff * 0.4 + vec3(1.0, 1.0, 0.95) * headSpec * 0.3) * headAtten * ao * headPower;

    // Harmonic Cosine Palette Engine with Golden Ratio Phase distribution
    float phase = fract(min_trap * 0.85 + length(p) * 0.18 + u_time * 0.02);
    float w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
    float w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
    float w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));

    vec3 mat_col = u_primary_color * w_primary + u_secondary_color * w_secondary;
    mat_col = mix(mat_col, u_accent_color, w_accent * 0.45);
    mat_col = mix(mat_col, u_accent_color, pow(1.0 - ao, 2.0) * 0.35);

    vec3 ambient = u_primary_color * 0.16 * ao;
    vec3 diffuse = mat_col * (diff1 * 0.85 + diff2 * 0.25) * ao;
    vec3 specular = vec3(1.0, 0.96, 0.82) * spec1 * 1.35 * ao;
    vec3 rim = u_accent_color * fresnel * 0.65 * (0.3 + 0.7 * ao);

    // Direct crisp surface lighting with interior headlight and SSS
    col = ambient + diffuse + specular + rim + headLight + sssCol;
    col *= (0.28 + 0.72 * ao);

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
    // Each reveals different mathematical properties of the fractal
    // ZERO extra SDF calls — uses only already-computed data
    // ===================================================================
    
    if (u_render_style > 0.5 && u_render_style < 1.5) {
      // 1. X-Ray Томография: Density gradient + surface curvature + interior glow
      // Reveals internal structure through raymarch step density
      float dens = float(steps) / 90.0;
      float surfaceEdge = pow(1.0 - ao, 2.0); // Curvature proxy from AO
      vec3 xrayCore = u_accent_color * (0.3 + dens * 1.2);
      vec3 xrayShell = u_secondary_color * (0.2 + surfaceEdge * 0.8);
      vec3 xrayCol = mix(xrayCore, xrayShell, 0.4 + 0.6 * ao);
      xrayCol += vec3(0.05, 0.12, 0.2) * surfaceEdge * 1.5; // Interior glow
      xrayCol += u_primary_color * surfaceEdge * 0.6; // Edge enhancement
      col = mix(col * 0.2, xrayCol * 1.4, 0.7 + 0.3 * ao);
    } else if (u_render_style > 1.5 && u_render_style < 2.5) {
      // 2. Топография: Normal-based elevation contours + slope shading
      // Reveals surface structure through topographic contour bands
      float elevation = dot(n, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
      float contour = abs(fract(elevation * 12.0) - 0.5) * 2.0;
      contour = smoothstep(0.0, 0.08, contour);
      vec3 topoLow = u_secondary_color * 0.4;
      vec3 topoHigh = u_primary_color * (0.6 + elevation * 0.8);
      vec3 topoRidge = u_accent_color * (0.8 + elevation * 1.2);
      vec3 topoCol = mix(topoLow, topoHigh, elevation);
      topoCol = mix(topoCol, topoRidge, elevation * 0.7);
      topoCol = mix(topoCol, topoCol * 1.8, (1.0 - contour) * 0.5);
      float slope = 1.0 - abs(dot(n, vec3(0.0, 1.0, 0.0)));
      topoCol *= (0.5 + 0.5 * slope);
      col = topoCol * (0.5 + 0.5 * ao);
    } else if (u_render_style > 2.5 && u_render_style < 3.5) {
      // 3. Голографическая проекция: Chromatic aberration + scan lines + shimmer
      // Simulates volumetric holographic display
      float depthNorm = clamp(t / 20.0, 0.0, 1.0);
      float rOff = sin(depthNorm * 20.0 + u_time * 3.0) * 0.02;
      float gOff = sin(depthNorm * 20.0 + u_time * 3.0 + 2.094) * 0.02;
      float bOff = sin(depthNorm * 20.0 + u_time * 3.0 + 4.189) * 0.02;
      vec3 holoBase = u_primary_color * vec3(1.0 + rOff, 1.0 + gOff, 1.0 + bOff);
      float holoFres = pow(1.0 - abs(dot(n, -rd)), 2.5);
      float scanFreq = 180.0 + depthNorm * 120.0;
      float scanline = 0.85 + 0.15 * sin(v_uv.y * scanFreq + u_time * 8.0);
      float shimmer = 0.9 + 0.1 * sin(u_time * 5.0 + length(p) * 10.0);
      vec3 holoCol = holoBase * (0.4 + holoFres * 1.2) * scanline * shimmer;
      holoCol += u_accent_color * pow(1.0 - ao, 2.0) * 2.0; // Edge wireframe
      holoCol += vec3(0.1, 0.3, 0.5) * holoFres * 1.5;
      col = mix(col * 0.1, holoCol, 0.92);
    } else if (u_render_style > 3.5 && u_render_style < 4.5) {
      // 4. Радужная интерференция: Multi-order thin-film interference
      // Angle-dependent spectral color shifting like butterfly wings
      float nv = max(dot(n, -rd), 0.0);
      float order1 = nv * 3.0 + min_trap * 0.5;
      float order2 = nv * 5.0 + min_trap * 0.3 + u_time * 0.08;
      float order3 = nv * 7.0 + min_trap * 0.2;
      float iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33));
      float iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33));
      float iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order3 * 0.33));
      vec3 iridCol = vec3(iridR, iridG, iridB);
      vec3 hIrid = normalize(light1 - rd);
      float specAngle = max(dot(n, hIrid), 0.0);
      vec3 specIrid = vec3(pow(specAngle, 24.0), pow(specAngle, 32.0), pow(specAngle, 48.0)) * sh1 * 2.0;
      col = iridCol * (0.5 + 0.5 * ao) + specIrid;
    } else if (u_render_style > 4.5 && u_render_style < 5.5) {
      // 5. Квантовое поле: 3 standing waves on golden vectors + interference
      // Visualizes quantum energy density through wave superposition
      float wave1 = sin(length(p) * 12.0 - u_time * 3.5);
      float wave2 = cos(dot(p, normalize(vec3(1.618, 1.0, 0.618))) * 7.0 + u_time * 2.2);
      float wave3 = sin(dot(p, normalize(vec3(-0.618, 1.618, 1.0))) * 9.0 - u_time * 1.8);
      float interference = (wave1 + wave2 + wave3) / 3.0;
      float energy = pow(abs(interference), 0.7);
      vec3 plasmaCold = u_secondary_color * (0.3 + energy * 0.5);
      vec3 plasmaHot = u_accent_color * (0.8 + energy * 1.5);
      vec3 qCol = mix(plasmaCold, plasmaHot, energy);
      qCol += u_accent_color * pow(fresnel, 2.0) * 1.2;
      col = qCol * (0.4 + 0.6 * ao) + sssCol * 1.2;
    } else if (u_render_style > 5.5) {
      // 6. Кристалл: Beer-Lambert + dual caustic + spectral dispersion
      // Physical refraction with wavelength-dependent absorption
      vec3 beer = exp(-max(t - 0.5, 0.0) * vec3(0.08, 0.25, 0.9));
      float caustic1 = pow(max(dot(-rd, light1), 0.0), 4.0) * 1.4;
      float caustic2 = pow(max(dot(n, light1), 0.0), 8.0) * 0.8;
      float caustic = caustic1 + caustic2;
      vec3 refractCol = mix(u_primary_color, u_accent_color, fresnel * 0.7);
      vec3 gemCol = refractCol * beer;
      vec3 gemSpec = vec3(1.0, 0.96, 0.82) * spec1 * 2.0;
      float dispersion = fresnel * 0.15;
      gemCol.r *= (1.0 + dispersion);
      gemCol.b *= (1.0 - dispersion * 0.5);
      col = gemCol * (0.7 + 0.3 * ao) + gemSpec + u_accent_color * caustic * 0.6;
    }

    // Distance-relative atmospheric falloff
    float fogStart = cam_dist < 1.0 ? 16.0 : (cam_dist < 2.0 ? 8.0 : max(2.0, cam_dist + 2.5));
    float fogDensity = cam_dist < 1.0 ? 0.012 : 0.02;
    float fog = 1.0 - exp(-max(0.0, t - fogStart) * fogDensity);
    col = mix(col, vec3(0.005, 0.004, 0.008), fog * clamp(u_volumetric_fog, 0.0, 1.0));
  } else {
    // Glow in empty void silhouette
    if (u_render_style > 0.5 && u_render_style < 1.5) {
      col += u_accent_color * glow * 1.2 + vec3(0.01, 0.02, 0.04);
    } else if (u_render_style > 2.5 && u_render_style < 3.5) {
      col += u_accent_color * glow * 1.8 + u_secondary_color * (glow * 0.6);
    } else if (u_render_style > 4.5 && u_render_style < 5.5) {
      col += mix(u_primary_color, u_accent_color, 0.5 + 0.5 * sin(u_time * 3.0)) * glow * 1.5;
    } else {
      col += u_accent_color * glow * (u_glow_intensity * 0.35);
    }
  }

  col = acesToneMap(col);

  float vigStrength = smoothstep(0.12, 1.0, cam_dist);
  float vignette = 1.0 - smoothstep(0.9, 1.8, bg_rad) * vigStrength * 0.5;
  col *= vignette;

  // Subpixel anti-aliasing boost — sharpen edges via unsharp mask approximation
  // Uses the dither pattern already present to break up banding
  float edgeDetect = length(fwidth(col)) * 0.5;
  col = mix(col, col * (1.0 + edgeDetect * 2.0), 0.15);

  fragColor = vec4(col, 1.0);
}
`,Im=$m;class eh{constructor(f){this.gl=null,this.program=null,this.vao=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline",this.canvas=f}init(){console.group("[WebGL2] === INITIALIZATION START ==="),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const f=this.canvas.getBoundingClientRect();(f.width===0||f.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let d=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",d?"SUCCESS":"FAILED"),d||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),d=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",d?"SUCCESS":"FAILED")),d||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),d=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",d?"SUCCESS":"FAILED")),!d){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const C=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return C&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",C.getParameter(C.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=d,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",d.getParameter(d.VERSION)),console.info("[WebGL2] GL_RENDERER:",d.getParameter(d.RENDERER)),console.info("[WebGL2] GL_VENDOR:",d.getParameter(d.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",d.getParameter(d.SHADING_LANGUAGE_VERSION));const c=d.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(c==null?void 0:c.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",c==null?void 0:c.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",c==null?void 0:c.includes("WEBGL_debug_renderer_info"));try{const C=d.getExtension("WEBGL_debug_renderer_info");if(C){const U=d.getParameter(C.UNMASKED_RENDERER_WEBGL);U&&(this.rendererInfo=U)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const y=this.compileShader(d.VERTEX_SHADER,Wm),_=this.compileShader(d.FRAGMENT_SHADER,Im);if(!y||!_)return!1;const j=d.createProgram();if(!j)return!1;if(d.attachShader(j,y),d.attachShader(j,_),d.linkProgram(j),!d.getProgramParameter(j,d.LINK_STATUS))return console.error("WebGL Program Link Error:",d.getProgramInfoLog(j)),!1;this.program=j;const k=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=d.createVertexArray(),d.bindVertexArray(this.vao);const M=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,M),d.bufferData(d.ARRAY_BUFFER,k,d.STATIC_DRAW);const m=d.getAttribLocation(j,"a_position");return d.enableVertexAttribArray(m),d.vertexAttribPointer(m,2,d.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog"].forEach(C=>{this.uniformLocs[C]=d.getUniformLocation(j,C)}),!0}compileShader(f,d){if(!this.gl)return null;const c=this.gl,y=c.createShader(f);if(!y)return null;const _=c.getExtension("KHR_parallel_shader_compile");if(c.shaderSource(y,d),c.compileShader(y),_){const j=performance.now(),k=15e3;for(;!c.getShaderParameter(y,c.COMPILE_STATUS);){const M=_.COMPLETION_STATUS_KHR;if(c.getShaderParameter(y,M))break;if(performance.now()-j>k)return console.error("[WebGL2] Shader compilation timeout after 15s"),console.error("Shader info:",c.getShaderInfoLog(y)),c.deleteShader(y),null}}return c.getShaderParameter(y,c.COMPILE_STATUS)?(console.info("[WebGL2] Shader compiled successfully ("+(f===c.VERTEX_SHADER?"vertex":"fragment")+")"),y):(console.error("Shader compilation error:",c.getShaderInfoLog(y)),c.deleteShader(y),null)}render(f,d){const c=this.gl;if(!c||!this.program||!this.vao)return;c.viewport(0,0,this.canvas.width,this.canvas.height),c.useProgram(this.program),c.bindVertexArray(this.vao);const y=d.customPalette||$t.find(M=>M.id===d.paletteId)||$t[0],_=sn(d.type),j=sn(d.hybridType||d.type),k=sn(d.tertiaryType||"riemannZeta");this.uniformLocs.u_resolution&&c.uniform2f(this.uniformLocs.u_resolution,this.canvas.width,this.canvas.height),this.uniformLocs.u_time&&c.uniform1f(this.uniformLocs.u_time,f),this.uniformLocs.u_phi_val&&c.uniform1f(this.uniformLocs.u_phi_val,d.phiMultiplier),this.uniformLocs.u_cam_rot&&c.uniform2f(this.uniformLocs.u_cam_rot,d.rotX,d.rotY),this.uniformLocs.u_zoom&&c.uniform1f(this.uniformLocs.u_zoom,d.zoom),this.uniformLocs.u_fractal_type&&c.uniform1f(this.uniformLocs.u_fractal_type,_),this.uniformLocs.u_hybrid_type&&c.uniform1f(this.uniformLocs.u_hybrid_type,j),this.uniformLocs.u_tertiary_type&&c.uniform1f(this.uniformLocs.u_tertiary_type,k),this.uniformLocs.u_iterations&&c.uniform1f(this.uniformLocs.u_iterations,d.iterations),this.uniformLocs.u_glow_intensity&&c.uniform1f(this.uniformLocs.u_glow_intensity,d.glowIntensity),this.uniformLocs.u_morph_speed&&c.uniform1f(this.uniformLocs.u_morph_speed,d.morphSpeed),this.uniformLocs.u_hybrid_blend&&c.uniform1f(this.uniformLocs.u_hybrid_blend,d.hybridBlend??0),this.uniformLocs.u_tertiary_blend&&c.uniform1f(this.uniformLocs.u_tertiary_blend,d.tertiaryBlend??0),this.uniformLocs.u_compose_op&&c.uniform1f(this.uniformLocs.u_compose_op,ud(d.compositeOp)),this.uniformLocs.u_smooth_k&&c.uniform1f(this.uniformLocs.u_smooth_k,d.smoothK??.35),this.uniformLocs.u_warp_strength&&c.uniform1f(this.uniformLocs.u_warp_strength,d.warpStrength??.3),this.uniformLocs.u_octave_layers&&c.uniform1f(this.uniformLocs.u_octave_layers,d.octaveLayers??2),this.uniformLocs.u_box_fold&&c.uniform1f(this.uniformLocs.u_box_fold,d.boxFold??1.2),this.uniformLocs.u_sphere_fold&&c.uniform1f(this.uniformLocs.u_sphere_fold,d.sphereFold??.65),this.uniformLocs.u_interior_cut&&c.uniform1f(this.uniformLocs.u_interior_cut,d.interiorCut??.35),this.uniformLocs.u_primary_color&&c.uniform3f(this.uniformLocs.u_primary_color,y.primary[0],y.primary[1],y.primary[2]),this.uniformLocs.u_secondary_color&&c.uniform3f(this.uniformLocs.u_secondary_color,y.secondary[0],y.secondary[1],y.secondary[2]),this.uniformLocs.u_accent_color&&c.uniform3f(this.uniformLocs.u_accent_color,y.accent[0],y.accent[1],y.accent[2]),this.uniformLocs.u_cam_mode&&c.uniform1f(this.uniformLocs.u_cam_mode,fd(d.cameraMode)),this.uniformLocs.u_cam_pos&&c.uniform3f(this.uniformLocs.u_cam_pos,d.camPosX??0,d.camPosY??0,d.camPosZ??0),this.uniformLocs.u_slice_plane&&c.uniform1f(this.uniformLocs.u_slice_plane,d.slicePlane??0),this.uniformLocs.u_slice_axis&&c.uniform1f(this.uniformLocs.u_slice_axis,dd(d.sliceAxis)),this.uniformLocs.u_render_style&&c.uniform1f(this.uniformLocs.u_render_style,pd(d.renderStyle)),this.uniformLocs.u_headlamp_power&&c.uniform1f(this.uniformLocs.u_headlamp_power,d.headlampPower??1),this.uniformLocs.u_volumetric_fog&&c.uniform1f(this.uniformLocs.u_volumetric_fog,d.volumetricFog??.4),c.drawArrays(c.TRIANGLES,0,3)}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const f=this.gl.getExtension("WEBGL_lose_context");f&&f.loseContext(),this.gl=null}}}const ad="golden_ratio_user_prefs",th=500;class ah{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const f=localStorage.getItem(ad);if(f)return{...this.getDefaultPrefs(),...JSON.parse(f)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(ad,JSON.stringify(this.prefs))}catch{}}recordInteraction(f,d){const c=performance.now(),y=c-this.lastSampleTime;this.lastSampleTime=c;const _={timestamp:c,type:f,value:d,duration:y};this.samples.push(_),this.samples.length>th&&this.samples.shift(),this.analyzeSample(_),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(f){switch(f.type){case"zoom":this.analyzeZoom(f);break;case"rotate":this.analyzeRotation(f);break;case"fractal_change":this.analyzeFractalChange(f);break;case"style_change":this.analyzeStyleChange(f);break;case"palette_change":this.analyzePaletteChange(f);break;case"camera_change":this.analyzeCameraChange(f);break}}analyzeZoom(f){const d=f.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+d*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,d),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,d),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(f.value)*.05}analyzeRotation(f){const d=Math.abs(f.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+d*.1,d<.003?this.prefs.rotationStyle="careful":d<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(f){const d=String(Math.round(f.value));this.prefs.fractalWeights[d]=(this.prefs.fractalWeights[d]||0)+1,this.currentFractal=d}analyzeStyleChange(f){const d=String(Math.round(f.value));this.prefs.renderStyleWeights[d]=(this.prefs.renderStyleWeights[d]||0)+1,this.currentStyle=d}analyzePaletteChange(f){const d=String(Math.round(f.value));this.prefs.paletteWeights[d]=(this.prefs.paletteWeights[d]||0)+1,this.currentPalette=d}analyzeCameraChange(f){const d=String(Math.round(f.value));this.prefs.cameraModeWeights[d]=(this.prefs.cameraModeWeights[d]||0)+1,this.currentCamera=d}getPreferred(f){let d=0,c=null;for(const[y,_]of Object.entries(f))_>d&&(d=_,c=y);return c}getAdaptedDefaults(){const f={};if(this.prefs.sampleCount>10){f.zoom=this.prefs.preferredZoomRange.avg,f.rotationSensitivity=this.prefs.rotationSpeed;const d=this.getPreferred(this.prefs.fractalWeights);d!==null&&(f.preferredFractal=Number(d));const c=this.getPreferred(this.prefs.renderStyleWeights);c!==null&&(f.preferredStyle=Number(c));const y=this.getPreferred(this.prefs.paletteWeights);y!==null&&(f.preferredPalette=Number(y));const _=this.getPreferred(this.prefs.cameraModeWeights);_!==null&&(f.preferredCamera=_)}return f}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const ld=new ah,lh=({params:u,onParamsChange:f,onTelemetryUpdate:d,screenshotRequested:c,onScreenshotCaptured:y,forcedBackend:_="auto",onInteraction:j,onNextSpecimen:k,onPrevSpecimen:M,onEngineReady:m,scrollMode:L="feed"})=>{const C=O.useRef(null),U=O.useRef(null),B=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),Q=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),[ee,I]=O.useState(()=>_==="webgl2"?"webgl2":_==="webgpu"?B?"webgl2":"webgpu":"webgl2"),[X,re]=O.useState(!0),b=O.useRef(null),q=O.useRef(null),ve=O.useRef("Initializing..."),be=O.useRef(u);O.useEffect(()=>{be.current=u},[u]);const ae=O.useRef(d);ae.current=d;const je=O.useRef(y);je.current=y;const we=O.useRef(k);we.current=k;const Qe=O.useRef(M);Qe.current=M;const Ge=O.useRef(j);Ge.current=j;const He=O.useRef(0),Ke=O.useRef(!1),Xe=O.useRef({x:0,y:0}),de=O.useRef(null),N=O.useRef({x:0,y:0}),E=O.useRef(0),Z=.92,W=1e-4,ue=O.useRef([]),x=O.useRef(0),T=O.useRef(null),Y=O.useRef(0),H=O.useRef(!1),P=O.useRef(new Set),ne=O.useRef(!1),pe=O.useRef(!0),Le=O.useRef(!1),Ee=O.useRef(!1);O.useEffect(()=>{Ee.current=c},[c]),O.useEffect(()=>{if(_==="webgl2")I("webgl2");else if(_==="webgpu"){if(B){console.warn("[FractalCanvas] WebGPU blocked in embedded browser — using WebGL2"),H.current=!0,I("webgl2");return}H.current=!1,I("webgpu")}else _==="auto"&&I("webgl2")},[_]);const Vt=O.useCallback(()=>{const F=U.current,V=C.current;if(!F||!V)return;const le=B||Q?1.5:2,fe=Math.min(window.devicePixelRatio||1,le),Be=V.clientWidth||window.innerWidth||800,ze=V.clientHeight||window.innerHeight||600,rt=Math.floor(Be*fe),Ce=Math.floor(ze*fe);(F.width!==rt||F.height!==Ce)&&(F.width=Math.max(rt,320),F.height=Math.max(Ce,240))},[]);O.useEffect(()=>{const F=U.current;if(!F)return;Vt();let V=!1;const le=setTimeout(()=>{V||(console.warn("[FractalCanvas] Force-hiding loading overlay after 12s"),re(!1))},12e3),fe=setTimeout(()=>{!Le.current&&!V&&(console.error("[FractalCanvas] Engine setup timed out after 8s — GPU unavailable"),console.error("[FractalCanvas] activeEngineType=",ee,"webgpuFailed=",H.current,"isDestroyed=",V))},8e3);async function Be(){if(!F)return;if(console.info("[FractalCanvas] Setup starting, activeEngineType=",ee),re(!0),Le.current=!1,b.current&&(b.current.destroy(),b.current=null),q.current&&(q.current.destroy(),q.current=null),ee==="webgpu"){console.info("[FractalCanvas] Attempting WebGPU init...");const dt=new Ks(F),oa=await dt.init();if(console.info("[FractalCanvas] WebGPU init result:",oa),oa&&!V){b.current=dt,Le.current=!0,ve.current="WebGPU (WGSL)",re(!1),m==null||m();return}else{console.warn("[FractalCanvas] WebGPU init failed, falling back to WebGL2"),H.current=!0,V?re(!1):I("webgl2");return}}console.info("[FractalCanvas] Attempting WebGL2 init...");const tt=new eh(F),Qt=tt.init();console.info("[FractalCanvas] WebGL2 init result:",Qt,"isDestroyed:",V),Qt&&!V?(q.current=tt,Le.current=!0,ve.current="WebGL2 (GLSL)",re(!1),m==null||m()):(console.error("[FractalCanvas] WebGL2 init failed — no GPU engine available"),re(!1),m==null||m())}Be().catch(tt=>{console.error("[FractalCanvas] Engine setup crashed:",tt),re(!1)});const ze=tt=>{tt.preventDefault(),console.warn("GPU context lost, pausing rendering..."),ne.current=!0},rt=()=>{console.log("GPU context restored, re-initializing engine..."),ne.current=!1,Be()};F.addEventListener("webglcontextlost",ze,!1),F.addEventListener("webglcontextrestored",rt,!1);const Ce=C.current;let gt=null;return Ce&&(gt=new ResizeObserver(()=>{V||Vt()}),gt.observe(Ce)),()=>{var tt,Qt;V=!0,clearTimeout(fe),clearTimeout(le),F.removeEventListener("webglcontextlost",ze),F.removeEventListener("webglcontextrestored",rt),gt&&gt.disconnect(),(tt=b.current)==null||tt.destroy(),(Qt=q.current)==null||Qt.destroy()}},[ee,Vt]),O.useEffect(()=>{let F=!0,V=performance.now();const le=()=>{pe.current=!document.hidden,pe.current&&(V=performance.now())};document.addEventListener("visibilitychange",le);const fe=Be=>{var tt,Qt;if(!F)return;if(ne.current){T.current=requestAnimationFrame(fe);return}if(!pe.current){T.current=requestAnimationFrame(fe);return}if(!Le.current){setTimeout(()=>{F&&(T.current=requestAnimationFrame(fe))},1e3);return}const ze=be.current,rt=Be-V,Ce=ze.targetFps||60,gt=Ce>=240?0:1e3/Ce;if(gt<=0||rt>=gt-.75){const dt=Math.min(rt,100);V=Be,Y.current+=dt/1e3;const oa=Y.current;if(ze.cameraMode==="flyThrough"){const wt=ze.rotX,sa=ze.rotY,ca=Math.cos(wt),It=Math.sin(wt),ua=Math.cos(sa),fa=Math.sin(sa),mt=[It*ua,fa,-ca*ua],Kt=[ca,0,It],ea=[0,1,0];let at=1.4*(dt/1e3);(P.current.has("ShiftLeft")||P.current.has("ShiftRight"))&&(at*=2.8);let jt=0,ta=0,Et=0;(P.current.has("KeyW")||P.current.has("ArrowUp"))&&(jt+=mt[0]*at,ta+=mt[1]*at,Et+=mt[2]*at),(P.current.has("KeyS")||P.current.has("ArrowDown"))&&(jt-=mt[0]*at,ta-=mt[1]*at,Et-=mt[2]*at),(P.current.has("KeyA")||P.current.has("ArrowLeft"))&&(jt-=Kt[0]*at,Et-=Kt[2]*at),(P.current.has("KeyD")||P.current.has("ArrowRight"))&&(jt+=Kt[0]*at,Et+=Kt[2]*at),(P.current.has("KeyE")||P.current.has("Space"))&&(ta+=ea[1]*at),(P.current.has("KeyQ")||P.current.has("KeyC"))&&(ta-=ea[1]*at),(jt!==0||ta!==0||Et!==0)&&(be.current={...ze,camPosX:(ze.camPosX??0)+jt,camPosY:(ze.camPosY??0)+ta,camPosZ:(ze.camPosZ??0)+Et})}const oi=ze.autoRotate?oa*ze.autoRotateSpeed*.35:0,Nr=ze.autoRotate?Math.sin(oa*.18)*.12:0;let si=0,Ra=0;if(!Ke.current&&(Math.abs(N.current.x)>W||Math.abs(N.current.y)>W)){const wt=ze.zoom,sa=.0045*Math.max(.12,Math.min(1,wt/2.8)),ca=dt;si=N.current.x*ca*sa*.5,Ra=N.current.y*ca*sa*.5,N.current.x*=Z,N.current.y*=Z,Math.abs(N.current.x)<W&&(N.current.x=0),Math.abs(N.current.y)<W&&(N.current.y=0)}const pt={...ze,rotX:ze.rotX+oi+si,rotY:Math.max(-1.52,Math.min(1.52,ze.rotY+Nr+Ra))},Pe=U.current;if(Pe&&Pe.width>0&&Pe.height>0&&(b.current?b.current.render(oa,pt):q.current&&q.current.render(oa,pt)),Ee.current&&Pe)try{const wt=Pe.toDataURL("image/png");(tt=je.current)==null||tt.call(je,wt)}catch(wt){console.error("Screenshot capture failed",wt)}const Je=ue.current;if(Je.push(dt),Je.length>72&&Je.shift(),Be-x.current>250){x.current=Be;const wt=Je.reduce((at,jt)=>at+jt,0)/Je.length,sa=dt>0?Math.round(1e3/dt):0,ca=wt>0?Math.round(1e3/wt):0,It=[...Je].sort((at,jt)=>jt-at),ua=Math.floor(It.length*.05),fa=It[ua]||dt,mt=fa>0?Math.round(1e3/fa):0,Kt=b.current?b.current.adapterInfo:q.current?q.current.rendererInfo:"GPU Engine",ea=ee==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)";(Qt=ae.current)==null||Qt.call(ae,{fps:sa,avgFps:ca,frameTimeMs:parseFloat(dt.toFixed(2)),onePercentLow:mt,backend:ea,adapterName:Kt,resolution:[(Pe==null?void 0:Pe.width)||0,(Pe==null?void 0:Pe.height)||0],drsScale:1,targetFps:u.targetFps,interiorDistance:0})}}T.current=requestAnimationFrame(fe)};return T.current=requestAnimationFrame(fe),()=>{F=!1,document.removeEventListener("visibilitychange",le),T.current&&cancelAnimationFrame(T.current)}},[ee]),O.useEffect(()=>{const F=le=>{var fe,Be,ze;((fe=le.target)==null?void 0:fe.tagName)!=="INPUT"&&(le.repeat||(P.current.add(le.code),be.current.cameraMode!=="flyThrough"&&(le.key===" "||le.key==="ArrowRight"||le.key==="ArrowDown"||le.key==="PageDown"?(le.preventDefault(),(Be=we.current)==null||Be.call(we)):(le.key==="ArrowLeft"||le.key==="ArrowUp"||le.key==="PageUp")&&(le.preventDefault(),(ze=Qe.current)==null||ze.call(Qe)))))},V=le=>{P.current.delete(le.code)};return window.addEventListener("keydown",F),window.addEventListener("keyup",V),()=>{window.removeEventListener("keydown",F),window.removeEventListener("keyup",V)}},[]);const Aa=F=>{Ke.current=!0,Xe.current={x:F.clientX,y:F.clientY},N.current={x:0,y:0},E.current=performance.now(),F.target.setPointerCapture(F.pointerId)},al=F=>{var gt;if(!Ke.current)return;const V=F.clientX-Xe.current.x,le=F.clientY-Xe.current.y,fe=performance.now(),Be=Math.max(1,fe-E.current);E.current=fe,Xe.current={x:F.clientX,y:F.clientY};const ze=Math.hypot(V,le);fe-He.current>300&&(He.current=fe,(gt=Ge.current)==null||gt.call(Ge,0,ze));const rt=be.current.zoom,Ce=.0045*Math.max(.12,Math.min(1,rt/2.8));N.current={x:V/Be,y:le/Be},f(tt=>({...tt,rotX:tt.rotX+V*Ce,rotY:Math.max(-1.52,Math.min(1.52,tt.rotY+le*Ce))})),ld.recordInteraction("rotate",Math.hypot(V,le)/Be)},ll=F=>{Ke.current=!1;try{F.target.releasePointerCapture(F.pointerId)}catch{}};O.useRef(0);const Zt=F=>{F.preventDefault();const V=Math.exp(Math.sign(F.deltaY)*Math.min(Math.abs(F.deltaY)*.0018,.28));j==null||j(Math.abs(F.deltaY)*.02,0),f(le=>({...le,zoom:Math.max(.02,Math.min(64,le.zoom*V))})),ld.recordInteraction("zoom",Math.log(V)*10)},nl=F=>{if(F.touches.length===2){const V=F.touches[0],le=F.touches[1],fe=Math.hypot(V.clientX-le.clientX,V.clientY-le.clientY);if(de.current!==null&&de.current>5){const Be=de.current/Math.max(fe,1),ze=Math.pow(Be,.95);j==null||j(Math.abs(de.current-fe)*.04,0),f(rt=>({...rt,zoom:Math.max(.02,Math.min(64,rt.zoom*ze))}))}de.current=fe}},G=()=>{de.current=null};return i.jsxs("div",{ref:C,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[X&&i.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:i.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[i.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),i.jsxs("span",{children:["Initializing GPU (",ee==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),!X&&!Le.current&&i.jsx("div",{className:"absolute inset-0 z-[60] flex flex-col items-center justify-center bg-neutral-950/90 pointer-events-auto",children:i.jsxs("div",{className:"px-6 py-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-sm font-mono text-center max-w-md",children:[i.jsx("div",{className:"text-base font-bold mb-2",children:"GPU Unavailable"}),i.jsxs("div",{className:"text-xs opacity-80",children:["Neither WebGPU nor WebGL2 could initialize.",i.jsx("br",{}),"This browser/environment may not support hardware-accelerated rendering.",i.jsx("br",{}),"Try opening this page in Chrome/Edge with GPU acceleration enabled."]})]})}),i.jsx("canvas",{ref:U,id:"fractal-canvas",className:"w-full h-full block",onPointerDown:Aa,onPointerMove:al,onPointerUp:ll,onPointerCancel:ll,onWheel:Zt,onTouchMove:nl,onTouchEnd:G},ee)]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ih=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,d,c)=>c?c.toUpperCase():d.toLowerCase()),nd=u=>{const f=ih(u);return f.charAt(0).toUpperCase()+f.slice(1)},md=(...u)=>u.filter((f,d,c)=>!!f&&f.trim()!==""&&c.indexOf(f)===d).join(" ").trim(),rh=u=>{for(const f in u)if(f.startsWith("aria-")||f==="role"||f==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=O.forwardRef(({color:u="currentColor",size:f=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:y="",children:_,iconNode:j,...k},M)=>O.createElement("svg",{ref:M,...oh,width:f,height:f,stroke:u,strokeWidth:c?Number(d)*24/Number(f):d,className:md("lucide",y),...!_&&!rh(k)&&{"aria-hidden":"true"},...k},[...j.map(([m,L])=>O.createElement(m,L)),...Array.isArray(_)?_:[_]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(u,f)=>{const d=O.forwardRef(({className:c,...y},_)=>O.createElement(sh,{ref:_,iconNode:f,className:md(`lucide-${nh(nd(u))}`,`lucide-${u}`,c),...y}));return d.displayName=nd(u),d};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ii=se("activity",ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],hd=se("atom",uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cn=se("book-open",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],ph=se("bookmark-plus",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],hh=se("box",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],gh=se("brain",xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],bh=se("camera",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],_h=se("chart-column",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xd=se("check",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Nh=se("chevron-down",zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],jh=se("chevron-left",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gd=se("chevron-right",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Mh=se("chevron-up",Th);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],zr=se("compass",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ys=se("cpu",Rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],yd=se("crosshair",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Eh=se("droplet",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],qh=se("ellipsis",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],bd=se("eye",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Uh=se("flame",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Hh=se("grid-3x3",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Sr=se("heart",Fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],Xh=se("infinity",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zh=se("info",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],un=se("layers",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ph=se("maximize",Kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],vd=se("mouse-pointer",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],$h=se("music",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],_d=se("play",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],t2=se("radio",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],l2=se("scan",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],i2=se("search",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],o2=se("share-2",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xs=se("shield-check",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fn=se("sparkles",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],f2=se("trash-2",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Sd=se("user",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ps=se("volume-2",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],zd=se("volume-x",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],x2=se("wrench",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ri=se("x",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],b2=se("zoom-in",y2),v2=({telemetry:u,targetFps:f,phiMultiplier:d})=>{const[c,y]=O.useState([]),[_,j]=O.useState(!1);O.useEffect(()=>{u.frameTimeMs>0&&y(m=>[...m,u.frameTimeMs].slice(-40))},[u.frameTimeMs]);const k=f>0?1e3/f:6.94;f===144||f===0&&u.fps>=140;const M=u.frameTimeMs<=k*1.05;return i.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:i.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[i.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[i.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${u.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),i.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${u.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),i.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:i.jsx("span",{children:u.backend})})]}),i.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>j(!_),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:_?"Expand":"Compact"})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[i.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[i.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[i.jsx("span",{children:"RATE"}),i.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${u.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:f>0?`${f}Hz`:"Uncapped"})]}),i.jsxs("div",{className:"flex items-baseline gap-1",children:[i.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:u.fps}),i.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),i.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[i.jsx("span",{children:"1% Low:"}),i.jsxs("span",{className:"font-mono text-neutral-300",children:[u.onePercentLow," FPS"]})]})]}),i.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[i.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[i.jsx("span",{children:"FRAME TIME"}),i.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:f>=240?"Max 250 FPS":`${f}Hz = ${(1e3/f).toFixed(2)}ms`})]}),i.jsxs("div",{className:"flex items-baseline gap-1",children:[i.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${M?"text-emerald-400":"text-amber-400"}`,children:u.frameTimeMs}),i.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),i.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[i.jsx("span",{children:"Avg:"}),i.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(u.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!_&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mb-2.5",children:[i.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[i.jsxs("span",{children:[f," FPS Frame Pacing"]}),i.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",k.toFixed(2)," ms"]})]}),i.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:c.map((m,L)=>{const C=Math.min(Math.max(m/20*100,8),100),U=m<=k*1.1;return i.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${U?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${C}%`},title:`${m} ms`},L)})})]}),i.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[i.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[i.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[i.jsx(fn,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),i.jsx("span",{className:"font-mono font-medium text-amber-200",children:d.toFixed(6)})]}),i.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[i.jsx("span",{children:"Golden Angle (ψ):"}),i.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),i.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[i.jsx("span",{className:"truncate max-w-[140px]",title:u.adapterName,children:u.adapterName}),i.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[u.resolution[0],"×",u.resolution[1]]})]})]})]})]})})},_2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Nd={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},S2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],z2={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]}},N2=1.61803398875,Zs=137.507764;function _r(u,f,d){u=(u%360+360)%360,f=Math.max(0,Math.min(1,f)),d=Math.max(0,Math.min(1,d));const c=(1-Math.abs(2*d-1))*f,y=c*(1-Math.abs(u/60%2-1)),_=d-c/2;let j=0,k=0,M=0;return u<60?(j=c,k=y,M=0):u<120?(j=y,k=c,M=0):u<180?(j=0,k=c,M=y):u<240?(j=0,k=y,M=c):u<300?(j=y,k=0,M=c):(j=c,k=0,M=y),[j+_,k+_,M+_]}function w2(u,f){const d=u,c=(u+Zs)%360,y=(u+Zs*2)%360;return{id:`golden-gen-${Math.floor(u)}`,name:`Гармоника φ (${f})`,primary:_r(d,.85,.45),secondary:_r(c,.8,.55),accent:_r(y,.95,.65),ambient:_r(d,.6,.12)}}const Sl=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves"],ni={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского"},j2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3},Vs="golden_ratio_taste_profile_v2",D2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function T2(u){switch(u){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class M2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const d=localStorage.getItem(Vs);if(d){const c=JSON.parse(d);return Sl.forEach(y=>{c.typeAffinities&&c.typeAffinities[y]===void 0&&(c.typeAffinities[y]=1)}),c}}catch{}const f={};return Sl.forEach(d=>{f[d]=1}),{typeAffinities:f,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(f=!1){if(f){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(Vs,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(Vs,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}breedNextSpecimen(f){var Xe;this.currentGeneration++,this.taste.totalSpecimensExplored++;let d=f;if(!d){const de=Sl,N=de.map(W=>{const ue=Math.max(.2,this.taste.typeAffinities[W]||1),x=this.recentTypes.includes(W)?.05:1,T=this.currentGeneration<20?1.5:1;return ue*x*T}),E=N.reduce((W,ue)=>W+ue,0);let Z=Math.random()*E;for(let W=0;W<de.length;W++){if(Z<=N[W]){d=de[W];break}Z-=N[W]}d||(d=de[Math.floor(Math.random()*de.length)]),this.recentTypes.push(d),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const c=Math.random()<.5;let y=this.taste.preferredHue;if(c){const de=Math.random()<.5?1:2;y=(y+Zs*de+(Math.random()*30-15))%360}else y=Math.random()*360%360;let _;if(Math.random()<.65){const de=this.history.length>0?(Xe=this.history[this.history.length-1].palette)==null?void 0:Xe.id:"";let N=$t.filter(E=>E.id!==de);N.length===0&&(N=$t),_=N[Math.floor(Math.random()*N.length)]}else _=w2(y,`Ген #${this.currentGeneration}`);const k=(Math.random()-.5)*.08,M=parseFloat((N2+k).toFixed(5)),m=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),L=Math.max(12,Math.min(32,m)),C=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),U=parseFloat(C.toFixed(2)),B=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),Q=parseFloat(B.toFixed(2)),ee=j2[d]*(.95+Math.random()*.1),I=Math.random()<.72;let X=d,re=d,b=0,q=0,ve="smoothUnion",be=1,ae=.32,je=.22,we=`${ni[d]} • φ-${this.currentGeneration}`;if(I){const de=z2[d]||{partners:Sl.filter(W=>W!==d),ops:["smoothUnion","smoothMorph","domainWarp"]};X=de.partners[Math.floor(Math.random()*de.partners.length)],ve=de.ops[Math.floor(Math.random()*de.ops.length)],b=parseFloat((.22+Math.random()*.26).toFixed(3)),ae=parseFloat((.24+Math.random()*.26).toFixed(3)),je=parseFloat((.15+Math.random()*.25).toFixed(3)),be=1;const N=Nd[ve],E=ni[d].split(" ")[0],Z=ni[X].split(" ")[0];we=`${E} ${N} ${Z} • φ-${this.currentGeneration}`}const Qe=parseFloat((.7+Math.random()*1.5).toFixed(3)),Ge=parseFloat((.35+Math.random()*1.05).toFixed(3)),Ke={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:we,type:d,hybridType:X,tertiaryType:re,compositeOp:ve,hybridBlend:b,tertiaryBlend:q,smoothK:ae,warpStrength:je,octaveLayers:be,boxFold:Qe,sphereFold:Ge,interiorCut:0,palette:_,iterations:L,phiMultiplier:M,morphSpeed:U,glowIntensity:Q,zoom:ee,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(Ke),this.history.length>40&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,Ke}registerEngagement(f,d,c,y){y.dwellTimeSeconds+=f,Math.abs(d)>.05&&y.zoomInteractions++,c>.05&&y.orbitInteractions++;const _=Math.min(35,y.dwellTimeSeconds/90*35),j=Math.min(18,Math.log1p(y.zoomInteractions)*3.2),k=Math.min(18,Math.log1p(y.orbitInteractions)*2.8),m=Math.round(Math.min(96,25+_+j+k));if(y.affinityScore=Math.max(y.affinityScore,m),y.dwellTimeSeconds>10&&y.affinityScore>50){const L=this.taste.typeAffinities[y.type]||1;if(this.taste.typeAffinities[y.type]=Math.min(4,L+.005),y.hybridType&&y.hybridBlend>.1){const C=this.taste.typeAffinities[y.hybridType]||1;this.taste.typeAffinities[y.hybridType]=Math.min(4,C+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+y.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+y.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+y.iterations*.01),y.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=y.affinityScore),this.saveTasteProfile()}return y.affinityScore}boostAffinity(f){f.affinityScore=95,this.taste.typeAffinities[f.type]=Math.min(4.5,(this.taste.typeAffinities[f.type]||1)+.35),f.hybridType&&(this.taste.typeAffinities[f.hybridType]=Math.min(4.5,(this.taste.typeAffinities[f.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(f){return f===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const f={geometry:0,complex:0,minimal:0,primes:0,attractors:0},d={geometry:0,complex:0,minimal:0,primes:0,attractors:0};Sl.forEach(j=>{const k=T2(j),M=this.taste.typeAffinities[j]||1;f[k]+=M,d[k]++});const y=["geometry","complex","minimal","primes","attractors"].map(j=>({archetype:j,label:D2[j],avg:d[j]>0?f[j]/d[j]:1})),_=y.reduce((j,k)=>j+k.avg,0);return y.map(j=>({archetype:j.archetype,label:j.label,percentage:Math.round(j.avg/Math.max(1e-4,_)*100),score:Math.min(100,Math.round(j.avg*25))}))}suggestRenderStyle(){const f=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],d=Math.random();if(d<.4)return"solid";const c=Math.floor((d-.4)/.6*(f.length-1));return f[Math.min(c+1,f.length-1)]}}const A2=({params:u,onParamsChange:f,onSelectFractalType:d,onCaptureScreenshot:c,onToggleFullscreen:y,onToggleInfoModal:_,onOpenAtlasModal:j,activeBackend:k,forcedBackend:M,onSelectBackend:m,onClose:L,tasteProfile:C,onSaveToFeed:U})=>{const[B,Q]=O.useState("architectures"),[ee,I]=O.useState("all"),X=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],re=ee==="all"?X:X.filter(b=>b.group===ee);return i.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[i.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),i.jsxs("div",{children:[i.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[i.jsx("span",{children:"Режим Инженера"}),i.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),i.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),i.jsxs("div",{className:"flex items-center gap-1",children:[j&&i.jsxs("button",{id:"open-atlas-modal-btn",onClick:j,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[i.jsx(cn,{className:"w-3.5 h-3.5"}),i.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),U&&i.jsxs("button",{id:"save-to-feed-btn",onClick:U,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[i.jsx(ph,{className:"w-3 h-3"}),i.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),i.jsx("button",{id:"capture-screenshot-btn",onClick:c,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:i.jsx(bh,{className:"w-3.5 h-3.5"})}),i.jsx("button",{id:"toggle-fullscreen-btn",onClick:y,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:i.jsx(Ph,{className:"w-3.5 h-3.5"})}),i.jsx("button",{id:"show-math-info-btn",onClick:_,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:i.jsx(cn,{className:"w-3.5 h-3.5"})}),i.jsx("button",{id:"close-engineer-panel-btn",onClick:L,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:i.jsx(ri,{className:"w-3.5 h-3.5"})})]})]}),i.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[i.jsx("button",{id:"tab-architectures-btn",onClick:()=>Q("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),i.jsx("button",{id:"tab-composition-btn",onClick:()=>Q("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),i.jsx("button",{id:"tab-camera-btn",onClick:()=>Q("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),i.jsx("button",{id:"tab-palettes-btn",onClick:()=>Q("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),i.jsx("button",{id:"tab-morphology-btn",onClick:()=>Q("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),i.jsx("button",{id:"tab-gpu-btn",onClick:()=>Q("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),i.jsx("button",{id:"tab-audio-btn",onClick:()=>Q("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),i.jsx("button",{id:"tab-neuro-btn",onClick:()=>Q("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${B==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),B==="architectures"&&i.jsxs("div",{className:"space-y-3",children:[i.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(b=>i.jsx("button",{onClick:()=>I(b.id),className:`px-2 py-1 rounded-md text-[9px] transition ${ee===b.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:b.label},b.id))}),i.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:re.map(b=>{const q=u.type===b.id;return i.jsxs("button",{id:`arch-btn-${b.id}`,onClick:()=>{d?d(b.id):f(ve=>({...ve,type:b.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${q?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:`text-xs font-semibold ${q?"text-amber-300":"text-neutral-200"}`,children:b.label}),q&&i.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),i.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:b.desc}),i.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:b.formula})]},b.id)})})]}),B==="composition"&&i.jsxs("div",{className:"space-y-3.5",children:[i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),i.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:S2.map(b=>i.jsxs("button",{onClick:()=>f(q=>({...q,compositeOp:b})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${u.compositeOp===b?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsx("span",{className:"font-medium",children:_2[b]}),i.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Nd[b]})]},b))})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),i.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((u.hybridBlend??.35)*100),"%"]})]}),i.jsx("select",{value:u.hybridType||u.type,onChange:b=>f(q=>({...q,hybridType:b.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:Sl.map(b=>i.jsx("option",{value:b,children:ni[b]},b))}),i.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:u.hybridBlend??.35,onChange:b=>f(q=>({...q,hybridBlend:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),i.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((u.tertiaryBlend??.2)*100),"%"]})]}),i.jsx("select",{value:u.tertiaryType||"riemannZeta",onChange:b=>f(q=>({...q,tertiaryType:b.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:Sl.map(b=>i.jsx("option",{value:b,children:ni[b]},b))}),i.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:u.tertiaryBlend??.2,onChange:b=>f(q=>({...q,tertiaryBlend:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),i.jsx("span",{className:"font-mono text-amber-400",children:u.smoothK.toFixed(2)})]}),i.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:u.smoothK,onChange:b=>f(q=>({...q,smoothK:parseFloat(b.target.value)})),className:"w-full accent-amber-400"}),i.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[i.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),i.jsx("span",{className:"font-mono text-amber-400",children:u.warpStrength.toFixed(2)})]}),i.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.warpStrength,onChange:b=>f(q=>({...q,warpStrength:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]})]}),B==="camera"&&i.jsxs("div",{className:"space-y-3.5",children:[i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),i.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(b=>i.jsxs("button",{onClick:()=>f(q=>({...q,cameraMode:b.id})),className:`p-2 rounded-lg border text-left transition ${u.cameraMode===b.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsx("div",{className:"font-medium text-[10px]",children:b.label}),i.jsx("div",{className:"text-[8px] text-neutral-500",children:b.desc})]},b.id))})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[i.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),i.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:u.renderStyle||"solid"})]}),i.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(b=>i.jsxs("button",{onClick:()=>f(q=>({...q,renderStyle:b.id})),className:`p-2 rounded-lg border text-left transition ${(u.renderStyle||"solid")===b.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsx("div",{className:"font-medium text-[10px]",children:b.label}),i.jsx("div",{className:"text-[8px] text-neutral-500",children:b.desc})]},b.id))})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),i.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:u.slicePlane>.01?`${(u.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),i.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(b=>i.jsx("button",{onClick:()=>f(q=>({...q,sliceAxis:b.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(u.sliceAxis||"golden")===b.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:b.label},b.id))}),i.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.slicePlane,onChange:b=>f(q=>({...q,slicePlane:parseFloat(b.target.value)})),className:"w-full accent-amber-400"}),i.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsxs("button",{onClick:()=>f(b=>({...b,probeActive:!b.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${u.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsxs("div",{children:[i.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),i.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),i.jsx("div",{className:`w-2 h-2 rounded-full ${u.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),i.jsxs("button",{onClick:()=>f(b=>({...b,macroMode:!b.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${u.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsxs("div",{children:[i.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),i.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),i.jsx("div",{className:`w-2 h-2 rounded-full ${u.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[i.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),i.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(u.headlampPower||1).toFixed(1),"x"]})]}),i.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:u.headlampPower??1,onChange:b=>f(q=>({...q,headlampPower:parseFloat(b.target.value)})),className:"w-full accent-amber-400"}),i.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[i.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),i.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(u.volumetricFog||.4).toFixed(1),"x"]})]}),i.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:u.volumetricFog??.4,onChange:b=>f(q=>({...q,volumetricFog:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[i.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),i.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((u.interiorCut??.4)*100),"%"]})]}),i.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:u.interiorCut??.4,onChange:b=>f(q=>({...q,interiorCut:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]})]}),B==="palettes"&&i.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:$t.map(b=>{const q=u.paletteId===b.id;return i.jsxs("button",{onClick:()=>f(ve=>({...ve,paletteId:b.id,customPalette:b})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${q?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[i.jsx("div",{className:"text-left",children:i.jsx("span",{className:`text-[11px] font-semibold block ${q?"text-amber-300":"text-neutral-200"}`,children:b.name})}),i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${b.primary.map(ve=>Math.round(ve*255)).join(",")})`}}),i.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${b.secondary.map(ve=>Math.round(ve*255)).join(",")})`}}),i.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${b.accent.map(ve=>Math.round(ve*255)).join(",")})`}})]})]},b.id)})}),B==="morphology"&&i.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),i.jsx("span",{className:"font-mono text-amber-400",children:u.phiMultiplier.toFixed(5)})]}),i.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:u.phiMultiplier,onChange:b=>f(q=>({...q,phiMultiplier:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"space-y-1 pt-1",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),i.jsx("span",{className:"font-mono text-amber-400",children:u.iterations})]}),i.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:u.iterations,onChange:b=>f(q=>({...q,iterations:parseInt(b.target.value,10)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"space-y-1 pt-1",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),i.jsxs("span",{className:"font-mono text-amber-400",children:[u.morphSpeed.toFixed(2),"x"]})]}),i.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:u.morphSpeed,onChange:b=>f(q=>({...q,morphSpeed:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"space-y-1 pt-1",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),i.jsx("span",{className:"font-mono text-amber-400",children:u.boxFold.toFixed(2)})]}),i.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:u.boxFold,onChange:b=>f(q=>({...q,boxFold:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"space-y-1 pt-1",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),i.jsx("span",{className:"font-mono text-amber-400",children:u.sphereFold.toFixed(2)})]}),i.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:u.sphereFold,onChange:b=>f(q=>({...q,sphereFold:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]})]}),B==="gpu"&&i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),i.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(b=>i.jsx("button",{onClick:()=>f(q=>({...q,targetFps:b})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${u.targetFps===b?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:b===0?"Uncapped":`${b} FPS`},b))}),i.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),i.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),i.jsx("button",{onClick:()=>f(b=>({...b,drsEnabled:!b.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${u.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:u.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),i.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(b=>i.jsx("button",{onClick:()=>m(b.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${M===b.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:b.label},b.id))}),i.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[i.jsxs("span",{children:["Текущий: ",k]}),i.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),B==="audio"&&i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[u.enableAudio?i.jsx(Ps,{className:"w-4 h-4 text-amber-400"}):i.jsx(zd,{className:"w-4 h-4 text-neutral-500"}),i.jsxs("div",{children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),i.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),i.jsx("button",{onClick:()=>f(b=>({...b,enableAudio:!b.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${u.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:u.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsxs("div",{className:"flex justify-between text-[11px]",children:[i.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),i.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((u.audioVolume??.65)*100),"%"]})]}),i.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:u.audioVolume??.65,onChange:b=>f(q=>({...q,audioVolume:parseFloat(b.target.value)})),className:"w-full accent-amber-400"})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),i.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(b=>i.jsxs("button",{onClick:()=>f(q=>({...q,audioTuning:b.id})),className:`w-full p-2 rounded-lg border text-left transition ${(u.audioTuning||"phi432")===b.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsx("div",{className:"font-medium text-[10px]",children:b.label}),i.jsx("div",{className:"text-[8px] text-neutral-500",children:b.desc})]},b.id))})]}),i.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",i.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),B==="neuro"&&i.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[i.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[i.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),i.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(C==null?void 0:C.totalSpecimensExplored)||0," исследовано"]})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs("div",{className:"flex justify-between text-[10px]",children:[i.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),i.jsxs("span",{className:"font-mono text-amber-300",children:[(C==null?void 0:C.highestResonanceScore.toFixed(1))||0,"%"]})]}),i.jsxs("div",{className:"flex justify-between text-[10px]",children:[i.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),i.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((C==null?void 0:C.preferredIterations)||20)})]}),i.jsxs("div",{className:"flex justify-between text-[10px]",children:[i.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),i.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((C==null?void 0:C.preferredHue)||0)*360),"° Hue"]})]})]}),i.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},R2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},C2=({specimen:u,resonanceScore:f,isInteracting:d,interactionType:c,onNext:y,onPrev:_,onFavorite:j,onOpenProfile:k,enableAudio:M,onToggleAudio:m,onOpenResearchModal:L,onOpenAtlas:C,isFeedOpen:U,onToggleFeed:B,isCurrentLiked:Q=!1})=>{const[ee,I]=O.useState(!1),[X,re]=O.useState(!1),[b,q]=O.useState(!1),[ve,be]=O.useState(!1),[ae,je]=O.useState(!1),we=O.useRef(null),Qe=O.useRef(!1);O.useEffect(()=>{I(Q)},[u==null?void 0:u.id,Q]);const Ge=()=>{we.current&&clearTimeout(we.current),we.current=setTimeout(()=>{Qe.current||(re(!1),q(!1),be(!1))},3e3)},He=()=>{re(!0),q(!0),Ge()},Ke=()=>{be(E=>!E),re(!0),we.current&&clearTimeout(we.current)};O.useEffect(()=>(He(),()=>{we.current&&clearTimeout(we.current)}),[]),O.useEffect(()=>{const E=W=>{(W.clientY<80||W.clientY>window.innerHeight-120)&&He()},Z=W=>{const ue=W.target;ue.closest("#top-right-bar")||ue.closest("#top-right-trigger")||ue.closest("#neuro-feed-bar")||(q(!0),Ge())};return window.addEventListener("mousemove",E),window.addEventListener("touchstart",Z,{passive:!0}),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("touchstart",Z)}},[]);const Xe=()=>{I(!0),j()},de=()=>{if(!u)return;const E=new URLSearchParams({type:u.type,hybrid:u.hybridType,tertiary:u.tertiaryType,op:u.compositeOp,blend:u.hybridBlend.toFixed(3),tertiaryBlend:u.tertiaryBlend.toFixed(3),smoothK:u.smoothK.toFixed(3),warp:u.warpStrength.toFixed(3),octaves:String(u.octaveLayers),boxFold:u.boxFold.toFixed(3),sphereFold:u.sphereFold.toFixed(3),interiorCut:u.interiorCut.toFixed(3),palette:u.palette.id,iterations:String(u.iterations),phi:u.phiMultiplier.toFixed(9),morphSpeed:u.morphSpeed.toFixed(3),glow:u.glowIntensity.toFixed(3),zoom:u.zoom.toFixed(3),name:u.name}),Z=`${window.location.origin}${window.location.pathname}#${E.toString()}`;navigator.share?navigator.share({title:u.name,text:`Фрактал: ${u.name}`,url:Z}).catch(()=>{}):navigator.clipboard.writeText(Z).then(()=>{je(!0),setTimeout(()=>je(!1),2e3)}).catch(()=>{const W=document.createElement("textarea");W.value=Z,document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W),je(!0),setTimeout(()=>je(!1),2e3)})},N=u!=null&&u.compositeOp?R2[u.compositeOp]||u.compositeOp:"Гибрид";return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{Qe.current=!0,re(!0),be(!0),we.current&&clearTimeout(we.current)},onMouseLeave:()=>{Qe.current=!1,be(!1),Ge()},children:[i.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${ve?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:Ke,title:"Меню",children:i.jsx(qh,{className:"w-4 h-4"})}),i.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${X&&ve?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[i.jsx("button",{id:"toggle-audio-btn-hud",onClick:m,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${M?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:M?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:M?i.jsx(Ps,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):i.jsx(zd,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),C&&i.jsxs("button",{id:"open-atlas-btn-hud",onClick:C,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[i.jsx(cn,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),i.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),B&&i.jsx("button",{id:"toggle-feed-panel-btn",onClick:B,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${U?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:U?"Скрыть ленту фракталов":"Показать ленту фракталов",children:i.jsx(un,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),i.jsxs("button",{id:"open-user-profile-btn",onClick:k,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[i.jsx(Sd,{className:"w-3.5 h-3.5 text-amber-300"}),i.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[f,"%"]})]})]})]}),d&&i.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[i.jsx(zr,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),i.jsx("span",{children:c==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),i.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${b?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:i.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[i.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[i.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),i.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[i.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[i.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(u==null?void 0:u.name)||"Золотой Фрактал",children:(u==null?void 0:u.name)||"Золотой Фрактал"}),(u==null?void 0:u.hybridBlend)&&u.hybridBlend>.05&&i.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:u.compositeOp,children:N})]}),i.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(u==null?void 0:u.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),i.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),i.jsx("button",{id:"boost-affinity-btn",onClick:Xe,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${ee?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:i.jsx(Sr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${ee?"fill-rose-400 text-rose-400 scale-110":""}`})}),i.jsx("button",{id:"share-fractal-btn",onClick:de,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${ae?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:ae?"Ссылка скопирована!":"Поделиться этим фракталом",children:ae?i.jsx(xd,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):i.jsx(o2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),i.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[i.jsx("button",{id:"feed-prev-btn",onClick:_,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:i.jsx(jh,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),i.jsxs("button",{id:"feed-next-btn",onClick:y,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[i.jsx("span",{children:"Далее"}),i.jsx(gd,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},O2=({isOpen:u,onClose:f})=>u?i.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:f,children:i.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:d=>d.stopPropagation(),children:[i.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:i.jsx(cn,{className:"w-4.5 h-4.5"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),i.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),i.jsx("button",{id:"close-explanation-modal-btn",onClick:f,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:i.jsx(ri,{className:"w-4 h-4"})})]}),i.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[i.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(zr,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),i.jsxs("p",{className:"mb-2",children:["Число ",i.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",i.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[i.jsxs("div",{children:[i.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),i.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),i.jsxs("div",{children:[i.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),i.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(fn,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),i.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),i.jsxs("div",{className:"space-y-2 text-neutral-300",children:[i.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[i.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),i.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",i.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",i.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),i.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[i.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),i.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",i.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(un,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[i.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[i.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),i.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),i.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[i.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),i.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),i.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[i.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),i.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(un,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),i.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[i.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[i.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),i.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),i.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),i.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[i.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),i.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),i.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),i.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[i.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),i.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),i.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),i.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[i.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),i.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),i.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(ii,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),i.jsxs("p",{className:"mb-2",children:["При частоте развертки ",i.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),i.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),i.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),i.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(gh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),i.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",i.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),i.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[i.jsxs("li",{children:[i.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),i.jsxs("li",{children:[i.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),i.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:i.jsx("button",{id:"modal-close-confirm-btn",onClick:f,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,E2=({isOpen:u,onClose:f,tasteProfile:d,archetypeBreakdown:c,currentSpecimen:y,resonanceScore:_,isEngineerMode:j,onToggleEngineerMode:k,audioTuning:M,onSelectAudioTuning:m,onResetTasteProfile:L,onOpenManifest:C,likedSpecimens:U=[],onPlayLiked:B,onRemoveLike:Q,isCurrentLiked:ee=!1})=>u?i.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:i.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[i.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[i.jsxs("div",{className:"flex items-center gap-3.5",children:[i.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[i.jsx(Sd,{className:"w-6 h-6 text-amber-300"}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),i.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),i.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),i.jsx("button",{id:"close-user-profile-btn",onClick:f,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:i.jsx(ri,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[i.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[i.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[i.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),i.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[i.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[_,"%"]}),i.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),i.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${_}%`}})})]}),i.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[i.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),i.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[i.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(d==null?void 0:d.totalSpecimensExplored)||1}),i.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),i.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(y==null?void 0:y.generation)||1," в фокусе"]})]}),i.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[i.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),i.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:i.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(d==null?void 0:d.highestResonanceScore)||95,"%"]})}),i.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Sr,{className:`w-4 h-4 ${U.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),i.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),i.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:U.length})]}),ee&&y&&i.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[i.jsx(Sr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),U.length===0?i.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",i.jsx(Sr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):i.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:U.map((I,X)=>i.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[i.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:X+1}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:I.name}),i.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",I.phiMultiplier.toFixed(4)," • Gen #",I.generation]})]}),B&&i.jsx("button",{onClick:()=>B(I),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:i.jsx(_d,{className:"w-3 h-3"})}),Q&&i.jsx("button",{onClick:()=>Q(I.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:i.jsx(f2,{className:"w-3 h-3"})})]},I.id))})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(_h,{className:"w-4 h-4 text-amber-400"}),i.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),i.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),i.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),i.jsx("div",{className:"space-y-2.5 pt-1",children:c.map(I=>i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-neutral-300 font-medium",children:I.label}),i.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[I.percentage,"%"]})]}),i.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${I.percentage}%`}})})]},I.archetype))})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Ps,{className:"w-4 h-4 text-amber-400"}),i.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),i.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),i.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(I=>i.jsxs("button",{onClick:()=>m(I.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${M===I.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[i.jsx("span",{className:"text-xs font-semibold",children:I.label}),i.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:I.desc})]},I.id))})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:i.jsx(fn,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:i.jsx("span",{children:"О проекте & Описание Архитектуры"})}),i.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),i.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{C==null||C()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:i.jsx("span",{children:"Читать"})})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:i.jsx(x2,{className:"w-4 h-4"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),i.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),i.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:k,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${j?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[i.jsx("div",{className:`w-2 h-2 rounded-full ${j?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),i.jsx("span",{children:j?"Инженер Включен":"Включить Инж"})]})]}),j&&i.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[i.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),i.jsx("button",{onClick:f,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),i.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[i.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),i.jsx("button",{id:"close-profile-btn",onClick:f,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,id=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],k2=({isReady:u,onFinished:f})=>{const[d,c]=O.useState(0),[y,_]=O.useState(!1),[j,k]=O.useState(!1);return O.useEffect(()=>{const M=setInterval(()=>{c(m=>m<id.length-1?m+1:m)},450);return()=>clearInterval(M)},[]),O.useEffect(()=>{const M=setTimeout(()=>{if(!u){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),_(!0);const m=setTimeout(()=>{k(!0),f==null||f()},700);return()=>clearTimeout(m)}},15e3);return()=>clearTimeout(M)},[u,f]),O.useEffect(()=>{if(u){const M=setTimeout(()=>{_(!0);const m=setTimeout(()=>{k(!0),f==null||f()},700);return()=>clearTimeout(m)},500);return()=>clearTimeout(M)}},[u,f]),j?null:i.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${y?"opacity-0 pointer-events-none":"opacity-100"}`,children:[i.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),i.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[i.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),i.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),i.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),i.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[i.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),i.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),i.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),i.jsxs("filter",{id:"softGlow",children:[i.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),i.jsxs("feMerge",{children:[i.jsx("feMergeNode",{in:"coloredBlur"}),i.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((M,m)=>i.jsxs("g",{transform:`rotate(${M} 80 80)`,children:[i.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),i.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),i.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},m)),i.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),i.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),i.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[i.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),i.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),i.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[i.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(d+1)*25)}%`}})}),i.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:id[d]})]}),i.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},q2=({isOpen:u,onClose:f,isFirstVisit:d=!1,onOpenAtlas:c})=>{if(!u)return null;const y=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}f()},_=()=>{y(),c==null||c()};return i.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:y,children:i.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:j=>j.stopPropagation(),children:[i.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),i.jsx("button",{id:"btn-close-manifest-modal",onClick:y,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:i.jsx(ri,{className:"w-5 h-5"})}),i.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[i.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[i.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[i.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),i.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[i.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),i.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),i.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[i.jsx(fn,{className:"w-3 h-3 text-amber-400"}),i.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),i.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),i.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[i.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[i.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[i.jsx(zr,{className:"w-4 h-4 text-amber-400"}),i.jsx("span",{children:"100+ Канонических Форм"})]}),i.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),i.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[i.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[i.jsx(un,{className:"w-4 h-4 text-cyan-400"}),i.jsx("span",{children:"Живой Морфинг & Слияние"})]}),i.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),i.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[i.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[i.jsx($h,{className:"w-4 h-4 text-purple-400"}),i.jsx("span",{children:"Гармоники Звука φ"})]}),i.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),i.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(vd,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),i.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),i.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),i.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[c&&i.jsxs("button",{id:"btn-welcome-open-atlas",onClick:_,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[i.jsx(cn,{className:"w-4 h-4"}),i.jsx("span",{children:"Каталог 100+ Фракталов"})]}),i.jsxs("button",{id:"btn-manifest-start",onClick:y,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[i.jsx("span",{children:"Начать погружение"}),i.jsx(gd,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},rd=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"}],li=[{id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",enginePreset:{type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}},{id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}},{id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}},{id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2.0 (граница D ≈ 1.58)",generatorRule:"Чередование знака угла поворота на каждом шаге итерации",description:"Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.",phiPiRelation:"Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.35,zoom:2.5}},{id:"golden-dragon",name:"Золотой дракон",englishName:"Golden Dragon Curve",category:"geometric_curves",formula:"r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1",dimension:"D = 2.0 (самоподобие φ)",generatorRule:"Деление отрезка в отношении золотого сечения 1:φ",description:"Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.",phiPiRelation:"Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.6}},{id:"minkowski-curve",name:"Кривая Минковского (Сосиска Минковского)",englishName:"Minkowski Sausage",category:"geometric_curves",formula:"N = 8, S = 4",dimension:"D = ln(8)/ln(4) = 1.500",generatorRule:"F → F+F-F-FF+F+F-F (угол 90°)",description:"Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.",phiPiRelation:"Ортогональная дискретность π/2; целое полуцелое значение размерности.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothMorph",boxFold:1.5,zoom:3.1}},{id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]², N = 9, S = 3",dimension:"D = ln(9)/ln(3) = 2.000",generatorRule:"F → F+F-F-F-F+F+F+F-F (угол 90°)",description:"Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.",phiPiRelation:"Сюръективное непрерывное отображение; шаг дискретизации π/2.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.9}},{id:"hilbert-curve",name:"Кривая Гильберта 2D/3D",englishName:"Hilbert Space-Filling Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}",dimension:"D = 2.0 (в 3D D = 3.0)",generatorRule:"L-система обхода ячеек 2^n x 2^n",description:"Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.",phiPiRelation:"Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:3.2,rotX:.45,rotY:.35}},{id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2) = 2.0",dimension:"D = 2.000",generatorRule:"Замкнутый маршрут вокруг треугольников сетки",description:"Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.",phiPiRelation:"Углы поворота 45° (π/4) и 90° (π/2).",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"moore-curve",name:"Кривая Мура",englishName:"Moore Curve",category:"geometric_curves",formula:"N = 4^n, S = 2^n",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"Замкнутый вариант кривой Гильберта",description:"Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.",phiPiRelation:"Симметричный квадрантный обход, кратный π/2.",enginePreset:{type:"hilbertCurve3D",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.25,zoom:3}},{id:"gosper-curve",name:"Кривая Госпера (Flowsnake)",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"N = 7, S = √7",dimension:"D = ln(7)/ln(√7) = 2.000",generatorRule:"L-система на гексагональной сетке (угол 60° = π/3)",description:"Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.",phiPiRelation:"Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.",enginePreset:{type:"quasicrystal",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"cesaro-curve",name:"Кривая Чезаро",englishName:"Cesàro Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2(1 + cos α))",dimension:"D ∈ (1.0, 2.0] при α ∈ (0, π/2)",generatorRule:"Кривая Коха с переменным углом при вершине",description:"Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.",phiPiRelation:"При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"domainWarp",warpStrength:.3,zoom:2.7}},{id:"drummond-curve",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ = π / k, k ∈ ℝ",dimension:"D ≈ 1.45 - 1.85",generatorRule:"Циклические L-системы с дробными иррациональными углами",description:"Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.",phiPiRelation:"Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.",enginePreset:{type:"phyllotaxis",compositeOp:"goldenSpiralFold",zoom:2.6}},{id:"mcwhorter-pentigree",name:"Снежинка Коха — МакВортера",englishName:"McWhorter Pentigree",category:"geometric_curves",formula:"N = 5, S = (3 - √5)/2",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.672",generatorRule:"Асимметричный пентагональный генератор",description:"Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.",phiPiRelation:"Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",zoom:2.5}},{id:"rice-curve",name:"Кривая Райса",englishName:"Rice Curve",category:"geometric_curves",formula:"θ_1 = π/3, θ_2 = 2π/5",dimension:"D ≈ 1.78",generatorRule:"Неортогональные развороты в пространственно-заполняющих кривых",description:"Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.",phiPiRelation:"Сочетание углов π/3 и пентагональных пропорций золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"quasicrystal",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"polya-curve",name:"Кривая Пойи",englishName:"Pólya Sweep Curve",category:"geometric_curves",formula:"T → T_1 ∪ T_2",dimension:"D = 2.000",generatorRule:"Рекурсивный обход прямоугольного треугольника с высотой",description:"Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.",phiPiRelation:"Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.7}},{id:"sierpinski-arrowhead",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Двухсимвольная L-система сходящаяся к треугольнику",description:"Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.",phiPiRelation:"Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothUnion",zoom:2.9}},{id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"constructive",formula:"N = 3, S = 2",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Удаление центрального перевернутого треугольника",description:"Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.",phiPiRelation:"Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"sierpinski-carpet",name:"Ковер Серпинского",englishName:"Sierpiński Carpet",category:"constructive",formula:"N = 8, S = 3",dimension:"D = ln(8)/ln(3) ≈ 1.89279",generatorRule:"Деление квадрата на 9 частей, удаление центрального",description:"Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.",phiPiRelation:"Универсальная плоская кривая Менгера; мера Лебега стремится к 0.",enginePreset:{type:"menger",compositeOp:"smoothMorph",boxFold:1,zoom:2.9}},{id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"constructive",formula:"N = 20, S = 3, V_∞ = 0, A_∞ = ∞",dimension:"D = ln(20)/ln(3) ≈ 2.72683",generatorRule:"Куб делится на 27 кубиков, удаляются 7 центральных",description:"Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.",phiPiRelation:"Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1.2,zoom:3.1}},{id:"pythagoras-tree-classic",name:"Дерево Пифагора классическое",englishName:"Pythagoras Tree (Symmetric)",category:"constructive",formula:"a² + b² = c², a = b = c/√2",dimension:"D = 2.0 (перекрытия в пределе)",generatorRule:"Построение квадратов на сторонах прямоугольного равнобедренного треугольника",description:"Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).",phiPiRelation:"Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.6,rotX:.35}},{id:"pythagoras-tree-windblown",name:"Дерево Пифагора обдуваемое",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"α = 60° (π/3), β = 30° (π/6)",dimension:"D ≈ 1.85",generatorRule:"Разноугольное ветвление прямоугольного треугольника",description:"Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.",phiPiRelation:"Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.",enginePreset:{type:"pythagorasTree3D",compositeOp:"goldenSpiralFold",warpStrength:.3,zoom:2.7}},{id:"pythagoras-tree-naked",name:"Обнаженное дерево Пифагора",englishName:"Naked Pythagoras Tree",category:"constructive",formula:"Граф центров квадратов G(V, E)",dimension:"D ≈ 1.73",generatorRule:"Отрезки соединяют только центры смежных квадратов",description:"Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центры квадратов дерева Пифагора.",phiPiRelation:"Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"domainWarp",warpStrength:.25,zoom:2.8}},{id:"apollonian-gasket",name:"Сетка Аполлония (Упаковка Аполлония)",englishName:"Apollonian Gasket / Sphere Packing",category:"constructive",formula:"(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)",dimension:"D ≈ 1.30568 (в 3D D ≈ 2.4739)",generatorRule:"Теорема Содди о четырех касающихся окружностях",description:"Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.",phiPiRelation:"Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",sphereFold:.75,zoom:3}},{id:"vicsek-fractal",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Box / Cross)",category:"constructive",formula:"N = 5, S = 3",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Деление квадрата на 9 частей, сохранение центрального креста",description:"Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.",phiPiRelation:"Идеальная симметрия группы D_4 (повороты на π/2).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothMorph",boxFold:1.1,zoom:2.9}},{id:"t-square-fractal",name:"Т-квадрат",englishName:"T-Square Fractal",category:"constructive",formula:"A_∞ = 2 A_0",dimension:"D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)",generatorRule:"Итеративное наложение уменьшенных квадратов на углы",description:"Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.",phiPiRelation:"Ограниченная фрактальная граница со степенью масштабирования 1/2.",enginePreset:{type:"menger",compositeOp:"domainWarp",warpStrength:.2,zoom:3}},{id:"sierpinski-cross",name:"Крест Серпинского",englishName:"Sierpiński Cross",category:"constructive",formula:"D = ln(5)/ln(3) ≈ 1.465",dimension:"D ≈ 1.465 (в 3D D ≈ 2.32)",generatorRule:"Пространственное пересечение плоскостей Серпинского",description:"Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.",phiPiRelation:"Инвариантен относительно октаэдрических вращений SO(3).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"sierpinski-pentagon",name:"Пятиугольник Серпинского (Пентафрактал)",englishName:"Sierpiński Pentagon (Pentaflake)",category:"constructive",formula:"N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²",dimension:"D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228",generatorRule:"5 копий пятиугольника по углам, удаление центра",description:"Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.",phiPiRelation:"АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",phiMultiplier:1.61803398875,zoom:2.7}},{id:"hexafractal",name:"Гексафрактал (Гексафлейк)",englishName:"Hexaflake",category:"constructive",formula:"N = 7, S = 3",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть копий шестиугольника вокруг центрального седьмого",description:"Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.",phiPiRelation:"Гексагональные углы 2π/6 = 60° = π/3.",enginePreset:{type:"quasicrystal",compositeOp:"smoothUnion",zoom:2.8}},{id:"ivezic-fractal",name:"Фрактал Ивезича",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n+1)/ln(2)",dimension:"D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32",generatorRule:"Рекурсивное деление n-мерного регулярного симплекса",description:"Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.",phiPiRelation:"Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"levy-snowflake",name:"Снежинка Леви",englishName:"Lévy Snowflake",category:"constructive",formula:"∂(Lévy C curve ∪ rot)",dimension:"D = 2.0 (граница D ≈ 1.934)",generatorRule:"Замкнутая суперпозиция 8 C-кривых Леви",description:"Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.",phiPiRelation:"Периодичность 2π/8 = π/4.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.7}},{id:"sierpinski-pyramid",name:"Пирамида Серпинского (Тетраэдр Серпинского)",englishName:"Sierpiński Tetrahedron",category:"constructive",formula:"N = 4, S = 2, V_∞ = 0",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"4 тетраэдра половинного размера в вершинах",description:"Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.",phiPiRelation:"Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.9,rotX:.4}},{id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}},{id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}},{id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}},{id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}},{id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 2.0",generatorRule:"Бассейны притяжения комплексных корней полинома",description:"Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.",phiPiRelation:"Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:2.9}},{id:"serafimsky-fractal",name:"Фрактал Серафимского",englishName:"Serafimsky Shifted Newton",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{iθ} f(z_n)/f'(z_n)",dimension:"D ≈ 2.0",generatorRule:"Метод Ньютона с комплексным вращением фазового угла θ",description:"Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.",phiPiRelation:"Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.",enginePreset:{type:"newtonBasins",compositeOp:"goldenSpiralFold",warpStrength:.35,zoom:2.8}},{id:"burning-ship",name:"Фрактал «Пылающий корабль» (Burning Ship)",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D = 2.0",generatorRule:"Абсолютная величина от Re и Im перед возведением в квадрат",description:"Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.",phiPiRelation:"Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",zoom:3.1,rotX:.4}},{id:"perpendicular-burning-ship",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c",dimension:"D = 2.0",generatorRule:"Модуль берется только от одной компоненты (вещественной)",description:"Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.",phiPiRelation:"Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.",enginePreset:{type:"burningShip3D",compositeOp:"domainWarp",warpStrength:.3,zoom:3}},{id:"pickover-biomorphs",name:"Биоморфы Пиковера",englishName:"Pickover Biomorphs",category:"algebraic_complex",formula:"|Re(z_n)| < R ∨ |Im(z_n)| < R",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Условие останова итераций имитирует форму одноклеточных",description:"Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.",phiPiRelation:"Формы радиолярий и спикул подчиняются золотому закону роста Д'Арси Томпсона.",enginePreset:{type:"quaternionJulia",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.7}},{id:"trigonometric-fractal",name:"Тригонометрические фракталы (Фрактал Иисуса)",englishName:"Trigonometric Fractal (sin z + c)",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c",dimension:"D = 2.0",generatorRule:"Трансцендентные целые функции комплексного переменного",description:"Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.",phiPiRelation:"Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.",enginePreset:{type:"spiralTunnel",compositeOp:"quantumResonance",zoom:3.2}},{id:"lyapunov-fractal",name:"Карты Ляпунова / Фракталы Ляпунова",englishName:"Lyapunov Fractals / Zircon City",category:"algebraic_complex",formula:"λ = lim (1/N) ∑ ln |f'(x_n)| для последовательности AB",dimension:"D ≈ 2.0 (фрактальные границы стабильности)",generatorRule:"Чередование параметров r_A и r_B логистического отображения",description:"Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.",phiPiRelation:"Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.",enginePreset:{type:"primeSpiral",compositeOp:"quantumResonance",zoom:2.8}},{id:"novak-fractal",name:"Множество Новака",englishName:"Novak Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)",dimension:"D ≈ 2.0",generatorRule:"Использование иррациональных дробных степеней комплексного числа",description:"Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.",phiPiRelation:"При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"goldenSpiralFold",zoom:2.8}},{id:"spider-fractal",name:"Фрактал «Паук»",englishName:"Spider Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Связанная динамика точки z и параметра c на каждом шаге",description:"Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.",phiPiRelation:"Отношение затухания c_n/2 согласуется с золотой дихотомией.",enginePreset:{type:"quaternionJulia",compositeOp:"domainWarp",warpStrength:.45,zoom:2.9}},{id:"sherwood-carpet",name:"Ковер Шервуда",englishName:"Sherwood Carpet",category:"algebraic_complex",formula:"z_{n+1} = 1 / (z_n^k + c)",dimension:"D ≈ 1.85",generatorRule:"Инверсия комплексных полиномов высших порядков",description:"Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.",phiPiRelation:"Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.",enginePreset:{type:"apollonian",hybridType:"mandelbox",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"quaternion-mandelbrot",name:"Кватернионный Мандельброт 4D",englishName:"4D Quaternion Mandelbrot",category:"multidimensional",formula:"q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0",dimension:"D_4D = 4.0, D_3D-сечения = 2.0 - 3.0",generatorRule:"Итерации в теле алгебры кватернионов ℍ (1, i, j, k)",description:"Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.",phiPiRelation:"Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.25}},{id:"quaternion-julia",name:"Кватернионный Жюлиа 4D",englishName:"4D Quaternion Julia",category:"multidimensional",formula:"q_{n+1} = q_n² + C, C = const ∈ ℍ",dimension:"D ≈ 2.5 - 3.2 в 3D проекции",generatorRule:"4D сечение динамической системы кватернионов при фиксированном векторе C",description:"Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.",phiPiRelation:"Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.8}},{id:"mandelbulb-3d",name:"Mandelbulb 3D",englishName:"Mandelbulb 3D (White & Nylander)",category:"multidimensional",formula:"v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c",dimension:"D ≈ 2.7 - 2.9",generatorRule:"Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)",description:"Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.",phiPiRelation:"Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:3.1}},{id:"mandelbox-3d",name:"Mandelbox 3D",englishName:"Mandelbox 3D (Tom Lowe)",category:"multidimensional",formula:"v ↦ s · sphereFold(boxFold(v)) + c",dimension:"D ≈ 2.3 - 2.8",generatorRule:"Циклическое складывание кубического пространства (box fold) и сферическая инверсия",description:"3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.",phiPiRelation:"Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.",enginePreset:{type:"mandelbox",boxFold:1.2,sphereFold:.65,compositeOp:"smoothUnion",zoom:3.2}},{id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube (Eric Baird)",category:"multidimensional",formula:"Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)",dimension:"D ≈ 2.529",generatorRule:"Вырезание крестообразных отверстий с пропорциями золотого сечения",description:"Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.",phiPiRelation:"Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"kleinian-groups",name:"Клейниановы группы (Предельные множества)",englishName:"Kleinian Limit Sets / Schottky Groups",category:"multidimensional",formula:"γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)",dimension:"D ≈ 1.3 - 2.7",generatorRule:"Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³",description:"Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.",phiPiRelation:"Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothMorph",zoom:2.9}},{id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern IFS",category:"ifs_attractors",formula:"W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}",dimension:"D ≈ 1.85",generatorRule:"4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}",description:"Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.",phiPiRelation:"Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.",enginePreset:{type:"phyllotaxis",hybridType:"pythagorasTree3D",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"fractal-flames",name:"Фрактальное пламя (Fractal Flames)",englishName:"Fractal Flames (Scott Draves)",category:"ifs_attractors",formula:"F(x) = ∑ w_i V_j(A_i x + b_i)",dimension:"D зависит от нелинейных вариаций",generatorRule:"Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг",description:"Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.",phiPiRelation:"Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.",enginePreset:{type:"hopfFibration",hybridType:"spiralTunnel",compositeOp:"quantumResonance",hybridBlend:.45,zoom:3}},{id:"lorenz-attractor",name:"Странный аттрактор Лоренца",englishName:"Lorenz Strange Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz",dimension:"D_каплана-йорке ≈ 2.06 ± 0.01",generatorRule:"Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)",description:"Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.",phiPiRelation:"Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothMorph",zoom:3.2,rotX:.3,rotY:.4}},{id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)",dimension:"D ≈ 2.01",generatorRule:"Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты",description:"Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.",phiPiRelation:"Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothUnion",zoom:2.9}},{id:"ikeda-attractor",name:"Аттрактор Икеды",englishName:"Ikeda Map Attractor",category:"ifs_attractors",formula:"z_{n+1} = A + B z_n e^{i(|z_n|² + C)}",dimension:"D ≈ 1.7",generatorRule:"Двумерное отображение света в кольцевом оптическом резонаторе",description:"Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.",phiPiRelation:"Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.",enginePreset:{type:"spiralTunnel",compositeOp:"domainWarp",warpStrength:.4,zoom:2.8}},{id:"clifford-attractor",name:"Аттрактор Клиффорда",englishName:"Clifford Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Синусно-косинусное полиномиальное отображение с 4 параметрами",description:"Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.",phiPiRelation:"Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:2.9}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"Peter de Jong Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)",dimension:"D ≈ 1.8",generatorRule:"Симметричное тригонометрическое отображение Петера де Йонга",description:"Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.",phiPiRelation:"При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.",enginePreset:{type:"cliffordTorus4D",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3}},{id:"henon-attractor",name:"Аттрактор Хенона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)",dimension:"D ≈ 1.261 ± 0.003",generatorRule:"Дискретная диссипативная система Мишеля Эно (1976)",description:"Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.",phiPiRelation:"Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:2.7}},{id:"humboldt-attractor",name:"Аттрактор Гумбольдта",englishName:"Humboldt Flow Attractor",category:"ifs_attractors",formula:"dxdt = v_oceanic(x, φ, t)",dimension:"D ≈ 2.15",generatorRule:"IFS-система, имитирующая турбулентные океанические вихри",description:"Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.",phiPiRelation:"Логарифмические спирали вихрей имеют золотой угол раскрутки.",enginePreset:{type:"gyroid",compositeOp:"goldenSpiralFold",zoom:3.1}},{id:"perlin-noise",name:"Фрактальный шум Перлина",englishName:"Fractal Perlin Noise (fBm)",category:"stochastic",formula:"f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)",dimension:"D = 3 - H, где H — показатель Херста",generatorRule:"Градиентный шум Кена Перлина, суммируемый по октавам",description:"Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.",phiPiRelation:"Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.",enginePreset:{type:"neoviusMinimal",compositeOp:"domainWarp",warpStrength:.35,zoom:3}},{id:"simplex-noise",name:"Симплексный шум (Simplex Noise)",englishName:"Simplex Noise",category:"stochastic",formula:"Разбиение пространства на симплексы Шлефли A_n",dimension:"D = 3 - H",generatorRule:"Замена гиперкубической сетки на симплексную решетку",description:"Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.",phiPiRelation:"Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.1}},{id:"diamond-square",name:"Алгоритм Diamond-Square (Плазма)",englishName:"Diamond-Square Plasma Fractal",category:"stochastic",formula:"h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}",dimension:"D = 3 - H ∈ (2.0, 3.0)",generatorRule:"Рекурсивное чередование шагов ромба и квадрата по сетке",description:"Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.",phiPiRelation:"Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.",enginePreset:{type:"dlaCluster",compositeOp:"smoothMorph",zoom:2.8}},{id:"fractional-brownian-motion",name:"Дробное броуновское движение (fBm)",englishName:"Fractional Brownian Motion (fBm)",category:"stochastic",formula:"E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})",dimension:"D = n + 1 - H (Мандельброт и Ван Несс, 1968)",generatorRule:"Гауссовский процесс с долговременной корреляцией и параметром Херста H",description:"Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.",phiPiRelation:"Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.",enginePreset:{type:"dlaCluster",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"dla-cluster",name:"Диффузионно-ограниченная агрегация (ДОА / DLA)",englishName:"Diffusion-Limited Aggregation (DLA)",category:"stochastic",formula:"N(r) ∝ r^{D_{DLA}}",dimension:"D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)",generatorRule:"Случайное блуждание броуновских частиц и их слипание с растущим кластером",description:"Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.",phiPiRelation:"Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.25}},{id:"percolation-clusters",name:"Кластеры перколяции",englishName:"Percolation Lattice Clusters",category:"stochastic",formula:"P(p) ∝ (p - p_c)^β при p → p_c",dimension:"D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)",generatorRule:"Случайное заполнение узлов решетки с критической вероятностью p_c",description:"Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.",phiPiRelation:"Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.",enginePreset:{type:"neoviusMinimal",compositeOp:"fractalLattice",zoom:3.1}},{id:"dielectric-breakdown",name:"Фрактал лавинного пробоя (Фигуры Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM / Lichtenberg)",category:"stochastic",formula:"∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)",dimension:"D ≈ 1.75 при η = 1",generatorRule:"Решение уравнения Лапласа для электростатического потенциала с ростом разряда",description:"Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.",phiPiRelation:"Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.",enginePreset:{type:"dlaCluster",compositeOp:"domainWarp",warpStrength:.4,zoom:3}},{id:"hofstadter-butterfly",name:"Бабочка Хофштадтера",englishName:"Hofstadter Butterfly",category:"topological_physical",formula:"ψ_{m+1} + ψ_{m-1} + 2 cos(2π m α - ν) ψ_m = E ψ_m (Уравнение Харпера)",dimension:"D(E) фрактальное канторово множество разрешенных энергий",generatorRule:"Спектр энергии электрона в периодической 2D решетке в магнитном поле α = Φ/Φ_0",description:"Квантовый фрактал Дугласа Хофштадтера (1976). График разрешенных энергетических зон блоховского электрона в зависимости от магнитного потока.",phiPiRelation:"АБСОЛЮТНЫЙ КВАНТОВЫЙ РЕЗОНАНС: при иррациональном потоке α = 1/φ спектр становится канторовым множеством нулевой меры Лебега!",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3}},{id:"richardson-fractal",name:"Фрактал Ричардсона (Эффект береговой линии)",englishName:"Richardson Coastline Fractal Effect",category:"topological_physical",formula:"L(ε) ∝ ε^{1 - D} (Льюис Фрай Ричардсон)",dimension:"D_Британия ≈ 1.25, D_Норвегия ≈ 1.52",generatorRule:"Зависимость длины границы от масштаба измерительного инструмента ε",description:"Открытие Ричардсона (1961), легшее в основу книги Бенуа Мандельброта: длина географической границы неограниченно растет при уменьшении шага линейки.",phiPiRelation:"Скейлинг конформной береговой линии согласуется с броуновскими петлями SLE_{6/3}.",enginePreset:{type:"fibonacciSnowflake",hybridType:"dlaCluster",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.8}},{id:"cantor-set",name:"Канторово множество (Канторова лестница)",englishName:"Cantor Ternary Set",category:"topological_physical",formula:"C = ⋂_{n=1}^∞ E_n, L_∞ = 0, |C| = 2^{ℵ_0}",dimension:"D = ln(2)/ln(3) ≈ 0.63093",generatorRule:"Исключение открытой средней трети (1/3, 2/3) из отрезка [0, 1]",description:"Фундаментальный топологический объект Георга Кантора (1883). Содержит столько же точек, сколько весь отрезок ℝ, но имеет нулевую меру Лебега.",phiPiRelation:"Золотое канторово множество вырезает средний интервал длиной 1/φ², оставляя два отрезка длиной 1/φ.",enginePreset:{type:"menger",compositeOp:"smoothCarve",boxFold:1.4,zoom:3}},{id:"cantor-dust",name:"Пыль Кантора",englishName:"Cantor Dust",category:"topological_physical",formula:"C_d = C × C × ... × C (d-кратное прямое произведение)",dimension:"D = d · ln(2)/ln(3) (для d=2 D ≈ 1.2618, d=3 D ≈ 1.8928)",generatorRule:"Многомерное декартово произведение одномерных множеств Кантора",description:"Вполне несвязное компактное пространство в ℝ² и ℝ³. В астрофизике используется для моделирования крупномасштабного распределения галактик во Вселенной.",phiPiRelation:"Описывает кластеризацию материи в космических войдах с золотым масштабным фактором.",enginePreset:{type:"apollonian",compositeOp:"smoothCarve",sphereFold:.8,zoom:2.9}},{id:"antoine-necklace",name:"Ожерелье Антуана",englishName:"Antoine's Necklace",category:"topological_physical",formula:"X = ⋂_{i=1}^∞ A_i, где A_i — цепи зацепленных торов",dimension:"D_топологическая = 0, D_Хаусдорфа > 0",generatorRule:"Тор заменяется цепью зацепленных уменьшенных торов",description:"Дикий узел и фрактал Луи Антуана (1921). Вполне несвязное компактное подмножество ℝ³, дополнение к которому не является односвязным (фундаментальная группа π₁(ℝ³ \\ X) ≠ 1).",phiPiRelation:"Каждое кольцо ориентировано по меридианам тора (углы 2π); золотая инверсия диаметров предотвращает самопересечение колец.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.2}},{id:"cesaro-curve-v2",name:"Кривая Чезаро",englishName:"Cesàro Curve (Torn Square)",category:"geometric_curves",formula:"α = arctan((1-2δ)/√3), L_{n+1} = (2 + 2 cos α)^{-1} L_n",dimension:"D = ln(4) / ln(2(1 + cos α)) ≈ 1.7848",generatorRule:"Вариация кривой Коха с варьируемым углом при вершине отсекаемого треугольника α ∈ (0, π/3)",description:"Обобщение кривой Коха Эрнесто Чезаро (1906). При приближении угла к 90° кривая превращается в самокасающуюся пространственно-заполняющую структуру («разорванный квадрат»).",phiPiRelation:"При золотом угле Чезаро α = 2π(1 - 1/φ) ≈ 137.5° граница кривой образует квазипериодическую розетку.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",warpStrength:.35,zoom:3.1}},{id:"drummond-curve-v2",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ_k = 2π / (φ^k), L_{n+1} = r · L_n",dimension:"D ≈ 1.4142 (квазидробная размерность)",generatorRule:"Циклическая L-система с дробными иррациональными углами поворота и переменным масштабированием",description:"Кривая на основе L-систем с несимметричными ветвями и иррациональными фазовыми сдвигами, формирующая спиральные кристаллические кластеры.",phiPiRelation:"Каждый шаг итерации масштабируется на фактор 1/φ с поворотом на угол золотого сечения.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"koch-mcwhorter-v2",name:"Снежинка Коха — МакВортера (Pentigree)",englishName:"McWhorter's Pentigree",category:"geometric_curves",formula:"z ↦ z · e^{i θ} / r + c_k, r = √7",dimension:"D = ln(5)/ln(√7) ≈ 1.6309",generatorRule:"Асимметричная замена каждого отрезка на 5 сегментов под углом arcsin(√3/(2√7))",description:"Обобщение снежинки Коха Уильяма МакВортера (Pentigree), порождающее пятиугольные самозаполняющиеся фрактальные плитки с 5-лучевой симметрией.",phiPiRelation:"Симметрия pentigree неразрывно связана с пентаграммой и степенями золотого сечения φ.",enginePreset:{type:"fibonacciSnowflake",hybridType:"icosahedral",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3}},{id:"rice-curve-v2",name:"Кривая Райса",englishName:"Rice Space-Filling Curve",category:"geometric_curves",formula:"γ(t): [0, 1] → ℝ², L-система F → +F--F+F++F-",dimension:"D = 2.0 (пространственно-заполняющая)",generatorRule:"Пространственно-заполняющая кривая с неортогональными углами поворота 45° и 135°",description:"Непрерывная кривая, заполняющая треугольные и шестиугольные ячейки без самопересечений за счет асимметричных неортогональных разворотов.",phiPiRelation:"Углы разворота кратны π/4 и π/8; золотая модуляция длин звеньев сглаживает кривизну пути.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothCarve",boxFold:1.1,zoom:2.8}},{id:"polya-curve-v2",name:"Кривая Пойи",englishName:"Pólya Space-Filling Curve",category:"geometric_curves",formula:"P(t) = ∑_{k=1}^∞ 2^{-k} v_{ε_k(t)}, t ∈ [0, 1]",dimension:"D = 2.0 (непрерывно заполняет треугольник)",generatorRule:"Предельный случай блуждания кривой Джорджа Пойи (1913), заполняющей равнобедренный прямоугольный треугольник",description:"Первая доказанная непрерывная кривая, заполняющая внутренность треугольника, сохраняя дифференцируемость почти всюду кроме счетного множества канторовых узлов.",phiPiRelation:"Отношение гипотенузы к катетам равно √2; золотое сечение регулирует последовательность обхода подтреугольников.",enginePreset:{type:"dragonCurveIFS",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"twenmey-dragon-v2",name:"Дракон Твенми",englishName:"Twenmey Dragon Curve",category:"geometric_curves",formula:"w_1(z) = z · (1 + i)/2, w_2(z) = 1 - z · (1 - i)/2",dimension:"D = 2.0, граница D_∂ ≈ 1.5236",generatorRule:"Вариация дракона Хартера-Хейтуэя со сменой знака угла поворота на каждом нечетном шаге",description:"Спиральная фрактальная кривая с вихревыми завитками, разворачивающаяся в обе полуплоскости и напоминающая крылья феникса.",phiPiRelation:"Угол поворота 90° = π/2; шаг разворота витков масштабируется по пропорции φ = 1.618.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:3.2}},{id:"golden-dragon-v2",name:"Золотой Дракон (φ-Dragon)",englishName:"Golden Ratio Dragon Curve",category:"geometric_curves",formula:"z_{n+1} = z_n / φ · e^{i · arccos(1/(2φ))}",dimension:"D = ln(2)/ln(φ) ≈ 1.4404",generatorRule:"Замена звеньев ломаной треугольниками с золотыми пропорциями катетов 1 : 1/φ",description:"Фрактальная кривая дракона, углы и длины сегментов которой точно вычислены из корня полинома x² - x - 1 = 0. Не имеет самопересечений ни на одном масштабе.",phiPiRelation:"Фундаментальный фрактал: коэффициент подобия в точности равен 1/φ = 0.61803398875!",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.38,phiMultiplier:1.61803398875,zoom:3.1}},{id:"sierpinski-arrowhead-v2",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"A → B-A-B, B → A+B+A (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Симметричная L-система, в пределе сходящаяся к треугольнику Серпинского",description:"Непрерывная ломаная линия, которая при итерациях n → ∞ в точности заметает множество точек треугольника Серпинского, являясь его топологической траекторией.",phiPiRelation:"Угол 60° задает гексагональный базис; золотое разбиение сторон порождает фрактал Пенроуза.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:3}},{id:"pythagoras-tree-wind-v2",name:"Дерево Пифагора обдуваемое (Асимметричное)",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"c² = a² + b², a = c · cos(α), b = c · sin(α), α ≠ 45°",dimension:"D ≈ 1.83 (зависит от угла наклона)",generatorRule:"Построение квадратов на прямоугольном треугольнике с неравными острыми углами α = 30°, β = 60°",description:"Вариация классического дерева Пифагора, где неравные углы ветвления создают динамический эффект кроны, изогнутой непрерывным фрактальным ветром.",phiPiRelation:"При золотом угле α = arcsin(1/√φ) дерево сворачивается в совершенную логарифмическую спираль Фибоначчи.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothUnion",rotX:.45,rotY:.2,zoom:3.2}},{id:"pythagoras-tree-naked-v2",name:"Обнаженное дерево Пифагора",englishName:"Naked Skeleton Pythagoras Tree",category:"constructive",formula:"E_n = ⋃ [c_{k, 1}, c_{k, 2}], c_k — центры квадратов",dimension:"D = ln(2)/ln(√2) = 2 (для скелетного графа)",generatorRule:"Фрактальный граф, построенный исключительно по отрезкам, соединяющим центры смежных квадратов дерева Пифагора",description:"Минималистичный линейный остов дерева Пифагора. Образует элегантную ветвящуюся коралловую структуру, лишенную сплошных площадей квадратов.",phiPiRelation:"Длины ветвей убывают в геометрической прогрессии с масштабным множителем золотого корня 1/√φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",warpStrength:.2,zoom:3.4}},{id:"t-square-v2",name:"Т-квадрат (T-Square Fractal)",englishName:"T-Square Fractal",category:"constructive",formula:"A_{n+1} = A_n ∪ 4 × A_n / 2, S_∞ = 2 S_0",dimension:"D = ln(4)/ln(2) = 2.0",generatorRule:"Итерационное наложение уменьшенных вдвое квадратов на все 4 угла каждого квадрата предыдущего поколения",description:"Классический конструктивный фрактал. В пределе площадь покрываемой области в точности равна удвоенной площади начального квадрата, а периметр стремится к бесконечности.",phiPiRelation:"При золотом скейлинге (1/φ вместо 1/2) квадраты не перекрываются, образуя совершенную квазикристаллическую мозаику.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1,zoom:3}},{id:"sierpinski-cross-v2",name:"Крест Серпинского 3D",englishName:"Sierpiński Cross 3D",category:"constructive",formula:"C_{n+1} = ⋃_{i=1}^5 T_i(C_n), |det(T_i)| = 1/9",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Взаимно перпендикулярные плоскости ковра Серпинского, образующие объемный пространственный крест",description:"Трехмерная ортогональная комбинация пересекающихся фракталов Серпинского, обладающая октаэдрической симметрией полостей.",phiPiRelation:"Сечения креста плоскостями под золотым углом arctan(φ) образуют правильные пятиугольные отверстия.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",boxFold:1.2,zoom:3.2}},{id:"sierpinski-pentagon-v2",name:"Пятиугольник Серпинского (Пентафлейк / Pentaflake)",englishName:"Pentaflake / Sierpiński Pentagon",category:"constructive",formula:"P_{n+1} = ⋃_{i=1}^5 R_{2π i/5}(P_n / (1 + φ))",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.67228",generatorRule:"Правильный пятиугольник замещается пятью меньшими пятиугольниками по углам с удалением центральной пятиконечной звезды",description:"Один из самых гармоничных планарных фракталов. Имеет врожденную 5-лучевую золотую симметрию D₅, невозможную в стандартных кристаллических решетках.",phiPiRelation:"Масштабный множитель строго равен 1/(1 + φ) = 1/φ² ≈ 0.381966! Чистейшее проявление золотого сечения.",enginePreset:{type:"icosahedral",compositeOp:"smoothUnion",phiMultiplier:1.61803398875,zoom:3}},{id:"hexaflake-v2",name:"Гексафрактал (Hexaflake / Снежинка Серпинского)",englishName:"Hexaflake",category:"constructive",formula:"H_{n+1} = ⋃_{i=1}^7 H_n / 3 (6 по периметру + 1 в центре)",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть уменьшенных копий правильного шестиугольника по периметру плюс один в центре",description:"Шестилучевой фрактальный кристалл, моделирующий рекурсивный рост ледяных снежинок в насыщенных парах воды.",phiPiRelation:"Периметр шестиугольника задан соотношением 6r; вписанные золотые спирали описывают микроканалы кристаллизации.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothUnion",boxFold:1.3,zoom:2.9}},{id:"ivezic-fractal-v2",name:"Фрактал Ивезича (Многомерный симплекс Серпинского)",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n + 1) / ln(2), n ≥ 1",dimension:"D = ln(n+1)/ln(2) (для n=4 D ≈ 2.3219, для n=6 D ≈ 2.807)",generatorRule:"Рекурсивное удаление инвертированных подсимплексов из правильного n-мерного симплекса",description:"Обобщение треугольника и тетраэдра Серпинского на n-мерные гиперпространства, открытое в фундаментальных трудах по фрактальной топологии.",phiPiRelation:"Сечения 5-мерного симплекса Ивезича ортогонально проецируются в золотые икосаэдры в ℝ³.",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothMorph",hybridBlend:.4,zoom:3.1}},{id:"levi-snowflake-v2",name:"Снежинка Леви",englishName:"Lévy Snowflake (C-Curve Boundary)",category:"constructive",formula:"S = ⋃_{i=1}^8 Lévy_i, Area = 2",dimension:"D_граница ≈ 1.9340, D_тело = 2.0",generatorRule:"Замкнутая область, заметаемая восемью сходящимися кривыми Леви, расположенными по периметру квадрата",description:"Удивительная фрактальная мозаика с бесконечной бахромой, способная самозамостить евклидову плоскость ℝ² без зазоров и перекрытий.",phiPiRelation:"Период разворота ветвей равен π/4; фрактальная граница имеет золотой масштаб самоподобия.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothCarve",zoom:3.1}},{id:"burning-ship-perpendicular-v2",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (Re(z_n) + i|Im(z_n)|)^2 + c",dimension:"D_граница = 2.0 (комплексная динамика)",generatorRule:"Модуль берется только от мнимой компоненты, сохраняя знак вещественной части",description:"Асимметричная модификация фрактала Burning Ship. Разрушает зеркальную симметрию, порождая вихревые струи и призрачные фрактальные корабли.",phiPiRelation:"Отношение периодов бифуркации мачт корабля сходится к константе Фейгенбаума δ = 4.6692 и золотому множителю φ.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",warpStrength:.35,zoom:3}},{id:"jesus-trigonometric-v2",name:"Фрактал Иисуса / Тригонометрический фрактал",englishName:"Jesus / Sine-Cosine Transcendental Fractal",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c · cos(z_n)",dimension:"D = 2.0 (трансцендентная динамика)",generatorRule:"Итерация тригонометрических комплексных функций с экспоненциальным ростом вдоль мнимой оси",description:"Трансцендентный фрактал комплексной динамики. Вдоль мнимой оси синус переходит в гиперболический sinh, создавая соборные арки и бесконечные колоннады.",phiPiRelation:"Период функции строго равен 2π; золотое сечение управляет шириной коридоров сходимости.",enginePreset:{type:"riemannZeta",hybridType:"mandelbulb",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3.2}},{id:"spider-fractal-v2",name:"Фрактал «Паук» (Spider Fractal)",englishName:"Spider Dynamical System",category:"algebraic_complex",formula:"z_{n+1} = z_n^2 + c_n, c_{n+1} = c_n / 2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Динамическая система с блуждающим параметром сдвига c_n, зависящим от текущей координаты орбиты",description:"Сложный алгебраический фрактал, где параметр c не статичен, а эволюционирует синхронно с точкой z, создавая длинные радиальные нити-ножки.",phiPiRelation:"Углы расхождения паучьих нитей кратны золотому углу 137.5° = 2π(1 - 1/φ).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",warpStrength:.3,zoom:3.1}},{id:"sherwood-carpet-v2",name:"Фрактал «Ковер Шервуда»",englishName:"Sherwood Algebraic Carpet",category:"algebraic_complex",formula:"z_{n+1} = (z_n^3 + c) / (1 + conjugate(z_n)^2)",dimension:"D ≈ 1.89",generatorRule:"Рациональное дробно-линейное отображение третьего порядка с комплексным сопряжением",description:"Алгебраический фрактал на основе рациональных отображений Римана, образующий кружевную вязь бесконечных арок и сводов.",phiPiRelation:"Комплексные полюса отображения распределены по окружности радиуса √φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothUnion",boxFold:1.15,zoom:2.9}},{id:"serafimski-newton-v2",name:"Фрактал Серафимского (Фазовый метод Ньютона)",englishName:"Serafimski Non-Linear Newton Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{i α} P(z_n) / P'(z_n), α = π/φ",dimension:"D = 2.0 (бассейны с общей границей Жюлиа)",generatorRule:"Модификация метода Ньютона с добавлением комплексного вращения шага на золотой фазовый угол α",description:"Введение золотой фазы заставляет прямолинейные траектории Ньютона закручиваться в вихревые спирали вокруг корней полинома, создавая фантастические завихрения.",phiPiRelation:"Фазовый угол сдвига α = π/φ ≈ 111.246° устраняет прямолинейные сингулярности и максимизирует хаос.",enginePreset:{type:"newtonBasins",compositeOp:"domainWarp",warpStrength:.45,zoom:3}},{id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"ẋ=(z-b)x-dy, ẏ=dx+(z-b)y, ż=c+az-z³/3-(x²+y²)(1+ez)+fzx³",dimension:"D_L ≈ 2.16 (размерность Ляпунова)",generatorRule:"Трехмерная система нелинейных дифференциальных уравнений с тороидально-сферической хаотической оболочкой",description:"Один из самых визуально совершенных аттракторов хаоса: траектории образуют сферу с центральной осью вращения и струйными выбросами на полюсах.",phiPiRelation:"Соотношение радиальной и аксиальной частот вращения сходится к золотой пропорции φ.",enginePreset:{type:"lorenzAttractor",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:3.3}},{id:"thomas-attractor",name:"Аттрактор Томаса (Циклический лабиринт)",englishName:"Thomas Cyclically Symmetric Attractor",category:"ifs_attractors",formula:"ẋ = sin(y) - bx, ẏ = sin(z) - by, ż = sin(x) - bz",dimension:"D_L ≈ 2.05",generatorRule:"Циклически симметричная 3D динамическая система с тригонометрическим связыванием координат",description:"Хаотический аттрактор с полной циклической C₃-симметрией, формирующий бесконечный пространственный лабиринт из плавных трубок.",phiPiRelation:"Период тригонометрических функций 2π; критическое значение затухания b_c ≈ 0.208186 связано с золотыми степенями.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothMorph",warpStrength:.25,zoom:3.1}},{id:"halvorsen-attractor",name:"Аттрактор Халворсена",englishName:"Halvorsen 3D Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = -ax - 4y - 4z - y², ẏ = -ay - 4z - 4x - z², ż = -az - 4x - 4y - x²",dimension:"D_L ≈ 2.22",generatorRule:"Квадратичная 3D система с трехлучевой циклической симметрией",description:"Трехмерный аттрактор с тремя раскрывающимися лепестками, по которым хаотически перескакивает фазовая траектория.",phiPiRelation:"Симметрия C₃ задает угол поворота 120° = 2π/3; фазовый объем сжимается со скоростью div V = -3a.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:3.2}},{id:"sprott-attractor",name:"Аттрактор Спротта",englishName:"Sprott Minimal Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = y + 2xy + xz, ẏ = 1 - 2x² + yz, ż = x - x² - y²",dimension:"D_L ≈ 2.09",generatorRule:"Минимальная система Клиффорда Спротта с пятью слагаемыми и одним параметром",description:"Элегантная минималистичная хаотическая система дифференциальных уравнений, открытая в 1994 году в ходе численного поиска простейших аттракторов.",phiPiRelation:"Спектр показателей Ляпунова (+, 0, -) удовлетворяет теореме Каплана-Йорке с золотым коэффициентом сжатия.",enginePreset:{type:"lorenzAttractor",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.35,zoom:3}},{id:"avalanche-dbm-v2",name:"Фрактал лавинного пробоя (DBM / Молния Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM)",category:"stochastic",formula:"p_i ∝ (∇Φ)^η, ∇²Φ = 0",dimension:"D ≈ 1.75 (для η = 1 D ≈ 1.71, для η = 2 D ≈ 1.45)",generatorRule:"Вероятностная модель Нимейера-Пьетронеро-Висмана (1984) для роста искровых разрядов в диэлектриках",description:"Физический стохастический фрактал, точно описывающий ветвление молний в атмосфере, фигуры Лихтенберга на плексигласе и древовидные эрозии.",phiPiRelation:"Углы бифуркации разрядных каналов имеют моду статистического распределения около золотого угла 137.5°.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",warpStrength:.45,zoom:3}},{id:"mandelbrot-multidrop",name:"Мультифрактальный каскад Мандельброта",englishName:"Mandelbrot Multiplicative Cascade",category:"stochastic",formula:"μ(B) = ∏_{k=1}^n W_{ε_k}, ⟨W⟩ = 1",dimension:"Спектр сингулярностей f(α) = inf_q [q α - τ(q)]",generatorRule:"Мультипликативное случайное деление энергии между дочерними ячейками турбулентности",description:"Модель Бенуа Мандельброта (1974) для описания перемежаемости развитой гидродинамической турбулентности Колмогорова.",phiPiRelation:"Максимум спектра размерностей f(α) приходится на точку золотого баланса потоков энергии.",enginePreset:{type:"quasicrystal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3.1}},{id:"hopf-fibration-manifold",name:"Расслоение Хопфа S³ → S²",englishName:"Hopf Fibration Topological Bundle",category:"topological_physical",formula:"h(z_0, z_1) = (2 z_0 conjugate(z_1), |z_0|² - |z_1|²) ∈ S²",dimension:"D_топологическая = 3, расслаивается окружностями S¹",generatorRule:"Отображение 3-сферы в 4D на двумерную сферу Римана, где прообраз каждой точки есть окружность Вилларсо",description:"Великое топологическое открытие Хайнца Хопфа (1931). Пространство заполнено зацепленными торами Клиффорда, не пересекающимися между собой.",phiPiRelation:"Каждые два кольца зацеплены ровно один раз (число зацепления Хопфа = 1); золотой угол скрутки волокон предотвращает резонансные узлы.",enginePreset:{type:"hopfFibration",compositeOp:"smoothUnion",zoom:3.2,rotX:.3,rotY:.25}},{id:"calabi-yau-manifold",name:"Многообразие Калаби — Яу",englishName:"Calabi-Yau 3-Fold Compactification",category:"topological_physical",formula:"z_1^5 + z_2^5 + z_3^5 + z_4^5 + z_5^5 - 5 ψ z_1 z_2 z_3 z_4 z_5 = 0",dimension:"6 действительных измерений (3 комплексных) в CP⁴",generatorRule:"Компактное кэлерово многообразие с нулевым первым классом Черна c_1 = 0 и метрикой Риччи-плоского пространства",description:"Фундаментальная геометрия скрытых микроизмерений в теории суперструн. 2D и 3D проекции сечений многообразия образуют гармонические складки.",phiPiRelation:"Параметр комплексной деформации ψ при золотом значении φ порождает конформную зеркальную симметрию фермионных поколений.",enginePreset:{type:"calabiYau",compositeOp:"smoothMorph",zoom:3.1,rotX:.4,rotY:.3}},{id:"costa-minimal-surface",name:"Минимальная поверхность Коста",englishName:"Costa Minimal Surface",category:"topological_physical",formula:"X(z) = Re ∫ (½(1 - g²), i/2(1 + g²), g) ω, H ≡ 0",dimension:"D_топологическая = 2, род g = 1 с тремя концами",generatorRule:"Представление Вейерштрасса с эллиптическими функциями Вейерштрасса ℘(z)",description:"Сенсация геометрии: в 1982 году Селсо Коста доказал существование полной вложенной минимальной поверхности рода 1, опровергнув столетнее убеждение о единственности катеноида и геликоида.",phiPiRelation:"Эллиптические периоды тора Коста ω_1, ω_2 находятся в точном соотношении золотого сечения φ.",enginePreset:{type:"neoviusMinimal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"rossler-hyperchaos",name:"4D Гиперхаотический аттрактор Рёсслера",englishName:"4D Hyperchaotic Rössler Attractor",category:"ifs_attractors",formula:"ẋ = -y - z, ẏ = x + ay + w, ż = b + xz, ẇ = -cz + dw",dimension:"D_фрактальная ≈ 3.18 (Два положительных показателя Ляпунова λ₁ > λ₂ > 0)",generatorRule:"Двойное складчатое растяжение фазового потока в четырёхмерном фазовом пространстве",description:"Открытие Отто Рёсслера (1979). В отличие от простого хаоса, гиперхаос имеет более одного направления экспоненциального разбегания фазовых траекторий, порождая многослойные вихревые мембраны.",phiPiRelation:"Спектральное расщепление бифуркаций удвоения периода подчиняется универсальной константе Фейгенбаума δ ≈ 4.669 и золотой пропорции φ.",enginePreset:{type:"rosslerHyperchaos",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35}},{id:"clifford-attractor-v2",name:"4D Аттрактор Клиффорда — Пиковера",englishName:"Clifford-Pickover 4D Dynamic Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D_хаусдорфа ≈ 2.45 в четырёхмерном пространстве параметров",generatorRule:"Нелинейное синусоидальное отображение Клиффорда с закруткой фазового угла",description:"Исследован Клиффордом Пиковером. Образует непрерывные бархатистые каустические ленты и тороидальные спирали бесконечной глубины.",phiPiRelation:"При золотых параметрах a = -1.4φ, b = 1.6/φ, c = 1.0φ система формирует квазипериодические 10-лепестковые симметрии Пенроуза.",enginePreset:{type:"cliffordAttractor",compositeOp:"smoothUnion",zoom:3,rotX:.3,rotY:.4}},{id:"abrikosov-vortex-lattice",name:"Квантовая вихревая решётка Абрикосова",englishName:"Abrikosov Superconducting Vortex Lattice",category:"topological_physical",formula:"∇ × B = j_s, ψ(r) = Δ(r) e^{iθ}, ∮ v_s · dl = 2πℏ/m",dimension:"D = 2 + 1 (Квантованное 2D треугольное поле флюксонов с продольной спиралью)",generatorRule:"Нобелевское открытие А. А. Абрикосова (1957). Вихри сверхпроводящего тока с квантом магнитного потока Φ₀ = h/2e",description:"В сверхпроводниках II рода магнитное поле проникает в виде квантованных нитей (флюксонов), образующих строгую гексагональную решетку с вихревыми сингулярностями.",phiPiRelation:"Отношение периодов решетки флюксонов к длине когерентности Гинзбурга-Ландау ξ при золотом спиральном шаге минимизирует свободную энергию Гиббса.",enginePreset:{type:"abrikosovLattice",compositeOp:"smoothUnion",zoom:3.2,rotX:.2,rotY:.15}},{id:"beltrami-pseudosphere",name:"Псевдосфера Бельтрами (Геометрия Лобачевского)",englishName:"Beltrami Pseudosphere Hyperbolic Surface",category:"topological_physical",formula:"x = sech(u) cos(v), y = sech(u) sin(v), z = u - tanh(u), K ≡ -1/R²",dimension:"D_гладкая = 2 с гиперболическим фрактальным краевым сингулярным ребром",generatorRule:"Поверхность вращения трактрисы вокруг своей асимптоты; локальная модель плоскости Лобачевского",description:"Эудженио Бельтрами (1868) впервые реализовал неевклидову геометрию Лобачевского на вещественной поверхности в ℝ³ с постоянной отрицательной гауссовой кривизной K = -1.",phiPiRelation:"Экспоненциальное сужение горловины трактрисы e^{-z} скейлится золотым показателем φ, формируя бесконечный раструб.",enginePreset:{type:"beltramiPseudosphere",compositeOp:"smoothUnion",zoom:2.9,rotX:.35,rotY:.2}},{id:"spin-foam-network",name:"Спиновая пена и сеть Пенроуза (LQG)",englishName:"Penrose Spin Network & Quantum Foam",category:"topological_physical",formula:"A(j_f, v_e) = ∏_f dim(j_f) ∏_v W_v(j_f, i_e), SU(2) Gauge Invariance",dimension:"D_планковская = 4 (Дискретная квантовая планковская геометрия пространства-времени l_P ≈ 1.6·10⁻³⁵ м)",generatorRule:"Петлевая квантовая гравитация (Ровелли, Смолин, Пенроуз): пространство состоит из квантованных ячеек объёма и площади",description:"Революционная концепция квантовой физики: на планковском масштабе непрерывное пространство исчезает, уступая место динамической сети спинов и топологической квантовой пене.",phiPiRelation:"Спектры операторов площади квантованы через постоянную Иммирци γ_BI = ln(2) / (π√3) и масштабное деление золотого узла.",enginePreset:{type:"spinFoamNetwork",compositeOp:"smoothUnion",zoom:3.1,rotX:.5,rotY:.4}},{id:"ramanujan-tau-resonator",name:"Модулярный резонатор Рамануджана Δ(τ)",englishName:"Ramanujan Modular Tau Resonator",category:"algebraic_complex",formula:"Δ(τ) = (2π)¹² q ∏_{n=1}^∞ (1 - q^n)²⁴ = ∑_{n=1}^∞ τ(n) q^n, q = e^{2π i τ}",dimension:"Вес k = 12 модулярной формы над группой SL(2, ℤ)",generatorRule:"Параболическая модулярная форма Рамануджана с 24 каспами (корнями степени 24)",description:"Жемчужина теории чисел Сринивасы Рамануджана (1916). Функция τ(n) управляет 24-мерной решёткой Лича и теорией бозонных струн в 26 измерениях.",phiPiRelation:"Непрерывная дробь Рамануджана R(q) при q = e^{-2π} вычисляется строго через золотое сечение: R(e^{-2π}) = √(φ√5) - φ.",enginePreset:{type:"ramanujanTau",compositeOp:"smoothUnion",zoom:2.9,rotX:.4,rotY:.25}},{id:"belousov-zhabotinsky-waves",name:"Спиральные волны Белоусова — Жаботинского",englishName:"Belousov-Zhabotinsky Chemical Spiral Waves",category:"topological_physical",formula:"∂u/∂t = D_u ∇²u + u(1 - u) - f v (u - q)/(u + q), ∂v/∂t = D_v ∇²v + u - v",dimension:"D = 2 + 1 (Автоволновой фазовый спиральный фронт в активной нелинейной среде)",generatorRule:"Самоорганизующаяся нелинейная реакция окисления малоновой кислоты бромноватой кислотой",description:"Триумф синергетики и физики неравновесных процессов (Б. П. Белоусов 1951, А. М. Жаботинский 1964). Автоволновые ревербераторы образуют раскручивающиеся спирали в пространстве.",phiPiRelation:"Шаг спиральных волн самоорганизуется в золотую логарифмическую спираль r(θ) = a e^{θ cot(φ)}, минимизируя диссипацию энтропии.",enginePreset:{type:"belousovWaves",compositeOp:"smoothUnion",zoom:3,rotX:.35,rotY:.3}},{id:"mandelbulb-classic",name:"Мандельбульб (классический)",englishName:"Classic Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c, r = |z|, θ = atan2(√(x²+y²), z), φ = atan2(y, x)",dimension:"D ≈ 3.0 (граница) ",generatorRule:"Сферические координаты с возведением в степень 8",description:"Трёхмерный аналог множества Мандельброта, построенный путём обобщения формулы z²+c на сферические координаты со степенью 8.",phiPiRelation:"Степень 8 = 2³ связана с золотым сечением через итеративное удвоение; при замене 8 на φ·5 форма становится наиболее «золотой».",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",zoom:3.2,rotX:.4,rotY:.3,iterations:12}},{id:"mandelbulb-hybrid",name:"Мандельбульб × Спиральный туннель",englishName:"Mandelbulb × Spiral Tunnel Hybrid",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c ⊕ log-spiral fold",dimension:"D ≈ 2.8 (гибридная граница)",generatorRule:"Гладкое морфирование Мандельбульба с логарифмической спиральной складкой",description:"Гибрид классического Мандельбульба и спирального туннеля, создающий эффект закрученных коридоров внутри фрактала.",phiPiRelation:"Золотой угол скрутки 137.5° = 2π/φ² определяет шаг спирального складывания.",enginePreset:{type:"mandelbulb",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.4,zoom:3,rotX:.35}},{id:"quaternion-julia-slice",name:"Кватернионное множество Жюлиа (срез ℍ)",englishName:"Quaternion Julia Set (ℍ Slice)",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q ∈ ℍ, c = фиксированный кватернион",dimension:"D ≈ 2.5 (граница 3D-сечения)",generatorRule:"Итерация квадрата кватерниона с добавлением константы c ∈ ℍ",description:"4D множество Жюлиа в кватернионном пространстве. 3D-сечение показывает невероятно сложные переплетающиеся поверхности.",phiPiRelation:"Кватернионные компоненты c = (1/φ, 1/φ², 0, 0) порождают наиболее симметричные золотые сечения.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.5,iterations:10}},{id:"apollonian-packing",name:"Аполлониева упаковка сфер",englishName:"Apollonian Sphere Packing",category:"constructive",formula:"Кривизна k_{n+1} = k_1 + k_2 + k_3 + k_4 ± 2√(k_1 k_2 + k_2 k_3 + k_3 k_4 + k_4 k_1)",dimension:"D ≈ 2.47 (граница упаковки)",generatorRule:"Теорема Дезаржа об инверсиях: вписать максимальную сферу в зазор между 4 взаимно касающимися сферами",description:"Фрактальная упаковка сфер, где каждый зазор между 4 касающимися сферами заполняется новой максимальной сферой.",phiPiRelation:"Отношения кривизн соседних сфер в пределе сходятся к степеням золотого сечения.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",zoom:3.5,rotX:.3,rotY:.4,iterations:8}},{id:"spiral-tunnel-infinite",name:"Бесконечный логарифмический туннель φ",englishName:"Infinite Logarithmic Phi Zoom Tunnel",category:"geometric_curves",formula:"r(θ) = a · φ^(2θ/π), самоподобие при повороте на 2π/ln(φ)",dimension:"D = 1 + 2/ln(φ) ≈ 3.87",generatorRule:"Логарифмическая спираль с золотым показателем, развёрнутая в 3D-туннель",description:"Бесконечный туннель, стенки которого образованы золотой логарифмической спиралью. При зуме внутрь открывается бесконечная самоподобная структура.",phiPiRelation:"Показатель спирали = 2/ln(φ) ≈ 4.15; поворот на золотой угол 137.5° переводит туннель в себя.",enginePreset:{type:"spiralTunnel",compositeOp:"smoothMorph",zoom:2.5,rotX:0,rotY:0}},{id:"mandelbox-golden",name:"Мандельбокс золотого сложения",englishName:"Golden Mandelbox",category:"multidimensional",formula:"z_{n+1} = scale · fold(z_n) + c, fold: boxFold + sphereFold",dimension:"D ≈ 2.7 (зависит от scale)",generatorRule:"Складывание пространства: box fold (отражение) + sphere fold (инверсия сферы) + масштабирование",description:"Фрактал, полученный многократным складыванием 3D-пространства через комбинацию кубического и сферического отражений с золотым масштабом.",phiPiRelation:"При scale = φ² = 2.618... структура приобретает максимальную золотую симметрию.",enginePreset:{type:"mandelbox",compositeOp:"smoothMorph",zoom:3,boxFold:1,sphereFold:.5,iterations:12}},{id:"gyroid-tpms",name:"Золотая гироидная поверхность (TPMS)",englishName:"Golden Gyroid Minimal Surface",category:"topological_physical",formula:"G(x,y,z) = sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2 (нулевая средняя кривизна H ≡ 0)",generatorRule:"Трёхпериодическая минимальная поверхность Шона с золотым масштабированием",description:"Одна из трёх классических TPMS-поверхностей. Не имеет прямых линий, самопересечений; разделяет пространство на два лабиринтных канала.",phiPiRelation:"Периоды решётки масштабированы золотым сечением; каналы образуют золотые спиральные траектории.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.5,rotX:.5,rotY:.3}},{id:"prime-spiral-sachs",name:"Спираль простых Сакса — Улама",englishName:"Sachs-Ulam Prime Spiral",category:"algebraic_complex",formula:"p_n = n² + n + 41 (золотой многочлен Эйлера), размещение на ультра-спирали",dimension:"D ≈ 1 (асимптотическая плотность ~ 1/ln(n))",generatorRule:"Размещение простых чисел на полярной сетке r = √n, θ = 2π√n с золотым смещением",description:"Визуализация распределения простых чисел на плоскости, показывающая удивительные спиральные паттерны, связанные с золотым сечением.",phiPiRelation:"Золотой угол 2π/φ между последовательными витками минимизирует перекрытия и максимизирует видимость паттернов.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"poincare-homology",name:"Гомологическая сфера Пуанкаре",englishName:"Poincaré Homology Sphere",category:"topological_physical",formula:"S³/Γ, Γ = группа икосаэдра порядка 120",dimension:"D = 3 (замкнутое 3-многообразие с π₁ = Γ₁₂₀)",generatorRule:"Факторизация 3-сферы по группе икосаэдра: каждая точка идентифицируется с 119 другими",description:"Единственное известное замкнутое 3-многообразие с группами гомологий как у сферы, но нетривиальной фундаментальной группой порядка 120.",phiPiRelation:"Группа икосаэдра порядка 120 = 5! связана с φ через симметрии додекаэдра: |Γ| = 4π·60/(2π/φ).",enginePreset:{type:"poincareSphere",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:8}},{id:"gaussian-primes-lattice",name:"Решётка гауссовых простых Z[i]",englishName:"Gaussian Primes Lattice Z[i]",category:"algebraic_complex",formula:"p = a² + b² простое ⟺ p ≡ 1 (mod 4) или p = a+bi, N(p) = a²+b² простое в ℤ",dimension:"D ≈ 1.36 (асимптотическая плотность в ℂ)",generatorRule:"Размещение гауссовых простых на комплексной плоскости с золотым масштабированием",description:"Простые числа в кольце гауссовых целых Z[i]. Их распределение на комплексной плоскости образует удивительные решётчатые паттерны.",phiPiRelation:"Золотое масштабирование координат (a·φ, b·φ) выявляет скрытые спиральные симметрии в распределении.",enginePreset:{type:"gaussianPrimes",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"euler-totient-spiral",name:"Спираль функции Эйлера φ(n)",englishName:"Euler Totient φ(n) Archimedean Spiral",category:"algebraic_complex",formula:"φ(n) = n ∏_{p|n}(1 - 1/p), размещение на спирали Архимеда r = n",dimension:"D ≈ 1.5 (фрактальная размерность графика)",generatorRule:"Значение φ(n) кодирует высоту/цвет точки на архимедовой спирали",description:"Визуализация функции Эйлера на спиральной сетке, показывающая удивительные лучевые и радиальные паттерны в распределении значений.",phiPiRelation:"Среднее отношение φ(n)/n → 6/π²; золотой угол размещения φ(n) выявляет скрытые модулярные симметрии.",enginePreset:{type:"eulerTotientSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"clifford-torus-4d",name:"4D Тор Клиффорда (стереографическая проекция)",englishName:"4D Clifford Torus (Stereo Projection)",category:"multidimensional",formula:"(x₁,x₂,x₃,x₄) = (cos θ, sin θ, cos φ, sin φ) ⊂ S³ ⊂ ℝ⁴",dimension:"D = 2 (плоский тор в 4D, проекция в 3D)",generatorRule:"Стереографическая проекция из S³ в ℝ³ плоского тора (cos θ, sin θ, cos φ, sin φ)",description:"Единственный плоский (нулевая гауссова кривизна) тор, вложенный в 3-сферу. При стереографической проекции образует тор Дюпена.",phiPiRelation:"Золотое соотношение радиусов R/r = φ порождает наиболее гармоничную проекцию с икосаэдрическими сечениями.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"quaternion-mandelbrot-v2",name:"4D Кватернионное множество Мандельброта",englishName:"4D Quaternion Mandelbrot Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q, c ∈ ℍ",dimension:"D = 3 (граница 4D тела)",generatorRule:"Итерация квадрата кватерниона: q² = (a²-b·b̄, 2ab) для q = a + bi + cj + dk",description:"Полное 4D множество Мандельброта в кватернионном пространстве. 3D-сечения показывают бесконечное разнообразие форм.",phiPiRelation:"Кватернионные оси масштабированы золотым сечением; сечения при золотых углах обнаруживают максимальную сложность.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:10}},{id:"burning-ship-3d-v2",name:"3D Горящий корабль",englishName:"3D Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D ≈ 2.0 (граница)",generatorRule:"Модификация Мандельброта: абсолютные значения действительной и мнимой частей перед возведением в квадрат",description:"Фрактал, открытый Майклом Мандельбротом. В отличие от обычного Мандельброта, имеет характерную форму перевёрнутого корабля в пламени.",phiPiRelation:"Золотое масштабирование итераций выявляет самоподобные «паруса» горящего корабля.",enginePreset:{type:"burningShip3D",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4,iterations:12}},{id:"newton-basins-3d-v2",name:"3D Бассейны Ньютона-Рафсона",englishName:"3D Newton-Raphson Basins of Attraction",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n), f(z) = z³ - 1 (корни: 1, e^{2πi/3}, e^{4πi/3})",dimension:"D = 2 (границы бассейнов — фрактальные кривые)",generatorRule:"Итерация метода Ньютона для z³-1; каждая точка окрашивается по корню, к которому сходится",description:"Визуализация фрактальных границ бассейнов притяжения метода Ньютона. Границы между бассейнами образуют бесконечно сложные фрактальные кривые.",phiPiRelation:"Углы между бассейнами 120° = 2π/3; золотое возмущение начальных условий выявляет скрытую φ-симметрию.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:16}},{id:"jerusalem-cube-v2",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"constructive",formula:"Куб с крестами золотого сечения: удаление прямоугольников с отношением сторон φ",dimension:"D ≈ 2.58",generatorRule:"В каждой грани куба вырезается золотой крест, затем процесс повторяется рекурсивно",description:"Фрактал, построенный на кубе с золотыми пропорциями. В каждой грани вырезается крест, стороны которого относятся как φ:1.",phiPiRelation:"Все пропорции куба выражены через φ: рёбра креста, глубина вырезов и масштаб итераций.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",zoom:3,rotX:.35,rotY:.4,iterations:5}},{id:"hofstadter-butterfly-3d-v2",name:"Квантовая бабочка Хофштадтера",englishName:"Hofstadter Butterfly Energy Spectrum",category:"topological_physical",formula:"cos(q_x) + cos(q_y) = E, q_x = 2παm/n (магнитный поток α через ячейку)",dimension:"D ≈ 1.5 (фрактальная структура энергетических зон)",generatorRule:"Модель Харпера: квантовая частица на 2D решётке в однородном магнитном поле с рациональным потоком α = p/q",description:"Фрактальный энергетический спектр электрона в двумерной решётке с магнитным полем. Каждая «бабочка» — разрешённая зона энергии.",phiPiRelation:"При α = 1/φ (золотой поток) спектр демонстрирует максимальную фрактальную сложность и самоподобие.",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4}},{id:"antoine-necklace-v2",name:"Ожерелье Антуана (дикие зацепления)",englishName:"Antoine's Necklace Wild Linking",category:"topological_physical",formula:"C = ∩_n A_n, A_{n+1} ⊂ A_n, каждое звено зацеплено с соседними",dimension:"D ≈ 1.0 (канторово множество торов)",generatorRule:"Каждый тор заменяется на кольцо меньших торов, попарно зацепленных друг с другом",description:"Первый пример «дикого» вложения канторова множества в ℝ³. Топологически неэквивалентно стандартному канторову множеству.",phiPiRelation:"Количество торов на каждом уровне = 2·φ ≈ 3.236 → округление до 3 даёт наиболее плотное зацепление.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3,rotX:.4,rotY:.3,iterations:5}}],L2=({isOpen:u,onClose:f,onApplyPreset:d})=>{var I;const[c,y]=O.useState("catalog"),[_,j]=O.useState("all"),[k,M]=O.useState(""),[m,L]=O.useState(li[0]),[C,U]=O.useState(null),B=O.useMemo(()=>li.filter(X=>{const re=_==="all"||X.category===_,b=k.toLowerCase().trim();if(!b)return re;const q=X.name.toLowerCase().includes(b)||X.englishName.toLowerCase().includes(b)||X.formula.toLowerCase().includes(b)||X.dimension.toLowerCase().includes(b)||X.description.toLowerCase().includes(b);return re&&q}),[_,k]);if(!u)return null;const Q=X=>{d(X.enginePreset,X.name),U(X.id),setTimeout(()=>{U(null),f()},450)},ee=X=>{switch(X){case"geometric_curves":return i.jsx(zr,{className:"w-4 h-4"});case"constructive":return i.jsx(un,{className:"w-4 h-4"});case"algebraic_complex":return i.jsx(Xh,{className:"w-4 h-4"});case"multidimensional":return i.jsx(hh,{className:"w-4 h-4"});case"ifs_attractors":return i.jsx(ii,{className:"w-4 h-4"});case"stochastic":return i.jsx(fn,{className:"w-4 h-4"});case"topological_physical":return i.jsx(hd,{className:"w-4 h-4"})}};return i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:i.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[i.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:i.jsx(cn,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",i.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["8 Семейств · ",li.length," Канонических Фракталов"]})]}),i.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),i.jsx("button",{id:"btn-atlas-modal-close",onClick:f,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:i.jsx(ri,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[i.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>y("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[i.jsx(un,{className:"w-4 h-4"}),"Атлас и Таксономия (",li.length,")"]}),i.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>y("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[i.jsx(Xs,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),i.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>y("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${c==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[i.jsx(Ys,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),c==="catalog"&&i.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[i.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[i.jsx("div",{className:"p-3 border-b border-slate-800",children:i.jsxs("div",{className:"relative",children:[i.jsx(i2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),i.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:k,onChange:X=>M(X.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),k&&i.jsx("button",{onClick:()=>M(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),i.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[i.jsxs("button",{onClick:()=>j("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${_==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",li.length,")"]}),rd.map(X=>{var re;return i.jsxs("button",{onClick:()=>j(X.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${_===X.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[ee(X.id),i.jsx("span",{children:((re=X.title.split(".")[1])==null?void 0:re.trim())||X.title})]},X.id)})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:B.length===0?i.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):B.map(X=>{var b;const re=(m==null?void 0:m.id)===X.id;return i.jsxs("button",{id:`btn-fractal-${X.id}`,onClick:()=>L(X),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${re?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[i.jsxs("div",{className:"flex items-center justify-between w-full",children:[i.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:X.name}),i.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(b=X.dimension.split("≈")[0])==null?void 0:b.replace("D = ","D=")})]}),i.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[i.jsx("span",{className:"truncate max-w-[200px]",children:X.englishName}),i.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:X.formula})]})]},X.id)})})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:m?i.jsxs("div",{className:"space-y-6 max-w-3xl",children:[i.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[ee(m.category),i.jsx("span",{children:(I=rd.find(X=>X.id===m.category))==null?void 0:I.title})]}),i.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:m.name}),i.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:m.englishName})]}),i.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>Q(m),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:C===m.id?i.jsxs(i.Fragment,{children:[i.jsx(xd,{className:"w-4 h-4 text-emerald-300"}),i.jsx("span",{children:"Активировано в 3D!"})]}):i.jsxs(i.Fragment,{children:[i.jsx(_d,{className:"w-4 h-4 fill-white"}),i.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[i.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),i.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:m.formula})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[i.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),i.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:m.dimension})]})]}),m.generatorRule&&i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[i.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),i.jsx("div",{className:"text-xs font-mono text-cyan-300",children:m.generatorRule})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),i.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:m.description})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[i.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[i.jsx(Xs,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),i.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:m.phiPiRelation})]}),i.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[i.jsxs("span",{className:"flex items-center gap-1.5",children:[i.jsx(Ys,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",i.jsx("strong",{className:"text-slate-200",children:m.enginePreset.type}),m.enginePreset.hybridType&&i.jsxs(i.Fragment,{children:[" + ",i.jsx("strong",{className:"text-slate-200",children:m.enginePreset.hybridType})]})]}),i.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:m.enginePreset.compositeOp})]})]}):i.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),c==="manifest"&&i.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[i.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[i.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[i.jsx(Xs,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),i.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",i.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[i.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),i.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",i.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",i.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[i.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),i.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[i.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),i.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),i.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[i.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[i.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),i.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),i.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[i.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),i.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),c==="technologies"&&i.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[i.jsxs("div",{children:[i.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[i.jsx(Ys,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),i.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[i.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:i.jsx(l2,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[i.jsxs("li",{children:[i.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),i.jsxs("li",{children:[i.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),i.jsxs("li",{children:[i.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),i.jsxs("li",{children:[i.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),i.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),i.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[i.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:i.jsx(bd,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[i.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),i.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),i.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),i.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[i.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:i.jsx(ii,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[i.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),i.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),i.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),i.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[i.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:i.jsx(yd,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[i.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),i.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),i.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),i.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),i.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Zh,{className:"w-4 h-4 text-slate-400"}),i.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),i.jsx("button",{onClick:f,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},B2=({params:u,onToggleProbe:f,onToggleMacro:d})=>{if(!u.probeActive)return null;const c=Math.sqrt((u.camPosX??0)**2+(u.camPosY??0)**2+(u.camPosZ??0)**2),y=Math.max(.001,c/(u.zoom||3)).toFixed(4),_=u.slicePlane?((.5-u.slicePlane)*3.5).toFixed(3):"OFF";return i.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[i.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:i.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[i.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),i.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),i.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:i.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),i.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),i.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:u.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),i.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[i.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[i.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[i.jsx(yd,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),i.jsx("button",{onClick:f,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),i.jsxs("span",{className:"text-emerald-300 font-mono",children:[y," u"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),i.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(u.camPosX??0).toFixed(2)," Y:",(u.camPosY??0).toFixed(2)," Z:",(u.camPosZ??0).toFixed(2)]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),i.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[u.sliceAxis||"golden"," (",_,")"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-slate-500",children:"Модальность:"}),i.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:u.renderStyle||"solid"})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),i.jsxs("span",{className:"text-indigo-300 font-mono",children:[u.octaveLayers||2,"L · k=",u.smoothK??.35]})]})]}),i.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:i.jsx("button",{onClick:d,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${u.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:u.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),i.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[i.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[i.jsx(ii,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),i.jsx("span",{className:"text-slate-600",children:"|"}),i.jsxs("span",{children:["RotX: ",u.rotX.toFixed(2)," rad"]}),i.jsxs("span",{children:["RotY: ",u.rotY.toFixed(2)," rad"]}),i.jsx("span",{className:"text-slate-600",children:"|"}),i.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",u.phiMultiplier.toFixed(5)]})]})]})},od=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:fn,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:bd,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:ii,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:Hh,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:Eh,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:hd,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:Uh,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],U2=({currentSpecimen:u,historyQueue:f,currentIndex:d,onSelectSpecimen:c,onNext:y,onPrev:_,renderStyle:j,onSelectRenderStyle:k,scrollMode:M,onToggleScrollMode:m,isOpen:L,onToggleOpen:C})=>{const U=O.useRef(null);return i.jsx(i.Fragment,{children:i.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${L?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:i.jsx("div",{className:"flex items-stretch",children:i.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[i.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:i.jsx(t2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),i.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),i.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:m,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${M==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:M==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:M==="feed"?i.jsxs(i.Fragment,{children:[i.jsx(vd,{className:"w-3 h-3 text-amber-300"}),i.jsx("span",{children:"Лента"})]}):i.jsxs(i.Fragment,{children:[i.jsx(b2,{className:"w-3 h-3"}),i.jsx("span",{children:"Зум"})]})})]}),i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsx("div",{className:"flex items-center justify-between",children:i.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",od.length,")"]})}),i.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:od.map(B=>{const Q=B.icon,ee=j===B.id;return i.jsxs("button",{id:`select-render-style-${B.id}-btn`,onClick:()=>k(B.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${ee?B.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:B.desc,children:[i.jsx(Q,{className:"w-3 h-3 shrink-0"}),i.jsx("span",{className:"truncate",children:B.shortLabel})]},B.id)})})]}),i.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[i.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",f.length,")"]}),i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx("button",{id:"feed-ribbon-prev-btn",onClick:_,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:i.jsx(Mh,{className:"w-3 h-3"})}),i.jsx("button",{id:"feed-ribbon-next-btn",onClick:y,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:i.jsx(Nh,{className:"w-3 h-3"})})]})]}),i.jsx("div",{ref:U,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:f.map((B,Q)=>{const ee=B.id===(u==null?void 0:u.id)||Q===d;return i.jsxs("button",{id:`feed-item-${Q}-btn`,onClick:()=>c(B),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${ee?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[i.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",B.generation||Q+1]}),i.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:B.name})]}),ee&&i.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),i.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[i.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:B.compositeOp||"hybrid"}),i.jsxs("span",{className:"truncate text-neutral-400",children:[B.type," + ",B.hybridType||B.type]})]})]},B.id||Q)})}),i.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[i.jsx("span",{children:"Скролл мыши / жест"}),i.jsx("span",{className:"text-amber-300/90 font-semibold",children:M==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})};function sd(u){switch(u){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class G2{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(f=.65,d="phi432"){if(this.isRunning){this.setVolume(f),this.setTuning(d);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const c=window.AudioContext||window.webkitAudioContext;this.ctx=new c,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=f,this.tuningMode=d,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,f*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(c){console.warn("AudioContext initialization deferred or unavailable",c)}}getChordFrequenciesForFamily(f,d){const c=1.61803398875;if(f==="sacred")return[{ratio:.5,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:c,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:c*c*.5,wave:"triangle",vol:.08,pan:.2,role:"shimmer"}];if(f==="complex")return[{ratio:.5,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2,wave:"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(f==="minimal")return[{ratio:.75,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2),wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:c*1.2,wave:"triangle",vol:.06,pan:.35,role:"shimmer"}];if(f==="primes"){const y=1.1413470000000001,_=1+21.022/100,j=1+25.0108/100;return[{ratio:.5,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:y,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:_,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:j,wave:"triangle",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5,wave:"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(f,d){if(!this.ctx||!this.globalFilter)return;const c=sd(f),y=d?sd(d):c,_=108,j=this.ctx.currentTime,k=[...this.voices];this.voices=[],k.forEach(L=>{try{L.gain.gain.cancelScheduledValues(j),L.gain.gain.setValueAtTime(L.gain.gain.value,j),L.gain.gain.exponentialRampToValueAtTime(1e-4,j+.35),setTimeout(()=>{var C;try{L.osc.stop(),L.osc.disconnect(),L.filter.disconnect(),(C=L.panner)==null||C.disconnect(),L.gain.disconnect()}catch{}},380)}catch{}});const m=this.getChordFrequenciesForFamily(c,this.tuningMode).map((L,C)=>{const U=this.ctx.createOscillator(),B=this.ctx.createGain(),Q=this.ctx.createBiquadFilter(),ee=(C%2===0?.618:-.618)*.5,I=_*L.ratio+ee;U.type=L.wave,U.frequency.setValueAtTime(I,j),B.gain.setValueAtTime(1e-4,j),B.gain.exponentialRampToValueAtTime(L.vol,j+1.2),Q.type="lowpass",Q.frequency.setValueAtTime(450+C*80,j),Q.Q.setValueAtTime(1.2,j),U.connect(Q);let X=Q,re;return this.ctx.createStereoPanner&&(re=this.ctx.createStereoPanner(),re.pan.setValueAtTime(L.pan,j),Q.connect(re),X=re),X.connect(B),B.connect(this.globalFilter),U.start(j),{osc:U,gain:B,filter:Q,panner:re,baseFreqRatio:L.ratio,role:L.role}});if(d&&d!==f){const L=this.getChordFrequenciesForFamily(y,this.tuningMode),C=L[2]||L[1],U=this.ctx.createOscillator(),B=this.ctx.createGain(),Q=this.ctx.createBiquadFilter();U.type="sine",U.frequency.setValueAtTime(_*C.ratio,j);const ee=Math.max(1e-4,this.currentHybridBlend*.22);B.gain.setValueAtTime(1e-4,j),B.gain.exponentialRampToValueAtTime(ee,j+1.5),Q.type="bandpass",Q.frequency.setValueAtTime(_*C.ratio*1.5,j),Q.Q.setValueAtTime(2,j),U.connect(Q);let I=Q,X;this.ctx.createStereoPanner&&(X=this.ctx.createStereoPanner(),X.pan.setValueAtTime(.45,j),Q.connect(X),I=X),I.connect(B),B.connect(this.globalFilter),U.start(j),m.push({osc:U,gain:B,filter:Q,panner:X,baseFreqRatio:C.ratio,role:"hybrid"})}this.voices=m}updateParams(f){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const d=this.ctx.currentTime,c=f.phiMultiplier||1.618034,y=Math.max(.08,Math.min(16,f.zoom||3)),_=Math.max(.1,Math.min(2,f.morphSpeed||.45)),j=Math.max(0,Math.min(1,f.hybridBlend||0));if(f.type!==this.currentFractalType||f.hybridType&&f.hybridType!==this.currentHybridType){this.currentFractalType=f.type,this.currentHybridType=f.hybridType||f.type,this.currentHybridBlend=j,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const k=Math.max(260,Math.min(980,380+(4-Math.min(y,4))*80+_*120));this.globalFilter.frequency.setTargetAtTime(k,d,.15);const M=Math.max(54,Math.min(240,108/Math.max(.5,y*.6)));this.cavityResonator.frequency.setTargetAtTime(M,d,.2);const m=108,L=(c-1.618034)*80,C=Math.sin(f.rotX||0)*.4;this.voices.forEach((U,B)=>{const Q=m*U.baseFreqRatio,ee=U.role==="golden"||U.role==="shimmer"?L:L*.3;if(U.osc.frequency.setTargetAtTime(Q+ee,d,.15),U.panner){const I=B%2===0?.25:-.25,X=Math.max(-.85,Math.min(.85,I+C));U.panner.pan.setTargetAtTime(X,d,.12)}if(U.role==="hybrid"){const I=Math.max(1e-4,j*.2);U.gain.gain.setTargetAtTime(I,d,.1)}}),f.audioVolume!==void 0&&f.audioVolume!==this.currentVolume&&this.setVolume(f.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const f=this.ctx.currentTime,d=216;[d*1,d*1.25,d*1.5,d*(1.618034*1.25)].forEach((y,_)=>{if(!this.ctx)return;const j=this.ctx.createOscillator(),k=this.ctx.createGain(),M=this.ctx.createBiquadFilter();j.type="sine",j.frequency.setValueAtTime(y,f+_*.05),M.type="lowpass",M.frequency.setValueAtTime(950,f),k.gain.setValueAtTime(1e-4,f+_*.05),k.gain.exponentialRampToValueAtTime(.05/(_+1),f+_*.05+.08),k.gain.exponentialRampToValueAtTime(1e-5,f+_*.05+2.8),j.onended=()=>{try{j.disconnect(),M.disconnect(),k.disconnect()}catch{}},j.connect(M),M.connect(k),k.connect(this.globalFilter),j.start(f+_*.05),j.stop(f+_*.05+3)})}catch{}}setVolume(f){if(this.currentVolume=Math.max(0,Math.min(1,f)),!this.masterGain||!this.ctx)return;const d=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(d,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(f){this.tuningMode!==f&&(this.tuningMode=f,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const f=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(f),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,f),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,f+.3);const d=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var c,y,_,j,k;this.stopTimeout=null,d.forEach(M=>{var m;try{M.osc.stop(),M.osc.disconnect(),M.filter.disconnect(),(m=M.panner)==null||m.disconnect(),M.gain.disconnect()}catch{}});try{(c=this.globalFilter)==null||c.disconnect(),(y=this.cavityResonator)==null||y.disconnect(),(_=this.compressor)==null||_.disconnect(),(j=this.masterGain)==null||j.disconnect(),(k=this.ctx)==null||k.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(f){console.warn("Error stopping audio",f)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const ra=new G2,H2={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"gold-obsidian",iterations:20,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.3,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function F2(){const[u]=O.useState(()=>new M2),[f,d]=O.useState(H2),[c,y]=O.useState(null),[_,j]=O.useState(65),[k,M]=O.useState(!1),[m,L]=O.useState(!1),[C,U]=O.useState("idle"),B=O.useRef(null),Q=O.useRef(0),[ee,I]=O.useState("auto"),[X,re]=O.useState(!1),[b,q]=O.useState(!1),[ve,be]=O.useState(!1),[ae,je]=O.useState(!1),[we,Qe]=O.useState(!1),[Ge,He]=O.useState(!1),[Ke,Xe]=O.useState("feed"),[de,N]=O.useState(!1),[E,Z]=O.useState([]),[W,ue]=O.useState(new Set),x=O.useCallback(()=>{},[]),[T,Y]=O.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),H=O.useCallback(G=>{y(G),j(G.affinityScore);const F=(u==null?void 0:u.suggestRenderStyle())||"solid";d(V=>({...V,type:G.type,hybridType:G.hybridType,tertiaryType:G.tertiaryType,compositeOp:G.compositeOp,hybridBlend:G.hybridBlend,tertiaryBlend:G.tertiaryBlend,smoothK:G.smoothK,warpStrength:G.warpStrength,octaveLayers:G.octaveLayers,boxFold:G.boxFold,sphereFold:G.sphereFold,interiorCut:G.interiorCut,paletteId:G.palette.id,customPalette:G.palette,iterations:G.iterations,phiMultiplier:G.phiMultiplier,morphSpeed:G.morphSpeed,glowIntensity:G.glowIntensity,zoom:G.zoom,renderStyle:F})),ra.getActive()&&ra.playSpecimenTransitionChord()},[]);O.useEffect(()=>{if(!u)return;const G=window.location.hash.slice(1);if(G){const V=new URLSearchParams(G),le=V.get("type"),fe=V.get("hybrid"),Be=V.get("tertiary"),ze=V.get("op");if(le){const rt=$t.find(gt=>gt.id===V.get("palette"))||$t[0],Ce={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:V.get("name")||`Фрактал ${le}`,type:le,hybridType:fe||le,tertiaryType:Be||"riemannZeta",compositeOp:ze||"smoothUnion",hybridBlend:parseFloat(V.get("blend")||"0.35"),tertiaryBlend:parseFloat(V.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(V.get("smoothK")||"0.35"),warpStrength:parseFloat(V.get("warp")||"0.25"),octaveLayers:parseInt(V.get("octaves")||"2"),boxFold:parseFloat(V.get("boxFold")||"1.2"),sphereFold:parseFloat(V.get("sphereFold")||"0.65"),interiorCut:parseFloat(V.get("interiorCut")||"0.0"),palette:rt,iterations:parseInt(V.get("iterations")||"20"),phiMultiplier:parseFloat(V.get("phi")||"1.61803398875"),morphSpeed:parseFloat(V.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(V.get("glow")||"1.1"),zoom:parseFloat(V.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};H(Ce),window.history.replaceState(null,"",window.location.pathname);return}}const F=u.breedNextSpecimen();H(F)},[u,H]),O.useEffect(()=>(f.enableAudio?ra.start(f.audioVolume??.65,f.audioTuning??"phi432"):ra.stop(),()=>{ra.stop()}),[f.enableAudio]),O.useEffect(()=>{f.enableAudio&&(f.audioTuning&&ra.setTuning(f.audioTuning),f.audioVolume!==void 0&&ra.setVolume(f.audioVolume),ra.updateParams(f))},[f.enableAudio,f.audioTuning,f.audioVolume]),O.useEffect(()=>{const G=setInterval(()=>{if(u&&c){const F=u.registerEngagement(1,0,0,c);j(V=>V===F?V:F)}},1200);return()=>clearInterval(G)},[u,c]);const P=O.useCallback((G,F)=>{if(!u||!c)return;const V=G>0?"zooming":F>0?"orbiting":"idle";U(fe=>fe!==V?V:fe),B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{U(fe=>fe!=="idle"?"idle":fe)},1200);const le=u.registerEngagement(.1,G,F,c);j(fe=>fe===le?fe:le)},[u,c]),ne=O.useCallback(()=>{if(!u)return;const G=performance.now();if(G-Q.current<180)return;Q.current=G;const F=u.stepHistory(1);H(F)},[u,H]),pe=O.useCallback(()=>{if(!u)return;const G=performance.now();if(G-Q.current<180)return;Q.current=G;const F=u.stepHistory(-1);H(F)},[u,H]),Le=O.useCallback(()=>{if(!u||!c)return;u.boostAffinity(c),j(100);const G=c.id;ue(F=>{const V=new Set(F);return V.has(G)?(V.delete(G),Z(le=>le.filter(fe=>fe.id!==G))):(V.add(G),Z(le=>[...le,c])),V})},[u,c]),Ee=O.useCallback(G=>{H(G)},[H]),Vt=O.useCallback(G=>{ue(F=>{const V=new Set(F);return V.delete(G),V}),Z(F=>F.filter(V=>V.id!==G))},[]),Aa=O.useCallback(G=>{if(!u)return;const F=u.breedNextSpecimen(G);H(F)},[u,H]),al=O.useCallback(()=>{if(!u)return;const G={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((c==null?void 0:c.generation)||1)+1,name:`Фенотип Инженера #${((c==null?void 0:c.generation)||1)+1}`,type:f.type,hybridType:f.hybridType||f.type,tertiaryType:f.tertiaryType||"riemannZeta",compositeOp:f.compositeOp,hybridBlend:f.hybridBlend??.35,tertiaryBlend:f.tertiaryBlend??.2,smoothK:f.smoothK,warpStrength:f.warpStrength,octaveLayers:f.octaveLayers,boxFold:f.boxFold,sphereFold:f.sphereFold,interiorCut:f.interiorCut,palette:f.customPalette||$t.find(F=>F.id===f.paletteId)||$t[0],iterations:f.iterations,phiMultiplier:f.phiMultiplier,morphSpeed:f.morphSpeed,glowIntensity:f.glowIntensity,zoom:f.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};y(G),u.boostAffinity(G),ra.getActive()&&ra.playSpecimenTransitionChord()},[u,f,c]),ll=O.useCallback(()=>{d(G=>({...G,enableAudio:!G.enableAudio}))},[]),Zt=O.useCallback(G=>{re(!1);const F=document.createElement("a");F.download=`golden-ratio-fractal-${f.type}-${(c==null?void 0:c.generation)||1}.png`,F.href=G,F.click()},[f.type,c==null?void 0:c.generation]),nl=O.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return i.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[i.jsx(lh,{params:f,onParamsChange:d,onTelemetryUpdate:Y,screenshotRequested:X,onScreenshotCaptured:Zt,forcedBackend:ee,onInteraction:P,onNextSpecimen:ne,onPrevSpecimen:pe,onEngineReady:()=>je(!0),scrollMode:Ke}),i.jsx(U2,{currentSpecimen:c,historyQueue:u.getHistory(),currentIndex:u.getCurrentIndex(),onSelectSpecimen:H,onNext:ne,onPrev:pe,renderStyle:f.renderStyle,onSelectRenderStyle:G=>d(F=>({...F,renderStyle:G})),scrollMode:Ke,onToggleScrollMode:()=>Xe(G=>G==="feed"?"zoom":"feed"),isOpen:de,onToggleOpen:()=>N(G=>!G)}),i.jsx(C2,{specimen:c,resonanceScore:_,isInteracting:C!=="idle",interactionType:C,onNext:ne,onPrev:pe,onFavorite:Le,onOpenProfile:()=>L(!0),enableAudio:f.enableAudio,onToggleAudio:ll,onOpenResearchModal:()=>q(!0),onOpenAtlas:()=>be(!0),isFeedOpen:de,onToggleFeed:()=>N(G=>!G),isCurrentLiked:c?W.has(c.id):!1}),i.jsx(B2,{params:f,onToggleProbe:()=>d(G=>({...G,probeActive:!G.probeActive})),onToggleMacro:()=>d(G=>({...G,macroMode:!G.macroMode}))}),i.jsx(E2,{isOpen:m,onClose:()=>L(!1),tasteProfile:u.getTasteProfile(),archetypeBreakdown:u.getArchetypeBreakdown(),currentSpecimen:c,resonanceScore:_,isEngineerMode:k,onToggleEngineerMode:()=>M(G=>!G),audioTuning:f.audioTuning||"phi432",onSelectAudioTuning:G=>d(F=>({...F,audioTuning:G})),onOpenManifest:()=>{L(!1),Qe(!0)},likedSpecimens:E,onPlayLiked:Ee,onRemoveLike:Vt,isCurrentLiked:c?W.has(c.id):!1}),k&&i.jsxs(i.Fragment,{children:[i.jsx(v2,{telemetry:T,targetFps:f.targetFps,phiMultiplier:f.phiMultiplier}),i.jsx(A2,{params:f,onParamsChange:d,onSelectFractalType:Aa,onCaptureScreenshot:()=>re(!0),onToggleFullscreen:nl,onToggleInfoModal:()=>q(!0),onOpenAtlasModal:()=>be(!0),activeBackend:T.backend,forcedBackend:ee,onSelectBackend:I,onClose:()=>M(!1),tasteProfile:u.getTasteProfile(),onSaveToFeed:al})]}),i.jsx(O2,{isOpen:b,onClose:()=>q(!1)}),i.jsx(L2,{isOpen:ve,onClose:()=>be(!1),onApplyPreset:G=>{d(F=>({...F,...G}))}}),i.jsx(q2,{isOpen:we,onClose:()=>Qe(!1),isFirstVisit:Ge,onOpenAtlas:()=>be(!0)}),i.jsx(k2,{isReady:ae,onFinished:x})]})}const cd=document.getElementById("root");cd&&Km.createRoot(cd).render(i.jsx(F2,{}));
